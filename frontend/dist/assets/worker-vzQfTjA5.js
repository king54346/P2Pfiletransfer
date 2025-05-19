(async ()=>{
    const L = Symbol("Comlink.proxy"), G = Symbol("Comlink.endpoint"), v = Symbol("Comlink.releaseProxy"), k = Symbol("Comlink.finalizer"), E = Symbol("Comlink.thrown"), D = (e)=>typeof e == "object" && e !== null || typeof e == "function", Z = {
        canHandle: (e)=>D(e) && e[L],
        serialize (e) {
            const { port1: t, port2: n } = new MessageChannel;
            return C(e, t), [
                n,
                [
                    n
                ]
            ];
        },
        deserialize (e) {
            return e.start(), K(e);
        }
    }, X = {
        canHandle: (e)=>D(e) && E in e,
        serialize ({ value: e }) {
            let t;
            return e instanceof Error ? t = {
                isError: !0,
                value: {
                    message: e.message,
                    name: e.name,
                    stack: e.stack
                }
            } : t = {
                isError: !1,
                value: e
            }, [
                t,
                []
            ];
        },
        deserialize (e) {
            throw e.isError ? Object.assign(new Error(e.value.message), e.value) : e.value;
        }
    }, j = new Map([
        [
            "proxy",
            Z
        ],
        [
            "throw",
            X
        ]
    ]);
    function Y(e, t) {
        for (const n of e)if (t === n || n === "*" || n instanceof RegExp && n.test(t)) return !0;
        return !1;
    }
    function C(e, t = globalThis, n = [
        "*"
    ]) {
        t.addEventListener("message", function s(r) {
            if (!r || !r.data) return;
            if (!Y(n, r.origin)) {
                console.warn(`Invalid origin '${r.origin}' for comlink proxy`);
                return;
            }
            const { id: o, type: _, path: a } = Object.assign({
                path: []
            }, r.data), u = (r.data.argumentList || []).map(b);
            let l;
            try {
                const f = a.slice(0, -1).reduce((m, p)=>m[p], e), d = a.reduce((m, p)=>m[p], e);
                switch(_){
                    case "GET":
                        l = d;
                        break;
                    case "SET":
                        f[a.slice(-1)[0]] = b(r.data.value), l = !0;
                        break;
                    case "APPLY":
                        l = d.apply(f, u);
                        break;
                    case "CONSTRUCT":
                        {
                            const m = new d(...u);
                            l = re(m);
                        }
                        break;
                    case "ENDPOINT":
                        {
                            const { port1: m, port2: p } = new MessageChannel;
                            C(e, p), l = ne(m, [
                                m
                            ]);
                        }
                        break;
                    case "RELEASE":
                        l = void 0;
                        break;
                    default:
                        return;
                }
            } catch (f) {
                l = {
                    value: f,
                    [E]: 0
                };
            }
            Promise.resolve(l).catch((f)=>({
                    value: f,
                    [E]: 0
                })).then((f)=>{
                const [d, m] = O(f);
                t.postMessage(Object.assign(Object.assign({}, d), {
                    id: o
                }), m), _ === "RELEASE" && (t.removeEventListener("message", s), I(t), k in e && typeof e[k] == "function" && e[k]());
            }).catch((f)=>{
                const [d, m] = O({
                    value: new TypeError("Unserializable return value"),
                    [E]: 0
                });
                t.postMessage(Object.assign(Object.assign({}, d), {
                    id: o
                }), m);
            });
        }), t.start && t.start();
    }
    function J(e) {
        return e.constructor.name === "MessagePort";
    }
    function I(e) {
        J(e) && e.close();
    }
    function K(e, t) {
        const n = new Map;
        return e.addEventListener("message", function(r) {
            const { data: o } = r;
            if (!o || !o.id) return;
            const _ = n.get(o.id);
            if (_) try {
                _(o);
            } finally{
                n.delete(o.id);
            }
        }), P(e, n, [], t);
    }
    function z(e) {
        if (e) throw new Error("Proxy has been released and is not useable");
    }
    function V(e) {
        return g(e, new Map, {
            type: "RELEASE"
        }).then(()=>{
            I(e);
        });
    }
    const A = new WeakMap, S = "FinalizationRegistry" in globalThis && new FinalizationRegistry((e)=>{
        const t = (A.get(e) || 0) - 1;
        A.set(e, t), t === 0 && V(e);
    });
    function Q(e, t) {
        const n = (A.get(t) || 0) + 1;
        A.set(t, n), S && S.register(e, t, e);
    }
    function ee(e) {
        S && S.unregister(e);
    }
    function P(e, t, n = [], s = function() {}) {
        let r = !1;
        const o = new Proxy(s, {
            get (_, a) {
                if (z(r), a === v) return ()=>{
                    ee(o), V(e), t.clear(), r = !0;
                };
                if (a === "then") {
                    if (n.length === 0) return {
                        then: ()=>o
                    };
                    const u = g(e, t, {
                        type: "GET",
                        path: n.map((l)=>l.toString())
                    }).then(b);
                    return u.then.bind(u);
                }
                return P(e, t, [
                    ...n,
                    a
                ]);
            },
            set (_, a, u) {
                z(r);
                const [l, f] = O(u);
                return g(e, t, {
                    type: "SET",
                    path: [
                        ...n,
                        a
                    ].map((d)=>d.toString()),
                    value: l
                }, f).then(b);
            },
            apply (_, a, u) {
                z(r);
                const l = n[n.length - 1];
                if (l === G) return g(e, t, {
                    type: "ENDPOINT"
                }).then(b);
                if (l === "bind") return P(e, t, n.slice(0, -1));
                const [f, d] = N(u);
                return g(e, t, {
                    type: "APPLY",
                    path: n.map((m)=>m.toString()),
                    argumentList: f
                }, d).then(b);
            },
            construct (_, a) {
                z(r);
                const [u, l] = N(a);
                return g(e, t, {
                    type: "CONSTRUCT",
                    path: n.map((f)=>f.toString()),
                    argumentList: u
                }, l).then(b);
            }
        });
        return Q(o, e), o;
    }
    function te(e) {
        return Array.prototype.concat.apply([], e);
    }
    function N(e) {
        const t = e.map(O);
        return [
            t.map((n)=>n[0]),
            te(t.map((n)=>n[1]))
        ];
    }
    const B = new WeakMap;
    function ne(e, t) {
        return B.set(e, t), e;
    }
    function re(e) {
        return Object.assign(e, {
            [L]: !0
        });
    }
    function O(e) {
        for (const [t, n] of j)if (n.canHandle(e)) {
            const [s, r] = n.serialize(e);
            return [
                {
                    type: "HANDLER",
                    name: t,
                    value: s
                },
                r
            ];
        }
        return [
            {
                type: "RAW",
                value: e
            },
            B.get(e) || []
        ];
    }
    function b(e) {
        switch(e.type){
            case "HANDLER":
                return j.get(e.name).deserialize(e.value);
            case "RAW":
                return e.value;
        }
    }
    function g(e, t, n, s) {
        return new Promise((r)=>{
            const o = se();
            t.set(o, r), e.start && e.start(), e.postMessage(Object.assign({
                id: o
            }, n), s);
        });
    }
    function se() {
        return new Array(4).fill(0).map(()=>Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
    }
    var oe = "/assets/frontend_bg-B628T4EP.wasm", _e = async (e = {}, t)=>{
        let n;
        if (t.startsWith("data:")) {
            const s = t.replace(/^data:.*?base64,/, "");
            let r;
            if (typeof Buffer == "function" && typeof Buffer.from == "function") r = Buffer.from(s, "base64");
            else if (typeof atob == "function") {
                const o = atob(s);
                r = new Uint8Array(o.length);
                for(let _ = 0; _ < o.length; _++)r[_] = o.charCodeAt(_);
            } else throw new Error("Cannot decode base64-encoded data URL");
            n = await WebAssembly.instantiate(r, e);
        } else {
            const s = await fetch(t), r = s.headers.get("Content-Type") || "";
            if ("instantiateStreaming" in WebAssembly && r.startsWith("application/wasm")) n = await WebAssembly.instantiateStreaming(s, e);
            else {
                const o = await s.arrayBuffer();
                n = await WebAssembly.instantiate(o, e);
            }
        }
        return n.instance.exports;
    };
    let c;
    function ie(e) {
        c = e;
    }
    const ae = typeof TextDecoder > "u" ? (0, module.require)("util").TextDecoder : TextDecoder;
    let H = new ae("utf-8", {
        ignoreBOM: !0,
        fatal: !0
    });
    H.decode();
    let x = null;
    function h() {
        return (x === null || x.byteLength === 0) && (x = new Uint8Array(c.memory.buffer)), x;
    }
    function R(e, t) {
        return e = e >>> 0, H.decode(h().subarray(e, e + t));
    }
    function ce(e) {
        const t = c.__externref_table_alloc();
        return c.__wbindgen_export_2.set(t, e), t;
    }
    function F(e, t) {
        try {
            return e.apply(this, t);
        } catch (n) {
            const s = ce(n);
            c.__wbindgen_exn_store(s);
        }
    }
    const W = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((e)=>{
        c.__wbindgen_export_3.get(e.dtor)(e.a, e.b);
    });
    function ue(e, t, n, s) {
        const r = {
            a: e,
            b: t,
            cnt: 1,
            dtor: n
        }, o = (..._)=>{
            r.cnt++;
            const a = r.a;
            r.a = 0;
            try {
                return s(a, r.b, ..._);
            } finally{
                --r.cnt === 0 ? (c.__wbindgen_export_3.get(r.dtor)(a, r.b), W.unregister(r)) : r.a = a;
            }
        };
        return o.original = r, W.register(o, r, r), o;
    }
    function M(e) {
        const t = typeof e;
        if (t == "number" || t == "boolean" || e == null) return `${e}`;
        if (t == "string") return `"${e}"`;
        if (t == "symbol") {
            const r = e.description;
            return r == null ? "Symbol" : `Symbol(${r})`;
        }
        if (t == "function") {
            const r = e.name;
            return typeof r == "string" && r.length > 0 ? `Function(${r})` : "Function";
        }
        if (Array.isArray(e)) {
            const r = e.length;
            let o = "[";
            r > 0 && (o += M(e[0]));
            for(let _ = 1; _ < r; _++)o += ", " + M(e[_]);
            return o += "]", o;
        }
        const n = /\[object ([^\]]+)\]/.exec(toString.call(e));
        let s;
        if (n && n.length > 1) s = n[1];
        else return toString.call(e);
        if (s == "Object") try {
            return "Object(" + JSON.stringify(e) + ")";
        } catch  {
            return "Object";
        }
        return e instanceof Error ? `${e.name}: ${e.message}
${e.stack}` : s;
    }
    let y = 0;
    const le = typeof TextEncoder > "u" ? (0, module.require)("util").TextEncoder : TextEncoder;
    let T = new le("utf-8");
    const fe = typeof T.encodeInto == "function" ? function(e, t) {
        return T.encodeInto(e, t);
    } : function(e, t) {
        const n = T.encode(e);
        return t.set(n), {
            read: e.length,
            written: n.length
        };
    };
    function me(e, t, n) {
        if (n === void 0) {
            const a = T.encode(e), u = t(a.length, 1) >>> 0;
            return h().subarray(u, u + a.length).set(a), y = a.length, u;
        }
        let s = e.length, r = t(s, 1) >>> 0;
        const o = h();
        let _ = 0;
        for(; _ < s; _++){
            const a = e.charCodeAt(_);
            if (a > 127) break;
            o[r + _] = a;
        }
        if (_ !== s) {
            _ !== 0 && (e = e.slice(_)), r = n(r, s, s = _ + e.length * 3, 1) >>> 0;
            const a = h().subarray(r + _, r + s), u = fe(e, a);
            _ += u.written, r = n(r, s, _, 1) >>> 0;
        }
        return y = _, r;
    }
    let w = null;
    function U() {
        return (w === null || w.buffer.detached === !0 || w.buffer.detached === void 0 && w.buffer !== c.memory.buffer) && (w = new DataView(c.memory.buffer)), w;
    }
    function de(e, t) {
        const n = t(e.length * 1, 1) >>> 0;
        return h().set(e, n / 1), y = e.length, n;
    }
    function be(e) {
        const t = c.__wbindgen_export_2.get(e);
        return c.__externref_table_dealloc(e), t;
    }
    function we(e, t) {
        return e = e >>> 0, h().subarray(e / 1, e / 1 + t);
    }
    function ge(e, t) {
        const n = de(e, c.__wbindgen_malloc), s = y, r = c.compress(n, s, t);
        if (r[3]) throw be(r[2]);
        var o = we(r[0], r[1]).slice();
        return c.__wbindgen_free(r[0], r[1] * 1, 1), o;
    }
    function he(e, t, n) {
        c.closure21_externref_shim(e, t, n);
    }
    const pe = Object.freeze({
        Gzip: 0,
        0: "Gzip",
        Zstd: 1,
        1: "Zstd",
        Snappy: 2,
        2: "Snappy",
        Lz4: 3,
        3: "Lz4"
    });
    typeof FinalizationRegistry > "u" || new FinalizationRegistry((e)=>c.__wbg_compressionoptions_free(e >>> 0, 1));
    function ye(e, t) {
        alert(R(e, t));
    }
    function ze(e) {
        return e.buffer;
    }
    function xe(e) {
        console.error(e);
    }
    function Ee(e) {
        return e.length;
    }
    function Te(e) {
        console.log(e);
    }
    function Ae(e) {
        return new Uint8Array(e);
    }
    function Se() {
        return F(function() {
            return new FileReader;
        }, arguments);
    }
    function Oe() {
        return F(function(e, t) {
            e.readAsArrayBuffer(t);
        }, arguments);
    }
    function ke() {
        return F(function(e) {
            return e.result;
        }, arguments);
    }
    function Pe(e, t, n) {
        e.set(t, n >>> 0);
    }
    function Me(e, t) {
        e.onloadend = t;
    }
    function Ce(e) {
        const t = e.original;
        return t.cnt-- == 1 ? (t.a = 0, !0) : !1;
    }
    function Re(e, t, n) {
        return ue(e, t, 22, he);
    }
    function Fe(e, t) {
        const n = M(t), s = me(n, c.__wbindgen_malloc, c.__wbindgen_realloc), r = y;
        U().setInt32(e + 4 * 1, r, !0), U().setInt32(e + 4 * 0, s, !0);
    }
    function Ne() {
        const e = c.__wbindgen_export_2, t = e.grow(4);
        e.set(0, void 0), e.set(t + 0, void 0), e.set(t + 1, null), e.set(t + 2, !0), e.set(t + 3, !1);
    }
    function We() {
        return c.memory;
    }
    function Ue(e, t) {
        return R(e, t);
    }
    function $e(e, t) {
        throw new Error(R(e, t));
    }
    URL = globalThis.URL;
    const i = await _e({
        "./frontend_bg.js": {
            __wbindgen_string_new: Ue,
            __wbindgen_cb_drop: Ce,
            __wbg_alert_8640423cd2a33073: ye,
            __wbg_result_b7f693658f393a91: ke,
            __wbg_setonloadend_f6f8b9cf21418ab9: Me,
            __wbg_new_a01d9d610b795c1f: Se,
            __wbg_readAsArrayBuffer_db7f197b5b6b34cf: Oe,
            __wbg_error_fab41a42d22bf2bc: xe,
            __wbg_log_464d1b2190ca1e04: Te,
            __wbg_buffer_61b7ce01341d7f88: ze,
            __wbg_new_3ff5b33b1ce712df: Ae,
            __wbg_set_23d69db4e5c66a6e: Pe,
            __wbg_length_65d1cd11729ced11: Ee,
            __wbindgen_debug_string: Fe,
            __wbindgen_throw: $e,
            __wbindgen_memory: We,
            __wbindgen_closure_wrapper87: Re,
            __wbindgen_init_externref_table: Ne
        }
    }, oe), Le = i.memory, De = i.compress, je = i.decompress, Ie = i.__wbg_compressionoptions_free, Ve = i.compressionoptions_new, Be = i.compressionoptions_with_level, He = i.compress_with_options, qe = i.handle_file_upload, Ge = i.greet, ve = i.rust_zstd_wasm_shim_qsort, Ze = i.rust_zstd_wasm_shim_malloc, Xe = i.rust_zstd_wasm_shim_memcmp, Ye = i.rust_zstd_wasm_shim_calloc, Je = i.rust_zstd_wasm_shim_free, Ke = i.rust_zstd_wasm_shim_memcpy, Qe = i.rust_zstd_wasm_shim_memmove, et = i.rust_zstd_wasm_shim_memset, tt = i.rust_lz4_wasm_shim_malloc, nt = i.rust_lz4_wasm_shim_memcmp, rt = i.rust_lz4_wasm_shim_calloc, st = i.rust_lz4_wasm_shim_free, ot = i.rust_lz4_wasm_shim_memcpy, _t = i.rust_lz4_wasm_shim_memmove, it = i.rust_lz4_wasm_shim_memset, at = i.__wbindgen_exn_store, ct = i.__externref_table_alloc, ut = i.__wbindgen_export_2, lt = i.__wbindgen_export_3, ft = i.__wbindgen_malloc, mt = i.__wbindgen_realloc, dt = i.__externref_table_dealloc, bt = i.__wbindgen_free, wt = i.closure21_externref_shim, q = i.__wbindgen_start;
    var gt = Object.freeze({
        __proto__: null,
        __externref_table_alloc: ct,
        __externref_table_dealloc: dt,
        __wbg_compressionoptions_free: Ie,
        __wbindgen_exn_store: at,
        __wbindgen_export_2: ut,
        __wbindgen_export_3: lt,
        __wbindgen_free: bt,
        __wbindgen_malloc: ft,
        __wbindgen_realloc: mt,
        __wbindgen_start: q,
        closure21_externref_shim: wt,
        compress: De,
        compress_with_options: He,
        compressionoptions_new: Ve,
        compressionoptions_with_level: Be,
        decompress: je,
        greet: Ge,
        handle_file_upload: qe,
        memory: Le,
        rust_lz4_wasm_shim_calloc: rt,
        rust_lz4_wasm_shim_free: st,
        rust_lz4_wasm_shim_malloc: tt,
        rust_lz4_wasm_shim_memcmp: nt,
        rust_lz4_wasm_shim_memcpy: ot,
        rust_lz4_wasm_shim_memmove: _t,
        rust_lz4_wasm_shim_memset: it,
        rust_zstd_wasm_shim_calloc: Ye,
        rust_zstd_wasm_shim_free: Je,
        rust_zstd_wasm_shim_malloc: Ze,
        rust_zstd_wasm_shim_memcmp: Xe,
        rust_zstd_wasm_shim_memcpy: Ke,
        rust_zstd_wasm_shim_memmove: Qe,
        rust_zstd_wasm_shim_memset: et,
        rust_zstd_wasm_shim_qsort: ve
    });
    ie(gt);
    q();
    const $ = 1024 * 1024, ht = {
        currentFile: null,
        fileName: "",
        currentOffset: 0,
        algorithm: pe.Gzip,
        isProcessing: !1,
        isPaused: !1,
        initTransfer (e, t, n, s) {
            return this.currentFile = e, this.fileName = t, this.currentOffset = n, this.algorithm = s, console.log(`Worker: 初始化传输 ${t}，偏移量: ${n}`), {
                success: !0
            };
        },
        async processNextChunk () {
            if (!this.currentFile || this.isProcessing) return {
                success: !1,
                error: "没有可用文件或已在处理中"
            };
            if (this.isPaused) return {
                success: !0,
                paused: !0
            };
            try {
                this.isProcessing = !0;
                const e = this.currentOffset, t = Math.min(this.currentFile.size, e + $), s = t - e < $ || t >= this.currentFile.size, r = await this.currentFile.slice(e, t).arrayBuffer(), o = ge(new Uint8Array(r), this.algorithm);
                this.currentOffset = t;
                const _ = {
                    success: !0,
                    fileName: this.fileName,
                    offset: e,
                    bytes: o,
                    final: s,
                    newOffset: t,
                    progress: t / this.currentFile.size
                };
                return s && this.resetState(), this.isProcessing = !1, _;
            } catch (e) {
                return this.isProcessing = !1, {
                    success: !1,
                    error: `处理块时出错: ${e.message}`
                };
            }
        },
        resetState () {
            this.currentFile = null, this.fileName = "", this.currentOffset = 0, this.isProcessing = !1, this.isPaused = !1, console.log("Worker: 重置状态");
        },
        cancelTransfer () {
            return this.resetState(), {
                success: !0
            };
        },
        resumeTransfer () {
            return this.currentFile ? (this.isPaused = !1, console.log(`Worker: 文件 ${this.fileName} 传输已恢复，从位置: ${this.currentOffset} 继续`), {
                success: !0,
                resumed: !0,
                fileName: this.fileName,
                offset: this.currentOffset
            }) : {
                success: !1,
                error: "没有活动的传输"
            };
        },
        pauseTransfer () {
            return this.currentFile ? (this.isPaused = !0, console.log(`Worker: 文件 ${this.fileName} 传输已暂停，当前位置: ${this.currentOffset}`), {
                success: !0,
                paused: !0,
                fileName: this.fileName,
                offset: this.currentOffset
            }) : {
                success: !1,
                error: "没有活动的传输"
            };
        }
    };
    C(ht);
})();
