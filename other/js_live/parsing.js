import { Parser } from "https://esm.sh/acorn@8.10.0"
import { importAttributes } from "https://esm.sh/acorn-import-attributes@1.9.5"
import { convertJsCodeToBase64ImportString } from "https://deno.land/x/good@1.13.3.2/flattened/convert_js_code_to_base64_import_string.js"
const MyParser = Parser.extend(
    importAttributes
)

export function generateNewJs(code, websocketAddress) {
    const tree = MyParser.parse(code,  { sourceType: 'module', ecmaVersion: 2022 })
    let hoisted = []
    let newChunks = [
        `
        import { toRepresentation } from "https://deno.land/x/good@1.13.3.0/string.js"
        import * as _yaml from "https://deno.land/std@0.168.0/encoding/yaml.ts"
        const _socket = new WebSocket(${JSON.stringify(websocketAddress)})
        const _connection = new Promise((resolve, reject)=>{
            _socket.addEventListener("open", (event)=>{
                resolve(_socket)
            })
            _socket.addEventListener("error", (event)=>{
                reject(event)
            })
        })

        const _identifierLookup = {}
        const _dataByLineNumber = {}
        function _record(address, object, context) {
            let lineNumberHistory = (_dataByLineNumber[context.line]||=[])
            for (const [key, value] of Object.entries(object)) {
                const id = JSON.stringify([...address, key])
                let identifierHistory = (_identifierLookup[id]||=[])
                let entry = {key, context}
                try {
                    entry.repr = toRepresentation(value)
                } catch (error) {
                    
                }
                try {
                    entry.yaml = _yaml.stringify(value)
                } catch (error) {
                    
                }
                identifierHistory.push(entry)
                lineNumberHistory.push(entry)
            }
            if (Object.values(object).length == 1) {
                return Object.values(object)[0]
            }
            return object
        }
        `,
        hoisted,
    ]
    let endOfPreviousSlice = 0
    let lineNumber = 0
    let address = []
    for (let each of tree.body) {
        let postChunk = ``
        let newEnd = each.end
        const existingCode = code.slice(endOfPreviousSlice, newEnd)
        let lineNumberEndOfChunk = lineNumber + (existingCode.match(/\n/g)||[]).length
        if (each.type == "VariableDeclaration") {
            const names = each.declarations.map(each=>each.id.name)
            postChunk = `\n_record(${JSON.stringify(address)}, {${names.map(each=>`${each}`).join(",")}}, {line:${lineNumberEndOfChunk}})\n`
        } else if (each.type == "ImportDeclaration") {
            hoisted.push(existingCode)
            endOfPreviousSlice = newEnd
            continue
        } else {
            console.debug(`each.type is:`,each.type)
        }
        lineNumber = lineNumberEndOfChunk
        newChunks.push(existingCode)
        newChunks.push(postChunk)
        endOfPreviousSlice = newEnd
    }
    newChunks.push(`
        console.log(\`_dataByLineNumber\`, _dataByLineNumber)
        await _connection
        _socket.send(_yaml.stringify({
            from: "evalSystem",
            to: "web",
            dataByLineNumber: _dataByLineNumber,
        }))
    `)
    return newChunks.flat(0).join(`\n`)
}