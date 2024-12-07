
        import { toRepresentation } from "https://deno.land/x/good@1.13.3.0/string.js"
        import * as _yaml from "https://deno.land/std@0.168.0/encoding/yaml.ts"
        const _socket = new WebSocket("ws://localhost:8080")
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
                let entry = {context}
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
        

var a = 10,b,c=2

_record([], {a,b,c}, {line:0})


// import {g} from "./test.js"
function f(a,b,c){



    
    return a+b+c
}


console.log("Hello World!")


var howd

_record([], {howd}, {line:10})


        await _connection
        _socket.send(_yaml.stringify({
            type: "update",
            data: _dataByLineNumber,
        }))
    