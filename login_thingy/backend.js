import { generateKeys, encrypt, decrypt, sign, verify, keyStringToKeyObjects, extractDerPrivateKey, extractDerPublicKey } from "../source/encryption.js"
import { tool } from './auth_server.js'

// 
// example
// 
const database = {
    authTokens: new Map(),
    getAuthTokenForAccount: async (accountAddressString)=>{
        let keys = await databaset.authTokens.get(accountAddress)
        if (!keys) {
            keys = await generateKeys()
            databaset.authTokens.set(accountAddress, keys)
        }
        return keys.encryptionKey
    },
}
const port = 8080
const handler = (request) => {
    if (request.url.pathname === "/backend/challengeMessage") {
        return new Response(JSON.stringify(tool.createChallengeMessage()), { status: 200 })
    }
    
    if (request.url.pathname === "/backend/verify") {
        const args = JSON.parse(request.body)
        let authToken = null
        if (!tool.signatureIsValid(challengeMessage, signature, accountAddress)) {
            authToken = null
        } else {
            authToken = await database.getAuthTokenForAccount(accountAddress)
        }
        return new Response(JSON.stringify(authToken), { status: 200 })
    }
    
    return new Response("Srry, page not found", { status: 404 })
}

console.log(`HTTP server running. Access it at: http://localhost:${port}/`);
Deno.serve({ port }, handler);
