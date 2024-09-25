function monkeyPatch(object, attrName, createNewFunction) {
    let prevObj = null
    while (!Object.getOwnPropertyNames(object).includes(attrName)) {
        prevObj = object
        object = Object.getPrototypeOf(object)
        if (prevObj === object) {
            throw new Error(`Could not find ${attrName} on ${object}`)
        }
    }
    const originalFunction = object[attrName]
    let theThis
    const wrappedOriginal = function(...args) {
        return originalFunction.apply(theThis, args)
    }
    const innerReplacement = createNewFunction(wrappedOriginal)
    object[attrName] = function(...args) {
        theThis = this
        return innerReplacement.apply(this, args)
    }
}

const allKeys = function(obj) {
    // from: https://stackoverflow.com/questions/8024149/is-it-possible-to-get-the-non-enumerable-inherited-property-names-of-an-object/70629468?noredirect=1#comment126513832_70629468
    let keys = []
    // super-primitives have no attributes
    if (obj == null) {
        return []
    }
    // normal primitives still have keys, just skip the first iteration
    if (!(obj instanceof Object)) {
        obj = Object.getPrototypeOf(obj)
    }
    while (obj) {
        keys = keys.concat(Reflect.ownKeys(obj))
        obj = Object.getPrototypeOf(obj)
    }
    return keys
}

const key = "anon-custom"
const anonKey = Symbol(key)
const privateKey = Symbol("private")
const allAttrs = new Set()
class AnonymousElementPlummbing extends HTMLElement {
    static get observedAttributes() {
        return [...allAttrs]
    }
    constructor() {
        super()
        this[privateKey] = {
            attrs: new Set()
        }
    }
    [anonKey](other) {
        // This is very imperfect, hence the proposal to let the engine do this properly
        const prototype = Object.getPrototypeOf(this)
        this[privateKey].attrs = new Set(prototype.observedAttributes)
        allAttrs.add(...this[privateKey].attrs)
        this[anonKey] = other
        const special = new Set(["connectedCallback", "disconnectedCallback", "adoptedCallback", "attributeChangedCallback", "constructor", "observedAttributes", anonKey, privateKey])
        for (const [key, each] of Object.entries(Object.getOwnPropertyDescriptors(prototype))) {
            if (special.has(each.key)) {
                continue
            }
            if (each.get instanceof Function) {
                each.get = each.get.bind(other)
            }
            if (each.set instanceof Function) {
                each.set = each.set.bind(other)
            }
            if (each.value instanceof Function) {
                each.value = each.value.bind(other)
            }
            Object.defineProperty(this, key, each)
        }
        const allOtherKeys = new Set(allKeys(other))
        for (const each of allKeys(this)) {
            if (special.has(each)) {
                continue
            }
            if (allOtherKeys.has(each)) {
                continue
            }
            try {
                other[each] = this[each]
                if (this[each] instanceof Function) {
                    other[each] = this[each].bind(this)
                }
            } catch (error) {
                console.log(`error ${String(each)}:`,error)
            }
        }
        return this
    }
    connectedCallback() {
        this[anonKey].connectedCallback()
    }
    disconnectedCallback() {
        this[anonKey].disconnectedCallback()
    }
    adoptedCallback() {
        this[anonKey].adoptedCallback()
    }
    attributeChangedCallback(name, oldValue, newValue) {
        if (this[privateKey].attrs.has(name)) {
            return this[anonKey].attributeChangedCallback(name, oldValue, newValue)
        }
    }
}
customElements.define(key, AnonymousElementPlummbing)
class AnonymousElement {
}

const convert = (node)=>{
    if (node instanceof AnonymousElement) {
        if (node[anonKey]) {
            return node[anonKey]
        }
        const elem = document.createElement(key)
        node[anonKey] = elem
        node = elem[anonKey](node)
    }
    return node
}

const convertAll = (original)=>(...nodes)=>original(...nodes.map(convert))
const el = document.createElement("div")
monkeyPatch(el, "appendChild", convertAll)
monkeyPatch(el, "append", convertAll)
monkeyPatch(el, "prepend", convertAll)
monkeyPatch(el, "replaceChildren", convertAll)
monkeyPatch(el, "replaceWith", convertAll)
monkeyPatch(el, "contains", convertAll)
monkeyPatch(el, "insertBefore", convertAll)
monkeyPatch(el, "isEqualNode", convertAll)
monkeyPatch(el, "isSameNode", convertAll)
monkeyPatch(el, "removeChild", convertAll)
monkeyPatch(el, "replaceChild", convertAll)

// 
// 
// usage
// 
// 
class MyElement extends AnonymousElement {
    constructor() {
        super()
    }
    connectedCallback() {
        console.log(`connected`)
        console.debug(`this.attachShadow is:`,this.attachShadow)
        const shadow = this.attachShadow({ mode: "open" })
        const message = document.createElement("span")
        message.innerHTML = "Hello World"
        shadow.appendChild(message)
    }
}

document.body.appendChild(new MyElement())

// considerations
// - .cloneNode()