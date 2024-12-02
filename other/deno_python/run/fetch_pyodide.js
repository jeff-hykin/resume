import { FileSystem, glob } from "https://deno.land/x/quickr@0.6.72/main/file_system.js"
import { run, hasCommand, throwIfFails, zipInto, mergeInto, returnAsString, Timeout, Env, Cwd, Stdin, Stdout, Stderr, Out, Overwrite, AppendTo, } from "https://deno.land/x/quickr@0.6.72/main/run.js"
import { Console, clearAnsiStylesFrom, black, white, red, green, blue, yellow, cyan, magenta, lightBlack, lightWhite, lightRed, lightGreen, lightBlue, lightYellow, lightMagenta, lightCyan, blackBackground, whiteBackground, redBackground, greenBackground, blueBackground, yellowBackground, magentaBackground, cyanBackground, lightBlackBackground, lightRedBackground, lightGreenBackground, lightYellowBackground, lightBlueBackground, lightMagentaBackground, lightCyanBackground, lightWhiteBackground, bold, reset, dim, italic, underline, inverse, strikethrough, gray, grey, lightGray, lightGrey, grayBackground, greyBackground, lightGrayBackground, lightGreyBackground, } from "https://deno.land/x/quickr@0.6.72/main/console.js"

const pythonModuleSources = [
    "https://cdn.jsdelivr.net/pyodide/v0.26.4/full/micropip-0.6.0-py3-none-any.whl",
    "https://cdn.jsdelivr.net/pyodide/v0.26.4/full/packaging-23.2-py3-none-any.whl",
    "https://cdn.jsdelivr.net/pyodide/v0.26.4/full/numpy-1.26.4-cp312-cp312-pyodide_2024_0_wasm32.whl",
    "https://cdn.jsdelivr.net/pyodide/v0.26.4/full/pandas-2.2.0-cp312-cp312-pyodide_2024_0_wasm32.whl",
    "https://cdn.jsdelivr.net/pyodide/v0.26.4/full/python_dateutil-2.9.0.post0-py2.py3-none-any.whl",
    "https://cdn.jsdelivr.net/pyodide/v0.26.4/full/six-1.16.0-py2.py3-none-any.whl",
    "https://cdn.jsdelivr.net/pyodide/v0.26.4/full/pytz-2024.1-py2.py3-none-any.whl",
    "https://cdn.jsdelivr.net/pyodide/v0.26.4/full/scipy-1.12.0-cp312-cp312-pyodide_2024_0_wasm32.whl",
    "https://cdn.jsdelivr.net/pyodide/v0.26.4/full/openblas-0.3.26.zip",
    "https://cdn.jsdelivr.net/pyodide/v0.26.4/full/regex-2024.4.16-cp312-cp312-pyodide_2024_0_wasm32.whl",
    "https://cdn.jsdelivr.net/pyodide/v0.26.4/full/sympy-1.12-py3-none-any.whl",
    "https://cdn.jsdelivr.net/pyodide/v0.26.4/full/mpmath-1.3.0-py3-none-any.whl",
    "https://cdn.jsdelivr.net/pyodide/v0.26.4/full/matplotlib-3.5.2-cp312-cp312-pyodide_2024_0_wasm32.whl",
    "https://cdn.jsdelivr.net/pyodide/v0.26.4/full/cycler-0.12.1-py3-none-any.whl",
    "https://cdn.jsdelivr.net/pyodide/v0.26.4/full/fonttools-4.51.0-py3-none-any.whl",
    "https://cdn.jsdelivr.net/pyodide/v0.26.4/full/kiwisolver-1.4.5-cp312-cp312-pyodide_2024_0_wasm32.whl",
    "https://cdn.jsdelivr.net/pyodide/v0.26.4/full/numpy-1.26.4-cp312-cp312-pyodide_2024_0_wasm32.whl",
    "https://cdn.jsdelivr.net/pyodide/v0.26.4/full/packaging-23.2-py3-none-any.whl",
    "https://cdn.jsdelivr.net/pyodide/v0.26.4/full/pillow-10.2.0-cp312-cp312-pyodide_2024_0_wasm32.whl",
    "https://cdn.jsdelivr.net/pyodide/v0.26.4/full/pyparsing-3.1.2-py3-none-any.whl",
    "https://cdn.jsdelivr.net/pyodide/v0.26.4/full/matplotlib_pyodide-0.2.2-py3-none-any.whl",
    "https://cdn.jsdelivr.net/pyodide/v0.26.4/full/setuptools-69.5.1-py3-none-any.whl",
    "https://cdn.jsdelivr.net/pyodide/v0.26.4/full/scikit_image-0.23.2-cp312-cp312-pyodide_2024_0_wasm32.whl",
    "https://cdn.jsdelivr.net/pyodide/v0.26.4/full/networkx-3.3-py3-none-any.whl",
    "https://cdn.jsdelivr.net/pyodide/v0.26.4/full/decorator-5.1.1-py3-none-any.whl",
    "https://cdn.jsdelivr.net/pyodide/v0.26.4/full/imageio-2.34.1-py3-none-any.whl",
    "https://cdn.jsdelivr.net/pyodide/v0.26.4/full/pywavelets-1.6.0-cp312-cp312-pyodide_2024_0_wasm32.whl",
    "https://cdn.jsdelivr.net/pyodide/v0.26.4/full/lazy_loader-0.4-py3-none-any.whl",
    "https://cdn.jsdelivr.net/pyodide/v0.26.4/full/scikit_learn-1.4.2-cp312-cp312-pyodide_2024_0_wasm32.whl",
    "https://cdn.jsdelivr.net/pyodide/v0.26.4/full/joblib-1.4.0-py3-none-any.whl",
    "https://cdn.jsdelivr.net/pyodide/v0.26.4/full/threadpoolctl-3.4.0-py3-none-any.whl",
    "https://cdn.jsdelivr.net/pyodide/v0.26.4/full/opencv_python-4.9.0.80-cp312-cp312-pyodide_2024_0_wasm32.whl",
    "https://cdn.jsdelivr.net/pyodide/v0.26.4/full/ipython-8.23.0-py3-none-any.whl",
    "https://cdn.jsdelivr.net/pyodide/v0.26.4/full/asttokens-2.4.1-py2.py3-none-any.whl",
    "https://cdn.jsdelivr.net/pyodide/v0.26.4/full/executing-2.0.1-py2.py3-none-any.whl",
    "https://cdn.jsdelivr.net/pyodide/v0.26.4/full/matplotlib_inline-0.1.7-py3-none-any.whl",
    "https://cdn.jsdelivr.net/pyodide/v0.26.4/full/traitlets-5.14.3-py3-none-any.whl",
    "https://cdn.jsdelivr.net/pyodide/v0.26.4/full/prompt_toolkit-3.0.43-py3-none-any.whl",
    "https://cdn.jsdelivr.net/pyodide/v0.26.4/full/pure_eval-0.2.2-py3-none-any.whl",
    "https://cdn.jsdelivr.net/pyodide/v0.26.4/full/pygments-2.17.2-py3-none-any.whl",
    "https://cdn.jsdelivr.net/pyodide/v0.26.4/full/stack_data-0.6.3-py3-none-any.whl",
    "https://cdn.jsdelivr.net/pyodide/v0.26.4/full/sqlite3-1.0.0.zip",
    "https://cdn.jsdelivr.net/pyodide/v0.26.4/full/wcwidth-0.2.13-py2.py3-none-any.whl",
]
const [mainCode, asmCode, wasmCode, pythonStdlib, pyodideLockJson, ...pythonModules ] = await Promise.all([
    fetch("https://cdn.jsdelivr.net/npm/pyodide@0.26.4/pyodide.js").then(r => r.text()),
    fetch("https://cdn.jsdelivr.net/npm/pyodide@0.26.4/pyodide.asm.js").then(r => r.text()),
    fetch("https://cdn.jsdelivr.net/npm/pyodide@0.26.4/pyodide.asm.wasm").then(r => r.arrayBuffer()),
    fetch("https://cdn.jsdelivr.net/npm/pyodide@0.26.4/python_stdlib.zip").then(r => r.arrayBuffer()),
    fetch("https://cdn.jsdelivr.net/npm/pyodide@0.26.4/pyodide-lock.json").then(r => r.text()),
    // python modules
    ...pythonModuleSources.map(each => fetch(each).then(async (r) => [each, await r.arrayBuffer()])),
])

const target = FileSystem.normalize(`${FileSystem.thisFolder}/..`)
let promises = []
promises.push(FileSystem.write({
    path: `${target}/pyodide.asm.wasm.binaryified.js`,
    data: `export default new Uint8Array([${new Uint8Array(wasmCode)}])`,
}))

promises.push(FileSystem.write({
    path: `${target}/python_stdlib.zip.binaryified.js`,
    data: `export default new Uint8Array([${new Uint8Array(pythonStdlib)}])`,
}))

promises.push(FileSystem.write({
    path: `${target}/pyodide-lock.json.js`,
    data: `export default ${JSON.stringify(pyodideLockJson)}`,
}))

for (const [url, bytes] of pythonModules) {
    const name = url.split("/").pop().split("-").slice(0, 2).join("--").replace(/-|\./g, "_")
    promises.push(
        FileSystem.write({
            path: `${target}/packages/${name}.js`,
            data: `export default new Uint8Array([${new Uint8Array(bytes)}])`,
        })
    )
}

promises.push(

    FileSystem.write({
        path: `${target}/pyodide.web.js`,
        data: `
            import { _createPyodideModule } from "./pyodide.asm.js"
            import pyodideLockJsonString from "./pyodide-lock.json.js"
            import wasmData from "./pyodide.asm.wasm.binaryified.js"
            import zipData from "./python_stdlib.zip.binaryified.js"

            let window = {prompt: globalThis.prompt, sessionStorage: null,  }
            let document = {}
            document.createElement = ()=>0
            let process,Deno
            const original = globalThis.fetch
            export const _dynamicFetchShim = {
                fetchSource: {
                    "/python_stdlib.zip": {
                        data: zipData,
                        contentType: "application/zip",
                    },
                    "/pyodide.asm.wasm": {
                        data: wasmData,
                        contentType: "application/wasm",
                    },
                    "/pyodide-lock.json": {
                        data: pyodideLockJsonString,
                        contentType: "application/json",
                    },
                }
                fetchShim(original, url, options) {
                    url = new URL(url)
                    const fileName = url.pathname.split("/").slice(-1)[0]
                    for (const [key, cannedResponse] of Object.entries(_fetchSource).reverse()) {
                        if (fileName.endsWith(key)) {
                            return Promise.resolve(new Response(cannedResponse.data, {
                                headers: {
                                    "Content-Type": cannedResponse.contentType,
                                },
                            }))
                        }
                    }
                    return original(url, options)
                },
            }
            function fetch(...args) {
                return _dynamicFetchShim.fetchShim(original, ...args)
            }
        \n${
            mainCode.replace(
                /globalThis\.loadPyodide *= *loadPyodide\.loadPyodide/, "var $loadPyodide = loadPyodide.loadPyodide; export { $loadPyodide as loadPyodide }"
            ).replace(
                /globalThis\.loadPyodide *=([^;\n]*)/, ""
            )
        }`,
    })
)
promises.push(
    FileSystem.write({
        path: `${target}/pyodide.asm.js`,
        data: asmCode.replace(/globalThis\._createPyodideModule = _createPyodideModule/g, "export { _createPyodideModule }").replace(
                /var _createPyodideModule/, `
                    let window = {prompt: globalThis.prompt, sessionStorage: null,  }
                    let document = {}
                    document.createElement = ()=>0
                    let process,Deno
                    var _createPyodideModule
                `
            ),
    })
)
await Promise.all(promises)