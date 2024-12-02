// import * as pyodideModule from "https://esm.sh/pyodide@0.26.4/pyodide.js"
import { loadPyodide, _dynamicFetchShim } from "./pyodide.web.js"
import { zipTemplateArgs } from "https://deno.land/x/good@1.13.1.0/flattened/zip_template_args.js"

// TODO:
    // record method for downloading packages

var pyodide = await loadPyodide() // this is used as an init

class PythonClass {
    exec(maybeStrings, ...args) {
        // 
        // template support
        // 
        let asStringArg
        const isTemplateCallProbably = maybeStrings instanceof Array && maybeStrings.length-1 == args.length
        const injectedVarValues = {}
        if (isTemplateCallProbably) {
            const chunks = []
            let index = -1
            for (const each of args) {
                index++
                chunks.push(maybeStrings[index])
                // here's where to handle custom logic on interpolated args
                const randomVarName = "_injected_var_"+(`${Math.random()}`.slice(2))
                injectedVarValues[randomVarName] = each
                //each
                chunks.push(randomVarName)
            }
            chunks.push(maybeStrings[index+1])
            asStringArg = chunks.join("")
        } else {
            asStringArg = [maybeStrings, ...args].join("")
        }
        pyodide.globals.update(pyodide.toPy(injectedVarValues))
        return this.pyodide.runPythonAsync(asStringArg)
    }
}
async function Python({packages}) {
    const that = this || new Python({})
    this.packages = packages
    this.pyodide = await loadPyodide()
    for (const each of packages) {
        if (each.name && each.sources) {
            for (const each of each.sources) {
                _dynamicFetchShim.fetchSource[each.subpath] = {data: each.data, contentType: each.contentType||"application/wasm"}
            }
            pyodide.loadPackage(each.name)
        } else {
            pyodide.loadPackage(each)
        }
    }
    return that
}

// for await (const line of readLines(Deno.stdin)) {
//     let input;
//     try {
//         input = JSON.parse(line);
//     } catch (error) {
//         console.log(JSON.stringify({ error: "Invalid JSON input: " + error.message }));
//         continue;
//     }

//     if (typeof input !== 'object' || input === null) {
//         console.log(JSON.stringify({ error: "Input is not a JSON object" }));
//         continue;
//     }

//     if (input.shutdown) {
//         break;
//     }

//     let output;
//     try {
//         const result = await pyodide.runPythonAsync(input.code || "");
//         output = JSON.stringify({ output: result });
//     } catch (error) {
//         output = JSON.stringify({ error: error.message.trim().split('\n').pop() || ''});
//     }
//     console.log(output);
// }