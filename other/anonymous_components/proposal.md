# Anonymous Custom Elements

Author: [Jeff Hykin](https://github.com/jeff-hykin)

## Introduction

This proposal tries to solve the same problem as [Custom Element Registrys](https://github.com/WICG/webcomponents/issues/716), but with a smaller more actionable solution. This is accomplished by providing a complete set of behaviors for how unregistered custom elements might be created, rendered, and manipulated on a page.

### Why is this proposal needed?

I cannot improve on @justinfagnani's explaination, so I will simply quote it here:

> It's quite common for web applications to contain libraries from multiple sources, whether from different teams, vendors, package managers, etc. These libraries must currently contend for the global shared resource that is the `CustomElementRegistry`. If more than one library (or more than one instance of a library) tries to define the same tag name, the application will fail. 

> Multiple versions of a library is a common source of this problem. This can happen for many reasons, but there are a few application/library types where this is common:

> 1. **Any sized applications using npm:** NPM may install multiple versions of a library if it can't find a single version that satisfies version constraints (and it many cases where it could, but doesn't because of its lack of a version constraint solver). Thus an application may contain multiple definitions of a tag name from the same library, but at different versions.
> 2. **Large, complex applications:** These can have components authored by different teams, with loose coordination between them, built and deployed to production at different times. This makes library duplication in production common.
> 3. **Applications with plug-in architectures:** Some applications that allow plug-ins will run plug-ins in the main window. The application and plug-ins will typically be built and distributed independently. If the application and plug-in use the same component, they will have contention for the tag name.
> 4. **Browser Extensions:** Many browser extensions create DOM to be displayed in the main page. If this DOM is created with custom elements, they will need to be registered and could conflict with the page's scripts.

> In addition to library duplication, there are other common use-cases for scopes:

> 1. **Third-party, CDN-hosted libraries:** Libraries like social-media share buttons and embeds, maps and documentation viewers, etc., can vend complex UI widgets that may need to register many elements, and they should not be using up a global namespace that they don't fully control.
> 2. **Internal implementation elements:** A component may have private internal elements that it needs to register, but would prefer not to leak to the external environment.

## Overview: How might anonymous components solve the problem?

What this proposal does *not* do is as important as what it does.
In particular the proposal does not:
- Allow anonymous custom elements to be used directly in an HTML document
- Allow anonymous custom elements to be instantiated with `document.createElement()`
- Allow anonymous custom elements to be instantiated using .innerHTML or similar string based APIs

(Future proposals may adresss this but this proposal does not)

The core aspects of this proposal are:
- Unregisted custom elements may be constructed using `new`
- The resulting element will all have the same tag name, such as `anonymous` or `custom`
- Relevent DOM API's, such as appendChild, shall accept anonymous components

```js
class MyElement1 extends HTMLElement {
  static observedAttributes = ["size"];
  constructor() {
    super();
    this.setAttribute("size", "20");
  }

  connectedCallback() {
    const shadow = this.attachShadow({ mode: "open" });
    const message = document.createElement("span");
    message.innerHTML = "Hello World 1";

    shadow.appendChild(message);
  }
}

class MyElement2 extends HTMLElement {
  static observedAttributes = ["size"];
  constructor() {
    super();
    this.setAttribute("size", "20");
  }

  connectedCallback() {
    const shadow = this.attachShadow({ mode: "open" });
    const message = document.createElement("span");
    message.innerHTML = "Hello World 2";

    shadow.appendChild(message);
  }
}

document.body.appendChild(new MyElement1())
document.body.appendChild(new MyElement1())
document.body.innerHTML 
`<anonymous size="10"><span>Hello World 1</span></anonymous>
<anonymous size="20"><span>Hello World 2</span></anonymous>`
```

