var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __require = /* @__PURE__ */ ((x4) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x4, {
  get: (a5, b2) => (typeof require !== "undefined" ? require : a5)[b2]
}) : x4)(function(x4) {
  if (typeof require !== "undefined") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x4 + '" is not supported');
});
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// https://esm.sh/v135/node-gyp-build@4.8.1/denonext/node-gyp-build.mjs
var node_gyp_build_exports = {};
__export(node_gyp_build_exports, {
  compareTags: () => fe,
  compareTuples: () => me,
  default: () => de,
  matchTags: () => le,
  matchTuple: () => ve,
  parseTags: () => ae,
  parseTuple: () => pe,
  resolve: () => ce
});
import __Process$ from "node:process";
import * as __0$ from "node:fs";
import * as __1$ from "node:path";
import * as __2$ from "node:os";
var require2, Q, v, W, X, Z, ee, a, k, re, p, l, E, $, T, c, z, ce, ae, le, fe, pe, ve, me, g, _e, de;
var init_node_gyp_build = __esm({
  "https://esm.sh/v135/node-gyp-build@4.8.1/denonext/node-gyp-build.mjs"() {
    require2 = (n2) => {
      const e = (m4) => typeof m4.default < "u" ? m4.default : m4, c5 = (m4) => Object.assign({ __esModule: true }, m4);
      switch (n2) {
        case "fs":
          return e(__0$);
        case "path":
          return e(__1$);
        case "os":
          return e(__2$);
        default:
          throw new Error('module "' + n2 + '" not found');
      }
    };
    Q = Object.create;
    v = Object.defineProperty;
    W = Object.getOwnPropertyDescriptor;
    X = Object.getOwnPropertyNames;
    Z = Object.getPrototypeOf;
    ee = Object.prototype.hasOwnProperty;
    a = ((e) => typeof require2 < "u" ? require2 : typeof Proxy < "u" ? new Proxy(e, { get: (r, n2) => (typeof require2 < "u" ? require2 : r)[n2] }) : e)(function(e) {
      if (typeof require2 < "u") return require2.apply(this, arguments);
      throw Error('Dynamic require of "' + e + '" is not supported');
    });
    k = (e, r) => () => (r || e((r = { exports: {} }).exports, r), r.exports);
    re = (e, r) => {
      for (var n2 in r) v(e, n2, { get: r[n2], enumerable: true });
    };
    p = (e, r, n2, i2) => {
      if (r && typeof r == "object" || typeof r == "function") for (let t2 of X(r)) !ee.call(e, t2) && t2 !== n2 && v(e, t2, { get: () => r[t2], enumerable: !(i2 = W(r, t2)) || i2.enumerable });
      return e;
    };
    l = (e, r, n2) => (p(e, r, "default"), n2 && p(n2, r, "default"));
    E = (e, r, n2) => (n2 = e != null ? Q(Z(e)) : {}, p(r || !e || !e.__esModule ? v(n2, "default", { value: e, enumerable: true }) : n2, e));
    $ = k((he2, Y3) => {
      var S = a("fs"), u = a("path"), D2 = a("os"), I2 = typeof __webpack_require__ == "function" ? __non_webpack_require__ : a, ne2 = __Process$.config && __Process$.config.variables || {}, ie2 = !!__Process$.env.PREBUILDS_ONLY, B3 = __Process$.versions.modules, m4 = oe2() ? "electron" : te2() ? "node-webkit" : "node", _4 = __Process$.env.npm_config_arch || D2.arch(), d2 = __Process$.env.npm_config_platform || D2.platform(), O2 = __Process$.env.LIBC || (ue3(d2) ? "musl" : "glibc"), b2 = __Process$.env.ARM_VERSION || (_4 === "arm64" ? "8" : ne2.arm_version) || "", U2 = (__Process$.versions.uv || "").split(".")[0];
      Y3.exports = o;
      function o(e) {
        return I2(o.resolve(e));
      }
      o.resolve = o.path = function(e) {
        e = u.resolve(e || ".");
        try {
          var r = I2(u.join(e, "package.json")).name.toUpperCase().replace(/-/g, "_");
          __Process$.env[r + "_PREBUILD"] && (e = __Process$.env[r + "_PREBUILD"]);
        } catch {
        }
        if (!ie2) {
          var n2 = N2(u.join(e, "build/Release"), L2);
          if (n2) return n2;
          var i2 = N2(u.join(e, "build/Debug"), L2);
          if (i2) return i2;
        }
        var t2 = q4(e);
        if (t2) return t2;
        var s2 = q4(u.dirname(__Process$.execPath));
        if (s2) return s2;
        var G2 = ["platform=" + d2, "arch=" + _4, "runtime=" + m4, "abi=" + B3, "uv=" + U2, b2 ? "armv=" + b2 : "", "libc=" + O2, "node=" + __Process$.versions.node, __Process$.versions.electron ? "electron=" + __Process$.versions.electron : "", typeof __webpack_require__ == "function" ? "webpack=true" : ""].filter(Boolean).join(" ");
        throw new Error("No native build was found for " + G2 + `
    loaded from: ` + e + `
`);
        function q4(f3) {
          var H3 = h3(u.join(f3, "prebuilds")).map(A3), j4 = H3.filter(P2(d2, _4)).sort(C3)[0];
          if (j4) {
            var x4 = u.join(f3, "prebuilds", j4.name), J2 = h3(x4).map(F3), K3 = J2.filter(M2(m4, B3)), R3 = K3.sort(V4(m4))[0];
            if (R3) return u.join(x4, R3.file);
          }
        }
      };
      function h3(e) {
        try {
          return S.readdirSync(e);
        } catch {
          return [];
        }
      }
      function N2(e, r) {
        var n2 = h3(e).filter(r);
        return n2[0] && u.join(e, n2[0]);
      }
      function L2(e) {
        return /\.node$/.test(e);
      }
      function A3(e) {
        var r = e.split("-");
        if (r.length === 2) {
          var n2 = r[0], i2 = r[1].split("+");
          if (n2 && i2.length && i2.every(Boolean)) return { name: e, platform: n2, architectures: i2 };
        }
      }
      function P2(e, r) {
        return function(n2) {
          return n2 == null || n2.platform !== e ? false : n2.architectures.includes(r);
        };
      }
      function C3(e, r) {
        return e.architectures.length - r.architectures.length;
      }
      function F3(e) {
        var r = e.split("."), n2 = r.pop(), i2 = { file: e, specificity: 0 };
        if (n2 === "node") {
          for (var t2 = 0; t2 < r.length; t2++) {
            var s2 = r[t2];
            if (s2 === "node" || s2 === "electron" || s2 === "node-webkit") i2.runtime = s2;
            else if (s2 === "napi") i2.napi = true;
            else if (s2.slice(0, 3) === "abi") i2.abi = s2.slice(3);
            else if (s2.slice(0, 2) === "uv") i2.uv = s2.slice(2);
            else if (s2.slice(0, 4) === "armv") i2.armv = s2.slice(4);
            else if (s2 === "glibc" || s2 === "musl") i2.libc = s2;
            else continue;
            i2.specificity++;
          }
          return i2;
        }
      }
      function M2(e, r) {
        return function(n2) {
          return !(n2 == null || n2.runtime && n2.runtime !== e && !se(n2) || n2.abi && n2.abi !== r && !n2.napi || n2.uv && n2.uv !== U2 || n2.armv && n2.armv !== b2 || n2.libc && n2.libc !== O2);
        };
      }
      function se(e) {
        return e.runtime === "node" && e.napi;
      }
      function V4(e) {
        return function(r, n2) {
          return r.runtime !== n2.runtime ? r.runtime === e ? -1 : 1 : r.abi !== n2.abi ? r.abi ? -1 : 1 : r.specificity !== n2.specificity ? r.specificity > n2.specificity ? -1 : 1 : 0;
        };
      }
      function te2() {
        return !!(__Process$.versions && __Process$.versions.nw);
      }
      function oe2() {
        return __Process$.versions && __Process$.versions.electron || __Process$.env.ELECTRON_RUN_AS_NODE ? true : typeof window < "u" && window.process && window.process.type === "renderer";
      }
      function ue3(e) {
        return e === "linux" && S.existsSync("/etc/alpine-release");
      }
      o.parseTags = F3;
      o.matchTags = M2;
      o.compareTags = V4;
      o.parseTuple = A3;
      o.matchTuple = P2;
      o.compareTuples = C3;
    });
    T = k((ye2, y4) => {
      var w3 = typeof __webpack_require__ == "function" ? __non_webpack_require__ : a;
      typeof w3.addon == "function" ? y4.exports = w3.addon.bind(w3) : y4.exports = $();
    });
    c = {};
    re(c, { compareTags: () => fe, compareTuples: () => me, default: () => de, matchTags: () => le, matchTuple: () => ve, parseTags: () => ae, parseTuple: () => pe, resolve: () => ce });
    z = E(T());
    l(c, E(T()));
    ({ resolve: ce, parseTags: ae, matchTags: le, compareTags: fe, parseTuple: pe, matchTuple: ve, compareTuples: me } = z);
    ({ default: g, ..._e } = z);
    de = g !== void 0 ? g : _e;
  }
});

// https://esm.sh/v135/utf-8-validate@6.0.4/denonext/utf-8-validate.mjs
var utf_8_validate_exports = {};
__export(utf_8_validate_exports, {
  default: () => k2
});
var require3, h, c2, q, g2, w, y, F, d, T2, l2, s, _, p2, a2, t, V, m, j, k2;
var init_utf_8_validate = __esm({
  "https://esm.sh/v135/utf-8-validate@6.0.4/denonext/utf-8-validate.mjs"() {
    init_node_gyp_build();
    require3 = (n2) => {
      const e = (m4) => typeof m4.default < "u" ? m4.default : m4, c5 = (m4) => Object.assign({ __esModule: true }, m4);
      switch (n2) {
        case "node-gyp-build":
          return e(node_gyp_build_exports);
        default:
          throw new Error('module "' + n2 + '" not found');
      }
    };
    h = Object.create;
    c2 = Object.defineProperty;
    q = Object.getOwnPropertyDescriptor;
    g2 = Object.getOwnPropertyNames;
    w = Object.getPrototypeOf;
    y = Object.prototype.hasOwnProperty;
    F = ((e) => typeof require3 < "u" ? require3 : typeof Proxy < "u" ? new Proxy(e, { get: (r, x4) => (typeof require3 < "u" ? require3 : r)[x4] }) : e)(function(e) {
      if (typeof require3 < "u") return require3.apply(this, arguments);
      throw Error('Dynamic require of "' + e + '" is not supported');
    });
    d = (e, r) => () => (r || e((r = { exports: {} }).exports, r), r.exports);
    T2 = (e, r) => {
      for (var x4 in r) c2(e, x4, { get: r[x4], enumerable: true });
    };
    l2 = (e, r, x4, o) => {
      if (r && typeof r == "object" || typeof r == "function") for (let i2 of g2(r)) !y.call(e, i2) && i2 !== x4 && c2(e, i2, { get: () => r[i2], enumerable: !(o = q(r, i2)) || o.enumerable });
      return e;
    };
    s = (e, r, x4) => (l2(e, r, "default"), x4 && l2(x4, r, "default"));
    _ = (e, r, x4) => (x4 = e != null ? h(w(e)) : {}, l2(r || !e || !e.__esModule ? c2(x4, "default", { value: e, enumerable: true }) : x4, e));
    p2 = d((z4, f3) => {
      "use strict";
      function U2(e) {
        let r = e.length, x4 = 0;
        for (; x4 < r; ) if (!(e[x4] & 128)) x4++;
        else if ((e[x4] & 224) === 192) {
          if (x4 + 1 === r || (e[x4 + 1] & 192) !== 128 || (e[x4] & 254) === 192) return false;
          x4 += 2;
        } else if ((e[x4] & 240) === 224) {
          if (x4 + 2 >= r || (e[x4 + 1] & 192) !== 128 || (e[x4 + 2] & 192) !== 128 || e[x4] === 224 && (e[x4 + 1] & 224) === 128 || e[x4] === 237 && (e[x4 + 1] & 224) === 160) return false;
          x4 += 3;
        } else if ((e[x4] & 248) === 240) {
          if (x4 + 3 >= r || (e[x4 + 1] & 192) !== 128 || (e[x4 + 2] & 192) !== 128 || (e[x4 + 3] & 192) !== 128 || e[x4] === 240 && (e[x4 + 1] & 240) === 128 || e[x4] === 244 && e[x4 + 1] > 143 || e[x4] > 244) return false;
          x4 += 4;
        } else return false;
        return true;
      }
      f3.exports = U2;
    });
    a2 = d((A3, n2) => {
      "use strict";
      try {
        n2.exports = F("node-gyp-build")("/_virtual/esm.sh/v135/utf-8-validate@6.0.4/denonext");
      } catch {
        n2.exports = p2();
      }
    });
    t = {};
    T2(t, { default: () => k2 });
    V = _(a2());
    s(t, _(a2()));
    ({ default: m, ...j } = V);
    k2 = m !== void 0 ? m : j;
  }
});

// https://esm.sh/v135/node-gyp-build@4.6.1/denonext/node-gyp-build.mjs
var node_gyp_build_exports2 = {};
__export(node_gyp_build_exports2, {
  compareTags: () => le2,
  compareTuples: () => ve2,
  default: () => de2,
  matchTags: () => ae2,
  matchTuple: () => fe2,
  parseTags: () => ce2,
  parseTuple: () => pe2,
  resolve: () => ue
});
import __Process$2 from "node:process";
import * as __0$2 from "node:fs";
import * as __1$2 from "node:path";
import * as __2$2 from "node:os";
var require4, K, v2, Q2, W2, X2, Z2, l3, E2, ee2, f, a3, R, V2, T3, c3, $2, ue, ce2, ae2, le2, pe2, fe2, ve2, Y, me2, de2;
var init_node_gyp_build2 = __esm({
  "https://esm.sh/v135/node-gyp-build@4.6.1/denonext/node-gyp-build.mjs"() {
    require4 = (n2) => {
      const e = (m4) => typeof m4.default < "u" ? m4.default : m4, c5 = (m4) => Object.assign({}, m4);
      switch (n2) {
        case "fs":
          return e(__0$2);
        case "path":
          return e(__1$2);
        case "os":
          return e(__2$2);
        default:
          throw new Error('module "' + n2 + '" not found');
      }
    };
    K = Object.create;
    v2 = Object.defineProperty;
    Q2 = Object.getOwnPropertyDescriptor;
    W2 = Object.getOwnPropertyNames;
    X2 = Object.getPrototypeOf;
    Z2 = Object.prototype.hasOwnProperty;
    l3 = ((e) => typeof require4 < "u" ? require4 : typeof Proxy < "u" ? new Proxy(e, { get: (r, n2) => (typeof require4 < "u" ? require4 : r)[n2] }) : e)(function(e) {
      if (typeof require4 < "u") return require4.apply(this, arguments);
      throw Error('Dynamic require of "' + e + '" is not supported');
    });
    E2 = (e, r) => () => (r || e((r = { exports: {} }).exports, r), r.exports);
    ee2 = (e, r) => {
      for (var n2 in r) v2(e, n2, { get: r[n2], enumerable: true });
    };
    f = (e, r, n2, i2) => {
      if (r && typeof r == "object" || typeof r == "function") for (let o of W2(r)) !Z2.call(e, o) && o !== n2 && v2(e, o, { get: () => r[o], enumerable: !(i2 = Q2(r, o)) || i2.enumerable });
      return e;
    };
    a3 = (e, r, n2) => (f(e, r, "default"), n2 && f(n2, r, "default"));
    R = (e, r, n2) => (n2 = e != null ? K(X2(e)) : {}, f(r || !e || !e.__esModule ? v2(n2, "default", { value: e, enumerable: true }) : n2, e));
    V2 = E2((be2, M2) => {
      var L2 = l3("fs"), u = l3("path"), S = l3("os"), D2 = typeof __webpack_require__ == "function" ? __non_webpack_require__ : l3, re3 = __Process$2.config && __Process$2.config.variables || {}, ne2 = !!__Process$2.env.PREBUILDS_ONLY, k5 = __Process$2.versions.modules, m4 = oe2() ? "electron" : se() ? "node-webkit" : "node", d2 = __Process$2.env.npm_config_arch || S.arch(), _4 = __Process$2.env.npm_config_platform || S.platform(), I2 = __Process$2.env.LIBC || (te2(_4) ? "musl" : "glibc"), b2 = __Process$2.env.ARM_VERSION || (d2 === "arm64" ? "8" : re3.arm_version) || "", O2 = (__Process$2.versions.uv || "").split(".")[0];
      M2.exports = t2;
      function t2(e) {
        return D2(t2.resolve(e));
      }
      t2.resolve = t2.path = function(e) {
        e = u.resolve(e || ".");
        try {
          var r = D2(u.join(e, "package.json")).name.toUpperCase().replace(/-/g, "_");
          __Process$2.env[r + "_PREBUILD"] && (e = __Process$2.env[r + "_PREBUILD"]);
        } catch {
        }
        if (!ne2) {
          var n2 = B3(u.join(e, "build/Release"), N2);
          if (n2) return n2;
          var i2 = B3(u.join(e, "build/Debug"), N2);
          if (i2) return i2;
        }
        var o = w3(e);
        if (o) return o;
        var s2 = w3(u.dirname(__Process$2.execPath));
        if (s2) return s2;
        var z4 = ["platform=" + _4, "arch=" + d2, "runtime=" + m4, "abi=" + k5, "uv=" + O2, b2 ? "armv=" + b2 : "", "libc=" + I2, "node=" + __Process$2.versions.node, __Process$2.versions.electron ? "electron=" + __Process$2.versions.electron : "", typeof __webpack_require__ == "function" ? "webpack=true" : ""].filter(Boolean).join(" ");
        throw new Error("No native build was found for " + z4 + `
    loaded from: ` + e + `
`);
        function w3(p4) {
          var G2 = h3(u.join(p4, "prebuilds")).map(U2), j4 = G2.filter(A3(_4, d2)).sort(P2)[0];
          if (j4) {
            var x4 = u.join(p4, "prebuilds", j4.name), H3 = h3(x4).map(C3), J2 = H3.filter(g5(m4, k5)), q4 = J2.sort(F3(m4))[0];
            if (q4) return u.join(x4, q4.file);
          }
        }
      };
      function h3(e) {
        try {
          return L2.readdirSync(e);
        } catch {
          return [];
        }
      }
      function B3(e, r) {
        var n2 = h3(e).filter(r);
        return n2[0] && u.join(e, n2[0]);
      }
      function N2(e) {
        return /\.node$/.test(e);
      }
      function U2(e) {
        var r = e.split("-");
        if (r.length === 2) {
          var n2 = r[0], i2 = r[1].split("+");
          if (n2 && i2.length && i2.every(Boolean)) return { name: e, platform: n2, architectures: i2 };
        }
      }
      function A3(e, r) {
        return function(n2) {
          return n2 == null || n2.platform !== e ? false : n2.architectures.includes(r);
        };
      }
      function P2(e, r) {
        return e.architectures.length - r.architectures.length;
      }
      function C3(e) {
        var r = e.split("."), n2 = r.pop(), i2 = { file: e, specificity: 0 };
        if (n2 === "node") {
          for (var o = 0; o < r.length; o++) {
            var s2 = r[o];
            if (s2 === "node" || s2 === "electron" || s2 === "node-webkit") i2.runtime = s2;
            else if (s2 === "napi") i2.napi = true;
            else if (s2.slice(0, 3) === "abi") i2.abi = s2.slice(3);
            else if (s2.slice(0, 2) === "uv") i2.uv = s2.slice(2);
            else if (s2.slice(0, 4) === "armv") i2.armv = s2.slice(4);
            else if (s2 === "glibc" || s2 === "musl") i2.libc = s2;
            else continue;
            i2.specificity++;
          }
          return i2;
        }
      }
      function g5(e, r) {
        return function(n2) {
          return !(n2 == null || n2.runtime !== e && !ie2(n2) || n2.abi !== r && !n2.napi || n2.uv && n2.uv !== O2 || n2.armv && n2.armv !== b2 || n2.libc && n2.libc !== I2);
        };
      }
      function ie2(e) {
        return e.runtime === "node" && e.napi;
      }
      function F3(e) {
        return function(r, n2) {
          return r.runtime !== n2.runtime ? r.runtime === e ? -1 : 1 : r.abi !== n2.abi ? r.abi ? -1 : 1 : r.specificity !== n2.specificity ? r.specificity > n2.specificity ? -1 : 1 : 0;
        };
      }
      function se() {
        return !!(__Process$2.versions && __Process$2.versions.nw);
      }
      function oe2() {
        return __Process$2.versions && __Process$2.versions.electron || __Process$2.env.ELECTRON_RUN_AS_NODE ? true : typeof window < "u" && window.process && window.process.type === "renderer";
      }
      function te2(e) {
        return e === "linux" && L2.existsSync("/etc/alpine-release");
      }
      t2.parseTags = C3;
      t2.matchTags = g5;
      t2.compareTags = F3;
      t2.parseTuple = U2;
      t2.matchTuple = A3;
      t2.compareTuples = P2;
    });
    T3 = E2((ye2, y4) => {
      typeof __Process$2.addon == "function" ? y4.exports = __Process$2.addon.bind(__Process$2) : y4.exports = V2();
    });
    c3 = {};
    ee2(c3, { compareTags: () => le2, compareTuples: () => ve2, default: () => de2, matchTags: () => ae2, matchTuple: () => fe2, parseTags: () => ce2, parseTuple: () => pe2, resolve: () => ue });
    $2 = R(T3());
    a3(c3, R(T3()));
    ({ resolve: ue, parseTags: ce2, matchTags: ae2, compareTags: le2, parseTuple: pe2, matchTuple: fe2, compareTuples: ve2 } = $2);
    ({ default: Y, ...me2 } = $2);
    de2 = Y !== void 0 ? Y : me2;
  }
});

// https://esm.sh/v135/bufferutil@4.0.8/denonext/bufferutil.mjs
var bufferutil_exports = {};
__export(bufferutil_exports, {
  default: () => C
});
var require5, g3, _2, k3, q2, v3, y2, i, f2, j2, c4, n, l4, x, m2, a4, A, h2, B, C;
var init_bufferutil = __esm({
  "https://esm.sh/v135/bufferutil@4.0.8/denonext/bufferutil.mjs"() {
    init_node_gyp_build2();
    require5 = (n2) => {
      const e = (m4) => typeof m4.default < "u" ? m4.default : m4, c5 = (m4) => Object.assign({}, m4);
      switch (n2) {
        case "node-gyp-build":
          return e(node_gyp_build_exports2);
        default:
          throw new Error('module "' + n2 + '" not found');
      }
    };
    g3 = Object.create;
    _2 = Object.defineProperty;
    k3 = Object.getOwnPropertyDescriptor;
    q2 = Object.getOwnPropertyNames;
    v3 = Object.getPrototypeOf;
    y2 = Object.prototype.hasOwnProperty;
    i = ((t2) => typeof require5 < "u" ? require5 : typeof Proxy < "u" ? new Proxy(t2, { get: (e, r) => (typeof require5 < "u" ? require5 : e)[r] }) : t2)(function(t2) {
      if (typeof require5 < "u") return require5.apply(this, arguments);
      throw Error('Dynamic require of "' + t2 + '" is not supported');
    });
    f2 = (t2, e) => () => (e || t2((e = { exports: {} }).exports, e), e.exports);
    j2 = (t2, e) => {
      for (var r in e) _2(t2, r, { get: e[r], enumerable: true });
    };
    c4 = (t2, e, r, o) => {
      if (e && typeof e == "object" || typeof e == "function") for (let s2 of q2(e)) !y2.call(t2, s2) && s2 !== r && _2(t2, s2, { get: () => e[s2], enumerable: !(o = k3(e, s2)) || o.enumerable });
      return t2;
    };
    n = (t2, e, r) => (c4(t2, e, "default"), r && c4(r, e, "default"));
    l4 = (t2, e, r) => (r = t2 != null ? g3(v3(t2)) : {}, c4(e || !t2 || !t2.__esModule ? _2(r, "default", { value: t2, enumerable: true }) : r, t2));
    x = f2((E4, p4) => {
      "use strict";
      var w3 = (t2, e, r, o, s2) => {
        for (var u = 0; u < s2; u++) r[o + u] = t2[u] ^ e[u & 3];
      }, z4 = (t2, e) => {
        let r = t2.length;
        for (var o = 0; o < r; o++) t2[o] ^= e[o & 3];
      };
      p4.exports = { mask: w3, unmask: z4 };
    });
    m2 = f2((F3, d2) => {
      "use strict";
      try {
        d2.exports = i("node-gyp-build")("/_virtual/esm.sh/v135/bufferutil@4.0.8/denonext");
      } catch {
        d2.exports = x();
      }
    });
    a4 = {};
    j2(a4, { default: () => C });
    A = l4(m2());
    n(a4, l4(m2()));
    ({ default: h2, ...B } = A);
    C = h2 !== void 0 ? h2 : B;
  }
});

// https://esm.sh/v135/ws@8.18.0/denonext/ws.mjs
var ws_exports = {};
__export(ws_exports, {
  Receiver: () => export_Receiver,
  Sender: () => export_Sender,
  WebSocket: () => export_WebSocket,
  WebSocketServer: () => export_WebSocketServer,
  createWebSocketStream: () => export_createWebSocketStream,
  default: () => qr
});
import __Process$3 from "node:process";
import { Buffer as __Buffer$ } from "node:buffer";
import * as __0$3 from "node:stream";
import * as __1$3 from "node:events";
import * as __2$3 from "node:http";
import * as __3$ from "node:stream";
import * as __4$ from "node:crypto";
import * as __5$ from "node:stream";
import * as __6$ from "node:crypto";
import * as __7$ from "node:stream";
import * as __8$ from "node:buffer";
import * as __9$ from "node:zlib";
import * as __a$ from "node:events";
import * as __b$ from "node:https";
import * as __c$ from "node:http";
import * as __d$ from "node:net";
import * as __e$ from "node:tls";
import * as __f$ from "node:crypto";
import * as __10$ from "node:stream";
import * as __11$ from "node:url";
var __setImmediate$, require6, Kt, Ge, Xt, Zt, Qt, Jt, m3, x2, es, z2, ze, T4, H, et, X3, W3, ke, Ne, wt, Be, Me, Wt, zt, Sr, xr, Er, Ht, vr, qr, export_Receiver, export_Sender, export_WebSocket, export_WebSocketServer, export_createWebSocketStream;
var init_ws = __esm({
  "https://esm.sh/v135/ws@8.18.0/denonext/ws.mjs"() {
    init_utf_8_validate();
    init_bufferutil();
    __setImmediate$ = (cb, ...args) => setTimeout(cb, 0, ...args);
    require6 = (n2) => {
      const e = (m4) => typeof m4.default < "u" ? m4.default : m4, c5 = (m4) => Object.assign({ __esModule: true }, m4);
      switch (n2) {
        case "stream":
          return e(__0$3);
        case "events":
          return e(__1$3);
        case "http":
          return e(__2$3);
        case "crypto":
          return e(__4$);
        case "buffer":
          return e(__8$);
        case "zlib":
          return e(__9$);
        case "https":
          return e(__b$);
        case "net":
          return e(__d$);
        case "tls":
          return e(__e$);
        case "url":
          return e(__11$);
        case "utf-8-validate":
          return e(utf_8_validate_exports);
        case "bufferutil":
          return e(bufferutil_exports);
        default:
          throw new Error('module "' + n2 + '" not found');
      }
    };
    Kt = Object.create;
    Ge = Object.defineProperty;
    Xt = Object.getOwnPropertyDescriptor;
    Zt = Object.getOwnPropertyNames;
    Qt = Object.getPrototypeOf;
    Jt = Object.prototype.hasOwnProperty;
    m3 = ((t2) => typeof require6 < "u" ? require6 : typeof Proxy < "u" ? new Proxy(t2, { get: (e, s2) => (typeof require6 < "u" ? require6 : e)[s2] }) : t2)(function(t2) {
      if (typeof require6 < "u") return require6.apply(this, arguments);
      throw Error('Dynamic require of "' + t2 + '" is not supported');
    });
    x2 = (t2, e) => () => (e || t2((e = { exports: {} }).exports, e), e.exports);
    es = (t2, e, s2, r) => {
      if (e && typeof e == "object" || typeof e == "function") for (let i2 of Zt(e)) !Jt.call(t2, i2) && i2 !== s2 && Ge(t2, i2, { get: () => e[i2], enumerable: !(r = Xt(e, i2)) || r.enumerable });
      return t2;
    };
    z2 = (t2, e, s2) => (s2 = t2 != null ? Kt(Qt(t2)) : {}, es(e || !t2 || !t2.__esModule ? Ge(s2, "default", { value: t2, enumerable: true }) : s2, t2));
    ze = x2((wr, Ve) => {
      "use strict";
      var { Duplex: ts } = m3("stream");
      function $e(t2) {
        t2.emit("close");
      }
      function ss() {
        !this.destroyed && this._writableState.finished && this.destroy();
      }
      function je(t2) {
        this.removeListener("error", je), this.destroy(), this.listenerCount("error") === 0 && this.emit("error", t2);
      }
      function rs(t2, e) {
        let s2 = true, r = new ts({ ...e, autoDestroy: false, emitClose: false, objectMode: false, writableObjectMode: false });
        return t2.on("message", function(n2, o) {
          let f3 = !o && r._readableState.objectMode ? n2.toString() : n2;
          r.push(f3) || t2.pause();
        }), t2.once("error", function(n2) {
          r.destroyed || (s2 = false, r.destroy(n2));
        }), t2.once("close", function() {
          r.destroyed || r.push(null);
        }), r._destroy = function(i2, n2) {
          if (t2.readyState === t2.CLOSED) {
            n2(i2), __Process$3.nextTick($e, r);
            return;
          }
          let o = false;
          t2.once("error", function(l6) {
            o = true, n2(l6);
          }), t2.once("close", function() {
            o || n2(i2), __Process$3.nextTick($e, r);
          }), s2 && t2.terminate();
        }, r._final = function(i2) {
          if (t2.readyState === t2.CONNECTING) {
            t2.once("open", function() {
              r._final(i2);
            });
            return;
          }
          t2._socket !== null && (t2._socket._writableState.finished ? (i2(), r._readableState.endEmitted && r.destroy()) : (t2._socket.once("finish", function() {
            i2();
          }), t2.close()));
        }, r._read = function() {
          t2.isPaused && t2.resume();
        }, r._write = function(i2, n2, o) {
          if (t2.readyState === t2.CONNECTING) {
            t2.once("open", function() {
              r._write(i2, n2, o);
            });
            return;
          }
          t2.send(i2, o);
        }, r.on("end", ss), r.on("error", je), r;
      }
      Ve.exports = rs;
    });
    T4 = x2((Or, Ke) => {
      "use strict";
      var He = ["nodebuffer", "arraybuffer", "fragments"], Ye = typeof Blob < "u";
      Ye && He.push("blob");
      Ke.exports = { BINARY_TYPES: He, EMPTY_BUFFER: __Buffer$.alloc(0), GUID: "258EAFA5-E914-47DA-95CA-C5AB0DC85B11", hasBlob: Ye, kForOnEventAttribute: Symbol("kIsForOnEventAttribute"), kListener: Symbol("kListener"), kStatusCode: Symbol("status-code"), kWebSocket: Symbol("websocket"), NOOP: () => {
      } };
    });
    H = x2((Tr, se) => {
      "use strict";
      var { EMPTY_BUFFER: is } = T4(), ge2 = __Buffer$[Symbol.species];
      function ns(t2, e) {
        if (t2.length === 0) return is;
        if (t2.length === 1) return t2[0];
        let s2 = __Buffer$.allocUnsafe(e), r = 0;
        for (let i2 = 0; i2 < t2.length; i2++) {
          let n2 = t2[i2];
          s2.set(n2, r), r += n2.length;
        }
        return r < e ? new ge2(s2.buffer, s2.byteOffset, r) : s2;
      }
      function Xe(t2, e, s2, r, i2) {
        for (let n2 = 0; n2 < i2; n2++) s2[r + n2] = t2[n2] ^ e[n2 & 3];
      }
      function Ze(t2, e) {
        for (let s2 = 0; s2 < t2.length; s2++) t2[s2] ^= e[s2 & 3];
      }
      function os(t2) {
        return t2.length === t2.buffer.byteLength ? t2.buffer : t2.buffer.slice(t2.byteOffset, t2.byteOffset + t2.length);
      }
      function ye2(t2) {
        if (ye2.readOnly = true, __Buffer$.isBuffer(t2)) return t2;
        let e;
        return t2 instanceof ArrayBuffer ? e = new ge2(t2) : ArrayBuffer.isView(t2) ? e = new ge2(t2.buffer, t2.byteOffset, t2.byteLength) : (e = __Buffer$.from(t2), ye2.readOnly = false), e;
      }
      se.exports = { concat: ns, mask: Xe, toArrayBuffer: os, toBuffer: ye2, unmask: Ze };
      if (!__Process$3.env.WS_NO_BUFFER_UTIL) try {
        let t2 = m3("bufferutil");
        se.exports.mask = function(e, s2, r, i2, n2) {
          n2 < 48 ? Xe(e, s2, r, i2, n2) : t2.mask(e, s2, r, i2, n2);
        }, se.exports.unmask = function(e, s2) {
          e.length < 32 ? Ze(e, s2) : t2.unmask(e, s2);
        };
      } catch {
      }
    });
    et = x2((kr, Je) => {
      "use strict";
      var Qe = Symbol("kDone"), Se = Symbol("kRun"), xe = class {
        constructor(e) {
          this[Qe] = () => {
            this.pending--, this[Se]();
          }, this.concurrency = e || 1 / 0, this.jobs = [], this.pending = 0;
        }
        add(e) {
          this.jobs.push(e), this[Se]();
        }
        [Se]() {
          if (this.pending !== this.concurrency && this.jobs.length) {
            let e = this.jobs.shift();
            this.pending++, e(this[Qe]);
          }
        }
      };
      Je.exports = xe;
    });
    X3 = x2((Cr, it) => {
      "use strict";
      var Y3 = m3("zlib"), tt = H(), as = et(), { kStatusCode: st } = T4(), fs = __Buffer$[Symbol.species], ls = __Buffer$.from([0, 0, 255, 255]), ne2 = Symbol("permessage-deflate"), k5 = Symbol("total-length"), K3 = Symbol("callback"), N2 = Symbol("buffers"), ie2 = Symbol("error"), re3, Ee2 = class {
        constructor(e, s2, r) {
          if (this._maxPayload = r | 0, this._options = e || {}, this._threshold = this._options.threshold !== void 0 ? this._options.threshold : 1024, this._isServer = !!s2, this._deflate = null, this._inflate = null, this.params = null, !re3) {
            let i2 = this._options.concurrencyLimit !== void 0 ? this._options.concurrencyLimit : 10;
            re3 = new as(i2);
          }
        }
        static get extensionName() {
          return "permessage-deflate";
        }
        offer() {
          let e = {};
          return this._options.serverNoContextTakeover && (e.server_no_context_takeover = true), this._options.clientNoContextTakeover && (e.client_no_context_takeover = true), this._options.serverMaxWindowBits && (e.server_max_window_bits = this._options.serverMaxWindowBits), this._options.clientMaxWindowBits ? e.client_max_window_bits = this._options.clientMaxWindowBits : this._options.clientMaxWindowBits == null && (e.client_max_window_bits = true), e;
        }
        accept(e) {
          return e = this.normalizeParams(e), this.params = this._isServer ? this.acceptAsServer(e) : this.acceptAsClient(e), this.params;
        }
        cleanup() {
          if (this._inflate && (this._inflate.close(), this._inflate = null), this._deflate) {
            let e = this._deflate[K3];
            this._deflate.close(), this._deflate = null, e && e(new Error("The deflate stream was closed while data was being processed"));
          }
        }
        acceptAsServer(e) {
          let s2 = this._options, r = e.find((i2) => !(s2.serverNoContextTakeover === false && i2.server_no_context_takeover || i2.server_max_window_bits && (s2.serverMaxWindowBits === false || typeof s2.serverMaxWindowBits == "number" && s2.serverMaxWindowBits > i2.server_max_window_bits) || typeof s2.clientMaxWindowBits == "number" && !i2.client_max_window_bits));
          if (!r) throw new Error("None of the extension offers can be accepted");
          return s2.serverNoContextTakeover && (r.server_no_context_takeover = true), s2.clientNoContextTakeover && (r.client_no_context_takeover = true), typeof s2.serverMaxWindowBits == "number" && (r.server_max_window_bits = s2.serverMaxWindowBits), typeof s2.clientMaxWindowBits == "number" ? r.client_max_window_bits = s2.clientMaxWindowBits : (r.client_max_window_bits === true || s2.clientMaxWindowBits === false) && delete r.client_max_window_bits, r;
        }
        acceptAsClient(e) {
          let s2 = e[0];
          if (this._options.clientNoContextTakeover === false && s2.client_no_context_takeover) throw new Error('Unexpected parameter "client_no_context_takeover"');
          if (!s2.client_max_window_bits) typeof this._options.clientMaxWindowBits == "number" && (s2.client_max_window_bits = this._options.clientMaxWindowBits);
          else if (this._options.clientMaxWindowBits === false || typeof this._options.clientMaxWindowBits == "number" && s2.client_max_window_bits > this._options.clientMaxWindowBits) throw new Error('Unexpected or invalid parameter "client_max_window_bits"');
          return s2;
        }
        normalizeParams(e) {
          return e.forEach((s2) => {
            Object.keys(s2).forEach((r) => {
              let i2 = s2[r];
              if (i2.length > 1) throw new Error(`Parameter "${r}" must have only a single value`);
              if (i2 = i2[0], r === "client_max_window_bits") {
                if (i2 !== true) {
                  let n2 = +i2;
                  if (!Number.isInteger(n2) || n2 < 8 || n2 > 15) throw new TypeError(`Invalid value for parameter "${r}": ${i2}`);
                  i2 = n2;
                } else if (!this._isServer) throw new TypeError(`Invalid value for parameter "${r}": ${i2}`);
              } else if (r === "server_max_window_bits") {
                let n2 = +i2;
                if (!Number.isInteger(n2) || n2 < 8 || n2 > 15) throw new TypeError(`Invalid value for parameter "${r}": ${i2}`);
                i2 = n2;
              } else if (r === "client_no_context_takeover" || r === "server_no_context_takeover") {
                if (i2 !== true) throw new TypeError(`Invalid value for parameter "${r}": ${i2}`);
              } else throw new Error(`Unknown parameter "${r}"`);
              s2[r] = i2;
            });
          }), e;
        }
        decompress(e, s2, r) {
          re3.add((i2) => {
            this._decompress(e, s2, (n2, o) => {
              i2(), r(n2, o);
            });
          });
        }
        compress(e, s2, r) {
          re3.add((i2) => {
            this._compress(e, s2, (n2, o) => {
              i2(), r(n2, o);
            });
          });
        }
        _decompress(e, s2, r) {
          let i2 = this._isServer ? "client" : "server";
          if (!this._inflate) {
            let n2 = `${i2}_max_window_bits`, o = typeof this.params[n2] != "number" ? Y3.Z_DEFAULT_WINDOWBITS : this.params[n2];
            this._inflate = Y3.createInflateRaw({ ...this._options.zlibInflateOptions, windowBits: o }), this._inflate[ne2] = this, this._inflate[k5] = 0, this._inflate[N2] = [], this._inflate.on("error", cs), this._inflate.on("data", rt);
          }
          this._inflate[K3] = r, this._inflate.write(e), s2 && this._inflate.write(ls), this._inflate.flush(() => {
            let n2 = this._inflate[ie2];
            if (n2) {
              this._inflate.close(), this._inflate = null, r(n2);
              return;
            }
            let o = tt.concat(this._inflate[N2], this._inflate[k5]);
            this._inflate._readableState.endEmitted ? (this._inflate.close(), this._inflate = null) : (this._inflate[k5] = 0, this._inflate[N2] = [], s2 && this.params[`${i2}_no_context_takeover`] && this._inflate.reset()), r(null, o);
          });
        }
        _compress(e, s2, r) {
          let i2 = this._isServer ? "server" : "client";
          if (!this._deflate) {
            let n2 = `${i2}_max_window_bits`, o = typeof this.params[n2] != "number" ? Y3.Z_DEFAULT_WINDOWBITS : this.params[n2];
            this._deflate = Y3.createDeflateRaw({ ...this._options.zlibDeflateOptions, windowBits: o }), this._deflate[k5] = 0, this._deflate[N2] = [], this._deflate.on("data", hs);
          }
          this._deflate[K3] = r, this._deflate.write(e), this._deflate.flush(Y3.Z_SYNC_FLUSH, () => {
            if (!this._deflate) return;
            let n2 = tt.concat(this._deflate[N2], this._deflate[k5]);
            s2 && (n2 = new fs(n2.buffer, n2.byteOffset, n2.length - 4)), this._deflate[K3] = null, this._deflate[k5] = 0, this._deflate[N2] = [], s2 && this.params[`${i2}_no_context_takeover`] && this._deflate.reset(), r(null, n2);
          });
        }
      };
      it.exports = Ee2;
      function hs(t2) {
        this[N2].push(t2), this[k5] += t2.length;
      }
      function rt(t2) {
        if (this[k5] += t2.length, this[ne2]._maxPayload < 1 || this[k5] <= this[ne2]._maxPayload) {
          this[N2].push(t2);
          return;
        }
        this[ie2] = new RangeError("Max payload size exceeded"), this[ie2].code = "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH", this[ie2][st] = 1009, this.removeListener("data", rt), this.reset();
      }
      function cs(t2) {
        this[ne2]._inflate = null, t2[st] = 1007, this[K3](t2);
      }
    });
    W3 = x2((Lr, oe2) => {
      "use strict";
      var { isUtf8: nt } = m3("buffer"), { hasBlob: us } = T4(), ds = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0];
      function _s(t2) {
        return t2 >= 1e3 && t2 <= 1014 && t2 !== 1004 && t2 !== 1005 && t2 !== 1006 || t2 >= 3e3 && t2 <= 4999;
      }
      function ve3(t2) {
        let e = t2.length, s2 = 0;
        for (; s2 < e; ) if (!(t2[s2] & 128)) s2++;
        else if ((t2[s2] & 224) === 192) {
          if (s2 + 1 === e || (t2[s2 + 1] & 192) !== 128 || (t2[s2] & 254) === 192) return false;
          s2 += 2;
        } else if ((t2[s2] & 240) === 224) {
          if (s2 + 2 >= e || (t2[s2 + 1] & 192) !== 128 || (t2[s2 + 2] & 192) !== 128 || t2[s2] === 224 && (t2[s2 + 1] & 224) === 128 || t2[s2] === 237 && (t2[s2 + 1] & 224) === 160) return false;
          s2 += 3;
        } else if ((t2[s2] & 248) === 240) {
          if (s2 + 3 >= e || (t2[s2 + 1] & 192) !== 128 || (t2[s2 + 2] & 192) !== 128 || (t2[s2 + 3] & 192) !== 128 || t2[s2] === 240 && (t2[s2 + 1] & 240) === 128 || t2[s2] === 244 && t2[s2 + 1] > 143 || t2[s2] > 244) return false;
          s2 += 4;
        } else return false;
        return true;
      }
      function ps(t2) {
        return us && typeof t2 == "object" && typeof t2.arrayBuffer == "function" && typeof t2.type == "string" && typeof t2.stream == "function" && (t2[Symbol.toStringTag] === "Blob" || t2[Symbol.toStringTag] === "File");
      }
      oe2.exports = { isBlob: ps, isValidStatusCode: _s, isValidUTF8: ve3, tokenChars: ds };
      if (nt) oe2.exports.isValidUTF8 = function(t2) {
        return t2.length < 24 ? ve3(t2) : nt(t2);
      };
      else if (!__Process$3.env.WS_NO_UTF_8_VALIDATE) try {
        let t2 = m3("utf-8-validate");
        oe2.exports.isValidUTF8 = function(e) {
          return e.length < 32 ? ve3(e) : t2(e);
        };
      } catch {
      }
    });
    ke = x2((Nr, ut) => {
      "use strict";
      var { Writable: ms } = m3("stream"), ot = X3(), { BINARY_TYPES: gs, EMPTY_BUFFER: at, kStatusCode: ys, kWebSocket: Ss } = T4(), { concat: be2, toArrayBuffer: xs, unmask: Es } = H(), { isValidStatusCode: vs, isValidUTF8: ft } = W3(), ae4 = __Buffer$[Symbol.species], v5 = 0, lt = 1, ht = 2, ct = 3, we2 = 4, Oe = 5, fe4 = 6, Te = class extends ms {
        constructor(e = {}) {
          super(), this._allowSynchronousEvents = e.allowSynchronousEvents !== void 0 ? e.allowSynchronousEvents : true, this._binaryType = e.binaryType || gs[0], this._extensions = e.extensions || {}, this._isServer = !!e.isServer, this._maxPayload = e.maxPayload | 0, this._skipUTF8Validation = !!e.skipUTF8Validation, this[Ss] = void 0, this._bufferedBytes = 0, this._buffers = [], this._compressed = false, this._payloadLength = 0, this._mask = void 0, this._fragmented = 0, this._masked = false, this._fin = false, this._opcode = 0, this._totalPayloadLength = 0, this._messageLength = 0, this._fragments = [], this._errored = false, this._loop = false, this._state = v5;
        }
        _write(e, s2, r) {
          if (this._opcode === 8 && this._state == v5) return r();
          this._bufferedBytes += e.length, this._buffers.push(e), this.startLoop(r);
        }
        consume(e) {
          if (this._bufferedBytes -= e, e === this._buffers[0].length) return this._buffers.shift();
          if (e < this._buffers[0].length) {
            let r = this._buffers[0];
            return this._buffers[0] = new ae4(r.buffer, r.byteOffset + e, r.length - e), new ae4(r.buffer, r.byteOffset, e);
          }
          let s2 = __Buffer$.allocUnsafe(e);
          do {
            let r = this._buffers[0], i2 = s2.length - e;
            e >= r.length ? s2.set(this._buffers.shift(), i2) : (s2.set(new Uint8Array(r.buffer, r.byteOffset, e), i2), this._buffers[0] = new ae4(r.buffer, r.byteOffset + e, r.length - e)), e -= r.length;
          } while (e > 0);
          return s2;
        }
        startLoop(e) {
          this._loop = true;
          do
            switch (this._state) {
              case v5:
                this.getInfo(e);
                break;
              case lt:
                this.getPayloadLength16(e);
                break;
              case ht:
                this.getPayloadLength64(e);
                break;
              case ct:
                this.getMask();
                break;
              case we2:
                this.getData(e);
                break;
              case Oe:
              case fe4:
                this._loop = false;
                return;
            }
          while (this._loop);
          this._errored || e();
        }
        getInfo(e) {
          if (this._bufferedBytes < 2) {
            this._loop = false;
            return;
          }
          let s2 = this.consume(2);
          if (s2[0] & 48) {
            let i2 = this.createError(RangeError, "RSV2 and RSV3 must be clear", true, 1002, "WS_ERR_UNEXPECTED_RSV_2_3");
            e(i2);
            return;
          }
          let r = (s2[0] & 64) === 64;
          if (r && !this._extensions[ot.extensionName]) {
            let i2 = this.createError(RangeError, "RSV1 must be clear", true, 1002, "WS_ERR_UNEXPECTED_RSV_1");
            e(i2);
            return;
          }
          if (this._fin = (s2[0] & 128) === 128, this._opcode = s2[0] & 15, this._payloadLength = s2[1] & 127, this._opcode === 0) {
            if (r) {
              let i2 = this.createError(RangeError, "RSV1 must be clear", true, 1002, "WS_ERR_UNEXPECTED_RSV_1");
              e(i2);
              return;
            }
            if (!this._fragmented) {
              let i2 = this.createError(RangeError, "invalid opcode 0", true, 1002, "WS_ERR_INVALID_OPCODE");
              e(i2);
              return;
            }
            this._opcode = this._fragmented;
          } else if (this._opcode === 1 || this._opcode === 2) {
            if (this._fragmented) {
              let i2 = this.createError(RangeError, `invalid opcode ${this._opcode}`, true, 1002, "WS_ERR_INVALID_OPCODE");
              e(i2);
              return;
            }
            this._compressed = r;
          } else if (this._opcode > 7 && this._opcode < 11) {
            if (!this._fin) {
              let i2 = this.createError(RangeError, "FIN must be set", true, 1002, "WS_ERR_EXPECTED_FIN");
              e(i2);
              return;
            }
            if (r) {
              let i2 = this.createError(RangeError, "RSV1 must be clear", true, 1002, "WS_ERR_UNEXPECTED_RSV_1");
              e(i2);
              return;
            }
            if (this._payloadLength > 125 || this._opcode === 8 && this._payloadLength === 1) {
              let i2 = this.createError(RangeError, `invalid payload length ${this._payloadLength}`, true, 1002, "WS_ERR_INVALID_CONTROL_PAYLOAD_LENGTH");
              e(i2);
              return;
            }
          } else {
            let i2 = this.createError(RangeError, `invalid opcode ${this._opcode}`, true, 1002, "WS_ERR_INVALID_OPCODE");
            e(i2);
            return;
          }
          if (!this._fin && !this._fragmented && (this._fragmented = this._opcode), this._masked = (s2[1] & 128) === 128, this._isServer) {
            if (!this._masked) {
              let i2 = this.createError(RangeError, "MASK must be set", true, 1002, "WS_ERR_EXPECTED_MASK");
              e(i2);
              return;
            }
          } else if (this._masked) {
            let i2 = this.createError(RangeError, "MASK must be clear", true, 1002, "WS_ERR_UNEXPECTED_MASK");
            e(i2);
            return;
          }
          this._payloadLength === 126 ? this._state = lt : this._payloadLength === 127 ? this._state = ht : this.haveLength(e);
        }
        getPayloadLength16(e) {
          if (this._bufferedBytes < 2) {
            this._loop = false;
            return;
          }
          this._payloadLength = this.consume(2).readUInt16BE(0), this.haveLength(e);
        }
        getPayloadLength64(e) {
          if (this._bufferedBytes < 8) {
            this._loop = false;
            return;
          }
          let s2 = this.consume(8), r = s2.readUInt32BE(0);
          if (r > Math.pow(2, 21) - 1) {
            let i2 = this.createError(RangeError, "Unsupported WebSocket frame: payload length > 2^53 - 1", false, 1009, "WS_ERR_UNSUPPORTED_DATA_PAYLOAD_LENGTH");
            e(i2);
            return;
          }
          this._payloadLength = r * Math.pow(2, 32) + s2.readUInt32BE(4), this.haveLength(e);
        }
        haveLength(e) {
          if (this._payloadLength && this._opcode < 8 && (this._totalPayloadLength += this._payloadLength, this._totalPayloadLength > this._maxPayload && this._maxPayload > 0)) {
            let s2 = this.createError(RangeError, "Max payload size exceeded", false, 1009, "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH");
            e(s2);
            return;
          }
          this._masked ? this._state = ct : this._state = we2;
        }
        getMask() {
          if (this._bufferedBytes < 4) {
            this._loop = false;
            return;
          }
          this._mask = this.consume(4), this._state = we2;
        }
        getData(e) {
          let s2 = at;
          if (this._payloadLength) {
            if (this._bufferedBytes < this._payloadLength) {
              this._loop = false;
              return;
            }
            s2 = this.consume(this._payloadLength), this._masked && this._mask[0] | this._mask[1] | this._mask[2] | this._mask[3] && Es(s2, this._mask);
          }
          if (this._opcode > 7) {
            this.controlMessage(s2, e);
            return;
          }
          if (this._compressed) {
            this._state = Oe, this.decompress(s2, e);
            return;
          }
          s2.length && (this._messageLength = this._totalPayloadLength, this._fragments.push(s2)), this.dataMessage(e);
        }
        decompress(e, s2) {
          this._extensions[ot.extensionName].decompress(e, this._fin, (i2, n2) => {
            if (i2) return s2(i2);
            if (n2.length) {
              if (this._messageLength += n2.length, this._messageLength > this._maxPayload && this._maxPayload > 0) {
                let o = this.createError(RangeError, "Max payload size exceeded", false, 1009, "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH");
                s2(o);
                return;
              }
              this._fragments.push(n2);
            }
            this.dataMessage(s2), this._state === v5 && this.startLoop(s2);
          });
        }
        dataMessage(e) {
          if (!this._fin) {
            this._state = v5;
            return;
          }
          let s2 = this._messageLength, r = this._fragments;
          if (this._totalPayloadLength = 0, this._messageLength = 0, this._fragmented = 0, this._fragments = [], this._opcode === 2) {
            let i2;
            this._binaryType === "nodebuffer" ? i2 = be2(r, s2) : this._binaryType === "arraybuffer" ? i2 = xs(be2(r, s2)) : this._binaryType === "blob" ? i2 = new Blob(r) : i2 = r, this._allowSynchronousEvents ? (this.emit("message", i2, true), this._state = v5) : (this._state = fe4, __setImmediate$(() => {
              this.emit("message", i2, true), this._state = v5, this.startLoop(e);
            }));
          } else {
            let i2 = be2(r, s2);
            if (!this._skipUTF8Validation && !ft(i2)) {
              let n2 = this.createError(Error, "invalid UTF-8 sequence", true, 1007, "WS_ERR_INVALID_UTF8");
              e(n2);
              return;
            }
            this._state === Oe || this._allowSynchronousEvents ? (this.emit("message", i2, false), this._state = v5) : (this._state = fe4, __setImmediate$(() => {
              this.emit("message", i2, false), this._state = v5, this.startLoop(e);
            }));
          }
        }
        controlMessage(e, s2) {
          if (this._opcode === 8) {
            if (e.length === 0) this._loop = false, this.emit("conclude", 1005, at), this.end();
            else {
              let r = e.readUInt16BE(0);
              if (!vs(r)) {
                let n2 = this.createError(RangeError, `invalid status code ${r}`, true, 1002, "WS_ERR_INVALID_CLOSE_CODE");
                s2(n2);
                return;
              }
              let i2 = new ae4(e.buffer, e.byteOffset + 2, e.length - 2);
              if (!this._skipUTF8Validation && !ft(i2)) {
                let n2 = this.createError(Error, "invalid UTF-8 sequence", true, 1007, "WS_ERR_INVALID_UTF8");
                s2(n2);
                return;
              }
              this._loop = false, this.emit("conclude", r, i2), this.end();
            }
            this._state = v5;
            return;
          }
          this._allowSynchronousEvents ? (this.emit(this._opcode === 9 ? "ping" : "pong", e), this._state = v5) : (this._state = fe4, __setImmediate$(() => {
            this.emit(this._opcode === 9 ? "ping" : "pong", e), this._state = v5, this.startLoop(s2);
          }));
        }
        createError(e, s2, r, i2, n2) {
          this._loop = false, this._errored = true;
          let o = new e(r ? `Invalid WebSocket frame: ${s2}` : s2);
          return Error.captureStackTrace(o, this.createError), o.code = n2, o[ys] = i2, o;
        }
      };
      ut.exports = Te;
    });
    Ne = x2((Br, pt) => {
      "use strict";
      var { Duplex: Pr } = m3("stream"), { randomFillSync: bs } = m3("crypto"), dt = X3(), { EMPTY_BUFFER: ws, kWebSocket: Os, NOOP: Ts } = T4(), { isBlob: F3, isValidStatusCode: ks } = W3(), { mask: _t, toBuffer: B3 } = H(), b2 = Symbol("kByteLength"), Cs = __Buffer$.alloc(4), le4 = 8 * 1024, R3, q4 = le4, w3 = 0, Ls = 1, Ns = 2, Ce = class t2 {
        constructor(e, s2, r) {
          this._extensions = s2 || {}, r && (this._generateMask = r, this._maskBuffer = __Buffer$.alloc(4)), this._socket = e, this._firstFragment = true, this._compress = false, this._bufferedBytes = 0, this._queue = [], this._state = w3, this.onerror = Ts, this[Os] = void 0;
        }
        static frame(e, s2) {
          let r, i2 = false, n2 = 2, o = false;
          s2.mask && (r = s2.maskBuffer || Cs, s2.generateMask ? s2.generateMask(r) : (q4 === le4 && (R3 === void 0 && (R3 = __Buffer$.alloc(le4)), bs(R3, 0, le4), q4 = 0), r[0] = R3[q4++], r[1] = R3[q4++], r[2] = R3[q4++], r[3] = R3[q4++]), o = (r[0] | r[1] | r[2] | r[3]) === 0, n2 = 6);
          let f3;
          typeof e == "string" ? (!s2.mask || o) && s2[b2] !== void 0 ? f3 = s2[b2] : (e = __Buffer$.from(e), f3 = e.length) : (f3 = e.length, i2 = s2.mask && s2.readOnly && !o);
          let l6 = f3;
          f3 >= 65536 ? (n2 += 8, l6 = 127) : f3 > 125 && (n2 += 2, l6 = 126);
          let a5 = __Buffer$.allocUnsafe(i2 ? f3 + n2 : n2);
          return a5[0] = s2.fin ? s2.opcode | 128 : s2.opcode, s2.rsv1 && (a5[0] |= 64), a5[1] = l6, l6 === 126 ? a5.writeUInt16BE(f3, 2) : l6 === 127 && (a5[2] = a5[3] = 0, a5.writeUIntBE(f3, 4, 6)), s2.mask ? (a5[1] |= 128, a5[n2 - 4] = r[0], a5[n2 - 3] = r[1], a5[n2 - 2] = r[2], a5[n2 - 1] = r[3], o ? [a5, e] : i2 ? (_t(e, r, a5, n2, f3), [a5]) : (_t(e, r, e, 0, f3), [a5, e])) : [a5, e];
        }
        close(e, s2, r, i2) {
          let n2;
          if (e === void 0) n2 = ws;
          else {
            if (typeof e != "number" || !ks(e)) throw new TypeError("First argument must be a valid error code number");
            if (s2 === void 0 || !s2.length) n2 = __Buffer$.allocUnsafe(2), n2.writeUInt16BE(e, 0);
            else {
              let f3 = __Buffer$.byteLength(s2);
              if (f3 > 123) throw new RangeError("The message must not be greater than 123 bytes");
              n2 = __Buffer$.allocUnsafe(2 + f3), n2.writeUInt16BE(e, 0), typeof s2 == "string" ? n2.write(s2, 2) : n2.set(s2, 2);
            }
          }
          let o = { [b2]: n2.length, fin: true, generateMask: this._generateMask, mask: r, maskBuffer: this._maskBuffer, opcode: 8, readOnly: false, rsv1: false };
          this._state !== w3 ? this.enqueue([this.dispatch, n2, false, o, i2]) : this.sendFrame(t2.frame(n2, o), i2);
        }
        ping(e, s2, r) {
          let i2, n2;
          if (typeof e == "string" ? (i2 = __Buffer$.byteLength(e), n2 = false) : F3(e) ? (i2 = e.size, n2 = false) : (e = B3(e), i2 = e.length, n2 = B3.readOnly), i2 > 125) throw new RangeError("The data size must not be greater than 125 bytes");
          let o = { [b2]: i2, fin: true, generateMask: this._generateMask, mask: s2, maskBuffer: this._maskBuffer, opcode: 9, readOnly: n2, rsv1: false };
          F3(e) ? this._state !== w3 ? this.enqueue([this.getBlobData, e, false, o, r]) : this.getBlobData(e, false, o, r) : this._state !== w3 ? this.enqueue([this.dispatch, e, false, o, r]) : this.sendFrame(t2.frame(e, o), r);
        }
        pong(e, s2, r) {
          let i2, n2;
          if (typeof e == "string" ? (i2 = __Buffer$.byteLength(e), n2 = false) : F3(e) ? (i2 = e.size, n2 = false) : (e = B3(e), i2 = e.length, n2 = B3.readOnly), i2 > 125) throw new RangeError("The data size must not be greater than 125 bytes");
          let o = { [b2]: i2, fin: true, generateMask: this._generateMask, mask: s2, maskBuffer: this._maskBuffer, opcode: 10, readOnly: n2, rsv1: false };
          F3(e) ? this._state !== w3 ? this.enqueue([this.getBlobData, e, false, o, r]) : this.getBlobData(e, false, o, r) : this._state !== w3 ? this.enqueue([this.dispatch, e, false, o, r]) : this.sendFrame(t2.frame(e, o), r);
        }
        send(e, s2, r) {
          let i2 = this._extensions[dt.extensionName], n2 = s2.binary ? 2 : 1, o = s2.compress, f3, l6;
          typeof e == "string" ? (f3 = __Buffer$.byteLength(e), l6 = false) : F3(e) ? (f3 = e.size, l6 = false) : (e = B3(e), f3 = e.length, l6 = B3.readOnly), this._firstFragment ? (this._firstFragment = false, o && i2 && i2.params[i2._isServer ? "server_no_context_takeover" : "client_no_context_takeover"] && (o = f3 >= i2._threshold), this._compress = o) : (o = false, n2 = 0), s2.fin && (this._firstFragment = true);
          let a5 = { [b2]: f3, fin: s2.fin, generateMask: this._generateMask, mask: s2.mask, maskBuffer: this._maskBuffer, opcode: n2, readOnly: l6, rsv1: o };
          F3(e) ? this._state !== w3 ? this.enqueue([this.getBlobData, e, this._compress, a5, r]) : this.getBlobData(e, this._compress, a5, r) : this._state !== w3 ? this.enqueue([this.dispatch, e, this._compress, a5, r]) : this.dispatch(e, this._compress, a5, r);
        }
        getBlobData(e, s2, r, i2) {
          this._bufferedBytes += r[b2], this._state = Ns, e.arrayBuffer().then((n2) => {
            if (this._socket.destroyed) {
              let f3 = new Error("The socket was closed while the blob was being read");
              __Process$3.nextTick(Le, this, f3, i2);
              return;
            }
            this._bufferedBytes -= r[b2];
            let o = B3(n2);
            s2 ? this.dispatch(o, s2, r, i2) : (this._state = w3, this.sendFrame(t2.frame(o, r), i2), this.dequeue());
          }).catch((n2) => {
            __Process$3.nextTick(Ps, this, n2, i2);
          });
        }
        dispatch(e, s2, r, i2) {
          if (!s2) {
            this.sendFrame(t2.frame(e, r), i2);
            return;
          }
          let n2 = this._extensions[dt.extensionName];
          this._bufferedBytes += r[b2], this._state = Ls, n2.compress(e, r.fin, (o, f3) => {
            if (this._socket.destroyed) {
              let l6 = new Error("The socket was closed while data was being compressed");
              Le(this, l6, i2);
              return;
            }
            this._bufferedBytes -= r[b2], this._state = w3, r.readOnly = false, this.sendFrame(t2.frame(f3, r), i2), this.dequeue();
          });
        }
        dequeue() {
          for (; this._state === w3 && this._queue.length; ) {
            let e = this._queue.shift();
            this._bufferedBytes -= e[3][b2], Reflect.apply(e[0], this, e.slice(1));
          }
        }
        enqueue(e) {
          this._bufferedBytes += e[3][b2], this._queue.push(e);
        }
        sendFrame(e, s2) {
          e.length === 2 ? (this._socket.cork(), this._socket.write(e[0]), this._socket.write(e[1], s2), this._socket.uncork()) : this._socket.write(e[0], s2);
        }
      };
      pt.exports = Ce;
      function Le(t2, e, s2) {
        typeof s2 == "function" && s2(e);
        for (let r = 0; r < t2._queue.length; r++) {
          let i2 = t2._queue[r], n2 = i2[i2.length - 1];
          typeof n2 == "function" && n2(e);
        }
      }
      function Ps(t2, e, s2) {
        Le(t2, e, s2), t2.onerror(e);
      }
    });
    wt = x2((Rr, bt) => {
      "use strict";
      var { kForOnEventAttribute: Z4, kListener: Pe } = T4(), mt = Symbol("kCode"), gt = Symbol("kData"), yt = Symbol("kError"), St = Symbol("kMessage"), xt = Symbol("kReason"), G2 = Symbol("kTarget"), Et = Symbol("kType"), vt = Symbol("kWasClean"), C3 = class {
        constructor(e) {
          this[G2] = null, this[Et] = e;
        }
        get target() {
          return this[G2];
        }
        get type() {
          return this[Et];
        }
      };
      Object.defineProperty(C3.prototype, "target", { enumerable: true });
      Object.defineProperty(C3.prototype, "type", { enumerable: true });
      var U2 = class extends C3 {
        constructor(e, s2 = {}) {
          super(e), this[mt] = s2.code === void 0 ? 0 : s2.code, this[xt] = s2.reason === void 0 ? "" : s2.reason, this[vt] = s2.wasClean === void 0 ? false : s2.wasClean;
        }
        get code() {
          return this[mt];
        }
        get reason() {
          return this[xt];
        }
        get wasClean() {
          return this[vt];
        }
      };
      Object.defineProperty(U2.prototype, "code", { enumerable: true });
      Object.defineProperty(U2.prototype, "reason", { enumerable: true });
      Object.defineProperty(U2.prototype, "wasClean", { enumerable: true });
      var $4 = class extends C3 {
        constructor(e, s2 = {}) {
          super(e), this[yt] = s2.error === void 0 ? null : s2.error, this[St] = s2.message === void 0 ? "" : s2.message;
        }
        get error() {
          return this[yt];
        }
        get message() {
          return this[St];
        }
      };
      Object.defineProperty($4.prototype, "error", { enumerable: true });
      Object.defineProperty($4.prototype, "message", { enumerable: true });
      var Q4 = class extends C3 {
        constructor(e, s2 = {}) {
          super(e), this[gt] = s2.data === void 0 ? null : s2.data;
        }
        get data() {
          return this[gt];
        }
      };
      Object.defineProperty(Q4.prototype, "data", { enumerable: true });
      var Bs = { addEventListener(t2, e, s2 = {}) {
        for (let i2 of this.listeners(t2)) if (!s2[Z4] && i2[Pe] === e && !i2[Z4]) return;
        let r;
        if (t2 === "message") r = function(n2, o) {
          let f3 = new Q4("message", { data: o ? n2 : n2.toString() });
          f3[G2] = this, he2(e, this, f3);
        };
        else if (t2 === "close") r = function(n2, o) {
          let f3 = new U2("close", { code: n2, reason: o.toString(), wasClean: this._closeFrameReceived && this._closeFrameSent });
          f3[G2] = this, he2(e, this, f3);
        };
        else if (t2 === "error") r = function(n2) {
          let o = new $4("error", { error: n2, message: n2.message });
          o[G2] = this, he2(e, this, o);
        };
        else if (t2 === "open") r = function() {
          let n2 = new C3("open");
          n2[G2] = this, he2(e, this, n2);
        };
        else return;
        r[Z4] = !!s2[Z4], r[Pe] = e, s2.once ? this.once(t2, r) : this.on(t2, r);
      }, removeEventListener(t2, e) {
        for (let s2 of this.listeners(t2)) if (s2[Pe] === e && !s2[Z4]) {
          this.removeListener(t2, s2);
          break;
        }
      } };
      bt.exports = { CloseEvent: U2, ErrorEvent: $4, Event: C3, EventTarget: Bs, MessageEvent: Q4 };
      function he2(t2, e, s2) {
        typeof t2 == "object" && t2.handleEvent ? t2.handleEvent.call(t2, s2) : t2.call(e, s2);
      }
    });
    Be = x2((Ur, Ot) => {
      "use strict";
      var { tokenChars: J2 } = W3();
      function O2(t2, e, s2) {
        t2[e] === void 0 ? t2[e] = [s2] : t2[e].push(s2);
      }
      function Rs(t2) {
        let e = /* @__PURE__ */ Object.create(null), s2 = /* @__PURE__ */ Object.create(null), r = false, i2 = false, n2 = false, o, f3, l6 = -1, a5 = -1, h3 = -1, c5 = 0;
        for (; c5 < t2.length; c5++) if (a5 = t2.charCodeAt(c5), o === void 0) if (h3 === -1 && J2[a5] === 1) l6 === -1 && (l6 = c5);
        else if (c5 !== 0 && (a5 === 32 || a5 === 9)) h3 === -1 && l6 !== -1 && (h3 = c5);
        else if (a5 === 59 || a5 === 44) {
          if (l6 === -1) throw new SyntaxError(`Unexpected character at index ${c5}`);
          h3 === -1 && (h3 = c5);
          let g5 = t2.slice(l6, h3);
          a5 === 44 ? (O2(e, g5, s2), s2 = /* @__PURE__ */ Object.create(null)) : o = g5, l6 = h3 = -1;
        } else throw new SyntaxError(`Unexpected character at index ${c5}`);
        else if (f3 === void 0) if (h3 === -1 && J2[a5] === 1) l6 === -1 && (l6 = c5);
        else if (a5 === 32 || a5 === 9) h3 === -1 && l6 !== -1 && (h3 = c5);
        else if (a5 === 59 || a5 === 44) {
          if (l6 === -1) throw new SyntaxError(`Unexpected character at index ${c5}`);
          h3 === -1 && (h3 = c5), O2(s2, t2.slice(l6, h3), true), a5 === 44 && (O2(e, o, s2), s2 = /* @__PURE__ */ Object.create(null), o = void 0), l6 = h3 = -1;
        } else if (a5 === 61 && l6 !== -1 && h3 === -1) f3 = t2.slice(l6, c5), l6 = h3 = -1;
        else throw new SyntaxError(`Unexpected character at index ${c5}`);
        else if (i2) {
          if (J2[a5] !== 1) throw new SyntaxError(`Unexpected character at index ${c5}`);
          l6 === -1 ? l6 = c5 : r || (r = true), i2 = false;
        } else if (n2) if (J2[a5] === 1) l6 === -1 && (l6 = c5);
        else if (a5 === 34 && l6 !== -1) n2 = false, h3 = c5;
        else if (a5 === 92) i2 = true;
        else throw new SyntaxError(`Unexpected character at index ${c5}`);
        else if (a5 === 34 && t2.charCodeAt(c5 - 1) === 61) n2 = true;
        else if (h3 === -1 && J2[a5] === 1) l6 === -1 && (l6 = c5);
        else if (l6 !== -1 && (a5 === 32 || a5 === 9)) h3 === -1 && (h3 = c5);
        else if (a5 === 59 || a5 === 44) {
          if (l6 === -1) throw new SyntaxError(`Unexpected character at index ${c5}`);
          h3 === -1 && (h3 = c5);
          let g5 = t2.slice(l6, h3);
          r && (g5 = g5.replace(/\\/g, ""), r = false), O2(s2, f3, g5), a5 === 44 && (O2(e, o, s2), s2 = /* @__PURE__ */ Object.create(null), o = void 0), f3 = void 0, l6 = h3 = -1;
        } else throw new SyntaxError(`Unexpected character at index ${c5}`);
        if (l6 === -1 || n2 || a5 === 32 || a5 === 9) throw new SyntaxError("Unexpected end of input");
        h3 === -1 && (h3 = c5);
        let _4 = t2.slice(l6, h3);
        return o === void 0 ? O2(e, _4, s2) : (f3 === void 0 ? O2(s2, _4, true) : r ? O2(s2, f3, _4.replace(/\\/g, "")) : O2(s2, f3, _4), O2(e, o, s2)), e;
      }
      function Us(t2) {
        return Object.keys(t2).map((e) => {
          let s2 = t2[e];
          return Array.isArray(s2) || (s2 = [s2]), s2.map((r) => [e].concat(Object.keys(r).map((i2) => {
            let n2 = r[i2];
            return Array.isArray(n2) || (n2 = [n2]), n2.map((o) => o === true ? i2 : `${i2}=${o}`).join("; ");
          })).join("; ")).join(", ");
        }).join(", ");
      }
      Ot.exports = { format: Us, parse: Rs };
    });
    Me = x2((Mr, Mt) => {
      "use strict";
      var Is = m3("events"), Ds = m3("https"), Ms = m3("http"), Ct = m3("net"), As = m3("tls"), { randomBytes: Ws, createHash: Fs } = m3("crypto"), { Duplex: Ir, Readable: Dr } = m3("stream"), { URL: Re } = m3("url"), P2 = X3(), qs = ke(), Gs = Ne(), { isBlob: $s } = W3(), { BINARY_TYPES: Tt, EMPTY_BUFFER: ce4, GUID: js, kForOnEventAttribute: Ue, kListener: Vs, kStatusCode: zs, kWebSocket: y4, NOOP: Lt } = T4(), { EventTarget: { addEventListener: Hs, removeEventListener: Ys } } = wt(), { format: Ks, parse: Xs } = Be(), { toBuffer: Zs } = H(), Qs = 30 * 1e3, Nt = Symbol("kAborted"), Ie = [8, 13], L2 = ["CONNECTING", "OPEN", "CLOSING", "CLOSED"], Js = /^[!#$%&'*+\-.0-9A-Z^_`|a-z~]+$/, d2 = class t2 extends Is {
        constructor(e, s2, r) {
          super(), this._binaryType = Tt[0], this._closeCode = 1006, this._closeFrameReceived = false, this._closeFrameSent = false, this._closeMessage = ce4, this._closeTimer = null, this._errorEmitted = false, this._extensions = {}, this._paused = false, this._protocol = "", this._readyState = t2.CONNECTING, this._receiver = null, this._sender = null, this._socket = null, e !== null ? (this._bufferedAmount = 0, this._isServer = false, this._redirects = 0, s2 === void 0 ? s2 = [] : Array.isArray(s2) || (typeof s2 == "object" && s2 !== null ? (r = s2, s2 = []) : s2 = [s2]), Pt(this, e, s2, r)) : (this._autoPong = r.autoPong, this._isServer = true);
        }
        get binaryType() {
          return this._binaryType;
        }
        set binaryType(e) {
          Tt.includes(e) && (this._binaryType = e, this._receiver && (this._receiver._binaryType = e));
        }
        get bufferedAmount() {
          return this._socket ? this._socket._writableState.length + this._sender._bufferedBytes : this._bufferedAmount;
        }
        get extensions() {
          return Object.keys(this._extensions).join();
        }
        get isPaused() {
          return this._paused;
        }
        get onclose() {
          return null;
        }
        get onerror() {
          return null;
        }
        get onopen() {
          return null;
        }
        get onmessage() {
          return null;
        }
        get protocol() {
          return this._protocol;
        }
        get readyState() {
          return this._readyState;
        }
        get url() {
          return this._url;
        }
        setSocket(e, s2, r) {
          let i2 = new qs({ allowSynchronousEvents: r.allowSynchronousEvents, binaryType: this.binaryType, extensions: this._extensions, isServer: this._isServer, maxPayload: r.maxPayload, skipUTF8Validation: r.skipUTF8Validation }), n2 = new Gs(e, this._extensions, r.generateMask);
          this._receiver = i2, this._sender = n2, this._socket = e, i2[y4] = this, n2[y4] = this, e[y4] = this, i2.on("conclude", sr), i2.on("drain", rr), i2.on("error", ir), i2.on("message", nr), i2.on("ping", or), i2.on("pong", ar), n2.onerror = fr, e.setTimeout && e.setTimeout(0), e.setNoDelay && e.setNoDelay(), s2.length > 0 && e.unshift(s2), e.on("close", Ut), e.on("data", de4), e.on("end", It), e.on("error", Dt), this._readyState = t2.OPEN, this.emit("open");
        }
        emitClose() {
          if (!this._socket) {
            this._readyState = t2.CLOSED, this.emit("close", this._closeCode, this._closeMessage);
            return;
          }
          this._extensions[P2.extensionName] && this._extensions[P2.extensionName].cleanup(), this._receiver.removeAllListeners(), this._readyState = t2.CLOSED, this.emit("close", this._closeCode, this._closeMessage);
        }
        close(e, s2) {
          if (this.readyState !== t2.CLOSED) {
            if (this.readyState === t2.CONNECTING) {
              E4(this, this._req, "WebSocket was closed before the connection was established");
              return;
            }
            if (this.readyState === t2.CLOSING) {
              this._closeFrameSent && (this._closeFrameReceived || this._receiver._writableState.errorEmitted) && this._socket.end();
              return;
            }
            this._readyState = t2.CLOSING, this._sender.close(e, s2, !this._isServer, (r) => {
              r || (this._closeFrameSent = true, (this._closeFrameReceived || this._receiver._writableState.errorEmitted) && this._socket.end());
            }), Rt(this);
          }
        }
        pause() {
          this.readyState === t2.CONNECTING || this.readyState === t2.CLOSED || (this._paused = true, this._socket.pause());
        }
        ping(e, s2, r) {
          if (this.readyState === t2.CONNECTING) throw new Error("WebSocket is not open: readyState 0 (CONNECTING)");
          if (typeof e == "function" ? (r = e, e = s2 = void 0) : typeof s2 == "function" && (r = s2, s2 = void 0), typeof e == "number" && (e = e.toString()), this.readyState !== t2.OPEN) {
            De(this, e, r);
            return;
          }
          s2 === void 0 && (s2 = !this._isServer), this._sender.ping(e || ce4, s2, r);
        }
        pong(e, s2, r) {
          if (this.readyState === t2.CONNECTING) throw new Error("WebSocket is not open: readyState 0 (CONNECTING)");
          if (typeof e == "function" ? (r = e, e = s2 = void 0) : typeof s2 == "function" && (r = s2, s2 = void 0), typeof e == "number" && (e = e.toString()), this.readyState !== t2.OPEN) {
            De(this, e, r);
            return;
          }
          s2 === void 0 && (s2 = !this._isServer), this._sender.pong(e || ce4, s2, r);
        }
        resume() {
          this.readyState === t2.CONNECTING || this.readyState === t2.CLOSED || (this._paused = false, this._receiver._writableState.needDrain || this._socket.resume());
        }
        send(e, s2, r) {
          if (this.readyState === t2.CONNECTING) throw new Error("WebSocket is not open: readyState 0 (CONNECTING)");
          if (typeof s2 == "function" && (r = s2, s2 = {}), typeof e == "number" && (e = e.toString()), this.readyState !== t2.OPEN) {
            De(this, e, r);
            return;
          }
          let i2 = { binary: typeof e != "string", mask: !this._isServer, compress: true, fin: true, ...s2 };
          this._extensions[P2.extensionName] || (i2.compress = false), this._sender.send(e || ce4, i2, r);
        }
        terminate() {
          if (this.readyState !== t2.CLOSED) {
            if (this.readyState === t2.CONNECTING) {
              E4(this, this._req, "WebSocket was closed before the connection was established");
              return;
            }
            this._socket && (this._readyState = t2.CLOSING, this._socket.destroy());
          }
        }
      };
      Object.defineProperty(d2, "CONNECTING", { enumerable: true, value: L2.indexOf("CONNECTING") });
      Object.defineProperty(d2.prototype, "CONNECTING", { enumerable: true, value: L2.indexOf("CONNECTING") });
      Object.defineProperty(d2, "OPEN", { enumerable: true, value: L2.indexOf("OPEN") });
      Object.defineProperty(d2.prototype, "OPEN", { enumerable: true, value: L2.indexOf("OPEN") });
      Object.defineProperty(d2, "CLOSING", { enumerable: true, value: L2.indexOf("CLOSING") });
      Object.defineProperty(d2.prototype, "CLOSING", { enumerable: true, value: L2.indexOf("CLOSING") });
      Object.defineProperty(d2, "CLOSED", { enumerable: true, value: L2.indexOf("CLOSED") });
      Object.defineProperty(d2.prototype, "CLOSED", { enumerable: true, value: L2.indexOf("CLOSED") });
      ["binaryType", "bufferedAmount", "extensions", "isPaused", "protocol", "readyState", "url"].forEach((t2) => {
        Object.defineProperty(d2.prototype, t2, { enumerable: true });
      });
      ["open", "error", "close", "message"].forEach((t2) => {
        Object.defineProperty(d2.prototype, `on${t2}`, { enumerable: true, get() {
          for (let e of this.listeners(t2)) if (e[Ue]) return e[Vs];
          return null;
        }, set(e) {
          for (let s2 of this.listeners(t2)) if (s2[Ue]) {
            this.removeListener(t2, s2);
            break;
          }
          typeof e == "function" && this.addEventListener(t2, e, { [Ue]: true });
        } });
      });
      d2.prototype.addEventListener = Hs;
      d2.prototype.removeEventListener = Ys;
      Mt.exports = d2;
      function Pt(t2, e, s2, r) {
        let i2 = { allowSynchronousEvents: true, autoPong: true, protocolVersion: Ie[1], maxPayload: 104857600, skipUTF8Validation: false, perMessageDeflate: true, followRedirects: false, maxRedirects: 10, ...r, socketPath: void 0, hostname: void 0, protocol: void 0, timeout: void 0, method: "GET", host: void 0, path: void 0, port: void 0 };
        if (t2._autoPong = i2.autoPong, !Ie.includes(i2.protocolVersion)) throw new RangeError(`Unsupported protocol version: ${i2.protocolVersion} (supported versions: ${Ie.join(", ")})`);
        let n2;
        if (e instanceof Re) n2 = e;
        else try {
          n2 = new Re(e);
        } catch {
          throw new SyntaxError(`Invalid URL: ${e}`);
        }
        n2.protocol === "http:" ? n2.protocol = "ws:" : n2.protocol === "https:" && (n2.protocol = "wss:"), t2._url = n2.href;
        let o = n2.protocol === "wss:", f3 = n2.protocol === "ws+unix:", l6;
        if (n2.protocol !== "ws:" && !o && !f3 ? l6 = `The URL's protocol must be one of "ws:", "wss:", "http:", "https", or "ws+unix:"` : f3 && !n2.pathname ? l6 = "The URL's pathname is empty" : n2.hash && (l6 = "The URL contains a fragment identifier"), l6) {
          let u = new SyntaxError(l6);
          if (t2._redirects === 0) throw u;
          ue3(t2, u);
          return;
        }
        let a5 = o ? 443 : 80, h3 = Ws(16).toString("base64"), c5 = o ? Ds.request : Ms.request, _4 = /* @__PURE__ */ new Set(), g5;
        if (i2.createConnection = i2.createConnection || (o ? tr : er), i2.defaultPort = i2.defaultPort || a5, i2.port = n2.port || a5, i2.host = n2.hostname.startsWith("[") ? n2.hostname.slice(1, -1) : n2.hostname, i2.headers = { ...i2.headers, "Sec-WebSocket-Version": i2.protocolVersion, "Sec-WebSocket-Key": h3, Connection: "Upgrade", Upgrade: "websocket" }, i2.path = n2.pathname + n2.search, i2.timeout = i2.handshakeTimeout, i2.perMessageDeflate && (g5 = new P2(i2.perMessageDeflate !== true ? i2.perMessageDeflate : {}, false, i2.maxPayload), i2.headers["Sec-WebSocket-Extensions"] = Ks({ [P2.extensionName]: g5.offer() })), s2.length) {
          for (let u of s2) {
            if (typeof u != "string" || !Js.test(u) || _4.has(u)) throw new SyntaxError("An invalid or duplicated subprotocol was specified");
            _4.add(u);
          }
          i2.headers["Sec-WebSocket-Protocol"] = s2.join(",");
        }
        if (i2.origin && (i2.protocolVersion < 13 ? i2.headers["Sec-WebSocket-Origin"] = i2.origin : i2.headers.Origin = i2.origin), (n2.username || n2.password) && (i2.auth = `${n2.username}:${n2.password}`), f3) {
          let u = i2.path.split(":");
          i2.socketPath = u[0], i2.path = u[1];
        }
        let p4;
        if (i2.followRedirects) {
          if (t2._redirects === 0) {
            t2._originalIpc = f3, t2._originalSecure = o, t2._originalHostOrSocketPath = f3 ? i2.socketPath : n2.host;
            let u = r && r.headers;
            if (r = { ...r, headers: {} }, u) for (let [S, M2] of Object.entries(u)) r.headers[S.toLowerCase()] = M2;
          } else if (t2.listenerCount("redirect") === 0) {
            let u = f3 ? t2._originalIpc ? i2.socketPath === t2._originalHostOrSocketPath : false : t2._originalIpc ? false : n2.host === t2._originalHostOrSocketPath;
            (!u || t2._originalSecure && !o) && (delete i2.headers.authorization, delete i2.headers.cookie, u || delete i2.headers.host, i2.auth = void 0);
          }
          i2.auth && !r.headers.authorization && (r.headers.authorization = "Basic " + __Buffer$.from(i2.auth).toString("base64")), p4 = t2._req = c5(i2), t2._redirects && t2.emit("redirect", t2.url, p4);
        } else p4 = t2._req = c5(i2);
        i2.timeout && p4.on("timeout", () => {
          E4(t2, p4, "Opening handshake has timed out");
        }), p4.on("error", (u) => {
          p4 === null || p4[Nt] || (p4 = t2._req = null, ue3(t2, u));
        }), p4.on("response", (u) => {
          let S = u.headers.location, M2 = u.statusCode;
          if (S && i2.followRedirects && M2 >= 300 && M2 < 400) {
            if (++t2._redirects > i2.maxRedirects) {
              E4(t2, p4, "Maximum redirects exceeded");
              return;
            }
            p4.abort();
            let j4;
            try {
              j4 = new Re(S, e);
            } catch {
              let A3 = new SyntaxError(`Invalid URL: ${S}`);
              ue3(t2, A3);
              return;
            }
            Pt(t2, j4, s2, r);
          } else t2.emit("unexpected-response", p4, u) || E4(t2, p4, `Unexpected server response: ${u.statusCode}`);
        }), p4.on("upgrade", (u, S, M2) => {
          if (t2.emit("upgrade", u), t2.readyState !== d2.CONNECTING) return;
          p4 = t2._req = null;
          let j4 = u.headers.upgrade;
          if (j4 === void 0 || j4.toLowerCase() !== "websocket") {
            E4(t2, S, "Invalid Upgrade header");
            return;
          }
          let We = Fs("sha1").update(h3 + js).digest("base64");
          if (u.headers["sec-websocket-accept"] !== We) {
            E4(t2, S, "Invalid Sec-WebSocket-Accept header");
            return;
          }
          let A3 = u.headers["sec-websocket-protocol"], V4;
          if (A3 !== void 0 ? _4.size ? _4.has(A3) || (V4 = "Server sent an invalid subprotocol") : V4 = "Server sent a subprotocol but none was requested" : _4.size && (V4 = "Server sent no subprotocol"), V4) {
            E4(t2, S, V4);
            return;
          }
          A3 && (t2._protocol = A3);
          let Fe = u.headers["sec-websocket-extensions"];
          if (Fe !== void 0) {
            if (!g5) {
              E4(t2, S, "Server sent a Sec-WebSocket-Extensions header but no extension was requested");
              return;
            }
            let pe4;
            try {
              pe4 = Xs(Fe);
            } catch {
              E4(t2, S, "Invalid Sec-WebSocket-Extensions header");
              return;
            }
            let qe = Object.keys(pe4);
            if (qe.length !== 1 || qe[0] !== P2.extensionName) {
              E4(t2, S, "Server indicated an extension that was not requested");
              return;
            }
            try {
              g5.accept(pe4[P2.extensionName]);
            } catch {
              E4(t2, S, "Invalid Sec-WebSocket-Extensions header");
              return;
            }
            t2._extensions[P2.extensionName] = g5;
          }
          t2.setSocket(S, M2, { allowSynchronousEvents: i2.allowSynchronousEvents, generateMask: i2.generateMask, maxPayload: i2.maxPayload, skipUTF8Validation: i2.skipUTF8Validation });
        }), i2.finishRequest ? i2.finishRequest(p4, t2) : p4.end();
      }
      function ue3(t2, e) {
        t2._readyState = d2.CLOSING, t2._errorEmitted = true, t2.emit("error", e), t2.emitClose();
      }
      function er(t2) {
        return t2.path = t2.socketPath, Ct.connect(t2);
      }
      function tr(t2) {
        return t2.path = void 0, !t2.servername && t2.servername !== "" && (t2.servername = Ct.isIP(t2.host) ? "" : t2.host), As.connect(t2);
      }
      function E4(t2, e, s2) {
        t2._readyState = d2.CLOSING;
        let r = new Error(s2);
        Error.captureStackTrace(r, E4), e.setHeader ? (e[Nt] = true, e.abort(), e.socket && !e.socket.destroyed && e.socket.destroy(), __Process$3.nextTick(ue3, t2, r)) : (e.destroy(r), e.once("error", t2.emit.bind(t2, "error")), e.once("close", t2.emitClose.bind(t2)));
      }
      function De(t2, e, s2) {
        if (e) {
          let r = $s(e) ? e.size : Zs(e).length;
          t2._socket ? t2._sender._bufferedBytes += r : t2._bufferedAmount += r;
        }
        if (s2) {
          let r = new Error(`WebSocket is not open: readyState ${t2.readyState} (${L2[t2.readyState]})`);
          __Process$3.nextTick(s2, r);
        }
      }
      function sr(t2, e) {
        let s2 = this[y4];
        s2._closeFrameReceived = true, s2._closeMessage = e, s2._closeCode = t2, s2._socket[y4] !== void 0 && (s2._socket.removeListener("data", de4), __Process$3.nextTick(Bt, s2._socket), t2 === 1005 ? s2.close() : s2.close(t2, e));
      }
      function rr() {
        let t2 = this[y4];
        t2.isPaused || t2._socket.resume();
      }
      function ir(t2) {
        let e = this[y4];
        e._socket[y4] !== void 0 && (e._socket.removeListener("data", de4), __Process$3.nextTick(Bt, e._socket), e.close(t2[zs])), e._errorEmitted || (e._errorEmitted = true, e.emit("error", t2));
      }
      function kt() {
        this[y4].emitClose();
      }
      function nr(t2, e) {
        this[y4].emit("message", t2, e);
      }
      function or(t2) {
        let e = this[y4];
        e._autoPong && e.pong(t2, !this._isServer, Lt), e.emit("ping", t2);
      }
      function ar(t2) {
        this[y4].emit("pong", t2);
      }
      function Bt(t2) {
        t2.resume();
      }
      function fr(t2) {
        let e = this[y4];
        e.readyState !== d2.CLOSED && (e.readyState === d2.OPEN && (e._readyState = d2.CLOSING, Rt(e)), this._socket.end(), e._errorEmitted || (e._errorEmitted = true, e.emit("error", t2)));
      }
      function Rt(t2) {
        t2._closeTimer = setTimeout(t2._socket.destroy.bind(t2._socket), Qs);
      }
      function Ut() {
        let t2 = this[y4];
        this.removeListener("close", Ut), this.removeListener("data", de4), this.removeListener("end", It), t2._readyState = d2.CLOSING;
        let e;
        !this._readableState.endEmitted && !t2._closeFrameReceived && !t2._receiver._writableState.errorEmitted && (e = t2._socket.read()) !== null && t2._receiver.write(e), t2._receiver.end(), this[y4] = void 0, clearTimeout(t2._closeTimer), t2._receiver._writableState.finished || t2._receiver._writableState.errorEmitted ? t2.emitClose() : (t2._receiver.on("error", kt), t2._receiver.on("finish", kt));
      }
      function de4(t2) {
        this[y4]._receiver.write(t2) || this.pause();
      }
      function It() {
        let t2 = this[y4];
        t2._readyState = d2.CLOSING, t2._receiver.end(), this.end();
      }
      function Dt() {
        let t2 = this[y4];
        this.removeListener("error", Dt), this.on("error", Lt), t2 && (t2._readyState = d2.CLOSING, this.destroy());
      }
    });
    Wt = x2((Ar, At) => {
      "use strict";
      var { tokenChars: lr } = W3();
      function hr(t2) {
        let e = /* @__PURE__ */ new Set(), s2 = -1, r = -1, i2 = 0;
        for (i2; i2 < t2.length; i2++) {
          let o = t2.charCodeAt(i2);
          if (r === -1 && lr[o] === 1) s2 === -1 && (s2 = i2);
          else if (i2 !== 0 && (o === 32 || o === 9)) r === -1 && s2 !== -1 && (r = i2);
          else if (o === 44) {
            if (s2 === -1) throw new SyntaxError(`Unexpected character at index ${i2}`);
            r === -1 && (r = i2);
            let f3 = t2.slice(s2, r);
            if (e.has(f3)) throw new SyntaxError(`The "${f3}" subprotocol is duplicated`);
            e.add(f3), s2 = r = -1;
          } else throw new SyntaxError(`Unexpected character at index ${i2}`);
        }
        if (s2 === -1 || r !== -1) throw new SyntaxError("Unexpected end of input");
        let n2 = t2.slice(s2, i2);
        if (e.has(n2)) throw new SyntaxError(`The "${n2}" subprotocol is duplicated`);
        return e.add(n2), e;
      }
      At.exports = { parse: hr };
    });
    zt = x2((Fr, Vt) => {
      "use strict";
      var cr = m3("events"), _e2 = m3("http"), { Duplex: Wr } = m3("stream"), { createHash: ur } = m3("crypto"), Ft = Be(), I2 = X3(), dr = Wt(), _r = Me(), { GUID: pr, kWebSocket: mr } = T4(), gr = /^[+/0-9A-Za-z]{22}==$/, qt = 0, Gt = 1, jt = 2, Ae = class extends cr {
        constructor(e, s2) {
          if (super(), e = { allowSynchronousEvents: true, autoPong: true, maxPayload: 100 * 1024 * 1024, skipUTF8Validation: false, perMessageDeflate: false, handleProtocols: null, clientTracking: true, verifyClient: null, noServer: false, backlog: null, server: null, host: null, path: null, port: null, WebSocket: _r, ...e }, e.port == null && !e.server && !e.noServer || e.port != null && (e.server || e.noServer) || e.server && e.noServer) throw new TypeError('One and only one of the "port", "server", or "noServer" options must be specified');
          if (e.port != null ? (this._server = _e2.createServer((r, i2) => {
            let n2 = _e2.STATUS_CODES[426];
            i2.writeHead(426, { "Content-Length": n2.length, "Content-Type": "text/plain" }), i2.end(n2);
          }), this._server.listen(e.port, e.host, e.backlog, s2)) : e.server && (this._server = e.server), this._server) {
            let r = this.emit.bind(this, "connection");
            this._removeListeners = yr(this._server, { listening: this.emit.bind(this, "listening"), error: this.emit.bind(this, "error"), upgrade: (i2, n2, o) => {
              this.handleUpgrade(i2, n2, o, r);
            } });
          }
          e.perMessageDeflate === true && (e.perMessageDeflate = {}), e.clientTracking && (this.clients = /* @__PURE__ */ new Set(), this._shouldEmitClose = false), this.options = e, this._state = qt;
        }
        address() {
          if (this.options.noServer) throw new Error('The server is operating in "noServer" mode');
          return this._server ? this._server.address() : null;
        }
        close(e) {
          if (this._state === jt) {
            e && this.once("close", () => {
              e(new Error("The server is not running"));
            }), __Process$3.nextTick(ee4, this);
            return;
          }
          if (e && this.once("close", e), this._state !== Gt) if (this._state = Gt, this.options.noServer || this.options.server) this._server && (this._removeListeners(), this._removeListeners = this._server = null), this.clients ? this.clients.size ? this._shouldEmitClose = true : __Process$3.nextTick(ee4, this) : __Process$3.nextTick(ee4, this);
          else {
            let s2 = this._server;
            this._removeListeners(), this._removeListeners = this._server = null, s2.close(() => {
              ee4(this);
            });
          }
        }
        shouldHandle(e) {
          if (this.options.path) {
            let s2 = e.url.indexOf("?");
            if ((s2 !== -1 ? e.url.slice(0, s2) : e.url) !== this.options.path) return false;
          }
          return true;
        }
        handleUpgrade(e, s2, r, i2) {
          s2.on("error", $t);
          let n2 = e.headers["sec-websocket-key"], o = e.headers.upgrade, f3 = +e.headers["sec-websocket-version"];
          if (e.method !== "GET") {
            D2(this, e, s2, 405, "Invalid HTTP method");
            return;
          }
          if (o === void 0 || o.toLowerCase() !== "websocket") {
            D2(this, e, s2, 400, "Invalid Upgrade header");
            return;
          }
          if (n2 === void 0 || !gr.test(n2)) {
            D2(this, e, s2, 400, "Missing or invalid Sec-WebSocket-Key header");
            return;
          }
          if (f3 !== 8 && f3 !== 13) {
            D2(this, e, s2, 400, "Missing or invalid Sec-WebSocket-Version header");
            return;
          }
          if (!this.shouldHandle(e)) {
            te2(s2, 400);
            return;
          }
          let l6 = e.headers["sec-websocket-protocol"], a5 = /* @__PURE__ */ new Set();
          if (l6 !== void 0) try {
            a5 = dr.parse(l6);
          } catch {
            D2(this, e, s2, 400, "Invalid Sec-WebSocket-Protocol header");
            return;
          }
          let h3 = e.headers["sec-websocket-extensions"], c5 = {};
          if (this.options.perMessageDeflate && h3 !== void 0) {
            let _4 = new I2(this.options.perMessageDeflate, true, this.options.maxPayload);
            try {
              let g5 = Ft.parse(h3);
              g5[I2.extensionName] && (_4.accept(g5[I2.extensionName]), c5[I2.extensionName] = _4);
            } catch {
              D2(this, e, s2, 400, "Invalid or unacceptable Sec-WebSocket-Extensions header");
              return;
            }
          }
          if (this.options.verifyClient) {
            let _4 = { origin: e.headers[`${f3 === 8 ? "sec-websocket-origin" : "origin"}`], secure: !!(e.socket.authorized || e.socket.encrypted), req: e };
            if (this.options.verifyClient.length === 2) {
              this.options.verifyClient(_4, (g5, p4, u, S) => {
                if (!g5) return te2(s2, p4 || 401, u, S);
                this.completeUpgrade(c5, n2, a5, e, s2, r, i2);
              });
              return;
            }
            if (!this.options.verifyClient(_4)) return te2(s2, 401);
          }
          this.completeUpgrade(c5, n2, a5, e, s2, r, i2);
        }
        completeUpgrade(e, s2, r, i2, n2, o, f3) {
          if (!n2.readable || !n2.writable) return n2.destroy();
          if (n2[mr]) throw new Error("server.handleUpgrade() was called more than once with the same socket, possibly due to a misconfiguration");
          if (this._state > qt) return te2(n2, 503);
          let a5 = ["HTTP/1.1 101 Switching Protocols", "Upgrade: websocket", "Connection: Upgrade", `Sec-WebSocket-Accept: ${ur("sha1").update(s2 + pr).digest("base64")}`], h3 = new this.options.WebSocket(null, void 0, this.options);
          if (r.size) {
            let c5 = this.options.handleProtocols ? this.options.handleProtocols(r, i2) : r.values().next().value;
            c5 && (a5.push(`Sec-WebSocket-Protocol: ${c5}`), h3._protocol = c5);
          }
          if (e[I2.extensionName]) {
            let c5 = e[I2.extensionName].params, _4 = Ft.format({ [I2.extensionName]: [c5] });
            a5.push(`Sec-WebSocket-Extensions: ${_4}`), h3._extensions = e;
          }
          this.emit("headers", a5, i2), n2.write(a5.concat(`\r
`).join(`\r
`)), n2.removeListener("error", $t), h3.setSocket(n2, o, { allowSynchronousEvents: this.options.allowSynchronousEvents, maxPayload: this.options.maxPayload, skipUTF8Validation: this.options.skipUTF8Validation }), this.clients && (this.clients.add(h3), h3.on("close", () => {
            this.clients.delete(h3), this._shouldEmitClose && !this.clients.size && __Process$3.nextTick(ee4, this);
          })), f3(h3, i2);
        }
      };
      Vt.exports = Ae;
      function yr(t2, e) {
        for (let s2 of Object.keys(e)) t2.on(s2, e[s2]);
        return function() {
          for (let r of Object.keys(e)) t2.removeListener(r, e[r]);
        };
      }
      function ee4(t2) {
        t2._state = jt, t2.emit("close");
      }
      function $t() {
        this.destroy();
      }
      function te2(t2, e, s2, r) {
        s2 = s2 || _e2.STATUS_CODES[e], r = { Connection: "close", "Content-Type": "text/html", "Content-Length": __Buffer$.byteLength(s2), ...r }, t2.once("finish", t2.destroy), t2.end(`HTTP/1.1 ${e} ${_e2.STATUS_CODES[e]}\r
` + Object.keys(r).map((i2) => `${i2}: ${r[i2]}`).join(`\r
`) + `\r
\r
` + s2);
      }
      function D2(t2, e, s2, r, i2) {
        if (t2.listenerCount("wsClientError")) {
          let n2 = new Error(i2);
          Error.captureStackTrace(n2, D2), t2.emit("wsClientError", n2, s2, e);
        } else te2(s2, r, i2);
      }
    });
    Sr = z2(ze(), 1);
    xr = z2(ke(), 1);
    Er = z2(Ne(), 1);
    Ht = z2(Me(), 1);
    vr = z2(zt(), 1);
    qr = Ht.default;
    export_Receiver = xr.default;
    export_Sender = Er.default;
    export_WebSocket = Ht.default;
    export_WebSocketServer = vr.default;
    export_createWebSocketStream = Sr.default;
  }
});

// https://esm.sh/v135/pyodide@0.26.4/denonext/pyodide.js
import __Process$4 from "node:process";
var g4 = ((e) => typeof __require < "u" ? __require : typeof Proxy < "u" ? new Proxy(e, { get: (t2, i2) => (typeof __require < "u" ? __require : t2)[i2] }) : e)(function(e) {
  if (typeof __require < "u") return __require.apply(this, arguments);
  throw Error('Dynamic require of "' + e + '" is not supported');
});
var le3 = Object.defineProperty;
var l5 = (e, t2) => le3(e, "name", { value: t2, configurable: true });
var U = ((e) => typeof g4 < "u" ? g4 : typeof Proxy < "u" ? new Proxy(e, { get: (t2, i2) => (typeof g4 < "u" ? g4 : t2)[i2] }) : e)(function(e) {
  if (typeof g4 < "u") return g4.apply(this, arguments);
  throw new Error('Dynamic require of "' + e + '" is not supported');
});
function M(e) {
  return !isNaN(parseFloat(e)) && isFinite(e);
}
l5(M, "_isNumber");
function w2(e) {
  return e.charAt(0).toUpperCase() + e.substring(1);
}
l5(w2, "_capitalize");
function _3(e) {
  return function() {
    return this[e];
  };
}
l5(_3, "_getter");
var F2 = ["isConstructor", "isEval", "isNative", "isToplevel"];
var O = ["columnNumber", "lineNumber"];
var k4 = ["fileName", "functionName", "source"];
var ce3 = ["args"];
var ue2 = ["evalOrigin"];
var x3 = F2.concat(O, k4, ce3, ue2);
function p3(e) {
  if (e) for (var t2 = 0; t2 < x3.length; t2++) e[x3[t2]] !== void 0 && this["set" + w2(x3[t2])](e[x3[t2]]);
}
l5(p3, "StackFrame");
p3.prototype = { getArgs: function() {
  return this.args;
}, setArgs: function(e) {
  if (Object.prototype.toString.call(e) !== "[object Array]") throw new TypeError("Args must be an Array");
  this.args = e;
}, getEvalOrigin: function() {
  return this.evalOrigin;
}, setEvalOrigin: function(e) {
  if (e instanceof p3) this.evalOrigin = e;
  else if (e instanceof Object) this.evalOrigin = new p3(e);
  else throw new TypeError("Eval Origin must be an Object or StackFrame");
}, toString: function() {
  var e = this.getFileName() || "", t2 = this.getLineNumber() || "", i2 = this.getColumnNumber() || "", a5 = this.getFunctionName() || "";
  return this.getIsEval() ? e ? "[eval] (" + e + ":" + t2 + ":" + i2 + ")" : "[eval]:" + t2 + ":" + i2 : a5 ? a5 + " (" + e + ":" + t2 + ":" + i2 + ")" : e + ":" + t2 + ":" + i2;
} };
p3.fromString = l5(function(e) {
  var t2 = e.indexOf("("), i2 = e.lastIndexOf(")"), a5 = e.substring(0, t2), o = e.substring(t2 + 1, i2).split(","), r = e.substring(i2 + 1);
  if (r.indexOf("@") === 0) var n2 = /@(.+?)(?::(\d+))?(?::(\d+))?$/.exec(r, ""), s2 = n2[1], c5 = n2[2], u = n2[3];
  return new p3({ functionName: a5, args: o || void 0, fileName: s2, lineNumber: c5 || void 0, columnNumber: u || void 0 });
}, "StackFrame$$fromString");
for (v4 = 0; v4 < F2.length; v4++) p3.prototype["get" + w2(F2[v4])] = _3(F2[v4]), p3.prototype["set" + w2(F2[v4])] = /* @__PURE__ */ function(e) {
  return function(t2) {
    this[e] = !!t2;
  };
}(F2[v4]);
var v4;
for (b = 0; b < O.length; b++) p3.prototype["get" + w2(O[b])] = _3(O[b]), p3.prototype["set" + w2(O[b])] = /* @__PURE__ */ function(e) {
  return function(t2) {
    if (!M(t2)) throw new TypeError(e + " must be a Number");
    this[e] = Number(t2);
  };
}(O[b]);
var b;
for (E3 = 0; E3 < k4.length; E3++) p3.prototype["get" + w2(k4[E3])] = _3(k4[E3]), p3.prototype["set" + w2(k4[E3])] = /* @__PURE__ */ function(e) {
  return function(t2) {
    this[e] = String(t2);
  };
}(k4[E3]);
var E3;
var R2 = p3;
function C2() {
  var e = /^\s*at .*(\S+:\d+|\(native\))/m, t2 = /^(eval@)?(\[native code])?$/;
  return { parse: l5(function(i2) {
    if (i2.stack && i2.stack.match(e)) return this.parseV8OrIE(i2);
    if (i2.stack) return this.parseFFOrSafari(i2);
    throw new Error("Cannot parse given Error object");
  }, "ErrorStackParser$$parse"), extractLocation: l5(function(i2) {
    if (i2.indexOf(":") === -1) return [i2];
    var a5 = /(.+?)(?::(\d+))?(?::(\d+))?$/, o = a5.exec(i2.replace(/[()]/g, ""));
    return [o[1], o[2] || void 0, o[3] || void 0];
  }, "ErrorStackParser$$extractLocation"), parseV8OrIE: l5(function(i2) {
    var a5 = i2.stack.split(`
`).filter(function(o) {
      return !!o.match(e);
    }, this);
    return a5.map(function(o) {
      o.indexOf("(eval ") > -1 && (o = o.replace(/eval code/g, "eval").replace(/(\(eval at [^()]*)|(,.*$)/g, ""));
      var r = o.replace(/^\s+/, "").replace(/\(eval code/g, "(").replace(/^.*?\s+/, ""), n2 = r.match(/ (\(.+\)$)/);
      r = n2 ? r.replace(n2[0], "") : r;
      var s2 = this.extractLocation(n2 ? n2[1] : r), c5 = n2 && r || void 0, u = ["eval", "<anonymous>"].indexOf(s2[0]) > -1 ? void 0 : s2[0];
      return new R2({ functionName: c5, fileName: u, lineNumber: s2[1], columnNumber: s2[2], source: o });
    }, this);
  }, "ErrorStackParser$$parseV8OrIE"), parseFFOrSafari: l5(function(i2) {
    var a5 = i2.stack.split(`
`).filter(function(o) {
      return !o.match(t2);
    }, this);
    return a5.map(function(o) {
      if (o.indexOf(" > eval") > -1 && (o = o.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g, ":$1")), o.indexOf("@") === -1 && o.indexOf(":") === -1) return new R2({ functionName: o });
      var r = /((.*".+"[^@]*)?[^@]*)(?:@)/, n2 = o.match(r), s2 = n2 && n2[1] ? n2[1] : void 0, c5 = this.extractLocation(o.replace(r, ""));
      return new R2({ functionName: s2, fileName: c5[0], lineNumber: c5[1], columnNumber: c5[2], source: o });
    }, this);
  }, "ErrorStackParser$$parseFFOrSafari") };
}
l5(C2, "ErrorStackParser");
var de3 = new C2();
var fe3 = de3;
var y3 = typeof __Process$4 == "object" && typeof __Process$4.versions == "object" && typeof __Process$4.versions.node == "string" && !__Process$4.browser;
var H2 = y3 && typeof module < "u" && typeof module.exports < "u" && typeof U < "u" && "string" < "u";
var me3 = y3 && !H2;
var be = typeof globalThis.Bun < "u";
var pe3 = typeof Deno < "u";
var W4 = !y3 && !pe3;
var ye = W4 && typeof window == "object" && typeof document == "object" && typeof document.createElement == "function" && "sessionStorage" in window && typeof importScripts != "function";
var we = W4 && typeof importScripts == "function" && typeof self == "object";
var Ee = typeof navigator == "object" && typeof navigator.userAgent == "string" && navigator.userAgent.indexOf("Chrome") == -1 && navigator.userAgent.indexOf("Safari") > -1;
var q3;
var D;
var z3;
var A2;
var P;
async function I() {
  if (!y3 || (q3 = (await import("node:url")).default, A2 = await import("node:fs"), P = await import("node:fs/promises"), z3 = (await import("node:vm")).default, D = await import("node:path"), $3 = D.sep, typeof U < "u")) return;
  let e = A2, t2 = await import("node:crypto"), i2 = await Promise.resolve().then(() => (init_ws(), ws_exports)), a5 = await import("node:child_process"), o = { fs: e, crypto: t2, ws: i2, child_process: a5 };
  globalThis.require = function(r) {
    return o[r];
  };
}
l5(I, "initNodeModules");
function B2(e, t2) {
    console.debug(`node_resolvePath is:`,e,t2)
  return D.resolve(t2 || ".", e);
}
l5(B2, "node_resolvePath");
function V3(e, t2) {
    console.debug(`browser_resolvePath is:`,e,t2)
  return t2 === void 0 && (t2 = location), new URL(e, t2).toString();
}
l5(V3, "browser_resolvePath");
var T5;
y3 ? T5 = B2 : T5 = V3;
var $3;
y3 || ($3 = "/");
function Y2(e, t2) {
  return e.startsWith("file://") && (e = e.slice(7)), e.includes("://") ? { response: fetch(e) } : { binary: P.readFile(e).then((i2) => new Uint8Array(i2.buffer, i2.byteOffset, i2.byteLength)) };
}
l5(Y2, "node_getBinaryResponse");
function J(e, t2) {
  let i2 = new URL(e, location);
  return { response: fetch(i2, t2 ? { integrity: t2 } : {}) };
}
l5(J, "browser_getBinaryResponse");
var L;
y3 ? L = Y2 : L = J;
async function G(e, t2) {
  let { response: i2, binary: a5 } = L(e, t2);
  if (a5) return a5;
  let o = await i2;
  if (!o.ok) throw new Error(`Failed to load '${e}': request failed.`);
  return new Uint8Array(await o.arrayBuffer());
}
l5(G, "loadBinaryFile");
var N;
if (ye) N = l5(async (e) => await import(e), "loadScript");
else if (we) N = l5(async (e) => {
  try {
    globalThis.importScripts(e);
  } catch (t2) {
    if (t2 instanceof TypeError) await import(e);
    else throw t2;
  }
}, "loadScript");
else if (y3) N = K2;
else throw new Error("Cannot determine runtime environment");
async function K2(e) {
    console.debug(`e is:`,e)
  e.startsWith("file://") && (e = e.slice(7)), e.includes("://") ? z3.runInThisContext(await (await fetch(e)).text()) : await import(q3.pathToFileURL(e).href);
}
l5(K2, "nodeLoadScript");
async function Q3(e) {
  if (y3) {
    await I();
    let t2 = await P.readFile(e, { encoding: "utf8" });
    return JSON.parse(t2);
  } else return await (await fetch(e)).json();
}
l5(Q3, "loadLockFile");
async function X4() {
  if (H2) return "/_virtual/esm.sh/v135/pyodide@0.26.4/denonext";
  let e;
  try {
    throw new Error();
  } catch (a5) {
    e = a5;
  }
  let t2 = fe3.parse(e)[0].fileName;
  if (y3 && !t2.startsWith("file://") && (t2 = `file://${t2}`), me3) {
    let a5 = await import("node:path");
    return (await import("node:url")).fileURLToPath(a5.dirname(t2));
  }
  let i2 = t2.lastIndexOf($3);
  if (i2 === -1) throw new Error("Could not extract indexURL path from pyodide module location");
  return t2.slice(0, i2);
}
l5(X4, "calculateDirname");
function Z3(e) {
  let t2 = e.FS, i2 = e.FS.filesystems.MEMFS, a5 = e.PATH, o = { DIR_MODE: 16895, FILE_MODE: 33279, mount: function(r) {
    if (!r.opts.fileSystemHandle) throw new Error("opts.fileSystemHandle is required");
    return i2.mount.apply(null, arguments);
  }, syncfs: async (r, n2, s2) => {
    try {
      let c5 = o.getLocalSet(r), u = await o.getRemoteSet(r), d2 = n2 ? u : c5, m4 = n2 ? c5 : u;
      await o.reconcile(r, d2, m4), s2(null);
    } catch (c5) {
      s2(c5);
    }
  }, getLocalSet: (r) => {
    let n2 = /* @__PURE__ */ Object.create(null);
    function s2(d2) {
      return d2 !== "." && d2 !== "..";
    }
    l5(s2, "isRealDir");
    function c5(d2) {
      return (m4) => a5.join2(d2, m4);
    }
    l5(c5, "toAbsolute");
    let u = t2.readdir(r.mountpoint).filter(s2).map(c5(r.mountpoint));
    for (; u.length; ) {
      let d2 = u.pop(), m4 = t2.stat(d2);
      t2.isDir(m4.mode) && u.push.apply(u, t2.readdir(d2).filter(s2).map(c5(d2))), n2[d2] = { timestamp: m4.mtime, mode: m4.mode };
    }
    return { type: "local", entries: n2 };
  }, getRemoteSet: async (r) => {
    let n2 = /* @__PURE__ */ Object.create(null), s2 = await he(r.opts.fileSystemHandle);
    for (let [c5, u] of s2) c5 !== "." && (n2[a5.join2(r.mountpoint, c5)] = { timestamp: u.kind === "file" ? (await u.getFile()).lastModifiedDate : /* @__PURE__ */ new Date(), mode: u.kind === "file" ? o.FILE_MODE : o.DIR_MODE });
    return { type: "remote", entries: n2, handles: s2 };
  }, loadLocalEntry: (r) => {
    let n2 = t2.lookupPath(r).node, s2 = t2.stat(r);
    if (t2.isDir(s2.mode)) return { timestamp: s2.mtime, mode: s2.mode };
    if (t2.isFile(s2.mode)) return n2.contents = i2.getFileDataAsTypedArray(n2), { timestamp: s2.mtime, mode: s2.mode, contents: n2.contents };
    throw new Error("node type not supported");
  }, storeLocalEntry: (r, n2) => {
    if (t2.isDir(n2.mode)) t2.mkdirTree(r, n2.mode);
    else if (t2.isFile(n2.mode)) t2.writeFile(r, n2.contents, { canOwn: true });
    else throw new Error("node type not supported");
    t2.chmod(r, n2.mode), t2.utime(r, n2.timestamp, n2.timestamp);
  }, removeLocalEntry: (r) => {
    var n2 = t2.stat(r);
    t2.isDir(n2.mode) ? t2.rmdir(r) : t2.isFile(n2.mode) && t2.unlink(r);
  }, loadRemoteEntry: async (r) => {
    if (r.kind === "file") {
      let n2 = await r.getFile();
      return { contents: new Uint8Array(await n2.arrayBuffer()), mode: o.FILE_MODE, timestamp: n2.lastModifiedDate };
    } else {
      if (r.kind === "directory") return { mode: o.DIR_MODE, timestamp: /* @__PURE__ */ new Date() };
      throw new Error("unknown kind: " + r.kind);
    }
  }, storeRemoteEntry: async (r, n2, s2) => {
    let c5 = r.get(a5.dirname(n2)), u = t2.isFile(s2.mode) ? await c5.getFileHandle(a5.basename(n2), { create: true }) : await c5.getDirectoryHandle(a5.basename(n2), { create: true });
    if (u.kind === "file") {
      let d2 = await u.createWritable();
      await d2.write(s2.contents), await d2.close();
    }
    r.set(n2, u);
  }, removeRemoteEntry: async (r, n2) => {
    await r.get(a5.dirname(n2)).removeEntry(a5.basename(n2)), r.delete(n2);
  }, reconcile: async (r, n2, s2) => {
    let c5 = 0, u = [];
    Object.keys(n2.entries).forEach(function(f3) {
      let h3 = n2.entries[f3], S = s2.entries[f3];
      (!S || t2.isFile(h3.mode) && h3.timestamp.getTime() > S.timestamp.getTime()) && (u.push(f3), c5++);
    }), u.sort();
    let d2 = [];
    if (Object.keys(s2.entries).forEach(function(f3) {
      n2.entries[f3] || (d2.push(f3), c5++);
    }), d2.sort().reverse(), !c5) return;
    let m4 = n2.type === "remote" ? n2.handles : s2.handles;
    for (let f3 of u) {
      let h3 = a5.normalize(f3.replace(r.mountpoint, "/")).substring(1);
      if (s2.type === "local") {
        let S = m4.get(h3), se = await o.loadRemoteEntry(S);
        o.storeLocalEntry(f3, se);
      } else {
        let S = o.loadLocalEntry(f3);
        await o.storeRemoteEntry(m4, h3, S);
      }
    }
    for (let f3 of d2) if (s2.type === "local") o.removeLocalEntry(f3);
    else {
      let h3 = a5.normalize(f3.replace(r.mountpoint, "/")).substring(1);
      await o.removeRemoteEntry(m4, h3);
    }
  } };
  e.FS.filesystems.NATIVEFS_ASYNC = o;
}
l5(Z3, "initializeNativeFS");
var he = l5(async (e) => {
  let t2 = [];
  async function i2(o) {
    for await (let r of o.values()) t2.push(r), r.kind === "directory" && await i2(r);
  }
  l5(i2, "collect"), await i2(e);
  let a5 = /* @__PURE__ */ new Map();
  a5.set(".", e);
  for (let o of t2) {
    let r = (await e.resolve(o)).join("/");
    a5.set(r, o);
  }
  return a5;
}, "getFsHandles");
function ee3(e) {
  let t2 = { noImageDecoding: true, noAudioDecoding: true, noWasmDecoding: false, preRun: oe(e), quit(i2, a5) {
    throw t2.exited = { status: i2, toThrow: a5 }, a5;
  }, print: e.stdout, printErr: e.stderr, arguments: e.args, API: { config: e }, locateFile: (i2) => e.indexURL + i2, instantiateWasm: ae3(e.indexURL) };
  return t2;
}
l5(ee3, "createSettings");
function te(e) {
  return function(t2) {
    let i2 = "/";
    try {
      t2.FS.mkdirTree(e);
    } catch (a5) {
      console.error(`Error occurred while making a home directory '${e}':`), console.error(a5), console.error(`Using '${i2}' for a home directory instead`), e = i2;
    }
    t2.FS.chdir(e);
  };
}
l5(te, "createHomeDirectory");
function re2(e) {
  return function(t2) {
    Object.assign(t2.ENV, e);
  };
}
l5(re2, "setEnvironment");
function ie(e) {
  return (t2) => {
    for (let i2 of e) t2.FS.mkdirTree(i2), t2.FS.mount(t2.FS.filesystems.NODEFS, { root: i2 }, i2);
  };
}
l5(ie, "mountLocalDirectories");
function ne(e) {
  let t2 = G(e);
  return (i2) => {
    let a5 = i2._py_version_major(), o = i2._py_version_minor();
    i2.FS.mkdirTree("/lib"), i2.FS.mkdirTree(`/lib/python${a5}.${o}/site-packages`), i2.addRunDependency("install-stdlib"), t2.then((r) => {
      i2.FS.writeFile(`/lib/python${a5}${o}.zip`, r);
    }).catch((r) => {
      console.error("Error occurred while installing the standard library:"), console.error(r);
    }).finally(() => {
      i2.removeRunDependency("install-stdlib");
    });
  };
}
l5(ne, "installStdlib");
function oe(e) {
  let t2;
  return e.stdLibURL != null ? t2 = e.stdLibURL : t2 = e.indexURL + "python_stdlib.zip", [ne(t2), te(e.env.HOME), re2(e.env), ie(e._node_mounts), Z3];
}
l5(oe, "getFileSystemInitializationFuncs");
function ae3(e) {
  let { binary: t2, response: i2 } = L(e + "pyodide.asm.wasm");
  return function(a5, o) {
    return async function() {
      try {
        let r;
        i2 ? r = await WebAssembly.instantiateStreaming(i2, a5) : r = await WebAssembly.instantiate(await t2, a5);
        let { instance: n2, module: s2 } = r;
        typeof WasmOffsetConverter < "u" && (wasmOffsetConverter = new WasmOffsetConverter(wasmBinary, s2)), o(n2, s2);
      } catch (r) {
        console.warn("wasm instantiation failed!"), console.warn(r);
      }
    }(), {};
  };
}
l5(ae3, "getInstantiateWasmFunc");
var j3 = "0.26.4";
async function ge(e = {}) {
  var t2, i2;
  await I();
  let a5 = e.indexURL || await X4();
  a5 = T5(a5), a5.endsWith("/") || (a5 += "/"), e.indexURL = a5;
  let o = { fullStdLib: false, jsglobals: globalThis, stdin: globalThis.prompt ? globalThis.prompt : void 0, lockFileURL: a5 + "pyodide-lock.json", args: [], _node_mounts: [], env: {}, packageCacheDir: a5, packages: [], enableRunUntilComplete: false, checkAPIVersion: true }, r = Object.assign(o, e);
  (t2 = r.env).HOME ?? (t2.HOME = "/home/pyodide"), (i2 = r.env).PYTHONINSPECT ?? (i2.PYTHONINSPECT = "1");
  let n2 = ee3(r), s2 = n2.API;
  if (s2.lockFilePromise = Q3(r.lockFileURL), typeof _createPyodideModule != "function") {
    console.debug(`r.indexURL is:`,r.indexURL)
    let f3 = `${r.indexURL}pyodide.asm.js`;
    await N(f3);
  }
  let c5;
  if (e._loadSnapshot) {
    let f3 = await e._loadSnapshot;
    ArrayBuffer.isView(f3) ? c5 = f3 : c5 = new Uint8Array(f3), n2.noInitialRun = true, n2.INITIAL_MEMORY = c5.length;
  }
  let u = await _createPyodideModule(n2);
  if (n2.exited) throw n2.exited.toThrow;
  if (e.pyproxyToStringRepr && s2.setPyProxyToStringMethod(true), s2.version !== j3 && r.checkAPIVersion) throw new Error(`Pyodide version does not match: '${j3}' <==> '${s2.version}'. If you updated the Pyodide version, make sure you also updated the 'indexURL' parameter passed to loadPyodide.`);
  u.locateFile = (f3) => {
    throw new Error("Didn't expect to load any more file_packager files!");
  };
  let d2;
  c5 && (d2 = s2.restoreSnapshot(c5));
  let m4 = s2.finalizeBootstrap(d2);
  return s2.sys.path.insert(0, s2.config.env.HOME), m4.version.includes("dev") || s2.setCdnUrl(`https://cdn.jsdelivr.net/pyodide/v${m4.version}/full/`), s2._pyodide.set_excepthook(), await s2.packageIndexReady, s2.initializeStreams(r.stdin, r.stdout, r.stderr), m4;
}
l5(ge, "loadPyodide");
export {
  ge as loadPyodide,
  j3 as version
};
