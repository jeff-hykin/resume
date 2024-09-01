import ethUtil from 'https://esm.sh/ethereumjs-util@7.1.5'
import { toHex } from './utils.js'

const tool = {
    createChallengeMessage() {
        return `EzAuth:${new Date()},${Math.random().toString(36).slice(2)}`
    },
    // TODO: I'd really like to remove ethUtil.
    // it doesn't run in the browser cause it depends on the node.js Buffer class
    // .ecrecover and .pubToAddress are the important functions. It would be good to find independent versions of them
    verifyStringSignature(originalMessage, signature, signerAddress) {
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





import elliptic from 'npm:elliptic'
const ec = new elliptic.ec('secp256k1'); // Ethereum uses secp256k1

// Example digest and signature (in hex string format)
var digest = "0x686f77647920696d20747279696e6720746f2068697420746865206d696e206c656e67746820746f206e6f7420626520612070726f626c656d" 
var signature = "0x090e0a943b6e5b7ea58886a371b6cd559d4f80d5f0d29d13b6538839764a11195b18fbf333329b8dce4ac9287bec32ca1f7c9f850e566669d9a6d8348f1eedc61b" 
var publicKey = "9TOyfEM73591SjRw28tHUXfWa8MSLR3EuB5dcDieTDw=" 
var signerAddress = "0x21d2deb8c180b0adcbf8c097dbc6c165ceb17ff3" // eth address

const digest = '0x...'; // Replace with your digest (hash of the message)
const signature = '0x...'; // Replace with the signature
const signerAddress = '0x...'; // Replace with the Ethereum address of the signer

// Convert digest and signature to appropriate formats
const digestBytes = digest.slice(2); // Remove the '0x' prefix
const { r, s, v } = ethers.utils.splitSignature(signature);

// Recover public key from signature
const pubKey = ec.recoverPubKey(Buffer.from(digestBytes, 'hex'), { r, s }, v);
const recoveredAddress = '0x' + ec.keyFromPublic(pubKey).getPublic().encode('hex', false).slice(2); // Convert pubkey to address

// Compare the recovered address with the provided address
if (recoveredAddress.toLowerCase() === signerAddress.toLowerCase()) {
  console.log('The signature is valid and matches the signer address!');
} else {
  console.log('The signature is invalid or does not match the signer address.');
}
