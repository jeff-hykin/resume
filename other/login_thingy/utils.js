export const toHex = (strOrBuffer)=>{
    // convert string to buffer
    if (typeof strOrBuffer == "string") {
        strOrBuffer  = new TextEncoder().encode(strOrBuffer)
    }
    return "0x"+([...strOrBuffer].map(each=>each.toString(16).padStart(2,"0")).join(""))
}