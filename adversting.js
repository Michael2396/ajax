window.requestAnimationFrame(function () {
    function Da(l) {
        if (!l.dataset.adsbydfStatus || "done" != l.dataset.adsbydfStatus) {
            l.dataset.adsbydfStatus = "reserved";
            var h = l.dataset.adSlot;
            l.id = h + Math.random();
            var J = l.style.width, U = l.style.height,
                y = l.dataset.adExternalClickTracker ? l.dataset.adExternalClickTracker : "",
                Q = document.createElement("ins");
            Q.style = "display:inline-table;border:none;height:" + U + ";margin:0;padding:0;position:relative;visibility:visible;width:" + J + ";background-color:transparent;resize:none;";
            Q.id = h + Math.random();
            var A = document.createElement("iframe");
            A.src = "//sbc.digital-forest.info/20170601/adsbtpl.html";
            A.scrolling = "no";
            A.frameBorder = "0";
            A.width = J;
            A.height = U;
            h = encodeURIComponent('<script type="text/javascript">let adSlot = ' + h + '; let externalClickTracker = "' + y + '";\x3c/script>');
            A.name = '{"html":"' + h + '"}';
            Q.appendChild(A);
            l.appendChild(Q);
            l.dataset.adsbydfStatus = "done"
        }
    }

    function za(l) {
        function h(b) {
            var e, p, k, ia;
            if (!arguments.length) return aa ? F({}, aa) : null;
            if (!(this instanceof h)) return new h(b);
            if (!b) return aa =
                null;
            var x = !!aa;
            this.auto = "auto" in b ? X(b.auto) : !0;
            this.cdn = c(b.cdn);
            this.debug = X(b.debug);
            this.root = c(b.root);
            this.renderFile = c(b.renderFile);
            this.msgFile = c(b.msgFile);
            this.to = C(b.to, 6E4);
            this.ver = c(b.ver) || a;
            this.onBeforePosMsg = r(b.onBeforePosMsg) ? b.onBeforePosMsg : z;
            this.onPosMsg = r(b.onPosMsg) ? b.onPosMsg : z;
            this.onStartPosRender = r(b.onStartPosRender) ? b.onStartPosRender : z;
            this.onEndPosRender = r(b.onEndPosRender) ? b.onEndPosRender : z;
            this.onFailure = r(b.onFailure) ? b.onFailure3 : z;
            var Sa = b.positions;
            this.positions =
                e = {};
            if (Sa) for (p in Sa) (k = Sa[p]) && "object" == typeof k && (ia = p || k.id || K("sf_pos"), e[ia] = new J(k));
            aa = this;
            x = !!(x && this.auto && q && q.ns("$sf.host.boot"));
            try {
                x && L.host.boot()
            } catch (tb) {
            }
            return F({}, aa)
        }

        function J(b, e, p) {
            var k = b && typeof b || "";
            if (!(this instanceof J)) return new J(b, e, p);
            "object" == k ? (this.id = c(b.id), this.dest = c(b.dest || e), this.bg = c(b.bg) || "transparent", this.tgt = c(b.tgt) || "_top", this.css = c(b.css), this.w = C(b.w, 0), this.h = C(b.h, 0), this.z = C(b.z, 0), this.supports = F({}, b.supports || mb, !0, !0, !0), this.w &&
            this.h ? this.size = this.w + "x" + this.h : (b = c(b.size)) ? (e = b.split(/x/gi), this.w = C(e[0], 0), this.h = C(e[1], 0), this.size = b) : this.size = "") : "string" == k ? (this.id = c(b), this.dest = c(b.dest)) : (this.dest = "", this.bg = "transparent", this.tgt = "_top", this.css = "", this.h = this.w = 0, this.size = "", this.z = 0, this.supports = {});
            this.id = this.id || K("sf_pos");
            !aa && p && h(p);
            aa && (aa.positions[this.id] = this);
            return F({}, this)
        }

        function U(b, e, p) {
            if (!(this instanceof U)) return new U(key, p, pos, b);
            var k = {
                sf_ver: c(L.ver), flash_ver: Q(), ck_on: A() ?
                    "1" : "0"
            };
            var a = {};
            b && "object" == typeof b && (k = F(k, b));
            e && "string" == typeof e && p && "object" == typeof p && (a[e] = p);
            this.toString = function () {
                var b = new ea;
                b.shared = k;
                b.non_shared = a;
                return b.toString()
            };
            this.value = function (b, e) {
                if (!b || "string" != typeof b) return "";
                e && "string" == typeof e || (e = "shared");
                return "shared" == e ? k[b] || "" : b in a ? a[prop_key] || "" : ""
            }
        }

        function y(b, e) {
            var p, k;
            try {
                V || (V = L && L.lib), V && V.logger && l == top ? e ? (V.logger.error(b), L.info.errs.push(b)) : V.logger.log(b) : (p = d.getElementsByTagName("head")[0],
                    k = d.createElement("script"), k.type = "text/plain", k.text = "\x3c!-- SafeFrame " + (e ? "error" : "log") + ": " + (b || "unknown") + " --\x3e", p.appendChild(p, k))
            } catch (ia) {
            }
        }

        function Q() {
            var b;
            if (null !== wa && void 0 != wa) return wa;
            if (navigator.plugins && 0 < navigator.plugins.length) (b = navigator.mimeTypes) && b["application/x-shockwave-flash"] && b["application/x-shockwave-flash"].enabledPlugin && b["application/x-shockwave-flash"].enabledPlugin.description && (b = b["application/x-shockwave-flash"].enabledPlugin, b.version ? wa = b.version :
                b.description && (wa = b.description.replace(/\D+/g, ",").match(/^,?(.+),?$/)[1])); else if (L.env.isIE) for (b = 0; b < eb.length; b++) try {
                var e = new ActiveXObject(eb[b]);
                var p = e.GetVariable("$version");
                var k = p.indexOf(" ");
                wa = -1 < k ? p.substr(k + 1).replace(/,/gi, ".") : p.replace(/,/gi, ".");
                break
            } catch (ia) {
                e = null, wa = 0
            } else wa = 0;
            return wa
        }

        function A() {
            var b = navigator.cookieEnabled ? !0 : !1;
            "undefined" != typeof navigator.cookieEnabled || b || (document.cookie = "testcookie", b = -1 != document.cookie.indexOf("testcookie") ? !0 : !1, navigator &&
            (navigator.cookieEnabled = b));
            return b
        }

        function S(b, e, p, k) {
            var a = b && typeof b, x;
            if (!(this instanceof S)) return new S(b, e, p, k);
            if (null == aa) return y("Publisher Config not initialized - abort", !0);
            "object" == a ? F(this, b) : x = this.id = c(b) || K("sf_pos");
            if (e) this.html = e, this.src = ""; else if (this.src) {
                if (b = this.src) -1 < b.indexOf("${sf_ver}") && (b = b.replace(/\${sf_ver}/gi, $sf.ver)), -1 < b.indexOf("${ck_on}") && (e = A() ? "1" : "0", b = b.replace(/\${ck_on}/gi, e)), -1 < b.indexOf("${flash_ver}") && (e = Q(), b = b.replace(/\${flash_ver}/gi,
                    e));
                this.html = c(["<scr", "ipt type='text/javascript', src='", b, "'></scr", "ipt>"])
            } else this.html = this.html || "", this.src = "";
            this.html || (this.html = "");
            null == p || p instanceof U || (p = new U(p));
            this.meta = p || this.meta || new U;
            this.conf = k || this.conf || {};
            x && (aa && aa.positions[x] ? this.conf = aa.positions[x] : k && (k.id = x, this.conf = new J(k)))
        }

        function Y(b) {
            b = b && Ta(b) || Ya;
            var e = b.compatMode, p = b.documentElement;
            e && !fb && "CSS1Compat" != e && (p = b.body);
            return p
        }

        function N(b) {
            var e = null, p;
            try {
                b && (p = Ea(b), e = 9 == p ? b : b.document ||
                    b.ownerDocument || null)
            } catch (k) {
                e = null
            }
            return e
        }

        function Ea(b) {
            return C(b && b.nodeType, -1)
        }

        function P(b) {
            return 1 === Ea(b) && b.tagName.toLowerCase() || ""
        }

        function ja(b) {
            if ((b = c(b)) && -1 == b.search(/\D+/g) || b && -1 != b.search(/px/gi)) return !0
        }

        function xa(b, e, p) {
            var k = 0, c = 0, x = /^t(?:able|d|h|r|head|foot)$/i;
            if (p || fa(b)) k = st.borderTopWidth, c = st.borderLeftWidth, k = ja(k) ? C(k, 0) : 0, c = ja(c) ? C(c, 0) : 0, Za && x.test($a(b)) && (k = c = 0);
            e = e || {t: 0, l: 0};
            e.t += k;
            e.l += c;
            return e
        }

        function qa(b) {
            var e = {x: 0, y: 0, w: 0, h: 0}, p = {
                scrollLeft: 0,
                scrollTop: 0, scrollWidth: 0, scrollHeight: 0
            }, k = 0, c = 0;
            var x = Ta(b) || Ya;
            b = x.documentElement || p;
            p = x.body || p;
            if (x = x.defaultView) k = C(x.pageXOffset, 0), c = C(x.pageYOffset, 0);
            e.x = W(b.scrollLeft, p.scrollLeft, k);
            e.y = W(b.scrollTop, p.scrollTop, c);
            e.w = W(b.scrollWidth, p.scrollWidth, 0);
            e.h = W(b.scrollHeight, p.scrollHeight, 0);
            return e
        }

        function I(b) {
            var e = {t: 0, l: 0, r: 0, b: 0, w: 0, h: 0, z: 0}, p = 0, k = 0, c = 0, x = 0, a = !1,
                r = N(b) || l.document, f = r.compatMode, r = r.documentMode || 0, z, m, D;
            if (1 === Ea(b)) try {
                var H = fa(b);
                var h = Y(b);
                var g = qa(b);
                e.l =
                    b.offsetLeft || 0;
                e.t = b.offsetTop || 0;
                var q = b;
                var t = null;
                a = Za || 519 < Xa;
                if (b !== h && b.getBoundingClientRect) {
                    Ra && (!r || 0 < r && 8 > r || "BackCompat" === f) && (m = h.clientLeft, D = h.clientTop);
                    var C = b.getBoundingClientRect();
                    e.t = C.top;
                    e.l = C.left;
                    if (m || D) e.l -= m, e.t -= D;
                    if (g.y || g.x) if (!v.ios || 4.2 <= v.ios) e.l += g.x, e.t += g.y
                } else {
                    for (; (q = q.offsetParent) && 1 === Ea(q) && t !== q;) m = q.offsetLeft, D = q.offsetTop, e.t += D, e.l += m, a && (e = xa(q, e)), t = q;
                    if ("fixed" != H.position) for (q = b, t = null; (q = q.parentNode) && 1 === Ea(q) && t !== q && q != h;) {
                        p = q.scrollTop;
                        k = q.scrollLeft;
                        Za && (z = fa(q), "visible" != z.overflow && (e = xa(q, e, z)));
                        if (p || k) e.l -= k, e.t -= p;
                        t = q
                    }
                    e.l += g.x;
                    e.t += g.y
                }
                b == h ? (x = b.clientHeight, c = b.clientWidth) : (x = b.offsetHeight, c = b.offsetWidth);
                e.b = e.t + x;
                e.r = e.l + c;
                e.w = W(c, 0);
                e.h = W(x, 0);
                e.z = H.zIndex
            } catch (Ua) {
                Ua && Ua.message || (Ua = {message: "null exception"}), b = "sf Exception in rect calculation tag - " + P(b) + " : " + Ua.message, y(b, !0), e = {
                    t: 0,
                    l: 0,
                    r: 0,
                    b: 0,
                    w: 0,
                    h: 0,
                    z: 0
                }
            }
            return e
        }

        function ka(b) {
            b = Y(b);
            var e = 0, p = 0;
            b && (e = b.scrollWidth || 0, p = b.scrollHeight || 0);
            return {
                t: 0,
                l: 0, b: p, r: e, w: e, h: p
            }
        }

        function Fa(b) {
            var e = b && ab(b) || l, p = e.innerHeight || 0, k = e.innerWidth || 0, c = e.screenY || e.screenTop || 0,
                x = p + c, e = e.screenX || e.screenLeft || 0, a = k + e;
            b = Y(b);
            p || k || !b || (p = b.clientHeight || 0, k = b.clientWidth || 0, a = e + k, x = c + p);
            return {t: c, l: e, b: x, r: a, w: k, h: p}
        }

        function la(b, e) {
            var p = !1, k = e && e.nodeType || -1;
            if (1 == (b && b.nodeType || -1) && -1 != k) if (b.contains) if (fb || 1 == k) p = b.contains(e); else for (; e;) {
                if (b === e) {
                    p = !0;
                    break
                }
                e = e.parentNode;
                if (e == Ya.documentElement) break
            } else b.compareDocumentPosition && (p = b ===
                e || !!(b.compareDocumentPosition(e) & 16));
            return p
        }

        function fa(b, e) {
            var p = "";
            if (arguments.length && e) if (bb) try {
                p = b.currentStyle[e]
            } catch (k) {
                p = ""
            } else try {
                p = ab(b).getComputedStyle(b, null)[e]
            } catch (k) {
                p = ""
            } else if (bb) try {
                p = b.currentStyle
            } catch (k) {
                p = null
            } else try {
                p = ab(b).getComputedStyle(b, null)
            } catch (k) {
                p = null
            }
            return p
        }

        function Ga(b, e, p, k, c) {
            var x = b && b && (b.parentNode || b.parentElement), a = Y(b), r = I(b), ia = I(a), f = qa(a), z = ka(b),
                m = {t: 0, l: 0, r: 0, b: 0, xs: 0, ys: 0, xiv: 0, yiv: 0, iv: 0, w: 0, h: 0}, q = [], v = {
                    left: null, right: null,
                    top: null, bottom: null
                }, D, h, H, g, t, n, K, Z;
            e = e && "object" == typeof e ? e : {};
            k = C(k, 0, 0);
            c = C(c, 0, 0);
            !r.h && c && (r.h = c, r.b = r.t + c);
            !r.w && k && (r.w = k, r.r = r.l + k);
            if (x) {
                var u = ia.t;
                var T = ia.l;
                var V = ia.r;
                for (D = ia.b; g = fa(x);) {
                    if ("block" == g.display || "absolute" == g.position || "none" != g["float"] || "none" != g.clear) {
                        var F = x == a;
                        var w = I(x);
                        var da = w.t;
                        var y = w.l;
                        var X = w.r;
                        var E = w.b;
                        var A = g.overflowX;
                        var B = g.overflowY;
                        var G = g.overflow;
                        if (F) g = [-1, -1, -1, -1]; else if (K = g, g = [-1, -1, -1, -1], Z = ["clipTop", "clipRight", "clipBottom", "clipLeft"],
                            n = 0, K) if (bb) for (; t = Z[n];) t = K[t], ja(t) && (t = C(t, -1), 0 <= t && (g[n] = t)), n++; else if ((t = K.clip) && -1 != t.search(/\d+/g)) for (t = t.replace(/\w+\(([^\)]*?)\)/g, "$1"), g = t.split(" "), g = 1 >= g.length ? g.split(",") : g, K = g.length, n = 0; K--;) Z = g[n], ja(Z) ? g[n] = C(Z, -1) : g[n] = -1, n++;
                        Z = !1;
                        F ? (t = f.w, n = f.h) : (t = x.scrollWidth, n = x.scrollHeight);
                        var J = x.offsetWidth;
                        var L = x.offsetHeight;
                        var na = x.clientWidth;
                        K = x.clientHeight;
                        !H && J > na && (H = J - na);
                        !h && L > K && (h = L - K);
                        if (F) t > na && (y = 0, X = (l.innerWidth || 0 || J) + f.x, y > T && (T = y), X < V && (V = X)), n > K && (da =
                            0, E = (l.innerHeight || 0 || L) + f.y, da > u && (u = da), E < D && (D = E)); else {
                            H && X - y == J && (X -= H);
                            h && E - da == L && (E -= h);
                            if ("hidden" == A || "scroll" == A || "auto" == A || "hidden" == G || "scroll" == G || "auto" == G) y > T && (T = y, v.left = x), X < V && (V = X, v.right = x), "scroll" == A || "scroll" == G ? (q.push(x), Z = !0) : ("auto" == A || "auto" == G) && t > na && (q.push(x), Z = !0);
                            0 < g[3] && (F = y + g[3], F > T && (T = F, v.left = x));
                            0 < g[1] && (A = X + g[1], A < V && (V = A, v.right = x));
                            if ("hidden" == B || "scroll" == B || "auto" == B || "hidden" == G || "scroll" == G || "auto" == G) da > u && (u = da, v.top = x), E < D && (D = E, v.bottom = x),
                            Z || ("scroll" == B || "scroll" == G ? q.push(x) : ("auto" == B || "auto" == G) && n > K && q.push(x));
                            0 < g[0] && (B = da + g[0], B > u && (u = B, v.top = x));
                            0 < g[2] && (w = w.t + g[2], w < D && (D = w, v.bottom = x))
                        }
                    }
                    if (x == a) break;
                    x = x && (x.parentNode || x.parentElement);
                    if (!x || !P(x)) break
                }
            }
            x = {t: W(u, 0), l: W(T, 0), r: W(V, 0), b: W(D, 0)};
            x.w = W(x.r - x.l, 0);
            x.h = W(x.b - x.t, 0);
            y = r.l;
            X = r.r;
            da = r.t;
            E = r.b;
            a = X - y;
            f = E - da;
            F = x.l;
            A = x.r;
            B = x.t;
            w = x.b;
            T = Va(E, w) - W(da, B);
            T = 0 > T ? 0 : T;
            T = T > f ? f : T;
            u = Va(X, A) - W(y, F);
            u = 0 > u ? 0 : u;
            u = u > a ? a : u;
            m.t = B < da ? w <= da ? 0 : W(da - B, 0) : 0;
            m.b = w > E ? E <= B ? 0 : W(w - E, 0) : 0;
            m.l =
                F < y ? A <= y ? 0 : w <= da ? 0 : E <= B ? 0 : W(y - F, 0) : 0;
            m.r = A > X ? X <= F ? 0 : w <= da ? 0 : W(A - X, 0) : 0;
            m.w = W(m.r - m.l, 0);
            m.h = W(m.b - m.t, 0);
            m.xiv = 0 < a ? C((u / a).toFixed(2)) : 0;
            m.yiv = 0 < f ? C((T / f).toFixed(2)) : 0;
            m.iv = 0 < a || 0 < f ? C((u * T / (a * f)).toFixed(2)) : 0;
            m.civ = 0;
            p && (p = m.iv, .49 < p && (k = ma(b, k, c), b = k.length, k = C(k.on, 0))) && (b = 1 - C((k / b).toFixed(2), 0), m.civ = m.iv = b);
            e.rect = r;
            e.clipRect = x;
            e.docRect = z;
            q.length ? (e.isRoot = !1, e.canScroll = !0, m.xs = !!h, m.ys = !!H) : ia.b >= x.b || ia.r >= x.r ? (e.isRoot = !0, m.xs = !!(z.w > ia.w && h), m.ys = !!(z.h > ia.h && H), e.canScroll = z.w > ia.w ||
                z.h > ia.h) : m.ys = m.xs = e.isRoot = e.canScroll = !1;
            e.scrollNodes = q;
            e.clipNodes = v;
            return e.expRect = m
        }

        function ma(b, e, p) {
            var k = I(b), c = N(b), a = Y(c), r = k.t, f = k.l, m = [], z = 0, g;
            m.on = 0;
            e = C(e, 0, 0);
            p = C(p, 0, 0);
            r && !k.h && p && (k.h = p, k.b = r + p);
            f && !k.w && e && (k.w = e, elrect.r = f + e);
            p = k.w;
            var q = k.h;
            var v = za(p / 10);
            var t = za(q / 10);
            var l = v;
            if (1 >= p || 1 >= q || 1 > v || 1 > t) return m;
            e = qa();
            k = e.y;
            e = e.x;
            var D = f + p;
            var h = r + q;
            if (c && a && c.elementFromPoint) {
                for (; l < p;) {
                    for (g = t; g < q;) {
                        var H = f + l;
                        var n = r + g;
                        H <= D && n <= h && m.push({x: H, y: n, on: 0});
                        g += t
                    }
                    l += v
                }
                for (; r =
                           m[z++];) H = W(r.x - e, 0), H = Va(H, r.x), n = W(r.y - k, 0), n = Va(n, r.y), 0 == H ? (r.on = "!x-offscreen", m.on++) : 0 == n ? (r.on = "!y-offscreen", m.on++) : (p = c.elementFromPoint(H, n)) && p !== a && p !== b && !la(p, b) && (f = Ha(p, "id"), f || (f = K("geom_inter"), Ha(p, "id", f)), r.on = f, m.on++)
            }
            return m
        }

        function na(b, e, p, k) {
            Na || (Na = m.msghost_fb);
            return b && Na && Na[b] && Na[b](e, p, k)
        }

        function w(b) {
            "onmessage" in l ? Aa = !0 : (b = function () {
            }, m.attach(l, "message", b), "function" === typeof l.onmessage ? (Aa = !0, m.detach(l, "message", b)) : Aa = !1)
        }

        function Ba(b) {
            var e = b &&
                b.data, p = b && b.source, k = (e = e && -1 != e.indexOf("guid") && ea(e)) && e.id, c = k && D(k),
                c = c && Da(c), a = k && Ca[k], k = e && e.guid, r = a && a.guid, a = a && a._xmsgcb, f = !1;
            if (r && k && k == r && p && c && c == p) try {
                f = a(e.msg)
            } catch (nb) {
                f = !1
            }
            f && m.evtCncl(b);
            return f
        }

        function u(b, e) {
            var p = b && Ca[b], k = !1, a;
            if (!p) k = na("send", b, e); else if (p) if (a = ea(), a.msg = e, a.guid = p.guid, Aa) {
                var r = D(b);
                r = Da(r);
                try {
                    r.postMessage(c(a), p.srcHost || "*"), k = !0
                } catch (Sa) {
                    k = !1
                }
            } else k = na("send", b, e);
            return k
        }

        function G() {
            return Aa
        }

        function O(b) {
            var e = null, p;
            var k = Ia.href.indexOf("#");
            var a = -1 < k ? Ia.href.substr(0, k) : Ia.href;
            k = a.indexOf("?");
            -1 < k && (a = a.substr(0, k));
            a = escape(a);
            b && (e = b.name, e = ea(e), p = (k = c(b.src)) && k.substring(0, k.indexOf("/", 9)), p = 0 != p.search(/http/gi) ? "" : p, e = ea(e), e.id = b.id || "iframe_" + K(), e.src = k, e.srcHost = p, e.guid = e.guid || K(), e.host = Oa, e.loc = a, e.proxyID = "", Aa ? (e.html5 = 1, e.proxyPath = "") : (a = na("prep", e)) && (e = a), b.name = e);
            return e
        }

        function ba(b, e, c) {
            var k;
            "iframe" == $a(b) && (k = Ha(b, "id")) && e && e instanceof ea && k == e.id && (Aa ? (Ca[k] = e, e._xmsgcb = c, Wa || (m.attach(l, "message",
                Ba), Wa = !0)) : na("attach", b, e, c))
        }

        function M(b) {
            var e = Ha(b, "id"), c = e && Ca[e], k = !0;
            if (c) {
                c && (c._xmsgcb = Ca[e] = null, delete Ca[e]);
                e = "";
                for (e in Ca) if ((c = Ca[e]) && c.guid) {
                    k = !1;
                    break
                }
                k && Aa && Wa && (Wa = !1, m.detach(l, "message", Ba))
            } else na("detach", b)
        }

        function R(b) {
            var e = [], c = arguments, k = c.length, a = 0, r, f = !1;
            if (aa && (r = aa[b])) {
                for (; k--;) {
                    var m = c[a++];
                    m != b && e.push(m)
                }
                try {
                    f = r.apply(null, e)
                } catch (nb) {
                    f = !1
                }
            }
            return f
        }

        function ra() {
            Pa && (clearTimeout(Pa), Pa = 0)
        }

        function ga(b) {
            Ja && (clearTimeout(Ja), Ja = 0);
            Ja = setTimeout(function () {
                var e,
                    c, k, a;
                for (e in ca) (k = (k = (c = ca[e]) && c.dest) && D(k)) && c && (k = ea(), a = ea(), k.pos = e, k.cmd = a.cmd = "focus-change", k.value = b, R("onPosMsg", e, "focus-change", b), f(c, k));
                Ja && (clearTimeout(Ja), Ja = 0)
            }, 2)
        }

        function B(b) {
            var e, c, k, a;
            for (e in ca) b && e in oa || (k = (k = (c = ca[e]) && c.dest) && D(k)) && c && (a = sa(e, k, !0), k = ea(), k.pos = e, k.cmd = "geom-update", k.geom = ya(a), R("onPosMsg", e, "geom-update", a), f(c, k));
            ra()
        }

        function ha() {
            B()
        }

        function pb() {
            B(!0)
        }

        function pa(b, e, c) {
            var k = oa[e];
            k && (k.tID && (clearTimeout(k.tID), delete k.tID), k.tID =
                setTimeout(function () {
                    var b = ca[e], c = b && b.dest, c = c && D(c), a;
                    c && b && (c = sa(e, c, !0), a = ea(), a.pos = e, a.cmd = "geom-update", a.geom = ya(c), R("onPosMsg", e, "geom-update", c), f(b, a));
                    delete k.tID
                }, 750))
        }

        function ta(b) {
            ga(!0)
        }

        function ua(b) {
            b = l.document.hasFocus();
            ga(b)
        }

        function Z(b) {
            ra();
            Pa = setTimeout(pb, 750)
        }

        function gb(b) {
            ra();
            Pa = setTimeout(ha, 750)
        }

        function da(b) {
            var e, c;
            ra();
            try {
                m.detach(l, "scroll", Z);
                m.detach(l, "resize", gb);
                m.detach(l, "unload", da);
                m.detach(l, "focus", ta);
                m.detach(l, "blur", ua);
                for (e in oa) {
                    if (c =
                        oa[e]) c.tID && clearTimeout(c.tID), m.detach(oa[e], "scroll", c.onscroll), c.onscroll = c.node = null;
                    oa[e] = null;
                    delete oa[e]
                }
                cb = !1
            } catch (k) {
            }
        }

        function qb(b) {
            var e = !1, c;
            if ((b = ea(b, null, null, !0, !0)) && b.pos && (c = ca[b.pos])) switch (b.cmd) {
                case "exp-push":
                    hb(b, !0);
                    e = !0;
                    break;
                case "exp-ovr":
                    hb(b);
                    e = !0;
                    break;
                case "collapse":
                    var k = (c = (e = b && b.pos) && ca[e]) && c.conf, a = k && k.dest, r = a && D(a),
                        m = r && D("sf_pos_rel_el_" + e), g = r && r.style, z = m && m.style;
                    e && c && r && m && c.expanded && ((m = oa[e]) && m.tID && clearTimeout(m.tID), ra(), R("onBeforePosMsg",
                        e, "collapse", 0, 0) || (g.left = g.top = "0px", z.width = g.width = k.w + "PX", z.height = g.height = k.h + "PX", g.zIndex = c.dx = c.dy = 0, db(a), R("onPosMsg", e, "collapse", 0, 0), b.cmd = "collapse", b.geom = ya(sa(e, r, !0)), f(c, b)));
                    e = !0;
                    break;
                case "msg":
                    (k = (k = (k = (c = (e = b && b.pos) && ca[e]) && c.conf) && k.dest) && D(k)) && D("sf_pos_rel_el_" + e);
                    R("onPosMsg", b.pos, "msg", b.msg);
                    b.cmd = "msg";
                    b.geom = ya(sa(e, k, !0));
                    f(c, b);
                    e = !0;
                    break;
                case "error":
                    (c = (c = (c = (e = b && b.pos) && ca[e]) && c.conf) && c.dest) && D(c) && D("sf_pos_rel_el_" + e);
                    L && L.info && L.info.errs && L.info.errs.push(b);
                    R("onPosMsg", e, "error", b);
                    e = !0;
                    break;
                case "geom-update":
                    L.lib.logger.log("Geom update complete: " + b.pos);
                    e = !0;
                    break;
                case "read-cookie":
                    if (c.conf && c.conf.supports && c.conf.supports[b.cmd] && "0" != c.conf.supports[b.cmd]) {
                        k = (k = (a = (c = (e = b && b.pos) && ca[e]) && c.conf) && a.dest) && D(k);
                        if (a.supports && a.supports["read-cookie"] && "0" != a.supports["read-cookie"] && e && c && k && (a = b.cookie)) {
                            z = {};
                            r = document.cookie.split("; ");
                            for (g = r.length - 1; 0 <= g; g--) m = r[g].split("="), z[m[0]] = m[1];
                            R("onPosMsg", "read-cookie", e, 0, 0);
                            b.cmd =
                                "read-cookie";
                            b.geom = ya(sa(e, k, !0));
                            b.value = z[a];
                            f(c, b)
                        }
                        e = !0
                    } else e = !1;
                    break;
                case "write-cookie":
                    c.conf && c.conf.supports && c.conf.supports[b.cmd] && "0" != c.conf.supports[b.cmd] ? (k = (k = (a = (c = (e = b && b.pos) && ca[e]) && c.conf) && a.dest) && D(k), a.supports && a.supports["write-cookie"] && "0" != a.supports["write-cookie"] && e && c && k && (a = b.cookie) && (r = escape(b.value), g = new Date, g.setDate(g.getDate() + 1), g = r + "; expires=" + g.toUTCString(), document.cookie = a + "=" + g, R("onPosMsg", "write-cookie", e, 0, 0), b.cmd = "write-cookie", b.geom =
                        ya(sa(e, k, !0)), b.info = r, b.value = "", f(c, b)), e = !0) : e = !1
            }
            return e
        }

        function t() {
            var b = !0, e;
            for (e in va) {
                b = !1;
                break
            }
            return b
        }

        function f(b, e) {
            Ka = "sending-msg-down-" + e.cmd;
            setTimeout(function () {
                var c = b && b.dest;
                c && e && u(c, e.toString());
                Ka = "";
                e = b = null
            }, 1)
        }

        function n() {
            var b = Ha(this, "_pos_id");
            va[b] && (clearTimeout(va[b]), delete va[b], Qa[b] = b, Ha(this, "_pos_id", null), Ha(this, "name", null), this.style.visibility = "inherit", this.style.display = "block", R("onEndPosRender", b));
            t() || (Ka = "")
        }

        function db(b, e, c, a, r) {
            if (Ra) {
                var k =
                    D(b);
                b = "shm_" + b;
                var p = D(b);
                e ? p ? p.style.visibility = "visible" : (p = H.clone(k, {
                    id: b,
                    src: "",
                    name: b
                }, ["width", ":", c, "PX", ";position:absolute;", "height", ":", a, "PX", ";z-index:", r - 1, ";filter:progid:DXImageTransform.Microsoft.Alpha(opacity=0)"]), m.append(T(k), p)) : !e && p && (p.style.visibility = "hidden")
            }
        }

        function sa(b, e, c) {
            var a = ea(), r = {}, p, f;
            try {
                if (m.bounds(e, r, !0), !c && !r.isRoot && r.canScroll && (p = r.expRect, p.xs || p.ys)) {
                    var g = oa[b];
                    var z = r.refNode;
                    g && g.node != z && (g.tID && clearTimeout(g.tID), m.detach(void 0, "scroll",
                        g.onscroll), g.node = g.onscroll = null, oa[b] = null, delete oa[b]);
                    oa[b] || (g = {}, g.node = z, g.onscroll = function (c) {
                        pa(c, b)
                    }, oa[b] = g, m.attach(z, "scroll", g.onscroll))
                }
            } catch (Ma) {
                a = null, y("Exception in build_geom: " + (Ma && Ma.message || "NULL"), !0)
            }
            try {
                a && (a.win = ea(m.winRect()), a.par = ea(r.clipRect), p = ea(r.expRect), f = ea(r.rect), f.iv = p.iv, f.xiv = p.xiv, f.yiv = p.yiv, delete p.iv, delete p.xiv, delete p.yiv, a.exp = p, a.self = f)
            } catch (Ma) {
                a = null, y("build_geom info error: " + (Ma && Ma.message || "NULL"), !0)
            }
            return a
        }

        function hb(b, c) {
            var e =
                !1, a = !1, r = b && b.pos, g, m, z, q, v, t, l, H, h, n, u;
            r && (m = (g = ca[r]) && g.conf, g && m && (u = g.dest, z = D(u), q = D("sf_pos_rel_el_" + r), z && q && (v = z.style, q = q.style, v && ((t = oa[r]) && t.tID && clearTimeout(t.tID), ra(), n = b.exp_obj, t = m.w, m = m.h, n ? (H = C(n.t, 0, 0), l = C(n.l, 0, 0), h = C(n.r, 0, 0), n = C(n.b, 0, 0), h = C(t + l + h, 0, 0), n = C(m + H + n, 0, 0), H ? (H *= -1, a = !0) : H = 0, l ? (l *= -1, e = !0) : l = 0) : (l = g.dx = C(b.dx), H = g.dy = C(b.dy), e = 0 > l, a = 0 > H, h = e ? t + -1 * l : t + l, n = a ? m + -1 * H : m + H), h <= t && n <= m || R("onBeforePosMsg", r, "exp-ovr", l, H) || (v.width = h + "PX", v.height = n + "PX", e && (v.left = l +
                "PX"), a && (v.top = H + "PX"), (e = C(g.z, 0)) || (e = 3E3), v.zIndex = e, db(u, !0, h, n, e - 1), c ? (q.width = h + "PX", q.height = n + "PX") : (q.width = t + "PX", q.height = m + "PX"), g.expanded = !0, b.dx = l, b.dy = H, b.w = h, b.h = n, b.cmd = "expand", b.geom = ya(sa(r, z, !0)), R("onPosMsg", r, "exp-ovr", l, H), f(g, b))))))
        }

        function ib() {
            var b = 0, e = !0, c = arguments, a, r, g, f, z;
            if (!c.length || "*" == c[b]) for (a in c = [], ca) c.push(a);
            for (; a = c[b++];) if (r = ca[a]) {
                a in va && (clearTimeout(va[a]), delete va[a]);
                a in Qa && delete Qa[a];
                var q = (g = (r = r.dest) && D(r)) && T(g);
                -1 != m.attr(q, "id").indexOf("sf_pos_rel_el") &&
                (f = q, q = T(f));
                m.purge(g);
                f && m.purge(f);
                for (z = $sf.info.list.length - 1; 0 <= z; z--) if ((g = $sf.info.list[z]) && g.id === a) {
                    $sf.info.list.splice(z, 1);
                    break
                }
                ca[a] = null;
                delete ca[a];
                g = m.make("ins");
                m.attr(g, "id", r);
                m.append(q, g)
            }
            a = "";
            for (a in ca) {
                e = !1;
                break
            }
            e && (Ka = "", da())
        }

        function jb() {
            var b = 0, c = arguments, a, r, g, f, z, v, h, u, K, C;
            if (!aa) return !1;
            if (!m.ready()) return m.wait(function () {
                jb.apply(null, c);
                c = null
            }), null;
            for (c[0] instanceof Array && 1 == c.length && (c = c[0]); a = c[b++];) if (g = (r = a.id) ? aa.positions[r] : null) if (f = (u = g.dest) &&
                D(u)) {
                var w = g.w;
                var F = g.h;
                if (!w) {
                    try {
                        w = f.offsetWidth
                    } catch (ob) {
                        w = 0
                    }
                    w && (g.w = w)
                }
                if (!F) {
                    try {
                        F = f.offsetHeight
                    } catch (ob) {
                        F = 0
                    }
                    F && (g.h = F)
                }
                w && F && (h = new ea, K = "sf_pos_rel_el_" + r, z = D(K), v = T(f), z && v == z && (v = T(z)), db(u), (C = va[r]) && clearTimeout(C), (C = Qa[r]) && delete Qa[r], va[r] = setTimeout(function () {
                    var b = r, c = b && va[b];
                    c && (clearTimeout(c), ib(b), R("onPosMsg", "render-timeout", b));
                    t() || (Ka = "")
                }, aa.to), Ka = "rendering", R("onStartPosRender", r, g, a), C = ["position:", "", ";z-index:0;", "width", ":", w, "PX", ";", "height", ":", F, "PX",
                    ";", "visibility:inherit;display:inline-block"], z ? (v = z.style, v.width = w + "PX", v.height = F + "PX", v = f && f.style, v.width = w + "PX", v.height = F + "PX") : (C[1] = "relative", z = m.make("ins"), z.id = K, z.className = "iab_sf", w = f.cloneNode(!1), m.css(w, C), z.appendChild(w), m.css(z, C), v.replaceChild(z, f), f = D(u)), h.id = r, h.dest = u, h.conf = ea(g), h.meta = a.meta.toString(), h.html = ya(a.html), h.geom = ya(sa(r, f)), h.src = aa.renderFile, h.has_focus = q.cstr(document.hasFocus()), C[1] = "absolute", C[13] = "top:0px;left:0px;visibility:hidden;display:none;max-width:none;max-height:none;",
                cb || (m.attach(l, "scroll", Z), m.attach(l, "resize", gb), m.attach(l, "unload", da), m.attach(l, "focus", ta), m.attach(l, "blur", ua), cb = !0), H.replace({
                    id: u,
                    name: h,
                    src: aa.renderFile,
                    _pos_id: r
                }, C, z, n, qb), ca[r] = h, a = $sf.lib.lang.mix({}, h, !1, !0), delete a.geom, delete a.has_focus, $sf.info.list.push(a))
            }
        }

        function E(b) {
            return (b = ca[b]) ? F({}, b) : null
        }

        function rb() {
            return Ka
        }

        var mb = {"exp-ovr": 1, "exp-push": 0, bg: 0, pin: 0, "read-cookie": 0, "write-cookie": 0}, L = l && l.$sf,
            a = L && L.ver, g = L && L.env, v = g && g.ua, V = L && L.lib, q = V && V.lang, m = V &&
            V.dom, H = m && m.iframes, X = q && q.cbool, C = q && q.cnum, c = q && q.cstr, r = q && q.callable,
            z = q && q.noop, K = q && q.guid, F = q && q.mix, D = m && m.elt, T = m && m.par, Ha = m && m.attr,
            Ta = m && m.doc, $a = m && m.tagName, ab = m && m.view, Da = H && H.view, ya = l && l.escape,
            La = l && l.Math, W = La && La.max, Va = La && La.min, za = La && La.round, ea = q && q.ParamHash,
            Ya = l && l.document, Ra = g && g.isIE, bb = v && v.ie || 0, Xa = v && v.webkit || 0,
            Za = v && v.gecko || 0, fb = v && v.opera || 0, Ia = l && l.location,
            Oa = Ia && (Ia.protocol + "//" + (Ia.host || Ia.hostname) || ""), ca = {}, Ca = {}, kb, va = {}, Qa = {},
            oa = {}, Aa = !1, Wa = !1, cb =
                !1, Pa = 0, Ja = 0, Ka = null, Na = null, wa = null, aa = null,
            eb = ["ShockwaveFlash.ShockwaveFlash.11", "ShockwaveFlash.ShockwaveFlash.8", "ShockwaveFlash.ShockwaveFlash.7", "ShockwaveFlash.ShockwaveFlash.6", "ShockwaveFlash.ShockwaveFlash"];
        q && l == top && (q.def("dom", {
            rect: I,
            currentStyle: fa,
            contains: la,
            docRect: ka,
            winRect: Fa,
            bounds: Ga,
            overlaps: ma
        }, V, !0), q && (q.def("msghost", {
            prep: O,
            attach: ba,
            detach: M,
            usingHTML5: G,
            send: u
        }, m, !0), kb = "xdm-html5-init-" + K(), Oa = 0 == Oa.indexOf("file") ? Oa = "file" : Oa, w({
            foo: "bar",
            data: kb
        })), q.def("$sf.host",
            {Config: h, PosConfig: J, PosMeta: U, Position: S, nuke: ib, get: E, render: jb, status: rb}, null, !0));
        lb(l)
    }

    function lb(l) {
        function h(h, w) {
            var y, u;
            try {
                S || (S = A && A.lib), S && S.logger && l == top ? w ? (S.logger.error(h), A.info.errs.push(h)) : S.logger.log(h) : (y = Q.getElementsByTagName("head")[0], u = Q.createElement("script"), u.type = "text/plain", u.text = "\x3c!-- SafeFrame " + (w ? "error" : "log") + ": " + (h || "unknown") + " --\x3e", y.appendChild(y, u))
            } catch (G) {
            }
        }

        function J() {
            var h = !0, w, I;
            if (!Ga) if (w = A && A.host, l == top) {
                w && !w.boot && (w.boot = y);
                try {
                    var u = w && w.Config()
                } catch (ba) {
                    u = null
                }
                if (!u) try {
                    u = w && w.conf
                } catch (ba) {
                    u = null
                }
                if (u && ("auto" in u && !1 === u.auto && (h = !1), !w.render || !w.Config) && (I = u.hostFile)) {
                    var G = qa("head")[0];
                    var O = N.make("script");
                    O.id = "sf_host_lib";
                    O.type = "text/javascript";
                    O.className = "sf_lib";
                    O.src = I;
                    l.ActiveXObject ? O.onreadystatechange = function () {
                        var l = O.readyState;
                        if ("loaded" == l || "complete" == l) ma = !1, h && y(), O = G = w = u = O.onreadystatechange = null
                    } : O.onload = function () {
                        ma = !1;
                        h && y();
                        O = G = w = u = O.onload = null
                    };
                    ma = !0;
                    G.appendChild(O)
                } else h &&
                (u ? (ma = !0, y(), ma = !1) : 100 >= fa++ && setTimeout(J, 50))
            } else y()
        }

        function U() {
            var h, l;
            if (N) for (h in la) if (l = ja(h)) ka(l), delete la[h]
        }

        function y() {
            var y = qa && qa("script") || [], w = [], J = 0, u = A && A.host;
            var G = u && u.conf;
            var O, ba, M, R, fa;
            if (!A || !Y || !N) return h("SafeFrame base library not found", !0), !1;
            S || (S = A && A.lib);
            if (ma && Ga) return h("Automatic boot already invoked"), !1;
            if (l == top) {
                try {
                    var ga = u.Config()
                } catch (Z) {
                    ga = null
                }
                if (G && !ga) try {
                    ga = u.Config(G)
                } catch (Z) {
                    ga = null
                }
                if (!ga) return h("No configuration found", !0), !1
            }
            for (; G =
                       y[J++];) if ("sf_data" == G.className || "text/x-safeframe" == I(G, "type")) if (Ga = !0, ba = I(G, "id"), ba || (ba = P("sf_data_element"), I(G, "id", ba)), !la[ba]) {
                var B = G.text || G.innerHTML || G.innerText;
                try {
                    B = Y.trim(B), B = new Function("return " + B), B = B()
                } catch (Z) {
                    G = "Error parsing tag configuration " + (Z && Z.message || "");
                    h(G, !0);
                    continue
                }
                if (B && B.id && (B.html || B.src)) if (l != top) G = (G = B.html || "") || Ea(["<scr", "ipt type='text/javascript', src='", B.src, "'></scr", "ipt>"]), Fa() ? h("cannot write html content into already loaded document") :
                    Q.write(G); else if (O = xa(G)) if (M = ga && ga.positions[B.id], M || (M = B.conf, M.id = B.id, M && (M = new u.PosConfig(M))), M) {
                    M.dest || (M = new u.PosConfig(M, P("sf_position")));
                    if (B.meta) {
                        var ha = B.meta;
                        var ka = "";
                        var pa = {};
                        for (ka in ha) {
                            var ta = ha[ka];
                            var ua = typeof ta;
                            !R && "object" == ua && ta && (R = ta, fa = ka);
                            "object" != ua && "function" != ua && (pa[ka] = ta)
                        }
                        ha = new u.PosMeta(pa, fa || "", fa && R ? R : null)
                    }
                    B = new u.Position(B, null, ha, M);
                    la[ba] = ba;
                    ba = ja(M.dest);
                    if (!ba) if (Fa()) {
                        ba = N.make("ins");
                        I(ba, "id", M.dest);
                        try {
                            O.insertBefore(ba, G)
                        } catch (Z) {
                            h("failed auto-adding destination element " +
                                Z.message, !0);
                            continue
                        }
                    } else Q.write("<ins id='", M.dest, "'></ins>");
                    w.push(B)
                } else h("no position conf found pre-defined or inline for position " + B.id, !0); else h("can't find parent element for script tag", !0); else h("no content or id property found in the inline position object", !0)
            }
            if (w.length) try {
                u.render(w)
            } catch (Z) {
                h("failed during rendering " + Z.message, !0)
            } else h("no positions to boot");
            N.wait(U)
        }

        var Q = l && l.document, A = l && l.$sf, S = A && A.lib, Y = S && S.lang, N = S && S.dom, Ea = Y && Y.cstr,
            P = Y && Y.guid, ja = N &&
            N.elt, xa = N && N.par, qa = N && N.tags, I = N && N.attr, ka = N && N.purge, Fa = N && N.ready, la = {},
            fa = 0, Ga = !1, ma = !1;
        setTimeout(J, 50);
        Ra()
    }

    function sb(l) {
        l.dataset.adsbydfStatus = "reserved";
        var h = l.dataset.adSlot, J = l.clientWidth, U = l.clientHeight,
            y = l.dataset.adExternalClickTracker ? l.dataset.adExternalClickTracker : "", Q = "" + J + "x" + U,
            A = document.createElement("ins");
        A.style = "display:inline-table;border:none;height:" + U + "px;margin:0;padding:0;position:relative;visibility:visible;width:" + J + "px;background-color:transparent";
        A.id = h +
            Math.random();
        J = document.createElement("ins");
        J.id = h + Math.random();
        h = '<script type="text/javascript">let adSlot = ' + h + '; let externalClickTracker = "' + y + '";\x3c/script>';
        y = document.createElement("script");
        y.type = "text/x-safeframe";
        y.classList.add("sf_data");
        y.innerText = '{"id" : "' + J.id + '", "html" : \'' + h + '\', "conf": { "size" : "' + Q + '", "dest": "' + J.id + '"}}';
        J.appendChild(y);
        A.appendChild(J);
        l.appendChild(A);
        new $sf.host.Config({renderFile: "//sbc.digital-forest.info/20170601/adsbtpl.html", positions: {}});
        l.dataset.adsbydfStatus =
            "done"
    }

    function Ra() {
        var l = document.getElementsByClassName("adbydigitalforest"), h = l.length;
        if (h) for (i = 0; i < h; i++) (!l[i].dataset.adsbydfStatus || "done" != l[i].dataset.adsbydfStatus && "reserved" != l[i].dataset.adsbydfStatus) && (l[i].dataset.adIsBackground ? Da : Xa).bind(void 0, l[i])()
    }

    var P = window;
    if (!P.allSlotsProducer) {
        P.allSlotsProducer = !0;
        baseFunction = function (l) {
            (function (h) {
                var J = h && h.Number, U = h && h.Math, y = h && h.document, Q = h && h.navigator,
                    A = Q && Q.userAgent || "", S = h && h.String, Y = S.fromCharCode(92), N = Y + Y,
                    P = S.fromCharCode(34),
                    Da = Y + P, Y = S.fromCharCode(43), ja = "scr" + P + Y + P + "ipt", xa = "", qa = I, I = !1,
                    ka = {preventDefault: 0, stopImmediatePropagation: 0, stopPropagation: 0, preventBubble: 0},
                    Fa = J && J.MAX_VALUE, la = -1 * Fa,
                    fa = !(!l.ActiveXObject && "ActiveXObject" in l) && h && "ActiveXObject" in h, Ga = 0, ma = I,
                    na = 0, w = null, Ba = 0, u = null, G = 0, O = 0, ba = 0, M = {}, R = "", ra = "", ga = null,
                    B = null, ha, za, pa, ta, ua;
                (function () {
                    function l(a) {
                        var g = typeof a;
                        return "string" == g ? a : "number" != g || a ? "object" == g && a && a.join ? a.join("") : !1 === a ? "false" : !0 === a ? "true" : a ? S(a) : "" : "0"
                    }

                    function u(a) {
                        try {
                            a =
                                a && "function" == typeof a && a.toString() && new a.constructor ? a : null
                        } catch (g) {
                            a = null
                        }
                        return !!a
                    }

                    function w(a, g, f, l, h) {
                        var m;
                        if (!g || !a) return a;
                        for (m in g) {
                            var v = g[m];
                            var q = typeof v;
                            f && !g.hasOwnProperty(m) || h && m in a || l && "function" == q || ("object" == q && v && (v = v.slice ? w([], v) : w({}, v)), a[m] = v)
                        }
                        return a
                    }

                    function y() {
                        return (new Date).getTime()
                    }

                    function t() {
                        return U.round(100 * U.random())
                    }

                    function f(a) {
                        return (a = l(a)) && a.replace(/^\s\s*/, "").replace(/\s\s*$/, "")
                    }

                    function n(a, g, v, t) {
                        v = v && "object" == typeof v ? v : h;
                        var q =
                            0, m = null, n;
                        if (a) if (a = l(a), g = g && "object" == typeof g ? g : null, a.indexOf(".")) for (a = a.split("."); n = a[q++];) n = f(n), m = q == a.length ? v[n] && g ? v[n] = w(v[n], g, I, null, t) : t && n in v ? v[n] : v[n] = v[n] || g || {} : t && n in v ? v[n] : v[n] = v[n] || {}, v = v[n]; else m = v[a] && g ? v[a] = w(v[a], g, I, null, t) : v[a] = v[a] || g || {};
                        return m
                    }

                    function B() {
                        return N
                    }

                    function A() {
                        return Da
                    }

                    function G() {
                        return "\\r"
                    }

                    function O() {
                        return "\\n"
                    }

                    function R(a, g, f) {
                        return l(["<", g, ja, f, ">"])
                    }

                    function E(a, g, f) {
                        return f ? a.lastIndexOf(g) : a.indexOf(g)
                    }

                    function M(a, g, f,
                               h, n) {
                        var m, t, q, v, c, r;
                        if (!(this instanceof M)) return new M(a, g, f, h, n);
                        if (!arguments.length) return this;
                        if (a && "object" == typeof a) return w(new M("", g, f, h, n), a);
                        a = l(a);
                        g = l(g) || "&";
                        f = l(f) || "=";
                        if (!a) return this;
                        "?" != g && "?" != f && "?" == a.charAt(0) && (a = a.substring(1));
                        a.charAt(0) == g && (a = a.substring(1));
                        var z = a.split(g);
                        var u = z.length;
                        for (m = 0; u--;) if (t = z[m++], q = c = I, t) {
                            var F = t.split(f);
                            var D = F.length;
                            if (2 < D) {
                                var y = unescape(F[0]);
                                F.shift();
                                if (n) if (v = y + f, t = E(a, v), D = v.length, q = a.substring(t + D), v = g + g, r = v.length,
                                    q = E(q, v), -1 != q) {
                                    q = a.substr(t + D, q + r);
                                    F = new M(q, g, f, h, n);
                                    q = "";
                                    D = 0;
                                    for (q in F) D++;
                                    0 < D && (m += D - 1);
                                    t = F
                                } else t = unescape(F.join(f)); else t = unescape(F.join(f));
                                q = !0
                            } else 2 == D && (y = unescape(F[0]), t = unescape(F[1]), q = !0);
                            q && (h ? y in this || (this[y] = t, c = !0) : (this[y] = t, c = !0), n && c && y && t && "object" != typeof t && (0 <= E(t, g) || 0 <= E(t, f)) && (this[y] = new M(t, g, f, h, n)))
                        }
                    }

                    function Q(a, f, h, t) {
                        var g, m = [];
                        a = a || "&";
                        f = f || "=";
                        for (g in this) {
                            var n = this[g];
                            var v = typeof n;
                            n && "function" == v || (n && "object" == v && (n = n.tagName || n.nodeType ? "#node" :
                                Q.apply(n, [a, f, h, t])), h && (g = escape(g)), t || (n = escape(n)), m.push(g, f, n, a))
                        }
                        m.length && (m[m.length - 1] = "");
                        return l(m)
                    }

                    var L = M.prototype;
                    L.toString = L.valueOf = Q;
                    pa = n("$sf.lib.lang", {
                        ParamHash: M, cstr: l, cnum: function (a, f, h, n) {
                            if ("number" != typeof a) try {
                                a = a ? parseFloat(a) : J.NaN
                            } catch (q) {
                                a = J.NaN
                            }
                            null == n && (n = Fa);
                            null == h && (h = la);
                            return (isNaN(a) || a < h || a > n) && null != f ? f : a
                        }, cbool: function (a) {
                            return a && "0" != a && "false" != a && "no" != a && "undefined" != a && "null" != a ? !0 : I
                        }, noop: function () {
                        }, trim: f, callable: u, guid: function (a) {
                            return l([a ||
                            "", "_", y(), "_", t(), "_", Ga++])
                        }, mix: w, time: y, rand: t, def: n, ns: function (a, g) {
                            var n = /(\[(.{1,})\])|(\.\w+)/gm, t = /\[(('|")?)((\s|.)*?)(('|")?)\]/gm,
                                q = /(\[.*)|(\..*)/g, m = /\./gm, u = 0, w = !0;
                            var y = g || h;
                            if (a) if (a = l(a)) if (a = f(a), n = a.match(n)) for (q = a.replace(q, ""), n.unshift(q); q = n[u++];) {
                                q = q.replace(t, "$3").replace(m, "");
                                if (!y[q]) {
                                    w = I;
                                    break
                                }
                                y = y[q]
                            } else y = y[a]; else w = I; else w = I;
                            return w && y || I
                        }, jssafe_html: function (a) {
                            if (a = l(a)) a = a.replace(/(<noscript[^>]*>)(\s*?|.*?)(<\/noscript>)/gim, ""), a = a.replace(/\\/g, B), a =
                                a.replace(/\"/g, A), a = a.replace(/\n/g, O), a = a.replace(/\r/g, G), a = a.replace(/<(\/)*script([^>]*)>/gi, R), a = a.replace(/\t/gi, " "), a = l([P, a, P]), a = P + a + P;
                            return a
                        }, isArray: function (a) {
                            return null == a || "string" === typeof a ? !1 : null != a.length && a.constructor == Array ? !0 : !1
                        }
                    });
                    n("$sf.env", {isIE: fa});
                    ha = l;
                    za = u
                })();
                (function () {
                    function h(h) {
                        var f = 0;
                        return parseFloat(h.replace(/\./g, function () {
                            return 1 == f++ ? "" : "."
                        }))
                    }

                    function l(h, f, l) {
                        h = h && h.match(f);
                        return null == l ? h : h && h[l] || null
                    }

                    function u(h, f) {
                        return h.test(f)
                    }

                    function w(t) {
                        var f =
                            {}, n, w = new Date;
                        if (!t && B) return B;
                        f.ie = f.opera = f.gecko = f.webkit = f.safari = f.chrome = f.air = f.ipod = f.ipad = f.iphone = f.android = f.webos = f.silk = f.nodejs = f.phantomjs = 0;
                        f.mobile = f.ios = f.os = null;
                        f.accel = !1;
                        f.caja = Q && Q.cajaVersion;
                        f.cks = I;
                        if (t = t || A || "") {
                            u(/windows|win32/i, t) ? f.os = "windows" : u(/macintosh|mac_powerpc/i, t) ? f.os = "macintosh" : u(/android/i, t) ? f.os = "android" : u(/symbos/i, t) ? f.os = "symbos" : u(/linux/i, t) ? f.os = "linux" : u(/rhino/i, t) && (f.os = "rhino");
                            u(/KHTML/, t) && (f.webkit = 1);
                            u(/IEMobile|XBLWP7/, t) && (f.mobile =
                                "windows");
                            u(/Fennec/, t) && (f.mobile = "gecko");
                            if (n = l(t, /AppleWebKit\/([^\s]*)/, 1)) {
                                f.webkit = h(n);
                                f.safari = f.webkit;
                                u(/PhantomJS/, t) && (n = l(t, /PhantomJS\/([^\s]*)/, 1)) && (f.phantomjs = h(n));
                                if (u(/ Mobile\//, t) || u(/iPad|iPod|iPhone/, t)) {
                                    if (f.mobile = "Apple", n = (n = l(t, /OS ([^\s]*)/, 1)) && h(n.replace("_", ".")), f.ios = n, f.ipad = f.ipod = f.iphone = 0, n = l(t, /iPad|iPod|iPhone/, 0)) f[n.toLowerCase()] = f.ios
                                } else {
                                    if (n = l(t, /NokiaN[^\/]*|Android \d\.\d|webOS\/\d\.\d/, 0)) f.mobile = n;
                                    u(/webOS/, t) && (f.mobile = "WebOS", n = l(t, /webOS\/([^\s]*);/,
                                        1)) && (f.webos = h(n));
                                    u(/ Android/, t) && (f.mobile = "Android", n = l(t, /Android ([^\s]*);/, 1)) && (f.android = h(n));
                                    if (u(/Silk/, t)) {
                                        if (n = l(t, /Silk\/([^\s]*)\)/, 1)) f.silk = h(n);
                                        f.android || (f.android = 2.34, f.os = "Android");
                                        u(/Accelerated=true/, t) && (f.accel = !0)
                                    }
                                }
                                if ((n = t.match(/(Chrome|CrMo)\/([^\s]*)/)) && n[1] && n[2]) f.chrome = h(n[2]), f.safari = 0, "CrMo" === n[1] && (f.mobile = "chrome"); else if (n = l(t, /AdobeAIR\/([^\s]*)/)) f.air = n[0]
                            }
                            if (!f.webkit) if (n = l(t, /Opera[\s\/]([^\s]*)/, 1)) {
                                if (f.opera = h(n), n = l(t, /Opera Mini[^;]*/, 0)) f.mobile =
                                    n
                            } else (n = l(t, /MSIE\s([^;]*)/, 1)) ? f.ie = h(n) : l(t, /Gecko\/([^\s]*)/) && (f.gecko = 1, n = l(t, /rv:([^\s\)]*)/, 1)) && (f.gecko = h(n))
                        }
                        try {
                            w.setTime(w.getTime() + 1E3), y.cookie = ha(["sf_ck_tst=test; expires=", w.toGMTString(), "; path=/"]), -1 != y.cookie.indexOf("sf_ck_tst") && (f.cks = !0)
                        } catch (sa) {
                            f.cks = I
                        }
                        try {
                            "object" == typeof process && process.versions && process.versions.node && (f.os = process.platform, f.nodejs = numberify(process.versions.node))
                        } catch (sa) {
                            f.nodejs = 0
                        }
                        return f
                    }

                    B = w();
                    B.parse = w;
                    pa.def("$sf.env.ua", B, null, !0)
                })();
                (function () {
                    function l(c) {
                        v(h, "load", l);
                        v(h, "DOMContentLoaded", l);
                        w = !0
                    }

                    function B() {
                        var c, a;
                        O && (clearTimeout(O), O = 0);
                        300 <= G && (u = null, w = !0);
                        if (null === w) {
                            try {
                                var f = (a = (c = y && y.body) && Y("*", c)) && a.length;
                                var g = c && c.lastChild
                            } catch (F) {
                                Ba = 0, u = null
                            }
                            Ba && f == Ba && g == u ? (u = null, w = !0) : (Ba = f, u = g, G += 1, O = setTimeout(B, 50))
                        } else u = null
                    }

                    function A(c) {
                        var a = E(c, "id"), f;
                        if (f = a && M[a]) v(c, "load", f), M[a] = null, delete M[a]
                    }

                    function J(c, a) {
                        var r, f;
                        za(a) && (r = function (g) {
                            var h = H(g);
                            A(h);
                            if (h && a) try {
                                a.call(h, g)
                            } catch (T) {
                            }
                            c = a = r =
                                f = null
                        }, f = E(c, "id"), A(c), f && (M[f] = r), g(c, "load", r));
                        r = null
                    }

                    function t(c) {
                        return c && "string" == typeof c ? Q(c) || c : c
                    }

                    function f(c, a, f, g) {
                        try {
                            ga || (ga = ta.msghost)
                        } catch (F) {
                            ga = null
                        }
                        if (h == top) return c && ga && ga[c] && ga[c](a, f, g)
                    }

                    function n(c) {
                        var a = null;
                        try {
                            c && (a = 9 == c.nodeType ? c : c.document || c.ownerDocument || null)
                        } catch (z) {
                            a = null
                        }
                        return a
                    }

                    function P(c) {
                        var a = null, f;
                        try {
                            c && (a = c.parentWindow || c.defaultView || null, a || (a = (f = n(c)) && (f.parentWindow || f.defaultView) || null))
                        } catch (K) {
                            a = null
                        }
                        return a
                    }

                    function Q(c) {
                        var a =
                            arguments;
                        return (a = 1 < a.length ? n(a[1]) : y) && a.getElementById(c) || null
                    }

                    function N(c) {
                        return c && 1 == c.nodeType && c.tagName.toLowerCase() || ""
                    }

                    function Y(c, a) {
                        var f = [];
                        try {
                            f = a && a.getElementsByTagName ? a.getElementsByTagName(c) || f : y.getElementsByTagName(c) || f
                        } catch (K) {
                            f = []
                        }
                        return f
                    }

                    function U(c) {
                        return c && (c.parentNode || c.parentElement)
                    }

                    function E(c, a, f) {
                        try {
                            2 < arguments.length ? null === f ? ma ? c.removeAttribute(a, 0) : c.removeAttribute(a) : (f = ha(f), "class" == a.toLowerCase() ? c.className = f : ma ? c.setAttribute(a, f, 0) : c.setAttribute(a,
                                f)) : f = ma ? ha(c.getAttribute(a, 0)) : ha(c.getAttribute(a))
                        } catch (K) {
                            f = ""
                        }
                        return f
                    }

                    function ja(c, a) {
                        try {
                            var f = c.style;
                            1 < arguments.length ? f.cssText = ha(a) : a = f.cssText
                        } catch (K) {
                            a = ""
                        }
                        return a
                    }

                    function la(c, a) {
                        return (1 < arguments.length && n(a) || y).createElement(c)
                    }

                    function L(c, a) {
                        var f = I;
                        try {
                            c && (f = c.appendChild(a))
                        } catch (K) {
                            f = I
                        }
                        return f
                    }

                    function a(c) {
                        var a = I, g, h = "iframe" == N(c);
                        h && (f("detach", c), A(c), fa || E(c, "src", "about:blank"));
                        try {
                            if (g = U(c)) g.removeChild(c), a = !0, fa && h && ua()
                        } catch (F) {
                        }
                        return a
                    }

                    function g(c,
                               a, f) {
                        try {
                            if (qa) c[xa]("on" + a, f); else c[xa](a, f, I)
                        } catch (K) {
                        }
                    }

                    function v(c, a, f) {
                        try {
                            qa ? c.detachEvent("on" + a, f) : c.removeEventListener(a, f, I)
                        } catch (K) {
                        }
                    }

                    function V() {
                        var a;
                        O && (clearTimeout(O), O = 0);
                        if (w) return u = null, !0;
                        if (a = y.readyState) u = null, w = "loaded" == a || "complete" == a ? !0 : I;
                        u = null;
                        G = Ba = 0;
                        B();
                        return !!w
                    }

                    function q(a) {
                        if (V()) try {
                            pa.callable(a) && a()
                        } catch (r) {
                            r = null
                        } else setTimeout(function () {
                            q(a);
                            a = null
                        }, 51)
                    }

                    function m(a) {
                        var c = "";
                        if (a = a || h.event) {
                            try {
                                a.returnValue = I
                            } catch (z) {
                            }
                            try {
                                a.cancelBubble = !0
                            } catch (z) {
                            }
                            try {
                                a.stopped =
                                    !0
                            } catch (z) {
                            }
                            for (c in ka) if (ka[c]) try {
                                a[c]()
                            } catch (z) {
                            }
                        }
                        return I
                    }

                    function H(a) {
                        var c = null;
                        try {
                            c = (a = a || h.event) ? a[R] || a[ra] : null
                        } catch (z) {
                            c = null
                        }
                        return c
                    }

                    function X(a, g, h, l, m, n) {
                        var c = ["<", "iframe", " "], r;
                        if (n) var q = a; else {
                            a = t(a);
                            if ("iframe" != N(a)) return null;
                            q = a.cloneNode(I)
                        }
                        g = g || {};
                        "src" in g ? E(q, "src", null) : g.src = E(a, "src") || "about:blank";
                        "name" in g ? E(q, "name", null) : g.name = E(a, "name");
                        g.src || (g.src = "about:blank");
                        a = m && f("prep", g);
                        n || (E(q, "width", null), E(q, "height", null));
                        h && ((n = ja(q)) && ";" != n.charAt(n.length -
                            1) && (n += ";"), ja(q, [n, ha(h)]));
                        n = la("ins");
                        L(n, q);
                        h = n.innerHTML.replace(/<iframe(.*?)>(.*?)<\/iframe>/gim, "$1");
                        c.push('name="', g.name, '" ', h, "></", "iframe", ">");
                        delete g.name;
                        n.innerHTML = ha(c);
                        c = n.firstChild;
                        for (r in g) E(c, r, g[r]);
                        E(c, "id") || (E(c, "id", "sf_iframe_" + ba), ba++);
                        E(c, "FRAMEBORDER", "no");
                        E(c, "SCROLLING", "no");
                        E(c, "ALLOWTRANSPARENCY", !0);
                        E(c, "HIDEFOCUS", !0);
                        E(c, "TABINDEX", -1);
                        E(c, "MARGINWIDTH", 0);
                        E(c, "MARGINHEIGHT", 0);
                        J(c, l);
                        a && f("attach", c, a, m);
                        return c
                    }

                    function C(a, f, g, h) {
                        return X(la("iframe"),
                            a, f, g, h, !0)
                    }

                    (function () {
                        var c, f;
                        fa ? (R = "srcElement", ra = "target", c = la("iframe"), E(c, "SCROLLING", "no"), ma = "no" != E(c, "SCROLLING"), ua = "CollectGarbage" in h ? function () {
                            na && clearTimeout(na);
                            na = setTimeout(function () {
                                try {
                                    h.CollectGarbage()
                                } catch (z) {
                                }
                            }, 3E3)
                        } : _lang.noop) : (R = "target", ra = "currentTarget");
                        h.addEventListener && !fa ? xa = "addEventListener" : fa && (qa = !0, xa = "attachEvent");
                        c = null;
                        try {
                            c = y.createEvent("UIEvent")
                        } catch (z) {
                            c = null
                        }
                        if (!c) try {
                            c = y.createEvent("UIEvents")
                        } catch (z) {
                            c = null
                        }
                        if (c) for (f in ka) c[f] && (ka[f] =
                            1);
                        c = null;
                        g(h, "load", l);
                        g(h, "DOMContentLoaded", l);
                        ta = pa.def("$sf.lib.dom", {
                            doc: n,
                            view: P,
                            elt: Q,
                            tagName: N,
                            tags: Y,
                            par: U,
                            make: la,
                            css: ja,
                            attr: E,
                            gc: ua,
                            append: L,
                            purge: a,
                            attach: g,
                            detach: v,
                            ready: V,
                            wait: q,
                            evtCncl: m,
                            evtTgt: H
                        }, null, !0)
                    })();
                    pa.def("$sf.lib.dom.iframes", {
                        make: C, clone: function (a, f, g, h, l) {
                            return X(a, f, g, h, l)
                        }, replace: function (a, g, h, l, m) {
                            var c, n, r;
                            a = a || {};
                            var q = (n = a.id) && t(n);
                            q = (c = N(q)) ? q : null;
                            (c = "iframe" == c ? q : null) ? (f("detach", c), A(c), r = U(c), a = X(c, a, g, l, m), E(a, "onload", null), E(a, "onreadystatechange",
                                null)) : (h && (h = t(h), N(h) && (r = h)), !r && q && (r = U(q)), g = ha(g) || ja(q) || "", a = C(a, g, l, m));
                            try {
                                r ? c ? r.replaceChild(a, c) : q ? r.replaceChild(a, q) : L(r, a) : L(y.body, a)
                            } catch ($a) {
                            }
                            return Q(n)
                        }, view: function (a) {
                            var c, f, g, h, l, m = 0;
                            try {
                                if (c = a.contentWindow || null, !c) for (h = (f = (g = n(a)) && P(g)) && f.frames || []; l = h[m++];) {
                                    try {
                                        var q = l.frameElement
                                    } catch (Ta) {
                                        q = null
                                    }
                                    if (q && q == a) {
                                        c = l;
                                        break
                                    }
                                }
                            } catch (Ta) {
                                c = null
                            }
                            return c
                        }
                    }, null, !0);
                    pa.def("$sf.lib.logger", {
                        log: function (a) {
                            h.console && console.log && console.log(a)
                        }, error: function (a) {
                            h.console &&
                            console.error ? console.error(a) : h.console && console.log && console.log(a)
                        }
                    }, null, !0);
                    pa.def("$sf.info", {errs: [], list: []}, null, !0);
                    S.prototype.trim || (S.prototype.trim = pa.trim)
                })()
            })(l);
            za(l)
        }.bind(void 0, P);
        hostFunction = za.bind(void 0, P);
        bootFunction = lb.bind(void 0, P);
        var Xa = Da;
        P == top ? P.sfLibsLoaded || (P.sfLibsLoaded = 1, Xa = sb, P.requestAnimationFrame(baseFunction)) : P.requestAnimationFrame(Ra)
    }

    ( function( $ ) {
        $(document).on('ajaxComplete', function () {
            if ($('.adbydigitalforest').length > 0) {
                Ra();
            }
        })
    } )( jQuery );

});