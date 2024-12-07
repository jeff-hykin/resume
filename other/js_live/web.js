// yaml, and socket are defined

import { Elemental, passAlongProps } from "https://esm.sh/gh/jeff-hykin/elemental@0.6.3/main/deno.js"
import { css, components, Column, Row, askForFiles, Code, Input, Button, Checkbox, Dropdown, popUp, cx, } from "https://esm.sh/gh/jeff-hykin/good-component@0.2.12/elements.js"
import { fadeIn, fadeOut } from "https://esm.sh/gh/jeff-hykin/good-component@0.2.12/main/animations.js"
import { showToast } from "https://esm.sh/gh/jeff-hykin/good-component@0.2.12/main/actions.js"
import { addDynamicStyleFlags, setupStyles, createCssClass, setupClassStyles, hoverStyleHelper, combineClasses, mergeStyles, AfterSilent, removeAllChildElements } from "https://esm.sh/gh/jeff-hykin/good-component@0.2.12/main/helpers.js"
import { zip, enumerate, count, permute, combinations, wrapAroundGet } from "https://esm.sh/gh/jeff-hykin/good-js@1.5.1.0/source/array.js"

import storageObject from "https://esm.sh/gh/jeff-hykin/storage-object@0.0.2.0/main.js"

const { html } = Elemental({
    ...components,
})

document.body = html`
    <body font-size=15px background-color=whitesmoke overflow=scroll width=100vw>
        <Column>
            <span>Howdy!</span>
            <span>Howdy!</span>
            <span>Howdy!</span>
        </Column>
    </body>
`

showToast("Hello World!")