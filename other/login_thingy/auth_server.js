import ethUtil from 'https://esm.sh/ethereumjs-util@7.1.5'
import { toHex } from './utils.js'

export const tool = {
    createChallengeMessage() {
        return `EzAuth trying to login at ${new Date()}\nverification: ${Math.random().toString(36).slice(2)}`
    }
    // TODO: I'd really like to remove ethUtil.
    // it doesn't run in the browser cause it depends on the node.js Buffer class
    // .ecrecover and .pubToAddress are the important functions. It would be good to find independent versions of them
    signatureIsValid(originalMessage, signature, signerAddress) {
        // Convert the digest and signature from hex strings to buffers
        var digestBuffer = new Uint8Array(ethUtil.hashPersonalMessage(ethUtil.toBuffer(toHex(originalMessage))))
        var signatureBuffer = new Uint8Array(ethUtil.toBuffer(signature))
        
        // Split the signature to get r, s, and v
        var { v, r, s } = ethUtil.fromRpcSig(signatureBuffer)

        // Recover the public key from the signature
        var publicKey = ethUtil.ecrecover(digestBuffer, v, r, s)
        // Convert the recovered public key to an address
        var recoveredAddress = ethUtil.pubToAddress(publicKey).toString('hex')

        // Compare the recovered address with the provided address
        return recoveredAddress.toLowerCase() === ethUtil.stripHexPrefix(signerAddress).toLowerCase()
    }
}