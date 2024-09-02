import { toHex } from './utils.js'

/**
 * The `LoginTool` class provides a way to manage user authentication
 * It handles requesting an account from a provider, verifying the account's signature against a challenge message,
 * and storing the account information in local storage.
 *
 * The class has the following methods:
 * - `constructor`: Initializes the `LoginTool` instance with the necessary configuration options.
 * - `get isLoggedIn`: Returns a boolean indicating whether the user is currently logged in.
 * - `purgeInfo`: Removes the stored account information from local storage.
 * - `requestAccount`: Requests an Ethereum account from the provider, verifies the account's signature, and stores the account information.
 * - `showAccountCreationTutorial`: Displays a tutorial for creating a new Ethereum account.
 * - `ezRequireAccount`: A convenience method that checks if the user is logged in and, if not, requests an account and verifies the signature.
 */
class LoginTool {
    /**
     * Initializes the `LoginTool` instance with the necessary configuration options.
     *
     * @example
     * ```js
     * const loginTool = new LoginTool({
     *     provider: window.ethereum, 
     *     saveAccountKeyTo:`$loginToolStorage`,
     *     getChallengeMessageFunc: ()=>fetch("/backend/challengeMessage").then(res=>res.json()),
     *     verifySignatureFunc: async (challengeMessage, signature, accountAddress)=>{
     *         return fetch("/backend/verify", {
     *             method: 'POST',
     *             headers: {
     *                 'Accept': 'application/json',
     *                 'Content-Type': 'application/json'
     *             },
     *             body: JSON.stringify({challengeMessage, signature, accountAddress})
     *         }).then(res=>res.json())
     *     },
     * })
     * ```
     * 
     * @param {Object} arg - The configuration arg for the `LoginTool` instance.
     * @param {Object} arg.provider - The Ethereum provider to use for account management.
     * @param {string|null} [arg.saveAccountKeyTo='$loginToolStorage'] - The key to use for storing the user's account information in local storage.
     * @param {async function} arg.verifySignatureFunc - accepts challengeMessage, signature, accountAddress (all strings) and returns a string authToken
     * @param {async function} arg.getChallengeMessageFunc - no args, should return a string from the backend
     * @param {function} arg.onAccountChange - A callback function that is called when the user's Ethereum account changes.
     */
    constructor({ provider, saveAccountKeyTo=`$loginToolStorage`, verifySignatureFunc, getChallengeMessageFunc, onAccountChange }) {
        this.onAccountChange = onAccountChange||function(){}
        this.provider = provider||window.ethereum
        this.saveAccountKey = saveAccountKeyTo
        this.accountStatus = "unset"
        this.accountAddress = null
        this.accountPublicKey = null
        this.verifySignatureFunc = verifySignatureFunc
        
        // try to load from cache immediately
        if (this.accountStatus === "unset") {
            try {
                const accountInfo = JSON.parse(localStorage.getItem(this.saveAccountKeyTo))
                this.accountAddress = accountInfo.accountAddress
                this.authToken = accountInfo.authToken
                if (this.authToken) {
                    this.accountStatus = "loggedIn"
                }
                return this.authToken
            } catch (error) {
                
            }
        }
    }
    get isLoggedIn() {
        return this.accountStatus === "loggedIn"
    }
    purgeInfo() {
        this.accountStatus = "unset"
        this.accountAddress = null
        this.localStorage.removeItem(this.saveAccountKeyTo)
    }
    /**
     * Requests an Ethereum account from the provider and verifies the account's signature against a challenge message.
     * If the account is successfully verified, the account address and a key are stored in local storage.
     * The account status is updated accordingly.
     *
     * @param {string} challengeMessage - The challenge message to be signed by the account.
     * @returns {string|null} - The key if the account is successfully verified, or null if the verification fails.
     */
    async requestAccount(challengeMessage) {
        // 
        // talk to provider
        // 
        const [ accountAddress ] = await this.provider.request({ method: "eth_requestAccounts" })
        this.accountStatus = "hasAddress"
        // this.accountPublicKey = await this.provider.request({
        //     method: 'eth_getEncryptionPublicKey',
        //     params: [account],
        // })
        this.accountAddress = accountAddress
        var signature = await this.provider.request({
            method: "personal_sign",
            params: [
                // convert to hex
                toHex(challengeMessage),
                accountAddress,
            ],
        })
        this.provider.on("accountsChanged", (accounts, ...args)=>{
            if (accounts[0] !== this.accountAddress) {
                this.onAccountChange(accounts[0], ...args)
            }
        })
        
        this.authToken = await this.verifySignatureFunc(challengeMessage, signature, accountAddress)
        if (this.authToken) {
            this.accountStatus = "loggedIn"
            if (typeof this.saveAccountKeyTo == "string" && this.saveAccountKeyTo.length > 0) {
                localStorage.setItem(this.saveAccountKeyTo, JSON.stringify({ accountAddress, authToken: this.authToken }))
            }
        }
        
        // if (error.message === "User rejected the request.") {
        //     // user said "no" on first popup
        // }
    }
    showAccountCreationTutorial() {
        const div = document.createElement("div")
        div.innerHTML = `
            <div style="background-color:white;padding:1em;border-radius:0.5em;color:black;">
                <h1>Create an account</h1>
                <p>This should take 30 seconds (no email verification needed)</p>
                <p>1. Get the MetaMask extension <a href="https://metamask.io/download/">here</a></p>
                <p>2. Click the MetaMask icon in your browser toolbar</p>
                <p>3. Click "Create new account"</p>
                <p>4. Then reload this page</p>
            </div>
        `
        div.style.position = "fixed"
        div.style.top = "0"
        div.style.left = "0"
        div.style.width = "100vw"
        div.style.height = "100vh"
        div.style.backgroundColor = "rgba(0,0,0,0.5)"
        div.style.zIndex = "1000"
        div.style.display = "flex"
        div.style.alignItems = "center"
        div.style.justifyContent = "center"
        div.onclick = ()=>document.body.removeChild(div)
        div.children[0].onclick = (event)=>event.preventDefault()
        document.body.appendChild(div)
    }
    async ezRequireAccount() {
        if (!this.isLoggedIn) {
            if (!this.provider) {
                this.showAccountCreationTutorial()
            } else {
                return this.requestAccount(await this.getChallengeMessageFunc())
            }
        }
        return this.authToken
    }
}

// 
// example
//
// const loginTool = new LoginTool({
//     provider: window.ethereum, 
//     saveAccountKeyTo:`$loginToolStorage`,
//     getChallengeMessageFunc: ()=>fetch("/backend/challengeMessage").then(res=>res.json()),
//     verifySignatureFunc: async (challengeMessage, signature, accountAddress)=>{
//         return fetch("/backend/verify", {
//             method: 'POST',
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({challengeMessage, signature, accountAddress})
//         }).then(res=>res.json())
//     },
// })