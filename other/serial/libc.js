export const libC = {
    open: ()=>{},
    close: ()=>{},
    write: ()=>{},
    read: ()=>{},
    strerror: ()=>{},
    tcgetattr: ()=>{},
    tcsetattr: ()=>{},
    cfsetspeed: ()=>{},
    errno: ()=>{},
    nonBlockingErrno: ()=>{},
}

if (Deno.build.os.startsWith("win")) {
    throw Error(`Sorry the libC wrapper isn't supported on Windows`)
} else if (Deno.build.os == "darwin") {
    const library = Deno.dlopen("/usr/lib/libSystem.dylib", {
        open: {
            parameters: ["pointer", "i32"],
            result: "i32",
            nonblocking: false,
        },
        close: {
            parameters: ["i32"],
            result: "i32",
            nonblocking: false,
        },
        write: {
            parameters: ["i32", "pointer", "usize"],
            result: "isize",
            nonblocking: false,
        },
        read: {
            parameters: ["i32", "pointer", "usize"],
            result: "isize",
            nonblocking: true,
        },
        // non_blocking__errno_location: {
        //     parameters: [],
        //     result: "pointer",
        //     nonblocking: true,
        //     name: "__errno_location",
        // },
        // __errno_location: {
        //     parameters: [],
        //     result: "pointer",
        //     nonblocking: false,
        // },
        strerror: {
            parameters: ["i32"],
            result: "pointer",
            nonblocking: false,
        },
        tcgetattr: {
            parameters: ["i32", "pointer"],
            result: "i32",
            nonblocking: false,
        },
        tcsetattr: {
            parameters: ["i32", "i32", "pointer"],
            result: "i32",
            nonblocking: false,
        },
        cfsetspeed: {
            parameters: ["pointer", "u32"],
            result: "i32",
            nonblocking: false,
        },
        errno: {
            parameters: [],
            result: "i32",
            nonblocking: false,
        },
    })
    for (const [key, value] of Object.entries(libC)) {
        libC[key] = library.symbols[key]
    }
    libC.errno = ()=>1 // for some reason I always get a bus error when trying to access errno
    libC.nonBlockingErrno = library.symbols.errno
// linux, maybe android
} else {
    const library = Deno.dlopen("/lib/libc.so.6", {
        open: {
            parameters: ["pointer", "i32"],
            result: "i32",
            nonblocking: false,
        },
        close: {
            parameters: ["i32"],
            result: "i32",
            nonblocking: false,
        },
        write: {
            parameters: ["i32", "pointer", "usize"],
            result: "isize",
            nonblocking: false,
        },
        read: {
            parameters: ["i32", "pointer", "usize"],
            result: "isize",
            nonblocking: true,
        },
        non_blocking__errno_location: {
            parameters: [],
            result: "pointer",
            nonblocking: true,
            name: "__errno_location",
        },
        __errno_location: {
            parameters: [],
            result: "pointer",
            nonblocking: false,
        },
        strerror: {
            parameters: ["i32"],
            result: "pointer",
            nonblocking: false,
        },
        tcgetattr: {
            parameters: ["i32", "pointer"],
            result: "i32",
            nonblocking: false,
        },
        tcsetattr: {
            parameters: ["i32", "i32", "pointer"],
            result: "i32",
            nonblocking: false,
        },
        cfsetspeed: {
            parameters: ["pointer", "u32"],
            result: "i32",
            nonblocking: false,
        },
    })
    for (const [key, value] of Object.entries(libC)) {
        libC[key] = library.symbols[key]
    }
    libC.nonBlockingErrno = async function () {
        const ret = await library.symbols.non_blocking__errno_location()
        if (ret === null) {
            return 0
        }
        const ptrView = new Deno.UnsafePointerView(ret)
        return ptrView.getInt32()
    }

    libC.errno = async function() {
        const ret = await library.symbols.__errno_location()
        if (ret === null) {
            return 0
        }
        const ptrView = new Deno.UnsafePointerView(ret)
        return ptrView.getInt32()
    }
}