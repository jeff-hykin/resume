import { Elemental } from "https://deno.land/x/elementalist@0.5.34/main/deno.js?code"
import { css, components, Column, Row, askForFiles, Code, Input, Button, Checkbox, Dropdown, popUp, cx, } from "https://deno.land/x/good_component@0.2.12/elements.js"
import { fadeIn, fadeOut } from "https://deno.land/x/good_component@0.2.12/main/animations.js"
import { showToast } from "https://deno.land/x/good_component@0.2.12/main/actions.js"
import { addDynamicStyleFlags, setupStyles, createCssClass, setupClassStyles, hoverStyleHelper, combineClasses, mergeStyles, AfterSilent, removeAllChildElements } from "https://deno.land/x/good_component@0.2.12/main/helpers.js"
import { zip, enumerate, count, permute, combinations, wrapAroundGet } from "https://deno.land/x/good@1.5.1.0/array.js"

import storageObject from "https://deno.land/x/storage_object@0.0.2.0/main.js"

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