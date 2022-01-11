! function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Swiper = t()
}(this, (function () {
    "use strict";
    function e(e) {
        return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object
    }
    function t(s = {}, a = {}) {
        Object.keys(a).forEach((i => {
            void 0 === s[i] ? s[i] = a[i] : e(a[i]) && e(s[i]) && Object.keys(a[i]).length > 0 && t(s[i], a[i])
        }))
    }
    const s = {
        body: {},
        activeElement: {
            blur() {},
            nodeName: ""
        },
        querySelector: () => null,
        querySelectorAll: () => [],
        getElementById: () => null,
        createEvent: () => ({
        }),
        createElement: () => ({
        }),
        createElementNS: () => ({}),
        importNode: () => null,
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: ""
        }
    };
    function a() {
        const e = "undefined" != typeof document ? document : {};
        return t(e, s), e
    }
    const i = {
        document: s,
        navigator: {
            userAgent: ""
        },
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: ""
        },
        history: {
        },
        CustomEvent: function () {
        },
        getComputedStyle: () => ({
        }),
        screen: {},
        matchMedia: () => ({}),
        requestAnimationFrame: e => "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0)
    };

    function r() {
        const e = "undefined" != typeof window ? window : {};
        return t(e, i), e
    }
    class n extends Array {
        constructor(e) {
            super(...e || []),
                function (e) {
                    const t = e.__proto__;
                    Object.defineProperty(e, "__proto__", {
                        get: () => t,
                        set(e) {
                        }
                    })
                }(this)
        }
    }

    function l(e = []) {
        const t = [];
        return e.forEach((e => {
            Array.isArray(e) ? t.push(...l(e)) : t.push(e)
        })), t
    }

    function o(e, t) {
    }

    function d(e, t) {
        const s = r(),
            i = a();
        let l = [];
        if (!t && e instanceof n) return e;
        if (!e) return new n(l);
        if ("string" == typeof e) {
            const s = e.trim();
            if (s.indexOf("<") >= 0 && s.indexOf(">") >= 0) {
                let e = "div";
                0 === s.indexOf("<li") && (e = "ul"), 0 === s.indexOf("<tr") && (e = "tbody"), 0 !== s.indexOf("<td") && 0 !== s.indexOf("<th") || (e = "tr"), 0 === s.indexOf("<tbody") && (e = "table"), 0 === s.indexOf("<option") && (e = "select");
                const t = i.createElement(e);
                t.innerHTML = s;
                for (let e = 0; e < t.childNodes.length; e += 1) l.push(t.childNodes[e])
            } else l = function (e, t) {
                if ("string" != typeof e) return [e];
                const s = [],
                    a = t.querySelectorAll(e);
                for (let e = 0; e < a.length; e += 1) s.push(a[e]);
                return s
            }(e.trim(), t || i)
        } else if (e.nodeType || e === s || e === i) l.push(e);
        else if (Array.isArray(e)) {
            if (e instanceof n) return e;
            l = e
        }
        return new n(function (e) {
            const t = [];
            for (let s = 0; s < e.length; s += 1) - 1 === t.indexOf(e[s]) && t.push(e[s]);
            return t
        }(l))
    }
    d.fn = n.prototype;
    const p = {
        addClass: function (...e) {
            const t = l(e.map((e => e.split(" "))));
            return this.forEach((e => {
                e.classList.add(...t)
            })), this
        },
        removeClass: function (...e) {
            const t = l(e.map((e => e.split(" "))));
            return this.forEach((e => {
                e.classList.remove(...t)
            })), this
        },
        hasClass: function (...e) {
        },
        toggleClass: function (...e) {
        },
        attr: function (e, t) {
            if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
            for (let s = 0; s < this.length; s += 1)
                if (2 === arguments.length) this[s].setAttribute(e, t);
                else
                    for (const t in e) this[s][t] = e[t], this[s].setAttribute(t, e[t]);
            return this
        },
        removeAttr: function (e) {
            for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
            return this
        },
        transform: function (e) {
            for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
            return this
        },
        transition: function (e) {
            for (let t = 0; t < this.length; t += 1) this[t].style.transitionDuration = "string" != typeof e ? `${e}ms` : e;
            return this
        },
        on: function (...e) {
            let [t, s, a, i] = e;

            function r(e) {
            }

            function n(e) {
                const t = e && e.target && e.target.dom7EventData || [];
                t.indexOf(e) < 0 && t.unshift(e), a.apply(this, t)
            }
            "function" == typeof e[1] && ([t, a, i] = e, s = void 0), i || (i = !1);
            const l = t.split(" ");
            let o;
            for (let e = 0; e < this.length; e += 1) {
                const t = this[e];
                if (s)
                    for (o = 0; o < l.length; o += 1) {
                        const e = l[o];
                        t.dom7LiveListeners || (t.dom7LiveListeners = {}), t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []), t.dom7LiveListeners[e].push({
                            listener: a,
                            proxyListener: r
                        }), t.addEventListener(e, r, i)
                    } else
                        for (o = 0; o < l.length; o += 1) {
                            const e = l[o];
                            t.dom7Listeners || (t.dom7Listeners = {}), t.dom7Listeners[e] || (t.dom7Listeners[e] = []), t.dom7Listeners[e].push({
                                listener: a,
                                proxyListener: n
                            }), t.addEventListener(e, n, i)
                        }
            }
            return this
        },
        off: function (...e) {
        },
        trigger: function (...e) {
            const t = r(),
                s = e[0].split(" "),
                a = e[1];
            for (let i = 0; i < s.length; i += 1) {
                const r = s[i];
                for (let s = 0; s < this.length; s += 1) {
                    const i = this[s];
                    if (t.CustomEvent) {
                        const s = new t.CustomEvent(r, {
                            detail: a,
                            bubbles: !0,
                            cancelable: !0
                        });
                        i.dom7EventData = e.filter(((e, t) => t > 0)), i.dispatchEvent(s), i.dom7EventData = [], delete i.dom7EventData
                    }
                }
            }
            return this
        },
        transitionEnd: function (e) {
        },
        outerWidth: function (e) {
        },
        outerHeight: function (e) {
        },
        styles: function () {
        },
        offset: function () {
        },
        css: function (e, t) {
            const s = r();
            let a;
            if (1 === arguments.length) {
                if ("string" != typeof e) {
                    for (a = 0; a < this.length; a += 1)
                        for (const t in e) this[a].style[t] = e[t];
                    return this
                }
                if (this[0]) return s.getComputedStyle(this[0], null).getPropertyValue(e)
            }
            if (2 === arguments.length && "string" == typeof e) {
                for (a = 0; a < this.length; a += 1) this[a].style[e] = t;
                return this
            }
            return this
        },
        each: function (e) {
            return e ? (this.forEach(((t, s) => {
                e.apply(t, [t, s])
            })), this) : this
        },
        html: function (e) {
            if (void 0 === e) return this[0] ? this[0].innerHTML : null;
            for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
            return this
        },
        text: function (e) {
        },
        is: function (e) {
            const t = r(),
                s = a(),
                i = this[0];
            let l, o;
            if (!i || void 0 === e) return !1;
            if ("string" == typeof e) {
                if (i.matches) return i.matches(e);
                if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
                if (i.msMatchesSelector) return i.msMatchesSelector(e);
                for (l = d(e), o = 0; o < l.length; o += 1)
                    if (l[o] === i) return !0;
                return !1
            }
            if (e === s) return i === s;
            if (e === t) return i === t;
            if (e.nodeType || e instanceof n) {
                for (l = e.nodeType ? [e] : e, o = 0; o < l.length; o += 1)
                    if (l[o] === i) return !0;
                return !1
            }
            return !1
        },
        index: function () {
            let e, t = this[0];
            if (t) {
                for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
                return e
            }
        },
        eq: function (e) {
            if (void 0 === e) return this;
            const t = this.length;
            if (e > t - 1) return d([]);
            if (e < 0) {
                const s = t + e;
                return d(s < 0 ? [] : [this[s]])
            }
            return d([this[e]])
        },
        append: function (...e) {
            let t;
            const s = a();
            for (let a = 0; a < e.length; a += 1) {
                t = e[a];
                for (let e = 0; e < this.length; e += 1)
                    if ("string" == typeof t) {
                        const a = s.createElement("div");
                        for (a.innerHTML = t; a.firstChild;) this[e].appendChild(a.firstChild)
                    } else if (t instanceof n)
                    for (let s = 0; s < t.length; s += 1) this[e].appendChild(t[s]);
                else this[e].appendChild(t)
            }
            return this
        },
        prepend: function (e) {
        },
        next: function (e) {
            return this.length > 0 ? e ? this[0].nextElementSibling && d(this[0].nextElementSibling).is(e) ? d([this[0].nextElementSibling]) : d([]) : this[0].nextElementSibling ? d([this[0].nextElementSibling]) : d([]) : d([])
        },
        nextAll: function (e) {
            const t = [];
            let s = this[0];
            if (!s) return d([]);
            for (; s.nextElementSibling;) {
                const a = s.nextElementSibling;
                e ? d(a).is(e) && t.push(a) : t.push(a), s = a
            }
            return d(t)
        },
        prev: function (e) {
        },
        prevAll: function (e) {
            const t = [];
            let s = this[0];
            if (!s) return d([]);
            for (; s.previousElementSibling;) {
                const a = s.previousElementSibling;
                e ? d(a).is(e) && t.push(a) : t.push(a), s = a
            }
            return d(t)
        },
        parent: function (e) {
            const t = [];
            for (let s = 0; s < this.length; s += 1) null !== this[s].parentNode && (e ? d(this[s].parentNode).is(e) && t.push(this[s].parentNode) : t.push(this[s].parentNode));
            return d(t)
        },
        parents: function (e) {
            const t = [];
            for (let s = 0; s < this.length; s += 1) {
                let a = this[s].parentNode;
                for (; a;) e ? d(a).is(e) && t.push(a) : t.push(a), a = a.parentNode
            }
            return d(t)
        },
        closest: function (e) {
            let t = this;
            return void 0 === e ? d([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
        },
        find: function (e) {
            const t = [];
            for (let s = 0; s < this.length; s += 1) {
                const a = this[s].querySelectorAll(e);
                for (let e = 0; e < a.length; e += 1) t.push(a[e])
            }
            return d(t)
        },
        children: function (e) {
            const t = [];
            for (let s = 0; s < this.length; s += 1) {
                const a = this[s].children;
                for (let s = 0; s < a.length; s += 1) e && !d(a[s]).is(e) || t.push(a[s])
            }
            return d(t)
        },
        filter: function (e) {
        },
        remove: function () {
        }
    };
    function c(e, t = 0) {
        return setTimeout(e, t)
    }
    function u() {
        return Date.now()
    }
    function h(e, t = "x") {
        const s = r();
        let a, i, n;
        const l = function (e) {
            const t = r();
            let s;
            return t.getComputedStyle && (s = t.getComputedStyle(e, null)), !s && e.currentStyle && (s = e.currentStyle), s || (s = e.style), s
        }(e);
        return s.WebKitCSSMatrix ? (i = l.transform || l.webkitTransform, i.split(",").length > 6 && (i = i.split(", ").map((e => e.replace(",", "."))).join(", ")), n = new s.WebKitCSSMatrix("none" === i ? "" : i)) : (n = l.MozTransform || l.OTransform || l.MsTransform || l.msTransform || l.transform || l.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), a = n.toString().split(",")), "x" === t && (i = s.WebKitCSSMatrix ? n.m41 : 16 === a.length ? parseFloat(a[12]) : parseFloat(a[4])), "y" === t && (i = s.WebKitCSSMatrix ? n.m42 : 16 === a.length ? parseFloat(a[13]) : parseFloat(a[5])), i || 0
    }

    function m(e) {
        return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
    }
    function f(...e) {
        const t = Object(e[0]),
            s = ["__proto__", "constructor", "prototype"];
        for (let i = 1; i < e.length; i += 1) {
            const r = e[i];
            if (null != r && (a = r, !("undefined" != typeof window && void 0 !== window.HTMLElement ? a instanceof HTMLElement : a && (1 === a.nodeType || 11 === a.nodeType)))) {
                const e = Object.keys(Object(r)).filter((e => s.indexOf(e) < 0));
                for (let s = 0, a = e.length; s < a; s += 1) {
                    const a = e[s],
                        i = Object.getOwnPropertyDescriptor(r, a);
                    void 0 !== i && i.enumerable && (m(t[a]) && m(r[a]) ? r[a].__swiper__ ? t[a] = r[a] : f(t[a], r[a]) : !m(t[a]) && m(r[a]) ? (t[a] = {}, r[a].__swiper__ ? t[a] = r[a] : f(t[a], r[a])) : t[a] = r[a])
                }
            }
        }
        var a;
        return t
    }
    function g(e, t, s) {
    }
    function v({
    }) {
    }
    let w, b, x;
    function y() {
        return w || (w = function () {
            const e = r(),
                t = a();
            return {
                smoothScroll: t.documentElement && "scrollBehavior" in t.documentElement.style,
                touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch),
                passiveListener: function () {
                    let t = !1;
                    try {
                        const s = Object.defineProperty({}, "passive", {
                            get() {
                                t = !0
                            }
                        });
                        e.addEventListener("testPassiveListener", null, s)
                    } catch (e) {}
                    return t
                }(),
                gestures: "ongesturestart" in e
            }
        }()), w
    }
    function E(e = {}) {
        return b || (b = function ({
            userAgent: e
        } = {}) {
            const t = y(),
                s = r(),
                a = s.navigator.platform,
                i = e || s.navigator.userAgent,
                n = {
                    ios: !1,
                    android: !1
                },
                l = s.screen.width,
                o = s.screen.height,
                d = i.match(/(Android);?[\s\/]+([\d.]+)?/);
            let p = i.match(/(iPad).*OS\s([\d_]+)/);
            const c = i.match(/(iPod)(.*OS\s([\d_]+))?/),
                u = !p && i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                h = "Win32" === a;
            let m = "MacIntel" === a;
            return !p && m && t.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${l}x${o}`) >= 0 && (p = i.match(/(Version)\/([\d.]+)/), p || (p = [0, 1, "13_0_0"]), m = !1), d && !h && (n.os = "android", n.android = !0), (p || u || c) && (n.os = "ios", n.ios = !0), n
        }(e)), b
    }
    function T() {
        return x || (x = function () {
            const e = r();
            return {
                isSafari: function () {
                    const t = e.navigator.userAgent.toLowerCase();
                    return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0
                }(),
                isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
            }
        }()), x
    }
    Object.keys(p).forEach((e => {
        Object.defineProperty(d.fn, e, {
            value: p[e],
            writable: !0
        })
    }));
    var C = {
        on(e, t, s) {
            const a = this;
            if ("function" != typeof t) return a;
            const i = s ? "unshift" : "push";
            return e.split(" ").forEach((e => {
                a.eventsListeners[e] || (a.eventsListeners[e] = []), a.eventsListeners[e][i](t)
            })), a
        },
        once(e, t, s) {
        },
        onAny(e, t) {
        },
        offAny(e) {
        },
        off(e, t) {
        },
        emit(...e) {
            const t = this;
            if (!t.eventsListeners) return t;
            let s, a, i;
            "string" == typeof e[0] || Array.isArray(e[0]) ? (s = e[0], a = e.slice(1, e.length), i = t) : (s = e[0].events, a = e[0].data, i = e[0].context || t), a.unshift(i);
            return (Array.isArray(s) ? s : s.split(" ")).forEach((e => {
                t.eventsAnyListeners && t.eventsAnyListeners.length && t.eventsAnyListeners.forEach((t => {
                })), t.eventsListeners && t.eventsListeners[e] && t.eventsListeners[e].forEach((e => {
                    e.apply(i, a)
                }))
            })), t
        }
    };
    function $({
        swiper: e,
        runCallbacks: t,
        direction: s,
        step: a
    }) {
        const {
            activeIndex: i,
            previousIndex: r
        } = e;
        let n = s;
        if (n || (n = i > r ? "next" : i < r ? "prev" : "reset"), e.emit(`transition${a}`), t && i !== r) {
            if ("reset" === n) return void e.emit(`slideResetTransition${a}`);
            e.emit(`slideChangeTransition${a}`), "next" === n ? e.emit(`slideNextTransition${a}`) : e.emit(`slidePrevTransition${a}`)
        }
    }

    function S(e) {
        const t = this,
            s = a(),
            i = r(),
            n = t.touchEventsData,
            {
                params: l,
                touches: o,
                enabled: p
            } = t;
        if (!p) return;
        if (t.animating && l.preventInteractionOnTransition) return;
        !t.animating && l.cssMode && l.loop && t.loopFix();
        let c = e;
        c.originalEvent && (c = c.originalEvent);
        let h = d(c.target);
        if ("wrapper" === l.touchEventsTarget && !h.closest(t.wrapperEl).length) return;
        if (n.isTouchEvent = "touchstart" === c.type, !n.isTouchEvent && "which" in c && 3 === c.which) return;
        if (!n.isTouchEvent && "button" in c && c.button > 0) return;
        if (n.isTouched && n.isMoved) return;
        !!l.noSwipingClass && "" !== l.noSwipingClass && c.target && c.target.shadowRoot && e.path && e.path[0] && (h = d(e.path[0]));
        const m = l.noSwipingSelector ? l.noSwipingSelector : `.${l.noSwipingClass}`,
            f = !(!c.target || !c.target.shadowRoot);
        if (l.noSwiping && (f ? function (e, t = this) {
                return function t(s) {
                }(t)
            }(m, c.target) : h.closest(m)[0])) return void(t.allowClick = !0);
        if (l.swipeHandler && !h.closest(l.swipeHandler)[0]) return;
        o.currentX = "touchstart" === c.type ? c.targetTouches[0].pageX : c.pageX, o.currentY = "touchstart" === c.type ? c.targetTouches[0].pageY : c.pageY;
        const g = o.currentX,
            v = o.currentY,
            w = l.edgeSwipeDetection || l.iOSEdgeSwipeDetection,
            b = l.edgeSwipeThreshold || l.iOSEdgeSwipeThreshold;
        if (w && (g <= b || g >= i.innerWidth - b)) {
            if ("prevent" !== w) return;
            e.preventDefault()
        }
        if (Object.assign(n, {
                isTouched: !0,
                isMoved: !1,
                allowTouchCallbacks: !0,
                isScrolling: void 0,
                startMoving: void 0
            }), o.startX = g, o.startY = v, n.touchStartTime = u(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, l.threshold > 0 && (n.allowThresholdMove = !1), "touchstart" !== c.type) {
            let e = !0;
            h.is(n.focusableElements) && (e = !1), s.activeElement && d(s.activeElement).is(n.focusableElements) && s.activeElement !== h[0] && s.activeElement.blur();
            const a = e && t.allowTouchMove && l.touchStartPreventDefault;
            !l.touchStartForcePreventDefault && !a || h[0].isContentEditable || c.preventDefault()
        }
        t.emit("touchStart", c)
    }

    function M(e) {
        const t = a(),
            s = this,
            i = s.touchEventsData,
            {
                params: r,
                touches: n,
                rtlTranslate: l,
                enabled: o
            } = s;
        if (!o) return;
        let p = e;
        if (p.originalEvent && (p = p.originalEvent), !i.isTouched) return void(i.startMoving && i.isScrolling && s.emit("touchMoveOpposite", p));
        if (i.isTouchEvent && "touchmove" !== p.type) return;
        const c = "touchmove" === p.type && p.targetTouches && (p.targetTouches[0] || p.changedTouches[0]),
            h = "touchmove" === p.type ? c.pageX : p.pageX,
            m = "touchmove" === p.type ? c.pageY : p.pageY;
        if (p.preventedByNestedSwiper) return n.startX = h, void(n.startY = m);
        if (!s.allowTouchMove) return s.allowClick = !1, void(i.isTouched && (Object.assign(n, {
            startX: h,
            startY: m,
            currentX: h,
            currentY: m
        }), i.touchStartTime = u()));
        if (i.isTouchEvent && r.touchReleaseOnEdges && !r.loop)
            if (s.isVertical()) {
                if (m < n.startY && s.translate <= s.maxTranslate() || m > n.startY && s.translate >= s.minTranslate()) return i.isTouched = !1, void(i.isMoved = !1)
            } else if (h < n.startX && s.translate <= s.maxTranslate() || h > n.startX && s.translate >= s.minTranslate()) return;
        if (i.isTouchEvent && t.activeElement && p.target === t.activeElement && d(p.target).is(i.focusableElements)) return i.isMoved = !0, void(s.allowClick = !1);
        if (i.allowTouchCallbacks && s.emit("touchMove", p), p.targetTouches && p.targetTouches.length > 1) return;
        n.currentX = h, n.currentY = m;
        const f = n.currentX - n.startX,
            g = n.currentY - n.startY;
        if (s.params.threshold && Math.sqrt(f ** 2 + g ** 2) < s.params.threshold) return;
        if (void 0 === i.isScrolling) {
            let e;
            s.isHorizontal() && n.currentY === n.startY || s.isVertical() && n.currentX === n.startX ? i.isScrolling = !1 : f * f + g * g >= 25 && (e = 180 * Math.atan2(Math.abs(g), Math.abs(f)) / Math.PI, i.isScrolling = s.isHorizontal() ? e > r.touchAngle : 90 - e > r.touchAngle)
        }
        if (i.isScrolling && s.emit("touchMoveOpposite", p), void 0 === i.startMoving && (n.currentX === n.startX && n.currentY === n.startY || (i.startMoving = !0)), i.isScrolling) return void(i.isTouched = !1);
        if (!i.startMoving) return;
        s.allowClick = !1, !r.cssMode && p.cancelable && p.preventDefault(), r.touchMoveStopPropagation && !r.nested && p.stopPropagation(), i.isMoved || (r.loop && !r.cssMode && s.loopFix(), i.startTranslate = s.getTranslate(), s.setTransition(0), s.animating && s.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, !r.grabCursor || !0 !== s.allowSlideNext && !0 !== s.allowSlidePrev || s.setGrabCursor(!0), s.emit("sliderFirstMove", p)), s.emit("sliderMove", p), i.isMoved = !0;
        let v = s.isHorizontal() ? f : g;
        n.diff = v, v *= r.touchRatio, l && (v = -v), s.swipeDirection = v > 0 ? "prev" : "next", i.currentTranslate = v + i.startTranslate;
        let w = !0,
            b = r.resistanceRatio;
        if (r.touchReleaseOnEdges && (b = 0), v > 0 && i.currentTranslate > s.minTranslate() ? (w = !1, r.resistance && (i.currentTranslate = s.minTranslate() - 1 + (-s.minTranslate() + i.startTranslate + v) ** b)) : v < 0 && i.currentTranslate < s.maxTranslate() && (w = !1, r.resistance && (i.currentTranslate = s.maxTranslate() + 1 - (s.maxTranslate() - i.startTranslate - v) ** b)), w && (p.preventedByNestedSwiper = !0), !s.allowSlideNext && "next" === s.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !s.allowSlidePrev && "prev" === s.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), s.allowSlidePrev || s.allowSlideNext || (i.currentTranslate = i.startTranslate), r.threshold > 0) {
            if (!(Math.abs(v) > r.threshold || i.allowThresholdMove)) return void(i.currentTranslate = i.startTranslate);
            if (!i.allowThresholdMove) return i.allowThresholdMove = !0, n.startX = n.currentX, n.startY = n.currentY, i.currentTranslate = i.startTranslate, void(n.diff = s.isHorizontal() ? n.currentX - n.startX : n.currentY - n.startY)
        }
        r.followFinger && !r.cssMode && ((r.freeMode && r.freeMode.enabled && s.freeMode || r.watchSlidesProgress) && (s.updateActiveIndex(), s.updateSlidesClasses()), s.params.freeMode && r.freeMode.enabled && s.freeMode && s.freeMode.onTouchMove(), s.updateProgress(i.currentTranslate), s.setTranslate(i.currentTranslate))
    }
    function P(e) {
        const t = this,
            s = t.touchEventsData,
            {
                params: a,
                touches: i,
                rtlTranslate: r,
                slidesGrid: n,
                enabled: l
            } = t;
        if (!l) return;
        let o = e;
        if (o.originalEvent && (o = o.originalEvent), s.allowTouchCallbacks && t.emit("touchEnd", o), s.allowTouchCallbacks = !1, !s.isTouched) return s.isMoved && a.grabCursor && t.setGrabCursor(!1), s.isMoved = !1, void(s.startMoving = !1);
        a.grabCursor && s.isMoved && s.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
        const d = u(),
            p = d - s.touchStartTime;
        if (t.allowClick) {
            const e = o.path || o.composedPath && o.composedPath();
            t.updateClickedSlide(e && e[0] || o.target), t.emit("tap click", o), p < 300 && d - s.lastClickTime < 300 && t.emit("doubleTap doubleClick", o)
        }
        if (s.lastClickTime = u(), c((() => {
                t.destroyed || (t.allowClick = !0)
            })), !s.isTouched || !s.isMoved || !t.swipeDirection || 0 === i.diff || s.currentTranslate === s.startTranslate) return s.isTouched = !1, s.isMoved = !1, void(s.startMoving = !1);
        let h;
        if (s.isTouched = !1, s.isMoved = !1, s.startMoving = !1, h = a.followFinger ? r ? t.translate : -t.translate : -s.currentTranslate, a.cssMode) return;
        if (t.params.freeMode && a.freeMode.enabled) return void t.freeMode.onTouchEnd({
            currentPos: h
        });
        let m = 0,
            f = t.slidesSizesGrid[0];
        for (let e = 0; e < n.length; e += e < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup) {
            const t = e < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
            void 0 !== n[e + t] ? h >= n[e] && h < n[e + t] && (m = e, f = n[e + t] - n[e]) : h >= n[e] && (m = e, f = n[n.length - 1] - n[n.length - 2])
        }
        const g = (h - n[m]) / f,
            v = m < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
        if (p > a.longSwipesMs) {
            if (!a.longSwipes) return void t.slideTo(t.activeIndex);
            "next" === t.swipeDirection && (g >= a.longSwipesRatio ? t.slideTo(m + v) : t.slideTo(m)), "prev" === t.swipeDirection && (g > 1 - a.longSwipesRatio ? t.slideTo(m + v) : t.slideTo(m))
        } else {
            if (!a.shortSwipes) return void t.slideTo(t.activeIndex);
            t.navigation && (o.target === t.navigation.nextEl || o.target === t.navigation.prevEl) ? o.target === t.navigation.nextEl ? t.slideTo(m + v) : t.slideTo(m) : ("next" === t.swipeDirection && t.slideTo(m + v), "prev" === t.swipeDirection && t.slideTo(m))
        }
    }
    function k() {
        const e = this,
            {
                params: t,
                el: s
            } = e;
        if (s && 0 === s.offsetWidth) return;
        t.breakpoints && e.setBreakpoint();
        const {
            allowSlideNext: a,
            allowSlidePrev: i,
            snapGrid: r
        } = e;
        e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses(), ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(), e.allowSlidePrev = i, e.allowSlideNext = a, e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow()
    }
    function z(e) {
        const t = this;
        t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())))
    }
    function O() {
    }
    let I = !1;
    function L() {}
    const A = (e, t) => {
        const s = a(),
            {
                params: i,
                touchEvents: r,
                el: n,
                wrapperEl: l,
                device: o,
                support: d
            } = e,
            p = !!i.nested,
            c = "on" === t ? "addEventListener" : "removeEventListener",
            u = t;
        if (d.touch) {
            const t = !("touchstart" !== r.start || !d.passiveListener || !i.passiveListeners) && {
                passive: !0,
                capture: !1
            };
            n[c](r.start, e.onTouchStart, t), n[c](r.move, e.onTouchMove, d.passiveListener ? {
                passive: !1,
                capture: p
            } : p), n[c](r.end, e.onTouchEnd, t), r.cancel && n[c](r.cancel, e.onTouchEnd, t)
        } else n[c](r.start, e.onTouchStart, !1), s[c](r.move, e.onTouchMove, p), s[c](r.end, e.onTouchEnd, !1);
        (i.preventClicks || i.preventClicksPropagation) && n[c]("click", e.onClick, !0), i.cssMode && l[c]("scroll", e.onScroll), i.updateOnWindowResize ? e[u](o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", k, !0) : e[u]("observerUpdate", k, !0)
    };
    const D = (e, t) => e.grid && t.grid && t.grid.rows > 1;
    var G = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        enabled: !0,
        focusableElements: "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: .5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: .85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopFillGroupWithBlank: !1,
        loopPreventsSlide: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        runCallbacksOnInit: !0,
        _emitClasses: !1
    };
    function N(e, t) {
        return function (s = {}) {
            const a = Object.keys(s)[0],
                i = s[a];
            "object" == typeof i && null !== i ? (["navigation", "pagination", "scrollbar"].indexOf(a) >= 0 && !0 === e[a] && (e[a] = {
                auto: !0
            }), a in e && "enabled" in i ? (!0 === e[a] && (e[a] = {
                enabled: !0
            }), "object" != typeof e[a] || "enabled" in e[a] || (e[a].enabled = !0), e[a] || (e[a] = {
                enabled: !1
            }), f(t, s)) : f(t, s)) : f(t, s)
        }
    }
    const B = {
            eventsEmitter: C,
            update: {
                updateSize: function () {
                    const e = this;
                    let t, s;
                    const a = e.$el;
                    t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : a[0].clientWidth, s = void 0 !== e.params.height && null !== e.params.height ? e.params.height : a[0].clientHeight, 0 === t && e.isHorizontal() || 0 === s && e.isVertical() || (t = t - parseInt(a.css("padding-left") || 0, 10) - parseInt(a.css("padding-right") || 0, 10), s = s - parseInt(a.css("padding-top") || 0, 10) - parseInt(a.css("padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(s) && (s = 0), Object.assign(e, {
                        width: t,
                        height: s,
                        size: e.isHorizontal() ? t : s
                    }))
                },
                updateSlides: function () {
                    const e = this;
                    function t(t) {
                        return e.isHorizontal() ? t : {
                            width: "height",
                            "margin-top": "margin-left",
                            "margin-bottom ": "margin-right",
                            "margin-left": "margin-top",
                            "margin-right": "margin-bottom",
                            "padding-left": "padding-top",
                            "padding-right": "padding-bottom",
                            marginRight: "marginBottom"
                        } [t]
                    }
                    function s(e, s) {
                    }
                    const a = e.params,
                        {
                            $wrapperEl: i,
                            size: r,
                            rtlTranslate: n,
                            wrongRTL: l
                        } = e,
                        o = e.virtual && a.virtual.enabled,
                        d = o ? e.virtual.slides.length : e.slides.length,
                        p = i.children(`.${e.params.slideClass}`),
                        c = o ? e.virtual.slides.length : p.length;
                    let u = [];
                    const h = [],
                        m = [];
                    let f = a.slidesOffsetBefore;
                    "function" == typeof f && (f = a.slidesOffsetBefore.call(e));
                    let v = a.slidesOffsetAfter;
                    "function" == typeof v && (v = a.slidesOffsetAfter.call(e));
                    const w = e.snapGrid.length,
                        b = e.slidesGrid.length;
                    let x = a.spaceBetween,
                        y = -f,
                        E = 0,
                        T = 0;
                    if (void 0 === r) return;
                    "string" == typeof x && x.indexOf("%") >= 0 && (x = parseFloat(x.replace("%", "")) / 100 * r), e.virtualSize = -x, n ? p.css({
                        marginLeft: "",
                        marginBottom: "",
                        marginTop: ""
                    }) : p.css({
                        marginRight: "",
                        marginBottom: "",
                        marginTop: ""
                    }), a.centeredSlides && a.cssMode && (g(e.wrapperEl, "--swiper-centered-offset-before", ""), g(e.wrapperEl, "--swiper-centered-offset-after", ""));
                    const C = a.grid && a.grid.rows > 1 && e.grid;
                    let $;
                    C && e.grid.initSlides(c);
                    const S = "auto" === a.slidesPerView && a.breakpoints && Object.keys(a.breakpoints).filter((e => void 0 !== a.breakpoints[e].slidesPerView)).length > 0;
                    for (let i = 0; i < c; i += 1) {
                        $ = 0;
                        const n = p.eq(i);
                        if (C && e.grid.updateSlide(i, n, c, t), "none" !== n.css("display")) {
                            if ("auto" === a.slidesPerView) {
                                S && (p[i].style[t("width")] = "");
                                const r = getComputedStyle(n[0]),
                                    l = n[0].style.transform,
                                    o = n[0].style.webkitTransform;
                                if (l && (n[0].style.transform = "none"), o && (n[0].style.webkitTransform = "none"), a.roundLengths) $ = e.isHorizontal() ? n.outerWidth(!0) : n.outerHeight(!0);
                                else {
                                    const e = s(r, "width"),
                                        t = s(r, "padding-left"),
                                        a = s(r, "padding-right"),
                                        i = s(r, "margin-left"),
                                        l = s(r, "margin-right"),
                                        o = r.getPropertyValue("box-sizing");
                                    if (o && "border-box" === o) $ = e + i + l;
                                    else {
                                        const {
                                            clientWidth: s,
                                            offsetWidth: r
                                        } = n[0];
                                        $ = e + t + a + i + l + (r - s)
                                    }
                                }
                                l && (n[0].style.transform = l), o && (n[0].style.webkitTransform = o), a.roundLengths && ($ = Math.floor($))
                            } else $ = (r - (a.slidesPerView - 1) * x) / a.slidesPerView, a.roundLengths && ($ = Math.floor($)), p[i] && (p[i].style[t("width")] = `${$}px`);
                            p[i] && (p[i].swiperSlideSize = $), m.push($), a.centeredSlides ? (y = y + $ / 2 + E / 2 + x, 0 === E && 0 !== i && (y = y - r / 2 - x), 0 === i && (y = y - r / 2 - x), Math.abs(y) < .001 && (y = 0), a.roundLengths && (y = Math.floor(y)), T % a.slidesPerGroup == 0 && u.push(y), h.push(y)) : (a.roundLengths && (y = Math.floor(y)), (T - Math.min(e.params.slidesPerGroupSkip, T)) % e.params.slidesPerGroup == 0 && u.push(y), h.push(y), y = y + $ + x), e.virtualSize += $ + x, E = $, T += 1
                        }
                    }
                    if (e.virtualSize = Math.max(e.virtualSize, r) + v, n && l && ("slide" === a.effect || "coverflow" === a.effect) && i.css({
                            width: `${e.virtualSize+a.spaceBetween}px`
                        }), a.setWrapperSize && i.css({
                            [t("width")]: `${e.virtualSize+a.spaceBetween}px`
                        }), C && e.grid.updateWrapperSize($, u, t), !a.centeredSlides) {
                        const t = [];
                        for (let s = 0; s < u.length; s += 1) {
                            let i = u[s];
                            a.roundLengths && (i = Math.floor(i)), u[s] <= e.virtualSize - r && t.push(i)
                        }
                        u = t, Math.floor(e.virtualSize - r) - Math.floor(u[u.length - 1]) > 1 && u.push(e.virtualSize - r)
                    }
                    if (0 === u.length && (u = [0]), 0 !== a.spaceBetween) {
                        const s = e.isHorizontal() && n ? "marginLeft" : t("marginRight");
                        p.filter(((e, t) => !a.cssMode || t !== p.length - 1)).css({
                            [s]: `${x}px`
                        })
                    }
                    if (a.centeredSlides && a.centeredSlidesBounds) {
                        let e = 0;
                        m.forEach((t => {
                        })), e -= a.spaceBetween;
                        const t = e - r;
                        u = u.map((e => e < 0 ? -f : e > t ? t + v : e))
                    }
                    if (a.centerInsufficientSlides) {
                        let e = 0;
                        if (m.forEach((t => {
                            })), e -= a.spaceBetween, e < r) {
                            const t = (r - e) / 2;
                            u.forEach(((e, s) => {
                            })), h.forEach(((e, s) => {
                            }))
                        }
                    }
                    if (Object.assign(e, {
                            slides: p,
                            snapGrid: u,
                            slidesGrid: h,
                            slidesSizesGrid: m
                        }), a.centeredSlides && a.cssMode && !a.centeredSlidesBounds) {
                        g(e.wrapperEl, "--swiper-centered-offset-before", -u[0] + "px"), g(e.wrapperEl, "--swiper-centered-offset-after", e.size / 2 - m[m.length - 1] / 2 + "px");
                        const t = -e.snapGrid[0],
                            s = -e.slidesGrid[0];
                        e.snapGrid = e.snapGrid.map((e => e + t)), e.slidesGrid = e.slidesGrid.map((e => e + s))
                    }
                    c !== d && e.emit("slidesLengthChange"), u.length !== w && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), h.length !== b && e.emit("slidesGridLengthChange"), a.watchSlidesProgress && e.updateSlidesOffset()
                },
                updateAutoHeight: function (e) {
                },
                updateSlidesOffset: function () {
                },
                updateSlidesProgress: function (e = this && this.translate || 0) {
                },
                updateProgress: function (e) {
                    const t = this;
                    if (void 0 === e) {
                        const s = t.rtlTranslate ? -1 : 1;
                        e = t && t.translate && t.translate * s || 0
                    }
                    const s = t.params,
                        a = t.maxTranslate() - t.minTranslate();
                    let {
                        progress: i,
                        isBeginning: r,
                        isEnd: n
                    } = t;
                    const l = r,
                        o = n;
                    0 === a ? (i = 0, r = !0, n = !0) : (i = (e - t.minTranslate()) / a, r = i <= 0, n = i >= 1), Object.assign(t, {
                        progress: i,
                        isBeginning: r,
                        isEnd: n
                    }), (s.watchSlidesProgress || s.centeredSlides && s.autoHeight) && t.updateSlidesProgress(e), r && !l && t.emit("reachBeginning toEdge"), n && !o && t.emit("reachEnd toEdge"), (l && !r || o && !n) && t.emit("fromEdge"), t.emit("progress", i)
                },
                updateSlidesClasses: function () {
                    const e = this,
                        {
                            slides: t,
                            params: s,
                            $wrapperEl: a,
                            activeIndex: i,
                            realIndex: r
                        } = e,
                        n = e.virtual && s.virtual.enabled;
                    let l;
                    t.removeClass(`${s.slideActiveClass} ${s.slideNextClass} ${s.slidePrevClass} ${s.slideDuplicateActiveClass} ${s.slideDuplicateNextClass} ${s.slideDuplicatePrevClass}`), l = n ? e.$wrapperEl.find(`.${s.slideClass}[data-swiper-slide-index="${i}"]`) : t.eq(i), l.addClass(s.slideActiveClass), s.loop && (l.hasClass(s.slideDuplicateClass) ? a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${r}"]`).addClass(s.slideDuplicateActiveClass) : a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${r}"]`).addClass(s.slideDuplicateActiveClass));
                    let o = l.nextAll(`.${s.slideClass}`).eq(0).addClass(s.slideNextClass);
                    s.loop && 0 === o.length && (o = t.eq(0), o.addClass(s.slideNextClass));
                    let d = l.prevAll(`.${s.slideClass}`).eq(0).addClass(s.slidePrevClass);
                    s.loop && 0 === d.length && (d = t.eq(-1), d.addClass(s.slidePrevClass)), s.loop && (o.hasClass(s.slideDuplicateClass) ? a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass) : a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass), d.hasClass(s.slideDuplicateClass) ? a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass) : a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass)), e.emitSlidesClasses()
                },
                updateActiveIndex: function (e) {
                    const t = this,
                        s = t.rtlTranslate ? t.translate : -t.translate,
                        {
                            slidesGrid: a,
                            snapGrid: i,
                            params: r,
                            activeIndex: n,
                            realIndex: l,
                            snapIndex: o
                        } = t;
                    let d, p = e;
                    if (void 0 === p) {
                        for (let e = 0; e < a.length; e += 1) void 0 !== a[e + 1] ? s >= a[e] && s < a[e + 1] - (a[e + 1] - a[e]) / 2 ? p = e : s >= a[e] && s < a[e + 1] && (p = e + 1) : s >= a[e] && (p = e);
                        r.normalizeSlideIndex && (p < 0 || void 0 === p) && (p = 0)
                    }
                    if (i.indexOf(s) >= 0) d = i.indexOf(s);
                    else {
                        const e = Math.min(r.slidesPerGroupSkip, p);
                        d = e + Math.floor((p - e) / r.slidesPerGroup)
                    }
                    if (d >= i.length && (d = i.length - 1), p === n) return void(d !== o && (t.snapIndex = d, t.emit("snapIndexChange")));
                    const c = parseInt(t.slides.eq(p).attr("data-swiper-slide-index") || p, 10);
                    Object.assign(t, {
                        snapIndex: d,
                        realIndex: c,
                        previousIndex: n,
                        activeIndex: p
                    }), t.emit("activeIndexChange"), t.emit("snapIndexChange"), l !== c && t.emit("realIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange")
                },
                updateClickedSlide: function (e) {
                    const t = this,
                        s = t.params,
                        a = d(e).closest(`.${s.slideClass}`)[0];
                    let i, r = !1;
                    if (a)
                        for (let e = 0; e < t.slides.length; e += 1)
                            if (t.slides[e] === a) {
                                r = !0, i = e;
                                break
                            } if (!a || !r) return t.clickedSlide = void 0, void(t.clickedIndex = void 0);
                    t.clickedSlide = a, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(d(a).attr("data-swiper-slide-index"), 10) : t.clickedIndex = i, s.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
                }
            },
            translate: {
                getTranslate: function (e = (this.isHorizontal() ? "x" : "y")) {
                    const {
                        params: t,
                        rtlTranslate: s,
                        translate: a,
                        $wrapperEl: i
                    } = this;
                    if (t.virtualTranslate) return s ? -a : a;
                    if (t.cssMode) return a;
                    let r = h(i[0], e);
                    return s && (r = -r), r || 0
                },
                setTranslate: function (e, t) {
                    const s = this,
                        {
                            rtlTranslate: a,
                            params: i,
                            $wrapperEl: r,
                            wrapperEl: n,
                            progress: l
                        } = s;
                    let o, d = 0,
                        p = 0;
                    s.isHorizontal() ? d = a ? -e : e : p = e, i.roundLengths && (d = Math.floor(d), p = Math.floor(p)), i.cssMode ? n[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal() ? -d : -p : i.virtualTranslate || r.transform(`translate3d(${d}px, ${p}px, 0px)`), s.previousTranslate = s.translate, s.translate = s.isHorizontal() ? d : p;
                    const c = s.maxTranslate() - s.minTranslate();
                    o = 0 === c ? 0 : (e - s.minTranslate()) / c, o !== l && s.updateProgress(e), s.emit("setTranslate", s.translate, t)
                },
                minTranslate: function () {
                    return -this.snapGrid[0]
                },
                maxTranslate: function () {
                    return -this.snapGrid[this.snapGrid.length - 1]
                },
                translateTo: function (e = 0, t = this.params.speed, s = !0, a = !0, i) {
                }
            },
            transition: {
                setTransition: function (e, t) {
                    const s = this;
                    s.params.cssMode || s.$wrapperEl.transition(e), s.emit("setTransition", e, t)
                },
                transitionStart: function (e = !0, t) {
                    const s = this,
                        {
                            params: a
                        } = s;
                    a.cssMode || (a.autoHeight && s.updateAutoHeight(), $({
                        swiper: s,
                        runCallbacks: e,
                        direction: t,
                        step: "Start"
                    }))
                },
                transitionEnd: function (e = !0, t) {
                    const s = this,
                        {
                            params: a
                        } = s;
                    s.animating = !1, a.cssMode || (s.setTransition(0), $({
                        swiper: s,
                        runCallbacks: e,
                        direction: t,
                        step: "End"
                    }))
                }
            },
            slide: {
                slideTo: function (e = 0, t = this.params.speed, s = !0, a, i) {
                    if ("number" != typeof e && "string" != typeof e) throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`);
                    if ("string" == typeof e) {
                        const t = parseInt(e, 10);
                        if (!isFinite(t)) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
                        e = t
                    }
                    const r = this;
                    let n = e;
                    n < 0 && (n = 0);
                    const {
                        params: l,
                        snapGrid: o,
                        slidesGrid: d,
                        previousIndex: p,
                        activeIndex: c,
                        rtlTranslate: u,
                        wrapperEl: h,
                        enabled: m
                    } = r;
                    if (r.animating && l.preventInteractionOnTransition || !m && !a && !i) return !1;
                    const f = Math.min(r.params.slidesPerGroupSkip, n);
                    let g = f + Math.floor((n - f) / r.params.slidesPerGroup);
                    g >= o.length && (g = o.length - 1), (c || l.initialSlide || 0) === (p || 0) && s && r.emit("beforeSlideChangeStart");
                    const w = -o[g];
                    if (r.updateProgress(w), l.normalizeSlideIndex)
                        for (let e = 0; e < d.length; e += 1) {
                            const t = -Math.floor(100 * w),
                                s = Math.floor(100 * d[e]),
                                a = Math.floor(100 * d[e + 1]);
                            void 0 !== d[e + 1] ? t >= s && t < a - (a - s) / 2 ? n = e : t >= s && t < a && (n = e + 1) : t >= s && (n = e)
                        }
                    if (r.initialized && n !== c) {
                        if (!r.allowSlideNext && w < r.translate && w < r.minTranslate()) return !1;
                        if (!r.allowSlidePrev && w > r.translate && w > r.maxTranslate() && (c || 0) !== n) return !1
                    }
                    let b;
                    if (b = n > c ? "next" : n < c ? "prev" : "reset", u && -w === r.translate || !u && w === r.translate) return r.updateActiveIndex(n), l.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), "slide" !== l.effect && r.setTranslate(w), "reset" !== b && (r.transitionStart(s, b), r.transitionEnd(s, b)), !1;
                    if (l.cssMode) {
                        const e = r.isHorizontal(),
                            s = u ? w : -w;
                        if (0 === t) {
                            const t = r.virtual && r.params.virtual.enabled;
                            t && (r.wrapperEl.style.scrollSnapType = "none", r._immediateVirtual = !0), h[e ? "scrollLeft" : "scrollTop"] = s, t && requestAnimationFrame((() => {
                            }))
                        } else {
                            if (!r.support.smoothScroll) return v({
                                swiper: r,
                                targetPosition: s,
                                side: e ? "left" : "top"
                            }), !0;
                            h.scrollTo({
                                [e ? "left" : "top"]: s,
                                behavior: "smooth"
                            })
                        }
                        return !0
                    }
                    return r.setTransition(t), r.setTranslate(w), r.updateActiveIndex(n), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, a), r.transitionStart(s, b), 0 === t ? r.transitionEnd(s, b) : r.animating || (r.animating = !0, r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function (e) {
                        r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd), r.onSlideToWrapperTransitionEnd = null, delete r.onSlideToWrapperTransitionEnd, r.transitionEnd(s, b))
                    }), r.$wrapperEl[0].addEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd)), !0
                },
                slideToLoop: function (e = 0, t = this.params.speed, s = !0, a) {
                },
                slideNext: function (e = this.params.speed, t = !0, s) {
                    const a = this,
                        {
                            animating: i,
                            enabled: r,
                            params: n
                        } = a;
                    if (!r) return a;
                    let l = n.slidesPerGroup;
                    "auto" === n.slidesPerView && 1 === n.slidesPerGroup && n.slidesPerGroupAuto && (l = Math.max(a.slidesPerViewDynamic("current", !0), 1));
                    const o = a.activeIndex < n.slidesPerGroupSkip ? 1 : l;
                    if (n.loop) {
                        if (i && n.loopPreventsSlide) return !1;
                        a.loopFix(), a._clientLeft = a.$wrapperEl[0].clientLeft
                    }
                    return n.rewind && a.isEnd ? a.slideTo(0, e, t, s) : a.slideTo(a.activeIndex + o, e, t, s)
                },
                slidePrev: function (e = this.params.speed, t = !0, s) {
                    const a = this,
                        {
                            params: i,
                            animating: r,
                            snapGrid: n,
                            slidesGrid: l,
                            rtlTranslate: o,
                            enabled: d
                        } = a;
                    if (!d) return a;
                    if (i.loop) {
                        if (r && i.loopPreventsSlide) return !1;
                        a.loopFix(), a._clientLeft = a.$wrapperEl[0].clientLeft
                    }
                    function p(e) {
                        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
                    }
                    const c = p(o ? a.translate : -a.translate),
                        u = n.map((e => p(e)));
                    let h = n[u.indexOf(c) - 1];
                    if (void 0 === h && i.cssMode) {
                        let e;
                        n.forEach(((t, s) => {
                            c >= t && (e = s)
                        })), void 0 !== e && (h = n[e > 0 ? e - 1 : e])
                    }
                    let m = 0;
                    return void 0 !== h && (m = l.indexOf(h), m < 0 && (m = a.activeIndex - 1), "auto" === i.slidesPerView && 1 === i.slidesPerGroup && i.slidesPerGroupAuto && (m = m - a.slidesPerViewDynamic("previous", !0) + 1, m = Math.max(m, 0))), i.rewind && a.isBeginning ? a.slideTo(a.slides.length - 1, e, t, s) : a.slideTo(m, e, t, s)
                },
                slideReset: function (e = this.params.speed, t = !0, s) {
                },
                slideToClosest: function (e = this.params.speed, t = !0, s, a = .5) {
                },
                slideToClickedSlide: function () {
                }
            },
            loop: {
                loopCreate: function () {
                },
                loopFix: function () {
                },
                loopDestroy: function () {
                }
            },
            grabCursor: {
                setGrabCursor: function (e) {
                },
                unsetGrabCursor: function () {
                }
            },
            events: {
                attachEvents: function () {
                    const e = this,
                        t = a(),
                        {
                            params: s,
                            support: i
                        } = e;
                    e.onTouchStart = S.bind(e), e.onTouchMove = M.bind(e), e.onTouchEnd = P.bind(e), s.cssMode && (e.onScroll = O.bind(e)), e.onClick = z.bind(e), i.touch && !I && (t.addEventListener("touchstart", L), I = !0), A(e, "on")
                },
                detachEvents: function () {
                }
            },
            breakpoints: {
                setBreakpoint: function () {
                },
                getBreakpoint: function (e, t = "window", s) {
                }
            },
            checkOverflow: {
                checkOverflow: function () {
                    const e = this,
                        {
                            isLocked: t,
                            params: s
                        } = e,
                        {
                            slidesOffsetBefore: a
                        } = s;
                    if (a) {
                        const t = e.slides.length - 1,
                            s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * a;
                        e.isLocked = e.size > s
                    } else e.isLocked = 1 === e.snapGrid.length;
                    !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
                }
            },
            classes: {
                addClasses: function () {
                    const e = this,
                        {
                            classNames: t,
                            params: s,
                            rtl: a,
                            $el: i,
                            device: r,
                            support: n
                        } = e,
                        l = function (e, t) {
                            const s = [];
                            return e.forEach((e => {
                                "object" == typeof e ? Object.keys(e).forEach((a => {
                                    e[a] && s.push(t + a)
                                })) : "string" == typeof e && s.push(t + e)
                            })), s
                        }(["initialized", s.direction, {
                            "pointer-events": !n.touch
                        }, {
                            "free-mode": e.params.freeMode && s.freeMode.enabled
                        }, {
                            autoheight: s.autoHeight
                        }, {
                            rtl: a
                        }, {
                            grid: s.grid && s.grid.rows > 1
                        }, {
                            "grid-column": s.grid && s.grid.rows > 1 && "column" === s.grid.fill
                        }, {
                            android: r.android
                        }, {
                            ios: r.ios
                        }, {
                            "css-mode": s.cssMode
                        }, {
                            centered: s.cssMode && s.centeredSlides
                        }], s.containerModifierClass);
                    t.push(...l), i.addClass([...t].join(" ")), e.emitContainerClasses()
                },
                removeClasses: function () {
                }
            },
            images: {
                loadImage: function (e, t, s, a, i, n) {
                    const l = r();
                    let o;
                    function p() {
                        n && n()
                    }
                    d(e).parent("picture")[0] || e.complete && i ? p() : t ? (o = new l.Image, o.onload = p, o.onerror = p, a && (o.sizes = a), s && (o.srcset = s), t && (o.src = t)) : p()
                },
                preloadImages: function () {
                    const e = this;
                    function t() {
                        null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
                    }
                    e.imagesToLoad = e.$el.find("img");
                    for (let s = 0; s < e.imagesToLoad.length; s += 1) {
                        const a = e.imagesToLoad[s];
                        e.loadImage(a, a.currentSrc || a.getAttribute("src"), a.srcset || a.getAttribute("srcset"), a.sizes || a.getAttribute("sizes"), !0, t)
                    }
                }
            }
        },
        X = {};
    class H {
        constructor(...e) {
            let t, s;
            if (1 === e.length && e[0].constructor && "Object" === Object.prototype.toString.call(e[0]).slice(8, -1) ? s = e[0] : [t, s] = e, s || (s = {}), s = f({}, s), t && !s.el && (s.el = t), s.el && d(s.el).length > 1) {
                const e = [];
                return d(s.el).each((t => {
                })), e
            }
            const a = this;
            a.__swiper__ = !0, a.support = y(), a.device = E({
                userAgent: s.userAgent
            }), a.browser = T(), a.eventsListeners = {}, a.eventsAnyListeners = [], a.modules = [...a.__modules__], s.modules && Array.isArray(s.modules) && a.modules.push(...s.modules);
            const i = {};
            a.modules.forEach((e => {
                e({
                    swiper: a,
                    extendParams: N(s, i),
                    on: a.on.bind(a),
                    once: a.once.bind(a),
                    off: a.off.bind(a),
                    emit: a.emit.bind(a)
                })
            }));
            const r = f({}, G, i);
            return a.params = f({}, r, X, s), a.originalParams = f({}, a.params), a.passedParams = f({}, s), a.params && a.params.on && Object.keys(a.params.on).forEach((e => {
            })), a.params && a.params.onAny && a.onAny(a.params.onAny), a.$ = d, Object.assign(a, {
                enabled: a.params.enabled,
                el: t,
                classNames: [],
                slides: d(),
                slidesGrid: [],
                snapGrid: [],
                slidesSizesGrid: [],
                isHorizontal: () => "horizontal" === a.params.direction,
                isVertical: () => "vertical" === a.params.direction,
                activeIndex: 0,
                realIndex: 0,
                isBeginning: !0,
                isEnd: !1,
                translate: 0,
                previousTranslate: 0,
                progress: 0,
                velocity: 0,
                animating: !1,
                allowSlideNext: a.params.allowSlideNext,
                allowSlidePrev: a.params.allowSlidePrev,
                touchEvents: function () {
                    const e = ["touchstart", "touchmove", "touchend", "touchcancel"],
                        t = ["pointerdown", "pointermove", "pointerup"];
                    return a.touchEventsTouch = {
                        start: e[0],
                        move: e[1],
                        end: e[2],
                        cancel: e[3]
                    }, a.touchEventsDesktop = {
                        start: t[0],
                        move: t[1],
                        end: t[2]
                    }, a.support.touch || !a.params.simulateTouch ? a.touchEventsTouch : a.touchEventsDesktop
                }(),
                touchEventsData: {
                    isTouched: void 0,
                    isMoved: void 0,
                    allowTouchCallbacks: void 0,
                    touchStartTime: void 0,
                    isScrolling: void 0,
                    currentTranslate: void 0,
                    startTranslate: void 0,
                    allowThresholdMove: void 0,
                    focusableElements: a.params.focusableElements,
                    lastClickTime: u(),
                    clickTimeout: void 0,
                    velocities: [],
                    allowMomentumBounce: void 0,
                    isTouchEvent: void 0,
                    startMoving: void 0
                },
                allowClick: !0,
                allowTouchMove: a.params.allowTouchMove,
                touches: {
                    startX: 0,
                    startY: 0,
                    currentX: 0,
                    currentY: 0,
                    diff: 0
                },
                imagesToLoad: [],
                imagesLoaded: 0
            }), a.emit("_swiper"), a.params.init && a.init(), a
        }
        enable() {
        }
        disable() {
        }
        setProgress(e, t) {
        }
        emitContainerClasses() {
            const e = this;
            if (!e.params._emitClasses || !e.el) return;
            const t = e.el.className.split(" ").filter((t => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass)));
            e.emit("_containerClasses", t.join(" "))
        }
        getSlideClasses(e) {
        }
        emitSlidesClasses() {
            const e = this;
            if (!e.params._emitClasses || !e.el) return;
            const t = [];
            e.slides.each((s => {
            })), e.emit("_slideClasses", t)
        }
        slidesPerViewDynamic(e = "current", t = !1) {
        }
        update() {
            const e = this;
            if (!e || e.destroyed) return;
            const {
                snapGrid: t,
                params: s
            } = e;

            function a() {
                const t = e.rtlTranslate ? -1 * e.translate : e.translate,
                    s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses()
            }
            let i;
            s.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode && e.params.freeMode.enabled ? (a(), e.params.autoHeight && e.updateAutoHeight()) : (i = ("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), i || a()), s.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
        }
        changeDirection(e, t = !0) {
        }
        mount(e) {
            const t = this;
            if (t.mounted) return !0;
            const s = d(e || t.params.el);
            if (!(e = s[0])) return !1;
            e.swiper = t;
            const i = () => `.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;
            let r = (() => {
                if (e && e.shadowRoot && e.shadowRoot.querySelector) {
                    const t = d(e.shadowRoot.querySelector(i()));
                    return t.children = e => s.children(e), t
                }
                return s.children(i())
            })();
            if (0 === r.length && t.params.createElements) {
                const e = a().createElement("div");
                r = d(e), e.className = t.params.wrapperClass, s.append(e), s.children(`.${t.params.slideClass}`).each((e => {
                }))
            }
            return Object.assign(t, {
                $el: s,
                el: e,
                $wrapperEl: r,
                wrapperEl: r[0],
                mounted: !0,
                rtl: "rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction"),
                rtlTranslate: "horizontal" === t.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction")),
                wrongRTL: "-webkit-box" === r.css("display")
            }), !0
        }
        init(e) {
            const t = this;
            if (t.initialized) return t;
            return !1 === t.mount(e) || (t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.params.loop && t.loopCreate(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.preloadImages && t.preloadImages(), t.params.loop ? t.slideTo(t.params.initialSlide + t.loopedSlides, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.attachEvents(), t.initialized = !0, t.emit("init"), t.emit("afterInit")), t
        }
        destroy(e = !0, t = !0) {
        }
        static extendDefaults(e) {
        }
        static get extendedDefaults() {X
        }
        static get defaults() {
        }
        static installModule(e) {
            H.prototype.__modules__ || (H.prototype.__modules__ = []);
            const t = H.prototype.__modules__;
            "function" == typeof e && t.indexOf(e) < 0 && t.push(e)
        }
        static use(e) {
            return Array.isArray(e) ? (e.forEach((e => H.installModule(e))), H) : (H.installModule(e), H)
        }
    }
    function Y(e, t, s, i) {
        const r = a();
        return e.params.createElements && Object.keys(i).forEach((a => {
            if (!s[a] && !0 === s.auto) {
                let n = e.$el.children(`.${i[a]}`)[0];
                n || (n = r.createElement("div"), n.className = i[a], e.$el.append(n)), s[a] = n, t[a] = n
            }
        })), s
    }
    function W(e = "") {
        return `.${e.trim().replace(/([\.:!\/])/g,"\\$1").replace(/ /g,".")}`
    }
    function R(e) {
    }
    function j(e) {
    }
    function _(e, t) {
    }
    function V(e) {
    }
    function q() {
    }
    function F(e) {
        const {
            effect: t,
            swiper: s,
            on: a,
            setTranslate: i,
            setTransition: r,
            overwriteParams: n,
            perspective: l
        } = e;
        a("beforeInit", (() => {
            if (s.params.effect !== t) return;
            s.classNames.push(`${s.params.containerModifierClass}${t}`), l && l() && s.classNames.push(`${s.params.containerModifierClass}3d`);
            const e = n ? n() : {};
            Object.assign(s.params, e), Object.assign(s.originalParams, e)
        })), a("setTranslate", (() => {
            s.params.effect === t && i()
        })), a("setTransition", ((e, a) => {
            s.params.effect === t && r(a)
        }))
    }
    Object.keys(B).forEach((e => {
        Object.keys(B[e]).forEach((t => {
            H.prototype[t] = B[e][t]
        }))
    })), H.use([function ({
        swiper: e,
        on: t,
        emit: s
    }) {
        const a = r();
        let i = null;
        const n = () => {
                e && !e.destroyed && e.initialized && (s("beforeResize"), s("resize"))
            },
            l = () => {
            };
        t("init", (() => {
            e.params.resizeObserver && void 0 !== a.ResizeObserver ? e && !e.destroyed && e.initialized && (i = new ResizeObserver((t => {
                const {
                    width: s,
                    height: a
                } = e;
                let i = s,
                    r = a;
                t.forEach((({
                    contentBoxSize: t,
                    contentRect: s,
                    target: a
                }) => {
                    a && a !== e.el || (i = s ? s.width : (t[0] || t).inlineSize, r = s ? s.height : (t[0] || t).blockSize)
                })), i === s && r === a || n()
            })), i.observe(e.el)) : (a.addEventListener("resize", n), a.addEventListener("orientationchange", l))
        })), t("destroy", (() => {
        }))
    }, function ({
        swiper: e,
        extendParams: t,
        on: s,
        emit: a
    }) {
        const i = [],
            n = r(),
            l = (e, t = {}) => {
            };
        t({
            observer: !1,
            observeParents: !1,
            observeSlideChildren: !1
        }), s("init", (() => {
            if (e.params.observer) {
                if (e.params.observeParents) {
                    const t = e.$el.parents();
                    for (let e = 0; e < t.length; e += 1) l(t[e])
                }
                l(e.$el[0], {
                    childList: e.params.observeSlideChildren
                }), l(e.$wrapperEl[0], {
                    attributes: !1
                })
            }
        })), s("destroy", (() => {
        }))
    }]);
    const J = [function ({
        swiper: e,
        extendParams: t,
        on: s
    }) {
        let a;
        t({
            virtual: {
                enabled: !1,
                slides: [],
                cache: !0,
                renderSlide: null,
                renderExternal: null,
                renderExternalUpdate: !0,
                addSlidesBefore: 0,
                addSlidesAfter: 0
            }
        }), e.virtual = {
            cache: {},
            from: void 0,
            to: void 0,
            slides: [],
            offset: 0,
            slidesGrid: []
        }, s("beforeInit", (() => {
            e.params.virtual.enabled && (e.virtual.slides = e.params.virtual.slides, e.classNames.push(`${e.params.containerModifierClass}virtual`), e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0, e.params.initialSlide || r())
        })), s("setTranslate", (() => {
            e.params.virtual.enabled && (e.params.cssMode && !e._immediateVirtual ? (clearTimeout(a), a = setTimeout((() => {
            }), 100)) : r())
        })), s("init update resize", (() => {
            e.params.virtual.enabled && e.params.cssMode && g(e.wrapperEl, "--swiper-virtual-size", `${e.virtualSize}px`)
        })), Object.assign(e.virtual, {
            appendSlide: function (t) {
            },
            prependSlide: function (t) {
            },
            removeSlide: function (t) {
            },
            removeAllSlides: function () {
            },
            update: r
        })
    }, function ({
        swiper: e,
        extendParams: t,
        on: s,
        emit: i
    }) {
        const n = a(),
            l = r();
        e.keyboard = {
            enabled: !1
        }, t({
            keyboard: {
                enabled: !1,
                onlyInViewport: !0,
                pageUpDown: !0
            }
        }), s("init", (() => {
            e.params.keyboard.enabled && p()
        })), s("destroy", (() => {
        })), Object.assign(e.keyboard, {
            enable: p,
            disable: c
        })
    }, function ({
        swiper: e,
        extendParams: t,
        on: s,
        emit: a
    }) {
        const i = r();
        let n;
        t({
            mousewheel: {
                enabled: !1,
                releaseOnEdges: !1,
                invert: !1,
                forceToAxis: !1,
                sensitivity: 1,
                eventsTarget: "container",
                thresholdDelta: null,
                thresholdTime: null
            }
        }), e.mousewheel = {
            enabled: !1
        };
        let l, o = u();
        const p = [];
        s("init", (() => {
            !e.params.mousewheel.enabled && e.params.cssMode && b(), e.params.mousewheel.enabled && w()
        })), s("destroy", (() => {
        })), Object.assign(e.mousewheel, {
            enable: w,
            disable: b
        })
    }, function ({
        swiper: e,
        extendParams: t,
        on: s,
        emit: a
    }) {
        function i(t) {
            let s;
            return t && (s = d(t), e.params.uniqueNavElements && "string" == typeof t && s.length > 1 && 1 === e.$el.find(t).length && (s = e.$el.find(t))), s
        }
        function r(t, s) {
            const a = e.params.navigation;
            t && t.length > 0 && (t[s ? "addClass" : "removeClass"](a.disabledClass), t[0] && "BUTTON" === t[0].tagName && (t[0].disabled = s), e.params.watchOverflow && e.enabled && t[e.isLocked ? "addClass" : "removeClass"](a.lockClass))
        }
        function n() {
            if (e.params.loop) return;
            const {
                $nextEl: t,
                $prevEl: s
            } = e.navigation;
            r(s, e.isBeginning && !e.params.rewind), r(t, e.isEnd && !e.params.rewind)
        }
        function l(t) {
            t.preventDefault(), (!e.isBeginning || e.params.loop || e.params.rewind) && e.slidePrev()
        }
        function o(t) {
            t.preventDefault(), (!e.isEnd || e.params.loop || e.params.rewind) && e.slideNext()
        }
        function p() {
            const t = e.params.navigation;
            if (e.params.navigation = Y(e, e.originalParams.navigation, e.params.navigation, {
                    nextEl: "swiper-button-next",
                    prevEl: "swiper-button-prev"
                }), !t.nextEl && !t.prevEl) return;
            const s = i(t.nextEl),
                a = i(t.prevEl);
            s && s.length > 0 && s.on("click", o), a && a.length > 0 && a.on("click", l), Object.assign(e.navigation, {
                $nextEl: s,
                nextEl: s && s[0],
                $prevEl: a,
                prevEl: a && a[0]
            }), e.enabled || (s && s.addClass(t.lockClass), a && a.addClass(t.lockClass))
        }
        t({
            navigation: {
                nextEl: null,
                prevEl: null,
                hideOnClick: !1,
                disabledClass: "swiper-button-disabled",
                hiddenClass: "swiper-button-hidden",
                lockClass: "swiper-button-lock"
            }
        }), e.navigation = {
            nextEl: null,
            $nextEl: null,
            prevEl: null,
            $prevEl: null
        }, s("init", (() => {
            p(), n()
        })), s("toEdge fromEdge lock unlock", (() => {
            n()
        })), s("destroy", (() => {
        })), s("enable disable", (() => {
        })), s("click", ((t, s) => {
            const {
                $nextEl: i,
                $prevEl: r
            } = e.navigation, n = s.target;
            if (e.params.navigation.hideOnClick && !d(n).is(r) && !d(n).is(i)) {
                if (e.pagination && e.params.pagination && e.params.pagination.clickable && (e.pagination.el === n || e.pagination.el.contains(n))) return;
                let t;
                i ? t = i.hasClass(e.params.navigation.hiddenClass) : r && (t = r.hasClass(e.params.navigation.hiddenClass)), a(!0 === t ? "navigationShow" : "navigationHide"), i && i.toggleClass(e.params.navigation.hiddenClass), r && r.toggleClass(e.params.navigation.hiddenClass)
            }
        })), Object.assign(e.navigation, {
            update: n,
            init: p,
            destroy: c
        })
    }, function ({
        swiper: e,
        extendParams: t,
        on: s,
        emit: a
    }) {
        const i = "swiper-pagination";
        let r;
        t({
            pagination: {
                el: null,
                bulletElement: "span",
                clickable: !1,
                hideOnClick: !1,
                renderBullet: null,
                renderProgressbar: null,
                renderFraction: null,
                renderCustom: null,
                progressbarOpposite: !1,
                type: "bullets",
                dynamicBullets: !1,
                dynamicMainBullets: 1,
                formatFractionCurrent: e => e,
                formatFractionTotal: e => e,
                bulletClass: `${i}-bullet`,
                bulletActiveClass: `${i}-bullet-active`,
                modifierClass: `${i}-`,
                currentClass: `${i}-current`,
                totalClass: `${i}-total`,
                hiddenClass: `${i}-hidden`,
                progressbarFillClass: `${i}-progressbar-fill`,
                progressbarOppositeClass: `${i}-progressbar-opposite`,
                clickableClass: `${i}-clickable`,
                lockClass: `${i}-lock`,
                horizontalClass: `${i}-horizontal`,
                verticalClass: `${i}-vertical`
            }
        }), e.pagination = {
            el: null,
            $el: null,
            bullets: []
        };
        let n = 0;
        function l() {
            return !e.params.pagination.el || !e.pagination.el || !e.pagination.$el || 0 === e.pagination.$el.length
        }
        function p() {
            const t = e.rtl,
                s = e.params.pagination;
            if (l()) return;
            const i = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                p = e.pagination.$el;
            let c;
            const u = e.params.loop ? Math.ceil((i - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
            if (e.params.loop ? (c = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup), c > i - 1 - 2 * e.loopedSlides && (c -= i - 2 * e.loopedSlides), c > u - 1 && (c -= u), c < 0 && "bullets" !== e.params.paginationType && (c = u + c)) : c = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0, "bullets" === s.type && e.pagination.bullets && e.pagination.bullets.length > 0) {
                const a = e.pagination.bullets;
                let i, l, u;
                if (s.dynamicBullets && (r = a.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0), p.css(e.isHorizontal() ? "width" : "height", r * (s.dynamicMainBullets + 4) + "px"), s.dynamicMainBullets > 1 && void 0 !== e.previousIndex && (n += c - (e.previousIndex - e.loopedSlides || 0), n > s.dynamicMainBullets - 1 ? n = s.dynamicMainBullets - 1 : n < 0 && (n = 0)), i = Math.max(c - n, 0), l = i + (Math.min(a.length, s.dynamicMainBullets) - 1), u = (l + i) / 2), a.removeClass(["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((e => `${s.bulletActiveClass}${e}`)).join(" ")), p.length > 1) a.each((e => {
                }));
                else {
                    const t = a.eq(c),
                        r = t.index();
                    if (t.addClass(s.bulletActiveClass), s.dynamicBullets) {
                        const t = a.eq(i),
                            n = a.eq(l);
                        for (let e = i; e <= l; e += 1) a.eq(e).addClass(`${s.bulletActiveClass}-main`);
                        if (e.params.loop)
                            if (r >= a.length) {
                                for (let e = s.dynamicMainBullets; e >= 0; e -= 1) a.eq(a.length - e).addClass(`${s.bulletActiveClass}-main`);
                                a.eq(a.length - s.dynamicMainBullets - 1).addClass(`${s.bulletActiveClass}-prev`)
                            } else o(t, "prev"), o(n, "next");
                        else o(t, "prev"), o(n, "next")
                    }
                }
                if (s.dynamicBullets) {
                    const i = Math.min(a.length, s.dynamicMainBullets + 4),
                        n = (r * i - r) / 2 - u * r,
                        l = t ? "right" : "left";
                    a.css(e.isHorizontal() ? l : "top", `${n}px`)
                }
            }
            if ("fraction" === s.type && (p.find(W(s.currentClass)).text(s.formatFractionCurrent(c + 1)), p.find(W(s.totalClass)).text(s.formatFractionTotal(u))), "progressbar" === s.type) {
                let t;
                t = s.progressbarOpposite ? e.isHorizontal() ? "vertical" : "horizontal" : e.isHorizontal() ? "horizontal" : "vertical";
                const a = (c + 1) / u;
                let i = 1,
                    r = 1;
                "horizontal" === t ? i = a : r = a, p.find(W(s.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${i}) scaleY(${r})`).transition(e.params.speed)
            }
            "custom" === s.type && s.renderCustom ? (p.html(s.renderCustom(e, c + 1, u)), a("paginationRender", p[0])) : a("paginationUpdate", p[0]), e.params.watchOverflow && e.enabled && p[e.isLocked ? "addClass" : "removeClass"](s.lockClass)
        }
        function c() {
            const t = e.params.pagination;
            if (l()) return;
            const s = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                i = e.pagination.$el;
            let r = "";
            if ("bullets" === t.type) {
                let a = e.params.loop ? Math.ceil((s - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
                e.params.freeMode && e.params.freeMode.enabled && !e.params.loop && a > s && (a = s);
                for (let s = 0; s < a; s += 1) t.renderBullet ? r += t.renderBullet.call(e, s, t.bulletClass) : r += `<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`;
                i.html(r), e.pagination.bullets = i.find(W(t.bulletClass))
            }
            "fraction" === t.type && (r = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : `<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`, i.html(r)), "progressbar" === t.type && (r = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : `<span class="${t.progressbarFillClass}"></span>`, i.html(r)), "custom" !== t.type && a("paginationRender", e.pagination.$el[0])
        }
        function u() {
            e.params.pagination = Y(e, e.originalParams.pagination, e.params.pagination, {
                el: "swiper-pagination"
            });
            const t = e.params.pagination;
            if (!t.el) return;
            let s = d(t.el);
            0 !== s.length && (e.params.uniqueNavElements && "string" == typeof t.el && s.length > 1 && (s = e.$el.find(t.el), s.length > 1 && (s = s.filter((t => d(t).parents(".swiper")[0] === e.el)))), "bullets" === t.type && t.clickable && s.addClass(t.clickableClass), s.addClass(t.modifierClass + t.type), s.addClass(t.modifierClass + e.params.direction), "bullets" === t.type && t.dynamicBullets && (s.addClass(`${t.modifierClass}${t.type}-dynamic`), n = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), "progressbar" === t.type && t.progressbarOpposite && s.addClass(t.progressbarOppositeClass), t.clickable && s.on("click", W(t.bulletClass), (function (t) {
            })), Object.assign(e.pagination, {
                $el: s,
                el: s[0]
            }), e.enabled || s.addClass(t.lockClass))
        }
        s("init", (() => {
            u(), c(), p()
        })), s("activeIndexChange", (() => {
            (e.params.loop || void 0 === e.snapIndex) && p()
        })), s("snapIndexChange", (() => {
            e.params.loop || p()
        })), s("slidesLengthChange", (() => {
            e.params.loop && (c(), p())
        })), s("snapGridLengthChange", (() => {
            e.params.loop || (c(), p())
        })), s("destroy", (() => {
        })), s("enable disable", (() => {
        })), s("lock unlock", (() => {
            p()
        })), s("click", ((t, s) => {
            const i = s.target,
                {
                    $el: r
                } = e.pagination;
            if (e.params.pagination.el && e.params.pagination.hideOnClick && r.length > 0 && !d(i).hasClass(e.params.pagination.bulletClass)) {
                if (e.navigation && (e.navigation.nextEl && i === e.navigation.nextEl || e.navigation.prevEl && i === e.navigation.prevEl)) return;
                const t = r.hasClass(e.params.pagination.hiddenClass);
                a(!0 === t ? "paginationShow" : "paginationHide"), r.toggleClass(e.params.pagination.hiddenClass)
            }
        })), Object.assign(e.pagination, {
            render: c,
            update: p,
            init: u,
            destroy: h
        })
    }, function ({
        swiper: e,
        extendParams: t,
        on: s,
        emit: i
    }) {
        const r = a();
        let n, l, o, p, u = !1,
            h = null,
            m = null;
        function f() {
            if (!e.params.scrollbar.el || !e.scrollbar.el) return;
            const {
                scrollbar: t,
                rtlTranslate: s,
                progress: a
            } = e, {
                $dragEl: i,
                $el: r
            } = t, n = e.params.scrollbar;
            let d = l,
                p = (o - l) * a;
            s ? (p = -p, p > 0 ? (d = l - p, p = 0) : -p + l > o && (d = o + p)) : p < 0 ? (d = l + p, p = 0) : p + l > o && (d = o - p), e.isHorizontal() ? (i.transform(`translate3d(${p}px, 0, 0)`), i[0].style.width = `${d}px`) : (i.transform(`translate3d(0px, ${p}px, 0)`), i[0].style.height = `${d}px`), n.hide && (clearTimeout(h), r[0].style.opacity = 1, h = setTimeout((() => {
            }), 1e3))
        }
        function g() {
            if (!e.params.scrollbar.el || !e.scrollbar.el) return;
            const {
                scrollbar: t
            } = e, {
                $dragEl: s,
                $el: a
            } = t;
            s[0].style.width = "", s[0].style.height = "", o = e.isHorizontal() ? a[0].offsetWidth : a[0].offsetHeight, p = e.size / (e.virtualSize + e.params.slidesOffsetBefore - (e.params.centeredSlides ? e.snapGrid[0] : 0)), l = "auto" === e.params.scrollbar.dragSize ? o * p : parseInt(e.params.scrollbar.dragSize, 10), e.isHorizontal() ? s[0].style.width = `${l}px` : s[0].style.height = `${l}px`, a[0].style.display = p >= 1 ? "none" : "", e.params.scrollbar.hide && (a[0].style.opacity = 0), e.params.watchOverflow && e.enabled && t.$el[e.isLocked ? "addClass" : "removeClass"](e.params.scrollbar.lockClass)
        }
        function T() {
            const {
                scrollbar: t,
                $el: s
            } = e;
            e.params.scrollbar = Y(e, e.originalParams.scrollbar, e.params.scrollbar, {
                el: "swiper-scrollbar"
            });
            const a = e.params.scrollbar;
            if (!a.el) return;
            let i = d(a.el);
            e.params.uniqueNavElements && "string" == typeof a.el && i.length > 1 && 1 === s.find(a.el).length && (i = s.find(a.el));
            let r = i.find(`.${e.params.scrollbar.dragClass}`);
            0 === r.length && (r = d(`<div class="${e.params.scrollbar.dragClass}"></div>`), i.append(r)), Object.assign(t, {
                $el: i,
                el: i[0],
                $dragEl: r,
                dragEl: r[0]
            }), a.draggable && e.params.scrollbar.el && E("on"), i && i[e.enabled ? "removeClass" : "addClass"](e.params.scrollbar.lockClass)
        }
        t({
            scrollbar: {
                el: null,
                dragSize: "auto",
                hide: !1,
                draggable: !1,
                snapOnRelease: !0,
                lockClass: "swiper-scrollbar-lock",
                dragClass: "swiper-scrollbar-drag"
            }
        }), e.scrollbar = {
            el: null,
            dragEl: null,
            $el: null,
            $dragEl: null
        }, s("init", (() => {
            T(), g(), f()
        })), s("update resize observerUpdate lock unlock", (() => {
            g()
        })), s("setTranslate", (() => {
            f()
        })), s("setTransition", ((t, s) => {
            ! function (t) {
                e.params.scrollbar.el && e.scrollbar.el && e.scrollbar.$dragEl.transition(t)
            }(s)
        })), s("enable disable", (() => {
        })), s("destroy", (() => {
        })), Object.assign(e.scrollbar, {
            updateSize: g,
            setTranslate: f,
            init: T,
            destroy: C
        })
    }, function ({
        swiper: e,
        extendParams: t,
        on: s
    }) {
        t({
            parallax: {
                enabled: !1
            }
        });
        const a = (t, s) => {
            },
            i = () => {
            };
        s("beforeInit", (() => {
            e.params.parallax.enabled && (e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0)
        })), s("init", (() => {
            e.params.parallax.enabled && i()
        })), s("setTranslate", (() => {
            e.params.parallax.enabled && i()
        })), s("setTransition", ((t, s) => {
            e.params.parallax.enabled && ((t = e.params.speed) => {
            })(s)
        }))
    }, function ({
        swiper: e,
        extendParams: t,
        on: s,
        emit: a
    }) {
        const i = r();
        t({
            zoom: {
                enabled: !1,
                maxRatio: 3,
                minRatio: 1,
                toggle: !0,
                containerClass: "swiper-zoom-container",
                zoomedSlideClass: "swiper-slide-zoomed"
            }
        }), e.zoom = {
            enabled: !1
        };
        let n, l, o, p = 1,
            c = !1;
        const u = {
                $slideEl: void 0,
                slideWidth: void 0,
                slideHeight: void 0,
                $imageEl: void 0,
                $imageWrapEl: void 0,
                maxRatio: 3
            },
            m = {
                isTouched: void 0,
                isMoved: void 0,
                currentX: void 0,
                currentY: void 0,
                minX: void 0,
                minY: void 0,
                maxX: void 0,
                maxY: void 0,
                width: void 0,
                height: void 0,
                startX: void 0,
                startY: void 0,
                touchesStart: {},
                touchesCurrent: {}
            },
            f = {
                x: void 0,
                y: void 0,
                prevPositionX: void 0,
                prevPositionY: void 0,
                prevTime: void 0
            };
        let g = 1;
        Object.defineProperty(e.zoom, "scale", {
            get: () => g
        }), s("init", (() => {
            e.params.zoom.enabled && O()
        })), s("destroy", (() => {
        })), s("touchStart", ((t, s) => {
            e.zoom.enabled && function (t) {
            }(s)
        })), s("touchEnd", ((t, s) => {
            e.zoom.enabled && function () {
            }()
        })), s("doubleTap", ((t, s) => {
            !e.animating && e.params.zoom.enabled && e.zoom.enabled && e.params.zoom.toggle && $(s)
        })), s("transitionEnd", (() => {
            e.zoom.enabled && e.params.zoom.enabled && E()
        })), s("slideChange", (() => {
            e.zoom.enabled && e.params.zoom.enabled && e.params.cssMode && E()
        })), Object.assign(e.zoom, {
            enable: O,
            disable: I,
            in: T,
            out: C,
            toggle: $
        })
    }, function ({
        swiper: e,
        extendParams: t,
        on: s,
        emit: a
    }) {
        t({
            lazy: {
                checkInView: !1,
                enabled: !1,
                loadPrevNext: !1,
                loadPrevNextAmount: 1,
                loadOnTransitionStart: !1,
                scrollingElement: "",
                elementClass: "swiper-lazy",
                loadingClass: "swiper-lazy-loading",
                loadedClass: "swiper-lazy-loaded",
                preloaderClass: "swiper-lazy-preloader"
            }
        }), e.lazy = {};
        let i = !1,
            n = !1;
        s("beforeInit", (() => {
            e.params.lazy.enabled && e.params.preloadImages && (e.params.preloadImages = !1)
        })), s("init", (() => {
            e.params.lazy.enabled && (e.params.lazy.checkInView ? p() : o())
        })), s("scroll", (() => {
        })), s("scrollbarDragMove resize _freeModeNoMomentumRelease", (() => {
            e.params.lazy.enabled && (e.params.lazy.checkInView ? p() : o())
        })), s("transitionStart", (() => {
            e.params.lazy.enabled && (e.params.lazy.loadOnTransitionStart || !e.params.lazy.loadOnTransitionStart && !n) && (e.params.lazy.checkInView ? p() : o())
        })), s("transitionEnd", (() => {
            e.params.lazy.enabled && !e.params.lazy.loadOnTransitionStart && (e.params.lazy.checkInView ? p() : o())
        })), s("slideChange", (() => {
            const {
                lazy: t,
                cssMode: s,
                watchSlidesProgress: a,
                touchReleaseOnEdges: i,
                resistanceRatio: r
            } = e.params;
            t.enabled && (s || a && (i || 0 === r)) && o()
        })), Object.assign(e.lazy, {
            load: o,
            loadInSlide: l
        })
    }, function ({
        swiper: e,
        extendParams: t,
        on: s
    }) {
        function i() {
            e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline)
        }
        t({
            controller: {
                control: void 0,
                inverse: !1,
                by: "slide"
            }
        }), e.controller = {
            control: void 0
        }, s("beforeInit", (() => {
            e.controller.control = e.params.controller.control
        })), s("update", (() => {
            i()
        })), s("resize", (() => {
            i()
        })), s("observerUpdate", (() => {
            i()
        })), s("setTranslate", ((t, s, a) => {
            e.controller.control && e.controller.setTranslate(s, a)
        })), s("setTransition", ((t, s, a) => {
            e.controller.control && e.controller.setTransition(s, a)
        })), Object.assign(e.controller, {
            setTranslate: function (t, s) {
            },
            setTransition: function (t, s) {
            }
        })
    }, function ({
        swiper: e,
        extendParams: t,
        on: s
    }) {
        t({
            a11y: {
                enabled: !0,
                notificationClass: "swiper-notification",
                prevSlideMessage: "Previous slide",
                nextSlideMessage: "Next slide",
                firstSlideMessage: "This is the first slide",
                lastSlideMessage: "This is the last slide",
                paginationBulletMessage: "Go to slide {{index}}",
                slideLabelMessage: "{{index}} / {{slidesLength}}",
                containerMessage: null,
                containerRoleDescriptionMessage: null,
                itemRoleDescriptionMessage: null,
                slideRole: "group"
            }
        });
        let a = null;
        function r(e) {
            e.attr("tabIndex", "0")
        }
        function n(e) {
            e.attr("tabIndex", "-1")
        }
        function l(e, t) {
            e.attr("role", t)
        }
        function p(e, t) {
            e.attr("aria-label", t)
        }
        function c(e) {
            e.attr("aria-disabled", !0)
        }
        function u(e) {
            e.attr("aria-disabled", !1)
        }
        function m() {
            if (e.params.loop || e.params.rewind || !e.navigation) return;
            const {
                $nextEl: t,
                $prevEl: s
            } = e.navigation;
            s && s.length > 0 && (e.isBeginning ? (c(s), n(s)) : (u(s), r(s))), t && t.length > 0 && (e.isEnd ? (c(t), n(t)) : (u(t), r(t)))
        }
        function f() {
            return e.pagination && e.pagination.bullets && e.pagination.bullets.length
        }
        function g() {
            return f() && e.params.pagination.clickable
        }
        const v = (e, t, s) => {
            r(e), "BUTTON" !== e[0].tagName && (l(e, "button"), e.on("keydown", h)), p(e, s),
                function (e, t) {
                    e.attr("aria-controls", t)
                }(e, t)
        };
        function w() {
            const t = e.params.a11y;
            e.$el.append(a);
            const s = e.$el;
            t.containerRoleDescriptionMessage && o(s, t.containerRoleDescriptionMessage), t.containerMessage && p(s, t.containerMessage);
            const i = e.$wrapperEl,
                r = i.attr("id") || `swiper-wrapper-${function(e=16){return"x".repeat(e).replace(/x/g,(()=>Math.round(16*Math.random()).toString(16)))}(16)}`,
                n = e.params.autoplay && e.params.autoplay.enabled ? "off" : "polite";
            var c;
            c = r, i.attr("id", c),
                function (e, t) {
                    e.attr("aria-live", t)
                }(i, n), t.itemRoleDescriptionMessage && o(d(e.slides), t.itemRoleDescriptionMessage), l(d(e.slides), t.slideRole);
            const u = e.params.loop ? e.slides.filter((t => !t.classList.contains(e.params.slideDuplicateClass))).length : e.slides.length;
            let m, f;
            e.slides.each(((s, a) => {
                const i = d(s),
                    r = e.params.loop ? parseInt(i.attr("data-swiper-slide-index"), 10) : a;
                p(i, t.slideLabelMessage.replace(/\{\{index\}\}/, r + 1).replace(/\{\{slidesLength\}\}/, u))
            })), e.navigation && e.navigation.$nextEl && (m = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (f = e.navigation.$prevEl), m && m.length && v(m, r, t.nextSlideMessage), f && f.length && v(f, r, t.prevSlideMessage), g() && e.pagination.$el.on("keydown", W(e.params.pagination.bulletClass), h)
        }
        s("beforeInit", (() => {
            a = d(`<span class="${e.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`)
        })), s("afterInit", (() => {
            e.params.a11y.enabled && (w(), m())
        })), s("toEdge", (() => {
            e.params.a11y.enabled && m()
        })), s("fromEdge", (() => {
            e.params.a11y.enabled && m()
        })), s("paginationUpdate", (() => {
            e.params.a11y.enabled && function () {
                const t = e.params.a11y;
                f() && e.pagination.bullets.each((s => {
                    const a = d(s);
                    e.params.pagination.clickable && (r(a), e.params.pagination.renderBullet || (l(a, "button"), p(a, t.paginationBulletMessage.replace(/\{\{index\}\}/, a.index() + 1)))), a.is(`.${e.params.pagination.bulletActiveClass}`) ? a.attr("aria-current", "true") : a.removeAttr("aria-current")
                }))
            }()
        })), s("destroy", (() => {
        }))
    }, function ({
        swiper: e,
        extendParams: t,
        on: s
    }) {
        t({
            history: {
                enabled: !1,
                root: "",
                replaceState: !1,
                key: "slides"
            }
        });
        let a = !1,
            i = {};
        const n = e => e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, ""),
            l = e => {
            },
            o = (t, s) => {
            },
            d = (t, s, a) => {
            },
            p = () => {
            };
        s("init", (() => {
            e.params.history.enabled && (() => {
            })()
        })), s("destroy", (() => {
        })), s("transitionEnd _freeModeNoMomentumRelease", (() => {
            a && o(e.params.history.key, e.activeIndex)
        })), s("slideChange", (() => {
            a && e.params.cssMode && o(e.params.history.key, e.activeIndex)
        }))
    }, function ({
        swiper: e,
        extendParams: t,
        emit: s,
        on: i
    }) {
        let n = !1;
        const l = a(),
            o = r();
        t({
            hashNavigation: {
                enabled: !1,
                replaceState: !1,
                watchState: !1
            }
        });
        const p = () => {
            },
            c = () => {
            };
        i("init", (() => {
            e.params.hashNavigation.enabled && (() => {
            })()
        })), i("destroy", (() => {
            e.params.hashNavigation.enabled && e.params.hashNavigation.watchState && d(o).off("hashchange", p)
        })), i("transitionEnd _freeModeNoMomentumRelease", (() => {
            n && c()
        })), i("slideChange", (() => {
            n && e.params.cssMode && c()
        }))
    }, function ({
        swiper: e,
        extendParams: t,
        on: s,
        emit: i
    }) {
        let r;
        e.autoplay = {
            running: !1,
            paused: !1
        }, t({
            autoplay: {
                enabled: !1,
                delay: 3e3,
                waitForTransition: !0,
                disableOnInteraction: !0,
                stopOnLastSlide: !1,
                reverseDirection: !1,
                pauseOnMouseEnter: !1
            }
        }), s("init", (() => {
            if (e.params.autoplay.enabled) {
                l();
                a().addEventListener("visibilitychange", p), e.params.autoplay.pauseOnMouseEnter && (e.$el.on("mouseenter", h), e.$el.on("mouseleave", m))
            }
        })), s("beforeTransitionStart", ((t, s, a) => {
            e.autoplay.running && (a || !e.params.autoplay.disableOnInteraction ? e.autoplay.pause(s) : o())
        })), s("sliderFirstMove", (() => {
            e.autoplay.running && (e.params.autoplay.disableOnInteraction ? o() : d())
        })), s("touchEnd", (() => {
            e.params.cssMode && e.autoplay.paused && !e.params.autoplay.disableOnInteraction && n()
        })), s("destroy", (() => {
        })), Object.assign(e.autoplay, {
            pause: d,
            run: n,
            start: l,
            stop: o
        })
    }, function ({
        swiper: e,
        extendParams: t,
        on: s
    }) {
        t({
            thumbs: {
                swiper: null,
                multipleActiveThumbs: !0,
                autoScrollOffset: 0,
                slideThumbActiveClass: "swiper-slide-thumb-active",
                thumbsContainerClass: "swiper-thumbs"
            }
        });
        let a = !1,
            i = !1;
        e.thumbs = {
            swiper: null
        }, s("beforeInit", (() => {
            const {
                thumbs: t
            } = e.params;
            t && t.swiper && (n(), l(!0))
        })), s("slideChange update resize observerUpdate", (() => {
            e.thumbs.swiper && l()
        })), s("setTransition", ((t, s) => {
            const a = e.thumbs.swiper;
            a && a.setTransition(s)
        })), s("beforeDestroy", (() => {
        })), Object.assign(e.thumbs, {
            init: n,
            update: l
        })
    }, function ({
        swiper: e,
        extendParams: t,
        emit: s,
        once: a
    }) {
        t({
            freeMode: {
                enabled: !1,
                momentum: !0,
                momentumRatio: 1,
                momentumBounce: !0,
                momentumBounceRatio: 1,
                momentumVelocityRatio: 1,
                sticky: !1,
                minimumVelocity: .02
            }
        }), Object.assign(e, {
            freeMode: {
                onTouchMove: function () {
                },
                onTouchEnd: function ({
                })
            {}}
        })
    }, function ({
        swiper: e,
        extendParams: t
    }) {
        let s, a, i;
        t({
            grid: {
                rows: 1,
                fill: "column"
            }
        }), e.grid = {
            initSlides: t => {
            },
            updateSlide: (t, r, n, l) => {
            },
            updateWrapperSize: (t, a, i) => {
            }
        }
    }, function ({
        swiper: e
    }) {
        Object.assign(e, {
            appendSlide: R.bind(e),
            prependSlide: j.bind(e),
            addSlide: _.bind(e),
            removeSlide: V.bind(e),
            removeAllSlides: q.bind(e)
        })
    }, function ({
        swiper: e,
        extendParams: t,
        on: s
    }) {
        t({
            fadeEffect: {
                crossFade: !1,
                transformEl: null
            }
        }), F({
            effect: "fade",
            swiper: e,
            on: s,
            setTranslate: () => {
            },
            setTransition: t => {
            },
            overwriteParams: () => ({
            })
        })
    }, function ({
        swiper: e,
        extendParams: t,
        on: s
    }) {
        t({
            cubeEffect: {
                slideShadows: !0,
                shadow: !0,
                shadowOffset: 20,
                shadowScale: .94
            }
        }), F({
            effect: "cube",
            swiper: e,
            on: s,
            setTranslate: () => {
            },
            setTransition: t => {
            },
            perspective: () => !0,
            overwriteParams: () => ({
            })
        })
    }, function ({
        swiper: e,
        extendParams: t,
        on: s
    }) {
        t({
            flipEffect: {
                slideShadows: !0,
                limitRotation: !0,
                transformEl: null
            }
        }), F({
            effect: "flip",
            swiper: e,
            on: s,
            setTranslate: () => {
            },
            setTransition: t => {
            },
            perspective: () => !0,
            overwriteParams: () => ({
            })
        })
    }, function ({
        swiper: e,
        extendParams: t,
        on: s
    }) {
        t({
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                scale: 1,
                modifier: 1,
                slideShadows: !0,
                transformEl: null
            }
        }), F({
            effect: "coverflow",
            swiper: e,
            on: s,
            setTranslate: () => {
            },
            setTransition: t => {
            },
            perspective: () => !0,
            overwriteParams: () => ({
            })
        })
    }, function ({
        swiper: e,
        extendParams: t,
        on: s
    }) {
        t({
            creativeEffect: {
                transformEl: null,
                limitProgress: 1,
                shadowPerProgress: !1,
                progressMultiplier: 1,
                perspective: !0,
                prev: {
                    translate: [0, 0, 0],
                    rotate: [0, 0, 0],
                    opacity: 1,
                    scale: 1
                },
                next: {
                    translate: [0, 0, 0],
                    rotate: [0, 0, 0],
                    opacity: 1,
                    scale: 1
                }
            }
        });
        const a = e => "string" == typeof e ? e : `${e}px`;
        F({
            effect: "creative",
            swiper: e,
            on: s,
            setTranslate: () => {
            },
            setTransition: t => {
            },
            perspective: () => e.params.creativeEffect.perspective,
            overwriteParams: () => ({
            })
        })
    }, function ({
        swiper: e,
        extendParams: t,
        on: s
    }) {
        t({
            cardsEffect: {
                slideShadows: !0,
                transformEl: null
            }
        }), F({
            effect: "cards",
            swiper: e,
            on: s,
            setTranslate: () => {
            },
            setTransition: t => {
            },
            perspective: () => !0,
            overwriteParams: () => ({
            })
        })
    }];
    return H.use(J), H
}));