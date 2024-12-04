import { Elemental, css, passAlongProps } from "https://deno.land/x/elementalist@0.6.3/main/deno.js?code"
import { components, Column, Row, askForFiles, Code, Input, Button, Checkbox, Dropdown, popUp, cx, } from "https://deno.land/x/good_component@0.2.12/elements.js"
import { fadeIn, fadeOut } from "https://deno.land/x/good_component@0.2.12/main/animations.js"
import { showToast } from "https://deno.land/x/good_component@0.2.12/main/actions.js"
import { addDynamicStyleFlags, setupStyles, createCssClass, setupClassStyles, hoverStyleHelper, combineClasses, mergeStyles, AfterSilent, removeAllChildElements } from "https://deno.land/x/good_component@0.2.12/main/helpers.js"
import { zip, enumerate, count, permute, combinations, wrapAroundGet } from "https://deno.land/x/good@1.5.1.0/array.js"
import { deepCopy, deepCopySymbol, allKeyDescriptions, deepSortObject, shallowSortObject, isGeneratorObject,isAsyncIterable, isSyncIterable, isIterableTechnically, isSyncIterableObjectOrContainer, allKeys } from "https://deno.land/x/good@1.13.2.0/value.js"
import storageObject from "https://deno.land/x/storage_object@0.0.2.0/main.js"

// import {EditorView, basicSetup} from "https://esm.sh/codemirror@6.0.1?target=es2020&dev"
// import {keymap} from "https://esm.sh/v135/@codemirror/view@6.35.0/es2022/view.mjs?target=es2020&dev"
// import {EditorState, Prec} from "https://esm.sh/v135/@codemirror/state@6.4.1/es2022/state.mjs?target=es2020&dev"
// import * as Main from "https://esm.sh/codemirror@6.0.1?target=es2020&dev"
// import * as View from "https://esm.sh/v135/@codemirror/view@6.35.0/es2022/view.mjs?target=es2020&dev"
// import * as State from "https://esm.sh/v135/@codemirror/state@6.4.1/es2022/state.mjs?target=es2020&dev"

// console.debug(`Main is:`,Main)
// console.debug(`View is:`,View)
// console.debug(`State is:`,State)
// console.debug(`Prec is:`,Prec)

//     // r@https://esm.sh/v135/@codemirror/state@6.4.1/es2022/state.mjs:5:19486
// // import "https://esm.sh/v135/@codemirror/language@6.10.3/es2022/language.mjs"
// // import "https://esm.sh/v135/@codemirror/commands@6.7.1/es2022/commands.mjs"
// // import "https://esm.sh/v135/@codemirror/search@6.5.7/es2022/search.mjs"
// // import "https://esm.sh/v135/@codemirror/autocomplete@6.18.3/es2022/autocomplete.mjs"
// // import "https://esm.sh/v135/@codemirror/lint@6.8.3/es2022/lint.mjs"
// import {javascript} from "https://esm.sh/@codemirror/lang-javascript@6.0.1?target=es2020&dev"

// import { EditorView, basicSetup, View, State, Language, Commands, Search, Autocomplete, Lint } from "./codemirror.bundle.1.js"
// import { Main, View, State } from "./codemirror.bundle.2.js"
// const {EditorView, basicSetup} = Main
// const {keymap} = View
// const {EditorState, Prec} = State
import { Main, View, State, javascript } from "./codemirror.bundle.js"
const {EditorView, basicSetup} = Main
const {keymap} = View
const {EditorState, Prec} = State

// import {EditorView, basicSetup, keymap, EditorState, Prec, javascript } from "./codemirror.bundle.js"
// console.log(keymap)
// console.log(EditorState)
// {keymap} from "https://esm.sh/v135/@codemirror/view@6.35.0/es2022/view.mjs?target=es2020&dev"
// {EditorState, Prec} from "https://esm.sh/v135/@codemirror/state@6.4.1/es2022/state.mjs?target=es2020&dev"
// import {EditorView, basicSetup, keymap, EditorState, Prec} from "./codemirror.bundle.js"
// import {keymap} from "./codemirror.view.js"
// import {EditorState, Prec} from "./codemirror.state.js"

// const {keymap} = View
// const {EditorState, Prec} = State

// window.CM = CM
window.allKeys = allKeys
window.EditorView = EditorView


// let state = EditorState.create({extensions: [
//   dummyKeymap("A"),
//   dummyKeymap("B"),
//   Prec.high(dummyKeymap("C"))
// ]})

// import {EditorView} from "https://esm.sh/@codemirror@6.0.1/view"

// // This again produces an extension value
// let myBaseTheme = EditorView.baseTheme({
//   "&dark .cm-mySelector": { background: "dimgrey" },
//   "&light .cm-mySelector": { background: "ghostwhite" }
// })



const { html } = Elemental({
    ...components,
    Editor,
    Cell,
})

ext.thisOne = true 
function Editor({initialText, onChange, ...props}={}) {
    const initContainer = document.createElement("div")
    let editor = new EditorView({
        // state: EditorState.create({
        //     doc: initialText,
        //     extensions: [
        //         // basicSetup,
        //             // javascript(),
        //         // 
        //         // onChange
        //         // 
        //         ...(onChange ? [
        //             EditorView.updateListener.of(onChange),
        //         ] : []),
        //         // 
        //         // Ctrl-Enter hook
        //         // 
        //             // Prec.high(keymap.of([{
        //             //     key: "Ctrl-Enter",
        //             //     run() { console.log("Here"); return true }
        //             // }])),
        //     ],
        // }),
        doc: initialText,
        extensions: [
            basicSetup,
            javascript(),
            // 
            // onChange
            // 
            ...(onChange ? [
                EditorView.updateListener.of(onChange),
            ] : []),
            // 
            // Ctrl-Enter hook
            // 
            Prec.high(keymap.of([{
                key: "Ctrl-Enter",
                run() {
                    console.log("Here")
                    return true 
                },
            }]))
        ],
        parent: initContainer,
    })
    const element = initContainer.children[0]
    passAlongProps(element, props)
    element.editor = editor
    Object.defineProperties(element, {
        code: { get() { return editor.state.doc.text.join("\n") } },
    })
    window.editor = editor
    return element
}
function Cell() {
    return html`
        <Column class="cell">
            <Editor
                initialText="console.log('howdy')"
                onChange=${change=>{
                }}
                min-height=20rem min-width=20rem background-color=cornflowerblue
                >
            </Editor>
        </Column>
    `
}

document.body = html`
    <body font-size=15px background-color=whitesmoke overflow=scroll width=100vw>
        <Column>
            <Cell>
            </Cell>
        </Column>
    </body>
`