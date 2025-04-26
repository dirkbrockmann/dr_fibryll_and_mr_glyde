(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode('/*! tailwindcss v4.1.4 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-font-weight:initial}}}@layer theme{:root,:host{--tw-font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--tw-spacing:.25rem;--tw-container-5xl:64rem;--tw-text-2xl:1.5rem;--tw-text-2xl--line-height:calc(2/1.5);--tw-text-3xl:1.875rem;--tw-text-3xl--line-height: 1.2 ;--tw-text-5xl:3rem;--tw-text-5xl--line-height:1;--tw-font-weight-light:300}}@layer base,components;@layer utilities{.tw\\:m-8{margin:calc(var(--tw-spacing)*8)}.tw\\:grid{display:grid}.tw\\:max-w-5xl{max-width:var(--tw-container-5xl)}.tw\\:grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.tw\\:p-0{padding:calc(var(--tw-spacing)*0)}.tw\\:px-1{padding-inline:calc(var(--tw-spacing)*1)}.tw\\:px-10{padding-inline:calc(var(--tw-spacing)*10)}.tw\\:font-sans{font-family:var(--tw-font-sans)}.tw\\:text-2xl{font-size:var(--tw-text-2xl);line-height:var(--tw-leading,var(--tw-text-2xl--line-height))}.tw\\:text-3xl{font-size:var(--tw-text-3xl);line-height:var(--tw-leading,var(--tw-text-3xl--line-height))}.tw\\:text-5xl{font-size:var(--tw-text-5xl);line-height:var(--tw-leading,var(--tw-text-5xl--line-height))}.tw\\:font-light{--tw-font-weight:var(--tw-font-weight-light);font-weight:var(--tw-font-weight-light)}@media (min-width:40rem){.tw\\:sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.tw\\:sm\\:gap-4{gap:calc(var(--tw-spacing)*4)}.tw\\:sm\\:gap-8{gap:calc(var(--tw-spacing)*8)}.tw\\:sm\\:p-0{padding:calc(var(--tw-spacing)*0)}}.debug-grid-16{background-image:linear-gradient(90deg,#0000ff1a 1px,#0000 1px),linear-gradient(#0000ff1a 1px,#0000 1px);background-repeat:repeat;background-size:6.25% 6.25%,6.25% 6.25%}}.explorable *,.explorable :before,.explorable :after{box-sizing:border-box}@property --tw-font-weight{syntax:"*";inherits:false}._widget_18g36_1{stroke:#969696;stroke-width:1px;cursor:pointer;pointer-events:all;stroke-opacity:1;fill-opacity:1;fill:#ccc;font-size:16px}._widget_18g36_1 ._title_18g36_12{font-size:20px;fill:#000;stroke:none;text-anchor:middle}._widget_18g36_1 ._label_18g36_19{fill:#000;stroke:none}._widget_18g36_1 ._lit_18g36_24{fill:#eee}._button_18g36_29>._symbol_18g36_29,._radio_18g36_29>._radiobutton_18g36_29>._symbol_18g36_29{fill:#fff;fill-rule:nonzero;pointer-events:none}._widget_18g36_1 ._symbol_18g36_29._selected_18g36_35,._toggle_18g36_35._selected_18g36_35,._widget_18g36_1 ._symbol_18g36_29._selected_18g36_35._lit_18g36_24{fill:#000}._widget_18g36_1 ._symbol_18g36_29._lit_18g36_24{fill:#bbb}._slider_18g36_44>._track_18g36_44,._toggle_18g36_35>._track_18g36_44{pointer-events:none}._slider_18g36_44>._track_overlay_18g36_48,._toggle_18g36_35>._track_overlay_18g36_48{pointer-events:all;cursor:pointer;fill:transparent;stroke:transparent}._slider_18g36_44>._handle_18g36_55,._toggle_18g36_35>._handle_18g36_55{fill:#fff}._plot_19br3_1{font-size:12px;text-anchor:middle}._threshold_19br3_10{stroke:gray;stroke-width:1px}._chargelevel_19br3_15{stroke:#00008b;stroke-width:1px;stroke-dasharray:4 4}._spiketrain_19br3_21{stroke:#00f;stroke-width:2px;fill:none}._spike_19br3_21{stroke-width:3px;stroke:red}')),document.head.appendChild(t)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
const xa = {
  display_type: "canvas",
  // either svg or canvas depending on explorable
  debug: !1,
  // if set to true, draws dots on the control panel to help widget placement
  controls_border: "",
  display_border: "",
  debug_lattice: "debug-grid-16",
  controls_grid: { nx: 12, ny: 12 },
  display_size: { width: 1005, height: 1005 },
  controls_size: { width: 480, height: 480 },
  display_class: " tw:p-0",
  controls_class: "tw:p-0",
  container_class: "tw:font-sans tw:grid tw:grid-cols-1 tw:sm:grid-cols-2 tw:sm:gap-8 tw:px-1 tw:sm:p-0 tw:m-8"
};
function _n(t, n) {
  return t == null || n == null ? NaN : t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function Ma(t, n) {
  return t == null || n == null ? NaN : n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
}
function si(t) {
  let n, e, r;
  t.length !== 2 ? (n = _n, e = (s, c) => _n(t(s), c), r = (s, c) => t(s) - c) : (n = t === _n || t === Ma ? t : $a, e = t, r = t);
  function i(s, c, u = 0, d = s.length) {
    if (u < d) {
      if (n(c, c) !== 0) return d;
      do {
        const h = u + d >>> 1;
        e(s[h], c) < 0 ? u = h + 1 : d = h;
      } while (u < d);
    }
    return u;
  }
  function a(s, c, u = 0, d = s.length) {
    if (u < d) {
      if (n(c, c) !== 0) return d;
      do {
        const h = u + d >>> 1;
        e(s[h], c) <= 0 ? u = h + 1 : d = h;
      } while (u < d);
    }
    return u;
  }
  function o(s, c, u = 0, d = s.length) {
    const h = i(s, c, u, d - 1);
    return h > u && r(s[h - 1], c) > -r(s[h], c) ? h - 1 : h;
  }
  return { left: i, center: o, right: a };
}
function $a() {
  return 0;
}
function Aa(t) {
  return t === null ? NaN : +t;
}
const Ta = si(_n), Sa = Ta.right;
si(Aa).center;
const ka = Math.sqrt(50), Ea = Math.sqrt(10), Pa = Math.sqrt(2);
function $n(t, n, e) {
  const r = (n - t) / Math.max(0, e), i = Math.floor(Math.log10(r)), a = r / Math.pow(10, i), o = a >= ka ? 10 : a >= Ea ? 5 : a >= Pa ? 2 : 1;
  let s, c, u;
  return i < 0 ? (u = Math.pow(10, -i) / o, s = Math.round(t * u), c = Math.round(n * u), s / u < t && ++s, c / u > n && --c, u = -u) : (u = Math.pow(10, i) * o, s = Math.round(t / u), c = Math.round(n / u), s * u < t && ++s, c * u > n && --c), c < s && 0.5 <= e && e < 2 ? $n(t, n, e * 2) : [s, c, u];
}
function za(t, n, e) {
  if (n = +n, t = +t, e = +e, !(e > 0)) return [];
  if (t === n) return [t];
  const r = n < t, [i, a, o] = r ? $n(n, t, e) : $n(t, n, e);
  if (!(a >= i)) return [];
  const s = a - i + 1, c = new Array(s);
  if (r)
    if (o < 0) for (let u = 0; u < s; ++u) c[u] = (a - u) / -o;
    else for (let u = 0; u < s; ++u) c[u] = (a - u) * o;
  else if (o < 0) for (let u = 0; u < s; ++u) c[u] = (i + u) / -o;
  else for (let u = 0; u < s; ++u) c[u] = (i + u) * o;
  return c;
}
function de(t, n, e) {
  return n = +n, t = +t, e = +e, $n(t, n, e)[2];
}
function Oa(t, n, e) {
  n = +n, t = +t, e = +e;
  const r = n < t, i = r ? de(n, t, e) : de(t, n, e);
  return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function on(t, n) {
  let e;
  for (const r of t)
    r != null && (e < r || e === void 0 && r >= r) && (e = r);
  return e;
}
function Ia(t, n, e) {
  t = +t, n = +n, e = (i = arguments.length) < 2 ? (n = t, t = 0, 1) : i < 3 ? 1 : +e;
  for (var r = -1, i = Math.max(0, Math.ceil((n - t) / e)) | 0, a = new Array(i); ++r < i; )
    a[r] = t + r * e;
  return a;
}
function Ca(t) {
  return t;
}
var ee = 1, re = 2, pe = 3, Ht = 4, hr = 1e-6;
function Ra(t) {
  return "translate(" + t + ",0)";
}
function Fa(t) {
  return "translate(0," + t + ")";
}
function La(t) {
  return (n) => +t(n);
}
function Da(t, n) {
  return n = Math.max(0, t.bandwidth() - n * 2) / 2, t.round() && (n = Math.round(n)), (e) => +t(e) + n;
}
function qa() {
  return !this.__axis;
}
function ci(t, n) {
  var e = [], r = null, i = null, a = 6, o = 6, s = 3, c = typeof window < "u" && window.devicePixelRatio > 1 ? 0 : 0.5, u = t === ee || t === Ht ? -1 : 1, d = t === Ht || t === re ? "x" : "y", h = t === ee || t === pe ? Ra : Fa;
  function f(l) {
    var p = r ?? (n.ticks ? n.ticks.apply(n, e) : n.domain()), b = i ?? (n.tickFormat ? n.tickFormat.apply(n, e) : Ca), g = Math.max(a, 0) + s, m = n.range(), x = +m[0] + c, M = +m[m.length - 1] + c, y = (n.bandwidth ? Da : La)(n.copy(), c), v = l.selection ? l.selection() : l, S = v.selectAll(".domain").data([null]), $ = v.selectAll(".tick").data(p, n).order(), z = $.exit(), C = $.enter().append("g").attr("class", "tick"), R = $.select("line"), w = $.select("text");
    S = S.merge(S.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), $ = $.merge(C), R = R.merge(C.append("line").attr("stroke", "currentColor").attr(d + "2", u * a)), w = w.merge(C.append("text").attr("fill", "currentColor").attr(d, u * g).attr("dy", t === ee ? "0em" : t === pe ? "0.71em" : "0.32em")), l !== v && (S = S.transition(l), $ = $.transition(l), R = R.transition(l), w = w.transition(l), z = z.transition(l).attr("opacity", hr).attr("transform", function(O) {
      return isFinite(O = y(O)) ? h(O + c) : this.getAttribute("transform");
    }), C.attr("opacity", hr).attr("transform", function(O) {
      var E = this.parentNode.__axis;
      return h((E && isFinite(E = E(O)) ? E : y(O)) + c);
    })), z.remove(), S.attr("d", t === Ht || t === re ? o ? "M" + u * o + "," + x + "H" + c + "V" + M + "H" + u * o : "M" + c + "," + x + "V" + M : o ? "M" + x + "," + u * o + "V" + c + "H" + M + "V" + u * o : "M" + x + "," + c + "H" + M), $.attr("opacity", 1).attr("transform", function(O) {
      return h(y(O) + c);
    }), R.attr(d + "2", u * a), w.attr(d, u * g).text(b), v.filter(qa).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", t === re ? "start" : t === Ht ? "end" : "middle"), v.each(function() {
      this.__axis = y;
    });
  }
  return f.scale = function(l) {
    return arguments.length ? (n = l, f) : n;
  }, f.ticks = function() {
    return e = Array.from(arguments), f;
  }, f.tickArguments = function(l) {
    return arguments.length ? (e = l == null ? [] : Array.from(l), f) : e.slice();
  }, f.tickValues = function(l) {
    return arguments.length ? (r = l == null ? null : Array.from(l), f) : r && r.slice();
  }, f.tickFormat = function(l) {
    return arguments.length ? (i = l, f) : i;
  }, f.tickSize = function(l) {
    return arguments.length ? (a = o = +l, f) : a;
  }, f.tickSizeInner = function(l) {
    return arguments.length ? (a = +l, f) : a;
  }, f.tickSizeOuter = function(l) {
    return arguments.length ? (o = +l, f) : o;
  }, f.tickPadding = function(l) {
    return arguments.length ? (s = +l, f) : s;
  }, f.offset = function(l) {
    return arguments.length ? (c = +l, f) : c;
  }, f;
}
function Ha(t) {
  return ci(pe, t);
}
function Na(t) {
  return ci(Ht, t);
}
var Ba = { value: () => {
} };
function He() {
  for (var t = 0, n = arguments.length, e = {}, r; t < n; ++t) {
    if (!(r = arguments[t] + "") || r in e || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    e[r] = [];
  }
  return new vn(e);
}
function vn(t) {
  this._ = t;
}
function Xa(t, n) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var r = "", i = e.indexOf(".");
    if (i >= 0 && (r = e.slice(i + 1), e = e.slice(0, i)), e && !n.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    return { type: e, name: r };
  });
}
vn.prototype = He.prototype = {
  constructor: vn,
  on: function(t, n) {
    var e = this._, r = Xa(t + "", e), i, a = -1, o = r.length;
    if (arguments.length < 2) {
      for (; ++a < o; ) if ((i = (t = r[a]).type) && (i = Ga(e[i], t.name))) return i;
      return;
    }
    if (n != null && typeof n != "function") throw new Error("invalid callback: " + n);
    for (; ++a < o; )
      if (i = (t = r[a]).type) e[i] = dr(e[i], t.name, n);
      else if (n == null) for (i in e) e[i] = dr(e[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, n = this._;
    for (var e in n) t[e] = n[e].slice();
    return new vn(t);
  },
  call: function(t, n) {
    if ((i = arguments.length - 2) > 0) for (var e = new Array(i), r = 0, i, a; r < i; ++r) e[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (a = this._[t], r = 0, i = a.length; r < i; ++r) a[r].value.apply(n, e);
  },
  apply: function(t, n, e) {
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (var r = this._[t], i = 0, a = r.length; i < a; ++i) r[i].value.apply(n, e);
  }
};
function Ga(t, n) {
  for (var e = 0, r = t.length, i; e < r; ++e)
    if ((i = t[e]).name === n)
      return i.value;
}
function dr(t, n, e) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === n) {
      t[r] = Ba, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return e != null && t.push({ name: n, value: e }), t;
}
var be = "http://www.w3.org/1999/xhtml";
const pr = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: be,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Fn(t) {
  var n = t += "", e = n.indexOf(":");
  return e >= 0 && (n = t.slice(0, e)) !== "xmlns" && (t = t.slice(e + 1)), pr.hasOwnProperty(n) ? { space: pr[n], local: t } : t;
}
function Ua(t) {
  return function() {
    var n = this.ownerDocument, e = this.namespaceURI;
    return e === be && n.documentElement.namespaceURI === be ? n.createElement(t) : n.createElementNS(e, t);
  };
}
function Ya(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function ui(t) {
  var n = Fn(t);
  return (n.local ? Ya : Ua)(n);
}
function Va() {
}
function Ne(t) {
  return t == null ? Va : function() {
    return this.querySelector(t);
  };
}
function Ka(t) {
  typeof t != "function" && (t = Ne(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var a = n[i], o = a.length, s = r[i] = new Array(o), c, u, d = 0; d < o; ++d)
      (c = a[d]) && (u = t.call(c, c.__data__, d, a)) && ("__data__" in c && (u.__data__ = c.__data__), s[d] = u);
  return new H(r, this._parents);
}
function Wa(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function Za() {
  return [];
}
function fi(t) {
  return t == null ? Za : function() {
    return this.querySelectorAll(t);
  };
}
function Ja(t) {
  return function() {
    return Wa(t.apply(this, arguments));
  };
}
function Qa(t) {
  typeof t == "function" ? t = Ja(t) : t = fi(t);
  for (var n = this._groups, e = n.length, r = [], i = [], a = 0; a < e; ++a)
    for (var o = n[a], s = o.length, c, u = 0; u < s; ++u)
      (c = o[u]) && (r.push(t.call(c, c.__data__, u, o)), i.push(c));
  return new H(r, i);
}
function li(t) {
  return function() {
    return this.matches(t);
  };
}
function hi(t) {
  return function(n) {
    return n.matches(t);
  };
}
var ja = Array.prototype.find;
function to(t) {
  return function() {
    return ja.call(this.children, t);
  };
}
function no() {
  return this.firstElementChild;
}
function eo(t) {
  return this.select(t == null ? no : to(typeof t == "function" ? t : hi(t)));
}
var ro = Array.prototype.filter;
function io() {
  return Array.from(this.children);
}
function ao(t) {
  return function() {
    return ro.call(this.children, t);
  };
}
function oo(t) {
  return this.selectAll(t == null ? io : ao(typeof t == "function" ? t : hi(t)));
}
function so(t) {
  typeof t != "function" && (t = li(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var a = n[i], o = a.length, s = r[i] = [], c, u = 0; u < o; ++u)
      (c = a[u]) && t.call(c, c.__data__, u, a) && s.push(c);
  return new H(r, this._parents);
}
function di(t) {
  return new Array(t.length);
}
function co() {
  return new H(this._enter || this._groups.map(di), this._parents);
}
function An(t, n) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n;
}
An.prototype = {
  constructor: An,
  appendChild: function(t) {
    return this._parent.insertBefore(t, this._next);
  },
  insertBefore: function(t, n) {
    return this._parent.insertBefore(t, n);
  },
  querySelector: function(t) {
    return this._parent.querySelector(t);
  },
  querySelectorAll: function(t) {
    return this._parent.querySelectorAll(t);
  }
};
function uo(t) {
  return function() {
    return t;
  };
}
function fo(t, n, e, r, i, a) {
  for (var o = 0, s, c = n.length, u = a.length; o < u; ++o)
    (s = n[o]) ? (s.__data__ = a[o], r[o] = s) : e[o] = new An(t, a[o]);
  for (; o < c; ++o)
    (s = n[o]) && (i[o] = s);
}
function lo(t, n, e, r, i, a, o) {
  var s, c, u = /* @__PURE__ */ new Map(), d = n.length, h = a.length, f = new Array(d), l;
  for (s = 0; s < d; ++s)
    (c = n[s]) && (f[s] = l = o.call(c, c.__data__, s, n) + "", u.has(l) ? i[s] = c : u.set(l, c));
  for (s = 0; s < h; ++s)
    l = o.call(t, a[s], s, a) + "", (c = u.get(l)) ? (r[s] = c, c.__data__ = a[s], u.delete(l)) : e[s] = new An(t, a[s]);
  for (s = 0; s < d; ++s)
    (c = n[s]) && u.get(f[s]) === c && (i[s] = c);
}
function ho(t) {
  return t.__data__;
}
function po(t, n) {
  if (!arguments.length) return Array.from(this, ho);
  var e = n ? lo : fo, r = this._parents, i = this._groups;
  typeof t != "function" && (t = uo(t));
  for (var a = i.length, o = new Array(a), s = new Array(a), c = new Array(a), u = 0; u < a; ++u) {
    var d = r[u], h = i[u], f = h.length, l = bo(t.call(d, d && d.__data__, u, r)), p = l.length, b = s[u] = new Array(p), g = o[u] = new Array(p), m = c[u] = new Array(f);
    e(d, h, b, g, m, l, n);
    for (var x = 0, M = 0, y, v; x < p; ++x)
      if (y = b[x]) {
        for (x >= M && (M = x + 1); !(v = g[M]) && ++M < p; ) ;
        y._next = v || null;
      }
  }
  return o = new H(o, r), o._enter = s, o._exit = c, o;
}
function bo(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function go() {
  return new H(this._exit || this._groups.map(di), this._parents);
}
function yo(t, n, e) {
  var r = this.enter(), i = this, a = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), n != null && (i = n(i), i && (i = i.selection())), e == null ? a.remove() : e(a), r && i ? r.merge(i).order() : i;
}
function mo(t) {
  for (var n = t.selection ? t.selection() : t, e = this._groups, r = n._groups, i = e.length, a = r.length, o = Math.min(i, a), s = new Array(i), c = 0; c < o; ++c)
    for (var u = e[c], d = r[c], h = u.length, f = s[c] = new Array(h), l, p = 0; p < h; ++p)
      (l = u[p] || d[p]) && (f[p] = l);
  for (; c < i; ++c)
    s[c] = e[c];
  return new H(s, this._parents);
}
function _o() {
  for (var t = this._groups, n = -1, e = t.length; ++n < e; )
    for (var r = t[n], i = r.length - 1, a = r[i], o; --i >= 0; )
      (o = r[i]) && (a && o.compareDocumentPosition(a) ^ 4 && a.parentNode.insertBefore(o, a), a = o);
  return this;
}
function vo(t) {
  t || (t = wo);
  function n(h, f) {
    return h && f ? t(h.__data__, f.__data__) : !h - !f;
  }
  for (var e = this._groups, r = e.length, i = new Array(r), a = 0; a < r; ++a) {
    for (var o = e[a], s = o.length, c = i[a] = new Array(s), u, d = 0; d < s; ++d)
      (u = o[d]) && (c[d] = u);
    c.sort(n);
  }
  return new H(i, this._parents).order();
}
function wo(t, n) {
  return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function xo() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function Mo() {
  return Array.from(this);
}
function $o() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, a = r.length; i < a; ++i) {
      var o = r[i];
      if (o) return o;
    }
  return null;
}
function Ao() {
  let t = 0;
  for (const n of this) ++t;
  return t;
}
function To() {
  return !this.node();
}
function So(t) {
  for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
    for (var i = n[e], a = 0, o = i.length, s; a < o; ++a)
      (s = i[a]) && t.call(s, s.__data__, a, i);
  return this;
}
function ko(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Eo(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Po(t, n) {
  return function() {
    this.setAttribute(t, n);
  };
}
function zo(t, n) {
  return function() {
    this.setAttributeNS(t.space, t.local, n);
  };
}
function Oo(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttribute(t) : this.setAttribute(t, e);
  };
}
function Io(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e);
  };
}
function Co(t, n) {
  var e = Fn(t);
  if (arguments.length < 2) {
    var r = this.node();
    return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e);
  }
  return this.each((n == null ? e.local ? Eo : ko : typeof n == "function" ? e.local ? Io : Oo : e.local ? zo : Po)(e, n));
}
function pi(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function Ro(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Fo(t, n, e) {
  return function() {
    this.style.setProperty(t, n, e);
  };
}
function Lo(t, n, e) {
  return function() {
    var r = n.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, e);
  };
}
function Do(t, n, e) {
  return arguments.length > 1 ? this.each((n == null ? Ro : typeof n == "function" ? Lo : Fo)(t, n, e ?? "")) : It(this.node(), t);
}
function It(t, n) {
  return t.style.getPropertyValue(n) || pi(t).getComputedStyle(t, null).getPropertyValue(n);
}
function qo(t) {
  return function() {
    delete this[t];
  };
}
function Ho(t, n) {
  return function() {
    this[t] = n;
  };
}
function No(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? delete this[t] : this[t] = e;
  };
}
function Bo(t, n) {
  return arguments.length > 1 ? this.each((n == null ? qo : typeof n == "function" ? No : Ho)(t, n)) : this.node()[t];
}
function bi(t) {
  return t.trim().split(/^|\s+/);
}
function Be(t) {
  return t.classList || new gi(t);
}
function gi(t) {
  this._node = t, this._names = bi(t.getAttribute("class") || "");
}
gi.prototype = {
  add: function(t) {
    var n = this._names.indexOf(t);
    n < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(t) {
    var n = this._names.indexOf(t);
    n >= 0 && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(t) {
    return this._names.indexOf(t) >= 0;
  }
};
function yi(t, n) {
  for (var e = Be(t), r = -1, i = n.length; ++r < i; ) e.add(n[r]);
}
function mi(t, n) {
  for (var e = Be(t), r = -1, i = n.length; ++r < i; ) e.remove(n[r]);
}
function Xo(t) {
  return function() {
    yi(this, t);
  };
}
function Go(t) {
  return function() {
    mi(this, t);
  };
}
function Uo(t, n) {
  return function() {
    (n.apply(this, arguments) ? yi : mi)(this, t);
  };
}
function Yo(t, n) {
  var e = bi(t + "");
  if (arguments.length < 2) {
    for (var r = Be(this.node()), i = -1, a = e.length; ++i < a; ) if (!r.contains(e[i])) return !1;
    return !0;
  }
  return this.each((typeof n == "function" ? Uo : n ? Xo : Go)(e, n));
}
function Vo() {
  this.textContent = "";
}
function Ko(t) {
  return function() {
    this.textContent = t;
  };
}
function Wo(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.textContent = n ?? "";
  };
}
function Zo(t) {
  return arguments.length ? this.each(t == null ? Vo : (typeof t == "function" ? Wo : Ko)(t)) : this.node().textContent;
}
function Jo() {
  this.innerHTML = "";
}
function Qo(t) {
  return function() {
    this.innerHTML = t;
  };
}
function jo(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.innerHTML = n ?? "";
  };
}
function ts(t) {
  return arguments.length ? this.each(t == null ? Jo : (typeof t == "function" ? jo : Qo)(t)) : this.node().innerHTML;
}
function ns() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function es() {
  return this.each(ns);
}
function rs() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function is() {
  return this.each(rs);
}
function as(t) {
  var n = typeof t == "function" ? t : ui(t);
  return this.select(function() {
    return this.appendChild(n.apply(this, arguments));
  });
}
function os() {
  return null;
}
function ss(t, n) {
  var e = typeof t == "function" ? t : ui(t), r = n == null ? os : typeof n == "function" ? n : Ne(n);
  return this.select(function() {
    return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function cs() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function us() {
  return this.each(cs);
}
function fs() {
  var t = this.cloneNode(!1), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function ls() {
  var t = this.cloneNode(!0), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function hs(t) {
  return this.select(t ? ls : fs);
}
function ds(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function ps(t) {
  return function(n) {
    t.call(this, n, this.__data__);
  };
}
function bs(t) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var e = "", r = n.indexOf(".");
    return r >= 0 && (e = n.slice(r + 1), n = n.slice(0, r)), { type: n, name: e };
  });
}
function gs(t) {
  return function() {
    var n = this.__on;
    if (n) {
      for (var e = 0, r = -1, i = n.length, a; e < i; ++e)
        a = n[e], (!t.type || a.type === t.type) && a.name === t.name ? this.removeEventListener(a.type, a.listener, a.options) : n[++r] = a;
      ++r ? n.length = r : delete this.__on;
    }
  };
}
function ys(t, n, e) {
  return function() {
    var r = this.__on, i, a = ps(n);
    if (r) {
      for (var o = 0, s = r.length; o < s; ++o)
        if ((i = r[o]).type === t.type && i.name === t.name) {
          this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = a, i.options = e), i.value = n;
          return;
        }
    }
    this.addEventListener(t.type, a, e), i = { type: t.type, name: t.name, value: n, listener: a, options: e }, r ? r.push(i) : this.__on = [i];
  };
}
function ms(t, n, e) {
  var r = bs(t + ""), i, a = r.length, o;
  if (arguments.length < 2) {
    var s = this.node().__on;
    if (s) {
      for (var c = 0, u = s.length, d; c < u; ++c)
        for (i = 0, d = s[c]; i < a; ++i)
          if ((o = r[i]).type === d.type && o.name === d.name)
            return d.value;
    }
    return;
  }
  for (s = n ? ys : gs, i = 0; i < a; ++i) this.each(s(r[i], n, e));
  return this;
}
function _i(t, n, e) {
  var r = pi(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)), t.dispatchEvent(i);
}
function _s(t, n) {
  return function() {
    return _i(this, t, n);
  };
}
function vs(t, n) {
  return function() {
    return _i(this, t, n.apply(this, arguments));
  };
}
function ws(t, n) {
  return this.each((typeof n == "function" ? vs : _s)(t, n));
}
function* xs() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, a = r.length, o; i < a; ++i)
      (o = r[i]) && (yield o);
}
var vi = [null];
function H(t, n) {
  this._groups = t, this._parents = n;
}
function tn() {
  return new H([[document.documentElement]], vi);
}
function Ms() {
  return this;
}
H.prototype = tn.prototype = {
  constructor: H,
  select: Ka,
  selectAll: Qa,
  selectChild: eo,
  selectChildren: oo,
  filter: so,
  data: po,
  enter: co,
  exit: go,
  join: yo,
  merge: mo,
  selection: Ms,
  order: _o,
  sort: vo,
  call: xo,
  nodes: Mo,
  node: $o,
  size: Ao,
  empty: To,
  each: So,
  attr: Co,
  style: Do,
  property: Bo,
  classed: Yo,
  text: Zo,
  html: ts,
  raise: es,
  lower: is,
  append: as,
  insert: ss,
  remove: us,
  clone: hs,
  datum: ds,
  on: ms,
  dispatch: ws,
  [Symbol.iterator]: xs
};
function P(t) {
  return typeof t == "string" ? new H([[document.querySelector(t)]], [document.documentElement]) : new H([[t]], vi);
}
function $s(t) {
  let n;
  for (; n = t.sourceEvent; ) t = n;
  return t;
}
function ge(t, n) {
  if (t = $s(t), n === void 0 && (n = t.currentTarget), n) {
    var e = n.ownerSVGElement || n;
    if (e.createSVGPoint) {
      var r = e.createSVGPoint();
      return r.x = t.clientX, r.y = t.clientY, r = r.matrixTransform(n.getScreenCTM().inverse()), [r.x, r.y];
    }
    if (n.getBoundingClientRect) {
      var i = n.getBoundingClientRect();
      return [t.clientX - i.left - n.clientLeft, t.clientY - i.top - n.clientTop];
    }
  }
  return [t.pageX, t.pageY];
}
const As = { passive: !1 }, Vt = { capture: !0, passive: !1 };
function ie(t) {
  t.stopImmediatePropagation();
}
function Pt(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function Ts(t) {
  var n = t.document.documentElement, e = P(t).on("dragstart.drag", Pt, Vt);
  "onselectstart" in n ? e.on("selectstart.drag", Pt, Vt) : (n.__noselect = n.style.MozUserSelect, n.style.MozUserSelect = "none");
}
function Ss(t, n) {
  var e = t.document.documentElement, r = P(t).on("dragstart.drag", null);
  n && (r.on("click.drag", Pt, Vt), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in e ? r.on("selectstart.drag", null) : (e.style.MozUserSelect = e.__noselect, delete e.__noselect);
}
const sn = (t) => () => t;
function ye(t, {
  sourceEvent: n,
  subject: e,
  target: r,
  identifier: i,
  active: a,
  x: o,
  y: s,
  dx: c,
  dy: u,
  dispatch: d
}) {
  Object.defineProperties(this, {
    type: { value: t, enumerable: !0, configurable: !0 },
    sourceEvent: { value: n, enumerable: !0, configurable: !0 },
    subject: { value: e, enumerable: !0, configurable: !0 },
    target: { value: r, enumerable: !0, configurable: !0 },
    identifier: { value: i, enumerable: !0, configurable: !0 },
    active: { value: a, enumerable: !0, configurable: !0 },
    x: { value: o, enumerable: !0, configurable: !0 },
    y: { value: s, enumerable: !0, configurable: !0 },
    dx: { value: c, enumerable: !0, configurable: !0 },
    dy: { value: u, enumerable: !0, configurable: !0 },
    _: { value: d }
  });
}
ye.prototype.on = function() {
  var t = this._.on.apply(this._, arguments);
  return t === this._ ? this : t;
};
function ks(t) {
  return !t.ctrlKey && !t.button;
}
function Es() {
  return this.parentNode;
}
function Ps(t, n) {
  return n ?? { x: t.x, y: t.y };
}
function zs() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Os() {
  var t = ks, n = Es, e = Ps, r = zs, i = {}, a = He("start", "drag", "end"), o = 0, s, c, u, d, h = 0;
  function f(y) {
    y.on("mousedown.drag", l).filter(r).on("touchstart.drag", g).on("touchmove.drag", m, As).on("touchend.drag touchcancel.drag", x).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function l(y, v) {
    if (!(d || !t.call(this, y, v))) {
      var S = M(this, n.call(this, y, v), y, v, "mouse");
      S && (P(y.view).on("mousemove.drag", p, Vt).on("mouseup.drag", b, Vt), Ts(y.view), ie(y), u = !1, s = y.clientX, c = y.clientY, S("start", y));
    }
  }
  function p(y) {
    if (Pt(y), !u) {
      var v = y.clientX - s, S = y.clientY - c;
      u = v * v + S * S > h;
    }
    i.mouse("drag", y);
  }
  function b(y) {
    P(y.view).on("mousemove.drag mouseup.drag", null), Ss(y.view, u), Pt(y), i.mouse("end", y);
  }
  function g(y, v) {
    if (t.call(this, y, v)) {
      var S = y.changedTouches, $ = n.call(this, y, v), z = S.length, C, R;
      for (C = 0; C < z; ++C)
        (R = M(this, $, y, v, S[C].identifier, S[C])) && (ie(y), R("start", y, S[C]));
    }
  }
  function m(y) {
    var v = y.changedTouches, S = v.length, $, z;
    for ($ = 0; $ < S; ++$)
      (z = i[v[$].identifier]) && (Pt(y), z("drag", y, v[$]));
  }
  function x(y) {
    var v = y.changedTouches, S = v.length, $, z;
    for (d && clearTimeout(d), d = setTimeout(function() {
      d = null;
    }, 500), $ = 0; $ < S; ++$)
      (z = i[v[$].identifier]) && (ie(y), z("end", y, v[$]));
  }
  function M(y, v, S, $, z, C) {
    var R = a.copy(), w = ge(C || S, v), O, E, G;
    if ((G = e.call(y, new ye("beforestart", {
      sourceEvent: S,
      target: f,
      identifier: z,
      active: o,
      x: w[0],
      y: w[1],
      dx: 0,
      dy: 0,
      dispatch: R
    }), $)) != null)
      return O = G.x - w[0] || 0, E = G.y - w[1] || 0, function an(ft, pt, St) {
        var B = w, ne;
        switch (ft) {
          case "start":
            i[z] = an, ne = o++;
            break;
          case "end":
            delete i[z], --o;
          // falls through
          case "drag":
            w = ge(St || pt, v), ne = o;
            break;
        }
        R.call(
          ft,
          y,
          new ye(ft, {
            sourceEvent: pt,
            subject: G,
            target: f,
            identifier: z,
            active: ne,
            x: w[0] + O,
            y: w[1] + E,
            dx: w[0] - B[0],
            dy: w[1] - B[1],
            dispatch: R
          }),
          $
        );
      };
  }
  return f.filter = function(y) {
    return arguments.length ? (t = typeof y == "function" ? y : sn(!!y), f) : t;
  }, f.container = function(y) {
    return arguments.length ? (n = typeof y == "function" ? y : sn(y), f) : n;
  }, f.subject = function(y) {
    return arguments.length ? (e = typeof y == "function" ? y : sn(y), f) : e;
  }, f.touchable = function(y) {
    return arguments.length ? (r = typeof y == "function" ? y : sn(!!y), f) : r;
  }, f.on = function() {
    var y = a.on.apply(a, arguments);
    return y === a ? f : y;
  }, f.clickDistance = function(y) {
    return arguments.length ? (h = (y = +y) * y, f) : Math.sqrt(h);
  }, f;
}
function Xe(t, n, e) {
  t.prototype = n.prototype = e, e.constructor = t;
}
function wi(t, n) {
  var e = Object.create(t.prototype);
  for (var r in n) e[r] = n[r];
  return e;
}
function nn() {
}
var Kt = 0.7, Tn = 1 / Kt, zt = "\\s*([+-]?\\d+)\\s*", Wt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", W = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Is = /^#([0-9a-f]{3,8})$/, Cs = new RegExp(`^rgb\\(${zt},${zt},${zt}\\)$`), Rs = new RegExp(`^rgb\\(${W},${W},${W}\\)$`), Fs = new RegExp(`^rgba\\(${zt},${zt},${zt},${Wt}\\)$`), Ls = new RegExp(`^rgba\\(${W},${W},${W},${Wt}\\)$`), Ds = new RegExp(`^hsl\\(${Wt},${W},${W}\\)$`), qs = new RegExp(`^hsla\\(${Wt},${W},${W},${Wt}\\)$`), br = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
Xe(nn, vt, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: gr,
  // Deprecated! Use color.formatHex.
  formatHex: gr,
  formatHex8: Hs,
  formatHsl: Ns,
  formatRgb: yr,
  toString: yr
});
function gr() {
  return this.rgb().formatHex();
}
function Hs() {
  return this.rgb().formatHex8();
}
function Ns() {
  return xi(this).formatHsl();
}
function yr() {
  return this.rgb().formatRgb();
}
function vt(t) {
  var n, e;
  return t = (t + "").trim().toLowerCase(), (n = Is.exec(t)) ? (e = n[1].length, n = parseInt(n[1], 16), e === 6 ? mr(n) : e === 3 ? new q(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, (n & 15) << 4 | n & 15, 1) : e === 8 ? cn(n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, (n & 255) / 255) : e === 4 ? cn(n >> 12 & 15 | n >> 8 & 240, n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, ((n & 15) << 4 | n & 15) / 255) : null) : (n = Cs.exec(t)) ? new q(n[1], n[2], n[3], 1) : (n = Rs.exec(t)) ? new q(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, 1) : (n = Fs.exec(t)) ? cn(n[1], n[2], n[3], n[4]) : (n = Ls.exec(t)) ? cn(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, n[4]) : (n = Ds.exec(t)) ? wr(n[1], n[2] / 100, n[3] / 100, 1) : (n = qs.exec(t)) ? wr(n[1], n[2] / 100, n[3] / 100, n[4]) : br.hasOwnProperty(t) ? mr(br[t]) : t === "transparent" ? new q(NaN, NaN, NaN, 0) : null;
}
function mr(t) {
  return new q(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function cn(t, n, e, r) {
  return r <= 0 && (t = n = e = NaN), new q(t, n, e, r);
}
function Bs(t) {
  return t instanceof nn || (t = vt(t)), t ? (t = t.rgb(), new q(t.r, t.g, t.b, t.opacity)) : new q();
}
function Sn(t, n, e, r) {
  return arguments.length === 1 ? Bs(t) : new q(t, n, e, r ?? 1);
}
function q(t, n, e, r) {
  this.r = +t, this.g = +n, this.b = +e, this.opacity = +r;
}
Xe(q, Sn, wi(nn, {
  brighter(t) {
    return t = t == null ? Tn : Math.pow(Tn, t), new q(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Kt : Math.pow(Kt, t), new q(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new q(mt(this.r), mt(this.g), mt(this.b), kn(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: _r,
  // Deprecated! Use color.formatHex.
  formatHex: _r,
  formatHex8: Xs,
  formatRgb: vr,
  toString: vr
}));
function _r() {
  return `#${yt(this.r)}${yt(this.g)}${yt(this.b)}`;
}
function Xs() {
  return `#${yt(this.r)}${yt(this.g)}${yt(this.b)}${yt((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function vr() {
  const t = kn(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${mt(this.r)}, ${mt(this.g)}, ${mt(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function kn(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function mt(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function yt(t) {
  return t = mt(t), (t < 16 ? "0" : "") + t.toString(16);
}
function wr(t, n, e, r) {
  return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new Y(t, n, e, r);
}
function xi(t) {
  if (t instanceof Y) return new Y(t.h, t.s, t.l, t.opacity);
  if (t instanceof nn || (t = vt(t)), !t) return new Y();
  if (t instanceof Y) return t;
  t = t.rgb();
  var n = t.r / 255, e = t.g / 255, r = t.b / 255, i = Math.min(n, e, r), a = Math.max(n, e, r), o = NaN, s = a - i, c = (a + i) / 2;
  return s ? (n === a ? o = (e - r) / s + (e < r) * 6 : e === a ? o = (r - n) / s + 2 : o = (n - e) / s + 4, s /= c < 0.5 ? a + i : 2 - a - i, o *= 60) : s = c > 0 && c < 1 ? 0 : o, new Y(o, s, c, t.opacity);
}
function Gs(t, n, e, r) {
  return arguments.length === 1 ? xi(t) : new Y(t, n, e, r ?? 1);
}
function Y(t, n, e, r) {
  this.h = +t, this.s = +n, this.l = +e, this.opacity = +r;
}
Xe(Y, Gs, wi(nn, {
  brighter(t) {
    return t = t == null ? Tn : Math.pow(Tn, t), new Y(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Kt : Math.pow(Kt, t), new Y(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, n = isNaN(t) || isNaN(this.s) ? 0 : this.s, e = this.l, r = e + (e < 0.5 ? e : 1 - e) * n, i = 2 * e - r;
    return new q(
      ae(t >= 240 ? t - 240 : t + 120, i, r),
      ae(t, i, r),
      ae(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new Y(xr(this.h), un(this.s), un(this.l), kn(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = kn(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${xr(this.h)}, ${un(this.s) * 100}%, ${un(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function xr(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function un(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function ae(t, n, e) {
  return (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n) * 255;
}
const Ge = (t) => () => t;
function Us(t, n) {
  return function(e) {
    return t + e * n;
  };
}
function Ys(t, n, e) {
  return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e, function(r) {
    return Math.pow(t + r * n, e);
  };
}
function Vs(t) {
  return (t = +t) == 1 ? Mi : function(n, e) {
    return e - n ? Ys(n, e, t) : Ge(isNaN(n) ? e : n);
  };
}
function Mi(t, n) {
  var e = n - t;
  return e ? Us(t, e) : Ge(isNaN(t) ? n : t);
}
const lt = function t(n) {
  var e = Vs(n);
  function r(i, a) {
    var o = e((i = Sn(i)).r, (a = Sn(a)).r), s = e(i.g, a.g), c = e(i.b, a.b), u = Mi(i.opacity, a.opacity);
    return function(d) {
      return i.r = o(d), i.g = s(d), i.b = c(d), i.opacity = u(d), i + "";
    };
  }
  return r.gamma = t, r;
}(1);
function Ks(t, n) {
  n || (n = []);
  var e = t ? Math.min(n.length, t.length) : 0, r = n.slice(), i;
  return function(a) {
    for (i = 0; i < e; ++i) r[i] = t[i] * (1 - a) + n[i] * a;
    return r;
  };
}
function Ws(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function Zs(t, n) {
  var e = n ? n.length : 0, r = t ? Math.min(e, t.length) : 0, i = new Array(r), a = new Array(e), o;
  for (o = 0; o < r; ++o) i[o] = Ln(t[o], n[o]);
  for (; o < e; ++o) a[o] = n[o];
  return function(s) {
    for (o = 0; o < r; ++o) a[o] = i[o](s);
    return a;
  };
}
function Js(t, n) {
  var e = /* @__PURE__ */ new Date();
  return t = +t, n = +n, function(r) {
    return e.setTime(t * (1 - r) + n * r), e;
  };
}
function U(t, n) {
  return t = +t, n = +n, function(e) {
    return t * (1 - e) + n * e;
  };
}
function Qs(t, n) {
  var e = {}, r = {}, i;
  (t === null || typeof t != "object") && (t = {}), (n === null || typeof n != "object") && (n = {});
  for (i in n)
    i in t ? e[i] = Ln(t[i], n[i]) : r[i] = n[i];
  return function(a) {
    for (i in e) r[i] = e[i](a);
    return r;
  };
}
var me = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, oe = new RegExp(me.source, "g");
function js(t) {
  return function() {
    return t;
  };
}
function tc(t) {
  return function(n) {
    return t(n) + "";
  };
}
function $i(t, n) {
  var e = me.lastIndex = oe.lastIndex = 0, r, i, a, o = -1, s = [], c = [];
  for (t = t + "", n = n + ""; (r = me.exec(t)) && (i = oe.exec(n)); )
    (a = i.index) > e && (a = n.slice(e, a), s[o] ? s[o] += a : s[++o] = a), (r = r[0]) === (i = i[0]) ? s[o] ? s[o] += i : s[++o] = i : (s[++o] = null, c.push({ i: o, x: U(r, i) })), e = oe.lastIndex;
  return e < n.length && (a = n.slice(e), s[o] ? s[o] += a : s[++o] = a), s.length < 2 ? c[0] ? tc(c[0].x) : js(n) : (n = c.length, function(u) {
    for (var d = 0, h; d < n; ++d) s[(h = c[d]).i] = h.x(u);
    return s.join("");
  });
}
function Ln(t, n) {
  var e = typeof n, r;
  return n == null || e === "boolean" ? Ge(n) : (e === "number" ? U : e === "string" ? (r = vt(n)) ? (n = r, lt) : $i : n instanceof vt ? lt : n instanceof Date ? Js : Ws(n) ? Ks : Array.isArray(n) ? Zs : typeof n.valueOf != "function" && typeof n.toString != "function" || isNaN(n) ? Qs : U)(t, n);
}
function nc(t, n) {
  return t = +t, n = +n, function(e) {
    return Math.round(t * (1 - e) + n * e);
  };
}
var Mr = 180 / Math.PI, _e = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Ai(t, n, e, r, i, a) {
  var o, s, c;
  return (o = Math.sqrt(t * t + n * n)) && (t /= o, n /= o), (c = t * e + n * r) && (e -= t * c, r -= n * c), (s = Math.sqrt(e * e + r * r)) && (e /= s, r /= s, c /= s), t * r < n * e && (t = -t, n = -n, c = -c, o = -o), {
    translateX: i,
    translateY: a,
    rotate: Math.atan2(n, t) * Mr,
    skewX: Math.atan(c) * Mr,
    scaleX: o,
    scaleY: s
  };
}
var fn;
function ec(t) {
  const n = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return n.isIdentity ? _e : Ai(n.a, n.b, n.c, n.d, n.e, n.f);
}
function rc(t) {
  return t == null || (fn || (fn = document.createElementNS("http://www.w3.org/2000/svg", "g")), fn.setAttribute("transform", t), !(t = fn.transform.baseVal.consolidate())) ? _e : (t = t.matrix, Ai(t.a, t.b, t.c, t.d, t.e, t.f));
}
function Ti(t, n, e, r) {
  function i(u) {
    return u.length ? u.pop() + " " : "";
  }
  function a(u, d, h, f, l, p) {
    if (u !== h || d !== f) {
      var b = l.push("translate(", null, n, null, e);
      p.push({ i: b - 4, x: U(u, h) }, { i: b - 2, x: U(d, f) });
    } else (h || f) && l.push("translate(" + h + n + f + e);
  }
  function o(u, d, h, f) {
    u !== d ? (u - d > 180 ? d += 360 : d - u > 180 && (u += 360), f.push({ i: h.push(i(h) + "rotate(", null, r) - 2, x: U(u, d) })) : d && h.push(i(h) + "rotate(" + d + r);
  }
  function s(u, d, h, f) {
    u !== d ? f.push({ i: h.push(i(h) + "skewX(", null, r) - 2, x: U(u, d) }) : d && h.push(i(h) + "skewX(" + d + r);
  }
  function c(u, d, h, f, l, p) {
    if (u !== h || d !== f) {
      var b = l.push(i(l) + "scale(", null, ",", null, ")");
      p.push({ i: b - 4, x: U(u, h) }, { i: b - 2, x: U(d, f) });
    } else (h !== 1 || f !== 1) && l.push(i(l) + "scale(" + h + "," + f + ")");
  }
  return function(u, d) {
    var h = [], f = [];
    return u = t(u), d = t(d), a(u.translateX, u.translateY, d.translateX, d.translateY, h, f), o(u.rotate, d.rotate, h, f), s(u.skewX, d.skewX, h, f), c(u.scaleX, u.scaleY, d.scaleX, d.scaleY, h, f), u = d = null, function(l) {
      for (var p = -1, b = f.length, g; ++p < b; ) h[(g = f[p]).i] = g.x(l);
      return h.join("");
    };
  };
}
var ic = Ti(ec, "px, ", "px)", "deg)"), ac = Ti(rc, ", ", ")", ")");
function ln(t, n) {
  n === void 0 && (n = t, t = Ln);
  for (var e = 0, r = n.length - 1, i = n[0], a = new Array(r < 0 ? 0 : r); e < r; ) a[e] = t(i, i = n[++e]);
  return function(o) {
    var s = Math.max(0, Math.min(r - 1, Math.floor(o *= r)));
    return a[s](o - s);
  };
}
var Ct = 0, Nt = 0, Dt = 0, Si = 1e3, En, Bt, Pn = 0, wt = 0, Dn = 0, Zt = typeof performance == "object" && performance.now ? performance : Date, ki = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function qn() {
  return wt || (ki(oc), wt = Zt.now() + Dn);
}
function oc() {
  wt = 0;
}
function Jt() {
  this._call = this._time = this._next = null;
}
Jt.prototype = Ei.prototype = {
  constructor: Jt,
  restart: function(t, n, e) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    e = (e == null ? qn() : +e) + (n == null ? 0 : +n), !this._next && Bt !== this && (Bt ? Bt._next = this : En = this, Bt = this), this._call = t, this._time = e, ve();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, ve());
  }
};
function Ei(t, n, e) {
  var r = new Jt();
  return r.restart(t, n, e), r;
}
function sc() {
  qn(), ++Ct;
  for (var t = En, n; t; )
    (n = wt - t._time) >= 0 && t._call.call(void 0, n), t = t._next;
  --Ct;
}
function $r() {
  wt = (Pn = Zt.now()) + Dn, Ct = Nt = 0;
  try {
    sc();
  } finally {
    Ct = 0, uc(), wt = 0;
  }
}
function cc() {
  var t = Zt.now(), n = t - Pn;
  n > Si && (Dn -= n, Pn = t);
}
function uc() {
  for (var t, n = En, e, r = 1 / 0; n; )
    n._call ? (r > n._time && (r = n._time), t = n, n = n._next) : (e = n._next, n._next = null, n = t ? t._next = e : En = e);
  Bt = t, ve(r);
}
function ve(t) {
  if (!Ct) {
    Nt && (Nt = clearTimeout(Nt));
    var n = t - wt;
    n > 24 ? (t < 1 / 0 && (Nt = setTimeout($r, t - Zt.now() - Dn)), Dt && (Dt = clearInterval(Dt))) : (Dt || (Pn = Zt.now(), Dt = setInterval(cc, Si)), Ct = 1, ki($r));
  }
}
function Ar(t, n, e) {
  var r = new Jt();
  return n = n == null ? 0 : +n, r.restart((i) => {
    r.stop(), t(i + n);
  }, n, e), r;
}
function fc(t, n, e) {
  var r = new Jt(), i = n;
  return r._restart = r.restart, r.restart = function(a, o, s) {
    o = +o, s = s == null ? qn() : +s, r._restart(function c(u) {
      u += i, r._restart(c, i += o, s), a(u);
    }, o, s);
  }, r.restart(t, n, e), r;
}
var lc = He("start", "end", "cancel", "interrupt"), hc = [], Pi = 0, Tr = 1, we = 2, wn = 3, Sr = 4, xe = 5, xn = 6;
function Hn(t, n, e, r, i, a) {
  var o = t.__transition;
  if (!o) t.__transition = {};
  else if (e in o) return;
  dc(t, e, {
    name: n,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: lc,
    tween: hc,
    time: a.time,
    delay: a.delay,
    duration: a.duration,
    ease: a.ease,
    timer: null,
    state: Pi
  });
}
function Ue(t, n) {
  var e = V(t, n);
  if (e.state > Pi) throw new Error("too late; already scheduled");
  return e;
}
function J(t, n) {
  var e = V(t, n);
  if (e.state > wn) throw new Error("too late; already running");
  return e;
}
function V(t, n) {
  var e = t.__transition;
  if (!e || !(e = e[n])) throw new Error("transition not found");
  return e;
}
function dc(t, n, e) {
  var r = t.__transition, i;
  r[n] = e, e.timer = Ei(a, 0, e.time);
  function a(u) {
    e.state = Tr, e.timer.restart(o, e.delay, e.time), e.delay <= u && o(u - e.delay);
  }
  function o(u) {
    var d, h, f, l;
    if (e.state !== Tr) return c();
    for (d in r)
      if (l = r[d], l.name === e.name) {
        if (l.state === wn) return Ar(o);
        l.state === Sr ? (l.state = xn, l.timer.stop(), l.on.call("interrupt", t, t.__data__, l.index, l.group), delete r[d]) : +d < n && (l.state = xn, l.timer.stop(), l.on.call("cancel", t, t.__data__, l.index, l.group), delete r[d]);
      }
    if (Ar(function() {
      e.state === wn && (e.state = Sr, e.timer.restart(s, e.delay, e.time), s(u));
    }), e.state = we, e.on.call("start", t, t.__data__, e.index, e.group), e.state === we) {
      for (e.state = wn, i = new Array(f = e.tween.length), d = 0, h = -1; d < f; ++d)
        (l = e.tween[d].value.call(t, t.__data__, e.index, e.group)) && (i[++h] = l);
      i.length = h + 1;
    }
  }
  function s(u) {
    for (var d = u < e.duration ? e.ease.call(null, u / e.duration) : (e.timer.restart(c), e.state = xe, 1), h = -1, f = i.length; ++h < f; )
      i[h].call(t, d);
    e.state === xe && (e.on.call("end", t, t.__data__, e.index, e.group), c());
  }
  function c() {
    e.state = xn, e.timer.stop(), delete r[n];
    for (var u in r) return;
    delete t.__transition;
  }
}
function pc(t, n) {
  var e = t.__transition, r, i, a = !0, o;
  if (e) {
    n = n == null ? null : n + "";
    for (o in e) {
      if ((r = e[o]).name !== n) {
        a = !1;
        continue;
      }
      i = r.state > we && r.state < xe, r.state = xn, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete e[o];
    }
    a && delete t.__transition;
  }
}
function bc(t) {
  return this.each(function() {
    pc(this, t);
  });
}
function gc(t, n) {
  var e, r;
  return function() {
    var i = J(this, t), a = i.tween;
    if (a !== e) {
      r = e = a;
      for (var o = 0, s = r.length; o < s; ++o)
        if (r[o].name === n) {
          r = r.slice(), r.splice(o, 1);
          break;
        }
    }
    i.tween = r;
  };
}
function yc(t, n, e) {
  var r, i;
  if (typeof e != "function") throw new Error();
  return function() {
    var a = J(this, t), o = a.tween;
    if (o !== r) {
      i = (r = o).slice();
      for (var s = { name: n, value: e }, c = 0, u = i.length; c < u; ++c)
        if (i[c].name === n) {
          i[c] = s;
          break;
        }
      c === u && i.push(s);
    }
    a.tween = i;
  };
}
function mc(t, n) {
  var e = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = V(this.node(), e).tween, i = 0, a = r.length, o; i < a; ++i)
      if ((o = r[i]).name === t)
        return o.value;
    return null;
  }
  return this.each((n == null ? gc : yc)(e, t, n));
}
function Ye(t, n, e) {
  var r = t._id;
  return t.each(function() {
    var i = J(this, r);
    (i.value || (i.value = {}))[n] = e.apply(this, arguments);
  }), function(i) {
    return V(i, r).value[n];
  };
}
function zi(t, n) {
  var e;
  return (typeof n == "number" ? U : n instanceof vt ? lt : (e = vt(n)) ? (n = e, lt) : $i)(t, n);
}
function _c(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function vc(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function wc(t, n, e) {
  var r, i = e + "", a;
  return function() {
    var o = this.getAttribute(t);
    return o === i ? null : o === r ? a : a = n(r = o, e);
  };
}
function xc(t, n, e) {
  var r, i = e + "", a;
  return function() {
    var o = this.getAttributeNS(t.space, t.local);
    return o === i ? null : o === r ? a : a = n(r = o, e);
  };
}
function Mc(t, n, e) {
  var r, i, a;
  return function() {
    var o, s = e(this), c;
    return s == null ? void this.removeAttribute(t) : (o = this.getAttribute(t), c = s + "", o === c ? null : o === r && c === i ? a : (i = c, a = n(r = o, s)));
  };
}
function $c(t, n, e) {
  var r, i, a;
  return function() {
    var o, s = e(this), c;
    return s == null ? void this.removeAttributeNS(t.space, t.local) : (o = this.getAttributeNS(t.space, t.local), c = s + "", o === c ? null : o === r && c === i ? a : (i = c, a = n(r = o, s)));
  };
}
function Ac(t, n) {
  var e = Fn(t), r = e === "transform" ? ac : zi;
  return this.attrTween(t, typeof n == "function" ? (e.local ? $c : Mc)(e, r, Ye(this, "attr." + t, n)) : n == null ? (e.local ? vc : _c)(e) : (e.local ? xc : wc)(e, r, n));
}
function Tc(t, n) {
  return function(e) {
    this.setAttribute(t, n.call(this, e));
  };
}
function Sc(t, n) {
  return function(e) {
    this.setAttributeNS(t.space, t.local, n.call(this, e));
  };
}
function kc(t, n) {
  var e, r;
  function i() {
    var a = n.apply(this, arguments);
    return a !== r && (e = (r = a) && Sc(t, a)), e;
  }
  return i._value = n, i;
}
function Ec(t, n) {
  var e, r;
  function i() {
    var a = n.apply(this, arguments);
    return a !== r && (e = (r = a) && Tc(t, a)), e;
  }
  return i._value = n, i;
}
function Pc(t, n) {
  var e = "attr." + t;
  if (arguments.length < 2) return (e = this.tween(e)) && e._value;
  if (n == null) return this.tween(e, null);
  if (typeof n != "function") throw new Error();
  var r = Fn(t);
  return this.tween(e, (r.local ? kc : Ec)(r, n));
}
function zc(t, n) {
  return function() {
    Ue(this, t).delay = +n.apply(this, arguments);
  };
}
function Oc(t, n) {
  return n = +n, function() {
    Ue(this, t).delay = n;
  };
}
function Ic(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? zc : Oc)(n, t)) : V(this.node(), n).delay;
}
function Cc(t, n) {
  return function() {
    J(this, t).duration = +n.apply(this, arguments);
  };
}
function Rc(t, n) {
  return n = +n, function() {
    J(this, t).duration = n;
  };
}
function Fc(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Cc : Rc)(n, t)) : V(this.node(), n).duration;
}
function Lc(t, n) {
  if (typeof n != "function") throw new Error();
  return function() {
    J(this, t).ease = n;
  };
}
function Dc(t) {
  var n = this._id;
  return arguments.length ? this.each(Lc(n, t)) : V(this.node(), n).ease;
}
function qc(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    if (typeof e != "function") throw new Error();
    J(this, t).ease = e;
  };
}
function Hc(t) {
  if (typeof t != "function") throw new Error();
  return this.each(qc(this._id, t));
}
function Nc(t) {
  typeof t != "function" && (t = li(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var a = n[i], o = a.length, s = r[i] = [], c, u = 0; u < o; ++u)
      (c = a[u]) && t.call(c, c.__data__, u, a) && s.push(c);
  return new at(r, this._parents, this._name, this._id);
}
function Bc(t) {
  if (t._id !== this._id) throw new Error();
  for (var n = this._groups, e = t._groups, r = n.length, i = e.length, a = Math.min(r, i), o = new Array(r), s = 0; s < a; ++s)
    for (var c = n[s], u = e[s], d = c.length, h = o[s] = new Array(d), f, l = 0; l < d; ++l)
      (f = c[l] || u[l]) && (h[l] = f);
  for (; s < r; ++s)
    o[s] = n[s];
  return new at(o, this._parents, this._name, this._id);
}
function Xc(t) {
  return (t + "").trim().split(/^|\s+/).every(function(n) {
    var e = n.indexOf(".");
    return e >= 0 && (n = n.slice(0, e)), !n || n === "start";
  });
}
function Gc(t, n, e) {
  var r, i, a = Xc(n) ? Ue : J;
  return function() {
    var o = a(this, t), s = o.on;
    s !== r && (i = (r = s).copy()).on(n, e), o.on = i;
  };
}
function Uc(t, n) {
  var e = this._id;
  return arguments.length < 2 ? V(this.node(), e).on.on(t) : this.each(Gc(e, t, n));
}
function Yc(t) {
  return function() {
    var n = this.parentNode;
    for (var e in this.__transition) if (+e !== t) return;
    n && n.removeChild(this);
  };
}
function Vc() {
  return this.on("end.remove", Yc(this._id));
}
function Kc(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = Ne(t));
  for (var r = this._groups, i = r.length, a = new Array(i), o = 0; o < i; ++o)
    for (var s = r[o], c = s.length, u = a[o] = new Array(c), d, h, f = 0; f < c; ++f)
      (d = s[f]) && (h = t.call(d, d.__data__, f, s)) && ("__data__" in d && (h.__data__ = d.__data__), u[f] = h, Hn(u[f], n, e, f, u, V(d, e)));
  return new at(a, this._parents, n, e);
}
function Wc(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = fi(t));
  for (var r = this._groups, i = r.length, a = [], o = [], s = 0; s < i; ++s)
    for (var c = r[s], u = c.length, d, h = 0; h < u; ++h)
      if (d = c[h]) {
        for (var f = t.call(d, d.__data__, h, c), l, p = V(d, e), b = 0, g = f.length; b < g; ++b)
          (l = f[b]) && Hn(l, n, e, b, f, p);
        a.push(f), o.push(d);
      }
  return new at(a, o, n, e);
}
var Zc = tn.prototype.constructor;
function Jc() {
  return new Zc(this._groups, this._parents);
}
function Qc(t, n) {
  var e, r, i;
  return function() {
    var a = It(this, t), o = (this.style.removeProperty(t), It(this, t));
    return a === o ? null : a === e && o === r ? i : i = n(e = a, r = o);
  };
}
function Oi(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function jc(t, n, e) {
  var r, i = e + "", a;
  return function() {
    var o = It(this, t);
    return o === i ? null : o === r ? a : a = n(r = o, e);
  };
}
function tu(t, n, e) {
  var r, i, a;
  return function() {
    var o = It(this, t), s = e(this), c = s + "";
    return s == null && (c = s = (this.style.removeProperty(t), It(this, t))), o === c ? null : o === r && c === i ? a : (i = c, a = n(r = o, s));
  };
}
function nu(t, n) {
  var e, r, i, a = "style." + n, o = "end." + a, s;
  return function() {
    var c = J(this, t), u = c.on, d = c.value[a] == null ? s || (s = Oi(n)) : void 0;
    (u !== e || i !== d) && (r = (e = u).copy()).on(o, i = d), c.on = r;
  };
}
function eu(t, n, e) {
  var r = (t += "") == "transform" ? ic : zi;
  return n == null ? this.styleTween(t, Qc(t, r)).on("end.style." + t, Oi(t)) : typeof n == "function" ? this.styleTween(t, tu(t, r, Ye(this, "style." + t, n))).each(nu(this._id, t)) : this.styleTween(t, jc(t, r, n), e).on("end.style." + t, null);
}
function ru(t, n, e) {
  return function(r) {
    this.style.setProperty(t, n.call(this, r), e);
  };
}
function iu(t, n, e) {
  var r, i;
  function a() {
    var o = n.apply(this, arguments);
    return o !== i && (r = (i = o) && ru(t, o, e)), r;
  }
  return a._value = n, a;
}
function au(t, n, e) {
  var r = "style." + (t += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (n == null) return this.tween(r, null);
  if (typeof n != "function") throw new Error();
  return this.tween(r, iu(t, n, e ?? ""));
}
function ou(t) {
  return function() {
    this.textContent = t;
  };
}
function su(t) {
  return function() {
    var n = t(this);
    this.textContent = n ?? "";
  };
}
function cu(t) {
  return this.tween("text", typeof t == "function" ? su(Ye(this, "text", t)) : ou(t == null ? "" : t + ""));
}
function uu(t) {
  return function(n) {
    this.textContent = t.call(this, n);
  };
}
function fu(t) {
  var n, e;
  function r() {
    var i = t.apply(this, arguments);
    return i !== e && (n = (e = i) && uu(i)), n;
  }
  return r._value = t, r;
}
function lu(t) {
  var n = "text";
  if (arguments.length < 1) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  return this.tween(n, fu(t));
}
function hu() {
  for (var t = this._name, n = this._id, e = Ii(), r = this._groups, i = r.length, a = 0; a < i; ++a)
    for (var o = r[a], s = o.length, c, u = 0; u < s; ++u)
      if (c = o[u]) {
        var d = V(c, n);
        Hn(c, t, e, u, o, {
          time: d.time + d.delay + d.duration,
          delay: 0,
          duration: d.duration,
          ease: d.ease
        });
      }
  return new at(r, this._parents, t, e);
}
function du() {
  var t, n, e = this, r = e._id, i = e.size();
  return new Promise(function(a, o) {
    var s = { value: o }, c = { value: function() {
      --i === 0 && a();
    } };
    e.each(function() {
      var u = J(this, r), d = u.on;
      d !== t && (n = (t = d).copy(), n._.cancel.push(s), n._.interrupt.push(s), n._.end.push(c)), u.on = n;
    }), i === 0 && a();
  });
}
var pu = 0;
function at(t, n, e, r) {
  this._groups = t, this._parents = n, this._name = e, this._id = r;
}
function Ii() {
  return ++pu;
}
var Q = tn.prototype;
at.prototype = {
  constructor: at,
  select: Kc,
  selectAll: Wc,
  selectChild: Q.selectChild,
  selectChildren: Q.selectChildren,
  filter: Nc,
  merge: Bc,
  selection: Jc,
  transition: hu,
  call: Q.call,
  nodes: Q.nodes,
  node: Q.node,
  size: Q.size,
  empty: Q.empty,
  each: Q.each,
  on: Uc,
  attr: Ac,
  attrTween: Pc,
  style: eu,
  styleTween: au,
  text: cu,
  textTween: lu,
  remove: Vc,
  tween: mc,
  delay: Ic,
  duration: Fc,
  ease: Dc,
  easeVarying: Hc,
  end: du,
  [Symbol.iterator]: Q[Symbol.iterator]
};
function bu(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var gu = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: bu
};
function yu(t, n) {
  for (var e; !(e = t.__transition) || !(e = e[n]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${n} not found`);
  return e;
}
function mu(t) {
  var n, e;
  t instanceof at ? (n = t._id, t = t._name) : (n = Ii(), (e = gu).time = qn(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, a = 0; a < i; ++a)
    for (var o = r[a], s = o.length, c, u = 0; u < s; ++u)
      (c = o[u]) && Hn(c, t, n, u, o, e || yu(c, n));
  return new at(r, this._parents, t, n);
}
tn.prototype.interrupt = bc;
tn.prototype.transition = mu;
const Me = Math.PI, $e = 2 * Me, bt = 1e-6, _u = $e - bt;
function Ci(t) {
  this._ += t[0];
  for (let n = 1, e = t.length; n < e; ++n)
    this._ += arguments[n] + t[n];
}
function vu(t) {
  let n = Math.floor(t);
  if (!(n >= 0)) throw new Error(`invalid digits: ${t}`);
  if (n > 15) return Ci;
  const e = 10 ** n;
  return function(r) {
    this._ += r[0];
    for (let i = 1, a = r.length; i < a; ++i)
      this._ += Math.round(arguments[i] * e) / e + r[i];
  };
}
class Ve {
  constructor(n) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = n == null ? Ci : vu(n);
  }
  moveTo(n, e) {
    this._append`M${this._x0 = this._x1 = +n},${this._y0 = this._y1 = +e}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(n, e) {
    this._append`L${this._x1 = +n},${this._y1 = +e}`;
  }
  quadraticCurveTo(n, e, r, i) {
    this._append`Q${+n},${+e},${this._x1 = +r},${this._y1 = +i}`;
  }
  bezierCurveTo(n, e, r, i, a, o) {
    this._append`C${+n},${+e},${+r},${+i},${this._x1 = +a},${this._y1 = +o}`;
  }
  arcTo(n, e, r, i, a) {
    if (n = +n, e = +e, r = +r, i = +i, a = +a, a < 0) throw new Error(`negative radius: ${a}`);
    let o = this._x1, s = this._y1, c = r - n, u = i - e, d = o - n, h = s - e, f = d * d + h * h;
    if (this._x1 === null)
      this._append`M${this._x1 = n},${this._y1 = e}`;
    else if (f > bt) if (!(Math.abs(h * c - u * d) > bt) || !a)
      this._append`L${this._x1 = n},${this._y1 = e}`;
    else {
      let l = r - o, p = i - s, b = c * c + u * u, g = l * l + p * p, m = Math.sqrt(b), x = Math.sqrt(f), M = a * Math.tan((Me - Math.acos((b + f - g) / (2 * m * x))) / 2), y = M / x, v = M / m;
      Math.abs(y - 1) > bt && this._append`L${n + y * d},${e + y * h}`, this._append`A${a},${a},0,0,${+(h * l > d * p)},${this._x1 = n + v * c},${this._y1 = e + v * u}`;
    }
  }
  arc(n, e, r, i, a, o) {
    if (n = +n, e = +e, r = +r, o = !!o, r < 0) throw new Error(`negative radius: ${r}`);
    let s = r * Math.cos(i), c = r * Math.sin(i), u = n + s, d = e + c, h = 1 ^ o, f = o ? i - a : a - i;
    this._x1 === null ? this._append`M${u},${d}` : (Math.abs(this._x1 - u) > bt || Math.abs(this._y1 - d) > bt) && this._append`L${u},${d}`, r && (f < 0 && (f = f % $e + $e), f > _u ? this._append`A${r},${r},0,1,${h},${n - s},${e - c}A${r},${r},0,1,${h},${this._x1 = u},${this._y1 = d}` : f > bt && this._append`A${r},${r},0,${+(f >= Me)},${h},${this._x1 = n + r * Math.cos(a)},${this._y1 = e + r * Math.sin(a)}`);
  }
  rect(n, e, r, i) {
    this._append`M${this._x0 = this._x1 = +n},${this._y0 = this._y1 = +e}h${r = +r}v${+i}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function K() {
  return new Ve();
}
K.prototype = Ve.prototype;
function wu(t) {
  return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
}
function zn(t, n) {
  if ((e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) < 0) return null;
  var e, r = t.slice(0, e);
  return [
    r.length > 1 ? r[0] + r.slice(2) : r,
    +t.slice(e + 1)
  ];
}
function Rt(t) {
  return t = zn(Math.abs(t)), t ? t[1] : NaN;
}
function xu(t, n) {
  return function(e, r) {
    for (var i = e.length, a = [], o = 0, s = t[0], c = 0; i > 0 && s > 0 && (c + s + 1 > r && (s = Math.max(1, r - c)), a.push(e.substring(i -= s, i + s)), !((c += s + 1) > r)); )
      s = t[o = (o + 1) % t.length];
    return a.reverse().join(n);
  };
}
function Mu(t) {
  return function(n) {
    return n.replace(/[0-9]/g, function(e) {
      return t[+e];
    });
  };
}
var $u = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function On(t) {
  if (!(n = $u.exec(t))) throw new Error("invalid format: " + t);
  var n;
  return new Ke({
    fill: n[1],
    align: n[2],
    sign: n[3],
    symbol: n[4],
    zero: n[5],
    width: n[6],
    comma: n[7],
    precision: n[8] && n[8].slice(1),
    trim: n[9],
    type: n[10]
  });
}
On.prototype = Ke.prototype;
function Ke(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
Ke.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function Au(t) {
  t: for (var n = t.length, e = 1, r = -1, i; e < n; ++e)
    switch (t[e]) {
      case ".":
        r = i = e;
        break;
      case "0":
        r === 0 && (r = e), i = e;
        break;
      default:
        if (!+t[e]) break t;
        r > 0 && (r = 0);
        break;
    }
  return r > 0 ? t.slice(0, r) + t.slice(i + 1) : t;
}
var Ri;
function Tu(t, n) {
  var e = zn(t, n);
  if (!e) return t + "";
  var r = e[0], i = e[1], a = i - (Ri = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, o = r.length;
  return a === o ? r : a > o ? r + new Array(a - o + 1).join("0") : a > 0 ? r.slice(0, a) + "." + r.slice(a) : "0." + new Array(1 - a).join("0") + zn(t, Math.max(0, n + a - 1))[0];
}
function kr(t, n) {
  var e = zn(t, n);
  if (!e) return t + "";
  var r = e[0], i = e[1];
  return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
}
const Er = {
  "%": (t, n) => (t * 100).toFixed(n),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: wu,
  e: (t, n) => t.toExponential(n),
  f: (t, n) => t.toFixed(n),
  g: (t, n) => t.toPrecision(n),
  o: (t) => Math.round(t).toString(8),
  p: (t, n) => kr(t * 100, n),
  r: kr,
  s: Tu,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function Pr(t) {
  return t;
}
var zr = Array.prototype.map, Or = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function Su(t) {
  var n = t.grouping === void 0 || t.thousands === void 0 ? Pr : xu(zr.call(t.grouping, Number), t.thousands + ""), e = t.currency === void 0 ? "" : t.currency[0] + "", r = t.currency === void 0 ? "" : t.currency[1] + "", i = t.decimal === void 0 ? "." : t.decimal + "", a = t.numerals === void 0 ? Pr : Mu(zr.call(t.numerals, String)), o = t.percent === void 0 ? "%" : t.percent + "", s = t.minus === void 0 ? "−" : t.minus + "", c = t.nan === void 0 ? "NaN" : t.nan + "";
  function u(h) {
    h = On(h);
    var f = h.fill, l = h.align, p = h.sign, b = h.symbol, g = h.zero, m = h.width, x = h.comma, M = h.precision, y = h.trim, v = h.type;
    v === "n" ? (x = !0, v = "g") : Er[v] || (M === void 0 && (M = 12), y = !0, v = "g"), (g || f === "0" && l === "=") && (g = !0, f = "0", l = "=");
    var S = b === "$" ? e : b === "#" && /[boxX]/.test(v) ? "0" + v.toLowerCase() : "", $ = b === "$" ? r : /[%p]/.test(v) ? o : "", z = Er[v], C = /[defgprs%]/.test(v);
    M = M === void 0 ? 6 : /[gprs]/.test(v) ? Math.max(1, Math.min(21, M)) : Math.max(0, Math.min(20, M));
    function R(w) {
      var O = S, E = $, G, an, ft;
      if (v === "c")
        E = z(w) + E, w = "";
      else {
        w = +w;
        var pt = w < 0 || 1 / w < 0;
        if (w = isNaN(w) ? c : z(Math.abs(w), M), y && (w = Au(w)), pt && +w == 0 && p !== "+" && (pt = !1), O = (pt ? p === "(" ? p : s : p === "-" || p === "(" ? "" : p) + O, E = (v === "s" ? Or[8 + Ri / 3] : "") + E + (pt && p === "(" ? ")" : ""), C) {
          for (G = -1, an = w.length; ++G < an; )
            if (ft = w.charCodeAt(G), 48 > ft || ft > 57) {
              E = (ft === 46 ? i + w.slice(G + 1) : w.slice(G)) + E, w = w.slice(0, G);
              break;
            }
        }
      }
      x && !g && (w = n(w, 1 / 0));
      var St = O.length + w.length + E.length, B = St < m ? new Array(m - St + 1).join(f) : "";
      switch (x && g && (w = n(B + w, B.length ? m - E.length : 1 / 0), B = ""), l) {
        case "<":
          w = O + w + E + B;
          break;
        case "=":
          w = O + B + w + E;
          break;
        case "^":
          w = B.slice(0, St = B.length >> 1) + O + w + E + B.slice(St);
          break;
        default:
          w = B + O + w + E;
          break;
      }
      return a(w);
    }
    return R.toString = function() {
      return h + "";
    }, R;
  }
  function d(h, f) {
    var l = u((h = On(h), h.type = "f", h)), p = Math.max(-8, Math.min(8, Math.floor(Rt(f) / 3))) * 3, b = Math.pow(10, -p), g = Or[8 + p / 3];
    return function(m) {
      return l(b * m) + g;
    };
  }
  return {
    format: u,
    formatPrefix: d
  };
}
var hn, Nn, Fi;
ku({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function ku(t) {
  return hn = Su(t), Nn = hn.format, Fi = hn.formatPrefix, hn;
}
function Eu(t) {
  return Math.max(0, -Rt(Math.abs(t)));
}
function Pu(t, n) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Rt(n) / 3))) * 3 - Rt(Math.abs(t)));
}
function zu(t, n) {
  return t = Math.abs(t), n = Math.abs(n) - t, Math.max(0, Rt(n) - Rt(t)) + 1;
}
function Ou(t, n) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(t);
      break;
    default:
      this.range(n).domain(t);
      break;
  }
  return this;
}
function Iu(t) {
  return function() {
    return t;
  };
}
function Cu(t) {
  return +t;
}
var Ir = [0, 1];
function Et(t) {
  return t;
}
function Ae(t, n) {
  return (n -= t = +t) ? function(e) {
    return (e - t) / n;
  } : Iu(isNaN(n) ? NaN : 0.5);
}
function Ru(t, n) {
  var e;
  return t > n && (e = t, t = n, n = e), function(r) {
    return Math.max(t, Math.min(n, r));
  };
}
function Fu(t, n, e) {
  var r = t[0], i = t[1], a = n[0], o = n[1];
  return i < r ? (r = Ae(i, r), a = e(o, a)) : (r = Ae(r, i), a = e(a, o)), function(s) {
    return a(r(s));
  };
}
function Lu(t, n, e) {
  var r = Math.min(t.length, n.length) - 1, i = new Array(r), a = new Array(r), o = -1;
  for (t[r] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++o < r; )
    i[o] = Ae(t[o], t[o + 1]), a[o] = e(n[o], n[o + 1]);
  return function(s) {
    var c = Sa(t, s, 1, r) - 1;
    return a[c](i[c](s));
  };
}
function Du(t, n) {
  return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function qu() {
  var t = Ir, n = Ir, e = Ln, r, i, a, o = Et, s, c, u;
  function d() {
    var f = Math.min(t.length, n.length);
    return o !== Et && (o = Ru(t[0], t[f - 1])), s = f > 2 ? Lu : Fu, c = u = null, h;
  }
  function h(f) {
    return f == null || isNaN(f = +f) ? a : (c || (c = s(t.map(r), n, e)))(r(o(f)));
  }
  return h.invert = function(f) {
    return o(i((u || (u = s(n, t.map(r), U)))(f)));
  }, h.domain = function(f) {
    return arguments.length ? (t = Array.from(f, Cu), d()) : t.slice();
  }, h.range = function(f) {
    return arguments.length ? (n = Array.from(f), d()) : n.slice();
  }, h.rangeRound = function(f) {
    return n = Array.from(f), e = nc, d();
  }, h.clamp = function(f) {
    return arguments.length ? (o = f ? !0 : Et, d()) : o !== Et;
  }, h.interpolate = function(f) {
    return arguments.length ? (e = f, d()) : e;
  }, h.unknown = function(f) {
    return arguments.length ? (a = f, h) : a;
  }, function(f, l) {
    return r = f, i = l, d();
  };
}
function Hu() {
  return qu()(Et, Et);
}
function Nu(t, n, e, r) {
  var i = Oa(t, n, e), a;
  switch (r = On(r ?? ",f"), r.type) {
    case "s": {
      var o = Math.max(Math.abs(t), Math.abs(n));
      return r.precision == null && !isNaN(a = Pu(i, o)) && (r.precision = a), Fi(r, o);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null && !isNaN(a = zu(i, Math.max(Math.abs(t), Math.abs(n)))) && (r.precision = a - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN(a = Eu(i)) && (r.precision = a - (r.type === "%") * 2);
      break;
    }
  }
  return Nn(r);
}
function Bu(t) {
  var n = t.domain;
  return t.ticks = function(e) {
    var r = n();
    return za(r[0], r[r.length - 1], e ?? 10);
  }, t.tickFormat = function(e, r) {
    var i = n();
    return Nu(i[0], i[i.length - 1], e ?? 10, r);
  }, t.nice = function(e) {
    e == null && (e = 10);
    var r = n(), i = 0, a = r.length - 1, o = r[i], s = r[a], c, u, d = 10;
    for (s < o && (u = o, o = s, s = u, u = i, i = a, a = u); d-- > 0; ) {
      if (u = de(o, s, e), u === c)
        return r[i] = o, r[a] = s, n(r);
      if (u > 0)
        o = Math.floor(o / u) * u, s = Math.ceil(s / u) * u;
      else if (u < 0)
        o = Math.ceil(o * u) / u, s = Math.floor(s * u) / u;
      else
        break;
      c = u;
    }
    return t;
  }, t;
}
function X() {
  var t = Hu();
  return t.copy = function() {
    return Du(t, X());
  }, Ou.apply(t, arguments), Bu(t);
}
var dn = Sn(), Xu = Math.PI / 3, Gu = Math.PI * 2 / 3;
function Uu(t) {
  var n;
  return t = (0.5 - t) * Math.PI, dn.r = 255 * (n = Math.sin(t)) * n, dn.g = 255 * (n = Math.sin(t + Xu)) * n, dn.b = 255 * (n = Math.sin(t + Gu)) * n, dn + "";
}
function kt(t) {
  return function() {
    return t;
  };
}
function Yu(t) {
  let n = 3;
  return t.digits = function(e) {
    if (!arguments.length) return n;
    if (e == null)
      n = null;
    else {
      const r = Math.floor(e);
      if (!(r >= 0)) throw new RangeError(`invalid digits: ${e}`);
      n = r;
    }
    return t;
  }, () => new Ve(n);
}
function Vu(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function Li(t) {
  this._context = t;
}
Li.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(t, n) {
    switch (t = +t, n = +n, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
        break;
      case 1:
        this._point = 2;
      // falls through
      default:
        this._context.lineTo(t, n);
        break;
    }
  }
};
function Ku(t) {
  return new Li(t);
}
function Wu(t) {
  return t[0];
}
function Zu(t) {
  return t[1];
}
function Ju(t, n) {
  var e = kt(!0), r = null, i = Ku, a = null, o = Yu(s);
  t = typeof t == "function" ? t : t === void 0 ? Wu : kt(t), n = typeof n == "function" ? n : n === void 0 ? Zu : kt(n);
  function s(c) {
    var u, d = (c = Vu(c)).length, h, f = !1, l;
    for (r == null && (a = i(l = o())), u = 0; u <= d; ++u)
      !(u < d && e(h = c[u], u, c)) === f && ((f = !f) ? a.lineStart() : a.lineEnd()), f && a.point(+t(h, u, c), +n(h, u, c));
    if (l) return a = null, l + "" || null;
  }
  return s.x = function(c) {
    return arguments.length ? (t = typeof c == "function" ? c : kt(+c), s) : t;
  }, s.y = function(c) {
    return arguments.length ? (n = typeof c == "function" ? c : kt(+c), s) : n;
  }, s.defined = function(c) {
    return arguments.length ? (e = typeof c == "function" ? c : kt(!!c), s) : e;
  }, s.curve = function(c) {
    return arguments.length ? (i = c, r != null && (a = i(r)), s) : i;
  }, s.context = function(c) {
    return arguments.length ? (c == null ? r = a = null : a = i(r = c), s) : r;
  }, s;
}
function Xt(t, n, e) {
  this.k = t, this.x = n, this.y = e;
}
Xt.prototype = {
  constructor: Xt,
  scale: function(t) {
    return t === 1 ? this : new Xt(this.k * t, this.x, this.y);
  },
  translate: function(t, n) {
    return t === 0 & n === 0 ? this : new Xt(this.k, this.x + this.k * t, this.y + this.k * n);
  },
  apply: function(t) {
    return [t[0] * this.k + this.x, t[1] * this.k + this.y];
  },
  applyX: function(t) {
    return t * this.k + this.x;
  },
  applyY: function(t) {
    return t * this.k + this.y;
  },
  invert: function(t) {
    return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k];
  },
  invertX: function(t) {
    return (t - this.x) / this.k;
  },
  invertY: function(t) {
    return (t - this.y) / this.k;
  },
  rescaleX: function(t) {
    return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t));
  },
  rescaleY: function(t) {
    return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
Xt.prototype;
var Di = typeof global == "object" && global && global.Object === Object && global, Qu = typeof self == "object" && self && self.Object === Object && self, st = Di || Qu || Function("return this")(), Z = st.Symbol, qi = Object.prototype, ju = qi.hasOwnProperty, tf = qi.toString, qt = Z ? Z.toStringTag : void 0;
function nf(t) {
  var n = ju.call(t, qt), e = t[qt];
  try {
    t[qt] = void 0;
    var r = !0;
  } catch {
  }
  var i = tf.call(t);
  return r && (n ? t[qt] = e : delete t[qt]), i;
}
var ef = Object.prototype, rf = ef.toString;
function af(t) {
  return rf.call(t);
}
var of = "[object Null]", sf = "[object Undefined]", Cr = Z ? Z.toStringTag : void 0;
function $t(t) {
  return t == null ? t === void 0 ? sf : of : Cr && Cr in Object(t) ? nf(t) : af(t);
}
function dt(t) {
  return t != null && typeof t == "object";
}
var cf = "[object Symbol]";
function Bn(t) {
  return typeof t == "symbol" || dt(t) && $t(t) == cf;
}
function en(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length, i = Array(r); ++e < r; )
    i[e] = n(t[e], e, t);
  return i;
}
var N = Array.isArray, Rr = Z ? Z.prototype : void 0, Fr = Rr ? Rr.toString : void 0;
function Hi(t) {
  if (typeof t == "string")
    return t;
  if (N(t))
    return en(t, Hi) + "";
  if (Bn(t))
    return Fr ? Fr.call(t) : "";
  var n = t + "";
  return n == "0" && 1 / t == -1 / 0 ? "-0" : n;
}
var uf = /\s/;
function ff(t) {
  for (var n = t.length; n-- && uf.test(t.charAt(n)); )
    ;
  return n;
}
var lf = /^\s+/;
function hf(t) {
  return t && t.slice(0, ff(t) + 1).replace(lf, "");
}
function ot(t) {
  var n = typeof t;
  return t != null && (n == "object" || n == "function");
}
var Lr = NaN, df = /^[-+]0x[0-9a-f]+$/i, pf = /^0b[01]+$/i, bf = /^0o[0-7]+$/i, gf = parseInt;
function yf(t) {
  if (typeof t == "number")
    return t;
  if (Bn(t))
    return Lr;
  if (ot(t)) {
    var n = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = ot(n) ? n + "" : n;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = hf(t);
  var e = pf.test(t);
  return e || bf.test(t) ? gf(t.slice(2), e ? 2 : 8) : df.test(t) ? Lr : +t;
}
var mf = 1 / 0, _f = 17976931348623157e292;
function se(t) {
  if (!t)
    return t === 0 ? t : 0;
  if (t = yf(t), t === mf || t === -1 / 0) {
    var n = t < 0 ? -1 : 1;
    return n * _f;
  }
  return t === t ? t : 0;
}
function Xn(t) {
  return t;
}
var vf = "[object AsyncFunction]", wf = "[object Function]", xf = "[object GeneratorFunction]", Mf = "[object Proxy]";
function Ni(t) {
  if (!ot(t))
    return !1;
  var n = $t(t);
  return n == wf || n == xf || n == vf || n == Mf;
}
var ce = st["__core-js_shared__"], Dr = function() {
  var t = /[^.]+$/.exec(ce && ce.keys && ce.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function $f(t) {
  return !!Dr && Dr in t;
}
var Af = Function.prototype, Tf = Af.toString;
function At(t) {
  if (t != null) {
    try {
      return Tf.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var Sf = /[\\^$.*+?()[\]{}|]/g, kf = /^\[object .+?Constructor\]$/, Ef = Function.prototype, Pf = Object.prototype, zf = Ef.toString, Of = Pf.hasOwnProperty, If = RegExp(
  "^" + zf.call(Of).replace(Sf, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Cf(t) {
  if (!ot(t) || $f(t))
    return !1;
  var n = Ni(t) ? If : kf;
  return n.test(At(t));
}
function Rf(t, n) {
  return t == null ? void 0 : t[n];
}
function Tt(t, n) {
  var e = Rf(t, n);
  return Cf(e) ? e : void 0;
}
var Te = Tt(st, "WeakMap");
function Ff(t, n, e) {
  switch (e.length) {
    case 0:
      return t.call(n);
    case 1:
      return t.call(n, e[0]);
    case 2:
      return t.call(n, e[0], e[1]);
    case 3:
      return t.call(n, e[0], e[1], e[2]);
  }
  return t.apply(n, e);
}
var Lf = 800, Df = 16, qf = Date.now;
function Hf(t) {
  var n = 0, e = 0;
  return function() {
    var r = qf(), i = Df - (r - e);
    if (e = r, i > 0) {
      if (++n >= Lf)
        return arguments[0];
    } else
      n = 0;
    return t.apply(void 0, arguments);
  };
}
function Nf(t) {
  return function() {
    return t;
  };
}
var In = function() {
  try {
    var t = Tt(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch {
  }
}(), Bf = In ? function(t, n) {
  return In(t, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Nf(n),
    writable: !0
  });
} : Xn, Xf = Hf(Bf);
function Gf(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length; ++e < r && n(t[e], e, t) !== !1; )
    ;
  return t;
}
var Uf = 9007199254740991, Yf = /^(?:0|[1-9]\d*)$/;
function Gn(t, n) {
  var e = typeof t;
  return n = n ?? Uf, !!n && (e == "number" || e != "symbol" && Yf.test(t)) && t > -1 && t % 1 == 0 && t < n;
}
function Vf(t, n, e) {
  n == "__proto__" && In ? In(t, n, {
    configurable: !0,
    enumerable: !0,
    value: e,
    writable: !0
  }) : t[n] = e;
}
function Un(t, n) {
  return t === n || t !== t && n !== n;
}
var Kf = Object.prototype, Wf = Kf.hasOwnProperty;
function Zf(t, n, e) {
  var r = t[n];
  (!(Wf.call(t, n) && Un(r, e)) || e === void 0 && !(n in t)) && Vf(t, n, e);
}
var qr = Math.max;
function Jf(t, n, e) {
  return n = qr(n === void 0 ? t.length - 1 : n, 0), function() {
    for (var r = arguments, i = -1, a = qr(r.length - n, 0), o = Array(a); ++i < a; )
      o[i] = r[n + i];
    i = -1;
    for (var s = Array(n + 1); ++i < n; )
      s[i] = r[i];
    return s[n] = e(o), Ff(t, this, s);
  };
}
function Qf(t, n) {
  return Xf(Jf(t, n, Xn), t + "");
}
var jf = 9007199254740991;
function We(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= jf;
}
function Lt(t) {
  return t != null && We(t.length) && !Ni(t);
}
function tl(t, n, e) {
  if (!ot(e))
    return !1;
  var r = typeof n;
  return (r == "number" ? Lt(e) && Gn(n, e.length) : r == "string" && n in e) ? Un(e[n], t) : !1;
}
var nl = Object.prototype;
function Bi(t) {
  var n = t && t.constructor, e = typeof n == "function" && n.prototype || nl;
  return t === e;
}
function Xi(t, n) {
  for (var e = -1, r = Array(t); ++e < t; )
    r[e] = n(e);
  return r;
}
var el = "[object Arguments]";
function Hr(t) {
  return dt(t) && $t(t) == el;
}
var Gi = Object.prototype, rl = Gi.hasOwnProperty, il = Gi.propertyIsEnumerable, Ze = Hr(/* @__PURE__ */ function() {
  return arguments;
}()) ? Hr : function(t) {
  return dt(t) && rl.call(t, "callee") && !il.call(t, "callee");
};
function al() {
  return !1;
}
var Ui = typeof exports == "object" && exports && !exports.nodeType && exports, Nr = Ui && typeof module == "object" && module && !module.nodeType && module, ol = Nr && Nr.exports === Ui, Br = ol ? st.Buffer : void 0, sl = Br ? Br.isBuffer : void 0, Se = sl || al, cl = "[object Arguments]", ul = "[object Array]", fl = "[object Boolean]", ll = "[object Date]", hl = "[object Error]", dl = "[object Function]", pl = "[object Map]", bl = "[object Number]", gl = "[object Object]", yl = "[object RegExp]", ml = "[object Set]", _l = "[object String]", vl = "[object WeakMap]", wl = "[object ArrayBuffer]", xl = "[object DataView]", Ml = "[object Float32Array]", $l = "[object Float64Array]", Al = "[object Int8Array]", Tl = "[object Int16Array]", Sl = "[object Int32Array]", kl = "[object Uint8Array]", El = "[object Uint8ClampedArray]", Pl = "[object Uint16Array]", zl = "[object Uint32Array]", k = {};
k[Ml] = k[$l] = k[Al] = k[Tl] = k[Sl] = k[kl] = k[El] = k[Pl] = k[zl] = !0;
k[cl] = k[ul] = k[wl] = k[fl] = k[xl] = k[ll] = k[hl] = k[dl] = k[pl] = k[bl] = k[gl] = k[yl] = k[ml] = k[_l] = k[vl] = !1;
function Ol(t) {
  return dt(t) && We(t.length) && !!k[$t(t)];
}
function Il(t) {
  return function(n) {
    return t(n);
  };
}
var Yi = typeof exports == "object" && exports && !exports.nodeType && exports, Gt = Yi && typeof module == "object" && module && !module.nodeType && module, Cl = Gt && Gt.exports === Yi, ue = Cl && Di.process, Xr = function() {
  try {
    var t = Gt && Gt.require && Gt.require("util").types;
    return t || ue && ue.binding && ue.binding("util");
  } catch {
  }
}(), Gr = Xr && Xr.isTypedArray, Vi = Gr ? Il(Gr) : Ol, Rl = Object.prototype, Fl = Rl.hasOwnProperty;
function Ki(t, n) {
  var e = N(t), r = !e && Ze(t), i = !e && !r && Se(t), a = !e && !r && !i && Vi(t), o = e || r || i || a, s = o ? Xi(t.length, String) : [], c = s.length;
  for (var u in t)
    (n || Fl.call(t, u)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    Gn(u, c))) && s.push(u);
  return s;
}
function Wi(t, n) {
  return function(e) {
    return t(n(e));
  };
}
var Ll = Wi(Object.keys, Object), Dl = Object.prototype, ql = Dl.hasOwnProperty;
function Hl(t) {
  if (!Bi(t))
    return Ll(t);
  var n = [];
  for (var e in Object(t))
    ql.call(t, e) && e != "constructor" && n.push(e);
  return n;
}
function Yn(t) {
  return Lt(t) ? Ki(t) : Hl(t);
}
function Nl(t) {
  var n = [];
  if (t != null)
    for (var e in Object(t))
      n.push(e);
  return n;
}
var Bl = Object.prototype, Xl = Bl.hasOwnProperty;
function Gl(t) {
  if (!ot(t))
    return Nl(t);
  var n = Bi(t), e = [];
  for (var r in t)
    r == "constructor" && (n || !Xl.call(t, r)) || e.push(r);
  return e;
}
function Ul(t) {
  return Lt(t) ? Ki(t, !0) : Gl(t);
}
var Yl = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Vl = /^\w*$/;
function Je(t, n) {
  if (N(t))
    return !1;
  var e = typeof t;
  return e == "number" || e == "symbol" || e == "boolean" || t == null || Bn(t) ? !0 : Vl.test(t) || !Yl.test(t) || n != null && t in Object(n);
}
var Qt = Tt(Object, "create");
function Kl() {
  this.__data__ = Qt ? Qt(null) : {}, this.size = 0;
}
function Wl(t) {
  var n = this.has(t) && delete this.__data__[t];
  return this.size -= n ? 1 : 0, n;
}
var Zl = "__lodash_hash_undefined__", Jl = Object.prototype, Ql = Jl.hasOwnProperty;
function jl(t) {
  var n = this.__data__;
  if (Qt) {
    var e = n[t];
    return e === Zl ? void 0 : e;
  }
  return Ql.call(n, t) ? n[t] : void 0;
}
var th = Object.prototype, nh = th.hasOwnProperty;
function eh(t) {
  var n = this.__data__;
  return Qt ? n[t] !== void 0 : nh.call(n, t);
}
var rh = "__lodash_hash_undefined__";
function ih(t, n) {
  var e = this.__data__;
  return this.size += this.has(t) ? 0 : 1, e[t] = Qt && n === void 0 ? rh : n, this;
}
function xt(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
xt.prototype.clear = Kl;
xt.prototype.delete = Wl;
xt.prototype.get = jl;
xt.prototype.has = eh;
xt.prototype.set = ih;
function ah() {
  this.__data__ = [], this.size = 0;
}
function Vn(t, n) {
  for (var e = t.length; e--; )
    if (Un(t[e][0], n))
      return e;
  return -1;
}
var oh = Array.prototype, sh = oh.splice;
function ch(t) {
  var n = this.__data__, e = Vn(n, t);
  if (e < 0)
    return !1;
  var r = n.length - 1;
  return e == r ? n.pop() : sh.call(n, e, 1), --this.size, !0;
}
function uh(t) {
  var n = this.__data__, e = Vn(n, t);
  return e < 0 ? void 0 : n[e][1];
}
function fh(t) {
  return Vn(this.__data__, t) > -1;
}
function lh(t, n) {
  var e = this.__data__, r = Vn(e, t);
  return r < 0 ? (++this.size, e.push([t, n])) : e[r][1] = n, this;
}
function ct(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
ct.prototype.clear = ah;
ct.prototype.delete = ch;
ct.prototype.get = uh;
ct.prototype.has = fh;
ct.prototype.set = lh;
var jt = Tt(st, "Map");
function hh() {
  this.size = 0, this.__data__ = {
    hash: new xt(),
    map: new (jt || ct)(),
    string: new xt()
  };
}
function dh(t) {
  var n = typeof t;
  return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? t !== "__proto__" : t === null;
}
function Kn(t, n) {
  var e = t.__data__;
  return dh(n) ? e[typeof n == "string" ? "string" : "hash"] : e.map;
}
function ph(t) {
  var n = Kn(this, t).delete(t);
  return this.size -= n ? 1 : 0, n;
}
function bh(t) {
  return Kn(this, t).get(t);
}
function gh(t) {
  return Kn(this, t).has(t);
}
function yh(t, n) {
  var e = Kn(this, t), r = e.size;
  return e.set(t, n), this.size += e.size == r ? 0 : 1, this;
}
function ut(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
ut.prototype.clear = hh;
ut.prototype.delete = ph;
ut.prototype.get = bh;
ut.prototype.has = gh;
ut.prototype.set = yh;
var mh = "Expected a function";
function Qe(t, n) {
  if (typeof t != "function" || n != null && typeof n != "function")
    throw new TypeError(mh);
  var e = function() {
    var r = arguments, i = n ? n.apply(this, r) : r[0], a = e.cache;
    if (a.has(i))
      return a.get(i);
    var o = t.apply(this, r);
    return e.cache = a.set(i, o) || a, o;
  };
  return e.cache = new (Qe.Cache || ut)(), e;
}
Qe.Cache = ut;
var _h = 500;
function vh(t) {
  var n = Qe(t, function(r) {
    return e.size === _h && e.clear(), r;
  }), e = n.cache;
  return n;
}
var wh = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, xh = /\\(\\)?/g, Mh = vh(function(t) {
  var n = [];
  return t.charCodeAt(0) === 46 && n.push(""), t.replace(wh, function(e, r, i, a) {
    n.push(i ? a.replace(xh, "$1") : r || e);
  }), n;
});
function Wn(t) {
  return t == null ? "" : Hi(t);
}
function Zn(t, n) {
  return N(t) ? t : Je(t, n) ? [t] : Mh(Wn(t));
}
function rn(t) {
  if (typeof t == "string" || Bn(t))
    return t;
  var n = t + "";
  return n == "0" && 1 / t == -1 / 0 ? "-0" : n;
}
function je(t, n) {
  n = Zn(n, t);
  for (var e = 0, r = n.length; t != null && e < r; )
    t = t[rn(n[e++])];
  return e && e == r ? t : void 0;
}
function $h(t, n, e) {
  var r = t == null ? void 0 : je(t, n);
  return r === void 0 ? e : r;
}
function tr(t, n) {
  for (var e = -1, r = n.length, i = t.length; ++e < r; )
    t[i + e] = n[e];
  return t;
}
var Ur = Z ? Z.isConcatSpreadable : void 0;
function Ah(t) {
  return N(t) || Ze(t) || !!(Ur && t && t[Ur]);
}
function Th(t, n, e, r, i) {
  var a = -1, o = t.length;
  for (e || (e = Ah), i || (i = []); ++a < o; ) {
    var s = t[a];
    e(s) ? tr(i, s) : i[i.length] = s;
  }
  return i;
}
function Sh(t) {
  var n = t == null ? 0 : t.length;
  return n ? Th(t) : [];
}
var kh = Wi(Object.getPrototypeOf, Object);
function Eh(t, n, e) {
  var r = -1, i = t.length;
  n < 0 && (n = -n > i ? 0 : i + n), e = e > i ? i : e, e < 0 && (e += i), i = n > e ? 0 : e - n >>> 0, n >>>= 0;
  for (var a = Array(i); ++r < i; )
    a[r] = t[r + n];
  return a;
}
function Ph(t, n, e) {
  var r = t.length;
  return e = e === void 0 ? r : e, Eh(t, n, e);
}
var zh = "\\ud800-\\udfff", Oh = "\\u0300-\\u036f", Ih = "\\ufe20-\\ufe2f", Ch = "\\u20d0-\\u20ff", Rh = Oh + Ih + Ch, Fh = "\\ufe0e\\ufe0f", Lh = "\\u200d", Dh = RegExp("[" + Lh + zh + Rh + Fh + "]");
function Zi(t) {
  return Dh.test(t);
}
function qh(t) {
  return t.split("");
}
var Ji = "\\ud800-\\udfff", Hh = "\\u0300-\\u036f", Nh = "\\ufe20-\\ufe2f", Bh = "\\u20d0-\\u20ff", Xh = Hh + Nh + Bh, Gh = "\\ufe0e\\ufe0f", Uh = "[" + Ji + "]", ke = "[" + Xh + "]", Ee = "\\ud83c[\\udffb-\\udfff]", Yh = "(?:" + ke + "|" + Ee + ")", Qi = "[^" + Ji + "]", ji = "(?:\\ud83c[\\udde6-\\uddff]){2}", ta = "[\\ud800-\\udbff][\\udc00-\\udfff]", Vh = "\\u200d", na = Yh + "?", ea = "[" + Gh + "]?", Kh = "(?:" + Vh + "(?:" + [Qi, ji, ta].join("|") + ")" + ea + na + ")*", Wh = ea + na + Kh, Zh = "(?:" + [Qi + ke + "?", ke, ji, ta, Uh].join("|") + ")", Jh = RegExp(Ee + "(?=" + Ee + ")|" + Zh + Wh, "g");
function Qh(t) {
  return t.match(Jh) || [];
}
function jh(t) {
  return Zi(t) ? Qh(t) : qh(t);
}
function td(t) {
  return function(n) {
    n = Wn(n);
    var e = Zi(n) ? jh(n) : void 0, r = e ? e[0] : n.charAt(0), i = e ? Ph(e, 1).join("") : n.slice(1);
    return r[t]() + i;
  };
}
var nd = td("toUpperCase");
function ed(t) {
  return nd(Wn(t).toLowerCase());
}
function rd() {
  this.__data__ = new ct(), this.size = 0;
}
function id(t) {
  var n = this.__data__, e = n.delete(t);
  return this.size = n.size, e;
}
function ad(t) {
  return this.__data__.get(t);
}
function od(t) {
  return this.__data__.has(t);
}
var sd = 200;
function cd(t, n) {
  var e = this.__data__;
  if (e instanceof ct) {
    var r = e.__data__;
    if (!jt || r.length < sd - 1)
      return r.push([t, n]), this.size = ++e.size, this;
    e = this.__data__ = new ut(r);
  }
  return e.set(t, n), this.size = e.size, this;
}
function rt(t) {
  var n = this.__data__ = new ct(t);
  this.size = n.size;
}
rt.prototype.clear = rd;
rt.prototype.delete = id;
rt.prototype.get = ad;
rt.prototype.has = od;
rt.prototype.set = cd;
function nr(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length, i = 0, a = []; ++e < r; ) {
    var o = t[e];
    n(o, e, t) && (a[i++] = o);
  }
  return a;
}
function ra() {
  return [];
}
var ud = Object.prototype, fd = ud.propertyIsEnumerable, Yr = Object.getOwnPropertySymbols, ia = Yr ? function(t) {
  return t == null ? [] : (t = Object(t), nr(Yr(t), function(n) {
    return fd.call(t, n);
  }));
} : ra, ld = Object.getOwnPropertySymbols, hd = ld ? function(t) {
  for (var n = []; t; )
    tr(n, ia(t)), t = kh(t);
  return n;
} : ra;
function aa(t, n, e) {
  var r = n(t);
  return N(t) ? r : tr(r, e(t));
}
function Vr(t) {
  return aa(t, Yn, ia);
}
function dd(t) {
  return aa(t, Ul, hd);
}
var Pe = Tt(st, "DataView"), ze = Tt(st, "Promise"), Oe = Tt(st, "Set"), Kr = "[object Map]", pd = "[object Object]", Wr = "[object Promise]", Zr = "[object Set]", Jr = "[object WeakMap]", Qr = "[object DataView]", bd = At(Pe), gd = At(jt), yd = At(ze), md = At(Oe), _d = At(Te), j = $t;
(Pe && j(new Pe(new ArrayBuffer(1))) != Qr || jt && j(new jt()) != Kr || ze && j(ze.resolve()) != Wr || Oe && j(new Oe()) != Zr || Te && j(new Te()) != Jr) && (j = function(t) {
  var n = $t(t), e = n == pd ? t.constructor : void 0, r = e ? At(e) : "";
  if (r)
    switch (r) {
      case bd:
        return Qr;
      case gd:
        return Kr;
      case yd:
        return Wr;
      case md:
        return Zr;
      case _d:
        return Jr;
    }
  return n;
});
var jr = st.Uint8Array, vd = "__lodash_hash_undefined__";
function wd(t) {
  return this.__data__.set(t, vd), this;
}
function xd(t) {
  return this.__data__.has(t);
}
function Cn(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.__data__ = new ut(); ++n < e; )
    this.add(t[n]);
}
Cn.prototype.add = Cn.prototype.push = wd;
Cn.prototype.has = xd;
function Md(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length; ++e < r; )
    if (n(t[e], e, t))
      return !0;
  return !1;
}
function $d(t, n) {
  return t.has(n);
}
var Ad = 1, Td = 2;
function oa(t, n, e, r, i, a) {
  var o = e & Ad, s = t.length, c = n.length;
  if (s != c && !(o && c > s))
    return !1;
  var u = a.get(t), d = a.get(n);
  if (u && d)
    return u == n && d == t;
  var h = -1, f = !0, l = e & Td ? new Cn() : void 0;
  for (a.set(t, n), a.set(n, t); ++h < s; ) {
    var p = t[h], b = n[h];
    if (r)
      var g = o ? r(b, p, h, n, t, a) : r(p, b, h, t, n, a);
    if (g !== void 0) {
      if (g)
        continue;
      f = !1;
      break;
    }
    if (l) {
      if (!Md(n, function(m, x) {
        if (!$d(l, x) && (p === m || i(p, m, e, r, a)))
          return l.push(x);
      })) {
        f = !1;
        break;
      }
    } else if (!(p === b || i(p, b, e, r, a))) {
      f = !1;
      break;
    }
  }
  return a.delete(t), a.delete(n), f;
}
function sa(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r, i) {
    e[++n] = [i, r];
  }), e;
}
function Sd(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r) {
    e[++n] = r;
  }), e;
}
var kd = 1, Ed = 2, Pd = "[object Boolean]", zd = "[object Date]", Od = "[object Error]", Id = "[object Map]", Cd = "[object Number]", Rd = "[object RegExp]", Fd = "[object Set]", Ld = "[object String]", Dd = "[object Symbol]", qd = "[object ArrayBuffer]", Hd = "[object DataView]", ti = Z ? Z.prototype : void 0, fe = ti ? ti.valueOf : void 0;
function Nd(t, n, e, r, i, a, o) {
  switch (e) {
    case Hd:
      if (t.byteLength != n.byteLength || t.byteOffset != n.byteOffset)
        return !1;
      t = t.buffer, n = n.buffer;
    case qd:
      return !(t.byteLength != n.byteLength || !a(new jr(t), new jr(n)));
    case Pd:
    case zd:
    case Cd:
      return Un(+t, +n);
    case Od:
      return t.name == n.name && t.message == n.message;
    case Rd:
    case Ld:
      return t == n + "";
    case Id:
      var s = sa;
    case Fd:
      var c = r & kd;
      if (s || (s = Sd), t.size != n.size && !c)
        return !1;
      var u = o.get(t);
      if (u)
        return u == n;
      r |= Ed, o.set(t, n);
      var d = oa(s(t), s(n), r, i, a, o);
      return o.delete(t), d;
    case Dd:
      if (fe)
        return fe.call(t) == fe.call(n);
  }
  return !1;
}
var Bd = 1, Xd = Object.prototype, Gd = Xd.hasOwnProperty;
function Ud(t, n, e, r, i, a) {
  var o = e & Bd, s = Vr(t), c = s.length, u = Vr(n), d = u.length;
  if (c != d && !o)
    return !1;
  for (var h = c; h--; ) {
    var f = s[h];
    if (!(o ? f in n : Gd.call(n, f)))
      return !1;
  }
  var l = a.get(t), p = a.get(n);
  if (l && p)
    return l == n && p == t;
  var b = !0;
  a.set(t, n), a.set(n, t);
  for (var g = o; ++h < c; ) {
    f = s[h];
    var m = t[f], x = n[f];
    if (r)
      var M = o ? r(x, m, f, n, t, a) : r(m, x, f, t, n, a);
    if (!(M === void 0 ? m === x || i(m, x, e, r, a) : M)) {
      b = !1;
      break;
    }
    g || (g = f == "constructor");
  }
  if (b && !g) {
    var y = t.constructor, v = n.constructor;
    y != v && "constructor" in t && "constructor" in n && !(typeof y == "function" && y instanceof y && typeof v == "function" && v instanceof v) && (b = !1);
  }
  return a.delete(t), a.delete(n), b;
}
var Yd = 1, ni = "[object Arguments]", ei = "[object Array]", pn = "[object Object]", Vd = Object.prototype, ri = Vd.hasOwnProperty;
function Kd(t, n, e, r, i, a) {
  var o = N(t), s = N(n), c = o ? ei : j(t), u = s ? ei : j(n);
  c = c == ni ? pn : c, u = u == ni ? pn : u;
  var d = c == pn, h = u == pn, f = c == u;
  if (f && Se(t)) {
    if (!Se(n))
      return !1;
    o = !0, d = !1;
  }
  if (f && !d)
    return a || (a = new rt()), o || Vi(t) ? oa(t, n, e, r, i, a) : Nd(t, n, c, e, r, i, a);
  if (!(e & Yd)) {
    var l = d && ri.call(t, "__wrapped__"), p = h && ri.call(n, "__wrapped__");
    if (l || p) {
      var b = l ? t.value() : t, g = p ? n.value() : n;
      return a || (a = new rt()), i(b, g, e, r, a);
    }
  }
  return f ? (a || (a = new rt()), Ud(t, n, e, r, i, a)) : !1;
}
function er(t, n, e, r, i) {
  return t === n ? !0 : t == null || n == null || !dt(t) && !dt(n) ? t !== t && n !== n : Kd(t, n, e, r, er, i);
}
var Wd = 1, Zd = 2;
function Jd(t, n, e, r) {
  var i = e.length, a = i;
  if (t == null)
    return !a;
  for (t = Object(t); i--; ) {
    var o = e[i];
    if (o[2] ? o[1] !== t[o[0]] : !(o[0] in t))
      return !1;
  }
  for (; ++i < a; ) {
    o = e[i];
    var s = o[0], c = t[s], u = o[1];
    if (o[2]) {
      if (c === void 0 && !(s in t))
        return !1;
    } else {
      var d = new rt(), h;
      if (!(h === void 0 ? er(u, c, Wd | Zd, r, d) : h))
        return !1;
    }
  }
  return !0;
}
function ca(t) {
  return t === t && !ot(t);
}
function Qd(t) {
  for (var n = Yn(t), e = n.length; e--; ) {
    var r = n[e], i = t[r];
    n[e] = [r, i, ca(i)];
  }
  return n;
}
function ua(t, n) {
  return function(e) {
    return e == null ? !1 : e[t] === n && (n !== void 0 || t in Object(e));
  };
}
function jd(t) {
  var n = Qd(t);
  return n.length == 1 && n[0][2] ? ua(n[0][0], n[0][1]) : function(e) {
    return e === t || Jd(e, t, n);
  };
}
function t0(t, n) {
  return t != null && n in Object(t);
}
function fa(t, n, e) {
  n = Zn(n, t);
  for (var r = -1, i = n.length, a = !1; ++r < i; ) {
    var o = rn(n[r]);
    if (!(a = t != null && e(t, o)))
      break;
    t = t[o];
  }
  return a || ++r != i ? a : (i = t == null ? 0 : t.length, !!i && We(i) && Gn(o, i) && (N(t) || Ze(t)));
}
function n0(t, n) {
  return t != null && fa(t, n, t0);
}
var e0 = 1, r0 = 2;
function i0(t, n) {
  return Je(t) && ca(n) ? ua(rn(t), n) : function(e) {
    var r = $h(e, t);
    return r === void 0 && r === n ? n0(e, t) : er(n, r, e0 | r0);
  };
}
function la(t) {
  return function(n) {
    return n == null ? void 0 : n[t];
  };
}
function a0(t) {
  return function(n) {
    return je(n, t);
  };
}
function o0(t) {
  return Je(t) ? la(rn(t)) : a0(t);
}
function rr(t) {
  return typeof t == "function" ? t : t == null ? Xn : typeof t == "object" ? N(t) ? i0(t[0], t[1]) : jd(t) : o0(t);
}
function s0(t) {
  return function(n, e, r) {
    for (var i = -1, a = Object(n), o = r(n), s = o.length; s--; ) {
      var c = o[++i];
      if (e(a[c], c, a) === !1)
        break;
    }
    return n;
  };
}
var c0 = s0();
function u0(t, n) {
  return t && c0(t, n, Yn);
}
function f0(t, n) {
  return function(e, r) {
    if (e == null)
      return e;
    if (!Lt(e))
      return t(e, r);
    for (var i = e.length, a = -1, o = Object(e); ++a < i && r(o[a], a, o) !== !1; )
      ;
    return e;
  };
}
var ir = f0(u0);
function l0(t) {
  return dt(t) && Lt(t);
}
function h0(t) {
  return typeof t == "function" ? t : Xn;
}
function it(t, n) {
  var e = N(t) ? Gf : ir;
  return e(t, h0(n));
}
function d0(t, n) {
  return en(n, function(e) {
    return [e, t[e]];
  });
}
function p0(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r) {
    e[++n] = [r, r];
  }), e;
}
var b0 = "[object Map]", g0 = "[object Set]";
function y0(t) {
  return function(n) {
    var e = j(n);
    return e == b0 ? sa(n) : e == g0 ? p0(n) : d0(n, t(n));
  };
}
var ha = y0(Yn);
function m0(t, n) {
  var e = [];
  return ir(t, function(r, i, a) {
    n(r, i, a) && e.push(r);
  }), e;
}
function Ut(t, n) {
  var e = N(t) ? nr : m0;
  return e(t, rr(n));
}
function _0(t, n) {
  var e = -1, r = Lt(t) ? Array(t.length) : [];
  return ir(t, function(i, a, o) {
    r[++e] = n(i, a, o);
  }), r;
}
function Mt(t, n) {
  var e = N(t) ? en : _0;
  return e(t, rr(n));
}
var v0 = Object.prototype, w0 = v0.hasOwnProperty;
function x0(t, n) {
  return t != null && w0.call(t, n);
}
function da(t, n) {
  return t != null && fa(t, n, x0);
}
var M0 = "[object Boolean]";
function $0(t) {
  return t === !0 || t === !1 || dt(t) && $t(t) == M0;
}
function A0(t, n, e, r) {
  if (!ot(t))
    return t;
  n = Zn(n, t);
  for (var i = -1, a = n.length, o = a - 1, s = t; s != null && ++i < a; ) {
    var c = rn(n[i]), u = e;
    if (c === "__proto__" || c === "constructor" || c === "prototype")
      return t;
    if (i != o) {
      var d = s[c];
      u = void 0, u === void 0 && (u = ot(d) ? d : Gn(n[i + 1]) ? [] : {});
    }
    Zf(s, c, u), s = s[c];
  }
  return t;
}
function T0(t, n, e) {
  for (var r = -1, i = n.length, a = {}; ++r < i; ) {
    var o = n[r], s = je(t, o);
    e(s, o) && A0(a, Zn(o, t), s);
  }
  return a;
}
function ar(t, n) {
  if (t == null)
    return {};
  var e = en(dd(t), function(r) {
    return [r];
  });
  return n = rr(n), T0(t, e, function(r, i) {
    return n(r, i[0]);
  });
}
var S0 = Math.ceil, k0 = Math.max;
function E0(t, n, e, r) {
  for (var i = -1, a = k0(S0((n - t) / (e || 1)), 0), o = Array(a); a--; )
    o[++i] = t, t += e;
  return o;
}
function P0(t) {
  return function(n, e, r) {
    return r && typeof r != "number" && tl(n, e, r) && (e = r = void 0), n = se(n), e === void 0 ? (e = n, n = 0) : e = se(e), r = r === void 0 ? n < e ? 1 : -1 : se(r), E0(n, e, r);
  };
}
var _t = P0();
function z0() {
  var t = arguments, n = Wn(t[0]);
  return t.length < 3 ? n : n.replace(t[1], t[2]);
}
var O0 = Math.max;
function I0(t) {
  if (!(t && t.length))
    return [];
  var n = 0;
  return t = nr(t, function(e) {
    if (l0(e))
      return n = O0(e.length, n), !0;
  }), Xi(n, function(e) {
    return en(t, la(e));
  });
}
var Rn = Qf(I0);
const C0 = (t, n, e = 12, r = 12) => {
  const i = X().domain([0, e]).range([0, t]), a = X().domain([0, r]).range([0, n]);
  return {
    points: function() {
      return _t((e + 1) * (r + 1)).map(function(c) {
        return { m: c % (e + 1), n: Math.floor(c / (e + 1)), x: i(c % (e + 1)), y: a(Math.floor(c / (e + 1))) };
      });
    },
    position: function(c, u) {
      typeof c == "number" && (c = [c]), typeof u == "number" && (u = [u]);
      const d = Sh(Mt(u, function(h) {
        return Mt(
          c,
          function(f) {
            return { x: i(f), y: a(h) };
          }
        );
      }));
      return d.length == 1 ? d[0] : d;
    }
  };
}, R0 = "_widget_18g36_1", F0 = "_label_18g36_19", L0 = "_lit_18g36_24", D0 = "_button_18g36_29", q0 = "_symbol_18g36_29", H0 = "_radio_18g36_29", N0 = "_radiobutton_18g36_29", B0 = "_selected_18g36_35", X0 = "_toggle_18g36_35", G0 = "_slider_18g36_44", U0 = "_track_18g36_44", Y0 = "_track_overlay_18g36_48", V0 = "_handle_18g36_55", _ = {
  widget: R0,
  label: F0,
  lit: L0,
  button: D0,
  symbol: q0,
  radio: H0,
  radiobutton: N0,
  selected: B0,
  toggle: X0,
  slider: G0,
  track: U0,
  track_overlay: Y0,
  handle: V0
}, Jn = () => {
  const n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890", e = n.length;
  let r = "";
  for (let i = 0; i < 10; ++i)
    r += n[Math.floor(Math.random() * e)];
  return r;
}, or = (t, n, e) => {
  var r, i, a, o;
  switch (e) {
    case "top":
      r = 0, i = -n / 2 - 5, a = "middle", o = "bottom";
      break;
    case "bottom":
      r = 0, i = n / 2 + 5, a = "middle", o = "hanging";
      break;
    case "left":
      r = -t / 2 - 5, i = 0, a = "end", o = "middle";
      break;
    case "right":
      r = t / 2 + 5, i = 0, a = "start", o = "middle";
      break;
    default:
      r = 0, i = n / 2 + 5, a = "middle", o = "hanging";
  }
  return { x: r, y: i, anchor: a, valign: o };
}, K0 = (t = 1) => {
  const n = K();
  return n.moveTo(t * 1, t * 0), n.lineTo(t * -0.5, t * (Math.sqrt(3) / 2)), n.lineTo(t * -0.5, t * (-Math.sqrt(3) / 2)), n.closePath(), n.toString();
}, W0 = (t = 1) => {
  const n = K(), e = 0.7;
  return n.moveTo(e * t * (1 + 0.75), e * t * 0), n.lineTo(e * t * (-0.5 + 0.75), e * t * (Math.sqrt(3) / 2)), n.lineTo(e * t * (-0.5 + 0.75), e * t * (-Math.sqrt(3) / 2)), n.closePath(), n.moveTo(e * t * (1 - 0.75), e * t * 0), n.lineTo(e * t * (-0.5 - 0.75), e * t * (Math.sqrt(3) / 2)), n.lineTo(e * t * (-0.5 - 0.75), e * t * (-Math.sqrt(3) / 2)), n.closePath(), n.toString();
}, Z0 = (t = 1) => {
  const n = K();
  return n.moveTo(-t * 1, t * 0), n.lineTo(t * 0.5, t * (Math.sqrt(3) / 2)), n.lineTo(t * 0.5, t * (-Math.sqrt(3) / 2)), n.closePath(), n.toString();
}, J0 = (t = 1) => {
  const n = 0.3333333333333333, e = 0.9;
  var r = K();
  return r.moveTo(t * e, t * e), r.lineTo(t * e, t * -0.9), r.lineTo(t * (e * n), t * -0.9), r.lineTo(t * (e * n), t * e), r.closePath(), r.moveTo(-t * e, t * e), r.lineTo(-t * e, t * -0.9), r.lineTo(-t * (e * n), t * -0.9), r.lineTo(-t * (e * n), t * e), r.closePath(), r.toString();
}, Q0 = (t = 1) => {
  const n = K(), e = Math.PI / 2.5, r = e / 2, i = 2 * Math.PI - e / 2, a = 0.5, o = 0.6, s = 0.6, c = [t * (1 - a / 2) * Math.cos(i), t * (1 - a / 2) * Math.sin(i)], u = [t * s * Math.cos(i + Math.PI / 2), t * s * Math.sin(i + Math.PI / 2)];
  return n.moveTo(t * Math.cos(i), t * Math.sin(i)), n.arc(0, 0, t, i, r, !0), n.lineTo(t * (1 - a) * Math.cos(r), t * (1 - a) * Math.sin(r)), n.arc(0, 0, t * (1 - a), r, i, !1), n.lineTo(t * (1 - o - a / 2) * Math.cos(i), t * (1 - o - a / 2) * Math.sin(i)), n.lineTo(c[0] + u[0], c[1] + u[1]), n.lineTo(t * (1 + o - a / 2) * Math.cos(i), t * (1 + o - a / 2) * Math.sin(i)), n.closePath(), n.toString();
}, j0 = (t = 1) => {
  const n = K(), e = Math.PI / 10, r = t / 2, i = Math.PI - e, a = e, o = -e, s = Math.PI + e;
  return n.arc(0, 0, r, s, o), n.lineTo(t, r * Math.sin(s)), n.lineTo(t, -t), n.lineTo(-t, -t), n.lineTo(-t, r * Math.sin(s)), n.closePath(), n.arc(0, 0, r, a, i), n.lineTo(-t, r * Math.sin(i)), n.lineTo(-t, t), n.lineTo(t, t), n.lineTo(t, r * Math.sin(i)), n.closePath(), n.toString();
}, tp = (t = 1) => {
  const n = K(), e = Math.PI / 2.5, r = e / 2 + Math.PI, i = 2 * Math.PI - e / 2 + Math.PI, a = 0.5, o = 0.6, s = -0.6;
  n.moveTo(t * Math.cos(r), t * Math.sin(r)), n.arc(0, 0, t, r, i, !1), n.lineTo(t * (1 - a) * Math.cos(i), t * (1 - a) * Math.sin(i)), n.arc(0, 0, t * (1 - a), i, r, !0), n.lineTo(t * (1 - o - a / 2) * Math.cos(r), t * (1 - o - a / 2) * Math.sin(r));
  var c = [t * (1 - a / 2) * Math.cos(r), t * (1 - a / 2) * Math.sin(r)], u = [t * s * Math.cos(r + Math.PI / 2), t * s * Math.sin(r + Math.PI / 2)];
  return n.lineTo(c[0] + u[0], c[1] + u[1]), n.lineTo(t * (1 + o - a / 2) * Math.cos(r), t * (1 + o - a / 2) * Math.sin(r)), n.closePath(), n.toString();
}, np = (t = 1) => {
  var n = K(), e = 0.9;
  return n.moveTo(t * e, t * e), n.lineTo(t * -0.9, t * e), n.lineTo(t * -0.9, t * -0.9), n.lineTo(t * e, t * -0.9), n.closePath(), n.toString();
}, ep = (t = 1) => {
  const n = K(), e = 0, r = 2 * Math.PI;
  return n.moveTo(t * Math.cos(e), t * Math.sin(e)), n.arc(0, 0, t, e, r, !0), n.closePath(), n.toString();
}, Ie = (t) => {
  switch (t) {
    case "play":
      return K0;
    case "forward":
      return W0;
    case "back":
      return Z0;
    case "pause":
      return J0;
    case "reload":
      return Q0;
    case "capture":
      return j0;
    case "rewind":
      return tp;
    case "stop":
      return np;
    case "push":
      return ep;
  }
}, sr = () => {
  const t = "button";
  var n = Jn(), e = 50, r = 0.3, i = "round", a = { x: 0, y: 0 }, o = null, s = "bottom", c = null, u = function(p) {
  }, d = ["play"], h = 0;
  return {
    type: t,
    id: function(p) {
      return typeof p > "u" ? n : (n = p, this);
    },
    size: function(p) {
      return typeof p > "u" ? e : (e = p, this);
    },
    symbolsize: function(p) {
      return typeof p > "u" ? r : (r = p, this);
    },
    shape: function(p) {
      return typeof p > "u" ? i : (i = p, this);
    },
    position: function(p) {
      return typeof p > "u" ? a : (a = p, this);
    },
    x: function(p) {
      return typeof p > "u" ? a.x : (a.x = p, this);
    },
    y: function(p) {
      return typeof p > "u" ? a.y : (a.y = p, this);
    },
    label: function(p) {
      return typeof p > "u" ? o : (o = p, this);
    },
    labelposition: function(p) {
      return typeof p > "u" ? s : (s = p, this);
    },
    fontsize: function(p) {
      return typeof p > "u" ? c : (c = p, this);
    },
    update: function(p) {
      if (typeof p == "function")
        return u = p, this;
      u(p);
    },
    actions: function(p) {
      return typeof p > "u" ? d : (d = p, this);
    },
    value: function(p) {
      return typeof p > "u" ? h : (h = p, this);
    },
    click: function() {
      h = (h + 1) % d.length, u(), P(this.parentNode).select("." + _.symbol).attr("d", Ie(d[h])(r * e));
    },
    press: function(p) {
      h = (h + 1) % d.length, u(), p.select("#button_" + n).select("." + _.symbol).attr("d", Ie(d[h])(r * e));
    }
  };
}, rp = () => {
  const t = "slider", n = Nn(".3f");
  var e = Jn(), r = 100, i = 8, a = 10, o = !1, s = { x: 0, y: 0 }, c = "top-left", u = null, d = function(m) {
  }, h = function(m) {
  }, f = [0, 1], l = 0, p = null, b = X().domain(f).range([0, r]).clamp(!0);
  const g = function(m, x, M = f) {
    const y = m.select("#slider_" + e);
    b.domain(M), l = x, y.selectAll("." + _.handle).transition().attr("cx", b(x)), o && y.select("." + _.label).text(p + " = " + n(l)), d(), h();
  };
  return {
    type: t,
    scale: b,
    id: function(m) {
      return typeof m > "u" ? e : (e = m, this);
    },
    label: function(m) {
      return typeof m > "u" ? p : (p = m, this);
    },
    size: function(m) {
      return typeof m > "u" ? r : (r = m, this);
    },
    girth: function(m) {
      return typeof m > "u" ? i : (i = m, this);
    },
    knob: function(m) {
      return typeof m > "u" ? a : (a = m, this);
    },
    show: function(m) {
      return typeof m > "u" ? o : (o = m, this);
    },
    position: function(m) {
      return typeof m > "u" ? s : (s = m, this);
    },
    x: function(m) {
      return typeof m > "u" ? s.x : (s.x = m, this);
    },
    y: function(m) {
      return typeof m > "u" ? s.y : (s.y = m, this);
    },
    labelposition: function(m) {
      return typeof m > "u" ? c : (c = m, this);
    },
    fontsize: function(m) {
      return typeof m > "u" ? u : (u = m, this);
    },
    update: function(m) {
      if (typeof m == "function")
        return d = m, this;
      d(m);
    },
    update_end: function(m) {
      if (typeof m == "function")
        return h = m, this;
      h(m);
    },
    range: function(m) {
      return typeof m > "u" ? f : (f = m, this);
    },
    value: function(m) {
      return typeof m > "u" ? l : (l = m, this);
    },
    reset: g,
    click: g
  };
}, ip = () => {
  const t = "toggle";
  var n = Jn(), e = 10, r = { x: 0, y: 0 }, i = null, a = "top", o = null, s = function(h) {
  }, c = 0;
  return {
    type: t,
    id: function(h) {
      return typeof h > "u" ? n : (n = h, this);
    },
    size: function(h) {
      return typeof h > "u" ? e : (e = h, this);
    },
    position: function(h) {
      return typeof h > "u" ? r : (r = h, this);
    },
    x: function(h) {
      return typeof h > "u" ? r.x : (r.x = h, this);
    },
    y: function(h) {
      return typeof h > "u" ? r.y : (r.y = h, this);
    },
    label: function(h) {
      return typeof h > "u" ? i : (i = h, this);
    },
    labelposition: function(h) {
      return typeof h > "u" ? a : (a = h, this);
    },
    fontsize: function(h) {
      return typeof h > "u" ? o : (o = h, this);
    },
    update: function(h) {
      if (typeof h == "function")
        return s = h, this;
      s(h);
    },
    value: function(h) {
      return typeof h > "u" ? c : (c = h, this);
    },
    click: function() {
      c = !c;
      const h = P(this.parentNode);
      h.select("." + _.handle).transition().attr("cx", c ? 2 * e : 0), h.classed(_.selected, c), s();
    },
    reset: function(h, f) {
      c = f;
      const l = h.select("#toggle_" + n);
      l.selectAll("." + _.handle).transition().attr("cx", c ? 2 * e : 0), l.classed(_.selected, c), s();
    }
  };
}, ap = () => {
  const t = "radio";
  var n = Jn(), e = 100, r = 20, i = 0.3, a = "round", o = "vertical", s = { x: 0, y: 0 }, c = "right", u = null, d = function(b) {
  }, h = [], f = 0;
  return {
    type: t,
    id: function(b) {
      return typeof b > "u" ? n : (n = b, this);
    },
    size: function(b) {
      return typeof b > "u" ? e : (e = b, this);
    },
    buttonsize: function(b) {
      return typeof b > "u" ? r : (r = b, this);
    },
    buttonpadding: function(b) {
      return typeof b > "u" ? i : (i = b, this);
    },
    orientation: function(b) {
      return typeof b > "u" ? o : (o = b, this);
    },
    shape: function(b) {
      return typeof b > "u" ? a : (a = b, this);
    },
    position: function(b) {
      return typeof b > "u" ? s : (s = b, this);
    },
    x: function(b) {
      return typeof b > "u" ? s.x : (s.x = b, this);
    },
    y: function(b) {
      return typeof b > "u" ? s.y : (s.y = b, this);
    },
    labelposition: function(b) {
      return typeof b > "u" ? c : (c = b, this);
    },
    fontsize: function(b) {
      return typeof b > "u" ? u : (u = b, this);
    },
    update: function(b) {
      if (typeof b == "function")
        return d = b, this;
      d(b);
    },
    choices: function(b) {
      return typeof b > "u" ? h : (h = b, this);
    },
    value: function(b) {
      return typeof b > "u" ? f : (f = b, this);
    },
    click: function(b, g) {
      f = g, P(this.parentNode).selectAll("." + _.symbol).classed(_.selected, (m) => m == f), d();
    },
    reset: function(b, g) {
      f = g, b.select("#radio_" + n).selectAll("." + _.symbol).classed(_.selected, (m) => m == f), d();
    }
  };
}, op = (t, n) => {
  const e = "button_" + t.id(), r = t.label(), i = t.labelposition(), a = document.createElementNS("http://www.w3.org/2000/svg", "g"), o = P(a).attr("class", _.widget + " " + _.button).attr("id", e).attr("transform", "translate(" + t.x() + "," + t.y() + ")");
  var s;
  if (t.shape() == "rect" ? s = o.append("rect").attr("width", t.size()).attr("height", t.size()).attr("transform", "translate(" + -t.size() / 2 + "," + -t.size() / 2 + ")").attr("rx", 5).attr("ry", 5) : s = o.append("circle").attr("r", t.size() / 2), s.attr("class", _.background).on("click", t.click).on("mouseover", function() {
    P(this).classed(_.lit, !0), P(this.parentNode).select("." + _.symbol).classed(_.lit, !0);
  }).on("mouseout", function() {
    P(this).classed(_.lit, !1), P(this.parentNode).select("." + _.symbol).classed(_.lit, !1);
  }), o.append("path").attr("d", Ie(t.actions()[t.value()])(t.symbolsize() * t.size())).attr("class", _.symbol), r) {
    const c = or(t.size(), t.size(), i);
    o.append("text").text(r).attr("class", _.label).style("text-anchor", c.anchor).style("font-size", t.fontsize()).style("alignment-baseline", c.valign).attr("transform", "translate(" + c.x + "," + c.y + ")");
  }
  return a;
}, pa = (t, n) => {
  const e = K();
  return e.moveTo(0, n / 2), e.arc(0, 0, n / 2, Math.PI / 2, 3 * Math.PI / 2, !1), e.lineTo(t, -n / 2), e.arc(t, 0, n / 2, 3 * Math.PI / 2, 2 * Math.PI + Math.PI / 2, !1), e.closePath(), e.toString();
}, sp = (t, n) => {
  const e = Nn(".3f"), r = "slider_" + t.id();
  t.labelposition();
  const i = t.range, a = t.size();
  t.label();
  const o = t.scale;
  var s;
  const c = document.createElementNS("http://www.w3.org/2000/svg", "g");
  s = P(c).attr("class", _.widget + " " + _.slider).attr("id", r).attr("transform", "translate(" + t.x() + "," + t.y() + ")"), o.domain(i()).range([0, a]).clamp(!0);
  const u = t.knob() > t.girth() ? t.knob() : t.girth() / 2;
  s.append("path").attr("d", pa(t.size(), t.girth())).attr("class", _.track), s.append("circle").attr("class", _.handle).attr("r", t.knob()).attr("cx", o(t.value())), s.append("rect").attr("width", t.size() + 2 * u).attr("height", 2 * u).attr("transform", "translate(" + -u + "," + -u + ")").attr("class", _.track_overlay).on("click", function(p) {
    const b = ge(p, this)[0];
    t.value(o.invert(b)), t.update(), t.update_end(), s.selectAll("." + _.handle).attr("cx", o(t.value())), t.show() && s.select("." + _.label).text(t.label() + " = " + e(t.value()));
  }).call(
    Os().on("drag", function(p) {
      t.value(o.invert(p.x)), t.update(), s.selectAll("." + _.handle).attr("cx", o(t.value())), t.show() && s.select("." + _.label).text(t.label() + " = " + e(t.value()));
    }).on("end", function(p) {
      t.update_end();
    })
  );
  var d, h, f, l = "bottom";
  return t.fontsize && (h = t.labelposition().match(/bottom/i) != null ? on([t.girth() / 2, t.knob()]) + t.fontsize() / 2 : -on([t.girth() / 2, t.knob()]) - t.fontsize() / 2), h = t.labelposition().match(/bottom/i) != null ? on([t.girth() / 2, t.knob()]) + 7 : -on([t.girth() / 2, t.knob()]) - 7, d = t.labelposition().match(/right/i) != null ? t.size() : t.labelposition().match(/center/i) != null ? t.size() / 2 : 0, f = t.labelposition().match(/right/i) != null ? "end" : t.labelposition().match(/center/i) != null ? "middle" : "start", l = t.labelposition().match(/bottom/i) != null ? "hanging" : "top", s.append("text").text(t.show() ? t.label() + " = " + e(t.value()) : t.label()).attr("class", _.label).style("text-anchor", f).style("alignment-baseline", l).style("font-size", t.fontsize()).style("opacity", 1).attr("transform", "translate(" + d + "," + h + ")"), c;
}, cp = (t, n) => {
  const e = "toggle_" + t.id(), r = t.size(), i = t.label(), a = t.labelposition(), o = document.createElementNS("http://www.w3.org/2000/svg", "g"), s = P(o).attr("class", _.widget + " " + _.toggle).attr("id", e).attr("transform", "translate(" + (t.x() - r) + "," + t.y() + ")").classed(_.selected, t.value() == 1);
  if (s.append("path").attr("d", pa(2 * t.size(), 2 * t.size())).attr("class", _.track), s.append("circle").attr("class", _.handle).attr("r", r).attr("cx", t.value() ? 2 * r : 0), s.append("rect").attr("width", 4 * t.size()).attr("height", 2 * t.size()).attr("class", _.track_overlay).attr("transform", "translate(" + -t.size() + "," + -t.size() + ")").on("click", t.click), i) {
    const c = or(4 * t.size(), 2 * t.size(), a);
    s.append("text").text(i).attr("class", _.label).style("text-anchor", c.anchor).style("font-size", t.fontsize()).style("alignment-baseline", c.valign).attr("transform", "translate(" + (c.x + r) + "," + c.y + ")");
  }
  return o;
}, up = (t, n) => {
  const e = "radio_" + t.id(), r = t.labelposition(), i = t.buttonsize(), a = t.buttonsize() * (1 - t.buttonpadding()), o = t.choices().length, s = Ia(o), c = X().domain([0, o - 1]).range([0, t.size()]), u = X().domain([0, o - 1]).range([0, t.size()]), d = document.createElementNS("http://www.w3.org/2000/svg", "g"), f = P(d).attr("class", _.widget + " " + _.radio).attr("id", e).attr("transform", "translate(" + t.x() + "," + t.y() + ")").selectAll("." + _.radiobutton).data(s).enter().append("g").attr("class", _.radiobutton).attr("id", (g) => "b" + g).attr("transform", (g) => t.orientation() == "vertical" ? "translate(0," + u(g) + ")" : "translate(" + c(g) + ",0)");
  var l, p;
  t.shape() == "rect" ? (l = f.append("rect").attr("width", i).attr("height", i).attr("rx", 2).attr("ry", 2).attr("transform", "translate(" + -i / 2 + "," + -i / 2 + ")"), p = f.append("rect").attr("width", a).attr("height", a).attr("rx", 2).attr("ry", 2).attr("transform", "translate(" + -a / 2 + "," + -a / 2 + ")")) : (l = f.append("circle").attr("r", i / 2), p = f.append("circle").attr("r", a / 2)), l.attr("class", _.background).on("mouseover", function() {
    P(this).classed(_.lit, !0), P(this.parentNode).select("." + _.symbol).classed(_.lit, !0);
  }).on("mouseout", function() {
    P(this).classed(_.lit, !1), P(this.parentNode).select("." + _.symbol).classed(_.lit, !1);
  }), p.attr("class", _.symbol), p.filter((g) => g == t.value()).classed(_.selected, !0), f.on("click", t.click);
  const b = or(t.buttonsize(), t.buttonsize(), r);
  return f.append("text").attr("class", _.label).text(function(g, m) {
    return t.choices()[m];
  }).attr("alignment-baseline", b.valign).attr("transform", "translate(" + b.x + "," + b.y + ")").style("font-size", t.fontsize()).attr("text-anchor", b.anchor), d;
}, bn = (t, n) => {
  switch (t.type) {
    case "button":
      return op(t);
    case "slider":
      return sp(t);
    case "radio":
      return up(t);
    case "toggle":
      return cp(t);
  }
}, fp = (t, n) => {
  const e = C0(
    n.controls_size.width,
    n.controls_size.height,
    n.controls_grid.nx,
    n.controls_grid.ny
  ), r = P("#" + t).classed("explorable " + n.container_class, !0), i = r.append("div").attr("id", "display").attr("class", "display-panel").classed(n.display_class, !0).classed(n.debug_lattice, n.debug).append(n.display_type).attr("width", n.display_type == "canvas" ? n.display_size.width : null).attr("height", n.display_type == "canvas" ? n.display_size.height : null).attr("viewBox", n.display_type == "canvas" ? null : "0 0 " + n.display_size.width + " " + n.display_size.height).style("width", "100%"), a = r.append("div").attr("id", "controls").attr("class", "control-panel").classed(n.controls_class, !0).classed(n.debug_lattice, n.debug).append("svg").attr("viewBox", "0 0 " + n.controls_size.width + " " + n.controls_size.height);
  return typeof n.controls_border == "string" && n.controls_border.length > 0 && a.style("border", n.controls_border), typeof n.display_border == "string" && n.display_border.length > 0 && i.style("border", n.display_border), n.debug && a.selectAll(null).data(e.points).enter().append("circle").attr("r", 2).attr("transform", (o) => "translate(" + o.x + "," + o.y + ")").style("fill", "black"), { display: i, controls: a, grid: e };
}, A = {
  widgets: {
    //		fontsize:18,
    slider_size: 400,
    slider_gap: 1.5,
    slider_girth: 12,
    slider_knob: 14,
    slider_anchor: { x: 1, y: 7 },
    toggle_anchor: { x: 1.5, y: 11.25 },
    toggle_label_pos: "right",
    playbutton_size: 120,
    playbutton_anchor: { x: 3, y: 2 },
    backbutton_anchor: { x: 4, y: 4.5 },
    resetbutton_anchor: { x: 2, y: 4.5 },
    radio_anchor: { x: 8, y: 5 },
    radio_size: 40,
    radio_orientation: "vertical",
    radio_label_position: "right",
    radio_shape: "rect"
  },
  simulation: {
    delay: 10,
    colormap: "vik"
  },
  cartoon: {
    anchor: { x: 6, y: 3 },
    width: 200
  }
}, T = {
  dt: 0.05,
  L: 100,
  boundary: "periodic",
  N: { hex: 50, square: 100 },
  oscillator_heterogeneity: {
    range: [0, 0.3],
    default: 0
  },
  spike_intensity: {
    range: [0, 0.6],
    default: 0.5
  },
  firing_frequency: {
    range: [1.05, 1.5],
    default: 1.2
  },
  lattice: {
    choices: ["square", "hexagonal"],
    default: 1
  },
  show_only_spikes: {
    default: !1
  }
}, lp = "_plot_19br3_1", hp = "_xaxis_19br3_6", dp = "_yaxis_19br3_6", pp = "_threshold_19br3_10", bp = "_chargelevel_19br3_15", gp = "_spiketrain_19br3_21", yp = "_spike_19br3_21", D = {
  plot: lp,
  xaxis: hp,
  yaxis: dp,
  threshold: pp,
  chargelevel: bp,
  spiketrain: gp,
  spike: yp
}, gt = [0, 10], nt = X().domain(gt).range([0, A.cartoon.width]), et = X().domain([0, 1.8]).range([0, -80]), mp = Ha(nt).tickFormat(""), _p = Na(et).tickFormat(""), Yt = Ju().x(function(t) {
  return nt(t.x);
}).y(function(t) {
  return et(t.y);
}), ba = (t, n) => {
  let e = 0, r = 0, i = 0.05, a = [{ x: e, y: r }], o = [];
  for (; e < n; )
    e += i, r = r + i * (t - r), r > 1 && (r = 0, o.push(e)), a.push({ x: e, y: r });
  return { spiketrain: a, spikes: o };
}, vp = (t, n) => {
  const e = n.position(A.cartoon.anchor.x, A.cartoon.anchor.y), r = T.firing_frequency.widget.value(), i = T.spike_intensity.widget.value(), a = ba(r, gt[1]), o = t.append("g").attr("class", D.plot).attr("transform", "translate(" + e.x + "," + e.y + ")");
  o.append("g").call(mp).attr("class", D.xaxis), o.append("g").call(_p).attr("class", D.yaxis), o.append("text").text("time").attr("transform", "translate(" + nt((gt[1] - gt[0]) / 2) + ",20)"), o.append("text").text("charge").attr("transform", "translate(-15," + et(1) + ")rotate(-90)"), o.append("path").datum([{ x: gt[0], y: 1 }, { x: gt[1], y: 1 }]).attr("d", Yt).attr("class", D.threshold), o.append("path").datum([{ x: 0, y: r }, { x: 10, y: r }]).attr("d", Yt).attr("class", D.chargelevel).attr("id", "max_charge"), o.append("path").datum(a.spiketrain).attr("d", Yt).attr("class", D.spiketrain), o.selectAll("." + D.spike).data(a.spikes).enter().append("line").attr("class", D.spike).attr("x1", function(s) {
    return nt(s);
  }).attr("x2", function(s) {
    return nt(s);
  }).attr("y1", function(s) {
    return et(1);
  }).attr("y2", function(s) {
    return et(1 + i);
  });
}, ii = (t) => {
  const n = T.firing_frequency.widget.value(), e = T.spike_intensity.widget.value(), r = ba(n, gt[1]);
  t.select("." + D.plot).select("#max_charge").datum([{ x: 0, y: n }, { x: 10, y: n }]).attr("d", Yt), t.select("." + D.plot).select("." + D.spiketrain).datum(r.spiketrain).attr("d", Yt);
  const i = t.select("." + D.plot).selectAll("." + D.spike).data(r.spikes).attr("x1", function(a) {
    return nt(a);
  }).attr("x2", function(a) {
    return nt(a);
  }).attr("y1", function(a) {
    return et(1);
  }).attr("y2", function(a) {
    return et(1 + e);
  });
  i.enter().append("line").attr("class", D.spike).attr("x1", function(a) {
    return nt(a);
  }).attr("x2", function(a) {
    return nt(a);
  }).attr("y1", function(a) {
    return et(1);
  }).attr("y2", function(a) {
    return et(1 + e);
  }), i.exit().remove();
}, cr = (t) => Mt(ha(t), (n) => {
  n[1].id = n[0], n[1].label = z0(ed(n[0]), /_/g, " ");
}), ur = (t) => Mt(ha(t), (n) => n[1]), fr = (t, n) => it(t, (e, r) => e.widget = n[r]), wp = (t) => ar(t, (n) => da(n, "range")), xp = (t) => ar(t, (n) => $0(n.default)), Mp = (t) => ar(t, (n) => da(n, "choices"));
X().domain([0, 360]).range([0, 2 * Math.PI]);
X().range([0, 360]).domain([0, 2 * Math.PI]);
const lr = wp(T), ga = xp(T), ya = Mp(T);
cr(lr);
cr(ga);
cr(ya);
const ma = ur(lr), _a = ur(ga), va = ur(ya), Mn = Mt(
  ma,
  (t) => rp().id(t.id).label(t.label).range(t.range).value(t.default).size(A.widgets.slider_size).girth(A.widgets.slider_girth).knob(A.widgets.slider_knob)
), Ce = Mt(
  _a,
  (t) => ip().id(t.id).label(t.label).value(t.default)
), Re = Mt(
  va,
  (t) => ap().choices(t.choices).id(t.id).value(t.default).orientation(A.widgets.radio_orientation).labelposition(A.widgets.radio_label_position)
);
fr(_a, Ce);
fr(ma, Mn);
fr(va, Re);
const ht = sr().actions(["play", "pause"]), Qn = sr().actions(["back"]), jn = sr().actions(["rewind"]), $p = [ht, Qn, jn], Ap = (t, n) => {
  vp(t, n);
  const e = n.position(A.widgets.slider_anchor.x, _t(Mn.length).map((a) => A.widgets.slider_anchor.y + A.widgets.slider_gap * a)), r = n.position(A.widgets.toggle_anchor.x, A.widgets.toggle_anchor.y), i = n.position(A.widgets.radio_anchor.x, A.widgets.radio_anchor.y);
  Mn.forEach((a, o) => a.position(e[o])), Ce[0].position(r).labelposition(A.widgets.toggle_label_pos), Re[0].position(i).size(A.widgets.radio_size).shape(A.widgets.radio_shape), ht.position(n.position(A.widgets.playbutton_anchor.x, A.widgets.playbutton_anchor.y)).size(A.widgets.playbutton_size), jn.position(n.position(A.widgets.backbutton_anchor.x, A.widgets.backbutton_anchor.y)), Qn.position(n.position(A.widgets.resetbutton_anchor.x, A.widgets.resetbutton_anchor.y)), t.selectAll(null).data(Mn).enter().append(bn), t.selectAll(null).data(Ce).enter().append(bn), t.selectAll(null).data($p).enter().append(bn), t.selectAll(null).data(Re).enter().append(bn);
}, Tp = (t) => {
  it(lr, (n) => n.widget.reset(t, n.default));
};
function te(t, n) {
  return [t % n, Math.floor(t / n)];
}
const Sp = {
  n4: Rn([-1, 1, 0, 0], [0, 0, -1, 1]),
  n8: Rn([-1, 0, 1, 1, 1, 0, -1, -1], [-1, -1, -1, 0, 1, 1, 1, 0])
};
function le(t, n, e = "periodic", r = "n8") {
  const i = [];
  return Sp[r].forEach((a) => {
    var o = a[1], s = a[0];
    const c = te(t, n), u = c[0], d = c[1], h = u + s, f = d + o;
    (e == "dirichlet" ? !(o == 0 && s == 0) && h < n && f < n && h >= 0 && f >= 0 : !(o == 0 && s == 0)) && i.push(n * ((f + n) % n) + (h + n) % n);
  }), i;
}
const kp = function(t) {
  var n = "periodic", e = 1, r = "n8";
  const i = 2 * t + 1;
  var a = e / i, o = a;
  const s = _t(i * i).map(function(f) {
    const l = te(f, i);
    return {
      m: l[0],
      n: l[1],
      x: a * (l[0] + 0.5) - e / 2,
      y: o * (l[1] + 0.5) - e / 2
    };
  });
  s.forEach(function(f, l) {
    f.neighbors = le(l, i, n, r).map((p) => s[p]), f.cell = () => [
      { x: f.x + a / 2, y: f.y + o / 2 },
      { x: f.x - a / 2, y: f.y + o / 2 },
      { x: f.x - a / 2, y: f.y - o / 2 },
      { x: f.x + a / 2, y: f.y - o / 2 },
      { x: f.x + a / 2, y: f.y + o / 2 }
    ], f.random_interior_point = () => ({
      x: f.x + a * (Math.random() - 0.5),
      y: f.y + o * (Math.random() - 0.5)
    });
  });
  const c = function(f) {
    return typeof f < "u" ? (s.forEach(function(l) {
      l.x = (l.m + 0.5) * f / i - f / 2, l.y = (l.n + 0.5) * f / i - f / 2;
    }), e = f, a = e / i, o = e / i, this.L = e, this) : e;
  }, u = function(f) {
    return typeof f < "u" ? (s.forEach(function(l, p) {
      l.neighbors = le(p, i, f, r).map((b) => s[b]);
    }), n = f, s.forEach((l) => {
      l.is_boundary = n == "dirichlet" && (l.n == 0 || l.n == 2 * t || l.m == 0 || l.m == 2 * t);
    }), this) : n;
  }, d = function(f) {
    return typeof f < "u" ? (s.forEach(function(l, p) {
      l.neighbors = le(p, i, n, f).map((b) => s[b]);
    }), r = f, this) : r;
  }, h = function() {
    return n === "periodic" ? null : Ut(s, (f) => f.n == 0 || f.n == 2 * t || f.m == 0 || f.m == 2 * t);
  };
  return {
    type: "square",
    L: e,
    N: t,
    size: i * i,
    hood: d,
    nodes: s,
    scale: c,
    boundary: u,
    boundary_cells: h
  };
}, gn = [1, 0], yn = [0.5, Math.sqrt(3) / 2], L = [
  { l: 1, m: 0, n: -1 },
  { l: 1, m: -1, n: 0 },
  { l: 0, m: -1, n: 1 },
  { l: 0, m: 1, n: -1 },
  { l: -1, m: 0, n: 1 },
  { l: -1, m: 1, n: 0 }
], ai = [
  [L[0], L[1]],
  [L[1], L[2]],
  [L[2], L[4]],
  [L[4], L[5]],
  [L[5], L[3]],
  [L[3], L[0]]
];
function I(t) {
  return "id_l" + t.l + "m" + t.m + "n" + t.n;
}
const Ep = function(t) {
  var n = "periodic", e = 1, r = e / (2 * t + 1);
  const i = [], a = {};
  _t(-t, t + 1).forEach(function(f) {
    _t(-t, t + 1).forEach(function(l) {
      _t(-t, t + 1).forEach(function(p) {
        f + l + p == 0 && i.push({
          l: f,
          m: l,
          n: p,
          x: r * f * gn[0] + r * l * yn[0],
          y: r * f * gn[1] + r * l * yn[1]
        });
      });
    });
  }), i.forEach(function(f) {
    a[I(f)] = f, f.cell = () => {
      const l = 1 / Math.sqrt(3);
      return [
        { x: f.x + r / 2, y: f.y + l * r / 2 },
        { x: f.x, y: f.y + l * r },
        { x: f.x - r / 2, y: f.y + l * r / 2 },
        { x: f.x - r / 2, y: f.y - l * r / 2 },
        { x: f.x, y: f.y - l * r },
        { x: f.x + r / 2, y: f.y - l * r / 2 },
        { x: f.x + r / 2, y: f.y + l * r / 2 }
      ];
    }, f.random_interior_point = () => {
      const l = 1 / Math.sqrt(3), p = Math.random(), b = Math.random(), g = Math.floor(Math.random() * 6) * 2 * Math.PI / 6, m = r / 2 * Math.sqrt(p), x = r / 2 * Math.sqrt(p) * l * (1 - 2 * b), M = Math.cos(g) * m - Math.sin(g) * x, y = Math.sin(g) * m + Math.cos(g) * x;
      return {
        x: f.x + M,
        y: f.y + y
      };
    };
  }), h(i);
  const o = function(f) {
    return typeof f < "u" ? (e = f, r = e / (2 * t + 1), i.forEach((l) => {
      l.x = r * l.l * gn[0] + r * l.m * yn[0], l.y = r * l.l * gn[1] + r * l.m * yn[1];
    }), this.L = e, this) : e;
  }, s = function(f) {
    var l = 1 / Math.sqrt(3);
    return [
      { x: f.x + Scale / t / 2, y: f.y + l / 2 * Scale / t },
      { x: f.x, y: f.y + l * Scale / t },
      { x: f.x - Scale / t / 2, y: f.y + l / 2 * Scale / t },
      { x: f.x - Scale / t / 2, y: f.y - l / 2 * Scale / t },
      { x: f.x, y: f.y - l * Scale / t },
      { x: f.x + Scale / t / 2, y: f.y - l / 2 * Scale / t },
      { x: f.x + Scale / t / 2, y: f.y + l / 2 * Scale / t }
    ];
  }, c = function(f) {
    return typeof f < "u" ? (f == "dirichlet" ? (n = "dirichlet", d(i)) : (n = "periodic", h(i)), i.forEach((l) => {
      l.is_boundary = n == "dirichlet" && (l.n == -t || l.n == t || l.l == -t || l.l == t || l.m == -t || l.m == t);
    }), this) : n;
  }, u = function() {
    return n === "periodic" ? null : Ut(i, (f) => f.n == -t || f.n == t || f.l == -t || f.l == t || f.m == -t || f.m == t);
  };
  return {
    type: "hexagonal",
    L: e,
    N: t,
    size: 1 + 3 * t * (t + 1),
    nodes: i,
    scale: o,
    boundary: c,
    boundary_cells: u,
    cell: s
  };
  function d(f) {
    f.forEach(function(l) {
      l.neighbors = [], L.forEach(function(p) {
        const b = I({ l: l.l + p.l, m: l.m + p.m, n: l.n + p.n }), g = a[b];
        typeof g < "u" && l.neighbors.push(g);
      });
    }), f.forEach(function(l) {
      l.triangles = [], ai.forEach(function(p) {
        const b = I({ l: l.l + p[0].l, m: l.m + p[0].m, n: l.n + p[0].n }), g = I({ l: l.l + p[1].l, m: l.m + p[1].m, n: l.n + p[1].n });
        typeof a[b] < "u" && typeof a[g] < "u" && l.triangles.push([a[b], a[g]]);
      });
    });
  }
  function h(f) {
    f.forEach(function(l) {
      l.neighbors = [], L.forEach(function(p) {
        var b = I({ l: l.l + p.l, m: l.m + p.m, n: l.n + p.n });
        typeof a[b] > "u" && (l.l + p.l == t + 1 && Math.abs(l.m + p.m) <= t + 1 && Math.abs(l.n + p.n) <= t && (b = I({ l: l.l + p.l - (2 * t + 1), m: l.m + p.m + (t + 1), n: l.n + p.n + t })), l.l + p.l == -(t + 1) && Math.abs(l.m + p.m) <= t + 1 && Math.abs(l.n + p.n) <= t && (b = I({ l: l.l + p.l + (2 * t + 1), m: l.m + p.m - (t + 1), n: l.n + p.n - t })), l.m + p.m == t + 1 && Math.abs(l.l + p.l) <= t && Math.abs(l.n + p.n) <= t + 1 && (b = I({ m: l.m + p.m - (2 * t + 1), n: l.n + p.n + (t + 1), l: l.l + p.l + t })), l.m + p.m == -(t + 1) && Math.abs(l.l + p.l) <= t && Math.abs(l.n + p.n) <= t + 1 && (b = I({ m: l.m + p.m + (2 * t + 1), n: l.n + p.n - (t + 1), l: l.l + p.l - t })), l.n + p.n == t + 1 && Math.abs(l.l + p.l) <= t + 1 && Math.abs(l.m + p.m) <= t && (b = I({ n: l.n + p.n - (2 * t + 1), l: l.l + p.l + (t + 1), m: l.m + p.m + t })), l.n + p.n == -(t + 1) && Math.abs(l.l + p.l) <= t + 1 && Math.abs(l.m + p.m) <= t && (b = I({ n: l.n + p.n + (2 * t + 1), l: l.l + p.l - (t + 1), m: l.m + p.m - t }))), l.neighbors.push(a[b]);
      });
    }), f.forEach(function(l) {
      l.triangles = [], ai.forEach(function(p) {
        var b = [];
        p.forEach(function(g, m) {
          var x = I({ l: l.l + g.l, m: l.m + g.m, n: l.n + g.n });
          typeof a[x] > "u" && (l.l + g.l == t + 1 && Math.abs(l.m + g.m) <= t + 1 && Math.abs(l.n + g.n) <= t && I({ l: l.l + g.l - (2 * t + 1), m: l.m + g.m + (t + 1), n: l.n + g.n + t }), l.l + g.l == -(t + 1) && Math.abs(l.m + g.m) <= t + 1 && Math.abs(l.n + g.n) <= t && I({ l: l.l + g.l + (2 * t + 1), m: l.m + g.m - (t + 1), n: l.n + g.n - t }), l.m + g.m == t + 1 && Math.abs(l.l + g.l) <= t && Math.abs(l.n + g.n) <= t + 1 && I({ m: l.m + g.m - (2 * t + 1), n: l.n + g.n + (t + 1), l: l.l + g.l + t }), l.m + g.m == -(t + 1) && Math.abs(l.l + g.l) <= t && Math.abs(l.n + g.n) <= t + 1 && I({ m: l.m + g.m + (2 * t + 1), n: l.n + g.n - (t + 1), l: l.l + g.l - t }), l.n + g.n == t + 1 && Math.abs(l.l + g.l) <= t + 1 && Math.abs(l.m + g.m) <= t && I({ n: l.n + g.n - (2 * t + 1), l: l.l + g.l + (t + 1), m: l.m + g.m + t }), l.n + g.n == -(t + 1) && Math.abs(l.l + g.l) <= t + 1 && Math.abs(l.m + g.m) <= t && I({ n: l.n + g.n + (2 * t + 1), l: l.l + g.l - (t + 1), m: l.m + g.m - t })), b[m] = x;
        }), l.triangles.push([a[b[0]], a[b[1]]]);
      });
    });
  }
}, Pp = {
  n4: Rn([-1, 1, 0, 0], [0, 0, -1, 1]),
  n8: Rn([-1, 0, 1, 1, 1, 0, -1, -1], [-1, -1, -1, 0, 1, 1, 1, 0])
};
function he(t, n, e = "periodic", r = "n8") {
  const i = [];
  return Pp[r].forEach((a) => {
    var o = a[1], s = a[0];
    const c = te(t, n), u = c[0], d = c[1], h = u + s, f = d + o;
    (e == "dirichlet" ? !(o == 0 && s == 0) && h < n && f < n && h >= 0 && f >= 0 : !(o == 0 && s == 0)) && i.push(n * ((f + n) % n) + (h + n) % n);
  }), i;
}
const zp = function(t) {
  var n = "periodic", e = t, r = "n8";
  const i = _t(t * t).map(function(c) {
    const u = te(c, t);
    return {
      x: u[0],
      y: u[1]
    };
  });
  return i.forEach(function(c, u) {
    c.neighbors = he(u, t, n, r).map((d) => i[d]), c.cell = () => [
      { x: c.x, y: c.y },
      { x: c.x + 1, y: c.y },
      { x: c.x + 1, y: c.y + 1 },
      { x: c.x, y: c.y + 1 },
      { x: c.x, y: c.y }
    ];
  }), {
    type: "square",
    L: e,
    N: t,
    size: t,
    hood: function(c) {
      return typeof c < "u" ? (i.forEach(function(u, d) {
        u.neighbors = he(d, t, n, c).map((h) => i[h]);
      }), r = c, this) : r;
    },
    nodes: i,
    scale: function(c) {
      return t;
    },
    boundary: function(c) {
      return typeof c < "u" ? (i.forEach(function(u, d) {
        u.neighbors = he(d, t, c, r).map((h) => i[h]);
      }), n = c, this) : n;
    }
  };
}, Op = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hex: Ep,
  square: kp,
  square_simple: zp
}, Symbol.toStringTag, { value: "Module" }));
T.L;
T.dt;
var Ft = [];
const Ip = () => {
  T.timer = {}, T.tick = 0;
  const t = T.lattice.widget.value() == 1 ? T.N.hex : T.N.square;
  Ft = Op[T.lattice.widget.value() == 1 ? "hex" : "square"](t).boundary(T.boundary).nodes, it(Ft, (e) => {
    e.theta = Math.random(), e.Svar = Math.random() - 0.5, e.spike = !1;
  });
}, Cp = () => {
  T.tick++;
  const t = T.firing_frequency.widget.value(), n = T.oscillator_heterogeneity.widget.value(), e = T.spike_intensity.widget.value(), r = Ut(Ft, (a) => a.spike == !1), i = Ut(Ft, (a) => a.spike == !0);
  it(r, (a) => {
    const o = a.neighbors, s = o.length, u = Ut(o, (d) => d.spike == !0).length / s;
    a.dtheta = T.dt * (t + n * a.Svar - a.theta) + e * u;
  }), it(i, (a) => {
    a.theta = a.theta - 1, a.spike = !1;
  }), it(r, (a) => {
    a.theta += a.dtheta, a.theta > 1 && (a.spike = !0);
  });
}, mn = {
  bamO: ["#4e2f43", "#502f44", "#512f46", "#522f47", "#542f49", "#56304b", "#57304c", "#59314e", "#5b3150", "#5d3252", "#603354", "#623356", "#643458", "#66355b", "#68365d", "#6b385f", "#6d3961", "#6f3a63", "#713b65", "#743c67", "#763e69", "#783f6b", "#7a416d", "#7c426f", "#7e4371", "#814573", "#834675", "#854877", "#874979", "#894b7b", "#8b4c7d", "#8c4e7e", "#8e4f80", "#905182", "#925284", "#945485", "#965587", "#975789", "#99588a", "#9b5a8c", "#9c5b8e", "#9e5d8f", "#a05e91", "#a16092", "#a36194", "#a56395", "#a66497", "#a86698", "#a9689a", "#ab699b", "#ac6b9d", "#ae6d9e", "#af6ea0", "#b170a1", "#b272a3", "#b474a4", "#b675a6", "#b777a7", "#b979a9", "#ba7bab", "#bc7dac", "#bd7fae", "#be81af", "#c083b1", "#c185b2", "#c387b3", "#c489b5", "#c58bb6", "#c78db8", "#c88fb9", "#c992bb", "#cb94bc", "#cc96bd", "#cd98be", "#ce9ac0", "#cf9cc1", "#d09ec2", "#d1a1c3", "#d2a3c4", "#d3a5c5", "#d4a7c6", "#d4a9c7", "#d5abc8", "#d6adc8", "#d6afc9", "#d7b0ca", "#d7b2ca", "#d8b4cb", "#d8b5cb", "#d8b7cb", "#d9b9cc", "#d9bacc", "#d9bbcc", "#d9bdcc", "#d9becc", "#d9bfcc", "#d9c0cc", "#d9c1cc", "#d9c2cc", "#d9c3cc", "#d9c4cc", "#d9c5cb", "#d9c6cb", "#d9c6cb", "#d8c7cb", "#d8c8ca", "#d8c8ca", "#d8c9ca", "#d7c9c9", "#d7cac9", "#d7cac8", "#d7cbc8", "#d6cbc7", "#d6cbc7", "#d6ccc6", "#d5ccc6", "#d5ccc5", "#d4cdc5", "#d4cdc4", "#d4cdc3", "#d3cdc3", "#d3cdc2", "#d2cdc1", "#d1cdc0", "#d1cec0", "#d0cebf", "#cfcebe", "#cfcdbd", "#cecdbb", "#cdcdba", "#cccdb9", "#cbcdb7", "#caccb6", "#c9ccb4", "#c7cbb3", "#c6cbb1", "#c4caaf", "#c3c9ad", "#c1c8ab", "#bfc7a8", "#bec6a6", "#bcc5a4", "#bac4a1", "#b8c29f", "#b6c19c", "#b3bf99", "#b1be97", "#afbc94", "#adba92", "#abb88f", "#a8b78c", "#a6b58a", "#a4b387", "#a2b185", "#a0af83", "#9ead80", "#9cab7e", "#9aa97c", "#98a77a", "#96a578", "#94a376", "#92a174", "#90a072", "#8e9e70", "#8d9c6e", "#8b9a6d", "#89986b", "#879669", "#869468", "#849366", "#839165", "#818f63", "#808d62", "#7e8c61", "#7d8a5f", "#7b885e", "#7a875d", "#79855c", "#77835b", "#768259", "#758058", "#747f57", "#727d56", "#717c55", "#707a54", "#6f7853", "#6e7752", "#6d7551", "#6b7450", "#6a7250", "#69714f", "#686f4e", "#676e4d", "#666c4c", "#656b4b", "#64694b", "#63684a", "#616649", "#606548", "#5f6347", "#5e6247", "#5d6046", "#5c5f45", "#5b5d45", "#5b5c44", "#5a5a43", "#595943", "#585842", "#575642", "#565541", "#555441", "#545240", "#545140", "#53503f", "#524f3f", "#524e3e", "#514c3e", "#504b3e", "#504a3d", "#4f493d", "#4f483d", "#4e473c", "#4e463c", "#4d453c", "#4d443b", "#4c443b", "#4c433b", "#4b423b", "#4b413b", "#4b403a", "#4a3f3a", "#4a3f3a", "#4a3e3a", "#493d3a", "#493c3a", "#493b3a", "#493b3a", "#483a3a", "#48393a", "#48383a", "#48383a", "#48373a", "#48363a", "#48353b", "#48353b", "#48343b", "#48333b", "#48333c", "#49323c", "#49323d", "#4a313d", "#4a313e", "#4b303f", "#4c3040", "#4c3041", "#4d2f42"],
  romaO: ["#733957", "#733856", "#743854", "#753853", "#753851", "#763850", "#77384f", "#78384d", "#78384c", "#79384b", "#7a3849", "#7a3848", "#7b3847", "#7c3846", "#7c3944", "#7d3943", "#7e3942", "#7f3a41", "#7f3a40", "#803a3f", "#813b3e", "#823b3d", "#823c3c", "#833d3b", "#843d3a", "#853e39", "#853f38", "#863f37", "#874036", "#884135", "#894235", "#894334", "#8a4433", "#8b4532", "#8c4632", "#8d4731", "#8e4830", "#8e4930", "#8f4a2f", "#904b2f", "#914d2e", "#924e2e", "#934f2d", "#94512d", "#95522d", "#96542c", "#97552c", "#98572c", "#99582b", "#9a5a2b", "#9b5b2b", "#9c5d2b", "#9d5f2b", "#9e602b", "#9f622b", "#a0642b", "#a1662b", "#a2672c", "#a3692c", "#a46b2c", "#a56d2d", "#a66f2d", "#a8712d", "#a9732e", "#aa752f", "#ab772f", "#ac7930", "#ad7b31", "#ae7d32", "#af7f33", "#b18134", "#b28335", "#b38636", "#b48837", "#b58a38", "#b78c3a", "#b88f3b", "#b9913d", "#ba933e", "#bb9540", "#bd9842", "#be9a43", "#bf9c45", "#c09f47", "#c1a149", "#c2a34b", "#c4a64d", "#c5a850", "#c6aa52", "#c7ad54", "#c8af57", "#c9b159", "#cab35b", "#cbb65e", "#ccb860", "#cdba63", "#cebc66", "#cfbe68", "#d0c06b", "#d0c26e", "#d1c470", "#d2c673", "#d2c876", "#d3ca78", "#d4cb7b", "#d4cd7e", "#d4cf81", "#d5d083", "#d5d286", "#d5d389", "#d5d48b", "#d5d68e", "#d5d790", "#d5d893", "#d5d995", "#d5da98", "#d4db9a", "#d4dc9c", "#d3dd9f", "#d3dea1", "#d2dea3", "#d1dfa5", "#d1e0a7", "#d0e0aa", "#cfe1ac", "#cee1ad", "#cde1af", "#cce1b1", "#cae2b3", "#c9e2b5", "#c8e2b6", "#c6e2b8", "#c5e2ba", "#c3e2bb", "#c2e1bd", "#c0e1be", "#bee1bf", "#bde1c1", "#bbe0c2", "#b9e0c3", "#b7dfc4", "#b5dfc5", "#b3dec6", "#b1ddc7", "#afddc8", "#addcc9", "#abdbca", "#a8daca", "#a6d9cb", "#a4d8cc", "#a2d7cc", "#9fd6cd", "#9dd5cd", "#9bd4ce", "#98d3ce", "#96d2ce", "#93d1ce", "#91cfcf", "#8fcecf", "#8ccccf", "#8acbcf", "#88cacf", "#85c8cf", "#83c7cf", "#81c5cf", "#7fc4cf", "#7cc2cf", "#7ac0cf", "#78bfce", "#76bdce", "#74bbce", "#72bacd", "#70b8cd", "#6eb6cd", "#6cb4cc", "#6ab3cc", "#68b1cb", "#66afcb", "#64adca", "#63abc9", "#61aac9", "#60a8c8", "#5ea6c8", "#5da4c7", "#5ba2c6", "#5aa0c5", "#599ec5", "#579dc4", "#569bc3", "#5599c2", "#5497c1", "#5395c0", "#5393bf", "#5291bf", "#518fbe", "#508dbd", "#508cbb", "#4f8aba", "#4f88b9", "#4f86b8", "#4e84b7", "#4e82b6", "#4e80b5", "#4e7eb3", "#4e7cb2", "#4e7ab1", "#4e78af", "#4e76ae", "#4e75ac", "#4f73ab", "#4f71a9", "#506fa8", "#506da6", "#516ba5", "#5169a3", "#5267a1", "#52669f", "#53649e", "#54629c", "#54609a", "#555e98", "#565d96", "#575b95", "#585993", "#595891", "#59568f", "#5a548d", "#5b538b", "#5c5189", "#5d5087", "#5e4e85", "#5f4d83", "#604c81", "#604a7f", "#61497d", "#62487b", "#634779", "#644677", "#654576", "#664474", "#664372", "#674270", "#68416e", "#69406c", "#6a3f6b", "#6a3e69", "#6b3e67", "#6c3d65", "#6d3c64", "#6d3c62", "#6e3b60", "#6f3b5f", "#703a5d", "#703a5c", "#71395a", "#723959"],
  vikO: ["#4e193d", "#4e1a3e", "#4d1a3f", "#4c1b40", "#4c1c42", "#4b1c43", "#4a1d44", "#491e46", "#491f47", "#481f48", "#47204a", "#46214b", "#46224d", "#45234e", "#442450", "#432551", "#432653", "#422754", "#412856", "#412957", "#402a59", "#3f2b5b", "#3e2d5c", "#3d2e5e", "#3d2f60", "#3c3061", "#3b3263", "#3b3365", "#3a3467", "#393668", "#38376a", "#38396c", "#373a6e", "#373c6f", "#363e71", "#353f73", "#354174", "#344276", "#344478", "#34467a", "#33477b", "#33497d", "#334b7f", "#334d80", "#334f82", "#335084", "#335285", "#335487", "#335689", "#34588a", "#345a8c", "#355c8d", "#355d8f", "#365f91", "#376192", "#386394", "#396595", "#3a6797", "#3b6998", "#3d6b9a", "#3e6d9b", "#406f9d", "#41719e", "#43739f", "#4575a1", "#4677a2", "#4879a4", "#4a7ba5", "#4c7da7", "#4e7fa8", "#5081a9", "#5283ab", "#5585ac", "#5787ad", "#5989af", "#5b8bb0", "#5e8db1", "#608fb3", "#6391b4", "#6593b5", "#6895b6", "#6a97b7", "#6d99b9", "#6f9aba", "#729cbb", "#759ebc", "#77a0bd", "#7aa2be", "#7da4bf", "#7fa5c0", "#82a7c1", "#85a9c2", "#88abc3", "#8aacc4", "#8daec4", "#90afc5", "#93b1c6", "#96b2c6", "#98b4c7", "#9bb5c7", "#9eb7c8", "#a0b8c8", "#a3b9c8", "#a6bac8", "#a8bbc8", "#abbcc8", "#adbdc8", "#b0bec8", "#b2bfc8", "#b5c0c8", "#b7c0c7", "#b9c1c7", "#bcc1c6", "#bec2c6", "#c0c2c5", "#c2c3c4", "#c4c3c3", "#c5c3c3", "#c7c3c2", "#c9c3c0", "#cac3bf", "#ccc2be", "#cdc2bd", "#cfc2bb", "#d0c1ba", "#d1c1b8", "#d2c0b7", "#d3bfb5", "#d4bfb3", "#d5beb1", "#d6bdb0", "#d6bcae", "#d7bbac", "#d7baaa", "#d8b9a8", "#d8b8a6", "#d8b6a4", "#d9b5a2", "#d9b49f", "#d9b29d", "#d9b19b", "#d9b099", "#d9ae97", "#d9ad94", "#d8ab92", "#d8aa90", "#d8a88e", "#d7a68b", "#d7a589", "#d7a387", "#d6a184", "#d6a082", "#d59e80", "#d49c7d", "#d49a7b", "#d39979", "#d29776", "#d29574", "#d19372", "#d0916f", "#cf8f6d", "#ce8d6b", "#cd8c68", "#cc8a66", "#cb8864", "#ca8661", "#c9845f", "#c8825d", "#c7805a", "#c67e58", "#c47b56", "#c37954", "#c27751", "#c1754f", "#bf734d", "#be714b", "#bc6f49", "#bb6d47", "#b96a44", "#b86842", "#b66640", "#b4643e", "#b3613c", "#b15f3a", "#af5d39", "#ae5b37", "#ac5835", "#aa5633", "#a85432", "#a65230", "#a44f2e", "#a24d2d", "#a04b2b", "#9e492a", "#9c4729", "#9b4427", "#994226", "#974025", "#953e24", "#933c23", "#913a22", "#8f3822", "#8d3621", "#8b3520", "#893320", "#87311f", "#862f1f", "#842e1f", "#822c1e", "#802b1e", "#7f291e", "#7d281e", "#7b261e", "#7a251e", "#78241e", "#77221e", "#75211e", "#74201e", "#721f1f", "#711e1f", "#701d1f", "#6e1c20", "#6d1c20", "#6c1b20", "#6b1a21", "#691921", "#681922", "#671822", "#661823", "#651724", "#641724", "#631625", "#621626", "#611626", "#601527", "#5f1528", "#5e1529", "#5d1529", "#5d152a", "#5c152b", "#5b152c", "#5a152d", "#59152e", "#58152f", "#581530", "#571531", "#561632", "#551633", "#541634", "#541635", "#531736", "#521737", "#511738", "#511839", "#50183a", "#4f193b"],
  brocO: ["#362f37", "#362f38", "#362f3a", "#362f3b", "#362f3c", "#362f3d", "#352f3e", "#353040", "#353041", "#353043", "#353144", "#353146", "#353247", "#353249", "#35334a", "#35344c", "#35344e", "#35354f", "#363651", "#363753", "#363855", "#363957", "#363a58", "#363b5a", "#363c5c", "#373d5e", "#373e60", "#374062", "#384164", "#384266", "#384468", "#39456a", "#39476c", "#3a486e", "#3a4a70", "#3b4b73", "#3c4d75", "#3c4f77", "#3d5079", "#3e527a", "#3f547c", "#40557e", "#415780", "#425982", "#435b84", "#445c86", "#455e88", "#46608a", "#47628b", "#49648d", "#4a658f", "#4b6791", "#4d6992", "#4e6b94", "#506d96", "#516f97", "#537099", "#54729a", "#56749c", "#58769d", "#59789f", "#5b79a0", "#5d7ba2", "#5e7da3", "#607fa5", "#6281a6", "#6482a7", "#6684a9", "#6886aa", "#6a88ac", "#6b89ad", "#6d8bae", "#6f8daf", "#718fb1", "#7391b2", "#7592b3", "#7794b5", "#7996b6", "#7b98b7", "#7d99b8", "#7f9bb9", "#829dba", "#849ebc", "#86a0bd", "#88a2be", "#8aa4bf", "#8ca5c0", "#8ea7c1", "#90a9c2", "#92aac3", "#94acc4", "#96aec5", "#98afc6", "#9bb1c7", "#9db2c8", "#9fb4c9", "#a1b6ca", "#a3b7ca", "#a5b9cb", "#a7bacc", "#a9bccd", "#abbdcd", "#adbfce", "#afc0ce", "#b1c1cf", "#b2c3cf", "#b4c4d0", "#b6c5d0", "#b8c7d0", "#bac8d0", "#bbc9d0", "#bdcad0", "#bfcbd0", "#c0ccd0", "#c2cdd0", "#c3ced0", "#c4cfd0", "#c6d0cf", "#c7d0cf", "#c8d1ce", "#c9d2cd", "#cad2cd", "#cbd3cc", "#ccd3cb", "#ccd3ca", "#cdd4c9", "#ced4c8", "#ced4c6", "#ced4c5", "#cfd4c3", "#cfd4c2", "#cfd3c0", "#cfd3bf", "#cfd2bd", "#cfd2bb", "#ced1b9", "#ced1b7", "#cdd0b5", "#cdcfb3", "#ccceb1", "#cbceaf", "#cbcdad", "#cacbab", "#c9caa9", "#c8c9a7", "#c7c8a4", "#c6c7a2", "#c4c5a0", "#c3c49e", "#c2c39b", "#c0c199", "#bfc097", "#bdbe94", "#bcbd92", "#babb90", "#b9b98d", "#b7b88b", "#b6b689", "#b4b486", "#b2b284", "#b0b182", "#afaf7f", "#adad7d", "#abab7b", "#a9a979", "#a7a877", "#a5a674", "#a4a472", "#a2a270", "#a0a06e", "#9e9e6c", "#9c9c6a", "#9a9a68", "#989866", "#969664", "#949462", "#929360", "#91915e", "#8f8f5c", "#8d8d5a", "#8b8b58", "#898957", "#878755", "#858553", "#838351", "#818150", "#807f4e", "#7e7e4c", "#7c7c4b", "#7a7a49", "#787848", "#767646", "#757445", "#737243", "#717142", "#6f6f40", "#6e6d3f", "#6c6b3e", "#6a693c", "#68683b", "#67663a", "#656439", "#636237", "#626136", "#605f35", "#5f5d34", "#5d5c33", "#5c5a32", "#5a5831", "#595731", "#575530", "#56542f", "#54522e", "#53512d", "#524f2d", "#514e2c", "#4f4c2c", "#4e4b2b", "#4d4a2b", "#4c482a", "#4b472a", "#494629", "#484429", "#474329", "#464229", "#454129", "#454028", "#443f28", "#433e28", "#423d28", "#413c28", "#403b28", "#403a29", "#3f3929", "#3e3829", "#3e3729", "#3d372a", "#3d362a", "#3c352a", "#3b352b", "#3b342b", "#3b332c", "#3a332c", "#3a322d", "#39322d", "#39312e", "#39312f", "#38302f", "#383030", "#383031", "#373032", "#372f33", "#372f33", "#372f34", "#362f35", "#362f36"]
}, Rp = {
  roma: ln(lt, mn.romaO),
  vik: ln(lt, mn.vikO),
  broc: ln(lt, mn.brocO),
  bam: ln(lt, mn.bamO),
  sinebow: Uu
}, tt = X().domain([-0.5, 0.5]), Fe = X().domain([-0.5, 0.5]);
var F, Le, De;
const Ot = Rp[A.simulation.colormap];
function Fp() {
  it(Ft, (t) => {
    const n = t.cell();
    n.length;
    const e = T.show_only_spikes.widget.value() == !1 ? Ot(t.theta) : t.spike == !0 ? Ot(0) : Ot(0.5);
    F.fillStyle = e, F.strokeStyle = e, F.lineWidth = 0, F.fillRect(tt(n[0].x), tt(n[0].y), tt(n[2].x) - tt(n[0].x), tt(n[2].y) - tt(n[0].y));
  });
}
function Lp() {
  it(Ft, (t) => {
    const n = t.cell(), e = n.length, r = T.show_only_spikes.widget.value() == !1 ? Ot(t.theta) : t.spike == !0 ? Ot(0) : Ot(0.5);
    F.fillStyle = r, F.strokeStyle = r, F.lineWidth = 1, F.beginPath(), F.moveTo(tt(n[0].x), Fe(n[0].y)), it(n, (i, a) => F.lineTo(tt(n[(a + 1) % e].x), Fe(n[(a + 1) % e].y))), F.fill(), F.stroke(), F.closePath();
  });
}
const Dp = (t, n) => {
  Le = n.display_size.width, De = n.display_size.height, tt.range([0, Le]), Fe.range([0, De]), F = t.node().getContext("2d"), wa();
}, wa = (t, n) => {
  F.clearRect(0, 0, Le, De), T.lattice.widget.value() == 0 ? Fp() : Lp();
};
function qp(t, n) {
  Cp(), wa();
}
function qe(t, n) {
  Ip(), Dp(t, n);
}
var oi = {};
const Hp = (t, n) => {
  ht.value() == 1 ? oi = fc(() => qp(), A.simulation.delay) : oi.stop();
}, Np = (t, n, e) => {
  jn.update(() => Tp(n)), ht.update(() => Hp()), Qn.update(() => qe(t, e)), T.lattice.widget.update(() => qe(t, e)), T.firing_frequency.widget.update(() => ii(n)), T.spike_intensity.widget.update(() => ii(n));
}, Bp = {
  name: "@explorables/dr_fibryll_and_mr_glyde",
  title: "Dr. Fibryll and Mr. Glyde",
  subtitle: "Pulse-coupled oscillators on a lattice.",
  description: "The explorable illustrates spatio-temporal pattern formation in a system of pulse-coupled oscillators. The model is a generic model that yields spiral waves and target patterns depending on the parameter choices.",
  author: "Dirk Brockmann (https://synosy.github.io)"
};
function Xp(t, n = xa) {
  const e = fp(t, n), r = e.display, i = e.controls, a = e.grid;
  return Ap(i, a), Np(r, i, n), qe(r, n), {
    halt() {
      ht.value() === 1 && ht.press(i);
    },
    reset() {
      ht.value() === 1 && ht.press(i), jn.press(i), Qn.press(i);
    },
    config: n,
    meta: Bp
  };
}
export {
  xa as config,
  Xp as default,
  Xp as load,
  Bp as meta
};
