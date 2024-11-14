import { Project, ScriptTarget, SyntaxKind, Node } from "jsr:@ts-morph/ts-morph"

// var project = new Project()
const project = new Project({
    compilerOptions: {
        target: ScriptTarget.ES2022,
    },
})
project.manipulationSettings.set({ useTrailingCommas: true })
var file0 = project.createSourceFile(`delete_me_${Math.random()}.ts`, "const requireWithFriendlyError = id => {}")
// var filePrototype = Object.getPrototypeOf(file0)
const nodePrototype = Object.getPrototypeOf(file0.getChildren()[0])
const statementProto = Object.getPrototypeOf(file0.getChildren()[0].getChildren()[0])
const otherProto = Object.getPrototypeOf(file0.getChildren()[1])
otherProto[Symbol.for("Deno.customInspect")] =
    statementProto[Symbol.for("Deno.customInspect")] =
    nodePrototype[Symbol.for("Deno.customInspect")] =
        function (inspect, ...args) {
            let kind = "Node",
                start,
                end,
                childCount
            try {
                kind = SyntaxKind[this.getKind()]
                start = this.getStart()
                end = this.getEnd()
                childCount = this.getChildren().length
            } catch (error) {}
            const text = inspect(this.getText(), ...args)
            if (text.includes("\n")) {
                return `${kind}({childCount:${inspect(childCount)}, start:${inspect(start)}, end:${inspect(end)}, parent: ${this.getParent().getKindName()}, text:${text}\n${" ".repeat(args[0].indentationLvl)}})`
            } else {
                return `${kind}({childCount:${inspect(childCount)}, start:${inspect(start)}, end:${inspect(end)}, parent: ${this.getParent().getKindName()}, text:${text}})`
            }
        }

// for (let each of [otherProto, statementProto, nodePrototype]) {
//     Object.defineProperties(each, {
//         c: {
//             get() {
//                 return this.getChildren()
//             },
//         },
//     }),
//         0
//     Object.defineProperties(each, {
//         0: {
//             get() {
//                 return this.getChildren()[0]
//             },
//         },
//         1: {
//             get() {
//                 return this.getChildren()[1]
//             },
//         },
//         2: {
//             get() {
//                 return this.getChildren()[2]
//             },
//         },
//         3: {
//             get() {
//                 return this.getChildren()[3]
//             },
//         },
//         4: {
//             get() {
//                 return this.getChildren()[4]
//             },
//         },
//         5: {
//             get() {
//                 return this.getChildren()[5]
//             },
//         },
//         6: {
//             get() {
//                 return this.getChildren()[6]
//             },
//         },
//         7: {
//             get() {
//                 return this.getChildren()[7]
//             },
//         },
//         8: {
//             get() {
//                 return this.getChildren()[8]
//             },
//         },
//         9: {
//             get() {
//                 return this.getChildren()[9]
//             },
//         },
//         10: {
//             get() {
//                 return this.getChildren()[10]
//             },
//         },
//     }),
//         0
// }
