/*!
 * @license
 * TradingView Lightweight Charts v3.2.0-dev+202010260323
 * Copyright (c) 2020 TradingView, Inc.
 * Licensed under Apache License 2.0 https://www.apache.org/licenses/LICENSE-2.0
 */
!(function () {
  "use strict";
  var t, i;

  function n(t, i) {
    var n,
      h = (((n = {})[0] = []),
      (n[1] = [t.lineWidth, t.lineWidth]),
      (n[2] = [2 * t.lineWidth, 2 * t.lineWidth]),
      (n[3] = [6 * t.lineWidth, 6 * t.lineWidth]),
      (n[4] = [t.lineWidth, 4 * t.lineWidth]),
      n)[i];
    t.setLineDash(h);
  }

  function h(t, i, n, h) {
    t.beginPath();
    var s = t.lineWidth % 2 ? 0.5 : 0;
    t.moveTo(n, i + s), t.lineTo(h, i + s), t.stroke();
  }
  !(function (t) {
    (t[(t.Simple = 0)] = "Simple"), (t[(t.WithSteps = 1)] = "WithSteps");
  })(t || (t = {})),
    (function (t) {
      (t[(t.Solid = 0)] = "Solid"),
        (t[(t.Dotted = 1)] = "Dotted"),
        (t[(t.Dashed = 2)] = "Dashed"),
        (t[(t.LargeDashed = 3)] = "LargeDashed"),
        (t[(t.SparseDotted = 4)] = "SparseDotted");
    })(i || (i = {}));
  var s = function (t, i) {
    return (s =
      Object.setPrototypeOf ||
      ({
        __proto__: [],
      } instanceof Array &&
        function (t, i) {
          t.__proto__ = i;
        }) ||
      function (t, i) {
        for (var n in i)
          Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n]);
      })(t, i);
  };

  function r(t, i) {
    function n() {
      this.constructor = t;
    }
    s(t, i),
      (t.prototype =
        null === i ? Object.create(i) : ((n.prototype = i.prototype), new n()));
  }
  var e = function () {
    return (e =
      Object.assign ||
      function (t) {
        for (var i, n = 1, h = arguments.length; n < h; n++)
          for (var s in (i = arguments[n]))
            Object.prototype.hasOwnProperty.call(i, s) && (t[s] = i[s]);
        return t;
      }).apply(this, arguments);
  };

  function u() {
    for (var t = 0, i = 0, n = arguments.length; i < n; i++)
      t += arguments[i].length;
    var h = Array(t),
      s = 0;
    for (i = 0; i < n; i++)
      for (var r = arguments[i], e = 0, u = r.length; e < u; e++, s++)
        h[s] = r[e];
    return h;
  }

  function a(t, i) {
    if (!t) throw new Error("Assertion failed" + (i ? ": " + i : ""));
  }

  function o(t) {
    if (void 0 === t) throw new Error("Value is undefined");
    return t;
  }

  function l(t) {
    if (null === t) throw new Error("Value is null");
    return t;
  }

  function f(t) {
    return l(o(t));
  }

  function c(t) {
    for (var i = [], n = 1; n < arguments.length; n++) i[n - 1] = arguments[n];
    for (var h = 0, s = i; h < s.length; h++) {
      var r = s[h];
      for (var e in r)
        void 0 !== r[e] &&
          ("object" != typeof r[e] || void 0 === t[e]
            ? (t[e] = r[e])
            : c(t[e], r[e]));
    }
    return t;
  }

  function v(t) {
    return "number" == typeof t && isFinite(t);
  }

  function _(t) {
    return "number" == typeof t && t % 1 == 0;
  }

  function d(t) {
    return "string" == typeof t;
  }

  function w(t) {
    return "boolean" == typeof t;
  }

  function M(t) {
    var i,
      n,
      h,
      s = t;
    if (!s || "object" != typeof s) return s;
    for (n in ((i = Array.isArray(s) ? [] : {}), s))
      s.hasOwnProperty(n) &&
        ((h = s[n]), (i[n] = h && "object" == typeof h ? M(h) : h));
    return i;
  }

  function b(t) {
    return null !== t;
  }

  function m(t) {
    return null === t ? void 0 : t;
  }
  var g = (function () {
      function t() {
        this.t = [];
      }
      return (
        (t.prototype.i = function (t) {
          this.t = t;
        }),
        (t.prototype.h = function (t, i, n, h) {
          this.t.forEach(function (s) {
            t.save(), s.h(t, i, n, h), t.restore();
          });
        }),
        t
      );
    })(),
    p = (function () {
      function t() {}
      return (
        (t.prototype.h = function (t, i, n, h) {
          t.save(), t.scale(i, i), this.u(t, n, h), t.restore();
        }),
        (t.prototype.o = function (t, i, n, h) {
          t.save(), t.scale(i, i), this.l(t, n, h), t.restore();
        }),
        (t.prototype.l = function (t, i, n) {}),
        t
      );
    })(),
    y = (function (t) {
      function i() {
        var i = (null !== t && t.apply(this, arguments)) || this;
        return (i.v = null), i;
      }
      return (
        r(i, t),
        (i.prototype._ = function (t) {
          this.v = t;
        }),
        (i.prototype.u = function (t) {
          if (null !== this.v && null !== this.v.M) {
            var i = this.v.M,
              n = this.v,
              h = function (h) {
                t.beginPath();
                for (var s = i.to - 1; s >= i.from; --s) {
                  var r = n.m[s];
                  t.moveTo(r.g, r.p), t.arc(r.g, r.p, h, 0, 2 * Math.PI);
                }
                t.fill();
              };
            (t.fillStyle = n.k), h(n.N + 2), (t.fillStyle = n.S), h(n.N);
          }
        }),
        i
      );
    })(p);
  var k,
    x,
    N,
    S = {
      from: 0,
      to: 1,
    },
    D = (function () {
      function t(t, i) {
        (this.D = new g()),
          (this.C = []),
          (this.T = []),
          (this.A = !0),
          (this.L = t),
          (this.B = i),
          this.D.i(this.C);
      }
      return (
        (t.prototype.F = function (t) {
          var i = this,
            n = this.L.O();
          n.length !== this.C.length &&
            ((this.T = n.map(function () {
              return {
                m: [
                  {
                    g: 0,
                    p: 0,
                    V: 0,
                    P: 0,
                  },
                ],
                S: "",
                k: i.L.I().layout.backgroundColor,
                N: 0,
                M: null,
              };
            })),
            (this.C = this.T.map(function (t) {
              var i = new y();
              return i._(t), i;
            })),
            this.D.i(this.C)),
            (this.A = !0);
        }),
        (t.prototype.W = function (t, i, n) {
          return this.A && (this.j(), (this.A = !1)), this.D;
        }),
        (t.prototype.j = function () {
          var t = this,
            i = this.L.O(),
            n = this.B.R(),
            h = this.L.U();
          i.forEach(function (i, s) {
            var r = t.T[s],
              e = i.q(n);
            if (null !== e && i.I().visible) {
              var u = l(i.H());
              (r.S = i.$().K(n).Y),
                (r.k = t.L.I().layout.backgroundColor),
                (r.N = e.N),
                (r.m[0].P = e.P),
                (r.m[0].p = i.Z().X(e.P, u.J)),
                (r.m[0].V = n),
                (r.m[0].g = h.G(n)),
                (r.M = S);
            } else r.M = null;
          });
        }),
        t
      );
    })(),
    C = (function () {
      function t(t) {
        this.tt = t;
      }
      return (
        (t.prototype.h = function (t, i, s, r) {
          if (null !== this.tt) {
            var e = this.tt.nt.it,
              u = this.tt.ht.it;
            if (e || u) {
              t.save();
              var a = Math.round(this.tt.g * i),
                o = Math.round(this.tt.p * i),
                l = Math.ceil(this.tt.st * i),
                f = Math.ceil(this.tt.rt * i);
              (t.lineCap = "butt"),
                e &&
                  a >= 0 &&
                  ((t.lineWidth = Math.floor(this.tt.nt.et * i)),
                  (t.strokeStyle = this.tt.nt.ut),
                  (t.fillStyle = this.tt.nt.ut),
                  n(t, this.tt.nt.at),
                  (function (t, i, n, h) {
                    t.beginPath();
                    var s = t.lineWidth % 2 ? 0.5 : 0;
                    t.moveTo(i + s, n), t.lineTo(i + s, h), t.stroke();
                  })(t, a, 0, f)),
                u &&
                  o >= 0 &&
                  ((t.lineWidth = Math.floor(this.tt.ht.et * i)),
                  (t.strokeStyle = this.tt.ht.ut),
                  (t.fillStyle = this.tt.ht.ut),
                  n(t, this.tt.ht.at),
                  h(t, o, 0, l)),
                t.restore();
            }
          }
        }),
        t
      );
    })(),
    T = (function () {
      function t(t) {
        (this.A = !0),
          (this.ot = {
            nt: {
              et: 1,
              at: 0,
              ut: "",
              it: !1,
            },
            ht: {
              et: 1,
              at: 0,
              ut: "",
              it: !1,
            },
            st: 0,
            rt: 0,
            g: 0,
            p: 0,
          }),
          (this.lt = new C(this.ot)),
          (this.ft = t);
      }
      return (
        (t.prototype.F = function () {
          this.A = !0;
        }),
        (t.prototype.W = function (t, i) {
          return this.A && (this.j(), (this.A = !1)), this.lt;
        }),
        (t.prototype.j = function () {
          var t = this.ft.it(),
            i = l(this.ft.ct()),
            n = i.vt().I().crosshair,
            h = this.ot;
          (h.ht.it = t && this.ft._t(i)),
            (h.nt.it = t && this.ft.dt()),
            (h.ht.et = n.horzLine.width),
            (h.ht.at = n.horzLine.style),
            (h.ht.ut = n.horzLine.color),
            (h.nt.et = n.vertLine.width),
            (h.nt.at = n.vertLine.style),
            (h.nt.ut = n.vertLine.color),
            (h.st = i.wt()),
            (h.rt = i.Mt()),
            (h.g = this.ft.bt()),
            (h.p = this.ft.gt());
        }),
        t
      );
    })(),
    A = {
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
      darkturquoise: "#00ced1",
      darkviolet: "#9400d3",
      deeppink: "#ff1493",
      deepskyblue: "#00bfff",
      dimgray: "#696969",
      dodgerblue: "#1e90ff",
      feldspar: "#d19275",
      firebrick: "#b22222",
      floralwhite: "#fffaf0",
      forestgreen: "#228b22",
      fuchsia: "#ff00ff",
      gainsboro: "#dcdcdc",
      ghostwhite: "#f8f8ff",
      gold: "#ffd700",
      goldenrod: "#daa520",
      gray: "#808080",
      green: "#008000",
      greenyellow: "#adff2f",
      honeydew: "#f0fff0",
      hotpink: "#ff69b4",
      indianred: "#cd5c5c",
      indigo: "#4b0082",
      ivory: "#fffff0",
      khaki: "#f0e68c",
      lavender: "#e6e6fa",
      lavenderblush: "#fff0f5",
      lawngreen: "#7cfc00",
      lemonchiffon: "#fffacd",
      lightblue: "#add8e6",
      lightcoral: "#f08080",
      lightcyan: "#e0ffff",
      lightgoldenrodyellow: "#fafad2",
      lightgreen: "#90ee90",
      lightgrey: "#d3d3d3",
      lightpink: "#ffb6c1",
      lightsalmon: "#ffa07a",
      lightseagreen: "#20b2aa",
      lightskyblue: "#87cefa",
      lightslateblue: "#8470ff",
      lightslategray: "#778899",
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
      mediumpurple: "#9370d8",
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
      palevioletred: "#d87093",
      papayawhip: "#ffefd5",
      peachpuff: "#ffdab9",
      peru: "#cd853f",
      pink: "#ffc0cb",
      plum: "#dda0dd",
      powderblue: "#b0e0e6",
      purple: "#800080",
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
      snow: "#fffafa",
      springgreen: "#00ff7f",
      steelblue: "#4682b4",
      tan: "#d2b48c",
      teal: "#008080",
      thistle: "#d8bfd8",
      tomato: "#ff6347",
      turquoise: "#40e0d0",
      violet: "#ee82ee",
      violetred: "#d02090",
      wheat: "#f5deb3",
      white: "#ffffff",
      whitesmoke: "#f5f5f5",
      yellow: "#ffff00",
      yellowgreen: "#9acd32",
    };

  function E(t) {
    return (function (t, i, n) {
      return (h = i) <= 0 || h > 0
        ? i < t
          ? t
          : i > n
          ? n
          : Math.round(i)
        : t;
      var h;
    })(0, t, 255);
  }

  function L(t) {
    if ("transparent" === (t = t.toLowerCase())) return [0, 0, 0];
    t in A && (t = A[t]);
    var i = (function (t) {
      var i = N.rgbaRe.exec(t) || N.rgbRe.exec(t);
      return null !== i ? N.parse(i) : null;
    })(t);
    if (null !== i) return i;
    var n,
      h,
      s = ((n = t), null !== (h = x.re.exec(n)) ? x.parse(h) : null);
    if (null !== s) return s;
    var r = (function (t) {
      var i = k.re.exec(t);
      return null !== i ? k.parse(i) : null;
    })(t);
    if (null !== r) return r;
    throw new Error("Cannot parse color: " + t);
  }

  function B(t) {
    var i,
      n = L(t);
    return {
      yt: "rgb(" + n[0] + ", " + n[1] + ", " + n[2] + ")",
      kt:
        ((i = n),
        0.199 * i[0] + 0.687 * i[1] + 0.114 * i[2] > 160 ? "black" : "white"),
    };
  }

  function F(t, i, n, h, s, r) {
    t.fillRect(i + r, n, h - 2 * r, r),
      t.fillRect(i + r, n + s - r, h - 2 * r, r),
      t.fillRect(i, n, r, s),
      t.fillRect(i + h - r, n, r, s);
  }

  function O(t, i, n) {
    t.save(), t.scale(i, i), n(), t.restore();
  }

  function V(t, i, n, h, s, r) {
    t.save(),
      (t.globalCompositeOperation = "copy"),
      (t.fillStyle = r),
      t.fillRect(i, n, h, s),
      t.restore();
  }
  !(function (t) {
    (t.re = /^#([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])?$/),
      (t.parse = function (t) {
        return [
          E(parseInt(t[1] + t[1], 16)),
          E(parseInt(t[2] + t[2], 16)),
          E(parseInt(t[3] + t[3], 16)),
        ];
      });
  })(k || (k = {})),
    (function (t) {
      (t.re =
        /^#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})?$/),
        (t.parse = function (t) {
          return [
            E(parseInt(t[1], 16)),
            E(parseInt(t[2], 16)),
            E(parseInt(t[3], 16)),
          ];
        });
    })(x || (x = {})),
    (function (t) {
      (t.rgbRe =
        /^rgb\(\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*\)$/),
        (t.rgbaRe =
          /^rgba\(\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?[\d]{0,10}(?:\.\d+)?)\s*\)$/),
        (t.parse = function (t) {
          return [
            E(parseInt(t[1], 10)),
            E(parseInt(t[2], 10)),
            E(parseInt(t[3], 10)),
          ];
        });
    })(N || (N = {}));
  var z,
    P = (function () {
      function t(t, i) {
        this._(t, i);
      }
      return (
        (t.prototype._ = function (t, i) {
          (this.tt = t), (this.xt = i);
        }),
        (t.prototype.h = function (t, i, n, h, s, r) {
          if (this.tt.it) {
            t.font = i.Nt;
            var e = this.tt.St || !this.tt.Dt ? i.Ct : 0,
              u = i.Tt,
              a = i.At,
              o = i.Et,
              l = i.Lt,
              f = i.Bt,
              c = this.tt.Ft,
              v = Math.ceil(n.Ot(t, c)),
              _ = i.Vt,
              d = i.zt + a + o,
              w = Math.ceil(0.5 * d),
              M = u + v + l + f + e,
              b = this.xt.Pt;
            this.xt.It && (b = this.xt.It);
            var m,
              g,
              p = (b = Math.round(b)) - w,
              y = p + d,
              k = "right" === s,
              x = k ? h : 0,
              N = Math.ceil(h * r),
              S = x;
            if (
              ((t.fillStyle = this.xt.yt),
              (t.lineWidth = 1),
              (t.lineCap = "butt"),
              c)
            ) {
              k
                ? ((m = x - e), (g = (S = x - M) + f))
                : ((S = x + M), (m = x + e), (g = x + u + e + l));
              var D = Math.max(1, Math.floor(r)),
                C = Math.max(1, Math.floor(u * r)),
                T = k ? N : 0,
                A = Math.round(p * r),
                E = Math.round(S * r),
                L = Math.round(b * r) - Math.floor(0.5 * r),
                B = L + D + (L - A),
                F = Math.round(m * r);
              t.save(),
                t.beginPath(),
                t.moveTo(T, A),
                t.lineTo(E, A),
                t.lineTo(E, B),
                t.lineTo(T, B),
                t.fill(),
                (t.fillStyle = this.tt.Wt),
                t.fillRect(k ? N - C : 0, A, C, B - A),
                this.tt.St &&
                  ((t.fillStyle = this.xt.ut), t.fillRect(T, L, F - T, D)),
                (t.textAlign = "left"),
                (t.fillStyle = this.xt.ut),
                O(t, r, function () {
                  t.fillText(c, g, y - o - _);
                }),
                t.restore();
            }
          }
        }),
        (t.prototype.Mt = function (t, i) {
          return this.tt.it ? t.zt + t.At + t.Et : 0;
        }),
        t
      );
    })(),
    I = (function () {
      function t(t) {
        (this.jt = {
          Pt: 0,
          ut: "#FFF",
          yt: "#000",
        }),
          (this.Rt = {
            Ft: "",
            it: !1,
            St: !0,
            Dt: !1,
            Wt: "",
          }),
          (this.Ut = {
            Ft: "",
            it: !1,
            St: !1,
            Dt: !0,
            Wt: "",
          }),
          (this.A = !0),
          (this.qt = new (t || P)(this.Rt, this.jt)),
          (this.Ht = new (t || P)(this.Ut, this.jt));
      }
      return (
        (t.prototype.Ft = function () {
          return this.Rt.Ft;
        }),
        (t.prototype.Pt = function () {
          return this.Yt(), this.jt.Pt;
        }),
        (t.prototype.F = function () {
          this.A = !0;
        }),
        (t.prototype.Mt = function (t, i) {
          return (
            void 0 === i && (i = !1),
            Math.max(this.qt.Mt(t, i), this.Ht.Mt(t, i))
          );
        }),
        (t.prototype.Kt = function () {
          return this.jt.It || 0;
        }),
        (t.prototype.$t = function (t) {
          this.jt.It = t;
        }),
        (t.prototype.Xt = function () {
          return this.Yt(), this.Rt.it || this.Ut.it;
        }),
        (t.prototype.Zt = function () {
          return this.Yt(), this.Rt.it;
        }),
        (t.prototype.W = function (t) {
          return (
            this.Yt(),
            (this.Rt.St = this.Rt.St && t.I().drawTicks),
            (this.Ut.St = this.Ut.St && t.I().drawTicks),
            this.qt._(this.Rt, this.jt),
            this.Ht._(this.Ut, this.jt),
            this.qt
          );
        }),
        (t.prototype.Jt = function () {
          return (
            this.Yt(),
            this.qt._(this.Rt, this.jt),
            this.Ht._(this.Ut, this.jt),
            this.Ht
          );
        }),
        (t.prototype.Yt = function () {
          this.A &&
            ((this.Rt.St = !0),
            (this.Ut.St = !1),
            this.Gt(this.Rt, this.Ut, this.jt));
        }),
        t
      );
    })(),
    W = (function (t) {
      function i(i, n, h) {
        var s = t.call(this) || this;
        return (s.ft = i), (s.Qt = n), (s.ti = h), s;
      }
      return (
        r(i, t),
        (i.prototype.Gt = function (t, i, n) {
          t.it = !1;
          var h = this.ft.I().horzLine;
          if (h.labelVisible) {
            var s = this.Qt.H();
            if (this.ft.it() && !this.Qt.ii() && null !== s) {
              var r = B(h.labelBackgroundColor);
              (n.yt = r.yt), (n.ut = r.kt);
              var e = this.ti(this.Qt);
              (n.Pt = e.Pt), (t.Ft = this.Qt.ni(e.P, s)), (t.it = !0);
            }
          }
        }),
        i
      );
    })(I),
    j = /[1-9]/g,
    R = (function () {
      function t() {
        this.tt = null;
      }
      return (
        (t.prototype._ = function (t) {
          this.tt = t;
        }),
        (t.prototype.h = function (t, i, n) {
          var h = this;
          if (
            null !== this.tt &&
            !1 !== this.tt.it &&
            0 !== this.tt.Ft.length
          ) {
            t.font = i.Nt;
            var s = Math.round(i.hi.Ot(t, this.tt.Ft, j));
            if (!(s <= 0)) {
              t.save();
              var r = i.si,
                e = s + 2 * r,
                u = e / 2,
                a = this.tt.wt,
                o = this.tt.Pt,
                f = Math.floor(o - u) + 0.5;
              f < 0
                ? ((o += Math.abs(0 - f)), (f = Math.floor(o - u) + 0.5))
                : f + e > a &&
                  ((o -= Math.abs(a - (f + e))), (f = Math.floor(o - u) + 0.5));
              var c = f + e,
                v = 0 + i.Tt + i.At + i.zt + i.Et;
              t.fillStyle = this.tt.yt;
              var _ = Math.round(f * n),
                d = Math.round(0 * n),
                w = Math.round(c * n),
                M = Math.round(v * n);
              t.fillRect(_, d, w - _, M - d);
              var b = Math.round(this.tt.Pt * n),
                m = d,
                g = Math.round((m + i.Tt + i.Ct) * n);
              t.fillStyle = this.tt.ut;
              var p = Math.max(1, Math.floor(n)),
                y = Math.floor(0.5 * n);
              t.fillRect(b - y, m, p, g - m);
              var k = v - i.Vt - i.Et;
              (t.textAlign = "left"),
                (t.fillStyle = this.tt.ut),
                O(t, n, function () {
                  t.fillText(l(h.tt).Ft, f + r, k);
                }),
                t.restore();
            }
          }
        }),
        t
      );
    })(),
    U = (function () {
      function t(t, i, n) {
        (this.A = !0),
          (this.lt = new R()),
          (this.ot = {
            it: !1,
            yt: "#4c525e",
            ut: "white",
            Ft: "",
            wt: 0,
            Pt: NaN,
          }),
          (this.B = t),
          (this.ri = i),
          (this.ti = n);
      }
      return (
        (t.prototype.F = function () {
          this.A = !0;
        }),
        (t.prototype.W = function () {
          return (
            this.A && (this.j(), (this.A = !1)), this.lt._(this.ot), this.lt
          );
        }),
        (t.prototype.j = function () {
          var t = this.ot;
          t.it = !1;
          var i = this.B.I().vertLine;
          if (i.labelVisible) {
            var n = this.ri.U();
            if (!n.ii()) {
              var h = n.ei(this.B.R());
              t.wt = n.wt();
              var s = this.ti();
              if (s.V) {
                (t.Pt = s.Pt), (t.Ft = n.ui(l(h))), (t.it = !0);
                var r = B(i.labelBackgroundColor);
                (t.yt = r.yt), (t.ut = r.kt);
              }
            }
          }
        }),
        t
      );
    })(),
    q = (function () {
      function t() {
        (this.ai = null), (this.oi = 0);
      }
      return (
        (t.prototype.li = function () {
          return this.oi;
        }),
        (t.prototype.fi = function (t) {
          this.oi = t;
        }),
        (t.prototype.Z = function () {
          return this.ai;
        }),
        (t.prototype.ci = function (t) {
          this.ai = t;
        }),
        (t.prototype.vi = function (t, i) {
          return [];
        }),
        (t.prototype._i = function (t) {
          return [];
        }),
        (t.prototype.di = function () {
          return [];
        }),
        t
      );
    })();
  !(function (t) {
    (t[(t.Normal = 0)] = "Normal"), (t[(t.Magnet = 1)] = "Magnet");
  })(z || (z = {}));
  var H = (function (t) {
      function i(i, n) {
        var h = t.call(this) || this;
        (h.wi = null),
          (h.Mi = NaN),
          (h.bi = 0),
          (h.mi = !0),
          (h.gi = new Map()),
          (h.pi = !1),
          (h.yi = NaN),
          (h.ki = NaN),
          (h.xi = NaN),
          (h.Ni = NaN),
          (h.ri = i),
          (h.Si = n),
          (h.Di = new D(i, h));
        var s, r;
        h.Ci =
          ((s = function () {
            return h.Mi;
          }),
          (r = function () {
            return h.ki;
          }),
          function (t) {
            var i = r(),
              n = s();
            if (t === l(h.wi).Ti())
              return {
                P: n,
                Pt: i,
              };
            var e = l(t.H());
            return {
              P: t.Ai(i, e),
              Pt: i,
            };
          });
        var e = (function (t, i) {
          return function () {
            return {
              V: h.ri.U().ei(t()),
              Pt: i(),
            };
          };
        })(
          function () {
            return h.bi;
          },
          function () {
            return h.bt();
          }
        );
        return (h.Ei = new U(h, i, e)), (h.Li = new T(h)), h;
      }
      return (
        r(i, t),
        (i.prototype.I = function () {
          return this.Si;
        }),
        (i.prototype.Bi = function (t, i) {
          (this.xi = t), (this.Ni = i);
        }),
        (i.prototype.Fi = function () {
          (this.xi = NaN), (this.Ni = NaN);
        }),
        (i.prototype.Oi = function () {
          return this.xi;
        }),
        (i.prototype.Vi = function () {
          return this.Ni;
        }),
        (i.prototype.zi = function (t, i, n) {
          this.pi || (this.pi = !0), (this.mi = !0), this.Pi(t, i, n);
        }),
        (i.prototype.R = function () {
          return this.bi;
        }),
        (i.prototype.bt = function () {
          return this.yi;
        }),
        (i.prototype.gt = function () {
          return this.ki;
        }),
        (i.prototype.it = function () {
          return this.mi;
        }),
        (i.prototype.Ii = function () {
          (this.mi = !1),
            this.Wi(),
            (this.Mi = NaN),
            (this.yi = NaN),
            (this.ki = NaN),
            (this.wi = null),
            this.Fi();
        }),
        (i.prototype._i = function (t) {
          return null !== this.wi ? [this.Li, this.Di] : [];
        }),
        (i.prototype._t = function (t) {
          return t === this.wi && this.Si.horzLine.visible;
        }),
        (i.prototype.dt = function () {
          return this.Si.vertLine.visible;
        }),
        (i.prototype.vi = function (t, i) {
          (this.mi && this.wi === t) || this.gi.clear();
          var n = [];
          return this.wi === t && n.push(this.ji(this.gi, i, this.Ci)), n;
        }),
        (i.prototype.di = function () {
          return this.mi ? [this.Ei] : [];
        }),
        (i.prototype.ct = function () {
          return this.wi;
        }),
        (i.prototype.Ri = function () {
          this.Li.F(),
            this.gi.forEach(function (t) {
              return t.F();
            }),
            this.Ei.F(),
            this.Di.F();
        }),
        (i.prototype.Ui = function (t) {
          return t && !t.Ti().ii() ? t.Ti() : null;
        }),
        (i.prototype.Pi = function (t, i, n) {
          this.qi(t, i, n) && this.Ri();
        }),
        (i.prototype.qi = function (t, i, n) {
          var h = this.yi,
            s = this.ki,
            r = this.Mi,
            e = this.bi,
            u = this.wi,
            a = this.Ui(n);
          (this.bi = t),
            (this.yi = isNaN(t) ? NaN : this.ri.U().G(t)),
            (this.wi = n);
          var o = null !== a ? a.H() : null;
          return (
            null !== a && null !== o
              ? ((this.Mi = i), (this.ki = a.X(i, o)))
              : ((this.Mi = NaN), (this.ki = NaN)),
            h !== this.yi ||
              s !== this.ki ||
              e !== this.bi ||
              r !== this.Mi ||
              u !== this.wi
          );
        }),
        (i.prototype.Wi = function () {
          var t = this.ri
              .O()
              .map(function (t) {
                return t.Yi().Hi();
              })
              .filter(b),
            i = 0 === t.length ? null : Math.max.apply(Math, t);
          this.bi = null !== i ? i : NaN;
        }),
        (i.prototype.ji = function (t, i, n) {
          var h = t.get(i);
          return void 0 === h && ((h = new W(this, i, n)), t.set(i, h)), h;
        }),
        i
      );
    })(q),
    Y = ".";

  function K(t, i) {
    if (!v(t)) return "n/a";
    if (!_(i)) throw new TypeError("invalid length");
    if (i < 0 || i > 16) throw new TypeError("invalid length");
    if (0 === i) return t.toString();
    return ("0000000000000000" + t.toString()).slice(-i);
  }
  var $ = (function () {
      function t(t, i) {
        if ((i || (i = 1), (v(t) && _(t)) || (t = 100), t < 0))
          throw new TypeError("invalid base");
        (this.Qt = t), (this.Ki = i), this.$i();
      }
      return (
        (t.prototype.Xi = function (t) {
          var i = t < 0 ? "−" : "";
          return (t = Math.abs(t)), i + this.Zi(t);
        }),
        (t.prototype.$i = function () {
          if (((this.Ji = 0), this.Qt > 0 && this.Ki > 0))
            for (var t = this.Qt; t > 1; ) (t /= 10), this.Ji++;
        }),
        (t.prototype.Zi = function (t) {
          var i = this.Qt / this.Ki,
            n = Math.floor(t),
            h = "",
            s = void 0 !== this.Ji ? this.Ji : NaN;
          if (i > 1) {
            var r = +(Math.round(t * i) - n * i).toFixed(this.Ji);
            r >= i && ((r -= i), (n += 1)),
              (h = Y + K(+r.toFixed(this.Ji) * this.Ki, s));
          } else (n = Math.round(n * i) / i), s > 0 && (h = Y + K(0, s));
          return n.toFixed(0) + h;
        }),
        t
      );
    })(),
    X = (function (t) {
      function i(i) {
        return void 0 === i && (i = 100), t.call(this, i) || this;
      }
      return (
        r(i, t),
        (i.prototype.Xi = function (i) {
          return t.prototype.Xi.call(this, i) + "%";
        }),
        i
      );
    })($),
    Z = (function () {
      function t() {
        this.Gi = [];
      }
      return (
        (t.prototype.Qi = function (t, i, n) {
          var h = {
            tn: t,
            nn: i,
            hn: !0 === n,
          };
          this.Gi.push(h);
        }),
        (t.prototype.sn = function (t) {
          var i = this.Gi.findIndex(function (i) {
            return t === i.tn;
          });
          i > -1 && this.Gi.splice(i, 1);
        }),
        (t.prototype.rn = function (t) {
          this.Gi = this.Gi.filter(function (i) {
            return i.nn === t;
          });
        }),
        (t.prototype.en = function (t, i) {
          var n = u(this.Gi);
          (this.Gi = this.Gi.filter(function (t) {
            return !t.hn;
          })),
            n.forEach(function (n) {
              return n.tn(t, i);
            });
        }),
        (t.prototype.un = function () {
          return this.Gi.length > 0;
        }),
        (t.prototype.an = function () {
          this.Gi = [];
        }),
        t
      );
    })(),
    J = (function () {
      function t(t, i) {
        (this.on = t), (this.ln = i);
      }
      return (
        (t.prototype.fn = function (t) {
          return null !== t && this.on === t.on && this.ln === t.ln;
        }),
        (t.prototype.cn = function () {
          return new t(this.on, this.ln);
        }),
        (t.prototype.vn = function () {
          return this.on;
        }),
        (t.prototype._n = function () {
          return this.ln;
        }),
        (t.prototype.dn = function () {
          return this.ln - this.on;
        }),
        (t.prototype.ii = function () {
          return (
            this.ln === this.on ||
            Number.isNaN(this.ln) ||
            Number.isNaN(this.on)
          );
        }),
        (t.prototype.wn = function (i) {
          return null === i
            ? this
            : new t(Math.min(this.vn(), i.vn()), Math.max(this._n(), i._n()));
        }),
        (t.prototype.Mn = function (t) {
          if (v(t) && 0 !== this.ln - this.on) {
            var i = 0.5 * (this.ln + this.on),
              n = this.ln - i,
              h = this.on - i;
            (n *= t), (h *= t), (this.ln = i + n), (this.on = i + h);
          }
        }),
        (t.prototype.bn = function (t) {
          v(t) && ((this.ln += t), (this.on += t));
        }),
        (t.prototype.mn = function () {
          return {
            minValue: this.on,
            maxValue: this.ln,
          };
        }),
        (t.gn = function (i) {
          return null === i ? null : new t(i.minValue, i.maxValue);
        }),
        t
      );
    })();

  function G(t, i, n) {
    return Math.min(Math.max(t, i), n);
  }

  function Q(t, i, n) {
    return i - t <= n;
  }

  function tt(t) {
    return t <= 0 ? NaN : Math.log(t) / Math.log(10);
  }

  function it(t) {
    var i = Math.ceil(t);
    return i % 2 != 0 ? i - 1 : i;
  }

  function nt(t) {
    var i = Math.ceil(t);
    return i % 2 == 0 ? i - 1 : i;
  }

  function ht(t, i) {
    var n = (100 * (t - i)) / i;
    return i < 0 ? -n : n;
  }

  function st(t, i) {
    var n = ht(t.vn(), i),
      h = ht(t._n(), i);
    return new J(n, h);
  }

  function rt(t, i) {
    var n = (100 * (t - i)) / i + 100;
    return i < 0 ? -n : n;
  }

  function et(t, i) {
    var n = rt(t.vn(), i),
      h = rt(t._n(), i);
    return new J(n, h);
  }

  function ut(t) {
    var i = Math.abs(t);
    if (i < 1e-8) return 0;
    var n = tt(i + 1e-4) + 4;
    return t < 0 ? -n : n;
  }

  function at(t) {
    var i = Math.abs(t);
    if (i < 1e-8) return 0;
    var n = Math.pow(10, i - 4) - 1e-4;
    return t < 0 ? -n : n;
  }

  function ot(t) {
    if (null === t) return null;
    var i = ut(t.vn()),
      n = ut(t._n());
    return new J(i, n);
  }
  var lt,
    ft = (function () {
      function t(t, i) {
        if (
          ((this.pn = t),
          (this.yn = i),
          (function (t) {
            if (t < 0) return !1;
            for (var i = t; i > 1; i /= 10) if (i % 10 != 0) return !1;
            return !0;
          })(this.pn))
        )
          this.kn = [2, 2.5, 2];
        else {
          this.kn = [];
          for (var n = this.pn; 1 !== n; ) {
            if (n % 2 == 0) this.kn.push(2), (n /= 2);
            else {
              if (n % 5 != 0) throw new Error("unexpected base");
              this.kn.push(2), this.kn.push(2.5), (n /= 5);
            }
            if (this.kn.length > 100)
              throw new Error("something wrong with base");
          }
        }
      }
      return (
        (t.prototype.xn = function (t, i, n) {
          for (
            var h,
              s,
              r,
              e = 0 === this.pn ? 0 : 1 / this.pn,
              u = 1e-9,
              a = Math.pow(10, Math.max(0, Math.ceil(tt(t - i)))),
              o = 0,
              l = this.yn[0];
            ;

          ) {
            var f = Q(a, e, u) && a > e + u,
              c = Q(a, n * l, u),
              v = Q(a, 1, u);
            if (!(f && c && v)) break;
            (a /= l), (l = this.yn[++o % this.yn.length]);
          }
          if (
            (a <= e + u && (a = e),
            (a = Math.max(1, a)),
            this.kn.length > 0 &&
              ((h = a), (s = 1), (r = u), Math.abs(h - s) < r))
          )
            for (o = 0, l = this.kn[0]; Q(a, n * l, u) && a > e + u; )
              (a /= l), (l = this.kn[++o % this.kn.length]);
          return a;
        }),
        t
      );
    })(),
    ct = (function () {
      function t(t, i, n, h) {
        (this.Nn = []),
          (this.Qt = t),
          (this.pn = i),
          (this.Sn = n),
          (this.Dn = h);
      }
      return (
        (t.prototype.xn = function (t, i) {
          if (t < i) throw new Error("high < low");
          var n = this.Qt.Mt(),
            h = ((t - i) * this.Cn()) / n,
            s = new ft(this.pn, [2, 2.5, 2]),
            r = new ft(this.pn, [2, 2, 2.5]),
            e = new ft(this.pn, [2.5, 2, 2]),
            u = [];
          return (
            u.push(s.xn(t, i, h)),
            u.push(r.xn(t, i, h)),
            u.push(e.xn(t, i, h)),
            (function (t) {
              if (t.length < 1) throw Error("array is empty");
              for (var i = t[0], n = 1; n < t.length; ++n)
                t[n] < i && (i = t[n]);
              return i;
            })(u)
          );
        }),
        (t.prototype.Tn = function () {
          var t = this.Qt,
            i = t.H();
          if (null !== i) {
            var n = t.Mt(),
              h = this.Sn(n - 1, i),
              s = this.Sn(0, i),
              r = this.Qt.I().entireTextOnly ? this.An() / 2 : 0,
              e = r,
              u = n - 1 - r,
              a = Math.max(h, s),
              o = Math.min(h, s);
            if (a !== o) {
              for (
                var l = this.xn(a, o),
                  f = a % l,
                  c = a >= o ? 1 : -1,
                  v = null,
                  _ = 0,
                  d = a - (f += f < 0 ? l : 0);
                d > o;
                d -= l
              ) {
                var w = this.Dn(d, i, !0);
                (null !== v && Math.abs(w - v) < this.Cn()) ||
                  w < e ||
                  w > u ||
                  (_ < this.Nn.length
                    ? ((this.Nn[_].En = w), (this.Nn[_].Ln = t.Bn(d)))
                    : this.Nn.push({
                        En: w,
                        Ln: t.Bn(d),
                      }),
                  _++,
                  (v = w),
                  t.Fn() && (l = this.xn(d * c, o)));
              }
              this.Nn.length = _;
            } else this.Nn = [];
          } else this.Nn = [];
        }),
        (t.prototype.On = function () {
          return this.Nn;
        }),
        (t.prototype.An = function () {
          return this.Qt.zt();
        }),
        (t.prototype.Cn = function () {
          return Math.ceil(2.5 * this.An());
        }),
        t
      );
    })();

  function vt(t) {
    return t.slice().sort(function (t, i) {
      return l(t.li()) - l(i.li());
    });
  }
  !(function (t) {
    (t[(t.Normal = 0)] = "Normal"),
      (t[(t.Logarithmic = 1)] = "Logarithmic"),
      (t[(t.Percentage = 2)] = "Percentage"),
      (t[(t.IndexedTo100 = 3)] = "IndexedTo100");
  })(lt || (lt = {}));
  var _t,
    dt = new X(),
    wt = new $(100, 1),
    Mt = (function () {
      function t(t, i, n, h) {
        (this.Vn = 0),
          (this.zn = null),
          (this.Pn = null),
          (this.In = null),
          (this.Wn = {
            jn: !1,
            Rn: null,
          }),
          (this.Un = 0),
          (this.qn = 0),
          (this.Hn = new Z()),
          (this.Yn = new Z()),
          (this.Kn = []),
          (this.$n = null),
          (this.Xn = null),
          (this.Zn = null),
          (this.Jn = null),
          (this.Gn = wt),
          (this.Qn = t),
          (this.Si = i),
          (this.th = n),
          (this.ih = h),
          (this.nh = new ct(this, 100, this.hh.bind(this), this.sh.bind(this)));
      }
      return (
        (t.prototype.rh = function () {
          return this.Qn;
        }),
        (t.prototype.I = function () {
          return this.Si;
        }),
        (t.prototype.eh = function (t) {
          if (
            (c(this.Si, t),
            this.uh(),
            void 0 !== t.mode &&
              this.ah({
                oh: t.mode,
              }),
            void 0 !== t.scaleMargins)
          ) {
            var i = o(t.scaleMargins.top),
              n = o(t.scaleMargins.bottom);
            if (i < 0 || i > 1)
              throw new Error(
                "Invalid top margin - expect value between 0 and 1, given=" + i
              );
            if (n < 0 || n > 1 || i + n > 1)
              throw new Error(
                "Invalid bottom margin - expect value between 0 and 1, given=" +
                  n
              );
            if (i + n > 1)
              throw new Error(
                "Invalid margins - sum of margins must be less than 1, given=" +
                  (i + n)
              );
            this.lh(), (this.Xn = null);
          }
        }),
        (t.prototype.fh = function () {
          return this.Si.autoScale;
        }),
        (t.prototype.Fn = function () {
          return 1 === this.Si.mode;
        }),
        (t.prototype._h = function () {
          return 2 === this.Si.mode;
        }),
        (t.prototype.dh = function () {
          return 3 === this.Si.mode;
        }),
        (t.prototype.oh = function () {
          return {
            wh: this.Si.autoScale,
            Mh: this.Si.invertScale,
            oh: this.Si.mode,
          };
        }),
        (t.prototype.ah = function (t) {
          var i = this.oh(),
            n = null;
          void 0 !== t.wh && (this.Si.autoScale = t.wh),
            void 0 !== t.oh &&
              ((this.Si.mode = t.oh),
              (2 !== t.oh && 3 !== t.oh) || (this.Si.autoScale = !0),
              (this.Wn.jn = !1)),
            1 === i.oh &&
              t.oh !== i.oh &&
              (!(function (t) {
                if (null === t) return !1;
                var i = at(t.vn()),
                  n = at(t._n());
                return isFinite(i) && isFinite(n);
              })(this.Pn)
                ? (this.Si.autoScale = !0)
                : null !==
                    (n = (function (t) {
                      if (null === t) return null;
                      var i = at(t.vn()),
                        n = at(t._n());
                      return new J(i, n);
                    })(this.Pn)) && this.bh(n)),
            1 === t.oh &&
              t.oh !== i.oh &&
              null !== (n = ot(this.Pn)) &&
              this.bh(n);
          var h = i.oh !== this.Si.mode;
          h && (2 === i.oh || this._h()) && this.uh(),
            h && (3 === i.oh || this.dh()) && this.uh(),
            void 0 !== t.Mh &&
              i.Mh !== t.Mh &&
              ((this.Si.invertScale = t.Mh), this.mh()),
            this.Yn.en(i, this.oh());
        }),
        (t.prototype.gh = function () {
          return this.Yn;
        }),
        (t.prototype.zt = function () {
          return this.th.fontSize;
        }),
        (t.prototype.Mt = function () {
          return this.Vn;
        }),
        (t.prototype.ph = function (t) {
          this.Vn !== t && ((this.Vn = t), this.lh(), (this.Xn = null));
        }),
        (t.prototype.yh = function () {
          if (this.zn) return this.zn;
          var t = this.Mt() - this.kh() - this.xh();
          return (this.zn = t), t;
        }),
        (t.prototype.Nh = function () {
          return this.Sh(), this.Pn;
        }),
        (t.prototype.bh = function (t, i) {
          var n = this.Pn;
          (i || (null === n && null !== t) || (null !== n && !n.fn(t))) &&
            ((this.Xn = null), (this.Pn = t));
        }),
        (t.prototype.ii = function () {
          return this.Sh(), 0 === this.Vn || !this.Pn || this.Pn.ii();
        }),
        (t.prototype.Dh = function (t) {
          return this.Mh() ? t : this.Mt() - 1 - t;
        }),
        (t.prototype.X = function (t, i) {
          return (
            this._h() ? (t = ht(t, i)) : this.dh() && (t = rt(t, i)),
            this.sh(t, i)
          );
        }),
        (t.prototype.Ch = function (t, i, n) {
          this.Sh();
          for (
            var h = this.xh(),
              s = l(this.Nh()),
              r = s.vn(),
              e = s._n(),
              u = this.yh() - 1,
              a = this.Mh(),
              o = u / (e - r),
              f = void 0 === n ? 0 : n.from,
              c = void 0 === n ? t.length : n.to,
              v = this.Th(),
              _ = f;
            _ < c;
            _++
          ) {
            var d = t[_],
              w = d.P;
            if (!isNaN(w)) {
              var M = w;
              null !== v && (M = v(d.P, i));
              var b = h + o * (M - r),
                m = a ? b : this.Vn - 1 - b;
              d.p = m;
            }
          }
        }),
        (t.prototype.Ah = function (t, i, n) {
          this.Sh();
          for (
            var h = this.xh(),
              s = l(this.Nh()),
              r = s.vn(),
              e = s._n(),
              u = this.yh() - 1,
              a = this.Mh(),
              o = u / (e - r),
              f = void 0 === n ? 0 : n.from,
              c = void 0 === n ? t.length : n.to,
              v = this.Th(),
              _ = f;
            _ < c;
            _++
          ) {
            var d = t[_],
              w = d.open,
              M = d.high,
              b = d.low,
              m = d.close;
            null !== v &&
              ((w = v(d.open, i)),
              (M = v(d.high, i)),
              (b = v(d.low, i)),
              (m = v(d.close, i)));
            var g = h + o * (w - r),
              p = a ? g : this.Vn - 1 - g;
            (d.Eh = p),
              (g = h + o * (M - r)),
              (p = a ? g : this.Vn - 1 - g),
              (d.Lh = p),
              (g = h + o * (b - r)),
              (p = a ? g : this.Vn - 1 - g),
              (d.Bh = p),
              (g = h + o * (m - r)),
              (p = a ? g : this.Vn - 1 - g),
              (d.Fh = p);
          }
        }),
        (t.prototype.Ai = function (t, i) {
          var n = this.hh(t, i);
          return this.Oh(n, i);
        }),
        (t.prototype.Oh = function (t, i) {
          var n = t;
          return (
            this._h()
              ? (n = (function (t, i) {
                  return i < 0 && (t = -t), (t / 100) * i + i;
                })(n, i))
              : this.dh() &&
                (n = (function (t, i) {
                  return (t -= 100), i < 0 && (t = -t), (t / 100) * i + i;
                })(n, i)),
            n
          );
        }),
        (t.prototype.Vh = function () {
          return this.Kn;
        }),
        (t.prototype.zh = function () {
          if (this.$n) return this.$n;
          for (var t = [], i = 0; i < this.Kn.length; i++) {
            var n = this.Kn[i];
            null === n.li() && n.fi(i + 1), t.push(n);
          }
          return (t = vt(t)), (this.$n = t), this.$n;
        }),
        (t.prototype.Ph = function (t) {
          -1 === this.Kn.indexOf(t) && (this.Kn.push(t), this.uh(), this.Ih());
        }),
        (t.prototype.Wh = function (t) {
          var i = this.Kn.indexOf(t);
          if (-1 === i) throw new Error("source is not attached to scale");
          this.Kn.splice(i, 1),
            this.ii() &&
              this.ah({
                wh: !0,
              }),
            this.uh(),
            this.Ih();
        }),
        (t.prototype.H = function () {
          for (var t = null, i = 0, n = this.Kn; i < n.length; i++) {
            var h = n[i].H();
            null !== h && (null === t || h.jh < t.jh) && (t = h);
          }
          return null === t ? null : t.J;
        }),
        (t.prototype.Mh = function () {
          return this.Si.invertScale;
        }),
        (t.prototype.On = function () {
          return (
            this.Xn || (this.nh.Tn(), (this.Xn = this.nh.On()), this.Hn.en()),
            this.Xn
          );
        }),
        (t.prototype.Rh = function () {
          return this.Hn;
        }),
        (t.prototype.Uh = function (t) {
          this._h() ||
            this.dh() ||
            (null === this.Zn &&
              null === this.In &&
              (this.ii() ||
                ((this.Zn = this.Vn - t), (this.In = l(this.Nh()).cn()))));
        }),
        (t.prototype.qh = function (t) {
          if (!this._h() && !this.dh() && null !== this.Zn) {
            this.ah({
              wh: !1,
            }),
              (t = this.Vn - t) < 0 && (t = 0);
            var i = (this.Zn + 0.2 * (this.Vn - 1)) / (t + 0.2 * (this.Vn - 1)),
              n = l(this.In).cn();
            (i = Math.max(i, 0.1)), n.Mn(i), this.bh(n);
          }
        }),
        (t.prototype.Hh = function () {
          this._h() || this.dh() || ((this.Zn = null), (this.In = null));
        }),
        (t.prototype.Yh = function (t) {
          this.fh() ||
            (null === this.Jn &&
              null === this.In &&
              (this.ii() || ((this.Jn = t), (this.In = l(this.Nh()).cn()))));
        }),
        (t.prototype.Kh = function (t) {
          if (!this.fh() && null !== this.Jn) {
            var i = l(this.Nh()).dn() / (this.yh() - 1),
              n = t - this.Jn;
            this.Mh() && (n *= -1);
            var h = n * i,
              s = l(this.In).cn();
            s.bn(h), this.bh(s, !0), (this.Xn = null);
          }
        }),
        (t.prototype.$h = function () {
          this.fh() ||
            (null !== this.Jn && ((this.Jn = null), (this.In = null)));
        }),
        (t.prototype.Xh = function () {
          return this.Gn || this.uh(), this.Gn;
        }),
        (t.prototype.ni = function (t, i) {
          switch (this.Si.mode) {
            case 2:
              return this.Xh().Xi(ht(t, i));
            case 3:
              return this.Xh().Xi(rt(t, i));
            default:
              return this.Zh(t);
          }
        }),
        (t.prototype.Bn = function (t) {
          switch (this.Si.mode) {
            case 2:
            case 3:
              return this.Xh().Xi(t);
            default:
              return this.Zh(t);
          }
        }),
        (t.prototype.Jh = function (t) {
          return this.Zh(t, l(this.Gh()).Xh());
        }),
        (t.prototype.Qh = function (t, i) {
          return (t = ht(t, i)), dt.Xi(t);
        }),
        (t.prototype.ts = function () {
          return this.Kn;
        }),
        (t.prototype.ns = function (t) {
          this.Wn = {
            Rn: t,
            jn: !1,
          };
        }),
        (t.prototype.Ri = function () {
          this.Kn.forEach(function (t) {
            return t.Ri();
          });
        }),
        (t.prototype.uh = function () {
          this.Xn = null;
          var t = this.Gh(),
            i = 100;
          null !== t && (i = Math.round(1 / t.hs())),
            (this.Gn = wt),
            this._h()
              ? ((this.Gn = dt), (i = 100))
              : this.dh()
              ? ((this.Gn = new $(100, 1)), (i = 100))
              : null !== t && (this.Gn = t.Xh()),
            (this.nh = new ct(this, i, this.hh.bind(this), this.sh.bind(this))),
            this.nh.Tn();
        }),
        (t.prototype.Ih = function () {
          this.$n = null;
        }),
        (t.prototype.Gh = function () {
          return this.Kn[0] || null;
        }),
        (t.prototype.kh = function () {
          return this.Mh()
            ? this.Si.scaleMargins.bottom * this.Mt() + this.qn
            : this.Si.scaleMargins.top * this.Mt() + this.Un;
        }),
        (t.prototype.xh = function () {
          return this.Mh()
            ? this.Si.scaleMargins.top * this.Mt() + this.Un
            : this.Si.scaleMargins.bottom * this.Mt() + this.qn;
        }),
        (t.prototype.Sh = function () {
          this.Wn.jn || ((this.Wn.jn = !0), this.ss());
        }),
        (t.prototype.lh = function () {
          this.zn = null;
        }),
        (t.prototype.sh = function (t, i) {
          if ((this.Sh(), this.ii())) return 0;
          t = this.Fn() && t ? ut(t) : t;
          var n = l(this.Nh()),
            h = this.xh() + ((this.yh() - 1) * (t - n.vn())) / n.dn();
          return this.Dh(h);
        }),
        (t.prototype.hh = function (t, i) {
          if ((this.Sh(), this.ii())) return 0;
          var n = this.Dh(t),
            h = l(this.Nh()),
            s = h.vn() + h.dn() * ((n - this.xh()) / (this.yh() - 1));
          return this.Fn() ? at(s) : s;
        }),
        (t.prototype.mh = function () {
          (this.Xn = null), this.nh.Tn();
        }),
        (t.prototype.ss = function () {
          var t = this.Wn.Rn;
          if (null !== t) {
            for (
              var i = null, n = 0, h = 0, s = 0, r = this.ts();
              s < r.length;
              s++
            ) {
              var e = r[s],
                u = e.H();
              if (null !== u) {
                var a = e.rs(t.es(), t.us()),
                  o = a && a.Nh();
                if (null !== o) {
                  switch (this.Si.mode) {
                    case 1:
                      o = ot(o);
                      break;
                    case 2:
                      o = st(o, u.J);
                      break;
                    case 3:
                      o = et(o, u.J);
                  }
                  if (((i = null === i ? o : i.wn(l(o))), null !== a)) {
                    var f = a.os();
                    null !== f &&
                      ((n = Math.max(n, f.above)), (h = Math.max(n, f.below)));
                  }
                }
              }
            }
            if (
              ((n === this.Un && h === this.qn) ||
                ((this.Un = n), (this.qn = h), (this.Xn = null), this.lh()),
              null !== i)
            ) {
              if (i.vn() === i._n()) {
                var c = this.Gh(),
                  v = 5 * (null === c || this._h() || this.dh() ? 1 : c.hs());
                i = new J(i.vn() - v, i._n() + v);
              }
              this.bh(i);
            } else null === this.Pn && this.bh(new J(-0.5, 0.5));
            this.Wn.jn = !0;
          }
        }),
        (t.prototype.Th = function () {
          return this._h() ? ht : this.dh() ? rt : this.Fn() ? ut : null;
        }),
        (t.prototype.Zh = function (t, i) {
          return void 0 === this.ih.priceFormatter
            ? (void 0 === i && (i = this.Xh()), i.Xi(t))
            : this.ih.priceFormatter(t);
        }),
        t
      );
    })();

  function bt(t) {
    void 0 !== t.borderColor &&
      ((t.borderUpColor = t.borderColor), (t.borderDownColor = t.borderColor)),
      void 0 !== t.wickColor &&
        ((t.wickUpColor = t.wickColor), (t.wickDownColor = t.wickColor));
  }
  !(function (t) {
    (t[(t.LastBar = 0)] = "LastBar"), (t[(t.LastVisible = 1)] = "LastVisible");
  })(_t || (_t = {}));
  var mt = function (t) {
    return t.getUTCFullYear();
  };

  function gt(t, i, n) {
    return i
      .replace(
        /yyyy/g,
        (function (t) {
          return K(mt(t), 4);
        })(t)
      )
      .replace(
        /yy/g,
        (function (t) {
          return K(mt(t) % 100, 2);
        })(t)
      )
      .replace(
        /MMMM/g,
        (function (t, i) {
          return new Date(
            t.getUTCFullYear(),
            t.getUTCMonth(),
            1
          ).toLocaleString(i, {
            month: "long",
          });
        })(t, n)
      )
      .replace(
        /MMM/g,
        (function (t, i) {
          return new Date(
            t.getUTCFullYear(),
            t.getUTCMonth(),
            1
          ).toLocaleString(i, {
            month: "short",
          });
        })(t, n)
      )
      .replace(
        /MM/g,
        (function (t) {
          return K(
            (function (t) {
              return t.getUTCMonth() + 1;
            })(t),
            2
          );
        })(t)
      )
      .replace(
        /dd/g,
        (function (t) {
          return K(
            (function (t) {
              return t.getUTCDate();
            })(t),
            2
          );
        })(t)
      );
  }
  var pt = (function () {
      function t(t, i) {
        void 0 === t && (t = "yyyy-MM-dd"),
          void 0 === i && (i = "default"),
          (this.ls = t),
          (this.fs = i);
      }
      return (
        (t.prototype.Xi = function (t) {
          return gt(t, this.ls, this.fs);
        }),
        t
      );
    })(),
    yt = (function () {
      function t(t) {
        this.cs = t || "%h:%m:%s";
      }
      return (
        (t.prototype.Xi = function (t) {
          return this.cs
            .replace("%h", K(t.getUTCHours(), 2))
            .replace("%m", K(t.getUTCMinutes(), 2))
            .replace("%s", K(t.getUTCSeconds(), 2));
        }),
        t
      );
    })(),
    kt = {
      vs: "yyyy-MM-dd",
      _s: "%h:%m:%s",
      ds: " ",
      ws: "default",
    },
    xt = (function () {
      function t(t) {
        void 0 === t && (t = {});
        var i = e(e({}, kt), t);
        (this.Ms = new pt(i.vs, i.ws)),
          (this.bs = new yt(i._s)),
          (this.gs = i.ds);
      }
      return (
        (t.prototype.Xi = function (t) {
          return "" + this.Ms.Xi(t) + this.gs + this.bs.Xi(t);
        }),
        t
      );
    })();
  var Nt = (function () {
      function t(t, i) {
        void 0 === i && (i = 50),
          (this.ps = 0),
          (this.ys = 1),
          (this.ks = 1),
          (this.xs = new Map()),
          (this.Ns = new Map()),
          (this.Ss = t),
          (this.Ds = i);
      }
      return (
        (t.prototype.Xi = function (t) {
          var i =
              void 0 === t.Cs
                ? new Date(1e3 * t.Ts).getTime()
                : new Date(
                    Date.UTC(t.Cs.year, t.Cs.month - 1, t.Cs.day)
                  ).getTime(),
            n = this.xs.get(i);
          if (void 0 !== n) return n.As;
          if (this.ps === this.Ds) {
            var h = this.Ns.get(this.ks);
            this.Ns.delete(this.ks), this.xs.delete(o(h)), this.ks++, this.ps--;
          }
          var s = this.Ss(t);
          return (
            this.xs.set(i, {
              As: s,
              Es: this.ys,
            }),
            this.Ns.set(this.ys, i),
            this.ps++,
            this.ys++,
            s
          );
        }),
        t
      );
    })(),
    St = (function () {
      function t(t, i) {
        a(t <= i, "right should be >= left"), (this.Ls = t), (this.Bs = i);
      }
      return (
        (t.prototype.es = function () {
          return this.Ls;
        }),
        (t.prototype.us = function () {
          return this.Bs;
        }),
        (t.prototype.Fs = function () {
          return this.Bs - this.Ls + 1;
        }),
        (t.prototype.Os = function (t) {
          return this.Ls <= t && t <= this.Bs;
        }),
        (t.prototype.fn = function (t) {
          return this.Ls === t.es() && this.Bs === t.us();
        }),
        t
      );
    })();

  function Dt(t, i) {
    return null === t || null === i ? t === i : t.fn(i);
  }
  var Ct,
    Tt = (function () {
      function t() {
        (this.Vs = new Map()), (this.xs = null);
      }
      return (
        (t.prototype.zs = function (t) {
          var i = this;
          (this.xs = null),
            this.Vs.clear(),
            t.forEach(function (t, n) {
              var h = i.Vs.get(t.Ps);
              void 0 === h && ((h = []), i.Vs.set(t.Ps, h)),
                h.push({
                  Is: n,
                  V: t.V,
                  Ws: t.Ps,
                });
            });
        }),
        (t.prototype.js = function (t, i) {
          var n = Math.ceil(i / t);
          return (
            (null !== this.xs && this.xs.Rs === n) ||
              (this.xs = {
                On: this.Us(n),
                Rs: n,
              }),
            this.xs.On
          );
        }),
        (t.prototype.Us = function (t) {
          for (
            var i = [],
              n = 0,
              h = Array.from(this.Vs.keys()).sort(function (t, i) {
                return i - t;
              });
            n < h.length;
            n++
          ) {
            var s = h[n];
            if (this.Vs.get(s)) {
              var r = i;
              i = [];
              for (
                var e = r.length,
                  u = 0,
                  a = o(this.Vs.get(s)),
                  l = a.length,
                  f = 1 / 0,
                  c = -1 / 0,
                  v = 0;
                v < l;
                v++
              ) {
                for (var _ = a[v], d = _.Is; u < e; ) {
                  var w = r[u],
                    M = w.Is;
                  if (!(M < d)) {
                    f = M;
                    break;
                  }
                  u++, i.push(w), (c = M), (f = 1 / 0);
                }
                f - d >= t && d - c >= t && (i.push(_), (c = d));
              }
              for (; u < e; u++) i.push(r[u]);
            }
          }
          return i;
        }),
        t
      );
    })(),
    At = (function () {
      function t(t) {
        this.qs = t;
      }
      return (
        (t.prototype.Hs = function () {
          return null === this.qs
            ? null
            : new St(Math.floor(this.qs.es()), Math.ceil(this.qs.us()));
        }),
        (t.prototype.Ys = function () {
          return this.qs;
        }),
        (t.Ks = function () {
          return new t(null);
        }),
        t
      );
    })();
  !(function (t) {
    (t[(t.Year = 0)] = "Year"),
      (t[(t.Month = 1)] = "Month"),
      (t[(t.DayOfMonth = 2)] = "DayOfMonth"),
      (t[(t.Time = 3)] = "Time"),
      (t[(t.TimeWithSeconds = 4)] = "TimeWithSeconds");
  })(Ct || (Ct = {}));
  var Et = (function () {
    function t(t, i, n) {
      (this.$s = 0),
        (this.Xs = null),
        (this.Zs = []),
        (this.Jn = null),
        (this.Zn = null),
        (this.Js = new Tt()),
        (this.Gs = new Map()),
        (this.Qs = At.Ks()),
        (this.tr = !0),
        (this.ir = new Z()),
        (this.nr = new Z()),
        (this.hr = new Z()),
        (this.sr = null),
        (this.rr = null),
        (this.er = []),
        (this.Si = i),
        (this.ih = n),
        (this.ur = i.rightOffset),
        (this.ar = i.barSpacing),
        (this.ri = t),
        this.lr();
    }
    return (
      (t.prototype.I = function () {
        return this.Si;
      }),
      (t.prototype.cr = function (t) {
        c(this.ih, t), this.vr(), this.lr();
      }),
      (t.prototype.eh = function (t, i) {
        c(this.Si, t),
          this.Si.fixLeftEdge && this._r(),
          void 0 !== t.barSpacing && this.ri.dr(t.barSpacing),
          void 0 !== t.rightOffset && this.ri.wr(t.rightOffset),
          this.vr(),
          this.lr(),
          this.hr.en();
      }),
      (t.prototype.ei = function (t) {
        var i;
        return (
          (null === (i = this.Zs[t]) || void 0 === i ? void 0 : i.V) || null
        );
      }),
      (t.prototype.Mr = function (t, i) {
        if (this.Zs.length < 1) return null;
        if (t.Ts > this.Zs[this.Zs.length - 1].V.Ts)
          return i ? this.Zs.length - 1 : null;
        for (var n = 0; n < this.Zs.length; ++n) {
          if (t.Ts === this.Zs[n].V.Ts) return n;
          if (t.Ts < this.Zs[n].V.Ts) return i ? n : null;
        }
        return null;
      }),
      (t.prototype.ii = function () {
        return 0 === this.$s || 0 === this.Zs.length;
      }),
      (t.prototype.br = function () {
        return this.mr(), this.Qs.Hs();
      }),
      (t.prototype.gr = function () {
        return this.mr(), this.Qs.Ys();
      }),
      (t.prototype.pr = function () {
        var t = this.br();
        if (null === t) return null;
        var i = {
          from: t.es(),
          to: t.us(),
        };
        return this.yr(i);
      }),
      (t.prototype.yr = function (t) {
        var i = Math.round(t.from),
          n = Math.round(t.to),
          h = l(this.kr()),
          s = l(this.Nr());
        return {
          from: l(this.ei(Math.max(h, i))),
          to: l(this.ei(Math.min(s, n))),
        };
      }),
      (t.prototype.Sr = function (t) {
        var i = this.ri.U();
        return {
          from: l(i.Mr(t.from, !0)),
          to: l(i.Mr(t.to, !0)),
        };
      }),
      (t.prototype.Dr = function () {
        return this.Js;
      }),
      (t.prototype.wt = function () {
        return this.$s;
      }),
      (t.prototype.Cr = function (t) {
        if (isFinite(t) && !(t <= 0) && this.$s !== t) {
          if (this.Si.lockVisibleTimeRangeOnResize && this.$s) {
            var i = (this.ar * t) / this.$s;
            this.Tr(i);
          }
          if (this.Si.fixLeftEdge) {
            var n = this.br();
            if (null !== n)
              if (n.es() <= 0) {
                var h = this.$s - t;
                this.ur -= Math.round(h / this.ar) + 1;
              }
          }
          (this.$s = t), (this.tr = !0), this.Ar(), this.Er();
        }
      }),
      (t.prototype.G = function (t) {
        if (this.ii() || !_(t)) return 0;
        var i = this.Lr() + this.ur - t;
        return this.$s - (i + 0.5) * this.ar;
      }),
      (t.prototype.Br = function (t, i) {
        for (
          var n = this.Lr(),
            h = void 0 === i ? 0 : i.from,
            s = void 0 === i ? t.length : i.to,
            r = h;
          r < s;
          r++
        ) {
          var e = t[r].V,
            u = n + this.ur - e,
            a = this.$s - (u + 0.5) * this.ar;
          t[r].g = a;
        }
      }),
      (t.prototype.Fr = function (t) {
        return Math.ceil(this.Or(t));
      }),
      (t.prototype.wr = function (t) {
        (this.tr = !0), (this.ur = t), this.Er(), this.ri.Vr(), this.ri.zr();
      }),
      (t.prototype.Pr = function () {
        return this.ar;
      }),
      (t.prototype.dr = function (t) {
        this.Tr(t), this.Er(), this.ri.Vr(), this.ri.zr();
      }),
      (t.prototype.Ir = function () {
        return this.ur;
      }),
      (t.prototype.On = function () {
        if (this.ii()) return null;
        if (null !== this.rr) return this.rr;
        for (
          var t = this.ar,
            i = 5 * (this.ri.I().layout.fontSize + 4),
            n = Math.round(i / t),
            h = l(this.br()),
            s = Math.max(h.es(), h.es() - n),
            r = Math.max(h.us(), h.us() - n),
            e = 0,
            u = 0,
            a = this.Js.js(t, i);
          u < a.length;
          u++
        ) {
          var o = a[u];
          if (s <= o.Is && o.Is <= r) {
            var f = this.ei(o.Is);
            if (null !== f) {
              if (e < this.er.length) {
                var c = this.er[e];
                (c.En = this.G(o.Is)), (c.Ln = this.Wr(f, o.Ws)), (c.Ws = o.Ws);
              } else
                this.er.push({
                  En: this.G(o.Is),
                  Ln: this.Wr(f, o.Ws),
                  Ws: o.Ws,
                });
              e++;
            }
          }
        }
        return (this.er.length = e), (this.rr = this.er), this.er;
      }),
      (t.prototype.jr = function () {
        (this.tr = !0),
          this.dr(this.Si.barSpacing),
          this.wr(this.Si.rightOffset);
      }),
      (t.prototype.Rr = function (t) {
        (this.tr = !0), (this.Xs = t), this.Er(), this._r();
      }),
      (t.prototype.Ur = function (t, i) {
        var n = this.Or(t),
          h = this.Pr(),
          s = h + i * (h / 10);
        this.dr(s),
          this.Si.rightBarStaysOnScroll ||
            this.wr(this.Ir() + (n - this.Or(t)));
      }),
      (t.prototype.Uh = function (t) {
        this.Jn && this.$h(),
          null === this.Zn &&
            null === this.sr &&
            (this.ii() || ((this.Zn = t), this.qr()));
      }),
      (t.prototype.qh = function (t) {
        if (null !== this.sr) {
          var i = G(this.$s - t, 0, this.$s),
            n = G(this.$s - l(this.Zn), 0, this.$s);
          0 !== i && 0 !== n && this.dr((this.sr.Pr * i) / n);
        }
      }),
      (t.prototype.Hh = function () {
        null !== this.Zn && ((this.Zn = null), this.Hr());
      }),
      (t.prototype.Yh = function (t) {
        null === this.Jn &&
          null === this.sr &&
          (this.ii() || ((this.Jn = t), this.qr()));
      }),
      (t.prototype.Kh = function (t) {
        if (null !== this.Jn) {
          var i = (this.Jn - t) / this.Pr();
          (this.ur = l(this.sr).Ir + i), (this.tr = !0), this.Er();
        }
      }),
      (t.prototype.$h = function () {
        null !== this.Jn && ((this.Jn = null), this.Hr());
      }),
      (t.prototype.Yr = function () {
        this.Kr(this.Si.rightOffset);
      }),
      (t.prototype.Kr = function (t, i) {
        var n = this;
        if ((void 0 === i && (i = 400), !isFinite(t)))
          throw new RangeError("offset is required and must be finite number");
        if (!isFinite(i) || i <= 0)
          throw new RangeError(
            "animationDuration (optional) must be finite positive number"
          );
        var h = this.ur,
          s = new Date().getTime(),
          r = function () {
            var e = (new Date().getTime() - s) / i,
              u = e >= 1,
              a = u ? t : h + (t - h) * e;
            n.wr(a), u || setTimeout(r, 20);
          };
        r();
      }),
      (t.prototype.F = function (t) {
        (this.tr = !0), (this.Zs = t), this.Js.zs(t), this.Er();
      }),
      (t.prototype.$r = function () {
        return this.ir;
      }),
      (t.prototype.Xr = function () {
        return this.nr;
      }),
      (t.prototype.Zr = function () {
        return this.hr;
      }),
      (t.prototype.Lr = function () {
        return this.Xs || 0;
      }),
      (t.prototype.Jr = function (t) {
        var i = t.Fs();
        this.Tr(this.$s / i),
          (this.ur = t.us() - this.Lr()),
          this.Er(),
          (this.tr = !0),
          this.ri.Vr(),
          this.ri.zr();
      }),
      (t.prototype.Gr = function () {
        var t = this.kr(),
          i = this.Nr();
        null !== t && null !== i && this.Jr(new St(t, i + this.Si.rightOffset));
      }),
      (t.prototype.Qr = function (t) {
        var i = new St(t.from, t.to);
        this.Jr(i);
      }),
      (t.prototype.ui = function (t) {
        return void 0 !== this.ih.timeFormatter
          ? this.ih.timeFormatter(t.Cs || t.Ts)
          : this.te.Xi(new Date(1e3 * t.Ts));
      }),
      (t.prototype.kr = function () {
        return 0 === this.Zs.length ? null : 0;
      }),
      (t.prototype.Nr = function () {
        return 0 === this.Zs.length ? null : this.Zs.length - 1;
      }),
      (t.prototype.ie = function (t) {
        return (this.$s + 1 - t) / this.ar;
      }),
      (t.prototype.Or = function (t) {
        var i = this.ie(t),
          n = this.Lr() + this.ur - i;
        return Math.round(1e6 * n) / 1e6;
      }),
      (t.prototype.Tr = function (t) {
        var i = this.ar;
        (this.ar = t), this.Ar(), i !== this.ar && ((this.tr = !0), this.ne());
      }),
      (t.prototype.mr = function () {
        if (this.tr)
          if (((this.tr = !1), this.ii())) this.he(At.Ks());
          else {
            var t = this.Lr(),
              i = this.$s / this.ar,
              n = this.ur + t,
              h = new St(n - i + 1, n);
            this.he(new At(h));
          }
      }),
      (t.prototype.Ar = function () {
        if (
          (this.ar < 0.5 && ((this.ar = 0.5), (this.tr = !0)), 0 !== this.$s)
        ) {
          var t = 0.5 * this.$s;
          this.ar > t && ((this.ar = t), (this.tr = !0));
        }
      }),
      (t.prototype.Er = function () {
        var t = this.se();
        this.ur > t && ((this.ur = t), (this.tr = !0));
        var i = this.ee();
        null !== i && this.ur < i && ((this.ur = i), (this.tr = !0));
      }),
      (t.prototype.ee = function () {
        var t = this.kr(),
          i = this.Xs;
        return null === t || null === i
          ? null
          : t -
              i -
              1 +
              (this.Si.fixLeftEdge
                ? this.$s / this.ar
                : Math.min(2, this.Zs.length));
      }),
      (t.prototype.se = function () {
        return this.$s / this.ar - Math.min(2, this.Zs.length);
      }),
      (t.prototype.qr = function () {
        this.sr = {
          Pr: this.Pr(),
          Ir: this.Ir(),
        };
      }),
      (t.prototype.Hr = function () {
        this.sr = null;
      }),
      (t.prototype.Wr = function (t, i) {
        var n = this,
          h = this.Gs.get(i);
        return (
          void 0 === h &&
            ((h = new Nt(function (t) {
              return n.ue(t, i);
            })),
            this.Gs.set(i, h)),
          h.Xi(t)
        );
      }),
      (t.prototype.ue = function (t, i) {
        var n,
          h,
          s = this.Si.timeVisible;
        return (
          (h =
            i < 20 && s
              ? this.Si.secondsVisible
                ? 4
                : 3
              : i < 40 && s
              ? 3
              : i < 50 || i < 60
              ? 2
              : i < 70
              ? 1
              : 0),
          void 0 !== this.Si.tickMarkFormatter
            ? this.Si.tickMarkFormatter(
                null !== (n = t.Cs) && void 0 !== n ? n : t.Ts,
                h,
                this.ih.locale
              )
            : (function (t, i, n) {
                var h = {};
                switch (i) {
                  case 0:
                    h.year = "numeric";
                    break;
                  case 1:
                    h.month = "short";
                    break;
                  case 2:
                    h.day = "numeric";
                    break;
                  case 3:
                    (h.hour12 = !1),
                      (h.hour = "2-digit"),
                      (h.minute = "2-digit");
                    break;
                  case 4:
                    (h.hour12 = !1),
                      (h.hour = "2-digit"),
                      (h.minute = "2-digit"),
                      (h.second = "2-digit");
                }
                var s =
                  void 0 === t.Cs
                    ? new Date(1e3 * t.Ts)
                    : new Date(Date.UTC(t.Cs.year, t.Cs.month - 1, t.Cs.day));
                return new Date(
                  s.getUTCFullYear(),
                  s.getUTCMonth(),
                  s.getUTCDate(),
                  s.getUTCHours(),
                  s.getUTCMinutes(),
                  s.getUTCSeconds(),
                  s.getUTCMilliseconds()
                ).toLocaleString(n, h);
              })(t, h, this.ih.locale)
        );
      }),
      (t.prototype.he = function (t) {
        var i = this.Qs;
        (this.Qs = t),
          Dt(i.Hs(), this.Qs.Hs()) || this.ir.en(),
          Dt(i.Ys(), this.Qs.Ys()) || this.nr.en(),
          this.ne();
      }),
      (t.prototype.ne = function () {
        this.rr = null;
      }),
      (t.prototype.vr = function () {
        this.ne(), this.Gs.clear();
      }),
      (t.prototype.lr = function () {
        var t = this.ih.dateFormat;
        this.Si.timeVisible
          ? (this.te = new xt({
              vs: t,
              _s: this.Si.secondsVisible ? "%h:%m:%s" : "%h:%m",
              ds: "   ",
              ws: this.ih.locale,
            }))
          : (this.te = new pt(t, this.ih.locale));
      }),
      (t.prototype._r = function () {
        if (this.Si.fixLeftEdge) {
          var t = this.kr();
          if (null !== t) {
            var i = l(this.br()).es() - t;
            if (i < 0) {
              var n = this.ur - i - 1;
              this.wr(n);
            }
          }
        }
      }),
      t
    );
  })();

  function Lt(t) {
    return !v(t) && !d(t);
  }

  function Bt(t) {
    return v(t);
  }
  var Ft = "'Trebuchet MS', Roboto, Ubuntu, sans-serif";

  function Ot(t, i, n) {
    return (
      void 0 !== n ? (n += " ") : (n = ""),
      void 0 === i && (i = Ft),
      "" + n + t + "px " + i
    );
  }
  var Vt = (function () {
    function t(t) {
      (this.ae = {
        Tt: 1,
        Ct: 4,
        zt: NaN,
        Nt: "",
        oe: "",
        ut: "",
        Et: 0,
        Lt: 0,
        Bt: 0,
        At: 0,
        Vt: 0,
      }),
        (this.L = t);
    }
    return (
      (t.prototype.I = function () {
        var t = this.ae,
          i = this.le(),
          n = this.fe();
        return (
          (t.zt === i && t.oe === n) ||
            ((t.zt = i),
            (t.oe = n),
            (t.Nt = Ot(i, n)),
            (t.At = Math.floor(i / 3.5)),
            (t.Et = t.At),
            (t.Lt = Math.max(Math.ceil(i / 2 - t.Ct / 2), 0)),
            (t.Bt = Math.ceil(i / 2 + t.Ct / 2)),
            (t.Vt = Math.round(i / 10))),
          (t.ut = this.ce()),
          this.ae
        );
      }),
      (t.prototype.ce = function () {
        return this.L.I().layout.textColor;
      }),
      (t.prototype.le = function () {
        return this.L.I().layout.fontSize;
      }),
      (t.prototype.fe = function () {
        return this.L.I().layout.fontFamily;
      }),
      t
    );
  })();

  function zt(t) {
    return "left" === t || "right" === t;
  }
  var Pt = (function () {
      function t() {
        this.tt = null;
      }
      return (
        (t.prototype._ = function (t) {
          this.tt = t;
        }),
        (t.prototype.h = function (t, i, h, s) {
          var r = this;
          if (null !== this.tt) {
            var e = Math.max(1, Math.floor(i));
            t.lineWidth = e;
            var u = Math.ceil(this.tt.rt * i),
              a = Math.ceil(this.tt.st * i);
            !(function (t, i) {
              t.save(),
                t.lineWidth % 2 && t.translate(0.5, 0.5),
                i(),
                t.restore();
            })(t, function () {
              var h = l(r.tt);
              if (h.ve) {
                (t.strokeStyle = h._e), n(t, h.de), t.beginPath();
                for (var s = 0, o = h.we; s < o.length; s++) {
                  var f = o[s],
                    c = Math.round(f.En * i);
                  t.moveTo(c, -e), t.lineTo(c, u + e);
                }
                t.stroke();
              }
              if (h.Me) {
                (t.strokeStyle = h.be), n(t, h.me), t.beginPath();
                for (var v = 0, _ = h.ge; v < _.length; v++) {
                  var d = _[v],
                    w = Math.round(d.En * i);
                  t.moveTo(-e, w), t.lineTo(a + e, w);
                }
                t.stroke();
              }
            });
          }
        }),
        t
      );
    })(),
    It = (function () {
      function t(t) {
        (this.lt = new Pt()), (this.A = !0), (this.wi = t);
      }
      return (
        (t.prototype.F = function () {
          this.A = !0;
        }),
        (t.prototype.W = function (t, i) {
          if (this.A) {
            var n = this.wi.vt().I().grid,
              h = {
                rt: t,
                st: i,
                Me: n.horzLines.visible,
                ve: n.vertLines.visible,
                be: n.horzLines.color,
                _e: n.vertLines.color,
                me: n.horzLines.style,
                de: n.vertLines.style,
                ge: this.wi.Ti().On(),
                we: this.wi.vt().U().On() || [],
              };
            this.lt._(h), (this.A = !1);
          }
          return this.lt;
        }),
        t
      );
    })(),
    Wt = (function () {
      function t() {
        (this.pe = new WeakMap()), (this.A = !0);
      }
      return (
        (t.prototype._i = function (t) {
          var i = this.pe.get(t);
          return (
            void 0 === i && ((i = [new It(t)]), this.pe.set(t, i)),
            this.A &&
              (i.forEach(function (t) {
                return t.F();
              }),
              (this.A = !1)),
            i
          );
        }),
        (t.prototype.ye = function () {
          this.A = !0;
        }),
        t
      );
    })();
  var jt = (function () {
      function t(t) {
        (this.ke = new Map()), (this.xe = !1), (this.Ne = []), (this.Se = t);
      }
      return (
        (t.prototype.De = function (t, i) {
          var n = (function (t, i) {
            return void 0 === t
              ? i
              : {
                  Ce: Math.max(t.Ce, i.Ce),
                  wh: t.wh || i.wh,
                };
          })(this.ke.get(t), i);
          this.ke.set(t, n);
        }),
        (t.prototype.Te = function () {
          return this.Se;
        }),
        (t.prototype.Ae = function (t) {
          var i = this.ke.get(t);
          return void 0 === i
            ? {
                Ce: this.Se,
              }
            : {
                Ce: Math.max(this.Se, i.Ce),
                wh: i.wh,
              };
        }),
        (t.prototype.Ee = function () {
          this.Ne = [
            {
              Le: 0,
            },
          ];
        }),
        (t.prototype.Be = function (t) {
          this.Ne = [
            {
              Le: 1,
              J: t,
            },
          ];
        }),
        (t.prototype.Fe = function () {
          this.Ne = [
            {
              Le: 4,
            },
          ];
        }),
        (t.prototype.dr = function (t) {
          this.Ne.push({
            Le: 2,
            J: t,
          });
        }),
        (t.prototype.wr = function (t) {
          this.Ne.push({
            Le: 3,
            J: t,
          });
        }),
        (t.prototype.Oe = function () {
          return this.Ne;
        }),
        (t.prototype.wn = function (t) {
          var i = this;
          (this.xe = this.xe || t.xe), (this.Ne = this.Ne.concat(t.Ne));
          for (var n = 0, h = t.Ne; n < h.length; n++) {
            var s = h[n];
            this.Ve(s);
          }
          (this.Se = Math.max(this.Se, t.Se)),
            t.ke.forEach(function (t, n) {
              i.De(n, t);
            });
        }),
        (t.prototype.Ve = function (t) {
          switch (t.Le) {
            case 0:
              this.Ee();
              break;
            case 1:
              this.Be(t.J);
              break;
            case 2:
              this.dr(t.J);
              break;
            case 3:
              this.wr(t.J);
              break;
            case 4:
              this.Fe();
          }
        }),
        t
      );
    })(),
    Rt = (function () {
      function t(t) {
        this.ze = t;
      }
      return (
        (t.prototype.Xi = function (t) {
          var i = "";
          return (
            t < 0 && ((i = "-"), (t = -t)),
            t < 995
              ? i + this.Pe(t)
              : t < 999995
              ? i + this.Pe(t / 1e3) + "K"
              : t < 999999995
              ? ((t = 1e3 * Math.round(t / 1e3)), i + this.Pe(t / 1e6) + "M")
              : ((t = 1e6 * Math.round(t / 1e6)), i + this.Pe(t / 1e9) + "B")
          );
        }),
        (t.prototype.Pe = function (t) {
          var i = Math.pow(10, this.ze);
          return (
            (t = Math.round(t * i) / i) >= 1e-15 && t < 1
              ? t.toFixed(this.ze).replace(/\.?0+$/, "")
              : String(t)
          ).replace(/(\.[1-9]*)0+$/, function (t, i) {
            return i;
          });
        }),
        t
      );
    })();

  function Ut(t, i, n, h) {
    if (0 !== i.length) {
      var s = i[h.from].g,
        r = i[h.from].p;
      t.moveTo(s, r);
      for (var e = h.from + 1; e < h.to; ++e) {
        var u = i[e];
        if (1 === n) {
          var a = i[e - 1].p,
            o = u.g;
          t.lineTo(o, a);
        }
        t.lineTo(u.g, u.p);
      }
    }
  }
  var qt = (function (t) {
      function i() {
        var i = (null !== t && t.apply(this, arguments)) || this;
        return (i.v = null), i;
      }
      return (
        r(i, t),
        (i.prototype._ = function (t) {
          this.v = t;
        }),
        (i.prototype.u = function (t) {
          if (null !== this.v && 0 !== this.v.m.length && null !== this.v.M) {
            (t.lineCap = "butt"),
              (t.strokeStyle = this.v.S),
              (t.lineWidth = this.v.et),
              n(t, this.v.at),
              (t.lineWidth = 1),
              t.beginPath(),
              t.moveTo(this.v.m[this.v.M.from].g, this.v.Ie),
              t.lineTo(this.v.m[this.v.M.from].g, this.v.m[this.v.M.from].p),
              Ut(t, this.v.m, this.v.We, this.v.M),
              this.v.M.to > this.v.M.from &&
                (t.lineTo(this.v.m[this.v.M.to - 1].g, this.v.Ie),
                t.lineTo(this.v.m[this.v.M.from].g, this.v.Ie)),
              t.closePath();
            var i = t.createLinearGradient(0, 0, 0, this.v.Ie);
            i.addColorStop(0, this.v.je),
              i.addColorStop(1, this.v.Re),
              (t.fillStyle = i),
              t.fill();
          }
        }),
        i
      );
    })(p),
    Ht = (function (t) {
      function i() {
        var i = (null !== t && t.apply(this, arguments)) || this;
        return (i.v = null), i;
      }
      return (
        r(i, t),
        (i.prototype._ = function (t) {
          this.v = t;
        }),
        (i.prototype.u = function (t) {
          null !== this.v &&
            0 !== this.v.m.length &&
            null !== this.v.M &&
            ((t.lineCap = "butt"),
            (t.lineWidth = this.v.et),
            n(t, this.v.at),
            (t.strokeStyle = this.v.S),
            (t.lineJoin = "miter"),
            t.beginPath(),
            Ut(t, this.v.m, this.v.We, this.v.M),
            t.stroke());
        }),
        i
      );
    })(p);

  function Yt(t, i, n, h, s) {
    void 0 === h && (h = 0), void 0 === s && (s = t.length);
    for (var r = s - h; 0 < r; ) {
      var e = r >> 1,
        u = h + e;
      n(t[u], i) ? ((h = u + 1), (r -= e + 1)) : (r = e);
    }
    return h;
  }

  function Kt(t, i, n, h, s) {
    void 0 === h && (h = 0), void 0 === s && (s = t.length);
    for (var r = s - h; 0 < r; ) {
      var e = r >> 1,
        u = h + e;
      n(i, t[u]) ? (r = e) : ((h = u + 1), (r -= e + 1));
    }
    return h;
  }

  function $t(t, i) {
    return t.V < i;
  }

  function Xt(t, i) {
    return t < i.V;
  }

  function Zt(t, i, n) {
    var h = i.es(),
      s = i.us(),
      r = Yt(t, h, $t),
      e = Kt(t, s, Xt);
    if (!n)
      return {
        from: r,
        to: e,
      };
    var u = r,
      a = e;
    return (
      r > 0 && r < t.length && t[r].V >= h && (u = r - 1),
      e > 0 && e < t.length && t[e - 1].V <= s && (a = e + 1),
      {
        from: u,
        to: a,
      }
    );
  }
  var Jt = (function () {
      function t(t, i, n) {
        (this.Ue = !0),
          (this.qe = !0),
          (this.He = []),
          (this.Ye = null),
          (this.Ke = t),
          (this.$e = i),
          (this.Xe = n);
      }
      return (
        (t.prototype.F = function (t) {
          (this.Ue = !0), "data" === t && (this.qe = !0);
        }),
        (t.prototype.Ze = function () {
          this.qe && (this.Je(), (this.qe = !1)),
            this.Ue && (this.Ge(), (this.Ue = !1));
        }),
        (t.prototype.Qe = function () {
          this.Ye = null;
        }),
        (t.prototype.Ge = function () {
          var t = this.Ke.Z(),
            i = this.$e.U();
          if ((this.Qe(), !i.ii() && !t.ii())) {
            var n = i.br();
            if (null !== n && 0 !== this.Ke.Yi().tu()) {
              var h = this.Ke.H();
              null !== h &&
                ((this.Ye = Zt(this.He, n, this.Xe)), this.iu(t, i, h.J));
            }
          }
        }),
        t
      );
    })(),
    Gt = (function (t) {
      function i(i, n) {
        return t.call(this, i, n, !0) || this;
      }
      return (
        r(i, t),
        (i.prototype.iu = function (t, i, n) {
          i.Br(this.He, m(this.Ye)), t.Ch(this.He, n, m(this.Ye));
        }),
        (i.prototype.nu = function (t, i) {
          return {
            V: t,
            P: i,
            g: NaN,
            p: NaN,
          };
        }),
        (i.prototype.Je = function () {
          var t = this,
            i = this.Ke.$();
          this.He = this.Ke.Yi()
            .hu()
            .map(function (n) {
              var h = n.J[3];
              return t.su(n.Is, h, i);
            });
        }),
        i
      );
    })(Jt),
    Qt = (function (t) {
      function i(i, n) {
        var h = t.call(this, i, n) || this;
        return (
          (h.lt = new g()),
          (h.ru = new qt()),
          (h.eu = new Ht()),
          h.lt.i([h.ru, h.eu]),
          h
        );
      }
      return (
        r(i, t),
        (i.prototype.W = function (t, i) {
          var n = this.Ke.I();
          if (!n.visible) return null;
          this.Ze();
          var h = {
            We: n.lineType,
            m: this.He,
            S: n.lineColor,
            at: n.lineStyle,
            et: n.lineWidth,
            je: n.topColor,
            Re: n.bottomColor,
            Ie: t,
            M: this.Ye,
          };
          return this.ru._(h), this.eu._(h), this.lt;
        }),
        (i.prototype.su = function (t, i) {
          return this.nu(t, i);
        }),
        i
      );
    })(Gt);
  var ti = (function () {
      function t() {
        (this.tt = null), (this.uu = 0), (this.au = 0);
      }
      return (
        (t.prototype._ = function (t) {
          this.tt = t;
        }),
        (t.prototype.h = function (t, i, n, h) {
          if (
            null !== this.tt &&
            0 !== this.tt.Yi.length &&
            null !== this.tt.M
          ) {
            if (((this.uu = this.ou(i)), this.uu >= 2))
              Math.max(1, Math.floor(i)) % 2 != this.uu % 2 && this.uu--;
            this.au = this.tt.lu ? Math.min(this.uu, Math.floor(i)) : this.uu;
            for (
              var s = null,
                r = this.au <= this.uu && this.tt.Pr >= Math.floor(1.5 * i),
                e = this.tt.M.from;
              e < this.tt.M.to;
              ++e
            ) {
              var u = this.tt.Yi[e];
              s !== u.ut && ((t.fillStyle = u.ut), (s = u.ut));
              var a = Math.floor(0.5 * this.au),
                o = Math.round(u.g * i),
                l = o - a,
                f = this.au,
                c = l + f - 1,
                v = Math.min(u.Lh, u.Bh),
                _ = Math.max(u.high, u.Bh),
                d = Math.round(v * i) - a,
                w = Math.round(_ * i) + a,
                M = Math.max(w - d, this.au);
              t.fillRect(l, d, f, M);
              var b = Math.ceil(1.5 * this.uu);
              if (r) {
                if (this.tt.fu) {
                  var m = o - b,
                    g = Math.max(d, Math.round(u.Eh * i) - a),
                    p = g + f - 1;
                  p > d + M - 1 && (g = (p = d + M - 1) - f + 1),
                    t.fillRect(m, g, l - m, p - g + 1);
                }
                var y = o + b,
                  k = Math.max(d, Math.round(u.Fh * i) - a),
                  x = k + f - 1;
                x > d + M - 1 && (k = (x = d + M - 1) - f + 1),
                  t.fillRect(c + 1, k, y - c, x - k + 1);
              }
            }
          }
        }),
        (t.prototype.ou = function (t) {
          var i = Math.floor(t);
          return Math.max(
            i,
            Math.floor(
              (function (t, i) {
                return Math.floor(0.3 * t * i);
              })(l(this.tt).Pr, t)
            )
          );
        }),
        t
      );
    })(),
    ii = (function (t) {
      function i(i, n) {
        return t.call(this, i, n, !1) || this;
      }
      return (
        r(i, t),
        (i.prototype.iu = function (t, i, n) {
          i.Br(this.He, m(this.Ye)), t.Ah(this.He, n, m(this.Ye));
        }),
        (i.prototype.cu = function (t, i, n) {
          return {
            V: t,
            open: i.J[0],
            high: i.J[1],
            low: i.J[2],
            close: i.J[3],
            g: NaN,
            Eh: NaN,
            Lh: NaN,
            Bh: NaN,
            Fh: NaN,
          };
        }),
        (i.prototype.Je = function () {
          var t = this,
            i = this.Ke.$();
          this.He = this.Ke.Yi()
            .hu()
            .map(function (n) {
              return t.su(n.Is, n, i);
            });
        }),
        i
      );
    })(Jt),
    ni = (function (t) {
      function i() {
        var i = (null !== t && t.apply(this, arguments)) || this;
        return (i.lt = new ti()), i;
      }
      return (
        r(i, t),
        (i.prototype.W = function (t, i) {
          var n = this.Ke.I();
          if (!n.visible) return null;
          this.Ze();
          var h = {
            Yi: this.He,
            Pr: this.$e.U().Pr(),
            fu: n.openVisible,
            lu: n.thinBars,
            M: this.Ye,
          };
          return this.lt._(h), this.lt;
        }),
        (i.prototype.su = function (t, i, n) {
          return e(e({}, this.cu(t, i, n)), {
            ut: n.K(t).Y,
          });
        }),
        i
      );
    })(ii),
    hi = (function () {
      function t() {
        (this.tt = null), (this.uu = 0);
      }
      return (
        (t.prototype._ = function (t) {
          this.tt = t;
        }),
        (t.prototype.h = function (t, i, n, h) {
          if (
            null !== this.tt &&
            0 !== this.tt.Yi.length &&
            null !== this.tt.M
          ) {
            if (
              ((this.uu = (function (t, i) {
                if (t >= 2.5 && t <= 4) return Math.floor(3 * i);
                var n =
                    1 - (0.2 * Math.atan(Math.max(4, t) - 4)) / (0.5 * Math.PI),
                  h = Math.floor(t * n * i),
                  s = Math.floor(t * i),
                  r = Math.min(h, s);
                return Math.max(Math.floor(i), r);
              })(this.tt.Pr, i)),
              this.uu >= 2)
            )
              Math.floor(i) % 2 != this.uu % 2 && this.uu--;
            var s = this.tt.Yi;
            this.tt.vu && this._u(t, s, this.tt.M, i),
              this.tt.du && this.wu(t, s, this.tt.M, this.tt.Pr, i);
            var r = this.Mu(i);
            (!this.tt.du || this.uu > 2 * r) && this.bu(t, s, this.tt.M, i);
          }
        }),
        (t.prototype._u = function (t, i, n, h) {
          if (null !== this.tt) {
            var s = "",
              r = Math.min(Math.floor(h), Math.floor(this.tt.Pr * h));
            r = Math.max(Math.floor(h), Math.min(r, this.uu));
            for (
              var e = Math.floor(0.5 * r), u = null, a = n.from;
              a < n.to;
              a++
            ) {
              var o = i[a];
              o.mu !== s && ((t.fillStyle = o.mu), (s = o.mu));
              var l = Math.round(Math.min(o.Eh, o.Fh) * h),
                f = Math.round(Math.max(o.Eh, o.Fh) * h),
                c = Math.round(o.Lh * h),
                v = Math.round(o.Bh * h),
                _ = Math.round(h * o.g) - e,
                d = _ + r - 1;
              null !== u && ((_ = Math.max(u + 1, _)), (_ = Math.min(_, d)));
              var w = d - _ + 1;
              t.fillRect(_, c, w, l - c),
                t.fillRect(_, f + 1, w, v - f),
                (u = d);
            }
          }
        }),
        (t.prototype.Mu = function (t) {
          var i = Math.floor(1 * t);
          this.uu <= 2 * i && (i = Math.floor(0.5 * (this.uu - 1)));
          var n = Math.max(Math.floor(t), i);
          return this.uu <= 2 * n
            ? Math.max(Math.floor(t), Math.floor(1 * t))
            : n;
        }),
        (t.prototype.wu = function (t, i, n, h, s) {
          if (null !== this.tt)
            for (
              var r = "", e = this.Mu(s), u = null, a = n.from;
              a < n.to;
              a++
            ) {
              var o = i[a];
              o.Wt !== r && ((t.fillStyle = o.Wt), (r = o.Wt));
              var l = Math.round(o.g * s) - Math.floor(0.5 * this.uu),
                f = l + this.uu - 1,
                c = Math.round(Math.min(o.Eh, o.Fh) * s),
                v = Math.round(Math.max(o.Eh, o.Fh) * s);
              if (
                (null !== u && ((l = Math.max(u + 1, l)), (l = Math.min(l, f))),
                this.tt.Pr * s > 2 * e)
              )
                F(t, l, c, f - l + 1, v - c + 1, e);
              else {
                var _ = f - l + 1;
                t.fillRect(l, c, _, v - c + 1);
              }
              u = f;
            }
        }),
        (t.prototype.bu = function (t, i, n, h) {
          if (null !== this.tt)
            for (var s = "", r = this.Mu(h), e = n.from; e < n.to; e++) {
              var u = i[e],
                a = Math.round(Math.min(u.Eh, u.Fh) * h),
                o = Math.round(Math.max(u.Eh, u.Fh) * h),
                l = Math.round(u.g * h) - Math.floor(0.5 * this.uu),
                f = l + this.uu - 1;
              if (u.ut !== s) {
                var c = u.ut;
                (t.fillStyle = c), (s = c);
              }
              this.tt.du && ((l += r), (a += r), (f -= r), (o -= r)),
                a > o || t.fillRect(l, a, f - l + 1, o - a + 1);
            }
        }),
        t
      );
    })(),
    si = (function (t) {
      function i() {
        var i = (null !== t && t.apply(this, arguments)) || this;
        return (i.lt = new hi()), i;
      }
      return (
        r(i, t),
        (i.prototype.W = function (t, i) {
          var n = this.Ke.I();
          if (!n.visible) return null;
          this.Ze();
          var h = {
            Yi: this.He,
            Pr: this.$e.U().Pr(),
            vu: n.wickVisible,
            du: n.borderVisible,
            M: this.Ye,
          };
          return this.lt._(h), this.lt;
        }),
        (i.prototype.su = function (t, i, n) {
          var h = n.K(t);
          return e(e({}, this.cu(t, i, n)), {
            ut: h.Y,
            mu: h.gu,
            Wt: h.pu,
          });
        }),
        i
      );
    })(ii),
    ri = (function () {
      function t() {
        (this.tt = null), (this.yu = []);
      }
      return (
        (t.prototype._ = function (t) {
          (this.tt = t), (this.yu = []);
        }),
        (t.prototype.h = function (t, i, n, h) {
          if (
            null !== this.tt &&
            0 !== this.tt.m.length &&
            null !== this.tt.M
          ) {
            this.yu.length || this.ku(i);
            for (
              var s = Math.max(1, Math.floor(i)),
                r = Math.round(this.tt.xu * i) - Math.floor(s / 2),
                e = r + s,
                u = this.tt.M.from;
              u < this.tt.M.to;
              u++
            ) {
              var a = this.tt.m[u],
                o = this.yu[u - this.tt.M.from],
                l = Math.round(a.p * i);
              t.fillStyle = a.ut;
              var f = void 0,
                c = void 0;
              l <= r
                ? ((f = l), (c = e))
                : ((f = r), (c = l - Math.floor(s / 2) + s)),
                t.fillRect(o.es, f, o.us - o.es + 1, c - f);
            }
          }
        }),
        (t.prototype.ku = function (t) {
          if (
            null !== this.tt &&
            0 !== this.tt.m.length &&
            null !== this.tt.M
          ) {
            var i =
                Math.ceil(this.tt.Pr * t) <= 1 ? 0 : Math.max(1, Math.floor(t)),
              n = Math.round(this.tt.Pr * t) - i;
            this.yu = new Array(this.tt.M.to - this.tt.M.from);
            for (var h = this.tt.M.from; h < this.tt.M.to; h++) {
              var s,
                r = this.tt.m[h],
                e = Math.round(r.g * t),
                u = void 0,
                a = void 0;
              if (n % 2) (u = e - (s = (n - 1) / 2)), (a = e + s);
              else (u = e - (s = n / 2)), (a = e + s - 1);
              this.yu[h - this.tt.M.from] = {
                es: u,
                us: a,
                Nu: e,
                Su: r.g * t,
                V: r.V,
              };
            }
            for (h = this.tt.M.from + 1; h < this.tt.M.to; h++) {
              var o = this.yu[h - this.tt.M.from],
                l = this.yu[h - this.tt.M.from - 1];
              o.V === l.V + 1 &&
                o.es - l.us !== i + 1 &&
                (l.Nu > l.Su ? (l.us = o.es - i - 1) : (o.es = l.us + i + 1));
            }
            var f = Math.ceil(this.tt.Pr * t);
            for (h = this.tt.M.from; h < this.tt.M.to; h++) {
              (o = this.yu[h - this.tt.M.from]).us < o.es && (o.us = o.es);
              var c = o.us - o.es + 1;
              f = Math.min(c, f);
            }
            if (i > 0 && f < 4)
              for (h = this.tt.M.from; h < this.tt.M.to; h++) {
                (c = (o = this.yu[h - this.tt.M.from]).us - o.es + 1) > f &&
                  (o.Nu > o.Su ? (o.us -= 1) : (o.es += 1));
              }
          } else this.yu = [];
        }),
        t
      );
    })();

  function ei(t) {
    return {
      m: [],
      Pr: t,
      xu: NaN,
      M: null,
    };
  }

  function ui(t, i, n) {
    return {
      V: t,
      P: i,
      g: NaN,
      p: NaN,
      ut: n,
    };
  }
  var ai = (function (t) {
      function i(i, n) {
        var h = t.call(this, i, n, !1) || this;
        return (h.D = new g()), (h.Du = ei(0)), (h.lt = new ri()), h;
      }
      return (
        r(i, t),
        (i.prototype.W = function (t, i) {
          return this.Ke.I().visible ? (this.Ze(), this.D) : null;
        }),
        (i.prototype.Je = function () {
          var t = this.$e.U().Pr();
          this.Du = ei(t);
          for (
            var i = 0,
              n = 0,
              h = this.Ke.I().color,
              s = 0,
              r = this.Ke.Yi().hu();
            s < r.length;
            s++
          ) {
            var e = r[s],
              u = e.J[3],
              a = void 0 !== e.ut ? e.ut : h,
              o = ui(e.Is, u, a);
            ++i < this.Du.m.length ? (this.Du.m[i] = o) : this.Du.m.push(o),
              (this.He[n++] = {
                V: e.Is,
                g: 0,
              });
          }
          this.lt._(this.Du), this.D.i([this.lt]);
        }),
        (i.prototype.Qe = function () {
          t.prototype.Qe.call(this), (this.Du.M = null);
        }),
        (i.prototype.iu = function (t, i, n) {
          if (null !== this.Ye) {
            var h = i.Pr(),
              s = l(i.br()),
              r = t.X(this.Ke.I().base, n);
            i.Br(this.Du.m),
              t.Ch(this.Du.m, n),
              (this.Du.xu = r),
              (this.Du.M = Zt(this.Du.m, s, !1)),
              (this.Du.Pr = h),
              this.lt._(this.Du);
          }
        }),
        i
      );
    })(Jt),
    oi = (function (t) {
      function i(i, n) {
        var h = t.call(this, i, n) || this;
        return (h.eu = new Ht()), h;
      }
      return (
        r(i, t),
        (i.prototype.W = function (t, i) {
          var n = this.Ke.I();
          if (!n.visible) return null;
          this.Ze();
          var h = {
            m: this.He,
            S: n.color,
            at: n.lineStyle,
            We: n.lineType,
            et: n.lineWidth,
            M: this.Ye,
          };
          return this.eu._(h), this.eu;
        }),
        (i.prototype.su = function (t, i) {
          return this.nu(t, i);
        }),
        i
      );
    })(Gt),
    li = /[2-9]/g,
    fi = (function () {
      function t(t) {
        void 0 === t && (t = 50),
          (this.xs = new Map()),
          (this.Cu = 0),
          (this.Tu = Array.from(new Array(t)));
      }
      return (
        (t.prototype.Au = function () {
          this.xs.clear(), this.Tu.fill(void 0);
        }),
        (t.prototype.Ot = function (t, i, n) {
          var h = n || li,
            s = String(i).replace(h, "0"),
            r = this.xs.get(s);
          if (void 0 === r) {
            if (0 === (r = t.measureText(s).width) && 0 !== i.length) return 0;
            var e = this.Tu[this.Cu];
            void 0 !== e && this.xs.delete(e),
              (this.Tu[this.Cu] = s),
              (this.Cu = (this.Cu + 1) % this.Tu.length),
              this.xs.set(s, r);
          }
          return r;
        }),
        t
      );
    })(),
    ci = (function () {
      function t(t) {
        (this.Eu = null),
          (this.ae = null),
          (this.Lu = "right"),
          (this.$s = 0),
          (this.Bu = t);
      }
      return (
        (t.prototype.Fu = function (t, i, n, h) {
          (this.Eu = t), (this.ae = i), (this.$s = n), (this.Lu = h);
        }),
        (t.prototype.h = function (t, i) {
          null !== this.ae &&
            null !== this.Eu &&
            this.Eu.h(t, this.ae, this.Bu, this.$s, this.Lu, i);
        }),
        t
      );
    })(),
    vi = (function () {
      function t(t, i, n) {
        (this.Ou = t),
          (this.Bu = new fi(50)),
          (this.Vu = i),
          (this.L = n),
          (this.le = -1),
          (this.lt = new ci(this.Bu));
      }
      return (
        (t.prototype.W = function (t, i) {
          var n = this.L.zu(this.Vu);
          if (null === n) return null;
          var h = n.Pu(this.Vu) ? n.Ti() : this.Vu.Z();
          if (null === h) return null;
          var s = n.Iu(h);
          if ("overlay" === s) return null;
          var r = this.L.Wu();
          return (
            r.zt !== this.le && ((this.le = r.zt), this.Bu.Au()),
            this.lt.Fu(this.Ou.Jt(), r, i, s),
            this.lt
          );
        }),
        t
      );
    })(),
    _i = (function () {
      function t() {
        this.tt = null;
      }
      return (
        (t.prototype._ = function (t) {
          this.tt = t;
        }),
        (t.prototype.h = function (t, i, s, r) {
          if (null !== this.tt && !1 !== this.tt.it) {
            var e = Math.round(this.tt.p * i);
            if (!(e < 0 || e > Math.ceil(this.tt.Mt * i))) {
              var u = Math.ceil(this.tt.wt * i);
              (t.lineCap = "butt"),
                (t.strokeStyle = this.tt.ut),
                (t.lineWidth = Math.floor(this.tt.et * i)),
                n(t, this.tt.at),
                h(t, e, 0, u);
            }
          }
        }),
        t
      );
    })(),
    di = (function () {
      function t(t) {
        (this.ju = {
          wt: 0,
          Mt: 0,
          p: 0,
          ut: "rgba(0, 0, 0, 0)",
          et: 1,
          at: 0,
          it: !1,
        }),
          (this.Ru = new _i()),
          (this.A = !0),
          (this.Ke = t),
          (this.$e = t.vt()),
          this.Ru._(this.ju);
      }
      return (
        (t.prototype.F = function () {
          this.A = !0;
        }),
        (t.prototype.W = function (t, i) {
          return this.Ke.I().visible
            ? (this.A && (this.Uu(t, i), (this.A = !1)), this.Ru)
            : null;
        }),
        t
      );
    })(),
    wi = (function (t) {
      function i(i) {
        return t.call(this, i) || this;
      }
      return (
        r(i, t),
        (i.prototype.Uu = function (t, i) {
          this.ju.it = !1;
          var n = this.Ke.Z(),
            h = n.oh().oh;
          if (2 === h || 3 === h) {
            var s = this.Ke.I();
            if (s.baseLineVisible && s.visible) {
              var r = this.Ke.H();
              null !== r &&
                ((this.ju.it = !0),
                (this.ju.p = n.X(r.J, r.J)),
                (this.ju.wt = i),
                (this.ju.Mt = t),
                (this.ju.ut = s.baseLineColor),
                (this.ju.et = s.baseLineWidth),
                (this.ju.at = s.baseLineStyle));
            }
          }
        }),
        i
      );
    })(di);

  function Mi(t, i) {
    return nt(Math.min(Math.max(t, 12), 30) * i);
  }

  function bi(t, i) {
    switch (t) {
      case "arrowDown":
      case "arrowUp":
        return Mi(i, 1);
      case "circle":
        return Mi(i, 0.8);
      case "square":
        return Mi(i, 0.7);
    }
  }

  function mi(t) {
    return it(Mi(t, 1));
  }

  function gi(t) {
    return Math.max(Mi(t, 0.1), 3);
  }

  function pi(t, i, n, h, s) {
    var r = bi("square", n),
      e = (r - 1) / 2,
      u = t - e,
      a = i - e;
    return h >= u && h <= u + r && s >= a && s <= a + r;
  }

  function yi(t, i, n, h, s) {
    var r = (bi("arrowUp", s) - 1) / 2,
      e = (nt(s / 2) - 1) / 2;
    i.beginPath(),
      t
        ? (i.moveTo(n - r, h),
          i.lineTo(n, h - r),
          i.lineTo(n + r, h),
          i.lineTo(n + e, h),
          i.lineTo(n + e, h + r),
          i.lineTo(n - e, h + r),
          i.lineTo(n - e, h))
        : (i.moveTo(n - r, h),
          i.lineTo(n, h + r),
          i.lineTo(n + r, h),
          i.lineTo(n + e, h),
          i.lineTo(n + e, h - r),
          i.lineTo(n - e, h - r),
          i.lineTo(n - e, h)),
      i.fill();
  }

  function ki(t, i, n, h, s, r) {
    return pi(i, n, h, s, r);
  }
  var xi = (function (t) {
    function i() {
      var i = (null !== t && t.apply(this, arguments)) || this;
      return (
        (i.tt = null),
        (i.Bu = new fi()),
        (i.le = -1),
        (i.fe = ""),
        (i.qu = ""),
        i
      );
    }
    return (
      r(i, t),
      (i.prototype._ = function (t) {
        this.tt = t;
      }),
      (i.prototype.Fu = function (t, i) {
        (this.le === t && this.fe === i) ||
          ((this.le = t), (this.fe = i), (this.qu = Ot(t, i)), this.Bu.Au());
      }),
      (i.prototype.Hu = function (t, i) {
        if (null === this.tt || null === this.tt.M) return null;
        for (var n = this.tt.M.from; n < this.tt.M.to; n++) {
          var h = this.tt.m[n];
          if (Si(h, t, i))
            return {
              Yu: h.Ku,
              $u: h.$u,
            };
        }
        return null;
      }),
      (i.prototype.u = function (t, i, n) {
        if (null !== this.tt && null !== this.tt.M) {
          (t.textBaseline = "middle"), (t.font = this.qu);
          for (var h = this.tt.M.from; h < this.tt.M.to; h++) {
            var s = this.tt.m[h];
            void 0 !== s.Ft &&
              ((s.Ft.wt = this.Bu.Ot(t, s.Ft.Xu)), (s.Ft.Mt = this.le)),
              Ni(s, t);
          }
        }
      }),
      i
    );
  })(p);

  function Ni(t, i) {
    (i.fillStyle = t.ut),
      void 0 !== t.Ft &&
        (function (t, i, n, h) {
          t.fillText(i, n, h);
        })(i, t.Ft.Xu, t.g - t.Ft.wt / 2, t.Ft.p),
      (function (t, i) {
        if (0 === t.tu) return;
        switch (t.Zu) {
          case "arrowDown":
            return void yi(!1, i, t.g, t.p, t.tu);
          case "arrowUp":
            return void yi(!0, i, t.g, t.p, t.tu);
          case "circle":
            return void (function (t, i, n, h) {
              var s = (bi("circle", h) - 1) / 2;
              t.beginPath(), t.arc(i, n, s, 0, 2 * Math.PI, !1), t.fill();
            })(i, t.g, t.p, t.tu);
          case "square":
            return void (function (t, i, n, h) {
              var s = bi("square", h),
                r = (s - 1) / 2,
                e = i - r,
                u = n - r;
              t.fillRect(e, u, s, s);
            })(i, t.g, t.p, t.tu);
        }
        t.Zu;
      })(t, i);
  }

  function Si(t, i, n) {
    return (
      !(
        void 0 === t.Ft ||
        !(function (t, i, n, h, s, r) {
          var e = h / 2;
          return s >= t && s <= t + n && r >= i - e && r <= i + e;
        })(t.g, t.Ft.p, t.Ft.wt, t.Ft.Mt, i, n)
      ) ||
      (function (t, i, n) {
        if (0 === t.tu) return !1;
        switch (t.Zu) {
          case "arrowDown":
          case "arrowUp":
            return ki(0, t.g, t.p, t.tu, i, n);
          case "circle":
            return (function (t, i, n, h, s) {
              var r = 2 + bi("circle", n) / 2,
                e = t - h,
                u = i - s;
              return Math.sqrt(e * e + u * u) <= r;
            })(t.g, t.p, t.tu, i, n);
          case "square":
            return pi(t.g, t.p, t.tu, i, n);
        }
        t.Zu;
      })(t, i, n)
    );
  }

  function Di(t, i, n, h, s, r, e, u, a) {
    var o = v(n) ? n : n.close,
      l = v(n) ? n : n.high,
      f = v(n) ? n : n.low,
      c = v(i.size) ? Math.max(i.size, 0) : 1,
      _ = mi(u.Pr()) * c,
      d = _ / 2;
    switch (((t.tu = _), i.position)) {
      case "inBar":
        return (
          (t.p = e.X(o, a)),
          void (void 0 !== t.Ft && (t.Ft.p = t.p + d + r + 0.6 * s))
        );
      case "aboveBar":
        return (
          (t.p = e.X(l, a) - d - h.Ju),
          void 0 !== t.Ft && ((t.Ft.p = t.p - d - 0.6 * s), (h.Ju += 1.2 * s)),
          void (h.Ju += _ + r)
        );
      case "belowBar":
        return (
          (t.p = e.X(f, a) + d + h.Gu),
          void 0 !== t.Ft &&
            ((t.Ft.p = t.p + d + r + 0.6 * s), (h.Gu += 1.2 * s)),
          void (h.Gu += _ + r)
        );
    }
    i.position;
  }
  var Ci = (function () {
      function t(t, i) {
        (this.A = !0),
          (this.Qu = !0),
          (this.ta = !0),
          (this.ia = null),
          (this.lt = new xi()),
          (this.na = t),
          (this.ri = i),
          (this.tt = {
            m: [],
            M: null,
          });
      }
      return (
        (t.prototype.F = function (t) {
          (this.A = !0), (this.ta = !0), "data" === t && (this.Qu = !0);
        }),
        (t.prototype.W = function (t, i, n) {
          if (!this.na.I().visible) return null;
          this.A && this.Ze();
          var h = this.ri.I().layout;
          return (
            this.lt.Fu(h.fontSize, h.fontFamily), this.lt._(this.tt), this.lt
          );
        }),
        (t.prototype.ha = function () {
          if (this.ta) {
            if (this.na.sa().length > 0) {
              var t = this.ri.U().Pr(),
                i = gi(t),
                n = 1.5 * mi(t) + 2 * i;
              this.ia = {
                above: n,
                below: n,
              };
            } else this.ia = null;
            this.ta = !1;
          }
          return this.ia;
        }),
        (t.prototype.Ze = function () {
          var t = this.na.Z(),
            i = this.ri.U(),
            n = this.na.sa();
          this.Qu &&
            ((this.tt.m = n.map(function (t) {
              return {
                V: t.time,
                g: 0,
                p: 0,
                tu: 0,
                Zu: t.shape,
                ut: t.color,
                Ku: t.Ku,
                $u: t.id,
                Ft: void 0,
              };
            })),
            (this.Qu = !1));
          var h = this.ri.I().layout;
          this.tt.M = null;
          var s = i.br();
          if (null !== s) {
            var r = this.na.H();
            if (null !== r && 0 !== this.tt.m.length) {
              var e = NaN,
                u = gi(i.Pr()),
                a = {
                  Ju: u,
                  Gu: u,
                };
              this.tt.M = Zt(this.tt.m, s, !0);
              for (var o = this.tt.M.from; o < this.tt.M.to; o++) {
                var l = n[o];
                l.time !== e && ((a.Ju = u), (a.Gu = u), (e = l.time));
                var f = this.tt.m[o];
                (f.g = i.G(l.time)),
                  void 0 !== l.text &&
                    l.text.length > 0 &&
                    (f.Ft = {
                      Xu: l.text,
                      p: 0,
                      wt: 0,
                      Mt: 0,
                    });
                var c = this.na.ra(l.time);
                null !== c && Di(f, l, c, a, h.fontSize, u, t, i, r.J);
              }
              this.A = !1;
            }
          }
        }),
        t
      );
    })(),
    Ti = (function (t) {
      function i(i) {
        return t.call(this, i) || this;
      }
      return (
        r(i, t),
        (i.prototype.Uu = function (t, i) {
          var n = this.ju;
          n.it = !1;
          var h = this.Ke.I();
          if (h.priceLineVisible && h.visible) {
            var s = this.Ke.ea(0 === h.priceLineSource);
            s.ua ||
              ((n.it = !0),
              (n.p = s.Pt),
              (n.ut = this.Ke.aa(s.ut)),
              (n.wt = i),
              (n.Mt = t),
              (n.et = h.priceLineWidth),
              (n.at = h.priceLineStyle));
          }
        }),
        i
      );
    })(di),
    Ai = (function (t) {
      function i(i) {
        var n = t.call(this) || this;
        return (n.ft = i), n;
      }
      return (
        r(i, t),
        (i.prototype.Gt = function (t, i, n) {
          (t.it = !1), (i.it = !1);
          var h = this.ft.I();
          if (h.visible) {
            var s = h.lastValueVisible,
              r = "" !== this.ft.oa(),
              e = 0 === h.seriesLastValueMode,
              u = this.ft.ea(!1);
            if (!u.ua) {
              s && ((t.Ft = this.la(u, s, e)), (t.it = 0 !== t.Ft.length)),
                (r || e) &&
                  ((i.Ft = this.fa(u, s, r, e)), (i.it = i.Ft.length > 0));
              var a = this.ft.aa(u.ut),
                o = B(a);
              (n.yt = o.yt),
                (n.ut = o.kt),
                (n.Pt = u.Pt),
                (i.Wt = this.ft.vt().I().layout.backgroundColor),
                (t.Wt = a);
            }
          }
        }),
        (i.prototype.fa = function (t, i, n, h) {
          var s = "",
            r = this.ft.oa();
          return (
            n && 0 !== r.length && (s += r + " "),
            i && h && (s += this.ft.Z()._h() ? t.ca : t.va),
            s.trim()
          );
        }),
        (i.prototype.la = function (t, i, n) {
          return i ? (n ? (this.ft.Z()._h() ? t.va : t.ca) : t.Ft) : "";
        }),
        i
      );
    })(I),
    Ei = (function () {
      function t(t, i) {
        (this.Pn = t), (this._a = i || null);
      }
      return (
        (t.prototype.Nh = function () {
          return this.Pn;
        }),
        (t.prototype.os = function () {
          return this._a;
        }),
        (t.prototype.mn = function () {
          return null === this.Pn
            ? null
            : {
                priceRange: this.Pn.mn(),
                margins: this._a || void 0,
              };
        }),
        (t.gn = function (i) {
          return null === i ? null : new t(J.gn(i.priceRange), i.margins);
        }),
        t
      );
    })(),
    Li = (function (t) {
      function i(i, n) {
        var h = t.call(this, i) || this;
        return (h.da = n), h;
      }
      return (
        r(i, t),
        (i.prototype.Uu = function (t, i) {
          var n = this.ju;
          if (((n.it = !1), this.Ke.I().visible)) {
            var h = this.da.wa();
            if (null !== h) {
              var s = this.da.I();
              (n.it = !0),
                (n.p = h),
                (n.ut = s.color),
                (n.wt = i),
                (n.Mt = t),
                (n.et = s.lineWidth),
                (n.at = s.lineStyle);
            }
          }
        }),
        i
      );
    })(di),
    Bi = (function (t) {
      function i(i, n) {
        var h = t.call(this) || this;
        return (h.na = i), (h.da = n), h;
      }
      return (
        r(i, t),
        (i.prototype.Gt = function (t, i, n) {
          (t.it = !1), (i.it = !1);
          var h = this.da.I(),
            s = h.axisLabelVisible,
            r = "" !== h.title;
          if (s && this.na.I().visible) {
            var e = this.da.wa();
            if (null !== e) {
              r && ((i.Ft = h.title), (i.it = !0)),
                (i.Wt = this.na.vt().I().layout.backgroundColor),
                (t.Ft = this.na.Z().Jh(h.price)),
                (t.it = !0);
              var u = B(h.color);
              (n.yt = u.yt), (n.ut = u.kt), (n.Pt = e);
            }
          }
        }),
        i
      );
    })(I),
    Fi = (function () {
      function t(t, i) {
        (this.na = t),
          (this.Si = i),
          (this.Ma = new Li(t, this)),
          (this.Ou = new Bi(t, this)),
          (this.ba = new vi(this.Ou, t, t.vt()));
      }
      return (
        (t.prototype.eh = function (t) {
          c(this.Si, t), this.F(), this.na.vt().zr();
        }),
        (t.prototype.I = function () {
          return this.Si;
        }),
        (t.prototype._i = function () {
          var t = [];
          return t.push(this.Ma), t.push(this.ba), t;
        }),
        (t.prototype.ma = function () {
          return this.Ou;
        }),
        (t.prototype.F = function () {
          this.Ma.F(), this.Ou.F();
        }),
        (t.prototype.wa = function () {
          var t = this.na,
            i = t.Z();
          if (t.vt().U().ii() || i.ii()) return null;
          var n = t.H();
          return null === n ? null : i.X(this.Si.price, n.J);
        }),
        t
      );
    })(),
    Oi = (function (t) {
      function i(i) {
        var n = t.call(this) || this;
        return (n.ri = i), n;
      }
      return (
        r(i, t),
        (i.prototype.vt = function () {
          return this.ri;
        }),
        i
      );
    })(q),
    Vi = {
      Y: "",
      pu: "",
      gu: "",
    },
    zi = (function () {
      function t(t) {
        this.na = t;
      }
      return (
        (t.prototype.K = function (t, i) {
          var n = this.na.ga(),
            h = this.na.I();
          switch (n) {
            case "Line":
              return this.pa(h);
            case "Area":
              return this.ya(h);
            case "Bar":
              return this.ka(h, t, i);
            case "Candlestick":
              return this.xa(h, t, i);
            case "Histogram":
              return this.Na(h, t, i);
          }
          throw new Error("Unknown chart style");
        }),
        (t.prototype.ka = function (t, i, n) {
          var h = e({}, Vi),
            s = t.upColor,
            r = t.downColor,
            u = s,
            a = r,
            o = l(this.Sa(i, n)),
            c = f(o.J[0]) <= f(o.J[3]);
          return (h.Y = c ? s : r), (h.pu = c ? u : a), h;
        }),
        (t.prototype.xa = function (t, i, n) {
          var h = e({}, Vi),
            s = t.upColor,
            r = t.downColor,
            u = t.borderUpColor,
            a = t.borderDownColor,
            o = t.wickUpColor,
            c = t.wickDownColor,
            v = l(this.Sa(i, n)),
            _ = f(v.J[0]) <= f(v.J[3]);
          return (h.Y = _ ? s : r), (h.pu = _ ? u : a), (h.gu = _ ? o : c), h;
        }),
        (t.prototype.ya = function (t) {
          return e(e({}, Vi), {
            Y: t.lineColor,
          });
        }),
        (t.prototype.pa = function (t) {
          return e(e({}, Vi), {
            Y: t.color,
          });
        }),
        (t.prototype.Na = function (t, i, n) {
          var h = e({}, Vi),
            s = l(this.Sa(i, n));
          return (h.Y = void 0 !== s.ut ? s.ut : t.color), h;
        }),
        (t.prototype.Sa = function (t, i) {
          return void 0 !== i ? i.J : this.na.Yi().Da(t);
        }),
        t
      );
    })(),
    Pi = 30,
    Ii = (function () {
      function t() {
        (this.Ca = []), (this.Ta = new Map()), (this.Aa = new Map());
      }
      return (
        (t.prototype.Ea = function () {
          (this.Ca = []), this.Ta.clear(), this.Aa.clear();
        }),
        (t.prototype.La = function () {
          return this.tu() > 0 ? this.Ca[this.Ca.length - 1] : null;
        }),
        (t.prototype.Ba = function () {
          return this.tu() > 0 ? this.Fa(0) : null;
        }),
        (t.prototype.Hi = function () {
          return this.tu() > 0 ? this.Fa(this.Ca.length - 1) : null;
        }),
        (t.prototype.tu = function () {
          return this.Ca.length;
        }),
        (t.prototype.ii = function () {
          return 0 === this.tu();
        }),
        (t.prototype.Os = function (t) {
          return null !== this.Oa(t, 0);
        }),
        (t.prototype.Da = function (t) {
          return this.Va(t);
        }),
        (t.prototype.Va = function (t, i) {
          void 0 === i && (i = 0);
          var n = this.Oa(t, i);
          return null === n
            ? null
            : e(e({}, this.za(n)), {
                Is: this.Fa(n),
              });
        }),
        (t.prototype.hu = function () {
          return this.Ca;
        }),
        (t.prototype.Pa = function (t, i, n) {
          if (this.ii()) return null;
          for (var h = null, s = 0, r = n; s < r.length; s++) {
            var e = r[s];
            h = Wi(h, this.Ia(t, i, e));
          }
          return h;
        }),
        (t.prototype.wn = function (t) {
          0 !== t.length &&
            (this.ii() || t[t.length - 1].Is < this.Ca[0].Is
              ? this.Wa(t)
              : t[0].Is > this.Ca[this.Ca.length - 1].Is
              ? this.ja(t)
              : 1 !== t.length || t[0].Is !== this.Ca[this.Ca.length - 1].Is
              ? this.Ra(t)
              : this.Ua(t[0]));
        }),
        (t.prototype.Fa = function (t) {
          return this.Ca[t].Is;
        }),
        (t.prototype.za = function (t) {
          return this.Ca[t];
        }),
        (t.prototype.Oa = function (t, i) {
          var n = this.qa(t);
          if (null === n && 0 !== i)
            switch (i) {
              case -1:
                return this.Ha(t);
              case 1:
                return this.Ya(t);
              default:
                throw new TypeError("Unknown search mode");
            }
          return n;
        }),
        (t.prototype.Ha = function (t) {
          var i = this.Ka(t);
          return (
            i > 0 && (i -= 1), i !== this.Ca.length && this.Fa(i) < t ? i : null
          );
        }),
        (t.prototype.Ya = function (t) {
          var i = this.$a(t);
          return i !== this.Ca.length && t < this.Fa(i) ? i : null;
        }),
        (t.prototype.qa = function (t) {
          var i = this.Ka(t);
          return i === this.Ca.length || t < this.Ca[i].Is ? null : i;
        }),
        (t.prototype.Ka = function (t) {
          return Yt(this.Ca, t, function (t, i) {
            return t.Is < i;
          });
        }),
        (t.prototype.$a = function (t) {
          return Kt(this.Ca, t, function (t, i) {
            return i.Is > t;
          });
        }),
        (t.prototype.Xa = function (t, i, n) {
          for (var h = null, s = t; s < i; s++) {
            var r = this.Ca[s].J[n];
            Number.isNaN(r) ||
              (null === h
                ? (h = {
                    Za: r,
                    Ja: r,
                  })
                : (r < h.Za && (h.Za = r), r > h.Ja && (h.Ja = r)));
          }
          return h;
        }),
        (t.prototype.Ga = function (t) {
          var i = Math.floor(t.Is / Pi);
          this.Ta.forEach(function (t) {
            return t.delete(i);
          });
        }),
        (t.prototype.Wa = function (t) {
          a(0 !== t.length, "plotRows should not be empty"),
            this.Aa.clear(),
            this.Ta.clear(),
            (this.Ca = t.concat(this.Ca));
        }),
        (t.prototype.ja = function (t) {
          a(0 !== t.length, "plotRows should not be empty"),
            this.Aa.clear(),
            this.Ta.clear(),
            (this.Ca = this.Ca.concat(t));
        }),
        (t.prototype.Ua = function (t) {
          a(!this.ii(), "plot list should not be empty"),
            a(
              this.Ca[this.Ca.length - 1].Is === t.Is,
              "last row index should match new row index"
            ),
            this.Ga(t),
            this.Aa.delete(t.Is),
            (this.Ca[this.Ca.length - 1] = t);
        }),
        (t.prototype.Ra = function (t) {
          a(0 !== t.length, "plot rows should not be empty"),
            this.Aa.clear(),
            this.Ta.clear(),
            (this.Ca = (function (t, i) {
              var n = (function (t, i) {
                  var n = t.length,
                    h = i.length,
                    s = n + h,
                    r = 0,
                    e = 0;
                  for (; r < n && e < h; )
                    t[r].Is < i[e].Is
                      ? r++
                      : t[r].Is > i[e].Is
                      ? e++
                      : (r++, e++, s--);
                  return s;
                })(t, i),
                h = new Array(n),
                s = 0,
                r = 0,
                e = t.length,
                u = i.length,
                a = 0;
              for (; s < e && r < u; )
                t[s].Is < i[r].Is
                  ? ((h[a] = t[s]), s++)
                  : t[s].Is > i[r].Is
                  ? ((h[a] = i[r]), r++)
                  : ((h[a] = i[r]), s++, r++),
                  a++;
              for (; s < e; ) (h[a] = t[s]), s++, a++;
              for (; r < u; ) (h[a] = i[r]), r++, a++;
              return h;
            })(this.Ca, t));
        }),
        (t.prototype.Ia = function (t, i, n) {
          if (this.ii()) return null;
          var h = null,
            s = l(this.Ba()),
            r = l(this.Hi()),
            e = Math.max(t, s),
            u = Math.min(i, r),
            a = Math.ceil(e / Pi) * Pi,
            o = Math.max(a, Math.floor(u / Pi) * Pi),
            f = this.Ka(e),
            c = this.$a(Math.min(u, a, i));
          h = Wi(h, this.Xa(f, c, n));
          var v = this.Ta.get(n);
          void 0 === v && ((v = new Map()), this.Ta.set(n, v));
          for (var _ = Math.max(a + 1, e); _ < o; _ += Pi) {
            var d = Math.floor(_ / Pi),
              w = v.get(d);
            if (void 0 === w) {
              var M = this.Ka(d * Pi),
                b = this.$a((d + 1) * Pi - 1);
              (w = this.Xa(M, b, n)), v.set(d, w);
            }
            h = Wi(h, w);
          }
          (f = this.Ka(o)), (c = this.$a(u));
          return (h = Wi(h, this.Xa(f, c, n)));
        }),
        t
      );
    })();

  function Wi(t, i) {
    return null === t
      ? i
      : null === i
      ? t
      : {
          Za: Math.min(t.Za, i.Za),
          Ja: Math.max(t.Ja, i.Ja),
        };
  }
  var ji = (function (t) {
      function i(i, n, h) {
        var s = t.call(this, i) || this;
        (s.tt = new Ii()),
          (s.Ma = new Ti(s)),
          (s.Qa = []),
          (s.io = new wi(s)),
          (s.no = null),
          (s.ho = []),
          (s.so = []),
          (s.Si = n),
          (s.ro = h);
        var r = new Ai(s);
        return (s.gi = [r]), (s.ba = new vi(r, s, i)), s.eo(), s.uo(), s;
      }
      return (
        r(i, t),
        (i.prototype.an = function () {}),
        (i.prototype.aa = function (t) {
          return this.Si.priceLineColor || t;
        }),
        (i.prototype.ea = function (t, i) {
          var n = {
              ua: !0,
            },
            h = this.Z();
          if (this.vt().U().ii() || h.ii() || this.tt.ii()) return n;
          var s,
            r,
            e = this.vt().U().br(),
            u = this.H();
          if (null === e || null === u) return n;
          if (t) {
            var a = this.tt.La();
            if (null === a) return n;
            (s = a), (r = a.Is);
          } else {
            var o = this.tt.Va(e.us(), -1);
            if (null === o) return n;
            if (null === (s = this.tt.Da(o.Is))) return n;
            r = o.Is;
          }
          var l = s.J[3],
            f = this.$().K(r, {
              J: s,
            }),
            c = h.X(l, u.J);
          return {
            ua: !1,
            P: i ? l : void 0,
            Ft: h.ni(l, u.J),
            ca: h.Jh(l),
            va: h.Qh(l, u.J),
            ut: f.Y,
            Pt: c,
            Is: r,
          };
        }),
        (i.prototype.$ = function () {
          return null !== this.no || (this.no = new zi(this)), this.no;
        }),
        (i.prototype.I = function () {
          return this.Si;
        }),
        (i.prototype.eh = function (t) {
          var i = t.priceScaleId;
          void 0 !== i && i !== this.Si.priceScaleId && this.vt().ao(this, i),
            c(this.Si, t),
            null !== this.ai &&
              void 0 !== t.scaleMargins &&
              this.ai.eh({
                scaleMargins: t.scaleMargins,
              }),
            void 0 !== t.priceFormat && this.eo(),
            this.vt().oo(this);
        }),
        (i.prototype.lo = function () {
          this.tt.Ea(), this.uo();
        }),
        (i.prototype.fo = function (t, i) {
          i && this.tt.Ea(),
            this.tt.wn(t),
            this.co(),
            this.Li.F("data"),
            this.Di.F("data");
          var n = this.vt().zu(this);
          this.vt().vo(n), this.vt().oo(this), this.vt()._o(), this.vt().zr();
        }),
        (i.prototype.do = function (t) {
          (this.ho = t.map(function (t) {
            return e({}, t);
          })),
            this.co();
          var i = this.vt().zu(this);
          this.Di.F("data"),
            this.vt().vo(i),
            this.vt().oo(this),
            this.vt()._o(),
            this.vt().zr();
        }),
        (i.prototype.sa = function () {
          return this.so;
        }),
        (i.prototype.wo = function (t) {
          var i = new Fi(this, t);
          return this.Qa.push(i), this.vt().oo(this), i;
        }),
        (i.prototype.Mo = function (t) {
          var i = this.Qa.indexOf(t);
          -1 !== i && this.Qa.splice(i, 1), this.vt().oo(this);
        }),
        (i.prototype.ga = function () {
          return this.ro;
        }),
        (i.prototype.H = function () {
          var t = this.bo();
          return null === t
            ? null
            : {
                J: t.J[3],
                jh: t.V,
              };
        }),
        (i.prototype.bo = function () {
          var t = this.vt().U().br();
          if (null === t) return null;
          var i = t.es();
          return this.tt.Va(i, 1);
        }),
        (i.prototype.Yi = function () {
          return this.tt;
        }),
        (i.prototype.ra = function (t) {
          var i = this.tt.Da(t);
          return null === i
            ? null
            : "Bar" === this.ro || "Candlestick" === this.ro
            ? {
                open: i.J[0],
                high: i.J[1],
                low: i.J[2],
                close: i.J[3],
              }
            : i.J[3];
        }),
        (i.prototype._i = function () {
          var t = [];
          this.mo() || t.push(this.io);
          for (var i = 0, n = this.Qa; i < n.length; i++) {
            var h = n[i];
            t.push.apply(t, h._i());
          }
          return (
            t.push(this.Li),
            t.push(this.Ma),
            t.push(this.ba),
            t.push(this.Di),
            t
          );
        }),
        (i.prototype.vi = function (t, i) {
          for (
            var n = i === this.ai || this.mo() ? u(this.gi) : [],
              h = 0,
              s = this.Qa;
            h < s.length;
            h++
          ) {
            var r = s[h];
            n.push(r.ma());
          }
          return n;
        }),
        (i.prototype.rs = function (t, i) {
          var n = this;
          if (void 0 !== this.Si.autoscaleInfoProvider) {
            var h = this.Si.autoscaleInfoProvider(function () {
              var h = n.po(t, i);
              return null === h ? null : h.mn();
            });
            return Ei.gn(h);
          }
          return this.po(t, i);
        }),
        (i.prototype.hs = function () {
          return this.Si.priceFormat.minMove;
        }),
        (i.prototype.Xh = function () {
          return this.Gn;
        }),
        (i.prototype.Ri = function () {
          this.Li.F(), this.Di.F();
          for (var t = 0, i = this.gi; t < i.length; t++) {
            i[t].F();
          }
          for (var n = 0, h = this.Qa; n < h.length; n++) {
            h[n].F();
          }
          this.Ma.F(), this.io.F();
        }),
        (i.prototype.Z = function () {
          return l(this.ai);
        }),
        (i.prototype.q = function (t) {
          if (
            !(
              ("Line" === this.ro || "Area" === this.ro) &&
              this.Si.crosshairMarkerVisible
            )
          )
            return null;
          var i = this.tt.Da(t);
          return null === i
            ? null
            : {
                P: i.J[3],
                N: this.yo(),
              };
        }),
        (i.prototype.oa = function () {
          return this.Si.title;
        }),
        (i.prototype.mo = function () {
          return !zt(this.Z().rh());
        }),
        (i.prototype.po = function (t, i) {
          if (!_(t) || !_(i) || this.tt.ii()) return null;
          var n =
              "Line" === this.ro ||
              "Area" === this.ro ||
              "Histogram" === this.ro
                ? [3]
                : [2, 1],
            h = this.tt.Pa(t, i, n),
            s = null !== h ? new J(h.Za, h.Ja) : null;
          if ("Histogram" === this.ga()) {
            var r = this.Si.base,
              e = new J(r, r);
            s = null !== s ? s.wn(e) : e;
          }
          return new Ei(s, this.Di.ha());
        }),
        (i.prototype.yo = function () {
          switch (this.ro) {
            case "Line":
            case "Area":
              return this.Si.crosshairMarkerRadius;
          }
          return 0;
        }),
        (i.prototype.eo = function () {
          switch (this.Si.priceFormat.type) {
            case "custom":
              this.Gn = {
                Xi: this.Si.priceFormat.formatter,
              };
              break;
            case "volume":
              this.Gn = new Rt(this.Si.priceFormat.precision);
              break;
            case "percent":
              this.Gn = new X(this.Si.priceFormat.precision);
              break;
            default:
              var t = Math.pow(10, this.Si.priceFormat.precision);
              this.Gn = new $(t, this.Si.priceFormat.minMove * t);
          }
          null !== this.ai && this.ai.uh();
        }),
        (i.prototype.co = function () {
          var t = this,
            i = this.vt().U();
          if (i.ii() || 0 === this.tt.tu()) this.so = [];
          else {
            var n = l(this.tt.Ba());
            this.so = this.ho.map(function (h, s) {
              var r = l(i.Mr(h.time, !0)),
                e = r < n ? 1 : -1;
              return {
                time: l(t.tt.Va(r, e)).Is,
                position: h.position,
                shape: h.shape,
                color: h.color,
                id: h.id,
                Ku: s,
                text: h.text,
                size: h.size,
              };
            });
          }
        }),
        (i.prototype.uo = function () {
          switch (((this.Di = new Ci(this, this.vt())), this.ro)) {
            case "Bar":
              this.Li = new ni(this, this.vt());
              break;
            case "Candlestick":
              this.Li = new si(this, this.vt());
              break;
            case "Line":
              this.Li = new oi(this, this.vt());
              break;
            case "Area":
              this.Li = new Qt(this, this.vt());
              break;
            case "Histogram":
              this.Li = new ai(this, this.vt());
              break;
            default:
              throw Error("Unknown chart style assigned: " + this.ro);
          }
        }),
        i
      );
    })(Oi),
    Ri = (function () {
      function t(t) {
        this.Si = t;
      }
      return (
        (t.prototype.ko = function (t, i, n) {
          var h = t;
          if (0 === this.Si.mode) return h;
          var s = n.Ti(),
            r = s.H();
          if (null === r) return h;
          var e = s.X(t, r),
            u = n
              .Vh()
              .filter(function (t) {
                return t instanceof ji;
              })
              .reduce(function (t, h) {
                if (n.Pu(h) || !h.I().visible) return t;
                var s = h.Z(),
                  r = h.Yi();
                if (s.ii() || !r.Os(i)) return t;
                var e = r.Da(i);
                if (null === e) return t;
                var u = f(h.H());
                return t.concat([s.X(e.J[3], u.J)]);
              }, []);
          if (0 === u.length) return h;
          u.sort(function (t, i) {
            return Math.abs(t - e) - Math.abs(i - e);
          });
          var a = u[0];
          return (h = s.Ai(a, r));
        }),
        t
      );
    })(),
    Ui = (function () {
      function t(t, i) {
        (this.Kn = []),
          (this.xo = new Map()),
          (this.Vn = 0),
          (this.$s = 0),
          (this.No = 1e3),
          (this.$n = null),
          (this.So = new Z()),
          (this.Do = t),
          (this.ri = i);
        var n = i.I();
        (this.Co = this.To("left", n.leftPriceScale)),
          (this.Ao = this.To("right", n.rightPriceScale)),
          this.Co.gh().Qi(this.Eo.bind(this, this.Co), this),
          this.Ao.gh().Qi(this.Eo.bind(this, this.Co), this),
          this.Lo(n);
      }
      return (
        (t.prototype.Lo = function (t) {
          if (
            (t.leftPriceScale && this.Co.eh(t.leftPriceScale),
            t.rightPriceScale && this.Ao.eh(t.rightPriceScale),
            t.localization && (this.Co.uh(), this.Ao.uh()),
            t.overlayPriceScales)
          )
            for (
              var i = 0, n = Array.from(this.xo.values());
              i < n.length;
              i++
            ) {
              var h = l(n[i][0].Z());
              h.eh(t.overlayPriceScales), t.localization && h.uh();
            }
        }),
        (t.prototype.Bo = function (t) {
          switch (t) {
            case "left":
              return this.Co;
            case "right":
              return this.Ao;
          }
          return this.xo.has(t) ? o(this.xo.get(t))[0].Z() : null;
        }),
        (t.prototype.an = function () {
          this.vt().Fo().rn(this),
            this.Co.gh().rn(this),
            this.Ao.gh().rn(this),
            this.Kn.forEach(function (t) {
              t.an && t.an();
            }),
            this.So.en();
        }),
        (t.prototype.Oo = function () {
          return this.No;
        }),
        (t.prototype.Vo = function (t) {
          this.No = t;
        }),
        (t.prototype.vt = function () {
          return this.ri;
        }),
        (t.prototype.wt = function () {
          return this.$s;
        }),
        (t.prototype.Mt = function () {
          return this.Vn;
        }),
        (t.prototype.Cr = function (t) {
          (this.$s = t), this.zo();
        }),
        (t.prototype.ph = function (t) {
          var i = this;
          (this.Vn = t),
            this.Co.ph(t),
            this.Ao.ph(t),
            this.Kn.forEach(function (n) {
              if (i.Pu(n)) {
                var h = n.Z();
                null !== h && h.ph(t);
              }
            }),
            this.zo();
        }),
        (t.prototype.Vh = function () {
          return this.Kn;
        }),
        (t.prototype.Pu = function (t) {
          var i = t.Z();
          return null === i || (this.Co !== i && this.Ao !== i);
        }),
        (t.prototype.Ph = function (t, i, n) {
          var h = void 0 !== n ? n : this.Io().Po - 1;
          this.Wo(t, i, h);
        }),
        (t.prototype.Wh = function (t) {
          var i = this.Kn.indexOf(t);
          a(-1 !== i, "removeDataSource: invalid data source"),
            this.Kn.splice(i, 1);
          var n = l(t.Z()).rh();
          if (this.xo.has(n)) {
            var h = o(this.xo.get(n)),
              s = h.indexOf(t);
            -1 !== s && (h.splice(s, 1), 0 === h.length && this.xo.delete(n));
          }
          var r = t.Z();
          r && r.Vh().indexOf(t) >= 0 && r.Wh(t),
            null !== r && (r.Ih(), this.jo(r)),
            (this.$n = null);
        }),
        (t.prototype.Iu = function (t) {
          return t === this.Co ? "left" : t === this.Ao ? "right" : "overlay";
        }),
        (t.prototype.Ro = function () {
          return this.Co;
        }),
        (t.prototype.Uo = function () {
          return this.Ao;
        }),
        (t.prototype.qo = function (t, i) {
          t.Uh(i);
        }),
        (t.prototype.Ho = function (t, i) {
          t.qh(i), this.zo();
        }),
        (t.prototype.Yo = function (t) {
          t.Hh();
        }),
        (t.prototype.Ko = function (t, i) {
          t.Yh(i);
        }),
        (t.prototype.$o = function (t, i) {
          t.Kh(i), this.zo();
        }),
        (t.prototype.Xo = function (t) {
          t.$h();
        }),
        (t.prototype.zo = function () {
          this.Kn.forEach(function (t) {
            t.Ri();
          });
        }),
        (t.prototype.Ti = function () {
          var t = null;
          return (
            this.ri.I().rightPriceScale.visible && 0 !== this.Ao.Vh().length
              ? (t = this.Ao)
              : this.ri.I().leftPriceScale.visible && 0 !== this.Co.Vh().length
              ? (t = this.Co)
              : 0 !== this.Kn.length && (t = this.Kn[0].Z()),
            null === t && (t = this.Ao),
            t
          );
        }),
        (t.prototype.jo = function (t) {
          null !== t && t.fh() && this.Zo(t);
        }),
        (t.prototype.Jo = function (t) {
          var i = this.Do.br();
          t.ah({
            wh: !0,
          }),
            null !== i && t.ns(i),
            this.zo();
        }),
        (t.prototype.Go = function () {
          this.Zo(this.Co), this.Zo(this.Ao);
        }),
        (t.prototype.Qo = function () {
          var t = this;
          this.jo(this.Co),
            this.jo(this.Ao),
            this.Kn.forEach(function (i) {
              t.Pu(i) && t.jo(i.Z());
            }),
            this.zo(),
            this.ri.zr();
        }),
        (t.prototype.zh = function () {
          return null === this.$n && (this.$n = vt(this.Kn)), this.$n;
        }),
        (t.prototype.tl = function () {
          return this.So;
        }),
        (t.prototype.Zo = function (t) {
          var i = t.ts();
          if (i && i.length > 0 && !this.Do.ii()) {
            var n = this.Do.br();
            null !== n && t.ns(n);
          }
          t.Ri();
        }),
        (t.prototype.Io = function () {
          var t = this.zh();
          if (0 === t.length)
            return {
              Po: 0,
              il: 0,
            };
          for (var i = 0, n = 0, h = 0; h < t.length; h++) {
            var s = t[h].li();
            null !== s && (s < i && (i = s), s > n && (n = s));
          }
          return {
            Po: i,
            il: n,
          };
        }),
        (t.prototype.Wo = function (t, i, n) {
          var h = this.Bo(i);
          if (
            (null === h && (h = this.To(i, this.ri.I().overlayPriceScales)),
            this.Kn.push(t),
            !zt(i))
          ) {
            var s = this.xo.get(i) || [];
            s.push(t), this.xo.set(i, s);
          }
          h.Ph(t), t.ci(h), t.fi(n), this.jo(h), (this.$n = null);
        }),
        (t.prototype.Eo = function (t, i, n) {
          i.oh !== n.oh && this.Zo(t);
        }),
        (t.prototype.To = function (t, i) {
          var n = e(
              {
                visible: !0,
                autoScale: !0,
              },
              M(i)
            ),
            h = new Mt(t, n, this.ri.I().layout, this.ri.I().localization);
          return h.ph(this.Mt()), h;
        }),
        t
      );
    })(),
    qi = (function (t) {
      function i(i) {
        var n = t.call(this) || this;
        return (n.nl = new Map()), (n.tt = i), n;
      }
      return (
        r(i, t),
        (i.prototype.u = function (t) {}),
        (i.prototype.l = function (t) {
          if (this.tt.it) {
            t.save();
            for (var i = 0, n = 0, h = this.tt.hl; n < h.length; n++) {
              if (0 !== (a = h[n]).Ft.length) {
                t.font = a.Nt;
                var s = this.sl(t, a.Ft);
                s > this.tt.wt ? (a.Ur = this.tt.wt / s) : (a.Ur = 1),
                  (i += a.rl * a.Ur);
              }
            }
            var r = 0;
            switch (this.tt.el) {
              case "top":
                r = 0;
                break;
              case "center":
                r = Math.max((this.tt.Mt - i) / 2, 0);
                break;
              case "bottom":
                r = Math.max(this.tt.Mt - i, 0);
            }
            t.fillStyle = this.tt.ut;
            for (var e = 0, u = this.tt.hl; e < u.length; e++) {
              var a = u[e];
              t.save();
              var o = 0;
              switch (this.tt.ul) {
                case "left":
                  (t.textAlign = "left"), (o = a.rl / 2);
                  break;
                case "center":
                  (t.textAlign = "center"), (o = this.tt.wt / 2);
                  break;
                case "right":
                  (t.textAlign = "right"), (o = this.tt.wt - 1 - a.rl / 2);
              }
              t.translate(o, r),
                (t.textBaseline = "top"),
                (t.font = a.Nt),
                t.scale(a.Ur, a.Ur),
                t.fillText(a.Ft, 0, a.al),
                t.restore(),
                (r += a.rl * a.Ur);
            }
            t.restore();
          }
        }),
        (i.prototype.sl = function (t, i) {
          var n = this.ol(t.font),
            h = n.get(i);
          return void 0 === h && ((h = t.measureText(i).width), n.set(i, h)), h;
        }),
        (i.prototype.ol = function (t) {
          var i = this.nl.get(t);
          return void 0 === i && ((i = new Map()), this.nl.set(t, i)), i;
        }),
        i
      );
    })(p),
    Hi = (function () {
      function t(t) {
        (this.A = !0),
          (this.ot = {
            it: !1,
            ut: "",
            Mt: 0,
            wt: 0,
            hl: [],
            el: "center",
            ul: "center",
          }),
          (this.lt = new qi(this.ot)),
          (this.ft = t);
      }
      return (
        (t.prototype.F = function () {
          this.A = !0;
        }),
        (t.prototype.W = function (t, i) {
          return this.A && (this.j(t, i), (this.A = !1)), this.lt;
        }),
        (t.prototype.j = function (t, i) {
          var n = this.ft.I(),
            h = this.ot;
          (h.it = n.visible),
            h.it &&
              ((h.ut = n.color),
              (h.wt = i),
              (h.Mt = t),
              (h.ul = n.horzAlign),
              (h.el = n.vertAlign),
              (h.hl = [
                {
                  Ft: n.text,
                  Nt: Ot(n.fontSize, n.fontFamily, n.fontStyle),
                  rl: 1.2 * n.fontSize,
                  al: 0,
                  Ur: 0,
                },
              ]));
        }),
        t
      );
    })(),
    Yi = (function (t) {
      function i(i, n) {
        var h = t.call(this) || this;
        return (h.Si = n), (h.Li = new Hi(h)), h;
      }
      return (
        r(i, t),
        (i.prototype._i = function () {
          return [this.Li];
        }),
        (i.prototype.I = function () {
          return this.Si;
        }),
        (i.prototype.Ri = function () {
          this.Li.F();
        }),
        i
      );
    })(q),
    Ki = (function () {
      function t(t, i) {
        (this.ll = []),
          (this.fl = []),
          (this.$s = 0),
          (this.cl = null),
          (this.vl = null),
          (this._l = new Z()),
          (this.dl = new Z()),
          (this.wl = t),
          (this.Si = i),
          (this.Ml = new Vt(this)),
          (this.Do = new Et(this, i.timeScale, this.Si.localization)),
          (this.bl = new Wt()),
          (this.B = new H(this, i.crosshair)),
          (this.ml = new Ri(i.crosshair)),
          (this.gl = new Yi(this, i.watermark)),
          this.pl(),
          this.ll[0].Vo(2e3);
      }
      return (
        (t.prototype.yl = function () {
          this.kl(new jt(3));
        }),
        (t.prototype.zr = function () {
          this.kl(new jt(2));
        }),
        (t.prototype.oo = function (t) {
          var i = this.xl(t);
          this.kl(i);
        }),
        (t.prototype.Nl = function () {
          return this.vl;
        }),
        (t.prototype.Sl = function (t) {
          var i = this.vl;
          (this.vl = t),
            null !== i && this.oo(i.Dl),
            null !== t && this.oo(t.Dl);
        }),
        (t.prototype.I = function () {
          return this.Si;
        }),
        (t.prototype.eh = function (t) {
          c(this.Si, t),
            this.ll.forEach(function (i) {
              return i.Lo(t);
            }),
            void 0 !== t.timeScale && this.Do.eh(t.timeScale),
            void 0 !== t.localization && this.Do.cr(t.localization),
            (t.leftPriceScale || t.rightPriceScale) && this._l.en(),
            this.yl();
        }),
        (t.prototype.Cl = function (t, i) {
          var n = this.Tl(t);
          null !== n && (n.Z.eh(i), this._l.en());
        }),
        (t.prototype.Tl = function (t) {
          for (var i = 0, n = this.ll; i < n.length; i++) {
            var h = n[i],
              s = h.Bo(t);
            if (null !== s)
              return {
                ct: h,
                Z: s,
              };
          }
          return null;
        }),
        (t.prototype.U = function () {
          return this.Do;
        }),
        (t.prototype.Al = function () {
          return this.ll;
        }),
        (t.prototype.El = function () {
          return this.bl;
        }),
        (t.prototype.Ll = function () {
          return this.gl;
        }),
        (t.prototype.Bl = function () {
          return this.B;
        }),
        (t.prototype.Fl = function () {
          return this.dl;
        }),
        (t.prototype.Ol = function (t, i) {
          t.ph(i), this.Vr();
        }),
        (t.prototype.Cr = function (t) {
          (this.$s = t),
            this.Do.Cr(this.$s),
            this.ll.forEach(function (i) {
              return i.Cr(t);
            }),
            this.Vr();
        }),
        (t.prototype.pl = function (t) {
          var i = new Ui(this.Do, this);
          void 0 !== t ? this.ll.splice(t, 0, i) : this.ll.push(i);
          var n = void 0 === t ? this.ll.length - 1 : t,
            h = new jt(3);
          return (
            h.De(n, {
              Ce: 0,
              wh: !0,
            }),
            this.ye(h),
            i
          );
        }),
        (t.prototype.qo = function (t, i, n) {
          t.qo(i, n);
        }),
        (t.prototype.Ho = function (t, i, n) {
          t.Ho(i, n), this._o(), this.kl(this.Vl(t, 2));
        }),
        (t.prototype.Yo = function (t, i) {
          t.Yo(i), this.kl(this.Vl(t, 2));
        }),
        (t.prototype.Ko = function (t, i, n) {
          i.fh() || t.Ko(i, n);
        }),
        (t.prototype.$o = function (t, i, n) {
          i.fh() || (t.$o(i, n), this._o(), this.kl(this.Vl(t, 2)));
        }),
        (t.prototype.Xo = function (t, i) {
          i.fh() || (t.Xo(i), this.kl(this.Vl(t, 2)));
        }),
        (t.prototype.Jo = function (t, i) {
          t.Jo(i), this.kl(this.Vl(t, 2));
        }),
        (t.prototype.zl = function (t) {
          this.Do.Uh(t);
        }),
        (t.prototype.Pl = function (t, i) {
          var n = this.U();
          if (!n.ii() && 0 !== i) {
            var h = n.wt();
            (t = Math.max(1, Math.min(t, h))), n.Ur(t, i), this.Vr();
          }
        }),
        (t.prototype.Il = function (t) {
          this.Wl(0), this.jl(t), this.Rl();
        }),
        (t.prototype.Ul = function (t) {
          this.Do.qh(t), this.Vr();
        }),
        (t.prototype.ql = function () {
          this.Do.Hh(), this.zr();
        }),
        (t.prototype.Wl = function (t) {
          (this.cl = t), this.Do.Yh(t);
        }),
        (t.prototype.jl = function (t) {
          var i = !1;
          return (
            null !== this.cl &&
              Math.abs(t - this.cl) > 20 &&
              ((this.cl = null), (i = !0)),
            this.Do.Kh(t),
            this.Vr(),
            i
          );
        }),
        (t.prototype.Rl = function () {
          this.Do.$h(), this.zr(), (this.cl = null);
        }),
        (t.prototype.ye = function (t) {
          this.wl && this.wl(t), this.bl.ye(), this.zr();
        }),
        (t.prototype.O = function () {
          return this.fl;
        }),
        (t.prototype.Hl = function (t, i, n) {
          this.B.Bi(t, i);
          var h = NaN,
            s = this.Do.Fr(t),
            r = this.Do.br();
          null !== r && (s = Math.min(Math.max(r.es(), s), r.us()));
          var e = n.Ti(),
            u = e.H();
          null !== u && (h = e.Ai(i, u)),
            (h = this.ml.ko(h, s, n)),
            this.B.zi(s, h, n),
            this.Yl(),
            this.dl.en(this.B.R(), {
              x: t,
              y: i,
            });
        }),
        (t.prototype.Kl = function (t, i, n, h) {
          this.B.Bi(t, i);
          var s = NaN,
            r = this.Do.Fr(t),
            e = this.Do.br();
          null !== e && (r = Math.min(Math.max(e.es(), r), e.us()));
          var u = h.Ti(),
            a = u.H();
          null !== a && (s = u.Ai(i, a)),
            (s = this.ml.ko(s, r, h)),
            this.B.zi(r, s, h),
            this.Yl(),
            n &&
              this.dl.en(this.B.R(), {
                x: t,
                y: i,
              });
        }),
        (t.prototype.$l = function () {
          this.Bl().Ii(), this.Yl(), this.dl.en(null, null);
        }),
        (t.prototype._o = function () {
          var t = this.B.ct();
          if (null !== t) {
            var i = this.B.Oi(),
              n = this.B.Vi();
            this.Hl(i, n, t);
          }
        }),
        (t.prototype.Xl = function (t, i) {
          var n = this.Do.ei(0);
          void 0 !== i && this.Do.F(i);
          var h = this.Do.ei(0),
            s = this.Do.Lr(),
            r = this.Do.br();
          if (null !== r && null !== n && null !== h) {
            var e = r.Os(s),
              u = n.Ts > h.Ts;
            if (t > s && !u && !e) {
              var a = t - s;
              this.Do.wr(this.Do.Ir() - a);
            }
          }
          this.Do.Rr(t);
        }),
        (t.prototype.vo = function (t) {
          null !== t && t.Qo();
        }),
        (t.prototype.zu = function (t) {
          var i = this.ll.find(function (i) {
            return i.zh().includes(t);
          });
          return void 0 === i ? null : i;
        }),
        (t.prototype.Vr = function () {
          this.gl.Ri(),
            this.ll.forEach(function (t) {
              return t.Qo();
            }),
            this._o();
        }),
        (t.prototype.an = function () {
          this.ll.forEach(function (t) {
            return t.an();
          }),
            (this.ll.length = 0),
            (this.Si.localization.priceFormatter = void 0),
            (this.Si.localization.timeFormatter = void 0);
        }),
        (t.prototype.Zl = function () {
          return this.Ml;
        }),
        (t.prototype.Wu = function () {
          return this.Ml.I();
        }),
        (t.prototype.Fo = function () {
          return this._l;
        }),
        (t.prototype.Jl = function (t, i) {
          var n = this.ll[0],
            h = this.Gl(i, t, n);
          return (
            this.fl.push(h), 1 === this.fl.length ? this.yl() : this.zr(), h
          );
        }),
        (t.prototype.Ql = function (t) {
          var i = this.zu(t),
            n = this.fl.indexOf(t);
          a(-1 !== n, "Series not found"),
            this.fl.splice(n, 1),
            l(i).Wh(t),
            t.an && t.an();
        }),
        (t.prototype.ao = function (t, i) {
          var n = l(this.zu(t));
          n.Wh(t);
          var h = this.Tl(i);
          if (null === h) {
            var s = t.li();
            n.Ph(t, i, s);
          } else {
            s = h.ct === n ? t.li() : void 0;
            h.ct.Ph(t, i, s);
          }
        }),
        (t.prototype.Gr = function () {
          var t = new jt(2);
          t.Ee(), this.kl(t);
        }),
        (t.prototype.tf = function (t) {
          var i = new jt(2);
          i.Be(t), this.kl(i);
        }),
        (t.prototype.Fe = function () {
          var t = new jt(2);
          t.Fe(), this.kl(t);
        }),
        (t.prototype.dr = function (t) {
          var i = new jt(2);
          i.dr(t), this.kl(i);
        }),
        (t.prototype.wr = function (t) {
          var i = new jt(2);
          i.wr(t), this.kl(i);
        }),
        (t.prototype.if = function () {
          return this.Si.rightPriceScale.visible ? "right" : "left";
        }),
        (t.prototype.Vl = function (t, i) {
          var n = new jt(i);
          if (null !== t) {
            var h = this.ll.indexOf(t);
            n.De(h, {
              Ce: i,
            });
          }
          return n;
        }),
        (t.prototype.xl = function (t, i) {
          return void 0 === i && (i = 2), this.Vl(this.zu(t), i);
        }),
        (t.prototype.kl = function (t) {
          this.wl && this.wl(t), this.bl.ye();
        }),
        (t.prototype.Yl = function () {
          this.kl(new jt(1));
        }),
        (t.prototype.Gl = function (t, i, n) {
          var h = new ji(this, t, i),
            s = void 0 !== t.priceScaleId ? t.priceScaleId : this.if();
          return n.Ph(h, s), zt(s) || h.eh(t), h;
        }),
        t
      );
    })(),
    $i = {
      allowDownsampling: !0,
    };
  var Xi = (function () {
      function t(t, i) {
        var n = this;
        (this._resolutionMediaQueryList = null),
          (this._resolutionListener = function (t) {
            return n._onResolutionChanged();
          }),
          (this._canvasConfiguredListeners = []),
          (this.canvas = t),
          (this._canvasSize = {
            width: this.canvas.clientWidth,
            height: this.canvas.clientHeight,
          }),
          (this._options = i),
          this._configureCanvas(),
          this._installResolutionListener();
      }
      return (
        (t.prototype.destroy = function () {
          (this._canvasConfiguredListeners.length = 0),
            this._uninstallResolutionListener(),
            (this.canvas = null);
        }),
        Object.defineProperty(t.prototype, "canvasSize", {
          get: function () {
            return {
              width: this._canvasSize.width,
              height: this._canvasSize.height,
            };
          },
          enumerable: !0,
          configurable: !0,
        }),
        (t.prototype.resizeCanvas = function (t) {
          (this._canvasSize = {
            width: t.width,
            height: t.height,
          }),
            this._configureCanvas();
        }),
        Object.defineProperty(t.prototype, "pixelRatio", {
          get: function () {
            var t = this.canvas.ownerDocument.defaultView;
            if (null == t)
              throw new Error("No window is associated with the canvas");
            return t.devicePixelRatio > 1 || this._options.allowDownsampling
              ? t.devicePixelRatio
              : 1;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (t.prototype.subscribeCanvasConfigured = function (t) {
          this._canvasConfiguredListeners.push(t);
        }),
        (t.prototype.unsubscribeCanvasConfigured = function (t) {
          this._canvasConfiguredListeners =
            this._canvasConfiguredListeners.filter(function (i) {
              return i != t;
            });
        }),
        (t.prototype._configureCanvas = function () {
          var t = this.pixelRatio;
          (this.canvas.style.width = this._canvasSize.width + "px"),
            (this.canvas.style.height = this._canvasSize.height + "px"),
            (this.canvas.width = this._canvasSize.width * t),
            (this.canvas.height = this._canvasSize.height * t),
            this._emitCanvasConfigured();
        }),
        (t.prototype._emitCanvasConfigured = function () {
          var t = this;
          this._canvasConfiguredListeners.forEach(function (i) {
            return i.call(t);
          });
        }),
        (t.prototype._installResolutionListener = function () {
          if (null !== this._resolutionMediaQueryList)
            throw new Error("Resolution listener is already installed");
          var t = this.canvas.ownerDocument.defaultView;
          if (null == t)
            throw new Error("No window is associated with the canvas");
          var i = t.devicePixelRatio;
          (this._resolutionMediaQueryList = t.matchMedia(
            "all and (resolution: " + i + "dppx)"
          )),
            this._resolutionMediaQueryList.addListener(
              this._resolutionListener
            );
        }),
        (t.prototype._uninstallResolutionListener = function () {
          null !== this._resolutionMediaQueryList &&
            (this._resolutionMediaQueryList.removeListener(
              this._resolutionListener
            ),
            (this._resolutionMediaQueryList = null));
        }),
        (t.prototype._reinstallResolutionListener = function () {
          this._uninstallResolutionListener(),
            this._installResolutionListener();
        }),
        (t.prototype._onResolutionChanged = function () {
          this._configureCanvas(), this._reinstallResolutionListener();
        }),
        t
      );
    })(),
    Zi = (function () {
      function t(t, i) {
        (this.st = t), (this.rt = i);
      }
      return (
        (t.prototype.fn = function (t) {
          return this.st === t.st && this.rt === t.rt;
        }),
        t
      );
    })();

  function Ji(t) {
    return (
      (t.ownerDocument &&
        t.ownerDocument.defaultView &&
        t.ownerDocument.defaultView.devicePixelRatio) ||
      1
    );
  }

  function Gi(t) {
    var i = l(t.getContext("2d"));
    return i.setTransform(1, 0, 0, 1, 0, 0), i;
  }

  function Qi(t) {
    var i = t.createElement("canvas");
    return (
      (function (t) {
        (t.style.userSelect = "none"),
          (t.style.webkitUserSelect = "none"),
          (t.style.msUserSelect = "none"),
          (t.style.MozUserSelect = "none"),
          (t.style.webkitTapHighlightColor = "transparent");
      })(i),
      i
    );
  }

  function tn(t, i) {
    var n = Qi(t),
      h = Ji(n);
    return (
      (n.style.width = i.st + "px"),
      (n.style.height = i.rt + "px"),
      (n.width = i.st * h),
      (n.height = i.rt * h),
      n
    );
  }

  function nn(t, i) {
    var n = Qi(l(t.ownerDocument));
    t.appendChild(n);
    var h = (function (t, i) {
      return void 0 === i && (i = $i), new Xi(t, i);
    })(n);
    return (
      h.resizeCanvas({
        width: i.st,
        height: i.rt,
      }),
      h
    );
  }
  var hn = "undefined" != typeof window;
  var sn = (function () {
    if (!hn) return !1;
    var t =
      !!navigator.maxTouchPoints ||
      !!navigator.msMaxTouchPoints ||
      (!!hn &&
        ("ontouchstart" in window ||
          Boolean(
            window.DocumentTouch && document instanceof window.DocumentTouch
          )));
    return "onorientationchange" in window && t;
  })();
  var rn = (function () {
      if (!hn) return !1;
      var t = /Android/i.test(navigator.userAgent),
        i = /iPhone|iPad|iPod|AppleWebKit.+Mobile/i.test(navigator.userAgent);
      return t || i;
    })(),
    en = (function () {
      function t(t, i, n) {
        (this.nf = 0),
          (this.hf = null),
          (this.sf = null),
          (this.rf = !1),
          (this.ef = null),
          (this.uf = !1),
          (this.af = !1),
          (this.lf = null),
          (this.ff = null),
          (this.cf = null),
          (this.vf = null),
          (this._f = 0),
          (this.df = !1),
          (this.wf = !1),
          (this.Mf = !1),
          (this.bf = t),
          (this.mf = i),
          (this.Si = n),
          this.gf();
      }
      return (
        (t.prototype.an = function () {
          null !== this.lf && (this.lf(), (this.lf = null)),
            null !== this.ff && (this.ff(), (this.ff = null)),
            null !== this.cf && (this.cf(), (this.cf = null)),
            this.pf(),
            this.yf();
        }),
        (t.prototype.kf = function (t) {
          var i = this;
          this.ff && this.ff();
          var n = this.xf.bind(this);
          (this.ff = function () {
            i.bf.removeEventListener("mousemove", n);
          }),
            this.bf.addEventListener("mousemove", n),
            on(t) && this.xf(t);
          var h = this.Nf(t);
          this.Sf(h, this.mf.Df);
        }),
        (t.prototype.yf = function () {
          null !== this.hf && clearTimeout(this.hf),
            (this.nf = 0),
            (this.hf = null);
        }),
        (t.prototype.xf = function (t) {
          if (!this.Mf || on(t)) {
            var i = this.Nf(t);
            this.Sf(i, this.mf.Cf);
          }
        }),
        (t.prototype.Tf = function (t) {
          if ((!("button" in t) || 0 === t.button) && null === this.vf) {
            var i = on(t);
            if (!this.wf || !i) {
              this.df = !0;
              var n = this.Nf(t),
                h = f(this.ef),
                s = Math.abs(h.g - n.Af),
                r = Math.abs(h.p - n.Ef),
                e = s + r > 5;
              if (e || !i) {
                if (e && !this.uf && i) {
                  var u = 0.5 * s,
                    a = r >= u && !this.Si.Lf,
                    o = u > r && !this.Si.Bf;
                  a || o || (this.wf = !0);
                }
                e && ((this.uf = !0), (this.af = !0), i && this.pf()),
                  this.wf || (this.Sf(n, this.mf.Ff), i && ln(t));
              }
            }
          }
        }),
        (t.prototype.Of = function (t) {
          if (!("button" in t) || 0 === t.button) {
            var i = this.Nf(t);
            this.pf(),
              (this.ef = null),
              (this.Mf = !1),
              this.cf && (this.cf(), (this.cf = null)),
              on(t) && this.Vf(t),
              this.Sf(i, this.mf.zf),
              ++this.nf,
              this.hf && this.nf > 1
                ? (this.Sf(i, this.mf.Pf), this.yf())
                : this.af || this.Sf(i, this.mf.If),
              on(t) &&
                (ln(t), this.Vf(t), 0 === t.touches.length && (this.rf = !1));
          }
        }),
        (t.prototype.pf = function () {
          null !== this.sf && (clearTimeout(this.sf), (this.sf = null));
        }),
        (t.prototype.Wf = function (t) {
          if (!("button" in t) || 0 === t.button) {
            var i = this.Nf(t);
            (this.af = !1),
              (this.uf = !1),
              (this.wf = !1),
              on(t) && this.kf(t),
              (this.ef = {
                g: i.Af,
                p: i.Ef,
              }),
              this.cf && (this.cf(), (this.cf = null));
            var n = this.Tf.bind(this),
              h = this.Of.bind(this),
              s = this.bf.ownerDocument.documentElement;
            (this.cf = function () {
              s.removeEventListener("touchmove", n),
                s.removeEventListener("touchend", h),
                s.removeEventListener("mousemove", n),
                s.removeEventListener("mouseup", h);
            }),
              s.addEventListener("touchmove", n, {
                passive: !1,
              }),
              s.addEventListener("touchend", h, {
                passive: !1,
              }),
              this.pf(),
              on(t) && 1 === t.touches.length
                ? (this.sf = setTimeout(this.jf.bind(this, t), 240))
                : (s.addEventListener("mousemove", n),
                  s.addEventListener("mouseup", h)),
              (this.Mf = !0),
              this.Sf(i, this.mf.Rf),
              this.hf ||
                ((this.nf = 0),
                (this.hf = setTimeout(this.yf.bind(this), 500)));
          }
        }),
        (t.prototype.gf = function () {
          var t = this;
          this.bf.addEventListener("mouseenter", this.kf.bind(this)),
            this.bf.addEventListener("touchcancel", this.pf.bind(this));
          var i = this.bf.ownerDocument,
            n = function (i) {
              t.mf.Uf &&
                ((i.composed && t.bf.contains(i.composedPath()[0])) ||
                  (i.target && t.bf.contains(i.target)) ||
                  t.mf.Uf());
            };
          (this.lf = function () {
            i.removeEventListener("mousedown", n),
              i.removeEventListener("touchstart", n);
          }),
            i.addEventListener("mousedown", n),
            i.addEventListener("touchstart", n, {
              passive: !0,
            }),
            this.bf.addEventListener("mouseleave", this.Vf.bind(this)),
            this.bf.addEventListener("touchstart", this.Wf.bind(this), {
              passive: !0,
            }),
            sn || this.bf.addEventListener("mousedown", this.Wf.bind(this)),
            this.qf(),
            this.bf.addEventListener("touchmove", function () {}, {
              passive: !1,
            });
        }),
        (t.prototype.qf = function () {
          var t = this;
          (void 0 === this.mf.Hf &&
            void 0 === this.mf.Yf &&
            void 0 === this.mf.Kf) ||
            (this.bf.addEventListener(
              "touchstart",
              function (i) {
                return t.$f(i.touches);
              },
              {
                passive: !0,
              }
            ),
            this.bf.addEventListener(
              "touchmove",
              function (i) {
                if (
                  2 === i.touches.length &&
                  null !== t.vf &&
                  void 0 !== t.mf.Yf
                ) {
                  var n = an(i.touches[0], i.touches[1]) / t._f;
                  t.mf.Yf(t.vf, n), ln(i);
                }
              },
              {
                passive: !1,
              }
            ),
            this.bf.addEventListener("touchend", function (i) {
              t.$f(i.touches);
            }));
        }),
        (t.prototype.$f = function (t) {
          1 === t.length && (this.df = !1),
            2 !== t.length || this.df || this.rf ? this.Xf() : this.Zf(t);
        }),
        (t.prototype.Zf = function (t) {
          var i = un(this.bf);
          (this.vf = {
            g: (t[0].clientX - i.left + (t[1].clientX - i.left)) / 2,
            p: (t[0].clientY - i.top + (t[1].clientY - i.top)) / 2,
          }),
            (this._f = an(t[0], t[1])),
            void 0 !== this.mf.Hf && this.mf.Hf(),
            this.pf();
        }),
        (t.prototype.Xf = function () {
          null !== this.vf &&
            ((this.vf = null), void 0 !== this.mf.Kf && this.mf.Kf());
        }),
        (t.prototype.Vf = function (t) {
          this.ff && this.ff();
          var i = this.Nf(t);
          this.Sf(i, this.mf.Jf);
        }),
        (t.prototype.jf = function (t) {
          var i = this.Nf(t);
          this.Sf(i, this.mf.Gf), (this.af = !0), (this.rf = !0);
        }),
        (t.prototype.Sf = function (t, i) {
          i && i.call(this.mf, t);
        }),
        (t.prototype.Nf = function (t) {
          var i;
          i =
            "touches" in t && t.touches.length
              ? t.touches[0]
              : "changedTouches" in t && t.changedTouches.length
              ? t.changedTouches[0]
              : t;
          var n = un(this.bf);
          return {
            Qf: i.clientX,
            tc: i.clientY,
            Af: i.pageX,
            Ef: i.pageY,
            ic: i.screenX,
            nc: i.screenY,
            hc: i.clientX - n.left,
            sc: i.clientY - n.top,
            rc: t.ctrlKey,
            ec: t.altKey,
            uc: t.shiftKey,
            ac: t.metaKey,
            Le: t.type.startsWith("mouse") ? "mouse" : "touch",
            oc: t.view,
          };
        }),
        t
      );
    })();

  function un(t) {
    return (
      t.getBoundingClientRect() || {
        left: 0,
        top: 0,
      }
    );
  }

  function an(t, i) {
    var n = t.clientX - i.clientX,
      h = t.clientY - i.clientY;
    return Math.sqrt(n * n + h * h);
  }

  function on(t) {
    return Boolean(t.touches);
  }

  function ln(t) {
    t.cancelable && t.preventDefault();
  }
  var fn = (function () {
      function t(t, i, n, h) {
        (this.Bu = new fi(200)),
          (this.le = 0),
          (this.lc = ""),
          (this.qu = ""),
          (this.Tu = []),
          (this.fc = new Map()),
          (this.le = t),
          (this.lc = i),
          (this.qu = Ot(t, n, h));
      }
      return (
        (t.prototype.an = function () {
          this.Bu.Au(), (this.Tu = []), this.fc.clear();
        }),
        (t.prototype.cc = function (t, i, n, h, s) {
          var r = this.vc(t, i);
          if ("left" !== s) {
            var e = Ji(t.canvas);
            n -= Math.floor(r._c * e);
          }
          (h -= Math.floor(r.Mt / 2)), t.drawImage(r.dc, n, h, r.wt, r.Mt);
        }),
        (t.prototype.vc = function (t, i) {
          var n,
            h = this;
          if (this.fc.has(i)) n = o(this.fc.get(i));
          else {
            if (this.Tu.length >= 200) {
              var s = o(this.Tu.shift());
              this.fc.delete(s);
            }
            var r = Ji(t.canvas),
              e = Math.ceil(this.le / 4.5),
              u = Math.round(this.le / 10),
              a = Math.ceil(this.Bu.Ot(t, i)),
              l = it(Math.round(a + 2 * e)),
              f = it(this.le + 2 * e),
              c = tn(document, new Zi(l, f));
            (n = {
              Ft: i,
              _c: Math.round(Math.max(1, a)),
              wt: Math.ceil(l * r),
              Mt: Math.ceil(f * r),
              dc: c,
            }),
              0 !== a && (this.Tu.push(n.Ft), this.fc.set(n.Ft, n)),
              O((t = Gi(n.dc)), r, function () {
                (t.font = h.qu),
                  (t.fillStyle = h.lc),
                  t.fillText(i, 0, f - e - u);
              });
          }
          return n;
        }),
        t
      );
    })(),
    cn = (function () {
      function t(t, i, n, h) {
        var s = this;
        (this.Qt = null),
          (this.wc = null),
          (this.Mc = null),
          (this.bc = !1),
          (this.mc = new fi(50)),
          (this.gc = new fn(11, "#000")),
          (this.lc = null),
          (this.qu = null),
          (this.yc = 0),
          (this.kc = function () {
            s.xc(s.Ml.I()), s.wi.Nc().vt().zr();
          }),
          (this.Sc = function () {
            s.wi.Nc().vt().zr();
          }),
          (this.wi = t),
          (this.Si = i),
          (this.Ml = n),
          (this.Dc = "left" === h),
          (this.Cc = document.createElement("div")),
          (this.Cc.style.height = "100%"),
          (this.Cc.style.overflow = "hidden"),
          (this.Cc.style.width = "25px"),
          (this.Cc.style.left = "0"),
          (this.Cc.style.position = "relative"),
          (this.Tc = nn(this.Cc, new Zi(16, 16))),
          this.Tc.subscribeCanvasConfigured(this.kc);
        var r = this.Tc.canvas;
        (r.style.position = "absolute"),
          (r.style.zIndex = "1"),
          (r.style.left = "0"),
          (r.style.top = "0"),
          (this.Ac = nn(this.Cc, new Zi(16, 16))),
          this.Ac.subscribeCanvasConfigured(this.Sc);
        var e = this.Ac.canvas;
        (e.style.position = "absolute"),
          (e.style.zIndex = "2"),
          (e.style.left = "0"),
          (e.style.top = "0");
        var u = {
          Rf: this.Ec.bind(this),
          Ff: this.Lc.bind(this),
          Uf: this.Bc.bind(this),
          zf: this.Fc.bind(this),
          Pf: this.Oc.bind(this),
          Df: this.Vc.bind(this),
          Jf: this.zc.bind(this),
        };
        this.Pc = new en(this.Ac.canvas, u, {
          Lf: !1,
          Bf: !0,
        });
      }
      return (
        (t.prototype.an = function () {
          this.Pc.an(),
            this.Ac.unsubscribeCanvasConfigured(this.Sc),
            this.Ac.destroy(),
            this.Tc.unsubscribeCanvasConfigured(this.kc),
            this.Tc.destroy(),
            null !== this.Qt && this.Qt.Rh().rn(this),
            (this.Qt = null),
            null !== this.Mc && (clearTimeout(this.Mc), (this.Mc = null)),
            this.gc.an();
        }),
        (t.prototype.Ic = function () {
          return this.Cc;
        }),
        (t.prototype.Wc = function () {
          return this.Si.backgroundColor;
        }),
        (t.prototype.S = function () {
          return l(this.Qt).I().borderColor;
        }),
        (t.prototype.jc = function () {
          return this.Si.textColor;
        }),
        (t.prototype.zt = function () {
          return this.Si.fontSize;
        }),
        (t.prototype.Rc = function () {
          return Ot(this.zt(), this.Si.fontFamily);
        }),
        (t.prototype.Uc = function () {
          var t = this.Ml.I(),
            i = this.lc !== t.ut,
            n = this.qu !== t.Nt;
          return (
            (i || n) && (this.xc(t), (this.lc = t.ut)),
            n && (this.mc.Au(), (this.qu = t.Nt)),
            t
          );
        }),
        (t.prototype.qc = function () {
          if (null === this.Qt) return 0;
          var t = 34,
            i = this.Uc(),
            n = Gi(this.Tc.canvas),
            h = this.Qt.On();
          (n.font = this.Rc()),
            h.length > 0 &&
              (t = Math.max(
                this.mc.Ot(n, h[0].Ln),
                this.mc.Ot(n, h[h.length - 1].Ln)
              ));
          for (var s = this.Hc(), r = s.length; r--; ) {
            var e = this.mc.Ot(n, s[r].Ft());
            e > t && (t = e);
          }
          var u = Math.ceil(i.Tt + i.Ct + i.Lt + i.Bt + t);
          return (u += u % 2);
        }),
        (t.prototype.Yc = function (t) {
          if (t.st < 0 || t.rt < 0)
            throw new Error(
              "Try to set invalid size to PriceAxisWidget " + JSON.stringify(t)
            );
          (null !== this.wc && this.wc.fn(t)) ||
            ((this.wc = t),
            this.Tc.resizeCanvas({
              width: t.st,
              height: t.rt,
            }),
            this.Ac.resizeCanvas({
              width: t.st,
              height: t.rt,
            }),
            (this.Cc.style.width = t.st + "px"),
            (this.Cc.style.height = t.rt + "px"),
            (this.Cc.style.minWidth = t.st + "px"));
        }),
        (t.prototype.Kc = function () {
          return l(this.wc).st;
        }),
        (t.prototype.ci = function (t) {
          this.Qt !== t &&
            (null !== this.Qt && this.Qt.Rh().rn(this),
            (this.Qt = t),
            t.Rh().Qi(this.Hn.bind(this), this));
        }),
        (t.prototype.Z = function () {
          return this.Qt;
        }),
        (t.prototype.Au = function () {
          var t = this.wi.$c();
          this.wi.Nc().vt().Jo(t, l(this.Z()));
        }),
        (t.prototype.Xc = function (t) {
          if (null !== this.wc) {
            if (1 !== t) {
              var i = Gi(this.Tc.canvas);
              this.Zc(),
                this.Jc(i, this.Tc.pixelRatio),
                this.wu(i, this.Tc.pixelRatio),
                this.Gc(i, this.Tc.pixelRatio),
                this.Qc(i, this.Tc.pixelRatio);
            }
            var n = Gi(this.Ac.canvas),
              h = this.wc.st,
              s = this.wc.rt;
            O(n, this.Ac.pixelRatio, function () {
              n.clearRect(0, 0, h, s);
            }),
              this.tv(n, this.Ac.pixelRatio);
          }
        }),
        (t.prototype.iv = function () {
          return this.Tc.canvas;
        }),
        (t.prototype.Ec = function (t) {
          if (
            null !== this.Qt &&
            !this.Qt.ii() &&
            this.wi.Nc().I().handleScale.axisPressedMouseMove.price
          ) {
            var i = this.wi.Nc().vt(),
              n = this.wi.$c();
            (this.bc = !0), i.qo(n, this.Qt, t.sc);
          }
        }),
        (t.prototype.Lc = function (t) {
          if (
            null !== this.Qt &&
            this.wi.Nc().I().handleScale.axisPressedMouseMove.price
          ) {
            var i = this.wi.Nc().vt(),
              n = this.wi.$c(),
              h = this.Qt;
            i.Ho(n, h, t.sc);
          }
        }),
        (t.prototype.Bc = function () {
          if (
            null !== this.Qt &&
            this.wi.Nc().I().handleScale.axisPressedMouseMove.price
          ) {
            var t = this.wi.Nc().vt(),
              i = this.wi.$c(),
              n = this.Qt;
            this.bc && ((this.bc = !1), t.Yo(i, n));
          }
        }),
        (t.prototype.Fc = function (t) {
          if (
            null !== this.Qt &&
            this.wi.Nc().I().handleScale.axisPressedMouseMove.price
          ) {
            var i = this.wi.Nc().vt(),
              n = this.wi.$c();
            (this.bc = !1), i.Yo(n, this.Qt);
          }
        }),
        (t.prototype.Oc = function (t) {
          this.wi.Nc().I().handleScale.axisDoubleClickReset && this.Au();
        }),
        (t.prototype.Vc = function (t) {
          null !== this.Qt &&
            (!this.wi.Nc().vt().I().handleScale.axisPressedMouseMove.price ||
              this.Qt._h() ||
              this.Qt.dh() ||
              this.nv(1));
        }),
        (t.prototype.zc = function (t) {
          this.nv(0);
        }),
        (t.prototype.Hc = function () {
          var t = this,
            i = [],
            n = null === this.Qt ? void 0 : this.Qt;
          return (
            (function (h) {
              for (var s = 0; s < h.length; ++s)
                for (var r = h[s].vi(t.wi.$c(), n), e = 0; e < r.length; e++)
                  i.push(r[e]);
            })(this.wi.$c().zh()),
            i
          );
        }),
        (t.prototype.Jc = function (t, i) {
          var n = this;
          if (null !== this.wc) {
            var h = this.wc.st,
              s = this.wc.rt;
            O(t, i, function () {
              V(t, 0, 0, h, s, n.Wc());
            });
          }
        }),
        (t.prototype.wu = function (t, i) {
          if (
            null !== this.wc &&
            null !== this.Qt &&
            this.Qt.I().borderVisible
          ) {
            t.save(), (t.fillStyle = this.S());
            var n,
              h = Math.max(1, Math.floor(this.Uc().Tt * i));
            (n = this.Dc ? Math.floor(this.wc.st * i) - h : 0),
              t.fillRect(n, 0, h, Math.ceil(this.wc.rt * i)),
              t.restore();
          }
        }),
        (t.prototype.Gc = function (t, i) {
          if (null !== this.wc && null !== this.Qt) {
            var n = this.Qt.On();
            t.save(),
              (t.strokeStyle = this.S()),
              (t.font = this.Rc()),
              (t.fillStyle = this.S());
            var h = this.Uc(),
              s = this.Qt.I().borderVisible && this.Qt.I().drawTicks,
              r = this.Dc
                ? Math.floor((this.wc.st - h.Ct) * i - h.Tt * i)
                : Math.floor(h.Tt * i),
              e = this.Dc
                ? Math.round(r - h.Lt * i)
                : Math.round(r + h.Ct * i + h.Lt * i),
              u = this.Dc ? "right" : "left",
              a = Math.max(1, Math.floor(i)),
              o = Math.floor(0.5 * i);
            if (s) {
              var l = Math.round(h.Ct * i);
              t.beginPath();
              for (var f = 0, c = n; f < c.length; f++) {
                var v = c[f];
                t.rect(r, Math.round(v.En * i) - o, l, a);
              }
              t.fill();
            }
            t.fillStyle = this.jc();
            for (var _ = 0, d = n; _ < d.length; _++) {
              v = d[_];
              this.gc.cc(t, v.Ln, e, Math.round(v.En * i), u);
            }
            t.restore();
          }
        }),
        (t.prototype.Zc = function () {
          if (null !== this.wc && null !== this.Qt) {
            var t = this.wc.rt / 2,
              i = [],
              n = this.Qt.zh().slice(),
              h = this.wi.$c(),
              s = this.Uc();
            this.Qt === h.Ti() &&
              this.wi
                .$c()
                .zh()
                .forEach(function (t) {
                  h.Pu(t) && n.push(t);
                });
            var r = this.Qt.Vh()[0],
              e = this.Qt;
            n.forEach(function (n) {
              var s = n.vi(h, e);
              s.forEach(function (t) {
                t.$t(null), t.Xt() && i.push(t);
              }),
                r === n && s.length > 0 && (t = s[0].Pt());
            });
            var u = i.filter(function (i) {
                return i.Pt() <= t;
              }),
              a = i.filter(function (i) {
                return i.Pt() > t;
              });
            if (
              (u.sort(function (t, i) {
                return i.Pt() - t.Pt();
              }),
              u.length && a.length && a.push(u[0]),
              a.sort(function (t, i) {
                return t.Pt() - i.Pt();
              }),
              i.forEach(function (t) {
                return t.$t(t.Pt());
              }),
              this.Qt.I().alignLabels)
            ) {
              for (var o = 1; o < u.length; o++) {
                var l = u[o],
                  f = (v = u[o - 1]).Mt(s, !1);
                l.Pt() > (_ = v.Kt()) - f && l.$t(_ - f);
              }
              for (var c = 1; c < a.length; c++) {
                var v, _;
                (l = a[c]), (f = (v = a[c - 1]).Mt(s, !0));
                l.Pt() < (_ = v.Kt()) + f && l.$t(_ + f);
              }
            }
          }
        }),
        (t.prototype.Qc = function (t, i) {
          var n = this;
          if (null !== this.wc) {
            t.save();
            var h = this.wc,
              s = this.Hc(),
              r = this.Uc(),
              e = this.Dc ? "right" : "left";
            s.forEach(function (s) {
              if (s.Zt()) {
                var u = s.W(l(n.Qt));
                t.save(), u.h(t, r, n.mc, h.st, e, i), t.restore();
              }
            }),
              t.restore();
          }
        }),
        (t.prototype.tv = function (t, i) {
          var n = this;
          if (null !== this.wc && null !== this.Qt) {
            t.save();
            var h = this.wc,
              s = this.wi.Nc().vt(),
              r = [],
              e = this.wi.$c(),
              u = s.Bl().vi(e, this.Qt);
            u.length && r.push(u);
            var a = this.Uc(),
              o = this.Dc ? "right" : "left";
            r.forEach(function (s) {
              s.forEach(function (s) {
                t.save(), s.W(l(n.Qt)).h(t, a, n.mc, h.st, o, i), t.restore();
              });
            }),
              t.restore();
          }
        }),
        (t.prototype.nv = function (t) {
          this.Cc.style.cursor = 1 === t ? "ns-resize" : "default";
        }),
        (t.prototype.Hn = function () {
          var t = this,
            i = this.qc();
          if (this.yc < i) {
            var n = this.wi.Nc();
            null === this.Mc &&
              (this.Mc = setTimeout(function () {
                n && n.vt().yl(), (t.Mc = null);
              }, 100));
          }
          this.yc = i;
        }),
        (t.prototype.xc = function (t) {
          this.gc.an(), (this.gc = new fn(t.zt, t.ut, t.oe));
        }),
        t
      );
    })(),
    vn = rn,
    _n = (function () {
      function t(t, i) {
        var n = this;
        (this.wc = new Zi(0, 0)),
          (this.hv = null),
          (this.sv = null),
          (this.rv = null),
          (this.ev = !1),
          (this.uv = new Z()),
          (this.av = 0),
          (this.ov = !1),
          (this.lv = null),
          (this.fv = !1),
          (this.cv = null),
          (this.kc = function () {
            return n.vv && n.ri().zr();
          }),
          (this.Sc = function () {
            return n.vv && n.ri().zr();
          }),
          (this._v = t),
          (this.vv = i),
          this.vv.tl().Qi(this.dv.bind(this), this, !0),
          (this.wv = document.createElement("td")),
          (this.wv.style.padding = "0"),
          (this.wv.style.position = "relative");
        var h = document.createElement("div");
        (h.style.width = "100%"),
          (h.style.height = "100%"),
          (h.style.position = "relative"),
          (h.style.overflow = "hidden"),
          (this.Mv = document.createElement("td")),
          (this.Mv.style.padding = "0"),
          (this.bv = document.createElement("td")),
          (this.bv.style.padding = "0"),
          this.wv.appendChild(h),
          (this.Tc = nn(h, new Zi(16, 16))),
          this.Tc.subscribeCanvasConfigured(this.kc);
        var s = this.Tc.canvas;
        (s.style.position = "absolute"),
          (s.style.zIndex = "1"),
          (s.style.left = "0"),
          (s.style.top = "0"),
          (this.Ac = nn(h, new Zi(16, 16))),
          this.Ac.subscribeCanvasConfigured(this.Sc);
        var r = this.Ac.canvas;
        (r.style.position = "absolute"),
          (r.style.zIndex = "2"),
          (r.style.left = "0"),
          (r.style.top = "0"),
          (this.mv = document.createElement("tr")),
          this.mv.appendChild(this.Mv),
          this.mv.appendChild(this.wv),
          this.mv.appendChild(this.bv),
          this.gv();
        var e = this.Nc().I().handleScroll;
        this.Pc = new en(this.Ac.canvas, this, {
          Lf: !e.vertTouchDrag,
          Bf: !e.horzTouchDrag,
        });
      }
      return (
        (t.prototype.an = function () {
          null !== this.hv && this.hv.an(),
            null !== this.sv && this.sv.an(),
            this.Ac.unsubscribeCanvasConfigured(this.Sc),
            this.Ac.destroy(),
            this.Tc.unsubscribeCanvasConfigured(this.kc),
            this.Tc.destroy(),
            null !== this.vv && this.vv.tl().rn(this),
            this.Pc.an();
        }),
        (t.prototype.$c = function () {
          return l(this.vv);
        }),
        (t.prototype.pv = function (i) {
          null !== this.vv && this.vv.tl().rn(this),
            (this.vv = i),
            null !== this.vv &&
              this.vv.tl().Qi(t.prototype.dv.bind(this), this, !0),
            this.gv();
        }),
        (t.prototype.Nc = function () {
          return this._v;
        }),
        (t.prototype.Ic = function () {
          return this.mv;
        }),
        (t.prototype.gv = function () {
          if (null !== this.vv && (this.yv(), 0 !== this.ri().O().length)) {
            if (null !== this.hv) {
              var t = this.vv.Ro();
              this.hv.ci(l(t));
            }
            if (null !== this.sv) {
              var i = this.vv.Uo();
              this.sv.ci(l(i));
            }
          }
        }),
        (t.prototype.Oo = function () {
          return null !== this.vv ? this.vv.Oo() : 0;
        }),
        (t.prototype.Vo = function (t) {
          this.vv && this.vv.Vo(t);
        }),
        (t.prototype.Df = function (t) {
          if (this.vv) {
            var i = t.hc,
              n = t.sc;
            sn || this.kv(i, n);
          }
        }),
        (t.prototype.Rf = function (t) {
          if (((this.ov = !1), (this.fv = null !== this.lv), this.vv)) {
            if (
              document.activeElement !== document.body &&
              document.activeElement !== document.documentElement
            )
              l(document.activeElement).blur();
            else {
              var i = document.getSelection();
              null !== i && i.removeAllRanges();
            }
            var n = this.ri();
            if (!this.vv.Ti().ii() && !n.U().ii()) {
              if (null !== this.lv) {
                var h = n.Bl();
                (this.cv = {
                  x: h.bt(),
                  y: h.gt(),
                }),
                  (this.lv = {
                    x: t.hc,
                    y: t.sc,
                  });
              }
              sn || this.kv(t.hc, t.sc);
            }
          }
        }),
        (t.prototype.Cf = function (t) {
          if (this.vv) {
            var i = t.hc,
              n = t.sc;
            if ((this.xv() && this.Nv(), !sn)) {
              this.kv(i, n);
              var h = this.Hu(i, n);
              this.ri().Sl(
                h && {
                  Dl: h.Dl,
                  Sv: h.Sv,
                }
              ),
                null !== h && void 0 !== h.oc.Dv && h.oc.Dv(i, n);
            }
          }
        }),
        (t.prototype.If = function (t) {
          if (null !== this.vv) {
            var i = t.hc,
              n = t.sc,
              h = this.Hu(i, n);
            if (
              (null !== h && void 0 !== h.oc.Cv && h.oc.Cv(i, n), this.uv.un())
            ) {
              var s = this.ri().Bl().R();
              this.uv.en(s, {
                x: i,
                y: n,
              });
            }
            this.Tv();
          }
        }),
        (t.prototype.Ff = function (t) {
          if (null !== this.vv) {
            var i = this.ri(),
              n = t.hc,
              h = t.sc;
            if (null !== this.lv) {
              this.fv = !1;
              var s = l(this.cv),
                r = s.x + (n - this.lv.x),
                e = s.y + (h - this.lv.y);
              this.kv(r, e);
            } else this.xv() || this.kv(n, h);
            if (!i.U().ii()) {
              var u = this._v.I().handleScroll;
              if (
                (u.pressedMouseMove && "touch" !== t.Le) ||
                ((u.horzTouchDrag || u.vertTouchDrag) && "mouse" !== t.Le)
              ) {
                var a = this.vv.Ti();
                null !== this.rv ||
                  this.Av() ||
                  (this.rv = {
                    x: t.Qf,
                    y: t.tc,
                  }),
                  null === this.rv ||
                    (this.rv.x === t.Qf && this.rv.y === t.tc) ||
                    this.ev ||
                    (a.ii() || i.Ko(this.vv, a, t.sc),
                    i.Wl(t.hc),
                    (this.ev = !0)),
                  this.ev && (a.ii() || i.$o(this.vv, a, t.sc), i.jl(t.hc));
              }
            }
          }
        }),
        (t.prototype.zf = function (t) {
          if (null !== this.vv) {
            this.ov = !1;
            var i = this.ri();
            if (this.ev) {
              var n = this.vv.Ti();
              i.Xo(this.vv, n), i.Rl(), (this.rv = null), (this.ev = !1);
            }
          }
        }),
        (t.prototype.Gf = function (t) {
          if (((this.ov = !0), null === this.lv && vn)) {
            var i = {
              x: t.hc,
              y: t.sc,
            };
            this.Ev(i, i);
          }
        }),
        (t.prototype.Jf = function (t) {
          null !== this.vv && (this.vv.vt().Sl(null), rn || this.Nv());
        }),
        (t.prototype.Lv = function () {
          return this.uv;
        }),
        (t.prototype.Hf = function () {
          this.av = 1;
        }),
        (t.prototype.Yf = function (t, i) {
          if (this._v.I().handleScale.pinch) {
            var n = 5 * (i - this.av);
            (this.av = i), this.ri().Pl(t.g, n);
          }
        }),
        (t.prototype.Hu = function (t, i) {
          var n = this.vv;
          if (null === n) return null;
          for (var h = 0, s = n.zh(); h < s.length; h++) {
            var r = s[h],
              e = this.Bv(r._i(n), t, i);
            if (null !== e)
              return {
                Dl: r,
                oc: e.oc,
                Sv: e.Sv,
              };
          }
          return null;
        }),
        (t.prototype.Fv = function (t, i) {
          l("left" === i ? this.hv : this.sv).Yc(new Zi(t, this.wc.rt));
        }),
        (t.prototype.Ov = function () {
          return this.wc;
        }),
        (t.prototype.Yc = function (t) {
          if (t.st < 0 || t.rt < 0)
            throw new Error(
              "Try to set invalid size to PaneWidget " + JSON.stringify(t)
            );
          this.wc.fn(t) ||
            ((this.wc = t),
            this.Tc.resizeCanvas({
              width: t.st,
              height: t.rt,
            }),
            this.Ac.resizeCanvas({
              width: t.st,
              height: t.rt,
            }),
            (this.wv.style.width = t.st + "px"),
            (this.wv.style.height = t.rt + "px"));
        }),
        (t.prototype.Vv = function () {
          var t = l(this.vv);
          t.jo(t.Ro()), t.jo(t.Uo());
          for (var i = 0, n = t.Vh(); i < n.length; i++) {
            var h = n[i];
            if (t.Pu(h)) {
              var s = h.Z();
              null !== s && t.jo(s), h.Ri();
            }
          }
        }),
        (t.prototype.iv = function () {
          return this.Tc.canvas;
        }),
        (t.prototype.Xc = function (t) {
          if (0 !== t && null !== this.vv) {
            if (
              (t > 1 && this.Vv(),
              null !== this.hv && this.hv.Xc(t),
              null !== this.sv && this.sv.Xc(t),
              1 !== t)
            ) {
              var i = Gi(this.Tc.canvas);
              i.save(),
                this.Jc(i, this.zv(), this.Tc.pixelRatio),
                this.vv &&
                  (this.Pv(i, this.Tc.pixelRatio),
                  this.Iv(i, this.Tc.pixelRatio),
                  this.Wv(i, this.Tc.pixelRatio)),
                i.restore();
            }
            var n = Gi(this.Ac.canvas);
            n.clearRect(
              0,
              0,
              Math.ceil(this.wc.st * this.Ac.pixelRatio),
              Math.ceil(this.wc.rt * this.Ac.pixelRatio)
            ),
              this.jv(n, this.Ac.pixelRatio);
          }
        }),
        (t.prototype.Rv = function () {
          return this.hv;
        }),
        (t.prototype.Uv = function () {
          return this.sv;
        }),
        (t.prototype.zv = function () {
          return this._v.I().layout.backgroundColor;
        }),
        (t.prototype.dv = function () {
          null !== this.vv && this.vv.tl().rn(this), (this.vv = null);
        }),
        (t.prototype.Jc = function (t, i, n) {
          var h = this;
          O(t, n, function () {
            V(t, 0, 0, h.wc.st, h.wc.rt, i);
          });
        }),
        (t.prototype.Pv = function (t, i) {
          for (
            var n = l(this.vv),
              h = this.ri().El()._i(n),
              s = n.Mt(),
              r = n.wt(),
              e = 0,
              u = h;
            e < u.length;
            e++
          ) {
            var a = u[e];
            t.save();
            var o = a.W(s, r);
            null !== o && o.h(t, i, !1), t.restore();
          }
        }),
        (t.prototype.Iv = function (t, i) {
          var n = this.ri().Ll();
          this.qv(n, t, i), this.Hv(n, t, i);
        }),
        (t.prototype.jv = function (t, i) {
          this.Hv(this.ri().Bl(), t, i);
        }),
        (t.prototype.Wv = function (t, i) {
          for (var n = l(this.vv).zh(), h = 0, s = n; h < s.length; h++) {
            var r = s[h];
            this.qv(r, t, i);
          }
          for (var e = 0, u = n; e < u.length; e++) {
            r = u[e];
            this.Hv(r, t, i);
          }
        }),
        (t.prototype.Hv = function (t, i, n) {
          for (
            var h = l(this.vv),
              s = t._i(h),
              r = h.Mt(),
              e = h.wt(),
              u = h.vt().Nl(),
              a = null !== u && u.Dl === t,
              o = null !== u && a && void 0 !== u.Sv ? u.Sv.Yu : void 0,
              f = 0,
              c = s;
            f < c.length;
            f++
          ) {
            var v = c[f].W(r, e);
            null !== v && (i.save(), v.h(i, n, a, o), i.restore());
          }
        }),
        (t.prototype.qv = function (t, i, n) {
          for (
            var h = l(this.vv),
              s = t._i(h),
              r = h.Mt(),
              e = h.wt(),
              u = h.vt().Nl(),
              a = null !== u && u.Dl === t,
              o = null !== u && a && void 0 !== u.Sv ? u.Sv.Yu : void 0,
              f = 0,
              c = s;
            f < c.length;
            f++
          ) {
            var v = c[f].W(r, e);
            null !== v &&
              void 0 !== v.o &&
              (i.save(), v.o(i, n, a, o), i.restore());
          }
        }),
        (t.prototype.Bv = function (t, i, n) {
          for (var h = 0, s = t; h < s.length; h++) {
            var r = s[h],
              e = r.W(this.wc.rt, this.wc.st);
            if (null !== e && e.Hu) {
              var u = e.Hu(i, n);
              if (null !== u)
                return {
                  oc: r,
                  Sv: u,
                };
            }
          }
          return null;
        }),
        (t.prototype.yv = function () {
          if (null !== this.vv) {
            var t = this._v;
            t.I().leftPriceScale.visible ||
              null === this.hv ||
              (this.Mv.removeChild(this.hv.Ic()),
              this.hv.an(),
              (this.hv = null)),
              t.I().rightPriceScale.visible ||
                null === this.sv ||
                (this.bv.removeChild(this.sv.Ic()),
                this.sv.an(),
                (this.sv = null));
            var i = t.vt().Zl();
            t.I().leftPriceScale.visible &&
              null === this.hv &&
              ((this.hv = new cn(this, t.I().layout, i, "left")),
              this.Mv.appendChild(this.hv.Ic())),
              t.I().rightPriceScale.visible &&
                null === this.sv &&
                ((this.sv = new cn(this, t.I().layout, i, "right")),
                this.bv.appendChild(this.sv.Ic()));
          }
        }),
        (t.prototype.xv = function () {
          return vn && null === this.lv;
        }),
        (t.prototype.Av = function () {
          return (vn && this.ov) || null !== this.lv;
        }),
        (t.prototype.Yv = function (t) {
          return Math.max(0, Math.min(t, this.wc.st - 1));
        }),
        (t.prototype.Kv = function (t) {
          return Math.max(0, Math.min(t, this.wc.rt - 1));
        }),
        (t.prototype.kv = function (t, i) {
          this.ri().Hl(this.Yv(t), this.Kv(i), l(this.vv));
        }),
        (t.prototype.$v = function (t, i, n) {
          if (this.vv)
            if (n) {
              var h = t,
                s = i;
              sn || this.Xv(h, s);
            } else this.vv.vt().Sl(null), rn || this.Nv();
        }),
        (t.prototype.Xv = function (t, i) {
          this.ri().Kl(this.Yv(t), this.Kv(i), !1, l(this.vv));
        }),
        (t.prototype.Nv = function () {
          this.ri().$l();
        }),
        (t.prototype.Tv = function () {
          this.fv && ((this.lv = null), this.Nv());
        }),
        (t.prototype.Ev = function (t, i) {
          (this.lv = t), (this.fv = !1), this.kv(i.x, i.y);
          var n = this.ri().Bl();
          this.cv = {
            x: n.bt(),
            y: n.gt(),
          };
        }),
        (t.prototype.ri = function () {
          return this._v.vt();
        }),
        t
      );
    })(),
    dn = (function () {
      function t(t, i, n, h) {
        var s = this;
        (this.A = !0),
          (this.wc = new Zi(0, 0)),
          (this.kc = function () {
            return s.Xc(3);
          }),
          (this.Dc = "left" === t),
          (this.Ml = n.Zl),
          (this.Si = i),
          (this.Zv = h),
          (this.Cc = document.createElement("div")),
          (this.Cc.style.width = "25px"),
          (this.Cc.style.height = "100%"),
          (this.Cc.style.overflow = "hidden"),
          (this.Tc = nn(this.Cc, new Zi(16, 16))),
          this.Tc.subscribeCanvasConfigured(this.kc);
      }
      return (
        (t.prototype.an = function () {
          this.Tc.unsubscribeCanvasConfigured(this.kc), this.Tc.destroy();
        }),
        (t.prototype.Ic = function () {
          return this.Cc;
        }),
        (t.prototype.Ov = function () {
          return this.wc;
        }),
        (t.prototype.Yc = function (t) {
          if (t.st < 0 || t.rt < 0)
            throw new Error(
              "Try to set invalid size to PriceAxisStub " + JSON.stringify(t)
            );
          this.wc.fn(t) ||
            ((this.wc = t),
            this.Tc.resizeCanvas({
              width: t.st,
              height: t.rt,
            }),
            (this.Cc.style.width = t.st + "px"),
            (this.Cc.style.minWidth = t.st + "px"),
            (this.Cc.style.height = t.rt + "px"),
            (this.A = !0));
        }),
        (t.prototype.Xc = function (t) {
          if ((!(t < 3) || this.A) && 0 !== this.wc.st && 0 !== this.wc.rt) {
            this.A = !1;
            var i = Gi(this.Tc.canvas);
            this.Jc(i, this.Tc.pixelRatio), this.wu(i, this.Tc.pixelRatio);
          }
        }),
        (t.prototype.iv = function () {
          return this.Tc.canvas;
        }),
        (t.prototype.wu = function (t, i) {
          if (this.Zv()) {
            var n = this.wc.st;
            t.save(), (t.fillStyle = this.Si.timeScale.borderColor);
            var h = Math.floor(this.Ml.I().Tt * i),
              s = this.Dc ? Math.round(n * i) - h : 0;
            t.fillRect(s, 0, h, h), t.restore();
          }
        }),
        (t.prototype.Jc = function (t, i) {
          var n = this;
          O(t, i, function () {
            V(t, 0, 0, n.wc.st, n.wc.rt, n.Si.layout.backgroundColor);
          });
        }),
        t
      );
    })();

  function wn(t, i) {
    return t.Ws > i.Ws ? t : i;
  }
  var Mn = (function () {
      function t(t) {
        var i = this;
        (this.Jv = null),
          (this.Gv = null),
          (this.ae = null),
          (this.Qv = !1),
          (this.wc = new Zi(0, 0)),
          (this.kc = function () {
            return i._v.vt().zr();
          }),
          (this.Sc = function () {
            return i._v.vt().zr();
          }),
          (this._v = t),
          (this.Si = t.I().layout),
          (this.t_ = document.createElement("tr")),
          (this.i_ = document.createElement("td")),
          (this.i_.style.padding = "0"),
          (this.n_ = document.createElement("td")),
          (this.n_.style.padding = "0"),
          (this.Cc = document.createElement("td")),
          (this.Cc.style.height = "25px"),
          (this.Cc.style.padding = "0"),
          (this.h_ = document.createElement("div")),
          (this.h_.style.width = "100%"),
          (this.h_.style.height = "100%"),
          (this.h_.style.position = "relative"),
          (this.h_.style.overflow = "hidden"),
          this.Cc.appendChild(this.h_),
          (this.Tc = nn(this.h_, new Zi(16, 16))),
          this.Tc.subscribeCanvasConfigured(this.kc);
        var n = this.Tc.canvas;
        (n.style.position = "absolute"),
          (n.style.zIndex = "1"),
          (n.style.left = "0"),
          (n.style.top = "0"),
          (this.Ac = nn(this.h_, new Zi(16, 16))),
          this.Ac.subscribeCanvasConfigured(this.Sc);
        var h = this.Ac.canvas;
        (h.style.position = "absolute"),
          (h.style.zIndex = "2"),
          (h.style.left = "0"),
          (h.style.top = "0"),
          this.t_.appendChild(this.i_),
          this.t_.appendChild(this.Cc),
          this.t_.appendChild(this.n_),
          this.s_(),
          this._v.vt().Fo().Qi(this.s_.bind(this), this),
          (this.Pc = new en(this.Ac.canvas, this, {
            Lf: !0,
            Bf: !1,
          }));
      }
      return (
        (t.prototype.an = function () {
          this.Pc.an(),
            null !== this.Jv && this.Jv.an(),
            null !== this.Gv && this.Gv.an(),
            this.Ac.unsubscribeCanvasConfigured(this.Sc),
            this.Ac.destroy(),
            this.Tc.unsubscribeCanvasConfigured(this.kc),
            this.Tc.destroy();
        }),
        (t.prototype.Ic = function () {
          return this.t_;
        }),
        (t.prototype.r_ = function () {
          return this.Jv;
        }),
        (t.prototype.e_ = function () {
          return this.Gv;
        }),
        (t.prototype.Rf = function (t) {
          if (!this.Qv) {
            this.Qv = !0;
            var i = this._v.vt();
            !i.U().ii() &&
              this._v.I().handleScale.axisPressedMouseMove.time &&
              i.zl(t.hc);
          }
        }),
        (t.prototype.Uf = function () {
          var t = this._v.vt();
          !t.U().ii() &&
            this.Qv &&
            ((this.Qv = !1),
            this._v.I().handleScale.axisPressedMouseMove.time && t.ql());
        }),
        (t.prototype.Ff = function (t) {
          var i = this._v.vt();
          !i.U().ii() &&
            this._v.I().handleScale.axisPressedMouseMove.time &&
            i.Ul(t.hc);
        }),
        (t.prototype.zf = function (t) {
          this.Qv = !1;
          var i = this._v.vt();
          (i.U().ii() && !this._v.I().handleScale.axisPressedMouseMove.time) ||
            i.ql();
        }),
        (t.prototype.Pf = function () {
          this._v.I().handleScale.axisDoubleClickReset && this._v.vt().Fe();
        }),
        (t.prototype.Df = function (t) {
          this._v.vt().I().handleScale.axisPressedMouseMove.time && this.nv(1);
        }),
        (t.prototype.Jf = function (t) {
          this.nv(0);
        }),
        (t.prototype.Ov = function () {
          return this.wc;
        }),
        (t.prototype.u_ = function (t, i, n) {
          (this.wc && this.wc.fn(t)) ||
            ((this.wc = t),
            this.Tc.resizeCanvas({
              width: t.st,
              height: t.rt,
            }),
            this.Ac.resizeCanvas({
              width: t.st,
              height: t.rt,
            }),
            (this.Cc.style.width = t.st + "px"),
            (this.Cc.style.height = t.rt + "px")),
            null !== this.Jv && this.Jv.Yc(new Zi(i, t.rt)),
            null !== this.Gv && this.Gv.Yc(new Zi(n, t.rt));
        }),
        (t.prototype.a_ = function () {
          var t = this.o_();
          return Math.ceil(t.Tt + t.Ct + t.zt + t.At + t.Et);
        }),
        (t.prototype.F = function () {
          this._v.vt().U().On();
        }),
        (t.prototype.iv = function () {
          return this.Tc.canvas;
        }),
        (t.prototype.Xc = function (t) {
          if (0 !== t) {
            if (1 !== t) {
              var i = Gi(this.Tc.canvas);
              this.Jc(i, this.Tc.pixelRatio),
                this.wu(i, this.Tc.pixelRatio),
                this.Gc(i, this.Tc.pixelRatio),
                null !== this.Jv && this.Jv.Xc(t),
                null !== this.Gv && this.Gv.Xc(t);
            }
            var n = Gi(this.Ac.canvas),
              h = this.Ac.pixelRatio;
            n.clearRect(
              0,
              0,
              Math.ceil(this.wc.st * h),
              Math.ceil(this.wc.rt * h)
            ),
              this.l_([this._v.vt().Bl()], n, h);
          }
        }),
        (t.prototype.Jc = function (t, i) {
          var n = this;
          O(t, i, function () {
            V(t, 0, 0, n.wc.st, n.wc.rt, n.zv());
          });
        }),
        (t.prototype.wu = function (t, i) {
          if (this._v.I().timeScale.borderVisible) {
            t.save(), (t.fillStyle = this.f_());
            var n = Math.max(1, Math.floor(this.o_().Tt * i));
            t.fillRect(0, 0, Math.ceil(this.wc.st * i), n), t.restore();
          }
        }),
        (t.prototype.Gc = function (t, i) {
          var n = this,
            h = this._v.vt().U().On();
          if (h && 0 !== h.length) {
            var s = h.reduce(wn, h[0]).Ws;
            s > 30 && s < 40 && (s = 30), t.save(), (t.strokeStyle = this.f_());
            var r = this.o_(),
              e = r.Tt + r.Ct + r.At + r.zt - r.Vt;
            (t.textAlign = "center"), (t.fillStyle = this.f_());
            var u = Math.floor(this.o_().Tt * i),
              a = Math.max(1, Math.floor(i)),
              o = Math.floor(0.5 * i);
            if (this._v.vt().U().I().borderVisible) {
              t.beginPath();
              for (var l = Math.round(r.Ct * i), f = h.length; f--; ) {
                var c = Math.round(h[f].En * i);
                t.rect(c - o, u, a, l);
              }
              t.fill();
            }
            (t.fillStyle = this.ce()),
              O(t, i, function () {
                t.font = n.c_();
                for (var i = 0, r = h; i < r.length; i++) {
                  (o = r[i]).Ws < s && t.fillText(o.Ln, o.En, e);
                }
                t.font = n.v_();
                for (var u = 0, a = h; u < a.length; u++) {
                  var o;
                  (o = a[u]).Ws >= s && t.fillText(o.Ln, o.En, e);
                }
              });
          }
        }),
        (t.prototype.l_ = function (t, i, n) {
          for (var h = this.o_(), s = 0, r = t; s < r.length; s++)
            for (var e = 0, u = r[s].di(); e < u.length; e++) {
              var a = u[e];
              i.save(), a.W().h(i, h, n), i.restore();
            }
        }),
        (t.prototype.zv = function () {
          return this.Si.backgroundColor;
        }),
        (t.prototype.f_ = function () {
          return this._v.I().timeScale.borderColor;
        }),
        (t.prototype.ce = function () {
          return this.Si.textColor;
        }),
        (t.prototype.le = function () {
          return this.Si.fontSize;
        }),
        (t.prototype.c_ = function () {
          return Ot(this.le(), this.Si.fontFamily);
        }),
        (t.prototype.v_ = function () {
          return Ot(this.le(), this.Si.fontFamily, "bold");
        }),
        (t.prototype.o_ = function () {
          null === this.ae &&
            (this.ae = {
              Tt: 1,
              Vt: NaN,
              At: NaN,
              Et: NaN,
              si: NaN,
              Ct: 3,
              zt: NaN,
              Nt: "",
              hi: new fi(),
            });
          var t = this.ae,
            i = this.c_();
          if (t.Nt !== i) {
            var n = this.le();
            (t.zt = n),
              (t.Nt = i),
              (t.At = Math.ceil(n / 2.5)),
              (t.Et = t.At),
              (t.si = Math.ceil(n / 2)),
              (t.Vt = Math.round(this.le() / 5)),
              t.hi.Au();
          }
          return this.ae;
        }),
        (t.prototype.nv = function (t) {
          this.Cc.style.cursor = 1 === t ? "ew-resize" : "default";
        }),
        (t.prototype.s_ = function () {
          var t = this._v.vt(),
            i = t.I();
          i.leftPriceScale.visible ||
            null === this.Jv ||
            (this.i_.removeChild(this.Jv.Ic()), this.Jv.an(), (this.Jv = null)),
            i.rightPriceScale.visible ||
              null === this.Gv ||
              (this.n_.removeChild(this.Gv.Ic()),
              this.Gv.an(),
              (this.Gv = null));
          var n = {
            Zl: this._v.vt().Zl(),
          };
          if (i.leftPriceScale.visible && null === this.Jv) {
            var h = function () {
              return i.leftPriceScale.borderVisible && t.U().I().borderVisible;
            };
            (this.Jv = new dn("left", this._v.I(), n, h)),
              this.i_.appendChild(this.Jv.Ic());
          }
          if (i.rightPriceScale.visible && null === this.Gv) {
            h = function () {
              return i.rightPriceScale.borderVisible && t.U().I().borderVisible;
            };
            (this.Gv = new dn("right", this._v.I(), n, h)),
              this.n_.appendChild(this.Gv.Ic());
          }
        }),
        t
      );
    })(),
    bn = (function () {
      function t(t, i) {
        (this.__ = []),
          (this.d_ = 0),
          (this.Vn = 0),
          (this.$s = 0),
          (this.w_ = 0),
          (this.M_ = 0),
          (this.b_ = null),
          (this.m_ = !1),
          (this.uv = new Z()),
          (this.dl = new Z()),
          (this.Si = i),
          (this.t_ = document.createElement("div")),
          this.t_.classList.add("tv-lightweight-charts"),
          (this.t_.style.overflow = "hidden"),
          (this.t_.style.width = "100%"),
          (this.t_.style.height = "100%"),
          (this.g_ = document.createElement("table")),
          this.g_.setAttribute("cellspacing", "0"),
          this.t_.appendChild(this.g_),
          (this.p_ = this.y_.bind(this)),
          this.t_.addEventListener("wheel", this.p_, {
            passive: !1,
          }),
          (this.ri = new Ki(this.wl.bind(this), this.Si)),
          this.vt().Fl().Qi(this.k_.bind(this), this),
          (this.x_ = new Mn(this)),
          this.g_.appendChild(this.x_.Ic());
        var n = this.Si.width,
          h = this.Si.height;
        if (0 === n || 0 === h) {
          var s = t.getBoundingClientRect();
          0 === n && ((n = Math.floor(s.width)), (n -= n % 2)),
            0 === h && ((h = Math.floor(s.height)), (h -= h % 2));
        }
        this.N_(n, h),
          this.S_(),
          t.appendChild(this.t_),
          this.D_(),
          this.ri.U().Zr().Qi(this.ri.yl.bind(this.ri), this),
          this.ri.Fo().Qi(this.ri.yl.bind(this.ri), this);
      }
      return (
        (t.prototype.vt = function () {
          return this.ri;
        }),
        (t.prototype.I = function () {
          return this.Si;
        }),
        (t.prototype.C_ = function () {
          return this.__;
        }),
        (t.prototype.an = function () {
          this.t_.removeEventListener("wheel", this.p_),
            0 !== this.d_ && window.cancelAnimationFrame(this.d_),
            this.ri.Fl().rn(this),
            this.ri.U().Zr().rn(this),
            this.ri.Fo().rn(this),
            this.ri.an();
          for (var t = 0, i = this.__; t < i.length; t++) {
            var n = i[t];
            this.g_.removeChild(n.Ic()), n.Lv().rn(this), n.an();
          }
          (this.__ = []),
            l(this.x_).an(),
            null !== this.t_.parentElement &&
              this.t_.parentElement.removeChild(this.t_),
            this.dl.an(),
            this.uv.an();
        }),
        (t.prototype.N_ = function (t, i, n) {
          if ((void 0 === n && (n = !1), this.Vn !== i || this.$s !== t)) {
            (this.Vn = i), (this.$s = t);
            var h = i + "px",
              s = t + "px";
            (l(this.t_).style.height = h),
              (l(this.t_).style.width = s),
              (this.g_.style.height = h),
              (this.g_.style.width = s),
              n ? this.T_(new jt(3)) : this.ri.yl();
          }
        }),
        (t.prototype.Xc = function (t) {
          void 0 === t && (t = new jt(3));
          for (var i = 0; i < this.__.length; i++) this.__[i].Xc(t.Ae(i).Ce);
          this.x_.Xc(t.Te());
        }),
        (t.prototype.eh = function (t) {
          this.ri.eh(t), this.D_();
          var i = t.width || this.$s,
            n = t.height || this.Vn;
          this.N_(i, n);
        }),
        (t.prototype.Lv = function () {
          return this.uv;
        }),
        (t.prototype.Fl = function () {
          return this.dl;
        }),
        (t.prototype.A_ = function () {
          var t = this;
          null !== this.b_ && (this.T_(this.b_), (this.b_ = null));
          var i = this.__[0],
            n = tn(document, new Zi(this.$s, this.Vn)),
            h = Gi(n),
            s = Ji(n);
          return (
            O(h, s, function () {
              var n = 0,
                s = 0,
                r = function (i) {
                  for (var r = 0; r < t.__.length; r++) {
                    var e = t.__[r],
                      u = e.Ov().rt,
                      a = l("left" === i ? e.Rv() : e.Uv()),
                      o = a.iv();
                    h.drawImage(o, n, s, a.Kc(), u), (s += u);
                  }
                };
              t.E_() && (r("left"), (n = l(i.Rv()).Kc())), (s = 0);
              for (var e = 0; e < t.__.length; e++) {
                var u = t.__[e],
                  a = u.Ov(),
                  o = u.iv();
                h.drawImage(o, n, s, a.st, a.rt), (s += a.rt);
              }
              (n += i.Ov().st), t.L_() && ((s = 0), r("right"));
              var f = function (i) {
                var r = l("left" === i ? t.x_.r_() : t.x_.e_()),
                  e = r.Ov(),
                  u = r.iv();
                h.drawImage(u, n, s, e.st, e.rt);
              };
              if (t.Si.timeScale.visible) {
                (n = 0), t.E_() && (f("left"), (n = l(i.Rv()).Kc()));
                var c = t.x_.Ov();
                o = t.x_.iv();
                h.drawImage(o, n, s, c.st, c.rt),
                  t.L_() && ((n = i.Ov().st), f("right"), h.restore());
              }
            }),
            n
          );
        }),
        (t.prototype.B_ = function (t) {
          return "none" === t
            ? 0
            : ("left" !== t || this.E_()) && ("right" !== t || this.L_())
            ? 0 === this.__.length
              ? 0
              : l("left" === t ? this.__[0].Rv() : this.__[0].Uv()).Kc()
            : 0;
        }),
        (t.prototype.F_ = function () {
          for (var t = 0, i = 0, n = 0, h = 0, s = this.__; h < s.length; h++) {
            var r = s[h];
            this.E_() && (i = Math.max(i, l(r.Rv()).qc())),
              this.L_() && (n = Math.max(n, l(r.Uv()).qc())),
              (t += r.Oo());
          }
          var e = this.$s,
            u = this.Vn,
            a = Math.max(e - i - n, 0),
            o = this.Si.timeScale.visible ? this.x_.a_() : 0;
          o % 2 && (o += 1);
          for (
            var f = 0 + o, c = u < f ? 0 : u - f, v = c / t, _ = 0, d = 0;
            d < this.__.length;
            ++d
          ) {
            (r = this.__[d]).pv(this.ri.Al()[d]);
            var w,
              M = 0;
            (M = d === this.__.length - 1 ? c - _ : Math.round(r.Oo() * v)),
              (_ += w = Math.max(M, 2)),
              r.Yc(new Zi(a, w)),
              this.E_() && r.Fv(i, "left"),
              this.L_() && r.Fv(n, "right"),
              r.$c() && this.ri.Ol(r.$c(), w);
          }
          this.x_.u_(new Zi(a, o), i, n),
            this.ri.Cr(a),
            this.w_ !== i && (this.w_ = i),
            this.M_ !== n && (this.M_ = n);
        }),
        (t.prototype.y_ = function (t) {
          var i = t.deltaX / 100,
            n = -t.deltaY / 100;
          if (
            (0 !== i && this.Si.handleScroll.mouseWheel) ||
            (0 !== n && this.Si.handleScale.mouseWheel)
          ) {
            switch ((t.cancelable && t.preventDefault(), t.deltaMode)) {
              case t.DOM_DELTA_PAGE:
                (i *= 120), (n *= 120);
                break;
              case t.DOM_DELTA_LINE:
                (i *= 32), (n *= 32);
            }
            if (0 !== n && this.Si.handleScale.mouseWheel) {
              var h = Math.sign(n) * Math.min(1, Math.abs(n)),
                s = t.clientX - this.t_.getBoundingClientRect().left;
              this.vt().Pl(s, h);
            }
            0 !== i && this.Si.handleScroll.mouseWheel && this.vt().Il(-80 * i);
          }
        }),
        (t.prototype.T_ = function (t) {
          var i = t.Te();
          if ((3 === i && this.O_(), 3 === i || 2 === i)) {
            for (var n = this.ri.Al(), h = 0; h < n.length; h++)
              t.Ae(h).wh && n[h].Go();
            for (var s = t.Oe(), r = 0, e = s; r < e.length; r++) {
              var u = e[r];
              this.Ve(u);
            }
            s.length > 0 && (this.ri.Vr(), this.ri._o(), this.ri.zr()),
              this.x_.F();
          }
          this.Xc(t);
        }),
        (t.prototype.Ve = function (t) {
          var i = this.ri.U();
          switch (t.Le) {
            case 0:
              i.Gr();
              break;
            case 1:
              i.Qr(t.J);
              break;
            case 2:
              i.dr(t.J);
              break;
            case 3:
              i.wr(t.J);
              break;
            case 4:
              i.jr();
          }
        }),
        (t.prototype.wl = function (t) {
          var i = this;
          null !== this.b_ ? this.b_.wn(t) : (this.b_ = t),
            this.m_ ||
              ((this.m_ = !0),
              (this.d_ = window.requestAnimationFrame(function () {
                (i.m_ = !1),
                  (i.d_ = 0),
                  null !== i.b_ && (i.T_(i.b_), (i.b_ = null));
              })));
        }),
        (t.prototype.O_ = function () {
          this.S_();
        }),
        (t.prototype.S_ = function () {
          for (
            var t = this.ri.Al(), i = t.length, n = this.__.length, h = i;
            h < n;
            h++
          ) {
            var s = o(this.__.pop());
            this.g_.removeChild(s.Ic()), s.Lv().rn(this), s.an();
          }
          for (h = n; h < i; h++) {
            (s = new _n(this, t[h])).Lv().Qi(this.V_.bind(this), this),
              this.__.push(s),
              this.g_.insertBefore(s.Ic(), this.x_.Ic());
          }
          for (h = 0; h < i; h++) {
            var r = t[h];
            (s = this.__[h]).$c() !== r ? s.pv(r) : s.gv();
          }
          this.D_(), this.F_();
        }),
        (t.prototype.z_ = function (t, i) {
          var n,
            h = new Map();
          null !== t &&
            this.ri.O().forEach(function (i) {
              var n = i.ra(t);
              null !== n && h.set(i, n);
            });
          if (null !== t) {
            var s = this.ri.U().ei(t);
            null !== s && (n = s);
          }
          var r = this.vt().Nl(),
            e = null !== r && r.Dl instanceof ji ? r.Dl : void 0,
            u = null !== r && void 0 !== r.Sv ? r.Sv.$u : void 0;
          return {
            V: n,
            P_: i || void 0,
            I_: e,
            W_: h,
            j_: u,
          };
        }),
        (t.prototype.V_ = function (t, i) {
          var n = this;
          this.uv.en(function () {
            return n.z_(t, i);
          });
        }),
        (t.prototype.k_ = function (t, i) {
          var n = this;
          this.dl.en(function () {
            return n.z_(t, i);
          });
        }),
        (t.prototype.D_ = function () {
          var t = this.Si.timeScale.visible ? "" : "none";
          this.x_.Ic().style.display = t;
        }),
        (t.prototype.E_ = function () {
          return this.Si.leftPriceScale.visible;
        }),
        (t.prototype.L_ = function () {
          return this.Si.rightPriceScale.visible;
        }),
        t
      );
    })();

  function mn(t, i, n) {
    var h = n.value,
      s = {
        Is: i,
        V: t,
        J: [h, h, h, h],
      };
    return "color" in n && void 0 !== n.color && (s.ut = n.color), s;
  }

  function gn(t, i, n) {
    return {
      Is: i,
      V: t,
      J: [n.open, n.high, n.low, n.close],
    };
  }

  function pn(t) {
    return void 0 !== t.J;
  }

  function yn(t) {
    return function (i, n, h) {
      return void 0 === (s = h).open && void 0 === s.value
        ? {
            V: i,
            Is: n,
          }
        : t(i, n, h);
      var s;
    };
  }
  var kn = {
    Candlestick: yn(gn),
    Bar: yn(gn),
    Area: yn(mn),
    Histogram: yn(mn),
    Line: yn(mn),
  };

  function xn(t) {
    return kn[t];
  }

  function Nn(t) {
    return 60 * t * 60 * 1e3;
  }

  function Sn(t) {
    return 60 * t * 1e3;
  }
  var Dn,
    Cn = [
      {
        R_: 1,
        Ws: 20,
      },
      {
        R_: ((Dn = 1), 1e3 * Dn),
        Ws: 19,
      },
      {
        R_: Sn(1),
        Ws: 20,
      },
      {
        R_: Sn(5),
        Ws: 21,
      },
      {
        R_: Sn(30),
        Ws: 22,
      },
      {
        R_: Nn(1),
        Ws: 30,
      },
      {
        R_: Nn(3),
        Ws: 31,
      },
      {
        R_: Nn(6),
        Ws: 32,
      },
      {
        R_: Nn(12),
        Ws: 33,
      },
    ];

  function Tn(t, i) {
    if (null !== i) {
      var n = new Date(1e3 * i),
        h = new Date(1e3 * t);
      if (h.getUTCFullYear() !== n.getUTCFullYear()) return 70;
      if (h.getUTCMonth() !== n.getUTCMonth()) return 60;
      if (h.getUTCDate() !== n.getUTCDate()) return 50;
      for (var s = Cn.length - 1; s >= 0; --s)
        if (
          Math.floor(n.getTime() / Cn[s].R_) !==
          Math.floor(h.getTime() / Cn[s].R_)
        )
          return Cn[s].Ws;
    }
    return 20;
  }

  function An(t) {
    if (!Lt(t)) throw new Error("time must be of type BusinessDay");
    var i = new Date(Date.UTC(t.year, t.month - 1, t.day, 0, 0, 0, 0));
    return {
      Ts: Math.round(i.getTime() / 1e3),
      Cs: t,
    };
  }

  function En(t) {
    if (!Bt(t)) throw new Error("time must be of type isUTCTimestamp");
    return {
      Ts: t,
    };
  }

  function Ln(t) {
    return 0 === t.length ? null : Lt(t[0].time) ? An : En;
  }

  function Bn(t) {
    return Bt(t) ? En(t) : Lt(t) ? An(t) : An(Fn(t));
  }

  function Fn(t) {
    var i = new Date(t);
    if (isNaN(i.getTime()))
      throw new Error(
        "Invalid date string=" + t + ", expected format=yyyy-mm-dd"
      );
    return {
      day: i.getUTCDate(),
      month: i.getUTCMonth() + 1,
      year: i.getUTCFullYear(),
    };
  }

  function On(t) {
    d(t.time) && (t.time = Fn(t.time));
  }

  function Vn(t) {
    return {
      Is: 0,
      U_: new Map(),
      jh: t,
    };
  }
  var zn = (function () {
    function t() {
      (this.q_ = new Map()),
        (this.H_ = new Map()),
        (this.Y_ = new Map()),
        (this.K_ = []);
    }
    return (
      (t.prototype.an = function () {
        this.q_.clear(), this.H_.clear(), this.Y_.clear(), (this.K_ = []);
      }),
      (t.prototype.X_ = function (t, i) {
        var n = this;
        this.Y_.has(t) &&
          this.q_.forEach(function (i) {
            return i.U_.delete(t);
          });
        var h = [];
        if (0 !== i.length) {
          !(function (t) {
            t.forEach(On);
          })(i);
          var s = l(Ln(i)),
            r = xn(t.ga());
          h = i.map(function (i) {
            var h = s(i.time),
              e = n.q_.get(h.Ts);
            void 0 === e && ((e = Vn(h)), n.q_.set(h.Ts, e));
            var u = r(h, e.Is, i);
            return e.U_.set(t, u), u;
          });
        }
        return this.Z_(), this.J_(t, h), this.G_(t);
      }),
      (t.prototype.Ql = function (t) {
        return this.X_(t, []);
      }),
      (t.prototype.Q_ = function (t, i) {
        On(i);
        var n = l(Ln([i]))(i.time),
          h = this.Y_.get(t);
        if (void 0 !== h && n.Ts < h.Ts)
          throw new Error(
            "Cannot update oldest data, last time=" +
              h.Ts +
              ", new time=" +
              n.Ts
          );
        var s = this.q_.get(n.Ts),
          r = void 0 === s;
        void 0 === s && ((s = Vn(n)), this.q_.set(n.Ts, s));
        var e = xn(t.ga())(n, s.Is, i);
        s.U_.set(t, e);
        var u = this.td(t, e);
        if (!r) {
          var a = new Map();
          return (
            null !== u && a.set(t, u),
            {
              nd: a,
              U: {
                Lr: this.hd(),
              },
            }
          );
        }
        return this.G_(t);
      }),
      (t.prototype.td = function (t, i) {
        var n = this.H_.get(t);
        void 0 === n && ((n = []), this.H_.set(t, n));
        var h = 0 !== n.length ? n[n.length - 1] : null,
          s = null;
        return (
          null === h || i.V.Ts > h.V.Ts
            ? pn(i) &&
              (n.push(i),
              (s = {
                yl: !1,
                sd: [i],
              }))
            : pn(i)
            ? ((n[n.length - 1] = i),
              (s = {
                yl: !1,
                sd: [i],
              }))
            : (n.splice(-1, 1),
              (s = {
                yl: !0,
                sd: n,
              })),
          this.Y_.set(t, i.V),
          s
        );
      }),
      (t.prototype.J_ = function (t, i) {
        0 !== i.length
          ? (this.H_.set(t, i.filter(pn)), this.Y_.set(t, i[i.length - 1].V))
          : (this.H_.delete(t), this.Y_.delete(t));
      }),
      (t.prototype.Z_ = function () {
        var t = new Map();
        this.q_.forEach(function (i, n) {
          i.U_.size > 0 && t.set(n, i);
        }),
          (this.q_ = t);
      }),
      (t.prototype.rd = function (t) {
        for (var i = -1, n = 0; n < this.K_.length && n < t.length; ++n) {
          var h = this.K_[n],
            s = t[n];
          if (h.V.Ts !== s.V.Ts) {
            i = n;
            break;
          }
          s.Ps = h.Ps;
        }
        if (
          (-1 === i &&
            this.K_.length !== t.length &&
            (i = Math.min(this.K_.length, t.length)),
          -1 === i)
        )
          return -1;
        var r = function (i) {
            var n = o(e.q_.get(t[i].V.Ts));
            (n.Is = i),
              n.U_.forEach(function (t) {
                t.Is = i;
              });
          },
          e = this;
        for (n = i; n < t.length; ++n) r(n);
        return (
          (function (t, i) {
            void 0 === i && (i = 0);
            for (
              var n = 0 === i || 0 === t.length ? null : t[i - 1].V.Ts,
                h = 0,
                s = i;
              s < t.length;
              ++s
            ) {
              var r = t[s];
              (r.Ps = Tn(r.V.Ts, n)),
                (h += r.V.Ts - (n || r.V.Ts)),
                (n = r.V.Ts);
            }
            if (0 === i && t.length > 1) {
              var e = Math.ceil(h / (t.length - 1)),
                u = t[0].V.Ts - e;
              t[0].Ps = Tn(t[0].V.Ts, u);
            }
          })(t, i),
          (this.K_ = t),
          i
        );
      }),
      (t.prototype.hd = function () {
        var t = 0;
        return (
          this.H_.forEach(function (i) {
            0 !== i.length && (t = Math.max(t, i[i.length - 1].Is));
          }),
          t
        );
      }),
      (t.prototype.G_ = function (t) {
        var i = Array.from(this.q_.values()).map(function (t) {
          return {
            Ps: 0,
            V: t.jh,
          };
        });
        i.sort(function (t, i) {
          return t.V.Ts - i.V.Ts;
        });
        var n = this.rd(i),
          h = {
            nd: new Map(),
            U: {
              Lr: this.hd(),
            },
          };
        if (-1 !== n)
          this.H_.forEach(function (t, i) {
            h.nd.set(i, {
              sd: t,
              yl: !0,
            });
          }),
            (h.U.ed = this.K_);
        else {
          var s = this.H_.get(t);
          h.nd.set(t, {
            sd: s || [],
            yl: !0,
          });
        }
        return h;
      }),
      t
    );
  })();
  var Pn = {
      color: "#FF0000",
      price: 0,
      lineStyle: 2,
      lineWidth: 1,
      axisLabelVisible: !0,
      title: "",
    },
    In = (function () {
      function t(t) {
        this.da = t;
      }
      return (
        (t.prototype.applyOptions = function (t) {
          this.da.eh(t);
        }),
        (t.prototype.options = function () {
          return this.da.I();
        }),
        (t.prototype.ud = function () {
          return this.da;
        }),
        t
      );
    })();

  function Wn(t) {
    var i = t.overlay,
      n = (function (t, i) {
        var n = {};
        for (var h in t)
          Object.prototype.hasOwnProperty.call(t, h) &&
            i.indexOf(h) < 0 &&
            (n[h] = t[h]);
        if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
          var s = 0;
          for (h = Object.getOwnPropertySymbols(t); s < h.length; s++)
            i.indexOf(h[s]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(t, h[s]) &&
              (n[h[s]] = t[h[s]]);
        }
        return n;
      })(t, ["overlay"]);
    return i && (n.priceScaleId = ""), n;
  }
  var jn = (function () {
      function t(t, i, n) {
        (this.Ke = t), (this.ad = i), (this.od = n);
      }
      return (
        (t.prototype.priceFormatter = function () {
          return this.Ke.Xh();
        }),
        (t.prototype.nd = function () {
          return this.Ke;
        }),
        (t.prototype.priceToCoordinate = function (t) {
          var i = this.Ke.H();
          return null === i ? null : this.Ke.Z().X(t, i.J);
        }),
        (t.prototype.coordinateToPrice = function (t) {
          var i = this.Ke.H();
          return null === i ? null : this.Ke.Z().Ai(t, i.J);
        }),
        (t.prototype.barsInLogicalRange = function (t) {
          if (null === t) return null;
          var i = new At(new St(t.from, t.to)).Hs(),
            n = this.Ke.Yi();
          if (n.ii()) return null;
          var h = n.Va(i.es(), 1),
            s = n.Va(i.us(), -1),
            r = l(n.Ba()),
            e = l(n.Hi());
          if (null !== h && null !== s && h.Is > s.Is)
            return {
              barsBefore: t.from - r,
              barsAfter: e - t.to,
            };
          var u = {
            barsBefore: null === h || h.Is === r ? t.from - r : h.Is - r,
            barsAfter: null === s || s.Is === e ? e - t.to : e - s.Is,
          };
          return (
            null !== h &&
              null !== s &&
              ((u.from = h.V.Cs || h.V.Ts), (u.to = s.V.Cs || s.V.Ts)),
            u
          );
        }),
        (t.prototype.setData = function (t) {
          this.Ke.ga(), this.ad.ld(this.Ke, t);
        }),
        (t.prototype.update = function (t) {
          this.Ke.ga(), this.ad.fo(this.Ke, t);
        }),
        (t.prototype.setMarkers = function (t) {
          var i = t.map(function (t) {
            return e(e({}, t), {
              time: Bn(t.time),
            });
          });
          this.Ke.do(i);
        }),
        (t.prototype.applyOptions = function (t) {
          var i = Wn(t);
          this.Ke.eh(i);
        }),
        (t.prototype.options = function () {
          return M(this.Ke.I());
        }),
        (t.prototype.priceScale = function () {
          return this.od.priceScale(this.Ke.Z().rh());
        }),
        (t.prototype.createPriceLine = function (t) {
          var i = c(M(Pn), t),
            n = this.Ke.wo(i);
          return new In(n);
        }),
        (t.prototype.removePriceLine = function (t) {
          this.Ke.Mo(t.ud());
        }),
        t
      );
    })(),
    Rn = (function (t) {
      function i() {
        return (null !== t && t.apply(this, arguments)) || this;
      }
      return (
        r(i, t),
        (i.prototype.applyOptions = function (i) {
          bt(i), t.prototype.applyOptions.call(this, i);
        }),
        i
      );
    })(jn),
    Un = {
      autoScale: !0,
      mode: 0,
      invertScale: !1,
      alignLabels: !0,
      borderVisible: !0,
      borderColor: "#2B2B43",
      entireTextOnly: !1,
      visible: !1,
      drawTicks: !0,
      scaleMargins: {
        bottom: 0.1,
        top: 0.2,
      },
    },
    qn = {
      color: "rgba(0, 0, 0, 0)",
      visible: !1,
      fontSize: 48,
      fontFamily: Ft,
      fontStyle: "",
      text: "",
      horzAlign: "center",
      vertAlign: "center",
    },
    Hn = {
      width: 0,
      height: 0,
      layout: {
        backgroundColor: "#FFFFFF",
        textColor: "#191919",
        fontSize: 11,
        fontFamily: Ft,
      },
      crosshair: {
        vertLine: {
          color: "#758696",
          width: 1,
          style: 3,
          visible: !0,
          labelVisible: !0,
          labelBackgroundColor: "#4c525e",
        },
        horzLine: {
          color: "#758696",
          width: 1,
          style: 3,
          visible: !0,
          labelVisible: !0,
          labelBackgroundColor: "#4c525e",
        },
        mode: 1,
      },
      grid: {
        vertLines: {
          color: "#D6DCDE",
          style: 0,
          visible: !0,
        },
        horzLines: {
          color: "#D6DCDE",
          style: 0,
          visible: !0,
        },
      },
      overlayPriceScales: e({}, Un),
      leftPriceScale: e(e({}, Un), {
        visible: !1,
      }),
      rightPriceScale: e(e({}, Un), {
        visible: !0,
      }),
      timeScale: {
        rightOffset: 0,
        barSpacing: 6,
        fixLeftEdge: !1,
        lockVisibleTimeRangeOnResize: !1,
        rightBarStaysOnScroll: !1,
        borderVisible: !0,
        borderColor: "#2B2B43",
        visible: !0,
        timeVisible: !1,
        secondsVisible: !0,
      },
      watermark: qn,
      localization: {
        locale: hn ? navigator.language : "",
        dateFormat: "dd MMM 'yy",
      },
      handleScroll: {
        mouseWheel: !0,
        pressedMouseMove: !0,
        horzTouchDrag: !0,
        vertTouchDrag: !0,
      },
      handleScale: {
        axisPressedMouseMove: {
          time: !0,
          price: !0,
        },
        axisDoubleClickReset: !0,
        mouseWheel: !0,
        pinch: !0,
      },
    },
    Yn = {
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
    Kn = {
      upColor: "#26a69a",
      downColor: "#ef5350",
      openVisible: !0,
      thinBars: !0,
    },
    $n = {
      color: "#2196f3",
      lineStyle: 0,
      lineWidth: 3,
      lineType: 0,
      crosshairMarkerVisible: !0,
      crosshairMarkerRadius: 4,
    },
    Xn = {
      topColor: "rgba( 46, 220, 135, 0.4)",
      bottomColor: "rgba( 40, 221, 100, 0)",
      lineColor: "#33D778",
      lineStyle: 0,
      lineWidth: 3,
      lineType: 0,
      crosshairMarkerVisible: !0,
      crosshairMarkerRadius: 4,
    },
    Zn = {
      color: "#26a69a",
      base: 0,
    },
    Jn = {
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
      priceFormat: {
        type: "price",
        precision: 2,
        minMove: 0.01,
      },
    },
    Gn = (function () {
      function t(t, i) {
        (this.fd = t), (this.vd = i);
      }
      return (
        (t.prototype.applyOptions = function (t) {
          this.fd.vt().Cl(this.vd, t);
        }),
        (t.prototype.options = function () {
          return this.Qt().I();
        }),
        (t.prototype.width = function () {
          return zt(this.vd)
            ? this.fd.B_("left" === this.vd ? "left" : "right")
            : 0;
        }),
        (t.prototype.Qt = function () {
          return l(this.fd.vt().Tl(this.vd)).Z;
        }),
        t
      );
    })(),
    Qn = (function () {
      function t(t) {
        (this._d = new Z()),
          (this.nr = new Z()),
          (this.ri = t),
          this.Do().$r().Qi(this.dd.bind(this)),
          this.Do().Xr().Qi(this.wd.bind(this));
      }
      return (
        (t.prototype.an = function () {
          this.Do().$r().rn(this), this.Do().Xr().rn(this), this._d.an();
        }),
        (t.prototype.scrollPosition = function () {
          return this.Do().Ir();
        }),
        (t.prototype.scrollToPosition = function (t, i) {
          i ? this.Do().Kr(t, 1e3) : this.ri.wr(t);
        }),
        (t.prototype.scrollToRealTime = function () {
          this.Do().Yr();
        }),
        (t.prototype.getVisibleRange = function () {
          var t,
            i,
            n = this.Do().pr();
          return null === n
            ? null
            : {
                from: null !== (t = n.from.Cs) && void 0 !== t ? t : n.from.Ts,
                to: null !== (i = n.to.Cs) && void 0 !== i ? i : n.to.Ts,
              };
        }),
        (t.prototype.setVisibleRange = function (t) {
          var i = {
              from: Bn(t.from),
              to: Bn(t.to),
            },
            n = this.Do().Sr(i);
          this.ri.tf(n);
        }),
        (t.prototype.getVisibleLogicalRange = function () {
          var t = this.Do().gr();
          return null === t
            ? null
            : {
                from: t.es(),
                to: t.us(),
              };
        }),
        (t.prototype.setVisibleLogicalRange = function (t) {
          a(t.from <= t.to, "The from index cannot be after the to index."),
            this.ri.tf(t);
        }),
        (t.prototype.resetTimeScale = function () {
          this.ri.Fe();
        }),
        (t.prototype.fitContent = function () {
          this.ri.Gr();
        }),
        (t.prototype.logicalToCoordinate = function (t) {
          var i = this.ri.U();
          return i.ii() ? null : i.G(t);
        }),
        (t.prototype.coordinateToLogical = function (t) {
          var i = this.ri.U();
          return i.ii() ? null : i.Fr(t);
        }),
        (t.prototype.timeToCoordinate = function (t) {
          var i = Bn(t),
            n = this.ri.U(),
            h = n.Mr(i, !1);
          return null === h ? null : n.G(h);
        }),
        (t.prototype.coordinateToTime = function (t) {
          var i,
            n = this.ri.U(),
            h = n.Fr(t),
            s = n.ei(h);
          return null === s
            ? null
            : null !== (i = s.Cs) && void 0 !== i
            ? i
            : s.Ts;
        }),
        (t.prototype.subscribeVisibleTimeRangeChange = function (t) {
          this._d.Qi(t);
        }),
        (t.prototype.unsubscribeVisibleTimeRangeChange = function (t) {
          this._d.sn(t);
        }),
        (t.prototype.subscribeVisibleLogicalRangeChange = function (t) {
          this.nr.Qi(t);
        }),
        (t.prototype.unsubscribeVisibleLogicalRangeChange = function (t) {
          this.nr.sn(t);
        }),
        (t.prototype.applyOptions = function (t) {
          this.Do().eh(t);
        }),
        (t.prototype.options = function () {
          return M(this.Do().I());
        }),
        (t.prototype.Do = function () {
          return this.ri.U();
        }),
        (t.prototype.dd = function () {
          this._d.un() && this._d.en(this.getVisibleRange());
        }),
        (t.prototype.wd = function () {
          this.nr.un() && this.nr.en(this.getVisibleLogicalRange());
        }),
        t
      );
    })();

  function th(t) {
    if (void 0 !== t && "custom" !== t.type) {
      var i = t;
      void 0 !== i.minMove &&
        void 0 === i.precision &&
        (i.precision = (function (t) {
          if (t >= 1) return 0;
          for (var i = 0; i < 8; i++) {
            var n = Math.round(t);
            if (Math.abs(n - t) < 1e-8) return i;
            t *= 10;
          }
          return i;
        })(i.minMove));
    }
  }

  function ih(t) {
    return (
      (function (t) {
        if (w(t.handleScale)) {
          var i = t.handleScale;
          t.handleScale = {
            axisDoubleClickReset: i,
            axisPressedMouseMove: {
              time: i,
              price: i,
            },
            mouseWheel: i,
            pinch: i,
          };
        } else if (
          void 0 !== t.handleScale &&
          w(t.handleScale.axisPressedMouseMove)
        ) {
          var n = t.handleScale.axisPressedMouseMove;
          t.handleScale.axisPressedMouseMove = {
            time: n,
            price: n,
          };
        }
        var h = t.handleScroll;
        w(h) &&
          (t.handleScroll = {
            horzTouchDrag: h,
            vertTouchDrag: h,
            mouseWheel: h,
            pressedMouseMove: h,
          });
      })(t),
      (function (t) {
        if (t.priceScale) {
          (t.leftPriceScale = t.leftPriceScale || {}),
            (t.rightPriceScale = t.rightPriceScale || {});
          var i = t.priceScale.position;
          delete t.priceScale.position,
            (t.leftPriceScale = c(t.leftPriceScale, t.priceScale)),
            (t.rightPriceScale = c(t.rightPriceScale, t.priceScale)),
            "left" === i &&
              ((t.leftPriceScale.visible = !0),
              (t.rightPriceScale.visible = !1)),
            "right" === i &&
              ((t.leftPriceScale.visible = !1),
              (t.rightPriceScale.visible = !0)),
            "none" === i &&
              ((t.leftPriceScale.visible = !1),
              (t.rightPriceScale.visible = !1)),
            (t.overlayPriceScales = t.overlayPriceScales || {}),
            void 0 !== t.priceScale.invertScale &&
              (t.overlayPriceScales.invertScale = t.priceScale.invertScale),
            void 0 !== t.priceScale.scaleMargins &&
              (t.overlayPriceScales.scaleMargins = t.priceScale.scaleMargins);
        }
      })(t),
      t
    );
  }
  var nh = (function () {
    function t(t, i) {
      var n = this;
      (this.Md = new zn()),
        (this.bd = new Map()),
        (this.md = new Map()),
        (this.gd = new Z()),
        (this.pd = new Z());
      var h = void 0 === i ? M(Hn) : c(M(Hn), ih(i));
      (this.fd = new bn(t, h)),
        this.fd.Lv().Qi(function (t) {
          n.gd.un() && n.gd.en(n.yd(t()));
        }, this),
        this.fd.Fl().Qi(function (t) {
          n.pd.un() && n.pd.en(n.yd(t()));
        }, this);
      var s = this.fd.vt();
      this.kd = new Qn(s);
    }
    return (
      (t.prototype.setCrossHairXY = function (t, i, n) {
        this.fd.C_()[0].$v(t, i, n);
      }),
      (t.prototype.remove = function () {
        this.fd.Lv().rn(this),
          this.fd.Fl().rn(this),
          this.kd.an(),
          this.fd.an(),
          this.bd.clear(),
          this.md.clear(),
          this.gd.an(),
          this.pd.an(),
          this.Md.an();
      }),
      (t.prototype.resize = function (t, i, n) {
        this.fd.N_(t, i, n);
      }),
      (t.prototype.addAreaSeries = function (t) {
        void 0 === t && (t = {}), th((t = Wn(t)).priceFormat);
        var i = c(M(Jn), Xn, t),
          n = this.fd.vt().Jl("Area", i),
          h = new jn(n, this, this);
        return this.bd.set(h, n), this.md.set(n, h), h;
      }),
      (t.prototype.addBarSeries = function (t) {
        void 0 === t && (t = {}), th((t = Wn(t)).priceFormat);
        var i = c(M(Jn), Kn, t),
          n = this.fd.vt().Jl("Bar", i),
          h = new jn(n, this, this);
        return this.bd.set(h, n), this.md.set(n, h), h;
      }),
      (t.prototype.addCandlestickSeries = function (t) {
        void 0 === t && (t = {}), bt((t = Wn(t))), th(t.priceFormat);
        var i = c(M(Jn), Yn, t),
          n = this.fd.vt().Jl("Candlestick", i),
          h = new Rn(n, this, this);
        return this.bd.set(h, n), this.md.set(n, h), h;
      }),
      (t.prototype.addHistogramSeries = function (t) {
        void 0 === t && (t = {}), th((t = Wn(t)).priceFormat);
        var i = c(M(Jn), Zn, t),
          n = this.fd.vt().Jl("Histogram", i),
          h = new jn(n, this, this);
        return this.bd.set(h, n), this.md.set(n, h), h;
      }),
      (t.prototype.addLineSeries = function (t) {
        void 0 === t && (t = {}), th((t = Wn(t)).priceFormat);
        var i = c(M(Jn), $n, t),
          n = this.fd.vt().Jl("Line", i),
          h = new jn(n, this, this);
        return this.bd.set(h, n), this.md.set(n, h), h;
      }),
      (t.prototype.removeSeries = function (t) {
        var i = o(this.bd.get(t)),
          n = this.Md.Ql(i);
        this.fd.vt().Ql(i), this.xd(n), this.bd.delete(t), this.md.delete(i);
      }),
      (t.prototype.ld = function (t, i) {
        this.xd(this.Md.X_(t, i));
      }),
      (t.prototype.fo = function (t, i) {
        this.xd(this.Md.Q_(t, i));
      }),
      (t.prototype.subscribeClick = function (t) {
        this.gd.Qi(t);
      }),
      (t.prototype.unsubscribeClick = function (t) {
        this.gd.sn(t);
      }),
      (t.prototype.subscribeCrosshairMove = function (t) {
        this.pd.Qi(t);
      }),
      (t.prototype.unsubscribeCrosshairMove = function (t) {
        this.pd.sn(t);
      }),
      (t.prototype.priceScale = function (t) {
        return void 0 === t && (t = this.fd.vt().if()), new Gn(this.fd, t);
      }),
      (t.prototype.timeScale = function () {
        return this.kd;
      }),
      (t.prototype.applyOptions = function (t) {
        this.fd.eh(ih(t));
      }),
      (t.prototype.options = function () {
        return this.fd.I();
      }),
      (t.prototype.takeScreenshot = function () {
        return this.fd.A_();
      }),
      (t.prototype.xd = function (t) {
        var i = this.fd.vt();
        i.Xl(t.U.Lr, t.U.ed),
          t.nd.forEach(function (t, i) {
            return i.fo(t.sd, t.yl);
          }),
          i.Vr();
      }),
      (t.prototype.Nd = function (t) {
        return o(this.md.get(t));
      }),
      (t.prototype.yd = function (t) {
        var i = this,
          n = new Map();
        t.W_.forEach(function (t, h) {
          n.set(i.Nd(h), t);
        });
        var h = void 0 === t.I_ ? void 0 : this.Nd(t.I_);
        return {
          time: t.V && (t.V.Cs || t.V.Ts),
          point: t.P_,
          hoveredSeries: h,
          hoveredMarkerId: t.j_,
          seriesPrices: n,
        };
      }),
      t
    );
  })();
  var hh = Object.freeze({
    __proto__: null,
    version: function () {
      return "3.2.0-dev+202010260323";
    },
    get LineStyle() {
      return i;
    },
    get LineType() {
      return t;
    },
    get CrosshairMode() {
      return z;
    },
    get PriceScaleMode() {
      return lt;
    },
    get PriceLineSource() {
      return _t;
    },
    get TickMarkType() {
      return Ct;
    },
    isBusinessDay: Lt,
    isUTCTimestamp: Bt,
    createChart: function (t, i) {
      var n;
      if (d(t)) {
        var h = document.getElementById(t);
        a(null !== h, "Cannot find element in DOM with id=" + t), (n = h);
      } else n = t;
      return new nh(n, i);
    },
  });
  window.LightweightCharts = hh;
})();
