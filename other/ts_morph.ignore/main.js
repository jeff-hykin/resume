import { Project, ScriptTarget, SyntaxKind, Node } from "jsr:@ts-morph/ts-morph"
import "./other/ts_morph/pretty_print.js"
import { getExternals, recursive, getNodeId } from "./other/ts_morph/utils.js"

// var project = new Project()
var project = new Project({
    compilerOptions: {
        target: ScriptTarget.ES2022,
    },
})
project.manipulationSettings.set({ useTrailingCommas: true })
var file2 = project.createSourceFile(
    `delete_me_${Math.random()}.ts`,
    `
    import de from './main.js'
    import * as thing from './main.js'
    import { a } from './main.js'
    import { b as c, hh as f, d, e, default as c } from './main.b.js'

    // var { a : { d: f }} = { a: {d:10}}
    let { a : { d: g }} = { a: {d:10}}, c = 99
    f.prop = 77
    f.prop.prop2 = 77
    f["prop"] = 9=88
    console.log(__dirname)
    class A {

    }
    class B extends A {

    }
    function dd() {
        let f = "not the other f"
    }
`.replace(/\n    /g, "\n")
)

// project.addSourceFilesAtPaths("./**/*{.d.ts,.ts,.js,.mjs,.jsx,.tsx}")
// project.addSourceFilesAtPaths("/Users/jeffhykin/repos/resume/other/ts_morph.ignore/rollup/rollup/native.js")
// await project.save();
// var files = project.getSourceFiles()
// var file1 = project.getSourceFile("/Users/jeffhykin/repos/resume/other/ts_morph.ignore/rollup/rollup/native.js")
// var file = files[0]
// file.getFilePath()
// file.getFullText()
// file.getFullStart()
// file.getVariableStatements()
// file.getImportStringLiterals()
// file.getBaseName()
// file.getBaseNameWithoutExtension()
// file.getDirectory()
// file.getModule()
// file.getModules()
// file.getReferencingSourceFiles() // can be slow
// file.delete()
// file.getFunctions()
// file.getReferencingSourceFiles()

// var exportVar = file.getChildren()[0].getChildren()[0].getChildren()[0].getChildren()[0]
// var statement = file1.getStatements()[0]
// var varStatement = file1.getVariableStatements()[0]
// var identifiers = file1.getChildrenOfKind(SyntaxKind.Identifier)
// var identifier = identifiers[0]
// varStatement.getChildrenOfKind(SyntaxKind.Identifier)

getExternals(file2)
// var idents = recursive(file2, (node) => node).filter(each=>each.getKindName()=="Identifier")
// var requires = recursive(file1, (node) => node).filter(each=>each.getText().startsWith("require"))
// recursive(file1, (node) => node.getText().slice(0,30), {first: 50})
// var nodes = recursive(file1, (node) => node).filter(each=>each.getText().includes("require")).slice(0,50)
// nodes.sort((a,b)=>a.getText().length-b.getText().length)
// [...new Set(requires.map(each=>SyntaxKind[each.getKind()]))]
// var identifier = identifiers[0]
// var vars = [...new Set(identifiers.map(each=>each.print()))]
