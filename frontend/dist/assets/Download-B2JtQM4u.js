const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/download2-BY-60XXT.js","assets/zip-stream-CQr6YNqM.js","assets/download-DP2jPJgO.js","assets/messages-BTUfKhSZ.js","assets/index-VZNZX2ad.js","assets/index-Q9O2P8l3.css","assets/messages-B2O_S1x3.css"])))=>i.map(i=>d[i]);
import { q as to, i as dr, p as F, c as f, d as k, l as ke, G as io, J as no, H as mo, a as H, o as y, r as Le, g as re, u as b, N as so, j as We, L as Ze, K as go, _ as fo, b as G, F as cr, m as xo, y as yo, f as W, w as E, z as Y, A as _e, E as co, n as Lr, h as Q, t as le, a4 as Xo, I as uo, aa as rr, M as $o, $ as Io, a9 as j, P as ur, R as Fo, B as Do, ab as Ro, ac as Vo, __tla as __tla_0 } from "./index-VZNZX2ad.js";
import { j as Uo, T as Ke, L as ze, N as ar, aG as So, ac as tr, _ as Sr, a3 as Ao, O as Je, b8 as Ar, a1 as Ho, ab as ko, aa as Wo, b9 as ir, ad as Ko, ba as Yo, Q as _r, ay as or, R as po, a7 as Qo, aq as Zo, a5 as zo, at as vo, bb as Mo, aY as Jo, aW as q, aX as qo, bc as jo, b3 as pr, a_ as Po, a$ as el, av as rl, au as ol, aw as ll, b1 as qe, aM as dl, aJ as To, b0 as al, aF as tl, b4 as il, __tla as __tla_1 } from "./messages-BTUfKhSZ.js";
let uM;
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
    var nl = 4;
    function Gr(d) {
        return Uo(d, nl);
    }
    const ml = ze({
        size: {
            type: String,
            values: So
        },
        disabled: Boolean
    }), sl = ze({
        ...ml,
        model: Object,
        rules: {
            type: ar(Object)
        },
        labelPosition: {
            type: String,
            values: [
                "left",
                "right",
                "top"
            ],
            default: "right"
        },
        requireAsteriskPosition: {
            type: String,
            values: [
                "left",
                "right"
            ],
            default: "left"
        },
        labelWidth: {
            type: [
                String,
                Number
            ],
            default: ""
        },
        labelSuffix: {
            type: String,
            default: ""
        },
        inline: Boolean,
        inlineMessage: Boolean,
        statusIcon: Boolean,
        showMessage: {
            type: Boolean,
            default: !0
        },
        validateOnRuleChange: {
            type: Boolean,
            default: !0
        },
        hideRequiredAsterisk: Boolean,
        scrollToError: Boolean,
        scrollIntoViewOptions: {
            type: [
                Object,
                Boolean
            ]
        }
    }), gl = {
        validate: (d, e, r)=>(to(d) || dr(d)) && Ke(e) && dr(r)
    };
    function xl() {
        const d = F([]), e = f(()=>{
            if (!d.value.length) return "0";
            const t = Math.max(...d.value);
            return t ? `${t}px` : "";
        });
        function r(t) {
            const a = d.value.indexOf(t);
            return a === -1 && e.value, a;
        }
        function o(t, a) {
            if (t && a) {
                const i = r(a);
                d.value.splice(i, 1, t);
            } else t && d.value.push(t);
        }
        function l(t) {
            const a = r(t);
            a > -1 && d.value.splice(a, 1);
        }
        return {
            autoLabelWidth: e,
            registerLabelWidth: o,
            deregisterLabelWidth: l
        };
    }
    const Xe = (d, e)=>{
        const r = tr(e);
        return r.length > 0 ? d.filter((o)=>o.prop && r.includes(o.prop)) : d;
    }, cl = "ElForm", ul = k({
        name: cl
    }), Sl = k({
        ...ul,
        props: sl,
        emits: gl,
        setup (d, { expose: e, emit: r }) {
            const o = d, l = [], t = Ao(), a = Je("form"), i = f(()=>{
                const { labelPosition: c, inline: M } = o;
                return [
                    a.b(),
                    a.m(t.value || "default"),
                    {
                        [a.m(`label-${c}`)]: c,
                        [a.m("inline")]: M
                    }
                ];
            }), n = (c)=>l.find((M)=>M.prop === c), m = (c)=>{
                l.push(c);
            }, s = (c)=>{
                c.prop && l.splice(l.indexOf(c), 1);
            }, g = (c = [])=>{
                o.model && Xe(l, c).forEach((M)=>M.resetField());
            }, x = (c = [])=>{
                Xe(l, c).forEach((M)=>M.clearValidate());
            }, v = f(()=>!!o.model), T = (c)=>{
                if (l.length === 0) return [];
                const M = Xe(l, c);
                return M.length ? M : [];
            }, p = async (c)=>A(void 0, c), _ = async (c = [])=>{
                if (!v.value) return !1;
                const M = T(c);
                if (M.length === 0) return !0;
                let N = {};
                for (const u of M)try {
                    await u.validate(""), u.validateState === "error" && u.resetField();
                } catch (L) {
                    N = {
                        ...N,
                        ...L
                    };
                }
                return Object.keys(N).length === 0 ? !0 : Promise.reject(N);
            }, A = async (c = [], M)=>{
                const N = !so(M);
                try {
                    const u = await _(c);
                    return u === !0 && await M?.(u), u;
                } catch (u) {
                    if (u instanceof Error) throw u;
                    const L = u;
                    return o.scrollToError && O(Object.keys(L)[0]), await M?.(!1, L), N && Promise.reject(L);
                }
            }, O = (c)=>{
                var M;
                const N = Xe(l, c)[0];
                N && ((M = N.$el) == null || M.scrollIntoView(o.scrollIntoViewOptions));
            };
            return ke(()=>o.rules, ()=>{
                o.validateOnRuleChange && p().catch((c)=>Ho());
            }, {
                deep: !0,
                flush: "post"
            }), io(Ar, no({
                ...mo(o),
                emit: r,
                resetFields: g,
                clearValidate: x,
                validateField: A,
                getField: n,
                addField: m,
                removeField: s,
                ...xl()
            })), e({
                validate: p,
                validateField: A,
                resetFields: g,
                clearValidate: x,
                scrollToField: O,
                fields: l
            }), (c, M)=>(y(), H("form", {
                    class: re(b(i))
                }, [
                    Le(c.$slots, "default")
                ], 2));
        }
    });
    var Al = Sr(Sl, [
        [
            "__file",
            "form.vue"
        ]
    ]);
    function oe() {
        return oe = Object.assign ? Object.assign.bind() : function(d) {
            for(var e = 1; e < arguments.length; e++){
                var r = arguments[e];
                for(var o in r)Object.prototype.hasOwnProperty.call(r, o) && (d[o] = r[o]);
            }
            return d;
        }, oe.apply(this, arguments);
    }
    function pl(d, e) {
        d.prototype = Object.create(e.prototype), d.prototype.constructor = d, we(d, e);
    }
    function nr(d) {
        return nr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
            return r.__proto__ || Object.getPrototypeOf(r);
        }, nr(d);
    }
    function we(d, e) {
        return we = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o, l) {
            return o.__proto__ = l, o;
        }, we(d, e);
    }
    function vl() {
        if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
        if (typeof Proxy == "function") return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
        } catch  {
            return !1;
        }
    }
    function He(d, e, r) {
        return vl() ? He = Reflect.construct.bind() : He = function(l, t, a) {
            var i = [
                null
            ];
            i.push.apply(i, t);
            var n = Function.bind.apply(l, i), m = new n;
            return a && we(m, a.prototype), m;
        }, He.apply(null, arguments);
    }
    function Ml(d) {
        return Function.toString.call(d).indexOf("[native code]") !== -1;
    }
    function mr(d) {
        var e = typeof Map == "function" ? new Map : void 0;
        return mr = function(o) {
            if (o === null || !Ml(o)) return o;
            if (typeof o != "function") throw new TypeError("Super expression must either be null or a function");
            if (typeof e < "u") {
                if (e.has(o)) return e.get(o);
                e.set(o, l);
            }
            function l() {
                return He(o, arguments, nr(this).constructor);
            }
            return l.prototype = Object.create(o.prototype, {
                constructor: {
                    value: l,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), we(l, o);
        }, mr(d);
    }
    var Pl = /%[sdj%]/g, Tl = function() {};
    function sr(d) {
        if (!d || !d.length) return null;
        var e = {};
        return d.forEach(function(r) {
            var o = r.field;
            e[o] = e[o] || [], e[o].push(r);
        }), e;
    }
    function Z(d) {
        for(var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), o = 1; o < e; o++)r[o - 1] = arguments[o];
        var l = 0, t = r.length;
        if (typeof d == "function") return d.apply(null, r);
        if (typeof d == "string") {
            var a = d.replace(Pl, function(i) {
                if (i === "%%") return "%";
                if (l >= t) return i;
                switch(i){
                    case "%s":
                        return String(r[l++]);
                    case "%d":
                        return Number(r[l++]);
                    case "%j":
                        try {
                            return JSON.stringify(r[l++]);
                        } catch  {
                            return "[Circular]";
                        }
                        break;
                    default:
                        return i;
                }
            });
            return a;
        }
        return d;
    }
    function hl(d) {
        return d === "string" || d === "url" || d === "hex" || d === "email" || d === "date" || d === "pattern";
    }
    function D(d, e) {
        return !!(d == null || e === "array" && Array.isArray(d) && !d.length || hl(e) && typeof d == "string" && !d);
    }
    function bl(d, e, r) {
        var o = [], l = 0, t = d.length;
        function a(i) {
            o.push.apply(o, i || []), l++, l === t && r(o);
        }
        d.forEach(function(i) {
            e(i, a);
        });
    }
    function Br(d, e, r) {
        var o = 0, l = d.length;
        function t(a) {
            if (a && a.length) {
                r(a);
                return;
            }
            var i = o;
            o = o + 1, i < l ? e(d[i], t) : r([]);
        }
        t([]);
    }
    function Ll(d) {
        var e = [];
        return Object.keys(d).forEach(function(r) {
            e.push.apply(e, d[r] || []);
        }), e;
    }
    var Nr = function(d) {
        pl(e, d);
        function e(r, o) {
            var l;
            return l = d.call(this, "Async Validation Error") || this, l.errors = r, l.fields = o, l;
        }
        return e;
    }(mr(Error));
    function _l(d, e, r, o, l) {
        if (e.first) {
            var t = new Promise(function(x, v) {
                var T = function(A) {
                    return o(A), A.length ? v(new Nr(A, sr(A))) : x(l);
                }, p = Ll(d);
                Br(p, r, T);
            });
            return t.catch(function(x) {
                return x;
            }), t;
        }
        var a = e.firstFields === !0 ? Object.keys(d) : e.firstFields || [], i = Object.keys(d), n = i.length, m = 0, s = [], g = new Promise(function(x, v) {
            var T = function(_) {
                if (s.push.apply(s, _), m++, m === n) return o(s), s.length ? v(new Nr(s, sr(s))) : x(l);
            };
            i.length || (o(s), x(l)), i.forEach(function(p) {
                var _ = d[p];
                a.indexOf(p) !== -1 ? Br(_, r, T) : bl(_, r, T);
            });
        });
        return g.catch(function(x) {
            return x;
        }), g;
    }
    function Gl(d) {
        return !!(d && d.message !== void 0);
    }
    function Bl(d, e) {
        for(var r = d, o = 0; o < e.length; o++){
            if (r == null) return r;
            r = r[e[o]];
        }
        return r;
    }
    function Cr(d, e) {
        return function(r) {
            var o;
            return d.fullFields ? o = Bl(e, d.fullFields) : o = e[r.field || d.fullField], Gl(r) ? (r.field = r.field || d.fullField, r.fieldValue = o, r) : {
                message: typeof r == "function" ? r() : r,
                fieldValue: o,
                field: r.field || d.fullField
            };
        };
    }
    function Er(d, e) {
        if (e) {
            for(var r in e)if (e.hasOwnProperty(r)) {
                var o = e[r];
                typeof o == "object" && typeof d[r] == "object" ? d[r] = oe({}, d[r], o) : d[r] = o;
            }
        }
        return d;
    }
    var ho = function(e, r, o, l, t, a) {
        e.required && (!o.hasOwnProperty(e.field) || D(r, a || e.type)) && l.push(Z(t.messages.required, e.fullField));
    }, Nl = function(e, r, o, l, t) {
        (/^\s+$/.test(r) || r === "") && l.push(Z(t.messages.whitespace, e.fullField));
    }, $e, Cl = function() {
        if ($e) return $e;
        var d = "[a-fA-F\\d:]", e = function(M) {
            return M && M.includeBoundaries ? "(?:(?<=\\s|^)(?=" + d + ")|(?<=" + d + ")(?=\\s|$))" : "";
        }, r = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}", o = "[a-fA-F\\d]{1,4}", l = (`
(?:
(?:` + o + ":){7}(?:" + o + `|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:` + o + ":){6}(?:" + r + "|:" + o + `|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:` + o + ":){5}(?::" + r + "|(?::" + o + `){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:` + o + ":){4}(?:(?::" + o + "){0,1}:" + r + "|(?::" + o + `){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:` + o + ":){3}(?:(?::" + o + "){0,2}:" + r + "|(?::" + o + `){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:` + o + ":){2}(?:(?::" + o + "){0,3}:" + r + "|(?::" + o + `){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:` + o + ":){1}(?:(?::" + o + "){0,4}:" + r + "|(?::" + o + `){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::` + o + "){0,5}:" + r + "|(?::" + o + `){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`).replace(/\s*\/\/.*$/gm, "").replace(/\n/g, "").trim(), t = new RegExp("(?:^" + r + "$)|(?:^" + l + "$)"), a = new RegExp("^" + r + "$"), i = new RegExp("^" + l + "$"), n = function(M) {
            return M && M.exact ? t : new RegExp("(?:" + e(M) + r + e(M) + ")|(?:" + e(M) + l + e(M) + ")", "g");
        };
        n.v4 = function(c) {
            return c && c.exact ? a : new RegExp("" + e(c) + r + e(c), "g");
        }, n.v6 = function(c) {
            return c && c.exact ? i : new RegExp("" + e(c) + l + e(c), "g");
        };
        var m = "(?:(?:[a-z]+:)?//)", s = "(?:\\S+(?::\\S*)?@)?", g = n.v4().source, x = n.v6().source, v = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)", T = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*", p = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))", _ = "(?::\\d{2,5})?", A = '(?:[/?#][^\\s"]*)?', O = "(?:" + m + "|www\\.)" + s + "(?:localhost|" + g + "|" + x + "|" + v + T + p + ")" + _ + A;
        return $e = new RegExp("(?:^" + O + "$)", "i"), $e;
    }, Or = {
        email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
        hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
    }, Ce = {
        integer: function(e) {
            return Ce.number(e) && parseInt(e, 10) === e;
        },
        float: function(e) {
            return Ce.number(e) && !Ce.integer(e);
        },
        array: function(e) {
            return Array.isArray(e);
        },
        regexp: function(e) {
            if (e instanceof RegExp) return !0;
            try {
                return !!new RegExp(e);
            } catch  {
                return !1;
            }
        },
        date: function(e) {
            return typeof e.getTime == "function" && typeof e.getMonth == "function" && typeof e.getYear == "function" && !isNaN(e.getTime());
        },
        number: function(e) {
            return isNaN(e) ? !1 : typeof e == "number";
        },
        object: function(e) {
            return typeof e == "object" && !Ce.array(e);
        },
        method: function(e) {
            return typeof e == "function";
        },
        email: function(e) {
            return typeof e == "string" && e.length <= 320 && !!e.match(Or.email);
        },
        url: function(e) {
            return typeof e == "string" && e.length <= 2048 && !!e.match(Cl());
        },
        hex: function(e) {
            return typeof e == "string" && !!e.match(Or.hex);
        }
    }, El = function(e, r, o, l, t) {
        if (e.required && r === void 0) {
            ho(e, r, o, l, t);
            return;
        }
        var a = [
            "integer",
            "float",
            "array",
            "regexp",
            "object",
            "method",
            "email",
            "number",
            "date",
            "url",
            "hex"
        ], i = e.type;
        a.indexOf(i) > -1 ? Ce[i](r) || l.push(Z(t.messages.types[i], e.fullField, e.type)) : i && typeof r !== e.type && l.push(Z(t.messages.types[i], e.fullField, e.type));
    }, Ol = function(e, r, o, l, t) {
        var a = typeof e.len == "number", i = typeof e.min == "number", n = typeof e.max == "number", m = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, s = r, g = null, x = typeof r == "number", v = typeof r == "string", T = Array.isArray(r);
        if (x ? g = "number" : v ? g = "string" : T && (g = "array"), !g) return !1;
        T && (s = r.length), v && (s = r.replace(m, "_").length), a ? s !== e.len && l.push(Z(t.messages[g].len, e.fullField, e.len)) : i && !n && s < e.min ? l.push(Z(t.messages[g].min, e.fullField, e.min)) : n && !i && s > e.max ? l.push(Z(t.messages[g].max, e.fullField, e.max)) : i && n && (s < e.min || s > e.max) && l.push(Z(t.messages[g].range, e.fullField, e.min, e.max));
    }, ie = "enum", wl = function(e, r, o, l, t) {
        e[ie] = Array.isArray(e[ie]) ? e[ie] : [], e[ie].indexOf(r) === -1 && l.push(Z(t.messages[ie], e.fullField, e[ie].join(", ")));
    }, fl = function(e, r, o, l, t) {
        if (e.pattern) {
            if (e.pattern instanceof RegExp) e.pattern.lastIndex = 0, e.pattern.test(r) || l.push(Z(t.messages.pattern.mismatch, e.fullField, r, e.pattern));
            else if (typeof e.pattern == "string") {
                var a = new RegExp(e.pattern);
                a.test(r) || l.push(Z(t.messages.pattern.mismatch, e.fullField, r, e.pattern));
            }
        }
    }, B = {
        required: ho,
        whitespace: Nl,
        type: El,
        range: Ol,
        enum: wl,
        pattern: fl
    }, yl = function(e, r, o, l, t) {
        var a = [], i = e.required || !e.required && l.hasOwnProperty(e.field);
        if (i) {
            if (D(r, "string") && !e.required) return o();
            B.required(e, r, l, a, t, "string"), D(r, "string") || (B.type(e, r, l, a, t), B.range(e, r, l, a, t), B.pattern(e, r, l, a, t), e.whitespace === !0 && B.whitespace(e, r, l, a, t));
        }
        o(a);
    }, Xl = function(e, r, o, l, t) {
        var a = [], i = e.required || !e.required && l.hasOwnProperty(e.field);
        if (i) {
            if (D(r) && !e.required) return o();
            B.required(e, r, l, a, t), r !== void 0 && B.type(e, r, l, a, t);
        }
        o(a);
    }, $l = function(e, r, o, l, t) {
        var a = [], i = e.required || !e.required && l.hasOwnProperty(e.field);
        if (i) {
            if (r === "" && (r = void 0), D(r) && !e.required) return o();
            B.required(e, r, l, a, t), r !== void 0 && (B.type(e, r, l, a, t), B.range(e, r, l, a, t));
        }
        o(a);
    }, Il = function(e, r, o, l, t) {
        var a = [], i = e.required || !e.required && l.hasOwnProperty(e.field);
        if (i) {
            if (D(r) && !e.required) return o();
            B.required(e, r, l, a, t), r !== void 0 && B.type(e, r, l, a, t);
        }
        o(a);
    }, Fl = function(e, r, o, l, t) {
        var a = [], i = e.required || !e.required && l.hasOwnProperty(e.field);
        if (i) {
            if (D(r) && !e.required) return o();
            B.required(e, r, l, a, t), D(r) || B.type(e, r, l, a, t);
        }
        o(a);
    }, Dl = function(e, r, o, l, t) {
        var a = [], i = e.required || !e.required && l.hasOwnProperty(e.field);
        if (i) {
            if (D(r) && !e.required) return o();
            B.required(e, r, l, a, t), r !== void 0 && (B.type(e, r, l, a, t), B.range(e, r, l, a, t));
        }
        o(a);
    }, Rl = function(e, r, o, l, t) {
        var a = [], i = e.required || !e.required && l.hasOwnProperty(e.field);
        if (i) {
            if (D(r) && !e.required) return o();
            B.required(e, r, l, a, t), r !== void 0 && (B.type(e, r, l, a, t), B.range(e, r, l, a, t));
        }
        o(a);
    }, Vl = function(e, r, o, l, t) {
        var a = [], i = e.required || !e.required && l.hasOwnProperty(e.field);
        if (i) {
            if (r == null && !e.required) return o();
            B.required(e, r, l, a, t, "array"), r != null && (B.type(e, r, l, a, t), B.range(e, r, l, a, t));
        }
        o(a);
    }, Ul = function(e, r, o, l, t) {
        var a = [], i = e.required || !e.required && l.hasOwnProperty(e.field);
        if (i) {
            if (D(r) && !e.required) return o();
            B.required(e, r, l, a, t), r !== void 0 && B.type(e, r, l, a, t);
        }
        o(a);
    }, Hl = "enum", kl = function(e, r, o, l, t) {
        var a = [], i = e.required || !e.required && l.hasOwnProperty(e.field);
        if (i) {
            if (D(r) && !e.required) return o();
            B.required(e, r, l, a, t), r !== void 0 && B[Hl](e, r, l, a, t);
        }
        o(a);
    }, Wl = function(e, r, o, l, t) {
        var a = [], i = e.required || !e.required && l.hasOwnProperty(e.field);
        if (i) {
            if (D(r, "string") && !e.required) return o();
            B.required(e, r, l, a, t), D(r, "string") || B.pattern(e, r, l, a, t);
        }
        o(a);
    }, Kl = function(e, r, o, l, t) {
        var a = [], i = e.required || !e.required && l.hasOwnProperty(e.field);
        if (i) {
            if (D(r, "date") && !e.required) return o();
            if (B.required(e, r, l, a, t), !D(r, "date")) {
                var n;
                r instanceof Date ? n = r : n = new Date(r), B.type(e, n, l, a, t), n && B.range(e, n.getTime(), l, a, t);
            }
        }
        o(a);
    }, Yl = function(e, r, o, l, t) {
        var a = [], i = Array.isArray(r) ? "array" : typeof r;
        B.required(e, r, l, a, t, i), o(a);
    }, lr = function(e, r, o, l, t) {
        var a = e.type, i = [], n = e.required || !e.required && l.hasOwnProperty(e.field);
        if (n) {
            if (D(r, a) && !e.required) return o();
            B.required(e, r, l, i, t, a), D(r, a) || B.type(e, r, l, i, t);
        }
        o(i);
    }, Ql = function(e, r, o, l, t) {
        var a = [], i = e.required || !e.required && l.hasOwnProperty(e.field);
        if (i) {
            if (D(r) && !e.required) return o();
            B.required(e, r, l, a, t);
        }
        o(a);
    }, Ee = {
        string: yl,
        method: Xl,
        number: $l,
        boolean: Il,
        regexp: Fl,
        integer: Dl,
        float: Rl,
        array: Vl,
        object: Ul,
        enum: kl,
        pattern: Wl,
        date: Kl,
        url: lr,
        hex: lr,
        email: lr,
        required: Yl,
        any: Ql
    };
    function gr() {
        return {
            default: "Validation error on field %s",
            required: "%s is required",
            enum: "%s must be one of %s",
            whitespace: "%s cannot be empty",
            date: {
                format: "%s date %s is invalid for format %s",
                parse: "%s date could not be parsed, %s is invalid ",
                invalid: "%s date %s is invalid"
            },
            types: {
                string: "%s is not a %s",
                method: "%s is not a %s (function)",
                array: "%s is not an %s",
                object: "%s is not an %s",
                number: "%s is not a %s",
                date: "%s is not a %s",
                boolean: "%s is not a %s",
                integer: "%s is not an %s",
                float: "%s is not a %s",
                regexp: "%s is not a valid %s",
                email: "%s is not a valid %s",
                url: "%s is not a valid %s",
                hex: "%s is not a valid %s"
            },
            string: {
                len: "%s must be exactly %s characters",
                min: "%s must be at least %s characters",
                max: "%s cannot be longer than %s characters",
                range: "%s must be between %s and %s characters"
            },
            number: {
                len: "%s must equal %s",
                min: "%s cannot be less than %s",
                max: "%s cannot be greater than %s",
                range: "%s must be between %s and %s"
            },
            array: {
                len: "%s must be exactly %s in length",
                min: "%s cannot be less than %s in length",
                max: "%s cannot be greater than %s in length",
                range: "%s must be between %s and %s in length"
            },
            pattern: {
                mismatch: "%s value %s does not match pattern %s"
            },
            clone: function() {
                var e = JSON.parse(JSON.stringify(this));
                return e.clone = this.clone, e;
            }
        };
    }
    var xr = gr(), fe = function() {
        function d(r) {
            this.rules = null, this._messages = xr, this.define(r);
        }
        var e = d.prototype;
        return e.define = function(o) {
            var l = this;
            if (!o) throw new Error("Cannot configure a schema with no rules");
            if (typeof o != "object" || Array.isArray(o)) throw new Error("Rules must be an object");
            this.rules = {}, Object.keys(o).forEach(function(t) {
                var a = o[t];
                l.rules[t] = Array.isArray(a) ? a : [
                    a
                ];
            });
        }, e.messages = function(o) {
            return o && (this._messages = Er(gr(), o)), this._messages;
        }, e.validate = function(o, l, t) {
            var a = this;
            l === void 0 && (l = {}), t === void 0 && (t = function() {});
            var i = o, n = l, m = t;
            if (typeof n == "function" && (m = n, n = {}), !this.rules || Object.keys(this.rules).length === 0) return m && m(null, i), Promise.resolve(i);
            function s(p) {
                var _ = [], A = {};
                function O(M) {
                    if (Array.isArray(M)) {
                        var N;
                        _ = (N = _).concat.apply(N, M);
                    } else _.push(M);
                }
                for(var c = 0; c < p.length; c++)O(p[c]);
                _.length ? (A = sr(_), m(_, A)) : m(null, i);
            }
            if (n.messages) {
                var g = this.messages();
                g === xr && (g = gr()), Er(g, n.messages), n.messages = g;
            } else n.messages = this.messages();
            var x = {}, v = n.keys || Object.keys(this.rules);
            v.forEach(function(p) {
                var _ = a.rules[p], A = i[p];
                _.forEach(function(O) {
                    var c = O;
                    typeof c.transform == "function" && (i === o && (i = oe({}, i)), A = i[p] = c.transform(A)), typeof c == "function" ? c = {
                        validator: c
                    } : c = oe({}, c), c.validator = a.getValidationMethod(c), c.validator && (c.field = p, c.fullField = c.fullField || p, c.type = a.getType(c), x[p] = x[p] || [], x[p].push({
                        rule: c,
                        value: A,
                        source: i,
                        field: p
                    }));
                });
            });
            var T = {};
            return _l(x, n, function(p, _) {
                var A = p.rule, O = (A.type === "object" || A.type === "array") && (typeof A.fields == "object" || typeof A.defaultField == "object");
                O = O && (A.required || !A.required && p.value), A.field = p.field;
                function c(u, L) {
                    return oe({}, L, {
                        fullField: A.fullField + "." + u,
                        fullFields: A.fullFields ? [].concat(A.fullFields, [
                            u
                        ]) : [
                            u
                        ]
                    });
                }
                function M(u) {
                    u === void 0 && (u = []);
                    var L = Array.isArray(u) ? u : [
                        u
                    ];
                    !n.suppressWarning && L.length && d.warning("async-validator:", L), L.length && A.message !== void 0 && (L = [].concat(A.message));
                    var C = L.map(Cr(A, i));
                    if (n.first && C.length) return T[A.field] = 1, _(C);
                    if (!O) _(C);
                    else {
                        if (A.required && !p.value) return A.message !== void 0 ? C = [].concat(A.message).map(Cr(A, i)) : n.error && (C = [
                            n.error(A, Z(n.messages.required, A.field))
                        ]), _(C);
                        var I = {};
                        A.defaultField && Object.keys(p.value).map(function($) {
                            I[$] = A.defaultField;
                        }), I = oe({}, I, p.rule.fields);
                        var K = {};
                        Object.keys(I).forEach(function($) {
                            var X = I[$], ee = Array.isArray(X) ? X : [
                                X
                            ];
                            K[$] = ee.map(c.bind(null, $));
                        });
                        var S = new d(K);
                        S.messages(n.messages), p.rule.options && (p.rule.options.messages = n.messages, p.rule.options.error = n.error), S.validate(p.value, p.rule.options || n, function($) {
                            var X = [];
                            C && C.length && X.push.apply(X, C), $ && $.length && X.push.apply(X, $), _(X.length ? X : null);
                        });
                    }
                }
                var N;
                if (A.asyncValidator) N = A.asyncValidator(A, p.value, M, p.source, n);
                else if (A.validator) {
                    try {
                        N = A.validator(A, p.value, M, p.source, n);
                    } catch (u) {
                        console.error?.(u), n.suppressValidatorError || setTimeout(function() {
                            throw u;
                        }, 0), M(u.message);
                    }
                    N === !0 ? M() : N === !1 ? M(typeof A.message == "function" ? A.message(A.fullField || A.field) : A.message || (A.fullField || A.field) + " fails") : N instanceof Array ? M(N) : N instanceof Error && M(N.message);
                }
                N && N.then && N.then(function() {
                    return M();
                }, function(u) {
                    return M(u);
                });
            }, function(p) {
                s(p);
            }, i);
        }, e.getType = function(o) {
            if (o.type === void 0 && o.pattern instanceof RegExp && (o.type = "pattern"), typeof o.validator != "function" && o.type && !Ee.hasOwnProperty(o.type)) throw new Error(Z("Unknown rule type %s", o.type));
            return o.type || "string";
        }, e.getValidationMethod = function(o) {
            if (typeof o.validator == "function") return o.validator;
            var l = Object.keys(o), t = l.indexOf("message");
            return t !== -1 && l.splice(t, 1), l.length === 1 && l[0] === "required" ? Ee.required : Ee[this.getType(o)] || void 0;
        }, d;
    }();
    fe.register = function(e, r) {
        if (typeof r != "function") throw new Error("Cannot register a validator by type, validator is not a function");
        Ee[e] = r;
    };
    fe.warning = Tl;
    fe.messages = xr;
    fe.validators = Ee;
    const Zl = [
        "",
        "error",
        "validating",
        "success"
    ], zl = ze({
        label: String,
        labelWidth: {
            type: [
                String,
                Number
            ],
            default: ""
        },
        labelPosition: {
            type: String,
            values: [
                "left",
                "right",
                "top",
                ""
            ],
            default: ""
        },
        prop: {
            type: ar([
                String,
                Array
            ])
        },
        required: {
            type: Boolean,
            default: void 0
        },
        rules: {
            type: ar([
                Object,
                Array
            ])
        },
        error: String,
        validateStatus: {
            type: String,
            values: Zl
        },
        for: String,
        inlineMessage: {
            type: [
                String,
                Boolean
            ],
            default: ""
        },
        showMessage: {
            type: Boolean,
            default: !0
        },
        size: {
            type: String,
            values: So
        }
    }), wr = "ElLabelWrap";
    var Jl = k({
        name: wr,
        props: {
            isAutoWidth: Boolean,
            updateAll: Boolean
        },
        setup (d, { slots: e }) {
            const r = We(Ar, void 0), o = We(ir);
            o || ko(wr, "usage: <el-form-item><label-wrap /></el-form-item>");
            const l = Je("form"), t = F(), a = F(0), i = ()=>{
                var s;
                if ((s = t.value) != null && s.firstElementChild) {
                    const g = window.getComputedStyle(t.value.firstElementChild).width;
                    return Math.ceil(Number.parseFloat(g));
                } else return 0;
            }, n = (s = "update")=>{
                xo(()=>{
                    e.default && d.isAutoWidth && (s === "update" ? a.value = i() : s === "remove" && r?.deregisterLabelWidth(a.value));
                });
            }, m = ()=>n("update");
            return Ze(()=>{
                m();
            }), go(()=>{
                n("remove");
            }), fo(()=>m()), ke(a, (s, g)=>{
                d.updateAll && r?.registerLabelWidth(s, g);
            }), Wo(f(()=>{
                var s, g;
                return (g = (s = t.value) == null ? void 0 : s.firstElementChild) != null ? g : null;
            }), m), ()=>{
                var s, g;
                if (!e) return null;
                const { isAutoWidth: x } = d;
                if (x) {
                    const v = r?.autoLabelWidth, T = o?.hasLabel, p = {};
                    if (T && v && v !== "auto") {
                        const _ = Math.max(0, Number.parseInt(v, 10) - a.value), O = (o.labelPosition || r.labelPosition) === "left" ? "marginRight" : "marginLeft";
                        _ && (p[O] = `${_}px`);
                    }
                    return G("div", {
                        ref: t,
                        class: [
                            l.be("item", "label-wrap")
                        ],
                        style: p
                    }, [
                        (s = e.default) == null ? void 0 : s.call(e)
                    ]);
                } else return G(cr, {
                    ref: t
                }, [
                    (g = e.default) == null ? void 0 : g.call(e)
                ]);
            };
        }
    });
    const ql = k({
        name: "ElFormItem"
    }), jl = k({
        ...ql,
        props: zl,
        setup (d, { expose: e }) {
            const r = d, o = yo(), l = We(Ar, void 0), t = We(ir, void 0), a = Ao(void 0, {
                formItem: !1
            }), i = Je("form-item"), n = Ko().value, m = F([]), s = F(""), g = Yo(s, 100), x = F(""), v = F();
            let T, p = !1;
            const _ = f(()=>r.labelPosition || l?.labelPosition), A = f(()=>{
                if (_.value === "top") return {};
                const h = _r(r.labelWidth || l?.labelWidth || "");
                return h ? {
                    width: h
                } : {};
            }), O = f(()=>{
                if (_.value === "top" || l?.inline) return {};
                if (!r.label && !r.labelWidth && K) return {};
                const h = _r(r.labelWidth || l?.labelWidth || "");
                return !r.label && !o.label ? {
                    marginLeft: h
                } : {};
            }), c = f(()=>[
                    i.b(),
                    i.m(a.value),
                    i.is("error", s.value === "error"),
                    i.is("validating", s.value === "validating"),
                    i.is("success", s.value === "success"),
                    i.is("required", ye.value || r.required),
                    i.is("no-asterisk", l?.hideRequiredAsterisk),
                    l?.requireAsteriskPosition === "right" ? "asterisk-right" : "asterisk-left",
                    {
                        [i.m("feedback")]: l?.statusIcon,
                        [i.m(`label-${_.value}`)]: _.value
                    }
                ]), M = f(()=>Ke(r.inlineMessage) ? r.inlineMessage : l?.inlineMessage || !1), N = f(()=>[
                    i.e("error"),
                    {
                        [i.em("error", "inline")]: M.value
                    }
                ]), u = f(()=>r.prop ? dr(r.prop) ? r.prop : r.prop.join(".") : ""), L = f(()=>!!(r.label || o.label)), C = f(()=>r.for || (m.value.length === 1 ? m.value[0] : void 0)), I = f(()=>!C.value && L.value), K = !!t, S = f(()=>{
                const h = l?.model;
                if (!(!h || !r.prop)) return or(h, r.prop).value;
            }), $ = f(()=>{
                const { required: h } = r, w = [];
                r.rules && w.push(...tr(r.rules));
                const V = l?.rules;
                if (V && r.prop) {
                    const R = or(V, r.prop).value;
                    R && w.push(...tr(R));
                }
                if (h !== void 0) {
                    const R = w.map((J, te)=>[
                            J,
                            te
                        ]).filter(([J])=>Object.keys(J).includes("required"));
                    if (R.length > 0) for (const [J, te] of R)J.required !== h && (w[te] = {
                        ...J,
                        required: h
                    });
                    else w.push({
                        required: h
                    });
                }
                return w;
            }), X = f(()=>$.value.length > 0), ee = (h)=>$.value.filter((V)=>!V.trigger || !h ? !0 : to(V.trigger) ? V.trigger.includes(h) : V.trigger === h).map(({ trigger: V, ...R })=>R), ye = f(()=>$.value.some((h)=>h.required)), Bo = f(()=>{
                var h;
                return g.value === "error" && r.showMessage && ((h = l?.showMessage) != null ? h : !0);
            }), Tr = f(()=>`${r.label || ""}${l?.labelSuffix || ""}`), ae = (h)=>{
                s.value = h;
            }, No = (h)=>{
                var w, V;
                const { errors: R, fields: J } = h;
                (!R || !J) && console.error(h), ae("error"), x.value = R ? (V = (w = R?.[0]) == null ? void 0 : w.message) != null ? V : `${r.prop} is required` : "", l?.emit("validate", r.prop, !1, x.value);
            }, Co = ()=>{
                ae("success"), l?.emit("validate", r.prop, !0, "");
            }, Eo = async (h)=>{
                const w = u.value;
                return new fe({
                    [w]: h
                }).validate({
                    [w]: S.value
                }, {
                    firstFields: !0
                }).then(()=>(Co(), !0)).catch((R)=>(No(R), Promise.reject(R)));
            }, hr = async (h, w)=>{
                if (p || !r.prop) return !1;
                const V = so(w);
                if (!X.value) return w?.(!1), !1;
                const R = ee(h);
                return R.length === 0 ? (w?.(!0), !0) : (ae("validating"), Eo(R).then(()=>(w?.(!0), !0)).catch((J)=>{
                    const { fields: te } = J;
                    return w?.(!1, te), V ? !1 : Promise.reject(te);
                }));
            }, je = ()=>{
                ae(""), x.value = "", p = !1;
            }, br = async ()=>{
                const h = l?.model;
                if (!h || !r.prop) return;
                const w = or(h, r.prop);
                p = !0, w.value = Gr(T), await xo(), je(), p = !1;
            }, Oo = (h)=>{
                m.value.includes(h) || m.value.push(h);
            }, wo = (h)=>{
                m.value = m.value.filter((w)=>w !== h);
            };
            ke(()=>r.error, (h)=>{
                x.value = h || "", ae(h ? "error" : "");
            }, {
                immediate: !0
            }), ke(()=>r.validateStatus, (h)=>ae(h || ""));
            const er = no({
                ...mo(r),
                $el: v,
                size: a,
                validateState: s,
                labelId: n,
                inputIds: m,
                isGroup: I,
                hasLabel: L,
                fieldValue: S,
                addInputId: Oo,
                removeInputId: wo,
                resetField: br,
                clearValidate: je,
                validate: hr
            });
            return io(ir, er), Ze(()=>{
                r.prop && (l?.addField(er), T = Gr(S.value));
            }), go(()=>{
                l?.removeField(er);
            }), e({
                size: a,
                validateMessage: x,
                validateState: s,
                validate: hr,
                clearValidate: je,
                resetField: br
            }), (h, w)=>{
                var V;
                return y(), H("div", {
                    ref_key: "formItemRef",
                    ref: v,
                    class: re(b(c)),
                    role: b(I) ? "group" : void 0,
                    "aria-labelledby": b(I) ? b(n) : void 0
                }, [
                    G(b(Jl), {
                        "is-auto-width": b(A).width === "auto",
                        "update-all": ((V = b(l)) == null ? void 0 : V.labelWidth) === "auto"
                    }, {
                        default: E(()=>[
                                b(L) ? (y(), Y(co(b(C) ? "label" : "div"), {
                                    key: 0,
                                    id: b(n),
                                    for: b(C),
                                    class: re(b(i).e("label")),
                                    style: Lr(b(A))
                                }, {
                                    default: E(()=>[
                                            Le(h.$slots, "label", {
                                                label: b(Tr)
                                            }, ()=>[
                                                    Q(le(b(Tr)), 1)
                                                ])
                                        ]),
                                    _: 3
                                }, 8, [
                                    "id",
                                    "for",
                                    "class",
                                    "style"
                                ])) : _e("v-if", !0)
                            ]),
                        _: 3
                    }, 8, [
                        "is-auto-width",
                        "update-all"
                    ]),
                    W("div", {
                        class: re(b(i).e("content")),
                        style: Lr(b(O))
                    }, [
                        Le(h.$slots, "default"),
                        G(Xo, {
                            name: `${b(i).namespace.value}-zoom-in-top`
                        }, {
                            default: E(()=>[
                                    b(Bo) ? Le(h.$slots, "error", {
                                        key: 0,
                                        error: x.value
                                    }, ()=>[
                                            W("div", {
                                                class: re(b(N))
                                            }, le(x.value), 3)
                                        ]) : _e("v-if", !0)
                                ]),
                            _: 3
                        }, 8, [
                            "name"
                        ])
                    ], 6)
                ], 10, [
                    "role",
                    "aria-labelledby"
                ]);
            };
        }
    });
    var bo = Sr(jl, [
        [
            "__file",
            "form-item.vue"
        ]
    ]);
    const ed = po(Al, {
        FormItem: bo
    }), rd = Qo(bo), od = ze({
        type: {
            type: String,
            values: [
                "primary",
                "success",
                "warning",
                "info",
                "danger",
                "default"
            ],
            default: "default"
        },
        underline: {
            type: [
                Boolean,
                String
            ],
            values: [
                !0,
                !1,
                "always",
                "never",
                "hover"
            ],
            default: "hover"
        },
        disabled: Boolean,
        href: {
            type: String,
            default: ""
        },
        target: {
            type: String,
            default: "_self"
        },
        icon: {
            type: Zo
        }
    }), ld = {
        click: (d)=>d instanceof MouseEvent
    }, dd = k({
        name: "ElLink"
    }), ad = k({
        ...dd,
        props: od,
        emits: ld,
        setup (d, { emit: e }) {
            const r = d;
            zo({
                scope: "el-link",
                from: "The underline option (boolean)",
                replacement: "'always' | 'hover' | 'never'",
                version: "3.0.0",
                ref: "https://element-plus.org/en-US/component/link.html#underline"
            }, f(()=>Ke(r.underline)));
            const o = Je("link"), l = f(()=>[
                    o.b(),
                    o.m(r.type),
                    o.is("disabled", r.disabled),
                    o.is("underline", t.value === "always"),
                    o.is("hover-underline", t.value === "hover" && !r.disabled)
                ]), t = f(()=>Ke(r.underline) ? r.underline ? "hover" : "never" : r.underline);
            function a(i) {
                r.disabled || e("click", i);
            }
            return (i, n)=>(y(), H("a", {
                    class: re(b(l)),
                    href: i.disabled || !i.href ? void 0 : i.href,
                    target: i.disabled || !i.href ? void 0 : i.target,
                    onClick: a
                }, [
                    i.icon ? (y(), Y(b(vo), {
                        key: 0
                    }, {
                        default: E(()=>[
                                (y(), Y(co(i.icon)))
                            ]),
                        _: 1
                    })) : _e("v-if", !0),
                    i.$slots.default ? (y(), H("span", {
                        key: 1,
                        class: re(b(o).e("inner"))
                    }, [
                        Le(i.$slots, "default")
                    ], 2)) : _e("v-if", !0),
                    i.$slots.icon ? Le(i.$slots, "icon", {
                        key: 2
                    }) : _e("v-if", !0)
                ], 10, [
                    "href",
                    "target"
                ]));
        }
    });
    var td = Sr(ad, [
        [
            "__file",
            "link.vue"
        ]
    ]);
    const id = po(td), Ye = uo(), Qe = uo();
    let Oe = !1;
    const vr = async ()=>{
        if (!Oe) try {
            const d = "showSaveFilePicker" in window;
            let e;
            d ? (console.log("Using modern File System Access API (download2)"), e = await rr(()=>import("./download2-BY-60XXT.js"), __vite__mapDeps([0,1]))) : (console.log("Using fallback download method"), e = await rr(()=>import("./download-DP2jPJgO.js").then(async (m)=>{
                    await m.__tla;
                    return m;
                }), __vite__mapDeps([2,1,3,4,5,6]))), Ye.value = e.streamDownloadSingleFile, Qe.value = e.streamDownloadMultipleFiles, Oe = !0;
        } catch (d) {
            console.error("Error initializing download functions:", d);
            const e = await rr(()=>import("./download-DP2jPJgO.js").then(async (m)=>{
                    await m.__tla;
                    return m;
                }), __vite__mapDeps([2,1,3,4,5,6]));
            Ye.value = e.streamDownloadSingleFile, Qe.value = e.streamDownloadMultipleFiles, Oe = !0;
        }
    };
    vr();
    const nd = async (...d)=>{
        if (Oe || await vr(), !Ye.value) throw new Error("Download function not initialized");
        return Ye.value(...d);
    }, md = async (...d)=>{
        if (Oe || await vr(), !Qe.value) throw new Error("Download function not initialized");
        return Qe.value(...d);
    };
    var ne = {}, me = {}, Ge = {}, Ie = {}, fr;
    function sd() {
        return fr || (fr = 1, Object.defineProperty(Ie, "__esModule", {
            value: !0
        }), Ie.trim = (d, e)=>d.replace(new RegExp("^[" + e + "]+|[" + e + "]+$", "g"), "")), Ie;
    }
    var yr;
    function de() {
        if (yr) return Ge;
        yr = 1, Object.defineProperty(Ge, "__esModule", {
            value: !0
        });
        const d = sd();
        return Ge.formatVersion = (e, r)=>{
            if (e === void 0) return "";
            const o = d.trim(e, ". ").replace(new RegExp("_", "g"), "."), l = o.split(".");
            return /^\d+$/.test(l.join("")) ? r !== 0 && Number.isInteger(parseFloat(o)) ? parseInt(o, 10).toFixed(1) : l.length > 1 && r !== null ? l.slice(0, r + 1).join(".") : o : o;
        }, Ge.parseBrowserEngineVersion = (e, r)=>{
            if (!r) return "";
            const o = new RegExp(`${r}\\s*\\/?\\s*((?:(?=\\d+\\.\\d)\\d+[.\\d]*|\\d{1,7}(?=(?:\\D|$))))`, "i"), l = e.match(o);
            return l ? l.pop() : "";
        }, Ge;
    }
    var Fe = {}, Xr;
    function z() {
        return Xr || (Xr = 1, Object.defineProperty(Fe, "__esModule", {
            value: !0
        }), Fe.variableReplacement = (d, e)=>{
            const r = new RegExp("\\$\\d", "g");
            return d === null ? "" : d.replace(r, (o)=>{
                const l = parseInt(o.substr(1), 10);
                return e[l - 1] || "";
            });
        }), Fe;
    }
    var De = {}, Re = {}, $r;
    function gd() {
        return $r || ($r = 1, Object.defineProperty(Re, "__esModule", {
            value: !0
        }), Re.memoryCache = ()=>{
            const d = {};
            return {
                set: (o, l)=>{
                    d[o] = l;
                },
                get: (o)=>{
                    if (d.hasOwnProperty(o)) return d[o];
                }
            };
        }), Re;
    }
    var Ir;
    function U() {
        if (Ir) return De;
        Ir = 1, Object.defineProperty(De, "__esModule", {
            value: !0
        });
        const e = gd().memoryCache(), r = (o)=>{
            const l = e.get(o);
            if (l) return l.value;
            const t = RegExp(`(?:^|[^A-Z0-9-_]|[^A-Z0-9-]_|sprd-)(?:${o})`, "i");
            return e.set(o, {
                value: t
            }), t;
        };
        return De.userAgentParser = (o, l)=>{
            try {
                const a = r(o).exec(l);
                return a ? a.slice(1) : null;
            } catch  {
                return null;
            }
        }, De;
    }
    const xd = JSON.parse('[{"regex":"SEB/(?:(\\\\d+[\\\\.\\\\d]+))?","name":"Safe Exam Browser","version":"$1"},{"regex":"Colibri/(?:(\\\\d+[\\\\.\\\\d]+))?","name":"Colibri","version":"$1"},{"regex":"Xvast/(?:(\\\\d+[\\\\.\\\\d]+))?","name":"Xvast","version":"$1"},{"regex":"TungstenBrowser/(?:(\\\\d+[\\\\.\\\\d]+))?","name":"Tungsten","version":"$1"},{"regex":"Lulumi-browser/(?:(\\\\d+[\\\\.\\\\d]+))?","name":"Lulumi","version":"$1"},{"regex":"ybrowser/(?:(\\\\d+[\\\\.\\\\d]+))?","name":"Yahoo! Japan Browser","version":"$1"},{"regex":"iLunascapeLite/(?:(\\\\d+[\\\\.\\\\d]+))?","name":"Lunascape Lite","version":"$1"},{"regex":"Polypane/(?:(\\\\d+[\\\\.\\\\d]+))?","name":"Polypane","version":"$1"},{"regex":"OhHaiBrowser/(?:(\\\\d+[\\\\.\\\\d]+))?","name":"OhHai Browser","version":"$1"},{"regex":"Sizzy/(?:(\\\\d+[\\\\.\\\\d]+))?","name":"Sizzy","version":"$1"},{"regex":"GlassBrowser/(?:(\\\\d+[\\\\.\\\\d]+))?","name":"Glass Browser","version":"$1"},{"regex":"ToGate/(?:(\\\\d+[\\\\.\\\\d]+))?","name":"ToGate","version":"$1"},{"regex":"AirWatch Browser v(?:(\\\\d+[\\\\.\\\\d]+))?","name":"VMware AirWatch","version":"$1"},{"regex":"ADG/(?:(\\\\d+[\\\\.\\\\d]+))?","name":"AOL Desktop","version":"$1"},{"regex":"Elements Browser/(?:(\\\\d+[\\\\.\\\\d]+))?","name":"Elements Browser","version":"$1"},{"regex":"Light/(\\\\d+[\\\\.\\\\d]+)","name":"Light","version":"$1"},{"regex":"Valve Steam GameOverlay/(?:(\\\\d+[\\\\.\\\\d]+))?","name":"Steam In-Game Overlay","version":"$1"},{"regex":"115Browser/(?:(\\\\d+[\\\\.\\\\d]+))?","name":"115 Browser","version":"$1"},{"regex":"Atom/(?:(\\\\d+[\\\\.\\\\d]+))?","name":"Atom","version":"$1"},{"regex":"Mobile VR.+Firefox","name":"Firefox Reality","version":""},{"regex":"AVG(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"AVG Secure Browser","version":"$1"},{"regex":"Start/(?:(\\\\d+[\\\\.\\\\d]+))?","name":"START Internet Browser","version":"$1"},{"regex":"Lovense(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Lovense Browser","version":"$1"},{"regex":"com.airfind.deltabrowser(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Delta Browser","version":"$1"},{"regex":"(?:Ordissimo|webissimo3)(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Ordissimo","version":"$1"},{"regex":"CCleaner(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"CCleaner","version":"$1"},{"regex":"AlohaLite(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Aloha Browser Lite","version":"$1"},{"regex":"TaoBrowser(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Tao Browser","version":"$1"},{"regex":"Falkon(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Falkon","version":"$1"},{"regex":"mCent(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"mCent","version":"$1"},{"regex":"SalamWeb(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"SalamWeb","version":"$1"},{"regex":"BlackHawk(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"BlackHawk","version":"$1"},{"regex":"Minimo(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Minimo","version":"$1"},{"regex":"WIB(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Wear Internet Browser","version":"$1"},{"regex":"Origyn Web Browser","name":"Origyn Web Browser","version":""},{"regex":"Kinza(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Kinza","version":"$1"},{"regex":"Beamrise(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Beamrise","version":"$1"},{"regex":"Faux(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Faux Browser","version":"$1"},{"regex":"splash Version(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Splash","version":"$1"},{"regex":"MZBrowser(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Meizu Browser","version":"$1"},{"regex":"COSBrowser(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"COS Browser","version":"$1"},{"regex":"Crusta(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Crusta","version":"$1"},{"regex":"Hawk/TurboBrowser(?:/v?(\\\\d+[\\\\.\\\\d]+))?","name":"Hawk Turbo Browser","version":"$1","engine":{"default":"Blink"}},{"regex":"FreeU(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"FreeU","version":"$1","engine":{"default":"Blink"}},{"regex":"NoxBrowser(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Nox Browser","version":"$1","engine":{"default":"Blink"}},{"regex":"Basilisk(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Basilisk","version":"$1","engine":{"default":"Goanna"}},{"regex":"SputnikBrowser(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Sputnik Browser","version":"$1","engine":{"default":"Blink"}},{"regex":"TNSBrowser(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"K.Browser","version":"$1","engine":{"default":"Blink"}},{"regex":"OculusBrowser(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Oculus Browser","version":"$1"},{"regex":"JioBrowser(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Jio Browser","version":"$1","engine":{"default":"Blink"}},{"regex":"Hola(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"hola! Browser","version":"$1","engine":{"default":"Blink"}},{"regex":"HuaweiBrowser(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Huawei Browser","version":"$1"},{"regex":"VivoBrowser(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"vivo Browser","version":"$1"},{"regex":"RealmeBrowser(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Realme Browser","version":"$1"},{"regex":"Beaker ?Browser(?:[/ ](\\\\d+[\\\\.\\\\d]+))?","name":"Beaker Browser","version":"$1","engine":{"default":"Blink"}},{"regex":"QwantMobile(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Qwant Mobile","version":"$1","engine":{"default":"Gecko"}},{"regex":"Qwant/(\\\\d+[\\\\.\\\\d]+)","name":"Qwant Mobile","version":"$1","engine":{"default":"Gecko"}},{"regex":"TenFourFox(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"TenFourFox","version":"$1","engine":{"default":"Gecko"}},{"regex":"AOLShield(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"AOL Shield","version":"$1","engine":{"default":"Gecko"}},{"regex":"Edge[ /](\\\\d+[\\\\.\\\\d]+)","name":"Microsoft Edge","version":"$1","engine":{"default":"Edge"}},{"regex":"EdgiOS[ /](\\\\d+[\\\\.\\\\d]+)","name":"Microsoft Edge","version":"$1","engine":{"default":"WebKit"}},{"regex":"EdgA[ /](\\\\d+[\\\\.\\\\d]+)","name":"Microsoft Edge","version":"$1","engine":{"default":"Blink"}},{"regex":"Edg[ /](\\\\d+[\\\\.\\\\d]+)","name":"Microsoft Edge","version":"$1","engine":{"default":"Blink"}},{"regex":"QIHU 360[ES]E","name":"360 Browser","version":""},{"regex":"360 Aphone Browser(?: \\\\((\\\\d+[\\\\.\\\\d]+)(?:beta)?\\\\))?","name":"360 Phone Browser","version":"$1","engine":{"default":"WebKit"}},{"regex":"SailfishBrowser(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Sailfish Browser","version":"$1","engine":{"default":"Gecko"}},{"regex":"IceCat(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"IceCat","version":"$1","engine":{"default":"Gecko"}},{"regex":"Mobicip","name":"Mobicip","version":"","engine":{"default":"Gecko"}},{"regex":"Camino(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Camino","version":"$1","engine":{"default":"Gecko"}},{"regex":"Waterfox(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Waterfox","version":"$1","engine":{"default":"Gecko"}},{"regex":"AlohaBrowser(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Aloha Browser","version":"$1"},{"regex":"(?:Avast|ASW|Safer)(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Avast Secure Browser","version":"$1"},{"regex":"Epic(?:/(\\\\d+[\\\\.\\\\d]+))","name":"Epic","version":"$1","engine":{"default":"Gecko"}},{"regex":"Fennec(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Fennec","version":"$1","engine":{"default":"Gecko"}},{"regex":"Firefox.*Tablet browser (\\\\d+[\\\\.\\\\d]+)","name":"MicroB","version":"$1","engine":{"default":"Gecko"}},{"regex":"Maemo Browser(?: (\\\\d+[\\\\.\\\\d]+))?","name":"MicroB","version":"$1","engine":{"default":"Gecko"}},{"regex":"Deepnet Explorer (\\\\d+[\\\\.\\\\d]+)?","name":"Deepnet Explorer","version":"$1"},{"regex":"Avant Browser","name":"Avant Browser","version":"","engine":{"default":""}},{"regex":"OppoBrowser(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Oppo Browser","version":"$1"},{"regex":"Chrome/(\\\\d+[\\\\.\\\\d]+).*MRCHROME","name":"Amigo","version":"$1","engine":{"default":"WebKit","versions":{"28":"Blink"}}},{"regex":"AtomicBrowser(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Atomic Web Browser","version":"$1"},{"regex":"Bunjalloo(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Bunjalloo","version":"$1"},{"regex":"Brave(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Brave","version":"$1","engine":{"default":"Blink"}},{"regex":"Iridium(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Iridium","version":"$1"},{"regex":"Iceweasel(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Iceweasel","version":"$1","engine":{"default":"Gecko"}},{"regex":"WebPositive","name":"WebPositive","version":"","engine":{"default":"WebKit"}},{"regex":".*Goanna.*PaleMoon(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Pale Moon","version":"$1","engine":{"default":"Goanna"}},{"regex":"PaleMoon(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Pale Moon","version":"$1","engine":{"default":"Gecko"}},{"regex":"CometBird(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"CometBird","version":"$1","engine":{"default":"Gecko"}},{"regex":"IceDragon(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"IceDragon","version":"$1","engine":{"default":"Gecko"}},{"regex":"Flock(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Flock","version":"$1","engine":{"default":"Gecko","versions":{"3":"WebKit"}}},{"regex":"JigBrowserPlus/(?:(\\\\d+[\\\\.\\\\d]+))?","name":"Jig Browser Plus","version":"$1"},{"regex":"jig browser(?: web;|9i?)?(?:[/ ](\\\\d+[\\\\.\\\\d]+))?","name":"Jig Browser","version":"$1"},{"regex":"Kapiko(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Kapiko","version":"$1","engine":{"default":"Gecko"}},{"regex":"Kylo(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Kylo","version":"$1","engine":{"default":"Gecko"}},{"regex":"Origin/(?:(\\\\d+[\\\\.\\\\d]+))?","name":"Origin In-Game Overlay","version":"$1"},{"regex":"Cunaguaro(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Cunaguaro","version":"$1"},{"regex":"TO-Browser(?:/TOB(\\\\d+[\\\\.\\\\d]+))?","name":"t-online.de Browser","version":"$1"},{"regex":"Kazehakase(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Kazehakase","version":"$1","engine":{"default":""}},{"regex":"ArcticFox(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Arctic Fox","version":"$1","engine":{"default":"Goanna"}},{"regex":"Mypal(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Mypal","version":"$1","engine":{"default":"Goanna"}},{"regex":"Centaury(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Centaury","version":"$1","engine":{"default":"Goanna"}},{"regex":"(?:Focus|Klar)(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Firefox Focus","version":"$1"},{"regex":"Cyberfox(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Cyberfox","version":"$1","engine":{"default":"Gecko"}},{"regex":"Firefox/(\\\\d+[\\\\.\\\\d]+).*\\\\(Swiftfox\\\\)","name":"Swiftfox","version":"$1","engine":{"default":"Gecko"}},{"regex":"(?:Mobile|Tablet).*Servo.*Firefox(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Firefox Mobile","version":"$1","engine":{"default":"Servo"}},{"regex":"(?:Mobile|Tablet).*Firefox(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Firefox Mobile","version":"$1","engine":{"default":"Gecko"}},{"regex":"FxiOS/(\\\\d+[\\\\.\\\\d]+)","name":"Firefox Mobile iOS","version":"$1","engine":{"default":"WebKit"}},{"regex":".*Servo.*Firefox(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Firefox","version":"$1","engine":{"default":"Servo"}},{"regex":"Firefox(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Firefox","version":"$1","engine":{"default":"Gecko"}},{"regex":"(?:BonEcho|GranParadiso|Lorentz|Minefield|Namoroka|Shiretoko)/(\\\\d+[\\\\.\\\\d]+)","name":"Firefox","version":"$1","engine":{"default":"Gecko"}},{"regex":"ANTFresco(?:[/ ](\\\\d+[\\\\.\\\\d]+))?","name":"ANT Fresco","version":"$1"},{"regex":"ANTGalio(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"ANTGalio","version":"$1"},{"regex":"(?:Espial|Escape)(?:[/ ](\\\\d+[\\\\.\\\\d]+))?","name":"Espial TV Browser","version":"$1"},{"regex":"RockMelt(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"RockMelt","version":"$1","engine":{"default":"WebKit"}},{"regex":"Fireweb Navigator(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Fireweb Navigator","version":"$1"},{"regex":"Fireweb(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Fireweb","version":"$1"},{"regex":"(?:Navigator|Netscape6?)(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Netscape","version":"$1","engine":{"default":""}},{"regex":"(?:Polarity)(?:[/ ](\\\\d+[\\\\.\\\\d]+))?","name":"Polarity","version":"$1"},{"regex":"(?:QupZilla)(?:[/ ](\\\\d+[\\\\.\\\\d]+))?","name":"QupZilla","version":"$1"},{"regex":"(?:Dooble)(?:[/ ](\\\\d+[\\\\.\\\\d]+))?","name":"Dooble","version":"$1"},{"regex":"Whale/(\\\\d+[\\\\.\\\\d]+)","name":"Whale Browser","version":"$1","engine":{"default":"Blink"}},{"regex":"Obigo[ ]?(?:InternetBrowser|Browser)?(?:[ /]([a-z0-9]*))?","name":"Obigo","version":"$1"},{"regex":"Obigo|Teleca","name":"Obigo","version":""},{"regex":"UCMini(?:[ /]?(\\\\d+[\\\\.\\\\d]+))?","name":"UC Browser Mini","version":"$1"},{"regex":"UC[ ]?Browser.* \\\\(UCMini\\\\)","name":"UC Browser Mini","version":""},{"regex":"UCTurbo(?:[ /]?(\\\\d+[\\\\.\\\\d]+))?","name":"UC Browser Turbo","version":"$1"},{"regex":"UC[ ]?Browser.* \\\\(UCTurbo\\\\)","name":"UC Browser Turbo","version":""},{"regex":"OPRGX(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Opera GX","version":"$1","engine":{"default":"Blink"}},{"regex":"(?:Opera Tablet.*Version|Opera/.+Opera Mobi.+Version|Mobile.+OPR)/(\\\\d+[\\\\.\\\\d]+)","name":"Opera Mobile","version":"$1","engine":{"default":"Presto","versions":{"15":"Blink"}}},{"regex":"MMS/(\\\\d+[\\\\.\\\\d]+)","name":"Opera Neon","version":"$1","engine":{"default":"Blink"}},{"regex":"OMI/(\\\\d+[\\\\.\\\\d]+)","name":"Opera Devices","version":"$1","engine":{"default":"Blink"}},{"regex":"OPT/(\\\\d+[\\\\.\\\\d]+)","name":"Opera Touch","version":"$1","engine":{"default":"Blink"}},{"regex":"Opera/(\\\\d+[\\\\.\\\\d]+).+Opera Mobi","name":"Opera Mobile","version":"$1","engine":{"default":"Presto","versions":{"15":"Blink"}}},{"regex":"Opera ?Mini/(?:att/)?(\\\\d+[\\\\.\\\\d]+)","name":"Opera Mini","version":"$1","engine":{"default":"Presto"}},{"regex":"Opera ?Mini.+Version/(\\\\d+[\\\\.\\\\d]+)","name":"Opera Mini","version":"$1","engine":{"default":"Presto"}},{"regex":"OPiOS/(\\\\d+[\\\\.\\\\d]+)","name":"Opera Mini iOS","version":"$1","engine":{"default":"WebKit"}},{"regex":"Opera.+Edition Next.+Version/(\\\\d+[\\\\.\\\\d]+)","name":"Opera Next","version":"$1","engine":{"default":"Presto","versions":{"15":"Blink"}}},{"regex":"(?:Opera|OPR)[/ ](?:9.80.*Version/)?(\\\\d+[\\\\.\\\\d]+).+Edition Next","name":"Opera Next","version":"$1","engine":{"default":"Presto","versions":{"15":"Blink"}}},{"regex":"(?:Opera[/ ]?|OPR[/ ])(?:9.80.*Version/)?(\\\\d+[\\\\.\\\\d]+)","name":"Opera","version":"$1","engine":{"default":"","versions":{"7":"Presto","15":"Blink","3.5":"Elektra"}}},{"regex":"rekonq(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Rekonq","version":"$1","engine":{"default":"WebKit"}},{"regex":"CoolNovo(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"CoolNovo","version":"$1","engine":{"default":""}},{"regex":"(?:Comodo[ _])?Dragon(?!fruit)(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Comodo Dragon","version":"$1","engine":{"default":"WebKit","versions":{"28":"Blink"}}},{"regex":"ChromePlus(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"ChromePlus","version":"$1","engine":{"default":""}},{"regex":"Conkeror(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Conkeror","version":"$1","engine":{"default":"Gecko"}},{"regex":"Konqueror(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Konqueror","version":"$1","engine":{"default":"KHTML","versions":{"4":""}}},{"regex":"(?:baidubrowser|bdbrowser_i18n|bdbrowser)(?:[/ ](\\\\d+[\\\\.\\\\d]*))?","name":"Baidu Browser","version":"$1"},{"regex":"FlyFlow(?:[/ ](\\\\d+[\\\\.\\\\d]*))?","name":"Baidu Browser","version":"$1"},{"regex":"(?:(?:BD)?Spark|BIDUBrowser)[/ ](\\\\d+[\\\\.\\\\d]*)","name":"Baidu Spark","version":"$1"},{"regex":"YaBrowser(?:/(\\\\d+[\\\\.\\\\d]*)) \\\\(lite\\\\)?","name":"Yandex Browser Lite","version":"$1","engine":{"default":"Blink"}},{"regex":"YaBrowser(?:/(\\\\d+[\\\\.\\\\d]*))(?: \\\\((alpha|beta)\\\\))?","name":"Yandex Browser","version":"$1 $2","engine":{"default":"Blink"}},{"regex":"Vivaldi(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Vivaldi","version":"$1","engine":{"default":"Blink"}},{"regex":"TweakStyle(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"TweakStyle","version":"$1","engine":{"default":"Blink"}},{"regex":"Midori(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Midori","version":"$1","engine":{"default":"WebKit"}},{"regex":"Mercury(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Mercury","version":"$1"},{"regex":"(?:Maxthon|MxBrowser)[ /](\\\\d+[\\\\.\\\\d]+)","name":"Maxthon","version":"$1","engine":{"default":"","versions":{"3":"WebKit"}}},{"regex":"(?:Maxthon|MyIE2)","name":"Maxthon","version":"","engine":{"default":""}},{"regex":"Puffin(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Puffin","version":"$1"},{"regex":"MobileIron(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Iron Mobile","version":"$1","engine":{"default":"Blink"}},{"regex":"Chrome(?:/(\\\\d+[\\\\.\\\\d]+))?.*Iron","name":"Iron","version":"$1","engine":{"default":"WebKit"}},{"regex":"Iron(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Iron","version":"$1","engine":{"default":"WebKit","versions":{"28":"Blink"}}},{"regex":"Epiphany(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"GNOME Web","version":"$1","engine":{"default":"Gecko","versions":{"2.9.16":"","2.28":"WebKit"}}},{"regex":"LieBaoFast(?:[ /](\\\\d+[\\\\.\\\\d]+))?","name":"LieBaoFast","version":"$1"},{"regex":"LBBrowser(?:[ /](\\\\d+[\\\\.\\\\d]+))?","name":"Cheetah Browser","version":"$1"},{"regex":"SE (\\\\d+[\\\\.\\\\d]+)","name":"Sogou Explorer","version":"$1"},{"regex":"M?QQBrowser/Mini([\\\\.\\\\d]+)?","name":"QQ Browser Mini","version":"$1","engine":{"default":""}},{"regex":"M?QQBrowser(?:/([\\\\.\\\\d]+))?","name":"QQ Browser","version":"$1","engine":{"default":""}},{"regex":"(?:MIUIBrowser|MiuiBrowser)(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"MIUI Browser","version":"$1","engine":{"default":""}},{"regex":"coc_coc_browser(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Coc Coc","version":"$1","engine":{"default":"WebKit","versions":{"28":"Blink"}}},{"regex":"DuckDuckGo/(\\\\d+[\\\\.\\\\d]*)","name":"DuckDuckGo Privacy Browser","version":"$1","engine":{"default":"Blink"}},{"regex":"Samsung ?Browser(?:[/ ](\\\\d+[\\\\.\\\\d]+))?","name":"Samsung Browser","version":"$1"},{"regex":"(?:SFBrowser|com.browser.tssomas)(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Super Fast Browser","version":"$1"},{"regex":"EUI Browser(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"EUI Browser","version":"$1"},{"regex":"UBrowser(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"UBrowser","version":"$1"},{"regex":"Streamy(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Streamy","version":"$1","engine":{"default":"WebKit"}},{"regex":"isivioo","name":"Isivioo","version":"","engine":{"default":"WebKit"}},{"regex":"UC[ ]?Browser(?:[ /]?(\\\\d+[\\\\.\\\\d]+))?","name":"UC Browser","version":"$1"},{"regex":"UCWEB(?:[ /]?(\\\\d+[\\\\.\\\\d]+))?","name":"UC Browser","version":"$1"},{"regex":"UC AppleWebKit","name":"UC Browser","version":""},{"regex":"Tenta/(\\\\d+[\\\\.\\\\d]+)","name":"Tenta Browser","version":"$1","engine":{"default":"Webkit"}},{"regex":"Rocket/(\\\\d+[\\\\.\\\\d]+)","name":"Firefox Rocket","version":"$1","engine":{"default":"Webkit"}},{"regex":"Web Explorer/(\\\\d+[\\\\.\\\\d]+).*Chrome","name":"Web Explorer","version":"$1","engine":{"default":"Webkit"}},{"regex":"SznProhlizec/(\\\\d+[\\\\.\\\\d]+)","name":"Seznam Browser","version":"$1","engine":{"default":"Blink"}},{"regex":"SogouMobileBrowser/(\\\\d+[\\\\.\\\\d]+)","name":"Sogou Mobile Browser","version":"$1","engine":{"default":""}},{"regex":"Mint Browser/(\\\\d+[\\\\.\\\\d]+)","name":"Mint Browser","version":"$1","engine":{"default":""}},{"regex":"Ecosia (?:android|ios)@(\\\\d+[\\\\.\\\\d]+)","name":"Ecosia","version":"$1","engine":{"default":""}},{"regex":"ACHEETAHI","name":"CM Browser","version":"","engine":{"default":""}},{"regex":"Kiwi Chrome","name":"Kiwi","version":"","engine":{"default":""}},{"regex":"Mb2345Browser/(\\\\d+[\\\\.\\\\d]+)","name":"2345 Browser","version":"$1","engine":{"default":""}},{"regex":"QtWebEngine/(\\\\d+[\\\\.\\\\d]+)","name":"QtWebEngine","version":"$1","engine":{"default":""}},{"regex":"Silk/(\\\\d+[\\\\.\\\\d]+) like Chrome","name":"Mobile Silk","version":"$1","engine":{"default":"Blink"}},{"regex":"Silk(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Mobile Silk","version":"$1","engine":{"default":"WebKit"}},{"regex":"IBrowse(?:[ /](\\\\d+[\\\\.\\\\d]+))?","name":"IBrowse","version":"$1"},{"regex":"UP.Browser(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Openwave Mobile Browser","version":"$1"},{"regex":"Openwave(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Openwave Mobile Browser","version":"$1"},{"regex":"OneBrowser(?:[ /](\\\\d+[\\\\.\\\\d]+))?","name":"ONE Browser","version":"$1","engine":{"default":"WebKit"}},{"regex":"(?:NokiaBrowser|BrowserNG)(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Nokia Browser","version":"$1"},{"regex":"Series60/5\\\\.0","name":"Nokia Browser","version":"7.0"},{"regex":"Series60/(\\\\d+[\\\\.\\\\d]+)","name":"Nokia OSS Browser","version":"$1"},{"regex":"S40OviBrowser/(\\\\d+[\\\\.\\\\d]+)","name":"Nokia Ovi Browser","version":"$1"},{"regex":"^Nokia|Nokia[EN]?\\\\d+","name":"Nokia Browser","version":""},{"regex":"Sleipnir(?:[ /](\\\\d+[\\\\.\\\\d]+))?","name":"Sleipnir","version":"$1","engine":{"default":""}},{"regex":"NTENTBrowser(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"NTENT Browser","version":"$1"},{"regex":"TV Bro/(\\\\d+[\\\\.\\\\d]+)","name":"TV Bro","version":"$1"},{"regex":"Chrome/.+ Quark(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Quark","version":"$1","engine":{"default":"WebKit"}},{"regex":"Version/.* Chrome(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Chrome Webview","version":"$1","engine":{"default":"WebKit","versions":{"28":"Blink"}}},{"regex":"CrMo(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Chrome Mobile","version":"$1","engine":{"default":"WebKit","versions":{"28":"Blink"}}},{"regex":"CriOS(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Chrome Mobile iOS","version":"$1","engine":{"default":"WebKit"}},{"regex":"Chrome(?:/(\\\\d+[\\\\.\\\\d]+))? Mobile","name":"Chrome Mobile","version":"$1","engine":{"default":"WebKit","versions":{"28":"Blink"}}},{"regex":"chromeframe(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Chrome Frame","version":"$1","engine":{"default":"WebKit"}},{"regex":"Chromium(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Chromium","version":"$1","engine":{"default":"WebKit","versions":{"28":"Blink"}}},{"regex":"HeadlessChrome(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Headless Chrome","version":"$1","engine":{"default":"Blink"}},{"regex":"Chrome(?!book)(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Chrome","version":"$1","engine":{"default":"WebKit","versions":{"28":"Blink"}}},{"regex":"(?:Tizen|SLP) Browser(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Tizen Browser","version":"$1"},{"regex":"Blazer(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Palm Blazer","version":"$1"},{"regex":"Pre/(\\\\d+[\\\\.\\\\d]+)","name":"Palm Pre","version":"$1"},{"regex":"(?:hpw|web)OS/(\\\\d+[\\\\.\\\\d]+)","name":"wOSBrowser","version":"$1"},{"regex":"WebPro(?:[ /](\\\\d+[\\\\.\\\\d]+))?","name":"Palm WebPro","version":"$1"},{"regex":"Palmscape(?:[ /](\\\\d+[\\\\.\\\\d]+))?","name":"Palmscape","version":"$1"},{"regex":"Jasmine(?:[ /](\\\\d+[\\\\.\\\\d]+))?","name":"Jasmine","version":"$1"},{"regex":"Lynx(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Lynx","version":"$1","engine":{"default":"Text-based"}},{"regex":"NCSA_Mosaic(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"NCSA Mosaic","version":"$1"},{"regex":"ABrowse(?: (\\\\d+[\\\\.\\\\d]+))?","name":"ABrowse","version":"$1"},{"regex":"amaya(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Amaya","version":"$1"},{"regex":"AmigaVoyager(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Amiga Voyager","version":"$1"},{"regex":"Amiga-Aweb(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Amiga Aweb","version":"$1"},{"regex":"Arora(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Arora","version":"$1","engine":{"default":"WebKit"}},{"regex":"Beonex(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Beonex","version":"$1","engine":{"default":"Gecko"}},{"regex":"bline(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"B-Line","version":"$1","engine":{"default":"WebKit"}},{"regex":"BrowseX \\\\((\\\\d+[\\\\.\\\\d]+)","name":"BrowseX","version":"$1"},{"regex":"Charon(?:[/ ](\\\\d+[\\\\.\\\\d]+))?","name":"Charon","version":"$1"},{"regex":"Cheshire(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Cheshire","version":"$1"},{"regex":"dbrowser","name":"dbrowser","version":"","engine":{"default":"WebKit"}},{"regex":"Dillo(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Dillo","version":"$1","engine":{"default":"Dillo"}},{"regex":"Dolfin(?:/(\\\\d+[\\\\.\\\\d]+))?|dolphin","name":"Dolphin","version":"$1","engine":{"default":"WebKit"}},{"regex":"Elinks(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Elinks","version":"$1","engine":{"default":"Text-based"}},{"regex":"Element Browser(?:[ /](\\\\d+[\\\\.\\\\d]+))?","name":"Element Browser","version":"$1"},{"regex":"eZBrowser(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"eZ Browser","version":"$1"},{"regex":"Firebird(?! Build)(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Firebird","version":"$1","engine":{"default":"Gecko"}},{"regex":"Fluid(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Fluid","version":"$1","engine":{"default":"WebKit"}},{"regex":"Galeon(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Galeon","version":"$1","engine":{"default":"Gecko"}},{"regex":"Google Earth(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Google Earth","version":"$1","engine":{"default":"WebKit"}},{"regex":"HotJava(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"HotJava","version":"$1"},{"regex":"iCabMobile(?:[ /](\\\\d+[\\\\.\\\\d]+))?","name":"iCab Mobile","version":"$1","engine":{"default":"WebKit"}},{"regex":"iCab(?:[ /](\\\\d+[\\\\.\\\\d]+))?","name":"iCab","version":"$1","engine":{"default":"iCab","versions":{"4":"WebKit"}}},{"regex":"i?Lunascape(?:[/ ](\\\\d+[\\\\.\\\\d]+))?","name":"Lunascape","version":"$1","engine":{"default":""}},{"regex":"IEMobile[ /](\\\\d+[\\\\.\\\\d]+)","name":"IE Mobile","version":"$1","engine":{"default":"Trident"}},{"regex":"MSIE (\\\\d+[\\\\.\\\\d]+).*XBLWP7","name":"IE Mobile","version":"$1","engine":{"default":"Trident"}},{"regex":"MSIE.*Trident/4.0","name":"Internet Explorer","version":"8.0","engine":{"default":"Trident"}},{"regex":"MSIE.*Trident/5.0","name":"Internet Explorer","version":"9.0","engine":{"default":"Trident"}},{"regex":"MSIE.*Trident/6.0","name":"Internet Explorer","version":"10.0","engine":{"default":"Trident"}},{"regex":"Trident/[78].0","name":"Internet Explorer","version":"11.0","engine":{"default":"Trident"}},{"regex":"MSIE (\\\\d+[\\\\.\\\\d]+)","name":"Internet Explorer","version":"$1","engine":{"default":"Trident"}},{"regex":"IE[ /](\\\\d+[\\\\.\\\\d]+)","name":"Internet Explorer","version":"$1","engine":{"default":"Trident"}},{"regex":"Kindle/(\\\\d+[\\\\.\\\\d]+)","name":"Kindle Browser","version":"$1"},{"regex":"K-meleon(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"K-meleon","version":"$1","engine":{"default":"Gecko"}},{"regex":"Links(?: \\\\((\\\\d+[\\\\.\\\\d]+))?","name":"Links","version":"$1","engine":{"default":"Text-based"}},{"regex":"LG Browser(?:/(\\\\d+[\\\\.\\\\d]+))","name":"LG Browser","version":"$1"},{"regex":"LuaKit(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"LuaKit","version":"$1"},{"regex":"OmniWeb(?:/[v]?(\\\\d+[\\\\.\\\\d]+))?","name":"OmniWeb","version":"$1","engine":{"default":"WebKit"}},{"regex":"Phoenix(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Phoenix","version":"$1"},{"regex":"NetFrontLifeBrowser(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"NetFront Life","version":"$1","engine":{"default":"NetFront"}},{"regex":"NetFront(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"NetFront","version":"$1","engine":{"default":"NetFront"}},{"regex":"PLAYSTATION|NINTENDO 3|AppleWebKit.+ N[XF]/\\\\d+\\\\.\\\\d+\\\\.\\\\d+","name":"NetFront","version":""},{"regex":"NetPositive(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"NetPositive","version":"$1"},{"regex":"Odyssey Web Browser(?:.*OWB/(\\\\d+[\\\\.\\\\d]+))?","name":"Odyssey Web Browser","version":"$1"},{"regex":"OffByOne","name":"Off By One","version":""},{"regex":"Oregano(?:[ /](\\\\d+[\\\\.\\\\d]+))?","name":"Oregano","version":"$1"},{"regex":"Otter(?:[ /](\\\\d+[\\\\.\\\\d]+))?","name":"Otter Browser","version":"$1"},{"regex":"(?:Polaris|Embider)(?:[/ ](\\\\d+[\\\\.\\\\d]+))?","name":"Polaris","version":"$1"},{"regex":"SEMC-Browser(?:[/ ](\\\\d+[\\\\.\\\\d]+))?","name":"SEMC-Browser","version":"$1"},{"regex":"Sraf(?:[/ ](\\\\d+[\\\\.\\\\d]+))?","name":"Seraphic Sraf","version":"$1","engine":{"default":"Blink"}},{"regex":"Shiira(?:[/ ](\\\\d+[\\\\.\\\\d]+))?","name":"Shiira","version":"$1","engine":{"default":"WebKit"}},{"regex":"Skyfire(?:[/ ](\\\\d+[\\\\.\\\\d]+))?","name":"Skyfire","version":"$1"},{"regex":"Snowshoe(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Snowshoe","version":"$1","engine":{"default":"WebKit"}},{"regex":"Sunrise(?:Browser)?(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Sunrise","version":"$1"},{"regex":"SuperBird(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"SuperBird","version":"$1"},{"regex":"Vision-Browser(?:/(\\\\d+[\\\\.\\\\d]+))","name":"Vision Mobile Browser","version":"$1"},{"regex":"WeTab-Browser","name":"WeTab Browser","version":""},{"regex":"Xiino(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Xiino","version":"$1"},{"regex":"BlackBerry|PlayBook|BB10","name":"BlackBerry Browser","version":""},{"regex":"BriskBard(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"BriskBard","version":"$1"},{"regex":"Android","name":"Android Browser","version":"","engine":{"default":"WebKit"}},{"regex":"Coast(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Coast","version":"$1"},{"regex":"qutebrowser(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Qutebrowser","version":"$1"},{"regex":"Surf(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"surf","version":"$1","engine":{"default":"WebKit"}},{"regex":"(?:(?:iPod|iPad|iPhone).+Version|MobileSafari)/(\\\\d+[\\\\.\\\\d]+)","name":"Mobile Safari","version":"$1","engine":{"default":"WebKit"}},{"regex":"(?:Version/(\\\\d+[\\\\.\\\\d]+).*)?Mobile.*Safari/","name":"Mobile Safari","version":"$1","engine":{"default":"WebKit"}},{"regex":"(?:iPod|iPhone|iPad)","name":"Mobile Safari","version":"","engine":{"default":"WebKit"}},{"regex":"Version/(\\\\d+[\\\\.\\\\d]+).*Safari/|Safari/\\\\d+","name":"Safari","version":"$1","engine":{"default":"WebKit"}},{"regex":"Dorado WAP-Browser[/ ](\\\\d+[\\\\.\\\\d]+)","name":"Dorado","version":"$1"},{"regex":"NetSurf(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"NetSurf","version":"$1","engine":{"default":"NetSurf"}},{"regex":"Uzbl","name":"Uzbl","version":""},{"regex":"SimpleBrowser","name":"SimpleBrowser","version":""},{"regex":"Zvu(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Zvu","version":"$1","engine":{"default":"Gecko"}}]'), cd = [
        {
            regex: "NetFront",
            name: "NetFront"
        },
        {
            regex: "Edge",
            name: "Edge"
        },
        {
            regex: "Trident",
            name: "Trident"
        },
        {
            regex: "Blink",
            name: "Blink"
        },
        {
            regex: "(?:Apple)?WebKit",
            name: "WebKit"
        },
        {
            regex: "Presto",
            name: "Presto"
        },
        {
            regex: "(?<!like )Gecko",
            name: "Gecko"
        },
        {
            regex: "KHTML",
            name: "KHTML"
        },
        {
            regex: "NetSurf",
            name: "NetSurf"
        },
        {
            regex: "Servo",
            name: "Servo"
        },
        {
            regex: "Goanna",
            name: "Goanna"
        }
    ], ud = "Avant Browser", Sd = "ABrowse", Ad = "ANT Fresco", pd = "ANTGalio", vd = "Aloha Browser", Md = "Aloha Browser Lite", Pd = "Amaya", Td = "Amigo", hd = "Android Browser", bd = "AOL Shield", Ld = "Arora", _d = "Amiga Voyager", Gd = "Amiga Aweb", Bd = "Atomic Web Browser", Nd = "Avast Secure Browser", Cd = "AVG Secure Browser", Ed = "Beaker Browser", Od = "Beamrise", wd = "BlackBerry Browser", fd = "Baidu Browser", yd = "Baidu Spark", Xd = "Basilisk", $d = "Beonex", Id = "BlackHawk", Fd = "Bunjalloo", Dd = "B-Line", Rd = "Brave", Vd = "BriskBard", Ud = "BrowseX", Hd = "Camino", kd = "CCleaner", Wd = "Coc Coc", Kd = "Comodo Dragon", Yd = "Coast", Qd = "Charon", Zd = "CM Browser", zd = "Chrome Frame", Jd = "Headless Chrome", qd = "Chrome", jd = "Chrome Mobile iOS", ea = "Conkeror", ra = "Chrome Mobile", oa = "CoolNovo", la = "CometBird", da = "COS Browser", aa = "ChromePlus", ta = "Chromium", ia = "Cyberfox", na = "Cheshire", ma = "Crusta", sa = "Cunaguaro", ga = "Chrome Webview", xa = "dbrowser", ca = "Deepnet Explorer", ua = "Delta Browser", Sa = "Dolphin", Aa = "Dorado", pa = "Dooble", va = "Dillo", Ma = "DuckDuckGo Privacy Browser", Pa = "Ecosia", Ta = "Epic", ha = "Elinks", ba = "Element Browser", La = "eZ Browser", _a = "EUI Browser", Ga = "GNOME Web", Ba = "Espial TV Browser", Na = "Falkon", Ca = "Faux Browser", Ea = "Firefox Mobile iOS", Oa = "Firebird", wa = "Fluid", fa = "Fennec", ya = "Firefox", Xa = "Firefox Focus", $a = "Firefox Reality", Ia = "Firefox Rocket", Fa = "Flock", Da = "Firefox Mobile", Ra = "Fireweb", Va = "Fireweb Navigator", Ua = "FreeU", Ha = "Galeon", ka = "Google Earth", Wa = "Hawk Turbo Browser", Ka = "hola! Browser", Ya = "HotJava", Qa = "Huawei Browser", Za = "IBrowse", za = "iCab", Ja = "iCab Mobile", qa = "Iridium", ja = "Iron Mobile", et = "IceCat", rt = "IceDragon", ot = "Isivioo", lt = "Iceweasel", dt = "Internet Explorer", at = "IE Mobile", tt = "Iron", it = "Jasmine", nt = "Jig Browser", mt = "Jio Browser", st = "K.Browser", gt = "Kindle Browser", xt = "K-meleon", ct = "Konqueror", ut = "Kapiko", St = "Kinza", At = "Kiwi", pt = "Kylo", vt = "Kazehakase", Mt = "Cheetah Browser", Pt = "LieBaoFast", Tt = "LG Browser", ht = "Links", bt = "Lovense Browser", Lt = "LuaKit", _t = "Lunascape", Gt = "Lynx", Bt = "mCent", Nt = "MicroB", Ct = "NCSA Mosaic", Et = "Meizu Browser", Ot = "Mercury", wt = "Mobile Safari", ft = "Midori", yt = "Mobicip", Xt = "MIUI Browser", $t = "Mobile Silk", It = "Minimo", Ft = "Mint Browser", Dt = "Maxthon", Rt = "Nokia Browser", Vt = "Nokia OSS Browser", Ut = "Nokia Ovi Browser", Ht = "Nox Browser", kt = "NetSurf", Wt = "NetFront", Kt = "NetFront Life", Yt = "NetPositive", Qt = "Netscape", Zt = "NTENT Browser", zt = "Oculus Browser", Jt = "Opera Mini iOS", qt = "Obigo", jt = "Odyssey Web Browser", ei = "Off By One", ri = "ONE Browser", oi = "Opera GX", li = "Opera Neon", di = "Opera Devices", ai = "Opera Mini", ti = "Opera Mobile", ii = "Opera", ni = "Opera Next", mi = "Opera Touch", si = "Ordissimo", gi = "Oregano", xi = "Origyn Web Browser", ci = "Openwave Mobile Browser", ui = "OmniWeb", Si = "Otter Browser", Ai = "Palm Blazer", pi = "Pale Moon", vi = "Oppo Browser", Mi = "Palm Pre", Pi = "Puffin", Ti = "Palm WebPro", hi = "Palmscape", bi = "Phoenix", Li = "Polaris", _i = "Polarity", Gi = "Microsoft Edge", Bi = "QQ Browser Mini", Ni = "QQ Browser", Ci = "Qutebrowser", Ei = "QupZilla", Oi = "Qwant Mobile", wi = "QtWebEngine", fi = "Realme Browser", yi = "Rekonq", Xi = "RockMelt", $i = "Samsung Browser", Ii = "Sailfish Browser", Fi = "SEMC-Browser", Di = "Sogou Explorer", Ri = "Safari", Vi = "SalamWeb", Ui = "Shiira", Hi = "SimpleBrowser", ki = "Skyfire", Wi = "Seraphic Sraf", Ki = "Sleipnir", Yi = "Snowshoe", Qi = "Sogou Mobile Browser", Zi = "Splash", zi = "Sputnik Browser", Ji = "Sunrise", qi = "SuperBird", ji = "Super Fast Browser", en = "START Internet Browser", rn = "Streamy", on = "Swiftfox", ln = "Seznam Browser", dn = "t-online.de Browser", an = "Tao Browser", tn = "TenFourFox", nn = "Tenta Browser", mn = "Tizen Browser", sn = "TweakStyle", gn = "TV Bro", xn = "UBrowser", cn = "UC Browser", un = "UC Browser Mini", Sn = "UC Browser Turbo", An = "Uzbl", pn = "Vivaldi", vn = "vivo Browser", Mn = "Vision Mobile Browser", Pn = "Wear Internet Browser", Tn = "Web Explorer", hn = "WebPositive", bn = "Waterfox", Ln = "Whale Browser", _n = "wOSBrowser", Gn = "WeTab Browser", Bn = "Yandex Browser", Nn = "Yandex Browser Lite", Cn = "Xiino", En = {
        36: "360 Phone Browser",
        "2B": "2345 Browser",
        "3B": "360 Browser",
        AA: ud,
        AB: Sd,
        AF: Ad,
        AG: pd,
        AL: vd,
        AH: Md,
        AM: Pd,
        AO: Td,
        AN: hd,
        AD: bd,
        AR: Ld,
        AV: _d,
        AW: Gd,
        AT: Bd,
        AS: Nd,
        VG: Cd,
        BA: Ed,
        BM: Od,
        BB: wd,
        BD: fd,
        BS: yd,
        BI: Xd,
        BE: $d,
        BH: Id,
        BJ: Fd,
        BL: Dd,
        BR: Rd,
        BK: Vd,
        BX: Ud,
        CA: Hd,
        CL: kd,
        CC: Wd,
        CD: Kd,
        C1: Yd,
        CX: Qd,
        CE: Zd,
        CF: zd,
        HC: Jd,
        CH: qd,
        CI: jd,
        CK: ea,
        CM: ra,
        CN: oa,
        CO: la,
        CB: da,
        CP: aa,
        CR: ta,
        CY: ia,
        CS: na,
        CT: ma,
        CU: sa,
        CV: ga,
        DB: xa,
        DE: ca,
        DT: ua,
        DF: Sa,
        DO: Aa,
        DL: pa,
        DI: va,
        DD: Ma,
        EC: Pa,
        EI: Ta,
        EL: ha,
        EB: ba,
        EZ: La,
        EU: _a,
        EP: Ga,
        ES: Ba,
        FA: Na,
        FX: Ca,
        F1: Ea,
        FB: Oa,
        FD: wa,
        FE: fa,
        FF: ya,
        FK: Xa,
        FY: $a,
        FR: Ia,
        FL: Fa,
        FM: Da,
        FW: Ra,
        FN: Va,
        FU: Ua,
        GA: Ha,
        GE: ka,
        HA: Wa,
        HO: Ka,
        HJ: Ya,
        HU: Qa,
        IB: Za,
        IC: za,
        I2: Ja,
        I1: qa,
        I3: ja,
        I4: et,
        ID: rt,
        IV: ot,
        IW: lt,
        IE: dt,
        IM: at,
        IR: tt,
        JS: it,
        JI: nt,
        JO: mt,
        KB: st,
        KI: gt,
        KM: xt,
        KO: ct,
        KP: ut,
        KN: St,
        KW: At,
        KY: pt,
        KZ: vt,
        LB: Mt,
        LF: Pt,
        LG: Tt,
        LI: ht,
        LO: bt,
        LU: Lt,
        LS: _t,
        LX: Gt,
        M1: Bt,
        MB: Nt,
        MC: Ct,
        MZ: Et,
        ME: Ot,
        MF: wt,
        MI: ft,
        MO: yt,
        MU: Xt,
        MS: $t,
        MN: It,
        MT: Ft,
        MX: Dt,
        NB: Rt,
        NO: Vt,
        NV: Ut,
        NX: Ht,
        NE: kt,
        NF: Wt,
        NL: Kt,
        NP: Yt,
        NS: Qt,
        NT: Zt,
        OC: zt,
        O1: Jt,
        OB: qt,
        OD: jt,
        OF: ei,
        OE: ri,
        OX: oi,
        OG: li,
        OH: di,
        OI: ai,
        OM: ti,
        OP: ii,
        ON: ni,
        OO: mi,
        OS: si,
        OR: gi,
        OY: xi,
        OV: ci,
        OW: ui,
        OT: Si,
        PL: Ai,
        PM: pi,
        PP: vi,
        PR: Mi,
        PU: Pi,
        PW: Ti,
        PA: hi,
        PX: bi,
        PO: Li,
        PT: _i,
        PS: Gi,
        Q1: Bi,
        QQ: Ni,
        QT: Ci,
        QZ: Ei,
        QM: Oi,
        QW: wi,
        RE: fi,
        RK: yi,
        RM: Xi,
        SB: $i,
        SA: Ii,
        SC: Fi,
        SE: Di,
        SF: Ri,
        SW: Vi,
        SH: Ui,
        S1: Hi,
        SK: ki,
        SS: Wi,
        SL: Ki,
        SN: Yi,
        SO: Qi,
        S2: Zi,
        SI: zi,
        SR: Ji,
        SP: qi,
        SU: ji,
        S0: en,
        ST: rn,
        SX: on,
        SZ: ln,
        TO: dn,
        TA: an,
        TF: tn,
        TB: nn,
        TZ: mn,
        TS: sn,
        TV: gn,
        UB: xn,
        UC: cn,
        UM: un,
        UT: Sn,
        UZ: An,
        VI: pn,
        VV: vn,
        VB: Mn,
        WI: Pn,
        WP: Tn,
        WE: hn,
        WF: bn,
        WH: Ln,
        WO: _n,
        WT: Gn,
        YA: Bn,
        YL: Nn,
        XI: Cn
    }, On = [
        "BD",
        "BS"
    ], wn = [
        "AV",
        "AW"
    ], fn = [
        "CH",
        "BA",
        "BR",
        "CC",
        "CD",
        "CM",
        "CI",
        "CF",
        "CN",
        "CR",
        "CP",
        "DD",
        "IR",
        "RM",
        "AO",
        "TS",
        "VI",
        "PT",
        "AS",
        "TB",
        "AD",
        "SB",
        "WP",
        "I3",
        "CV",
        "WH",
        "SZ",
        "QW",
        "LF",
        "KW",
        "2B",
        "CE",
        "EC",
        "MT",
        "MS",
        "HA",
        "OC",
        "MZ",
        "BM",
        "KN",
        "SW",
        "M1",
        "FA",
        "TA",
        "AH",
        "CL",
        "SU",
        "EU",
        "UB",
        "LO",
        "VG",
        "TV"
    ], yn = [
        "FF",
        "FE",
        "FM",
        "SX",
        "FB",
        "PX",
        "MB",
        "EI",
        "WF",
        "CU",
        "TF",
        "QM",
        "FR",
        "I4",
        "GZ",
        "MO",
        "F1",
        "BI",
        "MN",
        "BH",
        "TO",
        "OS",
        "FY"
    ], Xn = [
        "KO"
    ], $n = [
        "NF"
    ], In = [
        "NE"
    ], Fn = [
        "OP",
        "OM",
        "OI",
        "ON",
        "OO",
        "OG",
        "OH",
        "O1",
        "OX"
    ], Dn = [
        "SF",
        "MF",
        "SO"
    ], Rn = {
        "Android Browser": [
            "AN",
            "MU"
        ],
        "BlackBerry Browser": [
            "BB"
        ],
        Baidu: On,
        Amiga: wn,
        Chrome: fn,
        Firefox: yn,
        "Internet Explorer": [
            "IE",
            "IM",
            "PS"
        ],
        Konqueror: Xn,
        NetFront: $n,
        NetSurf: In,
        "Nokia Browser": [
            "NB",
            "NO",
            "NV",
            "DO"
        ],
        Opera: Fn,
        Safari: Dn,
        "Sailfish Browser": [
            "SA"
        ]
    }, Vn = [
        "36",
        "OC",
        "PU",
        "SK",
        "MF",
        "OI",
        "OM",
        "DD",
        "DB",
        "ST",
        "BL",
        "IV",
        "FM",
        "C1",
        "AL",
        "SA",
        "SB",
        "FR",
        "WP",
        "HA",
        "NX",
        "HU",
        "VV",
        "RE",
        "CB",
        "MZ",
        "UM",
        "FK",
        "FX",
        "WI",
        "MN",
        "M1",
        "AH",
        "SU",
        "EU",
        "EZ",
        "UT",
        "DT",
        "S0"
    ];
    var Fr;
    function Lo() {
        if (Fr) return me;
        Fr = 1;
        var d = me && me.__importDefault || function(s) {
            return s && s.__esModule ? s : {
                default: s
            };
        };
        Object.defineProperty(me, "__esModule", {
            value: !0
        });
        const e = de(), r = z(), o = U(), l = d(xd), t = d(cd), a = d(En), i = d(Rn), n = d(Vn);
        class m {
            constructor(g){
                this.options = {
                    versionTruncation: 1
                }, this.parse = (x)=>{
                    const v = {
                        type: "",
                        name: "",
                        version: "",
                        engine: "",
                        engineVersion: ""
                    };
                    for (const T of l.default){
                        const p = o.userAgentParser(T.regex, x);
                        if (!p) continue;
                        const _ = r.variableReplacement(T.version, p), A = e.formatVersion(_, this.options.versionTruncation), O = A && parseFloat(e.formatVersion(_, 1)) || "";
                        if (T.engine && (v.engine = T.engine.default, T.engine && T.engine.versions && O)) {
                            const c = Object.entries(T.engine.versions).sort((M, N)=>parseFloat(M[0]) > parseFloat(N[0]) ? 1 : -1);
                            for (const [M, N] of c)parseFloat(M) <= O && (v.engine = N || "");
                        }
                        v.type = "browser", v.name = r.variableReplacement(T.name, p), v.version = A;
                        break;
                    }
                    if (!v.engine) for (const T of t.default){
                        let p = null;
                        try {
                            p = RegExp(T.regex, "i").exec(x);
                        } catch  {}
                        if (p) {
                            v.engine = T.name;
                            break;
                        }
                    }
                    return v.engineVersion = e.formatVersion(e.parseBrowserEngineVersion(x, v.engine), this.options.versionTruncation), v;
                }, this.options = Object.assign(Object.assign({}, this.options), g);
            }
        }
        return me.default = m, m.getBrowserShortName = (s)=>{
            for (const [g, x] of Object.entries(a.default))if (x === s) return g;
            return "";
        }, m.getBrowserFamily = (s)=>{
            const g = m.getBrowserShortName(s);
            for (const [x, v] of Object.entries(i.default))if (v.includes(g)) return x;
            return "";
        }, m.isMobileOnlyBrowser = (s)=>n.default.includes(m.getBrowserShortName(s)), me;
    }
    var se = {};
    const Un = [
        {
            regex: "AndroidDownloadManager(?:[ /]([\\d\\.]+))?",
            name: "AndroidDownloadManager",
            version: "$1"
        },
        {
            regex: "(?:Apple)?News(?:[ /][\\d\\.]+)? Version(?:[ /]([\\d\\.]+))?",
            name: "Apple News",
            version: "$1"
        },
        {
            regex: "bPod",
            name: "bPod",
            version: ""
        },
        {
            regex: "(?:MessengerForiOS|MESSENGER).(?:FBAV)(?:[ /]([\\d\\.]+))?",
            name: "Facebook Messenger",
            version: "$1"
        },
        {
            regex: "(?:FBAV|com.facebook.katana)(?:[ /]([\\d\\.]+))?",
            name: "Facebook",
            version: "$1"
        },
        {
            regex: "FeedR(?:/([\\d\\.]+))?",
            name: "FeedR",
            version: "$1"
        },
        {
            regex: "com.google.android.apps.searchlite",
            name: "Google Go",
            version: ""
        },
        {
            regex: "com.google.android.apps.magazines",
            name: "Google Play Newsstand",
            version: ""
        },
        {
            regex: "com.google.GooglePlus",
            name: "Google Plus",
            version: ""
        },
        {
            regex: "MicroMessenger/([^ ]+)",
            name: "WeChat",
            version: "$1"
        },
        {
            regex: ".*__weibo__([0-9\\.]+)__",
            name: "Sina Weibo",
            version: "$1"
        },
        {
            regex: "Pinterest(?:/([\\d\\.]+))?",
            name: "Pinterest",
            version: "$1"
        },
        {
            regex: "Podcatcher Deluxe",
            name: "Podcatcher Deluxe",
            version: ""
        },
        {
            regex: "com.google.android.youtube(?:/([\\d\\.]+))?",
            name: "YouTube",
            version: "$1"
        },
        {
            regex: "([^/]+)/(\\d+(?:\\.\\d+)+) \\((?:iPhone|iPad); iOS [0-9\\.]+; Scale/[0-9\\.]+\\)",
            name: "$1",
            version: "$2"
        },
        {
            regex: "WhatsApp(?:[ /]([\\d\\.]+))?",
            name: "WhatsApp",
            version: "$1"
        },
        {
            regex: "Line(?:[ /]([\\d\\.]+))",
            name: "Line",
            version: "$1"
        },
        {
            regex: "Instacast(?:HD)?/(\\d\\.[\\d\\.abc]+) CFNetwork/([\\d\\.]+) Darwin/([\\d\\.]+)",
            name: "Instacast",
            version: "$1"
        },
        {
            regex: "Podcasts/([\\d\\.]+)",
            name: "Podcasts",
            version: "$1"
        },
        {
            regex: "Pocket Casts(?:, (?:Android|iOS) v([\\d\\.]+))?",
            name: "Pocket Casts",
            version: "$1"
        },
        {
            regex: "Podcat/([\\d\\.]+)",
            name: "Podcat",
            version: "$1"
        },
        {
            regex: "BeyondPod",
            name: "BeyondPod",
            version: null
        },
        {
            regex: "AntennaPod/?([\\d\\.]+)?",
            name: "AntennaPod",
            version: "$1"
        },
        {
            regex: "Overcast/([\\d\\.]+)",
            name: "Overcast",
            version: "$1"
        },
        {
            regex: "(?:CastBox|fm.castbox.audiobook.radio.podcast)/?([\\d\\.]+)?",
            name: "CastBox",
            version: "$1"
        },
        {
            regex: "Player FM",
            name: "Player FM",
            version: ""
        },
        {
            regex: "Podkicker(?: Pro)?/([\\d\\.]+)",
            name: "Podkicker",
            version: "$1"
        },
        {
            regex: "PodcastRepublic/([\\d\\.]+)",
            name: "Podcast Republic",
            version: "$1"
        },
        {
            regex: "Castro/(\\d+)",
            name: "Castro",
            version: "$1"
        },
        {
            regex: "Castro 2 ([\\d\\.]+)/[\\d]+ Like iTunes",
            name: "Castro 2",
            version: "$1"
        },
        {
            regex: "Castro 2",
            name: "Castro 2",
            version: ""
        },
        {
            regex: "DoggCatcher",
            name: "DoggCatcher",
            version: null
        },
        {
            regex: "PodcastAddict/v([\\d]+)",
            name: "Podcast & Radio Addict",
            version: "$1"
        },
        {
            regex: "Podcat/([\\d]+) CFNetwork/([\\d\\.]+) Darwin/([\\d\\.]+)",
            name: "Podcat",
            version: "$1"
        },
        {
            regex: "i[cC]atcher[^\\d]+([\\d\\.]+)",
            name: "iCatcher",
            version: "$1"
        },
        {
            regex: "YelpApp/([\\d\\.]+)",
            name: "Yelp Mobile",
            version: "$1"
        },
        {
            regex: "jp.co.yahoo.android.yjtop/([\\d\\.]+)",
            name: "Yahoo! Japan",
            version: "$1"
        },
        {
            regex: "RSSRadio/([\\d]+)?",
            name: "RSSRadio",
            version: "$1"
        },
        {
            regex: "SogouSearch Android[\\d\\.]+ version([\\d\\.]+)?",
            name: "SogouSearch App",
            version: "$1"
        },
        {
            regex: "NewsArticle/([\\d\\.]+)?",
            name: "NewsArticle App",
            version: "$1"
        },
        {
            regex: "tieba/([\\d\\.]+)?",
            name: "tieba",
            version: "$1"
        },
        {
            regex: "com\\.douban\\.group/([\\d\\.]+)?",
            name: "douban App",
            version: "$1"
        },
        {
            regex: "BingWeb/([\\d\\.]+)?",
            name: "BingWebApp",
            version: "$1"
        },
        {
            regex: "GSA/([\\d\\.]+)?",
            name: "Google Search App",
            version: "$1"
        },
        {
            regex: "Flipboard/([\\d\\.]+)?",
            name: "Flipboard App",
            version: "$1"
        },
        {
            regex: "Instagram[ /]([\\d\\.]+)?",
            name: "Instagram App",
            version: "$1"
        },
        {
            regex: "baiduboxapp/([\\d\\.]+)?",
            name: "Baidu Box App",
            version: "$1"
        },
        {
            regex: "Crosswalk(?!.*(?:Streamy|QwantMobile))/([\\d\\.]+)?",
            name: "CrosswalkApp",
            version: "$1"
        },
        {
            regex: "Twitter for iPhone[/]?([\\d\\.]+)?",
            name: "Twitter",
            version: "$1"
        },
        {
            regex: "TopBuzz/([\\d\\.]+)",
            name: "TopBuzz",
            version: "$1"
        },
        {
            regex: "Snapchat/([\\d\\.]+)",
            name: "Snapchat",
            version: "$1"
        }
    ];
    var Dr;
    function Hn() {
        if (Dr) return se;
        Dr = 1;
        var d = se && se.__importDefault || function(a) {
            return a && a.__esModule ? a : {
                default: a
            };
        };
        Object.defineProperty(se, "__esModule", {
            value: !0
        });
        const e = d(Un), r = de(), o = z(), l = U();
        class t {
            constructor(i){
                this.options = {
                    versionTruncation: 1
                }, this.parse = (n)=>{
                    const m = {
                        type: "",
                        name: "",
                        version: ""
                    };
                    for (const s of e.default){
                        const g = l.userAgentParser(s.regex, n);
                        if (g) {
                            m.type = "mobile app", m.name = o.variableReplacement(s.name, g), m.version = r.formatVersion(o.variableReplacement(s.version, g), this.options.versionTruncation);
                            break;
                        }
                    }
                    return m;
                }, this.options = Object.assign(Object.assign({}, this.options), i);
            }
        }
        return se.default = t, se;
    }
    var ge = {};
    const kn = [
        {
            regex: "Akregator(?:/(\\d+[\\.\\d]+))?",
            name: "Akregator",
            version: "$1",
            url: "http://userbase.kde.org/Akregator",
            type: "Feed Reader"
        },
        {
            regex: "Apple-PubSub(?:/(\\d+[\\.\\d]+))?",
            name: "Apple PubSub",
            version: "$1",
            url: "https://developer.apple.com/library/mac/documentation/Darwin/Reference/ManPages/man1/pubsub.1.html",
            type: "Feed Reader"
        },
        {
            regex: "BashPodder",
            name: "BashPodder",
            version: "",
            url: "http://lincgeek.org/bashpodder/",
            type: "Feed Reader"
        },
        {
            regex: "Breaker/v([\\d\\.]+)",
            name: "Breaker",
            version: "$1",
            url: "https://www.breaker.audio/",
            type: "Feed Reader App"
        },
        {
            regex: "Downcast/([\\d\\.]+)",
            name: "Downcast",
            version: "$1",
            url: "http://downcastapp.com/",
            type: "Feed Reader App"
        },
        {
            regex: "FeedDemon(?:/(\\d+[\\.\\d]+))?",
            name: "FeedDemon",
            version: "$1",
            url: "http://www.feeddemon.com/",
            type: "Feed Reader"
        },
        {
            regex: "Feeddler(?:RSS|PRO)(?:[/ ](\\d+[\\.\\d]+))?",
            name: "Feeddler RSS Reader",
            version: "$1",
            url: "http://www.chebinliu.com/projects/iphone/feeddler-rss-reader/",
            type: "Feed Reader App"
        },
        {
            regex: "QuiteRSS(?:[/ ](\\d+[\\.\\d]+))?",
            name: "QuiteRSS",
            version: "$1",
            url: "https://quiterss.org",
            type: "Feed Reader App"
        },
        {
            regex: "gPodder/([\\d\\.]+)",
            name: "gPodder",
            version: "$1",
            url: "http://gpodder.org/",
            type: "Feed Reader App"
        },
        {
            regex: "JetBrains Omea Reader(?:[/ ](\\d+[\\.\\d]+))?",
            name: "JetBrains Omea Reader",
            version: "$1",
            url: "http://www.jetbrains.com/omea/reader/",
            type: "Feed Reader"
        },
        {
            regex: "Liferea(?:[/ ](\\d+[\\.\\d]+))?",
            name: "Liferea",
            version: "$1",
            url: "http://liferea.sf.net/",
            type: "Feed Reader"
        },
        {
            regex: "NetNewsWire(?:[/ ](\\d+[\\.\\d]+))?",
            name: "NetNewsWire",
            version: "$1",
            url: "http://netnewswireapp.com/",
            type: "Feed Reader"
        },
        {
            regex: "NewsBlur (?:iPhone|iPad) App(?: v(\\d+[\\.\\d]+))?",
            name: "NewsBlur Mobile App",
            version: "$1",
            url: "http://www.newsblur.com",
            type: "Feed Reader App"
        },
        {
            regex: "NewsBlur(?:/(\\d+[\\.\\d]+))",
            name: "NewsBlur",
            version: "$1",
            url: "http://www.newsblur.com",
            type: "Feed Reader"
        },
        {
            regex: "newsbeuter(?:[/ ](\\d+[\\.\\d]+))?",
            name: "Newsbeuter",
            version: "$1",
            url: "http://www.newsbeuter.org/",
            type: "Feed Reader"
        },
        {
            regex: "PritTorrent/([\\d\\.]+)",
            name: "PritTorrent",
            version: "$1",
            url: "http://bitlove.org",
            type: "Feed Reader"
        },
        {
            regex: "Pulp[/ ](\\d+[\\.\\d]+)",
            name: "Pulp",
            version: "$1",
            url: "http://www.acrylicapps.com/pulp/",
            type: "Feed Reader App"
        },
        {
            regex: "ReadKit(?:[/ ](\\d+[\\.\\d]+))?",
            name: "ReadKit",
            version: "$1",
            url: "http://readkitapp.com/",
            type: "Feed Reader App"
        },
        {
            regex: "Reeder(?:[/ ](\\d+[\\.\\d]+))?",
            name: "Reeder",
            version: "$1",
            url: "http://reederapp.com/",
            type: "Feed Reader App"
        },
        {
            regex: "RSSBandit(?:[/ ](\\d+[\\.\\d]+))?",
            name: "RSS Bandit",
            version: "$1",
            url: "http://www.rssbandit.org)",
            type: "Feed Reader"
        },
        {
            regex: "RSS Junkie(?:[/ ](\\d+[\\.\\d]+))?",
            name: "RSS Junkie",
            version: "$1",
            url: "https://play.google.com/store/apps/details?id=com.bitpowder.rssjunkie",
            type: "Feed Reader App"
        },
        {
            regex: "RSSOwl(?:[/ ](\\d+[\\.\\d]+))?",
            name: "RSSOwl",
            version: "$1",
            url: "http://www.rssowl.org/",
            type: "Feed Reader"
        },
        {
            regex: "Stringer",
            name: "Stringer",
            version: "",
            url: "https://github.com/swanson/stringer",
            type: "Feed Reader"
        }
    ];
    var Rr;
    function Wn() {
        if (Rr) return ge;
        Rr = 1;
        var d = ge && ge.__importDefault || function(a) {
            return a && a.__esModule ? a : {
                default: a
            };
        };
        Object.defineProperty(ge, "__esModule", {
            value: !0
        });
        const e = d(kn), r = de(), o = z(), l = U();
        class t {
            constructor(i){
                this.options = {
                    versionTruncation: 1
                }, this.parse = (n)=>{
                    const m = {
                        type: "",
                        name: "",
                        version: "",
                        url: ""
                    };
                    for (const s of e.default){
                        const g = l.userAgentParser(s.regex, n);
                        if (g) {
                            m.type = "feed reader", m.name = o.variableReplacement(s.name, g), m.version = r.formatVersion(o.variableReplacement(s.version, g), this.options.versionTruncation), m.url = s.url;
                            break;
                        }
                    }
                    return m;
                }, this.options = Object.assign(Object.assign({}, this.options), i);
            }
        }
        return ge.default = t, ge;
    }
    var xe = {};
    const Kn = [
        {
            regex: "Wget(?:/(\\d+[\\.\\d]+))?",
            name: "Wget",
            version: "$1"
        },
        {
            regex: "Guzzle(?:/(\\d+[\\.\\d]+))?",
            name: "Guzzle (PHP HTTP Client)",
            version: "$1"
        },
        {
            regex: "(?:lib)?curl(?:/(\\d+[\\.\\d]+))?",
            name: "curl",
            version: "$1"
        },
        {
            regex: "python-requests(?:/(\\d+[\\.\\d]+))?",
            name: "Python Requests",
            version: "$1"
        },
        {
            regex: "Python-urllib(?:/?(\\d+[\\.\\d]+))?",
            name: "Python urllib",
            version: "$1"
        },
        {
            regex: "Java(?:/?(\\d+[\\.\\d]+))?",
            name: "Java",
            version: "$1"
        },
        {
            regex: "(?:perlclient|libwww-perl)(?:/?(\\d+[\\.\\d]+))?",
            name: "Perl",
            version: "$1"
        },
        {
            regex: "okhttp/([\\d\\.]+)",
            name: "OkHttp",
            version: "$1"
        },
        {
            regex: "HTTP_Request2(?:/(\\d+[\\.\\d]+))?",
            name: "HTTP_Request2",
            version: "$1"
        },
        {
            regex: "HTTP_Request2(?:/(\\d+[\\.\\d]+))?",
            name: "HTTP_Request2",
            version: "$1",
            url: "http://pear.php.net/package/http_request2"
        },
        {
            regex: "Mechanize(?:/(\\d+[\\.\\d]+))?",
            name: "Mechanize",
            version: "$1",
            url: "http://github.com/sparklemotion/mechanize/"
        },
        {
            regex: "aiohttp(?:/(\\d+[\\.\\d]+))?",
            name: "aiohttp",
            version: "$1"
        },
        {
            regex: "Google-HTTP-Java-Client(?:/(\\d+[\\.\\d\\w-]+))?",
            name: "Google HTTP Java Client",
            version: "$1"
        },
        {
            regex: "WWW-Mechanize(?:/(\\d+[\\.\\d]+))?",
            name: "WWW-Mechanize",
            version: "$1"
        },
        {
            regex: "Faraday(?: v(\\d+[\\.\\d]+))?",
            name: "Faraday",
            version: "$1"
        },
        {
            regex: "(?:Go-http-client|Go )/?(?:(\\d+[\\.\\d]+))?(?: package http)?",
            name: "Go-http-client",
            version: "$1"
        },
        {
            regex: "urlgrabber(?:/(\\d+[\\.\\d]+))?",
            name: "urlgrabber (yum)",
            version: "$1"
        },
        {
            regex: "libdnf(?:/(\\d+[\\.\\d]+))?",
            name: "libdnf",
            version: "$1"
        },
        {
            regex: "HTTPie(?:/(\\d+[\\.\\d]+))?",
            name: "HTTPie",
            version: "$1"
        },
        {
            regex: "rest-client/(\\d+[\\.\\d]+).*ruby",
            name: "REST Client for Ruby",
            version: "$1"
        },
        {
            regex: "RestSharp/(\\d+[\\.\\d]+)",
            name: "RestSharp",
            version: "$1",
            url: "http://restsharp.org/"
        },
        {
            regex: "scalaj-http/(\\d+[\\.\\d]+)",
            name: "ScalaJ HTTP",
            version: "$1",
            url: "https://github.com/scalaj/scalaj-http"
        },
        {
            regex: "REST::Client/(\\d+)",
            name: "Perl REST::Client",
            version: "$1",
            url: "https://metacpan.org/pod/REST::Client"
        },
        {
            regex: "node-fetch/(\\d+[\\.\\d]+)",
            name: "Node Fetch",
            version: "$1",
            url: "https://github.com/node-fetch/node-fetch"
        }
    ];
    var Vr;
    function Yn() {
        if (Vr) return xe;
        Vr = 1;
        var d = xe && xe.__importDefault || function(a) {
            return a && a.__esModule ? a : {
                default: a
            };
        };
        Object.defineProperty(xe, "__esModule", {
            value: !0
        });
        const e = d(Kn), r = de(), o = z(), l = U();
        class t {
            constructor(i){
                this.options = {
                    versionTruncation: 1
                }, this.parse = (n)=>{
                    const m = {
                        type: "",
                        name: "",
                        version: "",
                        url: ""
                    };
                    for (const s of e.default){
                        const g = l.userAgentParser(s.regex, n);
                        if (g) {
                            m.type = "library", m.name = o.variableReplacement(s.name, g), m.version = r.formatVersion(o.variableReplacement(s.version, g), this.options.versionTruncation), m.url = s.url || "";
                            break;
                        }
                    }
                    return m;
                }, this.options = Object.assign(Object.assign({}, this.options), i);
            }
        }
        return xe.default = t, xe;
    }
    var ce = {};
    const Qn = [
        {
            regex: "Audacious(?:[ /]([\\d\\.]+))?",
            name: "Audacious",
            version: "$1"
        },
        {
            regex: "Banshee(?:[ /]([\\d\\.]+))?",
            name: "Banshee",
            version: "$1"
        },
        {
            regex: "Boxee(?:[ /]([\\d\\.]+))?",
            name: "Boxee",
            version: "$1"
        },
        {
            regex: "Clementine(?:[ /]([\\d\\.]+))?",
            name: "Clementine",
            version: "$1"
        },
        {
            regex: "Deezer(?:/([\\d\\.]+))?",
            name: "Deezer",
            version: "$1"
        },
        {
            regex: "iTunes(?:-iPhone|-iPad)?(?:/([\\d\\.]+))?",
            name: "iTunes",
            version: "$1"
        },
        {
            regex: "FlyCast(?:/([\\d\\.]+))?",
            name: "FlyCast",
            version: "$1"
        },
        {
            regex: "foobar2000(?:/([\\d\\.]+))?",
            name: "Foobar2000",
            version: "$1"
        },
        {
            regex: "MediaMonkey(?:[ /](\\d+[\\.\\d]+))?",
            name: "MediaMonkey",
            version: "$1"
        },
        {
            regex: "Miro(?:/(\\d+[\\.\\d]+))?",
            name: "Miro",
            version: "$1"
        },
        {
            regex: "NexPlayer(?:/(\\d+[\\.\\d]+))?",
            name: "NexPlayer",
            version: "$1"
        },
        {
            regex: "Nightingale(?:/([\\d\\.]+))?",
            name: "Nightingale",
            version: "$1"
        },
        {
            regex: "QuickTime(?:(?:(?:.+qtver=)|(?:(?: E-)?[\\./]))([\\d\\.]+))?",
            name: "QuickTime",
            version: "$1"
        },
        {
            regex: "Songbird(?:/([\\d\\.]+))?",
            name: "Songbird",
            version: "$1"
        },
        {
            regex: "SubStream(?:/([\\d\\.]+))?",
            name: "SubStream",
            version: "$1"
        },
        {
            regex: "(?:Lib)?VLC(?:/([\\d\\.]+))?",
            name: "VLC",
            version: "$1"
        },
        {
            regex: "Winamp(?:MPEG)?(?:/(\\d+[\\.\\d]+))?",
            name: "Winamp",
            version: "$1"
        },
        {
            regex: "(?:Windows-Media-Player|NSPlayer)(?:/(\\d+[\\.\\d]+))?",
            name: "Windows Media Player",
            version: "$1"
        },
        {
            regex: "XBMC(?:/([\\d\\.]+))?",
            name: "XBMC",
            version: "$1"
        },
        {
            regex: "Kodi(?:/([\\d\\.]+))?",
            name: "Kodi",
            version: "$1"
        },
        {
            regex: "stagefright(?:/([\\d\\.]+))?",
            name: "Stagefright",
            version: "$1"
        },
        {
            regex: "GoogleChirp(?:/(\\d+[\\.\\d]+))?",
            name: "Google Podcasts",
            version: "$1"
        },
        {
            regex: "Music Player Daemon (?:(\\d+[\\.\\d]+))?",
            name: "Music Player Daemon",
            version: "$1"
        },
        {
            regex: "mpv (?:(\\d+[\\.\\d]+))?",
            name: "mpv",
            version: "$1"
        }
    ];
    var Ur;
    function Zn() {
        if (Ur) return ce;
        Ur = 1;
        var d = ce && ce.__importDefault || function(a) {
            return a && a.__esModule ? a : {
                default: a
            };
        };
        Object.defineProperty(ce, "__esModule", {
            value: !0
        });
        const e = d(Qn), r = de(), o = z(), l = U();
        class t {
            constructor(i){
                this.options = {
                    versionTruncation: 1
                }, this.parse = (n)=>{
                    const m = {
                        type: "",
                        name: "",
                        version: ""
                    };
                    for (const s of e.default){
                        const g = l.userAgentParser(s.regex, n);
                        if (g) {
                            m.type = "media player", m.name = o.variableReplacement(s.name, g), m.version = r.formatVersion(o.variableReplacement(s.version, g), this.options.versionTruncation);
                            break;
                        }
                    }
                    return m;
                }, this.options = Object.assign(Object.assign({}, this.options), i);
            }
        }
        return ce.default = t, ce;
    }
    var ue = {};
    const zn = [
        {
            regex: "Outlook-Express(?:/(\\d+[\\.\\d]+))?",
            name: "Outlook Express",
            version: "$1"
        },
        {
            regex: "Microsoft Outlook(?:[/ ](\\d+[\\.\\d]+))?",
            name: "Microsoft Outlook",
            version: "$1"
        },
        {
            regex: "(?:Thunderbird|Icedove|Shredder)(?:/(\\d+[\\.\\d]+))?",
            name: "Thunderbird",
            version: "$1"
        },
        {
            regex: "Airmail(?: (\\d+[\\.\\d]+))?",
            name: "Airmail",
            version: "$1"
        },
        {
            regex: "Lotus-Notes(?:/(\\d+[\\.\\d]+))?",
            name: "Lotus Notes",
            version: "$1"
        },
        {
            regex: "Barca(?:Pro)?(?:[/ ](\\d+[\\.\\d]+))?",
            name: "Barca",
            version: "$1"
        },
        {
            regex: "Postbox(?:[/ ](\\d+[\\.\\d]+))?",
            name: "Postbox",
            version: "$1"
        },
        {
            regex: "MailBar(?:[/ ](\\d+[\\.\\d]+))?",
            name: "MailBar",
            version: "$1"
        },
        {
            regex: "The Bat!(?: Voyager)?(?:[/ ](\\d+[\\.\\d]+))?",
            name: "The Bat!",
            version: "$1"
        },
        {
            regex: "DAVdroid(?:/(\\d+[\\.\\d]+))?",
            name: "DAVdroid",
            version: "$1"
        },
        {
            regex: "(?:SeaMonkey|Iceape)(?:/(\\d+[\\.\\d]+))?",
            name: "SeaMonkey",
            version: "$1"
        }
    ];
    var Hr;
    function Jn() {
        if (Hr) return ue;
        Hr = 1;
        var d = ue && ue.__importDefault || function(a) {
            return a && a.__esModule ? a : {
                default: a
            };
        };
        Object.defineProperty(ue, "__esModule", {
            value: !0
        });
        const e = d(zn), r = de(), o = z(), l = U();
        class t {
            constructor(i){
                this.options = {
                    versionTruncation: 1
                }, this.parse = (n)=>{
                    const m = {
                        type: "",
                        name: "",
                        version: ""
                    };
                    for (const s of e.default){
                        const g = l.userAgentParser(s.regex, n);
                        if (g) {
                            m.type = "personal information manager", m.name = o.variableReplacement(s.name, g), m.version = r.formatVersion(o.variableReplacement(s.version, g), this.options.versionTruncation);
                            break;
                        }
                    }
                    return m;
                }, this.options = Object.assign(Object.assign({}, this.options), i);
            }
        }
        return ue.default = t, ue;
    }
    var kr;
    function qn() {
        if (kr) return ne;
        kr = 1;
        var d = ne && ne.__importDefault || function(m) {
            return m && m.__esModule ? m : {
                default: m
            };
        };
        Object.defineProperty(ne, "__esModule", {
            value: !0
        });
        const e = d(Lo()), r = d(Hn()), o = d(Wn()), l = d(Yn()), t = d(Zn()), a = d(Jn()), i = [
            o.default,
            r.default,
            t.default,
            a.default,
            e.default,
            l.default
        ];
        class n {
            constructor(s){
                this.options = {
                    versionTruncation: 1
                }, this.parse = (g)=>{
                    for (const x of i){
                        const T = new x(this.options).parse(g);
                        if (T.type !== "") return T;
                    }
                    return null;
                }, this.options = Object.assign(Object.assign({}, this.options), s);
            }
        }
        return ne.default = n, ne;
    }
    var Se = {}, Ae = {};
    const jn = {
        regex: "Coolpix S800c",
        device: "camera",
        model: "Coolpix S800c"
    }, em = {
        regex: "EK-G[CN][0-9]{3}",
        device: "camera",
        models: [
            {
                regex: "EK-GN120",
                model: "GALAXY NX"
            },
            {
                regex: "EK-GC100",
                model: "GALAXY Camera"
            },
            {
                regex: "EK-GC110",
                model: "GALAXY Camera WiFi only"
            },
            {
                regex: "EK-GC200",
                model: "GALAXY Camera 2"
            },
            {
                regex: "EK-GC([0-9]{3})",
                model: "GALAXY Camera $1"
            }
        ]
    }, rm = {
        Nikon: jn,
        Samsung: em
    };
    var Wr;
    function om() {
        if (Wr) return Ae;
        Wr = 1;
        var d = Ae && Ae.__importDefault || function(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        };
        Object.defineProperty(Ae, "__esModule", {
            value: !0
        });
        const e = d(rm), r = z(), o = U();
        class l {
            constructor(){
                this.parse = (a)=>{
                    const i = {
                        type: "",
                        brand: "",
                        model: ""
                    };
                    for (const [n, m] of Object.entries(e.default)){
                        const s = o.userAgentParser(m.regex, a);
                        if (s) {
                            if (i.type = "camera", i.brand = n, m.model) i.model = r.variableReplacement(m.model, s).trim();
                            else if (m.models) for (const g of m.models){
                                const x = o.userAgentParser(g.regex, a);
                                if (x) {
                                    i.model = r.variableReplacement(g.model, x).trim();
                                    break;
                                }
                            }
                            break;
                        }
                    }
                    return i;
                };
            }
        }
        return Ae.default = l, Ae;
    }
    var pe = {};
    const lm = {
        regex: "BUZZ 1 Lite",
        device: "smartphone",
        models: [
            {
                regex: "BUZZ 1 Lite",
                model: "Buzz 1 Lite"
            }
        ]
    }, dm = {
        regex: "StarShine|StarTrail|STARADDICT|StarText|StarNaute|StarXtrem|StarTab",
        device: "smartphone",
        models: [
            {
                regex: "StarXtrem[);/ ]",
                model: "StarXtrem"
            },
            {
                regex: "StarTrail ?4[);/ ]",
                model: "StarTrail 4"
            },
            {
                regex: "StarTrail III[);/ ]",
                model: "StarTrail 3"
            },
            {
                regex: "StarTrail II[);/ ]",
                model: "StarTrail 2"
            },
            {
                regex: "StarTrail[);/ ]",
                model: "StarTrail"
            },
            {
                regex: "StarShine II[);/ ]",
                model: "StarShine 2"
            },
            {
                regex: "StarShine[);/ ]",
                model: "StarShine"
            },
            {
                regex: "STARADDICT 4[);/ ]",
                model: "Staraddict 4"
            },
            {
                regex: "STARADDICT III[);/ ]",
                model: "Staraddict 3"
            },
            {
                regex: "STARADDICT II Plus[);/ ]",
                model: "Staraddict 2 Plus"
            },
            {
                regex: "STARADDICT II[);/ ]",
                model: "Staraddict 2"
            },
            {
                regex: "STARADDICT[);/ ]",
                model: "Staraddict"
            },
            {
                regex: "StarText II[);/ ]",
                model: "StarText 2"
            },
            {
                regex: "StarText[);/ ]",
                model: "StarText"
            },
            {
                regex: "StarNaute II[);/ ]",
                model: "StarNaute 2"
            },
            {
                regex: "StarNaute[);/ ]",
                model: "StarNaute"
            },
            {
                regex: "StarTab",
                model: "StarTab",
                device: "tablet"
            },
            {
                regex: "((?:StarShine|StarTrail|STARADDICT|StarText|StarNaute|StarXtrem)[^;/]*) Build",
                model: "$1"
            }
        ]
    }, am = {
        regex: "HTC|Sprint (?:APA|ATP)|ADR(?!910L)[a-z0-9]+|NexusHD2|Amaze[ _]4G[);/ ]|(Desire|Sensation|Evo ?3D|IncredibleS|Wildfire|Butterfly)[ _]?([^;/)]+)(?: Build|\\))|(Amaze[ _]4G|One ?[XELSV\\+]+)[);/ ]|SPV E6[05]0|One M8|X525a|PG86100|PC36100|XV6975|PJ83100[);/ ]|2PYB2|2PZC5|0PJA10|0PJA2|HTV33",
        device: "smartphone",
        models: [
            {
                regex: "2PZC5[);/ ]",
                model: "U11"
            },
            {
                regex: "XV6975[);/ ]",
                model: "Imagio"
            },
            {
                regex: "PG86100[);/ ]",
                model: "Evo 3G"
            },
            {
                regex: "PC36100[);/ ]",
                model: "Evo 4G"
            },
            {
                regex: "HTV33[);/ ]",
                model: "U11"
            },
            {
                regex: "PJ83100[);/ ]",
                model: "One X"
            },
            {
                regex: "(?:0PJA2|0PJA10)[);/ ]",
                model: "One M9"
            },
            {
                regex: "ADR6300",
                model: "Droid Incredible"
            },
            {
                regex: "ADR6400L",
                model: "ThunderBolt"
            },
            {
                regex: "ADR6410LRA",
                model: "Droid Incredible 3"
            },
            {
                regex: "SPV E600",
                model: "Excalibur"
            },
            {
                regex: "SPV E650",
                model: "Vox"
            },
            {
                regex: "X525a",
                model: "One X+"
            },
            {
                regex: "2PYB2",
                model: "Bolt"
            },
            {
                regex: "NexusHD2",
                model: "HD2"
            },
            {
                regex: "HTC[ _\\-]P715a",
                device: "tablet",
                model: "P715a"
            },
            {
                regex: "HTC[ _\\-]Flyer Build",
                device: "tablet",
                model: "Flyer"
            },
            {
                regex: "HTC[ _\\-]Flyer[ _\\-]([\\w]{1,5})",
                device: "tablet",
                model: "Flyer $1"
            },
            {
                regex: "HTC[ _\\-]One[ _\\-]max[);/ ]",
                device: "phablet",
                model: "One max"
            },
            {
                regex: "HTC[ _]([^/;]+) [0-9]+(?:\\.[0-9]+)+ Build",
                model: "$1"
            },
            {
                regex: "HTC[ _]([^/;]+) Build",
                model: "$1"
            },
            {
                regex: "HTC[ _]([a-z0-9]+[ _\\-]?(?:[a-z0-9_+\\-])*)",
                model: "$1"
            },
            {
                regex: "USCCHTC(\\d+)",
                model: "$1"
            },
            {
                regex: "Sprint (ATP.*) Build",
                device: "tablet",
                model: "$1 (Sprint)"
            },
            {
                regex: "Sprint (APA.*) Build",
                model: "$1 (Sprint)"
            },
            {
                regex: "HTC(?:[\\-/ ])?([a-z0-9\\-_]+)",
                model: "$1"
            },
            {
                regex: "HTC;(?: )?([a-z0-9 ]+)",
                model: "$1"
            },
            {
                regex: "(Desire|Sensation|Evo ?3D|IncredibleS|Wildfire|Butterfly)[ _]?([^;/)]+)(?: Build|\\))",
                model: "$1 $2"
            },
            {
                regex: "(Amaze[ _]4G|One ?[XELSV\\+]*) Build",
                model: "$1"
            },
            {
                regex: "(ADR[^;/]+) Build",
                model: "$1"
            },
            {
                regex: "(ADR[a-z0-9]+)",
                model: "$1"
            },
            {
                regex: "(One M8)",
                model: "$1"
            }
        ]
    }, tm = {
        regex: "KIN\\.(One|Two)|RM-(?:1010|1031|106[57]|107[23467]|1089|109[02]|1096|1099|1109|111[34]|1127|1141|1154|994)|Microsoft; Lumia|Lumia (?:1530|1320|950|850|650|640|550|535|435)",
        device: "smartphone",
        models: [
            {
                regex: "KIN\\.(One|Two)",
                device: "feature phone",
                model: "Kin $1"
            },
            {
                regex: "RM-1099|Lumia 430",
                model: "Lumia 430"
            },
            {
                regex: "RM-1114|Lumia 435",
                model: "Lumia 435"
            },
            {
                regex: "RM-1031|Lumia 532",
                model: "Lumia 532"
            },
            {
                regex: "RM-109[02]|RM-1089|Lumia 535",
                model: "Lumia 535"
            },
            {
                regex: "RM-1141|Lumia 540",
                model: "Lumia 540"
            },
            {
                regex: "RM-1127|Lumia 550",
                model: "Lumia 550"
            },
            {
                regex: "RM-1010",
                model: "Lumia 638"
            },
            {
                regex: "RM-106[57]|RM-1096|Lumia 640 XL",
                model: "Lumia 640 XL",
                device: "phablet"
            },
            {
                regex: "RM-1109|RM-1113|RM-107[23467]|Lumia 640",
                model: "Lumia 640"
            },
            {
                regex: "RM-1154|Lumia 650",
                model: "Lumia 650"
            },
            {
                regex: "Lumia 850",
                model: "Lumia 850"
            },
            {
                regex: "Lumia 950 XL",
                model: "Lumia 950 XL",
                device: "phablet"
            },
            {
                regex: "Lumia 950",
                model: "Lumia 950"
            },
            {
                regex: "RM-994|Lumia 1320",
                model: "Lumia 1320"
            },
            {
                regex: "Lumia 1530",
                model: "Lumia 1530"
            },
            {
                regex: "Microsoft; Lumia ([^;/)]+)[;/)]",
                model: "Lumia $1"
            }
        ]
    }, im = {
        regex: "Nokia(?!Browser|Webview|; GT-I8750)|Lumia|Maemo RX|portalmmm/2\\.0 N7|portalmmm/2\\.0 NK|nok[0-9]+|Symbian.*\\s([a-z0-9]+)$|RX-51 N900|TA-[0-9]{4}|ARM; 909",
        device: "smartphone",
        models: [
            {
                regex: "TA-10(07|23|29|35)",
                model: "2"
            },
            {
                regex: "TA-10(20|28|32|38)",
                model: "3"
            },
            {
                regex: "TA-10(24|27|44|53)",
                model: "5"
            },
            {
                regex: "TA-10(00|03|21|25|33|39|54)",
                model: "6"
            },
            {
                regex: "TA-1041",
                model: "7"
            },
            {
                regex: "TA-10(04|12|52)",
                model: "8"
            },
            {
                regex: "Nokia 8\\.1",
                model: "8.1"
            },
            {
                regex: "Nokia 8 Sirocco",
                model: "8 Sirocco"
            },
            {
                regex: "Nokia 7\\.1",
                model: "7.1"
            },
            {
                regex: "Nokia 7 plus",
                model: "7 plus"
            },
            {
                regex: "Nokia 6\\.1 Plus",
                model: "6.1 Plus"
            },
            {
                regex: "Nokia 6\\.1",
                model: "6.1"
            },
            {
                regex: "Nokia 5\\.1 Plus",
                model: "5.1 Plus"
            },
            {
                regex: "Nokia 5\\.1",
                model: "5.1"
            },
            {
                regex: "Nokia 3\\.1",
                model: "3.1"
            },
            {
                regex: "Nokia 2\\.1",
                model: "2.1"
            },
            {
                regex: "Nokia 1 Plus",
                model: "1 Plus"
            },
            {
                regex: "Nokia 1",
                model: "1"
            },
            {
                regex: "RX-51 N900",
                model: "N900"
            },
            {
                regex: "(?: )?(Nokia500|nokiaasha500(?:dualsim)?)(?: Build|[_);/])",
                model: "Asha 500"
            },
            {
                regex: "Nokia5130c(?:-2)?",
                model: "5130 XpressMusic"
            },
            {
                regex: "Nokia5230",
                model: "Nuron"
            },
            {
                regex: "Nokia5233",
                model: "5233"
            },
            {
                regex: "Nokia5800d-1",
                model: "5800 XpressMusic"
            },
            {
                regex: "Nokia6210Navigator",
                model: "Navigator"
            },
            {
                regex: "Nokia8800e?",
                model: "Sapphire Arte"
            },
            {
                regex: "NOKIA-RH-17",
                model: "2280"
            },
            {
                regex: "NOKIA-RH-27",
                model: "6225"
            },
            {
                regex: "NOKIA-RH-34",
                model: "6585"
            },
            {
                regex: "NOKIA-RH-48",
                model: "3105"
            },
            {
                regex: "NOKIA-RM-11",
                model: "3205"
            },
            {
                regex: "Nokia808 PureView",
                model: "808 PureView"
            },
            {
                regex: "Nokia ?([0-9]{4})c(?:-)?",
                model: "$1 Classic"
            },
            {
                regex: "Nokia ?([0-9]{4})s(?:-)?",
                model: "$1 Slide"
            },
            {
                regex: "Nokia ?([0-9]{4})",
                model: "$1"
            },
            {
                regex: "(?: )?Nokia([235][0-9]{2})(?: Build|[_);/])",
                model: "Asha $1"
            },
            {
                regex: "Nokia([CEX]-?[0-9]{1,2}i?)-[0-9]{1,2}u?(?: Build|[_);/])",
                model: "$1"
            },
            {
                regex: "Nokia;? 520T",
                model: "Lumia 520T"
            },
            {
                regex: "RM-91[45]",
                model: "Lumia 520"
            },
            {
                regex: "RM-997|Nokia 526",
                model: "Lumia 526"
            },
            {
                regex: "RM-846",
                model: "Lumia 620"
            },
            {
                regex: "RM-97[68]",
                model: "Lumia 630"
            },
            {
                regex: "RM-97[45]",
                model: "Lumia 635"
            },
            {
                regex: "RM-1027",
                model: "Lumia 636"
            },
            {
                regex: "NOKIA;? 710",
                model: "Lumia 710"
            },
            {
                regex: "Nokia;? 720T",
                model: "Lumia 720T"
            },
            {
                regex: "RM-885",
                model: "Lumia 720"
            },
            {
                regex: "Lumia 730",
                model: "Lumia 730"
            },
            {
                regex: "RM-103[89]",
                model: "Lumia 735"
            },
            {
                regex: "Nokia;? 800C",
                model: "Lumia 800C"
            },
            {
                regex: "Nokia;? 800",
                model: "Lumia 800"
            },
            {
                regex: "Nokia 820",
                model: "Lumia 820"
            },
            {
                regex: "RM-984",
                model: "Lumia 830"
            },
            {
                regex: "Nokia;? 900",
                model: "Lumia 900"
            },
            {
                regex: "(RM-82[12]|Nokia;? 920)(?: Build|[_);/])",
                model: "Lumia 920"
            },
            {
                regex: "(RM-89[23]|RM-910|Nokia;? 925)(?: Build|[a_);/])",
                model: "Lumia 925"
            },
            {
                regex: "Lumia 929",
                model: "Lumia Icon"
            },
            {
                regex: "RM-1045",
                model: "Lumia 930"
            },
            {
                regex: "(ARM; 909|NOKIA;? 909|NOKIA; id300)(?: Build|[_);/])",
                model: "Lumia 1020"
            },
            {
                regex: "NOKIA;? 1520\\.1",
                model: "Lumia 1520.1"
            },
            {
                regex: "Nokia ([A-Za-z0-9\\. ]+)(?: Build|[_);/])",
                model: "$1"
            },
            {
                regex: "Nokia(N[0-9]+)",
                model: "$1"
            },
            {
                regex: "Nokia-([a-z0-9]+)",
                model: "N$1"
            },
            {
                regex: "NOKIA; (?!Qt;)([a-z0-9\\- ]+)",
                model: "$1"
            },
            {
                regex: "NOKIA[ _]?([a-z0-9\\-]+)",
                model: "$1"
            },
            {
                regex: "NOKIA/([a-z0-9 ]+)",
                model: "$1"
            },
            {
                regex: "(Lumia [a-z0-9\\-]+ XL)",
                device: "phablet",
                model: "$1"
            },
            {
                regex: "(Lumia [a-z0-9\\-]+)",
                model: "$1"
            },
            {
                regex: "Maemo RX-51 ([a-z0-9]+)",
                model: "$1"
            },
            {
                regex: "Maemo RX-34",
                model: "N800"
            },
            {
                regex: "NokiaInternal|Nokia-WAP-Toolkit|Nokia-MIT-Browser|Nokia Mobile|Nokia Browser|Nokia/Series",
                model: ""
            },
            {
                regex: "portalmmm/2\\.0 (N7[37]|NK[a-z0-9]+)",
                model: "$1"
            },
            {
                regex: "nok([0-9]+)",
                model: "$1"
            },
            {
                regex: "Symbian.*\\s([a-z0-9]+)$",
                device: "feature phone",
                model: "$1"
            }
        ]
    }, nm = {
        regex: "CnM",
        device: "tablet",
        models: [
            {
                regex: "CnM[ \\-](?:Touchpad|TP)[ \\-]([0-9\\.]+)",
                model: "Touchpad $1"
            }
        ]
    }, mm = {
        regex: "BB10;|BlackBerry|rim[0-9]+|PlayBook|STV100-[1234]|STH100-[12]|BBA100-[12]|BBB100-[1234567]|BBC100-1|BBD100-[126]|BBE100-[123456789]|BBF100-[123456789]|BBG100-1|BBH100-1",
        device: "smartphone",
        models: [
            {
                regex: "BBA100-[12]",
                model: "BlackBerry DTEK60"
            },
            {
                regex: "BBB100-[1234567]",
                model: "KEYone"
            },
            {
                regex: "BBC100-1",
                model: "Aurora"
            },
            {
                regex: "BBD100-[126]",
                model: "Motion"
            },
            {
                regex: "BBE100-[123456789]",
                model: "KEY2 LE"
            },
            {
                regex: "BBF100-[1234567]",
                model: "KEY2"
            },
            {
                regex: "BBF100-8",
                model: "KEY2 Silver"
            },
            {
                regex: "BBF100-9",
                model: "KEY2 Black"
            },
            {
                regex: "BBG100-1",
                model: "Evolve"
            },
            {
                regex: "BBH100-1",
                model: "Evolve X"
            },
            {
                regex: "STV100-[1234]",
                model: "BlackBerry Priv"
            },
            {
                regex: "STH100-[12]",
                model: "BlackBerry DTEK50"
            },
            {
                regex: "BB10; ([a-z0-9\\- ]+)\\)",
                model: "BlackBerry $1"
            },
            {
                regex: "PlayBook.+RIM Tablet OS",
                model: "BlackBerry Playbook",
                device: "tablet"
            },
            {
                regex: "BlackBerry(?: )?([a-z0-9]+)",
                model: "BlackBerry $1"
            },
            {
                regex: "rim([0-9]+)",
                model: "BlackBerry $1"
            },
            {
                regex: "BlackBerry",
                model: "BlackBerry"
            }
        ]
    }, sm = {
        regex: "(?:Pre|Pixi)/(\\d+)\\.(\\d+)|Palm|Treo|Xiino",
        device: "smartphone",
        models: [
            {
                regex: "((?:Pre|Pixi))/(\\d+\\.\\d+)",
                model: "$1 $2"
            },
            {
                regex: "Palm(?:[ \\-])?((?!OS|Source|scape)[a-z0-9]+)",
                model: "$1"
            },
            {
                regex: "Treo([a-z0-9]+)",
                model: "Treo $1"
            },
            {
                regex: "Tungsten",
                model: "Tungsten"
            },
            {
                regex: "Xiino|Palmscape",
                model: ""
            }
        ]
    }, gm = {
        regex: "TouchPad/\\d+\\.\\d+|hp-tablet|HP ?iPAQ|webOS.*P160U|HP (?:Pro )?Slate|HP [78]|Compaq [7|8]|HP; [^;/)]+",
        device: "smartphone",
        models: [
            {
                regex: "HP Slate 6 Voice Tab",
                model: "Slate 6 VoiceTab",
                device: "phablet"
            },
            {
                regex: "HP ([78][^/;]*) Build",
                model: "Slate $1",
                device: "tablet"
            },
            {
                regex: "Compaq ([78][^/;]*) Build",
                model: "Compaq $1",
                device: "tablet"
            },
            {
                regex: "HP Pro Slate 8",
                model: "Pro Slate 8",
                device: "tablet"
            },
            {
                regex: "HP Slate ?(.+) Build",
                model: "Slate $1",
                device: "tablet"
            },
            {
                regex: "HP Slate ?([0-9]+)",
                model: "Slate $1",
                device: "tablet"
            },
            {
                regex: "TouchPad/(\\d+\\.\\d+)|hp-tablet",
                model: "TouchPad",
                device: "tablet"
            },
            {
                regex: "HP; ([^;/)]+)",
                model: "$1"
            },
            {
                regex: "HP(?: )?iPAQ(?: )?([a-z0-9]+)",
                model: "iPAQ $1"
            },
            {
                regex: "webOS.*(P160U)",
                model: "Veer"
            }
        ]
    }, xm = {
        regex: "TiPhone ?([a-z0-9]+)",
        device: "smartphone",
        model: "$1"
    }, cm = {
        regex: "(?:iTunes-)?Apple[ _]?TV|(?:Apple-|iTunes-)?(?<!like )(?:iPad|iPhone)|iPh[0-9],[0-9]|CFNetwork|HomePod",
        models: [
            {
                regex: "HomePod",
                device: "smart speaker",
                model: "HomePod"
            },
            {
                regex: "(?:Apple-)?iPh(?:one)?1[C,_]1",
                model: "iPhone",
                device: "smartphone"
            },
            {
                regex: "(?:Apple-)?iPh(?:one)?1[C,_]2",
                model: "iPhone 3G",
                device: "smartphone"
            },
            {
                regex: "(?:Apple-)?iPh(?:one)?2[C,_]1| 3GS\\)$",
                model: "iPhone 3GS",
                device: "smartphone"
            },
            {
                regex: "(?:Apple-)?iPh(?:one)?3[C,_][123]",
                model: "iPhone 4",
                device: "smartphone"
            },
            {
                regex: "(?:Apple-)?iPh(?:one)?4[C,_]1|1C2%254enohPi| 4S\\)$",
                model: "iPhone 4S",
                device: "smartphone"
            },
            {
                regex: "(?:Apple-)?iPh(?:one)?5[C,_][12]| 5\\)$",
                model: "iPhone 5",
                device: "smartphone"
            },
            {
                regex: "(?:Apple-)?iPh(?:one)?5[C,_][34]",
                model: "iPhone 5C",
                device: "smartphone"
            },
            {
                regex: "(?:Apple-)?iPh(?:one)?6[C,_][12]| 5S\\)$",
                model: "iPhone 5S",
                device: "smartphone"
            },
            {
                regex: "(?:Apple-)?iPh(?:one)?7[C,_]1|1C2%257enohPi| 6PLUS\\)$",
                model: "iPhone 6 Plus",
                device: "phablet"
            },
            {
                regex: "(?:Apple-)?iPh(?:one)?7[C,_]2| 6\\)$",
                model: "iPhone 6",
                device: "smartphone"
            },
            {
                regex: "(?:Apple-)?iPh(?:one)?8[C,_]2| 6SPLUS\\)$",
                model: "iPhone 6s Plus",
                device: "phablet"
            },
            {
                regex: "(?:Apple-)?iPh(?:one)?8[C,_]1|iPhone 6s| 6S\\)$",
                model: "iPhone 6s",
                device: "smartphone"
            },
            {
                regex: "(?:Apple-)?iPh(?:one)?8[C,_]4| SE\\)$",
                model: "iPhone SE",
                device: "smartphone"
            },
            {
                regex: "(?:Apple-)?iPh(?:one)?9[C,_][13]| 7\\)$",
                model: "iPhone 7",
                device: "smartphone"
            },
            {
                regex: "(?:Apple-)?iPh(?:one)?9[C,_][24]| 7PLUS\\)$",
                model: "iPhone 7 Plus",
                device: "phablet"
            },
            {
                regex: "(?:Apple-)?iPh(?:one)?10[C,_][14]| 8\\)$",
                model: "iPhone 8",
                device: "smartphone"
            },
            {
                regex: "(?:Apple-)?iPh(?:one)?10[C,_][25]| 8PLUS\\)$",
                model: "iPhone 8 Plus",
                device: "phablet"
            },
            {
                regex: "(?:Apple-)?iPh(?:one)?10[C,_][36]|iPhone X| X\\)$",
                model: "iPhone X",
                device: "phablet"
            },
            {
                regex: "(?:Apple-)?iPh(?:one)?11[C,_][2]| XS\\)$",
                model: "iPhone XS",
                device: "smartphone"
            },
            {
                regex: "(?:Apple-)?iPh(?:one)?11[C,_][46]| XSMAX\\)$",
                model: "iPhone XS Max",
                device: "phablet"
            },
            {
                regex: "(?:Apple-)?iPh(?:one)?11[C,_][8]| XR\\)$",
                model: "iPhone XR",
                device: "smartphone"
            },
            {
                regex: "(?:Apple-)?iPh(?:one)?12[C,_][1]| 11\\)$",
                model: "iPhone 11",
                device: "smartphone"
            },
            {
                regex: "(?:Apple-)?iPh(?:one)?12[C,_][3]| 11PRO\\)$",
                model: "iPhone 11 Pro",
                device: "phablet"
            },
            {
                regex: "(?:Apple-)?iPh(?:one)?12[C,_][5]| 11PROMAX\\)$",
                model: "iPhone 11 Pro Max",
                device: "phablet"
            },
            {
                regex: "(?:Apple-)?iPh(?:one)?12[C,_][8]",
                model: "iPhone SE (2020)",
                device: "phablet"
            },
            {
                regex: "(?:Apple-)?iPad1[C,_]1",
                model: "iPad",
                device: "tablet"
            },
            {
                regex: "(?:Apple-)?iPad2[C,_][1234]",
                model: "iPad 2",
                device: "tablet"
            },
            {
                regex: "(?:Apple-)?iPad2[C,_][567]",
                model: "iPad Mini",
                device: "tablet"
            },
            {
                regex: "(?:Apple-)?iPad3[C,_][123]",
                model: "iPad 3",
                device: "tablet"
            },
            {
                regex: "(?:Apple-)?iPad3[C,_][456]",
                model: "iPad 4",
                device: "tablet"
            },
            {
                regex: "(?:Apple-)?iPad4[C,_][123]",
                model: "iPad Air",
                device: "tablet"
            },
            {
                regex: "(?:Apple-)?iPad4[C,_][456]",
                model: "iPad Mini 2",
                device: "tablet"
            },
            {
                regex: "(?:Apple-)?iPad4[C,_][789]",
                model: "iPad Mini 3",
                device: "tablet"
            },
            {
                regex: "(?:Apple-)?iPad5[C,_][12]",
                model: "iPad Mini 4",
                device: "tablet"
            },
            {
                regex: "(?:Apple-)?iPad5[C,_][34]",
                model: "iPad Air 2",
                device: "tablet"
            },
            {
                regex: "(?:Apple-)?iPad6[C,_][34]",
                model: "iPad Pro 9.7",
                device: "tablet"
            },
            {
                regex: "(?:Apple-)?iPad6[C,_][78]",
                model: "iPad Pro 12.9",
                device: "tablet"
            },
            {
                regex: "(?:Apple-)?iPad6[C,_](?:11|12)",
                model: "iPad 5 9.7",
                device: "tablet"
            },
            {
                regex: "(?:Apple-)?iPad7[C,_][12]",
                model: "iPad Pro 2 12.9",
                device: "tablet"
            },
            {
                regex: "(?:Apple-)?iPad7[C,_][34]",
                model: "iPad Pro 10.5",
                device: "tablet"
            },
            {
                regex: "(?:Apple-)?iPad7[C,_][56]",
                model: "iPad 6 9.7",
                device: "tablet"
            },
            {
                regex: "(?:Apple-)?iPad7[C,_](?:11|12)",
                model: "iPad 7 10.2",
                device: "tablet"
            },
            {
                regex: "(?:Apple-)?iPad8[C,_][1-4]",
                model: "iPad Pro 3 11.0",
                device: "tablet"
            },
            {
                regex: "(?:Apple-)?iPad8[C,_][5-8]",
                model: "iPad Pro 3 12.9",
                device: "tablet"
            },
            {
                regex: "Apple-?TV2[C,_]1",
                model: "Apple TV 2",
                device: "tv"
            },
            {
                regex: "Apple-?TV3[C,_][12]",
                model: "Apple TV 3",
                device: "tv"
            },
            {
                regex: "Apple-?TV5[C,_]3",
                model: "Apple TV 4",
                device: "tv"
            },
            {
                regex: "Apple-?TV6[C,_]2",
                model: "Apple TV 4K",
                device: "tv"
            },
            {
                regex: "(?:iTunes-)?Apple[ _]?TV",
                model: "Apple TV",
                device: "tv"
            },
            {
                regex: "HomePod",
                model: "HomePod",
                device: "smart speaker"
            },
            {
                regex: "iTunes-iPad/[0-9]+(?:\\.[0-9]+)* \\(([^;]+);",
                model: "iPad $1",
                device: "tablet"
            },
            {
                regex: "(?:Apple-)?iPad",
                model: "iPad",
                device: "tablet"
            },
            {
                regex: "iTunes-iPhone/[0-9]+(?:\\.[0-9]+)* \\(([^;]+);",
                model: "iPhone $1",
                device: "smartphone"
            },
            {
                regex: "(?:Apple-)?iPhone ?(3GS?|4S?|5[CS]?|6(:? Plus)?)?",
                model: "iPhone $1",
                device: "smartphone"
            }
        ]
    }, um = {
        regex: "(?:MicroMax[ \\-\\_]?[a-z0-9]+|Q327)|P70221 Build|YU(5040|5530)[);/ ]",
        device: "smartphone",
        models: [
            {
                regex: "AQ5001",
                model: "Canvas Juice 2"
            },
            {
                regex: "E481",
                model: "Canvas 5"
            },
            {
                regex: "P70221 Build",
                model: "Canvas Tab",
                device: "tablet"
            },
            {
                regex: "Q327",
                model: "Bolt"
            },
            {
                regex: "Q417",
                model: "Canvas Mega"
            },
            {
                regex: "YU5040[);/ ]",
                model: "YU Yureka YU5040"
            },
            {
                regex: "YU5530[);/ ]",
                model: "YU Yureka S YU5530"
            },
            {
                regex: "Q424",
                model: "Bolt Selfie"
            },
            {
                regex: "Q426",
                model: "Canvas Mega 2"
            },
            {
                regex: "MicroMax(?:[ \\-\\_])?(P[a-z0-9]+)",
                model: "$1",
                device: "tablet"
            },
            {
                regex: "MicroMax(?:[ \\-\\_])?([a-z0-9]+)",
                model: "$1"
            }
        ]
    }, Sm = {
        regex: "Alba 57",
        device: "smartphone",
        models: [
            {
                regex: "Alba 57",
                model: "5.7"
            }
        ]
    }, Am = {
        regex: "AllCall_|Heat[34]|Hot ?[125][^;/]+ Build",
        device: "smartphone",
        models: [
            {
                regex: "AllCall_(Alpha|Atom|Bro|Madrid)",
                model: "$1"
            },
            {
                regex: "AllCall_S1_X",
                model: "S1 X"
            },
            {
                regex: "AllCall_S1",
                model: "S1"
            },
            {
                regex: "AllCall_RIO_S",
                model: "Rio S"
            },
            {
                regex: "AllCall_RIO_PRO",
                model: "Rio Pro"
            },
            {
                regex: "AllCall_RIO",
                model: "Rio"
            },
            {
                regex: "Heat([34])",
                model: "Heat $1"
            },
            {
                regex: "Hot ?([125][^;/]+) Build",
                model: "Hot $1"
            }
        ]
    }, pm = {
        regex: "Bravis[ _]|A501 Bright|A552 JOY Max|A504 Trace|A505 JOY Plus|A503 Joy|NB(?:106M|10[1-8]|751|7[145]|8[57]1|76)|NP101|NB961|NP 104 3G|B501|N1-570 Space|Atlas A551",
        device: "smartphone",
        models: [
            {
                regex: "A501 BRIGHT",
                model: "A501 Bright"
            },
            {
                regex: "Bravis[_ ]X500",
                model: "Trace Pro"
            },
            {
                regex: "Bravis[_ ]A506",
                model: "Crystal"
            },
            {
                regex: "Bravis[_ ]A553",
                model: "Discovery"
            },
            {
                regex: "BRAVIS[ _]TAU",
                model: "Tau"
            },
            {
                regex: "BRAVIS[ _]DELTA",
                model: "Delta"
            },
            {
                regex: "BRAVIS[ _]TREND",
                model: "Trend"
            },
            {
                regex: "B501",
                model: "Easy"
            },
            {
                regex: "N1-570",
                model: "Space"
            },
            {
                regex: "BRAVIS[ ]A554",
                model: "A554 Grand"
            },
            {
                regex: "A505 JOY Plus",
                model: "A505 Joy Plus"
            },
            {
                regex: "A552 JOY Max",
                model: "A552 Joy Max"
            },
            {
                regex: "Atlas A551",
                model: "A551 Atlas"
            },
            {
                regex: "A503 Joy",
                model: "A503 Joy"
            },
            {
                regex: "A504 Trace",
                model: "A504 Trace"
            },
            {
                regex: "BRAVIS[ _]SLIM[ _]3G",
                model: "Slim 3G",
                device: "tablet"
            },
            {
                regex: "Bravis[_ ]([^;\\)]+) Build",
                model: "$1"
            },
            {
                regex: "(NB(?:106M|10[1-8]|751|7[145]|8[57]1|76)|NP101|NB961)",
                model: "$1",
                device: "tablet"
            },
            {
                regex: "NP 104 3G",
                model: "NP104 3G",
                device: "tablet"
            }
        ]
    }, vm = {
        regex: "acer|(?<!ZTE BLADE |ImSmart |ERGO |X-Style Tab )a(?:101|110|2[10]0|211|50[10]|51[10]|70[10])[);/ ]|Android.*V3[67]0[);/ ]|Android.*Z1[23456]0 Build|Android.*Z5\\d{2} Build|Android.*T0[234678] Build|Android.*S55[);/ ]|(?:A1-(713(HD)?|7[23]4|830|841|840FHD|81[01])|A3-A[1234][01]|B1-(7[1235-8][01](HD)?|7[23]3|8[1235]0|A71)|B3-(A[12]0|A3[02]|A40FHD)|E39)[);/ ]|S5[12]0 Build|DA[0-9]+HQ?L[);/ ]|Aspire V5-121|Predator G9-793|GT-810",
        device: "smartphone",
        models: [
            {
                regex: "DA220HQL[);/ ]",
                model: "DA220HQL",
                device: "smart display"
            },
            {
                regex: "DA241HL[);/ ]",
                model: "DA241HL",
                device: "smart display"
            },
            {
                regex: "(DA[0-9]+HQ?L)[);/ ]",
                model: "$1",
                device: "smart display"
            },
            {
                regex: "A1-81[01]",
                model: "Iconia A",
                device: "tablet"
            },
            {
                regex: "A1-84(1|0FHD)",
                model: "Iconia Tab 8",
                device: "tablet"
            },
            {
                regex: "A1-713(HD)?",
                model: "Iconia Tab 7",
                device: "tablet"
            },
            {
                regex: "A1-830",
                model: "Iconia A1",
                device: "tablet"
            },
            {
                regex: "A1-7[23]4",
                model: "Iconia Talk S",
                device: "tablet"
            },
            {
                regex: "A3-A[12][01]",
                model: "Iconia A3",
                device: "tablet"
            },
            {
                regex: "A3-A[34]0",
                model: "Iconia Tab 10",
                device: "tablet"
            },
            {
                regex: "B1-7[5678]0|B1-730HD",
                model: "Iconia One 7",
                device: "tablet"
            },
            {
                regex: "B1-7[123][01]|B1-A71",
                model: "Iconia B1",
                device: "tablet"
            },
            {
                regex: "B1-7[23]3",
                model: "Iconia Talk 7",
                device: "tablet"
            },
            {
                regex: "B1-8[1235]0",
                model: "Iconia One 8",
                device: "tablet"
            },
            {
                regex: "B3-A([12]0|3[02]|40FHD)",
                model: "Iconia One 10",
                device: "tablet"
            },
            {
                regex: "A101",
                model: "Vangogh",
                device: "tablet"
            },
            {
                regex: "A200",
                model: "Picasso E",
                device: "tablet"
            },
            {
                regex: "A50[01]",
                model: "Picasso",
                device: "tablet"
            },
            {
                regex: "Acer One 7",
                model: "One 7",
                device: "tablet"
            },
            {
                regex: "GT-810",
                model: "Predator 8",
                device: "tablet"
            },
            {
                regex: "E39[);/ ]",
                model: "Liquid E700"
            },
            {
                regex: "E310[);/ ]",
                model: "Liquid Mini"
            },
            {
                regex: "E320(?:-orange)?[);/ ]",
                model: "Liquid Express"
            },
            {
                regex: "E310[);/ ]",
                model: "beTouch E210"
            },
            {
                regex: "Android.*V360[);/ ]",
                model: "Liquid E1 Duo"
            },
            {
                regex: "Android.*V370[);/ ]",
                model: "Liquid E2 Duo"
            },
            {
                regex: "S510[);/ ]",
                model: "Liquid S1"
            },
            {
                regex: "S520[);/ ]",
                model: "Liquid S2"
            },
            {
                regex: "(?:Acer_)?P400[);/ ]",
                model: "neoTouch P400"
            },
            {
                regex: "(?:Acer_)?P300[);/ ]",
                model: "neoTouch P300"
            },
            {
                regex: "(?:Acer_)?S200[);/ ]",
                model: "neoTouch S200"
            },
            {
                regex: "(?:Acer_)?E100[);/ ]",
                model: "beTouch E100"
            },
            {
                regex: "Android.*Z1([234])0[);/ ]",
                model: "Liquid Z$1"
            },
            {
                regex: "Android.*Z110[);/ ]",
                model: "Liquid Z110"
            },
            {
                regex: "Android.*Z150[);/ ]",
                model: "Liquid Z5 Duo"
            },
            {
                regex: "Android.*Z160[);/ ]",
                model: "Liquid Z4 Duo"
            },
            {
                regex: "Android.*Z(5\\d{2})[);/ ]",
                model: "Liquid Z$1"
            },
            {
                regex: "Android.*S57[);/ ]",
                model: "Liquid Jade Z"
            },
            {
                regex: "Android.*T02[);/ ]",
                model: "Liquid Z530"
            },
            {
                regex: "Android.*T03[);/ ]",
                model: "Liquid Z630"
            },
            {
                regex: "Android.*T04[);/ ]",
                model: "Liquid Z630S"
            },
            {
                regex: "Android.*T06[);/ ]",
                model: "Liquid Zest"
            },
            {
                regex: "Android.*T07[);/ ]",
                model: "Liquid Zest 4G"
            },
            {
                regex: "Android.*T08[);/ ]",
                model: "Liquid Zest Plus"
            },
            {
                regex: "TM01[);/ ]",
                model: "Liquid M330"
            },
            {
                regex: "M220[);/ ]",
                model: "Liquid M220"
            },
            {
                regex: "AcerTD600",
                model: "TD600"
            },
            {
                regex: "Android.*S55[);/ ]",
                model: "Liquid Jade"
            },
            {
                regex: "(?:Acer )?(Chromebook R1[13])",
                model: "$1",
                device: "desktop"
            },
            {
                regex: "(?:Acer )?(Chromebook 14)",
                model: "$1",
                device: "desktop"
            },
            {
                regex: "(Aspire V5-121)",
                model: "$1",
                device: "desktop"
            },
            {
                regex: "(Predator G9-793)",
                model: "$1",
                device: "desktop"
            },
            {
                regex: "Acer; ?([^;\\(\\)/]+)",
                model: "$1"
            },
            {
                regex: "Acer(?! ?inc)[ _\\-]?([^;\\(\\)/]+)[();/ ]",
                model: "$1"
            },
            {
                regex: "acer[\\-_]([a-z0-9]+)",
                model: "$1"
            },
            {
                regex: "a(101|110|2[10]0|211|50[10]|51[10]|70[10])[);/ ]",
                model: "Iconia Tab A$1",
                device: "tablet"
            }
        ]
    }, Mm = {
        regex: "(i7U|S45E|50[46]1|5059|S50H|I7D|i55[KD]|i4U|S7D|S4Z|i5[KE]|S5E[ _]NXT) Build",
        device: "smartphone",
        models: [
            {
                regex: "i7U",
                model: "I Lite i7U"
            },
            {
                regex: "S5E[ _]NXT",
                model: "S5E NXT"
            },
            {
                regex: "i(55[KD]|5[KE])",
                model: "I$1"
            },
            {
                regex: "i4U",
                model: "I4U"
            },
            {
                regex: "(S45E|50[46]1|5059|S50H|I7D|S7D|S4Z)",
                model: "$1"
            }
        ]
    }, Pm = {
        regex: "Hollogram|HL6246|IntroTr3544|Tr3845",
        device: "smartphone",
        models: [
            {
                regex: "IntroTr3544|Tr3845",
                model: "Intro",
                device: "tablet"
            },
            {
                regex: "HL6246",
                model: "Hollogram HL6246"
            },
            {
                regex: "Hollogram ([^;\\)]+) Build",
                model: "Hollogram $1"
            }
        ]
    }, Tm = {
        regex: "AGM ([^/;\\)]+)(?: Build|\\))",
        device: "smartphone",
        model: "$1"
    }, hm = {
        regex: "AIRNESS-([\\w]+)",
        device: "feature phone",
        model: "$1"
    }, bm = {
        regex: "AW790|M300",
        device: "smartphone",
        models: [
            {
                regex: "AW790",
                model: "AW790"
            },
            {
                regex: "M300",
                model: "M300",
                device: "phablet"
            }
        ]
    }, Lm = {
        regex: "Akai[ _-]|Eco[ _]E2|Glory[ _](?:G[1235]|L[123]|O[125])|TAB-[79]8[03]0Q?|X6 METAL|AKTB-703MZ",
        device: "smartphone",
        models: [
            {
                regex: "TAB-([79]8[03]0Q?)",
                device: "tablet",
                model: "TAB $1"
            },
            {
                regex: "AKTB-703MZ",
                device: "tablet",
                model: "AKTB-703MZ"
            },
            {
                regex: "X6 METAL",
                model: "iLike"
            },
            {
                regex: "Glory[ _](G[1235]|L[123]|O[125])",
                model: "Glory $1"
            },
            {
                regex: "Eco[ _]E2",
                model: "Eco E2"
            },
            {
                regex: "Akai[ _-]([^;/]+) Build",
                model: "$1"
            },
            {
                regex: "Akai[ _-]([^;/]+)[;/)]",
                model: "$1"
            }
        ]
    }, _m = {
        regex: "Alcatel|Alc(?!or )[a-z0-9]+|One[ _]?Touch|idol3|(?:4003[AJ]|4009[ADEFIKMSX]|4013[DEJKMX]|4014[ADEKMX]|4015[ADNTX]|4016[ADX]|4017[ADEFSX]|4018[ADEFMX]|4024[EDX]|4027[ADNX]|4028[AEJS]|4032[ADEX]|4034[ADEFGX]|4035[ADXY]|4045[ADEX]|4047[ADFGNX]|4049[DEGMX]|4060[SW]|4114E|5001[ADJTU](?:_EEA|_RU)?|5009[AD]|5010[DEGSUX]|5011A|5012[DFG]|5015[ADEX]|5016[AXJ]|5017[ABDEOX]|5019D|5022[EDX]|5023[EF]|5024[AD](?:_RU)?|5025[DEG]|5026[AD]|5027B|5032W|5033[AX]|5033D[ _]RU|5034D(_RU)?|5038[ADEX]|5041C|5042[ADEFGWX]|5044[ADGIKOPSTY]|5045[ADFGIJTXY]|5046[ADGIJSTUY]|5047[DIUY]|5049[EGSWZ]|5050[ASXY]|5051[ADEJMTWX]|5052[AD](_RU)?|5054[ADNSTWX]|5056[ADEGIJMNTUWX]|5057M|5058[AIY](_RU)?|5059[ADXYZ](_RU)?|5065[ADNWX]|5070D|5080[ADFQUX]|5085[ABCDGHIJNOQY]|5086[ADY]|5090[AIY]|5095[IKY]|5098[OS]|5099[ADYUI](_RU)?|5116J|5145A|6016[ADEX]|6036[AXY]|6037[BKY]|6039[AHJKY]|6043[AD]|6044D|6045[BFIKOY]|6050[AFY]|6055[ABDHIKPUYZ]|6058[ADX]|6060S|6062W|6070K|7040[ADEFKRT]|7041[DX]|7043[AEKY]|7044[AX]|7045Y|7048[ASWX]|7055A|7070X|8030Y|8050[DEGX]|8063|9001[DIX]|9002X|9003[AX]|9024O|9005X|9026X|9007[ATX]|9008[ADIJNTUX]|9010X|9022X|9203A|A570BL|I213|I216X)[);/ ]|TIMXL",
        device: "smartphone",
        models: [
            {
                regex: "(?:5022[EDX]|5070D)[);/ ]",
                model: "One Touch Pop Star"
            },
            {
                regex: "6044D[);/ ]",
                model: "One Touch Pop Up"
            },
            {
                regex: "(?:4015[ATX]|4016A)[);/ ]",
                model: "One Touch Pop C1"
            },
            {
                regex: "(?:4015[DN]|4016[DX])[);/ ]",
                model: "One Touch Pop C1 Dual SIM"
            },
            {
                regex: "4032[AX][);/ ]",
                model: "One Touch Pop C2"
            },
            {
                regex: "4032[DE][);/ ]",
                model: "One Touch Pop C2 Dual SIM"
            },
            {
                regex: "(?:7040[AFK]|7041X)[);/ ]",
                model: "One Touch Pop C7"
            },
            {
                regex: "(?:7040[DE]|7041D)[);/ ]",
                model: "One Touch Pop C7 Dual SIM"
            },
            {
                regex: "4018[ADEFMX][);/ ]",
                model: "One Touch Pop D1"
            },
            {
                regex: "4035[ADXY][);/ ]",
                model: "One Touch Pop D3"
            },
            {
                regex: "5038[ADEX][);/ ]",
                model: "One Touch Pop D5"
            },
            {
                regex: "4045[AX][);/ ]",
                model: 'One Touch Pop 2 4"'
            },
            {
                regex: "4045[DE][);/ ]",
                model: 'One Touch Pop 2 4" Dual SIM'
            },
            {
                regex: "5042[AFGWX][);/ ]",
                model: 'One Touch Pop 2 4.5"'
            },
            {
                regex: "5042[DE][);/ ]",
                model: 'One Touch Pop 2 4.5" Dual SIM'
            },
            {
                regex: "(?:7043[AY]|7044[AX])[);/ ]",
                model: 'One Touch Pop 2 5"'
            },
            {
                regex: "7043[EK][);/ ]",
                model: 'One Touch Pop 2 5" Dual SIM'
            },
            {
                regex: "50[16]5X[);/ ]",
                model: "One Touch Pop 3"
            },
            {
                regex: "(?:5015[AE]|5016[AJ]|5065[ADWX]|5116J)[);/ ]",
                model: 'One Touch Pop 3 5"'
            },
            {
                regex: "(?:5025[DEG]|5054[ADSTX])[);/ ]",
                model: 'One Touch Pop 3 5.5"'
            },
            {
                regex: "5015D[);/ ]",
                model: "One Touch Pop 3 Dual SIM"
            },
            {
                regex: "5051[AEJMTWX][);/ ]",
                model: "One Touch Pop 4"
            },
            {
                regex: "5051D[);/ ]",
                model: "One Touch Pop 4 Dual SIM"
            },
            {
                regex: "5033D[ _]RU",
                model: "One Touch 5033D"
            },
            {
                regex: "5095[IKY][);/ ]",
                model: "One Touch Pop 4S"
            },
            {
                regex: "5056[ADEGJMTUX][);/ ]",
                model: "One Touch Pop 4+"
            },
            {
                regex: "7070X[);/ ]",
                model: 'One Touch Pop 4 6"'
            },
            {
                regex: "5057M[);/ ]",
                model: "One Touch Pop Mirage"
            },
            {
                regex: "5050[ASXY][);/ ]",
                model: "One Touch Pop S3"
            },
            {
                regex: "7045Y[);/ ]",
                model: "One Touch Pop S7"
            },
            {
                regex: "6037[BKY][);/ ]",
                model: "One Touch Idol 2"
            },
            {
                regex: "5027B[);/ ]",
                model: "One Touch Dawn"
            },
            {
                regex: "5024[AD](?:_RU)?[);/ ]",
                model: "1S"
            },
            {
                regex: "5034D(_RU)?[);/ ]",
                model: "3L"
            },
            {
                regex: "7040[RT][);/ ]",
                model: "One Touch Fierce 2"
            },
            {
                regex: "5056[NW]",
                model: "One Touch Fierce 4"
            },
            {
                regex: "5054[NW]",
                model: "One Touch Fierce XL"
            },
            {
                regex: "6016[AX][);/ ]",
                model: "One Touch Idol 2 mini"
            },
            {
                regex: "6016[DE][);/ ]",
                model: "One Touch Idol 2 mini Dual SIM"
            },
            {
                regex: "6036[AXY][);/ ]",
                model: "One Touch Idol 2 mini S"
            },
            {
                regex: "6050[AFY][);/ ]",
                model: "One Touch Idol 2S"
            },
            {
                regex: "6039[AHJKY][);/ ]|idol3",
                model: "One Touch Idol 3"
            },
            {
                regex: "6045[BFIKOY][);/ ]",
                model: 'One Touch Idol 3 5.5"'
            },
            {
                regex: "6055[ABDHIKPUYZ][);/ ]",
                model: "One Touch Idol 4"
            },
            {
                regex: "6070K[);/ ]",
                model: "One Touch Idol 4S"
            },
            {
                regex: "6058[ADX][);/ ]",
                model: "One Touch Idol 5"
            },
            {
                regex: "6060S[);/ ]",
                model: "One Touch Idol 5S"
            },
            {
                regex: "6043[AD][);/ ]",
                model: "One Touch Idol X+"
            },
            {
                regex: "8030Y[);/ ]",
                model: "One Touch Hero 2"
            },
            {
                regex: "7055A[);/ ]",
                model: "One Touch Hero 2C"
            },
            {
                regex: "5065N[);/ ]",
                model: "TRU"
            },
            {
                regex: "5056I",
                model: "One Touch Optus X Smart"
            },
            {
                regex: "A570BL",
                model: "One Touch Pixi Avion LTE"
            },
            {
                regex: "4024[DEX][);/ ]",
                model: "One Touch Pixi First"
            },
            {
                regex: "4014D[);/ ]",
                model: "One Touch Pixi 2"
            },
            {
                regex: "4009[AFIKMSX][);/ ]",
                model: 'One Touch Pixi 3 3.5"'
            },
            {
                regex: "4009[DE][);/ ]",
                model: 'One Touch Pixi 3 3.5" Dual SIM'
            },
            {
                regex: "(?:4003[AJ]|4013[DEJKMX]|4014[AEKMX]|4114E)[);/ ]",
                model: 'One Touch Pixi 3 4"'
            },
            {
                regex: "(?:4027[ADNX]|4028[AEJS]|5019D)[);/ ]",
                model: 'One Touch Pixi 3 4.5"'
            },
            {
                regex: "5017[ABDEOX][);/ ]",
                model: 'One Touch Pixi 3 4.5" 4G'
            },
            {
                regex: "9002X[);/ ]",
                model: 'One Touch Pixi 3 7"',
                device: "phablet"
            },
            {
                regex: "9007A[);/ ]",
                model: 'One Touch Pixi 3 7"',
                device: "tablet"
            },
            {
                regex: "9007[TX][);/ ]",
                model: 'One Touch Pixi 3 7" 4G',
                device: "tablet"
            },
            {
                regex: "9022X[);/ ]",
                model: 'One Touch Pixi 3 8"',
                device: "phablet"
            },
            {
                regex: "9010X[);/ ]",
                model: 'One Touch Pixi 3 10"',
                device: "tablet"
            },
            {
                regex: "4017[ADEFSX][);/ ]",
                model: 'One Touch Pixi 4 3.5"'
            },
            {
                regex: "4034[ADEFGX][);/ ]",
                model: 'One Touch Pixi 4 4"'
            },
            {
                regex: "4060[SW][);/ ]",
                model: 'One Touch Pixi 4 4.5"'
            },
            {
                regex: "5023[EF][);/ ]",
                model: "One Touch Pixi 4 Plus Power"
            },
            {
                regex: "5010[DEGSUX][);/ ]",
                model: 'One Touch Pixi 4 5" 3G'
            },
            {
                regex: "5012[DFG][);/ ]",
                model: 'One Touch Pixi 4 5.5" 3G'
            },
            {
                regex: "(?:5045[ADFGIJTXY]|5145A)[);/ ]",
                model: 'One Touch Pixi 4 5" 4G'
            },
            {
                regex: "5098O[);/ ]",
                model: "One Touch Pixi Theatre"
            },
            {
                regex: "5046[ADIJTUY][);/ ]",
                model: "A3"
            },
            {
                regex: "(?:5011A|5049[EG])[);/ ]",
                model: "A3 Plus"
            },
            {
                regex: "9008[ADIJNTUX]",
                model: "A3 XL"
            },
            {
                regex: "9203A[);/ ]",
                model: 'A3 7" 3G',
                device: "tablet"
            },
            {
                regex: "9026X[);/ ]",
                model: 'A3 10"',
                device: "tablet"
            },
            {
                regex: "5085[BQ][);/ ]",
                model: "A5"
            },
            {
                regex: "5085[ADHIJY][);/ ]",
                model: "A5 LED"
            },
            {
                regex: "5085N[);/ ]",
                model: "A5 Max LED"
            },
            {
                regex: "5090[AIY][);/ ]",
                model: "A7"
            },
            {
                regex: "5046[GS][);/ ]",
                model: "A30"
            },
            {
                regex: "5049S[);/ ]",
                model: "A30 Plus"
            },
            {
                regex: "5049Z[);/ ]",
                model: "A30 Fierce"
            },
            {
                regex: "5085[GO]",
                model: "A50"
            },
            {
                regex: "5049W[);/ ]",
                model: "Revvl"
            },
            {
                regex: "8050[GX][);/ ]",
                model: 'One Touch Pixi 4 6" 3G'
            },
            {
                regex: "8050[ED][);/ ]",
                model: 'One Touch Pixi 4 6" 3G Dual SIM'
            },
            {
                regex: "(?:5098S|9001[DIX])[);/ ]",
                model: 'One Touch Pixi 4 6" 4G'
            },
            {
                regex: "9003[AX][);/ ]",
                model: 'One Touch Pixi 4 7" 3G',
                device: "tablet"
            },
            {
                regex: "8063[);/ ]",
                model: 'One Touch Pixi 4 7" WiFi',
                device: "tablet"
            },
            {
                regex: "9024O[);/ ]",
                model: "One Touch Pixi 5",
                device: "tablet"
            },
            {
                regex: "I216X[);/ ]",
                model: "One Touch Pixi 7",
                device: "tablet"
            },
            {
                regex: "I213[);/ ]",
                model: "One Touch Pixi 7",
                device: "tablet"
            },
            {
                regex: "9005X[);/ ]",
                model: "One Touch Pixi 8",
                device: "tablet"
            },
            {
                regex: "P320X",
                model: "One Touch POP 8",
                device: "tablet"
            },
            {
                regex: "P310X",
                model: "One Touch POP 7",
                device: "tablet"
            },
            {
                regex: "7048[ASWX][);/ ]",
                model: "One Touch Go Play"
            },
            {
                regex: "(?:Alcatel-)?OT-802[);/ ]",
                model: "Wave"
            },
            {
                regex: "ALCATEL_ONE_TOUCH_768T[);/ ]",
                model: "Island"
            },
            {
                regex: "(?:TRIBE_)?3075A[);/ ]",
                model: "One Touch Tribe"
            },
            {
                regex: "ALCATEL_one_touch_585[);/ ]",
                model: "One Touch 585"
            },
            {
                regex: "ALCATEL_ONE_TOUCH_838[);/ ]",
                model: "One Touch 838"
            },
            {
                regex: "ALCATEL_one_touch_813d[);/ ]",
                model: "One Touch 813D"
            },
            {
                regex: "ALCATEL_one_touch_813[);/ ]",
                model: "One Touch 813"
            },
            {
                regex: "OT871A",
                model: "One Touch 871A"
            },
            {
                regex: "(?:Alcatel[ _])?One[ _]?Touch[ _]((?:T[0-9]+|TAB[^/;]+|EVO[78](?:HD)?)) Build",
                device: "tablet",
                model: "One Touch $1"
            },
            {
                regex: "(?:Alcatel[ _])?One[ _]?Touch([^/;]*) Build",
                model: "One Touch$1"
            },
            {
                regex: "(?:Alcatel[ _])?One[ _]?Touch([^/;\\)]*)\\)",
                model: "One Touch$1"
            },
            {
                regex: "5080[ADFQUX][);/ ]",
                model: "Shine Lite"
            },
            {
                regex: "TIMXL",
                model: "TIM XL"
            },
            {
                regex: "5085C",
                model: "PulseMix"
            },
            {
                regex: "4049[DEGMX][);/ ]",
                model: "U3"
            },
            {
                regex: "5044[ADIKOPTY][);/ ]",
                model: "U5"
            },
            {
                regex: "4047[DFXN][);/ ]",
                model: "U5 3G"
            },
            {
                regex: "5047[DIUY][);/ ]",
                model: "U5 HD"
            },
            {
                regex: "4047G[);/ ]",
                model: "U5 Lite"
            },
            {
                regex: "4047A[);/ ]",
                model: "U5 Plus"
            },
            {
                regex: "4044[CV][);/ ]",
                model: "Quick Flip"
            },
            {
                regex: "4044O[);/ ]",
                model: "Cingular Flip 2"
            },
            {
                regex: "4044[MNT][);/ ]",
                model: "Go Flip"
            },
            {
                regex: "5044[GS][);/ ]",
                model: "U50"
            },
            {
                regex: "5033[AX][);/ ]",
                model: "1"
            },
            {
                regex: "5009[AD][);/ ]",
                model: "1C"
            },
            {
                regex: "5001[ADJTU](?:_EEA|_RU)?[);/ ]",
                model: "1V"
            },
            {
                regex: "5059[ADXYZ](_RU)?[);/ ]",
                model: "1X"
            },
            {
                regex: "5052[AD](_RU)?[);/ ]",
                model: "3"
            },
            {
                regex: "(?:5032W|5099[ADYUI](_RU)?)[);/ ]",
                model: "3V"
            },
            {
                regex: "5026[AD][);/ ]",
                model: "3C"
            },
            {
                regex: "5058[AIY](_RU)?[);/ ]",
                model: "3X"
            },
            {
                regex: "5086[ADY][);/ ]",
                model: "5"
            },
            {
                regex: "6062W[);/ ]",
                model: "7"
            },
            {
                regex: "Alcatel UP",
                model: ""
            },
            {
                regex: "(?:ALCATEL_)?A383G[);/ ]",
                model: "Big Easy Plus"
            },
            {
                regex: "5041C",
                model: "TETRA"
            },
            {
                regex: "ALCATEL([^/;]+) Build",
                model: "$1"
            },
            {
                regex: "ALCATEL[ \\-]?([^/;\\)]+)",
                model: "$1"
            },
            {
                regex: "ALCATEL_([^/;\\)]+)",
                model: "$1"
            },
            {
                regex: "Alc([a-z0-9]+)",
                model: "$1"
            }
        ]
    }, Gm = {
        regex: "Allview|A4You|A5_(?:Easy(?:_TM)?|Ready(?:_TM)?|Quad|Quad_Plus_TM)|A[56789]_Lite|A5Smiley|A6_Duo|A10_Lite_2019|A10_Plus|AX2_Frenzy|AX4Nano|AX5NanoQ|C6_Duo|E[23]_Living|E3_(?:Jump|Sign)|E4_Lite|M9_Connect|P(?:43_Easy|[5689]_Energy|6_Energy_Lite|[68]_Energy_Mini(?:_TM)?|(41|[458])_eMagic(?:_TM)?|[589](?:_)?Life(?:_TM)?|[567]_Lite(?:_TM)?|6_plus|[45678]_Pro|7_Seon|10_Life|10_Max|10_Style|7_Xtreme|6_Qmax|4_Quad)|V(?:[134]_Viper|1_Viper_I|2_Viper_(?:E|I|S|X|X_plus|Xe))|X(?:[1234]_Soul_Xtreme|[12345]_Soul|3_Soul_Lite|[23456]_Soul_Mini(?:_TM)?|4_Soul_Mini_S(?:_TM)?|[234]_Soul_Style(?:_TM)?|2_Soul_Style_Plus|2_Twin)|Viva_(H801|100[13]G|H1001_LTE)",
        device: "smartphone",
        models: [
            {
                regex: "A4You",
                model: "A4 You"
            },
            {
                regex: "AX2_Frenzy",
                model: "AX2 Frenzy",
                device: "tablet"
            },
            {
                regex: "AX4Nano",
                model: "AX4 Nano"
            },
            {
                regex: "AX5NanoQ",
                model: "AX5 Nano Q",
                device: "tablet"
            },
            {
                regex: "C6_Duo",
                model: "C6 Duo"
            },
            {
                regex: "E([23])_Living",
                model: "E$1 Living"
            },
            {
                regex: "E3_Jump",
                model: "E3 Jump"
            },
            {
                regex: "E3_Sign",
                model: "E3 Sign"
            },
            {
                regex: "E4_Lite",
                model: "E4 Lite"
            },
            {
                regex: "M9_Connect",
                model: "M9 Connect"
            },
            {
                regex: "P43_Easy",
                model: "P43 Easy"
            },
            {
                regex: "P(41|[458])_eMagic(?:_TM)?",
                model: "P$1 eMagic"
            },
            {
                regex: "P([567])_Lite(?:_TM)?",
                model: "P$1 Lite"
            },
            {
                regex: "P6_plus",
                model: "P6 Plus"
            },
            {
                regex: "P6_Qmax",
                model: "P6 Qmax"
            },
            {
                regex: "P([45678])_Pro",
                model: "P$1 Pro"
            },
            {
                regex: "P4_Quad",
                model: "P4 Quad"
            },
            {
                regex: "P9_Energy_Lite_2017",
                model: "P9 Energy Lite (2017)"
            },
            {
                regex: "P9_Energy_S",
                model: "P9 Energy S"
            },
            {
                regex: "P([69])_Energy_Lite",
                model: "P$1 Energy Lite"
            },
            {
                regex: "P8_Energy_PRO",
                model: "P8 Energy Pro"
            },
            {
                regex: "P([689])_Energy_mini(?:_TM)?",
                model: "P$1 Energy Mini"
            },
            {
                regex: "P([5689])_Energy",
                model: "P$1 Energy"
            },
            {
                regex: "P7_Seon",
                model: "P7 Seon"
            },
            {
                regex: "P7_Xtreme",
                model: "P7 Xtreme"
            },
            {
                regex: "P([589])(?:_)?Life(?:_TM)?",
                model: "P$1 Life"
            },
            {
                regex: "P10_Life",
                model: "P10 Life"
            },
            {
                regex: "P10_Max",
                model: "P10 Max"
            },
            {
                regex: "P10_Style",
                model: "P10 Style"
            },
            {
                regex: "V([12])_Viper_I4G(?:_TM)?",
                model: "V$1 Viper I 4G"
            },
            {
                regex: "V1_Viper_I",
                model: "V1 Viper I"
            },
            {
                regex: "V([134])_Viper",
                model: "V$1 Viper"
            },
            {
                regex: "V2_Viper_X_plus",
                model: "V2 Viper X Plus"
            },
            {
                regex: "V2_Viper_(E|I|S|X(?:e)?)",
                model: "V2 Viper $1"
            },
            {
                regex: "X([124])_Soul_Xtreme",
                model: "X$1 Soul Xtreme"
            },
            {
                regex: "X4_Soul_Infinity_(L|N|S|Z)",
                model: "X4 Soul Infinity $1"
            },
            {
                regex: "X([34])_Soul_Lite",
                model: "X$1 Soul Lite"
            },
            {
                regex: "X4_Soul_Mini_S(?:_TM)?",
                model: "X4 Soul Mini S"
            },
            {
                regex: "X([23456])_Soul_Mini(?:_TM)?",
                model: "X$1 Soul Mini"
            },
            {
                regex: "X3_Soul_PLUS",
                model: "X3 Soul Plus"
            },
            {
                regex: "X([35])_Soul_Pro",
                model: "X$1 Soul Pro"
            },
            {
                regex: "X2_Soul_Style_Plus",
                model: "X2 Soul Style Plus"
            },
            {
                regex: "X([234])_Soul_Style(?:_TM)?",
                model: "X$1 Soul Style"
            },
            {
                regex: "X([12345])_Soul",
                model: "X$1 Soul"
            },
            {
                regex: "X2_Twin",
                model: "X2 Twin"
            },
            {
                regex: "A5_Easy(?:_TM)?",
                model: "A5 Easy"
            },
            {
                regex: "A([56789])_Lite",
                model: "A$1 Lite"
            },
            {
                regex: "A5_Ready(?:_TM)?",
                model: "A5 Ready"
            },
            {
                regex: "A5Smiley",
                model: "A5 Smiley"
            },
            {
                regex: "A5_Quad_Plus_TM",
                model: "A5 Quad Plus"
            },
            {
                regex: "A5_Quad",
                model: "A5 Quad"
            },
            {
                regex: "A6_Duo",
                model: "A6 Duo"
            },
            {
                regex: "A10_Lite_2019",
                model: "A10 Lite (2019)"
            },
            {
                regex: "A10_Plus",
                model: "A10 Plus"
            },
            {
                regex: "Impera S",
                model: "Impera S"
            },
            {
                regex: "ALLVIEW P4i",
                model: "AllDro P4"
            },
            {
                regex: "Allview_P2",
                model: "AllDro"
            },
            {
                regex: "AllviewCityPlus",
                device: "tablet",
                model: "City Plus"
            },
            {
                regex: "AllviewCity",
                device: "tablet",
                model: "City"
            },
            {
                regex: "AllviewAX2Frenzy",
                device: "tablet",
                model: "AX2 Frenzy"
            },
            {
                regex: "Allview2SpeedDuo",
                device: "tablet",
                model: "Alldro 2 Speed Duo"
            },
            {
                regex: "Allview3SpeedQuad",
                device: "tablet",
                model: "Alldro 3 Speed Quad"
            },
            {
                regex: "Viva_(H801|100[13]G|H1001_LTE)",
                device: "tablet",
                model: "Viva $1"
            },
            {
                regex: "ALLVIEW ?SPEEDI",
                device: "tablet",
                model: "Speed I"
            },
            {
                regex: "ALLVIEW ?SPEED",
                device: "tablet",
                model: "Speed"
            },
            {
                regex: "ALLVIEWSPEED",
                device: "tablet",
                model: "Speed"
            },
            {
                regex: "AX4Nano",
                device: "tablet",
                model: "AX4 Nano"
            },
            {
                regex: "ALLVIEW_TX1_Quasar",
                device: "tablet",
                model: "TX1 Quasar"
            },
            {
                regex: "Allview[ _-]([^;/]+) Build",
                model: "$1"
            },
            {
                regex: "Allview[ _-]([^;/]+)[;/)]",
                model: "$1"
            }
        ]
    }, Bm = {
        regex: "QUAD-CORE A64 p3",
        device: "tablet",
        model: "A64 QUAD-CORE p3"
    }, Nm = {
        regex: "AL-555|GI-626",
        device: "smartphone",
        models: [
            {
                regex: "AL-555",
                model: "AL-555"
            },
            {
                regex: "GI-626",
                device: "phablet",
                model: "GI-626"
            }
        ]
    }, Cm = {
        regex: "AM(350|355|40[257]|41[05]|450|50[89]|52[037]|51[58]|53[05])",
        device: "smartphone",
        models: [
            {
                regex: "AM350",
                model: "Jack Pro"
            },
            {
                regex: "AM(355|407)",
                model: "Tigo"
            },
            {
                regex: "AM402",
                model: "Pronto"
            },
            {
                regex: "AM410",
                model: "Unico"
            },
            {
                regex: "AM450",
                model: "Swift"
            },
            {
                regex: "AM508",
                model: "Fuego"
            },
            {
                regex: "AM509",
                model: "Uno"
            },
            {
                regex: "AM515",
                model: "D1"
            },
            {
                regex: "AM518",
                model: "C1"
            },
            {
                regex: "AM520",
                model: "Pro"
            },
            {
                regex: "AM523",
                model: "Plus"
            },
            {
                regex: "AM527",
                model: "Geo"
            },
            {
                regex: "AM530",
                model: "A1"
            },
            {
                regex: "AM535",
                model: "P1"
            },
            {
                regex: "AM([0-9]{3})",
                model: "AM$1"
            }
        ]
    }, Em = {
        regex: "Amoi|A862W",
        device: "smartphone",
        models: [
            {
                regex: "A862W",
                model: "A862W"
            },
            {
                regex: "Amoi[\\- /]([a-z0-9]+)",
                model: "$1"
            },
            {
                regex: "Amoisonic-([a-z0-9]+)",
                model: "$1"
            }
        ]
    }, Om = {
        regex: "Numy|novo[0-9]|Novo 10 Hero|AX10PRO",
        device: "tablet",
        models: [
            {
                regex: "Numy 3G AX1",
                model: "Novo 7 Numy AX1 3G"
            },
            {
                regex: "AX10PRO",
                model: "Numy AX10 Pro"
            },
            {
                regex: "Numy_3G_AX3",
                model: "Numy AX3 Sword"
            },
            {
                regex: "Numy3GTalos",
                model: "Numy 3G Talos"
            },
            {
                regex: "Numy_3G_BW1",
                model: "Numy 3G Talos 2"
            },
            {
                regex: "(Novo 10 Hero QuadCore)",
                model: "$1"
            },
            {
                regex: "Numy[ _]([^;/]+) Build",
                model: "Numy $1"
            },
            {
                regex: "Novo([0-9]+)[ \\-]([^;/]+) Build",
                model: "Novo $1 $2"
            }
        ]
    }, wm = {
        regex: "(?:YL-)?Archos",
        device: "smartphone",
        models: [
            {
                regex: "Archos (Oxygen 63)[);/ ]",
                model: "$1"
            },
            {
                regex: "Archos ?5[);/ ]",
                device: "tablet",
                model: "5"
            },
            {
                regex: "(?:YL-)?Archos ([^/;]*(?:PAD)[^/;]*) Build",
                device: "tablet",
                model: "$1"
            },
            {
                regex: "Archos ((?:[789]|10)[0-9]?[a-z]* ?(?:G9|G10|Helium|Titanium|Cobalt|Platinum|Xenon|Carbon|Neon|XS|IT)[^/;]*) Build",
                device: "tablet",
                model: "$1"
            },
            {
                regex: "(?:YL-)?Archos ([a-z0-9 ]+) Build",
                model: "$1"
            },
            {
                regex: "(?:YL-)?Archos ([a-z0-9]+)",
                model: "$1"
            }
        ]
    }, fm = {
        regex: "Axxion ATAB-[0-9]+[);/ ]",
        device: "tablet",
        models: [
            {
                regex: "Axxion ATAB-([0-9]+)[);/ ]",
                model: "ATAB-$1"
            }
        ]
    }, ym = {
        regex: "MEU ([a-z0-9]+) Build",
        device: "smartphone",
        model: "$1"
    }, Xm = {
        regex: "arnova|ARCHM901|AN7CG2|AN7G2(DTE|I)?|AN7[BCDFH]?G3|A80KSC|AN8G2|AN8[BC]?G3|AN9G2I?|AN9G3|A101[BC]|AN10G2|AN10BG2(DT|I)?|AN10BG3(DT)?|AN10[CD]G3",
        device: "tablet",
        models: [
            {
                regex: "ARCHM901",
                model: "M901"
            },
            {
                regex: "AN7CG2",
                model: "7c G2"
            },
            {
                regex: "AN7G2I|AN7G2|AN7G2DTE",
                model: "7 G2"
            },
            {
                regex: "AN7G3",
                model: "7 G3"
            },
            {
                regex: "AN7BG3",
                model: "7b G3"
            },
            {
                regex: "AN7CG3",
                model: "7c G3"
            },
            {
                regex: "AN7DG3-CP",
                model: "Childpad"
            },
            {
                regex: "AN7DG3",
                model: "7d G3"
            },
            {
                regex: "AN7FG3",
                model: "7f G3"
            },
            {
                regex: "AN7HG3",
                model: "7h G3"
            },
            {
                regex: "A80KSC",
                model: "8"
            },
            {
                regex: "AN8G2",
                model: "8 G2"
            },
            {
                regex: "AN8G3",
                model: "8 G3"
            },
            {
                regex: "AN8BG3",
                model: "8b G3"
            },
            {
                regex: "AN8CG3",
                model: "8c G3"
            },
            {
                regex: "AN9G2I",
                model: "9i G2"
            },
            {
                regex: "AN9G2",
                model: "9 G2"
            },
            {
                regex: "AN9G3",
                model: "9 G3"
            },
            {
                regex: "A101B2|A101C|AN10G2",
                model: "10 G2"
            },
            {
                regex: "A101B",
                model: "10"
            },
            {
                regex: "AN10BG2|AN10BG2DT|AN10BG2I",
                model: "10b G2"
            },
            {
                regex: "AN10BG3|AN10BG3DT|AN10BG3-LZ",
                model: "10b G3"
            },
            {
                regex: "AN10CG3",
                model: "10c G3"
            },
            {
                regex: "AN10DG3",
                model: "10d G3"
            },
            {
                regex: "ARNOVA 90G3",
                model: "90 G3"
            },
            {
                regex: "ARNOVA 90 G4",
                model: "90 G4"
            },
            {
                regex: "ARNOVA 97G4",
                model: "97 G4"
            },
            {
                regex: "ARNOVA 101 G4",
                model: "101 G4"
            },
            {
                regex: "Arnova ([^/;]*) Build",
                model: "$1"
            }
        ]
    }, $m = {
        regex: "ARRIS",
        device: "tv",
        models: [
            {
                regex: "ARRIS[,;] ([^),;/]+)",
                model: "$1"
            }
        ]
    }, Im = {
        regex: "ASK[ _]",
        device: "smartphone",
        models: [
            {
                regex: "ASK[ _]791SP[ _]3G",
                model: "791SP 3G",
                device: "tablet"
            },
            {
                regex: "ASK[_ ]([^/;]*) Build",
                model: "$1"
            }
        ]
    }, Fm = {
        regex: "UL40 Build",
        device: "smartphone",
        model: "UL40"
    }, Dm = {
        regex: "(AS[-_](?:502|543[1-6]|44[12]1|541[12]|54[23]1|6431|401L)|AP-(?:109|115G|721N|753G|7[25]7G|10[68]|107G|110N|941))[;/)_ ]",
        device: "smartphone",
        models: [
            {
                regex: "AS[-_]401L ",
                model: "Asper"
            },
            {
                regex: "AS-5432 ",
                model: "Agio"
            },
            {
                regex: "AS-5433 Secret",
                model: "Secret"
            },
            {
                regex: "AS-5433 ",
                model: "Max Secret"
            },
            {
                regex: "AS-5421",
                model: "Surf"
            },
            {
                regex: "AS-44[12]1",
                model: "Unami"
            },
            {
                regex: "AS-5431",
                model: "Prima"
            },
            {
                regex: "AS-502",
                model: "Shot"
            },
            {
                regex: "AS-5435",
                model: "Shine"
            },
            {
                regex: "AS-5436[ _]",
                model: "Grid"
            },
            {
                regex: "AS-6431",
                model: "Rider"
            },
            {
                regex: "AS-5411[_ ]",
                model: "Max Ritm"
            },
            {
                regex: "AS-5412 Max",
                model: "AS-5412 Max"
            },
            {
                regex: "AP-721N",
                model: "AP-721N Force",
                device: "tablet"
            },
            {
                regex: "AP-941",
                model: "AP-941",
                device: "tablet"
            },
            {
                regex: "AP-108",
                model: "Cetus",
                device: "tablet"
            },
            {
                regex: "AP-106",
                model: "AP-106 Force",
                device: "tablet"
            },
            {
                regex: "(AP-(?:109|115G|7[25]7G|753G|107G|110N))[/;) ]",
                device: "tablet",
                model: "$1"
            }
        ]
    }, Rm = {
        regex: "(ARK[_ -])?Benefit[_ -]([^/;]*)(?: Build|\\))|EDGE A5HD|ICON (R40\\+|R45)|Impulse[ _](P[12])|Wizard_1[/;) ]",
        device: "smartphone",
        models: [
            {
                regex: "(?:ARK[_ -])?Benefit[_ -]([^/;]*)(?: Build|\\))",
                model: "Benefit $1"
            },
            {
                regex: "Impulse[ _]P1\\+",
                model: "Impulse P1 Plus"
            },
            {
                regex: "Impulse[ _](P[12])",
                model: "Impulse $1"
            },
            {
                regex: "EDGE (A5HD)",
                model: "Edge $1"
            },
            {
                regex: "ICON (R40\\+|R45)",
                model: "Icon $1"
            },
            {
                regex: "Wizard_1",
                model: "Wizard 1"
            }
        ]
    }, Vm = {
        regex: "Asus|Transformer|TF300T|Slider SL101|PadFone|ME302(?:C|KL)|ME301T|ME371MG|ME17(?:1|2V|3X)|(?:K0[01][0-9a-z]|P(?:00[18ACIL]|01[MTVWYZ]|01MA|01T_1|02[13478])(?: Build|\\))|X015D|X018D|X003|X00[7ABT]D|Z00D|Z00[MTY]D|Z01[7FGHKMR]D)[);/ ]|G55[23]KL|ZB(631|602|633|55[135]|50[01])KL|ZC(55[134]|520|600)KL|ZA550KL|ZE(520|620|55[2345])KL|ZD55[23]KL|ZS(6[236]0|55[10])KL|ZB(500KG|601KL)|MeMo Pad FHD 10 LTE",
        device: "smartphone",
        models: [
            {
                regex: "ME171[);/ ]",
                model: "Eee Pad MeMO 171",
                device: "tablet"
            },
            {
                regex: "ME172V",
                model: "MeMO Pad",
                device: "tablet"
            },
            {
                regex: "ME302C[);/ ]",
                model: "MeMO Pad FHD 10",
                device: "tablet"
            },
            {
                regex: "(ME302KL|MeMo Pad FHD 10 LTE)[);/ ]",
                model: "MeMO Pad FHD 10 LTE",
                device: "tablet"
            },
            {
                regex: "ME301T[);/ ]",
                model: "MeMO Pad Smart 10",
                device: "tablet"
            },
            {
                regex: "Z101[);/ ]",
                model: "Z101",
                device: "tablet"
            },
            {
                regex: "X Pad 10 LTE[);/ ]",
                model: "X Pad 10 LTE",
                device: "tablet"
            },
            {
                regex: "(?:K01[3A]|K007|K00R)[);/ ]|MeMO Pad 7",
                model: "MeMO Pad 7",
                device: "tablet"
            },
            {
                regex: "K01E[);/ ]",
                model: "MeMO Pad 10 ME103K",
                device: "tablet"
            },
            {
                regex: "K00U|ME173X[);/ ]",
                model: "MeMO Pad HD 7",
                device: "tablet"
            },
            {
                regex: "(?:K011|K00L)[);/ ]",
                model: "MeMO Pad 8",
                device: "tablet"
            },
            {
                regex: "K014[);/ ]",
                model: "MeMO Pad 8.9",
                device: "tablet"
            },
            {
                regex: "K00S[);/ ]",
                model: "MeMO Pad HD 7 Dual SIM",
                device: "tablet"
            },
            {
                regex: "K00F[);/ ]",
                model: "MeMO Pad 10",
                device: "tablet"
            },
            {
                regex: "K00C[);/ ]",
                model: "Transformer Pad TF701T",
                device: "tablet"
            },
            {
                regex: "K010[);/ ]",
                model: "Transformer Pad TF103C",
                device: "tablet"
            },
            {
                regex: "K018[);/ ]",
                model: "Transformer Pad TF103CG",
                device: "tablet"
            },
            {
                regex: "TF300T[);/ ]",
                model: "Transformer Pad TF300T",
                device: "tablet"
            },
            {
                regex: "K01B[);/ ]",
                model: "Transformer Pad TF303K",
                device: "tablet"
            },
            {
                regex: "Slider SL101",
                model: "Eee Pad Slider SL101",
                device: "tablet"
            },
            {
                regex: "P01[YZ]",
                model: "ZenPad C 7.0",
                device: "tablet"
            },
            {
                regex: "P008 Build",
                model: "ZenPad Z8",
                device: "tablet"
            },
            {
                regex: "P001",
                model: "ZenPad Z10",
                device: "tablet"
            },
            {
                regex: "(?:ASUS_)?P00J",
                model: "ZenPad Z8s",
                device: "tablet"
            },
            {
                regex: "P01[VW]",
                model: "ZenPad 7.0",
                device: "tablet"
            },
            {
                regex: "P024 Build|P00A",
                model: "ZenPad 8.0",
                device: "tablet"
            },
            {
                regex: "P01MA(?: Build|\\))|P01M(?: Build|\\))",
                model: "ZenPad S 8.0",
                device: "tablet"
            },
            {
                regex: "P027",
                model: "ZenPad 3S 10",
                device: "tablet"
            },
            {
                regex: "(?:ASUS_)?P00I",
                model: "ZenPad 3S 10 LTE",
                device: "tablet"
            },
            {
                regex: "(?:ASUS_)?P00C|P02[138]|P00L|P01T_1",
                model: "ZenPad 10",
                device: "tablet"
            },
            {
                regex: "ME371MG[);/ ]",
                model: "Fonepad",
                device: "phablet"
            },
            {
                regex: "K00G[);/ ]",
                model: "Fonepad Note 6",
                device: "phablet"
            },
            {
                regex: "(?:K012|K00E)[);/ ]",
                model: "Fonepad 7",
                device: "phablet"
            },
            {
                regex: "K00Z[);/ ]",
                model: "Fonepad 7 Dual SIM",
                device: "phablet"
            },
            {
                regex: "K016[);/ ]",
                model: "Fonepad 8",
                device: "phablet"
            },
            {
                regex: "(?:ASUS_)?T00N",
                model: "PadFone S"
            },
            {
                regex: "(?:ASUS_)?A002(A)?",
                model: "ZenFone AR"
            },
            {
                regex: "(?:ASUS_)?A006",
                model: "ZenFone V"
            },
            {
                regex: "(?:ASUS_)?A009",
                model: "ZenFone V Live"
            },
            {
                regex: "(?:ASUS_)?Z007",
                model: "ZenFone C"
            },
            {
                regex: "(?:ASUS_)?(X00PD|ZB555KL)",
                model: "ZenFone Max M1"
            },
            {
                regex: "(?:ASUS_)?(ZB601KL)",
                model: "ZenFone Max Pro M1"
            },
            {
                regex: "(?:ASUS_)?(X01([AB]D)|ZB633KL)[);/ ]",
                model: "ZenFone Max M2"
            },
            {
                regex: "(?:ASUS_)?(?:Z00[AD]|Z008D|Z008|Z00AD[AB]?)",
                model: "ZenFone 2"
            },
            {
                regex: "(?:ASUS_)?A007|ZA550KL|ZB553KL|ZB501KL",
                model: "ZenFone Live"
            },
            {
                regex: "(?:ASUS_)?(X00RD|G552KL)",
                model: "ZenFone Live L1"
            },
            {
                regex: "G553KL",
                model: "ZenFone Lite L1"
            },
            {
                regex: "(?:ASUS_)Z00YD",
                model: "Live"
            },
            {
                regex: "(?:ASUS_)?(?:Z00[ERLMT]D|Z011D)",
                model: "ZenFone 2 Laser"
            },
            {
                regex: "(?:ASUS_)?(?:T00[IQ1]|Z01KD)",
                model: "ZenFone 4"
            },
            {
                regex: "(?:ASUS_)?(?:T00[JF]|X00QD|X00QSA|ZE620KL)",
                model: "ZenFone 5"
            },
            {
                regex: "(?:ASUS_)?T00P",
                model: "ZenFone 5 LTE"
            },
            {
                regex: "(?:ASUS_)?(?:T00K|X017DA|X017D|ZC600KL)",
                model: "ZenFone 5 Lite"
            },
            {
                regex: "(?:ASUS_)?(?:Z01RD|ZS620KL)",
                model: "ZenFone 5Z"
            },
            {
                regex: "(?:ASUS_)?(?:T00G|Z002|ZS630KL|I01WD[X]?)",
                model: "ZenFone 6"
            },
            {
                regex: "(?:ASUS_)?Z010D",
                model: "ZenFone Max"
            },
            {
                regex: "(?:ASUS_)?X018D",
                model: "ZenFone Max Plus M1"
            },
            {
                regex: "(?:ASUS_)?X00TD",
                model: "ZenFone Max Pro M1"
            },
            {
                regex: "(?:ASUS_)?X01BDA|ZB631KL",
                model: "ZenFone Max Pro M2"
            },
            {
                regex: "(?:ASUS_)?X014D",
                model: "ZenFone Go Plus"
            },
            {
                regex: "(?:ASUS_)?(L001|X00[7AB]D|X009[DB][DA]|Z00[SV]D|ZB500K[LG]|ZB551KL)",
                model: "ZenFone Go"
            },
            {
                regex: "(?:ASUS_)?X013D",
                model: "ZenFone Go Life"
            },
            {
                regex: "(?:ASUS_)?(X003)",
                model: "ZenFone Pegasus"
            },
            {
                regex: "(?:ASUS_)?X005",
                model: "ZenFone Pegasus 5000"
            },
            {
                regex: "(?:ASUS_)?X550",
                model: "ZenFone Pegasus 2 Plus"
            },
            {
                regex: "(?:ASUS_)?(X00GD)",
                model: "ZenFone Pegasus 3S Max"
            },
            {
                regex: "(?:ASUS_)?(X008)",
                model: "ZenFone 3 Pegasus"
            },
            {
                regex: "(?:ASUS_)?(ZE553KL|Z01HD)",
                model: "ZenFone 3 Zoom"
            },
            {
                regex: "(?:ASUS_)?ZS550KL",
                model: "ZenFone 3 Deluxe"
            },
            {
                regex: "(?:ASUS_)?Z00UD",
                model: "ZenFone Selfie"
            },
            {
                regex: "(?:ASUS_)?(Z016[DS]|Z01FD)",
                model: "ZenFone 3 Deluxe"
            },
            {
                regex: "(?:ASUS_)?(Z017DA|ZE520KL|ZE552KL|Z017D|Z012(D|S))",
                model: "ZenFone 3"
            },
            {
                regex: "(?:ASUS_)?Z01B[DS]|ZC551KL",
                model: "ZenFone 3 Laser"
            },
            {
                regex: "(?:ASUS_)?X00DD|ZC553KL",
                model: "ZenFone 3 Max"
            },
            {
                regex: "(?:ASUS_)?A001",
                model: "ZenFone 3 Ultra"
            },
            {
                regex: "(?:ASUS_)?(X00LDA|Z01MD)",
                model: "ZenFone 4 Selfie"
            },
            {
                regex: "(?:ASUS_)?(?:X00LD|Z01KS|Z01KDA|ZE554KL)",
                model: "ZenFone 4"
            },
            {
                regex: "(?:ASUS_)?X00[HIK]D|ZC554KL|ZC520KL",
                model: "ZenFone 4 Max"
            },
            {
                regex: "(?:ASUS_)?X015D",
                model: "ZenFone 4 Max Plus"
            },
            {
                regex: "ZD552KL",
                model: "ZenFone 4 Selfie Pro"
            },
            {
                regex: "ZD553KL",
                model: "ZenFone 4 Selfie"
            },
            {
                regex: "(?:ASUS_)?(:?Z01GD|ZS551KL)",
                model: "ZenFone 4 Pro"
            },
            {
                regex: "(?:ASUS_)?ZB602KL",
                model: "ZenFone Max Pro"
            },
            {
                regex: "(?:ASUS_)?Z00XS",
                model: "ZenFone Zoom"
            },
            {
                regex: "(?:ASUS_)?Z01QD",
                model: "ROG Phone"
            },
            {
                regex: "(?:ASUS_)?(I001D[ABCE]?|ZS660KL)",
                model: "ROG Phone 2"
            },
            {
                regex: "Asus(?:-|;)?([a-z0-9]+)",
                model: "$1"
            },
            {
                regex: "(PadFone(?: [^;/]+)?) Build",
                model: "$1"
            },
            {
                regex: "(PadFone(?: [a-z0-9]+)?)",
                model: "$1"
            },
            {
                regex: "(?:Asus|Transformer) ((?:Pad |Prime )?TF[0-9a-z]+)",
                device: "tablet",
                model: "Transformer $1"
            },
            {
                regex: "Chromebook Flip C100PA",
                device: "tablet",
                model: "Chromebook Flip C100PA"
            }
        ]
    }, Um = {
        regex: "Audiovox|CDM|UTS(?:TARCOM)?\\-|audio(?!book)[a-z0-9\\-]+",
        device: "smartphone",
        models: [
            {
                regex: "Audiovox[_\\-]([a-z0-9\\-]+)",
                model: "$1"
            },
            {
                regex: "CDM(?:-)?([a-z0-9]+)",
                model: "CDM-$1"
            },
            {
                regex: "UTS(?:TARCOM)?-([a-z0-9\\-]+)",
                model: "CDM-$1"
            },
            {
                regex: "audio([a-z0-9\\-]+)",
                model: "CDM-$1"
            }
        ]
    }, Hm = {
        regex: "Excer[ _]",
        device: "tablet",
        models: [
            {
                regex: "Excer[ _]G5.3",
                model: "Excer G5.3"
            },
            {
                regex: "Excer[ _]G5",
                model: "Excer G5"
            },
            {
                regex: "Excer[ _]10[ _]PRO",
                model: "Excer 10 Pro"
            }
        ]
    }, km = {
        regex: "Avvio[ _]?([a-z0-9\\-]+)",
        device: "smartphone",
        models: [
            {
                regex: "Avvio[ _]PAD",
                model: "PAD",
                device: "tablet"
            },
            {
                regex: "Avvio[ _]?([a-z0-9\\-]+)",
                model: "$1"
            }
        ]
    }, Wm = {
        regex: "(?!Positivo )BGH ([^/;\\)]+)(?: Build|\\))",
        device: "smartphone",
        models: [
            {
                regex: "Y([17]00|2[01]0|1010)",
                device: "tablet",
                model: "Y$1"
            },
            {
                regex: "BGH (\\+Simple|Mini)",
                device: "tablet",
                model: "$1"
            },
            {
                regex: "Y710 KIDS",
                device: "tablet",
                model: "Y710 Kids"
            },
            {
                regex: "JOY X2",
                model: "Joy X2"
            },
            {
                regex: "BGH ([^/;\\)]+)(?: Build|\\))",
                model: "$1"
            }
        ]
    }, Km = {
        regex: "Bitel[ _-]([^/;]+) Build|B(840[5789]|841[0456]|850[2346]|860[146]|9401|950[12345])",
        device: "smartphone",
        models: [
            {
                regex: "(B(840[5789]|841[0456]|850[2346]|860[146]|9401|950[12345]))",
                model: "$1"
            },
            {
                regex: "Bitel[ _-]([^/;]+) Build",
                model: "$1"
            }
        ]
    }, Ym = {
        regex: "BLU |(?:blu|Dash)[ _]([^/;]+) Build|Studio (5.5|View XL|Mega|C 8\\+8|C HD|C|G|Selfie LTE|Touch|M HD|M5 Plus|J[1258]|X|X8 HD)|Advance (4.0 ?[LM]|5.0(?: HD)?|A4)|ENERGY (DIAMOND|XL)|LIFE XL|Dash XL|PURE XL|Life One X2|GRAND 5.5 HD|R1 (HD|PLUS)|Tank Xtreme 5.0|Tank Xtreme Pro",
        device: "smartphone",
        models: [
            {
                regex: "Advance (4.0 ?[LM]|4.0|5.0(?: HD)?|A4)",
                model: "Advance $1"
            },
            {
                regex: "Studio (5.0 C|5.5|View XL|Mega|C 8\\+8|C HD|C|G|Touch|M HD|M5 Plus|J[1258]|X|X8 HD)",
                model: "Studio $1"
            },
            {
                regex: "STUDIO SELFIE LTE",
                model: "Studio Selfie LTE"
            },
            {
                regex: "STUDIO ONE",
                model: "Studio One"
            },
            {
                regex: "STUDIO SELFIE (2|LTE)",
                model: "Studio Selfie $1"
            },
            {
                regex: "ENERGY DIAMOND",
                model: "Energy Diamond"
            },
            {
                regex: "ENERGY XL",
                model: "Energy XL"
            },
            {
                regex: "ENERGY X PLUS 2",
                model: "Energy X Plus 2"
            },
            {
                regex: "ENERGY X PLUS",
                model: "Energy X Plus"
            },
            {
                regex: "LIFE XL",
                model: "Life XL"
            },
            {
                regex: "Dash XL",
                model: "Dash XL"
            },
            {
                regex: "PURE XL",
                model: "Pure XL"
            },
            {
                regex: "Life One X2",
                model: "Life One X2"
            },
            {
                regex: "LIFE ONE",
                model: "Life One"
            },
            {
                regex: "NEO X PLUS",
                model: "Neo X Plus"
            },
            {
                regex: "NEO (XL|X)",
                model: "Neo $1"
            },
            {
                regex: "GRAND 5.5 HD",
                model: "Grand 5.5 HD"
            },
            {
                regex: "Grand X LTE",
                model: "Grand X LTE"
            },
            {
                regex: "R1 HD",
                model: "R1 HD"
            },
            {
                regex: "R1 PLUS",
                model: "R1 Plus"
            },
            {
                regex: "Tank Xtreme 5.0",
                model: "Tank Xtreme 5.0"
            },
            {
                regex: "Tank Xtreme Pro",
                model: "Tank Xtreme Pro"
            },
            {
                regex: "VIVO AIR LTE",
                model: "Vivo Air LTE"
            },
            {
                regex: "DASH[ _]([^/;]+) Build",
                model: "Dash $1"
            },
            {
                regex: "DASH (5.0|L|M|X2|X)",
                model: "Dash $1"
            },
            {
                regex: "blu[ _]([^/;]+) Build",
                model: "$1"
            }
        ]
    }, Qm = {
        regex: "BLUEGOOD",
        device: "smartphone",
        models: [
            {
                regex: "V6",
                model: "V6"
            }
        ]
    }, Zm = {
        regex: "Blackview|(BV([2456789]000|(5[589]|9[1568])00|6800)(?:[ _](?:PRO))?|(P10000(?:[ _](?:PRO))?)|omega[ _]pro|Alife[ _][PS]1|Heatwave|DM550|BV9700Pro|(?<!Lenovo[_ ])A60(?:Pro)?\\))",
        device: "smartphone",
        models: [
            {
                regex: "A60Pro\\)",
                model: "A60 Pro"
            },
            {
                regex: "A60\\)",
                model: "A60"
            },
            {
                regex: "(BV6000S)",
                model: "$1"
            },
            {
                regex: "(BV9700)Pro",
                model: "$1 Pro"
            },
            {
                regex: "Blackview (A8)",
                model: "$1"
            },
            {
                regex: "BV9000Pro-F",
                model: "BV9000 Pro F"
            },
            {
                regex: "(BV([48]000|9[56]00|6800))Pro",
                model: "$1 Pro"
            },
            {
                regex: "(BV([2456789]000|(5[589]|9[1568])00)(?:[ _](?:PRO))?)",
                model: "$1"
            },
            {
                regex: "(P10000(?:[ _](?:PRO))?)",
                model: "$1"
            },
            {
                regex: "omega[ _]pro",
                model: "Omega Pro"
            },
            {
                regex: "(Alife[ _][PS]1|DM550|Heatwave)",
                model: "$1"
            }
        ]
    }, zm = {
        regex: "Bluboo|Xfire|Maya Build",
        device: "smartphone",
        models: [
            {
                regex: "Maya Build",
                model: "Maya"
            },
            {
                regex: "Xfire2",
                model: "Xfire 2"
            },
            {
                regex: "Xfire",
                model: "Xfire"
            },
            {
                regex: "Bluboo[ _-]?([^;/)]+) Build",
                model: "$1"
            },
            {
                regex: "Bluboo[ _-]?([^;/)]+)",
                model: "$1"
            }
        ]
    }, Jm = {
        regex: "BO-(FRSP4|LFSPBS5|LFSP4|LFSPSL4|LFSPBS5|LFSPSL6QCI)",
        device: "smartphone",
        models: [
            {
                regex: "BO-LFSP4",
                model: "LifeStyle 4DC"
            },
            {
                regex: "BO-LFSPSL4",
                model: "LifeStyle 4SL"
            },
            {
                regex: "BO-LFSPBS5",
                model: "LifeStyle 5BS"
            },
            {
                regex: "BO-LFSPSL6QCI",
                model: "LifeStyle 6QC"
            },
            {
                regex: "BO-(FRSP4)",
                model: "$1"
            }
        ]
    }, qm = {
        regex: "(?:sprd-)?(BOWAY)",
        device: "smartphone",
        models: [
            {
                regex: "BOWAY[ _-]([^/;]+)[ _]Build",
                model: "$1"
            },
            {
                regex: "([^/;]+) Build/BOWAY",
                model: "$1"
            },
            {
                regex: ".*BOWAY[ _-]([^/;]+)/",
                model: "$1"
            }
        ]
    }, jm = {
        regex: "Brondi[ _]|(?:CENTURION|GLADIATOR| GLORY|LUXURY|SENSUELLE|VICTORY)(?:[ _-]?[2-6])?[);/ ]|Surfing Tab",
        device: "smartphone",
        models: [
            {
                regex: "Brondi[ _](620 SZ|730_4G_HD)[);/ ]",
                model: "$1"
            },
            {
                regex: "CENTURION(?:[ _-]?([2-6]))?[);/ ]",
                model: "CENTURION $1"
            },
            {
                regex: "GLADIATOR(?:[ _-]?([2-6]))?[);/ ]",
                model: "GLADIATOR $1"
            },
            {
                regex: "GLORY(?:[ _-]?([2-6]))?[);/ ]",
                model: "GLORY $1"
            },
            {
                regex: "LUXURY(?:[ _-]?([2-6]))?[);/ ]",
                model: "LUXURY $1"
            },
            {
                regex: "SENSUELLE(?:[ _-]?([2-6]))?[);/ ]",
                model: "SENSUELLE $1"
            },
            {
                regex: "VICTORY(?:[ _-]?([2-6]))?[);/ ]",
                model: "VICTORY $1"
            },
            {
                regex: "Surfing Tab ([^;/]+) Build",
                model: "SURFING TAB $1",
                device: "tablet"
            },
            {
                regex: "Surfing Tab ([^;/]+)[);/ ]",
                model: "SURFING TAB $1",
                device: "tablet"
            }
        ]
    }, es = {
        regex: "((?:VIV-|BBG-)?(?<!FBCR/)vivo(?!(?:Browser)))|V1730(D[AT]|GA)|V18(18CA|01A0|13B[AT]|18T|09[AT]|1[36][AT]|[13]8[AT]|14A|24[B]?A|2[19][AT]|3[12][AT]|36A)|V1731CA|V1732A|V1818CT|V19[01]1A|V1932[AT]|V1916A|V1923A|V1928A|V1941A",
        device: "smartphone",
        models: [
            {
                regex: "(?:VIV-|BBG-)?vivo[ _]1601[);/ ]",
                model: "V5"
            },
            {
                regex: "V1831[AT]",
                model: "S1"
            },
            {
                regex: "V1832[AT]",
                model: "S1 Pro"
            },
            {
                regex: "V1932[AT]",
                model: "S5"
            },
            {
                regex: "V1801A0",
                model: "Z1"
            },
            {
                regex: "V1730D[AT]",
                model: "Z1i"
            },
            {
                regex: "V1813B[AT]",
                model: "Z3"
            },
            {
                regex: "V1730GA",
                model: "Z3x"
            },
            {
                regex: "V1911A",
                model: "Z5x"
            },
            {
                regex: "V1824[B]?A",
                model: "iQOO"
            },
            {
                regex: "V1916A",
                model: "iQOO Pro 5G"
            },
            {
                regex: "Vivo ONE",
                model: "One"
            },
            {
                regex: "X9Plus",
                model: "X9 Plus"
            },
            {
                regex: "X20Plus",
                model: "X20 Plus"
            },
            {
                regex: "V1809[AT]",
                model: "X23"
            },
            {
                regex: "V1818[AT]|vivo 181[45]",
                model: "Y93"
            },
            {
                regex: "V1818C[AT]",
                model: "Y93s"
            },
            {
                regex: "V1813[AT]",
                model: "Y97"
            },
            {
                regex: "V1901A",
                model: "Y3"
            },
            {
                regex: "V1731CA",
                model: "Y73"
            },
            {
                regex: "vivo 18(16|20)",
                model: "Y91i"
            },
            {
                regex: "vivo 1606",
                model: "Y53i"
            },
            {
                regex: "vivo 1603",
                model: "Y55l"
            },
            {
                regex: "vivo 1609",
                model: "V5 Lite"
            },
            {
                regex: "vivo 1610",
                model: "Y55s"
            },
            {
                regex: "vivo 1611",
                model: "V5 Plus"
            },
            {
                regex: "vivo 181[17]",
                model: "Y91"
            },
            {
                regex: "vivo (1713|1612)",
                model: "V5s"
            },
            {
                regex: "vivo 1714",
                model: "Y69"
            },
            {
                regex: "vivo 1716",
                model: "V7 Plus"
            },
            {
                regex: "vivo 1718",
                model: "V7"
            },
            {
                regex: "vivo 1719",
                model: "Y65"
            },
            {
                regex: "vivo 1723",
                model: "V9"
            },
            {
                regex: "vivo 1726",
                model: "Y83 Pro"
            },
            {
                regex: "vivo 1721",
                model: "X20"
            },
            {
                regex: "vivo 1724",
                model: "Y71"
            },
            {
                regex: "vivo 1725",
                model: "X21"
            },
            {
                regex: "V1814A",
                model: "X21S"
            },
            {
                regex: "V1816[AT]",
                model: "X23"
            },
            {
                regex: "V18(38|29)[AT]",
                model: "X27"
            },
            {
                regex: "V1836A",
                model: "X27 Pro"
            },
            {
                regex: "vivo 1727",
                model: "V9 Youth"
            },
            {
                regex: "vivo 1801",
                model: "Y71i"
            },
            {
                regex: "vivo 1804",
                model: "V11 Pro"
            },
            {
                regex: "vivo 1805",
                model: "Nex"
            },
            {
                regex: "vivo 1806",
                model: "V11i"
            },
            {
                regex: "vivo 1807",
                model: "Y95"
            },
            {
                regex: "vivo 180([38]|8i)",
                model: "Y81"
            },
            {
                regex: "V1732A",
                model: "Y81s"
            },
            {
                regex: "vivo 1812",
                model: "Y81i"
            },
            {
                regex: "vivo 1818",
                model: "V15 Pro"
            },
            {
                regex: "vivo 1902",
                model: "Y17"
            },
            {
                regex: "vivo 1909",
                model: "V17 Pro"
            },
            {
                regex: "V1821[AT]",
                model: "Nex Dual Display"
            },
            {
                regex: "V1923A",
                model: "Nex 3"
            },
            {
                regex: "V1928A",
                model: "U3X"
            },
            {
                regex: "V1941A",
                model: "U3"
            },
            {
                regex: "(?:VIV-|BBG-)?vivo[ _]([^/;]+) Build",
                model: "$1"
            },
            {
                regex: "(?:VIV-|BBG-)?vivo[ _]([^);/]+)[);/]+",
                model: "$1"
            }
        ]
    }, rs = {
        regex: "(XA Pro) Build",
        device: "smartphone",
        model: "$1"
    }, os = {
        regex: "BIRD[\\-. _]([^;/]+)",
        device: "feature phone",
        models: [
            {
                regex: "BIRD[\\-. _]([^;/]+) Build",
                model: "$1"
            },
            {
                regex: "BIRD[\\-. _]([^;/]+)",
                model: "$1"
            }
        ]
    }, ls = {
        regex: "Becker-([a-z0-9]+)",
        device: "feature phone",
        model: "$1"
    }, ds = {
        regex: "Beeline",
        device: "smartphone",
        models: [
            {
                regex: "Beeline[_ ]Pro[_ ]([26])",
                model: "Pro $1"
            },
            {
                regex: "Tab (Fast|Pro)",
                model: "Tab $1",
                device: "tablet"
            },
            {
                regex: "Tab ([0-9])",
                model: "Tab $1",
                device: "tablet"
            },
            {
                regex: "Tab",
                model: "Tab",
                device: "tablet"
            },
            {
                regex: "E700",
                model: "E700"
            },
            {
                regex: "Smart2",
                model: "Smart 2"
            },
            {
                regex: "Smart ([0-9])",
                model: "Smart $1"
            },
            {
                regex: "Smart Dual",
                model: "Smart Dual"
            }
        ]
    }, as = {
        regex: "Beetel ([a-z0-9]+)",
        device: "feature phone",
        model: "$1"
    }, ts = {
        regex: "BENQ(?:[ \\-])?([a-z0-9]+)",
        device: "feature phone",
        model: "$1"
    }, is = {
        regex: "Blaupunkt|Atlantis[_ ](?:1001A|1010A|A10\\.G402)|Discovery[_ ](?:111C|1000C|1001A?)|Endeavour[_ ](?:785|101[GLM]|1000|1001|101[03]|1100)|Polaris[_ ]803",
        device: "tablet",
        models: [
            {
                regex: "Discovery[_ ]111C",
                model: "Discovery 111C"
            },
            {
                regex: "Discovery[_ ]1000C",
                model: "Discovery 1000C"
            },
            {
                regex: "Discovery[_ ]1001A",
                model: "Discovery 1001A"
            },
            {
                regex: "Discovery[_ ]1001",
                model: "Discovery 1001"
            },
            {
                regex: "Endeavour[_ ](101[GLM]|785|100[01]|101[03]|1100)",
                model: "Endeavour $1"
            },
            {
                regex: "Polaris[_ ](803)",
                model: "Polaris $1"
            },
            {
                regex: "Atlantis[_ ](1001A|1010A|A10\\.G402)",
                model: "Atlantis $1"
            },
            {
                regex: "Blaupunkt (SL 0[124]|SM 01)",
                device: "smartphone",
                model: "$1"
            }
        ]
    }, ns = {
        regex: "Bmobile[_ ]|AX-?([1-9][0-9]{2,3}[eEO+]?|7OO)",
        device: "smartphone",
        models: [
            {
                regex: "AX-?([1-9][0-9]{2,3}[eEO+]?)",
                model: "AX$1"
            },
            {
                regex: "AX7OO",
                model: "AX700"
            },
            {
                regex: "Bmobile[_ ]([^/;]+) Build",
                model: "$1"
            },
            {
                regex: "Bmobile[_ ]([a-z0-9]+)",
                model: "$1"
            }
        ]
    }, ms = {
        regex: "Aquaris|bq [^/;]+ Build|BQS[-_]([0-9]{4})|(BQ(ru)?[_ -][0-9]{3,4})",
        device: "smartphone",
        models: [
            {
                regex: "BQ(ru)?-(5209L|5044)",
                model: "Strike LTE"
            },
            {
                regex: "BQ(ru)?-(6035L)",
                model: "Strike Power Max"
            },
            {
                regex: "BQ(ru)?-(5535L)",
                model: "Strike Power Plus"
            },
            {
                regex: "BQ(S|ru)?-(5070|6040L)",
                model: "Magic"
            },
            {
                regex: "BQ(S|ru)?-(5730L)",
                model: "Magic C"
            },
            {
                regex: "BQ-9011(G)?",
                model: "Vision",
                device: "tablet"
            },
            {
                regex: "BQ-8068L",
                model: "Hornet Plus Pro"
            },
            {
                regex: "BQ-8067L",
                model: "Hornet Plus",
                device: "tablet"
            },
            {
                regex: "BQ-8052G",
                model: "BQ-8052G",
                device: "tablet"
            },
            {
                regex: "BQ-8041L",
                model: "Art",
                device: "tablet"
            },
            {
                regex: "BQ-7084G",
                model: "Simple",
                device: "tablet"
            },
            {
                regex: "BQ-7061G",
                model: "Andros",
                device: "tablet"
            },
            {
                regex: "BQ(ru)?-(7082)",
                model: "Armor",
                device: "tablet"
            },
            {
                regex: "BQ-7051G",
                model: "Elba",
                device: "tablet"
            },
            {
                regex: "BQ-7036L",
                model: "Hornet",
                device: "tablet"
            },
            {
                regex: "BQ-7022(G)?",
                model: "Canion",
                device: "tablet"
            },
            {
                regex: "BQ-7021G",
                model: "Hit",
                device: "tablet"
            },
            {
                regex: "BQ-7010G",
                model: "Max",
                device: "tablet"
            },
            {
                regex: "BQ-7006G",
                model: "Union",
                device: "tablet"
            },
            {
                regex: "BQ-7003",
                model: "Jamaica",
                device: "tablet"
            },
            {
                regex: "BQ-6200L|BQ-6000L",
                model: "Aurora"
            },
            {
                regex: "BQ(ru)?[ -]6015L",
                model: "Universe"
            },
            {
                regex: "BQ-6010G",
                model: "Practic"
            },
            {
                regex: "BQ-6001L|BQ-6050",
                model: "Jumbo"
            },
            {
                regex: "BQ-5707G",
                model: "Next Music"
            },
            {
                regex: "BQ-5702",
                model: "Spring"
            },
            {
                regex: "BQ-5700L",
                model: "Space X"
            },
            {
                regex: "BQ-5594",
                model: "Strike Power Max"
            },
            {
                regex: "BQ-(5591|5518G)",
                model: "Jeans"
            },
            {
                regex: "BQ-5522",
                model: "Next"
            },
            {
                regex: "BQ(ru)?-5521",
                model: "Strike Power Max"
            },
            {
                regex: "BQ-5520L",
                model: "Silk"
            },
            {
                regex: "BQ-5519L",
                model: "Fast Plus"
            },
            {
                regex: "BQ-5517L",
                model: "Twin Pro"
            },
            {
                regex: "BQ-5516L",
                model: "Twin"
            },
            {
                regex: "BQS-5515",
                model: "Wide"
            },
            {
                regex: "BQ-5515(L)?",
                model: "Fast"
            },
            {
                regex: "BQ-5512L|BQ-5528L",
                model: "Strike Forward"
            },
            {
                regex: "BQ-5511L",
                model: "Bliss"
            },
            {
                regex: "BQS[_ ]5505",
                model: "Amsterdam"
            },
            {
                regex: "BQ(ru)?-5510",
                model: "Strike Power Max 4G"
            },
            {
                regex: "BQ-5508L",
                model: "Next LTE"
            },
            {
                regex: "BQ-5507L",
                model: "Iron Max"
            },
            {
                regex: "BQ(ru)?-5504",
                model: "Strike Selfie Max"
            },
            {
                regex: "BQ(ru)?-5503",
                model: "Nice 2"
            },
            {
                regex: "BQS-5502",
                model: "Hammer"
            },
            {
                regex: "BQS-5501",
                model: "Kawasaki"
            },
            {
                regex: "BQS-5500",
                model: "Vancouver"
            },
            {
                regex: "BQ-5500L",
                model: "Advance"
            },
            {
                regex: "BQ-5302G",
                model: "Velvet 2"
            },
            {
                regex: "BQ-5301",
                model: "Strike View"
            },
            {
                regex: "BQ-5300G",
                model: "Velvet View"
            },
            {
                regex: "BQ(ru)?-5211|BQS-5020",
                model: "Strike"
            },
            {
                regex: "BQ-5206L",
                model: "Balance"
            },
            {
                regex: "BQ(ru)?-5204|BQS-5050",
                model: "Strike Selfie"
            },
            {
                regex: "BQ(ru)?-5203",
                model: "Vision"
            },
            {
                regex: "BQ(ru)?-5202",
                model: "Space Lite"
            },
            {
                regex: "BQ(ru)?-5201",
                model: "Space"
            },
            {
                regex: "BQ-5082",
                model: "Sense 2"
            },
            {
                regex: "BQ-5071",
                model: "Belief"
            },
            {
                regex: "BQS-5065|BQ-5340",
                model: "Choice"
            },
            {
                regex: "BQ(ru)?-5059|BQ-5514G",
                model: "Strike Power"
            },
            {
                regex: "BQ-5058",
                model: "Strike Power Easy"
            },
            {
                regex: "BQ(ru)?-5057",
                model: "Strike 2"
            },
            {
                regex: "BQ-5056|BQS-5030",
                model: "Fresh"
            },
            {
                regex: "BQS-5055",
                model: "Turbo Plus"
            },
            {
                regex: "BQ(ru)?-5054",
                model: "Crystal"
            },
            {
                regex: "BQ-5052",
                model: "Sense"
            },
            {
                regex: "BQ(S)?-5045",
                model: "Fast"
            },
            {
                regex: "BQ(ru)?-5037|BQ-5514L",
                model: "Strike Power 4G"
            },
            {
                regex: "BQ(ru)?-5035",
                model: "Velvet"
            },
            {
                regex: "BQ(ru)?-5033",
                model: "Shark"
            },
            {
                regex: "BQ-5032",
                model: "Element"
            },
            {
                regex: "BQS-5025",
                model: "High Way"
            },
            {
                regex: "BQ(ru)?-5022",
                model: "Bond"
            },
            {
                regex: "BQ-5015L",
                model: "First"
            },
            {
                regex: "BQ-5012L",
                model: "Rich"
            },
            {
                regex: "BQS-5011",
                model: "Monte Carlo"
            },
            {
                regex: "BQ-5010G",
                model: "Spot"
            },
            {
                regex: "BQS-5010",
                model: "Prague"
            },
            {
                regex: "BQ-5009L",
                model: "Trend"
            },
            {
                regex: "BQS-500[59]",
                model: "Sydney"
            },
            {
                regex: "BQ-5008L",
                model: "Brave"
            },
            {
                regex: "BQ-5007L",
                model: "Iron"
            },
            {
                regex: "BQS-5006",
                model: "Los Angeles"
            },
            {
                regex: "BQ-5005L",
                model: "Intense"
            },
            {
                regex: "BQS-5004",
                model: "Paris"
            },
            {
                regex: "BQ-5003L",
                model: "Shark Pro"
            },
            {
                regex: "BQ-5002G",
                model: "Fun"
            },
            {
                regex: "BQS-5002",
                model: "Colombo"
            },
            {
                regex: "BQ-5001L",
                model: "Contact"
            },
            {
                regex: "BQS-5001",
                model: "Milan"
            },
            {
                regex: "BQ(ru|S)?-5000",
                model: "Tokyo"
            },
            {
                regex: "BQS-4800",
                model: "Blade"
            },
            {
                regex: "BQS-4707",
                model: "Montreal"
            },
            {
                regex: "BQS-4702",
                model: "Оsaka"
            },
            {
                regex: "BQS-4701",
                model: "Venice"
            },
            {
                regex: "BQ-(?:4585|5011G)",
                model: "Fox View"
            },
            {
                regex: "BQS-4570",
                model: "Drive"
            },
            {
                regex: "BQS-4560",
                model: "Golf"
            },
            {
                regex: "BQS-4555",
                model: "Turbo"
            },
            {
                regex: "BQS-4550",
                model: "Richmond"
            },
            {
                regex: "BQ(ru)?-(?:4526|5004G)",
                model: "Fox"
            },
            {
                regex: "BQS-4525",
                model: "Vienna"
            },
            {
                regex: "BQS-4516",
                model: "Singapore"
            },
            {
                regex: "BQS-4515",
                model: "Moscow"
            },
            {
                regex: "BQS-4510",
                model: "Florence"
            },
            {
                regex: "BQS-4505",
                model: "Santiago"
            },
            {
                regex: "BQS-4503",
                model: "Dubai"
            },
            {
                regex: "BQS-4502",
                model: "Kingston"
            },
            {
                regex: "BQS-4501 Bristol",
                model: "Bristol"
            },
            {
                regex: "BQ-4501G",
                model: "Fox Easy"
            },
            {
                regex: "BQ(ru)?-4500",
                model: "Fox LTE"
            },
            {
                regex: "BQ-4077",
                model: "Shark Mini"
            },
            {
                regex: "BQ(ru)?-4072",
                model: "Strike Mini"
            },
            {
                regex: "BQ(ru)?[- ]402[68]",
                model: "Up!"
            },
            {
                regex: "BQS-4010",
                model: "Aspen"
            },
            {
                regex: "BQS-4009",
                model: "Orleans"
            },
            {
                regex: "BQS-4008",
                model: "Shanghai"
            },
            {
                regex: "BQS-4007",
                model: "Valencia"
            },
            {
                regex: "BQS-4005",
                model: "Seoul"
            },
            {
                regex: "BQS-4004",
                model: "Dusseldorf"
            },
            {
                regex: "BQS-4003",
                model: "Verona"
            },
            {
                regex: "BQ-4001G",
                model: "Cool"
            },
            {
                regex: "BQS-4001",
                model: "Oxford"
            },
            {
                regex: "BQS-3510",
                model: "Aspen Mini"
            },
            {
                regex: "BQS-3503",
                model: "Bombay"
            },
            {
                regex: "BQ-1085L",
                model: "Hornet Max Pro",
                device: "tablet"
            },
            {
                regex: "BQ-1084L",
                model: "Hornet Max",
                device: "tablet"
            },
            {
                regex: "BQ-1083G",
                model: "Armor Pro Plus",
                device: "tablet"
            },
            {
                regex: "BQ-1082G",
                model: "Armor Pro",
                device: "tablet"
            },
            {
                regex: "BQ-1077L",
                model: "Armor Pro LTE",
                device: "tablet"
            },
            {
                regex: "BQ(ru)?-1057L",
                model: "Passion",
                device: "tablet"
            },
            {
                regex: "BQ-1051G",
                model: "Corsika",
                device: "tablet"
            },
            {
                regex: "BQ-1050G",
                model: "Hawaii",
                device: "tablet"
            },
            {
                regex: "BQ-1008G",
                model: "Grace",
                device: "tablet"
            },
            {
                regex: "Aquaris M8",
                model: "Aquaris M8",
                device: "tablet"
            },
            {
                regex: "BQ(ru)?[_ ]5590",
                model: "Spring"
            },
            {
                regex: "BQ(S)?-(6016L|5520)",
                model: "Mercury"
            },
            {
                regex: "BQ(S|ru)?-(5701L|5060)",
                model: "Slim"
            },
            {
                regex: "(BQ-7850|BQ-700[12]G|BQ-8002G|BQ-905[12]G|BQ-9702G|BQ-7056G)",
                model: "$1",
                device: "tablet"
            },
            {
                regex: "BQ-8006G",
                model: "Java",
                device: "tablet"
            },
            {
                regex: "BQ-7062G",
                model: "Fiji",
                device: "tablet"
            },
            {
                regex: "BQ(ru)?-1081G",
                model: "Grace 3G",
                device: "tablet"
            },
            {
                regex: "BQ-7802G",
                model: "Luzon",
                device: "tablet"
            },
            {
                regex: "BQ-7008G",
                model: "Clarion",
                device: "tablet"
            },
            {
                regex: "BQ-7064G",
                model: "Fusion",
                device: "tablet"
            },
            {
                regex: "BQ-7050G",
                model: "Malta",
                device: "tablet"
            },
            {
                regex: "BQ-7000G",
                model: "Сharm",
                device: "tablet"
            },
            {
                regex: "BQ-7005G",
                model: "Maui",
                device: "tablet"
            },
            {
                regex: "BQ-7098G",
                model: "Armor Power",
                device: "tablet"
            },
            {
                regex: "BQ-1007",
                model: "Necker",
                device: "tablet"
            },
            {
                regex: "BQ-1045(G)?",
                model: "Orion",
                device: "tablet"
            },
            {
                regex: "BQ-1054L",
                model: "Nexion",
                device: "tablet"
            },
            {
                regex: "BQ(ru)?-7083",
                model: "7083",
                device: "tablet"
            },
            {
                regex: "BQ(ru)?-1056L",
                model: "1056L",
                device: "tablet"
            },
            {
                regex: "(?:bq )?(Aquaris[^/;]*) Build",
                model: "$1"
            },
            {
                regex: "Aquaris (E(4.5|[56])|M(5|10)|U2 Lite|U2|U (Lite|Plus)|V Plus|X5 Plus|X5|X Pro|[CMUVX])",
                model: "Aquaris $1"
            },
            {
                regex: "bq ([^/;]+) Build",
                model: "$1",
                device: "tablet"
            }
        ]
    }, ss = {
        regex: "Bush[ _-]",
        device: "smartphone",
        models: [
            {
                regex: "BUSH ([^;/]+)Tablet Build",
                model: "$1Tablet",
                device: "tablet"
            },
            {
                regex: "BUSH ([^;/]+) Build",
                model: "$1"
            }
        ]
    }, gs = {
        regex: "CAGI-",
        device: "smartphone",
        models: [
            {
                regex: "CAGI-OMEGA",
                model: "Omega"
            },
            {
                regex: "CAGI-([a-z0-9_\\-]+)",
                model: "$1"
            }
        ]
    }, xs = {
        regex: "Capitel-([a-z0-9]+)",
        device: "feature phone",
        model: "$1"
    }, cs = {
        regex: "Captiva[ _-]([^;/]+) Build",
        device: "tablet",
        model: "Pad $1"
    }, us = {
        regex: "(C811|C7[57]1)(?: 4G)?[);/ ]",
        device: "smartphone",
        models: [
            {
                regex: "C751[);/ ]",
                model: "G'zOne Ravine"
            },
            {
                regex: "C771[);/ ]",
                model: "G'zOne Commando"
            },
            {
                regex: "C811 4G[);/ ]",
                model: "G'zOne Commando 4G LTE"
            }
        ]
    }, Ss = {
        regex: "CASPER_|VIA[- _](T7D|A[34]|E3|F[123]|G4|M4|[LS]8|S7|P2|V8C|A1_Plus|A1|S10|S|T17_M|T17)[);/ ]",
        device: "smartphone",
        models: [
            {
                regex: "CASPER_VIA_(G1|E1|[AE]2|M[123]|V[35689]|V10)[);/ ]",
                model: "VIA $1"
            },
            {
                regex: "CASPER_VIA_E1c",
                model: "VIA E1C"
            },
            {
                regex: "VIA[- _](T7D|S10|[LS]8|S7|T17_M|T17)[);/ ]",
                model: "VIA $1",
                device: "tablet"
            },
            {
                regex: "VIA[_ ](A[34]|E3|F[123]|G4|M4|P2|S|V8C|A1_Plus|A1)",
                model: "VIA $1"
            }
        ]
    }, As = {
        regex: "Cat ?(tablet|stargate|nova)|B15Q|CAT B35",
        device: "tablet",
        models: [
            {
                regex: "B15Q",
                model: "B15Q",
                device: "smartphone"
            },
            {
                regex: "CAT B35",
                model: "B35",
                device: "smartphone"
            },
            {
                regex: "Cat ?(?:tablet)? ?((?:Galactica|Nova|StarGate|PHOENIX)[^/;]*) Build",
                model: "$1"
            },
            {
                regex: "Cat ?tablet",
                model: "Nova"
            }
        ]
    }, ps = {
        regex: "CT(?:10[0123]0|7[12]0|820)(?:W|FR)?[);/ ]",
        device: "tablet",
        models: [
            {
                regex: "CT820",
                model: "Touch Tablet Neo2"
            },
            {
                regex: "CT(10[0123]0(?:W|FR)?)",
                model: "CT$1"
            },
            {
                regex: "CT(7[12]0(?:W|FR)?)",
                model: "CT$1"
            }
        ]
    }, vs = {
        regex: "Celkon",
        device: "smartphone",
        models: [
            {
                regex: "Celkon[ _*](C[78]20)",
                model: "$1",
                device: "tablet"
            },
            {
                regex: "Celkon[ _*](CT[^;/]+) Build",
                model: "$1",
                device: "tablet"
            },
            {
                regex: "Celkon[ _*]([^;/]+) Build",
                model: "$1"
            },
            {
                regex: "Celkon[\\. _*]([^;/\\)]+)[\\)/]",
                model: "$1"
            }
        ]
    }, Ms = {
        regex: "Changhong",
        device: "tv",
        models: [
            {
                regex: "Changhong-([^);/]+)",
                model: "$1"
            }
        ]
    }, Ps = {
        regex: "Comio|CT701G PLUS|CT701W|GT100",
        device: "smartphone",
        models: [
            {
                regex: "GT100",
                model: "GT100",
                device: "tablet"
            },
            {
                regex: "CT701W",
                model: "CT701W",
                device: "tablet"
            },
            {
                regex: "CT701G PLUS",
                model: "CT701G Plus",
                device: "tablet"
            },
            {
                regex: "Comio[ _-]?([^;/)]+) Build",
                model: "$1"
            },
            {
                regex: "Comio[ _-]?([^;/)]+)",
                model: "$1"
            }
        ]
    }, Ts = {
        regex: "Compal-[a-z0-9]+",
        device: "feature phone",
        model: "$1"
    }, hs = {
        regex: "ConCorde ([^/;]+) Build",
        device: "smartphone",
        models: [
            {
                regex: "ConCorde Tab ?([^/;]+) Build",
                model: "Tab $1",
                device: "tablet"
            },
            {
                regex: "ConCorde ReadMan ?([^/;]+) Build",
                model: "ReadMan $1",
                device: "tablet"
            },
            {
                regex: "ConCorde ([^/;]+) Build",
                model: "$1"
            }
        ]
    }, bs = {
        regex: "Allure M[13]|Griffe T[256789]|TGW[-]?(710G|709)|(?:PGN\\-?[456][012][0-9]|PHS\\-601|PHQ520|PKT\\-301|Plume (?:H1|L[123]|P8))[;/) ]|CTAB[^/;]+ Build",
        device: "smartphone",
        models: [
            {
                regex: "CTAB([^/;]+) Build",
                device: "tablet",
                model: "CTAB $1"
            },
            {
                regex: "(TGW)-?(710G|709)[);/ ]",
                device: "tablet",
                model: "$1 $2"
            },
            {
                regex: "PHS\\-601",
                model: "C8"
            },
            {
                regex: "PGN\\-?403",
                model: "C4+ Noir"
            },
            {
                regex: "PGN\\-?404",
                model: "C7 Mini"
            },
            {
                regex: "PGN\\-?409",
                model: "Plume P4"
            },
            {
                regex: "PKT\\-?301",
                model: "C2"
            },
            {
                regex: "PGN\\-?504",
                model: "C5"
            },
            {
                regex: "PGN\\-?505",
                model: "C8S"
            },
            {
                regex: "PGN\\-?506",
                model: "C7"
            },
            {
                regex: "(Allure M[13])",
                model: "$1"
            },
            {
                regex: "PGN\\-?507",
                model: "Allure A9"
            },
            {
                regex: "PGN\\-?508",
                model: "C6+"
            },
            {
                regex: "PGN\\-?509",
                model: "C6 Pro"
            },
            {
                regex: "PGN\\-?511",
                model: "Allure A9 Plus"
            },
            {
                regex: "PGN\\-?513",
                model: "Griffe G4"
            },
            {
                regex: "PHQ520",
                model: "Griffe G5"
            },
            {
                regex: "PGN\\-?514",
                model: "Plume P7"
            },
            {
                regex: "PGN\\-?515",
                model: "Plume P4 Pro"
            },
            {
                regex: "PGN\\-?516",
                model: "Plume P5"
            },
            {
                regex: "PGN\\-?51[78]",
                model: "Plume P6"
            },
            {
                regex: "PGN\\-?521",
                model: "Griffe G4 Plus"
            },
            {
                regex: "Griffe T2",
                model: "Griffe T2"
            },
            {
                regex: "Griffe T5",
                model: "Griffe T5"
            },
            {
                regex: "Griffe T6",
                model: "Griffe T6"
            },
            {
                regex: "Griffe T7",
                model: "Griffe T7"
            },
            {
                regex: "Griffe T8 Plus",
                model: "Griffe T8 Plus"
            },
            {
                regex: "Griffe T9",
                model: "Griffe T9"
            },
            {
                regex: "PGN\\-?522",
                model: "P6 Plus"
            },
            {
                regex: "PGN\\-?523",
                model: "P7 Plus"
            },
            {
                regex: "PGN\\-?527",
                model: "Plume P4 Plus"
            },
            {
                regex: "PGN\\-?528",
                model: "Plume P6 Pro Lte"
            },
            {
                regex: "PGN\\-?605",
                model: "Plume P8"
            },
            {
                regex: "PGN\\-?606",
                model: "Allure A55"
            },
            {
                regex: "PGN\\-?607",
                model: "Allure A100"
            },
            {
                regex: "PGN\\-?608",
                model: "Allure A55 Slim"
            },
            {
                regex: "PGN\\-?609",
                model: "Allure A100 Lite"
            },
            {
                regex: "PGN\\-?610",
                model: "Plume P8 Lite"
            },
            {
                regex: "PGN\\-?611",
                model: "Allure A8"
            },
            {
                regex: "PGN\\-?612",
                model: "Allure A8 Plus"
            },
            {
                regex: "PGN\\-?613",
                model: "Allure A55 Plus"
            },
            {
                regex: "Plume H1",
                model: "Plume H1"
            },
            {
                regex: "Plume L1",
                model: "Plume L1"
            },
            {
                regex: "Plume L2 Pro",
                model: "Plume L2 Pro"
            },
            {
                regex: "Plume L3 Plus",
                model: "Plume L3 Plus"
            },
            {
                regex: "Plume P8 Pro",
                model: "Plume P8 Pro"
            },
            {
                regex: "PGN\\-?([0-9]{3})",
                model: "PGN-$1"
            }
        ]
    }, Ls = {
        regex: "(?:YL-)?Coolpad|8190Q[ ;/\\)]|(8295|5860S) Build|CP8676_I0[23] Build|CP8298_I00 Build|REVVLPLUS C3701A|VCR-[AI]0|C106-7|MTS-T0",
        device: "smartphone",
        models: [
            {
                regex: "VCR-[AI]0",
                model: "Cool Play 6"
            },
            {
                regex: "REVVLPLUS C3701A",
                model: "REVVL Plus",
                device: "phablet"
            },
            {
                regex: "8190Q[ ;/\\)]",
                model: "8190Q"
            },
            {
                regex: "MTS-T0[ ;/\\)]",
                model: "N2M"
            },
            {
                regex: "C106-7[ ;/\\)]",
                model: "Cool 1"
            },
            {
                regex: "(5860S|8295) Build",
                model: "$1"
            },
            {
                regex: "CP8676_I02 Build",
                model: "Note 3"
            },
            {
                regex: "CP8676_I03 Build",
                model: "Note 3 Plus"
            },
            {
                regex: "CP8298_I00 Build",
                model: "Note 3 Lite"
            },
            {
                regex: "(?:YL-)?Coolpad[ _\\-]?([^/;]+) Build",
                model: "$1"
            },
            {
                regex: "(?:YL-)?Coolpad[ _\\-]?([a-z0-9\\-]+)",
                model: "$1"
            }
        ]
    }, _s = {
        regex: "Clarmin",
        device: "smartphone",
        models: [
            {
                regex: "Clarmin_B6",
                model: "B6"
            }
        ]
    }, Gs = {
        regex: "Cricket-([a-z0-9]+)",
        device: "feature phone",
        model: "$1"
    }, Bs = {
        regex: "Crosscall|ODYSSEY_Plus|Odyssey S1|Trekker-[MSX][1234]|Action-X3|Core-X3",
        device: "smartphone",
        models: [
            {
                regex: "Action-X3",
                model: "Action-X3"
            },
            {
                regex: "Core-X3",
                model: "Core-X3"
            },
            {
                regex: "Crosscall ([^;/]+) Build",
                model: "$1"
            },
            {
                regex: "ODYSSEY_Plus",
                model: "ODYSSEY+"
            },
            {
                regex: "Odyssey S1",
                model: "ODYSSEY S1"
            },
            {
                regex: "Trekker-([MSX][1234](?: Core)?)",
                model: "Trekker-$1"
            }
        ]
    }, Ns = {
        regex: "(<!myPhone ?)Cube|(U[0-9]+GT|K8GT)|(T8-PLUSM?S?)[);/ ]",
        device: "tablet",
        models: [
            {
                regex: "U27GT",
                model: "Talk 8"
            },
            {
                regex: "T8-PLUSM?S?[);/ ]",
                model: "T8 Ultimate"
            },
            {
                regex: "U55GT",
                model: "Talk 79"
            },
            {
                regex: "U65GT",
                model: "Talk 9X"
            },
            {
                regex: "(U[0-9]+GT[^;/]*) Build",
                model: "$1"
            },
            {
                regex: "(U[0-9]+GT(?:[0-9]|[\\-_][a-z]+)?)",
                model: "$1"
            },
            {
                regex: "(K8GT)",
                model: "$1"
            }
        ]
    }, Cs = {
        regex: "CUBOT|RAINBOW 2|KING_KONG_3|KINGKONG_MINI",
        device: "smartphone",
        models: [
            {
                regex: "CHEETAH 2",
                model: "Cheetah 2"
            },
            {
                regex: "RAINBOW 2",
                model: "Rainbow 2"
            },
            {
                regex: "DINOSAUR",
                model: "Dinosaur"
            },
            {
                regex: "KINGKONG_MINI",
                model: "King Kong Mini"
            },
            {
                regex: "KING_KONG_3",
                model: "King Kong 3"
            },
            {
                regex: "KING KONG",
                model: "King Kong"
            },
            {
                regex: "CUBOT_MANITO",
                model: "Manito"
            },
            {
                regex: "MAX",
                model: "Max"
            },
            {
                regex: "NOTE Plus",
                model: "Note Plus"
            },
            {
                regex: "CUBOT_NOTE_S",
                model: "Note S"
            },
            {
                regex: "CUBOT_NOVA",
                model: "Nova"
            },
            {
                regex: "CUBOT_POWER",
                model: "Power"
            },
            {
                regex: "CUBOT_X18_Plus",
                model: "X18 Plus"
            },
            {
                regex: "CUBOT[ _](A5|C6W|H3|J3|P7|P20|R9|R11|X18)",
                model: "$1"
            },
            {
                regex: "CUBOT ([^;/]+) Build",
                model: "$1"
            },
            {
                regex: "([^;/]+) Build/CUBOT",
                model: "$1"
            }
        ]
    }, Es = {
        regex: "Concord[ _-]|Flyfix 6|C-721[);/ ]",
        device: "smartphone",
        models: [
            {
                regex: "M10",
                model: "M10"
            },
            {
                regex: "Flyfix 6",
                model: "Flyfix 6"
            },
            {
                regex: "C-721",
                model: "Flyfix Q",
                device: "tablet"
            }
        ]
    }, Os = {
        regex: "WING 5|WING9|Venus[ _][14]",
        device: "smartphone",
        models: [
            {
                regex: "WING 5",
                model: "Wing 5"
            },
            {
                regex: "WING9",
                model: "Wing 9"
            },
            {
                regex: "Venus[ _]([14])",
                model: "Venus $1"
            }
        ]
    }, ws = {
        regex: "Cyrus[ _-]",
        device: "smartphone",
        models: [
            {
                regex: "Cyrus[ _-]?([^;/)]+) Build",
                model: "$1"
            },
            {
                regex: "Cyrus[ _-]?([^;/)]+)[);/ ]",
                model: "$1"
            }
        ]
    }, fs = {
        regex: "DATANG",
        device: "smartphone",
        models: [
            {
                regex: "(?:DATANG[ _-])+([^;/]+) Build",
                model: "$1"
            },
            {
                regex: "(?:DATANG[ _-])+([^;/)]+)[;/)]",
                model: "$1"
            }
        ]
    }, ys = {
        regex: "DATSUN",
        device: "smartphone",
        models: [
            {
                regex: "DATSUN_D5500",
                model: "D5500"
            }
        ]
    }, Xs = {
        regex: "Dslide ?([^;/]+) Build|Konnect_(504|601)",
        device: "smartphone",
        models: [
            {
                regex: "Konnect_(504|601)",
                model: "Konnect $1"
            },
            {
                regex: "Dslide ?([^;/]+) Build",
                device: "tablet",
                model: "DSlide $1"
            }
        ]
    }, $s = {
        regex: "(TA[CDQ]-[0-9]+)",
        device: "tablet",
        model: "$1"
    }, Is = {
        regex: "Dell[^a-z]|Venue|XCD35",
        device: "smartphone",
        models: [
            {
                regex: "XCD35",
                model: "XCD35"
            },
            {
                regex: "(?:Dell )?Venue Build",
                model: "Venue",
                device: "smartphone"
            },
            {
                regex: "Dell; Venue Pro",
                model: "Venue Pro",
                device: "smartphone"
            },
            {
                regex: "(?:Dell )?(Streak|Venue) ?([^/;]*) Build",
                model: "$1 $2",
                device: "tablet"
            },
            {
                regex: "Dell; ((?:Streak|Venue)[^;/\\)]*)",
                model: "$1",
                device: "tablet"
            },
            {
                regex: "Dell; ([^;/\\)]+)",
                model: "$1"
            },
            {
                regex: "Dell[ _\\-]([^/;]+) Build",
                model: "$1"
            }
        ]
    }, Fs = {
        regex: "Desay",
        device: "smartphone",
        models: [
            {
                regex: "Desay[ _-]?([^;/)]+) Build",
                model: "$1"
            },
            {
                regex: "Desay[ _-]?([^;/)]+)[);/ ]",
                model: "$1"
            }
        ]
    }, Ds = {
        regex: "DEXP|(?:Ursus|Ixion)[ _]([^;/)]+)|H135[ _]Build|(VA[12]10|ML450|MS[56]50|BL150|BS155|BS160|BS550|BS650|AL[12]40)[);/ ]",
        device: "smartphone",
        models: [
            {
                regex: "Ixion[_ ]([^;/]+)(?: Build|\\))",
                model: "Ixion $1"
            },
            {
                regex: "(ML450|MS[56]50)[);/ ]",
                model: "Ixion $1"
            },
            {
                regex: "Ursus ([^;/)]+)(?: Build|\\))",
                model: "Ursus $1",
                device: "tablet"
            },
            {
                regex: "(VA[21]10)[);/ ]",
                model: "Ursus $1",
                device: "tablet"
            },
            {
                regex: "H135[ _]Build",
                model: "Atlas",
                device: "desktop"
            },
            {
                regex: "(BL150|BS155|BS160|BS550|BS650|AL[12]40)[);/ ]",
                model: "$1"
            },
            {
                regex: "DEXP[ _]([^;/]+) Build",
                model: "$1"
            },
            {
                regex: "DEXP[ _]([^);/]+)[);/ ]",
                model: "$1"
            }
        ]
    }, Rs = {
        regex: "DBTEL(?:[\\-/])?([a-z0-9]+)",
        device: "feature phone",
        model: "$1"
    }, Vs = {
        regex: "Dialog ?([^;/]+) Build",
        device: "smartphone",
        model: "$1"
    }, Us = {
        regex: "DICAM-([a-z0-9]+)",
        device: "feature phone",
        model: "$1"
    }, Hs = {
        regex: "(?<!FBCR/)Digi[ _]([^);/]+)[);/ ]",
        device: "smartphone",
        model: "$1"
    }, ks = {
        regex: "DIGICEL",
        device: "smartphone",
        models: [
            {
                regex: "DL810",
                model: "DL810"
            },
            {
                regex: "DIGICEL ([^/;]+) Build",
                model: "$1"
            }
        ]
    }, Ws = {
        regex: "DL1008M",
        device: "smartphone",
        models: [
            {
                regex: "DL1008M",
                device: "tablet",
                model: "DL1008M"
            }
        ]
    }, Ks = {
        regex: "Digma[_ ]([^;/]+) Build|HIT HT707[10]MG|CITI Octa 80|CITI 1902 3G|CITI Z530 3G|(CITI[_ ](?:[A-Z0-9]+)[_ ][34]G)[ _]C[ST](500[67]PG|8209MG|8139ML)|HIT 4G|HT7074ML|IDX5|(iDx10|iDx7)|MVM900H(?:WZ|C)|MVM908HCZ|(iDxD8 3G|iDxD10 3G|iDrQ10 3G|iDxD[45]|iDxQ5|iD[nx]D7(?:[_ ]3G)?)|PS604M|PT452E|Linx A400 3G LT4001PG|Linx C500 3G LT5001PG|Linx PS474S|LS504[01]PL|LT40(47|54)MG|LS405[01]MG|LS5053ML|LT5048MG|LT5052ML|HT5035PG|HT4039PG|LT4049PG|NS6902QL|NS9797MG|TT1004PG|((?:Optima|Platina|Plane)[ _](?:[EM])?(?:[0-9\\.ST]+|Prime)(?:[ _][43]G)?)|(VOX[ _](?:[0-9\\.A-Z]+)[_ ][43]G)",
        device: "smartphone",
        models: [
            {
                regex: "HIT HT707[10]MG",
                model: "HIT 3G",
                device: "tablet"
            },
            {
                regex: "iDx5",
                model: "iDx5"
            },
            {
                regex: "HT5035PG",
                model: "HIT Q500 3G"
            },
            {
                regex: "HT4039PG",
                model: "HIT Q401 3G"
            },
            {
                regex: "TT1004PG",
                model: "Optima 10.4 3G",
                device: "tablet"
            },
            {
                regex: "(VOX[ _](?:[0-9\\.A-Z]+)[_ ][43]G)",
                model: "$1"
            },
            {
                regex: "PS604M",
                model: "Linx 6.0"
            },
            {
                regex: "LT4049PG",
                model: "Linx Atom 3G"
            },
            {
                regex: "LT5048MG",
                model: "Linx Joy 3G"
            },
            {
                regex: "LT5052ML",
                model: "Linx Base 4G"
            },
            {
                regex: "LT4047MG",
                model: "Linx Alfa 3G"
            },
            {
                regex: "LS4050MG",
                model: "Linx X1 3G"
            },
            {
                regex: "LS4051MG",
                model: "Linx X1 Pro 3G"
            },
            {
                regex: "LT4054MG",
                model: "Linx Argo 3G"
            },
            {
                regex: "LS5041PL",
                model: "Linx Trix 4G"
            },
            {
                regex: "LS5040PL",
                model: "Linx Rage 4G"
            },
            {
                regex: "LS5053ML",
                model: "Linx Pay 4G"
            },
            {
                regex: "(Linx A400 3G) LT4001PG",
                model: "$1"
            },
            {
                regex: "(Linx C500 3G) LT5001PG",
                model: "$1"
            },
            {
                regex: "(Linx PS474S)",
                model: "$1"
            },
            {
                regex: "PT452E",
                model: "Linx 4.5"
            },
            {
                regex: "MVM900H(?:WZ|C)",
                model: "iDx8",
                device: "tablet"
            },
            {
                regex: "MVM908HCZ",
                model: "iDx9",
                device: "tablet"
            },
            {
                regex: "(iD(?:xD10|rQ10|xD7)[_ ]3G)",
                model: "$1",
                device: "tablet"
            },
            {
                regex: "(iDx10|iDx7)",
                model: "$1"
            },
            {
                regex: "(iDxD[45]|iDxQ5)",
                model: "$1"
            },
            {
                regex: "HIT 4G HT7074ML",
                model: "HIT 4G",
                device: "tablet"
            },
            {
                regex: "(CITI 1902 3G)",
                model: "$1",
                device: "tablet"
            },
            {
                regex: "(CITI Z530 3G)",
                model: "$1"
            },
            {
                regex: "(CITI_8527_4G|CITI Octa 80)",
                model: "$1",
                device: "tablet"
            },
            {
                regex: "(CITI (?:[A-Z0-9]+) 3G) C[ST](500[67]PG|8209MG)",
                model: "$1",
                device: "tablet"
            },
            {
                regex: "iDxD8 3G",
                model: "D-Plane2 8",
                device: "tablet"
            },
            {
                regex: "(iDnD7)",
                model: "$1",
                device: "tablet"
            },
            {
                regex: "NS6902QL",
                model: "Platina 7.2 4G",
                device: "tablet"
            },
            {
                regex: "NS9797MG",
                model: "Platina 7.2 3G",
                device: "tablet"
            },
            {
                regex: "((?:Optima|Platina|Plane)[ _](?:[EM])?(?:[0-9\\.STNM]+|Prime)(?:[ _][43]G)?)",
                model: "$1",
                device: "tablet"
            },
            {
                regex: "Digma[_ ]([^;/]+) Build",
                model: "$1",
                device: "tablet"
            }
        ]
    }, Ys = {
        regex: "DoCoMo|\\;FOMA|KGT/1\\.0",
        device: "feature phone",
        models: [
            {
                regex: "DoCoMo/[12]\\.0[/ ]([a-z0-9]+)",
                model: "$1"
            },
            {
                regex: "([a-z0-9]+)(?:_W)?\\;FOMA",
                model: "$1"
            },
            {
                regex: "KGT/1\\.0 ([a-z0-9]+)",
                model: "$1"
            }
        ]
    }, Qs = {
        regex: "DOOGEE[ _-]|Valencia2_Y100pro|X5max(?:[_ ]PRO)?|(KISSME|BIGBOY|COLLO[23]?|DAGGER|DISCOVERY2?|FIND|HOTWIND|LATTE|MAX|MINT|MOON|PIXELS|RAINBOX|TURBO|VALENCIA|VOYAGER2?|TITANS2?)[ -_](DG[0-9]+C?)[);/ ]|BL[579]000[);/ ]|BL12000|BL5500[_ ]Lite|X9 Mini|LEO_DG280",
        device: "smartphone",
        models: [
            {
                regex: "Valencia2_Y100pro",
                model: "Valencia2 Y100pro"
            },
            {
                regex: "LEO_(DG280)",
                model: "Leo $1"
            },
            {
                regex: "(BL[579]000)[);/ ]",
                model: "$1"
            },
            {
                regex: "BL12000 PRO",
                model: "BL12000 Pro"
            },
            {
                regex: "BL5500[_ ]Lite",
                model: "BL5500 Lite"
            },
            {
                regex: "BL12000",
                model: "BL12000"
            },
            {
                regex: "KISSME-DG580",
                model: "Kissme DG580"
            },
            {
                regex: "X9 Mini",
                model: "X9 Mini"
            },
            {
                regex: "(X5max(?:[_ ]PRO)?)",
                model: "$1"
            },
            {
                regex: "(?:DOOGEE[ _-])?(BIGBOY|COLLO[23]?|DAGGER|DISCOVERY2?|FIND|HOTWIND|LATTE|MAX|MINT|MOON|PIXELS|RAINBOX|TURBO|VALENCIA|Valencia2_Y100pro|VOYAGER2?|TITANS2?)[ -_](DG[0-9]+C?)[);/ ]",
                model: "$1 $2"
            },
            {
                regex: "DOOGEE[ _-]([^);/]+) Build",
                model: "$1"
            },
            {
                regex: "DOOGEE[ _-]([^);/]+)[);/ ]",
                model: "$1"
            }
        ]
    }, Zs = {
        regex: "(?:Doov-)?Doov[ _]",
        device: "smartphone",
        models: [
            {
                regex: "(?:Doov-)?Doov[ _]([^;/]+) Build",
                model: "$1"
            },
            {
                regex: "(?:Doov-)?Doov[ _]([^);/]+)[);/ ]",
                model: "$1"
            }
        ]
    }, zs = {
        regex: "Dopod(?: )?([a-z0-9]+)",
        device: "feature phone",
        model: "$1"
    }, Js = {
        regex: "Doro",
        device: "smartphone",
        models: [
            {
                regex: "Doro[ _-]?([^;/)]+) Build",
                model: "$1"
            },
            {
                regex: "Doro[ _-]([0-9a-z]+)",
                model: "$1"
            }
        ]
    }, qs = {
        regex: "(?:DNS|AirTab)[ _\\-]([^;/]+)Build|S4505M[);/ ]",
        device: "smartphone",
        models: [
            {
                regex: "S4505M[);/ ]",
                model: "S4505M"
            },
            {
                regex: "AirTab[ _\\-]([^;/]+)Build",
                model: "AirTab $1",
                device: "tablet"
            },
            {
                regex: "DNS[ _\\-]([^;/]+)Build",
                model: "$1"
            }
        ]
    }, js = {
        regex: "EasyPad|EasyPhone",
        device: "smartphone",
        models: [
            {
                regex: "(EasyPhone[^/;]+) Build",
                model: "$1"
            },
            {
                regex: "(EasyPad[^/;]+) Build",
                model: "$1",
                device: "tablet"
            }
        ]
    }, eg = {
        regex: "EBEST",
        device: "smartphone",
        models: [
            {
                regex: "EBEST[ _-]?([^;/)]+) Build",
                model: "$1"
            },
            {
                regex: "EBEST[ _-]?([^;/)]+)[);/ ]",
                model: "$1"
            }
        ]
    }, rg = {
        regex: "(?:TA10CA3|TM105A?|TR10CS1)[);/ ]",
        device: "tablet",
        models: [
            {
                regex: "TA10CA3[);/ ]",
                model: "TA10CA3"
            },
            {
                regex: "TR10CS1[);/ ]",
                model: "TR10CS1"
            },
            {
                regex: "TM105A[);/ ]",
                model: "TM105A"
            },
            {
                regex: "TM105[);/ ]",
                model: "TM105"
            }
        ]
    }, og = {
        regex: "Hawk_from_EE",
        device: "smartphone",
        models: [
            {
                regex: "Hawk_from_EE",
                model: "Hawk"
            }
        ]
    }, lg = {
        regex: "Elephone|P6000( ?Pro| ?Plus|\\+| ?02)? Build",
        device: "smartphone",
        models: [
            {
                regex: "Elephone[ _\\-]([^/;]+) Build",
                model: "$1"
            },
            {
                regex: "P6000(\\+| ?Plus) Build",
                model: "P6000 Plus"
            },
            {
                regex: "P6000 02 Build",
                model: "P6000 02"
            },
            {
                regex: "P6000 ?Pro Build",
                model: "P6000 Pro"
            },
            {
                regex: "(P[68]000)",
                model: "$1"
            }
        ]
    }, dg = {
        regex: "AFTRS",
        model: "Element 4K (2017)",
        device: "tv"
    }, ag = {
        regex: "(TAB(?:101|728)[ _]3G|TAB7(?:[03]8|16|40|3[30]))[/;) ]",
        device: "tablet",
        model: "$1"
    }, tg = {
        regex: "Ericy-([a-z0-9]+)",
        device: "feature phone",
        model: "$1"
    }, ig = {
        regex: "PH-1[ )]",
        device: "smartphone",
        models: [
            {
                regex: "PH-1[ )]",
                model: "PH-1"
            }
        ]
    }, ng = {
        regex: "A75A\\* Build",
        device: "smartphone",
        models: [
            {
                regex: "A75A\\*",
                model: "A75A Star"
            }
        ]
    }, mg = {
        regex: "(ET7002C-H12|Onyx-[13]S)[/;) ]",
        device: "smartphone",
        models: [
            {
                regex: "Onyx-([13]S)[/;) ]",
                model: "Onyx $1"
            },
            {
                regex: "ET7002C-H12[/;) ]",
                model: "ePad 4S",
                device: "tablet"
            }
        ]
    }, sg = {
        regex: "Eton",
        device: "smartphone",
        models: [
            {
                regex: "Eton[ _-]?([^;/)]+) Build",
                model: "$1"
            },
            {
                regex: "Eton[ _-]?([^;/)]+)[);/ ]",
                model: "$1"
            }
        ]
    }, gg = {
        regex: "(Wooze[_ ](?:I5|L|XL)) Build",
        device: "smartphone",
        model: "$1"
    }, xg = {
        regex: "MK(80[28][^/;]*) Build",
        device: "tv",
        model: "MK$1"
    }, cg = {
        regex: "Rinno (R(?:400|505))",
        device: "smartphone",
        model: "$1"
    }, ug = {
        regex: "RIVIERA ",
        device: "smartphone",
        models: [
            {
                regex: "F23",
                model: "F23"
            }
        ]
    }, Sg = {
        regex: "SENSEIT[ _]?([^;/)]+)( Build|\\))",
        device: "smartphone",
        model: "$1"
    }, Ag = JSON.parse('{"regex":"Sony(?: ?Ericsson)?|SGP|Xperia|([456]0[12]|701)SO|C1[569]0[45]|C2[01]0[45]|C230[45]|C530[236]|C550[23]|C6[56]0[236]|C6616|C68(?:0[26]|[34]3)|C69(?:0[236]|16|43)|D200[45]|D21(?:0[45]|14)|D22(?:0[236]|12|43)|D230[2356]|D240[36]|D25(?:02|33)|D510[236]|D530[36]|D5316|D5322|D5503|D58[03]3|D65(?:0[23]|43|63)|D66[03458]3|D66[14]6|D6708|E(?:20[0345]3|2006|210[45]|2115|2124|230[36]|2312|23[356]3|530[36]|53[3456]3|5506|55[356]3|56[46305][36]|58[02]3|65[35]3|66[0358]3|68[358]3)|I[34]312|I4332|F311[12356]|F331[13]|F321[12356]|F5[13]21|F5122|F813[12]|F833[12]|G312[135]|G311[26]|G322[136]|G3212|G331[123]|G3412|G3416|G342[136]|G823[12]|G834[123]|G8[14]4[12]|H(?:3113|3123|3133|3213|3223|3311|3321|4113|4133|4213|4233|4311|4331|4413|4433|82[167]6|83[12]4|8416|9436)|(?:WT|LT|SO|ST|SK|MK)[0-9]+[a-z]+[0-9]*(?: Build|\\\\))|X?L39H|XM50[ht]|W960|portalmmm/2\\\\.0 K|S3[69]h|SOL2[246]|SOV3[1234567]|X10[ia]v?|E1[05][ai]v?|MT[0-9]{2}[a-z]? Build|SO-0(?:[12]C|[345]D|[234]E|[1-5]F|[1234]G|[134]H|[1234]J|[12]K|1L)|R800[aix]|J8270|J9110|J9210|J81[17]0|I[34]113|I3[12]23|I42[19]3|H9493|H8296|H8166|H4493|LiveWithWalkman|BRAVIA|SGP771","device":"smartphone","models":[{"regex":"(?:Sony(?:Ericsson)?)?E10[ai]v?","model":"Xperia X10 mini","brand":"Sony Ericsson"},{"regex":"(?:Sony(?:Ericsson)?)?U20","model":"Xperia X10 mini pro","brand":"Sony Ericsson"},{"regex":"(?:Sony(?:Ericsson)?)?E15[ai]v?","model":"Xperia X8","brand":"Sony Ericsson"},{"regex":"(?:Sony(?:Ericsson)?)?(LT15[ai]?v?|SO-01C)","model":"Xperia arc","brand":"Sony Ericsson"},{"regex":"(?:Sony(?:Ericsson)?)?LT18[ai]v?","model":"Xperia arc S","brand":"Sony Ericsson"},{"regex":"(?:Sony(?:Ericsson)?)?MT11","model":"Xperia neo V","brand":"Sony Ericsson"},{"regex":"(?:Sony(?:Ericsson)?)?MT15","model":"Xperia neo","brand":"Sony Ericsson"},{"regex":"(?:Sony(?:Ericsson)?)?MT27","model":"Xperia Sola","brand":"Sony Ericsson"},{"regex":"(?:Sony(?:Ericsson)?)?MK16[ai]","model":"Xperia pro","brand":"Sony Ericsson"},{"regex":"(?:Sony(?:Ericsson)?)?ST15[ai]","model":"Xperia mini","brand":"Sony Ericsson"},{"regex":"(?:Sony(?:Ericsson)?)?ST17[ai]","model":"Xperia active","brand":"Sony Ericsson"},{"regex":"(?:Sony(?:Ericsson)?)?ST18[ai]","model":"Xperia ray","brand":"Sony Ericsson"},{"regex":"(?:Sony(?:Ericsson)?)?SK17[ai]?","model":"Xperia mini pro","brand":"Sony Ericsson"},{"regex":"(?:Sony(?:Ericsson)?)?X10[ai]v?","model":"Xperia X10","brand":"Sony Ericsson"},{"regex":"(?:Sony(?:Ericsson)?)M1","model":"Aspen","brand":"Sony Ericsson"},{"regex":"(?:Sony(?:Ericsson)?)?R800","model":"Xperia PLAY","brand":"Sony Ericsson"},{"regex":"(?:Sony(?:Ericsson)?)?WT19|LiveWithWalkman","model":"Live with Walkman","brand":"Sony Ericsson"},{"regex":"(?:Sony(?:Ericsson)?)?CK13i","model":"txt","brand":"Sony Ericsson","device":"feature phone"},{"regex":"(?:Sony(?:Ericsson)?)?CK15[ai]","model":"txt pro","brand":"Sony Ericsson","device":"feature phone"},{"regex":"(?:Sony(?:Ericsson)?)?F100i","model":"Jalou","brand":"Sony Ericsson","device":"feature phone"},{"regex":"(?:Sony(?:Ericsson)?)?J105","model":"Naite","brand":"Sony Ericsson","device":"feature phone"},{"regex":"(?:Sony(?:Ericsson)?)?J108","model":"Cedar","brand":"Sony Ericsson","device":"feature phone"},{"regex":"(?:Sony(?:Ericsson)?)?J10","model":"Elm","brand":"Sony Ericsson","device":"feature phone"},{"regex":"(?:Sony(?:Ericsson)?)?J20","model":"Hazel","brand":"Sony Ericsson","device":"feature phone"},{"regex":"(?:Sony(?:Ericsson)?)?U10","model":"Aino","brand":"Sony Ericsson","device":"feature phone"},{"regex":"(?:Sony(?:Ericsson)?)?U100","model":"Yari","brand":"Sony Ericsson","device":"feature phone"},{"regex":"(?:Sony(?:Ericsson)?)?U1","model":"Satio","brand":"Sony Ericsson","device":"feature phone"},{"regex":"(?:Sony(?:Ericsson)?)?U5","model":"Vivaz","brand":"Sony Ericsson","device":"feature phone"},{"regex":"(?:Sony(?:Ericsson)?)?U8","model":"Vivaz pro","brand":"Sony Ericsson","device":"feature phone"},{"regex":"(?:Sony(?:Ericsson)?)?W20","model":"Zylo","brand":"Sony Ericsson","device":"feature phone"},{"regex":"(?:Sony(?:Ericsson)?)?W100","model":"Spiro","brand":"Sony Ericsson","device":"feature phone"},{"regex":"(?:Sony(?:Ericsson)?)?W150","model":"Yendo","brand":"Sony Ericsson","device":"feature phone"},{"regex":"(?:Sony(?:Ericsson)?)?W960","model":"W960","brand":"Sony Ericsson","device":"feature phone"},{"regex":"(?:Sony(?:Ericsson)?)?WT13","model":"Mix Walkman","brand":"Sony Ericsson","device":"feature phone"},{"regex":"SO-04F","model":"Xperia A2"},{"regex":"SO-04G","model":"Xperia A4"},{"regex":"(?:Sony(?:Ericsson)?)?I(?:4113|31[12]3)","model":"Xperia 10"},{"regex":"(?:Sony(?:Ericsson)?)?I(?:42[19]3|3223)","model":"Xperia 10 Plus"},{"regex":"(?:Sony(?:Ericsson)?)?J(?:9110|81[17]0)","model":"Xperia 1"},{"regex":"(?:Sony(?:Ericsson)?)?LT22i","model":"Xperia P"},{"regex":"(?:Sony(?:Ericsson)?)?LT25i","model":"Xperia V"},{"regex":"(?:Sony(?:Ericsson)?)?J9210","model":"Xperia 5 Dual"},{"regex":"(?:Sony(?:Ericsson)?)?J8270","model":"Xperia 5"},{"regex":"(?:Sony(?:Ericsson)?)?LT26ii","model":"Xperia SL"},{"regex":"(?:Sony(?:Ericsson)?)?LT26i","model":"Xperia S"},{"regex":"(?:Sony(?:Ericsson)?)?SO-02C","model":"Xperia arco"},{"regex":"(?:Sony(?:Ericsson)?)?SO-03D","model":"Xperia arco HD"},{"regex":"(?:Sony(?:Ericsson)?)?LT26w","model":"Xperia arco S"},{"regex":"(?:Sony(?:Ericsson)?)?LT28[aih]","model":"Xperia ion"},{"regex":"(?:Sony(?:Ericsson)?)?LT29i","model":"Xperia TX"},{"regex":"(?:Sony(?:Ericsson)?)?LT30a","model":"Xperia T LTE"},{"regex":"(?:Sony(?:Ericsson)?)?LT30p","model":"Xperia T"},{"regex":"(?:Sony(?:Ericsson)?)?ST21[ia]2","model":"Xperia tipo dual"},{"regex":"(?:Sony(?:Ericsson)?)?ST21[ia]","model":"Xperia tipo"},{"regex":"(?:Sony(?:Ericsson)?)?ST23[ia]","model":"Xperia miro"},{"regex":"(?:Sony(?:Ericsson)?)?ST25[ia]","model":"Xperia U"},{"regex":"(?:Sony(?:Ericsson)?)?SOL22","model":"Xperia UL"},{"regex":"(?:Sony(?:Ericsson)?)?ST26[ia]","model":"Xperia J"},{"regex":"(?:Sony(?:Ericsson)?)?ST27[ia]","model":"Xperia go"},{"regex":"(?:Sony(?:Ericsson)?)?C150[45]","model":"Xperia E"},{"regex":"(?:Sony(?:Ericsson)?)?C160[45]","model":"Xperia E Dual"},{"regex":"(?:Sony(?:Ericsson)?)?(?:E210[45]|E2115|E2124)","model":"Xperia E4"},{"regex":"(?:Sony(?:Ericsson)?)?E20[05]3|E2006","model":"Xperia E4G"},{"regex":"(?:Sony(?:Ericsson)?)?C190[45]","model":"Xperia M"},{"regex":"(?:Sony(?:Ericsson)?)?C200[45]","model":"Xperia M Dual"},{"regex":"(?:Sony(?:Ericsson)?)?C210[45]|S36h","model":"Xperia L"},{"regex":"(?:Sony(?:Ericsson)?)?C230[45]|S39h","model":"Xperia C"},{"regex":"(?:Sony(?:Ericsson)?)?C530[236]","model":"Xperia SP"},{"regex":"(?:Sony(?:Ericsson)?)?C550[23]","model":"Xperia ZR"},{"regex":"(?:Sony(?:Ericsson)?)?C650[236]","model":"Xperia ZL"},{"regex":"(?:Sony(?:Ericsson)?)?(?:C66(?:0[236]|16)|SO-02E)","model":"Xperia Z"},{"regex":"(?:Sony(?:Ericsson)?)?(?:C68(?:0[26]|[34]3)|XL39H|SOL24)","device":"phablet","model":"Xperia Z Ultra"},{"regex":"(?:Sony(?:Ericsson)?)?(?:C69(?:0[236]|16|43)|L39H|SO-0[12]F)","model":"Xperia Z1"},{"regex":"(?:Sony(?:Ericsson)?)?D200[45]","model":"Xperia E1"},{"regex":"(?:Sony(?:Ericsson)?)?D21(?:0[45]|14)","model":"Xperia E1 Dual"},{"regex":"(?:Sony(?:Ericsson)?)?D22(?:0[236]|43)","model":"Xperia E3"},{"regex":"(?:Sony(?:Ericsson)?)?D2212","model":"Xperia E3 Dual"},{"regex":"(?:Sony(?:Ericsson)?)?E20[34]3","model":"Xperia E4g Dual"},{"regex":"H33[12]1","model":"Xperia L2"},{"regex":"H43[13]1","model":"Xperia L2 Dual"},{"regex":"I3312","model":"Xperia L3"},{"regex":"I43[13]2","model":"Xperia L3 Dual"},{"regex":"(?:Sony(?:Ericsson)?)?D2302","model":"Xperia M2 Dual"},{"regex":"(?:Sony(?:Ericsson)?)?D230[356]","model":"Xperia M2"},{"regex":"(?:Sony(?:Ericsson)?)?D240[36]","model":"Xperia M2 Aqua"},{"regex":"(?:Sony(?:Ericsson)?)?(?:E230[36]|E23[35]3)","model":"Xperia M4 Aqua"},{"regex":"(?:Sony(?:Ericsson)?)?(?:E2312|E2363)","model":"Xperia M4 Aqua Dual"},{"regex":"(?:Sony(?:Ericsson)?)?E56[05][36]","model":"Xperia M5"},{"regex":"(?:Sony(?:Ericsson)?)?E56[436]3","model":"Xperia M5 Dual"},{"regex":"(?:Sony(?:Ericsson)?)?D2502","model":"Xperia C3 Dual"},{"regex":"(?:Sony(?:Ericsson)?)?D2533","model":"Xperia C3"},{"regex":"(?:Sony(?:Ericsson)?)?E53[05]3|E5306","model":"Xperia C4"},{"regex":"(?:Sony(?:Ericsson)?)?E53[0346]3","model":"Xperia C4 Dual"},{"regex":"(?:Sony(?:Ericsson)?)?E5506|E5553","model":"Xperia C5 Ultra"},{"regex":"(?:Sony(?:Ericsson)?)?E55[36]3","model":"Xperia C5 Ultra Dual"},{"regex":"(?:Sony(?:Ericsson)?)?D510[236]","model":"Xperia T3"},{"regex":"(?:Sony(?:Ericsson)?)?(?:D530[36]|D5316|XM50[ht])","model":"Xperia T2 Ultra","device":"phablet"},{"regex":"(?:Sony(?:Ericsson)?)?D5322","model":"Xperia T2 Ultra Dual","device":"phablet"},{"regex":"(?:Sony(?:Ericsson)?)?D5503","model":"Xperia Z1 Compact"},{"regex":"(?:Sony(?:Ericsson)?)?(?:D58[03]3|SO-02G)","model":"Xperia Z3 Compact"},{"regex":"(?:Sony(?:Ericsson)?)?(?:D65(?:0[23]|43)|SO-03F)","model":"Xperia Z2"},{"regex":"D6563","model":"Xperia Z2a"},{"regex":"(?:Sony(?:Ericsson)?)?(?:D66[045]3|D66[14]6|SO-01G|SOL26|401SO)","model":"Xperia Z3"},{"regex":"(?:Sony(?:Ericsson)?)?(?:D6633|D6683)","model":"Xperia Z3 Dual"},{"regex":"(?:Sony(?:Ericsson)?)?(?:E65[35]3)","model":"Xperia Z3+"},{"regex":"(?:Sony(?:Ericsson)?)?(?:D6708)","model":"Xperia Z3v"},{"regex":"SOV31|402SO|SO-03G","model":"Xperia Z4"},{"regex":"SGP771","model":"Xperia Z4","device":"tablet"},{"regex":"(?:Sony(?:Ericsson)?)?(?:E58[02]3)","model":"Xperia Z5 Compact"},{"regex":"(?:Sony(?:Ericsson)?)?(?:E66[05]3|SOV32|501SO|SO-01H)","model":"Xperia Z5"},{"regex":"(?:Sony(?:Ericsson)?)?E66[38]3","model":"Xperia Z5 Dual"},{"regex":"(?:Sony(?:Ericsson)?)?(?:E68[58]3|SO-03H)","model":"Xperia Z5 Premium"},{"regex":"(?:Sony(?:Ericsson)?)?E6833","model":"Xperia Z5 Premium Dual"},{"regex":"(?:Sony(?:Ericsson)?)?F311[135]","model":"Xperia XA"},{"regex":"(?:Sony(?:Ericsson)?)?F311[26]","model":"Xperia XA Dual"},{"regex":"(?:Sony(?:Ericsson)?)?F321[135]","model":"Xperia XA Ultra"},{"regex":"(?:Sony(?:Ericsson)?)?F321[26]","model":"Xperia XA Ultra Dual"},{"regex":"(?:Sony(?:Ericsson)?)?F833[12]|SOV34|601SO|SO-01J","model":"Xperia XZ"},{"regex":"(?:Sony(?:Ericsson)?)?(?:701SO|SOV36|G834[123]|SO-01K)","model":"Xperia XZ1"},{"regex":"(?:Sony(?:Ericsson)?)?G8441|SO-02K","model":"Xperia XZ1 Compact"},{"regex":"(?:Sony(?:Ericsson)?)?F331[13]","model":"Xperia E5"},{"regex":"(?:Sony(?:Ericsson)?)?G312[135]|G311[26]","model":"Xperia XA1"},{"regex":"(?:Sony(?:Ericsson)?)?G341[26]|G342[13]","model":"Xperia XA1 Plus"},{"regex":"(?:Sony(?:Ericsson)?)?G3426","model":"Xperia XA1 Plus Dual"},{"regex":"(?:Sony(?:Ericsson)?)?G322[136]|G3212","model":"Xperia XA1 Ultra"},{"regex":"(?:Sony(?:Ericsson)?)?H31[123]3","model":"Xperia XA2"},{"regex":"(?:Sony(?:Ericsson)?)?H41[13]3","model":"Xperia XA2 Dual"},{"regex":"H44[19]3","model":"Xperia XA2 Plus Dual"},{"regex":"H4433","model":"H4433"},{"regex":"(?:Sony(?:Ericsson)?)?H(?:3213|3223|4213|4233)","model":"Xperia XA2 Ultra"},{"regex":"(?:Sony(?:Ericsson)?)?G823[12]|SOV35|602SO|SO-03J","model":"Xperia XZs"},{"regex":"(?:Sony(?:Ericsson)?)?G814[12]|SO-04J","model":"Xperia XZ Premium"},{"regex":"(?:Sony(?:Ericsson)?)?(?:H83[12]4|H82[17]6|SOV37|H8296)","model":"Xperia XZ2"},{"regex":"H8266","model":"Xperia XZ2 Dual"},{"regex":"H8166","model":"Xperia XZ2 Premium Dual"},{"regex":"(?:Sony(?:Ericsson)?)?(?:H(8416|9436|9493)|SO-01L)","model":"Xperia XZ3"},{"regex":"(?:Sony(?:Ericsson)?)?G331[13]","model":"Xperia L1"},{"regex":"(?:Sony(?:Ericsson)?)?G3312","model":"Xperia L1 Dual"},{"regex":"(?:Sony(?:Ericsson)?)?SO-04E","model":"Xperia A"},{"regex":"(?:Sony(?:Ericsson)?)?SO-04D","model":"Xperia GX"},{"regex":"(?:Sony(?:Ericsson)?)?SO-05D","model":"Xperia SX"},{"regex":"(?:Sony(?:Ericsson)?)?F5121","model":"Xperia X"},{"regex":"(?:Sony(?:Ericsson)?)?F5122","model":"Xperia X Dual"},{"regex":"(?:Sony(?:Ericsson)?)?F5321|SO-02J","model":"Xperia X Compact"},{"regex":"(?:Sony(?:Ericsson)?)?(?:F8131|502SO|SOV33|SO-04H)","model":"Xperia X Performance"},{"regex":"(?:Sony(?:Ericsson)?)?F8132","model":"Xperia X Performance Dual"},{"regex":"SGP(?:311|312|321)[);/ ]|SO-03E","model":"Xperia Tablet Z","device":"tablet"},{"regex":"SGP712[);/ ]","model":"Xperia Tablet Z4","device":"tablet"},{"regex":"SGP(?:511|512|521)[);/ ]|SO-05F","model":"Xperia Tablet Z2","device":"tablet"},{"regex":"SGP(?:6[24]1)[);/ ]","model":"Xperia Tablet Z3 Compact","device":"tablet"},{"regex":"SGPT(?:12|121|122|123|13|131|132|133)[);/ ]","model":"Xperia Tablet S","device":"tablet"},{"regex":"(?:BRAVIA )(2K GB ATV3|4K UR2|4K GB ATV3|4K GB|4K 2015|2015)[);/ ]","model":"Bravia $1","device":"tv"},{"regex":"SonyBDP|SonyDBV","model":"Blu-ray Player","device":"tv"},{"regex":"(?:Sony-)?(KDL?-?[0-9a-z]+)","model":"$1","device":"tv"},{"regex":"Opera TV Store.*(?:Sony-)([0-9a-z\\\\-_]+)","model":"$1","device":"tv"},{"regex":"((?:WT|SO|ST|SK|MK)[0-9]+[a-z]*[0-9]*)(?: Build|\\\\))","model":"$1","brand":"Sony Ericsson"},{"regex":"(MT[0-9]{2}[a-z]?)[);/ ]","model":"$1","brand":"Sony Ericsson"},{"regex":"portalmmm/2.0 K([a-z0-9]+)","model":"K$1","brand":"Sony Ericsson"},{"regex":"Sony ?Ericsson?([^/;]*) Build","model":"$1","brand":"Sony Ericsson"},{"regex":"SonyEricsson([CGJKPTWZ][0-9]+[a-z]+)/","model":"$1","brand":"Sony Ericsson","device":"feature phone"},{"regex":"Sony ?Ericsson ?([a-z0-9\\\\-]+)","model":"$1","brand":"Sony Ericsson"},{"regex":"Sony (Tablet[^/;]*) Build","model":"$1","device":"tablet"},{"regex":"(SGP[^/;]*) Build","model":"$1","device":"tablet"},{"regex":"Xperia ([^/;]*Tablet[^/;]*) Build","model":"Xperia $1","device":"tablet"},{"regex":"Xperia ([^;/]+) Build","model":"Xperia $1"},{"regex":"Sony[ -]?([^/;]*) Build","model":"$1"},{"regex":"Sony[ -]?([a-z0-9\\\\-]+)","model":"$1"}]}'), pg = {
        regex: "ERGO|(V550[_ ]Vision|B502 Basic|B504[_ ]Unit|A502[_ ]Aurum|A503[ _]Optima|Prime B400|A551 Sky 4G|A553 Power|A555 Universe|Force F500|GoTab GBT9|GoTab Gti8|V551[ _]Aura|V540_Level|V570_BIG_BEN)",
        device: "smartphone",
        models: [
            {
                regex: "B502 Basic",
                model: "B502 Basic"
            },
            {
                regex: "V550[_ ]Vision",
                model: "V550 Vision"
            },
            {
                regex: "B504[_ ]Unit",
                model: "B504 Unit"
            },
            {
                regex: "V551[ _]Aura",
                model: "V551 Aura"
            },
            {
                regex: "V540_Level",
                model: "V540 Level"
            },
            {
                regex: "V570_BIG_BEN",
                model: "V570 Big Ben"
            },
            {
                regex: "Ergo F502",
                model: "F502 Platinum"
            },
            {
                regex: "(ERGO_)?A500[ _]Best",
                model: "A500 Best"
            },
            {
                regex: "(ERGO_)?A550[ _]Maxx",
                model: "A550 Maxx"
            },
            {
                regex: "Prime B400",
                model: "Prime B400"
            },
            {
                regex: "A502[_ ]Aurum",
                model: "A502 Aurum"
            },
            {
                regex: "A503[ _]Optima",
                model: "A503 Optima"
            },
            {
                regex: "A551 Sky 4G",
                model: "A551 Sky 4G"
            },
            {
                regex: "A553 Power",
                model: "A553 Power"
            },
            {
                regex: "A555 Universe",
                model: "A555 Universe"
            },
            {
                regex: "ERGO[_ ]A556",
                model: "A556"
            },
            {
                regex: "ERGO[_ ]F500",
                model: "F500"
            },
            {
                regex: "ERGO[_ ]F501",
                model: "F501"
            },
            {
                regex: "B500 First",
                model: "B500 First"
            },
            {
                regex: "Force F500",
                model: "Force F500"
            },
            {
                regex: "GoTab GBT9",
                model: "GoTab GBT9",
                device: "tablet"
            },
            {
                regex: "GoTab Gti8",
                model: "GoTab GTi8",
                device: "tablet"
            },
            {
                regex: "ERGO[_ ]Tab[ _]Crystal[ _]Lite",
                model: "Tab Crystal Lite",
                device: "tablet"
            },
            {
                regex: "ERGO[_ ]Tab[ _]Hero[ _]II",
                model: "Tab Hero II",
                device: "tablet"
            }
        ]
    }, vg = {
        regex: "(?:Ericsson(?:/ )?[a-z0-9]+)|(?:R380 2.0 WAP1.1)",
        device: "feature phone",
        models: [
            {
                regex: "Ericsson(?:/ )?([a-z0-9]+)",
                model: "$1"
            },
            {
                regex: "R380 2.0 WAP1.1",
                model: "R380"
            }
        ]
    }, Mg = {
        regex: "PowerMax",
        device: "smartphone",
        models: [
            {
                regex: "PowerMax(P[0-9]+S?)",
                model: "Power Max $1"
            }
        ]
    }, Pg = {
        regex: "eTouch ?([a-z0-9]+)",
        device: "smartphone",
        model: "$1"
    }, Tg = {
        regex: "(ETL-S(?:3520|4521|5042|5084|6022)|ETL-T(?:752G|882G|9[78]0))[/); ]",
        device: "smartphone",
        models: [
            {
                regex: "(ETL-S(?:[^/); ]+))",
                model: "$1"
            },
            {
                regex: "(ETL-T(?:[^/); ]+))",
                device: "tablet",
                model: "$1"
            }
        ]
    }, hg = {
        regex: "eZee[^a-z]*Tab ?([^;/]*) Build|STOREX LinkBox",
        device: "tablet",
        models: [
            {
                regex: "eZee[^a-z]*Tab ?([^;/]*) Build",
                model: "eZee'Tab$1"
            },
            {
                regex: "STOREX LinkBox",
                model: "LinkBox",
                device: "tv"
            }
        ]
    }, bg = {
        regex: "(Ever(?:Glory|Shine|Miracle|Mellow|Classic|Trendy|Fancy|Vivid|Slim|Glow|Magic|Smart|Star)[^/;]*) Build|E70[25]0HD|E805[01]HD|E9054HD|E8050HG|E7914HG",
        device: "smartphone",
        models: [
            {
                regex: "(E70[25]0HD|E805[01]HD|E9054HD|E8050HG|E7914HG)",
                device: "tablet",
                model: "Everpad $1"
            },
            {
                regex: "(Ever(?:Glory|Shine|Miracle|Mellow|Classic|Trendy|Fancy|Vivid|Slim|Glow|Magic|Smart|Star)[^/;]*) Build",
                model: "$1"
            }
        ]
    }, Lg = {
        regex: "Evolio|M4MAGIC",
        device: "smartphone",
        models: [
            {
                regex: "M4MAGIC",
                model: "M4 Magic"
            },
            {
                regex: "Evolio_M5Pro",
                model: "M5 Pro"
            },
            {
                regex: "Evolio[ _](M6|S4 Cobalt|S5|X10|Yuppi)",
                model: "$1"
            }
        ]
    }, _g = {
        regex: "EVOLVEO[ _]([^;/]*) Build",
        device: "smartphone",
        models: [
            {
                regex: "Smart TV ([^;/]*) Build",
                device: "tv",
                model: "Smart TV $1"
            },
            {
                regex: "EVOLVEO[ _]([^;/]*) Build",
                model: "$1"
            }
        ]
    }, Gg = {
        regex: "Explay|ActiveD[ _]|Atlant |Informer[ _][0-9]+|CinemaTV 3G|Surfer[ _][0-9\\.]|sQuad[ _][0-9\\.]|Onliner[1-3]|RioPlay|Leader",
        device: "tablet",
        models: [
            {
                regex: "ActiveD[ _]7.4[ _]3G",
                model: "ActiveD 7.4 3G"
            },
            {
                regex: "ActiveD[ _]8.2[ _]3G",
                model: "ActiveD 8.2 3G"
            },
            {
                regex: "CinemaTV[ _]3G",
                model: "CinemaTV 3G"
            },
            {
                regex: "Informer[ _]([0-9]+(?:[ _]3G)?)",
                model: "Informer $1"
            },
            {
                regex: "Surfer[ _]([0-9\\.]+(?:[ _]3G)?)",
                model: "Surfer $1"
            },
            {
                regex: "sQuad[ _]([0-9\\.]+(?:[ _]3G)?)",
                model: "sQuad $1"
            },
            {
                regex: "Onliner([1-3])",
                model: "Onliner $1"
            },
            {
                regex: "Atlant[;/) ]",
                device: "smartphone",
                model: "Atlant"
            },
            {
                regex: "Explay[ _-]([^;/]+) Build",
                model: "$1"
            },
            {
                regex: "Explay[ _-]([^;/]+)[;/)]",
                model: "$1"
            },
            {
                regex: "(RioPlay)[;/) ]",
                device: "smartphone",
                model: "Rio Play"
            },
            {
                regex: "Leader",
                model: "Leader"
            }
        ]
    }, Bg = {
        regex: "EVROMEDIA|Playpad[ _]",
        device: "tablet",
        models: [
            {
                regex: "Playpad 3G GOO",
                model: "Play Pad 3G Goo"
            },
            {
                regex: "Play Pad PRO",
                model: "Play Pad Pro"
            },
            {
                regex: "PlayPad 3GTab XL",
                model: "Play Pad 3G Tab XL"
            }
        ]
    }, Ng = {
        regex: "EKO",
        device: "smartphone",
        models: [
            {
                regex: "EKO[ _-]?([^;/)]+) Build",
                model: "$1"
            },
            {
                regex: "EKO[ _-]?([^;/)]+)[);/ ]",
                model: "$1"
            }
        ]
    }, Cg = {
        regex: "Rock X9+",
        device: "smartphone",
        models: [
            {
                regex: "Rock X9+",
                model: "Rock X9+"
            }
        ]
    }, Eg = {
        regex: "EZZE-|EZ(?!Browser)[a-z0-9]+",
        device: "feature phone",
        models: [
            {
                regex: "EZZE-([a-z0-9]+)",
                model: "$1"
            },
            {
                regex: "EZ([a-z0-9]+)",
                model: "EZ$1"
            }
        ]
    }, Og = {
        regex: "EZIO-([a-z0-9]+)",
        device: "feature phone",
        model: "$1"
    }, wg = {
        regex: "Amosta 3G5",
        device: "smartphone",
        models: [
            {
                regex: "Amosta 3G5",
                model: "Amosta 3G5"
            }
        ]
    }, fg = {
        regex: "InFocus M[0-9]+[a-z]?",
        device: "smartphone",
        models: [
            {
                regex: "InFocus M([0-9]+[a-z]?)",
                model: "InFocus M$1"
            }
        ]
    }, yg = {
        regex: "Fondi[- _]([^;/)]+)|(T702|Q008B|Q010B|Q718B|Q902|T602B|T707G|T708B|T725B|T725B1|T907B)(?:\\)| Build)",
        device: "smartphone",
        models: [
            {
                regex: "(T702|T602B)",
                model: "$1"
            },
            {
                regex: "(Q008B|Q010B|Q718B|Q902|T707G|T708B|T725B|T725B1|T907B)",
                device: "tablet",
                model: "$1"
            },
            {
                regex: "Fondi[- _]([^;/)]+)",
                model: "$1"
            }
        ]
    }, Xg = {
        regex: "(FP(?:1U?|2))[);/ ]",
        device: "smartphone",
        model: "$1"
    }, $g = {
        regex: "(FX[123]00)",
        device: "smartphone",
        model: "$1"
    }, Ig = {
        regex: "ATRIUM II F55L2|TRIO F40LT|EPIC F50G|Gravity X55L|Orion M50L|ULTRA M50G|M405B|VIRTUE3|F55L Build",
        device: "smartphone",
        models: [
            {
                regex: "ATRIUM II F55L2",
                model: "Atrium II"
            },
            {
                regex: "(F55L)",
                model: "$1"
            },
            {
                regex: "TRIO F40LT",
                model: "Trio F40LT"
            },
            {
                regex: "EPIC F50G",
                model: "Epic F50G"
            },
            {
                regex: "(Gravity X55L|Orion M50L)",
                model: "$1"
            },
            {
                regex: "ULTRA M50G",
                model: "Prime"
            },
            {
                regex: "M405B_8GB",
                model: "Virtue II 8GB"
            },
            {
                regex: "M405B",
                model: "Virtue II"
            },
            {
                regex: "VIRTUE3",
                model: "Virtue III"
            }
        ]
    }, Fg = {
        regex: "ConeXis (A[12]|X[12])|SP5045V",
        device: "smartphone",
        models: [
            {
                regex: "SP5045V",
                model: "SP5045V"
            },
            {
                regex: "ConeXis A1",
                model: "ConeXis A1"
            },
            {
                regex: "ConeXis A2",
                model: "ConeXis A2"
            },
            {
                regex: "ConeXis X1",
                model: "ConeXis X1"
            },
            {
                regex: "ConeXis X2",
                model: "ConeXis X2"
            }
        ]
    }, Dg = {
        regex: "F-01[FHJK]|F-02[EFGH]|F-03[DEFGH]|F-04[EG]|F-05[DEFJ]|F-06E|F-07[DE]|F-08D|F-09[DE]|F-10D|F-11D|F-12C|M532|FARTM933KZ[);/ ]",
        device: "smartphone",
        models: [
            {
                regex: "F-01F",
                model: "Arrows NX F-01F"
            },
            {
                regex: "F-01J",
                model: "Arrows NX F-01J"
            },
            {
                regex: "F-01K",
                model: "Arrows NX F-01K"
            },
            {
                regex: "F-01H",
                model: "Arrows Fit F-01H"
            },
            {
                regex: "F-02E",
                model: "Arrows X F-02E"
            },
            {
                regex: "F-02G",
                model: "Arrows NX F-02G"
            },
            {
                regex: "F-02H",
                model: "Arrows NX F-02H"
            },
            {
                regex: "F-03D",
                model: "Arrows Kiss F-03D"
            },
            {
                regex: "F-03E",
                model: "Arrows Kiss F-03E"
            },
            {
                regex: "F-03F",
                model: "Disney Mobile F-03F"
            },
            {
                regex: "F-03H",
                model: "Arrows SV F-03H"
            },
            {
                regex: "F-04E",
                model: "Arrows V F-04E"
            },
            {
                regex: "F-04G",
                model: "Arrows NX F-04G"
            },
            {
                regex: "F-05D",
                model: "Arrows X LTE F-05D"
            },
            {
                regex: "F-05F",
                model: "Arrows NX F-05F"
            },
            {
                regex: "F-05J",
                model: "Arrows Be F-05J"
            },
            {
                regex: "F-06E",
                model: "Arrows NX F-06E"
            },
            {
                regex: "F-07D",
                model: "Arrows μ F-07D"
            },
            {
                regex: "F-07E",
                model: "Disney Mobile F-07E"
            },
            {
                regex: "F-08D",
                model: "Disney Mobile F-08D"
            },
            {
                regex: "F-09D",
                model: "ANTEPRIMA F-09D"
            },
            {
                regex: "F-09E",
                model: "Raku-Raku Smartphone Premium F-09E"
            },
            {
                regex: "F-10D",
                model: "Arrows X F-10D"
            },
            {
                regex: "F-11D",
                model: "Arrows Me F-11D"
            },
            {
                regex: "F-12C",
                model: "F-12C"
            },
            {
                regex: "F-02F",
                model: "Arrows Tab F-02F",
                device: "tablet"
            },
            {
                regex: "F-03G",
                model: "Arrows Tab F-03G",
                device: "tablet"
            },
            {
                regex: "F-05E",
                model: "Arrows Tab F-05E",
                device: "tablet"
            },
            {
                regex: "FARTM933KZ",
                model: "Arrows Tab M504/HA4",
                device: "tablet"
            },
            {
                regex: "M532[);/ ]",
                model: "Stylistic",
                device: "tablet"
            }
        ]
    }, Rg = {
        regex: "(GEM[0-9]+[a-z]*)",
        device: "tablet",
        model: "$1"
    }, Vg = {
        regex: "GEOTEL[ _]?",
        device: "smartphone",
        models: [
            {
                regex: "G1",
                model: "G1"
            },
            {
                regex: "GEOTEL[ _]?Note",
                model: "Note"
            }
        ]
    }, Ug = {
        regex: "GHIA|QS702",
        device: "smartphone",
        models: [
            {
                regex: "QS702",
                model: "QS702"
            },
            {
                regex: "GHIA_ZEUS_3G",
                model: "Zeus 3G"
            },
            {
                regex: "GHIA_AXIS7",
                model: "Axis 7",
                device: "tablet"
            }
        ]
    }, Hg = {
        regex: "GSmart[ _][a-z0-9 ]+(?: Build|\\))|Gigabyte-[a-z0-9]+",
        device: "smartphone",
        models: [
            {
                regex: "(GSmart[ _][a-z0-9 ]+)(?: Build|\\))",
                model: "$1"
            },
            {
                regex: "Gigabyte-([a-z0-9]+)",
                model: "$1"
            }
        ]
    }, kg = {
        regex: "Gigaset",
        device: "smartphone",
        models: [
            {
                regex: "Gigaset QV(1030|830)",
                model: "Gigaset QV$1",
                device: "tablet"
            },
            {
                regex: "Gigaset ([^;/]+) Build",
                model: "$1"
            },
            {
                regex: "Gigaset ([^;/)]+)[);/ ]",
                model: "$1"
            }
        ]
    }, Wg = {
        regex: "GINZZU[_ ]|((?:RS(?:7[14]|81|9[67])D)|S50[45]0|S5120|RS(6[12]|9[45])D|S40[23]0|RS8502|RS9602)[);/ ]",
        device: "smartphone",
        models: [
            {
                regex: "GINZZU[_ ]?(S40[17]0|S4710|ST6040|ST6120)",
                model: "$1"
            },
            {
                regex: "GINZZU[_ ]?(GT-(?:7105|70[1-4]0|7115|7210|[WX]831|X770|7810|8010))",
                model: "$1",
                device: "tablet"
            },
            {
                regex: "(RS6[12]D) ULTIMATE",
                model: "$1 Ultimate"
            },
            {
                regex: "(?:GINZZU[ _])?((?:RS(?:7[14]|81|9[4-7])D)|S50[45]0|S5120|S40[23]0|RS8502|RS9602|RS94D)[);/ ]",
                model: "$1"
            }
        ]
    }, Kg = {
        regex: "(?:GIO-)?GIONEE[ _-]?[a-z0-9]+|(?:Dream_D1|V188S?|GN[0-9]{3,4}[a-z]?)[);/ ]|F103(?: Pro)? Build|P5 mini Build|P7 Max Build|(M7 Power|F106L|F100A)[);/ ]",
        device: "smartphone",
        models: [
            {
                regex: "GN810[);/ ]",
                model: "GN810",
                device: "phablet"
            },
            {
                regex: "GN([0-9]{3,4}[a-z]?)[);/ ]",
                model: "GN$1"
            },
            {
                regex: "(F106L|F100A|V188S|V188)[);/ ]",
                model: "$1"
            },
            {
                regex: "F103( Pro)? Build",
                model: "F103$1"
            },
            {
                regex: "M7 Power[);/ ]",
                model: "M7 Power"
            },
            {
                regex: "P5 mini Build",
                model: "P5 mini"
            },
            {
                regex: "P7 Max Build",
                model: "P7 Max"
            },
            {
                regex: "(?:(?:GIO-)?GIONEE[ _-])?Dream_D1[);/ ]",
                model: "Dream D1"
            },
            {
                regex: "(?:GIO-)?GIONEE[ _-]([a-z0-9_-]+).*Android",
                model: "$1"
            },
            {
                regex: "Android.*(?:GIO-)?GIONEE[ _-]([a-z0-9_-]+)",
                model: "$1"
            },
            {
                regex: "(?:GIO-)?GIONEE[ _-]?([a-z0-9]+)",
                model: "$1",
                device: "feature phone"
            }
        ]
    }, Yg = {
        regex: "(?:Grape[ _])?GTM-5([^;/]+) Build",
        device: "smartphone",
        model: "GTM-5$1"
    }, Qg = {
        regex: "Vizio|VAP430|VTAB1008",
        device: "tv",
        models: [
            {
                regex: "VAP430",
                model: "VAP430"
            },
            {
                regex: "VTAB1008",
                device: "tablet",
                model: "VTAB1008"
            }
        ]
    }, Zg = {
        regex: "GOCLEVER|QUANTUM_[0-9]{3}|QUANTUM [0-9]{1}|QUANTUM 700N|QUANTUM_(1010N|1010M|900)|ARIES|INSIGNIA|ORION_|ELIPSO|LIBRA[ _]97",
        device: "smartphone",
        models: [
            {
                regex: "QUANTUM_(1010N|1010M|900)",
                model: "QUANTUM $1",
                device: "tablet"
            },
            {
                regex: "INSIGNIA_(785_PRO|1010M|800M)",
                model: "INSIGNIA $1",
                device: "tablet"
            },
            {
                regex: "(ORION|ARIES|ELIPSO)[_ ](71|101|102)",
                model: "$1 $2",
                device: "tablet"
            },
            {
                regex: "TQ700N",
                model: "QUANTUM 700N",
                device: "tablet"
            },
            {
                regex: "((?:QUANTUM|ARIES|INSIGNIA|ORION|ELIPSO)[ _-]?[^;/]+)(?: Build|\\))",
                model: "$1"
            },
            {
                regex: "GOCLEVER[ _-]TAB[ _-]?([^;/]+) Build",
                model: "TAB $1",
                device: "tablet"
            },
            {
                regex: "GOCLEVER[ _-]?([^;/]+) Build",
                model: "$1"
            },
            {
                regex: "TAB ([^;/)]+) Build/GOCLEVER",
                model: "TAB $1",
                device: "tablet"
            },
            {
                regex: "([^;/)]+) Build/GOCLEVER",
                model: "$1"
            },
            {
                regex: "GOCLEVER[ _-]?TAB[ _-]([^;/)]+)[;/)]",
                model: "TAB $1",
                device: "tablet"
            },
            {
                regex: "GOCLEVER[ _-]?([^;/)]+)[;/)]",
                model: "$1"
            },
            {
                regex: "LIBRA[ _]97",
                model: "Libra 97",
                device: "tablet"
            }
        ]
    }, zg = {
        regex: "GO Onyx|GO[0-9]{3,4}",
        device: "smartphone",
        models: [
            {
                regex: "GO Onyx",
                model: "Go Onyx"
            },
            {
                regex: "GO([0-9]{3,4})",
                model: "Go$1"
            }
        ]
    }, Jg = {
        regex: "Goly[ _-]",
        device: "smartphone",
        models: [
            {
                regex: "Goly[ _-]([^;/]+) Build",
                model: "$1"
            },
            {
                regex: "Goly[ _-]([^;/)]+)[;/)]",
                model: "$1"
            }
        ]
    }, qg = {
        regex: "Nexus|GoogleTV|Glass(?<!Browser)|CrKey[^a-z0-9]|Pixel(?: Build|\\))|Pixel (?:XL|C|[2-4]|[2-4] XL)|Google 2XL",
        device: "smartphone",
        models: [
            {
                regex: "Glass",
                model: "Glass"
            },
            {
                regex: "Galaxy Nexus",
                model: "Galaxy Nexus"
            },
            {
                regex: "(Nexus (?:S|4|5X?|One))",
                model: "$1"
            },
            {
                regex: "(Nexus (?:6P?))",
                device: "phablet",
                model: "$1"
            },
            {
                regex: "(Nexus (?:7|9|10))",
                device: "tablet",
                model: "$1"
            },
            {
                regex: "CrKey[^a-z0-9]",
                model: "Chromecast",
                device: "tv"
            },
            {
                regex: "GoogleTV",
                device: "tv",
                model: "GoogleTV"
            },
            {
                regex: "Pixel(?: Build|\\))",
                model: "Pixel"
            },
            {
                regex: "Pixel XL",
                model: "Pixel XL"
            },
            {
                regex: "Pixel 3 XL",
                model: "Pixel 3 XL"
            },
            {
                regex: "Pixel 2 XL",
                model: "Pixel 2 XL"
            },
            {
                regex: "Pixel 3",
                model: "Pixel 3"
            },
            {
                regex: "Pixel 4 XL",
                model: "Pixel 4 XL"
            },
            {
                regex: "pixel 4",
                model: "Pixel 4"
            },
            {
                regex: "Pixel 2",
                model: "Pixel 2"
            },
            {
                regex: "Google 2XL",
                model: "Pixel 2 XL"
            },
            {
                regex: "Pixel C",
                device: "tablet",
                model: "Pixel C"
            }
        ]
    }, jg = {
        regex: "GRADIENTE",
        device: "feature phone",
        models: [
            {
                regex: "GRADIENTE-([a-z0-9]+)",
                model: "$1"
            },
            {
                regex: "GRADIENTE ([a-z0-9\\-]+)",
                model: "$1"
            }
        ]
    }, ex = {
        regex: "GR?-TB[0-9]+[a-z]*|GRUNDIG|portalmmm/2\\.0 G|AFTEU(?:011|014|FF014)",
        device: "tv",
        models: [
            {
                regex: "(GR?-TB[0-9]+[a-z]*)",
                device: "tablet",
                model: "$1"
            },
            {
                regex: "GRUNDIG ([a-z0-9]+)",
                model: "$1"
            },
            {
                regex: "portalmmm/2\\.0 G([a-z0-9]+)",
                model: "G$1"
            },
            {
                regex: "AFTEU014",
                model: "Vision 7 4K (2019)"
            },
            {
                regex: "AFTEUFF014",
                model: "OLED 4K (2019)"
            },
            {
                regex: "AFTEU011",
                model: "Vision 6 HD (2019)"
            }
        ]
    }, rx = {
        regex: "HAFURY",
        device: "smartphone",
        models: [
            {
                regex: "(MIX|UMAX)",
                model: "$1"
            }
        ]
    }, ox = {
        regex: "Haier|I6_Infinity|Titan[ _]T[13]|(?:HW-)?W(?:716|757|860|970)[);/ ]|(?:HM-)?(N505|N700|G(?:152|303|353|552|70[01])?-FL|HM-N501-FL|G(?:303)?-W|I(?:557)?-FL)|(?:PAD[ _](D71|G781|d85))",
        device: "smartphone",
        models: [
            {
                regex: "HM-N505-FL",
                model: "I8"
            },
            {
                regex: "HM-N700-FL",
                model: "L7"
            },
            {
                regex: "HM-N501-FL",
                model: "L56"
            },
            {
                regex: "(?:HM-)?(G(?:152|353|552|70[01])|G(?:303)|I(?:557))",
                model: "$1"
            },
            {
                regex: "(Titan[_ ]T[13]|I6_Infinity)",
                model: "$1"
            },
            {
                regex: "(?:HW-)?W(716|757|860|970)[);/ ]",
                model: "W$1"
            },
            {
                regex: "PAD[ -_](D71|G781|d85)",
                device: "tablet",
                model: "$1"
            },
            {
                regex: "Haier[ _\\-](H[WT]-[^/;]+) Build",
                model: "$1"
            },
            {
                regex: "Haier[ _\\-](H[WT]-[a-z0-9_\\-]+)",
                model: "$1"
            },
            {
                regex: "Haier[ _\\-](sy[0-9]+)",
                model: "$1"
            },
            {
                regex: "Haier[ _\\-]([a-z0-9\\-]+)",
                model: "$1",
                device: "feature phone"
            }
        ]
    }, lx = {
        regex: "(HSG[0-9]{4})|SN97T41W|SN1AT71W\\(B\\)|SN70T51A|SN70T31?|T7-QC",
        device: "tablet",
        models: [
            {
                regex: "(HSG[0-9]{4})",
                model: "$1"
            },
            {
                regex: "SN1AT71W\\(B\\)",
                model: "SN1AT71W(B)"
            },
            {
                regex: "SN70T31",
                model: "SN70T31"
            },
            {
                regex: "SN70T3",
                model: "SN70T3"
            },
            {
                regex: "SN70T51A",
                model: "SN70T51A"
            },
            {
                regex: "SN97T41W",
                model: "SN97T41W"
            },
            {
                regex: "T7-QC",
                model: "SNAT71BUE"
            }
        ]
    }, dx = {
        regex: "Hasee",
        device: "smartphone",
        models: [
            {
                regex: "Hasee ([^;/]+) Build",
                model: "$1"
            },
            {
                regex: "Hasee ([^;/)]+)[);/ ]",
                model: "$1"
            }
        ]
    }, ax = {
        regex: "(?:HS-)?Hisense ([^;/]+) Build|Hisense [^);/]+|HS-(?:G|U|EG?|I|L|T|X)[0-9]+[a-z0-9\\-]*|E270BSA|M470BS[AE]|E2281|EG680|HLTE(700T|22[13]E)",
        device: "smartphone",
        models: [
            {
                regex: "E270BSA",
                device: "tablet",
                model: "Sero 7"
            },
            {
                regex: "M470BS[AE]",
                device: "tablet",
                model: "Sero 7 Pro"
            },
            {
                regex: "E2281",
                device: "tablet",
                model: "Sero 8"
            },
            {
                regex: "HLTE700T",
                model: "A6"
            },
            {
                regex: "HLTE221E",
                model: "E Max"
            },
            {
                regex: "HLTE223E",
                model: "H30"
            },
            {
                regex: "EG680",
                model: "Smartfren Andromax Z"
            },
            {
                regex: "(HS-(?:G|U|EG?|I|L|T|X)[0-9]+[a-z0-9\\-]*)",
                model: "$1"
            },
            {
                regex: "(?:HS-)?Hisense ([^;/]+) Build",
                model: "$1"
            },
            {
                regex: "Hisense ([^);/]+)",
                model: "$1"
            }
        ]
    }, tx = {
        regex: "(HOFFMANN|Neo[_ ]A[139]00)[);/ ]",
        device: "smartphone",
        models: [
            {
                regex: "Neo[_ ](A[139]00)",
                model: "Neo $1"
            },
            {
                regex: "HOFFMANN[ _]X[-_ ](Prime|Twist)",
                model: "X $1"
            }
        ]
    }, ix = {
        regex: "Homtom|(?:HT[0-9]{1,2})(?: ?Pro)?[);/ ]",
        device: "smartphone",
        models: [
            {
                regex: "(HT[0-9]{1,2}(?: ?Pro)?)[);/ ]",
                model: "$1"
            },
            {
                regex: "Homtom ([^;/]+) Build",
                model: "$1"
            }
        ]
    }, nx = {
        regex: "HOSIN[ _-]",
        device: "smartphone",
        models: [
            {
                regex: "HOSIN[ _-]([^;/]+) Build",
                model: "$1"
            },
            {
                regex: "HOSIN[ _-]([^;/]+)[;/)]",
                model: "$1"
            }
        ]
    }, mx = {
        regex: "HOOZO[_ ](MT232|MT Pad 116 LTE|X1001)[);/ ]",
        device: "tablet",
        model: "$1"
    }, sx = JSON.parse('{"regex":"(HW-)?(?:Huawei|Ideos|Honor[ _]?|(?:(?:AGS|AGS2|ALE|ALP|AMN|ANE|ARE|ARS|ASK|ATH|ATU|AUM|BAC|BAH[23]?|BG2|BGO|BKK|BKL|BLA|BLL|BLN|BND|BTV|CAG|CAM|CAN|CAZ|CHC|CHE[12]?|CHM|CLT|CMR|COL|COR|CPN|CRO|CRR|CUN|DIG|DLI|DRA|DUA|DUB|DUK|EDI|ELE|EML|EVA|EVR|FDR|FIG|FLA|FRD|GEM|GRA|HDN|HLK|HMA|Hol|HRY|HWI|H[36]0|INE|JAT|JDN|JDN2|JKM|JMM|JSN|KII|KIW|KNT|KOB|KSA|LDN|LEO|LIO|LLD|LND|LON|LRA|LUA|LY[AO]|MAR|MHA|MRD|MYA|NCE|NEM|NEO|NXT|PAR|PCT|PIC|PLE|PLK|POT|PRA|RIO|RNE|RVL|SCC|SCL|SCM|SEA|SHT|SLA|SNE|SPN|STF|STK|TAG|TIT|TNY|TRT|VCE|VEN|VIE|VKY|VNS|VOG|VRD|VTR|WAS|YAL|G(?:527|620S|621|630|735)|Y(?:221|330|550|6[23]5))-(?:[A-Z]{0,2}[0-9]{1,4}[A-Z]{0,3}?)|H1711|U(?:8230|8500|8661|8665|8667|8800|8818|8860|9200|9508))[);/ ])|hi6210sft|PE-(UL00|TL[12]0|TL00M)|T1-(A21[Lw]|A23L|701u|823L)|G7-L01|HW-01K|JNY-(LX[12]|AL10)|OXF-AN[01]0|TAS-(A[LN]00|L29|TL00)|WLZ-(AL10|AN00)|NIC-LX1A|MRX-(AL09|W09)|CDY-([AT]N00|AN90)|GLK-[AT]L00|JER-[AT]N10|ELS-[AT]N00|AKA-AL10|MON-(W|AL)19|BMH-AN10|AQM-AL[01]0|MOA-AL00|NTS-AL00|ART-[AT]L00x|JEF-[AT]N00|MED-[AT]L00|EBG-AN[01]0|ANA-AN00|BZ[AK]-W00|BZT-(W09|AL10)","device":"smartphone","models":[{"regex":"POT-[TA]L00a[);/ ]","model":"9S"},{"regex":"U9500[);/ ]","model":"Ascend D1"},{"regex":"U8818[);/ ]","model":"Ascend G300"},{"regex":"G527-U081[);/ ]","model":"Ascend G527"},{"regex":"G620S-L0[13][);/ ]","model":"Ascend G620S"},{"regex":"G630-U251[);/ ]","model":"Ascend G630"},{"regex":"G7-L01[);/ ]","model":"Ascend G7"},{"regex":"U9200[);/ ]","model":"Ascend P1"},{"regex":"H1711[);/ ]","model":"Ascend XT2"},{"regex":"Y221-U(?:[12]2|[0345]3)[);/ ]","model":"Ascend Y221"},{"regex":"Y550-L03[);/ ]","model":"Ascend Y550"},{"regex":"ART-[AT]L00x[);/ ]","model":"Enjoy 10"},{"regex":"STK-[AT]L00[);/ ]","model":"Enjoy 10 Plus"},{"regex":"MED-[AT]L00[);/ ]","model":"Enjoy 10E"},{"regex":"AQM-AL00[);/ ]","model":"Enjoy 10S"},{"regex":"TAG-[ACT]L00[);/ ]","model":"Enjoy 5S"},{"regex":"NCE-(AL[10]0|TL10)[);/ ]","model":"Enjoy 6"},{"regex":"DIG-(?:TL10|AL00)[);/ ]","model":"Enjoy 6S"},{"regex":"SLA-(?:AL00|TL10)[);/ ]","model":"Enjoy 7"},{"regex":"FIG-(?:[AT]L[10]0)[);/ ]","model":"Enjoy 7S"},{"regex":"LDN-(?:AL[12]0|TL[02]0)[);/ ]","model":"Enjoy 8"},{"regex":"FLA-AL10[);/ ]","model":"Enjoy 8 Plus"},{"regex":"ATU-[AT]L10[);/ ]","model":"Enjoy 8e"},{"regex":"MRD-[TA]L00[);/ ]","model":"Enjoy 9e"},{"regex":"U8665[);/ ]","model":"Fusion 2"},{"regex":"G735-L(?:03|12|23)[);/ ]","model":"G Play"},{"regex":"CHC-U(?:0[13]|23)[);/ ]","model":"G Play Mini"},{"regex":"(?:Honor_|HW-)?G621-TL00M?[);/ ]","model":"G621"},{"regex":"DIG-L2[12][);/ ]","model":"GR3 (2017)"},{"regex":"KII-L21[);/ ]","model":"GR5"},{"regex":"BLL-L2[12][);/ ]","model":"GR5 (2017)"},{"regex":"RIO-L03[);/ ]","model":"GX8"},{"regex":"U8860[);/ ]","model":"Honor"},{"regex":"COL-(?:AL[01]0|TL[01]0|L29)[);/ ]","model":"Honor 10"},{"regex":"HRY-(?:[AT]L00[A]?|LX[12]|LX1MEB)[);/ ]","model":"Honor 10 Lite"},{"regex":"U9508[);/ ]","model":"Honor 2"},{"regex":"YAL-(?:L21|[AT]L00)[);/ ]","model":"Honor 20"},{"regex":"LRA-AL00[);/ ]","model":"Honor 20 Lite"},{"regex":"YAL-(L41|AL10)[);/ ]","model":"Honor 20 Pro"},{"regex":"(MAR-LX1H|YAL-AL50)[);/ ]","model":"Honor 20S"},{"regex":"BMH-AN10[);/ ]","model":"Honor 30"},{"regex":"EBG-AN00[);/ ]","model":"Honor 30 Pro"},{"regex":"EBG-AN10[);/ ]","model":"Honor 30 Pro Plus"},{"regex":"CDY-AN90[);/ ]","model":"Honor 30S"},{"regex":"(?:Honor_|HW-)?H30-(?:C00|L01M?|L02|U10|T00|T10)(?:_TD)?[);/ ]","model":"Honor 3C"},{"regex":"Hol-U19[);/ ]","model":"Honor 3C Lite"},{"regex":"(?:Honor_|HW-)?SCL-(?:AL00|CL00|TL00H?)(?:_TD)?[);/ ]","model":"Honor 4A"},{"regex":"(?:Honor_|HW-)?CHM-U01(?:_TD)?[);/ ]","model":"Honor 4C"},{"regex":"AQM-AL10[);/ ]","model":"Honor 4T Pro"},{"regex":"(CHE2?-[UT]L00[HM]?|CHE1-CL[12]0|CHE2-L(?:1[12]|23)|Che1-L04|CHE-TL00)[);/ ]","model":"Honor 4X"},{"regex":"(?:Honor_|HW-)?CUN-[AT]L00[);/ ]","model":"Honor 5 Play"},{"regex":"(?:Honor_|HW-)?CAM-(?:AL00|TL00H|TL00)(?:_TD)?[);/ ]","model":"Honor 5A"},{"regex":"(?:Honor_|HW-)?NEM-(?:AL10|L51|UL10|TL00)[);/ ]","model":"Honor 5C"},{"regex":"(?:Honor_|HW-)?NEM-(?:L22|TL00H)[);/ ]","model":"Honor 5C Dual SIM"},{"regex":"(?:Honor_|HW-)?KIW-(?:AL10|TL00H|[TC]L00|L2[124]|UL00)(?:_TD)?[);/ ]","model":"Honor 5X"},{"regex":"((?:Honor_|HW-)?H60-L(?:01|02|03|04|11|12)(?:_TD)?|HW-H60-J1)[);/ ]","model":"Honor 6"},{"regex":"MYA-TL10[);/ ]","model":"Honor 6 Play"},{"regex":"PE-(UL00|TL[12]0|TL00M)[);/ ]","model":"Honor 6 Plus"},{"regex":"(?:HONOR[ _]?)?DLI-(?:AL10|L[24]2|TL20)[);/ ]","model":"Honor 6A"},{"regex":"DIG-L21HN[);/ ]","model":"Honor 6C"},{"regex":"JMM-L22[);/ ]","model":"Honor 6C Pro"},{"regex":"(?:HONOR[ _]?)?BLN-(?:L2[124]|AL[1234]0|TL[01]0[);/ ])","model":"Honor 6X"},{"regex":"(?:Honor[_]?|HW-)?PLK-(?:AL10|CL00|TL00|TL01H?|UL00|L01)[);/ ]","model":"Honor 7"},{"regex":"(?:Honor_|HW-)?NEM-L21[);/ ]","model":"Honor 7 Lite"},{"regex":"AUM-(?:AL[20]0|L33[A]?|TL20)[);/ ]","model":"Honor 7A"},{"regex":"AUM-L29[);/ ]","model":"Honor 7A Pro"},{"regex":"(?:Honor_|HW-)?(?:LND-(?:AL[34]0|L29|TL40)|AUM-L41)[);/ ]","model":"Honor 7C"},{"regex":"ATH-(?:AL00|UL00|TL00H)[);/ ]","model":"Honor 7i"},{"regex":"(?:Honor_|HW-)?DUA-(?:L22|LX3)[);/ ]","model":"Honor 7S"},{"regex":"(?:HONOR[ _]?)?BND-(?:AL[01]0|TL10|L2[14]|L31)[);/ ]","model":"Honor 7X"},{"regex":"FRD-(?:AL[01]0|L0[249]|L1[49]|DL00)[);/ ]","model":"Honor 8"},{"regex":"PRA-(?:AL00X|AL00|TL10)[);/ ]","model":"Honor 8 Lite"},{"regex":"DUK-(?:L09|TL30)[);/ ]","model":"Honor 8 Pro"},{"regex":"VEN-L22[);/ ]","model":"Honor 8 Smart"},{"regex":"JAT-L(29|X[13])[);/ ]","model":"Honor 8A"},{"regex":"JAT-L41[);/ ]","model":"Honor 8A Pro"},{"regex":"BKK-(?:AL[10]0|L21|L22|LX2|TL00)[);/ ]","model":"Honor 8C"},{"regex":"KSA-(LX[29]|AL00)[);/ ]","model":"Honor 8S"},{"regex":"JSN-L(?:2[123]|42)|JSN-[TA]L00[a]?[);/ ]","model":"Honor 8X"},{"regex":"ARE-(?:AL[10]0|L22HN|TL00)[);/ ]","model":"Honor 8X Max"},{"regex":"STF-(?:AL[10]0|L09|TL10)[);/ ]","model":"Honor 9"},{"regex":"LLD-(?:AL[01]0|L[23]1|TL10)[);/ ]","model":"Honor 9 Lite"},{"regex":"LLD-AL[23]0[);/ ]","model":"Honor 9i"},{"regex":"HLK-AL00[);/ ]","model":"Honor 9X"},{"regex":"HLK-AL10[);/ ]","model":"Honor 9X Pro"},{"regex":"CAM-UL00[);/ ]","model":"Honor Holly 3"},{"regex":"TRT-AL00[);/ ]","model":"Honor Holly 4 Plus"},{"regex":"NTS-AL00[);/ ]","model":"Honor Magic"},{"regex":"TNY-[AT]L00[);/ ]","model":"Honor Magic 2"},{"regex":"RVL-AL09[);/ ]","model":"Honor Note 10"},{"regex":"EDI-AL10[);/ ]","model":"Honor Note 8"},{"regex":"VKY-TL00[);/ ]","model":"Honor P10 Plus"},{"regex":"VOG-AL00[);/ ]","model":"Honor P30 Pro"},{"regex":"ANA-AN00[);/ ]","model":"Honor P40"},{"regex":"COR-(?:AL[01]0|L29|TL10)[);/ ]","model":"Honor Play"},{"regex":"ASK-AL00x[);/ ]","model":"Honor Play 3"},{"regex":"KSA-AL10[);/ ]","model":"Honor Play 3E"},{"regex":"CHM-[CUT]L00[HM]?[);/ ]","model":"Honor Play 4C"},{"regex":"AKA-AL10[);/ ]","model":"Honor Play 4T"},{"regex":"DUA-[TA]L00[);/ ]","model":"Honor Play 7"},{"regex":"JAT-[AT]L00[);/ ]","model":"Honor Play 8A"},{"regex":"MOA-AL00[);/ ]","model":"Honor Play 9A"},{"regex":"BKL-(?:AL00|AL20|AL30|L09|TL10)[);/ ]","model":"Honor V10"},{"regex":"PCT-[TA]L10[);/ ]","model":"Honor V20"},{"regex":"KNT-(?:AL[12]0|[TU]L10)[);/ ]","model":"Honor V8"},{"regex":"DUK-AL20[);/ ]","model":"Honor V9"},{"regex":"JMM-[AT]L[01]0[);/ ]","model":"Honor V9 Play"},{"regex":"BKL-L04[);/ ]","model":"Honor View 10"},{"regex":"PCT-L29[);/ ]","model":"Honor View 20"},{"regex":"OXF-AN00[);/ ]","model":"Honor View 30"},{"regex":"OXF-AN10[);/ ]","model":"Honor View 30 Pro"},{"regex":"(?:Honor_|HW-)?SCL-L(01|32)(?:_TD)?[);/ ]","model":"Honor Y6"},{"regex":"(?:Honor_|HW-)?LYO-L21[);/ ]","model":"Honor Y6 II Compact"},{"regex":"U8500[);/ ]","model":"Ideos X2"},{"regex":"U8510[);/ ]","model":"Ideos X3"},{"regex":"U8800[);/ ]","model":"Ideos X5"},{"regex":"POT-AL10[);/ ]","model":"Maimang 8"},{"regex":"ALP-(?:[TA]L00|L[02]9)[);/ ]","model":"Mate 10"},{"regex":"RNE-(?:AL00|L(?:01|03|21|23))[);/ ]","model":"Mate 10 Lite"},{"regex":"BLA-(?:A09|L[02]9|[TA]L00)[);/ ]","model":"Mate 10 Pro"},{"regex":"HMA-(?:[AT]L00|L[02]9)[);/ ]","model":"Mate 20"},{"regex":"SNE-(?:AL00|LX[0-3])[);/ ]","model":"Mate 20 Lite"},{"regex":"LYA-(?:AL[01]0|L[02]9|L0C|TL00)[);/ ]","model":"Mate 20 Pro"},{"regex":"LYA-AL00P[);/ ]","model":"Mate 20 RS"},{"regex":"EVR-(?:[TA]L00|L29|N29|AN00)[);/ ]","model":"Mate 20 X"},{"regex":"TAS-([AT]L00|L29)[);/ ]","model":"Mate 30"},{"regex":"TAS-AN00[);/ ]","model":"Mate 30 5G"},{"regex":"SPN-AL00[);/ ]","model":"Mate 30 Lite"},{"regex":"LIO-(?:[TA]L00|L29|AN00)[);/ ]","model":"Mate 30 Pro"},{"regex":"NXT-(?:AL10|L29)[);/ ]","model":"Mate 8"},{"regex":"MHA-(?:L[02]9|[AT]L00)[);/ ]","model":"Mate 9"},{"regex":"BLL-L23[);/ ]","model":"Mate 9 Lite"},{"regex":"LON-(?:AL00|L29)[);/ ]","model":"Mate 9 Pro"},{"regex":"NEO-AL00[);/ ]","model":"Mate RS"},{"regex":"NEO-L29[);/ ]","model":"Mate RS Porsche Design"},{"regex":"CRR-(?:L09|UL00)[);/ ]","model":"Mate S"},{"regex":"BND-L34[);/ ]","model":"Mate SE"},{"regex":"(CAZ-(?:AL[01]0|TL[12]0)|CAN-L[01][1-3])[);/ ]","model":"Nova"},{"regex":"PIC-(?:[AT]L00|LX9)[);/ ]","model":"Nova 2"},{"regex":"BAC-(?:L01|TL00)[);/ ]","model":"Nova 2 Plus"},{"regex":"BAC-(?:AL00|L2[12])[);/ ]","model":"Nova 2 Plus Dual SIM"},{"regex":"RNE-L[02]2[);/ ]","model":"Nova 2I"},{"regex":"HWI-[AT]L00[);/ ]","model":"Nova 2S"},{"regex":"PAR-(?:[AT]L00|LX[19]|TL20)[);/ ]","model":"Nova 3"},{"regex":"ANE-AL00[);/ ]","model":"Nova 3e"},{"regex":"INE-(?:AL00|LX1r|LX[12]|TL00)[);/ ]","model":"Nova 3i"},{"regex":"VCE-(L22|[AT]L00)[);/ ]","model":"Nova 4"},{"regex":"MAR-AL00[);/ ]","model":"Nova 4e"},{"regex":"SEA-AL00[);/ ]","model":"Nova 5"},{"regex":"SEA-AL10[);/ ]","model":"Nova 5 Pro"},{"regex":"GLK-[AT]L00","model":"Nova 5i"},{"regex":"WLZ-AL10[);/ ]","model":"Nova 6"},{"regex":"WLZ-AN00[);/ ]","model":"Nova 6 5G"},{"regex":"JNY-AL10[);/ ]","model":"Nova 6 SE"},{"regex":"JEF-[AT]N00[);/ ]","model":"Nova 7 5G"},{"regex":"JER-[AT]N10[);/ ]","model":"Nova 7 Pro 5G"},{"regex":"CDY-[AT]N00[);/ ]","model":"Nova 7 SE 5G"},{"regex":"JNY-LX2[);/ ]","model":"Nova 7i"},{"regex":"DIG-L01[);/ ]","model":"Nova Smart"},{"regex":"WAS-AL00[);/ ]","model":"Nova Youth"},{"regex":"FIG-L(?:A1|X[123])[);/ ]","model":"P smart"},{"regex":"POT-(LX(?:[13]|2J)|AL00)[);/ ]","model":"P smart (2019)"},{"regex":"STK-LX1[);/ ]","model":"P smart Z"},{"regex":"VTR-(?:L[02]9|AL00|TL00)[);/ ]","model":"P10"},{"regex":"WAS-(?:L(?:X1|X1A|X2|X2J|X3|03T)|TL10)[);/ ]","model":"P10 Lite"},{"regex":"VKY-(?:AL00|L09|L29)[);/ ]","model":"P10 Plus"},{"regex":"BAC-L[02]3[);/ ]","model":"P10 Selfie"},{"regex":"EML-(?:[TA]L00|L[02]9)[);/ ]","model":"P20"},{"regex":"ANE-(?:LX[123]|TL00)[);/ ]","model":"P20 Lite"},{"regex":"(CLT-(?:AL0[01]|TL0[01]|L(?:04|[02]9))|HW-01K)[);/ ]","model":"P20 Pro"},{"regex":"(ELE-L(?:04|09|29)|ELE-[AT]L00)[);/ ]","model":"P30"},{"regex":"(MAR-(?:LX(1[BM]|2)|TL00)|NIC-LX1A)[);/ ]","model":"P30 Lite"},{"regex":"MAR-LX[13]A[);/ ]","model":"P30 Lite Dual SIM"},{"regex":"VOG-AL10[);/ ]","model":"P30 Pro"},{"regex":"VOG-(?:L(?:04|09|29)|TL00)[);/ ]","model":"P30 Pro"},{"regex":"JNY-LX1[);/ ]","model":"P40 Lite"},{"regex":"ELS-[AT]N00[);/ ]","model":"P40 Pro"},{"regex":"GRA-(?:L09|UL00)[);/ ]","model":"P8"},{"regex":"(ALE-L(?:02|21|23)|ALE-UL00|ALE-TL00)[);/ ]","model":"P8 Lite (2015)"},{"regex":"(PRA-L(?:A1|X2|X1|X3)|hi6210sft)[);/ ]","model":"P8 Lite (2017)"},{"regex":"EVA-(?:AL[10]0|L[012]9|[TCD]L00)[);/ ]","model":"P9"},{"regex":"VNS-L(?:[23]1|62)[);/ ]","model":"P9 Lite"},{"regex":"SLA-L(?:02|03|22|23)[);/ ]","model":"P9 Lite Mini"},{"regex":"DIG-L(?:03|23)[);/ ]","model":"P9 Lite Smart"},{"regex":"VIE-(?:AL10|L[02]9)[);/ ]","model":"P9 Plus"},{"regex":"ATH-UL0[16][);/ ]","model":"ShotX"},{"regex":"U(8230|8661|8667)[);/ ]","model":"U$1"},{"regex":"ARS-([AT]L00|L22)[);/ ]","model":"Y Max"},{"regex":"CRO-(?:L[02]2|U00)[);/ ]","model":"Y3 (2017)"},{"regex":"CAG-L[02]2[);/ ]","model":"Y3 (2018)"},{"regex":"Bucare Y330-U05[);/ ]","model":"Y330-U05"},{"regex":"LUA-(U22|L2[12]|U03)[);/ ]","model":"Y3II"},{"regex":"MYA-(?:L(?:02|03|2[23])|U29)[);/ ]","model":"Y5 (2017)"},{"regex":"DRA-L(?:01|03|21|23|X3)[);/ ]","model":"Y5 (2018)"},{"regex":"AMN-LX[129][);/ ]","model":"Y5 (2019)"},{"regex":"DRA-LX5[);/ ]","model":"Y5 lite"},{"regex":"CRO-L[02]3[);/ ]","model":"Y5 Lite (2017)"},{"regex":"CAG-L[02]3[);/ ]","model":"Y5 Lite (2018)"},{"regex":"DRA-(?:LX2|[AT]L00)[);/ ]","model":"Y5 Prime (2018)"},{"regex":"MYA-L13[);/ ]","model":"Y5 Pro (2017)"},{"regex":"CUN-(?:L(?:0[123]|2[123]|33)|U29)[);/ ]","model":"Y5II"},{"regex":"SCC-U21[);/ ]","model":"Y6"},{"regex":"MYA-L11[);/ ]","model":"Y6 (2016)"},{"regex":"MYA-(L41|AL10)[);/ ]","model":"Y6 (2017)"},{"regex":"ATU-L(?:11|21|22|X3)[);/ ]","model":"Y6 (2018)"},{"regex":"MRD-L(?:X1[F]?|X3)[);/ ]","model":"Y6 (2019)"},{"regex":"ATU-L(?:31|42)[);/ ]","model":"Y6 Prime (2018)"},{"regex":"TIT-(?:AL00|L01|U02)[);/ ]","model":"Y6 Pro"},{"regex":"MRD-LX2[);/ ]","model":"Y6 Pro (2019)"},{"regex":"Y625-U03[);/ ]","model":"Y625"},{"regex":"Y635-L0[123][);/ ]","model":"Y635"},{"regex":"Y635-L21[);/ ]","model":"Y635 Dual SIM"},{"regex":"CAM-L(?:03|21|23|32)[);/ ]","model":"Y6II"},{"regex":"TRT-LX[123][);/ ]","model":"Y7 (2017)"},{"regex":"LDN-L(?:01|X3)[);/ ]","model":"Y7 (2018)"},{"regex":"DUB-(?:LX[13]|TL00)[);/ ]","model":"Y7 (2019)"},{"regex":"(LDN-(?:AL00|L21)|TRT-TL10)[);/ ]","model":"Y7 Prime"},{"regex":"(LDN-(?:LX2|TL10)|TRT-(?:L21A|L53))[);/ ]","model":"Y7 Prime (2018)"},{"regex":"DUB-(?:LX2|AL00)[);/ ]","model":"Y7 Pro (2019)"},{"regex":"DUB-AL20[);/ ]","model":"Y7 Pro (2019)"},{"regex":"FLA-(LX[123]|AL20|TL10)[);/ ]","model":"Y9 (2018)"},{"regex":"JKM-(?:[TA]L00|LX[123])[);/ ]","model":"Y9 (2019)"},{"regex":"STK-(L2[12]|LX3)[);/ ]","model":"Y9 Prime (2019)"},{"regex":"HDN-[LW]09[);/ ]","model":"Honor Water Play 10.1","device":"tablet"},{"regex":"JDN-(?:AL00|W09)[);/ ]","model":"Honor Pad 2","device":"tablet"},{"regex":"MON-(W|AL)19[);/ ]","device":"tablet","model":"MatePad C5 8"},{"regex":"BZA-W00[);/ ]","device":"tablet","model":"C3 9.6"},{"regex":"MRX-(AL09|W09)[);/ ]","device":"tablet","model":"MatePad Pro"},{"regex":"CMR-(?:AL[01]9|W09)[);/ ]","device":"tablet","model":"MediaPad M5 10.8"},{"regex":"SCM-AL09[);/ ]","device":"tablet","model":"MediaPad M5 Pro"},{"regex":"GEM-70[1-3]L[);/ ]","device":"tablet","model":"MediaPad X2"},{"regex":"(?:JDN2-(:?[WL]09|AL00)|BAH2-(?:AL[01]0|L09|W[01]9))[);/ ]","device":"tablet","model":"MediaPad M5 Lite"},{"regex":"SHT-(?:AL|W)09[);/ ]","device":"tablet","model":"MediaPad M5 8.4"},{"regex":"VRD-(?:(AL|W)09|AL10|W10)[);/ ]","device":"tablet","model":"MediaPad M6 8.4"},{"regex":"SCM-W09[);/ ]","device":"tablet","model":"MediaPad M6 10"},{"regex":"BTV-W09[);/ ]","device":"tablet","model":"MediaPad M3 8"},{"regex":"(BAH-W09|CPN-(?:L|W)09|CPN-AL00)[);/ ]","device":"tablet","model":"MediaPad M3 Lite"},{"regex":"(BAH-(?:L09|AL00)|BAH3-W09)[);/ ]","device":"tablet","model":"MediaPad M3 Lite 10"},{"regex":"BTV-DL09","device":"tablet","model":"MediaPad M3"},{"regex":"(AGS2-AL00|JDN2-W09)HN[);/ ]","device":"tablet","model":"Honor Tab 5"},{"regex":"AGS2-(?:[LW]09|L03)[);/ ]","device":"tablet","model":"MediaPad T5 10"},{"regex":"AGS-(?:L0[39]|W09)[);/ ]","device":"tablet","model":"MediaPad T3 10"},{"regex":"(KOB-(?:L|W)09|BZK-W00)[);/ ]","device":"tablet","model":"MediaPad T3 8"},{"regex":"BG2-(?:U0[13]|W09)[);/ ]","device":"tablet","model":"MediaPad T3 7"},{"regex":"BGO-L03[);/ ]","device":"tablet","model":"MediaPad T2 7.0"},{"regex":"(?:BGO-DL09|PLE-70[13]L)[);/ ]","device":"tablet","model":"MediaPad T2 7.0 Pro"},{"regex":"JDN-L01[);/ ]","device":"tablet","model":"MediaPad T2 8.0 Pro"},{"regex":"FDR-(A01[LW]|A03L)[);/ ]","device":"tablet","model":"MediaPad T2 10.0 Pro"},{"regex":"T1-(A21[LW]|A23L)[);/ ]","device":"tablet","model":"MediaPad T1 10"},{"regex":"T1-701u[);/ ]","device":"tablet","model":"MediaPad T1 7"},{"regex":"T1-823L[);/ ]","device":"tablet","model":"MediaPad T1 8"},{"regex":"AGS2-AL00[);/ ]","device":"tablet","model":"Enjoy Tablet 10.1"},{"regex":"BZT-(W09|AL10)[);/ ]","device":"tablet","model":"MediaPad C5 10.1"},{"regex":"LEO-BX9[);/ ]","device":"wearable","model":"Smart Watch 2"},{"regex":"(MediaPad[^/;]*) Build","device":"tablet","model":"$1"},{"regex":"Ideos([^;/]*) Build","model":"Ideos$1"},{"regex":"(?:HUAWEI )?MT([0-9]+)","device":"phablet","model":"Ascend Mate $1"},{"regex":"Huawei[ _\\\\-]?([^/;]*) Build","model":"$1"},{"regex":"(?:HW-)?Huawei(?:/1\\\\.0/0?(?:Huawei))?[_\\\\- /]?([a-z0-9\\\\-_]+)","model":"$1"},{"regex":"Huawei; ([a-z0-9 \\\\-]+)","model":"$1"}]}'), gx = {
        regex: "Hyundai|Ultra (?:Active|Air|Charm|Dream|Energy|Latitude|Link|Live|Shadow|Shine|Storm|Style|Sync|Trend|Vision|Wave)|G(24027|2552[34])K|W25042L",
        device: "smartphone",
        models: [
            {
                regex: "Ultra (Active|Air|Charm|Dream|Energy Lite|Energy Plus|Energy|Latitude|Link|Live II|Live|Shadow|Shine|Storm|Style|Sync|Trend|Vision|Wave)",
                model: "Ultra $1"
            },
            {
                regex: "G25523K",
                model: "Eternity G23"
            },
            {
                regex: "G25524K",
                model: "Eternity G24"
            },
            {
                regex: "G24027K",
                model: "Eternity G27"
            },
            {
                regex: "W25042L",
                model: "Eternity W42"
            },
            {
                regex: "Hyundai ([^;/]+) Build",
                model: "$1",
                device: "tablet"
            },
            {
                regex: "Hyundai[ _\\-]?([a-z0-9_-]+)",
                model: "$1",
                device: "tablet"
            }
        ]
    }, xx = {
        regex: "iBall[ _]([^;/)]+)[ _]Build|(Snap_4G2)[;)\\ ]",
        device: "tablet",
        models: [
            {
                regex: "(Snap_4G2)[;)\\ ]",
                model: "$1"
            },
            {
                regex: "iBall[ _]([^;/)]+)[ _]Build",
                model: "$1"
            }
        ]
    }, cx = {
        regex: "iRola ([^/;]+) Build|(DX758|DX752|DX752|DX758[ _]?Pro) Build",
        device: "tablet",
        models: [
            {
                regex: "DX758[ _]?Pro",
                model: "DX758 Pro"
            },
            {
                regex: "(DX758|DX752)",
                model: "$1"
            },
            {
                regex: "iRola ([^/;]+) Build",
                model: "$1"
            }
        ]
    }, ux = {
        regex: "iRULU[ _](X11|V[34])[;)\\ ]",
        device: "tablet",
        model: "$1"
    }, Sx = {
        regex: "TZ(1(?:00|50|84|65|7[035-89]|9[578])|49|7(?:1[2467]|2[01567]|37|4[27]|5[23457]|62|72|7[17]|8[1]|9[47])|8(?:[34]1|5[3-8]|6[45]|7[2478]|8[1-5]|9[0127])|96[0-9])|TZ(?:one|art|HIT|81L)|(SP(?:0[56]|2[01]|4[1-36]|40[12]|45[345]|50|51[0147]|531|55[012]))[;)\\ ]",
        device: "tablet",
        models: [
            {
                regex: "(TZ(?:[0-9]+)|TZ(?:one|art|HIT|81L))[;)\\ ]",
                model: "$1"
            },
            {
                regex: "(SP(?:0[56]|2[01]|4[1-36]|40[12]|45[345]|50|51[0147]|531|55[012]))[;)\\ ]",
                device: "smartphone",
                model: "$1"
            }
        ]
    }, Ax = {
        regex: "AUXUS ([^/;]+) Build",
        device: "smartphone",
        models: [
            {
                regex: "AUXUS (Core[^/;]+) Build",
                device: "tablet",
                model: "$1"
            },
            {
                regex: "AUXUS ([^/;]+) Build",
                model: "$1"
            }
        ]
    }, px = {
        regex: "iHunt|One_ Love_|TITAN_P11000_PRO|Like_(3|4U|3_Pro)|X300 Elite|S10_Tank_2019|S60_Discovery_2019|AlienXLite2020",
        device: "smartphone",
        models: [
            {
                regex: "iHunt_Like",
                model: "Like"
            },
            {
                regex: "S10_Tank_2019",
                model: "S10 Tank 2019"
            },
            {
                regex: "One_ Love_",
                model: "One Love"
            },
            {
                regex: "TITAN_P11000_PRO",
                model: "Titan P11000 Pro"
            },
            {
                regex: "Like_3_Pro",
                model: "Like 3 Pro"
            },
            {
                regex: "Like_3",
                model: "Like 3"
            },
            {
                regex: "Like_4U",
                model: "Like 4U"
            },
            {
                regex: "X300 Elite",
                model: "X300 Elite"
            },
            {
                regex: "S60_Discovery_2019",
                model: "S60 Discovery 2019"
            },
            {
                regex: "AlienXLite2020",
                model: "Alien X Lite 2020"
            }
        ]
    }, vx = {
        regex: "IconBIT|NT-(3506M|0704S|0909T|1009T|10[01]1T|1017T|3601P/3602P|3603P|3702S|3805C|3905T|3701S|0701S|0805C|0902S|370[23]M)|XDS[89]4K",
        device: "tablet",
        models: [
            {
                regex: "NT-3506M",
                device: "smartphone",
                model: "NetTAB Mercury Quad FHD"
            },
            {
                regex: "NT-0704S",
                model: "NetTAB Sky LE"
            },
            {
                regex: "NT-0909T",
                model: "NetTAB Thor IZ"
            },
            {
                regex: "NT-1009T",
                model: "NetTAB Thor quad II"
            },
            {
                regex: "NT-10[01]1T",
                model: "NetTAB Thor LE"
            },
            {
                regex: "NT-1017T",
                model: "NetTAB Thor 3G quad"
            },
            {
                regex: "NT-3601P/3602P",
                model: "NetTAB Pocket 3G"
            },
            {
                regex: "NT-3603P",
                model: "NetTAB Pocket 3G Slim"
            },
            {
                regex: "NT-3702S",
                model: "NetTAB Sky HD 3G"
            },
            {
                regex: "NT-3805C",
                model: "NetTAB Skat 3G quad"
            },
            {
                regex: "NT-3701S",
                model: "NetTAB Sky 3G duo"
            },
            {
                regex: "NT-3905T",
                model: "NetTAB Thor ZX 3G"
            },
            {
                regex: "NT-0701S",
                model: "NetTAB Sky net"
            },
            {
                regex: "NT-0805C",
                model: "NetTAB Skat MX"
            },
            {
                regex: "NT-0902S",
                model: "NetTAB Space quad RX"
            },
            {
                regex: "NT-3702M",
                model: "NetTAB Matrix 3G duo"
            },
            {
                regex: "NT-3703M",
                model: "NetTAB Matrix 3GT"
            },
            {
                regex: "(?:iconBIT )?(Movie Ultra HD 4K|XDS[89]4K)",
                model: "$1",
                device: "tv"
            }
        ]
    }, Mx = {
        regex: "(LYF[ _])?LS-[456][0-9]{3}|LYF/[^/]+/",
        device: "smartphone",
        models: [
            {
                regex: "LS-4004",
                model: "Flame 2"
            },
            {
                regex: "LS-5501",
                model: "Earth 1"
            },
            {
                regex: "LS-5021",
                model: "Earth 2"
            },
            {
                regex: "LS-5505",
                model: "Water F1"
            },
            {
                regex: "LS-4503",
                model: "Flame LS-4503"
            },
            {
                regex: "LS-4001",
                model: "Flame 3"
            },
            {
                regex: "LS-4003",
                model: "Flame 4"
            },
            {
                regex: "LS-4002",
                model: "Flame 5"
            },
            {
                regex: "LS-4005",
                model: "Flame 6"
            },
            {
                regex: "(LYF[ _])?LS-4006",
                model: "Flame 7"
            },
            {
                regex: "LS-4008",
                model: "Flame 7S"
            },
            {
                regex: "LS-450[58]",
                model: "Flame 8"
            },
            {
                regex: "LS-5002",
                model: "Water 1"
            },
            {
                regex: "LS-5005",
                model: "Water 4"
            },
            {
                regex: "LS-5006",
                model: "Water 6"
            },
            {
                regex: "LS-5008",
                model: "Water 2"
            },
            {
                regex: "LS-5009",
                model: "Wind 6"
            },
            {
                regex: "LS-5013",
                model: "Wind 5"
            },
            {
                regex: "LS-5014",
                model: "Wind 4"
            },
            {
                regex: "LS-5010",
                model: "Wind 1"
            },
            {
                regex: "LS-5015",
                model: "Water 8"
            },
            {
                regex: "LS-5016",
                model: "Wind 7"
            },
            {
                regex: "LS-5504",
                model: "Water 7"
            },
            {
                regex: "LS-5507",
                model: "Water 7S"
            },
            {
                regex: "LS-5017",
                model: "Water 11"
            },
            {
                regex: "LS-5018",
                model: "Wind 4S"
            },
            {
                regex: "LS-5020",
                model: "Water 10"
            },
            {
                regex: "LS-5201",
                model: "Water F1S"
            },
            {
                regex: "LS-5502",
                model: "Wind 3"
            },
            {
                regex: "LS-5503",
                model: "Water 3"
            },
            {
                regex: "LS-5506",
                model: "Water 9"
            },
            {
                regex: "LS-6001",
                model: "Wind 2"
            },
            {
                regex: "LYF/([^/]+)/",
                model: "$1"
            }
        ]
    }, Px = {
        regex: "NEO(SR620|SC600)[;)/ ]",
        device: "smartphone",
        model: "Neo $1"
    }, Tx = {
        regex: "M4 SS[0-9]{4}(?:-R)?|M4_B[23]",
        device: "smartphone",
        models: [
            {
                regex: "SS1050",
                model: "Joy"
            },
            {
                regex: "SS1060",
                model: "Live"
            },
            {
                regex: "SS1070",
                model: "Sense"
            },
            {
                regex: "SS1080",
                model: "Max One"
            },
            {
                regex: "SS1090",
                model: "Max Ultra"
            },
            {
                regex: "SS4020",
                model: "Play"
            },
            {
                regex: "SS4040",
                model: "In Touch"
            },
            {
                regex: "SS4045",
                model: "Style"
            },
            {
                regex: "SS4345",
                model: "Soul Mini"
            },
            {
                regex: "SS4350",
                model: "Soul"
            },
            {
                regex: "SS4445",
                model: "Style Access"
            },
            {
                regex: "SS4450",
                model: "Share"
            },
            {
                regex: "SS4451",
                model: "Believe"
            },
            {
                regex: "SS4452",
                model: "Dream"
            },
            {
                regex: "SS4453",
                model: "Inspiration"
            },
            {
                regex: "SS4455",
                model: "Excite"
            },
            {
                regex: "SS4456",
                model: "Evolution"
            },
            {
                regex: "SS4457-R",
                model: "Ever"
            },
            {
                regex: "SS4457",
                model: "Elegance"
            },
            {
                regex: "SS4458-R",
                model: "Feel Plus"
            },
            {
                regex: "SS4458",
                model: "Attitude"
            },
            {
                regex: "M4_B([23])",
                model: "B$1"
            }
        ]
    }, hx = {
        regex: "iLA[-_ ](Silk|X)[);/ ]",
        device: "smartphone",
        model: "$1"
    }, bx = {
        regex: "iNew|(?:V7A|V3 Plus|V3-?E|V3C)(?: Build|[;/\\)])",
        device: "smartphone",
        models: [
            {
                regex: "V3C(?: Build|[;/\\)])",
                model: "V3C"
            },
            {
                regex: "V3-?E(?: Build|[;/\\)])",
                model: "V3-E"
            },
            {
                regex: "V3 Plus(?: Build|[;/\\)])",
                model: "V3 Plus"
            },
            {
                regex: "V7A(?: Build|[;/\\)])",
                model: "V7A"
            },
            {
                regex: "iNew[ -_]([^;/]+) Build",
                model: "$1"
            }
        ]
    }, Lx = {
        regex: "Kylin[ _]5.[05]",
        device: "smartphone",
        models: [
            {
                regex: "Kylin_5.0S",
                model: "Kylin 5.0S"
            },
            {
                regex: "Kylin 5.0",
                model: "Kylin 5.0"
            },
            {
                regex: "Kylin 5.5",
                model: "Kylin 5.5"
            }
        ]
    }, _x = {
        regex: "Infinix",
        device: "smartphone",
        models: [
            {
                regex: "Infinix[ _-]X260",
                model: "Buzz"
            },
            {
                regex: "Infinix[ _-]X502",
                model: "Alpha Marvel"
            },
            {
                regex: "Infinix[ _-]X570",
                model: "Alpha"
            },
            {
                regex: "Infinix[ _-]X350",
                model: "Surf Smart"
            },
            {
                regex: "Infinix[ _-]X351",
                model: "Surf Smart 3G"
            },
            {
                regex: "Infinix[ _-]X352",
                model: "Surf Smart 2"
            },
            {
                regex: "Infinix[ _-]X403",
                model: "Surf Spice"
            },
            {
                regex: "Infinix[ _-]X503",
                model: "Surf Bravo"
            },
            {
                regex: "Infinix[ _-]X511",
                model: "Surf Noir"
            },
            {
                regex: "Infinix[ _-]X400",
                model: "Race"
            },
            {
                regex: "Infinix[ _-]X401",
                model: "Race Lite"
            },
            {
                regex: "Infinix[ _-]X450",
                model: "Race Bolt"
            },
            {
                regex: "Infinix[ _-]X451",
                model: "Race Bolt Q"
            },
            {
                regex: "Infinix[ _-]X454",
                model: "Race Bolt 2"
            },
            {
                regex: "Infinix[ _-]X500",
                model: "Race Eagle"
            },
            {
                regex: "Infinix[ _-]X501",
                model: "Race Jet"
            },
            {
                regex: "Infinix[ _-]X506",
                model: "Zero"
            },
            {
                regex: "Infinix[ _-]X509",
                model: "Zero 2"
            },
            {
                regex: "Infinix[ _-]X552",
                model: "Zero 3"
            },
            {
                regex: "Infinix[ _-]X555",
                model: "Zero 4"
            },
            {
                regex: "Infinix[ _-]X(?:574|602)",
                model: "Zero 4 Plus"
            },
            {
                regex: "Infinix[ _-]X603",
                model: "Zero 5"
            },
            {
                regex: "Infinix[ _-]X603B",
                model: "Zero 5 Pro"
            },
            {
                regex: "Infinix[ _-]X507",
                model: "Hot"
            },
            {
                regex: "Infinix[ _-]X510",
                model: "Hot 2"
            },
            {
                regex: "Infinix[ _-]X55[34]",
                model: "Hot 3"
            },
            {
                regex: "Infinix[ _-]X521",
                model: "Hot S"
            },
            {
                regex: "Infinix[ _-]X522",
                model: "Hot S2"
            },
            {
                regex: "Infinix[ _-]X557",
                model: "Hot 4"
            },
            {
                regex: "Infinix[ _-]X556",
                model: "Hot 4 Pro"
            },
            {
                regex: "Infinix[ _-]X559c",
                model: "Hot 5"
            },
            {
                regex: "Infinix[ _-]X559",
                model: "Hot 5 Lite"
            },
            {
                regex: "Infinix[ _-]X606[BC]?",
                model: "Hot 6"
            },
            {
                regex: "Infinix[ _-]X608",
                model: "Hot 6 Pro"
            },
            {
                regex: "Infinix[ _-]X573B?",
                model: "Hot S3"
            },
            {
                regex: "Infinix[ _-]X556",
                model: "Hot 4 Pro"
            },
            {
                regex: "Infinix[ _-]X5010",
                model: "Smart"
            },
            {
                regex: "Infinix[ _-]X5515F",
                model: "Smart 2"
            },
            {
                regex: "Infinix[ _-]X5514D",
                model: "Smart 2 Pro"
            },
            {
                regex: "Infinix[ _-]X551",
                model: "Hot Note",
                device: "phablet"
            },
            {
                regex: "Infinix[ _-]X600",
                model: "Note 2",
                device: "phablet"
            },
            {
                regex: "Infinix[ _-]X601",
                model: "Note 3",
                device: "phablet"
            },
            {
                regex: "Infinix[ _-]X572",
                model: "Note 4",
                device: "phablet"
            },
            {
                regex: "Infinix[ _-]X571",
                model: "Note 4 Pro",
                device: "phablet"
            },
            {
                regex: "Infinix[ _-]X604",
                model: "Note 5",
                device: "phablet"
            },
            {
                regex: "Infinix HOT ([a-z]?[1-6])( (?:Lite|Plus|Pro))?",
                model: "Hot $1$2"
            },
            {
                regex: "Infinix[ _-](X[78]00)",
                device: "tablet",
                model: "$1"
            },
            {
                regex: "Infinix[ _-](X\\d+)",
                model: "$1"
            },
            {
                regex: "Infinix[ _-]([a-z0-9_\\-]+)",
                model: "$1"
            }
        ]
    }, Gx = {
        regex: "IF(9001|9007|9021|9035|9031)[);/ ]",
        device: "smartphone",
        models: [
            {
                regex: "IF9001",
                model: "Turbo 5"
            },
            {
                regex: "IF9007",
                model: "A3"
            },
            {
                regex: "IF9021",
                model: "Turbo 5 Plus"
            },
            {
                regex: "IF9035",
                model: "A2"
            },
            {
                regex: "IF9031",
                model: "Vision 3"
            }
        ]
    }, Bx = {
        regex: "InnJoo",
        device: "smartphone",
        models: [
            {
                regex: "InnJoo[ _]X",
                model: "X"
            }
        ]
    }, Nx = {
        regex: "intki[ _]([^/;]*)[ _]Build",
        device: "smartphone",
        model: "$1"
    }, Cx = {
        regex: "INNO([a-z0-9]+)",
        device: "feature phone",
        model: "INNO$1"
    }, Ex = {
        regex: "NS-(P11A8100|P10A8100|P10A6100|P16AT08|P16AT10|P16AT785HD|P08A7100|P10A7100)[);/ ]|AFTEAMR311|AFTJMST12",
        device: "tablet",
        models: [
            {
                regex: "NS-P11A8100",
                model: '11.6"'
            },
            {
                regex: "NS-(P10A6100|P16AT10)",
                model: 'Flex 10.1"'
            },
            {
                regex: "NS-P16AT08",
                model: 'Flex 8"'
            },
            {
                regex: "NS-P08A7100",
                model: '8"'
            },
            {
                regex: "NS-(P10A8100|P10A7100)",
                model: '10.1"'
            },
            {
                regex: "NS-P16AT785HD",
                model: 'Flex Elite 7.85"'
            },
            {
                regex: "AFTEAMR311",
                model: "HD (2018)",
                device: "tv"
            },
            {
                regex: "AFTJMST12",
                model: "4K (2018)",
                device: "tv"
            }
        ]
    }, Ox = {
        regex: "INQ[/ ]",
        device: "feature phone",
        models: [
            {
                regex: "INQ/([a-z0-9\\-]+)",
                model: "$1"
            },
            {
                regex: "INQ ([^;/]+) Build",
                model: "$1",
                device: "smartphone"
            }
        ]
    }, wx = {
        regex: "Intex|(Aqua|Cloud[ _][XY][0-9]{1}|Cloud (?:Fame|Glory) 4G)",
        device: "smartphone",
        models: [
            {
                regex: "Intex[ _]([^/;]*)[ _]Build",
                model: "$1"
            },
            {
                regex: "(Cloud (?:Fame|Glory) 4G)",
                model: "$1"
            },
            {
                regex: "(Aqua|Cloud)[ _\\.]([^/;\\)]+)(?:[ _]Build|(?<!Build)/|\\))",
                model: "$1 $2"
            },
            {
                regex: "Intex[ _]([a-z0-9_+\\-]+)",
                model: "$1"
            }
        ]
    }, fx = {
        regex: "iKoMo ([a-z0-9]+)",
        device: "feature phone",
        model: "$1"
    }, yx = {
        regex: "iOCEAN|M6752|W180|X7[ _]?S|X8 mini",
        device: "smartphone",
        models: [
            {
                regex: "X7S-T",
                model: "X7S-T"
            },
            {
                regex: "X8 mini pro",
                model: "X8 Mini Pro"
            },
            {
                regex: "X8 mini",
                model: "X8 Mini"
            },
            {
                regex: "X7[ _]?S",
                model: "X7S Elite"
            },
            {
                regex: "(M6752|W180) Build",
                model: "$1"
            },
            {
                regex: "iOCEAN[ _\\-]?([^/;]+) Build",
                model: "$1"
            },
            {
                regex: "iOCEAN[ _\\-]?([^);/ ]+)",
                model: "$1"
            }
        ]
    }, Xx = {
        regex: "733TPC",
        device: "smartphone",
        models: [
            {
                regex: "733TPC",
                device: "tablet",
                model: "733TPC"
            }
        ]
    }, $x = {
        regex: "(?:Impression[ _\\-]?([^/;]+)|A502|I10\\-LE|ImPad[ _]?(.*)|ImSmart[ _]?(.*)) Build",
        device: "tablet",
        models: [
            {
                regex: "(A502)",
                model: "$1",
                device: "smartphone"
            },
            {
                regex: "ImSmart[ _]?(.*) Build",
                model: "ImSmart $1",
                device: "smartphone"
            },
            {
                regex: "ImPad[ _]?(.*) Build",
                model: "ImPad $1"
            },
            {
                regex: "(I10\\-LE)",
                model: "$1",
                device: "smartphone"
            },
            {
                regex: "Impression[ _\\-]?([^/;]+) Build",
                model: "$1"
            }
        ]
    }, Ix = {
        regex: "itel|iNote",
        device: "smartphone",
        models: [
            {
                regex: "iNote ([^/;]*)Build",
                model: "iNote $1"
            },
            {
                regex: "iNote_([a-z0-9\\-_]+)",
                model: "iNote $1"
            },
            {
                regex: "iTel ([^/;]*)Build",
                model: "$1"
            },
            {
                regex: "iTel[_ ]([a-z0-9\\-_]*)",
                model: "$1"
            }
        ]
    }, Fx = {
        regex: "(Mi7_HERO_(?:BETA|TAB))[);/ ]",
        device: "tablet",
        models: [
            {
                regex: "Mi7[_ ]HERO[_ ]BETA[);/ ]",
                model: "MI7 Hero Beta"
            },
            {
                regex: "Mi7[_ ]HERO[_ ]TAB[);/ ]",
                model: "MI7 Hero Tab"
            }
        ]
    }, Dx = {
        regex: "(JY-[a-z0-9]+)[);/ ]",
        device: "smartphone",
        model: "$1"
    }, Rx = {
        regex: "Jolla",
        device: "smartphone",
        model: ""
    }, Vx = {
        regex: "JUST5(-)?SPACER(s)?|COSMO[_ ](L707|L808)|BLASTER|FREEDOM[ _](C100|M303|X1)|Freedom",
        device: "smartphone",
        models: [
            {
                regex: "COSMO[_ ](L707|L808)",
                model: "Cosmo $1"
            },
            {
                regex: "FREEDOM[ _](C100|M303|X1)",
                model: "Freedom $1"
            },
            {
                regex: "Freedom",
                model: "Freedom"
            },
            {
                regex: "JUST5(-)?SPACER2s",
                model: "Spacer 2S"
            },
            {
                regex: "JUST5(-)?SPACER2",
                model: "Spacer 2"
            },
            {
                regex: "JUST5SPACER",
                model: "Spacer"
            },
            {
                regex: "BLASTER 2",
                model: "Blaster 2"
            },
            {
                regex: "BLASTER",
                model: "Blaster"
            }
        ]
    }, Ux = {
        regex: "ELEMENT Q",
        device: "smartphone",
        models: [
            {
                regex: "ELEMENT Q",
                model: "Element Q"
            }
        ]
    }, Hx = {
        regex: "KAAN[ _](N[12]|A1)[);/ ]",
        device: "smartphone",
        model: "$1"
    }, kx = {
        regex: "Kazam ([^;/)]+)( Build|\\))|Trooper_X[0-9][0-9][);/ ]|Tornado 348",
        device: "smartphone",
        models: [
            {
                regex: "Tornado 348",
                model: "Tornado 348"
            },
            {
                regex: "Trooper_X([0-9])([0-9])[);/ ]",
                model: "Trooper X$1.$2"
            },
            {
                regex: "Kazam ([^;/)]+)(?: Build|\\))",
                model: "$1"
            }
        ]
    }, Wx = {
        regex: "KENEKSI|(Hemera|Teta Dual)[);/ ]",
        device: "smartphone",
        models: [
            {
                regex: "(Hemera|Teta Dual)[);/ ]",
                model: "$1"
            },
            {
                regex: "KENEKSI[ _-]liberty",
                model: "Liberty"
            },
            {
                regex: "KENEKSI[ _-]FLASH",
                model: "Flash"
            },
            {
                regex: "KENEKSI[ _-]SUN",
                model: "Sun"
            },
            {
                regex: "KENEKSI[ _-]ZETA",
                model: "Zeta"
            },
            {
                regex: "KENEKSI[ _-]SIGMA",
                model: "Sigma"
            },
            {
                regex: "KENEKSI[ _-](Moon|Libra_Dual|Glass|Amber|Chance|Amulet|Choice|Crystal|Dream|Delta[_ ]Dual|Norma 2|Norma|Sky|Fire 2|Fire|Flame|Flora|Rock|Solo|Soul|Step|Smart|Star|Storm|Wind)",
                model: "$1"
            }
        ]
    }, Kx = {
        regex: "Kiano|Elegance_5_0|CORE 10.1 DUAL 3G|Intelect ?(7|8|10)|Slim ?Tab ?\\d+(?:[_ ]3GR?)?[);/ ]|Cavion[_ ]",
        device: "smartphone",
        models: [
            {
                regex: "Slim ?Tab ?(\\d+)(?:[_ ]3GR?)?",
                model: "Slim Tab $1",
                device: "tablet"
            },
            {
                regex: "Cavion[_ ](?:Base[_ ])?(\\d+)",
                model: "Cavion Base $1",
                device: "tablet"
            },
            {
                regex: "CORE 10.1 DUAL 3G",
                model: "CORE 10.1 DUAL 3G",
                device: "tablet"
            },
            {
                regex: "Elegance_5_0",
                model: "Elegance 5.0"
            },
            {
                regex: "(Kiano)?(Intelect|Elegance) ?(7|8|10)?",
                model: "$2 $3",
                device: "tablet"
            },
            {
                regex: "Kiano[ _]([^;/]+) Build",
                model: "$1"
            }
        ]
    }, Yx = {
        regex: "Kingsun[ _-]",
        device: "smartphone",
        models: [
            {
                regex: "Kingsun[ _-]([^;/]+) Build",
                model: "$1"
            },
            {
                regex: "Kingsun[ -]((?!Build)[a-z0-9_-]+)",
                model: "$1"
            }
        ]
    }, Qx = {
        regex: "Kocaso|M(?:729|7[357][026][hw]?|76[01236][bw]?|83[016]|8[567]0|1050s|106[012368]w?|1070|X736(?:-kit)?|X780)[);/ ]",
        device: "tablet",
        models: [
            {
                regex: "M729[);/ ]",
                model: "M729"
            },
            {
                regex: "M(7[357][026])[hw]?[);/ ]",
                model: "M$1"
            },
            {
                regex: "M(76[01236])[bw]?[);/ ]",
                model: "M$1"
            },
            {
                regex: "MX780[);/ ]",
                model: "MX780"
            },
            {
                regex: "M(83[016])[);/ ]",
                model: "M$1"
            },
            {
                regex: "M(8[567]0)[);/ ]",
                model: "M$1"
            },
            {
                regex: "M851[);/ ]",
                model: "M851"
            },
            {
                regex: "M1050S[);/ ]",
                model: "M1050s"
            },
            {
                regex: "M(106[012368])W?[);/ ]",
                model: "M$1"
            },
            {
                regex: "M1070[);/ ]",
                model: "M1070"
            },
            {
                regex: "MX736(?:-kit)?[);/ ]",
                model: "MX736"
            },
            {
                regex: "MX780[);/ ]",
                model: "MX780"
            },
            {
                regex: "Kocaso[ _\\-]?([^;/]+) Build",
                model: "$1"
            },
            {
                regex: "Kocaso[ _\\-]?([a-z0-9_-]+)",
                model: "$1"
            }
        ]
    }, Zx = {
        regex: "Kogan",
        device: "smartphone",
        models: [
            {
                regex: "Kogan[ _-]([^;/]+) Build",
                model: "$1"
            },
            {
                regex: "Kogan[ _-]([a-z0-9_-]+)",
                model: "$1"
            }
        ]
    }, zx = {
        regex: "Komu[ -]",
        device: "smartphone",
        models: [
            {
                regex: "Komu[ -]([^;/]+) Build",
                model: "$1"
            },
            {
                regex: "Komu[ -]([a-z0-9_-]+)",
                model: "$1"
            }
        ]
    }, Jx = {
        regex: "Koobee",
        device: "smartphone",
        models: [
            {
                regex: "Koobee[ _\\-]?([^;/]+) Build",
                model: "$1"
            },
            {
                regex: "Koobee[ _\\-]?([a-z0-9_-]+)",
                model: "$1"
            }
        ]
    }, qx = {
        regex: "(?:KM-)?Kumai",
        device: "smartphone",
        models: [
            {
                regex: "(?:KM-)?Kumai[ _\\-]?([^;/]+) Build",
                model: "$1"
            },
            {
                regex: "(?:KM-)?Kumai[ _\\-]?([a-z0-9_-]+)",
                model: "$1"
            }
        ]
    }, jx = {
        regex: "kddi-([a-z0-9]+)",
        device: "feature phone",
        model: "$1"
    }, e0 = {
        regex: "KODAK|IM5[);/ ]",
        device: "smartphone",
        models: [
            {
                regex: "IM5",
                model: "IM5"
            },
            {
                regex: "KODAK_SMARTWAY_((M|T)1)",
                model: "Smartway $1"
            },
            {
                regex: "SMARTWAY X1",
                model: "Smartway X1"
            },
            {
                regex: "Tablet (7|10)",
                device: "tablet",
                model: "Tablet $1"
            }
        ]
    }, r0 = {
        regex: "KOPO[ _-]",
        device: "smartphone",
        models: [
            {
                regex: "KOPO[ _\\-]?([^/;]+) Build",
                model: "$1"
            },
            {
                regex: "KOPO[ _\\-]?([^);/ ]+)",
                model: "$1"
            }
        ]
    }, o0 = {
        regex: "KORIDY[ _-]([^/;]+) Build",
        device: "smartphone",
        model: "$1"
    }, l0 = {
        regex: "NET1100",
        device: "smartphone",
        models: [
            {
                regex: "NET1100",
                model: "NET 1100"
            }
        ]
    }, d0 = {
        regex: "Kyocera|KWC-|QC-|C5120|C5170|C5155|C5215|C6730|C6750|C6522N?|C6530N|C6740|C6743|E6[89]10|KYL21|KYY23|S2151|KC-S701|S4-KC[;/) ]",
        device: "smartphone",
        models: [
            {
                regex: "C5120",
                model: "Milano"
            },
            {
                regex: "S4-KC",
                model: "One S4"
            },
            {
                regex: "C5155",
                model: "Rise"
            },
            {
                regex: "C5170",
                model: "Hydro"
            },
            {
                regex: "C5215",
                model: "Hydro EDGE"
            },
            {
                regex: "C6522N?",
                model: "Hydro XTRM"
            },
            {
                regex: "C6730",
                model: "Hydro ICON"
            },
            {
                regex: "C6750",
                model: "Hydro ELITE"
            },
            {
                regex: "C6530N",
                model: "Hydro LIFE"
            },
            {
                regex: "C6740(N)?",
                model: "Hydro WAVE"
            },
            {
                regex: "C6743",
                model: "Hydro Reach"
            },
            {
                regex: "E6810",
                model: "DuraForce Pro"
            },
            {
                regex: "E6910",
                model: "DuraForce Pro 2"
            },
            {
                regex: "KC-S701",
                model: "Torque"
            },
            {
                regex: "KYL21",
                model: "Digno S"
            },
            {
                regex: "KYY23",
                model: "Urbano L03"
            },
            {
                regex: "(?:Kyocera-)?E6790",
                model: "DuraForce XD"
            },
            {
                regex: "S2151",
                model: "Coast",
                device: "feature phone"
            },
            {
                regex: "Kyocera-KZ-([a-z0-9]+)",
                model: "KZ $1"
            },
            {
                regex: "Kyocera(?:[\\-/])?([a-z0-9]+)",
                model: "$1"
            },
            {
                regex: "(?:KWC|QC)-([a-z0-9]+)",
                model: "$1"
            }
        ]
    }, a0 = {
        regex: "LAIQ",
        device: "smartphone",
        models: [
            {
                regex: "(Glam|New York)",
                model: "$1"
            }
        ]
    }, t0 = {
        regex: "iris708",
        device: "smartphone",
        models: [
            {
                regex: "iris708",
                model: "LAVA PRO 4.5"
            }
        ]
    }, i0 = {
        regex: "Lava[ _]|iris[ _]?([^/;]+)(?:\\)| Build)|A(?:67|76) Build|X1 Selfie Build|X41 Plus Build|Flair Z1|PixelV1|Z61_2GB",
        device: "smartphone",
        models: [
            {
                regex: "Flair Z1",
                model: "Flair Z1"
            },
            {
                regex: "A67 Build",
                model: "A67"
            },
            {
                regex: "A76 Build",
                model: "A76"
            },
            {
                regex: "PixelV1",
                model: "Pixel V1"
            },
            {
                regex: "X1 Selfie Build",
                model: "Iris X1 Selfie"
            },
            {
                regex: "X41 Plus Build",
                model: "X41 Plus"
            },
            {
                regex: "LAVA_A3",
                model: "A3"
            },
            {
                regex: "LAVA_R1",
                model: "R1"
            },
            {
                regex: "Z61_2GB",
                model: "Z61"
            },
            {
                regex: "iris[ _]?([^/;]+)(?:\\)| Build)",
                model: "Iris $1"
            },
            {
                regex: "Lava[ _]?([^/;]+)(?:/| Build)",
                model: "$1"
            }
        ]
    }, n0 = {
        regex: "XM[123]00|(?<!Blade )S6 Build",
        device: "smartphone",
        models: [
            {
                regex: "S6 Build",
                model: "S6"
            },
            {
                regex: "XM([123])00([^/;]*) Build",
                model: "XM$100$2"
            }
        ]
    }, m0 = {
        regex: "LANIX-([a-z0-9]+)|Ilium[ _]|X120C",
        device: "smartphone",
        models: [
            {
                regex: "ILIUM[ _]PAD[ _]([^;/]+) Build",
                model: "Ilium Pad $1",
                device: "tablet"
            },
            {
                regex: "X120C",
                model: "Ilium X120C"
            },
            {
                regex: "Ilium[ _](Alpha 3|L(?:200|6[12]0|9[125]0|1[0124]00|1050|1120)|LT5[012]0|M[13579]|S(?:106|520|6[27]0)|X(?:1[12]0|2[0126]0|5[12]0|500B|710))",
                model: "Ilium $1"
            },
            {
                regex: "ILIUM[ _]([^;/]+) Build",
                model: "Ilium $1"
            },
            {
                regex: "LANIX-([a-z0-9]+)",
                device: "feature phone",
                model: "$1"
            }
        ]
    }, s0 = {
        regex: "(Lark|Cumulus|Evolution|FreeMe|Ultimate (?:X4|7i))[ _-]|Build/Lark|Bjorn[_ ]SP-500",
        device: "tablet",
        models: [
            {
                regex: "Cumulus[ _](5\\.5|[56])[ _]HD",
                model: "Cumulus $1 HD",
                device: "smartphone"
            },
            {
                regex: "FreeMe X2 ([79]) (?:ver|v)?\\.([23])",
                model: "FreeMe X2 $1 Version $2"
            },
            {
                regex: "FreeMe X4 7 3G HD",
                model: "FreeMe X4 7HD 3G"
            },
            {
                regex: "FreeMe[ _]X2[ _]([7-9])",
                model: "FreeMe X2 $1"
            },
            {
                regex: "FreeMe X4[ _]7[_ ]HD",
                model: "FreeMe X4 7HD"
            },
            {
                regex: "FreeMe X4[ _]9",
                model: "FreeMe X4 9"
            },
            {
                regex: "(?:Lark[ _-])?Evolution[ _](X2 7 3G-GPS|X4[_ ]10\\.1|10|X4[_ ]7[ _]IPS)",
                model: "Evolution $1"
            },
            {
                regex: "Ultimate (X4 10\\.1 3G IPS|X4 8s 3G|7i)",
                model: "Ultimate $1"
            },
            {
                regex: "PHABLET 7",
                model: "Phablet 7"
            },
            {
                regex: "Phablet 6\\.0",
                model: "Phablet 6.0",
                device: "smartphone"
            },
            {
                regex: "Bjorn[_ ]SP-500",
                model: "Bjorn SP-500",
                device: "smartphone"
            },
            {
                regex: "Cirrus[ _](4\\.5|[45])",
                model: "Cirrus $1",
                device: "smartphone"
            },
            {
                regex: "Lark[ _](Stratus[_ ]5)",
                model: "$1",
                device: "smartphone"
            }
        ]
    }, g0 = {
        regex: "LCT_([a-z0-9]+)",
        device: "feature phone",
        model: "$1"
    }, x0 = {
        regex: "LEAGOO|M5 EDGE|KIICAA (POWER|MIX)|Leapad[ _]7s",
        device: "smartphone",
        models: [
            {
                regex: "LEAGOO[- _](Z[156]|M8)[);/ ]",
                model: "$1"
            },
            {
                regex: "LEAGOO[- _]M8Pro[);/ ]",
                model: "M8 Pro"
            },
            {
                regex: "M5 EDGE",
                model: "M5 Edge"
            },
            {
                regex: "LEAGOO[_ ]Lead([57])",
                model: "Lead $1"
            },
            {
                regex: "KIICAA POWER",
                model: "KICCAA Power"
            },
            {
                regex: "KIICAA MIX",
                model: "KICCAA Mix"
            },
            {
                regex: "(Leapad[ _]7s)",
                model: "$1",
                device: "tablet"
            }
        ]
    }, c0 = {
        regex: "Trendy 5.0",
        device: "smartphone",
        models: [
            {
                regex: "Trendy 5.0",
                model: "Trendy 5.0"
            }
        ]
    }, u0 = {
        regex: "Letv|LeEco|X[89]00\\+[;/) ]|Le ?X[0-9][^;/]+|Le Max|Le [12]|X900 Build",
        device: "smartphone",
        models: [
            {
                regex: "X800\\+",
                model: "Le 1 Pro"
            },
            {
                regex: "X900\\+",
                model: "Max X900+"
            },
            {
                regex: "X50[10]",
                model: "Le 1S"
            },
            {
                regex: "(X910)",
                model: "$1"
            },
            {
                regex: "X900 Build",
                model: "Le X900"
            },
            {
                regex: "Le ?X526 Build",
                model: "Le 2"
            },
            {
                regex: "Le ?X([^;/]+) Build",
                model: "Le X$1"
            },
            {
                regex: "Le ?X([^) ;/]+)",
                model: "Le X$1"
            },
            {
                regex: "Le ?([12][^;/]+) Build",
                model: "Le $1"
            },
            {
                regex: "Le Max([^;/]*) Build",
                model: "Le Max$1"
            },
            {
                regex: "Le Max([^ ;/]*)",
                model: "Le Max$1"
            },
            {
                regex: "LeEco ([^;/]+) Build",
                model: "$1"
            }
        ]
    }, S0 = {
        regex: "LESPH501[14]|SUPERNOVA (Qi16|i3G96[X]?)",
        device: "smartphone",
        models: [
            {
                regex: "LESPH5011",
                model: "Argon e250"
            },
            {
                regex: "LESPH5014",
                model: "Krypton K150"
            },
            {
                regex: "SUPERNOVA (Qi16|i3G96[X]?)",
                device: "tablet",
                model: "Supernova $1"
            }
        ]
    }, A0 = {
        regex: "lephone[ _]",
        device: "smartphone",
        models: [
            {
                regex: "lephone[ _](K7|K10)",
                device: "feature phone",
                model: "$1"
            },
            {
                regex: "lephone[ _](W(1[0125]|[279])|T2)[/;) ]",
                model: "$1"
            },
            {
                regex: "lephone_W7_plus",
                model: "W7 Plus"
            }
        ]
    }, p0 = {
        regex: "Lenco ([^/;]*) Build",
        device: "tablet",
        model: "$1"
    }, v0 = {
        regex: "(?:LNV-)?Lenovo|IdeaTab|IdeaPad|Thinkpad|Yoga Tablet|Tab2A[0-9]-[0-9]{2}[a-z]?|TB2-X30L|TB3-710I|YT3-X50[ML]|ZUK[ -_]|K50a40|TB-(8504F|X304F|X704V|X704A)|A2107A-H|S6000[ ;)]|(Z2 Plus|VIBE Z2|Vibe K5( Plus)?|P2A42)[/;) ]",
        device: "smartphone",
        models: [
            {
                regex: "Lenovo ?G780",
                model: "G780",
                device: "desktop"
            },
            {
                regex: "Lenovo ?A3500-FL",
                model: "IdeaTab A7-40",
                device: "tablet"
            },
            {
                regex: "Lenovo ?A3500-(H|HV|F)",
                model: "IdeaTab A7-50",
                device: "tablet"
            },
            {
                regex: "Lenovo ?A5500-[HF]",
                model: "IdeaTab A8-50",
                device: "tablet"
            },
            {
                regex: "Lenovo ?A7600-[HF]",
                model: "IdeaTab A10-70",
                device: "tablet"
            },
            {
                regex: "A2107A-H",
                model: "A2107",
                device: "tablet"
            },
            {
                regex: "TB2-X30[FL]",
                model: "Tab 2 A10-30",
                device: "tablet"
            },
            {
                regex: "YT3-X50[FLM]",
                model: "Yoga Tab 3",
                device: "tablet"
            },
            {
                regex: "TB3-730X",
                model: "TAB3 7",
                device: "tablet"
            },
            {
                regex: "TB3-710[IF]",
                model: "TAB3 7 Essential",
                device: "tablet"
            },
            {
                regex: "TB3-850[FM]",
                model: "TAB3 8",
                device: "tablet"
            },
            {
                regex: "Lenovo TB-X304[FL]",
                model: "TAB4 10",
                device: "tablet"
            },
            {
                regex: "TB-X704V",
                model: "TAB4 10 Plus",
                device: "tablet"
            },
            {
                regex: "TB-X704A",
                model: "Moto Tab",
                device: "tablet"
            },
            {
                regex: "Lenovo ?B8000(-[FH])?",
                model: "Yoga Tablet 10",
                device: "tablet"
            },
            {
                regex: "YOGA Tablet 2 Pro-1380[FL]",
                model: 'Yoga Tablet 2 Pro 13.3"',
                device: "tablet"
            },
            {
                regex: "YOGA Tablet 2-1050[FL]",
                model: 'Yoga Tablet 2 10.1"',
                device: "tablet"
            },
            {
                regex: "YOGA Tablet 2-830(?:[FL]|LC)",
                model: 'Yoga Tablet 2 8.0"',
                device: "tablet"
            },
            {
                regex: "Lenovo ?B6000(-[FH])?",
                model: "Yoga Tablet 8",
                device: "tablet"
            },
            {
                regex: "YT3-X90(L|F|X)",
                model: "Yoga 3 Pro",
                device: "tablet"
            },
            {
                regex: "YT3-850[FL]",
                model: "Yoga Tab 3 8",
                device: "tablet"
            },
            {
                regex: "S6000[ ;)]",
                model: "IdeaTab S6000",
                device: "tablet"
            },
            {
                regex: "Lenovo ([ASB][0-9]{4})[A-Z]?\\-[EHF]",
                model: "IdeaTab $1",
                device: "tablet"
            },
            {
                regex: "ThinkPadTablet_(A[0-9]{3})_",
                model: "ThinkPad Tablet $1",
                device: "tablet"
            },
            {
                regex: "ThinkPad ?Tablet([^;/]*) Build",
                model: "ThinkPad Tablet$1",
                device: "tablet"
            },
            {
                regex: "IdeaPad ?([^;/]*) Build",
                model: "IdeaPad $1",
                device: "tablet"
            },
            {
                regex: "Lenovo TAB ?([^/;]*) Build",
                model: "TAB $1",
                device: "tablet"
            },
            {
                regex: "Lenovo ?A3300-(?:GV|H)",
                model: "TAB 2 A7-30",
                device: "tablet"
            },
            {
                regex: "TB-8504F",
                model: "TAB 4 8",
                device: "tablet"
            },
            {
                regex: "TB-X304F",
                model: "TAB 4 10",
                device: "tablet"
            },
            {
                regex: "Lenovo TB-X505F",
                model: "M10",
                device: "tablet"
            },
            {
                regex: "Lenovo TB-X104[FXL]",
                model: "E10",
                device: "tablet"
            },
            {
                regex: "Tab2A([0-9]-[0-9]{2}[a-z]?)",
                model: "TAB 2 A$1",
                device: "tablet"
            },
            {
                regex: "IdeaTab[ \\-_]?([a-z0-9]+)",
                model: "IdeaTab $1",
                device: "tablet"
            },
            {
                regex: "Yoga Tablet([^;/]+) Build",
                model: "Yoga Tablet$1",
                device: "tablet"
            },
            {
                regex: "Lenovo TB\\-X704F Build/NMF26F",
                model: "Tab 4 10 Plus",
                device: "tablet"
            },
            {
                regex: "Lenovo (TB[0-9]?\\-[a-z0-9\\-]+) Build",
                model: "$1",
                device: "tablet"
            },
            {
                regex: "Z2 Plus",
                model: "Z2 Plus"
            },
            {
                regex: "Z2151",
                model: "ZUK Edge"
            },
            {
                regex: "Z213[12]",
                model: "ZUK Z2"
            },
            {
                regex: "Z2121",
                model: "ZUK Z2 Pro"
            },
            {
                regex: "ZUK[ -_]([^/;]*)(?: Build|\\))",
                model: "ZUK $1"
            },
            {
                regex: "K10a40(?: Build|\\))",
                model: "C2"
            },
            {
                regex: "k50a40 Build",
                model: "K3 Note"
            },
            {
                regex: "A7010a48 Build",
                model: "K4 Note"
            },
            {
                regex: "A7010a48(?: Build|\\))",
                model: "K4 Vibe"
            },
            {
                regex: "A7020a4[08](?: Build|\\))",
                model: "K5 Note"
            },
            {
                regex: "(?:Lenovo-)?A6020(?:a40|l36)(?: Build|\\))",
                model: "K5 Vibe"
            },
            {
                regex: "A6020a46(?: Build|\\))|Vibe K5 Plus",
                model: "K5 Vibe Plus"
            },
            {
                regex: "Vibe K5",
                model: "K5 Vibe"
            },
            {
                regex: "VIBE Z2[);/ ]",
                model: "Vibe Z2"
            },
            {
                regex: "k33a48(?: Build|\\))",
                model: "K6"
            },
            {
                regex: "P2A42[);/ ]",
                model: "P2"
            },
            {
                regex: "k53a48(?: Build|\\))",
                model: "K6 Note"
            },
            {
                regex: "K33a42(?: Build|\\))",
                model: "K6 Power"
            },
            {
                regex: "P1(?:ma40|a42) Build",
                model: "P1 Vibe"
            },
            {
                regex: "P1a42(?: Build|\\))",
                model: "P1 Pro"
            },
            {
                regex: "P2a42(?: Build|\\))",
                model: "P2"
            },
            {
                regex: "Z90a40 Build",
                model: "Vibe Shot"
            },
            {
                regex: "S1a40 Build",
                model: "Vibe S1"
            },
            {
                regex: "Lenovo ([^/;]*) Build",
                model: "$1"
            },
            {
                regex: "(?:LNV-|Lenovo-)?Lenovo[ \\-_]?([a-z0-9_+\\-]+)",
                model: "$1"
            }
        ]
    }, M0 = {
        regex: "(?:SC7 PRO HD|S5A[1-4]|S4A[1-5]|S6A1|A811|A802)[);/ ]|Lexand ([^;/]+) Build",
        device: "smartphone",
        models: [
            {
                regex: "A(811|802)",
                device: "tablet",
                model: "A$1"
            },
            {
                regex: "S4A1",
                model: "Vega"
            },
            {
                regex: "S4A2",
                model: "Irida"
            },
            {
                regex: "S4A3",
                model: "Pallada"
            },
            {
                regex: "S4A5",
                model: "Oxygen"
            },
            {
                regex: "S4A4 NEON",
                model: "S4A4 Neon"
            },
            {
                regex: "S5A1",
                model: "Callisto"
            },
            {
                regex: "S5A2",
                model: "Overon"
            },
            {
                regex: "S5A3",
                model: "Capella"
            },
            {
                regex: "S5A4",
                model: "Argon"
            },
            {
                regex: "S6A1",
                model: "Antares"
            },
            {
                regex: "SC7 PRO HD",
                model: "SC7 PRO HD"
            },
            {
                regex: "Lexand ([^;/]+) Build",
                model: "$1"
            }
        ]
    }, P0 = {
        regex: "(MFC[0-9]{3}[a-z]{2,})",
        device: "tablet",
        models: [
            {
                regex: "MFC191FR",
                model: "Tablet Ultra 3 XL"
            },
            {
                regex: "MFC045FR",
                model: "TabTab"
            },
            {
                regex: "MFC163FR",
                model: "Tablet Master 3"
            },
            {
                regex: "MFC142FR",
                model: "Tablet Kids"
            },
            {
                regex: "MFC250FR",
                model: "Tablet Junior"
            },
            {
                regex: "MFC270FR",
                model: "Tablet Junior Power Touch"
            },
            {
                regex: "MFC280FR",
                model: "Tablet Junior 2"
            },
            {
                regex: "MFC156FR",
                model: "Tablet One"
            },
            {
                regex: "MFC155FR",
                model: "Tablet Master"
            },
            {
                regex: "MFC157FR",
                model: "Tablet Master 2"
            },
            {
                regex: "MFC17[05]FR",
                model: "Tablet Ultra"
            },
            {
                regex: "MFC375FR",
                model: "Tablet Ultra 2"
            },
            {
                regex: "MFC162FR",
                model: "Power Tablet"
            },
            {
                regex: "MFC180FR",
                model: "Tablet Advanced"
            },
            {
                regex: "MFC181FR",
                model: "Tablet Advanced 2"
            },
            {
                regex: "MFC500FR",
                model: "Tablet XL"
            },
            {
                regex: "MFC190BBFR",
                model: "Barbie Tablet"
            },
            {
                regex: "MFC195DCFR",
                model: "Tablet Disney Cars HD"
            },
            {
                regex: "MFC195FUFR",
                model: "Furby Tablet"
            },
            {
                regex: "MFC195DPFR",
                model: "Tablet Disney Princesse HD"
            },
            {
                regex: "MFC140FR",
                model: "LapTab"
            },
            {
                regex: "MFC141FR",
                model: "LapTab 2"
            },
            {
                regex: "(MFC[0-9]{3}[a-z]{2,})",
                model: "$1"
            }
        ]
    }, T0 = {
        regex: "LG|portalmmm/2\\.0 (?:KE|KG|KP|L3)|(?:VX[0-9]+|L-0[12]D|L-07C|P713|(LM-[A-Z][0-9]{3}[A-Z]{0,3}(?:\\(FGN?\\)|\\(G\\)|\\.FN|\\.F(?:GN?)?)?)|LM-(X625N1|G820QM[0127]))[);/ ]|NetCast|RS98[78]|RS500|VS(?:50[01]|835|876|880|98[0578]|99[56]|(410|415|425|500|880)PP)|Nexsus 5|LML(41[34]D|211B|713D|212V)L|VK810 4G|VK815",
        device: "smartphone",
        models: [
            {
                regex: "LG-D325",
                model: "L70"
            },
            {
                regex: "LG-D340F8",
                model: "L70 Tri"
            },
            {
                regex: "LM-X210APM",
                model: "Phoenix 4"
            },
            {
                regex: "LM-X210VPP",
                model: "Zone 4"
            },
            {
                regex: "LM-X220PM",
                model: "Tribute Empire"
            },
            {
                regex: "VS980",
                model: "G2"
            },
            {
                regex: "LG-D85[0125]|VS985",
                model: "G3"
            },
            {
                regex: "LG-D72[2458]",
                model: "G3 Beat"
            },
            {
                regex: "LG-H81[158]",
                model: "G4"
            },
            {
                regex: "LG-H525n?",
                model: "G4c"
            },
            {
                regex: "LG-(?:H540|H630)",
                model: "G4 Stylus"
            },
            {
                regex: "LG-H735",
                model: "G4 Beat"
            },
            {
                regex: "LG-H8(?:20|30|5[08]|60)|VS987|RS988",
                model: "G5"
            },
            {
                regex: "LG-H84[05]",
                model: "G5 SE"
            },
            {
                regex: "VS988",
                model: "G6"
            },
            {
                regex: "LM-Q850",
                model: "G7 Fit"
            },
            {
                regex: "LM-Q910",
                model: "G7 One"
            },
            {
                regex: "LM-G820(N|QM[0127]|UMB)?",
                model: "G8"
            },
            {
                regex: "LM-G810",
                model: "G8S ThinQ"
            },
            {
                regex: "VS501",
                model: "K20"
            },
            {
                regex: "(?:LG-)?H502",
                model: "Magna"
            },
            {
                regex: "(?:LG-)?H343",
                model: "Risio"
            },
            {
                regex: "(?:LG-)?H650",
                model: "Zero"
            },
            {
                regex: "(?:LG-)?M154",
                model: "Risio 2"
            },
            {
                regex: "(?:LG-)?P500H",
                model: "Optimus One"
            },
            {
                regex: "P713",
                model: "Optimus L7II"
            },
            {
                regex: "L-01D",
                model: "Optimus LTE L-01D"
            },
            {
                regex: "L-02D",
                model: "PRADA phone L-02D"
            },
            {
                regex: "L-07C",
                model: "Optimus Bright L-07C"
            },
            {
                regex: "(?:LG-)?F800(?:S|K|L)?",
                model: "V20"
            },
            {
                regex: "LM-Q710(?:\\(FGN\\)|[\\.]?FGN)",
                model: "Q Stylus Plus"
            },
            {
                regex: "LM-Q[67]10\\.FG[);/ ]",
                model: "Q7"
            },
            {
                regex: "LM-(Q725[KL]|Q610.FGN)[);/ ]",
                model: "Q7+"
            },
            {
                regex: "LM-Q815[SL]",
                model: "Q8+"
            },
            {
                regex: "LM-Q925L",
                model: "Q9"
            },
            {
                regex: "VS835",
                model: "Stylo 2 V"
            },
            {
                regex: "LM-Q710|LML713DL",
                model: "Stylo 4"
            },
            {
                regex: "LM-Q720",
                model: "Stylo 5"
            },
            {
                regex: "LM-G710(N|VM)?",
                model: "G7 ThinQ"
            },
            {
                regex: "LM-X210CM",
                model: "Fortune 2"
            },
            {
                regex: "LM-X410\\.F[);/ ]",
                model: "Premier Pro"
            },
            {
                regex: "LML41[34]DL[);/ ]",
                model: "Premier Pro LTE"
            },
            {
                regex: "LM-X525",
                model: "Q60"
            },
            {
                regex: "LM-X210K",
                model: "X2"
            },
            {
                regex: "LM-X510WM",
                model: "X Power 3"
            },
            {
                regex: "LM-X(?:41[05]K|410S)",
                model: "X4"
            },
            {
                regex: "LM-X(415[LS]|410L)",
                model: "X4+"
            },
            {
                regex: "LM-X410\\.FN",
                model: "K11"
            },
            {
                regex: "LM-X(?:320|410[UP]M)",
                model: "K30"
            },
            {
                regex: "LM-X410",
                model: "LM-X410"
            },
            {
                regex: "LM-X420N",
                model: "X4 (2019)"
            },
            {
                regex: "LM-X420",
                model: "K40"
            },
            {
                regex: "LM-X510[KLS]",
                model: "X5"
            },
            {
                regex: "LM-X625N1",
                model: "X6"
            },
            {
                regex: "LM-X625N",
                model: "X6 (2019)"
            },
            {
                regex: "LGMS210",
                model: "Aristo"
            },
            {
                regex: "LM-X210[G]?",
                model: "Aristo 2"
            },
            {
                regex: "LM-X220",
                model: "Aristo 3"
            },
            {
                regex: "LM-V40(5|9N)",
                model: "V40 ThinQ"
            },
            {
                regex: "LM-V500N",
                model: "V50"
            },
            {
                regex: "(?:LG-)?(?:RS987|H901|H96[0128]|VS990)",
                model: "V10"
            },
            {
                regex: "(?:LG-)?RS500",
                model: "K8 4G"
            },
            {
                regex: "(?:LG-)?VS500",
                model: "K8 V"
            },
            {
                regex: "LM-X212\\(G\\)",
                model: "K8 (2018)"
            },
            {
                regex: "(?:LG-)?H91[058]",
                model: "V20"
            },
            {
                regex: "(?:LG-)?H990(?:DS|N|T)?",
                model: "V20"
            },
            {
                regex: "(?:LG-)?LS997",
                model: "V20"
            },
            {
                regex: "(?:LG-)?VS995",
                model: "V20"
            },
            {
                regex: "(?:LG-)?US999",
                model: "V20"
            },
            {
                regex: "VS996",
                model: "V30"
            },
            {
                regex: "(?:LG-)?VS410PP",
                model: "Optimus Zone"
            },
            {
                regex: "LM-V350[N]?",
                model: "V35"
            },
            {
                regex: "(?:LG-)?VS415PP",
                model: "Optimus Zone 2"
            },
            {
                regex: "(?:LG-)?VS425PP",
                model: "Optimus Zone 3"
            },
            {
                regex: "(?:LG-)?K100",
                model: "K3"
            },
            {
                regex: "(?:LG-?)?(?:K|MS)33[02]",
                model: "K7"
            },
            {
                regex: "(?:LG-?)?(?:K|MS)350",
                model: "K8"
            },
            {
                regex: "VS500PP",
                model: "K8 V"
            },
            {
                regex: "(?:LG-)?K420(?:N)?",
                model: "K10"
            },
            {
                regex: "(?:LG-)?K430(?:DS|DSF|DSY)?",
                model: "K10"
            },
            {
                regex: "(?:LG-)?M250N?",
                model: "K10 (2017)"
            },
            {
                regex: "(?:LG-)?F670[KLS]?",
                model: "K10"
            },
            {
                regex: "(?:LG-)?M255",
                model: "K20"
            },
            {
                regex: "(?:LG-?)?[MT]P260",
                model: "K20 Plus"
            },
            {
                regex: "(?:LG-)?M700(?:N|A|DSK|AN)?",
                model: "Q6"
            },
            {
                regex: "LM-X440IM",
                model: "W30"
            },
            {
                regex: "(?:LG-?)?K220",
                model: "X Power"
            },
            {
                regex: "(?:LG-?)?M320",
                model: "X Power 2"
            },
            {
                regex: "(?:LG-)?K371",
                model: "Phoenix 2"
            },
            {
                regex: "(?:LG-)?M150",
                model: "Phoenix 3"
            },
            {
                regex: "(?:LG-)?F100[SL]",
                model: "Optimus Vu"
            },
            {
                regex: "(?:LG-)?P880",
                model: "Optimus 4X HD"
            },
            {
                regex: "(?:LG-)?(H340n?|H324)",
                model: "Leon"
            },
            {
                regex: "(?:LG-)?H342",
                model: "Leon 4G LTE"
            },
            {
                regex: "(?:LG-)?H422",
                model: "Spirit"
            },
            {
                regex: "(?:LG)?C660",
                model: "Optimus Pro"
            },
            {
                regex: "LML21(?:1B|2V)L",
                model: "Rebel 4"
            },
            {
                regex: "VS876",
                model: "Lucid 3"
            },
            {
                regex: "VS880(PP)?",
                model: "G Vista"
            },
            {
                regex: "LG-V490",
                model: "G Pad 8.0",
                device: "tablet"
            },
            {
                regex: "LG-V500",
                model: "G Pad 8.3",
                device: "tablet"
            },
            {
                regex: "LG-V700",
                model: "G Pad 10.1",
                device: "tablet"
            },
            {
                regex: "LG-V935",
                model: "G Pad II 10.1",
                device: "tablet"
            },
            {
                regex: "LG-V521",
                model: "G Pad X 8.0",
                device: "tablet"
            },
            {
                regex: "VK810",
                model: "G Pad 8.3 LTE",
                device: "tablet"
            },
            {
                regex: "VK815",
                model: "G Pad X 8.3",
                device: "tablet"
            },
            {
                regex: "webOS.TV",
                device: "tv",
                model: "WebOS TV"
            },
            {
                regex: "LGE_DLNA_SDK|NetCast",
                device: "tv",
                model: "NetCast"
            },
            {
                regex: "LG Watch Urbane",
                device: "wearable",
                model: "Watch Urbane"
            },
            {
                regex: "(LM-[A-Z]{1}[0-9]{3}([A-Z]{1,3})?)",
                model: "$1"
            },
            {
                regex: "LGE(?: |-LG| LG-AX|-)([a-z0-9]+)",
                model: "$1"
            },
            {
                regex: "FBDV/LG-([a-z0-9]+);FBSV",
                model: "$1"
            },
            {
                regex: "LGE;([a-z0-9\\-]+)",
                model: "$1"
            },
            {
                regex: "LG[ _\\-](V90.*|Optimus[ _\\-]Pad.*) Build",
                device: "tablet",
                model: "$1"
            },
            {
                regex: "LG(?:/|-LG| |-)?([^/;]*) Build",
                model: "$1"
            },
            {
                regex: "LG(?:/|-LG| |-)?([a-z0-9]+)",
                model: "$1"
            },
            {
                regex: "LG; ([a-z0-9 ]+)",
                model: "$1"
            },
            {
                regex: "portalmmm/2.0 ((?:KE|KG|KP|L3)[a-z0-9]+)",
                model: "$1"
            },
            {
                regex: "(VX[0-9]+)",
                model: "$1"
            }
        ]
    }, h0 = {
        regex: "Lingwin[ _\\-]",
        device: "smartphone",
        models: [
            {
                regex: "Lingwin[ _\\-]?([^/;]+) Build",
                model: "$1"
            },
            {
                regex: "Lingwin[ _\\-]?([^);/ ]+)",
                model: "$1"
            }
        ]
    }, b0 = {
        regex: "(TAB950|TAB1062|E731|E812|E912|E1031|POWER BOT|La Tab 72|(?:B|C|M|ID|VR)[ _]?BOT[ _]?(?:TAB[ _])?([0-9]+\\+?)(?:PLUS)?|KT712A_4\\.4|L-?IXIR[0-9]*|L-ITE|L-?EMENT|Le Lift)[_);/ ]",
        device: "tablet",
        models: [
            {
                regex: "La Tab 72",
                model: "La Tab 72"
            },
            {
                regex: "KT712A_4.4",
                model: "L-ixir Tab 701"
            },
            {
                regex: "LIXIR1041",
                model: "L-ixir Tab 1041"
            },
            {
                regex: "L-?IXIR TAB ([^;/]+) Build",
                model: "L-ixir Tab $1"
            },
            {
                regex: "L-ITE[ _]([^;/]+) Build",
                model: "L-ite Tab $1"
            },
            {
                regex: "L-?EMENT[ _](?:TAB)?([^;/]+) Build",
                model: "L-ement Tab $1"
            },
            {
                regex: "(TAB950|TAB1062|E731|E812|E912|E1031)[);/ ]",
                model: "$1"
            },
            {
                regex: "POWER BOT",
                model: "POWER BOT"
            },
            {
                regex: "((?:B|C|M|ID|VR))[ _]?BOT[ _]?((?:TAB[ _])?([0-9]+\\+?)(?:PLUS)?)",
                model: "$1 BOT $2"
            },
            {
                regex: "Le Lift",
                model: "Le Lift",
                device: "smartphone"
            }
        ]
    }, L0 = {
        regex: "KONKA[_ ]([a-z0-9]+)",
        device: "smartphone",
        models: [
            {
                regex: "E5660S",
                model: "Viva 5660s"
            },
            {
                regex: "W830",
                model: "Tango 830"
            },
            {
                regex: "W(9[67]0)",
                model: "Expose $1"
            },
            {
                regex: "W990",
                model: "Tuxedo 990"
            },
            {
                regex: "KONKA[_ ]([a-z0-9]+)",
                device: "feature phone",
                model: "$1"
            }
        ]
    }, _0 = {
        regex: "(?:BIGCOOL|COOLFIVE|COOL-K|Just5|Link5)[);/ ]",
        device: "smartphone",
        models: [
            {
                regex: "BIGCOOL[);/ ]",
                model: "BigCool"
            },
            {
                regex: "COOL-K[);/ ]",
                model: "Cool-K"
            },
            {
                regex: "COOLFIVE[);/ ]",
                model: "Cool Five"
            },
            {
                regex: "Just5[);/ ]",
                model: "Just 5"
            },
            {
                regex: "Link5[);/ ]",
                model: "Link 5"
            }
        ]
    }, G0 = {
        regex: "(?:Browser-)?Karbonn|K9 Kavach 4G|K9 Music 4G|K9 Smart|K9 VIRAAT 4G",
        device: "smartphone",
        models: [
            {
                regex: "K9 Kavach 4G",
                model: "K9 Kavach 4G"
            },
            {
                regex: "K9 Music 4G",
                model: "K9 Music 4G"
            },
            {
                regex: "K9 Smart 1GB",
                model: "K9 Smart"
            },
            {
                regex: "K9 Smart 4G",
                model: "K9 Smart 4G"
            },
            {
                regex: "K9 Smart Grand",
                model: "K9 Smart Grand"
            },
            {
                regex: "K9 Smart Yuva",
                model: "K9 Smart Yuva"
            },
            {
                regex: "K9 Smart",
                model: "K9 Smart"
            },
            {
                regex: "karbonnK9 Viraat 4G|K9 VIRAAT 4G",
                model: "K9 Viraat 4G"
            },
            {
                regex: "Titanium[ _]S2[ _]Plus",
                model: "Titanium S2 Plus"
            },
            {
                regex: "Titanium_S99",
                model: "Titanium S99"
            },
            {
                regex: "Karbonn ([a-z0-9]+) WAP-Browser",
                model: "$1",
                device: "feature phone"
            },
            {
                regex: "WAP Browser-Karbonn ([a-z0-9]+)/",
                model: "$1",
                device: "feature phone"
            },
            {
                regex: "Karbonn_([^;/)]+)",
                model: "$1"
            },
            {
                regex: "Karbonn ([^;/]+) Build",
                model: "$1"
            },
            {
                regex: "Karbonn ([^;/]+)/",
                model: "$1"
            }
        ]
    }, B0 = {
        regex: "SAGEM|portalmmm/2.0 (?:SG|my)",
        device: "smartphone",
        models: [
            {
                regex: "SAGEM-(my[a-z0-9\\-]+)",
                model: "$1",
                device: "feature phone"
            },
            {
                regex: "SAGEM ([a-z0-9]+)",
                model: "$1"
            },
            {
                regex: "SAGEM-([a-z0-9\\-]+)",
                model: "$1"
            },
            {
                regex: "portalmmm/2.0 ((?:SG|my)[a-z0-9]+)",
                model: "$1"
            }
        ]
    }, N0 = {
        regex: "(?:MPQC|MPDC)[0-9]+|PH(?:150|340|350|360|451|500|520)|(?:MID(?:7C|74C|82C|84C|801|811|701|711|170|77C|43C|102C|103C|104C|114C)|MP(?:843|717|718|1010|7007|7008|843|888|959|969)|MGP7)[);/ ]",
        device: "tablet",
        models: [
            {
                regex: "((?:MPQC|MPDC)[0-9]+[^/;]+) Build",
                model: "$1"
            },
            {
                regex: "(MID(?:7C|74C|82C|84C|801|811|701|711|170|77C|43C|102C|103C|104C|114C)|MP(?:843|717|718|1010|7007|7008|843|888|959|969)|MGP7)[);/ ]",
                model: "$1"
            },
            {
                regex: "(PH(?:150|340|350|360|451|500|520))",
                model: "$1",
                device: "smartphone"
            }
        ]
    }, C0 = {
        regex: "MAJESTIC[ _-]|CRONO ?[0-9]+",
        device: "smartphone",
        models: [
            {
                regex: "MAJESTIC[ _]Tab([^;/]+)Build",
                model: "Tab$1",
                device: "tablet"
            },
            {
                regex: "MAJESTIC[ _]Tab([^);/]+)[);/]",
                model: "Tab$1",
                device: "tablet"
            },
            {
                regex: "MAJESTIC[ _]([^;/]+)Build",
                model: "$1"
            },
            {
                regex: "MAJESTIC[ _]([^);/]+)[);/]",
                model: "$1"
            },
            {
                regex: "CRONO ?([0-9]+) Build",
                model: "Crono $1"
            },
            {
                regex: "CRONO ?([0-9]+)[);/]",
                model: "Crono $1"
            }
        ]
    }, E0 = {
        regex: "Masstel",
        device: "smartphone",
        models: [
            {
                regex: "Masstel[_ ](Juno[_ ]Q3|X9|N4[56]0|N5[2458]0|N536|M05|M1[29]0|M1[125]|M250|M25)[);/ ]",
                model: "$1"
            },
            {
                regex: "Masstel[_ ]\\((M18)\\)",
                model: "$1"
            },
            {
                regex: "Masstel_Tab7LTE[);/ ]",
                model: "Tab 7 LTE",
                device: "tablet"
            },
            {
                regex: "Masstel Tab (840|700i)[);/ ]",
                model: "Tab $1",
                device: "tablet"
            }
        ]
    }, O0 = {
        regex: "Astro_5N_LTE|Virtue Z5",
        device: "smartphone",
        models: [
            {
                regex: "Astro_5N_LTE",
                model: "Astro 5N LTE"
            },
            {
                regex: "Virtue Z5",
                model: "Virtue Z5"
            }
        ]
    }, w0 = {
        regex: "SSB-500|Alpha[_ ]X",
        device: "smartphone",
        models: [
            {
                regex: "SSB-500",
                model: "SSB-500"
            },
            {
                regex: "Alpha[_ ]X",
                model: "Alpha X"
            }
        ]
    }, f0 = {
        regex: "(?:SmartPad7503G|M-SP10MXA|SmartPad970s2(?:3G)?|M[_-][MPS]P[0-9a-z]+|M-IPRO[0-9a-z]+)[);/ ]",
        device: "tablet",
        models: [
            {
                regex: "SmartPad7503G[);/ ]",
                model: "SmartPad 750 3G"
            },
            {
                regex: "SmartPad970s23G[);/ ]",
                model: "SmartPad 970 S2 3G"
            },
            {
                regex: "SmartPad970s2[);/ ]",
                model: "SmartPad 970 S2"
            },
            {
                regex: "M-MP84[02]M[);/ ]",
                model: "SmartPad 8.0 Mobile"
            },
            {
                regex: "M-MP940M[);/ ]",
                model: "SmartPad 9.7 Mobile"
            },
            {
                regex: "M-SP10MXA[);/ ]",
                model: "SmartPad MX 10"
            },
            {
                regex: "M-MP(?:710|720|725|726|740)GOx?[);/ ]",
                model: "SmartPad 7.0 Go"
            },
            {
                regex: "M-MP876S2[);/ ]",
                model: "SmartPad 8.0 S2"
            },
            {
                regex: "M-MP8S2[AB]?3G[);/ ]",
                model: "SmartPad 8.0 S2 3G"
            },
            {
                regex: "M-MP(101|102|860|875)S2[BW]?[);/ ]",
                model: "SmartPad $1 S2"
            },
            {
                regex: "M-MP85S23G[);/ ]",
                model: "SmartPad 875 S2 3G"
            },
            {
                regex: "M-SP1AGO3G",
                model: "SmartPad 10 Go 3G"
            },
            {
                regex: "M-MP10[45][01]S2[);/ ]",
                model: "SmartPad 10.1 S2"
            },
            {
                regex: "M-MP1S2[AB]3G[);/ ]",
                model: "SmartPad 10.1 S2 3G"
            },
            {
                regex: "M-MP8[24]S4[);/ ]",
                model: "SmartPad 8.0 S4"
            },
            {
                regex: "M-MP8S4[AB]3G[);/ ]",
                model: "SmartPad 8.0 S4 3G"
            },
            {
                regex: "M-MP9S4A3G[);/ ]",
                model: "SmartPad 9.7 S4 3G"
            },
            {
                regex: "M-MP1[02]S4[);/ ]",
                model: "SmartPad 10.1 S4"
            },
            {
                regex: "M-MP1040MC?[);/ ]",
                model: "SmartPad 10.1 HD S4 3G"
            },
            {
                regex: "M-MP1S4[AB]3G[);/ ]",
                model: "SmartPad 10.1 S4 3G"
            },
            {
                regex: "M-MP8PA3G[);/ ]",
                model: "SmartPad 8.0 HD Pro 3G"
            },
            {
                regex: "M-MP10PA[);/ ]",
                model: "SmartPad 10.1 HD Pro"
            },
            {
                regex: "M-MP10PA3G[);/ ]",
                model: "SmartPad 10.1 HD Pro 3G"
            },
            {
                regex: "M-IPRO([18][01]0)[BW][);/ ]",
                model: "SmartPad 8.0 HD iPro$1 3G"
            },
            {
                regex: "(?:M-MP75S23G|M-MP72[01]M)[);/ ]",
                model: "SmartPad 7.0 Mobile",
                device: "phablet"
            },
            {
                regex: "M-MP7S2[ABDK]3G[);/ ]",
                model: "SmartPad 7.0 S2 3G",
                device: "phablet"
            },
            {
                regex: "M-MP5303G[);/ ]",
                model: "SmartPad Mini Mobile",
                device: "phablet"
            },
            {
                regex: "M-PPxB400[);/ ]",
                model: "PhonePad Duo B400",
                device: "phablet"
            },
            {
                regex: "M-PPAG550[);/ ]",
                model: "PhonePad Duo G550",
                device: "phablet"
            },
            {
                regex: "M-PP2G530[);/ ]",
                model: "PhonePad Duo G530",
                device: "phablet"
            },
            {
                regex: "M-PPG700[);/ ]",
                model: "PhonePad Duo G700",
                device: "phablet"
            },
            {
                regex: "M-PPxS531[);/ ]",
                model: "PhonePad Duo S531",
                device: "phablet"
            },
            {
                regex: "M-PP2S550[);/ ]",
                model: "PhonePad Duo S550",
                device: "phablet"
            },
            {
                regex: "M-PP2S650C?[);/ ]",
                model: "PhonePad Duo S650",
                device: "phablet"
            },
            {
                regex: "M-PPxS551U[);/ ]",
                model: "PhonePad Duo S551U",
                device: "phablet"
            },
            {
                regex: "M-PP[ABC]G500[);/ ]",
                model: "PhonePad Duo G500",
                device: "smartphone"
            },
            {
                regex: "M-PP2S500[BC]?[);/ ]",
                model: "PhonePad Duo S500",
                device: "smartphone"
            },
            {
                regex: "M[_-]PP[Ax]X(470|510|520)U[);/ ]",
                model: "PhonePad Duo X$1U",
                device: "smartphone"
            },
            {
                regex: "M-PPxG(400|501)[);/ ]",
                model: "PhonePad Duo G$1",
                device: "smartphone"
            },
            {
                regex: "M-PPxS(470|501)[);/ ]",
                model: "PhonePad Duo S$1",
                device: "smartphone"
            },
            {
                regex: "M-MP([0-9a-z]+)",
                model: "SmartPad $1"
            }
        ]
    }, y0 = {
        regex: "Medion|(?:MD_)?LIFETAB|X5001[);/ ]|([SPX]10[0-9]{2}X|E10[45]1X)[);/ ]",
        device: "smartphone",
        models: [
            {
                regex: "(?:MD_)?LIFETAB_([a-z0-9]+)",
                device: "tablet",
                model: "Lifetab $1"
            },
            {
                regex: "X5001",
                model: "Life X5001"
            },
            {
                regex: "(E10[45]1X)[);/ ]",
                device: "tablet",
                model: "$1"
            },
            {
                regex: "([SPX]10[0-9]{2}X)[);/ ]",
                model: "Lifetab $1",
                device: "tablet"
            },
            {
                regex: "Medion(?: Smartphone)? ([^/;]+) Build",
                model: "$1"
            }
        ]
    }, X0 = {
        regex: "MEEG[ _-]",
        device: "smartphone",
        models: [
            {
                regex: "MEEG[ _\\-]?([^/;]+) Build",
                model: "$1"
            },
            {
                regex: "MEEG[ _\\-]?([^);/ ]+)",
                model: "$1"
            }
        ]
    }, $0 = {
        regex: "Meizu|MZ-[a-z]|(M04[05]|MZ-16s|M711C|M35[1356]|M6T|MX[ -]?[2345](?: Pro)?|(?:MZ-)?m[1-6] note|M57[18]C|M3[ESX]|M031|m1 metal|M1 E|M2|M2 E|M5s Build|PRO 6|PRO 7-H)[);/ ]",
        device: "smartphone",
        models: [
            {
                regex: "(?:MZ-)?M571C",
                device: "phablet",
                model: "M2 Note"
            },
            {
                regex: "(?:MZ-)?m([1-6]) note[);/ ]",
                device: "phablet",
                model: "M$1 Note"
            },
            {
                regex: "M1 E[);/ ]",
                model: "M1E"
            },
            {
                regex: "M2 E[);/ ]",
                model: "M2E"
            },
            {
                regex: "(?:MZ-)?M578C|M2[);/ ]",
                model: "M2"
            },
            {
                regex: "M711C[);/ ]",
                model: "M6"
            },
            {
                regex: "M6T",
                model: "M6T"
            },
            {
                regex: "M3E",
                model: "M3E"
            },
            {
                regex: "M3S",
                model: "M3S"
            },
            {
                regex: "M3X",
                model: "M3X"
            },
            {
                regex: "M5S",
                model: "M5S"
            },
            {
                regex: "(M04[05]|MX[ -]?2)[);/ ]",
                model: "MX2"
            },
            {
                regex: "(M35[1356]|MX[ -]?3)[);/ ]",
                model: "MX3"
            },
            {
                regex: "MX[ -]?4 Pro[);/ ]",
                model: "MX4 Pro"
            },
            {
                regex: "MX[ -]?4[);/ ]",
                model: "MX4"
            },
            {
                regex: "MX[ -]?5[);/ ]",
                model: "MX5"
            },
            {
                regex: "m1 metal",
                model: "M1 Metal"
            },
            {
                regex: "PRO 6",
                model: "PRO 6"
            },
            {
                regex: "PRO 7-H",
                model: "PRO 7"
            },
            {
                regex: "M031",
                model: "MX Dual Core"
            },
            {
                regex: "(?:MZ-)?Meizu[_ ]([^/;]+) Build",
                model: "$1"
            },
            {
                regex: "(?:MZ-)?Meizu[_ ]([a-z0-9_]+)",
                model: "$1"
            },
            {
                regex: "MZ-([^/;]+) Build",
                model: "$1"
            }
        ]
    }, I0 = {
        regex: "((?<!MI CC 9 )Meitu[2]?|MP1503|MP1512|MP160[23]|MP170[19])[ ;/)]",
        device: "smartphone",
        models: [
            {
                regex: "MP1503[ ;/)]",
                model: "M6"
            },
            {
                regex: "MP1512[ ;/)]",
                model: "M6s"
            },
            {
                regex: "MP1602[ ;/)]",
                model: "T8"
            },
            {
                regex: "MP1701[ ;/)]",
                model: "T8s"
            },
            {
                regex: "MP1603[ ;/)]",
                model: "M8"
            },
            {
                regex: "MP1709[ ;/)]",
                model: "M8s"
            },
            {
                regex: "Meitu2[ ;/)]",
                model: "2"
            },
            {
                regex: "Meitu (Kiss|[MV]4)[ ;/)]",
                model: "$1"
            }
        ]
    }, F0 = {
        regex: "SlidePad ?([^;/]*) Build|SPNG?[0-9]{2,4}[a-z]{0,2}[ ;/)]|SP704CE?",
        device: "tablet",
        models: [
            {
                regex: "SlidePad ?([^;/]*) Build",
                model: "SlidePad $1"
            },
            {
                regex: "SPNG([0-9]{2,4}[a-z]{0,2})[ ;/)]",
                model: "SlidePad NG$1"
            },
            {
                regex: "SP704(CE?)",
                model: "SlidePad 704$1"
            }
        ]
    }, D0 = {
        regex: "(M785|800P3[12]C|101P51C|X1010)[);/ ]",
        device: "tablet",
        models: [
            {
                regex: "M785[);/ ]",
                model: "Xpress Smartlife M785"
            },
            {
                regex: "X1010[);/ ]",
                model: "X1010"
            },
            {
                regex: "800P31C[);/ ]",
                model: "Xpress Smartlife 800P31C"
            },
            {
                regex: "800P32C[);/ ]",
                model: "Xpress Smartlife 800P32C"
            },
            {
                regex: "101P51C[);/ ]",
                model: "Xpress Smartlife 101P51C"
            }
        ]
    }, R0 = {
        regex: "MIO(?:/)?([a-z0-9]+)|MOBIX M6[);/ ]",
        device: "smartphone",
        models: [
            {
                regex: "MOBIX M6[);/ ]",
                model: "Mobix M6"
            },
            {
                regex: "MIO(?:/)?([a-z0-9]+)",
                model: "$1"
            }
        ]
    }, V0 = {
        regex: "MIDM[_-]|MPM[_-]",
        device: "smartphone",
        models: [
            {
                regex: "MIDM[_-]([a-z0-9]+)",
                model: "MIDM $1",
                device: "tablet"
            },
            {
                regex: "MPM[_-]([a-z0-9]+)",
                model: "MPM $1"
            }
        ]
    }, U0 = {
        regex: "MITSU|portalmmm/[12]\\.0 M",
        device: "feature phone",
        models: [
            {
                regex: "MITSU/[a-z0-9.]+ \\(([a-z0-9]+)\\)",
                model: "$1"
            },
            {
                regex: "MITSU[ \\-]?([a-z0-9]+)",
                model: "$1"
            },
            {
                regex: "portalmmm/[12]\\.0 (M[a-z0-9]+)",
                model: "$1"
            }
        ]
    }, H0 = {
        regex: "(M35|M20|G7106|G7108)[ );/]",
        device: "smartphone",
        models: [
            {
                regex: "(M[0-9]{1,2})[ );/]",
                model: "$1"
            },
            {
                regex: "(G[0-9]{4})[ );/]",
                model: "$1"
            }
        ]
    }, k0 = {
        regex: "(MS5[50]X6|MS55X5|MS55L1|MS50L1|MS43A3000|MS45A4000|MS50A4000|MS50A4500|MS50A5000|MS50A6000|MS50B11000|MB-2900 QUATTRO|POLYS[_ ]MS45L1|Wave5)",
        device: "smartphone",
        models: [
            {
                regex: "MS50X6",
                model: "Atmos II"
            },
            {
                regex: "POLYS[_ ]MS45L1",
                model: "Polys MS45L1"
            },
            {
                regex: "MS55X6",
                model: "Atmos Pro II"
            },
            {
                regex: "MS55X5",
                model: "Atmos Pro"
            },
            {
                regex: "MS55L1",
                model: "GAIA"
            },
            {
                regex: "MS50L1",
                model: "Inti"
            },
            {
                regex: "MB-2900 QUATTRO",
                model: "MB-2900 Quattro"
            },
            {
                regex: "MS43A3000",
                model: "MS43A3000"
            },
            {
                regex: "MS45A4000",
                model: "eOn 45"
            },
            {
                regex: "MS50A4000",
                model: "eOn 50"
            },
            {
                regex: "MS50A4500",
                model: "eOn 50 Elegance"
            },
            {
                regex: "MS50A5000",
                model: "eOn 50 Quad 8"
            },
            {
                regex: "MS50A6000",
                model: "eOn 50 Quad 16"
            },
            {
                regex: "MS50B11000",
                model: "MS50B11000"
            },
            {
                regex: "Wave5",
                model: "Wave 5"
            }
        ]
    }, W0 = {
        regex: "Mobicel_(R1)|Matrix",
        device: "smartphone",
        models: [
            {
                regex: "Matrix",
                model: "Matrix"
            },
            {
                regex: "Mobicel_(R1)",
                model: "$1"
            }
        ]
    }, K0 = {
        regex: "Mobiistar|Zumbo_|PRIME X MAX",
        device: "smartphone",
        models: [
            {
                regex: "mobiistar_LAI_Zumbo Build",
                model: "Zumbo"
            },
            {
                regex: "Zumbo_S_2017 Build",
                model: "Lai Zumbo S (2017)"
            },
            {
                regex: "Zumbo_S_2017_Lite Build",
                model: "Lai Zumbo S Lite (2017)"
            },
            {
                regex: "mobiistar ZUMBO S2( Dual)? Build",
                model: "Zumbo S2"
            },
            {
                regex: "Mobiistar_LAI_Zumbo_J Build",
                model: "Lai Zumbo J"
            },
            {
                regex: "Mobiistar_LAI_Zumbo_J_2017 Build",
                model: "Lai Zumbo J (2017)"
            },
            {
                regex: "Mobiistar_Zumbo_J2",
                model: "Lai Zumbo J2"
            },
            {
                regex: "Mobiistar[_ ]Zumbo[_ ]S2",
                model: "Zumbo S2"
            },
            {
                regex: "mobiistar ZUMBO Power",
                model: "Zumbo Power"
            },
            {
                regex: "mobiistar[ _]LAI[ _]YUNA[ _]([1XCS])",
                model: "Lai Yuna $1"
            },
            {
                regex: "mobiistar LAI Yuki",
                model: "Lai Yuki"
            },
            {
                regex: "mobiistar[ _]LAI[ _]ZORO[ _]([23])",
                model: "Lai Zoro $1"
            },
            {
                regex: "mobiistar[ _]LAI[ _]Zena",
                model: "Lai Zena"
            },
            {
                regex: "mobiistar[ _]LAI[ _]Z([12])?",
                model: "Lai Z$1"
            },
            {
                regex: "mobiistar_ZORO_4G",
                model: "Zoro 4G"
            },
            {
                regex: "mobiistar touch LAI 512",
                model: "Touch Lai 512"
            },
            {
                regex: "mobiistar LAI 504([KC])",
                model: "Lai 504$1"
            },
            {
                regex: "mobiistar LAI Y Build",
                model: "Lai Y"
            },
            {
                regex: "mobiistar PRIME X 2017 Build",
                model: "Prime X"
            },
            {
                regex: "mobiistar[ _]PRIME[ _](X1|558|X[ _]Plus|X[ _]Grand) Build",
                model: "Prime $1"
            },
            {
                regex: "PRIME X MAX 2018",
                model: "Prime X Max"
            },
            {
                regex: "mobiistar[ _]KOOL([ _]Lite)?",
                model: "Kool$1"
            },
            {
                regex: "mobiistar KAT 452 Build",
                model: "Kat 452"
            },
            {
                regex: "mobiistar_LAI_YOLLO Build",
                model: "Lai Yollo"
            },
            {
                regex: "Mobiistar[ _]([^;/]+) Build",
                model: "$1"
            }
        ]
    }, Y0 = {
        regex: "Primo ?(?:91|76)|Enjoy 7 Plus",
        device: "tablet",
        models: [
            {
                regex: "Primo ?76",
                model: "Primo 76"
            },
            {
                regex: "Primo ?91",
                model: "Primo 91"
            },
            {
                regex: "Enjoy 7 Plus",
                model: "Enjoy 7 Plus"
            }
        ]
    }, Q0 = {
        regex: "MLLED[ _]",
        device: "smartphone",
        models: [
            {
                regex: "MLLED[ _]([^;/]+)Build",
                model: "$1"
            },
            {
                regex: "MLLED[ _]([^);/]+)[);/]",
                model: "$1"
            }
        ]
    }, Z0 = {
        regex: "(Cynus[ _][^/;)]+)( Build|\\))",
        device: "smartphone",
        model: "$1"
    }, z0 = {
        regex: "(KM9PRO|BB2 PRO|KII PRO|KM9_TV_BOX)[);/ ]",
        device: "tv",
        models: [
            {
                regex: "KM9PRO",
                model: "KM9 Pro"
            },
            {
                regex: "KM9_TV_BOX",
                model: "KM9 TV Box"
            },
            {
                regex: "BB2 PRO",
                model: "BB2 Pro"
            },
            {
                regex: "KII PRO",
                model: "KII Pro"
            }
        ]
    }, J0 = {
        regex: "Modecom|Free(?:Way )?Tab|xino z[\\d]+ x[\\d]+",
        device: "tablet",
        models: [
            {
                regex: "xino Z([\\d]+) X([\\d]+)",
                model: "Xino Z$1 X$2",
                device: "smartphone"
            },
            {
                regex: "FreeTab[ _\\-]?([^/;]+)? Build",
                model: "FreeTab $1"
            },
            {
                regex: "FreeTab[ _\\-]?((?!Build)[^);/ ]+)?",
                model: "FreeTab $1"
            },
            {
                regex: "FreeWay Tab[ _\\-]?([^/;]+) Build",
                model: "FreeWay Tab $1"
            },
            {
                regex: "FreeWay Tab[ _\\-]?((?!Build)[^);/ ]+)",
                model: "FreeWay Tab $1"
            }
        ]
    }, q0 = {
        regex: "Mofut",
        device: "smartphone",
        models: [
            {
                regex: "Mofut[ _\\-]?([^/;]+) Build",
                model: "$1"
            },
            {
                regex: "Mofut[ _\\-]?((?!Build)[^);/ ]+)",
                model: "$1"
            }
        ]
    }, j0 = {
        regex: "MOT(?!TO)|(?<!AN)DROID ?(?:Build|[a-z0-9]+)|portalmmm/2.0 (?:E378i|L6|L7|v3)|XOOM [^;/]*Build|XT1925-10|XT1799-2|XT1021|XT180[3-5]|(?:XT|MZ|MB|ME)[0-9]{3,4}[a-z]?(?:\\(Defy\\)|-0[1-5])?(?:[;]? Build|\\))",
        device: "smartphone",
        models: [
            {
                regex: "MOT-V360",
                model: "V360",
                device: "feature phone"
            },
            {
                regex: "(?:MOT-|Motorola-)?XT300",
                model: "Spice"
            },
            {
                regex: "(?:MOT-|Motorola-)?XT30[35]",
                model: "Motosmart ME"
            },
            {
                regex: "(?:MOT-|Motorola-)?XT31[16]",
                model: "Fire"
            },
            {
                regex: "(?:MOT-|Motorola-)?XT32[01]",
                model: "Defy Mini"
            },
            {
                regex: "(?:MOT-|Motorola-)?XT3(?:89|90)",
                model: "Motosmart"
            },
            {
                regex: "(?:MOT-|Motorola-)?XT502",
                model: "Quench"
            },
            {
                regex: "(?:MOT-|Motorola-)?XT531",
                model: "Fire XT"
            },
            {
                regex: "(?:MOT-|Motorola-)?XT535",
                model: "Defy"
            },
            {
                regex: "(?:MOT-|Motorola-)?XT55[567]C?",
                model: "Defy XT"
            },
            {
                regex: "(?:MOT-|Motorola-)?XT603",
                model: "Admiral"
            },
            {
                regex: "(?:MOT-|Motorola-)?XT610",
                model: "Droid Pro"
            },
            {
                regex: "(?:MOT-|Motorola-)?XT615",
                model: "Motoluxe"
            },
            {
                regex: "(?:MOT-|Motorola-)?XT621",
                model: "Primus"
            },
            {
                regex: "(?:MOT-|Motorola-)?XT626",
                model: "IronRock"
            },
            {
                regex: "(?:MOT-|Motorola-)?XT682",
                model: "Atrix"
            },
            {
                regex: "(?:MOT-|Motorola-)?XT685",
                model: "Motoluxe Dual-SIM"
            },
            {
                regex: "(?:MOT-|Motorola-)?XT687",
                model: "Atrix TV"
            },
            {
                regex: "(?:MOT-|Motorola-)?XT720",
                model: "Milestone"
            },
            {
                regex: "(?:MOT-|Motorola-)?XT800W",
                model: "Glam"
            },
            {
                regex: "(?:MOT-|Motorola-)?XT860",
                model: "Milestone 3"
            },
            {
                regex: "(?:MOT-|Motorola-)?XT881",
                model: "Electrify 2"
            },
            {
                regex: "(?:MOT-|Motorola-)?XT882",
                model: "Moto XT882"
            },
            {
                regex: "(?:MOT-|Motorola-)?XT88[56]",
                model: "Droid RAZR V"
            },
            {
                regex: "(?:MOT-|Motorola-)?XT890",
                model: "Droid RAZR i"
            },
            {
                regex: "(?:MOT-|Motorola-)?XT894",
                model: "Droid 4"
            },
            {
                regex: "(?:MOT-|Motorola-)?XT897",
                model: "Photon Q"
            },
            {
                regex: "(?:MOT-|Motorola-)?XT901",
                model: "Electrify M"
            },
            {
                regex: "(?:MOT-|Motorola-)?XT90[567]",
                model: "Droid RAZR M"
            },
            {
                regex: "(?:MOT-|Motorola-)?XT910S?",
                model: "Droid RAZR"
            },
            {
                regex: "(?:MOT-|Motorola-)?XT91[4568]",
                model: "Droid RAZR D1"
            },
            {
                regex: "(?:MOT-|Motorola-)?XT9(?:19|20)",
                model: "Droid RAZR D3"
            },
            {
                regex: "(?:MOT-|Motorola-)?XT925",
                model: "Droid RAZR HD"
            },
            {
                regex: "(?:MOT-|Motorola-)?XT102[12]",
                model: "Moto E"
            },
            {
                regex: "(?:MOT-|Motorola-)?XT1706",
                model: "Moto E3 Power"
            },
            {
                regex: "(?:MOT-|Motorola-)?XT1030",
                model: "Droid Mini"
            },
            {
                regex: "(?:MOT-|Motorola-)?XT1096",
                model: "Moto X2"
            },
            {
                regex: "(?:MOT-|Motorola-)?XT1254",
                model: "Droid Turbo"
            },
            {
                regex: "(?:MOT-|Motorola-)?XT10(?:28|3[1234]|68|69)",
                model: "Moto G"
            },
            {
                regex: "(?:MOT-|Motorola-)?XT1799-2",
                model: "Moto G5s"
            },
            {
                regex: "(?:MOT-|Motorola-)?XT180[3-5]",
                model: "Moto G5s Plus"
            },
            {
                regex: "(?:MOT-|Motorola-)?XT168[57]",
                model: "Moto G5 Plus"
            },
            {
                regex: "(?:MOT-|Motorola-)?XT1670",
                model: "Moto G5"
            },
            {
                regex: "(?:MOT-|Motorola-)?XT1925-10",
                model: "Moto G6"
            },
            {
                regex: "(?:MOT-|Motorola-)?XT10(?:49|5[23568]|60|9[23457])",
                model: "Moto X"
            },
            {
                regex: "(?:MOT-|Motorola-)?XT1562",
                model: "Moto X Play"
            },
            {
                regex: "(?:MOT-|Motorola-)?XT1080",
                model: "Droid Ultra"
            },
            {
                regex: "(?:MOT-|Motorola-)?XT1650-05",
                model: "Moto Z"
            },
            {
                regex: "(?:MOT-|Motorola-)?XT1635(?:-0[1-3])?",
                model: "Moto Z Play"
            },
            {
                regex: "(?:MOT-|Motorola-)?XT1710-(?:-02)?",
                model: "Moto Z2 Play"
            },
            {
                regex: "(?:MOT-|Motorola-)?XT1789-05",
                model: "Moto Z2 Force"
            },
            {
                regex: "(?:MOT-|Motorola-)?XT1663",
                model: "Moto M"
            },
            {
                regex: "Moto ([CGEXZ]) ?\\(([a-z0-9]+)\\)( Plus| Play)?",
                model: "Moto $1$2$3"
            },
            {
                regex: "Moto ?([CGEXZ])([0-9]+)( Plus| Play)?",
                model: "Moto $1$2$3"
            },
            {
                regex: "Moto ?([CGEXZ])( Plus| Play)?",
                model: "Moto $1$2"
            },
            {
                regex: "Motorola[ _\\-]([a-z0-9]+)",
                model: "$1"
            },
            {
                regex: "MOTORAZR[ _\\-]([a-z0-9]+)",
                model: "RAZR $1"
            },
            {
                regex: "MOTORIZR[ _\\-]([a-z0-9]+)",
                model: "RIZR $1"
            },
            {
                regex: "MOT(?!OROLA)[O]?[_\\-]?([a-z0-9.]+)",
                model: "$1"
            },
            {
                regex: "(?<!AN)DROID ?([a-z0-9 ]*) Build",
                model: "DROID $1"
            },
            {
                regex: "(?<!AN)DROID ?([a-z0-9]+)",
                model: "DROID $1"
            },
            {
                regex: "portalmmm/2.0 ((?:E378i|L6|L7|V3)[a-z0-9]+)",
                model: "$1"
            },
            {
                regex: "(XOOM [^;/]*)Build",
                device: "tablet",
                model: "$1"
            },
            {
                regex: "(MZ[0-9]{3})[);/ ]",
                device: "tablet",
                model: "$1"
            },
            {
                regex: "((?:ME|MB|XT)[0-9]{3,4}(?:\\(Defy\\))?)[);/ ]",
                model: "$1"
            }
        ]
    }, ec = {
        regex: "MOVIC",
        device: "smartphone",
        models: [
            {
                regex: "MOVIC[ -]W([2345])",
                model: "W$1"
            }
        ]
    }, rc = {
        regex: "MTN-",
        device: "smartphone",
        models: [
            {
                regex: "MTN-(L860|S620)",
                model: "Sm@rt Mini $1"
            },
            {
                regex: "MTN-8978P",
                device: "tablet",
                model: "Steppa"
            },
            {
                regex: "MTN-([a-z0-9_\\-]+)",
                model: "MTN-$1"
            }
        ]
    }, oc = {
        regex: "(?:MyPhone|MyPad|MyTab)[ _][^;/)]+( Build|\\))|Cube_LTE|myTab10II|HAMMER[ _](Blade2_PRO|ENERGY|Titan 2|AXE[_ ](?:M[_ ]LTE|Pro)|Iron 2|Active[2]?(_LTE)?)|C-Smart_pix|myPhone_Fun_8",
        device: "smartphone",
        models: [
            {
                regex: "MyPad[ _]([^;/]+) Build",
                model: "MyPad $1",
                device: "tablet"
            },
            {
                regex: "MyTab[ _]([^;/]+) Build",
                model: "MyTab $1",
                device: "tablet"
            },
            {
                regex: "myTab10II",
                model: "MyTab 10 II",
                device: "tablet"
            },
            {
                regex: "Cube_LTE",
                model: "Cube LTE"
            },
            {
                regex: "HAMMER[ _]ENERGY",
                model: "Hammer Energy"
            },
            {
                regex: "HAMMER_AXE[_ ]M[_ ]LTE",
                model: "Hammer Axe M LTE"
            },
            {
                regex: "Hammer Titan 2",
                model: "Hammer Titan 2"
            },
            {
                regex: "Hammer Iron 2",
                model: "Hammer Iron 2"
            },
            {
                regex: "Hammer Active[);/ ]",
                model: "Hammer Active"
            },
            {
                regex: "Hammer_Active2[);/ ]",
                model: "Hammer Active 2"
            },
            {
                regex: "Hammer_Active2_LTE[);/ ]",
                model: "Hammer Active 2 LTE"
            },
            {
                regex: "Hammer AXE Pro",
                model: "Hammer Axe Pro"
            },
            {
                regex: "Hammer_Blade2_PRO",
                model: "Hammer Blade 2 Pro"
            },
            {
                regex: "C-Smart_pix",
                model: "C-Smart Pix"
            },
            {
                regex: "myPhone_Fun_8",
                model: "FUN 8"
            },
            {
                regex: "MyPhone[ _]([^;/)]+)( Build|\\))",
                model: "$1"
            }
        ]
    }, lc = {
        regex: "MyWigo ",
        device: "smartphone",
        models: [
            {
                regex: "City3",
                model: "City 3"
            }
        ]
    }, dc = {
        regex: " (Myria_[^/;]+|502M|Cozy|Easy tab 9|Grand) Build|Myria_FIVE|Myria_Grand_4G|Myria_Wide_2|Myria_Wide_4G",
        device: "smartphone",
        models: [
            {
                regex: "Myria_([^/;]+) Build",
                model: "$1"
            },
            {
                regex: "Myria_FIVE",
                model: "Five"
            },
            {
                regex: "(502M|Grand)",
                model: "$1"
            },
            {
                regex: "Myria_Grand_4G",
                model: "Grand 4G"
            },
            {
                regex: "Myria_Wide_4G",
                model: "Wide 4G"
            },
            {
                regex: "Myria_Wide_2",
                model: "Wide 2"
            },
            {
                regex: "(Cozy|Easy tab 9)",
                model: "$1",
                device: "tablet"
            }
        ]
    }, ac = {
        regex: "Superme_Max",
        device: "smartphone",
        models: [
            {
                regex: "Superme_Max",
                model: "Supreme Max"
            }
        ]
    }, tc = {
        regex: "NOA[ _]|HummerLE|NextSE",
        device: "smartphone",
        models: [
            {
                regex: "NOA[_ ]CORE[_ ]FORTE",
                model: "Core Forte"
            },
            {
                regex: "HummerLE",
                model: "Hummer LE"
            },
            {
                regex: "NOA[_ ]Hummer[_ ]Lite",
                model: "Hummer Lite"
            },
            {
                regex: "NOA[_ ]MOVEse",
                model: "Move SE"
            },
            {
                regex: "NextSE",
                model: "Next SE"
            },
            {
                regex: "NOA[_ ]NEXT",
                model: "Next"
            },
            {
                regex: "NOA[_ ]VISION[_ ]H3SE",
                model: "Vision H3SE"
            },
            {
                regex: "NOA[_ ]VISION[_ ]H3",
                model: "Vision H3"
            },
            {
                regex: "NOA[_ ]LOOP",
                model: "Loop"
            },
            {
                regex: "NOA[_ ]H4se",
                model: "H4SE"
            },
            {
                regex: "NOA[_ ]Mg12",
                model: "MG12"
            },
            {
                regex: "NOA[_ ]H44SE",
                model: "H44SE"
            },
            {
                regex: "NOA[_ ]H10LE",
                model: "H10LE"
            },
            {
                regex: "NOA[_ ]([^;)/ ]+)",
                model: "$1"
            }
        ]
    }, ic = {
        regex: "Nobby[ ](S500|X800)[;/) ]",
        device: "smartphone",
        model: "$1"
    }, nc = {
        regex: "NEC[ _\\-]|KGT/2\\.0|portalmmm/1\\.0 (?:DB|N)|(?:portalmmm|o2imode)/2.0[ ,]N",
        device: "smartphone",
        models: [
            {
                regex: "(?:NEC[ _\\-]|KGT/2\\.0 )([a-z0-9]+)",
                model: "$1"
            },
            {
                regex: "portalmmm/1\\.0 ((?:DB|N)[a-z0-9]+)",
                model: "$1"
            },
            {
                regex: "(?:portalmmm|o2imode)/2\\.0[ ,](N[a-z0-9]+)",
                model: "$1"
            }
        ]
    }, mc = {
        regex: "Neffos|(TP601A)[;)/ ]",
        device: "smartphone",
        models: [
            {
                regex: "TP601A[;)/ ]",
                model: "C5L"
            },
            {
                regex: "Neffos[_ ]Y50",
                model: "Y50"
            },
            {
                regex: "Neffos[_ ]((?:Y|N|C|X)[0-9][A-Z]?(?: Max| Lite)?)",
                model: "$1"
            }
        ]
    }, sc = {
        regex: "(Robin) Build",
        device: "smartphone",
        model: "$1"
    }, gc = {
        regex: "NEWGEN\\-([a-z0-9]+)",
        device: "feature phone",
        model: "$1"
    }, xc = {
        regex: "GTV100",
        device: "tv",
        models: [
            {
                regex: "GTV100",
                model: "NeoTV Prime"
            }
        ]
    }, cc = {
        regex: "NIM-",
        device: "smartphone",
        models: [
            {
                regex: "NIM-(450D|550O|600Q)",
                model: "$1"
            }
        ]
    }, uc = {
        regex: "Next[0-9]|NX785QC8G|NXM900MC|NX008HD8G|NX010HI8G|NXM908HC|NXM726|NXA8QC116",
        device: "tablet",
        models: [
            {
                regex: "NX008HD8G",
                model: "Premium 8 HD"
            },
            {
                regex: "NXA8QC116",
                model: "Ares 8"
            },
            {
                regex: "NXM908HC",
                model: "Premium 9"
            },
            {
                regex: "NX010HI8G",
                model: "Premium 10 Hi"
            },
            {
                regex: "NX785QC8G",
                model: "8"
            },
            {
                regex: "NXM900MC",
                model: "8 HD"
            },
            {
                regex: "NXM726",
                model: "Premium 7"
            },
            {
                regex: "Next([0-9]+[^;/]+) Build",
                model: "Next $1"
            }
        ]
    }, Sc = {
        regex: "NGM[_ ][a-z0-9]+|(Forward|Dynamic)[ _]?[^/;]+(?:Build|/)",
        device: "smartphone",
        models: [
            {
                regex: "(Forward|Dynamic)[ _]?([^/;]+) Build",
                model: "$1 $2"
            },
            {
                regex: "(Forward|Dynamic)[ _]?([^/;]+)/",
                model: "$1 $2"
            },
            {
                regex: "NGM ([^;/]+) Build",
                model: "$1"
            },
            {
                regex: "NGM_([a-z0-9]+)",
                model: "$1"
            }
        ]
    }, Ac = {
        regex: "S?Nexian",
        device: "smartphone",
        models: [
            {
                regex: "S?Nexian[ ]?([a-z0-9\\-]+)",
                model: "$1"
            },
            {
                regex: "S?Nexian-([a-z0-9]+)",
                model: "$1"
            }
        ]
    }, pc = {
        regex: "NOAIN",
        device: "smartphone",
        models: [
            {
                regex: "NOAIN[ _-]([^;/]+) Build",
                model: "$1"
            },
            {
                regex: "NOAIN[ _-]([^;/)]+)[;/)]",
                model: "$1"
            }
        ]
    }, vc = {
        regex: "Noblex|NBX-",
        device: "smartphone",
        models: [
            {
                regex: "(?:Noblex|NBX)[ _-]([^;/]+) Build",
                model: "$1"
            },
            {
                regex: "(?:Noblex|NBX)[ _-]([^;/)]+)[;/)]",
                model: "$1"
            }
        ]
    }, Mc = {
        regex: "Nomi[ _-]|(C101010 Ultra2|i501[23]|i5032|i5050|i5532|C0(700(?:[02358]|2HD)|7850)|C1010[0-3])[;/) ]",
        device: "smartphone",
        models: [
            {
                regex: "i501[23][;/) ]",
                model: "Evo M2"
            },
            {
                regex: "i5032[;/) ]",
                model: "Evo X2"
            },
            {
                regex: "i5050[;/) ]",
                model: "Evo Z"
            },
            {
                regex: "i5532[;/) ]",
                model: "Space X2"
            },
            {
                regex: "C101010 Ultra2",
                model: "Ultra 2",
                device: "tablet"
            },
            {
                regex: "(C0(?:700(?:[02358]|2HD)|7850)|C1010[0-3])[;/) ]",
                model: "$1",
                device: "tablet"
            },
            {
                regex: "Nomi[ _-]([^;/]+) Build",
                model: "$1"
            },
            {
                regex: "Nomi[ _-]([^;/)]+)[;/)]",
                model: "$1"
            }
        ]
    }, Pc = {
        regex: "NS([356]|500[2-68]|5511|5502)[;/) ]",
        device: "smartphone",
        models: [
            {
                regex: "(NS[0-9]{1,4})[;/) ]",
                model: "$1"
            }
        ]
    }, Tc = {
        regex: "(SHIELD Tablet K1) Build|Tegra(Note-P1640| Note 7)",
        device: "tablet",
        models: [
            {
                regex: "TegraNote-P1640",
                model: "Tegra Note P1640"
            },
            {
                regex: "(SHIELD Tablet K1|Tegra Note 7)(?: Build|\\))",
                model: "$1"
            }
        ]
    }, hc = {
        regex: "Xda|(?<!FBCR/)O2[ \\-]|COCOON",
        device: "smartphone",
        models: [
            {
                regex: "(Xda[ _][a-z0-9_]+)",
                model: "$1"
            },
            {
                regex: "(COCOON)",
                model: "$1"
            },
            {
                regex: "O2 ([a-z0-9 ]+)",
                model: "$1"
            },
            {
                regex: "O2-([a-z0-9]+)",
                model: "$1"
            }
        ]
    }, bc = {
        regex: "ODYS[ _-]|IEOS[_ ]([^/;]+)|NOON(?:_PRO)? Build|SPACE10_(?:PLUS|PRO)_3G|THOR_?10|TAO_X10|RAPID_?(?:10|7)_?LTE|MAVEN_?10_|CONNECT[78]|ELEMENT10_PLUS_3G|XELIO[_0-9P]|ADM816HC|ADM8000KP|NEO6_LTE|EOS10|AEON|FALCON_10_PLUS_3G|FUSION|THANOS_10",
        device: "tablet",
        models: [
            {
                regex: "XELIO[_ ]A10",
                model: "Xelio A10"
            },
            {
                regex: "XELIOPHONETAB3",
                model: "Xelio Phonetab 3"
            },
            {
                regex: "THANOS_10",
                model: "Thanos 10"
            },
            {
                regex: "XELIO_NEXT_10_PLUS_3G",
                model: "Xelio Next 10 Plus 3G"
            },
            {
                regex: "XELIO_PHONE_TAB7_3G",
                model: "Xelio Phonetab 7 3G"
            },
            {
                regex: "XELIO10EXTREME",
                model: "Xelio 10 Xtreme"
            },
            {
                regex: "XELIO10_PLUS_3G",
                model: "Xelio 10 Plus 3G"
            },
            {
                regex: "ELEMENT10_PLUS_3G",
                model: "Element 10 Plus 3G"
            },
            {
                regex: "CONNECT8PLUS",
                model: "Connect 8 Plus"
            },
            {
                regex: "CONNECT7PRO",
                model: "Connect 7 Pro"
            },
            {
                regex: "MAVEN_?10_PRO_PLUS_3G",
                model: "Maven 10 Pro Plus 3G"
            },
            {
                regex: "MAVEN_?10_?PLUS",
                model: "Maven 10 Plus"
            },
            {
                regex: "MAVEN_?10_?PRO",
                model: "Maven 10 Pro"
            },
            {
                regex: "MAVEN_?10_?HD",
                model: "Maven 10 HD"
            },
            {
                regex: "RAPID_?7_?LTE",
                model: "Rapid 7 LTE"
            },
            {
                regex: "RAPID_?10_?LTE",
                model: "Rapid 10 LTE"
            },
            {
                regex: "TAO_X10",
                model: "Tao X10"
            },
            {
                regex: "SPACE10_PLUS_3G",
                model: "Space 10 Plus 3G"
            },
            {
                regex: "SPACE10_PRO_3G",
                model: "Space 10 Pro 3G"
            },
            {
                regex: "THOR_?10 Build",
                model: "Thor 10"
            },
            {
                regex: "ADM816HC",
                model: "Neo X"
            },
            {
                regex: "EOS10",
                model: "EOS 10"
            },
            {
                regex: "AEON",
                model: "Aeon"
            },
            {
                regex: "FALCON_10_PLUS_3G",
                model: "Falcon 10 Plus 3G"
            },
            {
                regex: "FUSION",
                model: "Fusion 7"
            },
            {
                regex: "NEO6[_ ]LTE",
                model: "Neo 6 LTE",
                device: "smartphone"
            },
            {
                regex: "ADM8000KP",
                model: "Titan"
            },
            {
                regex: "THOR_?10_PLUS_3G",
                model: "Thor 10 Plus 3G"
            },
            {
                regex: "IEOS[ _]([^/;]+) Build",
                model: "Ieos $1"
            },
            {
                regex: "(?:ODYS[ _-])?NOON Build",
                model: "Noon"
            },
            {
                regex: "(?:ODYS[ _-])?NOON_PRO Build",
                model: "Noon Pro"
            },
            {
                regex: "Odys[ _-]([^/;]+) Build",
                model: "$1"
            }
        ]
    }, Lc = {
        regex: "Obi[ _-]|(SJ1\\.5|SJ2\\.6|S400|S452\\+|S451|S453|S501|S502|S503\\+?|S507|S520|S550|S551|falcon)[ _]",
        device: "smartphone",
        models: [
            {
                regex: "SJ2\\.6",
                model: "SJ2.6"
            },
            {
                regex: "SJ1\\.5",
                model: "SJ1.5"
            },
            {
                regex: "(?:Obi_)?S400",
                model: "Skipper"
            },
            {
                regex: "(?:Obi_)?S451|falcon",
                model: "Flacon"
            },
            {
                regex: "(?:Obi_)?S452\\+",
                model: "Python"
            },
            {
                regex: "(?:Obi_)?S453",
                model: "Fox"
            },
            {
                regex: "(?:Obi_)?S501",
                model: "Wolverine"
            },
            {
                regex: "(?:Obi_)?S502",
                model: "Leopard"
            },
            {
                regex: "(?:Obi_)?S503\\+",
                model: "Boa Plus"
            },
            {
                regex: "(?:Obi_)?S503",
                model: "Boa"
            },
            {
                regex: "(?:Obi_)?S507",
                model: "Pelican"
            },
            {
                regex: "(?:Obi_)?S520",
                model: "Octopus"
            },
            {
                regex: "(?:Obi_)?S550",
                model: "Crane"
            },
            {
                regex: "(?:Obi_)?S551",
                model: "Hornbill"
            },
            {
                regex: "(?:Obi_)?S454",
                model: "Alligator"
            },
            {
                regex: "Obi[ _-]([^;/]+) Build",
                model: "$1"
            },
            {
                regex: "Obi[ _-]([^;/)]+)[;/)]",
                model: "$1"
            }
        ]
    }, _c = {
        regex: "Onda",
        device: "smartphone",
        models: [
            {
                regex: "ONDA MID",
                model: "MID",
                device: "tablet"
            },
            {
                regex: "([a-z0-9]+)[ _]Onda",
                model: "$1"
            },
            {
                regex: "Onda ([a-z0-9]+)",
                model: "$1"
            }
        ]
    }, Gc = {
        regex: "(?:du_)?ONEPLUS|(?:A0001|A200[135]|A300[03]|A3010|A5000|A600[03]|A601[03]|E100[135]|GM191[03517]|GM190[013]|HD1910|HD190[01357])(?: Build|\\))",
        device: "smartphone",
        models: [
            {
                regex: "GM191[03517]",
                model: "7 Pro"
            },
            {
                regex: "GM190[013]",
                model: "7"
            },
            {
                regex: "HD190[01357]",
                model: "7T"
            },
            {
                regex: "HD1910",
                model: "7T Pro"
            },
            {
                regex: "A0001",
                model: "One"
            },
            {
                regex: "A200[135]|OnePlus2",
                model: "2"
            },
            {
                regex: "E100[135]",
                model: "X"
            },
            {
                regex: "A3010|OnePlus3T",
                model: "3T"
            },
            {
                regex: "A300[03]|OnePlus3",
                model: "3"
            },
            {
                regex: "A5010|OnePlus5T",
                model: "5T"
            },
            {
                regex: "A5000|OnePlus5",
                model: "5"
            },
            {
                regex: "A600[03]|OnePlus6",
                model: "6"
            },
            {
                regex: "A601[03]",
                model: "6T"
            },
            {
                regex: "(?:du_)?ONEPLUS ?([^;/]+) Build",
                model: "$1"
            }
        ]
    }, Bc = {
        regex: "(?:RMX(?:19(03|4[1235]|9[23]|2[157]|[01379]1)|2030|2051|18(0[1579]|11|3[13]|2[157]|[45]1|45))|(?:OPPO[ _]?)?CPH1861)[ ;/)]",
        device: "smartphone",
        models: [
            {
                regex: "(?:OPPO[ _]?)?CPH1861[);/ ]",
                model: "1"
            },
            {
                regex: "RMX180[59]",
                model: "2"
            },
            {
                regex: "RMX180[17]",
                model: "2 Pro"
            },
            {
                regex: "RMX(1833|182[15])",
                model: "3"
            },
            {
                regex: "RMX1827",
                model: "3i"
            },
            {
                regex: "RMX1851",
                model: "3 Pro"
            },
            {
                regex: "RMX190[13]",
                model: "X"
            },
            {
                regex: "RMX199[12]",
                model: "X2"
            },
            {
                regex: "RMX1993",
                model: "X2 Dual"
            },
            {
                regex: "RMX1931",
                model: "X2 Pro"
            },
            {
                regex: "RMX1921",
                model: "XT"
            },
            {
                regex: "RMX19(11|27)",
                model: "5"
            },
            {
                regex: "RMX1971",
                model: "5 Pro"
            },
            {
                regex: "RMX2030",
                model: "5i"
            },
            {
                regex: "RMX1925",
                model: "5S"
            },
            {
                regex: "RMX1811",
                model: "C1"
            },
            {
                regex: "RMX194[1235]",
                model: "C2"
            },
            {
                regex: "RMX1831",
                model: "U1"
            },
            {
                regex: "RMX2051",
                model: "X50 5G"
            }
        ]
    }, Nc = {
        regex: "(?:OB-)?OPPO[ _]?([a-z0-9]+)|N1T|(?:X90[07][0679]|U707T?|X909T?|R(?:10[01]1|2001|201[07]|6007|7005|7007|80[13579]|81[13579]|82[01379]|83[013]|800[067]|8015|810[679]|811[13]|820[057])[KLSTW]?|N520[79]|N5117|A33f|A33fw|A37fw?|PAAM00|PAAT00|PAC[TM]00)[);/ ]|R7kf|R7plusf|R7Plusm|A1601|CPH[0-9]{4}|CPH19(69|79|23|1[179])|PB(A[TM]00|CT10|BT30|CM[13]0|[FD]M00)|P(ADM00|AF[TM]00|ADT00|AHM00|BBM[03]0|BBT00|BDT00|BFT00|[CB]E[MT]00|CA[MT]00|C[CDG]M00|CA[MT]10|CPM00|CRM00|CD[TM]10|CHM[13]0|CKM[08]0|CLM10|DEM[13]0|DHM00|DKM00|DB[TM]00|DCM00|CNM00)",
        device: "smartphone",
        models: [
            {
                regex: "PCHM10[);/ ]",
                model: "A11"
            },
            {
                regex: "CPH1923[);/ ]",
                model: "A1K"
            },
            {
                regex: "(?:OPPO[ _]?)?(CPH1837|PAD[TM]00)[);/ ]",
                model: "A3"
            },
            {
                regex: "A37f[);/ ]",
                model: "A37f"
            },
            {
                regex: "(?:OPPO[ _]?)?A37f(w)?(?: Build|\\))",
                model: "A37f$1"
            },
            {
                regex: "(?:OPPO[ _]?)?CPH1605[);/ ]",
                model: "A39"
            },
            {
                regex: "(?:OPPO[ _]?)?(?:CPH18(?:0[35]|53)|PBBM30)[);/ ]",
                model: "A3s"
            },
            {
                regex: "(?:OPPO[ _]?)?(?:CPH1809|PBA[TM]00|PBBT30)[);/ ]",
                model: "A5"
            },
            {
                regex: "CPH193[13][);/ ]",
                model: "A5 (2020)"
            },
            {
                regex: "(?:OPPO[ _]?)?CPH170[15][);/ ]",
                model: "A57"
            },
            {
                regex: "CPH1909[);/ ]",
                model: "A5S"
            },
            {
                regex: "(?:OPPO[ _]?)?(?:CPH1901|PBF[TM]00)[);/ ]",
                model: "A7"
            },
            {
                regex: "(?:OPPO[ _]?)?(CPH1801|CPH1717)[);/ ]",
                model: "A71"
            },
            {
                regex: "(?:OPPO[ _]?)?CPH1715[);/ ]",
                model: "A77"
            },
            {
                regex: "PCDM00[);/ ]",
                model: "A7n"
            },
            {
                regex: "(PBBT00|PBBM00)[);/ ]",
                model: "A7x"
            },
            {
                regex: "(?:OPPO[ _]?)?(?:PDBM00)[);/ ]",
                model: "A8"
            },
            {
                regex: "(?:OPPO[ _]?)?CPH1729[);/ ]",
                model: "A83"
            },
            {
                regex: "(?:OPPO[ _]?)?CPH1827[);/ ]",
                model: "A83 (2018)"
            },
            {
                regex: "PCA[TM]10[);/ ]",
                model: "A9"
            },
            {
                regex: "(CPH1937|PCHM30)[);/ ]",
                model: "A9 (2020)"
            },
            {
                regex: "(?:OPPO[ _]?)?CPH1938[);/ ]",
                model: "A9 (EN)"
            },
            {
                regex: "PCPM00[);/ ]",
                model: "A91"
            },
            {
                regex: "PDKM00[);/ ]",
                model: "A93s"
            },
            {
                regex: "PCE[TM]00[);/ ]",
                model: "A9x"
            },
            {
                regex: "(?:OPPO[ _]?)?CPH1851[);/ ]",
                model: "AX5"
            },
            {
                regex: "CPH1920[);/ ]",
                model: "AX5s"
            },
            {
                regex: "(?:OPPO[ _]?)?CPH1903[);/ ]",
                model: "AX7"
            },
            {
                regex: "(?:OPPO[ _]?)?X9009[);/ ]",
                model: "F1 Plus"
            },
            {
                regex: "CPH1911[);/ ]",
                model: "F11"
            },
            {
                regex: "CPH1969[);/ ]",
                model: "F11 Pro"
            },
            {
                regex: "(?:OPPO[ _]?)?A1601[);/ ]",
                model: "F1s"
            },
            {
                regex: "(?:OPPO[ _]?)?CPH1609[);/ ]",
                model: "F3"
            },
            {
                regex: "(?:OPPO[ _]?)?CPH1613[);/ ]",
                model: "F3 Plus"
            },
            {
                regex: "(?:OPPO[ _]?)?CPH172[37][);/ ]",
                model: "F5"
            },
            {
                regex: "(?:OPPO[ _]?)?CPH1725[);/ ]",
                model: "F5 Youth"
            },
            {
                regex: "(?:OPPO[ _]?)?CPH(1859|18(?:19|21))[);/ ]",
                model: "F7"
            },
            {
                regex: "(?:OPPO[ _]?)?(?:CPH1825|CPH1881)[);/ ]",
                model: "F9"
            },
            {
                regex: "(?:OPPO[ _]?)?CPH1823[);/ ]",
                model: "F9 Pro"
            },
            {
                regex: "(?:OPPO[ _]?)?X909T?[);/ ]",
                model: "Find 5"
            },
            {
                regex: "(?:OPPO[ _]?)?R827T?[);/ ]",
                model: "Find 5 Mini"
            },
            {
                regex: "(?:OPPO[ _]?)?X907[067][);/ ]",
                model: "Find 7"
            },
            {
                regex: "(?:OPPO[ _]?)?X900[067][);/ ]",
                model: "Find 7a"
            },
            {
                regex: "(?:OPPO[ _]?)?R815[TW]?[);/ ]",
                model: "Find Clover"
            },
            {
                regex: "(?:OPPO[ _]?)?R8015[);/ ]",
                model: "Find Guitar"
            },
            {
                regex: "(?:OPPO[ _]?)?R8111[);/ ]",
                model: "Find Melody"
            },
            {
                regex: "(?:OPPO[ _]?)?R821T?[);/ ]",
                model: "Find Muse"
            },
            {
                regex: "(?:OPPO[ _]?)?U707T?[);/ ]",
                model: "Find Way S"
            },
            {
                regex: "(?:OPPO[ _]?)?(?:CPH187[15]|PAF[MT]00)[);/ ]",
                model: "Find X"
            },
            {
                regex: "(?:OPPO[ _]?)?(?:PAHM00)[);/ ]",
                model: "Find X Lamborghini"
            },
            {
                regex: "(?:OPPO[ _]?)?(PDEM10)[);/ ]",
                model: "Find X2"
            },
            {
                regex: "(?:OPPO[ _]?)?(PDEM30)[);/ ]",
                model: "Find X2 Pro"
            },
            {
                regex: "(?:OPPO[ _]?)?R1011 Build",
                model: "Joy Plus"
            },
            {
                regex: "(?:OPPO[ _]?)?(PBC(?:M30|T10))[);/ ]",
                model: "K1"
            },
            {
                regex: "(?:OPPO[ _]?)?(PCNM00)[);/ ]",
                model: "K5"
            },
            {
                regex: "(?:OPPO[ _]?)?N5117[);/ ]",
                model: "N1 Mini"
            },
            {
                regex: "(?:OPPO[ _]?)?N520[79][);/ ]",
                model: "N3"
            },
            {
                regex: "(?:OPPO[ _]?)?R831T?[);/ ]",
                model: "Neo"
            },
            {
                regex: "(?:OPPO[ _]?)?R831K[);/ ]",
                model: "Neo 3"
            },
            {
                regex: "(?:OPPO[ _]?)?R831[SL][);/ ]",
                model: "Neo 5"
            },
            {
                regex: "(?:OPPO[ _]?)?A33f[);/ ]",
                model: "Neo 7"
            },
            {
                regex: "(?:OPPO[ _]?)?A33fw[);/ ]",
                model: "Neo 7s"
            },
            {
                regex: "(?:OPPO[ _]?)?R8113[);/ ]",
                model: "Piano"
            },
            {
                regex: "(?:OPPO[ _]?)?CPH1707[);/ ]",
                model: "R11"
            },
            {
                regex: "(?:OPPO[ _]?)?CPH1719[);/ ]",
                model: "R11s"
            },
            {
                regex: "(?:OPPO[ _]?)?CPH1721[);/ ]",
                model: "R11s Plus"
            },
            {
                regex: "(?:OPPO[ _]?)?(?:CPH1835|PAC[TM]00|PAAM00)[);/ ]",
                model: "R15"
            },
            {
                regex: "(?:OPPO[ _]?)?(?:CPH1831|PAAT00)[);/ ]",
                model: "R15 Pro"
            },
            {
                regex: "PBCM10[);/ ]",
                model: "R15x"
            },
            {
                regex: "(?:OPPO[ _]?)?(?:CPH1879|PBE[MT]00)[);/ ]",
                model: "R17"
            },
            {
                regex: "(?:OPPO[ _]?)?(?:CPH1893)[);/ ]",
                model: "R17 Neo"
            },
            {
                regex: "(?:OPPO[ _]?)?(?:CPH1877|PBD[MT]00)[);/ ]",
                model: "R17 Pro"
            },
            {
                regex: "(?:OPPO[ _]?)?R8006[);/ ]",
                model: "R1L"
            },
            {
                regex: "(?:OPPO[ _]?)?R800[07][);/ ]",
                model: "R1S"
            },
            {
                regex: "(?:OPPO[ _]?)?R810[679][);/ ]",
                model: "R5"
            },
            {
                regex: "(?:OPPO[ _]?)?R7kf[);/ ]",
                model: "R7 Lite"
            },
            {
                regex: "(?:OPPO[ _]?)?R7Plusm[);/ ]",
                model: "R7 Plus"
            },
            {
                regex: "(?:OPPO[ _]?)?R7Plusf[);/ ]",
                model: "R7 Plus F"
            },
            {
                regex: "(?:OPPO[ _]?)?CPH1607[);/ ]",
                model: "R9s"
            },
            {
                regex: "(?:OPPO[ _]?)?CPH1611[);/ ]",
                model: "R9s Plus"
            },
            {
                regex: "(?:CPH1917|PCA[MT]00)[);/ ]",
                model: "Reno"
            },
            {
                regex: "PCCM00[);/ ]",
                model: "Reno 10X"
            },
            {
                regex: "CPH1919[);/ ]",
                model: "Reno 10X Zoom"
            },
            {
                regex: "PCKM00[);/ ]",
                model: "Reno 2"
            },
            {
                regex: "(?:PCKM80|CPH1945)[);/ ]",
                model: "Reno 2Z"
            },
            {
                regex: "PDCM00[);/ ]",
                model: "Reno 3 5G"
            },
            {
                regex: "PCRM00[);/ ]",
                model: "Reno 3 Pro"
            },
            {
                regex: "CPH1921[);/ ]",
                model: "Reno 5G"
            },
            {
                regex: "PCLM10[);/ ]",
                model: "Reno Ace"
            },
            {
                regex: "PDHM00[);/ ]",
                model: "Reno Ace 2"
            },
            {
                regex: "PCGM00[);/ ]",
                model: "Reno K3"
            },
            {
                regex: "(?:OPPO[ _]?)?(?:CPH1979|PCD[TM]10)[);/ ]",
                model: "Reno Z"
            },
            {
                regex: "N1T?[);/ ]",
                model: "N1T",
                device: "phablet"
            },
            {
                regex: "R([0-9]{3,4}[KSTW]?)[);/ ]",
                model: "R$1"
            },
            {
                regex: "(CPH[0-9]{4})",
                model: "$1"
            },
            {
                regex: "(?:OB-)?OPPO[ _]?((?!Browser)[a-z0-9]+)",
                model: "$1"
            }
        ]
    }, Cc = {
        regex: "Opsson|IUSAI",
        device: "smartphone",
        models: [
            {
                regex: "IUSAI[ _]([^/;]+) Build",
                model: "Iusai $1"
            },
            {
                regex: "IUSAI[ _]([^/;\\)]+)[/;\\)]",
                model: "Iusai $1"
            },
            {
                regex: "Opsson[ _]([^/;]+) Build",
                model: "$1"
            },
            {
                regex: "(?:Opsson-)?Opsson[ -_]([^/;]+)/",
                model: "$1"
            }
        ]
    }, Ec = {
        regex: "SPV[ \\-]?([a-z0-9]+)|(?<!FBCR/)Orange[ _-](?!Tahiti-LS\\))([^/;]+)( Build|\\))(?<!Tahiti-LS\\))|SC/IHD92|FunTab ([^/;]+) Build",
        device: "smartphone",
        models: [
            {
                regex: "SC/IHD92",
                model: "Livebox Play",
                device: "tv"
            },
            {
                regex: "Sego",
                model: "Sego",
                device: "tablet"
            },
            {
                regex: "FunTab ([^/;]+) Build",
                model: "FunTab $1",
                device: "tablet"
            },
            {
                regex: "Orange[ _-](Rise)(3[12]|5[12])[ ;/)]",
                model: "$1 $2"
            },
            {
                regex: "Orange[ _-](Dive)72[ ;/)]",
                model: "$1 72"
            },
            {
                regex: "Orange[ _-](Daytona|Dive (30|7[13])|Dublin|Fova|Gova|Hi 4G|Hiro|Kivo|Monte Carlo|Neva 80|Neva play|Nura|Reyo|Rise[_ ](3[034]|40|5[345])|Rono|Roya|San Francisco|Tactile internet 2|Tado|Yomi|Yumo|Zali)[ ;/)]",
                model: "$1"
            },
            {
                regex: "SPV[ \\-]?([a-z0-9]+)",
                model: "SPV $1"
            }
        ]
    }, Oc = {
        regex: "OUKI|OK[AU][0-9]+[a-z]* Build",
        device: "smartphone",
        models: [
            {
                regex: "OUKI[ _-]?([^;/]+) Build",
                model: "$1"
            },
            {
                regex: "([^;/)]+) Build/OUKI",
                model: "$1"
            },
            {
                regex: "OUKI[ _-]?([^;/)]+)[;/)]",
                model: "$1"
            },
            {
                regex: "(OK[AU][0-9]+[a-z]*) Build",
                model: "$1"
            }
        ]
    }, wc = {
        regex: "(?:C15|C16|K10000)[ _]Pro",
        device: "smartphone",
        models: [
            {
                regex: "(C15|C16|K10000)[ _]Pro",
                model: "$1 Pro"
            }
        ]
    }, fc = {
        regex: "OV-[a-z]+(?:[^;(/]*)[();/ ]|Qualcore 1010|Vertis 5021 Aim",
        device: "tablet",
        models: [
            {
                regex: "OV-V10",
                model: "Vertis Yard",
                device: "smartphone"
            },
            {
                regex: "Vertis 5021 Aim",
                model: "Vertis 5021 Aim",
                device: "smartphone"
            },
            {
                regex: "OV-Vertis[ _-]([^;/]+) Build",
                model: "Vertis $1",
                device: "smartphone"
            },
            {
                regex: "Qualcore 1010",
                model: "Qualcore 1010",
                device: "tablet"
            },
            {
                regex: "(OV-[a-z]+(?:[^;(/]*))(?<!Build)[();/ ]",
                model: "$1"
            }
        ]
    }, yc = {
        regex: "Oysters|T84ERI[ _]3G|T72HM(s_)?3G|(T74HMi|T84Bi)[_ ]4G|T74MR4G|T84Ni[_ ][34]G|Pacific[ ]?800i",
        device: "tablet",
        models: [
            {
                regex: "Pacific[ ]?800i",
                device: "smartphone",
                model: "Pacific 800i"
            },
            {
                regex: "Oysters ((?:Arctic|Indian|Atlantic|Pacific)[^/;]+) Build",
                device: "smartphone",
                model: "$1"
            },
            {
                regex: "(T84ERI[ _]3G|T72HM(s_)?3G|(?:(T74HMi|T84Bi)[_ ]4G)|T84Ni[_ ][34]G)",
                model: "$1"
            },
            {
                regex: "(T74MR)(4G)",
                model: "$1 $2"
            },
            {
                regex: "Oysters ([^/;]+)( Build|\\))",
                model: "$1"
            }
        ]
    }, Xc = {
        regex: "T-i708D",
        device: "smartphone",
        models: [
            {
                regex: "T-i708D",
                device: "tablet",
                model: "T-i708D"
            }
        ]
    }, $c = {
        regex: "Panasonic|PANATV[0-9]+|Viera/|P902i[);/ ]|Eluga[ _]|FZ-N1|P55 Novo 4G|DMC-CM1",
        device: "smartphone",
        models: [
            {
                regex: "Eluga[ _-]([^;/]+) Build",
                model: "Eluga $1"
            },
            {
                regex: "Eluga[ _-]([^;/]+)[;/)]",
                model: "Eluga $1"
            },
            {
                regex: "(DMC-CM1)",
                model: "Lumix $1",
                device: "camera"
            },
            {
                regex: "FZ-N1",
                model: "Toughpad"
            },
            {
                regex: "P55 Novo 4G",
                model: "P55 Novo 4G"
            },
            {
                regex: "P902i[);/ ]",
                device: "feature phone",
                model: "P902i"
            },
            {
                regex: "Panasonic MIL DLNA",
                device: "tv",
                model: "Viera Cast"
            },
            {
                regex: "PANATV[0-9]+|Viera/",
                device: "tv",
                model: "Smart TV"
            },
            {
                regex: "Panasonic[ _\\-]?([a-z0-9]+)",
                model: "$1"
            },
            {
                regex: "portalmmm/2.0 (P[a-z0-9]+)",
                model: "$1"
            }
        ]
    }, Ic = {
        regex: "Art-PCB-V116|Bee-PCB-V216|Clap-PCB-I316|PCB-T(103|715)",
        device: "smartphone",
        models: [
            {
                regex: "Art-PCB-V116",
                model: "Art"
            },
            {
                regex: "Bee-PCB-V216",
                model: "Bee"
            },
            {
                regex: "Clap-PCB-I316",
                model: "Clap"
            },
            {
                regex: "PCB-T103",
                device: "tablet",
                model: "Curi Lite"
            },
            {
                regex: "PCB-T715",
                device: "tablet",
                model: "T715"
            }
        ]
    }, Fc = {
        regex: "PH4001",
        device: "smartphone",
        models: [
            {
                regex: "PH4001",
                model: "PH4001"
            }
        ]
    }, Dc = {
        regex: "Pentagram|Quadra|Monster X5",
        device: "tablet",
        models: [
            {
                regex: "(?:PENTAGRAM[_ ])?EON[_ ]PRIX",
                model: "Eon Prix"
            },
            {
                regex: "Quadra 7( UltraSlim)?",
                model: "Quadra 7 UltraSlim"
            },
            {
                regex: "Monster X5?",
                model: "Monster X5",
                device: "smartphone"
            },
            {
                regex: "Quadra ?([^);/]*) Build",
                model: "Quadra $1"
            },
            {
                regex: "Pentagram ?TAB ?([^);/]*) Build",
                model: "Tab $1"
            },
            {
                regex: "Pentagram ?([^);/]*) Build",
                model: "$1",
                device: "smartphone"
            }
        ]
    }, Rc = {
        regex: "Philips|AND1E[);/ ]|NETTV/|PI3210G|TLE(821L|722G)|TPM1[79]1E",
        device: "smartphone",
        models: [
            {
                regex: "AND1E(?: TV)?[);/ ]",
                model: "Android TV",
                device: "tv"
            },
            {
                regex: "(PI3210G)",
                model: "$1",
                device: "tablet"
            },
            {
                regex: "(TPM1[79]1E)",
                model: "$1",
                device: "tv"
            },
            {
                regex: "(TLE821L)[);/ ]",
                model: "$1 4G LTE",
                device: "tablet"
            },
            {
                regex: "(TLE722G)[);/ ]",
                model: "$1",
                device: "tablet"
            },
            {
                regex: "Philips, BDP([0-9]{4})",
                model: "Blu-ray Player (BDP$1)",
                device: "tv"
            },
            {
                regex: "(NETTV/[0-9\\.]{5})",
                model: "NetTV Series",
                device: "tv"
            },
            {
                regex: "Philips-FISIO ([a-z0-9]+)",
                model: "Fisio $1"
            },
            {
                regex: "Philips[ _-]?([a-z0-9\\-@]+)",
                model: "$1"
            }
        ]
    }, Vc = {
        regex: "phoneOne[ \\-]?([a-z0-9]+)",
        device: "smartphone",
        model: "$1"
    }, Uc = {
        regex: "PD\\-(3127NC|3127) Build",
        device: "tablet",
        models: [
            {
                regex: "PD\\-3127NC Build",
                model: "PD-3127NC"
            },
            {
                regex: "PD\\-3127 Build",
                model: "PD-3127"
            }
        ]
    }, Hc = {
        regex: "Pioneer|.*; R1 Build",
        device: "smartphone",
        models: [
            {
                regex: ".*; R1 Build",
                model: "R1",
                device: "tablet"
            },
            {
                regex: "Pioneer[ _-]?([^;/]+) Build",
                model: "$1"
            },
            {
                regex: "Pioneer[ _-]?([^;/)]+)[;/)]",
                model: "$1"
            }
        ]
    }, kc = {
        regex: "Pixus|(Ride[_ ]4G|Play[ _]Three[ _]v(?:[24].0|3.1))[;)\\ ]",
        device: "tablet",
        models: [
            {
                regex: "Ride[_ ]4G",
                model: "Ride 4G"
            },
            {
                regex: "Play[ _]Three[ _]v([24].0|3.1)",
                model: "Play Three v$1"
            },
            {
                regex: "Play Two",
                model: "Play Two"
            },
            {
                regex: "Touch 7 3G",
                model: "Touch 7 3G"
            },
            {
                regex: "Raze",
                model: "Raze",
                device: "smartphone"
            },
            {
                regex: "Pixus_Jet",
                model: "Jet",
                device: "smartphone"
            },
            {
                regex: "pixus hit 2",
                model: "Hit 2",
                device: "smartphone"
            }
        ]
    }, Wc = {
        regex: "PULID[ _]|F1[01357]\\+? Build",
        device: "smartphone",
        models: [
            {
                regex: "F(1[01357]\\+?) Build",
                model: "F$1"
            },
            {
                regex: "PULID[ _]([^;/]+) Build",
                model: "$1"
            },
            {
                regex: "PULID[ _]([a-z0-9_]+)\\)",
                model: "$1"
            }
        ]
    }, Kc = {
        regex: "POMP[ _-]",
        device: "smartphone",
        models: [
            {
                regex: "POMP[ _-]([^;/]+) Build",
                model: "$1"
            },
            {
                regex: "POMP[ _-]([^;/)]+)[;/)]",
                model: "$1"
            }
        ]
    }, Yc = {
        regex: "(KING 7S?)",
        device: "smartphone",
        model: "$1"
    }, Qc = {
        regex: "PLT([^;/]+) Build",
        device: "tablet",
        model: "PLT$1"
    }, Zc = {
        regex: "Readboy[ _-]",
        device: "tablet",
        models: [
            {
                regex: "Readboy[ _-]([^;/]+) Build",
                model: "$1"
            },
            {
                regex: "Readboy[ _-]([^;/]+)[;/)]",
                model: "$1"
            }
        ]
    }, zc = {
        regex: "Roku/DVP",
        device: "tv",
        model: "Digital Video Player"
    }, Jc = {
        regex: "IO Pro",
        device: "smartphone",
        models: [
            {
                regex: "IO Pro",
                model: "IO Pro"
            }
        ]
    }, qc = {
        regex: "(Rombica|SSQ-A0500)[);/ ]",
        device: "tv",
        models: [
            {
                regex: "SSQ-A0500[);/ ]",
                model: "Smart Stick 4K"
            },
            {
                regex: "(Infinity K8|Smart Box (?:v005|Quad|Ultra HD v002|4K V001))[);/ ]",
                model: "$1"
            }
        ]
    }, jc = {
        regex: "Rover ([0-9]+)",
        device: "feature phone",
        model: "$1"
    }, e1 = {
        regex: "(RoverPad|RoverPhone)[);/ ]",
        device: "tablet",
        models: [
            {
                regex: "RoverPhone[);/ ]",
                model: "",
                device: "smartphone"
            },
            {
                regex: "RoverPad sky 7.85[);/ ]",
                model: "Sky 7.85"
            },
            {
                regex: "RoverPad (10.4|Air S70|9.7 3G|Sky 9.7|3W A73|3W7|3WT70|3W9.4)[);/ ]",
                model: "$1"
            }
        ]
    }, r1 = {
        regex: "Roadrover ChangAn S",
        device: "tablet",
        model: "ChangAn S"
    }, o1 = {
        regex: "NEON_RAY",
        device: "smartphone",
        models: [
            {
                regex: "NEON_RAY",
                model: "Neon Ray"
            }
        ]
    }, l1 = {
        regex: "(SANTIN|BiTBiZ_V58)[);/_ ]",
        device: "smartphone",
        models: [
            {
                regex: "BiTBiZ_V58[);/ ]",
                model: "BiTBiZ V58"
            },
            {
                regex: "GreenOrange[);/ ]",
                model: "Green Orange"
            },
            {
                regex: "halove[);/ ]",
                model: "Halove"
            },
            {
                regex: "monica[);/ ]",
                model: "Monica"
            },
            {
                regex: "POWER[);/ ]",
                model: "Power"
            },
            {
                regex: "GALAZ[);/ ]",
                model: "Galaz"
            },
            {
                regex: "NEWDUN[);/ ]",
                model: "Newdun"
            },
            {
                regex: "SANTIN[ _][#]?(Dante|Candy U7|Armor|YSL-Y7|ANT.W|N[13]|JS|S6|V9)[);/ ]",
                model: "$1"
            }
        ]
    }, d1 = {
        regex: "SIEMENS|SIE-|portalmmm/2\\.0 SI|S55|SL45i",
        device: "smartphone",
        models: [
            {
                regex: "SIEMENS[ \\-]([a-z0-9]+)",
                model: "$1"
            },
            {
                regex: "SIE(?:MENS )?[\\-]?([a-z0-9]+)",
                model: "$1"
            },
            {
                regex: "(?:SIE-)?(S55|SL45i)",
                model: "$1"
            },
            {
                regex: "portalmmm/2.0 (SI[a-z0-9]+)",
                model: "$1"
            }
        ]
    }, a1 = JSON.parse('{"regex":"SAMSUNG(?! ?Browser)|Maple |SC-(?:02[CH]|04E|01F)|N[57]100|N5110|N9100|S(?:CH|GH|PH|EC|AM|HV|HW|M)-|SMART-TV|GT-|Galaxy|(?:portalmmm|o2imode)/2\\\\.0 [SZ]|sam[rua]|vollo Vi86[);/ ]|(?:OTV-)?SMT-E5015|ISW11SC|SCV3[1-9]|404SC","device":"smartphone","models":[{"regex":"GT-B9150","device":"tv","model":"Home Sync"},{"regex":"(?:OTV-)?SMT-E5015","device":"tv","model":"SMT-E5015"},{"regex":"Maple ","device":"tv","model":""},{"regex":"(?:SAMSUNG-)?(?:GT-)?N5100","device":"tablet","model":"GALAXY Note 8.0\\""},{"regex":"(?:SAMSUNG-)?(?:GT-)?N5110","device":"tablet","model":"GALAXY Note 8.0\\" WiFi"},{"regex":"(?:SAMSUNG-)?GT-N5120","device":"tablet","model":"GALAXY Note 8.0\\" LTE"},{"regex":"(?:SAMSUNG-)?GT-N8000","device":"tablet","model":"GALAXY Note 10.1\\""},{"regex":"(?:SAMSUNG-)?GT-N8010","device":"tablet","model":"GALAXY Note 10.1\\" WiFi"},{"regex":"(?:SAMSUNG-)?GT-N8020","device":"tablet","model":"GALAXY Note 10.1\\" LTE"},{"regex":"(?:SAMSUNG-)?GT-P1000M?|SCH-I800","device":"tablet","model":"GALAXY Tab"},{"regex":"(?:SAMSUNG-)?GT-P3100B?","device":"tablet","model":"GALAXY Tab 2 7\\""},{"regex":"(?:SAMSUNG-)?GT-P311[03]","device":"tablet","model":"GALAXY Tab 2 7\\" WiFi"},{"regex":"(?:SAMSUNG-)?GT-P5100|SCH-I915","device":"tablet","model":"GALAXY Tab 2 10.1\\""},{"regex":"(?:SAMSUNG-)?GT-P511[03]","device":"tablet","model":"GALAXY Tab 2 10.1\\" WiFi"},{"regex":"(?:SAMSUNG-)?GT-P5200","device":"tablet","model":"GALAXY Tab 3 10.1\\""},{"regex":"(?:SAMSUNG-)?GT-P5210","device":"tablet","model":"GALAXY Tab 3 10.1\\" WiFi"},{"regex":"(?:SAMSUNG-)?GT-P5220","device":"tablet","model":"GALAXY Tab 3 10.1\\" LTE"},{"regex":"(?:SAMSUNG-)?GT-P6200","device":"tablet","model":"GALAXY Tab 7\\" Plus"},{"regex":"(?:SAMSUNG-)?GT-P6201","device":"tablet","model":"GALAXY Tab 7\\" Plus N"},{"regex":"(?:SAMSUNG-)?GT-P6810","device":"tablet","model":"GALAXY Tab 7.7\\""},{"regex":"(?:SAMSUNG-)?GT-P7100","device":"tablet","model":"GALAXY Tab 10.1v"},{"regex":"(?:SAMSUNG-)?GT-P75[01]0","device":"tablet","model":"GALAXY Tab 10.1\\""},{"regex":"(?:SAMSUNG-)?SM-P600","device":"tablet","model":"GALAXY Note 10.1\\" 2014 Edition WiFi"},{"regex":"(?:SAMSUNG-)?SM-P60[12]","device":"tablet","model":"GALAXY Note 10.1\\" 2014 Edition"},{"regex":"(?:SAMSUNG-)?SM-(?:P605|P607T)","device":"tablet","model":"GALAXY Note 10.1\\" 2014 Edition LTE"},{"regex":"(?:SAMSUNG-)?SM-P900","device":"tablet","model":"GALAXY NotePRO 12.2\\" WiFi"},{"regex":"(?:SAMSUNG-)?SM-P901","device":"tablet","model":"GALAXY NotePRO 12.2\\""},{"regex":"(?:SAMSUNG-)?SM-P905","device":"tablet","model":"GALAXY NotePRO 12.2\\" LTE"},{"regex":"(?:SAMSUNG-)?SM-P205","device":"tablet","model":"Galaxy Tab A with S Pen (2019)"},{"regex":"(?:SAMSUNG-)?SM-T110","device":"tablet","model":"GALAXY Tab 3 7.0\\" Lite WiFi"},{"regex":"(?:SAMSUNG-)?SM-T830X","device":"tablet","model":"GALAXY Tab S4"},{"regex":"(?:SAMSUNG-)?SM-T111","device":"tablet","model":"GALAXY Tab 3 7.0\\" Lite"},{"regex":"(?:SAMSUNG-)?SM-T116(?:BU|NU|NY)?","device":"tablet","model":"GALAXY Tab 3 V"},{"regex":"(?:SAMSUNG-)?SM-T2105","device":"tablet","model":"GALAXY Tab 3 7.0\\" Kids"},{"regex":"(?:SAMSUNG-)?SM-T210R?","device":"tablet","model":"GALAXY Tab 3 7.0\\" WiFi"},{"regex":"(?:SAMSUNG-)?SM-T21(?:1|7[AS])","device":"tablet","model":"GALAXY Tab 3 7.0\\""},{"regex":"(?:SAMSUNG-)?SM-T230(?:NU)?","device":"tablet","model":"GALAXY Tab 4 7.0\\" WiFi"},{"regex":"(?:SAMSUNG-)?SM-T231","device":"tablet","model":"GALAXY Tab 4 7.0\\" 3G"},{"regex":"(?:SAMSUNG-)?SM-T310","device":"tablet","model":"GALAXY Tab 3 8.0\\" WiFi"},{"regex":"(?:SAMSUNG-)?SM-T311","device":"tablet","model":"GALAXY Tab 3 8.0\\""},{"regex":"(?:SAMSUNG-)?SM-T315","device":"tablet","model":"GALAXY Tab 3 8.0\\" LTE"},{"regex":"(?:SAMSUNG-)?SM-T330","device":"tablet","model":"GALAXY Tab 4 8.0\\" WiFi"},{"regex":"(?:SAMSUNG-)?SM-T335","device":"tablet","model":"GALAXY Tab 4 8.0\\" LTE"},{"regex":"(?:SAMSUNG-)?SM-T520","device":"tablet","model":"GALAXY TabPRO 10.1\\" WiFi"},{"regex":"(?:SAMSUNG-)?SM-T535","device":"tablet","model":"GALAXY Tab 4 10.1\\" LTE"},{"regex":"(?:SAMSUNG-)?SM-T320","device":"tablet","model":"GALAXY TabPRO 8.4\\" WiFi"},{"regex":"(?:SAMSUNG-)?SM-T325","device":"tablet","model":"GALAXY TabPRO 8.4\\" LTE"},{"regex":"(?:SAMSUNG-)?SM-T525","device":"tablet","model":"GALAXY TabPRO 10.1\\" LTE"},{"regex":"(?:SAMSUNG-)?SM-T530(?:NU)?","device":"tablet","model":"GALAXY Tab 4 10.1\\" WiFi"},{"regex":"(?:SAMSUNG-)?SM-T700","device":"tablet","model":"GALAXY Tab S 8.4\\" WiFi"},{"regex":"(?:SAMSUNG-)?SM-T705","device":"tablet","model":"GALAXY Tab S 8.4\\" LTE"},{"regex":"(?:SAMSUNG-)?SM-T800","device":"tablet","model":"GALAXY Tab S 10.5\\" WiFi"},{"regex":"(?:SAMSUNG-)?SM-T805","device":"tablet","model":"GALAXY Tab S 10.5\\" LTE"},{"regex":"(?:SAMSUNG-)?SM-T813","device":"tablet","model":"GALAXY Tab S2 9.7\\" WiFi"},{"regex":"(?:SAMSUNG-)?SM-T815","device":"tablet","model":"GALAXY Tab S2 9.7\\" LTE"},{"regex":"(?:SAMSUNG-)?SM-T820","device":"tablet","model":"GALAXY Tab S3 9.7\\" WiFi"},{"regex":"(?:SAMSUNG-)?SM-T825","device":"tablet","model":"GALAXY Tab S3 9.7\\" LTE"},{"regex":"(?:SAMSUNG-)?SM-T900","device":"tablet","model":"GALAXY TabPRO 12.2\\" WiFi"},{"regex":"(?:SAMSUNG-)?SM-T280","device":"tablet","model":"GALAXY Tab A 7.0\\" WiFi"},{"regex":"(?:SAMSUNG-)?SM-T285","device":"tablet","model":"GALAXY Tab A 7.0\\" LTE"},{"regex":"(?:SAMSUNG-)?SM-T3[58]0","device":"tablet","model":"GALAXY Tab A 8.0\\" WiFi"},{"regex":"(?:SAMSUNG-)?SM-(?:P350|T3[58]5)","device":"tablet","model":"GALAXY Tab A 8.0\\" LTE"},{"regex":"(?:SAMSUNG-)?SM-T295","device":"tablet","model":"GALAXY Tab A 8.0\\" LTE (2019)"},{"regex":"(?:SAMSUNG-)?SM-(?:P355([MY])?|T550)","device":"tablet","model":"GALAXY Tab A 9.7\\" WiFi"},{"regex":"(?:SAMSUNG-)?SM-(?:P550|P555(M)?|T555)","device":"tablet","model":"GALAXY Tab A 9.7\\" LTE"},{"regex":"(?:SAMSUNG-)?SM-(?:T58[05]|P58[05])","device":"tablet","model":"GALAXY Tab A 10.1\\" WiFi (2016)"},{"regex":"(?:SAMSUNG-)?SM-T597","device":"tablet","model":"GALAXY Tab A 10.5\\" LTE (2018)"},{"regex":"(?:SAMSUNG-)?SM-T37[57]","device":"tablet","model":"GALAXY Tab E 8.0\\""},{"regex":"(?:SAMSUNG-)?SM-T560","device":"tablet","model":"GALAXY Tab E 9.6\\" WiFi"},{"regex":"(?:SAMSUNG-)?SM-T561","device":"tablet","model":"GALAXY Tab E 9.6\\" 3G"},{"regex":"(?:SAMSUNG-)?SM-T365","device":"tablet","model":"GALAXY Tab Active"},{"regex":"(?:SAMSUNG-)?SM-T39[57]","device":"tablet","model":"GALAXY Tab Active 2"},{"regex":"(?:SAMSUNG-)?SM-M305","device":"tablet","model":"GALAXY M30"},{"regex":"(?:SAMSUNG-)?SM-M405","device":"tablet","model":"GALAXY M40"},{"regex":"(?:SAMSUNG )?SM-R820","device":"wearable","model":"GALAXY Watch Active 2"},{"regex":"(?:SAMSUNG-)?SM-G850[AMSWY]","model":"GALAXY Alpha"},{"regex":"(?:SAMSUNG-)?GT-B5330","model":"GALAXY Chat"},{"regex":"(?:SAMSUNG-)?SM-A605K","model":"GALAXY Jean"},{"regex":"(?:SAMSUNG-)?GT-B5510","model":"GALAXY Y Pro"},{"regex":"(?:SAMSUNG-)?GT-B5512","model":"GALAXY Y Pro Duos"},{"regex":"(?:SAMSUNG-)?GT-B7510","model":"GALAXY Pro"},{"regex":"(?:SAMSUNG-)?GT-I5700","model":"GALAXY Spica"},{"regex":"(?:SAMSUNG-)?GT-I5801","model":"GALAXY Apollo"},{"regex":"(?:SAMSUNG-)?GT-I5800","model":"GALAXY 3"},{"regex":"(?:SAMSUNG-)?GT-I8000","model":"Omnia II"},{"regex":"(?:SAMSUNG-)?GT-I8150","model":"GALAXY W"},{"regex":"(?:SAMSUNG-)?GT-S5830","model":"GALAXY Ace"},{"regex":"(?:SAMSUNG-)?GT-I8160","model":"GALAXY Ace 2"},{"regex":"(?:SAMSUNG-)?SM-G313(?:HY|M[LUY]|[FM])","model":"GALAXY Ace 4"},{"regex":"(?:SAMSUNG-)?SM-G313[HU]","model":"GALAXY Ace 4 Lite"},{"regex":"(?:SAMSUNG-)?GT-I8190","model":"GALAXY S III mini"},{"regex":"(?:SAMSUNG-)?GT-I8200","model":"GALAXY S III mini Value Edition"},{"regex":"(?:SAMSUNG-)?GT-I826[02]","model":"GALAXY Core"},{"regex":"(?:SAMSUNG-)?GT-I8320","model":"H1"},{"regex":"(?:SAMSUNG-)?GT-I85[23]0","model":"GALAXY Beam"},{"regex":"(?:SAMSUNG-)?SM-G600S","model":"GALAXY Wide"},{"regex":"(?:SAMSUNG-)?GT-I855[028]","model":"GALAXY Win"},{"regex":"(?:SAMSUNG-)?GT-I8580","model":"GALAXY Core Advance"},{"regex":"(?:SAMSUNG-)?GT-I8730","model":"GALAXY Express"},{"regex":"(?:SAMSUNG-)?SM-E500(?:F|H|HQ|M)","model":"GALAXY E5"},{"regex":"(?:SAMSUNG-)?SM-E700(?:0|9|F|H|M)","model":"GALAXY E7"},{"regex":"(?:SAMSUNG-)?GT-I90(?:00|08|18|88)","model":"GALAXY S"},{"regex":"(?:SAMSUNG-)?GT-I9001","model":"GALAXY S Plus"},{"regex":"(?:SAMSUNG-)?GT-I9003","model":"GALAXY SL"},{"regex":"(?:SAMSUNG-)?GT-I9010","model":"GALAXY S Giorgio Armani"},{"regex":"(?:SAMSUNG-)?GT-I9070","model":"GALAXY S Advance"},{"regex":"(?:SAMSUNG-)?GT-I910[08]","model":"GALAXY S II"},{"regex":"(?:SAMSUNG-)?ISW11SC","model":"GALAXY S II WiMAX"},{"regex":"(?:SAMSUNG-)?GT-I9103","model":"GALAXY R"},{"regex":"(?:SAMSUNG-)?GT-I9105","model":"GALAXY S II Plus"},{"regex":"(?:SAMSUNG-)?SM-G730(?:W8|[AV])","model":"GALAXY S3 mini"},{"regex":"(?:SAMSUNG-)?(?:GT-I919[05]|SCH-I435)","model":"GALAXY S4 mini"},{"regex":"(?:SAMSUNG-)?GT-I9515","model":"GALAXY S4 Value Edition"},{"regex":"(?:SAMSUNG-)?GT-I9295","model":"GALAXY S4 ACTIVE"},{"regex":"(?:SAMSUNG-)?(?:GT-I9300|SCH-I535|SCH-L710)","model":"GALAXY S III"},{"regex":"(?:SAMSUNG-)?(?:GT-I9305|SCH-R530)","model":"GALAXY S III LTE"},{"regex":"(?:SAMSUNG-)?(?:GT-I9500|GT-I9502|GT-I9505|SCH-I545|SCH-I959|SCH-R970|GALAXY-S4|SGH-M919N?)","model":"GALAXY S4"},{"regex":"(?:SAMSUNG-)?GT-I9506","model":"GALAXY S4 with LTE+"},{"regex":"(?:SAMSUNG-)?GT-S5280","model":"GALAXY STAR"},{"regex":"(?:SAMSUNG-)?GT-S5301","model":"GALAXY POCKET Plus"},{"regex":"(?:SAMSUNG-)?GT-S5310","model":"GALAXY POCKET Neo"},{"regex":"(?:SAMSUNG-)?SM-G110[BHM]","model":"GALAXY POCKET 2"},{"regex":"(?:SAMSUNG-)?GT-S5360","model":"GALAXY Y Hello Kitty"},{"regex":"(?:SAMSUNG-)?GT-S6310","model":"GALAXY Young"},{"regex":"(?:SAMSUNG-)?GT-S6312","model":"GALAXY Young DUOS"},{"regex":"(?:SAMSUNG-)?SM-G130(?:BT|HN|[EHMU])","model":"GALAXY Young 2"},{"regex":"(?:SAMSUNG-)?SM-G130BU","model":"GALAXY Young 2 Pro"},{"regex":"(?:SAMSUNG-)?GT-S6790","model":"GALAXY FAME Lite with NFC"},{"regex":"(?:SAMSUNG-)?GT-S6810","model":"GALAXY FAME"},{"regex":"(?:SAMSUNG-)?GT-S7275","model":"GALAXY ACE 3"},{"regex":"(?:SAMSUNG-)?GT-S7390","model":"GALAXY Trend Lite"},{"regex":"(?:SAMSUNG-)?GT-S7500","model":"GALAXY ACE Plus"},{"regex":"(?:SAMSUNG-)?(?:GT-S7560|SCH-I699)","model":"GALAXY Trend"},{"regex":"(?:SAMSUNG-)?(?:GT-S7562|SCH-I919)","model":"GALAXY S DUOS"},{"regex":"(?:SAMSUNG-)?GT-S7582","model":"GALAXY S DUOS 2"},{"regex":"(?:SAMSUNG-)?SM-(?:G31[36]HU|G313HZ)","model":"GALAXY S DUOS 3"},{"regex":"(?:SAMSUNG-)?GT-S7580","model":"GALAXY Trend Plus"},{"regex":"(?:SAMSUNG-)?GT-S7710","model":"GALAXY Xcover 2"},{"regex":"(?:SAMSUNG-)?GT-S8500","model":"Wave"},{"regex":"(?:SAMSUNG-)?GT-S8530","model":"Wave II"},{"regex":"(?:SAMSUNG-)?GT-S8600","model":"Wave 3"},{"regex":"(?:SAMSUNG-)?GT-S5380","model":"Wave Y"},{"regex":"(?:SAMSUNG-)?GT-S7250","model":"Wave M"},{"regex":"(?:SAMSUNG-)?GT-S5250","model":"Wave 525"},{"regex":"(?:SAMSUNG-)?GT-S5330","model":"Wave 533"},{"regex":"(?:SAMSUNG-)?GT-S5780","model":"Wave 578"},{"regex":"(?:SAMSUNG-)?GT-S7230","model":"Wave 723"},{"regex":"(?:SAMSUNG-)?SM-(?:C101|C105([AL])?)","model":"GALAXY S4 zoom"},{"regex":"(?:SAMSUNG-)?SM-(?:C111(M)?|C115)","model":"GALAXY K zoom"},{"regex":"(?:SAMSUNG-)?SM-G318HZ","model":"GALAXY V Plus"},{"regex":"(?:SAMSUNG-)?SM-G350","model":"GALAXY CORE Plus"},{"regex":"(?:SAMSUNG-)?SM-G360[FH]?","model":"GALAXY CORE Prime"},{"regex":"(?:SAMSUNG-)?SM-G361[FH]?","model":"GALAXY CORE Prime Value Edition"},{"regex":"(?:SAMSUNG-)?SM-G386F","model":"GALAXY CORE LTE"},{"regex":"(?:SAMSUNG-)?SM-G3815","model":"GALAXY EXPRESS II"},{"regex":"(?:SAMSUNG-)?SM-G388F","model":"GALAXY Xcover 3"},{"regex":"(?:SAMSUNG-)?SM-G390F","model":"GALAXY Xcover 4"},{"regex":"(?:SAMSUNG-)?SM-G800","model":"GALAXY S5 mini"},{"regex":"(?:SAMSUNG-)?SM-G9009D","model":"GALAXY S5 Dual-SIM"},{"regex":"(?:SAMSUNG-)?SM-(?:G900|G906[KLS])|GALAXY-S5","model":"GALAXY S5"},{"regex":"(?:SAMSUNG-)?SM-G901F","model":"GALAXY S5 LTE+"},{"regex":"(?:SAMSUNG-)?SM-G870[AFW]","model":"GALAXY S5 Active"},{"regex":"(?:SAMSUNG-)?SM-G903[FMW]","model":"GALAXY S5 Neo"},{"regex":"(?:SAMSUNG-)?SM-G860P","model":"GALAXY S5 K Sport"},{"regex":"(?:SAMSUNG-)?SM-G920(?:F[DQ]|W8|[089AFIKLPRSTVX])","model":"GALAXY S6"},{"regex":"(?:SAMSUNG-)?SM-G890A","model":"GALAXY S5 Active"},{"regex":"404SC","model":"GALAXY S6 edge (Softbank)"},{"regex":"(?:SAMSUNG-)?SM-G925[0ADFIKLPRSTVW]|SCV31","model":"GALAXY S6 edge"},{"regex":"(?:SAMSUNG-)?SM-G928(?:7C|R4|W8|[07ACFGIKLPSTV])","model":"GALAXY S6 edge+"},{"regex":"(?:SAMSUNG-)?SM-G930(?:FD|W8|[0AFKLPRSTUV])","model":"GALAXY S7"},{"regex":"(?:SAMSUNG-)?SM-G935(?:R4|W8|[0AFKLPSTUVX])|SC-02H|SCV33","model":"GALAXY S7 edge"},{"regex":"(?:SAMSUNG-)?SM-G891A","model":"GALAXY S7 active"},{"regex":"(?:SAMSUNG-)?SM-G950[08FNUW]?|SCV36","model":"GALAXY S8"},{"regex":"(?:SAMSUNG-)?SM-G892[AU]","model":"GALAXY S8 Active"},{"regex":"(?:SAMSUNG-)?SM-G955[AFKLNPRTUVW0]|SCV35","model":"GALAXY S8+"},{"regex":"(?:SAMSUNG-)?SM-G960[FNUWX0]|SCV38","model":"GALAXY S9"},{"regex":"(?:SAMSUNG-)?SM-G965[FNUWX0]|SCV39","model":"GALAXY S9+"},{"regex":"(?:SAMSUNG-)?SM-G973","model":"GALAXY S10"},{"regex":"(?:SAMSUNG-)?SM-G975[0FUW]","model":"GALAXY S10+"},{"regex":"(?:SAMSUNG-)?SM-G970[FU]","model":"GALAXY S10e"},{"regex":"(?:SAMSUNG-)?SM-G980F","model":"GALAXY S20"},{"regex":"(?:SAMSUNG-)?SM-G981(?:[0BNUW]|U1)","model":"GALAXY S20 5G"},{"regex":"(?:SAMSUNG-)?SM-G988(?:[0BNUW]|U1)","model":"GALAXY S20 Ultra 5G"},{"regex":"(?:SAMSUNG-)?SM-G985F","model":"GALAXY S20+"},{"regex":"(?:SAMSUNG-)?SM-G986(?:[0BNUW]|U1)","model":"GALAXY S20+ 5G"},{"regex":"(?:SAMSUNG-)?SM-F700(?:[0FNUW]|U1)|SCV47","model":"GALAXY Z Flip"},{"regex":"(?:SAMSUNG-)?SCH-I200","model":"GALAXY Stellar"},{"regex":"(?:SAMSUNG-)?SCH-I829","model":"GALAXY Style Duos"},{"regex":"(?:SAMSUNG-)?(?:SGH-S730|SCH-R740)","model":"GALAXY Discover"},{"regex":"(?:SAMSUNG-)?SCH-S738","model":"GALAXY Centura"},{"regex":"vollo Vi86[);/ ]","model":"Vollo Vi86"},{"regex":"(?:SAMSUNG-)?SM-A300(?:FU|YZ|[0FGHMY])","model":"GALAXY A3 (2015)"},{"regex":"(?:SAMSUNG-)?SM-A310(?:N0|[FMY])","model":"GALAXY A3 (2016)"},{"regex":"(?:SAMSUNG-)?SM-A320(?:FL|F|Y)","model":"GALAXY A3 (2017)"},{"regex":"(?:SAMSUNG-)?SM-A500[LSWY]","model":"GALAXY A5"},{"regex":"(?:SAMSUNG-)?SM-A500[FGHKM0]","model":"GALAXY A5 Duos"},{"regex":"(?:SAMSUNG-)?SM-A500FU","model":"GALAXY A5 (2015)"},{"regex":"(?:SAMSUNG-)?SM-A510[0FKLMSY]","model":"GALAXY A5 (2016)"},{"regex":"(?:SAMSUNG-)?SM-A520[FKLSW]","model":"GALAXY A5 (2017)"},{"regex":"(?:SAMSUNG-)?SM-A600(?:AZ|FN|GN|T1|[AFGNPT])","model":"GALAXY A6"},{"regex":"(?:SAMSUNG-)?SM-A605(?:[FG]N|[FG])","model":"GALAXY A6+"},{"regex":"(?:SAMSUNG-)?SM-A700(?:YD|[0FHKLS])","model":"GALAXY A7"},{"regex":"(?:SAMSUNG-)?SM-A710[08FKLMSY]","model":"GALAXY A7 (2016)"},{"regex":"(?:SAMSUNG-)?SM-A720[FS]","model":"GALAXY A7 (2017)"},{"regex":"(?:SAMSUNG-)?SM-A750(?:GN|[FG])","model":"GALAXY A7 (2018)"},{"regex":"(?:SAMSUNG-)?SM-A(?:530F|800[0FISY])|SCV32","model":"GALAXY A8"},{"regex":"(?:SAMSUNG-)?SM-G885[FSY]","model":"GALAXY A8 Star"},{"regex":"(?:SAMSUNG-)?SM-A810(?:YZ|[FS])","model":"GALAXY A8 (2016)"},{"regex":"(?:SAMSUNG-)?SM-A530[NW]","model":"GALAXY A8 (2018)"},{"regex":"(?:SAMSUNG-)?SM-A730F","model":"GALAXY A8+ (2018)"},{"regex":"(?:SAMSUNG-)?SM-A9000","model":"GALAXY A9"},{"regex":"SM-A9\\\\[7\\\\]","model":"GALAXY A9 7"},{"regex":"(?:SAMSUNG-)?SM-A920F","model":"GALAXY A9 (2018)"},{"regex":"(?:SAMSUNG-)?SM-A910[0F]","model":"GALAXY A9 Pro"},{"regex":"(?:SAMSUNG-)?SM-A105[FGM]","model":"GALAXY A10"},{"regex":"(?:SAMSUNG-)?SM-A107[FM]","model":"GALAXY A10s"},{"regex":"(?:SAMSUNG-)?SM-A205[FG]","model":"GALAXY A20"},{"regex":"(?:SAMSUNG-)?SM-A202[FG]","model":"GALAXY A20e"},{"regex":"(?:SAMSUNG-)?SM-A305(?:FN|GT|[FG])","model":"GALAXY A30"},{"regex":"(?:SAMSUNG-)?SM-A405FN","model":"GALAXY A40"},{"regex":"(?:SAMSUNG-)?SM-A3051","model":"GALAXY A40s"},{"regex":"(?:SAMSUNG-)?SM-A505(?:FN|[FG])","model":"GALAXY A50"},{"regex":"(?:SAMSUNG-)?SM-A705(?:FN|[FG])","model":"GALAXY A70"},{"regex":"(?:SAMSUNG-)?GT-I9301I","model":"GALAXY S III Neo"},{"regex":"(?:SAMSUNG-)?SM-J100(?:FN|MU|[FHM])","model":"GALAXY J1"},{"regex":"(?:SAMSUNG-)?SM-J105(?:B|H)","model":"GALAXY J1 mini"},{"regex":"(?:SAMSUNG-)?SM-J106M","model":"GALAXY J1 mini Prime"},{"regex":"(?:SAMSUNG-)?SM-J120[AFHMT]","model":"GALAXY J1 (2016)"},{"regex":"(?:SAMSUNG-)?SM-J110[FHML]","model":"GALAXY J1 Ace"},{"regex":"(?:SAMSUNG-)?SM-J111[FM]","model":"GALAXY J1 Ace"},{"regex":"(?:SAMSUNG-)?SM-J200[FGHY]","model":"GALAXY J2"},{"regex":"(?:SAMSUNG-)?SM-J260AZ","model":"GALAXY J2 Pure"},{"regex":"(?:SAMSUNG-)?SM-J260([AFGM]|T1)","model":"GALAXY J2 Core"},{"regex":"(?:SAMSUNG-)?SM-J(?:210F|250[FM])","model":"GALAXY J2 Pro"},{"regex":"(?:SAMSUNG-)?SM-J320(?:FN|[AFGHMNPV])","model":"GALAXY J3 (2016)"},{"regex":"(?:SAMSUNG-)?SM-J330(?:F|G)","model":"GALAXY J3 (2017)"},{"regex":"(?:SAMSUNG-)?SM-J337W","model":"GALAXY J3 (2018)"},{"regex":"(?:SAMSUNG-)?SM-J400[FGM]","model":"GALAXY J4"},{"regex":"(?:SAMSUNG-)?SM-J500(?:F|FN|G|Y|M|H)","model":"GALAXY J5 (2015)"},{"regex":"(?:SAMSUNG-)?SM-J510(?:F|FN|MN)","model":"GALAXY J5 (2016)"},{"regex":"(?:SAMSUNG-)?SM-J530","model":"GALAXY J5 (2017)"},{"regex":"(?:SAMSUNG-)?SM-G570[FMY]","model":"GALAXY J5 Prime"},{"regex":"(?:SAMSUNG-)?SM-J600[FG]","model":"GALAXY J6"},{"regex":"(?:SAMSUNG-)?SM-J610[GF]","model":"GALAXY J6+"},{"regex":"(?:SAMSUNG-)?SM-J410F","model":"GALAXY J4 Core"},{"regex":"(?:SAMSUNG-)?SM-J415(?:F|FN)","model":"GALAXY J4+"},{"regex":"(?:SAMSUNG-)?SM-J7[01]0(?:8|F|FN|H|K|M|MN)","model":"GALAXY J7"},{"regex":"(?:SAMSUNG-)?SM-J700P","model":"GALAXY J7 (2015)"},{"regex":"(?:SAMSUNG-)?SM-J737U","model":"GALAXY J7 (2018)"},{"regex":"(?:SAMSUNG-)?SM-J700(?:T1|T)","model":"GALAXY J7 (2016)"},{"regex":"(?:SAMSUNG-)?SM-C710F","model":"GALAXY J7+ (C7)"},{"regex":"(?:SAMSUNG-)?SM-G610[FMY]","model":"GALAXY J7 Prime"},{"regex":"(?:SAMSUNG-)?SM-G611(?:FF|MT|M)","model":"GALAXY J7 Prime 2"},{"regex":"(?:SAMSUNG-)?SM-G615[F]","model":"GALAXY J7 Max"},{"regex":"(?:SAMSUNG-)?SM-J730(?:F|G|GM)","model":"GALAXY J7 Pro"},{"regex":"(?:SAMSUNG-)?SM-J701(?:F|M)","model":"GALAXY J7 Core"},{"regex":"(?:SAMSUNG-)?SM-J727(?:P|T|V)","model":"GALAXY J7 V"},{"regex":"SM-J7\\\\[7\\\\]","model":"GALAXY J7 7"},{"regex":"(?:SAMSUNG-)?SM-J810","model":"GALAXY J8"},{"regex":"SM-J8 Pro","model":"GALAXY J8 Pro"},{"regex":"SM-J9\\\\[7\\\\] Prime","model":"GALAXY J9 7 Prime"},{"regex":"SM-J9\\\\[8\\\\] Pro","model":"GALAXY J9 8 Pro"},{"regex":"(?:SAMSUNG-)?SM-M105F","model":"GALAXY M10"},{"regex":"(?:SAMSUNG-)?SM-M205[FG]","model":"GALAXY M20"},{"regex":"(?:SAMSUNG-)?SM-M307(F|FN)","model":"GALAXY M30s"},{"regex":"(?:SAMSUNG-)?SM-G850F","model":"GALAXY Alpha"},{"regex":"(?:SAMSUNG-)?SM-G910S","model":"GALAXY Round"},{"regex":"(?:SAMSUNG-)?SM-(?:G550FY|G5510|G5520)","model":"GALAXY On5"},{"regex":"(?:SAMSUNG-)?SM-G600(?:FY|[0F])","model":"GALAXY On7"},{"regex":"(?:SAMSUNG-)?SM-G610[0KLS]","model":"GALAXY On7 (2016)"},{"regex":"(?:SAMSUNG-)?SM-G611[FS]","model":"GALAXY On7 Prime"},{"regex":"(?:SAMSUNG-)?SM-C5000","model":"GALAXY C5"},{"regex":"(?:SAMSUNG-)?SM-C501[08]","model":"GALAXY C5 Pro"},{"regex":"(?:SAMSUNG-)?SM-C7000","model":"GALAXY C7"},{"regex":"(?:SAMSUNG-)?SM-C701[08F]","model":"GALAXY C7 Pro"},{"regex":"(?:SAMSUNG-)?SM-C710[08]","model":"GALAXY C8"},{"regex":"(?:SAMSUNG-)?SM-C900[08FY]","model":"GALAXY C9 Pro"},{"regex":"(?:SAMSUNG-)?SM-Z130H","model":"GALAXY Z1"},{"regex":"(?:SAMSUNG-)?SM-Z200[FMY]","model":"GALAXY Z2"},{"regex":"(?:SAMSUNG-)?SM-Z300H","model":"GALAXY Z3"},{"regex":"(?:SAMSUNG-)?SM-Z400[FY]","model":"GALAXY Z4"},{"regex":"(?:SAMSUNG-)?SM-G150","model":"GALAXY Folder"},{"regex":"(?:SAMSUNG-)?SM-G165","model":"GALAXY Folder 2"},{"regex":"(?:SAMSUNG-)?GT-I9060","model":"GALAXY Grand Neo","device":"phablet"},{"regex":"(?:SAMSUNG-)?GT-I9063","model":"GALAXY Grand Neo Duos","device":"phablet"},{"regex":"(?:SAMSUNG-)?GT-I9(?:080|128)","model":"GALAXY Grand","device":"phablet"},{"regex":"(?:SAMSUNG-)?GT-I9168","model":"GALAXY Grand Neo+","device":"phablet"},{"regex":"(?:SAMSUNG-)?GT-I9082","model":"GALAXY Grand Duos","device":"phablet"},{"regex":"(?:SAMSUNG-)?GT-N7000","model":"GALAXY Note","device":"phablet"},{"regex":"(?:SAMSUNG-)?(?:(?:GT-)?N7100|SCH-I605|SCH-N719|SCH-R950|SPH-L900)","model":"GALAXY Note II","device":"phablet"},{"regex":"(?:SAMSUNG-)?GT-N7105","model":"GALAXY Note II LTE","device":"phablet"},{"regex":"(?:SAMSUNG-)?SM-G710[25L]?","model":"GALAXY Grand 2","device":"phablet"},{"regex":"(?:SAMSUNG-)?SM-G720(?:AX|N0|2)","model":"GALAXY Grand Max"},{"regex":"(?:SAMSUNG-)?SM-G53(?:0F|0FZ|0Y|0H|0FZ|1F|1H)","model":"GALAXY Grand Prime","device":"phablet"},{"regex":"(?:SAMSUNG-)?SM-G532F","model":"GALAXY Grand Prime Plus","device":"phablet"},{"regex":"(?:SAMSUNG-)?SM-G532MT","model":"GALAXY J2 Prime (TV)","device":"phablet"},{"regex":"(?:SAMSUNG-)?SM-G532[MG]","model":"GALAXY J2 Prime","device":"phablet"},{"regex":"(?:SAMSUNG-)?SM-N7502","model":"GALAXY Note 3 Neo Duos","device":"phablet"},{"regex":"(?:SAMSUNG-)?SM-N750[L50]?","model":"GALAXY Note 3 Neo","device":"phablet"},{"regex":"(?:SAMSUNG-)?SM-N9002","model":"GALAXY Note 3 Duos","device":"phablet"},{"regex":"(?:SAMSUNG-)?SM-N900(?:[05689][VQ]?|[AKLPSTV]|W8)?","model":"GALAXY Note 3","device":"phablet"},{"regex":"(?:SAMSUNG-)?SM-N910|N9100","model":"GALAXY Note 4","device":"phablet"},{"regex":"(?:SAMSUNG-)?SM-N915","model":"GALAXY Note 4 Edge","device":"phablet"},{"regex":"(?:SAMSUNG-)?SM-N920[0ACGIKLST]","model":"GALAXY Note 5","device":"phablet"},{"regex":"(?:SAMSUNG-)?SM-N9208","model":"GALAXY Note 5 Duos","device":"phablet"},{"regex":"(?:SAMSUNG-)?SM-G750(?:8Q|[9AFH])","model":"GALAXY Mega 2","device":"phablet"},{"regex":"(?:SAMSUNG-)?GT-I915[028]","model":"GALAXY Mega 5.8","device":"phablet"},{"regex":"(?:SAMSUNG-)?GT-I920[05]","model":"GALAXY Mega 6.3","device":"phablet"},{"regex":"(?:SAMSUNG-)?(?:SM-N930F|SCV34)","model":"GALAXY Note 7","device":"phablet"},{"regex":"(?:SAMSUNG[- ])?SM-N950|SCV37","model":"GALAXY Note 8","device":"phablet"},{"regex":"(?:SAMSUNG[- ])?SM-N960","model":"GALAXY Note 9","device":"phablet"},{"regex":"(?:SAMSUNG[- ])?SM-N970(?:0|8|9|D|F|J|K|L|S|U1|U|W8|X)","model":"GALAXY Note 10","device":"phablet"},{"regex":"(?:SAMSUNG[- ])?(?:SM-N975(?:0|F|U|U1|W|X|Xu)|SM-N976[BV])","model":"GALAXY Note 10+","device":"phablet"},{"regex":"(?:SAMSUNG-)?GT-E2152","model":"E2152","device":"feature phone"},{"regex":"(?:SAMSUNG-)?(GT-(P|N8|N5)[0-9]+[a-z]?)","device":"tablet","model":"$1"},{"regex":"SC-02C","model":"GALAXY S II"},{"regex":"SC-01F","model":"GALAXY Note 3","device":"phablet"},{"regex":"SC-04E","model":"GALAXY S4"},{"regex":"(?:SAMSUNG-)?((?:SM-[TNP]|GT-P)[a-z0-9_\\\\-]+)","device":"tablet","model":"$1"},{"regex":"((?:SCH|SGH|SPH|SHV|SHW|GT|SM)-[a-z0-9_\\\\-]+)","model":"$1"},{"regex":"SMART-TV","device":"tv","model":"Smart TV"},{"regex":"Galaxy ([^/;]+) Build","model":"GALAXY $1"},{"regex":"Galaxy ([a-z0-9]+)","model":"GALAXY $1"},{"regex":"SAMSUNG[\\\\-][ ]?([a-z0-9]+[\\\\-_][a-z0-9]+)","model":"$1"},{"regex":"SAMSUNG;[ ]?([a-z0-9]+[\\\\-_][a-z0-9]+)","model":"$1"},{"regex":"SAMSUNG[ _/\\\\-]?([a-z0-9\\\\-]+)","model":"$1"},{"regex":"SAMSUNG;[ ]?([a-z0-9 ]+)","model":"$1"},{"regex":"SEC-([a-z0-9]+)","model":"$1"},{"regex":"SAM-([a-z0-9]+)","model":"SCH-$1"},{"regex":"(?:portalmmm|o2imode)/2\\\\.0 ([SZ][a-z0-9]+)","model":"$1"},{"regex":"sam([rua][0-9]+)","model":"SCH-$1"}]}'), t1 = {
        regex: "(?:8312D|G(60[25]|70[3568]G?|785|803)|N83(?:-2cpu)?|N91) Build",
        device: "smartphone",
        models: [
            {
                regex: "N83",
                model: "N83"
            },
            {
                regex: "N91",
                model: "N91"
            },
            {
                regex: "8312D",
                model: "G101"
            },
            {
                regex: "G(60[25]|70[3568]G?|785|803)",
                model: "G$1"
            }
        ]
    }, i1 = {
        regex: "SELFIX",
        device: "smartphone",
        models: [
            {
                regex: "SELFIX_SLASH6",
                model: "Slash 6"
            },
            {
                regex: "VOYAGER-V45",
                model: "Voyager V45"
            }
        ]
    }, n1 = {
        regex: "Sencor|ELEMENT[ _]?(?:7|8|9\\.7|10[ _]1)(?:[ _]?V[23])?[);/ ]|ELEMENT[ _]?(?:P[0-9]+)[);/ ]",
        device: "tablet",
        models: [
            {
                regex: "(?:SENCOR[ _])?ELEMENT[ _]?7[ _]?V3",
                model: "Element 7 V3"
            },
            {
                regex: "(?:SENCOR[ _])?ELEMENT[ _]?7[ _]?V2[ _]BASIC",
                model: "Element 7 V2 Basic"
            },
            {
                regex: "(?:SENCOR[ _])?ELEMENT[ _]?7[ _]?V2",
                model: "Element 7 V2"
            },
            {
                regex: "(?:SENCOR[ _])?ELEMENT[ _]8[ _]?V3",
                model: "Element 8 V3"
            },
            {
                regex: "(?:SENCOR[ _])?ELEMENT[ _]8[ _]?V2",
                model: "Element 8 V2"
            },
            {
                regex: "(?:SENCOR[ _])?ELEMENT8",
                model: "Element 8"
            },
            {
                regex: "(?:SENCOR[ _])?ELEMENT[ _]9\\.7[ _]?V3",
                model: "Element 9.7 V3"
            },
            {
                regex: "(?:SENCOR[ _])?ELEMENT[ _]9\\.7[ _]?V2",
                model: "Element 9.7 V2"
            },
            {
                regex: "(?:SENCOR[ _])?ELEMENT[ _]9\\.7",
                model: "Element 9.7"
            },
            {
                regex: "(?:SENCOR[ _])?ELEMENT10[ _]1",
                model: "Element 10.1"
            },
            {
                regex: "(?:SENCOR[ _])?ELEMENT[ _]?P([0-9]+)",
                model: "Element P$1",
                device: "smartphone"
            },
            {
                regex: "Sencor[ _]([^;/]+) Build",
                model: "$1"
            }
        ]
    }, m1 = {
        regex: "Senwa|(?:S\\-?(?:471|7[12]5|6[01]5|915|905TL|1000)|V705B)[ /;\\)]",
        device: "smartphone",
        models: [
            {
                regex: "S\\-?471[ /;\\)]",
                model: "Jazz"
            },
            {
                regex: "S\\-?605[ /;\\)]",
                model: "City"
            },
            {
                regex: "S\\-?905TL[ /;\\)]",
                model: "Odin"
            },
            {
                regex: "S\\-?1000[ /;\\)]",
                model: "Odin"
            },
            {
                regex: "S\\-?(615|7[12]5|915)[ /;\\)]",
                model: "S$1"
            },
            {
                regex: "V705B[ /;\\)]",
                model: "V705B"
            },
            {
                regex: "Senwa[ _-]*([^;/]+) Build",
                model: "$1"
            },
            {
                regex: "Senwa[ _-]*([^ ;/)]+)[ ;/)]",
                model: "$1"
            }
        ]
    }, s1 = {
        regex: "(SKY|Elite|Fuego)[_ ][3-7]\\.[05]([A-Z]{1,2})?|Elite_5_5_Octa|Platinum_(5.0M|M5)",
        device: "smartphone",
        models: [
            {
                regex: "Platinum_(5.0M|M5)",
                model: "Platinum 5.0M"
            },
            {
                regex: "Elite_5_5_Octa",
                model: "Elite 5.5 Octa"
            },
            {
                regex: "Elite[_ ]([3-7]\\.[05](?:[A-Z]{1,2})?\\+?)",
                model: "Elite $1"
            },
            {
                regex: "Fuego[_ ]([3-7]\\.[05](?:[A-Z]{1,2})?\\+?)",
                model: "Fuego $1"
            },
            {
                regex: "SKY[_ ]([3-7]\\.[05](?:[A-Z]{1,2})?)",
                model: "$1"
            }
        ]
    }, g1 = {
        regex: "Sky_?worth",
        device: "tv",
        models: [
            {
                regex: "Sky_?worth ([^;/]+) Build",
                model: "$1"
            }
        ]
    }, x1 = {
        regex: "Smartfren|Androtab|Andromax|PD6D1J|AD682J|AD68[89]G|AD6B1H|AD9A1H|AD682H|AD683G",
        device: "smartphone",
        models: [
            {
                regex: "S7 Build",
                model: "Andromax Tab 7.0",
                device: "tablet"
            },
            {
                regex: "PD6D1J",
                model: "Andromax V3s"
            },
            {
                regex: "AD682J",
                model: "Andromax T"
            },
            {
                regex: "AD688G",
                model: "Andromax C2"
            },
            {
                regex: "AD689G",
                model: "Andromax i3"
            },
            {
                regex: "AD682H",
                model: "Andromax i3s"
            },
            {
                regex: "AD6B1H",
                model: "Andromax G2 Hot"
            },
            {
                regex: "AD9A1H",
                model: "Andromax G2"
            },
            {
                regex: "AD683G",
                model: "Andromax I"
            },
            {
                regex: "New Andromax-i",
                model: "New Andromax I"
            },
            {
                regex: "Andromax[ _\\-]([^/;]+) Build",
                model: "Andromax $1"
            },
            {
                regex: "Andromax[ _\\-]([a-z0-9]+)",
                model: "Andromax $1"
            },
            {
                regex: "Smartfren[ _\\-]([^/;\\)]+)(?: Build|[/;\\)])",
                model: "$1"
            },
            {
                regex: "(Androtab[^/;]+) Build",
                model: "$1",
                device: "tablet"
            }
        ]
    }, c1 = {
        regex: "(SM(?:70[15]|801|901|919)|OD10[35]|YQ60[1357]|DE106)[ /;\\)]",
        device: "smartphone",
        models: [
            {
                regex: "SM70[15]",
                model: "T1"
            },
            {
                regex: "SM801",
                model: "T2"
            },
            {
                regex: "SM901",
                model: "M1"
            },
            {
                regex: "SM919",
                model: "M1L"
            },
            {
                regex: "YQ60[1357]",
                model: "U1"
            },
            {
                regex: "OD10[35]",
                model: "Pro"
            },
            {
                regex: "DE106",
                model: "R1"
            }
        ]
    }, u1 = {
        regex: "STK[_ ]",
        device: "smartphone",
        models: [
            {
                regex: "STK[_ ]([^/;]+) Build",
                model: "$1"
            },
            {
                regex: "STK[_ ]([a-z0-9]+)",
                model: "$1"
            }
        ]
    }, S1 = {
        regex: "STX[ -]([^;/]+)",
        device: "smartphone",
        models: [
            {
                regex: "STX[ -]([^;/]+) Build",
                model: "$1"
            },
            {
                regex: "STX[ -]([a-z0-9_-]+)",
                model: "$1"
            }
        ]
    }, A1 = {
        regex: "(SC-[0-9]+[a-z]+)",
        device: "tablet",
        model: "$1"
    }, p1 = {
        regex: "SUPRA ([^;/]+)(\\)| Build)| NVTAB 7.0 3G",
        device: "smartphone",
        models: [
            {
                regex: "SUPRA ([^;/]+)(?:\\)| Build)",
                device: "tablet",
                model: "$1"
            },
            {
                regex: "(NVTAB 7.0 3G)",
                device: "tablet",
                model: "$1"
            }
        ]
    }, v1 = {
        regex: "(Cyclone [^/;]+) Build",
        device: "tablet",
        model: "$1"
    }, M1 = {
        regex: "SUNVAN[ _\\-]",
        device: "smartphone",
        models: [
            {
                regex: "SUNVAN[ _\\-]?([^/;]+) Build",
                model: "$1"
            },
            {
                regex: "SUNVAN[ _\\-]?([^);/ ]+)",
                model: "$1"
            }
        ]
    }, P1 = {
        regex: "SCHR9GR|ZUR722M",
        device: "smartphone",
        models: [
            {
                regex: "SCHR9GR",
                model: "SCHON R9"
            },
            {
                regex: "ZUR722M",
                device: "phablet",
                model: "Z72 go"
            }
        ]
    }, T1 = {
        regex: "(?:Primo(7|8)|QM73[45]-8G|QM734-2|QM736-8G\\(HD\\)|8950|MID1002)[);/ ]|(?:Tlink|Every)[0-9]+",
        device: "tablet",
        models: [
            {
                regex: "Primo(7|8)",
                model: "Primo $1"
            },
            {
                regex: "QM734-2",
                model: "QM734-2"
            },
            {
                regex: "QM734-8G",
                model: "QM734-8G"
            },
            {
                regex: "QM735-8G",
                model: "QM735-8G"
            },
            {
                regex: "QM736-8G\\(HD\\)",
                model: "QM736-8G (HD)"
            },
            {
                regex: "8950 Build",
                model: "3G 8950"
            },
            {
                regex: "Tlink([0-9]+)",
                device: "smartphone",
                model: "Tlink$1"
            },
            {
                regex: "Every([0-9]+)",
                device: "smartphone",
                model: "Every$1"
            }
        ]
    }, h1 = {
        regex: "Pantech|P[GN]-|PT-[a-z0-9]{3,}|TX[T]?[0-9]+|IM-[a-z0-9]+[);/ ]|ADR910L",
        device: "smartphone",
        models: [
            {
                regex: "ADR910L",
                model: "Star Q"
            },
            {
                regex: "IM-A870K",
                model: "Vega Iron"
            },
            {
                regex: "Pantech[ \\-]?([a-z0-9]+)",
                model: "$1"
            },
            {
                regex: "Pantech_([a-z0-9\\-]+)",
                model: "$1"
            },
            {
                regex: "(P[GTN]-[a-z0-9]+)",
                model: "$1"
            },
            {
                regex: "(TX[T]?[0-9]+)",
                model: "$1"
            },
            {
                regex: "(IM-[a-z0-9]+)[);/ ]",
                model: "$1"
            }
        ]
    }, b1 = {
        regex: "MOMO([0-9]|miniS)",
        device: "tablet",
        models: [
            {
                regex: "MOMOminiS",
                model: "MOMO mini S"
            },
            {
                regex: "MOMO([0-9][^);/]*) Build",
                model: "MOMO $1"
            },
            {
                regex: "MOMO([0-9][^);/]*)[);/]",
                model: "MOMO $1"
            }
        ]
    }, L1 = {
        regex: "PLUM ",
        device: "smartphone",
        models: [
            {
                regex: "Z405",
                model: "Gator 3"
            }
        ]
    }, _1 = {
        regex: "Polaroid|(?:PMID|MIDC)[0-9a-z]+[);/ ]|MID(?:1014|0714)|PRO[VG]?(?:[0-9]{3,}[a-z]*|[0-9]{2}[a-z])|P(400[56]|4526|500[56]|502[56]|504[67]|552[56])A|PSPC(505|550)|PSPCK21NA|PSPCL20A0|PSPCM20A0|PSPCZ20A0",
        device: "smartphone",
        models: [
            {
                regex: "P4005A",
                model: "Turbo C4"
            },
            {
                regex: "P5005A",
                model: "Turbo C5"
            },
            {
                regex: "P4006A",
                model: "Turbo D4"
            },
            {
                regex: "P4526A",
                model: "Turbo E"
            },
            {
                regex: "PSPC(505|550)",
                model: "Cosmo $1"
            },
            {
                regex: "P5006A",
                model: "Cosmo K"
            },
            {
                regex: "P5526A",
                model: "Cosmo K Plus"
            },
            {
                regex: "PSPCK21NA",
                model: "Cosmo K2 Plus"
            },
            {
                regex: "P5026A",
                model: "Cosmo L"
            },
            {
                regex: "PSPCL20A0",
                model: "Cosmo L2"
            },
            {
                regex: "PSPCM20A0",
                model: "Cosmo M2"
            },
            {
                regex: "P5046A",
                model: "Cosmo P5s"
            },
            {
                regex: "P5525A",
                model: "Cosmo Q5s"
            },
            {
                regex: "P5047A",
                model: "Cosmo Z"
            },
            {
                regex: "PSPCZ20A0",
                model: "Cosmo Z2"
            },
            {
                regex: "P5025A",
                model: "L5s"
            },
            {
                regex: "PRO4611(?:PR201)?",
                model: "Pro4611"
            },
            {
                regex: "PROV400",
                model: "Agate"
            },
            {
                regex: "PROV350",
                model: "ProV350"
            },
            {
                regex: "PRO([VG]?(?:[0-9]{3,}[a-z]*|[0-9]{2}[a-z]))",
                model: "Pro$1"
            },
            {
                regex: "(MID(?:1014|0714))",
                model: "$1",
                device: "tablet"
            },
            {
                regex: "((?:PMID|MIDC)[0-9a-z]+)[);/ ]",
                model: "$1",
                device: "tablet"
            },
            {
                regex: "Polaroid",
                model: "",
                device: "tablet"
            }
        ]
    }, G1 = {
        regex: "POLY ?PAD",
        device: "tablet",
        models: [
            {
                regex: "POLY ?PAD[_ \\.]([a-z0-9]+)[);/ ]",
                model: "$1"
            },
            {
                regex: "POLY ?PAD[_\\.]([a-z0-9]+)",
                model: "$1"
            }
        ]
    }, B1 = {
        regex: "POLYTRON|W8480|W7430|PW1100S|W7550|W7531|W8570|R2401",
        device: "smartphone",
        models: [
            {
                regex: "R2508",
                model: "Rocket"
            },
            {
                regex: "POLYTRON[ _]R1500",
                model: "Rocket Q-Five"
            },
            {
                regex: "R2401",
                model: "Rocket 2X"
            },
            {
                regex: "POLYTRON[ _-]R2402",
                model: "Rocket R2402"
            },
            {
                regex: "POLYTRON[ _-]R2403",
                model: "Rocket R1"
            },
            {
                regex: "POLYTRON[ _-]R2406",
                model: "Rocket R2"
            },
            {
                regex: "POLYTRON[ _-]R2407",
                model: "Rocket R3"
            },
            {
                regex: "POLYTRON[ _-]R2457",
                model: "Rocket S2"
            },
            {
                regex: "POLYTRON[ _-]R2509SE",
                model: "Rocket T6 SE"
            },
            {
                regex: "POLYTRON[ _-]R2509",
                model: "Rocket T6"
            },
            {
                regex: "POLYTRON[ _-]R2506",
                model: "Rocket T4"
            },
            {
                regex: "POLYTRON[ _-]R3450",
                model: "Rocket Jetz"
            },
            {
                regex: "POLYTRON[ _-]R3500",
                model: "Rocket Jetz 5.0"
            },
            {
                regex: "4G450",
                model: "Zap 5"
            },
            {
                regex: "W6500",
                model: "Quadra Rocket"
            },
            {
                regex: "W7452",
                model: "Quadra S2"
            },
            {
                regex: "W7550",
                model: "Quadra V5"
            },
            {
                regex: "W8570",
                model: "Quadra V7"
            },
            {
                regex: "POLYTRON[ _]L501",
                model: "Rocket L501"
            },
            {
                regex: "POLYTRON[ _]P520",
                model: "Prime 7S"
            },
            {
                regex: "4G500",
                model: "Zap 6 Cleo"
            },
            {
                regex: "W8480",
                model: "Crystal 4 W8480"
            },
            {
                regex: "W7531",
                model: "Wizard V"
            },
            {
                regex: "W7430",
                model: "Quadra Mini W7430"
            },
            {
                regex: "POLYTRON[ _]4G501",
                model: "Zap 6 Posh"
            },
            {
                regex: "POLYTRON[ _]4G502",
                model: "Zap 6 Power"
            },
            {
                regex: "POLYTRON[ _]4G503",
                model: "Zap 6 Flaz"
            },
            {
                regex: "POLYTRON[_ ]?[ _]4G550",
                model: "Zap 6 Note"
            },
            {
                regex: "POLYTRON[ _]4G551",
                model: "Zap 6 Posh Note"
            },
            {
                regex: "PW1100S",
                model: "PW1100S"
            },
            {
                regex: "Q2352",
                model: "Q2352"
            },
            {
                regex: "POLYTRON[ _]T7800",
                model: "Cosmica T7800",
                device: "tablet"
            },
            {
                regex: "POLYTRON[ _]T7700",
                model: "Rocket Pad",
                device: "tablet"
            }
        ]
    }, N1 = {
        regex: "YPY_S450",
        device: "smartphone",
        models: [
            {
                regex: "YPY_S450",
                model: "YPY S450"
            }
        ]
    }, C1 = {
        regex: "(?:PMP|PAP|PMT|PSP|PGPS)[0-9]+[a-z0-9_]+[);/ ]",
        device: "tablet",
        models: [
            {
                regex: "PMT3277_3G",
                model: "MultiPad Ranger 7.0 3G"
            },
            {
                regex: "PGPS7799CIS08GBPG",
                model: "Geo Vision Tour 3"
            },
            {
                regex: "PMT3201_4G",
                model: "Grace 4G"
            },
            {
                regex: "PSP5551DUO",
                model: "Grace S5"
            },
            {
                regex: "PMT3287_3G",
                model: "MultiPad Ranger 8.0 3G"
            },
            {
                regex: "PMT3208[_ ]3G",
                model: "MultiPad Wize 8.0 3G"
            },
            {
                regex: "PSP7546DUO([ _][A-Z]{2})?",
                model: "X Pro"
            },
            {
                regex: "PSP7610DUO([ _][A-Z]{2})?",
                model: "S Max"
            },
            {
                regex: "(PM[PT][0-9]+[a-z0-9_]+)[);/ ]",
                model: "$1"
            },
            {
                regex: "((?:PAP|PSP)[0-9]+[a-z0-9_]+(?: DUO)?)[);/ ]",
                model: "$1",
                device: "smartphone"
            }
        ]
    }, E1 = {
        regex: "Sanyo|MobilePhone[ ;]",
        device: "feature phone",
        models: [
            {
                regex: "SCP-?6750",
                model: "Katana Eclipse X"
            },
            {
                regex: "SCP-?6760",
                model: "Incognito"
            },
            {
                regex: "SCP-?6780",
                model: "Innuendo"
            },
            {
                regex: "SANYO[ \\-_]([a-z0-9\\-]+)",
                model: "$1"
            },
            {
                regex: "MobilePhone ([a-z0-9\\-]+)",
                model: "$1"
            }
        ]
    }, O1 = {
        regex: "Qilive [0-9][^;/]*|Q(7S5IN4G|8S55IN4G2|8S[56]IN4G|10S5[37]IN4G|10S[56]IN4G|10S[56]IN4GR|9S5IN4G|6T7IN)",
        device: "smartphone",
        models: [
            {
                regex: "Q7S5IN4G",
                model: 'Q7 5.0" 4G'
            },
            {
                regex: "Q8S55IN4G2",
                model: 'Q8 5.5" 4G'
            },
            {
                regex: "Q8S6IN4G",
                model: 'Q8 6.0" 4G'
            },
            {
                regex: "Q8S5IN4GP",
                model: 'Q8 5.1" 4G'
            },
            {
                regex: "Q9S5IN4G",
                model: 'Q9 5.0" 4G'
            },
            {
                regex: "Q10S53IN4G",
                model: 'Q10 5.3" 4G'
            },
            {
                regex: "Q10S57IN4G",
                model: 'Q10 5.7" 4G'
            },
            {
                regex: "Q10S5IN4G[R]?",
                model: 'Q10 5.0" 4G'
            },
            {
                regex: "Q10S6IN4G",
                model: 'Q10 6.0" 4G'
            },
            {
                regex: "Q6T7IN",
                model: "Q6",
                device: "tablet"
            },
            {
                regex: "Qilive ([0-5][^;/]*) Build",
                model: "$1"
            },
            {
                regex: "Qilive ([0-5][^;/]*)/",
                model: "$1"
            },
            {
                regex: "Qilive ([6-9][^;/]*) Build",
                model: "$1",
                device: "tablet"
            },
            {
                regex: "Qilive ([6-9][^;/]*)/",
                model: "$1",
                device: "tablet"
            }
        ]
    }, w1 = {
        regex: "QMobile|QTab|Q-Smart|Noir X1S|LUNA PRO|NICE S",
        device: "smartphone",
        models: [
            {
                regex: "QTab[ _-]([^;/]+) Build",
                model: "$1 Tab",
                device: "tablet"
            },
            {
                regex: "QTab[ _-]([^;/)]+)[;/)]",
                model: "$1 Tab",
                device: "tablet"
            },
            {
                regex: "(?:QMobile|Q-Smart)[ _-]([^;/]+) Build",
                model: "$1"
            },
            {
                regex: "(?:QMobile|Q-Smart)[ _-]([^;/)]+)[;/)]",
                model: "$1"
            },
            {
                regex: "Noir X1S",
                model: "Noir X1S"
            },
            {
                regex: "LUNA PRO",
                model: "Luna Pro"
            },
            {
                regex: "NICE S",
                model: "Nice S"
            }
        ]
    }, f1 = {
        regex: "Quantum (Fit|Mini|V|You E)",
        device: "smartphone",
        models: [
            {
                regex: "Quantum (Fit|Mini|V|You E)",
                model: "$1"
            }
        ]
    }, y1 = {
        regex: "Quechua Phone 5",
        device: "smartphone",
        model: "Quechua Phone 5"
    }, X1 = {
        regex: "Ramos ?([^/;]+) Build",
        device: "tablet",
        model: "$1"
    }, $1 = {
        regex: "Phone 2",
        device: "smartphone",
        model: "Phone 2"
    }, I1 = {
        regex: "Sendo([a-z0-9]+)",
        device: "feature phone",
        model: "$1"
    }, F1 = {
        regex: "Turbo(X5Space|[_ ](?:X5[_ ](Max|Black)|X8|X6[ _]Z))[);/ ]",
        device: "smartphone",
        models: [
            {
                regex: "TurboX5Space[);/ ]",
                model: "X5 Space"
            },
            {
                regex: "Turbo[ _]X5[ _]Black[);/ ]",
                model: "X5 Black"
            },
            {
                regex: "Turbo[ _]X5[ _]Max[);/ ]",
                model: "X5 Max"
            },
            {
                regex: "Turbo[ _]X6[ _]Z[);/ ]",
                model: "X6 Z"
            },
            {
                regex: "Turbo[ _]X8[);/ ]",
                model: "X8"
            }
        ]
    }, D1 = {
        regex: "Sigma|(X-Style[ _]?Tab[_ ]A([0-9]{2,3})|X[-_ ]?treme[-_ ]?PQ[0-9]{2})[);/ ]",
        device: "smartphone",
        models: [
            {
                regex: "(?:Sigma[ _])?X[-_ ]?treme[-_ ]?PQ([0-9]{2})[);/ ]",
                model: "X-Treme PQ$1"
            },
            {
                regex: "X-Style[ _]?Tab[_ ]A([0-9]{2,3})[);/ ]",
                model: "X-Style Tab A$1",
                device: "tablet"
            }
        ]
    }, R1 = {
        regex: "Spice",
        device: "smartphone",
        models: [
            {
                regex: "Spice[ _\\-]?([^/;]+)(?:[\\)]| Build)",
                model: "$1"
            },
            {
                regex: "Spice[ _\\-]?([^/;]+)(?:/|$)",
                model: "$1"
            }
        ]
    }, V1 = {
        regex: "SHARP|SBM|SH-?[0-9]+[a-z]?[);/ ]|SH-M0[89]|S3-SH|SH-Z(10|01)|AQUOS|506SH|SHL22|FS80(1[08]|32|28|0[29])[);/ ]|TG-L900S",
        device: "smartphone",
        models: [
            {
                regex: "506SH",
                model: "Aquos Xx3"
            },
            {
                regex: "S3-SH",
                model: "One S3"
            },
            {
                regex: "SH-Z10",
                model: "Aquos zero"
            },
            {
                regex: "SH-Z01",
                model: "Aquos S2 (C10)"
            },
            {
                regex: "SH-02E",
                model: "Aquos Phone Zeta"
            },
            {
                regex: "SH06D",
                model: "Aquos Phone SH-06D"
            },
            {
                regex: "SHL22",
                model: "Aquos Phone SHL22"
            },
            {
                regex: "SH-M09",
                model: "Aquos R2"
            },
            {
                regex: "FS8010|SH-M08",
                model: "Aquos S2"
            },
            {
                regex: "FS8032",
                model: "Aquos S3"
            },
            {
                regex: "FS8018",
                model: "Aquos S3 Mini"
            },
            {
                regex: "TG-L900S",
                model: "Luna S"
            },
            {
                regex: "FS8002",
                model: "Z2"
            },
            {
                regex: "FS8009",
                model: "Z3"
            },
            {
                regex: "FS8028",
                model: "R1S"
            },
            {
                regex: "SH-08E",
                device: "tablet",
                model: "Sharp Aquos Pad"
            },
            {
                regex: "(LC-(?:[0-9]{2})[a-z0-9]+)(?:[);/ ]|$)",
                device: "tv",
                model: "$1"
            },
            {
                regex: "SHARP-AQUOS|AQUOSBrowser",
                device: "tv",
                model: "Aquos Net Plus"
            },
            {
                regex: "SHARP[ \\-]([a-z0-9\\-]+)",
                model: "$1"
            },
            {
                regex: "(?:SHARP|SBM)([a-z0-9]+)",
                model: "$1"
            },
            {
                regex: "(SH-?[0-9]+[a-z]?)[);/ ]",
                model: "$1"
            }
        ]
    }, U1 = {
        regex: "Softbank|J-PHONE",
        device: "smartphone",
        models: [
            {
                regex: "Softbank/[12]\\.0/([a-z0-9]+)",
                model: "$1"
            },
            {
                regex: "([a-z0-9]+);Softbank;",
                model: "$1"
            },
            {
                regex: "J-PHONE/[0-9]\\.[0-9]/([a-z0-9\\-]+)",
                model: "$1"
            }
        ]
    }, H1 = {
        regex: "Sonim[ -]|XP[67]700[);/ ]",
        device: "smartphone",
        models: [
            {
                regex: "Sonim-XP3400",
                model: "XP3400",
                device: "feature phone"
            },
            {
                regex: "XP6700[);/ ]",
                model: "XP6700"
            },
            {
                regex: "XP7700[);/ ]",
                model: "XP7700"
            }
        ]
    }, k1 = {
        regex: "N(9[5678]00|8800|9000|9977)[);/ ]",
        device: "smartphone",
        models: [
            {
                regex: "N9000",
                model: "Note 3"
            },
            {
                regex: "N(9[5678]00|8800|9977)[);/ ]",
                model: "N$1"
            }
        ]
    }, W1 = {
        regex: "KF(?:OT|TT|JWI|JWA|[DFS]OWI|A[PRSU]WI|T[BH]WI|SAW[IA]|GIWI|KAWI|MAWI|MEWI|MUWI|SUWI)[);/ ]|Kindle|Silk/\\d+\\.\\d+|Amazon (?:Tate|Jem)|AFT[ABMNRST]|SD4930UR|AEO(BC|KN)[);/ ]",
        device: "tablet",
        models: [
            {
                regex: "AFTA",
                model: "Fire TV Cube (Gen 1)",
                device: "tv"
            },
            {
                regex: "AFTR",
                model: "Fire TV Cube (Gen 2)",
                device: "tv"
            },
            {
                regex: "AFTN",
                model: "Fire TV (Gen 3)",
                device: "tv"
            },
            {
                regex: "AFTB",
                model: "Fire TV",
                device: "tv"
            },
            {
                regex: "AFT[MST]",
                model: "Fire TV stick",
                device: "tv"
            },
            {
                regex: "KFFOWI[);/ ]",
                model: 'Fire 7"'
            },
            {
                regex: "KFMUWI[);/ ]",
                model: 'Fire 7" (2019)'
            },
            {
                regex: "KFTT[);/ ]",
                model: "Kindle Fire HD"
            },
            {
                regex: "KFJWI[);/ ]|Amazon Jem",
                model: 'Kindle Fire HD 8.9" WiFi'
            },
            {
                regex: "KFJWA[);/ ]",
                model: 'Kindle Fire HD 8.9" 4G'
            },
            {
                regex: "KFSOWI[);/ ]|Amazon Tate",
                model: 'Kindle Fire HD 7" WiFi'
            },
            {
                regex: "KFTHWI[);/ ]",
                model: 'Kindle Fire HDX 7" WiFi'
            },
            {
                regex: "KFTHWA[);/ ]",
                model: 'Kindle Fire HDX 7" 4G'
            },
            {
                regex: "KFAPWI[);/ ]",
                model: 'Kindle Fire HDX 8.9" WiFi'
            },
            {
                regex: "KFAPWA[);/ ]",
                model: 'Kindle Fire HDX 8.9" 4G'
            },
            {
                regex: "KFARWI[);/ ]",
                model: "Fire HD 6"
            },
            {
                regex: "KFASWI[);/ ]",
                model: "Fire HD 7"
            },
            {
                regex: "KFAUWI[);/ ]",
                model: "Fire HD 7 2017"
            },
            {
                regex: "KFMEWI[);/ ]",
                model: "Fire HD 8 (2015)"
            },
            {
                regex: "KFGIWI[);/ ]",
                model: "Fire HD 8 2016"
            },
            {
                regex: "KFDOWI[);/ ]",
                model: "Fire HD 8 2017"
            },
            {
                regex: "KFKAWI[);/ ]",
                model: "Fire HD 8 (2018)"
            },
            {
                regex: "KFSAWI[);/ ]",
                model: "Fire HDX 8.9"
            },
            {
                regex: "KFSAWA[);/ ]",
                model: "Fire HDX 8.9 4G"
            },
            {
                regex: "KFTBWI[);/ ]",
                model: "Fire HD 10"
            },
            {
                regex: "KFSUWI[);/ ]",
                model: "Fire HD 10 (2017)"
            },
            {
                regex: "KFMAWI[);/ ]",
                model: "Fire HD 10 (2019)"
            },
            {
                regex: "SD4930UR",
                model: "Fire Phone",
                device: "smartphone"
            },
            {
                regex: "KFOT|Kindle Fire|Silk/\\d+\\.\\d+",
                model: "Kindle Fire"
            },
            {
                regex: "Kindle",
                model: "Kindle"
            },
            {
                regex: "AEO(BC|KN)[);/ ]",
                model: "Echo",
                device: "smart speaker"
            }
        ]
    }, K1 = {
        regex: "SYMPHONY[ \\_]([a-z0-9]+)|roar (V20|E80)",
        device: "smartphone",
        models: [
            {
                regex: "roar V20",
                model: "Roar V20"
            },
            {
                regex: "roar E80",
                model: "Roar E80"
            },
            {
                regex: "SYMPHONY[ \\_]([a-z0-9]+)",
                model: "$1"
            }
        ]
    }, Y1 = {
        regex: "(SYX-(?:T70[04]|T10[12]))[;)/ ]",
        device: "tablet",
        model: "$1"
    }, Q1 = {
        regex: "Qtek[ _]?([a-z0-9]+)",
        device: "smartphone",
        model: "$1"
    }, Z1 = {
        regex: "TCL[_ -][a-z0-9]+|(TCL[_ -][^;/]+|7040N) Build|TCLGalaG60|A502DL|T780H",
        device: "smartphone",
        models: [
            {
                regex: "TCLGalaG60",
                model: "Gala G60"
            },
            {
                regex: "T780H",
                model: "Plex"
            },
            {
                regex: "TCL[_ -]([^;/]+) Build",
                model: "$1"
            },
            {
                regex: "TCL[_ -]([a-z0-9]+)",
                model: "$1"
            },
            {
                regex: "(7040N)",
                model: "$1"
            },
            {
                regex: "A502DL",
                model: "LX"
            }
        ]
    }, z1 = {
        regex: "Teclast|Tbook|T30_(ROW|EEA)|T10\\(E3C6\\)",
        device: "tablet",
        models: [
            {
                regex: "Tbook[_ -]([^;/]+) Build",
                model: "Tbook $1"
            },
            {
                regex: "T10\\(E3C6\\)",
                model: "T10"
            },
            {
                regex: "T30_(ROW|EEA)",
                model: "T30 $1"
            },
            {
                regex: "Teclast[_ -]([^;/]+) Build",
                model: "$1"
            }
        ]
    }, J1 = {
        regex: "Tech ?pad|XTAB[ _-]|Dual C1081HD|S813G",
        device: "tablet",
        models: [
            {
                regex: "S813G",
                model: "S813G"
            },
            {
                regex: "Dual C1081HD",
                model: "XTAB C1081HD"
            },
            {
                regex: "XTAB[ _-]([^/;]+) Build",
                model: "XTAB $1"
            },
            {
                regex: "Tech ?pad[ _-]([^/;]+) Build",
                model: "$1",
                device: "smartphone"
            }
        ]
    }, q1 = {
        regex: "Hudl ([^/;]+) Build|W032i-C3[);/ ]",
        device: "tablet",
        models: [
            {
                regex: "Hudl ([^/;]+) Build",
                model: "Hudl $1"
            },
            {
                regex: "W032i-C3[);/ ]",
                model: "Op3n Dott"
            }
        ]
    }, j1 = {
        regex: "Texet|(NaviPad [^/;]*) Build|TM-(?:1046|1058|1057|1067|3000|3200R|3500|4003|4071|450[34]|451[30]|4377|4082R|550[83]|5010|5017|507[4-7]|5[23]77|6003|6906|702[13]|7055HD|709[69]|9747BT|9758|9751HD|9767|5513|520[410]|5505|507[13]|5581|7859|8044|9748[ _]3G|9720|7047HD[ _]3G|9757|9740|4982|4515|4083|500[3567]|5571|3204R|5016|8043|7047HD[ _]3G|8041HD|8066|705[23]|7041|8041HD|8051|8048|974[96]|973[78]W|974[170]|9743W|9750HD|7043XD|7049|7887|7037W|702[46])|TB-(771A|711A)|X-Force[\\(-]?TM-5009\\)?|X-Plus[\\(-]?TM-5577\\)?|X-pad (?:AIR 8|iX 7) 3G",
        device: "tablet",
        models: [
            {
                regex: "TM-9749",
                model: "X-pad Plus 7.1 3G"
            },
            {
                regex: "TM-9746",
                model: "X-pad Plus 7 3G"
            },
            {
                regex: "TM-8051",
                model: "X-pad Force 8i 3G"
            },
            {
                regex: "TM-1058",
                model: "X-Force 10 3G"
            },
            {
                regex: "TM-8048",
                model: "X-pad Force 8 3G"
            },
            {
                regex: "(NaviPad [^/;]*) Build",
                model: "$1"
            },
            {
                regex: "TM-7055HD",
                model: "NaviPad 3G"
            },
            {
                regex: "TM-9758",
                model: "X-pad Style 10"
            },
            {
                regex: "(X-pad (?:AIR 8|iX 7) 3G)",
                model: "$1"
            },
            {
                regex: "TM-7096",
                model: "X-pad NAVI 7.3 3G"
            },
            {
                regex: "TM-7099",
                model: "X-pad NAVI 7.4 3G"
            },
            {
                regex: "TM-1046",
                model: "X-pad NAVI 10 3G"
            },
            {
                regex: "TM-7859",
                model: "X-pad NAVI 8.2 3G"
            },
            {
                regex: "TM-7049",
                model: "NaviPad TM-7049 3G"
            },
            {
                regex: "TM-7887",
                model: "NaviPad TM-7887 3G"
            },
            {
                regex: "TM-8066",
                model: "X-pad Rapid 8.2 4G"
            },
            {
                regex: "(TM-(?:1057|1067|6906|8043|9748[_ ]3G|9740|9757(?:[_ ]3G)?|7047HD[ _]3G|9747BT|9751HD|702[13]|705[23]|7041|9720|7047HD[_ ]3G|8044|8041HD|973[78]W|9743W|974[710]|9750HD|7043XD|7037W|702[46])|TB-(?:771A|711A|8041HD))",
                model: "$1"
            },
            {
                regex: "TM-4503",
                device: "smartphone",
                model: "X-Quad"
            },
            {
                regex: "(TM-(?:3000|3200R|4003|4083|4377|4504|451[30]|500[35]|5[23]77|5571|3204R|520[04]|5581|5505|507[13]|5017|507[4-7]|6003|5513))",
                device: "smartphone",
                model: "$1"
            },
            {
                regex: "TM-5006",
                device: "smartphone",
                model: "X-Line"
            },
            {
                regex: "TM-5007",
                device: "smartphone",
                model: "X-Shine"
            },
            {
                regex: "TM-5201",
                device: "smartphone",
                model: "Rock"
            },
            {
                regex: "TM-4515",
                device: "smartphone",
                model: "X-Style"
            },
            {
                regex: "TM-9767",
                model: "X-pad Style 10 3G"
            },
            {
                regex: "TM-(5016|3500)",
                device: "smartphone",
                model: "X-Maxi 2"
            },
            {
                regex: "TM-4071",
                device: "smartphone",
                model: "X-Smart"
            },
            {
                regex: "TM-4982",
                device: "smartphone",
                model: "iX-Maxi"
            },
            {
                regex: "TM-5010",
                device: "smartphone",
                model: "X-Selfie"
            },
            {
                regex: "TM-4082R",
                device: "smartphone",
                model: "X-Driver Quad"
            },
            {
                regex: "TM-5503",
                device: "smartphone",
                model: "X-Mage"
            },
            {
                regex: "TM-5508",
                device: "smartphone",
                model: "X-Cosmo"
            },
            {
                regex: "X-Force[\\(-]?TM-5009\\)?",
                device: "smartphone",
                model: "X-Force"
            },
            {
                regex: "X-Plus[\\(-]?TM-5577\\)?",
                device: "smartphone",
                model: "X-Plus"
            }
        ]
    }, eu = {
        regex: "TELEFUNKEN|TEL-1013GIQA|TF-SP5001|(TF-MID(?:[78]02G|9705RG|7805G|1010G))|(TF-LED(?:65S75T2SU|32S39T2S|32S5[289]T2S|32S70T2S))",
        device: "tablet",
        models: [
            {
                regex: "TEL-1013GIQA",
                model: "Giqa 10.1 3G"
            },
            {
                regex: "(?:TELEFUNKEN)?(TF-SP5001|Outdoor LTE)",
                model: "$1",
                device: "smartphone"
            },
            {
                regex: "(TF-MID(?:[78]02G|9705RG|7805G|1010G))",
                model: "$1"
            },
            {
                regex: "(TF-LED(?:65S75T2SU|32S39T2S|32S5[289]T2S|32S70T2S))",
                model: "$1",
                device: "tv"
            }
        ]
    }, ru = {
        regex: "TELEGO",
        device: "smartphone",
        models: [
            {
                regex: "TELEGO-W503",
                model: "W503"
            }
        ]
    }, ou = {
        regex: "(?<!FBCR/)Telenor",
        device: "smartphone",
        models: [
            {
                regex: "Telenor[ _]([^;/]+) Build",
                model: "$1"
            },
            {
                regex: "Telenor[ _]([^a-z0-9_]+)\\)",
                model: "$1"
            }
        ]
    }, lu = {
        regex: "Telit",
        device: "feature phone",
        models: [
            {
                regex: "Telit_Mobile_Terminals-([a-z0-9]+)",
                model: "$1"
            },
            {
                regex: "Telit[\\-_]?([a-z0-9]+)",
                model: "$1"
            }
        ]
    }, du = {
        regex: "ThL[ _-]",
        device: "smartphone",
        models: [
            {
                regex: "ThL[ _-]*([^;/]+) Build",
                model: "$1"
            },
            {
                regex: "ThL[ _-]*([^ ;/)]+)[ ;/)]",
                model: "$1"
            }
        ]
    }, au = {
        regex: "TIANYU",
        device: "feature phone",
        models: [
            {
                regex: "TIANYU ([a-z0-9]+)",
                model: "$1"
            },
            {
                regex: "TIANYU-KTOUCH/([a-z0-9]+)",
                model: "$1"
            }
        ]
    }, tu = {
        regex: "Tmovi|Infinit_Lite_2",
        device: "smartphone",
        models: [
            {
                regex: "Tmovi[ _]Prime",
                model: "Prime"
            },
            {
                regex: "TMOVI_YEAH_BEAT",
                model: "Yeah Beat"
            },
            {
                regex: "YeahLIVE",
                model: "Yeah LIVE"
            },
            {
                regex: "Infinit Lite",
                model: "Infinit Lite"
            },
            {
                regex: "Infinit_Lite_2",
                model: "Infinit Lite 2"
            }
        ]
    }, iu = {
        regex: "TOOKY",
        device: "smartphone",
        models: [
            {
                regex: "TOOKY (A19|W1|T8[368]|T1982)[);/ ]",
                model: "$1"
            },
            {
                regex: "TOOKY A9PLUS[);/ ]",
                model: "A9 Plus"
            }
        ]
    }, nu = {
        regex: "Tolino Tab ([^/;]+) Build",
        device: "tablet",
        model: "Tolino Tab $1"
    }, mu = {
        regex: "Toplux ([a-z0-9]+)",
        device: "feature phone",
        model: "$1"
    }, su = {
        regex: "TOUCHMATE|(TM-(?:MID1020A|MID710|MID798|MID792|MID788D|SM500N|SM410))",
        device: "smartphone",
        models: [
            {
                regex: "(TM-(?:MID1020A|MID710|MID798|MID792|MID788D))",
                device: "tablet",
                model: "$1"
            },
            {
                regex: "(TM-(?:SM500N|SM410))",
                model: "$1"
            },
            {
                regex: "Touchmate ([^/;]+) Build",
                model: "$1"
            }
        ]
    }, gu = {
        regex: "(?:TrekStor|Surftab) ([^/;]+) Build|Surftab[^;\\)]*(?:[;\\)]|$)|ST10216-2A|VT10416-[12]|TFMTKAW01232",
        device: "tablet",
        models: [
            {
                regex: "ST10216-2A|VT10416-[12]",
                model: "SurfTab 10.1"
            },
            {
                regex: "TrekStor ([^/;]+) Build",
                model: "$1"
            },
            {
                regex: "Surftab ([^/;]+) Build",
                model: "SurfTab $1"
            },
            {
                regex: "Surftab[ _]([^;\\)]*)(?:[;\\)]|$)",
                model: "SurfTab $1"
            },
            {
                regex: "TFMTKAW01232",
                model: "SurfTab L15"
            }
        ]
    }, xu = {
        regex: "Trevi[ _]|TAB[ _]10[ _]3G[ _]V16|TAB[ _](7|8)[ _]3G[ _]V8|TAB9 3G|MINITAB 3GV|Phablet[ _](?:4|4\\.5|5|5\\,3|6)[ _]?[CSQ]|REVERSE[ _]5\\.5[ _]?Q",
        device: "tablet",
        models: [
            {
                regex: "TAB[ _]?(7|8)[ _]3G[ _]V8",
                model: "TAB $1 3G V8"
            },
            {
                regex: "TAB[ _]?9[ _]3G[ _]V8",
                model: "TAB 9 3G V8"
            },
            {
                regex: "TAB[ _]?9[ _]3G",
                model: "TAB 9 3G"
            },
            {
                regex: "TAB[ _]10[ _]3G[ _]V16",
                model: "TAB 10 3G V16"
            },
            {
                regex: "MINITAB 3GV",
                model: "MINITAB 3G V"
            },
            {
                regex: "(?:Trevi_)?Phablet[ _]4[ _]?C",
                model: "Phablet 4 C",
                device: "smartphone"
            },
            {
                regex: "(?:Trevi_)?Phablet[ _]4[ _]?S",
                model: "Phablet 4 S",
                device: "smartphone"
            },
            {
                regex: "(?:Trevi_)?Phablet[ _]4.5[ _]?Q",
                model: "Phablet 4.5Q",
                device: "smartphone"
            },
            {
                regex: "(?:Trevi_)?PHABLET[ _]5[ _]?S",
                model: "Phablet 5 S",
                device: "smartphone"
            },
            {
                regex: "(?:Trevi_)?PHABLET[ _]5,3[ _]?Q",
                model: "Phablet 5.3 Q",
                device: "phablet"
            },
            {
                regex: "(?:Trevi_)?REVERSE[ _]5.5[ _]?Q",
                model: "Phablet 5.5 Q REVERSE",
                device: "phablet"
            },
            {
                regex: "(?:Trevi_)?PHABLET[ _]6[ _]?S",
                model: "Phablet 6 S",
                device: "phablet"
            },
            {
                regex: "Trevi[_]([^;/]+) Build",
                model: "$1"
            }
        ]
    }, cu = {
        regex: "(NuclearSX-SP5)",
        device: "smartphone",
        model: "Nuclear SX-SP5"
    }, uu = {
        regex: "Uhappy|UP?580|UP350|UP[35679]20",
        device: "smartphone",
        models: [
            {
                regex: "UP([35679]20)",
                model: "UP$1"
            },
            {
                regex: "UP350",
                model: "UP350"
            },
            {
                regex: "UP580",
                model: "UP580"
            },
            {
                regex: "U580",
                model: "U580"
            },
            {
                regex: "Uhappy[ _-]([^;/]+) Build",
                model: "$1"
            },
            {
                regex: "Uhappy[ _-]?([^;/)]+)[);/ ]",
                model: "$1"
            }
        ]
    }, Su = {
        regex: "U((?:67[013]|680)C|(?:452|504)TL|683CL)[);/ ]",
        device: "smartphone",
        model: "U$1"
    }, Au = {
        regex: "QOOQ ",
        device: "tablet",
        model: "QOOQ"
    }, pu = {
        regex: "utstar[ _-]?([a-z0-9]+)",
        device: "feature phone",
        model: "$1"
    }, vu = {
        regex: "Ulefone|Power_[356]|S10_Pro|(Armor(?:[ _]2)?|U00[78][ _]Pro|Be[ _]X|Be[ _]Touch(?:[ _][23])?|Be[ _](?:One|Pure)(?:[ _]Lite)?) Build",
        device: "smartphone",
        models: [
            {
                regex: "S10_Pro",
                model: "S10 Pro"
            },
            {
                regex: "Be[ _]Touch([ _][23])?",
                model: "Be Touch$1"
            },
            {
                regex: "Be[ _]Pure[ _]Lite",
                model: "Be Pure Lite"
            },
            {
                regex: "Be[ _]Pure",
                model: "Be Pure"
            },
            {
                regex: "Be[ _]One[ _]Lite",
                model: "Be One Lite"
            },
            {
                regex: "Be[ _]One",
                model: "Be One"
            },
            {
                regex: "Be[ _]X",
                model: "Be X"
            },
            {
                regex: "U007 Pro",
                model: "U007 Pro"
            },
            {
                regex: "U008 Pro",
                model: "U008 Pro"
            },
            {
                regex: "Armor[ _]2 Build",
                model: "Armor 2"
            },
            {
                regex: "Armor Build",
                model: "Armor"
            },
            {
                regex: "Power_([356])",
                model: "Power $1"
            },
            {
                regex: "Ulefone[_ ](X|S1[ _]Pro|S[17])[);\\ ]",
                model: "$1"
            },
            {
                regex: "Ulefone[ _-]?([^;/]+) Build",
                model: "$1"
            },
            {
                regex: "Ulefone[ _-]?([^;/)]+)[;/)]",
                model: "$1"
            }
        ]
    }, Mu = {
        regex: "UMI(?:DIGI)?[ _]|A5_Pro",
        device: "smartphone",
        models: [
            {
                regex: "A5_Pro",
                model: "A5 Pro"
            },
            {
                regex: "UMI TOUCH X",
                model: "Touch X"
            },
            {
                regex: "UMI TOUCH",
                model: "Touch"
            },
            {
                regex: "UMI_(London|Diamond(?:_X)?)",
                model: "$1"
            },
            {
                regex: "UMI(?:DIGI)?[ _]([^/;)]+)(?: Build|\\))",
                model: "$1"
            }
        ]
    }, Pu = {
        regex: "Uniscope",
        device: "smartphone",
        models: [
            {
                regex: "Uniscope[ _\\-]?([^/;]+) Build",
                model: "$1"
            },
            {
                regex: "Uniscope[ _\\-]?([^);/ ]+)",
                model: "$1"
            }
        ]
    }, Tu = {
        regex: "Unnecto|(?:U513|U5151|U61[1356]|U7[12]0|U-830|U90[35])[);/ ]",
        device: "smartphone",
        models: [
            {
                regex: "U513",
                model: "Drone XT"
            },
            {
                regex: "U5151",
                model: "Bolt"
            },
            {
                regex: "U611",
                model: "Quattro X"
            },
            {
                regex: "U613",
                model: "Quattro S"
            },
            {
                regex: "U615",
                model: "Quattro M"
            },
            {
                regex: "U616",
                model: "U616"
            },
            {
                regex: "U710",
                model: "Quattro U710"
            },
            {
                regex: "U720",
                model: "Quattro Z"
            },
            {
                regex: "U-830",
                model: "Rush"
            },
            {
                regex: "U903",
                model: "Air"
            },
            {
                regex: "U905",
                model: "Air 5.5"
            }
        ]
    }, hu = {
        regex: "Unonu[ _-]",
        device: "smartphone",
        models: [
            {
                regex: "Unonu[ _-]([^;/]+) Build",
                model: "$1"
            },
            {
                regex: "Unonu[ _-]?([^;/)]+)[);/ ]",
                model: "$1"
            }
        ]
    }, bu = {
        regex: "UTOK (45[01]D)",
        device: "smartphone",
        model: "$1"
    }, Lu = {
        regex: "(M910A|M783K|M783K-16G|M1072R-3G)[);/ ]",
        device: "tablet",
        model: "$1"
    }, _u = {
        regex: "ViewSonic|VSD[0-9]+[);/ ]|ViewPad|ViewPhone",
        device: "smart display",
        models: [
            {
                regex: "(?:ViewSonic-)?V500[);/ ]",
                model: "V500",
                device: "smartphone"
            },
            {
                regex: "ViewSonic A8\\+[);/ ]",
                model: "A8 Plus",
                device: "smartphone"
            },
            {
                regex: "(?:ViewSonic-)?ViewPhone ?([^;/]+) Build",
                model: "ViewPhone $1",
                device: "smartphone"
            },
            {
                regex: "(?:ViewSonic-)?ViewPad ?([^;/]+) Build",
                model: "ViewPad $1",
                device: "tablet"
            },
            {
                regex: "(VSD[0-9]+)[);/ ]",
                model: "$1"
            }
        ]
    }, Gu = {
        regex: "Vitelcom|portalmmm/[12].0 TSM",
        device: "feature phone",
        models: [
            {
                regex: "TSM-([a-z0-9]+)",
                model: "$1"
            },
            {
                regex: "TSM([a-z0-9\\-]+)",
                model: "$1"
            },
            {
                regex: "portalmmm/[12].0 (TSM[a-z0-9 ]+)",
                model: "$1"
            }
        ]
    }, Bu = {
        regex: "(vKB011B|vKB004L)",
        device: "tablet",
        model: "$1"
    }, Nu = {
        regex: "Vernee|Mars Pro|Apollo (?:Lite|X)|Thor (?:E|Plus)",
        device: "smartphone",
        models: [
            {
                regex: "Apollo Lite",
                model: "Apollo Lite"
            },
            {
                regex: "Apollo X",
                model: "Apollo X"
            },
            {
                regex: "Mars Pro",
                model: "Mars Pro"
            },
            {
                regex: "Thor E",
                model: "Thor E"
            },
            {
                regex: "Thor Plus",
                model: "Thor Plus"
            },
            {
                regex: "Vernee_M5",
                model: "M5"
            },
            {
                regex: "Vernee[ _-]([^;/]+) Build",
                model: "$1"
            },
            {
                regex: "Vernee[ _-]([a-z0-9_-]+)",
                model: "$1"
            }
        ]
    }, Cu = {
        regex: "Vertu[ ]?([a-z0-9]+)",
        device: "feature phone",
        model: "$1"
    }, Eu = {
        regex: "(CX-508|CX-551|Reiv 500)[/;) ]",
        device: "smartphone",
        model: "$1"
    }, Ou = {
        regex: "QTA(SUN[12]|XIA1|QZ3|QZ3KID|IR7)|QMV7B",
        device: "tablet",
        models: [
            {
                regex: "QTAXIA1|QTAIR7",
                model: "Ellipsis 10"
            },
            {
                regex: "QTASUN1",
                model: "Ellipsis 8 HD"
            },
            {
                regex: "QTASUN2",
                model: "Ellipsis 8 HD 4G LTE"
            },
            {
                regex: "QTAQZ3KID",
                model: "Ellipsis Kids LTE"
            },
            {
                regex: "QTAQZ3",
                model: "Ellipsis 8"
            },
            {
                regex: "QMV7B",
                model: "Ellipsis 7"
            }
        ]
    }, wu = {
        regex: "verykool",
        device: "smartphone",
        models: [
            {
                regex: "verykoolS5004",
                model: "Lotus JR."
            },
            {
                regex: "verykool[ _]?([^/;]+) Build",
                model: "$1"
            },
            {
                regex: "verykool[ _]?([^/;]+);",
                model: "$1"
            }
        ]
    }, fu = {
        regex: "Venus[ _](GO|V[1-9]|Z[1-9]0)|V_?TAB|VP74|VT97PRO|VSP145M|VSP250G|VSP355[GS]",
        device: "smartphone",
        models: [
            {
                regex: "VT97PRO",
                model: "VTab 9.7 Pro",
                device: "tablet"
            },
            {
                regex: "VP74",
                model: "VTab Lite II",
                device: "tablet"
            },
            {
                regex: "VTAB10",
                model: "VTab 10",
                device: "tablet"
            },
            {
                regex: "V_TAB_7_ECO_III ",
                model: "VTab 7 Eco 3",
                device: "tablet"
            },
            {
                regex: "V_TAB_([0-9]{4}[A-Z]?)",
                model: "VTab $1",
                device: "tablet"
            },
            {
                regex: "VSP145M",
                model: "Venus 4.5"
            },
            {
                regex: "VSP250G",
                model: "Venus 5.0V"
            },
            {
                regex: "VSP355G",
                model: "Venus 5.5V"
            },
            {
                regex: "VSP355S",
                model: "Venus 5.5X"
            },
            {
                regex: "Venus[ _]V([1-9])",
                model: "Venus V$1"
            },
            {
                regex: "Venus[ _]Z([1-9]0)",
                model: "Venus Z$1"
            },
            {
                regex: "Venus[ _]GO",
                model: "Venus Go"
            }
        ]
    }, yu = {
        regex: "Videocon[_ \\-]|VT75C",
        device: "smartphone",
        models: [
            {
                regex: "Videocon[_ \\-]([a-z0-9]+)",
                model: "$1"
            },
            {
                regex: "VT75C[/;) ]",
                model: "VT75C"
            }
        ]
    }, Xu = {
        regex: "(?<!FBCR/)Vodafone[ _-]|Smart ?Tab ?(?:III? ?)?(?:|4G|7|10)[);/ -]|VodafoneSmartChat|VFD[ _][0-9]+[;/) ]|VFD320|VF6[89]5|VF-(696|1397|795|895N|1497)",
        device: "smartphone",
        models: [
            {
                regex: "VFD 100",
                model: "Smart Mini"
            },
            {
                regex: "VF685",
                model: "Smart Kicka"
            },
            {
                regex: "VF695",
                model: "Smart First 6"
            },
            {
                regex: "VFD 200",
                model: "Smart First 7"
            },
            {
                regex: "VFD 300",
                model: "Smart Mini 7"
            },
            {
                regex: "VFD 50[02]",
                model: "Smart Turbo 7"
            },
            {
                regex: "VFD 51[013]",
                model: "Smart E8"
            },
            {
                regex: "VFD 600",
                model: "Smart Prime 7"
            },
            {
                regex: "VFD320",
                model: "Smart C9"
            },
            {
                regex: "VFD 820",
                model: "Smart X9"
            },
            {
                regex: "VFD 610",
                model: "Smart N8"
            },
            {
                regex: "Smart ultra 6",
                model: "Smart Ultra 6"
            },
            {
                regex: "VFD 700",
                model: "Smart Ultra 7"
            },
            {
                regex: "VFD 720",
                model: "Smart N9"
            },
            {
                regex: "VFD 900",
                model: "Smart Platinum 7"
            },
            {
                regex: "Vodafone[ _]875[);/ ]",
                model: "Smart Mini"
            },
            {
                regex: "Vodafone[ _]975N?[);/ ]",
                model: "Smart 3"
            },
            {
                regex: "Vodafone[ _]785[);/ ]",
                model: "Smart 4 Mini"
            },
            {
                regex: "Vodafone[ _]890N[);/ ]",
                model: "Smart 4 Turbo"
            },
            {
                regex: "Vodafone[ _]985N[);/ ]",
                model: "Smart 4 Power"
            },
            {
                regex: "VodafoneSmartChat",
                model: "Smart Chat"
            },
            {
                regex: "VF-696",
                model: "Smart Grand 6"
            },
            {
                regex: "VF-795",
                model: "Smart Speed 6"
            },
            {
                regex: "VF-895N",
                model: "Smart Prime 6"
            },
            {
                regex: "VF-1397",
                model: "Tab Speed 6",
                device: "tablet"
            },
            {
                regex: "VF-1497",
                model: "Tab Prime 6",
                device: "tablet"
            },
            {
                regex: "VFD 1100",
                device: "tablet",
                model: "Tab Mini 7"
            },
            {
                regex: "VFD 1300",
                device: "tablet",
                model: "Smart Tab N8"
            },
            {
                regex: "VFD 1400",
                device: "tablet",
                model: "Tab Prime 7"
            },
            {
                regex: "Smart ?Tab ?3G",
                device: "tablet",
                model: "Smart Tab 3G"
            },
            {
                regex: "Smart ?Tab ?4G",
                device: "tablet",
                model: "Smart Tab 4G"
            },
            {
                regex: "Smart ?Tab ?4",
                model: "Smart Tab 4",
                device: "tablet"
            },
            {
                regex: "SmartTab7[);/ -]",
                model: "Smart Tab 7",
                device: "tablet"
            },
            {
                regex: "SmartTab10[);/ -]",
                model: "Smart Tab 10",
                device: "tablet"
            },
            {
                regex: "Smart ?Tab ?II ?7",
                model: "Smart Tab II 7",
                device: "tablet"
            },
            {
                regex: "Smart ?Tab ?II ?10",
                model: "Smart Tab II 10",
                device: "tablet"
            },
            {
                regex: "Smart ?Tab ?III ?7",
                model: "Smart Tab III 7",
                device: "tablet"
            },
            {
                regex: "Smart ?Tab ?III ?10",
                model: "Smart Tab III 10",
                device: "tablet"
            },
            {
                regex: "VFD[ _]([0-9]+)[;/) ]",
                model: "VFD $1"
            },
            {
                regex: "Vodafone[ _-]([^;/]+) Build",
                model: "$1"
            },
            {
                regex: "Vodafone[ _-]([a-z0-9_-]+)",
                model: "$1"
            }
        ]
    }, $u = {
        regex: "Vonino|Epic (?:E8|P7)|Gyga[ _](?:X|S|QS|XS)|Jax[ _](?:Q|QS|S|X|Mini)|Magnet[ _]M[19]|Navo_QS|Onyx_(QS|Z)|Orin_QS|Pluri[ _](?:[BCMQ]7|[CQ]8)|Sirius_QS|Volt[ _][XS]|Xavy_(T7|L8)|Xylo[ _][XSPQ]|Zun[ _]X[OS]?",
        device: "smartphone",
        models: [
            {
                regex: "Zun[ _]XO",
                model: "Zun XO"
            },
            {
                regex: "Zun[ _]XS",
                model: "Zun XS"
            },
            {
                regex: "Zun[ _]X",
                model: "Zun X"
            },
            {
                regex: "Xylo[ _](P|S|X|Q)",
                model: "Xylo $1"
            },
            {
                regex: "Volt[ _]S_A7",
                model: "Volt S A7"
            },
            {
                regex: "Volt[ _]S",
                model: "Volt S"
            },
            {
                regex: "Volt[ _]X",
                model: "Volt X"
            },
            {
                regex: "Gyga[ _]QS",
                model: "Gyga QS"
            },
            {
                regex: "Gyga[ _]XS",
                model: "Gyga XS"
            },
            {
                regex: "Gyga[ _](S|X)",
                model: "Gyga $1"
            },
            {
                regex: "Jax[ _]QS",
                model: "Jax QS"
            },
            {
                regex: "Jax[ _]S_A7",
                model: "Jax S A7"
            },
            {
                regex: "Jax[ _](S|Q|X)",
                model: "Jax $1"
            },
            {
                regex: "Jax[ _]Mini",
                model: "Jax Mini"
            },
            {
                regex: "Epic (E8|P7)",
                model: "Epic $1",
                device: "tablet"
            },
            {
                regex: "Pluri[ _](B|C|M|Q)7",
                model: "Pluri $17",
                device: "tablet"
            },
            {
                regex: "Pluri[ _](C|Q)8",
                model: "Pluri $18",
                device: "tablet"
            },
            {
                regex: "Magnet[ _]M([19])",
                model: "Magnet M$1",
                device: "tablet"
            },
            {
                regex: "Navo_QS",
                model: "Navo QS",
                device: "tablet"
            },
            {
                regex: "Onyx_(QS|Z)",
                model: "Onyx $1",
                device: "tablet"
            },
            {
                regex: "Orin_QS",
                model: "Orin QS",
                device: "tablet"
            },
            {
                regex: "Sirius_QS",
                model: "Sirius QS",
                device: "tablet"
            },
            {
                regex: "Xavy_T7",
                model: "Xavy T7",
                device: "tablet"
            },
            {
                regex: "Xavy_L8",
                model: "Xavy L8",
                device: "tablet"
            }
        ]
    }, Iu = {
        regex: "VORAGO",
        device: "smartphone",
        models: [
            {
                regex: "CELL-500",
                model: "CELL-500"
            }
        ]
    }, Fu = {
        regex: "VOTO[ _\\-]|VT8[89]8[;/) ]",
        device: "smartphone",
        models: [
            {
                regex: "VOTO[ _\\-]?([^/;]+) Build",
                model: "$1"
            },
            {
                regex: "VOTO[ _\\-]?([^);/ ]+)",
                model: "$1"
            },
            {
                regex: "(VT8[89]8)[;/) ]",
                model: "$1"
            }
        ]
    }, Du = {
        regex: "Voxtel_([a-z0-9]+)",
        device: "feature phone",
        model: "$1"
    }, Ru = {
        regex: "VP5004A",
        device: "smartphone",
        models: [
            {
                regex: "VP5004A",
                model: "VP5004A"
            }
        ]
    }, Vu = {
        regex: "Walton|Walpad|Primo[ _](C[1234]?|D[12345]|E[12345]|EF[23]?|EM|F[1234567]i?|G[123457]|GF[234]?|GH[23]?|GM|H[2346]|HM|N|N1|NF|NX2?|R[12346]|RH2?|RM2?|RX[23]?|S[123456]|V1|X[1234]|Z|ZX)",
        device: "smartphone",
        models: [
            {
                regex: "Walpad ([^;/]+) Build",
                device: "tablet",
                model: "Primo Walpad $1"
            },
            {
                regex: "Primo S6 infinity",
                model: "Primo S6 Infinity"
            },
            {
                regex: "Walton[ _]([^;/]+) Build",
                model: "$1"
            },
            {
                regex: "Walton[ _]([^;/]+)\\)",
                model: "$1"
            },
            {
                regex: "Primo[ _]([^;/]+) Build",
                model: "Primo $1"
            },
            {
                regex: "Primo[ _]([0-9a-z]+)",
                model: "Primo $1"
            }
        ]
    }, Uu = {
        regex: "WELLCOM[ _\\-/]([a-z0-9]+)",
        device: "smartphone",
        model: "$1"
    }, Hu = {
        regex: "Wexler|TAB[ _]10Q[);/ ]|ZEN[ _](?:4\\.5|4\\.7|5)",
        device: "tablet",
        models: [
            {
                regex: "(?:Wexler[ _\\-\\.])?ZEN[ _]4\\.5[);/ ]",
                model: "ZEN 4.5",
                device: "smartphone"
            },
            {
                regex: "(?:Wexler[ _\\-\\.])?ZEN[ _]4\\.7[);/ ]",
                model: "ZEN 4.7",
                device: "smartphone"
            },
            {
                regex: "(?:Wexler[ _\\-\\.])?ZEN[ _]5[);/ ]",
                model: "ZEN 5",
                device: "smartphone"
            },
            {
                regex: "(?:Wexler[ _\\-\\.])?TAB[ _]10Q[);/ ]",
                model: "TAB 10Q"
            },
            {
                regex: "Wexler[ _\\-\\.]([^;/]+) Build",
                model: "$1"
            },
            {
                regex: "Wexler[ _\\-\\.]([^);/]+)[);/]",
                model: "$1"
            }
        ]
    }, ku = {
        regex: "(?:WIKO[_ -])|(?:WIKO-)?CINK_[a-z0-9_]+|(?:WIKO-)?HIGHWAY_[a-z0-9_]+|(?:WIKO-)?(?:Cink([^/;]*)|Highway([^/;]*)|Iggy|Stairway|Rainbow ?(Jam|Lite|Up)?|Darkside|Darkmoon|Darkfull|Darknight|Freddy|FEVER|Jerry[2]?|Sublim|Ozzy|JIMMY|Barry|Birdy|Bloom|Getaway|Goa(?!nna)|Kite|Robby|Lenny[2-9]?|Slide|Sunset[2-9]?|Sunny[2-9]?|Tommy[2-9]?|PULP(?: Fab)?|Wax|HARRY|Ridge(?: Fab)?|U FEEL(?: Prime| Lite)?|U PULSE(?: LITE)?|View2 Go|View XL|View Prime)(?: Plus)?(?: 4G)?(?: Build|$)?|W_(?:C800|K[346]00|P200)|WC300|W-(V720|V800|P[36]11|K420|K510)-(TVM|EEA|SUN|OPE)|WIM Lite|W-K360-TV",
        device: "smartphone",
        models: [
            {
                regex: "(?:Wiko-)?Cink([^/;]*) Build",
                model: "Cink$1"
            },
            {
                regex: "(?:WIKO-)?CINK_([a-z0-9_]+)",
                model: "Cink $1"
            },
            {
                regex: "(?:Wiko-)?Highway([^/;]*) Build",
                model: "Highway$1"
            },
            {
                regex: "(?:WIKO-)?HIGHWAY_([a-z0-9_]+)",
                model: "Highway $1"
            },
            {
                regex: "(?:WIKO-)?Iggy",
                model: "Iggy"
            },
            {
                regex: "(?:WIKO-)?FEVER",
                model: "Fever"
            },
            {
                regex: "(?:WIKO-)?Stairway",
                model: "Stairway"
            },
            {
                regex: "(?:WIKO-)?Ridge Fab 4G",
                model: "Ridge Fab 4G"
            },
            {
                regex: "(?:WIKO-)?Ridge 4G",
                model: "Ridge 4G"
            },
            {
                regex: "(?:WIKO-)?Ridge",
                model: "Ridge"
            },
            {
                regex: "(?:WIKO-)?Rainbow ([^/;]+) Build",
                model: "Rainbow $1"
            },
            {
                regex: "(?:WIKO-)?Rainbow",
                model: "Rainbow"
            },
            {
                regex: "(?:WIKO-)?Darkside",
                model: "Darkside"
            },
            {
                regex: "(?:WIKO-)?Darkmoon",
                model: "Darkmoon"
            },
            {
                regex: "(?:WIKO-)?Darkfull",
                model: "Darkfull"
            },
            {
                regex: "(?:WIKO-)?Darknight",
                model: "Darknight"
            },
            {
                regex: "(?:WIKO-)?Sublim",
                model: "Sublim"
            },
            {
                regex: "(?:WIKO-)?Ozzy",
                model: "Ozzy"
            },
            {
                regex: "(?:WIKO-)?Barry",
                model: "Barry"
            },
            {
                regex: "(?:WIKO-)?Birdy",
                model: "Birdy"
            },
            {
                regex: "(?:WIKO-)?Bloom",
                model: "Bloom"
            },
            {
                regex: "(?:WIKO-)?JIMMY",
                model: "Jimmy"
            },
            {
                regex: "JERRY MAX",
                model: "Jerry Max"
            },
            {
                regex: "W_K300",
                model: "Jerry 3"
            },
            {
                regex: "(?:WIKO-)?Jerry2",
                model: "Jerry 2"
            },
            {
                regex: "(?:WIKO-)?Jerry",
                model: "Jerry"
            },
            {
                regex: "(?:WIKO-)?Getaway",
                model: "Getaway"
            },
            {
                regex: "(?:WIKO-)?Goa(?!nna)",
                model: "Goa"
            },
            {
                regex: "(?:WIKO-)?Freddy",
                model: "Freddy"
            },
            {
                regex: "(?:WIKO-)?Kite",
                model: "Kite"
            },
            {
                regex: "W_K400",
                model: "Lenny 5"
            },
            {
                regex: "(?:WIKO-)?Lenny[ -_]?3 Max",
                model: "Lenny 3 Max"
            },
            {
                regex: "(?:WIKO-)?Lenny[ -_]?4 Plus",
                model: "Lenny 4 Plus"
            },
            {
                regex: "(?:WIKO-)?Lenny[ -_]?([2-9])",
                model: "Lenny $1"
            },
            {
                regex: "(?:WIKO-)?Lenny",
                model: "Lenny"
            },
            {
                regex: "(?:WIKO-)?Slide",
                model: "Slide"
            },
            {
                regex: "(?:WIKO-)?Sunset2",
                model: "Sunset 2"
            },
            {
                regex: "(?:WIKO-)?Sunset",
                model: "Sunset"
            },
            {
                regex: "(?:WIKO-)?Sunny3",
                model: "Sunny 3"
            },
            {
                regex: "(?:WIKO-)?Sunny2 Plus",
                model: "Sunny 2 Plus"
            },
            {
                regex: "(?:WIKO-)?Sunny2",
                model: "Sunny 2"
            },
            {
                regex: "W-K360-TV",
                model: "Sunny 4 Plus"
            },
            {
                regex: "(?:WIKO-)?Sunny",
                model: "Sunny"
            },
            {
                regex: "(W_K600|Tommy3)",
                model: "Tommy 3"
            },
            {
                regex: "(?:WIKO-)?Tommy2 Plus",
                model: "Tommy 2 Plus"
            },
            {
                regex: "(?:WIKO-)?Tommy2",
                model: "Tommy 2"
            },
            {
                regex: "(?:WIKO-)?Tommy",
                model: "Tommy"
            },
            {
                regex: "(?:WIKO-)?Wax",
                model: "Wax"
            },
            {
                regex: "(?:WIKO-)?HARRY",
                model: "Harry"
            },
            {
                regex: "(?:WIKO-)?WIM Lite",
                model: "WIM Lite"
            },
            {
                regex: "(?:WIKO-)?Pulp Fab 4G",
                model: "Pulp Fab 4G"
            },
            {
                regex: "(?:WIKO-)?Pulp Fab",
                model: "Pulp Fab"
            },
            {
                regex: "(?:WIKO-)?Pulp 4G",
                model: "Pulp 4G"
            },
            {
                regex: "(?:WIKO-)?Pulp",
                model: "Pulp"
            },
            {
                regex: "(?:WIKO-)?Robby",
                model: "Robby"
            },
            {
                regex: "(?:WIKO-)?U PULSE LITE",
                model: "U Pulse Lite"
            },
            {
                regex: "(?:WIKO-)?U PULSE",
                model: "U Pulse"
            },
            {
                regex: "(?:WIKO-)?U FEEL LITE",
                model: "U Feel Lite"
            },
            {
                regex: "(?:WIKO-)?U FEEL PRIME",
                model: "U Feel Prime"
            },
            {
                regex: "(?:WIKO-)?U FEEL",
                model: "U Feel"
            },
            {
                regex: "(?:WIKO-)?View2 Go",
                model: "View 2 Go"
            },
            {
                regex: "(?:WIKO-)?View XL",
                model: "View XL"
            },
            {
                regex: "(?:WIKO-)?View Prime",
                model: "View Prime"
            },
            {
                regex: "WC300",
                model: "View Lite"
            },
            {
                regex: "W_C800",
                model: "View 2"
            },
            {
                regex: "W_P200",
                model: "View Max"
            },
            {
                regex: "W-V800-(TVM|EEA|OPE)",
                model: "View 3 Lite"
            },
            {
                regex: "W-K420-EEA",
                model: "Y50"
            },
            {
                regex: "W-K510-(TVM|EEA|OPE|SUN)",
                model: "Y60"
            },
            {
                regex: "W-V720-(EEA|OPE)",
                model: "Y80"
            },
            {
                regex: "W-P311-(EEA|OPE)",
                model: "View 3"
            },
            {
                regex: "W-P611-EEA",
                model: "View 3 Pro"
            },
            {
                regex: "Wiko ([^/;]+) Build",
                model: "$1"
            },
            {
                regex: "Wiko ([^/; ]+)",
                model: "$1"
            }
        ]
    }, Wu = {
        regex: "Wieppo (S6 Lite|S[658])[;/) ]",
        device: "smartphone",
        model: "$1"
    }, Ku = {
        regex: "Wink_",
        device: "smartphone",
        models: [
            {
                regex: "Wink_City_(SE|S)",
                model: "City $1"
            }
        ]
    }, Yu = {
        regex: "weplus_3",
        device: "smartphone",
        models: [
            {
                regex: "weplus_3",
                model: "WePlus 3"
            }
        ]
    }, Qu = {
        regex: "(?:Wileyfox [^/]+)|Swift 2[;/) ]",
        device: "smartphone",
        models: [
            {
                regex: "Wileyfox Spark \\+",
                model: "Spark +"
            },
            {
                regex: "Wileyfox Spark X",
                model: "Spark X"
            },
            {
                regex: "Wileyfox (Spark|Swift)",
                model: "$1"
            },
            {
                regex: "Wileyfox ([^/)]+)(?: Build|\\))",
                model: "$1"
            },
            {
                regex: "Swift 2 (X|Plus)[;/) ]",
                model: "Swift 2 $1"
            },
            {
                regex: "Swift 2[;/) ]",
                model: "Swift 2"
            }
        ]
    }, Zu = {
        regex: "miSmart|miTab|WIAM \\#24|WOLDER",
        device: "smartphone",
        models: [
            {
                regex: "WIAM \\#24",
                model: "Wiam #24"
            },
            {
                regex: "WOLDER_WIAM_65",
                model: "Wiam #65"
            },
            {
                regex: "miSmart[ \\-_]?([^/]+) Build",
                model: "miSmart $1"
            },
            {
                regex: "miTab[ \\-_]?([^/]+) Build",
                device: "tablet",
                model: "miTab $1"
            }
        ]
    }, zu = {
        regex: "AT[ _-]AS([0-9A-Z]+)[);/ ]",
        device: "smartphone",
        model: "AT-AS$1"
    }, Ju = {
        regex: "Wonu ([a-z0-9]+)",
        device: "feature phone",
        model: "$1"
    }, qu = {
        regex: "SP5026i-Scorpio",
        device: "smartphone",
        models: [
            {
                regex: "SP5026i-Scorpio",
                model: "Scorpio"
            }
        ]
    }, ju = {
        regex: "Woxter[ _]([^/;]+) Build",
        device: "tablet",
        model: "$1"
    }, eS = {
        regex: "Xiaomi(?!/(?:Miui|Mint[ ])Browser)|Mi9 Pro 5G|(?:MI [a-z0-9]+|Mi-4c|MI-One[ _]?[a-z0-9]+|MIX(?: 2S?)?)[);/ ]|HM (?:[^/;]+) (?:Build|MIUI)|(?:2014501|2014011|201481[12378]|201302[23]|2013061) Build|Redmi|MI_NOTE_Pro|POCOPHONE|(?:SHARK )?(KLE|MBU)-A0|SKR-[AH]0|SKW-[AH]0|POCO F1|DLT-[AH]0|MIBOX[34]([_ ]PRO)?|MiTV4[CSX]?|MiTV-(MSSP1|AXSO0)|AWM-A0|MI CC 9 Meitu Edition",
        device: "smartphone",
        models: [
            {
                regex: "SKR-[AH]0",
                model: "Black Shark"
            },
            {
                regex: "AWM-A0",
                model: "Black Shark Helo"
            },
            {
                regex: "SKW-[AH]0",
                model: "Black Shark 2"
            },
            {
                regex: "DLT-[AH]0",
                model: "Black Shark 2 Pro"
            },
            {
                regex: "(?:SHARK )?KLE-A0",
                model: "Black Shark 3"
            },
            {
                regex: "(?:SHARK )?MBU-A0",
                model: "Black Shark 3 Pro"
            },
            {
                regex: "Xiaomi_2014501|2014501 Build",
                model: "Hongmi 4G"
            },
            {
                regex: "Xiaomi_2014011|2014011 Build",
                model: "Hongmi 1S"
            },
            {
                regex: "Xiaomi_201302[23]|201302[23] Build",
                model: "Hongmi"
            },
            {
                regex: "Xiaomi_2014818|2014818 Build",
                model: "Hongmi 2 3G"
            },
            {
                regex: "Xiaomi_2014817|2014817 Build",
                model: "Hongmi 2"
            },
            {
                regex: "Xiaomi_201481[123]|201481[123] Build",
                model: "Hongmi 2 4G"
            },
            {
                regex: "Mi 9 SE[);/ ]",
                model: "MI 9 SE"
            },
            {
                regex: "MI CC 9 Meitu Edition[);/ ]",
                model: "MI CC 9"
            },
            {
                regex: "Xiaomi_M2001J2E_TD-LTE[);/ ]",
                model: "MI 10"
            },
            {
                regex: "Mi9 Pro 5G[);/ ]",
                model: "MI 9 Pro 5G"
            },
            {
                regex: "MI 8 Lite[);/ ]",
                model: "MI 8 Lite"
            },
            {
                regex: "MI 5s Plus[);/ ]",
                model: "MI 5s Plus"
            },
            {
                regex: "Xiaomi_2013061|2013061 Build",
                model: "MI 3"
            },
            {
                regex: "Mi-4c[);/ ]",
                model: "MI 4C"
            },
            {
                regex: "MI MAX 3[);/ ]",
                model: "MI MAX 3"
            },
            {
                regex: "MI MAX 2[);/ ]",
                model: "MI MAX 2"
            },
            {
                regex: "Mi A2 Lite[);/ ]",
                model: "MI A2 Lite"
            },
            {
                regex: "MIX 3[);/ ]",
                model: "MI MIX 3"
            },
            {
                regex: "MIX 2S[);/ ]",
                model: "MI MIX 2S"
            },
            {
                regex: "MIX 2[);/ ]",
                model: "MI MIX 2"
            },
            {
                regex: "MIX[);/ ]",
                model: "MI MIX"
            },
            {
                regex: "POCOPHONE F1|POCO F1",
                model: "Pocophone F1"
            },
            {
                regex: "Redmi 5 Plus",
                model: "Redmi 5 Plus"
            },
            {
                regex: "HM 2A[);/ ]",
                model: "Redmi 2A"
            },
            {
                regex: "HM 1S[CW]?[);/ ]",
                model: "Redmi 1S"
            },
            {
                regex: "HM 1[);/ ]",
                model: "Redmi 1"
            },
            {
                regex: "MI PAD 4 PLUS[);/ ]",
                model: "Mi Pad 4 Plus",
                device: "tablet"
            },
            {
                regex: "MI PAD 4[);/ ]",
                model: "Mi Pad 4",
                device: "tablet"
            },
            {
                regex: "MI PAD 3[);/ ]",
                model: "Mi Pad 3",
                device: "tablet"
            },
            {
                regex: "MI PAD 2[);/ ]",
                model: "Mi Pad 2",
                device: "tablet"
            },
            {
                regex: "MI PAD[);/ ]",
                model: "Mi Pad",
                device: "tablet"
            },
            {
                regex: "MIBOX3[ _]Pro[);/ ]",
                model: "Mi Box 3 Pro",
                device: "tv"
            },
            {
                regex: "MIBOX([34])[);/ ]",
                model: "Mi Box $1",
                device: "tv"
            },
            {
                regex: " MiTV-MSSP1[);/ ]",
                model: "MiTV 4S",
                device: "tv"
            },
            {
                regex: " MiTV-AXSO0[);/ ]",
                model: "MiTV 4A",
                device: "tv"
            },
            {
                regex: "(MiTV)(4[CSX]|4)[);/ ]",
                model: "$1 $2",
                device: "tv"
            },
            {
                regex: "HM NOTE 1W (?:Build|MIUI)",
                device: "phablet",
                model: "Redmi Note"
            },
            {
                regex: "HM NOTE 1TD (?:Build|MIUI)",
                device: "phablet",
                model: "Hongmi Note 1TD"
            },
            {
                regex: "HM NOTE 1(?:LTE|S)(?:W|GLOBAL|TD)? (?:Build|MIUI)",
                device: "phablet",
                model: "Redmi Note 4G"
            },
            {
                regex: "Redmi Note 6 Pro",
                model: "Redmi Note 6 Pro",
                device: "phablet"
            },
            {
                regex: "Redmi Note 5 Pro",
                model: "Redmi Note 5 Pro",
                device: "phablet"
            },
            {
                regex: "Redmi Note 5A Prime",
                model: "Redmi Note 5A Prime",
                device: "phablet"
            },
            {
                regex: "Redmi[ _]Note[ _]([^;/) ]+)?",
                model: "Redmi Note $1",
                device: "phablet"
            },
            {
                regex: "Redmi[ _]([^;/) ]+)?",
                model: "Redmi $1"
            },
            {
                regex: "MI_NOTE_Pro",
                model: "MI Note Pro",
                device: "phablet"
            },
            {
                regex: "MI[ _]Note[ _]([^;/) ]+)?",
                model: "MI Note $1",
                device: "phablet"
            },
            {
                regex: "(MI(?:-One)?[ _](?:[^;/]*))Build",
                model: "$1"
            },
            {
                regex: "(MI [a-z0-9]+|MI-One[ _]?[a-z0-9]+)[);/ ]",
                model: "$1"
            },
            {
                regex: "HM Note ([^/;]+) (?:Build|MIUI)",
                device: "phablet",
                model: "Note"
            },
            {
                regex: "HM ([^/;]+) (?:Build|MIUI)",
                model: "HM $1"
            },
            {
                regex: "Xiaomi[ _]([^/;]+)(?: Build|$)",
                model: "$1"
            }
        ]
    }, rS = {
        regex: "XI-CE(?:655|U[48])",
        device: "smartphone",
        models: [
            {
                regex: "XI-CE(655|U[48])",
                model: "CE$1"
            }
        ]
    }, oS = {
        regex: "Xolo|(?:Q600|Q700s?|Q800|Q1000s|Q1000[ _]Opus|Q1010i|Q2000|Omega[ _]5.[05])[);/ ]|BLACK-1XM",
        device: "smartphone",
        models: [
            {
                regex: "BLACK-1XM",
                model: "Black 1X"
            },
            {
                regex: "(Q600 Club|Q600|Q700s?|Q800|Q1000s Plus|Q1000s|Q1000[ _]Opus|Q1010i|Q2000|Omega[ _]5.[05])[);/ ]",
                model: "$1"
            },
            {
                regex: "Xolo[ _]?([^;/]+) Build",
                model: "$1"
            },
            {
                regex: "Xolo[ _]?([a-z0-9_-]+)",
                model: "$1"
            }
        ]
    }, lS = {
        regex: "Xenta[ \\-]Tab|Luna TAB|TAB09-410|TAB10-410|TAB07-485|TAB0[78]-200|TAB08-201-3G|TAB9-200|TAB09-211|TAB10-2[01]1|TAB13-201",
        device: "tablet",
        models: [
            {
                regex: "Luna TAB07-920N",
                model: "Luna 7"
            },
            {
                regex: "Luna TAB07-10[01]",
                model: "Luna 7c"
            },
            {
                regex: "Luna TAB274",
                model: "Luna 7c"
            },
            {
                regex: "Luna TAB474",
                model: "Luna 10"
            },
            {
                regex: "Luna TAB10-150",
                model: "Luna 10c"
            },
            {
                regex: "TAB09-410",
                model: "Noble 9.7"
            },
            {
                regex: "TAB10-410",
                model: "Noble 10.1"
            },
            {
                regex: "TAB07-485",
                model: "Noble Mini"
            },
            {
                regex: "Xenta-TAB07-21[01]",
                model: "Xenta 7c"
            },
            {
                regex: "TAB07-200",
                model: "Xenta 7ic"
            },
            {
                regex: "TAB08-200",
                model: "Xenta 8ic"
            },
            {
                regex: "TAB08-201-3G",
                model: "Xenta 8c"
            },
            {
                regex: "TAB9-200",
                model: "Xenta 9.7ic"
            },
            {
                regex: "TAB09-211",
                model: "Xenta 9.7ic+"
            },
            {
                regex: "TAB10-2[01]1",
                model: "Xenta 10ic"
            },
            {
                regex: "TAB13-201",
                model: "Xenta 13c"
            }
        ]
    }, dS = {
        regex: "M631Y",
        device: "smartphone",
        models: [
            {
                regex: "M631Y",
                model: "Altitude"
            }
        ]
    }, aS = {
        regex: "Yezz|ANDY[ _]|4E4|A5EI",
        device: "smartphone",
        models: [
            {
                regex: "ANDY_35E2I",
                model: "Andy 3.5E2I"
            },
            {
                regex: "ANDY_35EI2",
                model: "Andy 3.5EI2"
            },
            {
                regex: "Andy 3.5EI",
                model: "Andy 3.5EI"
            },
            {
                regex: "ANDY_45EL",
                model: "Andy 4.5EL"
            },
            {
                regex: "Andy 4.7T",
                model: "Andy 4.7T"
            },
            {
                regex: "ANDY_4E2I",
                model: "Andy 4E2I"
            },
            {
                regex: "4E4",
                model: "Andy 4E4"
            },
            {
                regex: "ANDY_4EI2",
                model: "Andy 4EI2"
            },
            {
                regex: "Yezz-AC4EI",
                model: "Andy 4EI"
            },
            {
                regex: "ANDY_4EL2_LTE",
                model: "Andy 4EL2 LTE"
            },
            {
                regex: "Andy_55EI",
                model: "Andy 55EI"
            },
            {
                regex: "ANDY_5EI",
                model: "Andy 5EI"
            },
            {
                regex: "Andy 5EL2 LTE",
                model: "Andy 5EL2 LTE"
            },
            {
                regex: "Andy_5ML_LTE",
                model: "Andy 5ML LTE"
            },
            {
                regex: "Andy_5T",
                model: "Andy 5T"
            },
            {
                regex: "A3.5EP",
                model: "Andy A3.5EP"
            },
            {
                regex: "A5EI",
                model: "Andy A5EI"
            },
            {
                regex: "ANDY_C5QL",
                model: "Andy C5QL"
            }
        ]
    }, tS = {
        regex: "YU5010A|AO5510",
        device: "smartphone",
        models: [
            {
                regex: "YU5010A",
                model: "Yuphoria"
            },
            {
                regex: "AO5510",
                model: "Yureka"
            }
        ]
    }, iS = {
        regex: "N101[ _]DUAL(?:[ _]CORE)?(?:[ _]?2|\\|\\|)?(?:[ _]V11)?[);/ ]",
        device: "tablet",
        model: "N101"
    }, nS = {
        regex: "Yusun|LA2-T",
        device: "smartphone",
        models: [
            {
                regex: "LA2-T",
                model: "LA2-T"
            },
            {
                regex: "Yusun ([^;/]+) Build",
                model: "$1"
            },
            {
                regex: "Yusun ([a-z0-9_\\-\\+]+)",
                model: "$1"
            }
        ]
    }, mS = {
        regex: "YTONE[ _\\-]",
        device: "smartphone",
        models: [
            {
                regex: "YTONE[ _\\-]?([^/;]+) Build",
                model: "$1"
            },
            {
                regex: "YTONE[ _\\-]?([^);/ ]+)",
                model: "$1"
            }
        ]
    }, sS = {
        regex: "(ZM(?:CK|EM|TFTV|TN)[a-z0-9]+)|ZA409",
        device: "feature phone",
        models: [
            {
                regex: "ZA409",
                device: "smartphone",
                model: "Muzic"
            },
            {
                regex: "(ZM(?:CK|EM|TFTV|TN)[a-z0-9]+)",
                model: "$1"
            }
        ]
    }, gS = {
        regex: "ZYQ-Q88|(Q(?:2602|262[436]|638|2688|272[89]|3022|3623|TAB Tab4|328 m9|328|668)|J77|Q[._](?:Up|Boss P99|Dee R09|Good M9|Hi|Hot|Me|Mate R99|Next|TOP-X8|You))[); ]",
        device: "smartphone",
        models: [
            {
                regex: "Q638",
                model: "I7"
            },
            {
                regex: "Q2624",
                model: "Cheer 3G"
            },
            {
                regex: "Q2602",
                model: "TV Next"
            },
            {
                regex: "Q2728",
                model: "Zone 3G"
            },
            {
                regex: "Q2729",
                model: "Q2729"
            },
            {
                regex: "Q2688",
                model: "Q2688"
            },
            {
                regex: "Q2623",
                model: "Win 3G"
            },
            {
                regex: "Q2626",
                model: "Care 3G"
            },
            {
                regex: "Q3623",
                model: "Braw 3G"
            },
            {
                regex: "Q3022",
                model: "Q3022"
            },
            {
                regex: "Q328 m9",
                model: "Q328 M9"
            },
            {
                regex: "Q328",
                model: "Speed 3G"
            },
            {
                regex: "Q668",
                model: "TV I4"
            },
            {
                regex: "J77",
                model: "Q.Dee"
            },
            {
                regex: "Q\\.Up C5",
                model: "Q.Up C5"
            },
            {
                regex: "Q\\.Up",
                model: "Q.Up"
            },
            {
                regex: "Q\\.Boss P99",
                model: "Q.Boss P99"
            },
            {
                regex: "Q[._]Dee R09",
                model: "Q.Dee R09"
            },
            {
                regex: "Q\\.Good M9",
                model: "Q.Good M9"
            },
            {
                regex: "Q[._]Hi S1",
                model: "Q.Hi S1"
            },
            {
                regex: "Q[._]Hi",
                model: "Q.Hi"
            },
            {
                regex: "Q[._]Hot P7 3G",
                model: "Q.Hot P7 3G"
            },
            {
                regex: "Q[._]Hot",
                model: "Q.Hot"
            },
            {
                regex: "Q[._]Me Phone7 3G",
                model: "Q.Me Phone 7 3G"
            },
            {
                regex: "Q[._]Me Plus7",
                model: "Q.Me Plus 7"
            },
            {
                regex: "Q[._]Me",
                model: "Q.Me"
            },
            {
                regex: "Q[._]Mate R99",
                model: "Q.Mate R99"
            },
            {
                regex: "Q[._]Next B7",
                model: "Q.Next B7"
            },
            {
                regex: "Q[._]Next J2",
                model: "Q.Next J2"
            },
            {
                regex: "Q[._]TOP-X8",
                model: "Q.Top X8"
            },
            {
                regex: "Q[._]You",
                model: "Q.You"
            },
            {
                regex: "QTAB Tab4",
                model: "QTab Tab4",
                device: "tablet"
            },
            {
                regex: "ZYQ-Q88",
                model: "Q88",
                device: "tablet"
            }
        ]
    }, xS = {
        regex: "Toshiba|TSBNetTV/|portalmmm/[12].0 TS|T-01C|T-0[12]D|IS04|IS11T|AT1S0|AT300SE|AT(7-C|10-A|10[PL]E-A|100|200|270|300|330|374|400|470|500|503|570|703|830)",
        device: "smartphone",
        models: [
            {
                regex: "T-01C",
                model: "Regza T-01C"
            },
            {
                regex: "T-01D",
                model: "Regza T-01D"
            },
            {
                regex: "T-02D",
                model: "Regza T-02D"
            },
            {
                regex: "IS04",
                model: "Regza IS04"
            },
            {
                regex: "IS11T",
                model: "Regza IS11T"
            },
            {
                regex: "AT7-C",
                model: "Excite",
                device: "tablet"
            },
            {
                regex: "AT1S0",
                model: "Regza AT1S0",
                device: "tablet"
            },
            {
                regex: "AT300SE",
                model: "Regza AT300SE",
                device: "tablet"
            },
            {
                regex: "AT500a",
                model: "Regza AT500a",
                device: "tablet"
            },
            {
                regex: "AT(100|200|270|300|330|374|400|470|500|503|570|703|830)",
                model: "Regza AT$1",
                device: "tablet"
            },
            {
                regex: "AT10([PL])E-A",
                model: "Excite AT10$1-A",
                device: "tablet"
            },
            {
                regex: "AT10-A",
                model: "Excite AT10-A",
                device: "tablet"
            },
            {
                regex: "TSBNetTV/",
                device: "tv",
                model: ""
            },
            {
                regex: "Toshiba[ /_\\-]?([a-z0-9_ \\-]+) Build",
                model: "$1"
            },
            {
                regex: "Toshiba[ /_\\-]?([a-z0-9_\\-]+)",
                model: "$1"
            },
            {
                regex: "portalmmm/[12].0 (TS[a-z0-9 ]+)",
                model: "$1"
            }
        ]
    }, cS = {
        regex: "VIVAX|(Fly5[_ ]Lite)[;)/ ]",
        device: "smartphone",
        models: [
            {
                regex: "Fly5[_ ]Lite",
                model: "Fly 5 Lite"
            },
            {
                regex: "VIVAX[ _]Fly3",
                model: "Fly 3"
            },
            {
                regex: "VIVAX (Point X551)",
                model: "$1"
            },
            {
                regex: "SMART Point X5010",
                model: "Smart Point X5010"
            }
        ]
    }, uS = {
        regex: "Fly(?!Flow|touch)|FS50[1-9]|FS51[0-8]|FS52[0-9]|FS530|FS55[134]|FS40[1-9]|FS45[1-9]|4FS06|MERIDIAN-|(?:IQ[0-9]{3,})[ _]?(?:Quad|Firebird|Quattro|Turbo|Magic)?(?: Build|[;/\\)])",
        device: "smartphone",
        models: [
            {
                regex: "(?:Fly_)?IQ310(?: Build|[;/\\)])",
                model: "Panorama",
                device: "tablet"
            },
            {
                regex: "(?:Fly_)?IQ236(?: Build|[;/\\)])",
                model: "Victory"
            },
            {
                regex: "FS506",
                model: "Cirrus 3"
            },
            {
                regex: "FS403",
                model: "Cumulus 1"
            },
            {
                regex: "FS508",
                model: "Cirrus 6"
            },
            {
                regex: "FS511",
                model: "Cirrus 7"
            },
            {
                regex: "FS509",
                model: "Nimbus 9"
            },
            {
                regex: "FS406",
                model: "Stratus 5"
            },
            {
                regex: "FS404",
                model: "Stratus 3"
            },
            {
                regex: "FS504",
                model: "Cirrus 2"
            },
            {
                regex: "FS407",
                model: "Stratus 6"
            },
            {
                regex: "FS401",
                model: "Stratus 1"
            },
            {
                regex: "FS402",
                model: "Stratus 2"
            },
            {
                regex: "FS501",
                model: "Nimbus 3"
            },
            {
                regex: "FS502",
                model: "Cirrus 1"
            },
            {
                regex: "FS507",
                model: "Cirrus 4"
            },
            {
                regex: "FS505",
                model: "Nimbus 7"
            },
            {
                regex: "FS551",
                model: "Nimbus 4"
            },
            {
                regex: "FS514",
                model: "Cirrus 8"
            },
            {
                regex: "FS553",
                model: "Cirrus 9"
            },
            {
                regex: "FS554",
                model: "Power Plus FHD"
            },
            {
                regex: "FS517",
                model: "Cirrus 11"
            },
            {
                regex: "FS516",
                model: "Cirrus 12"
            },
            {
                regex: "FS518",
                model: "Cirrus 13"
            },
            {
                regex: "FS520",
                model: "Selfie 1"
            },
            {
                regex: "FS521",
                model: "Power Plus 1"
            },
            {
                regex: "FS522",
                model: "Cirrus 14"
            },
            {
                regex: "FS523",
                model: "Cirrus 16"
            },
            {
                regex: "FS524",
                model: "Knockout"
            },
            {
                regex: "FS526",
                model: "Power Plus 2"
            },
            {
                regex: "FS527",
                model: "Nimbus 17"
            },
            {
                regex: "FS528",
                model: "Memory Plus"
            },
            {
                regex: "FS529",
                model: "Сhamp"
            },
            {
                regex: "FS530",
                model: "Power Plus XXL"
            },
            {
                regex: "FS454",
                model: "Nimbus 8"
            },
            {
                regex: "FS452",
                model: "Nimbus 2"
            },
            {
                regex: "FS512",
                model: "Nimbus 10"
            },
            {
                regex: "FS510",
                model: "Nimbus 12"
            },
            {
                regex: "FS451",
                model: "Nimbus 1"
            },
            {
                regex: "FS405",
                model: "Stratus 4"
            },
            {
                regex: "FS408",
                model: "Stratus 8"
            },
            {
                regex: "FS409",
                model: "Stratus 9"
            },
            {
                regex: "FS455",
                model: "Nimbus 11"
            },
            {
                regex: "FS456",
                model: "Nimbus 14"
            },
            {
                regex: "FS457",
                model: "Nimbus 15"
            },
            {
                regex: "FS459",
                model: "Nimbus 16"
            },
            {
                regex: "FS458",
                model: "Stratus 7"
            },
            {
                regex: "(?:Fly_)?IQ237(?: Build|[;/\\)])",
                model: "Dynamic"
            },
            {
                regex: "(?:Fly_)?IQ238(?: Build|[;/\\)])",
                model: "Jazz"
            },
            {
                regex: "(?:Fly_)?IQ240(?: Build|[;/\\)])",
                model: "Whizz"
            },
            {
                regex: "(?:Fly_)?IQ255(?: Build|[;/\\)])",
                model: "Pride"
            },
            {
                regex: "(?:Fly_)?IQ270(?: Firebird)?(?: Build|[;/\\)])",
                model: "Firebird"
            },
            {
                regex: "(?:Fly_)?IQ275(?: Build|[;/\\)])",
                model: "Marathon"
            },
            {
                regex: "(?:Fly_)?IQ285(?: Turbo)?(?: Build|[;/\\)])",
                model: "Turbo"
            },
            {
                regex: "(?:Fly_)?IQ430(?: Build|[;/\\)])",
                model: "Evoke"
            },
            {
                regex: "(?:Fly_)?IQ431(?: Build|[;/\\)])",
                model: "Glory"
            },
            {
                regex: "(?:Fly_)?IQ432(?: Build|[;/\\)])",
                model: "Era Nano 1"
            },
            {
                regex: "(?:Fly_)?IQ434(?: Build|[;/\\)])",
                model: "Era Nano 5"
            },
            {
                regex: "(?:Fly_)?IQ436(?: Build|[;/\\)])",
                model: "Era Nano 3"
            },
            {
                regex: "(?:Fly_)?IQ440(?: Build|[;/\\)])",
                model: "Energy"
            },
            {
                regex: "(?:Fly_)?IQ4401(?: Build|[;/\\)])",
                model: "Era Energy 2"
            },
            {
                regex: "(?:Fly_)?IQ441(?: Build|[;/\\)])",
                model: "Radiance"
            },
            {
                regex: "(?:Fly_)?IQ442(?: Build|[;/\\)])",
                model: "Miracle"
            },
            {
                regex: "(?:Fly_)?IQ442 Quad(?: Build|[;/\\)])",
                model: "Miracle 2"
            },
            {
                regex: "(?:Fly_)?IQ443(?: Build|[;/\\)])",
                model: "Trend"
            },
            {
                regex: "(?:Fly_)?IQ444(?: Quattro)?(?: Build|[;/\\)])",
                model: "Diamond 2"
            },
            {
                regex: "(?:Fly_)?IQ445(?: Build|[;/\\)])",
                model: "Genius"
            },
            {
                regex: "(?:Fly_)?IQ446(?: Magic)?(?: Build|[;/\\)])",
                model: "Magic"
            },
            {
                regex: "(?:Fly_)?IQ447(?: Build|[;/\\)])",
                model: "Era Life 1"
            },
            {
                regex: "(?:Fly_)?IQ448(?: Build|[;/\\)])",
                model: "Chic"
            },
            {
                regex: "(?:Fly_)?IQ449(?: Build|[;/\\)])",
                model: "Pronto"
            },
            {
                regex: "(?:Fly_)?IQ450(?: Build|[;/\\)])",
                model: "Horizon"
            },
            {
                regex: "(?:Fly_)?IQ450[ _]Quattro(?: Build|[;/\\)])",
                model: "Horizon 2"
            },
            {
                regex: "(?:Fly_)?IQ451(?: Build|[;/\\)])",
                model: "Vista"
            },
            {
                regex: "(?:Fly_)?IQ452 Quad(?: Build|[;/\\)])",
                model: "Ego Vision 1"
            },
            {
                regex: "(?:Fly_)?IQ454(?: Build|[;/\\)])",
                model: "Evo Tech 1"
            },
            {
                regex: "(?:Fly_)?IQ456(?: Build|[;/\\)])",
                model: "Era Life 2"
            },
            {
                regex: "(?:Fly_)?IQ4403(?: Build|[;/\\)])",
                model: "Energy 3"
            },
            {
                regex: "(?:Fly_)?IQ4404(?: Build|[;/\\)])",
                model: "Spark"
            },
            {
                regex: "(?:Fly_)?IQ4406(?: Build|[;/\\)])",
                model: "Era Nano 6"
            },
            {
                regex: "(?:Fly_)?IQ4410 Quad(?: Build|[;/\\)])",
                model: "Phoenix"
            },
            {
                regex: "(?:Fly_)?IQ4411(?: Build|[;/\\)])",
                model: "Energy 2"
            },
            {
                regex: "(?:Fly_)?IQ4412 Quad(?: Build|[;/\\)])",
                model: "Coral"
            },
            {
                regex: "(?:Fly_)?IQ4413[ _]Quad(?: Build|[;/\\)])",
                model: "Evo Chic 3"
            },
            {
                regex: "(?:Fly_)?IQ4414 Quad(?: Build|[;/\\)])",
                model: "Evo Tech 3"
            },
            {
                regex: "(?:Fly_)?IQ4415 Quad(?: Build|[;/\\)])",
                model: "Era Style 3"
            },
            {
                regex: "(?:Fly_)?IQ4490(?: Build|[;/\\)])",
                model: "Era Nano 4"
            },
            {
                regex: "(?:Fly_)?IQ4504 Quad(?: Build|[;/\\)])",
                model: "Evo Energy 5"
            },
            {
                regex: "(?:Fly_)?IQ([0-9]+) ?(?:Quad|Firebird|Quattro)? Build",
                model: "IQ$1"
            },
            {
                regex: "Fly[ _\\-]?([a-z0-9_]+)/",
                model: "$1",
                device: "feature phone"
            },
            {
                regex: "Flylife[ _\\-]?([^/;]+) Build",
                model: "Flylife $1",
                device: "tablet"
            },
            {
                regex: "Fly[ _\\-]?([a-z0-9]+)",
                model: "$1"
            },
            {
                regex: "MERIDIAN-([a-z0-9]+)",
                model: "$1"
            }
        ]
    }, SS = {
        regex: "FinePower[_ ]?([AB][1-9]|[CD][1-9])[;)/ ]",
        device: "smartphone",
        models: [
            {
                regex: "FinePower[_ ]?([AB][1-9])[;)/ ]",
                model: "$1",
                device: "tablet"
            },
            {
                regex: "FinePower[_ ]?([CD][1-9])[;)/ ]",
                model: "$1"
            }
        ]
    }, AS = {
        regex: "(FTJ152[ABCD]|FT141B|FT142D_LTEXM|FT142A?|FTJ161[AB]|FTJ1[56]2E|FTJ162D|FTE161[GE])[;)/ ]",
        device: "smartphone",
        models: [
            {
                regex: "FTJ152C",
                model: "Samurai Miyabi"
            },
            {
                regex: "FTJ161A",
                model: "Musashi"
            },
            {
                regex: "FTE161E",
                model: "Ice 2"
            },
            {
                regex: "FTE161G",
                model: "Ice 2 Plus"
            },
            {
                regex: "FTJ162E",
                model: "Raijin"
            },
            {
                regex: "FT141B",
                model: "Nico"
            },
            {
                regex: "FT142D_LTEXM",
                model: "XM"
            },
            {
                regex: "FT142A?",
                model: "Priori 2"
            },
            {
                regex: "FTJ152A",
                model: "Priori 3"
            },
            {
                regex: "FTJ162D",
                model: "Priori 4"
            },
            {
                regex: "FTJ152B",
                model: "Priori 3S LTE"
            },
            {
                regex: "FTJ152D",
                model: "Samurai Kiwami"
            },
            {
                regex: "FTJ161B",
                model: "Samurai Rei"
            },
            {
                regex: "FTJ152E",
                model: "Katana 1"
            }
        ]
    }, pS = {
        regex: "ZEEMI[ _-]",
        device: "smartphone",
        models: [
            {
                regex: "ZEEMI[ _-]([^/;]+) Build",
                model: "$1"
            },
            {
                regex: "ZEEMI[ _-]([^/;)]+)[/;)]",
                model: "$1"
            }
        ]
    }, vS = {
        regex: "Z5007|Z551[679]|Z6001",
        device: "smartphone",
        models: [
            {
                regex: "Z5517",
                model: "Leopardo"
            },
            {
                regex: "Z6001",
                model: "Libelula"
            },
            {
                regex: "Z5007",
                model: "Oso"
            },
            {
                regex: "Z5519",
                model: "Pingûino"
            },
            {
                regex: "Z5516",
                model: "Zebra"
            }
        ]
    }, MS = {
        regex: "ZOPO|(?:ZOPO[_ ])?(Flash X3|ZP[0-9]{2,}[^/;]+)(?:\\)| Build)",
        device: "smartphone",
        models: [
            {
                regex: "(ZOPO_C2_MOD|ZP998)[);/ ]",
                model: "C2 II"
            },
            {
                regex: "(?:ZOPO_)?ZP980[+][);/ ]",
                model: "ZP980+"
            },
            {
                regex: "(?:ZOPO_)?ZP980[);/ ]",
                model: "Scorpio"
            },
            {
                regex: "ZP952[);/ ]",
                model: "Speed 7 Plus"
            },
            {
                regex: "ZP951[);/ ]",
                model: "Speed 7"
            },
            {
                regex: "ZP955[);/ ]",
                model: "Speed 8"
            },
            {
                regex: "ZP950[+h]?[);/ ]",
                model: "Leader Max"
            },
            {
                regex: "ZP(?:900H?|910)[);/ ]",
                model: "Leader"
            },
            {
                regex: "ZP(?:800H|810)[);/ ]",
                model: "Libero HD"
            },
            {
                regex: "ZP500[+]?[);/ ]",
                model: "Libero"
            },
            {
                regex: "ZP330[);/ ]",
                model: "Color C"
            },
            {
                regex: "ZP370[);/ ]",
                model: "Color S"
            },
            {
                regex: "ZP5(63|86)[);/ ]",
                model: "Color X"
            },
            {
                regex: "ZP567[);/ ]",
                model: "Color C5i"
            },
            {
                regex: "ZP300[S+]?[);/ ]",
                model: "Field"
            },
            {
                regex: "ZP200[+]?[);/ ]",
                model: "Shining"
            },
            {
                regex: "ZP100[);/ ]",
                model: "Pilot"
            },
            {
                regex: "ZP1790[);/ ]",
                model: "Flash X2"
            },
            {
                regex: "ZP781[);/ ]",
                model: "Flash G5 Plus"
            },
            {
                regex: "(Flash X3|ZP[0-9]{2,}[^/;]+) Build",
                model: "$1"
            }
        ]
    }, PS = {
        regex: "ZTE|AxonPhone|([a-z0-9]+)_USA_Cricket|(?:Blade (?:L110|L[2357]|L7A|S6|V[6789]|V8Q|V8 SE|V9 VITA|X7|A(310|460|465|475|520|530|602)|V580)|N9[15]8St|NX(?:403A|404H|406E|40[X2]|507J|503A|505J|506J|508J|510J|512J|511J|513J|521J|523J_V1|529J|531J|541J|5[48]9J|551J|563J|569[HJ]|573J|575J|59[157]J|60[1689]J|61[12679]J|62[79]J|659J|907J)|N951[0579]|N9180|N9101|N913[67]|N952[01]|N9560|N9810|N799D|[UV]9180|[UV]9815|Z(?:233V|331|667T|768G|792|81[25]|82[08]|83[12359]|85[125]|851M|(557|71[67]|798|836|861|916)BL|986DL|(232|718|828)TL|(233|353|558|717|799|837|862|899|917|963)VL|955A|95[678]|965|97[018]|98[1237]|986U|999)|Apex2|G (LTE|Lux)|Vec)[);/ ]|KIS II Max|Kis 3|K3DX-V5G|Z930L|Blade (A5 2019-T|A6 MAX|A0622)|Nubia Z9",
        device: "smartphone",
        models: [
            {
                regex: "N799D[);/ ]",
                model: "Blade Eg"
            },
            {
                regex: "K3DX-V5G[);/ ]",
                model: "V5G"
            },
            {
                regex: "N918St[);/ ]",
                model: "V5S"
            },
            {
                regex: "N958St[);/ ]",
                model: "V5 Max"
            },
            {
                regex: "N9101[);/ ]",
                model: "Imperial"
            },
            {
                regex: "N9120[);/ ]",
                model: "Avid"
            },
            {
                regex: "N9136[);/ ]",
                model: "Prestige 2"
            },
            {
                regex: "N9137[);/ ]",
                model: "Tempo X"
            },
            {
                regex: "N9180[);/ ]",
                model: "V5"
            },
            {
                regex: "N9510[);/ ]",
                model: "Warp 4G"
            },
            {
                regex: "N9517[);/ ]",
                model: "Blade Force"
            },
            {
                regex: "N9515[);/ ]",
                model: "Warp Sync"
            },
            {
                regex: "N9519[);/ ]",
                model: "Warp 7"
            },
            {
                regex: "N9520[);/ ]",
                model: "Boost Max"
            },
            {
                regex: "N9521[);/ ]",
                model: "Boost Max+"
            },
            {
                regex: "N9560[);/ ]",
                model: "Max XL"
            },
            {
                regex: "N9810[);/ ]",
                model: "Vital"
            },
            {
                regex: "NX40[X2][);/ ]",
                model: "Nubia Z5 mini"
            },
            {
                regex: "NX(403[AE]|406E|404H)[);/ ]",
                model: "Nubia Z5S Mini"
            },
            {
                regex: "NX503A[);/ ]",
                model: "Nubia Z5S"
            },
            {
                regex: "NX506J[);/ ]",
                model: "Nubia Z7"
            },
            {
                regex: "NX507J[);/ ]",
                model: "Nubia Z7 mini"
            },
            {
                regex: "NX505J[);/ ]",
                model: "Nubia Z7 max"
            },
            {
                regex: "NX508J[);/ ]",
                model: "Nubia Z9"
            },
            {
                regex: "(NX5[12]1J|Nubia Z9 mini)[);/ ]",
                model: "Nubia Z9 mini"
            },
            {
                regex: "(NX510J|Nubia Z9 Max)[);/ ]",
                model: "Nubia Z9 max"
            },
            {
                regex: "NX512J[);/ ]",
                model: "Nubia Z9 max dual"
            },
            {
                regex: "NX531J[);/ ]",
                model: "Nubia Z11"
            },
            {
                regex: "NX523J_V1",
                model: "Nubia Z11 Max"
            },
            {
                regex: "NX529J[);/ ]",
                model: "Nubia Z11 mini"
            },
            {
                regex: "NX549J[);/ ]",
                model: "Nubia Z11 mini S"
            },
            {
                regex: "NX606J[);/ ]",
                model: "Nubia Z18"
            },
            {
                regex: "NX616J[);/ ]",
                model: "Nubia Z18S"
            },
            {
                regex: "NX611J[);/ ]",
                model: "Nubia Z18 mini"
            },
            {
                regex: "NX551J[);/ ]",
                model: "Nubia M2"
            },
            {
                regex: "NX563J[);/ ]",
                model: "Nubia Z17"
            },
            {
                regex: "NX569[HJ][);/ ]",
                model: "Nubia Z17 Mini"
            },
            {
                regex: "NX589J[);/ ]",
                model: "Nubia Z17 Mini S"
            },
            {
                regex: "NX591J[);/ ]",
                model: "Nubia Z17 Lite"
            },
            {
                regex: "NX595J",
                model: "Nubia Z17S"
            },
            {
                regex: "NX612J[);/ ]",
                model: "Nubia V18"
            },
            {
                regex: "NX627J",
                model: "Nubia Z20"
            },
            {
                regex: "NX513J[);/ ]",
                model: "Nubia My Prague"
            },
            {
                regex: "NX601J[);/ ]",
                model: "Nubia X6"
            },
            {
                regex: "NX609J[);/ ]",
                model: "Nubia Red Magic"
            },
            {
                regex: "NX659J[);/ ]",
                model: "Nubia Red Magic 5G"
            },
            {
                regex: "NX619J[);/ ]",
                model: "Nubia Red Magic Mars"
            },
            {
                regex: "NX629J[);/ ]",
                model: "Nubia Red Magic 3"
            },
            {
                regex: "NX573J",
                model: "Nubia M2 Lite"
            },
            {
                regex: "NX907J[);/ ]",
                model: "Nubia M2 Play"
            },
            {
                regex: "NX541J",
                model: "Nubia N1"
            },
            {
                regex: "NX597J",
                model: "Nubia N1 Lite"
            },
            {
                regex: "NX575J",
                model: "Nubia N2"
            },
            {
                regex: "NX6(08|17)J[);/ ]",
                model: "Nubia N3"
            },
            {
                regex: "[UV]9180[);/ ]",
                model: "V5 Red Bull"
            },
            {
                regex: "[UV]9815[);/ ]",
                model: "Grand Memo LTE"
            },
            {
                regex: "V779M",
                model: "Joey Jump 2"
            },
            {
                regex: "V807",
                model: "Blade C"
            },
            {
                regex: "V809",
                model: "Blade C2"
            },
            {
                regex: "(?:ZTE_)?V829",
                model: "Blade G Pro"
            },
            {
                regex: "V882",
                model: "Lord"
            },
            {
                regex: "V967S",
                model: "Grand X2"
            },
            {
                regex: "V970M?|V987",
                model: "Grand X"
            },
            {
                regex: "V8000",
                model: "Nova 4"
            },
            {
                regex: "Z95[67]",
                model: "Grand X4"
            },
            {
                regex: "Z987",
                model: "Grand X Max+"
            },
            {
                regex: "(?:ZTE_)?Grand[ _]Era",
                model: "Grand Era"
            },
            {
                regex: "V788D",
                model: "Kis Plus"
            },
            {
                regex: "Z331[);/ ]",
                model: "Z331"
            },
            {
                regex: "Blade (A(0620|310|452|460|462|465|475|510|512|520|530|602|612|910)|L110|V0730|V0800|V580|V1000)[);/ ]",
                model: "Blade $1"
            },
            {
                regex: "Blade L2 Plus[);/ ]",
                model: "Blade L2 Plus"
            },
            {
                regex: "Blade L2[);/ ]",
                model: "Blade L2"
            },
            {
                regex: "Blade L3 Plus[);/ ]",
                model: "Blade L3 Plus"
            },
            {
                regex: "Blade L3 Apex[);/ ]",
                model: "Blade L3 Apex"
            },
            {
                regex: "Blade L3[);/ ]",
                model: "Blade L3"
            },
            {
                regex: "Blade L5 Plus[);/ ]",
                model: "Blade L5 Plus"
            },
            {
                regex: "Blade L5[);/ ]",
                model: "Blade L5"
            },
            {
                regex: "Blade L6[);/ ]",
                model: "Blade L6"
            },
            {
                regex: "Blade L7A[);/ ]",
                model: "Blade L7A"
            },
            {
                regex: "Blade L7[);/ ]",
                model: "Blade L7"
            },
            {
                regex: "Blade L8[);/ ]",
                model: "Blade L8"
            },
            {
                regex: "Blade A5 2019-T[);/ ]",
                model: "Blade A5 2019"
            },
            {
                regex: "BLADE A0622[);/ ]",
                model: "Blade A6"
            },
            {
                regex: "BLADE A6 MAX[);/ ]",
                model: "Blade A6 Max"
            },
            {
                regex: "Blade S6 Plus[);/ ]",
                model: "Blade S6 Plus"
            },
            {
                regex: "Blade S6[);/ ]",
                model: "Blade S6"
            },
            {
                regex: "T920[);/ ]",
                model: "Blade S7"
            },
            {
                regex: "Blade V6 MAX[);/ ]",
                model: "Blade V6 Max"
            },
            {
                regex: "Blade V6 Plus[);/ ]",
                model: "Blade V6 Plus"
            },
            {
                regex: "Blade V6[);/ ]",
                model: "Blade V6"
            },
            {
                regex: "Blade (?:V7 Lite|V0720)[);/ ]",
                model: "Blade V7 Lite"
            },
            {
                regex: "Blade V7[);/ ]",
                model: "Blade V7"
            },
            {
                regex: "Blade X7[);/ ]",
                model: "Blade X7"
            },
            {
                regex: "Blade V8Q[);/ ]",
                model: "Blade V8Q"
            },
            {
                regex: "Blade V8 SE[);/ ]",
                model: "Blade V8 SE"
            },
            {
                regex: "Blade V9 Vita[);/ ]",
                model: "Blade V9 Vita"
            },
            {
                regex: "Blade V9[);/ ]",
                model: "Blade V9"
            },
            {
                regex: "Blade V10 Vita[);/ ]",
                model: "Blade V10 Vita"
            },
            {
                regex: "BLADE V0820[);/ ]",
                model: "Blade V8 Lite"
            },
            {
                regex: "BLADE V0850[);/ ]",
                model: "Blade V8 Mini"
            },
            {
                regex: "(Apex2|G (LTE|Lux)|Vec)",
                model: "Blade $1"
            },
            {
                regex: "Z768G[);/ ]",
                model: "Midnight"
            },
            {
                regex: "Z820",
                model: "Obsidian"
            },
            {
                regex: "Z986U",
                model: "Blade Max 3"
            },
            {
                regex: "Z971",
                model: "Blade Spark"
            },
            {
                regex: "Z978",
                model: "Blade V8 Pro"
            },
            {
                regex: "Z839",
                model: "Blade Vantage"
            },
            {
                regex: "Z930L",
                model: "Unico LTE"
            },
            {
                regex: "Z965",
                model: "Blade X"
            },
            {
                regex: "Z981",
                model: "Blade Z Max Pro"
            },
            {
                regex: "Z982",
                model: "Blade Z Max"
            },
            {
                regex: "Z983",
                model: "Blade X Max"
            },
            {
                regex: "Z717[BV]L[);/ ]",
                model: "Citrine LTE"
            },
            {
                regex: "Z233VL",
                model: "Cymbal-C LTE"
            },
            {
                regex: "Z233V",
                model: "Cymbal LTE"
            },
            {
                regex: "Z232TL",
                model: "Cymbal-G LTE"
            },
            {
                regex: "Z353VL",
                model: "Cymbal-T LTE"
            },
            {
                regex: "Z718TL",
                model: "Jasper LTE"
            },
            {
                regex: "KIS II Max",
                model: "Kis II Max"
            },
            {
                regex: "Kis 3",
                model: "Kis 3"
            },
            {
                regex: "(?:Z798BL|Z799VL)[);/ ]",
                model: "Majesty Pro LTE"
            },
            {
                regex: "Z899VL",
                model: "Majesty Pro Plus LTE"
            },
            {
                regex: "Z828TL",
                model: "Midnight Pro LTE"
            },
            {
                regex: "Z792",
                model: "Fanfare"
            },
            {
                regex: "Z812",
                model: "Maven"
            },
            {
                regex: "Z815",
                model: "Fanfare 2"
            },
            {
                regex: "Z831",
                model: "Maven 2"
            },
            {
                regex: "Z832",
                model: "Sonata 3"
            },
            {
                regex: "Z835",
                model: "Maven 3"
            },
            {
                regex: "Z851[);/ ]",
                model: "Prelude Plus"
            },
            {
                regex: "Z851M",
                model: "Overture 3"
            },
            {
                regex: "Z852",
                model: "Fanfare 3"
            },
            {
                regex: "Z828",
                model: "Avid Plus"
            },
            {
                regex: "Z855",
                model: "Avid 4"
            },
            {
                regex: "Z833",
                model: "Avid TRIO"
            },
            {
                regex: "(?:Z836BL|Z837VL)[);/ ]",
                model: "ZFive 2 LTE"
            },
            {
                regex: "Z558VL",
                model: "ZFive C LTE"
            },
            {
                regex: "Z557BL",
                model: "ZFive G LTE"
            },
            {
                regex: "(?:Z861BL|Z862VL)[);/ ]",
                model: "ZFive L LTE"
            },
            {
                regex: "Z916BL",
                model: "ZMax Grand LTE"
            },
            {
                regex: "Z917VL",
                model: "ZMax Champ LTE"
            },
            {
                regex: "(?:Z958|Z955A)[);/ ]",
                model: "ZMax 2"
            },
            {
                regex: "Z963VL",
                model: "Max Duo LTE"
            },
            {
                regex: "Z970",
                model: "ZMax Z970"
            },
            {
                regex: "Z986DL",
                model: "MAX Blue LTE"
            },
            {
                regex: "Z992",
                model: "Avail 2"
            },
            {
                regex: "Z999",
                model: "Axon M"
            },
            {
                regex: "B2016",
                model: "Axon Mini"
            },
            {
                regex: "A2015",
                model: "Axon Tianji"
            },
            {
                regex: "A2017[GU]?",
                model: "Axon 7"
            },
            {
                regex: "A2019G Pro",
                model: "Axon Pro"
            },
            {
                regex: "B2017G",
                model: "Axon 7 Mini"
            },
            {
                regex: "A2020G? Pro[);/ ]",
                model: "Axon 10 Pro"
            },
            {
                regex: "Z667T",
                model: "Zinger"
            },
            {
                regex: "V?975|geek",
                model: "Geek"
            },
            {
                regex: "Z716BL",
                model: "Citrine LTE"
            },
            {
                regex: "X500",
                model: "Score"
            },
            {
                regex: "X501",
                model: "Groove"
            },
            {
                regex: "G-X991",
                model: "Rio"
            },
            {
                regex: "F-450",
                model: "Adamant"
            },
            {
                regex: "AxonPhone ([^;/]+) Build",
                model: "AxonPhone $1"
            },
            {
                regex: "([a-z0-9]+)_USA_Cricket",
                model: "$1"
            },
            {
                regex: "ZTE[\\- ](V98|V96A|V81|V70)[);/ ]",
                model: "$1",
                device: "tablet"
            },
            {
                regex: "ZTE[\\- ]([a-z0-9\\-_ ]+) Build",
                model: "$1"
            },
            {
                regex: "ZTE-(?:G |G-)?([a-z0-9 _]+)",
                model: "$1"
            },
            {
                regex: "ZTE[ _]([a-z0-9]+)",
                model: "$1"
            }
        ]
    }, TS = {
        regex: "Zuum[ _-]|COVET|MAGNO|ONIX S|STEDI|STELLAR Z",
        device: "smartphone",
        models: [
            {
                regex: "COVET",
                model: "Covet"
            },
            {
                regex: "MAGNO",
                model: "Magno"
            },
            {
                regex: "ONIX S",
                model: "Onix S"
            },
            {
                regex: "STEDI",
                model: "Stedi"
            },
            {
                regex: "STELLAR Z",
                model: "Stellar Z"
            },
            {
                regex: "Zuum[ _-]([^;/]+) Build",
                model: "$1"
            },
            {
                regex: "Zuum[ _-]?([^;/)]+)[);/ ]",
                model: "$1"
            }
        ]
    }, hS = {
        regex: "(Admire[_ ][^/;]+|Cinemax[^/;)]+)(?:Build|\\))",
        device: "smartphone",
        model: "$1"
    }, bS = {
        regex: "ZYNC|(Cloud Z5|Z1000|Z18|Z99 Dual Core|Z99[_ ][23]G|Z99|Z900[_ ]Plus|Z909|Z930[+]|Z930)",
        device: "tablet",
        models: [
            {
                regex: "(Z18|Z99 Dual Core|Z99[_ ][23]G|Z99|Z900[_ ]Plus|Z909|Z930[+]|Z930)",
                model: "$1"
            },
            {
                regex: "(Z1000[^/;]+)Build",
                model: "$1"
            },
            {
                regex: "Cloud (Z5)",
                model: "Cloud $1"
            },
            {
                regex: "ZYNC Cloud[ _]([^;]+)Build",
                model: "Cloud $1"
            },
            {
                regex: "ZYNC[ _]([^;]+)Build",
                model: "$1"
            }
        ]
    }, LS = {
        regex: "Lemhoov",
        device: "smartphone",
        models: [
            {
                regex: "Lemhoov[ _-]([^/;]+) Build",
                model: "$1"
            }
        ]
    }, _S = {
        regex: "MTC[ _](97[82]|970|982[OT]|982|1078)|(MTC_)?SMART[ _]?(Race|Sprint|Run|Surf2)[ _]4G|MTC975",
        device: "smartphone",
        models: [
            {
                regex: "MTC[ _](97[82]|970[H]?|982[OT]|982)",
                model: "$1"
            },
            {
                regex: "MTC(975)",
                model: "$1"
            },
            {
                regex: "MTC[ _](1078)",
                model: "$1",
                device: "tablet"
            },
            {
                regex: "SMART[ _]Race[ _]4G",
                model: "Smart Race 4G"
            },
            {
                regex: "(MTC_)?SMART[ _]Sprint[ _]4G",
                model: "Smart Sprint 4G"
            },
            {
                regex: "SMART[ _]?Run[ _]4G",
                model: "Smart Run 4G"
            },
            {
                regex: "SMART[ _]Surf2[ _]4G",
                model: "Smart Surf 2 4G"
            }
        ]
    }, GS = {
        regex: "MegaFon|MFLoginPh|MegLogPh|(MFLogin[34]T?|MS3B|SP-A5|SP-A20i)[)\\; ]",
        device: "smartphone",
        models: [
            {
                regex: "MFLoginPh|MegLogPh",
                model: "Login+"
            },
            {
                regex: "MFLogin4",
                model: "Login 4 LTE"
            },
            {
                regex: "MFLogin3T|MegaFon Login 3",
                model: "Login 3",
                device: "tablet"
            },
            {
                regex: "MS3B",
                model: "Optima"
            },
            {
                regex: "SP-A20i",
                model: "Mint"
            },
            {
                regex: "(SP-A5)",
                model: "$1"
            }
        ]
    }, BS = {
        regex: "INOI",
        device: "smartphone",
        models: [
            {
                regex: "INOI_([^;/]+)(?:Build|\\))",
                model: "$1"
            }
        ]
    }, NS = {
        regex: "Lion_Dual|V709X|Baccara|Eagle[ _]4G|Impress[ _]([^;/]+)(?:Build|\\))",
        device: "smartphone",
        models: [
            {
                regex: "(Lion_Dual|Baccara|Eagle[ _]4G)",
                model: "$1"
            },
            {
                regex: "(Impress[ _]([^;/]+))(?:Build|\\))",
                model: "$1"
            },
            {
                regex: "(V709X)",
                device: "tablet",
                model: "$1"
            }
        ]
    }, CS = {
        regex: "WebTV/(\\d+\\.\\d+)",
        device: "tv",
        model: "Web TV"
    }, ES = {
        regex: "Andromeda[ _]S(707|84[05]|8)[;/) ]",
        device: "tablet",
        model: "Andromeda S$1"
    }, OS = {
        regex: "TB-PO1 Build",
        device: "tv",
        models: [
            {
                regex: "(TB-PO1)",
                model: "$1"
            }
        ]
    }, wS = {
        regex: "TangoTab|Presto[ )]|Ultimax|Valumax|S72-B|SX2W",
        device: "tablet",
        models: [
            {
                regex: "TangoTab",
                model: "TangoTab"
            },
            {
                regex: "Ultimax",
                model: "Ultimax"
            },
            {
                regex: "Valumax",
                model: "Valumax"
            },
            {
                regex: "Presto",
                model: "Presto"
            },
            {
                regex: "S72-B",
                model: "S72-B"
            },
            {
                regex: "SX2W",
                model: "SX2W"
            }
        ]
    }, fS = {
        regex: "MYPAD7s",
        device: "tablet",
        model: "My Pad 7s"
    }, yS = {
        regex: "(LA2-(?:L|S[N]?)|HLA Note3)[);/ ]",
        device: "smartphone",
        models: [
            {
                regex: "HLA Note3[);/ ]",
                model: "Red Pepper Note 3"
            },
            {
                regex: "(LA2-(?:L|S[N]?))[);/ ]",
                model: "$1"
            }
        ]
    }, XS = {
        regex: "(RMD[-_](?:10(?:2[689]|5[89])|1121|75[01]|726|85[57]|870)|RMP-(?:450|50[56]|530|600))[);/ ]",
        device: "tablet",
        models: [
            {
                regex: "RMD[-_](10(?:2[689]|5[89])|1121|75[01]|726|85[57]|870)[);/ ]",
                model: "RMD-$1"
            },
            {
                regex: "RMP[-_](450|50[56]|530|600)[);/ ]",
                model: "RMP-$1",
                device: "smartphone"
            }
        ]
    }, $S = {
        regex: "(MXQ|MXQ-Pro)-NEXBOX|NEXBOX-([^) ]+)",
        device: "tv",
        models: [
            {
                regex: "MXQ-Pro-NEXBOX",
                model: "MXQ Pro"
            },
            {
                regex: "MXQ-NEXBOX",
                model: "MXQ"
            },
            {
                regex: "NEXBOX-([^) ]+)",
                model: "$1"
            }
        ]
    }, IS = {
        regex: "SMART[ _](MAX 4.0 PLUS|4G Speedy 5.0 Plus)",
        device: "smartphone",
        models: [
            {
                regex: "SMART MAX 4.0 PLUS",
                model: "Smart Max 4.0 Plus"
            },
            {
                regex: "SMART 4G Speedy 5.0 Plus",
                model: "Smart 4G Speedy 5.0 Plus"
            }
        ]
    }, FS = {
        regex: "(YNDX-?000SB)[;)\\ ]",
        device: "smartphone",
        model: "YNDX-000SB"
    }, DS = {
        regex: "FORME[ _-]",
        device: "smartphone",
        models: [
            {
                regex: "FORME[ _-]F520[;)\\ ]",
                model: "Forever"
            },
            {
                regex: "FORME[ _-](A37|R7S)[;)\\ ]",
                model: "$1"
            }
        ]
    }, RS = {
        regex: "(PNT-704[025])[;)/ ]",
        device: "tablet",
        model: "$1"
    }, VS = {
        regex: "(BDF[- ](?:819|P10|K107H|KT107|MT6753|X20)|K960N_MT(?:6580|6753)(?:_32_N)?)[;)/ ]",
        device: "tablet",
        models: [
            {
                regex: "BDF[- ](819|P10|K107H|KT107|MT6753|X20)[;)/ ]",
                model: "$1"
            },
            {
                regex: "K960N_MT(6580|6753)(_32_N)?[;)/ ]",
                model: "BK960N MT$1"
            }
        ]
    }, US = {
        regex: "HIGHSCREEN|(Power Ice Max|Razar_Pro|Power Rage Evo|Zera[ _][UFS]|PowerFivePro|PowerFour|BOOST II|FestXL)[;)/ ]",
        device: "smartphone",
        models: [
            {
                regex: "(Power Ice Max|Power Rage Evo|Zera[ _][UFS])[;)/ ]",
                model: "$1"
            },
            {
                regex: "PowerFivePro[;)/ ]",
                model: "Power Five Pro"
            },
            {
                regex: "FestXL[;)/ ]",
                model: "Fest XL"
            },
            {
                regex: "PowerFour[;)/ ]",
                model: "Power Four"
            },
            {
                regex: "Razar_Pro[;)/ ]",
                model: "Razar Pro"
            },
            {
                regex: "HIGHSCREEN Easy-Power-Pro[;)/ ]",
                model: "Easy Power Pro"
            },
            {
                regex: "HIGHSCREEN Easy F PRO[;)/ ]",
                model: "Easy F Pro"
            },
            {
                regex: "BOOST II[;)/ ]",
                model: "Boost 2"
            }
        ]
    }, HS = {
        regex: "CVTE[_ ](MSD338_(:?1G|512M))[;)/ ]",
        device: "tv",
        model: "$1"
    }, kS = {
        regex: "(GU1011C|GU8012C|GU7013C|GU730C|GU-6012B)[;)/ ]",
        device: "tablet",
        models: [
            {
                regex: "GU8012C[;)/ ]",
                model: "X8"
            },
            {
                regex: "GU-6012B[;)/ ]",
                model: "GU6012B"
            },
            {
                regex: "(GU1011C|GU7013C|GU730C)[;)/ ]",
                model: "$1"
            }
        ]
    }, WS = {
        regex: "ATOM-(108AM)[;)/ ]",
        device: "tv",
        model: "$1"
    }, KS = {
        regex: "QUMO[ _]?|(Vega[ _]?78[23])[;)/ ]",
        device: "tablet",
        models: [
            {
                regex: "(?:QUMO[ _]?)?Vega[ _]?(78[23]|8002)[;)/ ]",
                model: "Vega $1"
            },
            {
                regex: "Yooda[;)/ ]",
                model: "Yooda"
            },
            {
                regex: "(?:QUMO)?(Sirius 101-4G 8GB Black|Altair 701 8GB Black|Altair 71 4GB Black|Altair 700[24]|Altair 706)[;)/ ]",
                model: "$1"
            },
            {
                regex: "QUMO[ _]Quest[ _]?(35[34]|40[26]|45[28]|476|507|570|600)[;)/ ]",
                device: "smartphone",
                model: "Quest $1"
            }
        ]
    }, YS = {
        regex: "VisionBook[ _]",
        device: "tablet",
        models: [
            {
                regex: "(VisionBook[ _](?:7Qi 3G|7Q Plus|8Q LTE|8Q_Plus|10Qi_3G))[;)/ ]",
                model: "$1"
            },
            {
                regex: "(VisionBook[ _](?:P50 LTE|P55 LTE(?: Pro)?))[;)/ ]",
                device: "smartphone",
                model: "$1"
            }
        ]
    }, QS = {
        regex: "(ZUG 3|ZUG 5S(?: Q)?)[;)/ ]",
        device: "smartphone",
        model: "$1"
    }, ZS = {
        regex: "(Titan|Jelly-Pro)[;)/ ]",
        device: "smartphone",
        models: [
            {
                regex: "(Jelly)-(Pro)[;)/ ]",
                model: "$1 $2"
            },
            {
                regex: "(Titan)[;)/ ]",
                model: "$1"
            }
        ]
    }, zS = {
        regex: "CW-(Hi8-super|Hi12|V99|V17HD3G|VX8-3G|V88-QUAD|V9-DUAL|V88S|Vi[78]|[HV]i10 (pro|plus))[;)/ ]",
        device: "tablet",
        models: [
            {
                regex: "(CW-Hi8-super)[;)/ ]",
                model: "Hi8"
            },
            {
                regex: "CW-(Vi10) plus[;)/ ]",
                model: "$1 Plus"
            },
            {
                regex: "CW-(V88)-QUAD[;)/ ]",
                model: "$1 Quad"
            },
            {
                regex: "CW-(V9)-DUAL[;)/ ]",
                model: "$1 Dual"
            },
            {
                regex: "CW-(V17HD|VX8)-?(3G)[;)/ ]",
                model: "$1 $2"
            },
            {
                regex: "CW-(Hi10) pro[;)/ ]",
                model: "$1 Pro"
            },
            {
                regex: "CW-(Vi[78]|Hi12|V99|V88S)[;)/ ]",
                model: "$1"
            }
        ]
    }, JS = {
        regex: "BEZKAM (BK-RAM2)[;)/ ]",
        device: "smartphone",
        model: "$1"
    }, qS = {
        regex: "(KATV-01) PRO[;)/ ]",
        device: "tv",
        model: "$1 Pro"
    }, jS = {
        regex: "GHONG(V10)[;)/ ]",
        device: "smartphone",
        model: "$1"
    }, eA = {
        regex: "TelePAD(795|731|1032|10A3|7A3)|Era 2X[;)/ ]",
        device: "tablet",
        models: [
            {
                regex: "TelePAD(7|10)A3 4G[;)/ ]",
                model: "TelePad $1 A3 4G"
            },
            {
                regex: "TelePAD(795|731|1032)[;)/ ]",
                model: "TelePad $1"
            },
            {
                regex: "(Era 2X)[;)/ ]",
                model: "$1",
                device: "smartphone"
            }
        ]
    }, rA = {
        regex: "VMP-(021-82|041-162|011-81)[);/ ]",
        device: "tv",
        models: [
            {
                regex: "VMP-021-82",
                model: "021"
            },
            {
                regex: "VMP-041-162",
                model: "041"
            },
            {
                regex: "VMP-011-81",
                model: "011"
            }
        ]
    }, oA = {
        regex: "Nuvo[_ ](NS35|Blue ND40|Green[_ ]ND[_ ]45)[);/ ]",
        device: "smartphone",
        models: [
            {
                regex: "Nuvo[_ ](NS35)[);/ ]",
                model: "$1"
            },
            {
                regex: "Blue (ND40)[);/ ]",
                model: "$1"
            },
            {
                regex: "Green[_ ]ND[_ ]45[);/ ]",
                model: "ND45"
            }
        ]
    }, lA = {
        regex: "T95ZPLUS[);/ ]",
        device: "tv",
        model: "T95Z Plus"
    }, dA = {
        regex: "T1001XS[);/ ]",
        device: "tablet",
        model: "M5XS"
    }, aA = {
        regex: "UGOOS-AM6[);/ ]",
        device: "tv",
        model: "AM6"
    }, tA = {
        regex: "YXTEL_([HU]1|U3)[);/ ]",
        device: "smartphone",
        model: "$1"
    }, iA = {
        regex: "(H10882M-TN)[);/ ]",
        device: "tablet",
        model: "$1"
    }, nA = {
        regex: "(YD20[16]|YOTA 3[+])[);/ ]",
        device: "smartphone",
        models: [
            {
                regex: "YD20[16][);/ ]",
                model: "Phone 2"
            },
            {
                regex: "YOTA 3[+][);/ ]",
                model: "Phone 3 Plus"
            }
        ]
    }, mA = {
        regex: "(MYSTERY|MID-(?:123G|72[12]|7[01348]3G|753G|833G))[);/ ]",
        device: "tablet",
        models: [
            {
                regex: "MID-(123G|72[12]|7[01348]3G|753G|833G)[);/ ]",
                model: "MID-$1"
            }
        ]
    }, sA = {
        regex: "(RITZVIVA[_ ]S500C)[);/ ]",
        device: "smartphone",
        model: "S500C"
    }, gA = {
        regex: "DeWalt (MD501)[);/ ]",
        device: "smartphone",
        model: "$1"
    }, xA = {
        regex: "Runbo",
        device: "smartphone",
        models: [
            {
                regex: "Runbo[ _-]?(X5-W|F1 Plus|F1-TT|F1-EN|F1|TT|Q5-S|X5-King|X6|Q5)[);/ ]",
                model: "$1"
            }
        ]
    }, cA = {
        regex: "(CarPad-(?:II|III)-P)[);/ ]",
        device: "car browser",
        model: "$1"
    }, uA = {
        regex: "Daewoo",
        device: "tv",
        models: [
            {
                regex: "Daewoo (Android TV 638)[);/ ]",
                model: "$1"
            }
        ]
    }, SA = {
        regex: "VESTA32LD86[);/ ]",
        device: "tv",
        model: "SmartT V2.0 32LD86S"
    }, AA = {
        regex: "(CARBONO_5|CUARZO_6|DIAMANTE_5|VULCANO_55)[);/ ]",
        device: "smartphone",
        models: [
            {
                regex: "VULCANO_55[);/ ]",
                model: 'Vulcano 5.5"'
            },
            {
                regex: "CARBONO_5[);/ ]",
                model: 'Carbono 5.0"'
            },
            {
                regex: "CUARZO_6[);/ ]",
                model: 'Cuarzo 6.0"'
            },
            {
                regex: "DIAMANTE_5[);/ ]",
                model: 'Diamante 5.0"'
            }
        ]
    }, pA = {
        regex: "(24H600G[RU]|32HR55GU|4[39]UP50GU|40UR50G[RU]|40U600G[RU]|55UP50GU|50U600GU)[);/ ]",
        device: "tv",
        model: "$1"
    }, vA = {
        regex: "(Divisat)[);/ ]",
        device: "tv",
        models: [
            {
                regex: "(J-Link)[);/ ]",
                model: "$1"
            }
        ]
    }, MA = {
        regex: "KJ-(OB03|YUBI)[);/ ]",
        device: "tablet",
        models: [
            {
                regex: "KJ-OB03[);/ ]",
                model: "Cata 7"
            },
            {
                regex: "KJ-YUBI[);/ ]",
                model: "Yubi 3G"
            }
        ]
    }, PA = {
        regex: "KaiCloud[ ]?(7[48]4|942)[);/ ]",
        device: "tablet",
        model: "KaiCloud $1"
    }, TA = {
        regex: "(NX-32THS100)[);/ ]",
        device: "tv",
        model: "$1"
    }, hA = {
        regex: "VSUN (ILLUSION|RACE|V9)[);/ ]",
        device: "smartphone",
        models: [
            {
                regex: "ILLUSION[);/ ]",
                model: "Illusion"
            },
            {
                regex: "RACE[);/ ]",
                model: "Race"
            },
            {
                regex: "(V9)[);/ ]",
                model: "$1"
            }
        ]
    }, bA = {
        regex: "(RugGear|RG(?:310|500|65[05]|702|850))[);/ ]",
        device: "smartphone",
        models: [
            {
                regex: "(RG[0-9]+)[);/ ]",
                model: "$1"
            }
        ]
    }, LA = {
        regex: "ALIGATOR[);/ ]",
        device: "smartphone",
        models: [
            {
                regex: "ALIGATOR (S50(?:65|70))[);/ ]",
                model: "$1"
            }
        ]
    }, _A = {
        regex: "(MS(?:45[036]|505|514)|MS457(?:PLUS)?)[);/ ]",
        device: "smartphone",
        models: [
            {
                regex: "(MS457)PLUS[);/ ]",
                model: "$1 Plus"
            },
            {
                regex: "MS(45[0367]|505|514)[);/ ]",
                model: "MS$1"
            }
        ]
    }, GA = {
        regex: "LUNA[ _](V55|G60)[);/ ]",
        device: "smartphone",
        model: "$1"
    }, BA = {
        regex: "PROTRULY[ _](D[78]|V10S)[);/ ]",
        device: "smartphone",
        model: "$1"
    }, NA = {
        regex: "JFone[ _](JS501)[);/ ]",
        device: "smartphone",
        model: "$1"
    }, CA = {
        regex: "(A101S)[);/ ]",
        device: "smartphone",
        model: "$1"
    }, EA = {
        regex: "(TSD Octa A0520P)[);/ ]",
        device: "smartphone",
        model: "$1"
    }, OA = {
        regex: "SOYES[ _]([67]S)[);/ ]",
        device: "smartphone",
        model: "$1"
    }, wA = {
        regex: "ZIDOO[ _](H6 Pro|X9S)[);/ ]",
        device: "tv",
        model: "$1"
    }, fA = {
        regex: "ZFINERY900[);/ ]",
        device: "tablet",
        model: "Y900"
    }, yA = {
        regex: "SMART_(G10[12]|G71|G81[H]?)[);/ ]",
        device: "tablet",
        model: "Smart $1"
    }, XA = {
        regex: "(LAMCY L350|IVA S6)[);/ ]",
        device: "smartphone",
        models: [
            {
                regex: "LAMCY L350[);/ ]",
                model: "Lamcy L350"
            },
            {
                regex: "IVA S6[);/ ]",
                model: "S6"
            }
        ]
    }, $A = {
        regex: "(PHICOMM)[);/ ]",
        device: "smartphone",
        models: [
            {
                regex: "C630 \\(CLUE L\\)[);/ ]",
                model: "Clue L"
            },
            {
                regex: "E653\\(ENERGY L\\)[);/ ]",
                model: "Energy L"
            },
            {
                regex: "CLUE (2S|M)[);/ ]",
                model: "Clue $1"
            }
        ]
    }, IA = {
        regex: "Huadoo[ _](HG0[46]|HG11|V[34])[);/ ]",
        device: "smartphone",
        model: "$1"
    }, FA = {
        regex: "GOME[_ ](2018X38A|2016G68A|2017M27A|C7_Note_Plus|U9)[);/ ]",
        device: "smartphone",
        models: [
            {
                regex: "GOME[_ ](2018X38A)[);/ ]",
                model: "C72"
            },
            {
                regex: "GOME[_ ](2016G68A)[);/ ]",
                model: "K1"
            },
            {
                regex: "GOME[_ ](2017M27A)[);/ ]",
                model: "U7"
            },
            {
                regex: "GOME[_ ](C7_Note_Plus|U9)[);/ ]",
                model: "$1"
            }
        ]
    }, DA = {
        regex: "VOYO[_ ](A15)[);/ ]",
        device: "tablet",
        model: "$1"
    }, RA = {
        regex: "RYTE (U55 LTE)[);/ ]",
        device: "smartphone",
        model: "$1"
    }, VA = {
        regex: "(HK1 (?:Max|MINI|PLUS|PRO)|VONTAR (?:Z[58]|V1))[);/ ]",
        device: "tv",
        models: [
            {
                regex: "VONTAR (Z[58]|V1)[);/ ]",
                model: "$1"
            },
            {
                regex: "HK1 Max[);/ ]",
                model: "HK1 Max"
            },
            {
                regex: "HK1 MINI[);/ ]",
                model: "HK1 Mini"
            },
            {
                regex: "HK1 PLUS[);/ ]",
                model: "HK1 Plus"
            },
            {
                regex: "HK1 PRO[);/ ]",
                model: "HK1 Pro"
            }
        ]
    }, UA = {
        regex: "VORKE (Z[15]|Z6(?: Plus)?)[);/ ]",
        device: "tv",
        model: "$1"
    }, HA = {
        regex: "Wigor (V4)[);/ ]",
        device: "smartphone",
        model: "$1"
    }, kA = {
        regex: "NEXON (X[19])[);/ ]",
        device: "tv",
        model: "$1"
    }, WA = {
        regex: "(ONA19TB00[27])[);/ ]",
        device: "tablet",
        model: "$1"
    }, KA = {
        regex: "(DW-PS3G5)[);/ ]",
        device: "smartphone",
        model: "Pocket Surfer 3G5"
    }, YA = {
        regex: "DROXIO (C40|B45)[);/ ]",
        device: "smartphone",
        model: "$1"
    }, QA = {
        regex: "(?:M(G492|L7[JK]2)CH|MN(4A2|8J2)ZP|MGA92ZP)[/]A[);/ ]",
        device: "smartphone",
        models: [
            {
                regex: "(MG492CH|MGA92ZP)[/]A[);/ ]",
                model: "I6 Plus"
            },
            {
                regex: "ML7[JK]2CH[/]A[);/ ]",
                model: "I6"
            },
            {
                regex: "MN4A2ZP[/]A[);/ ]",
                model: "I7"
            },
            {
                regex: "MN8J2ZP[/]A[);/ ]",
                model: "I7 Plus"
            }
        ]
    }, ZA = {
        regex: 'PocketBook SURFpad 3 \\(([\\d]+).([\\d]+)["]?\\)[);/ ]',
        device: "tablet",
        model: 'Surfpad 3 $1.$2"'
    }, zA = {
        regex: "(Mobitab)(10)c-3G[);/ ]",
        device: "tablet",
        model: "$1 $2C 3G"
    }, JA = {
        regex: "KULIAO (K10)[);/ ]",
        device: "smartphone",
        model: "$1"
    }, qA = {
        regex: "SUGAR (C21|[YF]11|[YF]9|C6|Y7|Y15)[);/ ]",
        device: "smartphone",
        model: "$1"
    }, jA = {
        regex: "Xshitou[_ ](P7)[);/ ]",
        device: "smartphone",
        model: "$1"
    }, ep = {
        Ace: lm,
        "Tunisie Telecom": {
            regex: "StarTrail TT[);/ ]",
            device: "smartphone",
            model: "StarTrail by TT"
        },
        SFR: dm,
        HTC: am,
        Microsoft: tm,
        Nokia: im,
        CnM: nm,
        RIM: mm,
        Palm: sm,
        HP: gm,
        TiPhone: xm,
        Apple: cm,
        MicroMax: um,
        "3Q": {
            regex: "AC0731B|AC1024C|AC7803C|BC9710AM|EL72B|LC0720C|LC0723B|LC0725B|LC0804B|LC0808B|LC0809B|LC0810C|LC0816C|LC0901D|LC1016C|MT0724B|MT0729[BD]|MT0811B|OC1020A|RC0709B|RC0710B|RC0718C|RC0719H|RC0721B|RC0722C|RC0726B|RC0734H|RC0743H|RC0817C|RC1018C|RC1019G|RC1025F|RC1301C|RC7802F|RC9711B|RC9712C|RC9716B|RC9717B|RC9724C|RC9726C|RC9727F|RC9730C|RC9731C|TS0807B|TS1013B|VM0711A|VM1017A|RC0813C|QS9719D|QS9718C|QS9715F|QS1023H|QS0815C|QS0730C|QS0728C|QS0717D|QS0716D|QS0715C|MT7801C|TS9708B|AC0732C|MT0739D|MT0812E|(?:3Q_)?ER71B",
            device: "tablet",
            models: [
                {
                    regex: "MT0724B|LC0901D|LC0816C|LC0810C|LC0809B|LC0808B|LC0804B|LC0725B|LC0723B",
                    model: "Qoo! P-Pad"
                },
                {
                    regex: "VM1017A|TS1013B|TS0807B|RC9731C|RC9730C|RC9727F|RC9726C|RC9724C|RC9717B|RC9716B|RC9712C|RC9711B|RC1301C|RC1025F|RC1019G|RC1018C|RC0817C|RC0813C|RC0743H|RC0734H|RC0726B|RC0722C|RC0721B|RC0719H|RC0718C|RC0710B|RC0709B|QS9715F|QS1023H|QS0815C|QS0730C|QS0728C|QS0717D|QS0716D|QS0715C|MT0811B|MT0739D|MT0729[BD]|LC1016C|LC0720C|BC9710AM|AC1024C|AC0731B",
                    model: "Qoo! Q-Pad"
                },
                {
                    regex: "MT7801C|QS9718C|QS9719D|VM0711A|OC1020A",
                    model: "Qoo! Surf"
                },
                {
                    regex: "TS9708B",
                    model: "Surf TS1009B"
                },
                {
                    regex: "AC7803C|AC0732C",
                    model: "Qoo! Lite"
                },
                {
                    regex: "MT0812E|RC7802F",
                    model: "Qoo! Meta"
                },
                {
                    regex: "EL72B|(?:3Q_)?ER71B",
                    model: "Qoo! Q-Book"
                }
            ]
        },
        "4Good": {
            regex: "4Good[ _]|S450m [43]G|S555m 4G|S501m 3G|T700i_3G|Light A103",
            device: "smartphone",
            models: [
                {
                    regex: "T700i_3G",
                    model: "T700i 3G",
                    device: "tablet"
                },
                {
                    regex: "S555m[_ ]4G",
                    model: "People"
                },
                {
                    regex: "(S(?:450m|501m)[_ ][43]G|Light A103)",
                    model: "$1"
                },
                {
                    regex: "4Good[ _]([^;/]+) Build",
                    model: "$1"
                },
                {
                    regex: "4Good[ _]([^);/ ]+)",
                    model: "$1"
                }
            ]
        },
        Alba: Sm,
        AllCall: Am,
        Bravis: pm,
        Acer: vm,
        Advan: Mm,
        Advance: Pm,
        AGM: Tm,
        Airness: hm,
        Aiwa: bm,
        Akai: Lm,
        "Arian Space": {
            regex: "Arian Space",
            device: "tablet",
            models: [
                {
                    regex: "100 ST1004PG",
                    model: "100"
                },
                {
                    regex: "80 SS8003PG",
                    model: "80"
                },
                {
                    regex: "71 ST7002PG",
                    model: "71"
                },
                {
                    regex: "70 ST7001RW",
                    model: "70"
                }
            ]
        },
        Alcatel: _m,
        Allview: Gm,
        Allwinner: Bm,
        altron: Nm,
        AMGOO: Cm,
        Amoi: Em,
        Ainol: Om,
        Archos: wm,
        Axxion: fm,
        MEU: ym,
        Arnova: Xm,
        ARRIS: $m,
        Ask: Im,
        ANS: Fm,
        Assistant: Dm,
        Ark: Rm,
        "Garmin-Asus": {
            regex: "Garmin-Asus|Garminfone",
            device: "smartphone",
            models: [
                {
                    regex: "Garminfone[ \\-_]([^;/]*)Build",
                    model: "Garminfone $1"
                },
                {
                    regex: "Garmin-Asus[ \\-_]([^;/]+)Build",
                    model: "$1"
                },
                {
                    regex: "Garmin-Asus[ \\-_]([^;/]+)[\\)/]",
                    model: "$1"
                }
            ]
        },
        Asus: Vm,
        Audiovox: Um,
        AVH: Hm,
        Avvio: km,
        "Azumi Mobile": {
            regex: "Azumi[_ ]",
            device: "smartphone",
            models: [
                {
                    regex: "Azumi[_ ]([^/;]+) Build",
                    model: "$1"
                },
                {
                    regex: "Azumi[_ ]([a-z0-9_]+)",
                    model: "$1"
                }
            ]
        },
        "Barnes & Noble": {
            regex: "Nook|BN[TR]V[0-9]+",
            device: "tablet",
            models: [
                {
                    regex: "Nook([a-z0-9]+)",
                    model: "Nook $1"
                },
                {
                    regex: "Nook[ _]([^/;]+)[ _]Build",
                    model: "Nook $1"
                },
                {
                    regex: "(BN[TR]V[0-9]+)",
                    model: "Nook $1"
                }
            ]
        },
        BGH: Wm,
        Bitel: Km,
        Blu: Ym,
        Bluegood: Qm,
        Blackview: Zm,
        Bluboo: zm,
        "Black Fox": {
            regex: "BMM[ _-]?((44[123]D|441S|431D|533D|54[12]S|541[ABW]|54[123]D|543S|531[ABD]))[;/) ]",
            device: "smartphone",
            models: [
                {
                    regex: "BMM443D",
                    model: "B7 Fox+"
                },
                {
                    regex: "BMM441S",
                    model: "B8 Fox"
                },
                {
                    regex: "BMM442D",
                    model: "B7"
                },
                {
                    regex: "BMM531D",
                    model: "B6"
                },
                {
                    regex: "BMM531A",
                    model: "B5"
                },
                {
                    regex: "BMM541A",
                    model: "B5+"
                },
                {
                    regex: "BMM543[DS]",
                    model: "B4"
                },
                {
                    regex: "BMM441D",
                    model: "B4 Mini"
                },
                {
                    regex: "BMM541B",
                    model: "B4 Mini NFC"
                },
                {
                    regex: "BMM531B",
                    model: "B4 Mini (2019)"
                },
                {
                    regex: "BMM542D",
                    model: "B3+"
                },
                {
                    regex: "BMM541D",
                    model: "B3"
                },
                {
                    regex: "BMM541W",
                    model: "B7R Fox"
                },
                {
                    regex: "BMM[ _-]?(533D|431D|54[12]S)[;/) ]",
                    model: "BMM $1"
                }
            ]
        },
        bogo: Jm,
        Boway: qm,
        Brondi: jm,
        "VGO TEL": {
            regex: "Venture V8",
            device: "smartphone",
            models: [
                {
                    regex: "Venture V8",
                    model: "Venture V8"
                }
            ]
        },
        Vivo: es,
        Vinsoc: rs,
        Bird: os,
        Becker: ls,
        Beeline: ds,
        Beetel: as,
        "BenQ-Siemens": {
            regex: "BENQ-SIEMENS - ([a-z0-9]+)",
            device: "feature phone",
            model: "$1"
        },
        BenQ: ts,
        Blaupunkt: is,
        Bmobile: ns,
        bq: ms,
        Bush: ss,
        CAGI: gs,
        Capitel: xs,
        Captiva: cs,
        Casio: us,
        Casper: Ss,
        Cat: As,
        Carrefour: ps,
        Celkon: vs,
        Changhong: Ms,
        "Cherry Mobile": {
            regex: "Cherry|Flare([ _])?(2X|4|A[123]|J[1235]|P[13]|S[456]|X2)|Flare S Play|Flare_HD_MAX|FLARE LITE|Flare XL Plus|Fusion Bolt|OMEGA HD 4",
            device: "smartphone",
            models: [
                {
                    regex: "Cherry(?: ?Mobile)?[ _]?([^/;]+) Build",
                    model: "$1"
                },
                {
                    regex: "(Flare2X)",
                    model: "$1"
                },
                {
                    regex: "Flare_HD_MAX",
                    model: "Flare HD Max"
                },
                {
                    regex: "FLARE LITE",
                    model: "Flare Lite"
                },
                {
                    regex: "Flare S Play",
                    model: "Flare S Play"
                },
                {
                    regex: "Flare XL Plus",
                    model: "Flare XL Plus"
                },
                {
                    regex: "Flare[ _](A2|J3|P1|S[46])[ _]Lite",
                    model: "Flare $1 Lite"
                },
                {
                    regex: "Flare[ _](J[12]|S5)[ _]mini",
                    model: "Flare $1 Mini"
                },
                {
                    regex: "Flare J2S",
                    model: "Flare J2s"
                },
                {
                    regex: "Flare S4 Max LTE",
                    model: "Flare S4 Max LTE"
                },
                {
                    regex: "Flare S4 Max",
                    model: "Flare S4 Max"
                },
                {
                    regex: "FlareS5LiteDTV ",
                    model: "Flare S5 Lite DTV"
                },
                {
                    regex: "Flare_S6_Plus",
                    model: "Flare S6 Plus"
                },
                {
                    regex: "FLARE S6 POWER",
                    model: "Flare S6 Power"
                },
                {
                    regex: "Flare S6",
                    model: "Flare S6"
                },
                {
                    regex: "Flare(?:[ _])?(4|A[13]|J[135]|P[13]|S4|X2)",
                    model: "Flare $1"
                },
                {
                    regex: "OMEGA HD 4",
                    model: "Omega HD 4"
                },
                {
                    regex: "(Fusion Bolt)",
                    model: "$1",
                    device: "tablet"
                }
            ]
        },
        "China Mobile": {
            regex: "(M812C|1501_M02|9930i|A1303|A309W|M651CY) Build",
            device: "smartphone",
            models: [
                {
                    regex: "M651CY",
                    model: "A3"
                },
                {
                    regex: "(M812C|1501_M02|9930i|A1303|A309W)",
                    model: "$1"
                }
            ]
        },
        Comio: Ps,
        Compal: Ts,
        "ComTrade Tesla": {
            regex: "Tesla|Impulse 7.85 3G|Smartphone_6.1|SP(?:6.2|6.2_Lite)|TTL(?:713G|8)",
            device: "smartphone",
            models: [
                {
                    regex: "TeslaEvo5.0",
                    model: "Evo 5.0"
                },
                {
                    regex: "(Gravity 9.7 SHD)",
                    model: "$1",
                    device: "tablet"
                },
                {
                    regex: "(Impulse 7.85 3G)",
                    model: "$1",
                    device: "tablet"
                },
                {
                    regex: "Tesla_SP([^/;]+)L Build",
                    model: "Smartphone $1 Lite"
                },
                {
                    regex: "Smartphone_6.1",
                    model: "Smartphone 6.1"
                },
                {
                    regex: "SP6.2_Lite",
                    model: "Smartphone 6.2 Lite"
                },
                {
                    regex: "Tesla_SP([^/;]+) Build",
                    model: "Smartphone $1"
                },
                {
                    regex: "SP([^/;]+) Build",
                    model: "Smartphone $1"
                },
                {
                    regex: "Smartphone ([36])",
                    model: "Smartphone $1"
                },
                {
                    regex: "Tesla_Tablet_785",
                    model: '7.85"',
                    device: "tablet"
                },
                {
                    regex: "TTH7",
                    model: "H7",
                    device: "tablet"
                },
                {
                    regex: "TTL7 Build",
                    model: "L7",
                    device: "tablet"
                },
                {
                    regex: "Tesla_Tablet_L7_3G",
                    model: "L7 3G",
                    device: "tablet"
                },
                {
                    regex: "(L7.1)",
                    model: "$1",
                    device: "tablet"
                },
                {
                    regex: "TTL713G",
                    model: "L7.1 3G",
                    device: "tablet"
                },
                {
                    regex: "(L7 Quad) Build",
                    model: "$1",
                    device: "tablet"
                },
                {
                    regex: "(L7 Quad Lite)",
                    model: "$1",
                    device: "tablet"
                },
                {
                    regex: "TTL8 Build",
                    model: "L8",
                    device: "tablet"
                },
                {
                    regex: "(L8.1)",
                    model: "$1",
                    device: "tablet"
                },
                {
                    regex: "TESLA_TABLET_M7",
                    model: "M7",
                    device: "tablet"
                },
                {
                    regex: "Tesla_Tablet_M8",
                    model: "M8",
                    device: "tablet"
                }
            ]
        },
        ConCorde: hs,
        Condor: bs,
        Coolpad: Ls,
        Clarmin: _s,
        Cricket: Gs,
        "Crius Mea": {
            regex: "(Q7A\\+?)[);/ ]",
            device: "tablet",
            model: "$1"
        },
        Crosscall: Bs,
        Cube: Ns,
        CUBOT: Cs,
        Concord: Es,
        Crescent: Os,
        Cyrus: ws,
        Datang: fs,
        Datsun: ys,
        Danew: Xs,
        Denver: $s,
        Dell: Is,
        Desay: Fs,
        DEXP: Ds,
        Dbtel: Rs,
        Dialog: Vs,
        Dicam: Us,
        Digi: Hs,
        Digicel: ks,
        Digiland: Ws,
        Digma: Ks,
        DoCoMo: Ys,
        Doogee: Qs,
        Doov: Zs,
        Dopod: zs,
        Doro: Js,
        "Dune HD": {
            regex: "DuneHD",
            device: "tv",
            models: [
                {
                    regex: "DuneHD/\\d.\\d \\([a-z]+__([a-z0-9_-]+);",
                    model: "$1"
                },
                {
                    regex: "DuneHD/\\d.\\d \\(([a-z0-9_-]+);",
                    model: "$1"
                }
            ]
        },
        DNS: qs,
        "E-Boda": {
            regex: "E-Boda|Eclipse_(?:G400M|G500)",
            device: "smartphone",
            models: [
                {
                    regex: "E-Boda ((?:Revo|Izzycomm|Essential|Intelligence|Supreme)[^/;]+) Build",
                    device: "tablet",
                    model: "$1"
                },
                {
                    regex: "Eclipse_(G400M|G500)",
                    model: "Eclipse $1"
                },
                {
                    regex: "E-Boda ([^/;]+) Build",
                    model: "$1"
                }
            ]
        },
        Easypix: js,
        EBEST: eg,
        "Echo Mobiles": {
            regex: "ECHO[ _](HOLI|HORIZON|MAX|MOSS|NOTE|POWER|SMART)",
            device: "smartphone",
            models: [
                {
                    regex: "ECHO_HORIZON_LITE",
                    model: "HORIZON Lite"
                },
                {
                    regex: "ECHO_SMART_4G",
                    model: "SMART 4G"
                },
                {
                    regex: "ECHO[ _](HOLI|MAX|MOSS|NOTE|POWER|SMART)",
                    model: "$1"
                }
            ]
        },
        ECS: rg,
        EE: og,
        "Eks Mobility": {
            regex: "S5LS|X4UPlus",
            device: "smartphone",
            models: [
                {
                    regex: "S5LS",
                    model: "S5LS"
                },
                {
                    regex: "X4UPlus",
                    model: "X4U Plus"
                }
            ]
        },
        Elephone: lg,
        Element: dg,
        Elenberg: ag,
        "Energy Sistem": {
            regex: "ENERGY[ _-]?([^;/]+) Build",
            device: "tablet",
            model: "$1"
        },
        Ericy: tg,
        Essential: ig,
        "E-tel": {
            regex: "E-tel_i250",
            device: "smartphone",
            models: [
                {
                    regex: "E-tel[_ ]i250",
                    model: "i250"
                }
            ]
        },
        Evercoss: ng,
        Eurostar: mg,
        Eton: sg,
        Essentielb: gg,
        Rikomagic: xg,
        Rinno: cg,
        Riviera: ug,
        Senseit: Sg,
        Sony: Ag,
        Ergo: pg,
        Ericsson: vg,
        Energizer: Mg,
        eTouch: Pg,
        Etuline: Tg,
        Storex: hg,
        Evertek: bg,
        Evolio: Lg,
        Evolveo: _g,
        Explay: Gg,
        EvroMedia: Bg,
        EKO: Ng,
        Extrem: Cg,
        Ezze: Eg,
        Ezio: Og,
        Forstar: wg,
        Foxconn: fg,
        Fondi: yg,
        Fairphone: Xg,
        Famoco: $g,
        FiGO: Ig,
        FNB: Fg,
        Fujitsu: Dg,
        "G-TiDE": {
            regex: "G-TiDE",
            device: "smartphone",
            models: [
                {
                    regex: "Shining7",
                    model: "Shining 7"
                },
                {
                    regex: "G-TiDE_(A1|S[34])",
                    model: "$1"
                },
                {
                    regex: "G-TiDE V6",
                    model: "V6"
                },
                {
                    regex: "E(57|60|66|72|77)",
                    model: "$1"
                }
            ]
        },
        Gemini: Rg,
        "General Mobile": {
            regex: "GM 5 Plus|GM8 go|GM 8 d|GM 8",
            device: "smartphone",
            models: [
                {
                    regex: "GM 5 Plus",
                    model: "GM 5 Plus"
                },
                {
                    regex: "GM 8 d",
                    model: "GM 8D"
                },
                {
                    regex: "GM 8",
                    model: "GM 8"
                },
                {
                    regex: "GM8 go",
                    model: "GM 8 Go"
                }
            ]
        },
        Geotel: Vg,
        Ghia: Ug,
        Gigabyte: Hg,
        Gigaset: kg,
        Ginzzu: Wg,
        Gionee: Kg,
        Grape: Yg,
        Vizio: Qg,
        GOCLEVER: Zg,
        GoMobile: zg,
        Goly: Jg,
        Google: qg,
        Gradiente: jg,
        Grundig: ex,
        Hafury: rx,
        Haier: ox,
        HannSpree: lx,
        Hasee: dx,
        Hisense: ax,
        "Hi-Level": {
            regex: "HLV-T([a-z0-9]+)",
            device: "tablet",
            model: "HLV-T$1"
        },
        Hoffmann: tx,
        Homtom: ix,
        Hosin: nx,
        Hoozo: mx,
        Huawei: sx,
        Hyundai: gx,
        "i-Joy": {
            regex: "i-Joy|i-Call|(?:Neon[79]|Sygnus|Deox|Elektra (?:M|L|XL|XXL))[);/ ]",
            device: "smartphone",
            models: [
                {
                    regex: "Elektra M[);/ ]",
                    model: "Elektra M"
                },
                {
                    regex: "Elektra L[);/ ]",
                    model: "Elektra L"
                },
                {
                    regex: "Elektra XL[);/ ]",
                    model: "Elektra XL"
                },
                {
                    regex: "Elektra XXL[);/ ]",
                    model: "Elektra XXL",
                    device: "phablet"
                },
                {
                    regex: "Neon([79])[);/ ]",
                    model: "Neon $1",
                    device: "tablet"
                },
                {
                    regex: "Sygnus[);/ ]",
                    model: "Sygnus",
                    device: "tablet"
                },
                {
                    regex: "Deox[);/ ]",
                    model: "Deox",
                    device: "tablet"
                },
                {
                    regex: "i-Call ([^;/]+) Build",
                    model: "i-Call $1"
                },
                {
                    regex: "i-Joy ([^;/]+) Build",
                    model: "$1"
                }
            ]
        },
        iBall: xx,
        iRola: cx,
        iRulu: ux,
        Irbis: Sx,
        iBerry: Ax,
        iHunt: px,
        IconBIT: vx,
        LYF: Mx,
        Lumus: Px,
        M4tel: Tx,
        "IMO Mobile": {
            regex: "IMO Q2",
            device: "smartphone",
            models: [
                {
                    regex: "IMO Q2",
                    model: "Q2"
                }
            ]
        },
        iLA: hx,
        iNew: bx,
        iPro: Lx,
        Infinix: _x,
        InFocus: Gx,
        InnJoo: Bx,
        Inkti: Nx,
        Innostream: Cx,
        Insignia: Ex,
        INQ: Ox,
        Intex: wx,
        "i-mate": {
            regex: "i-mate ([a-z0-9]+)",
            device: "feature phone",
            model: "$1"
        },
        "i-mobile": {
            regex: "i-mobile ?[a-z0-9]+|i-Style|IQ ?(9\\.1|5\\.5|5\\.6A?)",
            device: "feature phone",
            models: [
                {
                    regex: "i-mobile (i-note[^/;]*) Build",
                    model: "$1",
                    device: "tablet"
                },
                {
                    regex: "i-Style ?([^;/]+) Build",
                    model: "i-Style $1",
                    device: "smartphone"
                },
                {
                    regex: "IQ ?(9\\.1|5\\.5|5\\.6A?)",
                    model: "IQ $1",
                    device: "smartphone"
                },
                {
                    regex: "i-mobile (IQ[^/;]*) Build",
                    model: "$1",
                    device: "smartphone"
                },
                {
                    regex: "i-mobile(?: )?([a-z0-9\\- ]+) Build",
                    model: "$1"
                },
                {
                    regex: "i-mobile(?: )?([a-z0-9]+)",
                    model: "$1"
                }
            ]
        },
        iKoMo: fx,
        iOcean: yx,
        iView: Xx,
        Impression: $x,
        iTel: Ix,
        iZotron: Fx,
        "JAY-Tech": {
            regex: "TPC-[A-Z0-9]+|TPCY-TX[TE][^);/ ]+",
            device: "tablet",
            models: [
                {
                    regex: "TPC-([A-Z0-9]+)",
                    model: "Tablet PC $1"
                },
                {
                    regex: "(TPCY-TX[TE][^);/ ]+)",
                    model: "$1"
                }
            ]
        },
        Jiayu: Dx,
        Jolla: Rx,
        Just5: Vx,
        Kalley: Ux,
        Kaan: Hx,
        Kazam: kx,
        Keneksi: Wx,
        "Kempler & Strauss": {
            regex: "Alumini_?3_?Plus|Alumini ?[23]|KEMPLER_(TV|X)",
            device: "smartphone",
            models: [
                {
                    regex: "Alumini ?2",
                    model: "Alumini 2"
                },
                {
                    regex: "Alumini_?3_?Plus",
                    model: "Alumini 3 Plus"
                },
                {
                    regex: "Alumini3",
                    model: "Alumini 3"
                },
                {
                    regex: "KEMPLER_TV",
                    model: "TV"
                },
                {
                    regex: "KEMPLER_X",
                    model: "X"
                }
            ]
        },
        Kiano: Kx,
        Kingsun: Yx,
        Kocaso: Qx,
        Kogan: Zx,
        Komu: zx,
        Koobee: Jx,
        Kumai: qx,
        "KT-Tech": {
            regex: "(KM-[a-z0-9]+|EV-[a-z0-9]+)[);/ ]",
            device: "smartphone",
            model: "$1"
        },
        KDDI: jx,
        Kodak: e0,
        KOPO: r0,
        Koridy: o0,
        KRONO: l0,
        "K-Touch": {
            regex: "K-?Touch[ _][a-z0-9]+",
            device: "smartphone",
            models: [
                {
                    regex: "K-?Touch[ _]([^/;]*)[ _]Build",
                    model: "$1"
                },
                {
                    regex: "K-?Touch[ _]([a-z0-9]+)",
                    model: "$1"
                }
            ]
        },
        Kyocera: d0,
        "Krüger&Matz": {
            regex: "Kruger[ _&]Matz|MOVE_|LIVE4_KM043[89]",
            device: "smartphone",
            models: [
                {
                    regex: "MOVE_6_mini",
                    model: "MOVE 6 Mini"
                },
                {
                    regex: "MOVE[_ ]([78]|6S)",
                    model: "MOVE $1"
                },
                {
                    regex: "DRIVE 4 mini LTE",
                    model: "DRIVE 4 mini LTE"
                },
                {
                    regex: "DRIVE (4[S]?)[;/) ]",
                    model: "DRIVE $1"
                },
                {
                    regex: "Drive 5[;/) ]",
                    model: "DRIVE 5"
                },
                {
                    regex: "FLOW (4[S]?)[;/) ]",
                    model: "FLOW $1"
                },
                {
                    regex: "LIVE4_(KM043[89])[;/) ]",
                    model: "LIVE 4 $1"
                },
                {
                    regex: "_LIVE5_(KM0450)[;/) ]",
                    model: "LIVE 5 $1"
                }
            ]
        },
        LAIQ: a0,
        AIS: t0,
        Lava: i0,
        Landvo: n0,
        "Land Rover": {
            regex: "Land[ ]?Rover[d]?[ _-](X1[0-9]|Explore|T878|L15\\+|V18|V[168]|X)[;/) ]",
            device: "smartphone",
            model: "$1"
        },
        Lanix: m0,
        Lark: s0,
        LCT: g0,
        "Le Pan": {
            regex: "Le ?Pan|TC970 ([^;/]+)Build",
            device: "tablet",
            models: [
                {
                    regex: "TC802A",
                    model: "Le Pan Mini"
                },
                {
                    regex: "TC970 ([^;/]+)Build",
                    model: "TC970 $1"
                },
                {
                    regex: "Le ?Pan ?(II|S)[);/ ]",
                    model: "Le Pan $1"
                },
                {
                    regex: "Le ?Pan ?([^;/]+) Build",
                    model: "$1"
                }
            ]
        },
        Leagoo: x0,
        Ledstar: c0,
        LeEco: u0,
        Leotec: S0,
        Lephone: A0,
        Lenco: p0,
        Lenovo: v0,
        Lexand: M0,
        Lexibook: P0,
        LG: T0,
        Lingwin: h0,
        Logicom: b0,
        Konka: L0,
        Konrow: _0,
        Karbonn: G0,
        Sagem: B0,
        "Coby Kyros": {
            regex: "(MID(?:1024|1125|1126|1045|1048|1060|1065|4331|7012|7015A?|7016|7022|7032|7035|7036|7042|7047|7048|7052|7065|7120|8024|8042|8048|8065|8125|8127|8128|9724|9740|9742))[);/ ]",
            device: "tablet",
            model: "$1"
        },
        Mpman: N0,
        Majestic: C0,
        "Manta Multimedia": {
            regex: "MSP950(1[45]|2[01])|MSP96017|((?<!/)MID713|MID(?:06[SN]|08[S]?|12|13|14|15|701|702|703|704|705(?:DC)?|706[AS]?|707|708|709|711|712|714|717|781|801|802|901|1001|1002|1003|1004(?: 3G)?|1005|1009|1010|7802|9701|9702))[);/ ]",
            device: "smartphone",
            models: [
                {
                    regex: "((?<!/)MID713|MID(?:06[SN]|08[S]?|12|13|14|15|701|702|703|704|705(?:DC)?|706[AS]?|707|708|709|711|712|714|717|781|801|802|901|1001|1002|1003|1004(?: 3G)?|1005|1009|1010|7802|9701|9702))[);/ ]",
                    device: "tablet",
                    model: "$1"
                },
                {
                    regex: "MSP95014",
                    model: "Titano 3"
                },
                {
                    regex: "MSP95015",
                    model: "Mezo 2"
                },
                {
                    regex: "MSP95020",
                    model: "Rocky 2"
                },
                {
                    regex: "MSP95021",
                    model: "Rocky 3 Pro"
                },
                {
                    regex: "MSP96017",
                    model: "Forto 2"
                }
            ]
        },
        Masstel: E0,
        Maxwest: O0,
        Maze: w0,
        Mediacom: f0,
        Medion: y0,
        MEEG: X0,
        Meizu: $0,
        Meitu: I0,
        Memup: F0,
        Mecer: D0,
        Mio: R0,
        Miray: V0,
        Mitsubishi: U0,
        MIXC: H0,
        Mobiola: k0,
        Mobicel: W0,
        Mobiistar: K0,
        MSI: Y0,
        MLLED: Q0,
        Mobistel: Z0,
        Mecool: z0,
        Modecom: J0,
        Mofut: q0,
        Motorola: j0,
        Movic: ec,
        MTN: rc,
        MyPhone: oc,
        MyWigo: lc,
        Myria: dc,
        "M.T.T.": {
            regex: "M.T.T.",
            device: "smartphone",
            models: [
                {
                    regex: "M.T.T. ?Tablet([^;/]+)? Build",
                    device: "tablet",
                    model: "Tablet$1"
                },
                {
                    regex: "M.T.T. ?([^;/]+) Build",
                    model: "$1"
                }
            ]
        },
        Navon: ac,
        NOA: tc,
        Nobby: ic,
        NEC: nc,
        Neffos: mc,
        Nextbit: sc,
        Newgen: gc,
        Netgear: xc,
        NeuImage: cc,
        NextBook: uc,
        NGM: Sc,
        Nexian: Ac,
        Noain: pc,
        Noblex: vc,
        Nomi: Mc,
        "NUU Mobile": {
            regex: "NUU_|(?:N(5702|5001)L|S6001L)[;)/ ]",
            device: "smartphone",
            models: [
                {
                    regex: "NUU_A1",
                    model: "A1"
                },
                {
                    regex: "S6001L",
                    model: "G2"
                },
                {
                    regex: "N5702L",
                    model: "G3"
                },
                {
                    regex: "(N5001L)[;)/ ]",
                    model: "$1"
                }
            ]
        },
        "NYX Mobile": {
            regex: "NYX[ _]",
            device: "smartphone",
            models: [
                {
                    regex: "NYX_A1",
                    model: "A1"
                },
                {
                    regex: "NYX_Blink",
                    model: "Blink"
                },
                {
                    regex: "NYX_EGO",
                    model: "Ego"
                },
                {
                    regex: "NYX_FENIX",
                    model: "Fenix"
                },
                {
                    regex: "NYX_FLY_II",
                    model: "Fly II"
                },
                {
                    regex: "NYX_FLY_MINI",
                    model: "Fly Mini"
                },
                {
                    regex: "NYX_FLY",
                    model: "Fly"
                },
                {
                    regex: "NYX_HIT",
                    model: "Hit"
                },
                {
                    regex: "NYX_JAK",
                    model: "Jak"
                },
                {
                    regex: "NYX_JOIN",
                    model: "Join"
                },
                {
                    regex: "NYX_NOBA_II",
                    model: "Noba II"
                },
                {
                    regex: "NYX_NOBA",
                    model: "Noba"
                },
                {
                    regex: "NYX_ORBIS",
                    model: "Orbis"
                },
                {
                    regex: "NYX[ _]REX",
                    model: "Rex"
                },
                {
                    regex: "NYX_SHADE",
                    model: "Shade"
                },
                {
                    regex: "NYX_SKY",
                    model: "Sky"
                },
                {
                    regex: "NYX_SPARK",
                    model: "Spark"
                },
                {
                    regex: "NYX_VOX",
                    model: "Vox"
                },
                {
                    regex: "NYX_ZEUZ_HD",
                    model: "Zeus HD"
                }
            ]
        },
        Nous: Pc,
        Nvidia: Tc,
        "O+": {
            regex: "O\\+[ _](Air|Crunch|Ultra|Upsized|Venti)",
            device: "smartphone",
            models: [
                {
                    regex: "O\\+[ _](Crunch|Ultra 2.0|Ultra|Upsized|Venti 4G)",
                    model: "$1"
                },
                {
                    regex: "O\\+_AIR",
                    model: "Air"
                }
            ]
        },
        O2: hc,
        Odys: bc,
        Obi: Lc,
        Onda: _c,
        OnePlus: Gc,
        Realme: Bc,
        OPPO: Nc,
        Opsson: Cc,
        Orange: Ec,
        Ouki: Oc,
        Oukitel: wc,
        Overmax: fc,
        Oysters: yc,
        öwn: {
            regex: "OWN",
            device: "smartphone",
            models: [
                {
                    regex: "FUN ([67])",
                    model: "Fun $1"
                },
                {
                    regex: "FUN 5\\(4G\\)",
                    model: "Fun 5 4G"
                },
                {
                    regex: "OWN[ _](S3000D|S3010|S3020D|S4010|S4025)",
                    model: "$1"
                },
                {
                    regex: "One Plus",
                    model: "One Plus"
                },
                {
                    regex: "One",
                    model: "One"
                },
                {
                    regex: "SMART 9",
                    model: "Smart 9"
                }
            ]
        },
        Panacom: Xc,
        Panasonic: $c,
        PCBOX: Ic,
        PCD: Fc,
        "PCD Argentina": {
            regex: "PCD[ ]?50[689]",
            device: "smartphone",
            models: [
                {
                    regex: "PCD[ ]?(50[689])",
                    model: "$1"
                }
            ]
        },
        Pentagram: Dc,
        Philips: Rc,
        phoneOne: Vc,
        Primepad: Uc,
        Pioneer: Hc,
        Pixus: kc,
        PULID: Wc,
        "Point of View": {
            regex: "POV_TV|POV_TAB|MOB-5045",
            device: "tablet",
            models: [
                {
                    regex: "POV_TV-HDMI-KB-01",
                    model: "HDMI Smart TV Dongle",
                    device: "tv"
                },
                {
                    regex: "POV_TV-HDMI-200BT",
                    model: "Mini PC HDMI Dongle",
                    device: "tv"
                },
                {
                    regex: "MOB-5045",
                    model: "Mobii Phone 5045",
                    device: "smartphone"
                },
                {
                    regex: "POV_TAB-P506",
                    model: "ONYX 506 Navi"
                },
                {
                    regex: "POV_TAB[_-]NAVI7[_-]3G[_-]M",
                    model: "ONYX 507 Navi"
                },
                {
                    regex: "POV_TAB-P527S",
                    model: "ONYX 527S"
                },
                {
                    regex: "POV_TAB-P547",
                    model: "ONYX 547 Navi"
                },
                {
                    regex: "POV_TAB-PROTAB26",
                    model: "ProTab 26 XXL IPS"
                },
                {
                    regex: "POV_TAB-PROTAB25XXL8?",
                    model: "ProTab 25XXL"
                },
                {
                    regex: "POV_TAB-PL1015",
                    model: "Mobii 1015"
                },
                {
                    regex: "POV_TAB-PROTAB([a-z0-9]+)",
                    model: "ProTab $1"
                },
                {
                    regex: "POV_TAB-P?([a-z0-9]+)",
                    model: "Mobii $1"
                }
            ]
        },
        Pomp: Kc,
        PPTV: Yc,
        ProScan: Qc,
        "RCA Tablets": {
            regex: "RCT([^;/]+) Build|RCA RLTP4028",
            device: "smartphone",
            models: [
                {
                    regex: "RCA RLTP4028",
                    model: "RLTP4028"
                },
                {
                    regex: "RCT([^;/]+) Build",
                    device: "tablet",
                    model: "RCT$1"
                }
            ]
        },
        Readboy: Zc,
        Roku: zc,
        Rokit: Jc,
        Rombica: qc,
        Rover: jc,
        RoverPad: e1,
        Roadrover: r1,
        "RT Project": {
            regex: "Shock 5",
            device: "smartphone",
            models: [
                {
                    regex: "Shock 5",
                    model: "Shock 5"
                }
            ]
        },
        Safaricom: o1,
        Santin: l1,
        Siemens: d1,
        Samsung: a1,
        Sanei: t1,
        Selfix: i1,
        Sencor: n1,
        Senwa: m1,
        Sky: s1,
        Skyworth: g1,
        Smartfren: x1,
        Smartisan: c1,
        "STF Mobile": {
            regex: "Fractal|AERIAL PLUS|Origins Pro",
            device: "smartphone",
            models: [
                {
                    regex: "Fractal",
                    model: "Fractal"
                },
                {
                    regex: "Origins Pro",
                    model: "Origins Pro"
                },
                {
                    regex: "AERIAL PLUS",
                    model: "Aerial Plus"
                }
            ]
        },
        STK: u1,
        Stonex: S1,
        SuperSonic: A1,
        Supra: p1,
        Sumvision: v1,
        SunVan: M1,
        SWISSMOBILITY: P1,
        Thomson: T1,
        Pantech: h1,
        Ployer: b1,
        Plum: L1,
        Polaroid: _1,
        PolyPad: G1,
        Polytron: B1,
        Positivo: N1,
        Prestigio: C1,
        Sanyo: E1,
        Qilive: O1,
        QMobile: w1,
        Quantum: f1,
        Quechua: y1,
        Ramos: X1,
        Razer: $1,
        Sendo: I1,
        "Turbo-X": {
            regex: "Turbo-X",
            device: "smartphone",
            models: [
                {
                    regex: "Turbo-X Ice[);/ ]",
                    device: "tablet",
                    model: "Ice"
                },
                {
                    regex: "Turbo-X Tablet([^;/]+) Build",
                    device: "tablet",
                    model: "Tablet$1"
                },
                {
                    regex: "Turbo-X ([^;/]+) Build",
                    model: "$1"
                }
            ]
        },
        Turbo: F1,
        "Silent Circle": {
            regex: "Blackphone 2",
            device: "smartphone",
            model: "Blackphone 2"
        },
        Sigma: D1,
        Spice: R1,
        Sharp: V1,
        Softbank: U1,
        Sonim: H1,
        Star: k1,
        Amazon: W1,
        Symphony: K1,
        Syrox: Y1,
        Qtek: Q1,
        "Q-Touch": {
            regex: "(Q09) Build",
            device: "smartphone",
            model: "$1"
        },
        "T-Mobile": {
            regex: "T-Mobile[ _][a-z0-9 ]+|REVVLRY|REVVL 2( PLUS)?[);/ ]",
            device: "smartphone",
            models: [
                {
                    regex: "REVVL 2 PLUS",
                    model: "REVVL 2 Plus"
                },
                {
                    regex: "REVVLRY",
                    model: "REVVL Plus"
                },
                {
                    regex: "REVVL 2[);/ ]",
                    model: "REVVL 2"
                },
                {
                    regex: "T-Mobile[ _]([a-z0-9_ ]+) Build",
                    model: "$1"
                },
                {
                    regex: "T-Mobile[ _]([a-z0-9_ ]+)",
                    model: "$1"
                }
            ]
        },
        "TB Touch": {
            regex: "Ignis [89]",
            device: "tablet",
            models: [
                {
                    regex: "Ignis ([89])",
                    model: "Ignis $1"
                }
            ]
        },
        TCL: Z1,
        Teclast: z1,
        "Tecno Mobile": {
            regex: "Tecno|Phantom6|Phantom6-Plus|DP7C Pro-SGA1",
            device: "smartphone",
            models: [
                {
                    regex: "Phantom6-Plus",
                    model: "Phantom 6 Plus"
                },
                {
                    regex: "Phantom6",
                    model: "Phantom 6"
                },
                {
                    regex: "TECNO-W3",
                    model: "W3"
                },
                {
                    regex: "TECNO[ _]ID6[);/ ]",
                    model: "Camon iClick 2"
                },
                {
                    regex: "Tecno[ _]7C[);/ ]",
                    model: "DroidPad 7C",
                    device: "tablet"
                },
                {
                    regex: "DP7C Pro-SGA1[);/ ]",
                    model: "DroidPad 7C Pro",
                    device: "tablet"
                },
                {
                    regex: "TECNO[ _]DP10A Pro[);/ ]",
                    model: "DroidPad 10A Pro",
                    device: "tablet"
                },
                {
                    regex: "TECNO[ _]P904[);/ ]",
                    model: "DroidPad 10D 4G",
                    device: "tablet"
                },
                {
                    regex: "Tecno[ _]CB7[j]?",
                    model: "Camon i4"
                },
                {
                    regex: "Tecno[ _]DP8D[);/ ]",
                    model: "DroidPad 8D",
                    device: "tablet"
                },
                {
                    regex: "Tecno[ _]LB8",
                    model: "Pouvoir 3 Plus"
                },
                {
                    regex: "Tecno ([^;/]+) Build",
                    model: "$1"
                },
                {
                    regex: "Tecno[ _]?([a-z0-9_\\-]+)",
                    model: "$1"
                }
            ]
        },
        TechPad: J1,
        Tesco: q1,
        teXet: j1,
        Telefunken: eu,
        Telego: ru,
        Telenor: ou,
        Telit: lu,
        ThL: du,
        TIANYU: au,
        Timovi: tu,
        Tooky: iu,
        Tolino: nu,
        "Top House": {
            regex: "Coto[_ ]|X1013",
            device: "smartphone",
            models: [
                {
                    regex: "Coto W418",
                    model: "Coto W418"
                },
                {
                    regex: "COTO_T117",
                    model: "Coto T117",
                    device: "tablet"
                },
                {
                    regex: "X1013",
                    model: "X1013",
                    device: "tablet"
                },
                {
                    regex: "COTO_T40017",
                    model: "T40017"
                }
            ]
        },
        Toplux: mu,
        Touchmate: su,
        TrekStor: gu,
        Trevi: xu,
        TVC: cu,
        "U.S. Cellular": {
            regex: "USCC-",
            device: "smartphone",
            models: [
                {
                    regex: "USCC-E6762",
                    model: "Kyocera DuraForce"
                },
                {
                    regex: "(USCC-[a-z0-9_\\-]+)",
                    model: "$1"
                }
            ]
        },
        Uhappy: uu,
        Unimax: Su,
        Unowhy: Au,
        UTStarcom: pu,
        Ulefone: vu,
        UMIDIGI: Mu,
        Uniscope: Pu,
        Unnecto: Tu,
        Unonu: hu,
        UTOK: bu,
        Vastking: Lu,
        ViewSonic: _u,
        Vitelcom: Gu,
        Fengxiang: Bu,
        "VK Mobile": {
            regex: "VK(?!share)[\\-]?([a-z0-9 ]+)([;\\)/ ]| Build)",
            device: "feature phone",
            model: "$1"
        },
        Vernee: Nu,
        Vertu: Cu,
        Venso: Eu,
        Verizon: Ou,
        Verykool: wu,
        Vestel: fu,
        Videocon: yu,
        Vodafone: Xu,
        Vonino: $u,
        Vorago: Iu,
        Voto: Fu,
        Voxtel: Du,
        Vulcan: Ru,
        Walton: Vu,
        WellcoM: Uu,
        Wexler: Hu,
        Wiko: ku,
        Wieppo: Wu,
        Wink: Ku,
        Weimei: Yu,
        Wileyfox: Qu,
        Wolder: Zu,
        Wolfgang: zu,
        Wonu: Ju,
        Woo: qu,
        Woxter: ju,
        "X-View": {
            regex: "ZEN_U5+",
            device: "smartphone",
            models: [
                {
                    regex: "ZEN_U5+",
                    model: "ZEN U5+"
                }
            ]
        },
        Xiaomi: eS,
        Xion: rS,
        Xolo: oS,
        Yarvik: lS,
        Yes: dS,
        Yezz: aS,
        Yu: tS,
        Yuandao: iS,
        Yusun: nS,
        Ytone: mS,
        Zonda: sS,
        ZYQ: gS,
        Toshiba: xS,
        Vivax: cS,
        Fly: uS,
        FinePower: SS,
        Freetel: AS,
        Zeemi: pS,
        Zenek: vS,
        Zopo: MS,
        ZTE: PS,
        Zuum: TS,
        Zen: hS,
        Zync: bS,
        Lemhoov: LS,
        MTC: _S,
        MegaFon: GS,
        Inoi: BS,
        Vertex: NS,
        Unknown: CS,
        Starway: ES,
        Savio: OS,
        Simbans: wS,
        MYFON: fS,
        "X-TIGI": {
            regex: "X[-_]TIGI",
            device: "smartphone",
            models: [
                {
                    regex: "X-TIGI_JOY10_PRO",
                    model: "Joy 10 Pro",
                    device: "tablet"
                },
                {
                    regex: "X-TIGI_JOY7_MAX",
                    model: "Joy 7 Max",
                    device: "tablet"
                },
                {
                    regex: "X-TIGI[_ ]V28[_ ]LTE",
                    model: "V28 LTE"
                },
                {
                    regex: "X[-_]TIGI[ _-]([^/;)]+) Build",
                    model: "$1"
                }
            ]
        },
        Xiaolajiao: yS,
        Ritmix: XS,
        "Ross&Moor": {
            regex: "RMD[-_](974R|600)[);/ ]",
            device: "tablet",
            model: "RMD-$1"
        },
        "R-TV": {
            regex: "R-TV BOX[ _]?(MINI\\+|X99|X10 PRO|[RXS]10)",
            device: "tv",
            model: "Box $1"
        },
        NEXBOX: $S,
        True: IS,
        Yandex: FS,
        FORME: DS,
        Shuttle: RS,
        BDF: VS,
        Highscreen: US,
        CVTE: HS,
        Globex: kS,
        Atom: WS,
        Qumo: KS,
        Umax: YS,
        Mann: QS,
        Unihertz: ZS,
        Chuwi: zS,
        Bezkam: JS,
        "NG Optics": {
            regex: "(NG3128HD)[;)/ ]",
            device: "tv",
            model: "$1"
        },
        KATV1: qS,
        Ghong: jS,
        Xoro: eA,
        Vinga: rA,
        Nuvo: oA,
        Sunvell: lA,
        AllDocube: dA,
        Ugoos: aA,
        Yxtel: tA,
        Proline: iA,
        Yota: nA,
        Mystery: mA,
        Ritzviva: sA,
        DeWalt: gA,
        Runbo: xA,
        NewsMy: cA,
        Daewoo: uA,
        Vesta: SA,
        Spectrum: AA,
        Kivi: pA,
        Divisat: vA,
        Kanji: MA,
        Kaiomy: PA,
        National: TA,
        Vsun: hA,
        "Shift Phones": {
            regex: "(SHIFT6m)[);/ ]",
            device: "smartphone",
            model: "$1"
        },
        RugGear: bA,
        Aligator: LA,
        Maxcom: _A,
        Luna: GA,
        Protruly: BA,
        JFone: NA,
        Uhans: CA,
        ArmPhone: EA,
        Soyes: OA,
        Zidoo: wA,
        Zfiner: fA,
        iGet: yA,
        iVA: XA,
        Phicomm: $A,
        Huadoo: IA,
        Gome: FA,
        Voyo: DA,
        Ryte: RA,
        Vontar: VA,
        Vorke: UA,
        Wigor: HA,
        NEXON: kA,
        ONN: WA,
        "Q.Bell": {
            regex: "(QPHONE_10.1)[);/ ]",
            device: "smartphone",
            model: "$1"
        },
        Datawind: KA,
        Droxio: YA,
        Goophone: QA,
        PocketBook: ZA,
        Bitmore: zA,
        Kuliao: JA,
        Sugar: qA,
        Xshitou: jA
    };
    var Ve = {}, Kr;
    function _o() {
        return Kr || (Kr = 1, Object.defineProperty(Ve, "__esModule", {
            value: !0
        }), Ve.buildModel = (d)=>(d = d.replace(/_/g, " "), d = d.replace(RegExp(" TD$", "i"), ""), d === "Build" ? "" : d)), Ve;
    }
    var Yr;
    function rp() {
        if (Yr) return pe;
        Yr = 1;
        var d = pe && pe.__importDefault || function(a) {
            return a && a.__esModule ? a : {
                default: a
            };
        };
        Object.defineProperty(pe, "__esModule", {
            value: !0
        });
        const e = d(ep), r = z(), o = U(), l = _o();
        class t {
            constructor(){
                this.parse = (i)=>{
                    const n = {
                        type: "",
                        brand: "",
                        model: ""
                    };
                    for (const [m, s] of Object.entries(e.default)){
                        const g = o.userAgentParser(s.regex, i);
                        if (g) {
                            if (n.type = s.device || "", n.brand = m, s.model) n.model = l.buildModel(r.variableReplacement(s.model, g)).trim();
                            else if (s.models) for (const x of s.models){
                                const v = o.userAgentParser(x.regex, i);
                                if (v) {
                                    n.model = l.buildModel(r.variableReplacement(x.model, v)).trim(), x.device && (n.type = x.device), "brand" in x && (n.brand = x.brand || "");
                                    break;
                                }
                            }
                            break;
                        }
                    }
                    return n.type === "tv" && (n.type = "television"), n.type === "car browser" && (n.type = "car"), n.brand === "Unknown" && (n.brand = ""), n;
                };
            }
        }
        return pe.default = t, pe;
    }
    var ve = {};
    const op = {
        regex: "Airties",
        device: "tv",
        models: [
            {
                regex: "Airties; ?([^);/]+)",
                model: "$1"
            }
        ]
    }, lp = {
        regex: "Bangolufsen",
        device: "tv",
        model: "BeoVision"
    }, dp = {
        regex: "Changhong",
        device: "tv",
        models: [
            {
                regex: "Changhong; ?([^);/]+)",
                model: "$1"
            }
        ]
    }, ap = {
        regex: "CreNova",
        device: "tv",
        model: "CNV001"
    }, tp = {
        regex: "DMM",
        device: "tv",
        model: "Dreambox"
    }, ip = {
        regex: "(OWB|Grundig|Arcelik)",
        device: "tv",
        model: ""
    }, np = {
        regex: "Hisense",
        device: "tv",
        models: [
            {
                regex: "(L[A-Z]{2,3}[0-9]{2}[A-Z][0-9]{3,4}[A-Z]{0,6}[0-9]?[A-Z]?)",
                model: "$1"
            },
            {
                regex: "(H[A-Z]?[0-9]{2}[A-Z][0-9]{3,4}[A-Z]{0,4})",
                model: "$1"
            }
        ]
    }, mp = {
        regex: "Humax",
        device: "tv",
        models: [
            {
                regex: "(HD-FOX C|HD (FOX\\+|NANO)|iCord (HD\\+|MINI|Cable)|(CX|IR)HD-5100(C|S)|HM9503HD)",
                model: "$1"
            },
            {
                regex: "HMS1000S",
                model: "HMS-1000S"
            },
            {
                regex: "Humax; ([^);/]+)",
                model: "$1"
            }
        ]
    }, sp = {
        regex: "Ikea",
        device: "tv",
        models: [
            {
                regex: "(LF1V[0-9]{3})",
                model: "$1"
            }
        ]
    }, gp = {
        regex: "Intek",
        device: "tv",
        models: [
            {
                regex: "(Vantage|VT-100|VT-1)",
                model: "$1"
            }
        ]
    }, xp = {
        regex: "Inverto",
        device: "tv",
        models: [
            {
                regex: "inverto; ([^);/]+)",
                model: "$1"
            },
            {
                regex: "(Volksbox Web Edition|Volksbox Essential|Volksbox II|Volksbox)",
                model: "$1"
            }
        ]
    }, cp = {
        regex: "LGE",
        device: "tv",
        models: [
            {
                regex: "(NetCast [0-9]{1}.[0-9]{1}|GLOBAL_PLAT3)",
                model: "$1"
            },
            {
                regex: "(OLED[0-9]{2}[A-Z][0-9][A-Z])",
                model: "$1"
            },
            {
                regex: "LGE;? ?([0-9]{2}[A-Z]{2}[0-9]{2,4}[A-Z]?)",
                model: "$1"
            }
        ]
    }, up = {
        regex: "Loewe",
        device: "tv",
        models: [
            {
                regex: "([A-Z]{2}[0-9]{3})",
                model: "$1"
            }
        ]
    }, Sp = {
        regex: "MTK",
        device: "tv",
        models: [
            {
                regex: "(MT[0-9]{4})",
                model: "$1"
            }
        ]
    }, Ap = {
        regex: "Medion",
        device: "tv",
        models: [
            {
                regex: "(MB[0-9]{2})",
                model: "$1"
            }
        ]
    }, pp = {
        regex: "Metz",
        device: "tv",
        model: ""
    }, vp = {
        regex: "Panasonic",
        device: "tv",
        models: [
            {
                regex: "(VIERA [0-9]{1,4})|(DIGA [A-Z]{1}[0-9]{4})",
                model: "$1"
            },
            {
                regex: "DIGA Webkit ([A-Z]{1}[0-9]{4})",
                model: "DIGA $1"
            }
        ]
    }, Mp = {
        regex: "PEAQ",
        device: "tv",
        models: [
            {
                regex: "(LF1V[0-9]{3})",
                model: "$1"
            }
        ]
    }, Pp = {
        regex: "Philips|NETTV/",
        device: "tv",
        models: [
            {
                regex: "Philips[,;] ?((?! )[^),;/]+)",
                model: "$1"
            },
            {
                regex: "NETTV/[0-9\\.]{5}",
                model: "NetTV Series"
            }
        ]
    }, Tp = {
        regex: "Samsung|Maple_2011",
        device: "tv",
        models: [
            {
                regex: "SmartTV(201[2-9])",
                model: "Smart TV $1"
            },
            {
                regex: "Maple_2011",
                model: "Smart TV 2011"
            }
        ]
    }, hp = {
        regex: "Selevision",
        device: "tv",
        models: [
            {
                regex: "Selevision; (?:Selevision )?([^);/]+)",
                model: "$1"
            },
            {
                regex: "(EMC1000i)",
                model: "$1"
            }
        ]
    }, bp = {
        regex: "Sharp",
        device: "tv",
        models: [
            {
                regex: "Sharp[,;] ?((?! |HbbTV)[^),;/]+)",
                model: "$1"
            },
            {
                regex: "(LE[0-9]{3}[A-Z]{0,3})",
                model: "$1"
            }
        ]
    }, Lp = {
        regex: "Sky_worth",
        device: "tv",
        models: [
            {
                regex: "Sky_worth;([^);/]+)",
                model: "$1"
            }
        ]
    }, _p = {
        regex: "Smart[^a-z]",
        device: "tv",
        models: [
            {
                regex: "Smart; ([^);/]+)",
                model: "$1"
            },
            {
                regex: "([A-Z]{2}[0-9]{2}|ZAPPIX)",
                model: "$1"
            }
        ]
    }, Gp = {
        regex: "Sony",
        device: "tv",
        models: [
            {
                regex: "(KDL?-?[0-9]{2}[A-Z]{1,2}[0-9]{1,5})",
                model: "$1"
            }
        ]
    }, Bp = {
        regex: "TechniSat",
        device: "tv",
        models: [
            {
                regex: "((DigiCorder|MultyVision|Digit) (ISIO S|ISIO C|ISIO))",
                model: "$1"
            }
        ]
    }, Np = {
        regex: "TechnoTrend",
        device: "tv",
        models: [
            {
                regex: "([A-Z]{1}-[0-9]{3})",
                model: "$1"
            }
        ]
    }, Cp = {
        regex: "Telefunken",
        device: "tv",
        models: [
            {
                regex: "(MB[0-9]{2})",
                model: "$1"
            }
        ]
    }, Ep = {
        regex: "TCL",
        device: "tv",
        models: [
            {
                regex: "(LF1V[0-9]{3})",
                model: "$1"
            }
        ]
    }, Op = {
        regex: "THOMSON|THOM",
        device: "tv",
        models: [
            {
                regex: "(LF1V[0-9]{3})",
                model: "$1"
            }
        ]
    }, wp = {
        regex: "Toshiba",
        device: "tv",
        models: [
            {
                regex: "(([0-9]{2}|DTV_)[A-Z]{2}[0-9]{1,3})",
                model: "$1"
            }
        ]
    }, fp = {
        regex: "Vestel",
        device: "tv",
        models: [
            {
                regex: "(MB[0-9]{2})",
                model: "$1"
            }
        ]
    }, yp = {
        regex: "videoweb|tv2n",
        device: "tv",
        models: [
            {
                regex: "(tv2n)",
                model: "$1"
            },
            {
                regex: "(videowebtv)",
                model: "VideoWeb TV"
            }
        ]
    }, Xp = {
        Airties: op,
        "Altech UEC": {
            regex: "Altech UEC",
            device: "tv",
            models: [
                {
                    regex: "Altech UEC; ?([^);/]+)",
                    model: "$1"
                }
            ]
        },
        BangOlufsen: lp,
        Changhong: dp,
        CreNova: ap,
        DMM: tp,
        Grundig: ip,
        Hisense: np,
        Humax: mp,
        Ikea: sp,
        Intek: gp,
        Inverto: xp,
        LG: cp,
        Loewe: up,
        MediaTek: Sp,
        Medion: Ap,
        Metz: pp,
        Panasonic: vp,
        PEAQ: Mp,
        Philips: Pp,
        Samsung: Tp,
        Selevision: hp,
        Sharp: bp,
        Skyworth: Lp,
        Smart: _p,
        Sony: Gp,
        TechniSat: Bp,
        TechnoTrend: Np,
        Telefunken: Cp,
        TCL: Ep,
        Thomson: Op,
        Toshiba: wp,
        Vestel: fp,
        Videoweb: yp
    };
    var Qr;
    function $p() {
        if (Qr) return ve;
        Qr = 1;
        var d = ve && ve.__importDefault || function(a) {
            return a && a.__esModule ? a : {
                default: a
            };
        };
        Object.defineProperty(ve, "__esModule", {
            value: !0
        });
        const e = d(Xp), r = z(), o = U(), l = _o();
        class t {
            constructor(){
                this.parse = (i)=>{
                    const n = {
                        type: "",
                        brand: "",
                        model: ""
                    };
                    if (!this.isHbbTv(i)) return n;
                    n.type = "television";
                    for (const [m, s] of Object.entries(e.default)){
                        const g = o.userAgentParser(s.regex, i);
                        if (g) {
                            if (n.brand = m, s.model) n.model = l.buildModel(r.variableReplacement(s.model, g)).trim();
                            else if (s.models) for (const x of s.models){
                                const v = o.userAgentParser(x.regex, i);
                                if (v) {
                                    n.model = l.buildModel(r.variableReplacement(x.model, v)).trim();
                                    break;
                                }
                            }
                            break;
                        }
                    }
                    return n;
                }, this.isHbbTv = (i)=>o.userAgentParser("HbbTV/([1-9]{1}(?:.[0-9]{1}){1,2})", i);
            }
        }
        return ve.default = t, ve;
    }
    var Me = {};
    const Ip = {
        regex: "(?:Tesla/[0-9.]+|QtCarBrowser)",
        device: "car browser",
        models: [
            {
                regex: "QtCarBrowser",
                model: "Model S"
            },
            {
                regex: "Tesla/[0-9.]+",
                model: ""
            }
        ]
    }, Fp = {
        Tesla: Ip
    };
    var Zr;
    function Dp() {
        if (Zr) return Me;
        Zr = 1;
        var d = Me && Me.__importDefault || function(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        };
        Object.defineProperty(Me, "__esModule", {
            value: !0
        });
        const e = d(Fp), r = z(), o = U();
        class l {
            constructor(){
                this.parse = (a)=>{
                    const i = {
                        type: "",
                        brand: "",
                        model: ""
                    };
                    for (const [n, m] of Object.entries(e.default))if (o.userAgentParser(m.regex, a)) {
                        i.type = "car", i.brand = n;
                        for (const g of m.models){
                            const x = o.userAgentParser(g.regex, a);
                            x && (i.model = r.variableReplacement(g.model, x).trim());
                        }
                        break;
                    }
                    return i;
                };
            }
        }
        return Me.default = l, Me;
    }
    var Pe = {};
    const Rp = {
        regex: "Archos.*GAMEPAD([2]?)",
        device: "console",
        model: "Gamepad $1"
    }, Vp = {
        regex: "Xbox",
        device: "console",
        models: [
            {
                regex: "Xbox One",
                model: "Xbox One"
            },
            {
                regex: "Xbox",
                model: "Xbox 360"
            }
        ]
    }, Up = {
        regex: "Nintendo (([3]?DS[i]?)|Wii[U]?|Switch)",
        device: "console",
        model: "$1"
    }, Hp = {
        regex: "OUYA",
        device: "console",
        model: "OUYA"
    }, kp = {
        regex: "Dreamcast",
        device: "console",
        model: "Dreamcast"
    }, Wp = {
        regex: "PlayStation (3|4 Pro|4|Portable|Vita)",
        device: "console",
        model: "PlayStation $1"
    }, Kp = {
        Archos: Rp,
        Microsoft: Vp,
        Nintendo: Up,
        OUYA: Hp,
        Sega: kp,
        Sony: Wp
    };
    var zr;
    function Yp() {
        if (zr) return Pe;
        zr = 1;
        var d = Pe && Pe.__importDefault || function(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        };
        Object.defineProperty(Pe, "__esModule", {
            value: !0
        });
        const e = d(Kp), r = z(), o = U();
        class l {
            constructor(){
                this.parse = (a)=>{
                    const i = {
                        type: "",
                        brand: "",
                        model: ""
                    };
                    for (const [n, m] of Object.entries(e.default)){
                        const s = o.userAgentParser(m.regex, a);
                        if (s) {
                            if (i.type = m.device, i.brand = n, m.model) i.model = r.variableReplacement(m.model, s).trim();
                            else if (m.models) for (const g of m.models){
                                const x = o.userAgentParser(g.regex, a);
                                if (x) {
                                    i.model = r.variableReplacement(g.model, x).trim();
                                    break;
                                }
                            }
                            break;
                        }
                    }
                    return i;
                };
            }
        }
        return Pe.default = l, Pe;
    }
    var Te = {};
    const Qp = {
        regex: "(?:Apple-)?iPod",
        device: "portable media player",
        models: [
            {
                regex: "(?:Apple-)?iPod1[C,]1",
                model: "iPod Touch 1G"
            },
            {
                regex: "(?:Apple-)?iPod2[C,]1",
                model: "iPod Touch 2G"
            },
            {
                regex: "(?:Apple-)?iPod3[C,]1",
                model: "iPod Touch 3"
            },
            {
                regex: "(?:Apple-)?iPod4[C,]1",
                model: "iPod Touch 4"
            },
            {
                regex: "(?:Apple-)?iPod5[C,]1",
                model: "iPod Touch 5"
            },
            {
                regex: "(?:Apple-)?iPod7[C,]1",
                model: "iPod Touch 6"
            },
            {
                regex: "(?:Apple-)?iPod",
                model: "iPod Touch"
            }
        ]
    }, Zp = {
        regex: "COWON ([^;/]+) Build",
        device: "portable media player",
        model: "$1"
    }, zp = {
        regex: "Microsoft ZuneHD",
        device: "portable media player",
        model: "Zune HD"
    }, Jp = {
        device: "portable media player",
        regex: "(SV-MV100)",
        model: "$1"
    }, qp = {
        regex: "YP-(G[SIPB]?1|G[57]0|GB70D)",
        device: "portable media player",
        models: [
            {
                regex: "YP-G[B]?1",
                model: "Galaxy Player 4.0"
            },
            {
                regex: "YP-G70",
                model: "Galaxy Player 5.0"
            },
            {
                regex: "YP-GS1",
                model: "Galaxy Player 3.6"
            },
            {
                regex: "YP-GI1",
                model: "Galaxy Player 4.2"
            },
            {
                regex: "YP-GP1",
                model: "Galaxy Player 5.8 "
            },
            {
                regex: "YP-G50",
                model: "Galaxy Player 50"
            },
            {
                regex: "YP-GB70D",
                model: "Galaxy Player 70 Plus"
            }
        ]
    }, jp = {
        Apple: Qp,
        Cowon: Zp,
        Microsoft: zp,
        Panasonic: Jp,
        Samsung: qp
    };
    var Jr;
    function ev() {
        if (Jr) return Te;
        Jr = 1;
        var d = Te && Te.__importDefault || function(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        };
        Object.defineProperty(Te, "__esModule", {
            value: !0
        });
        const e = d(jp), r = z(), o = U();
        class l {
            constructor(){
                this.parse = (a)=>{
                    const i = {
                        type: "",
                        brand: "",
                        model: ""
                    };
                    for (const [n, m] of Object.entries(e.default)){
                        const s = o.userAgentParser(m.regex, a);
                        if (s) {
                            if (i.type = m.device, i.brand = n, m.model) i.model = r.variableReplacement(m.model, s).trim();
                            else if (m.models) for (const g of m.models){
                                const x = o.userAgentParser(g.regex, a);
                                if (x) {
                                    i.model = r.variableReplacement(g.model, x).trim();
                                    break;
                                }
                            }
                            break;
                        }
                    }
                    return i;
                };
            }
        }
        return Te.default = l, Te;
    }
    var qr;
    function rv() {
        if (qr) return Se;
        qr = 1;
        var d = Se && Se.__importDefault || function(m) {
            return m && m.__esModule ? m : {
                default: m
            };
        };
        Object.defineProperty(Se, "__esModule", {
            value: !0
        });
        const e = d(om()), r = d(rp()), o = d($p()), l = d(Dp()), t = d(Yp()), a = d(ev()), i = [
            t.default,
            l.default,
            e.default,
            o.default,
            a.default,
            r.default
        ];
        class n {
            constructor(){
                this.parse = (s)=>{
                    for (const g of i){
                        const v = new g().parse(s);
                        if (v.type !== "") return v;
                    }
                    return null;
                };
            }
        }
        return Se.default = n, Se;
    }
    var he = {};
    const ov = JSON.parse('[{"regex":"Tizen[ /]?(\\\\d+[\\\\.\\\\d]+)?","name":"Tizen","version":"$1"},{"regex":"Sailfish|Jolla","name":"Sailfish OS","version":""},{"regex":"(?:Ali)?YunOS[ /]?(\\\\d+[\\\\.\\\\d]+)?","name":"YunOS","version":"$1"},{"regex":"(?:Windows Phone (?:OS)?|wds)[ ]?(\\\\d+[\\\\.\\\\d]+)","name":"Windows Phone","version":"$1"},{"regex":"XBLWP7|Windows Phone","name":"Windows Phone","version":""},{"regex":"Windows CE(?: (\\\\d+[\\\\.\\\\d]+))?","name":"Windows CE","version":"$1"},{"regex":"(?:IEMobile|Windows ?Mobile)(?: (\\\\d+[\\\\.\\\\d]+))?","name":"Windows Mobile","version":"$1"},{"regex":"Windows NT 6.2; ARM;","name":"Windows RT","version":""},{"regex":"Windows NT 6.3; ARM;","name":"Windows RT","version":"8.1"},{"regex":"Windows IoT 10.0","name":"Windows IoT","version":"10"},{"regex":"KAIOS(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"KaiOS","version":"$1"},{"regex":"RazoDroiD(?: v(\\\\d+[\\\\.\\\\d]*))?","name":"RazoDroiD","version":"$1"},{"regex":"MildWild(?: CM-(\\\\d+[\\\\.\\\\d]*))?","name":"MildWild","version":"$1"},{"regex":"CyanogenMod(?:[\\\\-/](?:CM)?(\\\\d+[\\\\.\\\\d]*))?","name":"CyanogenMod","version":"$1"},{"regex":"(?:.*_)?MocorDroid(?:(\\\\d+[\\\\.\\\\d]*))?","name":"MocorDroid","version":"$1"},{"regex":"Fire OS(?:/(\\\\d+[\\\\.\\\\d]*))?","name":"Fire OS","version":"$1"},{"regex":"(?:(?:Orca-)?Android|Adr)[ /](?:[a-z]+ )?(\\\\d+[\\\\.\\\\d]*)","name":"Android","version":"$1"},{"regex":"Android|Silk-Accelerated=[a-z]{4,5}","name":"Android","version":""},{"regex":"(?:TwitterAndroid).*[ /](?:[a-z]+ )?(\\\\d+[\\\\.\\\\d]*)","name":"Android","version":"$1"},{"regex":"FB4A.*FBSV/(\\\\d+[\\\\.\\\\d]*);","name":"Android","version":"$1"},{"regex":"BeyondPod|AntennaPod|Podkicker|DoggCatcher|Player FM|okhttp|Podcatcher Deluxe","name":"Android","version":""},{"regex":"AmigaOS[ ]?(\\\\d+[\\\\.\\\\d]+)","name":"AmigaOS","version":"$1"},{"regex":"AmigaOS|AmigaVoyager|Amiga-AWeb","name":"AmigaOS","version":""},{"regex":"ThreadX(?:/(\\\\d+[\\\\.\\\\d]*))?","name":"ThreadX","version":"$1"},{"regex":"Nucleus(?:(?: |/v?)(\\\\d+[\\\\.\\\\d]*))?","name":"MTK / Nucleus","version":"$1"},{"regex":"MTK(?:(?: |/v?)(\\\\d+[\\\\.\\\\d]*))?","name":"MTK / Nucleus","version":"$1"},{"regex":"(Ordissimo|webissimo3)","name":"Ordissimo","version":""},{"regex":"TOS; Linux","name":"TmaxOS","version":""},{"regex":"Maemo","name":"Maemo","version":""},{"regex":"Arch ?Linux(?:[ /\\\\-](\\\\d+[\\\\.\\\\d]+))?","name":"Arch Linux","version":"$1"},{"regex":"VectorLinux(?: package)?(?:[ /\\\\-](\\\\d+[\\\\.\\\\d]+))?","name":"VectorLinux","version":"$1"},{"regex":"Linux; .*((?:Debian|Knoppix|Mint|Ubuntu|Kubuntu|Xubuntu|Lubuntu|Fedora|Red Hat|Mandriva|Gentoo|Sabayon|Slackware|SUSE|CentOS|BackTrack))[ /](\\\\d+[\\\\.\\\\d]+)","name":"$1","version":"$2"},{"regex":"(Debian|Knoppix|Mint|Ubuntu|Kubuntu|Xubuntu|Lubuntu|Fedora|Red Hat|Mandriva|Gentoo|Sabayon|Slackware|SUSE|CentOS|BackTrack)(?:(?: Enterprise)? Linux)?(?:[ /\\\\-](\\\\d+[\\\\.\\\\d]+))?","name":"$1","version":"$2"},{"regex":"(?:webOS|Palm webOS)(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"webOS","version":"$1"},{"regex":"(?:PalmOS|Palm OS)(?:[/ ](\\\\d+[\\\\.\\\\d]+))?|Palm","name":"palmOS","version":"$1"},{"regex":"Xiino(?:.*v\\\\. (\\\\d+[\\\\.\\\\d]+))?","name":"palmOS","version":"$1"},{"regex":"MorphOS(?:[ /](\\\\d+[\\\\.\\\\d]+))?","name":"MorphOS","version":"$1"},{"regex":"CYGWIN_NT-10.0|Windows NT 10.0|Windows 10","name":"Windows","version":"10"},{"regex":"CYGWIN_NT-6.4|Windows NT 6.4|Windows 10","name":"Windows","version":"10"},{"regex":"CYGWIN_NT-6.3|Windows NT 6.3|Windows 8.1","name":"Windows","version":"8.1"},{"regex":"CYGWIN_NT-6.2|Windows NT 6.2|Windows 8","name":"Windows","version":"8"},{"regex":"CYGWIN_NT-6.1|Windows NT 6.1|Windows 7","name":"Windows","version":"7"},{"regex":"CYGWIN_NT-6.0|Windows NT 6.0|Windows Vista","name":"Windows","version":"Vista"},{"regex":"CYGWIN_NT-5.2|Windows NT 5.2|Windows Server 2003 / XP x64","name":"Windows","version":"Server 2003"},{"regex":"CYGWIN_NT-5.1|Windows NT 5.1|Windows XP","name":"Windows","version":"XP"},{"regex":"CYGWIN_NT-5.0|Windows NT 5.0|Windows 2000","name":"Windows","version":"2000"},{"regex":"CYGWIN_NT-4.0|Windows NT 4.0|WinNT|Windows NT","name":"Windows","version":"NT"},{"regex":"CYGWIN_ME-4.90|Win 9x 4.90|Windows ME","name":"Windows","version":"ME"},{"regex":"CYGWIN_98-4.10|Win98|Windows 98","name":"Windows","version":"98"},{"regex":"CYGWIN_95-4.0|Win32|Win95|Windows 95|Windows_95","name":"Windows","version":"95"},{"regex":"Windows 3.1","name":"Windows","version":"3.1"},{"regex":"Windows","name":"Windows","version":""},{"regex":"Haiku","name":"Haiku OS","version":""},{"regex":"CFNetwork/889","name":"iOS","version":"11.1"},{"regex":"CFNetwork/887.*(x86_64)","name":"Mac","version":"10.13"},{"regex":"CFNetwork/887","name":"iOS","version":"11.0"},{"regex":"CFNetwork/811.*(x86_64)","name":"Mac","version":"10.12"},{"regex":"CFNetwork/811","name":"iOS","version":"10.3"},{"regex":"CFNetwork/808\\\\.3","name":"iOS","version":"10.3"},{"regex":"CFNetwork/808\\\\.2","name":"iOS","version":"10.2"},{"regex":"CFNetwork/808\\\\.1","name":"iOS","version":"10.1"},{"regex":"CFNetwork/808\\\\.0","name":"iOS","version":"10.0"},{"regex":"CFNetwork/808","name":"iOS","version":"10"},{"regex":"CFNetwork/758\\\\.4\\\\.3","name":"iOS","version":"9.3.2"},{"regex":"CFNetwork/758\\\\.3\\\\.15","name":"iOS","version":"9.3"},{"regex":"CFNetwork/758\\\\.2\\\\.[78]","name":"iOS","version":"9.2"},{"regex":"CFNetwork/758\\\\.1\\\\.6","name":"iOS","version":"9.1"},{"regex":"CFNetwork/758\\\\.0\\\\.2","name":"iOS","version":"9.0"},{"regex":"CFNetwork/711\\\\.5\\\\.6","name":"iOS","version":"8.4.1"},{"regex":"CFNetwork/711\\\\.4\\\\.6","name":"iOS","version":"8.4"},{"regex":"CFNetwork/711\\\\.3\\\\.18","name":"iOS","version":"8.3"},{"regex":"CFNetwork/711\\\\.2\\\\.23","name":"iOS","version":"8.2"},{"regex":"CFNetwork/711\\\\.1\\\\.1[26]","name":"iOS","version":"8.1"},{"regex":"CFNetwork/711\\\\.0\\\\.6","name":"iOS","version":"8.0"},{"regex":"CFNetwork/672\\\\.1","name":"iOS","version":"7.1"},{"regex":"CFNetwork/672\\\\.0","name":"iOS","version":"7.0"},{"regex":"CFNetwork/609\\\\.1","name":"iOS","version":"6.1"},{"regex":"CFNetwork/60[29]","name":"iOS","version":"6.0"},{"regex":"CFNetwork/548\\\\.1","name":"iOS","version":"5.1"},{"regex":"CFNetwork/548\\\\.0","name":"iOS","version":"5.0"},{"regex":"CFNetwork/485\\\\.13","name":"iOS","version":"4.3"},{"regex":"CFNetwork/485\\\\.12","name":"iOS","version":"4.2"},{"regex":"CFNetwork/485\\\\.10","name":"iOS","version":"4.1"},{"regex":"CFNetwork/485\\\\.2","name":"iOS","version":"4.0"},{"regex":"CFNetwork/467\\\\.12","name":"iOS","version":"3.2"},{"regex":"CFNetwork/459","name":"iOS","version":"3.1"},{"regex":"(?:CPU OS|iPh(?:one)?[ _]OS|iOS)[ _/](\\\\d+(?:[_\\\\.]\\\\d+)*)","name":"iOS","version":"$1"},{"regex":"FBIOS.*FBSV/(\\\\d+[\\\\.\\\\d]*);","name":"iOS","version":"$1"},{"regex":"(?:Apple-)?(?:iPhone|iPad|iPod)(?:.*Mac OS X.*Version/(\\\\d+\\\\.\\\\d+)|; Opera)?","name":"iOS","version":"$1"},{"regex":"Podcasts/(?:[\\\\d\\\\.]+)|Instacast(?:HD)?/(?:\\\\d\\\\.[\\\\d\\\\.abc]+)|Pocket Casts, iOS|Overcast|Castro|Podcat|i[cC]atcher|RSSRadio/","name":"iOS","version":""},{"regex":"iTunes-(iPod|iPad|iPhone)/(?:[\\\\d\\\\.]+)","name":"iOS","version":""},{"regex":"CFNetwork/807","name":"Mac","version":"10.12"},{"regex":"CFNetwork/760","name":"Mac","version":"10.11"},{"regex":"CFNetwork/720","name":"Mac","version":"10.10"},{"regex":"CFNetwork/673","name":"Mac","version":"10.9"},{"regex":"CFNetwork/596","name":"Mac","version":"10.8"},{"regex":"CFNetwork/520","name":"Mac","version":"10.7"},{"regex":"CFNetwork/454","name":"Mac","version":"10.6"},{"regex":"CFNetwork/(?:438|422|339|330|221|220|217)","name":"Mac","version":"10.5"},{"regex":"CFNetwork/12[89]","name":"Mac","version":"10.4"},{"regex":"CFNetwork/1\\\\.2","name":"Mac","version":"10.3"},{"regex":"CFNetwork/1\\\\.1","name":"Mac","version":"10.2"},{"regex":"Mac[ +]OS[ +]X(?:[ /](?:Version )?(\\\\d+(?:[_\\\\.]\\\\d+)+))?","name":"Mac","version":"$1"},{"regex":"Mac (\\\\d+(?:[_\\\\.]\\\\d+)+)","name":"Mac","version":"$1"},{"regex":"Darwin|Macintosh|Mac_PowerPC|PPC|Mac PowerPC|iMac|MacBook","name":"Mac","version":""},{"regex":"CrOS [a-z0-9_]+ .* Chrome/(\\\\d+[\\\\.\\\\d]+)","name":"Chrome OS","version":"$1"},{"regex":"(?:BB10;.+Version|Black[Bb]erry[0-9a-z]+|Black[Bb]erry.+Version)/(\\\\d+[\\\\.\\\\d]+)","name":"BlackBerry OS","version":"$1"},{"regex":"RIM Tablet OS (\\\\d+[\\\\.\\\\d]+)","name":"BlackBerry Tablet OS","version":"$1"},{"regex":"RIM Tablet OS|QNX|Play[Bb]ook","name":"BlackBerry Tablet OS","version":""},{"regex":"BlackBerry","name":"BlackBerry OS","version":""},{"regex":"bPod","name":"BlackBerry OS","version":""},{"regex":"BeOS","name":"BeOS","version":""},{"regex":"Symbian/3.+NokiaBrowser/7\\\\.3","name":"Symbian^3","version":"Anna"},{"regex":"Symbian/3.+NokiaBrowser/7\\\\.4","name":"Symbian^3","version":"Belle"},{"regex":"Symbian/3","name":"Symbian^3","version":""},{"regex":"(?:Series ?60|SymbOS|S60)(?:[ /]?(\\\\d+[\\\\.\\\\d]+|V\\\\d+))?","name":"Symbian OS Series 60","version":"$1"},{"regex":"Series40","name":"Symbian OS Series 40","version":""},{"regex":"SymbianOS/(\\\\d+[\\\\.\\\\d]+)","name":"Symbian OS","version":"$1"},{"regex":"MeeGo|WeTab","name":"MeeGo","version":""},{"regex":"Symbian(?: OS)?|SymbOS","name":"Symbian OS","version":""},{"regex":"Nokia","name":"Symbian","version":""},{"regex":"(?:Mobile|Tablet);.+Firefox/\\\\d+\\\\.\\\\d+","name":"Firefox OS","version":""},{"regex":"RISC OS(?:-NC)?(?:[ /](\\\\d+[\\\\.\\\\d]+))?","name":"RISC OS","version":"$1"},{"regex":"Inferno(?:[ /](\\\\d+[\\\\.\\\\d]+))?","name":"Inferno","version":"$1"},{"regex":"bada(?:[ /](\\\\d+[\\\\.\\\\d]+))","name":"Bada","version":"$1"},{"regex":"bada","name":"Bada","version":""},{"regex":"(?:Brew MP|BREW|BMP)(?:[ /](\\\\d+[\\\\.\\\\d]+))","name":"Brew","version":"$1"},{"regex":"Brew MP|BREW|BMP","name":"Brew","version":""},{"regex":"GoogleTV(?:[ /](\\\\d+[\\\\.\\\\d]+))?","name":"Google TV","version":"$1"},{"regex":"AppleTV(?:/?(\\\\d+[\\\\.\\\\d]+))?","name":"Apple TV","version":"$1"},{"regex":"WebTV/(\\\\d+[\\\\.\\\\d]+)","name":"WebTV","version":"$1"},{"regex":"RemixOS 5.1.1","name":"Remix OS","version":"1"},{"regex":"RemixOS 6.0","name":"Remix OS","version":"2"},{"regex":"RemixOS","name":"Remix OS","version":""},{"regex":"(?:SunOS|Solaris)(?:[/ ](\\\\d+[\\\\.\\\\d]+))?","name":"Solaris","version":"$1"},{"regex":"AIX(?:[/ ]?(\\\\d+[\\\\.\\\\d]+))?","name":"AIX","version":"$1"},{"regex":"HP-UX(?:[/ ]?(\\\\d+[\\\\.\\\\d]+))?","name":"HP-UX","version":"$1"},{"regex":"FreeBSD(?:[/ ]?(\\\\d+[\\\\.\\\\d]+))?","name":"FreeBSD","version":"$1"},{"regex":"NetBSD(?:[/ ]?(\\\\d+[\\\\.\\\\d]+))?","name":"NetBSD","version":"$1"},{"regex":"OpenBSD(?:[/ ]?(\\\\d+[\\\\.\\\\d]+))?","name":"OpenBSD","version":"$1"},{"regex":"DragonFly(?:[/ ]?(\\\\d+[\\\\.\\\\d]+))?","name":"DragonFly","version":"$1"},{"regex":"Syllable(?:[/ ]?(\\\\d+[\\\\.\\\\d]+))?","name":"Syllable","version":"$1"},{"regex":"IRIX(?:;64)?(?:[/ ]?(\\\\d+[\\\\.\\\\d]+))","name":"IRIX","version":"$1"},{"regex":"OSF1(?:[/ ]?v?(\\\\d+[\\\\.\\\\d]+))?","name":"OSF1","version":"$1"},{"regex":"Nintendo (Wii|Switch)","name":"Nintendo","version":"$1"},{"regex":"PlayStation ?([3|4])","name":"PlayStation","version":"$1"},{"regex":"Xbox|KIN\\\\.(?:One|Two)","name":"Xbox","version":"360"},{"regex":"Nitro|Nintendo ([3]?DS[i]?)","name":"Nintendo Mobile","version":"$1"},{"regex":"PlayStation ((?:Portable|Vita))","name":"PlayStation Portable","version":"$1"},{"regex":"OS/2","name":"OS/2","version":""},{"regex":"Linux(?:OS)?[^a-z]","name":"GNU/Linux","version":""}]');
    var jr;
    function lv() {
        if (jr) return he;
        jr = 1;
        var d = he && he.__importDefault || function(m) {
            return m && m.__esModule ? m : {
                default: m
            };
        };
        Object.defineProperty(he, "__esModule", {
            value: !0
        });
        const e = d(ov), r = de(), o = z(), l = U(), t = [
            "AmigaOS",
            "IBM",
            "GNU/Linux",
            "Mac",
            "Unix",
            "Windows",
            "BeOS",
            "Chrome OS"
        ], a = {
            AIX: "AIX",
            AND: "Android",
            AMG: "AmigaOS",
            ATV: "Apple TV",
            ARL: "Arch Linux",
            BTR: "BackTrack",
            SBA: "Bada",
            BEO: "BeOS",
            BLB: "BlackBerry OS",
            QNX: "BlackBerry Tablet OS",
            BMP: "Brew",
            CES: "CentOS",
            COS: "Chrome OS",
            CYN: "CyanogenMod",
            DEB: "Debian",
            DFB: "DragonFly",
            FED: "Fedora",
            FOS: "Firefox OS",
            FIR: "Fire OS",
            BSD: "FreeBSD",
            GNT: "Gentoo",
            GTV: "Google TV",
            HPX: "HP-UX",
            HAI: "Haiku OS",
            IRI: "IRIX",
            INF: "Inferno",
            KOS: "KaiOS",
            KNO: "Knoppix",
            KBT: "Kubuntu",
            LIN: "GNU/Linux",
            LBT: "Lubuntu",
            VLN: "VectorLinux",
            MAC: "Mac",
            MAE: "Maemo",
            MDR: "Mandriva",
            SMG: "MeeGo",
            MCD: "MocorDroid",
            MIN: "Mint",
            MLD: "MildWild",
            MOR: "MorphOS",
            NBS: "NetBSD",
            MTK: "MTK / Nucleus",
            WII: "Nintendo",
            NDS: "Nintendo Mobile",
            OS2: "OS/2",
            T64: "OSF1",
            OBS: "OpenBSD",
            ORD: "Ordissimo",
            PSP: "PlayStation Portable",
            PS3: "PlayStation",
            RHT: "Red Hat",
            ROS: "RISC OS",
            REM: "Remix OS",
            RZD: "RazoDroiD",
            SAB: "Sabayon",
            SSE: "SUSE",
            SAF: "Sailfish OS",
            SLW: "Slackware",
            SOS: "Solaris",
            SYL: "Syllable",
            SYM: "Symbian",
            SYS: "Symbian OS",
            S40: "Symbian OS Series 40",
            S60: "Symbian OS Series 60",
            SY3: "Symbian^3",
            TDX: "ThreadX",
            TIZ: "Tizen",
            UBT: "Ubuntu",
            WTV: "WebTV",
            WIN: "Windows",
            WCE: "Windows CE",
            WIO: "Windows IoT",
            WMO: "Windows Mobile",
            WPH: "Windows Phone",
            WRT: "Windows RT",
            XBX: "Xbox",
            XBT: "Xubuntu",
            YNS: "YunOs",
            IOS: "iOS",
            POS: "palmOS",
            WOS: "webOS"
        }, i = {
            Android: [
                "AND",
                "CYN",
                "FIR",
                "REM",
                "RZD",
                "MLD",
                "MCD",
                "YNS"
            ],
            AmigaOS: [
                "AMG",
                "MOR"
            ],
            "Apple TV": [
                "ATV"
            ],
            BlackBerry: [
                "BLB",
                "QNX"
            ],
            Brew: [
                "BMP"
            ],
            BeOS: [
                "BEO",
                "HAI"
            ],
            "Chrome OS": [
                "COS"
            ],
            "Firefox OS": [
                "FOS",
                "KOS"
            ],
            "Gaming Console": [
                "WII",
                "PS3"
            ],
            "Google TV": [
                "GTV"
            ],
            IBM: [
                "OS2"
            ],
            iOS: [
                "IOS"
            ],
            "RISC OS": [
                "ROS"
            ],
            "GNU/Linux": [
                "LIN",
                "ARL",
                "DEB",
                "KNO",
                "MIN",
                "UBT",
                "KBT",
                "XBT",
                "LBT",
                "FED",
                "RHT",
                "VLN",
                "MDR",
                "GNT",
                "SAB",
                "SLW",
                "SSE",
                "CES",
                "BTR",
                "SAF",
                "ORD"
            ],
            Mac: [
                "MAC"
            ],
            "Mobile Gaming Console": [
                "PSP",
                "NDS",
                "XBX"
            ],
            "Real-time OS": [
                "MTK",
                "TDX"
            ],
            "Other Mobile": [
                "WOS",
                "POS",
                "SBA",
                "TIZ",
                "SMG",
                "MAE"
            ],
            Symbian: [
                "SYM",
                "SYS",
                "SY3",
                "S60",
                "S40"
            ],
            Unix: [
                "SOS",
                "AIX",
                "HPX",
                "BSD",
                "NBS",
                "OBS",
                "DFB",
                "SYL",
                "IRI",
                "T64",
                "INF"
            ],
            WebTV: [
                "WTV"
            ],
            Windows: [
                "WIN"
            ],
            "Windows Mobile": [
                "WPH",
                "WMO",
                "WCE",
                "WRT",
                "WIO"
            ]
        };
        class n {
            constructor(s){
                this.options = {
                    versionTruncation: 1
                }, this.parse = (g)=>{
                    const x = {
                        name: "",
                        version: "",
                        platform: this.parsePlatform(g)
                    };
                    for (const v of e.default){
                        const T = l.userAgentParser(v.regex, g);
                        if (T) return x.name = o.variableReplacement(v.name, T), x.version = r.formatVersion(o.variableReplacement(v.version, T), this.options.versionTruncation), x.name === "lubuntu" && (x.name = "Lubuntu"), x.name === "debian" && (x.name = "Debian"), x.name === "YunOS" && (x.name = "YunOs"), x;
                    }
                    return null;
                }, this.parsePlatform = (g)=>l.userAgentParser("arm", g) ? "ARM" : l.userAgentParser("WOW64|x64|win64|amd64|x86_64", g) ? "x64" : l.userAgentParser("i[0-9]86|i86pc", g) ? "x86" : "", this.options = Object.assign(Object.assign({}, this.options), s);
            }
        }
        return he.default = n, n.getDesktopOsArray = ()=>t, n.getOsFamily = (m)=>{
            const s = n.getOsShortName(m);
            for (const [g, x] of Object.entries(i))if (x.includes(s)) return g;
            return "";
        }, n.getOsShortName = (m)=>{
            for (const [s, g] of Object.entries(a))if (g === m) return s;
            return "";
        }, he;
    }
    var be = {};
    const dv = [
        "MDDR(JS)?",
        "MDDC(JS)?",
        "MDDS(JS)?"
    ], av = [
        "MAAR(JS)?"
    ], tv = [
        "MASE(JS)?",
        "MASP(JS)?",
        "MASA(JS)?"
    ], iv = [
        "MAAU",
        "NP0[26789]",
        "ASJB",
        "ASU2(JS)?"
    ], nv = [
        "MASM(JS)?",
        "SMJB"
    ], mv = [
        "MALC(JS)?",
        "MALE(JS)?",
        "MALN(JS)?",
        "LCJB",
        "LEN2"
    ], sv = [
        "MATM(JS)?",
        "MATB(JS)?",
        "MATP(JS)?",
        "TNJB",
        "TAJB"
    ], gv = [
        "MAMD"
    ], xv = [
        "MAMI(JS)?",
        "MAM3"
    ], cv = [
        "MAGW(JS)?"
    ], uv = [
        "MAFS(JS)?",
        "FSJB"
    ], Sv = [
        "CPDTDF",
        "CPNTDF(JS?)",
        "CMNTDF(JS)?",
        "CMDTDF(JS)?"
    ], Av = [
        "HPCMHP",
        "HPNTDF(JS)?",
        "HPDTDF(JS)?"
    ], pv = [
        "MANM(JS)?"
    ], vv = [
        "Ordissimo",
        "webissimo3"
    ], Mv = {
        Dell: dv,
        Acer: av,
        Sony: tv,
        Asus: iv,
        Samsung: nv,
        Lenovo: mv,
        Toshiba: sv,
        Medion: gv,
        MSI: xv,
        Gateway: cv,
        Fujitsu: uv,
        Compaq: Sv,
        HP: Av,
        Hyrican: pv,
        Ordissimo: vv
    };
    var eo;
    function Pv() {
        if (eo) return be;
        eo = 1;
        var d = be && be.__importDefault || function(l) {
            return l && l.__esModule ? l : {
                default: l
            };
        };
        Object.defineProperty(be, "__esModule", {
            value: !0
        });
        const e = d(Mv), r = U();
        class o {
            constructor(){
                this.parse = (t)=>{
                    for (const [a, i] of Object.entries(e.default))for (const n of i)if (r.userAgentParser(n, t)) return a;
                    return "";
                };
            }
        }
        return be.default = o, be;
    }
    const Tv = JSON.parse(`[{"regex":"360Spider(-Image|-Video)?","name":"360Spider","category":"Search bot","url":"http://www.so.com/help/help_3_2.html","producer":{"name":"Online Media Group, Inc.","url":""}},{"regex":"Aboundex","name":"Aboundexbot","category":"Search bot","url":"http://www.aboundex.com/crawler/","producer":{"name":"Aboundex.com","url":"http://www.aboundex.com"}},{"regex":"AcoonBot","name":"Acoon","category":"Search bot","url":"http://www.acoon.de/robot.asp","producer":{"name":"Acoon GmbH","url":"http://www.acoon.de"}},{"regex":"AddThis\\\\.com","name":"AddThis.com","category":"Social Media Agent","url":"","producer":{"name":"Clearspring Technologies, Inc.","url":"http://www.clearspring.com"}},{"regex":"AhrefsBot","name":"aHrefs Bot","category":"Crawler","url":"http://ahrefs.com/robot","producer":{"name":"Ahrefs Pte Ltd","url":"http://ahrefs.com/robot"}},{"regex":"ia_archiver|alexabot|verifybot","name":"Alexa Crawler","category":"Search bot","url":"https://alexa.zendesk.com/hc/en-us/sections/200100794-Crawlers","producer":{"name":"Alexa Internet","url":"http://www.alexa.com"}},{"regex":"alexa site audit","name":"Alexa Site Audit","category":"Site Monitor","url":"http://www.alexa.com/help/webmasters","producer":{"name":"Alexa Internet","url":"http://www.alexa.com"}},{"regex":"Amazon[ -]Route ?53[ -]Health[ -]Check[ -]Service","name":"Amazon Route53 Health Check","category":"Service Agent","producer":{"name":"Amazon Web Services","url":"https://aws.amazon.com/"}},{"regex":"AmorankSpider","name":"Amorank Spider","category":"Crawler","url":"http://amorank.com/webcrawler.html","producer":{"name":"Amorank","url":"http://www.amorank.com"}},{"regex":"ApacheBench","name":"ApacheBench","category":"Benchmark","url":"https://httpd.apache.org/docs/2.4/programs/ab.html","producer":{"name":"The Apache Software Foundation","url":"http://www.apache.org/foundation/"}},{"regex":"Applebot","name":"Applebot","category":"Crawler","url":"http://www.apple.com/go/applebot","producer":{"name":"Apple Inc","url":"http://www.apple.com"}},{"regex":"Arachni","name":"Arachni","category":"Security Checker","url":"http://www.arachni-scanner.com","producer":{"name":"Sarosys LLC","url":"http://www.sarosys.com/"}},{"regex":"AspiegelBot","name":"AspiegelBot","category":"Crawler","url":"https://aspiegel.com/","producer":{"name":"Huawei","url":"https://www.huawei.com/"}},{"regex":"Castro 2, Episode Duration Lookup","name":"Castro 2","category":"Service Agent","url":"http://supertop.co/castro/","producer":{"name":"Supertop","url":"http://supertop.co"}},{"regex":"Curious George","name":"Analytics SEO Crawler","category":"Crawler","url":"http://www.analyticsseo.com/crawler","producer":{"name":"Analytics SEO","url":"http://www.analyticsseo.com"}},{"regex":"archive\\\\.org_bot|special_archiver","name":"archive.org bot","category":"Crawler","url":"http://www.archive.org/details/archive.org_bot","producer":{"name":"The Internet Archive","url":"http://www.archive.org"}},{"regex":"Ask Jeeves/Teoma","name":"Ask Jeeves","category":"Search bot","url":"","producer":{"name":"Ask Jeeves Inc.","url":"http://www.ask.com"}},{"regex":"Backlink-Check\\\\.de","name":"Backlink-Check.de","category":"Crawler","url":"http://www.backlink-check.de/bot.html","producer":{"name":"Mediagreen Medienservice","url":"http://www.backlink-check.de"}},{"regex":"BacklinkCrawler","name":"BacklinkCrawler","category":"Crawler","url":"http://www.backlinktest.com/crawler.html","producer":{"name":"2.0Promotion GbR","url":"http://www.backlinktest.com"}},{"regex":"baiduspider(-image)?|baidu Transcoder|baidu.*spider","name":"Baidu Spider","category":"Search bot","url":"http://www.baidu.com/search/spider.htm","producer":{"name":"Baidu","url":"http://www.baidu.com"}},{"regex":"BazQux","name":"BazQux Reader","url":"https://bazqux.com/fetcher","category":"Feed Fetcher","producer":{"name":"","url":""}},{"regex":"MSNBot|msrbot|bingbot|BingPreview|msnbot-(UDiscovery|NewsBlogs)|adidxbot","name":"BingBot","category":"Search bot","url":"http://search.msn.com/msnbot.htmn","producer":{"name":"Microsoft Corporation","url":"http://www.microsoft.com"}},{"regex":"Blekkobot","name":"Blekkobot","category":"Search bot","url":"http://blekko.com/about/blekkobot","producer":{"name":"Blekko","url":"http://blekko.com"}},{"regex":"BLEXBot(Test)?","name":"BLEXBot Crawler","category":"Crawler","url":"http://webmeup-crawler.com","producer":{"name":"WebMeUp","url":"http://webmeup.com"}},{"regex":"Bloglovin","name":"Bloglovin","url":"http://www.bloglovin.com","category":"Feed Fetcher","producer":{"name":"","url":""}},{"regex":"Blogtrottr","name":"Blogtrottr","url":"","category":"Feed Fetcher","producer":{"name":"Blogtrottr Ltd","url":"https://blogtrottr.com/"}},{"regex":"BoardReader Blog Indexer","name":"BoardReader Blog Indexer","category":"Crawler","producer":{"name":"BoardReader","url":"http://boardreader.com/"}},{"regex":"BountiiBot","name":"Bountii Bot","category":"Search bot","url":"http://bountii.com/contact.php","producer":{"name":"Bountii Inc.","url":"http://bountii.com"}},{"regex":"Browsershots","name":"Browsershots","category":"Service Agent","url":"http://browsershots.org/faq","producer":{"name":"Browsershots.org","url":"http://browsershots.org"}},{"regex":"BUbiNG","name":"BUbiNG","category":"Crawler","url":"http://law.di.unimi.it/BUbiNG.html","producer":{"name":"The Laboratory for Web Algorithmics (LAW)","url":"http://law.di.unimi.it/software.php#buging"}},{"regex":"(?<!HTC)[ _]Butterfly/","name":"Butterfly Robot","category":"Search bot","url":"http://labs.topsy.com/butterfly","producer":{"name":"Topsy Labs","url":"http://labs.topsy.com"}},{"regex":"CareerBot","name":"CareerBot","category":"Crawler","url":"http://www.career-x.de/bot.html","producer":{"name":"career-x GmbH","url":"http://www.career-x.de"}},{"regex":"CCBot","name":"ccBot crawler","category":"Crawler","url":"http://commoncrawl.org/faq/","producer":{"name":"reddit inc.","url":"http://www.reddit.com"}},{"regex":"Cliqzbot","name":"Cliqzbot","category":"Crawler","url":"http://cliqz.com/company/cliqzbot","producer":{"name":"10betterpages GmbH","url":"http://cliqz.com"}},{"regex":"Cloudflare-AMP","name":"CloudFlare AMP Fetcher","category":"Crawler","url":"https://amp.cloudflare.com/doc/fetcher.html","producer":{"name":"CloudFlare","url":"http://www.cloudflare.com"}},{"regex":"CloudFlare-AlwaysOnline","name":"CloudFlare Always Online","category":"Site Monitor","url":"http://www.cloudflare.com/always-online","producer":{"name":"CloudFlare","url":"http://www.cloudflare.com"}},{"regex":"coccoc|coccocbot(-ads|-fast|-image|-shopping|-web)?","name":"Cốc Cốc Bot","url":"https://help.coccoc.com/en/search-engine/coccoc-robots","category":"Search bot","producer":{"name":"Cốc Cốc","url":"https://coccoc.com/"}},{"regex":"collectd","name":"Collectd","url":"https://collectd.org/","category":"Site Monitor","producer":{"name":"Collectd","url":"https://collectd.org/"}},{"regex":"CommaFeed","name":"CommaFeed","url":"http://www.commafeed.com","category":"Feed Fetcher","producer":{"name":"","url":""}},{"regex":"CSS Certificate Spider","name":"CSS Certificate Spider","category":"Crawler","url":"http://www.css-security.com/certificatespider/","producer":{"name":"Certified Security Solutions","url":"https://www.css-security.com/company/about-us/"}},{"regex":"Datadog Agent","name":"Datadog Agent","url":"https://github.com/DataDog/dd-agent","category":"Site Monitor","producer":{"name":"Datadog","url":"https://www.datadoghq.com/"}},{"regex":"Datanyze","name":"Datanyze","url":"","category":"Crawler","producer":{"name":"Datanyze","url":"https://www.datanyze.com"}},{"regex":"Dataprovider","name":"Dataprovider","category":"Crawler","url":"","producer":{"name":"Dataprovider B.V.","url":"https://www.dataprovider.com/"}},{"regex":"Daum(oa)?[ /][0-9]","name":"Daum","category":"Search bot","url":"http://tab.search.daum.net/aboutWebSearch_en.html","producer":{"name":"Daum Communications Corp.","url":"http://www.kakaocorp.com/main"}},{"regex":"Dazoobot","name":"Dazoobot","category":"Search bot","url":"","producer":{"name":"DAZOO.FR","url":"http://dazoo.fr"}},{"regex":"discobot(-news)?","name":"Discobot","category":"Search bot","url":"http://discoveryengine.com/discobot.html","producer":{"name":"Discovery Engine","url":"http://discoveryengine.com"}},{"regex":"Domain Re-Animator Bot|support@domainreanimator.com","name":"Domain Re-Animator Bot","category":"Crawler","url":"","producer":{"name":"Domain Re-Animator, LLC","url":"http://domainreanimator.com"}},{"regex":"DotBot","name":"DotBot","category":"Crawler","url":"http://www.opensiteexplorer.org/dotbot","producer":{"name":"SEOmoz, Inc.","url":"http://moz.com/"}},{"regex":"DuckDuck(?:Go-Favicons-)?Bot","name":"DuckDuckGo Bot","category":"Search bot","url":"https://duckduckgo.com/duckduckbot","producer":{"name":"DuckDuckGo","url":"https://duckduckgo.com/"}},{"regex":"EasouSpider","name":"Easou Spider","category":"Search bot","url":"http://www.easou.com/search/spider.html","producer":{"name":"easou ICP","url":"http://www.easou.com"}},{"regex":"eCairn-Grabber","name":"eCairn-Grabber","category":"Crawler","producer":{"name":"eCairn","url":"https://ecairn.com"}},{"regex":"EMail Exractor","name":"EMail Exractor","category":"Crawler","url":"","producer":{"name":"","url":""}},{"regex":"evc-batch","name":"evc-batch","category":"Crawler","url":"","producer":{"name":"eVenture Capital Partners II, LLC","url":"http://www.eventures.vc/"}},{"regex":"Exabot(-Thumbnails|-Images)?|ExaleadCloudview","name":"ExaBot","category":"Crawler","url":"http://www.exabot.com/go/robot","producer":{"name":"Dassault Systèmes","url":"http://www.3ds.com"}},{"regex":"ExactSeek Crawler","name":"ExactSeek Crawler","category":"Search bot","url":"http://www.exactseek.com","producer":{"name":"Jayde Online, Inc.","url":"http://www.jaydeonlineinc.com"}},{"regex":"Ezooms","name":"Ezooms","category":"Crawler","url":"","producer":{"name":"SEOmoz, Inc.","url":"http://moz.com/"}},{"regex":"facebookexternalhit|facebookplatform|facebookexternalua","name":"Facebook External Hit","category":"Social Media Agent","url":"https://www.facebook.com/externalhit_uatext.php","producer":{"name":"Facebook","url":"http://www.facebook.com"}},{"regex":"Feedbin","name":"Feedbin","url":"http://feedbin.com/","category":"Feed Fetcher","producer":{"name":"","url":""}},{"regex":"FeedBurner","name":"FeedBurner","url":"http://www.feedburner.com","category":"Feed Fetcher","producer":{"name":"","url":""}},{"regex":"Feed Wrangler","name":"Feed Wrangler","url":"https://feedwrangler.net/","category":"Feed Fetcher","producer":{"name":"David Smith & Developing Perspective, LLC","url":"https://david-smith.org"}},{"regex":"(Meta)?Feedly(Bot|App)?","name":"Feedly","url":"http://www.feedly.com","category":"Feed Fetcher","producer":{"name":"","url":""}},{"regex":"Feedspot","name":"Feedspot","url":"http://www.feedspot.com","category":"Feed Fetcher","producer":{"name":"","url":""}},{"regex":"Fever/[0-9]","name":"Fever","url":"http://feedafever.com/","category":"Feed Fetcher","producer":{"name":"","url":""}},{"regex":"FlipboardProxy|FlipboardRSS","name":"Flipboard","url":"http://flipboard.com/browserproxy","category":"Feed Fetcher","producer":{"name":"Flipboard","url":"http://flipboard.com/"}},{"regex":"Findxbot","name":"Findxbot","category":"Crawler","url":"http://www.findxbot.com"},{"regex":"FreshRSS","name":"FreshRSS","category":"Feed Fetcher","url":"https://freshrss.org/"},{"regex":"Genieo","name":"Genieo Web filter","category":"","url":"http://www.genieo.com/webfilter.html","producer":{"name":"Genieo","url":"http://www.genieo.com"}},{"regex":"GigablastOpenSource","name":"Gigablast","category":"Search bot","url":"https://github.com/gigablast/open-source-search-engine","producer":{"name":"Matt Wells","url":"http://www.gigablast.com/faq.html"}},{"regex":"Gluten Free Crawler","name":"Gluten Free Crawler","category":"Crawler","url":"http://glutenfreepleasure.com/","producer":{"name":"","url":""}},{"regex":"ichiro/mobile goo","name":"Goo","category":"Search bot","url":"http://search.goo.ne.jp/option/use/sub4/sub4-1","producer":{"name":"NTT Resonant","url":"http://goo.ne.jp"}},{"regex":"Google Favicon","name":"Google Favicon","category":"Crawler"},{"regex":"Google Search Console","name":"Google Search Console","category":"Crawler","url":"https://search.google.com/search-console/about","producer":{"name":"Google Inc.","url":"http://www.google.com"}},{"regex":"Google Page Speed Insights","name":"Google PageSpeed Insights","category":"Site Monitor","url":"http://developers.google.com/speed/pagespeed/insights/","producer":{"name":"Google Inc.","url":"http://www.google.com"}},{"regex":"google_partner_monitoring","name":"Google Partner Monitoring","category":"Site Monitor","url":"","producer":{"name":"Google Inc.","url":"http://www.google.com"}},{"regex":"Google-Cloud-Scheduler","name":"Google Cloud Scheduler","category":"Crawler","url":"https://cloud.google.com/scheduler","producer":{"name":"Google Inc.","url":"https://www.google.com"}},{"regex":"Google-Structured-Data-Testing-Tool","name":"Google Structured Data Testing Tool","category":"Validator","url":"https://search.google.com/structured-data/testing-tool","producer":{"name":"Google Inc.","url":"http://www.google.com"}},{"regex":"GoogleStackdriverMonitoring","name":"Google Stackdriver Monitoring","category":"Site Monitor","url":"https://cloud.google.com/monitoring","producer":{"name":"Google Inc.","url":"https://www.google.com"}},{"regex":"via ggpht\\\\.com GoogleImageProxy","name":"Gmail Image Proxy","category":"Crawler","url":"","producer":{"name":"Google Inc.","url":"http://www.google.com"}},{"regex":"SeznamEmailProxy","name":"Seznam Email Proxy","category":"Crawler","url":"","producer":{"name":"Seznam.cz, a.s.","url":"http://www.seznam.cz/"}},{"regex":"Seznam-Zbozi-robot","name":"Seznam Zbozi.cz","category":"Crawler","url":"","producer":{"name":"Seznam.cz, a.s.","url":"https://www.zbozi.cz/"}},{"regex":"Heurekabot-Feed","name":"Heureka Feed","category":"Crawler","url":"https://sluzby.heureka.cz/napoveda/heurekabot/","producer":{"name":"Heureka.cz, a.s.","url":"https://www.heureka.cz/"}},{"regex":"ShopAlike","name":"ShopAlike","category":"Crawler","url":"","producer":{"name":"Visual Meta","url":"https://www.shopalike.cz/"}},{"regex":"AdsBot-Google(-Mobile)?|Adwords-(DisplayAds|Express|Instant)|Google Web Preview|Google[ -]Publisher[ -]Plugin|Google-(Adwords|AMPHTML|Assess|HotelAdsVerifier|Read-Aloud|Shopping-Quality|Site-Verification|speakr|Test|Youtube-Links)|(APIs|DuplexWeb|Feedfetcher|Mediapartners)-Google|Googlebot(-Mobile|-Image|-Video|-News)?|GoogleProducer|Google.*/\\\\+/web/snippet","name":"Googlebot","category":"Search bot","url":"http://www.google.com/bot.html","producer":{"name":"Google Inc.","url":"http://www.google.com"}},{"regex":"heritrix","name":"Heritrix","category":"Crawler","url":"https://webarchive.jira.com/wiki/display/Heritrix/Heritrix","producer":{"name":"The Internet Archive","url":"http://www.archive.org"}},{"regex":"HubSpot ","name":"HubSpot","category":"Crawler","producer":{"name":"HubSpot Inc.","url":"https://www.hubspot.com"}},{"regex":"HTTPMon","name":"HTTPMon","category":"Site Monitor","url":"http://www.httpmon.com","producer":{"name":"towards GmbH","url":"http://www.towards.ch/"}},{"regex":"ICC-Crawler","name":"ICC-Crawler","category":"Crawler","url":"http://www.nict.go.jp/en/univ-com/plan/crawl.html","producer":{"name":"","url":""}},{"regex":"inoreader.com","name":"inoreader","category":"Feed Reader","url":"https://www.inoreader.com"},{"regex":"iisbot","name":"IIS Site Analysis","category":"Crawler","url":"http://www.iis.net/iisbot.html","producer":{"name":"Microsoft Corporation","url":"http://www.microsoft.com"}},{"regex":"ips-agent","name":"IPS Agent","category":"crawler","producer":{"name":"VeriSign, Inc","url":"http://www.verisign.com/"}},{"regex":"IP-Guide\\\\.com","name":"IP-Guide Crawler","category":"Crawler","url":"","producer":{"name":"","url":"https://ip-guide.com"}},{"regex":"kouio","name":"Kouio","url":"http://kouio.com/","category":"Feed Fetcher","producer":{"name":"","url":""}},{"regex":"larbin","name":"Larbin web crawler","category":"Crawler","url":"http://larbin.sourceforge.net","producer":{"name":"","url":""}},{"regex":"([A-z0-9]*)-Lighthouse","name":"Lighthouse","category":"Site Monitor","url":"https://developers.google.com/web/tools/lighthouse","producer":{"name":"Lighthouse","url":"https://developers.google.com/web/tools/lighthouse"}},{"regex":"linkdexbot(-mobile)?|linkdex\\\\.com","name":"Linkdex Bot","category":"Search bot","url":"http://www.linkdex.com/bots","producer":{"name":"Mojeek Ltd.","url":"http://www.mojeek.com"}},{"regex":"LinkedInBot","name":"LinkedIn Bot","category":"Social Media Agent","url":"http://www.linkedin.com","producer":{"name":"LinkedIn","url":"http://www.linkedin.com"}},{"regex":"ltx71","name":"LTX71","url":"http://ltx71.com/","producer":{"name":"","url":""}},{"regex":"Mail\\\\.RU(_Bot)?","name":"Mail.Ru Bot","category":"Search bot","url":"http://help.mail.ru/webmaster/indexing/robots/types_robots","producer":{"name":"Mail.Ru Group","url":"http://corp.mail.ru"}},{"regex":"magpie-crawler","name":"Magpie-Crawler","category":"Social Media Agent","url":"http://www.brandwatch.com/magpie-crawler/","producer":{"name":"Brandwatch","url":"http://www.brandwatch.com"}},{"regex":"MagpieRSS","name":"MagpieRSS","url":"http://magpierss.sourceforge.net/","category":"Feed Parser","producer":{"name":"","url":""}},{"regex":"masscan","name":"masscan","url":"https://github.com/robertdavidgraham/masscan","category":"Crawler","producer":{"name":"Robert Graham","url":"https://github.com/robertdavidgraham"}},{"regex":"Mastodon/","name":"Mastodon Bot","category":"Social Media Agent"},{"regex":"meanpathbot","name":"Meanpath Bot","category":"Search bot","url":"http://www.meanpath.com/meanpathbot.html","producer":{"name":"Meanpath","url":"http://www.meanpath.com"}},{"regex":"MetaJobBot","name":"MetaJobBot","category":"Crawler","url":"http://www.metajob.at/the/crawler","producer":{"name":"MetaJob","url":"http://www.metajob.at"}},{"regex":"MetaInspector","name":"MetaInspector","category":"Crawler","url":"https://github.com/jaimeiniesta/metainspector"},{"regex":"MixrankBot","name":"Mixrank Bot","category":"Crawler","url":"http://mixrank.com","producer":{"name":"Online Media Group, Inc.","url":""}},{"regex":"MJ12bot","name":"MJ12 Bot","category":"Search bot","url":"http://majestic12.co.uk/bot.php","producer":{"name":"Majestic-12","url":"http://majestic12.co.uk"}},{"regex":"Mnogosearch","name":"Mnogosearch","category":"Search bot","url":"http://www.mnogosearch.org/","producer":{"name":"Lavtech.Com Corp.","url":""}},{"regex":"MojeekBot","name":"MojeekBot","category":"Search bot","url":"http://www.mojeek.com/bot.html","producer":{"name":"Mojeek Ltd.","url":"http://www.mojeek.com"}},{"regex":"munin","name":"Munin","category":"Site Monitor","url":"http://munin-monitoring.org/","producer":{"name":"Munin","url":"http://munin-monitoring.org/"}},{"regex":"NalezenCzBot","name":"NalezenCzBot","category":"Crawler","url":"http://www.nalezen.cz/about-crawler","producer":{"name":"Jaroslav Kuboš","url":""}},{"regex":"check_http/v","name":"Nagios check_http","category":"Site Monitor","url":"https://nagios.org","producer":{"name":"Nagios Plugins Development Team","url":"https://nagios.org"}},{"regex":"nbertaupete95\\\\(at\\\\)gmail.com","name":"nbertaupete95","category":"Crawler"},{"regex":"Netcraft( Web Server Survey| SSL Server Survey|SurveyAgent)","name":"Netcraft Survey Bot","category":"Search bot","url":"","producer":{"name":"Netcraft","url":"http://www.netcraft.com"}},{"regex":"netEstate NE Crawler","name":"netEstate","category":"Crawler","url":"http://www.website-datenbank.de/Impressum","producer":{"name":"netEstate GmbH","url":"https://www.netestate.de/en/"}},{"regex":"Netvibes","name":"Netvibes","url":"http://www.netvibes.com/","category":"Feed Fetcher","producer":{"name":"","url":""}},{"regex":"NewsBlur .*(Fetcher|Finder)","name":"NewsBlur","url":"http://www.newsblur.com","category":"Feed Fetcher","producer":{"name":"","url":""}},{"regex":"NewsGatorOnline","name":"NewsGator","url":"http://www.newsgator.com","category":"Feed Fetcher","producer":{"name":"","url":""}},{"regex":"nlcrawler","name":"NLCrawler","category":"Crawler","url":"","producer":{"name":"Northern Light","url":"http://northernlight.com"}},{"regex":"Nmap Scripting Engine","name":"Nmap","category":"Security Checker","url":"https://nmap.org/book/nse.html","producer":{"name":"Nmap","url":"https://nmap.org/"}},{"regex":"Nuzzel","name":"Nuzzel","category":"Crawler","producer":{"name":"Nuzzel","url":"https://www.nuzzel.com/"}},{"regex":"Octopus [0-9]","name":"Octopus"},{"regex":"omgili(?:bot)?","name":"Omgili bot","category":"Search bot","url":"http://www.omgili.com/Crawler.html","producer":{"name":"Omgili","url":"http://www.omgili.com"}},{"regex":"OpenindexSpider","name":"Openindex Spider","category":"Search bot","url":"http://www.openindex.io/en/webmasters/spider.html","producer":{"name":"Openindex B.V.","url":"http://www.openindex.io"}},{"regex":"spbot","name":"OpenLinkProfiler","category":"Crawler","url":"http://openlinkprofiler.org/bot","producer":{"name":"Axandra GmbH","url":"http://www.axandra.com"}},{"regex":"OpenWebSpider","name":"OpenWebSpider","category":"Crawler","url":"http://www.openwebspider.org","producer":{"name":"OpenWebSpider Lab","url":"http://lab.openwebspider.org"}},{"regex":"OrangeBot|VoilaBot","name":"Orange Bot","category":"Search bot","url":"http://lemoteur.orange.fr","producer":{"name":"Orange","url":"http://www.orange.fr"}},{"regex":"PaperLiBot","name":"PaperLiBot","category":"Search bot","url":"http://support.paper.li/entries/20023257-what-is-paper-li","producer":{"name":"Smallrivers SA","url":"http://www.paper.li"}},{"regex":"phantomas/","name":"Phantomas","category":"Site Monitor","url":"https://github.com/macbre/phantomas"},{"regex":"phpservermon","name":"PHP Server Monitor","category":"Site Monitor","url":"https://github.com/phpservermon/phpservermon","producer":{"name":"PHP Server Monitor","url":"http://www.phpservermonitor.org/"}},{"regex":"PocketParser","name":"PocketParser","category":"Read-it-later Service","url":"https://getpocket.com/pocketparser_ua","producer":{"name":"Pocket","url":"https://getpocket.com/"}},{"regex":"PritTorrent","name":"PritTorrent","category":"Crawler","url":"https://github.com/astro/prittorrent","producer":{"name":"Bitlove","url":"http://bitlove.org/"}},{"regex":"psbot(-page)?","name":"Picsearch bot","category":"Search bot","url":"http://www.picsearch.com/bot.html","producer":{"name":"Picsearch","url":"http://www.picsearch.com"}},{"regex":"Pingdom\\\\.com","name":"Pingdom Bot","category":"Site Monitor","url":"","producer":{"name":"Pingdom AB","url":"https://www.pingdom.com"}},{"regex":"Quora Link Preview","name":"Quora Link Preview","category":"Crawler","url":"","producer":{"name":"Quora","url":"http://www.quora.com"}},{"regex":"RamblerMail","name":"RamblerMail Image Proxy","category":"Crawler","url":"","producer":{"name":"Rambler&Co","url":"https://rambler-co.ru/"}},{"regex":"QuerySeekerSpider","name":"QuerySeekerSpider","category":"Crawler","url":"http://queryseeker.com/bot.html","producer":{"name":"QueryEye Inc.","url":"http://queryeye.com"}},{"regex":"Qwantify","name":"Qwantify","category":"Crawler","url":"https://www.qwant.com/","producer":{"name":"Qwant Corporation","url":"https://www.qwant.com/"}},{"regex":"Rainmeter","name":"Rainmeter","category":"Crawler","url":"https://www.rainmeter.net"},{"regex":"redditbot","name":"Reddit Bot","category":"Social Media Agent","url":"http://www.reddit.com/feedback","producer":{"name":"reddit inc.","url":"http://www.reddit.com"}},{"regex":"Riddler","name":"Riddler","category":"Security search bot","url":"https://riddler.io/about","producer":{"name":"F-Secure","url":"https://www.f-secure.com"}},{"regex":"rogerbot","name":"Rogerbot","category":"Crawler","url":"http://moz.com/help/pro/what-is-rogerbot-","producer":{"name":"SEOmoz, Inc.","url":"http://moz.com/"}},{"regex":"ROI Hunter","name":"ROI Hunter","category":"Crawler","url":"","producer":{"name":"Roihunter a.s.","url":"http://roihunter.com/"}},{"regex":"SafeDNSBot","name":"SafeDNSBot","category":"Crawler","url":"https://www.safedns.com/searchbot","producer":{"name":"SafeDNS, Inc.","url":"https://www.safedns.com/"}},{"regex":"Scrapy","name":"Scrapy","category":"Crawler","url":"http://scrapy.org"},{"regex":"Screaming Frog SEO Spider","name":"Screaming Frog SEO Spider","category":"Crawler","url":"http://www.screamingfrog.co.uk/seo-spider","producer":{"name":"Screaming Frog Ltd","url":"http://www.screamingfrog.co.uk"}},{"regex":"ScreenerBot","name":"ScreenerBot","category":"Crawler","url":"http://www.screenerbot.com","producer":{"name":"","url":""}},{"regex":"SemrushBot","name":"Semrush Bot","category":"Crawler","url":"http://www.semrush.com/bot.html","producer":{"name":"SEMrush","url":"http://www.semrush.com"}},{"regex":"SensikaBot","name":"Sensika Bot","category":"","url":"","producer":{"name":"Sensika","url":"http://sensika.com"}},{"regex":"SEOENG(World)?Bot","name":"SEOENGBot","category":"Crawler","url":"http://www.seoengine.com/seoengbot.htm","producer":{"name":"SEO Engine","url":"http://www.seoengine.com"}},{"regex":"SEOkicks-Robot","name":"SEOkicks-Robot","category":"Crawler","url":"http://www.seokicks.de/robot.html","producer":{"name":"SEOkicks","url":"https://www.seokicks.de/"}},{"regex":"seoscanners\\\\.net","name":"Seoscanners.net","category":"Crawler","url":""},{"regex":"SkypeUriPreview","name":"Skype URI Preview","category":"Service Agent","url":"","producer":{"name":"Skype Communications S.à.r.l.","url":"https://www.skype.com"}},{"regex":"SeznamBot|SklikBot|Seznam screenshot-generator","name":"Seznam Bot","category":"Search bot","url":"http://www.mapy.cz/cz/seznambot.html","producer":{"name":"Seznam.cz, a.s.","url":"http://www.seznam.cz/"}},{"regex":"shopify-partner-homepage-scraper","name":"Shopify Partner","category":"Crawler","url":"https://www.shopify.com/partners","producer":{"name":"Shopify","url":"https://www.shopify.com/"}},{"regex":"ShopWiki","name":"ShopWiki","category":"Search tools","url":"http://www.shopwiki.com/wiki/Help:Bot","producer":{"name":"ShopWiki Corp.","url":"http://www.shopwiki.com"}},{"regex":"SilverReader","name":"SilverReader","url":"http://silverreader.com","category":"Feed Fetcher","producer":{"name":"","url":""}},{"regex":"SimplePie","name":"SimplePie","url":"http://www.simplepie.org","category":"Feed Parser","producer":{"name":"","url":""}},{"regex":"SISTRIX Crawler","name":"SISTRIX Crawler","category":"Crawler","url":"http://crawler.sistrix.net","producer":{"name":"SISTRIX GmbH","url":"http://www.sistrix.de"}},{"regex":"SISTRIX Optimizer","name":"SISTRIX Optimizer","category":"Crawler","url":"https://optimizer.sistrix.com","producer":{"name":"SISTRIX GmbH","url":"http://www.sistrix.de"}},{"regex":"SiteSucker","name":"SiteSucker","category":"Crawler","url":"http://ricks-apps.com/osx/sitesucker/"},{"regex":"sixy.ch","name":"Sixy.ch","category":"Site Monitor","url":"http://sixy.ch","producer":{"name":"Manuel Kasper","url":"https://neon1.net/"}},{"regex":"Slackbot|Slack-ImgProxy","name":"Slackbot","category":"Crawler","url":"https://api.slack.com/robots","producer":{"name":"Slack Technologies","url":"http://slack.com"}},{"regex":"(Sogou (web|inst|Pic) spider)|New-Sogou-Spider","name":"Sogou Spider","category":"Search bot","url":"http://www.sogou.com/docs/help/webmasters.htm","producer":{"name":"Sohu, Inc.","url":"http://www.sogou.com"}},{"regex":"Sosospider|Sosoimagespider","name":"Soso Spider","category":"Search bot","url":"http://help.soso.com/webspider.htm","producer":{"name":"Tencent Holdings","url":"http://www.soso.com"}},{"regex":"sqlmap/","name":"sqlmap","category":"Security Checker","url":"http://sqlmap.org/","producer":{"name":"sqlmap","url":"http://sqlmap.org/"}},{"regex":"SSL Labs","name":"SSL Labs","category":"Validator","url":"https://www.ssllabs.com/about/assessment.html","producer":{"name":"SSL Labs","url":"https://www.ssllabs.com/about/assessment.html"}},{"regex":"StatusCake","name":"StatusCake","category":"Site Monitor","url":"https://www.statuscake.com","producer":{"name":"StatusCake","url":"https://www.statuscake.com"}},{"regex":"Superfeedr bot","name":"Superfeedr Bot","category":"Feed Fetcher","url":"","producer":{"name":"Superfeedr","url":"https://superfeedr.com/"}},{"regex":"Sparkler/[0-9]","name":"Sparkler","category":"Crawler","url":"https://github.com/USCDataScience/sparkler"},{"regex":"Spinn3r","name":"Spinn3r","category":"Crawler","url":"http://spinn3r.com/robot","producer":{"name":"Tailrank Inc","url":"http://spinn3r.com"}},{"regex":"Sputnik(Image)?Bot","name":"Sputnik Bot","category":"","url":"","producer":{"name":"","url":""}},{"regex":"SurveyBot","name":"Survey Bot","category":"Search bot","url":"http://www.domaintools.com/webmasters/surveybot.php","producer":{"name":"Domain Tools","url":"http://www.domaintools.com"}},{"regex":"TarmotGezgin","name":"Tarmot Gezgin","url":"http://www.tarmot.com/gezgin/","category":"Search bot"},{"regex":"TelegramBot","name":"TelegramBot","url":"https://telegram.org/blog/bot-revolution"},{"regex":"TLSProbe","name":"TLSProbe","url":"https://scan.trustnet.venafi.com/","category":"Security search bot","producer":{"name":"Venafi TrustNet","url":"https://www.venafi.com"}},{"regex":"TinEye-bot","name":"TinEye Crawler","category":"Search bot","url":"http://www.tineye.com/crawler.html","producer":{"name":"Idée Inc.","url":"http://ideeinc.com"}},{"regex":"Tiny Tiny RSS","name":"Tiny Tiny RSS","url":"http://tt-rss.org","category":"Feed Fetcher","producer":{"name":"","url":""}},{"regex":"theoldreader.com","name":"theoldreader","category":"Feed Reader","url":"https://theoldreader.com"},{"regex":"trendictionbot","name":"Trendiction Bot","category":"Crawler","url":"http://www.trendiction.de/bot","producer":{"name":"Talkwalker Inc.","url":"http://www.talkwalker.com"}},{"regex":"TurnitinBot","name":"TurnitinBot","category":"Crawler","url":"http://www.turnitin.com/robot/crawlerinfo.html","producer":{"name":"iParadigms, LLC.","url":"http://www.turnitin.com"}},{"regex":"TweetedTimes Bot","name":"TweetedTimes Bot","category":"Crawler","url":"http://tweetedtimes.com","producer":{"name":"TweetedTimes","url":"http://tweetedtimes.com/"}},{"regex":"TweetmemeBot","name":"Tweetmeme Bot","category":"Crawler","url":"http://tweetmeme.com/","producer":{"name":"Mediasift","url":""}},{"regex":"Twingly Recon","name":"Twingly Recon","category":"Crawler","producer":{"name":"Twingly","url":"https://www.twingly.com"}},{"regex":"Twitterbot","name":"Twitterbot","category":"Social Media Agent","url":"https://dev.twitter.com/docs/cards/getting-started","producer":{"name":"Twitter","url":"http://www.twitter.com"}},{"regex":"UniversalFeedParser","name":"UniversalFeedParser","category":"Feed Fetcher","url":"https://github.com/kurtmckee/feedparser","producer":{"name":"Kurt McKee","url":"https://github.com/kurtmckee"}},{"regex":"via secureurl\\\\.fwdcdn\\\\.com","name":"UkrNet Mail Proxy","category":"Crawler","url":"","producer":{"name":"UkrNet Ltd","url":"https://www.ukr.net/"}},{"regex":"Uptimebot","name":"Uptimebot","category":"Site Monitor","url":"https://uptime.com/uptimebot","producer":{"name":"Uptime","url":"https://uptime.com"}},{"regex":"UptimeRobot","name":"Uptime Robot","category":"Site Monitor","url":"","producer":{"name":"Uptime Robot","url":"http://uptimerobot.com"}},{"regex":"URLAppendBot","name":"URLAppendBot","category":"Crawler","url":"http://www.profound.net/urlappendbot.html","producer":{"name":"Profound Networks","url":"http://www.profound.net"}},{"regex":"Vagabondo","name":"Vagabondo","category":"Crawler","url":"","producer":{"name":"WiseGuys","url":"http://www.wise-guys.nl/"}},{"regex":"vkShare; ","name":"VK Share Button","category":"Crawler","url":"http://vk.com/dev/Share","producer":{"name":"VK","url":"http://vk.com/"}},{"regex":"VSMCrawler","name":"Visual Site Mapper Crawler","category":"Crawler","url":"http://www.visualsitemapper.com/crawler","producer":{"name":"Alentum Software Ltd.","url":"http://www.alentum.com"}},{"regex":"Jigsaw","name":"W3C CSS Validator","category":"Validator","url":"http://jigsaw.w3.org/css-validator","producer":{"name":"W3C","url":"http://www.w3.org"}},{"regex":"W3C_I18n-Checker","name":"W3C I18N Checker","category":"Validator","url":"http://validator.w3.org/i18n-checker","producer":{"name":"W3C","url":"http://www.w3.org"}},{"regex":"W3C-checklink","name":"W3C Link Checker","category":"Validator","url":"http://validator.w3.org/checklink","producer":{"name":"W3C","url":"http://www.w3.org"}},{"regex":"W3C_Validator|Validator.nu","name":"W3C Markup Validation Service","category":"Validator","url":"http://validator.w3.org/services","producer":{"name":"W3C","url":"http://www.w3.org"}},{"regex":"W3C-mobileOK","name":"W3C MobileOK Checker","category":"Validator","url":"http://validator.w3.org/mobile","producer":{"name":"W3C","url":"http://www.w3.org"}},{"regex":"W3C_Unicorn","name":"W3C Unified Validator","category":"Validator","url":"http://validator.w3.org/unicorn","producer":{"name":"W3C","url":"http://www.w3.org"}},{"regex":"Wappalyzer","name":"Wappalyzer","url":"https://github.com/AliasIO/Wappalyzer","producer":{"name":"AliasIO","url":"https://github.com/AliasIO"}},{"regex":"PTST/","name":"WebPageTest","category":"Site Monitor","url":"https://www.webpagetest.org"},{"regex":"WeSEE(:Search)?","name":"WeSEE:Search","category":"Search bot","url":"http://www.wesee.com/bot","producer":{"name":"WeSEE Ltd","url":"http://www.wesee.com"}},{"regex":"WebbCrawler","name":"WebbCrawler","category":"Crawler","url":"http://badcheese.com/crawler.html","producer":{"name":"Steve Webb","url":"http://badcheese.com"}},{"regex":"websitepulse[+ ]checker","name":"WebSitePulse","category":"Site Monitor","url":"http://badcheese.com/crawler.html","producer":{"name":"WebSitePulse","url":"http://www.websitepulse.com/"}},{"regex":"WordPress","name":"WordPress","category":"Service Agent","url":"https://wordpress.org/","producer":{"name":"Wordpress.org","url":"https://wordpress.org/"}},{"regex":"Wotbox","name":"Wotbox","category":"Search bot","url":"http://www.wotbox.com/bot/","producer":{"name":"Wotbox","url":"http://www.wotbox.com"}},{"regex":"XenForo","name":"XenForo","category":"Service Agent","url":"https://xenforo.com/","producer":{"name":"XenForo Ltd.","url":"https://xenforo.com/"}},{"regex":"yacybot","name":"YaCy","category":"Search bot","url":"http://yacy.net/bot.html","producer":{"name":"YaCy","url":"http://yacy.net"}},{"regex":"Yahoo! Slurp|Yahoo!-AdCrawler","name":"Yahoo! Slurp","category":"Search bot","url":"http://help.yahoo.com/ysearch/slurp","producer":{"name":"Yahoo! Inc.","url":"http://www.yahoo.com"}},{"regex":"Yahoo Link Preview|Yahoo:LinkExpander:Slingstone","name":"Yahoo! Link Preview","category":"Crawler","url":"https://help.yahoo.com/kb/mail/yahoo-link-preview-SLN23615.html","producer":{"name":"Yahoo! Inc.","url":"http://www.yahoo.com"}},{"regex":"YahooCacheSystem","name":"Yahoo! Cache System","category":"Crawler","url":"","producer":{"name":"Yahoo! Inc.","url":"http://www.yahoo.com"}},{"regex":"Y!J-BRW","name":"Yahoo! Japan BRW","category":"Crawler","url":"https://www.yahoo-help.jp/app/answers/detail/p/595/a_id/42716/~/ウェブページにアクセスするシステムのユーザーエージェントについて","producer":{"name":"Yahoo! Japan Corp.","url":"https://www.yahoo.co.jp/"}},{"regex":"Yandex(SpravBot|ScreenshotBot|MobileBot|AccessibilityBot|ForDomain|Vertis|Market|Catalog|Calendar|Sitelinks|AdNet|Pagechecker|Webmaster|Media|Video|Bot|Images|Antivirus|Direct|Blogs|Favicons|ImageResizer|Verticals|News(links)?|Metrika|\\\\.Gazeta Bot)|YaDirectFetcher|YandexTurbo|YandexTracker|YandexSearchShop|YandexRCA|YandexPartner|YandexOntoDBAPI|YandexOntoDB|YandexMobileScreenShotBot","name":"Yandex Bot","category":"Search bot","url":"http://www.yandex.com/bots","producer":{"name":"Yandex LLC","url":"http://company.yandex.com"}},{"regex":"Yeti|NaverJapan","name":"Yeti/Naverbot","category":"Search bot","url":"http://help.naver.com/robots/","producer":{"name":"Naver","url":"http://www.naver.com"}},{"regex":"YoudaoBot","name":"Youdao Bot","category":"Search bot","url":"http://www.youdao.com/help/webmaster/spider","producer":{"name":"NetEase, Inc.","url":"http://corp.163.com"}},{"regex":"YOURLS v[0-9]","name":"Yourls","category":"Crawler","url":"http://yourls.org"},{"regex":"YRSpider|YYSpider","name":"Yunyun Bot","category":"Search bot","url":"http://www.yunyun.com/SiteInfo.php?r=about","producer":{"name":"YunYun","url":"http://www.yunyun.com"}},{"regex":"zgrab","name":"zgrab","category":"Security Checker","url":"https://github.com/zmap/zgrab"},{"regex":"Zookabot","name":"Zookabot","category":"Crawler","url":"http://zookabot.com","producer":{"name":"Hwacha ApS","url":"http://hwacha.dk"}},{"regex":"ZumBot","name":"ZumBot","category":"Search bot","url":"http://help.zum.com/inquiry","producer":{"name":"ZUM internet","url":"http://www.zuminternet.com/"}},{"regex":"YottaaMonitor","name":"Yottaa Site Monitor","category":"Site Monitor","url":"http://www.yottaa.com/products/site-monitor","producer":{"name":"Yottaa","url":"http://www.yottaa.com/"}},{"regex":"Yahoo Ad monitoring.*yahoo-ad-monitoring-SLN24857.*","name":"Yahoo Gemini","category":"Crawler","url":"https://help.yahoo.com/kb/yahoo-ad-monitoring-SLN24857.html","producer":{"name":"Yahoo! Inc.","url":"http://www.yahoo.com"}},{"regex":".*Java.*outbrain","name":"Outbrain","category":"Crawler","url":"","producer":{"name":"Outbrain","url":"http://www.outbrain.com/"}},{"regex":"HubPages.*crawlingpolicy","name":"HubPages","category":"Crawler","url":"http://hubpages.com/help/crawlingpolicy","producer":{"name":"HubPages","url":"http://hubpages.com/"}},{"regex":"Pinterest(bot)?/\\\\d\\\\.\\\\d.*www\\\\.pinterest\\\\.com.*","name":"Pinterest","url":"http://www.pinterest.com/bot.html","category":"Crawler","producer":{"name":"Pinterest","url":"http://www.pinterest.com/"}},{"regex":"Site24x7","name":"Site24x7 Website Monitoring","category":"Site Monitor","url":"https://www.site24x7.com/site24x7-faq.html","producer":{"name":"Site24x7","url":"https://www.site24x7.com"}},{"regex":"s~snapchat-proxy","name":"Snapchat Proxy","category":"Crawler","url":"https://www.snapchat.com","producer":{"name":"Snapchat Inc.","url":"https://www.snapchat.com"}},{"regex":"Let's Encrypt validation server","name":"Let's Encrypt Validation","category":"Service Agent","url":"https://letsencrypt.org/how-it-works/","producer":{"name":"Let's Encrypt","url":"https://letsencrypt.org"}},{"regex":"GrapeshotCrawler","name":"Grapeshot","category":"Crawler","url":"https://www.grapeshot.com/crawler","producer":{"name":"Grapeshot","url":"https://www.grapeshot.com"}},{"regex":"www\\\\.monitor\\\\.us","name":"Monitor.Us","category":"Site Monitor","url":"http://www.monitor.us","producer":{"name":"Monitor.Us","url":"http://www.monitor.us"}},{"regex":"Catchpoint( bot)?","name":"Catchpoint","category":"Site Monitor","url":"","producer":{"name":"Catchpoint Systems","url":"http://www.catchpoint.com/"}},{"regex":"bitlybot","name":"BitlyBot","category":"Crawler","url":"https://bitly.com","producer":{"name":"Bitly, Inc.","url":"https://bitly.com"}},{"regex":"Zao/","name":"Zao","category":"Crawler"},{"regex":"lycos","name":"Lycos"},{"regex":"Slurp","name":"Inktomi Slurp"},{"regex":"Speedy Spider","name":"Speedy"},{"regex":"ScoutJet","name":"ScoutJet"},{"regex":"nrsbot|netresearch","name":"NetResearchServer"},{"regex":"scooter","name":"Scooter"},{"regex":"gigabot","name":"Gigabot"},{"regex":"charlotte","name":"Charlotte"},{"regex":"Pompos","name":"Pompos"},{"regex":"ichiro","name":"ichiro"},{"regex":"PagePeeker","name":"PagePeeker"},{"regex":"WebThumbnail","name":"WebThumbnail"},{"regex":"Willow Internet Crawler","name":"Willow Internet Crawler"},{"regex":"EmailWolf","name":"EmailWolf"},{"regex":"NetLyzer FastProbe","name":"NetLyzer FastProbe"},{"regex":"AdMantX.*admantx\\\\.com","name":"ADMantX"},{"regex":"Server Density Service Monitoring.*","name":"Server Density"},{"regex":"RSSRadio \\\\(Push Notification Scanner;support@dorada\\\\.co\\\\.uk\\\\)","name":"RSSRadio Bot"},{"regex":"(A6-Indexer|nuhk|TsolCrawler|Yammybot|Openbot|Gulper Web Bot|grub-client|Download Demon|SearchExpress|Microsoft URL Control|borg|altavista|dataminr.com|tweetedtimes.com|TrendsmapResolver|teoma|blitzbot|oegp|furlbot|http%20client|polybot|htdig|mogimogi|larbin|scrubby|searchsight|seekbot|semanticdiscovery|snappy|vortex(?! Build)|zeal|fast-webcrawler|converacrawler|dataparksearch|findlinks|BrowserMob|HttpMonitor|ThumbShotsBot|URL2PNG|ZooShot|GomezA|Google SketchUp|Read%20Later|RackspaceBot|robots|SeopultContentAnalyzer|7Siters|centuryb.o.t9)","name":"Generic Bot"},{"regex":"^sentry","name":"Sentry Bot","producer":{"name":"Sentry","url":"https://sentry.io"}},{"regex":"^Spotify","name":"Spotify","producer":{"name":"Spotify","url":"https://www.spotify.com"}},{"regex":"The Knowledge AI","name":"The Knowledge AI","category":"Crawler"},{"regex":"Embedly","name":"Embedly","category":"Crawler","url":"https://support.embed.ly/hc/en-us","producer":{"name":"A Medium, Corp.","url":"https://medium.com/"}},{"regex":"BrandVerity","name":"BrandVerity","category":"Crawler","url":"https://www.brandverity.com/why-is-brandverity-visiting-me","producer":{"name":"BrandVerity, Inc.","url":"https://www.brandverity.com/"}},{"regex":"Kaspersky Lab CFR link resolver","name":"Kaspersky","category":"Security Checker","url":"https://www.kaspersky.com/","producer":{"name":"AO Kaspersky Lab","url":"https://www.kaspersky.com/"}},{"regex":"eZ Publish Link Validator","name":"eZ Publish Link Validator","category":"Crawler","url":"https://ez.no/","producer":{"name":"eZ Systems AS","url":"https://ez.no/"}},{"regex":"woorankreview","name":"WooRank","category":"Search bot","url":"https://www.woorank.com/","producer":{"name":"WooRank sprl","url":"https://www.woorank.com/"}},{"regex":"(Match|LinkCheck) by Siteimprove.com","name":"Siteimprove","category":"Search bot","url":"https://siteimprove.com/","producer":{"name":"Siteimprove GmbH","url":"https://siteimprove.com/"}},{"regex":"CATExplorador","name":"CATExplorador","category":"Search bot","url":"https://fundacio.cat/ca/domini/","producer":{"name":"Fundació puntCAT","url":"https://fundacio.cat/ca/domini/"}},{"regex":"Buck","name":"Buck","category":"Search bot","url":"https://hypefactors.com/","producer":{"name":"Hypefactors A/S","url":"https://hypefactors.com/"}},{"regex":"tracemyfile","name":"TraceMyFile","category":"Search bot","url":"https://www.tracemyfile.com/","producer":{"name":"Idee Inc.","url":"http://ideeinc.com/"}},{"regex":"zelist.ro feed parser","name":"Ze List","url":"https://www.zelist.ro/","category":"Feed Fetcher","producer":{"name":"Treeworks SRL","url":"https://www.tree.ro/"}},{"regex":"weborama-fetcher","name":"Weborama","category":"Search bot","url":"https://weborama.com/","producer":{"name":"Weborama SA","url":"https://weborama.com/"}},{"regex":"BoardReader Favicon Fetcher","name":"BoardReader","category":"Search bot","url":"http://boardreader.com/","producer":{"name":"Effyis Inc","url":"http://boardreader.com/"}},{"regex":"IDG/IT","name":"IDG/IT","category":"Search bot","url":"https://spaziodati.eu/","producer":{"name":"SpazioDati S.r.l.","url":"https://spaziodati.eu/"}},{"regex":"Bytespider","name":"Bytespider","category":"Search bot","url":"https://bytedance.com/","producer":{"name":"ByteDance Ltd.","url":"https://bytedance.com/"}},{"regex":"WikiDo","name":"WikiDo","category":"Search bot","url":"https://www.wikido.com/","producer":{"name":"Fotolitografie Fiorentine di Becchi Antonio s.n.c.","url":"https://www.wikido.com/"}},{"regex":"AwarioSmartBot","name":"Awario","category":"Search bot","url":"https://awario.com/bots.html","producer":{"name":"Awario","url":"https://awario.com/"}},{"regex":"AwarioRssBot","name":"Awario","category":"Feed Fetcher","url":"https://awario.com/bots.html","producer":{"name":"Awario","url":"https://awario.com/"}},{"regex":"oBot","name":"oBot","category":"Search bot","url":"http://www.xforce-security.com/crawler/","producer":{"name":"IBM Germany Research & Development GmbH","url":"https://exchange.xforce.ibmcloud.com/"}},{"regex":"SMTBot","name":"SMTBot","category":"Search bot","url":"https://www.similartech.com/smtbot","producer":{"name":"SimilarTech Ltd.","url":"https://www.similartech.com/"}},{"regex":"LCC","name":"LCC","category":"Search bot","url":"https://corpora.uni-leipzig.de/crawler_faq.html","producer":{"name":"Universität Leipzig","url":"https://www.uni-leipzig.de/"}},{"regex":"Startpagina-Linkchecker","name":"Startpagina Linkchecker","category":"Search bot","url":"https://www.startpagina.nl/linkchecker","producer":{"name":"Startpagina B.V.","url":"https://www.startpagina.nl/"}},{"regex":"GTmetrix","name":"GTmetrix","category":"Crawler","url":"https://gtmetrix.com/","producer":{"name":"Carbon60 Operating Co. Ltd.","url":"https://www.carbon60.com/"}},{"regex":"Nutch","name":"Nutch-based Bot","category":"Crawler","url":"https://nutch.apache.org","producer":{"name":"The Apache Software Foundation","url":"http://www.apache.org/foundation/"}},{"regex":"[a-z0-9\\\\-_]*((?<!cu|power[ _]|m[ _])bot(?![ _]TAB|[ _]?5[0-9])|crawler|crawl|checker|archiver|transcoder|spider)([^a-z]|$)","name":"Generic Bot"}]`);
    var Be, ro;
    function Go() {
        if (ro) return Be;
        ro = 1;
        var d = Be && Be.__importDefault || function(l) {
            return l && l.__esModule ? l : {
                default: l
            };
        };
        const e = d(Tv), r = U();
        class o {
            constructor(){
                this.parse = (t)=>{
                    var a, i, n, m;
                    for (const s of e.default)if (r.userAgentParser(s.regex, t)) return {
                        name: s.name,
                        category: s.category || "",
                        url: s.url || "",
                        producer: {
                            name: ((i = (a = s) === null || a === void 0 ? void 0 : a.producer) === null || i === void 0 ? void 0 : i.name) || "",
                            url: ((m = (n = s) === null || n === void 0 ? void 0 : n.producer) === null || m === void 0 ? void 0 : m.url) || ""
                        }
                    };
                    return null;
                };
            }
        }
        return Be = o, Be;
    }
    var Ue = {}, oo;
    function hv() {
        return oo || (oo = 1, Object.defineProperty(Ue, "__esModule", {
            value: !0
        }), Ue.versionCompare = (d, e, r)=>{
            let o, l, t = 0;
            const a = {
                dev: -6,
                alpha: -5,
                a: -5,
                beta: -4,
                b: -4,
                RC: -3,
                rc: -3,
                "#": -2,
                p: 1,
                pl: 1
            }, i = (m)=>(m = ("" + m).replace(/[_\-+]/g, "."), m = m.replace(/([^.\d]+)/g, ".$1.").replace(/\.{2,}/g, "."), m.length ? m.split(".") : [
                    -8
                ]), n = (m)=>m ? isNaN(m) ? a[m] || -7 : parseInt(m, 10) : 0;
            for(d = i(d), e = i(e), l = Math.max(d.length, e.length), o = 0; o < l; o++)if (d[o] !== e[o]) {
                if (d[o] = n(d[o]), e[o] = n(e[o]), d[o] < e[o]) {
                    t = -1;
                    break;
                } else if (d[o] > e[o]) {
                    t = 1;
                    break;
                }
            }
            if (!r) return t;
            switch(r){
                case ">":
                case "gt":
                    return t > 0;
                case ">=":
                case "ge":
                    return t >= 0;
                case "<=":
                case "le":
                    return t <= 0;
                case "===":
                case "=":
                case "eq":
                    return t === 0;
                case "<>":
                case "!==":
                case "ne":
                    return t !== 0;
                case "":
                case "<":
                case "lt":
                    return t < 0;
                default:
                    return null;
            }
        }), Ue;
    }
    var Ne, lo;
    function bv() {
        if (lo) return Ne;
        lo = 1;
        var d = Ne && Ne.__importDefault || function(s) {
            return s && s.__esModule ? s : {
                default: s
            };
        };
        const e = d(qn()), r = d(rv()), o = d(lv()), l = d(Pv()), t = d(Lo()), a = Go(), i = U(), n = hv();
        class m {
            constructor(g){
                this.options = {
                    skipBotDetection: !1,
                    versionTruncation: 1
                }, this.parse = (x)=>{
                    var v, T, p, _, A, O, c, M, N, u, L, C, I, K;
                    const S = {
                        client: this.clientParser.parse(x),
                        os: this.operatingSystemParser.parse(x),
                        device: this.deviceParser.parse(x),
                        bot: this.options.skipBotDetection ? null : this.botParser.parse(x)
                    }, $ = (v = S.os) === null || v === void 0 ? void 0 : v.name, X = (T = S.os) === null || T === void 0 ? void 0 : T.version, ee = o.default.getOsFamily($ || "");
                    if (!(!((p = S.device) === null || p === void 0) && p.brand)) {
                        const ye = this.vendorFragmentParser.parse(x);
                        ye && (S.device || (S.device = this.createDeviceObject()), S.device.brand = ye);
                    }
                    return !(!((_ = S.device) === null || _ === void 0) && _.brand) && [
                        "Apple TV",
                        "iOS",
                        "Mac"
                    ].includes($ || "") && (S.device || (S.device = this.createDeviceObject()), S.device.brand = "Apple"), !(!((A = S.device) === null || A === void 0) && A.type) && ee === "Android" && t.default.getBrowserFamily(((O = S.client) === null || O === void 0 ? void 0 : O.name) || "") === "Chrome" && (i.userAgentParser("Chrome/[.0-9]* Mobile", x) ? (S.device || (S.device = this.createDeviceObject()), S.device.type = "smartphone") : i.userAgentParser("Chrome/[.0-9]* (?!Mobile)", x) && (S.device || (S.device = this.createDeviceObject()), S.device.type = "tablet")), (!(!((c = S.device) === null || c === void 0) && c.type) && this.hasAndroidTabletFragment(x) || i.userAgentParser("Opera Tablet", x)) && (S.device || (S.device = this.createDeviceObject()), S.device.type = "tablet"), !(!((M = S.device) === null || M === void 0) && M.type) && this.hasAndroidMobileFragment(x) && (S.device || (S.device = this.createDeviceObject()), S.device.type = "smartphone"), !(!((N = S.device) === null || N === void 0) && N.type) && $ === "Android" && X !== "" && (n.versionCompare(X, "2.0") === -1 ? (S.device || (S.device = this.createDeviceObject()), S.device.type = "smartphone") : n.versionCompare(X, "3.0") >= 0 && n.versionCompare(X, "4.0") === -1 && (S.device || (S.device = this.createDeviceObject()), S.device.type = "tablet")), S.device && ((u = S.device) === null || u === void 0 ? void 0 : u.type) === "feature phone" && ee === "Android" && (S.device.type = "smartphone"), !(!((L = S.device) === null || L === void 0) && L.type) && this.isToucheEnabled(x) && ($ === "Windows RT" || $ === "Windows" && n.versionCompare(X, "8.0") >= 0) && (S.device || (S.device = this.createDeviceObject()), S.device.type = "tablet"), i.userAgentParser("Opera TV Store", x) && (S.device || (S.device = this.createDeviceObject()), S.device.type = "television"), !(!((C = S.device) === null || C === void 0) && C.type) && [
                        "Kylo",
                        "Espial TV Browser"
                    ].includes(((I = S.client) === null || I === void 0 ? void 0 : I.name) || "") && (S.device || (S.device = this.createDeviceObject()), S.device.type = "television"), !(!((K = S.device) === null || K === void 0) && K.type) && this.isDesktop(S, ee) && (S.device || (S.device = this.createDeviceObject()), S.device.type = "desktop"), S;
                }, this.hasAndroidMobileFragment = (x)=>i.userAgentParser("Android( [.0-9]+)?; Mobile;", x), this.hasAndroidTabletFragment = (x)=>i.userAgentParser("Android( [.0-9]+)?; Tablet;", x), this.isDesktop = (x, v)=>!x.os || this.usesMobileBrowser(x.client) ? !1 : o.default.getDesktopOsArray().includes(v), this.usesMobileBrowser = (x)=>{
                    var v, T;
                    return x ? ((v = x) === null || v === void 0 ? void 0 : v.type) === "browser" && t.default.isMobileOnlyBrowser((T = x) === null || T === void 0 ? void 0 : T.name) : !1;
                }, this.isToucheEnabled = (x)=>i.userAgentParser("Touch", x), this.createDeviceObject = ()=>({
                        type: "",
                        brand: "",
                        model: ""
                    }), this.options = Object.assign(Object.assign({}, this.options), g), this.clientParser = new e.default(this.options), this.deviceParser = new r.default, this.operatingSystemParser = new o.default(this.options), this.vendorFragmentParser = new l.default, this.botParser = new a;
            }
        }
        return Ne = m, Ne;
    }
    var Lv = bv();
    const _v = Mo(Lv);
    var Gv = Go();
    const Bv = Mo(Gv), Nv = new _v, P = Nv.parse(window.navigator.userAgent), Cv = new Bv, ao = Cv.parse(window.navigator.userAgent);
    function Ev() {
        return {
            isMobile: P.device.type == "smartphone",
            isTablet: P.device.type == "tablet",
            isDesktop: P.device.type == "desktop",
            model: P.device.model,
            brand: P.device.brand,
            type: P.device.type,
            os_name: P.os,
            os_platform: P.os.platform,
            os_version: P.os.version,
            browser_name: P.client.name,
            browser_version: P.client.version,
            browser_engine: P.client.engine,
            browser_engine_version: P.client.engineVersion,
            browser: {
                chrome: P.client.name == "Chrome",
                chrome_view: P.client.name == "Chrome Webview",
                chrome_mobile: P.client.name == "Chrome Mobile",
                chrome_mobile_ios: P.client.name == "Chrome Mobile iOS",
                safari: P.client.name == "Safari",
                safari_mobile: P.client.name == "Mobile Safari",
                msedge: P.client.name == "Microsoft Edge",
                msie_mobile: P.client.name == "IE Mobile",
                msie: P.client.name == "Internet Explorer"
            },
            os: {
                android: P.os.name == "Android",
                blackberry: P.os.name == "BlackBerry OS",
                ios: P.os.name == "iOS",
                windows: P.os.name == "Windows",
                windows_phone: P.os.name == "Windows Phone",
                mac: P.os.name == "Mac",
                linux: P.os.name == "GNU/Linux" || P.os.name == "GNU/Linux",
                chrome: P.os.name == "Chrome OS",
                firefox: P.os.name == "Firefox OS",
                gamingConsole: P.os.name == "Gaming Console"
            },
            isAndroid: P.os.name == "Android",
            isBlackberry: P.os.name == "BlackBerry OS",
            isIOS: P.os.name == "iOS",
            isWindows: P.os.name == "Windows",
            isWindowsPhone: P.os.name == "Windows Phone",
            isOsx: P.os.name == "Mac",
            isLinux: P.os.name == "GNU/Linux" || P.os.name == "GNU/Linux",
            isChromeOs: P.os.name == "Chrome OS",
            isFireFoxOS: P.os.name == "Firefox OS",
            GamingConsole: P.os.name == "Gaming Console",
            isBot: ao,
            machine: {
                brand: P.device.brand,
                model: P.device.model,
                os_name: P.os.name,
                os_version: P.os.version,
                type: P.device.type
            },
            bot: ao,
            client: P.client,
            device: P.device
        };
    }
    const Ov = (d)=>d.startsWith("Could not connect to peer") ? "Could not connect to the uploader. Did they close their browser?" : d, wv = ()=>`download-${Date.now()}.zip`;
    function fv(d, e) {
        const { peer: r } = Jo(), o = F(null), l = F(null), t = F(!1), a = F(!1), i = F(!1), n = F(!1), m = F(0), s = F(null), g = new Map, x = f(()=>l.value?.reduce((u, L)=>u + L.size, 0) ?? 0), v = async (u)=>{
            const L = g.get(u.fileName);
            if (!L) return console.error(`[Downloader] No stream controller found for file: ${u.fileName}`), !1;
            try {
                const C = new Uint8Array(u.bytes), I = jo(C, e);
                return m.value += I.byteLength, L.enqueue(I), u.final && (L.close(), c(), console.log(`[Downloader] File completed: ${u.fileName}`)), !0;
            } catch (C) {
                return console.error(`[Downloader] Error processing chunk for ${u.fileName}:`, C), s.value = `处理文件块时出错: ${C.message || "未知错误"}`, !1;
            }
        }, T = (u)=>{
            try {
                const L = qo(u);
                switch(console.log("[Downloader] received message", L.type), L.type){
                    case q.PasswordRequired:
                        a.value = !0, L.errorMessage && (s.value = L.errorMessage);
                        break;
                    case q.Info:
                        l.value = L.files, a.value = !1;
                        break;
                    case q.Chunk:
                        v(L).then((C)=>{
                            C || console.error("[Downloader] Failed to process chunk");
                        });
                        break;
                    case q.Error:
                        console.error("[Downloader] Server error:", L.error), s.value = L.error, _();
                        break;
                    case q.Report:
                        window.location.href = "/reported";
                        break;
                    default:
                        console.warn("[Downloader] Unknown message type:", L.type);
                }
            } catch (L) {
                console.error("[Downloader] Error handling message:", L), s.value = `消息处理错误: ${L.message || "未知错误"}`;
            }
        }, p = ()=>{
            if (!r) return;
            const u = r.connect(d, {
                reliable: !0
            });
            o.value = u;
            const L = ()=>{
                console.log("[Downloader] Connection opened"), t.value = !0, C(u);
            }, C = ($)=>{
                const X = Ev();
                $.send({
                    type: q.RequestInfo,
                    browserName: X.browser_name,
                    browserVersion: X.browser_version,
                    osName: X.os_name,
                    osVersion: X.os_version,
                    mobileVendor: X.brand,
                    mobileModel: X.model
                });
            }, I = ()=>{
                t.value = !1, i.value = !1;
            }, K = ()=>{
                console.log("[Downloader] Connection closed"), I();
            }, S = ($)=>{
                console.error("[Downloader] Connection error:", $), s.value = Ov($.message), u.open ? u.close() : I();
            };
            u.on("open", L), u.on("data", T), u.on("error", S), u.on("close", K), r.on("error", S), Io(()=>{
                u.off("open", L), u.off("data", T), u.off("error", S), u.off("close", K), r?.off("error", S), u.close();
            });
        };
        $o((u)=>{
            p(), u(()=>_());
        });
        const _ = ()=>{
            o.value && (o.value.close(), o.value = null);
        }, A = (u)=>{
            o.value && (o.value.send({
                type: q.UsePassword,
                password: u
            }), s.value = null);
        };
        let O = 0;
        const c = ()=>{
            if (!l.value || !o.value || O >= l.value.length) {
                l.value && O >= l.value.length && (n.value = !0, o.value?.send({
                    type: q.Done
                }));
                return;
            }
            o.value.send({
                type: q.Start,
                fileName: l.value[O].name,
                offset: 0
            }), O++;
        };
        return {
            filesInfo: l,
            isConnected: t,
            isPasswordRequired: a,
            isDownloading: i,
            isDone: n,
            errorMessage: s,
            submitPassword: A,
            startDownload: ()=>{
                if (!l.value || !o.value) {
                    console.error("[Downloader] Cannot start download: missing file info or connection");
                    return;
                }
                i.value = !0, m.value = 0, O = 0, g.clear();
                const u = l.value.map((C)=>{
                    const I = C.name.replace(/^\//, ""), K = new ReadableStream({
                        start (S) {
                            g.set(C.name, S);
                        }
                    });
                    return {
                        name: I,
                        size: C.size,
                        stream: ()=>K
                    };
                });
                (u.length > 1 ? md(u, wv()) : nd(u[0], u[0].name)).then(()=>{
                    console.log("[Downloader] Download completed successfully");
                }).catch((C)=>{
                    console.error("[Downloader] Download error:", C), s.value = `下载错误: ${C.message || "未知错误"}`;
                }), c();
            },
            stopDownload: ()=>{
                o.value && (o.value.send({
                    type: q.Pause
                }), _());
                for (const u of g.values())try {
                    u.close();
                } catch (L) {
                    console.error("[Downloader] Error closing stream:", L);
                }
                g.clear(), i.value = !1, n.value = !1, m.value = 0, s.value = null;
            },
            totalSize: x,
            bytesDownloaded: m
        };
    }
    const yv = {}, Xv = {
        class: "flex justify-center"
    };
    function $v(d, e) {
        const r = id, o = ur("router-link");
        return y(), H("div", Xv, [
            G(o, {
                to: "/"
            }, {
                default: E(()=>[
                        G(r, {
                            type: "info"
                        }, {
                            default: E(()=>e[0] || (e[0] = [
                                    Q(" 上传新的文件 ")
                                ])),
                            _: 1
                        })
                    ]),
                _: 1
            })
        ]);
    }
    let Mr, Iv, Fv, Dv, Rv, Vv, Uv, Hv, kv, Pr, Wv, Kv, Yv, Qv, Zv, zv, Jv, qv, jv, eM, rM, oM, lM, dM, aM, tM, iM, nM, mM, sM, gM;
    Mr = j(yv, [
        [
            "render",
            $v
        ],
        [
            "__scopeId",
            "data-v-96d4e8d8"
        ]
    ]);
    Iv = {
        class: "connecting-container"
    };
    Fv = {
        key: 1,
        style: {
            width: "500px"
        }
    };
    Dv = k({
        __name: "ConnectingToUploader",
        props: {
            showTroubleshootingAfter: {}
        },
        setup (d) {
            const e = d, r = F(!1), o = e.showTroubleshootingAfter ?? 3e3;
            return Ze(()=>{
                setTimeout(()=>{
                    r.value = !0;
                }, o);
            }), (l, t)=>{
                const a = Po, i = pr, n = el;
                return y(), H("div", Iv, [
                    r.value ? (y(), H("div", Fv, [
                        G(i, {
                            class: "troubleshooting-card"
                        }, {
                            header: E(()=>t[2] || (t[2] = [
                                    W("span", null, "连接遇到问题？", -1)
                                ])),
                            default: E(()=>[
                                    G(a, {
                                        type: "info",
                                        "show-icon": ""
                                    }, {
                                        default: E(()=>t[3] || (t[3] = [
                                                Q(" 点对点连接，有时候可能会遇到连接问题，常见原因包括： ")
                                            ])),
                                        _: 1
                                    }),
                                    G(n, {
                                        direction: "vertical",
                                        style: {
                                            "margin-top": "10px"
                                        }
                                    }, {
                                        default: E(()=>[
                                                G(a, {
                                                    type: "warning",
                                                    "show-icon": ""
                                                }, {
                                                    default: E(()=>t[4] || (t[4] = [
                                                            Q(" 上传者可能关闭了浏览器或网络中断。FilePizza 需上传者保持在线。 ")
                                                        ])),
                                                    _: 1
                                                }),
                                                G(a, {
                                                    type: "warning",
                                                    "show-icon": ""
                                                }, {
                                                    default: E(()=>t[5] || (t[5] = [
                                                            Q(" 您的网络可能有严格防火墙或NAT设置，例如禁用UPnP。 ")
                                                        ])),
                                                    _: 1
                                                }),
                                                G(a, {
                                                    type: "warning",
                                                    "show-icon": ""
                                                }, {
                                                    default: E(()=>t[6] || (t[6] = [
                                                            Q(" 某些公司或学校网络可能屏蔽了点对点连接。 ")
                                                        ])),
                                                    _: 1
                                                })
                                            ]),
                                        _: 1
                                    })
                                ]),
                            _: 1
                        }),
                        G(Mr, {
                            style: {
                                "margin-top": "10px"
                            }
                        })
                    ])) : (y(), Y(i, {
                        key: 0,
                        class: "troubleshooting-card",
                        style: {
                            width: "500px"
                        }
                    }, {
                        header: E(()=>t[0] || (t[0] = [
                                W("span", null, "正在连接上传者...", -1)
                            ])),
                        default: E(()=>[
                                G(a, {
                                    type: "info",
                                    "show-icon": ""
                                }, {
                                    default: E(()=>t[1] || (t[1] = [
                                            Q(" 点对点连接，可能需要几秒钟才能建立连接。 ")
                                        ])),
                                    _: 1
                                })
                            ]),
                        _: 1
                    }))
                ]);
            };
        }
    });
    Rv = j(Dv, [
        [
            "__scopeId",
            "data-v-0b11a94a"
        ]
    ]);
    Vv = {
        class: "file-list"
    };
    Uv = {
        class: "file-name text-truncate"
    };
    Hv = {
        class: "file-actions"
    };
    kv = k({
        __name: "UploadFileList",
        props: {
            files: {},
            onRemove: {
                type: Function
            }
        },
        setup (d) {
            return console.log(d.files), (r, o)=>{
                const l = ol, t = ll, a = vo, i = qe, n = rl, m = pr;
                return y(), Y(m, {
                    class: "upload-file-list",
                    shadow: "hover"
                }, {
                    default: E(()=>[
                            G(n, {
                                "max-height": "300px"
                            }, {
                                default: E(()=>[
                                        W("div", Vv, [
                                            (y(!0), H(cr, null, Fo(r.files, (s, g)=>(y(), H("div", {
                                                    key: s.name || g,
                                                    class: "file-item"
                                                }, [
                                                    G(l, {
                                                        content: s.name,
                                                        placement: "top",
                                                        "show-after": 500
                                                    }, {
                                                        default: E(()=>[
                                                                W("div", Uv, le(s.name), 1)
                                                            ]),
                                                        _: 2
                                                    }, 1032, [
                                                        "content"
                                                    ]),
                                                    W("div", Hv, [
                                                        G(t, {
                                                            size: "small",
                                                            type: "info"
                                                        }, {
                                                            default: E(()=>[
                                                                    Q(le(s.type || "Unknow"), 1)
                                                                ]),
                                                            _: 2
                                                        }, 1024),
                                                        r.onRemove ? (y(), Y(i, {
                                                            key: 0,
                                                            type: "danger",
                                                            size: "small",
                                                            circle: "",
                                                            onClick: ()=>r.onRemove(g)
                                                        }, {
                                                            default: E(()=>[
                                                                    G(a, null, {
                                                                        default: E(()=>[
                                                                                G(b(dl))
                                                                            ]),
                                                                        _: 1
                                                                    })
                                                                ]),
                                                            _: 2
                                                        }, 1032, [
                                                            "onClick"
                                                        ])) : _e("", !0)
                                                    ])
                                                ]))), 128))
                                        ])
                                    ]),
                                _: 1
                            })
                        ]),
                    _: 1
                });
            };
        }
    });
    Pr = j(kv, [
        [
            "__scopeId",
            "data-v-d49e300f"
        ]
    ]);
    Wv = {
        class: "title-text"
    };
    Kv = {
        class: "flex-container"
    };
    Yv = {
        class: "progress-container"
    };
    Qv = k({
        __name: "DownloadComplete",
        props: {
            filesInfo: {},
            bytesDownloaded: {},
            totalSize: {}
        },
        setup (d) {
            const e = d, r = f(()=>t(e.filesInfo.length, "file", "files")), o = f(()=>e.totalSize > 0 ? Math.round(e.bytesDownloaded / e.totalSize * 100) : 0), l = (a)=>`${a}%`;
            function t(a, i, n) {
                return `${a} ${a === 1 ? i : n}`;
            }
            return (a, i)=>(y(), H("div", null, [
                    W("h2", Wv, " You downloaded " + le(r.value) + ". ", 1),
                    W("div", Kv, [
                        G(Pr, {
                            files: a.filesInfo
                        }, null, 8, [
                            "files"
                        ]),
                        W("div", Yv, [
                            G(b(To), {
                                percentage: o.value,
                                format: l,
                                "stroke-width": 10
                            }, null, 8, [
                                "percentage"
                            ])
                        ]),
                        G(Mr)
                    ])
                ]));
        }
    });
    Zv = j(Qv, [
        [
            "__scopeId",
            "data-v-4ab509b8"
        ]
    ]);
    zv = {
        class: "download-in-progress"
    };
    Jv = {
        class: "button-container"
    };
    qv = k({
        __name: "DownloadInProgress",
        props: {
            filesInfo: {},
            bytesDownloaded: {},
            totalSize: {}
        },
        emits: [
            "stop"
        ],
        setup (d, { emit: e }) {
            const r = d, o = e, l = f(()=>r.totalSize === 0 ? 0 : Math.min(100, Math.round(r.bytesDownloaded / r.totalSize * 100))), t = f(()=>l.value >= 100), a = F(!1);
            return (i, n)=>{
                const m = ur("title-text"), s = To, g = qe;
                return y(), H("div", zv, [
                    G(m, null, {
                        default: E(()=>[
                                Q(" 正在下载 " + le(i.filesInfo.length) + " 个文件。 ", 1)
                            ]),
                        _: 1
                    }),
                    G(Pr, {
                        files: i.filesInfo
                    }, null, 8, [
                        "files"
                    ]),
                    G(s, {
                        class: "progress",
                        percentage: l.value,
                        status: t.value ? "success" : "active"
                    }, null, 8, [
                        "percentage",
                        "status"
                    ]),
                    W("div", Jv, [
                        G(g, {
                            type: "danger",
                            onClick: n[0] || (n[0] = (x)=>o("stop")),
                            loading: a.value
                        }, {
                            default: E(()=>n[1] || (n[1] = [
                                    Q(" 停止下载 ")
                                ])),
                            _: 1
                        }, 8, [
                            "loading"
                        ])
                    ])
                ]);
            };
        }
    });
    jv = j(qv, [
        [
            "__scopeId",
            "data-v-a61bd636"
        ]
    ]);
    eM = k({
        __name: "PasswordEntry",
        props: {
            errorMessage: {}
        },
        emits: [
            "submit"
        ],
        setup (d, { emit: e }) {
            const r = e, o = F(""), l = ()=>{
                r("submit", o.value);
            };
            return (t, a)=>{
                const i = al, n = rd, m = qe, s = ed, g = pr;
                return y(), Y(g, null, {
                    default: E(()=>[
                            a[2] || (a[2] = W("h2", {
                                class: "mb-4"
                            }, "该下载需要密码", -1)),
                            G(s, {
                                onSubmit: Do(l, [
                                    "prevent"
                                ])
                            }, {
                                default: E(()=>[
                                        G(n, {
                                            error: t.errorMessage
                                        }, {
                                            default: E(()=>[
                                                    G(i, {
                                                        type: "password",
                                                        modelValue: o.value,
                                                        "onUpdate:modelValue": a[0] || (a[0] = (x)=>o.value = x),
                                                        placeholder: "请输入密码",
                                                        "show-password": "",
                                                        required: ""
                                                    }, null, 8, [
                                                        "modelValue"
                                                    ])
                                                ]),
                                            _: 1
                                        }, 8, [
                                            "error"
                                        ]),
                                        G(m, {
                                            type: "primary",
                                            "native-type": "submit"
                                        }, {
                                            default: E(()=>a[1] || (a[1] = [
                                                    Q("解锁下载")
                                                ])),
                                            _: 1
                                        })
                                    ]),
                                _: 1
                            })
                        ]),
                    _: 1
                });
            };
        }
    });
    rM = j(eM, [
        [
            "__scopeId",
            "data-v-0acb0748"
        ]
    ]);
    oM = {
        class: "ready-to-download"
    };
    lM = {
        class: "file-list-container"
    };
    dM = k({
        __name: "ReadyToDownload",
        props: {
            filesInfo: {}
        },
        emits: [
            "start"
        ],
        setup (d, { emit: e }) {
            const r = e;
            function o() {
                r("start");
            }
            return (l, t)=>{
                const a = ur("title-text"), i = Pr, n = qe;
                return y(), H("div", oM, [
                    G(a, null, {
                        default: E(()=>[
                                Q(" 您即将开始下载 " + le(l.filesInfo.length) + " 个文件。 ", 1)
                            ]),
                        _: 1
                    }),
                    W("div", lM, [
                        G(i, {
                            files: l.filesInfo
                        }, null, 8, [
                            "files"
                        ]),
                        G(n, {
                            type: "primary",
                            size: "large",
                            onClick: o
                        }, {
                            default: E(()=>t[0] || (t[0] = [
                                    Q(" 开始下载 ")
                                ])),
                            _: 1
                        })
                    ])
                ]);
            };
        }
    });
    aM = j(dM, [
        [
            "__scopeId",
            "data-v-2490e9c8"
        ]
    ]);
    tM = {
        class: "downloader-container"
    };
    iM = k({
        __name: "Downloader",
        props: {
            uploaderPeerId: {},
            algorithm: {}
        },
        setup (d) {
            const e = d, { filesInfo: r, isConnected: o, isPasswordRequired: l, isDownloading: t, isDone: a, errorMessage: i, submitPassword: n, startDownload: m, stopDownload: s, totalSize: g, bytesDownloaded: x } = fv(e.uploaderPeerId, e.algorithm);
            return (v, T)=>{
                const p = Po;
                return y(), H("div", tM, [
                    b(a) && b(r) ? (y(), Y(Zv, {
                        key: 0,
                        "files-info": b(r),
                        "bytes-downloaded": b(x),
                        "total-size": b(g)
                    }, null, 8, [
                        "files-info",
                        "bytes-downloaded",
                        "total-size"
                    ])) : b(l) ? (y(), Y(rM, {
                        key: 1,
                        "error-message": b(i),
                        onSubmit: b(n)
                    }, null, 8, [
                        "error-message",
                        "onSubmit"
                    ])) : b(i) ? (y(), H(cr, {
                        key: 2
                    }, [
                        G(p, {
                            type: "error",
                            title: b(i),
                            "show-icon": "",
                            style: {
                                width: "400px"
                            }
                        }, null, 8, [
                            "title"
                        ]),
                        G(Mr)
                    ], 64)) : b(t) && b(r) ? (y(), Y(jv, {
                        key: 3,
                        "files-info": b(r),
                        "bytes-downloaded": b(x),
                        "total-size": b(g),
                        onStop: b(s)
                    }, null, 8, [
                        "files-info",
                        "bytes-downloaded",
                        "total-size",
                        "onStop"
                    ])) : b(r) ? (y(), Y(aM, {
                        key: 4,
                        "files-info": b(r),
                        onStart: b(m)
                    }, null, 8, [
                        "files-info",
                        "onStart"
                    ])) : b(o) ? (y(), Y(b(tl), {
                        key: 6,
                        text: "哎呀，出了点问题...",
                        fullscreen: ""
                    })) : (y(), Y(Rv, {
                        key: 5
                    }))
                ]);
            };
        }
    });
    nM = j(iM, [
        [
            "__scopeId",
            "data-v-efd05cb1"
        ]
    ]);
    mM = {
        class: "download-page"
    };
    sM = {
        class: "content-wrapper"
    };
    gM = k({
        __name: "Download",
        setup (d) {
            const e = Ro(), r = Vo(), o = (i)=>!(!i || typeof i != "string" || i.length < 8 || !/^[a-zA-Z0-9-_]+$/.test(i)), l = e.params.token, t = o(l), a = F(null);
            return t ? Ze(async ()=>{
                const n = await (await fetch("http://localhost:3000/api/fetch", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        token: l
                    })
                })).json();
                if (!n) {
                    r.replace({
                        name: "NotFound"
                    });
                    return;
                }
                a.value = n;
            }) : (console.error("无效的 token"), r.replace({
                name: "NotFound"
            })), (i, n)=>(y(), H("div", mM, [
                    W("div", sM, [
                        G(il, null, {
                            default: E(()=>[
                                    G(nM, {
                                        "uploader-peer-id": a.value.uploaderPeerID,
                                        algorithm: a.value.algorithm
                                    }, null, 8, [
                                        "uploader-peer-id",
                                        "algorithm"
                                    ])
                                ]),
                            _: 1
                        })
                    ])
                ]));
        }
    });
    uM = j(gM, [
        [
            "__scopeId",
            "data-v-260a3bcd"
        ]
    ]);
});
export { uM as default, __tla };
