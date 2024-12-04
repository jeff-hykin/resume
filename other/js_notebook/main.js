import { Elemental, css, passAlongProps } from "https://deno.land/x/elementalist@0.6.3/main/deno.js?code"
import { components, Column, Row, askForFiles, Code, Input, Button, Checkbox, Dropdown, popUp, cx, } from "https://deno.land/x/good_component@0.2.12/elements.js"
import { fadeIn, fadeOut } from "https://deno.land/x/good_component@0.2.12/main/animations.js"
import { showToast } from "https://deno.land/x/good_component@0.2.12/main/actions.js"
import { addDynamicStyleFlags, setupStyles, createCssClass, setupClassStyles, hoverStyleHelper, combineClasses, mergeStyles, AfterSilent, removeAllChildElements } from "https://deno.land/x/good_component@0.2.12/main/helpers.js"
import { zip, enumerate, count, permute, combinations, wrapAroundGet } from "https://deno.land/x/good@1.5.1.0/array.js"

import storageObject from "https://deno.land/x/storage_object@0.0.2.0/main.js"

import {EditorView, basicSetup} from "https://esm.sh/codemirror@6.0.1"
import {javascript} from "https://esm.sh/@codemirror/lang-javascript@6.0.1"

const { html } = Elemental({
    ...components,
    Editor,
    Cell,
})

function Editor({initialText, ...props}={}) {
    const initContainer = document.createElement("div")
    let editor = new EditorView({
        doc: initialText,
        extensions: [basicSetup, javascript()],
        parent: initContainer,
    })
    window.i = initContainer
    const element = initContainer.children[0]
    passAlongProps(element, props)
    console.debug(`props is:`,props)
    element.editor = editor
    window.editor = editor
    return element
}
function Cell() {
    return html`
        <Column class="cell">
            <Editor initialText="console.log('howdy')" min-height=20rem min-width=20rem background-color=cornflowerblue></Editor>
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