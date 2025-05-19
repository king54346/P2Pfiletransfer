import { k as Ce, j as Q, p as P, c as b, u as d, i as nt, I as Lt, M as _a, ad as qr, L as Se, m as Ae, ae as Ac, af as Mc, l as F, C as Dc, s as dt, X as Vo, ag as Lc, N as Be, G as He, a3 as fn, d as R, a as $, o as C, r as z, a7 as ot, f as D, y as Zr, z as B, w as q, e as ir, g as I, A as j, E as ze, h as dn, t as Ee, F as Me, b as ce, v as Xr, T as cr, a5 as Pe, $ as jc, a2 as Bc, B as Yn, n as de, K as at, J as ya, ah as zc, _ as Fc, ai as Nc, aj as Ca, a1 as Sa, q as jt, ak as Uc, Z as Hc, al as Vc, W as Sn, R as Wo, am as Wc, a0 as Kc, a9 as Gc, __tla as __tla_0 } from "./index-VZNZX2ad.js";
let gi, lr, co, wl, wf, Jf, so, Pa, md, al, hf, ve, Z, pt, L, te, le, jr, Te, Ve, qa, ds, mr, si, Lr, Ya, Co, oe, St, ey, $s, P_, T_, yo, Hh, O0, ep, li, yt, Dh, M_, L_, D_, rt, z_, fi, mo, Tn, H_, Q_, ui, Qp, er, W_, N_, $_, E_, A_, pi, Sh, k_, j_, Ic, sy, oy, kv, Oh, Qa, Ap, S_, mi, Bp, Kh, Vh, O_, Th, pp, cn, R_, ji, Eo, cv, B_, tr, vo, im, we, J_, G_, X_, w_, I_, F_, il, K_, Y_, U_, Z_, ry, V_, fh, ny, bo, nr, x_, tv, ty, q_, $a, to, Oa, Yt, Jt, Fa, eo, Sr, Af, et, Ma, qt, zl, Cu, it, io, Al, Mu, uo, za, qd, Ba, Ke, Ra;
let __tla = Promise.all([
    (()=>{
        try {
            return __tla_0;
        } catch  {}
    })()
]).then(async ()=>{
    function Jc(e, t) {
        for(var n = 0; n < t.length; n++){
            const r = t[n];
            if (typeof r != "string" && !Array.isArray(r)) {
                for(const o in r)if (o !== "default" && !(o in e)) {
                    const s = Object.getOwnPropertyDescriptor(r, o);
                    s && Object.defineProperty(e, o, s.get ? s : {
                        enumerable: !0,
                        get: ()=>r[o]
                    });
                }
            }
        }
        return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }));
    }
    let Ta, Fn, Yc, bt, xa, Qr;
    Ta = Symbol();
    Fn = "el";
    Yc = "is-";
    bt = (e, t, n, r, o)=>{
        let s = `${e}-${t}`;
        return n && (s += `-${n}`), r && (s += `__${r}`), o && (s += `--${o}`), s;
    };
    xa = Symbol("namespaceContextKey");
    Qr = (e)=>{
        const t = e || (Ce() ? Q(xa, P(Fn)) : P(Fn));
        return b(()=>d(t) || Fn);
    };
    te = (e, t)=>{
        const n = Qr(t);
        return {
            namespace: n,
            b: (g = "")=>bt(n.value, e, g, "", ""),
            e: (g)=>g ? bt(n.value, e, "", g, "") : "",
            m: (g)=>g ? bt(n.value, e, "", "", g) : "",
            be: (g, _)=>g && _ ? bt(n.value, e, g, _, "") : "",
            em: (g, _)=>g && _ ? bt(n.value, e, "", g, _) : "",
            bm: (g, _)=>g && _ ? bt(n.value, e, g, "", _) : "",
            bem: (g, _, y)=>g && _ && y ? bt(n.value, e, g, _, y) : "",
            is: (g, ..._)=>{
                const y = _.length >= 1 ? _[0] : !0;
                return g && y ? `${Yc}${g}` : "";
            },
            cssVar: (g)=>{
                const _ = {};
                for(const y in g)g[y] && (_[`--${n.value}-${y}`] = g[y]);
                return _;
            },
            cssVarName: (g)=>`--${n.value}-${g}`,
            cssVarBlock: (g)=>{
                const _ = {};
                for(const y in g)g[y] && (_[`--${n.value}-${e}-${y}`] = g[y]);
                return _;
            },
            cssVarBlockName: (g)=>`--${n.value}-${e}-${g}`
        };
    };
    let ka, qc, wa, Zc, Xc, nn;
    ka = typeof global == "object" && global && global.Object === Object && global;
    qc = typeof self == "object" && self && self.Object === Object && self;
    Ke = ka || qc || Function("return this")();
    Ve = Ke.Symbol;
    wa = Object.prototype;
    Zc = wa.hasOwnProperty;
    Xc = wa.toString;
    nn = Ve ? Ve.toStringTag : void 0;
    function Qc(e) {
        var t = Zc.call(e, nn), n = e[nn];
        try {
            e[nn] = void 0;
            var r = !0;
        } catch  {}
        var o = Xc.call(e);
        return r && (t ? e[nn] = n : delete e[nn]), o;
    }
    var el = Object.prototype, tl = el.toString;
    function nl(e) {
        return tl.call(e);
    }
    var rl = "[object Null]", ol = "[object Undefined]", Ko = Ve ? Ve.toStringTag : void 0;
    Jt = function(e) {
        return e == null ? e === void 0 ? ol : rl : Ko && Ko in Object(e) ? Qc(e) : nl(e);
    };
    Yt = function(e) {
        return e != null && typeof e == "object";
    };
    var sl = "[object Symbol]";
    eo = function(e) {
        return typeof e == "symbol" || Yt(e) && Jt(e) == sl;
    };
    al = function(e, t) {
        for(var n = -1, r = e == null ? 0 : e.length, o = Array(r); ++n < r;)o[n] = t(e[n], n, e);
        return o;
    };
    let Go, Jo;
    it = Array.isArray;
    Go = Ve ? Ve.prototype : void 0;
    Jo = Go ? Go.toString : void 0;
    function Ea(e) {
        if (typeof e == "string") return e;
        if (it(e)) return al(e, Ea) + "";
        if (eo(e)) return Jo ? Jo.call(e) : "";
        var t = e + "";
        return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
    }
    St = function(e) {
        var t = typeof e;
        return e != null && (t == "object" || t == "function");
    };
    il = function(e) {
        return e;
    };
    var cl = "[object AsyncFunction]", ll = "[object Function]", ul = "[object GeneratorFunction]", fl = "[object Proxy]";
    Pa = function(e) {
        if (!St(e)) return !1;
        var t = Jt(e);
        return t == ll || t == ul || t == cl || t == fl;
    };
    var yr = Ke["__core-js_shared__"], Yo = function() {
        var e = /[^.]+$/.exec(yr && yr.keys && yr.keys.IE_PROTO || "");
        return e ? "Symbol(src)_1." + e : "";
    }();
    function dl(e) {
        return !!Yo && Yo in e;
    }
    var pl = Function.prototype, hl = pl.toString;
    function xt(e) {
        if (e != null) {
            try {
                return hl.call(e);
            } catch  {}
            try {
                return e + "";
            } catch  {}
        }
        return "";
    }
    var ml = /[\\^$.*+?()[\]{}|]/g, gl = /^\[object .+?Constructor\]$/, vl = Function.prototype, bl = Object.prototype, _l = vl.toString, yl = bl.hasOwnProperty, Cl = RegExp("^" + _l.call(yl).replace(ml, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    function Sl(e) {
        if (!St(e) || dl(e)) return !1;
        var t = Pa(e) ? Cl : gl;
        return t.test(xt(e));
    }
    function Tl(e, t) {
        return e?.[t];
    }
    function kt(e, t) {
        var n = Tl(e, t);
        return Sl(n) ? n : void 0;
    }
    var $r = kt(Ke, "WeakMap"), qo = Object.create, xl = function() {
        function e() {}
        return function(t) {
            if (!St(t)) return {};
            if (qo) return qo(t);
            e.prototype = t;
            var n = new e;
            return e.prototype = void 0, n;
        };
    }();
    function kl(e, t, n) {
        switch(n.length){
            case 0:
                return e.call(t);
            case 1:
                return e.call(t, n[0]);
            case 2:
                return e.call(t, n[0], n[1]);
            case 3:
                return e.call(t, n[0], n[1], n[2]);
        }
        return e.apply(t, n);
    }
    wl = function(e, t) {
        var n = -1, r = e.length;
        for(t || (t = Array(r)); ++n < r;)t[n] = e[n];
        return t;
    };
    var El = 800, Pl = 16, Rl = Date.now;
    function Ol(e) {
        var t = 0, n = 0;
        return function() {
            var r = Rl(), o = Pl - (r - n);
            if (n = r, o > 0) {
                if (++t >= El) return arguments[0];
            } else t = 0;
            return e.apply(void 0, arguments);
        };
    }
    function $l(e) {
        return function() {
            return e;
        };
    }
    let qn, Il;
    qn = function() {
        try {
            var e = kt(Object, "defineProperty");
            return e({}, "", {}), e;
        } catch  {}
    }();
    Il = qn ? function(e, t) {
        return qn(e, "toString", {
            configurable: !0,
            enumerable: !1,
            value: $l(t),
            writable: !0
        });
    } : il;
    Al = Ol(Il);
    function Ml(e, t) {
        for(var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1;);
        return e;
    }
    var Dl = 9007199254740991, Ll = /^(?:0|[1-9]\d*)$/;
    to = function(e, t) {
        var n = typeof e;
        return t = t ?? Dl, !!t && (n == "number" || n != "symbol" && Ll.test(e)) && e > -1 && e % 1 == 0 && e < t;
    };
    Ra = function(e, t, n) {
        t == "__proto__" && qn ? qn(e, t, {
            configurable: !0,
            enumerable: !0,
            value: n,
            writable: !0
        }) : e[t] = n;
    };
    Oa = function(e, t) {
        return e === t || e !== e && t !== t;
    };
    var jl = Object.prototype, Bl = jl.hasOwnProperty;
    function no(e, t, n) {
        var r = e[t];
        (!(Bl.call(e, t) && Oa(r, n)) || n === void 0 && !(t in e)) && Ra(e, t, n);
    }
    lr = function(e, t, n, r) {
        var o = !n;
        n || (n = {});
        for(var s = -1, a = t.length; ++s < a;){
            var i = t[s], c = void 0;
            c === void 0 && (c = e[i]), o ? Ra(n, i, c) : no(n, i, c);
        }
        return n;
    };
    var Zo = Math.max;
    zl = function(e, t, n) {
        return t = Zo(t === void 0 ? e.length - 1 : t, 0), function() {
            for(var r = arguments, o = -1, s = Zo(r.length - t, 0), a = Array(s); ++o < s;)a[o] = r[t + o];
            o = -1;
            for(var i = Array(t + 1); ++o < t;)i[o] = r[o];
            return i[t] = n(a), kl(e, this, i);
        };
    };
    var Fl = 9007199254740991;
    function ro(e) {
        return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Fl;
    }
    $a = function(e) {
        return e != null && ro(e.length) && !Pa(e);
    };
    var Nl = Object.prototype;
    function oo(e) {
        var t = e && e.constructor, n = typeof t == "function" && t.prototype || Nl;
        return e === n;
    }
    function Ul(e, t) {
        for(var n = -1, r = Array(e); ++n < e;)r[n] = t(n);
        return r;
    }
    var Hl = "[object Arguments]";
    function Xo(e) {
        return Yt(e) && Jt(e) == Hl;
    }
    let Ia, Vl, Wl;
    Ia = Object.prototype;
    Vl = Ia.hasOwnProperty;
    Wl = Ia.propertyIsEnumerable;
    so = Xo(function() {
        return arguments;
    }()) ? Xo : function(e) {
        return Yt(e) && Vl.call(e, "callee") && !Wl.call(e, "callee");
    };
    function Kl() {
        return !1;
    }
    let Aa, Qo, Gl, es, Jl, Yl, ql, Zl, Xl, Ql, eu, tu, nu, ru, ou, su, au, iu, cu, lu, uu, fu, du, pu, hu, mu, gu, vu, bu, X;
    Aa = typeof exports == "object" && exports && !exports.nodeType && exports;
    Qo = Aa && typeof module == "object" && module && !module.nodeType && module;
    Gl = Qo && Qo.exports === Aa;
    es = Gl ? Ke.Buffer : void 0;
    Jl = es ? es.isBuffer : void 0;
    Ma = Jl || Kl;
    Yl = "[object Arguments]";
    ql = "[object Array]";
    Zl = "[object Boolean]";
    Xl = "[object Date]";
    Ql = "[object Error]";
    eu = "[object Function]";
    tu = "[object Map]";
    nu = "[object Number]";
    ru = "[object Object]";
    ou = "[object RegExp]";
    su = "[object Set]";
    au = "[object String]";
    iu = "[object WeakMap]";
    cu = "[object ArrayBuffer]";
    lu = "[object DataView]";
    uu = "[object Float32Array]";
    fu = "[object Float64Array]";
    du = "[object Int8Array]";
    pu = "[object Int16Array]";
    hu = "[object Int32Array]";
    mu = "[object Uint8Array]";
    gu = "[object Uint8ClampedArray]";
    vu = "[object Uint16Array]";
    bu = "[object Uint32Array]";
    X = {};
    X[uu] = X[fu] = X[du] = X[pu] = X[hu] = X[mu] = X[gu] = X[vu] = X[bu] = !0;
    X[Yl] = X[ql] = X[cu] = X[Zl] = X[lu] = X[Xl] = X[Ql] = X[eu] = X[tu] = X[nu] = X[ru] = X[ou] = X[su] = X[au] = X[iu] = !1;
    function _u(e) {
        return Yt(e) && ro(e.length) && !!X[Jt(e)];
    }
    function ao(e) {
        return function(t) {
            return e(t);
        };
    }
    let Da, an, yu, Cr, Ft, ts, Su, Tu;
    Da = typeof exports == "object" && exports && !exports.nodeType && exports;
    an = Da && typeof module == "object" && module && !module.nodeType && module;
    yu = an && an.exports === Da;
    Cr = yu && ka.process;
    Ft = function() {
        try {
            var e = an && an.require && an.require("util").types;
            return e || Cr && Cr.binding && Cr.binding("util");
        } catch  {}
    }();
    ts = Ft && Ft.isTypedArray;
    Cu = ts ? ao(ts) : _u;
    Su = Object.prototype;
    Tu = Su.hasOwnProperty;
    function La(e, t) {
        var n = it(e), r = !n && so(e), o = !n && !r && Ma(e), s = !n && !r && !o && Cu(e), a = n || r || o || s, i = a ? Ul(e.length, String) : [], c = i.length;
        for(var l in e)(t || Tu.call(e, l)) && !(a && (l == "length" || o && (l == "offset" || l == "parent") || s && (l == "buffer" || l == "byteLength" || l == "byteOffset") || to(l, c))) && i.push(l);
        return i;
    }
    function ja(e, t) {
        return function(n) {
            return e(t(n));
        };
    }
    var xu = ja(Object.keys, Object), ku = Object.prototype, wu = ku.hasOwnProperty;
    function Eu(e) {
        if (!oo(e)) return xu(e);
        var t = [];
        for(var n in Object(e))wu.call(e, n) && n != "constructor" && t.push(n);
        return t;
    }
    io = function(e) {
        return $a(e) ? La(e) : Eu(e);
    };
    function Pu(e) {
        var t = [];
        if (e != null) for(var n in Object(e))t.push(n);
        return t;
    }
    var Ru = Object.prototype, Ou = Ru.hasOwnProperty;
    function $u(e) {
        if (!St(e)) return Pu(e);
        var t = oo(e), n = [];
        for(var r in e)r == "constructor" && (t || !Ou.call(e, r)) || n.push(r);
        return n;
    }
    co = function(e) {
        return $a(e) ? La(e, !0) : $u(e);
    };
    var Iu = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Au = /^\w*$/;
    Mu = function(e, t) {
        if (it(e)) return !1;
        var n = typeof e;
        return n == "number" || n == "symbol" || n == "boolean" || e == null || eo(e) ? !0 : Au.test(e) || !Iu.test(e) || t != null && e in Object(t);
    };
    var pn = kt(Object, "create");
    function Du() {
        this.__data__ = pn ? pn(null) : {}, this.size = 0;
    }
    function Lu(e) {
        var t = this.has(e) && delete this.__data__[e];
        return this.size -= t ? 1 : 0, t;
    }
    var ju = "__lodash_hash_undefined__", Bu = Object.prototype, zu = Bu.hasOwnProperty;
    function Fu(e) {
        var t = this.__data__;
        if (pn) {
            var n = t[e];
            return n === ju ? void 0 : n;
        }
        return zu.call(t, e) ? t[e] : void 0;
    }
    var Nu = Object.prototype, Uu = Nu.hasOwnProperty;
    function Hu(e) {
        var t = this.__data__;
        return pn ? t[e] !== void 0 : Uu.call(t, e);
    }
    var Vu = "__lodash_hash_undefined__";
    function Wu(e, t) {
        var n = this.__data__;
        return this.size += this.has(e) ? 0 : 1, n[e] = pn && t === void 0 ? Vu : t, this;
    }
    function Tt(e) {
        var t = -1, n = e == null ? 0 : e.length;
        for(this.clear(); ++t < n;){
            var r = e[t];
            this.set(r[0], r[1]);
        }
    }
    Tt.prototype.clear = Du;
    Tt.prototype.delete = Lu;
    Tt.prototype.get = Fu;
    Tt.prototype.has = Hu;
    Tt.prototype.set = Wu;
    function Ku() {
        this.__data__ = [], this.size = 0;
    }
    function ur(e, t) {
        for(var n = e.length; n--;)if (Oa(e[n][0], t)) return n;
        return -1;
    }
    var Gu = Array.prototype, Ju = Gu.splice;
    function Yu(e) {
        var t = this.__data__, n = ur(t, e);
        if (n < 0) return !1;
        var r = t.length - 1;
        return n == r ? t.pop() : Ju.call(t, n, 1), --this.size, !0;
    }
    function qu(e) {
        var t = this.__data__, n = ur(t, e);
        return n < 0 ? void 0 : t[n][1];
    }
    function Zu(e) {
        return ur(this.__data__, e) > -1;
    }
    function Xu(e, t) {
        var n = this.__data__, r = ur(n, e);
        return r < 0 ? (++this.size, n.push([
            e,
            t
        ])) : n[r][1] = t, this;
    }
    function ct(e) {
        var t = -1, n = e == null ? 0 : e.length;
        for(this.clear(); ++t < n;){
            var r = e[t];
            this.set(r[0], r[1]);
        }
    }
    ct.prototype.clear = Ku;
    ct.prototype.delete = Yu;
    ct.prototype.get = qu;
    ct.prototype.has = Zu;
    ct.prototype.set = Xu;
    var hn = kt(Ke, "Map");
    function Qu() {
        this.size = 0, this.__data__ = {
            hash: new Tt,
            map: new (hn || ct),
            string: new Tt
        };
    }
    function ef(e) {
        var t = typeof e;
        return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
    }
    function fr(e, t) {
        var n = e.__data__;
        return ef(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
    }
    function tf(e) {
        var t = fr(this, e).delete(e);
        return this.size -= t ? 1 : 0, t;
    }
    function nf(e) {
        return fr(this, e).get(e);
    }
    function rf(e) {
        return fr(this, e).has(e);
    }
    function of(e, t) {
        var n = fr(this, e), r = n.size;
        return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
    }
    pt = function(e) {
        var t = -1, n = e == null ? 0 : e.length;
        for(this.clear(); ++t < n;){
            var r = e[t];
            this.set(r[0], r[1]);
        }
    };
    pt.prototype.clear = Qu;
    pt.prototype.delete = tf;
    pt.prototype.get = nf;
    pt.prototype.has = rf;
    pt.prototype.set = of;
    var sf = "Expected a function";
    function lo(e, t) {
        if (typeof e != "function" || t != null && typeof t != "function") throw new TypeError(sf);
        var n = function() {
            var r = arguments, o = t ? t.apply(this, r) : r[0], s = n.cache;
            if (s.has(o)) return s.get(o);
            var a = e.apply(this, r);
            return n.cache = s.set(o, a) || s, a;
        };
        return n.cache = new (lo.Cache || pt), n;
    }
    lo.Cache = pt;
    var af = 500;
    function cf(e) {
        var t = lo(e, function(r) {
            return n.size === af && n.clear(), r;
        }), n = t.cache;
        return t;
    }
    var lf = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, uf = /\\(\\)?/g, ff = cf(function(e) {
        var t = [];
        return e.charCodeAt(0) === 46 && t.push(""), e.replace(lf, function(n, r, o, s) {
            t.push(o ? s.replace(uf, "$1") : r || n);
        }), t;
    });
    function df(e) {
        return e == null ? "" : Ea(e);
    }
    function dr(e, t) {
        return it(e) ? e : Mu(e, t) ? [
            e
        ] : ff(df(e));
    }
    uo = function(e) {
        if (typeof e == "string" || eo(e)) return e;
        var t = e + "";
        return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
    };
    Ba = function(e, t) {
        t = dr(t, e);
        for(var n = 0, r = t.length; e != null && n < r;)e = e[uo(t[n++])];
        return n && n == r ? e : void 0;
    };
    za = function(e, t, n) {
        var r = e == null ? void 0 : Ba(e, t);
        return r === void 0 ? n : r;
    };
    function fo(e, t) {
        for(var n = -1, r = t.length, o = e.length; ++n < r;)e[o + n] = t[n];
        return e;
    }
    var ns = Ve ? Ve.isConcatSpreadable : void 0;
    function pf(e) {
        return it(e) || so(e) || !!(ns && e && e[ns]);
    }
    hf = function(e, t, n, r, o) {
        var s = -1, a = e.length;
        for(n || (n = pf), o || (o = []); ++s < a;){
            var i = e[s];
            n(i) ? fo(o, i) : o[o.length] = i;
        }
        return o;
    };
    function mf(e) {
        var t = e == null ? 0 : e.length;
        return t ? hf(e) : [];
    }
    function gf(e) {
        return Al(zl(e, void 0, mf), e + "");
    }
    Fa = ja(Object.getPrototypeOf, Object);
    S_ = function() {
        if (!arguments.length) return [];
        var e = arguments[0];
        return it(e) ? e : [
            e
        ];
    };
    function vf() {
        this.__data__ = new ct, this.size = 0;
    }
    function bf(e) {
        var t = this.__data__, n = t.delete(e);
        return this.size = t.size, n;
    }
    function _f(e) {
        return this.__data__.get(e);
    }
    function yf(e) {
        return this.__data__.has(e);
    }
    var Cf = 200;
    function Sf(e, t) {
        var n = this.__data__;
        if (n instanceof ct) {
            var r = n.__data__;
            if (!hn || r.length < Cf - 1) return r.push([
                e,
                t
            ]), this.size = ++n.size, this;
            n = this.__data__ = new pt(r);
        }
        return n.set(e, t), this.size = n.size, this;
    }
    qt = function(e) {
        var t = this.__data__ = new ct(e);
        this.size = t.size;
    };
    qt.prototype.clear = vf;
    qt.prototype.delete = bf;
    qt.prototype.get = _f;
    qt.prototype.has = yf;
    qt.prototype.set = Sf;
    function Tf(e, t) {
        return e && lr(t, io(t), e);
    }
    function xf(e, t) {
        return e && lr(t, co(t), e);
    }
    var Na = typeof exports == "object" && exports && !exports.nodeType && exports, rs = Na && typeof module == "object" && module && !module.nodeType && module, kf = rs && rs.exports === Na, os = kf ? Ke.Buffer : void 0, ss = os ? os.allocUnsafe : void 0;
    wf = function(e, t) {
        if (t) return e.slice();
        var n = e.length, r = ss ? ss(n) : new e.constructor(n);
        return e.copy(r), r;
    };
    function Ef(e, t) {
        for(var n = -1, r = e == null ? 0 : e.length, o = 0, s = []; ++n < r;){
            var a = e[n];
            t(a, n, e) && (s[o++] = a);
        }
        return s;
    }
    function Ua() {
        return [];
    }
    var Pf = Object.prototype, Rf = Pf.propertyIsEnumerable, as = Object.getOwnPropertySymbols, po = as ? function(e) {
        return e == null ? [] : (e = Object(e), Ef(as(e), function(t) {
            return Rf.call(e, t);
        }));
    } : Ua;
    function Of(e, t) {
        return lr(e, po(e), t);
    }
    var $f = Object.getOwnPropertySymbols, Ha = $f ? function(e) {
        for(var t = []; e;)fo(t, po(e)), e = Fa(e);
        return t;
    } : Ua;
    function If(e, t) {
        return lr(e, Ha(e), t);
    }
    function Va(e, t, n) {
        var r = t(e);
        return it(e) ? r : fo(r, n(e));
    }
    Af = function(e) {
        return Va(e, io, po);
    };
    function Mf(e) {
        return Va(e, co, Ha);
    }
    let Ir, Ar, Mr, is, Df, cs, ls, us, fs, Lf, jf, Bf, zf, Ff;
    Ir = kt(Ke, "DataView");
    Ar = kt(Ke, "Promise");
    Mr = kt(Ke, "Set");
    is = "[object Map]";
    Df = "[object Object]";
    cs = "[object Promise]";
    ls = "[object Set]";
    us = "[object WeakMap]";
    fs = "[object DataView]";
    Lf = xt(Ir);
    jf = xt(hn);
    Bf = xt(Ar);
    zf = xt(Mr);
    Ff = xt($r);
    et = Jt;
    (Ir && et(new Ir(new ArrayBuffer(1))) != fs || hn && et(new hn) != is || Ar && et(Ar.resolve()) != cs || Mr && et(new Mr) != ls || $r && et(new $r) != us) && (et = function(e) {
        var t = Jt(e), n = t == Df ? e.constructor : void 0, r = n ? xt(n) : "";
        if (r) switch(r){
            case Lf:
                return fs;
            case jf:
                return is;
            case Bf:
                return cs;
            case zf:
                return ls;
            case Ff:
                return us;
        }
        return t;
    });
    var Nf = Object.prototype, Uf = Nf.hasOwnProperty;
    function Hf(e) {
        var t = e.length, n = new e.constructor(t);
        return t && typeof e[0] == "string" && Uf.call(e, "index") && (n.index = e.index, n.input = e.input), n;
    }
    ds = Ke.Uint8Array;
    function ho(e) {
        var t = new e.constructor(e.byteLength);
        return new ds(t).set(new ds(e)), t;
    }
    function Vf(e, t) {
        var n = t ? ho(e.buffer) : e.buffer;
        return new e.constructor(n, e.byteOffset, e.byteLength);
    }
    var Wf = /\w*$/;
    function Kf(e) {
        var t = new e.constructor(e.source, Wf.exec(e));
        return t.lastIndex = e.lastIndex, t;
    }
    var ps = Ve ? Ve.prototype : void 0, hs = ps ? ps.valueOf : void 0;
    function Gf(e) {
        return hs ? Object(hs.call(e)) : {};
    }
    Jf = function(e, t) {
        var n = t ? ho(e.buffer) : e.buffer;
        return new e.constructor(n, e.byteOffset, e.length);
    };
    var Yf = "[object Boolean]", qf = "[object Date]", Zf = "[object Map]", Xf = "[object Number]", Qf = "[object RegExp]", ed = "[object Set]", td = "[object String]", nd = "[object Symbol]", rd = "[object ArrayBuffer]", od = "[object DataView]", sd = "[object Float32Array]", ad = "[object Float64Array]", id = "[object Int8Array]", cd = "[object Int16Array]", ld = "[object Int32Array]", ud = "[object Uint8Array]", fd = "[object Uint8ClampedArray]", dd = "[object Uint16Array]", pd = "[object Uint32Array]";
    function hd(e, t, n) {
        var r = e.constructor;
        switch(t){
            case rd:
                return ho(e);
            case Yf:
            case qf:
                return new r(+e);
            case od:
                return Vf(e, n);
            case sd:
            case ad:
            case id:
            case cd:
            case ld:
            case ud:
            case fd:
            case dd:
            case pd:
                return Jf(e, n);
            case Zf:
                return new r;
            case Xf:
            case td:
                return new r(e);
            case Qf:
                return Kf(e);
            case ed:
                return new r;
            case nd:
                return Gf(e);
        }
    }
    md = function(e) {
        return typeof e.constructor == "function" && !oo(e) ? xl(Fa(e)) : {};
    };
    var gd = "[object Map]";
    function vd(e) {
        return Yt(e) && et(e) == gd;
    }
    var ms = Ft && Ft.isMap, bd = ms ? ao(ms) : vd, _d = "[object Set]";
    function yd(e) {
        return Yt(e) && et(e) == _d;
    }
    var gs = Ft && Ft.isSet, Cd = gs ? ao(gs) : yd, Sd = 1, Td = 2, xd = 4, Wa = "[object Arguments]", kd = "[object Array]", wd = "[object Boolean]", Ed = "[object Date]", Pd = "[object Error]", Ka = "[object Function]", Rd = "[object GeneratorFunction]", Od = "[object Map]", $d = "[object Number]", Ga = "[object Object]", Id = "[object RegExp]", Ad = "[object Set]", Md = "[object String]", Dd = "[object Symbol]", Ld = "[object WeakMap]", jd = "[object ArrayBuffer]", Bd = "[object DataView]", zd = "[object Float32Array]", Fd = "[object Float64Array]", Nd = "[object Int8Array]", Ud = "[object Int16Array]", Hd = "[object Int32Array]", Vd = "[object Uint8Array]", Wd = "[object Uint8ClampedArray]", Kd = "[object Uint16Array]", Gd = "[object Uint32Array]", Y = {};
    Y[Wa] = Y[kd] = Y[jd] = Y[Bd] = Y[wd] = Y[Ed] = Y[zd] = Y[Fd] = Y[Nd] = Y[Ud] = Y[Hd] = Y[Od] = Y[$d] = Y[Ga] = Y[Id] = Y[Ad] = Y[Md] = Y[Dd] = Y[Vd] = Y[Wd] = Y[Kd] = Y[Gd] = !0;
    Y[Pd] = Y[Ka] = Y[Ld] = !1;
    Sr = function(e, t, n, r, o, s) {
        var a, i = t & Sd, c = t & Td, l = t & xd;
        if (a !== void 0) return a;
        if (!St(e)) return e;
        var u = it(e);
        if (u) {
            if (a = Hf(e), !i) return wl(e, a);
        } else {
            var f = et(e), p = f == Ka || f == Rd;
            if (Ma(e)) return wf(e, i);
            if (f == Ga || f == Wa || p && !o) {
                if (a = c || p ? {} : md(e), !i) return c ? If(e, xf(a, e)) : Of(e, Tf(a, e));
            } else {
                if (!Y[f]) return o ? e : {};
                a = hd(e, f, i);
            }
        }
        s || (s = new qt);
        var m = s.get(e);
        if (m) return m;
        s.set(e, a), Cd(e) ? e.forEach(function(_) {
            a.add(Sr(_, t, n, _, e, s));
        }) : bd(e) && e.forEach(function(_, y) {
            a.set(y, Sr(_, t, n, y, e, s));
        });
        var h = l ? c ? Mf : Af : c ? co : io, g = u ? void 0 : h(e);
        return Ml(g || e, function(_, y) {
            g && (y = _, _ = e[y]), no(a, y, Sr(_, t, n, y, e, s));
        }), a;
    };
    function Jd(e, t) {
        return e != null && t in Object(e);
    }
    function Yd(e, t, n) {
        t = dr(t, e);
        for(var r = -1, o = t.length, s = !1; ++r < o;){
            var a = uo(t[r]);
            if (!(s = e != null && n(e, a))) break;
            e = e[a];
        }
        return s || ++r != o ? s : (o = e == null ? 0 : e.length, !!o && ro(o) && to(a, o) && (it(e) || so(e)));
    }
    qd = function(e, t) {
        return e != null && Yd(e, t, Jd);
    };
    function Zn(e) {
        for(var t = -1, n = e == null ? 0 : e.length, r = {}; ++t < n;){
            var o = e[t];
            r[o[0]] = o[1];
        }
        return r;
    }
    Tn = function(e) {
        return e == null;
    };
    function Zd(e) {
        return e === void 0;
    }
    function Ja(e, t, n, r) {
        if (!St(e)) return e;
        t = dr(t, e);
        for(var o = -1, s = t.length, a = s - 1, i = e; i != null && ++o < s;){
            var c = uo(t[o]), l = n;
            if (c === "__proto__" || c === "constructor" || c === "prototype") return e;
            if (o != a) {
                var u = i[c];
                l = void 0, l === void 0 && (l = St(u) ? u : to(t[o + 1]) ? [] : {});
            }
            no(i, c, l), i = i[c];
        }
        return e;
    }
    function Xd(e, t, n) {
        for(var r = -1, o = t.length, s = {}; ++r < o;){
            var a = t[r], i = Ba(e, a);
            n(i, a) && Ja(s, dr(a, e), i);
        }
        return s;
    }
    function Qd(e, t) {
        return Xd(e, t, function(n, r) {
            return qd(e, r);
        });
    }
    ep = gf(function(e, t) {
        return e == null ? {} : Qd(e, t);
    });
    function tp(e, t, n) {
        return e == null ? e : Ja(e, t, n);
    }
    let np;
    Ya = (e)=>e === void 0;
    qa = (e)=>typeof e == "boolean";
    le = (e)=>typeof e == "number";
    yt = (e)=>typeof Element > "u" ? !1 : e instanceof Element;
    T_ = (e)=>Tn(e);
    np = (e)=>nt(e) ? !Number.isNaN(Number(e)) : !1;
    var rp = Object.defineProperty, op = Object.defineProperties, sp = Object.getOwnPropertyDescriptors, vs = Object.getOwnPropertySymbols, ap = Object.prototype.hasOwnProperty, ip = Object.prototype.propertyIsEnumerable, bs = (e, t, n)=>t in e ? rp(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: n
        }) : e[t] = n, cp = (e, t)=>{
        for(var n in t || (t = {}))ap.call(t, n) && bs(e, n, t[n]);
        if (vs) for (var n of vs(t))ip.call(t, n) && bs(e, n, t[n]);
        return e;
    }, lp = (e, t)=>op(e, sp(t));
    function Za(e, t) {
        var n;
        const r = Lt();
        return _a(()=>{
            r.value = e();
        }, lp(cp({}, t), {
            flush: (n = void 0) != null ? n : "sync"
        })), qr(r);
    }
    var _s;
    let up, fp, dp, Xn;
    ve = typeof window < "u";
    up = (e)=>typeof e < "u";
    fp = (e)=>typeof e == "function";
    dp = (e)=>typeof e == "string";
    Xn = ()=>{};
    pp = ve && ((_s = window?.navigator) == null ? void 0 : _s.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
    function mn(e) {
        return typeof e == "function" ? e() : d(e);
    }
    function hp(e, t) {
        function n(...r) {
            return new Promise((o, s)=>{
                Promise.resolve(e(()=>t.apply(this, r), {
                    fn: t,
                    thisArg: this,
                    args: r
                })).then(o).catch(s);
            });
        }
        return n;
    }
    function mp(e, t = {}) {
        let n, r, o = Xn;
        const s = (i)=>{
            clearTimeout(i), o(), o = Xn;
        };
        return (i)=>{
            const c = mn(e), l = mn(t.maxWait);
            return n && s(n), c <= 0 || l !== void 0 && l <= 0 ? (r && (s(r), r = null), Promise.resolve(i())) : new Promise((u, f)=>{
                o = t.rejectOnCancel ? f : u, l && !r && (r = setTimeout(()=>{
                    n && s(n), r = null, u(i());
                }, l)), n = setTimeout(()=>{
                    r && s(r), r = null, u(i());
                }, c);
            });
        };
    }
    function gp(e) {
        return e;
    }
    function xn(e) {
        return Ac() ? (Mc(e), !0) : !1;
    }
    function vp(e, t = 200, n = {}) {
        return hp(mp(t, n), e);
    }
    x_ = function(e, t = 200, n = {}) {
        const r = P(e.value), o = vp(()=>{
            r.value = e.value;
        }, t, n);
        return F(e, ()=>o()), r;
    };
    function bp(e, t = !0) {
        Ce() ? Se(e) : t ? e() : Ae(e);
    }
    k_ = function(e, t, n = {}) {
        const { immediate: r = !0 } = n, o = P(!1);
        let s = null;
        function a() {
            s && (clearTimeout(s), s = null);
        }
        function i() {
            o.value = !1, a();
        }
        function c(...l) {
            a(), o.value = !0, s = setTimeout(()=>{
                o.value = !1, s = null, e(...l);
            }, mn(t));
        }
        return r && (o.value = !0, ve && c()), xn(i), {
            isPending: qr(o),
            start: c,
            stop: i
        };
    };
    function tt(e) {
        var t;
        const n = mn(e);
        return (t = n?.$el) != null ? t : n;
    }
    const pr = ve ? window : void 0;
    rt = function(...e) {
        let t, n, r, o;
        if (dp(e[0]) || Array.isArray(e[0]) ? ([n, r, o] = e, t = pr) : [t, n, r, o] = e, !t) return Xn;
        Array.isArray(n) || (n = [
            n
        ]), Array.isArray(r) || (r = [
            r
        ]);
        const s = [], a = ()=>{
            s.forEach((u)=>u()), s.length = 0;
        }, i = (u, f, p, m)=>(u.addEventListener(f, p, m), ()=>u.removeEventListener(f, p, m)), c = F(()=>[
                tt(t),
                mn(o)
            ], ([u, f])=>{
            a(), u && s.push(...n.flatMap((p)=>r.map((m)=>i(u, p, m, f))));
        }, {
            immediate: !0,
            flush: "post"
        }), l = ()=>{
            c(), a();
        };
        return xn(l), l;
    };
    let ys = !1;
    function _p(e, t, n = {}) {
        const { window: r = pr, ignore: o = [], capture: s = !0, detectIframe: a = !1 } = n;
        if (!r) return;
        pp && !ys && (ys = !0, Array.from(r.document.body.children).forEach((p)=>p.addEventListener("click", Xn)));
        let i = !0;
        const c = (p)=>o.some((m)=>{
                if (typeof m == "string") return Array.from(r.document.querySelectorAll(m)).some((h)=>h === p.target || p.composedPath().includes(h));
                {
                    const h = tt(m);
                    return h && (p.target === h || p.composedPath().includes(h));
                }
            }), u = [
            rt(r, "click", (p)=>{
                const m = tt(e);
                if (!(!m || m === p.target || p.composedPath().includes(m))) {
                    if (p.detail === 0 && (i = !c(p)), !i) {
                        i = !0;
                        return;
                    }
                    t(p);
                }
            }, {
                passive: !0,
                capture: s
            }),
            rt(r, "pointerdown", (p)=>{
                const m = tt(e);
                m && (i = !p.composedPath().includes(m) && !c(p));
            }, {
                passive: !0
            }),
            a && rt(r, "blur", (p)=>{
                var m;
                const h = tt(e);
                ((m = r.document.activeElement) == null ? void 0 : m.tagName) === "IFRAME" && !h?.contains(r.document.activeElement) && t(p);
            })
        ].filter(Boolean);
        return ()=>u.forEach((p)=>p());
    }
    function Xa(e, t = !1) {
        const n = P(), r = ()=>n.value = !!e();
        return r(), bp(r, t), n;
    }
    function yp(e) {
        return JSON.parse(JSON.stringify(e));
    }
    const Cs = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Ss = "__vueuse_ssr_handlers__";
    Cs[Ss] = Cs[Ss] || {};
    var Ts = Object.getOwnPropertySymbols, Cp = Object.prototype.hasOwnProperty, Sp = Object.prototype.propertyIsEnumerable, Tp = (e, t)=>{
        var n = {};
        for(var r in e)Cp.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (e != null && Ts) for (var r of Ts(e))t.indexOf(r) < 0 && Sp.call(e, r) && (n[r] = e[r]);
        return n;
    };
    Qa = function(e, t, n = {}) {
        const r = n, { window: o = pr } = r, s = Tp(r, [
            "window"
        ]);
        let a;
        const i = Xa(()=>o && "ResizeObserver" in o), c = ()=>{
            a && (a.disconnect(), a = void 0);
        }, l = F(()=>tt(e), (f)=>{
            c(), i.value && o && f && (a = new ResizeObserver(t), a.observe(f, s));
        }, {
            immediate: !0,
            flush: "post"
        }), u = ()=>{
            c(), l();
        };
        return xn(u), {
            isSupported: i,
            stop: u
        };
    };
    var xs = Object.getOwnPropertySymbols, xp = Object.prototype.hasOwnProperty, kp = Object.prototype.propertyIsEnumerable, wp = (e, t)=>{
        var n = {};
        for(var r in e)xp.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (e != null && xs) for (var r of xs(e))t.indexOf(r) < 0 && kp.call(e, r) && (n[r] = e[r]);
        return n;
    };
    w_ = function(e, t, n = {}) {
        const r = n, { window: o = pr } = r, s = wp(r, [
            "window"
        ]);
        let a;
        const i = Xa(()=>o && "MutationObserver" in o), c = ()=>{
            a && (a.disconnect(), a = void 0);
        }, l = F(()=>tt(e), (f)=>{
            c(), i.value && o && f && (a = new MutationObserver(t), a.observe(f, s));
        }, {
            immediate: !0
        }), u = ()=>{
            c(), l();
        };
        return xn(u), {
            isSupported: i,
            stop: u
        };
    };
    var ks;
    (function(e) {
        e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
    })(ks || (ks = {}));
    var Ep = Object.defineProperty, ws = Object.getOwnPropertySymbols, Pp = Object.prototype.hasOwnProperty, Rp = Object.prototype.propertyIsEnumerable, Es = (e, t, n)=>t in e ? Ep(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: n
        }) : e[t] = n, Op = (e, t)=>{
        for(var n in t || (t = {}))Pp.call(t, n) && Es(e, n, t[n]);
        if (ws) for (var n of ws(t))Rp.call(t, n) && Es(e, n, t[n]);
        return e;
    };
    const $p = {
        easeInSine: [
            .12,
            0,
            .39,
            0
        ],
        easeOutSine: [
            .61,
            1,
            .88,
            1
        ],
        easeInOutSine: [
            .37,
            0,
            .63,
            1
        ],
        easeInQuad: [
            .11,
            0,
            .5,
            0
        ],
        easeOutQuad: [
            .5,
            1,
            .89,
            1
        ],
        easeInOutQuad: [
            .45,
            0,
            .55,
            1
        ],
        easeInCubic: [
            .32,
            0,
            .67,
            0
        ],
        easeOutCubic: [
            .33,
            1,
            .68,
            1
        ],
        easeInOutCubic: [
            .65,
            0,
            .35,
            1
        ],
        easeInQuart: [
            .5,
            0,
            .75,
            0
        ],
        easeOutQuart: [
            .25,
            1,
            .5,
            1
        ],
        easeInOutQuart: [
            .76,
            0,
            .24,
            1
        ],
        easeInQuint: [
            .64,
            0,
            .78,
            0
        ],
        easeOutQuint: [
            .22,
            1,
            .36,
            1
        ],
        easeInOutQuint: [
            .83,
            0,
            .17,
            1
        ],
        easeInExpo: [
            .7,
            0,
            .84,
            0
        ],
        easeOutExpo: [
            .16,
            1,
            .3,
            1
        ],
        easeInOutExpo: [
            .87,
            0,
            .13,
            1
        ],
        easeInCirc: [
            .55,
            0,
            1,
            .45
        ],
        easeOutCirc: [
            0,
            .55,
            .45,
            1
        ],
        easeInOutCirc: [
            .85,
            0,
            .15,
            1
        ],
        easeInBack: [
            .36,
            0,
            .66,
            -.56
        ],
        easeOutBack: [
            .34,
            1.56,
            .64,
            1
        ],
        easeInOutBack: [
            .68,
            -.6,
            .32,
            1.6
        ]
    };
    Op({
        linear: gp
    }, $p);
    E_ = function(e, t, n, r = {}) {
        var o, s, a;
        const { clone: i = !1, passive: c = !1, eventName: l, deep: u = !1, defaultValue: f } = r, p = Ce(), m = p?.emit || ((o = p?.$emit) == null ? void 0 : o.bind(p)) || ((a = (s = p?.proxy) == null ? void 0 : s.$emit) == null ? void 0 : a.bind(p?.proxy));
        let h = l;
        h = l || h || `update:${t.toString()}`;
        const g = (y)=>i ? fp(i) ? i(y) : yp(y) : y, _ = ()=>up(e[t]) ? g(e[t]) : f;
        if (c) {
            const y = _(), k = P(y);
            return F(()=>e[t], (v)=>k.value = g(v)), F(k, (v)=>{
                (v !== e[t] || u) && m(h, v);
            }, {
                deep: u
            }), k;
        } else return b({
            get () {
                return _();
            },
            set (y) {
                m(h, y);
            }
        });
    };
    class Ip extends Error {
        constructor(t){
            super(t), this.name = "ElementPlusError";
        }
    }
    Ap = function(e, t) {
        throw new Ip(`[${e}] ${t}`);
    };
    P_ = function(e, t) {};
    const Ps = {
        current: 0
    }, Rs = P(0), ei = 2e3, Os = Symbol("elZIndexContextKey"), ti = Symbol("zIndexContextKey"), ni = (e)=>{
        const t = Ce() ? Q(Os, Ps) : Ps, n = e || (Ce() ? Q(ti, void 0) : void 0), r = b(()=>{
            const a = d(n);
            return le(a) ? a : ei;
        }), o = b(()=>r.value + Rs.value), s = ()=>(t.current++, Rs.value = t.current, o.value);
        return !ve && Q(Os), {
            initialZIndex: r,
            currentZIndex: o,
            nextZIndex: s
        };
    };
    var Mp = {
        name: "en",
        el: {
            breadcrumb: {
                label: "Breadcrumb"
            },
            colorpicker: {
                confirm: "OK",
                clear: "Clear",
                defaultLabel: "color picker",
                description: "current color is {color}. press enter to select a new color.",
                alphaLabel: "pick alpha value"
            },
            datepicker: {
                now: "Now",
                today: "Today",
                cancel: "Cancel",
                clear: "Clear",
                confirm: "OK",
                dateTablePrompt: "Use the arrow keys and enter to select the day of the month",
                monthTablePrompt: "Use the arrow keys and enter to select the month",
                yearTablePrompt: "Use the arrow keys and enter to select the year",
                selectedDate: "Selected date",
                selectDate: "Select date",
                selectTime: "Select time",
                startDate: "Start Date",
                startTime: "Start Time",
                endDate: "End Date",
                endTime: "End Time",
                prevYear: "Previous Year",
                nextYear: "Next Year",
                prevMonth: "Previous Month",
                nextMonth: "Next Month",
                year: "",
                month1: "January",
                month2: "February",
                month3: "March",
                month4: "April",
                month5: "May",
                month6: "June",
                month7: "July",
                month8: "August",
                month9: "September",
                month10: "October",
                month11: "November",
                month12: "December",
                week: "week",
                weeks: {
                    sun: "Sun",
                    mon: "Mon",
                    tue: "Tue",
                    wed: "Wed",
                    thu: "Thu",
                    fri: "Fri",
                    sat: "Sat"
                },
                weeksFull: {
                    sun: "Sunday",
                    mon: "Monday",
                    tue: "Tuesday",
                    wed: "Wednesday",
                    thu: "Thursday",
                    fri: "Friday",
                    sat: "Saturday"
                },
                months: {
                    jan: "Jan",
                    feb: "Feb",
                    mar: "Mar",
                    apr: "Apr",
                    may: "May",
                    jun: "Jun",
                    jul: "Jul",
                    aug: "Aug",
                    sep: "Sep",
                    oct: "Oct",
                    nov: "Nov",
                    dec: "Dec"
                }
            },
            inputNumber: {
                decrease: "decrease number",
                increase: "increase number"
            },
            select: {
                loading: "Loading",
                noMatch: "No matching data",
                noData: "No data",
                placeholder: "Select"
            },
            mention: {
                loading: "Loading"
            },
            dropdown: {
                toggleDropdown: "Toggle Dropdown"
            },
            cascader: {
                noMatch: "No matching data",
                loading: "Loading",
                placeholder: "Select",
                noData: "No data"
            },
            pagination: {
                goto: "Go to",
                pagesize: "/page",
                total: "Total {total}",
                pageClassifier: "",
                page: "Page",
                prev: "Go to previous page",
                next: "Go to next page",
                currentPage: "page {pager}",
                prevPages: "Previous {pager} pages",
                nextPages: "Next {pager} pages",
                deprecationWarning: "Deprecated usages detected, please refer to the el-pagination documentation for more details"
            },
            dialog: {
                close: "Close this dialog"
            },
            drawer: {
                close: "Close this dialog"
            },
            messagebox: {
                title: "Message",
                confirm: "OK",
                cancel: "Cancel",
                error: "Illegal input",
                close: "Close this dialog"
            },
            upload: {
                deleteTip: "press delete to remove",
                delete: "Delete",
                preview: "Preview",
                continue: "Continue"
            },
            slider: {
                defaultLabel: "slider between {min} and {max}",
                defaultRangeStartLabel: "pick start value",
                defaultRangeEndLabel: "pick end value"
            },
            table: {
                emptyText: "No Data",
                confirmFilter: "Confirm",
                resetFilter: "Reset",
                clearFilter: "All",
                sumText: "Sum"
            },
            tour: {
                next: "Next",
                previous: "Previous",
                finish: "Finish"
            },
            tree: {
                emptyText: "No Data"
            },
            transfer: {
                noMatch: "No matching data",
                noData: "No data",
                titles: [
                    "List 1",
                    "List 2"
                ],
                filterPlaceholder: "Enter keyword",
                noCheckedFormat: "{total} items",
                hasCheckedFormat: "{checked}/{total} checked"
            },
            image: {
                error: "FAILED"
            },
            pageHeader: {
                title: "Back"
            },
            popconfirm: {
                confirmButtonText: "Yes",
                cancelButtonText: "No"
            },
            carousel: {
                leftArrow: "Carousel arrow left",
                rightArrow: "Carousel arrow right",
                indicator: "Carousel switch to index {index}"
            }
        }
    };
    let Dp, Lp, jp, ri, oi, zp, hr, ai, Fp, ii, Np, Up, Dr, Qn;
    Dp = (e)=>(t, n)=>Lp(t, n, d(e));
    Lp = (e, t, n)=>za(n, e, e).replace(/\{(\w+)\}/g, (r, o)=>{
            var s;
            return `${(s = t?.[o]) != null ? s : `{${o}}`}`;
        });
    jp = (e)=>{
        const t = b(()=>d(e).name), n = Dc(e) ? e : P(e);
        return {
            lang: t,
            locale: n,
            t: Dp(e)
        };
    };
    ri = Symbol("localeContextKey");
    Bp = (e)=>{
        const t = e || Q(ri, P());
        return jp(b(()=>t.value || Mp));
    };
    oi = "__epPropKey";
    L = (e)=>e;
    zp = (e)=>dt(e) && !!e[oi];
    hr = (e, t)=>{
        if (!dt(e) || zp(e)) return e;
        const { values: n, required: r, default: o, type: s, validator: a } = e, c = {
            type: s,
            required: !!r,
            validator: n || a ? (l)=>{
                let u = !1, f = [];
                if (n && (f = Array.from(n), Vo(e, "default") && f.push(o), u || (u = f.includes(l))), a && (u || (u = a(l))), !u && f.length > 0) {
                    const p = [
                        ...new Set(f)
                    ].map((m)=>JSON.stringify(m)).join(", ");
                    Lc(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${p}], got value ${JSON.stringify(l)}.`);
                }
                return u;
            } : void 0,
            [oi]: !0
        };
        return Vo(e, "default") && (c.default = o), c;
    };
    Z = (e)=>Zn(Object.entries(e).map(([t, n])=>[
                t,
                hr(n, t)
            ]));
    mo = [
        "",
        "default",
        "small",
        "large"
    ];
    si = hr({
        type: String,
        values: mo,
        required: !1
    });
    ai = Symbol("size");
    Fp = ()=>{
        const e = Q(ai, {});
        return b(()=>d(e.size) || "");
    };
    ii = Symbol("emptyValuesContextKey");
    Np = [
        "",
        void 0,
        null
    ];
    Up = void 0;
    R_ = Z({
        emptyValues: Array,
        valueOnClear: {
            type: [
                String,
                Number,
                Boolean,
                Function
            ],
            default: void 0,
            validator: (e)=>Be(e) ? !e() : !e
        }
    });
    O_ = (e, t)=>{
        const n = Ce() ? Q(ii, P({})) : P({}), r = b(()=>e.emptyValues || n.value.emptyValues || Np), o = b(()=>Be(e.valueOnClear) ? e.valueOnClear() : e.valueOnClear !== void 0 ? e.valueOnClear : Be(n.value.valueOnClear) ? n.value.valueOnClear() : n.value.valueOnClear !== void 0 ? n.value.valueOnClear : Up), s = (a)=>r.value.includes(a);
        return r.value.includes(o.value), {
            emptyValues: r,
            valueOnClear: o,
            isEmptyValue: s
        };
    };
    Dr = (e)=>Object.keys(e);
    $_ = (e)=>Object.entries(e);
    I_ = (e, t, n)=>({
            get value () {
                return za(e, t, n);
            },
            set value (r){
                tp(e, t, r);
            }
        });
    Qn = P();
    function go(e, t = void 0) {
        const n = Ce() ? Q(Ta, Qn) : Qn;
        return e ? b(()=>{
            var r, o;
            return (o = (r = n.value) == null ? void 0 : r[e]) != null ? o : t;
        }) : n;
    }
    A_ = function(e, t) {
        const n = go(), r = te(e, b(()=>{
            var i;
            return ((i = n.value) == null ? void 0 : i.namespace) || Fn;
        })), o = Bp(b(()=>{
            var i;
            return (i = n.value) == null ? void 0 : i.locale;
        })), s = ni(b(()=>{
            var i;
            return ((i = n.value) == null ? void 0 : i.zIndex) || ei;
        })), a = b(()=>{
            var i;
            return d(t) || ((i = n.value) == null ? void 0 : i.size) || "";
        });
        return Hp(b(()=>d(n) || {})), {
            ns: r,
            locale: o,
            zIndex: s,
            size: a
        };
    };
    let Hp, Vp, Is;
    Hp = (e, t, n = !1)=>{
        var r;
        const o = !!Ce(), s = o ? go() : void 0, a = (r = void 0) != null ? r : o ? He : void 0;
        if (!a) return;
        const i = b(()=>{
            const c = d(e);
            return s?.value ? Vp(s.value, c) : c;
        });
        return a(Ta, i), a(ri, b(()=>i.value.locale)), a(xa, b(()=>i.value.namespace)), a(ti, b(()=>i.value.zIndex)), a(ai, {
            size: b(()=>i.value.size || "")
        }), a(ii, b(()=>({
                emptyValues: i.value.emptyValues,
                valueOnClear: i.value.valueOnClear
            }))), (n || !Qn.value) && (Qn.value = i.value), i;
    };
    Vp = (e, t)=>{
        const n = [
            ...new Set([
                ...Dr(e),
                ...Dr(t)
            ])
        ], r = {};
        for (const o of n)r[o] = t[o] !== void 0 ? t[o] : e[o];
        return r;
    };
    Lr = "update:modelValue";
    $s = "change";
    Is = "input";
    oe = (e, t)=>{
        const n = e.__vccOpts || e;
        for (const [r, o] of t)n[r] = o;
        return n;
    };
    let ci;
    ci = (e = "")=>e.split(" ").filter((t)=>!!t.trim());
    M_ = (e, t)=>{
        if (!e || !t) return !1;
        if (t.includes(" ")) throw new Error("className should not contain space.");
        return e.classList.contains(t);
    };
    D_ = (e, t)=>{
        !e || !t.trim() || e.classList.add(...ci(t));
    };
    L_ = (e, t)=>{
        !e || !t.trim() || e.classList.remove(...ci(t));
    };
    jr = function(e, t = "px") {
        if (!e) return "";
        if (le(e) || np(e)) return `${e}${t}`;
        if (nt(e)) return e;
    };
    let Wp, Kp, Gp;
    Te = (e, t)=>{
        if (e.install = (n)=>{
            for (const r of [
                e,
                ...Object.values(t ?? {})
            ])n.component(r.name, r);
        }, t) for (const [n, r] of Object.entries(t))e[n] = r;
        return e;
    };
    j_ = (e, t)=>(e.install = (n)=>{
            e._context = n._context, n.config.globalProperties[t] = e;
        }, e);
    li = (e)=>(e.install = fn, e);
    Wp = Z({
        size: {
            type: L([
                Number,
                String
            ])
        },
        color: {
            type: String
        }
    });
    Kp = R({
        name: "ElIcon",
        inheritAttrs: !1
    });
    Gp = R({
        ...Kp,
        props: Wp,
        setup (e) {
            const t = e, n = te("icon"), r = b(()=>{
                const { size: o, color: s } = t;
                return !o && !s ? {} : {
                    fontSize: Ya(o) ? void 0 : jr(o),
                    "--color": s
                };
            });
            return (o, s)=>(C(), $("i", ot({
                    class: d(n).b(),
                    style: d(r)
                }, o.$attrs), [
                    z(o.$slots, "default")
                ], 16));
        }
    });
    var Jp = oe(Gp, [
        [
            "__file",
            "icon.vue"
        ]
    ]);
    we = Te(Jp);
    let Yp, qp, Zp, Xp, eh, th, nh, rh, oh, sh, ah, ih, ch, lh, uh, dh, ph, hh, mh, gh, vh, bh, _h, yh, di, Ch;
    Yp = R({
        name: "ArrowDown",
        __name: "arrow-down",
        setup (e) {
            return (t, n)=>(C(), $("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 1024 1024"
                }, [
                    D("path", {
                        fill: "currentColor",
                        d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
                    })
                ]));
        }
    });
    B_ = Yp;
    qp = R({
        name: "ArrowRight",
        __name: "arrow-right",
        setup (e) {
            return (t, n)=>(C(), $("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 1024 1024"
                }, [
                    D("path", {
                        fill: "currentColor",
                        d: "M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"
                    })
                ]));
        }
    });
    z_ = qp;
    Zp = R({
        name: "ArrowUp",
        __name: "arrow-up",
        setup (e) {
            return (t, n)=>(C(), $("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 1024 1024"
                }, [
                    D("path", {
                        fill: "currentColor",
                        d: "m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0"
                    })
                ]));
        }
    });
    F_ = Zp;
    Xp = R({
        name: "Check",
        __name: "check",
        setup (e) {
            return (t, n)=>(C(), $("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 1024 1024"
                }, [
                    D("path", {
                        fill: "currentColor",
                        d: "M406.656 706.944 195.84 496.256a32 32 0 1 0-45.248 45.248l256 256 512-512a32 32 0 0 0-45.248-45.248L406.592 706.944z"
                    })
                ]));
        }
    });
    Qp = Xp;
    eh = R({
        name: "CircleCheck",
        __name: "circle-check",
        setup (e) {
            return (t, n)=>(C(), $("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 1024 1024"
                }, [
                    D("path", {
                        fill: "currentColor",
                        d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"
                    }),
                    D("path", {
                        fill: "currentColor",
                        d: "M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z"
                    })
                ]));
        }
    });
    ui = eh;
    th = R({
        name: "CircleCloseFilled",
        __name: "circle-close-filled",
        setup (e) {
            return (t, n)=>(C(), $("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 1024 1024"
                }, [
                    D("path", {
                        fill: "currentColor",
                        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
                    })
                ]));
        }
    });
    nh = th;
    rh = R({
        name: "CircleClose",
        __name: "circle-close",
        setup (e) {
            return (t, n)=>(C(), $("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 1024 1024"
                }, [
                    D("path", {
                        fill: "currentColor",
                        d: "m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248z"
                    }),
                    D("path", {
                        fill: "currentColor",
                        d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"
                    })
                ]));
        }
    });
    vo = rh;
    oh = R({
        name: "Close",
        __name: "close",
        setup (e) {
            return (t, n)=>(C(), $("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 1024 1024"
                }, [
                    D("path", {
                        fill: "currentColor",
                        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
                    })
                ]));
        }
    });
    er = oh;
    sh = R({
        name: "Delete",
        __name: "delete",
        setup (e) {
            return (t, n)=>(C(), $("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 1024 1024"
                }, [
                    D("path", {
                        fill: "currentColor",
                        d: "M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32zm448-64v-64H416v64zM224 896h576V256H224zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32m192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32"
                    })
                ]));
        }
    });
    N_ = sh;
    ah = R({
        name: "DocumentCopy",
        __name: "document-copy",
        setup (e) {
            return (t, n)=>(C(), $("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 1024 1024"
                }, [
                    D("path", {
                        fill: "currentColor",
                        d: "M128 320v576h576V320zm-32-64h640a32 32 0 0 1 32 32v640a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V288a32 32 0 0 1 32-32M960 96v704a32 32 0 0 1-32 32h-96v-64h64V128H384v64h-64V96a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32M256 672h320v64H256zm0-192h320v64H256z"
                    })
                ]));
        }
    });
    U_ = ah;
    ih = R({
        name: "Document",
        __name: "document",
        setup (e) {
            return (t, n)=>(C(), $("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 1024 1024"
                }, [
                    D("path", {
                        fill: "currentColor",
                        d: "M832 384H576V128H192v768h640zm-26.496-64L640 154.496V320zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32m160 448h384v64H320zm0-192h160v64H320zm0 384h384v64H320z"
                    })
                ]));
        }
    });
    H_ = ih;
    ch = R({
        name: "Hide",
        __name: "hide",
        setup (e) {
            return (t, n)=>(C(), $("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 1024 1024"
                }, [
                    D("path", {
                        fill: "currentColor",
                        d: "M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2zM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z"
                    }),
                    D("path", {
                        fill: "currentColor",
                        d: "M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z"
                    })
                ]));
        }
    });
    lh = ch;
    uh = R({
        name: "InfoFilled",
        __name: "info-filled",
        setup (e) {
            return (t, n)=>(C(), $("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 1024 1024"
                }, [
                    D("path", {
                        fill: "currentColor",
                        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
                    })
                ]));
        }
    });
    fh = uh;
    dh = R({
        name: "Loading",
        __name: "loading",
        setup (e) {
            return (t, n)=>(C(), $("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 1024 1024"
                }, [
                    D("path", {
                        fill: "currentColor",
                        d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32m0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32m448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32m-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32M195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0m-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
                    })
                ]));
        }
    });
    fi = dh;
    ph = R({
        name: "PictureFilled",
        __name: "picture-filled",
        setup (e) {
            return (t, n)=>(C(), $("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 1024 1024"
                }, [
                    D("path", {
                        fill: "currentColor",
                        d: "M96 896a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h832a32 32 0 0 1 32 32v704a32 32 0 0 1-32 32zm315.52-228.48-68.928-68.928a32 32 0 0 0-45.248 0L128 768.064h778.688l-242.112-290.56a32 32 0 0 0-49.216 0L458.752 665.408a32 32 0 0 1-47.232 2.112M256 384a96 96 0 1 0 192.064-.064A96 96 0 0 0 256 384"
                    })
                ]));
        }
    });
    hh = ph;
    mh = R({
        name: "SuccessFilled",
        __name: "success-filled",
        setup (e) {
            return (t, n)=>(C(), $("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 1024 1024"
                }, [
                    D("path", {
                        fill: "currentColor",
                        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
                    })
                ]));
        }
    });
    gh = mh;
    vh = R({
        name: "UploadFilled",
        __name: "upload-filled",
        setup (e) {
            return (t, n)=>(C(), $("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 1024 1024"
                }, [
                    D("path", {
                        fill: "currentColor",
                        d: "M544 864V672h128L512 480 352 672h128v192H320v-1.6c-5.376.32-10.496 1.6-16 1.6A240 240 0 0 1 64 624c0-123.136 93.12-223.488 212.608-237.248A239.808 239.808 0 0 1 512 192a239.872 239.872 0 0 1 235.456 194.752c119.488 13.76 212.48 114.112 212.48 237.248a240 240 0 0 1-240 240c-5.376 0-10.56-1.28-16-1.6v1.6z"
                    })
                ]));
        }
    });
    V_ = vh;
    bh = R({
        name: "View",
        __name: "view",
        setup (e) {
            return (t, n)=>(C(), $("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 1024 1024"
                }, [
                    D("path", {
                        fill: "currentColor",
                        d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352m0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448m0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160"
                    })
                ]));
        }
    });
    _h = bh;
    yh = R({
        name: "WarningFilled",
        __name: "warning-filled",
        setup (e) {
            return (t, n)=>(C(), $("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 1024 1024"
                }, [
                    D("path", {
                        fill: "currentColor",
                        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
                    })
                ]));
        }
    });
    di = yh;
    Ch = R({
        name: "ZoomIn",
        __name: "zoom-in",
        setup (e) {
            return (t, n)=>(C(), $("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 1024 1024"
                }, [
                    D("path", {
                        fill: "currentColor",
                        d: "m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704m-32-384v-96a32 32 0 0 1 64 0v96h96a32 32 0 0 1 0 64h-96v96a32 32 0 0 1-64 0v-96h-96a32 32 0 0 1 0-64z"
                    })
                ]));
        }
    });
    W_ = Ch;
    let xh, kh, wh, Eh, Ph;
    tr = L([
        String,
        Object,
        Function
    ]);
    Sh = {
        Close: er
    };
    pi = {
        success: gh,
        warning: di,
        error: nh,
        info: fh
    };
    Th = {
        validating: fi,
        success: ui,
        error: vo
    };
    xh = [
        "light",
        "dark"
    ];
    kh = Z({
        title: {
            type: String,
            default: ""
        },
        description: {
            type: String,
            default: ""
        },
        type: {
            type: String,
            values: Dr(pi),
            default: "info"
        },
        closable: {
            type: Boolean,
            default: !0
        },
        closeText: {
            type: String,
            default: ""
        },
        showIcon: Boolean,
        center: Boolean,
        effect: {
            type: String,
            values: xh,
            default: "light"
        }
    });
    wh = {
        close: (e)=>e instanceof MouseEvent
    };
    Eh = R({
        name: "ElAlert"
    });
    Ph = R({
        ...Eh,
        props: kh,
        emits: wh,
        setup (e, { emit: t }) {
            const n = e, { Close: r } = Sh, o = Zr(), s = te("alert"), a = P(!0), i = b(()=>pi[n.type]), c = b(()=>!!(n.description || o.default)), l = (u)=>{
                a.value = !1, t("close", u);
            };
            return (u, f)=>(C(), B(cr, {
                    name: d(s).b("fade"),
                    persisted: ""
                }, {
                    default: q(()=>[
                            ir(D("div", {
                                class: I([
                                    d(s).b(),
                                    d(s).m(u.type),
                                    d(s).is("center", u.center),
                                    d(s).is(u.effect)
                                ]),
                                role: "alert"
                            }, [
                                u.showIcon && (u.$slots.icon || d(i)) ? (C(), B(d(we), {
                                    key: 0,
                                    class: I([
                                        d(s).e("icon"),
                                        {
                                            [d(s).is("big")]: d(c)
                                        }
                                    ])
                                }, {
                                    default: q(()=>[
                                            z(u.$slots, "icon", {}, ()=>[
                                                    (C(), B(ze(d(i))))
                                                ])
                                        ]),
                                    _: 3
                                }, 8, [
                                    "class"
                                ])) : j("v-if", !0),
                                D("div", {
                                    class: I(d(s).e("content"))
                                }, [
                                    u.title || u.$slots.title ? (C(), $("span", {
                                        key: 0,
                                        class: I([
                                            d(s).e("title"),
                                            {
                                                "with-description": d(c)
                                            }
                                        ])
                                    }, [
                                        z(u.$slots, "title", {}, ()=>[
                                                dn(Ee(u.title), 1)
                                            ])
                                    ], 2)) : j("v-if", !0),
                                    d(c) ? (C(), $("p", {
                                        key: 1,
                                        class: I(d(s).e("description"))
                                    }, [
                                        z(u.$slots, "default", {}, ()=>[
                                                dn(Ee(u.description), 1)
                                            ])
                                    ], 2)) : j("v-if", !0),
                                    u.closable ? (C(), $(Me, {
                                        key: 2
                                    }, [
                                        u.closeText ? (C(), $("div", {
                                            key: 0,
                                            class: I([
                                                d(s).e("close-btn"),
                                                d(s).is("customed")
                                            ]),
                                            onClick: l
                                        }, Ee(u.closeText), 3)) : (C(), B(d(we), {
                                            key: 1,
                                            class: I(d(s).e("close-btn")),
                                            onClick: l
                                        }, {
                                            default: q(()=>[
                                                    ce(d(r))
                                                ]),
                                            _: 1
                                        }, 8, [
                                            "class"
                                        ]))
                                    ], 64)) : j("v-if", !0)
                                ], 2)
                            ], 2), [
                                [
                                    Xr,
                                    a.value
                                ]
                            ])
                        ]),
                    _: 3
                }, 8, [
                    "name"
                ]));
        }
    });
    var Rh = oe(Ph, [
        [
            "__file",
            "alert.vue"
        ]
    ]);
    let $h;
    Oh = Te(Rh);
    $h = ()=>ve && /firefox/i.test(window.navigator.userAgent);
    let me;
    const Ih = {
        height: "0",
        visibility: "hidden",
        overflow: $h() ? "" : "hidden",
        position: "absolute",
        "z-index": "-1000",
        top: "0",
        right: "0"
    }, Ah = [
        "letter-spacing",
        "line-height",
        "padding-top",
        "padding-bottom",
        "font-family",
        "font-weight",
        "font-size",
        "text-rendering",
        "text-transform",
        "width",
        "text-indent",
        "padding-left",
        "padding-right",
        "border-width",
        "box-sizing"
    ];
    function Mh(e) {
        const t = window.getComputedStyle(e), n = t.getPropertyValue("box-sizing"), r = Number.parseFloat(t.getPropertyValue("padding-bottom")) + Number.parseFloat(t.getPropertyValue("padding-top")), o = Number.parseFloat(t.getPropertyValue("border-bottom-width")) + Number.parseFloat(t.getPropertyValue("border-top-width"));
        return {
            contextStyle: Ah.map((a)=>[
                    a,
                    t.getPropertyValue(a)
                ]),
            paddingSize: r,
            borderSize: o,
            boxSizing: n
        };
    }
    function As(e, t = 1, n) {
        var r;
        me || (me = document.createElement("textarea"), document.body.appendChild(me));
        const { paddingSize: o, borderSize: s, boxSizing: a, contextStyle: i } = Mh(e);
        i.forEach(([f, p])=>me?.style.setProperty(f, p)), Object.entries(Ih).forEach(([f, p])=>me?.style.setProperty(f, p, "important")), me.value = e.value || e.placeholder || "";
        let c = me.scrollHeight;
        const l = {};
        a === "border-box" ? c = c + s : a === "content-box" && (c = c - o), me.value = "";
        const u = me.scrollHeight - o;
        if (le(t)) {
            let f = u * t;
            a === "border-box" && (f = f + o + s), c = Math.max(f, c), l.minHeight = `${f}px`;
        }
        if (le(n)) {
            let f = u * n;
            a === "border-box" && (f = f + o + s), c = Math.min(f, c);
        }
        return l.height = `${c}px`, (r = me.parentNode) == null || r.removeChild(me), me = void 0, l;
    }
    let Lh, jh, Bh, zh, Fh, Nh, Ms, Uh, hi, _o;
    Dh = (e)=>e;
    Lh = Z({
        ariaLabel: String,
        ariaOrientation: {
            type: String,
            values: [
                "horizontal",
                "vertical",
                "undefined"
            ]
        },
        ariaControls: String
    });
    mr = (e)=>ep(Lh, e);
    jh = Z({
        id: {
            type: String,
            default: void 0
        },
        size: si,
        disabled: Boolean,
        modelValue: {
            type: L([
                String,
                Number,
                Object
            ]),
            default: ""
        },
        maxlength: {
            type: [
                String,
                Number
            ]
        },
        minlength: {
            type: [
                String,
                Number
            ]
        },
        type: {
            type: String,
            default: "text"
        },
        resize: {
            type: String,
            values: [
                "none",
                "both",
                "horizontal",
                "vertical"
            ]
        },
        autosize: {
            type: L([
                Boolean,
                Object
            ]),
            default: !1
        },
        autocomplete: {
            type: String,
            default: "off"
        },
        formatter: {
            type: Function
        },
        parser: {
            type: Function
        },
        placeholder: {
            type: String
        },
        form: {
            type: String
        },
        readonly: Boolean,
        clearable: Boolean,
        showPassword: Boolean,
        showWordLimit: Boolean,
        suffixIcon: {
            type: tr
        },
        prefixIcon: {
            type: tr
        },
        containerRole: {
            type: String,
            default: void 0
        },
        tabindex: {
            type: [
                String,
                Number
            ],
            default: 0
        },
        validateEvent: {
            type: Boolean,
            default: !0
        },
        inputStyle: {
            type: L([
                Object,
                Array,
                String
            ]),
            default: ()=>Dh({})
        },
        autofocus: Boolean,
        rows: {
            type: Number,
            default: 2
        },
        ...mr([
            "ariaLabel"
        ])
    });
    Bh = {
        [Lr]: (e)=>nt(e),
        input: (e)=>nt(e),
        change: (e)=>nt(e),
        focus: (e)=>e instanceof FocusEvent,
        blur: (e)=>e instanceof FocusEvent,
        clear: ()=>!0,
        mouseleave: (e)=>e instanceof MouseEvent,
        mouseenter: (e)=>e instanceof MouseEvent,
        keydown: (e)=>e instanceof Event,
        compositionstart: (e)=>e instanceof CompositionEvent,
        compositionupdate: (e)=>e instanceof CompositionEvent,
        compositionend: (e)=>e instanceof CompositionEvent
    };
    zh = [
        "class",
        "style"
    ];
    Fh = /^on[A-Z]/;
    Nh = (e = {})=>{
        const { excludeListeners: t = !1, excludeKeys: n } = e, r = b(()=>(n?.value || []).concat(zh)), o = Ce();
        return o ? b(()=>{
            var s;
            return Zn(Object.entries((s = o.proxy) == null ? void 0 : s.$attrs).filter(([a])=>!r.value.includes(a) && !(t && Fh.test(a))));
        }) : b(()=>({}));
    };
    bo = Symbol("formContextKey");
    nr = Symbol("formItemContextKey");
    Ms = {
        prefix: Math.floor(Math.random() * 1e4),
        current: 0
    };
    Uh = Symbol("elIdInjection");
    hi = ()=>Ce() ? Q(Uh, Ms) : Ms;
    mi = (e)=>{
        const t = hi(), n = Qr();
        return Za(()=>d(e) || `${n.value}-id-${t.prefix}-${t.current++}`);
    };
    gi = ()=>{
        const e = Q(bo, void 0), t = Q(nr, void 0);
        return {
            form: e,
            formItem: t
        };
    };
    Hh = (e, { formItemContext: t, disableIdGeneration: n, disableIdManagement: r })=>{
        n || (n = P(!1)), r || (r = P(!1));
        const o = P();
        let s;
        const a = b(()=>{
            var i;
            return !!(!(e.label || e.ariaLabel) && t && t.inputIds && ((i = t.inputIds) == null ? void 0 : i.length) <= 1);
        });
        return Se(()=>{
            s = F([
                Pe(e, "id"),
                n
            ], ([i, c])=>{
                const l = i ?? (c ? void 0 : mi().value);
                l !== o.value && (t?.removeInputId && (o.value && t.removeInputId(o.value), !r?.value && !c && l && t.addInputId(l)), o.value = l);
            }, {
                immediate: !0
            });
        }), jc(()=>{
            s && s(), t?.removeInputId && o.value && t.removeInputId(o.value);
        }), {
            isLabeledByFormItem: a,
            inputId: o
        };
    };
    _o = (e)=>{
        const t = Ce();
        return b(()=>{
            var n, r;
            return (r = (n = t?.proxy) == null ? void 0 : n.$props) == null ? void 0 : r[e];
        });
    };
    yo = (e, t = {})=>{
        const n = P(void 0), r = t.prop ? n : _o("size"), o = t.global ? n : Fp(), s = t.form ? {
            size: void 0
        } : Q(bo, void 0), a = t.formItem ? {
            size: void 0
        } : Q(nr, void 0);
        return b(()=>r.value || d(e) || a?.size || s?.size || o.value || "");
    };
    Co = (e)=>{
        const t = _o("disabled"), n = Q(bo, void 0);
        return b(()=>t.value || d(e) || n?.disabled || !1);
    };
    Vh = function(e, { beforeFocus: t, afterFocus: n, beforeBlur: r, afterBlur: o } = {}) {
        const s = Ce(), { emit: a } = s, i = Lt(), c = _o("disabled"), l = P(!1), u = (m)=>{
            Be(t) && t(m) || l.value || (l.value = !0, a("focus", m), n?.());
        }, f = (m)=>{
            var h;
            Be(r) && r(m) || m.relatedTarget && ((h = i.value) != null && h.contains(m.relatedTarget)) || (l.value = !1, a("blur", m), o?.());
        }, p = ()=>{
            var m, h;
            (m = i.value) != null && m.contains(document.activeElement) && i.value !== document.activeElement || c.value || (h = e.value) == null || h.focus();
        };
        return F([
            i,
            c
        ], ([m, h])=>{
            m && (h ? m.removeAttribute("tabindex") : m.setAttribute("tabindex", "-1"));
        }), rt(i, "focus", u, !0), rt(i, "blur", f, !0), rt(i, "click", p, !0), {
            isFocused: l,
            wrapperRef: i,
            handleFocus: u,
            handleBlur: f
        };
    };
    const Wh = (e)=>/([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(e);
    Kh = function({ afterComposition: e, emit: t }) {
        const n = P(!1), r = (i)=>{
            t?.("compositionstart", i), n.value = !0;
        }, o = (i)=>{
            var c;
            t?.("compositionupdate", i);
            const l = (c = i.target) == null ? void 0 : c.value, u = l[l.length - 1] || "";
            n.value = !Wh(u);
        }, s = (i)=>{
            t?.("compositionend", i), n.value && (n.value = !1, Ae(()=>e(i)));
        };
        return {
            isComposing: n,
            handleComposition: (i)=>{
                i.type === "compositionend" ? s(i) : o(i);
            },
            handleCompositionStart: r,
            handleCompositionUpdate: o,
            handleCompositionEnd: s
        };
    };
    function Gh(e) {
        let t;
        function n() {
            if (e.value == null) return;
            const { selectionStart: o, selectionEnd: s, value: a } = e.value;
            if (o == null || s == null) return;
            const i = a.slice(0, Math.max(0, o)), c = a.slice(Math.max(0, s));
            t = {
                selectionStart: o,
                selectionEnd: s,
                value: a,
                beforeTxt: i,
                afterTxt: c
            };
        }
        function r() {
            if (e.value == null || t == null) return;
            const { value: o } = e.value, { beforeTxt: s, afterTxt: a, selectionStart: i } = t;
            if (s == null || a == null || i == null) return;
            let c = o.length;
            if (o.endsWith(a)) c = o.length - a.length;
            else if (o.startsWith(s)) c = s.length;
            else {
                const l = s[i - 1], u = o.indexOf(l, i - 1);
                u !== -1 && (c = u + 1);
            }
            e.value.setSelectionRange(c, c);
        }
        return [
            n,
            r
        ];
    }
    const Jh = "ElInput", Yh = R({
        name: Jh,
        inheritAttrs: !1
    }), qh = R({
        ...Yh,
        props: jh,
        emits: Bh,
        setup (e, { expose: t, emit: n }) {
            const r = e, o = Bc(), s = Nh(), a = Zr(), i = b(()=>[
                    r.type === "textarea" ? g.b() : h.b(),
                    h.m(p.value),
                    h.is("disabled", m.value),
                    h.is("exceed", mt.value),
                    {
                        [h.b("group")]: a.prepend || a.append,
                        [h.m("prefix")]: a.prefix || r.prefixIcon,
                        [h.m("suffix")]: a.suffix || r.suffixIcon || r.clearable || r.showPassword,
                        [h.bm("suffix", "password-clear")]: A.value && ee.value,
                        [h.b("hidden")]: r.type === "hidden"
                    },
                    o.class
                ]), c = b(()=>[
                    h.e("wrapper"),
                    h.is("focus", M.value)
                ]), { form: l, formItem: u } = gi(), { inputId: f } = Hh(r, {
                formItemContext: u
            }), p = yo(), m = Co(), h = te("input"), g = te("textarea"), _ = Lt(), y = Lt(), k = P(!1), v = P(!1), T = P(), S = Lt(r.inputStyle), w = b(()=>_.value || y.value), { wrapperRef: E, isFocused: M, handleFocus: W, handleBlur: U } = Vh(w, {
                beforeFocus () {
                    return m.value;
                },
                afterBlur () {
                    var x;
                    r.validateEvent && ((x = u?.validate) == null || x.call(u, "blur").catch((V)=>void 0));
                }
            }), G = b(()=>{
                var x;
                return (x = l?.statusIcon) != null ? x : !1;
            }), H = b(()=>u?.validateState || ""), J = b(()=>H.value && Th[H.value]), xe = b(()=>v.value ? _h : lh), ae = b(()=>[
                    o.style
                ]), ne = b(()=>[
                    r.inputStyle,
                    S.value,
                    {
                        resize: r.resize
                    }
                ]), K = b(()=>Tn(r.modelValue) ? "" : String(r.modelValue)), A = b(()=>r.clearable && !m.value && !r.readonly && !!K.value && (M.value || k.value)), ee = b(()=>r.showPassword && !m.value && !!K.value && (!!K.value || M.value)), he = b(()=>r.showWordLimit && !!r.maxlength && (r.type === "text" || r.type === "textarea") && !m.value && !r.readonly && !r.showPassword), Ge = b(()=>K.value.length), mt = b(()=>!!he.value && Ge.value > Number(r.maxlength)), Rt = b(()=>!!a.suffix || !!r.suffixIcon || A.value || r.showPassword || he.value || !!H.value && G.value), [Le, ke] = Gh(_);
            Qa(y, (x)=>{
                if (lt(), !he.value || r.resize !== "both") return;
                const V = x[0], { width: Ye } = V.contentRect;
                T.value = {
                    right: `calc(100% - ${Ye + 15 + 6}px)`
                };
            });
            const je = ()=>{
                const { type: x, autosize: V } = r;
                if (!(!ve || x !== "textarea" || !y.value)) if (V) {
                    const Ye = dt(V) ? V.minRows : void 0, en = dt(V) ? V.maxRows : void 0, tn = As(y.value, Ye, en);
                    S.value = {
                        overflowY: "hidden",
                        ...tn
                    }, Ae(()=>{
                        y.value.offsetHeight, S.value = tn;
                    });
                } else S.value = {
                    minHeight: As(y.value).minHeight
                };
            }, lt = ((x)=>{
                let V = !1;
                return ()=>{
                    var Ye;
                    if (V || !r.autosize) return;
                    ((Ye = y.value) == null ? void 0 : Ye.offsetParent) === null || (x(), V = !0);
                };
            })(je), gt = ()=>{
                const x = w.value, V = r.formatter ? r.formatter(K.value) : K.value;
                !x || x.value === V || (x.value = V);
            }, Zt = async (x)=>{
                Le();
                let { value: V } = x.target;
                if (r.formatter && r.parser && (V = r.parser(V)), !En.value) {
                    if (V === K.value) {
                        gt();
                        return;
                    }
                    n(Lr, V), n(Is, V), await Ae(), gt(), ke();
                }
            }, $t = (x)=>{
                let { value: V } = x.target;
                r.formatter && r.parser && (V = r.parser(V)), n($s, V);
            }, { isComposing: En, handleCompositionStart: Xt, handleCompositionUpdate: Pn, handleCompositionEnd: Rn } = Kh({
                emit: n,
                afterComposition: Zt
            }), On = ()=>{
                Le(), v.value = !v.value, setTimeout(ke);
            }, $n = ()=>{
                var x;
                return (x = w.value) == null ? void 0 : x.focus();
            }, br = ()=>{
                var x;
                return (x = w.value) == null ? void 0 : x.blur();
            }, _r = (x)=>{
                k.value = !1, n("mouseleave", x);
            }, Je = (x)=>{
                k.value = !0, n("mouseenter", x);
            }, vt = (x)=>{
                n("keydown", x);
            }, In = ()=>{
                var x;
                (x = w.value) == null || x.select();
            }, Qt = ()=>{
                n(Lr, ""), n($s, ""), n("clear"), n(Is, "");
            };
            return F(()=>r.modelValue, ()=>{
                var x;
                Ae(()=>je()), r.validateEvent && ((x = u?.validate) == null || x.call(u, "change").catch((V)=>void 0));
            }), F(K, ()=>gt()), F(()=>r.type, async ()=>{
                await Ae(), gt(), je();
            }), Se(()=>{
                !r.formatter && r.parser, gt(), Ae(je);
            }), t({
                input: _,
                textarea: y,
                ref: w,
                textareaStyle: ne,
                autosize: Pe(r, "autosize"),
                isComposing: En,
                focus: $n,
                blur: br,
                select: In,
                clear: Qt,
                resizeTextarea: je
            }), (x, V)=>(C(), $("div", {
                    class: I([
                        d(i),
                        {
                            [d(h).bm("group", "append")]: x.$slots.append,
                            [d(h).bm("group", "prepend")]: x.$slots.prepend
                        }
                    ]),
                    style: de(d(ae)),
                    onMouseenter: Je,
                    onMouseleave: _r
                }, [
                    j(" input "),
                    x.type !== "textarea" ? (C(), $(Me, {
                        key: 0
                    }, [
                        j(" prepend slot "),
                        x.$slots.prepend ? (C(), $("div", {
                            key: 0,
                            class: I(d(h).be("group", "prepend"))
                        }, [
                            z(x.$slots, "prepend")
                        ], 2)) : j("v-if", !0),
                        D("div", {
                            ref_key: "wrapperRef",
                            ref: E,
                            class: I(d(c))
                        }, [
                            j(" prefix slot "),
                            x.$slots.prefix || x.prefixIcon ? (C(), $("span", {
                                key: 0,
                                class: I(d(h).e("prefix"))
                            }, [
                                D("span", {
                                    class: I(d(h).e("prefix-inner"))
                                }, [
                                    z(x.$slots, "prefix"),
                                    x.prefixIcon ? (C(), B(d(we), {
                                        key: 0,
                                        class: I(d(h).e("icon"))
                                    }, {
                                        default: q(()=>[
                                                (C(), B(ze(x.prefixIcon)))
                                            ]),
                                        _: 1
                                    }, 8, [
                                        "class"
                                    ])) : j("v-if", !0)
                                ], 2)
                            ], 2)) : j("v-if", !0),
                            D("input", ot({
                                id: d(f),
                                ref_key: "input",
                                ref: _,
                                class: d(h).e("inner")
                            }, d(s), {
                                minlength: x.minlength,
                                maxlength: x.maxlength,
                                type: x.showPassword ? v.value ? "text" : "password" : x.type,
                                disabled: d(m),
                                readonly: x.readonly,
                                autocomplete: x.autocomplete,
                                tabindex: x.tabindex,
                                "aria-label": x.ariaLabel,
                                placeholder: x.placeholder,
                                style: x.inputStyle,
                                form: x.form,
                                autofocus: x.autofocus,
                                role: x.containerRole,
                                onCompositionstart: d(Xt),
                                onCompositionupdate: d(Pn),
                                onCompositionend: d(Rn),
                                onInput: Zt,
                                onChange: $t,
                                onKeydown: vt
                            }), null, 16, [
                                "id",
                                "minlength",
                                "maxlength",
                                "type",
                                "disabled",
                                "readonly",
                                "autocomplete",
                                "tabindex",
                                "aria-label",
                                "placeholder",
                                "form",
                                "autofocus",
                                "role",
                                "onCompositionstart",
                                "onCompositionupdate",
                                "onCompositionend"
                            ]),
                            j(" suffix slot "),
                            d(Rt) ? (C(), $("span", {
                                key: 1,
                                class: I(d(h).e("suffix"))
                            }, [
                                D("span", {
                                    class: I(d(h).e("suffix-inner"))
                                }, [
                                    !d(A) || !d(ee) || !d(he) ? (C(), $(Me, {
                                        key: 0
                                    }, [
                                        z(x.$slots, "suffix"),
                                        x.suffixIcon ? (C(), B(d(we), {
                                            key: 0,
                                            class: I(d(h).e("icon"))
                                        }, {
                                            default: q(()=>[
                                                    (C(), B(ze(x.suffixIcon)))
                                                ]),
                                            _: 1
                                        }, 8, [
                                            "class"
                                        ])) : j("v-if", !0)
                                    ], 64)) : j("v-if", !0),
                                    d(A) ? (C(), B(d(we), {
                                        key: 1,
                                        class: I([
                                            d(h).e("icon"),
                                            d(h).e("clear")
                                        ]),
                                        onMousedown: Yn(d(fn), [
                                            "prevent"
                                        ]),
                                        onClick: Qt
                                    }, {
                                        default: q(()=>[
                                                ce(d(vo))
                                            ]),
                                        _: 1
                                    }, 8, [
                                        "class",
                                        "onMousedown"
                                    ])) : j("v-if", !0),
                                    d(ee) ? (C(), B(d(we), {
                                        key: 2,
                                        class: I([
                                            d(h).e("icon"),
                                            d(h).e("password")
                                        ]),
                                        onClick: On
                                    }, {
                                        default: q(()=>[
                                                (C(), B(ze(d(xe))))
                                            ]),
                                        _: 1
                                    }, 8, [
                                        "class"
                                    ])) : j("v-if", !0),
                                    d(he) ? (C(), $("span", {
                                        key: 3,
                                        class: I(d(h).e("count"))
                                    }, [
                                        D("span", {
                                            class: I(d(h).e("count-inner"))
                                        }, Ee(d(Ge)) + " / " + Ee(x.maxlength), 3)
                                    ], 2)) : j("v-if", !0),
                                    d(H) && d(J) && d(G) ? (C(), B(d(we), {
                                        key: 4,
                                        class: I([
                                            d(h).e("icon"),
                                            d(h).e("validateIcon"),
                                            d(h).is("loading", d(H) === "validating")
                                        ])
                                    }, {
                                        default: q(()=>[
                                                (C(), B(ze(d(J))))
                                            ]),
                                        _: 1
                                    }, 8, [
                                        "class"
                                    ])) : j("v-if", !0)
                                ], 2)
                            ], 2)) : j("v-if", !0)
                        ], 2),
                        j(" append slot "),
                        x.$slots.append ? (C(), $("div", {
                            key: 1,
                            class: I(d(h).be("group", "append"))
                        }, [
                            z(x.$slots, "append")
                        ], 2)) : j("v-if", !0)
                    ], 64)) : (C(), $(Me, {
                        key: 1
                    }, [
                        j(" textarea "),
                        D("textarea", ot({
                            id: d(f),
                            ref_key: "textarea",
                            ref: y,
                            class: [
                                d(g).e("inner"),
                                d(h).is("focus", d(M))
                            ]
                        }, d(s), {
                            minlength: x.minlength,
                            maxlength: x.maxlength,
                            tabindex: x.tabindex,
                            disabled: d(m),
                            readonly: x.readonly,
                            autocomplete: x.autocomplete,
                            style: d(ne),
                            "aria-label": x.ariaLabel,
                            placeholder: x.placeholder,
                            form: x.form,
                            autofocus: x.autofocus,
                            rows: x.rows,
                            role: x.containerRole,
                            onCompositionstart: d(Xt),
                            onCompositionupdate: d(Pn),
                            onCompositionend: d(Rn),
                            onInput: Zt,
                            onFocus: d(W),
                            onBlur: d(U),
                            onChange: $t,
                            onKeydown: vt
                        }), null, 16, [
                            "id",
                            "minlength",
                            "maxlength",
                            "tabindex",
                            "disabled",
                            "readonly",
                            "autocomplete",
                            "aria-label",
                            "placeholder",
                            "form",
                            "autofocus",
                            "rows",
                            "role",
                            "onCompositionstart",
                            "onCompositionupdate",
                            "onCompositionend",
                            "onFocus",
                            "onBlur"
                        ]),
                        d(he) ? (C(), $("span", {
                            key: 0,
                            style: de(T.value),
                            class: I(d(h).e("count"))
                        }, Ee(d(Ge)) + " / " + Ee(x.maxlength), 7)) : j("v-if", !0)
                    ], 64))
                ], 38));
        }
    });
    var Zh = oe(qh, [
        [
            "__file",
            "input.vue"
        ]
    ]);
    let It, Xh, Qh, So, em, tm, nm;
    K_ = Te(Zh);
    It = 4;
    Xh = {
        vertical: {
            offset: "offsetHeight",
            scroll: "scrollTop",
            scrollSize: "scrollHeight",
            size: "height",
            key: "vertical",
            axis: "Y",
            client: "clientY",
            direction: "top"
        },
        horizontal: {
            offset: "offsetWidth",
            scroll: "scrollLeft",
            scrollSize: "scrollWidth",
            size: "width",
            key: "horizontal",
            axis: "X",
            client: "clientX",
            direction: "left"
        }
    };
    Qh = ({ move: e, size: t, bar: n })=>({
            [n.size]: t,
            transform: `translate${n.axis}(${e}%)`
        });
    So = Symbol("scrollbarContextKey");
    em = Z({
        vertical: Boolean,
        size: String,
        move: Number,
        ratio: {
            type: Number,
            required: !0
        },
        always: Boolean
    });
    tm = "Thumb";
    nm = R({
        __name: "thumb",
        props: em,
        setup (e) {
            const t = e, n = Q(So), r = te("scrollbar");
            n || Ap(tm, "can not inject scrollbar context");
            const o = P(), s = P(), a = P({}), i = P(!1);
            let c = !1, l = !1, u = ve ? document.onselectstart : null;
            const f = b(()=>Xh[t.vertical ? "vertical" : "horizontal"]), p = b(()=>Qh({
                    size: t.size,
                    move: t.move,
                    bar: f.value
                })), m = b(()=>o.value[f.value.offset] ** 2 / n.wrapElement[f.value.scrollSize] / t.ratio / s.value[f.value.offset]), h = (w)=>{
                var E;
                if (w.stopPropagation(), w.ctrlKey || [
                    1,
                    2
                ].includes(w.button)) return;
                (E = window.getSelection()) == null || E.removeAllRanges(), _(w);
                const M = w.currentTarget;
                M && (a.value[f.value.axis] = M[f.value.offset] - (w[f.value.client] - M.getBoundingClientRect()[f.value.direction]));
            }, g = (w)=>{
                if (!s.value || !o.value || !n.wrapElement) return;
                const E = Math.abs(w.target.getBoundingClientRect()[f.value.direction] - w[f.value.client]), M = s.value[f.value.offset] / 2, W = (E - M) * 100 * m.value / o.value[f.value.offset];
                n.wrapElement[f.value.scroll] = W * n.wrapElement[f.value.scrollSize] / 100;
            }, _ = (w)=>{
                w.stopImmediatePropagation(), c = !0, document.addEventListener("mousemove", y), document.addEventListener("mouseup", k), u = document.onselectstart, document.onselectstart = ()=>!1;
            }, y = (w)=>{
                if (!o.value || !s.value || c === !1) return;
                const E = a.value[f.value.axis];
                if (!E) return;
                const M = (o.value.getBoundingClientRect()[f.value.direction] - w[f.value.client]) * -1, W = s.value[f.value.offset] - E, U = (M - W) * 100 * m.value / o.value[f.value.offset];
                n.wrapElement[f.value.scroll] = U * n.wrapElement[f.value.scrollSize] / 100;
            }, k = ()=>{
                c = !1, a.value[f.value.axis] = 0, document.removeEventListener("mousemove", y), document.removeEventListener("mouseup", k), S(), l && (i.value = !1);
            }, v = ()=>{
                l = !1, i.value = !!t.size;
            }, T = ()=>{
                l = !0, i.value = c;
            };
            at(()=>{
                S(), document.removeEventListener("mouseup", k);
            });
            const S = ()=>{
                document.onselectstart !== u && (document.onselectstart = u);
            };
            return rt(Pe(n, "scrollbarElement"), "mousemove", v), rt(Pe(n, "scrollbarElement"), "mouseleave", T), (w, E)=>(C(), B(cr, {
                    name: d(r).b("fade"),
                    persisted: ""
                }, {
                    default: q(()=>[
                            ir(D("div", {
                                ref_key: "instance",
                                ref: o,
                                class: I([
                                    d(r).e("bar"),
                                    d(r).is(d(f).key)
                                ]),
                                onMousedown: g,
                                onClick: Yn(()=>{}, [
                                    "stop"
                                ])
                            }, [
                                D("div", {
                                    ref_key: "thumb",
                                    ref: s,
                                    class: I(d(r).e("thumb")),
                                    style: de(d(p)),
                                    onMousedown: h
                                }, null, 38)
                            ], 42, [
                                "onClick"
                            ]), [
                                [
                                    Xr,
                                    w.always || i.value
                                ]
                            ])
                        ]),
                    _: 1
                }, 8, [
                    "name"
                ]));
        }
    });
    var Ds = oe(nm, [
        [
            "__file",
            "thumb.vue"
        ]
    ]);
    const rm = Z({
        always: {
            type: Boolean,
            default: !0
        },
        minSize: {
            type: Number,
            required: !0
        }
    }), om = R({
        __name: "bar",
        props: rm,
        setup (e, { expose: t }) {
            const n = e, r = Q(So), o = P(0), s = P(0), a = P(""), i = P(""), c = P(1), l = P(1);
            return t({
                handleScroll: (p)=>{
                    if (p) {
                        const m = p.offsetHeight - It, h = p.offsetWidth - It;
                        s.value = p.scrollTop * 100 / m * c.value, o.value = p.scrollLeft * 100 / h * l.value;
                    }
                },
                update: ()=>{
                    const p = r?.wrapElement;
                    if (!p) return;
                    const m = p.offsetHeight - It, h = p.offsetWidth - It, g = m ** 2 / p.scrollHeight, _ = h ** 2 / p.scrollWidth, y = Math.max(g, n.minSize), k = Math.max(_, n.minSize);
                    c.value = g / (m - g) / (y / (m - y)), l.value = _ / (h - _) / (k / (h - k)), i.value = y + It < m ? `${y}px` : "", a.value = k + It < h ? `${k}px` : "";
                }
            }), (p, m)=>(C(), $(Me, null, [
                    ce(Ds, {
                        move: o.value,
                        ratio: l.value,
                        size: a.value,
                        always: p.always
                    }, null, 8, [
                        "move",
                        "ratio",
                        "size",
                        "always"
                    ]),
                    ce(Ds, {
                        move: s.value,
                        ratio: c.value,
                        size: i.value,
                        vertical: "",
                        always: p.always
                    }, null, 8, [
                        "move",
                        "ratio",
                        "size",
                        "always"
                    ])
                ], 64));
        }
    });
    var sm = oe(om, [
        [
            "__file",
            "bar.vue"
        ]
    ]);
    let am, cm, lm, um;
    am = Z({
        height: {
            type: [
                String,
                Number
            ],
            default: ""
        },
        maxHeight: {
            type: [
                String,
                Number
            ],
            default: ""
        },
        native: {
            type: Boolean,
            default: !1
        },
        wrapStyle: {
            type: L([
                String,
                Object,
                Array
            ]),
            default: ""
        },
        wrapClass: {
            type: [
                String,
                Array
            ],
            default: ""
        },
        viewClass: {
            type: [
                String,
                Array
            ],
            default: ""
        },
        viewStyle: {
            type: [
                String,
                Array,
                Object
            ],
            default: ""
        },
        noresize: Boolean,
        tag: {
            type: String,
            default: "div"
        },
        always: Boolean,
        minSize: {
            type: Number,
            default: 20
        },
        tabindex: {
            type: [
                String,
                Number
            ],
            default: void 0
        },
        id: String,
        role: String,
        ...mr([
            "ariaLabel",
            "ariaOrientation"
        ])
    });
    im = {
        scroll: ({ scrollTop: e, scrollLeft: t })=>[
                e,
                t
            ].every(le)
    };
    cm = "ElScrollbar";
    lm = R({
        name: cm
    });
    um = R({
        ...lm,
        props: am,
        emits: im,
        setup (e, { expose: t, emit: n }) {
            const r = e, o = te("scrollbar");
            let s, a, i = 0, c = 0;
            const l = P(), u = P(), f = P(), p = P(), m = b(()=>{
                const S = {};
                return r.height && (S.height = jr(r.height)), r.maxHeight && (S.maxHeight = jr(r.maxHeight)), [
                    r.wrapStyle,
                    S
                ];
            }), h = b(()=>[
                    r.wrapClass,
                    o.e("wrap"),
                    {
                        [o.em("wrap", "hidden-default")]: !r.native
                    }
                ]), g = b(()=>[
                    o.e("view"),
                    r.viewClass
                ]), _ = ()=>{
                var S;
                u.value && ((S = p.value) == null || S.handleScroll(u.value), i = u.value.scrollTop, c = u.value.scrollLeft, n("scroll", {
                    scrollTop: u.value.scrollTop,
                    scrollLeft: u.value.scrollLeft
                }));
            };
            function y(S, w) {
                dt(S) ? u.value.scrollTo(S) : le(S) && le(w) && u.value.scrollTo(S, w);
            }
            const k = (S)=>{
                le(S) && (u.value.scrollTop = S);
            }, v = (S)=>{
                le(S) && (u.value.scrollLeft = S);
            }, T = ()=>{
                var S;
                (S = p.value) == null || S.update();
            };
            return F(()=>r.noresize, (S)=>{
                S ? (s?.(), a?.()) : ({ stop: s } = Qa(f, T), a = rt("resize", T));
            }, {
                immediate: !0
            }), F(()=>[
                    r.maxHeight,
                    r.height
                ], ()=>{
                r.native || Ae(()=>{
                    var S;
                    T(), u.value && ((S = p.value) == null || S.handleScroll(u.value));
                });
            }), He(So, ya({
                scrollbarElement: l,
                wrapElement: u
            })), zc(()=>{
                u.value && (u.value.scrollTop = i, u.value.scrollLeft = c);
            }), Se(()=>{
                r.native || Ae(()=>{
                    T();
                });
            }), Fc(()=>T()), t({
                wrapRef: u,
                update: T,
                scrollTo: y,
                setScrollTop: k,
                setScrollLeft: v,
                handleScroll: _
            }), (S, w)=>(C(), $("div", {
                    ref_key: "scrollbarRef",
                    ref: l,
                    class: I(d(o).b())
                }, [
                    D("div", {
                        ref_key: "wrapRef",
                        ref: u,
                        class: I(d(h)),
                        style: de(d(m)),
                        tabindex: S.tabindex,
                        onScroll: _
                    }, [
                        (C(), B(ze(S.tag), {
                            id: S.id,
                            ref_key: "resizeRef",
                            ref: f,
                            class: I(d(g)),
                            style: de(S.viewStyle),
                            role: S.role,
                            "aria-label": S.ariaLabel,
                            "aria-orientation": S.ariaOrientation
                        }, {
                            default: q(()=>[
                                    z(S.$slots, "default")
                                ]),
                            _: 3
                        }, 8, [
                            "id",
                            "class",
                            "style",
                            "role",
                            "aria-label",
                            "aria-orientation"
                        ]))
                    ], 46, [
                        "tabindex"
                    ]),
                    S.native ? j("v-if", !0) : (C(), B(sm, {
                        key: 0,
                        ref_key: "barRef",
                        ref: p,
                        always: S.always,
                        "min-size": S.minSize
                    }, null, 8, [
                        "always",
                        "min-size"
                    ]))
                ], 2));
        }
    });
    var fm = oe(um, [
        [
            "__file",
            "scrollbar.vue"
        ]
    ]);
    let To, vi, dm, bi, pm, hm;
    G_ = Te(fm);
    To = Symbol("popper");
    vi = Symbol("popperContent");
    dm = [
        "dialog",
        "grid",
        "group",
        "listbox",
        "menu",
        "navigation",
        "tooltip",
        "tree"
    ];
    bi = Z({
        role: {
            type: String,
            values: dm,
            default: "tooltip"
        }
    });
    pm = R({
        name: "ElPopper",
        inheritAttrs: !1
    });
    hm = R({
        ...pm,
        props: bi,
        setup (e, { expose: t }) {
            const n = e, r = P(), o = P(), s = P(), a = P(), i = b(()=>n.role), c = {
                triggerRef: r,
                popperInstanceRef: o,
                contentRef: s,
                referenceRef: a,
                role: i
            };
            return t(c), He(To, c), (l, u)=>z(l.$slots, "default");
        }
    });
    var mm = oe(hm, [
        [
            "__file",
            "popper.vue"
        ]
    ]);
    const _i = Z({
        arrowOffset: {
            type: Number,
            default: 5
        }
    }), gm = R({
        name: "ElPopperArrow",
        inheritAttrs: !1
    }), vm = R({
        ...gm,
        props: _i,
        setup (e, { expose: t }) {
            const n = e, r = te("popper"), { arrowOffset: o, arrowRef: s, arrowStyle: a } = Q(vi, void 0);
            return F(()=>n.arrowOffset, (i)=>{
                o.value = i;
            }), at(()=>{
                s.value = void 0;
            }), t({
                arrowRef: s
            }), (i, c)=>(C(), $("span", {
                    ref_key: "arrowRef",
                    ref: s,
                    class: I(d(r).e("arrow")),
                    style: de(d(a)),
                    "data-popper-arrow": ""
                }, null, 6));
        }
    });
    var bm = oe(vm, [
        [
            "__file",
            "arrow.vue"
        ]
    ]);
    const yi = Z({
        virtualRef: {
            type: L(Object)
        },
        virtualTriggering: Boolean,
        onMouseenter: {
            type: L(Function)
        },
        onMouseleave: {
            type: L(Function)
        },
        onClick: {
            type: L(Function)
        },
        onKeydown: {
            type: L(Function)
        },
        onFocus: {
            type: L(Function)
        },
        onBlur: {
            type: L(Function)
        },
        onContextmenu: {
            type: L(Function)
        },
        id: String,
        open: Boolean
    }), Ci = Symbol("elForwardRef"), _m = (e)=>{
        He(Ci, {
            setForwardRef: (n)=>{
                e.value = n;
            }
        });
    }, ym = (e)=>({
            mounted (t) {
                e(t);
            },
            updated (t) {
                e(t);
            },
            unmounted () {
                e(null);
            }
        }), Br = (e)=>{
        if (e.tabIndex > 0 || e.tabIndex === 0 && e.getAttribute("tabIndex") !== null) return !0;
        if (e.tabIndex < 0 || e.hasAttribute("disabled") || e.getAttribute("aria-disabled") === "true") return !1;
        switch(e.nodeName){
            case "A":
                return !!e.href && e.rel !== "ignore";
            case "INPUT":
                return !(e.type === "hidden" || e.type === "file");
            case "BUTTON":
            case "SELECT":
            case "TEXTAREA":
                return !0;
            default:
                return !1;
        }
    }, Cm = "ElOnlyChild", Sm = R({
        name: Cm,
        setup (e, { slots: t, attrs: n }) {
            var r;
            const o = Q(Ci), s = ym((r = o?.setForwardRef) != null ? r : fn);
            return ()=>{
                var a;
                const i = (a = t.default) == null ? void 0 : a.call(t, n);
                if (!i || i.length > 1) return null;
                const c = Si(i);
                return c ? ir(Nc(c, n), [
                    [
                        s
                    ]
                ]) : null;
            };
        }
    });
    function Si(e) {
        if (!e) return null;
        const t = e;
        for (const n of t){
            if (dt(n)) switch(n.type){
                case Sa:
                    continue;
                case Ca:
                case "svg":
                    return Ls(n);
                case Me:
                    return Si(n.children);
                default:
                    return n;
            }
            return Ls(n);
        }
        return null;
    }
    function Ls(e) {
        const t = te("only-child");
        return ce("span", {
            class: t.e("content")
        }, [
            e
        ]);
    }
    const Tm = R({
        name: "ElPopperTrigger",
        inheritAttrs: !1
    }), xm = R({
        ...Tm,
        props: yi,
        setup (e, { expose: t }) {
            const n = e, { role: r, triggerRef: o } = Q(To, void 0);
            _m(o);
            const s = b(()=>i.value ? n.id : void 0), a = b(()=>{
                if (r && r.value === "tooltip") return n.open && n.id ? n.id : void 0;
            }), i = b(()=>{
                if (r && r.value !== "tooltip") return r.value;
            }), c = b(()=>i.value ? `${n.open}` : void 0);
            let l;
            const u = [
                "onMouseenter",
                "onMouseleave",
                "onClick",
                "onKeydown",
                "onFocus",
                "onBlur",
                "onContextmenu"
            ];
            return Se(()=>{
                F(()=>n.virtualRef, (f)=>{
                    f && (o.value = tt(f));
                }, {
                    immediate: !0
                }), F(o, (f, p)=>{
                    l?.(), l = void 0, yt(f) && (u.forEach((m)=>{
                        var h;
                        const g = n[m];
                        g && (f.addEventListener(m.slice(2).toLowerCase(), g), (h = p?.removeEventListener) == null || h.call(p, m.slice(2).toLowerCase(), g));
                    }), Br(f) && (l = F([
                        s,
                        a,
                        i,
                        c
                    ], (m)=>{
                        [
                            "aria-controls",
                            "aria-describedby",
                            "aria-haspopup",
                            "aria-expanded"
                        ].forEach((h, g)=>{
                            Tn(m[g]) ? f.removeAttribute(h) : f.setAttribute(h, m[g]);
                        });
                    }, {
                        immediate: !0
                    }))), yt(p) && Br(p) && [
                        "aria-controls",
                        "aria-describedby",
                        "aria-haspopup",
                        "aria-expanded"
                    ].forEach((m)=>p.removeAttribute(m));
                }, {
                    immediate: !0
                });
            }), at(()=>{
                if (l?.(), l = void 0, o.value && yt(o.value)) {
                    const f = o.value;
                    u.forEach((p)=>{
                        const m = n[p];
                        m && f.removeEventListener(p.slice(2).toLowerCase(), m);
                    }), o.value = void 0;
                }
            }), t({
                triggerRef: o
            }), (f, p)=>f.virtualTriggering ? j("v-if", !0) : (C(), B(d(Sm), ot({
                    key: 0
                }, f.$attrs, {
                    "aria-controls": d(s),
                    "aria-describedby": d(a),
                    "aria-expanded": d(c),
                    "aria-haspopup": d(i)
                }), {
                    default: q(()=>[
                            z(f.$slots, "default")
                        ]),
                    _: 3
                }, 16, [
                    "aria-controls",
                    "aria-describedby",
                    "aria-expanded",
                    "aria-haspopup"
                ]));
        }
    });
    var km = oe(xm, [
        [
            "__file",
            "trigger.vue"
        ]
    ]);
    const Tr = "focus-trap.focus-after-trapped", xr = "focus-trap.focus-after-released", wm = "focus-trap.focusout-prevented", js = {
        cancelable: !0,
        bubbles: !1
    }, Em = {
        cancelable: !0,
        bubbles: !1
    }, Bs = "focusAfterTrapped", zs = "focusAfterReleased", Pm = Symbol("elFocusTrap"), xo = P(), gr = P(0), ko = P(0);
    let An = 0;
    const Ti = (e)=>{
        const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: (r)=>{
                const o = r.tagName === "INPUT" && r.type === "hidden";
                return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 || r === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
            }
        });
        for(; n.nextNode();)t.push(n.currentNode);
        return t;
    }, Fs = (e, t)=>{
        for (const n of e)if (!Rm(n, t)) return n;
    }, Rm = (e, t)=>{
        if (getComputedStyle(e).visibility === "hidden") return !0;
        for(; e;){
            if (t && e === t) return !1;
            if (getComputedStyle(e).display === "none") return !0;
            e = e.parentElement;
        }
        return !1;
    }, Om = (e)=>{
        const t = Ti(e), n = Fs(t, e), r = Fs(t.reverse(), e);
        return [
            n,
            r
        ];
    }, $m = (e)=>e instanceof HTMLInputElement && "select" in e, Xe = (e, t)=>{
        if (e && e.focus) {
            const n = document.activeElement;
            let r = !1;
            yt(e) && !Br(e) && !e.getAttribute("tabindex") && (e.setAttribute("tabindex", "-1"), r = !0), e.focus({
                preventScroll: !0
            }), ko.value = window.performance.now(), e !== n && $m(e) && t && e.select(), yt(e) && r && e.removeAttribute("tabindex");
        }
    };
    function Ns(e, t) {
        const n = [
            ...e
        ], r = e.indexOf(t);
        return r !== -1 && n.splice(r, 1), n;
    }
    let Im, Am, Us, Mm, Mn, Hs, Dm, Dn;
    Im = ()=>{
        let e = [];
        return {
            push: (r)=>{
                const o = e[0];
                o && r !== o && o.pause(), e = Ns(e, r), e.unshift(r);
            },
            remove: (r)=>{
                var o, s;
                e = Ns(e, r), (s = (o = e[0]) == null ? void 0 : o.resume) == null || s.call(o);
            }
        };
    };
    Am = (e, t = !1)=>{
        const n = document.activeElement;
        for (const r of e)if (Xe(r, t), document.activeElement !== n) return;
    };
    Us = Im();
    Mm = ()=>gr.value > ko.value;
    Mn = ()=>{
        xo.value = "pointer", gr.value = window.performance.now();
    };
    Hs = ()=>{
        xo.value = "keyboard", gr.value = window.performance.now();
    };
    Dm = ()=>(Se(()=>{
            An === 0 && (document.addEventListener("mousedown", Mn), document.addEventListener("touchstart", Mn), document.addEventListener("keydown", Hs)), An++;
        }), at(()=>{
            An--, An <= 0 && (document.removeEventListener("mousedown", Mn), document.removeEventListener("touchstart", Mn), document.removeEventListener("keydown", Hs));
        }), {
            focusReason: xo,
            lastUserFocusTimestamp: gr,
            lastAutomatedFocusTimestamp: ko
        });
    Dn = (e)=>new CustomEvent(wm, {
            ...Em,
            detail: e
        });
    cn = {
        tab: "Tab",
        enter: "Enter",
        space: "Space",
        esc: "Escape",
        delete: "Delete",
        numpadEnter: "NumpadEnter"
    };
    let Dt = [];
    const Vs = (e)=>{
        e.code === cn.esc && Dt.forEach((t)=>t(e));
    }, Lm = (e)=>{
        Se(()=>{
            Dt.length === 0 && document.addEventListener("keydown", Vs), ve && Dt.push(e);
        }), at(()=>{
            Dt = Dt.filter((t)=>t !== e), Dt.length === 0 && ve && document.removeEventListener("keydown", Vs);
        });
    }, jm = R({
        name: "ElFocusTrap",
        inheritAttrs: !1,
        props: {
            loop: Boolean,
            trapped: Boolean,
            focusTrapEl: Object,
            focusStartEl: {
                type: [
                    Object,
                    String
                ],
                default: "first"
            }
        },
        emits: [
            Bs,
            zs,
            "focusin",
            "focusout",
            "focusout-prevented",
            "release-requested"
        ],
        setup (e, { emit: t }) {
            const n = P();
            let r, o;
            const { focusReason: s } = Dm();
            Lm((h)=>{
                e.trapped && !a.paused && t("release-requested", h);
            });
            const a = {
                paused: !1,
                pause () {
                    this.paused = !0;
                },
                resume () {
                    this.paused = !1;
                }
            }, i = (h)=>{
                if (!e.loop && !e.trapped || a.paused) return;
                const { code: g, altKey: _, ctrlKey: y, metaKey: k, currentTarget: v, shiftKey: T } = h, { loop: S } = e, w = g === cn.tab && !_ && !y && !k, E = document.activeElement;
                if (w && E) {
                    const M = v, [W, U] = Om(M);
                    if (W && U) {
                        if (!T && E === U) {
                            const H = Dn({
                                focusReason: s.value
                            });
                            t("focusout-prevented", H), H.defaultPrevented || (h.preventDefault(), S && Xe(W, !0));
                        } else if (T && [
                            W,
                            M
                        ].includes(E)) {
                            const H = Dn({
                                focusReason: s.value
                            });
                            t("focusout-prevented", H), H.defaultPrevented || (h.preventDefault(), S && Xe(U, !0));
                        }
                    } else if (E === M) {
                        const H = Dn({
                            focusReason: s.value
                        });
                        t("focusout-prevented", H), H.defaultPrevented || h.preventDefault();
                    }
                }
            };
            He(Pm, {
                focusTrapRef: n,
                onKeydown: i
            }), F(()=>e.focusTrapEl, (h)=>{
                h && (n.value = h);
            }, {
                immediate: !0
            }), F([
                n
            ], ([h], [g])=>{
                h && (h.addEventListener("keydown", i), h.addEventListener("focusin", u), h.addEventListener("focusout", f)), g && (g.removeEventListener("keydown", i), g.removeEventListener("focusin", u), g.removeEventListener("focusout", f));
            });
            const c = (h)=>{
                t(Bs, h);
            }, l = (h)=>t(zs, h), u = (h)=>{
                const g = d(n);
                if (!g) return;
                const _ = h.target, y = h.relatedTarget, k = _ && g.contains(_);
                e.trapped || y && g.contains(y) || (r = y), k && t("focusin", h), !a.paused && e.trapped && (k ? o = _ : Xe(o, !0));
            }, f = (h)=>{
                const g = d(n);
                if (!(a.paused || !g)) if (e.trapped) {
                    const _ = h.relatedTarget;
                    !Tn(_) && !g.contains(_) && setTimeout(()=>{
                        if (!a.paused && e.trapped) {
                            const y = Dn({
                                focusReason: s.value
                            });
                            t("focusout-prevented", y), y.defaultPrevented || Xe(o, !0);
                        }
                    }, 0);
                } else {
                    const _ = h.target;
                    _ && g.contains(_) || t("focusout", h);
                }
            };
            async function p() {
                await Ae();
                const h = d(n);
                if (h) {
                    Us.push(a);
                    const g = h.contains(document.activeElement) ? r : document.activeElement;
                    if (r = g, !h.contains(g)) {
                        const y = new Event(Tr, js);
                        h.addEventListener(Tr, c), h.dispatchEvent(y), y.defaultPrevented || Ae(()=>{
                            let k = e.focusStartEl;
                            nt(k) || (Xe(k), document.activeElement !== k && (k = "first")), k === "first" && Am(Ti(h), !0), (document.activeElement === g || k === "container") && Xe(h);
                        });
                    }
                }
            }
            function m() {
                const h = d(n);
                if (h) {
                    h.removeEventListener(Tr, c);
                    const g = new CustomEvent(xr, {
                        ...js,
                        detail: {
                            focusReason: s.value
                        }
                    });
                    h.addEventListener(xr, l), h.dispatchEvent(g), !g.defaultPrevented && (s.value == "keyboard" || !Mm() || h.contains(document.activeElement)) && Xe(r ?? document.body), h.removeEventListener(xr, l), Us.remove(a);
                }
            }
            return Se(()=>{
                e.trapped && p(), F(()=>e.trapped, (h)=>{
                    h ? p() : m();
                });
            }), at(()=>{
                e.trapped && m(), n.value && (n.value.removeEventListener("keydown", i), n.value.removeEventListener("focusin", u), n.value.removeEventListener("focusout", f), n.value = void 0);
            }), {
                onKeydown: i
            };
        }
    });
    function Bm(e, t, n, r, o, s) {
        return z(e.$slots, "default", {
            handleKeydown: e.onKeydown
        });
    }
    let zm, be, Oe, $e, _e, wo, kn, Nt, gn, Fm, xi, rn, Nm, Ws, Um, Hm, Vm, Wm, Km, Gm, Jm, Ym, qm, Zm;
    zm = oe(jm, [
        [
            "render",
            Bm
        ],
        [
            "__file",
            "focus-trap.vue"
        ]
    ]);
    be = "top";
    Oe = "bottom";
    $e = "right";
    _e = "left";
    wo = "auto";
    kn = [
        be,
        Oe,
        $e,
        _e
    ];
    Nt = "start";
    gn = "end";
    Fm = "clippingParents";
    xi = "viewport";
    rn = "popper";
    Nm = "reference";
    Ws = kn.reduce(function(e, t) {
        return e.concat([
            t + "-" + Nt,
            t + "-" + gn
        ]);
    }, []);
    Eo = [].concat(kn, [
        wo
    ]).reduce(function(e, t) {
        return e.concat([
            t,
            t + "-" + Nt,
            t + "-" + gn
        ]);
    }, []);
    Um = "beforeRead";
    Hm = "read";
    Vm = "afterRead";
    Wm = "beforeMain";
    Km = "main";
    Gm = "afterMain";
    Jm = "beforeWrite";
    Ym = "write";
    qm = "afterWrite";
    Zm = [
        Um,
        Hm,
        Vm,
        Wm,
        Km,
        Gm,
        Jm,
        Ym,
        qm
    ];
    function We(e) {
        return e ? (e.nodeName || "").toLowerCase() : null;
    }
    function De(e) {
        if (e == null) return window;
        if (e.toString() !== "[object Window]") {
            var t = e.ownerDocument;
            return t && t.defaultView || window;
        }
        return e;
    }
    function Ut(e) {
        var t = De(e).Element;
        return e instanceof t || e instanceof Element;
    }
    function Re(e) {
        var t = De(e).HTMLElement;
        return e instanceof t || e instanceof HTMLElement;
    }
    function Po(e) {
        if (typeof ShadowRoot > "u") return !1;
        var t = De(e).ShadowRoot;
        return e instanceof t || e instanceof ShadowRoot;
    }
    function Xm(e) {
        var t = e.state;
        Object.keys(t.elements).forEach(function(n) {
            var r = t.styles[n] || {}, o = t.attributes[n] || {}, s = t.elements[n];
            !Re(s) || !We(s) || (Object.assign(s.style, r), Object.keys(o).forEach(function(a) {
                var i = o[a];
                i === !1 ? s.removeAttribute(a) : s.setAttribute(a, i === !0 ? "" : i);
            }));
        });
    }
    function Qm(e) {
        var t = e.state, n = {
            popper: {
                position: t.options.strategy,
                left: "0",
                top: "0",
                margin: "0"
            },
            arrow: {
                position: "absolute"
            },
            reference: {}
        };
        return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
            Object.keys(t.elements).forEach(function(r) {
                var o = t.elements[r], s = t.attributes[r] || {}, a = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]), i = a.reduce(function(c, l) {
                    return c[l] = "", c;
                }, {});
                !Re(o) || !We(o) || (Object.assign(o.style, i), Object.keys(s).forEach(function(c) {
                    o.removeAttribute(c);
                }));
            });
        };
    }
    var ki = {
        name: "applyStyles",
        enabled: !0,
        phase: "write",
        fn: Xm,
        effect: Qm,
        requires: [
            "computeStyles"
        ]
    };
    function Ne(e) {
        return e.split("-")[0];
    }
    var Ct = Math.max, rr = Math.min, Ht = Math.round;
    function Vt(e, t) {
        t === void 0 && (t = !1);
        var n = e.getBoundingClientRect(), r = 1, o = 1;
        if (Re(e) && t) {
            var s = e.offsetHeight, a = e.offsetWidth;
            a > 0 && (r = Ht(n.width) / a || 1), s > 0 && (o = Ht(n.height) / s || 1);
        }
        return {
            width: n.width / r,
            height: n.height / o,
            top: n.top / o,
            right: n.right / r,
            bottom: n.bottom / o,
            left: n.left / r,
            x: n.left / r,
            y: n.top / o
        };
    }
    function Ro(e) {
        var t = Vt(e), n = e.offsetWidth, r = e.offsetHeight;
        return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
            x: e.offsetLeft,
            y: e.offsetTop,
            width: n,
            height: r
        };
    }
    function wi(e, t) {
        var n = t.getRootNode && t.getRootNode();
        if (e.contains(t)) return !0;
        if (n && Po(n)) {
            var r = t;
            do {
                if (r && e.isSameNode(r)) return !0;
                r = r.parentNode || r.host;
            }while (r);
        }
        return !1;
    }
    function st(e) {
        return De(e).getComputedStyle(e);
    }
    function eg(e) {
        return [
            "table",
            "td",
            "th"
        ].indexOf(We(e)) >= 0;
    }
    function ht(e) {
        return ((Ut(e) ? e.ownerDocument : e.document) || window.document).documentElement;
    }
    function vr(e) {
        return We(e) === "html" ? e : e.assignedSlot || e.parentNode || (Po(e) ? e.host : null) || ht(e);
    }
    function Ks(e) {
        return !Re(e) || st(e).position === "fixed" ? null : e.offsetParent;
    }
    function tg(e) {
        var t = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1, n = navigator.userAgent.indexOf("Trident") !== -1;
        if (n && Re(e)) {
            var r = st(e);
            if (r.position === "fixed") return null;
        }
        var o = vr(e);
        for(Po(o) && (o = o.host); Re(o) && [
            "html",
            "body"
        ].indexOf(We(o)) < 0;){
            var s = st(o);
            if (s.transform !== "none" || s.perspective !== "none" || s.contain === "paint" || [
                "transform",
                "perspective"
            ].indexOf(s.willChange) !== -1 || t && s.willChange === "filter" || t && s.filter && s.filter !== "none") return o;
            o = o.parentNode;
        }
        return null;
    }
    function wn(e) {
        for(var t = De(e), n = Ks(e); n && eg(n) && st(n).position === "static";)n = Ks(n);
        return n && (We(n) === "html" || We(n) === "body" && st(n).position === "static") ? t : n || tg(e) || t;
    }
    function Oo(e) {
        return [
            "top",
            "bottom"
        ].indexOf(e) >= 0 ? "x" : "y";
    }
    function ln(e, t, n) {
        return Ct(e, rr(t, n));
    }
    function ng(e, t, n) {
        var r = ln(e, t, n);
        return r > n ? n : r;
    }
    function Ei() {
        return {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        };
    }
    function Pi(e) {
        return Object.assign({}, Ei(), e);
    }
    function Ri(e, t) {
        return t.reduce(function(n, r) {
            return n[r] = e, n;
        }, {});
    }
    var rg = function(e, t) {
        return e = typeof e == "function" ? e(Object.assign({}, t.rects, {
            placement: t.placement
        })) : e, Pi(typeof e != "number" ? e : Ri(e, kn));
    };
    function og(e) {
        var t, n = e.state, r = e.name, o = e.options, s = n.elements.arrow, a = n.modifiersData.popperOffsets, i = Ne(n.placement), c = Oo(i), l = [
            _e,
            $e
        ].indexOf(i) >= 0, u = l ? "height" : "width";
        if (!(!s || !a)) {
            var f = rg(o.padding, n), p = Ro(s), m = c === "y" ? be : _e, h = c === "y" ? Oe : $e, g = n.rects.reference[u] + n.rects.reference[c] - a[c] - n.rects.popper[u], _ = a[c] - n.rects.reference[c], y = wn(s), k = y ? c === "y" ? y.clientHeight || 0 : y.clientWidth || 0 : 0, v = g / 2 - _ / 2, T = f[m], S = k - p[u] - f[h], w = k / 2 - p[u] / 2 + v, E = ln(T, w, S), M = c;
            n.modifiersData[r] = (t = {}, t[M] = E, t.centerOffset = E - w, t);
        }
    }
    function sg(e) {
        var t = e.state, n = e.options, r = n.element, o = r === void 0 ? "[data-popper-arrow]" : r;
        o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || !wi(t.elements.popper, o) || (t.elements.arrow = o));
    }
    var ag = {
        name: "arrow",
        enabled: !0,
        phase: "main",
        fn: og,
        effect: sg,
        requires: [
            "popperOffsets"
        ],
        requiresIfExists: [
            "preventOverflow"
        ]
    };
    function Wt(e) {
        return e.split("-")[1];
    }
    var ig = {
        top: "auto",
        right: "auto",
        bottom: "auto",
        left: "auto"
    };
    function cg(e) {
        var t = e.x, n = e.y, r = window, o = r.devicePixelRatio || 1;
        return {
            x: Ht(t * o) / o || 0,
            y: Ht(n * o) / o || 0
        };
    }
    function Gs(e) {
        var t, n = e.popper, r = e.popperRect, o = e.placement, s = e.variation, a = e.offsets, i = e.position, c = e.gpuAcceleration, l = e.adaptive, u = e.roundOffsets, f = e.isFixed, p = a.x, m = p === void 0 ? 0 : p, h = a.y, g = h === void 0 ? 0 : h, _ = typeof u == "function" ? u({
            x: m,
            y: g
        }) : {
            x: m,
            y: g
        };
        m = _.x, g = _.y;
        var y = a.hasOwnProperty("x"), k = a.hasOwnProperty("y"), v = _e, T = be, S = window;
        if (l) {
            var w = wn(n), E = "clientHeight", M = "clientWidth";
            if (w === De(n) && (w = ht(n), st(w).position !== "static" && i === "absolute" && (E = "scrollHeight", M = "scrollWidth")), w = w, o === be || (o === _e || o === $e) && s === gn) {
                T = Oe;
                var W = f && w === S && S.visualViewport ? S.visualViewport.height : w[E];
                g -= W - r.height, g *= c ? 1 : -1;
            }
            if (o === _e || (o === be || o === Oe) && s === gn) {
                v = $e;
                var U = f && w === S && S.visualViewport ? S.visualViewport.width : w[M];
                m -= U - r.width, m *= c ? 1 : -1;
            }
        }
        var G = Object.assign({
            position: i
        }, l && ig), H = u === !0 ? cg({
            x: m,
            y: g
        }) : {
            x: m,
            y: g
        };
        if (m = H.x, g = H.y, c) {
            var J;
            return Object.assign({}, G, (J = {}, J[T] = k ? "0" : "", J[v] = y ? "0" : "", J.transform = (S.devicePixelRatio || 1) <= 1 ? "translate(" + m + "px, " + g + "px)" : "translate3d(" + m + "px, " + g + "px, 0)", J));
        }
        return Object.assign({}, G, (t = {}, t[T] = k ? g + "px" : "", t[v] = y ? m + "px" : "", t.transform = "", t));
    }
    function lg(e) {
        var t = e.state, n = e.options, r = n.gpuAcceleration, o = r === void 0 ? !0 : r, s = n.adaptive, a = s === void 0 ? !0 : s, i = n.roundOffsets, c = i === void 0 ? !0 : i, l = {
            placement: Ne(t.placement),
            variation: Wt(t.placement),
            popper: t.elements.popper,
            popperRect: t.rects.popper,
            gpuAcceleration: o,
            isFixed: t.options.strategy === "fixed"
        };
        t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Gs(Object.assign({}, l, {
            offsets: t.modifiersData.popperOffsets,
            position: t.options.strategy,
            adaptive: a,
            roundOffsets: c
        })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Gs(Object.assign({}, l, {
            offsets: t.modifiersData.arrow,
            position: "absolute",
            adaptive: !1,
            roundOffsets: c
        })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
            "data-popper-placement": t.placement
        });
    }
    var Oi = {
        name: "computeStyles",
        enabled: !0,
        phase: "beforeWrite",
        fn: lg,
        data: {}
    }, Ln = {
        passive: !0
    };
    function ug(e) {
        var t = e.state, n = e.instance, r = e.options, o = r.scroll, s = o === void 0 ? !0 : o, a = r.resize, i = a === void 0 ? !0 : a, c = De(t.elements.popper), l = [].concat(t.scrollParents.reference, t.scrollParents.popper);
        return s && l.forEach(function(u) {
            u.addEventListener("scroll", n.update, Ln);
        }), i && c.addEventListener("resize", n.update, Ln), function() {
            s && l.forEach(function(u) {
                u.removeEventListener("scroll", n.update, Ln);
            }), i && c.removeEventListener("resize", n.update, Ln);
        };
    }
    var $i = {
        name: "eventListeners",
        enabled: !0,
        phase: "write",
        fn: function() {},
        effect: ug,
        data: {}
    }, fg = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
    };
    function Nn(e) {
        return e.replace(/left|right|bottom|top/g, function(t) {
            return fg[t];
        });
    }
    var dg = {
        start: "end",
        end: "start"
    };
    function Js(e) {
        return e.replace(/start|end/g, function(t) {
            return dg[t];
        });
    }
    function $o(e) {
        var t = De(e), n = t.pageXOffset, r = t.pageYOffset;
        return {
            scrollLeft: n,
            scrollTop: r
        };
    }
    function Io(e) {
        return Vt(ht(e)).left + $o(e).scrollLeft;
    }
    function pg(e) {
        var t = De(e), n = ht(e), r = t.visualViewport, o = n.clientWidth, s = n.clientHeight, a = 0, i = 0;
        return r && (o = r.width, s = r.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (a = r.offsetLeft, i = r.offsetTop)), {
            width: o,
            height: s,
            x: a + Io(e),
            y: i
        };
    }
    function hg(e) {
        var t, n = ht(e), r = $o(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, s = Ct(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), a = Ct(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), i = -r.scrollLeft + Io(e), c = -r.scrollTop;
        return st(o || n).direction === "rtl" && (i += Ct(n.clientWidth, o ? o.clientWidth : 0) - s), {
            width: s,
            height: a,
            x: i,
            y: c
        };
    }
    function Ao(e) {
        var t = st(e), n = t.overflow, r = t.overflowX, o = t.overflowY;
        return /auto|scroll|overlay|hidden/.test(n + o + r);
    }
    function Ii(e) {
        return [
            "html",
            "body",
            "#document"
        ].indexOf(We(e)) >= 0 ? e.ownerDocument.body : Re(e) && Ao(e) ? e : Ii(vr(e));
    }
    function un(e, t) {
        var n;
        t === void 0 && (t = []);
        var r = Ii(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), s = De(r), a = o ? [
            s
        ].concat(s.visualViewport || [], Ao(r) ? r : []) : r, i = t.concat(a);
        return o ? i : i.concat(un(vr(a)));
    }
    function zr(e) {
        return Object.assign({}, e, {
            left: e.x,
            top: e.y,
            right: e.x + e.width,
            bottom: e.y + e.height
        });
    }
    function mg(e) {
        var t = Vt(e);
        return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t;
    }
    function Ys(e, t) {
        return t === xi ? zr(pg(e)) : Ut(t) ? mg(t) : zr(hg(ht(e)));
    }
    function gg(e) {
        var t = un(vr(e)), n = [
            "absolute",
            "fixed"
        ].indexOf(st(e).position) >= 0, r = n && Re(e) ? wn(e) : e;
        return Ut(r) ? t.filter(function(o) {
            return Ut(o) && wi(o, r) && We(o) !== "body";
        }) : [];
    }
    function vg(e, t, n) {
        var r = t === "clippingParents" ? gg(e) : [].concat(t), o = [].concat(r, [
            n
        ]), s = o[0], a = o.reduce(function(i, c) {
            var l = Ys(e, c);
            return i.top = Ct(l.top, i.top), i.right = rr(l.right, i.right), i.bottom = rr(l.bottom, i.bottom), i.left = Ct(l.left, i.left), i;
        }, Ys(e, s));
        return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a;
    }
    function Ai(e) {
        var t = e.reference, n = e.element, r = e.placement, o = r ? Ne(r) : null, s = r ? Wt(r) : null, a = t.x + t.width / 2 - n.width / 2, i = t.y + t.height / 2 - n.height / 2, c;
        switch(o){
            case be:
                c = {
                    x: a,
                    y: t.y - n.height
                };
                break;
            case Oe:
                c = {
                    x: a,
                    y: t.y + t.height
                };
                break;
            case $e:
                c = {
                    x: t.x + t.width,
                    y: i
                };
                break;
            case _e:
                c = {
                    x: t.x - n.width,
                    y: i
                };
                break;
            default:
                c = {
                    x: t.x,
                    y: t.y
                };
        }
        var l = o ? Oo(o) : null;
        if (l != null) {
            var u = l === "y" ? "height" : "width";
            switch(s){
                case Nt:
                    c[l] = c[l] - (t[u] / 2 - n[u] / 2);
                    break;
                case gn:
                    c[l] = c[l] + (t[u] / 2 - n[u] / 2);
                    break;
            }
        }
        return c;
    }
    function vn(e, t) {
        t === void 0 && (t = {});
        var n = t, r = n.placement, o = r === void 0 ? e.placement : r, s = n.boundary, a = s === void 0 ? Fm : s, i = n.rootBoundary, c = i === void 0 ? xi : i, l = n.elementContext, u = l === void 0 ? rn : l, f = n.altBoundary, p = f === void 0 ? !1 : f, m = n.padding, h = m === void 0 ? 0 : m, g = Pi(typeof h != "number" ? h : Ri(h, kn)), _ = u === rn ? Nm : rn, y = e.rects.popper, k = e.elements[p ? _ : u], v = vg(Ut(k) ? k : k.contextElement || ht(e.elements.popper), a, c), T = Vt(e.elements.reference), S = Ai({
            reference: T,
            element: y,
            placement: o
        }), w = zr(Object.assign({}, y, S)), E = u === rn ? w : T, M = {
            top: v.top - E.top + g.top,
            bottom: E.bottom - v.bottom + g.bottom,
            left: v.left - E.left + g.left,
            right: E.right - v.right + g.right
        }, W = e.modifiersData.offset;
        if (u === rn && W) {
            var U = W[o];
            Object.keys(M).forEach(function(G) {
                var H = [
                    $e,
                    Oe
                ].indexOf(G) >= 0 ? 1 : -1, J = [
                    be,
                    Oe
                ].indexOf(G) >= 0 ? "y" : "x";
                M[G] += U[J] * H;
            });
        }
        return M;
    }
    function bg(e, t) {
        t === void 0 && (t = {});
        var n = t, r = n.placement, o = n.boundary, s = n.rootBoundary, a = n.padding, i = n.flipVariations, c = n.allowedAutoPlacements, l = c === void 0 ? Eo : c, u = Wt(r), f = u ? i ? Ws : Ws.filter(function(h) {
            return Wt(h) === u;
        }) : kn, p = f.filter(function(h) {
            return l.indexOf(h) >= 0;
        });
        p.length === 0 && (p = f);
        var m = p.reduce(function(h, g) {
            return h[g] = vn(e, {
                placement: g,
                boundary: o,
                rootBoundary: s,
                padding: a
            })[Ne(g)], h;
        }, {});
        return Object.keys(m).sort(function(h, g) {
            return m[h] - m[g];
        });
    }
    function _g(e) {
        if (Ne(e) === wo) return [];
        var t = Nn(e);
        return [
            Js(e),
            t,
            Js(t)
        ];
    }
    function yg(e) {
        var t = e.state, n = e.options, r = e.name;
        if (!t.modifiersData[r]._skip) {
            for(var o = n.mainAxis, s = o === void 0 ? !0 : o, a = n.altAxis, i = a === void 0 ? !0 : a, c = n.fallbackPlacements, l = n.padding, u = n.boundary, f = n.rootBoundary, p = n.altBoundary, m = n.flipVariations, h = m === void 0 ? !0 : m, g = n.allowedAutoPlacements, _ = t.options.placement, y = Ne(_), k = y === _, v = c || (k || !h ? [
                Nn(_)
            ] : _g(_)), T = [
                _
            ].concat(v).reduce(function(Le, ke) {
                return Le.concat(Ne(ke) === wo ? bg(t, {
                    placement: ke,
                    boundary: u,
                    rootBoundary: f,
                    padding: l,
                    flipVariations: h,
                    allowedAutoPlacements: g
                }) : ke);
            }, []), S = t.rects.reference, w = t.rects.popper, E = new Map, M = !0, W = T[0], U = 0; U < T.length; U++){
                var G = T[U], H = Ne(G), J = Wt(G) === Nt, xe = [
                    be,
                    Oe
                ].indexOf(H) >= 0, ae = xe ? "width" : "height", ne = vn(t, {
                    placement: G,
                    boundary: u,
                    rootBoundary: f,
                    altBoundary: p,
                    padding: l
                }), K = xe ? J ? $e : _e : J ? Oe : be;
                S[ae] > w[ae] && (K = Nn(K));
                var A = Nn(K), ee = [];
                if (s && ee.push(ne[H] <= 0), i && ee.push(ne[K] <= 0, ne[A] <= 0), ee.every(function(Le) {
                    return Le;
                })) {
                    W = G, M = !1;
                    break;
                }
                E.set(G, ee);
            }
            if (M) for(var he = h ? 3 : 1, Ge = function(Le) {
                var ke = T.find(function(je) {
                    var Ot = E.get(je);
                    if (Ot) return Ot.slice(0, Le).every(function(lt) {
                        return lt;
                    });
                });
                if (ke) return W = ke, "break";
            }, mt = he; mt > 0; mt--){
                var Rt = Ge(mt);
                if (Rt === "break") break;
            }
            t.placement !== W && (t.modifiersData[r]._skip = !0, t.placement = W, t.reset = !0);
        }
    }
    var Cg = {
        name: "flip",
        enabled: !0,
        phase: "main",
        fn: yg,
        requiresIfExists: [
            "offset"
        ],
        data: {
            _skip: !1
        }
    };
    function qs(e, t, n) {
        return n === void 0 && (n = {
            x: 0,
            y: 0
        }), {
            top: e.top - t.height - n.y,
            right: e.right - t.width + n.x,
            bottom: e.bottom - t.height + n.y,
            left: e.left - t.width - n.x
        };
    }
    function Zs(e) {
        return [
            be,
            $e,
            Oe,
            _e
        ].some(function(t) {
            return e[t] >= 0;
        });
    }
    function Sg(e) {
        var t = e.state, n = e.name, r = t.rects.reference, o = t.rects.popper, s = t.modifiersData.preventOverflow, a = vn(t, {
            elementContext: "reference"
        }), i = vn(t, {
            altBoundary: !0
        }), c = qs(a, r), l = qs(i, o, s), u = Zs(c), f = Zs(l);
        t.modifiersData[n] = {
            referenceClippingOffsets: c,
            popperEscapeOffsets: l,
            isReferenceHidden: u,
            hasPopperEscaped: f
        }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
            "data-popper-reference-hidden": u,
            "data-popper-escaped": f
        });
    }
    var Tg = {
        name: "hide",
        enabled: !0,
        phase: "main",
        requiresIfExists: [
            "preventOverflow"
        ],
        fn: Sg
    };
    function xg(e, t, n) {
        var r = Ne(e), o = [
            _e,
            be
        ].indexOf(r) >= 0 ? -1 : 1, s = typeof n == "function" ? n(Object.assign({}, t, {
            placement: e
        })) : n, a = s[0], i = s[1];
        return a = a || 0, i = (i || 0) * o, [
            _e,
            $e
        ].indexOf(r) >= 0 ? {
            x: i,
            y: a
        } : {
            x: a,
            y: i
        };
    }
    function kg(e) {
        var t = e.state, n = e.options, r = e.name, o = n.offset, s = o === void 0 ? [
            0,
            0
        ] : o, a = Eo.reduce(function(u, f) {
            return u[f] = xg(f, t.rects, s), u;
        }, {}), i = a[t.placement], c = i.x, l = i.y;
        t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += l), t.modifiersData[r] = a;
    }
    var wg = {
        name: "offset",
        enabled: !0,
        phase: "main",
        requires: [
            "popperOffsets"
        ],
        fn: kg
    };
    function Eg(e) {
        var t = e.state, n = e.name;
        t.modifiersData[n] = Ai({
            reference: t.rects.reference,
            element: t.rects.popper,
            placement: t.placement
        });
    }
    var Mi = {
        name: "popperOffsets",
        enabled: !0,
        phase: "read",
        fn: Eg,
        data: {}
    };
    function Pg(e) {
        return e === "x" ? "y" : "x";
    }
    function Rg(e) {
        var t = e.state, n = e.options, r = e.name, o = n.mainAxis, s = o === void 0 ? !0 : o, a = n.altAxis, i = a === void 0 ? !1 : a, c = n.boundary, l = n.rootBoundary, u = n.altBoundary, f = n.padding, p = n.tether, m = p === void 0 ? !0 : p, h = n.tetherOffset, g = h === void 0 ? 0 : h, _ = vn(t, {
            boundary: c,
            rootBoundary: l,
            padding: f,
            altBoundary: u
        }), y = Ne(t.placement), k = Wt(t.placement), v = !k, T = Oo(y), S = Pg(T), w = t.modifiersData.popperOffsets, E = t.rects.reference, M = t.rects.popper, W = typeof g == "function" ? g(Object.assign({}, t.rects, {
            placement: t.placement
        })) : g, U = typeof W == "number" ? {
            mainAxis: W,
            altAxis: W
        } : Object.assign({
            mainAxis: 0,
            altAxis: 0
        }, W), G = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, H = {
            x: 0,
            y: 0
        };
        if (w) {
            if (s) {
                var J, xe = T === "y" ? be : _e, ae = T === "y" ? Oe : $e, ne = T === "y" ? "height" : "width", K = w[T], A = K + _[xe], ee = K - _[ae], he = m ? -M[ne] / 2 : 0, Ge = k === Nt ? E[ne] : M[ne], mt = k === Nt ? -M[ne] : -E[ne], Rt = t.elements.arrow, Le = m && Rt ? Ro(Rt) : {
                    width: 0,
                    height: 0
                }, ke = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Ei(), je = ke[xe], Ot = ke[ae], lt = ln(0, E[ne], Le[ne]), gt = v ? E[ne] / 2 - he - lt - je - U.mainAxis : Ge - lt - je - U.mainAxis, Zt = v ? -E[ne] / 2 + he + lt + Ot + U.mainAxis : mt + lt + Ot + U.mainAxis, $t = t.elements.arrow && wn(t.elements.arrow), En = $t ? T === "y" ? $t.clientTop || 0 : $t.clientLeft || 0 : 0, Xt = (J = G?.[T]) != null ? J : 0, Pn = K + gt - Xt - En, Rn = K + Zt - Xt, On = ln(m ? rr(A, Pn) : A, K, m ? Ct(ee, Rn) : ee);
                w[T] = On, H[T] = On - K;
            }
            if (i) {
                var $n, br = T === "x" ? be : _e, _r = T === "x" ? Oe : $e, Je = w[S], vt = S === "y" ? "height" : "width", In = Je + _[br], Qt = Je - _[_r], x = [
                    be,
                    _e
                ].indexOf(y) !== -1, V = ($n = G?.[S]) != null ? $n : 0, Ye = x ? In : Je - E[vt] - M[vt] - V + U.altAxis, en = x ? Je + E[vt] + M[vt] - V - U.altAxis : Qt, tn = m && x ? ng(Ye, Je, en) : ln(m ? Ye : In, Je, m ? en : Qt);
                w[S] = tn, H[S] = tn - Je;
            }
            t.modifiersData[r] = H;
        }
    }
    var Og = {
        name: "preventOverflow",
        enabled: !0,
        phase: "main",
        fn: Rg,
        requiresIfExists: [
            "offset"
        ]
    };
    function $g(e) {
        return {
            scrollLeft: e.scrollLeft,
            scrollTop: e.scrollTop
        };
    }
    function Ig(e) {
        return e === De(e) || !Re(e) ? $o(e) : $g(e);
    }
    function Ag(e) {
        var t = e.getBoundingClientRect(), n = Ht(t.width) / e.offsetWidth || 1, r = Ht(t.height) / e.offsetHeight || 1;
        return n !== 1 || r !== 1;
    }
    function Mg(e, t, n) {
        n === void 0 && (n = !1);
        var r = Re(t), o = Re(t) && Ag(t), s = ht(t), a = Vt(e, o), i = {
            scrollLeft: 0,
            scrollTop: 0
        }, c = {
            x: 0,
            y: 0
        };
        return (r || !r && !n) && ((We(t) !== "body" || Ao(s)) && (i = Ig(t)), Re(t) ? (c = Vt(t, !0), c.x += t.clientLeft, c.y += t.clientTop) : s && (c.x = Io(s))), {
            x: a.left + i.scrollLeft - c.x,
            y: a.top + i.scrollTop - c.y,
            width: a.width,
            height: a.height
        };
    }
    function Dg(e) {
        var t = new Map, n = new Set, r = [];
        e.forEach(function(s) {
            t.set(s.name, s);
        });
        function o(s) {
            n.add(s.name);
            var a = [].concat(s.requires || [], s.requiresIfExists || []);
            a.forEach(function(i) {
                if (!n.has(i)) {
                    var c = t.get(i);
                    c && o(c);
                }
            }), r.push(s);
        }
        return e.forEach(function(s) {
            n.has(s.name) || o(s);
        }), r;
    }
    function Lg(e) {
        var t = Dg(e);
        return Zm.reduce(function(n, r) {
            return n.concat(t.filter(function(o) {
                return o.phase === r;
            }));
        }, []);
    }
    function jg(e) {
        var t;
        return function() {
            return t || (t = new Promise(function(n) {
                Promise.resolve().then(function() {
                    t = void 0, n(e());
                });
            })), t;
        };
    }
    function Bg(e) {
        var t = e.reduce(function(n, r) {
            var o = n[r.name];
            return n[r.name] = o ? Object.assign({}, o, r, {
                options: Object.assign({}, o.options, r.options),
                data: Object.assign({}, o.data, r.data)
            }) : r, n;
        }, {});
        return Object.keys(t).map(function(n) {
            return t[n];
        });
    }
    var Xs = {
        placement: "bottom",
        modifiers: [],
        strategy: "absolute"
    };
    function Qs() {
        for(var e = arguments.length, t = new Array(e), n = 0; n < e; n++)t[n] = arguments[n];
        return !t.some(function(r) {
            return !(r && typeof r.getBoundingClientRect == "function");
        });
    }
    function Mo(e) {
        e === void 0 && (e = {});
        var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, o = t.defaultOptions, s = o === void 0 ? Xs : o;
        return function(a, i, c) {
            c === void 0 && (c = s);
            var l = {
                placement: "bottom",
                orderedModifiers: [],
                options: Object.assign({}, Xs, s),
                modifiersData: {},
                elements: {
                    reference: a,
                    popper: i
                },
                attributes: {},
                styles: {}
            }, u = [], f = !1, p = {
                state: l,
                setOptions: function(g) {
                    var _ = typeof g == "function" ? g(l.options) : g;
                    h(), l.options = Object.assign({}, s, l.options, _), l.scrollParents = {
                        reference: Ut(a) ? un(a) : a.contextElement ? un(a.contextElement) : [],
                        popper: un(i)
                    };
                    var y = Lg(Bg([].concat(r, l.options.modifiers)));
                    return l.orderedModifiers = y.filter(function(k) {
                        return k.enabled;
                    }), m(), p.update();
                },
                forceUpdate: function() {
                    if (!f) {
                        var g = l.elements, _ = g.reference, y = g.popper;
                        if (Qs(_, y)) {
                            l.rects = {
                                reference: Mg(_, wn(y), l.options.strategy === "fixed"),
                                popper: Ro(y)
                            }, l.reset = !1, l.placement = l.options.placement, l.orderedModifiers.forEach(function(M) {
                                return l.modifiersData[M.name] = Object.assign({}, M.data);
                            });
                            for(var k = 0; k < l.orderedModifiers.length; k++){
                                if (l.reset === !0) {
                                    l.reset = !1, k = -1;
                                    continue;
                                }
                                var v = l.orderedModifiers[k], T = v.fn, S = v.options, w = S === void 0 ? {} : S, E = v.name;
                                typeof T == "function" && (l = T({
                                    state: l,
                                    options: w,
                                    name: E,
                                    instance: p
                                }) || l);
                            }
                        }
                    }
                },
                update: jg(function() {
                    return new Promise(function(g) {
                        p.forceUpdate(), g(l);
                    });
                }),
                destroy: function() {
                    h(), f = !0;
                }
            };
            if (!Qs(a, i)) return p;
            p.setOptions(c).then(function(g) {
                !f && c.onFirstUpdate && c.onFirstUpdate(g);
            });
            function m() {
                l.orderedModifiers.forEach(function(g) {
                    var _ = g.name, y = g.options, k = y === void 0 ? {} : y, v = g.effect;
                    if (typeof v == "function") {
                        var T = v({
                            state: l,
                            name: _,
                            instance: p,
                            options: k
                        }), S = function() {};
                        u.push(T || S);
                    }
                });
            }
            function h() {
                u.forEach(function(g) {
                    return g();
                }), u = [];
            }
            return p;
        };
    }
    Mo();
    var zg = [
        $i,
        Mi,
        Oi,
        ki
    ];
    Mo({
        defaultModifiers: zg
    });
    var Fg = [
        $i,
        Mi,
        Oi,
        ki,
        wg,
        Cg,
        Og,
        ag,
        Tg
    ], Ng = Mo({
        defaultModifiers: Fg
    });
    const Ug = [
        "fixed",
        "absolute"
    ], Hg = Z({
        boundariesPadding: {
            type: Number,
            default: 0
        },
        fallbackPlacements: {
            type: L(Array),
            default: void 0
        },
        gpuAcceleration: {
            type: Boolean,
            default: !0
        },
        offset: {
            type: Number,
            default: 12
        },
        placement: {
            type: String,
            values: Eo,
            default: "bottom"
        },
        popperOptions: {
            type: L(Object),
            default: ()=>({})
        },
        strategy: {
            type: String,
            values: Ug,
            default: "absolute"
        }
    }), Di = Z({
        ...Hg,
        id: String,
        style: {
            type: L([
                String,
                Array,
                Object
            ])
        },
        className: {
            type: L([
                String,
                Array,
                Object
            ])
        },
        effect: {
            type: L(String),
            default: "dark"
        },
        visible: Boolean,
        enterable: {
            type: Boolean,
            default: !0
        },
        pure: Boolean,
        focusOnShow: {
            type: Boolean,
            default: !1
        },
        trapping: {
            type: Boolean,
            default: !1
        },
        popperClass: {
            type: L([
                String,
                Array,
                Object
            ])
        },
        popperStyle: {
            type: L([
                String,
                Array,
                Object
            ])
        },
        referenceEl: {
            type: L(Object)
        },
        triggerTargetEl: {
            type: L(Object)
        },
        stopPopperMouseEvent: {
            type: Boolean,
            default: !0
        },
        virtualTriggering: Boolean,
        zIndex: Number,
        ...mr([
            "ariaLabel"
        ])
    }), Vg = {
        mouseenter: (e)=>e instanceof MouseEvent,
        mouseleave: (e)=>e instanceof MouseEvent,
        focus: ()=>!0,
        blur: ()=>!0,
        close: ()=>!0
    }, Wg = (e, t)=>{
        const n = P(!1), r = P();
        return {
            focusStartRef: r,
            trapped: n,
            onFocusAfterReleased: (l)=>{
                var u;
                ((u = l.detail) == null ? void 0 : u.focusReason) !== "pointer" && (r.value = "first", t("blur"));
            },
            onFocusAfterTrapped: ()=>{
                t("focus");
            },
            onFocusInTrap: (l)=>{
                e.visible && !n.value && (l.target && (r.value = l.target), n.value = !0);
            },
            onFocusoutPrevented: (l)=>{
                e.trapping || (l.detail.focusReason === "pointer" && l.preventDefault(), n.value = !1);
            },
            onReleaseRequested: ()=>{
                n.value = !1, t("close");
            }
        };
    }, Kg = (e, t = [])=>{
        const { placement: n, strategy: r, popperOptions: o } = e, s = {
            placement: n,
            strategy: r,
            ...o,
            modifiers: [
                ...Jg(e),
                ...t
            ]
        };
        return Yg(s, o?.modifiers), s;
    }, Gg = (e)=>{
        if (ve) return tt(e);
    };
    function Jg(e) {
        const { offset: t, gpuAcceleration: n, fallbackPlacements: r } = e;
        return [
            {
                name: "offset",
                options: {
                    offset: [
                        0,
                        t ?? 12
                    ]
                }
            },
            {
                name: "preventOverflow",
                options: {
                    padding: {
                        top: 2,
                        bottom: 2,
                        left: 5,
                        right: 5
                    }
                }
            },
            {
                name: "flip",
                options: {
                    padding: 5,
                    fallbackPlacements: r
                }
            },
            {
                name: "computeStyles",
                options: {
                    gpuAcceleration: n
                }
            }
        ];
    }
    function Yg(e, t) {
        t && (e.modifiers = [
            ...e.modifiers,
            ...t ?? []
        ]);
    }
    const qg = (e, t, n = {})=>{
        const r = {
            name: "updateState",
            enabled: !0,
            phase: "write",
            fn: ({ state: c })=>{
                const l = Zg(c);
                Object.assign(a.value, l);
            },
            requires: [
                "computeStyles"
            ]
        }, o = b(()=>{
            const { onFirstUpdate: c, placement: l, strategy: u, modifiers: f } = d(n);
            return {
                onFirstUpdate: c,
                placement: l || "bottom",
                strategy: u || "absolute",
                modifiers: [
                    ...f || [],
                    r,
                    {
                        name: "applyStyles",
                        enabled: !1
                    }
                ]
            };
        }), s = Lt(), a = P({
            styles: {
                popper: {
                    position: d(o).strategy,
                    left: "0",
                    top: "0"
                },
                arrow: {
                    position: "absolute"
                }
            },
            attributes: {}
        }), i = ()=>{
            s.value && (s.value.destroy(), s.value = void 0);
        };
        return F(o, (c)=>{
            const l = d(s);
            l && l.setOptions(c);
        }, {
            deep: !0
        }), F([
            e,
            t
        ], ([c, l])=>{
            i(), !(!c || !l) && (s.value = Ng(c, l, d(o)));
        }), at(()=>{
            i();
        }), {
            state: b(()=>{
                var c;
                return {
                    ...((c = d(s)) == null ? void 0 : c.state) || {}
                };
            }),
            styles: b(()=>d(a).styles),
            attributes: b(()=>d(a).attributes),
            update: ()=>{
                var c;
                return (c = d(s)) == null ? void 0 : c.update();
            },
            forceUpdate: ()=>{
                var c;
                return (c = d(s)) == null ? void 0 : c.forceUpdate();
            },
            instanceRef: b(()=>d(s))
        };
    };
    function Zg(e) {
        const t = Object.keys(e.elements), n = Zn(t.map((o)=>[
                o,
                e.styles[o] || {}
            ])), r = Zn(t.map((o)=>[
                o,
                e.attributes[o]
            ]));
        return {
            styles: n,
            attributes: r
        };
    }
    const Xg = 0, Qg = (e)=>{
        const { popperInstanceRef: t, contentRef: n, triggerRef: r, role: o } = Q(To, void 0), s = P(), a = P(), i = b(()=>({
                name: "eventListeners",
                enabled: !!e.visible
            })), c = b(()=>{
            var y;
            const k = d(s), v = (y = d(a)) != null ? y : Xg;
            return {
                name: "arrow",
                enabled: !Zd(k),
                options: {
                    element: k,
                    padding: v
                }
            };
        }), l = b(()=>({
                onFirstUpdate: ()=>{
                    h();
                },
                ...Kg(e, [
                    d(c),
                    d(i)
                ])
            })), u = b(()=>Gg(e.referenceEl) || d(r)), { attributes: f, state: p, styles: m, update: h, forceUpdate: g, instanceRef: _ } = qg(u, n, l);
        return F(_, (y)=>t.value = y, {
            flush: "sync"
        }), Se(()=>{
            F(()=>{
                var y;
                return (y = d(u)) == null ? void 0 : y.getBoundingClientRect();
            }, ()=>{
                h();
            });
        }), {
            attributes: f,
            arrowRef: s,
            contentRef: n,
            instanceRef: _,
            state: p,
            styles: m,
            role: o,
            forceUpdate: g,
            update: h
        };
    }, e0 = (e, { attributes: t, styles: n, role: r })=>{
        const { nextZIndex: o } = ni(), s = te("popper"), a = b(()=>d(t).popper), i = P(le(e.zIndex) ? e.zIndex : o()), c = b(()=>[
                s.b(),
                s.is("pure", e.pure),
                s.is(e.effect),
                e.popperClass
            ]), l = b(()=>[
                {
                    zIndex: d(i)
                },
                d(n).popper,
                e.popperStyle || {}
            ]), u = b(()=>r.value === "dialog" ? "false" : void 0), f = b(()=>d(n).arrow || {});
        return {
            ariaModal: u,
            arrowStyle: f,
            contentAttrs: a,
            contentClass: c,
            contentStyle: l,
            contentZIndex: i,
            updateZIndex: ()=>{
                i.value = le(e.zIndex) ? e.zIndex : o();
            }
        };
    }, t0 = R({
        name: "ElPopperContent"
    }), n0 = R({
        ...t0,
        props: Di,
        emits: Vg,
        setup (e, { expose: t, emit: n }) {
            const r = e, { focusStartRef: o, trapped: s, onFocusAfterReleased: a, onFocusAfterTrapped: i, onFocusInTrap: c, onFocusoutPrevented: l, onReleaseRequested: u } = Wg(r, n), { attributes: f, arrowRef: p, contentRef: m, styles: h, instanceRef: g, role: _, update: y } = Qg(r), { ariaModal: k, arrowStyle: v, contentAttrs: T, contentClass: S, contentStyle: w, updateZIndex: E } = e0(r, {
                styles: h,
                attributes: f,
                role: _
            }), M = Q(nr, void 0), W = P();
            He(vi, {
                arrowStyle: v,
                arrowRef: p,
                arrowOffset: W
            }), M && He(nr, {
                ...M,
                addInputId: fn,
                removeInputId: fn
            });
            let U;
            const G = (J = !0)=>{
                y(), J && E();
            }, H = ()=>{
                G(!1), r.visible && r.focusOnShow ? s.value = !0 : r.visible === !1 && (s.value = !1);
            };
            return Se(()=>{
                F(()=>r.triggerTargetEl, (J, xe)=>{
                    U?.(), U = void 0;
                    const ae = d(J || m.value), ne = d(xe || m.value);
                    yt(ae) && (U = F([
                        _,
                        ()=>r.ariaLabel,
                        k,
                        ()=>r.id
                    ], (K)=>{
                        [
                            "role",
                            "aria-label",
                            "aria-modal",
                            "id"
                        ].forEach((A, ee)=>{
                            Tn(K[ee]) ? ae.removeAttribute(A) : ae.setAttribute(A, K[ee]);
                        });
                    }, {
                        immediate: !0
                    })), ne !== ae && yt(ne) && [
                        "role",
                        "aria-label",
                        "aria-modal",
                        "id"
                    ].forEach((K)=>{
                        ne.removeAttribute(K);
                    });
                }, {
                    immediate: !0
                }), F(()=>r.visible, H, {
                    immediate: !0
                });
            }), at(()=>{
                U?.(), U = void 0;
            }), t({
                popperContentRef: m,
                popperInstanceRef: g,
                updatePopper: G,
                contentStyle: w
            }), (J, xe)=>(C(), $("div", ot({
                    ref_key: "contentRef",
                    ref: m
                }, d(T), {
                    style: d(w),
                    class: d(S),
                    tabindex: "-1",
                    onMouseenter: (ae)=>J.$emit("mouseenter", ae),
                    onMouseleave: (ae)=>J.$emit("mouseleave", ae)
                }), [
                    ce(d(zm), {
                        trapped: d(s),
                        "trap-on-focus-in": !0,
                        "focus-trap-el": d(m),
                        "focus-start-el": d(o),
                        onFocusAfterTrapped: d(i),
                        onFocusAfterReleased: d(a),
                        onFocusin: d(c),
                        onFocusoutPrevented: d(l),
                        onReleaseRequested: d(u)
                    }, {
                        default: q(()=>[
                                z(J.$slots, "default")
                            ]),
                        _: 3
                    }, 8, [
                        "trapped",
                        "focus-trap-el",
                        "focus-start-el",
                        "onFocusAfterTrapped",
                        "onFocusAfterReleased",
                        "onFocusin",
                        "onFocusoutPrevented",
                        "onReleaseRequested"
                    ])
                ], 16, [
                    "onMouseenter",
                    "onMouseleave"
                ]));
        }
    });
    var r0 = oe(n0, [
        [
            "__file",
            "content.vue"
        ]
    ]);
    const o0 = Te(mm), Do = Symbol("elTooltip");
    function ea() {
        let e;
        const t = (r, o)=>{
            n(), e = window.setTimeout(r, o);
        }, n = ()=>window.clearTimeout(e);
        return xn(()=>n()), {
            registerTimeout: t,
            cancelTimeout: n
        };
    }
    let s0, a0, Li, Bi, i0, c0, l0, u0, f0, d0, p0, h0, m0, At, Qe, g0, v0;
    s0 = Z({
        showAfter: {
            type: Number,
            default: 0
        },
        hideAfter: {
            type: Number,
            default: 200
        },
        autoClose: {
            type: Number,
            default: 0
        }
    });
    a0 = ({ showAfter: e, hideAfter: t, autoClose: n, open: r, close: o })=>{
        const { registerTimeout: s } = ea(), { registerTimeout: a, cancelTimeout: i } = ea();
        return {
            onOpen: (u)=>{
                s(()=>{
                    r(u);
                    const f = d(n);
                    le(f) && f > 0 && a(()=>{
                        o(u);
                    }, f);
                }, d(e));
            },
            onClose: (u)=>{
                i(), s(()=>{
                    o(u);
                }, d(t));
            }
        };
    };
    Li = Z({
        to: {
            type: L([
                String,
                Object
            ]),
            required: !0
        },
        disabled: Boolean
    });
    ji = Z({
        ...s0,
        ...Di,
        appendTo: {
            type: Li.to.type
        },
        content: {
            type: String,
            default: ""
        },
        rawContent: Boolean,
        persistent: Boolean,
        visible: {
            type: L(Boolean),
            default: null
        },
        transition: String,
        teleported: {
            type: Boolean,
            default: !0
        },
        disabled: Boolean,
        ...mr([
            "ariaLabel"
        ])
    });
    Bi = Z({
        ...yi,
        disabled: Boolean,
        trigger: {
            type: L([
                String,
                Array
            ]),
            default: "hover"
        },
        triggerKeys: {
            type: L(Array),
            default: ()=>[
                    cn.enter,
                    cn.numpadEnter,
                    cn.space
                ]
        }
    });
    i0 = hr({
        type: L(Boolean),
        default: null
    });
    c0 = hr({
        type: L(Function)
    });
    l0 = (e)=>{
        const t = `update:${e}`, n = `onUpdate:${e}`, r = [
            t
        ], o = {
            [e]: i0,
            [n]: c0
        };
        return {
            useModelToggle: ({ indicator: a, toggleReason: i, shouldHideWhenRouteChanges: c, shouldProceed: l, onShow: u, onHide: f })=>{
                const p = Ce(), { emit: m } = p, h = p.props, g = b(()=>Be(h[n])), _ = b(()=>h[e] === null), y = (E)=>{
                    a.value !== !0 && (a.value = !0, i && (i.value = E), Be(u) && u(E));
                }, k = (E)=>{
                    a.value !== !1 && (a.value = !1, i && (i.value = E), Be(f) && f(E));
                }, v = (E)=>{
                    if (h.disabled === !0 || Be(l) && !l()) return;
                    const M = g.value && ve;
                    M && m(t, !0), (_.value || !M) && y(E);
                }, T = (E)=>{
                    if (h.disabled === !0 || !ve) return;
                    const M = g.value && ve;
                    M && m(t, !1), (_.value || !M) && k(E);
                }, S = (E)=>{
                    qa(E) && (h.disabled && E ? g.value && m(t, !1) : a.value !== E && (E ? y() : k()));
                }, w = ()=>{
                    a.value ? T() : v();
                };
                return F(()=>h[e], S), c && p.appContext.config.globalProperties.$route !== void 0 && F(()=>({
                        ...p.proxy.$route
                    }), ()=>{
                    c.value && a.value && T();
                }), Se(()=>{
                    S(h[e]);
                }), {
                    hide: T,
                    show: v,
                    toggle: w,
                    hasUpdateHandler: g
                };
            },
            useModelToggleProps: o,
            useModelToggleEmits: r
        };
    };
    ({ useModelToggleProps: u0, useModelToggleEmits: f0, useModelToggle: d0 } = l0("visible"));
    p0 = Z({
        ...bi,
        ...u0,
        ...ji,
        ...Bi,
        ..._i,
        showArrow: {
            type: Boolean,
            default: !0
        }
    });
    h0 = [
        ...f0,
        "before-show",
        "before-hide",
        "show",
        "hide",
        "open",
        "close"
    ];
    m0 = (e, t)=>jt(e) ? e.includes(t) : e === t;
    At = (e, t, n)=>(r)=>{
            m0(d(e), t) && n(r);
        };
    Qe = (e, t, { checkForDefaultPrevented: n = !0 } = {})=>(o)=>{
            const s = e?.(o);
            if (n === !1 || !s) return t?.(o);
        };
    g0 = R({
        name: "ElTooltipTrigger"
    });
    v0 = R({
        ...g0,
        props: Bi,
        setup (e, { expose: t }) {
            const n = e, r = te("tooltip"), { controlled: o, id: s, open: a, onOpen: i, onClose: c, onToggle: l } = Q(Do, void 0), u = P(null), f = ()=>{
                if (d(o) || n.disabled) return !0;
            }, p = Pe(n, "trigger"), m = Qe(f, At(p, "hover", i)), h = Qe(f, At(p, "hover", c)), g = Qe(f, At(p, "click", (T)=>{
                T.button === 0 && l(T);
            })), _ = Qe(f, At(p, "focus", i)), y = Qe(f, At(p, "focus", c)), k = Qe(f, At(p, "contextmenu", (T)=>{
                T.preventDefault(), l(T);
            })), v = Qe(f, (T)=>{
                const { code: S } = T;
                n.triggerKeys.includes(S) && (T.preventDefault(), l(T));
            });
            return t({
                triggerRef: u
            }), (T, S)=>(C(), B(d(km), {
                    id: d(s),
                    "virtual-ref": T.virtualRef,
                    open: d(a),
                    "virtual-triggering": T.virtualTriggering,
                    class: I(d(r).e("trigger")),
                    onBlur: d(y),
                    onClick: d(g),
                    onContextmenu: d(k),
                    onFocus: d(_),
                    onMouseenter: d(m),
                    onMouseleave: d(h),
                    onKeydown: d(v)
                }, {
                    default: q(()=>[
                            z(T.$slots, "default")
                        ]),
                    _: 3
                }, 8, [
                    "id",
                    "virtual-ref",
                    "open",
                    "virtual-triggering",
                    "class",
                    "onBlur",
                    "onClick",
                    "onContextmenu",
                    "onFocus",
                    "onMouseenter",
                    "onMouseleave",
                    "onKeydown"
                ]));
        }
    });
    var b0 = oe(v0, [
        [
            "__file",
            "trigger.vue"
        ]
    ]);
    const _0 = R({
        __name: "teleport",
        props: Li,
        setup (e) {
            return (t, n)=>t.disabled ? z(t.$slots, "default", {
                    key: 0
                }) : (C(), B(Uc, {
                    key: 1,
                    to: t.to
                }, [
                    z(t.$slots, "default")
                ], 8, [
                    "to"
                ]));
        }
    });
    var y0 = oe(_0, [
        [
            "__file",
            "teleport.vue"
        ]
    ]);
    const C0 = Te(y0), zi = ()=>{
        const e = Qr(), t = hi(), n = b(()=>`${e.value}-popper-container-${t.prefix}`), r = b(()=>`#${n.value}`);
        return {
            id: n,
            selector: r
        };
    }, S0 = (e)=>{
        const t = document.createElement("div");
        return t.id = e, document.body.appendChild(t), t;
    }, T0 = ()=>{
        const { id: e, selector: t } = zi();
        return Hc(()=>{
            ve && (document.body.querySelector(t.value) || S0(e.value));
        }), {
            id: e,
            selector: t
        };
    }, x0 = R({
        name: "ElTooltipContent",
        inheritAttrs: !1
    }), k0 = R({
        ...x0,
        props: ji,
        setup (e, { expose: t }) {
            const n = e, { selector: r } = zi(), o = te("tooltip"), s = P(), a = Za(()=>{
                var A;
                return (A = s.value) == null ? void 0 : A.popperContentRef;
            });
            let i;
            const { controlled: c, id: l, open: u, trigger: f, onClose: p, onOpen: m, onShow: h, onHide: g, onBeforeShow: _, onBeforeHide: y } = Q(Do, void 0), k = b(()=>n.transition || `${o.namespace.value}-fade-in-linear`), v = b(()=>n.persistent);
            at(()=>{
                i?.();
            });
            const T = b(()=>d(v) ? !0 : d(u)), S = b(()=>n.disabled ? !1 : d(u)), w = b(()=>n.appendTo || r.value), E = b(()=>{
                var A;
                return (A = n.style) != null ? A : {};
            }), M = P(!0), W = ()=>{
                g(), K() && Xe(document.body), M.value = !0;
            }, U = ()=>{
                if (d(c)) return !0;
            }, G = Qe(U, ()=>{
                n.enterable && d(f) === "hover" && m();
            }), H = Qe(U, ()=>{
                d(f) === "hover" && p();
            }), J = ()=>{
                var A, ee;
                (ee = (A = s.value) == null ? void 0 : A.updatePopper) == null || ee.call(A), _?.();
            }, xe = ()=>{
                y?.();
            }, ae = ()=>{
                h(), i = _p(a, ()=>{
                    if (d(c)) return;
                    d(f) !== "hover" && p();
                });
            }, ne = ()=>{
                n.virtualTriggering || p();
            }, K = (A)=>{
                var ee;
                const he = (ee = s.value) == null ? void 0 : ee.popperContentRef, Ge = A?.relatedTarget || document.activeElement;
                return he?.contains(Ge);
            };
            return F(()=>d(u), (A)=>{
                A ? M.value = !1 : i?.();
            }, {
                flush: "post"
            }), F(()=>n.content, ()=>{
                var A, ee;
                (ee = (A = s.value) == null ? void 0 : A.updatePopper) == null || ee.call(A);
            }), t({
                contentRef: s,
                isFocusInsideContent: K
            }), (A, ee)=>(C(), B(d(C0), {
                    disabled: !A.teleported,
                    to: d(w)
                }, {
                    default: q(()=>[
                            ce(cr, {
                                name: d(k),
                                onAfterLeave: W,
                                onBeforeEnter: J,
                                onAfterEnter: ae,
                                onBeforeLeave: xe
                            }, {
                                default: q(()=>[
                                        d(T) ? ir((C(), B(d(r0), ot({
                                            key: 0,
                                            id: d(l),
                                            ref_key: "contentRef",
                                            ref: s
                                        }, A.$attrs, {
                                            "aria-label": A.ariaLabel,
                                            "aria-hidden": M.value,
                                            "boundaries-padding": A.boundariesPadding,
                                            "fallback-placements": A.fallbackPlacements,
                                            "gpu-acceleration": A.gpuAcceleration,
                                            offset: A.offset,
                                            placement: A.placement,
                                            "popper-options": A.popperOptions,
                                            strategy: A.strategy,
                                            effect: A.effect,
                                            enterable: A.enterable,
                                            pure: A.pure,
                                            "popper-class": A.popperClass,
                                            "popper-style": [
                                                A.popperStyle,
                                                d(E)
                                            ],
                                            "reference-el": A.referenceEl,
                                            "trigger-target-el": A.triggerTargetEl,
                                            visible: d(S),
                                            "z-index": A.zIndex,
                                            onMouseenter: d(G),
                                            onMouseleave: d(H),
                                            onBlur: ne,
                                            onClose: d(p)
                                        }), {
                                            default: q(()=>[
                                                    z(A.$slots, "default")
                                                ]),
                                            _: 3
                                        }, 16, [
                                            "id",
                                            "aria-label",
                                            "aria-hidden",
                                            "boundaries-padding",
                                            "fallback-placements",
                                            "gpu-acceleration",
                                            "offset",
                                            "placement",
                                            "popper-options",
                                            "strategy",
                                            "effect",
                                            "enterable",
                                            "pure",
                                            "popper-class",
                                            "popper-style",
                                            "reference-el",
                                            "trigger-target-el",
                                            "visible",
                                            "z-index",
                                            "onMouseenter",
                                            "onMouseleave",
                                            "onClose"
                                        ])), [
                                            [
                                                Xr,
                                                d(S)
                                            ]
                                        ]) : j("v-if", !0)
                                    ]),
                                _: 3
                            }, 8, [
                                "name"
                            ])
                        ]),
                    _: 3
                }, 8, [
                    "disabled",
                    "to"
                ]));
        }
    });
    var w0 = oe(k0, [
        [
            "__file",
            "content.vue"
        ]
    ]);
    const E0 = R({
        name: "ElTooltip"
    }), P0 = R({
        ...E0,
        props: p0,
        emits: h0,
        setup (e, { expose: t, emit: n }) {
            const r = e;
            T0();
            const o = te("tooltip"), s = mi(), a = P(), i = P(), c = ()=>{
                var v;
                const T = d(a);
                T && ((v = T.popperInstanceRef) == null || v.update());
            }, l = P(!1), u = P(), { show: f, hide: p, hasUpdateHandler: m } = d0({
                indicator: l,
                toggleReason: u
            }), { onOpen: h, onClose: g } = a0({
                showAfter: Pe(r, "showAfter"),
                hideAfter: Pe(r, "hideAfter"),
                autoClose: Pe(r, "autoClose"),
                open: f,
                close: p
            }), _ = b(()=>qa(r.visible) && !m.value), y = b(()=>[
                    o.b(),
                    r.popperClass
                ]);
            He(Do, {
                controlled: _,
                id: s,
                open: qr(l),
                trigger: Pe(r, "trigger"),
                onOpen: (v)=>{
                    h(v);
                },
                onClose: (v)=>{
                    g(v);
                },
                onToggle: (v)=>{
                    d(l) ? g(v) : h(v);
                },
                onShow: ()=>{
                    n("show", u.value);
                },
                onHide: ()=>{
                    n("hide", u.value);
                },
                onBeforeShow: ()=>{
                    n("before-show", u.value);
                },
                onBeforeHide: ()=>{
                    n("before-hide", u.value);
                },
                updatePopper: c
            }), F(()=>r.disabled, (v)=>{
                v && l.value && (l.value = !1);
            });
            const k = (v)=>{
                var T;
                return (T = i.value) == null ? void 0 : T.isFocusInsideContent(v);
            };
            return Vc(()=>l.value && p()), t({
                popperRef: a,
                contentRef: i,
                isFocusInsideContent: k,
                updatePopper: c,
                onOpen: h,
                onClose: g,
                hide: p
            }), (v, T)=>(C(), B(d(o0), {
                    ref_key: "popperRef",
                    ref: a,
                    role: v.role
                }, {
                    default: q(()=>[
                            ce(b0, {
                                disabled: v.disabled,
                                trigger: v.trigger,
                                "trigger-keys": v.triggerKeys,
                                "virtual-ref": v.virtualRef,
                                "virtual-triggering": v.virtualTriggering
                            }, {
                                default: q(()=>[
                                        v.$slots.default ? z(v.$slots, "default", {
                                            key: 0
                                        }) : j("v-if", !0)
                                    ]),
                                _: 3
                            }, 8, [
                                "disabled",
                                "trigger",
                                "trigger-keys",
                                "virtual-ref",
                                "virtual-triggering"
                            ]),
                            ce(w0, {
                                ref_key: "contentRef",
                                ref: i,
                                "aria-label": v.ariaLabel,
                                "boundaries-padding": v.boundariesPadding,
                                content: v.content,
                                disabled: v.disabled,
                                effect: v.effect,
                                enterable: v.enterable,
                                "fallback-placements": v.fallbackPlacements,
                                "hide-after": v.hideAfter,
                                "gpu-acceleration": v.gpuAcceleration,
                                offset: v.offset,
                                persistent: v.persistent,
                                "popper-class": d(y),
                                "popper-style": v.popperStyle,
                                placement: v.placement,
                                "popper-options": v.popperOptions,
                                pure: v.pure,
                                "raw-content": v.rawContent,
                                "reference-el": v.referenceEl,
                                "trigger-target-el": v.triggerTargetEl,
                                "show-after": v.showAfter,
                                strategy: v.strategy,
                                teleported: v.teleported,
                                transition: v.transition,
                                "virtual-triggering": v.virtualTriggering,
                                "z-index": v.zIndex,
                                "append-to": v.appendTo
                            }, {
                                default: q(()=>[
                                        z(v.$slots, "content", {}, ()=>[
                                                v.rawContent ? (C(), $("span", {
                                                    key: 0,
                                                    innerHTML: v.content
                                                }, null, 8, [
                                                    "innerHTML"
                                                ])) : (C(), $("span", {
                                                    key: 1
                                                }, Ee(v.content), 1))
                                            ]),
                                        v.showArrow ? (C(), B(d(bm), {
                                            key: 0,
                                            "arrow-offset": v.arrowOffset
                                        }, null, 8, [
                                            "arrow-offset"
                                        ])) : j("v-if", !0)
                                    ]),
                                _: 3
                            }, 8, [
                                "aria-label",
                                "boundaries-padding",
                                "content",
                                "disabled",
                                "effect",
                                "enterable",
                                "fallback-placements",
                                "hide-after",
                                "gpu-acceleration",
                                "offset",
                                "persistent",
                                "popper-class",
                                "popper-style",
                                "placement",
                                "popper-options",
                                "pure",
                                "raw-content",
                                "reference-el",
                                "trigger-target-el",
                                "show-after",
                                "strategy",
                                "teleported",
                                "transition",
                                "virtual-triggering",
                                "z-index",
                                "append-to"
                            ])
                        ]),
                    _: 3
                }, 8, [
                    "role"
                ]));
        }
    });
    var R0 = oe(P0, [
        [
            "__file",
            "tooltip.vue"
        ]
    ]);
    let Fi, $0, I0, A0, Fr, M0;
    J_ = Te(R0);
    Fi = Symbol("buttonGroupContextKey");
    O0 = ({ from: e, replacement: t, scope: n, version: r, ref: o, type: s = "API" }, a)=>{
        F(()=>d(a), (i)=>{}, {
            immediate: !0
        });
    };
    $0 = (e, t)=>{
        O0({
            from: "type.text",
            replacement: "link",
            version: "3.0.0",
            scope: "props",
            ref: "https://element-plus.org/en-US/component/button.html#button-attributes"
        }, b(()=>e.type === "text"));
        const n = Q(Fi, void 0), r = go("button"), { form: o } = gi(), s = yo(b(()=>n?.size)), a = Co(), i = P(), c = Zr(), l = b(()=>e.type || n?.type || ""), u = b(()=>{
            var h, g, _;
            return (_ = (g = e.autoInsertSpace) != null ? g : (h = r.value) == null ? void 0 : h.autoInsertSpace) != null ? _ : !1;
        }), f = b(()=>e.tag === "button" ? {
                ariaDisabled: a.value || e.loading,
                disabled: a.value || e.loading,
                autofocus: e.autofocus,
                type: e.nativeType
            } : {}), p = b(()=>{
            var h;
            const g = (h = c.default) == null ? void 0 : h.call(c);
            if (u.value && g?.length === 1) {
                const _ = g[0];
                if (_?.type === Ca) {
                    const y = _.children;
                    return /^\p{Unified_Ideograph}{2}$/u.test(y.trim());
                }
            }
            return !1;
        });
        return {
            _disabled: a,
            _size: s,
            _type: l,
            _ref: i,
            _props: f,
            shouldAddSpace: p,
            handleClick: (h)=>{
                if (a.value || e.loading) {
                    h.stopPropagation();
                    return;
                }
                e.nativeType === "reset" && o?.resetFields(), t("click", h);
            }
        };
    };
    I0 = [
        "default",
        "primary",
        "success",
        "warning",
        "info",
        "danger",
        "text",
        ""
    ];
    A0 = [
        "button",
        "submit",
        "reset"
    ];
    Fr = Z({
        size: si,
        disabled: Boolean,
        type: {
            type: String,
            values: I0,
            default: ""
        },
        icon: {
            type: tr
        },
        nativeType: {
            type: String,
            values: A0,
            default: "button"
        },
        loading: Boolean,
        loadingIcon: {
            type: tr,
            default: ()=>fi
        },
        plain: Boolean,
        text: Boolean,
        link: Boolean,
        bg: Boolean,
        autofocus: Boolean,
        round: Boolean,
        circle: Boolean,
        color: String,
        dark: Boolean,
        autoInsertSpace: {
            type: Boolean,
            default: void 0
        },
        tag: {
            type: L([
                String,
                Object
            ]),
            default: "button"
        }
    });
    M0 = {
        click: (e)=>e instanceof MouseEvent
    };
    function ue(e, t) {
        D0(e) && (e = "100%");
        var n = L0(e);
        return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))), n && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : (t === 360 ? e = (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e = e % t / parseFloat(String(t)), e);
    }
    function jn(e) {
        return Math.min(1, Math.max(0, e));
    }
    function D0(e) {
        return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
    }
    function L0(e) {
        return typeof e == "string" && e.indexOf("%") !== -1;
    }
    function Ni(e) {
        return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
    }
    function Bn(e) {
        return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
    }
    function _t(e) {
        return e.length === 1 ? "0" + e : String(e);
    }
    function j0(e, t, n) {
        return {
            r: ue(e, 255) * 255,
            g: ue(t, 255) * 255,
            b: ue(n, 255) * 255
        };
    }
    function ta(e, t, n) {
        e = ue(e, 255), t = ue(t, 255), n = ue(n, 255);
        var r = Math.max(e, t, n), o = Math.min(e, t, n), s = 0, a = 0, i = (r + o) / 2;
        if (r === o) a = 0, s = 0;
        else {
            var c = r - o;
            switch(a = i > .5 ? c / (2 - r - o) : c / (r + o), r){
                case e:
                    s = (t - n) / c + (t < n ? 6 : 0);
                    break;
                case t:
                    s = (n - e) / c + 2;
                    break;
                case n:
                    s = (e - t) / c + 4;
                    break;
            }
            s /= 6;
        }
        return {
            h: s,
            s: a,
            l: i
        };
    }
    function kr(e, t, n) {
        return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * (6 * n) : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
    }
    function B0(e, t, n) {
        var r, o, s;
        if (e = ue(e, 360), t = ue(t, 100), n = ue(n, 100), t === 0) o = n, s = n, r = n;
        else {
            var a = n < .5 ? n * (1 + t) : n + t - n * t, i = 2 * n - a;
            r = kr(i, a, e + 1 / 3), o = kr(i, a, e), s = kr(i, a, e - 1 / 3);
        }
        return {
            r: r * 255,
            g: o * 255,
            b: s * 255
        };
    }
    function na(e, t, n) {
        e = ue(e, 255), t = ue(t, 255), n = ue(n, 255);
        var r = Math.max(e, t, n), o = Math.min(e, t, n), s = 0, a = r, i = r - o, c = r === 0 ? 0 : i / r;
        if (r === o) s = 0;
        else {
            switch(r){
                case e:
                    s = (t - n) / i + (t < n ? 6 : 0);
                    break;
                case t:
                    s = (n - e) / i + 2;
                    break;
                case n:
                    s = (e - t) / i + 4;
                    break;
            }
            s /= 6;
        }
        return {
            h: s,
            s: c,
            v: a
        };
    }
    function z0(e, t, n) {
        e = ue(e, 360) * 6, t = ue(t, 100), n = ue(n, 100);
        var r = Math.floor(e), o = e - r, s = n * (1 - t), a = n * (1 - o * t), i = n * (1 - (1 - o) * t), c = r % 6, l = [
            n,
            a,
            s,
            s,
            i,
            n
        ][c], u = [
            i,
            n,
            n,
            a,
            s,
            s
        ][c], f = [
            s,
            s,
            i,
            n,
            n,
            a
        ][c];
        return {
            r: l * 255,
            g: u * 255,
            b: f * 255
        };
    }
    function ra(e, t, n, r) {
        var o = [
            _t(Math.round(e).toString(16)),
            _t(Math.round(t).toString(16)),
            _t(Math.round(n).toString(16))
        ];
        return r && o[0].startsWith(o[0].charAt(1)) && o[1].startsWith(o[1].charAt(1)) && o[2].startsWith(o[2].charAt(1)) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) : o.join("");
    }
    function F0(e, t, n, r, o) {
        var s = [
            _t(Math.round(e).toString(16)),
            _t(Math.round(t).toString(16)),
            _t(Math.round(n).toString(16)),
            _t(N0(r))
        ];
        return o && s[0].startsWith(s[0].charAt(1)) && s[1].startsWith(s[1].charAt(1)) && s[2].startsWith(s[2].charAt(1)) && s[3].startsWith(s[3].charAt(1)) ? s[0].charAt(0) + s[1].charAt(0) + s[2].charAt(0) + s[3].charAt(0) : s.join("");
    }
    function N0(e) {
        return Math.round(parseFloat(e) * 255).toString(16);
    }
    function oa(e) {
        return ye(e) / 255;
    }
    function ye(e) {
        return parseInt(e, 16);
    }
    function U0(e) {
        return {
            r: e >> 16,
            g: (e & 65280) >> 8,
            b: e & 255
        };
    }
    var Nr = {
        aliceblue: "#f0f8ff",
        antiquewhite: "#faebd7",
        aqua: "#00ffff",
        aquamarine: "#7fffd4",
        azure: "#f0ffff",
        beige: "#f5f5dc",
        bisque: "#ffe4c4",
        black: "#000000",
        blanchedalmond: "#ffebcd",
        blue: "#0000ff",
        blueviolet: "#8a2be2",
        brown: "#a52a2a",
        burlywood: "#deb887",
        cadetblue: "#5f9ea0",
        chartreuse: "#7fff00",
        chocolate: "#d2691e",
        coral: "#ff7f50",
        cornflowerblue: "#6495ed",
        cornsilk: "#fff8dc",
        crimson: "#dc143c",
        cyan: "#00ffff",
        darkblue: "#00008b",
        darkcyan: "#008b8b",
        darkgoldenrod: "#b8860b",
        darkgray: "#a9a9a9",
        darkgreen: "#006400",
        darkgrey: "#a9a9a9",
        darkkhaki: "#bdb76b",
        darkmagenta: "#8b008b",
        darkolivegreen: "#556b2f",
        darkorange: "#ff8c00",
        darkorchid: "#9932cc",
        darkred: "#8b0000",
        darksalmon: "#e9967a",
        darkseagreen: "#8fbc8f",
        darkslateblue: "#483d8b",
        darkslategray: "#2f4f4f",
        darkslategrey: "#2f4f4f",
        darkturquoise: "#00ced1",
        darkviolet: "#9400d3",
        deeppink: "#ff1493",
        deepskyblue: "#00bfff",
        dimgray: "#696969",
        dimgrey: "#696969",
        dodgerblue: "#1e90ff",
        firebrick: "#b22222",
        floralwhite: "#fffaf0",
        forestgreen: "#228b22",
        fuchsia: "#ff00ff",
        gainsboro: "#dcdcdc",
        ghostwhite: "#f8f8ff",
        goldenrod: "#daa520",
        gold: "#ffd700",
        gray: "#808080",
        green: "#008000",
        greenyellow: "#adff2f",
        grey: "#808080",
        honeydew: "#f0fff0",
        hotpink: "#ff69b4",
        indianred: "#cd5c5c",
        indigo: "#4b0082",
        ivory: "#fffff0",
        khaki: "#f0e68c",
        lavenderblush: "#fff0f5",
        lavender: "#e6e6fa",
        lawngreen: "#7cfc00",
        lemonchiffon: "#fffacd",
        lightblue: "#add8e6",
        lightcoral: "#f08080",
        lightcyan: "#e0ffff",
        lightgoldenrodyellow: "#fafad2",
        lightgray: "#d3d3d3",
        lightgreen: "#90ee90",
        lightgrey: "#d3d3d3",
        lightpink: "#ffb6c1",
        lightsalmon: "#ffa07a",
        lightseagreen: "#20b2aa",
        lightskyblue: "#87cefa",
        lightslategray: "#778899",
        lightslategrey: "#778899",
        lightsteelblue: "#b0c4de",
        lightyellow: "#ffffe0",
        lime: "#00ff00",
        limegreen: "#32cd32",
        linen: "#faf0e6",
        magenta: "#ff00ff",
        maroon: "#800000",
        mediumaquamarine: "#66cdaa",
        mediumblue: "#0000cd",
        mediumorchid: "#ba55d3",
        mediumpurple: "#9370db",
        mediumseagreen: "#3cb371",
        mediumslateblue: "#7b68ee",
        mediumspringgreen: "#00fa9a",
        mediumturquoise: "#48d1cc",
        mediumvioletred: "#c71585",
        midnightblue: "#191970",
        mintcream: "#f5fffa",
        mistyrose: "#ffe4e1",
        moccasin: "#ffe4b5",
        navajowhite: "#ffdead",
        navy: "#000080",
        oldlace: "#fdf5e6",
        olive: "#808000",
        olivedrab: "#6b8e23",
        orange: "#ffa500",
        orangered: "#ff4500",
        orchid: "#da70d6",
        palegoldenrod: "#eee8aa",
        palegreen: "#98fb98",
        paleturquoise: "#afeeee",
        palevioletred: "#db7093",
        papayawhip: "#ffefd5",
        peachpuff: "#ffdab9",
        peru: "#cd853f",
        pink: "#ffc0cb",
        plum: "#dda0dd",
        powderblue: "#b0e0e6",
        purple: "#800080",
        rebeccapurple: "#663399",
        red: "#ff0000",
        rosybrown: "#bc8f8f",
        royalblue: "#4169e1",
        saddlebrown: "#8b4513",
        salmon: "#fa8072",
        sandybrown: "#f4a460",
        seagreen: "#2e8b57",
        seashell: "#fff5ee",
        sienna: "#a0522d",
        silver: "#c0c0c0",
        skyblue: "#87ceeb",
        slateblue: "#6a5acd",
        slategray: "#708090",
        slategrey: "#708090",
        snow: "#fffafa",
        springgreen: "#00ff7f",
        steelblue: "#4682b4",
        tan: "#d2b48c",
        teal: "#008080",
        thistle: "#d8bfd8",
        tomato: "#ff6347",
        turquoise: "#40e0d0",
        violet: "#ee82ee",
        wheat: "#f5deb3",
        white: "#ffffff",
        whitesmoke: "#f5f5f5",
        yellow: "#ffff00",
        yellowgreen: "#9acd32"
    };
    function H0(e) {
        var t = {
            r: 0,
            g: 0,
            b: 0
        }, n = 1, r = null, o = null, s = null, a = !1, i = !1;
        return typeof e == "string" && (e = K0(e)), typeof e == "object" && (qe(e.r) && qe(e.g) && qe(e.b) ? (t = j0(e.r, e.g, e.b), a = !0, i = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : qe(e.h) && qe(e.s) && qe(e.v) ? (r = Bn(e.s), o = Bn(e.v), t = z0(e.h, r, o), a = !0, i = "hsv") : qe(e.h) && qe(e.s) && qe(e.l) && (r = Bn(e.s), s = Bn(e.l), t = B0(e.h, r, s), a = !0, i = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (n = e.a)), n = Ni(n), {
            ok: a,
            format: e.format || i,
            r: Math.min(255, Math.max(t.r, 0)),
            g: Math.min(255, Math.max(t.g, 0)),
            b: Math.min(255, Math.max(t.b, 0)),
            a: n
        };
    }
    var V0 = "[-\\+]?\\d+%?", W0 = "[-\\+]?\\d*\\.\\d+%?", ft = "(?:".concat(W0, ")|(?:").concat(V0, ")"), wr = "[\\s|\\(]+(".concat(ft, ")[,|\\s]+(").concat(ft, ")[,|\\s]+(").concat(ft, ")\\s*\\)?"), Er = "[\\s|\\(]+(".concat(ft, ")[,|\\s]+(").concat(ft, ")[,|\\s]+(").concat(ft, ")[,|\\s]+(").concat(ft, ")\\s*\\)?"), Ie = {
        CSS_UNIT: new RegExp(ft),
        rgb: new RegExp("rgb" + wr),
        rgba: new RegExp("rgba" + Er),
        hsl: new RegExp("hsl" + wr),
        hsla: new RegExp("hsla" + Er),
        hsv: new RegExp("hsv" + wr),
        hsva: new RegExp("hsva" + Er),
        hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
        hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
    };
    function K0(e) {
        if (e = e.trim().toLowerCase(), e.length === 0) return !1;
        var t = !1;
        if (Nr[e]) e = Nr[e], t = !0;
        else if (e === "transparent") return {
            r: 0,
            g: 0,
            b: 0,
            a: 0,
            format: "name"
        };
        var n = Ie.rgb.exec(e);
        return n ? {
            r: n[1],
            g: n[2],
            b: n[3]
        } : (n = Ie.rgba.exec(e), n ? {
            r: n[1],
            g: n[2],
            b: n[3],
            a: n[4]
        } : (n = Ie.hsl.exec(e), n ? {
            h: n[1],
            s: n[2],
            l: n[3]
        } : (n = Ie.hsla.exec(e), n ? {
            h: n[1],
            s: n[2],
            l: n[3],
            a: n[4]
        } : (n = Ie.hsv.exec(e), n ? {
            h: n[1],
            s: n[2],
            v: n[3]
        } : (n = Ie.hsva.exec(e), n ? {
            h: n[1],
            s: n[2],
            v: n[3],
            a: n[4]
        } : (n = Ie.hex8.exec(e), n ? {
            r: ye(n[1]),
            g: ye(n[2]),
            b: ye(n[3]),
            a: oa(n[4]),
            format: t ? "name" : "hex8"
        } : (n = Ie.hex6.exec(e), n ? {
            r: ye(n[1]),
            g: ye(n[2]),
            b: ye(n[3]),
            format: t ? "name" : "hex"
        } : (n = Ie.hex4.exec(e), n ? {
            r: ye(n[1] + n[1]),
            g: ye(n[2] + n[2]),
            b: ye(n[3] + n[3]),
            a: oa(n[4] + n[4]),
            format: t ? "name" : "hex8"
        } : (n = Ie.hex3.exec(e), n ? {
            r: ye(n[1] + n[1]),
            g: ye(n[2] + n[2]),
            b: ye(n[3] + n[3]),
            format: t ? "name" : "hex"
        } : !1)))))))));
    }
    function qe(e) {
        return !!Ie.CSS_UNIT.exec(String(e));
    }
    var G0 = function() {
        function e(t, n) {
            t === void 0 && (t = ""), n === void 0 && (n = {});
            var r;
            if (t instanceof e) return t;
            typeof t == "number" && (t = U0(t)), this.originalInput = t;
            var o = H0(t);
            this.originalInput = t, this.r = o.r, this.g = o.g, this.b = o.b, this.a = o.a, this.roundA = Math.round(100 * this.a) / 100, this.format = (r = n.format) !== null && r !== void 0 ? r : o.format, this.gradientType = n.gradientType, this.r < 1 && (this.r = Math.round(this.r)), this.g < 1 && (this.g = Math.round(this.g)), this.b < 1 && (this.b = Math.round(this.b)), this.isValid = o.ok;
        }
        return e.prototype.isDark = function() {
            return this.getBrightness() < 128;
        }, e.prototype.isLight = function() {
            return !this.isDark();
        }, e.prototype.getBrightness = function() {
            var t = this.toRgb();
            return (t.r * 299 + t.g * 587 + t.b * 114) / 1e3;
        }, e.prototype.getLuminance = function() {
            var t = this.toRgb(), n, r, o, s = t.r / 255, a = t.g / 255, i = t.b / 255;
            return s <= .03928 ? n = s / 12.92 : n = Math.pow((s + .055) / 1.055, 2.4), a <= .03928 ? r = a / 12.92 : r = Math.pow((a + .055) / 1.055, 2.4), i <= .03928 ? o = i / 12.92 : o = Math.pow((i + .055) / 1.055, 2.4), .2126 * n + .7152 * r + .0722 * o;
        }, e.prototype.getAlpha = function() {
            return this.a;
        }, e.prototype.setAlpha = function(t) {
            return this.a = Ni(t), this.roundA = Math.round(100 * this.a) / 100, this;
        }, e.prototype.isMonochrome = function() {
            var t = this.toHsl().s;
            return t === 0;
        }, e.prototype.toHsv = function() {
            var t = na(this.r, this.g, this.b);
            return {
                h: t.h * 360,
                s: t.s,
                v: t.v,
                a: this.a
            };
        }, e.prototype.toHsvString = function() {
            var t = na(this.r, this.g, this.b), n = Math.round(t.h * 360), r = Math.round(t.s * 100), o = Math.round(t.v * 100);
            return this.a === 1 ? "hsv(".concat(n, ", ").concat(r, "%, ").concat(o, "%)") : "hsva(".concat(n, ", ").concat(r, "%, ").concat(o, "%, ").concat(this.roundA, ")");
        }, e.prototype.toHsl = function() {
            var t = ta(this.r, this.g, this.b);
            return {
                h: t.h * 360,
                s: t.s,
                l: t.l,
                a: this.a
            };
        }, e.prototype.toHslString = function() {
            var t = ta(this.r, this.g, this.b), n = Math.round(t.h * 360), r = Math.round(t.s * 100), o = Math.round(t.l * 100);
            return this.a === 1 ? "hsl(".concat(n, ", ").concat(r, "%, ").concat(o, "%)") : "hsla(".concat(n, ", ").concat(r, "%, ").concat(o, "%, ").concat(this.roundA, ")");
        }, e.prototype.toHex = function(t) {
            return t === void 0 && (t = !1), ra(this.r, this.g, this.b, t);
        }, e.prototype.toHexString = function(t) {
            return t === void 0 && (t = !1), "#" + this.toHex(t);
        }, e.prototype.toHex8 = function(t) {
            return t === void 0 && (t = !1), F0(this.r, this.g, this.b, this.a, t);
        }, e.prototype.toHex8String = function(t) {
            return t === void 0 && (t = !1), "#" + this.toHex8(t);
        }, e.prototype.toHexShortString = function(t) {
            return t === void 0 && (t = !1), this.a === 1 ? this.toHexString(t) : this.toHex8String(t);
        }, e.prototype.toRgb = function() {
            return {
                r: Math.round(this.r),
                g: Math.round(this.g),
                b: Math.round(this.b),
                a: this.a
            };
        }, e.prototype.toRgbString = function() {
            var t = Math.round(this.r), n = Math.round(this.g), r = Math.round(this.b);
            return this.a === 1 ? "rgb(".concat(t, ", ").concat(n, ", ").concat(r, ")") : "rgba(".concat(t, ", ").concat(n, ", ").concat(r, ", ").concat(this.roundA, ")");
        }, e.prototype.toPercentageRgb = function() {
            var t = function(n) {
                return "".concat(Math.round(ue(n, 255) * 100), "%");
            };
            return {
                r: t(this.r),
                g: t(this.g),
                b: t(this.b),
                a: this.a
            };
        }, e.prototype.toPercentageRgbString = function() {
            var t = function(n) {
                return Math.round(ue(n, 255) * 100);
            };
            return this.a === 1 ? "rgb(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%)") : "rgba(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%, ").concat(this.roundA, ")");
        }, e.prototype.toName = function() {
            if (this.a === 0) return "transparent";
            if (this.a < 1) return !1;
            for(var t = "#" + ra(this.r, this.g, this.b, !1), n = 0, r = Object.entries(Nr); n < r.length; n++){
                var o = r[n], s = o[0], a = o[1];
                if (t === a) return s;
            }
            return !1;
        }, e.prototype.toString = function(t) {
            var n = !!t;
            t = t ?? this.format;
            var r = !1, o = this.a < 1 && this.a >= 0, s = !n && o && (t.startsWith("hex") || t === "name");
            return s ? t === "name" && this.a === 0 ? this.toName() : this.toRgbString() : (t === "rgb" && (r = this.toRgbString()), t === "prgb" && (r = this.toPercentageRgbString()), (t === "hex" || t === "hex6") && (r = this.toHexString()), t === "hex3" && (r = this.toHexString(!0)), t === "hex4" && (r = this.toHex8String(!0)), t === "hex8" && (r = this.toHex8String()), t === "name" && (r = this.toName()), t === "hsl" && (r = this.toHslString()), t === "hsv" && (r = this.toHsvString()), r || this.toHexString());
        }, e.prototype.toNumber = function() {
            return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
        }, e.prototype.clone = function() {
            return new e(this.toString());
        }, e.prototype.lighten = function(t) {
            t === void 0 && (t = 10);
            var n = this.toHsl();
            return n.l += t / 100, n.l = jn(n.l), new e(n);
        }, e.prototype.brighten = function(t) {
            t === void 0 && (t = 10);
            var n = this.toRgb();
            return n.r = Math.max(0, Math.min(255, n.r - Math.round(255 * -(t / 100)))), n.g = Math.max(0, Math.min(255, n.g - Math.round(255 * -(t / 100)))), n.b = Math.max(0, Math.min(255, n.b - Math.round(255 * -(t / 100)))), new e(n);
        }, e.prototype.darken = function(t) {
            t === void 0 && (t = 10);
            var n = this.toHsl();
            return n.l -= t / 100, n.l = jn(n.l), new e(n);
        }, e.prototype.tint = function(t) {
            return t === void 0 && (t = 10), this.mix("white", t);
        }, e.prototype.shade = function(t) {
            return t === void 0 && (t = 10), this.mix("black", t);
        }, e.prototype.desaturate = function(t) {
            t === void 0 && (t = 10);
            var n = this.toHsl();
            return n.s -= t / 100, n.s = jn(n.s), new e(n);
        }, e.prototype.saturate = function(t) {
            t === void 0 && (t = 10);
            var n = this.toHsl();
            return n.s += t / 100, n.s = jn(n.s), new e(n);
        }, e.prototype.greyscale = function() {
            return this.desaturate(100);
        }, e.prototype.spin = function(t) {
            var n = this.toHsl(), r = (n.h + t) % 360;
            return n.h = r < 0 ? 360 + r : r, new e(n);
        }, e.prototype.mix = function(t, n) {
            n === void 0 && (n = 50);
            var r = this.toRgb(), o = new e(t).toRgb(), s = n / 100, a = {
                r: (o.r - r.r) * s + r.r,
                g: (o.g - r.g) * s + r.g,
                b: (o.b - r.b) * s + r.b,
                a: (o.a - r.a) * s + r.a
            };
            return new e(a);
        }, e.prototype.analogous = function(t, n) {
            t === void 0 && (t = 6), n === void 0 && (n = 30);
            var r = this.toHsl(), o = 360 / n, s = [
                this
            ];
            for(r.h = (r.h - (o * t >> 1) + 720) % 360; --t;)r.h = (r.h + o) % 360, s.push(new e(r));
            return s;
        }, e.prototype.complement = function() {
            var t = this.toHsl();
            return t.h = (t.h + 180) % 360, new e(t);
        }, e.prototype.monochromatic = function(t) {
            t === void 0 && (t = 6);
            for(var n = this.toHsv(), r = n.h, o = n.s, s = n.v, a = [], i = 1 / t; t--;)a.push(new e({
                h: r,
                s: o,
                v: s
            })), s = (s + i) % 1;
            return a;
        }, e.prototype.splitcomplement = function() {
            var t = this.toHsl(), n = t.h;
            return [
                this,
                new e({
                    h: (n + 72) % 360,
                    s: t.s,
                    l: t.l
                }),
                new e({
                    h: (n + 216) % 360,
                    s: t.s,
                    l: t.l
                })
            ];
        }, e.prototype.onBackground = function(t) {
            var n = this.toRgb(), r = new e(t).toRgb(), o = n.a + r.a * (1 - n.a);
            return new e({
                r: (n.r * n.a + r.r * r.a * (1 - n.a)) / o,
                g: (n.g * n.a + r.g * r.a * (1 - n.a)) / o,
                b: (n.b * n.a + r.b * r.a * (1 - n.a)) / o,
                a: o
            });
        }, e.prototype.triad = function() {
            return this.polyad(3);
        }, e.prototype.tetrad = function() {
            return this.polyad(4);
        }, e.prototype.polyad = function(t) {
            for(var n = this.toHsl(), r = n.h, o = [
                this
            ], s = 360 / t, a = 1; a < t; a++)o.push(new e({
                h: (r + a * s) % 360,
                s: n.s,
                l: n.l
            }));
            return o;
        }, e.prototype.equals = function(t) {
            return this.toRgbString() === new e(t).toRgbString();
        }, e;
    }();
    function ut(e, t = 20) {
        return e.mix("#141414", t).toString();
    }
    function J0(e) {
        const t = Co(), n = te("button");
        return b(()=>{
            let r = {}, o = e.color;
            if (o) {
                const s = o.match(/var\((.*?)\)/);
                s && (o = window.getComputedStyle(window.document.documentElement).getPropertyValue(s[1]));
                const a = new G0(o), i = e.dark ? a.tint(20).toString() : ut(a, 20);
                if (e.plain) r = n.cssVarBlock({
                    "bg-color": e.dark ? ut(a, 90) : a.tint(90).toString(),
                    "text-color": o,
                    "border-color": e.dark ? ut(a, 50) : a.tint(50).toString(),
                    "hover-text-color": `var(${n.cssVarName("color-white")})`,
                    "hover-bg-color": o,
                    "hover-border-color": o,
                    "active-bg-color": i,
                    "active-text-color": `var(${n.cssVarName("color-white")})`,
                    "active-border-color": i
                }), t.value && (r[n.cssVarBlockName("disabled-bg-color")] = e.dark ? ut(a, 90) : a.tint(90).toString(), r[n.cssVarBlockName("disabled-text-color")] = e.dark ? ut(a, 50) : a.tint(50).toString(), r[n.cssVarBlockName("disabled-border-color")] = e.dark ? ut(a, 80) : a.tint(80).toString());
                else {
                    const c = e.dark ? ut(a, 30) : a.tint(30).toString(), l = a.isDark() ? `var(${n.cssVarName("color-white")})` : `var(${n.cssVarName("color-black")})`;
                    if (r = n.cssVarBlock({
                        "bg-color": o,
                        "text-color": l,
                        "border-color": o,
                        "hover-bg-color": c,
                        "hover-text-color": l,
                        "hover-border-color": c,
                        "active-bg-color": i,
                        "active-border-color": i
                    }), t.value) {
                        const u = e.dark ? ut(a, 50) : a.tint(50).toString();
                        r[n.cssVarBlockName("disabled-bg-color")] = u, r[n.cssVarBlockName("disabled-text-color")] = e.dark ? "rgba(255, 255, 255, 0.5)" : `var(${n.cssVarName("color-white")})`, r[n.cssVarBlockName("disabled-border-color")] = u;
                    }
                }
            }
            return r;
        });
    }
    const Y0 = R({
        name: "ElButton"
    }), q0 = R({
        ...Y0,
        props: Fr,
        emits: M0,
        setup (e, { expose: t, emit: n }) {
            const r = e, o = J0(r), s = te("button"), { _ref: a, _size: i, _type: c, _disabled: l, _props: u, shouldAddSpace: f, handleClick: p } = $0(r, n), m = b(()=>[
                    s.b(),
                    s.m(c.value),
                    s.m(i.value),
                    s.is("disabled", l.value),
                    s.is("loading", r.loading),
                    s.is("plain", r.plain),
                    s.is("round", r.round),
                    s.is("circle", r.circle),
                    s.is("text", r.text),
                    s.is("link", r.link),
                    s.is("has-bg", r.bg)
                ]);
            return t({
                ref: a,
                size: i,
                type: c,
                disabled: l,
                shouldAddSpace: f
            }), (h, g)=>(C(), B(ze(h.tag), ot({
                    ref_key: "_ref",
                    ref: a
                }, d(u), {
                    class: d(m),
                    style: d(o),
                    onClick: d(p)
                }), {
                    default: q(()=>[
                            h.loading ? (C(), $(Me, {
                                key: 0
                            }, [
                                h.$slots.loading ? z(h.$slots, "loading", {
                                    key: 0
                                }) : (C(), B(d(we), {
                                    key: 1,
                                    class: I(d(s).is("loading"))
                                }, {
                                    default: q(()=>[
                                            (C(), B(ze(h.loadingIcon)))
                                        ]),
                                    _: 1
                                }, 8, [
                                    "class"
                                ]))
                            ], 64)) : h.icon || h.$slots.icon ? (C(), B(d(we), {
                                key: 1
                            }, {
                                default: q(()=>[
                                        h.icon ? (C(), B(ze(h.icon), {
                                            key: 0
                                        })) : z(h.$slots, "icon", {
                                            key: 1
                                        })
                                    ]),
                                _: 3
                            })) : j("v-if", !0),
                            h.$slots.default ? (C(), $("span", {
                                key: 2,
                                class: I({
                                    [d(s).em("text", "expand")]: d(f)
                                })
                            }, [
                                z(h.$slots, "default")
                            ], 2)) : j("v-if", !0)
                        ]),
                    _: 3
                }, 16, [
                    "class",
                    "style",
                    "onClick"
                ]));
        }
    });
    var Z0 = oe(q0, [
        [
            "__file",
            "button.vue"
        ]
    ]);
    const X0 = {
        size: Fr.size,
        type: Fr.type
    }, Q0 = R({
        name: "ElButtonGroup"
    }), ev = R({
        ...Q0,
        props: X0,
        setup (e) {
            const t = e;
            He(Fi, ya({
                size: Pe(t, "size"),
                type: Pe(t, "type")
            }));
            const n = te("button");
            return (r, o)=>(C(), $("div", {
                    class: I(d(n).b("group"))
                }, [
                    z(r.$slots, "default")
                ], 2));
        }
    });
    var Ui = oe(ev, [
        [
            "__file",
            "button-group.vue"
        ]
    ]);
    Y_ = Te(Z0, {
        ButtonGroup: Ui
    });
    li(Ui);
    q_ = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
    tv = function(e) {
        return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
    };
    const nv = Z({
        header: {
            type: String,
            default: ""
        },
        footer: {
            type: String,
            default: ""
        },
        bodyStyle: {
            type: L([
                String,
                Object,
                Array
            ]),
            default: ""
        },
        headerClass: String,
        bodyClass: String,
        footerClass: String,
        shadow: {
            type: String,
            values: [
                "always",
                "hover",
                "never"
            ],
            default: "always"
        }
    }), rv = R({
        name: "ElCard"
    }), ov = R({
        ...rv,
        props: nv,
        setup (e) {
            const t = te("card");
            return (n, r)=>(C(), $("div", {
                    class: I([
                        d(t).b(),
                        d(t).is(`${n.shadow}-shadow`)
                    ])
                }, [
                    n.$slots.header || n.header ? (C(), $("div", {
                        key: 0,
                        class: I([
                            d(t).e("header"),
                            n.headerClass
                        ])
                    }, [
                        z(n.$slots, "header", {}, ()=>[
                                dn(Ee(n.header), 1)
                            ])
                    ], 2)) : j("v-if", !0),
                    D("div", {
                        class: I([
                            d(t).e("body"),
                            n.bodyClass
                        ]),
                        style: de(n.bodyStyle)
                    }, [
                        z(n.$slots, "default")
                    ], 6),
                    n.$slots.footer || n.footer ? (C(), $("div", {
                        key: 1,
                        class: I([
                            d(t).e("footer"),
                            n.footerClass
                        ])
                    }, [
                        z(n.$slots, "footer", {}, ()=>[
                                dn(Ee(n.footer), 1)
                            ])
                    ], 2)) : j("v-if", !0)
                ], 2));
        }
    });
    var sv = oe(ov, [
        [
            "__file",
            "card.vue"
        ]
    ]);
    Z_ = Te(sv);
    var Ze = ((e)=>(e[e.TEXT = 1] = "TEXT", e[e.CLASS = 2] = "CLASS", e[e.STYLE = 4] = "STYLE", e[e.PROPS = 8] = "PROPS", e[e.FULL_PROPS = 16] = "FULL_PROPS", e[e.HYDRATE_EVENTS = 32] = "HYDRATE_EVENTS", e[e.STABLE_FRAGMENT = 64] = "STABLE_FRAGMENT", e[e.KEYED_FRAGMENT = 128] = "KEYED_FRAGMENT", e[e.UNKEYED_FRAGMENT = 256] = "UNKEYED_FRAGMENT", e[e.NEED_PATCH = 512] = "NEED_PATCH", e[e.DYNAMIC_SLOTS = 1024] = "DYNAMIC_SLOTS", e[e.HOISTED = -1] = "HOISTED", e[e.BAIL = -2] = "BAIL", e))(Ze || {});
    function Ur(e) {
        return Sn(e) && e.type === Me;
    }
    function av(e) {
        return Sn(e) && e.type === Sa;
    }
    function iv(e) {
        return Sn(e) && !Ur(e) && !av(e);
    }
    let lv, uv, fv;
    cv = Z({
        type: {
            type: String,
            values: [
                "primary",
                "success",
                "info",
                "warning",
                "danger"
            ],
            default: "primary"
        },
        closable: Boolean,
        disableTransitions: Boolean,
        hit: Boolean,
        color: String,
        size: {
            type: String,
            values: mo
        },
        effect: {
            type: String,
            values: [
                "dark",
                "light",
                "plain"
            ],
            default: "light"
        },
        round: Boolean
    });
    lv = {
        close: (e)=>e instanceof MouseEvent,
        click: (e)=>e instanceof MouseEvent
    };
    uv = R({
        name: "ElTag"
    });
    fv = R({
        ...uv,
        props: cv,
        emits: lv,
        setup (e, { emit: t }) {
            const n = e, r = yo(), o = te("tag"), s = b(()=>{
                const { type: l, hit: u, effect: f, closable: p, round: m } = n;
                return [
                    o.b(),
                    o.is("closable", p),
                    o.m(l || "primary"),
                    o.m(r.value),
                    o.m(f),
                    o.is("hit", u),
                    o.is("round", m)
                ];
            }), a = (l)=>{
                t("close", l);
            }, i = (l)=>{
                t("click", l);
            }, c = (l)=>{
                var u, f, p;
                (p = (f = (u = l?.component) == null ? void 0 : u.subTree) == null ? void 0 : f.component) != null && p.bum && (l.component.subTree.component.bum = null);
            };
            return (l, u)=>l.disableTransitions ? (C(), $("span", {
                    key: 0,
                    class: I(d(s)),
                    style: de({
                        backgroundColor: l.color
                    }),
                    onClick: i
                }, [
                    D("span", {
                        class: I(d(o).e("content"))
                    }, [
                        z(l.$slots, "default")
                    ], 2),
                    l.closable ? (C(), B(d(we), {
                        key: 0,
                        class: I(d(o).e("close")),
                        onClick: Yn(a, [
                            "stop"
                        ])
                    }, {
                        default: q(()=>[
                                ce(d(er))
                            ]),
                        _: 1
                    }, 8, [
                        "class",
                        "onClick"
                    ])) : j("v-if", !0)
                ], 6)) : (C(), B(cr, {
                    key: 1,
                    name: `${d(o).namespace.value}-zoom-in-center`,
                    appear: "",
                    onVnodeMounted: c
                }, {
                    default: q(()=>[
                            D("span", {
                                class: I(d(s)),
                                style: de({
                                    backgroundColor: l.color
                                }),
                                onClick: i
                            }, [
                                D("span", {
                                    class: I(d(o).e("content"))
                                }, [
                                    z(l.$slots, "default")
                                ], 2),
                                l.closable ? (C(), B(d(we), {
                                    key: 0,
                                    class: I(d(o).e("close")),
                                    onClick: Yn(a, [
                                        "stop"
                                    ])
                                }, {
                                    default: q(()=>[
                                            ce(d(er))
                                        ]),
                                    _: 1
                                }, 8, [
                                    "class",
                                    "onClick"
                                ])) : j("v-if", !0)
                            ], 6)
                        ]),
                    _: 3
                }, 8, [
                    "name"
                ]));
        }
    });
    var dv = oe(fv, [
        [
            "__file",
            "tag.vue"
        ]
    ]);
    let pv, hv, mv;
    X_ = Te(dv);
    pv = Z({
        type: {
            type: String,
            default: "line",
            values: [
                "line",
                "circle",
                "dashboard"
            ]
        },
        percentage: {
            type: Number,
            default: 0,
            validator: (e)=>e >= 0 && e <= 100
        },
        status: {
            type: String,
            default: "",
            values: [
                "",
                "success",
                "exception",
                "warning"
            ]
        },
        indeterminate: Boolean,
        duration: {
            type: Number,
            default: 3
        },
        strokeWidth: {
            type: Number,
            default: 6
        },
        strokeLinecap: {
            type: L(String),
            default: "round"
        },
        textInside: Boolean,
        width: {
            type: Number,
            default: 126
        },
        showText: {
            type: Boolean,
            default: !0
        },
        color: {
            type: L([
                String,
                Array,
                Function
            ]),
            default: ""
        },
        striped: Boolean,
        stripedFlow: Boolean,
        format: {
            type: L(Function),
            default: (e)=>`${e}%`
        }
    });
    hv = R({
        name: "ElProgress"
    });
    mv = R({
        ...hv,
        props: pv,
        setup (e) {
            const t = e, n = {
                success: "#13ce66",
                exception: "#ff4949",
                warning: "#e6a23c",
                default: "#20a0ff"
            }, r = te("progress"), o = b(()=>{
                const v = {
                    width: `${t.percentage}%`,
                    animationDuration: `${t.duration}s`
                }, T = k(t.percentage);
                return T.includes("gradient") ? v.background = T : v.backgroundColor = T, v;
            }), s = b(()=>(t.strokeWidth / t.width * 100).toFixed(1)), a = b(()=>[
                    "circle",
                    "dashboard"
                ].includes(t.type) ? Number.parseInt(`${50 - Number.parseFloat(s.value) / 2}`, 10) : 0), i = b(()=>{
                const v = a.value, T = t.type === "dashboard";
                return `
          M 50 50
          m 0 ${T ? "" : "-"}${v}
          a ${v} ${v} 0 1 1 0 ${T ? "-" : ""}${v * 2}
          a ${v} ${v} 0 1 1 0 ${T ? "" : "-"}${v * 2}
          `;
            }), c = b(()=>2 * Math.PI * a.value), l = b(()=>t.type === "dashboard" ? .75 : 1), u = b(()=>`${-1 * c.value * (1 - l.value) / 2}px`), f = b(()=>({
                    strokeDasharray: `${c.value * l.value}px, ${c.value}px`,
                    strokeDashoffset: u.value
                })), p = b(()=>({
                    strokeDasharray: `${c.value * l.value * (t.percentage / 100)}px, ${c.value}px`,
                    strokeDashoffset: u.value,
                    transition: "stroke-dasharray 0.6s ease 0s, stroke 0.6s ease, opacity ease 0.6s"
                })), m = b(()=>{
                let v;
                return t.color ? v = k(t.percentage) : v = n[t.status] || n.default, v;
            }), h = b(()=>t.status === "warning" ? di : t.type === "line" ? t.status === "success" ? ui : vo : t.status === "success" ? Qp : er), g = b(()=>t.type === "line" ? 12 + t.strokeWidth * .4 : t.width * .111111 + 2), _ = b(()=>t.format(t.percentage));
            function y(v) {
                const T = 100 / v.length;
                return v.map((w, E)=>nt(w) ? {
                        color: w,
                        percentage: (E + 1) * T
                    } : w).sort((w, E)=>w.percentage - E.percentage);
            }
            const k = (v)=>{
                var T;
                const { color: S } = t;
                if (Be(S)) return S(v);
                if (nt(S)) return S;
                {
                    const w = y(S);
                    for (const E of w)if (E.percentage > v) return E.color;
                    return (T = w[w.length - 1]) == null ? void 0 : T.color;
                }
            };
            return (v, T)=>(C(), $("div", {
                    class: I([
                        d(r).b(),
                        d(r).m(v.type),
                        d(r).is(v.status),
                        {
                            [d(r).m("without-text")]: !v.showText,
                            [d(r).m("text-inside")]: v.textInside
                        }
                    ]),
                    role: "progressbar",
                    "aria-valuenow": v.percentage,
                    "aria-valuemin": "0",
                    "aria-valuemax": "100"
                }, [
                    v.type === "line" ? (C(), $("div", {
                        key: 0,
                        class: I(d(r).b("bar"))
                    }, [
                        D("div", {
                            class: I(d(r).be("bar", "outer")),
                            style: de({
                                height: `${v.strokeWidth}px`
                            })
                        }, [
                            D("div", {
                                class: I([
                                    d(r).be("bar", "inner"),
                                    {
                                        [d(r).bem("bar", "inner", "indeterminate")]: v.indeterminate
                                    },
                                    {
                                        [d(r).bem("bar", "inner", "striped")]: v.striped
                                    },
                                    {
                                        [d(r).bem("bar", "inner", "striped-flow")]: v.stripedFlow
                                    }
                                ]),
                                style: de(d(o))
                            }, [
                                (v.showText || v.$slots.default) && v.textInside ? (C(), $("div", {
                                    key: 0,
                                    class: I(d(r).be("bar", "innerText"))
                                }, [
                                    z(v.$slots, "default", {
                                        percentage: v.percentage
                                    }, ()=>[
                                            D("span", null, Ee(d(_)), 1)
                                        ])
                                ], 2)) : j("v-if", !0)
                            ], 6)
                        ], 6)
                    ], 2)) : (C(), $("div", {
                        key: 1,
                        class: I(d(r).b("circle")),
                        style: de({
                            height: `${v.width}px`,
                            width: `${v.width}px`
                        })
                    }, [
                        (C(), $("svg", {
                            viewBox: "0 0 100 100"
                        }, [
                            D("path", {
                                class: I(d(r).be("circle", "track")),
                                d: d(i),
                                stroke: `var(${d(r).cssVarName("fill-color-light")}, #e5e9f2)`,
                                "stroke-linecap": v.strokeLinecap,
                                "stroke-width": d(s),
                                fill: "none",
                                style: de(d(f))
                            }, null, 14, [
                                "d",
                                "stroke",
                                "stroke-linecap",
                                "stroke-width"
                            ]),
                            D("path", {
                                class: I(d(r).be("circle", "path")),
                                d: d(i),
                                stroke: d(m),
                                fill: "none",
                                opacity: v.percentage ? 1 : 0,
                                "stroke-linecap": v.strokeLinecap,
                                "stroke-width": d(s),
                                style: de(d(p))
                            }, null, 14, [
                                "d",
                                "stroke",
                                "opacity",
                                "stroke-linecap",
                                "stroke-width"
                            ])
                        ]))
                    ], 6)),
                    (v.showText || v.$slots.default) && !v.textInside ? (C(), $("div", {
                        key: 2,
                        class: I(d(r).e("text")),
                        style: de({
                            fontSize: `${d(g)}px`
                        })
                    }, [
                        z(v.$slots, "default", {
                            percentage: v.percentage
                        }, ()=>[
                                v.status ? (C(), B(d(we), {
                                    key: 1
                                }, {
                                    default: q(()=>[
                                            (C(), B(ze(d(h))))
                                        ]),
                                    _: 1
                                })) : (C(), $("span", {
                                    key: 0
                                }, Ee(d(_)), 1))
                            ])
                    ], 6)) : j("v-if", !0)
                ], 10, [
                    "aria-valuenow"
                ]));
        }
    });
    var gv = oe(mv, [
        [
            "__file",
            "progress.vue"
        ]
    ]);
    let vv, bv, _v, yv;
    Q_ = Te(gv);
    vv = Z({
        animated: {
            type: Boolean,
            default: !1
        },
        count: {
            type: Number,
            default: 1
        },
        rows: {
            type: Number,
            default: 3
        },
        loading: {
            type: Boolean,
            default: !0
        },
        throttle: {
            type: L([
                Number,
                Object
            ])
        }
    });
    bv = Z({
        variant: {
            type: String,
            values: [
                "circle",
                "rect",
                "h1",
                "h3",
                "text",
                "caption",
                "p",
                "image",
                "button"
            ],
            default: "text"
        }
    });
    _v = R({
        name: "ElSkeletonItem"
    });
    yv = R({
        ..._v,
        props: bv,
        setup (e) {
            const t = te("skeleton");
            return (n, r)=>(C(), $("div", {
                    class: I([
                        d(t).e("item"),
                        d(t).e(n.variant)
                    ])
                }, [
                    n.variant === "image" ? (C(), B(d(hh), {
                        key: 0
                    })) : j("v-if", !0)
                ], 2));
        }
    });
    var or = oe(yv, [
        [
            "__file",
            "skeleton-item.vue"
        ]
    ]);
    const Cv = (e, t = 0)=>{
        if (t === 0) return e;
        const n = dt(t) && !!t.initVal, r = P(n);
        let o = null;
        const s = (i)=>{
            if (Ya(i)) {
                r.value = e.value;
                return;
            }
            o && clearTimeout(o), o = setTimeout(()=>{
                r.value = e.value;
            }, i);
        }, a = (i)=>{
            i === "leading" ? le(t) ? s(t) : s(t.leading) : dt(t) ? s(t.trailing) : r.value = !1;
        };
        return Se(()=>a("leading")), F(()=>e.value, (i)=>{
            a(i ? "leading" : "trailing");
        }), r;
    }, Sv = R({
        name: "ElSkeleton"
    }), Tv = R({
        ...Sv,
        props: vv,
        setup (e, { expose: t }) {
            const n = e, r = te("skeleton"), o = Cv(Pe(n, "loading"), n.throttle);
            return t({
                uiLoading: o
            }), (s, a)=>d(o) ? (C(), $("div", ot({
                    key: 0,
                    class: [
                        d(r).b(),
                        d(r).is("animated", s.animated)
                    ]
                }, s.$attrs), [
                    (C(!0), $(Me, null, Wo(s.count, (i)=>(C(), $(Me, {
                            key: i
                        }, [
                            d(o) ? z(s.$slots, "template", {
                                key: i
                            }, ()=>[
                                    ce(or, {
                                        class: I(d(r).is("first")),
                                        variant: "p"
                                    }, null, 8, [
                                        "class"
                                    ]),
                                    (C(!0), $(Me, null, Wo(s.rows, (c)=>(C(), B(or, {
                                            key: c,
                                            class: I([
                                                d(r).e("paragraph"),
                                                d(r).is("last", c === s.rows && s.rows > 1)
                                            ]),
                                            variant: "p"
                                        }, null, 8, [
                                            "class"
                                        ]))), 128))
                                ]) : j("v-if", !0)
                        ], 64))), 128))
                ], 16)) : z(s.$slots, "default", Wc(ot({
                    key: 1
                }, s.$attrs)));
        }
    });
    var xv = oe(Tv, [
        [
            "__file",
            "skeleton.vue"
        ]
    ]);
    kv = Te(xv, {
        SkeletonItem: or
    });
    li(or);
    const wv = Z({
        prefixCls: {
            type: String
        }
    }), sa = R({
        name: "ElSpaceItem",
        props: wv,
        setup (e, { slots: t }) {
            const n = te("space"), r = b(()=>`${e.prefixCls || n.b()}__item`);
            return ()=>Kc("div", {
                    class: r.value
                }, z(t, "default"));
        }
    }), aa = {
        small: 8,
        default: 12,
        large: 16
    };
    function Ev(e) {
        const t = te("space"), n = b(()=>[
                t.b(),
                t.m(e.direction),
                e.class
            ]), r = P(0), o = P(0), s = b(()=>{
            const i = e.wrap || e.fill ? {
                flexWrap: "wrap"
            } : {}, c = {
                alignItems: e.alignment
            }, l = {
                rowGap: `${o.value}px`,
                columnGap: `${r.value}px`
            };
            return [
                i,
                c,
                l,
                e.style
            ];
        }), a = b(()=>e.fill ? {
                flexGrow: 1,
                minWidth: `${e.fillRatio}%`
            } : {});
        return _a(()=>{
            const { size: i = "small", wrap: c, direction: l, fill: u } = e;
            if (jt(i)) {
                const [f = 0, p = 0] = i;
                r.value = f, o.value = p;
            } else {
                let f;
                le(i) ? f = i : f = aa[i || "small"] || aa.small, (c || u) && l === "horizontal" ? r.value = o.value = f : l === "horizontal" ? (r.value = f, o.value = 0) : (o.value = f, r.value = 0);
            }
        }), {
            classes: n,
            containerStyle: s,
            itemStyle: a
        };
    }
    let Pv, Rv, Ov, $v;
    Pv = Z({
        direction: {
            type: String,
            values: [
                "horizontal",
                "vertical"
            ],
            default: "horizontal"
        },
        class: {
            type: L([
                String,
                Object,
                Array
            ]),
            default: ""
        },
        style: {
            type: L([
                String,
                Array,
                Object
            ]),
            default: ""
        },
        alignment: {
            type: L(String),
            default: "center"
        },
        prefixCls: {
            type: String
        },
        spacer: {
            type: L([
                Object,
                String,
                Number,
                Array
            ]),
            default: null,
            validator: (e)=>Sn(e) || le(e) || nt(e)
        },
        wrap: Boolean,
        fill: Boolean,
        fillRatio: {
            type: Number,
            default: 100
        },
        size: {
            type: [
                String,
                Array,
                Number
            ],
            values: mo,
            validator: (e)=>le(e) || jt(e) && e.length === 2 && e.every(le)
        }
    });
    Rv = R({
        name: "ElSpace",
        props: Pv,
        setup (e, { slots: t }) {
            const { classes: n, containerStyle: r, itemStyle: o } = Ev(e);
            function s(a, i = "", c = []) {
                const { prefixCls: l } = e;
                return a.forEach((u, f)=>{
                    Ur(u) ? jt(u.children) && u.children.forEach((p, m)=>{
                        Ur(p) && jt(p.children) ? s(p.children, `${i + m}-`, c) : c.push(ce(sa, {
                            style: o.value,
                            prefixCls: l,
                            key: `nested-${i + m}`
                        }, {
                            default: ()=>[
                                    p
                                ]
                        }, Ze.PROPS | Ze.STYLE, [
                            "style",
                            "prefixCls"
                        ]));
                    }) : iv(u) && c.push(ce(sa, {
                        style: o.value,
                        prefixCls: l,
                        key: `LoopKey${i + f}`
                    }, {
                        default: ()=>[
                                u
                            ]
                    }, Ze.PROPS | Ze.STYLE, [
                        "style",
                        "prefixCls"
                    ]));
                }), c;
            }
            return ()=>{
                var a;
                const { spacer: i, direction: c } = e, l = z(t, "default", {
                    key: 0
                }, ()=>[]);
                if (((a = l.children) != null ? a : []).length === 0) return null;
                if (jt(l.children)) {
                    let u = s(l.children);
                    if (i) {
                        const f = u.length - 1;
                        u = u.reduce((p, m, h)=>{
                            const g = [
                                ...p,
                                m
                            ];
                            return h !== f && g.push(ce("span", {
                                style: [
                                    o.value,
                                    c === "vertical" ? "width: 100%" : null
                                ],
                                key: h
                            }, [
                                Sn(i) ? i : dn(i, Ze.TEXT)
                            ], Ze.STYLE)), g;
                        }, []);
                    }
                    return ce("div", {
                        class: n.value,
                        style: r.value
                    }, u, Ze.STYLE | Ze.CLASS);
                }
                return l.children;
            };
        }
    });
    ey = Te(Rv);
    Ov = "/assets/frontend_bg-B628T4EP.wasm";
    $v = async (e = {}, t)=>{
        let n;
        if (t.startsWith("data:")) {
            const r = t.replace(/^data:.*?base64,/, "");
            let o;
            if (typeof Buffer == "function" && typeof Buffer.from == "function") o = Buffer.from(r, "base64");
            else if (typeof atob == "function") {
                const s = atob(r);
                o = new Uint8Array(s.length);
                for(let a = 0; a < s.length; a++)o[a] = s.charCodeAt(a);
            } else throw new Error("Cannot decode base64-encoded data URL");
            n = await WebAssembly.instantiate(o, e);
        } else {
            const r = await fetch(t), o = r.headers.get("Content-Type") || "";
            if ("instantiateStreaming" in WebAssembly && o.startsWith("application/wasm")) n = await WebAssembly.instantiateStreaming(r, e);
            else {
                const s = await r.arrayBuffer();
                n = await WebAssembly.instantiate(s, e);
            }
        }
        return n.instance.exports;
    };
    let se;
    function Iv(e) {
        se = e;
    }
    const Av = typeof TextDecoder > "u" ? (0, module.require)("util").TextDecoder : TextDecoder;
    let Hi = new Av("utf-8", {
        ignoreBOM: !0,
        fatal: !0
    });
    Hi.decode();
    let zn = null;
    function Bt() {
        return (zn === null || zn.byteLength === 0) && (zn = new Uint8Array(se.memory.buffer)), zn;
    }
    function Lo(e, t) {
        return e = e >>> 0, Hi.decode(Bt().subarray(e, e + t));
    }
    function Mv(e) {
        const t = se.__externref_table_alloc();
        return se.__wbindgen_export_2.set(t, e), t;
    }
    function jo(e, t) {
        try {
            return e.apply(this, t);
        } catch (n) {
            const r = Mv(n);
            se.__wbindgen_exn_store(r);
        }
    }
    const ia = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((e)=>{
        se.__wbindgen_export_3.get(e.dtor)(e.a, e.b);
    });
    function Dv(e, t, n, r) {
        const o = {
            a: e,
            b: t,
            cnt: 1,
            dtor: n
        }, s = (...a)=>{
            o.cnt++;
            const i = o.a;
            o.a = 0;
            try {
                return r(i, o.b, ...a);
            } finally{
                --o.cnt === 0 ? (se.__wbindgen_export_3.get(o.dtor)(i, o.b), ia.unregister(o)) : o.a = i;
            }
        };
        return s.original = o, ia.register(s, o, o), s;
    }
    function Hr(e) {
        const t = typeof e;
        if (t == "number" || t == "boolean" || e == null) return `${e}`;
        if (t == "string") return `"${e}"`;
        if (t == "symbol") {
            const o = e.description;
            return o == null ? "Symbol" : `Symbol(${o})`;
        }
        if (t == "function") {
            const o = e.name;
            return typeof o == "string" && o.length > 0 ? `Function(${o})` : "Function";
        }
        if (Array.isArray(e)) {
            const o = e.length;
            let s = "[";
            o > 0 && (s += Hr(e[0]));
            for(let a = 1; a < o; a++)s += ", " + Hr(e[a]);
            return s += "]", s;
        }
        const n = /\[object ([^\]]+)\]/.exec(toString.call(e));
        let r;
        if (n && n.length > 1) r = n[1];
        else return toString.call(e);
        if (r == "Object") try {
            return "Object(" + JSON.stringify(e) + ")";
        } catch  {
            return "Object";
        }
        return e instanceof Error ? `${e.name}: ${e.message}
${e.stack}` : r;
    }
    let bn = 0;
    const Lv = typeof TextEncoder > "u" ? (0, module.require)("util").TextEncoder : TextEncoder;
    let Un = new Lv("utf-8");
    const jv = typeof Un.encodeInto == "function" ? function(e, t) {
        return Un.encodeInto(e, t);
    } : function(e, t) {
        const n = Un.encode(e);
        return t.set(n), {
            read: e.length,
            written: n.length
        };
    };
    function Bv(e, t, n) {
        if (n === void 0) {
            const i = Un.encode(e), c = t(i.length, 1) >>> 0;
            return Bt().subarray(c, c + i.length).set(i), bn = i.length, c;
        }
        let r = e.length, o = t(r, 1) >>> 0;
        const s = Bt();
        let a = 0;
        for(; a < r; a++){
            const i = e.charCodeAt(a);
            if (i > 127) break;
            s[o + a] = i;
        }
        if (a !== r) {
            a !== 0 && (e = e.slice(a)), o = n(o, r, r = a + e.length * 3, 1) >>> 0;
            const i = Bt().subarray(o + a, o + r), c = jv(e, i);
            a += c.written, o = n(o, r, a, 1) >>> 0;
        }
        return bn = a, o;
    }
    let Mt = null;
    function ca() {
        return (Mt === null || Mt.buffer.detached === !0 || Mt.buffer.detached === void 0 && Mt.buffer !== se.memory.buffer) && (Mt = new DataView(se.memory.buffer)), Mt;
    }
    function zv(e, t) {
        const n = t(e.length * 1, 1) >>> 0;
        return Bt().set(e, n / 1), bn = e.length, n;
    }
    function Fv(e) {
        const t = se.__wbindgen_export_2.get(e);
        return se.__externref_table_dealloc(e), t;
    }
    function Nv(e, t) {
        return e = e >>> 0, Bt().subarray(e / 1, e / 1 + t);
    }
    ty = function(e, t) {
        const n = zv(e, se.__wbindgen_malloc), r = bn, o = se.decompress(n, r, t);
        if (o[3]) throw Fv(o[2]);
        var s = Nv(o[0], o[1]).slice();
        return se.__wbindgen_free(o[0], o[1] * 1, 1), s;
    };
    function Uv(e, t, n) {
        se.closure21_externref_shim(e, t, n);
    }
    ny = Object.freeze({
        Gzip: 0,
        0: "Gzip",
        Zstd: 1,
        1: "Zstd",
        Snappy: 2,
        2: "Snappy",
        Lz4: 3,
        3: "Lz4"
    });
    typeof FinalizationRegistry > "u" || new FinalizationRegistry((e)=>se.__wbg_compressionoptions_free(e >>> 0, 1));
    function Hv(e, t) {
        alert(Lo(e, t));
    }
    function Vv(e) {
        return e.buffer;
    }
    function Wv(e) {
        console.error(e);
    }
    function Kv(e) {
        return e.length;
    }
    function Gv(e) {
        console.log(e);
    }
    function Jv(e) {
        return new Uint8Array(e);
    }
    function Yv() {
        return jo(function() {
            return new FileReader;
        }, arguments);
    }
    function qv() {
        return jo(function(e, t) {
            e.readAsArrayBuffer(t);
        }, arguments);
    }
    function Zv() {
        return jo(function(e) {
            return e.result;
        }, arguments);
    }
    function Xv(e, t, n) {
        e.set(t, n >>> 0);
    }
    function Qv(e, t) {
        e.onloadend = t;
    }
    function eb(e) {
        const t = e.original;
        return t.cnt-- == 1 ? (t.a = 0, !0) : !1;
    }
    function tb(e, t, n) {
        return Dv(e, t, 22, Uv);
    }
    function nb(e, t) {
        const n = Hr(t), r = Bv(n, se.__wbindgen_malloc, se.__wbindgen_realloc), o = bn;
        ca().setInt32(e + 4 * 1, o, !0), ca().setInt32(e + 4 * 0, r, !0);
    }
    function rb() {
        const e = se.__wbindgen_export_2, t = e.grow(4);
        e.set(0, void 0), e.set(t + 0, void 0), e.set(t + 1, null), e.set(t + 2, !0), e.set(t + 3, !1);
    }
    function ob() {
        return se.memory;
    }
    function sb(e, t) {
        return Lo(e, t);
    }
    function ab(e, t) {
        throw new Error(Lo(e, t));
    }
    URL = globalThis.URL;
    const N = await $v({
        "./frontend_bg.js": {
            __wbindgen_string_new: sb,
            __wbindgen_cb_drop: eb,
            __wbg_alert_8640423cd2a33073: Hv,
            __wbg_result_b7f693658f393a91: Zv,
            __wbg_setonloadend_f6f8b9cf21418ab9: Qv,
            __wbg_new_a01d9d610b795c1f: Yv,
            __wbg_readAsArrayBuffer_db7f197b5b6b34cf: qv,
            __wbg_error_fab41a42d22bf2bc: Wv,
            __wbg_log_464d1b2190ca1e04: Gv,
            __wbg_buffer_61b7ce01341d7f88: Vv,
            __wbg_new_3ff5b33b1ce712df: Jv,
            __wbg_set_23d69db4e5c66a6e: Xv,
            __wbg_length_65d1cd11729ced11: Kv,
            __wbindgen_debug_string: nb,
            __wbindgen_throw: ab,
            __wbindgen_memory: ob,
            __wbindgen_closure_wrapper87: tb,
            __wbindgen_init_externref_table: rb
        }
    }, Ov), ib = N.memory, cb = N.compress, lb = N.decompress, ub = N.__wbg_compressionoptions_free, fb = N.compressionoptions_new, db = N.compressionoptions_with_level, pb = N.compress_with_options, hb = N.handle_file_upload, mb = N.greet, gb = N.rust_zstd_wasm_shim_qsort, vb = N.rust_zstd_wasm_shim_malloc, bb = N.rust_zstd_wasm_shim_memcmp, _b = N.rust_zstd_wasm_shim_calloc, yb = N.rust_zstd_wasm_shim_free, Cb = N.rust_zstd_wasm_shim_memcpy, Sb = N.rust_zstd_wasm_shim_memmove, Tb = N.rust_zstd_wasm_shim_memset, xb = N.rust_lz4_wasm_shim_malloc, kb = N.rust_lz4_wasm_shim_memcmp, wb = N.rust_lz4_wasm_shim_calloc, Eb = N.rust_lz4_wasm_shim_free, Pb = N.rust_lz4_wasm_shim_memcpy, Rb = N.rust_lz4_wasm_shim_memmove, Ob = N.rust_lz4_wasm_shim_memset, $b = N.__wbindgen_exn_store, Ib = N.__externref_table_alloc, Ab = N.__wbindgen_export_2, Mb = N.__wbindgen_export_3, Db = N.__wbindgen_malloc, Lb = N.__wbindgen_realloc, jb = N.__externref_table_dealloc, Bb = N.__wbindgen_free, zb = N.closure21_externref_shim, Vi = N.__wbindgen_start, Fb = Object.freeze(Object.defineProperty({
        __proto__: null,
        __externref_table_alloc: Ib,
        __externref_table_dealloc: jb,
        __wbg_compressionoptions_free: ub,
        __wbindgen_exn_store: $b,
        __wbindgen_export_2: Ab,
        __wbindgen_export_3: Mb,
        __wbindgen_free: Bb,
        __wbindgen_malloc: Db,
        __wbindgen_realloc: Lb,
        __wbindgen_start: Vi,
        closure21_externref_shim: zb,
        compress: cb,
        compress_with_options: pb,
        compressionoptions_new: fb,
        compressionoptions_with_level: db,
        decompress: lb,
        greet: mb,
        handle_file_upload: hb,
        memory: ib,
        rust_lz4_wasm_shim_calloc: wb,
        rust_lz4_wasm_shim_free: Eb,
        rust_lz4_wasm_shim_malloc: xb,
        rust_lz4_wasm_shim_memcmp: kb,
        rust_lz4_wasm_shim_memcpy: Pb,
        rust_lz4_wasm_shim_memmove: Rb,
        rust_lz4_wasm_shim_memset: Ob,
        rust_zstd_wasm_shim_calloc: _b,
        rust_zstd_wasm_shim_free: yb,
        rust_zstd_wasm_shim_malloc: vb,
        rust_zstd_wasm_shim_memcmp: bb,
        rust_zstd_wasm_shim_memcpy: Cb,
        rust_zstd_wasm_shim_memmove: Sb,
        rust_zstd_wasm_shim_memset: Tb,
        rust_zstd_wasm_shim_qsort: gb
    }, Symbol.toStringTag, {
        value: "Module"
    }));
    Iv(Fb);
    Vi();
    class Nb {
        constructor(){
            this.encoder = new TextEncoder, this._pieces = [], this._parts = [];
        }
        append_buffer(t) {
            this.flush(), this._parts.push(t);
        }
        append(t) {
            this._pieces.push(t);
        }
        flush() {
            if (this._pieces.length > 0) {
                const t = new Uint8Array(this._pieces);
                this._parts.push(t), this._pieces = [];
            }
        }
        toArrayBuffer() {
            const t = [];
            for (const n of this._parts)t.push(n);
            return Ub(t).buffer;
        }
    }
    function Ub(e) {
        let t = 0;
        for (const o of e)t += o.byteLength;
        const n = new Uint8Array(t);
        let r = 0;
        for (const o of e){
            const s = new Uint8Array(o.buffer, o.byteOffset, o.byteLength);
            n.set(s, r), r += o.byteLength;
        }
        return n;
    }
    function Wi(e) {
        return new Hb(e).unpack();
    }
    function Ki(e) {
        const t = new Vb, n = t.pack(e);
        return n instanceof Promise ? n.then(()=>t.getBuffer()) : t.getBuffer();
    }
    class Hb {
        constructor(t){
            this.index = 0, this.dataBuffer = t, this.dataView = new Uint8Array(this.dataBuffer), this.length = this.dataBuffer.byteLength;
        }
        unpack() {
            const t = this.unpack_uint8();
            if (t < 128) return t;
            if ((t ^ 224) < 32) return (t ^ 224) - 32;
            let n;
            if ((n = t ^ 160) <= 15) return this.unpack_raw(n);
            if ((n = t ^ 176) <= 15) return this.unpack_string(n);
            if ((n = t ^ 144) <= 15) return this.unpack_array(n);
            if ((n = t ^ 128) <= 15) return this.unpack_map(n);
            switch(t){
                case 192:
                    return null;
                case 193:
                    return;
                case 194:
                    return !1;
                case 195:
                    return !0;
                case 202:
                    return this.unpack_float();
                case 203:
                    return this.unpack_double();
                case 204:
                    return this.unpack_uint8();
                case 205:
                    return this.unpack_uint16();
                case 206:
                    return this.unpack_uint32();
                case 207:
                    return this.unpack_uint64();
                case 208:
                    return this.unpack_int8();
                case 209:
                    return this.unpack_int16();
                case 210:
                    return this.unpack_int32();
                case 211:
                    return this.unpack_int64();
                case 212:
                    return;
                case 213:
                    return;
                case 214:
                    return;
                case 215:
                    return;
                case 216:
                    return n = this.unpack_uint16(), this.unpack_string(n);
                case 217:
                    return n = this.unpack_uint32(), this.unpack_string(n);
                case 218:
                    return n = this.unpack_uint16(), this.unpack_raw(n);
                case 219:
                    return n = this.unpack_uint32(), this.unpack_raw(n);
                case 220:
                    return n = this.unpack_uint16(), this.unpack_array(n);
                case 221:
                    return n = this.unpack_uint32(), this.unpack_array(n);
                case 222:
                    return n = this.unpack_uint16(), this.unpack_map(n);
                case 223:
                    return n = this.unpack_uint32(), this.unpack_map(n);
            }
        }
        unpack_uint8() {
            const t = this.dataView[this.index] & 255;
            return this.index++, t;
        }
        unpack_uint16() {
            const t = this.read(2), n = (t[0] & 255) * 256 + (t[1] & 255);
            return this.index += 2, n;
        }
        unpack_uint32() {
            const t = this.read(4), n = ((t[0] * 256 + t[1]) * 256 + t[2]) * 256 + t[3];
            return this.index += 4, n;
        }
        unpack_uint64() {
            const t = this.read(8), n = ((((((t[0] * 256 + t[1]) * 256 + t[2]) * 256 + t[3]) * 256 + t[4]) * 256 + t[5]) * 256 + t[6]) * 256 + t[7];
            return this.index += 8, n;
        }
        unpack_int8() {
            const t = this.unpack_uint8();
            return t < 128 ? t : t - 256;
        }
        unpack_int16() {
            const t = this.unpack_uint16();
            return t < 32768 ? t : t - 65536;
        }
        unpack_int32() {
            const t = this.unpack_uint32();
            return t < 2 ** 31 ? t : t - 2 ** 32;
        }
        unpack_int64() {
            const t = this.unpack_uint64();
            return t < 2 ** 63 ? t : t - 2 ** 64;
        }
        unpack_raw(t) {
            if (this.length < this.index + t) throw new Error(`BinaryPackFailure: index is out of range ${this.index} ${t} ${this.length}`);
            const n = this.dataBuffer.slice(this.index, this.index + t);
            return this.index += t, n;
        }
        unpack_string(t) {
            const n = this.read(t);
            let r = 0, o = "", s, a;
            for(; r < t;)s = n[r], s < 160 ? (a = s, r++) : (s ^ 192) < 32 ? (a = (s & 31) << 6 | n[r + 1] & 63, r += 2) : (s ^ 224) < 16 ? (a = (s & 15) << 12 | (n[r + 1] & 63) << 6 | n[r + 2] & 63, r += 3) : (a = (s & 7) << 18 | (n[r + 1] & 63) << 12 | (n[r + 2] & 63) << 6 | n[r + 3] & 63, r += 4), o += String.fromCodePoint(a);
            return this.index += t, o;
        }
        unpack_array(t) {
            const n = new Array(t);
            for(let r = 0; r < t; r++)n[r] = this.unpack();
            return n;
        }
        unpack_map(t) {
            const n = {};
            for(let r = 0; r < t; r++){
                const o = this.unpack();
                n[o] = this.unpack();
            }
            return n;
        }
        unpack_float() {
            const t = this.unpack_uint32(), n = t >> 31, r = (t >> 23 & 255) - 127, o = t & 8388607 | 8388608;
            return (n === 0 ? 1 : -1) * o * 2 ** (r - 23);
        }
        unpack_double() {
            const t = this.unpack_uint32(), n = this.unpack_uint32(), r = t >> 31, o = (t >> 20 & 2047) - 1023, a = (t & 1048575 | 1048576) * 2 ** (o - 20) + n * 2 ** (o - 52);
            return (r === 0 ? 1 : -1) * a;
        }
        read(t) {
            const n = this.index;
            if (n + t <= this.length) return this.dataView.subarray(n, n + t);
            throw new Error("BinaryPackFailure: read index out of range");
        }
    }
    class Vb {
        getBuffer() {
            return this._bufferBuilder.toArrayBuffer();
        }
        pack(t) {
            if (typeof t == "string") this.pack_string(t);
            else if (typeof t == "number") Math.floor(t) === t ? this.pack_integer(t) : this.pack_double(t);
            else if (typeof t == "boolean") t === !0 ? this._bufferBuilder.append(195) : t === !1 && this._bufferBuilder.append(194);
            else if (t === void 0) this._bufferBuilder.append(192);
            else if (typeof t == "object") if (t === null) this._bufferBuilder.append(192);
            else {
                const n = t.constructor;
                if (t instanceof Array) {
                    const r = this.pack_array(t);
                    if (r instanceof Promise) return r.then(()=>this._bufferBuilder.flush());
                } else if (t instanceof ArrayBuffer) this.pack_bin(new Uint8Array(t));
                else if ("BYTES_PER_ELEMENT" in t) {
                    const r = t;
                    this.pack_bin(new Uint8Array(r.buffer, r.byteOffset, r.byteLength));
                } else if (t instanceof Date) this.pack_string(t.toString());
                else {
                    if (t instanceof Blob) return t.arrayBuffer().then((r)=>{
                        this.pack_bin(new Uint8Array(r)), this._bufferBuilder.flush();
                    });
                    if (n == Object || n.toString().startsWith("class")) {
                        const r = this.pack_object(t);
                        if (r instanceof Promise) return r.then(()=>this._bufferBuilder.flush());
                    } else throw new Error(`Type "${n.toString()}" not yet supported`);
                }
            }
            else throw new Error(`Type "${typeof t}" not yet supported`);
            this._bufferBuilder.flush();
        }
        pack_bin(t) {
            const n = t.length;
            if (n <= 15) this.pack_uint8(160 + n);
            else if (n <= 65535) this._bufferBuilder.append(218), this.pack_uint16(n);
            else if (n <= 4294967295) this._bufferBuilder.append(219), this.pack_uint32(n);
            else throw new Error("Invalid length");
            this._bufferBuilder.append_buffer(t);
        }
        pack_string(t) {
            const n = this._textEncoder.encode(t), r = n.length;
            if (r <= 15) this.pack_uint8(176 + r);
            else if (r <= 65535) this._bufferBuilder.append(216), this.pack_uint16(r);
            else if (r <= 4294967295) this._bufferBuilder.append(217), this.pack_uint32(r);
            else throw new Error("Invalid length");
            this._bufferBuilder.append_buffer(n);
        }
        pack_array(t) {
            const n = t.length;
            if (n <= 15) this.pack_uint8(144 + n);
            else if (n <= 65535) this._bufferBuilder.append(220), this.pack_uint16(n);
            else if (n <= 4294967295) this._bufferBuilder.append(221), this.pack_uint32(n);
            else throw new Error("Invalid length");
            const r = (o)=>{
                if (o < n) {
                    const s = this.pack(t[o]);
                    return s instanceof Promise ? s.then(()=>r(o + 1)) : r(o + 1);
                }
            };
            return r(0);
        }
        pack_integer(t) {
            if (t >= -32 && t <= 127) this._bufferBuilder.append(t & 255);
            else if (t >= 0 && t <= 255) this._bufferBuilder.append(204), this.pack_uint8(t);
            else if (t >= -128 && t <= 127) this._bufferBuilder.append(208), this.pack_int8(t);
            else if (t >= 0 && t <= 65535) this._bufferBuilder.append(205), this.pack_uint16(t);
            else if (t >= -32768 && t <= 32767) this._bufferBuilder.append(209), this.pack_int16(t);
            else if (t >= 0 && t <= 4294967295) this._bufferBuilder.append(206), this.pack_uint32(t);
            else if (t >= -2147483648 && t <= 2147483647) this._bufferBuilder.append(210), this.pack_int32(t);
            else if (t >= -9223372036854776e3 && t <= 9223372036854776e3) this._bufferBuilder.append(211), this.pack_int64(t);
            else if (t >= 0 && t <= 18446744073709552e3) this._bufferBuilder.append(207), this.pack_uint64(t);
            else throw new Error("Invalid integer");
        }
        pack_double(t) {
            let n = 0;
            t < 0 && (n = 1, t = -t);
            const r = Math.floor(Math.log(t) / Math.LN2), o = t / 2 ** r - 1, s = Math.floor(o * 2 ** 52), a = 2 ** 32, i = n << 31 | r + 1023 << 20 | s / a & 1048575, c = s % a;
            this._bufferBuilder.append(203), this.pack_int32(i), this.pack_int32(c);
        }
        pack_object(t) {
            const n = Object.keys(t), r = n.length;
            if (r <= 15) this.pack_uint8(128 + r);
            else if (r <= 65535) this._bufferBuilder.append(222), this.pack_uint16(r);
            else if (r <= 4294967295) this._bufferBuilder.append(223), this.pack_uint32(r);
            else throw new Error("Invalid length");
            const o = (s)=>{
                if (s < n.length) {
                    const a = n[s];
                    if (t.hasOwnProperty(a)) {
                        this.pack(a);
                        const i = this.pack(t[a]);
                        if (i instanceof Promise) return i.then(()=>o(s + 1));
                    }
                    return o(s + 1);
                }
            };
            return o(0);
        }
        pack_uint8(t) {
            this._bufferBuilder.append(t);
        }
        pack_uint16(t) {
            this._bufferBuilder.append(t >> 8), this._bufferBuilder.append(t & 255);
        }
        pack_uint32(t) {
            const n = t & 4294967295;
            this._bufferBuilder.append((n & 4278190080) >>> 24), this._bufferBuilder.append((n & 16711680) >>> 16), this._bufferBuilder.append((n & 65280) >>> 8), this._bufferBuilder.append(n & 255);
        }
        pack_uint64(t) {
            const n = t / 4294967296, r = t % 2 ** 32;
            this._bufferBuilder.append((n & 4278190080) >>> 24), this._bufferBuilder.append((n & 16711680) >>> 16), this._bufferBuilder.append((n & 65280) >>> 8), this._bufferBuilder.append(n & 255), this._bufferBuilder.append((r & 4278190080) >>> 24), this._bufferBuilder.append((r & 16711680) >>> 16), this._bufferBuilder.append((r & 65280) >>> 8), this._bufferBuilder.append(r & 255);
        }
        pack_int8(t) {
            this._bufferBuilder.append(t & 255);
        }
        pack_int16(t) {
            this._bufferBuilder.append((t & 65280) >> 8), this._bufferBuilder.append(t & 255);
        }
        pack_int32(t) {
            this._bufferBuilder.append(t >>> 24 & 255), this._bufferBuilder.append((t & 16711680) >>> 16), this._bufferBuilder.append((t & 65280) >>> 8), this._bufferBuilder.append(t & 255);
        }
        pack_int64(t) {
            const n = Math.floor(t / 4294967296), r = t % 2 ** 32;
            this._bufferBuilder.append((n & 4278190080) >>> 24), this._bufferBuilder.append((n & 16711680) >>> 16), this._bufferBuilder.append((n & 65280) >>> 8), this._bufferBuilder.append(n & 255), this._bufferBuilder.append((r & 4278190080) >>> 24), this._bufferBuilder.append((r & 16711680) >>> 16), this._bufferBuilder.append((r & 65280) >>> 8), this._bufferBuilder.append(r & 255);
        }
        constructor(){
            this._bufferBuilder = new Nb, this._textEncoder = new TextEncoder;
        }
    }
    let Gi = !0, Ji = !0;
    function sn(e, t, n) {
        const r = e.match(t);
        return r && r.length >= n && parseFloat(r[n], 10);
    }
    function wt(e, t, n) {
        if (!e.RTCPeerConnection) return;
        const r = e.RTCPeerConnection.prototype, o = r.addEventListener;
        r.addEventListener = function(a, i) {
            if (a !== t) return o.apply(this, arguments);
            const c = (l)=>{
                const u = n(l);
                u && (i.handleEvent ? i.handleEvent(u) : i(u));
            };
            return this._eventMap = this._eventMap || {}, this._eventMap[t] || (this._eventMap[t] = new Map), this._eventMap[t].set(i, c), o.apply(this, [
                a,
                c
            ]);
        };
        const s = r.removeEventListener;
        r.removeEventListener = function(a, i) {
            if (a !== t || !this._eventMap || !this._eventMap[t]) return s.apply(this, arguments);
            if (!this._eventMap[t].has(i)) return s.apply(this, arguments);
            const c = this._eventMap[t].get(i);
            return this._eventMap[t].delete(i), this._eventMap[t].size === 0 && delete this._eventMap[t], Object.keys(this._eventMap).length === 0 && delete this._eventMap, s.apply(this, [
                a,
                c
            ]);
        }, Object.defineProperty(r, "on" + t, {
            get () {
                return this["_on" + t];
            },
            set (a) {
                this["_on" + t] && (this.removeEventListener(t, this["_on" + t]), delete this["_on" + t]), a && this.addEventListener(t, this["_on" + t] = a);
            },
            enumerable: !0,
            configurable: !0
        });
    }
    function Wb(e) {
        return typeof e != "boolean" ? new Error("Argument type: " + typeof e + ". Please use a boolean.") : (Gi = e, e ? "adapter.js logging disabled" : "adapter.js logging enabled");
    }
    function Kb(e) {
        return typeof e != "boolean" ? new Error("Argument type: " + typeof e + ". Please use a boolean.") : (Ji = !e, "adapter.js deprecation warnings " + (e ? "disabled" : "enabled"));
    }
    function Yi() {
        if (typeof window == "object") {
            if (Gi) return;
            typeof console < "u" && typeof console.log == "function" && console.log.apply(console, arguments);
        }
    }
    function Bo(e, t) {
        Ji && console.warn(e + " is deprecated, please use " + t + " instead.");
    }
    function Gb(e) {
        const t = {
            browser: null,
            version: null
        };
        if (typeof e > "u" || !e.navigator || !e.navigator.userAgent) return t.browser = "Not a browser.", t;
        const { navigator: n } = e;
        if (n.userAgentData && n.userAgentData.brands) {
            const r = n.userAgentData.brands.find((o)=>o.brand === "Chromium");
            if (r) return {
                browser: "chrome",
                version: parseInt(r.version, 10)
            };
        }
        if (n.mozGetUserMedia) t.browser = "firefox", t.version = parseInt(sn(n.userAgent, /Firefox\/(\d+)\./, 1));
        else if (n.webkitGetUserMedia || e.isSecureContext === !1 && e.webkitRTCPeerConnection) t.browser = "chrome", t.version = parseInt(sn(n.userAgent, /Chrom(e|ium)\/(\d+)\./, 2));
        else if (e.RTCPeerConnection && n.userAgent.match(/AppleWebKit\/(\d+)\./)) t.browser = "safari", t.version = parseInt(sn(n.userAgent, /AppleWebKit\/(\d+)\./, 1)), t.supportsUnifiedPlan = e.RTCRtpTransceiver && "currentDirection" in e.RTCRtpTransceiver.prototype, t._safariVersion = sn(n.userAgent, /Version\/(\d+(\.?\d+))/, 1);
        else return t.browser = "Not a supported browser.", t;
        return t;
    }
    function la(e) {
        return Object.prototype.toString.call(e) === "[object Object]";
    }
    function qi(e) {
        return la(e) ? Object.keys(e).reduce(function(t, n) {
            const r = la(e[n]), o = r ? qi(e[n]) : e[n], s = r && !Object.keys(o).length;
            return o === void 0 || s ? t : Object.assign(t, {
                [n]: o
            });
        }, {}) : e;
    }
    function Vr(e, t, n) {
        !t || n.has(t.id) || (n.set(t.id, t), Object.keys(t).forEach((r)=>{
            r.endsWith("Id") ? Vr(e, e.get(t[r]), n) : r.endsWith("Ids") && t[r].forEach((o)=>{
                Vr(e, e.get(o), n);
            });
        }));
    }
    function ua(e, t, n) {
        const r = n ? "outbound-rtp" : "inbound-rtp", o = new Map;
        if (t === null) return o;
        const s = [];
        return e.forEach((a)=>{
            a.type === "track" && a.trackIdentifier === t.id && s.push(a);
        }), s.forEach((a)=>{
            e.forEach((i)=>{
                i.type === r && i.trackId === a.id && Vr(e, i, o);
            });
        }), o;
    }
    const fa = Yi;
    function Zi(e, t) {
        const n = e && e.navigator;
        if (!n.mediaDevices) return;
        const r = function(i) {
            if (typeof i != "object" || i.mandatory || i.optional) return i;
            const c = {};
            return Object.keys(i).forEach((l)=>{
                if (l === "require" || l === "advanced" || l === "mediaSource") return;
                const u = typeof i[l] == "object" ? i[l] : {
                    ideal: i[l]
                };
                u.exact !== void 0 && typeof u.exact == "number" && (u.min = u.max = u.exact);
                const f = function(p, m) {
                    return p ? p + m.charAt(0).toUpperCase() + m.slice(1) : m === "deviceId" ? "sourceId" : m;
                };
                if (u.ideal !== void 0) {
                    c.optional = c.optional || [];
                    let p = {};
                    typeof u.ideal == "number" ? (p[f("min", l)] = u.ideal, c.optional.push(p), p = {}, p[f("max", l)] = u.ideal, c.optional.push(p)) : (p[f("", l)] = u.ideal, c.optional.push(p));
                }
                u.exact !== void 0 && typeof u.exact != "number" ? (c.mandatory = c.mandatory || {}, c.mandatory[f("", l)] = u.exact) : [
                    "min",
                    "max"
                ].forEach((p)=>{
                    u[p] !== void 0 && (c.mandatory = c.mandatory || {}, c.mandatory[f(p, l)] = u[p]);
                });
            }), i.advanced && (c.optional = (c.optional || []).concat(i.advanced)), c;
        }, o = function(i, c) {
            if (t.version >= 61) return c(i);
            if (i = JSON.parse(JSON.stringify(i)), i && typeof i.audio == "object") {
                const l = function(u, f, p) {
                    f in u && !(p in u) && (u[p] = u[f], delete u[f]);
                };
                i = JSON.parse(JSON.stringify(i)), l(i.audio, "autoGainControl", "googAutoGainControl"), l(i.audio, "noiseSuppression", "googNoiseSuppression"), i.audio = r(i.audio);
            }
            if (i && typeof i.video == "object") {
                let l = i.video.facingMode;
                l = l && (typeof l == "object" ? l : {
                    ideal: l
                });
                const u = t.version < 66;
                if (l && (l.exact === "user" || l.exact === "environment" || l.ideal === "user" || l.ideal === "environment") && !(n.mediaDevices.getSupportedConstraints && n.mediaDevices.getSupportedConstraints().facingMode && !u)) {
                    delete i.video.facingMode;
                    let f;
                    if (l.exact === "environment" || l.ideal === "environment" ? f = [
                        "back",
                        "rear"
                    ] : (l.exact === "user" || l.ideal === "user") && (f = [
                        "front"
                    ]), f) return n.mediaDevices.enumerateDevices().then((p)=>{
                        p = p.filter((h)=>h.kind === "videoinput");
                        let m = p.find((h)=>f.some((g)=>h.label.toLowerCase().includes(g)));
                        return !m && p.length && f.includes("back") && (m = p[p.length - 1]), m && (i.video.deviceId = l.exact ? {
                            exact: m.deviceId
                        } : {
                            ideal: m.deviceId
                        }), i.video = r(i.video), fa("chrome: " + JSON.stringify(i)), c(i);
                    });
                }
                i.video = r(i.video);
            }
            return fa("chrome: " + JSON.stringify(i)), c(i);
        }, s = function(i) {
            return t.version >= 64 ? i : {
                name: {
                    PermissionDeniedError: "NotAllowedError",
                    PermissionDismissedError: "NotAllowedError",
                    InvalidStateError: "NotAllowedError",
                    DevicesNotFoundError: "NotFoundError",
                    ConstraintNotSatisfiedError: "OverconstrainedError",
                    TrackStartError: "NotReadableError",
                    MediaDeviceFailedDueToShutdown: "NotAllowedError",
                    MediaDeviceKillSwitchOn: "NotAllowedError",
                    TabCaptureError: "AbortError",
                    ScreenCaptureError: "AbortError",
                    DeviceCaptureError: "AbortError"
                }[i.name] || i.name,
                message: i.message,
                constraint: i.constraint || i.constraintName,
                toString () {
                    return this.name + (this.message && ": ") + this.message;
                }
            };
        }, a = function(i, c, l) {
            o(i, (u)=>{
                n.webkitGetUserMedia(u, c, (f)=>{
                    l && l(s(f));
                });
            });
        };
        if (n.getUserMedia = a.bind(n), n.mediaDevices.getUserMedia) {
            const i = n.mediaDevices.getUserMedia.bind(n.mediaDevices);
            n.mediaDevices.getUserMedia = function(c) {
                return o(c, (l)=>i(l).then((u)=>{
                        if (l.audio && !u.getAudioTracks().length || l.video && !u.getVideoTracks().length) throw u.getTracks().forEach((f)=>{
                            f.stop();
                        }), new DOMException("", "NotFoundError");
                        return u;
                    }, (u)=>Promise.reject(s(u))));
            };
        }
    }
    function Xi(e) {
        e.MediaStream = e.MediaStream || e.webkitMediaStream;
    }
    function Qi(e) {
        if (typeof e == "object" && e.RTCPeerConnection && !("ontrack" in e.RTCPeerConnection.prototype)) {
            Object.defineProperty(e.RTCPeerConnection.prototype, "ontrack", {
                get () {
                    return this._ontrack;
                },
                set (n) {
                    this._ontrack && this.removeEventListener("track", this._ontrack), this.addEventListener("track", this._ontrack = n);
                },
                enumerable: !0,
                configurable: !0
            });
            const t = e.RTCPeerConnection.prototype.setRemoteDescription;
            e.RTCPeerConnection.prototype.setRemoteDescription = function() {
                return this._ontrackpoly || (this._ontrackpoly = (r)=>{
                    r.stream.addEventListener("addtrack", (o)=>{
                        let s;
                        e.RTCPeerConnection.prototype.getReceivers ? s = this.getReceivers().find((i)=>i.track && i.track.id === o.track.id) : s = {
                            track: o.track
                        };
                        const a = new Event("track");
                        a.track = o.track, a.receiver = s, a.transceiver = {
                            receiver: s
                        }, a.streams = [
                            r.stream
                        ], this.dispatchEvent(a);
                    }), r.stream.getTracks().forEach((o)=>{
                        let s;
                        e.RTCPeerConnection.prototype.getReceivers ? s = this.getReceivers().find((i)=>i.track && i.track.id === o.id) : s = {
                            track: o
                        };
                        const a = new Event("track");
                        a.track = o, a.receiver = s, a.transceiver = {
                            receiver: s
                        }, a.streams = [
                            r.stream
                        ], this.dispatchEvent(a);
                    });
                }, this.addEventListener("addstream", this._ontrackpoly)), t.apply(this, arguments);
            };
        } else wt(e, "track", (t)=>(t.transceiver || Object.defineProperty(t, "transceiver", {
                value: {
                    receiver: t.receiver
                }
            }), t));
    }
    function ec(e) {
        if (typeof e == "object" && e.RTCPeerConnection && !("getSenders" in e.RTCPeerConnection.prototype) && "createDTMFSender" in e.RTCPeerConnection.prototype) {
            const t = function(o, s) {
                return {
                    track: s,
                    get dtmf () {
                        return this._dtmf === void 0 && (s.kind === "audio" ? this._dtmf = o.createDTMFSender(s) : this._dtmf = null), this._dtmf;
                    },
                    _pc: o
                };
            };
            if (!e.RTCPeerConnection.prototype.getSenders) {
                e.RTCPeerConnection.prototype.getSenders = function() {
                    return this._senders = this._senders || [], this._senders.slice();
                };
                const o = e.RTCPeerConnection.prototype.addTrack;
                e.RTCPeerConnection.prototype.addTrack = function(i, c) {
                    let l = o.apply(this, arguments);
                    return l || (l = t(this, i), this._senders.push(l)), l;
                };
                const s = e.RTCPeerConnection.prototype.removeTrack;
                e.RTCPeerConnection.prototype.removeTrack = function(i) {
                    s.apply(this, arguments);
                    const c = this._senders.indexOf(i);
                    c !== -1 && this._senders.splice(c, 1);
                };
            }
            const n = e.RTCPeerConnection.prototype.addStream;
            e.RTCPeerConnection.prototype.addStream = function(s) {
                this._senders = this._senders || [], n.apply(this, [
                    s
                ]), s.getTracks().forEach((a)=>{
                    this._senders.push(t(this, a));
                });
            };
            const r = e.RTCPeerConnection.prototype.removeStream;
            e.RTCPeerConnection.prototype.removeStream = function(s) {
                this._senders = this._senders || [], r.apply(this, [
                    s
                ]), s.getTracks().forEach((a)=>{
                    const i = this._senders.find((c)=>c.track === a);
                    i && this._senders.splice(this._senders.indexOf(i), 1);
                });
            };
        } else if (typeof e == "object" && e.RTCPeerConnection && "getSenders" in e.RTCPeerConnection.prototype && "createDTMFSender" in e.RTCPeerConnection.prototype && e.RTCRtpSender && !("dtmf" in e.RTCRtpSender.prototype)) {
            const t = e.RTCPeerConnection.prototype.getSenders;
            e.RTCPeerConnection.prototype.getSenders = function() {
                const r = t.apply(this, []);
                return r.forEach((o)=>o._pc = this), r;
            }, Object.defineProperty(e.RTCRtpSender.prototype, "dtmf", {
                get () {
                    return this._dtmf === void 0 && (this.track.kind === "audio" ? this._dtmf = this._pc.createDTMFSender(this.track) : this._dtmf = null), this._dtmf;
                }
            });
        }
    }
    function tc(e) {
        if (!(typeof e == "object" && e.RTCPeerConnection && e.RTCRtpSender && e.RTCRtpReceiver)) return;
        if (!("getStats" in e.RTCRtpSender.prototype)) {
            const n = e.RTCPeerConnection.prototype.getSenders;
            n && (e.RTCPeerConnection.prototype.getSenders = function() {
                const s = n.apply(this, []);
                return s.forEach((a)=>a._pc = this), s;
            });
            const r = e.RTCPeerConnection.prototype.addTrack;
            r && (e.RTCPeerConnection.prototype.addTrack = function() {
                const s = r.apply(this, arguments);
                return s._pc = this, s;
            }), e.RTCRtpSender.prototype.getStats = function() {
                const s = this;
                return this._pc.getStats().then((a)=>ua(a, s.track, !0));
            };
        }
        if (!("getStats" in e.RTCRtpReceiver.prototype)) {
            const n = e.RTCPeerConnection.prototype.getReceivers;
            n && (e.RTCPeerConnection.prototype.getReceivers = function() {
                const o = n.apply(this, []);
                return o.forEach((s)=>s._pc = this), o;
            }), wt(e, "track", (r)=>(r.receiver._pc = r.srcElement, r)), e.RTCRtpReceiver.prototype.getStats = function() {
                const o = this;
                return this._pc.getStats().then((s)=>ua(s, o.track, !1));
            };
        }
        if (!("getStats" in e.RTCRtpSender.prototype && "getStats" in e.RTCRtpReceiver.prototype)) return;
        const t = e.RTCPeerConnection.prototype.getStats;
        e.RTCPeerConnection.prototype.getStats = function() {
            if (arguments.length > 0 && arguments[0] instanceof e.MediaStreamTrack) {
                const r = arguments[0];
                let o, s, a;
                return this.getSenders().forEach((i)=>{
                    i.track === r && (o ? a = !0 : o = i);
                }), this.getReceivers().forEach((i)=>(i.track === r && (s ? a = !0 : s = i), i.track === r)), a || o && s ? Promise.reject(new DOMException("There are more than one sender or receiver for the track.", "InvalidAccessError")) : o ? o.getStats() : s ? s.getStats() : Promise.reject(new DOMException("There is no sender or receiver for the track.", "InvalidAccessError"));
            }
            return t.apply(this, arguments);
        };
    }
    function nc(e) {
        e.RTCPeerConnection.prototype.getLocalStreams = function() {
            return this._shimmedLocalStreams = this._shimmedLocalStreams || {}, Object.keys(this._shimmedLocalStreams).map((a)=>this._shimmedLocalStreams[a][0]);
        };
        const t = e.RTCPeerConnection.prototype.addTrack;
        e.RTCPeerConnection.prototype.addTrack = function(a, i) {
            if (!i) return t.apply(this, arguments);
            this._shimmedLocalStreams = this._shimmedLocalStreams || {};
            const c = t.apply(this, arguments);
            return this._shimmedLocalStreams[i.id] ? this._shimmedLocalStreams[i.id].indexOf(c) === -1 && this._shimmedLocalStreams[i.id].push(c) : this._shimmedLocalStreams[i.id] = [
                i,
                c
            ], c;
        };
        const n = e.RTCPeerConnection.prototype.addStream;
        e.RTCPeerConnection.prototype.addStream = function(a) {
            this._shimmedLocalStreams = this._shimmedLocalStreams || {}, a.getTracks().forEach((l)=>{
                if (this.getSenders().find((f)=>f.track === l)) throw new DOMException("Track already exists.", "InvalidAccessError");
            });
            const i = this.getSenders();
            n.apply(this, arguments);
            const c = this.getSenders().filter((l)=>i.indexOf(l) === -1);
            this._shimmedLocalStreams[a.id] = [
                a
            ].concat(c);
        };
        const r = e.RTCPeerConnection.prototype.removeStream;
        e.RTCPeerConnection.prototype.removeStream = function(a) {
            return this._shimmedLocalStreams = this._shimmedLocalStreams || {}, delete this._shimmedLocalStreams[a.id], r.apply(this, arguments);
        };
        const o = e.RTCPeerConnection.prototype.removeTrack;
        e.RTCPeerConnection.prototype.removeTrack = function(a) {
            return this._shimmedLocalStreams = this._shimmedLocalStreams || {}, a && Object.keys(this._shimmedLocalStreams).forEach((i)=>{
                const c = this._shimmedLocalStreams[i].indexOf(a);
                c !== -1 && this._shimmedLocalStreams[i].splice(c, 1), this._shimmedLocalStreams[i].length === 1 && delete this._shimmedLocalStreams[i];
            }), o.apply(this, arguments);
        };
    }
    function rc(e, t) {
        if (!e.RTCPeerConnection) return;
        if (e.RTCPeerConnection.prototype.addTrack && t.version >= 65) return nc(e);
        const n = e.RTCPeerConnection.prototype.getLocalStreams;
        e.RTCPeerConnection.prototype.getLocalStreams = function() {
            const u = n.apply(this);
            return this._reverseStreams = this._reverseStreams || {}, u.map((f)=>this._reverseStreams[f.id]);
        };
        const r = e.RTCPeerConnection.prototype.addStream;
        e.RTCPeerConnection.prototype.addStream = function(u) {
            if (this._streams = this._streams || {}, this._reverseStreams = this._reverseStreams || {}, u.getTracks().forEach((f)=>{
                if (this.getSenders().find((m)=>m.track === f)) throw new DOMException("Track already exists.", "InvalidAccessError");
            }), !this._reverseStreams[u.id]) {
                const f = new e.MediaStream(u.getTracks());
                this._streams[u.id] = f, this._reverseStreams[f.id] = u, u = f;
            }
            r.apply(this, [
                u
            ]);
        };
        const o = e.RTCPeerConnection.prototype.removeStream;
        e.RTCPeerConnection.prototype.removeStream = function(u) {
            this._streams = this._streams || {}, this._reverseStreams = this._reverseStreams || {}, o.apply(this, [
                this._streams[u.id] || u
            ]), delete this._reverseStreams[this._streams[u.id] ? this._streams[u.id].id : u.id], delete this._streams[u.id];
        }, e.RTCPeerConnection.prototype.addTrack = function(u, f) {
            if (this.signalingState === "closed") throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.", "InvalidStateError");
            const p = [].slice.call(arguments, 1);
            if (p.length !== 1 || !p[0].getTracks().find((g)=>g === u)) throw new DOMException("The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.", "NotSupportedError");
            if (this.getSenders().find((g)=>g.track === u)) throw new DOMException("Track already exists.", "InvalidAccessError");
            this._streams = this._streams || {}, this._reverseStreams = this._reverseStreams || {};
            const h = this._streams[f.id];
            if (h) h.addTrack(u), Promise.resolve().then(()=>{
                this.dispatchEvent(new Event("negotiationneeded"));
            });
            else {
                const g = new e.MediaStream([
                    u
                ]);
                this._streams[f.id] = g, this._reverseStreams[g.id] = f, this.addStream(g);
            }
            return this.getSenders().find((g)=>g.track === u);
        };
        function s(l, u) {
            let f = u.sdp;
            return Object.keys(l._reverseStreams || []).forEach((p)=>{
                const m = l._reverseStreams[p], h = l._streams[m.id];
                f = f.replace(new RegExp(h.id, "g"), m.id);
            }), new RTCSessionDescription({
                type: u.type,
                sdp: f
            });
        }
        function a(l, u) {
            let f = u.sdp;
            return Object.keys(l._reverseStreams || []).forEach((p)=>{
                const m = l._reverseStreams[p], h = l._streams[m.id];
                f = f.replace(new RegExp(m.id, "g"), h.id);
            }), new RTCSessionDescription({
                type: u.type,
                sdp: f
            });
        }
        [
            "createOffer",
            "createAnswer"
        ].forEach(function(l) {
            const u = e.RTCPeerConnection.prototype[l], f = {
                [l] () {
                    const p = arguments;
                    return arguments.length && typeof arguments[0] == "function" ? u.apply(this, [
                        (h)=>{
                            const g = s(this, h);
                            p[0].apply(null, [
                                g
                            ]);
                        },
                        (h)=>{
                            p[1] && p[1].apply(null, h);
                        },
                        arguments[2]
                    ]) : u.apply(this, arguments).then((h)=>s(this, h));
                }
            };
            e.RTCPeerConnection.prototype[l] = f[l];
        });
        const i = e.RTCPeerConnection.prototype.setLocalDescription;
        e.RTCPeerConnection.prototype.setLocalDescription = function() {
            return !arguments.length || !arguments[0].type ? i.apply(this, arguments) : (arguments[0] = a(this, arguments[0]), i.apply(this, arguments));
        };
        const c = Object.getOwnPropertyDescriptor(e.RTCPeerConnection.prototype, "localDescription");
        Object.defineProperty(e.RTCPeerConnection.prototype, "localDescription", {
            get () {
                const l = c.get.apply(this);
                return l.type === "" ? l : s(this, l);
            }
        }), e.RTCPeerConnection.prototype.removeTrack = function(u) {
            if (this.signalingState === "closed") throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.", "InvalidStateError");
            if (!u._pc) throw new DOMException("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.", "TypeError");
            if (!(u._pc === this)) throw new DOMException("Sender was not created by this connection.", "InvalidAccessError");
            this._streams = this._streams || {};
            let p;
            Object.keys(this._streams).forEach((m)=>{
                this._streams[m].getTracks().find((g)=>u.track === g) && (p = this._streams[m]);
            }), p && (p.getTracks().length === 1 ? this.removeStream(this._reverseStreams[p.id]) : p.removeTrack(u.track), this.dispatchEvent(new Event("negotiationneeded")));
        };
    }
    function Wr(e, t) {
        !e.RTCPeerConnection && e.webkitRTCPeerConnection && (e.RTCPeerConnection = e.webkitRTCPeerConnection), e.RTCPeerConnection && t.version < 53 && [
            "setLocalDescription",
            "setRemoteDescription",
            "addIceCandidate"
        ].forEach(function(n) {
            const r = e.RTCPeerConnection.prototype[n], o = {
                [n] () {
                    return arguments[0] = new (n === "addIceCandidate" ? e.RTCIceCandidate : e.RTCSessionDescription)(arguments[0]), r.apply(this, arguments);
                }
            };
            e.RTCPeerConnection.prototype[n] = o[n];
        });
    }
    function oc(e, t) {
        wt(e, "negotiationneeded", (n)=>{
            const r = n.target;
            if (!((t.version < 72 || r.getConfiguration && r.getConfiguration().sdpSemantics === "plan-b") && r.signalingState !== "stable")) return n;
        });
    }
    const da = Object.freeze(Object.defineProperty({
        __proto__: null,
        fixNegotiationNeeded: oc,
        shimAddTrackRemoveTrack: rc,
        shimAddTrackRemoveTrackWithNative: nc,
        shimGetSendersWithDtmf: ec,
        shimGetUserMedia: Zi,
        shimMediaStream: Xi,
        shimOnTrack: Qi,
        shimPeerConnection: Wr,
        shimSenderReceiverGetStats: tc
    }, Symbol.toStringTag, {
        value: "Module"
    }));
    function sc(e, t) {
        const n = e && e.navigator, r = e && e.MediaStreamTrack;
        if (n.getUserMedia = function(o, s, a) {
            Bo("navigator.getUserMedia", "navigator.mediaDevices.getUserMedia"), n.mediaDevices.getUserMedia(o).then(s, a);
        }, !(t.version > 55 && "autoGainControl" in n.mediaDevices.getSupportedConstraints())) {
            const o = function(a, i, c) {
                i in a && !(c in a) && (a[c] = a[i], delete a[i]);
            }, s = n.mediaDevices.getUserMedia.bind(n.mediaDevices);
            if (n.mediaDevices.getUserMedia = function(a) {
                return typeof a == "object" && typeof a.audio == "object" && (a = JSON.parse(JSON.stringify(a)), o(a.audio, "autoGainControl", "mozAutoGainControl"), o(a.audio, "noiseSuppression", "mozNoiseSuppression")), s(a);
            }, r && r.prototype.getSettings) {
                const a = r.prototype.getSettings;
                r.prototype.getSettings = function() {
                    const i = a.apply(this, arguments);
                    return o(i, "mozAutoGainControl", "autoGainControl"), o(i, "mozNoiseSuppression", "noiseSuppression"), i;
                };
            }
            if (r && r.prototype.applyConstraints) {
                const a = r.prototype.applyConstraints;
                r.prototype.applyConstraints = function(i) {
                    return this.kind === "audio" && typeof i == "object" && (i = JSON.parse(JSON.stringify(i)), o(i, "autoGainControl", "mozAutoGainControl"), o(i, "noiseSuppression", "mozNoiseSuppression")), a.apply(this, [
                        i
                    ]);
                };
            }
        }
    }
    function Jb(e, t) {
        e.navigator.mediaDevices && "getDisplayMedia" in e.navigator.mediaDevices || e.navigator.mediaDevices && (e.navigator.mediaDevices.getDisplayMedia = function(r) {
            if (!(r && r.video)) {
                const o = new DOMException("getDisplayMedia without video constraints is undefined");
                return o.name = "NotFoundError", o.code = 8, Promise.reject(o);
            }
            return r.video === !0 ? r.video = {
                mediaSource: t
            } : r.video.mediaSource = t, e.navigator.mediaDevices.getUserMedia(r);
        });
    }
    function ac(e) {
        typeof e == "object" && e.RTCTrackEvent && "receiver" in e.RTCTrackEvent.prototype && !("transceiver" in e.RTCTrackEvent.prototype) && Object.defineProperty(e.RTCTrackEvent.prototype, "transceiver", {
            get () {
                return {
                    receiver: this.receiver
                };
            }
        });
    }
    function Kr(e, t) {
        if (typeof e != "object" || !(e.RTCPeerConnection || e.mozRTCPeerConnection)) return;
        !e.RTCPeerConnection && e.mozRTCPeerConnection && (e.RTCPeerConnection = e.mozRTCPeerConnection), t.version < 53 && [
            "setLocalDescription",
            "setRemoteDescription",
            "addIceCandidate"
        ].forEach(function(o) {
            const s = e.RTCPeerConnection.prototype[o], a = {
                [o] () {
                    return arguments[0] = new (o === "addIceCandidate" ? e.RTCIceCandidate : e.RTCSessionDescription)(arguments[0]), s.apply(this, arguments);
                }
            };
            e.RTCPeerConnection.prototype[o] = a[o];
        });
        const n = {
            inboundrtp: "inbound-rtp",
            outboundrtp: "outbound-rtp",
            candidatepair: "candidate-pair",
            localcandidate: "local-candidate",
            remotecandidate: "remote-candidate"
        }, r = e.RTCPeerConnection.prototype.getStats;
        e.RTCPeerConnection.prototype.getStats = function() {
            const [s, a, i] = arguments;
            return r.apply(this, [
                s || null
            ]).then((c)=>{
                if (t.version < 53 && !a) try {
                    c.forEach((l)=>{
                        l.type = n[l.type] || l.type;
                    });
                } catch (l) {
                    if (l.name !== "TypeError") throw l;
                    c.forEach((u, f)=>{
                        c.set(f, Object.assign({}, u, {
                            type: n[u.type] || u.type
                        }));
                    });
                }
                return c;
            }).then(a, i);
        };
    }
    function ic(e) {
        if (!(typeof e == "object" && e.RTCPeerConnection && e.RTCRtpSender) || e.RTCRtpSender && "getStats" in e.RTCRtpSender.prototype) return;
        const t = e.RTCPeerConnection.prototype.getSenders;
        t && (e.RTCPeerConnection.prototype.getSenders = function() {
            const o = t.apply(this, []);
            return o.forEach((s)=>s._pc = this), o;
        });
        const n = e.RTCPeerConnection.prototype.addTrack;
        n && (e.RTCPeerConnection.prototype.addTrack = function() {
            const o = n.apply(this, arguments);
            return o._pc = this, o;
        }), e.RTCRtpSender.prototype.getStats = function() {
            return this.track ? this._pc.getStats(this.track) : Promise.resolve(new Map);
        };
    }
    function cc(e) {
        if (!(typeof e == "object" && e.RTCPeerConnection && e.RTCRtpSender) || e.RTCRtpSender && "getStats" in e.RTCRtpReceiver.prototype) return;
        const t = e.RTCPeerConnection.prototype.getReceivers;
        t && (e.RTCPeerConnection.prototype.getReceivers = function() {
            const r = t.apply(this, []);
            return r.forEach((o)=>o._pc = this), r;
        }), wt(e, "track", (n)=>(n.receiver._pc = n.srcElement, n)), e.RTCRtpReceiver.prototype.getStats = function() {
            return this._pc.getStats(this.track);
        };
    }
    function lc(e) {
        !e.RTCPeerConnection || "removeStream" in e.RTCPeerConnection.prototype || (e.RTCPeerConnection.prototype.removeStream = function(n) {
            Bo("removeStream", "removeTrack"), this.getSenders().forEach((r)=>{
                r.track && n.getTracks().includes(r.track) && this.removeTrack(r);
            });
        });
    }
    function uc(e) {
        e.DataChannel && !e.RTCDataChannel && (e.RTCDataChannel = e.DataChannel);
    }
    function fc(e) {
        if (!(typeof e == "object" && e.RTCPeerConnection)) return;
        const t = e.RTCPeerConnection.prototype.addTransceiver;
        t && (e.RTCPeerConnection.prototype.addTransceiver = function() {
            this.setParametersPromises = [];
            let r = arguments[1] && arguments[1].sendEncodings;
            r === void 0 && (r = []), r = [
                ...r
            ];
            const o = r.length > 0;
            o && r.forEach((a)=>{
                if ("rid" in a && !/^[a-z0-9]{0,16}$/i.test(a.rid)) throw new TypeError("Invalid RID value provided.");
                if ("scaleResolutionDownBy" in a && !(parseFloat(a.scaleResolutionDownBy) >= 1)) throw new RangeError("scale_resolution_down_by must be >= 1.0");
                if ("maxFramerate" in a && !(parseFloat(a.maxFramerate) >= 0)) throw new RangeError("max_framerate must be >= 0.0");
            });
            const s = t.apply(this, arguments);
            if (o) {
                const { sender: a } = s, i = a.getParameters();
                (!("encodings" in i) || i.encodings.length === 1 && Object.keys(i.encodings[0]).length === 0) && (i.encodings = r, a.sendEncodings = r, this.setParametersPromises.push(a.setParameters(i).then(()=>{
                    delete a.sendEncodings;
                }).catch(()=>{
                    delete a.sendEncodings;
                })));
            }
            return s;
        });
    }
    function dc(e) {
        if (!(typeof e == "object" && e.RTCRtpSender)) return;
        const t = e.RTCRtpSender.prototype.getParameters;
        t && (e.RTCRtpSender.prototype.getParameters = function() {
            const r = t.apply(this, arguments);
            return "encodings" in r || (r.encodings = [].concat(this.sendEncodings || [
                {}
            ])), r;
        });
    }
    function pc(e) {
        if (!(typeof e == "object" && e.RTCPeerConnection)) return;
        const t = e.RTCPeerConnection.prototype.createOffer;
        e.RTCPeerConnection.prototype.createOffer = function() {
            return this.setParametersPromises && this.setParametersPromises.length ? Promise.all(this.setParametersPromises).then(()=>t.apply(this, arguments)).finally(()=>{
                this.setParametersPromises = [];
            }) : t.apply(this, arguments);
        };
    }
    function hc(e) {
        if (!(typeof e == "object" && e.RTCPeerConnection)) return;
        const t = e.RTCPeerConnection.prototype.createAnswer;
        e.RTCPeerConnection.prototype.createAnswer = function() {
            return this.setParametersPromises && this.setParametersPromises.length ? Promise.all(this.setParametersPromises).then(()=>t.apply(this, arguments)).finally(()=>{
                this.setParametersPromises = [];
            }) : t.apply(this, arguments);
        };
    }
    const pa = Object.freeze(Object.defineProperty({
        __proto__: null,
        shimAddTransceiver: fc,
        shimCreateAnswer: hc,
        shimCreateOffer: pc,
        shimGetDisplayMedia: Jb,
        shimGetParameters: dc,
        shimGetUserMedia: sc,
        shimOnTrack: ac,
        shimPeerConnection: Kr,
        shimRTCDataChannel: uc,
        shimReceiverGetStats: cc,
        shimRemoveStream: lc,
        shimSenderGetStats: ic
    }, Symbol.toStringTag, {
        value: "Module"
    }));
    function mc(e) {
        if (!(typeof e != "object" || !e.RTCPeerConnection)) {
            if ("getLocalStreams" in e.RTCPeerConnection.prototype || (e.RTCPeerConnection.prototype.getLocalStreams = function() {
                return this._localStreams || (this._localStreams = []), this._localStreams;
            }), !("addStream" in e.RTCPeerConnection.prototype)) {
                const t = e.RTCPeerConnection.prototype.addTrack;
                e.RTCPeerConnection.prototype.addStream = function(r) {
                    this._localStreams || (this._localStreams = []), this._localStreams.includes(r) || this._localStreams.push(r), r.getAudioTracks().forEach((o)=>t.call(this, o, r)), r.getVideoTracks().forEach((o)=>t.call(this, o, r));
                }, e.RTCPeerConnection.prototype.addTrack = function(r, ...o) {
                    return o && o.forEach((s)=>{
                        this._localStreams ? this._localStreams.includes(s) || this._localStreams.push(s) : this._localStreams = [
                            s
                        ];
                    }), t.apply(this, arguments);
                };
            }
            "removeStream" in e.RTCPeerConnection.prototype || (e.RTCPeerConnection.prototype.removeStream = function(n) {
                this._localStreams || (this._localStreams = []);
                const r = this._localStreams.indexOf(n);
                if (r === -1) return;
                this._localStreams.splice(r, 1);
                const o = n.getTracks();
                this.getSenders().forEach((s)=>{
                    o.includes(s.track) && this.removeTrack(s);
                });
            });
        }
    }
    function gc(e) {
        if (!(typeof e != "object" || !e.RTCPeerConnection) && ("getRemoteStreams" in e.RTCPeerConnection.prototype || (e.RTCPeerConnection.prototype.getRemoteStreams = function() {
            return this._remoteStreams ? this._remoteStreams : [];
        }), !("onaddstream" in e.RTCPeerConnection.prototype))) {
            Object.defineProperty(e.RTCPeerConnection.prototype, "onaddstream", {
                get () {
                    return this._onaddstream;
                },
                set (n) {
                    this._onaddstream && (this.removeEventListener("addstream", this._onaddstream), this.removeEventListener("track", this._onaddstreampoly)), this.addEventListener("addstream", this._onaddstream = n), this.addEventListener("track", this._onaddstreampoly = (r)=>{
                        r.streams.forEach((o)=>{
                            if (this._remoteStreams || (this._remoteStreams = []), this._remoteStreams.includes(o)) return;
                            this._remoteStreams.push(o);
                            const s = new Event("addstream");
                            s.stream = o, this.dispatchEvent(s);
                        });
                    });
                }
            });
            const t = e.RTCPeerConnection.prototype.setRemoteDescription;
            e.RTCPeerConnection.prototype.setRemoteDescription = function() {
                const r = this;
                return this._onaddstreampoly || this.addEventListener("track", this._onaddstreampoly = function(o) {
                    o.streams.forEach((s)=>{
                        if (r._remoteStreams || (r._remoteStreams = []), r._remoteStreams.indexOf(s) >= 0) return;
                        r._remoteStreams.push(s);
                        const a = new Event("addstream");
                        a.stream = s, r.dispatchEvent(a);
                    });
                }), t.apply(r, arguments);
            };
        }
    }
    function vc(e) {
        if (typeof e != "object" || !e.RTCPeerConnection) return;
        const t = e.RTCPeerConnection.prototype, n = t.createOffer, r = t.createAnswer, o = t.setLocalDescription, s = t.setRemoteDescription, a = t.addIceCandidate;
        t.createOffer = function(l, u) {
            const f = arguments.length >= 2 ? arguments[2] : arguments[0], p = n.apply(this, [
                f
            ]);
            return u ? (p.then(l, u), Promise.resolve()) : p;
        }, t.createAnswer = function(l, u) {
            const f = arguments.length >= 2 ? arguments[2] : arguments[0], p = r.apply(this, [
                f
            ]);
            return u ? (p.then(l, u), Promise.resolve()) : p;
        };
        let i = function(c, l, u) {
            const f = o.apply(this, [
                c
            ]);
            return u ? (f.then(l, u), Promise.resolve()) : f;
        };
        t.setLocalDescription = i, i = function(c, l, u) {
            const f = s.apply(this, [
                c
            ]);
            return u ? (f.then(l, u), Promise.resolve()) : f;
        }, t.setRemoteDescription = i, i = function(c, l, u) {
            const f = a.apply(this, [
                c
            ]);
            return u ? (f.then(l, u), Promise.resolve()) : f;
        }, t.addIceCandidate = i;
    }
    function bc(e) {
        const t = e && e.navigator;
        if (t.mediaDevices && t.mediaDevices.getUserMedia) {
            const n = t.mediaDevices, r = n.getUserMedia.bind(n);
            t.mediaDevices.getUserMedia = (o)=>r(_c(o));
        }
        !t.getUserMedia && t.mediaDevices && t.mediaDevices.getUserMedia && (t.getUserMedia = function(r, o, s) {
            t.mediaDevices.getUserMedia(r).then(o, s);
        }.bind(t));
    }
    function _c(e) {
        return e && e.video !== void 0 ? Object.assign({}, e, {
            video: qi(e.video)
        }) : e;
    }
    function yc(e) {
        if (!e.RTCPeerConnection) return;
        const t = e.RTCPeerConnection;
        e.RTCPeerConnection = function(r, o) {
            if (r && r.iceServers) {
                const s = [];
                for(let a = 0; a < r.iceServers.length; a++){
                    let i = r.iceServers[a];
                    i.urls === void 0 && i.url ? (Bo("RTCIceServer.url", "RTCIceServer.urls"), i = JSON.parse(JSON.stringify(i)), i.urls = i.url, delete i.url, s.push(i)) : s.push(r.iceServers[a]);
                }
                r.iceServers = s;
            }
            return new t(r, o);
        }, e.RTCPeerConnection.prototype = t.prototype, "generateCertificate" in t && Object.defineProperty(e.RTCPeerConnection, "generateCertificate", {
            get () {
                return t.generateCertificate;
            }
        });
    }
    function Cc(e) {
        typeof e == "object" && e.RTCTrackEvent && "receiver" in e.RTCTrackEvent.prototype && !("transceiver" in e.RTCTrackEvent.prototype) && Object.defineProperty(e.RTCTrackEvent.prototype, "transceiver", {
            get () {
                return {
                    receiver: this.receiver
                };
            }
        });
    }
    function Sc(e) {
        const t = e.RTCPeerConnection.prototype.createOffer;
        e.RTCPeerConnection.prototype.createOffer = function(r) {
            if (r) {
                typeof r.offerToReceiveAudio < "u" && (r.offerToReceiveAudio = !!r.offerToReceiveAudio);
                const o = this.getTransceivers().find((a)=>a.receiver.track.kind === "audio");
                r.offerToReceiveAudio === !1 && o ? o.direction === "sendrecv" ? o.setDirection ? o.setDirection("sendonly") : o.direction = "sendonly" : o.direction === "recvonly" && (o.setDirection ? o.setDirection("inactive") : o.direction = "inactive") : r.offerToReceiveAudio === !0 && !o && this.addTransceiver("audio", {
                    direction: "recvonly"
                }), typeof r.offerToReceiveVideo < "u" && (r.offerToReceiveVideo = !!r.offerToReceiveVideo);
                const s = this.getTransceivers().find((a)=>a.receiver.track.kind === "video");
                r.offerToReceiveVideo === !1 && s ? s.direction === "sendrecv" ? s.setDirection ? s.setDirection("sendonly") : s.direction = "sendonly" : s.direction === "recvonly" && (s.setDirection ? s.setDirection("inactive") : s.direction = "inactive") : r.offerToReceiveVideo === !0 && !s && this.addTransceiver("video", {
                    direction: "recvonly"
                });
            }
            return t.apply(this, arguments);
        };
    }
    function Tc(e) {
        typeof e != "object" || e.AudioContext || (e.AudioContext = e.webkitAudioContext);
    }
    const ha = Object.freeze(Object.defineProperty({
        __proto__: null,
        shimAudioContext: Tc,
        shimCallbacksAPI: vc,
        shimConstraints: _c,
        shimCreateOfferLegacy: Sc,
        shimGetUserMedia: bc,
        shimLocalStreamsAPI: mc,
        shimRTCIceServerUrls: yc,
        shimRemoteStreamsAPI: gc,
        shimTrackEventTransceiver: Cc
    }, Symbol.toStringTag, {
        value: "Module"
    }));
    var Pr = {
        exports: {}
    }, ma;
    function Yb() {
        return ma || (ma = 1, function(e) {
            const t = {};
            t.generateIdentifier = function() {
                return Math.random().toString(36).substring(2, 12);
            }, t.localCName = t.generateIdentifier(), t.splitLines = function(n) {
                return n.trim().split(`
`).map((r)=>r.trim());
            }, t.splitSections = function(n) {
                return n.split(`
m=`).map((o, s)=>(s > 0 ? "m=" + o : o).trim() + `\r
`);
            }, t.getDescription = function(n) {
                const r = t.splitSections(n);
                return r && r[0];
            }, t.getMediaSections = function(n) {
                const r = t.splitSections(n);
                return r.shift(), r;
            }, t.matchPrefix = function(n, r) {
                return t.splitLines(n).filter((o)=>o.indexOf(r) === 0);
            }, t.parseCandidate = function(n) {
                let r;
                n.indexOf("a=candidate:") === 0 ? r = n.substring(12).split(" ") : r = n.substring(10).split(" ");
                const o = {
                    foundation: r[0],
                    component: {
                        1: "rtp",
                        2: "rtcp"
                    }[r[1]] || r[1],
                    protocol: r[2].toLowerCase(),
                    priority: parseInt(r[3], 10),
                    ip: r[4],
                    address: r[4],
                    port: parseInt(r[5], 10),
                    type: r[7]
                };
                for(let s = 8; s < r.length; s += 2)switch(r[s]){
                    case "raddr":
                        o.relatedAddress = r[s + 1];
                        break;
                    case "rport":
                        o.relatedPort = parseInt(r[s + 1], 10);
                        break;
                    case "tcptype":
                        o.tcpType = r[s + 1];
                        break;
                    case "ufrag":
                        o.ufrag = r[s + 1], o.usernameFragment = r[s + 1];
                        break;
                    default:
                        o[r[s]] === void 0 && (o[r[s]] = r[s + 1]);
                        break;
                }
                return o;
            }, t.writeCandidate = function(n) {
                const r = [];
                r.push(n.foundation);
                const o = n.component;
                o === "rtp" ? r.push(1) : o === "rtcp" ? r.push(2) : r.push(o), r.push(n.protocol.toUpperCase()), r.push(n.priority), r.push(n.address || n.ip), r.push(n.port);
                const s = n.type;
                return r.push("typ"), r.push(s), s !== "host" && n.relatedAddress && n.relatedPort && (r.push("raddr"), r.push(n.relatedAddress), r.push("rport"), r.push(n.relatedPort)), n.tcpType && n.protocol.toLowerCase() === "tcp" && (r.push("tcptype"), r.push(n.tcpType)), (n.usernameFragment || n.ufrag) && (r.push("ufrag"), r.push(n.usernameFragment || n.ufrag)), "candidate:" + r.join(" ");
            }, t.parseIceOptions = function(n) {
                return n.substring(14).split(" ");
            }, t.parseRtpMap = function(n) {
                let r = n.substring(9).split(" ");
                const o = {
                    payloadType: parseInt(r.shift(), 10)
                };
                return r = r[0].split("/"), o.name = r[0], o.clockRate = parseInt(r[1], 10), o.channels = r.length === 3 ? parseInt(r[2], 10) : 1, o.numChannels = o.channels, o;
            }, t.writeRtpMap = function(n) {
                let r = n.payloadType;
                n.preferredPayloadType !== void 0 && (r = n.preferredPayloadType);
                const o = n.channels || n.numChannels || 1;
                return "a=rtpmap:" + r + " " + n.name + "/" + n.clockRate + (o !== 1 ? "/" + o : "") + `\r
`;
            }, t.parseExtmap = function(n) {
                const r = n.substring(9).split(" ");
                return {
                    id: parseInt(r[0], 10),
                    direction: r[0].indexOf("/") > 0 ? r[0].split("/")[1] : "sendrecv",
                    uri: r[1],
                    attributes: r.slice(2).join(" ")
                };
            }, t.writeExtmap = function(n) {
                return "a=extmap:" + (n.id || n.preferredId) + (n.direction && n.direction !== "sendrecv" ? "/" + n.direction : "") + " " + n.uri + (n.attributes ? " " + n.attributes : "") + `\r
`;
            }, t.parseFmtp = function(n) {
                const r = {};
                let o;
                const s = n.substring(n.indexOf(" ") + 1).split(";");
                for(let a = 0; a < s.length; a++)o = s[a].trim().split("="), r[o[0].trim()] = o[1];
                return r;
            }, t.writeFmtp = function(n) {
                let r = "", o = n.payloadType;
                if (n.preferredPayloadType !== void 0 && (o = n.preferredPayloadType), n.parameters && Object.keys(n.parameters).length) {
                    const s = [];
                    Object.keys(n.parameters).forEach((a)=>{
                        n.parameters[a] !== void 0 ? s.push(a + "=" + n.parameters[a]) : s.push(a);
                    }), r += "a=fmtp:" + o + " " + s.join(";") + `\r
`;
                }
                return r;
            }, t.parseRtcpFb = function(n) {
                const r = n.substring(n.indexOf(" ") + 1).split(" ");
                return {
                    type: r.shift(),
                    parameter: r.join(" ")
                };
            }, t.writeRtcpFb = function(n) {
                let r = "", o = n.payloadType;
                return n.preferredPayloadType !== void 0 && (o = n.preferredPayloadType), n.rtcpFeedback && n.rtcpFeedback.length && n.rtcpFeedback.forEach((s)=>{
                    r += "a=rtcp-fb:" + o + " " + s.type + (s.parameter && s.parameter.length ? " " + s.parameter : "") + `\r
`;
                }), r;
            }, t.parseSsrcMedia = function(n) {
                const r = n.indexOf(" "), o = {
                    ssrc: parseInt(n.substring(7, r), 10)
                }, s = n.indexOf(":", r);
                return s > -1 ? (o.attribute = n.substring(r + 1, s), o.value = n.substring(s + 1)) : o.attribute = n.substring(r + 1), o;
            }, t.parseSsrcGroup = function(n) {
                const r = n.substring(13).split(" ");
                return {
                    semantics: r.shift(),
                    ssrcs: r.map((o)=>parseInt(o, 10))
                };
            }, t.getMid = function(n) {
                const r = t.matchPrefix(n, "a=mid:")[0];
                if (r) return r.substring(6);
            }, t.parseFingerprint = function(n) {
                const r = n.substring(14).split(" ");
                return {
                    algorithm: r[0].toLowerCase(),
                    value: r[1].toUpperCase()
                };
            }, t.getDtlsParameters = function(n, r) {
                return {
                    role: "auto",
                    fingerprints: t.matchPrefix(n + r, "a=fingerprint:").map(t.parseFingerprint)
                };
            }, t.writeDtlsParameters = function(n, r) {
                let o = "a=setup:" + r + `\r
`;
                return n.fingerprints.forEach((s)=>{
                    o += "a=fingerprint:" + s.algorithm + " " + s.value + `\r
`;
                }), o;
            }, t.parseCryptoLine = function(n) {
                const r = n.substring(9).split(" ");
                return {
                    tag: parseInt(r[0], 10),
                    cryptoSuite: r[1],
                    keyParams: r[2],
                    sessionParams: r.slice(3)
                };
            }, t.writeCryptoLine = function(n) {
                return "a=crypto:" + n.tag + " " + n.cryptoSuite + " " + (typeof n.keyParams == "object" ? t.writeCryptoKeyParams(n.keyParams) : n.keyParams) + (n.sessionParams ? " " + n.sessionParams.join(" ") : "") + `\r
`;
            }, t.parseCryptoKeyParams = function(n) {
                if (n.indexOf("inline:") !== 0) return null;
                const r = n.substring(7).split("|");
                return {
                    keyMethod: "inline",
                    keySalt: r[0],
                    lifeTime: r[1],
                    mkiValue: r[2] ? r[2].split(":")[0] : void 0,
                    mkiLength: r[2] ? r[2].split(":")[1] : void 0
                };
            }, t.writeCryptoKeyParams = function(n) {
                return n.keyMethod + ":" + n.keySalt + (n.lifeTime ? "|" + n.lifeTime : "") + (n.mkiValue && n.mkiLength ? "|" + n.mkiValue + ":" + n.mkiLength : "");
            }, t.getCryptoParameters = function(n, r) {
                return t.matchPrefix(n + r, "a=crypto:").map(t.parseCryptoLine);
            }, t.getIceParameters = function(n, r) {
                const o = t.matchPrefix(n + r, "a=ice-ufrag:")[0], s = t.matchPrefix(n + r, "a=ice-pwd:")[0];
                return o && s ? {
                    usernameFragment: o.substring(12),
                    password: s.substring(10)
                } : null;
            }, t.writeIceParameters = function(n) {
                let r = "a=ice-ufrag:" + n.usernameFragment + `\r
a=ice-pwd:` + n.password + `\r
`;
                return n.iceLite && (r += `a=ice-lite\r
`), r;
            }, t.parseRtpParameters = function(n) {
                const r = {
                    codecs: [],
                    headerExtensions: [],
                    fecMechanisms: [],
                    rtcp: []
                }, s = t.splitLines(n)[0].split(" ");
                r.profile = s[2];
                for(let i = 3; i < s.length; i++){
                    const c = s[i], l = t.matchPrefix(n, "a=rtpmap:" + c + " ")[0];
                    if (l) {
                        const u = t.parseRtpMap(l), f = t.matchPrefix(n, "a=fmtp:" + c + " ");
                        switch(u.parameters = f.length ? t.parseFmtp(f[0]) : {}, u.rtcpFeedback = t.matchPrefix(n, "a=rtcp-fb:" + c + " ").map(t.parseRtcpFb), r.codecs.push(u), u.name.toUpperCase()){
                            case "RED":
                            case "ULPFEC":
                                r.fecMechanisms.push(u.name.toUpperCase());
                                break;
                        }
                    }
                }
                t.matchPrefix(n, "a=extmap:").forEach((i)=>{
                    r.headerExtensions.push(t.parseExtmap(i));
                });
                const a = t.matchPrefix(n, "a=rtcp-fb:* ").map(t.parseRtcpFb);
                return r.codecs.forEach((i)=>{
                    a.forEach((c)=>{
                        i.rtcpFeedback.find((u)=>u.type === c.type && u.parameter === c.parameter) || i.rtcpFeedback.push(c);
                    });
                }), r;
            }, t.writeRtpDescription = function(n, r) {
                let o = "";
                o += "m=" + n + " ", o += r.codecs.length > 0 ? "9" : "0", o += " " + (r.profile || "UDP/TLS/RTP/SAVPF") + " ", o += r.codecs.map((a)=>a.preferredPayloadType !== void 0 ? a.preferredPayloadType : a.payloadType).join(" ") + `\r
`, o += `c=IN IP4 0.0.0.0\r
`, o += `a=rtcp:9 IN IP4 0.0.0.0\r
`, r.codecs.forEach((a)=>{
                    o += t.writeRtpMap(a), o += t.writeFmtp(a), o += t.writeRtcpFb(a);
                });
                let s = 0;
                return r.codecs.forEach((a)=>{
                    a.maxptime > s && (s = a.maxptime);
                }), s > 0 && (o += "a=maxptime:" + s + `\r
`), r.headerExtensions && r.headerExtensions.forEach((a)=>{
                    o += t.writeExtmap(a);
                }), o;
            }, t.parseRtpEncodingParameters = function(n) {
                const r = [], o = t.parseRtpParameters(n), s = o.fecMechanisms.indexOf("RED") !== -1, a = o.fecMechanisms.indexOf("ULPFEC") !== -1, i = t.matchPrefix(n, "a=ssrc:").map((p)=>t.parseSsrcMedia(p)).filter((p)=>p.attribute === "cname"), c = i.length > 0 && i[0].ssrc;
                let l;
                const u = t.matchPrefix(n, "a=ssrc-group:FID").map((p)=>p.substring(17).split(" ").map((h)=>parseInt(h, 10)));
                u.length > 0 && u[0].length > 1 && u[0][0] === c && (l = u[0][1]), o.codecs.forEach((p)=>{
                    if (p.name.toUpperCase() === "RTX" && p.parameters.apt) {
                        let m = {
                            ssrc: c,
                            codecPayloadType: parseInt(p.parameters.apt, 10)
                        };
                        c && l && (m.rtx = {
                            ssrc: l
                        }), r.push(m), s && (m = JSON.parse(JSON.stringify(m)), m.fec = {
                            ssrc: c,
                            mechanism: a ? "red+ulpfec" : "red"
                        }, r.push(m));
                    }
                }), r.length === 0 && c && r.push({
                    ssrc: c
                });
                let f = t.matchPrefix(n, "b=");
                return f.length && (f[0].indexOf("b=TIAS:") === 0 ? f = parseInt(f[0].substring(7), 10) : f[0].indexOf("b=AS:") === 0 ? f = parseInt(f[0].substring(5), 10) * 1e3 * .95 - 50 * 40 * 8 : f = void 0, r.forEach((p)=>{
                    p.maxBitrate = f;
                })), r;
            }, t.parseRtcpParameters = function(n) {
                const r = {}, o = t.matchPrefix(n, "a=ssrc:").map((i)=>t.parseSsrcMedia(i)).filter((i)=>i.attribute === "cname")[0];
                o && (r.cname = o.value, r.ssrc = o.ssrc);
                const s = t.matchPrefix(n, "a=rtcp-rsize");
                r.reducedSize = s.length > 0, r.compound = s.length === 0;
                const a = t.matchPrefix(n, "a=rtcp-mux");
                return r.mux = a.length > 0, r;
            }, t.writeRtcpParameters = function(n) {
                let r = "";
                return n.reducedSize && (r += `a=rtcp-rsize\r
`), n.mux && (r += `a=rtcp-mux\r
`), n.ssrc !== void 0 && n.cname && (r += "a=ssrc:" + n.ssrc + " cname:" + n.cname + `\r
`), r;
            }, t.parseMsid = function(n) {
                let r;
                const o = t.matchPrefix(n, "a=msid:");
                if (o.length === 1) return r = o[0].substring(7).split(" "), {
                    stream: r[0],
                    track: r[1]
                };
                const s = t.matchPrefix(n, "a=ssrc:").map((a)=>t.parseSsrcMedia(a)).filter((a)=>a.attribute === "msid");
                if (s.length > 0) return r = s[0].value.split(" "), {
                    stream: r[0],
                    track: r[1]
                };
            }, t.parseSctpDescription = function(n) {
                const r = t.parseMLine(n), o = t.matchPrefix(n, "a=max-message-size:");
                let s;
                o.length > 0 && (s = parseInt(o[0].substring(19), 10)), isNaN(s) && (s = 65536);
                const a = t.matchPrefix(n, "a=sctp-port:");
                if (a.length > 0) return {
                    port: parseInt(a[0].substring(12), 10),
                    protocol: r.fmt,
                    maxMessageSize: s
                };
                const i = t.matchPrefix(n, "a=sctpmap:");
                if (i.length > 0) {
                    const c = i[0].substring(10).split(" ");
                    return {
                        port: parseInt(c[0], 10),
                        protocol: c[1],
                        maxMessageSize: s
                    };
                }
            }, t.writeSctpDescription = function(n, r) {
                let o = [];
                return n.protocol !== "DTLS/SCTP" ? o = [
                    "m=" + n.kind + " 9 " + n.protocol + " " + r.protocol + `\r
`,
                    `c=IN IP4 0.0.0.0\r
`,
                    "a=sctp-port:" + r.port + `\r
`
                ] : o = [
                    "m=" + n.kind + " 9 " + n.protocol + " " + r.port + `\r
`,
                    `c=IN IP4 0.0.0.0\r
`,
                    "a=sctpmap:" + r.port + " " + r.protocol + ` 65535\r
`
                ], r.maxMessageSize !== void 0 && o.push("a=max-message-size:" + r.maxMessageSize + `\r
`), o.join("");
            }, t.generateSessionId = function() {
                return Math.random().toString().substr(2, 22);
            }, t.writeSessionBoilerplate = function(n, r, o) {
                let s;
                const a = r !== void 0 ? r : 2;
                return n ? s = n : s = t.generateSessionId(), `v=0\r
o=` + (o || "thisisadapterortc") + " " + s + " " + a + ` IN IP4 127.0.0.1\r
s=-\r
t=0 0\r
`;
            }, t.getDirection = function(n, r) {
                const o = t.splitLines(n);
                for(let s = 0; s < o.length; s++)switch(o[s]){
                    case "a=sendrecv":
                    case "a=sendonly":
                    case "a=recvonly":
                    case "a=inactive":
                        return o[s].substring(2);
                }
                return r ? t.getDirection(r) : "sendrecv";
            }, t.getKind = function(n) {
                return t.splitLines(n)[0].split(" ")[0].substring(2);
            }, t.isRejected = function(n) {
                return n.split(" ", 2)[1] === "0";
            }, t.parseMLine = function(n) {
                const o = t.splitLines(n)[0].substring(2).split(" ");
                return {
                    kind: o[0],
                    port: parseInt(o[1], 10),
                    protocol: o[2],
                    fmt: o.slice(3).join(" ")
                };
            }, t.parseOLine = function(n) {
                const o = t.matchPrefix(n, "o=")[0].substring(2).split(" ");
                return {
                    username: o[0],
                    sessionId: o[1],
                    sessionVersion: parseInt(o[2], 10),
                    netType: o[3],
                    addressType: o[4],
                    address: o[5]
                };
            }, t.isValidSDP = function(n) {
                if (typeof n != "string" || n.length === 0) return !1;
                const r = t.splitLines(n);
                for(let o = 0; o < r.length; o++)if (r[o].length < 2 || r[o].charAt(1) !== "=") return !1;
                return !0;
            }, e.exports = t;
        }(Pr)), Pr.exports;
    }
    var xc = Yb();
    const zt = tv(xc), qb = Jc({
        __proto__: null,
        default: zt
    }, [
        xc
    ]);
    function Hn(e) {
        if (!e.RTCIceCandidate || e.RTCIceCandidate && "foundation" in e.RTCIceCandidate.prototype) return;
        const t = e.RTCIceCandidate;
        e.RTCIceCandidate = function(r) {
            if (typeof r == "object" && r.candidate && r.candidate.indexOf("a=") === 0 && (r = JSON.parse(JSON.stringify(r)), r.candidate = r.candidate.substring(2)), r.candidate && r.candidate.length) {
                const o = new t(r), s = zt.parseCandidate(r.candidate);
                for(const a in s)a in o || Object.defineProperty(o, a, {
                    value: s[a]
                });
                return o.toJSON = function() {
                    return {
                        candidate: o.candidate,
                        sdpMid: o.sdpMid,
                        sdpMLineIndex: o.sdpMLineIndex,
                        usernameFragment: o.usernameFragment
                    };
                }, o;
            }
            return new t(r);
        }, e.RTCIceCandidate.prototype = t.prototype, wt(e, "icecandidate", (n)=>(n.candidate && Object.defineProperty(n, "candidate", {
                value: new e.RTCIceCandidate(n.candidate),
                writable: "false"
            }), n));
    }
    function Gr(e) {
        !e.RTCIceCandidate || e.RTCIceCandidate && "relayProtocol" in e.RTCIceCandidate.prototype || wt(e, "icecandidate", (t)=>{
            if (t.candidate) {
                const n = zt.parseCandidate(t.candidate.candidate);
                n.type === "relay" && (t.candidate.relayProtocol = {
                    0: "tls",
                    1: "tcp",
                    2: "udp"
                }[n.priority >> 24]);
            }
            return t;
        });
    }
    function Vn(e, t) {
        if (!e.RTCPeerConnection) return;
        "sctp" in e.RTCPeerConnection.prototype || Object.defineProperty(e.RTCPeerConnection.prototype, "sctp", {
            get () {
                return typeof this._sctp > "u" ? null : this._sctp;
            }
        });
        const n = function(i) {
            if (!i || !i.sdp) return !1;
            const c = zt.splitSections(i.sdp);
            return c.shift(), c.some((l)=>{
                const u = zt.parseMLine(l);
                return u && u.kind === "application" && u.protocol.indexOf("SCTP") !== -1;
            });
        }, r = function(i) {
            const c = i.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);
            if (c === null || c.length < 2) return -1;
            const l = parseInt(c[1], 10);
            return l !== l ? -1 : l;
        }, o = function(i) {
            let c = 65536;
            return t.browser === "firefox" && (t.version < 57 ? i === -1 ? c = 16384 : c = 2147483637 : t.version < 60 ? c = t.version === 57 ? 65535 : 65536 : c = 2147483637), c;
        }, s = function(i, c) {
            let l = 65536;
            t.browser === "firefox" && t.version === 57 && (l = 65535);
            const u = zt.matchPrefix(i.sdp, "a=max-message-size:");
            return u.length > 0 ? l = parseInt(u[0].substring(19), 10) : t.browser === "firefox" && c !== -1 && (l = 2147483637), l;
        }, a = e.RTCPeerConnection.prototype.setRemoteDescription;
        e.RTCPeerConnection.prototype.setRemoteDescription = function() {
            if (this._sctp = null, t.browser === "chrome" && t.version >= 76) {
                const { sdpSemantics: c } = this.getConfiguration();
                c === "plan-b" && Object.defineProperty(this, "sctp", {
                    get () {
                        return typeof this._sctp > "u" ? null : this._sctp;
                    },
                    enumerable: !0,
                    configurable: !0
                });
            }
            if (n(arguments[0])) {
                const c = r(arguments[0]), l = o(c), u = s(arguments[0], c);
                let f;
                l === 0 && u === 0 ? f = Number.POSITIVE_INFINITY : l === 0 || u === 0 ? f = Math.max(l, u) : f = Math.min(l, u);
                const p = {};
                Object.defineProperty(p, "maxMessageSize", {
                    get () {
                        return f;
                    }
                }), this._sctp = p;
            }
            return a.apply(this, arguments);
        };
    }
    function Wn(e) {
        if (!(e.RTCPeerConnection && "createDataChannel" in e.RTCPeerConnection.prototype)) return;
        function t(r, o) {
            const s = r.send;
            r.send = function() {
                const i = arguments[0], c = i.length || i.size || i.byteLength;
                if (r.readyState === "open" && o.sctp && c > o.sctp.maxMessageSize) throw new TypeError("Message too large (can send a maximum of " + o.sctp.maxMessageSize + " bytes)");
                return s.apply(r, arguments);
            };
        }
        const n = e.RTCPeerConnection.prototype.createDataChannel;
        e.RTCPeerConnection.prototype.createDataChannel = function() {
            const o = n.apply(this, arguments);
            return t(o, this), o;
        }, wt(e, "datachannel", (r)=>(t(r.channel, r.target), r));
    }
    function Jr(e) {
        if (!e.RTCPeerConnection || "connectionState" in e.RTCPeerConnection.prototype) return;
        const t = e.RTCPeerConnection.prototype;
        Object.defineProperty(t, "connectionState", {
            get () {
                return {
                    completed: "connected",
                    checking: "connecting"
                }[this.iceConnectionState] || this.iceConnectionState;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t, "onconnectionstatechange", {
            get () {
                return this._onconnectionstatechange || null;
            },
            set (n) {
                this._onconnectionstatechange && (this.removeEventListener("connectionstatechange", this._onconnectionstatechange), delete this._onconnectionstatechange), n && this.addEventListener("connectionstatechange", this._onconnectionstatechange = n);
            },
            enumerable: !0,
            configurable: !0
        }), [
            "setLocalDescription",
            "setRemoteDescription"
        ].forEach((n)=>{
            const r = t[n];
            t[n] = function() {
                return this._connectionstatechangepoly || (this._connectionstatechangepoly = (o)=>{
                    const s = o.target;
                    if (s._lastConnectionState !== s.connectionState) {
                        s._lastConnectionState = s.connectionState;
                        const a = new Event("connectionstatechange", o);
                        s.dispatchEvent(a);
                    }
                    return o;
                }, this.addEventListener("iceconnectionstatechange", this._connectionstatechangepoly)), r.apply(this, arguments);
            };
        });
    }
    function Yr(e, t) {
        if (!e.RTCPeerConnection || t.browser === "chrome" && t.version >= 71 || t.browser === "safari" && t._safariVersion >= 13.1) return;
        const n = e.RTCPeerConnection.prototype.setRemoteDescription;
        e.RTCPeerConnection.prototype.setRemoteDescription = function(o) {
            if (o && o.sdp && o.sdp.indexOf(`
a=extmap-allow-mixed`) !== -1) {
                const s = o.sdp.split(`
`).filter((a)=>a.trim() !== "a=extmap-allow-mixed").join(`
`);
                e.RTCSessionDescription && o instanceof e.RTCSessionDescription ? arguments[0] = new e.RTCSessionDescription({
                    type: o.type,
                    sdp: s
                }) : o.sdp = s;
            }
            return n.apply(this, arguments);
        };
    }
    function Kn(e, t) {
        if (!(e.RTCPeerConnection && e.RTCPeerConnection.prototype)) return;
        const n = e.RTCPeerConnection.prototype.addIceCandidate;
        !n || n.length === 0 || (e.RTCPeerConnection.prototype.addIceCandidate = function() {
            return arguments[0] ? (t.browser === "chrome" && t.version < 78 || t.browser === "firefox" && t.version < 68 || t.browser === "safari") && arguments[0] && arguments[0].candidate === "" ? Promise.resolve() : n.apply(this, arguments) : (arguments[1] && arguments[1].apply(null), Promise.resolve());
        });
    }
    function Gn(e, t) {
        if (!(e.RTCPeerConnection && e.RTCPeerConnection.prototype)) return;
        const n = e.RTCPeerConnection.prototype.setLocalDescription;
        !n || n.length === 0 || (e.RTCPeerConnection.prototype.setLocalDescription = function() {
            let o = arguments[0] || {};
            if (typeof o != "object" || o.type && o.sdp) return n.apply(this, arguments);
            if (o = {
                type: o.type,
                sdp: o.sdp
            }, !o.type) switch(this.signalingState){
                case "stable":
                case "have-local-offer":
                case "have-remote-pranswer":
                    o.type = "offer";
                    break;
                default:
                    o.type = "answer";
                    break;
            }
            return o.sdp || o.type !== "offer" && o.type !== "answer" ? n.apply(this, [
                o
            ]) : (o.type === "offer" ? this.createOffer : this.createAnswer).apply(this).then((a)=>n.apply(this, [
                    a
                ]));
        });
    }
    const Zb = Object.freeze(Object.defineProperty({
        __proto__: null,
        removeExtmapAllowMixed: Yr,
        shimAddIceCandidateNullOrEmpty: Kn,
        shimConnectionState: Jr,
        shimMaxMessageSize: Vn,
        shimParameterlessSetLocalDescription: Gn,
        shimRTCIceCandidate: Hn,
        shimRTCIceCandidateRelayProtocol: Gr,
        shimSendThrowTypeError: Wn
    }, Symbol.toStringTag, {
        value: "Module"
    }));
    function Xb({ window: e } = {}, t = {
        shimChrome: !0,
        shimFirefox: !0,
        shimSafari: !0
    }) {
        const n = Yi, r = Gb(e), o = {
            browserDetails: r,
            commonShim: Zb,
            extractVersion: sn,
            disableLog: Wb,
            disableWarnings: Kb,
            sdp: qb
        };
        switch(r.browser){
            case "chrome":
                if (!da || !Wr || !t.shimChrome) return n("Chrome shim is not included in this adapter release."), o;
                if (r.version === null) return n("Chrome shim can not determine version, not shimming."), o;
                n("adapter.js shimming chrome."), o.browserShim = da, Kn(e, r), Gn(e), Zi(e, r), Xi(e), Wr(e, r), Qi(e), rc(e, r), ec(e), tc(e), oc(e, r), Hn(e), Gr(e), Jr(e), Vn(e, r), Wn(e), Yr(e, r);
                break;
            case "firefox":
                if (!pa || !Kr || !t.shimFirefox) return n("Firefox shim is not included in this adapter release."), o;
                n("adapter.js shimming firefox."), o.browserShim = pa, Kn(e, r), Gn(e), sc(e, r), Kr(e, r), ac(e), lc(e), ic(e), cc(e), uc(e), fc(e), dc(e), pc(e), hc(e), Hn(e), Jr(e), Vn(e, r), Wn(e);
                break;
            case "safari":
                if (!ha || !t.shimSafari) return n("Safari shim is not included in this adapter release."), o;
                n("adapter.js shimming safari."), o.browserShim = ha, Kn(e, r), Gn(e), yc(e), Sc(e), vc(e), mc(e), gc(e), Cc(e), bc(e), Tc(e), Hn(e), Gr(e), Vn(e, r), Wn(e), Yr(e, r);
                break;
            default:
                n("Unsupported browser!");
                break;
        }
        return o;
    }
    const ga = Xb({
        window: typeof window > "u" ? void 0 : window
    });
    function Et(e, t, n, r) {
        Object.defineProperty(e, t, {
            get: n,
            set: r,
            enumerable: !0,
            configurable: !0
        });
    }
    class kc {
        constructor(){
            this.chunkedMTU = 16300, this._dataCount = 1, this.chunk = (t)=>{
                const n = [], r = t.byteLength, o = Math.ceil(r / this.chunkedMTU);
                let s = 0, a = 0;
                for(; a < r;){
                    const i = Math.min(r, a + this.chunkedMTU), c = t.slice(a, i), l = {
                        __peerData: this._dataCount,
                        n: s,
                        data: c,
                        total: o
                    };
                    n.push(l), a = i, s++;
                }
                return this._dataCount++, n;
            };
        }
    }
    function Qb(e) {
        let t = 0;
        for (const o of e)t += o.byteLength;
        const n = new Uint8Array(t);
        let r = 0;
        for (const o of e)n.set(o, r), r += o.byteLength;
        return n;
    }
    const Rr = ga.default || ga, on = new class {
        isWebRTCSupported() {
            return typeof RTCPeerConnection < "u";
        }
        isBrowserSupported() {
            const e = this.getBrowser(), t = this.getVersion();
            return this.supportedBrowsers.includes(e) ? e === "chrome" ? t >= this.minChromeVersion : e === "firefox" ? t >= this.minFirefoxVersion : e === "safari" ? !this.isIOS && t >= this.minSafariVersion : !1 : !1;
        }
        getBrowser() {
            return Rr.browserDetails.browser;
        }
        getVersion() {
            return Rr.browserDetails.version || 0;
        }
        isUnifiedPlanSupported() {
            const e = this.getBrowser(), t = Rr.browserDetails.version || 0;
            if (e === "chrome" && t < this.minChromeVersion) return !1;
            if (e === "firefox" && t >= this.minFirefoxVersion) return !0;
            if (!window.RTCRtpTransceiver || !("currentDirection" in RTCRtpTransceiver.prototype)) return !1;
            let n, r = !1;
            try {
                n = new RTCPeerConnection, n.addTransceiver("audio"), r = !0;
            } catch  {} finally{
                n && n.close();
            }
            return r;
        }
        toString() {
            return `Supports:
    browser:${this.getBrowser()}
    version:${this.getVersion()}
    isIOS:${this.isIOS}
    isWebRTCSupported:${this.isWebRTCSupported()}
    isBrowserSupported:${this.isBrowserSupported()}
    isUnifiedPlanSupported:${this.isUnifiedPlanSupported()}`;
        }
        constructor(){
            this.isIOS = typeof navigator < "u" ? [
                "iPad",
                "iPhone",
                "iPod"
            ].includes(navigator.platform) : !1, this.supportedBrowsers = [
                "firefox",
                "chrome",
                "safari"
            ], this.minFirefoxVersion = 59, this.minChromeVersion = 72, this.minSafariVersion = 605;
        }
    }, e_ = (e)=>!e || /^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/.test(e), wc = ()=>Math.random().toString(36).slice(2), va = {
        iceServers: [
            {
                urls: "stun:stun.l.google.com:19302"
            },
            {
                urls: [
                    "turn:eu-0.turn.peerjs.com:3478",
                    "turn:us-0.turn.peerjs.com:3478"
                ],
                username: "peerjs",
                credential: "peerjsp"
            }
        ],
        sdpSemantics: "unified-plan"
    };
    class t_ extends kc {
        noop() {}
        blobToArrayBuffer(t, n) {
            const r = new FileReader;
            return r.onload = function(o) {
                o.target && n(o.target.result);
            }, r.readAsArrayBuffer(t), r;
        }
        binaryStringToArrayBuffer(t) {
            const n = new Uint8Array(t.length);
            for(let r = 0; r < t.length; r++)n[r] = t.charCodeAt(r) & 255;
            return n.buffer;
        }
        isSecure() {
            return location.protocol === "https:";
        }
        constructor(...t){
            super(...t), this.CLOUD_HOST = "0.peerjs.com", this.CLOUD_PORT = 443, this.chunkedBrowsers = {
                Chrome: 1,
                chrome: 1
            }, this.defaultConfig = va, this.browser = on.getBrowser(), this.browserVersion = on.getVersion(), this.pack = Ki, this.unpack = Wi, this.supports = function() {
                const n = {
                    browser: on.isBrowserSupported(),
                    webRTC: on.isWebRTCSupported(),
                    audioVideo: !1,
                    data: !1,
                    binaryBlob: !1,
                    reliable: !1
                };
                if (!n.webRTC) return n;
                let r;
                try {
                    r = new RTCPeerConnection(va), n.audioVideo = !0;
                    let o;
                    try {
                        o = r.createDataChannel("_PEERJSTEST", {
                            ordered: !0
                        }), n.data = !0, n.reliable = !!o.ordered;
                        try {
                            o.binaryType = "blob", n.binaryBlob = !on.isIOS;
                        } catch  {}
                    } catch  {} finally{
                        o && o.close();
                    }
                } catch  {} finally{
                    r && r.close();
                }
                return n;
            }(), this.validateId = e_, this.randomToken = wc;
        }
    }
    const ge = new t_, n_ = "PeerJS: ";
    var ba;
    (function(e) {
        e[e.Disabled = 0] = "Disabled", e[e.Errors = 1] = "Errors", e[e.Warnings = 2] = "Warnings", e[e.All = 3] = "All";
    })(ba || (ba = {}));
    class r_ {
        get logLevel() {
            return this._logLevel;
        }
        set logLevel(t) {
            this._logLevel = t;
        }
        log(...t) {
            this._logLevel >= 3 && this._print(3, ...t);
        }
        warn(...t) {
            this._logLevel >= 2 && this._print(2, ...t);
        }
        error(...t) {
            this._logLevel >= 1 && this._print(1, ...t);
        }
        setLogFunction(t) {
            this._print = t;
        }
        _print(t, ...n) {
            const r = [
                n_,
                ...n
            ];
            for(const o in r)r[o] instanceof Error && (r[o] = "(" + r[o].name + ") " + r[o].message);
            t >= 3 ? console.log(...r) : t >= 2 ? console.warn("WARNING", ...r) : t >= 1 && console.error("ERROR", ...r);
        }
        constructor(){
            this._logLevel = 0;
        }
    }
    var O = new r_, zo = {}, o_ = Object.prototype.hasOwnProperty, pe = "~";
    function _n() {}
    Object.create && (_n.prototype = Object.create(null), new _n().__proto__ || (pe = !1));
    function s_(e, t, n) {
        this.fn = e, this.context = t, this.once = n || !1;
    }
    function Ec(e, t, n, r, o) {
        if (typeof n != "function") throw new TypeError("The listener must be a function");
        var s = new s_(n, r || e, o), a = pe ? pe + t : t;
        return e._events[a] ? e._events[a].fn ? e._events[a] = [
            e._events[a],
            s
        ] : e._events[a].push(s) : (e._events[a] = s, e._eventsCount++), e;
    }
    function Jn(e, t) {
        --e._eventsCount === 0 ? e._events = new _n : delete e._events[t];
    }
    function fe() {
        this._events = new _n, this._eventsCount = 0;
    }
    fe.prototype.eventNames = function() {
        var t = [], n, r;
        if (this._eventsCount === 0) return t;
        for(r in n = this._events)o_.call(n, r) && t.push(pe ? r.slice(1) : r);
        return Object.getOwnPropertySymbols ? t.concat(Object.getOwnPropertySymbols(n)) : t;
    };
    fe.prototype.listeners = function(t) {
        var n = pe ? pe + t : t, r = this._events[n];
        if (!r) return [];
        if (r.fn) return [
            r.fn
        ];
        for(var o = 0, s = r.length, a = new Array(s); o < s; o++)a[o] = r[o].fn;
        return a;
    };
    fe.prototype.listenerCount = function(t) {
        var n = pe ? pe + t : t, r = this._events[n];
        return r ? r.fn ? 1 : r.length : 0;
    };
    fe.prototype.emit = function(t, n, r, o, s, a) {
        var i = pe ? pe + t : t;
        if (!this._events[i]) return !1;
        var c = this._events[i], l = arguments.length, u, f;
        if (c.fn) {
            switch(c.once && this.removeListener(t, c.fn, void 0, !0), l){
                case 1:
                    return c.fn.call(c.context), !0;
                case 2:
                    return c.fn.call(c.context, n), !0;
                case 3:
                    return c.fn.call(c.context, n, r), !0;
                case 4:
                    return c.fn.call(c.context, n, r, o), !0;
                case 5:
                    return c.fn.call(c.context, n, r, o, s), !0;
                case 6:
                    return c.fn.call(c.context, n, r, o, s, a), !0;
            }
            for(f = 1, u = new Array(l - 1); f < l; f++)u[f - 1] = arguments[f];
            c.fn.apply(c.context, u);
        } else {
            var p = c.length, m;
            for(f = 0; f < p; f++)switch(c[f].once && this.removeListener(t, c[f].fn, void 0, !0), l){
                case 1:
                    c[f].fn.call(c[f].context);
                    break;
                case 2:
                    c[f].fn.call(c[f].context, n);
                    break;
                case 3:
                    c[f].fn.call(c[f].context, n, r);
                    break;
                case 4:
                    c[f].fn.call(c[f].context, n, r, o);
                    break;
                default:
                    if (!u) for(m = 1, u = new Array(l - 1); m < l; m++)u[m - 1] = arguments[m];
                    c[f].fn.apply(c[f].context, u);
            }
        }
        return !0;
    };
    fe.prototype.on = function(t, n, r) {
        return Ec(this, t, n, r, !1);
    };
    fe.prototype.once = function(t, n, r) {
        return Ec(this, t, n, r, !0);
    };
    fe.prototype.removeListener = function(t, n, r, o) {
        var s = pe ? pe + t : t;
        if (!this._events[s]) return this;
        if (!n) return Jn(this, s), this;
        var a = this._events[s];
        if (a.fn) a.fn === n && (!o || a.once) && (!r || a.context === r) && Jn(this, s);
        else {
            for(var i = 0, c = [], l = a.length; i < l; i++)(a[i].fn !== n || o && !a[i].once || r && a[i].context !== r) && c.push(a[i]);
            c.length ? this._events[s] = c.length === 1 ? c[0] : c : Jn(this, s);
        }
        return this;
    };
    fe.prototype.removeAllListeners = function(t) {
        var n;
        return t ? (n = pe ? pe + t : t, this._events[n] && Jn(this, n)) : (this._events = new _n, this._eventsCount = 0), this;
    };
    fe.prototype.off = fe.prototype.removeListener;
    fe.prototype.addListener = fe.prototype.on;
    fe.prefixed = pe;
    fe.EventEmitter = fe;
    zo = fe;
    var Pt = {};
    Et(Pt, "ConnectionType", ()=>Ue);
    Et(Pt, "PeerErrorType", ()=>re);
    Et(Pt, "BaseConnectionErrorType", ()=>yn);
    Et(Pt, "DataConnectionErrorType", ()=>Cn);
    Et(Pt, "SerializationType", ()=>Kt);
    Et(Pt, "SocketEventType", ()=>Fe);
    Et(Pt, "ServerMessageType", ()=>ie);
    var Ue;
    (function(e) {
        e.Data = "data", e.Media = "media";
    })(Ue || (Ue = {}));
    var re;
    (function(e) {
        e.BrowserIncompatible = "browser-incompatible", e.Disconnected = "disconnected", e.InvalidID = "invalid-id", e.InvalidKey = "invalid-key", e.Network = "network", e.PeerUnavailable = "peer-unavailable", e.SslUnavailable = "ssl-unavailable", e.ServerError = "server-error", e.SocketError = "socket-error", e.SocketClosed = "socket-closed", e.UnavailableID = "unavailable-id", e.WebRTC = "webrtc";
    })(re || (re = {}));
    var yn;
    (function(e) {
        e.NegotiationFailed = "negotiation-failed", e.ConnectionClosed = "connection-closed";
    })(yn || (yn = {}));
    var Cn;
    (function(e) {
        e.NotOpenYet = "not-open-yet", e.MessageToBig = "message-too-big";
    })(Cn || (Cn = {}));
    var Kt;
    (function(e) {
        e.Binary = "binary", e.BinaryUTF8 = "binary-utf8", e.JSON = "json", e.None = "raw";
    })(Kt || (Kt = {}));
    var Fe;
    (function(e) {
        e.Message = "message", e.Disconnected = "disconnected", e.Error = "error", e.Close = "close";
    })(Fe || (Fe = {}));
    var ie;
    (function(e) {
        e.Heartbeat = "HEARTBEAT", e.Candidate = "CANDIDATE", e.Offer = "OFFER", e.Answer = "ANSWER", e.Open = "OPEN", e.Error = "ERROR", e.IdTaken = "ID-TAKEN", e.InvalidKey = "INVALID-KEY", e.Leave = "LEAVE", e.Expire = "EXPIRE";
    })(ie || (ie = {}));
    var Fo = {};
    Fo = JSON.parse('{"name":"peerjs","version":"1.5.4","keywords":["peerjs","webrtc","p2p","rtc"],"description":"PeerJS client","homepage":"https://peerjs.com","bugs":{"url":"https://github.com/peers/peerjs/issues"},"repository":{"type":"git","url":"https://github.com/peers/peerjs"},"license":"MIT","contributors":["Michelle Bu <michelle@michellebu.com>","afrokick <devbyru@gmail.com>","ericz <really.ez@gmail.com>","Jairo <kidandcat@gmail.com>","Jonas Gloning <34194370+jonasgloning@users.noreply.github.com>","Jairo Caro-Accino Viciana <jairo@galax.be>","Carlos Caballero <carlos.caballero.gonzalez@gmail.com>","hc <hheennrryy@gmail.com>","Muhammad Asif <capripio@gmail.com>","PrashoonB <prashoonbhattacharjee@gmail.com>","Harsh Bardhan Mishra <47351025+HarshCasper@users.noreply.github.com>","akotynski <aleksanderkotbury@gmail.com>","lmb <i@lmb.io>","Jairooo <jairocaro@msn.com>","Moritz Stückler <moritz.stueckler@gmail.com>","Simon <crydotsnakegithub@gmail.com>","Denis Lukov <denismassters@gmail.com>","Philipp Hancke <fippo@andyet.net>","Hans Oksendahl <hansoksendahl@gmail.com>","Jess <jessachandler@gmail.com>","khankuan <khankuan@gmail.com>","DUODVK <kurmanov.work@gmail.com>","XiZhao <kwang1imsa@gmail.com>","Matthias Lohr <matthias@lohr.me>","=frank tree <=frnktrb@googlemail.com>","Andre Eckardt <aeckardt@outlook.com>","Chris Cowan <agentme49@gmail.com>","Alex Chuev <alex@chuev.com>","alxnull <alxnull@e.mail.de>","Yemel Jardi <angel.jardi@gmail.com>","Ben Parnell <benjaminparnell.94@gmail.com>","Benny Lichtner <bennlich@gmail.com>","fresheneesz <bitetrudpublic@gmail.com>","bob.barstead@exaptive.com <bob.barstead@exaptive.com>","chandika <chandika@gmail.com>","emersion <contact@emersion.fr>","Christopher Van <cvan@users.noreply.github.com>","eddieherm <edhermoso@gmail.com>","Eduardo Pinho <enet4mikeenet@gmail.com>","Evandro Zanatta <ezanatta@tray.net.br>","Gardner Bickford <gardner@users.noreply.github.com>","Gian Luca <gianluca.cecchi@cynny.com>","PatrickJS <github@gdi2290.com>","jonnyf <github@jonathanfoss.co.uk>","Hizkia Felix <hizkifw@gmail.com>","Hristo Oskov <hristo.oskov@gmail.com>","Isaac Madwed <i.madwed@gmail.com>","Ilya Konanykhin <ilya.konanykhin@gmail.com>","jasonbarry <jasbarry@me.com>","Jonathan Burke <jonathan.burke.1311@googlemail.com>","Josh Hamit <josh.hamit@gmail.com>","Jordan Austin <jrax86@gmail.com>","Joel Wetzell <jwetzell@yahoo.com>","xizhao <kevin.wang@cloudera.com>","Alberto Torres <kungfoobar@gmail.com>","Jonathan Mayol <mayoljonathan@gmail.com>","Jefferson Felix <me@jsfelix.dev>","Rolf Erik Lekang <me@rolflekang.com>","Kevin Mai-Husan Chia <mhchia@users.noreply.github.com>","Pepijn de Vos <pepijndevos@gmail.com>","JooYoung <qkdlql@naver.com>","Tobias Speicher <rootcommander@gmail.com>","Steve Blaurock <sblaurock@gmail.com>","Kyrylo Shegeda <shegeda@ualberta.ca>","Diwank Singh Tomer <singh@diwank.name>","Sören Balko <Soeren.Balko@gmail.com>","Arpit Solanki <solankiarpit1997@gmail.com>","Yuki Ito <yuki@gnnk.net>","Artur Zayats <zag2art@gmail.com>"],"funding":{"type":"opencollective","url":"https://opencollective.com/peer"},"collective":{"type":"opencollective","url":"https://opencollective.com/peer"},"files":["dist/*"],"sideEffects":["lib/global.ts","lib/supports.ts"],"main":"dist/bundler.cjs","module":"dist/bundler.mjs","browser-minified":"dist/peerjs.min.js","browser-unminified":"dist/peerjs.js","browser-minified-msgpack":"dist/serializer.msgpack.mjs","types":"dist/types.d.ts","engines":{"node":">= 14"},"targets":{"types":{"source":"lib/exports.ts"},"main":{"source":"lib/exports.ts","sourceMap":{"inlineSources":true}},"module":{"source":"lib/exports.ts","includeNodeModules":["eventemitter3"],"sourceMap":{"inlineSources":true}},"browser-minified":{"context":"browser","outputFormat":"global","optimize":true,"engines":{"browsers":"chrome >= 83, edge >= 83, firefox >= 80, safari >= 15"},"source":"lib/global.ts"},"browser-unminified":{"context":"browser","outputFormat":"global","optimize":false,"engines":{"browsers":"chrome >= 83, edge >= 83, firefox >= 80, safari >= 15"},"source":"lib/global.ts"},"browser-minified-msgpack":{"context":"browser","outputFormat":"esmodule","isLibrary":true,"optimize":true,"engines":{"browsers":"chrome >= 83, edge >= 83, firefox >= 102, safari >= 15"},"source":"lib/dataconnection/StreamConnection/MsgPack.ts"}},"scripts":{"contributors":"git-authors-cli --print=false && prettier --write package.json && git add package.json package-lock.json && git commit -m \\"chore(contributors): update and sort contributors list\\"","check":"tsc --noEmit && tsc -p e2e/tsconfig.json --noEmit","watch":"parcel watch","build":"rm -rf dist && parcel build","prepublishOnly":"npm run build","test":"jest","test:watch":"jest --watch","coverage":"jest --coverage --collectCoverageFrom=\\"./lib/**\\"","format":"prettier --write .","format:check":"prettier --check .","semantic-release":"semantic-release","e2e":"wdio run e2e/wdio.local.conf.ts","e2e:bstack":"wdio run e2e/wdio.bstack.conf.ts"},"devDependencies":{"@parcel/config-default":"^2.9.3","@parcel/packager-ts":"^2.9.3","@parcel/transformer-typescript-tsc":"^2.9.3","@parcel/transformer-typescript-types":"^2.9.3","@semantic-release/changelog":"^6.0.1","@semantic-release/git":"^10.0.1","@swc/core":"^1.3.27","@swc/jest":"^0.2.24","@types/jasmine":"^4.3.4","@wdio/browserstack-service":"^8.11.2","@wdio/cli":"^8.11.2","@wdio/globals":"^8.11.2","@wdio/jasmine-framework":"^8.11.2","@wdio/local-runner":"^8.11.2","@wdio/spec-reporter":"^8.11.2","@wdio/types":"^8.10.4","http-server":"^14.1.1","jest":"^29.3.1","jest-environment-jsdom":"^29.3.1","mock-socket":"^9.0.0","parcel":"^2.9.3","prettier":"^3.0.0","semantic-release":"^21.0.0","ts-node":"^10.9.1","typescript":"^5.0.0","wdio-geckodriver-service":"^5.0.1"},"dependencies":{"@msgpack/msgpack":"^2.8.0","eventemitter3":"^4.0.7","peerjs-js-binarypack":"^2.1.0","webrtc-adapter":"^9.0.0"},"alias":{"process":false,"buffer":false}}');
    class a_ extends zo.EventEmitter {
        constructor(t, n, r, o, s, a = 5e3){
            super(), this.pingInterval = a, this._disconnected = !0, this._messagesQueue = [];
            const i = t ? "wss://" : "ws://";
            this._baseUrl = i + n + ":" + r + o + "peerjs?key=" + s;
        }
        start(t, n) {
            this._id = t;
            const r = `${this._baseUrl}&id=${t}&token=${n}`;
            this._socket || !this._disconnected || (this._socket = new WebSocket(r + "&version=" + Fo.version), this._disconnected = !1, this._socket.onmessage = (o)=>{
                let s;
                try {
                    s = JSON.parse(o.data), O.log("Server message received:", s);
                } catch  {
                    O.log("Invalid server message", o.data);
                    return;
                }
                this.emit(Fe.Message, s);
            }, this._socket.onclose = (o)=>{
                this._disconnected || (O.log("Socket closed.", o), this._cleanup(), this._disconnected = !0, this.emit(Fe.Disconnected));
            }, this._socket.onopen = ()=>{
                this._disconnected || (this._sendQueuedMessages(), O.log("Socket open"), this._scheduleHeartbeat());
            });
        }
        _scheduleHeartbeat() {
            this._wsPingTimer = setTimeout(()=>{
                this._sendHeartbeat();
            }, this.pingInterval);
        }
        _sendHeartbeat() {
            if (!this._wsOpen()) {
                O.log("Cannot send heartbeat, because socket closed");
                return;
            }
            const t = JSON.stringify({
                type: ie.Heartbeat
            });
            this._socket.send(t), this._scheduleHeartbeat();
        }
        _wsOpen() {
            return !!this._socket && this._socket.readyState === 1;
        }
        _sendQueuedMessages() {
            const t = [
                ...this._messagesQueue
            ];
            this._messagesQueue = [];
            for (const n of t)this.send(n);
        }
        send(t) {
            if (this._disconnected) return;
            if (!this._id) {
                this._messagesQueue.push(t);
                return;
            }
            if (!t.type) {
                this.emit(Fe.Error, "Invalid message");
                return;
            }
            if (!this._wsOpen()) return;
            const n = JSON.stringify(t);
            this._socket.send(n);
        }
        close() {
            this._disconnected || (this._cleanup(), this._disconnected = !0);
        }
        _cleanup() {
            this._socket && (this._socket.onopen = this._socket.onmessage = this._socket.onclose = null, this._socket.close(), this._socket = void 0), clearTimeout(this._wsPingTimer);
        }
    }
    class Pc {
        constructor(t){
            this.connection = t;
        }
        startConnection(t) {
            const n = this._startPeerConnection();
            if (this.connection.peerConnection = n, this.connection.type === Ue.Media && t._stream && this._addTracksToConnection(t._stream, n), t.originator) {
                const r = this.connection, o = {
                    ordered: !!t.reliable
                }, s = n.createDataChannel(r.label, o);
                r._initializeDataChannel(s), this._makeOffer();
            } else this.handleSDP("OFFER", t.sdp);
        }
        _startPeerConnection() {
            O.log("Creating RTCPeerConnection.");
            const t = new RTCPeerConnection(this.connection.provider.options.config);
            return this._setupListeners(t), t;
        }
        _setupListeners(t) {
            const n = this.connection.peer, r = this.connection.connectionId, o = this.connection.type, s = this.connection.provider;
            O.log("Listening for ICE candidates."), t.onicecandidate = (a)=>{
                !a.candidate || !a.candidate.candidate || (O.log(`Received ICE candidates for ${n}:`, a.candidate), s.socket.send({
                    type: ie.Candidate,
                    payload: {
                        candidate: a.candidate,
                        type: o,
                        connectionId: r
                    },
                    dst: n
                }));
            }, t.oniceconnectionstatechange = ()=>{
                switch(t.iceConnectionState){
                    case "failed":
                        O.log("iceConnectionState is failed, closing connections to " + n), this.connection.emitError(yn.NegotiationFailed, "Negotiation of connection to " + n + " failed."), this.connection.close();
                        break;
                    case "closed":
                        O.log("iceConnectionState is closed, closing connections to " + n), this.connection.emitError(yn.ConnectionClosed, "Connection to " + n + " closed."), this.connection.close();
                        break;
                    case "disconnected":
                        O.log("iceConnectionState changed to disconnected on the connection with " + n);
                        break;
                    case "completed":
                        t.onicecandidate = ()=>{};
                        break;
                }
                this.connection.emit("iceStateChanged", t.iceConnectionState);
            }, O.log("Listening for data channel"), t.ondatachannel = (a)=>{
                O.log("Received data channel");
                const i = a.channel;
                s.getConnection(n, r)._initializeDataChannel(i);
            }, O.log("Listening for remote stream"), t.ontrack = (a)=>{
                O.log("Received remote stream");
                const i = a.streams[0], c = s.getConnection(n, r);
                if (c.type === Ue.Media) {
                    const l = c;
                    this._addStreamToMediaConnection(i, l);
                }
            };
        }
        cleanup() {
            O.log("Cleaning up PeerConnection to " + this.connection.peer);
            const t = this.connection.peerConnection;
            if (!t) return;
            this.connection.peerConnection = null, t.onicecandidate = t.oniceconnectionstatechange = t.ondatachannel = t.ontrack = ()=>{};
            const n = t.signalingState !== "closed";
            let r = !1;
            const o = this.connection.dataChannel;
            o && (r = !!o.readyState && o.readyState !== "closed"), (n || r) && t.close();
        }
        async _makeOffer() {
            const t = this.connection.peerConnection, n = this.connection.provider;
            try {
                const r = await t.createOffer(this.connection.options.constraints);
                O.log("Created offer."), this.connection.options.sdpTransform && typeof this.connection.options.sdpTransform == "function" && (r.sdp = this.connection.options.sdpTransform(r.sdp) || r.sdp);
                try {
                    await t.setLocalDescription(r), O.log("Set localDescription:", r, `for:${this.connection.peer}`);
                    let o = {
                        sdp: r,
                        type: this.connection.type,
                        connectionId: this.connection.connectionId,
                        metadata: this.connection.metadata
                    };
                    if (this.connection.type === Ue.Data) {
                        const s = this.connection;
                        o = {
                            ...o,
                            label: s.label,
                            reliable: s.reliable,
                            serialization: s.serialization
                        };
                    }
                    n.socket.send({
                        type: ie.Offer,
                        payload: o,
                        dst: this.connection.peer
                    });
                } catch (o) {
                    o != "OperationError: Failed to set local offer sdp: Called in wrong state: kHaveRemoteOffer" && (n.emitError(re.WebRTC, o), O.log("Failed to setLocalDescription, ", o));
                }
            } catch (r) {
                n.emitError(re.WebRTC, r), O.log("Failed to createOffer, ", r);
            }
        }
        async _makeAnswer() {
            const t = this.connection.peerConnection, n = this.connection.provider;
            try {
                const r = await t.createAnswer();
                O.log("Created answer."), this.connection.options.sdpTransform && typeof this.connection.options.sdpTransform == "function" && (r.sdp = this.connection.options.sdpTransform(r.sdp) || r.sdp);
                try {
                    await t.setLocalDescription(r), O.log("Set localDescription:", r, `for:${this.connection.peer}`), n.socket.send({
                        type: ie.Answer,
                        payload: {
                            sdp: r,
                            type: this.connection.type,
                            connectionId: this.connection.connectionId
                        },
                        dst: this.connection.peer
                    });
                } catch (o) {
                    n.emitError(re.WebRTC, o), O.log("Failed to setLocalDescription, ", o);
                }
            } catch (r) {
                n.emitError(re.WebRTC, r), O.log("Failed to create answer, ", r);
            }
        }
        async handleSDP(t, n) {
            n = new RTCSessionDescription(n);
            const r = this.connection.peerConnection, o = this.connection.provider;
            O.log("Setting remote description", n);
            const s = this;
            try {
                await r.setRemoteDescription(n), O.log(`Set remoteDescription:${t} for:${this.connection.peer}`), t === "OFFER" && await s._makeAnswer();
            } catch (a) {
                o.emitError(re.WebRTC, a), O.log("Failed to setRemoteDescription, ", a);
            }
        }
        async handleCandidate(t) {
            O.log("handleCandidate:", t);
            try {
                await this.connection.peerConnection.addIceCandidate(t), O.log(`Added ICE candidate for:${this.connection.peer}`);
            } catch (n) {
                this.connection.provider.emitError(re.WebRTC, n), O.log("Failed to handleCandidate, ", n);
            }
        }
        _addTracksToConnection(t, n) {
            if (O.log(`add tracks from stream ${t.id} to peer connection`), !n.addTrack) return O.error("Your browser does't support RTCPeerConnection#addTrack. Ignored.");
            t.getTracks().forEach((r)=>{
                n.addTrack(r, t);
            });
        }
        _addStreamToMediaConnection(t, n) {
            O.log(`add stream ${t.id} to media connection ${n.connectionId}`), n.addStream(t);
        }
    }
    class Rc extends zo.EventEmitter {
        emitError(t, n) {
            O.error("Error:", n), this.emit("error", new i_(`${t}`, n));
        }
    }
    class i_ extends Error {
        constructor(t, n){
            typeof n == "string" ? super(n) : (super(), Object.assign(this, n)), this.type = t;
        }
    }
    class Oc extends Rc {
        get open() {
            return this._open;
        }
        constructor(t, n, r){
            super(), this.peer = t, this.provider = n, this.options = r, this._open = !1, this.metadata = r.metadata;
        }
    }
    class sr extends Oc {
        static #e = this.ID_PREFIX = "mc_";
        get type() {
            return Ue.Media;
        }
        get localStream() {
            return this._localStream;
        }
        get remoteStream() {
            return this._remoteStream;
        }
        constructor(t, n, r){
            super(t, n, r), this._localStream = this.options._stream, this.connectionId = this.options.connectionId || sr.ID_PREFIX + ge.randomToken(), this._negotiator = new Pc(this), this._localStream && this._negotiator.startConnection({
                _stream: this._localStream,
                originator: !0
            });
        }
        _initializeDataChannel(t) {
            this.dataChannel = t, this.dataChannel.onopen = ()=>{
                O.log(`DC#${this.connectionId} dc connection success`), this.emit("willCloseOnRemote");
            }, this.dataChannel.onclose = ()=>{
                O.log(`DC#${this.connectionId} dc closed for:`, this.peer), this.close();
            };
        }
        addStream(t) {
            O.log("Receiving stream", t), this._remoteStream = t, super.emit("stream", t);
        }
        handleMessage(t) {
            const n = t.type, r = t.payload;
            switch(t.type){
                case ie.Answer:
                    this._negotiator.handleSDP(n, r.sdp), this._open = !0;
                    break;
                case ie.Candidate:
                    this._negotiator.handleCandidate(r.candidate);
                    break;
                default:
                    O.warn(`Unrecognized message type:${n} from peer:${this.peer}`);
                    break;
            }
        }
        answer(t, n = {}) {
            if (this._localStream) {
                O.warn("Local stream already exists on this MediaConnection. Are you answering a call twice?");
                return;
            }
            this._localStream = t, n && n.sdpTransform && (this.options.sdpTransform = n.sdpTransform), this._negotiator.startConnection({
                ...this.options._payload,
                _stream: t
            });
            const r = this.provider._getMessages(this.connectionId);
            for (const o of r)this.handleMessage(o);
            this._open = !0;
        }
        close() {
            this._negotiator && (this._negotiator.cleanup(), this._negotiator = null), this._localStream = null, this._remoteStream = null, this.provider && (this.provider._removeConnection(this), this.provider = null), this.options && this.options._stream && (this.options._stream = null), this.open && (this._open = !1, super.emit("close"));
        }
    }
    class c_ {
        constructor(t){
            this._options = t;
        }
        _buildRequest(t) {
            const n = this._options.secure ? "https" : "http", { host: r, port: o, path: s, key: a } = this._options, i = new URL(`${n}://${r}:${o}${s}${a}/${t}`);
            return i.searchParams.set("ts", `${Date.now()}${Math.random()}`), i.searchParams.set("version", Fo.version), fetch(i.href, {
                referrerPolicy: this._options.referrerPolicy
            });
        }
        async retrieveId() {
            try {
                const t = await this._buildRequest("id");
                if (t.status !== 200) throw new Error(`Error. Status:${t.status}`);
                return t.text();
            } catch (t) {
                O.error("Error retrieving ID", t);
                let n = "";
                throw this._options.path === "/" && this._options.host !== ge.CLOUD_HOST && (n = " If you passed in a `path` to your self-hosted PeerServer, you'll also need to pass in that same path when creating a new Peer."), new Error("Could not get an ID from the server." + n);
            }
        }
        async listAllPeers() {
            try {
                const t = await this._buildRequest("peers");
                if (t.status !== 200) {
                    if (t.status === 401) {
                        let n = "";
                        throw this._options.host === ge.CLOUD_HOST ? n = "It looks like you're using the cloud server. You can email team@peerjs.com to enable peer listing for your API key." : n = "You need to enable `allow_discovery` on your self-hosted PeerServer to use this feature.", new Error("It doesn't look like you have permission to list peers IDs. " + n);
                    }
                    throw new Error(`Error. Status:${t.status}`);
                }
                return t.json();
            } catch (t) {
                throw O.error("Error retrieving list peers", t), new Error("Could not get list peers from the server." + t);
            }
        }
    }
    class ar extends Oc {
        static #e = this.ID_PREFIX = "dc_";
        static #t = this.MAX_BUFFERED_AMOUNT = 8388608;
        get type() {
            return Ue.Data;
        }
        constructor(t, n, r){
            super(t, n, r), this.connectionId = this.options.connectionId || ar.ID_PREFIX + wc(), this.label = this.options.label || this.connectionId, this.reliable = !!this.options.reliable, this._negotiator = new Pc(this), this._negotiator.startConnection(this.options._payload || {
                originator: !0,
                reliable: this.reliable
            });
        }
        _initializeDataChannel(t) {
            this.dataChannel = t, this.dataChannel.onopen = ()=>{
                O.log(`DC#${this.connectionId} dc connection success`), this._open = !0, this.emit("open");
            }, this.dataChannel.onmessage = (n)=>{
                O.log(`DC#${this.connectionId} dc onmessage:`, n.data);
            }, this.dataChannel.onclose = ()=>{
                O.log(`DC#${this.connectionId} dc closed for:`, this.peer), this.close();
            };
        }
        close(t) {
            if (t?.flush) {
                this.send({
                    __peerData: {
                        type: "close"
                    }
                });
                return;
            }
            this._negotiator && (this._negotiator.cleanup(), this._negotiator = null), this.provider && (this.provider._removeConnection(this), this.provider = null), this.dataChannel && (this.dataChannel.onopen = null, this.dataChannel.onmessage = null, this.dataChannel.onclose = null, this.dataChannel = null), this.open && (this._open = !1, super.emit("close"));
        }
        send(t, n = !1) {
            if (!this.open) {
                this.emitError(Cn.NotOpenYet, "Connection is not open. You should listen for the `open` event before sending messages.");
                return;
            }
            return this._send(t, n);
        }
        async handleMessage(t) {
            const n = t.payload;
            switch(t.type){
                case ie.Answer:
                    await this._negotiator.handleSDP(t.type, n.sdp);
                    break;
                case ie.Candidate:
                    await this._negotiator.handleCandidate(n.candidate);
                    break;
                default:
                    O.warn("Unrecognized message type:", t.type, "from peer:", this.peer);
                    break;
            }
        }
    }
    class No extends ar {
        get bufferSize() {
            return this._bufferSize;
        }
        _initializeDataChannel(t) {
            super._initializeDataChannel(t), this.dataChannel.binaryType = "arraybuffer", this.dataChannel.addEventListener("message", (n)=>this._handleDataMessage(n));
        }
        _bufferedSend(t) {
            (this._buffering || !this._trySend(t)) && (this._buffer.push(t), this._bufferSize = this._buffer.length);
        }
        _trySend(t) {
            if (!this.open) return !1;
            if (this.dataChannel.bufferedAmount > ar.MAX_BUFFERED_AMOUNT) return this._buffering = !0, setTimeout(()=>{
                this._buffering = !1, this._tryBuffer();
            }, 50), !1;
            try {
                this.dataChannel.send(t);
            } catch (n) {
                return O.error(`DC#:${this.connectionId} Error when sending:`, n), this._buffering = !0, this.close(), !1;
            }
            return !0;
        }
        _tryBuffer() {
            if (!this.open || this._buffer.length === 0) return;
            const t = this._buffer[0];
            this._trySend(t) && (this._buffer.shift(), this._bufferSize = this._buffer.length, this._tryBuffer());
        }
        close(t) {
            if (t?.flush) {
                this.send({
                    __peerData: {
                        type: "close"
                    }
                });
                return;
            }
            this._buffer = [], this._bufferSize = 0, super.close();
        }
        constructor(...t){
            super(...t), this._buffer = [], this._bufferSize = 0, this._buffering = !1;
        }
    }
    class Or extends No {
        close(t) {
            super.close(t), this._chunkedData = {};
        }
        constructor(t, n, r){
            super(t, n, r), this.chunker = new kc, this.serialization = Kt.Binary, this._chunkedData = {};
        }
        _handleDataMessage({ data: t }) {
            const n = Wi(t), r = n.__peerData;
            if (r) {
                if (r.type === "close") {
                    this.close();
                    return;
                }
                this._handleChunk(n);
                return;
            }
            this.emit("data", n);
        }
        _handleChunk(t) {
            const n = t.__peerData, r = this._chunkedData[n] || {
                data: [],
                count: 0,
                total: t.total
            };
            if (r.data[t.n] = new Uint8Array(t.data), r.count++, this._chunkedData[n] = r, r.total === r.count) {
                delete this._chunkedData[n];
                const o = Qb(r.data);
                this._handleDataMessage({
                    data: o
                });
            }
        }
        _send(t, n) {
            const r = Ki(t);
            if (r instanceof Promise) return this._send_blob(r);
            if (!n && r.byteLength > this.chunker.chunkedMTU) {
                this._sendChunks(r);
                return;
            }
            this._bufferedSend(r);
        }
        async _send_blob(t) {
            const n = await t;
            if (n.byteLength > this.chunker.chunkedMTU) {
                this._sendChunks(n);
                return;
            }
            this._bufferedSend(n);
        }
        _sendChunks(t) {
            const n = this.chunker.chunk(t);
            O.log(`DC#${this.connectionId} Try to send ${n.length} chunks...`);
            for (const r of n)this.send(r, !0);
        }
    }
    class l_ extends No {
        _handleDataMessage({ data: t }) {
            super.emit("data", t);
        }
        _send(t, n) {
            this._bufferedSend(t);
        }
        constructor(...t){
            super(...t), this.serialization = Kt.None;
        }
    }
    class u_ extends No {
        _handleDataMessage({ data: t }) {
            const n = this.parse(this.decoder.decode(t)), r = n.__peerData;
            if (r && r.type === "close") {
                this.close();
                return;
            }
            this.emit("data", n);
        }
        _send(t, n) {
            const r = this.encoder.encode(this.stringify(t));
            if (r.byteLength >= ge.chunkedMTU) {
                this.emitError(Cn.MessageToBig, "Message too big for JSON channel");
                return;
            }
            this._bufferedSend(r);
        }
        constructor(...t){
            super(...t), this.serialization = Kt.JSON, this.encoder = new TextEncoder, this.decoder = new TextDecoder, this.stringify = JSON.stringify, this.parse = JSON.parse;
        }
    }
    class Uo extends Rc {
        static #e = this.DEFAULT_KEY = "peerjs";
        get id() {
            return this._id;
        }
        get options() {
            return this._options;
        }
        get open() {
            return this._open;
        }
        get socket() {
            return this._socket;
        }
        get connections() {
            const t = Object.create(null);
            for (const [n, r] of this._connections)t[n] = r;
            return t;
        }
        get destroyed() {
            return this._destroyed;
        }
        get disconnected() {
            return this._disconnected;
        }
        constructor(t, n){
            super(), this._serializers = {
                raw: l_,
                json: u_,
                binary: Or,
                "binary-utf8": Or,
                default: Or
            }, this._id = null, this._lastServerId = null, this._destroyed = !1, this._disconnected = !1, this._open = !1, this._connections = new Map, this._lostMessages = new Map;
            let r;
            if (t && t.constructor == Object ? n = t : t && (r = t.toString()), n = {
                debug: 0,
                host: ge.CLOUD_HOST,
                port: ge.CLOUD_PORT,
                path: "/",
                key: Uo.DEFAULT_KEY,
                token: ge.randomToken(),
                config: ge.defaultConfig,
                referrerPolicy: "strict-origin-when-cross-origin",
                serializers: {},
                ...n
            }, this._options = n, this._serializers = {
                ...this._serializers,
                ...this.options.serializers
            }, this._options.host === "/" && (this._options.host = window.location.hostname), this._options.path && (this._options.path[0] !== "/" && (this._options.path = "/" + this._options.path), this._options.path[this._options.path.length - 1] !== "/" && (this._options.path += "/")), this._options.secure === void 0 && this._options.host !== ge.CLOUD_HOST ? this._options.secure = ge.isSecure() : this._options.host == ge.CLOUD_HOST && (this._options.secure = !0), this._options.logFunction && O.setLogFunction(this._options.logFunction), O.logLevel = this._options.debug || 0, this._api = new c_(n), this._socket = this._createServerConnection(), !ge.supports.audioVideo && !ge.supports.data) {
                this._delayedAbort(re.BrowserIncompatible, "The current browser does not support WebRTC");
                return;
            }
            if (r && !ge.validateId(r)) {
                this._delayedAbort(re.InvalidID, `ID "${r}" is invalid`);
                return;
            }
            r ? this._initialize(r) : this._api.retrieveId().then((o)=>this._initialize(o)).catch((o)=>this._abort(re.ServerError, o));
        }
        _createServerConnection() {
            const t = new a_(this._options.secure, this._options.host, this._options.port, this._options.path, this._options.key, this._options.pingInterval);
            return t.on(Fe.Message, (n)=>{
                this._handleMessage(n);
            }), t.on(Fe.Error, (n)=>{
                this._abort(re.SocketError, n);
            }), t.on(Fe.Disconnected, ()=>{
                this.disconnected || (this.emitError(re.Network, "Lost connection to server."), this.disconnect());
            }), t.on(Fe.Close, ()=>{
                this.disconnected || this._abort(re.SocketClosed, "Underlying socket is already closed.");
            }), t;
        }
        _initialize(t) {
            this._id = t, this.socket.start(t, this._options.token);
        }
        _handleMessage(t) {
            const n = t.type, r = t.payload, o = t.src;
            switch(n){
                case ie.Open:
                    this._lastServerId = this.id, this._open = !0, this.emit("open", this.id);
                    break;
                case ie.Error:
                    this._abort(re.ServerError, r.msg);
                    break;
                case ie.IdTaken:
                    this._abort(re.UnavailableID, `ID "${this.id}" is taken`);
                    break;
                case ie.InvalidKey:
                    this._abort(re.InvalidKey, `API KEY "${this._options.key}" is invalid`);
                    break;
                case ie.Leave:
                    O.log(`Received leave message from ${o}`), this._cleanupPeer(o), this._connections.delete(o);
                    break;
                case ie.Expire:
                    this.emitError(re.PeerUnavailable, `Could not connect to peer ${o}`);
                    break;
                case ie.Offer:
                    {
                        const s = r.connectionId;
                        let a = this.getConnection(o, s);
                        if (a && (a.close(), O.warn(`Offer received for existing Connection ID:${s}`)), r.type === Ue.Media) {
                            const c = new sr(o, this, {
                                connectionId: s,
                                _payload: r,
                                metadata: r.metadata
                            });
                            a = c, this._addConnection(o, a), this.emit("call", c);
                        } else if (r.type === Ue.Data) {
                            const c = new this._serializers[r.serialization](o, this, {
                                connectionId: s,
                                _payload: r,
                                metadata: r.metadata,
                                label: r.label,
                                serialization: r.serialization,
                                reliable: r.reliable
                            });
                            a = c, this._addConnection(o, a), this.emit("connection", c);
                        } else {
                            O.warn(`Received malformed connection type:${r.type}`);
                            return;
                        }
                        const i = this._getMessages(s);
                        for (const c of i)a.handleMessage(c);
                        break;
                    }
                default:
                    {
                        if (!r) {
                            O.warn(`You received a malformed message from ${o} of type ${n}`);
                            return;
                        }
                        const s = r.connectionId, a = this.getConnection(o, s);
                        a && a.peerConnection ? a.handleMessage(t) : s ? this._storeMessage(s, t) : O.warn("You received an unrecognized message:", t);
                        break;
                    }
            }
        }
        _storeMessage(t, n) {
            this._lostMessages.has(t) || this._lostMessages.set(t, []), this._lostMessages.get(t).push(n);
        }
        _getMessages(t) {
            const n = this._lostMessages.get(t);
            return n ? (this._lostMessages.delete(t), n) : [];
        }
        connect(t, n = {}) {
            if (n = {
                serialization: "default",
                ...n
            }, this.disconnected) {
                O.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect, or call reconnect on this peer if you believe its ID to still be available."), this.emitError(re.Disconnected, "Cannot connect to new Peer after disconnecting from server.");
                return;
            }
            const r = new this._serializers[n.serialization](t, this, n);
            return this._addConnection(t, r), r;
        }
        call(t, n, r = {}) {
            if (this.disconnected) {
                O.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect."), this.emitError(re.Disconnected, "Cannot connect to new Peer after disconnecting from server.");
                return;
            }
            if (!n) {
                O.error("To call a peer, you must provide a stream from your browser's `getUserMedia`.");
                return;
            }
            const o = new sr(t, this, {
                ...r,
                _stream: n
            });
            return this._addConnection(t, o), o;
        }
        _addConnection(t, n) {
            O.log(`add connection ${n.type}:${n.connectionId} to peerId:${t}`), this._connections.has(t) || this._connections.set(t, []), this._connections.get(t).push(n);
        }
        _removeConnection(t) {
            const n = this._connections.get(t.peer);
            if (n) {
                const r = n.indexOf(t);
                r !== -1 && n.splice(r, 1);
            }
            this._lostMessages.delete(t.connectionId);
        }
        getConnection(t, n) {
            const r = this._connections.get(t);
            if (!r) return null;
            for (const o of r)if (o.connectionId === n) return o;
            return null;
        }
        _delayedAbort(t, n) {
            setTimeout(()=>{
                this._abort(t, n);
            }, 0);
        }
        _abort(t, n) {
            O.error("Aborting!"), this.emitError(t, n), this._lastServerId ? this.disconnect() : this.destroy();
        }
        destroy() {
            this.destroyed || (O.log(`Destroy peer with ID:${this.id}`), this.disconnect(), this._cleanup(), this._destroyed = !0, this.emit("close"));
        }
        _cleanup() {
            for (const t of this._connections.keys())this._cleanupPeer(t), this._connections.delete(t);
            this.socket.removeAllListeners();
        }
        _cleanupPeer(t) {
            const n = this._connections.get(t);
            if (n) for (const r of n)r.close();
        }
        disconnect() {
            if (this.disconnected) return;
            const t = this.id;
            O.log(`Disconnect peer with ID:${t}`), this._disconnected = !0, this._open = !1, this.socket.close(), this._lastServerId = t, this._id = null, this.emit("disconnected", t);
        }
        reconnect() {
            if (this.disconnected && !this.destroyed) O.log(`Attempting reconnection to server with ID ${this._lastServerId}`), this._disconnected = !1, this._initialize(this._lastServerId);
            else {
                if (this.destroyed) throw new Error("This peer cannot reconnect to the server. It has already been destroyed.");
                if (!this.disconnected && !this.open) O.error("In a hurry? We're still trying to make the initial connection!");
                else throw new Error(`Peer ${this.id} cannot reconnect because it is not disconnected from the server!`);
            }
        }
        listAllPeers(t = (n)=>{}) {
            this._api.listAllPeers().then((n)=>t(n)).catch((n)=>this._abort(re.ServerError, n));
        }
    }
    var f_ = Uo;
    let d_, $c, p_;
    d_ = {
        key: 1
    };
    $c = Symbol("webrtc");
    p_ = R({
        __name: "webrtcpeerProvider",
        setup (e) {
            let t = null;
            const n = P(null), r = P(!1), o = P(null), s = ()=>{
                console.log("[WebRTCProvider] 停止连接"), t?.destroy(), t = null, n.value = null, r.value = !0;
            }, a = b(()=>n.value ? {
                    peer: n.value,
                    stop: s
                } : null);
            He($c, a);
            async function i() {
                if (!t) {
                    const c = await fetch("http://localhost:3000/api/ice", {
                        method: "POST"
                    }), { iceServers: l } = await c.json();
                    console.log("[WebRTCProvider] ICE服务器:", l), t = new f_({
                        debug: 3,
                        config: {
                            iceServers: l
                        }
                    });
                }
                return t.id || await new Promise((c)=>{
                    const l = (u)=>{
                        console.log("[WebRTCProvider] Peer ID:", u), t?.off("open", l), c();
                    };
                    t?.on("open", l);
                }), t;
            }
            return Se(()=>{
                i().then((c)=>{
                    n.value = c;
                }).catch((c)=>{
                    o.value = c;
                });
            }), (c, l)=>{
                const u = Oh, f = kv;
                return C(), $("div", null, [
                    o.value ? (C(), B(u, {
                        key: 0,
                        title: o.value.message,
                        type: "error",
                        "show-icon": ""
                    }, null, 8, [
                        "title"
                    ])) : !n.value && !r.value ? (C(), $("div", d_, [
                        ce(f, {
                            rows: 3,
                            animated: ""
                        }),
                        l[0] || (l[0] = D("div", {
                            class: "loading-text"
                        }, "正在初始化WebRTC连接...", -1))
                    ])) : n.value ? z(c.$slots, "default", {
                        key: 2
                    }, void 0, !0) : j("", !0)
                ]);
            };
        }
    });
    ry = Gc(p_, [
        [
            "__scopeId",
            "data-v-075df05d"
        ]
    ]);
    oy = function() {
        const e = Q($c);
        if (console.log("webRTCRef", e), !e || !e.value) throw new Error("useWebRTC必须在WebRTCProvider内部使用");
        return e.value;
    };
    Ic = ((e)=>(e.RequestInfo = "RequestInfo", e.Info = "Info", e.Start = "Start", e.Chunk = "Chunk", e.Pause = "Pause", e.Done = "Done", e.Error = "Error", e.PasswordRequired = "PasswordRequired", e.UsePassword = "UsePassword", e.Report = "Report", e))(Ic || {});
    sy = function(e) {
        if (!e || typeof e != "object") throw new Error("Invalid message: not an object");
        const t = e;
        if (!t.type || !Object.values(Ic).includes(t.type)) throw new Error(`Invalid message type: ${t.type}`);
        switch(t.type){
            case "RequestInfo":
                return t;
            case "Info":
                return h_(t), t;
            case "Start":
                return m_(t), t;
            case "Chunk":
                return g_(t), t;
            case "Done":
                return t;
            case "Error":
                return v_(t), t;
            case "PasswordRequired":
                return b_(t), t;
            case "UsePassword":
                return __(t), t;
            case "Pause":
                return t;
            case "Report":
                return t;
            default:
                throw new Error(`Unhandled message type: ${t.type}`);
        }
    };
    function h_(e) {
        if (!Array.isArray(e.files)) throw new Error("Invalid Info message: files must be an array");
        e.files.forEach((t, n)=>{
            if (typeof t != "object") throw new Error(`Invalid file at index ${n}: not an object`);
            Gt(t, "name"), Ho(t, "size"), Gt(t, "type");
        });
    }
    function m_(e) {
        console.log(e), Gt(e, "fileName"), Ho(e, "offset");
    }
    function g_(e) {
        if (Gt(e, "fileName"), Ho(e, "offset"), !("bytes" in e)) throw new Error("Invalid Chunk message: missing bytes field");
        y_(e, "final");
    }
    function v_(e) {
        Gt(e, "error");
    }
    function b_(e) {
        if ("errorMessage" in e && typeof e.errorMessage != "string") throw new Error("Invalid PasswordRequired message: errorMessage must be a string");
    }
    function __(e) {
        Gt(e, "password");
    }
    function Gt(e, t) {
        if (typeof e[t] != "string") throw new Error(`Invalid message: ${t} must be a string`);
    }
    function Ho(e, t) {
        if (typeof e[t] != "number") throw new Error(`Invalid message: ${t} must be a number`);
    }
    function y_(e, t) {
        if (typeof e[t] != "boolean") throw new Error(`Invalid message: ${t} must be a boolean`);
    }
});
export { gi as $, lr as A, co as B, wl as C, wf as D, Jf as E, so as F, Pa as G, md as H, al as I, hf as J, ve as K, Z as L, pt as M, L as N, te as O, le as P, jr as Q, Te as R, Ve as S, qa as T, ds as U, mr as V, si as W, Lr as X, Ya as Y, Co as Z, oe as _, St as a, ey as a$, $s as a0, P_ as a1, T_ as a2, yo as a3, Hh as a4, O0 as a5, ep as a6, li as a7, yt as a8, Dh as a9, M_ as aA, L_ as aB, D_ as aC, rt as aD, z_ as aE, fi as aF, mo as aG, Tn as aH, H_ as aI, Q_ as aJ, ui as aK, Qp as aL, er as aM, W_ as aN, N_ as aO, $_ as aP, E_ as aQ, A_ as aR, pi as aS, Sh as aT, k_ as aU, j_ as aV, Ic as aW, sy as aX, oy as aY, kv as aZ, Oh as a_, Qa as aa, Ap as ab, S_ as ac, mi as ad, Bp as ae, Kh as af, Vh as ag, O_ as ah, Th as ai, pp as aj, cn as ak, R_ as al, ji as am, Eo as an, cv as ao, B_ as ap, tr as aq, vo as ar, im as as, we as at, J_ as au, G_ as av, X_ as aw, w_ as ax, I_ as ay, F_ as az, il as b, K_ as b0, Y_ as b1, U_ as b2, Z_ as b3, ry as b4, V_ as b5, fh as b6, ny as b7, bo as b8, nr as b9, x_ as ba, tv as bb, ty as bc, q_ as bd, $a as c, to as d, Oa as e, Yt as f, Jt as g, Fa as h, eo as i, Sr as j, Af as k, et as l, Ma as m, qt as n, zl as o, Cu as p, it as q, io as r, Al as s, Mu as t, uo as u, za as v, qd as w, Ba as x, Ke as y, Ra as z, __tla };
