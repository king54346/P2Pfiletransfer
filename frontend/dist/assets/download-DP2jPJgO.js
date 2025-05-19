import { c as on } from "./zip-stream-CQr6YNqM.js";
import { bd as Ao, bb as nn, __tla as __tla_0 } from "./messages-BTUfKhSZ.js";
import { __tla as __tla_1 } from "./index-VZNZX2ad.js";
let hn, fn;
let __tla = Promise.all([
    (()=>{
        try {
            return __tla_0;
        } catch  {}
    })(),
    (()=>{
        try {
            return __tla_1;
        } catch  {}
    })()
]).then(async ()=>{
    var zo = {};
    var Bo;
    function an() {
        return Bo || (Bo = 1, function() {
            function V() {}
            function v(e) {
                return typeof e == "object" && e !== null || typeof e == "function";
            }
            const B = V;
            function h(e, t) {
                try {
                    Object.defineProperty(e, "name", {
                        value: t,
                        configurable: !0
                    });
                } catch  {}
            }
            const ie = Promise, Y = Promise.resolve.bind(ie), J = Promise.prototype.then, fe = Promise.reject.bind(ie), xe = Y;
            function P(e) {
                return new ie(e);
            }
            function y(e) {
                return P((t)=>t(e));
            }
            function d(e) {
                return fe(e);
            }
            function G(e, t, r) {
                return J.call(e, t, r);
            }
            function $(e, t, r) {
                G(G(e, t, r), void 0, B);
            }
            function L(e, t) {
                $(e, t);
            }
            function T(e, t) {
                $(e, void 0, t);
            }
            function F(e, t, r) {
                return G(e, t, r);
            }
            function O(e) {
                G(e, void 0, B);
            }
            let U = (e)=>{
                if (typeof queueMicrotask == "function") U = queueMicrotask;
                else {
                    const t = y(void 0);
                    U = (r)=>G(t, r);
                }
                return U(e);
            };
            function E(e, t, r) {
                if (typeof e != "function") throw new TypeError("Argument is not a function");
                return Function.prototype.apply.call(e, t, r);
            }
            function j(e, t, r) {
                try {
                    return y(E(e, t, r));
                } catch (o) {
                    return d(o);
                }
            }
            class I {
                constructor(){
                    this._cursor = 0, this._size = 0, this._front = {
                        _elements: [],
                        _next: void 0
                    }, this._back = this._front, this._cursor = 0, this._size = 0;
                }
                get length() {
                    return this._size;
                }
                push(t) {
                    const r = this._back;
                    let o = r;
                    r._elements.length === 16383 && (o = {
                        _elements: [],
                        _next: void 0
                    }), r._elements.push(t), o !== r && (this._back = o, r._next = o), ++this._size;
                }
                shift() {
                    const t = this._front;
                    let r = t;
                    const o = this._cursor;
                    let n = o + 1;
                    const s = t._elements, i = s[o];
                    return n === 16384 && (r = t._next, n = 0), --this._size, this._cursor = n, t !== r && (this._front = r), s[o] = void 0, i;
                }
                forEach(t) {
                    let r = this._cursor, o = this._front, n = o._elements;
                    for(; !(r === n.length && o._next === void 0 || r === n.length && (o = o._next, n = o._elements, r = 0, n.length === 0));)t(n[r]), ++r;
                }
                peek() {
                    const t = this._front, r = this._cursor;
                    return t._elements[r];
                }
            }
            const we = Symbol("[[AbortSteps]]"), Z = Symbol("[[ErrorSteps]]"), oe = Symbol("[[CancelSteps]]"), ee = Symbol("[[PullSteps]]"), ke = Symbol("[[ReleaseSteps]]");
            function Ae(e, t) {
                e._ownerReadableStream = t, t._reader = e, t._state === "readable" ? kt(e) : t._state === "closed" ? function(r) {
                    kt(r), pr(r);
                }(e) : mr(e, t._storedError);
            }
            function Ne(e, t) {
                return re(e._ownerReadableStream, t);
            }
            function se(e) {
                const t = e._ownerReadableStream;
                t._state === "readable" ? At(e, new TypeError("Reader was released and can no longer be used to monitor the stream's closedness")) : function(r, o) {
                    mr(r, o);
                }(e, new TypeError("Reader was released and can no longer be used to monitor the stream's closedness")), t._readableStreamController[ke](), t._reader = void 0, e._ownerReadableStream = void 0;
            }
            function ot(e) {
                return new TypeError("Cannot " + e + " a stream using a released reader");
            }
            function kt(e) {
                e._closedPromise = P((t, r)=>{
                    e._closedPromise_resolve = t, e._closedPromise_reject = r;
                });
            }
            function mr(e, t) {
                kt(e), At(e, t);
            }
            function At(e, t) {
                e._closedPromise_reject !== void 0 && (O(e._closedPromise), e._closedPromise_reject(t), e._closedPromise_resolve = void 0, e._closedPromise_reject = void 0);
            }
            function pr(e) {
                e._closedPromise_resolve !== void 0 && (e._closedPromise_resolve(void 0), e._closedPromise_resolve = void 0, e._closedPromise_reject = void 0);
            }
            const _r = Number.isFinite || function(e) {
                return typeof e == "number" && isFinite(e);
            }, Fo = Math.trunc || function(e) {
                return e < 0 ? Math.ceil(e) : Math.floor(e);
            };
            function ne(e, t) {
                if (e !== void 0 && typeof (r = e) != "object" && typeof r != "function") throw new TypeError(`${t} is not an object.`);
                var r;
            }
            function K(e, t) {
                if (typeof e != "function") throw new TypeError(`${t} is not a function.`);
            }
            function yr(e, t) {
                if (!function(r) {
                    return typeof r == "object" && r !== null || typeof r == "function";
                }(e)) throw new TypeError(`${t} is not an object.`);
            }
            function le(e, t, r) {
                if (e === void 0) throw new TypeError(`Parameter ${t} is required in '${r}'.`);
            }
            function zt(e, t, r) {
                if (e === void 0) throw new TypeError(`${t} is required in '${r}'.`);
            }
            function Bt(e) {
                return Number(e);
            }
            function gr(e) {
                return e === 0 ? 0 : e;
            }
            function Lt(e, t) {
                const r = Number.MAX_SAFE_INTEGER;
                let o = Number(e);
                if (o = gr(o), !_r(o)) throw new TypeError(`${t} is not a finite number`);
                if (o = function(n) {
                    return gr(Fo(n));
                }(o), o < 0 || o > r) throw new TypeError(`${t} is outside the accepted range of 0 to ${r}, inclusive`);
                return _r(o) && o !== 0 ? o : 0;
            }
            function Ft(e, t) {
                if (!ye(e)) throw new TypeError(`${t} is not a ReadableStream.`);
            }
            function ze(e) {
                return new he(e);
            }
            function vr(e, t) {
                e._reader._readRequests.push(t);
            }
            function It(e, t, r) {
                const o = e._reader._readRequests.shift();
                r ? o._closeSteps() : o._chunkSteps(t);
            }
            function nt(e) {
                return e._reader._readRequests.length;
            }
            function wr(e) {
                const t = e._reader;
                return t !== void 0 && !!be(t);
            }
            class he {
                constructor(t){
                    if (le(t, 1, "ReadableStreamDefaultReader"), Ft(t, "First parameter"), ge(t)) throw new TypeError("This stream has already been locked for exclusive reading by another reader");
                    Ae(this, t), this._readRequests = new I;
                }
                get closed() {
                    return be(this) ? this._closedPromise : d(at("closed"));
                }
                cancel(t = void 0) {
                    return be(this) ? this._ownerReadableStream === void 0 ? d(ot("cancel")) : Ne(this, t) : d(at("cancel"));
                }
                read() {
                    if (!be(this)) return d(at("read"));
                    if (this._ownerReadableStream === void 0) return d(ot("read from"));
                    let t, r;
                    const o = P((n, s)=>{
                        t = n, r = s;
                    });
                    return Qe(this, {
                        _chunkSteps: (n)=>t({
                                value: n,
                                done: !1
                            }),
                        _closeSteps: ()=>t({
                                value: void 0,
                                done: !0
                            }),
                        _errorSteps: (n)=>r(n)
                    }), o;
                }
                releaseLock() {
                    if (!be(this)) throw at("releaseLock");
                    this._ownerReadableStream !== void 0 && function(t) {
                        se(t);
                        const r = new TypeError("Reader was released");
                        Sr(t, r);
                    }(this);
                }
            }
            function be(e) {
                return !!v(e) && !!Object.prototype.hasOwnProperty.call(e, "_readRequests") && e instanceof he;
            }
            function Qe(e, t) {
                const r = e._ownerReadableStream;
                r._disturbed = !0, r._state === "closed" ? t._closeSteps() : r._state === "errored" ? t._errorSteps(r._storedError) : r._readableStreamController[ee](t);
            }
            function Sr(e, t) {
                const r = e._readRequests;
                e._readRequests = new I, r.forEach((o)=>{
                    o._errorSteps(t);
                });
            }
            function at(e) {
                return new TypeError(`ReadableStreamDefaultReader.prototype.${e} can only be used on a ReadableStreamDefaultReader`);
            }
            var Mt, $t, Dt;
            function Ye(e) {
                return e.slice();
            }
            function Rr(e, t, r, o, n) {
                new Uint8Array(e).set(new Uint8Array(r, o, n), t);
            }
            Object.defineProperties(he.prototype, {
                cancel: {
                    enumerable: !0
                },
                read: {
                    enumerable: !0
                },
                releaseLock: {
                    enumerable: !0
                },
                closed: {
                    enumerable: !0
                }
            }), h(he.prototype.cancel, "cancel"), h(he.prototype.read, "read"), h(he.prototype.releaseLock, "releaseLock"), typeof Symbol.toStringTag == "symbol" && Object.defineProperty(he.prototype, Symbol.toStringTag, {
                value: "ReadableStreamDefaultReader",
                configurable: !0
            });
            let Se = (e)=>(Se = typeof e.transfer == "function" ? (t)=>t.transfer() : typeof structuredClone == "function" ? (t)=>structuredClone(t, {
                        transfer: [
                            t
                        ]
                    }) : (t)=>t, Se(e)), Re = (e)=>(Re = typeof e.detached == "boolean" ? (t)=>t.detached : (t)=>t.byteLength === 0, Re(e));
            function Tr(e, t, r) {
                if (e.slice) return e.slice(t, r);
                const o = r - t, n = new ArrayBuffer(o);
                return Rr(n, 0, e, t, o), n;
            }
            function Ue(e, t) {
                const r = e[t];
                if (r != null) {
                    if (typeof r != "function") throw new TypeError(`${String(t)} is not a function`);
                    return r;
                }
            }
            function Pr(e) {
                try {
                    const t = e.done, r = e.value;
                    return G(xe(r), (o)=>({
                            done: t,
                            value: o
                        }));
                } catch (t) {
                    return d(t);
                }
            }
            const He = (Dt = (Mt = Symbol.asyncIterator) !== null && Mt !== void 0 ? Mt : ($t = Symbol.for) === null || $t === void 0 ? void 0 : $t.call(Symbol, "Symbol.asyncIterator")) !== null && Dt !== void 0 ? Dt : "@@asyncIterator";
            function Er(e, t = "sync", r) {
                if (r === void 0) if (t === "async") {
                    if ((r = Ue(e, He)) === void 0) return function(n) {
                        const s = {
                            next () {
                                let i;
                                try {
                                    i = Cr(n);
                                } catch (a) {
                                    return d(a);
                                }
                                return Pr(i);
                            },
                            return (i) {
                                let a;
                                try {
                                    const l = Ue(n.iterator, "return");
                                    if (l === void 0) return y({
                                        done: !0,
                                        value: i
                                    });
                                    a = E(l, n.iterator, [
                                        i
                                    ]);
                                } catch (l) {
                                    return d(l);
                                }
                                return v(a) ? Pr(a) : d(new TypeError("The iterator.return() method must return an object"));
                            }
                        };
                        return {
                            iterator: s,
                            nextMethod: s.next,
                            done: !1
                        };
                    }(Er(e, "sync", Ue(e, Symbol.iterator)));
                } else r = Ue(e, Symbol.iterator);
                if (r === void 0) throw new TypeError("The object is not iterable");
                const o = E(r, e, []);
                if (!v(o)) throw new TypeError("The iterator method must return an object");
                return {
                    iterator: o,
                    nextMethod: o.next,
                    done: !1
                };
            }
            function Cr(e) {
                const t = E(e.nextMethod, e.iterator, []);
                if (!v(t)) throw new TypeError("The iterator.next() method must return an object");
                return t;
            }
            class qr {
                constructor(t, r){
                    this._ongoingPromise = void 0, this._isFinished = !1, this._reader = t, this._preventCancel = r;
                }
                next() {
                    const t = ()=>this._nextSteps();
                    return this._ongoingPromise = this._ongoingPromise ? F(this._ongoingPromise, t, t) : t(), this._ongoingPromise;
                }
                return(t) {
                    const r = ()=>this._returnSteps(t);
                    return this._ongoingPromise = this._ongoingPromise ? F(this._ongoingPromise, r, r) : r(), this._ongoingPromise;
                }
                _nextSteps() {
                    if (this._isFinished) return Promise.resolve({
                        value: void 0,
                        done: !0
                    });
                    const t = this._reader;
                    let r, o;
                    const n = P((s, i)=>{
                        r = s, o = i;
                    });
                    return Qe(t, {
                        _chunkSteps: (s)=>{
                            this._ongoingPromise = void 0, U(()=>r({
                                    value: s,
                                    done: !1
                                }));
                        },
                        _closeSteps: ()=>{
                            this._ongoingPromise = void 0, this._isFinished = !0, se(t), r({
                                value: void 0,
                                done: !0
                            });
                        },
                        _errorSteps: (s)=>{
                            this._ongoingPromise = void 0, this._isFinished = !0, se(t), o(s);
                        }
                    }), n;
                }
                _returnSteps(t) {
                    if (this._isFinished) return Promise.resolve({
                        value: t,
                        done: !0
                    });
                    this._isFinished = !0;
                    const r = this._reader;
                    if (!this._preventCancel) {
                        const o = Ne(r, t);
                        return se(r), F(o, ()=>({
                                value: t,
                                done: !0
                            }));
                    }
                    return se(r), y({
                        value: t,
                        done: !0
                    });
                }
            }
            const jr = {
                next () {
                    return Wr(this) ? this._asyncIteratorImpl.next() : d(Or("next"));
                },
                return (e) {
                    return Wr(this) ? this._asyncIteratorImpl.return(e) : d(Or("return"));
                },
                [He] () {
                    return this;
                }
            };
            function Wr(e) {
                if (!v(e) || !Object.prototype.hasOwnProperty.call(e, "_asyncIteratorImpl")) return !1;
                try {
                    return e._asyncIteratorImpl instanceof qr;
                } catch  {
                    return !1;
                }
            }
            function Or(e) {
                return new TypeError(`ReadableStreamAsyncIterator.${e} can only be used on a ReadableSteamAsyncIterator`);
            }
            Object.defineProperty(jr, He, {
                enumerable: !1
            });
            const kr = Number.isNaN || function(e) {
                return e != e;
            };
            function Ar(e) {
                const t = Tr(e.buffer, e.byteOffset, e.byteOffset + e.byteLength);
                return new Uint8Array(t);
            }
            function xt(e) {
                const t = e._queue.shift();
                return e._queueTotalSize -= t.size, e._queueTotalSize < 0 && (e._queueTotalSize = 0), t.value;
            }
            function Nt(e, t, r) {
                if (typeof (o = r) != "number" || kr(o) || o < 0 || r === 1 / 0) throw new RangeError("Size must be a finite, non-NaN, non-negative number.");
                var o;
                e._queue.push({
                    value: t,
                    size: r
                }), e._queueTotalSize += r;
            }
            function me(e) {
                e._queue = new I, e._queueTotalSize = 0;
            }
            function zr(e) {
                return e === DataView;
            }
            class Te {
                constructor(){
                    throw new TypeError("Illegal constructor");
                }
                get view() {
                    if (!Qt(this)) throw Vt("view");
                    return this._view;
                }
                respond(t) {
                    if (!Qt(this)) throw Vt("respond");
                    if (le(t, 1, "respond"), t = Lt(t, "First parameter"), this._associatedReadableByteStreamController === void 0) throw new TypeError("This BYOB request has been invalidated");
                    if (Re(this._view.buffer)) throw new TypeError("The BYOB request's buffer has been detached and so cannot be used as a response");
                    ct(this._associatedReadableByteStreamController, t);
                }
                respondWithNewView(t) {
                    if (!Qt(this)) throw Vt("respondWithNewView");
                    if (le(t, 1, "respondWithNewView"), !ArrayBuffer.isView(t)) throw new TypeError("You can only respond with array buffer views");
                    if (this._associatedReadableByteStreamController === void 0) throw new TypeError("This BYOB request has been invalidated");
                    if (Re(t.buffer)) throw new TypeError("The given view's buffer has been detached and so cannot be used as a response");
                    dt(this._associatedReadableByteStreamController, t);
                }
            }
            Object.defineProperties(Te.prototype, {
                respond: {
                    enumerable: !0
                },
                respondWithNewView: {
                    enumerable: !0
                },
                view: {
                    enumerable: !0
                }
            }), h(Te.prototype.respond, "respond"), h(Te.prototype.respondWithNewView, "respondWithNewView"), typeof Symbol.toStringTag == "symbol" && Object.defineProperty(Te.prototype, Symbol.toStringTag, {
                value: "ReadableStreamBYOBRequest",
                configurable: !0
            });
            class ue {
                constructor(){
                    throw new TypeError("Illegal constructor");
                }
                get byobRequest() {
                    if (!Pe(this)) throw Ge("byobRequest");
                    return Ht(this);
                }
                get desiredSize() {
                    if (!Pe(this)) throw Ge("desiredSize");
                    return Yr(this);
                }
                close() {
                    if (!Pe(this)) throw Ge("close");
                    if (this._closeRequested) throw new TypeError("The stream has already been closed; do not close it again!");
                    const t = this._controlledReadableByteStream._state;
                    if (t !== "readable") throw new TypeError(`The stream (in ${t} state) is not in the readable state and cannot be closed`);
                    Ve(this);
                }
                enqueue(t) {
                    if (!Pe(this)) throw Ge("enqueue");
                    if (le(t, 1, "enqueue"), !ArrayBuffer.isView(t)) throw new TypeError("chunk must be an array buffer view");
                    if (t.byteLength === 0) throw new TypeError("chunk must have non-zero byteLength");
                    if (t.buffer.byteLength === 0) throw new TypeError("chunk's buffer must have non-zero byteLength");
                    if (this._closeRequested) throw new TypeError("stream is closed or draining");
                    const r = this._controlledReadableByteStream._state;
                    if (r !== "readable") throw new TypeError(`The stream (in ${r} state) is not in the readable state and cannot be enqueued to`);
                    ut(this, t);
                }
                error(t = void 0) {
                    if (!Pe(this)) throw Ge("error");
                    X(this, t);
                }
                [oe](t) {
                    Br(this), me(this);
                    const r = this._cancelAlgorithm(t);
                    return lt(this), r;
                }
                [ee](t) {
                    const r = this._controlledReadableByteStream;
                    if (this._queueTotalSize > 0) return void Qr(this, t);
                    const o = this._autoAllocateChunkSize;
                    if (o !== void 0) {
                        let n;
                        try {
                            n = new ArrayBuffer(o);
                        } catch (i) {
                            return void t._errorSteps(i);
                        }
                        const s = {
                            buffer: n,
                            bufferByteLength: o,
                            byteOffset: 0,
                            byteLength: o,
                            bytesFilled: 0,
                            minimumFill: 1,
                            elementSize: 1,
                            viewConstructor: Uint8Array,
                            readerType: "default"
                        };
                        this._pendingPullIntos.push(s);
                    }
                    vr(r, t), Ee(this);
                }
                [ke]() {
                    if (this._pendingPullIntos.length > 0) {
                        const t = this._pendingPullIntos.peek();
                        t.readerType = "none", this._pendingPullIntos = new I, this._pendingPullIntos.push(t);
                    }
                }
            }
            function Pe(e) {
                return !!v(e) && !!Object.prototype.hasOwnProperty.call(e, "_controlledReadableByteStream") && e instanceof ue;
            }
            function Qt(e) {
                return !!v(e) && !!Object.prototype.hasOwnProperty.call(e, "_associatedReadableByteStreamController") && e instanceof Te;
            }
            function Ee(e) {
                if (function(r) {
                    const o = r._controlledReadableByteStream;
                    return o._state !== "readable" || r._closeRequested || !r._started ? !1 : !!(wr(o) && nt(o) > 0 || Gt(o) && Gr(o) > 0 || Yr(r) > 0);
                }(e)) {
                    if (e._pulling) return void (e._pullAgain = !0);
                    e._pulling = !0, $(e._pullAlgorithm(), ()=>(e._pulling = !1, e._pullAgain && (e._pullAgain = !1, Ee(e)), null), (r)=>(X(e, r), null));
                }
            }
            function Br(e) {
                Yt(e), e._pendingPullIntos = new I;
            }
            function Lr(e, t) {
                let r = !1;
                e._state === "closed" && (r = !0);
                const o = Fr(t);
                t.readerType === "default" ? It(e, o, r) : function(n, s, i) {
                    const a = n._reader, l = a._readIntoRequests.shift();
                    i ? l._closeSteps(s) : l._chunkSteps(s);
                }(e, o, r);
            }
            function it(e, t) {
                for(let r = 0; r < t.length; ++r)Lr(e, t[r]);
            }
            function Fr(e) {
                const t = e.bytesFilled, r = e.elementSize;
                return new e.viewConstructor(e.buffer, e.byteOffset, t / r);
            }
            function st(e, t, r, o) {
                e._queue.push({
                    buffer: t,
                    byteOffset: r,
                    byteLength: o
                }), e._queueTotalSize += o;
            }
            function Ir(e, t, r, o) {
                let n;
                try {
                    n = Tr(t, r, r + o);
                } catch (s) {
                    throw X(e, s), s;
                }
                st(e, n, 0, o);
            }
            function Mr(e, t) {
                t.bytesFilled > 0 && Ir(e, t.buffer, t.byteOffset, t.bytesFilled), Be(e);
            }
            function $r(e, t) {
                const r = Math.min(e._queueTotalSize, t.byteLength - t.bytesFilled), o = t.bytesFilled + r;
                let n = r, s = !1;
                const i = o - o % t.elementSize;
                i >= t.minimumFill && (n = i - t.bytesFilled, s = !0);
                const a = e._queue;
                for(; n > 0;){
                    const l = a.peek(), c = Math.min(n, l.byteLength), f = t.byteOffset + t.bytesFilled;
                    Rr(t.buffer, f, l.buffer, l.byteOffset, c), l.byteLength === c ? a.shift() : (l.byteOffset += c, l.byteLength -= c), e._queueTotalSize -= c, Dr(e, c, t), n -= c;
                }
                return s;
            }
            function Dr(e, t, r) {
                r.bytesFilled += t;
            }
            function xr(e) {
                e._queueTotalSize === 0 && e._closeRequested ? (lt(e), tt(e._controlledReadableByteStream)) : Ee(e);
            }
            function Yt(e) {
                e._byobRequest !== null && (e._byobRequest._associatedReadableByteStreamController = void 0, e._byobRequest._view = null, e._byobRequest = null);
            }
            function Ut(e) {
                const t = [];
                for(; e._pendingPullIntos.length > 0 && e._queueTotalSize !== 0;){
                    const r = e._pendingPullIntos.peek();
                    $r(e, r) && (Be(e), t.push(r));
                }
                return t;
            }
            function Io(e, t, r, o) {
                const n = e._controlledReadableByteStream, s = t.constructor, i = function(u) {
                    return zr(u) ? 1 : u.BYTES_PER_ELEMENT;
                }(s), { byteOffset: a, byteLength: l } = t, c = r * i;
                let f;
                try {
                    f = Se(t.buffer);
                } catch (u) {
                    return void o._errorSteps(u);
                }
                const g = {
                    buffer: f,
                    bufferByteLength: f.byteLength,
                    byteOffset: a,
                    byteLength: l,
                    bytesFilled: 0,
                    minimumFill: c,
                    elementSize: i,
                    viewConstructor: s,
                    readerType: "byob"
                };
                if (e._pendingPullIntos.length > 0) return e._pendingPullIntos.push(g), void Vr(n, o);
                if (n._state !== "closed") {
                    if (e._queueTotalSize > 0) {
                        if ($r(e, g)) {
                            const u = Fr(g);
                            return xr(e), void o._chunkSteps(u);
                        }
                        if (e._closeRequested) {
                            const u = new TypeError("Insufficient bytes to fill elements in the given buffer");
                            return X(e, u), void o._errorSteps(u);
                        }
                    }
                    e._pendingPullIntos.push(g), Vr(n, o), Ee(e);
                } else {
                    const u = new s(g.buffer, g.byteOffset, 0);
                    o._closeSteps(u);
                }
            }
            function Nr(e, t) {
                const r = e._pendingPullIntos.peek();
                Yt(e), e._controlledReadableByteStream._state === "closed" ? function(o, n) {
                    n.readerType === "none" && Be(o);
                    const s = o._controlledReadableByteStream;
                    if (Gt(s)) {
                        const i = [];
                        for(let a = 0; a < Gr(s); ++a)i.push(Be(o));
                        it(s, i);
                    }
                }(e, r) : function(o, n, s) {
                    if (Dr(0, n, s), s.readerType === "none") {
                        Mr(o, s);
                        const l = Ut(o);
                        return void it(o._controlledReadableByteStream, l);
                    }
                    if (s.bytesFilled < s.minimumFill) return;
                    Be(o);
                    const i = s.bytesFilled % s.elementSize;
                    if (i > 0) {
                        const l = s.byteOffset + s.bytesFilled;
                        Ir(o, s.buffer, l - i, i);
                    }
                    s.bytesFilled -= i;
                    const a = Ut(o);
                    Lr(o._controlledReadableByteStream, s), it(o._controlledReadableByteStream, a);
                }(e, t, r), Ee(e);
            }
            function Be(e) {
                return e._pendingPullIntos.shift();
            }
            function lt(e) {
                e._pullAlgorithm = void 0, e._cancelAlgorithm = void 0;
            }
            function Ve(e) {
                const t = e._controlledReadableByteStream;
                if (!e._closeRequested && t._state === "readable") if (e._queueTotalSize > 0) e._closeRequested = !0;
                else {
                    if (e._pendingPullIntos.length > 0) {
                        const r = e._pendingPullIntos.peek();
                        if (r.bytesFilled % r.elementSize != 0) {
                            const o = new TypeError("Insufficient bytes to fill elements in the given buffer");
                            throw X(e, o), o;
                        }
                    }
                    lt(e), tt(t);
                }
            }
            function ut(e, t) {
                const r = e._controlledReadableByteStream;
                if (e._closeRequested || r._state !== "readable") return;
                const { buffer: o, byteOffset: n, byteLength: s } = t;
                if (Re(o)) throw new TypeError("chunk's buffer is detached and so cannot be enqueued");
                const i = Se(o);
                if (e._pendingPullIntos.length > 0) {
                    const a = e._pendingPullIntos.peek();
                    if (Re(a.buffer)) throw new TypeError("The BYOB request's buffer has been detached and so cannot be filled with an enqueued chunk");
                    Yt(e), a.buffer = Se(a.buffer), a.readerType === "none" && Mr(e, a);
                }
                if (wr(r)) (function(a) {
                    const l = a._controlledReadableByteStream._reader;
                    for(; l._readRequests.length > 0;){
                        if (a._queueTotalSize === 0) return;
                        Qr(a, l._readRequests.shift());
                    }
                })(e), nt(r) === 0 ? st(e, i, n, s) : (e._pendingPullIntos.length > 0 && Be(e), It(r, new Uint8Array(i, n, s), !1));
                else if (Gt(r)) {
                    st(e, i, n, s);
                    const a = Ut(e);
                    it(e._controlledReadableByteStream, a);
                } else st(e, i, n, s);
                Ee(e);
            }
            function X(e, t) {
                const r = e._controlledReadableByteStream;
                r._state === "readable" && (Br(e), me(e), lt(e), vo(r, t));
            }
            function Qr(e, t) {
                const r = e._queue.shift();
                e._queueTotalSize -= r.byteLength, xr(e);
                const o = new Uint8Array(r.buffer, r.byteOffset, r.byteLength);
                t._chunkSteps(o);
            }
            function Ht(e) {
                if (e._byobRequest === null && e._pendingPullIntos.length > 0) {
                    const t = e._pendingPullIntos.peek(), r = new Uint8Array(t.buffer, t.byteOffset + t.bytesFilled, t.byteLength - t.bytesFilled), o = Object.create(Te.prototype);
                    (function(n, s, i) {
                        n._associatedReadableByteStreamController = s, n._view = i;
                    })(o, e, r), e._byobRequest = o;
                }
                return e._byobRequest;
            }
            function Yr(e) {
                const t = e._controlledReadableByteStream._state;
                return t === "errored" ? null : t === "closed" ? 0 : e._strategyHWM - e._queueTotalSize;
            }
            function ct(e, t) {
                const r = e._pendingPullIntos.peek();
                if (e._controlledReadableByteStream._state === "closed") {
                    if (t !== 0) throw new TypeError("bytesWritten must be 0 when calling respond() on a closed stream");
                } else {
                    if (t === 0) throw new TypeError("bytesWritten must be greater than 0 when calling respond() on a readable stream");
                    if (r.bytesFilled + t > r.byteLength) throw new RangeError("bytesWritten out of range");
                }
                r.buffer = Se(r.buffer), Nr(e, t);
            }
            function dt(e, t) {
                const r = e._pendingPullIntos.peek();
                if (e._controlledReadableByteStream._state === "closed") {
                    if (t.byteLength !== 0) throw new TypeError("The view's length must be 0 when calling respondWithNewView() on a closed stream");
                } else if (t.byteLength === 0) throw new TypeError("The view's length must be greater than 0 when calling respondWithNewView() on a readable stream");
                if (r.byteOffset + r.bytesFilled !== t.byteOffset) throw new RangeError("The region specified by view does not match byobRequest");
                if (r.bufferByteLength !== t.buffer.byteLength) throw new RangeError("The buffer of view has different capacity than byobRequest");
                if (r.bytesFilled + t.byteLength > r.byteLength) throw new RangeError("The region specified by view is larger than byobRequest");
                const o = t.byteLength;
                r.buffer = Se(t.buffer), Nr(e, o);
            }
            function Ur(e, t, r, o, n, s, i) {
                t._controlledReadableByteStream = e, t._pullAgain = !1, t._pulling = !1, t._byobRequest = null, t._queue = t._queueTotalSize = void 0, me(t), t._closeRequested = !1, t._started = !1, t._strategyHWM = s, t._pullAlgorithm = o, t._cancelAlgorithm = n, t._autoAllocateChunkSize = i, t._pendingPullIntos = new I, e._readableStreamController = t, $(y(r()), ()=>(t._started = !0, Ee(t), null), (a)=>(X(t, a), null));
            }
            function Vt(e) {
                return new TypeError(`ReadableStreamBYOBRequest.prototype.${e} can only be used on a ReadableStreamBYOBRequest`);
            }
            function Ge(e) {
                return new TypeError(`ReadableByteStreamController.prototype.${e} can only be used on a ReadableByteStreamController`);
            }
            function Mo(e, t) {
                if ((e = `${e}`) != "byob") throw new TypeError(`${t} '${e}' is not a valid enumeration value for ReadableStreamReaderMode`);
                return e;
            }
            function Hr(e) {
                return new pe(e);
            }
            function Vr(e, t) {
                e._reader._readIntoRequests.push(t);
            }
            function Gr(e) {
                return e._reader._readIntoRequests.length;
            }
            function Gt(e) {
                const t = e._reader;
                return t !== void 0 && !!Ce(t);
            }
            Object.defineProperties(ue.prototype, {
                close: {
                    enumerable: !0
                },
                enqueue: {
                    enumerable: !0
                },
                error: {
                    enumerable: !0
                },
                byobRequest: {
                    enumerable: !0
                },
                desiredSize: {
                    enumerable: !0
                }
            }), h(ue.prototype.close, "close"), h(ue.prototype.enqueue, "enqueue"), h(ue.prototype.error, "error"), typeof Symbol.toStringTag == "symbol" && Object.defineProperty(ue.prototype, Symbol.toStringTag, {
                value: "ReadableByteStreamController",
                configurable: !0
            });
            class pe {
                constructor(t){
                    if (le(t, 1, "ReadableStreamBYOBReader"), Ft(t, "First parameter"), ge(t)) throw new TypeError("This stream has already been locked for exclusive reading by another reader");
                    if (!Pe(t._readableStreamController)) throw new TypeError("Cannot construct a ReadableStreamBYOBReader for a stream not constructed with a byte source");
                    Ae(this, t), this._readIntoRequests = new I;
                }
                get closed() {
                    return Ce(this) ? this._closedPromise : d(ft("closed"));
                }
                cancel(t = void 0) {
                    return Ce(this) ? this._ownerReadableStream === void 0 ? d(ot("cancel")) : Ne(this, t) : d(ft("cancel"));
                }
                read(t, r = {}) {
                    if (!Ce(this)) return d(ft("read"));
                    if (!ArrayBuffer.isView(t)) return d(new TypeError("view must be an array buffer view"));
                    if (t.byteLength === 0) return d(new TypeError("view must have non-zero byteLength"));
                    if (t.buffer.byteLength === 0) return d(new TypeError("view's buffer must have non-zero byteLength"));
                    if (Re(t.buffer)) return d(new TypeError("view's buffer has been detached"));
                    let o;
                    try {
                        o = function(l, c) {
                            var f;
                            return ne(l, c), {
                                min: Lt((f = l?.min) !== null && f !== void 0 ? f : 1, `${c} has member 'min' that`)
                            };
                        }(r, "options");
                    } catch (l) {
                        return d(l);
                    }
                    const n = o.min;
                    if (n === 0) return d(new TypeError("options.min must be greater than 0"));
                    if (function(l) {
                        return zr(l.constructor);
                    }(t)) {
                        if (n > t.byteLength) return d(new RangeError("options.min must be less than or equal to view's byteLength"));
                    } else if (n > t.length) return d(new RangeError("options.min must be less than or equal to view's length"));
                    if (this._ownerReadableStream === void 0) return d(ot("read from"));
                    let s, i;
                    const a = P((l, c)=>{
                        s = l, i = c;
                    });
                    return Zr(this, t, n, {
                        _chunkSteps: (l)=>s({
                                value: l,
                                done: !1
                            }),
                        _closeSteps: (l)=>s({
                                value: l,
                                done: !0
                            }),
                        _errorSteps: (l)=>i(l)
                    }), a;
                }
                releaseLock() {
                    if (!Ce(this)) throw ft("releaseLock");
                    this._ownerReadableStream !== void 0 && function(t) {
                        se(t);
                        const r = new TypeError("Reader was released");
                        Kr(t, r);
                    }(this);
                }
            }
            function Ce(e) {
                return !!v(e) && !!Object.prototype.hasOwnProperty.call(e, "_readIntoRequests") && e instanceof pe;
            }
            function Zr(e, t, r, o) {
                const n = e._ownerReadableStream;
                n._disturbed = !0, n._state === "errored" ? o._errorSteps(n._storedError) : Io(n._readableStreamController, t, r, o);
            }
            function Kr(e, t) {
                const r = e._readIntoRequests;
                e._readIntoRequests = new I, r.forEach((o)=>{
                    o._errorSteps(t);
                });
            }
            function ft(e) {
                return new TypeError(`ReadableStreamBYOBReader.prototype.${e} can only be used on a ReadableStreamBYOBReader`);
            }
            function Ze(e, t) {
                const { highWaterMark: r } = e;
                if (r === void 0) return t;
                if (kr(r) || r < 0) throw new RangeError("Invalid highWaterMark");
                return r;
            }
            function ht(e) {
                const { size: t } = e;
                return t || (()=>1);
            }
            function bt(e, t) {
                ne(e, t);
                const r = e?.highWaterMark, o = e?.size;
                return {
                    highWaterMark: r === void 0 ? void 0 : Bt(r),
                    size: o === void 0 ? void 0 : $o(o, `${t} has member 'size' that`)
                };
            }
            function $o(e, t) {
                return K(e, t), (r)=>Bt(e(r));
            }
            function Do(e, t, r) {
                return K(e, r), (o)=>j(e, t, [
                        o
                    ]);
            }
            function xo(e, t, r) {
                return K(e, r), ()=>j(e, t, []);
            }
            function No(e, t, r) {
                return K(e, r), (o)=>E(e, t, [
                        o
                    ]);
            }
            function Qo(e, t, r) {
                return K(e, r), (o, n)=>j(e, t, [
                        o,
                        n
                    ]);
            }
            function Xr(e, t) {
                if (!Le(e)) throw new TypeError(`${t} is not a WritableStream.`);
            }
            Object.defineProperties(pe.prototype, {
                cancel: {
                    enumerable: !0
                },
                read: {
                    enumerable: !0
                },
                releaseLock: {
                    enumerable: !0
                },
                closed: {
                    enumerable: !0
                }
            }), h(pe.prototype.cancel, "cancel"), h(pe.prototype.read, "read"), h(pe.prototype.releaseLock, "releaseLock"), typeof Symbol.toStringTag == "symbol" && Object.defineProperty(pe.prototype, Symbol.toStringTag, {
                value: "ReadableStreamBYOBReader",
                configurable: !0
            });
            class _e {
                constructor(t = {}, r = {}){
                    t === void 0 ? t = null : yr(t, "First parameter");
                    const o = bt(r, "Second parameter"), n = function(i, a) {
                        ne(i, a);
                        const l = i?.abort, c = i?.close, f = i?.start, g = i?.type, u = i?.write;
                        return {
                            abort: l === void 0 ? void 0 : Do(l, i, `${a} has member 'abort' that`),
                            close: c === void 0 ? void 0 : xo(c, i, `${a} has member 'close' that`),
                            start: f === void 0 ? void 0 : No(f, i, `${a} has member 'start' that`),
                            write: u === void 0 ? void 0 : Qo(u, i, `${a} has member 'write' that`),
                            type: g
                        };
                    }(t, "First parameter");
                    if (eo(this), n.type !== void 0) throw new RangeError("Invalid type is specified");
                    const s = ht(o);
                    (function(i, a, l, c) {
                        const f = Object.create(Ie.prototype);
                        let g, u, b, A;
                        g = a.start !== void 0 ? ()=>a.start(f) : ()=>{}, u = a.write !== void 0 ? (z)=>a.write(z, f) : ()=>y(void 0), b = a.close !== void 0 ? ()=>a.close() : ()=>y(void 0), A = a.abort !== void 0 ? (z)=>a.abort(z) : ()=>y(void 0), so(i, f, g, u, b, A, l, c);
                    })(this, n, Ze(o, 1), s);
                }
                get locked() {
                    if (!Le(this)) throw gt("locked");
                    return Fe(this);
                }
                abort(t = void 0) {
                    return Le(this) ? Fe(this) ? d(new TypeError("Cannot abort a stream that already has a writer")) : mt(this, t) : d(gt("abort"));
                }
                close() {
                    return Le(this) ? Fe(this) ? d(new TypeError("Cannot close a stream that already has a writer")) : ae(this) ? d(new TypeError("Cannot close an already-closing stream")) : to(this) : d(gt("close"));
                }
                getWriter() {
                    if (!Le(this)) throw gt("getWriter");
                    return Jr(this);
                }
            }
            function Jr(e) {
                return new ce(e);
            }
            function eo(e) {
                e._state = "writable", e._storedError = void 0, e._writer = void 0, e._writableStreamController = void 0, e._writeRequests = new I, e._inFlightWriteRequest = void 0, e._closeRequest = void 0, e._inFlightCloseRequest = void 0, e._pendingAbortRequest = void 0, e._backpressure = !1;
            }
            function Le(e) {
                return !!v(e) && !!Object.prototype.hasOwnProperty.call(e, "_writableStreamController") && e instanceof _e;
            }
            function Fe(e) {
                return e._writer !== void 0;
            }
            function mt(e, t) {
                var r;
                if (e._state === "closed" || e._state === "errored") return y(void 0);
                e._writableStreamController._abortReason = t, (r = e._writableStreamController._abortController) === null || r === void 0 || r.abort(t);
                const o = e._state;
                if (o === "closed" || o === "errored") return y(void 0);
                if (e._pendingAbortRequest !== void 0) return e._pendingAbortRequest._promise;
                let n = !1;
                o === "erroring" && (n = !0, t = void 0);
                const s = P((i, a)=>{
                    e._pendingAbortRequest = {
                        _promise: void 0,
                        _resolve: i,
                        _reject: a,
                        _reason: t,
                        _wasAlreadyErroring: n
                    };
                });
                return e._pendingAbortRequest._promise = s, n || Kt(e, t), s;
            }
            function to(e) {
                const t = e._state;
                if (t === "closed" || t === "errored") return d(new TypeError(`The stream (in ${t} state) is not in the writable state and cannot be closed`));
                const r = P((s, i)=>{
                    const a = {
                        _resolve: s,
                        _reject: i
                    };
                    e._closeRequest = a;
                }), o = e._writer;
                var n;
                return o !== void 0 && e._backpressure && t === "writable" && ar(o), Nt(n = e._writableStreamController, io, 0), yt(n), r;
            }
            function Zt(e, t) {
                e._state !== "writable" ? Xt(e) : Kt(e, t);
            }
            function Kt(e, t) {
                const r = e._writableStreamController;
                e._state = "erroring", e._storedError = t;
                const o = e._writer;
                o !== void 0 && oo(o, t), !function(n) {
                    return !(n._inFlightWriteRequest === void 0 && n._inFlightCloseRequest === void 0);
                }(e) && r._started && Xt(e);
            }
            function Xt(e) {
                e._state = "errored", e._writableStreamController[Z]();
                const t = e._storedError;
                if (e._writeRequests.forEach((o)=>{
                    o._reject(t);
                }), e._writeRequests = new I, e._pendingAbortRequest === void 0) return void pt(e);
                const r = e._pendingAbortRequest;
                if (e._pendingAbortRequest = void 0, r._wasAlreadyErroring) return r._reject(t), void pt(e);
                $(e._writableStreamController[we](r._reason), ()=>(r._resolve(), pt(e), null), (o)=>(r._reject(o), pt(e), null));
            }
            function ae(e) {
                return e._closeRequest !== void 0 || e._inFlightCloseRequest !== void 0;
            }
            function pt(e) {
                e._closeRequest !== void 0 && (e._closeRequest._reject(e._storedError), e._closeRequest = void 0);
                const t = e._writer;
                t !== void 0 && or(t, e._storedError);
            }
            function Jt(e, t) {
                const r = e._writer;
                r !== void 0 && t !== e._backpressure && (t ? function(o) {
                    wt(o);
                }(r) : ar(r)), e._backpressure = t;
            }
            Object.defineProperties(_e.prototype, {
                abort: {
                    enumerable: !0
                },
                close: {
                    enumerable: !0
                },
                getWriter: {
                    enumerable: !0
                },
                locked: {
                    enumerable: !0
                }
            }), h(_e.prototype.abort, "abort"), h(_e.prototype.close, "close"), h(_e.prototype.getWriter, "getWriter"), typeof Symbol.toStringTag == "symbol" && Object.defineProperty(_e.prototype, Symbol.toStringTag, {
                value: "WritableStream",
                configurable: !0
            });
            class ce {
                constructor(t){
                    if (le(t, 1, "WritableStreamDefaultWriter"), Xr(t, "First parameter"), Fe(t)) throw new TypeError("This stream has already been locked for exclusive writing by another writer");
                    this._ownerWritableStream = t, t._writer = this;
                    const r = t._state;
                    if (r === "writable") !ae(t) && t._backpressure ? wt(this) : ho(this), vt(this);
                    else if (r === "erroring") nr(this, t._storedError), vt(this);
                    else if (r === "closed") ho(this), vt(o = this), fo(o);
                    else {
                        const n = t._storedError;
                        nr(this, n), co(this, n);
                    }
                    var o;
                }
                get closed() {
                    return qe(this) ? this._closedPromise : d(je("closed"));
                }
                get desiredSize() {
                    if (!qe(this)) throw je("desiredSize");
                    if (this._ownerWritableStream === void 0) throw Xe("desiredSize");
                    return function(t) {
                        const r = t._ownerWritableStream, o = r._state;
                        return o === "errored" || o === "erroring" ? null : o === "closed" ? 0 : lo(r._writableStreamController);
                    }(this);
                }
                get ready() {
                    return qe(this) ? this._readyPromise : d(je("ready"));
                }
                abort(t = void 0) {
                    return qe(this) ? this._ownerWritableStream === void 0 ? d(Xe("abort")) : function(r, o) {
                        return mt(r._ownerWritableStream, o);
                    }(this, t) : d(je("abort"));
                }
                close() {
                    if (!qe(this)) return d(je("close"));
                    const t = this._ownerWritableStream;
                    return t === void 0 ? d(Xe("close")) : ae(t) ? d(new TypeError("Cannot close an already-closing stream")) : ro(this);
                }
                releaseLock() {
                    if (!qe(this)) throw je("releaseLock");
                    this._ownerWritableStream !== void 0 && no(this);
                }
                write(t = void 0) {
                    return qe(this) ? this._ownerWritableStream === void 0 ? d(Xe("write to")) : ao(this, t) : d(je("write"));
                }
            }
            function qe(e) {
                return !!v(e) && !!Object.prototype.hasOwnProperty.call(e, "_ownerWritableStream") && e instanceof ce;
            }
            function ro(e) {
                return to(e._ownerWritableStream);
            }
            function Yo(e, t) {
                e._closedPromiseState === "pending" ? or(e, t) : function(r, o) {
                    co(r, o);
                }(e, t);
            }
            function oo(e, t) {
                e._readyPromiseState === "pending" ? bo(e, t) : function(r, o) {
                    nr(r, o);
                }(e, t);
            }
            function no(e) {
                const t = e._ownerWritableStream, r = new TypeError("Writer was released and can no longer be used to monitor the stream's closedness");
                oo(e, r), Yo(e, r), t._writer = void 0, e._ownerWritableStream = void 0;
            }
            function ao(e, t) {
                const r = e._ownerWritableStream, o = r._writableStreamController, n = function(a, l) {
                    if (a._strategySizeAlgorithm === void 0) return 1;
                    try {
                        return a._strategySizeAlgorithm(l);
                    } catch (c) {
                        return Ke(a, c), 1;
                    }
                }(o, t);
                if (r !== e._ownerWritableStream) return d(Xe("write to"));
                const s = r._state;
                if (s === "errored") return d(r._storedError);
                if (ae(r) || s === "closed") return d(new TypeError("The stream is closing or closed and cannot be written to"));
                if (s === "erroring") return d(r._storedError);
                const i = function(a) {
                    return P((l, c)=>{
                        const f = {
                            _resolve: l,
                            _reject: c
                        };
                        a._writeRequests.push(f);
                    });
                }(r);
                return function(a, l, c) {
                    try {
                        Nt(a, l, c);
                    } catch (g) {
                        return void Ke(a, g);
                    }
                    const f = a._controlledWritableStream;
                    !ae(f) && f._state === "writable" && Jt(f, tr(a)), yt(a);
                }(o, t, n), i;
            }
            Object.defineProperties(ce.prototype, {
                abort: {
                    enumerable: !0
                },
                close: {
                    enumerable: !0
                },
                releaseLock: {
                    enumerable: !0
                },
                write: {
                    enumerable: !0
                },
                closed: {
                    enumerable: !0
                },
                desiredSize: {
                    enumerable: !0
                },
                ready: {
                    enumerable: !0
                }
            }), h(ce.prototype.abort, "abort"), h(ce.prototype.close, "close"), h(ce.prototype.releaseLock, "releaseLock"), h(ce.prototype.write, "write"), typeof Symbol.toStringTag == "symbol" && Object.defineProperty(ce.prototype, Symbol.toStringTag, {
                value: "WritableStreamDefaultWriter",
                configurable: !0
            });
            const io = {};
            class Ie {
                constructor(){
                    throw new TypeError("Illegal constructor");
                }
                get abortReason() {
                    if (!er(this)) throw rr("abortReason");
                    return this._abortReason;
                }
                get signal() {
                    if (!er(this)) throw rr("signal");
                    if (this._abortController === void 0) throw new TypeError("WritableStreamDefaultController.prototype.signal is not supported");
                    return this._abortController.signal;
                }
                error(t = void 0) {
                    if (!er(this)) throw rr("error");
                    this._controlledWritableStream._state === "writable" && uo(this, t);
                }
                [we](t) {
                    const r = this._abortAlgorithm(t);
                    return _t(this), r;
                }
                [Z]() {
                    me(this);
                }
            }
            function er(e) {
                return !!v(e) && !!Object.prototype.hasOwnProperty.call(e, "_controlledWritableStream") && e instanceof Ie;
            }
            function so(e, t, r, o, n, s, i, a) {
                t._controlledWritableStream = e, e._writableStreamController = t, t._queue = void 0, t._queueTotalSize = void 0, me(t), t._abortReason = void 0, t._abortController = function() {
                    if (typeof AbortController == "function") return new AbortController;
                }(), t._started = !1, t._strategySizeAlgorithm = a, t._strategyHWM = i, t._writeAlgorithm = o, t._closeAlgorithm = n, t._abortAlgorithm = s;
                const l = tr(t);
                Jt(e, l), $(y(r()), ()=>(t._started = !0, yt(t), null), (c)=>(t._started = !0, Zt(e, c), null));
            }
            function _t(e) {
                e._writeAlgorithm = void 0, e._closeAlgorithm = void 0, e._abortAlgorithm = void 0, e._strategySizeAlgorithm = void 0;
            }
            function lo(e) {
                return e._strategyHWM - e._queueTotalSize;
            }
            function yt(e) {
                const t = e._controlledWritableStream;
                if (!e._started || t._inFlightWriteRequest !== void 0) return;
                if (t._state === "erroring") return void Xt(t);
                if (e._queue.length === 0) return;
                const r = e._queue.peek().value;
                r === io ? function(o) {
                    const n = o._controlledWritableStream;
                    (function(i) {
                        i._inFlightCloseRequest = i._closeRequest, i._closeRequest = void 0;
                    })(n), xt(o);
                    const s = o._closeAlgorithm();
                    _t(o), $(s, ()=>(function(i) {
                            i._inFlightCloseRequest._resolve(void 0), i._inFlightCloseRequest = void 0, i._state === "erroring" && (i._storedError = void 0, i._pendingAbortRequest !== void 0 && (i._pendingAbortRequest._resolve(), i._pendingAbortRequest = void 0)), i._state = "closed";
                            const a = i._writer;
                            a !== void 0 && fo(a);
                        }(n), null), (i)=>(function(a, l) {
                            a._inFlightCloseRequest._reject(l), a._inFlightCloseRequest = void 0, a._pendingAbortRequest !== void 0 && (a._pendingAbortRequest._reject(l), a._pendingAbortRequest = void 0), Zt(a, l);
                        }(n, i), null));
                }(e) : function(o, n) {
                    const s = o._controlledWritableStream;
                    (function(a) {
                        a._inFlightWriteRequest = a._writeRequests.shift();
                    })(s);
                    const i = o._writeAlgorithm(n);
                    $(i, ()=>{
                        (function(l) {
                            l._inFlightWriteRequest._resolve(void 0), l._inFlightWriteRequest = void 0;
                        })(s);
                        const a = s._state;
                        if (xt(o), !ae(s) && a === "writable") {
                            const l = tr(o);
                            Jt(s, l);
                        }
                        return yt(o), null;
                    }, (a)=>(s._state === "writable" && _t(o), function(l, c) {
                            l._inFlightWriteRequest._reject(c), l._inFlightWriteRequest = void 0, Zt(l, c);
                        }(s, a), null));
                }(e, r);
            }
            function Ke(e, t) {
                e._controlledWritableStream._state === "writable" && uo(e, t);
            }
            function tr(e) {
                return lo(e) <= 0;
            }
            function uo(e, t) {
                const r = e._controlledWritableStream;
                _t(e), Kt(r, t);
            }
            function gt(e) {
                return new TypeError(`WritableStream.prototype.${e} can only be used on a WritableStream`);
            }
            function rr(e) {
                return new TypeError(`WritableStreamDefaultController.prototype.${e} can only be used on a WritableStreamDefaultController`);
            }
            function je(e) {
                return new TypeError(`WritableStreamDefaultWriter.prototype.${e} can only be used on a WritableStreamDefaultWriter`);
            }
            function Xe(e) {
                return new TypeError("Cannot " + e + " a stream using a released writer");
            }
            function vt(e) {
                e._closedPromise = P((t, r)=>{
                    e._closedPromise_resolve = t, e._closedPromise_reject = r, e._closedPromiseState = "pending";
                });
            }
            function co(e, t) {
                vt(e), or(e, t);
            }
            function or(e, t) {
                e._closedPromise_reject !== void 0 && (O(e._closedPromise), e._closedPromise_reject(t), e._closedPromise_resolve = void 0, e._closedPromise_reject = void 0, e._closedPromiseState = "rejected");
            }
            function fo(e) {
                e._closedPromise_resolve !== void 0 && (e._closedPromise_resolve(void 0), e._closedPromise_resolve = void 0, e._closedPromise_reject = void 0, e._closedPromiseState = "resolved");
            }
            function wt(e) {
                e._readyPromise = P((t, r)=>{
                    e._readyPromise_resolve = t, e._readyPromise_reject = r;
                }), e._readyPromiseState = "pending";
            }
            function nr(e, t) {
                wt(e), bo(e, t);
            }
            function ho(e) {
                wt(e), ar(e);
            }
            function bo(e, t) {
                e._readyPromise_reject !== void 0 && (O(e._readyPromise), e._readyPromise_reject(t), e._readyPromise_resolve = void 0, e._readyPromise_reject = void 0, e._readyPromiseState = "rejected");
            }
            function ar(e) {
                e._readyPromise_resolve !== void 0 && (e._readyPromise_resolve(void 0), e._readyPromise_resolve = void 0, e._readyPromise_reject = void 0, e._readyPromiseState = "fulfilled");
            }
            Object.defineProperties(Ie.prototype, {
                abortReason: {
                    enumerable: !0
                },
                signal: {
                    enumerable: !0
                },
                error: {
                    enumerable: !0
                }
            }), typeof Symbol.toStringTag == "symbol" && Object.defineProperty(Ie.prototype, Symbol.toStringTag, {
                value: "WritableStreamDefaultController",
                configurable: !0
            });
            const ir = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof Ao < "u" ? Ao : void 0, Uo = function() {
                const e = ir?.DOMException;
                return function(t) {
                    if (typeof t != "function" && typeof t != "object" || t.name !== "DOMException") return !1;
                    try {
                        return new t, !0;
                    } catch  {
                        return !1;
                    }
                }(e) ? e : void 0;
            }() || function() {
                const e = function(t, r) {
                    this.message = t || "", this.name = r || "Error", Error.captureStackTrace && Error.captureStackTrace(this, this.constructor);
                };
                return h(e, "DOMException"), e.prototype = Object.create(Error.prototype), Object.defineProperty(e.prototype, "constructor", {
                    value: e,
                    writable: !0,
                    configurable: !0
                }), e;
            }();
            function mo(e, t, r, o, n, s) {
                const i = ze(e), a = Jr(t);
                e._disturbed = !0;
                let l = !1, c = y(void 0);
                return P((f, g)=>{
                    let u;
                    if (s !== void 0) {
                        if (u = ()=>{
                            const m = s.reason !== void 0 ? s.reason : new Uo("Aborted", "AbortError"), k = [];
                            o || k.push(()=>t._state === "writable" ? mt(t, m) : y(void 0)), n || k.push(()=>e._state === "readable" ? re(e, m) : y(void 0)), C(()=>Promise.all(k.map((S)=>S())), !0, m);
                        }, s.aborted) return void u();
                        s.addEventListener("abort", u);
                    }
                    var b, A, z;
                    if (Q(e, i._closedPromise, (m)=>(o ? w(!0, m) : C(()=>mt(t, m), !0, m), null)), Q(t, a._closedPromise, (m)=>(n ? w(!0, m) : C(()=>re(e, m), !0, m), null)), b = e, A = i._closedPromise, z = ()=>(r ? w() : C(()=>function(m) {
                                const k = m._ownerWritableStream, S = k._state;
                                return ae(k) || S === "closed" ? y(void 0) : S === "errored" ? d(k._storedError) : ro(m);
                            }(a)), null), b._state === "closed" ? z() : L(A, z), ae(t) || t._state === "closed") {
                        const m = new TypeError("the destination writable stream closed before all data could be piped to it");
                        n ? w(!0, m) : C(()=>re(e, m), !0, m);
                    }
                    function N() {
                        const m = c;
                        return G(c, ()=>m !== c ? N() : void 0);
                    }
                    function Q(m, k, S) {
                        m._state === "errored" ? S(m._storedError) : T(k, S);
                    }
                    function C(m, k, S) {
                        function R() {
                            return $(m(), ()=>x(k, S), (p)=>x(!0, p)), null;
                        }
                        l || (l = !0, t._state !== "writable" || ae(t) ? R() : L(N(), R));
                    }
                    function w(m, k) {
                        l || (l = !0, t._state !== "writable" || ae(t) ? x(m, k) : L(N(), ()=>x(m, k)));
                    }
                    function x(m, k) {
                        return no(a), se(i), s !== void 0 && s.removeEventListener("abort", u), m ? g(k) : f(void 0), null;
                    }
                    O(P((m, k)=>{
                        (function S(R) {
                            R ? m() : G(l ? y(!0) : G(a._readyPromise, ()=>P((p, q)=>{
                                    Qe(i, {
                                        _chunkSteps: (_)=>{
                                            c = G(ao(a, _), void 0, V), p(!1);
                                        },
                                        _closeSteps: ()=>p(!0),
                                        _errorSteps: q
                                    });
                                })), S, k);
                        })(!1);
                    }));
                });
            }
            class de {
                constructor(){
                    throw new TypeError("Illegal constructor");
                }
                get desiredSize() {
                    if (!St(this)) throw Tt("desiredSize");
                    return sr(this);
                }
                close() {
                    if (!St(this)) throw Tt("close");
                    if (!$e(this)) throw new TypeError("The stream is not in a state that permits close");
                    We(this);
                }
                enqueue(t = void 0) {
                    if (!St(this)) throw Tt("enqueue");
                    if (!$e(this)) throw new TypeError("The stream is not in a state that permits enqueue");
                    return Me(this, t);
                }
                error(t = void 0) {
                    if (!St(this)) throw Tt("error");
                    te(this, t);
                }
                [oe](t) {
                    me(this);
                    const r = this._cancelAlgorithm(t);
                    return Rt(this), r;
                }
                [ee](t) {
                    const r = this._controlledReadableStream;
                    if (this._queue.length > 0) {
                        const o = xt(this);
                        this._closeRequested && this._queue.length === 0 ? (Rt(this), tt(r)) : Je(this), t._chunkSteps(o);
                    } else vr(r, t), Je(this);
                }
                [ke]() {}
            }
            function St(e) {
                return !!v(e) && !!Object.prototype.hasOwnProperty.call(e, "_controlledReadableStream") && e instanceof de;
            }
            function Je(e) {
                if (po(e)) {
                    if (e._pulling) return void (e._pullAgain = !0);
                    e._pulling = !0, $(e._pullAlgorithm(), ()=>(e._pulling = !1, e._pullAgain && (e._pullAgain = !1, Je(e)), null), (t)=>(te(e, t), null));
                }
            }
            function po(e) {
                const t = e._controlledReadableStream;
                return !$e(e) || !e._started ? !1 : ge(t) && nt(t) > 0 ? !0 : sr(e) > 0;
            }
            function Rt(e) {
                e._pullAlgorithm = void 0, e._cancelAlgorithm = void 0, e._strategySizeAlgorithm = void 0;
            }
            function We(e) {
                if (!$e(e)) return;
                const t = e._controlledReadableStream;
                e._closeRequested = !0, e._queue.length === 0 && (Rt(e), tt(t));
            }
            function Me(e, t) {
                if (!$e(e)) return;
                const r = e._controlledReadableStream;
                if (ge(r) && nt(r) > 0) It(r, t, !1);
                else {
                    let o;
                    try {
                        o = e._strategySizeAlgorithm(t);
                    } catch (n) {
                        throw te(e, n), n;
                    }
                    try {
                        Nt(e, t, o);
                    } catch (n) {
                        throw te(e, n), n;
                    }
                }
                Je(e);
            }
            function te(e, t) {
                const r = e._controlledReadableStream;
                r._state === "readable" && (me(e), Rt(e), vo(r, t));
            }
            function sr(e) {
                const t = e._controlledReadableStream._state;
                return t === "errored" ? null : t === "closed" ? 0 : e._strategyHWM - e._queueTotalSize;
            }
            function $e(e) {
                const t = e._controlledReadableStream._state;
                return !e._closeRequested && t === "readable";
            }
            function _o(e, t, r, o, n, s, i) {
                t._controlledReadableStream = e, t._queue = void 0, t._queueTotalSize = void 0, me(t), t._started = !1, t._closeRequested = !1, t._pullAgain = !1, t._pulling = !1, t._strategySizeAlgorithm = i, t._strategyHWM = s, t._pullAlgorithm = o, t._cancelAlgorithm = n, e._readableStreamController = t, $(y(r()), ()=>(t._started = !0, Je(t), null), (a)=>(te(t, a), null));
            }
            function Tt(e) {
                return new TypeError(`ReadableStreamDefaultController.prototype.${e} can only be used on a ReadableStreamDefaultController`);
            }
            function Ho(e, t) {
                return Pe(e._readableStreamController) ? function(r) {
                    let o, n, s, i, a, l = ze(r), c = !1, f = !1, g = !1, u = !1, b = !1;
                    const A = P((S)=>{
                        a = S;
                    });
                    function z(S) {
                        T(S._closedPromise, (R)=>(S !== l || (X(s._readableStreamController, R), X(i._readableStreamController, R), u && b || a(void 0)), null));
                    }
                    function N() {
                        Ce(l) && (se(l), l = ze(r), z(l)), Qe(l, {
                            _chunkSteps: (S)=>{
                                U(()=>{
                                    f = !1, g = !1;
                                    const R = S;
                                    let p = S;
                                    if (!u && !b) try {
                                        p = Ar(S);
                                    } catch (q) {
                                        return X(s._readableStreamController, q), X(i._readableStreamController, q), void a(re(r, q));
                                    }
                                    u || ut(s._readableStreamController, R), b || ut(i._readableStreamController, p), c = !1, f ? C() : g && w();
                                });
                            },
                            _closeSteps: ()=>{
                                c = !1, u || Ve(s._readableStreamController), b || Ve(i._readableStreamController), s._readableStreamController._pendingPullIntos.length > 0 && ct(s._readableStreamController, 0), i._readableStreamController._pendingPullIntos.length > 0 && ct(i._readableStreamController, 0), u && b || a(void 0);
                            },
                            _errorSteps: ()=>{
                                c = !1;
                            }
                        });
                    }
                    function Q(S, R) {
                        be(l) && (se(l), l = Hr(r), z(l));
                        const p = R ? i : s, q = R ? s : i;
                        Zr(l, S, 1, {
                            _chunkSteps: (_)=>{
                                U(()=>{
                                    f = !1, g = !1;
                                    const W = R ? b : u;
                                    if (R ? u : b) W || dt(p._readableStreamController, _);
                                    else {
                                        let H;
                                        try {
                                            H = Ar(_);
                                        } catch (M) {
                                            return X(p._readableStreamController, M), X(q._readableStreamController, M), void a(re(r, M));
                                        }
                                        W || dt(p._readableStreamController, _), ut(q._readableStreamController, H);
                                    }
                                    c = !1, f ? C() : g && w();
                                });
                            },
                            _closeSteps: (_)=>{
                                c = !1;
                                const W = R ? b : u, H = R ? u : b;
                                W || Ve(p._readableStreamController), H || Ve(q._readableStreamController), _ !== void 0 && (W || dt(p._readableStreamController, _), !H && q._readableStreamController._pendingPullIntos.length > 0 && ct(q._readableStreamController, 0)), W && H || a(void 0);
                            },
                            _errorSteps: ()=>{
                                c = !1;
                            }
                        });
                    }
                    function C() {
                        if (c) return f = !0, y(void 0);
                        c = !0;
                        const S = Ht(s._readableStreamController);
                        return S === null ? N() : Q(S._view, !1), y(void 0);
                    }
                    function w() {
                        if (c) return g = !0, y(void 0);
                        c = !0;
                        const S = Ht(i._readableStreamController);
                        return S === null ? N() : Q(S._view, !0), y(void 0);
                    }
                    function x(S) {
                        if (u = !0, o = S, b) {
                            const R = Ye([
                                o,
                                n
                            ]), p = re(r, R);
                            a(p);
                        }
                        return A;
                    }
                    function m(S) {
                        if (b = !0, n = S, u) {
                            const R = Ye([
                                o,
                                n
                            ]), p = re(r, R);
                            a(p);
                        }
                        return A;
                    }
                    function k() {}
                    return s = go(k, C, x), i = go(k, w, m), z(l), [
                        s,
                        i
                    ];
                }(e) : function(r, o) {
                    const n = ze(r);
                    let s, i, a, l, c, f = !1, g = !1, u = !1, b = !1;
                    const A = P((w)=>{
                        c = w;
                    });
                    function z() {
                        return f ? (g = !0, y(void 0)) : (f = !0, Qe(n, {
                            _chunkSteps: (w)=>{
                                U(()=>{
                                    g = !1;
                                    const x = w, m = w;
                                    u || Me(a._readableStreamController, x), b || Me(l._readableStreamController, m), f = !1, g && z();
                                });
                            },
                            _closeSteps: ()=>{
                                f = !1, u || We(a._readableStreamController), b || We(l._readableStreamController), u && b || c(void 0);
                            },
                            _errorSteps: ()=>{
                                f = !1;
                            }
                        }), y(void 0));
                    }
                    function N(w) {
                        if (u = !0, s = w, b) {
                            const x = Ye([
                                s,
                                i
                            ]), m = re(r, x);
                            c(m);
                        }
                        return A;
                    }
                    function Q(w) {
                        if (b = !0, i = w, u) {
                            const x = Ye([
                                s,
                                i
                            ]), m = re(r, x);
                            c(m);
                        }
                        return A;
                    }
                    function C() {}
                    return a = et(C, z, N), l = et(C, z, Q), T(n._closedPromise, (w)=>(te(a._readableStreamController, w), te(l._readableStreamController, w), u && b || c(void 0), null)), [
                        a,
                        l
                    ];
                }(e);
            }
            function Vo(e) {
                return v(t = e) && t.getReader !== void 0 ? function(r) {
                    let o;
                    function n() {
                        let i;
                        try {
                            i = r.read();
                        } catch (a) {
                            return d(a);
                        }
                        return F(i, (a)=>{
                            if (!v(a)) throw new TypeError("The promise returned by the reader.read() method must fulfill with an object");
                            if (a.done) We(o._readableStreamController);
                            else {
                                const l = a.value;
                                Me(o._readableStreamController, l);
                            }
                        });
                    }
                    function s(i) {
                        try {
                            return y(r.cancel(i));
                        } catch (a) {
                            return d(a);
                        }
                    }
                    return o = et(V, n, s, 0), o;
                }(e.getReader()) : function(r) {
                    let o;
                    const n = Er(r, "async");
                    function s() {
                        let a;
                        try {
                            a = Cr(n);
                        } catch (l) {
                            return d(l);
                        }
                        return F(y(a), (l)=>{
                            if (!v(l)) throw new TypeError("The promise returned by the iterator.next() method must fulfill with an object");
                            if (l.done) We(o._readableStreamController);
                            else {
                                const c = l.value;
                                Me(o._readableStreamController, c);
                            }
                        });
                    }
                    function i(a) {
                        const l = n.iterator;
                        let c;
                        try {
                            c = Ue(l, "return");
                        } catch (f) {
                            return d(f);
                        }
                        return c === void 0 ? y(void 0) : F(j(c, l, [
                            a
                        ]), (f)=>{
                            if (!v(f)) throw new TypeError("The promise returned by the iterator.return() method must fulfill with an object");
                        });
                    }
                    return o = et(V, s, i, 0), o;
                }(e);
                var t;
            }
            function Go(e, t, r) {
                return K(e, r), (o)=>j(e, t, [
                        o
                    ]);
            }
            function Zo(e, t, r) {
                return K(e, r), (o)=>j(e, t, [
                        o
                    ]);
            }
            function Ko(e, t, r) {
                return K(e, r), (o)=>E(e, t, [
                        o
                    ]);
            }
            function Xo(e, t) {
                if ((e = `${e}`) != "bytes") throw new TypeError(`${t} '${e}' is not a valid enumeration value for ReadableStreamType`);
                return e;
            }
            function yo(e, t) {
                ne(e, t);
                const r = e?.preventAbort, o = e?.preventCancel, n = e?.preventClose, s = e?.signal;
                return s !== void 0 && function(i, a) {
                    if (!function(l) {
                        if (typeof l != "object" || l === null) return !1;
                        try {
                            return typeof l.aborted == "boolean";
                        } catch  {
                            return !1;
                        }
                    }(i)) throw new TypeError(`${a} is not an AbortSignal.`);
                }(s, `${t} has member 'signal' that`), {
                    preventAbort: !!r,
                    preventCancel: !!o,
                    preventClose: !!n,
                    signal: s
                };
            }
            Object.defineProperties(de.prototype, {
                close: {
                    enumerable: !0
                },
                enqueue: {
                    enumerable: !0
                },
                error: {
                    enumerable: !0
                },
                desiredSize: {
                    enumerable: !0
                }
            }), h(de.prototype.close, "close"), h(de.prototype.enqueue, "enqueue"), h(de.prototype.error, "error"), typeof Symbol.toStringTag == "symbol" && Object.defineProperty(de.prototype, Symbol.toStringTag, {
                value: "ReadableStreamDefaultController",
                configurable: !0
            });
            class D {
                constructor(t = {}, r = {}){
                    t === void 0 ? t = null : yr(t, "First parameter");
                    const o = bt(r, "Second parameter"), n = function(s, i) {
                        ne(s, i);
                        const a = s, l = a?.autoAllocateChunkSize, c = a?.cancel, f = a?.pull, g = a?.start, u = a?.type;
                        return {
                            autoAllocateChunkSize: l === void 0 ? void 0 : Lt(l, `${i} has member 'autoAllocateChunkSize' that`),
                            cancel: c === void 0 ? void 0 : Go(c, a, `${i} has member 'cancel' that`),
                            pull: f === void 0 ? void 0 : Zo(f, a, `${i} has member 'pull' that`),
                            start: g === void 0 ? void 0 : Ko(g, a, `${i} has member 'start' that`),
                            type: u === void 0 ? void 0 : Xo(u, `${i} has member 'type' that`)
                        };
                    }(t, "First parameter");
                    if (lr(this), n.type === "bytes") {
                        if (o.size !== void 0) throw new RangeError("The strategy for a byte stream cannot have a size function");
                        (function(s, i, a) {
                            const l = Object.create(ue.prototype);
                            let c, f, g;
                            c = i.start !== void 0 ? ()=>i.start(l) : ()=>{}, f = i.pull !== void 0 ? ()=>i.pull(l) : ()=>y(void 0), g = i.cancel !== void 0 ? (b)=>i.cancel(b) : ()=>y(void 0);
                            const u = i.autoAllocateChunkSize;
                            if (u === 0) throw new TypeError("autoAllocateChunkSize must be greater than 0");
                            Ur(s, l, c, f, g, a, u);
                        })(this, n, Ze(o, 0));
                    } else {
                        const s = ht(o);
                        (function(i, a, l, c) {
                            const f = Object.create(de.prototype);
                            let g, u, b;
                            g = a.start !== void 0 ? ()=>a.start(f) : ()=>{}, u = a.pull !== void 0 ? ()=>a.pull(f) : ()=>y(void 0), b = a.cancel !== void 0 ? (A)=>a.cancel(A) : ()=>y(void 0), _o(i, f, g, u, b, l, c);
                        })(this, n, Ze(o, 1), s);
                    }
                }
                get locked() {
                    if (!ye(this)) throw Oe("locked");
                    return ge(this);
                }
                cancel(t = void 0) {
                    return ye(this) ? ge(this) ? d(new TypeError("Cannot cancel a stream that already has a reader")) : re(this, t) : d(Oe("cancel"));
                }
                getReader(t = void 0) {
                    if (!ye(this)) throw Oe("getReader");
                    return function(r, o) {
                        ne(r, o);
                        const n = r?.mode;
                        return {
                            mode: n === void 0 ? void 0 : Mo(n, `${o} has member 'mode' that`)
                        };
                    }(t, "First parameter").mode === void 0 ? ze(this) : Hr(this);
                }
                pipeThrough(t, r = {}) {
                    if (!ye(this)) throw Oe("pipeThrough");
                    le(t, 1, "pipeThrough");
                    const o = function(s, i) {
                        ne(s, i);
                        const a = s?.readable;
                        zt(a, "readable", "ReadableWritablePair"), Ft(a, `${i} has member 'readable' that`);
                        const l = s?.writable;
                        return zt(l, "writable", "ReadableWritablePair"), Xr(l, `${i} has member 'writable' that`), {
                            readable: a,
                            writable: l
                        };
                    }(t, "First parameter"), n = yo(r, "Second parameter");
                    if (ge(this)) throw new TypeError("ReadableStream.prototype.pipeThrough cannot be used on a locked ReadableStream");
                    if (Fe(o.writable)) throw new TypeError("ReadableStream.prototype.pipeThrough cannot be used on a locked WritableStream");
                    return O(mo(this, o.writable, n.preventClose, n.preventAbort, n.preventCancel, n.signal)), o.readable;
                }
                pipeTo(t, r = {}) {
                    if (!ye(this)) return d(Oe("pipeTo"));
                    if (t === void 0) return d("Parameter 1 is required in 'pipeTo'.");
                    if (!Le(t)) return d(new TypeError("ReadableStream.prototype.pipeTo's first argument must be a WritableStream"));
                    let o;
                    try {
                        o = yo(r, "Second parameter");
                    } catch (n) {
                        return d(n);
                    }
                    return ge(this) ? d(new TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked ReadableStream")) : Fe(t) ? d(new TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked WritableStream")) : mo(this, t, o.preventClose, o.preventAbort, o.preventCancel, o.signal);
                }
                tee() {
                    if (!ye(this)) throw Oe("tee");
                    return Ye(Ho(this));
                }
                values(t = void 0) {
                    if (!ye(this)) throw Oe("values");
                    return function(r, o) {
                        const n = ze(r), s = new qr(n, o), i = Object.create(jr);
                        return i._asyncIteratorImpl = s, i;
                    }(this, function(r, o) {
                        return ne(r, o), {
                            preventCancel: !!r?.preventCancel
                        };
                    }(t, "First parameter").preventCancel);
                }
                [He](t) {
                    return this.values(t);
                }
                static from(t) {
                    return Vo(t);
                }
            }
            function et(e, t, r, o = 1, n = ()=>1) {
                const s = Object.create(D.prototype);
                return lr(s), _o(s, Object.create(de.prototype), e, t, r, o, n), s;
            }
            function go(e, t, r) {
                const o = Object.create(D.prototype);
                return lr(o), Ur(o, Object.create(ue.prototype), e, t, r, 0, void 0), o;
            }
            function lr(e) {
                e._state = "readable", e._reader = void 0, e._storedError = void 0, e._disturbed = !1;
            }
            function ye(e) {
                return !!v(e) && !!Object.prototype.hasOwnProperty.call(e, "_readableStreamController") && e instanceof D;
            }
            function ge(e) {
                return e._reader !== void 0;
            }
            function re(e, t) {
                if (e._disturbed = !0, e._state === "closed") return y(void 0);
                if (e._state === "errored") return d(e._storedError);
                tt(e);
                const r = e._reader;
                if (r !== void 0 && Ce(r)) {
                    const o = r._readIntoRequests;
                    r._readIntoRequests = new I, o.forEach((n)=>{
                        n._closeSteps(void 0);
                    });
                }
                return F(e._readableStreamController[oe](t), V);
            }
            function tt(e) {
                e._state = "closed";
                const t = e._reader;
                if (t !== void 0 && (pr(t), be(t))) {
                    const r = t._readRequests;
                    t._readRequests = new I, r.forEach((o)=>{
                        o._closeSteps();
                    });
                }
            }
            function vo(e, t) {
                e._state = "errored", e._storedError = t;
                const r = e._reader;
                r !== void 0 && (At(r, t), be(r) ? Sr(r, t) : Kr(r, t));
            }
            function Oe(e) {
                return new TypeError(`ReadableStream.prototype.${e} can only be used on a ReadableStream`);
            }
            function wo(e, t) {
                ne(e, t);
                const r = e?.highWaterMark;
                return zt(r, "highWaterMark", "QueuingStrategyInit"), {
                    highWaterMark: Bt(r)
                };
            }
            Object.defineProperties(D, {
                from: {
                    enumerable: !0
                }
            }), Object.defineProperties(D.prototype, {
                cancel: {
                    enumerable: !0
                },
                getReader: {
                    enumerable: !0
                },
                pipeThrough: {
                    enumerable: !0
                },
                pipeTo: {
                    enumerable: !0
                },
                tee: {
                    enumerable: !0
                },
                values: {
                    enumerable: !0
                },
                locked: {
                    enumerable: !0
                }
            }), h(D.from, "from"), h(D.prototype.cancel, "cancel"), h(D.prototype.getReader, "getReader"), h(D.prototype.pipeThrough, "pipeThrough"), h(D.prototype.pipeTo, "pipeTo"), h(D.prototype.tee, "tee"), h(D.prototype.values, "values"), typeof Symbol.toStringTag == "symbol" && Object.defineProperty(D.prototype, Symbol.toStringTag, {
                value: "ReadableStream",
                configurable: !0
            }), Object.defineProperty(D.prototype, He, {
                value: D.prototype.values,
                writable: !0,
                configurable: !0
            });
            const So = (e)=>e.byteLength;
            h(So, "size");
            class Pt {
                constructor(t){
                    le(t, 1, "ByteLengthQueuingStrategy"), t = wo(t, "First parameter"), this._byteLengthQueuingStrategyHighWaterMark = t.highWaterMark;
                }
                get highWaterMark() {
                    if (!To(this)) throw Ro("highWaterMark");
                    return this._byteLengthQueuingStrategyHighWaterMark;
                }
                get size() {
                    if (!To(this)) throw Ro("size");
                    return So;
                }
            }
            function Ro(e) {
                return new TypeError(`ByteLengthQueuingStrategy.prototype.${e} can only be used on a ByteLengthQueuingStrategy`);
            }
            function To(e) {
                return !!v(e) && !!Object.prototype.hasOwnProperty.call(e, "_byteLengthQueuingStrategyHighWaterMark") && e instanceof Pt;
            }
            Object.defineProperties(Pt.prototype, {
                highWaterMark: {
                    enumerable: !0
                },
                size: {
                    enumerable: !0
                }
            }), typeof Symbol.toStringTag == "symbol" && Object.defineProperty(Pt.prototype, Symbol.toStringTag, {
                value: "ByteLengthQueuingStrategy",
                configurable: !0
            });
            const Po = ()=>1;
            h(Po, "size");
            class Et {
                constructor(t){
                    le(t, 1, "CountQueuingStrategy"), t = wo(t, "First parameter"), this._countQueuingStrategyHighWaterMark = t.highWaterMark;
                }
                get highWaterMark() {
                    if (!Co(this)) throw Eo("highWaterMark");
                    return this._countQueuingStrategyHighWaterMark;
                }
                get size() {
                    if (!Co(this)) throw Eo("size");
                    return Po;
                }
            }
            function Eo(e) {
                return new TypeError(`CountQueuingStrategy.prototype.${e} can only be used on a CountQueuingStrategy`);
            }
            function Co(e) {
                return !!v(e) && !!Object.prototype.hasOwnProperty.call(e, "_countQueuingStrategyHighWaterMark") && e instanceof Et;
            }
            function Jo(e, t, r) {
                return K(e, r), (o)=>j(e, t, [
                        o
                    ]);
            }
            function en(e, t, r) {
                return K(e, r), (o)=>E(e, t, [
                        o
                    ]);
            }
            function tn(e, t, r) {
                return K(e, r), (o, n)=>j(e, t, [
                        o,
                        n
                    ]);
            }
            function rn(e, t, r) {
                return K(e, r), (o)=>j(e, t, [
                        o
                    ]);
            }
            Object.defineProperties(Et.prototype, {
                highWaterMark: {
                    enumerable: !0
                },
                size: {
                    enumerable: !0
                }
            }), typeof Symbol.toStringTag == "symbol" && Object.defineProperty(Et.prototype, Symbol.toStringTag, {
                value: "CountQueuingStrategy",
                configurable: !0
            });
            class Ct {
                constructor(t = {}, r = {}, o = {}){
                    t === void 0 && (t = null);
                    const n = bt(r, "Second parameter"), s = bt(o, "Third parameter"), i = function(u, b) {
                        ne(u, b);
                        const A = u?.cancel, z = u?.flush, N = u?.readableType, Q = u?.start, C = u?.transform, w = u?.writableType;
                        return {
                            cancel: A === void 0 ? void 0 : rn(A, u, `${b} has member 'cancel' that`),
                            flush: z === void 0 ? void 0 : Jo(z, u, `${b} has member 'flush' that`),
                            readableType: N,
                            start: Q === void 0 ? void 0 : en(Q, u, `${b} has member 'start' that`),
                            transform: C === void 0 ? void 0 : tn(C, u, `${b} has member 'transform' that`),
                            writableType: w
                        };
                    }(t, "First parameter");
                    if (i.readableType !== void 0) throw new RangeError("Invalid readableType specified");
                    if (i.writableType !== void 0) throw new RangeError("Invalid writableType specified");
                    const a = Ze(s, 0), l = ht(s), c = Ze(n, 1), f = ht(n);
                    let g;
                    (function(u, b, A, z, N, Q) {
                        function C() {
                            return b;
                        }
                        function w(R) {
                            return function(p, q) {
                                const _ = p._transformStreamController;
                                return p._backpressure ? F(p._backpressureChangePromise, ()=>{
                                    const W = p._writable;
                                    if (W._state === "erroring") throw W._storedError;
                                    return Oo(_, q);
                                }) : Oo(_, q);
                            }(u, R);
                        }
                        function x(R) {
                            return function(p, q) {
                                const _ = p._transformStreamController;
                                if (_._finishPromise !== void 0) return _._finishPromise;
                                const W = p._readable;
                                _._finishPromise = P((M, hr)=>{
                                    _._finishPromise_resolve = M, _._finishPromise_reject = hr;
                                });
                                const H = _._cancelAlgorithm(q);
                                return Wt(_), $(H, ()=>(W._state === "errored" ? De(_, W._storedError) : (te(W._readableStreamController, q), dr(_)), null), (M)=>(te(W._readableStreamController, M), De(_, M), null)), _._finishPromise;
                            }(u, R);
                        }
                        function m() {
                            return function(R) {
                                const p = R._transformStreamController;
                                if (p._finishPromise !== void 0) return p._finishPromise;
                                const q = R._readable;
                                p._finishPromise = P((W, H)=>{
                                    p._finishPromise_resolve = W, p._finishPromise_reject = H;
                                });
                                const _ = p._flushAlgorithm();
                                return Wt(p), $(_, ()=>(q._state === "errored" ? De(p, q._storedError) : (We(q._readableStreamController), dr(p)), null), (W)=>(te(q._readableStreamController, W), De(p, W), null)), p._finishPromise;
                            }(u);
                        }
                        function k() {
                            return function(R) {
                                return qt(R, !1), R._backpressureChangePromise;
                            }(u);
                        }
                        function S(R) {
                            return function(p, q) {
                                const _ = p._transformStreamController;
                                if (_._finishPromise !== void 0) return _._finishPromise;
                                const W = p._writable;
                                _._finishPromise = P((M, hr)=>{
                                    _._finishPromise_resolve = M, _._finishPromise_reject = hr;
                                });
                                const H = _._cancelAlgorithm(q);
                                return Wt(_), $(H, ()=>(W._state === "errored" ? De(_, W._storedError) : (Ke(W._writableStreamController, q), cr(p), dr(_)), null), (M)=>(Ke(W._writableStreamController, M), cr(p), De(_, M), null)), _._finishPromise;
                            }(u, R);
                        }
                        u._writable = function(R, p, q, _, W = 1, H = ()=>1) {
                            const M = Object.create(_e.prototype);
                            return eo(M), so(M, Object.create(Ie.prototype), R, p, q, _, W, H), M;
                        }(C, w, m, x, A, z), u._readable = et(C, k, S, N, Q), u._backpressure = void 0, u._backpressureChangePromise = void 0, u._backpressureChangePromise_resolve = void 0, qt(u, !0), u._transformStreamController = void 0;
                    })(this, P((u)=>{
                        g = u;
                    }), c, f, a, l), function(u, b) {
                        const A = Object.create(ve.prototype);
                        let z, N, Q;
                        z = b.transform !== void 0 ? (C)=>b.transform(C, A) : (C)=>{
                            try {
                                return Wo(A, C), y(void 0);
                            } catch (w) {
                                return d(w);
                            }
                        }, N = b.flush !== void 0 ? ()=>b.flush(A) : ()=>y(void 0), Q = b.cancel !== void 0 ? (C)=>b.cancel(C) : ()=>y(void 0), function(C, w, x, m, k) {
                            w._controlledTransformStream = C, C._transformStreamController = w, w._transformAlgorithm = x, w._flushAlgorithm = m, w._cancelAlgorithm = k, w._finishPromise = void 0, w._finishPromise_resolve = void 0, w._finishPromise_reject = void 0;
                        }(u, A, z, N, Q);
                    }(this, i), i.start !== void 0 ? g(i.start(this._transformStreamController)) : g(void 0);
                }
                get readable() {
                    if (!qo(this)) throw ko("readable");
                    return this._readable;
                }
                get writable() {
                    if (!qo(this)) throw ko("writable");
                    return this._writable;
                }
            }
            function qo(e) {
                return !!v(e) && !!Object.prototype.hasOwnProperty.call(e, "_transformStreamController") && e instanceof Ct;
            }
            function jo(e, t) {
                te(e._readable._readableStreamController, t), ur(e, t);
            }
            function ur(e, t) {
                Wt(e._transformStreamController), Ke(e._writable._writableStreamController, t), cr(e);
            }
            function cr(e) {
                e._backpressure && qt(e, !1);
            }
            function qt(e, t) {
                e._backpressureChangePromise !== void 0 && e._backpressureChangePromise_resolve(), e._backpressureChangePromise = P((r)=>{
                    e._backpressureChangePromise_resolve = r;
                }), e._backpressure = t;
            }
            Object.defineProperties(Ct.prototype, {
                readable: {
                    enumerable: !0
                },
                writable: {
                    enumerable: !0
                }
            }), typeof Symbol.toStringTag == "symbol" && Object.defineProperty(Ct.prototype, Symbol.toStringTag, {
                value: "TransformStream",
                configurable: !0
            });
            class ve {
                constructor(){
                    throw new TypeError("Illegal constructor");
                }
                get desiredSize() {
                    if (!jt(this)) throw Ot("desiredSize");
                    return sr(this._controlledTransformStream._readable._readableStreamController);
                }
                enqueue(t = void 0) {
                    if (!jt(this)) throw Ot("enqueue");
                    Wo(this, t);
                }
                error(t = void 0) {
                    if (!jt(this)) throw Ot("error");
                    var r;
                    r = t, jo(this._controlledTransformStream, r);
                }
                terminate() {
                    if (!jt(this)) throw Ot("terminate");
                    (function(t) {
                        const r = t._controlledTransformStream;
                        We(r._readable._readableStreamController);
                        const o = new TypeError("TransformStream terminated");
                        ur(r, o);
                    })(this);
                }
            }
            function jt(e) {
                return !!v(e) && !!Object.prototype.hasOwnProperty.call(e, "_controlledTransformStream") && e instanceof ve;
            }
            function Wt(e) {
                e._transformAlgorithm = void 0, e._flushAlgorithm = void 0, e._cancelAlgorithm = void 0;
            }
            function Wo(e, t) {
                const r = e._controlledTransformStream, o = r._readable._readableStreamController;
                if (!$e(o)) throw new TypeError("Readable side is not in a state that permits enqueue");
                try {
                    Me(o, t);
                } catch (s) {
                    throw ur(r, s), r._readable._storedError;
                }
                (function(s) {
                    return !po(s);
                })(o) !== r._backpressure && qt(r, !0);
            }
            function Oo(e, t) {
                return F(e._transformAlgorithm(t), void 0, (r)=>{
                    throw jo(e._controlledTransformStream, r), r;
                });
            }
            function Ot(e) {
                return new TypeError(`TransformStreamDefaultController.prototype.${e} can only be used on a TransformStreamDefaultController`);
            }
            function dr(e) {
                e._finishPromise_resolve !== void 0 && (e._finishPromise_resolve(), e._finishPromise_resolve = void 0, e._finishPromise_reject = void 0);
            }
            function De(e, t) {
                e._finishPromise_reject !== void 0 && (O(e._finishPromise), e._finishPromise_reject(t), e._finishPromise_resolve = void 0, e._finishPromise_reject = void 0);
            }
            function ko(e) {
                return new TypeError(`TransformStream.prototype.${e} can only be used on a TransformStream`);
            }
            Object.defineProperties(ve.prototype, {
                enqueue: {
                    enumerable: !0
                },
                error: {
                    enumerable: !0
                },
                terminate: {
                    enumerable: !0
                },
                desiredSize: {
                    enumerable: !0
                }
            }), h(ve.prototype.enqueue, "enqueue"), h(ve.prototype.error, "error"), h(ve.prototype.terminate, "terminate"), typeof Symbol.toStringTag == "symbol" && Object.defineProperty(ve.prototype, Symbol.toStringTag, {
                value: "TransformStreamDefaultController",
                configurable: !0
            });
            const fr = {
                ReadableStream: D,
                ReadableStreamDefaultController: de,
                ReadableByteStreamController: ue,
                ReadableStreamBYOBRequest: Te,
                ReadableStreamDefaultReader: he,
                ReadableStreamBYOBReader: pe,
                WritableStream: _e,
                WritableStreamDefaultController: Ie,
                WritableStreamDefaultWriter: ce,
                ByteLengthQueuingStrategy: Pt,
                CountQueuingStrategy: Et,
                TransformStream: Ct,
                TransformStreamDefaultController: ve
            };
            for(const e in fr)Object.prototype.hasOwnProperty.call(fr, e) && Object.defineProperty(ir, e, {
                value: fr[e],
                writable: !0,
                configurable: !0
            });
        }()), zo;
    }
    an();
    var br = {
        exports: {}
    };
    var Lo;
    function sn() {
        return Lo || (Lo = 1, function(V) {
            ((v, B)=>{
                V.exports = B();
            })("streamSaver", ()=>{
                const v = typeof window == "object" ? window : this;
                v.HTMLElement || console.warn("streamsaver is meant to run on browsers main thread");
                let B = null, h = !1;
                const ie = (L)=>{
                    try {
                        L();
                    } catch  {}
                }, Y = v.WebStreamsPolyfill || {}, J = v.isSecureContext;
                let fe = /constructor/i.test(v.HTMLElement) || !!v.safari || !!v.WebKitPoint;
                const xe = J || "MozAppearance" in document.documentElement.style ? "iframe" : "navigate", P = {
                    createWriteStream: $,
                    WritableStream: v.WritableStream || Y.WritableStream,
                    supported: !0,
                    version: {
                        full: "2.0.5",
                        major: 2,
                        minor: 0,
                        dot: 5
                    },
                    mitm: "https://jimmywarting.github.io/StreamSaver.js/mitm.html?version=2.0.0"
                };
                function y(L) {
                    if (!L) throw new Error("meh");
                    const T = document.createElement("iframe");
                    return T.hidden = !0, T.src = L, T.loaded = !1, T.name = "iframe", T.isIframe = !0, T.postMessage = (...F)=>T.contentWindow.postMessage(...F), T.addEventListener("load", ()=>{
                        T.loaded = !0;
                    }, {
                        once: !0
                    }), document.body.appendChild(T), T;
                }
                function d(L) {
                    const T = "width=200,height=100", F = document.createDocumentFragment(), O = {
                        frame: v.open(L, "popup", T),
                        loaded: !1,
                        isIframe: !1,
                        isPopup: !0,
                        remove () {
                            O.frame.close();
                        },
                        addEventListener (...E) {
                            F.addEventListener(...E);
                        },
                        dispatchEvent (...E) {
                            F.dispatchEvent(...E);
                        },
                        removeEventListener (...E) {
                            F.removeEventListener(...E);
                        },
                        postMessage (...E) {
                            O.frame.postMessage(...E);
                        }
                    }, U = (E)=>{
                        E.source === O.frame && (O.loaded = !0, v.removeEventListener("message", U), O.dispatchEvent(new Event("load")));
                    };
                    return v.addEventListener("message", U), O;
                }
                try {
                    new Response(new ReadableStream), J && !("serviceWorker" in navigator) && (fe = !0);
                } catch  {
                    fe = !0;
                }
                ie(()=>{
                    const { readable: L } = new TransformStream, T = new MessageChannel;
                    T.port1.postMessage(L, [
                        L
                    ]), T.port1.close(), T.port2.close(), h = !0, Object.defineProperty(P, "TransformStream", {
                        configurable: !1,
                        writable: !1,
                        value: TransformStream
                    });
                });
                function G() {
                    B || (B = J ? y(P.mitm) : d(P.mitm));
                }
                function $(L, T, F) {
                    let O = {
                        size: null,
                        pathname: null,
                        writableStrategy: void 0,
                        readableStrategy: void 0
                    }, U = 0, E = null, j = null, I = null;
                    if (Number.isFinite(T) ? ([F, T] = [
                        T,
                        F
                    ], console.warn("[StreamSaver] Deprecated pass an object as 2nd argument when creating a write stream"), O.size = F, O.writableStrategy = T) : T && T.highWaterMark ? (console.warn("[StreamSaver] Deprecated pass an object as 2nd argument when creating a write stream"), O.size = F, O.writableStrategy = T) : O = T || {}, !fe) {
                        G(), j = new MessageChannel, L = encodeURIComponent(L.replace(/\//g, ":")).replace(/['()]/g, escape).replace(/\*/g, "%2A");
                        const Z = {
                            transferringReadable: h,
                            pathname: O.pathname || Math.random().toString().slice(-6) + "/" + L,
                            headers: {
                                "Content-Type": "application/octet-stream; charset=utf-8",
                                "Content-Disposition": "attachment; filename*=UTF-8''" + L
                            }
                        };
                        O.size && (Z.headers["Content-Length"] = O.size);
                        const oe = [
                            Z,
                            "*",
                            [
                                j.port2
                            ]
                        ];
                        if (h) {
                            const ee = xe === "iframe" ? void 0 : {
                                transform (Ae, Ne) {
                                    if (!(Ae instanceof Uint8Array)) throw new TypeError("Can only write Uint8Arrays");
                                    U += Ae.length, Ne.enqueue(Ae), E && (location.href = E, E = null);
                                },
                                flush () {
                                    E && (location.href = E);
                                }
                            };
                            I = new P.TransformStream(ee, O.writableStrategy, O.readableStrategy);
                            const ke = I.readable;
                            j.port1.postMessage({
                                readableStream: ke
                            }, [
                                ke
                            ]);
                        }
                        j.port1.onmessage = (ee)=>{
                            ee.data.download ? xe === "navigate" ? (B.remove(), B = null, U ? location.href = ee.data.download : E = ee.data.download) : (B.isPopup && (B.remove(), B = null, xe === "iframe" && y(P.mitm)), y(ee.data.download)) : ee.data.abort && (we = [], j.port1.postMessage("abort"), j.port1.onmessage = null, j.port1.close(), j.port2.close(), j = null);
                        }, B.loaded ? B.postMessage(...oe) : B.addEventListener("load", ()=>{
                            B.postMessage(...oe);
                        }, {
                            once: !0
                        });
                    }
                    let we = [];
                    return !fe && I && I.writable || new P.WritableStream({
                        write (Z) {
                            if (!(Z instanceof Uint8Array)) throw new TypeError("Can only write Uint8Arrays");
                            if (fe) {
                                we.push(Z);
                                return;
                            }
                            j.port1.postMessage(Z), U += Z.length, E && (location.href = E, E = null);
                        },
                        close () {
                            if (fe) {
                                const Z = new Blob(we, {
                                    type: "application/octet-stream; charset=utf-8"
                                }), oe = document.createElement("a");
                                oe.href = URL.createObjectURL(Z), oe.download = L, oe.click();
                            } else j.port1.postMessage("end");
                        },
                        abort () {
                            we = [], j.port1.postMessage("abort"), j.port1.onmessage = null, j.port1.close(), j.port2.close(), j = null;
                        }
                    }, O.writableStrategy);
                }
                return P;
            });
        }(br)), br.exports;
    }
    var ln = sn();
    const rt = nn(ln);
    rt.mitm = `${window.location.protocol}//${window.location.host}/stream.html`;
    fn = async function(V, v) {
        if (!rt) throw new Error("StreamSaver is not available in this environment");
        const B = rt.createWriteStream(v, {
            size: V.size
        });
        try {
            const h = B.getWriter(), ie = V.stream().getReader();
            for(;;){
                const { done: Y, value: J } = await ie.read();
                if (Y) break;
                await h.write(J);
            }
            await h.close();
        } catch (h) {
            throw console.error("下载文件时发生错误:", h), h;
        }
    };
    hn = async function(V, v) {
        if (!rt) throw new Error("StreamSaver is not available in this environment");
        const B = V.reduce((Y, J)=>Y + J.size, 0), h = rt.createWriteStream(v, {
            size: B
        }), ie = on({
            start (Y) {
                for (const J of V)Y.enqueue(J);
                Y.close();
            },
            async pull (Y) {}
        });
        try {
            return await ie.pipeTo(h);
        } catch (Y) {
            throw console.error("下载多个文件时发生错误:", Y), Y;
        }
    };
});
export { hn as streamDownloadMultipleFiles, fn as streamDownloadSingleFile, __tla };
