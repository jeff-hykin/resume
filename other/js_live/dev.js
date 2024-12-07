// 
// args
// 
    import { parseArgs, flag, required, initialValue } from "https://deno.land/x/good@1.13.3.0/flattened/parse_args.js"
    import { didYouMean } from "https://deno.land/x/good@1.13.3.0/flattened/did_you_mean.js"
    import $ from "https://deno.land/x/dax@0.39.2/mod.ts"
    const $$ = (...args)=>$(...args).noThrow()

    const argsInfo = parseArgs({
        rawArgs: Deno.args,
        fields: [
            [["--debug", "-d", ], flag, ],
            [[0, "--file"], required, (str)=>str],
            [["--port"], initialValue(`8080`), (str)=>str],
            [["--address"], initialValue(`localhost`), (str)=>str],
        ],
        namedArgsStopper: "--",
        allowNameRepeats: true,
        valueTransformer: JSON.parse,
        isolateArgsAfterStopper: false,
        argsByNameSatisfiesNumberedArg: true,
        implicitNamePattern: /^(--|-)[a-zA-Z0-9\-_]+$/,
        implictFlagPattern: null,
    })
    didYouMean({
        givenWords: Object.keys(argsInfo.implicitArgsByName).filter(each=>each.startsWith(`-`)),
        possibleWords: Object.keys(argsInfo.explicitArgsByName).filter(each=>each.startsWith(`-`)),
        autoThrow: true,
        suggestionLimit: 1,
    })
    const args = argsInfo.simplifiedNames

// 
// parsing JS
// 
    import { FileSystem, glob } from "https://deno.land/x/quickr@0.6.72/main/file_system.js"
    import { run, hasCommand, throwIfFails, zipInto, mergeInto, returnAsString, Timeout, Env, Cwd, Stdin, Stdout, Stderr, Out, Overwrite, AppendTo, } from "https://deno.land/x/quickr@0.6.72/main/run.js"
    import { Console, clearAnsiStylesFrom, black, white, red, green, blue, yellow, cyan, magenta, lightBlack, lightWhite, lightRed, lightGreen, lightBlue, lightYellow, lightMagenta, lightCyan, blackBackground, whiteBackground, redBackground, greenBackground, blueBackground, yellowBackground, magentaBackground, cyanBackground, lightBlackBackground, lightRedBackground, lightGreenBackground, lightYellowBackground, lightBlueBackground, lightMagentaBackground, lightCyanBackground, lightWhiteBackground, bold, reset, dim, italic, underline, inverse, strikethrough, gray, grey, lightGray, lightGrey, grayBackground, greyBackground, lightGrayBackground, lightGreyBackground, } from "https://deno.land/x/quickr@0.6.72/main/console.js"

    import { generateNewJs } from "./parsing.js"
    const websocketAddress = `ws://${args.address}:${args.port}`
    let latestCode, latestMessageForWeb
    async function updateLatestCode() {
        latestCode = await FileSystem.read(args.file)
        const generatedCode = generateNewJs(await FileSystem.read(args.file), websocketAddress)
        broadcast(yaml.stringify({latestCode}))
        const outputPath = args.file+".out.js"
        FileSystem.write({
            path: outputPath,
            data: generatedCode,
        }).then(async ()=>{
            try {
                console.log(`running deno run -A ${outputPath}`)
                const result = await $$`deno run -A ${outputPath}`
            } catch (error) {
                console.debug(`error is:`,error)
            }
        })
    }
    updateLatestCode()
    

// 
// socket setup
// 
    let allSockets = []
    const broadcast = (data)=>{
        for (const each of allSockets) {
            each.send(data)
        }
    }
    const onReceive = (event, socket) => {
        const data = yaml.parse(event.data)
        if (data.to == "web" && data.from == "evalSystem") {
            latestMessageForWeb = event.data
            broadcast(event.data)
        }
    }
    Deno.serve(
        { port: args.port, hostname: args.address },
        async (req) => {

            // 
            // normal server response
            // 
            if (req.headers.get("upgrade") != "websocket") {
                const url = new URL(req.url)
                const path = url.pathname
                
                // server yaml.js library
                if (path.match(/\/?yaml.js$/)) {
                    return new Response(await FileSystem.read(`${FileSystem.thisFolder}/yaml.js`), { status: 200, headers: { "Content-Type": "text/javascript" } })
                }
                
                // follow up with latestCode
                setTimeout(() => {
                    broadcast(yaml.stringify({latestCode}))
                    if (latestMessageForWeb) {
                        broadcast(latestMessageForWeb)
                    }
                }, 0)
                // index.html
                return new Response(
                    `<!DOCTYPE html>
                        <html lang="en">
                        <head>
                            <meta charset="UTF-8">
                            <meta name="viewport" content="width=device-width, initial-scale=1.0">
                            <title>Document</title>
                        </head>
                        <body>
                        </body>
                        <script type="module">
                            import * as yaml from "./yaml.js"
                            let socket = new WebSocket("${websocketAddress}")
                            window.socket = socket
                            ${await FileSystem.read(`${FileSystem.thisFolder}/web.js`)}
                        </script>
                    </html>`,
                    { status: 200, headers: { "Content-Type": "text/html" } }
                )
                // return new Response(null, { status: 501 })
            }

            // 
            // socket
            // 

            const { socket, response } = Deno.upgradeWebSocket(req)
            socket.addEventListener("open",()=>allSockets.push(socket))
            socket.addEventListener("message", (event)=>onReceive(event, socket))
            socket.addEventListener("close",()=>allSockets.splice(allSockets.indexOf(socket),1))

            return response
        }
    )

// 
// watch loop
// 
    import * as yaml from "https://deno.land/std@0.168.0/encoding/yaml.ts"
    let watcher = Deno.watchFs(args.file)
    for await (const event of watcher) {
        
    }