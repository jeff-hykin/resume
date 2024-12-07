// yaml, and socket are defined

import { Elemental, passAlongProps } from "https://esm.sh/gh/jeff-hykin/elemental@0.6.3/main/deno.js"
import { css, components, Column, Row, askForFiles, Code, Input, Button, Checkbox, Dropdown, popUp, cx, } from "https://esm.sh/gh/jeff-hykin/good-component@0.2.12/elements.js"
import { fadeIn, fadeOut } from "https://esm.sh/gh/jeff-hykin/good-component@0.2.12/main/animations.js"
import { showToast } from "https://esm.sh/gh/jeff-hykin/good-component@0.2.12/main/actions.js"
import { addDynamicStyleFlags, setupStyles, createCssClass, setupClassStyles, hoverStyleHelper, combineClasses, mergeStyles, AfterSilent, removeAllChildElements } from "https://esm.sh/gh/jeff-hykin/good-component@0.2.12/main/helpers.js"
import { zip, enumerate, count, permute, combinations, wrapAroundGet } from "https://esm.sh/gh/jeff-hykin/good-js@1.5.1.0/source/array.js"

import storageObject from "https://esm.sh/gh/jeff-hykin/storage-object@0.0.2.0/main.js"

import CM from 'https://esm.sh/gh/jeff-hykin/codemirror_esm@0.0.2.0/main.js'
import atomOne from 'https://esm.sh/gh/jeff-hykin/codemirror_esm@0.0.2.0/themes/atomone.js'

const { basicSetup } = CM["codemirror"]
const { EditorView, keymap } = CM["@codemirror/view"]
const { EditorState, Prec } = CM["@codemirror/state"]
const { javascript } = CM["@codemirror/lang-javascript"]
const { tags: t } = CM['@lezer/highlight']
const { themeToExtension } = CM["@jeff-hykin/theme-tools"]

const { html } = Elemental({
    ...components,
    Editor,
    DataLine,
})

let lineHeight = `1.5em`
let latestCode
let editorElement
let dataElement
document.body = html`
    <body font-size=15px background-color=whitesmoke overflow=scroll width=100vw padding=0 margin=0 font-family=monospace>
        <Row>
            ${editorElement=html`
                <Editor initialText="console.log('howdy')\n\n\n\n" width=50vw />
            `}
            ${dataElement=html`
                <div />
            `}
        </Row>
    </body>
`

socket.addEventListener("open",()=>{
    console.debug("connected")
})

socket.addEventListener("message",(message,...args)=>{
    const data = yaml.parse(message.data)
    if (data.latestCode) {
        latestCode = data.latestCode
        // inefficient, but it works 
        editorElement.replaceWith(html`<Editor initialText="${data.latestCode}" width=50vw />`)
        // editorElement.code = data.latestCode
    } else if (data.dataByLineNumber) {
        window.dataByLineNumber = data.dataByLineNumber
        console.debug(`dataByLineNumber is:`,data.dataByLineNumber)
        dataElement.replaceWith(dataToLines(data.dataByLineNumber))
    } else {
        console.debug(`data is:`,data)
    }
})


// 
// 
// Components
// 
// 
    function DataLine(lineHistory) {
        const element = html`<div height=var(--line-height)></div>`
        const mostRecentEntry = (lineHistory.at(-1)||[])
        element.append(html`<span background-color=white border-radius=1rem margin-right=1rem opacity=${lineHeight.length>1?0:1}>(${lineHistory.length})</span>`)
        for (const [key, value] of Object.entries(mostRecentEntry)) {
            element.append(html`<span>${key}: <span color="aquamarine">${value.repr}</span>, </span>`)
        }
        return element
    }
    function dataToLines(dataByLineNumber) {
        let out = html`<div style="--line-height:${lineHeight}" background-color=gray display=flex flex-direction=column flex-grow=1></div>`
        let index = -1
        while (++index < latestCode.split(/\n/g).length) {
            const lineHistory = (dataByLineNumber[index]||[])
            out.append(DataLine(lineHistory))
        }
        return out
    }
    function Editor({initialText, onChange, onRun, ...props}={}) {
        const parent = document.createElement("div")
        let editor = new EditorView({
            parent,
            state: EditorState.create({
                doc: initialText,
                extensions: [
                    basicSetup, // ctrl+z = undo, and other stuff like that
                    javascript(), // highlighting hooks
                    
                    // 
                    // theme choice
                    // 
                    themeToExtension(
                        atomOne({
                            variant:"dark", // "light" | "dark"
                            settings:{
                                // can override defaults:
                                // background: 'hsl(286, 60%, 67%)',
                                // foreground: 'hsl(286, 60%, 67%)',
                                // caret: '#e06c75',
                                // selection: '#e06c75',
                                // lineHighlight: '#e06c75',
                                // gutterBackground: '#e06c75',
                                // gutterForeground: '#e06c75',
                            },
                            styles:[], // styles to add to the theme
                            mutateThemeStyles:(style)=>style, // return null to remove a style entry from the theme
                        })
                    ),
                    
                    // // 
                    // // example: onChange
                    // // 
                    // EditorView.updateListener.of((update)=>{
                    //     // const codeString = editor.state.doc.text.join("\n")
                    //     // console.log("Something (no matter how small) happened!")
                    //     // console.log("I'm called on init, and twice per keypress")
                    //     // console.log("DON'T USE THIS UNLESS YOU HAVE TO!")
                    // })
                ],
            }),
        })
        const element = parent.children[0]
        passAlongProps(element, props)
        element.editor = editor
        Object.defineProperties(element, {
            code: { get() { return editor.state.doc.text.join("\n") } },
        })
        window.editor = editor
        console.debug(`props is:`,props)
        if (props.width) {
            parent.children[0].style.width = props.width
        }
        return element
    }