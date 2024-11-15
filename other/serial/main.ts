/**
MIT License

Copyright (c) 2023 Bernd Amend

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
 */
import { libC } from "./libc.js"

const O_RDWR = 0x2
const O_NOCTTY = 0x100
const O_SYNC = 0x101000
const TCSANOW = 0

const CSIZE = 0o000060
const CS5 = 0o000000
const CS6 = 0o000020
const CS7 = 0o000040
const CS8 = 0o000060
const CSTOPB = 0o000100
const CREAD = 0o000200
const PARENB = 0o000400
const PARODD = 0o001000
const HUPCL = 0o002000
const CLOCAL = 0o004000
const CRTSCTS = 0o20000000000
const VTIME = 5
const VMIN = 6

function numberBaudrateToBaudrateValue(num: number) {
    switch (num) {
        case 9600:
            return 0o000015
        case 19200:
            return 0o000016
        case 38400:
            return 0o000017
        case 57600:
            return 0o010001
        case 115200:
            return 0o010002
        case 230400:
            return 0o010003
        case 460800:
            return 0o010004
        case 500000:
            return 0o010005
        case 576000:
            return 0o010006
        case 921600:
            return 0o010007
        case 1000000:
            return 0o010010
        case 1152000:
            return 0o010011
        case 1500000:
            return 0o010012
        case 2000000:
            return 0o010013
        case 2500000:
            return 0o010014
        case 3000000:
            return 0o010015
        case 3500000:
            return 0o010016
        case 4000000:
            return 0o010017
    }
    throw new Error("unsupported baudrate")
}

type ParityType = "none" | "even" | "odd"
type FlowControlType = "none" | "hardware"

export interface SerialOptions {
    baudRate: 9600 | 19200 | 38400 | 57600 | 115200 | 230400 | 460800 | 500000 | 576000 | 921600 | 1000000 | 1152000 | 1500000 | 2000000 | 2500000 | 3000000 | 3500000 | 4000000
    dataBits?: 7 | 8 // default 8
    stopBits?: 1 | 2 // default 1
    parity?: ParityType // default none
    bufferSize?: number // default 255
    flowControl?: FlowControlType // default none

    timeoutInDeciseconds?: number
    minimumNumberOfCharsRead?: number
}



async function strerror(errnum: number) {
    const ret = await libC.strerror(errnum)
    if (ret === null) {
        return ""
    }
    const ptrView = new Deno.UnsafePointerView(ret)
    return ptrView.getCString()
}

async function geterrnoString() {
    return strerror(await libC.errno())
}

async function getNonBlockingErrnoString() {
    return strerror(await libC.nonBlockingErrno())
}

export class SerialSource {
    constructor(private serialPort: SerialPort) {}

    async pull(controller: ReadableStreamDefaultController) {
        if (this.serialPort.fd === undefined) {
            controller.close()
            return
        }

        const buffer = new Uint8Array(this.serialPort.options!.bufferSize ?? 255)
        const len = await libC.read(this.serialPort.fd, Deno.UnsafePointer.of(buffer), buffer.length)
        if (len < 0) {
            controller.error(`Error while reading: ${await getNonBlockingErrnoString()}`)
        }
        controller.enqueue(buffer.subarray(0, len as number))
    }

    cancel() {
        this.serialPort.close()
    }
}

export class SerialSink {
    constructor(private serialPort: SerialPort) {}

    async write(data: Uint8Array, controller: WritableStreamDefaultController) {
        controller.signal.throwIfAborted()
        if (this.serialPort.fd === undefined) {
            controller.error("writable closed")
            return
        }
        // TODO: ensure everything is written
        const wlen = await libC.write(this.serialPort.fd, Deno.UnsafePointer.of(data), data.length)
        if (wlen < 0) {
            controller.error(`Error while writing: ${await geterrnoString()}`)
        }
        if (wlen !== data.length) {
            // could this happen!?
            controller.error("Couldn't write data")
        }
    }

    async close() {
        await this.serialPort.close()
    }

    async abort() {
        await this.serialPort.close()
    }
}

function is_platform_little_endian(): boolean {
    const buffer = new ArrayBuffer(2)
    new DataView(buffer).setInt16(0, 256, true)
    return new Int16Array(buffer)[0] === 256
}

export class SerialPort implements AsyncDisposable {
    #fd: number | undefined
    options: SerialOptions | undefined
    #readable: ReadableStream<Uint8Array> | null = null
    #writable: WritableStream<Uint8Array> | null = null

    get fd() {
        return this.#fd
    }

    get readable() {
        return this.#readable
    }

    get writable() {
        return this.#writable
    }

    constructor(readonly filename: string) {}

    async [Symbol.asyncDispose]() {
        await this.close()
    }

    async open(options: SerialOptions) {
        if (this.#fd !== undefined) {
            throw new Error("already open")
        }

        const baudRate = numberBaudrateToBaudrateValue(options.baudRate)
        if (options.dataBits !== undefined && options.dataBits !== 7 && options.dataBits !== 8) {
            throw new Error("dataBits can only be undefined | 7 | 8")
        }

        if (options.stopBits !== undefined) {
            throw new Error("setting stopBits is not implemented")
        }

        if (options.parity !== undefined) {
            throw new Error("setting parity is not implemented")
        }

        if (options.bufferSize !== undefined && options.bufferSize <= 0) {
            throw new Error("bufferSize needs to be >0")
        }

        if (options.flowControl !== undefined) {
            throw new Error("setting flowControl is not implemented")
        }

        this.options = options
        const buffer = new TextEncoder().encode(this.filename)
        const fd = await libC.open(Deno.UnsafePointer.of(buffer), O_RDWR | O_NOCTTY | O_SYNC)
        
        if (fd < 0) {
            throw new Error(`Couldn't open '${this.filename}': ${await geterrnoString()}`)
        }

        // termios tty{};
        const tty = new ArrayBuffer(100)
        const ttyPtr = Deno.UnsafePointer.of(tty)

        if ((await libC.tcgetattr(fd, ttyPtr)) != 0) {
            SerialPort.internalClose(fd)
            throw new Error(`tcgetattr: ${await geterrnoString()}`)
        }

        await libC.cfsetspeed(ttyPtr, baudRate)

        const dataView = new DataView(tty)
        const littleEndian = is_platform_little_endian()
        dataView.setUint32(0, 0, littleEndian) // c_iflag
        dataView.setUint32(4, 0, littleEndian) // c_oflag

        let cflag = dataView.getUint32(8, littleEndian)
        cflag &= ~PARENB // Clear parity bit, disabling parity (most common)
        cflag &= ~CSTOPB // Clear stop field, only one stop bit used in communication (most common)
        cflag &= ~CSIZE // Clear all bits that set the data size
        if (options.dataBits === 7) {
            cflag |= CS7
        } else {
            cflag |= CS8 // 8 bits per byte (most common)
        }
        cflag &= ~CRTSCTS // Disable RTS/CTS hardware flow control (most common)
        cflag |= CREAD | CLOCAL // Turn on READ & ignore ctrl lines (CLOCAL = 1)
        dataView.setUint32(8, cflag, littleEndian) // c_cflag

        dataView.setUint32(12, 0, littleEndian) // c_lflag

        // Wait for up to 1s (10 deciseconds), returning as soon as any data is received.
        dataView.setUint8(17 + VTIME, options.timeoutInDeciseconds ?? 10)
        dataView.setUint8(17 + VMIN, options.minimumNumberOfCharsRead ?? 0)

        if ((await libC.tcsetattr(fd, TCSANOW, ttyPtr)) != 0) {
            SerialPort.internalClose(fd)
            throw new Error(`tcsetattr: ${await geterrnoString()}`)
        }

        this.#fd = fd
        this.#readable = new ReadableStream<Uint8Array>(new SerialSource(this))
        this.#writable = new WritableStream<Uint8Array>(new SerialSink(this))
    }

    async close() {
        const fd = this.#fd
        this.#fd = undefined
        this.#writable = null
        this.#readable = null
        await SerialPort.internalClose(fd)
    }

    static async internalClose(fd: number | undefined) {
        if (fd === undefined) {
            return
        }
        const ret = await libC.close(fd)
        if (ret < 0) {
            throw new Error(`Error while closing: ${await geterrnoString()}`)
        }
    }
}

// https://wicg.github.io/serial/#readable-attribute
export class LineBreakTransformer {
    #container = ""

    constructor() {}

    transform(chunk: string, controller: TransformStreamDefaultController) {
        this.#container += chunk
        const lines = this.#container.split("\n")
        this.#container = lines.pop() ?? ""
        lines.forEach((line: string) => controller.enqueue(line))
    }

    flush(controller: TransformStreamDefaultController) {
        controller.enqueue(this.#container)
    }
}

// if (import.meta.main) {
//   const sleep = async (milliseconds: number) => {
//     await (new Promise((resolve) => setTimeout(resolve, milliseconds)));
//     return;
//   };

//   await using port = new SerialPort("/dev/ttyACM0");

//   await port.open({ baudRate: 115200 });

//   const lineReader = port.readable!
//     .pipeThrough(new TextDecoderStream())
//     .pipeThrough(new TransformStream(new LineBreakTransformer()));

//   // write stuff every 200msec
//   (async () => {
//     const encoder = new TextEncoder();
//     const writable = port.writable!.getWriter();
//     try {
//       for (let i = 0;; i++) {
//         await writable.write(encoder.encode(`Test message ${i}\n`));
//         await sleep(200);
//       }
//     } catch (e) {
//       console.error(e);
//     }
//   })();

//   (async () => {
//     for await (const line of lineReader) {
//       console.log(line);
//     }
//   })();

//   // exit after 5 seconds
//   await sleep(5_000);
//   //port.close(); // automatically done by "await using"
// }
