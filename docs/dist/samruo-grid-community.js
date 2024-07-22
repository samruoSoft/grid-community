var st = Object.defineProperty;
var at = (t, e, l) => e in t ? st(t, e, { enumerable: !0, configurable: !0, writable: !0, value: l }) : t[e] = l;
var me = (t, e, l) => at(t, typeof e != "symbol" ? e + "" : e, l);
function V() {
}
function Fe(t) {
  return t();
}
function ye() {
  return /* @__PURE__ */ Object.create(null);
}
function J(t) {
  t.forEach(Fe);
}
function Ke(t) {
  return typeof t == "function";
}
function de(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function ut(t) {
  return Object.keys(t).length === 0;
}
function K(t) {
  return t ?? "";
}
function k(t, e) {
  t.appendChild(e);
}
function y(t, e, l) {
  t.insertBefore(e, l || null);
}
function N(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function be(t, e) {
  for (let l = 0; l < t.length; l += 1)
    t[l] && t[l].d(e);
}
function R(t) {
  return document.createElement(t);
}
function S(t) {
  return document.createTextNode(t);
}
function G() {
  return S(" ");
}
function ce() {
  return S("");
}
function X(t, e, l, n) {
  return t.addEventListener(e, l, n), () => t.removeEventListener(e, l, n);
}
function b(t, e, l) {
  l == null ? t.removeAttribute(e) : t.getAttribute(e) !== l && t.setAttribute(e, l);
}
function ft(t) {
  return Array.from(t.childNodes);
}
function M(t, e) {
  e = "" + e, t.data !== e && (t.data = /** @type {string} */
  e);
}
function j(t, e, l, n) {
  l == null ? t.style.removeProperty(e) : t.style.setProperty(e, l, "");
}
function dt(t, e, { bubbles: l = !1, cancelable: n = !1 } = {}) {
  return new CustomEvent(t, { detail: e, bubbles: l, cancelable: n });
}
let ie;
function ne(t) {
  ie = t;
}
function He() {
  if (!ie) throw new Error("Function called outside component initialization");
  return ie;
}
function qe(t) {
  He().$$.on_mount.push(t);
}
function Ue(t) {
  He().$$.on_destroy.push(t);
}
function je() {
  const t = He();
  return (e, l, { cancelable: n = !1 } = {}) => {
    const o = t.$$.callbacks[e];
    if (o) {
      const r = dt(
        /** @type {string} */
        e,
        l,
        { cancelable: n }
      );
      return o.slice().forEach((s) => {
        s.call(t, r);
      }), !r.defaultPrevented;
    }
    return !0;
  };
}
const Z = [], fe = [];
let $ = [];
const Se = [], Xe = /* @__PURE__ */ Promise.resolve();
let ve = !1;
function Je() {
  ve || (ve = !0, Xe.then(Qe));
}
function pe() {
  return Je(), Xe;
}
function ke(t) {
  $.push(t);
}
const we = /* @__PURE__ */ new Set();
let Y = 0;
function Qe() {
  if (Y !== 0)
    return;
  const t = ie;
  do {
    try {
      for (; Y < Z.length; ) {
        const e = Z[Y];
        Y++, ne(e), ct(e.$$);
      }
    } catch (e) {
      throw Z.length = 0, Y = 0, e;
    }
    for (ne(null), Z.length = 0, Y = 0; fe.length; ) fe.pop()();
    for (let e = 0; e < $.length; e += 1) {
      const l = $[e];
      we.has(l) || (we.add(l), l());
    }
    $.length = 0;
  } while (Z.length);
  for (; Se.length; )
    Se.pop()();
  ve = !1, we.clear(), ne(t);
}
function ct(t) {
  if (t.fragment !== null) {
    t.update(), J(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(ke);
  }
}
function ht(t) {
  const e = [], l = [];
  $.forEach((n) => t.indexOf(n) === -1 ? e.push(n) : l.push(n)), l.forEach((n) => n()), $ = e;
}
const ue = /* @__PURE__ */ new Set();
let U;
function x() {
  U = {
    r: 0,
    c: [],
    p: U
    // parent group
  };
}
function ee() {
  U.r || J(U.c), U = U.p;
}
function z(t, e) {
  t && t.i && (ue.delete(t), t.i(e));
}
function A(t, e, l, n) {
  if (t && t.o) {
    if (ue.has(t)) return;
    ue.add(t), U.c.push(() => {
      ue.delete(t), n && (l && t.d(1), n());
    }), t.o(e);
  } else n && n();
}
function F(t) {
  return (t == null ? void 0 : t.length) !== void 0 ? t : Array.from(t);
}
function _t(t, e) {
  A(t, 1, 1, () => {
    e.delete(t.key);
  });
}
function gt(t, e, l, n, o, r, s, a, u, d, g, _) {
  let w = t.length, c = r.length, H = w;
  const p = {};
  for (; H--; ) p[t[H].key] = H;
  const h = [], i = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map(), C = [];
  for (H = c; H--; ) {
    const T = _(o, r, H), O = l(T);
    let L = s.get(O);
    L ? C.push(() => L.p(T, e)) : (L = d(O, T), L.c()), i.set(O, h[H] = L), O in p && f.set(O, Math.abs(H - p[O]));
  }
  const W = /* @__PURE__ */ new Set(), Q = /* @__PURE__ */ new Set();
  function te(T) {
    z(T, 1), T.m(a, g), s.set(T.key, T), g = T.first, c--;
  }
  for (; w && c; ) {
    const T = h[c - 1], O = t[w - 1], L = T.key, P = O.key;
    T === O ? (g = T.first, w--, c--) : i.has(P) ? !s.has(L) || W.has(L) ? te(T) : Q.has(P) ? w-- : f.get(L) > f.get(P) ? (Q.add(L), te(T)) : (W.add(P), w--) : (u(O, s), w--);
  }
  for (; w--; ) {
    const T = t[w];
    i.has(T.key) || u(T, s);
  }
  for (; c; ) te(h[c - 1]);
  return J(C), h;
}
function he(t) {
  t && t.c();
}
function oe(t, e, l) {
  const { fragment: n, after_update: o } = t.$$;
  n && n.m(e, l), ke(() => {
    const r = t.$$.on_mount.map(Fe).filter(Ke);
    t.$$.on_destroy ? t.$$.on_destroy.push(...r) : J(r), t.$$.on_mount = [];
  }), o.forEach(ke);
}
function re(t, e) {
  const l = t.$$;
  l.fragment !== null && (ht(l.after_update), J(l.on_destroy), l.fragment && l.fragment.d(e), l.on_destroy = l.fragment = null, l.ctx = []);
}
function mt(t, e) {
  t.$$.dirty[0] === -1 && (Z.push(t), Je(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function _e(t, e, l, n, o, r, s = null, a = [-1]) {
  const u = ie;
  ne(t);
  const d = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: r,
    update: V,
    not_equal: o,
    bound: ye(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (u ? u.$$.context : [])),
    // everything else
    callbacks: ye(),
    dirty: a,
    skip_bound: !1,
    root: e.target || u.$$.root
  };
  s && s(d.root);
  let g = !1;
  if (d.ctx = l ? l(t, e.props || {}, (_, w, ...c) => {
    const H = c.length ? c[0] : w;
    return d.ctx && o(d.ctx[_], d.ctx[_] = H) && (!d.skip_bound && d.bound[_] && d.bound[_](H), g && mt(t, _)), w;
  }) : [], d.update(), g = !0, J(d.before_update), d.fragment = n ? n(d.ctx) : !1, e.target) {
    if (e.hydrate) {
      const _ = ft(e.target);
      d.fragment && d.fragment.l(_), _.forEach(N);
    } else
      d.fragment && d.fragment.c();
    e.intro && z(t.$$.fragment), oe(t, e.target, e.anchor), Qe();
  }
  ne(u);
}
class ge {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    me(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    me(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    re(this, 1), this.$destroy = V;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, l) {
    if (!Ke(l))
      return V;
    const n = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return n.push(l), () => {
      const o = n.indexOf(l);
      o !== -1 && n.splice(o, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(e) {
    this.$$set && !ut(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const pt = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(pt);
function Ee(t) {
  let e;
  function l(r, s) {
    return (
      /*cell*/
      r[0].onclick ? bt : wt
    );
  }
  let n = l(t), o = n(t);
  return {
    c() {
      o.c(), e = ce();
    },
    m(r, s) {
      o.m(r, s), y(r, e, s);
    },
    p(r, s) {
      n === (n = l(r)) && o ? o.p(r, s) : (o.d(1), o = n(r), o && (o.c(), o.m(e.parentNode, e)));
    },
    d(r) {
      r && N(e), o.d(r);
    }
  };
}
function wt(t) {
  let e, l = (
    /*cell*/
    t[0].textContent + ""
  ), n, o;
  return {
    c() {
      e = R("a"), n = S(l), b(e, "href", "javascript:void(0)"), b(e, "class", o = K(
        /*cell*/
        t[0].className
      ) + " svelte-rhrpja");
    },
    m(r, s) {
      y(r, e, s), k(e, n);
    },
    p(r, s) {
      s & /*cell*/
      1 && l !== (l = /*cell*/
      r[0].textContent + "") && M(n, l), s & /*cell*/
      1 && o !== (o = K(
        /*cell*/
        r[0].className
      ) + " svelte-rhrpja") && b(e, "class", o);
    },
    d(r) {
      r && N(e);
    }
  };
}
function bt(t) {
  let e, l = (
    /*cell*/
    t[0].textContent + ""
  ), n, o, r, s;
  return {
    c() {
      e = R("a"), n = S(l), b(e, "href", "javascript:void(0)"), b(e, "class", o = K(
        /*cell*/
        t[0].className
      ) + " svelte-rhrpja");
    },
    m(a, u) {
      y(a, e, u), k(e, n), r || (s = X(
        e,
        "click",
        /*click_handler*/
        t[2]
      ), r = !0);
    },
    p(a, u) {
      u & /*cell*/
      1 && l !== (l = /*cell*/
      a[0].textContent + "") && M(n, l), u & /*cell*/
      1 && o !== (o = K(
        /*cell*/
        a[0].className
      ) + " svelte-rhrpja") && b(e, "class", o);
    },
    d(a) {
      a && N(e), r = !1, s();
    }
  };
}
function Te(t) {
  let e;
  function l(r, s) {
    return (
      /*cell*/
      r[0].onclick ? kt : vt
    );
  }
  let n = l(t), o = n(t);
  return {
    c() {
      o.c(), e = ce();
    },
    m(r, s) {
      o.m(r, s), y(r, e, s);
    },
    p(r, s) {
      n === (n = l(r)) && o ? o.p(r, s) : (o.d(1), o = n(r), o && (o.c(), o.m(e.parentNode, e)));
    },
    d(r) {
      r && N(e), o.d(r);
    }
  };
}
function vt(t) {
  let e, l = (
    /*cell*/
    t[0].textContent + ""
  ), n, o;
  return {
    c() {
      e = R("button"), n = S(l), b(e, "class", o = K(
        /*cell*/
        t[0].className
      ) + " svelte-rhrpja");
    },
    m(r, s) {
      y(r, e, s), k(e, n);
    },
    p(r, s) {
      s & /*cell*/
      1 && l !== (l = /*cell*/
      r[0].textContent + "") && M(n, l), s & /*cell*/
      1 && o !== (o = K(
        /*cell*/
        r[0].className
      ) + " svelte-rhrpja") && b(e, "class", o);
    },
    d(r) {
      r && N(e);
    }
  };
}
function kt(t) {
  let e, l = (
    /*cell*/
    t[0].textContent + ""
  ), n, o, r, s;
  return {
    c() {
      e = R("button"), n = S(l), b(e, "class", o = K(
        /*cell*/
        t[0].className
      ) + " svelte-rhrpja");
    },
    m(a, u) {
      y(a, e, u), k(e, n), r || (s = X(
        e,
        "click",
        /*click_handler_1*/
        t[3]
      ), r = !0);
    },
    p(a, u) {
      u & /*cell*/
      1 && l !== (l = /*cell*/
      a[0].textContent + "") && M(n, l), u & /*cell*/
      1 && o !== (o = K(
        /*cell*/
        a[0].className
      ) + " svelte-rhrpja") && b(e, "class", o);
    },
    d(a) {
      a && N(e), r = !1, s();
    }
  };
}
function Ht(t) {
  let e, l, n = (
    /*cell*/
    t[0].type === "link" && Ee(t)
  ), o = (
    /*cell*/
    t[0].type === "button" && Te(t)
  );
  return {
    c() {
      n && n.c(), e = G(), o && o.c(), l = ce();
    },
    m(r, s) {
      n && n.m(r, s), y(r, e, s), o && o.m(r, s), y(r, l, s);
    },
    p(r, [s]) {
      /*cell*/
      r[0].type === "link" ? n ? n.p(r, s) : (n = Ee(r), n.c(), n.m(e.parentNode, e)) : n && (n.d(1), n = null), /*cell*/
      r[0].type === "button" ? o ? o.p(r, s) : (o = Te(r), o.c(), o.m(l.parentNode, l)) : o && (o.d(1), o = null);
    },
    i: V,
    o: V,
    d(r) {
      r && (N(e), N(l)), n && n.d(r), o && o.d(r);
    }
  };
}
function jt(t, e, l) {
  let { cell: n } = e, { data: o } = e;
  const r = () => n.onclick(o), s = () => n.onclick(o);
  return t.$$set = (a) => {
    "cell" in a && l(0, n = a.cell), "data" in a && l(1, o = a.data);
  }, [n, o, r, s];
}
class Rt extends ge {
  constructor(e) {
    super(), _e(this, e, jt, Ht, de, { cell: 0, data: 1 });
  }
}
function Ct(t) {
  let e, l = (
    /*column*/
    t[1].headerName + ""
  ), n, o;
  return {
    c() {
      e = R("div"), n = S(l), b(e, "class", o = "column-text " + /*column*/
      (t[1].sortable ? "sortable" : "") + " " + /*order*/
      t[0] + " svelte-rhrpja"), j(
        e,
        "width",
        /*column*/
        t[1].width - 1 + "px"
      ), j(
        e,
        "height",
        /*height*/
        t[2] + "px"
      );
    },
    m(r, s) {
      y(r, e, s), k(e, n);
    },
    p(r, s) {
      s & /*column*/
      2 && l !== (l = /*column*/
      r[1].headerName + "") && M(n, l), s & /*column, order*/
      3 && o !== (o = "column-text " + /*column*/
      (r[1].sortable ? "sortable" : "") + " " + /*order*/
      r[0] + " svelte-rhrpja") && b(e, "class", o), s & /*column*/
      2 && j(
        e,
        "width",
        /*column*/
        r[1].width - 1 + "px"
      ), s & /*height*/
      4 && j(
        e,
        "height",
        /*height*/
        r[2] + "px"
      );
    },
    d(r) {
      r && N(e);
    }
  };
}
function Nt(t) {
  let e, l = (
    /*column*/
    t[1].headerName + ""
  ), n, o, r, s;
  return {
    c() {
      e = R("div"), n = S(l), b(e, "class", o = "column-text " + /*column*/
      (t[1].sortable ? "sortable" : "") + " " + /*order*/
      t[0] + " svelte-rhrpja"), j(
        e,
        "width",
        /*column*/
        t[1].width - 1 + "px"
      ), j(
        e,
        "height",
        /*height*/
        t[2] + "px"
      );
    },
    m(a, u) {
      y(a, e, u), k(e, n), r || (s = X(
        e,
        "click",
        /*click_handler*/
        t[6]
      ), r = !0);
    },
    p(a, u) {
      u & /*column*/
      2 && l !== (l = /*column*/
      a[1].headerName + "") && M(n, l), u & /*column, order*/
      3 && o !== (o = "column-text " + /*column*/
      (a[1].sortable ? "sortable" : "") + " " + /*order*/
      a[0] + " svelte-rhrpja") && b(e, "class", o), u & /*column*/
      2 && j(
        e,
        "width",
        /*column*/
        a[1].width - 1 + "px"
      ), u & /*height*/
      4 && j(
        e,
        "height",
        /*height*/
        a[2] + "px"
      );
    },
    d(a) {
      a && N(e), r = !1, s();
    }
  };
}
function yt(t) {
  let e, l, n, o;
  function r(u, d) {
    return (
      /*column*/
      u[1].sortable ? Nt : Ct
    );
  }
  let s = r(t), a = s(t);
  return {
    c() {
      a.c(), e = G(), l = R("div"), b(l, "class", "column-resize svelte-rhrpja"), j(l, "position", "relative"), j(
        l,
        "height",
        /*height*/
        t[2] + "px"
      );
    },
    m(u, d) {
      a.m(u, d), y(u, e, d), y(u, l, d), n || (o = X(
        l,
        "mousedown",
        /*mousedown_handler*/
        t[7]
      ), n = !0);
    },
    p(u, [d]) {
      s === (s = r(u)) && a ? a.p(u, d) : (a.d(1), a = s(u), a && (a.c(), a.m(e.parentNode, e))), d & /*height*/
      4 && j(
        l,
        "height",
        /*height*/
        u[2] + "px"
      );
    },
    i: V,
    o: V,
    d(u) {
      u && (N(e), N(l)), a.d(u), n = !1, o();
    }
  };
}
function St(t, e, l) {
  const n = je();
  let { order: o } = e, { column: r } = e, { height: s } = e, { columnSort: a = { field: "", order: "asc" } } = e;
  qe(() => () => {
    document.removeEventListener("mousemove", c), document.removeEventListener("mouseup", H);
  });
  let u = !1, d, g;
  function _(i, f) {
    l(5, a.field = f, a), a.field === f && l(5, a.order = a.order === "asc" ? "desc" : "asc", a), n("onHeaderClick", f);
  }
  function w(i, f) {
    d = f, g = i.target.parentNode.getBoundingClientRect().left, u = !0, document.addEventListener("mousemove", c), document.addEventListener("mouseup", H);
  }
  function c(i) {
    if (u) {
      const f = i.clientX - g - 10;
      n("onHandleResize", { field: d, width: f });
    }
  }
  function H() {
    u = !1, document.removeEventListener("mousemove", c), document.removeEventListener("mouseup", H);
  }
  const p = (i) => _(i, r.field), h = (i) => {
    w(i, r.field);
  };
  return t.$$set = (i) => {
    "order" in i && l(0, o = i.order), "column" in i && l(1, r = i.column), "height" in i && l(2, s = i.height), "columnSort" in i && l(5, a = i.columnSort);
  }, [
    o,
    r,
    s,
    _,
    w,
    a,
    p,
    h
  ];
}
class Ye extends ge {
  constructor(e) {
    super(), _e(this, e, St, yt, de, {
      order: 0,
      column: 1,
      height: 2,
      columnSort: 5
    });
  }
}
function ze(t, e, l) {
  const n = t.slice();
  return n[14] = e[l], n;
}
function Ie(t, e, l) {
  const n = t.slice();
  return n[14] = e[l], n;
}
function Le(t) {
  let e, l, n, o, r;
  return {
    c() {
      e = R("th"), l = R("div"), n = R("div"), o = S(
        /*indexTitle*/
        t[4]
      ), b(n, "class", "column-text svelte-rhrpja"), j(
        n,
        "width",
        /*index_width*/
        t[5] + 12 + "px"
      ), j(
        n,
        "height",
        /*header_height*/
        t[6] + "px "
      ), b(l, "class", "column svelte-rhrpja"), b(e, "rowspan", r = /*doubleHeader*/
      t[3] ? 2 : 0), b(e, "class", "svelte-rhrpja");
    },
    m(s, a) {
      y(s, e, a), k(e, l), k(l, n), k(n, o);
    },
    p(s, a) {
      a & /*indexTitle*/
      16 && M(
        o,
        /*indexTitle*/
        s[4]
      ), a & /*index_width*/
      32 && j(
        n,
        "width",
        /*index_width*/
        s[5] + 12 + "px"
      ), a & /*header_height*/
      64 && j(
        n,
        "height",
        /*header_height*/
        s[6] + "px "
      ), a & /*doubleHeader*/
      8 && r !== (r = /*doubleHeader*/
      s[3] ? 2 : 0) && b(e, "rowspan", r);
    },
    d(s) {
      s && N(e);
    }
  };
}
function Et(t) {
  let e, l = (
    /*column*/
    t[14].headerName + ""
  ), n, o, r;
  return {
    c() {
      e = R("th"), n = S(l), o = G(), b(e, "colspan", r = /*column*/
      t[14].span), j(
        e,
        "height",
        /*header_height*/
        t[6] + "px"
      ), b(e, "class", "svelte-rhrpja");
    },
    m(s, a) {
      y(s, e, a), k(e, n), k(e, o);
    },
    p(s, a) {
      a & /*doubleHeader_columns*/
      1 && l !== (l = /*column*/
      s[14].headerName + "") && M(n, l), a & /*doubleHeader_columns*/
      1 && r !== (r = /*column*/
      s[14].span) && b(e, "colspan", r), a & /*header_height*/
      64 && j(
        e,
        "height",
        /*header_height*/
        s[6] + "px"
      );
    },
    i: V,
    o: V,
    d(s) {
      s && N(e);
    }
  };
}
function Tt(t) {
  let e, l, n, o, r, s;
  return n = new Ye({
    props: {
      order: (
        /*columnSort*/
        t[7] && /*column*/
        t[14].field === /*columnSort*/
        t[7].field ? (
          /*columnSort*/
          t[7].order
        ) : ""
      ),
      column: (
        /*column*/
        t[14]
      ),
      height: (
        /*header_height*/
        t[6] * 2
      ),
      columnSort: (
        /*columnSort*/
        t[7]
      )
    }
  }), n.$on(
    "onHeaderClick",
    /*onHeaderClick_handler*/
    t[10]
  ), n.$on(
    "onHandleResize",
    /*onHandleResize_handler*/
    t[11]
  ), {
    c() {
      e = R("th"), l = R("div"), he(n.$$.fragment), o = G(), b(l, "class", "column svelte-rhrpja"), b(e, "rowspan", r = /*column*/
      t[14].span), j(
        e,
        "width",
        /*column*/
        t[14].width + "px"
      ), j(
        e,
        "height",
        /*header_height*/
        t[6] * 2 + "px"
      ), b(e, "class", "svelte-rhrpja");
    },
    m(a, u) {
      y(a, e, u), k(e, l), oe(n, l, null), k(e, o), s = !0;
    },
    p(a, u) {
      const d = {};
      u & /*columnSort, doubleHeader_columns*/
      129 && (d.order = /*columnSort*/
      a[7] && /*column*/
      a[14].field === /*columnSort*/
      a[7].field ? (
        /*columnSort*/
        a[7].order
      ) : ""), u & /*doubleHeader_columns*/
      1 && (d.column = /*column*/
      a[14]), u & /*header_height*/
      64 && (d.height = /*header_height*/
      a[6] * 2), u & /*columnSort*/
      128 && (d.columnSort = /*columnSort*/
      a[7]), n.$set(d), (!s || u & /*doubleHeader_columns*/
      1 && r !== (r = /*column*/
      a[14].span)) && b(e, "rowspan", r), (!s || u & /*doubleHeader_columns*/
      1) && j(
        e,
        "width",
        /*column*/
        a[14].width + "px"
      ), (!s || u & /*header_height*/
      64) && j(
        e,
        "height",
        /*header_height*/
        a[6] * 2 + "px"
      );
    },
    i(a) {
      s || (z(n.$$.fragment, a), s = !0);
    },
    o(a) {
      A(n.$$.fragment, a), s = !1;
    },
    d(a) {
      a && N(e), re(n);
    }
  };
}
function De(t) {
  let e, l, n, o;
  const r = [Tt, Et], s = [];
  function a(u, d) {
    return (
      /*column*/
      u[14].type === 0 ? 0 : 1
    );
  }
  return e = a(t), l = s[e] = r[e](t), {
    c() {
      l.c(), n = ce();
    },
    m(u, d) {
      s[e].m(u, d), y(u, n, d), o = !0;
    },
    p(u, d) {
      let g = e;
      e = a(u), e === g ? s[e].p(u, d) : (x(), A(s[g], 1, 1, () => {
        s[g] = null;
      }), ee(), l = s[e], l ? l.p(u, d) : (l = s[e] = r[e](u), l.c()), z(l, 1), l.m(n.parentNode, n));
    },
    i(u) {
      o || (z(l), o = !0);
    },
    o(u) {
      A(l), o = !1;
    },
    d(u) {
      u && N(n), s[e].d(u);
    }
  };
}
function Ae(t) {
  let e, l, n, o, r;
  return n = new Ye({
    props: {
      order: (
        /*columnSort*/
        t[7] && /*column*/
        t[14].field === /*columnSort*/
        t[7].field ? (
          /*columnSort*/
          t[7].order
        ) : ""
      ),
      column: (
        /*column*/
        t[14]
      ),
      height: (
        /*header_height*/
        t[6]
      ),
      columnSort: (
        /*columnSort*/
        t[7]
      )
    }
  }), n.$on(
    "onHeaderClick",
    /*onHeaderClick_handler_1*/
    t[12]
  ), n.$on(
    "onHandleResize",
    /*onHandleResize_handler_1*/
    t[13]
  ), {
    c() {
      e = R("th"), l = R("div"), he(n.$$.fragment), o = G(), b(l, "class", "column svelte-rhrpja"), b(e, "class", "svelte-rhrpja");
    },
    m(s, a) {
      y(s, e, a), k(e, l), oe(n, l, null), k(e, o), r = !0;
    },
    p(s, a) {
      const u = {};
      a & /*columnSort, childrenHeader_columns*/
      130 && (u.order = /*columnSort*/
      s[7] && /*column*/
      s[14].field === /*columnSort*/
      s[7].field ? (
        /*columnSort*/
        s[7].order
      ) : ""), a & /*childrenHeader_columns*/
      2 && (u.column = /*column*/
      s[14]), a & /*header_height*/
      64 && (u.height = /*header_height*/
      s[6]), a & /*columnSort*/
      128 && (u.columnSort = /*columnSort*/
      s[7]), n.$set(u);
    },
    i(s) {
      r || (z(n.$$.fragment, s), r = !0);
    },
    o(s) {
      A(n.$$.fragment, s), r = !1;
    },
    d(s) {
      s && N(e), re(n);
    }
  };
}
function zt(t) {
  let e, l, n, o, r, s, a, u = (
    /*autoIndex*/
    t[2] && Le(t)
  ), d = F(
    /*doubleHeader_columns*/
    t[0]
  ), g = [];
  for (let p = 0; p < d.length; p += 1)
    g[p] = De(Ie(t, d, p));
  const _ = (p) => A(g[p], 1, 1, () => {
    g[p] = null;
  });
  let w = F(
    /*childrenHeader_columns*/
    t[1]
  ), c = [];
  for (let p = 0; p < w.length; p += 1)
    c[p] = Ae(ze(t, w, p));
  const H = (p) => A(c[p], 1, 1, () => {
    c[p] = null;
  });
  return {
    c() {
      e = R("table"), l = R("thead"), n = R("tr"), u && u.c(), o = G();
      for (let p = 0; p < g.length; p += 1)
        g[p].c();
      r = G(), s = R("tr");
      for (let p = 0; p < c.length; p += 1)
        c[p].c();
      b(e, "class", "virtual-header svelte-rhrpja");
    },
    m(p, h) {
      y(p, e, h), k(e, l), k(l, n), u && u.m(n, null), k(n, o);
      for (let i = 0; i < g.length; i += 1)
        g[i] && g[i].m(n, null);
      k(l, r), k(l, s);
      for (let i = 0; i < c.length; i += 1)
        c[i] && c[i].m(s, null);
      a = !0;
    },
    p(p, [h]) {
      if (/*autoIndex*/
      p[2] ? u ? u.p(p, h) : (u = Le(p), u.c(), u.m(n, o)) : u && (u.d(1), u = null), h & /*doubleHeader_columns, header_height, columnSort, dispatch, onHandleResize*/
      961) {
        d = F(
          /*doubleHeader_columns*/
          p[0]
        );
        let i;
        for (i = 0; i < d.length; i += 1) {
          const f = Ie(p, d, i);
          g[i] ? (g[i].p(f, h), z(g[i], 1)) : (g[i] = De(f), g[i].c(), z(g[i], 1), g[i].m(n, null));
        }
        for (x(), i = d.length; i < g.length; i += 1)
          _(i);
        ee();
      }
      if (h & /*columnSort, childrenHeader_columns, header_height, dispatch, onHandleResize*/
      962) {
        w = F(
          /*childrenHeader_columns*/
          p[1]
        );
        let i;
        for (i = 0; i < w.length; i += 1) {
          const f = ze(p, w, i);
          c[i] ? (c[i].p(f, h), z(c[i], 1)) : (c[i] = Ae(f), c[i].c(), z(c[i], 1), c[i].m(s, null));
        }
        for (x(), i = w.length; i < c.length; i += 1)
          H(i);
        ee();
      }
    },
    i(p) {
      if (!a) {
        for (let h = 0; h < d.length; h += 1)
          z(g[h]);
        for (let h = 0; h < w.length; h += 1)
          z(c[h]);
        a = !0;
      }
    },
    o(p) {
      g = g.filter(Boolean);
      for (let h = 0; h < g.length; h += 1)
        A(g[h]);
      c = c.filter(Boolean);
      for (let h = 0; h < c.length; h += 1)
        A(c[h]);
      a = !1;
    },
    d(p) {
      p && N(e), u && u.d(), be(g, p), be(c, p);
    }
  };
}
function It(t, e, l) {
  const n = je();
  let { autoIndex: o = !1 } = e, { doubleHeader: r = !1 } = e, { indexTitle: s = "№" } = e, { index_width: a = 40 } = e, { header_height: u = 30 } = e, { doubleHeader_columns: d = [] } = e, { childrenHeader_columns: g = [] } = e, { columnSort: _ = { field: "", order: "asc" } } = e;
  function w(i) {
    n("onHandleResize", i), g.find((f) => f.field === i.field) && (g.find((f) => f.field === i.field).width = i.width, l(1, g = [...g])), d.find((f) => f.field === i.field) && (d.find((f) => f.field === i.field).width = i.width, l(0, d = [...d]));
  }
  Ue(() => {
    l(0, d = []), l(1, g = []);
  });
  const c = (i) => n("onHeaderClick", i.detail), H = (i) => w(i.detail), p = (i) => n("onHeaderClick", i.detail), h = (i) => w(i.detail);
  return t.$$set = (i) => {
    "autoIndex" in i && l(2, o = i.autoIndex), "doubleHeader" in i && l(3, r = i.doubleHeader), "indexTitle" in i && l(4, s = i.indexTitle), "index_width" in i && l(5, a = i.index_width), "header_height" in i && l(6, u = i.header_height), "doubleHeader_columns" in i && l(0, d = i.doubleHeader_columns), "childrenHeader_columns" in i && l(1, g = i.childrenHeader_columns), "columnSort" in i && l(7, _ = i.columnSort);
  }, [
    d,
    g,
    o,
    r,
    s,
    a,
    u,
    _,
    n,
    w,
    c,
    H,
    p,
    h
  ];
}
class Lt extends ge {
  constructor(e) {
    super(), _e(this, e, It, zt, de, {
      autoIndex: 2,
      doubleHeader: 3,
      indexTitle: 4,
      index_width: 5,
      header_height: 6,
      doubleHeader_columns: 0,
      childrenHeader_columns: 1,
      columnSort: 7
    });
  }
}
function Be(t, e, l) {
  const n = t.slice();
  return n[38] = e[l], n;
}
function Me(t, e, l) {
  const n = t.slice();
  return n[41] = e[l], n[43] = l, n;
}
function Oe(t) {
  let e, l, n = (
    /*row*/
    (t[38].data.___index ? (
      /*row*/
      t[38].data.___index
    ) : "") + ""
  ), o;
  return {
    c() {
      e = R("div"), l = R("span"), o = S(n), b(l, "class", "svelte-rhrpja"), j(e, "width", Ze + "px"), j(
        e,
        "height",
        /*options*/
        t[0].rowHeight + "px"
      ), j(e, "text-align", "center"), b(e, "class", "svelte-rhrpja");
    },
    m(r, s) {
      y(r, e, s), k(e, l), k(l, o);
    },
    p(r, s) {
      s[0] & /*visible*/
      8192 && n !== (n = /*row*/
      (r[38].data.___index ? (
        /*row*/
        r[38].data.___index
      ) : "") + "") && M(o, n), s[0] & /*options*/
      1 && j(
        e,
        "height",
        /*options*/
        r[0].rowHeight + "px"
      );
    },
    d(r) {
      r && N(e);
    }
  };
}
function Dt(t) {
  let e = (
    /*row*/
    t[38].data[
      /*column*/
      t[41].field
    ] + ""
  ), l;
  return {
    c() {
      l = S(e);
    },
    m(n, o) {
      y(n, l, o);
    },
    p(n, o) {
      o[0] & /*visible, dataView_columns*/
      8704 && e !== (e = /*row*/
      n[38].data[
        /*column*/
        n[41].field
      ] + "") && M(l, e);
    },
    i: V,
    o: V,
    d(n) {
      n && N(l);
    }
  };
}
function At(t) {
  let e, l;
  return e = new Rt({
    props: {
      data: (
        /*row*/
        t[38].data
      ),
      cell: (
        /*column*/
        t[41].cellRenderer({ data: (
          /*row*/
          t[38].data
        ) })
      )
    }
  }), {
    c() {
      he(e.$$.fragment);
    },
    m(n, o) {
      oe(e, n, o), l = !0;
    },
    p(n, o) {
      const r = {};
      o[0] & /*visible*/
      8192 && (r.data = /*row*/
      n[38].data), o[0] & /*dataView_columns, visible*/
      8704 && (r.cell = /*column*/
      n[41].cellRenderer({ data: (
        /*row*/
        n[38].data
      ) })), e.$set(r);
    },
    i(n) {
      l || (z(e.$$.fragment, n), l = !0);
    },
    o(n) {
      A(e.$$.fragment, n), l = !1;
    },
    d(n) {
      re(e, n);
    }
  };
}
function Ge(t) {
  let e, l, n, o, r, s, a;
  const u = [At, Dt], d = [];
  function g(_, w) {
    return (
      /*column*/
      _[41].cellRenderer ? 0 : 1
    );
  }
  return n = g(t), o = d[n] = u[n](t), {
    c() {
      e = R("div"), l = R("span"), o.c(), r = G(), b(l, "class", "svelte-rhrpja"), b(e, "style", s = /*column*/
      (t[41].align ? "text-align:" + /*column*/
      t[41].align + ";" : "") + " width:" + /*index*/
      (t[43] === /*options*/
      t[0].columns.length - 1 ? (
        /*column*/
        t[41].width + 2
      ) : (
        /*column*/
        t[41].width
      )) + "px;height: " + /*options*/
      t[0].rowHeight + "px"), b(e, "class", "svelte-rhrpja");
    },
    m(_, w) {
      y(_, e, w), k(e, l), d[n].m(l, null), k(e, r), a = !0;
    },
    p(_, w) {
      let c = n;
      n = g(_), n === c ? d[n].p(_, w) : (x(), A(d[c], 1, 1, () => {
        d[c] = null;
      }), ee(), o = d[n], o ? o.p(_, w) : (o = d[n] = u[n](_), o.c()), z(o, 1), o.m(l, null)), (!a || w[0] & /*dataView_columns, options*/
      513 && s !== (s = /*column*/
      (_[41].align ? "text-align:" + /*column*/
      _[41].align + ";" : "") + " width:" + /*index*/
      (_[43] === /*options*/
      _[0].columns.length - 1 ? (
        /*column*/
        _[41].width + 2
      ) : (
        /*column*/
        _[41].width
      )) + "px;height: " + /*options*/
      _[0].rowHeight + "px")) && b(e, "style", s);
    },
    i(_) {
      a || (z(o), a = !0);
    },
    o(_) {
      A(o), a = !1;
    },
    d(_) {
      _ && N(e), d[n].d();
    }
  };
}
function Pe(t, e) {
  let l, n, o, r, s, a, u, d, g, _ = (
    /*options*/
    e[0].autoIndex && Oe(e)
  ), w = F(
    /*dataView_columns*/
    e[9]
  ), c = [];
  for (let h = 0; h < w.length; h += 1)
    c[h] = Ge(Me(e, w, h));
  const H = (h) => A(c[h], 1, 1, () => {
    c[h] = null;
  });
  function p() {
    return (
      /*click_handler*/
      e[29](
        /*row*/
        e[38]
      )
    );
  }
  return {
    key: t,
    first: null,
    c() {
      l = R("div"), n = R("div"), _ && _.c(), o = G();
      for (let h = 0; h < c.length; h += 1)
        c[h].c();
      a = G(), b(n, "class", r = "virtual-list-row " + /*row*/
      (e[38].data.___index % 2 === 0 ? "" : "row-odd") + " " + /*options*/
      (e[0].multi_select && /*selectRowKeys*/
      e[17].includes(
        /*row*/
        e[38].data.___index
      ) ? "row-selected" : "") + " svelte-rhrpja"), b(n, "data-index", s = /*row*/
      e[38].data.___index), b(n, "role", "row"), b(n, "tabindex", "0"), b(l, "class", "row-container svelte-rhrpja"), this.first = l;
    },
    m(h, i) {
      y(h, l, i), k(l, n), _ && _.m(n, null), k(n, o);
      for (let f = 0; f < c.length; f += 1)
        c[f] && c[f].m(n, null);
      k(l, a), u = !0, d || (g = [
        X(n, "click", p),
        X(n, "keypress", Mt)
      ], d = !0);
    },
    p(h, i) {
      if (e = h, /*options*/
      e[0].autoIndex ? _ ? _.p(e, i) : (_ = Oe(e), _.c(), _.m(n, o)) : _ && (_.d(1), _ = null), i[0] & /*dataView_columns, options, visible*/
      8705) {
        w = F(
          /*dataView_columns*/
          e[9]
        );
        let f;
        for (f = 0; f < w.length; f += 1) {
          const C = Me(e, w, f);
          c[f] ? (c[f].p(C, i), z(c[f], 1)) : (c[f] = Ge(C), c[f].c(), z(c[f], 1), c[f].m(n, null));
        }
        for (x(), f = w.length; f < c.length; f += 1)
          H(f);
        ee();
      }
      (!u || i[0] & /*visible, options*/
      8193 && r !== (r = "virtual-list-row " + /*row*/
      (e[38].data.___index % 2 === 0 ? "" : "row-odd") + " " + /*options*/
      (e[0].multi_select && /*selectRowKeys*/
      e[17].includes(
        /*row*/
        e[38].data.___index
      ) ? "row-selected" : "") + " svelte-rhrpja")) && b(n, "class", r), (!u || i[0] & /*visible*/
      8192 && s !== (s = /*row*/
      e[38].data.___index)) && b(n, "data-index", s);
    },
    i(h) {
      if (!u) {
        for (let i = 0; i < w.length; i += 1)
          z(c[i]);
        u = !0;
      }
    },
    o(h) {
      c = c.filter(Boolean);
      for (let i = 0; i < c.length; i += 1)
        A(c[i]);
      u = !1;
    },
    d(h) {
      h && N(l), _ && _.d(), be(c, h), d = !1, J(g);
    }
  };
}
function Ve(t) {
  let e, l, n = (
    /*options*/
    (t[0].language && /*options*/
    t[0].language.allRows ? (
      /*options*/
      t[0].language.allRows
    ) : "All Rows") + ""
  ), o, r, s = (
    /*all_data*/
    (t[12] ? (
      /*all_data*/
      t[12].length
    ) : 0) + ""
  ), a, u, d = (
    /*options*/
    (t[0].language && /*options*/
    t[0].language.visibleRows ? (
      /*options*/
      t[0].language.visibleRows
    ) : "Visible Rows") + ""
  ), g, _, w = (
    /*all_data*/
    (t[12] && /*all_data*/
    t[12].length > 0 ? (
      /*start*/
      t[2] + 1
    ) : 0) + ""
  ), c, H, p, h;
  return {
    c() {
      e = R("div"), l = R("div"), o = S(n), r = S(`
                    : `), a = S(s), u = S(`,
                    `), g = S(d), _ = S(`
                    : `), c = S(w), H = S("~"), p = S(
        /*end*/
        t[3]
      ), h = S("."), b(l, "class", "svelte-rhrpja"), b(e, "class", "virtual-footer svelte-rhrpja");
    },
    m(i, f) {
      y(i, e, f), k(e, l), k(l, o), k(l, r), k(l, a), k(l, u), k(l, g), k(l, _), k(l, c), k(l, H), k(l, p), k(l, h);
    },
    p(i, f) {
      f[0] & /*options*/
      1 && n !== (n = /*options*/
      (i[0].language && /*options*/
      i[0].language.allRows ? (
        /*options*/
        i[0].language.allRows
      ) : "All Rows") + "") && M(o, n), f[0] & /*all_data*/
      4096 && s !== (s = /*all_data*/
      (i[12] ? (
        /*all_data*/
        i[12].length
      ) : 0) + "") && M(a, s), f[0] & /*options*/
      1 && d !== (d = /*options*/
      (i[0].language && /*options*/
      i[0].language.visibleRows ? (
        /*options*/
        i[0].language.visibleRows
      ) : "Visible Rows") + "") && M(g, d), f[0] & /*all_data, start*/
      4100 && w !== (w = /*all_data*/
      (i[12] && /*all_data*/
      i[12].length > 0 ? (
        /*start*/
        i[2] + 1
      ) : 0) + "") && M(c, w), f[0] & /*end*/
      8 && M(
        p,
        /*end*/
        i[3]
      );
    },
    d(i) {
      i && N(e);
    }
  };
}
function Bt(t) {
  let e, l, n, o, r, s, a = [], u = /* @__PURE__ */ new Map(), d, g, _, w, c;
  o = new Lt({
    props: {
      autoIndex: (
        /*options*/
        t[0].autoIndex
      ),
      doubleHeader: (
        /*doubleHeader*/
        t[4]
      ),
      indexTitle: (
        /*indexTitle*/
        t[1]
      ),
      index_width: Ze,
      header_height: (
        /*header_height*/
        t[5]
      ),
      doubleHeader_columns: (
        /*doubleHeader_columns*/
        t[8]
      ),
      childrenHeader_columns: (
        /*childrenHeader_columns*/
        t[15]
      ),
      columnSort: (
        /*options*/
        t[0].sort
      )
    }
  }), o.$on(
    "onHeaderClick",
    /*onHeaderClick_handler*/
    t[27]
  ), o.$on(
    "onHandleResize",
    /*onHandleResize_handler*/
    t[28]
  );
  let H = F(
    /*visible*/
    t[13]
  );
  const p = (i) => (
    /*row*/
    i[38].index
  );
  for (let i = 0; i < H.length; i += 1) {
    let f = Be(t, H, i), C = p(f);
    u.set(C, a[i] = Pe(C, f));
  }
  let h = (
    /*options*/
    t[0].showRowsCounter && Ve(t)
  );
  return {
    c() {
      e = R("div"), l = R("div"), n = R("div"), he(o.$$.fragment), r = G(), s = R("div");
      for (let i = 0; i < a.length; i += 1)
        a[i].c();
      d = G(), h && h.c(), b(s, "class", "virtual-list-contents svelte-rhrpja"), j(
        s,
        "padding-top",
        /*top*/
        t[10] + "px"
      ), j(
        s,
        "padding-bottom",
        /*bottom*/
        t[11] + "px"
      ), b(n, "class", "virtual-list-viewport svelte-rhrpja"), j(
        n,
        "height",
        /*list_viewport_height*/
        t[14] + "px"
      ), b(l, "class", "virtual-grid svelte-rhrpja"), j(l, "width", "100%"), j(
        l,
        "height",
        /*options*/
        t[0].height + "px"
      ), b(e, "class", g = "virtual-list-container " + /*options*/
      t[0].className + " svelte-rhrpja"), j(
        e,
        "width",
        /*options*/
        t[0].width + "px"
      );
    },
    m(i, f) {
      y(i, e, f), k(e, l), k(l, n), oe(o, n, null), k(n, r), k(n, s);
      for (let C = 0; C < a.length; C += 1)
        a[C] && a[C].m(s, null);
      t[30](s), t[31](n), k(l, d), h && h.m(l, null), _ = !0, w || (c = X(
        n,
        "scroll",
        /*handle_scroll*/
        t[16]
      ), w = !0);
    },
    p(i, f) {
      const C = {};
      f[0] & /*options*/
      1 && (C.autoIndex = /*options*/
      i[0].autoIndex), f[0] & /*doubleHeader*/
      16 && (C.doubleHeader = /*doubleHeader*/
      i[4]), f[0] & /*indexTitle*/
      2 && (C.indexTitle = /*indexTitle*/
      i[1]), f[0] & /*header_height*/
      32 && (C.header_height = /*header_height*/
      i[5]), f[0] & /*doubleHeader_columns*/
      256 && (C.doubleHeader_columns = /*doubleHeader_columns*/
      i[8]), f[0] & /*options*/
      1 && (C.columnSort = /*options*/
      i[0].sort), o.$set(C), f[0] & /*visible, options, selectRowKeys, onRowClick, dataView_columns*/
      401921 && (H = F(
        /*visible*/
        i[13]
      ), x(), a = gt(a, f, p, 1, i, H, u, s, _t, Pe, null, Be), ee()), (!_ || f[0] & /*top*/
      1024) && j(
        s,
        "padding-top",
        /*top*/
        i[10] + "px"
      ), (!_ || f[0] & /*bottom*/
      2048) && j(
        s,
        "padding-bottom",
        /*bottom*/
        i[11] + "px"
      ), (!_ || f[0] & /*list_viewport_height*/
      16384) && j(
        n,
        "height",
        /*list_viewport_height*/
        i[14] + "px"
      ), /*options*/
      i[0].showRowsCounter ? h ? h.p(i, f) : (h = Ve(i), h.c(), h.m(l, null)) : h && (h.d(1), h = null), (!_ || f[0] & /*options*/
      1) && j(
        l,
        "height",
        /*options*/
        i[0].height + "px"
      ), (!_ || f[0] & /*options*/
      1 && g !== (g = "virtual-list-container " + /*options*/
      i[0].className + " svelte-rhrpja")) && b(e, "class", g), (!_ || f[0] & /*options*/
      1) && j(
        e,
        "width",
        /*options*/
        i[0].width + "px"
      );
    },
    i(i) {
      if (!_) {
        z(o.$$.fragment, i);
        for (let f = 0; f < H.length; f += 1)
          z(a[f]);
        _ = !0;
      }
    },
    o(i) {
      A(o.$$.fragment, i);
      for (let f = 0; f < a.length; f += 1)
        A(a[f]);
      _ = !1;
    },
    d(i) {
      i && N(e), re(o);
      for (let f = 0; f < a.length; f += 1)
        a[f].d();
      t[30](null), t[31](null), h && h.d(), w = !1, c();
    }
  };
}
let Ze = 40;
function We(t) {
  return t.map((e, l) => ({ ...e, ___index: l + 1 }));
}
function Mt() {
}
function Ot(t, e, l) {
  let n, o, r, s;
  const a = je();
  let u = 0, d = 0, g = [], _, w, c, H = !1, p = [], h = [], i = [], f = 0, C = 0, W = 0, Q;
  async function te(m, D, E) {
    const { scrollTop: B } = w;
    await pe();
    let se = f - B, I = u;
    for (; se + E <= D && I < m.length; ) {
      let le = _[I - u];
      le || (l(3, d = I + 1), await pe(), le = _[I - u]);
      const q = g[I] = E || le.offsetHeight;
      se += q, I += 1;
    }
    l(3, d = I);
    const ae = m.length - d;
    W = v.rowHeight, l(11, C = ae * W), g.length = m.length;
  }
  async function T() {
    const { scrollTop: m } = w, D = u;
    for (let I = 0; I < _.length; I += 1)
      g[u + I] = v.rowHeight || _[I].offsetHeight;
    let E = 0, B = 0;
    for (; E < v.data.length; ) {
      const I = g[E] || W;
      if (B + I > m) {
        l(2, u = E), l(10, f = B + v.rowHeight / 3);
        break;
      }
      B += I, E += 1;
    }
    for (; E < v.data.length && (B += g[E] || W, E += 1, !(B > m + r - 50)); )
      ;
    l(3, d = E);
    const se = v.data.length - d;
    for (W = v.rowHeight; E < v.data.length; ) g[E++] = W;
    if (l(11, C = se * W), u < D) {
      await pe();
      let I = 0, ae = 0;
      for (let q = u; q < D; q += 1)
        _[q - u] && (I += g[q], ae += v.rowHeight || _[q - u].offsetHeight);
      const le = ae - I;
      w.scrollTo(0, m + le);
    }
  }
  let { indexTitle: O = "№" } = e, L = [], P = [], { options: v = {
    data: [],
    columns: [],
    sort: { field: "", order: "asc" }
  } } = e;
  function $e(m) {
    l(12, L = We(m));
  }
  function xe() {
    return L.filter((m) => P.includes(m.___index));
  }
  function Re(m) {
    console.log("onRowClick", m);
    let D = document.querySelector(`.___index_${m.___index}`);
    P.includes(m.___index) ? (P.splice(P.indexOf(m.___index), 1), D && D.classList.remove("row-selected")) : (P.push(m.___index), D && D.classList.toggle("row-selected")), a("onRowClick", m);
  }
  function Ce(m) {
    i.find((D) => D.field === m.field).width = m.width, l(9, i = [...i]);
  }
  function Ne(m) {
    const D = typeof v.data[0][m];
    console.log("onHeaderClick", m), v.sort.order === "asc" ? D === "number" ? l(0, v.data = v.data.sort((E, B) => E[m] - B[m]), v) : l(0, v.data = v.data.sort((E, B) => B[m].localeCompare(E[m])), v) : D === "number" ? l(0, v.data = v.data.sort((E, B) => B[m] - E[m]), v) : l(0, v.data = v.data.sort((E, B) => E[m].localeCompare(B[m])), v), l(0, v.data = [...v.data], v);
  }
  qe(() => {
    l(12, L = We(v.data)), l(0, v.data = L, v), _ = c.getElementsByClassName("virtual-list-row"), l(25, Q = !0), v.columns.forEach((m) => {
      m.children && m.children.length > 0 ? (l(4, H = !0), p.push({
        headerName: m.headerName,
        span: m.children.length,
        type: 1
      }), h.push(...m.children), i.push(...m.children)) : (m.span = 2, m.type = 0, p.push(m), i.push(m));
    }), (!H || h.length === 0) && (h.push(...v.columns), l(8, p = [])), v.sort || l(0, v.sort = { field: "", order: "asc" }, v);
  }), Ue(() => {
    l(0, v = {});
  });
  function et(m) {
    l(0, v.width = m, v);
  }
  function tt(m) {
    l(0, v.height = m, v);
  }
  const lt = (m) => Ne(m.detail), nt = (m) => Ce(m.detail), it = (m) => Re(m);
  function ot(m) {
    fe[m ? "unshift" : "push"](() => {
      c = m, l(7, c);
    });
  }
  function rt(m) {
    fe[m ? "unshift" : "push"](() => {
      w = m, l(6, w);
    });
  }
  return t.$$set = (m) => {
    "indexTitle" in m && l(1, O = m.indexTitle), "options" in m && l(0, v = m.options);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*doubleHeader*/
    16 && l(5, n = H ? 20 : 40), t.$$.dirty[0] & /*options*/
    1 && l(26, r = v.showRowsCounter ? v.height - 75 : v.height - 50), t.$$.dirty[0] & /*doubleHeader, viewport_height, header_height*/
    67108912 && l(14, o = H ? r + n * 2 - 4 : r + n - 2), t.$$.dirty[0] & /*options, start, end*/
    13 && l(13, s = v.data.slice(u, d).map((m, D) => ({ index: D + u, data: m }))), t.$$.dirty[0] & /*mounted, options, viewport_height*/
    100663297 && Q && te(v.data, r, v.rowHeight);
  }, [
    v,
    O,
    u,
    d,
    H,
    n,
    w,
    c,
    p,
    i,
    f,
    C,
    L,
    s,
    o,
    h,
    T,
    P,
    Re,
    Ce,
    Ne,
    $e,
    xe,
    et,
    tt,
    Q,
    r,
    lt,
    nt,
    it,
    ot,
    rt
  ];
}
class Gt extends ge {
  constructor(e) {
    super(), _e(
      this,
      e,
      Ot,
      Bt,
      de,
      {
        indexTitle: 1,
        options: 0,
        setData: 21,
        getSelectedRows: 22,
        setWidth: 23,
        setHeight: 24
      },
      null,
      [-1, -1]
    );
  }
  get setData() {
    return this.$$.ctx[21];
  }
  get getSelectedRows() {
    return this.$$.ctx[22];
  }
  get setWidth() {
    return this.$$.ctx[23];
  }
  get setHeight() {
    return this.$$.ctx[24];
  }
}
const Vt = {
  GridCommunity: Gt
};
export {
  Vt as default
};
