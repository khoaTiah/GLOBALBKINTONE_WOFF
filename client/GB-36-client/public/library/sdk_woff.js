/*! For license information please see sdk.js.LICENSE.txt */ ! function(t, e) { "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define("woff", [], e) : "object" == typeof exports ? exports.woff = e() : t.woff = e() }(window, (function() { return function(t) {
        function e(e) { for (var n, o, i = e[0], s = e[1], a = 0, c = []; a < i.length; a++) o = i[a], Object.prototype.hasOwnProperty.call(r, o) && r[o] && c.push(r[o][0]), r[o] = 0; for (n in s) Object.prototype.hasOwnProperty.call(s, n) && (t[n] = s[n]); for (u && u(e); c.length;) c.shift()() } var n = {},
            r = { 1: 0, 3: 0 };

        function o(e) { if (n[e]) return n[e].exports; var r = n[e] = { i: e, l: !1, exports: {} }; return t[e].call(r.exports, r, r.exports, o), r.l = !0, r.exports }
        o.e = function(t) { var e = [],
                n = r[t]; if (0 !== n)
                if (n) e.push(n[2]);
                else { var i = new Promise((function(e, o) { n = r[t] = [e, o] }));
                    e.push(n[2] = i); var s, a = document.createElement("script");
                    a.charset = "utf-8", a.timeout = 120, o.nc && a.setAttribute("nonce", o.nc), a.src = function(t) { return o.p + "" + ({ 0: "js-crypto-ec", 2: "vendors_js-crypto-ec" }[t] || t) + ".f460b3401ae8fead8a9d.js" }(t); var u = new Error;
                    s = function(e) { a.onerror = a.onload = null, clearTimeout(c); var n = r[t]; if (0 !== n) { if (n) { var o = e && ("load" === e.type ? "missing" : e.type),
                                    i = e && e.target && e.target.src;
                                u.message = "Loading chunk " + t + " failed.\n(" + o + ": " + i + ")", u.name = "ChunkLoadError", u.type = o, u.request = i, n[1](u) }
                            r[t] = void 0 } }; var c = setTimeout((function() { s({ type: "timeout", target: a }) }), 12e4);
                    a.onerror = a.onload = s, document.head.appendChild(a) }
            return Promise.all(e) }, o.m = t, o.c = n, o.d = function(t, e, n) { o.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n }) }, o.r = function(t) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) }, o.t = function(t, e) { if (1 & e && (t = o(t)), 8 & e) return t; if (4 & e && "object" == typeof t && t && t.__esModule) return t; var n = Object.create(null); if (o.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t)
                for (var r in t) o.d(n, r, function(e) { return t[e] }.bind(null, r)); return n }, o.n = function(t) { var e = t && t.__esModule ? function() { return t.default } : function() { return t }; return o.d(e, "a", e), e }, o.o = function(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, o.p = "https://static.worksmobile.net/static/wm/woff/edge/3.6/", o.oe = function(t) { throw t }; var i = window.webpackJsonpwoff = window.webpackJsonpwoff || [],
            s = i.push.bind(i);
        i.push = e, i = i.slice(); for (var a = 0; a < i.length; a++) e(i[a]); var u = s; return o(o.s = 16) }([function(t, e) { var n;
        n = function() { return this }(); try { n = n || new Function("return this")() } catch (r) { "object" == typeof window && (n = window) }
        t.exports = n }, function(t, e, n) { "use strict";
        e.a = function(t) { var e = this.constructor; return this.then((function(n) { return e.resolve(t()).then((function() { return n })) }), (function(n) { return e.resolve(t()).then((function() { return e.reject(n) })) })) } }, function(t, e, n) { var r, o, i;
        o = [], void 0 === (i = "function" == typeof(r = function() { var t = function t(e) {
                function n(t, e) { return t >>> e | t << 32 - e } for (var r, o, i = Math.pow, s = i(2, 32), a = "", u = [], c = 8 * e.length, f = t.h = t.h || [], l = t.k = t.k || [], h = l.length, d = {}, p = 2; h < 64; p++)
                    if (!d[p]) { for (r = 0; r < 313; r += p) d[r] = p;
                        f[h] = i(p, .5) * s | 0, l[h++] = i(p, 1 / 3) * s | 0 }
                for (e += "Â€"; e.length % 64 - 56;) e += "\0"; for (r = 0; r < e.length; r++) { if ((o = e.charCodeAt(r)) >> 8) return;
                    u[r >> 2] |= o << (3 - r) % 4 * 8 } for (u[u.length] = c / s | 0, u[u.length] = c, o = 0; o < u.length;) { var y = u.slice(o, o += 16),
                        w = f; for (f = f.slice(0, 8), r = 0; r < 64; r++) { var v = y[r - 15],
                            g = y[r - 2],
                            m = f[0],
                            b = f[4],
                            _ = f[7] + (n(b, 6) ^ n(b, 11) ^ n(b, 25)) + (b & f[5] ^ ~b & f[6]) + l[r] + (y[r] = r < 16 ? y[r] : y[r - 16] + (n(v, 7) ^ n(v, 18) ^ v >>> 3) + y[r - 7] + (n(g, 17) ^ n(g, 19) ^ g >>> 10) | 0);
                        (f = [_ + ((n(m, 2) ^ n(m, 13) ^ n(m, 22)) + (m & f[1] ^ m & f[2] ^ f[1] & f[2])) | 0].concat(f))[4] = f[4] + _ | 0 } for (r = 0; r < 8; r++) f[r] = f[r] + w[r] | 0 } for (r = 0; r < 8; r++)
                    for (o = 3; o + 1; o--) { var E = f[r] >> 8 * o & 255;
                        a += (E < 16 ? 0 : "") + E.toString(16) }
                return a }; return t.code = 'var sha256=function a(b){function c(a,b){return a>>>b|a<<32-b}for(var d,e,f=Math.pow,g=f(2,32),h="length",i="",j=[],k=8*b[h],l=a.h=a.h||[],m=a.k=a.k||[],n=m[h],o={},p=2;64>n;p++)if(!o[p]){for(d=0;313>d;d+=p)o[d]=p;l[n]=f(p,.5)*g|0,m[n++]=f(p,1/3)*g|0}for(b+="\\x80";b[h]%64-56;)b+="\\x00";for(d=0;d<b[h];d++){if(e=b.charCodeAt(d),e>>8)return;j[d>>2]|=e<<(3-d)%4*8}for(j[j[h]]=k/g|0,j[j[h]]=k,e=0;e<j[h];){var q=j.slice(e,e+=16),r=l;for(l=l.slice(0,8),d=0;64>d;d++){var s=q[d-15],t=q[d-2],u=l[0],v=l[4],w=l[7]+(c(v,6)^c(v,11)^c(v,25))+(v&l[5]^~v&l[6])+m[d]+(q[d]=16>d?q[d]:q[d-16]+(c(s,7)^c(s,18)^s>>>3)+q[d-7]+(c(t,17)^c(t,19)^t>>>10)|0),x=(c(u,2)^c(u,13)^c(u,22))+(u&l[1]^u&l[2]^l[1]&l[2]);l=[w+x|0].concat(l),l[4]=l[4]+w|0}for(d=0;8>d;d++)l[d]=l[d]+r[d]|0}for(d=0;8>d;d++)for(e=3;e+1;e--){var y=l[d]>>8*e&255;i+=(16>y?0:"")+y.toString(16)}return i};', t }) ? r.apply(e, o) : r) || (t.exports = i) }, function(t, e, n) {
        (function(e) { var r = n(15),
                o = "production",
                i = e.env.GOV_ENV || !1,
                s = e.env.PORT || 8080,
                a = e.env.GIT_BRANCH ? e.env.GIT_BRANCH.split("origin/")[1] : "",
                u = a ? "branch/" + a : "branch",
                c = r.version.replace(/\.\d+\.\d+$/, ""),
                f = e.env.SERVER_END_POINT || i ? "auth.gov-naverworks.com" : "auth.worksmobile.com",
                l = e.env.APIS_END_POINT || i ? "gov.worksapis.com" : "www.worksapis.com",
                h = e.env.LIFF_END_POINT || null,
                d = { development: "/dist/", test: "https://kr1-alpha-liff.worksmobile.com/assets/liff/edge/test/", branch: "https://kr1-alpha-liff.worksmobile.com/assets/liff/edge/" + u + "/", beta: "https://kr1-alpha-liff.worksmobile.com/assets/liff/edge/" + c + "/", rc: "https://static.worksmobile.net/static/wm/woff/edge/rc/" + c + "/", production: "https://static.worksmobile.net/static/wm/woff/edge/" + c + "/" },
                p = { development: "/dist/", test: "https://kr1-alpha-liff.worksmobile.com/assets/liff/edge/test/", branch: "https://kr1-alpha-liff.worksmobile.com/assets/liff/edge/" + u + "/", beta: "https://kr1-alpha-liff.worksmobile.com/assets/liff/edge/" + c + "/", rc: "https://static.worksmobile.net/static/wm/gov/woff/edge/rc/" + c + "/", production: "https://static.worksmobile.net/static/wm/gov/woff/edge/" + c + "/" },
                y = e.env.CDN || i ? p[o] : d[o];
            t.exports = { CDN: y, ENV: o, PORT: s, SERVER_END_POINT: f, APIS_END_POINT: l, LIFF_END_POINT: h, VERSION: r.version, IOS_HOMESCREEN_SHORTCUT_URL: "https://line.me/channel/shortcut", SHARE_TARGET_PICKER_SCHEME_URL: "line://picker", BRANCH: a } }).call(this, n(4)) }, function(t, e) { var n, r, o = t.exports = {};

        function i() { throw new Error("setTimeout has not been defined") }

        function s() { throw new Error("clearTimeout has not been defined") }

        function a(t) { if (n === setTimeout) return setTimeout(t, 0); if ((n === i || !n) && setTimeout) return n = setTimeout, setTimeout(t, 0); try { return n(t, 0) } catch (e) { try { return n.call(null, t, 0) } catch (e) { return n.call(this, t, 0) } } }! function() { try { n = "function" == typeof setTimeout ? setTimeout : i } catch (t) { n = i } try { r = "function" == typeof clearTimeout ? clearTimeout : s } catch (t) { r = s } }(); var u, c = [],
            f = !1,
            l = -1;

        function h() { f && u && (f = !1, u.length ? c = u.concat(c) : l = -1, c.length && d()) }

        function d() { if (!f) { var t = a(h);
                f = !0; for (var e = c.length; e;) { for (u = c, c = []; ++l < e;) u && u[l].run();
                    l = -1, e = c.length }
                u = null, f = !1,
                    function(t) { if (r === clearTimeout) return clearTimeout(t); if ((r === s || !r) && clearTimeout) return r = clearTimeout, clearTimeout(t); try { r(t) } catch (e) { try { return r.call(null, t) } catch (e) { return r.call(this, t) } } }(t) } }

        function p(t, e) { this.fun = t, this.array = e }

        function y() {}
        o.nextTick = function(t) { var e = new Array(arguments.length - 1); if (arguments.length > 1)
                for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
            c.push(new p(t, e)), 1 !== c.length || f || a(d) }, p.prototype.run = function() { this.fun.apply(null, this.array) }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = y, o.addListener = y, o.once = y, o.off = y, o.removeListener = y, o.removeAllListeners = y, o.emit = y, o.prependListener = y, o.prependOnceListener = y, o.listeners = function(t) { return [] }, o.binding = function(t) { throw new Error("process.binding is not supported") }, o.cwd = function() { return "/" }, o.chdir = function(t) { throw new Error("process.chdir is not supported") }, o.umask = function() { return 0 } }, function(t, e, n) { "use strict";
        (function(t) { var r = n(1),
                o = setTimeout;

            function i(t) { return Boolean(t && void 0 !== t.length) }

            function s() {}

            function a(t) { if (!(this instanceof a)) throw new TypeError("Promises must be constructed via new"); if ("function" != typeof t) throw new TypeError("not a function");
                this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], d(t, this) }

            function u(t, e) { for (; 3 === t._state;) t = t._value;
                0 !== t._state ? (t._handled = !0, a._immediateFn((function() { var n = 1 === t._state ? e.onFulfilled : e.onRejected; if (null !== n) { var r; try { r = n(t._value) } catch (o) { return void f(e.promise, o) }
                        c(e.promise, r) } else(1 === t._state ? c : f)(e.promise, t._value) }))) : t._deferreds.push(e) }

            function c(t, e) { try { if (e === t) throw new TypeError("A promise cannot be resolved with itself."); if (e && ("object" == typeof e || "function" == typeof e)) { var n = e.then; if (e instanceof a) return t._state = 3, t._value = e, void l(t); if ("function" == typeof n) return void d((r = n, o = e, function() { r.apply(o, arguments) }), t) }
                    t._state = 1, t._value = e, l(t) } catch (i) { f(t, i) } var r, o }

            function f(t, e) { t._state = 2, t._value = e, l(t) }

            function l(t) { 2 === t._state && 0 === t._deferreds.length && a._immediateFn((function() { t._handled || a._unhandledRejectionFn(t._value) })); for (var e = 0, n = t._deferreds.length; e < n; e++) u(t, t._deferreds[e]);
                t._deferreds = null }

            function h(t, e, n) { this.onFulfilled = "function" == typeof t ? t : null, this.onRejected = "function" == typeof e ? e : null, this.promise = n }

            function d(t, e) { var n = !1; try { t((function(t) { n || (n = !0, c(e, t)) }), (function(t) { n || (n = !0, f(e, t)) })) } catch (r) { if (n) return;
                    n = !0, f(e, r) } }
            a.prototype.catch = function(t) { return this.then(null, t) }, a.prototype.then = function(t, e) { var n = new this.constructor(s); return u(this, new h(t, e, n)), n }, a.prototype.finally = r.a, a.all = function(t) { return new a((function(e, n) { if (!i(t)) return n(new TypeError("Promise.all accepts an array")); var r = Array.prototype.slice.call(t); if (0 === r.length) return e([]); var o = r.length;

                    function s(t, i) { try { if (i && ("object" == typeof i || "function" == typeof i)) { var a = i.then; if ("function" == typeof a) return void a.call(i, (function(e) { s(t, e) }), n) }
                            r[t] = i, 0 == --o && e(r) } catch (u) { n(u) } } for (var a = 0; a < r.length; a++) s(a, r[a]) })) }, a.resolve = function(t) { return t && "object" == typeof t && t.constructor === a ? t : new a((function(e) { e(t) })) }, a.reject = function(t) { return new a((function(e, n) { n(t) })) }, a.race = function(t) { return new a((function(e, n) { if (!i(t)) return n(new TypeError("Promise.race accepts an array")); for (var r = 0, o = t.length; r < o; r++) a.resolve(t[r]).then(e, n) })) }, a._immediateFn = "function" == typeof t && function(e) { t(e) } || function(t) { o(t, 0) }, a._unhandledRejectionFn = function(t) { "undefined" != typeof console && console }, e.a = a }).call(this, n(8).setImmediate) }, function(t, e, n) { "use strict";
        (function(t) { n.d(e, "a", (function() { return i })); var r = n(2),
                o = n.n(r);

            function i(e) { return t.from(o()(e), "hex").toString("base64").replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "") } }).call(this, n(7).Buffer) }, function(t, e, n) { "use strict";
        (function(t) { var r = n(12),
                o = n(13),
                i = n(9);

            function s() { return u.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823 }

            function a(t, e) { if (s() < e) throw new RangeError("Invalid typed array length"); return u.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(e)).__proto__ = u.prototype : (null === t && (t = new u(e)), t.length = e), t }

            function u(t, e, n) { if (!(u.TYPED_ARRAY_SUPPORT || this instanceof u)) return new u(t, e, n); if ("number" == typeof t) { if ("string" == typeof e) throw new Error("If encoding is specified then the first argument must be a string"); return l(this, t) } return c(this, t, e, n) }

            function c(t, e, n, r) { if ("number" == typeof e) throw new TypeError('"value" argument must not be a number'); return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer ? function(t, e, n, r) { if (e.byteLength, n < 0 || e.byteLength < n) throw new RangeError("'offset' is out of bounds"); if (e.byteLength < n + (r || 0)) throw new RangeError("'length' is out of bounds");
                    e = void 0 === n && void 0 === r ? new Uint8Array(e) : void 0 === r ? new Uint8Array(e, n) : new Uint8Array(e, n, r);
                    u.TYPED_ARRAY_SUPPORT ? (t = e).__proto__ = u.prototype : t = h(t, e); return t }(t, e, n, r) : "string" == typeof e ? function(t, e, n) { "string" == typeof n && "" !== n || (n = "utf8"); if (!u.isEncoding(n)) throw new TypeError('"encoding" must be a valid string encoding'); var r = 0 | p(e, n),
                        o = (t = a(t, r)).write(e, n);
                    o !== r && (t = t.slice(0, o)); return t }(t, e, n) : function(t, e) { if (u.isBuffer(e)) { var n = 0 | d(e.length); return 0 === (t = a(t, n)).length || e.copy(t, 0, 0, n), t } if (e) { if ("undefined" != typeof ArrayBuffer && e.buffer instanceof ArrayBuffer || "length" in e) return "number" != typeof e.length || (r = e.length) != r ? a(t, 0) : h(t, e); if ("Buffer" === e.type && i(e.data)) return h(t, e.data) } var r; throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.") }(t, e) }

            function f(t) { if ("number" != typeof t) throw new TypeError('"size" argument must be a number'); if (t < 0) throw new RangeError('"size" argument must not be negative') }

            function l(t, e) { if (f(e), t = a(t, e < 0 ? 0 : 0 | d(e)), !u.TYPED_ARRAY_SUPPORT)
                    for (var n = 0; n < e; ++n) t[n] = 0; return t }

            function h(t, e) { var n = e.length < 0 ? 0 : 0 | d(e.length);
                t = a(t, n); for (var r = 0; r < n; r += 1) t[r] = 255 & e[r]; return t }

            function d(t) { if (t >= s()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + s().toString(16) + " bytes"); return 0 | t }

            function p(t, e) { if (u.isBuffer(t)) return t.length; if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)) return t.byteLength; "string" != typeof t && (t = "" + t); var n = t.length; if (0 === n) return 0; for (var r = !1;;) switch (e) {
                    case "ascii":
                    case "latin1":
                    case "binary":
                        return n;
                    case "utf8":
                    case "utf-8":
                    case void 0:
                        return F(t).length;
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return 2 * n;
                    case "hex":
                        return n >>> 1;
                    case "base64":
                        return V(t).length;
                    default:
                        if (r) return F(t).length;
                        e = ("" + e).toLowerCase(), r = !0 } }

            function y(t, e, n) { var r = !1; if ((void 0 === e || e < 0) && (e = 0), e > this.length) return ""; if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return ""; if ((n >>>= 0) <= (e >>>= 0)) return ""; for (t || (t = "utf8");;) switch (t) {
                    case "hex":
                        return P(this, e, n);
                    case "utf8":
                    case "utf-8":
                        return O(this, e, n);
                    case "ascii":
                        return k(this, e, n);
                    case "latin1":
                    case "binary":
                        return N(this, e, n);
                    case "base64":
                        return A(this, e, n);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return R(this, e, n);
                    default:
                        if (r) throw new TypeError("Unknown encoding: " + t);
                        t = (t + "").toLowerCase(), r = !0 } }

            function w(t, e, n) { var r = t[e];
                t[e] = t[n], t[n] = r }

            function v(t, e, n, r, o) { if (0 === t.length) return -1; if ("string" == typeof n ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, isNaN(n) && (n = o ? 0 : t.length - 1), n < 0 && (n = t.length + n), n >= t.length) { if (o) return -1;
                    n = t.length - 1 } else if (n < 0) { if (!o) return -1;
                    n = 0 } if ("string" == typeof e && (e = u.from(e, r)), u.isBuffer(e)) return 0 === e.length ? -1 : g(t, e, n, r, o); if ("number" == typeof e) return e &= 255, u.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? o ? Uint8Array.prototype.indexOf.call(t, e, n) : Uint8Array.prototype.lastIndexOf.call(t, e, n) : g(t, [e], n, r, o); throw new TypeError("val must be string, number or Buffer") }

            function g(t, e, n, r, o) { var i, s = 1,
                    a = t.length,
                    u = e.length; if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) { if (t.length < 2 || e.length < 2) return -1;
                    s = 2, a /= 2, u /= 2, n /= 2 }

                function c(t, e) { return 1 === s ? t[e] : t.readUInt16BE(e * s) } if (o) { var f = -1; for (i = n; i < a; i++)
                        if (c(t, i) === c(e, -1 === f ? 0 : i - f)) { if (-1 === f && (f = i), i - f + 1 === u) return f * s } else -1 !== f && (i -= i - f), f = -1 } else
                    for (n + u > a && (n = a - u), i = n; i >= 0; i--) { for (var l = !0, h = 0; h < u; h++)
                            if (c(t, i + h) !== c(e, h)) { l = !1; break }
                        if (l) return i }
                return -1 }

            function m(t, e, n, r) { n = Number(n) || 0; var o = t.length - n;
                r ? (r = Number(r)) > o && (r = o) : r = o; var i = e.length; if (i % 2 != 0) throw new TypeError("Invalid hex string");
                r > i / 2 && (r = i / 2); for (var s = 0; s < r; ++s) { var a = parseInt(e.substr(2 * s, 2), 16); if (isNaN(a)) return s;
                    t[n + s] = a } return s }

            function b(t, e, n, r) { return Y(F(e, t.length - n), t, n, r) }

            function _(t, e, n, r) { return Y(function(t) { for (var e = [], n = 0; n < t.length; ++n) e.push(255 & t.charCodeAt(n)); return e }(e), t, n, r) }

            function E(t, e, n, r) { return _(t, e, n, r) }

            function I(t, e, n, r) { return Y(V(e), t, n, r) }

            function T(t, e, n, r) { return Y(function(t, e) { for (var n, r, o, i = [], s = 0; s < t.length && !((e -= 2) < 0); ++s) n = t.charCodeAt(s), r = n >> 8, o = n % 256, i.push(o), i.push(r); return i }(e, t.length - n), t, n, r) }

            function A(t, e, n) { return 0 === e && n === t.length ? r.fromByteArray(t) : r.fromByteArray(t.slice(e, n)) }

            function O(t, e, n) { n = Math.min(t.length, n); for (var r = [], o = e; o < n;) { var i, s, a, u, c = t[o],
                        f = null,
                        l = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1; if (o + l <= n) switch (l) {
                        case 1:
                            c < 128 && (f = c); break;
                        case 2:
                            128 == (192 & (i = t[o + 1])) && (u = (31 & c) << 6 | 63 & i) > 127 && (f = u); break;
                        case 3:
                            i = t[o + 1], s = t[o + 2], 128 == (192 & i) && 128 == (192 & s) && (u = (15 & c) << 12 | (63 & i) << 6 | 63 & s) > 2047 && (u < 55296 || u > 57343) && (f = u); break;
                        case 4:
                            i = t[o + 1], s = t[o + 2], a = t[o + 3], 128 == (192 & i) && 128 == (192 & s) && 128 == (192 & a) && (u = (15 & c) << 18 | (63 & i) << 12 | (63 & s) << 6 | 63 & a) > 65535 && u < 1114112 && (f = u) }
                    null === f ? (f = 65533, l = 1) : f > 65535 && (f -= 65536, r.push(f >>> 10 & 1023 | 55296), f = 56320 | 1023 & f), r.push(f), o += l } return function(t) { var e = t.length; if (e <= 4096) return String.fromCharCode.apply(String, t); var n = "",
                        r = 0; for (; r < e;) n += String.fromCharCode.apply(String, t.slice(r, r += 4096)); return n }(r) }
            e.Buffer = u, e.SlowBuffer = function(t) {+t != t && (t = 0); return u.alloc(+t) }, e.INSPECT_MAX_BYTES = 50, u.TYPED_ARRAY_SUPPORT = void 0 !== t.TYPED_ARRAY_SUPPORT ? t.TYPED_ARRAY_SUPPORT : function() { try { var t = new Uint8Array(1); return t.__proto__ = { __proto__: Uint8Array.prototype, foo: function() { return 42 } }, 42 === t.foo() && "function" == typeof t.subarray && 0 === t.subarray(1, 1).byteLength } catch (e) { return !1 } }(), e.kMaxLength = s(), u.poolSize = 8192, u._augment = function(t) { return t.__proto__ = u.prototype, t }, u.from = function(t, e, n) { return c(null, t, e, n) }, u.TYPED_ARRAY_SUPPORT && (u.prototype.__proto__ = Uint8Array.prototype, u.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && u[Symbol.species] === u && Object.defineProperty(u, Symbol.species, { value: null, configurable: !0 })), u.alloc = function(t, e, n) { return function(t, e, n, r) { return f(e), e <= 0 ? a(t, e) : void 0 !== n ? "string" == typeof r ? a(t, e).fill(n, r) : a(t, e).fill(n) : a(t, e) }(null, t, e, n) }, u.allocUnsafe = function(t) { return l(null, t) }, u.allocUnsafeSlow = function(t) { return l(null, t) }, u.isBuffer = function(t) { return !(null == t || !t._isBuffer) }, u.compare = function(t, e) { if (!u.isBuffer(t) || !u.isBuffer(e)) throw new TypeError("Arguments must be Buffers"); if (t === e) return 0; for (var n = t.length, r = e.length, o = 0, i = Math.min(n, r); o < i; ++o)
                    if (t[o] !== e[o]) { n = t[o], r = e[o]; break }
                return n < r ? -1 : r < n ? 1 : 0 }, u.isEncoding = function(t) { switch (String(t).toLowerCase()) {
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "latin1":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return !0;
                    default:
                        return !1 } }, u.concat = function(t, e) { if (!i(t)) throw new TypeError('"list" argument must be an Array of Buffers'); if (0 === t.length) return u.alloc(0); var n; if (void 0 === e)
                    for (e = 0, n = 0; n < t.length; ++n) e += t[n].length; var r = u.allocUnsafe(e),
                    o = 0; for (n = 0; n < t.length; ++n) { var s = t[n]; if (!u.isBuffer(s)) throw new TypeError('"list" argument must be an Array of Buffers');
                    s.copy(r, o), o += s.length } return r }, u.byteLength = p, u.prototype._isBuffer = !0, u.prototype.swap16 = function() { var t = this.length; if (t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits"); for (var e = 0; e < t; e += 2) w(this, e, e + 1); return this }, u.prototype.swap32 = function() { var t = this.length; if (t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits"); for (var e = 0; e < t; e += 4) w(this, e, e + 3), w(this, e + 1, e + 2); return this }, u.prototype.swap64 = function() { var t = this.length; if (t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits"); for (var e = 0; e < t; e += 8) w(this, e, e + 7), w(this, e + 1, e + 6), w(this, e + 2, e + 5), w(this, e + 3, e + 4); return this }, u.prototype.toString = function() { var t = 0 | this.length; return 0 === t ? "" : 0 === arguments.length ? O(this, 0, t) : y.apply(this, arguments) }, u.prototype.equals = function(t) { if (!u.isBuffer(t)) throw new TypeError("Argument must be a Buffer"); return this === t || 0 === u.compare(this, t) }, u.prototype.inspect = function() { var t = "",
                    n = e.INSPECT_MAX_BYTES; return this.length > 0 && (t = this.toString("hex", 0, n).match(/.{2}/g).join(" "), this.length > n && (t += " ... ")), "<Buffer " + t + ">" }, u.prototype.compare = function(t, e, n, r, o) { if (!u.isBuffer(t)) throw new TypeError("Argument must be a Buffer"); if (void 0 === e && (e = 0), void 0 === n && (n = t ? t.length : 0), void 0 === r && (r = 0), void 0 === o && (o = this.length), e < 0 || n > t.length || r < 0 || o > this.length) throw new RangeError("out of range index"); if (r >= o && e >= n) return 0; if (r >= o) return -1; if (e >= n) return 1; if (this === t) return 0; for (var i = (o >>>= 0) - (r >>>= 0), s = (n >>>= 0) - (e >>>= 0), a = Math.min(i, s), c = this.slice(r, o), f = t.slice(e, n), l = 0; l < a; ++l)
                    if (c[l] !== f[l]) { i = c[l], s = f[l]; break }
                return i < s ? -1 : s < i ? 1 : 0 }, u.prototype.includes = function(t, e, n) { return -1 !== this.indexOf(t, e, n) }, u.prototype.indexOf = function(t, e, n) { return v(this, t, e, n, !0) }, u.prototype.lastIndexOf = function(t, e, n) { return v(this, t, e, n, !1) }, u.prototype.write = function(t, e, n, r) { if (void 0 === e) r = "utf8", n = this.length, e = 0;
                else if (void 0 === n && "string" == typeof e) r = e, n = this.length, e = 0;
                else { if (!isFinite(e)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                    e |= 0, isFinite(n) ? (n |= 0, void 0 === r && (r = "utf8")) : (r = n, n = void 0) } var o = this.length - e; if ((void 0 === n || n > o) && (n = o), t.length > 0 && (n < 0 || e < 0) || e > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                r || (r = "utf8"); for (var i = !1;;) switch (r) {
                    case "hex":
                        return m(this, t, e, n);
                    case "utf8":
                    case "utf-8":
                        return b(this, t, e, n);
                    case "ascii":
                        return _(this, t, e, n);
                    case "latin1":
                    case "binary":
                        return E(this, t, e, n);
                    case "base64":
                        return I(this, t, e, n);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return T(this, t, e, n);
                    default:
                        if (i) throw new TypeError("Unknown encoding: " + r);
                        r = ("" + r).toLowerCase(), i = !0 } }, u.prototype.toJSON = function() { return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) } };

            function k(t, e, n) { var r = "";
                n = Math.min(t.length, n); for (var o = e; o < n; ++o) r += String.fromCharCode(127 & t[o]); return r }

            function N(t, e, n) { var r = "";
                n = Math.min(t.length, n); for (var o = e; o < n; ++o) r += String.fromCharCode(t[o]); return r }

            function P(t, e, n) { var r = t.length;
                (!e || e < 0) && (e = 0), (!n || n < 0 || n > r) && (n = r); for (var o = "", i = e; i < n; ++i) o += j(t[i]); return o }

            function R(t, e, n) { for (var r = t.slice(e, n), o = "", i = 0; i < r.length; i += 2) o += String.fromCharCode(r[i] + 256 * r[i + 1]); return o }

            function S(t, e, n) { if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint"); if (t + e > n) throw new RangeError("Trying to access beyond buffer length") }

            function D(t, e, n, r, o, i) { if (!u.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance'); if (e > o || e < i) throw new RangeError('"value" argument is out of bounds'); if (n + r > t.length) throw new RangeError("Index out of range") }

            function C(t, e, n, r) { e < 0 && (e = 65535 + e + 1); for (var o = 0, i = Math.min(t.length - n, 2); o < i; ++o) t[n + o] = (e & 255 << 8 * (r ? o : 1 - o)) >>> 8 * (r ? o : 1 - o) }

            function x(t, e, n, r) { e < 0 && (e = 4294967295 + e + 1); for (var o = 0, i = Math.min(t.length - n, 4); o < i; ++o) t[n + o] = e >>> 8 * (r ? o : 3 - o) & 255 }

            function U(t, e, n, r, o, i) { if (n + r > t.length) throw new RangeError("Index out of range"); if (n < 0) throw new RangeError("Index out of range") }

            function L(t, e, n, r, i) { return i || U(t, 0, n, 4), o.write(t, e, n, r, 23, 4), n + 4 }

            function B(t, e, n, r, i) { return i || U(t, 0, n, 8), o.write(t, e, n, r, 52, 8), n + 8 }
            u.prototype.slice = function(t, e) { var n, r = this.length; if ((t = ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), (e = void 0 === e ? r : ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), e < t && (e = t), u.TYPED_ARRAY_SUPPORT)(n = this.subarray(t, e)).__proto__ = u.prototype;
                else { var o = e - t;
                    n = new u(o, void 0); for (var i = 0; i < o; ++i) n[i] = this[i + t] } return n }, u.prototype.readUIntLE = function(t, e, n) { t |= 0, e |= 0, n || S(t, e, this.length); for (var r = this[t], o = 1, i = 0; ++i < e && (o *= 256);) r += this[t + i] * o; return r }, u.prototype.readUIntBE = function(t, e, n) { t |= 0, e |= 0, n || S(t, e, this.length); for (var r = this[t + --e], o = 1; e > 0 && (o *= 256);) r += this[t + --e] * o; return r }, u.prototype.readUInt8 = function(t, e) { return e || S(t, 1, this.length), this[t] }, u.prototype.readUInt16LE = function(t, e) { return e || S(t, 2, this.length), this[t] | this[t + 1] << 8 }, u.prototype.readUInt16BE = function(t, e) { return e || S(t, 2, this.length), this[t] << 8 | this[t + 1] }, u.prototype.readUInt32LE = function(t, e) { return e || S(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3] }, u.prototype.readUInt32BE = function(t, e) { return e || S(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]) }, u.prototype.readIntLE = function(t, e, n) { t |= 0, e |= 0, n || S(t, e, this.length); for (var r = this[t], o = 1, i = 0; ++i < e && (o *= 256);) r += this[t + i] * o; return r >= (o *= 128) && (r -= Math.pow(2, 8 * e)), r }, u.prototype.readIntBE = function(t, e, n) { t |= 0, e |= 0, n || S(t, e, this.length); for (var r = e, o = 1, i = this[t + --r]; r > 0 && (o *= 256);) i += this[t + --r] * o; return i >= (o *= 128) && (i -= Math.pow(2, 8 * e)), i }, u.prototype.readInt8 = function(t, e) { return e || S(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t] }, u.prototype.readInt16LE = function(t, e) { e || S(t, 2, this.length); var n = this[t] | this[t + 1] << 8; return 32768 & n ? 4294901760 | n : n }, u.prototype.readInt16BE = function(t, e) { e || S(t, 2, this.length); var n = this[t + 1] | this[t] << 8; return 32768 & n ? 4294901760 | n : n }, u.prototype.readInt32LE = function(t, e) { return e || S(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24 }, u.prototype.readInt32BE = function(t, e) { return e || S(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3] }, u.prototype.readFloatLE = function(t, e) { return e || S(t, 4, this.length), o.read(this, t, !0, 23, 4) }, u.prototype.readFloatBE = function(t, e) { return e || S(t, 4, this.length), o.read(this, t, !1, 23, 4) }, u.prototype.readDoubleLE = function(t, e) { return e || S(t, 8, this.length), o.read(this, t, !0, 52, 8) }, u.prototype.readDoubleBE = function(t, e) { return e || S(t, 8, this.length), o.read(this, t, !1, 52, 8) }, u.prototype.writeUIntLE = function(t, e, n, r) {
                (t = +t, e |= 0, n |= 0, r) || D(this, t, e, n, Math.pow(2, 8 * n) - 1, 0); var o = 1,
                    i = 0; for (this[e] = 255 & t; ++i < n && (o *= 256);) this[e + i] = t / o & 255; return e + n }, u.prototype.writeUIntBE = function(t, e, n, r) {
                (t = +t, e |= 0, n |= 0, r) || D(this, t, e, n, Math.pow(2, 8 * n) - 1, 0); var o = n - 1,
                    i = 1; for (this[e + o] = 255 & t; --o >= 0 && (i *= 256);) this[e + o] = t / i & 255; return e + n }, u.prototype.writeUInt8 = function(t, e, n) { return t = +t, e |= 0, n || D(this, t, e, 1, 255, 0), u.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), this[e] = 255 & t, e + 1 }, u.prototype.writeUInt16LE = function(t, e, n) { return t = +t, e |= 0, n || D(this, t, e, 2, 65535, 0), u.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : C(this, t, e, !0), e + 2 }, u.prototype.writeUInt16BE = function(t, e, n) { return t = +t, e |= 0, n || D(this, t, e, 2, 65535, 0), u.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : C(this, t, e, !1), e + 2 }, u.prototype.writeUInt32LE = function(t, e, n) { return t = +t, e |= 0, n || D(this, t, e, 4, 4294967295, 0), u.TYPED_ARRAY_SUPPORT ? (this[e + 3] = t >>> 24, this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = 255 & t) : x(this, t, e, !0), e + 4 }, u.prototype.writeUInt32BE = function(t, e, n) { return t = +t, e |= 0, n || D(this, t, e, 4, 4294967295, 0), u.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : x(this, t, e, !1), e + 4 }, u.prototype.writeIntLE = function(t, e, n, r) { if (t = +t, e |= 0, !r) { var o = Math.pow(2, 8 * n - 1);
                    D(this, t, e, n, o - 1, -o) } var i = 0,
                    s = 1,
                    a = 0; for (this[e] = 255 & t; ++i < n && (s *= 256);) t < 0 && 0 === a && 0 !== this[e + i - 1] && (a = 1), this[e + i] = (t / s >> 0) - a & 255; return e + n }, u.prototype.writeIntBE = function(t, e, n, r) { if (t = +t, e |= 0, !r) { var o = Math.pow(2, 8 * n - 1);
                    D(this, t, e, n, o - 1, -o) } var i = n - 1,
                    s = 1,
                    a = 0; for (this[e + i] = 255 & t; --i >= 0 && (s *= 256);) t < 0 && 0 === a && 0 !== this[e + i + 1] && (a = 1), this[e + i] = (t / s >> 0) - a & 255; return e + n }, u.prototype.writeInt8 = function(t, e, n) { return t = +t, e |= 0, n || D(this, t, e, 1, 127, -128), u.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), t < 0 && (t = 255 + t + 1), this[e] = 255 & t, e + 1 }, u.prototype.writeInt16LE = function(t, e, n) { return t = +t, e |= 0, n || D(this, t, e, 2, 32767, -32768), u.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : C(this, t, e, !0), e + 2 }, u.prototype.writeInt16BE = function(t, e, n) { return t = +t, e |= 0, n || D(this, t, e, 2, 32767, -32768), u.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : C(this, t, e, !1), e + 2 }, u.prototype.writeInt32LE = function(t, e, n) { return t = +t, e |= 0, n || D(this, t, e, 4, 2147483647, -2147483648), u.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24) : x(this, t, e, !0), e + 4 }, u.prototype.writeInt32BE = function(t, e, n) { return t = +t, e |= 0, n || D(this, t, e, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), u.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : x(this, t, e, !1), e + 4 }, u.prototype.writeFloatLE = function(t, e, n) { return L(this, t, e, !0, n) }, u.prototype.writeFloatBE = function(t, e, n) { return L(this, t, e, !1, n) }, u.prototype.writeDoubleLE = function(t, e, n) { return B(this, t, e, !0, n) }, u.prototype.writeDoubleBE = function(t, e, n) { return B(this, t, e, !1, n) }, u.prototype.copy = function(t, e, n, r) { if (n || (n = 0), r || 0 === r || (r = this.length), e >= t.length && (e = t.length), e || (e = 0), r > 0 && r < n && (r = n), r === n) return 0; if (0 === t.length || 0 === this.length) return 0; if (e < 0) throw new RangeError("targetStart out of bounds"); if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds"); if (r < 0) throw new RangeError("sourceEnd out of bounds");
                r > this.length && (r = this.length), t.length - e < r - n && (r = t.length - e + n); var o, i = r - n; if (this === t && n < e && e < r)
                    for (o = i - 1; o >= 0; --o) t[o + e] = this[o + n];
                else if (i < 1e3 || !u.TYPED_ARRAY_SUPPORT)
                    for (o = 0; o < i; ++o) t[o + e] = this[o + n];
                else Uint8Array.prototype.set.call(t, this.subarray(n, n + i), e); return i }, u.prototype.fill = function(t, e, n, r) { if ("string" == typeof t) { if ("string" == typeof e ? (r = e, e = 0, n = this.length) : "string" == typeof n && (r = n, n = this.length), 1 === t.length) { var o = t.charCodeAt(0);
                        o < 256 && (t = o) } if (void 0 !== r && "string" != typeof r) throw new TypeError("encoding must be a string"); if ("string" == typeof r && !u.isEncoding(r)) throw new TypeError("Unknown encoding: " + r) } else "number" == typeof t && (t &= 255); if (e < 0 || this.length < e || this.length < n) throw new RangeError("Out of range index"); if (n <= e) return this; var i; if (e >>>= 0, n = void 0 === n ? this.length : n >>> 0, t || (t = 0), "number" == typeof t)
                    for (i = e; i < n; ++i) this[i] = t;
                else { var s = u.isBuffer(t) ? t : F(new u(t, r).toString()),
                        a = s.length; for (i = 0; i < n - e; ++i) this[i + e] = s[i % a] } return this }; var M = /[^+\/0-9A-Za-z-_]/g;

            function j(t) { return t < 16 ? "0" + t.toString(16) : t.toString(16) }

            function F(t, e) { var n;
                e = e || 1 / 0; for (var r = t.length, o = null, i = [], s = 0; s < r; ++s) { if ((n = t.charCodeAt(s)) > 55295 && n < 57344) { if (!o) { if (n > 56319) {
                                (e -= 3) > -1 && i.push(239, 191, 189); continue } if (s + 1 === r) {
                                (e -= 3) > -1 && i.push(239, 191, 189); continue }
                            o = n; continue } if (n < 56320) {
                            (e -= 3) > -1 && i.push(239, 191, 189), o = n; continue }
                        n = 65536 + (o - 55296 << 10 | n - 56320) } else o && (e -= 3) > -1 && i.push(239, 191, 189); if (o = null, n < 128) { if ((e -= 1) < 0) break;
                        i.push(n) } else if (n < 2048) { if ((e -= 2) < 0) break;
                        i.push(n >> 6 | 192, 63 & n | 128) } else if (n < 65536) { if ((e -= 3) < 0) break;
                        i.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128) } else { if (!(n < 1114112)) throw new Error("Invalid code point"); if ((e -= 4) < 0) break;
                        i.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128) } } return i }

            function V(t) { return r.toByteArray(function(t) { if ((t = function(t) { return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "") }(t).replace(M, "")).length < 2) return ""; for (; t.length % 4 != 0;) t += "="; return t }(t)) }

            function Y(t, e, n, r) { for (var o = 0; o < r && !(o + n >= e.length || o >= t.length); ++o) e[o + n] = t[o]; return o } }).call(this, n(0)) }, function(t, e, n) {
        (function(t) { var r = void 0 !== t && t || "undefined" != typeof self && self || window,
                o = Function.prototype.apply;

            function i(t, e) { this._id = t, this._clearFn = e }
            e.setTimeout = function() { return new i(o.call(setTimeout, r, arguments), clearTimeout) }, e.setInterval = function() { return new i(o.call(setInterval, r, arguments), clearInterval) }, e.clearTimeout = e.clearInterval = function(t) { t && t.close() }, i.prototype.unref = i.prototype.ref = function() {}, i.prototype.close = function() { this._clearFn.call(r, this._id) }, e.enroll = function(t, e) { clearTimeout(t._idleTimeoutId), t._idleTimeout = e }, e.unenroll = function(t) { clearTimeout(t._idleTimeoutId), t._idleTimeout = -1 }, e._unrefActive = e.active = function(t) { clearTimeout(t._idleTimeoutId); var e = t._idleTimeout;
                e >= 0 && (t._idleTimeoutId = setTimeout((function() { t._onTimeout && t._onTimeout() }), e)) }, n(11), e.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== t && t.setImmediate || this && this.setImmediate, e.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== t && t.clearImmediate || this && this.clearImmediate }).call(this, n(0)) }, function(t, e) { var n = {}.toString;
        t.exports = Array.isArray || function(t) { return "[object Array]" == n.call(t) } }, function(t, e, n) { "use strict";
        (function(t) { var e = n(5),
                r = n(1),
                o = function() { if ("undefined" != typeof self) return self; if ("undefined" != typeof window) return window; if (void 0 !== t) return t; throw new Error("unable to locate global object") }(); "Promise" in o ? o.Promise.prototype.finally || (o.Promise.prototype.finally = r.a) : o.Promise = e.a }).call(this, n(0)) }, function(t, e, n) {
        (function(t, e) {! function(t, n) { "use strict"; if (!t.setImmediate) { var r, o, i, s, a, u = 1,
                        c = {},
                        f = !1,
                        l = t.document,
                        h = Object.getPrototypeOf && Object.getPrototypeOf(t);
                    h = h && h.setTimeout ? h : t, "[object process]" === {}.toString.call(t.process) ? r = function(t) { e.nextTick((function() { p(t) })) } : ! function() { if (t.postMessage && !t.importScripts) { var e = !0,
                                n = t.onmessage; return t.onmessage = function() { e = !1 }, t.postMessage("", "*"), t.onmessage = n, e } }() ? t.MessageChannel ? ((i = new MessageChannel).port1.onmessage = function(t) { p(t.data) }, r = function(t) { i.port2.postMessage(t) }) : l && "onreadystatechange" in l.createElement("script") ? (o = l.documentElement, r = function(t) { var e = l.createElement("script");
                        e.onreadystatechange = function() { p(t), e.onreadystatechange = null, o.removeChild(e), e = null }, o.appendChild(e) }) : r = function(t) { setTimeout(p, 0, t) } : (s = "setImmediate$" + Math.random() + "$", a = function(e) { e.source === t && "string" == typeof e.data && 0 === e.data.indexOf(s) && p(+e.data.slice(s.length)) }, t.addEventListener ? t.addEventListener("message", a, !1) : t.attachEvent("onmessage", a), r = function(e) { t.postMessage(s + e, "*") }), h.setImmediate = function(t) { "function" != typeof t && (t = new Function("" + t)); for (var e = new Array(arguments.length - 1), n = 0; n < e.length; n++) e[n] = arguments[n + 1]; var o = { callback: t, args: e }; return c[u] = o, r(u), u++ }, h.clearImmediate = d }

                function d(t) { delete c[t] }

                function p(t) { if (f) setTimeout(p, 0, t);
                    else { var e = c[t]; if (e) { f = !0; try {! function(t) { var e = t.callback,
                                        n = t.args; switch (n.length) {
                                        case 0:
                                            e(); break;
                                        case 1:
                                            e(n[0]); break;
                                        case 2:
                                            e(n[0], n[1]); break;
                                        case 3:
                                            e(n[0], n[1], n[2]); break;
                                        default:
                                            e.apply(void 0, n) } }(e) } finally { d(t), f = !1 } } } } }("undefined" == typeof self ? void 0 === t ? this : t : self) }).call(this, n(0), n(4)) }, function(t, e, n) { "use strict";
        e.byteLength = function(t) { var e = c(t),
                n = e[0],
                r = e[1]; return 3 * (n + r) / 4 - r }, e.toByteArray = function(t) { var e, n, r = c(t),
                s = r[0],
                a = r[1],
                u = new i(function(t, e, n) { return 3 * (e + n) / 4 - n }(0, s, a)),
                f = 0,
                l = a > 0 ? s - 4 : s; for (n = 0; n < l; n += 4) e = o[t.charCodeAt(n)] << 18 | o[t.charCodeAt(n + 1)] << 12 | o[t.charCodeAt(n + 2)] << 6 | o[t.charCodeAt(n + 3)], u[f++] = e >> 16 & 255, u[f++] = e >> 8 & 255, u[f++] = 255 & e;
            2 === a && (e = o[t.charCodeAt(n)] << 2 | o[t.charCodeAt(n + 1)] >> 4, u[f++] = 255 & e);
            1 === a && (e = o[t.charCodeAt(n)] << 10 | o[t.charCodeAt(n + 1)] << 4 | o[t.charCodeAt(n + 2)] >> 2, u[f++] = e >> 8 & 255, u[f++] = 255 & e); return u }, e.fromByteArray = function(t) { for (var e, n = t.length, o = n % 3, i = [], s = 0, a = n - o; s < a; s += 16383) i.push(f(t, s, s + 16383 > a ? a : s + 16383));
            1 === o ? (e = t[n - 1], i.push(r[e >> 2] + r[e << 4 & 63] + "==")) : 2 === o && (e = (t[n - 2] << 8) + t[n - 1], i.push(r[e >> 10] + r[e >> 4 & 63] + r[e << 2 & 63] + "=")); return i.join("") }; for (var r = [], o = [], i = "undefined" != typeof Uint8Array ? Uint8Array : Array, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = 0, u = s.length; a < u; ++a) r[a] = s[a], o[s.charCodeAt(a)] = a;

        function c(t) { var e = t.length; if (e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4"); var n = t.indexOf("="); return -1 === n && (n = e), [n, n === e ? 0 : 4 - n % 4] }

        function f(t, e, n) { for (var o, i, s = [], a = e; a < n; a += 3) o = (t[a] << 16 & 16711680) + (t[a + 1] << 8 & 65280) + (255 & t[a + 2]), s.push(r[(i = o) >> 18 & 63] + r[i >> 12 & 63] + r[i >> 6 & 63] + r[63 & i]); return s.join("") }
        o["-".charCodeAt(0)] = 62, o["_".charCodeAt(0)] = 63 }, function(t, e) { e.read = function(t, e, n, r, o) { var i, s, a = 8 * o - r - 1,
                u = (1 << a) - 1,
                c = u >> 1,
                f = -7,
                l = n ? o - 1 : 0,
                h = n ? -1 : 1,
                d = t[e + l]; for (l += h, i = d & (1 << -f) - 1, d >>= -f, f += a; f > 0; i = 256 * i + t[e + l], l += h, f -= 8); for (s = i & (1 << -f) - 1, i >>= -f, f += r; f > 0; s = 256 * s + t[e + l], l += h, f -= 8); if (0 === i) i = 1 - c;
            else { if (i === u) return s ? NaN : 1 / 0 * (d ? -1 : 1);
                s += Math.pow(2, r), i -= c } return (d ? -1 : 1) * s * Math.pow(2, i - r) }, e.write = function(t, e, n, r, o, i) { var s, a, u, c = 8 * i - o - 1,
                f = (1 << c) - 1,
                l = f >> 1,
                h = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                d = r ? 0 : i - 1,
                p = r ? 1 : -1,
                y = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0; for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (a = isNaN(e) ? 1 : 0, s = f) : (s = Math.floor(Math.log(e) / Math.LN2), e * (u = Math.pow(2, -s)) < 1 && (s--, u *= 2), (e += s + l >= 1 ? h / u : h * Math.pow(2, 1 - l)) * u >= 2 && (s++, u /= 2), s + l >= f ? (a = 0, s = f) : s + l >= 1 ? (a = (e * u - 1) * Math.pow(2, o), s += l) : (a = e * Math.pow(2, l - 1) * Math.pow(2, o), s = 0)); o >= 8; t[n + d] = 255 & a, d += p, a /= 256, o -= 8); for (s = s << o | a, c += o; c > 0; t[n + d] = 255 & s, d += p, s /= 256, c -= 8);
            t[n + d - p] |= 128 * y } }, function(t, e) {! function() { if ("function" != typeof window.CustomEvent) {
                function t(t, e) { var n = e || {},
                        r = n.bubbles,
                        o = void 0 !== r && r,
                        i = n.cancelable,
                        s = void 0 !== i && i,
                        a = n.detail,
                        u = void 0 === a ? void 0 : a,
                        c = document.createEvent("CustomEvent"); return c.initCustomEvent(t, o, s, u), c }
                t.prototype = Event.prototype, window.CustomEvent = t } }() }, function(t) { t.exports = JSON.parse('{"name":"@line/liff","version":"3.6","main":"dist/lib/index.js","types":"dist/lib","files":["dist/lib","package.json","yarn.lock","README.md"],"homepage":"https://developers.line.biz/en/docs/liff/overview/","scripts":{"test":"jest","dev:watch:sdk":"webpack -w -c ./webpack.config.js","check:forbidden-urls":"node .circleci/check-forbidden-url.js","prettier":"prettier \'./lib/**\' -c","lint":"eslint \'./lib/**\' --ext .ts --ext .test.js","build:test":"NODE_ENV=test webpack --c ./webpack.config.js","build:beta":"NODE_ENV=beta yarn build_for_deploy","build:rc":"NODE_ENV=rc yarn build_for_deploy","build:master":"NODE_ENV=production yarn build_for_deploy","build:branch":"NODE_ENV=branch yarn build_for_deploy","build:development":"NODE_ENV=development yarn build_for_deploy","gov:build:test":"GOV_ENV=true NODE_ENV=test webpack --c ./webpack.config.js","gov:build:beta":"GOV_ENV=true NODE_ENV=beta yarn build_for_deploy","gov:build:rc":"GOV_ENV=true NODE_ENV=rc yarn build_for_deploy","gov:build:master":"GOV_ENV=true NODE_ENV=production yarn build_for_deploy","gov:build:branch":"GOV_ENV=true NODE_ENV=branch yarn build_for_deploy","gov:build:development":"GOV_ENV=true NODE_ENV=development yarn build_for_deploy","build_for_deploy":"webpack --c ./webpack.config.js && cp -r dist/${NODE_ENV} dist/${NODE_ENV}-copied","deploy:test":"reg test --noTag","deploy:beta":"reg beta --noTag","deploy:rc":"reg rc --noTag","deploy:master":"reg -r master --noTag","deploy:branch":"reg branch --noTag","ld":"liff-deploy","prepare":"yarn build:master && ./build-package.sh"},"dependencies":{"crypto-js":"^4.1.1","js-base64":"^3.7.5","js-crypto-ec":"^0.5.6","promise-polyfill":"^8.1.0","tiny-sha256":"^1.0.2","whatwg-fetch":"^3.0.0"},"devDependencies":{"@babel/core":"^7.7.7","@babel/plugin-proposal-class-properties":"^7.8.3","@babel/plugin-syntax-dynamic-import":"^7.7.4","@babel/preset-env":"^7.7.7","@babel/preset-typescript":"^7.7.7","@types/jest":"^24.0.25","@types/node":"^14.0.26","@typescript-eslint/eslint-plugin":"^2.13.0","@typescript-eslint/parser":"^2.13.0","@worksmobile/liff-deploy":"^1.1.43","babel-jest":"^24.6.0","babel-loader":"^8.0.6","body-parser":"^1.18.3","chalk":"^3.0.0","concurrently":"^5.0.2","css-loader":"^3.3.2","eslint":"^6.8.0","eslint-config-prettier":"^6.8.0","eslint-loader":"^3.0.3","eslint-plugin-jest":"^23.1.1","express":"^4.16.4","fast-check":"^1.21.0","http-proxy-middleware":"^0.20.0","husky":"^3.1.0","jest":"^24.6.0","lint-staged":">=9.5.0","nodemon":"^2.0.2","prettier":"^1.19.1","qs":"^6.9.1","request":"^2.88.0","request-promise":"^4.2.5","serve-handler":"^6.1.2","shelljs":"^0.8.3","terser-webpack-plugin":"^2.3.1","ts-loader":"^6.2.1","tslib":"^1.9.3","typescript":"^3.7.4","vconsole":"^3.3.4","vue":"^2.6.11","vue-loader":"^15.8.1","vue-style-loader":"^4.1.2","vue-template-compiler":"^2.6.11","webpack":"^4.41.4","webpack-bundle-analyzer":"^3.6.0","webpack-cli":"^3.3.10"},"husky":{"hooks":{"pre-commit":"lint-staged"}},"lint-staged":{"*.ts":["prettier --write","eslint --fix","git add"],"*.test.js":["prettier --write","eslint --fix","git add"]}}') }, function(t, e, n) { "use strict";
        n.r(e), n.d(e, "woff", (function() { return Ne })); var r = "undefined" != typeof self ? self : void 0,
            o = "URLSearchParams" in r,
            i = "Symbol" in r && "iterator" in Symbol,
            s = "FileReader" in r && "Blob" in r && function() { try { return new Blob, !0 } catch (t) { return !1 } }(),
            a = "FormData" in r,
            u = "ArrayBuffer" in r; if (u) var c = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
            f = ArrayBuffer.isView || function(t) { return t && c.indexOf(Object.prototype.toString.call(t)) > -1 };

        function l(t) { if ("string" != typeof t && (t = String(t)), /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(t) || "" === t) throw new TypeError("Invalid character in header field name"); return t.toLowerCase() }

        function h(t) { return "string" != typeof t && (t = String(t)), t }

        function d(t) { var e = { next: function() { var e = t.shift(); return { done: void 0 === e, value: e } } }; return i && (e[Symbol.iterator] = function() { return e }), e }

        function p(t) { this.map = {}, t instanceof p ? t.forEach((function(t, e) { this.append(e, t) }), this) : Array.isArray(t) ? t.forEach((function(t) { this.append(t[0], t[1]) }), this) : t && Object.getOwnPropertyNames(t).forEach((function(e) { this.append(e, t[e]) }), this) }

        function y(t) { if (t.bodyUsed) return Promise.reject(new TypeError("Already read"));
            t.bodyUsed = !0 }

        function w(t) { return new Promise((function(e, n) { t.onload = function() { e(t.result) }, t.onerror = function() { n(t.error) } })) }

        function v(t) { var e = new FileReader,
                n = w(e); return e.readAsArrayBuffer(t), n }

        function g(t) { if (t.slice) return t.slice(0); var e = new Uint8Array(t.byteLength); return e.set(new Uint8Array(t)), e.buffer }

        function m() { return this.bodyUsed = !1, this._initBody = function(t) { var e;
                this.bodyUsed = this.bodyUsed, this._bodyInit = t, t ? "string" == typeof t ? this._bodyText = t : s && Blob.prototype.isPrototypeOf(t) ? this._bodyBlob = t : a && FormData.prototype.isPrototypeOf(t) ? this._bodyFormData = t : o && URLSearchParams.prototype.isPrototypeOf(t) ? this._bodyText = t.toString() : u && s && ((e = t) && DataView.prototype.isPrototypeOf(e)) ? (this._bodyArrayBuffer = g(t.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : u && (ArrayBuffer.prototype.isPrototypeOf(t) || f(t)) ? this._bodyArrayBuffer = g(t) : this._bodyText = t = Object.prototype.toString.call(t) : this._bodyText = "", this.headers.get("content-type") || ("string" == typeof t ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : o && URLSearchParams.prototype.isPrototypeOf(t) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8")) }, s && (this.blob = function() { var t = y(this); if (t) return t; if (this._bodyBlob) return Promise.resolve(this._bodyBlob); if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer])); if (this._bodyFormData) throw new Error("could not read FormData body as blob"); return Promise.resolve(new Blob([this._bodyText])) }, this.arrayBuffer = function() { return this._bodyArrayBuffer ? y(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(v) }), this.text = function() { var t, e, n, r = y(this); if (r) return r; if (this._bodyBlob) return t = this._bodyBlob, e = new FileReader, n = w(e), e.readAsText(t), n; if (this._bodyArrayBuffer) return Promise.resolve(function(t) { for (var e = new Uint8Array(t), n = new Array(e.length), r = 0; r < e.length; r++) n[r] = String.fromCharCode(e[r]); return n.join("") }(this._bodyArrayBuffer)); if (this._bodyFormData) throw new Error("could not read FormData body as text"); return Promise.resolve(this._bodyText) }, a && (this.formData = function() { return this.text().then(E) }), this.json = function() { return this.text().then(JSON.parse) }, this }
        p.prototype.append = function(t, e) { t = l(t), e = h(e); var n = this.map[t];
            this.map[t] = n ? n + ", " + e : e }, p.prototype.delete = function(t) { delete this.map[l(t)] }, p.prototype.get = function(t) { return t = l(t), this.has(t) ? this.map[t] : null }, p.prototype.has = function(t) { return this.map.hasOwnProperty(l(t)) }, p.prototype.set = function(t, e) { this.map[l(t)] = h(e) }, p.prototype.forEach = function(t, e) { for (var n in this.map) this.map.hasOwnProperty(n) && t.call(e, this.map[n], n, this) }, p.prototype.keys = function() { var t = []; return this.forEach((function(e, n) { t.push(n) })), d(t) }, p.prototype.values = function() { var t = []; return this.forEach((function(e) { t.push(e) })), d(t) }, p.prototype.entries = function() { var t = []; return this.forEach((function(e, n) { t.push([n, e]) })), d(t) }, i && (p.prototype[Symbol.iterator] = p.prototype.entries); var b = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

        function _(t, e) { var n, r, o = (e = e || {}).body; if (t instanceof _) { if (t.bodyUsed) throw new TypeError("Already read");
                this.url = t.url, this.credentials = t.credentials, e.headers || (this.headers = new p(t.headers)), this.method = t.method, this.mode = t.mode, this.signal = t.signal, o || null == t._bodyInit || (o = t._bodyInit, t.bodyUsed = !0) } else this.url = String(t); if (this.credentials = e.credentials || this.credentials || "same-origin", !e.headers && this.headers || (this.headers = new p(e.headers)), this.method = (n = e.method || this.method || "GET", r = n.toUpperCase(), b.indexOf(r) > -1 ? r : n), this.mode = e.mode || this.mode || null, this.signal = e.signal || this.signal, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && o) throw new TypeError("Body not allowed for GET or HEAD requests"); if (this._initBody(o), !("GET" !== this.method && "HEAD" !== this.method || "no-store" !== e.cache && "no-cache" !== e.cache)) { var i = /([?&])_=[^&]*/; if (i.test(this.url)) this.url = this.url.replace(i, "$1_=" + (new Date).getTime());
                else { this.url += (/\?/.test(this.url) ? "&" : "?") + "_=" + (new Date).getTime() } } }

        function E(t) { var e = new FormData; return t.trim().split("&").forEach((function(t) { if (t) { var n = t.split("="),
                        r = n.shift().replace(/\+/g, " "),
                        o = n.join("=").replace(/\+/g, " ");
                    e.append(decodeURIComponent(r), decodeURIComponent(o)) } })), e }

        function I(t, e) { e || (e = {}), this.type = "default", this.status = void 0 === e.status ? 200 : e.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in e ? e.statusText : "", this.headers = new p(e.headers), this.url = e.url || "", this._initBody(t) }
        _.prototype.clone = function() { return new _(this, { body: this._bodyInit }) }, m.call(_.prototype), m.call(I.prototype), I.prototype.clone = function() { return new I(this._bodyInit, { status: this.status, statusText: this.statusText, headers: new p(this.headers), url: this.url }) }, I.error = function() { var t = new I(null, { status: 0, statusText: "" }); return t.type = "error", t }; var T = [301, 302, 303, 307, 308];
        I.redirect = function(t, e) { if (-1 === T.indexOf(e)) throw new RangeError("Invalid status code"); return new I(null, { status: e, headers: { location: t } }) }; var A = r.DOMException;

        function O(t, e) { return new Promise((function(n, o) { var i = new _(t, e); if (i.signal && i.signal.aborted) return o(new A("Aborted", "AbortError")); var a = new XMLHttpRequest;

                function c() { a.abort() }
                a.onload = function() { var t, e, r = { status: a.status, statusText: a.statusText, headers: (t = a.getAllResponseHeaders() || "", e = new p, t.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach((function(t) { var n = t.split(":"),
                                r = n.shift().trim(); if (r) { var o = n.join(":").trim();
                                e.append(r, o) } })), e) };
                    r.url = "responseURL" in a ? a.responseURL : r.headers.get("X-Request-URL"); var o = "response" in a ? a.response : a.responseText;
                    setTimeout((function() { n(new I(o, r)) }), 0) }, a.onerror = function() { setTimeout((function() { o(new TypeError("Network request failed")) }), 0) }, a.ontimeout = function() { setTimeout((function() { o(new TypeError("Network request failed")) }), 0) }, a.onabort = function() { setTimeout((function() { o(new A("Aborted", "AbortError")) }), 0) }, a.open(i.method, function(t) { try { return "" === t && r.location.href ? r.location.href : t } catch (e) { return t } }(i.url), !0), "include" === i.credentials ? a.withCredentials = !0 : "omit" === i.credentials && (a.withCredentials = !1), "responseType" in a && (s ? a.responseType = "blob" : u && i.headers.get("Content-Type") && -1 !== i.headers.get("Content-Type").indexOf("application/octet-stream") && (a.responseType = "arraybuffer")), i.headers.forEach((function(t, e) { a.setRequestHeader(e, t) })), i.signal && (i.signal.addEventListener("abort", c), a.onreadystatechange = function() { 4 === a.readyState && i.signal.removeEventListener("abort", c) }), a.send(void 0 === i._bodyInit ? null : i._bodyInit) })) } "function" != typeof A && ((A = function(t, e) { this.message = t, this.name = e; var n = Error(t);
            this.stack = n.stack }).prototype = Object.create(Error.prototype), A.prototype.constructor = A), O.polyfill = !0, r.fetch || (r.fetch = O, r.Headers = p, r.Request = _, r.Response = I);
        n(10); var k = function(t, e) { return (k = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e) };

        function N(t, e) {
            function n() { this.constructor = t }
            k(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n) } var P, R = function() { return (R = Object.assign || function(t) { for (var e, n = 1, r = arguments.length; n < r; n++)
                    for (var o in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]); return t }).apply(this, arguments) };

        function S(t, e, n, r) { return new(n || (n = Promise))((function(o, i) {
                function s(t) { try { u(r.next(t)) } catch (e) { i(e) } }

                function a(t) { try { u(r.throw(t)) } catch (e) { i(e) } }

                function u(t) { var e;
                    t.done ? o(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) { t(e) }))).then(s, a) }
                u((r = r.apply(t, e || [])).next()) })) }

        function D(t, e) { var n, r, o, i, s = { label: 0, sent: function() { if (1 & o[0]) throw o[1]; return o[1] }, trys: [], ops: [] }; return i = { next: a(0), throw: a(1), return: a(2) }, "function" == typeof Symbol && (i[Symbol.iterator] = function() { return this }), i;

            function a(i) { return function(a) { return function(i) { if (n) throw new TypeError("Generator is already executing."); for (; s;) try { if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o; switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                case 0:
                                case 1:
                                    o = i; break;
                                case 4:
                                    return s.label++, { value: i[1], done: !1 };
                                case 5:
                                    s.label++, r = i[1], i = [0]; continue;
                                case 7:
                                    i = s.ops.pop(), s.trys.pop(); continue;
                                default:
                                    if (!(o = s.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) { s = 0; continue } if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) { s.label = i[1]; break } if (6 === i[0] && s.label < o[1]) { s.label = o[1], o = i; break } if (o && s.label < o[2]) { s.label = o[2], s.ops.push(i); break }
                                    o[2] && s.ops.pop(), s.trys.pop(); continue }
                            i = e.call(t, s) } catch (a) { i = [6, a], r = 0 } finally { n = o = 0 }
                        if (5 & i[0]) throw i[1]; return { value: i[0] ? i[1] : void 0, done: !0 } }([i, a]) } } }

        function C() { if (!P) { var t = window.navigator.userAgent.toLowerCase();
                P = /iphone|ipad|ipod/.test(t) ? "ios" : /android/.test(t) ? "android" : "web" } return P }

        function x() { return !!window._woff } var U, L = { ACCESS_TOKEN: "accessToken", ID_TOKEN: "IDToken", DECODED_ID_TOKEN: "decodedIDToken", FEATURE_TOKEN: "featureToken", FEATURES: "features", LOGIN_TMP: "loginTmp", CONFIG: "config", CONTEXT: "context", EXPIRES: "expires", RAW_CONTEXT: "rawContext", CLIENT_ID: "clientId", SERVICE_CODE: "serviceCode", CLIENT_TYPE: "clientType", WORKS_LANGUAGE: "worksLanguage", CALLBACK_URL: "callbackUrl", WOFF_CONTEXT: "woffContext" };! function(t) { t.NONE = "none", t.HASH = "hash", t.HISTORY = "history" }(U || (U = {})); var B = ["context_token", "feature_token", "access_token", "id_token", "client_id"],
            M = new Set(["400", "401", "403", "404", "429", "500"]),
            j = function(t) {
                function e(e, n) { var r = t.call(this, n) || this; return r.code = e, r } return N(e, t), e }(Error);

        function F(t, e) { return new j(t, e || "") }

        function V(t) { return function(t, e) { if (!e) throw F("INVALID_CONFIG", "liffId is necessary for liff.init()"); var n = (x() ? sessionStorage : localStorage).getItem("LIFF_STORE:" + e + ":" + t); try { return null === n ? null : JSON.parse(n) } catch (r) { return null } }(t, q().liffId) }

        function Y(t, e) { var n = q().liffId; if (!n) throw F("INVALID_CONFIG", "liffId is necessary for liff.init()");
            (x() ? sessionStorage : localStorage).setItem("LIFF_STORE:" + n + ":" + t, JSON.stringify(e)) }

        function W(t) { var e = q().liffId; if (!e) throw F("INVALID_CONFIG", "liffId is necessary for liff.init()");
            (x() ? sessionStorage : localStorage).removeItem("LIFF_STORE:" + e + ":" + t) } var H = { set: function(t, e, n) { var r = t + "=" + e; if (n)
                        for (var o in n) { r += "; " + o + (n[o] ? "=" + n[o] : "") }
                    document.cookie = r }, get: function(t) { var e = new RegExp("(?:(?:^|.*;\\s*)" + t + "\\s*\\=\\s*([^;]*).*$)|^.*$"); return document.cookie.replace(e, "$1") }, remove: function(t, e) { var n = t + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT"; if (e)
                        for (var r in e) n += "; " + r + "=" + e[r];
                    document.cookie = n } },
            G = { get: V, set: Y, remove: W, clean: function() { var t;
                    Object.keys(L).forEach((function(t) { W(L[t]) })), t = q(), H.remove("LIFF_STORE:" + L.EXPIRES + ":" + t.liffId, { path: "/" }) } },
            K = {};

        function q() { return K } var z = [];

        function J() { return z }

        function X(t) { z = t }

        function $() { return V(L.LOGIN_TMP) }

        function Q() { W(L.LOGIN_TMP) }

        function Z() { return V(L.ACCESS_TOKEN) }

        function tt(t) { Y(L.ACCESS_TOKEN, t) }

        function et() { return V(L.ID_TOKEN) }

        function nt(t) { Y(L.ID_TOKEN, t) }

        function rt(t) { Y(L.DECODED_ID_TOKEN, t) }

        function ot() { return V(L.FEATURE_TOKEN) }

        function it() { return V(L.CONTEXT) }

        function st(t) { Y(L.CONTEXT, t) }

        function at() { return !!Z() }

        function ut() { var t; return !(t = q(), H.get("LIFF_STORE:" + L.EXPIRES + ":" + t.liffId)) }

        function ct() { G.clean() }

        function ft(t) { return Object.keys(t).map((function(e) { var n = t[e],
                    r = function(t) { return void 0 !== t ? encodeURIComponent(e) + "=" + encodeURIComponent(t) : encodeURIComponent(e) }; return Array.isArray(n) ? n.map((function(t) { return r(t) })).join("&") : r(n) })).join("&") } var lt = { parse: function(t) { return t.replace(/^\?/, "").replace(/^#\/?/, "").split(/&+/).filter((function(t) { return t.length > 0 })).reduce((function(t, e) { var n = e.split("=").map(decodeURIComponent).map(decodeURIComponent),
                            r = n[0],
                            o = n[1],
                            i = t[r]; return Array.isArray(i) ? i.push(o) : t.hasOwnProperty(r) ? t[r] = [i, o] : t[r] = o, t }), {}) }, stringify: ft },
            ht = "",
            dt = function(t, e, n) { var r = t[e = e]; return Array.isArray(r) ? r.includes(n) : !!t.hasOwnProperty(e) && n === r },
            pt = function(t, e) { return t.replace(/\/+$/, "") + "/" + e.replace(/^\/+/, "") };

        function yt(t) { if (t) { var e, n = JSON.parse(t);
                n.calendarCallbackUrl && (e = n.calendarCallbackUrl, Y(L.CALLBACK_URL, e), delete n.calendarCallbackUrl),
                    function(t) { Y(L.WOFF_CONTEXT, t) }(n) } }

        function wt(t) { t || (t = ""); try { var e = location.origin + location.pathname,
                    n = function(t) { var e = it(); if (!e || !e.endpointUrl) throw F("INIT_FAILED", "Could not get endpointUrl from server."); var n = decodeURIComponent(t);
                        n.startsWith("/") && (n = n.substring(1)); var r = new URL(e.endpointUrl),
                            o = r.origin,
                            i = r.pathname,
                            s = r.search;
                        i.endsWith("/") && (i = i.substring(0, i.length - 1)); var a = n.indexOf("?"),
                            u = n.indexOf("#", a + 1),
                            c = u > 0 ? "#" + n.substring(u + 1) : ""; if (a < 0) return pt("" + o + i, "" + n + c); var f = lt.parse(n.substring(a + 1, u < 0 ? void 0 : u));
                        n = n.substring(0, a); var l = lt.parse(s); return Object.keys(f).forEach((function(t) { var e = f[t],
                                n = function(t, e) { if (!dt(l, t, e)) { var n = l[t];
                                        Array.isArray(n) ? n.push(e) : l.hasOwnProperty(t) ? l[t] = [n, e] : l[t] = e } };
                            Array.isArray(e) ? e.forEach((function(e) { n(t, e) })) : n(t, e) })), pt("" + o + i, n + "?" + lt.stringify(l) + c) }(t),
                    r = new URL(n),
                    o = new URLSearchParams(r.search),
                    i = o.get("woff.context");
                i && (o.delete("woff.context"), r.search = o.toString(), n = r.toString(), yt(i)), n !== e && location.replace(n) } catch (s) { if ("INIT_FAILED" === s.code) throw s } } var vt = n(6),
            gt = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        function mt(t) { for (var e = "", n = 0; n < t; n++) e += gt[Math.floor(Math.random() * gt.length)]; return e }

        function bt(t) { return window.atob(t.replace(/\-/g, "+").replace(/_/g, "/")) } var _t = { decode: bt, encode: function(t) { return window.btoa(t).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "") } };

        function Et(t) { var e = t.subdomain,
                n = void 0 === e ? "api" : e,
                r = t.pathname; return "api" === n ? "https://www.worksapis.com/woff/" + r : "https://auth.worksmobile.com/" + r } var It = { token: Et({ subdomain: "access", pathname: "api/woff/oauth2/v2.0/token" }), certs: Et({ subdomain: "access", pathname: "oauth2/v2.1/certs" }), "openid-configuration": Et({ subdomain: "access", pathname: ".well-known/openid-configuration" }), authorize: Et({ subdomain: "access", pathname: "woff/oauth2/v2.0/authorize" }), profile: Et({ subdomain: "access", pathname: "api/woff/oauth2/v2.1/profile" }), message: Et({ pathname: "v1.0/messages/channels/$0/woffMessages" }), flexMessage: Et({ pathname: "v1.0/messages/channels/$0/woffFlexMessages" }), messageOTT: Et({ pathname: "message/v3/multisend?type=ott" }), friendship: Et({ pathname: "friendship/v1/status" }), userPicker: Et({ subdomain: "access", pathname: "oauth2/v2.1/woff/userPicker" }), shareTargetPicker: Et({ subdomain: "access", pathname: "oauth2/v2.1/woff/shareTargetPicker" }), shareTargetPickerOtt: Et({ pathname: "v2/woff/ott" }), userPickerDomain: Et({ subdomain: "access", pathname: "" }), apps: Et({ subdomain: "access", pathname: "api/woff/apps" }), scanQR: "https://static.worksmobile.net/static/wm/woff/qr/qr.html" };

        function Tt(t, e) { var n = It[t] || ""; return e && (n = n + "?metaParams=" + _t.encode(JSON.stringify(e))), n }

        function At(t) { var e = mt(43),
                n = Object(vt.a)(e),
                r = q(); if (!r || !r.liffId) throw F("INVALID_CONFIG", "You need to define `woffId` for woff.login()"); var o = (it() || {}).clientId,
                i = { app_id: r.liffId, client_id: o, state: mt(12), response_type: "code", code_challenge_method: "S256", code_challenge: n };
            t && t.redirectUri && (i.redirect_uri = t.redirectUri), t && t.domain && (i.domain = t.domain), Y(L.LOGIN_TMP, { codeVerifier: e }); var s = Tt("authorize") + "?" + lt.stringify(i);
            window.location.href = s } var Ot = {},
            kt = !1;

        function Nt(t, e) { kt || (kt = !0, window.addEventListener("liffEvent", (function(t) { t && t.detail && t.detail.type && Ot[t.detail.type] && Ot[t.detail.type].forEach((function(e) { return e(t) })) }))), Ot[t] ? Ot[t].push(e) : Ot[t] = [e] }

        function Pt(t, e) { var n = Ot[t]; if (n && Array.isArray(n)) { var r = n.indexOf(e);
                r >= 0 && n.splice(r, 1) } } var Rt = function(t) { return Object.entries(t).map((function(t) { var e = t[0],
                    n = t[1]; return encodeURIComponent(e) + "=" + encodeURIComponent(function(e) { if ("object" == typeof e) try { return JSON.stringify(e) } catch (t) { return "" + e }
                    return "" + e }(n)) })).join("&") };

        function St(t, e) {! function(t, e) { var n = !1,
                    r = document.createElement("img"); if (r.width = 1, r.height = 1, "function" == typeof e) { var o = function() { n || (e(r), n = !0) };
                    r.onload = o, setTimeout(o, 1500) }
                r.src = "https://torimochi.line-apps.com/1/req?" + Rt(t) }({ cid: "liff", eventType: "debug", timestamp: Date.now(), logVersion: "1.6.9", threshold: 0, productKey: "liff-real", productVersion: "latest", url: location.href, host: location.hostname, path: location.pathname, query: location.search, hash: location.hash, referrer: document.referrer, userId: "liff", sessionId: "none", sessionPath: "", sessionQuery: "", sessionTime: "0", sessionDuration: "0", sessionParams: {}, touchX: "0", touchY: "0", scrollX: "0", scrollY: "0", windowX: "0", windowY: "0", targets: [], content: { debug: { message: t } } }, e) }

        function Dt(t) { var e = t.split("."); if (e[1]) try { var n = e[1].replace(/-/g, "+").replace(/_/g, "/"); return JSON.parse(window.atob(n)) } catch (r) { return null }
            return null }

        function Ct(t) { for (var e = t.length, n = new ArrayBuffer(e), r = new Uint8Array(n), o = 0; o < e; o++) r[o] = t.charCodeAt(o); return n } var xt = function(t) { return S(void 0, void 0, void 0, (function() { var e, n; return D(this, (function(r) { switch (r.label) {
                        case 0:
                            if (!t.ok) return [3, 4];
                            r.label = 1;
                        case 1:
                            return r.trys.push([1, 3, , 4]), [4, t.json()];
                        case 2:
                            return [2, r.sent()];
                        case 3:
                            return r.sent(), [2, t];
                        case 4:
                            return r.trys.push([4, 6, , 7]), [4, t.json()];
                        case 5:
                            return e = r.sent(), [3, 7];
                        case 6:
                            throw r.sent(), n = String(t.status), F(M.has(n) ? n : "UNKNOWN", t.statusText);
                        case 7:
                            throw F(e.error || "UNKNOWN", e.error_description || e.message) } })) })) };

        function Ut(t, e) { var n = {}; if (!e || !e.headers) { var r = Z(); if (!r) return Promise.reject(F("UNAUTHORIZED", "Need access_token for api call, Please login first")); var o = (it() || {}).clientId; if (!o) return Promise.reject(F("UNAUTHORIZED", "Need consumerKey(clientId) for api call, Please page refresh"));
                n = { "Content-Type": "application/json", Accept: "application/json", Authorization: "Bearer " + r, consumerKey: o } } return fetch(t, R({ headers: n }, e)).then(xt) } var Lt = function() { return S(this, void 0, void 0, (function() { return D(this, (function(t) { switch (t.label) {
                            case 0:
                                return [4, Ut(Tt("certs"))];
                            case 1:
                                return [2, t.sent()] } })) })) },
            Bt = function() { return "ios" === C() && (null !== (t = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/)) && parseInt(t[1], 10) <= 10); var t };

        function Mt(t, e, r) { return S(this, void 0, void 0, (function() { var o, i, s, a; return D(this, (function(u) { switch (u.label) {
                        case 0:
                            return Bt() ? [4, Promise.all([n.e(2), n.e(0)]).then(n.t.bind(null, 313, 7))] : [3, 2];
                        case 1:
                            return i = u.sent(), s = i.default, o = s.verify(e, r, t, "SHA-256", "raw"), [3, 5];
                        case 2:
                            return [4, crypto.subtle.importKey("jwk", t, { name: "ECDSA", namedCurve: "P-256" }, !1, ["verify"])];
                        case 3:
                            return a = u.sent(), [4, crypto.subtle.verify({ name: "ECDSA", hash: { name: "SHA-256" } }, a, r, e)];
                        case 4:
                            o = u.sent(), u.label = 5;
                        case 5:
                            return [2, o] } })) })) }

        function jt(t, e) { return S(this, void 0, void 0, (function() { var n, r, o, i, s, a, u, c, f, l, h, d, p, y; return D(this, (function(w) { switch (w.label) {
                        case 0:
                            return n = t.split("."), r = n[0], o = n[1], i = n[2], s = JSON.parse(bt(r)), a = JSON.parse(bt(o)), u = Ct(bt(i)), c = Ct(r + "." + o), [4, Lt()];
                        case 1:
                            if (f = w.sent(), !(l = f.keys.find((function(t) { return t.kid === s.kid })))) return [3, 6]; if (delete l.alg, "ES256" !== s.alg) throw F("INVALID_ID_TOKEN", 'Invalid "alg" value in ID_TOKEN');
                            h = void 0, w.label = 2;
                        case 2:
                            return w.trys.push([2, 4, , 5]), [4, Mt(l, c, u)];
                        case 3:
                            return h = w.sent(), [3, 5];
                        case 4:
                            throw F("INVALID_ID_TOKEN", "Failed to use Crypto API to verify ID_TOKEN: " + w.sent());
                        case 5:
                            if (h) { if (d = "https://access.auth.worksmobile.com" !== a.iss, p = a.aud !== e, y = 1e3 * a.exp < Date.now(), d) throw F("INVALID_ID_TOKEN", 'Invalid "iss" value in ID_TOKEN'); if (p) throw F("INVALID_ID_TOKEN", 'Invalid "aud" value in ID_TOKEN'); if (y) throw F("INVALID_ID_TOKEN", 'Invalid "exp" value in ID_TOKEN'); return [2, a] } throw F("INVALID_ID_TOKEN", "Invalid signature in ID_TOKEN");
                        case 6:
                            throw F("INVALID_ID_TOKEN", 'Invalid "kid" value in ID_TOKEN');
                        case 7:
                            return [2] } })) })) } var Ft = n(2),
            Vt = n.n(Ft); var Yt;

        function Wt(t) { return S(this, void 0, void 0, (function() { var e, n, r, o, i, s, a, u, c; return D(this, (function(f) { switch (f.label) {
                        case 0:
                            return [4, new Promise((function(t) { if (window._woff && window._woff.features) X(window._woff.features), t();
                                else { var e = function(n) { Pt("ready", e), n && n.detail && n.detail.data && n.detail.data.features && X(n.detail.data.features), t() };
                                    Nt("ready", e) } }))];
                        case 1:
                            if (f.sent(), e = lt.parse(window.location.hash), n = function(t) { for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n]; for (var r = function(e) { Object.keys(e).filter((function(t) { return null !== e[t] && void 0 !== e[t] })).reduce((function(t, n) { return t[n] = e[n], t }), t) }, o = 0, i = e; o < i.length; o++) { var s = i[o];
                                        r(s) } return t }({ access_token: Z(), context_token: V(L.RAW_CONTEXT), feature_token: ot(), id_token: et(), client_id: V(L.CLIENT_ID) }, e), r = n.access_token, o = n.context_token, i = n.feature_token, s = n.id_token, a = n.client_id, u = "function" == typeof window._woff.validateFeatureToken, o && st(Dt(o)), !at()) { if (!i || !r) throw At(), F("INIT_FAILED", "Failed to parse feature_token or access_token"); if (u && ! function(t, e) { return window._woff.makeFeatureTokenHash = function(t, e) { return Vt()(t + "-" + e) }, !!window._woff.validateFeatureToken(t, e) }(t.liffId, i)) throw At(), F("INIT_FAILED", "Failed to validate feature_token");!u && window.history.length > 1 ? St("potential abuser") : (Y(L.FEATURE_TOKEN, i), tt(r)) } return s && a && !et() ? (nt(s), [4, jt(s, a)]) : [3, 3];
                        case 2:
                            (c = f.sent()) && rt(c), f.label = 3;
                        case 3:
                            return [2] } })) })) }

        function Ht(t) { return S(this, void 0, void 0, (function() { var e, n, r, o, i, s, a; return D(this, (function(u) { switch (u.label) {
                        case 0:
                            return e = Tt("apps"), n = e + "/" + t + "/context-token", r = Z(), o = { "Content-Type": "application/json", Accept: "application/json" }, r && (o.Authorization = "Bearer " + r), [4, Ut(n, { headers: o })];
                        case 1:
                            if (i = u.sent(), !(s = i.contextToken)) throw F("INIT_FAILED", "Can not get context from server."); if (!(a = Dt(s))) throw F("INIT_FAILED", "Invalid context token."); return [2, a] } })) })) }

        function Gt() { return S(this, void 0, void 0, (function() { var t, e, n; return D(this, (function(r) { switch (r.label) {
                        case 0:
                            if (!(t = q().liffId)) throw F("INIT_FAILED", "Invalid LIFF ID."); return [4, Ht(t)];
                        case 1:
                            return e = r.sent(), n = V(L.WOFF_CONTEXT), Object.assign(e, n), st(e), W(L.WOFF_CONTEXT), [2] } })) })) }

        function Kt() { var t = "",
                e = Z();
            e && (t = e.substring(0, 3) + "-"); var n = Tt("profile"),
                r = Ut(n = n.slice(0, 8) + t + n.slice(8)); return r.then((function(t) { var e;
                e = t.worksLanguage.replace(/_/g, "-"), Y(L.WORKS_LANGUAGE, e) })), r }

        function qt(t) { return S(this, void 0, void 0, (function() { var e, n, r, o = this; return D(this, (function(i) { switch (i.label) {
                        case 0:
                            e = function() { return S(o, void 0, void 0, (function() { var e, n, r, o, i; return D(this, (function(s) { switch (s.label) {
                                            case 0:
                                                return [4, (a = q(), u = lt.parse(window.location.search), c = $(), f = { grant_type: "authorization_code", client_id: (it() || {}).clientId, code: u.code, code_verifier: c.codeVerifier, redirect_uri: a.redirectUri || u.liffRedirectUri, id_token_key_type: "JWK" }, l = lt.stringify(f), Ut(Tt("token"), { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" }, body: l }))];
                                            case 1:
                                                return e = s.sent(), n = e.access_token, r = e.id_token, o = e.expires_in, tt(n),
                                                    function(t) { var e = q();
                                                        H.set("LIFF_STORE:" + L.EXPIRES + ":" + e.liffId, t.getTime(), { expires: t.toUTCString(), path: "/", secure: null }) }(new Date(Date.now() + 1e3 * o)), Kt(), Q(), r ? (nt(r), [4, jt(r, t)]) : [3, 3];
                                            case 2:
                                                (i = s.sent()) && rt(i), s.label = 3;
                                            case 3:
                                                return [4, Gt()];
                                            case 4:
                                                return s.sent(), [2] } var a, u, c, f, l })) })) }, i.label = 1;
                        case 1:
                            return i.trys.push([1, 3, , 4]), [4, e()];
                        case 2:
                            return i.sent(), [3, 4];
                        case 3:
                            throw n = i.sent(), r = n, Q(), r;
                        case 4:
                            return [2] } })) })) }

        function zt(t) { return S(this, void 0, void 0, (function() { var e; return D(this, (function(n) { switch (n.label) {
                        case 0:
                            if (!t.liffId) throw F("INVALID_CONFIG", "woffId is necessary for woff.init()"); return K = t, t.forcedInit && W(L.ACCESS_TOKEN), e = lt.parse(window.location.search), i = e.code, s = $(), Boolean(i && !at() && s && s.codeVerifier) ? [4, qt(e.liffClientId)] : [3, 2];
                        case 1:
                            return [2, n.sent()];
                        case 2:
                            if (e.error && e.liffOAuth2Error) throw r = e.error, o = e.error_description, F("INIT_FAILED", r + ": " + o.replace(/\+/g, " ")); return x() ? [4, Wt(t)] : [3, 4];
                        case 3:
                            n.sent(), n.label = 4;
                        case 4:
                            return at() ? [3, 6] : [4, Gt()];
                        case 5:
                            n.sent(), n.label = 6;
                        case 6:
                            return e["woff.state"] && wt(e["woff.state"]), x() || !at() ? [2] : ut() ? (ct(), [2]) : [2, Gt()] } var r, o, i, s })) })) } var Jt = new Promise((function(t) { Yt = t }));

        function Xt() { return new Promise((function(t, e) { var n = document.createElement("script"),
                    r = "ios" === C() ? "https://static.worksmobile.net/static/wm/woff/edge/3.6/ios-extensions.js" : "https://static.worksmobile.net/static/wm/woff/edge/3.6/non-ios-extensions.js";
                n.onload = function() { var n = window.liffClientExtension;
                    n ? t(n) : e(F("INIT_FAILED", "Unable to load client features. (Extension is empty)")) }, n.onerror = function() { e(F("INIT_FAILED", "Unable to load client features.")) }, n.src = r, n.type = "text/javascript", document.body.appendChild(n) })) }

        function $t(t, e, n) { var r = this; return function() { return S(this, void 0, void 0, (function() { return D(this, (function(t) { switch (t.label) {
                            case 0:
                                return [3, 2];
                            case 1:
                                return [2, t.sent().default];
                            case 2:
                                return [2, Xt()] } })) })) }().then((function(e) { return e.install(r), zt({ liffId: t.woffId, forcedInit: t.forcedInit }) })).then((function() { "function" == typeof e && e(), Yt() })).catch((function(t) { return "function" == typeof n && n(t), Promise.reject(t) })) }

        function Qt() { var t = navigator.userAgent.match(/WorksMobile\/\d+(\.\d+)*/i); return t ? t[0].slice(12) : null } var Zt = ["shareTargetPicker"],
            te = { shareTargetPicker: function() { if (!at()) return !1; var t = it(); if (!t) return !1; var e = t.availability.shareTargetPicker,
                        n = e.permission,
                        r = e.minVer; if (!n) return !1; if (x()) { var o = Qt(); return null !== o && function(t, e) { if (t === e) return 0; for (var n = t.split("."), r = e.split("."), o = Math.max(n.length, r.length), i = 0; i < o; i++) { n[i] || (n[i] = "0"), r[i] || (r[i] = "0"); var s = parseInt(n[i]) - parseInt(r[i]); if (0 !== s) return s > 0 ? 1 : -1 } return 0 }(o, r) >= 0 } return !0 } },
            ee = function(t) { if (!Zt.includes(t)) throw F("INVALID_ARGUMENT", "Unexpected API name."); var e = te[t]; return !e || e() };
        n(14);

        function ne(t, e, n) { void 0 === e && (e = {}), void 0 === n && (n = ""); var r = ot(); if (!r) throw F("FORBIDDEN", "Invalid featureToken for client features"); if (!window._woff || !window._woff.postMessage) throw F("INVALID_ARGUMENT", "postMessage is not available from client");
            window._woff.postMessage(t, r, n, JSON.stringify(e)) }

        function re(t, e, n) { return void 0 === e && (e = {}), void 0 === n && (n = { once: !0 }), ot() ? (n = R({ callbackId: mt(12), once: !0 }, n), new Promise((function(r, o) { var i = function(e) { if (e && e.detail) { var s = e.detail.callbackId === n.callbackId,
                            a = "string" != typeof e.detail.callbackId;
                        (s || a) && (n.once && Pt(t, i), e.detail.error ? o(e.detail.error) : e.detail.data ? r(e.detail.data) : o(e.detail)) }
                    o() };
                Nt(t, i), ne(t, e, n.callbackId) }))) : Promise.reject(F("FORBIDDEN", "Invalid featureToken for client features")) }

        function oe(t) { return J().indexOf(t) > -1 } var ie, se;

        function ae(t) { if (! function(t) { if (!t || "object" != typeof t) return !1; var e = t,
                        n = e.url,
                        r = [typeof n, typeof e.external],
                        o = r[1]; return "string" === r[0] && "" !== n && ("undefined" === o || "boolean" === o) }(t)) throw F("INVALID_ARGUMENT", "Invalid parameters for liff.openWindow()"); if (x())
                if (window._woff.postMessage) re("openWindow", t);
                else { var e = t.url,
                        n = t.external,
                        r = void 0 !== n && n;
                    window.open(function(t, e) { var n = t.split("?"),
                            r = n[0],
                            o = n[1],
                            i = (void 0 === o ? "" : o).split("#"),
                            s = i[0],
                            a = i[1]; return r + "?is_woff_external_open_window=" + !!e + (s ? "&" + s.split("&").map(decodeURIComponent).filter((function(t) { return -1 === t.indexOf("is_woff_external_open_window") })).join("&").concat(a ? "#" + a : "") : "") }(e, r)) }
            else window.open(t.url, "_blank") }

        function ue() { return Math.floor(9e5 * Math.random() + 1e5) }

        function ce(t, e) { var n = fe,
                r = e.split(".")[0];
            t.removeEventListener(r, n[e]), n[e] = null }! function(t) { t.none = "none", t.ott = "ott" }(ie || (ie = {})),
        function(t) { t.none = "none", t.ott = "ott" }(se || (se = {})); var fe = {},
            le = !1,
            he = !1;

        function de(t, e, n, r) { le || (he = function() { var t = !1; try { var e = Object.defineProperty({}, "passive", { get: function() { t = !0 } });
                    window.addEventListener("test", e, e), window.removeEventListener("test", e, e) } catch (n) { t = !1 } return t }(), le = !0); var o = e.split(".")[0]; return new Promise((function(i) { var s = function(o) { i(o), n && n(o), r && r.once && ce(t, e) };
                fe[e] = s, t.addEventListener(o, s, !!he && r) })) } var pe = function() {
                function t() { this.listenKeyName = "message.liff" } return t.prototype.init = function(t, e, n) { var r = this;
                    this.receiver = t, this.destination = e, this.destroy(), de(this.receiver, this.listenKeyName, (function(t) { return S(r, void 0, void 0, (function() { return D(this, (function(e) { switch (e.label) {
                                    case 0:
                                        return t && t.data && t.data.name ? [4, n(t)] : [3, 2];
                                    case 1:
                                        e.sent(), e.label = 2;
                                    case 2:
                                        return [2] } })) })) })) }, t.prototype.send = function(t, e) { void 0 === e && (e = {}); var n = Tt("userPickerDomain"),
                        r = { name: t, body: e };
                    this.destination.postMessage(r, n) }, t.prototype.destroy = function() { ce(this.receiver, this.listenKeyName) }, t }(),
            ye = function() {
                function t(t, e, n) { void 0 === n && (n = window), this.url = t || "", this.uniqAttr = "", this.accessToken = e, this.namespace = n, this.windowPostMessage = new pe } return t.prototype.init = function() { return S(this, void 0, void 0, (function() { var t = this; return D(this, (function(e) { switch (e.label) {
                                case 0:
                                    return [4, this.prepareWindow()];
                                case 1:
                                    return e.sent(), this.windowPostMessage.init(this.namespace, this.postmessageDestination, this.postMessageCallback), this.pingHandler = setInterval((function() { t.windowPostMessage.send("ping") }), 1e3), this.healthcheckHandler = setInterval((function() { t.postmessageDestination.closed && t.resolve && t.resolve(null) }), 1e3), [2] } })) })) }, t.prototype.start = function() { return S(this, void 0, void 0, (function() { var t = this; return D(this, (function(e) { return [2, new Promise((function(e, n) { t.resolve = e, t.reject = n }))] })) })) }, t.prototype.destroy = function() { return S(this, void 0, void 0, (function() { return D(this, (function(t) { return clearInterval(this.pingHandler), clearInterval(this.healthcheckHandler), this.breakWindow(), this.windowPostMessage.destroy(), [2] })) })) }, t.prototype.postMessageCallback = function(t) { return S(this, void 0, void 0, (function() { return D(this, (function(e) { switch (t.data.name) {
                                case "ping":
                                    clearInterval(this.pingHandler), this.windowPostMessage.send("pong", { accessToken: this.accessToken }); break;
                                case "exception":
                                    this.destroy(), this.reject(t.data.body) } return [2] })) })) }, t }(); var we = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this } return N(e, t), Object.defineProperty(e.prototype, "postmessageDestination", { get: function() { return this.iframe.contentWindow }, enumerable: !1, configurable: !0 }), e.prototype.init = function() { return S(this, void 0, void 0, (function() { return D(this, (function(e) { switch (e.label) {
                            case 0:
                                return [4, t.prototype.init.call(this)];
                            case 1:
                                return e.sent(), [2] } })) })) }, e.prototype.prepareWindow = function() { return S(this, void 0, void 0, (function() { return D(this, (function(t) { return this.uniqAttr = function(t) { void 0 === t && (t = window); for (var e, n = 1; n <= 100; n++) { var r = "data-l-{0}".replace("{0}", mt(6)); if (e = r, !t.document.body.querySelector("[" + e + "]")) return r } throw new Error("can't make a relavent name space for LIFF on HTML") }(), this.contentElm = this.prepareDom(), this.styleElm = this.prepareStyle(), this.changeBodyStyle(), this.namespace.document.body.appendChild(this.contentElm), this.namespace.document.head.appendChild(this.styleElm), [2] })) })) }, e.prototype.breakWindow = function() { return S(this, void 0, void 0, (function() { return D(this, (function(t) { return this.namespace.document.body.removeChild(this.contentElm), this.namespace.document.head.removeChild(this.styleElm), [2] })) })) }, e.prototype.prepareDom = function() { var t = this.namespace.document.createElement("iframe"); return t.setAttribute("sandbox", "allow-scripts allow-same-origin"), t.setAttribute("name", "LIFF-iframe-" + this.uniqAttr), t.setAttribute("src", this.url), t.setAttribute("class", "liff-iframe"), t.setAttribute(this.uniqAttr, ""), this.iframe = t, t }, e.prototype.prepareStyle = function() { return this.namespace.document.createElement("style") }, e }(ye); var ve = function(t) { var e = t.match(/^(https?:\/\/.*?)\//); return e && e[1] || "" },
            ge = function() { return ve(Tt("userPicker")) },
            me = function(t) {
                function e(e, n, r) { void 0 === r && (r = window); var o = t.call(this, e, n, r) || this; return o.submittedData = !1, o.originalBodyStyle = "", o.orgDocumentStyle = "", o.originalBodyPos = { x: 0, y: 0 }, o.postMessageCallback = o.postMessageCallback.bind(o), o } return N(e, t), e.prototype.init = function(e) { return S(this, void 0, void 0, (function() { return D(this, (function(n) { switch (n.label) {
                                case 0:
                                    return e !== U.HASH && e !== U.HISTORY && (e = U.NONE), this.routerMode = e, [4, t.prototype.init.call(this)];
                                case 1:
                                    return n.sent(), [4, this.historyAdd()];
                                case 2:
                                    return n.sent(), this.startWatchingHistoryChange(), [2] } })) })) }, e.prototype.prepareDom = function() { var e = t.prototype.prepareDom.call(this),
                        n = this.namespace.document.createElement("div");
                    n.setAttribute("class", "liff-wrap"), n.setAttribute(this.uniqAttr, ""); var r = this.namespace.document.createElement("div"); return r.setAttribute("class", "liff-wrap_in isOpening"), r.setAttribute(this.uniqAttr, ""), r.appendChild(e), n.appendChild(r), this.wrapperIn = r, n }, e.prototype.prepareStyle = function() { var e, n, r = t.prototype.prepareStyle.call(this); return r.textContent = function t(e, n) { void 0 === n && (n = !0); var r = ""; for (var o in e) "object" == typeof e[o] ? (o.indexOf("@keyframes") >= 0 && (n = !1), r += o + "{" + t(e[o], n) + "}") : r += o + ":" + e[o] + (n ? "!important" : "") + ";"; return r }((e = this.uniqAttr, (n = {})["[" + e + "]"] = { margin: 0, padding: 0, border: 0, width: "100vw", "font-size": "100%", font: "inherit", "vertical-align": "baseline", "box-size": "border-box", display: "block", position: "initial", all: "initial" }, n[".liff-wrap[" + e + "]"] = { position: "relative", "z-index": 1e4 }, n[".liff-wrap_in[" + e + "]"] = { position: "fixed", width: "100vw", border: "none", "overflow-x": "hidden", "overflow-y": "auto", top: 0, bottom: 0, left: 0, right: 0, "z-index": 1e4, "-webkit-overflow-scrolling": "touch", "background-color": "white" }, n[".liff-button-area[" + e + "]"] = { position: "fixed", bottom: 0, left: 0, right: 0, padding: "8px 16px", background: "#ffffff", "background-color": "white", "z-index": 10001, display: "flex", "justify-content": "center" }, n[".liff-button-area[" + e + "] > button"] = { flex: "0 1 100%", height: "45px", "margin-right": "7.5px", border: "none", "border-radius": "5px", color: "#6c7985", "background-color": "#dee5ec", "font-weight": 600, "line-height": "20px", "font-size": "16px", "text-decoration": "none", "word-break": "break-all", "text-align": "center", opacity: 0 }, n[".liff-button-area[" + e + "] > button.liff-isDisp"] = { transition: "opacity .4s ease-in", opacity: 1 }, n[".liff-button-area[" + e + "] > .liff-button-submit"] = { color: "#ffffff", "background-color": "#00b900" }, n[".liff-button-area[" + e + "] > button:disabled"] = { color: "rgba(255,255,255, 0.5)", cursor: "initial" }, n[".liff-button-area[" + e + "] > button:last-of-type"] = { "margin-right": 0 }, n[".liff-wrap_in[" + e + "].isOpening"] = { animation: "fadein-" + e + " 0.4s forwards ease-out" }, n[".liff-wrap_in[" + e + "].isClosing"] = { animation: "fadein-" + e + "reverse 0.4s forwards ease-in" }, n[".liff-iframe[" + e + "]"] = { width: "100%", height: "100%", border: "none" }, n["@keyframes fadein-" + e] = { from: { opacity: 0, transform: "translateY(100vh)" }, to: { opacity: 1, transform: "translateY(0)" } }, n["@keyframes fadein-" + e + "reverse"] = { from: { opacity: 1, transform: "translateY(0)" }, to: { opacity: 0, transform: "translateY(100vh)" } }, n)), r }, e.prototype.cancel = function() { return S(this, void 0, void 0, (function() { return D(this, (function(t) { switch (t.label) {
                                case 0:
                                    return this.resolve(null), [4, this.destroy()];
                                case 1:
                                    return t.sent(), [2] } })) })) }, e.prototype.submit = function() { return S(this, void 0, void 0, (function() { return D(this, (function(t) { switch (t.label) {
                                case 0:
                                    return this.resolve(this.submittedData), [4, this.destroy()];
                                case 1:
                                    return t.sent(), [2] } })) })) }, e.prototype.destroy = function() { return S(this, void 0, void 0, (function() { var e = this; return D(this, (function(n) { switch (n.label) {
                                case 0:
                                    return this.revertBodyStyle(), [4, new Promise((function(t) { "onanimationend" in window ? (e.wrapperIn.classList.remove("isOpening"), setTimeout((function() { e.wrapperIn.classList.add("isClosing"), de(e.wrapperIn, "animationend.iframe", void 0, { once: !0 }).then(t), setTimeout((function() { ce(e.wrapperIn, "animationend.iframe"), t() }), 480) }), 0)) : t() }))];
                                case 1:
                                    return n.sent(), [4, t.prototype.destroy.call(this)];
                                case 2:
                                    return n.sent(), [2] } })) })) }, e.prototype.changeBodyStyle = function() { this.originalBodyPos.x = window.scrollX, this.originalBodyPos.y = window.scrollY, this.originalBodyStyle = this.namespace.document.body.style.cssText, this.orgDocumentStyle = this.namespace.document.documentElement.style.cssText, this.namespace.document.body.style.cssText = this.originalBodyStyle + "overflow:hidden!important;height: 100%!important;", this.namespace.document.documentElement.style.cssText = "overflow:hidden!important;height: 100%!important;", de(this.namespace, "scroll.liff.iframe", (function() { window.scrollTo(0, 0) }), { passive: !1 }) }, e.prototype.revertBodyStyle = function() { this.namespace.document.body.style.cssText = this.originalBodyStyle, this.namespace.document.documentElement.style.cssText = this.orgDocumentStyle, window.scrollTo(this.originalBodyPos.x, this.originalBodyPos.y), ce(this.namespace, "scroll.liff.iframe") }, e.prototype.filter = function(t) { var e = {}; for (var n in t) t.hasOwnProperty(n) && t[n] && n.length && (e[n] = t[n]); return e }, e.prototype.postMessageCallback = function(e) { return S(this, void 0, void 0, (function() { var n; return D(this, (function(r) { switch (r.label) {
                                case 0:
                                    return this.allowPostMessageOrigin || (this.allowPostMessageOrigin = ge()), e.origin !== this.allowPostMessageOrigin ? [2] : [4, t.prototype.postMessageCallback.call(this, e)];
                                case 1:
                                    switch (r.sent(), e.data.name) {
                                        case "cancel":
                                            return [3, 2];
                                        case "submit":
                                            return [3, 6] } return [3, 10];
                                case 2:
                                    return this.routerMode !== U.NONE ? [3, 4] : [4, this.cancel()];
                                case 3:
                                    return r.sent(), [3, 5];
                                case 4:
                                    this.namespace.history.back(), r.label = 5;
                                case 5:
                                    return [3, 10];
                                case 6:
                                    if (!((n = e.data) && n.body && n.body.token)) throw new Error("submitted without data"); return this.submittedData = n.body.token, this.routerMode !== U.NONE ? [3, 8] : [4, this.submit()];
                                case 7:
                                    return r.sent(), [3, 9];
                                case 8:
                                    this.namespace.history.back(), r.label = 9;
                                case 9:
                                    return [3, 10];
                                case 10:
                                    return [2] } })) })) }, e.prototype.historyAdd = function() { if (this.routerMode === U.NONE) return Promise.resolve(); switch (this.routerMode) {
                        case U.HASH:
                            return this.namespace.location.hash = lt.stringify(R(R({}, lt.parse(this.namespace.location.hash)), { userpicker: !0 })), new Promise((function(t) { setTimeout(t, 0) }));
                        case U.HISTORY:
                            return this.namespace.history.pushState({ userpicker: !0 }, "liff userpicker", ""), Promise.resolve() } }, e.prototype.startWatchingHistoryChange = function() { var t = this,
                        e = function() { return S(t, void 0, void 0, (function() { return D(this, (function(t) { switch (t.label) {
                                        case 0:
                                            return this.submittedData ? [4, this.submit()] : [3, 2];
                                        case 1:
                                            return t.sent(), [3, 4];
                                        case 2:
                                            return [4, this.cancel()];
                                        case 3:
                                            t.sent(), t.label = 4;
                                        case 4:
                                            return [2] } })) })) }; switch (this.routerMode) {
                        case U.HASH:
                            de(this.namespace, "hashchange.liff.iframe", e, { once: !0 }); break;
                        case U.HISTORY:
                            de(this.namespace, "popstate.liff.iframe", e, { once: !0 }) } }, e.prototype.historyRemove = function() { switch (this.routerMode) {
                        case U.HASH:
                            ce(this.namespace, "hashchange.liff.iframe"); var t = lt.parse(window.location.hash);
                            delete t.userpicker, window.location.hash = lt.stringify(this.filter(t)); break;
                        case U.HISTORY:
                            ce(this.namespace, "popstate.liff.iframe"), window.history.replaceState({ userpicker: !1 }, "liff userpicker", "") } }, e }(we),
            be = function(t) {
                function e(e, n, r) { void 0 === r && (r = window); var o = t.call(this, e, n, r) || this; return o.submittedData = !1, o.postMessageCallback = o.postMessageCallback.bind(o), o } return N(e, t), e.prototype.init = function() { return S(this, void 0, void 0, (function() { return D(this, (function(e) { switch (e.label) {
                                case 0:
                                    return [4, t.prototype.init.call(this)];
                                case 1:
                                    return e.sent(), [2] } })) })) }, e.prototype.cancel = function() { return S(this, void 0, void 0, (function() { return D(this, (function(t) { switch (t.label) {
                                case 0:
                                    return this.resolve(null), [4, this.destroy()];
                                case 1:
                                    return t.sent(), [2] } })) })) }, e.prototype.submit = function() { return S(this, void 0, void 0, (function() { return D(this, (function(t) { switch (t.label) {
                                case 0:
                                    return this.resolve(this.submittedData), [4, this.destroy()];
                                case 1:
                                    return t.sent(), [2] } })) })) }, e.prototype.destroy = function() { return S(this, void 0, void 0, (function() { return D(this, (function(e) { switch (e.label) {
                                case 0:
                                    return [4, t.prototype.destroy.call(this)];
                                case 1:
                                    return e.sent(), [2] } })) })) }, e.prototype.postMessageCallback = function(e) { return S(this, void 0, void 0, (function() { var n; return D(this, (function(r) { switch (r.label) {
                                case 0:
                                    return this.allowPostMessageOrigin || (this.allowPostMessageOrigin = ge()), e.origin !== this.allowPostMessageOrigin ? [2] : [4, t.prototype.postMessageCallback.call(this, e)];
                                case 1:
                                    switch (r.sent(), e.data.name) {
                                        case "cancel":
                                            return [3, 2];
                                        case "submit":
                                            return [3, 4] } return [3, 6];
                                case 2:
                                    return [4, this.cancel()];
                                case 3:
                                    return r.sent(), [3, 6];
                                case 4:
                                    if (!((n = e.data) && n.body && n.body.token)) throw new Error("submitted without data"); return this.submittedData = n.body.token, [4, this.submit()];
                                case 5:
                                    return r.sent(), [3, 6];
                                case 6:
                                    return [2] } })) })) }, e }(function(t) {
                function e() { return null !== t && t.apply(this, arguments) || this } return N(e, t), Object.defineProperty(e.prototype, "postmessageDestination", { get: function() { return this.windowProxy }, enumerable: !1, configurable: !0 }), e.prototype.init = function() { return S(this, void 0, void 0, (function() { return D(this, (function(e) { switch (e.label) {
                                case 0:
                                    return [4, t.prototype.init.call(this)];
                                case 1:
                                    return e.sent(), [2] } })) })) }, e.prototype.prepareWindow = function() { return S(this, void 0, void 0, (function() { return D(this, (function(t) { return this.windowProxy = window.open(this.url, "liffpopup", "width=480, height=640, menubar=no, toolbar=no, scrollbars=yes"), [2] })) })) }, e.prototype.breakWindow = function() { return S(this, void 0, void 0, (function() { return D(this, (function(t) { return this.windowProxy.close(), [2] })) })) }, e }(ye));

        function _e(t) { return void 0 === t && (t = window.navigator.userAgent), /ipad/.test(t.toLowerCase()) } var Ee = n(3);

        function Ie(t, e, n, r) { if (void 0 === n && (n = {}), "object" != typeof t || !t.postMessage) throw F("INVALID_ARGUMENT", "target must be window object"); if ("string" != typeof e) throw F("INVALID_ARGUMENT", "keyname must be string"); if ("object" != typeof n) throw F("INVALID_ARGUMENT", "incorrect body format. It should be Object or Array comprised of Object"); if (!r) throw F("INVALID_ARGUMENT", "serverEndPointUrl isn't passed. please fill up with proper url"); if ("development" !== Ee.ENV && "*" === r) throw new Error("serverEndPointUrl doesn't allow to set '*'"); var o = { name: e, body: n };
            t.postMessage(o, r) }

        function Te(t, e) { var n;
            de(window, "message." + (n = "receivedHealthcheck"), function(t, e, n) { return function(r) { r.origin === n && r.data.name === t && e(r) } }(n, t, e)) } var Ae = function() {
            function t() { this.popupWindow = null } return t.prototype.init = function(t) { return S(this, void 0, void 0, (function() { var e; return D(this, (function(n) { switch (n.label) {
                            case 0:
                                return n.trys.push([0, 2, , 3]), this.liffId = t.referrer.liffId, this.allowPostMessageOrigin = this.initAllowPostMessageOrigin(), this.payloadToShareTargetPicker = this.buildPayloadToShareTargetPicker(t), this.prepareAnotherWindow(), [4, this.initOtt()];
                            case 1:
                                return n.sent(), this.initListener(), this.openAnotherWindow(), [3, 3];
                            case 2:
                                throw e = n.sent(), this.finalize(), e;
                            case 3:
                                return [2, Promise.resolve()] } })) })) }, t.prototype.finalize = function() { var t;
                x() || (t = this.intervalIDForHealthCheck, ce(window, "message.receivedHealthcheck"), t && clearInterval(t)) }, t.prototype.buildPayloadToShareTargetPicker = function(t) { return { messages: t.messages, referrer: t.referrer } }, t.prototype.initAllowPostMessageOrigin = function(t) { return void 0 === t && (t = Tt("shareTargetPicker")), ve(t) }, t.prototype.initOtt = function() { return S(this, void 0, void 0, (function() { var t, e; return D(this, (function(n) { switch (n.label) {
                            case 0:
                                return t = Tt("shareTargetPickerOtt") + "?" + ft({ liffId: this.liffId }), e = this, [4, Ut(t, { method: "GET" }).then((function(t) { return t.ott }))];
                            case 1:
                                return e.ott = n.sent(), [2] } })) })) }, t.prototype.prepareAnotherWindow = function() { x() || ("ios" !== C() || _e() ? this.popupWindow = window.open("", "liffpopup", "width=480, height=640, menubar=no, toolbar=no, scrollbars=yes") : this.popupWindow = window.open()) }, t.prototype.openAnotherWindow = function() { if (x()) t = this.liffId, e = this.ott, n = this.payloadToShareTargetPicker, r = { liffId: t, ott: e, data: JSON.stringify(n) }, location.href = Ee.SHARE_TARGET_PICKER_SCHEME_URL + "?" + ft(r);
                else { if (this.intervalIDForHealthCheck = window.setInterval(this.healthCheck.bind(this), 1e3), !this.popupWindow) throw F("CREATE_SUBWINDOW_FAILED");! function(t, e, n) { var r = { liffId: e, ott: n };
                        t.location.href = Tt("shareTargetPicker") + "?" + ft(r) }(this.popupWindow, this.liffId, this.ott) } var t, e, n, r }, t.prototype.initListener = function() { x() || Te(this.onReceivedHealthcheck.bind(this), this.allowPostMessageOrigin) }, t.prototype.healthCheck = function() { var t, e;!this.popupWindow || this.popupWindow.closed ? this.finalize() : (t = this.popupWindow, e = this.allowPostMessageOrigin, Ie(t, "healthcheck", void 0, e)) }, t.prototype.onReceivedHealthcheck = function() { if (!this.popupWindow) throw F("CREATE_SUBWINDOW_FAILED"); var t, e, n;
                t = this.popupWindow, e = this.payloadToShareTargetPicker, n = this.allowPostMessageOrigin, Ie(t, "ready", e, n) }, t }();

        function Oe(t, e) { var n = this;
            window.addEventListener("message", (function(r) { return S(n, void 0, void 0, (function() { return D(this, (function(n) { return r.data.hasOwnProperty("code") ? t({ value: r.data.code }) : e(), [2] })) })) }), !1) } var ke = { init: $t, getOS: C, getVersion: function() { return "3.6" }, getLanguage: function() { var t, e = it(); return ("PC_WEB" === (null == e ? void 0 : e.clientType) || "PC_APP" === (null == e ? void 0 : e.clientType)) && null !== (t = V(L.WORKS_LANGUAGE)) && void 0 !== t ? t : navigator.language }, isInClient: x, isLoggedIn: at, login: At, logout: ct, getAccessToken: Z, getIDToken: et, getDecodedIDToken: function() { return V(L.DECODED_ID_TOKEN) }, getContext: it, openWindow: ae, closeWindow: function() { window._woff && window._woff.postMessage ? re("closeWindow") : window.close() }, getFeatures: J, getFriendship: function() { return Ut(Tt("friendship")) }, checkFeature: oe, getAId: function() { return ((it() || {}).d || {}).aId }, getProfilePlus: function() { return (it() || {}).profilePlus }, getIsVideoAutoPlay: function() { return ((it() || {}).d || {}).autoplay || !1 }, getWorksVersion: Qt, isApiAvailable: ee, sendCalendarVoipUrl: function(t, e) { if (window._woff && window._woff.postMessage && oe("sendCalendarVoipUrl")) re("sendCalendarVoipUrl", { url: t, vmContent: e });
                else { var n = V(L.CALLBACK_URL); if (!n) throw F("INTERNAL_ERROR", "not exist callback url.");
                    t && (n += "?vmLinkInfo=" + t), e && (-1 !== n.indexOf("?") ? n += "&vmContent=" + e : n += "?vmContent=" + e), window.location.href = n } }, getProfile: Kt, sendMessages: function(t, e) { return e && e.type && e.type !== ie.none ? e.type === ie.ott && e.token.length ? Ut(Tt("messageOTT"), { method: "POST", body: JSON.stringify({ token: e.token, messages: t }) }) : Promise.reject(F("INVALID_ARGUMENT", "incorrect ")) : Ut(Tt("message"), { method: "POST", body: JSON.stringify({ messages: t }) }) }, sendMessage: function(t, e) { if (e && e.type && e.type !== se.none) return e.type === se.ott && e.token.length ? Ut(Tt("messageOTT"), { method: "POST", body: JSON.stringify({ token: e.token, message: t }) }) : Promise.reject(F("INVALID_ARGUMENT", "incorrect "));
                t.msgTid = ue(); var n = it(); return Ut((null == n ? void 0 : n.channelId) ? Tt("message").replace("$0", null == n ? void 0 : n.channelId) : Tt("message", { context: "message", params: [{ name: "channelNo", type: "path", uriIndex: 0 }] }), { method: "POST", body: JSON.stringify(t) }) }, sendFlexMessage: function(t) { t.msgTid = ue(); var e = it(); return Ut((null == e ? void 0 : e.channelId) ? Tt("flexMessage").replace("$0", null == e ? void 0 : e.channelId) : Tt("flexMessage", { context: "message", params: [{ name: "channelNo", type: "path", uriIndex: 0 }] }), { method: "POST", body: JSON.stringify(t) }) }, userPicker: function(t) { return void 0 === t && (t = { routerMode: U.NONE }), S(this, void 0, void 0, (function() { var e, n, r; return D(this, (function(o) { switch (o.label) {
                            case 0:
                                if (e = Tt("userPicker") + "?liffId=" + q().liffId, !at()) throw F("UNAUTHORIZED", "Need access_token for api call, Please login first");
                                o.label = 1;
                            case 1:
                                if (o.trys.push([1, 6, , 7]), !(r = Z())) throw new Error("AccessToken is empty"); return "web" !== C() || function(t) { void 0 === t && (t = window.navigator.userAgent); var e = t.toLowerCase(); return -1 != e.indexOf("msie") || -1 != e.indexOf("trident") }() ? [3, 3] : [4, (n = new be(e, r, window)).init()];
                            case 2:
                                return o.sent(), [3, 5];
                            case 3:
                                return [4, (n = new me(e, r, window)).init(t.routerMode)];
                            case 4:
                                o.sent(), o.label = 5;
                            case 5:
                                return [3, 7];
                            case 6:
                                throw F("CREATE_SUBWINDOW_FAILED", o.sent().message);
                            case 7:
                                return o.trys.push([7, 9, , 10]), [4, n.start()];
                            case 8:
                                return [2, o.sent()];
                            case 9:
                                throw F("EXCEPTION_IN_SUBWINDOW", o.sent().message);
                            case 10:
                                return [2] } })) })) }, shareTargetPicker: function(t) { return S(this, void 0, void 0, (function() { var e, n, r, o, i, s; return D(this, (function(a) { if (x() && (e = (it() || {}).availability, n = (e || {}).shareTargetPicker, o = (r = n || {}).permission, i = r.minVer, !o)) throw F("FORBIDDEN", "Need LINE App " + i + " at least or consent on shareTargetPicker usage on LINE developer site"); if (!at()) throw F("UNAUTHORIZED", "Need access_token for api call, Please login first"); if (!t || !Array.isArray(t) || 0 === t.length) throw F("INVALID_ARGUMENT", "no proper argument"); if (t.length > 5) throw F("INVALID_ARGUMENT", "exceed the limit of num of messages"); if (!(s = q().liffId)) throw F("INVALID_CONFIG"); try {
                            (new Ae).init({ messages: t, referrer: { liffId: s, url: location.origin } }) } catch (u) { throw F("EXCEPTION_IN_SUBWINDOW", u.message) } return [2] })) })) }, scanQR: function() { var t = ((it() || {}).availability || {}).scanQR || {},
                    e = t.permission,
                    n = t.minVer; if (!e) throw F("FORBIDDEN", "Need WORKS App " + n + " at least or consent on scanQR usage on app console site"); if (!at()) throw F("UNAUTHORIZED", "Need access_token for api call, Please login first"); return new Promise((function(t, e) {! function(t, e, n) { void 0 === n && (n = Tt("scanQR")), window._woff && window._woff.postMessage ? oe("openQR") ? re("openQR").then((function(e) { t({ value: e.qrCode }) })).catch((function(t) { e() })) : (Oe(t, e), ae({ url: n, external: !1 })) : (Oe(t, e), "ios" !== C() || _e() ? window.open(n, "woffpopup", "width=480, height=640, menubar=no, toolbar=no, scrollbars=yes") : window.open(n)) }(t, e) })) }, permanentLink: { createUrl: function() { var t = it(); if (!t || !t.endpointUrl) throw F("INIT_FAILED", "Could not get endpointUrl from server."); var e = window.location,
                        n = e.pathname,
                        r = e.search,
                        o = e.hash,
                        i = e.origin,
                        s = new URL(t.endpointUrl); if (s.origin !== i || ! function(t, e) { return 0 === e.indexOf(t) && (t.endsWith("/") && (t = t.substring(0, t.length - 1)), void 0 === e[t.length] || "/" === e[t.length]) }(s.pathname, n)) throw F("INVALID_CONFIG", "Current page is not under entrypoint."); var a = new RegExp("^" + B.join("|")),
                        u = o.substring(1).split("&").filter((function(t) { return !a.test(t) && Boolean(t) })).join("&"),
                        c = lt.parse(s.search),
                        f = r.substring(1).split("&").concat(ht).filter((function(t) { return !/woff\.state/.test(t) && Boolean(t) && !dt.apply(void 0, function() { for (var t = 0, e = 0, n = arguments.length; e < n; e++) t += arguments[e].length; var r = Array(t),
                                    o = 0; for (e = 0; e < n; e++)
                                    for (var i = arguments[e], s = 0, a = i.length; s < a; s++, o++) r[o] = i[s]; return r }([c], t.split("="))) })).join("&"),
                        l = n.substring(s.pathname.length);
                    l.length > 0 && "/" !== l[0] && (l = "/" + l); var h = l + (f ? "?" + f : "") + (u ? "#" + u : ""); return "https://line.worksmobile.com/liff/" + q().liffId + h }, setExtraQueryParam: function(t) { ht = encodeURIComponent(t) } }, ready: Jt, get id() { return q().liffId || null }, _dispatchEvent: function(t) { var e = {}; try { e = JSON.parse(t) } catch (r) { throw F("INVALID_ARGUMENT", r.message) } var n = function(t) { return new CustomEvent("liffEvent", { detail: t }) }(e);
                window.dispatchEvent(n) }, _call: re, _addListener: Nt, _removeListener: Pt, _postMessage: ne };
        ke.init = $t.bind(ke); var Ne = ke;
        e.default = Ne }]).default }));