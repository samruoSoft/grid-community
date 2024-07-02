var et = Object.defineProperty;
var tt = (t, e, n) => e in t ? et(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var ae = (t, e, n) => tt(t, typeof e != "symbol" ? e + "" : e, n);
function V() {
}
function Te(t) {
  return t();
}
function be() {
  return /* @__PURE__ */ Object.create(null);
}
function U(t) {
  t.forEach(Te);
}
function je(t) {
  return typeof t == "function";
}
function Me(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function nt(t) {
  return Object.keys(t).length === 0;
}
function W(t) {
  return t ?? "";
}
function v(t, e) {
  t.appendChild(e);
}
function A(t, e, n) {
  t.insertBefore(e, n || null);
}
function D(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function Oe(t, e) {
  for (let n = 0; n < t.length; n += 1)
    t[n] && t[n].d(e);
}
function E(t) {
  return document.createElement(t);
}
function L(t) {
  return document.createTextNode(t);
}
function F() {
  return L(" ");
}
function ie() {
  return L("");
}
function K(t, e, n, l) {
  return t.addEventListener(e, n, l), () => t.removeEventListener(e, n, l);
}
function z(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function lt(t) {
  return Array.from(t.childNodes);
}
function O(t, e) {
  e = "" + e, t.data !== e && (t.data = /** @type {string} */
  e);
}
function N(t, e, n, l) {
  n == null ? t.style.removeProperty(e) : t.style.setProperty(e, n, "");
}
function it(t, e, { bubbles: n = !1, cancelable: l = !1 } = {}) {
  return new CustomEvent(t, { detail: e, bubbles: n, cancelable: l });
}
let le;
function ne(t) {
  le = t;
}
function Be() {
  if (!le) throw new Error("Function called outside component initialization");
  return le;
}
function ot(t) {
  Be().$$.on_mount.push(t);
}
function st() {
  const t = Be();
  return (e, n, { cancelable: l = !1 } = {}) => {
    const i = t.$$.callbacks[e];
    if (i) {
      const o = it(
        /** @type {string} */
        e,
        n,
        { cancelable: l }
      );
      return i.slice().forEach((s) => {
        s.call(t, o);
      }), !o.defaultPrevented;
    }
    return !0;
  };
}
const $ = [], re = [];
let ee = [];
const ke = [], Fe = /* @__PURE__ */ Promise.resolve();
let he = !1;
function Pe() {
  he || (he = !0, Fe.then(Ge));
}
function de() {
  return Pe(), Fe;
}
function pe(t) {
  ee.push(t);
}
const _e = /* @__PURE__ */ new Set();
let Z = 0;
function Ge() {
  if (Z !== 0)
    return;
  const t = le;
  do {
    try {
      for (; Z < $.length; ) {
        const e = $[Z];
        Z++, ne(e), rt(e.$$);
      }
    } catch (e) {
      throw $.length = 0, Z = 0, e;
    }
    for (ne(null), $.length = 0, Z = 0; re.length; ) re.pop()();
    for (let e = 0; e < ee.length; e += 1) {
      const n = ee[e];
      _e.has(n) || (_e.add(n), n());
    }
    ee.length = 0;
  } while ($.length);
  for (; ke.length; )
    ke.pop()();
  he = !1, _e.clear(), ne(t);
}
function rt(t) {
  if (t.fragment !== null) {
    t.update(), U(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(pe);
  }
}
function ut(t) {
  const e = [], n = [];
  ee.forEach((l) => t.indexOf(l) === -1 ? e.push(l) : n.push(l)), n.forEach((l) => l()), ee = e;
}
const se = /* @__PURE__ */ new Set();
let Q;
function ge() {
  Q = {
    r: 0,
    c: [],
    p: Q
    // parent group
  };
}
function me() {
  Q.r || U(Q.c), Q = Q.p;
}
function G(t, e) {
  t && t.i && (se.delete(t), t.i(e));
}
function Y(t, e, n, l) {
  if (t && t.o) {
    if (se.has(t)) return;
    se.add(t), Q.c.push(() => {
      se.delete(t), l && (n && t.d(1), l());
    }), t.o(e);
  } else l && l();
}
function x(t) {
  return (t == null ? void 0 : t.length) !== void 0 ? t : Array.from(t);
}
function ft(t, e) {
  Y(t, 1, 1, () => {
    e.delete(t.key);
  });
}
function ct(t, e, n, l, i, o, s, c, r, a, C, d) {
  let h = t.length, p = o.length, k = h;
  const S = {};
  for (; k--; ) S[t[k].key] = k;
  const R = [], g = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ new Map(), H = [];
  for (k = p; k--; ) {
    const f = d(i, o, k), w = n(f);
    let b = s.get(w);
    b ? H.push(() => b.p(f, e)) : (b = a(w, f), b.c()), g.set(w, R[k] = b), w in S && m.set(w, Math.abs(k - S[w]));
  }
  const u = /* @__PURE__ */ new Set(), X = /* @__PURE__ */ new Set();
  function I(f) {
    G(f, 1), f.m(c, C), s.set(f.key, f), C = f.first, p--;
  }
  for (; h && p; ) {
    const f = R[p - 1], w = t[h - 1], b = f.key, P = w.key;
    f === w ? (C = f.first, h--, p--) : g.has(P) ? !s.has(b) || u.has(b) ? I(f) : X.has(P) ? h-- : m.get(b) > m.get(P) ? (X.add(b), I(f)) : (u.add(P), h--) : (r(w, s), h--);
  }
  for (; h--; ) {
    const f = t[h];
    g.has(f.key) || r(f, s);
  }
  for (; p; ) I(R[p - 1]);
  return U(H), R;
}
function at(t) {
  t && t.c();
}
function Ve(t, e, n) {
  const { fragment: l, after_update: i } = t.$$;
  l && l.m(e, n), pe(() => {
    const o = t.$$.on_mount.map(Te).filter(je);
    t.$$.on_destroy ? t.$$.on_destroy.push(...o) : U(o), t.$$.on_mount = [];
  }), i.forEach(pe);
}
function We(t, e) {
  const n = t.$$;
  n.fragment !== null && (ut(n.after_update), U(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function dt(t, e) {
  t.$$.dirty[0] === -1 && ($.push(t), Pe(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function Ke(t, e, n, l, i, o, s = null, c = [-1]) {
  const r = le;
  ne(t);
  const a = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: o,
    update: V,
    not_equal: i,
    bound: be(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (r ? r.$$.context : [])),
    // everything else
    callbacks: be(),
    dirty: c,
    skip_bound: !1,
    root: e.target || r.$$.root
  };
  s && s(a.root);
  let C = !1;
  if (a.ctx = n ? n(t, e.props || {}, (d, h, ...p) => {
    const k = p.length ? p[0] : h;
    return a.ctx && i(a.ctx[d], a.ctx[d] = k) && (!a.skip_bound && a.bound[d] && a.bound[d](k), C && dt(t, d)), h;
  }) : [], a.update(), C = !0, U(a.before_update), a.fragment = l ? l(a.ctx) : !1, e.target) {
    if (e.hydrate) {
      const d = lt(e.target);
      a.fragment && a.fragment.l(d), d.forEach(D);
    } else
      a.fragment && a.fragment.c();
    e.intro && G(t.$$.fragment), Ve(t, e.target, e.anchor), Ge();
  }
  ne(r);
}
class qe {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    ae(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    ae(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    We(this, 1), this.$destroy = V;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, n) {
    if (!je(n))
      return V;
    const l = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return l.push(n), () => {
      const i = l.indexOf(n);
      i !== -1 && l.splice(i, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(e) {
    this.$$set && !nt(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const _t = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(_t);
function ye(t) {
  let e;
  function n(o, s) {
    return (
      /*cell*/
      o[2].onclick ? pt : ht
    );
  }
  let l = n(t), i = l(t);
  return {
    c() {
      i.c(), e = ie();
    },
    m(o, s) {
      i.m(o, s), A(o, e, s);
    },
    p(o, s) {
      l === (l = n(o)) && i ? i.p(o, s) : (i.d(1), i = l(o), i && (i.c(), i.m(e.parentNode, e)));
    },
    d(o) {
      o && D(e), i.d(o);
    }
  };
}
function ht(t) {
  let e, n = (
    /*cell*/
    t[2].textContent + ""
  ), l, i;
  return {
    c() {
      e = E("a"), l = L(n), z(e, "href", "javascript:void(0)"), z(e, "class", i = W(
        /*cell*/
        t[2].className
      ) + " svelte-pzis7u");
    },
    m(o, s) {
      A(o, e, s), v(e, l);
    },
    p(o, s) {
      s & /*cell*/
      4 && n !== (n = /*cell*/
      o[2].textContent + "") && O(l, n), s & /*cell*/
      4 && i !== (i = W(
        /*cell*/
        o[2].className
      ) + " svelte-pzis7u") && z(e, "class", i);
    },
    d(o) {
      o && D(e);
    }
  };
}
function pt(t) {
  let e, n = (
    /*cell*/
    t[2].textContent + ""
  ), l, i, o, s;
  return {
    c() {
      e = E("a"), l = L(n), z(e, "href", "javascript:void(0)"), z(e, "class", i = W(
        /*cell*/
        t[2].className
      ) + " svelte-pzis7u");
    },
    m(c, r) {
      A(c, e, r), v(e, l), o || (s = K(
        e,
        "click",
        /*click_handler*/
        t[4]
      ), o = !0);
    },
    p(c, r) {
      r & /*cell*/
      4 && n !== (n = /*cell*/
      c[2].textContent + "") && O(l, n), r & /*cell*/
      4 && i !== (i = W(
        /*cell*/
        c[2].className
      ) + " svelte-pzis7u") && z(e, "class", i);
    },
    d(c) {
      c && D(e), o = !1, s();
    }
  };
}
function ze(t) {
  let e;
  function n(o, s) {
    return (
      /*cell*/
      o[2].onclick ? mt : gt
    );
  }
  let l = n(t), i = l(t);
  return {
    c() {
      i.c(), e = ie();
    },
    m(o, s) {
      i.m(o, s), A(o, e, s);
    },
    p(o, s) {
      l === (l = n(o)) && i ? i.p(o, s) : (i.d(1), i = l(o), i && (i.c(), i.m(e.parentNode, e)));
    },
    d(o) {
      o && D(e), i.d(o);
    }
  };
}
function gt(t) {
  let e, n = (
    /*cell*/
    t[2].textContent + ""
  ), l, i;
  return {
    c() {
      e = E("button"), l = L(n), z(e, "class", i = W(
        /*cell*/
        t[2].className
      ) + " svelte-pzis7u");
    },
    m(o, s) {
      A(o, e, s), v(e, l);
    },
    p(o, s) {
      s & /*cell*/
      4 && n !== (n = /*cell*/
      o[2].textContent + "") && O(l, n), s & /*cell*/
      4 && i !== (i = W(
        /*cell*/
        o[2].className
      ) + " svelte-pzis7u") && z(e, "class", i);
    },
    d(o) {
      o && D(e);
    }
  };
}
function mt(t) {
  let e, n = (
    /*cell*/
    t[2].textContent + ""
  ), l, i, o, s;
  return {
    c() {
      e = E("button"), l = L(n), z(e, "class", i = W(
        /*cell*/
        t[2].className
      ) + " svelte-pzis7u");
    },
    m(c, r) {
      A(c, e, r), v(e, l), o || (s = K(
        e,
        "click",
        /*click_handler_1*/
        t[5]
      ), o = !0);
    },
    p(c, r) {
      r & /*cell*/
      4 && n !== (n = /*cell*/
      c[2].textContent + "") && O(l, n), r & /*cell*/
      4 && i !== (i = W(
        /*cell*/
        c[2].className
      ) + " svelte-pzis7u") && z(e, "class", i);
    },
    d(c) {
      c && D(e), o = !1, s();
    }
  };
}
function wt(t) {
  let e, n, l, i = (
    /*cell*/
    t[2].type === "link" && ye(t)
  ), o = (
    /*cell*/
    t[2].type === "button" && ze(t)
  );
  return {
    c() {
      e = E("div"), i && i.c(), n = F(), o && o.c(), z(e, "class", "s-grid-cell svelte-pzis7u"), z(e, "style", l = /*width*/
      (t[0] ? "width:" + /*width*/
      t[0] + "px" : "") + ";height: " + /*rowHeight*/
      t[1] + "px");
    },
    m(s, c) {
      A(s, e, c), i && i.m(e, null), v(e, n), o && o.m(e, null);
    },
    p(s, [c]) {
      /*cell*/
      s[2].type === "link" ? i ? i.p(s, c) : (i = ye(s), i.c(), i.m(e, n)) : i && (i.d(1), i = null), /*cell*/
      s[2].type === "button" ? o ? o.p(s, c) : (o = ze(s), o.c(), o.m(e, null)) : o && (o.d(1), o = null), c & /*width, rowHeight*/
      3 && l !== (l = /*width*/
      (s[0] ? "width:" + /*width*/
      s[0] + "px" : "") + ";height: " + /*rowHeight*/
      s[1] + "px") && z(e, "style", l);
    },
    i: V,
    o: V,
    d(s) {
      s && D(e), i && i.d(), o && o.d();
    }
  };
}
function vt(t, e, n) {
  let { width: l } = e, { rowHeight: i } = e, { cell: o } = e, { data: s } = e;
  const c = () => o.onclick(s), r = () => o.onclick(s);
  return t.$$set = (a) => {
    "width" in a && n(0, l = a.width), "rowHeight" in a && n(1, i = a.rowHeight), "cell" in a && n(2, o = a.cell), "data" in a && n(3, s = a.data);
  }, [l, i, o, s, c, r];
}
class bt extends qe {
  constructor(e) {
    super(), Ke(this, e, vt, wt, Me, { width: 0, rowHeight: 1, cell: 2, data: 3 });
  }
}
function Re(t, e, n) {
  const l = t.slice();
  return l[38] = e[n], l;
}
function Ne(t, e, n) {
  const l = t.slice();
  return l[41] = e[n], l[43] = n, l;
}
function Ce(t, e, n) {
  const l = t.slice();
  return l[41] = e[n], l;
}
function kt(t) {
  let e;
  return {
    c() {
      e = E("div"), N(e, "width", "4px"), N(e, "height", q + "px");
    },
    m(n, l) {
      A(n, e, l);
    },
    p: V,
    d(n) {
      n && D(e);
    }
  };
}
function yt(t) {
  let e, n, l;
  return {
    c() {
      e = E("div"), n = E("div"), l = L(St), z(n, "class", "column-text svelte-pzis7u"), N(n, "width", we + 15 + "px"), N(n, "height", q + "px"), z(e, "class", "column svelte-pzis7u");
    },
    m(i, o) {
      A(i, e, o), v(e, n), v(n, l);
    },
    p: V,
    d(i) {
      i && D(e);
    }
  };
}
function zt(t) {
  let e, n, l = (
    /*column*/
    t[41].headerName + ""
  ), i, o, s, c, r, a;
  function C(...d) {
    return (
      /*mousedown_handler_1*/
      t[22](
        /*column*/
        t[41],
        ...d
      )
    );
  }
  return {
    c() {
      e = E("div"), n = E("div"), i = L(l), o = F(), s = E("div"), c = F(), z(n, "class", "column-text svelte-pzis7u"), N(
        n,
        "width",
        /*column*/
        t[41].width + 3 + "px"
      ), N(n, "height", q + "px"), N(n, "position", "relative"), z(s, "class", "column-resize svelte-pzis7u"), N(s, "position", "relative"), N(s, "height", q + "px"), z(e, "class", "column svelte-pzis7u");
    },
    m(d, h) {
      A(d, e, h), v(e, n), v(n, i), v(e, o), v(e, s), v(e, c), r || (a = K(s, "mousedown", C), r = !0);
    },
    p(d, h) {
      t = d, h[0] & /*options*/
      1 && l !== (l = /*column*/
      t[41].headerName + "") && O(i, l), h[0] & /*options*/
      1 && N(
        n,
        "width",
        /*column*/
        t[41].width + 3 + "px"
      );
    },
    d(d) {
      d && D(e), r = !1, a();
    }
  };
}
function Rt(t) {
  let e, n, l = (
    /*column*/
    t[41].headerName + ""
  ), i, o, s, c, r, a, C, d = (
    /*options*/
    t[0].sort && /*options*/
    t[0].sort.field === /*column*/
    t[41].field && He(t)
  );
  function h(...k) {
    return (
      /*click_handler*/
      t[20](
        /*column*/
        t[41],
        ...k
      )
    );
  }
  function p(...k) {
    return (
      /*mousedown_handler*/
      t[21](
        /*column*/
        t[41],
        ...k
      )
    );
  }
  return {
    c() {
      e = E("div"), n = E("div"), i = L(l), o = F(), d && d.c(), s = F(), c = E("div"), r = F(), z(n, "class", "column-text svelte-pzis7u"), N(
        n,
        "width",
        /*column*/
        t[41].width + 3 + "px"
      ), N(n, "height", q + "px"), z(c, "class", "column-resize svelte-pzis7u"), N(c, "position", "relative"), N(c, "height", q + "px"), z(e, "class", "column svelte-pzis7u");
    },
    m(k, S) {
      A(k, e, S), v(e, n), v(n, i), v(n, o), d && d.m(n, null), v(e, s), v(e, c), v(e, r), a || (C = [
        K(n, "click", h),
        K(c, "mousedown", p)
      ], a = !0);
    },
    p(k, S) {
      t = k, S[0] & /*options*/
      1 && l !== (l = /*column*/
      t[41].headerName + "") && O(i, l), /*options*/
      t[0].sort && /*options*/
      t[0].sort.field === /*column*/
      t[41].field ? d ? d.p(t, S) : (d = He(t), d.c(), d.m(n, null)) : d && (d.d(1), d = null), S[0] & /*options*/
      1 && N(
        n,
        "width",
        /*column*/
        t[41].width + 3 + "px"
      );
    },
    d(k) {
      k && D(e), d && d.d(), a = !1, U(C);
    }
  };
}
function He(t) {
  let e;
  function n(o, s) {
    return (
      /*options*/
      o[0].sort.order === "asc" ? Ct : Nt
    );
  }
  let l = n(t), i = l(t);
  return {
    c() {
      i.c(), e = ie();
    },
    m(o, s) {
      i.m(o, s), A(o, e, s);
    },
    p(o, s) {
      l !== (l = n(o)) && (i.d(1), i = l(o), i && (i.c(), i.m(e.parentNode, e)));
    },
    d(o) {
      o && D(e), i.d(o);
    }
  };
}
function Nt(t) {
  let e;
  return {
    c() {
      e = L("▼");
    },
    m(n, l) {
      A(n, e, l);
    },
    d(n) {
      n && D(e);
    }
  };
}
function Ct(t) {
  let e;
  return {
    c() {
      e = L("▲");
    },
    m(n, l) {
      A(n, e, l);
    },
    d(n) {
      n && D(e);
    }
  };
}
function Ee(t) {
  let e;
  function n(o, s) {
    return (
      /*column*/
      o[41].sortable ? Rt : zt
    );
  }
  let l = n(t), i = l(t);
  return {
    c() {
      i.c(), e = ie();
    },
    m(o, s) {
      i.m(o, s), A(o, e, s);
    },
    p(o, s) {
      l === (l = n(o)) && i ? i.p(o, s) : (i.d(1), i = l(o), i && (i.c(), i.m(e.parentNode, e)));
    },
    d(o) {
      o && D(e), i.d(o);
    }
  };
}
function Le(t) {
  let e, n = (
    /*row*/
    (t[38].data.___index ? (
      /*row*/
      t[38].data.___index
    ) : "") + ""
  ), l;
  return {
    c() {
      e = E("div"), l = L(n), N(e, "width", we + "px"), N(
        e,
        "height",
        /*options*/
        t[0].rowHeight + "px"
      ), z(e, "class", "svelte-pzis7u");
    },
    m(i, o) {
      A(i, e, o), v(e, l);
    },
    p(i, o) {
      o[0] & /*visible*/
      512 && n !== (n = /*row*/
      (i[38].data.___index ? (
        /*row*/
        i[38].data.___index
      ) : "") + "") && O(l, n), o[0] & /*options*/
      1 && N(
        e,
        "height",
        /*options*/
        i[0].rowHeight + "px"
      );
    },
    d(i) {
      i && D(e);
    }
  };
}
function Ht(t) {
  let e, n = (
    /*row*/
    t[38].data[
      /*column*/
      t[41].field
    ] + ""
  ), l;
  return {
    c() {
      e = E("div"), l = L(n), N(
        e,
        "width",
        /*index*/
        (t[43] === /*options*/
        t[0].columns.length - 1 ? (
          /*column*/
          t[41].width + 4
        ) : (
          /*column*/
          t[41].width
        )) + "px"
      ), N(
        e,
        "height",
        /*options*/
        t[0].rowHeight + "px"
      ), z(e, "class", "svelte-pzis7u");
    },
    m(i, o) {
      A(i, e, o), v(e, l);
    },
    p(i, o) {
      o[0] & /*visible, options*/
      513 && n !== (n = /*row*/
      i[38].data[
        /*column*/
        i[41].field
      ] + "") && O(l, n), o[0] & /*options*/
      1 && N(
        e,
        "width",
        /*index*/
        (i[43] === /*options*/
        i[0].columns.length - 1 ? (
          /*column*/
          i[41].width + 4
        ) : (
          /*column*/
          i[41].width
        )) + "px"
      ), o[0] & /*options*/
      1 && N(
        e,
        "height",
        /*options*/
        i[0].rowHeight + "px"
      );
    },
    i: V,
    o: V,
    d(i) {
      i && D(e);
    }
  };
}
function Et(t) {
  let e, n;
  return e = new bt({
    props: {
      data: (
        /*row*/
        t[38].data
      ),
      width: (
        /*index*/
        t[43] === /*options*/
        t[0].columns.length - 1 ? (
          /*column*/
          t[41].width + 4
        ) : (
          /*column*/
          t[41].width
        )
      ),
      rowHeight: (
        /*options*/
        t[0].rowHeight
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
      at(e.$$.fragment);
    },
    m(l, i) {
      Ve(e, l, i), n = !0;
    },
    p(l, i) {
      const o = {};
      i[0] & /*visible*/
      512 && (o.data = /*row*/
      l[38].data), i[0] & /*options*/
      1 && (o.width = /*index*/
      l[43] === /*options*/
      l[0].columns.length - 1 ? (
        /*column*/
        l[41].width + 4
      ) : (
        /*column*/
        l[41].width
      )), i[0] & /*options*/
      1 && (o.rowHeight = /*options*/
      l[0].rowHeight), i[0] & /*options, visible*/
      513 && (o.cell = /*column*/
      l[41].cellRenderer({ data: (
        /*row*/
        l[38].data
      ) })), e.$set(o);
    },
    i(l) {
      n || (G(e.$$.fragment, l), n = !0);
    },
    o(l) {
      Y(e.$$.fragment, l), n = !1;
    },
    d(l) {
      We(e, l);
    }
  };
}
function Se(t) {
  let e, n, l, i;
  const o = [Et, Ht], s = [];
  function c(r, a) {
    return (
      /*column*/
      r[41].cellRenderer ? 0 : 1
    );
  }
  return e = c(t), n = s[e] = o[e](t), {
    c() {
      n.c(), l = ie();
    },
    m(r, a) {
      s[e].m(r, a), A(r, l, a), i = !0;
    },
    p(r, a) {
      let C = e;
      e = c(r), e === C ? s[e].p(r, a) : (ge(), Y(s[C], 1, 1, () => {
        s[C] = null;
      }), me(), n = s[e], n ? n.p(r, a) : (n = s[e] = o[e](r), n.c()), G(n, 1), n.m(l.parentNode, l));
    },
    i(r) {
      i || (G(n), i = !0);
    },
    o(r) {
      Y(n), i = !1;
    },
    d(r) {
      r && D(l), s[e].d(r);
    }
  };
}
function De(t, e) {
  let n, l, i, o, s, c, r, a, C, d = (
    /*options*/
    e[0].autoIndex && Le(e)
  ), h = x(
    /*options*/
    e[0].columns
  ), p = [];
  for (let R = 0; R < h.length; R += 1)
    p[R] = Se(Ne(e, h, R));
  const k = (R) => Y(p[R], 1, 1, () => {
    p[R] = null;
  });
  function S() {
    return (
      /*click_handler_1*/
      e[23](
        /*row*/
        e[38]
      )
    );
  }
  return {
    key: t,
    first: null,
    c() {
      n = E("div"), l = E("div"), d && d.c(), i = F();
      for (let R = 0; R < p.length; R += 1)
        p[R].c();
      c = F(), z(l, "class", o = "virtual-list-row " + /*options*/
      (e[0].multi_select && /*selectRowKeys*/
      e[11].includes(
        /*row*/
        e[38].data.___index
      ) ? "row-selected" : "") + " svelte-pzis7u"), z(l, "data-index", s = /*row*/
      e[38].data.___index), z(l, "role", "row"), z(l, "tabindex", "0"), z(n, "class", "row-container"), this.first = n;
    },
    m(R, g) {
      A(R, n, g), v(n, l), d && d.m(l, null), v(l, i);
      for (let m = 0; m < p.length; m += 1)
        p[m] && p[m].m(l, null);
      v(n, c), r = !0, a || (C = [
        K(l, "click", S),
        K(l, "keypress", Dt)
      ], a = !0);
    },
    p(R, g) {
      if (e = R, /*options*/
      e[0].autoIndex ? d ? d.p(e, g) : (d = Le(e), d.c(), d.m(l, i)) : d && (d.d(1), d = null), g[0] & /*visible, options*/
      513) {
        h = x(
          /*options*/
          e[0].columns
        );
        let m;
        for (m = 0; m < h.length; m += 1) {
          const H = Ne(e, h, m);
          p[m] ? (p[m].p(H, g), G(p[m], 1)) : (p[m] = Se(H), p[m].c(), G(p[m], 1), p[m].m(l, null));
        }
        for (ge(), m = h.length; m < p.length; m += 1)
          k(m);
        me();
      }
      (!r || g[0] & /*options, visible*/
      513 && o !== (o = "virtual-list-row " + /*options*/
      (e[0].multi_select && /*selectRowKeys*/
      e[11].includes(
        /*row*/
        e[38].data.___index
      ) ? "row-selected" : "") + " svelte-pzis7u")) && z(l, "class", o), (!r || g[0] & /*visible*/
      512 && s !== (s = /*row*/
      e[38].data.___index)) && z(l, "data-index", s);
    },
    i(R) {
      if (!r) {
        for (let g = 0; g < h.length; g += 1)
          G(p[g]);
        r = !0;
      }
    },
    o(R) {
      p = p.filter(Boolean);
      for (let g = 0; g < p.length; g += 1)
        Y(p[g]);
      r = !1;
    },
    d(R) {
      R && D(n), d && d.d(), Oe(p, R), a = !1, U(C);
    }
  };
}
function Ae(t) {
  let e, n, l = (
    /*options*/
    (t[0].language && /*options*/
    t[0].language.allRows ? (
      /*options*/
      t[0].language.allRows
    ) : "All Rows") + ""
  ), i, o, s = (
    /*all_data*/
    (t[8] ? (
      /*all_data*/
      t[8].length
    ) : 0) + ""
  ), c, r, a = (
    /*options*/
    (t[0].language && /*options*/
    t[0].language.visibleRows ? (
      /*options*/
      t[0].language.visibleRows
    ) : "Visible Rows") + ""
  ), C, d, h = (
    /*start*/
    t[1] + 1 + ""
  ), p, k, S, R;
  return {
    c() {
      e = E("div"), n = E("div"), i = L(l), o = L(`
                    : `), c = L(s), r = L(`,
                    `), C = L(a), d = L(`
                    : `), p = L(h), k = L("~"), S = L(
        /*end*/
        t[2]
      ), R = L("."), z(e, "class", "svelte-virtual-footer svelte-pzis7u");
    },
    m(g, m) {
      A(g, e, m), v(e, n), v(n, i), v(n, o), v(n, c), v(n, r), v(n, C), v(n, d), v(n, p), v(n, k), v(n, S), v(n, R);
    },
    p(g, m) {
      m[0] & /*options*/
      1 && l !== (l = /*options*/
      (g[0].language && /*options*/
      g[0].language.allRows ? (
        /*options*/
        g[0].language.allRows
      ) : "All Rows") + "") && O(i, l), m[0] & /*all_data*/
      256 && s !== (s = /*all_data*/
      (g[8] ? (
        /*all_data*/
        g[8].length
      ) : 0) + "") && O(c, s), m[0] & /*options*/
      1 && a !== (a = /*options*/
      (g[0].language && /*options*/
      g[0].language.visibleRows ? (
        /*options*/
        g[0].language.visibleRows
      ) : "Visible Rows") + "") && O(C, a), m[0] & /*start*/
      2 && h !== (h = /*start*/
      g[1] + 1 + "") && O(p, h), m[0] & /*end*/
      4 && O(
        S,
        /*end*/
        g[2]
      );
    },
    d(g) {
      g && D(e);
    }
  };
}
function Lt(t) {
  let e, n, l, i, o, s, c, r = [], a = /* @__PURE__ */ new Map(), C, d, h, p, k;
  function S(f, w) {
    return (
      /*options*/
      f[0].autoIndex ? yt : kt
    );
  }
  let R = S(t), g = R(t), m = x(
    /*options*/
    t[0].columns
  ), H = [];
  for (let f = 0; f < m.length; f += 1)
    H[f] = Ee(Ce(t, m, f));
  let u = x(
    /*visible*/
    t[9]
  );
  const X = (f) => (
    /*row*/
    f[38].index
  );
  for (let f = 0; f < u.length; f += 1) {
    let w = Re(t, u, f), b = X(w);
    a.set(b, r[f] = De(b, w));
  }
  let I = (
    /*options*/
    t[0].showRowsCounter && Ae(t)
  );
  return {
    c() {
      e = E("div"), n = E("div"), l = E("div"), i = E("div"), g.c(), o = F();
      for (let f = 0; f < H.length; f += 1)
        H[f].c();
      s = F(), c = E("div");
      for (let f = 0; f < r.length; f += 1)
        r[f].c();
      C = F(), I && I.c(), z(i, "class", "virtual-header svelte-pzis7u"), z(c, "class", "virtual-list-contents svelte-pzis7u"), N(
        c,
        "padding-top",
        /*top*/
        t[6] + "px"
      ), N(
        c,
        "padding-bottom",
        /*bottom*/
        t[7] + "px"
      ), z(l, "class", "virtual-list-viewport svelte-pzis7u"), N(
        l,
        "height",
        /*viewport_height*/
        t[3] + q - 2 + "px"
      ), z(n, "class", "virtual-grid svelte-pzis7u"), N(n, "width", "100%"), N(
        n,
        "height",
        /*options*/
        t[0].height + "px"
      ), z(e, "class", d = "virtual-list-container " + /*options*/
      t[0].className + " svelte-pzis7u"), N(
        e,
        "width",
        /*options*/
        t[0].width + "px"
      );
    },
    m(f, w) {
      A(f, e, w), v(e, n), v(n, l), v(l, i), g.m(i, null), v(i, o);
      for (let b = 0; b < H.length; b += 1)
        H[b] && H[b].m(i, null);
      v(l, s), v(l, c);
      for (let b = 0; b < r.length; b += 1)
        r[b] && r[b].m(c, null);
      t[24](c), t[25](l), v(n, C), I && I.m(n, null), h = !0, p || (k = K(
        l,
        "scroll",
        /*handle_scroll*/
        t[10]
      ), p = !0);
    },
    p(f, w) {
      if (R === (R = S(f)) && g ? g.p(f, w) : (g.d(1), g = R(f), g && (g.c(), g.m(i, o))), w[0] & /*startDragging, options, onHeaderClick*/
      24577) {
        m = x(
          /*options*/
          f[0].columns
        );
        let b;
        for (b = 0; b < m.length; b += 1) {
          const P = Ce(f, m, b);
          H[b] ? H[b].p(P, w) : (H[b] = Ee(P), H[b].c(), H[b].m(i, null));
        }
        for (; b < H.length; b += 1)
          H[b].d(1);
        H.length = m.length;
      }
      w[0] & /*options, selectRowKeys, visible, onRowClick*/
      6657 && (u = x(
        /*visible*/
        f[9]
      ), ge(), r = ct(r, w, X, 1, f, u, a, c, ft, De, null, Re), me()), (!h || w[0] & /*top*/
      64) && N(
        c,
        "padding-top",
        /*top*/
        f[6] + "px"
      ), (!h || w[0] & /*bottom*/
      128) && N(
        c,
        "padding-bottom",
        /*bottom*/
        f[7] + "px"
      ), (!h || w[0] & /*viewport_height*/
      8) && N(
        l,
        "height",
        /*viewport_height*/
        f[3] + q - 2 + "px"
      ), /*options*/
      f[0].showRowsCounter ? I ? I.p(f, w) : (I = Ae(f), I.c(), I.m(n, null)) : I && (I.d(1), I = null), (!h || w[0] & /*options*/
      1) && N(
        n,
        "height",
        /*options*/
        f[0].height + "px"
      ), (!h || w[0] & /*options*/
      1 && d !== (d = "virtual-list-container " + /*options*/
      f[0].className + " svelte-pzis7u")) && z(e, "class", d), (!h || w[0] & /*options*/
      1) && N(
        e,
        "width",
        /*options*/
        f[0].width + "px"
      );
    },
    i(f) {
      if (!h) {
        for (let w = 0; w < u.length; w += 1)
          G(r[w]);
        h = !0;
      }
    },
    o(f) {
      for (let w = 0; w < r.length; w += 1)
        Y(r[w]);
      h = !1;
    },
    d(f) {
      f && D(e), g.d(), Oe(H, f);
      for (let w = 0; w < r.length; w += 1)
        r[w].d();
      t[24](null), t[25](null), I && I.d(), p = !1, k();
    }
  };
}
let q = 40, St = "序号", we = 40;
function Ie(t) {
  return t.map((e, n) => ({ ...e, ___index: n + 1 }));
}
function Dt() {
}
function At(t, e, n) {
  let l, i;
  const o = st();
  let s = 0, c = 0, r = [], a, C, d, h = 0, p = 0, k = 0, S;
  async function R(_, y, j) {
    const { scrollTop: M } = C;
    await de();
    let B = h - M, T = s;
    for (; B + j <= y && T < _.length; ) {
      let te = a[T - s];
      te || (n(2, c = T + 1), await de(), te = a[T - s]);
      const J = r[T] = j || te.offsetHeight;
      B += J, T += 1;
    }
    n(2, c = T);
    const oe = _.length - c;
    k = u.rowHeight, n(7, p = oe * k), r.length = _.length;
  }
  async function g() {
    const { scrollTop: _ } = C, y = s;
    for (let T = 0; T < a.length; T += 1)
      r[s + T] = u.rowHeight || a[T].offsetHeight;
    let j = 0, M = 0;
    for (; j < u.data.length; ) {
      const T = r[j] || k;
      if (M + T > _) {
        n(1, s = j), n(6, h = M + u.rowHeight / 2);
        break;
      }
      M += T, j += 1;
    }
    for (; j < u.data.length && (M += r[j] || k, j += 1, !(M > _ + l - 50)); )
      ;
    n(2, c = j);
    const B = u.data.length - c;
    for (k = u.rowHeight; j < u.data.length; ) r[j++] = k;
    if (n(7, p = B * k), s < y) {
      await de();
      let T = 0, oe = 0;
      for (let J = s; J < y; J += 1)
        a[J - s] && (T += r[J], oe += u.rowHeight || a[J - s].offsetHeight);
      const te = oe - T;
      C.scrollTo(0, _ + te);
    }
  }
  let m = [], H = [], { options: u = {
    data: [],
    columns: [],
    sort: { field: "", order: "asc" }
  } } = e;
  function X(_) {
    n(8, m = Ie(_));
  }
  function I() {
    return m.filter((_) => H.includes(_.___index));
  }
  function f(_) {
    if (u.multi_select) {
      let y = document.querySelector(`.___index_${_.___index}`);
      H.includes(_.___index) ? (H.splice(H.indexOf(_.___index), 1), y && y.classList.remove("row-selected")) : (H.push(_.___index), y && y.classList.toggle("row-selected"));
    }
    o("onRowClick", _);
  }
  let w = !1, b, P;
  function ue(_, y) {
    b = y, P = _.target.parentNode.getBoundingClientRect().left, w = !0, document.addEventListener("mousemove", fe), document.addEventListener("mouseup", ce);
  }
  function fe(_) {
    w && (u.columns.find((y) => y.field === b).width = _.clientX - P - 10, n(0, u.columns = [...u.columns], u));
  }
  function ce() {
    w = !1, document.removeEventListener("mousemove", fe), document.removeEventListener("mouseup", ce);
  }
  ot(() => (n(8, m = Ie(u.data)), n(0, u.data = m, u), a = d.getElementsByClassName("virtual-list-row"), n(19, S = !0), u.columns.forEach((_) => {
    if (_.cellRenderer) {
      const y = new Function(`return ${_.cellRenderer.function}`)();
      _.field, _.cellRenderer.type, _.cellRenderer.title;
    }
  }), u.sort || n(0, u.sort = { field: "", order: "asc" }, u), () => {
    document.removeEventListener("mousemove", fe), document.removeEventListener("mouseup", ce);
  }));
  function Ue(_) {
    n(0, u.width = _, u);
  }
  function Xe(_) {
    n(0, u.height = _, u);
  }
  function ve(_, y) {
    n(0, u.sort.field = y, u), u.sort.field === y && n(0, u.sort.order = u.sort.order === "asc" ? "desc" : "asc", u);
    const j = typeof u.data[0][y];
    u.sort.order === "asc" ? j === "number" ? n(0, u.data = u.data.sort((M, B) => M[y] - B[y]), u) : n(0, u.data = u.data.sort((M, B) => B[y].localeCompare(M[y])), u) : j === "number" ? n(0, u.data = u.data.sort((M, B) => B[y] - M[y]), u) : n(0, u.data = u.data.sort((M, B) => M[y].localeCompare(B[y])), u), n(0, u.data = [...u.data], u);
  }
  const Je = (_, y) => ve(y, _.field), Qe = (_, y) => {
    ue(y, _.field);
  }, Ye = (_, y) => {
    ue(y, _.field);
  }, Ze = (_) => f(_);
  function $e(_) {
    re[_ ? "unshift" : "push"](() => {
      d = _, n(5, d);
    });
  }
  function xe(_) {
    re[_ ? "unshift" : "push"](() => {
      C = _, n(4, C);
    });
  }
  return t.$$set = (_) => {
    "options" in _ && n(0, u = _.options);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*options*/
    1 && n(3, l = u.showRowsCounter ? u.height - 75 : u.height - 50), t.$$.dirty[0] & /*options, start, end*/
    7 && n(9, i = u.data.slice(s, c).map((_, y) => ({ index: y + s, data: _ }))), t.$$.dirty[0] & /*mounted, options, viewport_height*/
    524297 && S && R(u.data, l, u.rowHeight), t.$$.dirty[0] & /*options*/
    1 && u.columns.reduce((_, y) => _ + y.width, 0) + (u.autoIndex ? we : 0);
  }, [
    u,
    s,
    c,
    l,
    C,
    d,
    h,
    p,
    m,
    i,
    g,
    H,
    f,
    ue,
    ve,
    X,
    I,
    Ue,
    Xe,
    S,
    Je,
    Qe,
    Ye,
    Ze,
    $e,
    xe
  ];
}
class It extends qe {
  constructor(e) {
    super(), Ke(
      this,
      e,
      At,
      Lt,
      Me,
      {
        options: 0,
        setData: 15,
        getSelectedRows: 16,
        setWidth: 17,
        setHeight: 18
      },
      null,
      [-1, -1]
    );
  }
  get setData() {
    return this.$$.ctx[15];
  }
  get getSelectedRows() {
    return this.$$.ctx[16];
  }
  get setWidth() {
    return this.$$.ctx[17];
  }
  get setHeight() {
    return this.$$.ctx[18];
  }
}
const jt = {
  GridCommunity: It
};
export {
  jt as default
};
