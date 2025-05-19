import { i as ts, a as bt, s as ns, o as ls, b as Eo, c as An, d as os, e as Sl, f as Sn, g as as, h as ss, j as rs, M as is, S as Hl, U as Wl, k as Vl, l as zl, m as el, n as zt, p as Ro, q as Pt, r as To, t as Oo, u as ko, v as st, w as us, x as cs, y as ds, z as fs, A as ps, B as No, C as vs, D as hs, E as gs, F as Ul, G as ms, H as bs, I as ys, J as Cs, K as Xe, L as ze, N as J, _ as Se, O as ie, P as Ie, Q as Kl, R as it, T as Ge, V as El, W as Fn, X as tt, Y as Oe, Z as Xt, $ as $n, a0 as Kt, a1 as Gt, a2 as ht, a3 as jt, a4 as Rl, a5 as qn, a6 as ws, a7 as Jt, a8 as Tl, a9 as at, aa as nt, ab as Zt, ac as dt, ad as Lo, ae as In, af as Ss, ag as Es, ah as Rs, ai as Ts, aj as Gl, ak as Mo, al as Os, am as tl, an as ks, ao as jl, ap as Po, aq as nl, ar as Ao, as as Ns, at as Ve, au as _n, av as Ol, aw as Fo, ax as Ls, ay as $o, az as Ms, aA as Vt, aB as qt, aC as En, aD as ll, aE as Io, aF as Ps, aG as As, aH as _o, aI as Fs, aJ as Do, aK as $s, aL as Is, aM as _s, aN as Ds, aO as Bs, aP as xs, aQ as Hs, aR as Ws, aS as ql, aT as Vs, aU as zs, aV as Us, aW as Ze, aX as Ks, aY as Gs, aZ as js, a_ as qs, a$ as Ys, b0 as Bo, b1 as xo, b2 as Qs, b3 as Xs, b4 as Js, b5 as Zs, b6 as er, b7 as Yl, __tla as __tla_0 } from "./messages-BTUfKhSZ.js";
import { d as q, c as L, a as D, o as M, r as j, b as _, w as I, e as Be, f as W, n as Le, u as w, g as P, h as we, t as ae, v as yt, T as Ho, i as Me, j as Ce, k as Te, l as fe, m as Ne, p as N, q as oe, s as je, x as ol, y as Wo, z as ne, A as K, B as be, C as At, D as Rn, F as Ke, E as rt, G as Dt, H as en, I as Tn, J as Ft, K as tn, L as qe, M as gt, N as ye, O as al, P as Re, Q as kl, R as Ct, S as ft, U as tr, V as nr, W as Dn, X as Yt, Y as On, Z as Vo, _ as Bn, $ as nn, a0 as G, a1 as lr, a2 as or, a3 as Fe, a4 as ar, a5 as sr, a6 as Ql, a7 as Xl, a8 as rr, a9 as zo, __tla as __tla_1 } from "./index-VZNZX2ad.js";
let Ef;
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
    var ir = /\s/;
    function ur(e) {
        for(var t = e.length; t-- && ir.test(e.charAt(t)););
        return t;
    }
    var cr = /^\s+/;
    function dr(e) {
        return e && e.slice(0, ur(e) + 1).replace(cr, "");
    }
    var Jl = NaN, fr = /^[-+]0x[0-9a-f]+$/i, pr = /^0b[01]+$/i, vr = /^0o[0-7]+$/i, hr = parseInt;
    function Zl(e) {
        if (typeof e == "number") return e;
        if (ts(e)) return Jl;
        if (bt(e)) {
            var t = typeof e.valueOf == "function" ? e.valueOf() : e;
            e = bt(t) ? t + "" : t;
        }
        if (typeof e != "string") return e === 0 ? e : +e;
        e = dr(e);
        var n = pr.test(e);
        return n || vr.test(e) ? hr(e.slice(2), n ? 2 : 8) : fr.test(e) ? Jl : +e;
    }
    function gr(e, t, n, l) {
        e.length;
        for(var i = n + 1; i--;)if (t(e[i], i, e)) return i;
        return -1;
    }
    function mr(e, t) {
        return ns(ls(e, t, Eo), e + "");
    }
    function br(e, t, n) {
        if (!bt(n)) return !1;
        var l = typeof t;
        return (l == "number" ? An(n) && os(t, n.length) : l == "string" && t in n) ? Sl(n[t], e) : !1;
    }
    function yr(e) {
        return mr(function(t, n) {
            var l = -1, i = n.length, c = i > 1 ? n[i - 1] : void 0, o = i > 2 ? n[2] : void 0;
            for(c = e.length > 3 && typeof c == "function" ? (i--, c) : void 0, o && br(n[0], n[1], o) && (c = i < 3 ? void 0 : c, i = 1), t = Object(t); ++l < i;){
                var a = n[l];
                a && e(t, a, l, c);
            }
            return t;
        });
    }
    var Cr = "[object Object]", wr = Function.prototype, Sr = Object.prototype, Uo = wr.toString, Er = Sr.hasOwnProperty, Rr = Uo.call(Object);
    function Tr(e) {
        if (!Sn(e) || as(e) != Cr) return !1;
        var t = ss(e);
        if (t === null) return !0;
        var n = Er.call(t, "constructor") && t.constructor;
        return typeof n == "function" && n instanceof n && Uo.call(n) == Rr;
    }
    var Or = 1, kr = 4;
    function eo(e) {
        return rs(e, Or | kr);
    }
    var Nr = "__lodash_hash_undefined__";
    function Lr(e) {
        return this.__data__.set(e, Nr), this;
    }
    function Mr(e) {
        return this.__data__.has(e);
    }
    function kn(e) {
        var t = -1, n = e == null ? 0 : e.length;
        for(this.__data__ = new is; ++t < n;)this.add(e[t]);
    }
    kn.prototype.add = kn.prototype.push = Lr;
    kn.prototype.has = Mr;
    function Pr(e, t) {
        for(var n = -1, l = e == null ? 0 : e.length; ++n < l;)if (t(e[n], n, e)) return !0;
        return !1;
    }
    function Ar(e, t) {
        return e.has(t);
    }
    var Fr = 1, $r = 2;
    function Ko(e, t, n, l, i, c) {
        var o = n & Fr, a = e.length, s = t.length;
        if (a != s && !(o && s > a)) return !1;
        var r = c.get(e), u = c.get(t);
        if (r && u) return r == t && u == e;
        var d = -1, f = !0, v = n & $r ? new kn : void 0;
        for(c.set(e, t), c.set(t, e); ++d < a;){
            var p = e[d], g = t[d];
            if (l) var m = o ? l(g, p, d, t, e, c) : l(p, g, d, e, t, c);
            if (m !== void 0) {
                if (m) continue;
                f = !1;
                break;
            }
            if (v) {
                if (!Pr(t, function(b, R) {
                    if (!Ar(v, R) && (p === b || i(p, b, n, l, c))) return v.push(R);
                })) {
                    f = !1;
                    break;
                }
            } else if (!(p === g || i(p, g, n, l, c))) {
                f = !1;
                break;
            }
        }
        return c.delete(e), c.delete(t), f;
    }
    function Ir(e) {
        var t = -1, n = Array(e.size);
        return e.forEach(function(l, i) {
            n[++t] = [
                i,
                l
            ];
        }), n;
    }
    function _r(e) {
        var t = -1, n = Array(e.size);
        return e.forEach(function(l) {
            n[++t] = l;
        }), n;
    }
    var Dr = 1, Br = 2, xr = "[object Boolean]", Hr = "[object Date]", Wr = "[object Error]", Vr = "[object Map]", zr = "[object Number]", Ur = "[object RegExp]", Kr = "[object Set]", Gr = "[object String]", jr = "[object Symbol]", qr = "[object ArrayBuffer]", Yr = "[object DataView]", to = Hl ? Hl.prototype : void 0, Yn = to ? to.valueOf : void 0;
    function Qr(e, t, n, l, i, c, o) {
        switch(n){
            case Yr:
                if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
                e = e.buffer, t = t.buffer;
            case qr:
                return !(e.byteLength != t.byteLength || !c(new Wl(e), new Wl(t)));
            case xr:
            case Hr:
            case zr:
                return Sl(+e, +t);
            case Wr:
                return e.name == t.name && e.message == t.message;
            case Ur:
            case Gr:
                return e == t + "";
            case Vr:
                var a = Ir;
            case Kr:
                var s = l & Dr;
                if (a || (a = _r), e.size != t.size && !s) return !1;
                var r = o.get(e);
                if (r) return r == t;
                l |= Br, o.set(e, t);
                var u = Ko(a(e), a(t), l, i, c, o);
                return o.delete(e), u;
            case jr:
                if (Yn) return Yn.call(e) == Yn.call(t);
        }
        return !1;
    }
    var Xr = 1, Jr = Object.prototype, Zr = Jr.hasOwnProperty;
    function ei(e, t, n, l, i, c) {
        var o = n & Xr, a = Vl(e), s = a.length, r = Vl(t), u = r.length;
        if (s != u && !o) return !1;
        for(var d = s; d--;){
            var f = a[d];
            if (!(o ? f in t : Zr.call(t, f))) return !1;
        }
        var v = c.get(e), p = c.get(t);
        if (v && p) return v == t && p == e;
        var g = !0;
        c.set(e, t), c.set(t, e);
        for(var m = o; ++d < s;){
            f = a[d];
            var b = e[f], R = t[f];
            if (l) var C = o ? l(R, b, f, t, e, c) : l(b, R, f, e, t, c);
            if (!(C === void 0 ? b === R || i(b, R, n, l, c) : C)) {
                g = !1;
                break;
            }
            m || (m = f == "constructor");
        }
        if (g && !m) {
            var h = e.constructor, y = t.constructor;
            h != y && "constructor" in e && "constructor" in t && !(typeof h == "function" && h instanceof h && typeof y == "function" && y instanceof y) && (g = !1);
        }
        return c.delete(e), c.delete(t), g;
    }
    var ti = 1, no = "[object Arguments]", lo = "[object Array]", hn = "[object Object]", ni = Object.prototype, oo = ni.hasOwnProperty;
    function li(e, t, n, l, i, c) {
        var o = Pt(e), a = Pt(t), s = o ? lo : zl(e), r = a ? lo : zl(t);
        s = s == no ? hn : s, r = r == no ? hn : r;
        var u = s == hn, d = r == hn, f = s == r;
        if (f && el(e)) {
            if (!el(t)) return !1;
            o = !0, u = !1;
        }
        if (f && !u) return c || (c = new zt), o || Ro(e) ? Ko(e, t, n, l, i, c) : Qr(e, t, s, n, l, i, c);
        if (!(n & ti)) {
            var v = u && oo.call(e, "__wrapped__"), p = d && oo.call(t, "__wrapped__");
            if (v || p) {
                var g = v ? e.value() : e, m = p ? t.value() : t;
                return c || (c = new zt), i(g, m, n, l, c);
            }
        }
        return f ? (c || (c = new zt), ei(e, t, n, l, i, c)) : !1;
    }
    function xn(e, t, n, l, i) {
        return e === t ? !0 : e == null || t == null || !Sn(e) && !Sn(t) ? e !== e && t !== t : li(e, t, n, l, xn, i);
    }
    var oi = 1, ai = 2;
    function si(e, t, n, l) {
        var i = n.length, c = i;
        if (e == null) return !c;
        for(e = Object(e); i--;){
            var o = n[i];
            if (o[2] ? o[1] !== e[o[0]] : !(o[0] in e)) return !1;
        }
        for(; ++i < c;){
            o = n[i];
            var a = o[0], s = e[a], r = o[1];
            if (o[2]) {
                if (s === void 0 && !(a in e)) return !1;
            } else {
                var u = new zt, d;
                if (!(d === void 0 ? xn(r, s, oi | ai, l, u) : d)) return !1;
            }
        }
        return !0;
    }
    function Go(e) {
        return e === e && !bt(e);
    }
    function ri(e) {
        for(var t = To(e), n = t.length; n--;){
            var l = t[n], i = e[l];
            t[n] = [
                l,
                i,
                Go(i)
            ];
        }
        return t;
    }
    function jo(e, t) {
        return function(n) {
            return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
        };
    }
    function ii(e) {
        var t = ri(e);
        return t.length == 1 && t[0][2] ? jo(t[0][0], t[0][1]) : function(n) {
            return n === e || si(n, e, t);
        };
    }
    var ui = 1, ci = 2;
    function di(e, t) {
        return Oo(e) && Go(t) ? jo(ko(e), t) : function(n) {
            var l = st(n, e);
            return l === void 0 && l === t ? us(n, e) : xn(t, l, ui | ci);
        };
    }
    function fi(e) {
        return function(t) {
            return t?.[e];
        };
    }
    function pi(e) {
        return function(t) {
            return cs(t, e);
        };
    }
    function vi(e) {
        return Oo(e) ? fi(ko(e)) : pi(e);
    }
    function qo(e) {
        return typeof e == "function" ? e : e == null ? Eo : typeof e == "object" ? Pt(e) ? di(e[0], e[1]) : ii(e) : vi(e);
    }
    function hi(e) {
        return function(t, n, l) {
            for(var i = -1, c = Object(t), o = l(t), a = o.length; a--;){
                var s = o[++i];
                if (n(c[s], s, c) === !1) break;
            }
            return t;
        };
    }
    var Yo = hi();
    function gi(e, t) {
        return e && Yo(e, t, To);
    }
    function mi(e, t) {
        return function(n, l) {
            if (n == null) return n;
            if (!An(n)) return e(n, l);
            for(var i = n.length, c = -1, o = Object(n); ++c < i && l(o[c], c, o) !== !1;);
            return n;
        };
    }
    var bi = mi(gi), Qn = function() {
        return ds.Date.now();
    }, yi = "Expected a function", Ci = Math.max, wi = Math.min;
    function Qt(e, t, n) {
        var l, i, c, o, a, s, r = 0, u = !1, d = !1, f = !0;
        if (typeof e != "function") throw new TypeError(yi);
        t = Zl(t) || 0, bt(n) && (u = !!n.leading, d = "maxWait" in n, c = d ? Ci(Zl(n.maxWait) || 0, t) : c, f = "trailing" in n ? !!n.trailing : f);
        function v(S) {
            var E = l, k = i;
            return l = i = void 0, r = S, o = e.apply(k, E), o;
        }
        function p(S) {
            return r = S, a = setTimeout(b, t), u ? v(S) : o;
        }
        function g(S) {
            var E = S - s, k = S - r, T = t - E;
            return d ? wi(T, c - k) : T;
        }
        function m(S) {
            var E = S - s, k = S - r;
            return s === void 0 || E >= t || E < 0 || d && k >= c;
        }
        function b() {
            var S = Qn();
            if (m(S)) return R(S);
            a = setTimeout(b, g(S));
        }
        function R(S) {
            return a = void 0, f && l ? v(S) : (l = i = void 0, o);
        }
        function C() {
            a !== void 0 && clearTimeout(a), r = 0, l = s = i = a = void 0;
        }
        function h() {
            return a === void 0 ? o : R(Qn());
        }
        function y() {
            var S = Qn(), E = m(S);
            if (l = arguments, i = this, s = S, E) {
                if (a === void 0) return p(s);
                if (d) return clearTimeout(a), a = setTimeout(b, t), v(s);
            }
            return a === void 0 && (a = setTimeout(b, t)), o;
        }
        return y.cancel = C, y.flush = h, y;
    }
    function sl(e, t, n) {
        (n !== void 0 && !Sl(e[t], n) || n === void 0 && !(t in e)) && fs(e, t, n);
    }
    function Si(e) {
        return Sn(e) && An(e);
    }
    function rl(e, t) {
        if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__") return e[t];
    }
    function Ei(e) {
        return ps(e, No(e));
    }
    function Ri(e, t, n, l, i, c, o) {
        var a = rl(e, n), s = rl(t, n), r = o.get(s);
        if (r) {
            sl(e, n, r);
            return;
        }
        var u = c ? c(a, s, n + "", e, t, o) : void 0, d = u === void 0;
        if (d) {
            var f = Pt(s), v = !f && el(s), p = !f && !v && Ro(s);
            u = s, f || v || p ? Pt(a) ? u = a : Si(a) ? u = vs(a) : v ? (d = !1, u = hs(s, !0)) : p ? (d = !1, u = gs(s, !0)) : u = [] : Tr(s) || Ul(s) ? (u = a, Ul(a) ? u = Ei(a) : (!bt(a) || ms(a)) && (u = bs(s))) : d = !1;
        }
        d && (o.set(s, u), i(u, s, l, c, o), o.delete(s)), sl(e, n, u);
    }
    function Qo(e, t, n, l, i) {
        e !== t && Yo(t, function(c, o) {
            if (i || (i = new zt), bt(c)) Ri(e, t, o, n, Qo, l, i);
            else {
                var a = l ? l(rl(e, o), c, o + "", e, t, i) : void 0;
                a === void 0 && (a = c), sl(e, o, a);
            }
        }, No);
    }
    function Ti(e, t, n) {
        var l = e == null ? 0 : e.length;
        if (!l) return -1;
        var i = l - 1;
        return gr(e, qo(t), i);
    }
    function Oi(e, t) {
        var n = -1, l = An(e) ? Array(e.length) : [];
        return bi(e, function(i, c, o) {
            l[++n] = t(i, c, o);
        }), l;
    }
    function ki(e, t) {
        var n = Pt(e) ? ys : Oi;
        return n(e, qo(t));
    }
    function Ni(e, t) {
        return Cs(ki(e, t));
    }
    function mt(e, t) {
        return xn(e, t);
    }
    function ln(e) {
        return e === null;
    }
    var Xo = yr(function(e, t, n) {
        Qo(e, t, n);
    });
    const Li = (e)=>Xe ? window.requestAnimationFrame(e) : setTimeout(e, 16);
    function Mi(e, t) {
        if (!Xe) return;
        if (!t) {
            e.scrollTop = 0;
            return;
        }
        const n = [];
        let l = t.offsetParent;
        for(; l !== null && e !== l && e.contains(l);)n.push(l), l = l.offsetParent;
        const i = t.offsetTop + n.reduce((s, r)=>s + r.offsetTop, 0), c = i + t.offsetHeight, o = e.scrollTop, a = o + e.clientHeight;
        i < o ? e.scrollTop = i : c > a && (e.scrollTop = c - e.clientHeight);
    }
    const Pi = ze({
        value: {
            type: [
                String,
                Number
            ],
            default: ""
        },
        max: {
            type: Number,
            default: 99
        },
        isDot: Boolean,
        hidden: Boolean,
        type: {
            type: String,
            values: [
                "primary",
                "success",
                "warning",
                "info",
                "danger"
            ],
            default: "danger"
        },
        showZero: {
            type: Boolean,
            default: !0
        },
        color: String,
        badgeStyle: {
            type: J([
                String,
                Object,
                Array
            ])
        },
        offset: {
            type: J(Array),
            default: [
                0,
                0
            ]
        },
        badgeClass: {
            type: String
        }
    }), Ai = q({
        name: "ElBadge"
    }), Fi = q({
        ...Ai,
        props: Pi,
        setup (e, { expose: t }) {
            const n = e, l = ie("badge"), i = L(()=>n.isDot ? "" : Ie(n.value) && Ie(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), c = L(()=>{
                var o, a, s, r, u;
                return [
                    {
                        backgroundColor: n.color,
                        marginRight: Kl(-((a = (o = n.offset) == null ? void 0 : o[0]) != null ? a : 0)),
                        marginTop: Kl((r = (s = n.offset) == null ? void 0 : s[1]) != null ? r : 0)
                    },
                    (u = n.badgeStyle) != null ? u : {}
                ];
            });
            return t({
                content: i
            }), (o, a)=>(M(), D("div", {
                    class: P(w(l).b())
                }, [
                    j(o.$slots, "default"),
                    _(Ho, {
                        name: `${w(l).namespace.value}-zoom-in-center`,
                        persisted: ""
                    }, {
                        default: I(()=>[
                                Be(W("sup", {
                                    class: P([
                                        w(l).e("content"),
                                        w(l).em("content", o.type),
                                        w(l).is("fixed", !!o.$slots.default),
                                        w(l).is("dot", o.isDot),
                                        w(l).is("hide-zero", !o.showZero && n.value === 0),
                                        o.badgeClass
                                    ]),
                                    style: Le(w(c))
                                }, [
                                    j(o.$slots, "content", {
                                        value: w(i)
                                    }, ()=>[
                                            we(ae(w(i)), 1)
                                        ])
                                ], 6), [
                                    [
                                        yt,
                                        !o.hidden && (w(i) || o.isDot || o.$slots.content)
                                    ]
                                ])
                            ]),
                        _: 3
                    }, 8, [
                        "name"
                    ])
                ], 2));
        }
    });
    var $i = Se(Fi, [
        [
            "__file",
            "badge.vue"
        ]
    ]);
    const Ii = it($i), Jo = {
        modelValue: {
            type: [
                Number,
                String,
                Boolean
            ],
            default: void 0
        },
        label: {
            type: [
                String,
                Boolean,
                Number,
                Object
            ],
            default: void 0
        },
        value: {
            type: [
                String,
                Boolean,
                Number,
                Object
            ],
            default: void 0
        },
        indeterminate: Boolean,
        disabled: Boolean,
        checked: Boolean,
        name: {
            type: String,
            default: void 0
        },
        trueValue: {
            type: [
                String,
                Number
            ],
            default: void 0
        },
        falseValue: {
            type: [
                String,
                Number
            ],
            default: void 0
        },
        trueLabel: {
            type: [
                String,
                Number
            ],
            default: void 0
        },
        falseLabel: {
            type: [
                String,
                Number
            ],
            default: void 0
        },
        id: {
            type: String,
            default: void 0
        },
        border: Boolean,
        size: Fn,
        tabindex: [
            String,
            Number
        ],
        validateEvent: {
            type: Boolean,
            default: !0
        },
        ...El([
            "ariaControls"
        ])
    }, Zo = {
        [tt]: (e)=>Me(e) || Ie(e) || Ge(e),
        change: (e)=>Me(e) || Ie(e) || Ge(e)
    }, Bt = Symbol("checkboxGroupContextKey"), _i = ({ model: e, isChecked: t })=>{
        const n = Ce(Bt, void 0), l = L(()=>{
            var c, o;
            const a = (c = n?.max) == null ? void 0 : c.value, s = (o = n?.min) == null ? void 0 : o.value;
            return !Oe(a) && e.value.length >= a && !t.value || !Oe(s) && e.value.length <= s && t.value;
        });
        return {
            isDisabled: Xt(L(()=>n?.disabled.value || l.value)),
            isLimitDisabled: l
        };
    }, Di = (e, { model: t, isLimitExceeded: n, hasOwnLabel: l, isDisabled: i, isLabeledByFormItem: c })=>{
        const o = Ce(Bt, void 0), { formItem: a } = $n(), { emit: s } = Te();
        function r(p) {
            var g, m, b, R;
            return [
                !0,
                e.trueValue,
                e.trueLabel
            ].includes(p) ? (m = (g = e.trueValue) != null ? g : e.trueLabel) != null ? m : !0 : (R = (b = e.falseValue) != null ? b : e.falseLabel) != null ? R : !1;
        }
        function u(p, g) {
            s(Kt, r(p), g);
        }
        function d(p) {
            if (n.value) return;
            const g = p.target;
            s(Kt, r(g.checked), p);
        }
        async function f(p) {
            n.value || !l.value && !i.value && c.value && (p.composedPath().some((b)=>b.tagName === "LABEL") || (t.value = r([
                !1,
                e.falseValue,
                e.falseLabel
            ].includes(t.value)), await Ne(), u(t.value, p)));
        }
        const v = L(()=>o?.validateEvent || e.validateEvent);
        return fe(()=>e.modelValue, ()=>{
            v.value && a?.validate("change").catch((p)=>Gt());
        }), {
            handleChange: d,
            onClickRoot: f
        };
    }, Bi = (e)=>{
        const t = N(!1), { emit: n } = Te(), l = Ce(Bt, void 0), i = L(()=>Oe(l) === !1), c = N(!1), o = L({
            get () {
                var a, s;
                return i.value ? (a = l?.modelValue) == null ? void 0 : a.value : (s = e.modelValue) != null ? s : t.value;
            },
            set (a) {
                var s, r;
                i.value && oe(a) ? (c.value = ((s = l?.max) == null ? void 0 : s.value) !== void 0 && a.length > l?.max.value && a.length > o.value.length, c.value === !1 && ((r = l?.changeEvent) == null || r.call(l, a))) : (n(tt, a), t.value = a);
            }
        });
        return {
            model: o,
            isGroup: i,
            isLimitExceeded: c
        };
    }, xi = (e, t, { model: n })=>{
        const l = Ce(Bt, void 0), i = N(!1), c = L(()=>ht(e.value) ? e.label : e.value), o = L(()=>{
            const u = n.value;
            return Ge(u) ? u : oe(u) ? je(c.value) ? u.map(ol).some((d)=>mt(d, c.value)) : u.map(ol).includes(c.value) : u != null ? u === e.trueValue || u === e.trueLabel : !!u;
        }), a = jt(L(()=>{
            var u;
            return (u = l?.size) == null ? void 0 : u.value;
        }), {
            prop: !0
        }), s = jt(L(()=>{
            var u;
            return (u = l?.size) == null ? void 0 : u.value;
        })), r = L(()=>!!t.default || !ht(c.value));
        return {
            checkboxButtonSize: a,
            isChecked: o,
            isFocused: i,
            checkboxSize: s,
            hasOwnLabel: r,
            actualValue: c
        };
    }, ea = (e, t)=>{
        const { formItem: n } = $n(), { model: l, isGroup: i, isLimitExceeded: c } = Bi(e), { isFocused: o, isChecked: a, checkboxButtonSize: s, checkboxSize: r, hasOwnLabel: u, actualValue: d } = xi(e, t, {
            model: l
        }), { isDisabled: f } = _i({
            model: l,
            isChecked: a
        }), { inputId: v, isLabeledByFormItem: p } = Rl(e, {
            formItemContext: n,
            disableIdGeneration: u,
            disableIdManagement: i
        }), { handleChange: g, onClickRoot: m } = Di(e, {
            model: l,
            isLimitExceeded: c,
            hasOwnLabel: u,
            isDisabled: f,
            isLabeledByFormItem: p
        });
        return (()=>{
            function R() {
                var C, h;
                oe(l.value) && !l.value.includes(d.value) ? l.value.push(d.value) : l.value = (h = (C = e.trueValue) != null ? C : e.trueLabel) != null ? h : !0;
            }
            e.checked && R();
        })(), qn({
            from: "label act as value",
            replacement: "value",
            version: "3.0.0",
            scope: "el-checkbox",
            ref: "https://element-plus.org/en-US/component/checkbox.html"
        }, L(()=>i.value && ht(e.value))), qn({
            from: "true-label",
            replacement: "true-value",
            version: "3.0.0",
            scope: "el-checkbox",
            ref: "https://element-plus.org/en-US/component/checkbox.html"
        }, L(()=>!!e.trueLabel)), qn({
            from: "false-label",
            replacement: "false-value",
            version: "3.0.0",
            scope: "el-checkbox",
            ref: "https://element-plus.org/en-US/component/checkbox.html"
        }, L(()=>!!e.falseLabel)), {
            inputId: v,
            isLabeledByFormItem: p,
            isChecked: a,
            isDisabled: f,
            isFocused: o,
            checkboxButtonSize: s,
            checkboxSize: r,
            hasOwnLabel: u,
            model: l,
            actualValue: d,
            handleChange: g,
            onClickRoot: m
        };
    }, Hi = q({
        name: "ElCheckbox"
    }), Wi = q({
        ...Hi,
        props: Jo,
        emits: Zo,
        setup (e) {
            const t = e, n = Wo(), { inputId: l, isLabeledByFormItem: i, isChecked: c, isDisabled: o, isFocused: a, checkboxSize: s, hasOwnLabel: r, model: u, actualValue: d, handleChange: f, onClickRoot: v } = ea(t, n), p = ie("checkbox"), g = L(()=>[
                    p.b(),
                    p.m(s.value),
                    p.is("disabled", o.value),
                    p.is("bordered", t.border),
                    p.is("checked", c.value)
                ]), m = L(()=>[
                    p.e("input"),
                    p.is("disabled", o.value),
                    p.is("checked", c.value),
                    p.is("indeterminate", t.indeterminate),
                    p.is("focus", a.value)
                ]);
            return (b, R)=>(M(), ne(rt(!w(r) && w(i) ? "span" : "label"), {
                    class: P(w(g)),
                    "aria-controls": b.indeterminate ? b.ariaControls : null,
                    onClick: w(v)
                }, {
                    default: I(()=>{
                        var C, h, y, S;
                        return [
                            W("span", {
                                class: P(w(m))
                            }, [
                                b.trueValue || b.falseValue || b.trueLabel || b.falseLabel ? Be((M(), D("input", {
                                    key: 0,
                                    id: w(l),
                                    "onUpdate:modelValue": (E)=>At(u) ? u.value = E : null,
                                    class: P(w(p).e("original")),
                                    type: "checkbox",
                                    indeterminate: b.indeterminate,
                                    name: b.name,
                                    tabindex: b.tabindex,
                                    disabled: w(o),
                                    "true-value": (h = (C = b.trueValue) != null ? C : b.trueLabel) != null ? h : !0,
                                    "false-value": (S = (y = b.falseValue) != null ? y : b.falseLabel) != null ? S : !1,
                                    onChange: w(f),
                                    onFocus: (E)=>a.value = !0,
                                    onBlur: (E)=>a.value = !1,
                                    onClick: be(()=>{}, [
                                        "stop"
                                    ])
                                }, null, 42, [
                                    "id",
                                    "onUpdate:modelValue",
                                    "indeterminate",
                                    "name",
                                    "tabindex",
                                    "disabled",
                                    "true-value",
                                    "false-value",
                                    "onChange",
                                    "onFocus",
                                    "onBlur",
                                    "onClick"
                                ])), [
                                    [
                                        Rn,
                                        w(u)
                                    ]
                                ]) : Be((M(), D("input", {
                                    key: 1,
                                    id: w(l),
                                    "onUpdate:modelValue": (E)=>At(u) ? u.value = E : null,
                                    class: P(w(p).e("original")),
                                    type: "checkbox",
                                    indeterminate: b.indeterminate,
                                    disabled: w(o),
                                    value: w(d),
                                    name: b.name,
                                    tabindex: b.tabindex,
                                    onChange: w(f),
                                    onFocus: (E)=>a.value = !0,
                                    onBlur: (E)=>a.value = !1,
                                    onClick: be(()=>{}, [
                                        "stop"
                                    ])
                                }, null, 42, [
                                    "id",
                                    "onUpdate:modelValue",
                                    "indeterminate",
                                    "disabled",
                                    "value",
                                    "name",
                                    "tabindex",
                                    "onChange",
                                    "onFocus",
                                    "onBlur",
                                    "onClick"
                                ])), [
                                    [
                                        Rn,
                                        w(u)
                                    ]
                                ]),
                                W("span", {
                                    class: P(w(p).e("inner"))
                                }, null, 2)
                            ], 2),
                            w(r) ? (M(), D("span", {
                                key: 0,
                                class: P(w(p).e("label"))
                            }, [
                                j(b.$slots, "default"),
                                b.$slots.default ? K("v-if", !0) : (M(), D(Ke, {
                                    key: 0
                                }, [
                                    we(ae(b.label), 1)
                                ], 64))
                            ], 2)) : K("v-if", !0)
                        ];
                    }),
                    _: 3
                }, 8, [
                    "class",
                    "aria-controls",
                    "onClick"
                ]));
        }
    });
    var Vi = Se(Wi, [
        [
            "__file",
            "checkbox.vue"
        ]
    ]);
    const zi = q({
        name: "ElCheckboxButton"
    }), Ui = q({
        ...zi,
        props: Jo,
        emits: Zo,
        setup (e) {
            const t = e, n = Wo(), { isFocused: l, isChecked: i, isDisabled: c, checkboxButtonSize: o, model: a, actualValue: s, handleChange: r } = ea(t, n), u = Ce(Bt, void 0), d = ie("checkbox"), f = L(()=>{
                var p, g, m, b;
                const R = (g = (p = u?.fill) == null ? void 0 : p.value) != null ? g : "";
                return {
                    backgroundColor: R,
                    borderColor: R,
                    color: (b = (m = u?.textColor) == null ? void 0 : m.value) != null ? b : "",
                    boxShadow: R ? `-1px 0 0 0 ${R}` : void 0
                };
            }), v = L(()=>[
                    d.b("button"),
                    d.bm("button", o.value),
                    d.is("disabled", c.value),
                    d.is("checked", i.value),
                    d.is("focus", l.value)
                ]);
            return (p, g)=>{
                var m, b, R, C;
                return M(), D("label", {
                    class: P(w(v))
                }, [
                    p.trueValue || p.falseValue || p.trueLabel || p.falseLabel ? Be((M(), D("input", {
                        key: 0,
                        "onUpdate:modelValue": (h)=>At(a) ? a.value = h : null,
                        class: P(w(d).be("button", "original")),
                        type: "checkbox",
                        name: p.name,
                        tabindex: p.tabindex,
                        disabled: w(c),
                        "true-value": (b = (m = p.trueValue) != null ? m : p.trueLabel) != null ? b : !0,
                        "false-value": (C = (R = p.falseValue) != null ? R : p.falseLabel) != null ? C : !1,
                        onChange: w(r),
                        onFocus: (h)=>l.value = !0,
                        onBlur: (h)=>l.value = !1,
                        onClick: be(()=>{}, [
                            "stop"
                        ])
                    }, null, 42, [
                        "onUpdate:modelValue",
                        "name",
                        "tabindex",
                        "disabled",
                        "true-value",
                        "false-value",
                        "onChange",
                        "onFocus",
                        "onBlur",
                        "onClick"
                    ])), [
                        [
                            Rn,
                            w(a)
                        ]
                    ]) : Be((M(), D("input", {
                        key: 1,
                        "onUpdate:modelValue": (h)=>At(a) ? a.value = h : null,
                        class: P(w(d).be("button", "original")),
                        type: "checkbox",
                        name: p.name,
                        tabindex: p.tabindex,
                        disabled: w(c),
                        value: w(s),
                        onChange: w(r),
                        onFocus: (h)=>l.value = !0,
                        onBlur: (h)=>l.value = !1,
                        onClick: be(()=>{}, [
                            "stop"
                        ])
                    }, null, 42, [
                        "onUpdate:modelValue",
                        "name",
                        "tabindex",
                        "disabled",
                        "value",
                        "onChange",
                        "onFocus",
                        "onBlur",
                        "onClick"
                    ])), [
                        [
                            Rn,
                            w(a)
                        ]
                    ]),
                    p.$slots.default || p.label ? (M(), D("span", {
                        key: 2,
                        class: P(w(d).be("button", "inner")),
                        style: Le(w(i) ? w(f) : void 0)
                    }, [
                        j(p.$slots, "default", {}, ()=>[
                                we(ae(p.label), 1)
                            ])
                    ], 6)) : K("v-if", !0)
                ], 2);
            };
        }
    });
    var ta = Se(Ui, [
        [
            "__file",
            "checkbox-button.vue"
        ]
    ]);
    const Ki = ze({
        modelValue: {
            type: J(Array),
            default: ()=>[]
        },
        disabled: Boolean,
        min: Number,
        max: Number,
        size: Fn,
        fill: String,
        textColor: String,
        tag: {
            type: String,
            default: "div"
        },
        validateEvent: {
            type: Boolean,
            default: !0
        },
        ...El([
            "ariaLabel"
        ])
    }), Gi = {
        [tt]: (e)=>oe(e),
        change: (e)=>oe(e)
    }, ji = q({
        name: "ElCheckboxGroup"
    }), qi = q({
        ...ji,
        props: Ki,
        emits: Gi,
        setup (e, { emit: t }) {
            const n = e, l = ie("checkbox"), { formItem: i } = $n(), { inputId: c, isLabeledByFormItem: o } = Rl(n, {
                formItemContext: i
            }), a = async (r)=>{
                t(tt, r), await Ne(), t(Kt, r);
            }, s = L({
                get () {
                    return n.modelValue;
                },
                set (r) {
                    a(r);
                }
            });
            return Dt(Bt, {
                ...ws(en(n), [
                    "size",
                    "min",
                    "max",
                    "disabled",
                    "validateEvent",
                    "fill",
                    "textColor"
                ]),
                modelValue: s,
                changeEvent: a
            }), fe(()=>n.modelValue, ()=>{
                n.validateEvent && i?.validate("change").catch((r)=>Gt());
            }), (r, u)=>{
                var d;
                return M(), ne(rt(r.tag), {
                    id: w(c),
                    class: P(w(l).b("group")),
                    role: "group",
                    "aria-label": w(o) ? void 0 : r.ariaLabel || "checkbox-group",
                    "aria-labelledby": w(o) ? (d = w(i)) == null ? void 0 : d.labelId : void 0
                }, {
                    default: I(()=>[
                            j(r.$slots, "default")
                        ]),
                    _: 3
                }, 8, [
                    "id",
                    "class",
                    "aria-label",
                    "aria-labelledby"
                ]);
            };
        }
    });
    var na = Se(qi, [
        [
            "__file",
            "checkbox-group.vue"
        ]
    ]);
    const $t = it(Vi, {
        CheckboxButton: ta,
        CheckboxGroup: na
    });
    Jt(ta);
    Jt(na);
    const Yi = (e = "")=>e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d"), ct = new Map;
    if (Xe) {
        let e;
        document.addEventListener("mousedown", (t)=>e = t), document.addEventListener("mouseup", (t)=>{
            if (e) {
                for (const n of ct.values())for (const { documentHandler: l } of n)l(t, e);
                e = void 0;
            }
        });
    }
    function ao(e, t) {
        let n = [];
        return oe(t.arg) ? n = t.arg : Tl(t.arg) && n.push(t.arg), function(l, i) {
            const c = t.instance.popperRef, o = l.target, a = i?.target, s = !t || !t.instance, r = !o || !a, u = e.contains(o) || e.contains(a), d = e === o, f = n.length && n.some((p)=>p?.contains(o)) || n.length && n.includes(a), v = c && (c.contains(o) || c.contains(a));
            s || r || u || d || f || v || t.value(l, i);
        };
    }
    const la = {
        beforeMount (e, t) {
            ct.has(e) || ct.set(e, []), ct.get(e).push({
                documentHandler: ao(e, t),
                bindingFn: t.value
            });
        },
        updated (e, t) {
            ct.has(e) || ct.set(e, []);
            const n = ct.get(e), l = n.findIndex((c)=>c.bindingFn === t.oldValue), i = {
                documentHandler: ao(e, t),
                bindingFn: t.value
            };
            l >= 0 ? n.splice(l, 1, i) : n.push(i);
        },
        unmounted (e) {
            ct.delete(e);
        }
    }, Qi = ze({
        tag: {
            type: String,
            default: "div"
        },
        span: {
            type: Number,
            default: 24
        },
        offset: {
            type: Number,
            default: 0
        },
        pull: {
            type: Number,
            default: 0
        },
        push: {
            type: Number,
            default: 0
        },
        xs: {
            type: J([
                Number,
                Object
            ]),
            default: ()=>at({})
        },
        sm: {
            type: J([
                Number,
                Object
            ]),
            default: ()=>at({})
        },
        md: {
            type: J([
                Number,
                Object
            ]),
            default: ()=>at({})
        },
        lg: {
            type: J([
                Number,
                Object
            ]),
            default: ()=>at({})
        },
        xl: {
            type: J([
                Number,
                Object
            ]),
            default: ()=>at({})
        }
    }), oa = Symbol("rowContextKey"), Xi = q({
        name: "ElCol"
    }), Ji = q({
        ...Xi,
        props: Qi,
        setup (e) {
            const t = e, { gutter: n } = Ce(oa, {
                gutter: L(()=>0)
            }), l = ie("col"), i = L(()=>{
                const o = {};
                return n.value && (o.paddingLeft = o.paddingRight = `${n.value / 2}px`), o;
            }), c = L(()=>{
                const o = [];
                return [
                    "span",
                    "offset",
                    "pull",
                    "push"
                ].forEach((r)=>{
                    const u = t[r];
                    Ie(u) && (r === "span" ? o.push(l.b(`${t[r]}`)) : u > 0 && o.push(l.b(`${r}-${t[r]}`)));
                }), [
                    "xs",
                    "sm",
                    "md",
                    "lg",
                    "xl"
                ].forEach((r)=>{
                    Ie(t[r]) ? o.push(l.b(`${r}-${t[r]}`)) : je(t[r]) && Object.entries(t[r]).forEach(([u, d])=>{
                        o.push(u !== "span" ? l.b(`${r}-${u}-${d}`) : l.b(`${r}-${d}`));
                    });
                }), n.value && o.push(l.is("guttered")), [
                    l.b(),
                    o
                ];
            });
            return (o, a)=>(M(), ne(rt(o.tag), {
                    class: P(w(c)),
                    style: Le(w(i))
                }, {
                    default: I(()=>[
                            j(o.$slots, "default")
                        ]),
                    _: 3
                }, 8, [
                    "class",
                    "style"
                ]));
        }
    });
    var Zi = Se(Ji, [
        [
            "__file",
            "col.vue"
        ]
    ]);
    const eu = it(Zi), et = {}, tu = ze({
        direction: {
            type: String,
            values: [
                "horizontal",
                "vertical"
            ],
            default: "horizontal"
        },
        contentPosition: {
            type: String,
            values: [
                "left",
                "center",
                "right"
            ],
            default: "center"
        },
        borderStyle: {
            type: J(String),
            default: "solid"
        }
    }), nu = q({
        name: "ElDivider"
    }), lu = q({
        ...nu,
        props: tu,
        setup (e) {
            const t = e, n = ie("divider"), l = L(()=>n.cssVar({
                    "border-style": t.borderStyle
                }));
            return (i, c)=>(M(), D("div", {
                    class: P([
                        w(n).b(),
                        w(n).m(i.direction)
                    ]),
                    style: Le(w(l)),
                    role: "separator"
                }, [
                    i.$slots.default && i.direction !== "vertical" ? (M(), D("div", {
                        key: 0,
                        class: P([
                            w(n).e("text"),
                            w(n).is(i.contentPosition)
                        ])
                    }, [
                        j(i.$slots, "default")
                    ], 2)) : K("v-if", !0)
                ], 6));
        }
    });
    var ou = Se(lu, [
        [
            "__file",
            "divider.vue"
        ]
    ]);
    const au = it(ou);
    function su() {
        const e = Tn(), t = N(0), n = 11, l = L(()=>({
                minWidth: `${Math.max(t.value, n)}px`
            }));
        return nt(e, ()=>{
            var c, o;
            t.value = (o = (c = e.value) == null ? void 0 : c.getBoundingClientRect().width) != null ? o : 0;
        }), {
            calculatorRef: e,
            calculatorWidth: t,
            inputStyle: l
        };
    }
    const aa = Symbol("ElSelectGroup"), Hn = Symbol("ElSelect"), il = "ElOption", ru = ze({
        value: {
            type: [
                String,
                Number,
                Boolean,
                Object
            ],
            required: !0
        },
        label: {
            type: [
                String,
                Number
            ]
        },
        created: Boolean,
        disabled: Boolean
    });
    function iu(e, t) {
        const n = Ce(Hn);
        n || Zt(il, "usage: <el-select><el-option /></el-select/>");
        const l = Ce(aa, {
            disabled: !1
        }), i = L(()=>u(dt(n.props.modelValue), e.value)), c = L(()=>{
            var v;
            if (n.props.multiple) {
                const p = dt((v = n.props.modelValue) != null ? v : []);
                return !i.value && p.length >= n.props.multipleLimit && n.props.multipleLimit > 0;
            } else return !1;
        }), o = L(()=>e.label || (je(e.value) ? "" : e.value)), a = L(()=>e.value || e.label || ""), s = L(()=>e.disabled || t.groupDisabled || c.value), r = Te(), u = (v = [], p)=>{
            if (je(e.value)) {
                const g = n.props.valueKey;
                return v && v.some((m)=>ol(st(m, g)) === st(p, g));
            } else return v && v.includes(p);
        }, d = ()=>{
            !e.disabled && !l.disabled && (n.states.hoveringIndex = n.optionsArray.indexOf(r.proxy));
        }, f = (v)=>{
            const p = new RegExp(Yi(v), "i");
            t.visible = p.test(String(o.value)) || e.created;
        };
        return fe(()=>o.value, ()=>{
            !e.created && !n.props.remote && n.setSelected();
        }), fe(()=>e.value, (v, p)=>{
            const { remote: g, valueKey: m } = n.props;
            if ((g ? v !== p : !mt(v, p)) && (n.onOptionDestroy(p, r.proxy), n.onOptionCreate(r.proxy)), !e.created && !g) {
                if (m && je(v) && je(p) && v[m] === p[m]) return;
                n.setSelected();
            }
        }), fe(()=>l.disabled, ()=>{
            t.groupDisabled = l.disabled;
        }, {
            immediate: !0
        }), {
            select: n,
            currentLabel: o,
            currentValue: a,
            itemSelected: i,
            isDisabled: s,
            hoverItem: d,
            updateOption: f
        };
    }
    const uu = q({
        name: il,
        componentName: il,
        props: ru,
        setup (e) {
            const t = ie("select"), n = Lo(), l = L(()=>[
                    t.be("dropdown", "item"),
                    t.is("disabled", w(a)),
                    t.is("selected", w(o)),
                    t.is("hovering", w(f))
                ]), i = Ft({
                index: -1,
                groupDisabled: !1,
                visible: !0,
                hover: !1
            }), { currentLabel: c, itemSelected: o, isDisabled: a, select: s, hoverItem: r, updateOption: u } = iu(e, i), { visible: d, hover: f } = en(i), v = Te().proxy;
            s.onOptionCreate(v), tn(()=>{
                const g = v.value, { selected: m } = s.states, b = m.some((R)=>R.value === v.value);
                Ne(()=>{
                    s.states.cachedOptions.get(g) === v && !b && s.states.cachedOptions.delete(g);
                }), s.onOptionDestroy(g, v);
            });
            function p() {
                a.value || s.handleOptionSelect(v);
            }
            return {
                ns: t,
                id: n,
                containerKls: l,
                currentLabel: c,
                itemSelected: o,
                isDisabled: a,
                select: s,
                visible: d,
                hover: f,
                states: i,
                hoverItem: r,
                updateOption: u,
                selectOptionClick: p
            };
        }
    });
    function cu(e, t) {
        return Be((M(), D("li", {
            id: e.id,
            class: P(e.containerKls),
            role: "option",
            "aria-disabled": e.isDisabled || void 0,
            "aria-selected": e.itemSelected,
            onMousemove: e.hoverItem,
            onClick: be(e.selectOptionClick, [
                "stop"
            ])
        }, [
            j(e.$slots, "default", {}, ()=>[
                    W("span", null, ae(e.currentLabel), 1)
                ])
        ], 42, [
            "id",
            "aria-disabled",
            "aria-selected",
            "onMousemove",
            "onClick"
        ])), [
            [
                yt,
                e.visible
            ]
        ]);
    }
    var Nl = Se(uu, [
        [
            "render",
            cu
        ],
        [
            "__file",
            "option.vue"
        ]
    ]);
    const du = q({
        name: "ElSelectDropdown",
        componentName: "ElSelectDropdown",
        setup () {
            const e = Ce(Hn), t = ie("select"), n = L(()=>e.props.popperClass), l = L(()=>e.props.multiple), i = L(()=>e.props.fitInputWidth), c = N("");
            function o() {
                var a;
                c.value = `${(a = e.selectRef) == null ? void 0 : a.offsetWidth}px`;
            }
            return qe(()=>{
                o(), nt(e.selectRef, o);
            }), {
                ns: t,
                minWidth: c,
                popperClass: n,
                isMultiple: l,
                isFitInputWidth: i
            };
        }
    });
    function fu(e, t, n, l, i, c) {
        return M(), D("div", {
            class: P([
                e.ns.b("dropdown"),
                e.ns.is("multiple", e.isMultiple),
                e.popperClass
            ]),
            style: Le({
                [e.isFitInputWidth ? "width" : "minWidth"]: e.minWidth
            })
        }, [
            e.$slots.header ? (M(), D("div", {
                key: 0,
                class: P(e.ns.be("dropdown", "header"))
            }, [
                j(e.$slots, "header")
            ], 2)) : K("v-if", !0),
            j(e.$slots, "default"),
            e.$slots.footer ? (M(), D("div", {
                key: 1,
                class: P(e.ns.be("dropdown", "footer"))
            }, [
                j(e.$slots, "footer")
            ], 2)) : K("v-if", !0)
        ], 6);
    }
    var pu = Se(du, [
        [
            "render",
            fu
        ],
        [
            "__file",
            "select-dropdown.vue"
        ]
    ]);
    const vu = (e, t)=>{
        const { t: n } = In(), l = Lo(), i = ie("select"), c = ie("input"), o = Ft({
            inputValue: "",
            options: new Map,
            cachedOptions: new Map,
            optionValues: [],
            selected: [],
            selectionWidth: 0,
            collapseItemWidth: 0,
            selectedLabel: "",
            hoveringIndex: -1,
            previousQuery: null,
            inputHovering: !1,
            menuVisibleOnFocus: !1,
            isBeforeHide: !1
        }), a = N(), s = N(), r = N(), u = N(), d = N(), f = N(), v = N(), p = N(), g = N(), m = N(), b = N(), { isComposing: R, handleCompositionStart: C, handleCompositionUpdate: h, handleCompositionEnd: y } = Ss({
            afterComposition: (O)=>dn(O)
        }), { wrapperRef: S, isFocused: E, handleBlur: k } = Es(d, {
            beforeFocus () {
                return le.value;
            },
            afterFocus () {
                e.automaticDropdown && !T.value && (T.value = !0, o.menuVisibleOnFocus = !0);
            },
            beforeBlur (O) {
                var F, ee;
                return ((F = r.value) == null ? void 0 : F.isFocusInsideContent(O)) || ((ee = u.value) == null ? void 0 : ee.isFocusInsideContent(O));
            },
            afterBlur () {
                var O;
                T.value = !1, o.menuVisibleOnFocus = !1, e.validateEvent && ((O = x?.validate) == null || O.call(x, "blur").catch((F)=>Gt()));
            }
        }), T = N(!1), $ = N(), { form: z, formItem: x } = $n(), { inputId: Y } = Rl(e, {
            formItemContext: x
        }), { valueOnClear: te, isEmptyValue: V } = Rs(e), le = L(()=>e.disabled || z?.disabled), ce = L(()=>oe(e.modelValue) ? e.modelValue.length > 0 : !V(e.modelValue)), B = L(()=>{
            var O;
            return (O = z?.statusIcon) != null ? O : !1;
        }), A = L(()=>e.clearable && !le.value && o.inputHovering && ce.value), U = L(()=>e.remote && e.filterable && !e.remoteShowSuffix ? "" : e.suffixIcon), de = L(()=>i.is("reverse", !!(U.value && T.value))), ve = L(()=>x?.validateState || ""), ge = L(()=>ve.value && Ts[ve.value]), ke = L(()=>e.remote ? 300 : 0), Pe = L(()=>e.remote && !o.inputValue && o.options.size === 0), xe = L(()=>e.loading ? e.loadingText || n("el.select.loading") : e.filterable && o.inputValue && o.options.size > 0 && he.value === 0 ? e.noMatchText || n("el.select.noMatch") : o.options.size === 0 ? e.noDataText || n("el.select.noData") : null), he = L(()=>ue.value.filter((O)=>O.visible).length), ue = L(()=>{
            const O = Array.from(o.options.values()), F = [];
            return o.optionValues.forEach((ee)=>{
                const Ee = O.findIndex((Ue)=>Ue.value === ee);
                Ee > -1 && F.push(O[Ee]);
            }), F.length >= O.length ? F : O;
        }), _e = L(()=>Array.from(o.cachedOptions.values())), St = L(()=>{
            const O = ue.value.filter((F)=>!F.created).some((F)=>F.currentLabel === o.inputValue);
            return e.filterable && e.allowCreate && o.inputValue !== "" && !O;
        }), xt = ()=>{
            e.filterable && ye(e.filterMethod) || e.filterable && e.remote && ye(e.remoteMethod) || ue.value.forEach((O)=>{
                var F;
                (F = O.updateOption) == null || F.call(O, o.inputValue);
            });
        }, on = jt(), Wn = L(()=>[
                "small"
            ].includes(on.value) ? "small" : "default"), Vn = L({
            get () {
                return T.value && !Pe.value;
            },
            set (O) {
                T.value = O;
            }
        }), zn = L(()=>{
            if (e.multiple && !Oe(e.modelValue)) return dt(e.modelValue).length === 0 && !o.inputValue;
            const O = oe(e.modelValue) ? e.modelValue[0] : e.modelValue;
            return e.filterable || Oe(O) ? !o.inputValue : !0;
        }), an = L(()=>{
            var O;
            const F = (O = e.placeholder) != null ? O : n("el.select.placeholder");
            return e.multiple || !ce.value ? F : o.selectedLabel;
        }), Un = L(()=>Gl ? null : "mouseenter");
        fe(()=>e.modelValue, (O, F)=>{
            e.multiple && e.filterable && !e.reserveKeyword && (o.inputValue = "", Et("")), Rt(), !mt(O, F) && e.validateEvent && x?.validate("change").catch((ee)=>Gt());
        }, {
            flush: "post",
            deep: !0
        }), fe(()=>T.value, (O)=>{
            O ? Et(o.inputValue) : (o.inputValue = "", o.previousQuery = null, o.isBeforeHide = !0), t("visible-change", O);
        }), fe(()=>o.options.entries(), ()=>{
            Xe && (Rt(), e.defaultFirstOption && (e.filterable || e.remote) && he.value && sn());
        }, {
            flush: "post"
        }), fe([
            ()=>o.hoveringIndex,
            ue
        ], ([O])=>{
            Ie(O) && O > -1 ? $.value = ue.value[O] || {} : $.value = {}, ue.value.forEach((F)=>{
                F.hover = $.value === F;
            });
        }), gt(()=>{
            o.isBeforeHide || xt();
        });
        const Et = (O)=>{
            o.previousQuery === O || R.value || (o.previousQuery = O, e.filterable && ye(e.filterMethod) ? e.filterMethod(O) : e.filterable && e.remote && ye(e.remoteMethod) && e.remoteMethod(O), e.defaultFirstOption && (e.filterable || e.remote) && he.value ? Ne(sn) : Ne(Kn));
        }, sn = ()=>{
            const O = ue.value.filter((Ue)=>Ue.visible && !Ue.disabled && !Ue.states.groupDisabled), F = O.find((Ue)=>Ue.created), ee = O[0], Ee = ue.value.map((Ue)=>Ue.value);
            o.hoveringIndex = se(Ee, F || ee);
        }, Rt = ()=>{
            if (e.multiple) o.selectedLabel = "";
            else {
                const F = oe(e.modelValue) ? e.modelValue[0] : e.modelValue, ee = rn(F);
                o.selectedLabel = ee.currentLabel, o.selected = [
                    ee
                ];
                return;
            }
            const O = [];
            Oe(e.modelValue) || dt(e.modelValue).forEach((F)=>{
                O.push(rn(F));
            }), o.selected = O;
        }, rn = (O)=>{
            let F;
            const ee = al(O);
            for(let kt = o.cachedOptions.size - 1; kt >= 0; kt--){
                const ut = _e.value[kt];
                if (ee ? st(ut.value, e.valueKey) === st(O, e.valueKey) : ut.value === O) {
                    F = {
                        value: O,
                        currentLabel: ut.currentLabel,
                        get isDisabled () {
                            return ut.isDisabled;
                        }
                    };
                    break;
                }
            }
            if (F) return F;
            const Ee = ee ? O.label : O ?? "";
            return {
                value: O,
                currentLabel: Ee
            };
        }, Kn = ()=>{
            o.hoveringIndex = ue.value.findIndex((O)=>o.selected.some((F)=>pn(F) === pn(O)));
        }, Gn = ()=>{
            o.selectionWidth = s.value.getBoundingClientRect().width;
        }, jn = ()=>{
            o.collapseItemWidth = m.value.getBoundingClientRect().width;
        }, Ht = ()=>{
            var O, F;
            (F = (O = r.value) == null ? void 0 : O.updatePopper) == null || F.call(O);
        }, un = ()=>{
            var O, F;
            (F = (O = u.value) == null ? void 0 : O.updatePopper) == null || F.call(O);
        }, cn = ()=>{
            o.inputValue.length > 0 && !T.value && (T.value = !0), Et(o.inputValue);
        }, dn = (O)=>{
            if (o.inputValue = O.target.value, e.remote) fn();
            else return cn();
        }, fn = Qt(()=>{
            cn();
        }, ke.value), Tt = (O)=>{
            mt(e.modelValue, O) || t(Kt, O);
        }, Dl = (O)=>Ti(O, (F)=>{
                const ee = o.cachedOptions.get(F);
                return ee && !ee.disabled && !ee.states.groupDisabled;
            }), H = (O)=>{
            if (e.multiple && O.code !== Mo.delete && O.target.value.length <= 0) {
                const F = dt(e.modelValue).slice(), ee = Dl(F);
                if (ee < 0) return;
                const Ee = F[ee];
                F.splice(ee, 1), t(tt, F), Tt(F), t("remove-tag", Ee);
            }
        }, Q = (O, F)=>{
            const ee = o.selected.indexOf(F);
            if (ee > -1 && !le.value) {
                const Ee = dt(e.modelValue).slice();
                Ee.splice(ee, 1), t(tt, Ee), Tt(Ee), t("remove-tag", F.value);
            }
            O.stopPropagation(), ot();
        }, X = (O)=>{
            O.stopPropagation();
            const F = e.multiple ? [] : te.value;
            if (e.multiple) for (const ee of o.selected)ee.isDisabled && F.push(ee.value);
            t(tt, F), Tt(F), o.hoveringIndex = -1, T.value = !1, t("clear"), ot();
        }, Z = (O)=>{
            var F;
            if (e.multiple) {
                const ee = dt((F = e.modelValue) != null ? F : []).slice(), Ee = se(ee, O);
                Ee > -1 ? ee.splice(Ee, 1) : (e.multipleLimit <= 0 || ee.length < e.multipleLimit) && ee.push(O.value), t(tt, ee), Tt(ee), O.created && Et(""), e.filterable && !e.reserveKeyword && (o.inputValue = "");
            } else t(tt, O.value), Tt(O.value), T.value = !1;
            ot(), !T.value && Ne(()=>{
                re(O);
            });
        }, se = (O, F)=>Oe(F) ? -1 : je(F.value) ? O.findIndex((ee)=>mt(st(ee, e.valueKey), pn(F))) : O.indexOf(F.value), re = (O)=>{
            var F, ee, Ee, Ue, kt;
            const ut = oe(O) ? O[0] : O;
            let vn = null;
            if (ut?.value) {
                const Wt = ue.value.filter((es)=>es.value === ut.value);
                Wt.length > 0 && (vn = Wt[0].$el);
            }
            if (r.value && vn) {
                const Wt = (Ue = (Ee = (ee = (F = r.value) == null ? void 0 : F.popperRef) == null ? void 0 : ee.contentRef) == null ? void 0 : Ee.querySelector) == null ? void 0 : Ue.call(Ee, `.${i.be("dropdown", "wrap")}`);
                Wt && Mi(Wt, vn);
            }
            (kt = b.value) == null || kt.handleScroll();
        }, Ae = (O)=>{
            o.options.set(O.value, O), o.cachedOptions.set(O.value, O);
        }, pe = (O, F)=>{
            o.options.get(O) === F && o.options.delete(O);
        }, Ye = L(()=>{
            var O, F;
            return (F = (O = r.value) == null ? void 0 : O.popperRef) == null ? void 0 : F.contentRef;
        }), Ot = ()=>{
            o.isBeforeHide = !1, Ne(()=>{
                var O;
                (O = b.value) == null || O.update(), re(o.selected);
            });
        }, ot = ()=>{
            var O;
            (O = d.value) == null || O.focus();
        }, Va = ()=>{
            var O;
            if (T.value) {
                T.value = !1, Ne(()=>{
                    var F;
                    return (F = d.value) == null ? void 0 : F.blur();
                });
                return;
            }
            (O = d.value) == null || O.blur();
        }, za = (O)=>{
            X(O);
        }, Ua = (O)=>{
            if (T.value = !1, E.value) {
                const F = new FocusEvent("focus", O);
                Ne(()=>k(F));
            }
        }, Ka = ()=>{
            o.inputValue.length > 0 ? o.inputValue = "" : T.value = !1;
        }, Bl = ()=>{
            le.value || (Gl && (o.inputHovering = !0), o.menuVisibleOnFocus ? o.menuVisibleOnFocus = !1 : T.value = !T.value);
        }, Ga = ()=>{
            if (!T.value) Bl();
            else {
                const O = ue.value[o.hoveringIndex];
                O && !O.isDisabled && Z(O);
            }
        }, pn = (O)=>je(O.value) ? st(O.value, e.valueKey) : O.value, ja = L(()=>ue.value.filter((O)=>O.visible).every((O)=>O.isDisabled)), qa = L(()=>e.multiple ? e.collapseTags ? o.selected.slice(0, e.maxCollapseTags) : o.selected : []), Ya = L(()=>e.multiple ? e.collapseTags ? o.selected.slice(e.maxCollapseTags) : [] : []), xl = (O)=>{
            if (!T.value) {
                T.value = !0;
                return;
            }
            if (!(o.options.size === 0 || he.value === 0 || R.value) && !ja.value) {
                O === "next" ? (o.hoveringIndex++, o.hoveringIndex === o.options.size && (o.hoveringIndex = 0)) : O === "prev" && (o.hoveringIndex--, o.hoveringIndex < 0 && (o.hoveringIndex = o.options.size - 1));
                const F = ue.value[o.hoveringIndex];
                (F.isDisabled || !F.visible) && xl(O), Ne(()=>re($.value));
            }
        }, Qa = ()=>{
            if (!s.value) return 0;
            const O = window.getComputedStyle(s.value);
            return Number.parseFloat(O.gap || "6px");
        }, Xa = L(()=>{
            const O = Qa();
            return {
                maxWidth: `${m.value && e.maxCollapseTags === 1 ? o.selectionWidth - o.collapseItemWidth - O : o.selectionWidth}px`
            };
        }), Ja = L(()=>({
                maxWidth: `${o.selectionWidth}px`
            })), Za = (O)=>{
            t("popup-scroll", O);
        };
        return nt(s, Gn), nt(p, Ht), nt(S, Ht), nt(g, un), nt(m, jn), qe(()=>{
            Rt();
        }), {
            inputId: Y,
            contentId: l,
            nsSelect: i,
            nsInput: c,
            states: o,
            isFocused: E,
            expanded: T,
            optionsArray: ue,
            hoverOption: $,
            selectSize: on,
            filteredOptionsCount: he,
            updateTooltip: Ht,
            updateTagTooltip: un,
            debouncedOnInputChange: fn,
            onInput: dn,
            deletePrevTag: H,
            deleteTag: Q,
            deleteSelected: X,
            handleOptionSelect: Z,
            scrollToOption: re,
            hasModelValue: ce,
            shouldShowPlaceholder: zn,
            currentPlaceholder: an,
            mouseEnterEventName: Un,
            needStatusIcon: B,
            showClose: A,
            iconComponent: U,
            iconReverse: de,
            validateState: ve,
            validateIcon: ge,
            showNewOption: St,
            updateOptions: xt,
            collapseTagSize: Wn,
            setSelected: Rt,
            selectDisabled: le,
            emptyText: xe,
            handleCompositionStart: C,
            handleCompositionUpdate: h,
            handleCompositionEnd: y,
            onOptionCreate: Ae,
            onOptionDestroy: pe,
            handleMenuEnter: Ot,
            focus: ot,
            blur: Va,
            handleClearClick: za,
            handleClickOutside: Ua,
            handleEsc: Ka,
            toggleMenu: Bl,
            selectOption: Ga,
            getValueKey: pn,
            navigateOptions: xl,
            dropdownMenuVisible: Vn,
            showTagList: qa,
            collapseTagList: Ya,
            popupScroll: Za,
            tagStyle: Xa,
            collapseTagStyle: Ja,
            popperRef: Ye,
            inputRef: d,
            tooltipRef: r,
            tagTooltipRef: u,
            prefixRef: f,
            suffixRef: v,
            selectRef: a,
            wrapperRef: S,
            selectionRef: s,
            scrollbarRef: b,
            menuRef: p,
            tagMenuRef: g,
            collapseItemRef: m
        };
    };
    var hu = q({
        name: "ElOptions",
        setup (e, { slots: t }) {
            const n = Ce(Hn);
            let l = [];
            return ()=>{
                var i, c;
                const o = (i = t.default) == null ? void 0 : i.call(t), a = [];
                function s(r) {
                    oe(r) && r.forEach((u)=>{
                        var d, f, v, p;
                        const g = (d = u?.type || {}) == null ? void 0 : d.name;
                        g === "ElOptionGroup" ? s(!Me(u.children) && !oe(u.children) && ye((f = u.children) == null ? void 0 : f.default) ? (v = u.children) == null ? void 0 : v.default() : u.children) : g === "ElOption" ? a.push((p = u.props) == null ? void 0 : p.value) : oe(u.children) && s(u.children);
                    });
                }
                return o.length && s((c = o[0]) == null ? void 0 : c.children), mt(a, l) || (l = a, n && (n.states.optionValues = a)), o;
            };
        }
    });
    const gu = ze({
        name: String,
        id: String,
        modelValue: {
            type: J([
                Array,
                String,
                Number,
                Boolean,
                Object
            ]),
            default: void 0
        },
        autocomplete: {
            type: String,
            default: "off"
        },
        automaticDropdown: Boolean,
        size: Fn,
        effect: {
            type: J(String),
            default: "light"
        },
        disabled: Boolean,
        clearable: Boolean,
        filterable: Boolean,
        allowCreate: Boolean,
        loading: Boolean,
        popperClass: {
            type: String,
            default: ""
        },
        popperOptions: {
            type: J(Object),
            default: ()=>({})
        },
        remote: Boolean,
        loadingText: String,
        noMatchText: String,
        noDataText: String,
        remoteMethod: Function,
        filterMethod: Function,
        multiple: Boolean,
        multipleLimit: {
            type: Number,
            default: 0
        },
        placeholder: {
            type: String
        },
        defaultFirstOption: Boolean,
        reserveKeyword: {
            type: Boolean,
            default: !0
        },
        valueKey: {
            type: String,
            default: "value"
        },
        collapseTags: Boolean,
        collapseTagsTooltip: Boolean,
        maxCollapseTags: {
            type: Number,
            default: 1
        },
        teleported: tl.teleported,
        persistent: {
            type: Boolean,
            default: !0
        },
        clearIcon: {
            type: nl,
            default: Ao
        },
        fitInputWidth: Boolean,
        suffixIcon: {
            type: nl,
            default: Po
        },
        tagType: {
            ...jl.type,
            default: "info"
        },
        tagEffect: {
            ...jl.effect,
            default: "light"
        },
        validateEvent: {
            type: Boolean,
            default: !0
        },
        remoteShowSuffix: Boolean,
        showArrow: {
            type: Boolean,
            default: !0
        },
        offset: {
            type: Number,
            default: 12
        },
        placement: {
            type: J(String),
            values: ks,
            default: "bottom-start"
        },
        fallbackPlacements: {
            type: J(Array),
            default: [
                "bottom-start",
                "top-start",
                "right",
                "left"
            ]
        },
        tabindex: {
            type: [
                String,
                Number
            ],
            default: 0
        },
        appendTo: tl.appendTo,
        ...Os,
        ...El([
            "ariaLabel"
        ])
    });
    Ns.scroll;
    const so = "ElSelect", mu = q({
        name: so,
        componentName: so,
        components: {
            ElSelectMenu: pu,
            ElOption: Nl,
            ElOptions: hu,
            ElTag: Fo,
            ElScrollbar: Ol,
            ElTooltip: _n,
            ElIcon: Ve
        },
        directives: {
            ClickOutside: la
        },
        props: gu,
        emits: [
            tt,
            Kt,
            "remove-tag",
            "clear",
            "visible-change",
            "focus",
            "blur",
            "popup-scroll"
        ],
        setup (e, { emit: t }) {
            const n = L(()=>{
                const { modelValue: s, multiple: r } = e, u = r ? [] : void 0;
                return oe(s) ? r ? s : u : r ? u : s;
            }), l = Ft({
                ...en(e),
                modelValue: n
            }), i = vu(l, t), { calculatorRef: c, inputStyle: o } = su();
            Dt(Hn, Ft({
                props: l,
                states: i.states,
                selectRef: i.selectRef,
                optionsArray: i.optionsArray,
                setSelected: i.setSelected,
                handleOptionSelect: i.handleOptionSelect,
                onOptionCreate: i.onOptionCreate,
                onOptionDestroy: i.onOptionDestroy
            }));
            const a = L(()=>e.multiple ? i.states.selected.map((s)=>s.currentLabel) : i.states.selectedLabel);
            return {
                ...i,
                modelValue: n,
                selectedLabel: a,
                calculatorRef: c,
                inputStyle: o
            };
        }
    });
    function bu(e, t) {
        const n = Re("el-tag"), l = Re("el-tooltip"), i = Re("el-icon"), c = Re("el-option"), o = Re("el-options"), a = Re("el-scrollbar"), s = Re("el-select-menu"), r = kl("click-outside");
        return Be((M(), D("div", {
            ref: "selectRef",
            class: P([
                e.nsSelect.b(),
                e.nsSelect.m(e.selectSize)
            ]),
            [nr(e.mouseEnterEventName)]: (u)=>e.states.inputHovering = !0,
            onMouseleave: (u)=>e.states.inputHovering = !1
        }, [
            _(l, {
                ref: "tooltipRef",
                visible: e.dropdownMenuVisible,
                placement: e.placement,
                teleported: e.teleported,
                "popper-class": [
                    e.nsSelect.e("popper"),
                    e.popperClass
                ],
                "popper-options": e.popperOptions,
                "fallback-placements": e.fallbackPlacements,
                effect: e.effect,
                pure: "",
                trigger: "click",
                transition: `${e.nsSelect.namespace.value}-zoom-in-top`,
                "stop-popper-mouse-event": !1,
                "gpu-acceleration": !1,
                persistent: e.persistent,
                "append-to": e.appendTo,
                "show-arrow": e.showArrow,
                offset: e.offset,
                onBeforeShow: e.handleMenuEnter,
                onHide: (u)=>e.states.isBeforeHide = !1
            }, {
                default: I(()=>{
                    var u;
                    return [
                        W("div", {
                            ref: "wrapperRef",
                            class: P([
                                e.nsSelect.e("wrapper"),
                                e.nsSelect.is("focused", e.isFocused),
                                e.nsSelect.is("hovering", e.states.inputHovering),
                                e.nsSelect.is("filterable", e.filterable),
                                e.nsSelect.is("disabled", e.selectDisabled)
                            ]),
                            onClick: be(e.toggleMenu, [
                                "prevent"
                            ])
                        }, [
                            e.$slots.prefix ? (M(), D("div", {
                                key: 0,
                                ref: "prefixRef",
                                class: P(e.nsSelect.e("prefix"))
                            }, [
                                j(e.$slots, "prefix")
                            ], 2)) : K("v-if", !0),
                            W("div", {
                                ref: "selectionRef",
                                class: P([
                                    e.nsSelect.e("selection"),
                                    e.nsSelect.is("near", e.multiple && !e.$slots.prefix && !!e.states.selected.length)
                                ])
                            }, [
                                e.multiple ? j(e.$slots, "tag", {
                                    key: 0
                                }, ()=>[
                                        (M(!0), D(Ke, null, Ct(e.showTagList, (d)=>(M(), D("div", {
                                                key: e.getValueKey(d),
                                                class: P(e.nsSelect.e("selected-item"))
                                            }, [
                                                _(n, {
                                                    closable: !e.selectDisabled && !d.isDisabled,
                                                    size: e.collapseTagSize,
                                                    type: e.tagType,
                                                    effect: e.tagEffect,
                                                    "disable-transitions": "",
                                                    style: Le(e.tagStyle),
                                                    onClose: (f)=>e.deleteTag(f, d)
                                                }, {
                                                    default: I(()=>[
                                                            W("span", {
                                                                class: P(e.nsSelect.e("tags-text"))
                                                            }, [
                                                                j(e.$slots, "label", {
                                                                    label: d.currentLabel,
                                                                    value: d.value
                                                                }, ()=>[
                                                                        we(ae(d.currentLabel), 1)
                                                                    ])
                                                            ], 2)
                                                        ]),
                                                    _: 2
                                                }, 1032, [
                                                    "closable",
                                                    "size",
                                                    "type",
                                                    "effect",
                                                    "style",
                                                    "onClose"
                                                ])
                                            ], 2))), 128)),
                                        e.collapseTags && e.states.selected.length > e.maxCollapseTags ? (M(), ne(l, {
                                            key: 0,
                                            ref: "tagTooltipRef",
                                            disabled: e.dropdownMenuVisible || !e.collapseTagsTooltip,
                                            "fallback-placements": [
                                                "bottom",
                                                "top",
                                                "right",
                                                "left"
                                            ],
                                            effect: e.effect,
                                            placement: "bottom",
                                            teleported: e.teleported
                                        }, {
                                            default: I(()=>[
                                                    W("div", {
                                                        ref: "collapseItemRef",
                                                        class: P(e.nsSelect.e("selected-item"))
                                                    }, [
                                                        _(n, {
                                                            closable: !1,
                                                            size: e.collapseTagSize,
                                                            type: e.tagType,
                                                            effect: e.tagEffect,
                                                            "disable-transitions": "",
                                                            style: Le(e.collapseTagStyle)
                                                        }, {
                                                            default: I(()=>[
                                                                    W("span", {
                                                                        class: P(e.nsSelect.e("tags-text"))
                                                                    }, " + " + ae(e.states.selected.length - e.maxCollapseTags), 3)
                                                                ]),
                                                            _: 1
                                                        }, 8, [
                                                            "size",
                                                            "type",
                                                            "effect",
                                                            "style"
                                                        ])
                                                    ], 2)
                                                ]),
                                            content: I(()=>[
                                                    W("div", {
                                                        ref: "tagMenuRef",
                                                        class: P(e.nsSelect.e("selection"))
                                                    }, [
                                                        (M(!0), D(Ke, null, Ct(e.collapseTagList, (d)=>(M(), D("div", {
                                                                key: e.getValueKey(d),
                                                                class: P(e.nsSelect.e("selected-item"))
                                                            }, [
                                                                _(n, {
                                                                    class: "in-tooltip",
                                                                    closable: !e.selectDisabled && !d.isDisabled,
                                                                    size: e.collapseTagSize,
                                                                    type: e.tagType,
                                                                    effect: e.tagEffect,
                                                                    "disable-transitions": "",
                                                                    onClose: (f)=>e.deleteTag(f, d)
                                                                }, {
                                                                    default: I(()=>[
                                                                            W("span", {
                                                                                class: P(e.nsSelect.e("tags-text"))
                                                                            }, [
                                                                                j(e.$slots, "label", {
                                                                                    label: d.currentLabel,
                                                                                    value: d.value
                                                                                }, ()=>[
                                                                                        we(ae(d.currentLabel), 1)
                                                                                    ])
                                                                            ], 2)
                                                                        ]),
                                                                    _: 2
                                                                }, 1032, [
                                                                    "closable",
                                                                    "size",
                                                                    "type",
                                                                    "effect",
                                                                    "onClose"
                                                                ])
                                                            ], 2))), 128))
                                                    ], 2)
                                                ]),
                                            _: 3
                                        }, 8, [
                                            "disabled",
                                            "effect",
                                            "teleported"
                                        ])) : K("v-if", !0)
                                    ]) : K("v-if", !0),
                                W("div", {
                                    class: P([
                                        e.nsSelect.e("selected-item"),
                                        e.nsSelect.e("input-wrapper"),
                                        e.nsSelect.is("hidden", !e.filterable)
                                    ])
                                }, [
                                    Be(W("input", {
                                        id: e.inputId,
                                        ref: "inputRef",
                                        "onUpdate:modelValue": (d)=>e.states.inputValue = d,
                                        type: "text",
                                        name: e.name,
                                        class: P([
                                            e.nsSelect.e("input"),
                                            e.nsSelect.is(e.selectSize)
                                        ]),
                                        disabled: e.selectDisabled,
                                        autocomplete: e.autocomplete,
                                        style: Le(e.inputStyle),
                                        tabindex: e.tabindex,
                                        role: "combobox",
                                        readonly: !e.filterable,
                                        spellcheck: "false",
                                        "aria-activedescendant": ((u = e.hoverOption) == null ? void 0 : u.id) || "",
                                        "aria-controls": e.contentId,
                                        "aria-expanded": e.dropdownMenuVisible,
                                        "aria-label": e.ariaLabel,
                                        "aria-autocomplete": "none",
                                        "aria-haspopup": "listbox",
                                        onKeydown: [
                                            ft(be((d)=>e.navigateOptions("next"), [
                                                "stop",
                                                "prevent"
                                            ]), [
                                                "down"
                                            ]),
                                            ft(be((d)=>e.navigateOptions("prev"), [
                                                "stop",
                                                "prevent"
                                            ]), [
                                                "up"
                                            ]),
                                            ft(be(e.handleEsc, [
                                                "stop",
                                                "prevent"
                                            ]), [
                                                "esc"
                                            ]),
                                            ft(be(e.selectOption, [
                                                "stop",
                                                "prevent"
                                            ]), [
                                                "enter"
                                            ]),
                                            ft(be(e.deletePrevTag, [
                                                "stop"
                                            ]), [
                                                "delete"
                                            ])
                                        ],
                                        onCompositionstart: e.handleCompositionStart,
                                        onCompositionupdate: e.handleCompositionUpdate,
                                        onCompositionend: e.handleCompositionEnd,
                                        onInput: e.onInput,
                                        onClick: be(e.toggleMenu, [
                                            "stop"
                                        ])
                                    }, null, 46, [
                                        "id",
                                        "onUpdate:modelValue",
                                        "name",
                                        "disabled",
                                        "autocomplete",
                                        "tabindex",
                                        "readonly",
                                        "aria-activedescendant",
                                        "aria-controls",
                                        "aria-expanded",
                                        "aria-label",
                                        "onKeydown",
                                        "onCompositionstart",
                                        "onCompositionupdate",
                                        "onCompositionend",
                                        "onInput",
                                        "onClick"
                                    ]), [
                                        [
                                            tr,
                                            e.states.inputValue
                                        ]
                                    ]),
                                    e.filterable ? (M(), D("span", {
                                        key: 0,
                                        ref: "calculatorRef",
                                        "aria-hidden": "true",
                                        class: P(e.nsSelect.e("input-calculator")),
                                        textContent: ae(e.states.inputValue)
                                    }, null, 10, [
                                        "textContent"
                                    ])) : K("v-if", !0)
                                ], 2),
                                e.shouldShowPlaceholder ? (M(), D("div", {
                                    key: 1,
                                    class: P([
                                        e.nsSelect.e("selected-item"),
                                        e.nsSelect.e("placeholder"),
                                        e.nsSelect.is("transparent", !e.hasModelValue || e.expanded && !e.states.inputValue)
                                    ])
                                }, [
                                    e.hasModelValue ? j(e.$slots, "label", {
                                        key: 0,
                                        label: e.currentPlaceholder,
                                        value: e.modelValue
                                    }, ()=>[
                                            W("span", null, ae(e.currentPlaceholder), 1)
                                        ]) : (M(), D("span", {
                                        key: 1
                                    }, ae(e.currentPlaceholder), 1))
                                ], 2)) : K("v-if", !0)
                            ], 2),
                            W("div", {
                                ref: "suffixRef",
                                class: P(e.nsSelect.e("suffix"))
                            }, [
                                e.iconComponent && !e.showClose ? (M(), ne(i, {
                                    key: 0,
                                    class: P([
                                        e.nsSelect.e("caret"),
                                        e.nsSelect.e("icon"),
                                        e.iconReverse
                                    ])
                                }, {
                                    default: I(()=>[
                                            (M(), ne(rt(e.iconComponent)))
                                        ]),
                                    _: 1
                                }, 8, [
                                    "class"
                                ])) : K("v-if", !0),
                                e.showClose && e.clearIcon ? (M(), ne(i, {
                                    key: 1,
                                    class: P([
                                        e.nsSelect.e("caret"),
                                        e.nsSelect.e("icon"),
                                        e.nsSelect.e("clear")
                                    ]),
                                    onClick: e.handleClearClick
                                }, {
                                    default: I(()=>[
                                            (M(), ne(rt(e.clearIcon)))
                                        ]),
                                    _: 1
                                }, 8, [
                                    "class",
                                    "onClick"
                                ])) : K("v-if", !0),
                                e.validateState && e.validateIcon && e.needStatusIcon ? (M(), ne(i, {
                                    key: 2,
                                    class: P([
                                        e.nsInput.e("icon"),
                                        e.nsInput.e("validateIcon"),
                                        e.nsInput.is("loading", e.validateState === "validating")
                                    ])
                                }, {
                                    default: I(()=>[
                                            (M(), ne(rt(e.validateIcon)))
                                        ]),
                                    _: 1
                                }, 8, [
                                    "class"
                                ])) : K("v-if", !0)
                            ], 2)
                        ], 10, [
                            "onClick"
                        ])
                    ];
                }),
                content: I(()=>[
                        _(s, {
                            ref: "menuRef"
                        }, {
                            default: I(()=>[
                                    e.$slots.header ? (M(), D("div", {
                                        key: 0,
                                        class: P(e.nsSelect.be("dropdown", "header")),
                                        onClick: be(()=>{}, [
                                            "stop"
                                        ])
                                    }, [
                                        j(e.$slots, "header")
                                    ], 10, [
                                        "onClick"
                                    ])) : K("v-if", !0),
                                    Be(_(a, {
                                        id: e.contentId,
                                        ref: "scrollbarRef",
                                        tag: "ul",
                                        "wrap-class": e.nsSelect.be("dropdown", "wrap"),
                                        "view-class": e.nsSelect.be("dropdown", "list"),
                                        class: P([
                                            e.nsSelect.is("empty", e.filteredOptionsCount === 0)
                                        ]),
                                        role: "listbox",
                                        "aria-label": e.ariaLabel,
                                        "aria-orientation": "vertical",
                                        onScroll: e.popupScroll
                                    }, {
                                        default: I(()=>[
                                                e.showNewOption ? (M(), ne(c, {
                                                    key: 0,
                                                    value: e.states.inputValue,
                                                    created: !0
                                                }, null, 8, [
                                                    "value"
                                                ])) : K("v-if", !0),
                                                _(o, null, {
                                                    default: I(()=>[
                                                            j(e.$slots, "default")
                                                        ]),
                                                    _: 3
                                                })
                                            ]),
                                        _: 3
                                    }, 8, [
                                        "id",
                                        "wrap-class",
                                        "view-class",
                                        "class",
                                        "aria-label",
                                        "onScroll"
                                    ]), [
                                        [
                                            yt,
                                            e.states.options.size > 0 && !e.loading
                                        ]
                                    ]),
                                    e.$slots.loading && e.loading ? (M(), D("div", {
                                        key: 1,
                                        class: P(e.nsSelect.be("dropdown", "loading"))
                                    }, [
                                        j(e.$slots, "loading")
                                    ], 2)) : e.loading || e.filteredOptionsCount === 0 ? (M(), D("div", {
                                        key: 2,
                                        class: P(e.nsSelect.be("dropdown", "empty"))
                                    }, [
                                        j(e.$slots, "empty", {}, ()=>[
                                                W("span", null, ae(e.emptyText), 1)
                                            ])
                                    ], 2)) : K("v-if", !0),
                                    e.$slots.footer ? (M(), D("div", {
                                        key: 3,
                                        class: P(e.nsSelect.be("dropdown", "footer")),
                                        onClick: be(()=>{}, [
                                            "stop"
                                        ])
                                    }, [
                                        j(e.$slots, "footer")
                                    ], 10, [
                                        "onClick"
                                    ])) : K("v-if", !0)
                                ]),
                            _: 3
                        }, 512)
                    ]),
                _: 3
            }, 8, [
                "visible",
                "placement",
                "teleported",
                "popper-class",
                "popper-options",
                "fallback-placements",
                "effect",
                "transition",
                "persistent",
                "append-to",
                "show-arrow",
                "offset",
                "onBeforeShow",
                "onHide"
            ])
        ], 16, [
            "onMouseleave"
        ])), [
            [
                r,
                e.handleClickOutside,
                e.popperRef
            ]
        ]);
    }
    var yu = Se(mu, [
        [
            "render",
            bu
        ],
        [
            "__file",
            "select.vue"
        ]
    ]);
    const Cu = q({
        name: "ElOptionGroup",
        componentName: "ElOptionGroup",
        props: {
            label: String,
            disabled: Boolean
        },
        setup (e) {
            const t = ie("select"), n = N(), l = Te(), i = N([]);
            Dt(aa, Ft({
                ...en(e)
            }));
            const c = L(()=>i.value.some((r)=>r.visible === !0)), o = (r)=>{
                var u;
                return r.type.name === "ElOption" && !!((u = r.component) != null && u.proxy);
            }, a = (r)=>{
                const u = dt(r), d = [];
                return u.forEach((f)=>{
                    var v;
                    Dn(f) && (o(f) ? d.push(f.component.proxy) : oe(f.children) && f.children.length ? d.push(...a(f.children)) : (v = f.component) != null && v.subTree && d.push(...a(f.component.subTree)));
                }), d;
            }, s = ()=>{
                i.value = a(l.subTree);
            };
            return qe(()=>{
                s();
            }), Ls(n, s, {
                attributes: !0,
                subtree: !0,
                childList: !0
            }), {
                groupRef: n,
                visible: c,
                ns: t
            };
        }
    });
    function wu(e, t, n, l, i, c) {
        return Be((M(), D("ul", {
            ref: "groupRef",
            class: P(e.ns.be("group", "wrap"))
        }, [
            W("li", {
                class: P(e.ns.be("group", "title"))
            }, ae(e.label), 3),
            W("li", null, [
                W("ul", {
                    class: P(e.ns.b("group"))
                }, [
                    j(e.$slots, "default")
                ], 2)
            ])
        ], 2)), [
            [
                yt,
                e.visible
            ]
        ]);
    }
    var sa = Se(Cu, [
        [
            "render",
            wu
        ],
        [
            "__file",
            "option-group.vue"
        ]
    ]);
    const Su = it(yu, {
        Option: Nl,
        OptionGroup: sa
    }), Eu = Jt(Nl);
    Jt(sa);
    const Ru = [
        "start",
        "center",
        "end",
        "space-around",
        "space-between",
        "space-evenly"
    ], Tu = [
        "top",
        "middle",
        "bottom"
    ], Ou = ze({
        tag: {
            type: String,
            default: "div"
        },
        gutter: {
            type: Number,
            default: 0
        },
        justify: {
            type: String,
            values: Ru,
            default: "start"
        },
        align: {
            type: String,
            values: Tu
        }
    }), ku = q({
        name: "ElRow"
    }), Nu = q({
        ...ku,
        props: Ou,
        setup (e) {
            const t = e, n = ie("row"), l = L(()=>t.gutter);
            Dt(oa, {
                gutter: l
            });
            const i = L(()=>{
                const o = {};
                return t.gutter && (o.marginRight = o.marginLeft = `-${t.gutter / 2}px`), o;
            }), c = L(()=>[
                    n.b(),
                    n.is(`justify-${t.justify}`, t.justify !== "start"),
                    n.is(`align-${t.align}`, !!t.align)
                ]);
            return (o, a)=>(M(), ne(rt(o.tag), {
                    class: P(w(c)),
                    style: Le(w(i))
                }, {
                    default: I(()=>[
                            j(o.$slots, "default")
                        ]),
                    _: 3
                }, 8, [
                    "class",
                    "style"
                ]));
        }
    });
    var Lu = Se(Nu, [
        [
            "__file",
            "row.vue"
        ]
    ]);
    const Mu = it(Lu), Xn = function(e) {
        var t;
        return (t = e.target) == null ? void 0 : t.closest("td");
    }, Pu = function(e, t, n, l, i) {
        if (!t && !l && (!i || oe(i) && !i.length)) return e;
        Me(n) ? n = n === "descending" ? -1 : 1 : n = n && n < 0 ? -1 : 1;
        const c = l ? null : function(a, s) {
            return i ? (oe(i) || (i = [
                i
            ]), i.map((r)=>Me(r) ? st(a, r) : r(a, s, e))) : (t !== "$key" && je(a) && "$value" in a && (a = a.$value), [
                je(a) ? st(a, t) : a
            ]);
        }, o = function(a, s) {
            if (l) return l(a.value, s.value);
            for(let r = 0, u = a.key.length; r < u; r++){
                if (a.key[r] < s.key[r]) return -1;
                if (a.key[r] > s.key[r]) return 1;
            }
            return 0;
        };
        return e.map((a, s)=>({
                value: a,
                index: s,
                key: c ? c(a, s) : null
            })).sort((a, s)=>{
            let r = o(a, s);
            return r || (r = a.index - s.index), r * +n;
        }).map((a)=>a.value);
    }, ra = function(e, t) {
        let n = null;
        return e.columns.forEach((l)=>{
            l.id === t && (n = l);
        }), n;
    }, Au = function(e, t) {
        let n = null;
        for(let l = 0; l < e.columns.length; l++){
            const i = e.columns[l];
            if (i.columnKey === t) {
                n = i;
                break;
            }
        }
        return n || Zt("ElTable", `No column matching with column-key: ${t}`), n;
    }, ro = function(e, t, n) {
        const l = (t.className || "").match(new RegExp(`${n}-table_[^\\s]+`, "gm"));
        return l ? ra(e, l[0]) : null;
    }, $e = (e, t)=>{
        if (!e) throw new Error("Row is required when get row identity");
        if (Me(t)) {
            if (!t.includes(".")) return `${e[t]}`;
            const n = t.split(".");
            let l = e;
            for (const i of n)l = l[i];
            return `${l}`;
        } else if (ye(t)) return t.call(null, e);
    }, Mt = function(e, t, n = !1, l = "children") {
        const i = e || [], c = {};
        return i.forEach((o, a)=>{
            if (c[$e(o, t)] = {
                row: o,
                index: a
            }, n) {
                const s = o[l];
                oe(s) && Object.assign(c, Mt(s, t, !0, l));
            }
        }), c;
    };
    function Fu(e, t) {
        const n = {};
        let l;
        for(l in e)n[l] = e[l];
        for(l in t)if (Yt(t, l)) {
            const i = t[l];
            Oe(i) || (n[l] = i);
        }
        return n;
    }
    function Ll(e) {
        return e === "" || Oe(e) || (e = Number.parseInt(e, 10), Number.isNaN(e) && (e = "")), e;
    }
    function ia(e) {
        return e === "" || Oe(e) || (e = Ll(e), Number.isNaN(e) && (e = 80)), e;
    }
    function $u(e) {
        return Ie(e) ? e : Me(e) ? /^\d+(?:px)?$/.test(e) ? Number.parseInt(e, 10) : e : null;
    }
    function Iu(...e) {
        return e.length === 0 ? (t)=>t : e.length === 1 ? e[0] : e.reduce((t, n)=>(...l)=>t(n(...l)));
    }
    function Nn(e, t, n, l, i, c) {
        let o = c ?? 0, a = !1;
        const s = e.indexOf(t), r = s !== -1, u = i?.call(null, t, o), d = (v)=>{
            v === "add" ? e.push(t) : e.splice(s, 1), a = !0;
        }, f = (v)=>{
            let p = 0;
            const g = l?.children && v[l.children];
            return g && oe(g) && (p += g.length, g.forEach((m)=>{
                p += f(m);
            })), p;
        };
        return (!i || u) && (Ge(n) ? n && !r ? d("add") : !n && r && d("remove") : d(r ? "remove" : "add")), !l?.checkStrictly && l?.children && oe(t[l.children]) && t[l.children].forEach((v)=>{
            const p = Nn(e, v, n ?? !r, l, i, o + 1);
            o += f(v) + 1, p && (a = p);
        }), a;
    }
    function _u(e, t, n = "children", l = "hasChildren") {
        const i = (o)=>!(oe(o) && o.length);
        function c(o, a, s) {
            t(o, a, s), a.forEach((r)=>{
                if (r[l]) {
                    t(r, null, s + 1);
                    return;
                }
                const u = r[n];
                i(u) || c(r, u, s + 1);
            });
        }
        e.forEach((o)=>{
            if (o[l]) {
                t(o, null, 0);
                return;
            }
            const a = o[n];
            i(a) || c(o, a, 0);
        });
    }
    const Du = (e, t, n, l)=>{
        const i = {
            strategy: "fixed",
            ...e.popperOptions
        }, c = ye(l.tooltipFormatter) ? l.tooltipFormatter({
            row: n,
            column: l,
            cellValue: $o(n, l.property).value
        }) : void 0;
        return Dn(c) ? {
            slotContent: c,
            content: null,
            ...e,
            popperOptions: i
        } : {
            slotContent: null,
            content: c ?? t,
            ...e,
            popperOptions: i
        };
    };
    let We = null;
    function Bu(e, t, n, l, i, c) {
        const o = Du(e, t, n, l), a = {
            ...o,
            slotContent: void 0
        };
        if (We?.trigger === i) {
            const v = We.vm.component;
            Xo(v.props, a), o.slotContent && (v.slots.content = ()=>[
                    o.slotContent
                ]);
            return;
        }
        We?.();
        const s = c?.refs.tableWrapper, r = s?.dataset.prefix, u = _(_n, {
            virtualTriggering: !0,
            virtualRef: i,
            appendTo: s,
            placement: "top",
            transition: "none",
            offset: 0,
            hideAfter: 0,
            ...a
        }, o.slotContent ? {
            content: ()=>o.slotContent
        } : void 0);
        u.appContext = {
            ...c.appContext,
            ...c
        };
        const d = document.createElement("div");
        On(u, d), u.component.exposed.onOpen();
        const f = s?.querySelector(`.${r}-scrollbar__wrap`);
        We = ()=>{
            On(null, d), f?.removeEventListener("scroll", We), We = null;
        }, We.trigger = i, We.vm = u, f?.addEventListener("scroll", We);
    }
    function ua(e) {
        return e.children ? Ni(e.children, ua) : [
            e
        ];
    }
    function io(e, t) {
        return e + t.colSpan;
    }
    const ca = (e, t, n, l)=>{
        let i = 0, c = e;
        const o = n.states.columns.value;
        if (l) {
            const s = ua(l[e]);
            i = o.slice(0, o.indexOf(s[0])).reduce(io, 0), c = i + s.reduce(io, 0) - 1;
        } else i = e;
        let a;
        switch(t){
            case "left":
                c < n.states.fixedLeafColumnsLength.value && (a = "left");
                break;
            case "right":
                i >= o.length - n.states.rightFixedLeafColumnsLength.value && (a = "right");
                break;
            default:
                c < n.states.fixedLeafColumnsLength.value ? a = "left" : i >= o.length - n.states.rightFixedLeafColumnsLength.value && (a = "right");
        }
        return a ? {
            direction: a,
            start: i,
            after: c
        } : {};
    }, Ml = (e, t, n, l, i, c = 0)=>{
        const o = [], { direction: a, start: s, after: r } = ca(t, n, l, i);
        if (a) {
            const u = a === "left";
            o.push(`${e}-fixed-column--${a}`), u && r + c === l.states.fixedLeafColumnsLength.value - 1 ? o.push("is-last-column") : !u && s - c === l.states.columns.value.length - l.states.rightFixedLeafColumnsLength.value && o.push("is-first-column");
        }
        return o;
    };
    function uo(e, t) {
        return e + (ln(t.realWidth) || Number.isNaN(t.realWidth) ? Number(t.width) : t.realWidth);
    }
    const Pl = (e, t, n, l)=>{
        const { direction: i, start: c = 0, after: o = 0 } = ca(e, t, n, l);
        if (!i) return;
        const a = {}, s = i === "left", r = n.states.columns.value;
        return s ? a.left = r.slice(0, c).reduce(uo, 0) : a.right = r.slice(o + 1).reverse().reduce(uo, 0), a;
    }, It = (e, t)=>{
        e && (Number.isNaN(e[t]) || (e[t] = `${e[t]}px`));
    };
    function xu(e) {
        const t = Te(), n = N(!1), l = N([]);
        return {
            updateExpandRows: ()=>{
                const s = e.data.value || [], r = e.rowKey.value;
                if (n.value) l.value = s.slice();
                else if (r) {
                    const u = Mt(l.value, r);
                    l.value = s.reduce((d, f)=>{
                        const v = $e(f, r);
                        return u[v] && d.push(f), d;
                    }, []);
                } else l.value = [];
            },
            toggleRowExpansion: (s, r)=>{
                Nn(l.value, s, r) && t.emit("expand-change", s, l.value.slice());
            },
            setExpandRowKeys: (s)=>{
                t.store.assertRowKey();
                const r = e.data.value || [], u = e.rowKey.value, d = Mt(r, u);
                l.value = s.reduce((f, v)=>{
                    const p = d[v];
                    return p && f.push(p.row), f;
                }, []);
            },
            isRowExpanded: (s)=>{
                const r = e.rowKey.value;
                return r ? !!Mt(l.value, r)[$e(s, r)] : l.value.includes(s);
            },
            states: {
                expandRows: l,
                defaultExpandAll: n
            }
        };
    }
    function Hu(e) {
        const t = Te(), n = N(null), l = N(null), i = (r)=>{
            t.store.assertRowKey(), n.value = r, o(r);
        }, c = ()=>{
            n.value = null;
        }, o = (r)=>{
            const { data: u, rowKey: d } = e;
            let f = null;
            d.value && (f = (w(u) || []).find((v)=>$e(v, d.value) === r)), l.value = f, t.emit("current-change", l.value, null);
        };
        return {
            setCurrentRowKey: i,
            restoreCurrentRowKey: c,
            setCurrentRowByKey: o,
            updateCurrentRow: (r)=>{
                const u = l.value;
                if (r && r !== u) {
                    l.value = r, t.emit("current-change", l.value, u);
                    return;
                }
                !r && u && (l.value = null, t.emit("current-change", null, u));
            },
            updateCurrentRowData: ()=>{
                const r = e.rowKey.value, u = e.data.value || [], d = l.value;
                if (!u.includes(d) && d) {
                    if (r) {
                        const f = $e(d, r);
                        o(f);
                    } else l.value = null;
                    ln(l.value) && t.emit("current-change", null, d);
                } else n.value && (o(n.value), c());
            },
            states: {
                _currentRowKey: n,
                currentRow: l
            }
        };
    }
    function Wu(e) {
        const t = N([]), n = N({}), l = N(16), i = N(!1), c = N({}), o = N("hasChildren"), a = N("children"), s = N(!1), r = Te(), u = L(()=>{
            if (!e.rowKey.value) return {};
            const h = e.data.value || [];
            return f(h);
        }), d = L(()=>{
            const h = e.rowKey.value, y = Object.keys(c.value), S = {};
            return y.length && y.forEach((E)=>{
                if (c.value[E].length) {
                    const k = {
                        children: []
                    };
                    c.value[E].forEach((T)=>{
                        const $ = $e(T, h);
                        k.children.push($), T[o.value] && !S[$] && (S[$] = {
                            children: []
                        });
                    }), S[E] = k;
                }
            }), S;
        }), f = (h)=>{
            const y = e.rowKey.value, S = {};
            return _u(h, (E, k, T)=>{
                const $ = $e(E, y);
                oe(k) ? S[$] = {
                    children: k.map((z)=>$e(z, y)),
                    level: T
                } : i.value && (S[$] = {
                    children: [],
                    lazy: !0,
                    level: T
                });
            }, a.value, o.value), S;
        }, v = (h = !1, y = ((S)=>(S = r.store) == null ? void 0 : S.states.defaultExpandAll.value)())=>{
            var S;
            const E = u.value, k = d.value, T = Object.keys(E), $ = {};
            if (T.length) {
                const z = w(n), x = [], Y = (V, le)=>{
                    if (h) return t.value ? y || t.value.includes(le) : !!(y || V?.expanded);
                    {
                        const ce = y || t.value && t.value.includes(le);
                        return !!(V?.expanded || ce);
                    }
                };
                T.forEach((V)=>{
                    const le = z[V], ce = {
                        ...E[V]
                    };
                    if (ce.expanded = Y(le, V), ce.lazy) {
                        const { loaded: B = !1, loading: A = !1 } = le || {};
                        ce.loaded = !!B, ce.loading = !!A, x.push(V);
                    }
                    $[V] = ce;
                });
                const te = Object.keys(k);
                i.value && te.length && x.length && te.forEach((V)=>{
                    const le = z[V], ce = k[V].children;
                    if (x.includes(V)) {
                        if ($[V].children.length !== 0) throw new Error("[ElTable]children must be an empty array.");
                        $[V].children = ce;
                    } else {
                        const { loaded: B = !1, loading: A = !1 } = le || {};
                        $[V] = {
                            lazy: !0,
                            loaded: !!B,
                            loading: !!A,
                            expanded: Y(le, V),
                            children: ce,
                            level: ""
                        };
                    }
                });
            }
            n.value = $, (S = r.store) == null || S.updateTableScrollY();
        };
        fe(()=>t.value, ()=>{
            v(!0);
        }), fe(()=>u.value, ()=>{
            v();
        }), fe(()=>d.value, ()=>{
            v();
        });
        const p = (h)=>{
            t.value = h, v();
        }, g = (h)=>i.value && h && "loaded" in h && !h.loaded, m = (h, y)=>{
            r.store.assertRowKey();
            const S = e.rowKey.value, E = $e(h, S), k = E && n.value[E];
            if (E && k && "expanded" in k) {
                const T = k.expanded;
                y = Oe(y) ? !k.expanded : y, n.value[E].expanded = y, T !== y && r.emit("expand-change", h, y), g(k) && R(h, E, k), r.store.updateTableScrollY();
            }
        }, b = (h)=>{
            r.store.assertRowKey();
            const y = e.rowKey.value, S = $e(h, y), E = n.value[S];
            g(E) ? R(h, S, E) : m(h, void 0);
        }, R = (h, y, S)=>{
            const { load: E } = r.props;
            E && !n.value[y].loaded && (n.value[y].loading = !0, E(h, S, (k)=>{
                if (!oe(k)) throw new TypeError("[ElTable] data must be an array");
                n.value[y].loading = !1, n.value[y].loaded = !0, n.value[y].expanded = !0, k.length && (c.value[y] = k), r.emit("expand-change", h, !0);
            }));
        };
        return {
            loadData: R,
            loadOrToggle: b,
            toggleTreeExpansion: m,
            updateTreeExpandKeys: p,
            updateTreeData: v,
            updateKeyChildren: (h, y)=>{
                const { lazy: S, rowKey: E } = r.props;
                if (S) {
                    if (!E) throw new Error("[Table] rowKey is required in updateKeyChild");
                    c.value[h] && (c.value[h] = y);
                }
            },
            normalize: f,
            states: {
                expandRowKeys: t,
                treeData: n,
                indent: l,
                lazy: i,
                lazyTreeNodeMap: c,
                lazyColumnIdentifier: o,
                childrenColumnName: a,
                checkStrictly: s
            }
        };
    }
    const Vu = (e, t)=>{
        const n = t.sortingColumn;
        return !n || Me(n.sortable) ? e : Pu(e, t.sortProp, t.sortOrder, n.sortMethod, n.sortBy);
    }, mn = (e)=>{
        const t = [];
        return e.forEach((n)=>{
            n.children && n.children.length > 0 ? t.push.apply(t, mn(n.children)) : t.push(n);
        }), t;
    };
    function zu() {
        var e;
        const t = Te(), { size: n } = en((e = t.proxy) == null ? void 0 : e.$props), l = N(null), i = N([]), c = N([]), o = N(!1), a = N([]), s = N([]), r = N([]), u = N([]), d = N([]), f = N([]), v = N([]), p = N([]), g = [], m = N(0), b = N(0), R = N(0), C = N(!1), h = N([]), y = N(!1), S = N(!1), E = N(null), k = N({}), T = N(null), $ = N(null), z = N(null), x = N(null), Y = N(null), te = L(()=>l.value ? Mt(h.value, l.value) : void 0);
        fe(i, ()=>{
            var H;
            t.state && (B(!1), t.props.tableLayout === "auto" && ((H = t.refs.tableHeaderRef) == null || H.updateFixedColumnStyle()));
        }, {
            deep: !0
        });
        const V = ()=>{
            if (!l.value) throw new Error("[ElTable] prop row-key is required");
        }, le = (H)=>{
            var Q;
            (Q = H.children) == null || Q.forEach((X)=>{
                X.fixed = H.fixed, le(X);
            });
        }, ce = ()=>{
            var H, Q;
            a.value.forEach((pe)=>{
                le(pe);
            }), u.value = a.value.filter((pe)=>pe.type !== "selection" && [
                    !0,
                    "left"
                ].includes(pe.fixed));
            let X;
            if (((Q = (H = a.value) == null ? void 0 : H[0]) == null ? void 0 : Q.type) === "selection") {
                const pe = a.value[0];
                X = [
                    !0,
                    "left"
                ].includes(pe.fixed) || u.value.length && pe.fixed !== "right", X && u.value.unshift(pe);
            }
            d.value = a.value.filter((pe)=>pe.fixed === "right");
            const Z = a.value.filter((pe)=>(X ? pe.type !== "selection" : !0) && !pe.fixed);
            s.value = [].concat(u.value).concat(Z).concat(d.value);
            const se = mn(Z), re = mn(u.value), Ae = mn(d.value);
            m.value = se.length, b.value = re.length, R.value = Ae.length, r.value = [].concat(re).concat(se).concat(Ae), o.value = u.value.length > 0 || d.value.length > 0;
        }, B = (H, Q = !1)=>{
            H && ce(), Q ? t.state.doLayout() : t.state.debouncedUpdateLayout();
        }, A = (H)=>te.value ? !!te.value[$e(H, l.value)] : h.value.includes(H), U = ()=>{
            C.value = !1;
            const H = h.value;
            h.value = [], H.length && t.emit("selection-change", []);
        }, de = ()=>{
            var H, Q;
            let X;
            if (l.value) {
                X = [];
                const Z = (Q = (H = t?.store) == null ? void 0 : H.states) == null ? void 0 : Q.childrenColumnName.value, se = Mt(i.value, l.value, !0, Z);
                for(const re in te.value)Yt(te.value, re) && !se[re] && X.push(te.value[re].row);
            } else X = h.value.filter((Z)=>!i.value.includes(Z));
            if (X.length) {
                const Z = h.value.filter((se)=>!X.includes(se));
                h.value = Z, t.emit("selection-change", Z.slice());
            }
        }, ve = ()=>(h.value || []).slice(), ge = (H, Q, X = !0, Z = !1)=>{
            var se, re, Ae, pe;
            const Ye = {
                children: (re = (se = t?.store) == null ? void 0 : se.states) == null ? void 0 : re.childrenColumnName.value,
                checkStrictly: (pe = (Ae = t?.store) == null ? void 0 : Ae.states) == null ? void 0 : pe.checkStrictly.value
            };
            if (Nn(h.value, H, Q, Ye, Z ? void 0 : E.value, i.value.indexOf(H))) {
                const ot = (h.value || []).slice();
                X && t.emit("select", ot, H), t.emit("selection-change", ot);
            }
        }, ke = ()=>{
            var H, Q;
            const X = S.value ? !C.value : !(C.value || h.value.length);
            C.value = X;
            let Z = !1, se = 0;
            const re = (Q = (H = t?.store) == null ? void 0 : H.states) == null ? void 0 : Q.rowKey.value, { childrenColumnName: Ae } = t.store.states, pe = {
                children: Ae.value,
                checkStrictly: !1
            };
            i.value.forEach((Ye, Ot)=>{
                const ot = Ot + se;
                Nn(h.value, Ye, X, pe, E.value, ot) && (Z = !0), se += he($e(Ye, re));
            }), Z && t.emit("selection-change", h.value ? h.value.slice() : []), t.emit("select-all", (h.value || []).slice());
        }, Pe = ()=>{
            i.value.forEach((H)=>{
                const Q = $e(H, l.value), X = te.value[Q];
                X && (h.value[X.index] = H);
            });
        }, xe = ()=>{
            var H;
            if (((H = i.value) == null ? void 0 : H.length) === 0) {
                C.value = !1;
                return;
            }
            const { childrenColumnName: Q } = t.store.states;
            let X = 0, Z = 0;
            const se = (Ae)=>{
                var pe;
                for (const Ye of Ae){
                    const Ot = E.value && E.value.call(null, Ye, X);
                    if (A(Ye)) Z++;
                    else if (!E.value || Ot) return !1;
                    if (X++, (pe = Ye[Q.value]) != null && pe.length && !se(Ye[Q.value])) return !1;
                }
                return !0;
            }, re = se(i.value || []);
            C.value = Z === 0 ? !1 : re;
        }, he = (H)=>{
            var Q;
            if (!t || !t.store) return 0;
            const { treeData: X } = t.store.states;
            let Z = 0;
            const se = (Q = X.value[H]) == null ? void 0 : Q.children;
            return se && (Z += se.length, se.forEach((re)=>{
                Z += he(re);
            })), Z;
        }, ue = (H, Q)=>{
            oe(H) || (H = [
                H
            ]);
            const X = {};
            return H.forEach((Z)=>{
                k.value[Z.id] = Q, X[Z.columnKey || Z.id] = Q;
            }), X;
        }, _e = (H, Q, X)=>{
            $.value && $.value !== H && ($.value.order = null), $.value = H, z.value = Q, x.value = X;
        }, St = ()=>{
            let H = w(c);
            Object.keys(k.value).forEach((Q)=>{
                const X = k.value[Q];
                if (!X || X.length === 0) return;
                const Z = ra({
                    columns: r.value
                }, Q);
                Z && Z.filterMethod && (H = H.filter((se)=>X.some((re)=>Z.filterMethod.call(null, re, se, Z))));
            }), T.value = H;
        }, xt = ()=>{
            i.value = Vu(T.value, {
                sortingColumn: $.value,
                sortProp: z.value,
                sortOrder: x.value
            });
        }, on = (H = void 0)=>{
            H && H.filter || St(), xt();
        }, Wn = (H)=>{
            const { tableHeaderRef: Q } = t.refs;
            if (!Q) return;
            const X = Object.assign({}, Q.filterPanels), Z = Object.keys(X);
            if (Z.length) if (Me(H) && (H = [
                H
            ]), oe(H)) {
                const se = H.map((re)=>Au({
                        columns: r.value
                    }, re));
                Z.forEach((re)=>{
                    const Ae = se.find((pe)=>pe.id === re);
                    Ae && (Ae.filteredValue = []);
                }), t.store.commit("filterChange", {
                    column: se,
                    values: [],
                    silent: !0,
                    multi: !0
                });
            } else Z.forEach((se)=>{
                const re = r.value.find((Ae)=>Ae.id === se);
                re && (re.filteredValue = []);
            }), k.value = {}, t.store.commit("filterChange", {
                column: {},
                values: [],
                silent: !0
            });
        }, Vn = ()=>{
            $.value && (_e(null, null, null), t.store.commit("changeSortCondition", {
                silent: !0
            }));
        }, { setExpandRowKeys: zn, toggleRowExpansion: an, updateExpandRows: Un, states: Et, isRowExpanded: sn } = xu({
            data: i,
            rowKey: l
        }), { updateTreeExpandKeys: Rt, toggleTreeExpansion: rn, updateTreeData: Kn, updateKeyChildren: Gn, loadOrToggle: jn, states: Ht } = Wu({
            data: i,
            rowKey: l
        }), { updateCurrentRowData: un, updateCurrentRow: cn, setCurrentRowKey: dn, states: fn } = Hu({
            data: i,
            rowKey: l
        });
        return {
            assertRowKey: V,
            updateColumns: ce,
            scheduleLayout: B,
            isSelected: A,
            clearSelection: U,
            cleanSelection: de,
            getSelectionRows: ve,
            toggleRowSelection: ge,
            _toggleAllSelection: ke,
            toggleAllSelection: null,
            updateSelectionByRowKey: Pe,
            updateAllSelected: xe,
            updateFilters: ue,
            updateCurrentRow: cn,
            updateSort: _e,
            execFilter: St,
            execSort: xt,
            execQuery: on,
            clearFilter: Wn,
            clearSort: Vn,
            toggleRowExpansion: an,
            setExpandRowKeysAdapter: (H)=>{
                zn(H), Rt(H);
            },
            setCurrentRowKey: dn,
            toggleRowExpansionAdapter: (H, Q)=>{
                r.value.some(({ type: Z })=>Z === "expand") ? an(H, Q) : rn(H, Q);
            },
            isRowExpanded: sn,
            updateExpandRows: Un,
            updateCurrentRowData: un,
            loadOrToggle: jn,
            updateTreeData: Kn,
            updateKeyChildren: Gn,
            states: {
                tableSize: n,
                rowKey: l,
                data: i,
                _data: c,
                isComplex: o,
                _columns: a,
                originColumns: s,
                columns: r,
                fixedColumns: u,
                rightFixedColumns: d,
                leafColumns: f,
                fixedLeafColumns: v,
                rightFixedLeafColumns: p,
                updateOrderFns: g,
                leafColumnsLength: m,
                fixedLeafColumnsLength: b,
                rightFixedLeafColumnsLength: R,
                isAllSelected: C,
                selection: h,
                reserveSelection: y,
                selectOnIndeterminate: S,
                selectable: E,
                filters: k,
                filteredData: T,
                sortingColumn: $,
                sortProp: z,
                sortOrder: x,
                hoverRow: Y,
                ...Et,
                ...Ht,
                ...fn
            }
        };
    }
    function ul(e, t) {
        return e.map((n)=>{
            var l;
            return n.id === t.id ? t : ((l = n.children) != null && l.length && (n.children = ul(n.children, t)), n);
        });
    }
    function cl(e) {
        e.forEach((t)=>{
            var n, l;
            t.no = (n = t.getColumnIndex) == null ? void 0 : n.call(t), (l = t.children) != null && l.length && cl(t.children);
        }), e.sort((t, n)=>t.no - n.no);
    }
    function Uu() {
        const e = Te(), t = zu();
        return {
            ns: ie("table"),
            ...t,
            mutations: {
                setData (o, a) {
                    const s = w(o._data) !== a;
                    o.data.value = a, o._data.value = a, e.store.execQuery(), e.store.updateCurrentRowData(), e.store.updateExpandRows(), e.store.updateTreeData(e.store.states.defaultExpandAll.value), w(o.reserveSelection) ? (e.store.assertRowKey(), e.store.updateSelectionByRowKey()) : s ? e.store.clearSelection() : e.store.cleanSelection(), e.store.updateAllSelected(), e.$ready && e.store.scheduleLayout();
                },
                insertColumn (o, a, s, r) {
                    const u = w(o._columns);
                    let d = [];
                    s ? (s && !s.children && (s.children = []), s.children.push(a), d = ul(u, s)) : (u.push(a), d = u), cl(d), o._columns.value = d, o.updateOrderFns.push(r), a.type === "selection" && (o.selectable.value = a.selectable, o.reserveSelection.value = a.reserveSelection), e.$ready && (e.store.updateColumns(), e.store.scheduleLayout());
                },
                updateColumnOrder (o, a) {
                    var s;
                    ((s = a.getColumnIndex) == null ? void 0 : s.call(a)) !== a.no && (cl(o._columns.value), e.$ready && e.store.updateColumns());
                },
                removeColumn (o, a, s, r) {
                    const u = w(o._columns) || [];
                    if (s) s.children.splice(s.children.findIndex((f)=>f.id === a.id), 1), Ne(()=>{
                        var f;
                        ((f = s.children) == null ? void 0 : f.length) === 0 && delete s.children;
                    }), o._columns.value = ul(u, s);
                    else {
                        const f = u.indexOf(a);
                        f > -1 && (u.splice(f, 1), o._columns.value = u);
                    }
                    const d = o.updateOrderFns.indexOf(r);
                    d > -1 && o.updateOrderFns.splice(d, 1), e.$ready && (e.store.updateColumns(), e.store.scheduleLayout());
                },
                sort (o, a) {
                    const { prop: s, order: r, init: u } = a;
                    if (s) {
                        const d = w(o.columns).find((f)=>f.property === s);
                        d && (d.order = r, e.store.updateSort(d, s, r), e.store.commit("changeSortCondition", {
                            init: u
                        }));
                    }
                },
                changeSortCondition (o, a) {
                    const { sortingColumn: s, sortProp: r, sortOrder: u } = o, d = w(s), f = w(r), v = w(u);
                    ln(v) && (o.sortingColumn.value = null, o.sortProp.value = null);
                    const p = {
                        filter: !0
                    };
                    e.store.execQuery(p), (!a || !(a.silent || a.init)) && e.emit("sort-change", {
                        column: d,
                        prop: f,
                        order: v
                    }), e.store.updateTableScrollY();
                },
                filterChange (o, a) {
                    const { column: s, values: r, silent: u } = a, d = e.store.updateFilters(s, r);
                    e.store.execQuery(), u || e.emit("filter-change", d), e.store.updateTableScrollY();
                },
                toggleAllSelection () {
                    e.store.toggleAllSelection();
                },
                rowSelectedChanged (o, a) {
                    e.store.toggleRowSelection(a), e.store.updateAllSelected();
                },
                setHoverRow (o, a) {
                    o.hoverRow.value = a;
                },
                setCurrentRow (o, a) {
                    e.store.updateCurrentRow(a);
                }
            },
            commit: function(o, ...a) {
                const s = e.store.mutations;
                if (s[o]) s[o].apply(e, [
                    e.store.states
                ].concat(a));
                else throw new Error(`Action not found: ${o}`);
            },
            updateTableScrollY: function() {
                Ne(()=>e.layout.updateScrollY.apply(e.layout));
            }
        };
    }
    const Ut = {
        rowKey: "rowKey",
        defaultExpandAll: "defaultExpandAll",
        selectOnIndeterminate: "selectOnIndeterminate",
        indent: "indent",
        lazy: "lazy",
        data: "data",
        "treeProps.hasChildren": {
            key: "lazyColumnIdentifier",
            default: "hasChildren"
        },
        "treeProps.children": {
            key: "childrenColumnName",
            default: "children"
        },
        "treeProps.checkStrictly": {
            key: "checkStrictly",
            default: !1
        }
    };
    function Ku(e, t) {
        if (!e) throw new Error("Table is required.");
        const n = Uu();
        return n.toggleAllSelection = Qt(n._toggleAllSelection, 10), Object.keys(Ut).forEach((l)=>{
            da(fa(t, l), l, n);
        }), Gu(n, t), n;
    }
    function Gu(e, t) {
        Object.keys(Ut).forEach((n)=>{
            fe(()=>fa(t, n), (l)=>{
                da(l, n, e);
            });
        });
    }
    function da(e, t, n) {
        let l = e, i = Ut[t];
        je(Ut[t]) && (i = i.key, l = l || Ut[t].default), n.states[i].value = l;
    }
    function fa(e, t) {
        if (t.includes(".")) {
            const n = t.split(".");
            let l = e;
            return n.forEach((i)=>{
                l = l[i];
            }), l;
        } else return e[t];
    }
    class ju {
        constructor(t){
            this.observers = [], this.table = null, this.store = null, this.columns = [], this.fit = !0, this.showHeader = !0, this.height = N(null), this.scrollX = N(!1), this.scrollY = N(!1), this.bodyWidth = N(null), this.fixedWidth = N(null), this.rightFixedWidth = N(null), this.gutterWidth = 0;
            for(const n in t)Yt(t, n) && (At(this[n]) ? this[n].value = t[n] : this[n] = t[n]);
            if (!this.table) throw new Error("Table is required for Table Layout");
            if (!this.store) throw new Error("Store is required for Table Layout");
        }
        updateScrollY() {
            const t = this.height.value;
            if (ln(t)) return !1;
            const n = this.table.refs.scrollBarRef;
            if (this.table.vnode.el && n?.wrapRef) {
                let l = !0;
                const i = this.scrollY.value;
                return l = n.wrapRef.scrollHeight > n.wrapRef.clientHeight, this.scrollY.value = l, i !== l;
            }
            return !1;
        }
        setHeight(t, n = "height") {
            if (!Xe) return;
            const l = this.table.vnode.el;
            if (t = $u(t), this.height.value = Number(t), !l && (t || t === 0)) return Ne(()=>this.setHeight(t, n));
            Ie(t) ? (l.style[n] = `${t}px`, this.updateElsHeight()) : Me(t) && (l.style[n] = t, this.updateElsHeight());
        }
        setMaxHeight(t) {
            this.setHeight(t, "max-height");
        }
        getFlattenColumns() {
            const t = [];
            return this.table.store.states.columns.value.forEach((l)=>{
                l.isColumnGroup ? t.push.apply(t, l.columns) : t.push(l);
            }), t;
        }
        updateElsHeight() {
            this.updateScrollY(), this.notifyObservers("scrollable");
        }
        headerDisplayNone(t) {
            if (!t) return !0;
            let n = t;
            for(; n.tagName !== "DIV";){
                if (getComputedStyle(n).display === "none") return !0;
                n = n.parentElement;
            }
            return !1;
        }
        updateColumnsWidth() {
            if (!Xe) return;
            const t = this.fit, n = this.table.vnode.el.clientWidth;
            let l = 0;
            const i = this.getFlattenColumns(), c = i.filter((s)=>!Ie(s.width));
            if (i.forEach((s)=>{
                Ie(s.width) && s.realWidth && (s.realWidth = null);
            }), c.length > 0 && t) {
                if (i.forEach((s)=>{
                    l += Number(s.width || s.minWidth || 80);
                }), l <= n) {
                    this.scrollX.value = !1;
                    const s = n - l;
                    if (c.length === 1) c[0].realWidth = Number(c[0].minWidth || 80) + s;
                    else {
                        const r = c.reduce((f, v)=>f + Number(v.minWidth || 80), 0), u = s / r;
                        let d = 0;
                        c.forEach((f, v)=>{
                            if (v === 0) return;
                            const p = Math.floor(Number(f.minWidth || 80) * u);
                            d += p, f.realWidth = Number(f.minWidth || 80) + p;
                        }), c[0].realWidth = Number(c[0].minWidth || 80) + s - d;
                    }
                } else this.scrollX.value = !0, c.forEach((s)=>{
                    s.realWidth = Number(s.minWidth);
                });
                this.bodyWidth.value = Math.max(l, n), this.table.state.resizeState.value.width = this.bodyWidth.value;
            } else i.forEach((s)=>{
                !s.width && !s.minWidth ? s.realWidth = 80 : s.realWidth = Number(s.width || s.minWidth), l += s.realWidth;
            }), this.scrollX.value = l > n, this.bodyWidth.value = l;
            const o = this.store.states.fixedColumns.value;
            if (o.length > 0) {
                let s = 0;
                o.forEach((r)=>{
                    s += Number(r.realWidth || r.width);
                }), this.fixedWidth.value = s;
            }
            const a = this.store.states.rightFixedColumns.value;
            if (a.length > 0) {
                let s = 0;
                a.forEach((r)=>{
                    s += Number(r.realWidth || r.width);
                }), this.rightFixedWidth.value = s;
            }
            this.notifyObservers("columns");
        }
        addObserver(t) {
            this.observers.push(t);
        }
        removeObserver(t) {
            const n = this.observers.indexOf(t);
            n !== -1 && this.observers.splice(n, 1);
        }
        notifyObservers(t) {
            this.observers.forEach((l)=>{
                var i, c;
                switch(t){
                    case "columns":
                        (i = l.state) == null || i.onColumnsChange(this);
                        break;
                    case "scrollable":
                        (c = l.state) == null || c.onScrollableChange(this);
                        break;
                    default:
                        throw new Error(`Table Layout don't have event ${t}.`);
                }
            });
        }
    }
    const { CheckboxGroup: qu } = $t, Yu = q({
        name: "ElTableFilterPanel",
        components: {
            ElCheckbox: $t,
            ElCheckboxGroup: qu,
            ElScrollbar: Ol,
            ElTooltip: _n,
            ElIcon: Ve,
            ArrowDown: Po,
            ArrowUp: Ms
        },
        directives: {
            ClickOutside: la
        },
        props: {
            placement: {
                type: String,
                default: "bottom-start"
            },
            store: {
                type: Object
            },
            column: {
                type: Object
            },
            upDataColumn: {
                type: Function
            },
            appendTo: tl.appendTo
        },
        setup (e) {
            const t = Te(), { t: n } = In(), l = ie("table-filter"), i = t?.parent;
            i.filterPanels.value[e.column.id] || (i.filterPanels.value[e.column.id] = t);
            const c = N(!1), o = N(null), a = L(()=>e.column && e.column.filters), s = L(()=>e.column.filterClassName ? `${l.b()} ${e.column.filterClassName}` : l.b()), r = L({
                get: ()=>{
                    var y;
                    return (((y = e.column) == null ? void 0 : y.filteredValue) || [])[0];
                },
                set: (y)=>{
                    u.value && (ht(y) ? u.value.splice(0, 1) : u.value.splice(0, 1, y));
                }
            }), u = L({
                get () {
                    return e.column ? e.column.filteredValue || [] : [];
                },
                set (y) {
                    e.column && e.upDataColumn("filteredValue", y);
                }
            }), d = L(()=>e.column ? e.column.filterMultiple : !0), f = (y)=>y.value === r.value, v = ()=>{
                c.value = !1;
            }, p = (y)=>{
                y.stopPropagation(), c.value = !c.value;
            }, g = ()=>{
                c.value = !1;
            }, m = ()=>{
                C(u.value), v();
            }, b = ()=>{
                u.value = [], C(u.value), v();
            }, R = (y)=>{
                r.value = y, ht(y) ? C([]) : C(u.value), v();
            }, C = (y)=>{
                e.store.commit("filterChange", {
                    column: e.column,
                    values: y
                }), e.store.updateAllSelected();
            };
            fe(c, (y)=>{
                e.column && e.upDataColumn("filterOpened", y);
            }, {
                immediate: !0
            });
            const h = L(()=>{
                var y, S;
                return (S = (y = o.value) == null ? void 0 : y.popperRef) == null ? void 0 : S.contentRef;
            });
            return {
                tooltipVisible: c,
                multiple: d,
                filterClassName: s,
                filteredValue: u,
                filterValue: r,
                filters: a,
                handleConfirm: m,
                handleReset: b,
                handleSelect: R,
                isPropAbsent: ht,
                isActive: f,
                t: n,
                ns: l,
                showFilterPanel: p,
                hideFilterPanel: g,
                popperPaneRef: h,
                tooltip: o
            };
        }
    });
    function Qu(e, t, n, l, i, c) {
        const o = Re("el-checkbox"), a = Re("el-checkbox-group"), s = Re("el-scrollbar"), r = Re("arrow-up"), u = Re("arrow-down"), d = Re("el-icon"), f = Re("el-tooltip"), v = kl("click-outside");
        return M(), ne(f, {
            ref: "tooltip",
            visible: e.tooltipVisible,
            offset: 0,
            placement: e.placement,
            "show-arrow": !1,
            "stop-popper-mouse-event": !1,
            teleported: "",
            effect: "light",
            pure: "",
            "popper-class": e.filterClassName,
            persistent: "",
            "append-to": e.appendTo
        }, {
            content: I(()=>[
                    e.multiple ? (M(), D("div", {
                        key: 0
                    }, [
                        W("div", {
                            class: P(e.ns.e("content"))
                        }, [
                            _(s, {
                                "wrap-class": e.ns.e("wrap")
                            }, {
                                default: I(()=>[
                                        _(a, {
                                            modelValue: e.filteredValue,
                                            "onUpdate:modelValue": (p)=>e.filteredValue = p,
                                            class: P(e.ns.e("checkbox-group"))
                                        }, {
                                            default: I(()=>[
                                                    (M(!0), D(Ke, null, Ct(e.filters, (p)=>(M(), ne(o, {
                                                            key: p.value,
                                                            value: p.value
                                                        }, {
                                                            default: I(()=>[
                                                                    we(ae(p.text), 1)
                                                                ]),
                                                            _: 2
                                                        }, 1032, [
                                                            "value"
                                                        ]))), 128))
                                                ]),
                                            _: 1
                                        }, 8, [
                                            "modelValue",
                                            "onUpdate:modelValue",
                                            "class"
                                        ])
                                    ]),
                                _: 1
                            }, 8, [
                                "wrap-class"
                            ])
                        ], 2),
                        W("div", {
                            class: P(e.ns.e("bottom"))
                        }, [
                            W("button", {
                                class: P({
                                    [e.ns.is("disabled")]: e.filteredValue.length === 0
                                }),
                                disabled: e.filteredValue.length === 0,
                                type: "button",
                                onClick: e.handleConfirm
                            }, ae(e.t("el.table.confirmFilter")), 11, [
                                "disabled",
                                "onClick"
                            ]),
                            W("button", {
                                type: "button",
                                onClick: e.handleReset
                            }, ae(e.t("el.table.resetFilter")), 9, [
                                "onClick"
                            ])
                        ], 2)
                    ])) : (M(), D("ul", {
                        key: 1,
                        class: P(e.ns.e("list"))
                    }, [
                        W("li", {
                            class: P([
                                e.ns.e("list-item"),
                                {
                                    [e.ns.is("active")]: e.isPropAbsent(e.filterValue)
                                }
                            ]),
                            onClick: (p)=>e.handleSelect(null)
                        }, ae(e.t("el.table.clearFilter")), 11, [
                            "onClick"
                        ]),
                        (M(!0), D(Ke, null, Ct(e.filters, (p)=>(M(), D("li", {
                                key: p.value,
                                class: P([
                                    e.ns.e("list-item"),
                                    e.ns.is("active", e.isActive(p))
                                ]),
                                label: p.value,
                                onClick: (g)=>e.handleSelect(p.value)
                            }, ae(p.text), 11, [
                                "label",
                                "onClick"
                            ]))), 128))
                    ], 2))
                ]),
            default: I(()=>[
                    Be((M(), D("span", {
                        class: P([
                            `${e.ns.namespace.value}-table__column-filter-trigger`,
                            `${e.ns.namespace.value}-none-outline`
                        ]),
                        onClick: e.showFilterPanel
                    }, [
                        _(d, null, {
                            default: I(()=>[
                                    j(e.$slots, "filter-icon", {}, ()=>[
                                            e.column.filterOpened ? (M(), ne(r, {
                                                key: 0
                                            })) : (M(), ne(u, {
                                                key: 1
                                            }))
                                        ])
                                ]),
                            _: 3
                        })
                    ], 10, [
                        "onClick"
                    ])), [
                        [
                            v,
                            e.hideFilterPanel,
                            e.popperPaneRef
                        ]
                    ])
                ]),
            _: 3
        }, 8, [
            "visible",
            "placement",
            "popper-class",
            "append-to"
        ]);
    }
    var Xu = Se(Yu, [
        [
            "render",
            Qu
        ],
        [
            "__file",
            "filter-panel.vue"
        ]
    ]);
    function Al(e) {
        const t = Te();
        Vo(()=>{
            n.value.addObserver(t);
        }), qe(()=>{
            l(n.value), i(n.value);
        }), Bn(()=>{
            l(n.value), i(n.value);
        }), nn(()=>{
            n.value.removeObserver(t);
        });
        const n = L(()=>{
            const c = e.layout;
            if (!c) throw new Error("Can not find table layout.");
            return c;
        }), l = (c)=>{
            var o;
            const a = ((o = e.vnode.el) == null ? void 0 : o.querySelectorAll("colgroup > col")) || [];
            if (!a.length) return;
            const s = c.getFlattenColumns(), r = {};
            s.forEach((u)=>{
                r[u.id] = u;
            });
            for(let u = 0, d = a.length; u < d; u++){
                const f = a[u], v = f.getAttribute("name"), p = r[v];
                p && f.setAttribute("width", p.realWidth || p.width);
            }
        }, i = (c)=>{
            var o, a;
            const s = ((o = e.vnode.el) == null ? void 0 : o.querySelectorAll("colgroup > col[name=gutter]")) || [];
            for(let u = 0, d = s.length; u < d; u++)s[u].setAttribute("width", c.scrollY.value ? c.gutterWidth : "0");
            const r = ((a = e.vnode.el) == null ? void 0 : a.querySelectorAll("th.gutter")) || [];
            for(let u = 0, d = r.length; u < d; u++){
                const f = r[u];
                f.style.width = c.scrollY.value ? `${c.gutterWidth}px` : "0", f.style.display = c.scrollY.value ? "" : "none";
            }
        };
        return {
            tableLayout: n.value,
            onColumnsChange: l,
            onScrollableChange: i
        };
    }
    const Je = Symbol("ElTable");
    function Ju(e, t) {
        const n = Te(), l = Ce(Je), i = (g)=>{
            g.stopPropagation();
        }, c = (g, m)=>{
            !m.filters && m.sortable ? p(g, m, !1) : m.filterable && !m.sortable && i(g), l?.emit("header-click", m, g);
        }, o = (g, m)=>{
            l?.emit("header-contextmenu", m, g);
        }, a = N(null), s = N(!1), r = N({}), u = (g, m)=>{
            if (Xe && !(m.children && m.children.length > 0) && a.value && e.border) {
                s.value = !0;
                const b = l;
                t("set-drag-visible", !0);
                const C = (b?.vnode.el).getBoundingClientRect().left, h = n.vnode.el.querySelector(`th.${m.id}`), y = h.getBoundingClientRect(), S = y.left - C + 30;
                En(h, "noclick"), r.value = {
                    startMouseLeft: g.clientX,
                    startLeft: y.right - C,
                    startColumnLeft: y.left - C,
                    tableLeft: C
                };
                const E = b?.refs.resizeProxy;
                E.style.left = `${r.value.startLeft}px`, document.onselectstart = function() {
                    return !1;
                }, document.ondragstart = function() {
                    return !1;
                };
                const k = ($)=>{
                    const z = $.clientX - r.value.startMouseLeft, x = r.value.startLeft + z;
                    E.style.left = `${Math.max(S, x)}px`;
                }, T = ()=>{
                    if (s.value) {
                        const { startColumnLeft: $, startLeft: z } = r.value, Y = Number.parseInt(E.style.left, 10) - $;
                        m.width = m.realWidth = Y, b?.emit("header-dragend", m.width, z - $, m, g), requestAnimationFrame(()=>{
                            e.store.scheduleLayout(!1, !0);
                        }), document.body.style.cursor = "", s.value = !1, a.value = null, r.value = {}, t("set-drag-visible", !1);
                    }
                    document.removeEventListener("mousemove", k), document.removeEventListener("mouseup", T), document.onselectstart = null, document.ondragstart = null, setTimeout(()=>{
                        qt(h, "noclick");
                    }, 0);
                };
                document.addEventListener("mousemove", k), document.addEventListener("mouseup", T);
            }
        }, d = (g, m)=>{
            var b;
            if (m.children && m.children.length > 0) return;
            const R = g.target;
            if (!Tl(R)) return;
            const C = R?.closest("th");
            if (!(!m || !m.resizable || !C) && !s.value && e.border) {
                const h = C.getBoundingClientRect(), y = document.body.style, S = ((b = C.parentNode) == null ? void 0 : b.lastElementChild) === C, E = e.allowDragLastColumn || !S;
                h.width > 12 && h.right - g.clientX < 8 && E ? (y.cursor = "col-resize", Vt(C, "is-sortable") && (C.style.cursor = "col-resize"), a.value = m) : s.value || (y.cursor = "", Vt(C, "is-sortable") && (C.style.cursor = "pointer"), a.value = null);
            }
        }, f = ()=>{
            Xe && (document.body.style.cursor = "");
        }, v = ({ order: g, sortOrders: m })=>{
            if (g === "") return m[0];
            const b = m.indexOf(g || null);
            return m[b > m.length - 2 ? 0 : b + 1];
        }, p = (g, m, b)=>{
            var R;
            g.stopPropagation();
            const C = m.order === b ? null : b || v(m), h = (R = g.target) == null ? void 0 : R.closest("th");
            if (h && Vt(h, "noclick")) {
                qt(h, "noclick");
                return;
            }
            if (!m.sortable) return;
            const y = g.currentTarget;
            if ([
                "ascending",
                "descending"
            ].some(($)=>Vt(y, $) && !m.sortOrders.includes($))) return;
            const S = e.store.states;
            let E = S.sortProp.value, k;
            const T = S.sortingColumn.value;
            (T !== m || T === m && ln(T.order)) && (T && (T.order = null), S.sortingColumn.value = m, E = m.property), C ? k = m.order = C : k = m.order = null, S.sortProp.value = E, S.sortOrder.value = k, l?.store.commit("changeSortCondition");
        };
        return {
            handleHeaderClick: c,
            handleHeaderContextMenu: o,
            handleMouseDown: u,
            handleMouseMove: d,
            handleMouseOut: f,
            handleSortClick: p,
            handleFilterClick: i
        };
    }
    function Zu(e) {
        const t = Ce(Je), n = ie("table");
        return {
            getHeaderRowStyle: (a)=>{
                const s = t?.props.headerRowStyle;
                return ye(s) ? s.call(null, {
                    rowIndex: a
                }) : s;
            },
            getHeaderRowClass: (a)=>{
                const s = [], r = t?.props.headerRowClassName;
                return Me(r) ? s.push(r) : ye(r) && s.push(r.call(null, {
                    rowIndex: a
                })), s.join(" ");
            },
            getHeaderCellStyle: (a, s, r, u)=>{
                var d;
                let f = (d = t?.props.headerCellStyle) != null ? d : {};
                ye(f) && (f = f.call(null, {
                    rowIndex: a,
                    columnIndex: s,
                    row: r,
                    column: u
                }));
                const v = Pl(s, u.fixed, e.store, r);
                return It(v, "left"), It(v, "right"), Object.assign({}, f, v);
            },
            getHeaderCellClass: (a, s, r, u)=>{
                const d = Ml(n.b(), s, u.fixed, e.store, r), f = [
                    u.id,
                    u.order,
                    u.headerAlign,
                    u.className,
                    u.labelClassName,
                    ...d
                ];
                u.children || f.push("is-leaf"), u.sortable && f.push("is-sortable");
                const v = t?.props.headerCellClassName;
                return Me(v) ? f.push(v) : ye(v) && f.push(v.call(null, {
                    rowIndex: a,
                    columnIndex: s,
                    row: r,
                    column: u
                })), f.push(n.e("cell")), f.filter((p)=>!!p).join(" ");
            }
        };
    }
    const pa = (e)=>{
        const t = [];
        return e.forEach((n)=>{
            n.children ? (t.push(n), t.push.apply(t, pa(n.children))) : t.push(n);
        }), t;
    }, va = (e)=>{
        let t = 1;
        const n = (c, o)=>{
            if (o && (c.level = o.level + 1, t < c.level && (t = c.level)), c.children) {
                let a = 0;
                c.children.forEach((s)=>{
                    n(s, c), a += s.colSpan;
                }), c.colSpan = a;
            } else c.colSpan = 1;
        };
        e.forEach((c)=>{
            c.level = 1, n(c, void 0);
        });
        const l = [];
        for(let c = 0; c < t; c++)l.push([]);
        return pa(e).forEach((c)=>{
            c.children ? (c.rowSpan = 1, c.children.forEach((o)=>o.isSubColumn = !0)) : c.rowSpan = t - c.level + 1, l[c.level - 1].push(c);
        }), l;
    };
    function ec(e) {
        const t = Ce(Je), n = L(()=>va(e.store.states.originColumns.value));
        return {
            isGroup: L(()=>{
                const c = n.value.length > 1;
                return c && t && (t.state.isGroup.value = !0), c;
            }),
            toggleAllSelection: (c)=>{
                c.stopPropagation(), t?.store.commit("toggleAllSelection");
            },
            columnRows: n
        };
    }
    var tc = q({
        name: "ElTableHeader",
        components: {
            ElCheckbox: $t
        },
        props: {
            fixed: {
                type: String,
                default: ""
            },
            store: {
                required: !0,
                type: Object
            },
            border: Boolean,
            defaultSort: {
                type: Object,
                default: ()=>({
                        prop: "",
                        order: ""
                    })
            },
            appendFilterPanelTo: {
                type: String
            },
            allowDragLastColumn: {
                type: Boolean
            }
        },
        setup (e, { emit: t }) {
            const n = Te(), l = Ce(Je), i = ie("table"), c = N({}), { onColumnsChange: o, onScrollableChange: a } = Al(l), s = l?.props.tableLayout === "auto", r = Ft(new Map), u = N(), d = ()=>{
                setTimeout(()=>{
                    r.size > 0 && (r.forEach(($, z)=>{
                        const x = u.value.querySelector(`.${z.replace(/\s/g, ".")}`);
                        if (x) {
                            const Y = x.getBoundingClientRect().width;
                            $.width = Y;
                        }
                    }), r.clear());
                });
            };
            fe(r, d), qe(async ()=>{
                await Ne(), await Ne();
                const { prop: $, order: z } = e.defaultSort;
                l?.store.commit("sort", {
                    prop: $,
                    order: z,
                    init: !0
                }), d();
            });
            const { handleHeaderClick: f, handleHeaderContextMenu: v, handleMouseDown: p, handleMouseMove: g, handleMouseOut: m, handleSortClick: b, handleFilterClick: R } = Ju(e, t), { getHeaderRowStyle: C, getHeaderRowClass: h, getHeaderCellStyle: y, getHeaderCellClass: S } = Zu(e), { isGroup: E, toggleAllSelection: k, columnRows: T } = ec(e);
            return n.state = {
                onColumnsChange: o,
                onScrollableChange: a
            }, n.filterPanels = c, {
                ns: i,
                filterPanels: c,
                onColumnsChange: o,
                onScrollableChange: a,
                columnRows: T,
                getHeaderRowClass: h,
                getHeaderRowStyle: C,
                getHeaderCellClass: S,
                getHeaderCellStyle: y,
                handleHeaderClick: f,
                handleHeaderContextMenu: v,
                handleMouseDown: p,
                handleMouseMove: g,
                handleMouseOut: m,
                handleSortClick: b,
                handleFilterClick: R,
                isGroup: E,
                toggleAllSelection: k,
                saveIndexSelection: r,
                isTableLayoutAuto: s,
                theadRef: u,
                updateFixedColumnStyle: d
            };
        },
        render () {
            const { ns: e, isGroup: t, columnRows: n, getHeaderCellStyle: l, getHeaderCellClass: i, getHeaderRowClass: c, getHeaderRowStyle: o, handleHeaderClick: a, handleHeaderContextMenu: s, handleMouseDown: r, handleMouseMove: u, handleSortClick: d, handleMouseOut: f, store: v, $parent: p, saveIndexSelection: g, isTableLayoutAuto: m } = this;
            let b = 1;
            return G("thead", {
                ref: "theadRef",
                class: {
                    [e.is("group")]: t
                }
            }, n.map((R, C)=>G("tr", {
                    class: c(C),
                    key: C,
                    style: o(C)
                }, R.map((h, y)=>{
                    h.rowSpan > b && (b = h.rowSpan);
                    const S = i(C, y, R, h);
                    return m && h.fixed && g.set(S, h), G("th", {
                        class: S,
                        colspan: h.colSpan,
                        key: `${h.id}-thead`,
                        rowspan: h.rowSpan,
                        style: l(C, y, R, h),
                        onClick: (E)=>{
                            E.currentTarget.classList.contains("noclick") || a(E, h);
                        },
                        onContextmenu: (E)=>s(E, h),
                        onMousedown: (E)=>r(E, h),
                        onMousemove: (E)=>u(E, h),
                        onMouseout: f
                    }, [
                        G("div", {
                            class: [
                                "cell",
                                h.filteredValue && h.filteredValue.length > 0 ? "highlight" : ""
                            ]
                        }, [
                            h.renderHeader ? h.renderHeader({
                                column: h,
                                $index: y,
                                store: v,
                                _self: p
                            }) : h.label,
                            h.sortable && G("span", {
                                onClick: (E)=>d(E, h),
                                class: "caret-wrapper"
                            }, [
                                G("i", {
                                    onClick: (E)=>d(E, h, "ascending"),
                                    class: "sort-caret ascending"
                                }),
                                G("i", {
                                    onClick: (E)=>d(E, h, "descending"),
                                    class: "sort-caret descending"
                                })
                            ]),
                            h.filterable && G(Xu, {
                                store: v,
                                placement: h.filterPlacement || "bottom-start",
                                appendTo: p.appendFilterPanelTo,
                                column: h,
                                upDataColumn: (E, k)=>{
                                    h[E] = k;
                                }
                            }, {
                                "filter-icon": ()=>h.renderFilterIcon ? h.renderFilterIcon({
                                        filterOpened: h.filterOpened
                                    }) : null
                            })
                        ])
                    ]);
                }))));
        }
    });
    function Jn(e, t, n = .03) {
        return e - t > n;
    }
    function nc(e) {
        const t = Ce(Je), n = N(""), l = N(G("div")), i = (p, g, m)=>{
            var b;
            const R = t, C = Xn(p);
            let h;
            const y = (b = R?.vnode.el) == null ? void 0 : b.dataset.prefix;
            C && (h = ro({
                columns: e.store.states.columns.value
            }, C, y), h && R?.emit(`cell-${m}`, g, h, C, p)), R?.emit(`row-${m}`, g, h, p);
        }, c = (p, g)=>{
            i(p, g, "dblclick");
        }, o = (p, g)=>{
            e.store.commit("setCurrentRow", g), i(p, g, "click");
        }, a = (p, g)=>{
            i(p, g, "contextmenu");
        }, s = Qt((p)=>{
            e.store.commit("setHoverRow", p);
        }, 30), r = Qt(()=>{
            e.store.commit("setHoverRow", null);
        }, 30), u = (p)=>{
            const g = window.getComputedStyle(p, null), m = Number.parseInt(g.paddingLeft, 10) || 0, b = Number.parseInt(g.paddingRight, 10) || 0, R = Number.parseInt(g.paddingTop, 10) || 0, C = Number.parseInt(g.paddingBottom, 10) || 0;
            return {
                left: m,
                right: b,
                top: R,
                bottom: C
            };
        }, d = (p, g, m)=>{
            let b = g.target.parentNode;
            for(; p > 1 && (b = b?.nextSibling, !(!b || b.nodeName !== "TR"));)m(b, "hover-row hover-fixed-row"), p--;
        };
        return {
            handleDoubleClick: c,
            handleClick: o,
            handleContextMenu: a,
            handleMouseEnter: s,
            handleMouseLeave: r,
            handleCellMouseEnter: (p, g, m)=>{
                var b, R, C;
                const h = t, y = Xn(p), S = (b = h?.vnode.el) == null ? void 0 : b.dataset.prefix;
                let E;
                if (y) {
                    E = ro({
                        columns: e.store.states.columns.value
                    }, y, S), y.rowSpan > 1 && d(y.rowSpan, p, En);
                    const U = h.hoverState = {
                        cell: y,
                        column: E,
                        row: g
                    };
                    h?.emit("cell-mouse-enter", U.row, U.column, U.cell, p);
                }
                if (!m) return;
                const k = p.target.querySelector(".cell");
                if (!(Vt(k, `${S}-tooltip`) && k.childNodes.length)) return;
                const T = document.createRange();
                T.setStart(k, 0), T.setEnd(k, k.childNodes.length);
                const { width: $, height: z } = T.getBoundingClientRect(), { width: x, height: Y } = k.getBoundingClientRect(), { top: te, left: V, right: le, bottom: ce } = u(k), B = V + le, A = te + ce;
                Jn($ + B, x) || Jn(z + A, Y) || Jn(k.scrollWidth, x) ? Bu(m, y.innerText || y.textContent, g, E, y, h) : ((R = We) == null ? void 0 : R.trigger) === y && ((C = We) == null || C());
            },
            handleCellMouseLeave: (p)=>{
                const g = Xn(p);
                if (!g) return;
                g.rowSpan > 1 && d(g.rowSpan, p, qt);
                const m = t?.hoverState;
                t?.emit("cell-mouse-leave", m?.row, m?.column, m?.cell, p);
            },
            tooltipContent: n,
            tooltipTrigger: l
        };
    }
    function lc(e) {
        const t = Ce(Je), n = ie("table");
        return {
            getRowStyle: (r, u)=>{
                const d = t?.props.rowStyle;
                return ye(d) ? d.call(null, {
                    row: r,
                    rowIndex: u
                }) : d || null;
            },
            getRowClass: (r, u)=>{
                const d = [
                    n.e("row")
                ];
                t?.props.highlightCurrentRow && r === e.store.states.currentRow.value && d.push("current-row"), e.stripe && u % 2 === 1 && d.push(n.em("row", "striped"));
                const f = t?.props.rowClassName;
                return Me(f) ? d.push(f) : ye(f) && d.push(f.call(null, {
                    row: r,
                    rowIndex: u
                })), d;
            },
            getCellStyle: (r, u, d, f)=>{
                const v = t?.props.cellStyle;
                let p = v ?? {};
                ye(v) && (p = v.call(null, {
                    rowIndex: r,
                    columnIndex: u,
                    row: d,
                    column: f
                }));
                const g = Pl(u, e?.fixed, e.store);
                return It(g, "left"), It(g, "right"), Object.assign({}, p, g);
            },
            getCellClass: (r, u, d, f, v)=>{
                const p = Ml(n.b(), u, e?.fixed, e.store, void 0, v), g = [
                    f.id,
                    f.align,
                    f.className,
                    ...p
                ], m = t?.props.cellClassName;
                return Me(m) ? g.push(m) : ye(m) && g.push(m.call(null, {
                    rowIndex: r,
                    columnIndex: u,
                    row: d,
                    column: f
                })), g.push(n.e("cell")), g.filter((b)=>!!b).join(" ");
            },
            getSpan: (r, u, d, f)=>{
                let v = 1, p = 1;
                const g = t?.props.spanMethod;
                if (ye(g)) {
                    const m = g({
                        row: r,
                        column: u,
                        rowIndex: d,
                        columnIndex: f
                    });
                    oe(m) ? (v = m[0], p = m[1]) : je(m) && (v = m.rowspan, p = m.colspan);
                }
                return {
                    rowspan: v,
                    colspan: p
                };
            },
            getColspanRealWidth: (r, u, d)=>{
                if (u < 1) return r[d].realWidth;
                const f = r.map(({ realWidth: v, width: p })=>v || p).slice(d, d + u);
                return Number(f.reduce((v, p)=>Number(v) + Number(p), -1));
            }
        };
    }
    const oc = q({
        name: "TableTdWrapper"
    }), ac = q({
        ...oc,
        props: {
            colspan: {
                type: Number,
                default: 1
            },
            rowspan: {
                type: Number,
                default: 1
            }
        },
        setup (e) {
            return (t, n)=>(M(), D("td", {
                    colspan: e.colspan,
                    rowspan: e.rowspan
                }, [
                    j(t.$slots, "default")
                ], 8, [
                    "colspan",
                    "rowspan"
                ]));
        }
    });
    var sc = Se(ac, [
        [
            "__file",
            "td-wrapper.vue"
        ]
    ]);
    function rc(e) {
        const t = Ce(Je), n = ie("table"), { handleDoubleClick: l, handleClick: i, handleContextMenu: c, handleMouseEnter: o, handleMouseLeave: a, handleCellMouseEnter: s, handleCellMouseLeave: r, tooltipContent: u, tooltipTrigger: d } = nc(e), { getRowStyle: f, getRowClass: v, getCellStyle: p, getCellClass: g, getSpan: m, getColspanRealWidth: b } = lc(e), R = L(()=>e.store.states.columns.value.findIndex(({ type: E })=>E === "default")), C = (E, k)=>{
            const T = t.props.rowKey;
            return T ? $e(E, T) : k;
        }, h = (E, k, T, $ = !1)=>{
            const { tooltipEffect: z, tooltipOptions: x, store: Y } = e, { indent: te, columns: V } = Y.states, le = v(E, k);
            let ce = !0;
            return T && (le.push(n.em("row", `level-${T.level}`)), ce = T.display), G("tr", {
                style: [
                    ce ? null : {
                        display: "none"
                    },
                    f(E, k)
                ],
                class: le,
                key: C(E, k),
                onDblclick: (A)=>l(A, E),
                onClick: (A)=>i(A, E),
                onContextmenu: (A)=>c(A, E),
                onMouseenter: ()=>o(k),
                onMouseleave: a
            }, V.value.map((A, U)=>{
                const { rowspan: de, colspan: ve } = m(E, A, k, U);
                if (!de || !ve) return null;
                const ge = Object.assign({}, A);
                ge.realWidth = b(V.value, ve, U);
                const ke = {
                    store: e.store,
                    _self: e.context || t,
                    column: ge,
                    row: E,
                    $index: k,
                    cellIndex: U,
                    expanded: $
                };
                U === R.value && T && (ke.treeNode = {
                    indent: T.level * te.value,
                    level: T.level
                }, Ge(T.expanded) && (ke.treeNode.expanded = T.expanded, "loading" in T && (ke.treeNode.loading = T.loading), "noLazyChildren" in T && (ke.treeNode.noLazyChildren = T.noLazyChildren)));
                const Pe = `${C(E, k)},${U}`, xe = ge.columnKey || ge.rawColumnKey || "", he = A.showOverflowTooltip && Xo({
                    effect: z
                }, x, A.showOverflowTooltip);
                return G(sc, {
                    style: p(k, U, E, A),
                    class: g(k, U, E, A, ve - 1),
                    key: `${xe}${Pe}`,
                    rowspan: de,
                    colspan: ve,
                    onMouseenter: (ue)=>s(ue, E, he),
                    onMouseleave: r
                }, {
                    default: ()=>y(U, A, ke)
                });
            }));
        }, y = (E, k, T)=>k.renderCell(T);
        return {
            wrappedRowRender: (E, k)=>{
                const T = e.store, { isRowExpanded: $, assertRowKey: z } = T, { treeData: x, lazyTreeNodeMap: Y, childrenColumnName: te, rowKey: V } = T.states, le = T.states.columns.value;
                if (le.some(({ type: B })=>B === "expand")) {
                    const B = $(E), A = h(E, k, void 0, B), U = t.renderExpanded;
                    if (!U) return console.error("[Element Error]renderExpanded is required."), A;
                    const de = [
                        [
                            A
                        ]
                    ];
                    return (t.props.preserveExpandedContent || B) && de[0].push(G("tr", {
                        key: `expanded-row__${A.key}`,
                        style: {
                            display: B ? "" : "none"
                        }
                    }, [
                        G("td", {
                            colspan: le.length,
                            class: `${n.e("cell")} ${n.e("expanded-cell")}`
                        }, [
                            U({
                                row: E,
                                $index: k,
                                store: T,
                                expanded: B
                            })
                        ])
                    ])), de;
                } else if (Object.keys(x.value).length) {
                    z();
                    const B = $e(E, V.value);
                    let A = x.value[B], U = null;
                    A && (U = {
                        expanded: A.expanded,
                        level: A.level,
                        display: !0
                    }, Ge(A.lazy) && (Ge(A.loaded) && A.loaded && (U.noLazyChildren = !(A.children && A.children.length)), U.loading = A.loading));
                    const de = [
                        h(E, k, U)
                    ];
                    if (A) {
                        let ve = 0;
                        const ge = (Pe, xe)=>{
                            Pe && Pe.length && xe && Pe.forEach((he)=>{
                                const ue = {
                                    display: xe.display && xe.expanded,
                                    level: xe.level + 1,
                                    expanded: !1,
                                    noLazyChildren: !1,
                                    loading: !1
                                }, _e = $e(he, V.value);
                                if (ht(_e)) throw new Error("For nested data item, row-key is required.");
                                if (A = {
                                    ...x.value[_e]
                                }, A && (ue.expanded = A.expanded, A.level = A.level || ue.level, A.display = !!(A.expanded && ue.display), Ge(A.lazy) && (Ge(A.loaded) && A.loaded && (ue.noLazyChildren = !(A.children && A.children.length)), ue.loading = A.loading)), ve++, de.push(h(he, k + ve, ue)), A) {
                                    const St = Y.value[_e] || he[te.value];
                                    ge(St, A);
                                }
                            });
                        };
                        A.display = !0;
                        const ke = Y.value[B] || E[te.value];
                        ge(ke, A);
                    }
                    return de;
                } else return h(E, k, void 0);
            },
            tooltipContent: u,
            tooltipTrigger: d
        };
    }
    const ic = {
        store: {
            required: !0,
            type: Object
        },
        stripe: Boolean,
        tooltipEffect: String,
        tooltipOptions: {
            type: Object
        },
        context: {
            default: ()=>({}),
            type: Object
        },
        rowClassName: [
            String,
            Function
        ],
        rowStyle: [
            Object,
            Function
        ],
        fixed: {
            type: String,
            default: ""
        },
        highlight: Boolean
    };
    var uc = q({
        name: "ElTableBody",
        props: ic,
        setup (e) {
            const t = Te(), n = Ce(Je), l = ie("table"), { wrappedRowRender: i, tooltipContent: c, tooltipTrigger: o } = rc(e), { onColumnsChange: a, onScrollableChange: s } = Al(n), r = [];
            return fe(e.store.states.hoverRow, (u, d)=>{
                var f;
                const v = t?.vnode.el, p = Array.from(v?.children || []).filter((b)=>b?.classList.contains(`${l.e("row")}`));
                let g = u;
                const m = (f = p[g]) == null ? void 0 : f.childNodes;
                if (m?.length) {
                    let b = 0;
                    Array.from(m).reduce((C, h, y)=>{
                        var S, E;
                        return ((S = m[y]) == null ? void 0 : S.colSpan) > 1 && (b = (E = m[y]) == null ? void 0 : E.colSpan), h.nodeName !== "TD" && b === 0 && C.push(y), b > 0 && b--, C;
                    }, []).forEach((C)=>{
                        var h;
                        for(g = u; g > 0;){
                            const y = (h = p[g - 1]) == null ? void 0 : h.childNodes;
                            if (y[C] && y[C].nodeName === "TD" && y[C].rowSpan > 1) {
                                En(y[C], "hover-cell"), r.push(y[C]);
                                break;
                            }
                            g--;
                        }
                    });
                } else r.forEach((b)=>qt(b, "hover-cell")), r.length = 0;
                !e.store.states.isComplex.value || !Xe || Li(()=>{
                    const b = p[d], R = p[u];
                    b && !b.classList.contains("hover-fixed-row") && qt(b, "hover-row"), R && En(R, "hover-row");
                });
            }), nn(()=>{
                var u;
                (u = We) == null || u();
            }), {
                ns: l,
                onColumnsChange: a,
                onScrollableChange: s,
                wrappedRowRender: i,
                tooltipContent: c,
                tooltipTrigger: o
            };
        },
        render () {
            const { wrappedRowRender: e, store: t } = this, n = t.states.data.value || [];
            return G("tbody", {
                tabIndex: -1
            }, [
                n.reduce((l, i)=>l.concat(e(i, l.length)), [])
            ]);
        }
    });
    function cc() {
        const e = Ce(Je), t = e?.store, n = L(()=>t.states.fixedLeafColumnsLength.value), l = L(()=>t.states.rightFixedColumns.value.length), i = L(()=>t.states.columns.value.length), c = L(()=>t.states.fixedColumns.value.length), o = L(()=>t.states.rightFixedColumns.value.length);
        return {
            leftFixedLeafCount: n,
            rightFixedLeafCount: l,
            columnsCount: i,
            leftFixedCount: c,
            rightFixedCount: o,
            columns: t.states.columns
        };
    }
    function dc(e) {
        const { columns: t } = cc(), n = ie("table");
        return {
            getCellClasses: (c, o)=>{
                const a = c[o], s = [
                    n.e("cell"),
                    a.id,
                    a.align,
                    a.labelClassName,
                    ...Ml(n.b(), o, a.fixed, e.store)
                ];
                return a.className && s.push(a.className), a.children || s.push(n.is("leaf")), s;
            },
            getCellStyles: (c, o)=>{
                const a = Pl(o, c.fixed, e.store);
                return It(a, "left"), It(a, "right"), a;
            },
            columns: t
        };
    }
    var fc = q({
        name: "ElTableFooter",
        props: {
            fixed: {
                type: String,
                default: ""
            },
            store: {
                required: !0,
                type: Object
            },
            summaryMethod: Function,
            sumText: String,
            border: Boolean,
            defaultSort: {
                type: Object,
                default: ()=>({
                        prop: "",
                        order: ""
                    })
            }
        },
        setup (e) {
            const t = Ce(Je), n = ie("table"), { getCellClasses: l, getCellStyles: i, columns: c } = dc(e), { onScrollableChange: o, onColumnsChange: a } = Al(t);
            return {
                ns: n,
                onScrollableChange: o,
                onColumnsChange: a,
                getCellClasses: l,
                getCellStyles: i,
                columns: c
            };
        },
        render () {
            const { columns: e, getCellStyles: t, getCellClasses: n, summaryMethod: l, sumText: i } = this, c = this.store.states.data.value;
            let o = [];
            return l ? o = l({
                columns: e,
                data: c
            }) : e.forEach((a, s)=>{
                if (s === 0) {
                    o[s] = i;
                    return;
                }
                const r = c.map((v)=>Number(v[a.property])), u = [];
                let d = !0;
                r.forEach((v)=>{
                    if (!Number.isNaN(+v)) {
                        d = !1;
                        const p = `${v}`.split(".")[1];
                        u.push(p ? p.length : 0);
                    }
                });
                const f = Math.max.apply(null, u);
                d ? o[s] = "" : o[s] = r.reduce((v, p)=>{
                    const g = Number(p);
                    return Number.isNaN(+g) ? v : Number.parseFloat((v + p).toFixed(Math.min(f, 20)));
                }, 0);
            }), G(G("tfoot", [
                G("tr", {}, [
                    ...e.map((a, s)=>G("td", {
                            key: s,
                            colspan: a.colSpan,
                            rowspan: a.rowSpan,
                            class: n(e, s),
                            style: t(a, s)
                        }, [
                            G("div", {
                                class: [
                                    "cell",
                                    a.labelClassName
                                ]
                            }, [
                                o[s]
                            ])
                        ]))
                ])
            ]));
        }
    });
    function pc(e) {
        return {
            setCurrentRow: (d)=>{
                e.commit("setCurrentRow", d);
            },
            getSelectionRows: ()=>e.getSelectionRows(),
            toggleRowSelection: (d, f, v = !0)=>{
                e.toggleRowSelection(d, f, !1, v), e.updateAllSelected();
            },
            clearSelection: ()=>{
                e.clearSelection();
            },
            clearFilter: (d)=>{
                e.clearFilter(d);
            },
            toggleAllSelection: ()=>{
                e.commit("toggleAllSelection");
            },
            toggleRowExpansion: (d, f)=>{
                e.toggleRowExpansionAdapter(d, f);
            },
            clearSort: ()=>{
                e.clearSort();
            },
            sort: (d, f)=>{
                e.commit("sort", {
                    prop: d,
                    order: f
                });
            },
            updateKeyChildren: (d, f)=>{
                e.updateKeyChildren(d, f);
            }
        };
    }
    function vc(e, t, n, l) {
        const i = N(!1), c = N(null), o = N(!1), a = (B)=>{
            o.value = B;
        }, s = N({
            width: null,
            height: null,
            headerHeight: null
        }), r = N(!1), u = {
            display: "inline-block",
            verticalAlign: "middle"
        }, d = N(), f = N(0), v = N(0), p = N(0), g = N(0), m = N(0);
        gt(()=>{
            t.setHeight(e.height);
        }), gt(()=>{
            t.setMaxHeight(e.maxHeight);
        }), fe(()=>[
                e.currentRowKey,
                n.states.rowKey
            ], ([B, A])=>{
            !w(A) || !w(B) || n.setCurrentRowKey(`${B}`);
        }, {
            immediate: !0
        }), fe(()=>e.data, (B)=>{
            l.store.commit("setData", B);
        }, {
            immediate: !0,
            deep: !0
        }), gt(()=>{
            e.expandRowKeys && n.setExpandRowKeysAdapter(e.expandRowKeys);
        });
        const b = ()=>{
            l.store.commit("setHoverRow", null), l.hoverState && (l.hoverState = null);
        }, R = (B, A)=>{
            const { pixelX: U, pixelY: de } = A;
            Math.abs(U) >= Math.abs(de) && (l.refs.bodyWrapper.scrollLeft += A.pixelX / 5);
        }, C = L(()=>e.height || e.maxHeight || n.states.fixedColumns.value.length > 0 || n.states.rightFixedColumns.value.length > 0), h = L(()=>({
                width: t.bodyWidth.value ? `${t.bodyWidth.value}px` : ""
            })), y = ()=>{
            C.value && t.updateElsHeight(), t.updateColumnsWidth(), !(typeof window > "u") && requestAnimationFrame(T);
        };
        qe(async ()=>{
            await Ne(), n.updateColumns(), $(), requestAnimationFrame(y);
            const B = l.vnode.el, A = l.refs.headerWrapper;
            e.flexible && B && B.parentElement && (B.parentElement.style.minWidth = "0"), s.value = {
                width: d.value = B.offsetWidth,
                height: B.offsetHeight,
                headerHeight: e.showHeader && A ? A.offsetHeight : null
            }, n.states.columns.value.forEach((U)=>{
                U.filteredValue && U.filteredValue.length && l.store.commit("filterChange", {
                    column: U,
                    values: U.filteredValue,
                    silent: !0
                });
            }), l.$ready = !0;
        });
        const S = (B, A)=>{
            if (!B) return;
            const U = Array.from(B.classList).filter((de)=>!de.startsWith("is-scrolling-"));
            U.push(t.scrollX.value ? A : "is-scrolling-none"), B.className = U.join(" ");
        }, E = (B)=>{
            const { tableWrapper: A } = l.refs;
            S(A, B);
        }, k = (B)=>{
            const { tableWrapper: A } = l.refs;
            return !!(A && A.classList.contains(B));
        }, T = function() {
            if (!l.refs.scrollBarRef) return;
            if (!t.scrollX.value) {
                const Pe = "is-scrolling-none";
                k(Pe) || E(Pe);
                return;
            }
            const B = l.refs.scrollBarRef.wrapRef;
            if (!B) return;
            const { scrollLeft: A, offsetWidth: U, scrollWidth: de } = B, { headerWrapper: ve, footerWrapper: ge } = l.refs;
            ve && (ve.scrollLeft = A), ge && (ge.scrollLeft = A);
            const ke = de - U - 1;
            A >= ke ? E("is-scrolling-right") : E(A === 0 ? "is-scrolling-left" : "is-scrolling-middle");
        }, $ = ()=>{
            l.refs.scrollBarRef && (l.refs.scrollBarRef.wrapRef && ll(l.refs.scrollBarRef.wrapRef, "scroll", T, {
                passive: !0
            }), e.fit ? nt(l.vnode.el, z) : ll(window, "resize", z), nt(l.refs.bodyWrapper, ()=>{
                var B, A;
                z(), (A = (B = l.refs) == null ? void 0 : B.scrollBarRef) == null || A.update();
            }));
        }, z = ()=>{
            var B, A, U, de;
            const ve = l.vnode.el;
            if (!l.$ready || !ve) return;
            let ge = !1;
            const { width: ke, height: Pe, headerHeight: xe } = s.value, he = d.value = ve.offsetWidth;
            ke !== he && (ge = !0);
            const ue = ve.offsetHeight;
            (e.height || C.value) && Pe !== ue && (ge = !0);
            const _e = e.tableLayout === "fixed" ? l.refs.headerWrapper : (B = l.refs.tableHeaderRef) == null ? void 0 : B.$el;
            e.showHeader && _e?.offsetHeight !== xe && (ge = !0), f.value = ((A = l.refs.tableWrapper) == null ? void 0 : A.scrollHeight) || 0, p.value = _e?.scrollHeight || 0, g.value = ((U = l.refs.footerWrapper) == null ? void 0 : U.offsetHeight) || 0, m.value = ((de = l.refs.appendWrapper) == null ? void 0 : de.offsetHeight) || 0, v.value = f.value - p.value - g.value - m.value, ge && (s.value = {
                width: he,
                height: ue,
                headerHeight: e.showHeader && _e?.offsetHeight || 0
            }, y());
        }, x = jt(), Y = L(()=>{
            const { bodyWidth: B, scrollY: A, gutterWidth: U } = t;
            return B.value ? `${B.value - (A.value ? U : 0)}px` : "";
        }), te = L(()=>e.maxHeight ? "fixed" : e.tableLayout), V = L(()=>{
            if (e.data && e.data.length) return null;
            let B = "100%";
            e.height && v.value && (B = `${v.value}px`);
            const A = d.value;
            return {
                width: A ? `${A}px` : "",
                height: B
            };
        }), le = L(()=>e.height ? {
                height: "100%"
            } : e.maxHeight ? Number.isNaN(Number(e.maxHeight)) ? {
                maxHeight: `calc(${e.maxHeight} - ${p.value + g.value}px)`
            } : {
                maxHeight: `${e.maxHeight - p.value - g.value}px`
            } : {});
        return {
            isHidden: i,
            renderExpanded: c,
            setDragVisible: a,
            isGroup: r,
            handleMouseLeave: b,
            handleHeaderFooterMousewheel: R,
            tableSize: x,
            emptyBlockStyle: V,
            handleFixedMousewheel: (B, A)=>{
                const U = l.refs.bodyWrapper;
                if (Math.abs(A.spinY) > 0) {
                    const de = U.scrollTop;
                    A.pixelY < 0 && de !== 0 && B.preventDefault(), A.pixelY > 0 && U.scrollHeight - U.clientHeight > de && B.preventDefault(), U.scrollTop += Math.ceil(A.pixelY / 5);
                } else U.scrollLeft += Math.ceil(A.pixelX / 5);
            },
            resizeProxyVisible: o,
            bodyWidth: Y,
            resizeState: s,
            doLayout: y,
            tableBodyStyles: h,
            tableLayout: te,
            scrollbarViewStyle: u,
            scrollbarStyle: le
        };
    }
    function hc(e) {
        const t = N(), n = ()=>{
            const i = e.vnode.el.querySelector(".hidden-columns"), c = {
                childList: !0,
                subtree: !0
            }, o = e.store.states.updateOrderFns;
            t.value = new MutationObserver(()=>{
                o.forEach((a)=>a());
            }), t.value.observe(i, c);
        };
        qe(()=>{
            n();
        }), nn(()=>{
            var l;
            (l = t.value) == null || l.disconnect();
        });
    }
    var gc = {
        data: {
            type: Array,
            default: ()=>[]
        },
        size: Fn,
        width: [
            String,
            Number
        ],
        height: [
            String,
            Number
        ],
        maxHeight: [
            String,
            Number
        ],
        fit: {
            type: Boolean,
            default: !0
        },
        stripe: Boolean,
        border: Boolean,
        rowKey: [
            String,
            Function
        ],
        showHeader: {
            type: Boolean,
            default: !0
        },
        showSummary: Boolean,
        sumText: String,
        summaryMethod: Function,
        rowClassName: [
            String,
            Function
        ],
        rowStyle: [
            Object,
            Function
        ],
        cellClassName: [
            String,
            Function
        ],
        cellStyle: [
            Object,
            Function
        ],
        headerRowClassName: [
            String,
            Function
        ],
        headerRowStyle: [
            Object,
            Function
        ],
        headerCellClassName: [
            String,
            Function
        ],
        headerCellStyle: [
            Object,
            Function
        ],
        highlightCurrentRow: Boolean,
        currentRowKey: [
            String,
            Number
        ],
        emptyText: String,
        expandRowKeys: Array,
        defaultExpandAll: Boolean,
        defaultSort: Object,
        tooltipEffect: String,
        tooltipOptions: Object,
        spanMethod: Function,
        selectOnIndeterminate: {
            type: Boolean,
            default: !0
        },
        indent: {
            type: Number,
            default: 16
        },
        treeProps: {
            type: Object,
            default: ()=>({
                    hasChildren: "hasChildren",
                    children: "children",
                    checkStrictly: !1
                })
        },
        lazy: Boolean,
        load: Function,
        style: {
            type: Object,
            default: ()=>({})
        },
        className: {
            type: String,
            default: ""
        },
        tableLayout: {
            type: String,
            default: "fixed"
        },
        scrollbarAlwaysOn: Boolean,
        flexible: Boolean,
        showOverflowTooltip: [
            Boolean,
            Object
        ],
        tooltipFormatter: Function,
        appendFilterPanelTo: String,
        scrollbarTabindex: {
            type: [
                Number,
                String
            ],
            default: void 0
        },
        allowDragLastColumn: {
            type: Boolean,
            default: !0
        },
        preserveExpandedContent: {
            type: Boolean,
            default: !1
        }
    };
    function ha(e) {
        const t = e.tableLayout === "auto";
        let n = e.columns || [];
        t && n.every(({ width: i })=>Oe(i)) && (n = []);
        const l = (i)=>{
            const c = {
                key: `${e.tableLayout}_${i.id}`,
                style: {},
                name: void 0
            };
            return t ? c.style = {
                width: `${i.width}px`
            } : c.name = i.id, c;
        };
        return G("colgroup", {}, n.map((i)=>G("col", l(i))));
    }
    ha.props = [
        "columns",
        "tableLayout"
    ];
    const mc = ()=>{
        const e = N(), t = (c, o)=>{
            const a = e.value;
            a && a.scrollTo(c, o);
        }, n = (c, o)=>{
            const a = e.value;
            a && Ie(o) && [
                "Top",
                "Left"
            ].includes(c) && a[`setScroll${c}`](o);
        };
        return {
            scrollBarRef: e,
            scrollTo: t,
            setScrollTop: (c)=>n("Top", c),
            setScrollLeft: (c)=>n("Left", c)
        };
    };
    var co = !1, pt, dl, fl, bn, yn, ga, Cn, pl, vl, hl, ma, gl, ml, ba, ya;
    function He() {
        if (!co) {
            co = !0;
            var e = navigator.userAgent, t = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(e), n = /(Mac OS X)|(Windows)|(Linux)/.exec(e);
            if (gl = /\b(iPhone|iP[ao]d)/.exec(e), ml = /\b(iP[ao]d)/.exec(e), hl = /Android/i.exec(e), ba = /FBAN\/\w+;/i.exec(e), ya = /Mobile/i.exec(e), ma = !!/Win64/.exec(e), t) {
                pt = t[1] ? parseFloat(t[1]) : t[5] ? parseFloat(t[5]) : NaN, pt && document && document.documentMode && (pt = document.documentMode);
                var l = /(?:Trident\/(\d+.\d+))/.exec(e);
                ga = l ? parseFloat(l[1]) + 4 : pt, dl = t[2] ? parseFloat(t[2]) : NaN, fl = t[3] ? parseFloat(t[3]) : NaN, bn = t[4] ? parseFloat(t[4]) : NaN, bn ? (t = /(?:Chrome\/(\d+\.\d+))/.exec(e), yn = t && t[1] ? parseFloat(t[1]) : NaN) : yn = NaN;
            } else pt = dl = fl = yn = bn = NaN;
            if (n) {
                if (n[1]) {
                    var i = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(e);
                    Cn = i ? parseFloat(i[1].replace("_", ".")) : !0;
                } else Cn = !1;
                pl = !!n[2], vl = !!n[3];
            } else Cn = pl = vl = !1;
        }
    }
    var bl = {
        ie: function() {
            return He() || pt;
        },
        ieCompatibilityMode: function() {
            return He() || ga > pt;
        },
        ie64: function() {
            return bl.ie() && ma;
        },
        firefox: function() {
            return He() || dl;
        },
        opera: function() {
            return He() || fl;
        },
        webkit: function() {
            return He() || bn;
        },
        safari: function() {
            return bl.webkit();
        },
        chrome: function() {
            return He() || yn;
        },
        windows: function() {
            return He() || pl;
        },
        osx: function() {
            return He() || Cn;
        },
        linux: function() {
            return He() || vl;
        },
        iphone: function() {
            return He() || gl;
        },
        mobile: function() {
            return He() || gl || ml || hl || ya;
        },
        nativeApp: function() {
            return He() || ba;
        },
        android: function() {
            return He() || hl;
        },
        ipad: function() {
            return He() || ml;
        }
    }, bc = bl, yc = !!(typeof window < "u" && window.document && window.document.createElement), Cc = {
        canUseDOM: yc
    }, Ca = Cc, wa;
    Ca.canUseDOM && (wa = document.implementation && document.implementation.hasFeature && document.implementation.hasFeature("", "") !== !0);
    function wc(e, t) {
        if (!Ca.canUseDOM || t && !("addEventListener" in document)) return !1;
        var n = "on" + e, l = n in document;
        if (!l) {
            var i = document.createElement("div");
            i.setAttribute(n, "return;"), l = typeof i[n] == "function";
        }
        return !l && wa && e === "wheel" && (l = document.implementation.hasFeature("Events.wheel", "3.0")), l;
    }
    var Sc = wc, fo = 10, po = 40, vo = 800;
    function Sa(e) {
        var t = 0, n = 0, l = 0, i = 0;
        return "detail" in e && (n = e.detail), "wheelDelta" in e && (n = -e.wheelDelta / 120), "wheelDeltaY" in e && (n = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = n, n = 0), l = t * fo, i = n * fo, "deltaY" in e && (i = e.deltaY), "deltaX" in e && (l = e.deltaX), (l || i) && e.deltaMode && (e.deltaMode == 1 ? (l *= po, i *= po) : (l *= vo, i *= vo)), l && !t && (t = l < 1 ? -1 : 1), i && !n && (n = i < 1 ? -1 : 1), {
            spinX: t,
            spinY: n,
            pixelX: l,
            pixelY: i
        };
    }
    Sa.getEventType = function() {
        return bc.firefox() ? "DOMMouseScroll" : Sc("wheel") ? "wheel" : "mousewheel";
    };
    var Ec = Sa;
    const Rc = function(e, t) {
        if (e && e.addEventListener) {
            const n = function(l) {
                const i = Ec(l);
                t && Reflect.apply(t, this, [
                    l,
                    i
                ]);
            };
            e.addEventListener("wheel", n, {
                passive: !0
            });
        }
    }, Tc = {
        beforeMount (e, t) {
            Rc(e, t.value);
        }
    };
    let Oc = 1;
    const kc = q({
        name: "ElTable",
        directives: {
            Mousewheel: Tc
        },
        components: {
            TableHeader: tc,
            TableBody: uc,
            TableFooter: fc,
            ElScrollbar: Ol,
            hColgroup: ha
        },
        props: gc,
        emits: [
            "select",
            "select-all",
            "selection-change",
            "cell-mouse-enter",
            "cell-mouse-leave",
            "cell-contextmenu",
            "cell-click",
            "cell-dblclick",
            "row-click",
            "row-contextmenu",
            "row-dblclick",
            "header-click",
            "header-contextmenu",
            "sort-change",
            "filter-change",
            "current-change",
            "header-dragend",
            "expand-change",
            "scroll"
        ],
        setup (e) {
            const { t } = In(), n = ie("table"), l = Te();
            Dt(Je, l);
            const i = Ku(l, e);
            l.store = i;
            const c = new ju({
                store: l.store,
                table: l,
                fit: e.fit,
                showHeader: e.showHeader
            });
            l.layout = c;
            const o = L(()=>(i.states.data.value || []).length === 0), { setCurrentRow: a, getSelectionRows: s, toggleRowSelection: r, clearSelection: u, clearFilter: d, toggleAllSelection: f, toggleRowExpansion: v, clearSort: p, sort: g, updateKeyChildren: m } = pc(i), { isHidden: b, renderExpanded: R, setDragVisible: C, isGroup: h, handleMouseLeave: y, handleHeaderFooterMousewheel: S, tableSize: E, emptyBlockStyle: k, handleFixedMousewheel: T, resizeProxyVisible: $, bodyWidth: z, resizeState: x, doLayout: Y, tableBodyStyles: te, tableLayout: V, scrollbarViewStyle: le, scrollbarStyle: ce } = vc(e, c, i, l), { scrollBarRef: B, scrollTo: A, setScrollLeft: U, setScrollTop: de } = mc(), ve = Qt(Y, 50), ge = `${n.namespace.value}-table_${Oc++}`;
            l.tableId = ge, l.state = {
                isGroup: h,
                resizeState: x,
                doLayout: Y,
                debouncedUpdateLayout: ve
            };
            const ke = L(()=>{
                var he;
                return (he = e.sumText) != null ? he : t("el.table.sumText");
            }), Pe = L(()=>{
                var he;
                return (he = e.emptyText) != null ? he : t("el.table.emptyText");
            }), xe = L(()=>va(i.states.originColumns.value)[0]);
            return hc(l), tn(()=>{
                ve.cancel();
            }), {
                ns: n,
                layout: c,
                store: i,
                columns: xe,
                handleHeaderFooterMousewheel: S,
                handleMouseLeave: y,
                tableId: ge,
                tableSize: E,
                isHidden: b,
                isEmpty: o,
                renderExpanded: R,
                resizeProxyVisible: $,
                resizeState: x,
                isGroup: h,
                bodyWidth: z,
                tableBodyStyles: te,
                emptyBlockStyle: k,
                debouncedUpdateLayout: ve,
                handleFixedMousewheel: T,
                setCurrentRow: a,
                getSelectionRows: s,
                toggleRowSelection: r,
                clearSelection: u,
                clearFilter: d,
                toggleAllSelection: f,
                toggleRowExpansion: v,
                clearSort: p,
                doLayout: Y,
                sort: g,
                updateKeyChildren: m,
                t,
                setDragVisible: C,
                context: l,
                computedSumText: ke,
                computedEmptyText: Pe,
                tableLayout: V,
                scrollbarViewStyle: le,
                scrollbarStyle: ce,
                scrollBarRef: B,
                scrollTo: A,
                setScrollLeft: U,
                setScrollTop: de,
                allowDragLastColumn: e.allowDragLastColumn
            };
        }
    });
    function Nc(e, t, n, l, i, c) {
        const o = Re("hColgroup"), a = Re("table-header"), s = Re("table-body"), r = Re("table-footer"), u = Re("el-scrollbar"), d = kl("mousewheel");
        return M(), D("div", {
            ref: "tableWrapper",
            class: P([
                {
                    [e.ns.m("fit")]: e.fit,
                    [e.ns.m("striped")]: e.stripe,
                    [e.ns.m("border")]: e.border || e.isGroup,
                    [e.ns.m("hidden")]: e.isHidden,
                    [e.ns.m("group")]: e.isGroup,
                    [e.ns.m("fluid-height")]: e.maxHeight,
                    [e.ns.m("scrollable-x")]: e.layout.scrollX.value,
                    [e.ns.m("scrollable-y")]: e.layout.scrollY.value,
                    [e.ns.m("enable-row-hover")]: !e.store.states.isComplex.value,
                    [e.ns.m("enable-row-transition")]: (e.store.states.data.value || []).length !== 0 && (e.store.states.data.value || []).length < 100,
                    "has-footer": e.showSummary
                },
                e.ns.m(e.tableSize),
                e.className,
                e.ns.b(),
                e.ns.m(`layout-${e.tableLayout}`)
            ]),
            style: Le(e.style),
            "data-prefix": e.ns.namespace.value,
            onMouseleave: e.handleMouseLeave
        }, [
            W("div", {
                class: P(e.ns.e("inner-wrapper"))
            }, [
                W("div", {
                    ref: "hiddenColumns",
                    class: "hidden-columns"
                }, [
                    j(e.$slots, "default")
                ], 512),
                e.showHeader && e.tableLayout === "fixed" ? Be((M(), D("div", {
                    key: 0,
                    ref: "headerWrapper",
                    class: P(e.ns.e("header-wrapper"))
                }, [
                    W("table", {
                        ref: "tableHeader",
                        class: P(e.ns.e("header")),
                        style: Le(e.tableBodyStyles),
                        border: "0",
                        cellpadding: "0",
                        cellspacing: "0"
                    }, [
                        _(o, {
                            columns: e.store.states.columns.value,
                            "table-layout": e.tableLayout
                        }, null, 8, [
                            "columns",
                            "table-layout"
                        ]),
                        _(a, {
                            ref: "tableHeaderRef",
                            border: e.border,
                            "default-sort": e.defaultSort,
                            store: e.store,
                            "append-filter-panel-to": e.appendFilterPanelTo,
                            "allow-drag-last-column": e.allowDragLastColumn,
                            onSetDragVisible: e.setDragVisible
                        }, null, 8, [
                            "border",
                            "default-sort",
                            "store",
                            "append-filter-panel-to",
                            "allow-drag-last-column",
                            "onSetDragVisible"
                        ])
                    ], 6)
                ], 2)), [
                    [
                        d,
                        e.handleHeaderFooterMousewheel
                    ]
                ]) : K("v-if", !0),
                W("div", {
                    ref: "bodyWrapper",
                    class: P(e.ns.e("body-wrapper"))
                }, [
                    _(u, {
                        ref: "scrollBarRef",
                        "view-style": e.scrollbarViewStyle,
                        "wrap-style": e.scrollbarStyle,
                        always: e.scrollbarAlwaysOn,
                        tabindex: e.scrollbarTabindex,
                        onScroll: (f)=>e.$emit("scroll", f)
                    }, {
                        default: I(()=>[
                                W("table", {
                                    ref: "tableBody",
                                    class: P(e.ns.e("body")),
                                    cellspacing: "0",
                                    cellpadding: "0",
                                    border: "0",
                                    style: Le({
                                        width: e.bodyWidth,
                                        tableLayout: e.tableLayout
                                    })
                                }, [
                                    _(o, {
                                        columns: e.store.states.columns.value,
                                        "table-layout": e.tableLayout
                                    }, null, 8, [
                                        "columns",
                                        "table-layout"
                                    ]),
                                    e.showHeader && e.tableLayout === "auto" ? (M(), ne(a, {
                                        key: 0,
                                        ref: "tableHeaderRef",
                                        class: P(e.ns.e("body-header")),
                                        border: e.border,
                                        "default-sort": e.defaultSort,
                                        store: e.store,
                                        "append-filter-panel-to": e.appendFilterPanelTo,
                                        onSetDragVisible: e.setDragVisible
                                    }, null, 8, [
                                        "class",
                                        "border",
                                        "default-sort",
                                        "store",
                                        "append-filter-panel-to",
                                        "onSetDragVisible"
                                    ])) : K("v-if", !0),
                                    _(s, {
                                        context: e.context,
                                        highlight: e.highlightCurrentRow,
                                        "row-class-name": e.rowClassName,
                                        "tooltip-effect": e.tooltipEffect,
                                        "tooltip-options": e.tooltipOptions,
                                        "row-style": e.rowStyle,
                                        store: e.store,
                                        stripe: e.stripe
                                    }, null, 8, [
                                        "context",
                                        "highlight",
                                        "row-class-name",
                                        "tooltip-effect",
                                        "tooltip-options",
                                        "row-style",
                                        "store",
                                        "stripe"
                                    ]),
                                    e.showSummary && e.tableLayout === "auto" ? (M(), ne(r, {
                                        key: 1,
                                        class: P(e.ns.e("body-footer")),
                                        border: e.border,
                                        "default-sort": e.defaultSort,
                                        store: e.store,
                                        "sum-text": e.computedSumText,
                                        "summary-method": e.summaryMethod
                                    }, null, 8, [
                                        "class",
                                        "border",
                                        "default-sort",
                                        "store",
                                        "sum-text",
                                        "summary-method"
                                    ])) : K("v-if", !0)
                                ], 6),
                                e.isEmpty ? (M(), D("div", {
                                    key: 0,
                                    ref: "emptyBlock",
                                    style: Le(e.emptyBlockStyle),
                                    class: P(e.ns.e("empty-block"))
                                }, [
                                    W("span", {
                                        class: P(e.ns.e("empty-text"))
                                    }, [
                                        j(e.$slots, "empty", {}, ()=>[
                                                we(ae(e.computedEmptyText), 1)
                                            ])
                                    ], 2)
                                ], 6)) : K("v-if", !0),
                                e.$slots.append ? (M(), D("div", {
                                    key: 1,
                                    ref: "appendWrapper",
                                    class: P(e.ns.e("append-wrapper"))
                                }, [
                                    j(e.$slots, "append")
                                ], 2)) : K("v-if", !0)
                            ]),
                        _: 3
                    }, 8, [
                        "view-style",
                        "wrap-style",
                        "always",
                        "tabindex",
                        "onScroll"
                    ])
                ], 2),
                e.showSummary && e.tableLayout === "fixed" ? Be((M(), D("div", {
                    key: 1,
                    ref: "footerWrapper",
                    class: P(e.ns.e("footer-wrapper"))
                }, [
                    W("table", {
                        class: P(e.ns.e("footer")),
                        cellspacing: "0",
                        cellpadding: "0",
                        border: "0",
                        style: Le(e.tableBodyStyles)
                    }, [
                        _(o, {
                            columns: e.store.states.columns.value,
                            "table-layout": e.tableLayout
                        }, null, 8, [
                            "columns",
                            "table-layout"
                        ]),
                        _(r, {
                            border: e.border,
                            "default-sort": e.defaultSort,
                            store: e.store,
                            "sum-text": e.computedSumText,
                            "summary-method": e.summaryMethod
                        }, null, 8, [
                            "border",
                            "default-sort",
                            "store",
                            "sum-text",
                            "summary-method"
                        ])
                    ], 6)
                ], 2)), [
                    [
                        yt,
                        !e.isEmpty
                    ],
                    [
                        d,
                        e.handleHeaderFooterMousewheel
                    ]
                ]) : K("v-if", !0),
                e.border || e.isGroup ? (M(), D("div", {
                    key: 2,
                    class: P(e.ns.e("border-left-patch"))
                }, null, 2)) : K("v-if", !0)
            ], 2),
            Be(W("div", {
                ref: "resizeProxy",
                class: P(e.ns.e("column-resize-proxy"))
            }, null, 2), [
                [
                    yt,
                    e.resizeProxyVisible
                ]
            ])
        ], 46, [
            "data-prefix",
            "onMouseleave"
        ]);
    }
    var Lc = Se(kc, [
        [
            "render",
            Nc
        ],
        [
            "__file",
            "table.vue"
        ]
    ]);
    const Mc = {
        selection: "table-column--selection",
        expand: "table__expand-column"
    }, Pc = {
        default: {
            order: ""
        },
        selection: {
            width: 48,
            minWidth: 48,
            realWidth: 48,
            order: ""
        },
        expand: {
            width: 48,
            minWidth: 48,
            realWidth: 48,
            order: ""
        },
        index: {
            width: 48,
            minWidth: 48,
            realWidth: 48,
            order: ""
        }
    }, Ac = (e)=>Mc[e] || "", Fc = {
        selection: {
            renderHeader ({ store: e, column: t }) {
                function n() {
                    return e.states.data.value && e.states.data.value.length === 0;
                }
                return G($t, {
                    disabled: n(),
                    size: e.states.tableSize.value,
                    indeterminate: e.states.selection.value.length > 0 && !e.states.isAllSelected.value,
                    "onUpdate:modelValue": e.toggleAllSelection,
                    modelValue: e.states.isAllSelected.value,
                    ariaLabel: t.label
                });
            },
            renderCell ({ row: e, column: t, store: n, $index: l }) {
                return G($t, {
                    disabled: t.selectable ? !t.selectable.call(null, e, l) : !1,
                    size: n.states.tableSize.value,
                    onChange: ()=>{
                        n.commit("rowSelectedChanged", e);
                    },
                    onClick: (i)=>i.stopPropagation(),
                    modelValue: n.isSelected(e),
                    ariaLabel: t.label
                });
            },
            sortable: !1,
            resizable: !1
        },
        index: {
            renderHeader ({ column: e }) {
                return e.label || "#";
            },
            renderCell ({ column: e, $index: t }) {
                let n = t + 1;
                const l = e.index;
                return Ie(l) ? n = t + l : ye(l) && (n = l(t)), G("div", {}, [
                    n
                ]);
            },
            sortable: !1
        },
        expand: {
            renderHeader ({ column: e }) {
                return e.label || "";
            },
            renderCell ({ row: e, store: t, expanded: n }) {
                const { ns: l } = t, i = [
                    l.e("expand-icon")
                ];
                return n && i.push(l.em("expand-icon", "expanded")), G("div", {
                    class: i,
                    onClick: function(o) {
                        o.stopPropagation(), t.toggleRowExpansion(e);
                    }
                }, {
                    default: ()=>[
                            G(Ve, null, {
                                default: ()=>[
                                        G(Io)
                                    ]
                            })
                        ]
                });
            },
            sortable: !1,
            resizable: !1
        }
    };
    function $c({ row: e, column: t, $index: n }) {
        var l;
        const i = t.property, c = i && $o(e, i).value;
        return t && t.formatter ? t.formatter(e, t, c, n) : ((l = c?.toString) == null ? void 0 : l.call(c)) || "";
    }
    function Ic({ row: e, treeNode: t, store: n }, l = !1) {
        const { ns: i } = n;
        if (!t) return l ? [
            G("span", {
                class: i.e("placeholder")
            })
        ] : null;
        const c = [], o = function(a) {
            a.stopPropagation(), !t.loading && n.loadOrToggle(e);
        };
        if (t.indent && c.push(G("span", {
            class: i.e("indent"),
            style: {
                "padding-left": `${t.indent}px`
            }
        })), Ge(t.expanded) && !t.noLazyChildren) {
            const a = [
                i.e("expand-icon"),
                t.expanded ? i.em("expand-icon", "expanded") : ""
            ];
            let s = Io;
            t.loading && (s = Ps), c.push(G("div", {
                class: a,
                onClick: o
            }, {
                default: ()=>[
                        G(Ve, {
                            class: {
                                [i.is("loading")]: t.loading
                            }
                        }, {
                            default: ()=>[
                                    G(s)
                                ]
                        })
                    ]
            }));
        } else c.push(G("span", {
            class: i.e("placeholder")
        }));
        return c;
    }
    function ho(e, t) {
        return e.reduce((n, l)=>(n[l] = l, n), t);
    }
    function _c(e, t) {
        const n = Te();
        return {
            registerComplexWatchers: ()=>{
                const c = [
                    "fixed"
                ], o = {
                    realWidth: "width",
                    realMinWidth: "minWidth"
                }, a = ho(c, o);
                Object.keys(a).forEach((s)=>{
                    const r = o[s];
                    Yt(t, r) && fe(()=>t[r], (u)=>{
                        let d = u;
                        r === "width" && s === "realWidth" && (d = Ll(u)), r === "minWidth" && s === "realMinWidth" && (d = ia(u)), n.columnConfig.value[r] = d, n.columnConfig.value[s] = d;
                        const f = r === "fixed";
                        e.value.store.scheduleLayout(f);
                    });
                });
            },
            registerNormalWatchers: ()=>{
                const c = [
                    "label",
                    "filters",
                    "filterMultiple",
                    "filteredValue",
                    "sortable",
                    "index",
                    "formatter",
                    "className",
                    "labelClassName",
                    "filterClassName",
                    "showOverflowTooltip",
                    "tooltipFormatter"
                ], o = {
                    property: "prop",
                    align: "realAlign",
                    headerAlign: "realHeaderAlign"
                }, a = ho(c, o);
                Object.keys(a).forEach((s)=>{
                    const r = o[s];
                    Yt(t, r) && fe(()=>t[r], (u)=>{
                        n.columnConfig.value[s] = u;
                    });
                });
            }
        };
    }
    function Dc(e, t, n) {
        const l = Te(), i = N(""), c = N(!1), o = N(), a = N(), s = ie("table");
        gt(()=>{
            o.value = e.align ? `is-${e.align}` : null, o.value;
        }), gt(()=>{
            a.value = e.headerAlign ? `is-${e.headerAlign}` : o.value, a.value;
        });
        const r = L(()=>{
            let h = l.vnode.vParent || l.parent;
            for(; h && !h.tableId && !h.columnId;)h = h.vnode.vParent || h.parent;
            return h;
        }), u = L(()=>{
            const { store: h } = l.parent;
            if (!h) return !1;
            const { treeData: y } = h.states, S = y.value;
            return S && Object.keys(S).length > 0;
        }), d = N(Ll(e.width)), f = N(ia(e.minWidth)), v = (h)=>(d.value && (h.width = d.value), f.value && (h.minWidth = f.value), !d.value && f.value && (h.width = void 0), h.minWidth || (h.minWidth = 80), h.realWidth = Number(Oe(h.width) ? h.minWidth : h.width), h), p = (h)=>{
            const y = h.type, S = Fc[y] || {};
            Object.keys(S).forEach((k)=>{
                const T = S[k];
                k !== "className" && !Oe(T) && (h[k] = T);
            });
            const E = Ac(y);
            if (E) {
                const k = `${w(s.namespace)}-${E}`;
                h.className = h.className ? `${h.className} ${k}` : k;
            }
            return h;
        }, g = (h)=>{
            oe(h) ? h.forEach((S)=>y(S)) : y(h);
            function y(S) {
                var E;
                ((E = S?.type) == null ? void 0 : E.name) === "ElTableColumn" && (S.vParent = l);
            }
        };
        return {
            columnId: i,
            realAlign: o,
            isSubColumn: c,
            realHeaderAlign: a,
            columnOrTableParent: r,
            setColumnWidth: v,
            setColumnForcedProps: p,
            setColumnRenders: (h)=>{
                e.renderHeader || h.type !== "selection" && (h.renderHeader = (S)=>(l.columnConfig.value.label, j(t, "header", S, ()=>[
                            h.label
                        ]))), t["filter-icon"] && (h.renderFilterIcon = (S)=>j(t, "filter-icon", S));
                let y = h.renderCell;
                return h.type === "expand" ? (h.renderCell = (S)=>G("div", {
                        class: "cell"
                    }, [
                        y(S)
                    ]), n.value.renderExpanded = (S)=>t.default ? t.default(S) : t.default) : (y = y || $c, h.renderCell = (S)=>{
                    let E = null;
                    if (t.default) {
                        const Y = t.default(S);
                        E = Y.some((te)=>te.type !== lr) ? Y : y(S);
                    } else E = y(S);
                    const { columns: k } = n.value.store.states, T = k.value.findIndex((Y)=>Y.type === "default"), $ = u.value && S.cellIndex === T, z = Ic(S, $), x = {
                        class: "cell",
                        style: {}
                    };
                    return h.showOverflowTooltip && (x.class = `${x.class} ${w(s.namespace)}-tooltip`, x.style = {
                        width: `${(S.column.realWidth || Number(S.column.width)) - 1}px`
                    }), g(E), G("div", x, [
                        z,
                        E
                    ]);
                }), h;
            },
            getPropsData: (...h)=>h.reduce((y, S)=>(oe(S) && S.forEach((E)=>{
                        y[E] = e[E];
                    }), y), {}),
            getColumnElIndex: (h, y)=>Array.prototype.indexOf.call(h, y),
            updateColumnOrder: ()=>{
                n.value.store.commit("updateColumnOrder", l.columnConfig.value);
            }
        };
    }
    var Bc = {
        type: {
            type: String,
            default: "default"
        },
        label: String,
        className: String,
        labelClassName: String,
        property: String,
        prop: String,
        width: {
            type: [
                String,
                Number
            ],
            default: ""
        },
        minWidth: {
            type: [
                String,
                Number
            ],
            default: ""
        },
        renderHeader: Function,
        sortable: {
            type: [
                Boolean,
                String
            ],
            default: !1
        },
        sortMethod: Function,
        sortBy: [
            String,
            Function,
            Array
        ],
        resizable: {
            type: Boolean,
            default: !0
        },
        columnKey: String,
        align: String,
        headerAlign: String,
        showOverflowTooltip: {
            type: [
                Boolean,
                Object
            ],
            default: void 0
        },
        tooltipFormatter: Function,
        fixed: [
            Boolean,
            String
        ],
        formatter: Function,
        selectable: Function,
        reserveSelection: Boolean,
        filterMethod: Function,
        filteredValue: Array,
        filters: Array,
        filterPlacement: String,
        filterMultiple: {
            type: Boolean,
            default: !0
        },
        filterClassName: String,
        index: [
            Number,
            Function
        ],
        sortOrders: {
            type: Array,
            default: ()=>[
                    "ascending",
                    "descending",
                    null
                ],
            validator: (e)=>e.every((t)=>[
                        "ascending",
                        "descending",
                        null
                    ].includes(t))
        }
    };
    let xc = 1;
    var Ea = q({
        name: "ElTableColumn",
        components: {
            ElCheckbox: $t
        },
        props: Bc,
        setup (e, { slots: t }) {
            const n = Te(), l = N({}), i = L(()=>{
                let C = n.parent;
                for(; C && !C.tableId;)C = C.parent;
                return C;
            }), { registerNormalWatchers: c, registerComplexWatchers: o } = _c(i, e), { columnId: a, isSubColumn: s, realHeaderAlign: r, columnOrTableParent: u, setColumnWidth: d, setColumnForcedProps: f, setColumnRenders: v, getPropsData: p, getColumnElIndex: g, realAlign: m, updateColumnOrder: b } = Dc(e, t, i), R = u.value;
            a.value = `${R.tableId || R.columnId}_column_${xc++}`, Vo(()=>{
                s.value = i.value !== R;
                const C = e.type || "default", h = e.sortable === "" ? !0 : e.sortable, y = C === "selection" ? !1 : Oe(e.showOverflowTooltip) ? R.props.showOverflowTooltip : e.showOverflowTooltip, S = Oe(e.tooltipFormatter) ? R.props.tooltipFormatter : e.tooltipFormatter, E = {
                    ...Pc[C],
                    id: a.value,
                    type: C,
                    property: e.prop || e.property,
                    align: m,
                    headerAlign: r,
                    showOverflowTooltip: y,
                    tooltipFormatter: S,
                    filterable: e.filters || e.filterMethod,
                    filteredValue: [],
                    filterPlacement: "",
                    filterClassName: "",
                    isColumnGroup: !1,
                    isSubColumn: !1,
                    filterOpened: !1,
                    sortable: h,
                    index: e.index,
                    rawColumnKey: n.vnode.key
                };
                let x = p([
                    "columnKey",
                    "label",
                    "className",
                    "labelClassName",
                    "type",
                    "renderHeader",
                    "formatter",
                    "fixed",
                    "resizable"
                ], [
                    "sortMethod",
                    "sortBy",
                    "sortOrders"
                ], [
                    "selectable",
                    "reserveSelection"
                ], [
                    "filterMethod",
                    "filters",
                    "filterMultiple",
                    "filterOpened",
                    "filteredValue",
                    "filterPlacement",
                    "filterClassName"
                ]);
                x = Fu(E, x), x = Iu(v, d, f)(x), l.value = x, c(), o();
            }), qe(()=>{
                var C;
                const h = u.value, y = s.value ? h.vnode.el.children : (C = h.refs.hiddenColumns) == null ? void 0 : C.children, S = ()=>g(y || [], n.vnode.el);
                l.value.getColumnIndex = S, S() > -1 && i.value.store.commit("insertColumn", l.value, s.value ? h.columnConfig.value : null, b);
            }), tn(()=>{
                const C = l.value.getColumnIndex;
                (C ? C() : -1) > -1 && i.value.store.commit("removeColumn", l.value, s.value ? R.columnConfig.value : null, b);
            }), n.columnId = a.value, n.columnConfig = l;
        },
        render () {
            var e, t, n;
            try {
                const l = (t = (e = this.$slots).default) == null ? void 0 : t.call(e, {
                    row: {},
                    column: {},
                    $index: -1
                }), i = [];
                if (oe(l)) for (const o of l)((n = o.type) == null ? void 0 : n.name) === "ElTableColumn" || o.shapeFlag & 2 ? i.push(o) : o.type === Ke && oe(o.children) && o.children.forEach((a)=>{
                    a?.patchFlag !== 1024 && !Me(a?.children) && i.push(a);
                });
                return G("div", i);
            } catch  {
                return G("div", []);
            }
        }
    });
    const Hc = it(Lc, {
        TableColumn: Ea
    }), Wc = Jt(Ea), Vc = ze({
        type: {
            type: String,
            values: [
                "primary",
                "success",
                "info",
                "warning",
                "danger",
                ""
            ],
            default: ""
        },
        size: {
            type: String,
            values: As,
            default: ""
        },
        truncated: Boolean,
        lineClamp: {
            type: [
                String,
                Number
            ]
        },
        tag: {
            type: String,
            default: "span"
        }
    }), zc = q({
        name: "ElText"
    }), Uc = q({
        ...zc,
        props: Vc,
        setup (e) {
            const t = e, n = N(), l = jt(), i = ie("text"), c = L(()=>[
                    i.b(),
                    i.m(t.type),
                    i.m(l.value),
                    i.is("truncated", t.truncated),
                    i.is("line-clamp", !Oe(t.lineClamp))
                ]), o = or().title, a = ()=>{
                var s, r, u, d, f;
                if (o) return;
                let v = !1;
                const p = ((s = n.value) == null ? void 0 : s.textContent) || "";
                if (t.truncated) {
                    const g = (r = n.value) == null ? void 0 : r.offsetWidth, m = (u = n.value) == null ? void 0 : u.scrollWidth;
                    g && m && m > g && (v = !0);
                } else if (!Oe(t.lineClamp)) {
                    const g = (d = n.value) == null ? void 0 : d.offsetHeight, m = (f = n.value) == null ? void 0 : f.scrollHeight;
                    g && m && m > g && (v = !0);
                }
                v ? n.value.setAttribute("title", p) : n.value.removeAttribute("title");
            };
            return qe(a), Bn(a), (s, r)=>(M(), ne(rt(s.tag), {
                    ref_key: "textRef",
                    ref: n,
                    class: P(w(c)),
                    style: Le({
                        "-webkit-line-clamp": s.lineClamp
                    })
                }, {
                    default: I(()=>[
                            j(s.$slots, "default")
                        ]),
                    _: 3
                }, 8, [
                    "class",
                    "style"
                ]));
        }
    });
    var Kc = Se(Uc, [
        [
            "__file",
            "text.vue"
        ]
    ]);
    const Gc = it(Kc), Ra = Symbol("uploadContextKey"), jc = "ElUpload";
    class qc extends Error {
        constructor(t, n, l, i){
            super(t), this.name = "UploadAjaxError", this.status = n, this.method = l, this.url = i;
        }
    }
    function go(e, t, n) {
        let l;
        return n.response ? l = `${n.response.error || n.response}` : n.responseText ? l = `${n.responseText}` : l = `fail to ${t.method} ${e} ${n.status}`, new qc(l, n.status, t.method, e);
    }
    function Yc(e) {
        const t = e.responseText || e.response;
        if (!t) return t;
        try {
            return JSON.parse(t);
        } catch  {
            return t;
        }
    }
    const Qc = (e)=>{
        typeof XMLHttpRequest > "u" && Zt(jc, "XMLHttpRequest is undefined");
        const t = new XMLHttpRequest, n = e.action;
        t.upload && t.upload.addEventListener("progress", (c)=>{
            const o = c;
            o.percent = c.total > 0 ? c.loaded / c.total * 100 : 0, e.onProgress(o);
        });
        const l = new FormData;
        if (e.data) for (const [c, o] of Object.entries(e.data))oe(o) && o.length ? l.append(c, ...o) : l.append(c, o);
        l.append(e.filename, e.file, e.file.name), t.addEventListener("error", ()=>{
            e.onError(go(n, e, t));
        }), t.addEventListener("load", ()=>{
            if (t.status < 200 || t.status >= 300) return e.onError(go(n, e, t));
            e.onSuccess(Yc(t));
        }), t.open(e.method, n, !0), e.withCredentials && "withCredentials" in t && (t.withCredentials = !0);
        const i = e.headers || {};
        if (i instanceof Headers) i.forEach((c, o)=>t.setRequestHeader(o, c));
        else for (const [c, o] of Object.entries(i))_o(o) || t.setRequestHeader(c, String(o));
        return t.send(l), t;
    }, Ta = [
        "text",
        "picture",
        "picture-card"
    ];
    let Xc = 1;
    const yl = ()=>Date.now() + Xc++, Oa = ze({
        action: {
            type: String,
            default: "#"
        },
        headers: {
            type: J(Object)
        },
        method: {
            type: String,
            default: "post"
        },
        data: {
            type: J([
                Object,
                Function,
                Promise
            ]),
            default: ()=>at({})
        },
        multiple: Boolean,
        name: {
            type: String,
            default: "file"
        },
        drag: Boolean,
        withCredentials: Boolean,
        showFileList: {
            type: Boolean,
            default: !0
        },
        accept: {
            type: String,
            default: ""
        },
        fileList: {
            type: J(Array),
            default: ()=>at([])
        },
        autoUpload: {
            type: Boolean,
            default: !0
        },
        listType: {
            type: String,
            values: Ta,
            default: "text"
        },
        httpRequest: {
            type: J(Function),
            default: Qc
        },
        disabled: Boolean,
        limit: Number
    }), Jc = ze({
        ...Oa,
        beforeUpload: {
            type: J(Function),
            default: Fe
        },
        beforeRemove: {
            type: J(Function)
        },
        onRemove: {
            type: J(Function),
            default: Fe
        },
        onChange: {
            type: J(Function),
            default: Fe
        },
        onPreview: {
            type: J(Function),
            default: Fe
        },
        onSuccess: {
            type: J(Function),
            default: Fe
        },
        onProgress: {
            type: J(Function),
            default: Fe
        },
        onError: {
            type: J(Function),
            default: Fe
        },
        onExceed: {
            type: J(Function),
            default: Fe
        },
        crossorigin: {
            type: J(String)
        }
    }), Zc = ze({
        files: {
            type: J(Array),
            default: ()=>at([])
        },
        disabled: {
            type: Boolean,
            default: !1
        },
        handlePreview: {
            type: J(Function),
            default: Fe
        },
        listType: {
            type: String,
            values: Ta,
            default: "text"
        },
        crossorigin: {
            type: J(String)
        }
    }), ed = {
        remove: (e)=>!!e
    }, td = q({
        name: "ElUploadList"
    }), nd = q({
        ...td,
        props: Zc,
        emits: ed,
        setup (e, { emit: t }) {
            const n = e, { t: l } = In(), i = ie("upload"), c = ie("icon"), o = ie("list"), a = Xt(), s = N(!1), r = L(()=>[
                    i.b("list"),
                    i.bm("list", n.listType),
                    i.is("disabled", n.disabled)
                ]), u = (d)=>{
                t("remove", d);
            };
            return (d, f)=>(M(), ne(ar, {
                    tag: "ul",
                    class: P(w(r)),
                    name: w(o).b()
                }, {
                    default: I(()=>[
                            (M(!0), D(Ke, null, Ct(d.files, (v, p)=>(M(), D("li", {
                                    key: v.uid || v.name,
                                    class: P([
                                        w(i).be("list", "item"),
                                        w(i).is(v.status),
                                        {
                                            focusing: s.value
                                        }
                                    ]),
                                    tabindex: "0",
                                    onKeydown: ft((g)=>!w(a) && u(v), [
                                        "delete"
                                    ]),
                                    onFocus: (g)=>s.value = !0,
                                    onBlur: (g)=>s.value = !1,
                                    onClick: (g)=>s.value = !1
                                }, [
                                    j(d.$slots, "default", {
                                        file: v,
                                        index: p
                                    }, ()=>[
                                            d.listType === "picture" || v.status !== "uploading" && d.listType === "picture-card" ? (M(), D("img", {
                                                key: 0,
                                                class: P(w(i).be("list", "item-thumbnail")),
                                                src: v.url,
                                                crossorigin: d.crossorigin,
                                                alt: ""
                                            }, null, 10, [
                                                "src",
                                                "crossorigin"
                                            ])) : K("v-if", !0),
                                            v.status === "uploading" || d.listType !== "picture-card" ? (M(), D("div", {
                                                key: 1,
                                                class: P(w(i).be("list", "item-info"))
                                            }, [
                                                W("a", {
                                                    class: P(w(i).be("list", "item-name")),
                                                    onClick: be((g)=>d.handlePreview(v), [
                                                        "prevent"
                                                    ])
                                                }, [
                                                    _(w(Ve), {
                                                        class: P(w(c).m("document"))
                                                    }, {
                                                        default: I(()=>[
                                                                _(w(Fs))
                                                            ]),
                                                        _: 1
                                                    }, 8, [
                                                        "class"
                                                    ]),
                                                    W("span", {
                                                        class: P(w(i).be("list", "item-file-name")),
                                                        title: v.name
                                                    }, ae(v.name), 11, [
                                                        "title"
                                                    ])
                                                ], 10, [
                                                    "onClick"
                                                ]),
                                                v.status === "uploading" ? (M(), ne(w(Do), {
                                                    key: 0,
                                                    type: d.listType === "picture-card" ? "circle" : "line",
                                                    "stroke-width": d.listType === "picture-card" ? 6 : 2,
                                                    percentage: Number(v.percentage),
                                                    style: Le(d.listType === "picture-card" ? "" : "margin-top: 0.5rem")
                                                }, null, 8, [
                                                    "type",
                                                    "stroke-width",
                                                    "percentage",
                                                    "style"
                                                ])) : K("v-if", !0)
                                            ], 2)) : K("v-if", !0),
                                            W("label", {
                                                class: P(w(i).be("list", "item-status-label"))
                                            }, [
                                                d.listType === "text" ? (M(), ne(w(Ve), {
                                                    key: 0,
                                                    class: P([
                                                        w(c).m("upload-success"),
                                                        w(c).m("circle-check")
                                                    ])
                                                }, {
                                                    default: I(()=>[
                                                            _(w($s))
                                                        ]),
                                                    _: 1
                                                }, 8, [
                                                    "class"
                                                ])) : [
                                                    "picture-card",
                                                    "picture"
                                                ].includes(d.listType) ? (M(), ne(w(Ve), {
                                                    key: 1,
                                                    class: P([
                                                        w(c).m("upload-success"),
                                                        w(c).m("check")
                                                    ])
                                                }, {
                                                    default: I(()=>[
                                                            _(w(Is))
                                                        ]),
                                                    _: 1
                                                }, 8, [
                                                    "class"
                                                ])) : K("v-if", !0)
                                            ], 2),
                                            w(a) ? K("v-if", !0) : (M(), ne(w(Ve), {
                                                key: 2,
                                                class: P(w(c).m("close")),
                                                onClick: (g)=>u(v)
                                            }, {
                                                default: I(()=>[
                                                        _(w(_s))
                                                    ]),
                                                _: 2
                                            }, 1032, [
                                                "class",
                                                "onClick"
                                            ])),
                                            K(" Due to close btn only appears when li gets focused disappears after li gets blurred, thus keyboard navigation can never reach close btn"),
                                            K(" This is a bug which needs to be fixed "),
                                            K(" TODO: Fix the incorrect navigation interaction "),
                                            w(a) ? K("v-if", !0) : (M(), D("i", {
                                                key: 3,
                                                class: P(w(c).m("close-tip"))
                                            }, ae(w(l)("el.upload.deleteTip")), 3)),
                                            d.listType === "picture-card" ? (M(), D("span", {
                                                key: 4,
                                                class: P(w(i).be("list", "item-actions"))
                                            }, [
                                                W("span", {
                                                    class: P(w(i).be("list", "item-preview")),
                                                    onClick: (g)=>d.handlePreview(v)
                                                }, [
                                                    _(w(Ve), {
                                                        class: P(w(c).m("zoom-in"))
                                                    }, {
                                                        default: I(()=>[
                                                                _(w(Ds))
                                                            ]),
                                                        _: 1
                                                    }, 8, [
                                                        "class"
                                                    ])
                                                ], 10, [
                                                    "onClick"
                                                ]),
                                                w(a) ? K("v-if", !0) : (M(), D("span", {
                                                    key: 0,
                                                    class: P(w(i).be("list", "item-delete")),
                                                    onClick: (g)=>u(v)
                                                }, [
                                                    _(w(Ve), {
                                                        class: P(w(c).m("delete"))
                                                    }, {
                                                        default: I(()=>[
                                                                _(w(Bs))
                                                            ]),
                                                        _: 1
                                                    }, 8, [
                                                        "class"
                                                    ])
                                                ], 10, [
                                                    "onClick"
                                                ]))
                                            ], 2)) : K("v-if", !0)
                                        ])
                                ], 42, [
                                    "onKeydown",
                                    "onFocus",
                                    "onBlur",
                                    "onClick"
                                ]))), 128)),
                            j(d.$slots, "append")
                        ]),
                    _: 3
                }, 8, [
                    "class",
                    "name"
                ]));
        }
    });
    var mo = Se(nd, [
        [
            "__file",
            "upload-list.vue"
        ]
    ]);
    const ld = ze({
        disabled: {
            type: Boolean,
            default: !1
        }
    }), od = {
        file: (e)=>oe(e)
    }, ka = "ElUploadDrag", ad = q({
        name: ka
    }), sd = q({
        ...ad,
        props: ld,
        emits: od,
        setup (e, { emit: t }) {
            Ce(Ra) || Zt(ka, "usage: <el-upload><el-upload-dragger /></el-upload>");
            const l = ie("upload"), i = N(!1), c = Xt(), o = (s)=>{
                if (c.value) return;
                i.value = !1, s.stopPropagation();
                const r = Array.from(s.dataTransfer.files), u = s.dataTransfer.items || [];
                r.forEach((d, f)=>{
                    var v;
                    const p = u[f], g = (v = p?.webkitGetAsEntry) == null ? void 0 : v.call(p);
                    g && (d.isDirectory = g.isDirectory);
                }), t("file", r);
            }, a = ()=>{
                c.value || (i.value = !0);
            };
            return (s, r)=>(M(), D("div", {
                    class: P([
                        w(l).b("dragger"),
                        w(l).is("dragover", i.value)
                    ]),
                    onDrop: be(o, [
                        "prevent"
                    ]),
                    onDragover: be(a, [
                        "prevent"
                    ]),
                    onDragleave: be((u)=>i.value = !1, [
                        "prevent"
                    ])
                }, [
                    j(s.$slots, "default")
                ], 42, [
                    "onDrop",
                    "onDragover",
                    "onDragleave"
                ]));
        }
    });
    var rd = Se(sd, [
        [
            "__file",
            "upload-dragger.vue"
        ]
    ]);
    const id = ze({
        ...Oa,
        beforeUpload: {
            type: J(Function),
            default: Fe
        },
        onRemove: {
            type: J(Function),
            default: Fe
        },
        onStart: {
            type: J(Function),
            default: Fe
        },
        onSuccess: {
            type: J(Function),
            default: Fe
        },
        onProgress: {
            type: J(Function),
            default: Fe
        },
        onError: {
            type: J(Function),
            default: Fe
        },
        onExceed: {
            type: J(Function),
            default: Fe
        }
    }), ud = q({
        name: "ElUploadContent",
        inheritAttrs: !1
    }), cd = q({
        ...ud,
        props: id,
        setup (e, { expose: t }) {
            const n = e, l = ie("upload"), i = Xt(), c = Tn({}), o = Tn(), a = (g)=>{
                if (g.length === 0) return;
                const { autoUpload: m, limit: b, fileList: R, multiple: C, onStart: h, onExceed: y } = n;
                if (b && R.length + g.length > b) {
                    y(g, R);
                    return;
                }
                C || (g = g.slice(0, 1));
                for (const S of g){
                    const E = S;
                    E.uid = yl(), h(E), m && s(E);
                }
            }, s = async (g)=>{
                if (o.value.value = "", !n.beforeUpload) return u(g);
                let m, b = {};
                try {
                    const C = n.data, h = n.beforeUpload(g);
                    b = al(n.data) ? eo(n.data) : n.data, m = await h, al(n.data) && mt(C, b) && (b = eo(n.data));
                } catch  {
                    m = !1;
                }
                if (m === !1) {
                    n.onRemove(g);
                    return;
                }
                let R = g;
                m instanceof Blob && (m instanceof File ? R = m : R = new File([
                    m
                ], g.name, {
                    type: g.type
                })), u(Object.assign(R, {
                    uid: g.uid
                }), b);
            }, r = async (g, m)=>ye(g) ? g(m) : g, u = async (g, m)=>{
                const { headers: b, data: R, method: C, withCredentials: h, name: y, action: S, onProgress: E, onSuccess: k, onError: T, httpRequest: $ } = n;
                try {
                    m = await r(m ?? R, g);
                } catch  {
                    n.onRemove(g);
                    return;
                }
                const { uid: z } = g, x = {
                    headers: b || {},
                    withCredentials: h,
                    file: g,
                    data: m,
                    method: C,
                    filename: y,
                    action: S,
                    onProgress: (te)=>{
                        E(te, g);
                    },
                    onSuccess: (te)=>{
                        k(te, g), delete c.value[z];
                    },
                    onError: (te)=>{
                        T(te, g), delete c.value[z];
                    }
                }, Y = $(x);
                c.value[z] = Y, Y instanceof Promise && Y.then(x.onSuccess, x.onError);
            }, d = (g)=>{
                const m = g.target.files;
                m && a(Array.from(m));
            }, f = ()=>{
                i.value || (o.value.value = "", o.value.click());
            }, v = ()=>{
                f();
            };
            return t({
                abort: (g)=>{
                    xs(c.value).filter(g ? ([b])=>String(g.uid) === b : ()=>!0).forEach(([b, R])=>{
                        R instanceof XMLHttpRequest && R.abort(), delete c.value[b];
                    });
                },
                upload: s
            }), (g, m)=>(M(), D("div", {
                    class: P([
                        w(l).b(),
                        w(l).m(g.listType),
                        w(l).is("drag", g.drag),
                        w(l).is("disabled", w(i))
                    ]),
                    tabindex: w(i) ? "-1" : "0",
                    onClick: f,
                    onKeydown: ft(be(v, [
                        "self"
                    ]), [
                        "enter",
                        "space"
                    ])
                }, [
                    g.drag ? (M(), ne(rd, {
                        key: 0,
                        disabled: w(i),
                        onFile: a
                    }, {
                        default: I(()=>[
                                j(g.$slots, "default")
                            ]),
                        _: 3
                    }, 8, [
                        "disabled"
                    ])) : j(g.$slots, "default", {
                        key: 1
                    }),
                    W("input", {
                        ref_key: "inputRef",
                        ref: o,
                        class: P(w(l).e("input")),
                        name: g.name,
                        disabled: w(i),
                        multiple: g.multiple,
                        accept: g.accept,
                        type: "file",
                        onChange: d,
                        onClick: be(()=>{}, [
                            "stop"
                        ])
                    }, null, 42, [
                        "name",
                        "disabled",
                        "multiple",
                        "accept",
                        "onClick"
                    ])
                ], 42, [
                    "tabindex",
                    "onKeydown"
                ]));
        }
    });
    var bo = Se(cd, [
        [
            "__file",
            "upload-content.vue"
        ]
    ]);
    const yo = "ElUpload", Co = (e)=>{
        var t;
        (t = e.url) != null && t.startsWith("blob:") && URL.revokeObjectURL(e.url);
    }, dd = (e, t)=>{
        const n = Hs(e, "fileList", void 0, {
            passive: !0
        }), l = (v)=>n.value.find((p)=>p.uid === v.uid);
        function i(v) {
            var p;
            (p = t.value) == null || p.abort(v);
        }
        function c(v = [
            "ready",
            "uploading",
            "success",
            "fail"
        ]) {
            n.value = n.value.filter((p)=>!v.includes(p.status));
        }
        function o(v) {
            n.value = n.value.filter((p)=>p.uid !== v.uid);
        }
        const a = (v, p)=>{
            const g = l(p);
            g && (console.error(v), g.status = "fail", o(g), e.onError(v, g, n.value), e.onChange(g, n.value));
        }, s = (v, p)=>{
            const g = l(p);
            g && (e.onProgress(v, g, n.value), g.status = "uploading", g.percentage = Math.round(v.percent));
        }, r = (v, p)=>{
            const g = l(p);
            g && (g.status = "success", g.response = v, e.onSuccess(v, g, n.value), e.onChange(g, n.value));
        }, u = (v)=>{
            _o(v.uid) && (v.uid = yl());
            const p = {
                name: v.name,
                percentage: 0,
                status: "ready",
                size: v.size,
                raw: v,
                uid: v.uid
            };
            if (e.listType === "picture-card" || e.listType === "picture") try {
                p.url = URL.createObjectURL(v);
            } catch (g) {
                Gt(yo, g.message), e.onError(g, p, n.value);
            }
            n.value = [
                ...n.value,
                p
            ], e.onChange(p, n.value);
        }, d = async (v)=>{
            const p = v instanceof File ? l(v) : v;
            p || Zt(yo, "file to be removed not found");
            const g = (m)=>{
                i(m), o(m), e.onRemove(m, n.value), Co(m);
            };
            e.beforeRemove ? await e.beforeRemove(p, n.value) !== !1 && g(p) : g(p);
        };
        function f() {
            n.value.filter(({ status: v })=>v === "ready").forEach(({ raw: v })=>{
                var p;
                return v && ((p = t.value) == null ? void 0 : p.upload(v));
            });
        }
        return fe(()=>e.listType, (v)=>{
            v !== "picture-card" && v !== "picture" || (n.value = n.value.map((p)=>{
                const { raw: g, url: m } = p;
                if (!m && g) try {
                    p.url = URL.createObjectURL(g);
                } catch (b) {
                    e.onError(b, p, n.value);
                }
                return p;
            }));
        }), fe(n, (v)=>{
            for (const p of v)p.uid || (p.uid = yl()), p.status || (p.status = "success");
        }, {
            immediate: !0,
            deep: !0
        }), {
            uploadFiles: n,
            abort: i,
            clearFiles: c,
            handleError: a,
            handleProgress: s,
            handleStart: u,
            handleSuccess: r,
            handleRemove: d,
            submit: f,
            revokeFileObjectURL: Co
        };
    }, fd = q({
        name: "ElUpload"
    }), pd = q({
        ...fd,
        props: Jc,
        setup (e, { expose: t }) {
            const n = e, l = Xt(), i = Tn(), { abort: c, submit: o, clearFiles: a, uploadFiles: s, handleStart: r, handleError: u, handleRemove: d, handleSuccess: f, handleProgress: v, revokeFileObjectURL: p } = dd(n, i), g = L(()=>n.listType === "picture-card"), m = L(()=>({
                    ...n,
                    fileList: s.value,
                    onStart: r,
                    onProgress: v,
                    onSuccess: f,
                    onError: u,
                    onRemove: d
                }));
            return tn(()=>{
                s.value.forEach(p);
            }), Dt(Ra, {
                accept: sr(n, "accept")
            }), t({
                abort: c,
                submit: o,
                clearFiles: a,
                handleStart: r,
                handleRemove: d
            }), (b, R)=>(M(), D("div", null, [
                    w(g) && b.showFileList ? (M(), ne(mo, {
                        key: 0,
                        disabled: w(l),
                        "list-type": b.listType,
                        files: w(s),
                        crossorigin: b.crossorigin,
                        "handle-preview": b.onPreview,
                        onRemove: w(d)
                    }, Ql({
                        append: I(()=>[
                                _(bo, Xl({
                                    ref_key: "uploadRef",
                                    ref: i
                                }, w(m)), {
                                    default: I(()=>[
                                            b.$slots.trigger ? j(b.$slots, "trigger", {
                                                key: 0
                                            }) : K("v-if", !0),
                                            !b.$slots.trigger && b.$slots.default ? j(b.$slots, "default", {
                                                key: 1
                                            }) : K("v-if", !0)
                                        ]),
                                    _: 3
                                }, 16)
                            ]),
                        _: 2
                    }, [
                        b.$slots.file ? {
                            name: "default",
                            fn: I(({ file: C, index: h })=>[
                                    j(b.$slots, "file", {
                                        file: C,
                                        index: h
                                    })
                                ])
                        } : void 0
                    ]), 1032, [
                        "disabled",
                        "list-type",
                        "files",
                        "crossorigin",
                        "handle-preview",
                        "onRemove"
                    ])) : K("v-if", !0),
                    !w(g) || w(g) && !b.showFileList ? (M(), ne(bo, Xl({
                        key: 1,
                        ref_key: "uploadRef",
                        ref: i
                    }, w(m)), {
                        default: I(()=>[
                                b.$slots.trigger ? j(b.$slots, "trigger", {
                                    key: 0
                                }) : K("v-if", !0),
                                !b.$slots.trigger && b.$slots.default ? j(b.$slots, "default", {
                                    key: 1
                                }) : K("v-if", !0)
                            ]),
                        _: 3
                    }, 16)) : K("v-if", !0),
                    b.$slots.trigger ? j(b.$slots, "default", {
                        key: 2
                    }) : K("v-if", !0),
                    j(b.$slots, "tip"),
                    !w(g) && b.showFileList ? (M(), ne(mo, {
                        key: 3,
                        disabled: w(l),
                        "list-type": b.listType,
                        files: w(s),
                        crossorigin: b.crossorigin,
                        "handle-preview": b.onPreview,
                        onRemove: w(d)
                    }, Ql({
                        _: 2
                    }, [
                        b.$slots.file ? {
                            name: "default",
                            fn: I(({ file: C, index: h })=>[
                                    j(b.$slots, "file", {
                                        file: C,
                                        index: h
                                    })
                                ])
                        } : void 0
                    ]), 1032, [
                        "disabled",
                        "list-type",
                        "files",
                        "crossorigin",
                        "handle-preview",
                        "onRemove"
                    ])) : K("v-if", !0)
                ]));
        }
    });
    var vd = Se(pd, [
        [
            "__file",
            "upload.vue"
        ]
    ]);
    const hd = it(vd), Na = [
        "success",
        "info",
        "warning",
        "error"
    ], De = at({
        customClass: "",
        dangerouslyUseHTMLString: !1,
        duration: 3e3,
        icon: void 0,
        id: "",
        message: "",
        onClose: void 0,
        showClose: !1,
        type: "info",
        plain: !1,
        offset: 16,
        zIndex: 0,
        grouping: !1,
        repeatNum: 1,
        appendTo: Xe ? document.body : void 0
    }), gd = ze({
        customClass: {
            type: String,
            default: De.customClass
        },
        dangerouslyUseHTMLString: {
            type: Boolean,
            default: De.dangerouslyUseHTMLString
        },
        duration: {
            type: Number,
            default: De.duration
        },
        icon: {
            type: nl,
            default: De.icon
        },
        id: {
            type: String,
            default: De.id
        },
        message: {
            type: J([
                String,
                Object,
                Function
            ]),
            default: De.message
        },
        onClose: {
            type: J(Function),
            default: De.onClose
        },
        showClose: {
            type: Boolean,
            default: De.showClose
        },
        type: {
            type: String,
            values: Na,
            default: De.type
        },
        plain: {
            type: Boolean,
            default: De.plain
        },
        offset: {
            type: Number,
            default: De.offset
        },
        zIndex: {
            type: Number,
            default: De.zIndex
        },
        grouping: {
            type: Boolean,
            default: De.grouping
        },
        repeatNum: {
            type: Number,
            default: De.repeatNum
        }
    }), md = {
        destroy: ()=>!0
    }, Qe = rr([]), bd = (e)=>{
        const t = Qe.findIndex((i)=>i.id === e), n = Qe[t];
        let l;
        return t > 0 && (l = Qe[t - 1]), {
            current: n,
            prev: l
        };
    }, yd = (e)=>{
        const { prev: t } = bd(e);
        return t ? t.vm.exposed.bottom.value : 0;
    }, Cd = (e, t)=>Qe.findIndex((l)=>l.id === e) > 0 ? 16 : t, wd = q({
        name: "ElMessage"
    }), Sd = q({
        ...wd,
        props: gd,
        emits: md,
        setup (e, { expose: t, emit: n }) {
            const l = e, { Close: i } = Vs, c = N(!1), { ns: o, zIndex: a } = Ws("message"), { currentZIndex: s, nextZIndex: r } = a, u = N(), d = N(!1), f = N(0);
            let v;
            const p = L(()=>l.type ? l.type === "error" ? "danger" : l.type : "info"), g = L(()=>{
                const T = l.type;
                return {
                    [o.bm("icon", T)]: T && ql[T]
                };
            }), m = L(()=>l.icon || ql[l.type] || ""), b = L(()=>yd(l.id)), R = L(()=>Cd(l.id, l.offset) + b.value), C = L(()=>f.value + R.value), h = L(()=>({
                    top: `${R.value}px`,
                    zIndex: s.value
                }));
            function y() {
                l.duration !== 0 && ({ stop: v } = zs(()=>{
                    E();
                }, l.duration));
            }
            function S() {
                v?.();
            }
            function E() {
                d.value = !1, Ne(()=>{
                    var T;
                    c.value || ((T = l.onClose) == null || T.call(l), n("destroy"));
                });
            }
            function k({ code: T }) {
                T === Mo.esc && E();
            }
            return qe(()=>{
                y(), r(), d.value = !0;
            }), fe(()=>l.repeatNum, ()=>{
                S(), y();
            }), ll(document, "keydown", k), nt(u, ()=>{
                f.value = u.value.getBoundingClientRect().height;
            }), t({
                visible: d,
                bottom: C,
                close: E
            }), (T, $)=>(M(), ne(Ho, {
                    name: w(o).b("fade"),
                    onBeforeEnter: (z)=>c.value = !0,
                    onBeforeLeave: T.onClose,
                    onAfterLeave: (z)=>T.$emit("destroy"),
                    persisted: ""
                }, {
                    default: I(()=>[
                            Be(W("div", {
                                id: T.id,
                                ref_key: "messageRef",
                                ref: u,
                                class: P([
                                    w(o).b(),
                                    {
                                        [w(o).m(T.type)]: T.type
                                    },
                                    w(o).is("closable", T.showClose),
                                    w(o).is("plain", T.plain),
                                    T.customClass
                                ]),
                                style: Le(w(h)),
                                role: "alert",
                                onMouseenter: S,
                                onMouseleave: y
                            }, [
                                T.repeatNum > 1 ? (M(), ne(w(Ii), {
                                    key: 0,
                                    value: T.repeatNum,
                                    type: w(p),
                                    class: P(w(o).e("badge"))
                                }, null, 8, [
                                    "value",
                                    "type",
                                    "class"
                                ])) : K("v-if", !0),
                                w(m) ? (M(), ne(w(Ve), {
                                    key: 1,
                                    class: P([
                                        w(o).e("icon"),
                                        w(g)
                                    ])
                                }, {
                                    default: I(()=>[
                                            (M(), ne(rt(w(m))))
                                        ]),
                                    _: 1
                                }, 8, [
                                    "class"
                                ])) : K("v-if", !0),
                                j(T.$slots, "default", {}, ()=>[
                                        T.dangerouslyUseHTMLString ? (M(), D(Ke, {
                                            key: 1
                                        }, [
                                            K(" Caution here, message could've been compromised, never use user's input as message "),
                                            W("p", {
                                                class: P(w(o).e("content")),
                                                innerHTML: T.message
                                            }, null, 10, [
                                                "innerHTML"
                                            ])
                                        ], 2112)) : (M(), D("p", {
                                            key: 0,
                                            class: P(w(o).e("content"))
                                        }, ae(T.message), 3))
                                    ]),
                                T.showClose ? (M(), ne(w(Ve), {
                                    key: 2,
                                    class: P(w(o).e("closeBtn")),
                                    onClick: be(E, [
                                        "stop"
                                    ])
                                }, {
                                    default: I(()=>[
                                            _(w(i))
                                        ]),
                                    _: 1
                                }, 8, [
                                    "class",
                                    "onClick"
                                ])) : K("v-if", !0)
                            ], 46, [
                                "id"
                            ]), [
                                [
                                    yt,
                                    d.value
                                ]
                            ])
                        ]),
                    _: 3
                }, 8, [
                    "name",
                    "onBeforeEnter",
                    "onBeforeLeave",
                    "onAfterLeave"
                ]));
        }
    });
    var Ed = Se(Sd, [
        [
            "__file",
            "message.vue"
        ]
    ]);
    let Rd = 1;
    const La = (e)=>{
        const t = !e || Me(e) || Dn(e) || ye(e) ? {
            message: e
        } : e, n = {
            ...De,
            ...t
        };
        if (!n.appendTo) n.appendTo = document.body;
        else if (Me(n.appendTo)) {
            let l = document.querySelector(n.appendTo);
            Tl(l) || (l = document.body), n.appendTo = l;
        }
        return Ge(et.grouping) && !n.grouping && (n.grouping = et.grouping), Ie(et.duration) && n.duration === 3e3 && (n.duration = et.duration), Ie(et.offset) && n.offset === 16 && (n.offset = et.offset), Ge(et.showClose) && !n.showClose && (n.showClose = et.showClose), n;
    }, Td = (e)=>{
        const t = Qe.indexOf(e);
        if (t === -1) return;
        Qe.splice(t, 1);
        const { handler: n } = e;
        n.close();
    }, Od = ({ appendTo: e, ...t }, n)=>{
        const l = `message_${Rd++}`, i = t.onClose, c = document.createElement("div"), o = {
            ...t,
            id: l,
            onClose: ()=>{
                i?.(), Td(u);
            },
            onDestroy: ()=>{
                On(null, c);
            }
        }, a = _(Ed, o, ye(o.message) || Dn(o.message) ? {
            default: ye(o.message) ? o.message : ()=>o.message
        } : null);
        a.appContext = n || _t._context, On(a, c), e.appendChild(c.firstElementChild);
        const s = a.component, u = {
            id: l,
            vnode: a,
            vm: s,
            handler: {
                close: ()=>{
                    s.exposed.close();
                }
            },
            props: a.component.props
        };
        return u;
    }, _t = (e = {}, t)=>{
        if (!Xe) return {
            close: ()=>{}
        };
        const n = La(e);
        if (n.grouping && Qe.length) {
            const i = Qe.find(({ vnode: c })=>{
                var o;
                return ((o = c.props) == null ? void 0 : o.message) === n.message;
            });
            if (i) return i.props.repeatNum += 1, i.props.type = n.type, i.handler;
        }
        if (Ie(et.max) && Qe.length >= et.max) return {
            close: ()=>{}
        };
        const l = Od(n, t);
        return Qe.push(l), l.handler;
    };
    Na.forEach((e)=>{
        _t[e] = (t = {}, n)=>{
            const l = La(t);
            return _t({
                ...l,
                type: e
            }, n);
        };
    });
    function kd(e) {
        const t = [
            ...Qe
        ];
        for (const n of t)(!e || e === n.props.type) && n.handler.close();
    }
    _t.closeAll = kd;
    _t._context = null;
    const wo = Us(_t, "$message");
    var lt = function() {
        return lt = Object.assign || function(t) {
            for(var n, l = 1, i = arguments.length; l < i; l++){
                n = arguments[l];
                for(var c in n)Object.prototype.hasOwnProperty.call(n, c) && (t[c] = n[c]);
            }
            return t;
        }, lt.apply(this, arguments);
    };
    var wt;
    (function(e) {
        var t = function() {
            function o(a, s, r, u) {
                if (this.version = a, this.errorCorrectionLevel = s, this.modules = [], this.isFunction = [], a < o.MIN_VERSION || a > o.MAX_VERSION) throw new RangeError("Version value out of range");
                if (u < -1 || u > 7) throw new RangeError("Mask value out of range");
                this.size = a * 4 + 17;
                for(var d = [], f = 0; f < this.size; f++)d.push(!1);
                for(var f = 0; f < this.size; f++)this.modules.push(d.slice()), this.isFunction.push(d.slice());
                this.drawFunctionPatterns();
                var v = this.addEccAndInterleave(r);
                if (this.drawCodewords(v), u == -1) for(var p = 1e9, f = 0; f < 8; f++){
                    this.applyMask(f), this.drawFormatBits(f);
                    var g = this.getPenaltyScore();
                    g < p && (u = f, p = g), this.applyMask(f);
                }
                i(0 <= u && u <= 7), this.mask = u, this.applyMask(u), this.drawFormatBits(u), this.isFunction = [];
            }
            return o.encodeText = function(a, s) {
                var r = e.QrSegment.makeSegments(a);
                return o.encodeSegments(r, s);
            }, o.encodeBinary = function(a, s) {
                var r = e.QrSegment.makeBytes(a);
                return o.encodeSegments([
                    r
                ], s);
            }, o.encodeSegments = function(a, s, r, u, d, f) {
                if (r === void 0 && (r = 1), u === void 0 && (u = 40), d === void 0 && (d = -1), f === void 0 && (f = !0), !(o.MIN_VERSION <= r && r <= u && u <= o.MAX_VERSION) || d < -1 || d > 7) throw new RangeError("Invalid value");
                var v, p;
                for(v = r;; v++){
                    var g = o.getNumDataCodewords(v, s) * 8, m = c.getTotalBits(a, v);
                    if (m <= g) {
                        p = m;
                        break;
                    }
                    if (v >= u) throw new RangeError("Data too long");
                }
                for(var b = 0, R = [
                    o.Ecc.MEDIUM,
                    o.Ecc.QUARTILE,
                    o.Ecc.HIGH
                ]; b < R.length; b++){
                    var C = R[b];
                    f && p <= o.getNumDataCodewords(v, C) * 8 && (s = C);
                }
                for(var h = [], y = 0, S = a; y < S.length; y++){
                    var E = S[y];
                    n(E.mode.modeBits, 4, h), n(E.numChars, E.mode.numCharCountBits(v), h);
                    for(var k = 0, T = E.getData(); k < T.length; k++){
                        var $ = T[k];
                        h.push($);
                    }
                }
                i(h.length == p);
                var z = o.getNumDataCodewords(v, s) * 8;
                i(h.length <= z), n(0, Math.min(4, z - h.length), h), n(0, (8 - h.length % 8) % 8, h), i(h.length % 8 == 0);
                for(var x = 236; h.length < z; x ^= 253)n(x, 8, h);
                for(var Y = []; Y.length * 8 < h.length;)Y.push(0);
                return h.forEach(function(te, V) {
                    return Y[V >>> 3] |= te << 7 - (V & 7);
                }), new o(v, s, Y, d);
            }, o.prototype.getModule = function(a, s) {
                return 0 <= a && a < this.size && 0 <= s && s < this.size && this.modules[s][a];
            }, o.prototype.getModules = function() {
                return this.modules;
            }, o.prototype.drawFunctionPatterns = function() {
                for(var a = 0; a < this.size; a++)this.setFunctionModule(6, a, a % 2 == 0), this.setFunctionModule(a, 6, a % 2 == 0);
                this.drawFinderPattern(3, 3), this.drawFinderPattern(this.size - 4, 3), this.drawFinderPattern(3, this.size - 4);
                for(var s = this.getAlignmentPatternPositions(), r = s.length, a = 0; a < r; a++)for(var u = 0; u < r; u++)a == 0 && u == 0 || a == 0 && u == r - 1 || a == r - 1 && u == 0 || this.drawAlignmentPattern(s[a], s[u]);
                this.drawFormatBits(0), this.drawVersion();
            }, o.prototype.drawFormatBits = function(a) {
                for(var s = this.errorCorrectionLevel.formatBits << 3 | a, r = s, u = 0; u < 10; u++)r = r << 1 ^ (r >>> 9) * 1335;
                var d = (s << 10 | r) ^ 21522;
                i(d >>> 15 == 0);
                for(var u = 0; u <= 5; u++)this.setFunctionModule(8, u, l(d, u));
                this.setFunctionModule(8, 7, l(d, 6)), this.setFunctionModule(8, 8, l(d, 7)), this.setFunctionModule(7, 8, l(d, 8));
                for(var u = 9; u < 15; u++)this.setFunctionModule(14 - u, 8, l(d, u));
                for(var u = 0; u < 8; u++)this.setFunctionModule(this.size - 1 - u, 8, l(d, u));
                for(var u = 8; u < 15; u++)this.setFunctionModule(8, this.size - 15 + u, l(d, u));
                this.setFunctionModule(8, this.size - 8, !0);
            }, o.prototype.drawVersion = function() {
                if (!(this.version < 7)) {
                    for(var a = this.version, s = 0; s < 12; s++)a = a << 1 ^ (a >>> 11) * 7973;
                    var r = this.version << 12 | a;
                    i(r >>> 18 == 0);
                    for(var s = 0; s < 18; s++){
                        var u = l(r, s), d = this.size - 11 + s % 3, f = Math.floor(s / 3);
                        this.setFunctionModule(d, f, u), this.setFunctionModule(f, d, u);
                    }
                }
            }, o.prototype.drawFinderPattern = function(a, s) {
                for(var r = -4; r <= 4; r++)for(var u = -4; u <= 4; u++){
                    var d = Math.max(Math.abs(u), Math.abs(r)), f = a + u, v = s + r;
                    0 <= f && f < this.size && 0 <= v && v < this.size && this.setFunctionModule(f, v, d != 2 && d != 4);
                }
            }, o.prototype.drawAlignmentPattern = function(a, s) {
                for(var r = -2; r <= 2; r++)for(var u = -2; u <= 2; u++)this.setFunctionModule(a + u, s + r, Math.max(Math.abs(u), Math.abs(r)) != 1);
            }, o.prototype.setFunctionModule = function(a, s, r) {
                this.modules[s][a] = r, this.isFunction[s][a] = !0;
            }, o.prototype.addEccAndInterleave = function(a) {
                var s = this.version, r = this.errorCorrectionLevel;
                if (a.length != o.getNumDataCodewords(s, r)) throw new RangeError("Invalid argument");
                for(var u = o.NUM_ERROR_CORRECTION_BLOCKS[r.ordinal][s], d = o.ECC_CODEWORDS_PER_BLOCK[r.ordinal][s], f = Math.floor(o.getNumRawDataModules(s) / 8), v = u - f % u, p = Math.floor(f / u), g = [], m = o.reedSolomonComputeDivisor(d), b = 0, R = 0; b < u; b++){
                    var C = a.slice(R, R + p - d + (b < v ? 0 : 1));
                    R += C.length;
                    var h = o.reedSolomonComputeRemainder(C, m);
                    b < v && C.push(0), g.push(C.concat(h));
                }
                for(var y = [], S = function(E) {
                    g.forEach(function(k, T) {
                        (E != p - d || T >= v) && y.push(k[E]);
                    });
                }, b = 0; b < g[0].length; b++)S(b);
                return i(y.length == f), y;
            }, o.prototype.drawCodewords = function(a) {
                if (a.length != Math.floor(o.getNumRawDataModules(this.version) / 8)) throw new RangeError("Invalid argument");
                for(var s = 0, r = this.size - 1; r >= 1; r -= 2){
                    r == 6 && (r = 5);
                    for(var u = 0; u < this.size; u++)for(var d = 0; d < 2; d++){
                        var f = r - d, v = (r + 1 & 2) == 0, p = v ? this.size - 1 - u : u;
                        !this.isFunction[p][f] && s < a.length * 8 && (this.modules[p][f] = l(a[s >>> 3], 7 - (s & 7)), s++);
                    }
                }
                i(s == a.length * 8);
            }, o.prototype.applyMask = function(a) {
                if (a < 0 || a > 7) throw new RangeError("Mask value out of range");
                for(var s = 0; s < this.size; s++)for(var r = 0; r < this.size; r++){
                    var u = void 0;
                    switch(a){
                        case 0:
                            u = (r + s) % 2 == 0;
                            break;
                        case 1:
                            u = s % 2 == 0;
                            break;
                        case 2:
                            u = r % 3 == 0;
                            break;
                        case 3:
                            u = (r + s) % 3 == 0;
                            break;
                        case 4:
                            u = (Math.floor(r / 3) + Math.floor(s / 2)) % 2 == 0;
                            break;
                        case 5:
                            u = r * s % 2 + r * s % 3 == 0;
                            break;
                        case 6:
                            u = (r * s % 2 + r * s % 3) % 2 == 0;
                            break;
                        case 7:
                            u = ((r + s) % 2 + r * s % 3) % 2 == 0;
                            break;
                        default:
                            throw new Error("Unreachable");
                    }
                    !this.isFunction[s][r] && u && (this.modules[s][r] = !this.modules[s][r]);
                }
            }, o.prototype.getPenaltyScore = function() {
                for(var a = 0, s = 0; s < this.size; s++){
                    for(var r = !1, u = 0, d = [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ], f = 0; f < this.size; f++)this.modules[s][f] == r ? (u++, u == 5 ? a += o.PENALTY_N1 : u > 5 && a++) : (this.finderPenaltyAddHistory(u, d), r || (a += this.finderPenaltyCountPatterns(d) * o.PENALTY_N3), r = this.modules[s][f], u = 1);
                    a += this.finderPenaltyTerminateAndCount(r, u, d) * o.PENALTY_N3;
                }
                for(var f = 0; f < this.size; f++){
                    for(var r = !1, v = 0, d = [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ], s = 0; s < this.size; s++)this.modules[s][f] == r ? (v++, v == 5 ? a += o.PENALTY_N1 : v > 5 && a++) : (this.finderPenaltyAddHistory(v, d), r || (a += this.finderPenaltyCountPatterns(d) * o.PENALTY_N3), r = this.modules[s][f], v = 1);
                    a += this.finderPenaltyTerminateAndCount(r, v, d) * o.PENALTY_N3;
                }
                for(var s = 0; s < this.size - 1; s++)for(var f = 0; f < this.size - 1; f++){
                    var p = this.modules[s][f];
                    p == this.modules[s][f + 1] && p == this.modules[s + 1][f] && p == this.modules[s + 1][f + 1] && (a += o.PENALTY_N2);
                }
                for(var g = 0, m = 0, b = this.modules; m < b.length; m++){
                    var R = b[m];
                    g = R.reduce(function(y, S) {
                        return y + (S ? 1 : 0);
                    }, g);
                }
                var C = this.size * this.size, h = Math.ceil(Math.abs(g * 20 - C * 10) / C) - 1;
                return i(0 <= h && h <= 9), a += h * o.PENALTY_N4, i(0 <= a && a <= 2568888), a;
            }, o.prototype.getAlignmentPatternPositions = function() {
                if (this.version == 1) return [];
                for(var a = Math.floor(this.version / 7) + 2, s = Math.floor((this.version * 8 + a * 3 + 5) / (a * 4 - 4)) * 2, r = [
                    6
                ], u = this.size - 7; r.length < a; u -= s)r.splice(1, 0, u);
                return r;
            }, o.getNumRawDataModules = function(a) {
                if (a < o.MIN_VERSION || a > o.MAX_VERSION) throw new RangeError("Version number out of range");
                var s = (16 * a + 128) * a + 64;
                if (a >= 2) {
                    var r = Math.floor(a / 7) + 2;
                    s -= (25 * r - 10) * r - 55, a >= 7 && (s -= 36);
                }
                return i(208 <= s && s <= 29648), s;
            }, o.getNumDataCodewords = function(a, s) {
                return Math.floor(o.getNumRawDataModules(a) / 8) - o.ECC_CODEWORDS_PER_BLOCK[s.ordinal][a] * o.NUM_ERROR_CORRECTION_BLOCKS[s.ordinal][a];
            }, o.reedSolomonComputeDivisor = function(a) {
                if (a < 1 || a > 255) throw new RangeError("Degree out of range");
                for(var s = [], r = 0; r < a - 1; r++)s.push(0);
                s.push(1);
                for(var u = 1, r = 0; r < a; r++){
                    for(var d = 0; d < s.length; d++)s[d] = o.reedSolomonMultiply(s[d], u), d + 1 < s.length && (s[d] ^= s[d + 1]);
                    u = o.reedSolomonMultiply(u, 2);
                }
                return s;
            }, o.reedSolomonComputeRemainder = function(a, s) {
                for(var r = s.map(function(p) {
                    return 0;
                }), u = function(p) {
                    var g = p ^ r.shift();
                    r.push(0), s.forEach(function(m, b) {
                        return r[b] ^= o.reedSolomonMultiply(m, g);
                    });
                }, d = 0, f = a; d < f.length; d++){
                    var v = f[d];
                    u(v);
                }
                return r;
            }, o.reedSolomonMultiply = function(a, s) {
                if (a >>> 8 || s >>> 8) throw new RangeError("Byte out of range");
                for(var r = 0, u = 7; u >= 0; u--)r = r << 1 ^ (r >>> 7) * 285, r ^= (s >>> u & 1) * a;
                return i(r >>> 8 == 0), r;
            }, o.prototype.finderPenaltyCountPatterns = function(a) {
                var s = a[1];
                i(s <= this.size * 3);
                var r = s > 0 && a[2] == s && a[3] == s * 3 && a[4] == s && a[5] == s;
                return (r && a[0] >= s * 4 && a[6] >= s ? 1 : 0) + (r && a[6] >= s * 4 && a[0] >= s ? 1 : 0);
            }, o.prototype.finderPenaltyTerminateAndCount = function(a, s, r) {
                return a && (this.finderPenaltyAddHistory(s, r), s = 0), s += this.size, this.finderPenaltyAddHistory(s, r), this.finderPenaltyCountPatterns(r);
            }, o.prototype.finderPenaltyAddHistory = function(a, s) {
                s[0] == 0 && (a += this.size), s.pop(), s.unshift(a);
            }, o.MIN_VERSION = 1, o.MAX_VERSION = 40, o.PENALTY_N1 = 3, o.PENALTY_N2 = 3, o.PENALTY_N3 = 40, o.PENALTY_N4 = 10, o.ECC_CODEWORDS_PER_BLOCK = [
                [
                    -1,
                    7,
                    10,
                    15,
                    20,
                    26,
                    18,
                    20,
                    24,
                    30,
                    18,
                    20,
                    24,
                    26,
                    30,
                    22,
                    24,
                    28,
                    30,
                    28,
                    28,
                    28,
                    28,
                    30,
                    30,
                    26,
                    28,
                    30,
                    30,
                    30,
                    30,
                    30,
                    30,
                    30,
                    30,
                    30,
                    30,
                    30,
                    30,
                    30,
                    30
                ],
                [
                    -1,
                    10,
                    16,
                    26,
                    18,
                    24,
                    16,
                    18,
                    22,
                    22,
                    26,
                    30,
                    22,
                    22,
                    24,
                    24,
                    28,
                    28,
                    26,
                    26,
                    26,
                    26,
                    28,
                    28,
                    28,
                    28,
                    28,
                    28,
                    28,
                    28,
                    28,
                    28,
                    28,
                    28,
                    28,
                    28,
                    28,
                    28,
                    28,
                    28,
                    28
                ],
                [
                    -1,
                    13,
                    22,
                    18,
                    26,
                    18,
                    24,
                    18,
                    22,
                    20,
                    24,
                    28,
                    26,
                    24,
                    20,
                    30,
                    24,
                    28,
                    28,
                    26,
                    30,
                    28,
                    30,
                    30,
                    30,
                    30,
                    28,
                    30,
                    30,
                    30,
                    30,
                    30,
                    30,
                    30,
                    30,
                    30,
                    30,
                    30,
                    30,
                    30,
                    30
                ],
                [
                    -1,
                    17,
                    28,
                    22,
                    16,
                    22,
                    28,
                    26,
                    26,
                    24,
                    28,
                    24,
                    28,
                    22,
                    24,
                    24,
                    30,
                    28,
                    28,
                    26,
                    28,
                    30,
                    24,
                    30,
                    30,
                    30,
                    30,
                    30,
                    30,
                    30,
                    30,
                    30,
                    30,
                    30,
                    30,
                    30,
                    30,
                    30,
                    30,
                    30,
                    30
                ]
            ], o.NUM_ERROR_CORRECTION_BLOCKS = [
                [
                    -1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    2,
                    2,
                    2,
                    2,
                    4,
                    4,
                    4,
                    4,
                    4,
                    6,
                    6,
                    6,
                    6,
                    7,
                    8,
                    8,
                    9,
                    9,
                    10,
                    12,
                    12,
                    12,
                    13,
                    14,
                    15,
                    16,
                    17,
                    18,
                    19,
                    19,
                    20,
                    21,
                    22,
                    24,
                    25
                ],
                [
                    -1,
                    1,
                    1,
                    1,
                    2,
                    2,
                    4,
                    4,
                    4,
                    5,
                    5,
                    5,
                    8,
                    9,
                    9,
                    10,
                    10,
                    11,
                    13,
                    14,
                    16,
                    17,
                    17,
                    18,
                    20,
                    21,
                    23,
                    25,
                    26,
                    28,
                    29,
                    31,
                    33,
                    35,
                    37,
                    38,
                    40,
                    43,
                    45,
                    47,
                    49
                ],
                [
                    -1,
                    1,
                    1,
                    2,
                    2,
                    4,
                    4,
                    6,
                    6,
                    8,
                    8,
                    8,
                    10,
                    12,
                    16,
                    12,
                    17,
                    16,
                    18,
                    21,
                    20,
                    23,
                    23,
                    25,
                    27,
                    29,
                    34,
                    34,
                    35,
                    38,
                    40,
                    43,
                    45,
                    48,
                    51,
                    53,
                    56,
                    59,
                    62,
                    65,
                    68
                ],
                [
                    -1,
                    1,
                    1,
                    2,
                    4,
                    4,
                    4,
                    5,
                    6,
                    8,
                    8,
                    11,
                    11,
                    16,
                    16,
                    18,
                    16,
                    19,
                    21,
                    25,
                    25,
                    25,
                    34,
                    30,
                    32,
                    35,
                    37,
                    40,
                    42,
                    45,
                    48,
                    51,
                    54,
                    57,
                    60,
                    63,
                    66,
                    70,
                    74,
                    77,
                    81
                ]
            ], o;
        }();
        e.QrCode = t;
        function n(o, a, s) {
            if (a < 0 || a > 31 || o >>> a) throw new RangeError("Value out of range");
            for(var r = a - 1; r >= 0; r--)s.push(o >>> r & 1);
        }
        function l(o, a) {
            return (o >>> a & 1) != 0;
        }
        function i(o) {
            if (!o) throw new Error("Assertion error");
        }
        var c = function() {
            function o(a, s, r) {
                if (this.mode = a, this.numChars = s, this.bitData = r, s < 0) throw new RangeError("Invalid argument");
                this.bitData = r.slice();
            }
            return o.makeBytes = function(a) {
                for(var s = [], r = 0, u = a; r < u.length; r++){
                    var d = u[r];
                    n(d, 8, s);
                }
                return new o(o.Mode.BYTE, a.length, s);
            }, o.makeNumeric = function(a) {
                if (!o.isNumeric(a)) throw new RangeError("String contains non-numeric characters");
                for(var s = [], r = 0; r < a.length;){
                    var u = Math.min(a.length - r, 3);
                    n(parseInt(a.substring(r, r + u), 10), u * 3 + 1, s), r += u;
                }
                return new o(o.Mode.NUMERIC, a.length, s);
            }, o.makeAlphanumeric = function(a) {
                if (!o.isAlphanumeric(a)) throw new RangeError("String contains unencodable characters in alphanumeric mode");
                var s = [], r;
                for(r = 0; r + 2 <= a.length; r += 2){
                    var u = o.ALPHANUMERIC_CHARSET.indexOf(a.charAt(r)) * 45;
                    u += o.ALPHANUMERIC_CHARSET.indexOf(a.charAt(r + 1)), n(u, 11, s);
                }
                return r < a.length && n(o.ALPHANUMERIC_CHARSET.indexOf(a.charAt(r)), 6, s), new o(o.Mode.ALPHANUMERIC, a.length, s);
            }, o.makeSegments = function(a) {
                return a == "" ? [] : o.isNumeric(a) ? [
                    o.makeNumeric(a)
                ] : o.isAlphanumeric(a) ? [
                    o.makeAlphanumeric(a)
                ] : [
                    o.makeBytes(o.toUtf8ByteArray(a))
                ];
            }, o.makeEci = function(a) {
                var s = [];
                if (a < 0) throw new RangeError("ECI assignment value out of range");
                if (a < 128) n(a, 8, s);
                else if (a < 16384) n(2, 2, s), n(a, 14, s);
                else if (a < 1e6) n(6, 3, s), n(a, 21, s);
                else throw new RangeError("ECI assignment value out of range");
                return new o(o.Mode.ECI, 0, s);
            }, o.isNumeric = function(a) {
                return o.NUMERIC_REGEX.test(a);
            }, o.isAlphanumeric = function(a) {
                return o.ALPHANUMERIC_REGEX.test(a);
            }, o.prototype.getData = function() {
                return this.bitData.slice();
            }, o.getTotalBits = function(a, s) {
                for(var r = 0, u = 0, d = a; u < d.length; u++){
                    var f = d[u], v = f.mode.numCharCountBits(s);
                    if (f.numChars >= 1 << v) return 1 / 0;
                    r += 4 + v + f.bitData.length;
                }
                return r;
            }, o.toUtf8ByteArray = function(a) {
                a = encodeURI(a);
                for(var s = [], r = 0; r < a.length; r++)a.charAt(r) != "%" ? s.push(a.charCodeAt(r)) : (s.push(parseInt(a.substring(r + 1, r + 3), 16)), r += 2);
                return s;
            }, o.NUMERIC_REGEX = /^[0-9]*$/, o.ALPHANUMERIC_REGEX = /^[A-Z0-9 $%*+.\/:-]*$/, o.ALPHANUMERIC_CHARSET = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:", o;
        }();
        e.QrSegment = c;
    })(wt || (wt = {}));
    (function(e) {
        (function(t) {
            var n = function() {
                function l(i, c) {
                    this.ordinal = i, this.formatBits = c;
                }
                return l.LOW = new l(0, 1), l.MEDIUM = new l(1, 0), l.QUARTILE = new l(2, 3), l.HIGH = new l(3, 2), l;
            }();
            t.Ecc = n;
        })(e.QrCode || (e.QrCode = {}));
    })(wt || (wt = {}));
    (function(e) {
        (function(t) {
            var n = function() {
                function l(i, c) {
                    this.modeBits = i, this.numBitsCharCount = c;
                }
                return l.prototype.numCharCountBits = function(i) {
                    return this.numBitsCharCount[Math.floor((i + 7) / 17)];
                }, l.NUMERIC = new l(1, [
                    10,
                    12,
                    14
                ]), l.ALPHANUMERIC = new l(2, [
                    9,
                    11,
                    13
                ]), l.BYTE = new l(4, [
                    8,
                    16,
                    16
                ]), l.KANJI = new l(8, [
                    8,
                    10,
                    12
                ]), l.ECI = new l(7, [
                    0,
                    0,
                    0
                ]), l;
            }();
            t.Mode = n;
        })(e.QrSegment || (e.QrSegment = {}));
    })(wt || (wt = {}));
    var Lt = wt, Fl = "L", $l = {
        L: Lt.QrCode.Ecc.LOW,
        M: Lt.QrCode.Ecc.MEDIUM,
        Q: Lt.QrCode.Ecc.QUARTILE,
        H: Lt.QrCode.Ecc.HIGH
    }, Nd = function() {
        try {
            new Path2D().addPath(new Path2D);
        } catch  {
            return !1;
        }
        return !0;
    }();
    function Il(e) {
        return e in $l;
    }
    function Ma(e, t) {
        t === void 0 && (t = 0);
        var n = [];
        return e.forEach(function(l, i) {
            var c = null;
            l.forEach(function(o, a) {
                if (!o && c !== null) {
                    n.push("M".concat(c + t, " ").concat(i + t, "h").concat(a - c, "v1H").concat(c + t, "z")), c = null;
                    return;
                }
                if (a === l.length - 1) {
                    if (!o) return;
                    c === null ? n.push("M".concat(a + t, ",").concat(i + t, " h1v1H").concat(a + t, "z")) : n.push("M".concat(c + t, ",").concat(i + t, " h").concat(a + 1 - c, "v1H").concat(c + t, "z"));
                    return;
                }
                o && c === null && (c = a);
            });
        }), n.join("");
    }
    function Pa(e, t, n, l) {
        var i = l.width, c = l.height, o = l.x, a = l.y, s = e.length + n * 2, r = Math.floor(t * .1), u = s / t, d = (i || r) * u, f = (c || r) * u, v = o == null ? e.length / 2 - d / 2 : o * u, p = a == null ? e.length / 2 - f / 2 : a * u, g = null;
        if (l.excavate) {
            var m = Math.floor(v), b = Math.floor(p), R = Math.ceil(d + v - m), C = Math.ceil(f + p - b);
            g = {
                x: m,
                y: b,
                w: R,
                h: C
            };
        }
        return {
            x: v,
            y: p,
            h: f,
            w: d,
            excavation: g
        };
    }
    function Aa(e, t) {
        return e.slice().map(function(n, l) {
            return l < t.y || l >= t.y + t.h ? n : n.map(function(i, c) {
                return c < t.x || c >= t.x + t.w ? i : !1;
            });
        });
    }
    var _l = {
        value: {
            type: String,
            required: !0,
            default: ""
        },
        size: {
            type: Number,
            default: 100
        },
        level: {
            type: String,
            default: Fl,
            validator: function(e) {
                return Il(e);
            }
        },
        background: {
            type: String,
            default: "#fff"
        },
        foreground: {
            type: String,
            default: "#000"
        },
        margin: {
            type: Number,
            required: !1,
            default: 0
        },
        imageSettings: {
            type: Object,
            required: !1,
            default: function() {
                return {};
            }
        },
        gradient: {
            type: Boolean,
            required: !1,
            default: !1
        },
        gradientType: {
            type: String,
            required: !1,
            default: "linear",
            validator: function(e) {
                return [
                    "linear",
                    "radial"
                ].indexOf(e) > -1;
            }
        },
        gradientStartColor: {
            type: String,
            required: !1,
            default: "#000"
        },
        gradientEndColor: {
            type: String,
            required: !1,
            default: "#fff"
        }
    }, Ld = lt(lt({}, _l), {
        renderAs: {
            type: String,
            required: !1,
            default: "canvas",
            validator: function(e) {
                return [
                    "canvas",
                    "svg"
                ].indexOf(e) > -1;
            }
        }
    }), Md = q({
        name: "QRCodeSvg",
        props: _l,
        setup: function(e) {
            var t = N(0), n = N(""), l, i = function() {
                var o = e.value, a = e.level, s = e.margin, r = s >>> 0, u = Il(a) ? a : Fl, d = Lt.QrCode.encodeText(o, $l[u]).getModules();
                if (t.value = d.length + r * 2, e.imageSettings.src) {
                    var f = Pa(d, e.size, r, e.imageSettings);
                    l = {
                        x: f.x + r,
                        y: f.y + r,
                        width: f.w,
                        height: f.h
                    }, f.excavation && (d = Aa(d, f.excavation));
                }
                n.value = Ma(d, r);
            }, c = function() {
                if (!e.gradient) return null;
                var o = e.gradientType === "linear" ? {
                    x1: "0%",
                    y1: "0%",
                    x2: "100%",
                    y2: "100%"
                } : {
                    cx: "50%",
                    cy: "50%",
                    r: "50%",
                    fx: "50%",
                    fy: "50%"
                };
                return G(e.gradientType === "linear" ? "linearGradient" : "radialGradient", lt({
                    id: "qr-gradient"
                }, o), [
                    G("stop", {
                        offset: "0%",
                        style: {
                            stopColor: e.gradientStartColor
                        }
                    }),
                    G("stop", {
                        offset: "100%",
                        style: {
                            stopColor: e.gradientEndColor
                        }
                    })
                ]);
            };
            return i(), Bn(i), function() {
                return G("svg", {
                    width: e.size,
                    height: e.size,
                    "shape-rendering": "crispEdges",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 ".concat(t.value, " ").concat(t.value)
                }, [
                    G("defs", {}, [
                        c()
                    ]),
                    G("rect", {
                        width: "100%",
                        height: "100%",
                        fill: e.background
                    }),
                    G("path", {
                        fill: e.gradient ? "url(#qr-gradient)" : e.foreground,
                        d: n.value
                    }),
                    e.imageSettings.src && G("image", lt({
                        href: e.imageSettings.src
                    }, l))
                ]);
            };
        }
    }), Pd = q({
        name: "QRCodeCanvas",
        props: _l,
        setup: function(e, t) {
            var n = N(null), l = N(null), i = function() {
                var o = e.value, a = e.level, s = e.size, r = e.margin, u = e.background, d = e.foreground, f = e.gradient, v = e.gradientType, p = e.gradientStartColor, g = e.gradientEndColor, m = r >>> 0, b = Il(a) ? a : Fl, R = n.value;
                if (R) {
                    var C = R.getContext("2d");
                    if (C) {
                        var h = Lt.QrCode.encodeText(o, $l[b]).getModules(), y = h.length + m * 2, S = l.value, E = {
                            x: 0,
                            y: 0,
                            width: 0,
                            height: 0
                        }, k = e.imageSettings.src && S != null && S.naturalWidth !== 0 && S.naturalHeight !== 0;
                        if (k) {
                            var T = Pa(h, e.size, m, e.imageSettings);
                            E = {
                                x: T.x + m,
                                y: T.y + m,
                                width: T.w,
                                height: T.h
                            }, T.excavation && (h = Aa(h, T.excavation));
                        }
                        var $ = window.devicePixelRatio || 1, z = s / y * $;
                        if (R.height = R.width = s * $, C.scale(z, z), C.fillStyle = u, C.fillRect(0, 0, y, y), f) {
                            var x = void 0;
                            v === "linear" ? x = C.createLinearGradient(0, 0, y, y) : x = C.createRadialGradient(y / 2, y / 2, 0, y / 2, y / 2, y / 2), x.addColorStop(0, p), x.addColorStop(1, g), C.fillStyle = x;
                        } else C.fillStyle = d;
                        Nd ? C.fill(new Path2D(Ma(h, m))) : h.forEach(function(Y, te) {
                            Y.forEach(function(V, le) {
                                V && C.fillRect(le + m, te + m, 1, 1);
                            });
                        }), k && C.drawImage(S, E.x, E.y, E.width, E.height);
                    }
                }
            };
            qe(i), Bn(i);
            var c = t.attrs.style;
            return function() {
                return G(Ke, [
                    G("canvas", lt(lt({}, t.attrs), {
                        ref: n,
                        style: lt(lt({}, c), {
                            width: "".concat(e.size, "px"),
                            height: "".concat(e.size, "px")
                        })
                    })),
                    e.imageSettings.src && G("img", {
                        ref: l,
                        src: e.imageSettings.src,
                        style: {
                            display: "none"
                        },
                        onLoad: i
                    })
                ]);
            };
        }
    }), Ad = q({
        name: "Qrcode",
        render: function() {
            var e = this.$props, t = e.renderAs, n = e.value, l = e.size, i = e.margin, c = e.level, o = e.background, a = e.foreground, s = e.imageSettings, r = e.gradient, u = e.gradientType, d = e.gradientStartColor, f = e.gradientEndColor;
            return G(t === "svg" ? Md : Pd, {
                value: n,
                size: l,
                margin: i,
                level: c,
                background: o,
                foreground: a,
                imageSettings: s,
                gradient: r,
                gradientType: u,
                gradientStartColor: d,
                gradientEndColor: f
            });
        },
        props: Ld
    }), me = ((e)=>(e.Pending = "PENDING", e.Ready = "READY", e.Paused = "PAUSED", e.Uploading = "UPLOADING", e.Done = "DONE", e.Authenticating = "AUTHENTICATING", e.InvalidPassword = "INVALID_PASSWORD", e.Closed = "CLOSED", e))(me || {});
    const Fa = (e)=>e.name ?? e.entryFullPath ?? "";
    const $a = Symbol("Comlink.proxy"), Fd = Symbol("Comlink.endpoint"), Cl = Symbol("Comlink.releaseProxy"), Zn = Symbol("Comlink.finalizer"), wn = Symbol("Comlink.thrown"), Ia = (e)=>typeof e == "object" && e !== null || typeof e == "function", $d = {
        canHandle: (e)=>Ia(e) && e[$a],
        serialize (e) {
            const { port1: t, port2: n } = new MessageChannel;
            return Da(e, t), [
                n,
                [
                    n
                ]
            ];
        },
        deserialize (e) {
            return e.start(), xa(e);
        }
    }, Id = {
        canHandle: (e)=>Ia(e) && wn in e,
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
    }, _a = new Map([
        [
            "proxy",
            $d
        ],
        [
            "throw",
            Id
        ]
    ]);
    function _d(e, t) {
        for (const n of e)if (t === n || n === "*" || n instanceof RegExp && n.test(t)) return !0;
        return !1;
    }
    function Da(e, t = globalThis, n = [
        "*"
    ]) {
        t.addEventListener("message", function l(i) {
            if (!i || !i.data) return;
            if (!_d(n, i.origin)) {
                console.warn(`Invalid origin '${i.origin}' for comlink proxy`);
                return;
            }
            const { id: c, type: o, path: a } = Object.assign({
                path: []
            }, i.data), s = (i.data.argumentList || []).map(vt);
            let r;
            try {
                const u = a.slice(0, -1).reduce((f, v)=>f[v], e), d = a.reduce((f, v)=>f[v], e);
                switch(o){
                    case "GET":
                        r = d;
                        break;
                    case "SET":
                        u[a.slice(-1)[0]] = vt(i.data.value), r = !0;
                        break;
                    case "APPLY":
                        r = d.apply(u, s);
                        break;
                    case "CONSTRUCT":
                        {
                            const f = new d(...s);
                            r = Vd(f);
                        }
                        break;
                    case "ENDPOINT":
                        {
                            const { port1: f, port2: v } = new MessageChannel;
                            Da(e, v), r = Wd(f, [
                                f
                            ]);
                        }
                        break;
                    case "RELEASE":
                        r = void 0;
                        break;
                    default:
                        return;
                }
            } catch (u) {
                r = {
                    value: u,
                    [wn]: 0
                };
            }
            Promise.resolve(r).catch((u)=>({
                    value: u,
                    [wn]: 0
                })).then((u)=>{
                const [d, f] = Pn(u);
                t.postMessage(Object.assign(Object.assign({}, d), {
                    id: c
                }), f), o === "RELEASE" && (t.removeEventListener("message", l), Ba(t), Zn in e && typeof e[Zn] == "function" && e[Zn]());
            }).catch((u)=>{
                const [d, f] = Pn({
                    value: new TypeError("Unserializable return value"),
                    [wn]: 0
                });
                t.postMessage(Object.assign(Object.assign({}, d), {
                    id: c
                }), f);
            });
        }), t.start && t.start();
    }
    function Dd(e) {
        return e.constructor.name === "MessagePort";
    }
    function Ba(e) {
        Dd(e) && e.close();
    }
    function xa(e, t) {
        const n = new Map;
        return e.addEventListener("message", function(i) {
            const { data: c } = i;
            if (!c || !c.id) return;
            const o = n.get(c.id);
            if (o) try {
                o(c);
            } finally{
                n.delete(c.id);
            }
        }), wl(e, n, [], t);
    }
    function gn(e) {
        if (e) throw new Error("Proxy has been released and is not useable");
    }
    function Ha(e) {
        return Nt(e, new Map, {
            type: "RELEASE"
        }).then(()=>{
            Ba(e);
        });
    }
    const Ln = new WeakMap, Mn = "FinalizationRegistry" in globalThis && new FinalizationRegistry((e)=>{
        const t = (Ln.get(e) || 0) - 1;
        Ln.set(e, t), t === 0 && Ha(e);
    });
    function Bd(e, t) {
        const n = (Ln.get(t) || 0) + 1;
        Ln.set(t, n), Mn && Mn.register(e, t, e);
    }
    function xd(e) {
        Mn && Mn.unregister(e);
    }
    function wl(e, t, n = [], l = function() {}) {
        let i = !1;
        const c = new Proxy(l, {
            get (o, a) {
                if (gn(i), a === Cl) return ()=>{
                    xd(c), Ha(e), t.clear(), i = !0;
                };
                if (a === "then") {
                    if (n.length === 0) return {
                        then: ()=>c
                    };
                    const s = Nt(e, t, {
                        type: "GET",
                        path: n.map((r)=>r.toString())
                    }).then(vt);
                    return s.then.bind(s);
                }
                return wl(e, t, [
                    ...n,
                    a
                ]);
            },
            set (o, a, s) {
                gn(i);
                const [r, u] = Pn(s);
                return Nt(e, t, {
                    type: "SET",
                    path: [
                        ...n,
                        a
                    ].map((d)=>d.toString()),
                    value: r
                }, u).then(vt);
            },
            apply (o, a, s) {
                gn(i);
                const r = n[n.length - 1];
                if (r === Fd) return Nt(e, t, {
                    type: "ENDPOINT"
                }).then(vt);
                if (r === "bind") return wl(e, t, n.slice(0, -1));
                const [u, d] = So(s);
                return Nt(e, t, {
                    type: "APPLY",
                    path: n.map((f)=>f.toString()),
                    argumentList: u
                }, d).then(vt);
            },
            construct (o, a) {
                gn(i);
                const [s, r] = So(a);
                return Nt(e, t, {
                    type: "CONSTRUCT",
                    path: n.map((u)=>u.toString()),
                    argumentList: s
                }, r).then(vt);
            }
        });
        return Bd(c, e), c;
    }
    function Hd(e) {
        return Array.prototype.concat.apply([], e);
    }
    function So(e) {
        const t = e.map(Pn);
        return [
            t.map((n)=>n[0]),
            Hd(t.map((n)=>n[1]))
        ];
    }
    const Wa = new WeakMap;
    function Wd(e, t) {
        return Wa.set(e, t), e;
    }
    function Vd(e) {
        return Object.assign(e, {
            [$a]: !0
        });
    }
    function Pn(e) {
        for (const [t, n] of _a)if (n.canHandle(e)) {
            const [l, i] = n.serialize(e);
            return [
                {
                    type: "HANDLER",
                    name: t,
                    value: l
                },
                i
            ];
        }
        return [
            {
                type: "RAW",
                value: e
            },
            Wa.get(e) || []
        ];
    }
    function vt(e) {
        switch(e.type){
            case "HANDLER":
                return _a.get(e.name).deserialize(e.value);
            case "RAW":
                return e.value;
        }
    }
    function Nt(e, t, n, l) {
        return new Promise((i)=>{
            const c = zd();
            t.set(c, i), e.start && e.start(), e.postMessage(Object.assign({
                id: c
            }, n), l);
        });
    }
    function zd() {
        return new Array(4).fill(0).map(()=>Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
    }
    function Ud(e) {
        return new Worker("/assets/worker-vzQfTjA5.js", {
            type: "module",
            name: e?.name
        });
    }
    function Kd(e, t, n) {
        const l = e.find((i)=>Fa(i) === t && n <= i.size);
        if (!l) throw new Error("Invalid file offset");
        return l;
    }
    function Gd(e, t, n, l) {
        const i = N([]), c = new Map, o = new Map, a = ()=>{
            o.forEach((R, C)=>{
                R.cancelTransfer().catch(console.error), R[Cl](), o[C].terminate();
            }), o.clear(), c.clear();
        }, s = (R)=>{
            const C = c.get(R);
            C && (C.cancelTransfer().catch(console.error), C[Cl](), c.delete(R));
            const h = o.get(R);
            h && (h.terminate(), o.delete(R));
        }, r = (R)=>{
            const C = new Ud, h = xa(C);
            o.set(R, C), c.set(R, h);
        }, u = ()=>{
            const R = [], C = (h)=>{
                if (h.metadata?.type === "report") {
                    i.value.forEach((T)=>{
                        T.dataConnection.send({
                            type: Ze.Report
                        }), T.dataConnection.close();
                    }), window.location.href = "/reported";
                    return;
                }
                const y = {
                    status: me.Pending,
                    dataConnection: h,
                    completedFiles: 0,
                    totalFiles: t.length,
                    currentFileProgress: 0
                };
                i.value = [
                    y,
                    ...i.value
                ];
                const S = (T)=>{
                    i.value = i.value.map(($)=>$.dataConnection.connectionId === h.connectionId ? T($) : $);
                }, E = (T)=>{
                    try {
                        const $ = Ks(T);
                        switch($.type){
                            case Ze.RequestInfo:
                                d(h, $, S);
                                break;
                            case Ze.UsePassword:
                                v($, h, S);
                                break;
                            case Ze.Start:
                                p(h, $, S);
                                break;
                            case Ze.Pause:
                                g(S, h);
                                break;
                            case Ze.Done:
                                m(h, S);
                                break;
                        }
                    } catch ($) {
                        console.error("Error handling message:", $);
                    }
                }, k = ()=>{
                    s(h.connectionId), S((T)=>({
                            ...T,
                            status: me.Closed
                        }));
                };
                h.on("data", E), h.on("close", k), R.push(()=>{
                    h.off("data", E), h.off("close", k), h.close();
                });
            };
            return e.on("connection", C), ()=>{
                e.off("connection", C), R.forEach((h)=>h());
            };
        }, d = (R, C, h)=>{
            const y = {
                browserName: C.browserName,
                browserVersion: C.browserVersion,
                osName: C.osName,
                osVersion: C.osVersion,
                mobileVendor: C.mobileVendor,
                mobileModel: C.mobileModel
            };
            if (n) {
                R.send({
                    type: Ze.PasswordRequired
                }), h((S)=>({
                        ...S,
                        ...y,
                        status: me.Authenticating
                    }));
                return;
            }
            r(R.connectionId), f(R, h, y);
        }, f = (R, C, h)=>{
            const y = t.map((S)=>({
                    name: Fa(S),
                    size: S.size,
                    type: S.type
                }));
            R.send({
                type: Ze.Info,
                files: y
            }), C((S)=>({
                    ...S,
                    ...h,
                    status: me.Ready
                }));
        }, v = (R, C, h)=>{
            R.password === n ? (r(C.connectionId), f(C, h, {})) : (C.send({
                type: Ze.PasswordRequired,
                errorMessage: "Invalid password"
            }), h((y)=>({
                    ...y,
                    status: me.InvalidPassword
                })));
        }, p = (R, C, h)=>{
            try {
                const y = Kd(t, C.fileName, C.offset), S = C.offset;
                h((k)=>({
                        ...k,
                        status: me.Uploading,
                        uploadingFileName: C.fileName,
                        uploadingOffset: S,
                        currentFileProgress: S / y.size
                    })), c.get(R.connectionId).initTransfer(y, C.fileName, S, l), (async ()=>{
                    try {
                        for(;;){
                            const k = c.get(R.connectionId);
                            if (!k) {
                                console.error("找不到连接对应的worker API:", R.connectionId);
                                return;
                            }
                            const T = await k.processNextChunk();
                            if (!T.success) {
                                console.error("处理块失败:", T.error);
                                return;
                            }
                            if (console.log("处理块结果:", T), R.send({
                                type: Ze.Chunk,
                                fileName: T.fileName,
                                offset: T.offset,
                                bytes: T.bytes,
                                final: T.final
                            }), T.final) {
                                h(($)=>({
                                        ...$,
                                        status: me.Ready,
                                        completedFiles: $.completedFiles + 1,
                                        currentFileProgress: 0
                                    })), s(R.connectionId);
                                break;
                            } else h(($)=>({
                                    ...$,
                                    uploadingOffset: T.newOffset,
                                    currentFileProgress: T.progress
                                })), await new Promise(requestAnimationFrame);
                        }
                    } catch (k) {
                        console.error("处理块时出错:", k);
                    }
                })();
            } catch (y) {
                console.error("启动文件传输时出错:", y);
            }
        }, g = (R, C)=>{
            s(C.connectionId), R((h)=>({
                    ...h,
                    status: me.Paused
                }));
        }, m = (R, C)=>{
            R.close(), C((h)=>({
                    ...h,
                    status: me.Done
                }));
        }, b = gt((R)=>{
            const C = u();
            R(C);
        });
        return qe(()=>{}), tn(()=>{
            a();
        }), nn(b), i;
    }
    function jd(e) {
        return `${window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : "")}/download/${e}`;
    }
    function qd(e, t, n = 6e4) {
        const l = N(!0), i = N(null), c = N(null), o = L(()=>c.value?.token), a = L(()=>o.value ? jd(o.value) : void 0);
        (async ()=>{
            try {
                console.log("[UploaderChannel] creating new channel for peer", e), l.value = !0;
                const d = await fetch("http://localhost:3000/api/create", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        uploaderPeerID: e,
                        algorithm: t
                    })
                });
                if (!d.ok) throw console.error("[UploaderChannel] failed to create channel:", d.status), new Error("Network response was not ok");
                const f = await d.json();
                console.log("[UploaderChannel] channel created successfully:", {
                    token: f.token
                }), c.value = f, i.value = null;
            } catch (d) {
                console.error("[UploaderChannel] error creating channel:", d), i.value = d instanceof Error ? d : new Error(String(d));
            } finally{
                l.value = !1;
            }
        })();
        let r = null;
        const u = async ()=>{
            if (o.value) {
                try {
                    console.log("[UploaderChannel] renewing channel for token", o.value);
                    const d = await fetch("http://localhost:3000/api/renew", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            token: o.value
                        })
                    });
                    if (!d.ok) throw console.error("[UploaderChannel] failed to renew channel", d.status), new Error("Network response was not ok");
                    console.log("[UploaderChannel] channel renewed successfully");
                } catch (d) {
                    console.error("[UploaderChannel] error renewing channel:", d);
                }
                r = setTimeout(u, n);
            }
        };
        if (fe([
            ()=>o.value
        ], ([d])=>{
            r && (clearTimeout(r), r = null), d && (console.log("[UploaderChannel] scheduling channel renewal in", n, "ms"), r = setTimeout(u, n));
        }, {
            immediate: !0
        }), typeof window < "u") {
            const d = ()=>{
                o.value && (console.log("[UploaderChannel] destroying channel on page unload"), navigator.sendBeacon("http://localhost:3000/api/destroy", JSON.stringify({
                    token: o.value
                })));
            };
            window.addEventListener("beforeunload", d), nn(()=>{
                window.removeEventListener("beforeunload", d), r && clearTimeout(r);
            });
        }
        return {
            isLoading: l,
            error: i,
            token: o,
            URL: a
        };
    }
    let Yd, Qd, Xd, Jd, Zd, ef, tf, nf, lf, of, af, sf, rf, uf, cf, df, ff, pf, vf, hf, gf, mf, bf, yf, Cf;
    Yd = {
        key: 0,
        class: "loading-container"
    };
    Qd = {
        key: 2
    };
    Xd = {
        class: "qr-container"
    };
    Jd = {
        class: "connections-container"
    };
    Zd = {
        class: "header-row"
    };
    ef = {
        style: {
            width: "100%"
        }
    };
    tf = {
        class: "flex justify-between items-center mb-2"
    };
    nf = {
        class: "flex items-center space-x-2"
    };
    lf = {
        class: "text-sm font-medium"
    };
    of = {
        class: "text-gray-400"
    };
    af = {
        class: "text-sm text-gray-500"
    };
    sf = {
        key: 0
    };
    rf = 128;
    uf = q({
        __name: "Uploader",
        props: {
            files: Array,
            password: String,
            onStop: Function,
            algorithm: Number
        },
        setup (e) {
            const t = e, { peer: n, stop: l } = Gs(), { isLoading: i, error: c, token: o, URL: a } = qd(n.id, t.algorithm), s = Gd(n, t.files, t.password, t.algorithm), r = L(()=>s.value?.filter((m)=>m.status === me.Uploading).length ?? 0), u = (m)=>{
                navigator.clipboard.writeText(m).then(()=>{
                    wo({
                        message: "已复制到剪贴板",
                        type: "success",
                        duration: 2e3
                    });
                }).catch(()=>{
                    wo.error("复制失败");
                });
            }, d = ()=>{
                l(), t.onStop();
            }, f = (m)=>{
                switch(m){
                    case me.Uploading:
                        return "primary";
                    case me.Paused:
                        return "warning";
                    case me.Done:
                        return "success";
                    case me.Closed:
                    case me.InvalidPassword:
                        return "danger";
                    default:
                        return "info";
                }
            }, v = (m)=>{
                switch(m){
                    case me.Done:
                        return "success";
                    case me.Paused:
                        return "warning";
                    case me.Closed:
                    case me.InvalidPassword:
                        return "exception";
                    default:
                        return "";
                }
            }, p = (m)=>{
                const { completedFiles: b, currentFileProgress: R, totalFiles: C } = m;
                return Math.round((b + R) / C * 100);
            }, g = (m)=>m.replace(/_/g, " ");
            return fe(r, (m)=>{}), (m, b)=>{
                const R = js, C = qs, h = eu, y = Gc, S = Ve, E = xo, k = Bo, T = Ys, $ = Mu, z = au, x = Fo, Y = Do, te = Xs;
                return M(), D("div", null, [
                    w(i) || !w(o) ? (M(), D("div", Yd, [
                        _(R, {
                            rows: 3,
                            animated: ""
                        }),
                        b[2] || (b[2] = W("div", null, "创建通道中...", -1))
                    ])) : w(c) ? (M(), ne(C, {
                        key: 1,
                        title: w(c).message,
                        type: "error",
                        closable: !1,
                        "show-icon": ""
                    }, null, 8, [
                        "title"
                    ])) : (M(), D("div", Qd, [
                        _($, {
                            gutter: 20
                        }, {
                            default: I(()=>[
                                    _(h, {
                                        span: 6
                                    }, {
                                        default: I(()=>[
                                                W("div", Xd, [
                                                    _(Ad, {
                                                        value: w(a) || "",
                                                        size: rf,
                                                        level: "H"
                                                    }, null, 8, [
                                                        "value"
                                                    ])
                                                ])
                                            ]),
                                        _: 1
                                    }),
                                    _(h, {
                                        span: 18
                                    }, {
                                        default: I(()=>[
                                                _(T, {
                                                    direction: "vertical",
                                                    fill: "",
                                                    style: {
                                                        width: "100%"
                                                    }
                                                }, {
                                                    default: I(()=>[
                                                            W("div", null, [
                                                                _(y, {
                                                                    class: "mb-1",
                                                                    type: "info"
                                                                }, {
                                                                    default: I(()=>b[3] || (b[3] = [
                                                                            we("短 URL")
                                                                        ])),
                                                                    _: 1
                                                                }),
                                                                _(k, {
                                                                    modelValue: w(a),
                                                                    "onUpdate:modelValue": b[1] || (b[1] = (V)=>At(a) ? a.value = V : null),
                                                                    readonly: "",
                                                                    class: "input-with-copy"
                                                                }, {
                                                                    append: I(()=>[
                                                                            _(E, {
                                                                                onClick: b[0] || (b[0] = (V)=>u(w(a)))
                                                                            }, {
                                                                                default: I(()=>[
                                                                                        _(S, null, {
                                                                                            default: I(()=>[
                                                                                                    _(w(Qs))
                                                                                                ]),
                                                                                            _: 1
                                                                                        })
                                                                                    ]),
                                                                                _: 1
                                                                            })
                                                                        ]),
                                                                    _: 1
                                                                }, 8, [
                                                                    "modelValue"
                                                                ])
                                                            ])
                                                        ]),
                                                    _: 1
                                                })
                                            ]),
                                        _: 1
                                    })
                                ]),
                            _: 1
                        }),
                        W("div", Jd, [
                            _(z),
                            W("div", Zd, [
                                _(y, {
                                    class: "connections-title",
                                    size: "large"
                                }, {
                                    default: I(()=>[
                                            we(ae(r.value) + " 正在下载, " + ae(w(s).length) + " 总计连接 ", 1)
                                        ]),
                                    _: 1
                                }),
                                _(E, {
                                    type: "danger",
                                    onClick: d
                                }, {
                                    default: I(()=>[
                                            _(S, null, {
                                                default: I(()=>[
                                                        _(w(Ao))
                                                    ]),
                                                _: 1
                                            }),
                                            b[4] || (b[4] = we(" 停止 "))
                                        ]),
                                    _: 1
                                })
                            ]),
                            (M(!0), D(Ke, null, Ct(w(s), (V, le)=>(M(), ne($, {
                                    gutter: 20,
                                    key: le,
                                    span: 8,
                                    class: "connection-item"
                                }, {
                                    default: I(()=>[
                                            W("div", ef, [
                                                _(te, {
                                                    shadow: "hover",
                                                    class: "connection-card"
                                                }, {
                                                    default: I(()=>[
                                                            W("div", tf, [
                                                                W("div", nf, [
                                                                    W("span", lf, [
                                                                        V.browserName && V.browserVersion ? (M(), D(Ke, {
                                                                            key: 0
                                                                        }, [
                                                                            we(ae(V.browserName) + " ", 1),
                                                                            W("span", of, "v" + ae(V.browserVersion), 1)
                                                                        ], 64)) : (M(), D(Ke, {
                                                                            key: 1
                                                                        }, [
                                                                            we(" Downloader ")
                                                                        ], 64))
                                                                    ]),
                                                                    _(x, {
                                                                        size: "small",
                                                                        type: f(V.status),
                                                                        effect: "dark"
                                                                    }, {
                                                                        default: I(()=>[
                                                                                we(ae(g(V.status)), 1)
                                                                            ]),
                                                                        _: 2
                                                                    }, 1032, [
                                                                        "type"
                                                                    ])
                                                                ]),
                                                                W("div", af, [
                                                                    W("div", null, " Completed: " + ae(V.completedFiles) + " / " + ae(V.totalFiles) + " files ", 1),
                                                                    V.uploadingFileName && V.status === w(me).Uploading ? (M(), D("div", sf, " Current file: " + ae(Math.round(V.currentFileProgress * 100)) + "% ", 1)) : K("", !0)
                                                                ])
                                                            ]),
                                                            _(Y, {
                                                                percentage: p(V),
                                                                "stroke-width": 10,
                                                                status: v(V.status)
                                                            }, null, 8, [
                                                                "percentage",
                                                                "status"
                                                            ])
                                                        ]),
                                                    _: 2
                                                }, 1024)
                                            ])
                                        ]),
                                    _: 2
                                }, 1024))), 128))
                        ])
                    ]))
                ]);
            };
        }
    });
    cf = zo(uf, [
        [
            "__scopeId",
            "data-v-4b7e4601"
        ]
    ]);
    df = {
        key: 0,
        style: {
            width: "800px"
        }
    };
    ff = {
        key: 1
    };
    pf = {
        class: "upload-container"
    };
    vf = {
        class: "action-area"
    };
    hf = {
        class: "password-container"
    };
    gf = {
        class: "input-label"
    };
    mf = {
        class: "form-row",
        style: {
            display: "flex",
            gap: "20px",
            "align-items": "center"
        }
    };
    bf = {
        class: "button-group"
    };
    yf = {
        key: 2,
        style: {
            width: "800px"
        }
    };
    Cf = {
        __name: "Upload",
        setup (e) {
            const t = N([]), n = N(""), l = N(0), i = N(!1), c = (d, f)=>{
                t.value = f.map((v)=>v?.raw).filter((v)=>v instanceof File);
            }, o = ()=>{
                i.value = !0;
            }, a = ()=>{
                i.value = !1;
            }, s = ()=>{
                t.value = [], i.value = !1;
            }, r = (d)=>{
                t.value.splice(d, 1);
            }, u = (d)=>Object.keys(d).filter((f)=>isNaN(parseInt(f)));
            return (d, f)=>{
                const v = Ve, p = hd, g = Wc, m = xo, b = Hc, R = _n, C = Bo, h = Eu, y = Su;
                return M(), D("div", null, [
                    t.value.length ? i.value ? (M(), D("div", yf, [
                        _(Js, null, {
                            default: I(()=>[
                                    _(cf, {
                                        files: t.value,
                                        password: n.value,
                                        onStop: a,
                                        algorithm: l.value
                                    }, null, 8, [
                                        "files",
                                        "password",
                                        "algorithm"
                                    ])
                                ]),
                            _: 1
                        })
                    ])) : (M(), D("div", ff, [
                        W("div", pf, [
                            _(b, {
                                data: t.value,
                                style: {
                                    width: "100%"
                                },
                                "header-cell-style": {
                                    background: "#f5f7fa",
                                    color: "#606266"
                                },
                                size: "medium",
                                border: "",
                                stripe: ""
                            }, {
                                default: I(()=>[
                                        _(g, {
                                            prop: "name",
                                            label: "File Name",
                                            "min-width": "180",
                                            "show-overflow-tooltip": ""
                                        }),
                                        _(g, {
                                            label: "Type",
                                            width: "120",
                                            align: "center"
                                        }, {
                                            default: I(({ row: S })=>[
                                                    we(ae(S.type || "Unknown"), 1)
                                                ]),
                                            _: 1
                                        }),
                                        _(g, {
                                            label: "Actions",
                                            width: "120",
                                            align: "center"
                                        }, {
                                            default: I(({ row: S, $index: E })=>[
                                                    _(m, {
                                                        size: "small",
                                                        type: "link",
                                                        class: "danger-text",
                                                        onClick: (k)=>r(E)
                                                    }, {
                                                        default: I(()=>f[3] || (f[3] = [
                                                                we(" Remove ")
                                                            ])),
                                                        _: 2
                                                    }, 1032, [
                                                        "onClick"
                                                    ])
                                                ]),
                                            _: 1
                                        })
                                    ]),
                                _: 1
                            }, 8, [
                                "data"
                            ]),
                            W("div", vf, [
                                W("div", hf, [
                                    W("div", gf, [
                                        f[5] || (f[5] = W("span", {
                                            class: "label-text"
                                        }, ae("Password (optional)"), -1)),
                                        _(R, {
                                            effect: "dark",
                                            placement: "top"
                                        }, {
                                            content: I(()=>f[4] || (f[4] = [
                                                    we(" 下载者必须提供此密码才能开始下载文件。"),
                                                    W("br", null, null, -1),
                                                    we(" 如果您不在此处指定密码，则任何具有文件链接的下载器都可以下载它。"),
                                                    W("br", null, null, -1),
                                                    we(" 它不用于加密文件，因为WebRTC的DTLS已经执行了此操作。 ")
                                                ])),
                                            default: I(()=>[
                                                    _(v, null, {
                                                        default: I(()=>[
                                                                _(w(er))
                                                            ]),
                                                        _: 1
                                                    })
                                                ]),
                                            _: 1
                                        })
                                    ]),
                                    W("div", mf, [
                                        _(C, {
                                            modelValue: n.value,
                                            "onUpdate:modelValue": f[0] || (f[0] = (S)=>n.value = S),
                                            type: "password",
                                            "show-password": "",
                                            clearable: "",
                                            placeholder: "输入secret password",
                                            autofocus: "",
                                            style: {
                                                width: "50%"
                                            }
                                        }, {
                                            prefix: I(()=>f[6] || (f[6] = [
                                                    W("i", {
                                                        class: "el-icon-lock",
                                                        style: {
                                                            color: "var(--el-text-color-placeholder)"
                                                        }
                                                    }, null, -1)
                                                ])),
                                            _: 1
                                        }, 8, [
                                            "modelValue"
                                        ]),
                                        _(y, {
                                            modelValue: l.value,
                                            "onUpdate:modelValue": f[1] || (f[1] = (S)=>l.value = S),
                                            placeholder: "选择密码",
                                            style: {
                                                width: "45%"
                                            }
                                        }, {
                                            default: I(()=>[
                                                    (M(!0), D(Ke, null, Ct(u(w(Yl)), (S)=>(M(), ne(h, {
                                                            key: S,
                                                            label: S,
                                                            value: w(Yl)[S]
                                                        }, null, 8, [
                                                            "label",
                                                            "value"
                                                        ]))), 128))
                                                ]),
                                            _: 1
                                        }, 8, [
                                            "modelValue"
                                        ])
                                    ])
                                ]),
                                W("div", bf, [
                                    _(m, {
                                        type: "primary",
                                        size: "medium",
                                        onClick: o
                                    }, {
                                        default: I(()=>f[7] || (f[7] = [
                                                we(" Start Upload ")
                                            ])),
                                        _: 1
                                    }),
                                    _(m, {
                                        size: "medium",
                                        plain: "",
                                        onClick: s
                                    }, {
                                        default: I(()=>f[8] || (f[8] = [
                                                we(" Cancel ")
                                            ])),
                                        _: 1
                                    })
                                ])
                            ])
                        ])
                    ])) : (M(), D("div", df, [
                        _(p, {
                            action: "",
                            "auto-upload": !1,
                            "on-change": c,
                            multiple: "",
                            drag: ""
                        }, {
                            default: I(()=>[
                                    f[2] || (f[2] = W("div", {
                                        class: "el-upload__text"
                                    }, " 拖放文件即可开始 ", -1)),
                                    _(v, {
                                        class: "el-icon--upload"
                                    }, {
                                        default: I(()=>[
                                                _(w(Zs))
                                            ]),
                                        _: 1
                                    })
                                ]),
                            _: 1
                        })
                    ]))
                ]);
            };
        }
    };
    Ef = zo(Cf, [
        [
            "__scopeId",
            "data-v-fb265b7b"
        ]
    ]);
});
export { Ef as default, __tla };
