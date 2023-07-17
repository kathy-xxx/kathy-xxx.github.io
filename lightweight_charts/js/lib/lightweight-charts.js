/*!
 * @license
 * TradingView Lightweight Charts™ v4.0.1
 * Copyright (c) 2023 TradingView, Inc.
 * Licensed under Apache License 2.0 https://www.apache.org/licenses/LICENSE-2.0
 */
!(function () {
  "use strict";
  var t, i;
  function n(t, i) {
    const n = {
      0: [],
      1: [t.lineWidth, t.lineWidth],
      2: [2 * t.lineWidth, 2 * t.lineWidth],
      3: [6 * t.lineWidth, 6 * t.lineWidth],
      4: [t.lineWidth, 4 * t.lineWidth],
    }[i];
    t.setLineDash(n);
  }
  function s(t, i, n, s) {
    t.beginPath();
    const e = t.lineWidth % 2 ? 0.5 : 0;
    t.moveTo(n, i + e), t.lineTo(s, i + e), t.stroke();
  }
  function e(t, i) {
    if (!t) throw new Error("Assertion failed" + (i ? ": " + i : ""));
  }
  function r(t) {
    if (void 0 === t) throw new Error("Value is undefined");
    return t;
  }
  function h(t) {
    if (null === t) throw new Error("Value is null");
    return t;
  }
  function l(t) {
    return h(r(t));
  }
  !(function (t) {
    (t[(t.Simple = 0)] = "Simple"),
      (t[(t.WithSteps = 1)] = "WithSteps"),
      (t[(t.Curved = 2)] = "Curved");
  })(t || (t = {})),
    (function (t) {
      (t[(t.Solid = 0)] = "Solid"),
        (t[(t.Dotted = 1)] = "Dotted"),
        (t[(t.Dashed = 2)] = "Dashed"),
        (t[(t.LargeDashed = 3)] = "LargeDashed"),
        (t[(t.SparseDotted = 4)] = "SparseDotted");
    })(i || (i = {}));
  const a = {
    khaki: "#f0e68c",
    azure: "#f0ffff",
    aliceblue: "#f0f8ff",
    ghostwhite: "#f8f8ff",
    gold: "#ffd700",
    goldenrod: "#daa520",
    gainsboro: "#dcdcdc",
    gray: "#808080",
    green: "#008000",
    honeydew: "#f0fff0",
    floralwhite: "#fffaf0",
    lightblue: "#add8e6",
    lightcoral: "#f08080",
    lemonchiffon: "#fffacd",
    hotpink: "#ff69b4",
    lightyellow: "#ffffe0",
    greenyellow: "#adff2f",
    lightgoldenrodyellow: "#fafad2",
    limegreen: "#32cd32",
    linen: "#faf0e6",
    lightcyan: "#e0ffff",
    magenta: "#f0f",
    maroon: "#800000",
    olive: "#808000",
    orange: "#ffa500",
    oldlace: "#fdf5e6",
    mediumblue: "#0000cd",
    transparent: "#0000",
    lime: "#0f0",
    lightpink: "#ffb6c1",
    mistyrose: "#ffe4e1",
    moccasin: "#ffe4b5",
    midnightblue: "#191970",
    orchid: "#da70d6",
    mediumorchid: "#ba55d3",
    mediumturquoise: "#48d1cc",
    orangered: "#ff4500",
    royalblue: "#4169e1",
    powderblue: "#b0e0e6",
    red: "#f00",
    coral: "#ff7f50",
    turquoise: "#40e0d0",
    white: "#fff",
    whitesmoke: "#f5f5f5",
    wheat: "#f5deb3",
    teal: "#008080",
    steelblue: "#4682b4",
    bisque: "#ffe4c4",
    aquamarine: "#7fffd4",
    aqua: "#0ff",
    sienna: "#a0522d",
    silver: "#c0c0c0",
    springgreen: "#00ff7f",
    antiquewhite: "#faebd7",
    burlywood: "#deb887",
    brown: "#a52a2a",
    beige: "#f5f5dc",
    chocolate: "#d2691e",
    chartreuse: "#7fff00",
    cornflowerblue: "#6495ed",
    cornsilk: "#fff8dc",
    crimson: "#dc143c",
    cadetblue: "#5f9ea0",
    tomato: "#ff6347",
    fuchsia: "#f0f",
    blue: "#00f",
    salmon: "#fa8072",
    blanchedalmond: "#ffebcd",
    slateblue: "#6a5acd",
    slategray: "#708090",
    thistle: "#d8bfd8",
    tan: "#d2b48c",
    cyan: "#0ff",
    darkblue: "#00008b",
    darkcyan: "#008b8b",
    darkgoldenrod: "#b8860b",
    darkgray: "#a9a9a9",
    blueviolet: "#8a2be2",
    black: "#000",
    darkmagenta: "#8b008b",
    darkslateblue: "#483d8b",
    darkkhaki: "#bdb76b",
    darkorchid: "#9932cc",
    darkorange: "#ff8c00",
    darkgreen: "#006400",
    darkred: "#8b0000",
    dodgerblue: "#1e90ff",
    darkslategray: "#2f4f4f",
    dimgray: "#696969",
    deepskyblue: "#00bfff",
    firebrick: "#b22222",
    forestgreen: "#228b22",
    indigo: "#4b0082",
    ivory: "#fffff0",
    lavenderblush: "#fff0f5",
    feldspar: "#d19275",
    indianred: "#cd5c5c",
    lightgreen: "#90ee90",
    lightgrey: "#d3d3d3",
    lightskyblue: "#87cefa",
    lightslategray: "#789",
    lightslateblue: "#8470ff",
    snow: "#fffafa",
    lightseagreen: "#20b2aa",
    lightsalmon: "#ffa07a",
    darksalmon: "#e9967a",
    darkviolet: "#9400d3",
    mediumpurple: "#9370d8",
    mediumaquamarine: "#66cdaa",
    skyblue: "#87ceeb",
    lavender: "#e6e6fa",
    lightsteelblue: "#b0c4de",
    mediumvioletred: "#c71585",
    mintcream: "#f5fffa",
    navajowhite: "#ffdead",
    navy: "#000080",
    olivedrab: "#6b8e23",
    palevioletred: "#d87093",
    violetred: "#d02090",
    yellow: "#ff0",
    yellowgreen: "#9acd32",
    lawngreen: "#7cfc00",
    pink: "#ffc0cb",
    paleturquoise: "#afeeee",
    palegoldenrod: "#eee8aa",
    darkolivegreen: "#556b2f",
    darkseagreen: "#8fbc8f",
    darkturquoise: "#00ced1",
    peachpuff: "#ffdab9",
    deeppink: "#ff1493",
    violet: "#ee82ee",
    palegreen: "#98fb98",
    mediumseagreen: "#3cb371",
    peru: "#cd853f",
    saddlebrown: "#8b4513",
    sandybrown: "#f4a460",
    rosybrown: "#bc8f8f",
    purple: "#800080",
    seagreen: "#2e8b57",
    seashell: "#fff5ee",
    papayawhip: "#ffefd5",
    mediumslateblue: "#7b68ee",
    plum: "#dda0dd",
    mediumspringgreen: "#00fa9a",
  };
  function o(t) {
    return t < 0 ? 0 : t > 255 ? 255 : Math.round(t) || 0;
  }
  function _(t) {
    return t <= 0 || t > 0
      ? t < 0
        ? 0
        : t > 1
        ? 1
        : Math.round(1e4 * t) / 1e4
      : 0;
  }
  const u = /^#([0-9a-f])([0-9a-f])([0-9a-f])([0-9a-f])?$/i,
    c = /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})?$/i,
    d = /^rgb\(\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*\)$/,
    f =
      /^rgba\(\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?[\d]{0,10}(?:\.\d+)?)\s*\)$/;
  function p(t) {
    (t = t.toLowerCase()) in a && (t = a[t]);
    {
      const i = f.exec(t) || d.exec(t);
      if (i)
        return [
          o(parseInt(i[1], 10)),
          o(parseInt(i[2], 10)),
          o(parseInt(i[3], 10)),
          _(i.length < 5 ? 1 : parseFloat(i[4])),
        ];
    }
    {
      const i = c.exec(t);
      if (i)
        return [
          o(parseInt(i[1], 16)),
          o(parseInt(i[2], 16)),
          o(parseInt(i[3], 16)),
          1,
        ];
    }
    {
      const i = u.exec(t);
      if (i)
        return [
          o(17 * parseInt(i[1], 16)),
          o(17 * parseInt(i[2], 16)),
          o(17 * parseInt(i[3], 16)),
          1,
        ];
    }
    throw new Error(`Cannot parse color: ${t}`);
  }
  function v(t) {
    const i = p(t);
    return {
      t: `rgb(${i[0]}, ${i[1]}, ${i[2]})`,
      i:
        ((n = i),
        0.199 * n[0] + 0.687 * n[1] + 0.114 * n[2] > 160 ? "black" : "white"),
    };
    var n;
  }
  class m {
    constructor() {
      this.h = [];
    }
    l(t, i, n) {
      const s = { o: t, _: i, u: !0 === n };
      this.h.push(s);
    }
    p(t) {
      const i = this.h.findIndex((i) => t === i.o);
      i > -1 && this.h.splice(i, 1);
    }
    v(t) {
      this.h = this.h.filter((i) => i._ !== t);
    }
    m(t, i, n) {
      const s = [...this.h];
      (this.h = this.h.filter((t) => !t.u)), s.forEach((s) => s.o(t, i, n));
    }
    g() {
      return this.h.length > 0;
    }
    M() {
      this.h = [];
    }
  }
  function b(t, ...i) {
    for (const n of i)
      for (const i in n)
        void 0 !== n[i] &&
          ("object" != typeof n[i] || void 0 === t[i]
            ? (t[i] = n[i])
            : b(t[i], n[i]));
    return t;
  }
  function g(t) {
    return "number" == typeof t && isFinite(t);
  }
  function w(t) {
    return "number" == typeof t && t % 1 == 0;
  }
  function M(t) {
    return "string" == typeof t;
  }
  function S(t) {
    return "boolean" == typeof t;
  }
  function x(t) {
    const i = t;
    if (!i || "object" != typeof i) return i;
    let n, s, e;
    for (s in ((n = Array.isArray(i) ? [] : {}), i))
      i.hasOwnProperty(s) &&
        ((e = i[s]), (n[s] = e && "object" == typeof e ? x(e) : e));
    return n;
  }
  function y(t) {
    return null !== t;
  }
  function k(t) {
    return null === t ? void 0 : t;
  }
  const C =
    "-apple-system, BlinkMacSystemFont, 'Trebuchet MS', Roboto, Ubuntu, sans-serif";
  function T(t, i, n) {
    return (
      void 0 === i && (i = C), `${(n = void 0 !== n ? `${n} ` : "")}${t}px ${i}`
    );
  }
  class P {
    constructor(t) {
      (this.S = {
        k: 1,
        C: 5,
        T: NaN,
        P: "",
        R: "",
        D: "",
        O: "",
        B: 0,
        A: 0,
        L: 0,
        I: 0,
        N: 0,
      }),
        (this.V = t);
    }
    F() {
      const t = this.S,
        i = this.W(),
        n = this.j();
      return (
        (t.T === i && t.R === n) ||
          ((t.T = i),
          (t.R = n),
          (t.P = T(i, n)),
          (t.I = (2.5 / 12) * i),
          (t.B = t.I),
          (t.A = (i / 12) * t.C),
          (t.L = (i / 12) * t.C),
          (t.N = 0)),
        (t.D = this.$()),
        (t.O = this.H()),
        this.S
      );
    }
    $() {
      return this.V.F().layout.textColor;
    }
    H() {
      return this.V.U();
    }
    W() {
      return this.V.F().layout.fontSize;
    }
    j() {
      return this.V.F().layout.fontFamily;
    }
  }
  class R {
    constructor() {
      this.q = [];
    }
    Y(t) {
      this.q = t;
    }
    X(t, i, n) {
      this.q.forEach((s) => {
        s.X(t, i, n);
      });
    }
  }
  class D {
    X(t, i, n) {
      t.useMediaCoordinateSpace((t) => this.Z(t, i, n));
    }
    K(t, i, n) {
      t.useMediaCoordinateSpace((t) => this.G(t, i, n));
    }
    G(t, i, n) {}
  }
  class O extends D {
    constructor() {
      super(...arguments), (this.J = null);
    }
    tt(t) {
      this.J = t;
    }
    Z({ context: t }) {
      if (null === this.J || null === this.J.it) return;
      const i = this.J.it,
        n = this.J,
        s = (s) => {
          t.beginPath();
          for (let e = i.to - 1; e >= i.from; --e) {
            const i = n.nt[e];
            t.moveTo(i.st, i.et), t.arc(i.st, i.et, s, 0, 2 * Math.PI);
          }
          t.fill();
        };
      n.rt > 0 && ((t.fillStyle = n.ht), s(n.lt + n.rt)),
        (t.fillStyle = n.ot),
        s(n.lt);
    }
  }
  function B() {
    return {
      nt: [{ st: 0, et: 0, _t: 0, ut: 0 }],
      ot: "",
      ht: "",
      lt: 0,
      rt: 0,
      it: null,
    };
  }
  const E = { from: 0, to: 1 };
  class A {
    constructor(t, i) {
      (this.ct = new R()),
        (this.dt = []),
        (this.ft = []),
        (this.vt = !0),
        (this.V = t),
        (this.bt = i),
        this.ct.Y(this.dt);
    }
    gt(t) {
      const i = this.V.wt();
      i.length !== this.dt.length &&
        ((this.ft = i.map(B)),
        (this.dt = this.ft.map((t) => {
          const i = new O();
          return i.tt(t), i;
        })),
        this.ct.Y(this.dt)),
        (this.vt = !0);
    }
    Mt() {
      return this.vt && (this.St(), (this.vt = !1)), this.ct;
    }
    St() {
      const t = this.V.wt(),
        i = this.bt.xt(),
        n = this.V.yt();
      t.forEach((t, s) => {
        var e;
        const r = this.ft[s],
          l = t.kt(i);
        if (null === l || !t.Ct()) return void (r.it = null);
        const a = h(t.Tt());
        (r.ot = l.Pt),
          (r.lt = l.lt),
          (r.rt = l.Rt),
          (r.nt[0].ut = l.ut),
          (r.nt[0].et = t.Ot().Dt(l.ut, a.Bt)),
          (r.ht =
            null !== (e = l.Et) && void 0 !== e
              ? e
              : this.V.At(r.nt[0].et / t.Ot().Lt())),
          (r.nt[0]._t = i),
          (r.nt[0].st = n.zt(i)),
          (r.it = E);
      });
    }
  }
  class L {
    X(t, i, n) {
      t.useBitmapCoordinateSpace((t) => this.Z(t, i, n));
    }
  }
  class z extends L {
    constructor(t) {
      super(), (this.It = t);
    }
    Z({
      context: t,
      bitmapSize: i,
      horizontalPixelRatio: e,
      verticalPixelRatio: r,
    }) {
      if (null === this.It) return;
      const h = this.It.Nt.Ct,
        l = this.It.Vt.Ct;
      if (!h && !l) return;
      const a = Math.round(this.It.st * e),
        o = Math.round(this.It.et * r);
      (t.lineCap = "butt"),
        h &&
          a >= 0 &&
          ((t.lineWidth = Math.floor(this.It.Nt.rt * e)),
          (t.strokeStyle = this.It.Nt.D),
          (t.fillStyle = this.It.Nt.D),
          n(t, this.It.Nt.Ft),
          (function (t, i, n, s) {
            t.beginPath();
            const e = t.lineWidth % 2 ? 0.5 : 0;
            t.moveTo(i + e, n), t.lineTo(i + e, s), t.stroke();
          })(t, a, 0, i.height)),
        l &&
          o >= 0 &&
          ((t.lineWidth = Math.floor(this.It.Vt.rt * r)),
          (t.strokeStyle = this.It.Vt.D),
          (t.fillStyle = this.It.Vt.D),
          n(t, this.It.Vt.Ft),
          s(t, o, 0, i.width));
    }
  }
  class I {
    constructor(t) {
      (this.vt = !0),
        (this.Wt = {
          Nt: { rt: 1, Ft: 0, D: "", Ct: !1 },
          Vt: { rt: 1, Ft: 0, D: "", Ct: !1 },
          st: 0,
          et: 0,
        }),
        (this.jt = new z(this.Wt)),
        (this.$t = t);
    }
    gt() {
      this.vt = !0;
    }
    Mt() {
      return this.vt && (this.St(), (this.vt = !1)), this.jt;
    }
    St() {
      const t = this.$t.Ct(),
        i = h(this.$t.Ht()),
        n = i.Ut().F().crosshair,
        s = this.Wt;
      (s.Vt.Ct = t && this.$t.qt(i)),
        (s.Nt.Ct = t && this.$t.Yt()),
        (s.Vt.rt = n.horzLine.width),
        (s.Vt.Ft = n.horzLine.style),
        (s.Vt.D = n.horzLine.color),
        (s.Nt.rt = n.vertLine.width),
        (s.Nt.Ft = n.vertLine.style),
        (s.Nt.D = n.vertLine.color),
        (s.st = this.$t.Xt()),
        (s.et = this.$t.Zt());
    }
  }
  function N(t, i, n, s, e, r) {
    t.fillRect(i + r, n, s - 2 * r, r),
      t.fillRect(i + r, n + e - r, s - 2 * r, r),
      t.fillRect(i, n, r, e),
      t.fillRect(i + s - r, n, r, e);
  }
  function V(t, i, n, s, e, r) {
    t.save(),
      (t.globalCompositeOperation = "copy"),
      (t.fillStyle = r),
      t.fillRect(i, n, s, e),
      t.restore();
  }
  function F(t, i) {
    return Array.isArray(t) ? t.map((t) => (0 === t ? t : t + i)) : t + i;
  }
  function W(t, i, n, s, e, r) {
    let h, l, a, o;
    if (Array.isArray(r))
      if (2 === r.length) {
        const t = Math.max(0, r[0]),
          i = Math.max(0, r[1]);
        (h = t), (l = t), (a = i), (o = i);
      } else {
        if (4 !== r.length)
          throw new Error(
            "Wrong border radius - it should be like css border radius"
          );
        (h = Math.max(0, r[0])),
          (l = Math.max(0, r[1])),
          (a = Math.max(0, r[2])),
          (o = Math.max(0, r[3]));
      }
    else {
      const t = Math.max(0, r);
      (h = t), (l = t), (a = t), (o = t);
    }
    t.beginPath(),
      t.moveTo(i + h, n),
      t.lineTo(i + s - l, n),
      0 !== l && t.arcTo(i + s, n, i + s, n + l, l),
      t.lineTo(i + s, n + e - a),
      0 !== a && t.arcTo(i + s, n + e, i + s - a, n + e, a),
      t.lineTo(i + o, n + e),
      0 !== o && t.arcTo(i, n + e, i, n + e - o, o),
      t.lineTo(i, n + h),
      0 !== h && t.arcTo(i, n, i + h, n, h);
  }
  function j(t, i, n, s, e, r, h = 0, l = 0, a = "") {
    if ((t.save(), !h || !a || a === r))
      return W(t, i, n, s, e, l), (t.fillStyle = r), t.fill(), void t.restore();
    const o = h / 2;
    if ("transparent" !== r) {
      W(t, i + h, n + h, s - 2 * h, e - 2 * h, F(l, -h)),
        (t.fillStyle = r),
        t.fill();
    }
    if ("transparent" !== a) {
      W(t, i + o, n + o, s - h, e - h, F(l, -o)),
        (t.lineWidth = h),
        (t.strokeStyle = a),
        t.closePath(),
        t.stroke();
    }
    t.restore();
  }
  function $(t, i, n, s, e, r, h) {
    t.save(), (t.globalCompositeOperation = "copy");
    const l = t.createLinearGradient(0, 0, 0, e);
    l.addColorStop(0, r),
      l.addColorStop(1, h),
      (t.fillStyle = l),
      t.fillRect(i, n, s, e),
      t.restore();
  }
  class H {
    constructor(t, i) {
      this.tt(t, i);
    }
    tt(t, i) {
      (this.It = t), (this.Kt = i);
    }
    Lt(t, i) {
      return this.It.Ct ? t.T + t.I + t.B : 0;
    }
    X(t, i, n, s) {
      if (!this.It.Ct || 0 === this.It.Gt.length) return;
      const e = this.It.D,
        r = this.Kt.t,
        h = t.useBitmapCoordinateSpace((t) => {
          const h = t.context;
          h.font = i.P;
          const l = this.Jt(t, i, n, s),
            a = l.Qt,
            o = (t, i) => {
              l.ti
                ? j(h, a.ii, a.ni, a.si, a.ei, t, a.ri, [a.lt, 0, 0, a.lt], i)
                : j(h, a.hi, a.ni, a.si, a.ei, t, a.ri, [0, a.lt, a.lt, 0], i);
            };
          return (
            o(r, "transparent"),
            this.It.li &&
              ((h.fillStyle = e), h.fillRect(a.hi, a.ai, a.oi - a.hi, a._i)),
            o("transparent", r),
            this.It.ui &&
              ((h.fillStyle = i.O),
              h.fillRect(l.ti ? a.ci - a.ri : 0, a.ni, a.ri, a.di - a.ni)),
            l
          );
        });
      t.useMediaCoordinateSpace(({ context: t }) => {
        const n = h.fi;
        (t.font = i.P),
          (t.textAlign = h.ti ? "right" : "left"),
          (t.textBaseline = "middle"),
          (t.fillStyle = e),
          t.fillText(this.It.Gt, n.pi, (n.ni + n.di) / 2 + n.vi);
      });
    }
    Jt(t, i, n, s) {
      var e;
      const {
          context: r,
          bitmapSize: h,
          mediaSize: l,
          horizontalPixelRatio: a,
          verticalPixelRatio: o,
        } = t,
        _ = this.It.li || !this.It.mi ? i.C : 0,
        u = this.It.bi ? i.k : 0,
        c = i.I + this.Kt.gi,
        d = i.B + this.Kt.wi,
        f = i.A,
        p = i.L,
        v = this.It.Gt,
        m = i.T,
        b = n.Mi(r, v),
        g = Math.ceil(n.Si(r, v)),
        w = m + c + d,
        M = i.k + f + p + g + _,
        S = Math.max(1, Math.floor(o));
      let x = Math.round(w * o);
      x % 2 != S % 2 && (x += 1);
      const y = u > 0 ? Math.max(1, Math.floor(u * a)) : 0,
        k = Math.round(M * a),
        C = Math.round(_ * a),
        T = null !== (e = this.Kt.xi) && void 0 !== e ? e : this.Kt.yi,
        P = Math.round(T * o) - Math.floor(0.5 * o),
        R = Math.floor(P + S / 2 - x / 2),
        D = R + x,
        O = "right" === s,
        B = O ? l.width - u : u,
        E = O ? h.width - y : y;
      let A, L, z;
      return (
        O
          ? ((A = E - k), (L = E - C), (z = B - _ - f - u))
          : ((A = E + k), (L = E + C), (z = B + _ + f)),
        {
          ti: O,
          Qt: {
            ni: R,
            ai: P,
            di: D,
            si: k,
            ei: x,
            lt: 2 * a,
            ri: y,
            ii: A,
            hi: E,
            oi: L,
            _i: S,
            ci: h.width,
          },
          fi: { ni: R / o, di: D / o, pi: z, vi: b },
        }
      );
    }
  }
  class U {
    constructor(t) {
      (this.ki = { yi: 0, t: "#000", wi: 0, gi: 0 }),
        (this.Ci = {
          Gt: "",
          Ct: !1,
          li: !0,
          mi: !1,
          Et: "",
          D: "#FFF",
          ui: !1,
          bi: !1,
        }),
        (this.Ti = {
          Gt: "",
          Ct: !1,
          li: !1,
          mi: !0,
          Et: "",
          D: "#FFF",
          ui: !0,
          bi: !0,
        }),
        (this.vt = !0),
        (this.Pi = new (t || H)(this.Ci, this.ki)),
        (this.Ri = new (t || H)(this.Ti, this.ki));
    }
    Gt() {
      return this.Di(), this.Ci.Gt;
    }
    yi() {
      return this.Di(), this.ki.yi;
    }
    gt() {
      this.vt = !0;
    }
    Lt(t, i = !1) {
      return Math.max(this.Pi.Lt(t, i), this.Ri.Lt(t, i));
    }
    Oi() {
      return this.ki.xi || 0;
    }
    Bi(t) {
      this.ki.xi = t;
    }
    Ei() {
      return this.Di(), this.Ci.Ct || this.Ti.Ct;
    }
    Ai() {
      return this.Di(), this.Ci.Ct;
    }
    Mt(t) {
      return (
        this.Di(),
        (this.Ci.li = this.Ci.li && t.F().ticksVisible),
        (this.Ti.li = this.Ti.li && t.F().ticksVisible),
        this.Pi.tt(this.Ci, this.ki),
        this.Ri.tt(this.Ti, this.ki),
        this.Pi
      );
    }
    Li() {
      return (
        this.Di(),
        this.Pi.tt(this.Ci, this.ki),
        this.Ri.tt(this.Ti, this.ki),
        this.Ri
      );
    }
    Di() {
      this.vt &&
        ((this.Ci.li = !0),
        (this.Ti.li = !1),
        this.zi(this.Ci, this.Ti, this.ki));
    }
  }
  class q extends U {
    constructor(t, i, n) {
      super(), (this.$t = t), (this.Ii = i), (this.Ni = n);
    }
    zi(t, i, n) {
      t.Ct = !1;
      const s = this.$t.F().horzLine;
      if (!s.labelVisible) return;
      const e = this.Ii.Tt();
      if (!this.$t.Ct() || this.Ii.Vi() || null === e) return;
      const r = v(s.labelBackgroundColor);
      (n.t = r.t), (t.D = r.i);
      const h = (2 / 12) * this.Ii.T();
      (n.gi = h), (n.wi = h);
      const l = this.Ni(this.Ii);
      (n.yi = l.yi), (t.Gt = this.Ii.Fi(l.ut, e)), (t.Ct = !0);
    }
  }
  const Y = /[1-9]/g;
  class X {
    constructor() {
      this.It = null;
    }
    tt(t) {
      this.It = t;
    }
    X(t, i) {
      if (null === this.It || !1 === this.It.Ct || 0 === this.It.Gt.length)
        return;
      const n = t.useMediaCoordinateSpace(
        ({ context: t }) => (
          (t.font = i.P), Math.round(i.Wi.Si(t, h(this.It).Gt, Y))
        )
      );
      if (n <= 0) return;
      const s = i.ji,
        e = n + 2 * s,
        r = e / 2,
        l = this.It.$i;
      let a = this.It.yi,
        o = Math.floor(a - r) + 0.5;
      o < 0
        ? ((a += Math.abs(0 - o)), (o = Math.floor(a - r) + 0.5))
        : o + e > l &&
          ((a -= Math.abs(l - (o + e))), (o = Math.floor(a - r) + 0.5));
      const _ = o + e,
        u = Math.ceil(0 + i.k + i.C + i.I + i.T + i.B);
      t.useBitmapCoordinateSpace(
        ({ context: t, horizontalPixelRatio: n, verticalPixelRatio: s }) => {
          const e = h(this.It);
          t.fillStyle = e.t;
          const r = Math.round(o * n),
            l = Math.round(0 * s),
            a = Math.round(_ * n),
            c = Math.round(u * s),
            d = Math.round(2 * n);
          if (
            (t.beginPath(),
            t.moveTo(r, l),
            t.lineTo(r, c - d),
            t.arcTo(r, c, r + d, c, d),
            t.lineTo(a - d, c),
            t.arcTo(a, c, a, c - d, d),
            t.lineTo(a, l),
            t.fill(),
            e.li)
          ) {
            const r = Math.round(e.yi * n),
              h = l,
              a = Math.round((h + i.C) * s);
            t.fillStyle = e.D;
            const o = Math.max(1, Math.floor(n)),
              _ = Math.floor(0.5 * n);
            t.fillRect(r - _, h, o, a - h);
          }
        }
      ),
        t.useMediaCoordinateSpace(({ context: t }) => {
          const n = h(this.It),
            e = 0 + i.k + i.C + i.I + i.T / 2;
          (t.font = i.P),
            (t.textAlign = "left"),
            (t.textBaseline = "middle"),
            (t.fillStyle = n.D);
          const r = i.Wi.Mi(t, "Apr0");
          t.translate(o + s, e + r), t.fillText(n.Gt, 0, 0);
        });
    }
  }
  class Z {
    constructor(t, i, n) {
      (this.vt = !0),
        (this.jt = new X()),
        (this.Wt = {
          Ct: !1,
          t: "#4c525e",
          D: "white",
          Gt: "",
          $i: 0,
          yi: NaN,
          li: !0,
        }),
        (this.bt = t),
        (this.Hi = i),
        (this.Ni = n);
    }
    gt() {
      this.vt = !0;
    }
    Mt() {
      return (
        this.vt && (this.St(), (this.vt = !1)), this.jt.tt(this.Wt), this.jt
      );
    }
    St() {
      const t = this.Wt;
      t.Ct = !1;
      const i = this.bt.F().vertLine;
      if (!i.labelVisible) return;
      const n = this.Hi.yt();
      if (n.Vi()) return;
      t.$i = n.$i();
      const s = this.Ni();
      if (null === s) return;
      t.yi = s.yi;
      const e = n.Ui(this.bt.xt());
      (t.Gt = n.qi(h(e))), (t.Ct = !0);
      const r = v(i.labelBackgroundColor);
      (t.t = r.t), (t.D = r.i), (t.li = n.F().ticksVisible);
    }
  }
  class K {
    constructor() {
      (this.Yi = null), (this.Xi = 0);
    }
    Zi() {
      return this.Xi;
    }
    Ki(t) {
      this.Xi = t;
    }
    Ot() {
      return this.Yi;
    }
    Gi(t) {
      this.Yi = t;
    }
    Ji(t) {
      return [];
    }
    Qi() {
      return [];
    }
    Ct() {
      return !0;
    }
  }
  var G;
  !(function (t) {
    (t[(t.Normal = 0)] = "Normal"), (t[(t.Magnet = 1)] = "Magnet");
  })(G || (G = {}));
  class J extends K {
    constructor(t, i) {
      super(),
        (this.tn = null),
        (this.nn = NaN),
        (this.sn = 0),
        (this.en = !0),
        (this.rn = new Map()),
        (this.hn = !1),
        (this.ln = NaN),
        (this.an = NaN),
        (this.on = NaN),
        (this._n = NaN),
        (this.Hi = t),
        (this.un = i),
        (this.cn = new A(t, this));
      this.dn = ((t, i) => (n) => {
        const s = i(),
          e = t();
        if (n === h(this.tn).fn()) return { ut: e, yi: s };
        {
          const t = h(n.Tt());
          return { ut: n.pn(s, t), yi: s };
        }
      })(
        () => this.nn,
        () => this.an
      );
      const n = ((t, i) => () => {
        const n = this.Hi.yt().vn(t()),
          s = i();
        return n && Number.isFinite(s) ? { _t: n, yi: s } : null;
      })(
        () => this.sn,
        () => this.Xt()
      );
      (this.mn = new Z(this, t, n)), (this.bn = new I(this));
    }
    F() {
      return this.un;
    }
    gn(t, i) {
      (this.on = t), (this._n = i);
    }
    wn() {
      (this.on = NaN), (this._n = NaN);
    }
    Mn() {
      return this.on;
    }
    Sn() {
      return this._n;
    }
    xn(t, i, n) {
      this.hn || (this.hn = !0), (this.en = !0), this.yn(t, i, n);
    }
    xt() {
      return this.sn;
    }
    Xt() {
      return this.ln;
    }
    Zt() {
      return this.an;
    }
    Ct() {
      return this.en;
    }
    kn() {
      (this.en = !1),
        this.Cn(),
        (this.nn = NaN),
        (this.ln = NaN),
        (this.an = NaN),
        (this.tn = null),
        this.wn();
    }
    Tn(t) {
      return null !== this.tn ? [this.bn, this.cn] : [];
    }
    qt(t) {
      return t === this.tn && this.un.horzLine.visible;
    }
    Yt() {
      return this.un.vertLine.visible;
    }
    Pn(t, i) {
      (this.en && this.tn === t) || this.rn.clear();
      const n = [];
      return this.tn === t && n.push(this.Rn(this.rn, i, this.dn)), n;
    }
    Qi() {
      return this.en ? [this.mn] : [];
    }
    Ht() {
      return this.tn;
    }
    Dn() {
      this.bn.gt(), this.rn.forEach((t) => t.gt()), this.mn.gt(), this.cn.gt();
    }
    On(t) {
      return t && !t.fn().Vi() ? t.fn() : null;
    }
    yn(t, i, n) {
      this.Bn(t, i, n) && this.Dn();
    }
    Bn(t, i, n) {
      const s = this.ln,
        e = this.an,
        r = this.nn,
        h = this.sn,
        l = this.tn,
        a = this.On(n);
      (this.sn = t),
        (this.ln = isNaN(t) ? NaN : this.Hi.yt().zt(t)),
        (this.tn = n);
      const o = null !== a ? a.Tt() : null;
      return (
        null !== a && null !== o
          ? ((this.nn = i), (this.an = a.Dt(i, o)))
          : ((this.nn = NaN), (this.an = NaN)),
        s !== this.ln ||
          e !== this.an ||
          h !== this.sn ||
          r !== this.nn ||
          l !== this.tn
      );
    }
    Cn() {
      const t = this.Hi.wt()
          .map((t) => t.An().En())
          .filter(y),
        i = 0 === t.length ? null : Math.max(...t);
      this.sn = null !== i ? i : NaN;
    }
    Rn(t, i, n) {
      let s = t.get(i);
      return void 0 === s && ((s = new q(this, i, n)), t.set(i, s)), s;
    }
  }
  function Q(t) {
    return "left" === t || "right" === t;
  }
  class tt {
    constructor(t) {
      (this.Ln = new Map()), (this.zn = []), (this.In = t);
    }
    Nn(t, i) {
      const n = (function (t, i) {
        return void 0 === t
          ? i
          : { Vn: Math.max(t.Vn, i.Vn), Fn: t.Fn || i.Fn };
      })(this.Ln.get(t), i);
      this.Ln.set(t, n);
    }
    Wn() {
      return this.In;
    }
    jn(t) {
      const i = this.Ln.get(t);
      return void 0 === i
        ? { Vn: this.In }
        : { Vn: Math.max(this.In, i.Vn), Fn: i.Fn };
    }
    $n() {
      this.Hn(), (this.zn = [{ Un: 0 }]);
    }
    qn(t) {
      this.Hn(), (this.zn = [{ Un: 1, Bt: t }]);
    }
    Yn(t) {
      this.Xn(), this.zn.push({ Un: 5, Bt: t });
    }
    Hn() {
      this.Xn(), this.zn.push({ Un: 6 });
    }
    Zn() {
      this.Hn(), (this.zn = [{ Un: 4 }]);
    }
    Kn(t) {
      this.Hn(), this.zn.push({ Un: 2, Bt: t });
    }
    Gn(t) {
      this.Hn(), this.zn.push({ Un: 3, Bt: t });
    }
    Jn() {
      return this.zn;
    }
    Qn(t) {
      for (const i of t.zn) this.ts(i);
      (this.In = Math.max(this.In, t.In)),
        t.Ln.forEach((t, i) => {
          this.Nn(i, t);
        });
    }
    static ns() {
      return new tt(2);
    }
    static ss() {
      return new tt(3);
    }
    ts(t) {
      switch (t.Un) {
        case 0:
          this.$n();
          break;
        case 1:
          this.qn(t.Bt);
          break;
        case 2:
          this.Kn(t.Bt);
          break;
        case 3:
          this.Gn(t.Bt);
          break;
        case 4:
          this.Zn();
          break;
        case 5:
          this.Yn(t.Bt);
          break;
        case 6:
          this.Xn();
      }
    }
    Xn() {
      const t = this.zn.findIndex((t) => 5 === t.Un);
      -1 !== t && this.zn.splice(t, 1);
    }
  }
  const it = ".";
  function nt(t, i) {
    if (!g(t)) return "n/a";
    if (!w(i)) throw new TypeError("invalid length");
    if (i < 0 || i > 16) throw new TypeError("invalid length");
    if (0 === i) return t.toString();
    return ("0000000000000000" + t.toString()).slice(-i);
  }
  class st {
    constructor(t, i) {
      if ((i || (i = 1), (g(t) && w(t)) || (t = 100), t < 0))
        throw new TypeError("invalid base");
      (this.Ii = t), (this.es = i), this.rs();
    }
    format(t) {
      const i = t < 0 ? "−" : "";
      return (t = Math.abs(t)), i + this.hs(t);
    }
    rs() {
      if (((this.ls = 0), this.Ii > 0 && this.es > 0)) {
        let t = this.Ii;
        for (; t > 1; ) (t /= 10), this.ls++;
      }
    }
    hs(t) {
      const i = this.Ii / this.es;
      let n = Math.floor(t),
        s = "";
      const e = void 0 !== this.ls ? this.ls : NaN;
      if (i > 1) {
        let r = +(Math.round(t * i) - n * i).toFixed(this.ls);
        r >= i && ((r -= i), (n += 1)),
          (s = it + nt(+r.toFixed(this.ls) * this.es, e));
      } else (n = Math.round(n * i) / i), e > 0 && (s = it + nt(0, e));
      return n.toFixed(0) + s;
    }
  }
  class et extends st {
    constructor(t = 100) {
      super(t);
    }
    format(t) {
      return `${super.format(t)}%`;
    }
  }
  class rt {
    constructor(t) {
      this.os = t;
    }
    format(t) {
      let i = "";
      return (
        t < 0 && ((i = "-"), (t = -t)),
        t < 995
          ? i + this._s(t)
          : t < 999995
          ? i + this._s(t / 1e3) + "K"
          : t < 999999995
          ? ((t = 1e3 * Math.round(t / 1e3)), i + this._s(t / 1e6) + "M")
          : ((t = 1e6 * Math.round(t / 1e6)), i + this._s(t / 1e9) + "B")
      );
    }
    _s(t) {
      let i;
      const n = Math.pow(10, this.os);
      return (
        (i =
          (t = Math.round(t * n) / n) >= 1e-15 && t < 1
            ? t.toFixed(this.os).replace(/\.?0+$/, "")
            : String(t)),
        i.replace(/(\.[1-9]*)0+$/, (t, i) => i)
      );
    }
  }
  function ht(t, i, n, s, e, r, h) {
    if (0 === i.length || s.from >= i.length || s.to <= 0) return;
    const l = t.context,
      a = i[s.from];
    let o = r(t, a),
      _ = a;
    if (s.to - s.from < 2) {
      const t = e / 2;
      l.beginPath();
      const i = { st: a.st - t, et: a.et },
        n = { st: a.st + t, et: a.et };
      return l.moveTo(i.st, i.et), l.lineTo(n.st, n.et), void h(l, o, i, n);
    }
    const u = (t, i) => {
      h(l, o, _, i), l.beginPath(), (o = t), (_ = i);
    };
    let c = _;
    l.beginPath(), l.moveTo(a.st, a.et);
    for (let e = s.from + 1; e < s.to; ++e) {
      c = i[e];
      const s = r(t, c);
      switch (n) {
        case 0:
          l.lineTo(c.st, c.et);
          break;
        case 1:
          l.lineTo(c.st, i[e - 1].et),
            s !== o && (u(s, c), l.lineTo(c.st, i[e - 1].et)),
            l.lineTo(c.st, c.et);
          break;
        case 2: {
          const [t, n] = _t(i, e - 1, e);
          l.bezierCurveTo(t.st, t.et, n.st, n.et, c.st, c.et);
          break;
        }
      }
      1 !== n && s !== o && (u(s, c), l.moveTo(c.st, c.et));
    }
    (_ !== c || (_ === c && 1 === n)) && h(l, o, _, c);
  }
  const lt = 6;
  function at(t, i) {
    return { st: t.st - i.st, et: t.et - i.et };
  }
  function ot(t, i) {
    return { st: t.st / i, et: t.et / i };
  }
  function _t(t, i, n) {
    const s = Math.max(0, i - 1),
      e = Math.min(t.length - 1, n + 1);
    var r, h;
    return [
      ((r = t[i]),
      (h = ot(at(t[n], t[s]), lt)),
      { st: r.st + h.st, et: r.et + h.et }),
      at(t[n], ot(at(t[e], t[i]), lt)),
    ];
  }
  function ut(t, i, n, s, e) {
    i.lineTo(e.st, t),
      i.lineTo(s.st, t),
      i.closePath(),
      (i.fillStyle = n),
      i.fill();
  }
  class ct extends D {
    constructor() {
      super(...arguments), (this.J = null);
    }
    tt(t) {
      this.J = t;
    }
    Z(t) {
      var i;
      if (null === this.J) return;
      const { nt: s, it: e, us: r, rt: h, Ft: l, cs: a } = this.J,
        o =
          null !== (i = this.J.ds) && void 0 !== i
            ? i
            : this.J.fs
            ? 0
            : t.mediaSize.height;
      if (null === e) return;
      const _ = t.context;
      (_.lineCap = "butt"),
        (_.lineJoin = "round"),
        (_.lineWidth = h),
        n(_, l),
        (_.lineWidth = 1),
        ht(t, s, a, e, r, this.ps.bind(this), ut.bind(null, o));
    }
  }
  class dt extends ct {
    constructor() {
      super(...arguments), (this.vs = null);
    }
    ps(t, i) {
      const { context: n, mediaSize: s } = t,
        { bs: e, gs: r } = i,
        h = s.height;
      if (
        null !== this.vs &&
        this.vs.topColor === e &&
        this.vs.bottomColor === r &&
        this.vs.bottom === h
      )
        return this.vs.fillStyle;
      const l = n.createLinearGradient(0, 0, 0, h);
      return (
        l.addColorStop(0, e),
        l.addColorStop(1, r),
        (this.vs = { topColor: e, bottomColor: r, fillStyle: l, bottom: h }),
        l
      );
    }
  }
  function ft(t, i) {
    (t.strokeStyle = i), t.stroke();
  }
  class pt extends D {
    constructor() {
      super(...arguments), (this.J = null);
    }
    tt(t) {
      this.J = t;
    }
    Z(t) {
      if (null === this.J) return;
      const { nt: i, it: s, us: e, cs: r, rt: h, Ft: l } = this.J;
      if (null === s) return;
      const a = t.context;
      (a.lineCap = "butt"),
        (a.lineWidth = h),
        n(a, l),
        (a.lineJoin = "round"),
        ht(t, i, r, s, e, this.ws.bind(this), ft);
    }
  }
  class vt extends pt {
    ws(t, i) {
      return i.ot;
    }
  }
  function mt(t, i, n, s = 0, e = t.length) {
    let r = e - s;
    for (; 0 < r; ) {
      const e = r >> 1,
        h = s + e;
      n(t[h], i) ? ((s = h + 1), (r -= e + 1)) : (r = e);
    }
    return s;
  }
  function bt(t, i, n, s = 0, e = t.length) {
    let r = e - s;
    for (; 0 < r; ) {
      const e = r >> 1,
        h = s + e;
      n(i, t[h]) ? (r = e) : ((s = h + 1), (r -= e + 1));
    }
    return s;
  }
  function gt(t, i) {
    return t._t < i;
  }
  function wt(t, i) {
    return t < i._t;
  }
  function Mt(t, i, n) {
    const s = i.Ms(),
      e = i.ci(),
      r = mt(t, s, gt),
      h = bt(t, e, wt);
    if (!n) return { from: r, to: h };
    let l = r,
      a = h;
    return (
      r > 0 && r < t.length && t[r]._t >= s && (l = r - 1),
      h > 0 && h < t.length && t[h - 1]._t <= e && (a = h + 1),
      { from: l, to: a }
    );
  }
  class St {
    constructor(t, i, n) {
      (this.Ss = !0),
        (this.xs = !0),
        (this.ys = !0),
        (this.ks = []),
        (this.Cs = null),
        (this.Ts = t),
        (this.Ps = i),
        (this.Rs = n);
    }
    gt(t) {
      (this.Ss = !0),
        "data" === t && (this.xs = !0),
        "options" === t && (this.ys = !0);
    }
    Mt() {
      return this.Ts.Ct()
        ? (this.Ds(), null === this.Cs ? null : this.Os)
        : null;
    }
    Bs() {
      this.ks = this.ks.map((t) =>
        Object.assign(Object.assign({}, t), this.Ts.As().Es(t._t))
      );
    }
    Ls() {
      this.Cs = null;
    }
    Ds() {
      this.xs && (this.zs(), (this.xs = !1)),
        this.ys && (this.Bs(), (this.ys = !1)),
        this.Ss && (this.Is(), (this.Ss = !1));
    }
    Is() {
      const t = this.Ts.Ot(),
        i = this.Ps.yt();
      if ((this.Ls(), i.Vi() || t.Vi())) return;
      const n = i.Ns();
      if (null === n) return;
      if (0 === this.Ts.An().Vs()) return;
      const s = this.Ts.Tt();
      null !== s &&
        ((this.Cs = Mt(this.ks, n, this.Rs)), this.Fs(t, i, s.Bt), this.Ws());
    }
  }
  class xt extends St {
    constructor(t, i) {
      super(t, i, !0);
    }
    Fs(t, i, n) {
      i.js(this.ks, k(this.Cs)), t.$s(this.ks, n, k(this.Cs));
    }
    Hs(t, i) {
      return { _t: t, ut: i, st: NaN, et: NaN };
    }
    zs() {
      const t = this.Ts.As();
      this.ks = this.Ts.An()
        .Us()
        .map((i) => {
          const n = i.Bt[3];
          return this.qs(i.Ys, n, t);
        });
    }
  }
  class yt extends xt {
    constructor(t, i) {
      super(t, i),
        (this.Os = new R()),
        (this.Xs = new dt()),
        (this.Zs = new vt()),
        this.Os.Y([this.Xs, this.Zs]);
    }
    qs(t, i, n) {
      return Object.assign(Object.assign({}, this.Hs(t, i)), n.Es(t));
    }
    Ws() {
      const t = this.Ts.F();
      this.Xs.tt({
        cs: t.lineType,
        nt: this.ks,
        Ft: t.lineStyle,
        rt: t.lineWidth,
        ds: null,
        fs: t.invertFilledArea,
        it: this.Cs,
        us: this.Ps.yt().Ks(),
      }),
        this.Zs.tt({
          cs: t.lineType,
          nt: this.ks,
          Ft: t.lineStyle,
          rt: t.lineWidth,
          it: this.Cs,
          us: this.Ps.yt().Ks(),
        });
    }
  }
  class kt extends L {
    constructor() {
      super(...arguments), (this.It = null), (this.Gs = 0), (this.Js = 0);
    }
    tt(t) {
      this.It = t;
    }
    Z({ context: t, horizontalPixelRatio: i, verticalPixelRatio: n }) {
      if (null === this.It || 0 === this.It.An.length || null === this.It.it)
        return;
      if (((this.Gs = this.Qs(i)), this.Gs >= 2)) {
        Math.max(1, Math.floor(i)) % 2 != this.Gs % 2 && this.Gs--;
      }
      this.Js = this.It.te ? Math.min(this.Gs, Math.floor(i)) : this.Gs;
      let s = null;
      const e = this.Js <= this.Gs && this.It.Ks >= Math.floor(1.5 * i);
      for (let r = this.It.it.from; r < this.It.it.to; ++r) {
        const h = this.It.An[r];
        s !== h.ie && ((t.fillStyle = h.ie), (s = h.ie));
        const l = Math.floor(0.5 * this.Js),
          a = Math.round(h.st * i),
          o = a - l,
          _ = this.Js,
          u = o + _ - 1,
          c = Math.min(h.ne, h.se),
          d = Math.max(h.ne, h.se),
          f = Math.round(c * n) - l,
          p = Math.round(d * n) + l,
          v = Math.max(p - f, this.Js);
        t.fillRect(o, f, _, v);
        const m = Math.ceil(1.5 * this.Gs);
        if (e) {
          if (this.It.ee) {
            const i = a - m;
            let s = Math.max(f, Math.round(h.re * n) - l),
              e = s + _ - 1;
            e > f + v - 1 && ((e = f + v - 1), (s = e - _ + 1)),
              t.fillRect(i, s, o - i, e - s + 1);
          }
          const i = a + m;
          let s = Math.max(f, Math.round(h.he * n) - l),
            e = s + _ - 1;
          e > f + v - 1 && ((e = f + v - 1), (s = e - _ + 1)),
            t.fillRect(u + 1, s, i - u, e - s + 1);
        }
      }
    }
    Qs(t) {
      const i = Math.floor(t);
      return Math.max(
        i,
        Math.floor(
          (function (t, i) {
            return Math.floor(0.3 * t * i);
          })(h(this.It).Ks, t)
        )
      );
    }
  }
  class Ct extends St {
    constructor(t, i) {
      super(t, i, !1);
    }
    Fs(t, i, n) {
      i.js(this.ks, k(this.Cs)), t.le(this.ks, n, k(this.Cs));
    }
    ae(t, i, n) {
      return {
        _t: t,
        oe: i.Bt[0],
        _e: i.Bt[1],
        ue: i.Bt[2],
        ce: i.Bt[3],
        st: NaN,
        re: NaN,
        ne: NaN,
        se: NaN,
        he: NaN,
      };
    }
    zs() {
      const t = this.Ts.As();
      this.ks = this.Ts.An()
        .Us()
        .map((i) => this.qs(i.Ys, i, t));
    }
  }
  class Tt extends Ct {
    constructor() {
      super(...arguments), (this.Os = new kt());
    }
    qs(t, i, n) {
      return Object.assign(Object.assign({}, this.ae(t, i, n)), n.Es(t));
    }
    Ws() {
      const t = this.Ts.F();
      this.Os.tt({
        An: this.ks,
        Ks: this.Ps.yt().Ks(),
        ee: t.openVisible,
        te: t.thinBars,
        it: this.Cs,
      });
    }
  }
  function Pt(t, i, n) {
    return Math.min(Math.max(t, i), n);
  }
  function Rt(t, i, n) {
    return i - t <= n;
  }
  function Dt(t) {
    return t <= 0 ? NaN : Math.log(t) / Math.log(10);
  }
  function Ot(t) {
    const i = Math.ceil(t);
    return i % 2 == 0 ? i - 1 : i;
  }
  class Bt extends ct {
    constructor() {
      super(...arguments), (this.vs = null);
    }
    ps(t, i) {
      var n;
      const { context: s, mediaSize: e } = t,
        r = this.J,
        { de: h, fe: l, pe: a, ve: o } = i,
        _ = null !== (n = r.ds) && void 0 !== n ? n : e.height,
        u = e.height;
      if (
        null !== this.vs &&
        this.vs.topFillColor1 === h &&
        this.vs.topFillColor2 === l &&
        this.vs.bottomFillColor1 === a &&
        this.vs.bottomFillColor2 === o &&
        this.vs.baseLevelCoordinate === _ &&
        this.vs.bottom === u
      )
        return this.vs.fillStyle;
      const c = s.createLinearGradient(0, 0, 0, u),
        d = Pt(_ / u, 0, 1);
      return (
        c.addColorStop(0, h),
        c.addColorStop(d, l),
        c.addColorStop(d, a),
        c.addColorStop(1, o),
        (this.vs = {
          topFillColor1: h,
          topFillColor2: l,
          bottomFillColor1: a,
          bottomFillColor2: o,
          fillStyle: c,
          baseLevelCoordinate: _,
          bottom: u,
        }),
        c
      );
    }
  }
  class Et extends pt {
    constructor() {
      super(...arguments), (this.me = null);
    }
    ws(t, i) {
      const { context: n, mediaSize: s } = t,
        e = this.J,
        { be: r, ge: h } = i,
        { ds: l } = e,
        a = s.height;
      if (
        null !== this.me &&
        this.me.topLineColor === r &&
        this.me.bottomLineColor === h &&
        this.me.baseLevelCoordinate === l &&
        this.me.bottom === a
      )
        return this.me.strokeStyle;
      const o = n.createLinearGradient(0, 0, 0, a),
        _ = Pt(l / a, 0, 1);
      return (
        o.addColorStop(0, r),
        o.addColorStop(_, r),
        o.addColorStop(_, h),
        o.addColorStop(1, h),
        (this.me = {
          topLineColor: r,
          bottomLineColor: h,
          strokeStyle: o,
          baseLevelCoordinate: l,
          bottom: a,
        }),
        o
      );
    }
  }
  class At extends xt {
    constructor(t, i) {
      super(t, i),
        (this.Os = new R()),
        (this.we = new Bt()),
        (this.Me = new Et()),
        this.Os.Y([this.we, this.Me]);
    }
    qs(t, i, n) {
      return Object.assign(Object.assign({}, this.Hs(t, i)), n.Es(t));
    }
    Ws() {
      const t = this.Ts.Tt();
      if (null === t) return;
      const i = this.Ts.F(),
        n = this.Ts.Ot().Dt(i.baseValue.price, t.Bt),
        s = this.Ps.yt().Ks();
      this.we.tt({
        nt: this.ks,
        rt: i.lineWidth,
        Ft: i.lineStyle,
        cs: i.lineType,
        ds: n,
        fs: !1,
        it: this.Cs,
        us: s,
      }),
        this.Me.tt({
          nt: this.ks,
          rt: i.lineWidth,
          Ft: i.lineStyle,
          cs: i.lineType,
          ds: n,
          it: this.Cs,
          us: s,
        });
    }
  }
  class Lt extends L {
    constructor() {
      super(...arguments), (this.It = null), (this.Gs = 0);
    }
    tt(t) {
      this.It = t;
    }
    Z(t) {
      if (null === this.It || 0 === this.It.An.length || null === this.It.it)
        return;
      const { horizontalPixelRatio: i } = t;
      if (
        ((this.Gs = (function (t, i) {
          if (t >= 2.5 && t <= 4) return Math.floor(3 * i);
          const n = 1 - (0.2 * Math.atan(Math.max(4, t) - 4)) / (0.5 * Math.PI),
            s = Math.floor(t * n * i),
            e = Math.floor(t * i),
            r = Math.min(s, e);
          return Math.max(Math.floor(i), r);
        })(this.It.Ks, i)),
        this.Gs >= 2)
      ) {
        Math.floor(i) % 2 != this.Gs % 2 && this.Gs--;
      }
      const n = this.It.An;
      this.It.Se && this.xe(t, n, this.It.it),
        this.It.ui && this.ye(t, n, this.It.it);
      const s = this.ke(i);
      (!this.It.ui || this.Gs > 2 * s) && this.Ce(t, n, this.It.it);
    }
    xe(t, i, n) {
      if (null === this.It) return;
      const { context: s, horizontalPixelRatio: e, verticalPixelRatio: r } = t;
      let h = "",
        l = Math.min(Math.floor(e), Math.floor(this.It.Ks * e));
      l = Math.max(Math.floor(e), Math.min(l, this.Gs));
      const a = Math.floor(0.5 * l);
      let o = null;
      for (let t = n.from; t < n.to; t++) {
        const n = i[t];
        n.Te !== h && ((s.fillStyle = n.Te), (h = n.Te));
        const _ = Math.round(Math.min(n.re, n.he) * r),
          u = Math.round(Math.max(n.re, n.he) * r),
          c = Math.round(n.ne * r),
          d = Math.round(n.se * r);
        let f = Math.round(e * n.st) - a;
        const p = f + l - 1;
        null !== o && ((f = Math.max(o + 1, f)), (f = Math.min(f, p)));
        const v = p - f + 1;
        s.fillRect(f, c, v, _ - c), s.fillRect(f, u + 1, v, d - u), (o = p);
      }
    }
    ke(t) {
      let i = Math.floor(1 * t);
      this.Gs <= 2 * i && (i = Math.floor(0.5 * (this.Gs - 1)));
      const n = Math.max(Math.floor(t), i);
      return this.Gs <= 2 * n ? Math.max(Math.floor(t), Math.floor(1 * t)) : n;
    }
    ye(t, i, n) {
      if (null === this.It) return;
      const { context: s, horizontalPixelRatio: e, verticalPixelRatio: r } = t;
      let h = "";
      const l = this.ke(e);
      let a = null;
      for (let t = n.from; t < n.to; t++) {
        const n = i[t];
        n.Pe !== h && ((s.fillStyle = n.Pe), (h = n.Pe));
        let o = Math.round(n.st * e) - Math.floor(0.5 * this.Gs);
        const _ = o + this.Gs - 1,
          u = Math.round(Math.min(n.re, n.he) * r),
          c = Math.round(Math.max(n.re, n.he) * r);
        if (
          (null !== a && ((o = Math.max(a + 1, o)), (o = Math.min(o, _))),
          this.It.Ks * e > 2 * l)
        )
          N(s, o, u, _ - o + 1, c - u + 1, l);
        else {
          const t = _ - o + 1;
          s.fillRect(o, u, t, c - u + 1);
        }
        a = _;
      }
    }
    Ce(t, i, n) {
      if (null === this.It) return;
      const { context: s, horizontalPixelRatio: e, verticalPixelRatio: r } = t;
      let h = "";
      const l = this.ke(e);
      for (let t = n.from; t < n.to; t++) {
        const n = i[t];
        let a = Math.round(Math.min(n.re, n.he) * r),
          o = Math.round(Math.max(n.re, n.he) * r),
          _ = Math.round(n.st * e) - Math.floor(0.5 * this.Gs),
          u = _ + this.Gs - 1;
        if (n.ie !== h) {
          const t = n.ie;
          (s.fillStyle = t), (h = t);
        }
        this.It.ui && ((_ += l), (a += l), (u -= l), (o -= l)),
          a > o || s.fillRect(_, a, u - _ + 1, o - a + 1);
      }
    }
  }
  class zt extends Ct {
    constructor() {
      super(...arguments), (this.Os = new Lt());
    }
    qs(t, i, n) {
      return Object.assign(Object.assign({}, this.ae(t, i, n)), n.Es(t));
    }
    Ws() {
      const t = this.Ts.F();
      this.Os.tt({
        An: this.ks,
        Ks: this.Ps.yt().Ks(),
        Se: t.wickVisible,
        ui: t.borderVisible,
        it: this.Cs,
      });
    }
  }
  class It extends L {
    constructor() {
      super(...arguments), (this.It = null), (this.Re = []);
    }
    tt(t) {
      (this.It = t), (this.Re = []);
    }
    Z({ context: t, horizontalPixelRatio: i, verticalPixelRatio: n }) {
      if (null === this.It || 0 === this.It.nt.length || null === this.It.it)
        return;
      this.Re.length || this.De(i);
      const s = Math.max(1, Math.floor(n)),
        e = Math.round(this.It.Oe * n) - Math.floor(s / 2),
        r = e + s;
      for (let i = this.It.it.from; i < this.It.it.to; i++) {
        const h = this.It.nt[i],
          l = this.Re[i - this.It.it.from],
          a = Math.round(h.et * n);
        let o, _;
        (t.fillStyle = h.ie),
          a <= e
            ? ((o = a), (_ = r))
            : ((o = e), (_ = a - Math.floor(s / 2) + s)),
          t.fillRect(l.Ms, o, l.ci - l.Ms + 1, _ - o);
      }
    }
    De(t) {
      if (null === this.It || 0 === this.It.nt.length || null === this.It.it)
        return void (this.Re = []);
      const i = Math.ceil(this.It.Ks * t) <= 1 ? 0 : Math.max(1, Math.floor(t)),
        n = Math.round(this.It.Ks * t) - i;
      this.Re = new Array(this.It.it.to - this.It.it.from);
      for (let i = this.It.it.from; i < this.It.it.to; i++) {
        const s = this.It.nt[i],
          e = Math.round(s.st * t);
        let r, h;
        if (n % 2) {
          const t = (n - 1) / 2;
          (r = e - t), (h = e + t);
        } else {
          const t = n / 2;
          (r = e - t), (h = e + t - 1);
        }
        this.Re[i - this.It.it.from] = {
          Ms: r,
          ci: h,
          Be: e,
          Ee: s.st * t,
          _t: s._t,
        };
      }
      for (let t = this.It.it.from + 1; t < this.It.it.to; t++) {
        const n = this.Re[t - this.It.it.from],
          s = this.Re[t - this.It.it.from - 1];
        n._t === s._t + 1 &&
          n.Ms - s.ci !== i + 1 &&
          (s.Be > s.Ee ? (s.ci = n.Ms - i - 1) : (n.Ms = s.ci + i + 1));
      }
      let s = Math.ceil(this.It.Ks * t);
      for (let t = this.It.it.from; t < this.It.it.to; t++) {
        const i = this.Re[t - this.It.it.from];
        i.ci < i.Ms && (i.ci = i.Ms);
        const n = i.ci - i.Ms + 1;
        s = Math.min(n, s);
      }
      if (i > 0 && s < 4)
        for (let t = this.It.it.from; t < this.It.it.to; t++) {
          const i = this.Re[t - this.It.it.from];
          i.ci - i.Ms + 1 > s && (i.Be > i.Ee ? (i.ci -= 1) : (i.Ms += 1));
        }
    }
  }
  class Nt extends xt {
    constructor() {
      super(...arguments), (this.Os = new It());
    }
    qs(t, i, n) {
      return Object.assign(Object.assign({}, this.Hs(t, i)), n.Es(t));
    }
    Ws() {
      const t = {
        nt: this.ks,
        Ks: this.Ps.yt().Ks(),
        it: this.Cs,
        Oe: this.Ts.Ot().Dt(this.Ts.F().base, h(this.Ts.Tt()).Bt),
      };
      this.Os.tt(t);
    }
  }
  class Vt extends xt {
    constructor() {
      super(...arguments), (this.Os = new vt());
    }
    qs(t, i, n) {
      return Object.assign(Object.assign({}, this.Hs(t, i)), n.Es(t));
    }
    Ws() {
      const t = this.Ts.F(),
        i = {
          nt: this.ks,
          Ft: t.lineStyle,
          cs: t.lineType,
          rt: t.lineWidth,
          it: this.Cs,
          us: this.Ps.yt().Ks(),
        };
      this.Os.tt(i);
    }
  }
  const Ft = /[2-9]/g;
  class Wt {
    constructor(t = 50) {
      (this.Ae = 0),
        (this.Le = 1),
        (this.ze = 1),
        (this.Ie = {}),
        (this.Ne = new Map()),
        (this.Ve = t);
    }
    Fe() {
      (this.Ae = 0),
        this.Ne.clear(),
        (this.Le = 1),
        (this.ze = 1),
        (this.Ie = {});
    }
    Si(t, i, n) {
      return this.We(t, i, n).width;
    }
    Mi(t, i, n) {
      const s = this.We(t, i, n);
      return (
        ((s.actualBoundingBoxAscent || 0) - (s.actualBoundingBoxDescent || 0)) /
        2
      );
    }
    We(t, i, n) {
      const s = n || Ft,
        e = String(i).replace(s, "0");
      if (this.Ne.has(e)) return r(this.Ne.get(e)).je;
      if (this.Ae === this.Ve) {
        const t = this.Ie[this.ze];
        delete this.Ie[this.ze], this.Ne.delete(t), this.ze++, this.Ae--;
      }
      t.save(), (t.textBaseline = "middle");
      const h = t.measureText(e);
      return (
        t.restore(),
        (0 === h.width && i.length) ||
          (this.Ne.set(e, { je: h, $e: this.Le }),
          (this.Ie[this.Le] = e),
          this.Ae++,
          this.Le++),
        h
      );
    }
  }
  class jt {
    constructor(t) {
      (this.He = null), (this.S = null), (this.Ue = "right"), (this.qe = t);
    }
    Ye(t, i, n) {
      (this.He = t), (this.S = i), (this.Ue = n);
    }
    X(t) {
      null !== this.S &&
        null !== this.He &&
        this.He.X(t, this.S, this.qe, this.Ue);
    }
  }
  class $t {
    constructor(t, i, n) {
      (this.Xe = t),
        (this.qe = new Wt(50)),
        (this.Ze = i),
        (this.V = n),
        (this.W = -1),
        (this.jt = new jt(this.qe));
    }
    Mt() {
      const t = this.V.Ke(this.Ze);
      if (null === t) return null;
      const i = t.Ge(this.Ze) ? t.Je() : this.Ze.Ot();
      if (null === i) return null;
      const n = t.Qe(i);
      if ("overlay" === n) return null;
      const s = this.V.tr();
      return (
        s.T !== this.W && ((this.W = s.T), this.qe.Fe()),
        this.jt.Ye(this.Xe.Li(), s, n),
        this.jt
      );
    }
  }
  class Ht extends L {
    constructor() {
      super(...arguments), (this.It = null);
    }
    tt(t) {
      this.It = t;
    }
    ir(t, i) {
      var n;
      if (!(null === (n = this.It) || void 0 === n ? void 0 : n.Ct))
        return null;
      const { et: s, rt: e, nr: r } = this.It;
      return i >= s - e - 7 && i <= s + e + 7 ? { sr: this.It, nr: r } : null;
    }
    Z({
      context: t,
      bitmapSize: i,
      horizontalPixelRatio: e,
      verticalPixelRatio: r,
    }) {
      if (null === this.It) return;
      if (!1 === this.It.Ct) return;
      const h = Math.round(this.It.et * r);
      h < 0 ||
        h > i.height ||
        ((t.lineCap = "butt"),
        (t.strokeStyle = this.It.D),
        (t.lineWidth = Math.floor(this.It.rt * e)),
        n(t, this.It.Ft),
        s(t, h, 0, i.width));
    }
  }
  class Ut {
    constructor(t) {
      (this.er = { et: 0, D: "rgba(0, 0, 0, 0)", rt: 1, Ft: 0, Ct: !1 }),
        (this.rr = new Ht()),
        (this.vt = !0),
        (this.Ts = t),
        (this.Ps = t.Ut()),
        this.rr.tt(this.er);
    }
    gt() {
      this.vt = !0;
    }
    Mt() {
      return this.Ts.Ct()
        ? (this.vt && (this.hr(), (this.vt = !1)), this.rr)
        : null;
    }
  }
  class qt extends Ut {
    constructor(t) {
      super(t);
    }
    hr() {
      this.er.Ct = !1;
      const t = this.Ts.Ot(),
        i = t.lr().lr;
      if (2 !== i && 3 !== i) return;
      const n = this.Ts.F();
      if (!n.baseLineVisible || !this.Ts.Ct()) return;
      const s = this.Ts.Tt();
      null !== s &&
        ((this.er.Ct = !0),
        (this.er.et = t.Dt(s.Bt, s.Bt)),
        (this.er.D = n.baseLineColor),
        (this.er.rt = n.baseLineWidth),
        (this.er.Ft = n.baseLineStyle));
    }
  }
  class Yt extends L {
    constructor() {
      super(...arguments), (this.It = null);
    }
    tt(t) {
      this.It = t;
    }
    ar() {
      return this.It;
    }
    Z({ context: t, horizontalPixelRatio: i, verticalPixelRatio: n }) {
      const s = this.It;
      if (null === s) return;
      const e = Math.max(1, Math.floor(i)),
        r = (e % 2) / 2,
        h = Math.round(s.Ee.x * i) + r,
        l = s.Ee.y * n;
      (t.fillStyle = s._r), t.beginPath();
      const a = Math.max(2, 1.5 * s.ur) * i;
      t.arc(h, l, a, 0, 2 * Math.PI, !1),
        t.fill(),
        (t.fillStyle = s.cr),
        t.beginPath(),
        t.arc(h, l, s.lt * i, 0, 2 * Math.PI, !1),
        t.fill(),
        (t.lineWidth = e),
        (t.strokeStyle = s.dr),
        t.beginPath(),
        t.arc(h, l, s.lt * i + e / 2, 0, 2 * Math.PI, !1),
        t.stroke();
    }
  }
  const Xt = [
    { pr: 0, vr: 0.25, mr: 4, br: 10, gr: 0.25, wr: 0, Mr: 0.4, Sr: 0.8 },
    { pr: 0.25, vr: 0.525, mr: 10, br: 14, gr: 0, wr: 0, Mr: 0.8, Sr: 0 },
    { pr: 0.525, vr: 1, mr: 14, br: 14, gr: 0, wr: 0, Mr: 0, Sr: 0 },
  ];
  function Zt(t, i, n, s) {
    return (function (t, i) {
      if ("transparent" === t) return t;
      const n = p(t),
        s = n[3];
      return `rgba(${n[0]}, ${n[1]}, ${n[2]}, ${i * s})`;
    })(t, n + (s - n) * i);
  }
  function Kt(t, i) {
    const n = (t % 2600) / 2600;
    let s;
    for (const t of Xt)
      if (n >= t.pr && n <= t.vr) {
        s = t;
        break;
      }
    e(void 0 !== s, "Last price animation internal logic error");
    const r = (n - s.pr) / (s.vr - s.pr);
    return {
      cr: Zt(i, r, s.gr, s.wr),
      dr: Zt(i, r, s.Mr, s.Sr),
      lt: ((h = r), (l = s.mr), (a = s.br), l + (a - l) * h),
    };
    var h, l, a;
  }
  class Gt {
    constructor(t) {
      (this.jt = new Yt()),
        (this.vt = !0),
        (this.yr = !0),
        (this.kr = performance.now()),
        (this.Cr = this.kr - 1),
        (this.Tr = t);
    }
    Pr() {
      (this.Cr = this.kr - 1), this.gt();
    }
    Rr() {
      if ((this.gt(), 2 === this.Tr.F().lastPriceAnimation)) {
        const t = performance.now(),
          i = this.Cr - t;
        if (i > 0) return void (i < 650 && (this.Cr += 2600));
        (this.kr = t), (this.Cr = t + 2600);
      }
    }
    gt() {
      this.vt = !0;
    }
    Dr() {
      this.yr = !0;
    }
    Ct() {
      return 0 !== this.Tr.F().lastPriceAnimation;
    }
    Or() {
      switch (this.Tr.F().lastPriceAnimation) {
        case 0:
          return !1;
        case 1:
          return !0;
        case 2:
          return performance.now() <= this.Cr;
      }
    }
    Mt() {
      return (
        this.vt
          ? (this.St(), (this.vt = !1), (this.yr = !1))
          : this.yr && (this.Br(), (this.yr = !1)),
        this.jt
      );
    }
    St() {
      this.jt.tt(null);
      const t = this.Tr.Ut().yt(),
        i = t.Ns(),
        n = this.Tr.Tt();
      if (null === i || null === n) return;
      const s = this.Tr.Er(!0);
      if (s.Ar || !i.Lr(s.Ys)) return;
      const e = { x: t.zt(s.Ys), y: this.Tr.Ot().Dt(s.ut, n.Bt) },
        r = s.D,
        h = this.Tr.F().lineWidth,
        l = Kt(this.zr(), r);
      this.jt.tt({ _r: r, ur: h, cr: l.cr, dr: l.dr, lt: l.lt, Ee: e });
    }
    Br() {
      const t = this.jt.ar();
      if (null !== t) {
        const i = Kt(this.zr(), t._r);
        (t.cr = i.cr), (t.dr = i.dr), (t.lt = i.lt);
      }
    }
    zr() {
      return this.Or() ? performance.now() - this.kr : 2599;
    }
  }
  function Jt(t, i) {
    return Ot(Math.min(Math.max(t, 12), 30) * i);
  }
  function Qt(t, i) {
    switch (t) {
      case "arrowDown":
      case "arrowUp":
        return Jt(i, 1);
      case "circle":
        return Jt(i, 0.8);
      case "square":
        return Jt(i, 0.7);
    }
  }
  function ti(t) {
    return (function (t) {
      const i = Math.ceil(t);
      return i % 2 != 0 ? i - 1 : i;
    })(Jt(t, 1));
  }
  function ii(t) {
    return Math.max(Jt(t, 0.1), 3);
  }
  function ni(t, i, n, s, e) {
    const r = Qt("square", n),
      h = (r - 1) / 2,
      l = t - h,
      a = i - h;
    return s >= l && s <= l + r && e >= a && e <= a + r;
  }
  function si(t, i, n, s, e) {
    const r = (Qt("arrowUp", e) - 1) / 2,
      h = (Ot(e / 2) - 1) / 2;
    i.beginPath(),
      t
        ? (i.moveTo(n - r, s),
          i.lineTo(n, s - r),
          i.lineTo(n + r, s),
          i.lineTo(n + h, s),
          i.lineTo(n + h, s + r),
          i.lineTo(n - h, s + r),
          i.lineTo(n - h, s))
        : (i.moveTo(n - r, s),
          i.lineTo(n, s + r),
          i.lineTo(n + r, s),
          i.lineTo(n + h, s),
          i.lineTo(n + h, s - r),
          i.lineTo(n - h, s - r),
          i.lineTo(n - h, s)),
      i.fill();
  }
  function ei(t, i, n, s, e, r) {
    return ni(i, n, s, e, r);
  }
  class ri extends D {
    constructor() {
      super(...arguments),
        (this.It = null),
        (this.qe = new Wt()),
        (this.W = -1),
        (this.j = ""),
        (this.Ir = "");
    }
    tt(t) {
      this.It = t;
    }
    Ye(t, i) {
      (this.W === t && this.j === i) ||
        ((this.W = t), (this.j = i), (this.Ir = T(t, i)), this.qe.Fe());
    }
    ir(t, i) {
      if (null === this.It || null === this.It.it) return null;
      for (let n = this.It.it.from; n < this.It.it.to; n++) {
        const s = this.It.nt[n];
        if (li(s, t, i)) return { sr: s.Nr, nr: s.nr };
      }
      return null;
    }
    Z({ context: t }, i, n) {
      if (null !== this.It && null !== this.It.it) {
        (t.textBaseline = "middle"), (t.font = this.Ir);
        for (let i = this.It.it.from; i < this.It.it.to; i++) {
          const n = this.It.nt[i];
          void 0 !== n.Gt &&
            ((n.Gt.$i = this.qe.Si(t, n.Gt.Vr)),
            (n.Gt.Lt = this.W),
            (n.Gt.st = n.st - n.Gt.$i / 2)),
            hi(n, t);
        }
      }
    }
  }
  function hi(t, i) {
    (i.fillStyle = t.D),
      void 0 !== t.Gt &&
        (function (t, i, n, s) {
          t.fillText(i, n, s);
        })(i, t.Gt.Vr, t.Gt.st, t.Gt.et),
      (function (t, i) {
        if (0 === t.Vs) return;
        switch (t.Fr) {
          case "arrowDown":
            return void si(!1, i, t.st, t.et, t.Vs);
          case "arrowUp":
            return void si(!0, i, t.st, t.et, t.Vs);
          case "circle":
            return void (function (t, i, n, s) {
              const e = (Qt("circle", s) - 1) / 2;
              t.beginPath(), t.arc(i, n, e, 0, 2 * Math.PI, !1), t.fill();
            })(i, t.st, t.et, t.Vs);
          case "square":
            return void (function (t, i, n, s) {
              const e = Qt("square", s),
                r = (e - 1) / 2,
                h = i - r,
                l = n - r;
              t.fillRect(h, l, e, e);
            })(i, t.st, t.et, t.Vs);
        }
        t.Fr;
      })(t, i);
  }
  function li(t, i, n) {
    return (
      !(
        void 0 === t.Gt ||
        !(function (t, i, n, s, e, r) {
          const h = s / 2;
          return e >= t && e <= t + n && r >= i - h && r <= i + h;
        })(t.Gt.st, t.Gt.et, t.Gt.$i, t.Gt.Lt, i, n)
      ) ||
      (function (t, i, n) {
        if (0 === t.Vs) return !1;
        switch (t.Fr) {
          case "arrowDown":
          case "arrowUp":
            return ei(0, t.st, t.et, t.Vs, i, n);
          case "circle":
            return (function (t, i, n, s, e) {
              const r = 2 + Qt("circle", n) / 2,
                h = t - s,
                l = i - e;
              return Math.sqrt(h * h + l * l) <= r;
            })(t.st, t.et, t.Vs, i, n);
          case "square":
            return ni(t.st, t.et, t.Vs, i, n);
        }
      })(t, i, n)
    );
  }
  function ai(t, i, n, s, e, r, h, l, a) {
    const o = g(n) ? n : n.ce,
      _ = g(n) ? n : n._e,
      u = g(n) ? n : n.ue,
      c = g(i.size) ? Math.max(i.size, 0) : 1,
      d = ti(l.Ks()) * c,
      f = d / 2;
    switch (((t.Vs = d), i.position)) {
      case "inBar":
        return (
          (t.et = h.Dt(o, a)),
          void (void 0 !== t.Gt && (t.Gt.et = t.et + f + r + 0.6 * e))
        );
      case "aboveBar":
        return (
          (t.et = h.Dt(_, a) - f - s.Wr),
          void 0 !== t.Gt &&
            ((t.Gt.et = t.et - f - 0.6 * e), (s.Wr += 1.2 * e)),
          void (s.Wr += d + r)
        );
      case "belowBar":
        return (
          (t.et = h.Dt(u, a) + f + s.jr),
          void 0 !== t.Gt &&
            ((t.Gt.et = t.et + f + r + 0.6 * e), (s.jr += 1.2 * e)),
          void (s.jr += d + r)
        );
    }
    i.position;
  }
  class oi {
    constructor(t, i) {
      (this.vt = !0),
        (this.$r = !0),
        (this.Hr = !0),
        (this.Ur = null),
        (this.jt = new ri()),
        (this.Tr = t),
        (this.Hi = i),
        (this.It = { nt: [], it: null });
    }
    gt(t) {
      (this.vt = !0), (this.Hr = !0), "data" === t && (this.$r = !0);
    }
    Mt(t) {
      if (!this.Tr.Ct()) return null;
      this.vt && this.qr();
      const i = this.Hi.F().layout;
      return this.jt.Ye(i.fontSize, i.fontFamily), this.jt.tt(this.It), this.jt;
    }
    Yr() {
      if (this.Hr) {
        if (this.Tr.Xr().length > 0) {
          const t = this.Hi.yt().Ks(),
            i = ii(t),
            n = 1.5 * ti(t) + 2 * i;
          this.Ur = { above: n, below: n };
        } else this.Ur = null;
        this.Hr = !1;
      }
      return this.Ur;
    }
    qr() {
      const t = this.Tr.Ot(),
        i = this.Hi.yt(),
        n = this.Tr.Xr();
      this.$r &&
        ((this.It.nt = n.map((t) => ({
          _t: t.time,
          st: 0,
          et: 0,
          Vs: 0,
          Fr: t.shape,
          D: t.color,
          Nr: t.internalId,
          nr: t.id,
          Gt: void 0,
        }))),
        (this.$r = !1));
      const s = this.Hi.F().layout;
      this.It.it = null;
      const e = i.Ns();
      if (null === e) return;
      const r = this.Tr.Tt();
      if (null === r) return;
      if (0 === this.It.nt.length) return;
      let h = NaN;
      const l = ii(i.Ks()),
        a = { Wr: l, jr: l };
      this.It.it = Mt(this.It.nt, e, !0);
      for (let e = this.It.it.from; e < this.It.it.to; e++) {
        const o = n[e];
        o.time !== h && ((a.Wr = l), (a.jr = l), (h = o.time));
        const _ = this.It.nt[e];
        (_.st = i.zt(o.time)),
          void 0 !== o.text &&
            o.text.length > 0 &&
            (_.Gt = { Vr: o.text, st: 0, et: 0, $i: 0, Lt: 0 });
        const u = this.Tr.Zr(o.time);
        null !== u && ai(_, o, u, a, s.fontSize, l, t, i, r.Bt);
      }
      this.vt = !1;
    }
  }
  class _i extends Ut {
    constructor(t) {
      super(t);
    }
    hr() {
      const t = this.er;
      t.Ct = !1;
      const i = this.Ts.F();
      if (!i.priceLineVisible || !this.Ts.Ct()) return;
      const n = this.Ts.Er(0 === i.priceLineSource);
      n.Ar ||
        ((t.Ct = !0),
        (t.et = n.yi),
        (t.D = this.Ts.Kr(n.D)),
        (t.rt = i.priceLineWidth),
        (t.Ft = i.priceLineStyle));
    }
  }
  class ui extends U {
    constructor(t) {
      super(), (this.$t = t);
    }
    zi(t, i, n) {
      (t.Ct = !1), (i.Ct = !1);
      const s = this.$t;
      if (!s.Ct()) return;
      const e = s.F(),
        r = e.lastValueVisible,
        h = "" !== s.Gr(),
        l = 0 === e.seriesLastValueMode,
        a = s.Er(!1);
      if (a.Ar) return;
      r && ((t.Gt = this.Jr(a, r, l)), (t.Ct = 0 !== t.Gt.length)),
        (h || l) && ((i.Gt = this.Qr(a, r, h, l)), (i.Ct = i.Gt.length > 0));
      const o = s.Kr(a.D),
        _ = v(o);
      (n.t = _.t),
        (n.yi = a.yi),
        (i.Et = s.Ut().At(a.yi / s.Ot().Lt())),
        (t.Et = o),
        (t.D = _.i),
        (i.D = _.i);
    }
    Qr(t, i, n, s) {
      let e = "";
      const r = this.$t.Gr();
      return (
        n && 0 !== r.length && (e += `${r} `),
        i && s && (e += this.$t.Ot().th() ? t.ih : t.nh),
        e.trim()
      );
    }
    Jr(t, i, n) {
      return i ? (n ? (this.$t.Ot().th() ? t.nh : t.ih) : t.Gt) : "";
    }
  }
  class ci {
    constructor(t, i) {
      (this.sh = t), (this.eh = i);
    }
    rh(t) {
      return null !== t && this.sh === t.sh && this.eh === t.eh;
    }
    hh() {
      return new ci(this.sh, this.eh);
    }
    lh() {
      return this.sh;
    }
    ah() {
      return this.eh;
    }
    oh() {
      return this.eh - this.sh;
    }
    Vi() {
      return (
        this.eh === this.sh || Number.isNaN(this.eh) || Number.isNaN(this.sh)
      );
    }
    Qn(t) {
      return null === t
        ? this
        : new ci(Math.min(this.lh(), t.lh()), Math.max(this.ah(), t.ah()));
    }
    _h(t) {
      if (!g(t)) return;
      if (0 === this.eh - this.sh) return;
      const i = 0.5 * (this.eh + this.sh);
      let n = this.eh - i,
        s = this.sh - i;
      (n *= t), (s *= t), (this.eh = i + n), (this.sh = i + s);
    }
    uh(t) {
      g(t) && ((this.eh += t), (this.sh += t));
    }
    dh() {
      return { minValue: this.sh, maxValue: this.eh };
    }
    static fh(t) {
      return null === t ? null : new ci(t.minValue, t.maxValue);
    }
  }
  class di {
    constructor(t, i) {
      (this.ph = t), (this.mh = i || null);
    }
    bh() {
      return this.ph;
    }
    gh() {
      return this.mh;
    }
    dh() {
      return null === this.ph
        ? null
        : { priceRange: this.ph.dh(), margins: this.mh || void 0 };
    }
    static fh(t) {
      return null === t ? null : new di(ci.fh(t.priceRange), t.margins);
    }
  }
  class fi extends Ut {
    constructor(t, i) {
      super(t), (this.wh = i);
    }
    hr() {
      const t = this.er;
      t.Ct = !1;
      const i = this.wh.F();
      if (!this.Ts.Ct() || !i.lineVisible) return;
      const n = this.wh.Mh();
      null !== n &&
        ((t.Ct = !0),
        (t.et = n),
        (t.D = i.color),
        (t.rt = i.lineWidth),
        (t.Ft = i.lineStyle),
        (t.nr = this.wh.F().id));
    }
  }
  class pi extends U {
    constructor(t, i) {
      super(), (this.Tr = t), (this.wh = i);
    }
    zi(t, i, n) {
      (t.Ct = !1), (i.Ct = !1);
      const s = this.wh.F(),
        e = s.axisLabelVisible,
        r = "" !== s.title,
        h = this.Tr;
      if (!e || !h.Ct()) return;
      const l = this.wh.Mh();
      if (null === l) return;
      r && ((i.Gt = s.title), (i.Ct = !0)),
        (i.Et = h.Ut().At(l / h.Ot().Lt())),
        (t.Gt = this.Sh(s.price)),
        (t.Ct = !0);
      const a = v(s.axisLabelColor || s.color);
      n.t = a.t;
      const o = s.axisLabelTextColor || a.i;
      (t.D = o), (i.D = o), (n.yi = l);
    }
    Sh(t) {
      const i = this.Tr.Tt();
      return null === i ? "" : this.Tr.Ot().Fi(t, i.Bt);
    }
  }
  class vi {
    constructor(t, i) {
      (this.Tr = t),
        (this.un = i),
        (this.xh = new fi(t, this)),
        (this.Xe = new pi(t, this)),
        (this.yh = new $t(this.Xe, t, t.Ut()));
    }
    kh(t) {
      b(this.un, t), this.gt(), this.Tr.Ut().Ch();
    }
    F() {
      return this.un;
    }
    Th() {
      return this.xh;
    }
    Ph() {
      return this.yh;
    }
    Rh() {
      return this.Xe;
    }
    gt() {
      this.xh.gt(), this.Xe.gt();
    }
    Mh() {
      const t = this.Tr,
        i = t.Ot();
      if (t.Ut().yt().Vi() || i.Vi()) return null;
      const n = t.Tt();
      return null === n ? null : i.Dt(this.un.price, n.Bt);
    }
  }
  class mi extends K {
    constructor(t) {
      super(), (this.Hi = t);
    }
    Ut() {
      return this.Hi;
    }
  }
  const bi = {
    Bar: (t, i, n, s) => {
      var e;
      const r = i.upColor,
        a = i.downColor,
        o = h(t(n, s)),
        _ = l(o.Bt[0]) <= l(o.Bt[3]);
      return { ie: null !== (e = o.D) && void 0 !== e ? e : _ ? r : a };
    },
    Candlestick: (t, i, n, s) => {
      var e, r, a;
      const o = i.upColor,
        _ = i.downColor,
        u = i.borderUpColor,
        c = i.borderDownColor,
        d = i.wickUpColor,
        f = i.wickDownColor,
        p = h(t(n, s)),
        v = l(p.Bt[0]) <= l(p.Bt[3]);
      return {
        ie: null !== (e = p.D) && void 0 !== e ? e : v ? o : _,
        Pe: null !== (r = p.Et) && void 0 !== r ? r : v ? u : c,
        Te: null !== (a = p.Dh) && void 0 !== a ? a : v ? d : f,
      };
    },
    Area: (t, i, n, s) => {
      var e, r, l, a;
      const o = h(t(n, s));
      return {
        ie: null !== (e = o.ot) && void 0 !== e ? e : i.lineColor,
        ot: null !== (r = o.ot) && void 0 !== r ? r : i.lineColor,
        bs: null !== (l = o.bs) && void 0 !== l ? l : i.topColor,
        gs: null !== (a = o.gs) && void 0 !== a ? a : i.bottomColor,
      };
    },
    Baseline: (t, i, n, s) => {
      var e, r, l, a, o, _;
      const u = h(t(n, s));
      return {
        ie: u.Bt[3] >= i.baseValue.price ? i.topLineColor : i.bottomLineColor,
        be: null !== (e = u.be) && void 0 !== e ? e : i.topLineColor,
        ge: null !== (r = u.ge) && void 0 !== r ? r : i.bottomLineColor,
        de: null !== (l = u.de) && void 0 !== l ? l : i.topFillColor1,
        fe: null !== (a = u.fe) && void 0 !== a ? a : i.topFillColor2,
        pe: null !== (o = u.pe) && void 0 !== o ? o : i.bottomFillColor1,
        ve: null !== (_ = u.ve) && void 0 !== _ ? _ : i.bottomFillColor2,
      };
    },
    Line: (t, i, n, s) => {
      var e, r;
      const l = h(t(n, s));
      return {
        ie: null !== (e = l.D) && void 0 !== e ? e : i.color,
        ot: null !== (r = l.D) && void 0 !== r ? r : i.color,
      };
    },
    Histogram: (t, i, n, s) => {
      var e;
      return { ie: null !== (e = h(t(n, s)).D) && void 0 !== e ? e : i.color };
    },
  };
  class gi {
    constructor(t) {
      (this.Oh = (t, i) => (void 0 !== i ? i.Bt : this.Tr.An().Bh(t))),
        (this.Tr = t),
        (this.Eh = bi[t.Ah()]);
    }
    Es(t, i) {
      return this.Eh(this.Oh, this.Tr.F(), t, i);
    }
  }
  var wi;
  !(function (t) {
    (t[(t.NearestLeft = -1)] = "NearestLeft"),
      (t[(t.None = 0)] = "None"),
      (t[(t.NearestRight = 1)] = "NearestRight");
  })(wi || (wi = {}));
  const Mi = 30;
  class Si {
    constructor() {
      (this.Lh = []), (this.zh = new Map()), (this.Ih = new Map());
    }
    Nh() {
      return this.Vs() > 0 ? this.Lh[this.Lh.length - 1] : null;
    }
    Vh() {
      return this.Vs() > 0 ? this.Fh(0) : null;
    }
    En() {
      return this.Vs() > 0 ? this.Fh(this.Lh.length - 1) : null;
    }
    Vs() {
      return this.Lh.length;
    }
    Vi() {
      return 0 === this.Vs();
    }
    Lr(t) {
      return null !== this.Wh(t, 0);
    }
    Bh(t) {
      return this.jh(t);
    }
    jh(t, i = 0) {
      const n = this.Wh(t, i);
      return null === n
        ? null
        : Object.assign(Object.assign({}, this.$h(n)), { Ys: this.Fh(n) });
    }
    Us() {
      return this.Lh;
    }
    Hh(t, i, n) {
      if (this.Vi()) return null;
      let s = null;
      for (const e of n) {
        s = xi(s, this.Uh(t, i, e));
      }
      return s;
    }
    tt(t) {
      this.Ih.clear(), this.zh.clear(), (this.Lh = t);
    }
    Fh(t) {
      return this.Lh[t].Ys;
    }
    $h(t) {
      return this.Lh[t];
    }
    Wh(t, i) {
      const n = this.qh(t);
      if (null === n && 0 !== i)
        switch (i) {
          case -1:
            return this.Yh(t);
          case 1:
            return this.Xh(t);
          default:
            throw new TypeError("Unknown search mode");
        }
      return n;
    }
    Yh(t) {
      let i = this.Zh(t);
      return (
        i > 0 && (i -= 1), i !== this.Lh.length && this.Fh(i) < t ? i : null
      );
    }
    Xh(t) {
      const i = this.Kh(t);
      return i !== this.Lh.length && t < this.Fh(i) ? i : null;
    }
    qh(t) {
      const i = this.Zh(t);
      return i === this.Lh.length || t < this.Lh[i].Ys ? null : i;
    }
    Zh(t) {
      return mt(this.Lh, t, (t, i) => t.Ys < i);
    }
    Kh(t) {
      return bt(this.Lh, t, (t, i) => i.Ys > t);
    }
    Gh(t, i, n) {
      let s = null;
      for (let e = t; e < i; e++) {
        const t = this.Lh[e].Bt[n];
        Number.isNaN(t) ||
          (null === s
            ? (s = { Jh: t, Qh: t })
            : (t < s.Jh && (s.Jh = t), t > s.Qh && (s.Qh = t)));
      }
      return s;
    }
    Uh(t, i, n) {
      if (this.Vi()) return null;
      let s = null;
      const e = h(this.Vh()),
        r = h(this.En()),
        l = Math.max(t, e),
        a = Math.min(i, r),
        o = Math.ceil(l / Mi) * Mi,
        _ = Math.max(o, Math.floor(a / Mi) * Mi);
      {
        const t = this.Zh(l),
          e = this.Kh(Math.min(a, o, i));
        s = xi(s, this.Gh(t, e, n));
      }
      let u = this.zh.get(n);
      void 0 === u && ((u = new Map()), this.zh.set(n, u));
      for (let t = Math.max(o + 1, l); t < _; t += Mi) {
        const i = Math.floor(t / Mi);
        let e = u.get(i);
        if (void 0 === e) {
          const t = this.Zh(i * Mi),
            s = this.Kh((i + 1) * Mi - 1);
          (e = this.Gh(t, s, n)), u.set(i, e);
        }
        s = xi(s, e);
      }
      {
        const t = this.Zh(_),
          i = this.Kh(a);
        s = xi(s, this.Gh(t, i, n));
      }
      return s;
    }
  }
  function xi(t, i) {
    if (null === t) return i;
    if (null === i) return t;
    return { Jh: Math.min(t.Jh, i.Jh), Qh: Math.max(t.Qh, i.Qh) };
  }
  class yi extends mi {
    constructor(t, i, n) {
      super(t),
        (this.It = new Si()),
        (this.xh = new _i(this)),
        (this.tl = []),
        (this.il = new qt(this)),
        (this.nl = null),
        (this.sl = null),
        (this.el = []),
        (this.rl = []),
        (this.hl = null),
        (this.un = i),
        (this.ll = n);
      const s = new ui(this);
      (this.rn = [s]),
        (this.yh = new $t(s, this, t)),
        ("Area" !== n && "Line" !== n && "Baseline" !== n) ||
          (this.nl = new Gt(this)),
        this.al(),
        this.ol();
    }
    M() {
      null !== this.hl && clearTimeout(this.hl);
    }
    Kr(t) {
      return this.un.priceLineColor || t;
    }
    Er(t) {
      const i = { Ar: !0 },
        n = this.Ot();
      if (this.Ut().yt().Vi() || n.Vi() || this.It.Vi()) return i;
      const s = this.Ut().yt().Ns(),
        e = this.Tt();
      if (null === s || null === e) return i;
      let r, h;
      if (t) {
        const t = this.It.Nh();
        if (null === t) return i;
        (r = t), (h = t.Ys);
      } else {
        const t = this.It.jh(s.ci(), -1);
        if (null === t) return i;
        if (((r = this.It.Bh(t.Ys)), null === r)) return i;
        h = t.Ys;
      }
      const l = r.Bt[3],
        a = this.As().Es(h, { Bt: r }),
        o = n.Dt(l, e.Bt);
      return {
        Ar: !1,
        ut: l,
        Gt: n.Fi(l, e.Bt),
        ih: n._l(l),
        nh: n.ul(l, e.Bt),
        D: a.ie,
        yi: o,
        Ys: h,
      };
    }
    As() {
      return null !== this.sl || (this.sl = new gi(this)), this.sl;
    }
    F() {
      return this.un;
    }
    kh(t) {
      const i = t.priceScaleId;
      void 0 !== i && i !== this.un.priceScaleId && this.Ut().cl(this, i),
        b(this.un, t),
        void 0 !== t.priceFormat && (this.al(), this.Ut().dl()),
        this.Ut().fl(this),
        this.Ut().pl(),
        this.bn.gt("options");
    }
    tt(t, i) {
      this.It.tt(t),
        this.vl(),
        this.bn.gt("data"),
        this.cn.gt("data"),
        null !== this.nl &&
          (i && i.ml ? this.nl.Rr() : 0 === t.length && this.nl.Pr());
      const n = this.Ut().Ke(this);
      this.Ut().bl(n), this.Ut().fl(this), this.Ut().pl(), this.Ut().Ch();
    }
    gl(t) {
      (this.el = t), this.vl();
      const i = this.Ut().Ke(this);
      this.cn.gt("data"),
        this.Ut().bl(i),
        this.Ut().fl(this),
        this.Ut().pl(),
        this.Ut().Ch();
    }
    wl() {
      return this.el;
    }
    Xr() {
      return this.rl;
    }
    Ml(t) {
      const i = new vi(this, t);
      return this.tl.push(i), this.Ut().fl(this), i;
    }
    Sl(t) {
      const i = this.tl.indexOf(t);
      -1 !== i && this.tl.splice(i, 1), this.Ut().fl(this);
    }
    Ah() {
      return this.ll;
    }
    Tt() {
      const t = this.xl();
      return null === t ? null : { Bt: t.Bt[3], yl: t._t };
    }
    xl() {
      const t = this.Ut().yt().Ns();
      if (null === t) return null;
      const i = t.Ms();
      return this.It.jh(i, 1);
    }
    An() {
      return this.It;
    }
    Zr(t) {
      const i = this.It.Bh(t);
      return null === i
        ? null
        : "Bar" === this.ll || "Candlestick" === this.ll
        ? { oe: i.Bt[0], _e: i.Bt[1], ue: i.Bt[2], ce: i.Bt[3] }
        : i.Bt[3];
    }
    kl(t) {
      const i = this.nl;
      return null !== i && i.Ct()
        ? (null === this.hl &&
            i.Or() &&
            (this.hl = setTimeout(() => {
              (this.hl = null), this.Ut().Cl();
            }, 0)),
          i.Dr(),
          [i])
        : [];
    }
    Tn() {
      const t = [];
      this.Tl() || t.push(this.il), t.push(this.bn, this.xh, this.cn);
      const i = this.tl.map((t) => t.Th());
      return t.push(...i), t;
    }
    Ji(t) {
      return [this.yh, ...this.tl.map((t) => t.Ph())];
    }
    Pn(t, i) {
      if (i !== this.Yi && !this.Tl()) return [];
      const n = [...this.rn];
      for (const t of this.tl) n.push(t.Rh());
      return n;
    }
    Pl(t, i) {
      if (void 0 !== this.un.autoscaleInfoProvider) {
        const n = this.un.autoscaleInfoProvider(() => {
          const n = this.Rl(t, i);
          return null === n ? null : n.dh();
        });
        return di.fh(n);
      }
      return this.Rl(t, i);
    }
    Dl() {
      return this.un.priceFormat.minMove;
    }
    Ol() {
      return this.Bl;
    }
    Dn() {
      var t;
      this.bn.gt(), this.cn.gt();
      for (const t of this.rn) t.gt();
      for (const t of this.tl) t.gt();
      this.xh.gt(),
        this.il.gt(),
        null === (t = this.nl) || void 0 === t || t.gt();
    }
    Ot() {
      return h(super.Ot());
    }
    kt(t) {
      if (
        !(
          ("Line" === this.ll ||
            "Area" === this.ll ||
            "Baseline" === this.ll) &&
          this.un.crosshairMarkerVisible
        )
      )
        return null;
      const i = this.It.Bh(t);
      if (null === i) return null;
      return {
        ut: i.Bt[3],
        lt: this.El(),
        Et: this.Al(),
        Rt: this.Ll(),
        Pt: this.zl(t),
      };
    }
    Gr() {
      return this.un.title;
    }
    Ct() {
      return this.un.visible;
    }
    Tl() {
      return !Q(this.Ot().Il());
    }
    Rl(t, i) {
      if (!w(t) || !w(i) || this.It.Vi()) return null;
      const n =
          "Line" === this.ll ||
          "Area" === this.ll ||
          "Baseline" === this.ll ||
          "Histogram" === this.ll
            ? [3]
            : [2, 1],
        s = this.It.Hh(t, i, n);
      let e = null !== s ? new ci(s.Jh, s.Qh) : null;
      if ("Histogram" === this.Ah()) {
        const t = this.un.base,
          i = new ci(t, t);
        e = null !== e ? e.Qn(i) : i;
      }
      return new di(e, this.cn.Yr());
    }
    El() {
      switch (this.ll) {
        case "Line":
        case "Area":
        case "Baseline":
          return this.un.crosshairMarkerRadius;
      }
      return 0;
    }
    Al() {
      switch (this.ll) {
        case "Line":
        case "Area":
        case "Baseline": {
          const t = this.un.crosshairMarkerBorderColor;
          if (0 !== t.length) return t;
        }
      }
      return null;
    }
    Ll() {
      switch (this.ll) {
        case "Line":
        case "Area":
        case "Baseline":
          return this.un.crosshairMarkerBorderWidth;
      }
      return 0;
    }
    zl(t) {
      switch (this.ll) {
        case "Line":
        case "Area":
        case "Baseline": {
          const t = this.un.crosshairMarkerBackgroundColor;
          if (0 !== t.length) return t;
        }
      }
      return this.As().Es(t).ie;
    }
    al() {
      switch (this.un.priceFormat.type) {
        case "custom":
          this.Bl = { format: this.un.priceFormat.formatter };
          break;
        case "volume":
          this.Bl = new rt(this.un.priceFormat.precision);
          break;
        case "percent":
          this.Bl = new et(this.un.priceFormat.precision);
          break;
        default: {
          const t = Math.pow(10, this.un.priceFormat.precision);
          this.Bl = new st(t, this.un.priceFormat.minMove * t);
        }
      }
      null !== this.Yi && this.Yi.Nl();
    }
    vl() {
      const t = this.Ut().yt();
      if (!t.Vl() || this.It.Vi()) return void (this.rl = []);
      const i = h(this.It.Vh());
      this.rl = this.el.map((n, s) => {
        const e = h(t.Fl(n.time, !0)),
          r = e < i ? 1 : -1;
        return {
          time: h(this.It.jh(e, r)).Ys,
          position: n.position,
          shape: n.shape,
          color: n.color,
          id: n.id,
          internalId: s,
          text: n.text,
          size: n.size,
        };
      });
    }
    ol() {
      switch (((this.cn = new oi(this, this.Ut())), this.ll)) {
        case "Bar":
          this.bn = new Tt(this, this.Ut());
          break;
        case "Candlestick":
          this.bn = new zt(this, this.Ut());
          break;
        case "Line":
          this.bn = new Vt(this, this.Ut());
          break;
        case "Area":
          this.bn = new yt(this, this.Ut());
          break;
        case "Baseline":
          this.bn = new At(this, this.Ut());
          break;
        case "Histogram":
          this.bn = new Nt(this, this.Ut());
          break;
        default:
          throw Error("Unknown chart style assigned: " + this.ll);
      }
    }
  }
  class ki {
    constructor(t) {
      this.un = t;
    }
    Wl(t, i, n) {
      let s = t;
      if (0 === this.un.mode) return s;
      const e = n.fn(),
        r = e.Tt();
      if (null === r) return s;
      const h = e.Dt(t, r),
        a = n
          .jl()
          .filter((t) => t instanceof yi)
          .reduce((t, s) => {
            if (n.Ge(s) || !s.Ct()) return t;
            const e = s.Ot(),
              r = s.An();
            if (e.Vi() || !r.Lr(i)) return t;
            const h = r.Bh(i);
            if (null === h) return t;
            const a = l(s.Tt());
            return t.concat([e.Dt(h.Bt[3], a.Bt)]);
          }, []);
      if (0 === a.length) return s;
      a.sort((t, i) => Math.abs(t - h) - Math.abs(i - h));
      const o = a[0];
      return (s = e.pn(o, r)), s;
    }
  }
  class Ci extends L {
    constructor() {
      super(...arguments), (this.It = null);
    }
    tt(t) {
      this.It = t;
    }
    Z({
      context: t,
      bitmapSize: i,
      horizontalPixelRatio: s,
      verticalPixelRatio: e,
    }) {
      if (null === this.It) return;
      const r = Math.max(1, Math.floor(s));
      (t.lineWidth = r),
        (function (t, i) {
          t.save(), t.lineWidth % 2 && t.translate(0.5, 0.5), i(), t.restore();
        })(t, () => {
          const l = h(this.It);
          if (l.$l) {
            (t.strokeStyle = l.Hl), n(t, l.Ul), t.beginPath();
            for (const n of l.ql) {
              const e = Math.round(n.Yl * s);
              t.moveTo(e, -r), t.lineTo(e, i.height + r);
            }
            t.stroke();
          }
          if (l.Xl) {
            (t.strokeStyle = l.Zl), n(t, l.Kl), t.beginPath();
            for (const n of l.Gl) {
              const s = Math.round(n.Yl * e);
              t.moveTo(-r, s), t.lineTo(i.width + r, s);
            }
            t.stroke();
          }
        });
    }
  }
  class Ti {
    constructor(t) {
      (this.jt = new Ci()), (this.vt = !0), (this.tn = t);
    }
    gt() {
      this.vt = !0;
    }
    Mt() {
      if (this.vt) {
        const t = this.tn.Ut().F().grid,
          i = {
            Xl: t.horzLines.visible,
            $l: t.vertLines.visible,
            Zl: t.horzLines.color,
            Hl: t.vertLines.color,
            Kl: t.horzLines.style,
            Ul: t.vertLines.style,
            Gl: this.tn.fn().Jl(),
            ql: this.tn.Ut().yt().Jl() || [],
          };
        this.jt.tt(i), (this.vt = !1);
      }
      return this.jt;
    }
  }
  class Pi {
    constructor(t) {
      this.bn = new Ti(t);
    }
    Th() {
      return this.bn;
    }
  }
  const Ri = { Ql: 4, ta: 1e-4 };
  function Di(t, i) {
    const n = (100 * (t - i)) / i;
    return i < 0 ? -n : n;
  }
  function Oi(t, i) {
    const n = Di(t.lh(), i),
      s = Di(t.ah(), i);
    return new ci(n, s);
  }
  function Bi(t, i) {
    const n = (100 * (t - i)) / i + 100;
    return i < 0 ? -n : n;
  }
  function Ei(t, i) {
    const n = Bi(t.lh(), i),
      s = Bi(t.ah(), i);
    return new ci(n, s);
  }
  function Ai(t, i) {
    const n = Math.abs(t);
    if (n < 1e-15) return 0;
    const s = Dt(n + i.ta) + i.Ql;
    return t < 0 ? -s : s;
  }
  function Li(t, i) {
    const n = Math.abs(t);
    if (n < 1e-15) return 0;
    const s = Math.pow(10, n - i.Ql) - i.ta;
    return t < 0 ? -s : s;
  }
  function zi(t, i) {
    if (null === t) return null;
    const n = Ai(t.lh(), i),
      s = Ai(t.ah(), i);
    return new ci(n, s);
  }
  function Ii(t, i) {
    if (null === t) return null;
    const n = Li(t.lh(), i),
      s = Li(t.ah(), i);
    return new ci(n, s);
  }
  function Ni(t) {
    if (null === t) return Ri;
    const i = Math.abs(t.ah() - t.lh());
    if (i >= 1 || i < 1e-15) return Ri;
    const n = Math.ceil(Math.abs(Math.log10(i))),
      s = Ri.Ql + n;
    return { Ql: s, ta: 1 / Math.pow(10, s) };
  }
  class Vi {
    constructor(t, i) {
      if (
        ((this.ia = t),
        (this.na = i),
        (function (t) {
          if (t < 0) return !1;
          for (let i = t; i > 1; i /= 10) if (i % 10 != 0) return !1;
          return !0;
        })(this.ia))
      )
        this.sa = [2, 2.5, 2];
      else {
        this.sa = [];
        for (let t = this.ia; 1 !== t; ) {
          if (t % 2 == 0) this.sa.push(2), (t /= 2);
          else {
            if (t % 5 != 0) throw new Error("unexpected base");
            this.sa.push(2, 2.5), (t /= 5);
          }
          if (this.sa.length > 100)
            throw new Error("something wrong with base");
        }
      }
    }
    ea(t, i, n) {
      const s = 0 === this.ia ? 0 : 1 / this.ia;
      let e = Math.pow(10, Math.max(0, Math.ceil(Dt(t - i)))),
        r = 0,
        h = this.na[0];
      for (;;) {
        const t = Rt(e, s, 1e-14) && e > s + 1e-14,
          i = Rt(e, n * h, 1e-14),
          l = Rt(e, 1, 1e-14);
        if (!(t && i && l)) break;
        (e /= h), (h = this.na[++r % this.na.length]);
      }
      if (
        (e <= s + 1e-14 && (e = s),
        (e = Math.max(1, e)),
        this.sa.length > 0 &&
          ((l = e), (a = 1), (o = 1e-14), Math.abs(l - a) < o))
      )
        for (r = 0, h = this.sa[0]; Rt(e, n * h, 1e-14) && e > s + 1e-14; )
          (e /= h), (h = this.sa[++r % this.sa.length]);
      var l, a, o;
      return e;
    }
  }
  class Fi {
    constructor(t, i, n, s) {
      (this.ra = []),
        (this.Ii = t),
        (this.ia = i),
        (this.ha = n),
        (this.la = s);
    }
    ea(t, i) {
      if (t < i) throw new Error("high < low");
      const n = this.Ii.Lt(),
        s = ((t - i) * this.aa()) / n,
        e = new Vi(this.ia, [2, 2.5, 2]),
        r = new Vi(this.ia, [2, 2, 2.5]),
        h = new Vi(this.ia, [2.5, 2, 2]),
        l = [];
      return (
        l.push(e.ea(t, i, s), r.ea(t, i, s), h.ea(t, i, s)),
        (function (t) {
          if (t.length < 1) throw Error("array is empty");
          let i = t[0];
          for (let n = 1; n < t.length; ++n) t[n] < i && (i = t[n]);
          return i;
        })(l)
      );
    }
    oa() {
      const t = this.Ii,
        i = t.Tt();
      if (null === i) return void (this.ra = []);
      const n = t.Lt(),
        s = this.ha(n - 1, i),
        e = this.ha(0, i),
        r = this.Ii.F().entireTextOnly ? this._a() / 2 : 0,
        h = r,
        l = n - 1 - r,
        a = Math.max(s, e),
        o = Math.min(s, e);
      if (a === o) return void (this.ra = []);
      let _ = this.ea(a, o),
        u = a % _;
      u += u < 0 ? _ : 0;
      const c = a >= o ? 1 : -1;
      let d = null,
        f = 0;
      for (let n = a - u; n > o; n -= _) {
        const s = this.la(n, i, !0);
        (null !== d && Math.abs(s - d) < this.aa()) ||
          s < h ||
          s > l ||
          (f < this.ra.length
            ? ((this.ra[f].Yl = s), (this.ra[f].ua = t.ca(n)))
            : this.ra.push({ Yl: s, ua: t.ca(n) }),
          f++,
          (d = s),
          t.da() && (_ = this.ea(n * c, o)));
      }
      this.ra.length = f;
    }
    Jl() {
      return this.ra;
    }
    _a() {
      return this.Ii.T();
    }
    aa() {
      return Math.ceil(2.5 * this._a());
    }
  }
  function Wi(t) {
    return t.slice().sort((t, i) => h(t.Zi()) - h(i.Zi()));
  }
  var ji;
  !(function (t) {
    (t[(t.Normal = 0)] = "Normal"),
      (t[(t.Logarithmic = 1)] = "Logarithmic"),
      (t[(t.Percentage = 2)] = "Percentage"),
      (t[(t.IndexedTo100 = 3)] = "IndexedTo100");
  })(ji || (ji = {}));
  const $i = new et(),
    Hi = new st(100, 1);
  class Ui {
    constructor(t, i, n, s) {
      (this.fa = 0),
        (this.pa = null),
        (this.ph = null),
        (this.va = null),
        (this.ma = { ba: !1, ga: null }),
        (this.wa = 0),
        (this.Ma = 0),
        (this.Sa = new m()),
        (this.xa = new m()),
        (this.ya = []),
        (this.ka = null),
        (this.Ca = null),
        (this.Ta = null),
        (this.Pa = null),
        (this.Bl = Hi),
        (this.Ra = Ni(null)),
        (this.Da = t),
        (this.un = i),
        (this.Oa = n),
        (this.Ba = s),
        (this.Ea = new Fi(this, 100, this.Aa.bind(this), this.La.bind(this)));
    }
    Il() {
      return this.Da;
    }
    F() {
      return this.un;
    }
    kh(t) {
      if (
        (b(this.un, t),
        this.Nl(),
        void 0 !== t.mode && this.za({ lr: t.mode }),
        void 0 !== t.scaleMargins)
      ) {
        const i = r(t.scaleMargins.top),
          n = r(t.scaleMargins.bottom);
        if (i < 0 || i > 1)
          throw new Error(
            `Invalid top margin - expect value between 0 and 1, given=${i}`
          );
        if (n < 0 || n > 1 || i + n > 1)
          throw new Error(
            `Invalid bottom margin - expect value between 0 and 1, given=${n}`
          );
        if (i + n > 1)
          throw new Error(
            `Invalid margins - sum of margins must be less than 1, given=${
              i + n
            }`
          );
        this.Ia(), (this.Ca = null);
      }
    }
    Na() {
      return this.un.autoScale;
    }
    da() {
      return 1 === this.un.mode;
    }
    th() {
      return 2 === this.un.mode;
    }
    Va() {
      return 3 === this.un.mode;
    }
    lr() {
      return {
        Fn: this.un.autoScale,
        Fa: this.un.invertScale,
        lr: this.un.mode,
      };
    }
    za(t) {
      const i = this.lr();
      let n = null;
      void 0 !== t.Fn && (this.un.autoScale = t.Fn),
        void 0 !== t.lr &&
          ((this.un.mode = t.lr),
          (2 !== t.lr && 3 !== t.lr) || (this.un.autoScale = !0),
          (this.ma.ba = !1)),
        1 === i.lr &&
          t.lr !== i.lr &&
          (!(function (t, i) {
            if (null === t) return !1;
            const n = Li(t.lh(), i),
              s = Li(t.ah(), i);
            return isFinite(n) && isFinite(s);
          })(this.ph, this.Ra)
            ? (this.un.autoScale = !0)
            : ((n = Ii(this.ph, this.Ra)), null !== n && this.Wa(n))),
        1 === t.lr &&
          t.lr !== i.lr &&
          ((n = zi(this.ph, this.Ra)), null !== n && this.Wa(n));
      const s = i.lr !== this.un.mode;
      s && (2 === i.lr || this.th()) && this.Nl(),
        s && (3 === i.lr || this.Va()) && this.Nl(),
        void 0 !== t.Fa &&
          i.Fa !== t.Fa &&
          ((this.un.invertScale = t.Fa), this.ja()),
        this.xa.m(i, this.lr());
    }
    $a() {
      return this.xa;
    }
    T() {
      return this.Oa.fontSize;
    }
    Lt() {
      return this.fa;
    }
    Ha(t) {
      this.fa !== t && ((this.fa = t), this.Ia(), (this.Ca = null));
    }
    Ua() {
      if (this.pa) return this.pa;
      const t = this.Lt() - this.qa() - this.Ya();
      return (this.pa = t), t;
    }
    bh() {
      return this.Xa(), this.ph;
    }
    Wa(t, i) {
      const n = this.ph;
      (i || (null === n && null !== t) || (null !== n && !n.rh(t))) &&
        ((this.Ca = null), (this.ph = t));
    }
    Vi() {
      return this.Xa(), 0 === this.fa || !this.ph || this.ph.Vi();
    }
    Za(t) {
      return this.Fa() ? t : this.Lt() - 1 - t;
    }
    Dt(t, i) {
      return (
        this.th() ? (t = Di(t, i)) : this.Va() && (t = Bi(t, i)), this.La(t, i)
      );
    }
    $s(t, i, n) {
      this.Xa();
      const s = this.Ya(),
        e = h(this.bh()),
        r = e.lh(),
        l = e.ah(),
        a = this.Ua() - 1,
        o = this.Fa(),
        _ = a / (l - r),
        u = void 0 === n ? 0 : n.from,
        c = void 0 === n ? t.length : n.to,
        d = this.Ka();
      for (let n = u; n < c; n++) {
        const e = t[n],
          h = e.ut;
        if (isNaN(h)) continue;
        let l = h;
        null !== d && (l = d(e.ut, i));
        const a = s + _ * (l - r),
          u = o ? a : this.fa - 1 - a;
        e.et = u;
      }
    }
    le(t, i, n) {
      this.Xa();
      const s = this.Ya(),
        e = h(this.bh()),
        r = e.lh(),
        l = e.ah(),
        a = this.Ua() - 1,
        o = this.Fa(),
        _ = a / (l - r),
        u = void 0 === n ? 0 : n.from,
        c = void 0 === n ? t.length : n.to,
        d = this.Ka();
      for (let n = u; n < c; n++) {
        const e = t[n];
        let h = e.oe,
          l = e._e,
          a = e.ue,
          u = e.ce;
        null !== d &&
          ((h = d(e.oe, i)),
          (l = d(e._e, i)),
          (a = d(e.ue, i)),
          (u = d(e.ce, i)));
        let c = s + _ * (h - r),
          f = o ? c : this.fa - 1 - c;
        (e.re = f),
          (c = s + _ * (l - r)),
          (f = o ? c : this.fa - 1 - c),
          (e.ne = f),
          (c = s + _ * (a - r)),
          (f = o ? c : this.fa - 1 - c),
          (e.se = f),
          (c = s + _ * (u - r)),
          (f = o ? c : this.fa - 1 - c),
          (e.he = f);
      }
    }
    pn(t, i) {
      const n = this.Aa(t, i);
      return this.Ga(n, i);
    }
    Ga(t, i) {
      let n = t;
      return (
        this.th()
          ? (n = (function (t, i) {
              return i < 0 && (t = -t), (t / 100) * i + i;
            })(n, i))
          : this.Va() &&
            (n = (function (t, i) {
              return (t -= 100), i < 0 && (t = -t), (t / 100) * i + i;
            })(n, i)),
        n
      );
    }
    jl() {
      return this.ya;
    }
    Ja() {
      if (this.ka) return this.ka;
      let t = [];
      for (let i = 0; i < this.ya.length; i++) {
        const n = this.ya[i];
        null === n.Zi() && n.Ki(i + 1), t.push(n);
      }
      return (t = Wi(t)), (this.ka = t), this.ka;
    }
    Qa(t) {
      -1 === this.ya.indexOf(t) && (this.ya.push(t), this.Nl(), this.io());
    }
    no(t) {
      const i = this.ya.indexOf(t);
      if (-1 === i) throw new Error("source is not attached to scale");
      this.ya.splice(i, 1),
        0 === this.ya.length && (this.za({ Fn: !0 }), this.Wa(null)),
        this.Nl(),
        this.io();
    }
    Tt() {
      let t = null;
      for (const i of this.ya) {
        const n = i.Tt();
        null !== n && (null === t || n.yl < t.yl) && (t = n);
      }
      return null === t ? null : t.Bt;
    }
    Fa() {
      return this.un.invertScale;
    }
    Jl() {
      const t = null === this.Tt();
      if (null !== this.Ca && (t || this.Ca.so === t)) return this.Ca.Jl;
      this.Ea.oa();
      const i = this.Ea.Jl();
      return (this.Ca = { Jl: i, so: t }), this.Sa.m(), i;
    }
    eo() {
      return this.Sa;
    }
    ro(t) {
      this.th() ||
        this.Va() ||
        (null === this.Ta &&
          null === this.va &&
          (this.Vi() ||
            ((this.Ta = this.fa - t), (this.va = h(this.bh()).hh()))));
    }
    ho(t) {
      if (this.th() || this.Va()) return;
      if (null === this.Ta) return;
      this.za({ Fn: !1 }), (t = this.fa - t) < 0 && (t = 0);
      let i = (this.Ta + 0.2 * (this.fa - 1)) / (t + 0.2 * (this.fa - 1));
      const n = h(this.va).hh();
      (i = Math.max(i, 0.1)), n._h(i), this.Wa(n);
    }
    lo() {
      this.th() || this.Va() || ((this.Ta = null), (this.va = null));
    }
    ao(t) {
      this.Na() ||
        (null === this.Pa &&
          null === this.va &&
          (this.Vi() || ((this.Pa = t), (this.va = h(this.bh()).hh()))));
    }
    oo(t) {
      if (this.Na()) return;
      if (null === this.Pa) return;
      const i = h(this.bh()).oh() / (this.Ua() - 1);
      let n = t - this.Pa;
      this.Fa() && (n *= -1);
      const s = n * i,
        e = h(this.va).hh();
      e.uh(s), this.Wa(e, !0), (this.Ca = null);
    }
    _o() {
      this.Na() || (null !== this.Pa && ((this.Pa = null), (this.va = null)));
    }
    Ol() {
      return this.Bl || this.Nl(), this.Bl;
    }
    Fi(t, i) {
      switch (this.un.mode) {
        case 2:
          return this.Ol().format(Di(t, i));
        case 3:
          return this.Ol().format(Bi(t, i));
        default:
          return this.Sh(t);
      }
    }
    ca(t) {
      switch (this.un.mode) {
        case 2:
        case 3:
          return this.Ol().format(t);
        default:
          return this.Sh(t);
      }
    }
    _l(t) {
      return this.Sh(t, h(this.uo()).Ol());
    }
    ul(t, i) {
      return (t = Di(t, i)), $i.format(t);
    }
    co() {
      return this.ya;
    }
    do(t) {
      this.ma = { ga: t, ba: !1 };
    }
    Dn() {
      this.ya.forEach((t) => t.Dn());
    }
    Nl() {
      this.Ca = null;
      const t = this.uo();
      let i = 100;
      null !== t && (i = Math.round(1 / t.Dl())),
        (this.Bl = Hi),
        this.th()
          ? ((this.Bl = $i), (i = 100))
          : this.Va()
          ? ((this.Bl = new st(100, 1)), (i = 100))
          : null !== t && (this.Bl = t.Ol()),
        (this.Ea = new Fi(this, i, this.Aa.bind(this), this.La.bind(this))),
        this.Ea.oa();
    }
    io() {
      this.ka = null;
    }
    uo() {
      return this.ya[0] || null;
    }
    qa() {
      return this.Fa()
        ? this.un.scaleMargins.bottom * this.Lt() + this.Ma
        : this.un.scaleMargins.top * this.Lt() + this.wa;
    }
    Ya() {
      return this.Fa()
        ? this.un.scaleMargins.top * this.Lt() + this.wa
        : this.un.scaleMargins.bottom * this.Lt() + this.Ma;
    }
    Xa() {
      this.ma.ba || ((this.ma.ba = !0), this.fo());
    }
    Ia() {
      this.pa = null;
    }
    La(t, i) {
      if ((this.Xa(), this.Vi())) return 0;
      t = this.da() && t ? Ai(t, this.Ra) : t;
      const n = h(this.bh()),
        s = this.Ya() + ((this.Ua() - 1) * (t - n.lh())) / n.oh();
      return this.Za(s);
    }
    Aa(t, i) {
      if ((this.Xa(), this.Vi())) return 0;
      const n = this.Za(t),
        s = h(this.bh()),
        e = s.lh() + s.oh() * ((n - this.Ya()) / (this.Ua() - 1));
      return this.da() ? Li(e, this.Ra) : e;
    }
    ja() {
      (this.Ca = null), this.Ea.oa();
    }
    fo() {
      const t = this.ma.ga;
      if (null === t) return;
      let i = null;
      const n = this.co();
      let s = 0,
        e = 0;
      for (const r of n) {
        if (!r.Ct()) continue;
        const n = r.Tt();
        if (null === n) continue;
        const l = r.Pl(t.Ms(), t.ci());
        let a = l && l.bh();
        if (null !== a) {
          switch (this.un.mode) {
            case 1:
              a = zi(a, this.Ra);
              break;
            case 2:
              a = Oi(a, n.Bt);
              break;
            case 3:
              a = Ei(a, n.Bt);
          }
          if (((i = null === i ? a : i.Qn(h(a))), null !== l)) {
            const t = l.gh();
            null !== t &&
              ((s = Math.max(s, t.above)), (e = Math.max(s, t.below)));
          }
        }
      }
      if (
        ((s === this.wa && e === this.Ma) ||
          ((this.wa = s), (this.Ma = e), (this.Ca = null), this.Ia()),
        null !== i)
      ) {
        if (i.lh() === i.ah()) {
          const t = this.uo(),
            n = 5 * (null === t || this.th() || this.Va() ? 1 : t.Dl());
          this.da() && (i = Ii(i, this.Ra)),
            (i = new ci(i.lh() - n, i.ah() + n)),
            this.da() && (i = zi(i, this.Ra));
        }
        if (this.da()) {
          const t = Ii(i, this.Ra),
            n = Ni(t);
          if (((r = n), (l = this.Ra), r.Ql !== l.Ql || r.ta !== l.ta)) {
            const s = null !== this.va ? Ii(this.va, this.Ra) : null;
            (this.Ra = n), (i = zi(t, n)), null !== s && (this.va = zi(s, n));
          }
        }
        this.Wa(i);
      } else
        null === this.ph && (this.Wa(new ci(-0.5, 0.5)), (this.Ra = Ni(null)));
      var r, l;
      this.ma.ba = !0;
    }
    Ka() {
      return this.th()
        ? Di
        : this.Va()
        ? Bi
        : this.da()
        ? (t) => Ai(t, this.Ra)
        : null;
    }
    Sh(t, i) {
      return void 0 === this.Ba.priceFormatter
        ? (void 0 === i && (i = this.Ol()), i.format(t))
        : this.Ba.priceFormatter(t);
    }
  }
  class qi {
    constructor(t, i) {
      (this.ya = []),
        (this.po = new Map()),
        (this.fa = 0),
        (this.vo = 0),
        (this.mo = 1e3),
        (this.ka = null),
        (this.bo = new m()),
        (this.wo = t),
        (this.Hi = i),
        (this.Mo = new Pi(this));
      const n = i.F();
      (this.So = this.xo("left", n.leftPriceScale)),
        (this.yo = this.xo("right", n.rightPriceScale)),
        this.So.$a().l(this.ko.bind(this, this.So), this),
        this.yo.$a().l(this.ko.bind(this, this.yo), this),
        this.Co(n);
    }
    Co(t) {
      if (
        (t.leftPriceScale && this.So.kh(t.leftPriceScale),
        t.rightPriceScale && this.yo.kh(t.rightPriceScale),
        t.localization && (this.So.Nl(), this.yo.Nl()),
        t.overlayPriceScales)
      ) {
        const i = Array.from(this.po.values());
        for (const n of i) {
          const i = h(n[0].Ot());
          i.kh(t.overlayPriceScales), t.localization && i.Nl();
        }
      }
    }
    To(t) {
      switch (t) {
        case "left":
          return this.So;
        case "right":
          return this.yo;
      }
      return this.po.has(t) ? r(this.po.get(t))[0].Ot() : null;
    }
    M() {
      this.Ut().Po().v(this),
        this.So.$a().v(this),
        this.yo.$a().v(this),
        this.ya.forEach((t) => {
          t.M && t.M();
        }),
        this.bo.m();
    }
    Ro() {
      return this.mo;
    }
    Do(t) {
      this.mo = t;
    }
    Ut() {
      return this.Hi;
    }
    $i() {
      return this.vo;
    }
    Lt() {
      return this.fa;
    }
    Oo(t) {
      (this.vo = t), this.Bo();
    }
    Ha(t) {
      (this.fa = t),
        this.So.Ha(t),
        this.yo.Ha(t),
        this.ya.forEach((i) => {
          if (this.Ge(i)) {
            const n = i.Ot();
            null !== n && n.Ha(t);
          }
        }),
        this.Bo();
    }
    jl() {
      return this.ya;
    }
    Ge(t) {
      const i = t.Ot();
      return null === i || (this.So !== i && this.yo !== i);
    }
    Qa(t, i, n) {
      const s = void 0 !== n ? n : this.Ao().Eo + 1;
      this.Lo(t, i, s);
    }
    no(t) {
      const i = this.ya.indexOf(t);
      e(-1 !== i, "removeDataSource: invalid data source"),
        this.ya.splice(i, 1);
      const n = h(t.Ot()).Il();
      if (this.po.has(n)) {
        const i = r(this.po.get(n)),
          s = i.indexOf(t);
        -1 !== s && (i.splice(s, 1), 0 === i.length && this.po.delete(n));
      }
      const s = t.Ot();
      s && s.jl().indexOf(t) >= 0 && s.no(t),
        null !== s && (s.io(), this.zo(s)),
        (this.ka = null);
    }
    Qe(t) {
      return t === this.So ? "left" : t === this.yo ? "right" : "overlay";
    }
    Io() {
      return this.So;
    }
    No() {
      return this.yo;
    }
    Vo(t, i) {
      t.ro(i);
    }
    Fo(t, i) {
      t.ho(i), this.Bo();
    }
    Wo(t) {
      t.lo();
    }
    jo(t, i) {
      t.ao(i);
    }
    $o(t, i) {
      t.oo(i), this.Bo();
    }
    Ho(t) {
      t._o();
    }
    Bo() {
      this.ya.forEach((t) => {
        t.Dn();
      });
    }
    fn() {
      let t = null;
      return (
        this.Hi.F().rightPriceScale.visible && 0 !== this.yo.jl().length
          ? (t = this.yo)
          : this.Hi.F().leftPriceScale.visible && 0 !== this.So.jl().length
          ? (t = this.So)
          : 0 !== this.ya.length && (t = this.ya[0].Ot()),
        null === t && (t = this.yo),
        t
      );
    }
    Je() {
      let t = null;
      return (
        this.Hi.F().rightPriceScale.visible
          ? (t = this.yo)
          : this.Hi.F().leftPriceScale.visible && (t = this.So),
        t
      );
    }
    zo(t) {
      null !== t && t.Na() && this.Uo(t);
    }
    qo(t) {
      const i = this.wo.Ns();
      t.za({ Fn: !0 }), null !== i && t.do(i), this.Bo();
    }
    Yo() {
      this.Uo(this.So), this.Uo(this.yo);
    }
    Xo() {
      this.zo(this.So),
        this.zo(this.yo),
        this.ya.forEach((t) => {
          this.Ge(t) && this.zo(t.Ot());
        }),
        this.Bo(),
        this.Hi.Ch();
    }
    Ja() {
      return null === this.ka && (this.ka = Wi(this.ya)), this.ka;
    }
    Zo() {
      return this.bo;
    }
    Ko() {
      return this.Mo;
    }
    Uo(t) {
      const i = t.co();
      if (i && i.length > 0 && !this.wo.Vi()) {
        const i = this.wo.Ns();
        null !== i && t.do(i);
      }
      t.Dn();
    }
    Ao() {
      const t = this.Ja();
      if (0 === t.length) return { Go: 0, Eo: 0 };
      let i = 0,
        n = 0;
      for (let s = 0; s < t.length; s++) {
        const e = t[s].Zi();
        null !== e && (e < i && (i = e), e > n && (n = e));
      }
      return { Go: i, Eo: n };
    }
    Lo(t, i, n) {
      let s = this.To(i);
      if (
        (null === s && (s = this.xo(i, this.Hi.F().overlayPriceScales)),
        this.ya.push(t),
        !Q(i))
      ) {
        const n = this.po.get(i) || [];
        n.push(t), this.po.set(i, n);
      }
      s.Qa(t), t.Gi(s), t.Ki(n), this.zo(s), (this.ka = null);
    }
    ko(t, i, n) {
      i.lr !== n.lr && this.Uo(t);
    }
    xo(t, i) {
      const n = Object.assign({ visible: !0, autoScale: !0 }, x(i)),
        s = new Ui(t, n, this.Hi.F().layout, this.Hi.F().localization);
      return s.Ha(this.Lt()), s;
    }
  }
  const Yi = (t) => t.getUTCFullYear(),
    Xi = (t) => nt(((t) => t.getUTCDate())(t), 2),
    Zi = (t, i) =>
      new Date(t.getUTCFullYear(), t.getUTCMonth(), 1).toLocaleString(i, {
        month: "long",
      }),
    Ki = (t, i) =>
      new Date(t.getUTCFullYear(), t.getUTCMonth(), 1).toLocaleString(i, {
        month: "short",
      }),
    Gi = (t) => nt(((t) => t.getUTCMonth() + 1)(t), 2),
    Ji = (t) => nt(Yi(t) % 100, 2),
    Qi = (t) => nt(Yi(t), 4);
  class tn {
    constructor(t = "yyyy-MM-dd", i = "default") {
      (this.Jo = t), (this.Qo = i);
    }
    t_(t) {
      return (function (t, i, n) {
        return i
          .replace(/yyyy/g, Qi(t))
          .replace(/yy/g, Ji(t))
          .replace(/MMMM/g, Zi(t, n))
          .replace(/MMM/g, Ki(t, n))
          .replace(/MM/g, Gi(t))
          .replace(/dd/g, Xi(t));
      })(t, this.Jo, this.Qo);
    }
  }
  class nn {
    constructor(t) {
      this.i_ = t || "%h:%m:%s";
    }
    t_(t) {
      return this.i_
        .replace("%h", nt(t.getUTCHours(), 2))
        .replace("%m", nt(t.getUTCMinutes(), 2))
        .replace("%s", nt(t.getUTCSeconds(), 2));
    }
  }
  const sn = { n_: "yyyy-MM-dd", s_: "%h:%m:%s", e_: " ", r_: "default" };
  class en {
    constructor(t = {}) {
      const i = Object.assign(Object.assign({}, sn), t);
      (this.h_ = new tn(i.n_, i.r_)),
        (this.l_ = new nn(i.s_)),
        (this.a_ = i.e_);
    }
    t_(t) {
      return `${this.h_.t_(t)}${this.a_}${this.l_.t_(t)}`;
    }
  }
  class rn {
    constructor(t, i = 50) {
      (this.Ae = 0),
        (this.Le = 1),
        (this.ze = 1),
        (this.Ne = new Map()),
        (this.Ie = new Map()),
        (this.o_ = t),
        (this.Ve = i);
    }
    t_(t) {
      const i = t._t,
        n =
          void 0 === i.__
            ? new Date(1e3 * i.u_).getTime()
            : new Date(Date.UTC(i.__.year, i.__.month - 1, i.__.day)).getTime(),
        s = this.Ne.get(n);
      if (void 0 !== s) return s.c_;
      if (this.Ae === this.Ve) {
        const t = this.Ie.get(this.ze);
        this.Ie.delete(this.ze), this.Ne.delete(r(t)), this.ze++, this.Ae--;
      }
      const e = this.o_(t);
      return (
        this.Ne.set(n, { c_: e, $e: this.Le }),
        this.Ie.set(this.Le, n),
        this.Ae++,
        this.Le++,
        e
      );
    }
  }
  class hn {
    constructor(t, i) {
      e(t <= i, "right should be >= left"), (this.d_ = t), (this.f_ = i);
    }
    Ms() {
      return this.d_;
    }
    ci() {
      return this.f_;
    }
    p_() {
      return this.f_ - this.d_ + 1;
    }
    Lr(t) {
      return this.d_ <= t && t <= this.f_;
    }
    rh(t) {
      return this.d_ === t.Ms() && this.f_ === t.ci();
    }
  }
  function ln(t, i) {
    return null === t || null === i ? t === i : t.rh(i);
  }
  class an {
    constructor() {
      (this.v_ = new Map()), (this.Ne = null);
    }
    m_(t, i) {
      this.b_(i), (this.Ne = null);
      for (let n = i; n < t.length; ++n) {
        const i = t[n];
        let s = this.v_.get(i.g_);
        void 0 === s && ((s = []), this.v_.set(i.g_, s)),
          s.push({ Ys: n, _t: i._t, w_: i.g_, M_: i.M_ });
      }
    }
    S_(t, i) {
      const n = Math.ceil(i / t);
      return (
        (null !== this.Ne && this.Ne.x_ === n) ||
          (this.Ne = { Jl: this.y_(n), x_: n }),
        this.Ne.Jl
      );
    }
    b_(t) {
      if (0 === t) return void this.v_.clear();
      const i = [];
      this.v_.forEach((n, s) => {
        t <= n[0].Ys
          ? i.push(s)
          : n.splice(
              mt(n, t, (i) => i.Ys < t),
              1 / 0
            );
      });
      for (const t of i) this.v_.delete(t);
    }
    y_(t) {
      let i = [];
      for (const n of Array.from(this.v_.keys()).sort((t, i) => i - t)) {
        if (!this.v_.get(n)) continue;
        const s = i;
        i = [];
        const e = s.length;
        let h = 0;
        const l = r(this.v_.get(n)),
          a = l.length;
        let o = 1 / 0,
          _ = -1 / 0;
        for (let n = 0; n < a; n++) {
          const r = l[n],
            a = r.Ys;
          for (; h < e; ) {
            const t = s[h],
              n = t.Ys;
            if (!(n < a)) {
              o = n;
              break;
            }
            h++, i.push(t), (_ = n), (o = 1 / 0);
          }
          o - a >= t && a - _ >= t && (i.push(r), (_ = a));
        }
        for (; h < e; h++) i.push(s[h]);
      }
      return i;
    }
  }
  class on {
    constructor(t) {
      this.k_ = t;
    }
    C_() {
      return null === this.k_
        ? null
        : new hn(Math.floor(this.k_.Ms()), Math.ceil(this.k_.ci()));
    }
    T_() {
      return this.k_;
    }
    static P_() {
      return new on(null);
    }
  }
  var _n, un, cn, dn, fn;
  !(function (t) {
    (t[(t.Year = 0)] = "Year"),
      (t[(t.Month = 1)] = "Month"),
      (t[(t.DayOfMonth = 2)] = "DayOfMonth"),
      (t[(t.Time = 3)] = "Time"),
      (t[(t.TimeWithSeconds = 4)] = "TimeWithSeconds");
  })(_n || (_n = {}));
  class pn {
    constructor(t, i, n) {
      (this.vo = 0),
        (this.R_ = null),
        (this.D_ = []),
        (this.Pa = null),
        (this.Ta = null),
        (this.O_ = new an()),
        (this.B_ = new Map()),
        (this.E_ = on.P_()),
        (this.A_ = !0),
        (this.L_ = new m()),
        (this.z_ = new m()),
        (this.I_ = new m()),
        (this.N_ = null),
        (this.V_ = null),
        (this.F_ = []),
        (this.un = i),
        (this.Ba = n),
        (this.W_ = i.rightOffset),
        (this.j_ = i.barSpacing),
        (this.Hi = t),
        this.H_();
    }
    F() {
      return this.un;
    }
    U_(t) {
      b(this.Ba, t), this.q_(), this.H_();
    }
    kh(t, i) {
      var n;
      b(this.un, t),
        this.un.fixLeftEdge && this.Y_(),
        this.un.fixRightEdge && this.X_(),
        void 0 !== t.barSpacing && this.Hi.Kn(t.barSpacing),
        void 0 !== t.rightOffset && this.Hi.Gn(t.rightOffset),
        void 0 !== t.minBarSpacing &&
          this.Hi.Kn(null !== (n = t.barSpacing) && void 0 !== n ? n : this.j_),
        this.q_(),
        this.H_(),
        this.I_.m();
    }
    vn(t) {
      var i, n;
      return null !==
        (n = null === (i = this.D_[t]) || void 0 === i ? void 0 : i._t) &&
        void 0 !== n
        ? n
        : null;
    }
    Ui(t) {
      var i;
      return null !== (i = this.D_[t]) && void 0 !== i ? i : null;
    }
    Fl(t, i) {
      if (this.D_.length < 1) return null;
      if (t.u_ > this.D_[this.D_.length - 1]._t.u_)
        return i ? this.D_.length - 1 : null;
      const n = mt(this.D_, t.u_, (t, i) => t._t.u_ < i);
      return t.u_ < this.D_[n]._t.u_ ? (i ? n : null) : n;
    }
    Vi() {
      return 0 === this.vo || 0 === this.D_.length || null === this.R_;
    }
    Vl() {
      return this.D_.length > 0;
    }
    Ns() {
      return this.Z_(), this.E_.C_();
    }
    K_() {
      return this.Z_(), this.E_.T_();
    }
    G_() {
      const t = this.Ns();
      if (null === t) return null;
      const i = { from: t.Ms(), to: t.ci() };
      return this.J_(i);
    }
    J_(t) {
      const i = Math.round(t.from),
        n = Math.round(t.to),
        s = h(this.Q_()),
        e = h(this.tu());
      return {
        from: h(this.vn(Math.max(s, i))),
        to: h(this.vn(Math.min(e, n))),
      };
    }
    iu(t) {
      return { from: h(this.Fl(t.from, !0)), to: h(this.Fl(t.to, !0)) };
    }
    $i() {
      return this.vo;
    }
    Oo(t) {
      if (!isFinite(t) || t <= 0) return;
      if (this.vo === t) return;
      const i = this.K_(),
        n = this.vo;
      if (
        ((this.vo = t),
        (this.A_ = !0),
        this.un.lockVisibleTimeRangeOnResize && 0 !== n)
      ) {
        const i = (this.j_ * t) / n;
        this.j_ = i;
      }
      if (this.un.fixLeftEdge && null !== i && i.Ms() <= 0) {
        const i = n - t;
        (this.W_ -= Math.round(i / this.j_) + 1), (this.A_ = !0);
      }
      this.nu(), this.su();
    }
    zt(t) {
      if (this.Vi() || !w(t)) return 0;
      const i = this.eu() + this.W_ - t;
      return this.vo - (i + 0.5) * this.j_ - 1;
    }
    js(t, i) {
      const n = this.eu(),
        s = void 0 === i ? 0 : i.from,
        e = void 0 === i ? t.length : i.to;
      for (let i = s; i < e; i++) {
        const s = t[i]._t,
          e = n + this.W_ - s,
          r = this.vo - (e + 0.5) * this.j_ - 1;
        t[i].st = r;
      }
    }
    ru(t) {
      return Math.ceil(this.hu(t));
    }
    Gn(t) {
      (this.A_ = !0), (this.W_ = t), this.su(), this.Hi.lu(), this.Hi.Ch();
    }
    Ks() {
      return this.j_;
    }
    Kn(t) {
      this.au(t), this.su(), this.Hi.lu(), this.Hi.Ch();
    }
    ou() {
      return this.W_;
    }
    Jl() {
      if (this.Vi()) return null;
      if (null !== this.V_) return this.V_;
      const t = this.j_,
        i = 5 * (this.Hi.F().layout.fontSize + 4),
        n = Math.round(i / t),
        s = h(this.Ns()),
        e = Math.max(s.Ms(), s.Ms() - n),
        r = Math.max(s.ci(), s.ci() - n),
        l = this.O_.S_(t, i),
        a = this.Q_() + n,
        o = this.tu() - n,
        _ = this._u(),
        u = this.un.fixLeftEdge || _,
        c = this.un.fixRightEdge || _;
      let d = 0;
      for (const t of l) {
        if (!(e <= t.Ys && t.Ys <= r)) continue;
        let n;
        d < this.F_.length
          ? ((n = this.F_[d]),
            (n.Yl = this.zt(t.Ys)),
            (n.ua = this.uu(t)),
            (n.w_ = t.w_))
          : ((n = { cu: !1, Yl: this.zt(t.Ys), ua: this.uu(t), w_: t.w_ }),
            this.F_.push(n)),
          this.j_ > i / 2 && !_
            ? (n.cu = !1)
            : (n.cu = (u && t.Ys <= a) || (c && t.Ys >= o)),
          d++;
      }
      return (this.F_.length = d), (this.V_ = this.F_), this.F_;
    }
    du() {
      (this.A_ = !0), this.Kn(this.un.barSpacing), this.Gn(this.un.rightOffset);
    }
    fu(t) {
      (this.A_ = !0), (this.R_ = t), this.su(), this.Y_();
    }
    pu(t, i) {
      const n = this.hu(t),
        s = this.Ks(),
        e = s + i * (s / 10);
      this.Kn(e),
        this.un.rightBarStaysOnScroll || this.Gn(this.ou() + (n - this.hu(t)));
    }
    ro(t) {
      this.Pa && this._o(),
        null === this.Ta &&
          null === this.N_ &&
          (this.Vi() || ((this.Ta = t), this.vu()));
    }
    ho(t) {
      if (null === this.N_) return;
      const i = Pt(this.vo - t, 0, this.vo),
        n = Pt(this.vo - h(this.Ta), 0, this.vo);
      0 !== i && 0 !== n && this.Kn((this.N_.Ks * i) / n);
    }
    lo() {
      null !== this.Ta && ((this.Ta = null), this.mu());
    }
    ao(t) {
      null === this.Pa &&
        null === this.N_ &&
        (this.Vi() || ((this.Pa = t), this.vu()));
    }
    oo(t) {
      if (null === this.Pa) return;
      const i = (this.Pa - t) / this.Ks();
      (this.W_ = h(this.N_).ou + i), (this.A_ = !0), this.su();
    }
    _o() {
      null !== this.Pa && ((this.Pa = null), this.mu());
    }
    bu() {
      this.gu(this.un.rightOffset);
    }
    gu(t, i = 400) {
      if (!isFinite(t))
        throw new RangeError("offset is required and must be finite number");
      if (!isFinite(i) || i <= 0)
        throw new RangeError(
          "animationDuration (optional) must be finite positive number"
        );
      const n = this.W_,
        s = performance.now();
      this.Hi.Yn({
        wu: (t) => (t - s) / i >= 1,
        Mu: (e) => {
          const r = (e - s) / i;
          return r >= 1 ? t : n + (t - n) * r;
        },
      });
    }
    gt(t, i) {
      (this.A_ = !0), (this.D_ = t), this.O_.m_(t, i), this.su();
    }
    Su() {
      return this.L_;
    }
    xu() {
      return this.z_;
    }
    yu() {
      return this.I_;
    }
    eu() {
      return this.R_ || 0;
    }
    ku(t) {
      const i = t.p_();
      this.au(this.vo / i),
        (this.W_ = t.ci() - this.eu()),
        this.su(),
        (this.A_ = !0),
        this.Hi.lu(),
        this.Hi.Ch();
    }
    Cu() {
      const t = this.Q_(),
        i = this.tu();
      null !== t && null !== i && this.ku(new hn(t, i + this.un.rightOffset));
    }
    Tu(t) {
      const i = new hn(t.from, t.to);
      this.ku(i);
    }
    qi(t) {
      return void 0 !== this.Ba.timeFormatter
        ? this.Ba.timeFormatter(t.M_)
        : this.Pu.t_(new Date(1e3 * t._t.u_));
    }
    _u() {
      const { handleScroll: t, handleScale: i } = this.Hi.F();
      return !(
        t.horzTouchDrag ||
        t.mouseWheel ||
        t.pressedMouseMove ||
        t.vertTouchDrag ||
        i.axisDoubleClickReset.time ||
        i.axisPressedMouseMove.time ||
        i.mouseWheel ||
        i.pinch
      );
    }
    Q_() {
      return 0 === this.D_.length ? null : 0;
    }
    tu() {
      return 0 === this.D_.length ? null : this.D_.length - 1;
    }
    Ru(t) {
      return (this.vo - 1 - t) / this.j_;
    }
    hu(t) {
      const i = this.Ru(t),
        n = this.eu() + this.W_ - i;
      return Math.round(1e6 * n) / 1e6;
    }
    au(t) {
      const i = this.j_;
      (this.j_ = t), this.nu(), i !== this.j_ && ((this.A_ = !0), this.Du());
    }
    Z_() {
      if (!this.A_) return;
      if (((this.A_ = !1), this.Vi())) return void this.Ou(on.P_());
      const t = this.eu(),
        i = this.vo / this.j_,
        n = this.W_ + t,
        s = new hn(n - i + 1, n);
      this.Ou(new on(s));
    }
    nu() {
      const t = this.Bu();
      if ((this.j_ < t && ((this.j_ = t), (this.A_ = !0)), 0 !== this.vo)) {
        const t = 0.5 * this.vo;
        this.j_ > t && ((this.j_ = t), (this.A_ = !0));
      }
    }
    Bu() {
      return this.un.fixLeftEdge && this.un.fixRightEdge && 0 !== this.D_.length
        ? this.vo / this.D_.length
        : this.un.minBarSpacing;
    }
    su() {
      const t = this.Eu();
      this.W_ > t && ((this.W_ = t), (this.A_ = !0));
      const i = this.Au();
      null !== i && this.W_ < i && ((this.W_ = i), (this.A_ = !0));
    }
    Au() {
      const t = this.Q_(),
        i = this.R_;
      if (null === t || null === i) return null;
      return (
        t -
        i -
        1 +
        (this.un.fixLeftEdge ? this.vo / this.j_ : Math.min(2, this.D_.length))
      );
    }
    Eu() {
      return this.un.fixRightEdge
        ? 0
        : this.vo / this.j_ - Math.min(2, this.D_.length);
    }
    vu() {
      this.N_ = { Ks: this.Ks(), ou: this.ou() };
    }
    mu() {
      this.N_ = null;
    }
    uu(t) {
      let i = this.B_.get(t.w_);
      return (
        void 0 === i && ((i = new rn((t) => this.Lu(t))), this.B_.set(t.w_, i)),
        i.t_(t)
      );
    }
    Lu(t) {
      const i = (function (t, i, n) {
        switch (t) {
          case 0:
          case 10:
            return i ? (n ? 4 : 3) : 2;
          case 20:
          case 21:
          case 22:
          case 30:
          case 31:
          case 32:
          case 33:
            return i ? 3 : 2;
          case 50:
            return 2;
          case 60:
            return 1;
          case 70:
            return 0;
        }
      })(t.w_, this.un.timeVisible, this.un.secondsVisible);
      if (void 0 !== this.un.tickMarkFormatter) {
        const n = this.un.tickMarkFormatter(t.M_, i, this.Ba.locale);
        if (null !== n) return n;
      }
      return (function (t, i, n) {
        const s = {};
        switch (i) {
          case 0:
            s.year = "numeric";
            break;
          case 1:
            s.month = "short";
            break;
          case 2:
            s.day = "numeric";
            break;
          case 3:
            (s.hour12 = !1), (s.hour = "2-digit"), (s.minute = "2-digit");
            break;
          case 4:
            (s.hour12 = !1),
              (s.hour = "2-digit"),
              (s.minute = "2-digit"),
              (s.second = "2-digit");
        }
        const e =
          void 0 === t.__
            ? new Date(1e3 * t.u_)
            : new Date(Date.UTC(t.__.year, t.__.month - 1, t.__.day));
        return new Date(
          e.getUTCFullYear(),
          e.getUTCMonth(),
          e.getUTCDate(),
          e.getUTCHours(),
          e.getUTCMinutes(),
          e.getUTCSeconds(),
          e.getUTCMilliseconds()
        ).toLocaleString(n, s);
      })(t._t, i, this.Ba.locale);
    }
    Ou(t) {
      const i = this.E_;
      (this.E_ = t),
        ln(i.C_(), this.E_.C_()) || this.L_.m(),
        ln(i.T_(), this.E_.T_()) || this.z_.m(),
        this.Du();
    }
    Du() {
      this.V_ = null;
    }
    q_() {
      this.Du(), this.B_.clear();
    }
    H_() {
      const t = this.Ba.dateFormat;
      this.un.timeVisible
        ? (this.Pu = new en({
            n_: t,
            s_: this.un.secondsVisible ? "%h:%m:%s" : "%h:%m",
            e_: "   ",
            r_: this.Ba.locale,
          }))
        : (this.Pu = new tn(t, this.Ba.locale));
    }
    Y_() {
      if (!this.un.fixLeftEdge) return;
      const t = this.Q_();
      if (null === t) return;
      const i = this.Ns();
      if (null === i) return;
      const n = i.Ms() - t;
      if (n < 0) {
        const t = this.W_ - n - 1;
        this.Gn(t);
      }
      this.nu();
    }
    X_() {
      this.su(), this.nu();
    }
  }
  class vn extends D {
    constructor(t) {
      super(), (this.zu = new Map()), (this.It = t);
    }
    Z(t) {}
    G(t) {
      if (!this.It.Ct) return;
      const { context: i, mediaSize: n } = t;
      let s = 0;
      for (const t of this.It.Iu) {
        if (0 === t.Gt.length) continue;
        i.font = t.P;
        const e = this.Nu(i, t.Gt);
        e > n.width ? (t.pu = n.width / e) : (t.pu = 1), (s += t.Vu * t.pu);
      }
      let e = 0;
      switch (this.It.Fu) {
        case "top":
          e = 0;
          break;
        case "center":
          e = Math.max((n.height - s) / 2, 0);
          break;
        case "bottom":
          e = Math.max(n.height - s, 0);
      }
      i.fillStyle = this.It.D;
      for (const t of this.It.Iu) {
        i.save();
        let s = 0;
        switch (this.It.Wu) {
          case "left":
            (i.textAlign = "left"), (s = t.Vu / 2);
            break;
          case "center":
            (i.textAlign = "center"), (s = n.width / 2);
            break;
          case "right":
            (i.textAlign = "right"), (s = n.width - 1 - t.Vu / 2);
        }
        i.translate(s, e),
          (i.textBaseline = "top"),
          (i.font = t.P),
          i.scale(t.pu, t.pu),
          i.fillText(t.Gt, 0, t.ju),
          i.restore(),
          (e += t.Vu * t.pu);
      }
    }
    Nu(t, i) {
      const n = this.$u(t.font);
      let s = n.get(i);
      return void 0 === s && ((s = t.measureText(i).width), n.set(i, s)), s;
    }
    $u(t) {
      let i = this.zu.get(t);
      return void 0 === i && ((i = new Map()), this.zu.set(t, i)), i;
    }
  }
  class mn {
    constructor(t) {
      (this.vt = !0),
        (this.Wt = { Ct: !1, D: "", Iu: [], Fu: "center", Wu: "center" }),
        (this.jt = new vn(this.Wt)),
        (this.$t = t);
    }
    gt() {
      this.vt = !0;
    }
    Mt() {
      return this.vt && (this.St(), (this.vt = !1)), this.jt;
    }
    St() {
      const t = this.$t.F(),
        i = this.Wt;
      (i.Ct = t.visible),
        i.Ct &&
          ((i.D = t.color),
          (i.Wu = t.horzAlign),
          (i.Fu = t.vertAlign),
          (i.Iu = [
            {
              Gt: t.text,
              P: T(t.fontSize, t.fontFamily, t.fontStyle),
              Vu: 1.2 * t.fontSize,
              ju: 0,
              pu: 0,
            },
          ]));
    }
  }
  class bn extends K {
    constructor(t, i) {
      super(), (this.un = i), (this.bn = new mn(this));
    }
    Pn() {
      return [];
    }
    Tn() {
      return [this.bn];
    }
    F() {
      return this.un;
    }
    Dn() {
      this.bn.gt();
    }
  }
  !(function (t) {
    (t[(t.OnTouchEnd = 0)] = "OnTouchEnd"),
      (t[(t.OnNextTap = 1)] = "OnNextTap");
  })(un || (un = {}));
  class gn {
    constructor(t, i) {
      (this.Hu = []),
        (this.Uu = []),
        (this.vo = 0),
        (this.qu = null),
        (this.Yu = new m()),
        (this.Xu = new m()),
        (this.Zu = null),
        (this.Ku = t),
        (this.un = i),
        (this.Gu = new P(this)),
        (this.wo = new pn(this, i.timeScale, this.un.localization)),
        (this.bt = new J(this, i.crosshair)),
        (this.Ju = new ki(i.crosshair)),
        (this.Qu = new bn(this, i.watermark)),
        this.tc(),
        this.Hu[0].Do(2e3),
        (this.ic = this.nc(0)),
        (this.sc = this.nc(1));
    }
    dl() {
      this.ec(tt.ss());
    }
    Ch() {
      this.ec(tt.ns());
    }
    Cl() {
      this.ec(new tt(1));
    }
    fl(t) {
      const i = this.rc(t);
      this.ec(i);
    }
    hc() {
      return this.qu;
    }
    lc(t) {
      const i = this.qu;
      (this.qu = t), null !== i && this.fl(i.ac), null !== t && this.fl(t.ac);
    }
    F() {
      return this.un;
    }
    kh(t) {
      b(this.un, t),
        this.Hu.forEach((i) => i.Co(t)),
        void 0 !== t.timeScale && this.wo.kh(t.timeScale),
        void 0 !== t.localization && this.wo.U_(t.localization),
        (t.leftPriceScale || t.rightPriceScale) && this.Yu.m(),
        (this.ic = this.nc(0)),
        (this.sc = this.nc(1)),
        this.dl();
    }
    oc(t, i) {
      if ("left" === t) return void this.kh({ leftPriceScale: i });
      if ("right" === t) return void this.kh({ rightPriceScale: i });
      const n = this._c(t);
      null !== n && (n.Ot.kh(i), this.Yu.m());
    }
    _c(t) {
      for (const i of this.Hu) {
        const n = i.To(t);
        if (null !== n) return { Ht: i, Ot: n };
      }
      return null;
    }
    yt() {
      return this.wo;
    }
    uc() {
      return this.Hu;
    }
    cc() {
      return this.Qu;
    }
    dc() {
      return this.bt;
    }
    fc() {
      return this.Xu;
    }
    vc(t, i) {
      t.Ha(i), this.lu();
    }
    Oo(t) {
      (this.vo = t),
        this.wo.Oo(this.vo),
        this.Hu.forEach((i) => i.Oo(t)),
        this.lu();
    }
    tc(t) {
      const i = new qi(this.wo, this);
      void 0 !== t ? this.Hu.splice(t, 0, i) : this.Hu.push(i);
      const n = void 0 === t ? this.Hu.length - 1 : t,
        s = tt.ss();
      return s.Nn(n, { Vn: 0, Fn: !0 }), this.ec(s), i;
    }
    Vo(t, i, n) {
      t.Vo(i, n);
    }
    Fo(t, i, n) {
      t.Fo(i, n), this.pl(), this.ec(this.mc(t, 2));
    }
    Wo(t, i) {
      t.Wo(i), this.ec(this.mc(t, 2));
    }
    jo(t, i, n) {
      i.Na() || t.jo(i, n);
    }
    $o(t, i, n) {
      i.Na() || (t.$o(i, n), this.pl(), this.ec(this.mc(t, 2)));
    }
    Ho(t, i) {
      i.Na() || (t.Ho(i), this.ec(this.mc(t, 2)));
    }
    qo(t, i) {
      t.qo(i), this.ec(this.mc(t, 2));
    }
    bc(t) {
      this.wo.ro(t);
    }
    gc(t, i) {
      const n = this.yt();
      if (n.Vi() || 0 === i) return;
      const s = n.$i();
      (t = Math.max(1, Math.min(t, s))), n.pu(t, i), this.lu();
    }
    wc(t) {
      this.Mc(0), this.Sc(t), this.xc();
    }
    yc(t) {
      this.wo.ho(t), this.lu();
    }
    kc() {
      this.wo.lo(), this.Ch();
    }
    Mc(t) {
      this.wo.ao(t);
    }
    Sc(t) {
      this.wo.oo(t), this.lu();
    }
    xc() {
      this.wo._o(), this.Ch();
    }
    wt() {
      return this.Uu;
    }
    Cc(t, i, n, s) {
      this.bt.gn(t, i);
      let e = NaN,
        r = this.wo.ru(t);
      const h = this.wo.Ns();
      null !== h && (r = Math.min(Math.max(h.Ms(), r), h.ci()));
      const l = s.fn(),
        a = l.Tt();
      null !== a && (e = l.pn(i, a)),
        (e = this.Ju.Wl(e, r, s)),
        this.bt.xn(r, e, s),
        this.Cl(),
        this.Xu.m(this.bt.xt(), { x: t, y: i }, n);
    }
    Tc() {
      this.dc().kn(), this.Cl(), this.Xu.m(null, null, null);
    }
    pl() {
      const t = this.bt.Ht();
      if (null !== t) {
        const i = this.bt.Mn(),
          n = this.bt.Sn();
        this.Cc(i, n, null, t);
      }
      this.bt.Dn();
    }
    Pc(t, i, n) {
      const s = this.wo.vn(0);
      void 0 !== i && void 0 !== n && this.wo.gt(i, n);
      const e = this.wo.vn(0),
        r = this.wo.eu(),
        h = this.wo.Ns();
      if (null !== h && null !== s && null !== e) {
        const i = h.Lr(r),
          n = s.u_ > e.u_,
          l = null !== t && t > r && !n,
          a = i && this.wo.F().shiftVisibleRangeOnNewBar;
        if (l && !a) {
          const i = t - r;
          this.wo.Gn(this.wo.ou() - i);
        }
      }
      this.wo.fu(t);
    }
    bl(t) {
      null !== t && t.Xo();
    }
    Ke(t) {
      const i = this.Hu.find((i) => i.Ja().includes(t));
      return void 0 === i ? null : i;
    }
    lu() {
      this.Qu.Dn(), this.Hu.forEach((t) => t.Xo()), this.pl();
    }
    M() {
      this.Hu.forEach((t) => t.M()),
        (this.Hu.length = 0),
        (this.un.localization.priceFormatter = void 0),
        (this.un.localization.timeFormatter = void 0);
    }
    Rc() {
      return this.Gu;
    }
    tr() {
      return this.Gu.F();
    }
    Po() {
      return this.Yu;
    }
    Dc(t, i) {
      const n = this.Hu[0],
        s = this.Oc(i, t, n);
      return this.Uu.push(s), 1 === this.Uu.length ? this.dl() : this.Ch(), s;
    }
    Bc(t) {
      const i = this.Ke(t),
        n = this.Uu.indexOf(t);
      e(-1 !== n, "Series not found"),
        this.Uu.splice(n, 1),
        h(i).no(t),
        t.M && t.M();
    }
    cl(t, i) {
      const n = h(this.Ke(t));
      n.no(t);
      const s = this._c(i);
      if (null === s) {
        const s = t.Zi();
        n.Qa(t, i, s);
      } else {
        const e = s.Ht === n ? t.Zi() : void 0;
        s.Ht.Qa(t, i, e);
      }
    }
    Cu() {
      const t = tt.ns();
      t.$n(), this.ec(t);
    }
    Ec(t) {
      const i = tt.ns();
      i.qn(t), this.ec(i);
    }
    Zn() {
      const t = tt.ns();
      t.Zn(), this.ec(t);
    }
    Kn(t) {
      const i = tt.ns();
      i.Kn(t), this.ec(i);
    }
    Gn(t) {
      const i = tt.ns();
      i.Gn(t), this.ec(i);
    }
    Yn(t) {
      const i = tt.ns();
      i.Yn(t), this.ec(i);
    }
    Hn() {
      const t = tt.ns();
      t.Hn(), this.ec(t);
    }
    Ac() {
      return this.un.rightPriceScale.visible ? "right" : "left";
    }
    Lc() {
      return this.sc;
    }
    U() {
      return this.ic;
    }
    At(t) {
      const i = this.sc,
        n = this.ic;
      if (i === n) return i;
      if (
        ((t = Math.max(0, Math.min(100, Math.round(100 * t)))),
        null === this.Zu || this.Zu.bs !== n || this.Zu.gs !== i)
      )
        this.Zu = { bs: n, gs: i, zc: new Map() };
      else {
        const i = this.Zu.zc.get(t);
        if (void 0 !== i) return i;
      }
      const s = (function (t, i, n) {
        const [s, e, r, h] = p(t),
          [l, a, u, c] = p(i),
          d = [
            o(s + n * (l - s)),
            o(e + n * (a - e)),
            o(r + n * (u - r)),
            _(h + n * (c - h)),
          ];
        return `rgba(${d[0]}, ${d[1]}, ${d[2]}, ${d[3]})`;
      })(n, i, t / 100);
      return this.Zu.zc.set(t, s), s;
    }
    mc(t, i) {
      const n = new tt(i);
      if (null !== t) {
        const s = this.Hu.indexOf(t);
        n.Nn(s, { Vn: i });
      }
      return n;
    }
    rc(t, i) {
      return void 0 === i && (i = 2), this.mc(this.Ke(t), i);
    }
    ec(t) {
      this.Ku && this.Ku(t), this.Hu.forEach((t) => t.Ko().Th().gt());
    }
    Oc(t, i, n) {
      const s = new yi(this, t, i),
        e = void 0 !== t.priceScaleId ? t.priceScaleId : this.Ac();
      return n.Qa(s, e), Q(e) || s.kh(t), s;
    }
    nc(t) {
      const i = this.un.layout;
      return "gradient" === i.background.type
        ? 0 === t
          ? i.background.topColor
          : i.background.bottomColor
        : i.background.color;
    }
  }
  function wn(t) {
    return !g(t) && !M(t);
  }
  function Mn(t) {
    return g(t);
  }
  function Sn(t) {
    var i = t.width,
      n = t.height;
    if (i < 0) throw new Error("Negative width is not allowed for Size");
    if (n < 0) throw new Error("Negative height is not allowed for Size");
    return { width: i, height: n };
  }
  function xn(t, i) {
    return t.width === i.width && t.height === i.height;
  }
  !(function (t) {
    (t[(t.Disabled = 0)] = "Disabled"),
      (t[(t.Continuous = 1)] = "Continuous"),
      (t[(t.OnDataUpdate = 2)] = "OnDataUpdate");
  })(cn || (cn = {})),
    (function (t) {
      (t[(t.LastBar = 0)] = "LastBar"),
        (t[(t.LastVisible = 1)] = "LastVisible");
    })(dn || (dn = {})),
    (function (t) {
      (t.Solid = "solid"), (t.VerticalGradient = "gradient");
    })(fn || (fn = {}));
  var yn = (function () {
    function t(t) {
      var i = this;
      (this._resolutionListener = function () {
        return i._onResolutionChanged();
      }),
        (this._resolutionMediaQueryList = null),
        (this._observers = []),
        (this._window = t),
        this._installResolutionListener();
    }
    return (
      (t.prototype.dispose = function () {
        this._uninstallResolutionListener(), (this._window = null);
      }),
      Object.defineProperty(t.prototype, "value", {
        get: function () {
          return this._window.devicePixelRatio;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.subscribe = function (t) {
        var i = this,
          n = { next: t };
        return (
          this._observers.push(n),
          {
            unsubscribe: function () {
              i._observers = i._observers.filter(function (t) {
                return t !== n;
              });
            },
          }
        );
      }),
      (t.prototype._installResolutionListener = function () {
        if (null !== this._resolutionMediaQueryList)
          throw new Error("Resolution listener is already installed");
        var t = this._window.devicePixelRatio;
        (this._resolutionMediaQueryList = this._window.matchMedia(
          "all and (resolution: ".concat(t, "dppx)")
        )),
          this._resolutionMediaQueryList.addListener(this._resolutionListener);
      }),
      (t.prototype._uninstallResolutionListener = function () {
        null !== this._resolutionMediaQueryList &&
          (this._resolutionMediaQueryList.removeListener(
            this._resolutionListener
          ),
          (this._resolutionMediaQueryList = null));
      }),
      (t.prototype._reinstallResolutionListener = function () {
        this._uninstallResolutionListener(), this._installResolutionListener();
      }),
      (t.prototype._onResolutionChanged = function () {
        var t = this;
        this._observers.forEach(function (i) {
          return i.next(t._window.devicePixelRatio);
        }),
          this._reinstallResolutionListener();
      }),
      t
    );
  })();
  var kn = (function () {
    function t(t, i, n) {
      var s;
      (this._canvasElement = null),
        (this._bitmapSizeChangedListeners = []),
        (this._suggestedBitmapSize = null),
        (this._suggestedBitmapSizeChangedListeners = []),
        (this._devicePixelRatioObservable = null),
        (this._canvasElementResizeObserver = null),
        (this._canvasElement = t),
        (this._canvasElementClientSize = Sn({
          width: this._canvasElement.clientWidth,
          height: this._canvasElement.clientHeight,
        })),
        (this._transformBitmapSize =
          null != i
            ? i
            : function (t) {
                return t;
              }),
        (this._allowResizeObserver =
          null === (s = null == n ? void 0 : n.allowResizeObserver) ||
          void 0 === s ||
          s),
        this._chooseAndInitObserver();
    }
    return (
      (t.prototype.dispose = function () {
        var t, i;
        if (null === this._canvasElement) throw new Error("Object is disposed");
        null === (t = this._canvasElementResizeObserver) ||
          void 0 === t ||
          t.disconnect(),
          (this._canvasElementResizeObserver = null),
          null === (i = this._devicePixelRatioObservable) ||
            void 0 === i ||
            i.dispose(),
          (this._devicePixelRatioObservable = null),
          (this._suggestedBitmapSizeChangedListeners.length = 0),
          (this._bitmapSizeChangedListeners.length = 0),
          (this._canvasElement = null);
      }),
      Object.defineProperty(t.prototype, "canvasElement", {
        get: function () {
          if (null === this._canvasElement)
            throw new Error("Object is disposed");
          return this._canvasElement;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, "canvasElementClientSize", {
        get: function () {
          return this._canvasElementClientSize;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, "bitmapSize", {
        get: function () {
          return Sn({
            width: this.canvasElement.width,
            height: this.canvasElement.height,
          });
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.resizeCanvasElement = function (t) {
        (this._canvasElementClientSize = Sn(t)),
          (this.canvasElement.style.width = "".concat(
            this._canvasElementClientSize.width,
            "px"
          )),
          (this.canvasElement.style.height = "".concat(
            this._canvasElementClientSize.height,
            "px"
          )),
          this._invalidateBitmapSize();
      }),
      (t.prototype.subscribeBitmapSizeChanged = function (t) {
        this._bitmapSizeChangedListeners.push(t);
      }),
      (t.prototype.unsubscribeBitmapSizeChanged = function (t) {
        this._bitmapSizeChangedListeners =
          this._bitmapSizeChangedListeners.filter(function (i) {
            return i !== t;
          });
      }),
      Object.defineProperty(t.prototype, "suggestedBitmapSize", {
        get: function () {
          return this._suggestedBitmapSize;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.subscribeSuggestedBitmapSizeChanged = function (t) {
        this._suggestedBitmapSizeChangedListeners.push(t);
      }),
      (t.prototype.unsubscribeSuggestedBitmapSizeChanged = function (t) {
        this._suggestedBitmapSizeChangedListeners =
          this._suggestedBitmapSizeChangedListeners.filter(function (i) {
            return i !== t;
          });
      }),
      (t.prototype.applySuggestedBitmapSize = function () {
        if (null !== this._suggestedBitmapSize) {
          var t = this._suggestedBitmapSize;
          (this._suggestedBitmapSize = null),
            this._resizeBitmap(t),
            this._emitSuggestedBitmapSizeChanged(t, this._suggestedBitmapSize);
        }
      }),
      (t.prototype._resizeBitmap = function (t) {
        var i = this.bitmapSize;
        xn(i, t) ||
          ((this.canvasElement.width = t.width),
          (this.canvasElement.height = t.height),
          this._emitBitmapSizeChanged(i, t));
      }),
      (t.prototype._emitBitmapSizeChanged = function (t, i) {
        var n = this;
        this._bitmapSizeChangedListeners.forEach(function (s) {
          return s.call(n, t, i);
        });
      }),
      (t.prototype._suggestNewBitmapSize = function (t) {
        var i = this._suggestedBitmapSize,
          n = Sn(this._transformBitmapSize(t, this._canvasElementClientSize)),
          s = xn(this.bitmapSize, n) ? null : n;
        (null === i && null === s) ||
          (null !== i && null !== s && xn(i, s)) ||
          ((this._suggestedBitmapSize = s),
          this._emitSuggestedBitmapSizeChanged(i, s));
      }),
      (t.prototype._emitSuggestedBitmapSizeChanged = function (t, i) {
        var n = this;
        this._suggestedBitmapSizeChangedListeners.forEach(function (s) {
          return s.call(n, t, i);
        });
      }),
      (t.prototype._chooseAndInitObserver = function () {
        var t = this;
        this._allowResizeObserver
          ? new Promise(function (t) {
              var i = new ResizeObserver(function (n) {
                t(
                  n.every(function (t) {
                    return "devicePixelContentBoxSize" in t;
                  })
                ),
                  i.disconnect();
              });
              i.observe(document.body, { box: "device-pixel-content-box" });
            })
              .catch(function () {
                return !1;
              })
              .then(function (i) {
                return i
                  ? t._initResizeObserver()
                  : t._initDevicePixelRatioObservable();
              })
          : this._initDevicePixelRatioObservable();
      }),
      (t.prototype._initDevicePixelRatioObservable = function () {
        var t = this;
        if (null !== this._canvasElement) {
          var i = Cn(this._canvasElement);
          if (null === i)
            throw new Error("No window is associated with the canvas");
          (this._devicePixelRatioObservable = (function (t) {
            return new yn(t);
          })(i)),
            this._devicePixelRatioObservable.subscribe(function () {
              return t._invalidateBitmapSize();
            }),
            this._invalidateBitmapSize();
        }
      }),
      (t.prototype._invalidateBitmapSize = function () {
        var t, i;
        if (null !== this._canvasElement) {
          var n = Cn(this._canvasElement);
          if (null !== n) {
            var s =
                null !==
                  (i =
                    null === (t = this._devicePixelRatioObservable) ||
                    void 0 === t
                      ? void 0
                      : t.value) && void 0 !== i
                  ? i
                  : n.devicePixelRatio,
              e = this._canvasElement.getClientRects(),
              r =
                void 0 !== e[0]
                  ? (function (t, i) {
                      return Sn({
                        width:
                          Math.round(t.left * i + t.width * i) -
                          Math.round(t.left * i),
                        height:
                          Math.round(t.top * i + t.height * i) -
                          Math.round(t.top * i),
                      });
                    })(e[0], s)
                  : Sn({
                      width: this._canvasElementClientSize.width * s,
                      height: this._canvasElementClientSize.height * s,
                    });
            this._suggestNewBitmapSize(r);
          }
        }
      }),
      (t.prototype._initResizeObserver = function () {
        var t = this;
        null !== this._canvasElement &&
          ((this._canvasElementResizeObserver = new ResizeObserver(function (
            i
          ) {
            var n = i.find(function (i) {
              return i.target === t._canvasElement;
            });
            if (
              n &&
              n.devicePixelContentBoxSize &&
              n.devicePixelContentBoxSize[0]
            ) {
              var s = n.devicePixelContentBoxSize[0],
                e = Sn({ width: s.inlineSize, height: s.blockSize });
              t._suggestNewBitmapSize(e);
            }
          })),
          this._canvasElementResizeObserver.observe(this._canvasElement, {
            box: "device-pixel-content-box",
          }));
      }),
      t
    );
  })();
  function Cn(t) {
    return t.ownerDocument.defaultView;
  }
  var Tn = (function () {
    function t(t, i, n) {
      if (0 === i.width || 0 === i.height)
        throw new TypeError(
          "Rendering target could only be created on a media with positive width and height"
        );
      if (((this._mediaSize = i), 0 === n.width || 0 === n.height))
        throw new TypeError(
          "Rendering target could only be created using a bitmap with positive integer width and height"
        );
      (this._bitmapSize = n), (this._context = t);
    }
    return (
      (t.prototype.useMediaCoordinateSpace = function (t) {
        try {
          return (
            this._context.save(),
            this._context.setTransform(1, 0, 0, 1, 0, 0),
            this._context.scale(
              this._horizontalPixelRatio,
              this._verticalPixelRatio
            ),
            t({ context: this._context, mediaSize: this._mediaSize })
          );
        } finally {
          this._context.restore();
        }
      }),
      (t.prototype.useBitmapCoordinateSpace = function (t) {
        try {
          return (
            this._context.save(),
            this._context.setTransform(1, 0, 0, 1, 0, 0),
            t({
              context: this._context,
              mediaSize: this._mediaSize,
              bitmapSize: this._bitmapSize,
              horizontalPixelRatio: this._horizontalPixelRatio,
              verticalPixelRatio: this._verticalPixelRatio,
            })
          );
        } finally {
          this._context.restore();
        }
      }),
      Object.defineProperty(t.prototype, "_horizontalPixelRatio", {
        get: function () {
          return this._bitmapSize.width / this._mediaSize.width;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, "_verticalPixelRatio", {
        get: function () {
          return this._bitmapSize.height / this._mediaSize.height;
        },
        enumerable: !1,
        configurable: !0,
      }),
      t
    );
  })();
  function Pn(t, i) {
    var n = t.canvasElementClientSize;
    if (0 === n.width || 0 === n.height) return null;
    var s = t.bitmapSize;
    if (0 === s.width || 0 === s.height) return null;
    var e = t.canvasElement.getContext("2d", i);
    return null === e ? null : new Tn(e, n, s);
  }
  const Rn = "undefined" != typeof window;
  function Dn() {
    return (
      !!Rn && window.navigator.userAgent.toLowerCase().indexOf("firefox") > -1
    );
  }
  function On() {
    return !!Rn && /iPhone|iPad|iPod/.test(window.navigator.platform);
  }
  function Bn(t) {
    return t + (t % 2);
  }
  function En(t, i) {
    return t.Ic - i.Ic;
  }
  function An(t, i, n) {
    const s = (t.Ic - i.Ic) / (t._t - i._t);
    return Math.sign(s) * Math.min(Math.abs(s), n);
  }
  class Ln {
    constructor(t, i, n, s) {
      (this.Nc = null),
        (this.Vc = null),
        (this.Fc = null),
        (this.Wc = null),
        (this.jc = null),
        (this.$c = 0),
        (this.Hc = 0),
        (this.Uc = t),
        (this.qc = i),
        (this.Yc = n),
        (this.es = s);
    }
    Xc(t, i) {
      if (null !== this.Nc) {
        if (this.Nc._t === i) return void (this.Nc.Ic = t);
        if (Math.abs(this.Nc.Ic - t) < this.es) return;
      }
      (this.Wc = this.Fc),
        (this.Fc = this.Vc),
        (this.Vc = this.Nc),
        (this.Nc = { _t: i, Ic: t });
    }
    pr(t, i) {
      if (null === this.Nc || null === this.Vc) return;
      if (i - this.Nc._t > 50) return;
      let n = 0;
      const s = An(this.Nc, this.Vc, this.qc),
        e = En(this.Nc, this.Vc),
        r = [s],
        h = [e];
      if (((n += e), null !== this.Fc)) {
        const t = An(this.Vc, this.Fc, this.qc);
        if (Math.sign(t) === Math.sign(s)) {
          const i = En(this.Vc, this.Fc);
          if ((r.push(t), h.push(i), (n += i), null !== this.Wc)) {
            const t = An(this.Fc, this.Wc, this.qc);
            if (Math.sign(t) === Math.sign(s)) {
              const i = En(this.Fc, this.Wc);
              r.push(t), h.push(i), (n += i);
            }
          }
        }
      }
      let l = 0;
      for (let t = 0; t < r.length; ++t) l += (h[t] / n) * r[t];
      Math.abs(l) < this.Uc ||
        ((this.jc = { Ic: t, _t: i }),
        (this.Hc = l),
        (this.$c = (function (t, i) {
          const n = Math.log(i);
          return Math.log((1 * n) / -t) / n;
        })(Math.abs(l), this.Yc)));
    }
    Mu(t) {
      const i = h(this.jc),
        n = t - i._t;
      return i.Ic + (this.Hc * (Math.pow(this.Yc, n) - 1)) / Math.log(this.Yc);
    }
    wu(t) {
      return null === this.jc || this.Zc(t) === this.$c;
    }
    Zc(t) {
      const i = t - h(this.jc)._t;
      return Math.min(i, this.$c);
    }
  }
  function zn(t, i) {
    const n = h(t.ownerDocument).createElement("canvas");
    t.appendChild(n);
    const s = (function (t, i) {
      if ("device-pixel-content-box" === i.type)
        return new kn(t, i.transform, i.options);
      throw new Error("Unsupported binding target");
    })(n, {
      type: "device-pixel-content-box",
      options: { allowResizeObserver: !1 },
      transform: (t, i) => ({
        width: Math.max(t.width, i.width),
        height: Math.max(t.height, i.height),
      }),
    });
    return s.resizeCanvasElement(i), s;
  }
  function In(t) {
    Rn &&
      void 0 !== window.chrome &&
      t.addEventListener("mousedown", (t) => {
        if (1 === t.button) return t.preventDefault(), !1;
      });
  }
  class Nn {
    constructor(t, i, n) {
      (this.Kc = 0),
        (this.Gc = null),
        (this.Jc = {
          st: Number.NEGATIVE_INFINITY,
          et: Number.POSITIVE_INFINITY,
        }),
        (this.Qc = 0),
        (this.td = null),
        (this.nd = {
          st: Number.NEGATIVE_INFINITY,
          et: Number.POSITIVE_INFINITY,
        }),
        (this.sd = null),
        (this.ed = !1),
        (this.rd = null),
        (this.hd = null),
        (this.ld = !1),
        (this.ad = !1),
        (this.od = !1),
        (this._d = null),
        (this.ud = null),
        (this.dd = null),
        (this.fd = null),
        (this.pd = null),
        (this.vd = null),
        (this.md = null),
        (this.bd = 0),
        (this.gd = !1),
        (this.wd = !1),
        (this.Md = !1),
        (this.Sd = 0),
        (this.xd = null),
        (this.yd = !On()),
        (this.kd = (t) => {
          this.Cd(t);
        }),
        (this.Td = (t) => {
          if (this.Pd(t)) {
            const i = this.Rd(t);
            if ((++this.Qc, this.td && this.Qc > 1)) {
              const { Dd: n } = this.Od(Wn(t), this.nd);
              n < 30 && !this.od && this.Bd(i, this.Ad.Ed), this.Ld();
            }
          } else {
            const i = this.Rd(t);
            if ((++this.Kc, this.Gc && this.Kc > 1)) {
              const { Dd: n } = this.Od(Wn(t), this.Jc);
              n < 5 && !this.ad && this.zd(i, this.Ad.Id), this.Nd();
            }
          }
        }),
        (this.Vd = t),
        (this.Ad = i),
        (this.un = n),
        this.Fd();
    }
    M() {
      null !== this._d && (this._d(), (this._d = null)),
        null !== this.ud && (this.ud(), (this.ud = null)),
        null !== this.fd && (this.fd(), (this.fd = null)),
        null !== this.pd && (this.pd(), (this.pd = null)),
        null !== this.vd && (this.vd(), (this.vd = null)),
        null !== this.dd && (this.dd(), (this.dd = null)),
        this.Wd(),
        this.Nd();
    }
    jd(t) {
      this.fd && this.fd();
      const i = this.$d.bind(this);
      if (
        ((this.fd = () => {
          this.Vd.removeEventListener("mousemove", i);
        }),
        this.Vd.addEventListener("mousemove", i),
        this.Pd(t))
      )
        return;
      const n = this.Rd(t);
      this.zd(n, this.Ad.Hd), (this.yd = !0);
    }
    Nd() {
      null !== this.Gc && clearTimeout(this.Gc),
        (this.Kc = 0),
        (this.Gc = null),
        (this.Jc = {
          st: Number.NEGATIVE_INFINITY,
          et: Number.POSITIVE_INFINITY,
        });
    }
    Ld() {
      null !== this.td && clearTimeout(this.td),
        (this.Qc = 0),
        (this.td = null),
        (this.nd = {
          st: Number.NEGATIVE_INFINITY,
          et: Number.POSITIVE_INFINITY,
        });
    }
    $d(t) {
      if (this.Md || null !== this.hd) return;
      if (this.Pd(t)) return;
      const i = this.Rd(t);
      this.zd(i, this.Ad.Ud), (this.yd = !0);
    }
    qd(t) {
      const i = $n(t.changedTouches, h(this.xd));
      if (null === i) return;
      if (((this.Sd = jn(t)), null !== this.md)) return;
      if (this.wd) return;
      this.gd = !0;
      const n = this.Od(Wn(i), h(this.hd)),
        { Yd: s, Xd: e, Dd: r } = n;
      if (this.ld || !(r < 5)) {
        if (!this.ld) {
          const t = 0.5 * s,
            i = e >= t && !this.un.Zd(),
            n = t > e && !this.un.Kd();
          i || n || (this.wd = !0),
            (this.ld = !0),
            (this.od = !0),
            this.Wd(),
            this.Ld();
        }
        if (!this.wd) {
          const n = this.Rd(t, i);
          this.Bd(n, this.Ad.Gd), Fn(t);
        }
      }
    }
    Jd(t) {
      if (0 !== t.button) return;
      const i = this.Od(Wn(t), h(this.rd)),
        { Dd: n } = i;
      if ((n >= 5 && ((this.ad = !0), this.Nd()), this.ad)) {
        const i = this.Rd(t);
        this.zd(i, this.Ad.Qd);
      }
    }
    Od(t, i) {
      const n = Math.abs(i.st - t.st),
        s = Math.abs(i.et - t.et);
      return { Yd: n, Xd: s, Dd: n + s };
    }
    tf(t) {
      let i = $n(t.changedTouches, h(this.xd));
      if (
        (null === i && 0 === t.touches.length && (i = t.changedTouches[0]),
        null === i)
      )
        return;
      (this.xd = null),
        (this.Sd = jn(t)),
        this.Wd(),
        (this.hd = null),
        this.vd && (this.vd(), (this.vd = null));
      const n = this.Rd(t, i);
      if ((this.Bd(n, this.Ad.if), ++this.Qc, this.td && this.Qc > 1)) {
        const { Dd: t } = this.Od(Wn(i), this.nd);
        t < 30 && !this.od && this.Bd(n, this.Ad.Ed), this.Ld();
      } else this.od || (this.Bd(n, this.Ad.nf), this.Ad.nf && Fn(t));
      0 === this.Qc && Fn(t),
        0 === t.touches.length && this.ed && ((this.ed = !1), Fn(t));
    }
    Cd(t) {
      if (0 !== t.button) return;
      const i = this.Rd(t);
      if (
        ((this.rd = null),
        (this.Md = !1),
        this.pd && (this.pd(), (this.pd = null)),
        Dn())
      ) {
        this.Vd.ownerDocument.documentElement.removeEventListener(
          "mouseleave",
          this.kd
        );
      }
      if (!this.Pd(t))
        if ((this.zd(i, this.Ad.sf), ++this.Kc, this.Gc && this.Kc > 1)) {
          const { Dd: n } = this.Od(Wn(t), this.Jc);
          n < 5 && !this.ad && this.zd(i, this.Ad.Id), this.Nd();
        } else this.ad || this.zd(i, this.Ad.ef);
    }
    Wd() {
      null !== this.sd && (clearTimeout(this.sd), (this.sd = null));
    }
    rf(t) {
      if (null !== this.xd) return;
      const i = t.changedTouches[0];
      (this.xd = i.identifier), (this.Sd = jn(t));
      const n = this.Vd.ownerDocument.documentElement;
      (this.od = !1),
        (this.ld = !1),
        (this.wd = !1),
        (this.hd = Wn(i)),
        this.vd && (this.vd(), (this.vd = null));
      {
        const i = this.qd.bind(this),
          s = this.tf.bind(this);
        (this.vd = () => {
          n.removeEventListener("touchmove", i),
            n.removeEventListener("touchend", s);
        }),
          n.addEventListener("touchmove", i, { passive: !1 }),
          n.addEventListener("touchend", s, { passive: !1 }),
          this.Wd(),
          (this.sd = setTimeout(this.hf.bind(this, t), 240));
      }
      const s = this.Rd(t, i);
      this.Bd(s, this.Ad.lf),
        this.td ||
          ((this.Qc = 0),
          (this.td = setTimeout(this.Ld.bind(this), 500)),
          (this.nd = Wn(i)));
    }
    af(t) {
      if (0 !== t.button) return;
      const i = this.Vd.ownerDocument.documentElement;
      Dn() && i.addEventListener("mouseleave", this.kd),
        (this.ad = !1),
        (this.rd = Wn(t)),
        this.pd && (this.pd(), (this.pd = null));
      {
        const t = this.Jd.bind(this),
          n = this.Cd.bind(this);
        (this.pd = () => {
          i.removeEventListener("mousemove", t),
            i.removeEventListener("mouseup", n);
        }),
          i.addEventListener("mousemove", t),
          i.addEventListener("mouseup", n);
      }
      if (((this.Md = !0), this.Pd(t))) return;
      const n = this.Rd(t);
      this.zd(n, this.Ad._f),
        this.Gc ||
          ((this.Kc = 0),
          (this.Gc = setTimeout(this.Nd.bind(this), 500)),
          (this.Jc = Wn(t)));
    }
    Fd() {
      this.Vd.addEventListener("mouseenter", this.jd.bind(this)),
        this.Vd.addEventListener("touchcancel", this.Wd.bind(this));
      {
        const t = this.Vd.ownerDocument,
          i = (t) => {
            this.Ad.uf &&
              ((t.composed && this.Vd.contains(t.composedPath()[0])) ||
                (t.target && this.Vd.contains(t.target)) ||
                this.Ad.uf());
          };
        (this.ud = () => {
          t.removeEventListener("touchstart", i);
        }),
          (this._d = () => {
            t.removeEventListener("mousedown", i);
          }),
          t.addEventListener("mousedown", i),
          t.addEventListener("touchstart", i, { passive: !0 });
      }
      On() &&
        ((this.dd = () => {
          this.Vd.removeEventListener("dblclick", this.Td);
        }),
        this.Vd.addEventListener("dblclick", this.Td)),
        this.Vd.addEventListener("mouseleave", this.cf.bind(this)),
        this.Vd.addEventListener("touchstart", this.rf.bind(this), {
          passive: !0,
        }),
        In(this.Vd),
        this.Vd.addEventListener("mousedown", this.af.bind(this)),
        this.df(),
        this.Vd.addEventListener("touchmove", () => {}, { passive: !1 });
    }
    df() {
      (void 0 === this.Ad.ff &&
        void 0 === this.Ad.pf &&
        void 0 === this.Ad.vf) ||
        (this.Vd.addEventListener("touchstart", (t) => this.mf(t.touches), {
          passive: !0,
        }),
        this.Vd.addEventListener(
          "touchmove",
          (t) => {
            if (
              2 === t.touches.length &&
              null !== this.md &&
              void 0 !== this.Ad.pf
            ) {
              const i = Vn(t.touches[0], t.touches[1]) / this.bd;
              this.Ad.pf(this.md, i), Fn(t);
            }
          },
          { passive: !1 }
        ),
        this.Vd.addEventListener("touchend", (t) => {
          this.mf(t.touches);
        }));
    }
    mf(t) {
      1 === t.length && (this.gd = !1),
        2 !== t.length || this.gd || this.ed ? this.bf() : this.gf(t);
    }
    gf(t) {
      const i = this.Vd.getBoundingClientRect() || { left: 0, top: 0 };
      (this.md = {
        st: (t[0].clientX - i.left + (t[1].clientX - i.left)) / 2,
        et: (t[0].clientY - i.top + (t[1].clientY - i.top)) / 2,
      }),
        (this.bd = Vn(t[0], t[1])),
        void 0 !== this.Ad.ff && this.Ad.ff(),
        this.Wd();
    }
    bf() {
      null !== this.md &&
        ((this.md = null), void 0 !== this.Ad.vf && this.Ad.vf());
    }
    cf(t) {
      if ((this.fd && this.fd(), this.Pd(t))) return;
      if (!this.yd) return;
      const i = this.Rd(t);
      this.zd(i, this.Ad.wf), (this.yd = !On());
    }
    hf(t) {
      const i = $n(t.touches, h(this.xd));
      if (null === i) return;
      const n = this.Rd(t, i);
      this.Bd(n, this.Ad.Mf), (this.od = !0), (this.ed = !0);
    }
    Pd(t) {
      return t.sourceCapabilities &&
        void 0 !== t.sourceCapabilities.firesTouchEvents
        ? t.sourceCapabilities.firesTouchEvents
        : jn(t) < this.Sd + 500;
    }
    Bd(t, i) {
      i && i.call(this.Ad, t);
    }
    zd(t, i) {
      i && i.call(this.Ad, t);
    }
    Rd(t, i) {
      const n = i || t,
        s = this.Vd.getBoundingClientRect() || { left: 0, top: 0 };
      return {
        clientX: n.clientX,
        clientY: n.clientY,
        pageX: n.pageX,
        pageY: n.pageY,
        screenX: n.screenX,
        screenY: n.screenY,
        localX: n.clientX - s.left,
        localY: n.clientY - s.top,
        ctrlKey: t.ctrlKey,
        altKey: t.altKey,
        shiftKey: t.shiftKey,
        metaKey: t.metaKey,
        Sf:
          !t.type.startsWith("mouse") &&
          "contextmenu" !== t.type &&
          "click" !== t.type,
        xf: t.type,
        yf: n.target,
        kf: t.view,
        Cf: () => {
          "touchstart" !== t.type && Fn(t);
        },
      };
    }
  }
  function Vn(t, i) {
    const n = t.clientX - i.clientX,
      s = t.clientY - i.clientY;
    return Math.sqrt(n * n + s * s);
  }
  function Fn(t) {
    t.cancelable && t.preventDefault();
  }
  function Wn(t) {
    return { st: t.pageX, et: t.pageY };
  }
  function jn(t) {
    return t.timeStamp || performance.now();
  }
  function $n(t, i) {
    for (let n = 0; n < t.length; ++n) if (t[n].identifier === i) return t[n];
    return null;
  }
  class Hn {
    constructor(t, i, n, s) {
      (this.Ii = null),
        (this.Tf = null),
        (this.Pf = !1),
        (this.Rf = new Wt(200)),
        (this.Ir = null),
        (this.Df = 0),
        (this.Of = !1),
        (this.Bf = () => {
          this.Of || this.tn.Ef().Ut().Ch();
        }),
        (this.Af = () => {
          this.Of || this.tn.Ef().Ut().Ch();
        }),
        (this.tn = t),
        (this.un = i),
        (this.Oa = i.layout),
        (this.Gu = n),
        (this.Lf = "left" === s),
        (this.zf = document.createElement("div")),
        (this.zf.style.height = "100%"),
        (this.zf.style.overflow = "hidden"),
        (this.zf.style.width = "25px"),
        (this.zf.style.left = "0"),
        (this.zf.style.position = "relative"),
        (this.If = zn(this.zf, Sn({ width: 16, height: 16 }))),
        this.If.subscribeSuggestedBitmapSizeChanged(this.Bf);
      const e = this.If.canvasElement;
      (e.style.position = "absolute"),
        (e.style.zIndex = "1"),
        (e.style.left = "0"),
        (e.style.top = "0"),
        (this.Nf = zn(this.zf, Sn({ width: 16, height: 16 }))),
        this.Nf.subscribeSuggestedBitmapSizeChanged(this.Af);
      const r = this.Nf.canvasElement;
      (r.style.position = "absolute"),
        (r.style.zIndex = "2"),
        (r.style.left = "0"),
        (r.style.top = "0");
      const h = {
        _f: this.Vf.bind(this),
        lf: this.Vf.bind(this),
        Qd: this.Ff.bind(this),
        Gd: this.Ff.bind(this),
        uf: this.Wf.bind(this),
        sf: this.jf.bind(this),
        if: this.jf.bind(this),
        Id: this.$f.bind(this),
        Ed: this.$f.bind(this),
        Hd: this.Hf.bind(this),
        wf: this.Uf.bind(this),
      };
      this.qf = new Nn(this.Nf.canvasElement, h, {
        Zd: () => !1,
        Kd: () => !0,
      });
    }
    M() {
      this.qf.M(),
        this.Nf.unsubscribeSuggestedBitmapSizeChanged(this.Af),
        this.Nf.dispose(),
        this.If.unsubscribeSuggestedBitmapSizeChanged(this.Bf),
        this.If.dispose(),
        null !== this.Ii && this.Ii.eo().v(this),
        (this.Ii = null);
    }
    Yf() {
      return this.zf;
    }
    T() {
      return this.Oa.fontSize;
    }
    Xf() {
      const t = this.Gu.F();
      return this.Ir !== t.P && (this.Rf.Fe(), (this.Ir = t.P)), t;
    }
    Zf() {
      if (null === this.Ii) return 0;
      let t = 0;
      const i = this.Xf(),
        n = h(this.If.canvasElement.getContext("2d"));
      n.save();
      const s = this.Ii.Jl();
      (n.font = this.Kf()),
        s.length > 0 &&
          (t = Math.max(
            this.Rf.Si(n, s[0].ua),
            this.Rf.Si(n, s[s.length - 1].ua)
          ));
      const e = this.Gf();
      for (let i = e.length; i--; ) {
        const s = this.Rf.Si(n, e[i].Gt());
        s > t && (t = s);
      }
      const r = this.Ii.Tt();
      if (null !== r && null !== this.Tf) {
        const i = this.Ii.pn(1, r),
          s = this.Ii.pn(this.Tf.height - 2, r);
        t = Math.max(
          t,
          this.Rf.Si(
            n,
            this.Ii.Fi(Math.floor(Math.min(i, s)) + 0.11111111111111, r)
          ),
          this.Rf.Si(
            n,
            this.Ii.Fi(Math.ceil(Math.max(i, s)) - 0.11111111111111, r)
          )
        );
      }
      n.restore();
      const l = t || 34;
      return Bn(Math.ceil(i.k + i.C + i.A + i.L + 5 + l));
    }
    Jf(t) {
      (null !== this.Tf && xn(this.Tf, t)) ||
        ((this.Tf = t),
        (this.Of = !0),
        this.If.resizeCanvasElement(t),
        this.Nf.resizeCanvasElement(t),
        (this.Of = !1),
        (this.zf.style.width = `${t.width}px`),
        (this.zf.style.height = `${t.height}px`));
    }
    Qf() {
      return h(this.Tf).width;
    }
    Gi(t) {
      this.Ii !== t &&
        (null !== this.Ii && this.Ii.eo().v(this),
        (this.Ii = t),
        t.eo().l(this.Sa.bind(this), this));
    }
    Ot() {
      return this.Ii;
    }
    Fe() {
      const t = this.tn.tp();
      this.tn.Ef().Ut().qo(t, h(this.Ot()));
    }
    ip(t) {
      if (null === this.Tf) return;
      if (1 !== t) {
        this.np(), this.If.applySuggestedBitmapSize();
        const t = Pn(this.If);
        null !== t &&
          (t.useBitmapCoordinateSpace((t) => {
            this.sp(t), this.ye(t);
          }),
          this.ep(t),
          this.rp(t));
      }
      this.Nf.applySuggestedBitmapSize();
      const i = Pn(this.Nf);
      null !== i &&
        (i.useBitmapCoordinateSpace(({ context: t, bitmapSize: i }) => {
          t.clearRect(0, 0, i.width, i.height);
        }),
        this.hp(i));
    }
    lp() {
      return this.If.bitmapSize;
    }
    ap(t, i, n) {
      const s = this.lp();
      s.width > 0 && s.height > 0 && t.drawImage(this.If.canvasElement, i, n);
    }
    gt() {
      var t;
      null === (t = this.Ii) || void 0 === t || t.Jl();
    }
    Vf(t) {
      if (
        null === this.Ii ||
        this.Ii.Vi() ||
        !this.un.handleScale.axisPressedMouseMove.price
      )
        return;
      const i = this.tn.Ef().Ut(),
        n = this.tn.tp();
      (this.Pf = !0), i.Vo(n, this.Ii, t.localY);
    }
    Ff(t) {
      if (null === this.Ii || !this.un.handleScale.axisPressedMouseMove.price)
        return;
      const i = this.tn.Ef().Ut(),
        n = this.tn.tp(),
        s = this.Ii;
      i.Fo(n, s, t.localY);
    }
    Wf() {
      if (null === this.Ii || !this.un.handleScale.axisPressedMouseMove.price)
        return;
      const t = this.tn.Ef().Ut(),
        i = this.tn.tp(),
        n = this.Ii;
      this.Pf && ((this.Pf = !1), t.Wo(i, n));
    }
    jf(t) {
      if (null === this.Ii || !this.un.handleScale.axisPressedMouseMove.price)
        return;
      const i = this.tn.Ef().Ut(),
        n = this.tn.tp();
      (this.Pf = !1), i.Wo(n, this.Ii);
    }
    $f(t) {
      this.un.handleScale.axisDoubleClickReset.price && this.Fe();
    }
    Hf(t) {
      if (null === this.Ii) return;
      !this.tn.Ef().Ut().F().handleScale.axisPressedMouseMove.price ||
        this.Ii.th() ||
        this.Ii.Va() ||
        this.op(1);
    }
    Uf(t) {
      this.op(0);
    }
    Gf() {
      const t = [],
        i = null === this.Ii ? void 0 : this.Ii;
      return (
        ((n) => {
          for (let s = 0; s < n.length; ++s) {
            const e = n[s].Pn(this.tn.tp(), i);
            for (let i = 0; i < e.length; i++) t.push(e[i]);
          }
        })(this.tn.tp().Ja()),
        t
      );
    }
    sp({ context: t, bitmapSize: i }) {
      const { width: n, height: s } = i,
        e = this.tn.tp().Ut(),
        r = e.U(),
        h = e.Lc();
      r === h ? V(t, 0, 0, n, s, r) : $(t, 0, 0, n, s, r, h);
    }
    ye({ context: t, bitmapSize: i, horizontalPixelRatio: n }) {
      if (null === this.Tf || null === this.Ii || !this.Ii.F().borderVisible)
        return;
      t.fillStyle = this.Ii.F().borderColor;
      const s = Math.max(1, Math.floor(this.Xf().k * n));
      let e;
      (e = this.Lf ? i.width - s : 0), t.fillRect(e, 0, s, i.height);
    }
    ep(t) {
      if (null === this.Tf || null === this.Ii) return;
      const i = this.Ii.Jl(),
        n = this.Ii.F(),
        s = this.Xf(),
        e = this.Lf ? this.Tf.width - s.C : 0;
      n.borderVisible &&
        n.ticksVisible &&
        t.useBitmapCoordinateSpace(
          ({ context: t, horizontalPixelRatio: r, verticalPixelRatio: h }) => {
            t.fillStyle = n.borderColor;
            const l = Math.max(1, Math.floor(h)),
              a = Math.floor(0.5 * h),
              o = Math.round(s.C * r);
            t.beginPath();
            for (const n of i)
              t.rect(Math.floor(e * r), Math.round(n.Yl * h) - a, o, l);
            t.fill();
          }
        ),
        t.useMediaCoordinateSpace(({ context: t }) => {
          var r;
          (t.font = this.Kf()),
            (t.fillStyle =
              null !== (r = n.textColor) && void 0 !== r
                ? r
                : this.Oa.textColor),
            (t.textAlign = this.Lf ? "right" : "left"),
            (t.textBaseline = "middle");
          const h = this.Lf ? Math.round(e - s.A) : Math.round(e + s.C + s.A),
            l = i.map((i) => this.Rf.Mi(t, i.ua));
          for (let n = i.length; n--; ) {
            const s = i[n];
            t.fillText(s.ua, h, s.Yl + l[n]);
          }
        });
    }
    np() {
      if (null === this.Tf || null === this.Ii) return;
      let t = this.Tf.height / 2;
      const i = [],
        n = this.Ii.Ja().slice(),
        s = this.tn.tp(),
        e = this.Xf();
      this.Ii === s.Je() &&
        this.tn
          .tp()
          .Ja()
          .forEach((t) => {
            s.Ge(t) && n.push(t);
          });
      const r = this.Ii.jl()[0],
        h = this.Ii;
      n.forEach((n) => {
        const e = n.Pn(s, h);
        e.forEach((t) => {
          t.Bi(null), t.Ei() && i.push(t);
        }),
          r === n && e.length > 0 && (t = e[0].yi());
      }),
        i.forEach((t) => t.Bi(t.yi()));
      this.Ii.F().alignLabels && this._p(i, e, t);
    }
    _p(t, i, n) {
      if (null === this.Tf) return;
      const s = t.filter((t) => t.yi() <= n),
        e = t.filter((t) => t.yi() > n);
      s.sort((t, i) => i.yi() - t.yi()),
        s.length && e.length && e.push(s[0]),
        e.sort((t, i) => t.yi() - i.yi());
      for (const n of t) {
        const t = Math.floor(n.Lt(i) / 2),
          s = n.yi();
        s > -t && s < t && n.Bi(t),
          s > this.Tf.height - t &&
            s < this.Tf.height + t &&
            n.Bi(this.Tf.height - t);
      }
      for (let t = 1; t < s.length; t++) {
        const n = s[t],
          e = s[t - 1],
          r = e.Lt(i, !1),
          h = n.yi(),
          l = e.Oi();
        h > l - r && n.Bi(l - r);
      }
      for (let t = 1; t < e.length; t++) {
        const n = e[t],
          s = e[t - 1],
          r = s.Lt(i, !0),
          h = n.yi(),
          l = s.Oi();
        h < l + r && n.Bi(l + r);
      }
    }
    rp(t) {
      if (null === this.Tf) return;
      const i = this.Gf(),
        n = this.Xf(),
        s = this.Lf ? "right" : "left";
      i.forEach((i) => {
        if (i.Ai()) {
          i.Mt(h(this.Ii)).X(t, n, this.Rf, s);
        }
      });
    }
    hp(t) {
      if (null === this.Tf || null === this.Ii) return;
      const i = this.tn.Ef().Ut(),
        n = [],
        s = this.tn.tp(),
        e = i.dc().Pn(s, this.Ii);
      e.length && n.push(e);
      const r = this.Xf(),
        l = this.Lf ? "right" : "left";
      n.forEach((i) => {
        i.forEach((i) => {
          i.Mt(h(this.Ii)).X(t, r, this.Rf, l);
        });
      });
    }
    op(t) {
      this.zf.style.cursor = 1 === t ? "ns-resize" : "default";
    }
    Sa() {
      const t = this.Zf();
      this.Df < t && this.tn.Ef().Ut().dl(), (this.Df = t);
    }
    Kf() {
      return T(this.Oa.fontSize, this.Oa.fontFamily);
    }
  }
  function Un(t, i, n, s) {
    t.K && t.K(i, n, s);
  }
  function qn(t, i, n, s) {
    t.X(i, n, s);
  }
  function Yn(t, i) {
    return t.Tn(i);
  }
  function Xn(t, i) {
    return t.Ji(i);
  }
  function Zn(t, i) {
    return void 0 !== t.kl ? t.kl(i) : [];
  }
  class Kn {
    constructor(t, i) {
      (this.Tf = Sn({ width: 0, height: 0 })),
        (this.up = null),
        (this.cp = null),
        (this.dp = null),
        (this.fp = !1),
        (this.pp = new m()),
        (this.vp = 0),
        (this.mp = !1),
        (this.bp = null),
        (this.gp = !1),
        (this.wp = null),
        (this.Mp = null),
        (this.Of = !1),
        (this.Bf = () => {
          this.Of || null === this.Sp || this.Hi().Ch();
        }),
        (this.Af = () => {
          this.Of || null === this.Sp || this.Hi().Ch();
        }),
        (this.xp = t),
        (this.Sp = i),
        this.Sp.Zo().l(this.yp.bind(this), this, !0),
        (this.kp = document.createElement("td")),
        (this.kp.style.padding = "0"),
        (this.kp.style.position = "relative");
      const n = document.createElement("div");
      (n.style.width = "100%"),
        (n.style.height = "100%"),
        (n.style.position = "relative"),
        (n.style.overflow = "hidden"),
        (this.Cp = document.createElement("td")),
        (this.Cp.style.padding = "0"),
        (this.Tp = document.createElement("td")),
        (this.Tp.style.padding = "0"),
        this.kp.appendChild(n),
        (this.If = zn(n, Sn({ width: 16, height: 16 }))),
        this.If.subscribeSuggestedBitmapSizeChanged(this.Bf);
      const s = this.If.canvasElement;
      (s.style.position = "absolute"),
        (s.style.zIndex = "1"),
        (s.style.left = "0"),
        (s.style.top = "0"),
        (this.Nf = zn(n, Sn({ width: 16, height: 16 }))),
        this.Nf.subscribeSuggestedBitmapSizeChanged(this.Af);
      const e = this.Nf.canvasElement;
      (e.style.position = "absolute"),
        (e.style.zIndex = "2"),
        (e.style.left = "0"),
        (e.style.top = "0"),
        (this.Pp = document.createElement("tr")),
        this.Pp.appendChild(this.Cp),
        this.Pp.appendChild(this.kp),
        this.Pp.appendChild(this.Tp),
        this.Rp(),
        (this.qf = new Nn(this.Nf.canvasElement, this, {
          Zd: () => null === this.bp && !this.xp.F().handleScroll.vertTouchDrag,
          Kd: () => null === this.bp && !this.xp.F().handleScroll.horzTouchDrag,
        }));
    }
    M() {
      null !== this.up && this.up.M(),
        null !== this.cp && this.cp.M(),
        this.Nf.unsubscribeSuggestedBitmapSizeChanged(this.Af),
        this.Nf.dispose(),
        this.If.unsubscribeSuggestedBitmapSizeChanged(this.Bf),
        this.If.dispose(),
        null !== this.Sp && this.Sp.Zo().v(this),
        this.qf.M();
    }
    tp() {
      return h(this.Sp);
    }
    Dp(t) {
      null !== this.Sp && this.Sp.Zo().v(this),
        (this.Sp = t),
        null !== this.Sp &&
          this.Sp.Zo().l(Kn.prototype.yp.bind(this), this, !0),
        this.Rp();
    }
    Ef() {
      return this.xp;
    }
    Yf() {
      return this.Pp;
    }
    Rp() {
      if (null !== this.Sp && (this.Op(), 0 !== this.Hi().wt().length)) {
        if (null !== this.up) {
          const t = this.Sp.Io();
          this.up.Gi(h(t));
        }
        if (null !== this.cp) {
          const t = this.Sp.No();
          this.cp.Gi(h(t));
        }
      }
    }
    Bp() {
      null !== this.up && this.up.gt(), null !== this.cp && this.cp.gt();
    }
    Ro() {
      return null !== this.Sp ? this.Sp.Ro() : 0;
    }
    Do(t) {
      this.Sp && this.Sp.Do(t);
    }
    Hd(t) {
      if (!this.Sp) return;
      this.Ep();
      const i = t.localX,
        n = t.localY;
      this.Ap(i, n, t);
    }
    _f(t) {
      this.Ep(), this.Lp(), this.Ap(t.localX, t.localY, t);
    }
    Ud(t) {
      if (!this.Sp) return;
      this.Ep();
      const i = t.localX,
        n = t.localY;
      this.Ap(i, n, t);
      const s = this.ir(i, n);
      this.Hi().lc(s && { ac: s.ac, zp: s.zp });
    }
    ef(t) {
      null !== this.Sp && (this.Ep(), this.Ip(t));
    }
    Qd(t) {
      this.Ep(), this.Np(t), this.Ap(t.localX, t.localY, t);
    }
    sf(t) {
      null !== this.Sp && (this.Ep(), (this.mp = !1), this.Vp(t));
    }
    nf(t) {
      null !== this.Sp && this.Ip(t);
    }
    Mf(t) {
      if (((this.mp = !0), null === this.bp)) {
        const i = { x: t.localX, y: t.localY };
        this.Fp(i, i, t);
      }
    }
    wf(t) {
      null !== this.Sp && (this.Ep(), this.Sp.Ut().lc(null), this.Wp());
    }
    jp() {
      return this.pp;
    }
    ff() {
      (this.vp = 1), this.Hi().Hn();
    }
    pf(t, i) {
      if (!this.xp.F().handleScale.pinch) return;
      const n = 5 * (i - this.vp);
      (this.vp = i), this.Hi().gc(t.st, n);
    }
    lf(t) {
      if (
        ((this.mp = !1),
        (this.gp = null !== this.bp),
        this.Lp(),
        null !== this.bp)
      ) {
        const i = this.Hi().dc();
        (this.wp = { x: i.Xt(), y: i.Zt() }),
          (this.bp = { x: t.localX, y: t.localY });
      }
    }
    Gd(t) {
      if (null === this.Sp) return;
      const i = t.localX,
        n = t.localY;
      if (null === this.bp) this.Np(t);
      else {
        this.gp = !1;
        const s = h(this.wp),
          e = s.x + (i - this.bp.x),
          r = s.y + (n - this.bp.y);
        this.Ap(e, r, t);
      }
    }
    if(t) {
      0 === this.Ef().F().trackingMode.exitMode && (this.gp = !0),
        this.$p(),
        this.Vp(t);
    }
    ir(t, i) {
      const n = this.Sp;
      if (null === n) return null;
      const s = n.Ja();
      for (const e of s) {
        const s = this.Hp(e.Tn(n), t, i);
        if (null !== s) return { ac: e, kf: s.kf, zp: s.zp };
      }
      return null;
    }
    Up(t, i) {
      h("left" === i ? this.up : this.cp).Jf(
        Sn({ width: t, height: this.Tf.height })
      );
    }
    qp() {
      return this.Tf;
    }
    Jf(t) {
      xn(this.Tf, t) ||
        ((this.Tf = t),
        (this.Of = !0),
        this.If.resizeCanvasElement(t),
        this.Nf.resizeCanvasElement(t),
        (this.Of = !1),
        (this.kp.style.width = t.width + "px"),
        (this.kp.style.height = t.height + "px"));
    }
    Yp() {
      const t = h(this.Sp);
      t.zo(t.Io()), t.zo(t.No());
      for (const i of t.jl())
        if (t.Ge(i)) {
          const n = i.Ot();
          null !== n && t.zo(n), i.Dn();
        }
    }
    lp() {
      return this.If.bitmapSize;
    }
    ap(t, i, n) {
      const s = this.lp();
      s.width > 0 && s.height > 0 && t.drawImage(this.If.canvasElement, i, n);
    }
    ip(t) {
      if (0 === t) return;
      if (null === this.Sp) return;
      if (
        (t > 1 && this.Yp(),
        null !== this.up && this.up.ip(t),
        null !== this.cp && this.cp.ip(t),
        1 !== t)
      ) {
        this.If.applySuggestedBitmapSize();
        const t = Pn(this.If);
        null !== t &&
          (t.useBitmapCoordinateSpace((t) => {
            this.sp(t);
          }),
          this.Sp && (this.Xp(t), this.Zp(t), this.Kp(t, Yn), this.Kp(t, Xn)));
      }
      this.Nf.applySuggestedBitmapSize();
      const i = Pn(this.Nf);
      null !== i &&
        (i.useBitmapCoordinateSpace(({ context: t, bitmapSize: i }) => {
          t.clearRect(0, 0, i.width, i.height);
        }),
        this.Kp(i, Zn),
        this.Gp(i));
    }
    Jp() {
      return this.up;
    }
    Qp() {
      return this.cp;
    }
    yp() {
      null !== this.Sp && this.Sp.Zo().v(this), (this.Sp = null);
    }
    Ip(t) {
      const i = t.localX,
        n = t.localY;
      this.pp.g() && this.pp.m(this.Hi().yt().ru(i), { x: i, y: n }, t);
    }
    sp({ context: t, bitmapSize: i }) {
      const { width: n, height: s } = i,
        e = this.Hi(),
        r = e.U(),
        h = e.Lc();
      r === h ? V(t, 0, 0, n, s, h) : $(t, 0, 0, n, s, r, h);
    }
    Xp(t) {
      const i = h(this.Sp).Ko().Th().Mt();
      null !== i && i.X(t, !1);
    }
    Zp(t) {
      const i = this.Hi().cc();
      this.tv(t, Yn, Un, i), this.tv(t, Yn, qn, i);
    }
    Gp(t) {
      this.tv(t, Yn, qn, this.Hi().dc());
    }
    Kp(t, i) {
      const n = h(this.Sp).Ja();
      for (const s of n) this.tv(t, i, Un, s);
      for (const s of n) this.tv(t, i, qn, s);
    }
    tv(t, i, n, s) {
      const e = h(this.Sp),
        r = i(s, e),
        l = e.Ut().hc(),
        a = null !== l && l.ac === s,
        o = null !== l && a && void 0 !== l.zp ? l.zp.sr : void 0;
      for (const i of r) {
        const s = i.Mt();
        null !== s && n(s, t, a, o);
      }
    }
    Hp(t, i, n) {
      for (const s of t) {
        const t = s.Mt();
        if (null !== t && t.ir) {
          const e = t.ir(i, n);
          if (null !== e) return { kf: s, zp: e };
        }
      }
      return null;
    }
    Op() {
      if (null === this.Sp) return;
      const t = this.xp,
        i = this.Sp.Io().F().visible,
        n = this.Sp.No().F().visible;
      i ||
        null === this.up ||
        (this.Cp.removeChild(this.up.Yf()), this.up.M(), (this.up = null)),
        n ||
          null === this.cp ||
          (this.Tp.removeChild(this.cp.Yf()), this.cp.M(), (this.cp = null));
      const s = t.Ut().Rc();
      i &&
        null === this.up &&
        ((this.up = new Hn(this, t.F(), s, "left")),
        this.Cp.appendChild(this.up.Yf())),
        n &&
          null === this.cp &&
          ((this.cp = new Hn(this, t.F(), s, "right")),
          this.Tp.appendChild(this.cp.Yf()));
    }
    iv(t) {
      return (t.Sf && this.mp) || null !== this.bp;
    }
    nv(t) {
      return Math.max(0, Math.min(t, this.Tf.width - 1));
    }
    sv(t) {
      return Math.max(0, Math.min(t, this.Tf.height - 1));
    }
    Ap(t, i, n) {
      this.Hi().Cc(this.nv(t), this.sv(i), n, h(this.Sp));
    }
    Wp() {
      this.Hi().Tc();
    }
    $p() {
      this.gp && ((this.bp = null), this.Wp());
    }
    Fp(t, i, n) {
      (this.bp = t), (this.gp = !1), this.Ap(i.x, i.y, n);
      const s = this.Hi().dc();
      this.wp = { x: s.Xt(), y: s.Zt() };
    }
    Hi() {
      return this.xp.Ut();
    }
    Vp(t) {
      if (!this.fp) return;
      const i = this.Hi(),
        n = this.tp();
      if (
        (i.Ho(n, n.fn()),
        (this.dp = null),
        (this.fp = !1),
        i.xc(),
        null !== this.Mp)
      ) {
        const t = performance.now(),
          n = i.yt();
        this.Mp.pr(n.ou(), t), this.Mp.wu(t) || i.Yn(this.Mp);
      }
    }
    Ep() {
      this.bp = null;
    }
    Lp() {
      if (!this.Sp) return;
      if (
        (this.Hi().Hn(),
        document.activeElement !== document.body &&
          document.activeElement !== document.documentElement)
      )
        h(document.activeElement).blur();
      else {
        const t = document.getSelection();
        null !== t && t.removeAllRanges();
      }
      !this.Sp.fn().Vi() && this.Hi().yt().Vi();
    }
    Np(t) {
      if (null === this.Sp) return;
      const i = this.Hi(),
        n = i.yt();
      if (n.Vi()) return;
      const s = this.xp.F(),
        e = s.handleScroll,
        r = s.kineticScroll;
      if (
        (!e.pressedMouseMove || t.Sf) &&
        ((!e.horzTouchDrag && !e.vertTouchDrag) || !t.Sf)
      )
        return;
      const h = this.Sp.fn(),
        l = performance.now();
      if (
        (null !== this.dp ||
          this.iv(t) ||
          (this.dp = {
            x: t.clientX,
            y: t.clientY,
            u_: l,
            ev: t.localX,
            rv: t.localY,
          }),
        null !== this.dp &&
          !this.fp &&
          (this.dp.x !== t.clientX || this.dp.y !== t.clientY))
      ) {
        if ((t.Sf && r.touch) || (!t.Sf && r.mouse)) {
          const t = n.Ks();
          (this.Mp = new Ln(0.2 / t, 7 / t, 0.997, 15 / t)),
            this.Mp.Xc(n.ou(), this.dp.u_);
        } else this.Mp = null;
        h.Vi() || i.jo(this.Sp, h, t.localY), i.Mc(t.localX), (this.fp = !0);
      }
      this.fp &&
        (h.Vi() || i.$o(this.Sp, h, t.localY),
        i.Sc(t.localX),
        null !== this.Mp && this.Mp.Xc(n.ou(), l));
    }
  }
  class Gn {
    constructor(t, i, n, s, e) {
      (this.vt = !0),
        (this.Tf = Sn({ width: 0, height: 0 })),
        (this.Bf = () => this.ip(3)),
        (this.Lf = "left" === t),
        (this.Gu = n.Rc),
        (this.un = i),
        (this.hv = s),
        (this.lv = e),
        (this.zf = document.createElement("div")),
        (this.zf.style.width = "25px"),
        (this.zf.style.height = "100%"),
        (this.zf.style.overflow = "hidden"),
        (this.If = zn(this.zf, Sn({ width: 16, height: 16 }))),
        this.If.subscribeSuggestedBitmapSizeChanged(this.Bf);
    }
    M() {
      this.If.unsubscribeSuggestedBitmapSizeChanged(this.Bf), this.If.dispose();
    }
    Yf() {
      return this.zf;
    }
    qp() {
      return this.Tf;
    }
    Jf(t) {
      xn(this.Tf, t) ||
        ((this.Tf = t),
        this.If.resizeCanvasElement(t),
        (this.zf.style.width = `${t.width}px`),
        (this.zf.style.height = `${t.height}px`),
        (this.vt = !0));
    }
    ip(t) {
      if (t < 3 && !this.vt) return;
      if (0 === this.Tf.width || 0 === this.Tf.height) return;
      (this.vt = !1), this.If.applySuggestedBitmapSize();
      const i = Pn(this.If);
      null !== i &&
        i.useBitmapCoordinateSpace((t) => {
          this.sp(t), this.ye(t);
        });
    }
    lp() {
      return this.If.bitmapSize;
    }
    ap(t, i, n) {
      const s = this.lp();
      s.width > 0 && s.height > 0 && t.drawImage(this.If.canvasElement, i, n);
    }
    ye({
      context: t,
      bitmapSize: i,
      horizontalPixelRatio: n,
      verticalPixelRatio: s,
    }) {
      if (!this.hv()) return;
      t.fillStyle = this.un.timeScale.borderColor;
      const e = Math.floor(this.Gu.F().k * n),
        r = Math.floor(this.Gu.F().k * s),
        h = this.Lf ? i.width - e : 0;
      t.fillRect(h, 0, e, r);
    }
    sp({ context: t, bitmapSize: i }) {
      V(t, 0, 0, i.width, i.height, this.lv());
    }
  }
  function Jn(t, i) {
    return t.w_ > i.w_ ? t : i;
  }
  class Qn {
    constructor(t) {
      (this.av = null),
        (this.ov = null),
        (this.S = null),
        (this._v = !1),
        (this.Tf = Sn({ width: 0, height: 0 })),
        (this.uv = new m()),
        (this.Rf = new Wt(5)),
        (this.Of = !1),
        (this.Bf = () => {
          this.Of || this.xp.Ut().Ch();
        }),
        (this.Af = () => {
          this.Of || this.xp.Ut().Ch();
        }),
        (this.xp = t),
        (this.un = t.F().layout),
        (this.cv = document.createElement("tr")),
        (this.dv = document.createElement("td")),
        (this.dv.style.padding = "0"),
        (this.fv = document.createElement("td")),
        (this.fv.style.padding = "0"),
        (this.zf = document.createElement("td")),
        (this.zf.style.height = "25px"),
        (this.zf.style.padding = "0"),
        (this.pv = document.createElement("div")),
        (this.pv.style.width = "100%"),
        (this.pv.style.height = "100%"),
        (this.pv.style.position = "relative"),
        (this.pv.style.overflow = "hidden"),
        this.zf.appendChild(this.pv),
        (this.If = zn(this.pv, Sn({ width: 16, height: 16 }))),
        this.If.subscribeSuggestedBitmapSizeChanged(this.Bf);
      const i = this.If.canvasElement;
      (i.style.position = "absolute"),
        (i.style.zIndex = "1"),
        (i.style.left = "0"),
        (i.style.top = "0"),
        (this.Nf = zn(this.pv, Sn({ width: 16, height: 16 }))),
        this.Nf.subscribeSuggestedBitmapSizeChanged(this.Af);
      const n = this.Nf.canvasElement;
      (n.style.position = "absolute"),
        (n.style.zIndex = "2"),
        (n.style.left = "0"),
        (n.style.top = "0"),
        this.cv.appendChild(this.dv),
        this.cv.appendChild(this.zf),
        this.cv.appendChild(this.fv),
        this.vv(),
        this.xp.Ut().Po().l(this.vv.bind(this), this),
        (this.qf = new Nn(this.Nf.canvasElement, this, {
          Zd: () => !0,
          Kd: () => !1,
        }));
    }
    M() {
      this.qf.M(),
        null !== this.av && this.av.M(),
        null !== this.ov && this.ov.M(),
        this.Nf.unsubscribeSuggestedBitmapSizeChanged(this.Af),
        this.Nf.dispose(),
        this.If.unsubscribeSuggestedBitmapSizeChanged(this.Bf),
        this.If.dispose();
    }
    Yf() {
      return this.cv;
    }
    mv() {
      return this.av;
    }
    bv() {
      return this.ov;
    }
    _f(t) {
      if (this._v) return;
      this._v = !0;
      const i = this.xp.Ut();
      !i.yt().Vi() &&
        this.xp.F().handleScale.axisPressedMouseMove.time &&
        i.bc(t.localX);
    }
    lf(t) {
      this._f(t);
    }
    uf() {
      const t = this.xp.Ut();
      !t.yt().Vi() &&
        this._v &&
        ((this._v = !1),
        this.xp.F().handleScale.axisPressedMouseMove.time && t.kc());
    }
    Qd(t) {
      const i = this.xp.Ut();
      !i.yt().Vi() &&
        this.xp.F().handleScale.axisPressedMouseMove.time &&
        i.yc(t.localX);
    }
    Gd(t) {
      this.Qd(t);
    }
    sf() {
      this._v = !1;
      const t = this.xp.Ut();
      (t.yt().Vi() && !this.xp.F().handleScale.axisPressedMouseMove.time) ||
        t.kc();
    }
    if() {
      this.sf();
    }
    Id() {
      this.xp.F().handleScale.axisDoubleClickReset.time && this.xp.Ut().Zn();
    }
    Ed() {
      this.Id();
    }
    Hd() {
      this.xp.Ut().F().handleScale.axisPressedMouseMove.time && this.op(1);
    }
    wf() {
      this.op(0);
    }
    qp() {
      return this.Tf;
    }
    gv() {
      return this.uv;
    }
    wv(t, i, n) {
      xn(this.Tf, t) ||
        ((this.Tf = t),
        (this.Of = !0),
        this.If.resizeCanvasElement(t),
        this.Nf.resizeCanvasElement(t),
        (this.Of = !1),
        (this.zf.style.width = `${t.width}px`),
        (this.zf.style.height = `${t.height}px`),
        this.uv.m(t)),
        null !== this.av && this.av.Jf(Sn({ width: i, height: t.height })),
        null !== this.ov && this.ov.Jf(Sn({ width: n, height: t.height }));
    }
    Mv() {
      const t = this.Sv();
      return Math.ceil(t.k + t.C + t.T + t.I + t.B + t.xv);
    }
    gt() {
      this.xp.Ut().yt().Jl();
    }
    lp() {
      return this.If.bitmapSize;
    }
    ap(t, i, n) {
      const s = this.lp();
      s.width > 0 && s.height > 0 && t.drawImage(this.If.canvasElement, i, n);
    }
    ip(t) {
      if (0 === t) return;
      if (1 !== t) {
        this.If.applySuggestedBitmapSize();
        const i = Pn(this.If);
        null !== i &&
          (i.useBitmapCoordinateSpace((t) => {
            this.sp(t), this.ye(t);
          }),
          this.ep(i)),
          null !== this.av && this.av.ip(t),
          null !== this.ov && this.ov.ip(t);
      }
      this.Nf.applySuggestedBitmapSize();
      const i = Pn(this.Nf);
      null !== i &&
        (i.useBitmapCoordinateSpace(({ context: t, bitmapSize: i }) => {
          t.clearRect(0, 0, i.width, i.height);
        }),
        this.yv([this.xp.Ut().dc()], i));
    }
    sp({ context: t, bitmapSize: i }) {
      V(t, 0, 0, i.width, i.height, this.xp.Ut().Lc());
    }
    ye({ context: t, bitmapSize: i, verticalPixelRatio: n }) {
      if (this.xp.F().timeScale.borderVisible) {
        t.fillStyle = this.kv();
        const s = Math.max(1, Math.floor(this.Sv().k * n));
        t.fillRect(0, 0, i.width, s);
      }
    }
    ep(t) {
      const i = this.xp.Ut().yt(),
        n = i.Jl();
      if (!n || 0 === n.length) return;
      let s = n.reduce(Jn, n[0]).w_;
      s > 30 && s < 50 && (s = 30);
      const e = this.Sv(),
        r = i.F();
      r.borderVisible &&
        r.ticksVisible &&
        t.useBitmapCoordinateSpace(
          ({ context: t, horizontalPixelRatio: i, verticalPixelRatio: s }) => {
            (t.strokeStyle = this.kv()), (t.fillStyle = this.kv());
            const r = Math.max(1, Math.floor(i)),
              h = Math.floor(0.5 * i);
            t.beginPath();
            const l = Math.round(e.C * s);
            for (let s = n.length; s--; ) {
              const e = Math.round(n[s].Yl * i);
              t.rect(e - h, 0, r, l);
            }
            t.fill();
          }
        ),
        t.useMediaCoordinateSpace(({ context: t }) => {
          const i = e.k + e.C + e.I + e.T / 2;
          (t.textAlign = "center"),
            (t.textBaseline = "middle"),
            (t.fillStyle = this.$()),
            (t.font = this.Kf());
          for (const e of n)
            if (e.w_ < s) {
              const n = e.cu ? this.Cv(t, e.Yl, e.ua) : e.Yl;
              t.fillText(e.ua, n, i);
            }
          t.font = this.Tv();
          for (const e of n)
            if (e.w_ >= s) {
              const n = e.cu ? this.Cv(t, e.Yl, e.ua) : e.Yl;
              t.fillText(e.ua, n, i);
            }
        });
    }
    Cv(t, i, n) {
      const s = this.Rf.Si(t, n),
        e = s / 2,
        r = Math.floor(i - e) + 0.5;
      return (
        r < 0
          ? (i += Math.abs(0 - r))
          : r + s > this.Tf.width && (i -= Math.abs(this.Tf.width - (r + s))),
        i
      );
    }
    yv(t, i) {
      const n = this.Sv();
      for (const s of t) for (const t of s.Qi()) t.Mt().X(i, n);
    }
    kv() {
      return this.xp.F().timeScale.borderColor;
    }
    $() {
      return this.un.textColor;
    }
    W() {
      return this.un.fontSize;
    }
    Kf() {
      return T(this.W(), this.un.fontFamily);
    }
    Tv() {
      return T(this.W(), this.un.fontFamily, "bold");
    }
    Sv() {
      null === this.S &&
        (this.S = {
          k: 1,
          N: NaN,
          I: NaN,
          B: NaN,
          ji: NaN,
          C: 5,
          T: NaN,
          P: "",
          Wi: new Wt(),
          xv: 0,
        });
      const t = this.S,
        i = this.Kf();
      if (t.P !== i) {
        const n = this.W();
        (t.T = n),
          (t.P = i),
          (t.I = (3 * n) / 12),
          (t.B = (3 * n) / 12),
          (t.ji = (9 * n) / 12),
          (t.N = 0),
          (t.xv = (4 * n) / 12),
          t.Wi.Fe();
      }
      return this.S;
    }
    op(t) {
      this.zf.style.cursor = 1 === t ? "ew-resize" : "default";
    }
    vv() {
      const t = this.xp.Ut(),
        i = t.F();
      i.leftPriceScale.visible ||
        null === this.av ||
        (this.dv.removeChild(this.av.Yf()), this.av.M(), (this.av = null)),
        i.rightPriceScale.visible ||
          null === this.ov ||
          (this.fv.removeChild(this.ov.Yf()), this.ov.M(), (this.ov = null));
      const n = { Rc: this.xp.Ut().Rc() },
        s = () => i.leftPriceScale.borderVisible && t.yt().F().borderVisible,
        e = () => t.Lc();
      i.leftPriceScale.visible &&
        null === this.av &&
        ((this.av = new Gn("left", i, n, s, e)),
        this.dv.appendChild(this.av.Yf())),
        i.rightPriceScale.visible &&
          null === this.ov &&
          ((this.ov = new Gn("right", i, n, s, e)),
          this.fv.appendChild(this.ov.Yf()));
    }
  }
  const ts =
    !!Rn &&
    !!navigator.userAgentData &&
    navigator.userAgentData.brands.some((t) => t.brand.includes("Chromium")) &&
    !!Rn &&
    ((
      null ===
        (is =
          null === navigator || void 0 === navigator
            ? void 0
            : navigator.userAgentData) || void 0 === is
        ? void 0
        : is.platform
    )
      ? "Windows" === navigator.userAgentData.platform
      : navigator.userAgent.toLowerCase().indexOf("win") >= 0);
  var is;
  class ns {
    constructor(t, i) {
      var n;
      (this.Pv = []),
        (this.Rv = 0),
        (this.fa = 0),
        (this.vo = 0),
        (this.Dv = 0),
        (this.Ov = 0),
        (this.Bv = null),
        (this.Ev = !1),
        (this.pp = new m()),
        (this.Xu = new m()),
        (this.Av = null),
        (this.Lv = t),
        (this.un = i),
        (this.cv = document.createElement("div")),
        this.cv.classList.add("tv-lightweight-charts"),
        (this.cv.style.overflow = "hidden"),
        (this.cv.style.width = "100%"),
        (this.cv.style.height = "100%"),
        ((n = this.cv).style.userSelect = "none"),
        (n.style.webkitUserSelect = "none"),
        (n.style.msUserSelect = "none"),
        (n.style.MozUserSelect = "none"),
        (n.style.webkitTapHighlightColor = "transparent"),
        (this.zv = document.createElement("table")),
        this.zv.setAttribute("cellspacing", "0"),
        this.cv.appendChild(this.zv),
        (this.Iv = this.Nv.bind(this)),
        ss(this.un) && this.Vv(!0),
        (this.Hi = new gn(this.Ku.bind(this), this.un)),
        this.Ut().fc().l(this.Fv.bind(this), this),
        (this.Wv = new Qn(this)),
        this.zv.appendChild(this.Wv.Yf());
      const s = i.autoSize && this.jv();
      let e = this.un.width,
        r = this.un.height;
      if (s || 0 === e || 0 === r) {
        const i = t.getBoundingClientRect();
        (e = e || i.width), (r = r || i.height);
      }
      this.$v(e, r),
        this.Hv(),
        t.appendChild(this.cv),
        this.Uv(),
        this.Hi.yt().yu().l(this.Hi.dl.bind(this.Hi), this),
        this.Hi.Po().l(this.Hi.dl.bind(this.Hi), this);
    }
    Ut() {
      return this.Hi;
    }
    F() {
      return this.un;
    }
    qv() {
      return this.Pv;
    }
    Yv() {
      return this.Wv;
    }
    M() {
      this.Vv(!1),
        0 !== this.Rv && window.cancelAnimationFrame(this.Rv),
        this.Hi.fc().v(this),
        this.Hi.yt().yu().v(this),
        this.Hi.Po().v(this),
        this.Hi.M();
      for (const t of this.Pv)
        this.zv.removeChild(t.Yf()), t.jp().v(this), t.M();
      (this.Pv = []),
        h(this.Wv).M(),
        null !== this.cv.parentElement &&
          this.cv.parentElement.removeChild(this.cv),
        this.Xu.M(),
        this.pp.M(),
        this.Xv();
    }
    $v(t, i, n = !1) {
      if (this.fa === i && this.vo === t) return;
      const s = (function (t) {
        const i = Math.floor(t.width),
          n = Math.floor(t.height);
        return Sn({ width: i - (i % 2), height: n - (n % 2) });
      })(Sn({ width: t, height: i }));
      (this.fa = s.height), (this.vo = s.width);
      const e = this.fa + "px",
        r = this.vo + "px";
      (h(this.cv).style.height = e),
        (h(this.cv).style.width = r),
        (this.zv.style.height = e),
        (this.zv.style.width = r),
        n ? this.Zv(tt.ss(), performance.now()) : this.Hi.dl();
    }
    ip(t) {
      void 0 === t && (t = tt.ss());
      for (let i = 0; i < this.Pv.length; i++) this.Pv[i].ip(t.jn(i).Vn);
      this.un.timeScale.visible && this.Wv.ip(t.Wn());
    }
    kh(t) {
      const i = ss(this.un);
      this.Hi.kh(t);
      const n = ss(this.un);
      n !== i && this.Vv(n), this.Uv(), this.Kv(t);
    }
    jp() {
      return this.pp;
    }
    fc() {
      return this.Xu;
    }
    Gv() {
      null !== this.Bv &&
        (this.Zv(this.Bv, performance.now()), (this.Bv = null));
      const t = this.Jv(null),
        i = document.createElement("canvas");
      (i.width = t.width), (i.height = t.height);
      const n = h(i.getContext("2d"));
      return this.Jv(n), i;
    }
    Qv(t) {
      if ("left" === t && !this.tm()) return 0;
      if ("right" === t && !this.im()) return 0;
      if (0 === this.Pv.length) return 0;
      return h("left" === t ? this.Pv[0].Jp() : this.Pv[0].Qp()).Qf();
    }
    nm() {
      return this.un.autoSize && null !== this.Av;
    }
    Kv(t) {
      (void 0 !== t.autoSize ||
        !this.Av ||
        (void 0 === t.width && void 0 === t.height)) &&
        (t.autoSize && !this.Av && this.jv(),
        !1 === t.autoSize && null !== this.Av && this.Xv(),
        t.autoSize ||
          (void 0 === t.width && void 0 === t.height) ||
          this.$v(t.width || this.vo, t.height || this.fa));
    }
    Jv(t) {
      let i = 0,
        n = 0;
      const s = this.Pv[0],
        e = (i, n) => {
          let s = 0;
          for (let e = 0; e < this.Pv.length; e++) {
            const r = this.Pv[e],
              l = h("left" === i ? r.Jp() : r.Qp()),
              a = l.lp();
            null !== t && l.ap(t, n, s), (s += a.height);
          }
        };
      if (this.tm()) {
        e("left", 0);
        i += h(s.Jp()).lp().width;
      }
      for (let s = 0; s < this.Pv.length; s++) {
        const e = this.Pv[s],
          r = e.lp();
        null !== t && e.ap(t, i, n), (n += r.height);
      }
      if (((i += s.lp().width), this.im())) {
        e("right", i);
        i += h(s.Qp()).lp().width;
      }
      const r = (i, n, s) => {
        h("left" === i ? this.Wv.mv() : this.Wv.bv()).ap(h(t), n, s);
      };
      if (this.un.timeScale.visible) {
        const i = this.Wv.lp();
        if (null !== t) {
          let e = 0;
          this.tm() && (r("left", e, n), (e = h(s.Jp()).lp().width)),
            this.Wv.ap(t, e, n),
            (e += i.width),
            this.im() && r("right", e, n);
        }
        n += i.height;
      }
      return Sn({ width: i, height: n });
    }
    sm() {
      let t = 0,
        i = 0,
        n = 0;
      for (const s of this.Pv)
        this.tm() && (i = Math.max(i, h(s.Jp()).Zf())),
          this.im() && (n = Math.max(n, h(s.Qp()).Zf())),
          (t += s.Ro());
      (i = Bn(i)), (n = Bn(n));
      const s = this.vo,
        e = this.fa,
        r = Math.max(s - i - n, 0),
        l = this.un.timeScale.visible;
      let a = l ? this.Wv.Mv() : 0;
      var o;
      a = (o = a) + (o % 2);
      const _ = 0 + a,
        u = e < _ ? 0 : e - _,
        c = u / t;
      let d = 0;
      for (let t = 0; t < this.Pv.length; ++t) {
        const s = this.Pv[t];
        s.Dp(this.Hi.uc()[t]);
        let e = 0,
          h = 0;
        (h = t === this.Pv.length - 1 ? u - d : Math.round(s.Ro() * c)),
          (e = Math.max(h, 2)),
          (d += e),
          s.Jf(Sn({ width: r, height: e })),
          this.tm() && s.Up(i, "left"),
          this.im() && s.Up(n, "right"),
          s.tp() && this.Hi.vc(s.tp(), e);
      }
      this.Wv.wv(Sn({ width: l ? r : 0, height: a }), l ? i : 0, l ? n : 0),
        this.Hi.Oo(r),
        this.Dv !== i && (this.Dv = i),
        this.Ov !== n && (this.Ov = n);
    }
    Vv(t) {
      t
        ? this.cv.addEventListener("wheel", this.Iv, { passive: !1 })
        : this.cv.removeEventListener("wheel", this.Iv);
    }
    rm(t) {
      switch (t.deltaMode) {
        case t.DOM_DELTA_PAGE:
          return 120;
        case t.DOM_DELTA_LINE:
          return 32;
      }
      return ts ? 1 / window.devicePixelRatio : 1;
    }
    Nv(t) {
      if (
        !(
          (0 !== t.deltaX && this.un.handleScroll.mouseWheel) ||
          (0 !== t.deltaY && this.un.handleScale.mouseWheel)
        )
      )
        return;
      const i = this.rm(t),
        n = (i * t.deltaX) / 100,
        s = (-i * t.deltaY) / 100;
      if (
        (t.cancelable && t.preventDefault(),
        0 !== s && this.un.handleScale.mouseWheel)
      ) {
        const i = Math.sign(s) * Math.min(1, Math.abs(s)),
          n = t.clientX - this.cv.getBoundingClientRect().left;
        this.Ut().gc(n, i);
      }
      0 !== n && this.un.handleScroll.mouseWheel && this.Ut().wc(-80 * n);
    }
    Zv(t, i) {
      var n;
      const s = t.Wn();
      3 === s && this.hm(),
        (3 !== s && 2 !== s) ||
          (this.lm(t),
          this.am(t, i),
          this.Wv.gt(),
          this.Pv.forEach((t) => {
            t.Bp();
          }),
          3 === (null === (n = this.Bv) || void 0 === n ? void 0 : n.Wn()) &&
            (this.Bv.Qn(t),
            this.hm(),
            this.lm(this.Bv),
            this.am(this.Bv, i),
            (t = this.Bv),
            (this.Bv = null))),
        this.ip(t);
    }
    am(t, i) {
      for (const n of t.Jn()) this.ts(n, i);
    }
    lm(t) {
      const i = this.Hi.uc();
      for (let n = 0; n < i.length; n++) t.jn(n).Fn && i[n].Yo();
    }
    ts(t, i) {
      const n = this.Hi.yt();
      switch (t.Un) {
        case 0:
          n.Cu();
          break;
        case 1:
          n.Tu(t.Bt);
          break;
        case 2:
          n.Kn(t.Bt);
          break;
        case 3:
          n.Gn(t.Bt);
          break;
        case 4:
          n.du();
          break;
        case 5:
          t.Bt.wu(i) || n.Gn(t.Bt.Mu(i));
      }
    }
    Ku(t) {
      null !== this.Bv ? this.Bv.Qn(t) : (this.Bv = t),
        this.Ev ||
          ((this.Ev = !0),
          (this.Rv = window.requestAnimationFrame((t) => {
            if (((this.Ev = !1), (this.Rv = 0), null !== this.Bv)) {
              const i = this.Bv;
              (this.Bv = null), this.Zv(i, t);
              for (const n of i.Jn())
                if (5 === n.Un && !n.Bt.wu(t)) {
                  this.Ut().Yn(n.Bt);
                  break;
                }
            }
          })));
    }
    hm() {
      this.Hv();
    }
    Hv() {
      const t = this.Hi.uc(),
        i = t.length,
        n = this.Pv.length;
      for (let t = i; t < n; t++) {
        const t = r(this.Pv.pop());
        this.zv.removeChild(t.Yf()), t.jp().v(this), t.M();
      }
      for (let s = n; s < i; s++) {
        const i = new Kn(this, t[s]);
        i.jp().l(this.om.bind(this), this),
          this.Pv.push(i),
          this.zv.insertBefore(i.Yf(), this.Wv.Yf());
      }
      for (let n = 0; n < i; n++) {
        const i = t[n],
          s = this.Pv[n];
        s.tp() !== i ? s.Dp(i) : s.Rp();
      }
      this.Uv(), this.sm();
    }
    _m(t, i, n) {
      var s;
      const e = new Map();
      if (null !== t) {
        this.Hi.wt().forEach((i) => {
          const n = i.An().jh(t);
          null !== n && e.set(i, n);
        });
      }
      let r;
      if (null !== t) {
        const i =
          null === (s = this.Hi.yt().Ui(t)) || void 0 === s ? void 0 : s.M_;
        void 0 !== i && (r = i);
      }
      const h = this.Ut().hc(),
        l = null !== h && h.ac instanceof yi ? h.ac : void 0,
        a = null !== h && void 0 !== h.zp ? h.zp.nr : void 0;
      return {
        _t: r,
        Ys: null != t ? t : void 0,
        um: null != i ? i : void 0,
        dm: l,
        fm: e,
        pm: a,
        vm: null != n ? n : void 0,
      };
    }
    om(t, i, n) {
      this.pp.m(() => this._m(t, i, n));
    }
    Fv(t, i, n) {
      this.Xu.m(() => this._m(t, i, n));
    }
    Uv() {
      const t = this.un.timeScale.visible ? "" : "none";
      this.Wv.Yf().style.display = t;
    }
    tm() {
      return this.Pv[0].tp().Io().F().visible;
    }
    im() {
      return this.Pv[0].tp().No().F().visible;
    }
    jv() {
      return (
        "ResizeObserver" in window &&
        ((this.Av = new ResizeObserver((t) => {
          const i = t.find((t) => t.target === this.Lv);
          i && this.$v(i.contentRect.width, i.contentRect.height);
        })),
        this.Av.observe(this.Lv, { box: "border-box" }),
        !0)
      );
    }
    Xv() {
      null !== this.Av && this.Av.disconnect();
    }
  }
  function ss(t) {
    return Boolean(t.handleScroll.mouseWheel || t.handleScale.mouseWheel);
  }
  function es(t, i, n, s) {
    const e = n.value,
      r = { Ys: i, _t: t, Bt: [e, e, e, e], M_: s };
    return void 0 !== n.color && (r.D = n.color), r;
  }
  function rs(t) {
    return void 0 !== t.Bt;
  }
  function hs(t) {
    return (i, n, s, e) => {
      return void 0 === (r = s).open && void 0 === r.value
        ? { _t: i, Ys: n, M_: e }
        : t(i, n, s, e);
      var r;
    };
  }
  const ls = {
    Candlestick: hs(function (t, i, n, s) {
      const e = { Ys: i, _t: t, Bt: [n.open, n.high, n.low, n.close], M_: s };
      return (
        void 0 !== n.color && (e.D = n.color),
        void 0 !== n.borderColor && (e.Et = n.borderColor),
        void 0 !== n.wickColor && (e.Dh = n.wickColor),
        e
      );
    }),
    Bar: hs(function (t, i, n, s) {
      const e = { Ys: i, _t: t, Bt: [n.open, n.high, n.low, n.close], M_: s };
      return void 0 !== n.color && (e.D = n.color), e;
    }),
    Area: hs(function (t, i, n, s) {
      const e = n.value,
        r = { Ys: i, _t: t, Bt: [e, e, e, e], M_: s };
      return (
        void 0 !== n.lineColor && (r.ot = n.lineColor),
        void 0 !== n.topColor && (r.bs = n.topColor),
        void 0 !== n.bottomColor && (r.gs = n.bottomColor),
        r
      );
    }),
    Baseline: hs(function (t, i, n, s) {
      const e = n.value,
        r = { Ys: i, _t: t, Bt: [e, e, e, e], M_: s };
      return (
        void 0 !== n.topLineColor && (r.be = n.topLineColor),
        void 0 !== n.bottomLineColor && (r.ge = n.bottomLineColor),
        void 0 !== n.topFillColor1 && (r.de = n.topFillColor1),
        void 0 !== n.topFillColor2 && (r.fe = n.topFillColor2),
        void 0 !== n.bottomFillColor1 && (r.pe = n.bottomFillColor1),
        void 0 !== n.bottomFillColor2 && (r.ve = n.bottomFillColor2),
        r
      );
    }),
    Histogram: hs(es),
    Line: hs(es),
  };
  function as(t) {
    return ls[t];
  }
  function os(t) {
    return 60 * t * 60 * 1e3;
  }
  function _s(t) {
    return 60 * t * 1e3;
  }
  const us = [
    { bm: ((cs = 1), 1e3 * cs), w_: 10 },
    { bm: _s(1), w_: 20 },
    { bm: _s(5), w_: 21 },
    { bm: _s(30), w_: 22 },
    { bm: os(1), w_: 30 },
    { bm: os(3), w_: 31 },
    { bm: os(6), w_: 32 },
    { bm: os(12), w_: 33 },
  ];
  var cs;
  function ds(t, i) {
    if (t.getUTCFullYear() !== i.getUTCFullYear()) return 70;
    if (t.getUTCMonth() !== i.getUTCMonth()) return 60;
    if (t.getUTCDate() !== i.getUTCDate()) return 50;
    for (let n = us.length - 1; n >= 0; --n)
      if (
        Math.floor(i.getTime() / us[n].bm) !==
        Math.floor(t.getTime() / us[n].bm)
      )
        return us[n].w_;
    return 0;
  }
  function fs(t, i = 0) {
    if (0 === t.length) return;
    let n = 0 === i ? null : t[i - 1]._t.u_,
      s = null !== n ? new Date(1e3 * n) : null,
      e = 0;
    for (let r = i; r < t.length; ++r) {
      const i = t[r],
        h = new Date(1e3 * i._t.u_);
      null !== s && (i.g_ = ds(h, s)),
        (e += i._t.u_ - (n || i._t.u_)),
        (n = i._t.u_),
        (s = h);
    }
    if (0 === i && t.length > 1) {
      const i = Math.ceil(e / (t.length - 1)),
        n = new Date(1e3 * (t[0]._t.u_ - i));
      t[0].g_ = ds(new Date(1e3 * t[0]._t.u_), n);
    }
  }
  function ps(t) {
    if (!wn(t)) throw new Error("time must be of type BusinessDay");
    const i = new Date(Date.UTC(t.year, t.month - 1, t.day, 0, 0, 0, 0));
    return { u_: Math.round(i.getTime() / 1e3), __: t };
  }
  function vs(t) {
    if (!Mn(t)) throw new Error("time must be of type isUTCTimestamp");
    return { u_: t };
  }
  function ms(t) {
    return 0 === t.length ? null : wn(t[0].time) ? ps : vs;
  }
  function bs(t) {
    return Mn(t) ? vs(t) : wn(t) ? ps(t) : ps(gs(t));
  }
  function gs(t) {
    const i = new Date(t);
    if (isNaN(i.getTime()))
      throw new Error(`Invalid date string=${t}, expected format=yyyy-mm-dd`);
    return {
      day: i.getUTCDate(),
      month: i.getUTCMonth() + 1,
      year: i.getUTCFullYear(),
    };
  }
  function ws(t) {
    M(t.time) && (t.time = gs(t.time));
  }
  function Ms(t) {
    return { Ys: 0, gm: new Map(), yl: t };
  }
  function Ss(t) {
    if (void 0 !== t && 0 !== t.length)
      return { wm: t[0]._t.u_, Mm: t[t.length - 1]._t.u_ };
  }
  function xs(t) {
    let i;
    return (
      t.forEach((t) => {
        void 0 === i && (i = t.M_);
      }),
      r(i)
    );
  }
  function ys(t) {
    void 0 === t.M_ && (t.M_ = t.time);
  }
  class ks {
    constructor() {
      (this.Sm = new Map()),
        (this.xm = new Map()),
        (this.ym = new Map()),
        (this.km = []);
    }
    M() {
      this.Sm.clear(), this.xm.clear(), this.ym.clear(), (this.km = []);
    }
    Cm(t, i) {
      let n = 0 !== this.Sm.size,
        s = !1;
      const e = this.xm.get(t);
      if (void 0 !== e)
        if (1 === this.xm.size) (n = !1), (s = !0), this.Sm.clear();
        else for (const i of this.km) i.pointData.gm.delete(t) && (s = !0);
      let r = [];
      if (0 !== i.length) {
        const n = i;
        n.forEach((t) => ys(t)),
          (function (t) {
            t.forEach(ws);
          })(i);
        const e = h(ms(i)),
          l = as(t.Ah());
        r = n.map((i) => {
          const n = e(i.time);
          let r = this.Sm.get(n.u_);
          void 0 === r && ((r = Ms(n)), this.Sm.set(n.u_, r), (s = !0));
          const h = l(n, r.Ys, i, i.M_);
          return r.gm.set(t, h), h;
        });
      }
      n && this.Tm(), this.Pm(t, r);
      let l = -1;
      if (s) {
        const t = [];
        this.Sm.forEach((i) => {
          t.push({ g_: 0, _t: i.yl, pointData: i, M_: xs(i.gm) });
        }),
          t.sort((t, i) => t._t.u_ - i._t.u_),
          (l = this.Rm(t));
      }
      return this.Dm(
        t,
        l,
        (function (t, i) {
          const n = Ss(t),
            s = Ss(i);
          if (void 0 !== n && void 0 !== s)
            return { ml: n.Mm >= s.Mm && n.wm >= s.wm };
        })(this.xm.get(t), e)
      );
    }
    Bc(t) {
      return this.Cm(t, []);
    }
    Om(t, i) {
      const n = i;
      ys(n), ws(i);
      const s = h(ms([i]))(i.time),
        e = this.ym.get(t);
      if (void 0 !== e && s.u_ < e.u_)
        throw new Error(
          `Cannot update oldest data, last time=${e.u_}, new time=${s.u_}`
        );
      let r = this.Sm.get(s.u_);
      const l = void 0 === r;
      void 0 === r && ((r = Ms(s)), this.Sm.set(s.u_, r));
      const a = as(t.Ah())(s, r.Ys, i, n.M_);
      r.gm.set(t, a), this.Bm(t, a);
      const o = { ml: rs(a) };
      if (!l) return this.Dm(t, -1, o);
      const _ = { g_: 0, _t: r.yl, pointData: r, M_: xs(r.gm) },
        u = mt(this.km, _._t.u_, (t, i) => t._t.u_ < i);
      this.km.splice(u, 0, _);
      for (let t = u; t < this.km.length; ++t) Cs(this.km[t].pointData, t);
      return fs(this.km, u), this.Dm(t, u, o);
    }
    Bm(t, i) {
      let n = this.xm.get(t);
      void 0 === n && ((n = []), this.xm.set(t, n));
      const s = 0 !== n.length ? n[n.length - 1] : null;
      null === s || i._t.u_ > s._t.u_
        ? rs(i) && n.push(i)
        : rs(i)
        ? (n[n.length - 1] = i)
        : n.splice(-1, 1),
        this.ym.set(t, i._t);
    }
    Pm(t, i) {
      0 !== i.length
        ? (this.xm.set(t, i.filter(rs)), this.ym.set(t, i[i.length - 1]._t))
        : (this.xm.delete(t), this.ym.delete(t));
    }
    Tm() {
      for (const t of this.km)
        0 === t.pointData.gm.size && this.Sm.delete(t._t.u_);
    }
    Rm(t) {
      let i = -1;
      for (let n = 0; n < this.km.length && n < t.length; ++n) {
        const s = this.km[n],
          e = t[n];
        if (s._t.u_ !== e._t.u_) {
          i = n;
          break;
        }
        (e.g_ = s.g_), Cs(e.pointData, n);
      }
      if (
        (-1 === i &&
          this.km.length !== t.length &&
          (i = Math.min(this.km.length, t.length)),
        -1 === i)
      )
        return -1;
      for (let n = i; n < t.length; ++n) Cs(t[n].pointData, n);
      return fs(t, i), (this.km = t), i;
    }
    Em() {
      if (0 === this.xm.size) return null;
      let t = 0;
      return (
        this.xm.forEach((i) => {
          0 !== i.length && (t = Math.max(t, i[i.length - 1].Ys));
        }),
        t
      );
    }
    Dm(t, i, n) {
      const s = { Am: new Map(), yt: { eu: this.Em() } };
      if (-1 !== i)
        this.xm.forEach((i, e) => {
          s.Am.set(e, { ar: i, Lm: e === t ? n : void 0 });
        }),
          this.xm.has(t) || s.Am.set(t, { ar: [], Lm: n }),
          (s.yt.zm = this.km),
          (s.yt.Im = i);
      else {
        const i = this.xm.get(t);
        s.Am.set(t, { ar: i || [], Lm: n });
      }
      return s;
    }
  }
  function Cs(t, i) {
    (t.Ys = i),
      t.gm.forEach((t) => {
        t.Ys = i;
      });
  }
  function Ts(t) {
    return { value: t.Bt[3], time: t.M_ };
  }
  function Ps(t) {
    const i = Ts(t);
    return void 0 !== t.D && (i.color = t.D), i;
  }
  function Rs(t) {
    return {
      open: t.Bt[0],
      high: t.Bt[1],
      low: t.Bt[2],
      close: t.Bt[3],
      time: t.M_,
    };
  }
  const Ds = {
    Area: function (t) {
      const i = Ts(t);
      return (
        void 0 !== t.ot && (i.lineColor = t.ot),
        void 0 !== t.bs && (i.topColor = t.bs),
        void 0 !== t.gs && (i.bottomColor = t.gs),
        i
      );
    },
    Line: Ps,
    Baseline: function (t) {
      const i = Ts(t);
      return (
        void 0 !== t.be && (i.topLineColor = t.be),
        void 0 !== t.ge && (i.bottomLineColor = t.ge),
        void 0 !== t.de && (i.topFillColor1 = t.de),
        void 0 !== t.fe && (i.topFillColor2 = t.fe),
        void 0 !== t.pe && (i.bottomFillColor1 = t.pe),
        void 0 !== t.ve && (i.bottomFillColor2 = t.ve),
        i
      );
    },
    Histogram: Ps,
    Bar: function (t) {
      const i = Rs(t);
      return void 0 !== t.D && (i.color = t.D), i;
    },
    Candlestick: function (t) {
      const i = Rs(t),
        { D: n, Et: s, Dh: e } = t;
      return (
        void 0 !== n && (i.color = n),
        void 0 !== s && (i.borderColor = s),
        void 0 !== e && (i.wickColor = e),
        i
      );
    },
  };
  function Os(t) {
    return Ds[t];
  }
  const Bs = {
      autoScale: !0,
      mode: 0,
      invertScale: !1,
      alignLabels: !0,
      borderVisible: !0,
      borderColor: "#2B2B43",
      entireTextOnly: !1,
      visible: !1,
      ticksVisible: !1,
      scaleMargins: { bottom: 0.1, top: 0.2 },
    },
    Es = {
      color: "rgba(0, 0, 0, 0)",
      visible: !1,
      fontSize: 48,
      fontFamily: C,
      fontStyle: "",
      text: "",
      horzAlign: "center",
      vertAlign: "center",
    },
    As = {
      width: 0,
      height: 0,
      autoSize: !1,
      layout: {
        background: { type: "solid", color: "#FFFFFF" },
        textColor: "#191919",
        fontSize: 12,
        fontFamily: C,
      },
      crosshair: {
        vertLine: {
          color: "#9598A1",
          width: 1,
          style: 3,
          visible: !0,
          labelVisible: !0,
          labelBackgroundColor: "#131722",
        },
        horzLine: {
          color: "#9598A1",
          width: 1,
          style: 3,
          visible: !0,
          labelVisible: !0,
          labelBackgroundColor: "#131722",
        },
        mode: 1,
      },
      grid: {
        vertLines: { color: "#D6DCDE", style: 0, visible: !0 },
        horzLines: { color: "#D6DCDE", style: 0, visible: !0 },
      },
      overlayPriceScales: Object.assign({}, Bs),
      leftPriceScale: Object.assign(Object.assign({}, Bs), { visible: !1 }),
      rightPriceScale: Object.assign(Object.assign({}, Bs), { visible: !0 }),
      timeScale: {
        rightOffset: 0,
        barSpacing: 6,
        minBarSpacing: 0.5,
        fixLeftEdge: !1,
        fixRightEdge: !1,
        lockVisibleTimeRangeOnResize: !1,
        rightBarStaysOnScroll: !1,
        borderVisible: !0,
        borderColor: "#2B2B43",
        visible: !0,
        timeVisible: !1,
        secondsVisible: !0,
        shiftVisibleRangeOnNewBar: !0,
        ticksVisible: !1,
      },
      watermark: Es,
      localization: {
        locale: Rn ? navigator.language : "",
        dateFormat: "dd MMM 'yy",
      },
      handleScroll: {
        mouseWheel: !0,
        pressedMouseMove: !0,
        horzTouchDrag: !0,
        vertTouchDrag: !0,
      },
      handleScale: {
        axisPressedMouseMove: { time: !0, price: !0 },
        axisDoubleClickReset: { time: !0, price: !0 },
        mouseWheel: !0,
        pinch: !0,
      },
      kineticScroll: { mouse: !1, touch: !0 },
      trackingMode: { exitMode: 1 },
    },
    Ls = {
      upColor: "#26a69a",
      downColor: "#ef5350",
      wickVisible: !0,
      borderVisible: !0,
      borderColor: "#378658",
      borderUpColor: "#26a69a",
      borderDownColor: "#ef5350",
      wickColor: "#737375",
      wickUpColor: "#26a69a",
      wickDownColor: "#ef5350",
    },
    zs = {
      upColor: "#26a69a",
      downColor: "#ef5350",
      openVisible: !0,
      thinBars: !0,
    },
    Is = {
      color: "#2196f3",
      lineStyle: 0,
      lineWidth: 3,
      lineType: 0,
      crosshairMarkerVisible: !0,
      crosshairMarkerRadius: 4,
      crosshairMarkerBorderColor: "",
      crosshairMarkerBorderWidth: 2,
      crosshairMarkerBackgroundColor: "",
      lastPriceAnimation: 0,
    },
    Ns = {
      topColor: "rgba( 46, 220, 135, 0.4)",
      bottomColor: "rgba( 40, 221, 100, 0)",
      invertFilledArea: !1,
      lineColor: "#33D778",
      lineStyle: 0,
      lineWidth: 3,
      lineType: 0,
      crosshairMarkerVisible: !0,
      crosshairMarkerRadius: 4,
      crosshairMarkerBorderColor: "",
      crosshairMarkerBorderWidth: 2,
      crosshairMarkerBackgroundColor: "",
      lastPriceAnimation: 0,
    },
    Vs = {
      baseValue: { type: "price", price: 0 },
      topFillColor1: "rgba(38, 166, 154, 0.28)",
      topFillColor2: "rgba(38, 166, 154, 0.05)",
      topLineColor: "rgba(38, 166, 154, 1)",
      bottomFillColor1: "rgba(239, 83, 80, 0.05)",
      bottomFillColor2: "rgba(239, 83, 80, 0.28)",
      bottomLineColor: "rgba(239, 83, 80, 1)",
      lineWidth: 3,
      lineStyle: 0,
      lineType: 0,
      crosshairMarkerVisible: !0,
      crosshairMarkerRadius: 4,
      crosshairMarkerBorderColor: "",
      crosshairMarkerBorderWidth: 2,
      crosshairMarkerBackgroundColor: "",
      lastPriceAnimation: 0,
    },
    Fs = { color: "#26a69a", base: 0 },
    Ws = {
      title: "",
      visible: !0,
      lastValueVisible: !0,
      priceLineVisible: !0,
      priceLineSource: 0,
      priceLineWidth: 1,
      priceLineColor: "",
      priceLineStyle: 2,
      baseLineVisible: !0,
      baseLineWidth: 1,
      baseLineColor: "#B2B5BE",
      baseLineStyle: 0,
      priceFormat: { type: "price", precision: 2, minMove: 0.01 },
    };
  class js {
    constructor(t, i) {
      (this.Nm = t), (this.Vm = i);
    }
    applyOptions(t) {
      this.Nm.Ut().oc(this.Vm, t);
    }
    options() {
      return this.Ii().F();
    }
    width() {
      return Q(this.Vm) ? this.Nm.Qv(this.Vm) : 0;
    }
    Ii() {
      return h(this.Nm.Ut()._c(this.Vm)).Ot;
    }
  }
  const $s = {
    color: "#FF0000",
    price: 0,
    lineStyle: 2,
    lineWidth: 1,
    lineVisible: !0,
    axisLabelVisible: !0,
    title: "",
    axisLabelColor: "",
    axisLabelTextColor: "",
  };
  class Hs {
    constructor(t) {
      this.wh = t;
    }
    applyOptions(t) {
      this.wh.kh(t);
    }
    options() {
      return this.wh.F();
    }
    Fm() {
      return this.wh;
    }
  }
  class Us {
    constructor(t, i, n) {
      (this.Ts = t), (this.Wm = i), (this.jm = n);
    }
    priceFormatter() {
      return this.Ts.Ol();
    }
    priceToCoordinate(t) {
      const i = this.Ts.Tt();
      return null === i ? null : this.Ts.Ot().Dt(t, i.Bt);
    }
    coordinateToPrice(t) {
      const i = this.Ts.Tt();
      return null === i ? null : this.Ts.Ot().pn(t, i.Bt);
    }
    barsInLogicalRange(t) {
      if (null === t) return null;
      const i = new on(new hn(t.from, t.to)).C_(),
        n = this.Ts.An();
      if (n.Vi()) return null;
      const s = n.jh(i.Ms(), 1),
        e = n.jh(i.ci(), -1),
        r = h(n.Vh()),
        l = h(n.En());
      if (null !== s && null !== e && s.Ys > e.Ys)
        return { barsBefore: t.from - r, barsAfter: l - t.to };
      const a = {
        barsBefore: null === s || s.Ys === r ? t.from - r : s.Ys - r,
        barsAfter: null === e || e.Ys === l ? l - t.to : l - e.Ys,
      };
      return (
        null !== s &&
          null !== e &&
          ((a.from = s._t.__ || s._t.u_), (a.to = e._t.__ || e._t.u_)),
        a
      );
    }
    setData(t) {
      this.Ts.Ah(), this.Wm.$m(this.Ts, t);
    }
    update(t) {
      this.Ts.Ah(), this.Wm.Hm(this.Ts, t);
    }
    dataByIndex(t, i) {
      const n = this.Ts.An().jh(t, i);
      return null === n ? null : Os(this.seriesType())(n);
    }
    setMarkers(t) {
      const i = t.map((t) =>
        Object.assign(Object.assign({}, t), {
          originalTime: t.time,
          time: bs(t.time),
        })
      );
      this.Ts.gl(i);
    }
    markers() {
      return this.Ts.wl().map((t) => {
        const { originalTime: i, time: n } = t,
          s = (function (t, i) {
            var n = {};
            for (var s in t)
              Object.prototype.hasOwnProperty.call(t, s) &&
                i.indexOf(s) < 0 &&
                (n[s] = t[s]);
            if (
              null != t &&
              "function" == typeof Object.getOwnPropertySymbols
            ) {
              var e = 0;
              for (s = Object.getOwnPropertySymbols(t); e < s.length; e++)
                i.indexOf(s[e]) < 0 &&
                  Object.prototype.propertyIsEnumerable.call(t, s[e]) &&
                  (n[s[e]] = t[s[e]]);
            }
            return n;
          })(t, ["originalTime", "time"]);
        return Object.assign({ time: i }, s);
      });
    }
    applyOptions(t) {
      this.Ts.kh(t);
    }
    options() {
      return x(this.Ts.F());
    }
    priceScale() {
      return this.jm.priceScale(this.Ts.Ot().Il());
    }
    createPriceLine(t) {
      const i = b(x($s), t),
        n = this.Ts.Ml(i);
      return new Hs(n);
    }
    removePriceLine(t) {
      this.Ts.Sl(t.Fm());
    }
    seriesType() {
      return this.Ts.Ah();
    }
  }
  class qs {
    constructor(t, i) {
      (this.Um = new m()),
        (this.z_ = new m()),
        (this.uv = new m()),
        (this.Hi = t),
        (this.wo = t.yt()),
        (this.Wv = i),
        this.wo.Su().l(this.qm.bind(this)),
        this.wo.xu().l(this.Ym.bind(this)),
        this.Wv.gv().l(this.Xm.bind(this));
    }
    M() {
      this.wo.Su().v(this),
        this.wo.xu().v(this),
        this.Wv.gv().v(this),
        this.Um.M(),
        this.z_.M(),
        this.uv.M();
    }
    scrollPosition() {
      return this.wo.ou();
    }
    scrollToPosition(t, i) {
      i ? this.wo.gu(t, 1e3) : this.Hi.Gn(t);
    }
    scrollToRealTime() {
      this.wo.bu();
    }
    getVisibleRange() {
      var t, i;
      const n = this.wo.G_();
      return null === n
        ? null
        : {
            from: null !== (t = n.from.__) && void 0 !== t ? t : n.from.u_,
            to: null !== (i = n.to.__) && void 0 !== i ? i : n.to.u_,
          };
    }
    setVisibleRange(t) {
      const i = { from: bs(t.from), to: bs(t.to) },
        n = this.wo.iu(i);
      this.Hi.Ec(n);
    }
    getVisibleLogicalRange() {
      const t = this.wo.K_();
      return null === t ? null : { from: t.Ms(), to: t.ci() };
    }
    setVisibleLogicalRange(t) {
      e(t.from <= t.to, "The from index cannot be after the to index."),
        this.Hi.Ec(t);
    }
    resetTimeScale() {
      this.Hi.Zn();
    }
    fitContent() {
      this.Hi.Cu();
    }
    logicalToCoordinate(t) {
      const i = this.Hi.yt();
      return i.Vi() ? null : i.zt(t);
    }
    coordinateToLogical(t) {
      return this.wo.Vi() ? null : this.wo.ru(t);
    }
    timeToCoordinate(t) {
      const i = bs(t),
        n = this.wo.Fl(i, !1);
      return null === n ? null : this.wo.zt(n);
    }
    coordinateToTime(t) {
      var i;
      const n = this.Hi.yt(),
        s = n.ru(t),
        e = n.vn(s);
      return null === e ? null : null !== (i = e.__) && void 0 !== i ? i : e.u_;
    }
    width() {
      return this.Wv.qp().width;
    }
    height() {
      return this.Wv.qp().height;
    }
    subscribeVisibleTimeRangeChange(t) {
      this.Um.l(t);
    }
    unsubscribeVisibleTimeRangeChange(t) {
      this.Um.p(t);
    }
    subscribeVisibleLogicalRangeChange(t) {
      this.z_.l(t);
    }
    unsubscribeVisibleLogicalRangeChange(t) {
      this.z_.p(t);
    }
    subscribeSizeChange(t) {
      this.uv.l(t);
    }
    unsubscribeSizeChange(t) {
      this.uv.p(t);
    }
    applyOptions(t) {
      this.wo.kh(t);
    }
    options() {
      return x(this.wo.F());
    }
    qm() {
      this.Um.g() && this.Um.m(this.getVisibleRange());
    }
    Ym() {
      this.z_.g() && this.z_.m(this.getVisibleLogicalRange());
    }
    Xm(t) {
      this.uv.m(t.width, t.height);
    }
  }
  function Ys(t) {
    if (void 0 === t || "custom" === t.type) return;
    const i = t;
    void 0 !== i.minMove &&
      void 0 === i.precision &&
      (i.precision = (function (t) {
        if (t >= 1) return 0;
        let i = 0;
        for (; i < 8; i++) {
          const n = Math.round(t);
          if (Math.abs(n - t) < 1e-8) return i;
          t *= 10;
        }
        return i;
      })(i.minMove));
  }
  function Xs(t) {
    return (
      (function (t) {
        if (S(t.handleScale)) {
          const i = t.handleScale;
          t.handleScale = {
            axisDoubleClickReset: { time: i, price: i },
            axisPressedMouseMove: { time: i, price: i },
            mouseWheel: i,
            pinch: i,
          };
        } else if (void 0 !== t.handleScale) {
          const { axisPressedMouseMove: i, axisDoubleClickReset: n } =
            t.handleScale;
          S(i) && (t.handleScale.axisPressedMouseMove = { time: i, price: i }),
            S(n) &&
              (t.handleScale.axisDoubleClickReset = { time: n, price: n });
        }
        const i = t.handleScroll;
        S(i) &&
          (t.handleScroll = {
            horzTouchDrag: i,
            vertTouchDrag: i,
            mouseWheel: i,
            pressedMouseMove: i,
          });
      })(t),
      t
    );
  }
  class Zs {
    constructor(t, i) {
      (this.Zm = new ks()),
        (this.Km = new Map()),
        (this.Gm = new Map()),
        (this.Jm = new m()),
        (this.Qm = new m());
      const n = void 0 === i ? x(As) : b(x(As), Xs(i));
      (this.Nm = new ns(t, n)),
        this.Nm.jp().l((t) => {
          this.Jm.g() && this.Jm.m(this.tb(t()));
        }, this),
        this.Nm.fc().l((t) => {
          this.Qm.g() && this.Qm.m(this.tb(t()));
        }, this);
      const s = this.Nm.Ut();
      this.ib = new qs(s, this.Nm.Yv());
    }
    setCrossHairXY(t, i, n) {
      this.Nm.qv()[0].$v(t, i, n);
    }
    remove() {
      this.Nm.jp().v(this),
        this.Nm.fc().v(this),
        this.ib.M(),
        this.Nm.M(),
        this.Km.clear(),
        this.Gm.clear(),
        this.Jm.M(),
        this.Qm.M(),
        this.Zm.M();
    }
    resize(t, i, n) {
      this.autoSizeActive() || this.Nm.$v(t, i, n);
    }
    addAreaSeries(t) {
      return this.nb("Area", Ns, t);
    }
    addBaselineSeries(t) {
      return this.nb("Baseline", Vs, t);
    }
    addBarSeries(t) {
      return this.nb("Bar", zs, t);
    }
    addCandlestickSeries(t = {}) {
      return (
        (function (t) {
          void 0 !== t.borderColor &&
            ((t.borderUpColor = t.borderColor),
            (t.borderDownColor = t.borderColor)),
            void 0 !== t.wickColor &&
              ((t.wickUpColor = t.wickColor), (t.wickDownColor = t.wickColor));
        })(t),
        this.nb("Candlestick", Ls, t)
      );
    }
    addHistogramSeries(t) {
      return this.nb("Histogram", Fs, t);
    }
    addLineSeries(t) {
      return this.nb("Line", Is, t);
    }
    removeSeries(t) {
      const i = r(this.Km.get(t)),
        n = this.Zm.Bc(i);
      this.Nm.Ut().Bc(i), this.sb(n), this.Km.delete(t), this.Gm.delete(i);
    }
    $m(t, i) {
      this.sb(this.Zm.Cm(t, i));
    }
    Hm(t, i) {
      this.sb(this.Zm.Om(t, i));
    }
    subscribeClick(t) {
      this.Jm.l(t);
    }
    unsubscribeClick(t) {
      this.Jm.p(t);
    }
    subscribeCrosshairMove(t) {
      this.Qm.l(t);
    }
    unsubscribeCrosshairMove(t) {
      this.Qm.p(t);
    }
    priceScale(t) {
      return new js(this.Nm, t);
    }
    timeScale() {
      return this.ib;
    }
    applyOptions(t) {
      this.Nm.kh(Xs(t));
    }
    options() {
      return this.Nm.F();
    }
    takeScreenshot() {
      return this.Nm.Gv();
    }
    autoSizeActive() {
      return this.Nm.nm();
    }
    nb(t, i, n = {}) {
      Ys(n.priceFormat);
      const s = b(x(Ws), x(i), n),
        e = this.Nm.Ut().Dc(t, s),
        r = new Us(e, this, this);
      return this.Km.set(r, e), this.Gm.set(e, r), r;
    }
    sb(t) {
      const i = this.Nm.Ut();
      i.Pc(t.yt.eu, t.yt.zm, t.yt.Im),
        t.Am.forEach((t, i) => i.tt(t.ar, t.Lm)),
        i.lu();
    }
    eb(t) {
      return r(this.Gm.get(t));
    }
    tb(t) {
      const i = new Map();
      t.fm.forEach((t, n) => {
        const s = Os(n.Ah())(t);
        e(
          (function (t) {
            return void 0 !== t.open || void 0 !== t.value;
          })(s)
        ),
          i.set(this.eb(n), s);
      });
      const n = void 0 === t.dm ? void 0 : this.eb(t.dm);
      return {
        time: t._t,
        logical: t.Ys,
        point: t.um,
        hoveredSeries: n,
        hoveredObjectId: t.pm,
        seriesData: i,
        sourceEvent: t.vm,
      };
    }
  }
  var Ks = Object.freeze({
    __proto__: null,
    get ColorType() {
      return fn;
    },
    get CrosshairMode() {
      return G;
    },
    get LastPriceAnimationMode() {
      return cn;
    },
    get LineStyle() {
      return i;
    },
    get LineType() {
      return t;
    },
    get MismatchDirection() {
      return wi;
    },
    get PriceLineSource() {
      return dn;
    },
    get PriceScaleMode() {
      return ji;
    },
    get TickMarkType() {
      return _n;
    },
    get TrackingModeExitMode() {
      return un;
    },
    createChart: function (t, i) {
      let n;
      if (M(t)) {
        const i = document.getElementById(t);
        e(null !== i, `Cannot find element in DOM with id=${t}`), (n = i);
      } else n = t;
      return new Zs(n, i);
    },
    isBusinessDay: wn,
    isUTCTimestamp: Mn,
    version: function () {
      return "4.0.1";
    },
  });
  window.LightweightCharts = Ks;
})();
