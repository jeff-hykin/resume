var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// https://esm.sh/v135/bn.js@5.2.1/denonext/bn.mjs
var bn_exports = {};
__export(bn_exports, {
  BN: () => Ri,
  default: () => Zi
});
import * as __0$ from "node:buffer";
var require2 = (n5) => {
  const e = (m16) => typeof m16.default < "u" ? m16.default : m16, c10 = (m16) => Object.assign({}, m16);
  switch (n5) {
    case "buffer":
      return e(__0$);
    default:
      throw new Error('module "' + n5 + '" not found');
  }
};
var xi = Object.create;
var Et = Object.defineProperty;
var _i = Object.getOwnPropertyDescriptor;
var bi = Object.getOwnPropertyNames;
var Ai = Object.getPrototypeOf;
var Bi = Object.prototype.hasOwnProperty;
var Si = ((y10) => typeof require2 < "u" ? require2 : typeof Proxy < "u" ? new Proxy(y10, { get: (_12, v14) => (typeof require2 < "u" ? require2 : _12)[v14] }) : y10)(function(y10) {
  if (typeof require2 < "u")
    return require2.apply(this, arguments);
  throw Error('Dynamic require of "' + y10 + '" is not supported');
});
var ki = (y10, _12) => () => (_12 || y10((_12 = { exports: {} }).exports, _12), _12.exports);
var qi = (y10, _12) => {
  for (var v14 in _12)
    Et(y10, v14, { get: _12[v14], enumerable: true });
};
var zt = (y10, _12, v14, nt) => {
  if (_12 && typeof _12 == "object" || typeof _12 == "function")
    for (let l11 of bi(_12))
      !Bi.call(y10, l11) && l11 !== v14 && Et(y10, l11, { get: () => _12[l11], enumerable: !(nt = _i(_12, l11)) || nt.enumerable });
  return y10;
};
var lt = (y10, _12, v14) => (zt(y10, _12, "default"), v14 && zt(v14, _12, "default"));
var di = (y10, _12, v14) => (v14 = y10 != null ? xi(Ai(y10)) : {}, zt(_12 || !y10 || !y10.__esModule ? Et(v14, "default", { value: y10, enumerable: true }) : v14, y10));
var Kt = ki((mi3, Ot3) => {
  (function(y10, _12) {
    "use strict";
    function v14(s10, t) {
      if (!s10)
        throw new Error(t || "Assertion failed");
    }
    function nt(s10, t) {
      s10.super_ = t;
      var r2 = function() {
      };
      r2.prototype = t.prototype, s10.prototype = new r2(), s10.prototype.constructor = s10;
    }
    function l11(s10, t, r2) {
      if (l11.isBN(s10))
        return s10;
      this.negative = 0, this.words = null, this.length = 0, this.red = null, s10 !== null && ((t === "le" || t === "be") && (r2 = t, t = 10), this._init(s10 || 0, t || 10, r2 || "be"));
    }
    typeof y10 == "object" ? y10.exports = l11 : _12.BN = l11, l11.BN = l11, l11.wordSize = 26;
    var ut;
    try {
      typeof window < "u" && typeof window.Buffer < "u" ? ut = window.Buffer : ut = Si("buffer").Buffer;
    } catch {
    }
    l11.isBN = function(t) {
      return t instanceof l11 ? true : t !== null && typeof t == "object" && t.constructor.wordSize === l11.wordSize && Array.isArray(t.words);
    }, l11.max = function(t, r2) {
      return t.cmp(r2) > 0 ? t : r2;
    }, l11.min = function(t, r2) {
      return t.cmp(r2) < 0 ? t : r2;
    }, l11.prototype._init = function(t, r2, e) {
      if (typeof t == "number")
        return this._initNumber(t, r2, e);
      if (typeof t == "object")
        return this._initArray(t, r2, e);
      r2 === "hex" && (r2 = 16), v14(r2 === (r2 | 0) && r2 >= 2 && r2 <= 36), t = t.toString().replace(/\s+/g, "");
      var h14 = 0;
      t[0] === "-" && (h14++, this.negative = 1), h14 < t.length && (r2 === 16 ? this._parseHex(t, h14, e) : (this._parseBase(t, r2, h14), e === "le" && this._initArray(this.toArray(), r2, e)));
    }, l11.prototype._initNumber = function(t, r2, e) {
      t < 0 && (this.negative = 1, t = -t), t < 67108864 ? (this.words = [t & 67108863], this.length = 1) : t < 4503599627370496 ? (this.words = [t & 67108863, t / 67108864 & 67108863], this.length = 2) : (v14(t < 9007199254740992), this.words = [t & 67108863, t / 67108864 & 67108863, 1], this.length = 3), e === "le" && this._initArray(this.toArray(), r2, e);
    }, l11.prototype._initArray = function(t, r2, e) {
      if (v14(typeof t.length == "number"), t.length <= 0)
        return this.words = [0], this.length = 1, this;
      this.length = Math.ceil(t.length / 3), this.words = new Array(this.length);
      for (var h14 = 0; h14 < this.length; h14++)
        this.words[h14] = 0;
      var n5, a11, u13 = 0;
      if (e === "be")
        for (h14 = t.length - 1, n5 = 0; h14 >= 0; h14 -= 3)
          a11 = t[h14] | t[h14 - 1] << 8 | t[h14 - 2] << 16, this.words[n5] |= a11 << u13 & 67108863, this.words[n5 + 1] = a11 >>> 26 - u13 & 67108863, u13 += 24, u13 >= 26 && (u13 -= 26, n5++);
      else if (e === "le")
        for (h14 = 0, n5 = 0; h14 < t.length; h14 += 3)
          a11 = t[h14] | t[h14 + 1] << 8 | t[h14 + 2] << 16, this.words[n5] |= a11 << u13 & 67108863, this.words[n5 + 1] = a11 >>> 26 - u13 & 67108863, u13 += 24, u13 >= 26 && (u13 -= 26, n5++);
      return this._strip();
    };
    function Ft2(s10, t) {
      var r2 = s10.charCodeAt(t);
      if (r2 >= 48 && r2 <= 57)
        return r2 - 48;
      if (r2 >= 65 && r2 <= 70)
        return r2 - 55;
      if (r2 >= 97 && r2 <= 102)
        return r2 - 87;
      v14(false, "Invalid character in " + s10);
    }
    function Ht3(s10, t, r2) {
      var e = Ft2(s10, r2);
      return r2 - 1 >= t && (e |= Ft2(s10, r2 - 1) << 4), e;
    }
    l11.prototype._parseHex = function(t, r2, e) {
      this.length = Math.ceil((t.length - r2) / 6), this.words = new Array(this.length);
      for (var h14 = 0; h14 < this.length; h14++)
        this.words[h14] = 0;
      var n5 = 0, a11 = 0, u13;
      if (e === "be")
        for (h14 = t.length - 1; h14 >= r2; h14 -= 2)
          u13 = Ht3(t, r2, h14) << n5, this.words[a11] |= u13 & 67108863, n5 >= 18 ? (n5 -= 18, a11 += 1, this.words[a11] |= u13 >>> 26) : n5 += 8;
      else {
        var f7 = t.length - r2;
        for (h14 = f7 % 2 === 0 ? r2 + 1 : r2; h14 < t.length; h14 += 2)
          u13 = Ht3(t, r2, h14) << n5, this.words[a11] |= u13 & 67108863, n5 >= 18 ? (n5 -= 18, a11 += 1, this.words[a11] |= u13 >>> 26) : n5 += 8;
      }
      this._strip();
    };
    function Pt3(s10, t, r2, e) {
      for (var h14 = 0, n5 = 0, a11 = Math.min(s10.length, r2), u13 = t; u13 < a11; u13++) {
        var f7 = s10.charCodeAt(u13) - 48;
        h14 *= e, f7 >= 49 ? n5 = f7 - 49 + 10 : f7 >= 17 ? n5 = f7 - 17 + 10 : n5 = f7, v14(f7 >= 0 && n5 < e, "Invalid character"), h14 += n5;
      }
      return h14;
    }
    l11.prototype._parseBase = function(t, r2, e) {
      this.words = [0], this.length = 1;
      for (var h14 = 0, n5 = 1; n5 <= 67108863; n5 *= r2)
        h14++;
      h14--, n5 = n5 / r2 | 0;
      for (var a11 = t.length - e, u13 = a11 % h14, f7 = Math.min(a11, a11 - u13) + e, i6 = 0, o6 = e; o6 < f7; o6 += h14)
        i6 = Pt3(t, o6, o6 + h14, r2), this.imuln(n5), this.words[0] + i6 < 67108864 ? this.words[0] += i6 : this._iaddn(i6);
      if (u13 !== 0) {
        var d9 = 1;
        for (i6 = Pt3(t, o6, t.length, r2), o6 = 0; o6 < u13; o6++)
          d9 *= r2;
        this.imuln(d9), this.words[0] + i6 < 67108864 ? this.words[0] += i6 : this._iaddn(i6);
      }
      this._strip();
    }, l11.prototype.copy = function(t) {
      t.words = new Array(this.length);
      for (var r2 = 0; r2 < this.length; r2++)
        t.words[r2] = this.words[r2];
      t.length = this.length, t.negative = this.negative, t.red = this.red;
    };
    function Dt3(s10, t) {
      s10.words = t.words, s10.length = t.length, s10.negative = t.negative, s10.red = t.red;
    }
    if (l11.prototype._move = function(t) {
      Dt3(t, this);
    }, l11.prototype.clone = function() {
      var t = new l11(null);
      return this.copy(t), t;
    }, l11.prototype._expand = function(t) {
      for (; this.length < t; )
        this.words[this.length++] = 0;
      return this;
    }, l11.prototype._strip = function() {
      for (; this.length > 1 && this.words[this.length - 1] === 0; )
        this.length--;
      return this._normSign();
    }, l11.prototype._normSign = function() {
      return this.length === 1 && this.words[0] === 0 && (this.negative = 0), this;
    }, typeof Symbol < "u" && typeof Symbol.for == "function")
      try {
        l11.prototype[Symbol.for("nodejs.util.inspect.custom")] = dt;
      } catch {
        l11.prototype.inspect = dt;
      }
    else
      l11.prototype.inspect = dt;
    function dt() {
      return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
    }
    var Ut3 = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"], gi = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], ci2 = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];
    l11.prototype.toString = function(t, r2) {
      t = t || 10, r2 = r2 | 0 || 1;
      var e;
      if (t === 16 || t === "hex") {
        e = "";
        for (var h14 = 0, n5 = 0, a11 = 0; a11 < this.length; a11++) {
          var u13 = this.words[a11], f7 = ((u13 << h14 | n5) & 16777215).toString(16);
          n5 = u13 >>> 24 - h14 & 16777215, h14 += 2, h14 >= 26 && (h14 -= 26, a11--), n5 !== 0 || a11 !== this.length - 1 ? e = Ut3[6 - f7.length] + f7 + e : e = f7 + e;
        }
        for (n5 !== 0 && (e = n5.toString(16) + e); e.length % r2 !== 0; )
          e = "0" + e;
        return this.negative !== 0 && (e = "-" + e), e;
      }
      if (t === (t | 0) && t >= 2 && t <= 36) {
        var i6 = gi[t], o6 = ci2[t];
        e = "";
        var d9 = this.clone();
        for (d9.negative = 0; !d9.isZero(); ) {
          var m16 = d9.modrn(o6).toString(t);
          d9 = d9.idivn(o6), d9.isZero() ? e = m16 + e : e = Ut3[i6 - m16.length] + m16 + e;
        }
        for (this.isZero() && (e = "0" + e); e.length % r2 !== 0; )
          e = "0" + e;
        return this.negative !== 0 && (e = "-" + e), e;
      }
      v14(false, "Base should be between 2 and 36");
    }, l11.prototype.toNumber = function() {
      var t = this.words[0];
      return this.length === 2 ? t += this.words[1] * 67108864 : this.length === 3 && this.words[2] === 1 ? t += 4503599627370496 + this.words[1] * 67108864 : this.length > 2 && v14(false, "Number can only safely store up to 53 bits"), this.negative !== 0 ? -t : t;
    }, l11.prototype.toJSON = function() {
      return this.toString(16, 2);
    }, ut && (l11.prototype.toBuffer = function(t, r2) {
      return this.toArrayLike(ut, t, r2);
    }), l11.prototype.toArray = function(t, r2) {
      return this.toArrayLike(Array, t, r2);
    };
    var wi2 = function(t, r2) {
      return t.allocUnsafe ? t.allocUnsafe(r2) : new t(r2);
    };
    l11.prototype.toArrayLike = function(t, r2, e) {
      this._strip();
      var h14 = this.byteLength(), n5 = e || Math.max(1, h14);
      v14(h14 <= n5, "byte array longer than desired length"), v14(n5 > 0, "Requested array length <= 0");
      var a11 = wi2(t, n5), u13 = r2 === "le" ? "LE" : "BE";
      return this["_toArrayLike" + u13](a11, h14), a11;
    }, l11.prototype._toArrayLikeLE = function(t, r2) {
      for (var e = 0, h14 = 0, n5 = 0, a11 = 0; n5 < this.length; n5++) {
        var u13 = this.words[n5] << a11 | h14;
        t[e++] = u13 & 255, e < t.length && (t[e++] = u13 >> 8 & 255), e < t.length && (t[e++] = u13 >> 16 & 255), a11 === 6 ? (e < t.length && (t[e++] = u13 >> 24 & 255), h14 = 0, a11 = 0) : (h14 = u13 >>> 24, a11 += 2);
      }
      if (e < t.length)
        for (t[e++] = h14; e < t.length; )
          t[e++] = 0;
    }, l11.prototype._toArrayLikeBE = function(t, r2) {
      for (var e = t.length - 1, h14 = 0, n5 = 0, a11 = 0; n5 < this.length; n5++) {
        var u13 = this.words[n5] << a11 | h14;
        t[e--] = u13 & 255, e >= 0 && (t[e--] = u13 >> 8 & 255), e >= 0 && (t[e--] = u13 >> 16 & 255), a11 === 6 ? (e >= 0 && (t[e--] = u13 >> 24 & 255), h14 = 0, a11 = 0) : (h14 = u13 >>> 24, a11 += 2);
      }
      if (e >= 0)
        for (t[e--] = h14; e >= 0; )
          t[e--] = 0;
    }, Math.clz32 ? l11.prototype._countBits = function(t) {
      return 32 - Math.clz32(t);
    } : l11.prototype._countBits = function(t) {
      var r2 = t, e = 0;
      return r2 >= 4096 && (e += 13, r2 >>>= 13), r2 >= 64 && (e += 7, r2 >>>= 7), r2 >= 8 && (e += 4, r2 >>>= 4), r2 >= 2 && (e += 2, r2 >>>= 2), e + r2;
    }, l11.prototype._zeroBits = function(t) {
      if (t === 0)
        return 26;
      var r2 = t, e = 0;
      return r2 & 8191 || (e += 13, r2 >>>= 13), r2 & 127 || (e += 7, r2 >>>= 7), r2 & 15 || (e += 4, r2 >>>= 4), r2 & 3 || (e += 2, r2 >>>= 2), r2 & 1 || e++, e;
    }, l11.prototype.bitLength = function() {
      var t = this.words[this.length - 1], r2 = this._countBits(t);
      return (this.length - 1) * 26 + r2;
    };
    function yi2(s10) {
      for (var t = new Array(s10.bitLength()), r2 = 0; r2 < t.length; r2++) {
        var e = r2 / 26 | 0, h14 = r2 % 26;
        t[r2] = s10.words[e] >>> h14 & 1;
      }
      return t;
    }
    l11.prototype.zeroBits = function() {
      if (this.isZero())
        return 0;
      for (var t = 0, r2 = 0; r2 < this.length; r2++) {
        var e = this._zeroBits(this.words[r2]);
        if (t += e, e !== 26)
          break;
      }
      return t;
    }, l11.prototype.byteLength = function() {
      return Math.ceil(this.bitLength() / 8);
    }, l11.prototype.toTwos = function(t) {
      return this.negative !== 0 ? this.abs().inotn(t).iaddn(1) : this.clone();
    }, l11.prototype.fromTwos = function(t) {
      return this.testn(t - 1) ? this.notn(t).iaddn(1).ineg() : this.clone();
    }, l11.prototype.isNeg = function() {
      return this.negative !== 0;
    }, l11.prototype.neg = function() {
      return this.clone().ineg();
    }, l11.prototype.ineg = function() {
      return this.isZero() || (this.negative ^= 1), this;
    }, l11.prototype.iuor = function(t) {
      for (; this.length < t.length; )
        this.words[this.length++] = 0;
      for (var r2 = 0; r2 < t.length; r2++)
        this.words[r2] = this.words[r2] | t.words[r2];
      return this._strip();
    }, l11.prototype.ior = function(t) {
      return v14((this.negative | t.negative) === 0), this.iuor(t);
    }, l11.prototype.or = function(t) {
      return this.length > t.length ? this.clone().ior(t) : t.clone().ior(this);
    }, l11.prototype.uor = function(t) {
      return this.length > t.length ? this.clone().iuor(t) : t.clone().iuor(this);
    }, l11.prototype.iuand = function(t) {
      var r2;
      this.length > t.length ? r2 = t : r2 = this;
      for (var e = 0; e < r2.length; e++)
        this.words[e] = this.words[e] & t.words[e];
      return this.length = r2.length, this._strip();
    }, l11.prototype.iand = function(t) {
      return v14((this.negative | t.negative) === 0), this.iuand(t);
    }, l11.prototype.and = function(t) {
      return this.length > t.length ? this.clone().iand(t) : t.clone().iand(this);
    }, l11.prototype.uand = function(t) {
      return this.length > t.length ? this.clone().iuand(t) : t.clone().iuand(this);
    }, l11.prototype.iuxor = function(t) {
      var r2, e;
      this.length > t.length ? (r2 = this, e = t) : (r2 = t, e = this);
      for (var h14 = 0; h14 < e.length; h14++)
        this.words[h14] = r2.words[h14] ^ e.words[h14];
      if (this !== r2)
        for (; h14 < r2.length; h14++)
          this.words[h14] = r2.words[h14];
      return this.length = r2.length, this._strip();
    }, l11.prototype.ixor = function(t) {
      return v14((this.negative | t.negative) === 0), this.iuxor(t);
    }, l11.prototype.xor = function(t) {
      return this.length > t.length ? this.clone().ixor(t) : t.clone().ixor(this);
    }, l11.prototype.uxor = function(t) {
      return this.length > t.length ? this.clone().iuxor(t) : t.clone().iuxor(this);
    }, l11.prototype.inotn = function(t) {
      v14(typeof t == "number" && t >= 0);
      var r2 = Math.ceil(t / 26) | 0, e = t % 26;
      this._expand(r2), e > 0 && r2--;
      for (var h14 = 0; h14 < r2; h14++)
        this.words[h14] = ~this.words[h14] & 67108863;
      return e > 0 && (this.words[h14] = ~this.words[h14] & 67108863 >> 26 - e), this._strip();
    }, l11.prototype.notn = function(t) {
      return this.clone().inotn(t);
    }, l11.prototype.setn = function(t, r2) {
      v14(typeof t == "number" && t >= 0);
      var e = t / 26 | 0, h14 = t % 26;
      return this._expand(e + 1), r2 ? this.words[e] = this.words[e] | 1 << h14 : this.words[e] = this.words[e] & ~(1 << h14), this._strip();
    }, l11.prototype.iadd = function(t) {
      var r2;
      if (this.negative !== 0 && t.negative === 0)
        return this.negative = 0, r2 = this.isub(t), this.negative ^= 1, this._normSign();
      if (this.negative === 0 && t.negative !== 0)
        return t.negative = 0, r2 = this.isub(t), t.negative = 1, r2._normSign();
      var e, h14;
      this.length > t.length ? (e = this, h14 = t) : (e = t, h14 = this);
      for (var n5 = 0, a11 = 0; a11 < h14.length; a11++)
        r2 = (e.words[a11] | 0) + (h14.words[a11] | 0) + n5, this.words[a11] = r2 & 67108863, n5 = r2 >>> 26;
      for (; n5 !== 0 && a11 < e.length; a11++)
        r2 = (e.words[a11] | 0) + n5, this.words[a11] = r2 & 67108863, n5 = r2 >>> 26;
      if (this.length = e.length, n5 !== 0)
        this.words[this.length] = n5, this.length++;
      else if (e !== this)
        for (; a11 < e.length; a11++)
          this.words[a11] = e.words[a11];
      return this;
    }, l11.prototype.add = function(t) {
      var r2;
      return t.negative !== 0 && this.negative === 0 ? (t.negative = 0, r2 = this.sub(t), t.negative ^= 1, r2) : t.negative === 0 && this.negative !== 0 ? (this.negative = 0, r2 = t.sub(this), this.negative = 1, r2) : this.length > t.length ? this.clone().iadd(t) : t.clone().iadd(this);
    }, l11.prototype.isub = function(t) {
      if (t.negative !== 0) {
        t.negative = 0;
        var r2 = this.iadd(t);
        return t.negative = 1, r2._normSign();
      } else if (this.negative !== 0)
        return this.negative = 0, this.iadd(t), this.negative = 1, this._normSign();
      var e = this.cmp(t);
      if (e === 0)
        return this.negative = 0, this.length = 1, this.words[0] = 0, this;
      var h14, n5;
      e > 0 ? (h14 = this, n5 = t) : (h14 = t, n5 = this);
      for (var a11 = 0, u13 = 0; u13 < n5.length; u13++)
        r2 = (h14.words[u13] | 0) - (n5.words[u13] | 0) + a11, a11 = r2 >> 26, this.words[u13] = r2 & 67108863;
      for (; a11 !== 0 && u13 < h14.length; u13++)
        r2 = (h14.words[u13] | 0) + a11, a11 = r2 >> 26, this.words[u13] = r2 & 67108863;
      if (a11 === 0 && u13 < h14.length && h14 !== this)
        for (; u13 < h14.length; u13++)
          this.words[u13] = h14.words[u13];
      return this.length = Math.max(this.length, u13), h14 !== this && (this.negative = 1), this._strip();
    }, l11.prototype.sub = function(t) {
      return this.clone().isub(t);
    };
    function Ct3(s10, t, r2) {
      r2.negative = t.negative ^ s10.negative;
      var e = s10.length + t.length | 0;
      r2.length = e, e = e - 1 | 0;
      var h14 = s10.words[0] | 0, n5 = t.words[0] | 0, a11 = h14 * n5, u13 = a11 & 67108863, f7 = a11 / 67108864 | 0;
      r2.words[0] = u13;
      for (var i6 = 1; i6 < e; i6++) {
        for (var o6 = f7 >>> 26, d9 = f7 & 67108863, m16 = Math.min(i6, t.length - 1), p12 = Math.max(0, i6 - s10.length + 1); p12 <= m16; p12++) {
          var M11 = i6 - p12 | 0;
          h14 = s10.words[M11] | 0, n5 = t.words[p12] | 0, a11 = h14 * n5 + d9, o6 += a11 / 67108864 | 0, d9 = a11 & 67108863;
        }
        r2.words[i6] = d9 | 0, f7 = o6 | 0;
      }
      return f7 !== 0 ? r2.words[i6] = f7 | 0 : r2.length--, r2._strip();
    }
    var Jt2 = function(t, r2, e) {
      var h14 = t.words, n5 = r2.words, a11 = e.words, u13 = 0, f7, i6, o6, d9 = h14[0] | 0, m16 = d9 & 8191, p12 = d9 >>> 13, M11 = h14[1] | 0, g15 = M11 & 8191, c10 = M11 >>> 13, ot2 = h14[2] | 0, w13 = ot2 & 8191, x13 = ot2 >>> 13, Xt2 = h14[3] | 0, A11 = Xt2 & 8191, B9 = Xt2 >>> 13, Yt2 = h14[4] | 0, S9 = Yt2 & 8191, k8 = Yt2 >>> 13, $t2 = h14[5] | 0, q12 = $t2 & 8191, R7 = $t2 >>> 13, jt3 = h14[6] | 0, L7 = jt3 & 8191, Z3 = jt3 >>> 13, ti = h14[7] | 0, N5 = ti & 8191, T4 = ti >>> 13, ii = h14[8] | 0, I8 = ii & 8191, z7 = ii >>> 13, ri = h14[9] | 0, E8 = ri & 8191, O9 = ri >>> 13, ei = n5[0] | 0, K7 = ei & 8191, F8 = ei >>> 13, hi = n5[1] | 0, H7 = hi & 8191, P9 = hi >>> 13, fi2 = n5[2] | 0, D9 = fi2 & 8191, U5 = fi2 >>> 13, ni = n5[3] | 0, C8 = ni & 8191, J4 = ni >>> 13, oi = n5[4] | 0, W4 = oi & 8191, G5 = oi >>> 13, si = n5[5] | 0, Q3 = si & 8191, V6 = si >>> 13, ai = n5[6] | 0, X4 = ai & 8191, Y4 = ai >>> 13, li2 = n5[7] | 0, $2 = li2 & 8191, j7 = li2 >>> 13, ui = n5[8] | 0, tt = ui & 8191, it = ui >>> 13, vi3 = n5[9] | 0, rt = vi3 & 8191, et = vi3 >>> 13;
      e.negative = t.negative ^ r2.negative, e.length = 19, f7 = Math.imul(m16, K7), i6 = Math.imul(m16, F8), i6 = i6 + Math.imul(p12, K7) | 0, o6 = Math.imul(p12, F8);
      var Mt2 = (u13 + f7 | 0) + ((i6 & 8191) << 13) | 0;
      u13 = (o6 + (i6 >>> 13) | 0) + (Mt2 >>> 26) | 0, Mt2 &= 67108863, f7 = Math.imul(g15, K7), i6 = Math.imul(g15, F8), i6 = i6 + Math.imul(c10, K7) | 0, o6 = Math.imul(c10, F8), f7 = f7 + Math.imul(m16, H7) | 0, i6 = i6 + Math.imul(m16, P9) | 0, i6 = i6 + Math.imul(p12, H7) | 0, o6 = o6 + Math.imul(p12, P9) | 0;
      var gt = (u13 + f7 | 0) + ((i6 & 8191) << 13) | 0;
      u13 = (o6 + (i6 >>> 13) | 0) + (gt >>> 26) | 0, gt &= 67108863, f7 = Math.imul(w13, K7), i6 = Math.imul(w13, F8), i6 = i6 + Math.imul(x13, K7) | 0, o6 = Math.imul(x13, F8), f7 = f7 + Math.imul(g15, H7) | 0, i6 = i6 + Math.imul(g15, P9) | 0, i6 = i6 + Math.imul(c10, H7) | 0, o6 = o6 + Math.imul(c10, P9) | 0, f7 = f7 + Math.imul(m16, D9) | 0, i6 = i6 + Math.imul(m16, U5) | 0, i6 = i6 + Math.imul(p12, D9) | 0, o6 = o6 + Math.imul(p12, U5) | 0;
      var ct = (u13 + f7 | 0) + ((i6 & 8191) << 13) | 0;
      u13 = (o6 + (i6 >>> 13) | 0) + (ct >>> 26) | 0, ct &= 67108863, f7 = Math.imul(A11, K7), i6 = Math.imul(A11, F8), i6 = i6 + Math.imul(B9, K7) | 0, o6 = Math.imul(B9, F8), f7 = f7 + Math.imul(w13, H7) | 0, i6 = i6 + Math.imul(w13, P9) | 0, i6 = i6 + Math.imul(x13, H7) | 0, o6 = o6 + Math.imul(x13, P9) | 0, f7 = f7 + Math.imul(g15, D9) | 0, i6 = i6 + Math.imul(g15, U5) | 0, i6 = i6 + Math.imul(c10, D9) | 0, o6 = o6 + Math.imul(c10, U5) | 0, f7 = f7 + Math.imul(m16, C8) | 0, i6 = i6 + Math.imul(m16, J4) | 0, i6 = i6 + Math.imul(p12, C8) | 0, o6 = o6 + Math.imul(p12, J4) | 0;
      var wt3 = (u13 + f7 | 0) + ((i6 & 8191) << 13) | 0;
      u13 = (o6 + (i6 >>> 13) | 0) + (wt3 >>> 26) | 0, wt3 &= 67108863, f7 = Math.imul(S9, K7), i6 = Math.imul(S9, F8), i6 = i6 + Math.imul(k8, K7) | 0, o6 = Math.imul(k8, F8), f7 = f7 + Math.imul(A11, H7) | 0, i6 = i6 + Math.imul(A11, P9) | 0, i6 = i6 + Math.imul(B9, H7) | 0, o6 = o6 + Math.imul(B9, P9) | 0, f7 = f7 + Math.imul(w13, D9) | 0, i6 = i6 + Math.imul(w13, U5) | 0, i6 = i6 + Math.imul(x13, D9) | 0, o6 = o6 + Math.imul(x13, U5) | 0, f7 = f7 + Math.imul(g15, C8) | 0, i6 = i6 + Math.imul(g15, J4) | 0, i6 = i6 + Math.imul(c10, C8) | 0, o6 = o6 + Math.imul(c10, J4) | 0, f7 = f7 + Math.imul(m16, W4) | 0, i6 = i6 + Math.imul(m16, G5) | 0, i6 = i6 + Math.imul(p12, W4) | 0, o6 = o6 + Math.imul(p12, G5) | 0;
      var yt = (u13 + f7 | 0) + ((i6 & 8191) << 13) | 0;
      u13 = (o6 + (i6 >>> 13) | 0) + (yt >>> 26) | 0, yt &= 67108863, f7 = Math.imul(q12, K7), i6 = Math.imul(q12, F8), i6 = i6 + Math.imul(R7, K7) | 0, o6 = Math.imul(R7, F8), f7 = f7 + Math.imul(S9, H7) | 0, i6 = i6 + Math.imul(S9, P9) | 0, i6 = i6 + Math.imul(k8, H7) | 0, o6 = o6 + Math.imul(k8, P9) | 0, f7 = f7 + Math.imul(A11, D9) | 0, i6 = i6 + Math.imul(A11, U5) | 0, i6 = i6 + Math.imul(B9, D9) | 0, o6 = o6 + Math.imul(B9, U5) | 0, f7 = f7 + Math.imul(w13, C8) | 0, i6 = i6 + Math.imul(w13, J4) | 0, i6 = i6 + Math.imul(x13, C8) | 0, o6 = o6 + Math.imul(x13, J4) | 0, f7 = f7 + Math.imul(g15, W4) | 0, i6 = i6 + Math.imul(g15, G5) | 0, i6 = i6 + Math.imul(c10, W4) | 0, o6 = o6 + Math.imul(c10, G5) | 0, f7 = f7 + Math.imul(m16, Q3) | 0, i6 = i6 + Math.imul(m16, V6) | 0, i6 = i6 + Math.imul(p12, Q3) | 0, o6 = o6 + Math.imul(p12, V6) | 0;
      var xt3 = (u13 + f7 | 0) + ((i6 & 8191) << 13) | 0;
      u13 = (o6 + (i6 >>> 13) | 0) + (xt3 >>> 26) | 0, xt3 &= 67108863, f7 = Math.imul(L7, K7), i6 = Math.imul(L7, F8), i6 = i6 + Math.imul(Z3, K7) | 0, o6 = Math.imul(Z3, F8), f7 = f7 + Math.imul(q12, H7) | 0, i6 = i6 + Math.imul(q12, P9) | 0, i6 = i6 + Math.imul(R7, H7) | 0, o6 = o6 + Math.imul(R7, P9) | 0, f7 = f7 + Math.imul(S9, D9) | 0, i6 = i6 + Math.imul(S9, U5) | 0, i6 = i6 + Math.imul(k8, D9) | 0, o6 = o6 + Math.imul(k8, U5) | 0, f7 = f7 + Math.imul(A11, C8) | 0, i6 = i6 + Math.imul(A11, J4) | 0, i6 = i6 + Math.imul(B9, C8) | 0, o6 = o6 + Math.imul(B9, J4) | 0, f7 = f7 + Math.imul(w13, W4) | 0, i6 = i6 + Math.imul(w13, G5) | 0, i6 = i6 + Math.imul(x13, W4) | 0, o6 = o6 + Math.imul(x13, G5) | 0, f7 = f7 + Math.imul(g15, Q3) | 0, i6 = i6 + Math.imul(g15, V6) | 0, i6 = i6 + Math.imul(c10, Q3) | 0, o6 = o6 + Math.imul(c10, V6) | 0, f7 = f7 + Math.imul(m16, X4) | 0, i6 = i6 + Math.imul(m16, Y4) | 0, i6 = i6 + Math.imul(p12, X4) | 0, o6 = o6 + Math.imul(p12, Y4) | 0;
      var _t2 = (u13 + f7 | 0) + ((i6 & 8191) << 13) | 0;
      u13 = (o6 + (i6 >>> 13) | 0) + (_t2 >>> 26) | 0, _t2 &= 67108863, f7 = Math.imul(N5, K7), i6 = Math.imul(N5, F8), i6 = i6 + Math.imul(T4, K7) | 0, o6 = Math.imul(T4, F8), f7 = f7 + Math.imul(L7, H7) | 0, i6 = i6 + Math.imul(L7, P9) | 0, i6 = i6 + Math.imul(Z3, H7) | 0, o6 = o6 + Math.imul(Z3, P9) | 0, f7 = f7 + Math.imul(q12, D9) | 0, i6 = i6 + Math.imul(q12, U5) | 0, i6 = i6 + Math.imul(R7, D9) | 0, o6 = o6 + Math.imul(R7, U5) | 0, f7 = f7 + Math.imul(S9, C8) | 0, i6 = i6 + Math.imul(S9, J4) | 0, i6 = i6 + Math.imul(k8, C8) | 0, o6 = o6 + Math.imul(k8, J4) | 0, f7 = f7 + Math.imul(A11, W4) | 0, i6 = i6 + Math.imul(A11, G5) | 0, i6 = i6 + Math.imul(B9, W4) | 0, o6 = o6 + Math.imul(B9, G5) | 0, f7 = f7 + Math.imul(w13, Q3) | 0, i6 = i6 + Math.imul(w13, V6) | 0, i6 = i6 + Math.imul(x13, Q3) | 0, o6 = o6 + Math.imul(x13, V6) | 0, f7 = f7 + Math.imul(g15, X4) | 0, i6 = i6 + Math.imul(g15, Y4) | 0, i6 = i6 + Math.imul(c10, X4) | 0, o6 = o6 + Math.imul(c10, Y4) | 0, f7 = f7 + Math.imul(m16, $2) | 0, i6 = i6 + Math.imul(m16, j7) | 0, i6 = i6 + Math.imul(p12, $2) | 0, o6 = o6 + Math.imul(p12, j7) | 0;
      var bt2 = (u13 + f7 | 0) + ((i6 & 8191) << 13) | 0;
      u13 = (o6 + (i6 >>> 13) | 0) + (bt2 >>> 26) | 0, bt2 &= 67108863, f7 = Math.imul(I8, K7), i6 = Math.imul(I8, F8), i6 = i6 + Math.imul(z7, K7) | 0, o6 = Math.imul(z7, F8), f7 = f7 + Math.imul(N5, H7) | 0, i6 = i6 + Math.imul(N5, P9) | 0, i6 = i6 + Math.imul(T4, H7) | 0, o6 = o6 + Math.imul(T4, P9) | 0, f7 = f7 + Math.imul(L7, D9) | 0, i6 = i6 + Math.imul(L7, U5) | 0, i6 = i6 + Math.imul(Z3, D9) | 0, o6 = o6 + Math.imul(Z3, U5) | 0, f7 = f7 + Math.imul(q12, C8) | 0, i6 = i6 + Math.imul(q12, J4) | 0, i6 = i6 + Math.imul(R7, C8) | 0, o6 = o6 + Math.imul(R7, J4) | 0, f7 = f7 + Math.imul(S9, W4) | 0, i6 = i6 + Math.imul(S9, G5) | 0, i6 = i6 + Math.imul(k8, W4) | 0, o6 = o6 + Math.imul(k8, G5) | 0, f7 = f7 + Math.imul(A11, Q3) | 0, i6 = i6 + Math.imul(A11, V6) | 0, i6 = i6 + Math.imul(B9, Q3) | 0, o6 = o6 + Math.imul(B9, V6) | 0, f7 = f7 + Math.imul(w13, X4) | 0, i6 = i6 + Math.imul(w13, Y4) | 0, i6 = i6 + Math.imul(x13, X4) | 0, o6 = o6 + Math.imul(x13, Y4) | 0, f7 = f7 + Math.imul(g15, $2) | 0, i6 = i6 + Math.imul(g15, j7) | 0, i6 = i6 + Math.imul(c10, $2) | 0, o6 = o6 + Math.imul(c10, j7) | 0, f7 = f7 + Math.imul(m16, tt) | 0, i6 = i6 + Math.imul(m16, it) | 0, i6 = i6 + Math.imul(p12, tt) | 0, o6 = o6 + Math.imul(p12, it) | 0;
      var At2 = (u13 + f7 | 0) + ((i6 & 8191) << 13) | 0;
      u13 = (o6 + (i6 >>> 13) | 0) + (At2 >>> 26) | 0, At2 &= 67108863, f7 = Math.imul(E8, K7), i6 = Math.imul(E8, F8), i6 = i6 + Math.imul(O9, K7) | 0, o6 = Math.imul(O9, F8), f7 = f7 + Math.imul(I8, H7) | 0, i6 = i6 + Math.imul(I8, P9) | 0, i6 = i6 + Math.imul(z7, H7) | 0, o6 = o6 + Math.imul(z7, P9) | 0, f7 = f7 + Math.imul(N5, D9) | 0, i6 = i6 + Math.imul(N5, U5) | 0, i6 = i6 + Math.imul(T4, D9) | 0, o6 = o6 + Math.imul(T4, U5) | 0, f7 = f7 + Math.imul(L7, C8) | 0, i6 = i6 + Math.imul(L7, J4) | 0, i6 = i6 + Math.imul(Z3, C8) | 0, o6 = o6 + Math.imul(Z3, J4) | 0, f7 = f7 + Math.imul(q12, W4) | 0, i6 = i6 + Math.imul(q12, G5) | 0, i6 = i6 + Math.imul(R7, W4) | 0, o6 = o6 + Math.imul(R7, G5) | 0, f7 = f7 + Math.imul(S9, Q3) | 0, i6 = i6 + Math.imul(S9, V6) | 0, i6 = i6 + Math.imul(k8, Q3) | 0, o6 = o6 + Math.imul(k8, V6) | 0, f7 = f7 + Math.imul(A11, X4) | 0, i6 = i6 + Math.imul(A11, Y4) | 0, i6 = i6 + Math.imul(B9, X4) | 0, o6 = o6 + Math.imul(B9, Y4) | 0, f7 = f7 + Math.imul(w13, $2) | 0, i6 = i6 + Math.imul(w13, j7) | 0, i6 = i6 + Math.imul(x13, $2) | 0, o6 = o6 + Math.imul(x13, j7) | 0, f7 = f7 + Math.imul(g15, tt) | 0, i6 = i6 + Math.imul(g15, it) | 0, i6 = i6 + Math.imul(c10, tt) | 0, o6 = o6 + Math.imul(c10, it) | 0, f7 = f7 + Math.imul(m16, rt) | 0, i6 = i6 + Math.imul(m16, et) | 0, i6 = i6 + Math.imul(p12, rt) | 0, o6 = o6 + Math.imul(p12, et) | 0;
      var Bt2 = (u13 + f7 | 0) + ((i6 & 8191) << 13) | 0;
      u13 = (o6 + (i6 >>> 13) | 0) + (Bt2 >>> 26) | 0, Bt2 &= 67108863, f7 = Math.imul(E8, H7), i6 = Math.imul(E8, P9), i6 = i6 + Math.imul(O9, H7) | 0, o6 = Math.imul(O9, P9), f7 = f7 + Math.imul(I8, D9) | 0, i6 = i6 + Math.imul(I8, U5) | 0, i6 = i6 + Math.imul(z7, D9) | 0, o6 = o6 + Math.imul(z7, U5) | 0, f7 = f7 + Math.imul(N5, C8) | 0, i6 = i6 + Math.imul(N5, J4) | 0, i6 = i6 + Math.imul(T4, C8) | 0, o6 = o6 + Math.imul(T4, J4) | 0, f7 = f7 + Math.imul(L7, W4) | 0, i6 = i6 + Math.imul(L7, G5) | 0, i6 = i6 + Math.imul(Z3, W4) | 0, o6 = o6 + Math.imul(Z3, G5) | 0, f7 = f7 + Math.imul(q12, Q3) | 0, i6 = i6 + Math.imul(q12, V6) | 0, i6 = i6 + Math.imul(R7, Q3) | 0, o6 = o6 + Math.imul(R7, V6) | 0, f7 = f7 + Math.imul(S9, X4) | 0, i6 = i6 + Math.imul(S9, Y4) | 0, i6 = i6 + Math.imul(k8, X4) | 0, o6 = o6 + Math.imul(k8, Y4) | 0, f7 = f7 + Math.imul(A11, $2) | 0, i6 = i6 + Math.imul(A11, j7) | 0, i6 = i6 + Math.imul(B9, $2) | 0, o6 = o6 + Math.imul(B9, j7) | 0, f7 = f7 + Math.imul(w13, tt) | 0, i6 = i6 + Math.imul(w13, it) | 0, i6 = i6 + Math.imul(x13, tt) | 0, o6 = o6 + Math.imul(x13, it) | 0, f7 = f7 + Math.imul(g15, rt) | 0, i6 = i6 + Math.imul(g15, et) | 0, i6 = i6 + Math.imul(c10, rt) | 0, o6 = o6 + Math.imul(c10, et) | 0;
      var St4 = (u13 + f7 | 0) + ((i6 & 8191) << 13) | 0;
      u13 = (o6 + (i6 >>> 13) | 0) + (St4 >>> 26) | 0, St4 &= 67108863, f7 = Math.imul(E8, D9), i6 = Math.imul(E8, U5), i6 = i6 + Math.imul(O9, D9) | 0, o6 = Math.imul(O9, U5), f7 = f7 + Math.imul(I8, C8) | 0, i6 = i6 + Math.imul(I8, J4) | 0, i6 = i6 + Math.imul(z7, C8) | 0, o6 = o6 + Math.imul(z7, J4) | 0, f7 = f7 + Math.imul(N5, W4) | 0, i6 = i6 + Math.imul(N5, G5) | 0, i6 = i6 + Math.imul(T4, W4) | 0, o6 = o6 + Math.imul(T4, G5) | 0, f7 = f7 + Math.imul(L7, Q3) | 0, i6 = i6 + Math.imul(L7, V6) | 0, i6 = i6 + Math.imul(Z3, Q3) | 0, o6 = o6 + Math.imul(Z3, V6) | 0, f7 = f7 + Math.imul(q12, X4) | 0, i6 = i6 + Math.imul(q12, Y4) | 0, i6 = i6 + Math.imul(R7, X4) | 0, o6 = o6 + Math.imul(R7, Y4) | 0, f7 = f7 + Math.imul(S9, $2) | 0, i6 = i6 + Math.imul(S9, j7) | 0, i6 = i6 + Math.imul(k8, $2) | 0, o6 = o6 + Math.imul(k8, j7) | 0, f7 = f7 + Math.imul(A11, tt) | 0, i6 = i6 + Math.imul(A11, it) | 0, i6 = i6 + Math.imul(B9, tt) | 0, o6 = o6 + Math.imul(B9, it) | 0, f7 = f7 + Math.imul(w13, rt) | 0, i6 = i6 + Math.imul(w13, et) | 0, i6 = i6 + Math.imul(x13, rt) | 0, o6 = o6 + Math.imul(x13, et) | 0;
      var kt3 = (u13 + f7 | 0) + ((i6 & 8191) << 13) | 0;
      u13 = (o6 + (i6 >>> 13) | 0) + (kt3 >>> 26) | 0, kt3 &= 67108863, f7 = Math.imul(E8, C8), i6 = Math.imul(E8, J4), i6 = i6 + Math.imul(O9, C8) | 0, o6 = Math.imul(O9, J4), f7 = f7 + Math.imul(I8, W4) | 0, i6 = i6 + Math.imul(I8, G5) | 0, i6 = i6 + Math.imul(z7, W4) | 0, o6 = o6 + Math.imul(z7, G5) | 0, f7 = f7 + Math.imul(N5, Q3) | 0, i6 = i6 + Math.imul(N5, V6) | 0, i6 = i6 + Math.imul(T4, Q3) | 0, o6 = o6 + Math.imul(T4, V6) | 0, f7 = f7 + Math.imul(L7, X4) | 0, i6 = i6 + Math.imul(L7, Y4) | 0, i6 = i6 + Math.imul(Z3, X4) | 0, o6 = o6 + Math.imul(Z3, Y4) | 0, f7 = f7 + Math.imul(q12, $2) | 0, i6 = i6 + Math.imul(q12, j7) | 0, i6 = i6 + Math.imul(R7, $2) | 0, o6 = o6 + Math.imul(R7, j7) | 0, f7 = f7 + Math.imul(S9, tt) | 0, i6 = i6 + Math.imul(S9, it) | 0, i6 = i6 + Math.imul(k8, tt) | 0, o6 = o6 + Math.imul(k8, it) | 0, f7 = f7 + Math.imul(A11, rt) | 0, i6 = i6 + Math.imul(A11, et) | 0, i6 = i6 + Math.imul(B9, rt) | 0, o6 = o6 + Math.imul(B9, et) | 0;
      var qt3 = (u13 + f7 | 0) + ((i6 & 8191) << 13) | 0;
      u13 = (o6 + (i6 >>> 13) | 0) + (qt3 >>> 26) | 0, qt3 &= 67108863, f7 = Math.imul(E8, W4), i6 = Math.imul(E8, G5), i6 = i6 + Math.imul(O9, W4) | 0, o6 = Math.imul(O9, G5), f7 = f7 + Math.imul(I8, Q3) | 0, i6 = i6 + Math.imul(I8, V6) | 0, i6 = i6 + Math.imul(z7, Q3) | 0, o6 = o6 + Math.imul(z7, V6) | 0, f7 = f7 + Math.imul(N5, X4) | 0, i6 = i6 + Math.imul(N5, Y4) | 0, i6 = i6 + Math.imul(T4, X4) | 0, o6 = o6 + Math.imul(T4, Y4) | 0, f7 = f7 + Math.imul(L7, $2) | 0, i6 = i6 + Math.imul(L7, j7) | 0, i6 = i6 + Math.imul(Z3, $2) | 0, o6 = o6 + Math.imul(Z3, j7) | 0, f7 = f7 + Math.imul(q12, tt) | 0, i6 = i6 + Math.imul(q12, it) | 0, i6 = i6 + Math.imul(R7, tt) | 0, o6 = o6 + Math.imul(R7, it) | 0, f7 = f7 + Math.imul(S9, rt) | 0, i6 = i6 + Math.imul(S9, et) | 0, i6 = i6 + Math.imul(k8, rt) | 0, o6 = o6 + Math.imul(k8, et) | 0;
      var Rt2 = (u13 + f7 | 0) + ((i6 & 8191) << 13) | 0;
      u13 = (o6 + (i6 >>> 13) | 0) + (Rt2 >>> 26) | 0, Rt2 &= 67108863, f7 = Math.imul(E8, Q3), i6 = Math.imul(E8, V6), i6 = i6 + Math.imul(O9, Q3) | 0, o6 = Math.imul(O9, V6), f7 = f7 + Math.imul(I8, X4) | 0, i6 = i6 + Math.imul(I8, Y4) | 0, i6 = i6 + Math.imul(z7, X4) | 0, o6 = o6 + Math.imul(z7, Y4) | 0, f7 = f7 + Math.imul(N5, $2) | 0, i6 = i6 + Math.imul(N5, j7) | 0, i6 = i6 + Math.imul(T4, $2) | 0, o6 = o6 + Math.imul(T4, j7) | 0, f7 = f7 + Math.imul(L7, tt) | 0, i6 = i6 + Math.imul(L7, it) | 0, i6 = i6 + Math.imul(Z3, tt) | 0, o6 = o6 + Math.imul(Z3, it) | 0, f7 = f7 + Math.imul(q12, rt) | 0, i6 = i6 + Math.imul(q12, et) | 0, i6 = i6 + Math.imul(R7, rt) | 0, o6 = o6 + Math.imul(R7, et) | 0;
      var Lt2 = (u13 + f7 | 0) + ((i6 & 8191) << 13) | 0;
      u13 = (o6 + (i6 >>> 13) | 0) + (Lt2 >>> 26) | 0, Lt2 &= 67108863, f7 = Math.imul(E8, X4), i6 = Math.imul(E8, Y4), i6 = i6 + Math.imul(O9, X4) | 0, o6 = Math.imul(O9, Y4), f7 = f7 + Math.imul(I8, $2) | 0, i6 = i6 + Math.imul(I8, j7) | 0, i6 = i6 + Math.imul(z7, $2) | 0, o6 = o6 + Math.imul(z7, j7) | 0, f7 = f7 + Math.imul(N5, tt) | 0, i6 = i6 + Math.imul(N5, it) | 0, i6 = i6 + Math.imul(T4, tt) | 0, o6 = o6 + Math.imul(T4, it) | 0, f7 = f7 + Math.imul(L7, rt) | 0, i6 = i6 + Math.imul(L7, et) | 0, i6 = i6 + Math.imul(Z3, rt) | 0, o6 = o6 + Math.imul(Z3, et) | 0;
      var Zt2 = (u13 + f7 | 0) + ((i6 & 8191) << 13) | 0;
      u13 = (o6 + (i6 >>> 13) | 0) + (Zt2 >>> 26) | 0, Zt2 &= 67108863, f7 = Math.imul(E8, $2), i6 = Math.imul(E8, j7), i6 = i6 + Math.imul(O9, $2) | 0, o6 = Math.imul(O9, j7), f7 = f7 + Math.imul(I8, tt) | 0, i6 = i6 + Math.imul(I8, it) | 0, i6 = i6 + Math.imul(z7, tt) | 0, o6 = o6 + Math.imul(z7, it) | 0, f7 = f7 + Math.imul(N5, rt) | 0, i6 = i6 + Math.imul(N5, et) | 0, i6 = i6 + Math.imul(T4, rt) | 0, o6 = o6 + Math.imul(T4, et) | 0;
      var Nt4 = (u13 + f7 | 0) + ((i6 & 8191) << 13) | 0;
      u13 = (o6 + (i6 >>> 13) | 0) + (Nt4 >>> 26) | 0, Nt4 &= 67108863, f7 = Math.imul(E8, tt), i6 = Math.imul(E8, it), i6 = i6 + Math.imul(O9, tt) | 0, o6 = Math.imul(O9, it), f7 = f7 + Math.imul(I8, rt) | 0, i6 = i6 + Math.imul(I8, et) | 0, i6 = i6 + Math.imul(z7, rt) | 0, o6 = o6 + Math.imul(z7, et) | 0;
      var Tt2 = (u13 + f7 | 0) + ((i6 & 8191) << 13) | 0;
      u13 = (o6 + (i6 >>> 13) | 0) + (Tt2 >>> 26) | 0, Tt2 &= 67108863, f7 = Math.imul(E8, rt), i6 = Math.imul(E8, et), i6 = i6 + Math.imul(O9, rt) | 0, o6 = Math.imul(O9, et);
      var It4 = (u13 + f7 | 0) + ((i6 & 8191) << 13) | 0;
      return u13 = (o6 + (i6 >>> 13) | 0) + (It4 >>> 26) | 0, It4 &= 67108863, a11[0] = Mt2, a11[1] = gt, a11[2] = ct, a11[3] = wt3, a11[4] = yt, a11[5] = xt3, a11[6] = _t2, a11[7] = bt2, a11[8] = At2, a11[9] = Bt2, a11[10] = St4, a11[11] = kt3, a11[12] = qt3, a11[13] = Rt2, a11[14] = Lt2, a11[15] = Zt2, a11[16] = Nt4, a11[17] = Tt2, a11[18] = It4, u13 !== 0 && (a11[19] = u13, e.length++), e;
    };
    Math.imul || (Jt2 = Ct3);
    function Wt2(s10, t, r2) {
      r2.negative = t.negative ^ s10.negative, r2.length = s10.length + t.length;
      for (var e = 0, h14 = 0, n5 = 0; n5 < r2.length - 1; n5++) {
        var a11 = h14;
        h14 = 0;
        for (var u13 = e & 67108863, f7 = Math.min(n5, t.length - 1), i6 = Math.max(0, n5 - s10.length + 1); i6 <= f7; i6++) {
          var o6 = n5 - i6, d9 = s10.words[o6] | 0, m16 = t.words[i6] | 0, p12 = d9 * m16, M11 = p12 & 67108863;
          a11 = a11 + (p12 / 67108864 | 0) | 0, M11 = M11 + u13 | 0, u13 = M11 & 67108863, a11 = a11 + (M11 >>> 26) | 0, h14 += a11 >>> 26, a11 &= 67108863;
        }
        r2.words[n5] = u13, e = a11, a11 = h14;
      }
      return e !== 0 ? r2.words[n5] = e : r2.length--, r2._strip();
    }
    function Gt3(s10, t, r2) {
      return Wt2(s10, t, r2);
    }
    l11.prototype.mulTo = function(t, r2) {
      var e, h14 = this.length + t.length;
      return this.length === 10 && t.length === 10 ? e = Jt2(this, t, r2) : h14 < 63 ? e = Ct3(this, t, r2) : h14 < 1024 ? e = Wt2(this, t, r2) : e = Gt3(this, t, r2), e;
    };
    function ft2(s10, t) {
      this.x = s10, this.y = t;
    }
    ft2.prototype.makeRBT = function(t) {
      for (var r2 = new Array(t), e = l11.prototype._countBits(t) - 1, h14 = 0; h14 < t; h14++)
        r2[h14] = this.revBin(h14, e, t);
      return r2;
    }, ft2.prototype.revBin = function(t, r2, e) {
      if (t === 0 || t === e - 1)
        return t;
      for (var h14 = 0, n5 = 0; n5 < r2; n5++)
        h14 |= (t & 1) << r2 - n5 - 1, t >>= 1;
      return h14;
    }, ft2.prototype.permute = function(t, r2, e, h14, n5, a11) {
      for (var u13 = 0; u13 < a11; u13++)
        h14[u13] = r2[t[u13]], n5[u13] = e[t[u13]];
    }, ft2.prototype.transform = function(t, r2, e, h14, n5, a11) {
      this.permute(a11, t, r2, e, h14, n5);
      for (var u13 = 1; u13 < n5; u13 <<= 1)
        for (var f7 = u13 << 1, i6 = Math.cos(2 * Math.PI / f7), o6 = Math.sin(2 * Math.PI / f7), d9 = 0; d9 < n5; d9 += f7)
          for (var m16 = i6, p12 = o6, M11 = 0; M11 < u13; M11++) {
            var g15 = e[d9 + M11], c10 = h14[d9 + M11], ot2 = e[d9 + M11 + u13], w13 = h14[d9 + M11 + u13], x13 = m16 * ot2 - p12 * w13;
            w13 = m16 * w13 + p12 * ot2, ot2 = x13, e[d9 + M11] = g15 + ot2, h14[d9 + M11] = c10 + w13, e[d9 + M11 + u13] = g15 - ot2, h14[d9 + M11 + u13] = c10 - w13, M11 !== f7 && (x13 = i6 * m16 - o6 * p12, p12 = i6 * p12 + o6 * m16, m16 = x13);
          }
    }, ft2.prototype.guessLen13b = function(t, r2) {
      var e = Math.max(r2, t) | 1, h14 = e & 1, n5 = 0;
      for (e = e / 2 | 0; e; e = e >>> 1)
        n5++;
      return 1 << n5 + 1 + h14;
    }, ft2.prototype.conjugate = function(t, r2, e) {
      if (!(e <= 1))
        for (var h14 = 0; h14 < e / 2; h14++) {
          var n5 = t[h14];
          t[h14] = t[e - h14 - 1], t[e - h14 - 1] = n5, n5 = r2[h14], r2[h14] = -r2[e - h14 - 1], r2[e - h14 - 1] = -n5;
        }
    }, ft2.prototype.normalize13b = function(t, r2) {
      for (var e = 0, h14 = 0; h14 < r2 / 2; h14++) {
        var n5 = Math.round(t[2 * h14 + 1] / r2) * 8192 + Math.round(t[2 * h14] / r2) + e;
        t[h14] = n5 & 67108863, n5 < 67108864 ? e = 0 : e = n5 / 67108864 | 0;
      }
      return t;
    }, ft2.prototype.convert13b = function(t, r2, e, h14) {
      for (var n5 = 0, a11 = 0; a11 < r2; a11++)
        n5 = n5 + (t[a11] | 0), e[2 * a11] = n5 & 8191, n5 = n5 >>> 13, e[2 * a11 + 1] = n5 & 8191, n5 = n5 >>> 13;
      for (a11 = 2 * r2; a11 < h14; ++a11)
        e[a11] = 0;
      v14(n5 === 0), v14((n5 & -8192) === 0);
    }, ft2.prototype.stub = function(t) {
      for (var r2 = new Array(t), e = 0; e < t; e++)
        r2[e] = 0;
      return r2;
    }, ft2.prototype.mulp = function(t, r2, e) {
      var h14 = 2 * this.guessLen13b(t.length, r2.length), n5 = this.makeRBT(h14), a11 = this.stub(h14), u13 = new Array(h14), f7 = new Array(h14), i6 = new Array(h14), o6 = new Array(h14), d9 = new Array(h14), m16 = new Array(h14), p12 = e.words;
      p12.length = h14, this.convert13b(t.words, t.length, u13, h14), this.convert13b(r2.words, r2.length, o6, h14), this.transform(u13, a11, f7, i6, h14, n5), this.transform(o6, a11, d9, m16, h14, n5);
      for (var M11 = 0; M11 < h14; M11++) {
        var g15 = f7[M11] * d9[M11] - i6[M11] * m16[M11];
        i6[M11] = f7[M11] * m16[M11] + i6[M11] * d9[M11], f7[M11] = g15;
      }
      return this.conjugate(f7, i6, h14), this.transform(f7, i6, p12, a11, h14, n5), this.conjugate(p12, a11, h14), this.normalize13b(p12, h14), e.negative = t.negative ^ r2.negative, e.length = t.length + r2.length, e._strip();
    }, l11.prototype.mul = function(t) {
      var r2 = new l11(null);
      return r2.words = new Array(this.length + t.length), this.mulTo(t, r2);
    }, l11.prototype.mulf = function(t) {
      var r2 = new l11(null);
      return r2.words = new Array(this.length + t.length), Gt3(this, t, r2);
    }, l11.prototype.imul = function(t) {
      return this.clone().mulTo(t, this);
    }, l11.prototype.imuln = function(t) {
      var r2 = t < 0;
      r2 && (t = -t), v14(typeof t == "number"), v14(t < 67108864);
      for (var e = 0, h14 = 0; h14 < this.length; h14++) {
        var n5 = (this.words[h14] | 0) * t, a11 = (n5 & 67108863) + (e & 67108863);
        e >>= 26, e += n5 / 67108864 | 0, e += a11 >>> 26, this.words[h14] = a11 & 67108863;
      }
      return e !== 0 && (this.words[h14] = e, this.length++), r2 ? this.ineg() : this;
    }, l11.prototype.muln = function(t) {
      return this.clone().imuln(t);
    }, l11.prototype.sqr = function() {
      return this.mul(this);
    }, l11.prototype.isqr = function() {
      return this.imul(this.clone());
    }, l11.prototype.pow = function(t) {
      var r2 = yi2(t);
      if (r2.length === 0)
        return new l11(1);
      for (var e = this, h14 = 0; h14 < r2.length && r2[h14] === 0; h14++, e = e.sqr())
        ;
      if (++h14 < r2.length)
        for (var n5 = e.sqr(); h14 < r2.length; h14++, n5 = n5.sqr())
          r2[h14] !== 0 && (e = e.mul(n5));
      return e;
    }, l11.prototype.iushln = function(t) {
      v14(typeof t == "number" && t >= 0);
      var r2 = t % 26, e = (t - r2) / 26, h14 = 67108863 >>> 26 - r2 << 26 - r2, n5;
      if (r2 !== 0) {
        var a11 = 0;
        for (n5 = 0; n5 < this.length; n5++) {
          var u13 = this.words[n5] & h14, f7 = (this.words[n5] | 0) - u13 << r2;
          this.words[n5] = f7 | a11, a11 = u13 >>> 26 - r2;
        }
        a11 && (this.words[n5] = a11, this.length++);
      }
      if (e !== 0) {
        for (n5 = this.length - 1; n5 >= 0; n5--)
          this.words[n5 + e] = this.words[n5];
        for (n5 = 0; n5 < e; n5++)
          this.words[n5] = 0;
        this.length += e;
      }
      return this._strip();
    }, l11.prototype.ishln = function(t) {
      return v14(this.negative === 0), this.iushln(t);
    }, l11.prototype.iushrn = function(t, r2, e) {
      v14(typeof t == "number" && t >= 0);
      var h14;
      r2 ? h14 = (r2 - r2 % 26) / 26 : h14 = 0;
      var n5 = t % 26, a11 = Math.min((t - n5) / 26, this.length), u13 = 67108863 ^ 67108863 >>> n5 << n5, f7 = e;
      if (h14 -= a11, h14 = Math.max(0, h14), f7) {
        for (var i6 = 0; i6 < a11; i6++)
          f7.words[i6] = this.words[i6];
        f7.length = a11;
      }
      if (a11 !== 0)
        if (this.length > a11)
          for (this.length -= a11, i6 = 0; i6 < this.length; i6++)
            this.words[i6] = this.words[i6 + a11];
        else
          this.words[0] = 0, this.length = 1;
      var o6 = 0;
      for (i6 = this.length - 1; i6 >= 0 && (o6 !== 0 || i6 >= h14); i6--) {
        var d9 = this.words[i6] | 0;
        this.words[i6] = o6 << 26 - n5 | d9 >>> n5, o6 = d9 & u13;
      }
      return f7 && o6 !== 0 && (f7.words[f7.length++] = o6), this.length === 0 && (this.words[0] = 0, this.length = 1), this._strip();
    }, l11.prototype.ishrn = function(t, r2, e) {
      return v14(this.negative === 0), this.iushrn(t, r2, e);
    }, l11.prototype.shln = function(t) {
      return this.clone().ishln(t);
    }, l11.prototype.ushln = function(t) {
      return this.clone().iushln(t);
    }, l11.prototype.shrn = function(t) {
      return this.clone().ishrn(t);
    }, l11.prototype.ushrn = function(t) {
      return this.clone().iushrn(t);
    }, l11.prototype.testn = function(t) {
      v14(typeof t == "number" && t >= 0);
      var r2 = t % 26, e = (t - r2) / 26, h14 = 1 << r2;
      if (this.length <= e)
        return false;
      var n5 = this.words[e];
      return !!(n5 & h14);
    }, l11.prototype.imaskn = function(t) {
      v14(typeof t == "number" && t >= 0);
      var r2 = t % 26, e = (t - r2) / 26;
      if (v14(this.negative === 0, "imaskn works only with positive numbers"), this.length <= e)
        return this;
      if (r2 !== 0 && e++, this.length = Math.min(e, this.length), r2 !== 0) {
        var h14 = 67108863 ^ 67108863 >>> r2 << r2;
        this.words[this.length - 1] &= h14;
      }
      return this._strip();
    }, l11.prototype.maskn = function(t) {
      return this.clone().imaskn(t);
    }, l11.prototype.iaddn = function(t) {
      return v14(typeof t == "number"), v14(t < 67108864), t < 0 ? this.isubn(-t) : this.negative !== 0 ? this.length === 1 && (this.words[0] | 0) <= t ? (this.words[0] = t - (this.words[0] | 0), this.negative = 0, this) : (this.negative = 0, this.isubn(t), this.negative = 1, this) : this._iaddn(t);
    }, l11.prototype._iaddn = function(t) {
      this.words[0] += t;
      for (var r2 = 0; r2 < this.length && this.words[r2] >= 67108864; r2++)
        this.words[r2] -= 67108864, r2 === this.length - 1 ? this.words[r2 + 1] = 1 : this.words[r2 + 1]++;
      return this.length = Math.max(this.length, r2 + 1), this;
    }, l11.prototype.isubn = function(t) {
      if (v14(typeof t == "number"), v14(t < 67108864), t < 0)
        return this.iaddn(-t);
      if (this.negative !== 0)
        return this.negative = 0, this.iaddn(t), this.negative = 1, this;
      if (this.words[0] -= t, this.length === 1 && this.words[0] < 0)
        this.words[0] = -this.words[0], this.negative = 1;
      else
        for (var r2 = 0; r2 < this.length && this.words[r2] < 0; r2++)
          this.words[r2] += 67108864, this.words[r2 + 1] -= 1;
      return this._strip();
    }, l11.prototype.addn = function(t) {
      return this.clone().iaddn(t);
    }, l11.prototype.subn = function(t) {
      return this.clone().isubn(t);
    }, l11.prototype.iabs = function() {
      return this.negative = 0, this;
    }, l11.prototype.abs = function() {
      return this.clone().iabs();
    }, l11.prototype._ishlnsubmul = function(t, r2, e) {
      var h14 = t.length + e, n5;
      this._expand(h14);
      var a11, u13 = 0;
      for (n5 = 0; n5 < t.length; n5++) {
        a11 = (this.words[n5 + e] | 0) + u13;
        var f7 = (t.words[n5] | 0) * r2;
        a11 -= f7 & 67108863, u13 = (a11 >> 26) - (f7 / 67108864 | 0), this.words[n5 + e] = a11 & 67108863;
      }
      for (; n5 < this.length - e; n5++)
        a11 = (this.words[n5 + e] | 0) + u13, u13 = a11 >> 26, this.words[n5 + e] = a11 & 67108863;
      if (u13 === 0)
        return this._strip();
      for (v14(u13 === -1), u13 = 0, n5 = 0; n5 < this.length; n5++)
        a11 = -(this.words[n5] | 0) + u13, u13 = a11 >> 26, this.words[n5] = a11 & 67108863;
      return this.negative = 1, this._strip();
    }, l11.prototype._wordDiv = function(t, r2) {
      var e = this.length - t.length, h14 = this.clone(), n5 = t, a11 = n5.words[n5.length - 1] | 0, u13 = this._countBits(a11);
      e = 26 - u13, e !== 0 && (n5 = n5.ushln(e), h14.iushln(e), a11 = n5.words[n5.length - 1] | 0);
      var f7 = h14.length - n5.length, i6;
      if (r2 !== "mod") {
        i6 = new l11(null), i6.length = f7 + 1, i6.words = new Array(i6.length);
        for (var o6 = 0; o6 < i6.length; o6++)
          i6.words[o6] = 0;
      }
      var d9 = h14.clone()._ishlnsubmul(n5, 1, f7);
      d9.negative === 0 && (h14 = d9, i6 && (i6.words[f7] = 1));
      for (var m16 = f7 - 1; m16 >= 0; m16--) {
        var p12 = (h14.words[n5.length + m16] | 0) * 67108864 + (h14.words[n5.length + m16 - 1] | 0);
        for (p12 = Math.min(p12 / a11 | 0, 67108863), h14._ishlnsubmul(n5, p12, m16); h14.negative !== 0; )
          p12--, h14.negative = 0, h14._ishlnsubmul(n5, 1, m16), h14.isZero() || (h14.negative ^= 1);
        i6 && (i6.words[m16] = p12);
      }
      return i6 && i6._strip(), h14._strip(), r2 !== "div" && e !== 0 && h14.iushrn(e), { div: i6 || null, mod: h14 };
    }, l11.prototype.divmod = function(t, r2, e) {
      if (v14(!t.isZero()), this.isZero())
        return { div: new l11(0), mod: new l11(0) };
      var h14, n5, a11;
      return this.negative !== 0 && t.negative === 0 ? (a11 = this.neg().divmod(t, r2), r2 !== "mod" && (h14 = a11.div.neg()), r2 !== "div" && (n5 = a11.mod.neg(), e && n5.negative !== 0 && n5.iadd(t)), { div: h14, mod: n5 }) : this.negative === 0 && t.negative !== 0 ? (a11 = this.divmod(t.neg(), r2), r2 !== "mod" && (h14 = a11.div.neg()), { div: h14, mod: a11.mod }) : this.negative & t.negative ? (a11 = this.neg().divmod(t.neg(), r2), r2 !== "div" && (n5 = a11.mod.neg(), e && n5.negative !== 0 && n5.isub(t)), { div: a11.div, mod: n5 }) : t.length > this.length || this.cmp(t) < 0 ? { div: new l11(0), mod: this } : t.length === 1 ? r2 === "div" ? { div: this.divn(t.words[0]), mod: null } : r2 === "mod" ? { div: null, mod: new l11(this.modrn(t.words[0])) } : { div: this.divn(t.words[0]), mod: new l11(this.modrn(t.words[0])) } : this._wordDiv(t, r2);
    }, l11.prototype.div = function(t) {
      return this.divmod(t, "div", false).div;
    }, l11.prototype.mod = function(t) {
      return this.divmod(t, "mod", false).mod;
    }, l11.prototype.umod = function(t) {
      return this.divmod(t, "mod", true).mod;
    }, l11.prototype.divRound = function(t) {
      var r2 = this.divmod(t);
      if (r2.mod.isZero())
        return r2.div;
      var e = r2.div.negative !== 0 ? r2.mod.isub(t) : r2.mod, h14 = t.ushrn(1), n5 = t.andln(1), a11 = e.cmp(h14);
      return a11 < 0 || n5 === 1 && a11 === 0 ? r2.div : r2.div.negative !== 0 ? r2.div.isubn(1) : r2.div.iaddn(1);
    }, l11.prototype.modrn = function(t) {
      var r2 = t < 0;
      r2 && (t = -t), v14(t <= 67108863);
      for (var e = (1 << 26) % t, h14 = 0, n5 = this.length - 1; n5 >= 0; n5--)
        h14 = (e * h14 + (this.words[n5] | 0)) % t;
      return r2 ? -h14 : h14;
    }, l11.prototype.modn = function(t) {
      return this.modrn(t);
    }, l11.prototype.idivn = function(t) {
      var r2 = t < 0;
      r2 && (t = -t), v14(t <= 67108863);
      for (var e = 0, h14 = this.length - 1; h14 >= 0; h14--) {
        var n5 = (this.words[h14] | 0) + e * 67108864;
        this.words[h14] = n5 / t | 0, e = n5 % t;
      }
      return this._strip(), r2 ? this.ineg() : this;
    }, l11.prototype.divn = function(t) {
      return this.clone().idivn(t);
    }, l11.prototype.egcd = function(t) {
      v14(t.negative === 0), v14(!t.isZero());
      var r2 = this, e = t.clone();
      r2.negative !== 0 ? r2 = r2.umod(t) : r2 = r2.clone();
      for (var h14 = new l11(1), n5 = new l11(0), a11 = new l11(0), u13 = new l11(1), f7 = 0; r2.isEven() && e.isEven(); )
        r2.iushrn(1), e.iushrn(1), ++f7;
      for (var i6 = e.clone(), o6 = r2.clone(); !r2.isZero(); ) {
        for (var d9 = 0, m16 = 1; !(r2.words[0] & m16) && d9 < 26; ++d9, m16 <<= 1)
          ;
        if (d9 > 0)
          for (r2.iushrn(d9); d9-- > 0; )
            (h14.isOdd() || n5.isOdd()) && (h14.iadd(i6), n5.isub(o6)), h14.iushrn(1), n5.iushrn(1);
        for (var p12 = 0, M11 = 1; !(e.words[0] & M11) && p12 < 26; ++p12, M11 <<= 1)
          ;
        if (p12 > 0)
          for (e.iushrn(p12); p12-- > 0; )
            (a11.isOdd() || u13.isOdd()) && (a11.iadd(i6), u13.isub(o6)), a11.iushrn(1), u13.iushrn(1);
        r2.cmp(e) >= 0 ? (r2.isub(e), h14.isub(a11), n5.isub(u13)) : (e.isub(r2), a11.isub(h14), u13.isub(n5));
      }
      return { a: a11, b: u13, gcd: e.iushln(f7) };
    }, l11.prototype._invmp = function(t) {
      v14(t.negative === 0), v14(!t.isZero());
      var r2 = this, e = t.clone();
      r2.negative !== 0 ? r2 = r2.umod(t) : r2 = r2.clone();
      for (var h14 = new l11(1), n5 = new l11(0), a11 = e.clone(); r2.cmpn(1) > 0 && e.cmpn(1) > 0; ) {
        for (var u13 = 0, f7 = 1; !(r2.words[0] & f7) && u13 < 26; ++u13, f7 <<= 1)
          ;
        if (u13 > 0)
          for (r2.iushrn(u13); u13-- > 0; )
            h14.isOdd() && h14.iadd(a11), h14.iushrn(1);
        for (var i6 = 0, o6 = 1; !(e.words[0] & o6) && i6 < 26; ++i6, o6 <<= 1)
          ;
        if (i6 > 0)
          for (e.iushrn(i6); i6-- > 0; )
            n5.isOdd() && n5.iadd(a11), n5.iushrn(1);
        r2.cmp(e) >= 0 ? (r2.isub(e), h14.isub(n5)) : (e.isub(r2), n5.isub(h14));
      }
      var d9;
      return r2.cmpn(1) === 0 ? d9 = h14 : d9 = n5, d9.cmpn(0) < 0 && d9.iadd(t), d9;
    }, l11.prototype.gcd = function(t) {
      if (this.isZero())
        return t.abs();
      if (t.isZero())
        return this.abs();
      var r2 = this.clone(), e = t.clone();
      r2.negative = 0, e.negative = 0;
      for (var h14 = 0; r2.isEven() && e.isEven(); h14++)
        r2.iushrn(1), e.iushrn(1);
      do {
        for (; r2.isEven(); )
          r2.iushrn(1);
        for (; e.isEven(); )
          e.iushrn(1);
        var n5 = r2.cmp(e);
        if (n5 < 0) {
          var a11 = r2;
          r2 = e, e = a11;
        } else if (n5 === 0 || e.cmpn(1) === 0)
          break;
        r2.isub(e);
      } while (true);
      return e.iushln(h14);
    }, l11.prototype.invm = function(t) {
      return this.egcd(t).a.umod(t);
    }, l11.prototype.isEven = function() {
      return (this.words[0] & 1) === 0;
    }, l11.prototype.isOdd = function() {
      return (this.words[0] & 1) === 1;
    }, l11.prototype.andln = function(t) {
      return this.words[0] & t;
    }, l11.prototype.bincn = function(t) {
      v14(typeof t == "number");
      var r2 = t % 26, e = (t - r2) / 26, h14 = 1 << r2;
      if (this.length <= e)
        return this._expand(e + 1), this.words[e] |= h14, this;
      for (var n5 = h14, a11 = e; n5 !== 0 && a11 < this.length; a11++) {
        var u13 = this.words[a11] | 0;
        u13 += n5, n5 = u13 >>> 26, u13 &= 67108863, this.words[a11] = u13;
      }
      return n5 !== 0 && (this.words[a11] = n5, this.length++), this;
    }, l11.prototype.isZero = function() {
      return this.length === 1 && this.words[0] === 0;
    }, l11.prototype.cmpn = function(t) {
      var r2 = t < 0;
      if (this.negative !== 0 && !r2)
        return -1;
      if (this.negative === 0 && r2)
        return 1;
      this._strip();
      var e;
      if (this.length > 1)
        e = 1;
      else {
        r2 && (t = -t), v14(t <= 67108863, "Number is too big");
        var h14 = this.words[0] | 0;
        e = h14 === t ? 0 : h14 < t ? -1 : 1;
      }
      return this.negative !== 0 ? -e | 0 : e;
    }, l11.prototype.cmp = function(t) {
      if (this.negative !== 0 && t.negative === 0)
        return -1;
      if (this.negative === 0 && t.negative !== 0)
        return 1;
      var r2 = this.ucmp(t);
      return this.negative !== 0 ? -r2 | 0 : r2;
    }, l11.prototype.ucmp = function(t) {
      if (this.length > t.length)
        return 1;
      if (this.length < t.length)
        return -1;
      for (var r2 = 0, e = this.length - 1; e >= 0; e--) {
        var h14 = this.words[e] | 0, n5 = t.words[e] | 0;
        if (h14 !== n5) {
          h14 < n5 ? r2 = -1 : h14 > n5 && (r2 = 1);
          break;
        }
      }
      return r2;
    }, l11.prototype.gtn = function(t) {
      return this.cmpn(t) === 1;
    }, l11.prototype.gt = function(t) {
      return this.cmp(t) === 1;
    }, l11.prototype.gten = function(t) {
      return this.cmpn(t) >= 0;
    }, l11.prototype.gte = function(t) {
      return this.cmp(t) >= 0;
    }, l11.prototype.ltn = function(t) {
      return this.cmpn(t) === -1;
    }, l11.prototype.lt = function(t) {
      return this.cmp(t) === -1;
    }, l11.prototype.lten = function(t) {
      return this.cmpn(t) <= 0;
    }, l11.prototype.lte = function(t) {
      return this.cmp(t) <= 0;
    }, l11.prototype.eqn = function(t) {
      return this.cmpn(t) === 0;
    }, l11.prototype.eq = function(t) {
      return this.cmp(t) === 0;
    }, l11.red = function(t) {
      return new b8(t);
    }, l11.prototype.toRed = function(t) {
      return v14(!this.red, "Already a number in reduction context"), v14(this.negative === 0, "red works only with positives"), t.convertTo(this)._forceRed(t);
    }, l11.prototype.fromRed = function() {
      return v14(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this);
    }, l11.prototype._forceRed = function(t) {
      return this.red = t, this;
    }, l11.prototype.forceRed = function(t) {
      return v14(!this.red, "Already a number in reduction context"), this._forceRed(t);
    }, l11.prototype.redAdd = function(t) {
      return v14(this.red, "redAdd works only with red numbers"), this.red.add(this, t);
    }, l11.prototype.redIAdd = function(t) {
      return v14(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, t);
    }, l11.prototype.redSub = function(t) {
      return v14(this.red, "redSub works only with red numbers"), this.red.sub(this, t);
    }, l11.prototype.redISub = function(t) {
      return v14(this.red, "redISub works only with red numbers"), this.red.isub(this, t);
    }, l11.prototype.redShl = function(t) {
      return v14(this.red, "redShl works only with red numbers"), this.red.shl(this, t);
    }, l11.prototype.redMul = function(t) {
      return v14(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.mul(this, t);
    }, l11.prototype.redIMul = function(t) {
      return v14(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.imul(this, t);
    }, l11.prototype.redSqr = function() {
      return v14(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this);
    }, l11.prototype.redISqr = function() {
      return v14(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this);
    }, l11.prototype.redSqrt = function() {
      return v14(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this);
    }, l11.prototype.redInvm = function() {
      return v14(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this);
    }, l11.prototype.redNeg = function() {
      return v14(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this);
    }, l11.prototype.redPow = function(t) {
      return v14(this.red && !t.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, t);
    };
    var mt3 = { k256: null, p224: null, p192: null, p25519: null };
    function ht(s10, t) {
      this.name = s10, this.p = new l11(t, 16), this.n = this.p.bitLength(), this.k = new l11(1).iushln(this.n).isub(this.p), this.tmp = this._tmp();
    }
    ht.prototype._tmp = function() {
      var t = new l11(null);
      return t.words = new Array(Math.ceil(this.n / 13)), t;
    }, ht.prototype.ireduce = function(t) {
      var r2 = t, e;
      do
        this.split(r2, this.tmp), r2 = this.imulK(r2), r2 = r2.iadd(this.tmp), e = r2.bitLength();
      while (e > this.n);
      var h14 = e < this.n ? -1 : r2.ucmp(this.p);
      return h14 === 0 ? (r2.words[0] = 0, r2.length = 1) : h14 > 0 ? r2.isub(this.p) : r2.strip !== void 0 ? r2.strip() : r2._strip(), r2;
    }, ht.prototype.split = function(t, r2) {
      t.iushrn(this.n, 0, r2);
    }, ht.prototype.imulK = function(t) {
      return t.imul(this.k);
    };
    function vt() {
      ht.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f");
    }
    nt(vt, ht), vt.prototype.split = function(t, r2) {
      for (var e = 4194303, h14 = Math.min(t.length, 9), n5 = 0; n5 < h14; n5++)
        r2.words[n5] = t.words[n5];
      if (r2.length = h14, t.length <= 9) {
        t.words[0] = 0, t.length = 1;
        return;
      }
      var a11 = t.words[9];
      for (r2.words[r2.length++] = a11 & e, n5 = 10; n5 < t.length; n5++) {
        var u13 = t.words[n5] | 0;
        t.words[n5 - 10] = (u13 & e) << 4 | a11 >>> 22, a11 = u13;
      }
      a11 >>>= 22, t.words[n5 - 10] = a11, a11 === 0 && t.length > 10 ? t.length -= 10 : t.length -= 9;
    }, vt.prototype.imulK = function(t) {
      t.words[t.length] = 0, t.words[t.length + 1] = 0, t.length += 2;
      for (var r2 = 0, e = 0; e < t.length; e++) {
        var h14 = t.words[e] | 0;
        r2 += h14 * 977, t.words[e] = r2 & 67108863, r2 = h14 * 64 + (r2 / 67108864 | 0);
      }
      return t.words[t.length - 1] === 0 && (t.length--, t.words[t.length - 1] === 0 && t.length--), t;
    };
    function Qt2() {
      ht.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001");
    }
    nt(Qt2, ht);
    function Vt2() {
      ht.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff");
    }
    nt(Vt2, ht);
    function pt2() {
      ht.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed");
    }
    nt(pt2, ht), pt2.prototype.imulK = function(t) {
      for (var r2 = 0, e = 0; e < t.length; e++) {
        var h14 = (t.words[e] | 0) * 19 + r2, n5 = h14 & 67108863;
        h14 >>>= 26, t.words[e] = n5, r2 = h14;
      }
      return r2 !== 0 && (t.words[t.length++] = r2), t;
    }, l11._prime = function(t) {
      if (mt3[t])
        return mt3[t];
      var r2;
      if (t === "k256")
        r2 = new vt();
      else if (t === "p224")
        r2 = new Qt2();
      else if (t === "p192")
        r2 = new Vt2();
      else if (t === "p25519")
        r2 = new pt2();
      else
        throw new Error("Unknown prime " + t);
      return mt3[t] = r2, r2;
    };
    function b8(s10) {
      if (typeof s10 == "string") {
        var t = l11._prime(s10);
        this.m = t.p, this.prime = t;
      } else
        v14(s10.gtn(1), "modulus must be greater than 1"), this.m = s10, this.prime = null;
    }
    b8.prototype._verify1 = function(t) {
      v14(t.negative === 0, "red works only with positives"), v14(t.red, "red works only with red numbers");
    }, b8.prototype._verify2 = function(t, r2) {
      v14((t.negative | r2.negative) === 0, "red works only with positives"), v14(t.red && t.red === r2.red, "red works only with red numbers");
    }, b8.prototype.imod = function(t) {
      return this.prime ? this.prime.ireduce(t)._forceRed(this) : (Dt3(t, t.umod(this.m)._forceRed(this)), t);
    }, b8.prototype.neg = function(t) {
      return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this);
    }, b8.prototype.add = function(t, r2) {
      this._verify2(t, r2);
      var e = t.add(r2);
      return e.cmp(this.m) >= 0 && e.isub(this.m), e._forceRed(this);
    }, b8.prototype.iadd = function(t, r2) {
      this._verify2(t, r2);
      var e = t.iadd(r2);
      return e.cmp(this.m) >= 0 && e.isub(this.m), e;
    }, b8.prototype.sub = function(t, r2) {
      this._verify2(t, r2);
      var e = t.sub(r2);
      return e.cmpn(0) < 0 && e.iadd(this.m), e._forceRed(this);
    }, b8.prototype.isub = function(t, r2) {
      this._verify2(t, r2);
      var e = t.isub(r2);
      return e.cmpn(0) < 0 && e.iadd(this.m), e;
    }, b8.prototype.shl = function(t, r2) {
      return this._verify1(t), this.imod(t.ushln(r2));
    }, b8.prototype.imul = function(t, r2) {
      return this._verify2(t, r2), this.imod(t.imul(r2));
    }, b8.prototype.mul = function(t, r2) {
      return this._verify2(t, r2), this.imod(t.mul(r2));
    }, b8.prototype.isqr = function(t) {
      return this.imul(t, t.clone());
    }, b8.prototype.sqr = function(t) {
      return this.mul(t, t);
    }, b8.prototype.sqrt = function(t) {
      if (t.isZero())
        return t.clone();
      var r2 = this.m.andln(3);
      if (v14(r2 % 2 === 1), r2 === 3) {
        var e = this.m.add(new l11(1)).iushrn(2);
        return this.pow(t, e);
      }
      for (var h14 = this.m.subn(1), n5 = 0; !h14.isZero() && h14.andln(1) === 0; )
        n5++, h14.iushrn(1);
      v14(!h14.isZero());
      var a11 = new l11(1).toRed(this), u13 = a11.redNeg(), f7 = this.m.subn(1).iushrn(1), i6 = this.m.bitLength();
      for (i6 = new l11(2 * i6 * i6).toRed(this); this.pow(i6, f7).cmp(u13) !== 0; )
        i6.redIAdd(u13);
      for (var o6 = this.pow(i6, h14), d9 = this.pow(t, h14.addn(1).iushrn(1)), m16 = this.pow(t, h14), p12 = n5; m16.cmp(a11) !== 0; ) {
        for (var M11 = m16, g15 = 0; M11.cmp(a11) !== 0; g15++)
          M11 = M11.redSqr();
        v14(g15 < p12);
        var c10 = this.pow(o6, new l11(1).iushln(p12 - g15 - 1));
        d9 = d9.redMul(c10), o6 = c10.redSqr(), m16 = m16.redMul(o6), p12 = g15;
      }
      return d9;
    }, b8.prototype.invm = function(t) {
      var r2 = t._invmp(this.m);
      return r2.negative !== 0 ? (r2.negative = 0, this.imod(r2).redNeg()) : this.imod(r2);
    }, b8.prototype.pow = function(t, r2) {
      if (r2.isZero())
        return new l11(1).toRed(this);
      if (r2.cmpn(1) === 0)
        return t.clone();
      var e = 4, h14 = new Array(1 << e);
      h14[0] = new l11(1).toRed(this), h14[1] = t;
      for (var n5 = 2; n5 < h14.length; n5++)
        h14[n5] = this.mul(h14[n5 - 1], t);
      var a11 = h14[0], u13 = 0, f7 = 0, i6 = r2.bitLength() % 26;
      for (i6 === 0 && (i6 = 26), n5 = r2.length - 1; n5 >= 0; n5--) {
        for (var o6 = r2.words[n5], d9 = i6 - 1; d9 >= 0; d9--) {
          var m16 = o6 >> d9 & 1;
          if (a11 !== h14[0] && (a11 = this.sqr(a11)), m16 === 0 && u13 === 0) {
            f7 = 0;
            continue;
          }
          u13 <<= 1, u13 |= m16, f7++, !(f7 !== e && (n5 !== 0 || d9 !== 0)) && (a11 = this.mul(a11, h14[u13]), f7 = 0, u13 = 0);
        }
        i6 = 26;
      }
      return a11;
    }, b8.prototype.convertTo = function(t) {
      var r2 = t.umod(this.m);
      return r2 === t ? r2.clone() : r2;
    }, b8.prototype.convertFrom = function(t) {
      var r2 = t.clone();
      return r2.red = null, r2;
    }, l11.mont = function(t) {
      return new at(t);
    };
    function at(s10) {
      b8.call(this, s10), this.shift = this.m.bitLength(), this.shift % 26 !== 0 && (this.shift += 26 - this.shift % 26), this.r = new l11(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv);
    }
    nt(at, b8), at.prototype.convertTo = function(t) {
      return this.imod(t.ushln(this.shift));
    }, at.prototype.convertFrom = function(t) {
      var r2 = this.imod(t.mul(this.rinv));
      return r2.red = null, r2;
    }, at.prototype.imul = function(t, r2) {
      if (t.isZero() || r2.isZero())
        return t.words[0] = 0, t.length = 1, t;
      var e = t.imul(r2), h14 = e.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), n5 = e.isub(h14).iushrn(this.shift), a11 = n5;
      return n5.cmp(this.m) >= 0 ? a11 = n5.isub(this.m) : n5.cmpn(0) < 0 && (a11 = n5.iadd(this.m)), a11._forceRed(this);
    }, at.prototype.mul = function(t, r2) {
      if (t.isZero() || r2.isZero())
        return new l11(0)._forceRed(this);
      var e = t.mul(r2), h14 = e.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), n5 = e.isub(h14).iushrn(this.shift), a11 = n5;
      return n5.cmp(this.m) >= 0 ? a11 = n5.isub(this.m) : n5.cmpn(0) < 0 && (a11 = n5.iadd(this.m)), a11._forceRed(this);
    }, at.prototype.invm = function(t) {
      var r2 = this.imod(t._invmp(this.m).mul(this.r2));
      return r2._forceRed(this);
    };
  })(typeof Ot3 > "u" || Ot3, mi3);
});
var st = {};
qi(st, { BN: () => Ri, default: () => Zi });
var Mi = di(Kt());
lt(st, di(Kt()));
var { BN: Ri } = Mi;
var { default: pi, ...Li } = Mi;
var Zi = pi !== void 0 ? pi : Li;

// https://esm.sh/v135/rlp@2.2.7/denonext/rlp.mjs
var rlp_exports = {};
__export(rlp_exports, {
  __esModule: () => k,
  decode: () => F,
  default: () => K,
  encode: () => G,
  getLength: () => C
});
import { Buffer as __Buffer$ } from "node:buffer";
var require3 = (n5) => {
  const e = (m16) => typeof m16.default < "u" ? m16.default : m16, c10 = (m16) => Object.assign({}, m16);
  switch (n5) {
    case "bn.js":
      return e(bn_exports);
    default:
      throw new Error('module "' + n5 + '" not found');
  }
};
var L = Object.create;
var c = Object.defineProperty;
var R = Object.getOwnPropertyDescriptor;
var A = Object.getOwnPropertyNames;
var S = Object.getPrototypeOf;
var H = Object.prototype.hasOwnProperty;
var I = ((e) => typeof require3 < "u" ? require3 : typeof Proxy < "u" ? new Proxy(e, { get: (r2, n5) => (typeof require3 < "u" ? require3 : r2)[n5] }) : e)(function(e) {
  if (typeof require3 < "u")
    return require3.apply(this, arguments);
  throw Error('Dynamic require of "' + e + '" is not supported');
});
var M = (e, r2) => () => (r2 || e((r2 = { exports: {} }).exports, r2), r2.exports);
var T = (e, r2) => {
  for (var n5 in r2)
    c(e, n5, { get: r2[n5], enumerable: true });
};
var h = (e, r2, n5, f7) => {
  if (r2 && typeof r2 == "object" || typeof r2 == "function")
    for (let t of A(r2))
      !H.call(e, t) && t !== n5 && c(e, t, { get: () => r2[t], enumerable: !(f7 = R(r2, t)) || f7.enumerable });
  return e;
};
var l = (e, r2, n5) => (h(e, r2, "default"), n5 && h(n5, r2, "default"));
var v = (e, r2, n5) => (n5 = e != null ? L(S(e)) : {}, h(r2 || !e || !e.__esModule ? c(n5, "default", { value: e, enumerable: true }) : n5, e));
var B = M((i6) => {
  "use strict";
  var j7 = i6 && i6.__importDefault || function(e) {
    return e && e.__esModule ? e : { default: e };
  };
  Object.defineProperty(i6, "__esModule", { value: true });
  i6.getLength = i6.decode = i6.encode = void 0;
  var D9 = j7(I("bn.js"));
  function b8(e) {
    if (Array.isArray(e)) {
      for (var r2 = [], n5 = 0; n5 < e.length; n5++)
        r2.push(b8(e[n5]));
      var f7 = __Buffer$.concat(r2);
      return __Buffer$.concat([_12(f7.length, 192), f7]);
    } else {
      var t = w13(e);
      return t.length === 1 && t[0] < 128 ? t : __Buffer$.concat([_12(t.length, 128), t]);
    }
  }
  i6.encode = b8;
  function g15(e, r2) {
    if (e[0] === "0" && e[1] === "0")
      throw new Error("invalid RLP: extra zeros");
    return parseInt(e, r2);
  }
  function _12(e, r2) {
    if (e < 56)
      return __Buffer$.from([e + r2]);
    var n5 = m16(e), f7 = n5.length / 2, t = m16(r2 + 55 + f7);
    return __Buffer$.from(t + n5, "hex");
  }
  function q12(e, r2) {
    if (r2 === void 0 && (r2 = false), !e || e.length === 0)
      return __Buffer$.from([]);
    var n5 = w13(e), f7 = x13(n5);
    if (r2)
      return f7;
    if (f7.remainder.length !== 0)
      throw new Error("invalid remainder");
    return f7.data;
  }
  i6.decode = q12;
  function z7(e) {
    if (!e || e.length === 0)
      return __Buffer$.from([]);
    var r2 = w13(e), n5 = r2[0];
    if (n5 <= 127)
      return r2.length;
    if (n5 <= 183)
      return n5 - 127;
    if (n5 <= 191)
      return n5 - 182;
    if (n5 <= 247)
      return n5 - 191;
    var f7 = n5 - 246, t = g15(r2.slice(1, f7).toString("hex"), 16);
    return f7 + t;
  }
  i6.getLength = z7;
  function x13(e) {
    var r2, n5, f7, t, d9, s10 = [], o6 = e[0];
    if (o6 <= 127)
      return { data: e.slice(0, 1), remainder: e.slice(1) };
    if (o6 <= 183) {
      if (r2 = o6 - 127, o6 === 128 ? f7 = __Buffer$.from([]) : f7 = e.slice(1, r2), r2 === 2 && f7[0] < 128)
        throw new Error("invalid rlp encoding: byte must be less 0x80");
      return { data: f7, remainder: e.slice(r2) };
    } else if (o6 <= 191) {
      if (n5 = o6 - 182, e.length - 1 < n5)
        throw new Error("invalid RLP: not enough bytes for string length");
      if (r2 = g15(e.slice(1, n5).toString("hex"), 16), r2 <= 55)
        throw new Error("invalid RLP: expected string length to be greater than 55");
      if (f7 = e.slice(n5, r2 + n5), f7.length < r2)
        throw new Error("invalid RLP: not enough bytes for string");
      return { data: f7, remainder: e.slice(r2 + n5) };
    } else if (o6 <= 247) {
      for (r2 = o6 - 191, t = e.slice(1, r2); t.length; )
        d9 = x13(t), s10.push(d9.data), t = d9.remainder;
      return { data: s10, remainder: e.slice(r2) };
    } else {
      n5 = o6 - 246, r2 = g15(e.slice(1, n5).toString("hex"), 16);
      var u13 = n5 + r2;
      if (u13 > e.length)
        throw new Error("invalid rlp: total length is larger than the data");
      if (t = e.slice(n5, u13), t.length === 0)
        throw new Error("invalid rlp, List has a invalid length");
      for (; t.length; )
        d9 = x13(t), s10.push(d9.data), t = d9.remainder;
      return { data: s10, remainder: e.slice(u13) };
    }
  }
  function y10(e) {
    return e.slice(0, 2) === "0x";
  }
  function N5(e) {
    return typeof e != "string" ? e : y10(e) ? e.slice(2) : e;
  }
  function m16(e) {
    if (e < 0)
      throw new Error("Invalid integer as argument, must be unsigned!");
    var r2 = e.toString(16);
    return r2.length % 2 ? "0" + r2 : r2;
  }
  function O9(e) {
    return e.length % 2 ? "0" + e : e;
  }
  function U5(e) {
    var r2 = m16(e);
    return __Buffer$.from(r2, "hex");
  }
  function w13(e) {
    if (!__Buffer$.isBuffer(e)) {
      if (typeof e == "string")
        return y10(e) ? __Buffer$.from(O9(N5(e)), "hex") : __Buffer$.from(e);
      if (typeof e == "number" || typeof e == "bigint")
        return e ? U5(e) : __Buffer$.from([]);
      if (e == null)
        return __Buffer$.from([]);
      if (e instanceof Uint8Array)
        return __Buffer$.from(e);
      if (D9.default.isBN(e))
        return __Buffer$.from(e.toArray());
      throw new Error("invalid type");
    }
    return e;
  }
});
var a = {};
T(a, { __esModule: () => k, decode: () => F, default: () => K, encode: () => G, getLength: () => C });
var P = v(B());
l(a, v(B()));
var { __esModule: k, getLength: C, decode: F, encode: G } = P;
var { default: E, ...J } = P;
var K = E !== void 0 ? E : J;

// https://esm.sh/v135/ethereum-cryptography@0.1.3/denonext/secp256k1.js
var secp256k1_exports2 = {};
__export(secp256k1_exports2, {
  __esModule: () => z4,
  createPrivateKey: () => D2,
  createPrivateKeySync: () => F4,
  default: () => J2
});

// https://esm.sh/v135/secp256k1@4.0.3/denonext/secp256k1.mjs
var secp256k1_exports = {};
__export(secp256k1_exports, {
  default: () => H3
});

// https://esm.sh/v135/elliptic@6.5.4/denonext/elliptic.mjs
var elliptic_exports = {};
__export(elliptic_exports, {
  default: () => ed
});

// https://esm.sh/v135/brorand@1.1.0/denonext/brorand.mjs
var brorand_exports = {};
__export(brorand_exports, {
  Rand: () => A2,
  default: () => U
});
import * as __0$2 from "node:crypto";
var require4 = (n5) => {
  const e = (m16) => typeof m16.default < "u" ? m16.default : m16, c10 = (m16) => Object.assign({}, m16);
  switch (n5) {
    case "crypto":
      return e(__0$2);
    default:
      throw new Error('module "' + n5 + '" not found');
  }
};
var g = Object.create;
var u = Object.defineProperty;
var w = Object.getOwnPropertyDescriptor;
var h2 = Object.getOwnPropertyNames;
var R2 = Object.getPrototypeOf;
var v2 = Object.prototype.hasOwnProperty;
var x = ((r2) => typeof require4 < "u" ? require4 : typeof Proxy < "u" ? new Proxy(r2, { get: (e, t) => (typeof require4 < "u" ? require4 : e)[t] }) : r2)(function(r2) {
  if (typeof require4 < "u")
    return require4.apply(this, arguments);
  throw Error('Dynamic require of "' + r2 + '" is not supported');
});
var B2 = (r2, e) => () => (e || r2((e = { exports: {} }).exports, e), e.exports);
var V = (r2, e) => {
  for (var t in e)
    u(r2, t, { get: e[t], enumerable: true });
};
var f = (r2, e, t, s10) => {
  if (e && typeof e == "object" || typeof e == "function")
    for (let d9 of h2(e))
      !v2.call(r2, d9) && d9 !== t && u(r2, d9, { get: () => e[d9], enumerable: !(s10 = w(e, d9)) || s10.enumerable });
  return r2;
};
var a2 = (r2, e, t) => (f(r2, e, "default"), t && f(t, e, "default"));
var _ = (r2, e, t) => (t = r2 != null ? g(R2(r2)) : {}, f(e || !r2 || !r2.__esModule ? u(t, "default", { value: r2, enumerable: true }) : t, r2));
var y = B2((j7, l11) => {
  var i6;
  l11.exports = function(e) {
    return i6 || (i6 = new n5(null)), i6.generate(e);
  };
  function n5(r2) {
    this.rand = r2;
  }
  l11.exports.Rand = n5;
  n5.prototype.generate = function(e) {
    return this._rand(e);
  };
  n5.prototype._rand = function(e) {
    if (this.rand.getBytes)
      return this.rand.getBytes(e);
    for (var t = new Uint8Array(e), s10 = 0; s10 < t.length; s10++)
      t[s10] = this.rand.getByte();
    return t;
  };
  if (typeof self == "object")
    self.crypto && self.crypto.getRandomValues ? n5.prototype._rand = function(e) {
      var t = new Uint8Array(e);
      return self.crypto.getRandomValues(t), t;
    } : self.msCrypto && self.msCrypto.getRandomValues ? n5.prototype._rand = function(e) {
      var t = new Uint8Array(e);
      return self.msCrypto.getRandomValues(t), t;
    } : typeof window == "object" && (n5.prototype._rand = function() {
      throw new Error("Not implemented yet");
    });
  else
    try {
      if (p12 = x("crypto"), typeof p12.randomBytes != "function")
        throw new Error("Not supported");
      n5.prototype._rand = function(e) {
        return p12.randomBytes(e);
      };
    } catch {
    }
  var p12;
});
var o = {};
V(o, { Rand: () => A2, default: () => U });
var m = _(y());
a2(o, _(y()));
var { Rand: A2 } = m;
var { default: c2, ...C2 } = m;
var U = c2 !== void 0 ? c2 : C2;

// https://esm.sh/v135/hash.js@1.1.7/denonext/hash.mjs
var hash_exports = {};
__export(hash_exports, {
  default: () => Ee
});

// https://esm.sh/v135/minimalistic-assert@1.0.1/denonext/minimalistic-assert.mjs
var minimalistic_assert_exports = {};
__export(minimalistic_assert_exports, {
  default: () => j,
  equal: () => b
});
var m2 = Object.create;
var i = Object.defineProperty;
var w2 = Object.getOwnPropertyDescriptor;
var x2 = Object.getOwnPropertyNames;
var q = Object.getPrototypeOf;
var E2 = Object.prototype.hasOwnProperty;
var h3 = (r2, e) => () => (e || r2((e = { exports: {} }).exports, e), e.exports);
var A3 = (r2, e) => {
  for (var t in e)
    i(r2, t, { get: e[t], enumerable: true });
};
var a3 = (r2, e, t, n5) => {
  if (e && typeof e == "object" || typeof e == "function")
    for (let f7 of x2(e))
      !E2.call(r2, f7) && f7 !== t && i(r2, f7, { get: () => e[f7], enumerable: !(n5 = w2(e, f7)) || n5.enumerable });
  return r2;
};
var s = (r2, e, t) => (a3(r2, e, "default"), t && a3(t, e, "default"));
var d = (r2, e, t) => (t = r2 != null ? m2(q(r2)) : {}, a3(e || !r2 || !r2.__esModule ? i(t, "default", { value: r2, enumerable: true }) : t, r2));
var u2 = h3((v14, _12) => {
  _12.exports = l11;
  function l11(r2, e) {
    if (!r2)
      throw new Error(e || "Assertion failed");
  }
  l11.equal = function(e, t, n5) {
    if (e != t)
      throw new Error(n5 || "Assertion failed: " + e + " != " + t);
  };
});
var o2 = {};
A3(o2, { default: () => j, equal: () => b });
var c3 = d(u2());
s(o2, d(u2()));
var { equal: b } = c3;
var { default: p, ...g2 } = c3;
var j = p !== void 0 ? p : g2;

// https://esm.sh/v135/inherits@2.0.4/denonext/inherits.mjs
var inherits_exports = {};
__export(inherits_exports, {
  default: () => w3
});
var _2 = Object.create;
var u3 = Object.defineProperty;
var y2 = Object.getOwnPropertyDescriptor;
var d2 = Object.getOwnPropertyNames;
var b2 = Object.getPrototypeOf;
var m3 = Object.prototype.hasOwnProperty;
var x3 = (o6, e) => () => (e || o6((e = { exports: {} }).exports, e), e.exports);
var h4 = (o6, e) => {
  for (var t in e)
    u3(o6, t, { get: e[t], enumerable: true });
};
var p2 = (o6, e, t, r2) => {
  if (e && typeof e == "object" || typeof e == "function")
    for (let i6 of d2(e))
      !m3.call(o6, i6) && i6 !== t && u3(o6, i6, { get: () => e[i6], enumerable: !(r2 = y2(e, i6)) || r2.enumerable });
  return o6;
};
var f2 = (o6, e, t) => (p2(o6, e, "default"), t && p2(t, e, "default"));
var c4 = (o6, e, t) => (t = o6 != null ? _2(b2(o6)) : {}, p2(e || !o6 || !o6.__esModule ? u3(t, "default", { value: o6, enumerable: true }) : t, o6));
var l2 = x3((g15, a11) => {
  typeof Object.create == "function" ? a11.exports = function(e, t) {
    t && (e.super_ = t, e.prototype = Object.create(t.prototype, { constructor: { value: e, enumerable: false, writable: true, configurable: true } }));
  } : a11.exports = function(e, t) {
    if (t) {
      e.super_ = t;
      var r2 = function() {
      };
      r2.prototype = t.prototype, e.prototype = new r2(), e.prototype.constructor = e;
    }
  };
});
var n = {};
h4(n, { default: () => w3 });
var j2 = c4(l2());
f2(n, c4(l2()));
var { default: s2, ...v3 } = j2;
var w3 = s2 !== void 0 ? s2 : v3;

// https://esm.sh/v135/hash.js@1.1.7/denonext/hash.mjs
var require5 = (n5) => {
  const e = (m16) => typeof m16.default < "u" ? m16.default : m16, c10 = (m16) => Object.assign({}, m16);
  switch (n5) {
    case "minimalistic-assert":
      return e(minimalistic_assert_exports);
    case "inherits":
      return e(inherits_exports);
    default:
      throw new Error('module "' + n5 + '" not found');
  }
};
var hr = Object.create;
var i0 = Object.defineProperty;
var ir = Object.getOwnPropertyDescriptor;
var nr = Object.getOwnPropertyNames;
var sr = Object.getPrototypeOf;
var fr = Object.prototype.hasOwnProperty;
var K2 = ((r2) => typeof require5 < "u" ? require5 : typeof Proxy < "u" ? new Proxy(r2, { get: (e, a11) => (typeof require5 < "u" ? require5 : e)[a11] }) : r2)(function(r2) {
  if (typeof require5 < "u")
    return require5.apply(this, arguments);
  throw Error('Dynamic require of "' + r2 + '" is not supported');
});
var p3 = (r2, e) => () => (e || r2((e = { exports: {} }).exports, e), e.exports);
var ur = (r2, e) => {
  for (var a11 in e)
    i0(r2, a11, { get: e[a11], enumerable: true });
};
var h0 = (r2, e, a11, h14) => {
  if (e && typeof e == "object" || typeof e == "function")
    for (let t of nr(e))
      !fr.call(r2, t) && t !== a11 && i0(r2, t, { get: () => e[t], enumerable: !(h14 = ir(e, t)) || h14.enumerable });
  return r2;
};
var I2 = (r2, e, a11) => (h0(r2, e, "default"), a11 && h0(a11, e, "default"));
var H0 = (r2, e, a11) => (a11 = r2 != null ? hr(sr(r2)) : {}, h0(e || !r2 || !r2.__esModule ? i0(a11, "default", { value: r2, enumerable: true }) : a11, r2));
var g3 = p3((o6) => {
  "use strict";
  var cr = K2("minimalistic-assert"), xr = K2("inherits");
  o6.inherits = xr;
  function or(r2, e) {
    return (r2.charCodeAt(e) & 64512) !== 55296 || e < 0 || e + 1 >= r2.length ? false : (r2.charCodeAt(e + 1) & 64512) === 56320;
  }
  function vr(r2, e) {
    if (Array.isArray(r2))
      return r2.slice();
    if (!r2)
      return [];
    var a11 = [];
    if (typeof r2 == "string")
      if (e) {
        if (e === "hex")
          for (r2 = r2.replace(/[^a-z0-9]+/ig, ""), r2.length % 2 !== 0 && (r2 = "0" + r2), t = 0; t < r2.length; t += 2)
            a11.push(parseInt(r2[t] + r2[t + 1], 16));
      } else
        for (var h14 = 0, t = 0; t < r2.length; t++) {
          var i6 = r2.charCodeAt(t);
          i6 < 128 ? a11[h14++] = i6 : i6 < 2048 ? (a11[h14++] = i6 >> 6 | 192, a11[h14++] = i6 & 63 | 128) : or(r2, t) ? (i6 = 65536 + ((i6 & 1023) << 10) + (r2.charCodeAt(++t) & 1023), a11[h14++] = i6 >> 18 | 240, a11[h14++] = i6 >> 12 & 63 | 128, a11[h14++] = i6 >> 6 & 63 | 128, a11[h14++] = i6 & 63 | 128) : (a11[h14++] = i6 >> 12 | 224, a11[h14++] = i6 >> 6 & 63 | 128, a11[h14++] = i6 & 63 | 128);
        }
    else
      for (t = 0; t < r2.length; t++)
        a11[t] = r2[t] | 0;
    return a11;
  }
  o6.toArray = vr;
  function dr(r2) {
    for (var e = "", a11 = 0; a11 < r2.length; a11++)
      e += z0(r2[a11].toString(16));
    return e;
  }
  o6.toHex = dr;
  function A0(r2) {
    var e = r2 >>> 24 | r2 >>> 8 & 65280 | r2 << 8 & 16711680 | (r2 & 255) << 24;
    return e >>> 0;
  }
  o6.htonl = A0;
  function br(r2, e) {
    for (var a11 = "", h14 = 0; h14 < r2.length; h14++) {
      var t = r2[h14];
      e === "little" && (t = A0(t)), a11 += B0(t.toString(16));
    }
    return a11;
  }
  o6.toHex32 = br;
  function z0(r2) {
    return r2.length === 1 ? "0" + r2 : r2;
  }
  o6.zero2 = z0;
  function B0(r2) {
    return r2.length === 7 ? "0" + r2 : r2.length === 6 ? "00" + r2 : r2.length === 5 ? "000" + r2 : r2.length === 4 ? "0000" + r2 : r2.length === 3 ? "00000" + r2 : r2.length === 2 ? "000000" + r2 : r2.length === 1 ? "0000000" + r2 : r2;
  }
  o6.zero8 = B0;
  function lr(r2, e, a11, h14) {
    var t = a11 - e;
    cr(t % 4 === 0);
    for (var i6 = new Array(t / 4), n5 = 0, s10 = e; n5 < i6.length; n5++, s10 += 4) {
      var u13;
      h14 === "big" ? u13 = r2[s10] << 24 | r2[s10 + 1] << 16 | r2[s10 + 2] << 8 | r2[s10 + 3] : u13 = r2[s10 + 3] << 24 | r2[s10 + 2] << 16 | r2[s10 + 1] << 8 | r2[s10], i6[n5] = u13 >>> 0;
    }
    return i6;
  }
  o6.join32 = lr;
  function _r(r2, e) {
    for (var a11 = new Array(r2.length * 4), h14 = 0, t = 0; h14 < r2.length; h14++, t += 4) {
      var i6 = r2[h14];
      e === "big" ? (a11[t] = i6 >>> 24, a11[t + 1] = i6 >>> 16 & 255, a11[t + 2] = i6 >>> 8 & 255, a11[t + 3] = i6 & 255) : (a11[t + 3] = i6 >>> 24, a11[t + 2] = i6 >>> 16 & 255, a11[t + 1] = i6 >>> 8 & 255, a11[t] = i6 & 255);
    }
    return a11;
  }
  o6.split32 = _r;
  function pr(r2, e) {
    return r2 >>> e | r2 << 32 - e;
  }
  o6.rotr32 = pr;
  function gr(r2, e) {
    return r2 << e | r2 >>> 32 - e;
  }
  o6.rotl32 = gr;
  function Sr(r2, e) {
    return r2 + e >>> 0;
  }
  o6.sum32 = Sr;
  function mr(r2, e, a11) {
    return r2 + e + a11 >>> 0;
  }
  o6.sum32_3 = mr;
  function qr(r2, e, a11, h14) {
    return r2 + e + a11 + h14 >>> 0;
  }
  o6.sum32_4 = qr;
  function Hr(r2, e, a11, h14, t) {
    return r2 + e + a11 + h14 + t >>> 0;
  }
  o6.sum32_5 = Hr;
  function Ar(r2, e, a11, h14) {
    var t = r2[e], i6 = r2[e + 1], n5 = h14 + i6 >>> 0, s10 = (n5 < h14 ? 1 : 0) + a11 + t;
    r2[e] = s10 >>> 0, r2[e + 1] = n5;
  }
  o6.sum64 = Ar;
  function zr(r2, e, a11, h14) {
    var t = e + h14 >>> 0, i6 = (t < e ? 1 : 0) + r2 + a11;
    return i6 >>> 0;
  }
  o6.sum64_hi = zr;
  function Br(r2, e, a11, h14) {
    var t = e + h14;
    return t >>> 0;
  }
  o6.sum64_lo = Br;
  function yr(r2, e, a11, h14, t, i6, n5, s10) {
    var u13 = 0, f7 = e;
    f7 = f7 + h14 >>> 0, u13 += f7 < e ? 1 : 0, f7 = f7 + i6 >>> 0, u13 += f7 < i6 ? 1 : 0, f7 = f7 + s10 >>> 0, u13 += f7 < s10 ? 1 : 0;
    var x13 = r2 + a11 + t + n5 + u13;
    return x13 >>> 0;
  }
  o6.sum64_4_hi = yr;
  function Cr(r2, e, a11, h14, t, i6, n5, s10) {
    var u13 = e + h14 + i6 + s10;
    return u13 >>> 0;
  }
  o6.sum64_4_lo = Cr;
  function Lr(r2, e, a11, h14, t, i6, n5, s10, u13, f7) {
    var x13 = 0, c10 = e;
    c10 = c10 + h14 >>> 0, x13 += c10 < e ? 1 : 0, c10 = c10 + i6 >>> 0, x13 += c10 < i6 ? 1 : 0, c10 = c10 + s10 >>> 0, x13 += c10 < s10 ? 1 : 0, c10 = c10 + f7 >>> 0, x13 += c10 < f7 ? 1 : 0;
    var v14 = r2 + a11 + t + n5 + u13 + x13;
    return v14 >>> 0;
  }
  o6.sum64_5_hi = Lr;
  function Wr(r2, e, a11, h14, t, i6, n5, s10, u13, f7) {
    var x13 = e + h14 + i6 + s10 + f7;
    return x13 >>> 0;
  }
  o6.sum64_5_lo = Wr;
  function kr(r2, e, a11) {
    var h14 = e << 32 - a11 | r2 >>> a11;
    return h14 >>> 0;
  }
  o6.rotr64_hi = kr;
  function Dr(r2, e, a11) {
    var h14 = r2 << 32 - a11 | e >>> a11;
    return h14 >>> 0;
  }
  o6.rotr64_lo = Dr;
  function Fr(r2, e, a11) {
    return r2 >>> a11;
  }
  o6.shr64_hi = Fr;
  function Er(r2, e, a11) {
    var h14 = r2 << 32 - a11 | e >>> a11;
    return h14 >>> 0;
  }
  o6.shr64_lo = Er;
});
var P2 = p3((C02) => {
  "use strict";
  var y0 = g3(), Kr = K2("minimalistic-assert");
  function r0() {
    this.pending = null, this.pendingTotal = 0, this.blockSize = this.constructor.blockSize, this.outSize = this.constructor.outSize, this.hmacStrength = this.constructor.hmacStrength, this.padLength = this.constructor.padLength / 8, this.endian = "big", this._delta8 = this.blockSize / 8, this._delta32 = this.blockSize / 32;
  }
  C02.BlockHash = r0;
  r0.prototype.update = function(e, a11) {
    if (e = y0.toArray(e, a11), this.pending ? this.pending = this.pending.concat(e) : this.pending = e, this.pendingTotal += e.length, this.pending.length >= this._delta8) {
      e = this.pending;
      var h14 = e.length % this._delta8;
      this.pending = e.slice(e.length - h14, e.length), this.pending.length === 0 && (this.pending = null), e = y0.join32(e, 0, e.length - h14, this.endian);
      for (var t = 0; t < e.length; t += this._delta32)
        this._update(e, t, t + this._delta32);
    }
    return this;
  };
  r0.prototype.digest = function(e) {
    return this.update(this._pad()), Kr(this.pending === null), this._digest(e);
  };
  r0.prototype._pad = function() {
    var e = this.pendingTotal, a11 = this._delta8, h14 = a11 - (e + this.padLength) % a11, t = new Array(h14 + this.padLength);
    t[0] = 128;
    for (var i6 = 1; i6 < h14; i6++)
      t[i6] = 0;
    if (e <<= 3, this.endian === "big") {
      for (var n5 = 8; n5 < this.padLength; n5++)
        t[i6++] = 0;
      t[i6++] = 0, t[i6++] = 0, t[i6++] = 0, t[i6++] = 0, t[i6++] = e >>> 24 & 255, t[i6++] = e >>> 16 & 255, t[i6++] = e >>> 8 & 255, t[i6++] = e & 255;
    } else
      for (t[i6++] = e & 255, t[i6++] = e >>> 8 & 255, t[i6++] = e >>> 16 & 255, t[i6++] = e >>> 24 & 255, t[i6++] = 0, t[i6++] = 0, t[i6++] = 0, t[i6++] = 0, n5 = 8; n5 < this.padLength; n5++)
        t[i6++] = 0;
    return t;
  };
});
var n0 = p3((C8) => {
  "use strict";
  var Ir = g3(), q12 = Ir.rotr32;
  function Pr(r2, e, a11, h14) {
    if (r2 === 0)
      return L02(e, a11, h14);
    if (r2 === 1 || r2 === 3)
      return k0(e, a11, h14);
    if (r2 === 2)
      return W0(e, a11, h14);
  }
  C8.ft_1 = Pr;
  function L02(r2, e, a11) {
    return r2 & e ^ ~r2 & a11;
  }
  C8.ch32 = L02;
  function W0(r2, e, a11) {
    return r2 & e ^ r2 & a11 ^ e & a11;
  }
  C8.maj32 = W0;
  function k0(r2, e, a11) {
    return r2 ^ e ^ a11;
  }
  C8.p32 = k0;
  function Mr(r2) {
    return q12(r2, 2) ^ q12(r2, 13) ^ q12(r2, 22);
  }
  C8.s0_256 = Mr;
  function Rr(r2) {
    return q12(r2, 6) ^ q12(r2, 11) ^ q12(r2, 25);
  }
  C8.s1_256 = Rr;
  function Gr(r2) {
    return q12(r2, 7) ^ q12(r2, 18) ^ r2 >>> 3;
  }
  C8.g0_256 = Gr;
  function Jr(r2) {
    return q12(r2, 17) ^ q12(r2, 19) ^ r2 >>> 10;
  }
  C8.g1_256 = Jr;
});
var E0 = p3((Re3, F0) => {
  "use strict";
  var M11 = g3(), Nr = P2(), Or = n0(), s02 = M11.rotl32, $2 = M11.sum32, Qr = M11.sum32_5, Ur = Or.ft_1, D0 = Nr.BlockHash, Vr = [1518500249, 1859775393, 2400959708, 3395469782];
  function H7() {
    if (!(this instanceof H7))
      return new H7();
    D0.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.W = new Array(80);
  }
  M11.inherits(H7, D0);
  F0.exports = H7;
  H7.blockSize = 512;
  H7.outSize = 160;
  H7.hmacStrength = 80;
  H7.padLength = 64;
  H7.prototype._update = function(e, a11) {
    for (var h14 = this.W, t = 0; t < 16; t++)
      h14[t] = e[a11 + t];
    for (; t < h14.length; t++)
      h14[t] = s02(h14[t - 3] ^ h14[t - 8] ^ h14[t - 14] ^ h14[t - 16], 1);
    var i6 = this.h[0], n5 = this.h[1], s10 = this.h[2], u13 = this.h[3], f7 = this.h[4];
    for (t = 0; t < h14.length; t++) {
      var x13 = ~~(t / 20), c10 = Qr(s02(i6, 5), Ur(x13, n5, s10, u13), f7, h14[t], Vr[x13]);
      f7 = u13, u13 = s10, s10 = s02(n5, 30), n5 = i6, i6 = c10;
    }
    this.h[0] = $2(this.h[0], i6), this.h[1] = $2(this.h[1], n5), this.h[2] = $2(this.h[2], s10), this.h[3] = $2(this.h[3], u13), this.h[4] = $2(this.h[4], f7);
  };
  H7.prototype._digest = function(e) {
    return e === "hex" ? M11.toHex32(this.h, "big") : M11.split32(this.h, "big");
  };
});
var f0 = p3((Ge, I0) => {
  "use strict";
  var R7 = g3(), Xr = P2(), G5 = n0(), Yr = K2("minimalistic-assert"), S9 = R7.sum32, Zr = R7.sum32_4, $r = R7.sum32_5, jr = G5.ch32, wr = G5.maj32, Tr = G5.s0_256, re2 = G5.s1_256, ee2 = G5.g0_256, te2 = G5.g1_256, K02 = Xr.BlockHash, ae = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];
  function A11() {
    if (!(this instanceof A11))
      return new A11();
    K02.call(this), this.h = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225], this.k = ae, this.W = new Array(64);
  }
  R7.inherits(A11, K02);
  I0.exports = A11;
  A11.blockSize = 512;
  A11.outSize = 256;
  A11.hmacStrength = 192;
  A11.padLength = 64;
  A11.prototype._update = function(e, a11) {
    for (var h14 = this.W, t = 0; t < 16; t++)
      h14[t] = e[a11 + t];
    for (; t < h14.length; t++)
      h14[t] = Zr(te2(h14[t - 2]), h14[t - 7], ee2(h14[t - 15]), h14[t - 16]);
    var i6 = this.h[0], n5 = this.h[1], s10 = this.h[2], u13 = this.h[3], f7 = this.h[4], x13 = this.h[5], c10 = this.h[6], v14 = this.h[7];
    for (Yr(this.k.length === h14.length), t = 0; t < h14.length; t++) {
      var d9 = $r(v14, re2(f7), jr(f7, x13, c10), this.k[t], h14[t]), _12 = S9(Tr(i6), wr(i6, n5, s10));
      v14 = c10, c10 = x13, x13 = f7, f7 = S9(u13, d9), u13 = s10, s10 = n5, n5 = i6, i6 = S9(d9, _12);
    }
    this.h[0] = S9(this.h[0], i6), this.h[1] = S9(this.h[1], n5), this.h[2] = S9(this.h[2], s10), this.h[3] = S9(this.h[3], u13), this.h[4] = S9(this.h[4], f7), this.h[5] = S9(this.h[5], x13), this.h[6] = S9(this.h[6], c10), this.h[7] = S9(this.h[7], v14);
  };
  A11.prototype._digest = function(e) {
    return e === "hex" ? R7.toHex32(this.h, "big") : R7.split32(this.h, "big");
  };
});
var R0 = p3((Je, M02) => {
  "use strict";
  var u0 = g3(), P0 = f0();
  function L7() {
    if (!(this instanceof L7))
      return new L7();
    P0.call(this), this.h = [3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428];
  }
  u0.inherits(L7, P0);
  M02.exports = L7;
  L7.blockSize = 512;
  L7.outSize = 224;
  L7.hmacStrength = 192;
  L7.padLength = 64;
  L7.prototype._digest = function(e) {
    return e === "hex" ? u0.toHex32(this.h.slice(0, 7), "big") : u0.split32(this.h.slice(0, 7), "big");
  };
});
var o0 = p3((Ne3, O0) => {
  "use strict";
  var l11 = g3(), he2 = P2(), ie2 = K2("minimalistic-assert"), z7 = l11.rotr64_hi, B9 = l11.rotr64_lo, G02 = l11.shr64_hi, J02 = l11.shr64_lo, k8 = l11.sum64, c02 = l11.sum64_hi, x0 = l11.sum64_lo, ne2 = l11.sum64_4_hi, se2 = l11.sum64_4_lo, fe2 = l11.sum64_5_hi, ue2 = l11.sum64_5_lo, N02 = he2.BlockHash, ce2 = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591];
  function m16() {
    if (!(this instanceof m16))
      return new m16();
    N02.call(this), this.h = [1779033703, 4089235720, 3144134277, 2227873595, 1013904242, 4271175723, 2773480762, 1595750129, 1359893119, 2917565137, 2600822924, 725511199, 528734635, 4215389547, 1541459225, 327033209], this.k = ce2, this.W = new Array(160);
  }
  l11.inherits(m16, N02);
  O0.exports = m16;
  m16.blockSize = 1024;
  m16.outSize = 512;
  m16.hmacStrength = 192;
  m16.padLength = 128;
  m16.prototype._prepareBlock = function(e, a11) {
    for (var h14 = this.W, t = 0; t < 32; t++)
      h14[t] = e[a11 + t];
    for (; t < h14.length; t += 2) {
      var i6 = me2(h14[t - 4], h14[t - 3]), n5 = qe2(h14[t - 4], h14[t - 3]), s10 = h14[t - 14], u13 = h14[t - 13], f7 = ge4(h14[t - 30], h14[t - 29]), x13 = Se(h14[t - 30], h14[t - 29]), c10 = h14[t - 32], v14 = h14[t - 31];
      h14[t] = ne2(i6, n5, s10, u13, f7, x13, c10, v14), h14[t + 1] = se2(i6, n5, s10, u13, f7, x13, c10, v14);
    }
  };
  m16.prototype._update = function(e, a11) {
    this._prepareBlock(e, a11);
    var h14 = this.W, t = this.h[0], i6 = this.h[1], n5 = this.h[2], s10 = this.h[3], u13 = this.h[4], f7 = this.h[5], x13 = this.h[6], c10 = this.h[7], v14 = this.h[8], d9 = this.h[9], _12 = this.h[10], O9 = this.h[11], Q3 = this.h[12], U5 = this.h[13], t0 = this.h[14], a0 = this.h[15];
    ie2(this.k.length === h14.length);
    for (var E8 = 0; E8 < h14.length; E8 += 2) {
      var V6 = t0, X4 = a0, Y4 = _e(v14, d9), Z3 = pe2(v14, d9), b0 = xe2(v14, d9, _12, O9, Q3, U5), l0 = oe(v14, d9, _12, O9, Q3, U5), _0 = this.k[E8], p02 = this.k[E8 + 1], g0 = h14[E8], S0 = h14[E8 + 1], w13 = fe2(V6, X4, Y4, Z3, b0, l0, _0, p02, g0, S0), T4 = ue2(V6, X4, Y4, Z3, b0, l0, _0, p02, g0, S0);
      V6 = be(t, i6), X4 = le3(t, i6), Y4 = ve(t, i6, n5, s10, u13, f7), Z3 = de(t, i6, n5, s10, u13, f7);
      var m0 = c02(V6, X4, Y4, Z3), q0 = x0(V6, X4, Y4, Z3);
      t0 = Q3, a0 = U5, Q3 = _12, U5 = O9, _12 = v14, O9 = d9, v14 = c02(x13, c10, w13, T4), d9 = x0(c10, c10, w13, T4), x13 = u13, c10 = f7, u13 = n5, f7 = s10, n5 = t, s10 = i6, t = c02(w13, T4, m0, q0), i6 = x0(w13, T4, m0, q0);
    }
    k8(this.h, 0, t, i6), k8(this.h, 2, n5, s10), k8(this.h, 4, u13, f7), k8(this.h, 6, x13, c10), k8(this.h, 8, v14, d9), k8(this.h, 10, _12, O9), k8(this.h, 12, Q3, U5), k8(this.h, 14, t0, a0);
  };
  m16.prototype._digest = function(e) {
    return e === "hex" ? l11.toHex32(this.h, "big") : l11.split32(this.h, "big");
  };
  function xe2(r2, e, a11, h14, t) {
    var i6 = r2 & a11 ^ ~r2 & t;
    return i6 < 0 && (i6 += 4294967296), i6;
  }
  function oe(r2, e, a11, h14, t, i6) {
    var n5 = e & h14 ^ ~e & i6;
    return n5 < 0 && (n5 += 4294967296), n5;
  }
  function ve(r2, e, a11, h14, t) {
    var i6 = r2 & a11 ^ r2 & t ^ a11 & t;
    return i6 < 0 && (i6 += 4294967296), i6;
  }
  function de(r2, e, a11, h14, t, i6) {
    var n5 = e & h14 ^ e & i6 ^ h14 & i6;
    return n5 < 0 && (n5 += 4294967296), n5;
  }
  function be(r2, e) {
    var a11 = z7(r2, e, 28), h14 = z7(e, r2, 2), t = z7(e, r2, 7), i6 = a11 ^ h14 ^ t;
    return i6 < 0 && (i6 += 4294967296), i6;
  }
  function le3(r2, e) {
    var a11 = B9(r2, e, 28), h14 = B9(e, r2, 2), t = B9(e, r2, 7), i6 = a11 ^ h14 ^ t;
    return i6 < 0 && (i6 += 4294967296), i6;
  }
  function _e(r2, e) {
    var a11 = z7(r2, e, 14), h14 = z7(r2, e, 18), t = z7(e, r2, 9), i6 = a11 ^ h14 ^ t;
    return i6 < 0 && (i6 += 4294967296), i6;
  }
  function pe2(r2, e) {
    var a11 = B9(r2, e, 14), h14 = B9(r2, e, 18), t = B9(e, r2, 9), i6 = a11 ^ h14 ^ t;
    return i6 < 0 && (i6 += 4294967296), i6;
  }
  function ge4(r2, e) {
    var a11 = z7(r2, e, 1), h14 = z7(r2, e, 8), t = G02(r2, e, 7), i6 = a11 ^ h14 ^ t;
    return i6 < 0 && (i6 += 4294967296), i6;
  }
  function Se(r2, e) {
    var a11 = B9(r2, e, 1), h14 = B9(r2, e, 8), t = J02(r2, e, 7), i6 = a11 ^ h14 ^ t;
    return i6 < 0 && (i6 += 4294967296), i6;
  }
  function me2(r2, e) {
    var a11 = z7(r2, e, 19), h14 = z7(e, r2, 29), t = G02(r2, e, 6), i6 = a11 ^ h14 ^ t;
    return i6 < 0 && (i6 += 4294967296), i6;
  }
  function qe2(r2, e) {
    var a11 = B9(r2, e, 19), h14 = B9(e, r2, 29), t = J02(r2, e, 6), i6 = a11 ^ h14 ^ t;
    return i6 < 0 && (i6 += 4294967296), i6;
  }
});
var V0 = p3((Oe2, U0) => {
  "use strict";
  var v0 = g3(), Q0 = o0();
  function W4() {
    if (!(this instanceof W4))
      return new W4();
    Q0.call(this), this.h = [3418070365, 3238371032, 1654270250, 914150663, 2438529370, 812702999, 355462360, 4144912697, 1731405415, 4290775857, 2394180231, 1750603025, 3675008525, 1694076839, 1203062813, 3204075428];
  }
  v0.inherits(W4, Q0);
  U0.exports = W4;
  W4.blockSize = 1024;
  W4.outSize = 384;
  W4.hmacStrength = 192;
  W4.padLength = 128;
  W4.prototype._digest = function(e) {
    return e === "hex" ? v0.toHex32(this.h.slice(0, 12), "big") : v0.split32(this.h.slice(0, 12), "big");
  };
});
var X0 = p3((J4) => {
  "use strict";
  J4.sha1 = E0();
  J4.sha224 = R0();
  J4.sha256 = f0();
  J4.sha384 = V0();
  J4.sha512 = o0();
});
var T0 = p3((w02) => {
  "use strict";
  var D9 = g3(), He2 = P2(), e02 = D9.rotl32, Y0 = D9.sum32, j7 = D9.sum32_3, Z0 = D9.sum32_4, j0 = He2.BlockHash;
  function y10() {
    if (!(this instanceof y10))
      return new y10();
    j0.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.endian = "little";
  }
  D9.inherits(y10, j0);
  w02.ripemd160 = y10;
  y10.blockSize = 512;
  y10.outSize = 160;
  y10.hmacStrength = 192;
  y10.padLength = 64;
  y10.prototype._update = function(e, a11) {
    for (var h14 = this.h[0], t = this.h[1], i6 = this.h[2], n5 = this.h[3], s10 = this.h[4], u13 = h14, f7 = t, x13 = i6, c10 = n5, v14 = s10, d9 = 0; d9 < 80; d9++) {
      var _12 = Y0(e02(Z0(h14, $0(d9, t, i6, n5), e[Be3[d9] + a11], Ae(d9)), Ce3[d9]), s10);
      h14 = s10, s10 = n5, n5 = e02(i6, 10), i6 = t, t = _12, _12 = Y0(e02(Z0(u13, $0(79 - d9, f7, x13, c10), e[ye2[d9] + a11], ze(d9)), Le2[d9]), v14), u13 = v14, v14 = c10, c10 = e02(x13, 10), x13 = f7, f7 = _12;
    }
    _12 = j7(this.h[1], i6, c10), this.h[1] = j7(this.h[2], n5, v14), this.h[2] = j7(this.h[3], s10, u13), this.h[3] = j7(this.h[4], h14, f7), this.h[4] = j7(this.h[0], t, x13), this.h[0] = _12;
  };
  y10.prototype._digest = function(e) {
    return e === "hex" ? D9.toHex32(this.h, "little") : D9.split32(this.h, "little");
  };
  function $0(r2, e, a11, h14) {
    return r2 <= 15 ? e ^ a11 ^ h14 : r2 <= 31 ? e & a11 | ~e & h14 : r2 <= 47 ? (e | ~a11) ^ h14 : r2 <= 63 ? e & h14 | a11 & ~h14 : e ^ (a11 | ~h14);
  }
  function Ae(r2) {
    return r2 <= 15 ? 0 : r2 <= 31 ? 1518500249 : r2 <= 47 ? 1859775393 : r2 <= 63 ? 2400959708 : 2840853838;
  }
  function ze(r2) {
    return r2 <= 15 ? 1352829926 : r2 <= 31 ? 1548603684 : r2 <= 47 ? 1836072691 : r2 <= 63 ? 2053994217 : 0;
  }
  var Be3 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13], ye2 = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11], Ce3 = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6], Le2 = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11];
});
var er = p3((Ve, rr) => {
  "use strict";
  var We = g3(), ke2 = K2("minimalistic-assert");
  function N5(r2, e, a11) {
    if (!(this instanceof N5))
      return new N5(r2, e, a11);
    this.Hash = r2, this.blockSize = r2.blockSize / 8, this.outSize = r2.outSize / 8, this.inner = null, this.outer = null, this._init(We.toArray(e, a11));
  }
  rr.exports = N5;
  N5.prototype._init = function(e) {
    e.length > this.blockSize && (e = new this.Hash().update(e).digest()), ke2(e.length <= this.blockSize);
    for (var a11 = e.length; a11 < this.blockSize; a11++)
      e.push(0);
    for (a11 = 0; a11 < e.length; a11++)
      e[a11] ^= 54;
    for (this.inner = new this.Hash().update(e), a11 = 0; a11 < e.length; a11++)
      e[a11] ^= 106;
    this.outer = new this.Hash().update(e);
  };
  N5.prototype.update = function(e, a11) {
    return this.inner.update(e, a11), this;
  };
  N5.prototype.digest = function(e) {
    return this.outer.update(this.inner.digest()), this.outer.digest(e);
  };
});
var d0 = p3((tr) => {
  var b8 = tr;
  b8.utils = g3();
  b8.common = P2();
  b8.sha = X0();
  b8.ripemd = T0();
  b8.hmac = er();
  b8.sha1 = b8.sha.sha1;
  b8.sha256 = b8.sha.sha256;
  b8.sha224 = b8.sha.sha224;
  b8.sha384 = b8.sha.sha384;
  b8.sha512 = b8.sha.sha512;
  b8.ripemd160 = b8.ripemd.ripemd160;
});
var F2 = {};
ur(F2, { default: () => Ee });
var De = H0(d0());
I2(F2, H0(d0()));
var { default: ar, ...Fe } = De;
var Ee = ar !== void 0 ? ar : Fe;

// https://esm.sh/v135/bn.js@4.12.0/denonext/bn.mjs
var bn_exports2 = {};
__export(bn_exports2, {
  BN: () => Si2,
  default: () => qi2
});
import * as __0$3 from "node:buffer";
var require6 = (n5) => {
  const e = (m16) => typeof m16.default < "u" ? m16.default : m16, c10 = (m16) => Object.assign({}, m16);
  switch (n5) {
    case "buffer":
      return e(__0$3);
    default:
      throw new Error('module "' + n5 + '" not found');
  }
};
var ci = Object.create;
var Nt = Object.defineProperty;
var wi = Object.getOwnPropertyDescriptor;
var yi = Object.getOwnPropertyNames;
var xi2 = Object.getPrototypeOf;
var _i2 = Object.prototype.hasOwnProperty;
var bi2 = ((y10) => typeof require6 < "u" ? require6 : typeof Proxy < "u" ? new Proxy(y10, { get: (_12, v14) => (typeof require6 < "u" ? require6 : _12)[v14] }) : y10)(function(y10) {
  if (typeof require6 < "u")
    return require6.apply(this, arguments);
  throw Error('Dynamic require of "' + y10 + '" is not supported');
});
var Ai2 = (y10, _12) => () => (_12 || y10((_12 = { exports: {} }).exports, _12), _12.exports);
var Bi2 = (y10, _12) => {
  for (var v14 in _12)
    Nt(y10, v14, { get: _12[v14], enumerable: true });
};
var It = (y10, _12, v14, nt) => {
  if (_12 && typeof _12 == "object" || typeof _12 == "function")
    for (let l11 of yi(_12))
      !_i2.call(y10, l11) && l11 !== v14 && Nt(y10, l11, { get: () => _12[l11], enumerable: !(nt = wi(_12, l11)) || nt.enumerable });
  return y10;
};
var lt2 = (y10, _12, v14) => (It(y10, _12, "default"), v14 && It(v14, _12, "default"));
var li = (y10, _12, v14) => (v14 = y10 != null ? ci(xi2(y10)) : {}, It(_12 || !y10 || !y10.__esModule ? Nt(v14, "default", { value: y10, enumerable: true }) : v14, y10));
var Ot = Ai2((ui, Et3) => {
  (function(y10, _12) {
    "use strict";
    function v14(o6, t) {
      if (!o6)
        throw new Error(t || "Assertion failed");
    }
    function nt(o6, t) {
      o6.super_ = t;
      var r2 = function() {
      };
      r2.prototype = t.prototype, o6.prototype = new r2(), o6.prototype.constructor = o6;
    }
    function l11(o6, t, r2) {
      if (l11.isBN(o6))
        return o6;
      this.negative = 0, this.words = null, this.length = 0, this.red = null, o6 !== null && ((t === "le" || t === "be") && (r2 = t, t = 10), this._init(o6 || 0, t || 10, r2 || "be"));
    }
    typeof y10 == "object" ? y10.exports = l11 : _12.BN = l11, l11.BN = l11, l11.wordSize = 26;
    var ut;
    try {
      typeof window < "u" && typeof window.Buffer < "u" ? ut = window.Buffer : ut = bi2("buffer").Buffer;
    } catch {
    }
    l11.isBN = function(t) {
      return t instanceof l11 ? true : t !== null && typeof t == "object" && t.constructor.wordSize === l11.wordSize && Array.isArray(t.words);
    }, l11.max = function(t, r2) {
      return t.cmp(r2) > 0 ? t : r2;
    }, l11.min = function(t, r2) {
      return t.cmp(r2) < 0 ? t : r2;
    }, l11.prototype._init = function(t, r2, e) {
      if (typeof t == "number")
        return this._initNumber(t, r2, e);
      if (typeof t == "object")
        return this._initArray(t, r2, e);
      r2 === "hex" && (r2 = 16), v14(r2 === (r2 | 0) && r2 >= 2 && r2 <= 36), t = t.toString().replace(/\s+/g, "");
      var h14 = 0;
      t[0] === "-" && (h14++, this.negative = 1), h14 < t.length && (r2 === 16 ? this._parseHex(t, h14, e) : (this._parseBase(t, r2, h14), e === "le" && this._initArray(this.toArray(), r2, e)));
    }, l11.prototype._initNumber = function(t, r2, e) {
      t < 0 && (this.negative = 1, t = -t), t < 67108864 ? (this.words = [t & 67108863], this.length = 1) : t < 4503599627370496 ? (this.words = [t & 67108863, t / 67108864 & 67108863], this.length = 2) : (v14(t < 9007199254740992), this.words = [t & 67108863, t / 67108864 & 67108863, 1], this.length = 3), e === "le" && this._initArray(this.toArray(), r2, e);
    }, l11.prototype._initArray = function(t, r2, e) {
      if (v14(typeof t.length == "number"), t.length <= 0)
        return this.words = [0], this.length = 1, this;
      this.length = Math.ceil(t.length / 3), this.words = new Array(this.length);
      for (var h14 = 0; h14 < this.length; h14++)
        this.words[h14] = 0;
      var s10, a11, u13 = 0;
      if (e === "be")
        for (h14 = t.length - 1, s10 = 0; h14 >= 0; h14 -= 3)
          a11 = t[h14] | t[h14 - 1] << 8 | t[h14 - 2] << 16, this.words[s10] |= a11 << u13 & 67108863, this.words[s10 + 1] = a11 >>> 26 - u13 & 67108863, u13 += 24, u13 >= 26 && (u13 -= 26, s10++);
      else if (e === "le")
        for (h14 = 0, s10 = 0; h14 < t.length; h14 += 3)
          a11 = t[h14] | t[h14 + 1] << 8 | t[h14 + 2] << 16, this.words[s10] |= a11 << u13 & 67108863, this.words[s10 + 1] = a11 >>> 26 - u13 & 67108863, u13 += 24, u13 >= 26 && (u13 -= 26, s10++);
      return this.strip();
    };
    function Kt4(o6, t) {
      var r2 = o6.charCodeAt(t);
      return r2 >= 65 && r2 <= 70 ? r2 - 55 : r2 >= 97 && r2 <= 102 ? r2 - 87 : r2 - 48 & 15;
    }
    function Ft2(o6, t, r2) {
      var e = Kt4(o6, r2);
      return r2 - 1 >= t && (e |= Kt4(o6, r2 - 1) << 4), e;
    }
    l11.prototype._parseHex = function(t, r2, e) {
      this.length = Math.ceil((t.length - r2) / 6), this.words = new Array(this.length);
      for (var h14 = 0; h14 < this.length; h14++)
        this.words[h14] = 0;
      var s10 = 0, a11 = 0, u13;
      if (e === "be")
        for (h14 = t.length - 1; h14 >= r2; h14 -= 2)
          u13 = Ft2(t, r2, h14) << s10, this.words[a11] |= u13 & 67108863, s10 >= 18 ? (s10 -= 18, a11 += 1, this.words[a11] |= u13 >>> 26) : s10 += 8;
      else {
        var f7 = t.length - r2;
        for (h14 = f7 % 2 === 0 ? r2 + 1 : r2; h14 < t.length; h14 += 2)
          u13 = Ft2(t, r2, h14) << s10, this.words[a11] |= u13 & 67108863, s10 >= 18 ? (s10 -= 18, a11 += 1, this.words[a11] |= u13 >>> 26) : s10 += 8;
      }
      this.strip();
    };
    function Ht3(o6, t, r2, e) {
      for (var h14 = 0, s10 = Math.min(o6.length, r2), a11 = t; a11 < s10; a11++) {
        var u13 = o6.charCodeAt(a11) - 48;
        h14 *= e, u13 >= 49 ? h14 += u13 - 49 + 10 : u13 >= 17 ? h14 += u13 - 17 + 10 : h14 += u13;
      }
      return h14;
    }
    l11.prototype._parseBase = function(t, r2, e) {
      this.words = [0], this.length = 1;
      for (var h14 = 0, s10 = 1; s10 <= 67108863; s10 *= r2)
        h14++;
      h14--, s10 = s10 / r2 | 0;
      for (var a11 = t.length - e, u13 = a11 % h14, f7 = Math.min(a11, a11 - u13) + e, i6 = 0, n5 = e; n5 < f7; n5 += h14)
        i6 = Ht3(t, n5, n5 + h14, r2), this.imuln(s10), this.words[0] + i6 < 67108864 ? this.words[0] += i6 : this._iaddn(i6);
      if (u13 !== 0) {
        var d9 = 1;
        for (i6 = Ht3(t, n5, t.length, r2), n5 = 0; n5 < u13; n5++)
          d9 *= r2;
        this.imuln(d9), this.words[0] + i6 < 67108864 ? this.words[0] += i6 : this._iaddn(i6);
      }
      this.strip();
    }, l11.prototype.copy = function(t) {
      t.words = new Array(this.length);
      for (var r2 = 0; r2 < this.length; r2++)
        t.words[r2] = this.words[r2];
      t.length = this.length, t.negative = this.negative, t.red = this.red;
    }, l11.prototype.clone = function() {
      var t = new l11(null);
      return this.copy(t), t;
    }, l11.prototype._expand = function(t) {
      for (; this.length < t; )
        this.words[this.length++] = 0;
      return this;
    }, l11.prototype.strip = function() {
      for (; this.length > 1 && this.words[this.length - 1] === 0; )
        this.length--;
      return this._normSign();
    }, l11.prototype._normSign = function() {
      return this.length === 1 && this.words[0] === 0 && (this.negative = 0), this;
    }, l11.prototype.inspect = function() {
      return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
    };
    var Pt3 = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"], mi3 = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], pi2 = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];
    l11.prototype.toString = function(t, r2) {
      t = t || 10, r2 = r2 | 0 || 1;
      var e;
      if (t === 16 || t === "hex") {
        e = "";
        for (var h14 = 0, s10 = 0, a11 = 0; a11 < this.length; a11++) {
          var u13 = this.words[a11], f7 = ((u13 << h14 | s10) & 16777215).toString(16);
          s10 = u13 >>> 24 - h14 & 16777215, s10 !== 0 || a11 !== this.length - 1 ? e = Pt3[6 - f7.length] + f7 + e : e = f7 + e, h14 += 2, h14 >= 26 && (h14 -= 26, a11--);
        }
        for (s10 !== 0 && (e = s10.toString(16) + e); e.length % r2 !== 0; )
          e = "0" + e;
        return this.negative !== 0 && (e = "-" + e), e;
      }
      if (t === (t | 0) && t >= 2 && t <= 36) {
        var i6 = mi3[t], n5 = pi2[t];
        e = "";
        var d9 = this.clone();
        for (d9.negative = 0; !d9.isZero(); ) {
          var m16 = d9.modn(n5).toString(t);
          d9 = d9.idivn(n5), d9.isZero() ? e = m16 + e : e = Pt3[i6 - m16.length] + m16 + e;
        }
        for (this.isZero() && (e = "0" + e); e.length % r2 !== 0; )
          e = "0" + e;
        return this.negative !== 0 && (e = "-" + e), e;
      }
      v14(false, "Base should be between 2 and 36");
    }, l11.prototype.toNumber = function() {
      var t = this.words[0];
      return this.length === 2 ? t += this.words[1] * 67108864 : this.length === 3 && this.words[2] === 1 ? t += 4503599627370496 + this.words[1] * 67108864 : this.length > 2 && v14(false, "Number can only safely store up to 53 bits"), this.negative !== 0 ? -t : t;
    }, l11.prototype.toJSON = function() {
      return this.toString(16);
    }, l11.prototype.toBuffer = function(t, r2) {
      return v14(typeof ut < "u"), this.toArrayLike(ut, t, r2);
    }, l11.prototype.toArray = function(t, r2) {
      return this.toArrayLike(Array, t, r2);
    }, l11.prototype.toArrayLike = function(t, r2, e) {
      var h14 = this.byteLength(), s10 = e || Math.max(1, h14);
      v14(h14 <= s10, "byte array longer than desired length"), v14(s10 > 0, "Requested array length <= 0"), this.strip();
      var a11 = r2 === "le", u13 = new t(s10), f7, i6, n5 = this.clone();
      if (a11) {
        for (i6 = 0; !n5.isZero(); i6++)
          f7 = n5.andln(255), n5.iushrn(8), u13[i6] = f7;
        for (; i6 < s10; i6++)
          u13[i6] = 0;
      } else {
        for (i6 = 0; i6 < s10 - h14; i6++)
          u13[i6] = 0;
        for (i6 = 0; !n5.isZero(); i6++)
          f7 = n5.andln(255), n5.iushrn(8), u13[s10 - i6 - 1] = f7;
      }
      return u13;
    }, Math.clz32 ? l11.prototype._countBits = function(t) {
      return 32 - Math.clz32(t);
    } : l11.prototype._countBits = function(t) {
      var r2 = t, e = 0;
      return r2 >= 4096 && (e += 13, r2 >>>= 13), r2 >= 64 && (e += 7, r2 >>>= 7), r2 >= 8 && (e += 4, r2 >>>= 4), r2 >= 2 && (e += 2, r2 >>>= 2), e + r2;
    }, l11.prototype._zeroBits = function(t) {
      if (t === 0)
        return 26;
      var r2 = t, e = 0;
      return r2 & 8191 || (e += 13, r2 >>>= 13), r2 & 127 || (e += 7, r2 >>>= 7), r2 & 15 || (e += 4, r2 >>>= 4), r2 & 3 || (e += 2, r2 >>>= 2), r2 & 1 || e++, e;
    }, l11.prototype.bitLength = function() {
      var t = this.words[this.length - 1], r2 = this._countBits(t);
      return (this.length - 1) * 26 + r2;
    };
    function Mi3(o6) {
      for (var t = new Array(o6.bitLength()), r2 = 0; r2 < t.length; r2++) {
        var e = r2 / 26 | 0, h14 = r2 % 26;
        t[r2] = (o6.words[e] & 1 << h14) >>> h14;
      }
      return t;
    }
    l11.prototype.zeroBits = function() {
      if (this.isZero())
        return 0;
      for (var t = 0, r2 = 0; r2 < this.length; r2++) {
        var e = this._zeroBits(this.words[r2]);
        if (t += e, e !== 26)
          break;
      }
      return t;
    }, l11.prototype.byteLength = function() {
      return Math.ceil(this.bitLength() / 8);
    }, l11.prototype.toTwos = function(t) {
      return this.negative !== 0 ? this.abs().inotn(t).iaddn(1) : this.clone();
    }, l11.prototype.fromTwos = function(t) {
      return this.testn(t - 1) ? this.notn(t).iaddn(1).ineg() : this.clone();
    }, l11.prototype.isNeg = function() {
      return this.negative !== 0;
    }, l11.prototype.neg = function() {
      return this.clone().ineg();
    }, l11.prototype.ineg = function() {
      return this.isZero() || (this.negative ^= 1), this;
    }, l11.prototype.iuor = function(t) {
      for (; this.length < t.length; )
        this.words[this.length++] = 0;
      for (var r2 = 0; r2 < t.length; r2++)
        this.words[r2] = this.words[r2] | t.words[r2];
      return this.strip();
    }, l11.prototype.ior = function(t) {
      return v14((this.negative | t.negative) === 0), this.iuor(t);
    }, l11.prototype.or = function(t) {
      return this.length > t.length ? this.clone().ior(t) : t.clone().ior(this);
    }, l11.prototype.uor = function(t) {
      return this.length > t.length ? this.clone().iuor(t) : t.clone().iuor(this);
    }, l11.prototype.iuand = function(t) {
      var r2;
      this.length > t.length ? r2 = t : r2 = this;
      for (var e = 0; e < r2.length; e++)
        this.words[e] = this.words[e] & t.words[e];
      return this.length = r2.length, this.strip();
    }, l11.prototype.iand = function(t) {
      return v14((this.negative | t.negative) === 0), this.iuand(t);
    }, l11.prototype.and = function(t) {
      return this.length > t.length ? this.clone().iand(t) : t.clone().iand(this);
    }, l11.prototype.uand = function(t) {
      return this.length > t.length ? this.clone().iuand(t) : t.clone().iuand(this);
    }, l11.prototype.iuxor = function(t) {
      var r2, e;
      this.length > t.length ? (r2 = this, e = t) : (r2 = t, e = this);
      for (var h14 = 0; h14 < e.length; h14++)
        this.words[h14] = r2.words[h14] ^ e.words[h14];
      if (this !== r2)
        for (; h14 < r2.length; h14++)
          this.words[h14] = r2.words[h14];
      return this.length = r2.length, this.strip();
    }, l11.prototype.ixor = function(t) {
      return v14((this.negative | t.negative) === 0), this.iuxor(t);
    }, l11.prototype.xor = function(t) {
      return this.length > t.length ? this.clone().ixor(t) : t.clone().ixor(this);
    }, l11.prototype.uxor = function(t) {
      return this.length > t.length ? this.clone().iuxor(t) : t.clone().iuxor(this);
    }, l11.prototype.inotn = function(t) {
      v14(typeof t == "number" && t >= 0);
      var r2 = Math.ceil(t / 26) | 0, e = t % 26;
      this._expand(r2), e > 0 && r2--;
      for (var h14 = 0; h14 < r2; h14++)
        this.words[h14] = ~this.words[h14] & 67108863;
      return e > 0 && (this.words[h14] = ~this.words[h14] & 67108863 >> 26 - e), this.strip();
    }, l11.prototype.notn = function(t) {
      return this.clone().inotn(t);
    }, l11.prototype.setn = function(t, r2) {
      v14(typeof t == "number" && t >= 0);
      var e = t / 26 | 0, h14 = t % 26;
      return this._expand(e + 1), r2 ? this.words[e] = this.words[e] | 1 << h14 : this.words[e] = this.words[e] & ~(1 << h14), this.strip();
    }, l11.prototype.iadd = function(t) {
      var r2;
      if (this.negative !== 0 && t.negative === 0)
        return this.negative = 0, r2 = this.isub(t), this.negative ^= 1, this._normSign();
      if (this.negative === 0 && t.negative !== 0)
        return t.negative = 0, r2 = this.isub(t), t.negative = 1, r2._normSign();
      var e, h14;
      this.length > t.length ? (e = this, h14 = t) : (e = t, h14 = this);
      for (var s10 = 0, a11 = 0; a11 < h14.length; a11++)
        r2 = (e.words[a11] | 0) + (h14.words[a11] | 0) + s10, this.words[a11] = r2 & 67108863, s10 = r2 >>> 26;
      for (; s10 !== 0 && a11 < e.length; a11++)
        r2 = (e.words[a11] | 0) + s10, this.words[a11] = r2 & 67108863, s10 = r2 >>> 26;
      if (this.length = e.length, s10 !== 0)
        this.words[this.length] = s10, this.length++;
      else if (e !== this)
        for (; a11 < e.length; a11++)
          this.words[a11] = e.words[a11];
      return this;
    }, l11.prototype.add = function(t) {
      var r2;
      return t.negative !== 0 && this.negative === 0 ? (t.negative = 0, r2 = this.sub(t), t.negative ^= 1, r2) : t.negative === 0 && this.negative !== 0 ? (this.negative = 0, r2 = t.sub(this), this.negative = 1, r2) : this.length > t.length ? this.clone().iadd(t) : t.clone().iadd(this);
    }, l11.prototype.isub = function(t) {
      if (t.negative !== 0) {
        t.negative = 0;
        var r2 = this.iadd(t);
        return t.negative = 1, r2._normSign();
      } else if (this.negative !== 0)
        return this.negative = 0, this.iadd(t), this.negative = 1, this._normSign();
      var e = this.cmp(t);
      if (e === 0)
        return this.negative = 0, this.length = 1, this.words[0] = 0, this;
      var h14, s10;
      e > 0 ? (h14 = this, s10 = t) : (h14 = t, s10 = this);
      for (var a11 = 0, u13 = 0; u13 < s10.length; u13++)
        r2 = (h14.words[u13] | 0) - (s10.words[u13] | 0) + a11, a11 = r2 >> 26, this.words[u13] = r2 & 67108863;
      for (; a11 !== 0 && u13 < h14.length; u13++)
        r2 = (h14.words[u13] | 0) + a11, a11 = r2 >> 26, this.words[u13] = r2 & 67108863;
      if (a11 === 0 && u13 < h14.length && h14 !== this)
        for (; u13 < h14.length; u13++)
          this.words[u13] = h14.words[u13];
      return this.length = Math.max(this.length, u13), h14 !== this && (this.negative = 1), this.strip();
    }, l11.prototype.sub = function(t) {
      return this.clone().isub(t);
    };
    function Dt3(o6, t, r2) {
      r2.negative = t.negative ^ o6.negative;
      var e = o6.length + t.length | 0;
      r2.length = e, e = e - 1 | 0;
      var h14 = o6.words[0] | 0, s10 = t.words[0] | 0, a11 = h14 * s10, u13 = a11 & 67108863, f7 = a11 / 67108864 | 0;
      r2.words[0] = u13;
      for (var i6 = 1; i6 < e; i6++) {
        for (var n5 = f7 >>> 26, d9 = f7 & 67108863, m16 = Math.min(i6, t.length - 1), p12 = Math.max(0, i6 - o6.length + 1); p12 <= m16; p12++) {
          var M11 = i6 - p12 | 0;
          h14 = o6.words[M11] | 0, s10 = t.words[p12] | 0, a11 = h14 * s10 + d9, n5 += a11 / 67108864 | 0, d9 = a11 & 67108863;
        }
        r2.words[i6] = d9 | 0, f7 = n5 | 0;
      }
      return f7 !== 0 ? r2.words[i6] = f7 | 0 : r2.length--, r2.strip();
    }
    var Ct3 = function(t, r2, e) {
      var h14 = t.words, s10 = r2.words, a11 = e.words, u13 = 0, f7, i6, n5, d9 = h14[0] | 0, m16 = d9 & 8191, p12 = d9 >>> 13, M11 = h14[1] | 0, g15 = M11 & 8191, c10 = M11 >>> 13, st2 = h14[2] | 0, w13 = st2 & 8191, x13 = st2 >>> 13, Gt3 = h14[3] | 0, A11 = Gt3 & 8191, B9 = Gt3 >>> 13, Qt2 = h14[4] | 0, S9 = Qt2 & 8191, k8 = Qt2 >>> 13, Vt2 = h14[5] | 0, q12 = Vt2 & 8191, R7 = Vt2 >>> 13, Xt2 = h14[6] | 0, Z3 = Xt2 & 8191, T4 = Xt2 >>> 13, Yt2 = h14[7] | 0, L7 = Yt2 & 8191, z7 = Yt2 >>> 13, $t2 = h14[8] | 0, I8 = $t2 & 8191, N5 = $t2 >>> 13, jt3 = h14[9] | 0, E8 = jt3 & 8191, O9 = jt3 >>> 13, ti = s10[0] | 0, K7 = ti & 8191, F8 = ti >>> 13, ii = s10[1] | 0, H7 = ii & 8191, P9 = ii >>> 13, ri = s10[2] | 0, D9 = ri & 8191, C8 = ri >>> 13, ei = s10[3] | 0, J4 = ei & 8191, U5 = ei >>> 13, hi = s10[4] | 0, W4 = hi & 8191, G5 = hi >>> 13, fi2 = s10[5] | 0, Q3 = fi2 & 8191, V6 = fi2 >>> 13, ni = s10[6] | 0, X4 = ni & 8191, Y4 = ni >>> 13, si = s10[7] | 0, $2 = si & 8191, j7 = si >>> 13, oi = s10[8] | 0, tt = oi & 8191, it = oi >>> 13, ai = s10[9] | 0, rt = ai & 8191, et = ai >>> 13;
      e.negative = t.negative ^ r2.negative, e.length = 19, f7 = Math.imul(m16, K7), i6 = Math.imul(m16, F8), i6 = i6 + Math.imul(p12, K7) | 0, n5 = Math.imul(p12, F8);
      var pt2 = (u13 + f7 | 0) + ((i6 & 8191) << 13) | 0;
      u13 = (n5 + (i6 >>> 13) | 0) + (pt2 >>> 26) | 0, pt2 &= 67108863, f7 = Math.imul(g15, K7), i6 = Math.imul(g15, F8), i6 = i6 + Math.imul(c10, K7) | 0, n5 = Math.imul(c10, F8), f7 = f7 + Math.imul(m16, H7) | 0, i6 = i6 + Math.imul(m16, P9) | 0, i6 = i6 + Math.imul(p12, H7) | 0, n5 = n5 + Math.imul(p12, P9) | 0;
      var Mt2 = (u13 + f7 | 0) + ((i6 & 8191) << 13) | 0;
      u13 = (n5 + (i6 >>> 13) | 0) + (Mt2 >>> 26) | 0, Mt2 &= 67108863, f7 = Math.imul(w13, K7), i6 = Math.imul(w13, F8), i6 = i6 + Math.imul(x13, K7) | 0, n5 = Math.imul(x13, F8), f7 = f7 + Math.imul(g15, H7) | 0, i6 = i6 + Math.imul(g15, P9) | 0, i6 = i6 + Math.imul(c10, H7) | 0, n5 = n5 + Math.imul(c10, P9) | 0, f7 = f7 + Math.imul(m16, D9) | 0, i6 = i6 + Math.imul(m16, C8) | 0, i6 = i6 + Math.imul(p12, D9) | 0, n5 = n5 + Math.imul(p12, C8) | 0;
      var gt = (u13 + f7 | 0) + ((i6 & 8191) << 13) | 0;
      u13 = (n5 + (i6 >>> 13) | 0) + (gt >>> 26) | 0, gt &= 67108863, f7 = Math.imul(A11, K7), i6 = Math.imul(A11, F8), i6 = i6 + Math.imul(B9, K7) | 0, n5 = Math.imul(B9, F8), f7 = f7 + Math.imul(w13, H7) | 0, i6 = i6 + Math.imul(w13, P9) | 0, i6 = i6 + Math.imul(x13, H7) | 0, n5 = n5 + Math.imul(x13, P9) | 0, f7 = f7 + Math.imul(g15, D9) | 0, i6 = i6 + Math.imul(g15, C8) | 0, i6 = i6 + Math.imul(c10, D9) | 0, n5 = n5 + Math.imul(c10, C8) | 0, f7 = f7 + Math.imul(m16, J4) | 0, i6 = i6 + Math.imul(m16, U5) | 0, i6 = i6 + Math.imul(p12, J4) | 0, n5 = n5 + Math.imul(p12, U5) | 0;
      var ct = (u13 + f7 | 0) + ((i6 & 8191) << 13) | 0;
      u13 = (n5 + (i6 >>> 13) | 0) + (ct >>> 26) | 0, ct &= 67108863, f7 = Math.imul(S9, K7), i6 = Math.imul(S9, F8), i6 = i6 + Math.imul(k8, K7) | 0, n5 = Math.imul(k8, F8), f7 = f7 + Math.imul(A11, H7) | 0, i6 = i6 + Math.imul(A11, P9) | 0, i6 = i6 + Math.imul(B9, H7) | 0, n5 = n5 + Math.imul(B9, P9) | 0, f7 = f7 + Math.imul(w13, D9) | 0, i6 = i6 + Math.imul(w13, C8) | 0, i6 = i6 + Math.imul(x13, D9) | 0, n5 = n5 + Math.imul(x13, C8) | 0, f7 = f7 + Math.imul(g15, J4) | 0, i6 = i6 + Math.imul(g15, U5) | 0, i6 = i6 + Math.imul(c10, J4) | 0, n5 = n5 + Math.imul(c10, U5) | 0, f7 = f7 + Math.imul(m16, W4) | 0, i6 = i6 + Math.imul(m16, G5) | 0, i6 = i6 + Math.imul(p12, W4) | 0, n5 = n5 + Math.imul(p12, G5) | 0;
      var wt3 = (u13 + f7 | 0) + ((i6 & 8191) << 13) | 0;
      u13 = (n5 + (i6 >>> 13) | 0) + (wt3 >>> 26) | 0, wt3 &= 67108863, f7 = Math.imul(q12, K7), i6 = Math.imul(q12, F8), i6 = i6 + Math.imul(R7, K7) | 0, n5 = Math.imul(R7, F8), f7 = f7 + Math.imul(S9, H7) | 0, i6 = i6 + Math.imul(S9, P9) | 0, i6 = i6 + Math.imul(k8, H7) | 0, n5 = n5 + Math.imul(k8, P9) | 0, f7 = f7 + Math.imul(A11, D9) | 0, i6 = i6 + Math.imul(A11, C8) | 0, i6 = i6 + Math.imul(B9, D9) | 0, n5 = n5 + Math.imul(B9, C8) | 0, f7 = f7 + Math.imul(w13, J4) | 0, i6 = i6 + Math.imul(w13, U5) | 0, i6 = i6 + Math.imul(x13, J4) | 0, n5 = n5 + Math.imul(x13, U5) | 0, f7 = f7 + Math.imul(g15, W4) | 0, i6 = i6 + Math.imul(g15, G5) | 0, i6 = i6 + Math.imul(c10, W4) | 0, n5 = n5 + Math.imul(c10, G5) | 0, f7 = f7 + Math.imul(m16, Q3) | 0, i6 = i6 + Math.imul(m16, V6) | 0, i6 = i6 + Math.imul(p12, Q3) | 0, n5 = n5 + Math.imul(p12, V6) | 0;
      var yt = (u13 + f7 | 0) + ((i6 & 8191) << 13) | 0;
      u13 = (n5 + (i6 >>> 13) | 0) + (yt >>> 26) | 0, yt &= 67108863, f7 = Math.imul(Z3, K7), i6 = Math.imul(Z3, F8), i6 = i6 + Math.imul(T4, K7) | 0, n5 = Math.imul(T4, F8), f7 = f7 + Math.imul(q12, H7) | 0, i6 = i6 + Math.imul(q12, P9) | 0, i6 = i6 + Math.imul(R7, H7) | 0, n5 = n5 + Math.imul(R7, P9) | 0, f7 = f7 + Math.imul(S9, D9) | 0, i6 = i6 + Math.imul(S9, C8) | 0, i6 = i6 + Math.imul(k8, D9) | 0, n5 = n5 + Math.imul(k8, C8) | 0, f7 = f7 + Math.imul(A11, J4) | 0, i6 = i6 + Math.imul(A11, U5) | 0, i6 = i6 + Math.imul(B9, J4) | 0, n5 = n5 + Math.imul(B9, U5) | 0, f7 = f7 + Math.imul(w13, W4) | 0, i6 = i6 + Math.imul(w13, G5) | 0, i6 = i6 + Math.imul(x13, W4) | 0, n5 = n5 + Math.imul(x13, G5) | 0, f7 = f7 + Math.imul(g15, Q3) | 0, i6 = i6 + Math.imul(g15, V6) | 0, i6 = i6 + Math.imul(c10, Q3) | 0, n5 = n5 + Math.imul(c10, V6) | 0, f7 = f7 + Math.imul(m16, X4) | 0, i6 = i6 + Math.imul(m16, Y4) | 0, i6 = i6 + Math.imul(p12, X4) | 0, n5 = n5 + Math.imul(p12, Y4) | 0;
      var xt3 = (u13 + f7 | 0) + ((i6 & 8191) << 13) | 0;
      u13 = (n5 + (i6 >>> 13) | 0) + (xt3 >>> 26) | 0, xt3 &= 67108863, f7 = Math.imul(L7, K7), i6 = Math.imul(L7, F8), i6 = i6 + Math.imul(z7, K7) | 0, n5 = Math.imul(z7, F8), f7 = f7 + Math.imul(Z3, H7) | 0, i6 = i6 + Math.imul(Z3, P9) | 0, i6 = i6 + Math.imul(T4, H7) | 0, n5 = n5 + Math.imul(T4, P9) | 0, f7 = f7 + Math.imul(q12, D9) | 0, i6 = i6 + Math.imul(q12, C8) | 0, i6 = i6 + Math.imul(R7, D9) | 0, n5 = n5 + Math.imul(R7, C8) | 0, f7 = f7 + Math.imul(S9, J4) | 0, i6 = i6 + Math.imul(S9, U5) | 0, i6 = i6 + Math.imul(k8, J4) | 0, n5 = n5 + Math.imul(k8, U5) | 0, f7 = f7 + Math.imul(A11, W4) | 0, i6 = i6 + Math.imul(A11, G5) | 0, i6 = i6 + Math.imul(B9, W4) | 0, n5 = n5 + Math.imul(B9, G5) | 0, f7 = f7 + Math.imul(w13, Q3) | 0, i6 = i6 + Math.imul(w13, V6) | 0, i6 = i6 + Math.imul(x13, Q3) | 0, n5 = n5 + Math.imul(x13, V6) | 0, f7 = f7 + Math.imul(g15, X4) | 0, i6 = i6 + Math.imul(g15, Y4) | 0, i6 = i6 + Math.imul(c10, X4) | 0, n5 = n5 + Math.imul(c10, Y4) | 0, f7 = f7 + Math.imul(m16, $2) | 0, i6 = i6 + Math.imul(m16, j7) | 0, i6 = i6 + Math.imul(p12, $2) | 0, n5 = n5 + Math.imul(p12, j7) | 0;
      var _t2 = (u13 + f7 | 0) + ((i6 & 8191) << 13) | 0;
      u13 = (n5 + (i6 >>> 13) | 0) + (_t2 >>> 26) | 0, _t2 &= 67108863, f7 = Math.imul(I8, K7), i6 = Math.imul(I8, F8), i6 = i6 + Math.imul(N5, K7) | 0, n5 = Math.imul(N5, F8), f7 = f7 + Math.imul(L7, H7) | 0, i6 = i6 + Math.imul(L7, P9) | 0, i6 = i6 + Math.imul(z7, H7) | 0, n5 = n5 + Math.imul(z7, P9) | 0, f7 = f7 + Math.imul(Z3, D9) | 0, i6 = i6 + Math.imul(Z3, C8) | 0, i6 = i6 + Math.imul(T4, D9) | 0, n5 = n5 + Math.imul(T4, C8) | 0, f7 = f7 + Math.imul(q12, J4) | 0, i6 = i6 + Math.imul(q12, U5) | 0, i6 = i6 + Math.imul(R7, J4) | 0, n5 = n5 + Math.imul(R7, U5) | 0, f7 = f7 + Math.imul(S9, W4) | 0, i6 = i6 + Math.imul(S9, G5) | 0, i6 = i6 + Math.imul(k8, W4) | 0, n5 = n5 + Math.imul(k8, G5) | 0, f7 = f7 + Math.imul(A11, Q3) | 0, i6 = i6 + Math.imul(A11, V6) | 0, i6 = i6 + Math.imul(B9, Q3) | 0, n5 = n5 + Math.imul(B9, V6) | 0, f7 = f7 + Math.imul(w13, X4) | 0, i6 = i6 + Math.imul(w13, Y4) | 0, i6 = i6 + Math.imul(x13, X4) | 0, n5 = n5 + Math.imul(x13, Y4) | 0, f7 = f7 + Math.imul(g15, $2) | 0, i6 = i6 + Math.imul(g15, j7) | 0, i6 = i6 + Math.imul(c10, $2) | 0, n5 = n5 + Math.imul(c10, j7) | 0, f7 = f7 + Math.imul(m16, tt) | 0, i6 = i6 + Math.imul(m16, it) | 0, i6 = i6 + Math.imul(p12, tt) | 0, n5 = n5 + Math.imul(p12, it) | 0;
      var bt2 = (u13 + f7 | 0) + ((i6 & 8191) << 13) | 0;
      u13 = (n5 + (i6 >>> 13) | 0) + (bt2 >>> 26) | 0, bt2 &= 67108863, f7 = Math.imul(E8, K7), i6 = Math.imul(E8, F8), i6 = i6 + Math.imul(O9, K7) | 0, n5 = Math.imul(O9, F8), f7 = f7 + Math.imul(I8, H7) | 0, i6 = i6 + Math.imul(I8, P9) | 0, i6 = i6 + Math.imul(N5, H7) | 0, n5 = n5 + Math.imul(N5, P9) | 0, f7 = f7 + Math.imul(L7, D9) | 0, i6 = i6 + Math.imul(L7, C8) | 0, i6 = i6 + Math.imul(z7, D9) | 0, n5 = n5 + Math.imul(z7, C8) | 0, f7 = f7 + Math.imul(Z3, J4) | 0, i6 = i6 + Math.imul(Z3, U5) | 0, i6 = i6 + Math.imul(T4, J4) | 0, n5 = n5 + Math.imul(T4, U5) | 0, f7 = f7 + Math.imul(q12, W4) | 0, i6 = i6 + Math.imul(q12, G5) | 0, i6 = i6 + Math.imul(R7, W4) | 0, n5 = n5 + Math.imul(R7, G5) | 0, f7 = f7 + Math.imul(S9, Q3) | 0, i6 = i6 + Math.imul(S9, V6) | 0, i6 = i6 + Math.imul(k8, Q3) | 0, n5 = n5 + Math.imul(k8, V6) | 0, f7 = f7 + Math.imul(A11, X4) | 0, i6 = i6 + Math.imul(A11, Y4) | 0, i6 = i6 + Math.imul(B9, X4) | 0, n5 = n5 + Math.imul(B9, Y4) | 0, f7 = f7 + Math.imul(w13, $2) | 0, i6 = i6 + Math.imul(w13, j7) | 0, i6 = i6 + Math.imul(x13, $2) | 0, n5 = n5 + Math.imul(x13, j7) | 0, f7 = f7 + Math.imul(g15, tt) | 0, i6 = i6 + Math.imul(g15, it) | 0, i6 = i6 + Math.imul(c10, tt) | 0, n5 = n5 + Math.imul(c10, it) | 0, f7 = f7 + Math.imul(m16, rt) | 0, i6 = i6 + Math.imul(m16, et) | 0, i6 = i6 + Math.imul(p12, rt) | 0, n5 = n5 + Math.imul(p12, et) | 0;
      var At2 = (u13 + f7 | 0) + ((i6 & 8191) << 13) | 0;
      u13 = (n5 + (i6 >>> 13) | 0) + (At2 >>> 26) | 0, At2 &= 67108863, f7 = Math.imul(E8, H7), i6 = Math.imul(E8, P9), i6 = i6 + Math.imul(O9, H7) | 0, n5 = Math.imul(O9, P9), f7 = f7 + Math.imul(I8, D9) | 0, i6 = i6 + Math.imul(I8, C8) | 0, i6 = i6 + Math.imul(N5, D9) | 0, n5 = n5 + Math.imul(N5, C8) | 0, f7 = f7 + Math.imul(L7, J4) | 0, i6 = i6 + Math.imul(L7, U5) | 0, i6 = i6 + Math.imul(z7, J4) | 0, n5 = n5 + Math.imul(z7, U5) | 0, f7 = f7 + Math.imul(Z3, W4) | 0, i6 = i6 + Math.imul(Z3, G5) | 0, i6 = i6 + Math.imul(T4, W4) | 0, n5 = n5 + Math.imul(T4, G5) | 0, f7 = f7 + Math.imul(q12, Q3) | 0, i6 = i6 + Math.imul(q12, V6) | 0, i6 = i6 + Math.imul(R7, Q3) | 0, n5 = n5 + Math.imul(R7, V6) | 0, f7 = f7 + Math.imul(S9, X4) | 0, i6 = i6 + Math.imul(S9, Y4) | 0, i6 = i6 + Math.imul(k8, X4) | 0, n5 = n5 + Math.imul(k8, Y4) | 0, f7 = f7 + Math.imul(A11, $2) | 0, i6 = i6 + Math.imul(A11, j7) | 0, i6 = i6 + Math.imul(B9, $2) | 0, n5 = n5 + Math.imul(B9, j7) | 0, f7 = f7 + Math.imul(w13, tt) | 0, i6 = i6 + Math.imul(w13, it) | 0, i6 = i6 + Math.imul(x13, tt) | 0, n5 = n5 + Math.imul(x13, it) | 0, f7 = f7 + Math.imul(g15, rt) | 0, i6 = i6 + Math.imul(g15, et) | 0, i6 = i6 + Math.imul(c10, rt) | 0, n5 = n5 + Math.imul(c10, et) | 0;
      var Bt2 = (u13 + f7 | 0) + ((i6 & 8191) << 13) | 0;
      u13 = (n5 + (i6 >>> 13) | 0) + (Bt2 >>> 26) | 0, Bt2 &= 67108863, f7 = Math.imul(E8, D9), i6 = Math.imul(E8, C8), i6 = i6 + Math.imul(O9, D9) | 0, n5 = Math.imul(O9, C8), f7 = f7 + Math.imul(I8, J4) | 0, i6 = i6 + Math.imul(I8, U5) | 0, i6 = i6 + Math.imul(N5, J4) | 0, n5 = n5 + Math.imul(N5, U5) | 0, f7 = f7 + Math.imul(L7, W4) | 0, i6 = i6 + Math.imul(L7, G5) | 0, i6 = i6 + Math.imul(z7, W4) | 0, n5 = n5 + Math.imul(z7, G5) | 0, f7 = f7 + Math.imul(Z3, Q3) | 0, i6 = i6 + Math.imul(Z3, V6) | 0, i6 = i6 + Math.imul(T4, Q3) | 0, n5 = n5 + Math.imul(T4, V6) | 0, f7 = f7 + Math.imul(q12, X4) | 0, i6 = i6 + Math.imul(q12, Y4) | 0, i6 = i6 + Math.imul(R7, X4) | 0, n5 = n5 + Math.imul(R7, Y4) | 0, f7 = f7 + Math.imul(S9, $2) | 0, i6 = i6 + Math.imul(S9, j7) | 0, i6 = i6 + Math.imul(k8, $2) | 0, n5 = n5 + Math.imul(k8, j7) | 0, f7 = f7 + Math.imul(A11, tt) | 0, i6 = i6 + Math.imul(A11, it) | 0, i6 = i6 + Math.imul(B9, tt) | 0, n5 = n5 + Math.imul(B9, it) | 0, f7 = f7 + Math.imul(w13, rt) | 0, i6 = i6 + Math.imul(w13, et) | 0, i6 = i6 + Math.imul(x13, rt) | 0, n5 = n5 + Math.imul(x13, et) | 0;
      var St4 = (u13 + f7 | 0) + ((i6 & 8191) << 13) | 0;
      u13 = (n5 + (i6 >>> 13) | 0) + (St4 >>> 26) | 0, St4 &= 67108863, f7 = Math.imul(E8, J4), i6 = Math.imul(E8, U5), i6 = i6 + Math.imul(O9, J4) | 0, n5 = Math.imul(O9, U5), f7 = f7 + Math.imul(I8, W4) | 0, i6 = i6 + Math.imul(I8, G5) | 0, i6 = i6 + Math.imul(N5, W4) | 0, n5 = n5 + Math.imul(N5, G5) | 0, f7 = f7 + Math.imul(L7, Q3) | 0, i6 = i6 + Math.imul(L7, V6) | 0, i6 = i6 + Math.imul(z7, Q3) | 0, n5 = n5 + Math.imul(z7, V6) | 0, f7 = f7 + Math.imul(Z3, X4) | 0, i6 = i6 + Math.imul(Z3, Y4) | 0, i6 = i6 + Math.imul(T4, X4) | 0, n5 = n5 + Math.imul(T4, Y4) | 0, f7 = f7 + Math.imul(q12, $2) | 0, i6 = i6 + Math.imul(q12, j7) | 0, i6 = i6 + Math.imul(R7, $2) | 0, n5 = n5 + Math.imul(R7, j7) | 0, f7 = f7 + Math.imul(S9, tt) | 0, i6 = i6 + Math.imul(S9, it) | 0, i6 = i6 + Math.imul(k8, tt) | 0, n5 = n5 + Math.imul(k8, it) | 0, f7 = f7 + Math.imul(A11, rt) | 0, i6 = i6 + Math.imul(A11, et) | 0, i6 = i6 + Math.imul(B9, rt) | 0, n5 = n5 + Math.imul(B9, et) | 0;
      var kt3 = (u13 + f7 | 0) + ((i6 & 8191) << 13) | 0;
      u13 = (n5 + (i6 >>> 13) | 0) + (kt3 >>> 26) | 0, kt3 &= 67108863, f7 = Math.imul(E8, W4), i6 = Math.imul(E8, G5), i6 = i6 + Math.imul(O9, W4) | 0, n5 = Math.imul(O9, G5), f7 = f7 + Math.imul(I8, Q3) | 0, i6 = i6 + Math.imul(I8, V6) | 0, i6 = i6 + Math.imul(N5, Q3) | 0, n5 = n5 + Math.imul(N5, V6) | 0, f7 = f7 + Math.imul(L7, X4) | 0, i6 = i6 + Math.imul(L7, Y4) | 0, i6 = i6 + Math.imul(z7, X4) | 0, n5 = n5 + Math.imul(z7, Y4) | 0, f7 = f7 + Math.imul(Z3, $2) | 0, i6 = i6 + Math.imul(Z3, j7) | 0, i6 = i6 + Math.imul(T4, $2) | 0, n5 = n5 + Math.imul(T4, j7) | 0, f7 = f7 + Math.imul(q12, tt) | 0, i6 = i6 + Math.imul(q12, it) | 0, i6 = i6 + Math.imul(R7, tt) | 0, n5 = n5 + Math.imul(R7, it) | 0, f7 = f7 + Math.imul(S9, rt) | 0, i6 = i6 + Math.imul(S9, et) | 0, i6 = i6 + Math.imul(k8, rt) | 0, n5 = n5 + Math.imul(k8, et) | 0;
      var qt3 = (u13 + f7 | 0) + ((i6 & 8191) << 13) | 0;
      u13 = (n5 + (i6 >>> 13) | 0) + (qt3 >>> 26) | 0, qt3 &= 67108863, f7 = Math.imul(E8, Q3), i6 = Math.imul(E8, V6), i6 = i6 + Math.imul(O9, Q3) | 0, n5 = Math.imul(O9, V6), f7 = f7 + Math.imul(I8, X4) | 0, i6 = i6 + Math.imul(I8, Y4) | 0, i6 = i6 + Math.imul(N5, X4) | 0, n5 = n5 + Math.imul(N5, Y4) | 0, f7 = f7 + Math.imul(L7, $2) | 0, i6 = i6 + Math.imul(L7, j7) | 0, i6 = i6 + Math.imul(z7, $2) | 0, n5 = n5 + Math.imul(z7, j7) | 0, f7 = f7 + Math.imul(Z3, tt) | 0, i6 = i6 + Math.imul(Z3, it) | 0, i6 = i6 + Math.imul(T4, tt) | 0, n5 = n5 + Math.imul(T4, it) | 0, f7 = f7 + Math.imul(q12, rt) | 0, i6 = i6 + Math.imul(q12, et) | 0, i6 = i6 + Math.imul(R7, rt) | 0, n5 = n5 + Math.imul(R7, et) | 0;
      var Rt2 = (u13 + f7 | 0) + ((i6 & 8191) << 13) | 0;
      u13 = (n5 + (i6 >>> 13) | 0) + (Rt2 >>> 26) | 0, Rt2 &= 67108863, f7 = Math.imul(E8, X4), i6 = Math.imul(E8, Y4), i6 = i6 + Math.imul(O9, X4) | 0, n5 = Math.imul(O9, Y4), f7 = f7 + Math.imul(I8, $2) | 0, i6 = i6 + Math.imul(I8, j7) | 0, i6 = i6 + Math.imul(N5, $2) | 0, n5 = n5 + Math.imul(N5, j7) | 0, f7 = f7 + Math.imul(L7, tt) | 0, i6 = i6 + Math.imul(L7, it) | 0, i6 = i6 + Math.imul(z7, tt) | 0, n5 = n5 + Math.imul(z7, it) | 0, f7 = f7 + Math.imul(Z3, rt) | 0, i6 = i6 + Math.imul(Z3, et) | 0, i6 = i6 + Math.imul(T4, rt) | 0, n5 = n5 + Math.imul(T4, et) | 0;
      var Zt2 = (u13 + f7 | 0) + ((i6 & 8191) << 13) | 0;
      u13 = (n5 + (i6 >>> 13) | 0) + (Zt2 >>> 26) | 0, Zt2 &= 67108863, f7 = Math.imul(E8, $2), i6 = Math.imul(E8, j7), i6 = i6 + Math.imul(O9, $2) | 0, n5 = Math.imul(O9, j7), f7 = f7 + Math.imul(I8, tt) | 0, i6 = i6 + Math.imul(I8, it) | 0, i6 = i6 + Math.imul(N5, tt) | 0, n5 = n5 + Math.imul(N5, it) | 0, f7 = f7 + Math.imul(L7, rt) | 0, i6 = i6 + Math.imul(L7, et) | 0, i6 = i6 + Math.imul(z7, rt) | 0, n5 = n5 + Math.imul(z7, et) | 0;
      var Tt2 = (u13 + f7 | 0) + ((i6 & 8191) << 13) | 0;
      u13 = (n5 + (i6 >>> 13) | 0) + (Tt2 >>> 26) | 0, Tt2 &= 67108863, f7 = Math.imul(E8, tt), i6 = Math.imul(E8, it), i6 = i6 + Math.imul(O9, tt) | 0, n5 = Math.imul(O9, it), f7 = f7 + Math.imul(I8, rt) | 0, i6 = i6 + Math.imul(I8, et) | 0, i6 = i6 + Math.imul(N5, rt) | 0, n5 = n5 + Math.imul(N5, et) | 0;
      var Lt2 = (u13 + f7 | 0) + ((i6 & 8191) << 13) | 0;
      u13 = (n5 + (i6 >>> 13) | 0) + (Lt2 >>> 26) | 0, Lt2 &= 67108863, f7 = Math.imul(E8, rt), i6 = Math.imul(E8, et), i6 = i6 + Math.imul(O9, rt) | 0, n5 = Math.imul(O9, et);
      var zt5 = (u13 + f7 | 0) + ((i6 & 8191) << 13) | 0;
      return u13 = (n5 + (i6 >>> 13) | 0) + (zt5 >>> 26) | 0, zt5 &= 67108863, a11[0] = pt2, a11[1] = Mt2, a11[2] = gt, a11[3] = ct, a11[4] = wt3, a11[5] = yt, a11[6] = xt3, a11[7] = _t2, a11[8] = bt2, a11[9] = At2, a11[10] = Bt2, a11[11] = St4, a11[12] = kt3, a11[13] = qt3, a11[14] = Rt2, a11[15] = Zt2, a11[16] = Tt2, a11[17] = Lt2, a11[18] = zt5, u13 !== 0 && (a11[19] = u13, e.length++), e;
    };
    Math.imul || (Ct3 = Dt3);
    function gi(o6, t, r2) {
      r2.negative = t.negative ^ o6.negative, r2.length = o6.length + t.length;
      for (var e = 0, h14 = 0, s10 = 0; s10 < r2.length - 1; s10++) {
        var a11 = h14;
        h14 = 0;
        for (var u13 = e & 67108863, f7 = Math.min(s10, t.length - 1), i6 = Math.max(0, s10 - o6.length + 1); i6 <= f7; i6++) {
          var n5 = s10 - i6, d9 = o6.words[n5] | 0, m16 = t.words[i6] | 0, p12 = d9 * m16, M11 = p12 & 67108863;
          a11 = a11 + (p12 / 67108864 | 0) | 0, M11 = M11 + u13 | 0, u13 = M11 & 67108863, a11 = a11 + (M11 >>> 26) | 0, h14 += a11 >>> 26, a11 &= 67108863;
        }
        r2.words[s10] = u13, e = a11, a11 = h14;
      }
      return e !== 0 ? r2.words[s10] = e : r2.length--, r2.strip();
    }
    function Jt2(o6, t, r2) {
      var e = new ft2();
      return e.mulp(o6, t, r2);
    }
    l11.prototype.mulTo = function(t, r2) {
      var e, h14 = this.length + t.length;
      return this.length === 10 && t.length === 10 ? e = Ct3(this, t, r2) : h14 < 63 ? e = Dt3(this, t, r2) : h14 < 1024 ? e = gi(this, t, r2) : e = Jt2(this, t, r2), e;
    };
    function ft2(o6, t) {
      this.x = o6, this.y = t;
    }
    ft2.prototype.makeRBT = function(t) {
      for (var r2 = new Array(t), e = l11.prototype._countBits(t) - 1, h14 = 0; h14 < t; h14++)
        r2[h14] = this.revBin(h14, e, t);
      return r2;
    }, ft2.prototype.revBin = function(t, r2, e) {
      if (t === 0 || t === e - 1)
        return t;
      for (var h14 = 0, s10 = 0; s10 < r2; s10++)
        h14 |= (t & 1) << r2 - s10 - 1, t >>= 1;
      return h14;
    }, ft2.prototype.permute = function(t, r2, e, h14, s10, a11) {
      for (var u13 = 0; u13 < a11; u13++)
        h14[u13] = r2[t[u13]], s10[u13] = e[t[u13]];
    }, ft2.prototype.transform = function(t, r2, e, h14, s10, a11) {
      this.permute(a11, t, r2, e, h14, s10);
      for (var u13 = 1; u13 < s10; u13 <<= 1)
        for (var f7 = u13 << 1, i6 = Math.cos(2 * Math.PI / f7), n5 = Math.sin(2 * Math.PI / f7), d9 = 0; d9 < s10; d9 += f7)
          for (var m16 = i6, p12 = n5, M11 = 0; M11 < u13; M11++) {
            var g15 = e[d9 + M11], c10 = h14[d9 + M11], st2 = e[d9 + M11 + u13], w13 = h14[d9 + M11 + u13], x13 = m16 * st2 - p12 * w13;
            w13 = m16 * w13 + p12 * st2, st2 = x13, e[d9 + M11] = g15 + st2, h14[d9 + M11] = c10 + w13, e[d9 + M11 + u13] = g15 - st2, h14[d9 + M11 + u13] = c10 - w13, M11 !== f7 && (x13 = i6 * m16 - n5 * p12, p12 = i6 * p12 + n5 * m16, m16 = x13);
          }
    }, ft2.prototype.guessLen13b = function(t, r2) {
      var e = Math.max(r2, t) | 1, h14 = e & 1, s10 = 0;
      for (e = e / 2 | 0; e; e = e >>> 1)
        s10++;
      return 1 << s10 + 1 + h14;
    }, ft2.prototype.conjugate = function(t, r2, e) {
      if (!(e <= 1))
        for (var h14 = 0; h14 < e / 2; h14++) {
          var s10 = t[h14];
          t[h14] = t[e - h14 - 1], t[e - h14 - 1] = s10, s10 = r2[h14], r2[h14] = -r2[e - h14 - 1], r2[e - h14 - 1] = -s10;
        }
    }, ft2.prototype.normalize13b = function(t, r2) {
      for (var e = 0, h14 = 0; h14 < r2 / 2; h14++) {
        var s10 = Math.round(t[2 * h14 + 1] / r2) * 8192 + Math.round(t[2 * h14] / r2) + e;
        t[h14] = s10 & 67108863, s10 < 67108864 ? e = 0 : e = s10 / 67108864 | 0;
      }
      return t;
    }, ft2.prototype.convert13b = function(t, r2, e, h14) {
      for (var s10 = 0, a11 = 0; a11 < r2; a11++)
        s10 = s10 + (t[a11] | 0), e[2 * a11] = s10 & 8191, s10 = s10 >>> 13, e[2 * a11 + 1] = s10 & 8191, s10 = s10 >>> 13;
      for (a11 = 2 * r2; a11 < h14; ++a11)
        e[a11] = 0;
      v14(s10 === 0), v14((s10 & -8192) === 0);
    }, ft2.prototype.stub = function(t) {
      for (var r2 = new Array(t), e = 0; e < t; e++)
        r2[e] = 0;
      return r2;
    }, ft2.prototype.mulp = function(t, r2, e) {
      var h14 = 2 * this.guessLen13b(t.length, r2.length), s10 = this.makeRBT(h14), a11 = this.stub(h14), u13 = new Array(h14), f7 = new Array(h14), i6 = new Array(h14), n5 = new Array(h14), d9 = new Array(h14), m16 = new Array(h14), p12 = e.words;
      p12.length = h14, this.convert13b(t.words, t.length, u13, h14), this.convert13b(r2.words, r2.length, n5, h14), this.transform(u13, a11, f7, i6, h14, s10), this.transform(n5, a11, d9, m16, h14, s10);
      for (var M11 = 0; M11 < h14; M11++) {
        var g15 = f7[M11] * d9[M11] - i6[M11] * m16[M11];
        i6[M11] = f7[M11] * m16[M11] + i6[M11] * d9[M11], f7[M11] = g15;
      }
      return this.conjugate(f7, i6, h14), this.transform(f7, i6, p12, a11, h14, s10), this.conjugate(p12, a11, h14), this.normalize13b(p12, h14), e.negative = t.negative ^ r2.negative, e.length = t.length + r2.length, e.strip();
    }, l11.prototype.mul = function(t) {
      var r2 = new l11(null);
      return r2.words = new Array(this.length + t.length), this.mulTo(t, r2);
    }, l11.prototype.mulf = function(t) {
      var r2 = new l11(null);
      return r2.words = new Array(this.length + t.length), Jt2(this, t, r2);
    }, l11.prototype.imul = function(t) {
      return this.clone().mulTo(t, this);
    }, l11.prototype.imuln = function(t) {
      v14(typeof t == "number"), v14(t < 67108864);
      for (var r2 = 0, e = 0; e < this.length; e++) {
        var h14 = (this.words[e] | 0) * t, s10 = (h14 & 67108863) + (r2 & 67108863);
        r2 >>= 26, r2 += h14 / 67108864 | 0, r2 += s10 >>> 26, this.words[e] = s10 & 67108863;
      }
      return r2 !== 0 && (this.words[e] = r2, this.length++), this;
    }, l11.prototype.muln = function(t) {
      return this.clone().imuln(t);
    }, l11.prototype.sqr = function() {
      return this.mul(this);
    }, l11.prototype.isqr = function() {
      return this.imul(this.clone());
    }, l11.prototype.pow = function(t) {
      var r2 = Mi3(t);
      if (r2.length === 0)
        return new l11(1);
      for (var e = this, h14 = 0; h14 < r2.length && r2[h14] === 0; h14++, e = e.sqr())
        ;
      if (++h14 < r2.length)
        for (var s10 = e.sqr(); h14 < r2.length; h14++, s10 = s10.sqr())
          r2[h14] !== 0 && (e = e.mul(s10));
      return e;
    }, l11.prototype.iushln = function(t) {
      v14(typeof t == "number" && t >= 0);
      var r2 = t % 26, e = (t - r2) / 26, h14 = 67108863 >>> 26 - r2 << 26 - r2, s10;
      if (r2 !== 0) {
        var a11 = 0;
        for (s10 = 0; s10 < this.length; s10++) {
          var u13 = this.words[s10] & h14, f7 = (this.words[s10] | 0) - u13 << r2;
          this.words[s10] = f7 | a11, a11 = u13 >>> 26 - r2;
        }
        a11 && (this.words[s10] = a11, this.length++);
      }
      if (e !== 0) {
        for (s10 = this.length - 1; s10 >= 0; s10--)
          this.words[s10 + e] = this.words[s10];
        for (s10 = 0; s10 < e; s10++)
          this.words[s10] = 0;
        this.length += e;
      }
      return this.strip();
    }, l11.prototype.ishln = function(t) {
      return v14(this.negative === 0), this.iushln(t);
    }, l11.prototype.iushrn = function(t, r2, e) {
      v14(typeof t == "number" && t >= 0);
      var h14;
      r2 ? h14 = (r2 - r2 % 26) / 26 : h14 = 0;
      var s10 = t % 26, a11 = Math.min((t - s10) / 26, this.length), u13 = 67108863 ^ 67108863 >>> s10 << s10, f7 = e;
      if (h14 -= a11, h14 = Math.max(0, h14), f7) {
        for (var i6 = 0; i6 < a11; i6++)
          f7.words[i6] = this.words[i6];
        f7.length = a11;
      }
      if (a11 !== 0)
        if (this.length > a11)
          for (this.length -= a11, i6 = 0; i6 < this.length; i6++)
            this.words[i6] = this.words[i6 + a11];
        else
          this.words[0] = 0, this.length = 1;
      var n5 = 0;
      for (i6 = this.length - 1; i6 >= 0 && (n5 !== 0 || i6 >= h14); i6--) {
        var d9 = this.words[i6] | 0;
        this.words[i6] = n5 << 26 - s10 | d9 >>> s10, n5 = d9 & u13;
      }
      return f7 && n5 !== 0 && (f7.words[f7.length++] = n5), this.length === 0 && (this.words[0] = 0, this.length = 1), this.strip();
    }, l11.prototype.ishrn = function(t, r2, e) {
      return v14(this.negative === 0), this.iushrn(t, r2, e);
    }, l11.prototype.shln = function(t) {
      return this.clone().ishln(t);
    }, l11.prototype.ushln = function(t) {
      return this.clone().iushln(t);
    }, l11.prototype.shrn = function(t) {
      return this.clone().ishrn(t);
    }, l11.prototype.ushrn = function(t) {
      return this.clone().iushrn(t);
    }, l11.prototype.testn = function(t) {
      v14(typeof t == "number" && t >= 0);
      var r2 = t % 26, e = (t - r2) / 26, h14 = 1 << r2;
      if (this.length <= e)
        return false;
      var s10 = this.words[e];
      return !!(s10 & h14);
    }, l11.prototype.imaskn = function(t) {
      v14(typeof t == "number" && t >= 0);
      var r2 = t % 26, e = (t - r2) / 26;
      if (v14(this.negative === 0, "imaskn works only with positive numbers"), this.length <= e)
        return this;
      if (r2 !== 0 && e++, this.length = Math.min(e, this.length), r2 !== 0) {
        var h14 = 67108863 ^ 67108863 >>> r2 << r2;
        this.words[this.length - 1] &= h14;
      }
      return this.strip();
    }, l11.prototype.maskn = function(t) {
      return this.clone().imaskn(t);
    }, l11.prototype.iaddn = function(t) {
      return v14(typeof t == "number"), v14(t < 67108864), t < 0 ? this.isubn(-t) : this.negative !== 0 ? this.length === 1 && (this.words[0] | 0) < t ? (this.words[0] = t - (this.words[0] | 0), this.negative = 0, this) : (this.negative = 0, this.isubn(t), this.negative = 1, this) : this._iaddn(t);
    }, l11.prototype._iaddn = function(t) {
      this.words[0] += t;
      for (var r2 = 0; r2 < this.length && this.words[r2] >= 67108864; r2++)
        this.words[r2] -= 67108864, r2 === this.length - 1 ? this.words[r2 + 1] = 1 : this.words[r2 + 1]++;
      return this.length = Math.max(this.length, r2 + 1), this;
    }, l11.prototype.isubn = function(t) {
      if (v14(typeof t == "number"), v14(t < 67108864), t < 0)
        return this.iaddn(-t);
      if (this.negative !== 0)
        return this.negative = 0, this.iaddn(t), this.negative = 1, this;
      if (this.words[0] -= t, this.length === 1 && this.words[0] < 0)
        this.words[0] = -this.words[0], this.negative = 1;
      else
        for (var r2 = 0; r2 < this.length && this.words[r2] < 0; r2++)
          this.words[r2] += 67108864, this.words[r2 + 1] -= 1;
      return this.strip();
    }, l11.prototype.addn = function(t) {
      return this.clone().iaddn(t);
    }, l11.prototype.subn = function(t) {
      return this.clone().isubn(t);
    }, l11.prototype.iabs = function() {
      return this.negative = 0, this;
    }, l11.prototype.abs = function() {
      return this.clone().iabs();
    }, l11.prototype._ishlnsubmul = function(t, r2, e) {
      var h14 = t.length + e, s10;
      this._expand(h14);
      var a11, u13 = 0;
      for (s10 = 0; s10 < t.length; s10++) {
        a11 = (this.words[s10 + e] | 0) + u13;
        var f7 = (t.words[s10] | 0) * r2;
        a11 -= f7 & 67108863, u13 = (a11 >> 26) - (f7 / 67108864 | 0), this.words[s10 + e] = a11 & 67108863;
      }
      for (; s10 < this.length - e; s10++)
        a11 = (this.words[s10 + e] | 0) + u13, u13 = a11 >> 26, this.words[s10 + e] = a11 & 67108863;
      if (u13 === 0)
        return this.strip();
      for (v14(u13 === -1), u13 = 0, s10 = 0; s10 < this.length; s10++)
        a11 = -(this.words[s10] | 0) + u13, u13 = a11 >> 26, this.words[s10] = a11 & 67108863;
      return this.negative = 1, this.strip();
    }, l11.prototype._wordDiv = function(t, r2) {
      var e = this.length - t.length, h14 = this.clone(), s10 = t, a11 = s10.words[s10.length - 1] | 0, u13 = this._countBits(a11);
      e = 26 - u13, e !== 0 && (s10 = s10.ushln(e), h14.iushln(e), a11 = s10.words[s10.length - 1] | 0);
      var f7 = h14.length - s10.length, i6;
      if (r2 !== "mod") {
        i6 = new l11(null), i6.length = f7 + 1, i6.words = new Array(i6.length);
        for (var n5 = 0; n5 < i6.length; n5++)
          i6.words[n5] = 0;
      }
      var d9 = h14.clone()._ishlnsubmul(s10, 1, f7);
      d9.negative === 0 && (h14 = d9, i6 && (i6.words[f7] = 1));
      for (var m16 = f7 - 1; m16 >= 0; m16--) {
        var p12 = (h14.words[s10.length + m16] | 0) * 67108864 + (h14.words[s10.length + m16 - 1] | 0);
        for (p12 = Math.min(p12 / a11 | 0, 67108863), h14._ishlnsubmul(s10, p12, m16); h14.negative !== 0; )
          p12--, h14.negative = 0, h14._ishlnsubmul(s10, 1, m16), h14.isZero() || (h14.negative ^= 1);
        i6 && (i6.words[m16] = p12);
      }
      return i6 && i6.strip(), h14.strip(), r2 !== "div" && e !== 0 && h14.iushrn(e), { div: i6 || null, mod: h14 };
    }, l11.prototype.divmod = function(t, r2, e) {
      if (v14(!t.isZero()), this.isZero())
        return { div: new l11(0), mod: new l11(0) };
      var h14, s10, a11;
      return this.negative !== 0 && t.negative === 0 ? (a11 = this.neg().divmod(t, r2), r2 !== "mod" && (h14 = a11.div.neg()), r2 !== "div" && (s10 = a11.mod.neg(), e && s10.negative !== 0 && s10.iadd(t)), { div: h14, mod: s10 }) : this.negative === 0 && t.negative !== 0 ? (a11 = this.divmod(t.neg(), r2), r2 !== "mod" && (h14 = a11.div.neg()), { div: h14, mod: a11.mod }) : this.negative & t.negative ? (a11 = this.neg().divmod(t.neg(), r2), r2 !== "div" && (s10 = a11.mod.neg(), e && s10.negative !== 0 && s10.isub(t)), { div: a11.div, mod: s10 }) : t.length > this.length || this.cmp(t) < 0 ? { div: new l11(0), mod: this } : t.length === 1 ? r2 === "div" ? { div: this.divn(t.words[0]), mod: null } : r2 === "mod" ? { div: null, mod: new l11(this.modn(t.words[0])) } : { div: this.divn(t.words[0]), mod: new l11(this.modn(t.words[0])) } : this._wordDiv(t, r2);
    }, l11.prototype.div = function(t) {
      return this.divmod(t, "div", false).div;
    }, l11.prototype.mod = function(t) {
      return this.divmod(t, "mod", false).mod;
    }, l11.prototype.umod = function(t) {
      return this.divmod(t, "mod", true).mod;
    }, l11.prototype.divRound = function(t) {
      var r2 = this.divmod(t);
      if (r2.mod.isZero())
        return r2.div;
      var e = r2.div.negative !== 0 ? r2.mod.isub(t) : r2.mod, h14 = t.ushrn(1), s10 = t.andln(1), a11 = e.cmp(h14);
      return a11 < 0 || s10 === 1 && a11 === 0 ? r2.div : r2.div.negative !== 0 ? r2.div.isubn(1) : r2.div.iaddn(1);
    }, l11.prototype.modn = function(t) {
      v14(t <= 67108863);
      for (var r2 = (1 << 26) % t, e = 0, h14 = this.length - 1; h14 >= 0; h14--)
        e = (r2 * e + (this.words[h14] | 0)) % t;
      return e;
    }, l11.prototype.idivn = function(t) {
      v14(t <= 67108863);
      for (var r2 = 0, e = this.length - 1; e >= 0; e--) {
        var h14 = (this.words[e] | 0) + r2 * 67108864;
        this.words[e] = h14 / t | 0, r2 = h14 % t;
      }
      return this.strip();
    }, l11.prototype.divn = function(t) {
      return this.clone().idivn(t);
    }, l11.prototype.egcd = function(t) {
      v14(t.negative === 0), v14(!t.isZero());
      var r2 = this, e = t.clone();
      r2.negative !== 0 ? r2 = r2.umod(t) : r2 = r2.clone();
      for (var h14 = new l11(1), s10 = new l11(0), a11 = new l11(0), u13 = new l11(1), f7 = 0; r2.isEven() && e.isEven(); )
        r2.iushrn(1), e.iushrn(1), ++f7;
      for (var i6 = e.clone(), n5 = r2.clone(); !r2.isZero(); ) {
        for (var d9 = 0, m16 = 1; !(r2.words[0] & m16) && d9 < 26; ++d9, m16 <<= 1)
          ;
        if (d9 > 0)
          for (r2.iushrn(d9); d9-- > 0; )
            (h14.isOdd() || s10.isOdd()) && (h14.iadd(i6), s10.isub(n5)), h14.iushrn(1), s10.iushrn(1);
        for (var p12 = 0, M11 = 1; !(e.words[0] & M11) && p12 < 26; ++p12, M11 <<= 1)
          ;
        if (p12 > 0)
          for (e.iushrn(p12); p12-- > 0; )
            (a11.isOdd() || u13.isOdd()) && (a11.iadd(i6), u13.isub(n5)), a11.iushrn(1), u13.iushrn(1);
        r2.cmp(e) >= 0 ? (r2.isub(e), h14.isub(a11), s10.isub(u13)) : (e.isub(r2), a11.isub(h14), u13.isub(s10));
      }
      return { a: a11, b: u13, gcd: e.iushln(f7) };
    }, l11.prototype._invmp = function(t) {
      v14(t.negative === 0), v14(!t.isZero());
      var r2 = this, e = t.clone();
      r2.negative !== 0 ? r2 = r2.umod(t) : r2 = r2.clone();
      for (var h14 = new l11(1), s10 = new l11(0), a11 = e.clone(); r2.cmpn(1) > 0 && e.cmpn(1) > 0; ) {
        for (var u13 = 0, f7 = 1; !(r2.words[0] & f7) && u13 < 26; ++u13, f7 <<= 1)
          ;
        if (u13 > 0)
          for (r2.iushrn(u13); u13-- > 0; )
            h14.isOdd() && h14.iadd(a11), h14.iushrn(1);
        for (var i6 = 0, n5 = 1; !(e.words[0] & n5) && i6 < 26; ++i6, n5 <<= 1)
          ;
        if (i6 > 0)
          for (e.iushrn(i6); i6-- > 0; )
            s10.isOdd() && s10.iadd(a11), s10.iushrn(1);
        r2.cmp(e) >= 0 ? (r2.isub(e), h14.isub(s10)) : (e.isub(r2), s10.isub(h14));
      }
      var d9;
      return r2.cmpn(1) === 0 ? d9 = h14 : d9 = s10, d9.cmpn(0) < 0 && d9.iadd(t), d9;
    }, l11.prototype.gcd = function(t) {
      if (this.isZero())
        return t.abs();
      if (t.isZero())
        return this.abs();
      var r2 = this.clone(), e = t.clone();
      r2.negative = 0, e.negative = 0;
      for (var h14 = 0; r2.isEven() && e.isEven(); h14++)
        r2.iushrn(1), e.iushrn(1);
      do {
        for (; r2.isEven(); )
          r2.iushrn(1);
        for (; e.isEven(); )
          e.iushrn(1);
        var s10 = r2.cmp(e);
        if (s10 < 0) {
          var a11 = r2;
          r2 = e, e = a11;
        } else if (s10 === 0 || e.cmpn(1) === 0)
          break;
        r2.isub(e);
      } while (true);
      return e.iushln(h14);
    }, l11.prototype.invm = function(t) {
      return this.egcd(t).a.umod(t);
    }, l11.prototype.isEven = function() {
      return (this.words[0] & 1) === 0;
    }, l11.prototype.isOdd = function() {
      return (this.words[0] & 1) === 1;
    }, l11.prototype.andln = function(t) {
      return this.words[0] & t;
    }, l11.prototype.bincn = function(t) {
      v14(typeof t == "number");
      var r2 = t % 26, e = (t - r2) / 26, h14 = 1 << r2;
      if (this.length <= e)
        return this._expand(e + 1), this.words[e] |= h14, this;
      for (var s10 = h14, a11 = e; s10 !== 0 && a11 < this.length; a11++) {
        var u13 = this.words[a11] | 0;
        u13 += s10, s10 = u13 >>> 26, u13 &= 67108863, this.words[a11] = u13;
      }
      return s10 !== 0 && (this.words[a11] = s10, this.length++), this;
    }, l11.prototype.isZero = function() {
      return this.length === 1 && this.words[0] === 0;
    }, l11.prototype.cmpn = function(t) {
      var r2 = t < 0;
      if (this.negative !== 0 && !r2)
        return -1;
      if (this.negative === 0 && r2)
        return 1;
      this.strip();
      var e;
      if (this.length > 1)
        e = 1;
      else {
        r2 && (t = -t), v14(t <= 67108863, "Number is too big");
        var h14 = this.words[0] | 0;
        e = h14 === t ? 0 : h14 < t ? -1 : 1;
      }
      return this.negative !== 0 ? -e | 0 : e;
    }, l11.prototype.cmp = function(t) {
      if (this.negative !== 0 && t.negative === 0)
        return -1;
      if (this.negative === 0 && t.negative !== 0)
        return 1;
      var r2 = this.ucmp(t);
      return this.negative !== 0 ? -r2 | 0 : r2;
    }, l11.prototype.ucmp = function(t) {
      if (this.length > t.length)
        return 1;
      if (this.length < t.length)
        return -1;
      for (var r2 = 0, e = this.length - 1; e >= 0; e--) {
        var h14 = this.words[e] | 0, s10 = t.words[e] | 0;
        if (h14 !== s10) {
          h14 < s10 ? r2 = -1 : h14 > s10 && (r2 = 1);
          break;
        }
      }
      return r2;
    }, l11.prototype.gtn = function(t) {
      return this.cmpn(t) === 1;
    }, l11.prototype.gt = function(t) {
      return this.cmp(t) === 1;
    }, l11.prototype.gten = function(t) {
      return this.cmpn(t) >= 0;
    }, l11.prototype.gte = function(t) {
      return this.cmp(t) >= 0;
    }, l11.prototype.ltn = function(t) {
      return this.cmpn(t) === -1;
    }, l11.prototype.lt = function(t) {
      return this.cmp(t) === -1;
    }, l11.prototype.lten = function(t) {
      return this.cmpn(t) <= 0;
    }, l11.prototype.lte = function(t) {
      return this.cmp(t) <= 0;
    }, l11.prototype.eqn = function(t) {
      return this.cmpn(t) === 0;
    }, l11.prototype.eq = function(t) {
      return this.cmp(t) === 0;
    }, l11.red = function(t) {
      return new b8(t);
    }, l11.prototype.toRed = function(t) {
      return v14(!this.red, "Already a number in reduction context"), v14(this.negative === 0, "red works only with positives"), t.convertTo(this)._forceRed(t);
    }, l11.prototype.fromRed = function() {
      return v14(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this);
    }, l11.prototype._forceRed = function(t) {
      return this.red = t, this;
    }, l11.prototype.forceRed = function(t) {
      return v14(!this.red, "Already a number in reduction context"), this._forceRed(t);
    }, l11.prototype.redAdd = function(t) {
      return v14(this.red, "redAdd works only with red numbers"), this.red.add(this, t);
    }, l11.prototype.redIAdd = function(t) {
      return v14(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, t);
    }, l11.prototype.redSub = function(t) {
      return v14(this.red, "redSub works only with red numbers"), this.red.sub(this, t);
    }, l11.prototype.redISub = function(t) {
      return v14(this.red, "redISub works only with red numbers"), this.red.isub(this, t);
    }, l11.prototype.redShl = function(t) {
      return v14(this.red, "redShl works only with red numbers"), this.red.shl(this, t);
    }, l11.prototype.redMul = function(t) {
      return v14(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.mul(this, t);
    }, l11.prototype.redIMul = function(t) {
      return v14(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.imul(this, t);
    }, l11.prototype.redSqr = function() {
      return v14(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this);
    }, l11.prototype.redISqr = function() {
      return v14(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this);
    }, l11.prototype.redSqrt = function() {
      return v14(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this);
    }, l11.prototype.redInvm = function() {
      return v14(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this);
    }, l11.prototype.redNeg = function() {
      return v14(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this);
    }, l11.prototype.redPow = function(t) {
      return v14(this.red && !t.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, t);
    };
    var dt = { k256: null, p224: null, p192: null, p25519: null };
    function ht(o6, t) {
      this.name = o6, this.p = new l11(t, 16), this.n = this.p.bitLength(), this.k = new l11(1).iushln(this.n).isub(this.p), this.tmp = this._tmp();
    }
    ht.prototype._tmp = function() {
      var t = new l11(null);
      return t.words = new Array(Math.ceil(this.n / 13)), t;
    }, ht.prototype.ireduce = function(t) {
      var r2 = t, e;
      do
        this.split(r2, this.tmp), r2 = this.imulK(r2), r2 = r2.iadd(this.tmp), e = r2.bitLength();
      while (e > this.n);
      var h14 = e < this.n ? -1 : r2.ucmp(this.p);
      return h14 === 0 ? (r2.words[0] = 0, r2.length = 1) : h14 > 0 ? r2.isub(this.p) : r2.strip !== void 0 ? r2.strip() : r2._strip(), r2;
    }, ht.prototype.split = function(t, r2) {
      t.iushrn(this.n, 0, r2);
    }, ht.prototype.imulK = function(t) {
      return t.imul(this.k);
    };
    function vt() {
      ht.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f");
    }
    nt(vt, ht), vt.prototype.split = function(t, r2) {
      for (var e = 4194303, h14 = Math.min(t.length, 9), s10 = 0; s10 < h14; s10++)
        r2.words[s10] = t.words[s10];
      if (r2.length = h14, t.length <= 9) {
        t.words[0] = 0, t.length = 1;
        return;
      }
      var a11 = t.words[9];
      for (r2.words[r2.length++] = a11 & e, s10 = 10; s10 < t.length; s10++) {
        var u13 = t.words[s10] | 0;
        t.words[s10 - 10] = (u13 & e) << 4 | a11 >>> 22, a11 = u13;
      }
      a11 >>>= 22, t.words[s10 - 10] = a11, a11 === 0 && t.length > 10 ? t.length -= 10 : t.length -= 9;
    }, vt.prototype.imulK = function(t) {
      t.words[t.length] = 0, t.words[t.length + 1] = 0, t.length += 2;
      for (var r2 = 0, e = 0; e < t.length; e++) {
        var h14 = t.words[e] | 0;
        r2 += h14 * 977, t.words[e] = r2 & 67108863, r2 = h14 * 64 + (r2 / 67108864 | 0);
      }
      return t.words[t.length - 1] === 0 && (t.length--, t.words[t.length - 1] === 0 && t.length--), t;
    };
    function Ut3() {
      ht.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001");
    }
    nt(Ut3, ht);
    function Wt2() {
      ht.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff");
    }
    nt(Wt2, ht);
    function mt3() {
      ht.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed");
    }
    nt(mt3, ht), mt3.prototype.imulK = function(t) {
      for (var r2 = 0, e = 0; e < t.length; e++) {
        var h14 = (t.words[e] | 0) * 19 + r2, s10 = h14 & 67108863;
        h14 >>>= 26, t.words[e] = s10, r2 = h14;
      }
      return r2 !== 0 && (t.words[t.length++] = r2), t;
    }, l11._prime = function(t) {
      if (dt[t])
        return dt[t];
      var r2;
      if (t === "k256")
        r2 = new vt();
      else if (t === "p224")
        r2 = new Ut3();
      else if (t === "p192")
        r2 = new Wt2();
      else if (t === "p25519")
        r2 = new mt3();
      else
        throw new Error("Unknown prime " + t);
      return dt[t] = r2, r2;
    };
    function b8(o6) {
      if (typeof o6 == "string") {
        var t = l11._prime(o6);
        this.m = t.p, this.prime = t;
      } else
        v14(o6.gtn(1), "modulus must be greater than 1"), this.m = o6, this.prime = null;
    }
    b8.prototype._verify1 = function(t) {
      v14(t.negative === 0, "red works only with positives"), v14(t.red, "red works only with red numbers");
    }, b8.prototype._verify2 = function(t, r2) {
      v14((t.negative | r2.negative) === 0, "red works only with positives"), v14(t.red && t.red === r2.red, "red works only with red numbers");
    }, b8.prototype.imod = function(t) {
      return this.prime ? this.prime.ireduce(t)._forceRed(this) : t.umod(this.m)._forceRed(this);
    }, b8.prototype.neg = function(t) {
      return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this);
    }, b8.prototype.add = function(t, r2) {
      this._verify2(t, r2);
      var e = t.add(r2);
      return e.cmp(this.m) >= 0 && e.isub(this.m), e._forceRed(this);
    }, b8.prototype.iadd = function(t, r2) {
      this._verify2(t, r2);
      var e = t.iadd(r2);
      return e.cmp(this.m) >= 0 && e.isub(this.m), e;
    }, b8.prototype.sub = function(t, r2) {
      this._verify2(t, r2);
      var e = t.sub(r2);
      return e.cmpn(0) < 0 && e.iadd(this.m), e._forceRed(this);
    }, b8.prototype.isub = function(t, r2) {
      this._verify2(t, r2);
      var e = t.isub(r2);
      return e.cmpn(0) < 0 && e.iadd(this.m), e;
    }, b8.prototype.shl = function(t, r2) {
      return this._verify1(t), this.imod(t.ushln(r2));
    }, b8.prototype.imul = function(t, r2) {
      return this._verify2(t, r2), this.imod(t.imul(r2));
    }, b8.prototype.mul = function(t, r2) {
      return this._verify2(t, r2), this.imod(t.mul(r2));
    }, b8.prototype.isqr = function(t) {
      return this.imul(t, t.clone());
    }, b8.prototype.sqr = function(t) {
      return this.mul(t, t);
    }, b8.prototype.sqrt = function(t) {
      if (t.isZero())
        return t.clone();
      var r2 = this.m.andln(3);
      if (v14(r2 % 2 === 1), r2 === 3) {
        var e = this.m.add(new l11(1)).iushrn(2);
        return this.pow(t, e);
      }
      for (var h14 = this.m.subn(1), s10 = 0; !h14.isZero() && h14.andln(1) === 0; )
        s10++, h14.iushrn(1);
      v14(!h14.isZero());
      var a11 = new l11(1).toRed(this), u13 = a11.redNeg(), f7 = this.m.subn(1).iushrn(1), i6 = this.m.bitLength();
      for (i6 = new l11(2 * i6 * i6).toRed(this); this.pow(i6, f7).cmp(u13) !== 0; )
        i6.redIAdd(u13);
      for (var n5 = this.pow(i6, h14), d9 = this.pow(t, h14.addn(1).iushrn(1)), m16 = this.pow(t, h14), p12 = s10; m16.cmp(a11) !== 0; ) {
        for (var M11 = m16, g15 = 0; M11.cmp(a11) !== 0; g15++)
          M11 = M11.redSqr();
        v14(g15 < p12);
        var c10 = this.pow(n5, new l11(1).iushln(p12 - g15 - 1));
        d9 = d9.redMul(c10), n5 = c10.redSqr(), m16 = m16.redMul(n5), p12 = g15;
      }
      return d9;
    }, b8.prototype.invm = function(t) {
      var r2 = t._invmp(this.m);
      return r2.negative !== 0 ? (r2.negative = 0, this.imod(r2).redNeg()) : this.imod(r2);
    }, b8.prototype.pow = function(t, r2) {
      if (r2.isZero())
        return new l11(1).toRed(this);
      if (r2.cmpn(1) === 0)
        return t.clone();
      var e = 4, h14 = new Array(1 << e);
      h14[0] = new l11(1).toRed(this), h14[1] = t;
      for (var s10 = 2; s10 < h14.length; s10++)
        h14[s10] = this.mul(h14[s10 - 1], t);
      var a11 = h14[0], u13 = 0, f7 = 0, i6 = r2.bitLength() % 26;
      for (i6 === 0 && (i6 = 26), s10 = r2.length - 1; s10 >= 0; s10--) {
        for (var n5 = r2.words[s10], d9 = i6 - 1; d9 >= 0; d9--) {
          var m16 = n5 >> d9 & 1;
          if (a11 !== h14[0] && (a11 = this.sqr(a11)), m16 === 0 && u13 === 0) {
            f7 = 0;
            continue;
          }
          u13 <<= 1, u13 |= m16, f7++, !(f7 !== e && (s10 !== 0 || d9 !== 0)) && (a11 = this.mul(a11, h14[u13]), f7 = 0, u13 = 0);
        }
        i6 = 26;
      }
      return a11;
    }, b8.prototype.convertTo = function(t) {
      var r2 = t.umod(this.m);
      return r2 === t ? r2.clone() : r2;
    }, b8.prototype.convertFrom = function(t) {
      var r2 = t.clone();
      return r2.red = null, r2;
    }, l11.mont = function(t) {
      return new at(t);
    };
    function at(o6) {
      b8.call(this, o6), this.shift = this.m.bitLength(), this.shift % 26 !== 0 && (this.shift += 26 - this.shift % 26), this.r = new l11(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv);
    }
    nt(at, b8), at.prototype.convertTo = function(t) {
      return this.imod(t.ushln(this.shift));
    }, at.prototype.convertFrom = function(t) {
      var r2 = this.imod(t.mul(this.rinv));
      return r2.red = null, r2;
    }, at.prototype.imul = function(t, r2) {
      if (t.isZero() || r2.isZero())
        return t.words[0] = 0, t.length = 1, t;
      var e = t.imul(r2), h14 = e.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), s10 = e.isub(h14).iushrn(this.shift), a11 = s10;
      return s10.cmp(this.m) >= 0 ? a11 = s10.isub(this.m) : s10.cmpn(0) < 0 && (a11 = s10.iadd(this.m)), a11._forceRed(this);
    }, at.prototype.mul = function(t, r2) {
      if (t.isZero() || r2.isZero())
        return new l11(0)._forceRed(this);
      var e = t.mul(r2), h14 = e.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), s10 = e.isub(h14).iushrn(this.shift), a11 = s10;
      return s10.cmp(this.m) >= 0 ? a11 = s10.isub(this.m) : s10.cmpn(0) < 0 && (a11 = s10.iadd(this.m)), a11._forceRed(this);
    }, at.prototype.invm = function(t) {
      var r2 = this.imod(t._invmp(this.m).mul(this.r2));
      return r2._forceRed(this);
    };
  })(typeof Et3 > "u" || Et3, ui);
});
var ot = {};
Bi2(ot, { BN: () => Si2, default: () => qi2 });
var di2 = li(Ot());
lt2(ot, li(Ot()));
var { BN: Si2 } = di2;
var { default: vi, ...ki2 } = di2;
var qi2 = vi !== void 0 ? vi : ki2;

// https://esm.sh/v135/hmac-drbg@1.0.1/denonext/hmac-drbg.mjs
var hmac_drbg_exports = {};
__export(hmac_drbg_exports, {
  default: () => L2
});

// https://esm.sh/v135/minimalistic-crypto-utils@1.0.1/denonext/minimalistic-crypto-utils.mjs
var minimalistic_crypto_utils_exports = {};
__export(minimalistic_crypto_utils_exports, {
  default: () => q2
});
var A4 = Object.create;
var l3 = Object.defineProperty;
var s3 = Object.getOwnPropertyDescriptor;
var z = Object.getOwnPropertyNames;
var H2 = Object.getPrototypeOf;
var C3 = Object.prototype.hasOwnProperty;
var I3 = (r2, e) => () => (e || r2((e = { exports: {} }).exports, e), e.exports);
var S2 = (r2, e) => {
  for (var t in e)
    l3(r2, t, { get: e[t], enumerable: true });
};
var i2 = (r2, e, t, n5) => {
  if (e && typeof e == "object" || typeof e == "function")
    for (let f7 of z(e))
      !C3.call(r2, f7) && f7 !== t && l3(r2, f7, { get: () => e[f7], enumerable: !(n5 = s3(e, f7)) || n5.enumerable });
  return r2;
};
var u4 = (r2, e, t) => (i2(r2, e, "default"), t && i2(t, e, "default"));
var p4 = (r2, e, t) => (t = r2 != null ? A4(H2(r2)) : {}, i2(e || !r2 || !r2.__esModule ? l3(t, "default", { value: r2, enumerable: true }) : t, r2));
var h5 = I3((_12) => {
  "use strict";
  var a11 = _12;
  function b8(r2, e) {
    if (Array.isArray(r2))
      return r2.slice();
    if (!r2)
      return [];
    var t = [];
    if (typeof r2 != "string") {
      for (var n5 = 0; n5 < r2.length; n5++)
        t[n5] = r2[n5] | 0;
      return t;
    }
    if (e === "hex") {
      r2 = r2.replace(/[^a-z0-9]+/ig, ""), r2.length % 2 !== 0 && (r2 = "0" + r2);
      for (var n5 = 0; n5 < r2.length; n5 += 2)
        t.push(parseInt(r2[n5] + r2[n5 + 1], 16));
    } else
      for (var n5 = 0; n5 < r2.length; n5++) {
        var f7 = r2.charCodeAt(n5), c10 = f7 >> 8, v14 = f7 & 255;
        c10 ? t.push(c10, v14) : t.push(v14);
      }
    return t;
  }
  a11.toArray = b8;
  function d9(r2) {
    return r2.length === 1 ? "0" + r2 : r2;
  }
  a11.zero2 = d9;
  function x13(r2) {
    for (var e = "", t = 0; t < r2.length; t++)
      e += d9(r2[t].toString(16));
    return e;
  }
  a11.toHex = x13;
  a11.encode = function(e, t) {
    return t === "hex" ? x13(e) : e;
  };
});
var o3 = {};
S2(o3, { default: () => q2 });
var j3 = p4(h5());
u4(o3, p4(h5()));
var { default: y3, ...k2 } = j3;
var q2 = y3 !== void 0 ? y3 : k2;

// https://esm.sh/v135/hmac-drbg@1.0.1/denonext/hmac-drbg.mjs
var require7 = (n5) => {
  const e = (m16) => typeof m16.default < "u" ? m16.default : m16, c10 = (m16) => Object.assign({}, m16);
  switch (n5) {
    case "hash.js":
      return e(hash_exports);
    case "minimalistic-crypto-utils":
      return e(minimalistic_crypto_utils_exports);
    case "minimalistic-assert":
      return e(minimalistic_assert_exports);
    default:
      throw new Error('module "' + n5 + '" not found');
  }
};
var v4 = Object.create;
var c5 = Object.defineProperty;
var V2 = Object.getOwnPropertyDescriptor;
var x4 = Object.getOwnPropertyNames;
var A5 = Object.getPrototypeOf;
var w4 = Object.prototype.hasOwnProperty;
var m4 = ((e) => typeof require7 < "u" ? require7 : typeof Proxy < "u" ? new Proxy(e, { get: (t, i6) => (typeof require7 < "u" ? require7 : t)[i6] }) : e)(function(e) {
  if (typeof require7 < "u")
    return require7.apply(this, arguments);
  throw Error('Dynamic require of "' + e + '" is not supported');
});
var K3 = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
var E3 = (e, t) => {
  for (var i6 in t)
    c5(e, i6, { get: t[i6], enumerable: true });
};
var p5 = (e, t, i6, r2) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let s10 of x4(t))
      !w4.call(e, s10) && s10 !== i6 && c5(e, s10, { get: () => t[s10], enumerable: !(r2 = V2(t, s10)) || r2.enumerable });
  return e;
};
var o4 = (e, t, i6) => (p5(e, t, "default"), i6 && p5(i6, t, "default"));
var _3 = (e, t, i6) => (i6 = e != null ? v4(A5(e)) : {}, p5(t || !e || !e.__esModule ? c5(i6, "default", { value: e, enumerable: true }) : i6, e));
var l4 = K3((M11, y10) => {
  "use strict";
  var q12 = m4("hash.js"), a11 = m4("minimalistic-crypto-utils"), f7 = m4("minimalistic-assert");
  function n5(e) {
    if (!(this instanceof n5))
      return new n5(e);
    this.hash = e.hash, this.predResist = !!e.predResist, this.outLen = this.hash.outSize, this.minEntropy = e.minEntropy || this.hash.hmacStrength, this._reseed = null, this.reseedInterval = null, this.K = null, this.V = null;
    var t = a11.toArray(e.entropy, e.entropyEnc || "hex"), i6 = a11.toArray(e.nonce, e.nonceEnc || "hex"), r2 = a11.toArray(e.pers, e.persEnc || "hex");
    f7(t.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._init(t, i6, r2);
  }
  y10.exports = n5;
  n5.prototype._init = function(t, i6, r2) {
    var s10 = t.concat(i6).concat(r2);
    this.K = new Array(this.outLen / 8), this.V = new Array(this.outLen / 8);
    for (var h14 = 0; h14 < this.V.length; h14++)
      this.K[h14] = 0, this.V[h14] = 1;
    this._update(s10), this._reseed = 1, this.reseedInterval = 281474976710656;
  };
  n5.prototype._hmac = function() {
    return new q12.hmac(this.hash, this.K);
  };
  n5.prototype._update = function(t) {
    var i6 = this._hmac().update(this.V).update([0]);
    t && (i6 = i6.update(t)), this.K = i6.digest(), this.V = this._hmac().update(this.V).digest(), t && (this.K = this._hmac().update(this.V).update([1]).update(t).digest(), this.V = this._hmac().update(this.V).digest());
  };
  n5.prototype.reseed = function(t, i6, r2, s10) {
    typeof i6 != "string" && (s10 = r2, r2 = i6, i6 = null), t = a11.toArray(t, i6), r2 = a11.toArray(r2, s10), f7(t.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._update(t.concat(r2 || [])), this._reseed = 1;
  };
  n5.prototype.generate = function(t, i6, r2, s10) {
    if (this._reseed > this.reseedInterval)
      throw new Error("Reseed is required");
    typeof i6 != "string" && (s10 = r2, r2 = i6, i6 = null), r2 && (r2 = a11.toArray(r2, s10 || "hex"), this._update(r2));
    for (var h14 = []; h14.length < t; )
      this.V = this._hmac().update(this.V).digest(), h14 = h14.concat(this.V);
    var d9 = h14.slice(0, t);
    return this._update(r2), this._reseed++, a11.encode(d9, i6);
  };
});
var u5 = {};
E3(u5, { default: () => L2 });
var R3 = _3(l4());
o4(u5, _3(l4()));
var { default: g4, ...I4 } = R3;
var L2 = g4 !== void 0 ? g4 : I4;

// https://esm.sh/v135/elliptic@6.5.4/denonext/elliptic.mjs
var require8 = (n5) => {
  const e = (m16) => typeof m16.default < "u" ? m16.default : m16, c10 = (m16) => Object.assign({}, m16);
  switch (n5) {
    case "brorand":
      return e(brorand_exports);
    case "hash.js":
      return e(hash_exports);
    case "bn.js":
      return e(bn_exports2);
    case "hmac-drbg":
      return e(hmac_drbg_exports);
    case "inherits":
      return e(inherits_exports);
    case "minimalistic-assert":
      return e(minimalistic_assert_exports);
    case "minimalistic-crypto-utils":
      return e(minimalistic_crypto_utils_exports);
    default:
      throw new Error('module "' + n5 + '" not found');
  }
};
var Sf = Object.create;
var me = Object.defineProperty;
var gf = Object.getOwnPropertyDescriptor;
var xf = Object.getOwnPropertyNames;
var Af = Object.getPrototypeOf;
var If = Object.prototype.hasOwnProperty;
var g5 = ((d9) => typeof require8 < "u" ? require8 : typeof Proxy < "u" ? new Proxy(d9, { get: (e, f7) => (typeof require8 < "u" ? require8 : e)[f7] }) : d9)(function(d9) {
  if (typeof require8 < "u")
    return require8.apply(this, arguments);
  throw Error('Dynamic require of "' + d9 + '" is not supported');
});
var M2 = (d9, e) => () => (e || d9((e = { exports: {} }).exports, e), e.exports);
var wf = (d9, e) => {
  for (var f7 in e)
    me(d9, f7, { get: e[f7], enumerable: true });
};
var ye = (d9, e, f7, r2) => {
  if (e && typeof e == "object" || typeof e == "function")
    for (let a11 of xf(e))
      !If.call(d9, a11) && a11 !== f7 && me(d9, a11, { get: () => e[a11], enumerable: !(r2 = gf(e, a11)) || r2.enumerable });
  return d9;
};
var k3 = (d9, e, f7) => (ye(d9, e, "default"), f7 && ye(f7, e, "default"));
var Ee2 = (d9, e, f7) => (f7 = d9 != null ? Sf(Af(d9)) : {}, ye(e || !d9 || !d9.__esModule ? me(f7, "default", { value: d9, enumerable: true }) : f7, d9));
var Be = M2((dd, Mf) => {
  Mf.exports = { name: "elliptic", version: "6.5.4", description: "EC cryptography", main: "lib/elliptic.js", files: ["lib"], scripts: { lint: "eslint lib test", "lint:fix": "npm run lint -- --fix", unit: "istanbul test _mocha --reporter=spec test/index.js", test: "npm run lint && npm run unit", version: "grunt dist && git add dist/" }, repository: { type: "git", url: "git@github.com:indutny/elliptic" }, keywords: ["EC", "Elliptic", "curve", "Cryptography"], author: "Fedor Indutny <fedor@indutny.com>", license: "MIT", bugs: { url: "https://github.com/indutny/elliptic/issues" }, homepage: "https://github.com/indutny/elliptic", devDependencies: { brfs: "^2.0.2", coveralls: "^3.1.0", eslint: "^7.6.0", grunt: "^1.2.1", "grunt-browserify": "^5.3.0", "grunt-cli": "^1.3.2", "grunt-contrib-connect": "^3.0.0", "grunt-contrib-copy": "^1.0.0", "grunt-contrib-uglify": "^5.0.0", "grunt-mocha-istanbul": "^5.0.2", "grunt-saucelabs": "^9.0.1", istanbul: "^0.4.5", mocha: "^8.0.1" }, dependencies: { "bn.js": "^4.11.9", brorand: "^1.1.0", "hash.js": "^1.0.0", "hmac-drbg": "^1.0.1", inherits: "^2.0.4", "minimalistic-assert": "^1.0.1", "minimalistic-crypto-utils": "^1.0.1" } };
});
var z2 = M2((Fe2) => {
  "use strict";
  var B9 = Fe2, qf = g5("bn.js"), _f = g5("minimalistic-assert"), re2 = g5("minimalistic-crypto-utils");
  B9.assert = _f;
  B9.toArray = re2.toArray;
  B9.zero2 = re2.zero2;
  B9.toHex = re2.toHex;
  B9.encode = re2.encode;
  function Pf(d9, e, f7) {
    var r2 = new Array(Math.max(d9.bitLength(), f7) + 1);
    r2.fill(0);
    for (var a11 = 1 << e + 1, c10 = d9.clone(), b8 = 0; b8 < r2.length; b8++) {
      var t, i6 = c10.andln(a11 - 1);
      c10.isOdd() ? (i6 > (a11 >> 1) - 1 ? t = (a11 >> 1) - i6 : t = i6, c10.isubn(t)) : t = 0, r2[b8] = t, c10.iushrn(1);
    }
    return r2;
  }
  B9.getNAF = Pf;
  function zf(d9, e) {
    var f7 = [[], []];
    d9 = d9.clone(), e = e.clone();
    for (var r2 = 0, a11 = 0, c10; d9.cmpn(-r2) > 0 || e.cmpn(-a11) > 0; ) {
      var b8 = d9.andln(3) + r2 & 3, t = e.andln(3) + a11 & 3;
      b8 === 3 && (b8 = -1), t === 3 && (t = -1);
      var i6;
      b8 & 1 ? (c10 = d9.andln(7) + r2 & 7, (c10 === 3 || c10 === 5) && t === 2 ? i6 = -b8 : i6 = b8) : i6 = 0, f7[0].push(i6);
      var s10;
      t & 1 ? (c10 = e.andln(7) + a11 & 7, (c10 === 3 || c10 === 5) && b8 === 2 ? s10 = -t : s10 = t) : s10 = 0, f7[1].push(s10), 2 * r2 === i6 + 1 && (r2 = 1 - r2), 2 * a11 === s10 + 1 && (a11 = 1 - a11), d9.iushrn(1), e.iushrn(1);
    }
    return f7;
  }
  B9.getJSF = zf;
  function Rf(d9, e, f7) {
    var r2 = "_" + e;
    d9.prototype[e] = function() {
      return this[r2] !== void 0 ? this[r2] : this[r2] = f7.call(this);
    };
  }
  B9.cachedProperty = Rf;
  function Nf(d9) {
    return typeof d9 == "string" ? B9.toArray(d9, "hex") : d9;
  }
  B9.parseBytes = Nf;
  function Ef(d9) {
    return new qf(d9, "hex", "le");
  }
  B9.intFromLE = Ef;
});
var fe = M2((ad, Oe2) => {
  "use strict";
  var X4 = g5("bn.js"), ee2 = z2(), ae = ee2.getNAF, Bf = ee2.getJSF, te2 = ee2.assert;
  function L7(d9, e) {
    this.type = d9, this.p = new X4(e.p, 16), this.red = e.prime ? X4.red(e.prime) : X4.mont(this.p), this.zero = new X4(0).toRed(this.red), this.one = new X4(1).toRed(this.red), this.two = new X4(2).toRed(this.red), this.n = e.n && new X4(e.n, 16), this.g = e.g && this.pointFromJSON(e.g, e.gRed), this._wnafT1 = new Array(4), this._wnafT2 = new Array(4), this._wnafT3 = new Array(4), this._wnafT4 = new Array(4), this._bitLength = this.n ? this.n.bitLength() : 0;
    var f7 = this.n && this.p.div(this.n);
    !f7 || f7.cmpn(100) > 0 ? this.redN = null : (this._maxwellTrick = true, this.redN = this.n.toRed(this.red));
  }
  Oe2.exports = L7;
  L7.prototype.point = function() {
    throw new Error("Not implemented");
  };
  L7.prototype.validate = function() {
    throw new Error("Not implemented");
  };
  L7.prototype._fixedNafMul = function(e, f7) {
    te2(e.precomputed);
    var r2 = e._getDoubles(), a11 = ae(f7, 1, this._bitLength), c10 = (1 << r2.step + 1) - (r2.step % 2 === 0 ? 2 : 1);
    c10 /= 3;
    var b8 = [], t, i6;
    for (t = 0; t < a11.length; t += r2.step) {
      i6 = 0;
      for (var s10 = t + r2.step - 1; s10 >= t; s10--)
        i6 = (i6 << 1) + a11[s10];
      b8.push(i6);
    }
    for (var n5 = this.jpoint(null, null, null), u13 = this.jpoint(null, null, null), o6 = c10; o6 > 0; o6--) {
      for (t = 0; t < b8.length; t++)
        i6 = b8[t], i6 === o6 ? u13 = u13.mixedAdd(r2.points[t]) : i6 === -o6 && (u13 = u13.mixedAdd(r2.points[t].neg()));
      n5 = n5.add(u13);
    }
    return n5.toP();
  };
  L7.prototype._wnafMul = function(e, f7) {
    var r2 = 4, a11 = e._getNAFPoints(r2);
    r2 = a11.wnd;
    for (var c10 = a11.points, b8 = ae(f7, r2, this._bitLength), t = this.jpoint(null, null, null), i6 = b8.length - 1; i6 >= 0; i6--) {
      for (var s10 = 0; i6 >= 0 && b8[i6] === 0; i6--)
        s10++;
      if (i6 >= 0 && s10++, t = t.dblp(s10), i6 < 0)
        break;
      var n5 = b8[i6];
      te2(n5 !== 0), e.type === "affine" ? n5 > 0 ? t = t.mixedAdd(c10[n5 - 1 >> 1]) : t = t.mixedAdd(c10[-n5 - 1 >> 1].neg()) : n5 > 0 ? t = t.add(c10[n5 - 1 >> 1]) : t = t.add(c10[-n5 - 1 >> 1].neg());
    }
    return e.type === "affine" ? t.toP() : t;
  };
  L7.prototype._wnafMulAdd = function(e, f7, r2, a11, c10) {
    var b8 = this._wnafT1, t = this._wnafT2, i6 = this._wnafT3, s10 = 0, n5, u13, o6;
    for (n5 = 0; n5 < a11; n5++) {
      o6 = f7[n5];
      var v14 = o6._getNAFPoints(e);
      b8[n5] = v14.wnd, t[n5] = v14.points;
    }
    for (n5 = a11 - 1; n5 >= 1; n5 -= 2) {
      var h14 = n5 - 1, l11 = n5;
      if (b8[h14] !== 1 || b8[l11] !== 1) {
        i6[h14] = ae(r2[h14], b8[h14], this._bitLength), i6[l11] = ae(r2[l11], b8[l11], this._bitLength), s10 = Math.max(i6[h14].length, s10), s10 = Math.max(i6[l11].length, s10);
        continue;
      }
      var S9 = [f7[h14], null, null, f7[l11]];
      f7[h14].y.cmp(f7[l11].y) === 0 ? (S9[1] = f7[h14].add(f7[l11]), S9[2] = f7[h14].toJ().mixedAdd(f7[l11].neg())) : f7[h14].y.cmp(f7[l11].y.redNeg()) === 0 ? (S9[1] = f7[h14].toJ().mixedAdd(f7[l11]), S9[2] = f7[h14].add(f7[l11].neg())) : (S9[1] = f7[h14].toJ().mixedAdd(f7[l11]), S9[2] = f7[h14].toJ().mixedAdd(f7[l11].neg()));
      var p12 = [-3, -1, -5, -7, 0, 7, 5, 1, 3], P9 = Bf(r2[h14], r2[l11]);
      for (s10 = Math.max(P9[0].length, s10), i6[h14] = new Array(s10), i6[l11] = new Array(s10), u13 = 0; u13 < s10; u13++) {
        var D9 = P9[0][u13] | 0, le3 = P9[1][u13] | 0;
        i6[h14][u13] = p12[(D9 + 1) * 3 + (le3 + 1)], i6[l11][u13] = 0, t[h14] = S9;
      }
    }
    var F8 = this.jpoint(null, null, null), $2 = this._wnafT4;
    for (n5 = s10; n5 >= 0; n5--) {
      for (var pe2 = 0; n5 >= 0; ) {
        var Ne3 = true;
        for (u13 = 0; u13 < a11; u13++)
          $2[u13] = i6[u13][n5] | 0, $2[u13] !== 0 && (Ne3 = false);
        if (!Ne3)
          break;
        pe2++, n5--;
      }
      if (n5 >= 0 && pe2++, F8 = F8.dblp(pe2), n5 < 0)
        break;
      for (u13 = 0; u13 < a11; u13++) {
        var Q3 = $2[u13];
        Q3 !== 0 && (Q3 > 0 ? o6 = t[u13][Q3 - 1 >> 1] : Q3 < 0 && (o6 = t[u13][-Q3 - 1 >> 1].neg()), o6.type === "affine" ? F8 = F8.mixedAdd(o6) : F8 = F8.add(o6));
      }
    }
    for (n5 = 0; n5 < a11; n5++)
      t[n5] = null;
    return c10 ? F8 : F8.toP();
  };
  function R7(d9, e) {
    this.curve = d9, this.type = e, this.precomputed = null;
  }
  L7.BasePoint = R7;
  R7.prototype.eq = function() {
    throw new Error("Not implemented");
  };
  R7.prototype.validate = function() {
    return this.curve.validate(this);
  };
  L7.prototype.decodePoint = function(e, f7) {
    e = ee2.toArray(e, f7);
    var r2 = this.p.byteLength();
    if ((e[0] === 4 || e[0] === 6 || e[0] === 7) && e.length - 1 === 2 * r2) {
      e[0] === 6 ? te2(e[e.length - 1] % 2 === 0) : e[0] === 7 && te2(e[e.length - 1] % 2 === 1);
      var a11 = this.point(e.slice(1, 1 + r2), e.slice(1 + r2, 1 + 2 * r2));
      return a11;
    } else if ((e[0] === 2 || e[0] === 3) && e.length - 1 === r2)
      return this.pointFromX(e.slice(1, 1 + r2), e[0] === 3);
    throw new Error("Unknown point format");
  };
  R7.prototype.encodeCompressed = function(e) {
    return this.encode(e, true);
  };
  R7.prototype._encode = function(e) {
    var f7 = this.curve.p.byteLength(), r2 = this.getX().toArray("be", f7);
    return e ? [this.getY().isEven() ? 2 : 3].concat(r2) : [4].concat(r2, this.getY().toArray("be", f7));
  };
  R7.prototype.encode = function(e, f7) {
    return ee2.encode(this._encode(f7), e);
  };
  R7.prototype.precompute = function(e) {
    if (this.precomputed)
      return this;
    var f7 = { doubles: null, naf: null, beta: null };
    return f7.naf = this._getNAFPoints(8), f7.doubles = this._getDoubles(4, e), f7.beta = this._getBeta(), this.precomputed = f7, this;
  };
  R7.prototype._hasDoubles = function(e) {
    if (!this.precomputed)
      return false;
    var f7 = this.precomputed.doubles;
    return f7 ? f7.points.length >= Math.ceil((e.bitLength() + 1) / f7.step) : false;
  };
  R7.prototype._getDoubles = function(e, f7) {
    if (this.precomputed && this.precomputed.doubles)
      return this.precomputed.doubles;
    for (var r2 = [this], a11 = this, c10 = 0; c10 < f7; c10 += e) {
      for (var b8 = 0; b8 < e; b8++)
        a11 = a11.dbl();
      r2.push(a11);
    }
    return { step: e, points: r2 };
  };
  R7.prototype._getNAFPoints = function(e) {
    if (this.precomputed && this.precomputed.naf)
      return this.precomputed.naf;
    for (var f7 = [this], r2 = (1 << e) - 1, a11 = r2 === 1 ? null : this.dbl(), c10 = 1; c10 < r2; c10++)
      f7[c10] = f7[c10 - 1].add(a11);
    return { wnd: e, points: f7 };
  };
  R7.prototype._getBeta = function() {
    return null;
  };
  R7.prototype.dblp = function(e) {
    for (var f7 = this, r2 = 0; r2 < e; r2++)
      f7 = f7.dbl();
    return f7;
  };
});
var Le = M2((td, je) => {
  "use strict";
  var Ff = z2(), m16 = g5("bn.js"), Se = g5("inherits"), H7 = fe(), Of = Ff.assert;
  function N5(d9) {
    H7.call(this, "short", d9), this.a = new m16(d9.a, 16).toRed(this.red), this.b = new m16(d9.b, 16).toRed(this.red), this.tinv = this.two.redInvm(), this.zeroA = this.a.fromRed().cmpn(0) === 0, this.threeA = this.a.fromRed().sub(this.p).cmpn(-3) === 0, this.endo = this._getEndomorphism(d9), this._endoWnafT1 = new Array(4), this._endoWnafT2 = new Array(4);
  }
  Se(N5, H7);
  je.exports = N5;
  N5.prototype._getEndomorphism = function(e) {
    if (!(!this.zeroA || !this.g || !this.n || this.p.modn(3) !== 1)) {
      var f7, r2;
      if (e.beta)
        f7 = new m16(e.beta, 16).toRed(this.red);
      else {
        var a11 = this._getEndoRoots(this.p);
        f7 = a11[0].cmp(a11[1]) < 0 ? a11[0] : a11[1], f7 = f7.toRed(this.red);
      }
      if (e.lambda)
        r2 = new m16(e.lambda, 16);
      else {
        var c10 = this._getEndoRoots(this.n);
        this.g.mul(c10[0]).x.cmp(this.g.x.redMul(f7)) === 0 ? r2 = c10[0] : (r2 = c10[1], Of(this.g.mul(r2).x.cmp(this.g.x.redMul(f7)) === 0));
      }
      var b8;
      return e.basis ? b8 = e.basis.map(function(t) {
        return { a: new m16(t.a, 16), b: new m16(t.b, 16) };
      }) : b8 = this._getEndoBasis(r2), { beta: f7, lambda: r2, basis: b8 };
    }
  };
  N5.prototype._getEndoRoots = function(e) {
    var f7 = e === this.p ? this.red : m16.mont(e), r2 = new m16(2).toRed(f7).redInvm(), a11 = r2.redNeg(), c10 = new m16(3).toRed(f7).redNeg().redSqrt().redMul(r2), b8 = a11.redAdd(c10).fromRed(), t = a11.redSub(c10).fromRed();
    return [b8, t];
  };
  N5.prototype._getEndoBasis = function(e) {
    for (var f7 = this.n.ushrn(Math.floor(this.n.bitLength() / 2)), r2 = e, a11 = this.n.clone(), c10 = new m16(1), b8 = new m16(0), t = new m16(0), i6 = new m16(1), s10, n5, u13, o6, v14, h14, l11, S9 = 0, p12, P9; r2.cmpn(0) !== 0; ) {
      var D9 = a11.div(r2);
      p12 = a11.sub(D9.mul(r2)), P9 = t.sub(D9.mul(c10));
      var le3 = i6.sub(D9.mul(b8));
      if (!u13 && p12.cmp(f7) < 0)
        s10 = l11.neg(), n5 = c10, u13 = p12.neg(), o6 = P9;
      else if (u13 && ++S9 === 2)
        break;
      l11 = p12, a11 = r2, r2 = p12, t = c10, c10 = P9, i6 = b8, b8 = le3;
    }
    v14 = p12.neg(), h14 = P9;
    var F8 = u13.sqr().add(o6.sqr()), $2 = v14.sqr().add(h14.sqr());
    return $2.cmp(F8) >= 0 && (v14 = s10, h14 = n5), u13.negative && (u13 = u13.neg(), o6 = o6.neg()), v14.negative && (v14 = v14.neg(), h14 = h14.neg()), [{ a: u13, b: o6 }, { a: v14, b: h14 }];
  };
  N5.prototype._endoSplit = function(e) {
    var f7 = this.endo.basis, r2 = f7[0], a11 = f7[1], c10 = a11.b.mul(e).divRound(this.n), b8 = r2.b.neg().mul(e).divRound(this.n), t = c10.mul(r2.a), i6 = b8.mul(a11.a), s10 = c10.mul(r2.b), n5 = b8.mul(a11.b), u13 = e.sub(t).sub(i6), o6 = s10.add(n5).neg();
    return { k1: u13, k2: o6 };
  };
  N5.prototype.pointFromX = function(e, f7) {
    e = new m16(e, 16), e.red || (e = e.toRed(this.red));
    var r2 = e.redSqr().redMul(e).redIAdd(e.redMul(this.a)).redIAdd(this.b), a11 = r2.redSqrt();
    if (a11.redSqr().redSub(r2).cmp(this.zero) !== 0)
      throw new Error("invalid point");
    var c10 = a11.fromRed().isOdd();
    return (f7 && !c10 || !f7 && c10) && (a11 = a11.redNeg()), this.point(e, a11);
  };
  N5.prototype.validate = function(e) {
    if (e.inf)
      return true;
    var f7 = e.x, r2 = e.y, a11 = this.a.redMul(f7), c10 = f7.redSqr().redMul(f7).redIAdd(a11).redIAdd(this.b);
    return r2.redSqr().redISub(c10).cmpn(0) === 0;
  };
  N5.prototype._endoWnafMulAdd = function(e, f7, r2) {
    for (var a11 = this._endoWnafT1, c10 = this._endoWnafT2, b8 = 0; b8 < e.length; b8++) {
      var t = this._endoSplit(f7[b8]), i6 = e[b8], s10 = i6._getBeta();
      t.k1.negative && (t.k1.ineg(), i6 = i6.neg(true)), t.k2.negative && (t.k2.ineg(), s10 = s10.neg(true)), a11[b8 * 2] = i6, a11[b8 * 2 + 1] = s10, c10[b8 * 2] = t.k1, c10[b8 * 2 + 1] = t.k2;
    }
    for (var n5 = this._wnafMulAdd(1, a11, c10, b8 * 2, r2), u13 = 0; u13 < b8 * 2; u13++)
      a11[u13] = null, c10[u13] = null;
    return n5;
  };
  function x13(d9, e, f7, r2) {
    H7.BasePoint.call(this, d9, "affine"), e === null && f7 === null ? (this.x = null, this.y = null, this.inf = true) : (this.x = new m16(e, 16), this.y = new m16(f7, 16), r2 && (this.x.forceRed(this.curve.red), this.y.forceRed(this.curve.red)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.inf = false);
  }
  Se(x13, H7.BasePoint);
  N5.prototype.point = function(e, f7, r2) {
    return new x13(this, e, f7, r2);
  };
  N5.prototype.pointFromJSON = function(e, f7) {
    return x13.fromJSON(this, e, f7);
  };
  x13.prototype._getBeta = function() {
    if (this.curve.endo) {
      var e = this.precomputed;
      if (e && e.beta)
        return e.beta;
      var f7 = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
      if (e) {
        var r2 = this.curve, a11 = function(c10) {
          return r2.point(c10.x.redMul(r2.endo.beta), c10.y);
        };
        e.beta = f7, f7.precomputed = { beta: null, naf: e.naf && { wnd: e.naf.wnd, points: e.naf.points.map(a11) }, doubles: e.doubles && { step: e.doubles.step, points: e.doubles.points.map(a11) } };
      }
      return f7;
    }
  };
  x13.prototype.toJSON = function() {
    return this.precomputed ? [this.x, this.y, this.precomputed && { doubles: this.precomputed.doubles && { step: this.precomputed.doubles.step, points: this.precomputed.doubles.points.slice(1) }, naf: this.precomputed.naf && { wnd: this.precomputed.naf.wnd, points: this.precomputed.naf.points.slice(1) } }] : [this.x, this.y];
  };
  x13.fromJSON = function(e, f7, r2) {
    typeof f7 == "string" && (f7 = JSON.parse(f7));
    var a11 = e.point(f7[0], f7[1], r2);
    if (!f7[2])
      return a11;
    function c10(t) {
      return e.point(t[0], t[1], r2);
    }
    var b8 = f7[2];
    return a11.precomputed = { beta: null, doubles: b8.doubles && { step: b8.doubles.step, points: [a11].concat(b8.doubles.points.map(c10)) }, naf: b8.naf && { wnd: b8.naf.wnd, points: [a11].concat(b8.naf.points.map(c10)) } }, a11;
  };
  x13.prototype.inspect = function() {
    return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + ">";
  };
  x13.prototype.isInfinity = function() {
    return this.inf;
  };
  x13.prototype.add = function(e) {
    if (this.inf)
      return e;
    if (e.inf)
      return this;
    if (this.eq(e))
      return this.dbl();
    if (this.neg().eq(e))
      return this.curve.point(null, null);
    if (this.x.cmp(e.x) === 0)
      return this.curve.point(null, null);
    var f7 = this.y.redSub(e.y);
    f7.cmpn(0) !== 0 && (f7 = f7.redMul(this.x.redSub(e.x).redInvm()));
    var r2 = f7.redSqr().redISub(this.x).redISub(e.x), a11 = f7.redMul(this.x.redSub(r2)).redISub(this.y);
    return this.curve.point(r2, a11);
  };
  x13.prototype.dbl = function() {
    if (this.inf)
      return this;
    var e = this.y.redAdd(this.y);
    if (e.cmpn(0) === 0)
      return this.curve.point(null, null);
    var f7 = this.curve.a, r2 = this.x.redSqr(), a11 = e.redInvm(), c10 = r2.redAdd(r2).redIAdd(r2).redIAdd(f7).redMul(a11), b8 = c10.redSqr().redISub(this.x.redAdd(this.x)), t = c10.redMul(this.x.redSub(b8)).redISub(this.y);
    return this.curve.point(b8, t);
  };
  x13.prototype.getX = function() {
    return this.x.fromRed();
  };
  x13.prototype.getY = function() {
    return this.y.fromRed();
  };
  x13.prototype.mul = function(e) {
    return e = new m16(e, 16), this.isInfinity() ? this : this._hasDoubles(e) ? this.curve._fixedNafMul(this, e) : this.curve.endo ? this.curve._endoWnafMulAdd([this], [e]) : this.curve._wnafMul(this, e);
  };
  x13.prototype.mulAdd = function(e, f7, r2) {
    var a11 = [this, f7], c10 = [e, r2];
    return this.curve.endo ? this.curve._endoWnafMulAdd(a11, c10) : this.curve._wnafMulAdd(1, a11, c10, 2);
  };
  x13.prototype.jmulAdd = function(e, f7, r2) {
    var a11 = [this, f7], c10 = [e, r2];
    return this.curve.endo ? this.curve._endoWnafMulAdd(a11, c10, true) : this.curve._wnafMulAdd(1, a11, c10, 2, true);
  };
  x13.prototype.eq = function(e) {
    return this === e || this.inf === e.inf && (this.inf || this.x.cmp(e.x) === 0 && this.y.cmp(e.y) === 0);
  };
  x13.prototype.neg = function(e) {
    if (this.inf)
      return this;
    var f7 = this.curve.point(this.x, this.y.redNeg());
    if (e && this.precomputed) {
      var r2 = this.precomputed, a11 = function(c10) {
        return c10.neg();
      };
      f7.precomputed = { naf: r2.naf && { wnd: r2.naf.wnd, points: r2.naf.points.map(a11) }, doubles: r2.doubles && { step: r2.doubles.step, points: r2.doubles.points.map(a11) } };
    }
    return f7;
  };
  x13.prototype.toJ = function() {
    if (this.inf)
      return this.curve.jpoint(null, null, null);
    var e = this.curve.jpoint(this.x, this.y, this.curve.one);
    return e;
  };
  function w13(d9, e, f7, r2) {
    H7.BasePoint.call(this, d9, "jacobian"), e === null && f7 === null && r2 === null ? (this.x = this.curve.one, this.y = this.curve.one, this.z = new m16(0)) : (this.x = new m16(e, 16), this.y = new m16(f7, 16), this.z = new m16(r2, 16)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.zOne = this.z === this.curve.one;
  }
  Se(w13, H7.BasePoint);
  N5.prototype.jpoint = function(e, f7, r2) {
    return new w13(this, e, f7, r2);
  };
  w13.prototype.toP = function() {
    if (this.isInfinity())
      return this.curve.point(null, null);
    var e = this.z.redInvm(), f7 = e.redSqr(), r2 = this.x.redMul(f7), a11 = this.y.redMul(f7).redMul(e);
    return this.curve.point(r2, a11);
  };
  w13.prototype.neg = function() {
    return this.curve.jpoint(this.x, this.y.redNeg(), this.z);
  };
  w13.prototype.add = function(e) {
    if (this.isInfinity())
      return e;
    if (e.isInfinity())
      return this;
    var f7 = e.z.redSqr(), r2 = this.z.redSqr(), a11 = this.x.redMul(f7), c10 = e.x.redMul(r2), b8 = this.y.redMul(f7.redMul(e.z)), t = e.y.redMul(r2.redMul(this.z)), i6 = a11.redSub(c10), s10 = b8.redSub(t);
    if (i6.cmpn(0) === 0)
      return s10.cmpn(0) !== 0 ? this.curve.jpoint(null, null, null) : this.dbl();
    var n5 = i6.redSqr(), u13 = n5.redMul(i6), o6 = a11.redMul(n5), v14 = s10.redSqr().redIAdd(u13).redISub(o6).redISub(o6), h14 = s10.redMul(o6.redISub(v14)).redISub(b8.redMul(u13)), l11 = this.z.redMul(e.z).redMul(i6);
    return this.curve.jpoint(v14, h14, l11);
  };
  w13.prototype.mixedAdd = function(e) {
    if (this.isInfinity())
      return e.toJ();
    if (e.isInfinity())
      return this;
    var f7 = this.z.redSqr(), r2 = this.x, a11 = e.x.redMul(f7), c10 = this.y, b8 = e.y.redMul(f7).redMul(this.z), t = r2.redSub(a11), i6 = c10.redSub(b8);
    if (t.cmpn(0) === 0)
      return i6.cmpn(0) !== 0 ? this.curve.jpoint(null, null, null) : this.dbl();
    var s10 = t.redSqr(), n5 = s10.redMul(t), u13 = r2.redMul(s10), o6 = i6.redSqr().redIAdd(n5).redISub(u13).redISub(u13), v14 = i6.redMul(u13.redISub(o6)).redISub(c10.redMul(n5)), h14 = this.z.redMul(t);
    return this.curve.jpoint(o6, v14, h14);
  };
  w13.prototype.dblp = function(e) {
    if (e === 0)
      return this;
    if (this.isInfinity())
      return this;
    if (!e)
      return this.dbl();
    var f7;
    if (this.curve.zeroA || this.curve.threeA) {
      var r2 = this;
      for (f7 = 0; f7 < e; f7++)
        r2 = r2.dbl();
      return r2;
    }
    var a11 = this.curve.a, c10 = this.curve.tinv, b8 = this.x, t = this.y, i6 = this.z, s10 = i6.redSqr().redSqr(), n5 = t.redAdd(t);
    for (f7 = 0; f7 < e; f7++) {
      var u13 = b8.redSqr(), o6 = n5.redSqr(), v14 = o6.redSqr(), h14 = u13.redAdd(u13).redIAdd(u13).redIAdd(a11.redMul(s10)), l11 = b8.redMul(o6), S9 = h14.redSqr().redISub(l11.redAdd(l11)), p12 = l11.redISub(S9), P9 = h14.redMul(p12);
      P9 = P9.redIAdd(P9).redISub(v14);
      var D9 = n5.redMul(i6);
      f7 + 1 < e && (s10 = s10.redMul(v14)), b8 = S9, i6 = D9, n5 = P9;
    }
    return this.curve.jpoint(b8, n5.redMul(c10), i6);
  };
  w13.prototype.dbl = function() {
    return this.isInfinity() ? this : this.curve.zeroA ? this._zeroDbl() : this.curve.threeA ? this._threeDbl() : this._dbl();
  };
  w13.prototype._zeroDbl = function() {
    var e, f7, r2;
    if (this.zOne) {
      var a11 = this.x.redSqr(), c10 = this.y.redSqr(), b8 = c10.redSqr(), t = this.x.redAdd(c10).redSqr().redISub(a11).redISub(b8);
      t = t.redIAdd(t);
      var i6 = a11.redAdd(a11).redIAdd(a11), s10 = i6.redSqr().redISub(t).redISub(t), n5 = b8.redIAdd(b8);
      n5 = n5.redIAdd(n5), n5 = n5.redIAdd(n5), e = s10, f7 = i6.redMul(t.redISub(s10)).redISub(n5), r2 = this.y.redAdd(this.y);
    } else {
      var u13 = this.x.redSqr(), o6 = this.y.redSqr(), v14 = o6.redSqr(), h14 = this.x.redAdd(o6).redSqr().redISub(u13).redISub(v14);
      h14 = h14.redIAdd(h14);
      var l11 = u13.redAdd(u13).redIAdd(u13), S9 = l11.redSqr(), p12 = v14.redIAdd(v14);
      p12 = p12.redIAdd(p12), p12 = p12.redIAdd(p12), e = S9.redISub(h14).redISub(h14), f7 = l11.redMul(h14.redISub(e)).redISub(p12), r2 = this.y.redMul(this.z), r2 = r2.redIAdd(r2);
    }
    return this.curve.jpoint(e, f7, r2);
  };
  w13.prototype._threeDbl = function() {
    var e, f7, r2;
    if (this.zOne) {
      var a11 = this.x.redSqr(), c10 = this.y.redSqr(), b8 = c10.redSqr(), t = this.x.redAdd(c10).redSqr().redISub(a11).redISub(b8);
      t = t.redIAdd(t);
      var i6 = a11.redAdd(a11).redIAdd(a11).redIAdd(this.curve.a), s10 = i6.redSqr().redISub(t).redISub(t);
      e = s10;
      var n5 = b8.redIAdd(b8);
      n5 = n5.redIAdd(n5), n5 = n5.redIAdd(n5), f7 = i6.redMul(t.redISub(s10)).redISub(n5), r2 = this.y.redAdd(this.y);
    } else {
      var u13 = this.z.redSqr(), o6 = this.y.redSqr(), v14 = this.x.redMul(o6), h14 = this.x.redSub(u13).redMul(this.x.redAdd(u13));
      h14 = h14.redAdd(h14).redIAdd(h14);
      var l11 = v14.redIAdd(v14);
      l11 = l11.redIAdd(l11);
      var S9 = l11.redAdd(l11);
      e = h14.redSqr().redISub(S9), r2 = this.y.redAdd(this.z).redSqr().redISub(o6).redISub(u13);
      var p12 = o6.redSqr();
      p12 = p12.redIAdd(p12), p12 = p12.redIAdd(p12), p12 = p12.redIAdd(p12), f7 = h14.redMul(l11.redISub(e)).redISub(p12);
    }
    return this.curve.jpoint(e, f7, r2);
  };
  w13.prototype._dbl = function() {
    var e = this.curve.a, f7 = this.x, r2 = this.y, a11 = this.z, c10 = a11.redSqr().redSqr(), b8 = f7.redSqr(), t = r2.redSqr(), i6 = b8.redAdd(b8).redIAdd(b8).redIAdd(e.redMul(c10)), s10 = f7.redAdd(f7);
    s10 = s10.redIAdd(s10);
    var n5 = s10.redMul(t), u13 = i6.redSqr().redISub(n5.redAdd(n5)), o6 = n5.redISub(u13), v14 = t.redSqr();
    v14 = v14.redIAdd(v14), v14 = v14.redIAdd(v14), v14 = v14.redIAdd(v14);
    var h14 = i6.redMul(o6).redISub(v14), l11 = r2.redAdd(r2).redMul(a11);
    return this.curve.jpoint(u13, h14, l11);
  };
  w13.prototype.trpl = function() {
    if (!this.curve.zeroA)
      return this.dbl().add(this);
    var e = this.x.redSqr(), f7 = this.y.redSqr(), r2 = this.z.redSqr(), a11 = f7.redSqr(), c10 = e.redAdd(e).redIAdd(e), b8 = c10.redSqr(), t = this.x.redAdd(f7).redSqr().redISub(e).redISub(a11);
    t = t.redIAdd(t), t = t.redAdd(t).redIAdd(t), t = t.redISub(b8);
    var i6 = t.redSqr(), s10 = a11.redIAdd(a11);
    s10 = s10.redIAdd(s10), s10 = s10.redIAdd(s10), s10 = s10.redIAdd(s10);
    var n5 = c10.redIAdd(t).redSqr().redISub(b8).redISub(i6).redISub(s10), u13 = f7.redMul(n5);
    u13 = u13.redIAdd(u13), u13 = u13.redIAdd(u13);
    var o6 = this.x.redMul(i6).redISub(u13);
    o6 = o6.redIAdd(o6), o6 = o6.redIAdd(o6);
    var v14 = this.y.redMul(n5.redMul(s10.redISub(n5)).redISub(t.redMul(i6)));
    v14 = v14.redIAdd(v14), v14 = v14.redIAdd(v14), v14 = v14.redIAdd(v14);
    var h14 = this.z.redAdd(t).redSqr().redISub(r2).redISub(i6);
    return this.curve.jpoint(o6, v14, h14);
  };
  w13.prototype.mul = function(e, f7) {
    return e = new m16(e, f7), this.curve._wnafMul(this, e);
  };
  w13.prototype.eq = function(e) {
    if (e.type === "affine")
      return this.eq(e.toJ());
    if (this === e)
      return true;
    var f7 = this.z.redSqr(), r2 = e.z.redSqr();
    if (this.x.redMul(r2).redISub(e.x.redMul(f7)).cmpn(0) !== 0)
      return false;
    var a11 = f7.redMul(this.z), c10 = r2.redMul(e.z);
    return this.y.redMul(c10).redISub(e.y.redMul(a11)).cmpn(0) === 0;
  };
  w13.prototype.eqXToP = function(e) {
    var f7 = this.z.redSqr(), r2 = e.toRed(this.curve.red).redMul(f7);
    if (this.x.cmp(r2) === 0)
      return true;
    for (var a11 = e.clone(), c10 = this.curve.redN.redMul(f7); ; ) {
      if (a11.iadd(this.curve.n), a11.cmp(this.curve.p) >= 0)
        return false;
      if (r2.redIAdd(c10), this.x.cmp(r2) === 0)
        return true;
    }
  };
  w13.prototype.inspect = function() {
    return this.isInfinity() ? "<EC JPoint Infinity>" : "<EC JPoint x: " + this.x.toString(16, 2) + " y: " + this.y.toString(16, 2) + " z: " + this.z.toString(16, 2) + ">";
  };
  w13.prototype.isInfinity = function() {
    return this.z.cmpn(0) === 0;
  };
});
var De2 = M2((cd, Je) => {
  "use strict";
  var U5 = g5("bn.js"), Ce3 = g5("inherits"), ce2 = fe(), jf = z2();
  function G5(d9) {
    ce2.call(this, "mont", d9), this.a = new U5(d9.a, 16).toRed(this.red), this.b = new U5(d9.b, 16).toRed(this.red), this.i4 = new U5(4).toRed(this.red).redInvm(), this.two = new U5(2).toRed(this.red), this.a24 = this.i4.redMul(this.a.redAdd(this.two));
  }
  Ce3(G5, ce2);
  Je.exports = G5;
  G5.prototype.validate = function(e) {
    var f7 = e.normalize().x, r2 = f7.redSqr(), a11 = r2.redMul(f7).redAdd(r2.redMul(this.a)).redAdd(f7), c10 = a11.redSqrt();
    return c10.redSqr().cmp(a11) === 0;
  };
  function A11(d9, e, f7) {
    ce2.BasePoint.call(this, d9, "projective"), e === null && f7 === null ? (this.x = this.curve.one, this.z = this.curve.zero) : (this.x = new U5(e, 16), this.z = new U5(f7, 16), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)));
  }
  Ce3(A11, ce2.BasePoint);
  G5.prototype.decodePoint = function(e, f7) {
    return this.point(jf.toArray(e, f7), 1);
  };
  G5.prototype.point = function(e, f7) {
    return new A11(this, e, f7);
  };
  G5.prototype.pointFromJSON = function(e) {
    return A11.fromJSON(this, e);
  };
  A11.prototype.precompute = function() {
  };
  A11.prototype._encode = function() {
    return this.getX().toArray("be", this.curve.p.byteLength());
  };
  A11.fromJSON = function(e, f7) {
    return new A11(e, f7[0], f7[1] || e.one);
  };
  A11.prototype.inspect = function() {
    return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">";
  };
  A11.prototype.isInfinity = function() {
    return this.z.cmpn(0) === 0;
  };
  A11.prototype.dbl = function() {
    var e = this.x.redAdd(this.z), f7 = e.redSqr(), r2 = this.x.redSub(this.z), a11 = r2.redSqr(), c10 = f7.redSub(a11), b8 = f7.redMul(a11), t = c10.redMul(a11.redAdd(this.curve.a24.redMul(c10)));
    return this.curve.point(b8, t);
  };
  A11.prototype.add = function() {
    throw new Error("Not supported on Montgomery curve");
  };
  A11.prototype.diffAdd = function(e, f7) {
    var r2 = this.x.redAdd(this.z), a11 = this.x.redSub(this.z), c10 = e.x.redAdd(e.z), b8 = e.x.redSub(e.z), t = b8.redMul(r2), i6 = c10.redMul(a11), s10 = f7.z.redMul(t.redAdd(i6).redSqr()), n5 = f7.x.redMul(t.redISub(i6).redSqr());
    return this.curve.point(s10, n5);
  };
  A11.prototype.mul = function(e) {
    for (var f7 = e.clone(), r2 = this, a11 = this.curve.point(null, null), c10 = this, b8 = []; f7.cmpn(0) !== 0; f7.iushrn(1))
      b8.push(f7.andln(1));
    for (var t = b8.length - 1; t >= 0; t--)
      b8[t] === 0 ? (r2 = r2.diffAdd(a11, c10), a11 = a11.dbl()) : (a11 = r2.diffAdd(a11, c10), r2 = r2.dbl());
    return a11;
  };
  A11.prototype.mulAdd = function() {
    throw new Error("Not supported on Montgomery curve");
  };
  A11.prototype.jumlAdd = function() {
    throw new Error("Not supported on Montgomery curve");
  };
  A11.prototype.eq = function(e) {
    return this.getX().cmp(e.getX()) === 0;
  };
  A11.prototype.normalize = function() {
    return this.x = this.x.redMul(this.z.redInvm()), this.z = this.curve.one, this;
  };
  A11.prototype.getX = function() {
    return this.normalize(), this.x.fromRed();
  };
});
var Ye = M2((bd, Te2) => {
  "use strict";
  var Lf = z2(), j7 = g5("bn.js"), Xe = g5("inherits"), be = fe(), Cf = Lf.assert;
  function O9(d9) {
    this.twisted = (d9.a | 0) !== 1, this.mOneA = this.twisted && (d9.a | 0) === -1, this.extended = this.mOneA, be.call(this, "edwards", d9), this.a = new j7(d9.a, 16).umod(this.red.m), this.a = this.a.toRed(this.red), this.c = new j7(d9.c, 16).toRed(this.red), this.c2 = this.c.redSqr(), this.d = new j7(d9.d, 16).toRed(this.red), this.dd = this.d.redAdd(this.d), Cf(!this.twisted || this.c.fromRed().cmpn(1) === 0), this.oneC = (d9.c | 0) === 1;
  }
  Xe(O9, be);
  Te2.exports = O9;
  O9.prototype._mulA = function(e) {
    return this.mOneA ? e.redNeg() : this.a.redMul(e);
  };
  O9.prototype._mulC = function(e) {
    return this.oneC ? e : this.c.redMul(e);
  };
  O9.prototype.jpoint = function(e, f7, r2, a11) {
    return this.point(e, f7, r2, a11);
  };
  O9.prototype.pointFromX = function(e, f7) {
    e = new j7(e, 16), e.red || (e = e.toRed(this.red));
    var r2 = e.redSqr(), a11 = this.c2.redSub(this.a.redMul(r2)), c10 = this.one.redSub(this.c2.redMul(this.d).redMul(r2)), b8 = a11.redMul(c10.redInvm()), t = b8.redSqrt();
    if (t.redSqr().redSub(b8).cmp(this.zero) !== 0)
      throw new Error("invalid point");
    var i6 = t.fromRed().isOdd();
    return (f7 && !i6 || !f7 && i6) && (t = t.redNeg()), this.point(e, t);
  };
  O9.prototype.pointFromY = function(e, f7) {
    e = new j7(e, 16), e.red || (e = e.toRed(this.red));
    var r2 = e.redSqr(), a11 = r2.redSub(this.c2), c10 = r2.redMul(this.d).redMul(this.c2).redSub(this.a), b8 = a11.redMul(c10.redInvm());
    if (b8.cmp(this.zero) === 0) {
      if (f7)
        throw new Error("invalid point");
      return this.point(this.zero, e);
    }
    var t = b8.redSqrt();
    if (t.redSqr().redSub(b8).cmp(this.zero) !== 0)
      throw new Error("invalid point");
    return t.fromRed().isOdd() !== f7 && (t = t.redNeg()), this.point(t, e);
  };
  O9.prototype.validate = function(e) {
    if (e.isInfinity())
      return true;
    e.normalize();
    var f7 = e.x.redSqr(), r2 = e.y.redSqr(), a11 = f7.redMul(this.a).redAdd(r2), c10 = this.c2.redMul(this.one.redAdd(this.d.redMul(f7).redMul(r2)));
    return a11.cmp(c10) === 0;
  };
  function y10(d9, e, f7, r2, a11) {
    be.BasePoint.call(this, d9, "projective"), e === null && f7 === null && r2 === null ? (this.x = this.curve.zero, this.y = this.curve.one, this.z = this.curve.one, this.t = this.curve.zero, this.zOne = true) : (this.x = new j7(e, 16), this.y = new j7(f7, 16), this.z = r2 ? new j7(r2, 16) : this.curve.one, this.t = a11 && new j7(a11, 16), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.t && !this.t.red && (this.t = this.t.toRed(this.curve.red)), this.zOne = this.z === this.curve.one, this.curve.extended && !this.t && (this.t = this.x.redMul(this.y), this.zOne || (this.t = this.t.redMul(this.z.redInvm()))));
  }
  Xe(y10, be.BasePoint);
  O9.prototype.pointFromJSON = function(e) {
    return y10.fromJSON(this, e);
  };
  O9.prototype.point = function(e, f7, r2, a11) {
    return new y10(this, e, f7, r2, a11);
  };
  y10.fromJSON = function(e, f7) {
    return new y10(e, f7[0], f7[1], f7[2]);
  };
  y10.prototype.inspect = function() {
    return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">";
  };
  y10.prototype.isInfinity = function() {
    return this.x.cmpn(0) === 0 && (this.y.cmp(this.z) === 0 || this.zOne && this.y.cmp(this.curve.c) === 0);
  };
  y10.prototype._extDbl = function() {
    var e = this.x.redSqr(), f7 = this.y.redSqr(), r2 = this.z.redSqr();
    r2 = r2.redIAdd(r2);
    var a11 = this.curve._mulA(e), c10 = this.x.redAdd(this.y).redSqr().redISub(e).redISub(f7), b8 = a11.redAdd(f7), t = b8.redSub(r2), i6 = a11.redSub(f7), s10 = c10.redMul(t), n5 = b8.redMul(i6), u13 = c10.redMul(i6), o6 = t.redMul(b8);
    return this.curve.point(s10, n5, o6, u13);
  };
  y10.prototype._projDbl = function() {
    var e = this.x.redAdd(this.y).redSqr(), f7 = this.x.redSqr(), r2 = this.y.redSqr(), a11, c10, b8, t, i6, s10;
    if (this.curve.twisted) {
      t = this.curve._mulA(f7);
      var n5 = t.redAdd(r2);
      this.zOne ? (a11 = e.redSub(f7).redSub(r2).redMul(n5.redSub(this.curve.two)), c10 = n5.redMul(t.redSub(r2)), b8 = n5.redSqr().redSub(n5).redSub(n5)) : (i6 = this.z.redSqr(), s10 = n5.redSub(i6).redISub(i6), a11 = e.redSub(f7).redISub(r2).redMul(s10), c10 = n5.redMul(t.redSub(r2)), b8 = n5.redMul(s10));
    } else
      t = f7.redAdd(r2), i6 = this.curve._mulC(this.z).redSqr(), s10 = t.redSub(i6).redSub(i6), a11 = this.curve._mulC(e.redISub(t)).redMul(s10), c10 = this.curve._mulC(t).redMul(f7.redISub(r2)), b8 = t.redMul(s10);
    return this.curve.point(a11, c10, b8);
  };
  y10.prototype.dbl = function() {
    return this.isInfinity() ? this : this.curve.extended ? this._extDbl() : this._projDbl();
  };
  y10.prototype._extAdd = function(e) {
    var f7 = this.y.redSub(this.x).redMul(e.y.redSub(e.x)), r2 = this.y.redAdd(this.x).redMul(e.y.redAdd(e.x)), a11 = this.t.redMul(this.curve.dd).redMul(e.t), c10 = this.z.redMul(e.z.redAdd(e.z)), b8 = r2.redSub(f7), t = c10.redSub(a11), i6 = c10.redAdd(a11), s10 = r2.redAdd(f7), n5 = b8.redMul(t), u13 = i6.redMul(s10), o6 = b8.redMul(s10), v14 = t.redMul(i6);
    return this.curve.point(n5, u13, v14, o6);
  };
  y10.prototype._projAdd = function(e) {
    var f7 = this.z.redMul(e.z), r2 = f7.redSqr(), a11 = this.x.redMul(e.x), c10 = this.y.redMul(e.y), b8 = this.curve.d.redMul(a11).redMul(c10), t = r2.redSub(b8), i6 = r2.redAdd(b8), s10 = this.x.redAdd(this.y).redMul(e.x.redAdd(e.y)).redISub(a11).redISub(c10), n5 = f7.redMul(t).redMul(s10), u13, o6;
    return this.curve.twisted ? (u13 = f7.redMul(i6).redMul(c10.redSub(this.curve._mulA(a11))), o6 = t.redMul(i6)) : (u13 = f7.redMul(i6).redMul(c10.redSub(a11)), o6 = this.curve._mulC(t).redMul(i6)), this.curve.point(n5, u13, o6);
  };
  y10.prototype.add = function(e) {
    return this.isInfinity() ? e : e.isInfinity() ? this : this.curve.extended ? this._extAdd(e) : this._projAdd(e);
  };
  y10.prototype.mul = function(e) {
    return this._hasDoubles(e) ? this.curve._fixedNafMul(this, e) : this.curve._wnafMul(this, e);
  };
  y10.prototype.mulAdd = function(e, f7, r2) {
    return this.curve._wnafMulAdd(1, [this, f7], [e, r2], 2, false);
  };
  y10.prototype.jmulAdd = function(e, f7, r2) {
    return this.curve._wnafMulAdd(1, [this, f7], [e, r2], 2, true);
  };
  y10.prototype.normalize = function() {
    if (this.zOne)
      return this;
    var e = this.z.redInvm();
    return this.x = this.x.redMul(e), this.y = this.y.redMul(e), this.t && (this.t = this.t.redMul(e)), this.z = this.curve.one, this.zOne = true, this;
  };
  y10.prototype.neg = function() {
    return this.curve.point(this.x.redNeg(), this.y, this.z, this.t && this.t.redNeg());
  };
  y10.prototype.getX = function() {
    return this.normalize(), this.x.fromRed();
  };
  y10.prototype.getY = function() {
    return this.normalize(), this.y.fromRed();
  };
  y10.prototype.eq = function(e) {
    return this === e || this.getX().cmp(e.getX()) === 0 && this.getY().cmp(e.getY()) === 0;
  };
  y10.prototype.eqXToP = function(e) {
    var f7 = e.toRed(this.curve.red).redMul(this.z);
    if (this.x.cmp(f7) === 0)
      return true;
    for (var r2 = e.clone(), a11 = this.curve.redN.redMul(this.z); ; ) {
      if (r2.iadd(this.curve.n), r2.cmp(this.curve.p) >= 0)
        return false;
      if (f7.redIAdd(a11), this.x.cmp(f7) === 0)
        return true;
    }
  };
  y10.prototype.toP = y10.prototype.normalize;
  y10.prototype.mixedAdd = y10.prototype.add;
});
var ge = M2((Ke2) => {
  "use strict";
  var ie2 = Ke2;
  ie2.base = fe();
  ie2.short = Le();
  ie2.mont = De2();
  ie2.edwards = Ye();
});
var ke = M2((nd, We) => {
  We.exports = { doubles: { step: 4, points: [["e60fce93b59e9ec53011aabc21c23e97b2a31369b87a5ae9c44ee89e2a6dec0a", "f7e3507399e595929db99f34f57937101296891e44d23f0be1f32cce69616821"], ["8282263212c609d9ea2a6e3e172de238d8c39cabd5ac1ca10646e23fd5f51508", "11f8a8098557dfe45e8256e830b60ace62d613ac2f7b17bed31b6eaff6e26caf"], ["175e159f728b865a72f99cc6c6fc846de0b93833fd2222ed73fce5b551e5b739", "d3506e0d9e3c79eba4ef97a51ff71f5eacb5955add24345c6efa6ffee9fed695"], ["363d90d447b00c9c99ceac05b6262ee053441c7e55552ffe526bad8f83ff4640", "4e273adfc732221953b445397f3363145b9a89008199ecb62003c7f3bee9de9"], ["8b4b5f165df3c2be8c6244b5b745638843e4a781a15bcd1b69f79a55dffdf80c", "4aad0a6f68d308b4b3fbd7813ab0da04f9e336546162ee56b3eff0c65fd4fd36"], ["723cbaa6e5db996d6bf771c00bd548c7b700dbffa6c0e77bcb6115925232fcda", "96e867b5595cc498a921137488824d6e2660a0653779494801dc069d9eb39f5f"], ["eebfa4d493bebf98ba5feec812c2d3b50947961237a919839a533eca0e7dd7fa", "5d9a8ca3970ef0f269ee7edaf178089d9ae4cdc3a711f712ddfd4fdae1de8999"], ["100f44da696e71672791d0a09b7bde459f1215a29b3c03bfefd7835b39a48db0", "cdd9e13192a00b772ec8f3300c090666b7ff4a18ff5195ac0fbd5cd62bc65a09"], ["e1031be262c7ed1b1dc9227a4a04c017a77f8d4464f3b3852c8acde6e534fd2d", "9d7061928940405e6bb6a4176597535af292dd419e1ced79a44f18f29456a00d"], ["feea6cae46d55b530ac2839f143bd7ec5cf8b266a41d6af52d5e688d9094696d", "e57c6b6c97dce1bab06e4e12bf3ecd5c981c8957cc41442d3155debf18090088"], ["da67a91d91049cdcb367be4be6ffca3cfeed657d808583de33fa978bc1ec6cb1", "9bacaa35481642bc41f463f7ec9780e5dec7adc508f740a17e9ea8e27a68be1d"], ["53904faa0b334cdda6e000935ef22151ec08d0f7bb11069f57545ccc1a37b7c0", "5bc087d0bc80106d88c9eccac20d3c1c13999981e14434699dcb096b022771c8"], ["8e7bcd0bd35983a7719cca7764ca906779b53a043a9b8bcaeff959f43ad86047", "10b7770b2a3da4b3940310420ca9514579e88e2e47fd68b3ea10047e8460372a"], ["385eed34c1cdff21e6d0818689b81bde71a7f4f18397e6690a841e1599c43862", "283bebc3e8ea23f56701de19e9ebf4576b304eec2086dc8cc0458fe5542e5453"], ["6f9d9b803ecf191637c73a4413dfa180fddf84a5947fbc9c606ed86c3fac3a7", "7c80c68e603059ba69b8e2a30e45c4d47ea4dd2f5c281002d86890603a842160"], ["3322d401243c4e2582a2147c104d6ecbf774d163db0f5e5313b7e0e742d0e6bd", "56e70797e9664ef5bfb019bc4ddaf9b72805f63ea2873af624f3a2e96c28b2a0"], ["85672c7d2de0b7da2bd1770d89665868741b3f9af7643397721d74d28134ab83", "7c481b9b5b43b2eb6374049bfa62c2e5e77f17fcc5298f44c8e3094f790313a6"], ["948bf809b1988a46b06c9f1919413b10f9226c60f668832ffd959af60c82a0a", "53a562856dcb6646dc6b74c5d1c3418c6d4dff08c97cd2bed4cb7f88d8c8e589"], ["6260ce7f461801c34f067ce0f02873a8f1b0e44dfc69752accecd819f38fd8e8", "bc2da82b6fa5b571a7f09049776a1ef7ecd292238051c198c1a84e95b2b4ae17"], ["e5037de0afc1d8d43d8348414bbf4103043ec8f575bfdc432953cc8d2037fa2d", "4571534baa94d3b5f9f98d09fb990bddbd5f5b03ec481f10e0e5dc841d755bda"], ["e06372b0f4a207adf5ea905e8f1771b4e7e8dbd1c6a6c5b725866a0ae4fce725", "7a908974bce18cfe12a27bb2ad5a488cd7484a7787104870b27034f94eee31dd"], ["213c7a715cd5d45358d0bbf9dc0ce02204b10bdde2a3f58540ad6908d0559754", "4b6dad0b5ae462507013ad06245ba190bb4850f5f36a7eeddff2c27534b458f2"], ["4e7c272a7af4b34e8dbb9352a5419a87e2838c70adc62cddf0cc3a3b08fbd53c", "17749c766c9d0b18e16fd09f6def681b530b9614bff7dd33e0b3941817dcaae6"], ["fea74e3dbe778b1b10f238ad61686aa5c76e3db2be43057632427e2840fb27b6", "6e0568db9b0b13297cf674deccb6af93126b596b973f7b77701d3db7f23cb96f"], ["76e64113f677cf0e10a2570d599968d31544e179b760432952c02a4417bdde39", "c90ddf8dee4e95cf577066d70681f0d35e2a33d2b56d2032b4b1752d1901ac01"], ["c738c56b03b2abe1e8281baa743f8f9a8f7cc643df26cbee3ab150242bcbb891", "893fb578951ad2537f718f2eacbfbbbb82314eef7880cfe917e735d9699a84c3"], ["d895626548b65b81e264c7637c972877d1d72e5f3a925014372e9f6588f6c14b", "febfaa38f2bc7eae728ec60818c340eb03428d632bb067e179363ed75d7d991f"], ["b8da94032a957518eb0f6433571e8761ceffc73693e84edd49150a564f676e03", "2804dfa44805a1e4d7c99cc9762808b092cc584d95ff3b511488e4e74efdf6e7"], ["e80fea14441fb33a7d8adab9475d7fab2019effb5156a792f1a11778e3c0df5d", "eed1de7f638e00771e89768ca3ca94472d155e80af322ea9fcb4291b6ac9ec78"], ["a301697bdfcd704313ba48e51d567543f2a182031efd6915ddc07bbcc4e16070", "7370f91cfb67e4f5081809fa25d40f9b1735dbf7c0a11a130c0d1a041e177ea1"], ["90ad85b389d6b936463f9d0512678de208cc330b11307fffab7ac63e3fb04ed4", "e507a3620a38261affdcbd9427222b839aefabe1582894d991d4d48cb6ef150"], ["8f68b9d2f63b5f339239c1ad981f162ee88c5678723ea3351b7b444c9ec4c0da", "662a9f2dba063986de1d90c2b6be215dbbea2cfe95510bfdf23cbf79501fff82"], ["e4f3fb0176af85d65ff99ff9198c36091f48e86503681e3e6686fd5053231e11", "1e63633ad0ef4f1c1661a6d0ea02b7286cc7e74ec951d1c9822c38576feb73bc"], ["8c00fa9b18ebf331eb961537a45a4266c7034f2f0d4e1d0716fb6eae20eae29e", "efa47267fea521a1a9dc343a3736c974c2fadafa81e36c54e7d2a4c66702414b"], ["e7a26ce69dd4829f3e10cec0a9e98ed3143d084f308b92c0997fddfc60cb3e41", "2a758e300fa7984b471b006a1aafbb18d0a6b2c0420e83e20e8a9421cf2cfd51"], ["b6459e0ee3662ec8d23540c223bcbdc571cbcb967d79424f3cf29eb3de6b80ef", "67c876d06f3e06de1dadf16e5661db3c4b3ae6d48e35b2ff30bf0b61a71ba45"], ["d68a80c8280bb840793234aa118f06231d6f1fc67e73c5a5deda0f5b496943e8", "db8ba9fff4b586d00c4b1f9177b0e28b5b0e7b8f7845295a294c84266b133120"], ["324aed7df65c804252dc0270907a30b09612aeb973449cea4095980fc28d3d5d", "648a365774b61f2ff130c0c35aec1f4f19213b0c7e332843967224af96ab7c84"], ["4df9c14919cde61f6d51dfdbe5fee5dceec4143ba8d1ca888e8bd373fd054c96", "35ec51092d8728050974c23a1d85d4b5d506cdc288490192ebac06cad10d5d"], ["9c3919a84a474870faed8a9c1cc66021523489054d7f0308cbfc99c8ac1f98cd", "ddb84f0f4a4ddd57584f044bf260e641905326f76c64c8e6be7e5e03d4fc599d"], ["6057170b1dd12fdf8de05f281d8e06bb91e1493a8b91d4cc5a21382120a959e5", "9a1af0b26a6a4807add9a2daf71df262465152bc3ee24c65e899be932385a2a8"], ["a576df8e23a08411421439a4518da31880cef0fba7d4df12b1a6973eecb94266", "40a6bf20e76640b2c92b97afe58cd82c432e10a7f514d9f3ee8be11ae1b28ec8"], ["7778a78c28dec3e30a05fe9629de8c38bb30d1f5cf9a3a208f763889be58ad71", "34626d9ab5a5b22ff7098e12f2ff580087b38411ff24ac563b513fc1fd9f43ac"], ["928955ee637a84463729fd30e7afd2ed5f96274e5ad7e5cb09eda9c06d903ac", "c25621003d3f42a827b78a13093a95eeac3d26efa8a8d83fc5180e935bcd091f"], ["85d0fef3ec6db109399064f3a0e3b2855645b4a907ad354527aae75163d82751", "1f03648413a38c0be29d496e582cf5663e8751e96877331582c237a24eb1f962"], ["ff2b0dce97eece97c1c9b6041798b85dfdfb6d8882da20308f5404824526087e", "493d13fef524ba188af4c4dc54d07936c7b7ed6fb90e2ceb2c951e01f0c29907"], ["827fbbe4b1e880ea9ed2b2e6301b212b57f1ee148cd6dd28780e5e2cf856e241", "c60f9c923c727b0b71bef2c67d1d12687ff7a63186903166d605b68baec293ec"], ["eaa649f21f51bdbae7be4ae34ce6e5217a58fdce7f47f9aa7f3b58fa2120e2b3", "be3279ed5bbbb03ac69a80f89879aa5a01a6b965f13f7e59d47a5305ba5ad93d"], ["e4a42d43c5cf169d9391df6decf42ee541b6d8f0c9a137401e23632dda34d24f", "4d9f92e716d1c73526fc99ccfb8ad34ce886eedfa8d8e4f13a7f7131deba9414"], ["1ec80fef360cbdd954160fadab352b6b92b53576a88fea4947173b9d4300bf19", "aeefe93756b5340d2f3a4958a7abbf5e0146e77f6295a07b671cdc1cc107cefd"], ["146a778c04670c2f91b00af4680dfa8bce3490717d58ba889ddb5928366642be", "b318e0ec3354028add669827f9d4b2870aaa971d2f7e5ed1d0b297483d83efd0"], ["fa50c0f61d22e5f07e3acebb1aa07b128d0012209a28b9776d76a8793180eef9", "6b84c6922397eba9b72cd2872281a68a5e683293a57a213b38cd8d7d3f4f2811"], ["da1d61d0ca721a11b1a5bf6b7d88e8421a288ab5d5bba5220e53d32b5f067ec2", "8157f55a7c99306c79c0766161c91e2966a73899d279b48a655fba0f1ad836f1"], ["a8e282ff0c9706907215ff98e8fd416615311de0446f1e062a73b0610d064e13", "7f97355b8db81c09abfb7f3c5b2515888b679a3e50dd6bd6cef7c73111f4cc0c"], ["174a53b9c9a285872d39e56e6913cab15d59b1fa512508c022f382de8319497c", "ccc9dc37abfc9c1657b4155f2c47f9e6646b3a1d8cb9854383da13ac079afa73"], ["959396981943785c3d3e57edf5018cdbe039e730e4918b3d884fdff09475b7ba", "2e7e552888c331dd8ba0386a4b9cd6849c653f64c8709385e9b8abf87524f2fd"], ["d2a63a50ae401e56d645a1153b109a8fcca0a43d561fba2dbb51340c9d82b151", "e82d86fb6443fcb7565aee58b2948220a70f750af484ca52d4142174dcf89405"], ["64587e2335471eb890ee7896d7cfdc866bacbdbd3839317b3436f9b45617e073", "d99fcdd5bf6902e2ae96dd6447c299a185b90a39133aeab358299e5e9faf6589"], ["8481bde0e4e4d885b3a546d3e549de042f0aa6cea250e7fd358d6c86dd45e458", "38ee7b8cba5404dd84a25bf39cecb2ca900a79c42b262e556d64b1b59779057e"], ["13464a57a78102aa62b6979ae817f4637ffcfed3c4b1ce30bcd6303f6caf666b", "69be159004614580ef7e433453ccb0ca48f300a81d0942e13f495a907f6ecc27"], ["bc4a9df5b713fe2e9aef430bcc1dc97a0cd9ccede2f28588cada3a0d2d83f366", "d3a81ca6e785c06383937adf4b798caa6e8a9fbfa547b16d758d666581f33c1"], ["8c28a97bf8298bc0d23d8c749452a32e694b65e30a9472a3954ab30fe5324caa", "40a30463a3305193378fedf31f7cc0eb7ae784f0451cb9459e71dc73cbef9482"], ["8ea9666139527a8c1dd94ce4f071fd23c8b350c5a4bb33748c4ba111faccae0", "620efabbc8ee2782e24e7c0cfb95c5d735b783be9cf0f8e955af34a30e62b945"], ["dd3625faef5ba06074669716bbd3788d89bdde815959968092f76cc4eb9a9787", "7a188fa3520e30d461da2501045731ca941461982883395937f68d00c644a573"], ["f710d79d9eb962297e4f6232b40e8f7feb2bc63814614d692c12de752408221e", "ea98e67232d3b3295d3b535532115ccac8612c721851617526ae47a9c77bfc82"]] }, naf: { wnd: 7, points: [["f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9", "388f7b0f632de8140fe337e62a37f3566500a99934c2231b6cb9fd7584b8e672"], ["2f8bde4d1a07209355b4a7250a5c5128e88b84bddc619ab7cba8d569b240efe4", "d8ac222636e5e3d6d4dba9dda6c9c426f788271bab0d6840dca87d3aa6ac62d6"], ["5cbdf0646e5db4eaa398f365f2ea7a0e3d419b7e0330e39ce92bddedcac4f9bc", "6aebca40ba255960a3178d6d861a54dba813d0b813fde7b5a5082628087264da"], ["acd484e2f0c7f65309ad178a9f559abde09796974c57e714c35f110dfc27ccbe", "cc338921b0a7d9fd64380971763b61e9add888a4375f8e0f05cc262ac64f9c37"], ["774ae7f858a9411e5ef4246b70c65aac5649980be5c17891bbec17895da008cb", "d984a032eb6b5e190243dd56d7b7b365372db1e2dff9d6a8301d74c9c953c61b"], ["f28773c2d975288bc7d1d205c3748651b075fbc6610e58cddeeddf8f19405aa8", "ab0902e8d880a89758212eb65cdaf473a1a06da521fa91f29b5cb52db03ed81"], ["d7924d4f7d43ea965a465ae3095ff41131e5946f3c85f79e44adbcf8e27e080e", "581e2872a86c72a683842ec228cc6defea40af2bd896d3a5c504dc9ff6a26b58"], ["defdea4cdb677750a420fee807eacf21eb9898ae79b9768766e4faa04a2d4a34", "4211ab0694635168e997b0ead2a93daeced1f4a04a95c0f6cfb199f69e56eb77"], ["2b4ea0a797a443d293ef5cff444f4979f06acfebd7e86d277475656138385b6c", "85e89bc037945d93b343083b5a1c86131a01f60c50269763b570c854e5c09b7a"], ["352bbf4a4cdd12564f93fa332ce333301d9ad40271f8107181340aef25be59d5", "321eb4075348f534d59c18259dda3e1f4a1b3b2e71b1039c67bd3d8bcf81998c"], ["2fa2104d6b38d11b0230010559879124e42ab8dfeff5ff29dc9cdadd4ecacc3f", "2de1068295dd865b64569335bd5dd80181d70ecfc882648423ba76b532b7d67"], ["9248279b09b4d68dab21a9b066edda83263c3d84e09572e269ca0cd7f5453714", "73016f7bf234aade5d1aa71bdea2b1ff3fc0de2a887912ffe54a32ce97cb3402"], ["daed4f2be3a8bf278e70132fb0beb7522f570e144bf615c07e996d443dee8729", "a69dce4a7d6c98e8d4a1aca87ef8d7003f83c230f3afa726ab40e52290be1c55"], ["c44d12c7065d812e8acf28d7cbb19f9011ecd9e9fdf281b0e6a3b5e87d22e7db", "2119a460ce326cdc76c45926c982fdac0e106e861edf61c5a039063f0e0e6482"], ["6a245bf6dc698504c89a20cfded60853152b695336c28063b61c65cbd269e6b4", "e022cf42c2bd4a708b3f5126f16a24ad8b33ba48d0423b6efd5e6348100d8a82"], ["1697ffa6fd9de627c077e3d2fe541084ce13300b0bec1146f95ae57f0d0bd6a5", "b9c398f186806f5d27561506e4557433a2cf15009e498ae7adee9d63d01b2396"], ["605bdb019981718b986d0f07e834cb0d9deb8360ffb7f61df982345ef27a7479", "2972d2de4f8d20681a78d93ec96fe23c26bfae84fb14db43b01e1e9056b8c49"], ["62d14dab4150bf497402fdc45a215e10dcb01c354959b10cfe31c7e9d87ff33d", "80fc06bd8cc5b01098088a1950eed0db01aa132967ab472235f5642483b25eaf"], ["80c60ad0040f27dade5b4b06c408e56b2c50e9f56b9b8b425e555c2f86308b6f", "1c38303f1cc5c30f26e66bad7fe72f70a65eed4cbe7024eb1aa01f56430bd57a"], ["7a9375ad6167ad54aa74c6348cc54d344cc5dc9487d847049d5eabb0fa03c8fb", "d0e3fa9eca8726909559e0d79269046bdc59ea10c70ce2b02d499ec224dc7f7"], ["d528ecd9b696b54c907a9ed045447a79bb408ec39b68df504bb51f459bc3ffc9", "eecf41253136e5f99966f21881fd656ebc4345405c520dbc063465b521409933"], ["49370a4b5f43412ea25f514e8ecdad05266115e4a7ecb1387231808f8b45963", "758f3f41afd6ed428b3081b0512fd62a54c3f3afbb5b6764b653052a12949c9a"], ["77f230936ee88cbbd73df930d64702ef881d811e0e1498e2f1c13eb1fc345d74", "958ef42a7886b6400a08266e9ba1b37896c95330d97077cbbe8eb3c7671c60d6"], ["f2dac991cc4ce4b9ea44887e5c7c0bce58c80074ab9d4dbaeb28531b7739f530", "e0dedc9b3b2f8dad4da1f32dec2531df9eb5fbeb0598e4fd1a117dba703a3c37"], ["463b3d9f662621fb1b4be8fbbe2520125a216cdfc9dae3debcba4850c690d45b", "5ed430d78c296c3543114306dd8622d7c622e27c970a1de31cb377b01af7307e"], ["f16f804244e46e2a09232d4aff3b59976b98fac14328a2d1a32496b49998f247", "cedabd9b82203f7e13d206fcdf4e33d92a6c53c26e5cce26d6579962c4e31df6"], ["caf754272dc84563b0352b7a14311af55d245315ace27c65369e15f7151d41d1", "cb474660ef35f5f2a41b643fa5e460575f4fa9b7962232a5c32f908318a04476"], ["2600ca4b282cb986f85d0f1709979d8b44a09c07cb86d7c124497bc86f082120", "4119b88753c15bd6a693b03fcddbb45d5ac6be74ab5f0ef44b0be9475a7e4b40"], ["7635ca72d7e8432c338ec53cd12220bc01c48685e24f7dc8c602a7746998e435", "91b649609489d613d1d5e590f78e6d74ecfc061d57048bad9e76f302c5b9c61"], ["754e3239f325570cdbbf4a87deee8a66b7f2b33479d468fbc1a50743bf56cc18", "673fb86e5bda30fb3cd0ed304ea49a023ee33d0197a695d0c5d98093c536683"], ["e3e6bd1071a1e96aff57859c82d570f0330800661d1c952f9fe2694691d9b9e8", "59c9e0bba394e76f40c0aa58379a3cb6a5a2283993e90c4167002af4920e37f5"], ["186b483d056a033826ae73d88f732985c4ccb1f32ba35f4b4cc47fdcf04aa6eb", "3b952d32c67cf77e2e17446e204180ab21fb8090895138b4a4a797f86e80888b"], ["df9d70a6b9876ce544c98561f4be4f725442e6d2b737d9c91a8321724ce0963f", "55eb2dafd84d6ccd5f862b785dc39d4ab157222720ef9da217b8c45cf2ba2417"], ["5edd5cc23c51e87a497ca815d5dce0f8ab52554f849ed8995de64c5f34ce7143", "efae9c8dbc14130661e8cec030c89ad0c13c66c0d17a2905cdc706ab7399a868"], ["290798c2b6476830da12fe02287e9e777aa3fba1c355b17a722d362f84614fba", "e38da76dcd440621988d00bcf79af25d5b29c094db2a23146d003afd41943e7a"], ["af3c423a95d9f5b3054754efa150ac39cd29552fe360257362dfdecef4053b45", "f98a3fd831eb2b749a93b0e6f35cfb40c8cd5aa667a15581bc2feded498fd9c6"], ["766dbb24d134e745cccaa28c99bf274906bb66b26dcf98df8d2fed50d884249a", "744b1152eacbe5e38dcc887980da38b897584a65fa06cedd2c924f97cbac5996"], ["59dbf46f8c94759ba21277c33784f41645f7b44f6c596a58ce92e666191abe3e", "c534ad44175fbc300f4ea6ce648309a042ce739a7919798cd85e216c4a307f6e"], ["f13ada95103c4537305e691e74e9a4a8dd647e711a95e73cb62dc6018cfd87b8", "e13817b44ee14de663bf4bc808341f326949e21a6a75c2570778419bdaf5733d"], ["7754b4fa0e8aced06d4167a2c59cca4cda1869c06ebadfb6488550015a88522c", "30e93e864e669d82224b967c3020b8fa8d1e4e350b6cbcc537a48b57841163a2"], ["948dcadf5990e048aa3874d46abef9d701858f95de8041d2a6828c99e2262519", "e491a42537f6e597d5d28a3224b1bc25df9154efbd2ef1d2cbba2cae5347d57e"], ["7962414450c76c1689c7b48f8202ec37fb224cf5ac0bfa1570328a8a3d7c77ab", "100b610ec4ffb4760d5c1fc133ef6f6b12507a051f04ac5760afa5b29db83437"], ["3514087834964b54b15b160644d915485a16977225b8847bb0dd085137ec47ca", "ef0afbb2056205448e1652c48e8127fc6039e77c15c2378b7e7d15a0de293311"], ["d3cc30ad6b483e4bc79ce2c9dd8bc54993e947eb8df787b442943d3f7b527eaf", "8b378a22d827278d89c5e9be8f9508ae3c2ad46290358630afb34db04eede0a4"], ["1624d84780732860ce1c78fcbfefe08b2b29823db913f6493975ba0ff4847610", "68651cf9b6da903e0914448c6cd9d4ca896878f5282be4c8cc06e2a404078575"], ["733ce80da955a8a26902c95633e62a985192474b5af207da6df7b4fd5fc61cd4", "f5435a2bd2badf7d485a4d8b8db9fcce3e1ef8e0201e4578c54673bc1dc5ea1d"], ["15d9441254945064cf1a1c33bbd3b49f8966c5092171e699ef258dfab81c045c", "d56eb30b69463e7234f5137b73b84177434800bacebfc685fc37bbe9efe4070d"], ["a1d0fcf2ec9de675b612136e5ce70d271c21417c9d2b8aaaac138599d0717940", "edd77f50bcb5a3cab2e90737309667f2641462a54070f3d519212d39c197a629"], ["e22fbe15c0af8ccc5780c0735f84dbe9a790badee8245c06c7ca37331cb36980", "a855babad5cd60c88b430a69f53a1a7a38289154964799be43d06d77d31da06"], ["311091dd9860e8e20ee13473c1155f5f69635e394704eaa74009452246cfa9b3", "66db656f87d1f04fffd1f04788c06830871ec5a64feee685bd80f0b1286d8374"], ["34c1fd04d301be89b31c0442d3e6ac24883928b45a9340781867d4232ec2dbdf", "9414685e97b1b5954bd46f730174136d57f1ceeb487443dc5321857ba73abee"], ["f219ea5d6b54701c1c14de5b557eb42a8d13f3abbcd08affcc2a5e6b049b8d63", "4cb95957e83d40b0f73af4544cccf6b1f4b08d3c07b27fb8d8c2962a400766d1"], ["d7b8740f74a8fbaab1f683db8f45de26543a5490bca627087236912469a0b448", "fa77968128d9c92ee1010f337ad4717eff15db5ed3c049b3411e0315eaa4593b"], ["32d31c222f8f6f0ef86f7c98d3a3335ead5bcd32abdd94289fe4d3091aa824bf", "5f3032f5892156e39ccd3d7915b9e1da2e6dac9e6f26e961118d14b8462e1661"], ["7461f371914ab32671045a155d9831ea8793d77cd59592c4340f86cbc18347b5", "8ec0ba238b96bec0cbdddcae0aa442542eee1ff50c986ea6b39847b3cc092ff6"], ["ee079adb1df1860074356a25aa38206a6d716b2c3e67453d287698bad7b2b2d6", "8dc2412aafe3be5c4c5f37e0ecc5f9f6a446989af04c4e25ebaac479ec1c8c1e"], ["16ec93e447ec83f0467b18302ee620f7e65de331874c9dc72bfd8616ba9da6b5", "5e4631150e62fb40d0e8c2a7ca5804a39d58186a50e497139626778e25b0674d"], ["eaa5f980c245f6f038978290afa70b6bd8855897f98b6aa485b96065d537bd99", "f65f5d3e292c2e0819a528391c994624d784869d7e6ea67fb18041024edc07dc"], ["78c9407544ac132692ee1910a02439958ae04877151342ea96c4b6b35a49f51", "f3e0319169eb9b85d5404795539a5e68fa1fbd583c064d2462b675f194a3ddb4"], ["494f4be219a1a77016dcd838431aea0001cdc8ae7a6fc688726578d9702857a5", "42242a969283a5f339ba7f075e36ba2af925ce30d767ed6e55f4b031880d562c"], ["a598a8030da6d86c6bc7f2f5144ea549d28211ea58faa70ebf4c1e665c1fe9b5", "204b5d6f84822c307e4b4a7140737aec23fc63b65b35f86a10026dbd2d864e6b"], ["c41916365abb2b5d09192f5f2dbeafec208f020f12570a184dbadc3e58595997", "4f14351d0087efa49d245b328984989d5caf9450f34bfc0ed16e96b58fa9913"], ["841d6063a586fa475a724604da03bc5b92a2e0d2e0a36acfe4c73a5514742881", "73867f59c0659e81904f9a1c7543698e62562d6744c169ce7a36de01a8d6154"], ["5e95bb399a6971d376026947f89bde2f282b33810928be4ded112ac4d70e20d5", "39f23f366809085beebfc71181313775a99c9aed7d8ba38b161384c746012865"], ["36e4641a53948fd476c39f8a99fd974e5ec07564b5315d8bf99471bca0ef2f66", "d2424b1b1abe4eb8164227b085c9aa9456ea13493fd563e06fd51cf5694c78fc"], ["336581ea7bfbbb290c191a2f507a41cf5643842170e914faeab27c2c579f726", "ead12168595fe1be99252129b6e56b3391f7ab1410cd1e0ef3dcdcabd2fda224"], ["8ab89816dadfd6b6a1f2634fcf00ec8403781025ed6890c4849742706bd43ede", "6fdcef09f2f6d0a044e654aef624136f503d459c3e89845858a47a9129cdd24e"], ["1e33f1a746c9c5778133344d9299fcaa20b0938e8acff2544bb40284b8c5fb94", "60660257dd11b3aa9c8ed618d24edff2306d320f1d03010e33a7d2057f3b3b6"], ["85b7c1dcb3cec1b7ee7f30ded79dd20a0ed1f4cc18cbcfcfa410361fd8f08f31", "3d98a9cdd026dd43f39048f25a8847f4fcafad1895d7a633c6fed3c35e999511"], ["29df9fbd8d9e46509275f4b125d6d45d7fbe9a3b878a7af872a2800661ac5f51", "b4c4fe99c775a606e2d8862179139ffda61dc861c019e55cd2876eb2a27d84b"], ["a0b1cae06b0a847a3fea6e671aaf8adfdfe58ca2f768105c8082b2e449fce252", "ae434102edde0958ec4b19d917a6a28e6b72da1834aff0e650f049503a296cf2"], ["4e8ceafb9b3e9a136dc7ff67e840295b499dfb3b2133e4ba113f2e4c0e121e5", "cf2174118c8b6d7a4b48f6d534ce5c79422c086a63460502b827ce62a326683c"], ["d24a44e047e19b6f5afb81c7ca2f69080a5076689a010919f42725c2b789a33b", "6fb8d5591b466f8fc63db50f1c0f1c69013f996887b8244d2cdec417afea8fa3"], ["ea01606a7a6c9cdd249fdfcfacb99584001edd28abbab77b5104e98e8e3b35d4", "322af4908c7312b0cfbfe369f7a7b3cdb7d4494bc2823700cfd652188a3ea98d"], ["af8addbf2b661c8a6c6328655eb96651252007d8c5ea31be4ad196de8ce2131f", "6749e67c029b85f52a034eafd096836b2520818680e26ac8f3dfbcdb71749700"], ["e3ae1974566ca06cc516d47e0fb165a674a3dabcfca15e722f0e3450f45889", "2aeabe7e4531510116217f07bf4d07300de97e4874f81f533420a72eeb0bd6a4"], ["591ee355313d99721cf6993ffed1e3e301993ff3ed258802075ea8ced397e246", "b0ea558a113c30bea60fc4775460c7901ff0b053d25ca2bdeee98f1a4be5d196"], ["11396d55fda54c49f19aa97318d8da61fa8584e47b084945077cf03255b52984", "998c74a8cd45ac01289d5833a7beb4744ff536b01b257be4c5767bea93ea57a4"], ["3c5d2a1ba39c5a1790000738c9e0c40b8dcdfd5468754b6405540157e017aa7a", "b2284279995a34e2f9d4de7396fc18b80f9b8b9fdd270f6661f79ca4c81bd257"], ["cc8704b8a60a0defa3a99a7299f2e9c3fbc395afb04ac078425ef8a1793cc030", "bdd46039feed17881d1e0862db347f8cf395b74fc4bcdc4e940b74e3ac1f1b13"], ["c533e4f7ea8555aacd9777ac5cad29b97dd4defccc53ee7ea204119b2889b197", "6f0a256bc5efdf429a2fb6242f1a43a2d9b925bb4a4b3a26bb8e0f45eb596096"], ["c14f8f2ccb27d6f109f6d08d03cc96a69ba8c34eec07bbcf566d48e33da6593", "c359d6923bb398f7fd4473e16fe1c28475b740dd098075e6c0e8649113dc3a38"], ["a6cbc3046bc6a450bac24789fa17115a4c9739ed75f8f21ce441f72e0b90e6ef", "21ae7f4680e889bb130619e2c0f95a360ceb573c70603139862afd617fa9b9f"], ["347d6d9a02c48927ebfb86c1359b1caf130a3c0267d11ce6344b39f99d43cc38", "60ea7f61a353524d1c987f6ecec92f086d565ab687870cb12689ff1e31c74448"], ["da6545d2181db8d983f7dcb375ef5866d47c67b1bf31c8cf855ef7437b72656a", "49b96715ab6878a79e78f07ce5680c5d6673051b4935bd897fea824b77dc208a"], ["c40747cc9d012cb1a13b8148309c6de7ec25d6945d657146b9d5994b8feb1111", "5ca560753be2a12fc6de6caf2cb489565db936156b9514e1bb5e83037e0fa2d4"], ["4e42c8ec82c99798ccf3a610be870e78338c7f713348bd34c8203ef4037f3502", "7571d74ee5e0fb92a7a8b33a07783341a5492144cc54bcc40a94473693606437"], ["3775ab7089bc6af823aba2e1af70b236d251cadb0c86743287522a1b3b0dedea", "be52d107bcfa09d8bcb9736a828cfa7fac8db17bf7a76a2c42ad961409018cf7"], ["cee31cbf7e34ec379d94fb814d3d775ad954595d1314ba8846959e3e82f74e26", "8fd64a14c06b589c26b947ae2bcf6bfa0149ef0be14ed4d80f448a01c43b1c6d"], ["b4f9eaea09b6917619f6ea6a4eb5464efddb58fd45b1ebefcdc1a01d08b47986", "39e5c9925b5a54b07433a4f18c61726f8bb131c012ca542eb24a8ac07200682a"], ["d4263dfc3d2df923a0179a48966d30ce84e2515afc3dccc1b77907792ebcc60e", "62dfaf07a0f78feb30e30d6295853ce189e127760ad6cf7fae164e122a208d54"], ["48457524820fa65a4f8d35eb6930857c0032acc0a4a2de422233eeda897612c4", "25a748ab367979d98733c38a1fa1c2e7dc6cc07db2d60a9ae7a76aaa49bd0f77"], ["dfeeef1881101f2cb11644f3a2afdfc2045e19919152923f367a1767c11cceda", "ecfb7056cf1de042f9420bab396793c0c390bde74b4bbdff16a83ae09a9a7517"], ["6d7ef6b17543f8373c573f44e1f389835d89bcbc6062ced36c82df83b8fae859", "cd450ec335438986dfefa10c57fea9bcc521a0959b2d80bbf74b190dca712d10"], ["e75605d59102a5a2684500d3b991f2e3f3c88b93225547035af25af66e04541f", "f5c54754a8f71ee540b9b48728473e314f729ac5308b06938360990e2bfad125"], ["eb98660f4c4dfaa06a2be453d5020bc99a0c2e60abe388457dd43fefb1ed620c", "6cb9a8876d9cb8520609af3add26cd20a0a7cd8a9411131ce85f44100099223e"], ["13e87b027d8514d35939f2e6892b19922154596941888336dc3563e3b8dba942", "fef5a3c68059a6dec5d624114bf1e91aac2b9da568d6abeb2570d55646b8adf1"], ["ee163026e9fd6fe017c38f06a5be6fc125424b371ce2708e7bf4491691e5764a", "1acb250f255dd61c43d94ccc670d0f58f49ae3fa15b96623e5430da0ad6c62b2"], ["b268f5ef9ad51e4d78de3a750c2dc89b1e626d43505867999932e5db33af3d80", "5f310d4b3c99b9ebb19f77d41c1dee018cf0d34fd4191614003e945a1216e423"], ["ff07f3118a9df035e9fad85eb6c7bfe42b02f01ca99ceea3bf7ffdba93c4750d", "438136d603e858a3a5c440c38eccbaddc1d2942114e2eddd4740d098ced1f0d8"], ["8d8b9855c7c052a34146fd20ffb658bea4b9f69e0d825ebec16e8c3ce2b526a1", "cdb559eedc2d79f926baf44fb84ea4d44bcf50fee51d7ceb30e2e7f463036758"], ["52db0b5384dfbf05bfa9d472d7ae26dfe4b851ceca91b1eba54263180da32b63", "c3b997d050ee5d423ebaf66a6db9f57b3180c902875679de924b69d84a7b375"], ["e62f9490d3d51da6395efd24e80919cc7d0f29c3f3fa48c6fff543becbd43352", "6d89ad7ba4876b0b22c2ca280c682862f342c8591f1daf5170e07bfd9ccafa7d"], ["7f30ea2476b399b4957509c88f77d0191afa2ff5cb7b14fd6d8e7d65aaab1193", "ca5ef7d4b231c94c3b15389a5f6311e9daff7bb67b103e9880ef4bff637acaec"], ["5098ff1e1d9f14fb46a210fada6c903fef0fb7b4a1dd1d9ac60a0361800b7a00", "9731141d81fc8f8084d37c6e7542006b3ee1b40d60dfe5362a5b132fd17ddc0"], ["32b78c7de9ee512a72895be6b9cbefa6e2f3c4ccce445c96b9f2c81e2778ad58", "ee1849f513df71e32efc3896ee28260c73bb80547ae2275ba497237794c8753c"], ["e2cb74fddc8e9fbcd076eef2a7c72b0ce37d50f08269dfc074b581550547a4f7", "d3aa2ed71c9dd2247a62df062736eb0baddea9e36122d2be8641abcb005cc4a4"], ["8438447566d4d7bedadc299496ab357426009a35f235cb141be0d99cd10ae3a8", "c4e1020916980a4da5d01ac5e6ad330734ef0d7906631c4f2390426b2edd791f"], ["4162d488b89402039b584c6fc6c308870587d9c46f660b878ab65c82c711d67e", "67163e903236289f776f22c25fb8a3afc1732f2b84b4e95dbda47ae5a0852649"], ["3fad3fa84caf0f34f0f89bfd2dcf54fc175d767aec3e50684f3ba4a4bf5f683d", "cd1bc7cb6cc407bb2f0ca647c718a730cf71872e7d0d2a53fa20efcdfe61826"], ["674f2600a3007a00568c1a7ce05d0816c1fb84bf1370798f1c69532faeb1a86b", "299d21f9413f33b3edf43b257004580b70db57da0b182259e09eecc69e0d38a5"], ["d32f4da54ade74abb81b815ad1fb3b263d82d6c692714bcff87d29bd5ee9f08f", "f9429e738b8e53b968e99016c059707782e14f4535359d582fc416910b3eea87"], ["30e4e670435385556e593657135845d36fbb6931f72b08cb1ed954f1e3ce3ff6", "462f9bce619898638499350113bbc9b10a878d35da70740dc695a559eb88db7b"], ["be2062003c51cc3004682904330e4dee7f3dcd10b01e580bf1971b04d4cad297", "62188bc49d61e5428573d48a74e1c655b1c61090905682a0d5558ed72dccb9bc"], ["93144423ace3451ed29e0fb9ac2af211cb6e84a601df5993c419859fff5df04a", "7c10dfb164c3425f5c71a3f9d7992038f1065224f72bb9d1d902a6d13037b47c"], ["b015f8044f5fcbdcf21ca26d6c34fb8197829205c7b7d2a7cb66418c157b112c", "ab8c1e086d04e813744a655b2df8d5f83b3cdc6faa3088c1d3aea1454e3a1d5f"], ["d5e9e1da649d97d89e4868117a465a3a4f8a18de57a140d36b3f2af341a21b52", "4cb04437f391ed73111a13cc1d4dd0db1693465c2240480d8955e8592f27447a"], ["d3ae41047dd7ca065dbf8ed77b992439983005cd72e16d6f996a5316d36966bb", "bd1aeb21ad22ebb22a10f0303417c6d964f8cdd7df0aca614b10dc14d125ac46"], ["463e2763d885f958fc66cdd22800f0a487197d0a82e377b49f80af87c897b065", "bfefacdb0e5d0fd7df3a311a94de062b26b80c61fbc97508b79992671ef7ca7f"], ["7985fdfd127c0567c6f53ec1bb63ec3158e597c40bfe747c83cddfc910641917", "603c12daf3d9862ef2b25fe1de289aed24ed291e0ec6708703a5bd567f32ed03"], ["74a1ad6b5f76e39db2dd249410eac7f99e74c59cb83d2d0ed5ff1543da7703e9", "cc6157ef18c9c63cd6193d83631bbea0093e0968942e8c33d5737fd790e0db08"], ["30682a50703375f602d416664ba19b7fc9bab42c72747463a71d0896b22f6da3", "553e04f6b018b4fa6c8f39e7f311d3176290d0e0f19ca73f17714d9977a22ff8"], ["9e2158f0d7c0d5f26c3791efefa79597654e7a2b2464f52b1ee6c1347769ef57", "712fcdd1b9053f09003a3481fa7762e9ffd7c8ef35a38509e2fbf2629008373"], ["176e26989a43c9cfeba4029c202538c28172e566e3c4fce7322857f3be327d66", "ed8cc9d04b29eb877d270b4878dc43c19aefd31f4eee09ee7b47834c1fa4b1c3"], ["75d46efea3771e6e68abb89a13ad747ecf1892393dfc4f1b7004788c50374da8", "9852390a99507679fd0b86fd2b39a868d7efc22151346e1a3ca4726586a6bed8"], ["809a20c67d64900ffb698c4c825f6d5f2310fb0451c869345b7319f645605721", "9e994980d9917e22b76b061927fa04143d096ccc54963e6a5ebfa5f3f8e286c1"], ["1b38903a43f7f114ed4500b4eac7083fdefece1cf29c63528d563446f972c180", "4036edc931a60ae889353f77fd53de4a2708b26b6f5da72ad3394119daf408f9"]] } };
});
var ne = M2((Ge) => {
  "use strict";
  var Ae = Ge, C8 = g5("hash.js"), xe2 = ge(), Jf = z2(), He2 = Jf.assert;
  function Ue2(d9) {
    d9.type === "short" ? this.curve = new xe2.short(d9) : d9.type === "edwards" ? this.curve = new xe2.edwards(d9) : this.curve = new xe2.mont(d9), this.g = this.curve.g, this.n = this.curve.n, this.hash = d9.hash, He2(this.g.validate(), "Invalid curve"), He2(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O");
  }
  Ae.PresetCurve = Ue2;
  function J4(d9, e) {
    Object.defineProperty(Ae, d9, { configurable: true, enumerable: true, get: function() {
      var f7 = new Ue2(e);
      return Object.defineProperty(Ae, d9, { configurable: true, enumerable: true, value: f7 }), f7;
    } });
  }
  J4("p192", { type: "short", prime: "p192", p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff", a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc", b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1", n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831", hash: C8.sha256, gRed: false, g: ["188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012", "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"] });
  J4("p224", { type: "short", prime: "p224", p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001", a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe", b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4", n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d", hash: C8.sha256, gRed: false, g: ["b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21", "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"] });
  J4("p256", { type: "short", prime: null, p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff", a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc", b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b", n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551", hash: C8.sha256, gRed: false, g: ["6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296", "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"] });
  J4("p384", { type: "short", prime: null, p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff", a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc", b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef", n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973", hash: C8.sha384, gRed: false, g: ["aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7", "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"] });
  J4("p521", { type: "short", prime: null, p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff", a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc", b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00", n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409", hash: C8.sha512, gRed: false, g: ["000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66", "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"] });
  J4("curve25519", { type: "mont", prime: "p25519", p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed", a: "76d06", b: "1", n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed", hash: C8.sha256, gRed: false, g: ["9"] });
  J4("ed25519", { type: "edwards", prime: "p25519", p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed", a: "-1", c: "1", d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3", n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed", hash: C8.sha256, gRed: false, g: ["216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a", "6666666666666666666666666666666666666666666666666666666666666658"] });
  var Ie2;
  try {
    Ie2 = ke();
  } catch {
    Ie2 = void 0;
  }
  J4("secp256k1", { type: "short", prime: "k256", p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f", a: "0", b: "7", n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141", h: "1", hash: C8.sha256, beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee", lambda: "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72", basis: [{ a: "3086d221a7d46bcde86c90e49284eb15", b: "-e4437ed6010e88286f547fa90abfe4c3" }, { a: "114ca50f7a8e2f3f657c1108d9d44cfd8", b: "3086d221a7d46bcde86c90e49284eb15" }], gRed: false, g: ["79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798", "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8", Ie2] });
});
var Ze = M2((ud, Ve) => {
  "use strict";
  var Df = g5("bn.js"), Xf = z2(), we2 = Xf.assert;
  function q12(d9, e) {
    this.ec = d9, this.priv = null, this.pub = null, e.priv && this._importPrivate(e.priv, e.privEnc), e.pub && this._importPublic(e.pub, e.pubEnc);
  }
  Ve.exports = q12;
  q12.fromPublic = function(e, f7, r2) {
    return f7 instanceof q12 ? f7 : new q12(e, { pub: f7, pubEnc: r2 });
  };
  q12.fromPrivate = function(e, f7, r2) {
    return f7 instanceof q12 ? f7 : new q12(e, { priv: f7, privEnc: r2 });
  };
  q12.prototype.validate = function() {
    var e = this.getPublic();
    return e.isInfinity() ? { result: false, reason: "Invalid public key" } : e.validate() ? e.mul(this.ec.curve.n).isInfinity() ? { result: true, reason: null } : { result: false, reason: "Public key * N != O" } : { result: false, reason: "Public key is not a point" };
  };
  q12.prototype.getPublic = function(e, f7) {
    return typeof e == "string" && (f7 = e, e = null), this.pub || (this.pub = this.ec.g.mul(this.priv)), f7 ? this.pub.encode(f7, e) : this.pub;
  };
  q12.prototype.getPrivate = function(e) {
    return e === "hex" ? this.priv.toString(16, 2) : this.priv;
  };
  q12.prototype._importPrivate = function(e, f7) {
    this.priv = new Df(e, f7 || 16), this.priv = this.priv.umod(this.ec.curve.n);
  };
  q12.prototype._importPublic = function(e, f7) {
    if (e.x || e.y) {
      this.ec.curve.type === "mont" ? we2(e.x, "Need x coordinate") : (this.ec.curve.type === "short" || this.ec.curve.type === "edwards") && we2(e.x && e.y, "Need both x and y coordinate"), this.pub = this.ec.curve.point(e.x, e.y);
      return;
    }
    this.pub = this.ec.curve.decodePoint(e, f7);
  };
  q12.prototype.derive = function(e) {
    return e.validate() || we2(e.validate(), "public point not validated"), e.mul(this.priv).getX();
  };
  q12.prototype.sign = function(e, f7, r2) {
    return this.ec.sign(e, this, f7, r2);
  };
  q12.prototype.verify = function(e, f7) {
    return this.ec.verify(e, f7, this);
  };
  q12.prototype.inspect = function() {
    return "<Key priv: " + (this.priv && this.priv.toString(16, 2)) + " pub: " + (this.pub && this.pub.inspect()) + " >";
  };
});
var ef = M2((od, Qe) => {
  "use strict";
  var se2 = g5("bn.js"), _e = z2(), Tf = _e.assert;
  function ue2(d9, e) {
    if (d9 instanceof ue2)
      return d9;
    this._importDER(d9, e) || (Tf(d9.r && d9.s, "Signature without r or s"), this.r = new se2(d9.r, 16), this.s = new se2(d9.s, 16), d9.recoveryParam === void 0 ? this.recoveryParam = null : this.recoveryParam = d9.recoveryParam);
  }
  Qe.exports = ue2;
  function Yf() {
    this.place = 0;
  }
  function Me(d9, e) {
    var f7 = d9[e.place++];
    if (!(f7 & 128))
      return f7;
    var r2 = f7 & 15;
    if (r2 === 0 || r2 > 4)
      return false;
    for (var a11 = 0, c10 = 0, b8 = e.place; c10 < r2; c10++, b8++)
      a11 <<= 8, a11 |= d9[b8], a11 >>>= 0;
    return a11 <= 127 ? false : (e.place = b8, a11);
  }
  function $e(d9) {
    for (var e = 0, f7 = d9.length - 1; !d9[e] && !(d9[e + 1] & 128) && e < f7; )
      e++;
    return e === 0 ? d9 : d9.slice(e);
  }
  ue2.prototype._importDER = function(e, f7) {
    e = _e.toArray(e, f7);
    var r2 = new Yf();
    if (e[r2.place++] !== 48)
      return false;
    var a11 = Me(e, r2);
    if (a11 === false || a11 + r2.place !== e.length || e[r2.place++] !== 2)
      return false;
    var c10 = Me(e, r2);
    if (c10 === false)
      return false;
    var b8 = e.slice(r2.place, c10 + r2.place);
    if (r2.place += c10, e[r2.place++] !== 2)
      return false;
    var t = Me(e, r2);
    if (t === false || e.length !== t + r2.place)
      return false;
    var i6 = e.slice(r2.place, t + r2.place);
    if (b8[0] === 0)
      if (b8[1] & 128)
        b8 = b8.slice(1);
      else
        return false;
    if (i6[0] === 0)
      if (i6[1] & 128)
        i6 = i6.slice(1);
      else
        return false;
    return this.r = new se2(b8), this.s = new se2(i6), this.recoveryParam = null, true;
  };
  function qe2(d9, e) {
    if (e < 128) {
      d9.push(e);
      return;
    }
    var f7 = 1 + (Math.log(e) / Math.LN2 >>> 3);
    for (d9.push(f7 | 128); --f7; )
      d9.push(e >>> (f7 << 3) & 255);
    d9.push(e);
  }
  ue2.prototype.toDER = function(e) {
    var f7 = this.r.toArray(), r2 = this.s.toArray();
    for (f7[0] & 128 && (f7 = [0].concat(f7)), r2[0] & 128 && (r2 = [0].concat(r2)), f7 = $e(f7), r2 = $e(r2); !r2[0] && !(r2[1] & 128); )
      r2 = r2.slice(1);
    var a11 = [2];
    qe2(a11, f7.length), a11 = a11.concat(f7), a11.push(2), qe2(a11, r2.length);
    var c10 = a11.concat(r2), b8 = [48];
    return qe2(b8, c10.length), b8 = b8.concat(c10), _e.encode(b8, e);
  };
});
var af = M2((hd, rf) => {
  "use strict";
  var T4 = g5("bn.js"), ff = g5("hmac-drbg"), Kf = z2(), Pe = ne(), Wf = g5("brorand"), df = Kf.assert, ze = Ze(), oe = ef();
  function E8(d9) {
    if (!(this instanceof E8))
      return new E8(d9);
    typeof d9 == "string" && (df(Object.prototype.hasOwnProperty.call(Pe, d9), "Unknown curve " + d9), d9 = Pe[d9]), d9 instanceof Pe.PresetCurve && (d9 = { curve: d9 }), this.curve = d9.curve.curve, this.n = this.curve.n, this.nh = this.n.ushrn(1), this.g = this.curve.g, this.g = d9.curve.g, this.g.precompute(d9.curve.n.bitLength() + 1), this.hash = d9.hash || d9.curve.hash;
  }
  rf.exports = E8;
  E8.prototype.keyPair = function(e) {
    return new ze(this, e);
  };
  E8.prototype.keyFromPrivate = function(e, f7) {
    return ze.fromPrivate(this, e, f7);
  };
  E8.prototype.keyFromPublic = function(e, f7) {
    return ze.fromPublic(this, e, f7);
  };
  E8.prototype.genKeyPair = function(e) {
    e || (e = {});
    for (var f7 = new ff({ hash: this.hash, pers: e.pers, persEnc: e.persEnc || "utf8", entropy: e.entropy || Wf(this.hash.hmacStrength), entropyEnc: e.entropy && e.entropyEnc || "utf8", nonce: this.n.toArray() }), r2 = this.n.byteLength(), a11 = this.n.sub(new T4(2)); ; ) {
      var c10 = new T4(f7.generate(r2));
      if (!(c10.cmp(a11) > 0))
        return c10.iaddn(1), this.keyFromPrivate(c10);
    }
  };
  E8.prototype._truncateToN = function(e, f7) {
    var r2 = e.byteLength() * 8 - this.n.bitLength();
    return r2 > 0 && (e = e.ushrn(r2)), !f7 && e.cmp(this.n) >= 0 ? e.sub(this.n) : e;
  };
  E8.prototype.sign = function(e, f7, r2, a11) {
    typeof r2 == "object" && (a11 = r2, r2 = null), a11 || (a11 = {}), f7 = this.keyFromPrivate(f7, r2), e = this._truncateToN(new T4(e, 16));
    for (var c10 = this.n.byteLength(), b8 = f7.getPrivate().toArray("be", c10), t = e.toArray("be", c10), i6 = new ff({ hash: this.hash, entropy: b8, nonce: t, pers: a11.pers, persEnc: a11.persEnc || "utf8" }), s10 = this.n.sub(new T4(1)), n5 = 0; ; n5++) {
      var u13 = a11.k ? a11.k(n5) : new T4(i6.generate(this.n.byteLength()));
      if (u13 = this._truncateToN(u13, true), !(u13.cmpn(1) <= 0 || u13.cmp(s10) >= 0)) {
        var o6 = this.g.mul(u13);
        if (!o6.isInfinity()) {
          var v14 = o6.getX(), h14 = v14.umod(this.n);
          if (h14.cmpn(0) !== 0) {
            var l11 = u13.invm(this.n).mul(h14.mul(f7.getPrivate()).iadd(e));
            if (l11 = l11.umod(this.n), l11.cmpn(0) !== 0) {
              var S9 = (o6.getY().isOdd() ? 1 : 0) | (v14.cmp(h14) !== 0 ? 2 : 0);
              return a11.canonical && l11.cmp(this.nh) > 0 && (l11 = this.n.sub(l11), S9 ^= 1), new oe({ r: h14, s: l11, recoveryParam: S9 });
            }
          }
        }
      }
    }
  };
  E8.prototype.verify = function(e, f7, r2, a11) {
    e = this._truncateToN(new T4(e, 16)), r2 = this.keyFromPublic(r2, a11), f7 = new oe(f7, "hex");
    var c10 = f7.r, b8 = f7.s;
    if (c10.cmpn(1) < 0 || c10.cmp(this.n) >= 0 || b8.cmpn(1) < 0 || b8.cmp(this.n) >= 0)
      return false;
    var t = b8.invm(this.n), i6 = t.mul(e).umod(this.n), s10 = t.mul(c10).umod(this.n), n5;
    return this.curve._maxwellTrick ? (n5 = this.g.jmulAdd(i6, r2.getPublic(), s10), n5.isInfinity() ? false : n5.eqXToP(c10)) : (n5 = this.g.mulAdd(i6, r2.getPublic(), s10), n5.isInfinity() ? false : n5.getX().umod(this.n).cmp(c10) === 0);
  };
  E8.prototype.recoverPubKey = function(d9, e, f7, r2) {
    df((3 & f7) === f7, "The recovery param is more than two bits"), e = new oe(e, r2);
    var a11 = this.n, c10 = new T4(d9), b8 = e.r, t = e.s, i6 = f7 & 1, s10 = f7 >> 1;
    if (b8.cmp(this.curve.p.umod(this.curve.n)) >= 0 && s10)
      throw new Error("Unable to find sencond key candinate");
    s10 ? b8 = this.curve.pointFromX(b8.add(this.curve.n), i6) : b8 = this.curve.pointFromX(b8, i6);
    var n5 = e.r.invm(a11), u13 = a11.sub(c10).mul(n5).umod(a11), o6 = t.mul(n5).umod(a11);
    return this.g.mulAdd(u13, b8, o6);
  };
  E8.prototype.getKeyRecoveryParam = function(d9, e, f7, r2) {
    if (e = new oe(e, r2), e.recoveryParam !== null)
      return e.recoveryParam;
    for (var a11 = 0; a11 < 4; a11++) {
      var c10;
      try {
        c10 = this.recoverPubKey(d9, e, a11);
      } catch {
        continue;
      }
      if (c10.eq(f7))
        return a11;
    }
    throw new Error("Unable to find valid recovery factor");
  };
});
var nf = M2((vd, bf) => {
  "use strict";
  var de = z2(), cf = de.assert, tf = de.parseBytes, V6 = de.cachedProperty;
  function I8(d9, e) {
    this.eddsa = d9, this._secret = tf(e.secret), d9.isPoint(e.pub) ? this._pub = e.pub : this._pubBytes = tf(e.pub);
  }
  I8.fromPublic = function(e, f7) {
    return f7 instanceof I8 ? f7 : new I8(e, { pub: f7 });
  };
  I8.fromSecret = function(e, f7) {
    return f7 instanceof I8 ? f7 : new I8(e, { secret: f7 });
  };
  I8.prototype.secret = function() {
    return this._secret;
  };
  V6(I8, "pubBytes", function() {
    return this.eddsa.encodePoint(this.pub());
  });
  V6(I8, "pub", function() {
    return this._pubBytes ? this.eddsa.decodePoint(this._pubBytes) : this.eddsa.g.mul(this.priv());
  });
  V6(I8, "privBytes", function() {
    var e = this.eddsa, f7 = this.hash(), r2 = e.encodingLength - 1, a11 = f7.slice(0, e.encodingLength);
    return a11[0] &= 248, a11[r2] &= 127, a11[r2] |= 64, a11;
  });
  V6(I8, "priv", function() {
    return this.eddsa.decodeInt(this.privBytes());
  });
  V6(I8, "hash", function() {
    return this.eddsa.hash().update(this.secret()).digest();
  });
  V6(I8, "messagePrefix", function() {
    return this.hash().slice(this.eddsa.encodingLength);
  });
  I8.prototype.sign = function(e) {
    return cf(this._secret, "KeyPair can only verify"), this.eddsa.sign(e, this);
  };
  I8.prototype.verify = function(e, f7) {
    return this.eddsa.verify(e, f7, this);
  };
  I8.prototype.getSecret = function(e) {
    return cf(this._secret, "KeyPair is public only"), de.encode(this.secret(), e);
  };
  I8.prototype.getPublic = function(e) {
    return de.encode(this.pubBytes(), e);
  };
  bf.exports = I8;
});
var uf = M2((ld, sf) => {
  "use strict";
  var kf = g5("bn.js"), he2 = z2(), Hf = he2.assert, ve = he2.cachedProperty, Uf = he2.parseBytes;
  function Y4(d9, e) {
    this.eddsa = d9, typeof e != "object" && (e = Uf(e)), Array.isArray(e) && (e = { R: e.slice(0, d9.encodingLength), S: e.slice(d9.encodingLength) }), Hf(e.R && e.S, "Signature without R or S"), d9.isPoint(e.R) && (this._R = e.R), e.S instanceof kf && (this._S = e.S), this._Rencoded = Array.isArray(e.R) ? e.R : e.Rencoded, this._Sencoded = Array.isArray(e.S) ? e.S : e.Sencoded;
  }
  ve(Y4, "S", function() {
    return this.eddsa.decodeInt(this.Sencoded());
  });
  ve(Y4, "R", function() {
    return this.eddsa.decodePoint(this.Rencoded());
  });
  ve(Y4, "Rencoded", function() {
    return this.eddsa.encodePoint(this.R());
  });
  ve(Y4, "Sencoded", function() {
    return this.eddsa.encodeInt(this.S());
  });
  Y4.prototype.toBytes = function() {
    return this.Rencoded().concat(this.Sencoded());
  };
  Y4.prototype.toHex = function() {
    return he2.encode(this.toBytes(), "hex").toUpperCase();
  };
  sf.exports = Y4;
});
var pf = M2((pd, lf) => {
  "use strict";
  var Gf = g5("hash.js"), Vf = ne(), Z3 = z2(), Zf = Z3.assert, hf = Z3.parseBytes, vf = nf(), of = uf();
  function _12(d9) {
    if (Zf(d9 === "ed25519", "only tested with ed25519 so far"), !(this instanceof _12))
      return new _12(d9);
    d9 = Vf[d9].curve, this.curve = d9, this.g = d9.g, this.g.precompute(d9.n.bitLength() + 1), this.pointClass = d9.point().constructor, this.encodingLength = Math.ceil(d9.n.bitLength() / 8), this.hash = Gf.sha512;
  }
  lf.exports = _12;
  _12.prototype.sign = function(e, f7) {
    e = hf(e);
    var r2 = this.keyFromSecret(f7), a11 = this.hashInt(r2.messagePrefix(), e), c10 = this.g.mul(a11), b8 = this.encodePoint(c10), t = this.hashInt(b8, r2.pubBytes(), e).mul(r2.priv()), i6 = a11.add(t).umod(this.curve.n);
    return this.makeSignature({ R: c10, S: i6, Rencoded: b8 });
  };
  _12.prototype.verify = function(e, f7, r2) {
    e = hf(e), f7 = this.makeSignature(f7);
    var a11 = this.keyFromPublic(r2), c10 = this.hashInt(f7.Rencoded(), a11.pubBytes(), e), b8 = this.g.mul(f7.S()), t = f7.R().add(a11.pub().mul(c10));
    return t.eq(b8);
  };
  _12.prototype.hashInt = function() {
    for (var e = this.hash(), f7 = 0; f7 < arguments.length; f7++)
      e.update(arguments[f7]);
    return Z3.intFromLE(e.digest()).umod(this.curve.n);
  };
  _12.prototype.keyFromPublic = function(e) {
    return vf.fromPublic(this, e);
  };
  _12.prototype.keyFromSecret = function(e) {
    return vf.fromSecret(this, e);
  };
  _12.prototype.makeSignature = function(e) {
    return e instanceof of ? e : new of(this, e);
  };
  _12.prototype.encodePoint = function(e) {
    var f7 = e.getY().toArray("le", this.encodingLength);
    return f7[this.encodingLength - 1] |= e.getX().isOdd() ? 128 : 0, f7;
  };
  _12.prototype.decodePoint = function(e) {
    e = Z3.parseBytes(e);
    var f7 = e.length - 1, r2 = e.slice(0, f7).concat(e[f7] & -129), a11 = (e[f7] & 128) !== 0, c10 = Z3.intFromLE(r2);
    return this.curve.pointFromY(c10, a11);
  };
  _12.prototype.encodeInt = function(e) {
    return e.toArray("le", this.encodingLength);
  };
  _12.prototype.decodeInt = function(e) {
    return Z3.intFromLE(e);
  };
  _12.prototype.isPoint = function(e) {
    return e instanceof this.pointClass;
  };
});
var Re = M2((yf) => {
  "use strict";
  var K7 = yf;
  K7.version = Be().version;
  K7.utils = z2();
  K7.rand = g5("brorand");
  K7.curve = ge();
  K7.curves = ne();
  K7.ec = af();
  K7.eddsa = pf();
});
var W = {};
wf(W, { default: () => ed });
var $f = Ee2(Re());
k3(W, Ee2(Re()));
var { default: mf, ...Qf } = $f;
var ed = mf !== void 0 ? mf : Qf;

// https://esm.sh/v135/secp256k1@4.0.3/denonext/secp256k1.mjs
var require9 = (n5) => {
  const e = (m16) => typeof m16.default < "u" ? m16.default : m16, c10 = (m16) => Object.assign({}, m16);
  switch (n5) {
    case "elliptic":
      return e(elliptic_exports);
    default:
      throw new Error('module "' + n5 + '" not found');
  }
};
var V3 = Object.create;
var v5 = Object.defineProperty;
var Z = Object.getOwnPropertyDescriptor;
var Y = Object.getOwnPropertyNames;
var D = Object.getPrototypeOf;
var z3 = Object.prototype.hasOwnProperty;
var q3 = ((n5) => typeof require9 < "u" ? require9 : typeof Proxy < "u" ? new Proxy(n5, { get: (r2, e) => (typeof require9 < "u" ? require9 : r2)[e] }) : n5)(function(n5) {
  if (typeof require9 < "u")
    return require9.apply(this, arguments);
  throw Error('Dynamic require of "' + n5 + '" is not supported');
});
var U2 = (n5, r2) => () => (r2 || n5((r2 = { exports: {} }).exports, r2), r2.exports);
var G2 = (n5, r2) => {
  for (var e in r2)
    v5(n5, e, { get: r2[e], enumerable: true });
};
var _4 = (n5, r2, e, t) => {
  if (r2 && typeof r2 == "object" || typeof r2 == "function")
    for (let i6 of Y(r2))
      !z3.call(n5, i6) && i6 !== e && v5(n5, i6, { get: () => r2[i6], enumerable: !(t = Z(r2, i6)) || t.enumerable });
  return n5;
};
var m5 = (n5, r2, e) => (_4(n5, r2, "default"), e && _4(e, r2, "default"));
var C4 = (n5, r2, e) => (e = n5 != null ? V3(D(n5)) : {}, _4(r2 || !n5 || !n5.__esModule ? v5(e, "default", { value: n5, enumerable: true }) : e, n5));
var T2 = U2((k8, N5) => {
  var s10 = { IMPOSSIBLE_CASE: "Impossible case. Please create issue.", TWEAK_ADD: "The tweak was out of range or the resulted private key is invalid", TWEAK_MUL: "The tweak was out of range or equal to zero", CONTEXT_RANDOMIZE_UNKNOW: "Unknow error on context randomization", SECKEY_INVALID: "Private Key is invalid", PUBKEY_PARSE: "Public Key could not be parsed", PUBKEY_SERIALIZE: "Public Key serialization error", PUBKEY_COMBINE: "The sum of the public keys is not valid", SIG_PARSE: "Signature could not be parsed", SIGN: "The nonce generation function failed, or the private key was invalid", RECOVER: "Public key could not be recover", ECDH: "Scalar was invalid (zero or overflow)" };
  function E8(n5, r2) {
    if (!n5)
      throw new Error(r2);
  }
  function o6(n5, r2, e) {
    if (E8(r2 instanceof Uint8Array, `Expected ${n5} to be an Uint8Array`), e !== void 0)
      if (Array.isArray(e)) {
        let t = e.join(", "), i6 = `Expected ${n5} to be an Uint8Array with length [${t}]`;
        E8(e.includes(r2.length), i6);
      } else {
        let t = `Expected ${n5} to be an Uint8Array with length ${e}`;
        E8(r2.length === e, t);
      }
  }
  function K7(n5) {
    E8(g15(n5) === "Boolean", "Expected compressed to be a Boolean");
  }
  function y10(n5 = (e) => new Uint8Array(e), r2) {
    return typeof n5 == "function" && (n5 = n5(r2)), o6("output", n5, r2), n5;
  }
  function g15(n5) {
    return Object.prototype.toString.call(n5).slice(8, -1);
  }
  N5.exports = (n5) => ({ contextRandomize(r2) {
    switch (E8(r2 === null || r2 instanceof Uint8Array, "Expected seed to be an Uint8Array or null"), r2 !== null && o6("seed", r2, 32), n5.contextRandomize(r2)) {
      case 1:
        throw new Error(s10.CONTEXT_RANDOMIZE_UNKNOW);
    }
  }, privateKeyVerify(r2) {
    return o6("private key", r2, 32), n5.privateKeyVerify(r2) === 0;
  }, privateKeyNegate(r2) {
    switch (o6("private key", r2, 32), n5.privateKeyNegate(r2)) {
      case 0:
        return r2;
      case 1:
        throw new Error(s10.IMPOSSIBLE_CASE);
    }
  }, privateKeyTweakAdd(r2, e) {
    switch (o6("private key", r2, 32), o6("tweak", e, 32), n5.privateKeyTweakAdd(r2, e)) {
      case 0:
        return r2;
      case 1:
        throw new Error(s10.TWEAK_ADD);
    }
  }, privateKeyTweakMul(r2, e) {
    switch (o6("private key", r2, 32), o6("tweak", e, 32), n5.privateKeyTweakMul(r2, e)) {
      case 0:
        return r2;
      case 1:
        throw new Error(s10.TWEAK_MUL);
    }
  }, publicKeyVerify(r2) {
    return o6("public key", r2, [33, 65]), n5.publicKeyVerify(r2) === 0;
  }, publicKeyCreate(r2, e = true, t) {
    switch (o6("private key", r2, 32), K7(e), t = y10(t, e ? 33 : 65), n5.publicKeyCreate(t, r2)) {
      case 0:
        return t;
      case 1:
        throw new Error(s10.SECKEY_INVALID);
      case 2:
        throw new Error(s10.PUBKEY_SERIALIZE);
    }
  }, publicKeyConvert(r2, e = true, t) {
    switch (o6("public key", r2, [33, 65]), K7(e), t = y10(t, e ? 33 : 65), n5.publicKeyConvert(t, r2)) {
      case 0:
        return t;
      case 1:
        throw new Error(s10.PUBKEY_PARSE);
      case 2:
        throw new Error(s10.PUBKEY_SERIALIZE);
    }
  }, publicKeyNegate(r2, e = true, t) {
    switch (o6("public key", r2, [33, 65]), K7(e), t = y10(t, e ? 33 : 65), n5.publicKeyNegate(t, r2)) {
      case 0:
        return t;
      case 1:
        throw new Error(s10.PUBKEY_PARSE);
      case 2:
        throw new Error(s10.IMPOSSIBLE_CASE);
      case 3:
        throw new Error(s10.PUBKEY_SERIALIZE);
    }
  }, publicKeyCombine(r2, e = true, t) {
    E8(Array.isArray(r2), "Expected public keys to be an Array"), E8(r2.length > 0, "Expected public keys array will have more than zero items");
    for (let i6 of r2)
      o6("public key", i6, [33, 65]);
    switch (K7(e), t = y10(t, e ? 33 : 65), n5.publicKeyCombine(t, r2)) {
      case 0:
        return t;
      case 1:
        throw new Error(s10.PUBKEY_PARSE);
      case 2:
        throw new Error(s10.PUBKEY_COMBINE);
      case 3:
        throw new Error(s10.PUBKEY_SERIALIZE);
    }
  }, publicKeyTweakAdd(r2, e, t = true, i6) {
    switch (o6("public key", r2, [33, 65]), o6("tweak", e, 32), K7(t), i6 = y10(i6, t ? 33 : 65), n5.publicKeyTweakAdd(i6, r2, e)) {
      case 0:
        return i6;
      case 1:
        throw new Error(s10.PUBKEY_PARSE);
      case 2:
        throw new Error(s10.TWEAK_ADD);
    }
  }, publicKeyTweakMul(r2, e, t = true, i6) {
    switch (o6("public key", r2, [33, 65]), o6("tweak", e, 32), K7(t), i6 = y10(i6, t ? 33 : 65), n5.publicKeyTweakMul(i6, r2, e)) {
      case 0:
        return i6;
      case 1:
        throw new Error(s10.PUBKEY_PARSE);
      case 2:
        throw new Error(s10.TWEAK_MUL);
    }
  }, signatureNormalize(r2) {
    switch (o6("signature", r2, 64), n5.signatureNormalize(r2)) {
      case 0:
        return r2;
      case 1:
        throw new Error(s10.SIG_PARSE);
    }
  }, signatureExport(r2, e) {
    o6("signature", r2, 64), e = y10(e, 72);
    let t = { output: e, outputlen: 72 };
    switch (n5.signatureExport(t, r2)) {
      case 0:
        return e.slice(0, t.outputlen);
      case 1:
        throw new Error(s10.SIG_PARSE);
      case 2:
        throw new Error(s10.IMPOSSIBLE_CASE);
    }
  }, signatureImport(r2, e) {
    switch (o6("signature", r2), e = y10(e, 64), n5.signatureImport(e, r2)) {
      case 0:
        return e;
      case 1:
        throw new Error(s10.SIG_PARSE);
      case 2:
        throw new Error(s10.IMPOSSIBLE_CASE);
    }
  }, ecdsaSign(r2, e, t = {}, i6) {
    o6("message", r2, 32), o6("private key", e, 32), E8(g15(t) === "Object", "Expected options to be an Object"), t.data !== void 0 && o6("options.data", t.data), t.noncefn !== void 0 && E8(g15(t.noncefn) === "Function", "Expected options.noncefn to be a Function"), i6 = y10(i6, 64);
    let a11 = { signature: i6, recid: null };
    switch (n5.ecdsaSign(a11, r2, e, t.data, t.noncefn)) {
      case 0:
        return a11;
      case 1:
        throw new Error(s10.SIGN);
      case 2:
        throw new Error(s10.IMPOSSIBLE_CASE);
    }
  }, ecdsaVerify(r2, e, t) {
    switch (o6("signature", r2, 64), o6("message", e, 32), o6("public key", t, [33, 65]), n5.ecdsaVerify(r2, e, t)) {
      case 0:
        return true;
      case 3:
        return false;
      case 1:
        throw new Error(s10.SIG_PARSE);
      case 2:
        throw new Error(s10.PUBKEY_PARSE);
    }
  }, ecdsaRecover(r2, e, t, i6 = true, a11) {
    switch (o6("signature", r2, 64), E8(g15(e) === "Number" && e >= 0 && e <= 3, "Expected recovery id to be a Number within interval [0, 3]"), o6("message", t, 32), K7(i6), a11 = y10(a11, i6 ? 33 : 65), n5.ecdsaRecover(a11, r2, e, t)) {
      case 0:
        return a11;
      case 1:
        throw new Error(s10.SIG_PARSE);
      case 2:
        throw new Error(s10.RECOVER);
      case 3:
        throw new Error(s10.IMPOSSIBLE_CASE);
    }
  }, ecdh(r2, e, t = {}, i6) {
    switch (o6("public key", r2, [33, 65]), o6("private key", e, 32), E8(g15(t) === "Object", "Expected options to be an Object"), t.data !== void 0 && o6("options.data", t.data), t.hashfn !== void 0 ? (E8(g15(t.hashfn) === "Function", "Expected options.hashfn to be a Function"), t.xbuf !== void 0 && o6("options.xbuf", t.xbuf, 32), t.ybuf !== void 0 && o6("options.ybuf", t.ybuf, 32), o6("output", i6)) : i6 = y10(i6, 32), n5.ecdh(i6, r2, e, t.data, t.hashfn, t.xbuf, t.ybuf)) {
      case 0:
        return i6;
      case 1:
        throw new Error(s10.PUBKEY_PARSE);
      case 2:
        throw new Error(s10.ECDH);
    }
  } });
});
var O = U2((rr, B9) => {
  var W4 = q3("elliptic").ec, h14 = new W4("secp256k1"), c10 = h14.curve, u13 = c10.n.constructor;
  function j7(n5, r2) {
    let e = new u13(r2);
    if (e.cmp(c10.p) >= 0)
      return null;
    e = e.toRed(c10.red);
    let t = e.redSqr().redIMul(e).redIAdd(c10.b).redSqrt();
    return n5 === 3 !== t.isOdd() && (t = t.redNeg()), h14.keyPair({ pub: { x: e, y: t } });
  }
  function F8(n5, r2, e) {
    let t = new u13(r2), i6 = new u13(e);
    if (t.cmp(c10.p) >= 0 || i6.cmp(c10.p) >= 0 || (t = t.toRed(c10.red), i6 = i6.toRed(c10.red), (n5 === 6 || n5 === 7) && i6.isOdd() !== (n5 === 7)))
      return null;
    let a11 = t.redSqr().redIMul(t);
    return i6.redSqr().redISub(a11.redIAdd(c10.b)).isZero() ? h14.keyPair({ pub: { x: t, y: i6 } }) : null;
  }
  function x13(n5) {
    let r2 = n5[0];
    switch (r2) {
      case 2:
      case 3:
        return n5.length !== 33 ? null : j7(r2, n5.subarray(1, 33));
      case 4:
      case 6:
      case 7:
        return n5.length !== 65 ? null : F8(r2, n5.subarray(1, 33), n5.subarray(33, 65));
      default:
        return null;
    }
  }
  function p12(n5, r2) {
    let e = r2.encode(null, n5.length === 33);
    for (let t = 0; t < n5.length; ++t)
      n5[t] = e[t];
  }
  B9.exports = { contextRandomize() {
    return 0;
  }, privateKeyVerify(n5) {
    let r2 = new u13(n5);
    return r2.cmp(c10.n) < 0 && !r2.isZero() ? 0 : 1;
  }, privateKeyNegate(n5) {
    let r2 = new u13(n5), e = c10.n.sub(r2).umod(c10.n).toArrayLike(Uint8Array, "be", 32);
    return n5.set(e), 0;
  }, privateKeyTweakAdd(n5, r2) {
    let e = new u13(r2);
    if (e.cmp(c10.n) >= 0 || (e.iadd(new u13(n5)), e.cmp(c10.n) >= 0 && e.isub(c10.n), e.isZero()))
      return 1;
    let t = e.toArrayLike(Uint8Array, "be", 32);
    return n5.set(t), 0;
  }, privateKeyTweakMul(n5, r2) {
    let e = new u13(r2);
    if (e.cmp(c10.n) >= 0 || e.isZero())
      return 1;
    e.imul(new u13(n5)), e.cmp(c10.n) >= 0 && (e = e.umod(c10.n));
    let t = e.toArrayLike(Uint8Array, "be", 32);
    return n5.set(t), 0;
  }, publicKeyVerify(n5) {
    return x13(n5) === null ? 1 : 0;
  }, publicKeyCreate(n5, r2) {
    let e = new u13(r2);
    if (e.cmp(c10.n) >= 0 || e.isZero())
      return 1;
    let t = h14.keyFromPrivate(r2).getPublic();
    return p12(n5, t), 0;
  }, publicKeyConvert(n5, r2) {
    let e = x13(r2);
    if (e === null)
      return 1;
    let t = e.getPublic();
    return p12(n5, t), 0;
  }, publicKeyNegate(n5, r2) {
    let e = x13(r2);
    if (e === null)
      return 1;
    let t = e.getPublic();
    return t.y = t.y.redNeg(), p12(n5, t), 0;
  }, publicKeyCombine(n5, r2) {
    let e = new Array(r2.length);
    for (let i6 = 0; i6 < r2.length; ++i6)
      if (e[i6] = x13(r2[i6]), e[i6] === null)
        return 1;
    let t = e[0].getPublic();
    for (let i6 = 1; i6 < e.length; ++i6)
      t = t.add(e[i6].pub);
    return t.isInfinity() ? 2 : (p12(n5, t), 0);
  }, publicKeyTweakAdd(n5, r2, e) {
    let t = x13(r2);
    if (t === null)
      return 1;
    if (e = new u13(e), e.cmp(c10.n) >= 0)
      return 2;
    let i6 = t.getPublic().add(c10.g.mul(e));
    return i6.isInfinity() ? 2 : (p12(n5, i6), 0);
  }, publicKeyTweakMul(n5, r2, e) {
    let t = x13(r2);
    if (t === null)
      return 1;
    if (e = new u13(e), e.cmp(c10.n) >= 0 || e.isZero())
      return 2;
    let i6 = t.getPublic().mul(e);
    return p12(n5, i6), 0;
  }, signatureNormalize(n5) {
    let r2 = new u13(n5.subarray(0, 32)), e = new u13(n5.subarray(32, 64));
    return r2.cmp(c10.n) >= 0 || e.cmp(c10.n) >= 0 ? 1 : (e.cmp(h14.nh) === 1 && n5.set(c10.n.sub(e).toArrayLike(Uint8Array, "be", 32), 32), 0);
  }, signatureExport(n5, r2) {
    let e = r2.subarray(0, 32), t = r2.subarray(32, 64);
    if (new u13(e).cmp(c10.n) >= 0 || new u13(t).cmp(c10.n) >= 0)
      return 1;
    let { output: i6 } = n5, a11 = i6.subarray(4, 37);
    a11[0] = 0, a11.set(e, 1);
    let l11 = 33, f7 = 0;
    for (; l11 > 1 && a11[f7] === 0 && !(a11[f7 + 1] & 128); --l11, ++f7)
      ;
    if (a11 = a11.subarray(f7), a11[0] & 128 || l11 > 1 && a11[0] === 0 && !(a11[1] & 128))
      return 1;
    let w13 = i6.subarray(39, 72);
    w13[0] = 0, w13.set(t, 1);
    let d9 = 33, b8 = 0;
    for (; d9 > 1 && w13[b8] === 0 && !(w13[b8 + 1] & 128); --d9, ++b8)
      ;
    return w13 = w13.subarray(b8), w13[0] & 128 || d9 > 1 && w13[0] === 0 && !(w13[1] & 128) ? 1 : (n5.outputlen = 6 + l11 + d9, i6[0] = 48, i6[1] = n5.outputlen - 2, i6[2] = 2, i6[3] = a11.length, i6.set(a11, 4), i6[4 + l11] = 2, i6[5 + l11] = w13.length, i6.set(w13, 6 + l11), 0);
  }, signatureImport(n5, r2) {
    if (r2.length < 8 || r2.length > 72 || r2[0] !== 48 || r2[1] !== r2.length - 2 || r2[2] !== 2)
      return 1;
    let e = r2[3];
    if (e === 0 || 5 + e >= r2.length || r2[4 + e] !== 2)
      return 1;
    let t = r2[5 + e];
    if (t === 0 || 6 + e + t !== r2.length || r2[4] & 128 || e > 1 && r2[4] === 0 && !(r2[5] & 128) || r2[e + 6] & 128 || t > 1 && r2[e + 6] === 0 && !(r2[e + 7] & 128))
      return 1;
    let i6 = r2.subarray(4, 4 + e);
    if (i6.length === 33 && i6[0] === 0 && (i6 = i6.subarray(1)), i6.length > 32)
      return 1;
    let a11 = r2.subarray(6 + e);
    if (a11.length === 33 && a11[0] === 0 && (a11 = a11.slice(1)), a11.length > 32)
      throw new Error("S length is too long");
    let l11 = new u13(i6);
    l11.cmp(c10.n) >= 0 && (l11 = new u13(0));
    let f7 = new u13(r2.subarray(6 + e));
    return f7.cmp(c10.n) >= 0 && (f7 = new u13(0)), n5.set(l11.toArrayLike(Uint8Array, "be", 32), 0), n5.set(f7.toArrayLike(Uint8Array, "be", 32), 32), 0;
  }, ecdsaSign(n5, r2, e, t, i6) {
    if (i6) {
      let f7 = i6;
      i6 = (w13) => {
        let d9 = f7(r2, e, null, t, w13);
        if (!(d9 instanceof Uint8Array && d9.length === 32))
          throw new Error("This is the way");
        return new u13(d9);
      };
    }
    let a11 = new u13(e);
    if (a11.cmp(c10.n) >= 0 || a11.isZero())
      return 1;
    let l11;
    try {
      l11 = h14.sign(r2, e, { canonical: true, k: i6, pers: t });
    } catch {
      return 1;
    }
    return n5.signature.set(l11.r.toArrayLike(Uint8Array, "be", 32), 0), n5.signature.set(l11.s.toArrayLike(Uint8Array, "be", 32), 32), n5.recid = l11.recoveryParam, 0;
  }, ecdsaVerify(n5, r2, e) {
    let t = { r: n5.subarray(0, 32), s: n5.subarray(32, 64) }, i6 = new u13(t.r), a11 = new u13(t.s);
    if (i6.cmp(c10.n) >= 0 || a11.cmp(c10.n) >= 0)
      return 1;
    if (a11.cmp(h14.nh) === 1 || i6.isZero() || a11.isZero())
      return 3;
    let l11 = x13(e);
    if (l11 === null)
      return 2;
    let f7 = l11.getPublic();
    return h14.verify(r2, t, f7) ? 0 : 3;
  }, ecdsaRecover(n5, r2, e, t) {
    let i6 = { r: r2.slice(0, 32), s: r2.slice(32, 64) }, a11 = new u13(i6.r), l11 = new u13(i6.s);
    if (a11.cmp(c10.n) >= 0 || l11.cmp(c10.n) >= 0)
      return 1;
    if (a11.isZero() || l11.isZero())
      return 2;
    let f7;
    try {
      f7 = h14.recoverPubKey(t, i6, e);
    } catch {
      return 2;
    }
    return p12(n5, f7), 0;
  }, ecdh(n5, r2, e, t, i6, a11, l11) {
    let f7 = x13(r2);
    if (f7 === null)
      return 1;
    let w13 = new u13(e);
    if (w13.cmp(c10.n) >= 0 || w13.isZero())
      return 2;
    let d9 = f7.getPublic().mul(w13);
    if (i6 === void 0) {
      let b8 = d9.encode(null, true), I8 = h14.hash().update(b8).digest();
      for (let S9 = 0; S9 < 32; ++S9)
        n5[S9] = I8[S9];
    } else {
      a11 || (a11 = new Uint8Array(32));
      let b8 = d9.getX().toArray("be", 32);
      for (let A11 = 0; A11 < 32; ++A11)
        a11[A11] = b8[A11];
      l11 || (l11 = new Uint8Array(32));
      let I8 = d9.getY().toArray("be", 32);
      for (let A11 = 0; A11 < 32; ++A11)
        l11[A11] = I8[A11];
      let S9 = i6(a11, l11, t);
      if (!(S9 instanceof Uint8Array && S9.length === n5.length))
        return 2;
      n5.set(S9);
    }
    return 0;
  } };
});
var R4 = U2((er2, L7) => {
  L7.exports = T2()(O());
});
var P3 = {};
G2(P3, { default: () => H3 });
var $ = C4(R4());
m5(P3, C4(R4()));
var { default: M3, ...X } = $;
var H3 = M3 !== void 0 ? M3 : X;

// https://esm.sh/v135/randombytes@2.1.0/denonext/randombytes.mjs
var randombytes_exports = {};
__export(randombytes_exports, {
  default: () => q5
});
import __Process$ from "node:process";

// https://esm.sh/v135/safe-buffer@5.2.1/denonext/safe-buffer.mjs
var safe_buffer_exports = {};
__export(safe_buffer_exports, {
  Blob: () => U3,
  Buffer: () => M4,
  File: () => v6,
  INSPECT_MAX_BYTES: () => R5,
  SlowBuffer: () => j4,
  atob: () => I5,
  btoa: () => F3,
  constants: () => N,
  default: () => Y2,
  isAscii: () => k4,
  isUtf8: () => P4,
  kMaxLength: () => q4,
  kStringMaxLength: () => C5,
  resolveObjectURL: () => L3,
  transcode: () => O2
});
import * as __0$4 from "node:buffer";
var require10 = (n5) => {
  const e = (m16) => typeof m16.default < "u" ? m16.default : m16, c10 = (m16) => Object.assign({}, m16);
  switch (n5) {
    case "buffer":
      return e(__0$4);
    default:
      throw new Error('module "' + n5 + '" not found');
  }
};
var S3 = Object.create;
var s4 = Object.defineProperty;
var _5 = Object.getOwnPropertyDescriptor;
var g6 = Object.getOwnPropertyNames;
var h6 = Object.getPrototypeOf;
var x5 = Object.prototype.hasOwnProperty;
var A6 = ((e) => typeof require10 < "u" ? require10 : typeof Proxy < "u" ? new Proxy(e, { get: (r2, t) => (typeof require10 < "u" ? require10 : r2)[t] }) : e)(function(e) {
  if (typeof require10 < "u")
    return require10.apply(this, arguments);
  throw Error('Dynamic require of "' + e + '" is not supported');
});
var E4 = (e, r2) => () => (r2 || e((r2 = { exports: {} }).exports, r2), r2.exports);
var T3 = (e, r2) => {
  for (var t in r2)
    s4(e, t, { get: r2[t], enumerable: true });
};
var m6 = (e, r2, t, n5) => {
  if (r2 && typeof r2 == "object" || typeof r2 == "function")
    for (let l11 of g6(r2))
      !x5.call(e, l11) && l11 !== t && s4(e, l11, { get: () => r2[l11], enumerable: !(n5 = _5(r2, l11)) || n5.enumerable });
  return e;
};
var u6 = (e, r2, t) => (m6(e, r2, "default"), t && m6(t, r2, "default"));
var c6 = (e, r2, t) => (t = e != null ? S3(h6(e)) : {}, m6(r2 || !e || !e.__esModule ? s4(t, "default", { value: e, enumerable: true }) : t, e));
var b3 = E4((p12, y10) => {
  var i6 = A6("buffer"), o6 = i6.Buffer;
  function w13(e, r2) {
    for (var t in e)
      r2[t] = e[t];
  }
  o6.from && o6.alloc && o6.allocUnsafe && o6.allocUnsafeSlow ? y10.exports = i6 : (w13(i6, p12), p12.Buffer = a11);
  function a11(e, r2, t) {
    return o6(e, r2, t);
  }
  a11.prototype = Object.create(o6.prototype);
  w13(o6, a11);
  a11.from = function(e, r2, t) {
    if (typeof e == "number")
      throw new TypeError("Argument must not be a number");
    return o6(e, r2, t);
  };
  a11.alloc = function(e, r2, t) {
    if (typeof e != "number")
      throw new TypeError("Argument must be a number");
    var n5 = o6(e);
    return r2 !== void 0 ? typeof t == "string" ? n5.fill(r2, t) : n5.fill(r2) : n5.fill(0), n5;
  };
  a11.allocUnsafe = function(e) {
    if (typeof e != "number")
      throw new TypeError("Argument must be a number");
    return o6(e);
  };
  a11.allocUnsafeSlow = function(e) {
    if (typeof e != "number")
      throw new TypeError("Argument must be a number");
    return i6.SlowBuffer(e);
  };
});
var f3 = {};
T3(f3, { Blob: () => U3, Buffer: () => M4, File: () => v6, INSPECT_MAX_BYTES: () => R5, SlowBuffer: () => j4, atob: () => I5, btoa: () => F3, constants: () => N, default: () => Y2, isAscii: () => k4, isUtf8: () => P4, kMaxLength: () => q4, kStringMaxLength: () => C5, resolveObjectURL: () => L3, transcode: () => O2 });
var d3 = c6(b3());
u6(f3, c6(b3()));
var { Blob: U3, File: v6, resolveObjectURL: L3, Buffer: M4, SlowBuffer: j4, transcode: O2, isUtf8: P4, isAscii: k4, kMaxLength: q4, kStringMaxLength: C5, btoa: F3, atob: I5, constants: N, INSPECT_MAX_BYTES: R5 } = d3;
var { default: B3, ...X2 } = d3;
var Y2 = B3 !== void 0 ? B3 : X2;

// https://esm.sh/v135/randombytes@2.1.0/denonext/randombytes.mjs
var __global$ = globalThis || (typeof window !== "undefined" ? window : self);
var require11 = (n5) => {
  const e = (m16) => typeof m16.default < "u" ? m16.default : m16, c10 = (m16) => Object.assign({}, m16);
  switch (n5) {
    case "safe-buffer":
      return e(safe_buffer_exports);
    default:
      throw new Error('module "' + n5 + '" not found');
  }
};
var y4 = Object.create;
var l5 = Object.defineProperty;
var _6 = Object.getOwnPropertyDescriptor;
var x6 = Object.getOwnPropertyNames;
var b4 = Object.getPrototypeOf;
var v7 = Object.prototype.hasOwnProperty;
var w5 = ((r2) => typeof require11 < "u" ? require11 : typeof Proxy < "u" ? new Proxy(r2, { get: (o6, e) => (typeof require11 < "u" ? require11 : o6)[e] }) : r2)(function(r2) {
  if (typeof require11 < "u")
    return require11.apply(this, arguments);
  throw Error('Dynamic require of "' + r2 + '" is not supported');
});
var B4 = (r2, o6) => () => (o6 || r2((o6 = { exports: {} }).exports, o6), o6.exports);
var g7 = (r2, o6) => {
  for (var e in o6)
    l5(r2, e, { get: o6[e], enumerable: true });
};
var u7 = (r2, o6, e, t) => {
  if (o6 && typeof o6 == "object" || typeof o6 == "function")
    for (let f7 of x6(o6))
      !v7.call(r2, f7) && f7 !== e && l5(r2, f7, { get: () => o6[f7], enumerable: !(t = _6(o6, f7)) || t.enumerable });
  return r2;
};
var a4 = (r2, o6, e) => (u7(r2, o6, "default"), e && u7(e, o6, "default"));
var c7 = (r2, o6, e) => (e = r2 != null ? y4(b4(r2)) : {}, u7(o6 || !r2 || !r2.__esModule ? l5(e, "default", { value: r2, enumerable: true }) : e, r2));
var p6 = B4((C8, m16) => {
  "use strict";
  var i6 = 65536, h14 = 4294967295;
  function E8() {
    throw new Error(`Secure random number generation is not supported by this browser.
Use Chrome, Firefox or Internet Explorer 11`);
  }
  var R7 = w5("safe-buffer").Buffer, s10 = __global$.crypto || __global$.msCrypto;
  s10 && s10.getRandomValues ? m16.exports = T4 : m16.exports = E8;
  function T4(r2, o6) {
    if (r2 > h14)
      throw new RangeError("requested too many random bytes");
    var e = R7.allocUnsafe(r2);
    if (r2 > 0)
      if (r2 > i6)
        for (var t = 0; t < r2; t += i6)
          s10.getRandomValues(e.slice(t, t + i6));
      else
        s10.getRandomValues(e);
    return typeof o6 == "function" ? __Process$.nextTick(function() {
      o6(null, e);
    }) : e;
  }
});
var n2 = {};
g7(n2, { default: () => q5 });
var U4 = c7(p6());
a4(n2, c7(p6()));
var { default: d4, ...V4 } = U4;
var q5 = d4 !== void 0 ? d4 : V4;

// https://esm.sh/v135/ethereum-cryptography@0.1.3/denonext/secp256k1.js
var require12 = (n5) => {
  const e = (m16) => typeof m16.default < "u" ? m16.default : m16, c10 = (m16) => Object.assign({}, m16);
  switch (n5) {
    case "secp256k1":
      return e(secp256k1_exports);
    case "randombytes":
      return e(randombytes_exports);
    default:
      throw new Error('module "' + n5 + '" not found');
  }
};
var q6 = Object.create;
var b5 = Object.defineProperty;
var M5 = Object.getOwnPropertyDescriptor;
var O3 = Object.getOwnPropertyNames;
var V5 = Object.getPrototypeOf;
var j5 = Object.prototype.hasOwnProperty;
var w6 = ((e) => typeof require12 < "u" ? require12 : typeof Proxy < "u" ? new Proxy(e, { get: (r2, t) => (typeof require12 < "u" ? require12 : r2)[t] }) : e)(function(e) {
  if (typeof require12 < "u")
    return require12.apply(this, arguments);
  throw Error('Dynamic require of "' + e + '" is not supported');
});
var K4 = (e, r2) => () => (r2 || e((r2 = { exports: {} }).exports, r2), r2.exports);
var I6 = (e, r2) => {
  for (var t in r2)
    b5(e, t, { get: r2[t], enumerable: true });
};
var h7 = (e, r2, t, u13) => {
  if (r2 && typeof r2 == "object" || typeof r2 == "function")
    for (let a11 of O3(r2))
      !j5.call(e, a11) && a11 !== t && b5(e, a11, { get: () => r2[a11], enumerable: !(u13 = M5(r2, a11)) || u13.enumerable });
  return e;
};
var s5 = (e, r2, t) => (h7(e, r2, "default"), t && h7(t, r2, "default"));
var P5 = (e, r2, t) => (t = e != null ? q6(V5(e)) : {}, h7(r2 || !e || !e.__esModule ? b5(t, "default", { value: e, enumerable: true }) : t, e));
var g8 = K4((d9) => {
  "use strict";
  Object.defineProperty(d9, "__esModule", { value: true });
  var S9 = w6("randombytes");
  function T4(e) {
    return new Promise(function(r2, t) {
      S9(e, function(u13, a11) {
        if (u13) {
          t(u13);
          return;
        }
        r2(a11);
      });
    });
  }
  d9.getRandomBytes = T4;
  function A11(e) {
    return S9(e);
  }
  d9.getRandomBytesSync = A11;
});
var m7 = K4((f7) => {
  "use strict";
  var C8 = f7 && f7.__awaiter || function(e, r2, t, u13) {
    function a11(n5) {
      return n5 instanceof t ? n5 : new t(function(o6) {
        o6(n5);
      });
    }
    return new (t || (t = Promise))(function(n5, o6) {
      function y10(c10) {
        try {
          i6(u13.next(c10));
        } catch (_12) {
          o6(_12);
        }
      }
      function v14(c10) {
        try {
          i6(u13.throw(c10));
        } catch (_12) {
          o6(_12);
        }
      }
      function i6(c10) {
        c10.done ? n5(c10.value) : a11(c10.value).then(y10, v14);
      }
      i6((u13 = u13.apply(e, r2 || [])).next());
    });
  }, G5 = f7 && f7.__generator || function(e, r2) {
    var t = { label: 0, sent: function() {
      if (n5[0] & 1)
        throw n5[1];
      return n5[1];
    }, trys: [], ops: [] }, u13, a11, n5, o6;
    return o6 = { next: y10(0), throw: y10(1), return: y10(2) }, typeof Symbol == "function" && (o6[Symbol.iterator] = function() {
      return this;
    }), o6;
    function y10(i6) {
      return function(c10) {
        return v14([i6, c10]);
      };
    }
    function v14(i6) {
      if (u13)
        throw new TypeError("Generator is already executing.");
      for (; t; )
        try {
          if (u13 = 1, a11 && (n5 = i6[0] & 2 ? a11.return : i6[0] ? a11.throw || ((n5 = a11.return) && n5.call(a11), 0) : a11.next) && !(n5 = n5.call(a11, i6[1])).done)
            return n5;
          switch (a11 = 0, n5 && (i6 = [i6[0] & 2, n5.value]), i6[0]) {
            case 0:
            case 1:
              n5 = i6;
              break;
            case 4:
              return t.label++, { value: i6[1], done: false };
            case 5:
              t.label++, a11 = i6[1], i6 = [0];
              continue;
            case 7:
              i6 = t.ops.pop(), t.trys.pop();
              continue;
            default:
              if (n5 = t.trys, !(n5 = n5.length > 0 && n5[n5.length - 1]) && (i6[0] === 6 || i6[0] === 2)) {
                t = 0;
                continue;
              }
              if (i6[0] === 3 && (!n5 || i6[1] > n5[0] && i6[1] < n5[3])) {
                t.label = i6[1];
                break;
              }
              if (i6[0] === 6 && t.label < n5[1]) {
                t.label = n5[1], n5 = i6;
                break;
              }
              if (n5 && t.label < n5[2]) {
                t.label = n5[2], t.ops.push(i6);
                break;
              }
              n5[2] && t.ops.pop(), t.trys.pop();
              continue;
          }
          i6 = r2.call(e, t);
        } catch (c10) {
          i6 = [6, c10], a11 = 0;
        } finally {
          u13 = n5 = 0;
        }
      if (i6[0] & 5)
        throw i6[1];
      return { value: i6[0] ? i6[1] : void 0, done: true };
    }
  };
  function Y4(e) {
    for (var r2 in e)
      f7.hasOwnProperty(r2) || (f7[r2] = e[r2]);
  }
  Object.defineProperty(f7, "__esModule", { value: true });
  var R7 = w6("secp256k1"), B9 = g8(), k8 = 32;
  function Z3() {
    return C8(this, void 0, void 0, function() {
      var e;
      return G5(this, function(r2) {
        switch (r2.label) {
          case 0:
            return [4, B9.getRandomBytes(k8)];
          case 1:
            return e = r2.sent(), R7.privateKeyVerify(e) ? [2, e] : [3, 0];
          case 2:
            return [2];
        }
      });
    });
  }
  f7.createPrivateKey = Z3;
  function p12() {
    for (; ; ) {
      var e = B9.getRandomBytesSync(k8);
      if (R7.privateKeyVerify(e))
        return e;
    }
  }
  f7.createPrivateKeySync = p12;
  Y4(w6("secp256k1"));
});
var l6 = {};
I6(l6, { __esModule: () => z4, createPrivateKey: () => D2, createPrivateKeySync: () => F4, default: () => J2 });
var E5 = P5(m7());
s5(l6, P5(m7()));
var { __esModule: z4, createPrivateKey: D2, createPrivateKeySync: F4 } = E5;
var { default: x7, ...H4 } = E5;
var J2 = x7 !== void 0 ? x7 : H4;

// https://esm.sh/v135/ethereum-cryptography@0.1.3/denonext/keccak.js
var keccak_exports2 = {};
__export(keccak_exports2, {
  __esModule: () => O5,
  default: () => z5,
  keccak224: () => P7,
  keccak256: () => g10,
  keccak384: () => B5,
  keccak512: () => K5
});
import { Buffer as __Buffer$3 } from "node:buffer";

// https://esm.sh/v135/keccak@3.0.4/denonext/keccak.mjs
var keccak_exports = {};
__export(keccak_exports, {
  default: () => Gi
});
import { Buffer as __Buffer$2 } from "node:buffer";

// https://esm.sh/v135/readable-stream@3.6.2/denonext/readable-stream.mjs
var readable_stream_exports = {};
__export(readable_stream_exports, {
  Duplex: () => Oi,
  PassThrough: () => Li2,
  Readable: () => Mi2,
  Stream: () => Ti,
  Transform: () => Ai3,
  Writable: () => mi,
  default: () => Ni,
  finished: () => Pi,
  pipeline: () => Di
});
import __Process$2 from "node:process";

// https://esm.sh/v135/util-deprecate@1.0.2/denonext/util-deprecate.mjs
var util_deprecate_exports = {};
__export(util_deprecate_exports, {
  default: () => y5
});
var __global$2 = globalThis || (typeof window !== "undefined" ? window : self);
var _7 = Object.create;
var u8 = Object.defineProperty;
var w7 = Object.getOwnPropertyDescriptor;
var g9 = Object.getOwnPropertyNames;
var h8 = Object.getPrototypeOf;
var m8 = Object.prototype.hasOwnProperty;
var v8 = (r2, e) => () => (e || r2((e = { exports: {} }).exports, e), e.exports);
var x8 = (r2, e) => {
  for (var t in e)
    u8(r2, t, { get: e[t], enumerable: true });
};
var f4 = (r2, e, t, l11) => {
  if (e && typeof e == "object" || typeof e == "function")
    for (let n5 of g9(e))
      !m8.call(r2, n5) && n5 !== t && u8(r2, n5, { get: () => e[n5], enumerable: !(l11 = w7(e, n5)) || l11.enumerable });
  return r2;
};
var a5 = (r2, e, t) => (f4(r2, e, "default"), t && f4(t, e, "default"));
var s6 = (r2, e, t) => (t = r2 != null ? _7(h8(r2)) : {}, f4(e || !r2 || !r2.__esModule ? u8(t, "default", { value: r2, enumerable: true }) : t, r2));
var i3 = v8((E8, p12) => {
  p12.exports = D9;
  function D9(r2, e) {
    if (c10("noDeprecation"))
      return r2;
    var t = false;
    function l11() {
      if (!t) {
        if (c10("throwDeprecation"))
          throw new Error(e);
        c10("traceDeprecation") ? console.trace(e) : console.warn(e), t = true;
      }
      return r2.apply(this, arguments);
    }
    return l11;
  }
  function c10(r2) {
    try {
      if (!__global$2.localStorage)
        return false;
    } catch {
      return false;
    }
    var e = __global$2.localStorage[r2];
    return e == null ? false : String(e).toLowerCase() === "true";
  }
});
var o5 = {};
x8(o5, { default: () => y5 });
var S4 = s6(i3());
a5(o5, s6(i3()));
var { default: d5, ...b6 } = S4;
var y5 = d5 !== void 0 ? d5 : b6;

// https://esm.sh/v135/readable-stream@3.6.2/denonext/readable-stream.mjs
import * as __4$ from "node:buffer";
import * as __6$ from "node:events";
import * as __7$ from "node:events";
import * as __8$ from "node:buffer";
import * as __9$ from "node:util";
import * as __b$ from "node:string_decoder";
import * as __c$ from "node:buffer";
import * as __d$ from "node:util";
var __global$3 = globalThis || (typeof window !== "undefined" ? window : self);
var require13 = (n5) => {
  const e = (m16) => typeof m16.default < "u" ? m16.default : m16, c10 = (m16) => Object.assign({}, m16);
  switch (n5) {
    case "inherits":
      return e(inherits_exports);
    case "util-deprecate":
      return e(util_deprecate_exports);
    case "buffer":
      return e(__4$);
    case "events":
      return e(__6$);
    case "util":
      return e(__9$);
    case "string_decoder":
      return e(__b$);
    default:
      throw new Error('module "' + n5 + '" not found');
  }
};
var qt = Object.create;
var ue = Object.defineProperty;
var Nt2 = Object.getOwnPropertyDescriptor;
var Ct = Object.getOwnPropertyNames;
var jt = Object.getPrototypeOf;
var xt = Object.prototype.hasOwnProperty;
var h9 = ((e) => typeof require13 < "u" ? require13 : typeof Proxy < "u" ? new Proxy(e, { get: (t, r2) => (typeof require13 < "u" ? require13 : t)[r2] }) : e)(function(e) {
  if (typeof require13 < "u")
    return require13.apply(this, arguments);
  throw Error('Dynamic require of "' + e + '" is not supported');
});
var c8 = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
var It2 = (e, t) => {
  for (var r2 in t)
    ue(e, r2, { get: t[r2], enumerable: true });
};
var le = (e, t, r2, i6) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let n5 of Ct(t))
      !xt.call(e, n5) && n5 !== r2 && ue(e, n5, { get: () => t[n5], enumerable: !(i6 = Nt2(t, n5)) || i6.enumerable });
  return e;
};
var L4 = (e, t, r2) => (le(e, t, "default"), r2 && le(r2, t, "default"));
var Ce = (e, t, r2) => (r2 = e != null ? qt(jt(e)) : {}, le(t || !e || !e.__esModule ? ue(r2, "default", { value: e, enumerable: true }) : r2, e));
var se = c8((ji2, je) => {
  je.exports = h9("events").EventEmitter;
});
var Be2 = c8((xi4, Ue2) => {
  "use strict";
  function xe2(e, t) {
    var r2 = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i6 = Object.getOwnPropertySymbols(e);
      t && (i6 = i6.filter(function(n5) {
        return Object.getOwnPropertyDescriptor(e, n5).enumerable;
      })), r2.push.apply(r2, i6);
    }
    return r2;
  }
  function Ie2(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r2 = arguments[t] != null ? arguments[t] : {};
      t % 2 ? xe2(Object(r2), true).forEach(function(i6) {
        kt3(e, i6, r2[i6]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r2)) : xe2(Object(r2)).forEach(function(i6) {
        Object.defineProperty(e, i6, Object.getOwnPropertyDescriptor(r2, i6));
      });
    }
    return e;
  }
  function kt3(e, t, r2) {
    return t = We(t), t in e ? Object.defineProperty(e, t, { value: r2, enumerable: true, configurable: true, writable: true }) : e[t] = r2, e;
  }
  function Wt2(e, t) {
    if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function");
  }
  function ke2(e, t) {
    for (var r2 = 0; r2 < t.length; r2++) {
      var i6 = t[r2];
      i6.enumerable = i6.enumerable || false, i6.configurable = true, "value" in i6 && (i6.writable = true), Object.defineProperty(e, We(i6.key), i6);
    }
  }
  function Ut3(e, t, r2) {
    return t && ke2(e.prototype, t), r2 && ke2(e, r2), Object.defineProperty(e, "prototype", { writable: false }), e;
  }
  function We(e) {
    var t = Bt2(e, "string");
    return typeof t == "symbol" ? t : String(t);
  }
  function Bt2(e, t) {
    if (typeof e != "object" || e === null)
      return e;
    var r2 = e[Symbol.toPrimitive];
    if (r2 !== void 0) {
      var i6 = r2.call(e, t || "default");
      if (typeof i6 != "object")
        return i6;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (t === "string" ? String : Number)(e);
  }
  var Ft2 = h9("buffer"), $2 = Ft2.Buffer, Ht3 = h9("util"), de = Ht3.inspect, Gt3 = de && de.custom || "inspect";
  function Vt2(e, t, r2) {
    $2.prototype.copy.call(e, t, r2);
  }
  Ue2.exports = function() {
    function e() {
      Wt2(this, e), this.head = null, this.tail = null, this.length = 0;
    }
    return Ut3(e, [{ key: "push", value: function(r2) {
      var i6 = { data: r2, next: null };
      this.length > 0 ? this.tail.next = i6 : this.head = i6, this.tail = i6, ++this.length;
    } }, { key: "unshift", value: function(r2) {
      var i6 = { data: r2, next: this.head };
      this.length === 0 && (this.tail = i6), this.head = i6, ++this.length;
    } }, { key: "shift", value: function() {
      if (this.length !== 0) {
        var r2 = this.head.data;
        return this.length === 1 ? this.head = this.tail = null : this.head = this.head.next, --this.length, r2;
      }
    } }, { key: "clear", value: function() {
      this.head = this.tail = null, this.length = 0;
    } }, { key: "join", value: function(r2) {
      if (this.length === 0)
        return "";
      for (var i6 = this.head, n5 = "" + i6.data; i6 = i6.next; )
        n5 += r2 + i6.data;
      return n5;
    } }, { key: "concat", value: function(r2) {
      if (this.length === 0)
        return $2.alloc(0);
      for (var i6 = $2.allocUnsafe(r2 >>> 0), n5 = this.head, a11 = 0; n5; )
        Vt2(n5.data, i6, a11), a11 += n5.data.length, n5 = n5.next;
      return i6;
    } }, { key: "consume", value: function(r2, i6) {
      var n5;
      return r2 < this.head.data.length ? (n5 = this.head.data.slice(0, r2), this.head.data = this.head.data.slice(r2)) : r2 === this.head.data.length ? n5 = this.shift() : n5 = i6 ? this._getString(r2) : this._getBuffer(r2), n5;
    } }, { key: "first", value: function() {
      return this.head.data;
    } }, { key: "_getString", value: function(r2) {
      var i6 = this.head, n5 = 1, a11 = i6.data;
      for (r2 -= a11.length; i6 = i6.next; ) {
        var f7 = i6.data, o6 = r2 > f7.length ? f7.length : r2;
        if (o6 === f7.length ? a11 += f7 : a11 += f7.slice(0, r2), r2 -= o6, r2 === 0) {
          o6 === f7.length ? (++n5, i6.next ? this.head = i6.next : this.head = this.tail = null) : (this.head = i6, i6.data = f7.slice(o6));
          break;
        }
        ++n5;
      }
      return this.length -= n5, a11;
    } }, { key: "_getBuffer", value: function(r2) {
      var i6 = $2.allocUnsafe(r2), n5 = this.head, a11 = 1;
      for (n5.data.copy(i6), r2 -= n5.data.length; n5 = n5.next; ) {
        var f7 = n5.data, o6 = r2 > f7.length ? f7.length : r2;
        if (f7.copy(i6, i6.length - r2, 0, o6), r2 -= o6, r2 === 0) {
          o6 === f7.length ? (++a11, n5.next ? this.head = n5.next : this.head = this.tail = null) : (this.head = n5, n5.data = f7.slice(o6));
          break;
        }
        ++a11;
      }
      return this.length -= a11, i6;
    } }, { key: Gt3, value: function(r2, i6) {
      return de(this, Ie2(Ie2({}, i6), {}, { depth: 0, customInspect: false }));
    } }]), e;
  }();
});
var ce = c8((Ii, He2) => {
  "use strict";
  function Yt2(e, t) {
    var r2 = this, i6 = this._readableState && this._readableState.destroyed, n5 = this._writableState && this._writableState.destroyed;
    return i6 || n5 ? (t ? t(e) : e && (this._writableState ? this._writableState.errorEmitted || (this._writableState.errorEmitted = true, __Process$2.nextTick(he2, this, e)) : __Process$2.nextTick(he2, this, e)), this) : (this._readableState && (this._readableState.destroyed = true), this._writableState && (this._writableState.destroyed = true), this._destroy(e || null, function(a11) {
      !t && a11 ? r2._writableState ? r2._writableState.errorEmitted ? __Process$2.nextTick(X4, r2) : (r2._writableState.errorEmitted = true, __Process$2.nextTick(Fe2, r2, a11)) : __Process$2.nextTick(Fe2, r2, a11) : t ? (__Process$2.nextTick(X4, r2), t(a11)) : __Process$2.nextTick(X4, r2);
    }), this);
  }
  function Fe2(e, t) {
    he2(e, t), X4(e);
  }
  function X4(e) {
    e._writableState && !e._writableState.emitClose || e._readableState && !e._readableState.emitClose || e.emit("close");
  }
  function Kt4() {
    this._readableState && (this._readableState.destroyed = false, this._readableState.reading = false, this._readableState.ended = false, this._readableState.endEmitted = false), this._writableState && (this._writableState.destroyed = false, this._writableState.ended = false, this._writableState.ending = false, this._writableState.finalCalled = false, this._writableState.prefinished = false, this._writableState.finished = false, this._writableState.errorEmitted = false);
  }
  function he2(e, t) {
    e.emit("error", t);
  }
  function $t2(e, t) {
    var r2 = e._readableState, i6 = e._writableState;
    r2 && r2.autoDestroy || i6 && i6.autoDestroy ? e.destroy(t) : e.emit("error", t);
  }
  He2.exports = { destroy: Yt2, undestroy: Kt4, errorOrDestroy: $t2 };
});
var P6 = c8((ki3, Ye2) => {
  "use strict";
  function Xt2(e, t) {
    e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t;
  }
  var Ve = {};
  function b8(e, t, r2) {
    r2 || (r2 = Error);
    function i6(a11, f7, o6) {
      return typeof t == "string" ? t : t(a11, f7, o6);
    }
    var n5 = function(a11) {
      Xt2(f7, a11);
      function f7(o6, d9, p12) {
        return a11.call(this, i6(o6, d9, p12)) || this;
      }
      return f7;
    }(r2);
    n5.prototype.name = r2.name, n5.prototype.code = e, Ve[e] = n5;
  }
  function Ge(e, t) {
    if (Array.isArray(e)) {
      var r2 = e.length;
      return e = e.map(function(i6) {
        return String(i6);
      }), r2 > 2 ? "one of ".concat(t, " ").concat(e.slice(0, r2 - 1).join(", "), ", or ") + e[r2 - 1] : r2 === 2 ? "one of ".concat(t, " ").concat(e[0], " or ").concat(e[1]) : "of ".concat(t, " ").concat(e[0]);
    } else
      return "of ".concat(t, " ").concat(String(e));
  }
  function zt5(e, t, r2) {
    return e.substr(!r2 || r2 < 0 ? 0 : +r2, t.length) === t;
  }
  function Jt2(e, t, r2) {
    return (r2 === void 0 || r2 > e.length) && (r2 = e.length), e.substring(r2 - t.length, r2) === t;
  }
  function Qt2(e, t, r2) {
    return typeof r2 != "number" && (r2 = 0), r2 + t.length > e.length ? false : e.indexOf(t, r2) !== -1;
  }
  b8("ERR_INVALID_OPT_VALUE", function(e, t) {
    return 'The value "' + t + '" is invalid for option "' + e + '"';
  }, TypeError);
  b8("ERR_INVALID_ARG_TYPE", function(e, t, r2) {
    var i6;
    typeof t == "string" && zt5(t, "not ") ? (i6 = "must not be", t = t.replace(/^not /, "")) : i6 = "must be";
    var n5;
    if (Jt2(e, " argument"))
      n5 = "The ".concat(e, " ").concat(i6, " ").concat(Ge(t, "type"));
    else {
      var a11 = Qt2(e, ".") ? "property" : "argument";
      n5 = 'The "'.concat(e, '" ').concat(a11, " ").concat(i6, " ").concat(Ge(t, "type"));
    }
    return n5 += ". Received type ".concat(typeof r2), n5;
  }, TypeError);
  b8("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF");
  b8("ERR_METHOD_NOT_IMPLEMENTED", function(e) {
    return "The " + e + " method is not implemented";
  });
  b8("ERR_STREAM_PREMATURE_CLOSE", "Premature close");
  b8("ERR_STREAM_DESTROYED", function(e) {
    return "Cannot call " + e + " after a stream was destroyed";
  });
  b8("ERR_MULTIPLE_CALLBACK", "Callback called multiple times");
  b8("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable");
  b8("ERR_STREAM_WRITE_AFTER_END", "write after end");
  b8("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError);
  b8("ERR_UNKNOWN_ENCODING", function(e) {
    return "Unknown encoding: " + e;
  }, TypeError);
  b8("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event");
  Ye2.exports.codes = Ve;
});
var pe = c8((Wi, Ke2) => {
  "use strict";
  var Zt2 = P6().codes.ERR_INVALID_OPT_VALUE;
  function er2(e, t, r2) {
    return e.highWaterMark != null ? e.highWaterMark : t ? e[r2] : null;
  }
  function tr(e, t, r2, i6) {
    var n5 = er2(t, i6, r2);
    if (n5 != null) {
      if (!(isFinite(n5) && Math.floor(n5) === n5) || n5 < 0) {
        var a11 = i6 ? r2 : "highWaterMark";
        throw new Zt2(a11, n5);
      }
      return Math.floor(n5);
    }
    return e.objectMode ? 16 : 16 * 1024;
  }
  Ke2.exports = { getHighWaterMark: tr };
});
var ge2 = c8((Ui2, Ze2) => {
  "use strict";
  Ze2.exports = s10;
  function Xe(e) {
    var t = this;
    this.next = null, this.entry = null, this.finish = function() {
      Ar(t, e);
    };
  }
  var I8;
  s10.WritableState = H7;
  var rr = { deprecate: h9("util-deprecate") }, ze = se(), J4 = h9("buffer").Buffer, ir2 = (typeof __global$3 < "u" ? __global$3 : typeof window < "u" ? window : typeof self < "u" ? self : {}).Uint8Array || function() {
  };
  function nr2(e) {
    return J4.from(e);
  }
  function ar2(e) {
    return J4.isBuffer(e) || e instanceof ir2;
  }
  var _e = ce(), fr2 = pe(), or = fr2.getHighWaterMark, S9 = P6().codes, lr = S9.ERR_INVALID_ARG_TYPE, ur2 = S9.ERR_METHOD_NOT_IMPLEMENTED, sr2 = S9.ERR_MULTIPLE_CALLBACK, dr = S9.ERR_STREAM_CANNOT_PIPE, hr2 = S9.ERR_STREAM_DESTROYED, cr = S9.ERR_STREAM_NULL_VALUES, pr = S9.ERR_STREAM_WRITE_AFTER_END, br = S9.ERR_UNKNOWN_ENCODING, k8 = _e.errorOrDestroy;
  h9("inherits")(s10, ze);
  function _r() {
  }
  function H7(e, t, r2) {
    I8 = I8 || D3(), e = e || {}, typeof r2 != "boolean" && (r2 = t instanceof I8), this.objectMode = !!e.objectMode, r2 && (this.objectMode = this.objectMode || !!e.writableObjectMode), this.highWaterMark = or(this, e, "writableHighWaterMark", r2), this.finalCalled = false, this.needDrain = false, this.ending = false, this.ended = false, this.finished = false, this.destroyed = false;
    var i6 = e.decodeStrings === false;
    this.decodeStrings = !i6, this.defaultEncoding = e.defaultEncoding || "utf8", this.length = 0, this.writing = false, this.corked = 0, this.sync = true, this.bufferProcessing = false, this.onwrite = function(n5) {
      Sr(t, n5);
    }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = false, this.errorEmitted = false, this.emitClose = e.emitClose !== false, this.autoDestroy = !!e.autoDestroy, this.bufferedRequestCount = 0, this.corkedRequestsFree = new Xe(this);
  }
  H7.prototype.getBuffer = function() {
    for (var t = this.bufferedRequest, r2 = []; t; )
      r2.push(t), t = t.next;
    return r2;
  };
  (function() {
    try {
      Object.defineProperty(H7.prototype, "buffer", { get: rr.deprecate(function() {
        return this.getBuffer();
      }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003") });
    } catch {
    }
  })();
  var z7;
  typeof Symbol == "function" && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] == "function" ? (z7 = Function.prototype[Symbol.hasInstance], Object.defineProperty(s10, Symbol.hasInstance, { value: function(t) {
    return z7.call(this, t) ? true : this !== s10 ? false : t && t._writableState instanceof H7;
  } })) : z7 = function(t) {
    return t instanceof this;
  };
  function s10(e) {
    I8 = I8 || D3();
    var t = this instanceof I8;
    if (!t && !z7.call(s10, this))
      return new s10(e);
    this._writableState = new H7(e, this, t), this.writable = true, e && (typeof e.write == "function" && (this._write = e.write), typeof e.writev == "function" && (this._writev = e.writev), typeof e.destroy == "function" && (this._destroy = e.destroy), typeof e.final == "function" && (this._final = e.final)), ze.call(this);
  }
  s10.prototype.pipe = function() {
    k8(this, new dr());
  };
  function gr(e, t) {
    var r2 = new pr();
    k8(e, r2), __Process$2.nextTick(t, r2);
  }
  function yr(e, t, r2, i6) {
    var n5;
    return r2 === null ? n5 = new cr() : typeof r2 != "string" && !t.objectMode && (n5 = new lr("chunk", ["string", "Buffer"], r2)), n5 ? (k8(e, n5), __Process$2.nextTick(i6, n5), false) : true;
  }
  s10.prototype.write = function(e, t, r2) {
    var i6 = this._writableState, n5 = false, a11 = !i6.objectMode && ar2(e);
    return a11 && !J4.isBuffer(e) && (e = nr2(e)), typeof t == "function" && (r2 = t, t = null), a11 ? t = "buffer" : t || (t = i6.defaultEncoding), typeof r2 != "function" && (r2 = _r), i6.ending ? gr(this, r2) : (a11 || yr(this, i6, e, r2)) && (i6.pendingcb++, n5 = wr(this, i6, a11, e, t, r2)), n5;
  };
  s10.prototype.cork = function() {
    this._writableState.corked++;
  };
  s10.prototype.uncork = function() {
    var e = this._writableState;
    e.corked && (e.corked--, !e.writing && !e.corked && !e.bufferProcessing && e.bufferedRequest && Je(this, e));
  };
  s10.prototype.setDefaultEncoding = function(t) {
    if (typeof t == "string" && (t = t.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((t + "").toLowerCase()) > -1))
      throw new br(t);
    return this._writableState.defaultEncoding = t, this;
  };
  Object.defineProperty(s10.prototype, "writableBuffer", { enumerable: false, get: function() {
    return this._writableState && this._writableState.getBuffer();
  } });
  function vr(e, t, r2) {
    return !e.objectMode && e.decodeStrings !== false && typeof t == "string" && (t = J4.from(t, r2)), t;
  }
  Object.defineProperty(s10.prototype, "writableHighWaterMark", { enumerable: false, get: function() {
    return this._writableState.highWaterMark;
  } });
  function wr(e, t, r2, i6, n5, a11) {
    if (!r2) {
      var f7 = vr(t, i6, n5);
      i6 !== f7 && (r2 = true, n5 = "buffer", i6 = f7);
    }
    var o6 = t.objectMode ? 1 : i6.length;
    t.length += o6;
    var d9 = t.length < t.highWaterMark;
    if (d9 || (t.needDrain = true), t.writing || t.corked) {
      var p12 = t.lastBufferedRequest;
      t.lastBufferedRequest = { chunk: i6, encoding: n5, isBuf: r2, callback: a11, next: null }, p12 ? p12.next = t.lastBufferedRequest : t.bufferedRequest = t.lastBufferedRequest, t.bufferedRequestCount += 1;
    } else
      be(e, t, false, o6, i6, n5, a11);
    return d9;
  }
  function be(e, t, r2, i6, n5, a11, f7) {
    t.writelen = i6, t.writecb = f7, t.writing = true, t.sync = true, t.destroyed ? t.onwrite(new hr2("write")) : r2 ? e._writev(n5, t.onwrite) : e._write(n5, a11, t.onwrite), t.sync = false;
  }
  function Rr(e, t, r2, i6, n5) {
    --t.pendingcb, r2 ? (__Process$2.nextTick(n5, i6), __Process$2.nextTick(F8, e, t), e._writableState.errorEmitted = true, k8(e, i6)) : (n5(i6), e._writableState.errorEmitted = true, k8(e, i6), F8(e, t));
  }
  function Er(e) {
    e.writing = false, e.writecb = null, e.length -= e.writelen, e.writelen = 0;
  }
  function Sr(e, t) {
    var r2 = e._writableState, i6 = r2.sync, n5 = r2.writecb;
    if (typeof n5 != "function")
      throw new sr2();
    if (Er(r2), t)
      Rr(e, r2, i6, t, n5);
    else {
      var a11 = Qe(r2) || e.destroyed;
      !a11 && !r2.corked && !r2.bufferProcessing && r2.bufferedRequest && Je(e, r2), i6 ? __Process$2.nextTick($e, e, r2, a11, n5) : $e(e, r2, a11, n5);
    }
  }
  function $e(e, t, r2, i6) {
    r2 || Tr(e, t), t.pendingcb--, i6(), F8(e, t);
  }
  function Tr(e, t) {
    t.length === 0 && t.needDrain && (t.needDrain = false, e.emit("drain"));
  }
  function Je(e, t) {
    t.bufferProcessing = true;
    var r2 = t.bufferedRequest;
    if (e._writev && r2 && r2.next) {
      var i6 = t.bufferedRequestCount, n5 = new Array(i6), a11 = t.corkedRequestsFree;
      a11.entry = r2;
      for (var f7 = 0, o6 = true; r2; )
        n5[f7] = r2, r2.isBuf || (o6 = false), r2 = r2.next, f7 += 1;
      n5.allBuffers = o6, be(e, t, true, t.length, n5, "", a11.finish), t.pendingcb++, t.lastBufferedRequest = null, a11.next ? (t.corkedRequestsFree = a11.next, a11.next = null) : t.corkedRequestsFree = new Xe(t), t.bufferedRequestCount = 0;
    } else {
      for (; r2; ) {
        var d9 = r2.chunk, p12 = r2.encoding, v14 = r2.callback, w13 = t.objectMode ? 1 : d9.length;
        if (be(e, t, false, w13, d9, p12, v14), r2 = r2.next, t.bufferedRequestCount--, t.writing)
          break;
      }
      r2 === null && (t.lastBufferedRequest = null);
    }
    t.bufferedRequest = r2, t.bufferProcessing = false;
  }
  s10.prototype._write = function(e, t, r2) {
    r2(new ur2("_write()"));
  };
  s10.prototype._writev = null;
  s10.prototype.end = function(e, t, r2) {
    var i6 = this._writableState;
    return typeof e == "function" ? (r2 = e, e = null, t = null) : typeof t == "function" && (r2 = t, t = null), e != null && this.write(e, t), i6.corked && (i6.corked = 1, this.uncork()), i6.ending || Or(this, i6, r2), this;
  };
  Object.defineProperty(s10.prototype, "writableLength", { enumerable: false, get: function() {
    return this._writableState.length;
  } });
  function Qe(e) {
    return e.ending && e.length === 0 && e.bufferedRequest === null && !e.finished && !e.writing;
  }
  function Mr(e, t) {
    e._final(function(r2) {
      t.pendingcb--, r2 && k8(e, r2), t.prefinished = true, e.emit("prefinish"), F8(e, t);
    });
  }
  function mr(e, t) {
    !t.prefinished && !t.finalCalled && (typeof e._final == "function" && !t.destroyed ? (t.pendingcb++, t.finalCalled = true, __Process$2.nextTick(Mr, e, t)) : (t.prefinished = true, e.emit("prefinish")));
  }
  function F8(e, t) {
    var r2 = Qe(t);
    if (r2 && (mr(e, t), t.pendingcb === 0 && (t.finished = true, e.emit("finish"), t.autoDestroy))) {
      var i6 = e._readableState;
      (!i6 || i6.autoDestroy && i6.endEmitted) && e.destroy();
    }
    return r2;
  }
  function Or(e, t, r2) {
    t.ending = true, F8(e, t), r2 && (t.finished ? __Process$2.nextTick(r2) : e.once("finish", r2)), t.ended = true, e.writable = false;
  }
  function Ar(e, t, r2) {
    var i6 = e.entry;
    for (e.entry = null; i6; ) {
      var n5 = i6.callback;
      t.pendingcb--, n5(r2), i6 = i6.next;
    }
    t.corkedRequestsFree.next = e;
  }
  Object.defineProperty(s10.prototype, "destroyed", { enumerable: false, get: function() {
    return this._writableState === void 0 ? false : this._writableState.destroyed;
  }, set: function(t) {
    this._writableState && (this._writableState.destroyed = t);
  } });
  s10.prototype.destroy = _e.destroy;
  s10.prototype._undestroy = _e.undestroy;
  s10.prototype._destroy = function(e, t) {
    t(e);
  };
});
var D3 = c8((Bi4, tt) => {
  "use strict";
  var Lr = Object.keys || function(e) {
    var t = [];
    for (var r2 in e)
      t.push(r2);
    return t;
  };
  tt.exports = y10;
  var et = we(), ve = ge2();
  h9("inherits")(y10, et);
  for (ye2 = Lr(ve.prototype), Q3 = 0; Q3 < ye2.length; Q3++)
    Z3 = ye2[Q3], y10.prototype[Z3] || (y10.prototype[Z3] = ve.prototype[Z3]);
  var ye2, Z3, Q3;
  function y10(e) {
    if (!(this instanceof y10))
      return new y10(e);
    et.call(this, e), ve.call(this, e), this.allowHalfOpen = true, e && (e.readable === false && (this.readable = false), e.writable === false && (this.writable = false), e.allowHalfOpen === false && (this.allowHalfOpen = false, this.once("end", Pr)));
  }
  Object.defineProperty(y10.prototype, "writableHighWaterMark", { enumerable: false, get: function() {
    return this._writableState.highWaterMark;
  } });
  Object.defineProperty(y10.prototype, "writableBuffer", { enumerable: false, get: function() {
    return this._writableState && this._writableState.getBuffer();
  } });
  Object.defineProperty(y10.prototype, "writableLength", { enumerable: false, get: function() {
    return this._writableState.length;
  } });
  function Pr() {
    this._writableState.ended || __Process$2.nextTick(Dr, this);
  }
  function Dr(e) {
    e.end();
  }
  Object.defineProperty(y10.prototype, "destroyed", { enumerable: false, get: function() {
    return this._readableState === void 0 || this._writableState === void 0 ? false : this._readableState.destroyed && this._writableState.destroyed;
  }, set: function(t) {
    this._readableState === void 0 || this._writableState === void 0 || (this._readableState.destroyed = t, this._writableState.destroyed = t);
  } });
});
var ee = c8((Fi2, nt) => {
  "use strict";
  var rt = P6().codes.ERR_STREAM_PREMATURE_CLOSE;
  function qr(e) {
    var t = false;
    return function() {
      if (!t) {
        t = true;
        for (var r2 = arguments.length, i6 = new Array(r2), n5 = 0; n5 < r2; n5++)
          i6[n5] = arguments[n5];
        e.apply(this, i6);
      }
    };
  }
  function Nr() {
  }
  function Cr(e) {
    return e.setHeader && typeof e.abort == "function";
  }
  function it(e, t, r2) {
    if (typeof t == "function")
      return it(e, null, t);
    t || (t = {}), r2 = qr(r2 || Nr);
    var i6 = t.readable || t.readable !== false && e.readable, n5 = t.writable || t.writable !== false && e.writable, a11 = function() {
      e.writable || o6();
    }, f7 = e._writableState && e._writableState.finished, o6 = function() {
      n5 = false, f7 = true, i6 || r2.call(e);
    }, d9 = e._readableState && e._readableState.endEmitted, p12 = function() {
      i6 = false, d9 = true, n5 || r2.call(e);
    }, v14 = function(g15) {
      r2.call(e, g15);
    }, w13 = function() {
      var g15;
      if (i6 && !d9)
        return (!e._readableState || !e._readableState.ended) && (g15 = new rt()), r2.call(e, g15);
      if (n5 && !f7)
        return (!e._writableState || !e._writableState.ended) && (g15 = new rt()), r2.call(e, g15);
    }, A11 = function() {
      e.req.on("finish", o6);
    };
    return Cr(e) ? (e.on("complete", o6), e.on("abort", w13), e.req ? A11() : e.on("request", A11)) : n5 && !e._writableState && (e.on("end", a11), e.on("close", a11)), e.on("end", p12), e.on("finish", o6), t.error !== false && e.on("error", v14), e.on("close", w13), function() {
      e.removeListener("complete", o6), e.removeListener("abort", w13), e.removeListener("request", A11), e.req && e.req.removeListener("finish", o6), e.removeListener("end", a11), e.removeListener("close", a11), e.removeListener("finish", o6), e.removeListener("end", p12), e.removeListener("error", v14), e.removeListener("close", w13);
    };
  }
  nt.exports = it;
});
var ft = c8((Hi, at) => {
  "use strict";
  var te2;
  function T4(e, t, r2) {
    return t = jr(t), t in e ? Object.defineProperty(e, t, { value: r2, enumerable: true, configurable: true, writable: true }) : e[t] = r2, e;
  }
  function jr(e) {
    var t = xr(e, "string");
    return typeof t == "symbol" ? t : String(t);
  }
  function xr(e, t) {
    if (typeof e != "object" || e === null)
      return e;
    var r2 = e[Symbol.toPrimitive];
    if (r2 !== void 0) {
      var i6 = r2.call(e, t || "default");
      if (typeof i6 != "object")
        return i6;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (t === "string" ? String : Number)(e);
  }
  var Ir = ee(), M11 = Symbol("lastResolve"), q12 = Symbol("lastReject"), G5 = Symbol("error"), re2 = Symbol("ended"), N5 = Symbol("lastPromise"), Re3 = Symbol("handlePromise"), C8 = Symbol("stream");
  function m16(e, t) {
    return { value: e, done: t };
  }
  function kr(e) {
    var t = e[M11];
    if (t !== null) {
      var r2 = e[C8].read();
      r2 !== null && (e[N5] = null, e[M11] = null, e[q12] = null, t(m16(r2, false)));
    }
  }
  function Wr(e) {
    __Process$2.nextTick(kr, e);
  }
  function Ur(e, t) {
    return function(r2, i6) {
      e.then(function() {
        if (t[re2]) {
          r2(m16(void 0, true));
          return;
        }
        t[Re3](r2, i6);
      }, i6);
    };
  }
  var Br = Object.getPrototypeOf(function() {
  }), Fr = Object.setPrototypeOf((te2 = { get stream() {
    return this[C8];
  }, next: function() {
    var t = this, r2 = this[G5];
    if (r2 !== null)
      return Promise.reject(r2);
    if (this[re2])
      return Promise.resolve(m16(void 0, true));
    if (this[C8].destroyed)
      return new Promise(function(f7, o6) {
        __Process$2.nextTick(function() {
          t[G5] ? o6(t[G5]) : f7(m16(void 0, true));
        });
      });
    var i6 = this[N5], n5;
    if (i6)
      n5 = new Promise(Ur(i6, this));
    else {
      var a11 = this[C8].read();
      if (a11 !== null)
        return Promise.resolve(m16(a11, false));
      n5 = new Promise(this[Re3]);
    }
    return this[N5] = n5, n5;
  } }, T4(te2, Symbol.asyncIterator, function() {
    return this;
  }), T4(te2, "return", function() {
    var t = this;
    return new Promise(function(r2, i6) {
      t[C8].destroy(null, function(n5) {
        if (n5) {
          i6(n5);
          return;
        }
        r2(m16(void 0, true));
      });
    });
  }), te2), Br), Hr = function(t) {
    var r2, i6 = Object.create(Fr, (r2 = {}, T4(r2, C8, { value: t, writable: true }), T4(r2, M11, { value: null, writable: true }), T4(r2, q12, { value: null, writable: true }), T4(r2, G5, { value: null, writable: true }), T4(r2, re2, { value: t._readableState.endEmitted, writable: true }), T4(r2, Re3, { value: function(a11, f7) {
      var o6 = i6[C8].read();
      o6 ? (i6[N5] = null, i6[M11] = null, i6[q12] = null, a11(m16(o6, false))) : (i6[M11] = a11, i6[q12] = f7);
    }, writable: true }), r2));
    return i6[N5] = null, Ir(t, function(n5) {
      if (n5 && n5.code !== "ERR_STREAM_PREMATURE_CLOSE") {
        var a11 = i6[q12];
        a11 !== null && (i6[N5] = null, i6[M11] = null, i6[q12] = null, a11(n5)), i6[G5] = n5;
        return;
      }
      var f7 = i6[M11];
      f7 !== null && (i6[N5] = null, i6[M11] = null, i6[q12] = null, f7(m16(void 0, true))), i6[re2] = true;
    }), t.on("readable", Wr.bind(null, i6)), i6;
  };
  at.exports = Hr;
});
var lt3 = c8((Gi2, ot2) => {
  ot2.exports = function() {
    throw new Error("Readable.from is not available in the browser");
  };
});
var we = c8((Yi, yt) => {
  "use strict";
  yt.exports = u13;
  var W4;
  u13.ReadableState = ht;
  var Vi = h9("events").EventEmitter, dt = function(t, r2) {
    return t.listeners(r2).length;
  }, Y4 = se(), ie2 = h9("buffer").Buffer, Gr = (typeof __global$3 < "u" ? __global$3 : typeof window < "u" ? window : typeof self < "u" ? self : {}).Uint8Array || function() {
  };
  function Vr(e) {
    return ie2.from(e);
  }
  function Yr(e) {
    return ie2.isBuffer(e) || e instanceof Gr;
  }
  var Ee3 = h9("util"), l11;
  Ee3 && Ee3.debuglog ? l11 = Ee3.debuglog("stream") : l11 = function() {
  };
  var Kr = Be2(), Le2 = ce(), $r = pe(), Xr = $r.getHighWaterMark, ne2 = P6().codes, zr = ne2.ERR_INVALID_ARG_TYPE, Jr = ne2.ERR_STREAM_PUSH_AFTER_EOF, Qr = ne2.ERR_METHOD_NOT_IMPLEMENTED, Zr = ne2.ERR_STREAM_UNSHIFT_AFTER_END_EVENT, U5, Se, Te2;
  h9("inherits")(u13, Y4);
  var V6 = Le2.errorOrDestroy, Me = ["error", "close", "destroy", "pause", "resume"];
  function ei(e, t, r2) {
    if (typeof e.prependListener == "function")
      return e.prependListener(t, r2);
    !e._events || !e._events[t] ? e.on(t, r2) : Array.isArray(e._events[t]) ? e._events[t].unshift(r2) : e._events[t] = [r2, e._events[t]];
  }
  function ht(e, t, r2) {
    W4 = W4 || D3(), e = e || {}, typeof r2 != "boolean" && (r2 = t instanceof W4), this.objectMode = !!e.objectMode, r2 && (this.objectMode = this.objectMode || !!e.readableObjectMode), this.highWaterMark = Xr(this, e, "readableHighWaterMark", r2), this.buffer = new Kr(), this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = false, this.endEmitted = false, this.reading = false, this.sync = true, this.needReadable = false, this.emittedReadable = false, this.readableListening = false, this.resumeScheduled = false, this.paused = true, this.emitClose = e.emitClose !== false, this.autoDestroy = !!e.autoDestroy, this.destroyed = false, this.defaultEncoding = e.defaultEncoding || "utf8", this.awaitDrain = 0, this.readingMore = false, this.decoder = null, this.encoding = null, e.encoding && (U5 || (U5 = h9("string_decoder").StringDecoder), this.decoder = new U5(e.encoding), this.encoding = e.encoding);
  }
  function u13(e) {
    if (W4 = W4 || D3(), !(this instanceof u13))
      return new u13(e);
    var t = this instanceof W4;
    this._readableState = new ht(e, this, t), this.readable = true, e && (typeof e.read == "function" && (this._read = e.read), typeof e.destroy == "function" && (this._destroy = e.destroy)), Y4.call(this);
  }
  Object.defineProperty(u13.prototype, "destroyed", { enumerable: false, get: function() {
    return this._readableState === void 0 ? false : this._readableState.destroyed;
  }, set: function(t) {
    this._readableState && (this._readableState.destroyed = t);
  } });
  u13.prototype.destroy = Le2.destroy;
  u13.prototype._undestroy = Le2.undestroy;
  u13.prototype._destroy = function(e, t) {
    t(e);
  };
  u13.prototype.push = function(e, t) {
    var r2 = this._readableState, i6;
    return r2.objectMode ? i6 = true : typeof e == "string" && (t = t || r2.defaultEncoding, t !== r2.encoding && (e = ie2.from(e, t), t = ""), i6 = true), ct(this, e, t, false, i6);
  };
  u13.prototype.unshift = function(e) {
    return ct(this, e, null, true, false);
  };
  function ct(e, t, r2, i6, n5) {
    l11("readableAddChunk", t);
    var a11 = e._readableState;
    if (t === null)
      a11.reading = false, ii(e, a11);
    else {
      var f7;
      if (n5 || (f7 = ti(a11, t)), f7)
        V6(e, f7);
      else if (a11.objectMode || t && t.length > 0)
        if (typeof t != "string" && !a11.objectMode && Object.getPrototypeOf(t) !== ie2.prototype && (t = Vr(t)), i6)
          a11.endEmitted ? V6(e, new Zr()) : me2(e, a11, t, true);
        else if (a11.ended)
          V6(e, new Jr());
        else {
          if (a11.destroyed)
            return false;
          a11.reading = false, a11.decoder && !r2 ? (t = a11.decoder.write(t), a11.objectMode || t.length !== 0 ? me2(e, a11, t, false) : Ae(e, a11)) : me2(e, a11, t, false);
        }
      else
        i6 || (a11.reading = false, Ae(e, a11));
    }
    return !a11.ended && (a11.length < a11.highWaterMark || a11.length === 0);
  }
  function me2(e, t, r2, i6) {
    t.flowing && t.length === 0 && !t.sync ? (t.awaitDrain = 0, e.emit("data", r2)) : (t.length += t.objectMode ? 1 : r2.length, i6 ? t.buffer.unshift(r2) : t.buffer.push(r2), t.needReadable && ae(e)), Ae(e, t);
  }
  function ti(e, t) {
    var r2;
    return !Yr(t) && typeof t != "string" && t !== void 0 && !e.objectMode && (r2 = new zr("chunk", ["string", "Buffer", "Uint8Array"], t)), r2;
  }
  u13.prototype.isPaused = function() {
    return this._readableState.flowing === false;
  };
  u13.prototype.setEncoding = function(e) {
    U5 || (U5 = h9("string_decoder").StringDecoder);
    var t = new U5(e);
    this._readableState.decoder = t, this._readableState.encoding = this._readableState.decoder.encoding;
    for (var r2 = this._readableState.buffer.head, i6 = ""; r2 !== null; )
      i6 += t.write(r2.data), r2 = r2.next;
    return this._readableState.buffer.clear(), i6 !== "" && this._readableState.buffer.push(i6), this._readableState.length = i6.length, this;
  };
  var ut = 1073741824;
  function ri(e) {
    return e >= ut ? e = ut : (e--, e |= e >>> 1, e |= e >>> 2, e |= e >>> 4, e |= e >>> 8, e |= e >>> 16, e++), e;
  }
  function st2(e, t) {
    return e <= 0 || t.length === 0 && t.ended ? 0 : t.objectMode ? 1 : e !== e ? t.flowing && t.length ? t.buffer.head.data.length : t.length : (e > t.highWaterMark && (t.highWaterMark = ri(e)), e <= t.length ? e : t.ended ? t.length : (t.needReadable = true, 0));
  }
  u13.prototype.read = function(e) {
    l11("read", e), e = parseInt(e, 10);
    var t = this._readableState, r2 = e;
    if (e !== 0 && (t.emittedReadable = false), e === 0 && t.needReadable && ((t.highWaterMark !== 0 ? t.length >= t.highWaterMark : t.length > 0) || t.ended))
      return l11("read: emitReadable", t.length, t.ended), t.length === 0 && t.ended ? Oe2(this) : ae(this), null;
    if (e = st2(e, t), e === 0 && t.ended)
      return t.length === 0 && Oe2(this), null;
    var i6 = t.needReadable;
    l11("need readable", i6), (t.length === 0 || t.length - e < t.highWaterMark) && (i6 = true, l11("length less than watermark", i6)), t.ended || t.reading ? (i6 = false, l11("reading or ended", i6)) : i6 && (l11("do read"), t.reading = true, t.sync = true, t.length === 0 && (t.needReadable = true), this._read(t.highWaterMark), t.sync = false, t.reading || (e = st2(r2, t)));
    var n5;
    return e > 0 ? n5 = _t2(e, t) : n5 = null, n5 === null ? (t.needReadable = t.length <= t.highWaterMark, e = 0) : (t.length -= e, t.awaitDrain = 0), t.length === 0 && (t.ended || (t.needReadable = true), r2 !== e && t.ended && Oe2(this)), n5 !== null && this.emit("data", n5), n5;
  };
  function ii(e, t) {
    if (l11("onEofChunk"), !t.ended) {
      if (t.decoder) {
        var r2 = t.decoder.end();
        r2 && r2.length && (t.buffer.push(r2), t.length += t.objectMode ? 1 : r2.length);
      }
      t.ended = true, t.sync ? ae(e) : (t.needReadable = false, t.emittedReadable || (t.emittedReadable = true, pt2(e)));
    }
  }
  function ae(e) {
    var t = e._readableState;
    l11("emitReadable", t.needReadable, t.emittedReadable), t.needReadable = false, t.emittedReadable || (l11("emitReadable", t.flowing), t.emittedReadable = true, __Process$2.nextTick(pt2, e));
  }
  function pt2(e) {
    var t = e._readableState;
    l11("emitReadable_", t.destroyed, t.length, t.ended), !t.destroyed && (t.length || t.ended) && (e.emit("readable"), t.emittedReadable = false), t.needReadable = !t.flowing && !t.ended && t.length <= t.highWaterMark, Pe(e);
  }
  function Ae(e, t) {
    t.readingMore || (t.readingMore = true, __Process$2.nextTick(ni, e, t));
  }
  function ni(e, t) {
    for (; !t.reading && !t.ended && (t.length < t.highWaterMark || t.flowing && t.length === 0); ) {
      var r2 = t.length;
      if (l11("maybeReadMore read 0"), e.read(0), r2 === t.length)
        break;
    }
    t.readingMore = false;
  }
  u13.prototype._read = function(e) {
    V6(this, new Qr("_read()"));
  };
  u13.prototype.pipe = function(e, t) {
    var r2 = this, i6 = this._readableState;
    switch (i6.pipesCount) {
      case 0:
        i6.pipes = e;
        break;
      case 1:
        i6.pipes = [i6.pipes, e];
        break;
      default:
        i6.pipes.push(e);
        break;
    }
    i6.pipesCount += 1, l11("pipe count=%d opts=%j", i6.pipesCount, t);
    var n5 = (!t || t.end !== false) && e !== __Process$2.stdout && e !== __Process$2.stderr, a11 = n5 ? o6 : B9;
    i6.endEmitted ? __Process$2.nextTick(a11) : r2.once("end", a11), e.on("unpipe", f7);
    function f7(j7, x13) {
      l11("onunpipe"), j7 === r2 && x13 && x13.hasUnpiped === false && (x13.hasUnpiped = true, v14());
    }
    function o6() {
      l11("onend"), e.end();
    }
    var d9 = ai(r2);
    e.on("drain", d9);
    var p12 = false;
    function v14() {
      l11("cleanup"), e.removeListener("close", R7), e.removeListener("finish", g15), e.removeListener("drain", d9), e.removeListener("error", A11), e.removeListener("unpipe", f7), r2.removeListener("end", o6), r2.removeListener("end", B9), r2.removeListener("data", w13), p12 = true, i6.awaitDrain && (!e._writableState || e._writableState.needDrain) && d9();
    }
    r2.on("data", w13);
    function w13(j7) {
      l11("ondata");
      var x13 = e.write(j7);
      l11("dest.write", x13), x13 === false && ((i6.pipesCount === 1 && i6.pipes === e || i6.pipesCount > 1 && gt(i6.pipes, e) !== -1) && !p12 && (l11("false write response, pause", i6.awaitDrain), i6.awaitDrain++), r2.pause());
    }
    function A11(j7) {
      l11("onerror", j7), B9(), e.removeListener("error", A11), dt(e, "error") === 0 && V6(e, j7);
    }
    ei(e, "error", A11);
    function R7() {
      e.removeListener("finish", g15), B9();
    }
    e.once("close", R7);
    function g15() {
      l11("onfinish"), e.removeListener("close", R7), B9();
    }
    e.once("finish", g15);
    function B9() {
      l11("unpipe"), r2.unpipe(e);
    }
    return e.emit("pipe", r2), i6.flowing || (l11("pipe resume"), r2.resume()), e;
  };
  function ai(e) {
    return function() {
      var r2 = e._readableState;
      l11("pipeOnDrain", r2.awaitDrain), r2.awaitDrain && r2.awaitDrain--, r2.awaitDrain === 0 && dt(e, "data") && (r2.flowing = true, Pe(e));
    };
  }
  u13.prototype.unpipe = function(e) {
    var t = this._readableState, r2 = { hasUnpiped: false };
    if (t.pipesCount === 0)
      return this;
    if (t.pipesCount === 1)
      return e && e !== t.pipes ? this : (e || (e = t.pipes), t.pipes = null, t.pipesCount = 0, t.flowing = false, e && e.emit("unpipe", this, r2), this);
    if (!e) {
      var i6 = t.pipes, n5 = t.pipesCount;
      t.pipes = null, t.pipesCount = 0, t.flowing = false;
      for (var a11 = 0; a11 < n5; a11++)
        i6[a11].emit("unpipe", this, { hasUnpiped: false });
      return this;
    }
    var f7 = gt(t.pipes, e);
    return f7 === -1 ? this : (t.pipes.splice(f7, 1), t.pipesCount -= 1, t.pipesCount === 1 && (t.pipes = t.pipes[0]), e.emit("unpipe", this, r2), this);
  };
  u13.prototype.on = function(e, t) {
    var r2 = Y4.prototype.on.call(this, e, t), i6 = this._readableState;
    return e === "data" ? (i6.readableListening = this.listenerCount("readable") > 0, i6.flowing !== false && this.resume()) : e === "readable" && !i6.endEmitted && !i6.readableListening && (i6.readableListening = i6.needReadable = true, i6.flowing = false, i6.emittedReadable = false, l11("on readable", i6.length, i6.reading), i6.length ? ae(this) : i6.reading || __Process$2.nextTick(fi2, this)), r2;
  };
  u13.prototype.addListener = u13.prototype.on;
  u13.prototype.removeListener = function(e, t) {
    var r2 = Y4.prototype.removeListener.call(this, e, t);
    return e === "readable" && __Process$2.nextTick(bt2, this), r2;
  };
  u13.prototype.removeAllListeners = function(e) {
    var t = Y4.prototype.removeAllListeners.apply(this, arguments);
    return (e === "readable" || e === void 0) && __Process$2.nextTick(bt2, this), t;
  };
  function bt2(e) {
    var t = e._readableState;
    t.readableListening = e.listenerCount("readable") > 0, t.resumeScheduled && !t.paused ? t.flowing = true : e.listenerCount("data") > 0 && e.resume();
  }
  function fi2(e) {
    l11("readable nexttick read 0"), e.read(0);
  }
  u13.prototype.resume = function() {
    var e = this._readableState;
    return e.flowing || (l11("resume"), e.flowing = !e.readableListening, oi(this, e)), e.paused = false, this;
  };
  function oi(e, t) {
    t.resumeScheduled || (t.resumeScheduled = true, __Process$2.nextTick(li2, e, t));
  }
  function li2(e, t) {
    l11("resume", t.reading), t.reading || e.read(0), t.resumeScheduled = false, e.emit("resume"), Pe(e), t.flowing && !t.reading && e.read(0);
  }
  u13.prototype.pause = function() {
    return l11("call pause flowing=%j", this._readableState.flowing), this._readableState.flowing !== false && (l11("pause"), this._readableState.flowing = false, this.emit("pause")), this._readableState.paused = true, this;
  };
  function Pe(e) {
    var t = e._readableState;
    for (l11("flow", t.flowing); t.flowing && e.read() !== null; )
      ;
  }
  u13.prototype.wrap = function(e) {
    var t = this, r2 = this._readableState, i6 = false;
    e.on("end", function() {
      if (l11("wrapped end"), r2.decoder && !r2.ended) {
        var f7 = r2.decoder.end();
        f7 && f7.length && t.push(f7);
      }
      t.push(null);
    }), e.on("data", function(f7) {
      if (l11("wrapped data"), r2.decoder && (f7 = r2.decoder.write(f7)), !(r2.objectMode && f7 == null) && !(!r2.objectMode && (!f7 || !f7.length))) {
        var o6 = t.push(f7);
        o6 || (i6 = true, e.pause());
      }
    });
    for (var n5 in e)
      this[n5] === void 0 && typeof e[n5] == "function" && (this[n5] = function(o6) {
        return function() {
          return e[o6].apply(e, arguments);
        };
      }(n5));
    for (var a11 = 0; a11 < Me.length; a11++)
      e.on(Me[a11], this.emit.bind(this, Me[a11]));
    return this._read = function(f7) {
      l11("wrapped _read", f7), i6 && (i6 = false, e.resume());
    }, this;
  };
  typeof Symbol == "function" && (u13.prototype[Symbol.asyncIterator] = function() {
    return Se === void 0 && (Se = ft()), Se(this);
  });
  Object.defineProperty(u13.prototype, "readableHighWaterMark", { enumerable: false, get: function() {
    return this._readableState.highWaterMark;
  } });
  Object.defineProperty(u13.prototype, "readableBuffer", { enumerable: false, get: function() {
    return this._readableState && this._readableState.buffer;
  } });
  Object.defineProperty(u13.prototype, "readableFlowing", { enumerable: false, get: function() {
    return this._readableState.flowing;
  }, set: function(t) {
    this._readableState && (this._readableState.flowing = t);
  } });
  u13._fromList = _t2;
  Object.defineProperty(u13.prototype, "readableLength", { enumerable: false, get: function() {
    return this._readableState.length;
  } });
  function _t2(e, t) {
    if (t.length === 0)
      return null;
    var r2;
    return t.objectMode ? r2 = t.buffer.shift() : !e || e >= t.length ? (t.decoder ? r2 = t.buffer.join("") : t.buffer.length === 1 ? r2 = t.buffer.first() : r2 = t.buffer.concat(t.length), t.buffer.clear()) : r2 = t.buffer.consume(e, t.decoder), r2;
  }
  function Oe2(e) {
    var t = e._readableState;
    l11("endReadable", t.endEmitted), t.endEmitted || (t.ended = true, __Process$2.nextTick(ui, t, e));
  }
  function ui(e, t) {
    if (l11("endReadableNT", e.endEmitted, e.length), !e.endEmitted && e.length === 0 && (e.endEmitted = true, t.readable = false, t.emit("end"), e.autoDestroy)) {
      var r2 = t._writableState;
      (!r2 || r2.autoDestroy && r2.finished) && t.destroy();
    }
  }
  typeof Symbol == "function" && (u13.from = function(e, t) {
    return Te2 === void 0 && (Te2 = lt3()), Te2(u13, e, t);
  });
  function gt(e, t) {
    for (var r2 = 0, i6 = e.length; r2 < i6; r2++)
      if (e[r2] === t)
        return r2;
    return -1;
  }
});
var De3 = c8((Ki2, wt3) => {
  "use strict";
  wt3.exports = E8;
  var fe2 = P6().codes, si = fe2.ERR_METHOD_NOT_IMPLEMENTED, di3 = fe2.ERR_MULTIPLE_CALLBACK, hi = fe2.ERR_TRANSFORM_ALREADY_TRANSFORMING, ci2 = fe2.ERR_TRANSFORM_WITH_LENGTH_0, oe = D3();
  h9("inherits")(E8, oe);
  function pi2(e, t) {
    var r2 = this._transformState;
    r2.transforming = false;
    var i6 = r2.writecb;
    if (i6 === null)
      return this.emit("error", new di3());
    r2.writechunk = null, r2.writecb = null, t != null && this.push(t), i6(e);
    var n5 = this._readableState;
    n5.reading = false, (n5.needReadable || n5.length < n5.highWaterMark) && this._read(n5.highWaterMark);
  }
  function E8(e) {
    if (!(this instanceof E8))
      return new E8(e);
    oe.call(this, e), this._transformState = { afterTransform: pi2.bind(this), needTransform: false, transforming: false, writecb: null, writechunk: null, writeencoding: null }, this._readableState.needReadable = true, this._readableState.sync = false, e && (typeof e.transform == "function" && (this._transform = e.transform), typeof e.flush == "function" && (this._flush = e.flush)), this.on("prefinish", bi3);
  }
  function bi3() {
    var e = this;
    typeof this._flush == "function" && !this._readableState.destroyed ? this._flush(function(t, r2) {
      vt(e, t, r2);
    }) : vt(this, null, null);
  }
  E8.prototype.push = function(e, t) {
    return this._transformState.needTransform = false, oe.prototype.push.call(this, e, t);
  };
  E8.prototype._transform = function(e, t, r2) {
    r2(new si("_transform()"));
  };
  E8.prototype._write = function(e, t, r2) {
    var i6 = this._transformState;
    if (i6.writecb = r2, i6.writechunk = e, i6.writeencoding = t, !i6.transforming) {
      var n5 = this._readableState;
      (i6.needTransform || n5.needReadable || n5.length < n5.highWaterMark) && this._read(n5.highWaterMark);
    }
  };
  E8.prototype._read = function(e) {
    var t = this._transformState;
    t.writechunk !== null && !t.transforming ? (t.transforming = true, this._transform(t.writechunk, t.writeencoding, t.afterTransform)) : t.needTransform = true;
  };
  E8.prototype._destroy = function(e, t) {
    oe.prototype._destroy.call(this, e, function(r2) {
      t(r2);
    });
  };
  function vt(e, t, r2) {
    if (t)
      return e.emit("error", t);
    if (r2 != null && e.push(r2), e._writableState.length)
      throw new ci2();
    if (e._transformState.transforming)
      throw new hi();
    return e.push(null);
  }
});
var St = c8(($i, Et3) => {
  "use strict";
  Et3.exports = K7;
  var Rt2 = De3();
  h9("inherits")(K7, Rt2);
  function K7(e) {
    if (!(this instanceof K7))
      return new K7(e);
    Rt2.call(this, e);
  }
  K7.prototype._transform = function(e, t, r2) {
    r2(null, e);
  };
});
var At = c8((Xi, Ot3) => {
  "use strict";
  var qe2;
  function _i4(e) {
    var t = false;
    return function() {
      t || (t = true, e.apply(void 0, arguments));
    };
  }
  var mt3 = P6().codes, gi = mt3.ERR_MISSING_ARGS, yi2 = mt3.ERR_STREAM_DESTROYED;
  function Tt2(e) {
    if (e)
      throw e;
  }
  function vi3(e) {
    return e.setHeader && typeof e.abort == "function";
  }
  function wi2(e, t, r2, i6) {
    i6 = _i4(i6);
    var n5 = false;
    e.on("close", function() {
      n5 = true;
    }), qe2 === void 0 && (qe2 = ee()), qe2(e, { readable: t, writable: r2 }, function(f7) {
      if (f7)
        return i6(f7);
      n5 = true, i6();
    });
    var a11 = false;
    return function(f7) {
      if (!n5 && !a11) {
        if (a11 = true, vi3(e))
          return e.abort();
        if (typeof e.destroy == "function")
          return e.destroy();
        i6(f7 || new yi2("pipe"));
      }
    };
  }
  function Mt2(e) {
    e();
  }
  function Ri2(e, t) {
    return e.pipe(t);
  }
  function Ei2(e) {
    return !e.length || typeof e[e.length - 1] != "function" ? Tt2 : e.pop();
  }
  function Si4() {
    for (var e = arguments.length, t = new Array(e), r2 = 0; r2 < e; r2++)
      t[r2] = arguments[r2];
    var i6 = Ei2(t);
    if (Array.isArray(t[0]) && (t = t[0]), t.length < 2)
      throw new gi("streams");
    var n5, a11 = t.map(function(f7, o6) {
      var d9 = o6 < t.length - 1, p12 = o6 > 0;
      return wi2(f7, d9, p12, function(v14) {
        n5 || (n5 = v14), v14 && a11.forEach(Mt2), !d9 && (a11.forEach(Mt2), i6(n5));
      });
    });
    return t.reduce(Ri2);
  }
  Ot3.exports = Si4;
});
var Ne = c8((_12, Lt2) => {
  _12 = Lt2.exports = we();
  _12.Stream = _12;
  _12.Readable = _12;
  _12.Writable = ge2();
  _12.Duplex = D3();
  _12.Transform = De3();
  _12.PassThrough = St();
  _12.finished = ee();
  _12.pipeline = At();
});
var O4 = {};
It2(O4, { Duplex: () => Oi, PassThrough: () => Li2, Readable: () => Mi2, Stream: () => Ti, Transform: () => Ai3, Writable: () => mi, default: () => Ni, finished: () => Pi, pipeline: () => Di });
var Dt = Ce(Ne());
L4(O4, Ce(Ne()));
var { Stream: Ti, Readable: Mi2, Writable: mi, Duplex: Oi, Transform: Ai3, PassThrough: Li2, finished: Pi, pipeline: Di } = Dt;
var { default: Pt, ...qi3 } = Dt;
var Ni = Pt !== void 0 ? Pt : qi3;

// https://esm.sh/v135/keccak@3.0.4/denonext/keccak.mjs
var require14 = (n5) => {
  const e = (m16) => typeof m16.default < "u" ? m16.default : m16, c10 = (m16) => Object.assign({}, m16);
  switch (n5) {
    case "readable-stream":
      return e(readable_stream_exports);
    default:
      throw new Error('module "' + n5 + '" not found');
  }
};
var Fi = Object.create;
var zt2 = Object.defineProperty;
var Ki = Object.getOwnPropertyDescriptor;
var Ni2 = Object.getOwnPropertyNames;
var Ci = Object.getPrototypeOf;
var Oi2 = Object.prototype.hasOwnProperty;
var fi = ((t) => typeof require14 < "u" ? require14 : typeof Proxy < "u" ? new Proxy(t, { get: (e, i6) => (typeof require14 < "u" ? require14 : e)[i6] }) : t)(function(t) {
  if (typeof require14 < "u")
    return require14.apply(this, arguments);
  throw Error('Dynamic require of "' + t + '" is not supported');
});
var a6 = (t, e) => () => (e || t((e = { exports: {} }).exports, e), e.exports);
var vi2 = (t, e) => {
  for (var i6 in e)
    zt2(t, i6, { get: e[i6], enumerable: true });
};
var pt = (t, e, i6, s10) => {
  if (e && typeof e == "object" || typeof e == "function")
    for (let o6 of Ni2(e))
      !Oi2.call(t, o6) && o6 !== i6 && zt2(t, o6, { get: () => e[o6], enumerable: !(s10 = Ki(e, o6)) || s10.enumerable });
  return t;
};
var u9 = (t, e, i6) => (pt(t, e, "default"), i6 && pt(i6, e, "default"));
var _i3 = (t, e, i6) => (i6 = t != null ? Fi(Ci(t)) : {}, pt(e || !t || !t.__esModule ? zt2(i6, "default", { value: t, enumerable: true }) : i6, t));
var zi = a6((Ji, pi2) => {
  var { Transform: Ai4 } = fi("readable-stream");
  pi2.exports = (t) => class di3 extends Ai4 {
    constructor(i6, s10, o6, h14, r2) {
      super(r2), this._rate = i6, this._capacity = s10, this._delimitedSuffix = o6, this._hashBitLength = h14, this._options = r2, this._state = new t(), this._state.initialize(i6, s10), this._finalized = false;
    }
    _transform(i6, s10, o6) {
      let h14 = null;
      try {
        this.update(i6, s10);
      } catch (r2) {
        h14 = r2;
      }
      o6(h14);
    }
    _flush(i6) {
      let s10 = null;
      try {
        this.push(this.digest());
      } catch (o6) {
        s10 = o6;
      }
      i6(s10);
    }
    update(i6, s10) {
      if (!__Buffer$2.isBuffer(i6) && typeof i6 != "string")
        throw new TypeError("Data must be a string or a buffer");
      if (this._finalized)
        throw new Error("Digest already called");
      return __Buffer$2.isBuffer(i6) || (i6 = __Buffer$2.from(i6, s10)), this._state.absorb(i6), this;
    }
    digest(i6) {
      if (this._finalized)
        throw new Error("Digest already called");
      this._finalized = true, this._delimitedSuffix && this._state.absorbLastFewBits(this._delimitedSuffix);
      let s10 = this._state.squeeze(this._hashBitLength / 8);
      return i6 !== void 0 && (s10 = s10.toString(i6)), this._resetState(), s10;
    }
    _resetState() {
      return this._state.initialize(this._rate, this._capacity), this;
    }
    _clone() {
      let i6 = new di3(this._rate, this._capacity, this._delimitedSuffix, this._hashBitLength, this._options);
      return this._state.copy(i6._state), i6._finalized = this._finalized, i6;
    }
  };
});
var Si3 = a6((Mi3, ki3) => {
  var { Transform: Ii } = fi("readable-stream");
  ki3.exports = (t) => class wi2 extends Ii {
    constructor(i6, s10, o6, h14) {
      super(h14), this._rate = i6, this._capacity = s10, this._delimitedSuffix = o6, this._options = h14, this._state = new t(), this._state.initialize(i6, s10), this._finalized = false;
    }
    _transform(i6, s10, o6) {
      let h14 = null;
      try {
        this.update(i6, s10);
      } catch (r2) {
        h14 = r2;
      }
      o6(h14);
    }
    _flush() {
    }
    _read(i6) {
      this.push(this.squeeze(i6));
    }
    update(i6, s10) {
      if (!__Buffer$2.isBuffer(i6) && typeof i6 != "string")
        throw new TypeError("Data must be a string or a buffer");
      if (this._finalized)
        throw new Error("Squeeze already called");
      return __Buffer$2.isBuffer(i6) || (i6 = __Buffer$2.from(i6, s10)), this._state.absorb(i6), this;
    }
    squeeze(i6, s10) {
      this._finalized || (this._finalized = true, this._state.absorbLastFewBits(this._delimitedSuffix));
      let o6 = this._state.squeeze(i6);
      return s10 !== void 0 && (o6 = o6.toString(s10)), o6;
    }
    _resetState() {
      return this._state.initialize(this._rate, this._capacity), this;
    }
    _clone() {
      let i6 = new wi2(this._rate, this._capacity, this._delimitedSuffix, this._options);
      return this._state.copy(i6._state), i6._finalized = this._finalized, i6;
    }
  };
});
var xi3 = a6((Qi, bi3) => {
  var Pi2 = zi(), Ri2 = Si3();
  bi3.exports = function(t) {
    let e = Pi2(t), i6 = Ri2(t);
    return function(s10, o6) {
      switch (typeof s10 == "string" ? s10.toLowerCase() : s10) {
        case "keccak224":
          return new e(1152, 448, null, 224, o6);
        case "keccak256":
          return new e(1088, 512, null, 256, o6);
        case "keccak384":
          return new e(832, 768, null, 384, o6);
        case "keccak512":
          return new e(576, 1024, null, 512, o6);
        case "sha3-224":
          return new e(1152, 448, 6, 224, o6);
        case "sha3-256":
          return new e(1088, 512, 6, 256, o6);
        case "sha3-384":
          return new e(832, 768, 6, 384, o6);
        case "sha3-512":
          return new e(576, 1024, 6, 512, o6);
        case "shake128":
          return new i6(1344, 256, 31, o6);
        case "shake256":
          return new i6(1088, 512, 31, o6);
        default:
          throw new Error("Invald algorithm: " + s10);
      }
    };
  };
});
var Bi3 = a6((qi4) => {
  var yi2 = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648];
  qi4.p1600 = function(t) {
    for (let e = 0; e < 24; ++e) {
      let i6 = t[0] ^ t[10] ^ t[20] ^ t[30] ^ t[40], s10 = t[1] ^ t[11] ^ t[21] ^ t[31] ^ t[41], o6 = t[2] ^ t[12] ^ t[22] ^ t[32] ^ t[42], h14 = t[3] ^ t[13] ^ t[23] ^ t[33] ^ t[43], r2 = t[4] ^ t[14] ^ t[24] ^ t[34] ^ t[44], d9 = t[5] ^ t[15] ^ t[25] ^ t[35] ^ t[45], p12 = t[6] ^ t[16] ^ t[26] ^ t[36] ^ t[46], z7 = t[7] ^ t[17] ^ t[27] ^ t[37] ^ t[47], w13 = t[8] ^ t[18] ^ t[28] ^ t[38] ^ t[48], k8 = t[9] ^ t[19] ^ t[29] ^ t[39] ^ t[49], n5 = w13 ^ (o6 << 1 | h14 >>> 31), c10 = k8 ^ (h14 << 1 | o6 >>> 31), Ti2 = t[0] ^ n5, Di2 = t[1] ^ c10, kt3 = t[10] ^ n5, St4 = t[11] ^ c10, bt2 = t[20] ^ n5, xt3 = t[21] ^ c10, yt = t[30] ^ n5, qt3 = t[31] ^ c10, Bt2 = t[40] ^ n5, gt = t[41] ^ c10;
      n5 = i6 ^ (r2 << 1 | d9 >>> 31), c10 = s10 ^ (d9 << 1 | r2 >>> 31);
      let mt3 = t[2] ^ n5, Lt2 = t[3] ^ c10, Et3 = t[12] ^ n5, Tt2 = t[13] ^ c10, Dt3 = t[22] ^ n5, Ft2 = t[23] ^ c10, Kt4 = t[32] ^ n5, Nt4 = t[33] ^ c10, Ct3 = t[42] ^ n5, Ot3 = t[43] ^ c10;
      n5 = o6 ^ (p12 << 1 | z7 >>> 31), c10 = h14 ^ (z7 << 1 | p12 >>> 31);
      let vt = t[4] ^ n5, At2 = t[5] ^ c10, It4 = t[14] ^ n5, Pt3 = t[15] ^ c10, Rt2 = t[24] ^ n5, Ut3 = t[25] ^ c10, jt3 = t[34] ^ n5, Gt3 = t[35] ^ c10, Ht3 = t[44] ^ n5, Jt2 = t[45] ^ c10;
      n5 = r2 ^ (w13 << 1 | k8 >>> 31), c10 = d9 ^ (k8 << 1 | w13 >>> 31);
      let Mt2 = t[6] ^ n5, Qt2 = t[7] ^ c10, Vt2 = t[16] ^ n5, Wt2 = t[17] ^ c10, Xt2 = t[26] ^ n5, Yt2 = t[27] ^ c10, Zt2 = t[36] ^ n5, $t2 = t[37] ^ c10, ti = t[46] ^ n5, ii = t[47] ^ c10;
      n5 = p12 ^ (i6 << 1 | s10 >>> 31), c10 = z7 ^ (s10 << 1 | i6 >>> 31);
      let ei = t[8] ^ n5, si = t[9] ^ c10, oi = t[18] ^ n5, ni = t[19] ^ c10, ci2 = t[28] ^ n5, hi = t[29] ^ c10, ri = t[38] ^ n5, li2 = t[39] ^ c10, ai = t[48] ^ n5, ui = t[49] ^ c10, S9 = Ti2, b8 = Di2, x13 = St4 << 4 | kt3 >>> 28, y10 = kt3 << 4 | St4 >>> 28, q12 = bt2 << 3 | xt3 >>> 29, B9 = xt3 << 3 | bt2 >>> 29, g15 = qt3 << 9 | yt >>> 23, m16 = yt << 9 | qt3 >>> 23, L7 = Bt2 << 18 | gt >>> 14, E8 = gt << 18 | Bt2 >>> 14, T4 = mt3 << 1 | Lt2 >>> 31, D9 = Lt2 << 1 | mt3 >>> 31, F8 = Tt2 << 12 | Et3 >>> 20, K7 = Et3 << 12 | Tt2 >>> 20, N5 = Dt3 << 10 | Ft2 >>> 22, C8 = Ft2 << 10 | Dt3 >>> 22, O9 = Nt4 << 13 | Kt4 >>> 19, v14 = Kt4 << 13 | Nt4 >>> 19, A11 = Ct3 << 2 | Ot3 >>> 30, I8 = Ot3 << 2 | Ct3 >>> 30, P9 = At2 << 30 | vt >>> 2, R7 = vt << 30 | At2 >>> 2, U5 = It4 << 6 | Pt3 >>> 26, j7 = Pt3 << 6 | It4 >>> 26, G5 = Ut3 << 11 | Rt2 >>> 21, H7 = Rt2 << 11 | Ut3 >>> 21, J4 = jt3 << 15 | Gt3 >>> 17, M11 = Gt3 << 15 | jt3 >>> 17, Q3 = Jt2 << 29 | Ht3 >>> 3, V6 = Ht3 << 29 | Jt2 >>> 3, W4 = Mt2 << 28 | Qt2 >>> 4, X4 = Qt2 << 28 | Mt2 >>> 4, Y4 = Wt2 << 23 | Vt2 >>> 9, Z3 = Vt2 << 23 | Wt2 >>> 9, $2 = Xt2 << 25 | Yt2 >>> 7, tt = Yt2 << 25 | Xt2 >>> 7, it = Zt2 << 21 | $t2 >>> 11, et = $t2 << 21 | Zt2 >>> 11, st2 = ii << 24 | ti >>> 8, ot2 = ti << 24 | ii >>> 8, nt = ei << 27 | si >>> 5, ct = si << 27 | ei >>> 5, ht = oi << 20 | ni >>> 12, rt = ni << 20 | oi >>> 12, lt4 = hi << 7 | ci2 >>> 25, at = ci2 << 7 | hi >>> 25, ut = ri << 8 | li2 >>> 24, ft2 = li2 << 8 | ri >>> 24, _t2 = ai << 14 | ui >>> 18, dt = ui << 14 | ai >>> 18;
      t[0] = S9 ^ ~F8 & G5, t[1] = b8 ^ ~K7 & H7, t[10] = W4 ^ ~ht & q12, t[11] = X4 ^ ~rt & B9, t[20] = T4 ^ ~U5 & $2, t[21] = D9 ^ ~j7 & tt, t[30] = nt ^ ~x13 & N5, t[31] = ct ^ ~y10 & C8, t[40] = P9 ^ ~Y4 & lt4, t[41] = R7 ^ ~Z3 & at, t[2] = F8 ^ ~G5 & it, t[3] = K7 ^ ~H7 & et, t[12] = ht ^ ~q12 & O9, t[13] = rt ^ ~B9 & v14, t[22] = U5 ^ ~$2 & ut, t[23] = j7 ^ ~tt & ft2, t[32] = x13 ^ ~N5 & J4, t[33] = y10 ^ ~C8 & M11, t[42] = Y4 ^ ~lt4 & g15, t[43] = Z3 ^ ~at & m16, t[4] = G5 ^ ~it & _t2, t[5] = H7 ^ ~et & dt, t[14] = q12 ^ ~O9 & Q3, t[15] = B9 ^ ~v14 & V6, t[24] = $2 ^ ~ut & L7, t[25] = tt ^ ~ft2 & E8, t[34] = N5 ^ ~J4 & st2, t[35] = C8 ^ ~M11 & ot2, t[44] = lt4 ^ ~g15 & A11, t[45] = at ^ ~m16 & I8, t[6] = it ^ ~_t2 & S9, t[7] = et ^ ~dt & b8, t[16] = O9 ^ ~Q3 & W4, t[17] = v14 ^ ~V6 & X4, t[26] = ut ^ ~L7 & T4, t[27] = ft2 ^ ~E8 & D9, t[36] = J4 ^ ~st2 & nt, t[37] = M11 ^ ~ot2 & ct, t[46] = g15 ^ ~A11 & P9, t[47] = m16 ^ ~I8 & R7, t[8] = _t2 ^ ~S9 & F8, t[9] = dt ^ ~b8 & K7, t[18] = Q3 ^ ~W4 & ht, t[19] = V6 ^ ~X4 & rt, t[28] = L7 ^ ~T4 & U5, t[29] = E8 ^ ~D9 & j7, t[38] = st2 ^ ~nt & x13, t[39] = ot2 ^ ~ct & y10, t[48] = A11 ^ ~P9 & Y4, t[49] = I8 ^ ~R7 & Z3, t[0] ^= yi2[e * 2], t[1] ^= yi2[e * 2 + 1];
    }
  };
});
var mi2 = a6((Wi, gi) => {
  var _12 = Bi3();
  function f7() {
    this.state = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], this.blockSize = null, this.count = 0, this.squeezing = false;
  }
  f7.prototype.initialize = function(t, e) {
    for (let i6 = 0; i6 < 50; ++i6)
      this.state[i6] = 0;
    this.blockSize = t / 8, this.count = 0, this.squeezing = false;
  };
  f7.prototype.absorb = function(t) {
    for (let e = 0; e < t.length; ++e)
      this.state[~~(this.count / 4)] ^= t[e] << 8 * (this.count % 4), this.count += 1, this.count === this.blockSize && (_12.p1600(this.state), this.count = 0);
  };
  f7.prototype.absorbLastFewBits = function(t) {
    this.state[~~(this.count / 4)] ^= t << 8 * (this.count % 4), t & 128 && this.count === this.blockSize - 1 && _12.p1600(this.state), this.state[~~((this.blockSize - 1) / 4)] ^= 128 << 8 * ((this.blockSize - 1) % 4), _12.p1600(this.state), this.count = 0, this.squeezing = true;
  };
  f7.prototype.squeeze = function(t) {
    this.squeezing || this.absorbLastFewBits(1);
    let e = __Buffer$2.alloc(t);
    for (let i6 = 0; i6 < t; ++i6)
      e[i6] = this.state[~~(this.count / 4)] >>> 8 * (this.count % 4) & 255, this.count += 1, this.count === this.blockSize && (_12.p1600(this.state), this.count = 0);
    return e;
  };
  f7.prototype.copy = function(t) {
    for (let e = 0; e < 50; ++e)
      t.state[e] = this.state[e];
    t.blockSize = this.blockSize, t.count = this.count, t.squeezing = this.squeezing;
  };
  gi.exports = f7;
});
var wt = a6((Xi, Li3) => {
  Li3.exports = xi3()(mi2());
});
var l7 = {};
vi2(l7, { default: () => Gi });
var Ui = _i3(wt());
u9(l7, _i3(wt()));
var { default: Ei, ...ji } = Ui;
var Gi = Ei !== void 0 ? Ei : ji;

// https://esm.sh/v135/ethereum-cryptography@0.1.3/denonext/keccak.js
var require15 = (n5) => {
  const e = (m16) => typeof m16.default < "u" ? m16.default : m16, c10 = (m16) => Object.assign({}, m16);
  switch (n5) {
    case "keccak":
      return e(keccak_exports);
    default:
      throw new Error('module "' + n5 + '" not found');
  }
};
var m9 = Object.create;
var s7 = Object.defineProperty;
var v9 = Object.getOwnPropertyDescriptor;
var x9 = Object.getOwnPropertyNames;
var M6 = Object.getPrototypeOf;
var b7 = Object.prototype.hasOwnProperty;
var j6 = ((e) => typeof require15 < "u" ? require15 : typeof Proxy < "u" ? new Proxy(e, { get: (c10, t) => (typeof require15 < "u" ? require15 : c10)[t] }) : e)(function(e) {
  if (typeof require15 < "u")
    return require15.apply(this, arguments);
  throw Error('Dynamic require of "' + e + '" is not supported');
});
var h10 = (e, c10) => () => (c10 || e((c10 = { exports: {} }).exports, c10), c10.exports);
var q7 = (e, c10) => {
  for (var t in c10)
    s7(e, t, { get: c10[t], enumerable: true });
};
var i4 = (e, c10, t, d9) => {
  if (c10 && typeof c10 == "object" || typeof c10 == "function")
    for (let n5 of x9(c10))
      !b7.call(e, n5) && n5 !== t && s7(e, n5, { get: () => c10[n5], enumerable: !(d9 = v9(c10, n5)) || d9.enumerable });
  return e;
};
var a7 = (e, c10, t) => (i4(e, c10, "default"), t && i4(t, c10, "default"));
var l8 = (e, c10, t) => (t = e != null ? m9(M6(e)) : {}, i4(c10 || !e || !e.__esModule ? s7(t, "default", { value: e, enumerable: true }) : t, e));
var p7 = h10((f7) => {
  "use strict";
  Object.defineProperty(f7, "__esModule", { value: true });
  function y10(e) {
    return function(c10) {
      var t = e();
      return t.update(c10), __Buffer$3.from(t.digest());
    };
  }
  f7.createHashFunction = y10;
});
var _8 = h10((u13) => {
  "use strict";
  Object.defineProperty(u13, "__esModule", { value: true });
  var o6 = p7(), k8 = j6("keccak");
  u13.keccak224 = o6.createHashFunction(function() {
    return k8("keccak224");
  });
  u13.keccak256 = o6.createHashFunction(function() {
    return k8("keccak256");
  });
  u13.keccak384 = o6.createHashFunction(function() {
    return k8("keccak384");
  });
  u13.keccak512 = o6.createHashFunction(function() {
    return k8("keccak512");
  });
});
var r = {};
q7(r, { __esModule: () => O5, default: () => z5, keccak224: () => P7, keccak256: () => g10, keccak384: () => B5, keccak512: () => K5 });
var F5 = l8(_8());
a7(r, l8(_8()));
var { __esModule: O5, keccak224: P7, keccak256: g10, keccak384: B5, keccak512: K5 } = F5;
var { default: H5, ...w8 } = F5;
var z5 = H5 !== void 0 ? H5 : w8;

// https://esm.sh/v135/create-hash@1.2.0/denonext/create-hash.mjs
var create_hash_exports = {};
__export(create_hash_exports, {
  default: () => L6
});

// https://esm.sh/v135/md5.js@1.3.5/denonext/md5.mjs
var md5_exports = {};
__export(md5_exports, {
  default: () => D5
});

// https://esm.sh/v135/hash-base@3.1.0/denonext/hash-base.mjs
var hash_base_exports = {};
__export(hash_base_exports, {
  default: () => D4
});
var require16 = (n5) => {
  const e = (m16) => typeof m16.default < "u" ? m16.default : m16, c10 = (m16) => Object.assign({}, m16);
  switch (n5) {
    case "safe-buffer":
      return e(safe_buffer_exports);
    case "readable-stream":
      return e(readable_stream_exports);
    case "inherits":
      return e(inherits_exports);
    default:
      throw new Error('module "' + n5 + '" not found');
  }
};
var w9 = Object.create;
var p8 = Object.defineProperty;
var k5 = Object.getOwnPropertyDescriptor;
var v10 = Object.getOwnPropertyNames;
var y6 = Object.getPrototypeOf;
var O6 = Object.prototype.hasOwnProperty;
var c9 = ((t) => typeof require16 < "u" ? require16 : typeof Proxy < "u" ? new Proxy(t, { get: (e, r2) => (typeof require16 < "u" ? require16 : e)[r2] }) : t)(function(t) {
  if (typeof require16 < "u")
    return require16.apply(this, arguments);
  throw Error('Dynamic require of "' + t + '" is not supported');
});
var z6 = (t, e) => () => (e || t((e = { exports: {} }).exports, e), e.exports);
var B6 = (t, e) => {
  for (var r2 in e)
    p8(t, r2, { get: e[r2], enumerable: true });
};
var _9 = (t, e, r2, i6) => {
  if (e && typeof e == "object" || typeof e == "function")
    for (let o6 of v10(e))
      !O6.call(t, o6) && o6 !== r2 && p8(t, o6, { get: () => e[o6], enumerable: !(i6 = k5(e, o6)) || i6.enumerable });
  return t;
};
var n3 = (t, e, r2) => (_9(t, e, "default"), r2 && _9(r2, e, "default"));
var d6 = (t, e, r2) => (r2 = t != null ? w9(y6(t)) : {}, _9(e || !t || !t.__esModule ? p8(r2, "default", { value: t, enumerable: true }) : r2, t));
var a8 = z6((H7, b8) => {
  "use strict";
  var u13 = c9("safe-buffer").Buffer, g15 = c9("readable-stream").Transform, x13 = c9("inherits");
  function E8(t, e) {
    if (!u13.isBuffer(t) && typeof t != "string")
      throw new TypeError(e + " must be a string or a buffer");
  }
  function s10(t) {
    g15.call(this), this._block = u13.allocUnsafe(t), this._blockSize = t, this._blockOffset = 0, this._length = [0, 0, 0, 0], this._finalized = false;
  }
  x13(s10, g15);
  s10.prototype._transform = function(t, e, r2) {
    var i6 = null;
    try {
      this.update(t, e);
    } catch (o6) {
      i6 = o6;
    }
    r2(i6);
  };
  s10.prototype._flush = function(t) {
    var e = null;
    try {
      this.push(this.digest());
    } catch (r2) {
      e = r2;
    }
    t(e);
  };
  s10.prototype.update = function(t, e) {
    if (E8(t, "Data"), this._finalized)
      throw new Error("Digest already called");
    u13.isBuffer(t) || (t = u13.from(t, e));
    for (var r2 = this._block, i6 = 0; this._blockOffset + t.length - i6 >= this._blockSize; ) {
      for (var o6 = this._blockOffset; o6 < this._blockSize; )
        r2[o6++] = t[i6++];
      this._update(), this._blockOffset = 0;
    }
    for (; i6 < t.length; )
      r2[this._blockOffset++] = t[i6++];
    for (var l11 = 0, h14 = t.length * 8; h14 > 0; ++l11)
      this._length[l11] += h14, h14 = this._length[l11] / 4294967296 | 0, h14 > 0 && (this._length[l11] -= 4294967296 * h14);
    return this;
  };
  s10.prototype._update = function() {
    throw new Error("_update is not implemented");
  };
  s10.prototype.digest = function(t) {
    if (this._finalized)
      throw new Error("Digest already called");
    this._finalized = true;
    var e = this._digest();
    t !== void 0 && (e = e.toString(t)), this._block.fill(0), this._blockOffset = 0;
    for (var r2 = 0; r2 < 4; ++r2)
      this._length[r2] = 0;
    return e;
  };
  s10.prototype._digest = function() {
    throw new Error("_digest is not implemented");
  };
  b8.exports = s10;
});
var f5 = {};
B6(f5, { default: () => D4 });
var S5 = d6(a8());
n3(f5, d6(a8()));
var { default: m10, ...q8 } = S5;
var D4 = m10 !== void 0 ? m10 : q8;

// https://esm.sh/v135/md5.js@1.3.5/denonext/md5.mjs
var require17 = (n5) => {
  const e = (m16) => typeof m16.default < "u" ? m16.default : m16, c10 = (m16) => Object.assign({}, m16);
  switch (n5) {
    case "inherits":
      return e(inherits_exports);
    case "hash-base":
      return e(hash_base_exports);
    case "safe-buffer":
      return e(safe_buffer_exports);
    default:
      throw new Error('module "' + n5 + '" not found');
  }
};
var L5 = Object.create;
var l9 = Object.defineProperty;
var O7 = Object.getOwnPropertyDescriptor;
var m11 = Object.getOwnPropertyNames;
var g11 = Object.getPrototypeOf;
var q9 = Object.prototype.hasOwnProperty;
var k6 = ((t) => typeof require17 < "u" ? require17 : typeof Proxy < "u" ? new Proxy(t, { get: (i6, e) => (typeof require17 < "u" ? require17 : i6)[e] }) : t)(function(t) {
  if (typeof require17 < "u")
    return require17.apply(this, arguments);
  throw Error('Dynamic require of "' + t + '" is not supported');
});
var y7 = (t, i6) => () => (i6 || t((i6 = { exports: {} }).exports, i6), i6.exports);
var A7 = (t, i6) => {
  for (var e in i6)
    l9(t, e, { get: i6[e], enumerable: true });
};
var u10 = (t, i6, e, x13) => {
  if (i6 && typeof i6 == "object" || typeof i6 == "function")
    for (let f7 of m11(i6))
      !q9.call(t, f7) && f7 !== e && l9(t, f7, { get: () => i6[f7], enumerable: !(x13 = O7(i6, f7)) || x13.enumerable });
  return t;
};
var h11 = (t, i6, e) => (u10(t, i6, "default"), e && u10(e, i6, "default"));
var v11 = (t, i6, e) => (e = t != null ? L5(g11(t)) : {}, u10(i6 || !t || !t.__esModule ? l9(e, "default", { value: t, enumerable: true }) : e, t));
var p9 = y7((G5, w13) => {
  "use strict";
  var B9 = k6("inherits"), I8 = k6("hash-base"), U5 = k6("safe-buffer").Buffer, H7 = new Array(16);
  function n5() {
    I8.call(this, 64), this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878;
  }
  B9(n5, I8);
  n5.prototype._update = function() {
    for (var t = H7, i6 = 0; i6 < 16; ++i6)
      t[i6] = this._block.readInt32LE(i6 * 4);
    var e = this._a, x13 = this._b, f7 = this._c, a11 = this._d;
    e = c10(e, x13, f7, a11, t[0], 3614090360, 7), a11 = c10(a11, e, x13, f7, t[1], 3905402710, 12), f7 = c10(f7, a11, e, x13, t[2], 606105819, 17), x13 = c10(x13, f7, a11, e, t[3], 3250441966, 22), e = c10(e, x13, f7, a11, t[4], 4118548399, 7), a11 = c10(a11, e, x13, f7, t[5], 1200080426, 12), f7 = c10(f7, a11, e, x13, t[6], 2821735955, 17), x13 = c10(x13, f7, a11, e, t[7], 4249261313, 22), e = c10(e, x13, f7, a11, t[8], 1770035416, 7), a11 = c10(a11, e, x13, f7, t[9], 2336552879, 12), f7 = c10(f7, a11, e, x13, t[10], 4294925233, 17), x13 = c10(x13, f7, a11, e, t[11], 2304563134, 22), e = c10(e, x13, f7, a11, t[12], 1804603682, 7), a11 = c10(a11, e, x13, f7, t[13], 4254626195, 12), f7 = c10(f7, a11, e, x13, t[14], 2792965006, 17), x13 = c10(x13, f7, a11, e, t[15], 1236535329, 22), e = r2(e, x13, f7, a11, t[1], 4129170786, 5), a11 = r2(a11, e, x13, f7, t[6], 3225465664, 9), f7 = r2(f7, a11, e, x13, t[11], 643717713, 14), x13 = r2(x13, f7, a11, e, t[0], 3921069994, 20), e = r2(e, x13, f7, a11, t[5], 3593408605, 5), a11 = r2(a11, e, x13, f7, t[10], 38016083, 9), f7 = r2(f7, a11, e, x13, t[15], 3634488961, 14), x13 = r2(x13, f7, a11, e, t[4], 3889429448, 20), e = r2(e, x13, f7, a11, t[9], 568446438, 5), a11 = r2(a11, e, x13, f7, t[14], 3275163606, 9), f7 = r2(f7, a11, e, x13, t[3], 4107603335, 14), x13 = r2(x13, f7, a11, e, t[8], 1163531501, 20), e = r2(e, x13, f7, a11, t[13], 2850285829, 5), a11 = r2(a11, e, x13, f7, t[2], 4243563512, 9), f7 = r2(f7, a11, e, x13, t[7], 1735328473, 14), x13 = r2(x13, f7, a11, e, t[12], 2368359562, 20), e = d9(e, x13, f7, a11, t[5], 4294588738, 4), a11 = d9(a11, e, x13, f7, t[8], 2272392833, 11), f7 = d9(f7, a11, e, x13, t[11], 1839030562, 16), x13 = d9(x13, f7, a11, e, t[14], 4259657740, 23), e = d9(e, x13, f7, a11, t[1], 2763975236, 4), a11 = d9(a11, e, x13, f7, t[4], 1272893353, 11), f7 = d9(f7, a11, e, x13, t[7], 4139469664, 16), x13 = d9(x13, f7, a11, e, t[10], 3200236656, 23), e = d9(e, x13, f7, a11, t[13], 681279174, 4), a11 = d9(a11, e, x13, f7, t[0], 3936430074, 11), f7 = d9(f7, a11, e, x13, t[3], 3572445317, 16), x13 = d9(x13, f7, a11, e, t[6], 76029189, 23), e = d9(e, x13, f7, a11, t[9], 3654602809, 4), a11 = d9(a11, e, x13, f7, t[12], 3873151461, 11), f7 = d9(f7, a11, e, x13, t[15], 530742520, 16), x13 = d9(x13, f7, a11, e, t[2], 3299628645, 23), e = s10(e, x13, f7, a11, t[0], 4096336452, 6), a11 = s10(a11, e, x13, f7, t[7], 1126891415, 10), f7 = s10(f7, a11, e, x13, t[14], 2878612391, 15), x13 = s10(x13, f7, a11, e, t[5], 4237533241, 21), e = s10(e, x13, f7, a11, t[12], 1700485571, 6), a11 = s10(a11, e, x13, f7, t[3], 2399980690, 10), f7 = s10(f7, a11, e, x13, t[10], 4293915773, 15), x13 = s10(x13, f7, a11, e, t[1], 2240044497, 21), e = s10(e, x13, f7, a11, t[8], 1873313359, 6), a11 = s10(a11, e, x13, f7, t[15], 4264355552, 10), f7 = s10(f7, a11, e, x13, t[6], 2734768916, 15), x13 = s10(x13, f7, a11, e, t[13], 1309151649, 21), e = s10(e, x13, f7, a11, t[4], 4149444226, 6), a11 = s10(a11, e, x13, f7, t[11], 3174756917, 10), f7 = s10(f7, a11, e, x13, t[2], 718787259, 15), x13 = s10(x13, f7, a11, e, t[9], 3951481745, 21), this._a = this._a + e | 0, this._b = this._b + x13 | 0, this._c = this._c + f7 | 0, this._d = this._d + a11 | 0;
  };
  n5.prototype._digest = function() {
    this._block[this._blockOffset++] = 128, this._blockOffset > 56 && (this._block.fill(0, this._blockOffset, 64), this._update(), this._blockOffset = 0), this._block.fill(0, this._blockOffset, 56), this._block.writeUInt32LE(this._length[0], 56), this._block.writeUInt32LE(this._length[1], 60), this._update();
    var t = U5.allocUnsafe(16);
    return t.writeInt32LE(this._a, 0), t.writeInt32LE(this._b, 4), t.writeInt32LE(this._c, 8), t.writeInt32LE(this._d, 12), t;
  };
  function o6(t, i6) {
    return t << i6 | t >>> 32 - i6;
  }
  function c10(t, i6, e, x13, f7, a11, b8) {
    return o6(t + (i6 & e | ~i6 & x13) + f7 + a11 | 0, b8) + i6 | 0;
  }
  function r2(t, i6, e, x13, f7, a11, b8) {
    return o6(t + (i6 & x13 | e & ~x13) + f7 + a11 | 0, b8) + i6 | 0;
  }
  function d9(t, i6, e, x13, f7, a11, b8) {
    return o6(t + (i6 ^ e ^ x13) + f7 + a11 | 0, b8) + i6 | 0;
  }
  function s10(t, i6, e, x13, f7, a11, b8) {
    return o6(t + (e ^ (i6 | ~x13)) + f7 + a11 | 0, b8) + i6 | 0;
  }
  w13.exports = n5;
});
var _10 = {};
A7(_10, { default: () => D5 });
var M7 = v11(p9());
h11(_10, v11(p9()));
var { default: E6, ...R6 } = M7;
var D5 = E6 !== void 0 ? E6 : R6;

// https://esm.sh/v135/ripemd160@2.0.2/denonext/ripemd160.mjs
var ripemd160_exports = {};
__export(ripemd160_exports, {
  default: () => Z2
});
import * as __0$5 from "node:buffer";
var require18 = (n5) => {
  const e = (m16) => typeof m16.default < "u" ? m16.default : m16, c10 = (m16) => Object.assign({}, m16);
  switch (n5) {
    case "buffer":
      return e(__0$5);
    case "inherits":
      return e(inherits_exports);
    case "hash-base":
      return e(hash_base_exports);
    default:
      throw new Error('module "' + n5 + '" not found');
  }
};
var F6 = Object.create;
var g12 = Object.defineProperty;
var G3 = Object.getOwnPropertyDescriptor;
var J3 = Object.getOwnPropertyNames;
var K6 = Object.getPrototypeOf;
var N2 = Object.prototype.hasOwnProperty;
var q10 = ((t) => typeof require18 < "u" ? require18 : typeof Proxy < "u" ? new Proxy(t, { get: (r2, e) => (typeof require18 < "u" ? require18 : r2)[e] }) : t)(function(t) {
  if (typeof require18 < "u")
    return require18.apply(this, arguments);
  throw Error('Dynamic require of "' + t + '" is not supported');
});
var Q = (t, r2) => () => (r2 || t((r2 = { exports: {} }).exports, r2), r2.exports);
var S6 = (t, r2) => {
  for (var e in r2)
    g12(t, e, { get: r2[e], enumerable: true });
};
var m12 = (t, r2, e, i6) => {
  if (r2 && typeof r2 == "object" || typeof r2 == "function")
    for (let a11 of J3(r2))
      !N2.call(t, a11) && a11 !== e && g12(t, a11, { get: () => r2[a11], enumerable: !(i6 = G3(r2, a11)) || i6.enumerable });
  return t;
};
var x10 = (t, r2, e) => (m12(t, r2, "default"), e && m12(e, r2, "default"));
var B7 = (t, r2, e) => (e = t != null ? F6(K6(t)) : {}, m12(r2 || !t || !t.__esModule ? g12(e, "default", { value: t, enumerable: true }) : e, t));
var A8 = Q((j7, P9) => {
  "use strict";
  var y10 = q10("buffer").Buffer, T4 = q10("inherits"), M11 = q10("hash-base"), V6 = new Array(16), k8 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13], p12 = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11], w13 = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6], E8 = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11], I8 = [0, 1518500249, 1859775393, 2400959708, 2840853838], L7 = [1352829926, 1548603684, 1836072691, 2053994217, 0];
  function O9() {
    M11.call(this, 64), this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520;
  }
  T4(O9, M11);
  O9.prototype._update = function() {
    for (var t = V6, r2 = 0; r2 < 16; ++r2)
      t[r2] = this._block.readInt32LE(r2 * 4);
    for (var e = this._a | 0, i6 = this._b | 0, a11 = this._c | 0, _12 = this._d | 0, h14 = this._e | 0, f7 = this._a | 0, n5 = this._b | 0, c10 = this._c | 0, o6 = this._d | 0, l11 = this._e | 0, s10 = 0; s10 < 80; s10 += 1) {
      var v14, b8;
      s10 < 16 ? (v14 = R7(e, i6, a11, _12, h14, t[k8[s10]], I8[0], w13[s10]), b8 = H7(f7, n5, c10, o6, l11, t[p12[s10]], L7[0], E8[s10])) : s10 < 32 ? (v14 = z7(e, i6, a11, _12, h14, t[k8[s10]], I8[1], w13[s10]), b8 = D9(f7, n5, c10, o6, l11, t[p12[s10]], L7[1], E8[s10])) : s10 < 48 ? (v14 = U5(e, i6, a11, _12, h14, t[k8[s10]], I8[2], w13[s10]), b8 = U5(f7, n5, c10, o6, l11, t[p12[s10]], L7[2], E8[s10])) : s10 < 64 ? (v14 = D9(e, i6, a11, _12, h14, t[k8[s10]], I8[3], w13[s10]), b8 = z7(f7, n5, c10, o6, l11, t[p12[s10]], L7[3], E8[s10])) : (v14 = H7(e, i6, a11, _12, h14, t[k8[s10]], I8[4], w13[s10]), b8 = R7(f7, n5, c10, o6, l11, t[p12[s10]], L7[4], E8[s10])), e = h14, h14 = _12, _12 = u13(a11, 10), a11 = i6, i6 = v14, f7 = l11, l11 = o6, o6 = u13(c10, 10), c10 = n5, n5 = b8;
    }
    var C8 = this._b + a11 + o6 | 0;
    this._b = this._c + _12 + l11 | 0, this._c = this._d + h14 + f7 | 0, this._d = this._e + e + n5 | 0, this._e = this._a + i6 + c10 | 0, this._a = C8;
  };
  O9.prototype._digest = function() {
    this._block[this._blockOffset++] = 128, this._blockOffset > 56 && (this._block.fill(0, this._blockOffset, 64), this._update(), this._blockOffset = 0), this._block.fill(0, this._blockOffset, 56), this._block.writeUInt32LE(this._length[0], 56), this._block.writeUInt32LE(this._length[1], 60), this._update();
    var t = y10.alloc ? y10.alloc(20) : new y10(20);
    return t.writeInt32LE(this._a, 0), t.writeInt32LE(this._b, 4), t.writeInt32LE(this._c, 8), t.writeInt32LE(this._d, 12), t.writeInt32LE(this._e, 16), t;
  };
  function u13(t, r2) {
    return t << r2 | t >>> 32 - r2;
  }
  function R7(t, r2, e, i6, a11, _12, h14, f7) {
    return u13(t + (r2 ^ e ^ i6) + _12 + h14 | 0, f7) + a11 | 0;
  }
  function z7(t, r2, e, i6, a11, _12, h14, f7) {
    return u13(t + (r2 & e | ~r2 & i6) + _12 + h14 | 0, f7) + a11 | 0;
  }
  function U5(t, r2, e, i6, a11, _12, h14, f7) {
    return u13(t + ((r2 | ~e) ^ i6) + _12 + h14 | 0, f7) + a11 | 0;
  }
  function D9(t, r2, e, i6, a11, _12, h14, f7) {
    return u13(t + (r2 & i6 | e & ~i6) + _12 + h14 | 0, f7) + a11 | 0;
  }
  function H7(t, r2, e, i6, a11, _12, h14, f7) {
    return u13(t + (r2 ^ (e | ~i6)) + _12 + h14 | 0, f7) + a11 | 0;
  }
  P9.exports = O9;
});
var d7 = {};
S6(d7, { default: () => Z2 });
var W2 = B7(A8());
x10(d7, B7(A8()));
var { default: Y3, ...X3 } = W2;
var Z2 = Y3 !== void 0 ? Y3 : X3;

// https://esm.sh/v135/sha.js@2.4.11/denonext/sha.mjs
var sha_exports = {};
__export(sha_exports, {
  default: () => Kt2,
  sha: () => St2,
  sha1: () => kt,
  sha224: () => mt,
  sha256: () => Ht,
  sha384: () => Ut,
  sha512: () => zt3
});
var require19 = (n5) => {
  const e = (m16) => typeof m16.default < "u" ? m16.default : m16, c10 = (m16) => Object.assign({}, m16);
  switch (n5) {
    case "inherits":
      return e(inherits_exports);
    case "safe-buffer":
      return e(safe_buffer_exports);
    default:
      throw new Error('module "' + n5 + '" not found');
  }
};
var G0 = Object.create;
var N3 = Object.defineProperty;
var K0 = Object.getOwnPropertyDescriptor;
var L0 = Object.getOwnPropertyNames;
var J0 = Object.getPrototypeOf;
var M0 = Object.prototype.hasOwnProperty;
var u11 = ((t) => typeof require19 < "u" ? require19 : typeof Proxy < "u" ? new Proxy(t, { get: (r2, h14) => (typeof require19 < "u" ? require19 : r2)[h14] }) : t)(function(t) {
  if (typeof require19 < "u")
    return require19.apply(this, arguments);
  throw Error('Dynamic require of "' + t + '" is not supported');
});
var w10 = (t, r2) => () => (r2 || t((r2 = { exports: {} }).exports, r2), r2.exports);
var N0 = (t, r2) => {
  for (var h14 in r2)
    N3(t, h14, { get: r2[h14], enumerable: true });
};
var M8 = (t, r2, h14, e) => {
  if (r2 && typeof r2 == "object" || typeof r2 == "function")
    for (let i6 of L0(r2))
      !M0.call(t, i6) && i6 !== h14 && N3(t, i6, { get: () => r2[i6], enumerable: !(e = K0(r2, i6)) || e.enumerable });
  return t;
};
var g13 = (t, r2, h14) => (M8(t, r2, "default"), h14 && M8(h14, r2, "default"));
var W3 = (t, r2, h14) => (h14 = t != null ? G0(J0(t)) : {}, M8(r2 || !t || !t.__esModule ? N3(h14, "default", { value: t, enumerable: true }) : h14, t));
var F7 = w10((Jt2, t0) => {
  var j7 = u11("safe-buffer").Buffer;
  function K7(t, r2) {
    this._block = j7.alloc(t), this._finalSize = r2, this._blockSize = t, this._len = 0;
  }
  K7.prototype.update = function(t, r2) {
    typeof t == "string" && (r2 = r2 || "utf8", t = j7.from(t, r2));
    for (var h14 = this._block, e = this._blockSize, i6 = t.length, _12 = this._len, s10 = 0; s10 < i6; ) {
      for (var a11 = _12 % e, x13 = Math.min(i6 - s10, e - a11), c10 = 0; c10 < x13; c10++)
        h14[a11 + c10] = t[s10 + c10];
      _12 += x13, s10 += x13, _12 % e === 0 && this._update(h14);
    }
    return this._len += i6, this;
  };
  K7.prototype.digest = function(t) {
    var r2 = this._len % this._blockSize;
    this._block[r2] = 128, this._block.fill(0, r2 + 1), r2 >= this._finalSize && (this._update(this._block), this._block.fill(0));
    var h14 = this._len * 8;
    if (h14 <= 4294967295)
      this._block.writeUInt32BE(h14, this._blockSize - 4);
    else {
      var e = (h14 & 4294967295) >>> 0, i6 = (h14 - e) / 4294967296;
      this._block.writeUInt32BE(i6, this._blockSize - 8), this._block.writeUInt32BE(e, this._blockSize - 4);
    }
    this._update(this._block);
    var _12 = this._hash();
    return t ? _12.toString(t) : _12;
  };
  K7.prototype._update = function() {
    throw new Error("_update must be implemented by subclass");
  };
  t0.exports = K7;
});
var e0 = w10((Mt2, h02) => {
  var O0 = u11("inherits"), r0 = F7(), P0 = u11("safe-buffer").Buffer, Q0 = [1518500249, 1859775393, -1894007588, -899497514], R02 = new Array(80);
  function H7() {
    this.init(), this._w = R02, r0.call(this, 64, 56);
  }
  O0(H7, r0);
  H7.prototype.init = function() {
    return this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520, this;
  };
  function V02(t) {
    return t << 5 | t >>> 27;
  }
  function X02(t) {
    return t << 30 | t >>> 2;
  }
  function Y0(t, r2, h14, e) {
    return t === 0 ? r2 & h14 | ~r2 & e : t === 2 ? r2 & h14 | r2 & e | h14 & e : r2 ^ h14 ^ e;
  }
  H7.prototype._update = function(t) {
    for (var r2 = this._w, h14 = this._a | 0, e = this._b | 0, i6 = this._c | 0, _12 = this._d | 0, s10 = this._e | 0, a11 = 0; a11 < 16; ++a11)
      r2[a11] = t.readInt32BE(a11 * 4);
    for (; a11 < 80; ++a11)
      r2[a11] = r2[a11 - 3] ^ r2[a11 - 8] ^ r2[a11 - 14] ^ r2[a11 - 16];
    for (var x13 = 0; x13 < 80; ++x13) {
      var c10 = ~~(x13 / 20), f7 = V02(h14) + Y0(c10, e, i6, _12) + s10 + r2[x13] + Q0[c10] | 0;
      s10 = _12, _12 = i6, i6 = X02(e), e = h14, h14 = f7;
    }
    this._a = h14 + this._a | 0, this._b = e + this._b | 0, this._c = i6 + this._c | 0, this._d = _12 + this._d | 0, this._e = s10 + this._e | 0;
  };
  H7.prototype._hash = function() {
    var t = P0.allocUnsafe(20);
    return t.writeInt32BE(this._a | 0, 0), t.writeInt32BE(this._b | 0, 4), t.writeInt32BE(this._c | 0, 8), t.writeInt32BE(this._d | 0, 12), t.writeInt32BE(this._e | 0, 16), t;
  };
  h02.exports = H7;
});
var s0 = w10((Nt4, a0) => {
  var Z0 = u11("inherits"), i02 = F7(), $0 = u11("safe-buffer").Buffer, T02 = [1518500249, 1859775393, -1894007588, -899497514], W0 = new Array(80);
  function U5() {
    this.init(), this._w = W0, i02.call(this, 64, 56);
  }
  Z0(U5, i02);
  U5.prototype.init = function() {
    return this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520, this;
  };
  function j0(t) {
    return t << 1 | t >>> 31;
  }
  function tt(t) {
    return t << 5 | t >>> 27;
  }
  function rt(t) {
    return t << 30 | t >>> 2;
  }
  function ht(t, r2, h14, e) {
    return t === 0 ? r2 & h14 | ~r2 & e : t === 2 ? r2 & h14 | r2 & e | h14 & e : r2 ^ h14 ^ e;
  }
  U5.prototype._update = function(t) {
    for (var r2 = this._w, h14 = this._a | 0, e = this._b | 0, i6 = this._c | 0, _12 = this._d | 0, s10 = this._e | 0, a11 = 0; a11 < 16; ++a11)
      r2[a11] = t.readInt32BE(a11 * 4);
    for (; a11 < 80; ++a11)
      r2[a11] = j0(r2[a11 - 3] ^ r2[a11 - 8] ^ r2[a11 - 14] ^ r2[a11 - 16]);
    for (var x13 = 0; x13 < 80; ++x13) {
      var c10 = ~~(x13 / 20), f7 = tt(h14) + ht(c10, e, i6, _12) + s10 + r2[x13] + T02[c10] | 0;
      s10 = _12, _12 = i6, i6 = rt(e), e = h14, h14 = f7;
    }
    this._a = h14 + this._a | 0, this._b = e + this._b | 0, this._c = i6 + this._c | 0, this._d = _12 + this._d | 0, this._e = s10 + this._e | 0;
  };
  U5.prototype._hash = function() {
    var t = $0.allocUnsafe(20);
    return t.writeInt32BE(this._a | 0, 0), t.writeInt32BE(this._b | 0, 4), t.writeInt32BE(this._c | 0, 8), t.writeInt32BE(this._d | 0, 12), t.writeInt32BE(this._e | 0, 16), t;
  };
  a0.exports = U5;
});
var O8 = w10((Ot3, f02) => {
  var et = u11("inherits"), _0 = F7(), it = u11("safe-buffer").Buffer, at = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298], st2 = new Array(64);
  function z7() {
    this.init(), this._w = st2, _0.call(this, 64, 56);
  }
  et(z7, _0);
  z7.prototype.init = function() {
    return this._a = 1779033703, this._b = 3144134277, this._c = 1013904242, this._d = 2773480762, this._e = 1359893119, this._f = 2600822924, this._g = 528734635, this._h = 1541459225, this;
  };
  function _t2(t, r2, h14) {
    return h14 ^ t & (r2 ^ h14);
  }
  function ft2(t, r2, h14) {
    return t & r2 | h14 & (t | r2);
  }
  function xt3(t) {
    return (t >>> 2 | t << 30) ^ (t >>> 13 | t << 19) ^ (t >>> 22 | t << 10);
  }
  function ct(t) {
    return (t >>> 6 | t << 26) ^ (t >>> 11 | t << 21) ^ (t >>> 25 | t << 7);
  }
  function nt(t) {
    return (t >>> 7 | t << 25) ^ (t >>> 18 | t << 14) ^ t >>> 3;
  }
  function bt2(t) {
    return (t >>> 17 | t << 15) ^ (t >>> 19 | t << 13) ^ t >>> 10;
  }
  z7.prototype._update = function(t) {
    for (var r2 = this._w, h14 = this._a | 0, e = this._b | 0, i6 = this._c | 0, _12 = this._d | 0, s10 = this._e | 0, a11 = this._f | 0, x13 = this._g | 0, c10 = this._h | 0, f7 = 0; f7 < 16; ++f7)
      r2[f7] = t.readInt32BE(f7 * 4);
    for (; f7 < 64; ++f7)
      r2[f7] = bt2(r2[f7 - 2]) + r2[f7 - 7] + nt(r2[f7 - 15]) + r2[f7 - 16] | 0;
    for (var v14 = 0; v14 < 64; ++v14) {
      var B9 = c10 + ct(s10) + _t2(s10, a11, x13) + at[v14] + r2[v14] | 0, A11 = xt3(h14) + ft2(h14, e, i6) | 0;
      c10 = x13, x13 = a11, a11 = s10, s10 = _12 + B9 | 0, _12 = i6, i6 = e, e = h14, h14 = B9 + A11 | 0;
    }
    this._a = h14 + this._a | 0, this._b = e + this._b | 0, this._c = i6 + this._c | 0, this._d = _12 + this._d | 0, this._e = s10 + this._e | 0, this._f = a11 + this._f | 0, this._g = x13 + this._g | 0, this._h = c10 + this._h | 0;
  };
  z7.prototype._hash = function() {
    var t = it.allocUnsafe(32);
    return t.writeInt32BE(this._a, 0), t.writeInt32BE(this._b, 4), t.writeInt32BE(this._c, 8), t.writeInt32BE(this._d, 12), t.writeInt32BE(this._e, 16), t.writeInt32BE(this._f, 20), t.writeInt32BE(this._g, 24), t.writeInt32BE(this._h, 28), t;
  };
  f02.exports = z7;
});
var c0 = w10((Pt3, x0) => {
  var ot2 = u11("inherits"), ut = O8(), dt = F7(), vt = u11("safe-buffer").Buffer, lt4 = new Array(64);
  function L7() {
    this.init(), this._w = lt4, dt.call(this, 64, 56);
  }
  ot2(L7, ut);
  L7.prototype.init = function() {
    return this._a = 3238371032, this._b = 914150663, this._c = 812702999, this._d = 4144912697, this._e = 4290775857, this._f = 1750603025, this._g = 1694076839, this._h = 3204075428, this;
  };
  L7.prototype._hash = function() {
    var t = vt.allocUnsafe(28);
    return t.writeInt32BE(this._a, 0), t.writeInt32BE(this._b, 4), t.writeInt32BE(this._c, 8), t.writeInt32BE(this._d, 12), t.writeInt32BE(this._e, 16), t.writeInt32BE(this._f, 20), t.writeInt32BE(this._g, 24), t;
  };
  x0.exports = L7;
});
var P8 = w10((Qt2, l0) => {
  var Bt2 = u11("inherits"), v0 = F7(), pt2 = u11("safe-buffer").Buffer, n02 = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591], Et3 = new Array(160);
  function G5() {
    this.init(), this._w = Et3, v0.call(this, 128, 112);
  }
  Bt2(G5, v0);
  G5.prototype.init = function() {
    return this._ah = 1779033703, this._bh = 3144134277, this._ch = 1013904242, this._dh = 2773480762, this._eh = 1359893119, this._fh = 2600822924, this._gh = 528734635, this._hh = 1541459225, this._al = 4089235720, this._bl = 2227873595, this._cl = 4271175723, this._dl = 1595750129, this._el = 2917565137, this._fl = 725511199, this._gl = 4215389547, this._hl = 327033209, this;
  };
  function b0(t, r2, h14) {
    return h14 ^ t & (r2 ^ h14);
  }
  function o02(t, r2, h14) {
    return t & r2 | h14 & (t | r2);
  }
  function u0(t, r2) {
    return (t >>> 28 | r2 << 4) ^ (r2 >>> 2 | t << 30) ^ (r2 >>> 7 | t << 25);
  }
  function d02(t, r2) {
    return (t >>> 14 | r2 << 18) ^ (t >>> 18 | r2 << 14) ^ (r2 >>> 9 | t << 23);
  }
  function wt3(t, r2) {
    return (t >>> 1 | r2 << 31) ^ (t >>> 8 | r2 << 24) ^ t >>> 7;
  }
  function Ct3(t, r2) {
    return (t >>> 1 | r2 << 31) ^ (t >>> 8 | r2 << 24) ^ (t >>> 7 | r2 << 25);
  }
  function At2(t, r2) {
    return (t >>> 19 | r2 << 13) ^ (r2 >>> 29 | t << 3) ^ t >>> 6;
  }
  function It4(t, r2) {
    return (t >>> 19 | r2 << 13) ^ (r2 >>> 29 | t << 3) ^ (t >>> 6 | r2 << 26);
  }
  function b8(t, r2) {
    return t >>> 0 < r2 >>> 0 ? 1 : 0;
  }
  G5.prototype._update = function(t) {
    for (var r2 = this._w, h14 = this._ah | 0, e = this._bh | 0, i6 = this._ch | 0, _12 = this._dh | 0, s10 = this._eh | 0, a11 = this._fh | 0, x13 = this._gh | 0, c10 = this._hh | 0, f7 = this._al | 0, v14 = this._bl | 0, B9 = this._cl | 0, A11 = this._dl | 0, p12 = this._el | 0, y10 = this._fl | 0, D9 = this._gl | 0, S9 = this._hl | 0, n5 = 0; n5 < 32; n5 += 2)
      r2[n5] = t.readInt32BE(n5 * 4), r2[n5 + 1] = t.readInt32BE(n5 * 4 + 4);
    for (; n5 < 160; n5 += 2) {
      var k8 = r2[n5 - 30], m16 = r2[n5 - 15 * 2 + 1], A0 = wt3(k8, m16), R7 = Ct3(m16, k8);
      k8 = r2[n5 - 2 * 2], m16 = r2[n5 - 2 * 2 + 1];
      var I0 = At2(k8, m16), V6 = It4(m16, k8), g0 = r2[n5 - 7 * 2], F0 = r2[n5 - 7 * 2 + 1], q0 = r2[n5 - 16 * 2], X4 = r2[n5 - 16 * 2 + 1], d9 = R7 + F0 | 0, I8 = A0 + g0 + b8(d9, R7) | 0;
      d9 = d9 + V6 | 0, I8 = I8 + I0 + b8(d9, V6) | 0, d9 = d9 + X4 | 0, I8 = I8 + q0 + b8(d9, X4) | 0, r2[n5] = I8, r2[n5 + 1] = d9;
    }
    for (var q12 = 0; q12 < 160; q12 += 2) {
      I8 = r2[q12], d9 = r2[q12 + 1];
      var y0 = o02(h14, e, i6), D0 = o02(f7, v14, B9), S0 = u0(h14, f7), Y4 = u0(f7, h14), k0 = d02(s10, p12), m0 = d02(p12, s10), H02 = n02[q12], Z3 = n02[q12 + 1], U0 = b0(s10, a11, x13), $2 = b0(p12, y10, D9), o6 = S9 + m0 | 0, E8 = c10 + k0 + b8(o6, S9) | 0;
      o6 = o6 + $2 | 0, E8 = E8 + U0 + b8(o6, $2) | 0, o6 = o6 + Z3 | 0, E8 = E8 + H02 + b8(o6, Z3) | 0, o6 = o6 + d9 | 0, E8 = E8 + I8 + b8(o6, d9) | 0;
      var T4 = Y4 + D0 | 0, z0 = S0 + y0 + b8(T4, Y4) | 0;
      c10 = x13, S9 = D9, x13 = a11, D9 = y10, a11 = s10, y10 = p12, p12 = A11 + o6 | 0, s10 = _12 + E8 + b8(p12, A11) | 0, _12 = i6, A11 = B9, i6 = e, B9 = v14, e = h14, v14 = f7, f7 = o6 + T4 | 0, h14 = E8 + z0 + b8(f7, o6) | 0;
    }
    this._al = this._al + f7 | 0, this._bl = this._bl + v14 | 0, this._cl = this._cl + B9 | 0, this._dl = this._dl + A11 | 0, this._el = this._el + p12 | 0, this._fl = this._fl + y10 | 0, this._gl = this._gl + D9 | 0, this._hl = this._hl + S9 | 0, this._ah = this._ah + h14 + b8(this._al, f7) | 0, this._bh = this._bh + e + b8(this._bl, v14) | 0, this._ch = this._ch + i6 + b8(this._cl, B9) | 0, this._dh = this._dh + _12 + b8(this._dl, A11) | 0, this._eh = this._eh + s10 + b8(this._el, p12) | 0, this._fh = this._fh + a11 + b8(this._fl, y10) | 0, this._gh = this._gh + x13 + b8(this._gl, D9) | 0, this._hh = this._hh + c10 + b8(this._hl, S9) | 0;
  };
  G5.prototype._hash = function() {
    var t = pt2.allocUnsafe(64);
    function r2(h14, e, i6) {
      t.writeInt32BE(h14, i6), t.writeInt32BE(e, i6 + 4);
    }
    return r2(this._ah, this._al, 0), r2(this._bh, this._bl, 8), r2(this._ch, this._cl, 16), r2(this._dh, this._dl, 24), r2(this._eh, this._el, 32), r2(this._fh, this._fl, 40), r2(this._gh, this._gl, 48), r2(this._hh, this._hl, 56), t;
  };
  l0.exports = G5;
});
var p0 = w10((Rt2, B0) => {
  var gt = u11("inherits"), Ft2 = P8(), qt3 = F7(), yt = u11("safe-buffer").Buffer, Dt3 = new Array(160);
  function J4() {
    this.init(), this._w = Dt3, qt3.call(this, 128, 112);
  }
  gt(J4, Ft2);
  J4.prototype.init = function() {
    return this._ah = 3418070365, this._bh = 1654270250, this._ch = 2438529370, this._dh = 355462360, this._eh = 1731405415, this._fh = 2394180231, this._gh = 3675008525, this._hh = 1203062813, this._al = 3238371032, this._bl = 914150663, this._cl = 812702999, this._dl = 4144912697, this._el = 4290775857, this._fl = 1750603025, this._gl = 1694076839, this._hl = 3204075428, this;
  };
  J4.prototype._hash = function() {
    var t = yt.allocUnsafe(48);
    function r2(h14, e, i6) {
      t.writeInt32BE(h14, i6), t.writeInt32BE(e, i6 + 4);
    }
    return r2(this._ah, this._al, 0), r2(this._bh, this._bl, 8), r2(this._ch, this._cl, 16), r2(this._dh, this._dl, 24), r2(this._eh, this._el, 32), r2(this._fh, this._fl, 40), t;
  };
  B0.exports = J4;
});
var Q2 = w10((l11, E02) => {
  var l11 = E02.exports = function(r2) {
    r2 = r2.toLowerCase();
    var h14 = l11[r2];
    if (!h14)
      throw new Error(r2 + " is not supported (we accept pull requests)");
    return new h14();
  };
  l11.sha = e0();
  l11.sha1 = s0();
  l11.sha224 = c0();
  l11.sha256 = O8();
  l11.sha384 = p0();
  l11.sha512 = P8();
});
var C6 = {};
N0(C6, { default: () => Kt2, sha: () => St2, sha1: () => kt, sha224: () => mt, sha256: () => Ht, sha384: () => Ut, sha512: () => zt3 });
var C0 = W3(Q2());
g13(C6, W3(Q2()));
var { sha: St2, sha1: kt, sha224: mt, sha256: Ht, sha384: Ut, sha512: zt3 } = C0;
var { default: w0, ...Gt } = C0;
var Kt2 = w0 !== void 0 ? w0 : Gt;

// https://esm.sh/v135/cipher-base@1.0.4/denonext/cipher-base.mjs
var cipher_base_exports = {};
__export(cipher_base_exports, {
  default: () => M9
});
import * as __1$ from "node:stream";
import * as __2$ from "node:string_decoder";
var require20 = (n5) => {
  const e = (m16) => typeof m16.default < "u" ? m16.default : m16, c10 = (m16) => Object.assign({}, m16);
  switch (n5) {
    case "safe-buffer":
      return e(safe_buffer_exports);
    case "stream":
      return e(__1$);
    case "string_decoder":
      return e(__2$);
    case "inherits":
      return e(inherits_exports);
    default:
      throw new Error('module "' + n5 + '" not found');
  }
};
var y8 = Object.create;
var u12 = Object.defineProperty;
var w11 = Object.getOwnPropertyDescriptor;
var v12 = Object.getOwnPropertyNames;
var m13 = Object.getPrototypeOf;
var D6 = Object.prototype.hasOwnProperty;
var a9 = ((t) => typeof require20 < "u" ? require20 : typeof Proxy < "u" ? new Proxy(t, { get: (r2, i6) => (typeof require20 < "u" ? require20 : r2)[i6] }) : t)(function(t) {
  if (typeof require20 < "u")
    return require20.apply(this, arguments);
  throw Error('Dynamic require of "' + t + '" is not supported');
});
var A9 = (t, r2) => () => (r2 || t((r2 = { exports: {} }).exports, r2), r2.exports);
var S7 = (t, r2) => {
  for (var i6 in r2)
    u12(t, i6, { get: r2[i6], enumerable: true });
};
var f6 = (t, r2, i6, e) => {
  if (r2 && typeof r2 == "object" || typeof r2 == "function")
    for (let n5 of v12(r2))
      !D6.call(t, n5) && n5 !== i6 && u12(t, n5, { get: () => r2[n5], enumerable: !(e = w11(r2, n5)) || e.enumerable });
  return t;
};
var h12 = (t, r2, i6) => (f6(t, r2, "default"), i6 && f6(i6, r2, "default"));
var _11 = (t, r2, i6) => (i6 = t != null ? y8(m13(t)) : {}, f6(r2 || !t || !t.__esModule ? u12(i6, "default", { value: t, enumerable: true }) : i6, t));
var p10 = A9((E8, c10) => {
  var d9 = a9("safe-buffer").Buffer, l11 = a9("stream").Transform, q12 = a9("string_decoder").StringDecoder, T4 = a9("inherits");
  function o6(t) {
    l11.call(this), this.hashMode = typeof t == "string", this.hashMode ? this[t] = this._finalOrDigest : this.final = this._finalOrDigest, this._final && (this.__final = this._final, this._final = null), this._decoder = null, this._encoding = null;
  }
  T4(o6, l11);
  o6.prototype.update = function(t, r2, i6) {
    typeof t == "string" && (t = d9.from(t, r2));
    var e = this._update(t);
    return this.hashMode ? this : (i6 && (e = this._toString(e, i6)), e);
  };
  o6.prototype.setAutoPadding = function() {
  };
  o6.prototype.getAuthTag = function() {
    throw new Error("trying to get auth tag in unsupported state");
  };
  o6.prototype.setAuthTag = function() {
    throw new Error("trying to set auth tag in unsupported state");
  };
  o6.prototype.setAAD = function() {
    throw new Error("trying to set aad in unsupported state");
  };
  o6.prototype._transform = function(t, r2, i6) {
    var e;
    try {
      this.hashMode ? this._update(t) : this.push(this._update(t));
    } catch (n5) {
      e = n5;
    } finally {
      i6(e);
    }
  };
  o6.prototype._flush = function(t) {
    var r2;
    try {
      this.push(this.__final());
    } catch (i6) {
      r2 = i6;
    }
    t(r2);
  };
  o6.prototype._finalOrDigest = function(t) {
    var r2 = this.__final() || d9.alloc(0);
    return t && (r2 = this._toString(r2, t, true)), r2;
  };
  o6.prototype._toString = function(t, r2, i6) {
    if (this._decoder || (this._decoder = new q12(r2), this._encoding = r2), this._encoding !== r2)
      throw new Error("can't switch encodings");
    var e = this._decoder.write(t);
    return i6 && (e += this._decoder.end()), e;
  };
  c10.exports = o6;
});
var s8 = {};
S7(s8, { default: () => M9 });
var x11 = _11(p10());
h12(s8, _11(p10()));
var { default: g14, ...B8 } = x11;
var M9 = g14 !== void 0 ? g14 : B8;

// https://esm.sh/v135/create-hash@1.2.0/denonext/create-hash.mjs
var require21 = (n5) => {
  const e = (m16) => typeof m16.default < "u" ? m16.default : m16, c10 = (m16) => Object.assign({}, m16);
  switch (n5) {
    case "inherits":
      return e(inherits_exports);
    case "md5.js":
      return e(md5_exports);
    case "ripemd160":
      return e(ripemd160_exports);
    case "sha.js":
      return e(sha_exports);
    case "cipher-base":
      return e(cipher_base_exports);
    default:
      throw new Error('module "' + n5 + '" not found');
  }
};
var q11 = Object.create;
var h13 = Object.defineProperty;
var v13 = Object.getOwnPropertyDescriptor;
var w12 = Object.getOwnPropertyNames;
var x12 = Object.getPrototypeOf;
var l10 = Object.prototype.hasOwnProperty;
var n4 = ((r2) => typeof require21 < "u" ? require21 : typeof Proxy < "u" ? new Proxy(r2, { get: (e, t) => (typeof require21 < "u" ? require21 : e)[t] }) : r2)(function(r2) {
  if (typeof require21 < "u")
    return require21.apply(this, arguments);
  throw Error('Dynamic require of "' + r2 + '" is not supported');
});
var y9 = (r2, e) => () => (e || r2((e = { exports: {} }).exports, e), e.exports);
var D7 = (r2, e) => {
  for (var t in e)
    h13(r2, t, { get: e[t], enumerable: true });
};
var a10 = (r2, e, t, f7) => {
  if (e && typeof e == "object" || typeof e == "function")
    for (let u13 of w12(e))
      !l10.call(r2, u13) && u13 !== t && h13(r2, u13, { get: () => e[u13], enumerable: !(f7 = v13(e, u13)) || f7.enumerable });
  return r2;
};
var s9 = (r2, e, t) => (a10(r2, e, "default"), t && a10(t, e, "default"));
var p11 = (r2, e, t) => (t = r2 != null ? q11(x12(r2)) : {}, a10(e || !r2 || !r2.__esModule ? h13(t, "default", { value: r2, enumerable: true }) : t, r2));
var d8 = y9((R7, c10) => {
  "use strict";
  var H7 = n4("inherits"), M11 = n4("md5.js"), B9 = n4("ripemd160"), C8 = n4("sha.js"), _12 = n4("cipher-base");
  function o6(r2) {
    _12.call(this, "digest"), this._hash = r2;
  }
  H7(o6, _12);
  o6.prototype._update = function(r2) {
    this._hash.update(r2);
  };
  o6.prototype._final = function() {
    return this._hash.digest();
  };
  c10.exports = function(e) {
    return e = e.toLowerCase(), e === "md5" ? new M11() : e === "rmd160" || e === "ripemd160" ? new B9() : new o6(C8(e));
  };
});
var i5 = {};
D7(i5, { default: () => L6 });
var E7 = p11(d8());
s9(i5, p11(d8()));
var { default: m14, ...I7 } = E7;
var L6 = m14 !== void 0 ? m14 : I7;

// https://esm.sh/v135/ethereumjs-util@7.1.5/denonext/ethereumjs-util.mjs
import { Buffer as __Buffer$4 } from "node:buffer";
import * as __4$2 from "node:buffer";
import * as __6$2 from "node:assert";
import * as __7$2 from "node:assert";
import * as __8$2 from "node:assert";
var require22 = (n5) => {
  const e = (m16) => typeof m16.default < "u" ? m16.default : m16, c10 = (m16) => Object.assign({}, m16);
  switch (n5) {
    case "ethereum-cryptography/keccak":
      return c10(keccak_exports2);
    case "create-hash":
      return e(create_hash_exports);
    case "bn.js":
      return e(bn_exports);
    case "rlp":
      return c10(rlp_exports);
    case "buffer":
      return e(__4$2);
    case "ethereum-cryptography/secp256k1":
      return c10(secp256k1_exports2);
    case "assert":
      return e(__6$2);
    default:
      throw new Error('module "' + n5 + '" not found');
  }
};
var Ie = Object.create;
var te = Object.defineProperty;
var Re2 = Object.getOwnPropertyDescriptor;
var qe = Object.getOwnPropertyNames;
var Oe = Object.getPrototypeOf;
var Ke = Object.prototype.hasOwnProperty;
var m15 = ((e) => typeof require22 < "u" ? require22 : typeof Proxy < "u" ? new Proxy(e, { get: (r2, t) => (typeof require22 < "u" ? require22 : r2)[t] }) : e)(function(e) {
  if (typeof require22 < "u")
    return require22.apply(this, arguments);
  throw Error('Dynamic require of "' + e + '" is not supported');
});
var A10 = (e, r2) => () => (r2 || e((r2 = { exports: {} }).exports, r2), r2.exports);
var Ue = (e, r2) => {
  for (var t in r2)
    te(e, t, { get: r2[t], enumerable: true });
};
var re = (e, r2, t, f7) => {
  if (r2 && typeof r2 == "object" || typeof r2 == "function")
    for (let n5 of qe(r2))
      !Ke.call(e, n5) && n5 !== t && te(e, n5, { get: () => r2[n5], enumerable: !(f7 = Re2(r2, n5)) || f7.enumerable });
  return e;
};
var H6 = (e, r2, t) => (re(e, r2, "default"), t && re(t, r2, "default"));
var he = (e, r2, t) => (t = e != null ? Ie(Oe(e)) : {}, re(r2 || !e || !e.__esModule ? te(t, "default", { value: e, enumerable: true }) : t, e));
var S8 = A10((p12) => {
  "use strict";
  var Me = p12 && p12.__createBinding || (Object.create ? function(e, r2, t, f7) {
    f7 === void 0 && (f7 = t);
    var n5 = Object.getOwnPropertyDescriptor(r2, t);
    (!n5 || ("get" in n5 ? !r2.__esModule : n5.writable || n5.configurable)) && (n5 = { enumerable: true, get: function() {
      return r2[t];
    } }), Object.defineProperty(e, f7, n5);
  } : function(e, r2, t, f7) {
    f7 === void 0 && (f7 = t), e[f7] = r2[t];
  }), je = p12 && p12.__setModuleDefault || (Object.create ? function(e, r2) {
    Object.defineProperty(e, "default", { enumerable: true, value: r2 });
  } : function(e, r2) {
    e.default = r2;
  }), Fe2 = p12 && p12.__importStar || function(e) {
    if (e && e.__esModule)
      return e;
    var r2 = {};
    if (e != null)
      for (var t in e)
        t !== "default" && Object.prototype.hasOwnProperty.call(e, t) && Me(r2, e, t);
    return je(r2, e), r2;
  }, Ve = p12 && p12.__importDefault || function(e) {
    return e && e.__esModule ? e : { default: e };
  };
  Object.defineProperty(p12, "__esModule", { value: true });
  p12.rlp = p12.BN = void 0;
  var ze = Ve(m15("bn.js"));
  p12.BN = ze.default;
  var Ze2 = Fe2(m15("rlp"));
  p12.rlp = Ze2;
});
var ie = A10((l11) => {
  "use strict";
  Object.defineProperty(l11, "__esModule", { value: true });
  l11.KECCAK256_RLP = l11.KECCAK256_RLP_S = l11.KECCAK256_RLP_ARRAY = l11.KECCAK256_RLP_ARRAY_S = l11.KECCAK256_NULL = l11.KECCAK256_NULL_S = l11.TWO_POW256 = l11.MAX_INTEGER = l11.MAX_UINT64 = void 0;
  var ne2 = m15("buffer"), fe2 = S8();
  l11.MAX_UINT64 = new fe2.BN("ffffffffffffffff", 16);
  l11.MAX_INTEGER = new fe2.BN("ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff", 16);
  l11.TWO_POW256 = new fe2.BN("10000000000000000000000000000000000000000000000000000000000000000", 16);
  l11.KECCAK256_NULL_S = "c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470";
  l11.KECCAK256_NULL = ne2.Buffer.from(l11.KECCAK256_NULL_S, "hex");
  l11.KECCAK256_RLP_ARRAY_S = "1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347";
  l11.KECCAK256_RLP_ARRAY = ne2.Buffer.from(l11.KECCAK256_RLP_ARRAY_S, "hex");
  l11.KECCAK256_RLP_S = "56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421";
  l11.KECCAK256_RLP = ne2.Buffer.from(l11.KECCAK256_RLP_S, "hex");
});
var k7 = A10((v14) => {
  "use strict";
  Object.defineProperty(v14, "__esModule", { value: true });
  v14.isHexString = v14.getKeys = v14.fromAscii = v14.fromUtf8 = v14.toAscii = v14.arrayContainsArray = v14.getBinarySize = v14.padToEven = v14.stripHexPrefix = v14.isHexPrefixed = void 0;
  function pe2(e) {
    if (typeof e != "string")
      throw new Error("[isHexPrefixed] input must be type 'string', received type ".concat(typeof e));
    return e[0] === "0" && e[1] === "x";
  }
  v14.isHexPrefixed = pe2;
  var De4 = function(e) {
    if (typeof e != "string")
      throw new Error("[stripHexPrefix] input must be type 'string', received ".concat(typeof e));
    return pe2(e) ? e.slice(2) : e;
  };
  v14.stripHexPrefix = De4;
  function ye2(e) {
    var r2 = e;
    if (typeof r2 != "string")
      throw new Error("[padToEven] value must be type 'string', received ".concat(typeof r2));
    return r2.length % 2 && (r2 = "0".concat(r2)), r2;
  }
  v14.padToEven = ye2;
  function Xe(e) {
    if (typeof e != "string")
      throw new Error("[getBinarySize] method requires input type 'string', recieved ".concat(typeof e));
    return __Buffer$4.byteLength(e, "utf8");
  }
  v14.getBinarySize = Xe;
  function Ge(e, r2, t) {
    if (Array.isArray(e) !== true)
      throw new Error("[arrayContainsArray] method requires input 'superset' to be an array, got type '".concat(typeof e, "'"));
    if (Array.isArray(r2) !== true)
      throw new Error("[arrayContainsArray] method requires input 'subset' to be an array, got type '".concat(typeof r2, "'"));
    return r2[t ? "some" : "every"](function(f7) {
      return e.indexOf(f7) >= 0;
    });
  }
  v14.arrayContainsArray = Ge;
  function Je(e) {
    var r2 = "", t = 0, f7 = e.length;
    for (e.substring(0, 2) === "0x" && (t = 2); t < f7; t += 2) {
      var n5 = parseInt(e.substr(t, 2), 16);
      r2 += String.fromCharCode(n5);
    }
    return r2;
  }
  v14.toAscii = Je;
  function Ye2(e) {
    var r2 = __Buffer$4.from(e, "utf8");
    return "0x".concat(ye2(r2.toString("hex")).replace(/^0+|0+$/g, ""));
  }
  v14.fromUtf8 = Ye2;
  function We(e) {
    for (var r2 = "", t = 0; t < e.length; t++) {
      var f7 = e.charCodeAt(t), n5 = f7.toString(16);
      r2 += n5.length < 2 ? "0".concat(n5) : n5;
    }
    return "0x".concat(r2);
  }
  v14.fromAscii = We;
  function $e(e, r2, t) {
    if (!Array.isArray(e))
      throw new Error("[getKeys] method expects input 'params' to be an array, got ".concat(typeof e));
    if (typeof r2 != "string")
      throw new Error("[getKeys] method expects input 'key' to be type 'string', got ".concat(typeof e));
    for (var f7 = [], n5 = 0; n5 < e.length; n5++) {
      var a11 = e[n5][r2];
      if (t && !a11)
        a11 = "";
      else if (typeof a11 != "string")
        throw new Error("invalid abi - expected type 'string', received ".concat(typeof a11));
      f7.push(a11);
    }
    return f7;
  }
  v14.getKeys = $e;
  function Qe(e, r2) {
    return !(typeof e != "string" || !e.match(/^0x[0-9A-Fa-f]*$/) || r2 && e.length !== 2 + 2 * r2);
  }
  v14.isHexString = Qe;
});
var M10 = A10((w13) => {
  "use strict";
  Object.defineProperty(w13, "__esModule", { value: true });
  w13.assertIsString = w13.assertIsArray = w13.assertIsBuffer = w13.assertIsHexString = void 0;
  var er2 = k7(), rr = function(e) {
    if (!(0, er2.isHexString)(e)) {
      var r2 = "This method only supports 0x-prefixed hex strings but input was: ".concat(e);
      throw new Error(r2);
    }
  };
  w13.assertIsHexString = rr;
  var tr = function(e) {
    if (!__Buffer$4.isBuffer(e)) {
      var r2 = "This method only supports Buffer but input was: ".concat(e);
      throw new Error(r2);
    }
  };
  w13.assertIsBuffer = tr;
  var nr2 = function(e) {
    if (!Array.isArray(e)) {
      var r2 = "This method only supports number arrays but input was: ".concat(e);
      throw new Error(r2);
    }
  };
  w13.assertIsArray = nr2;
  var fr2 = function(e) {
    if (typeof e != "string") {
      var r2 = "This method only supports strings but input was: ".concat(e);
      throw new Error(r2);
    }
  };
  w13.assertIsString = fr2;
});
var N4 = A10((i6) => {
  "use strict";
  var ir2 = i6 && i6.__values || function(e) {
    var r2 = typeof Symbol == "function" && Symbol.iterator, t = r2 && e[r2], f7 = 0;
    if (t)
      return t.call(e);
    if (e && typeof e.length == "number")
      return { next: function() {
        return e && f7 >= e.length && (e = void 0), { value: e && e[f7++], done: !e };
      } };
    throw new TypeError(r2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }, ar2 = i6 && i6.__read || function(e, r2) {
    var t = typeof Symbol == "function" && e[Symbol.iterator];
    if (!t)
      return e;
    var f7 = t.call(e), n5, a11 = [], s10;
    try {
      for (; (r2 === void 0 || r2-- > 0) && !(n5 = f7.next()).done; )
        a11.push(n5.value);
    } catch (d9) {
      s10 = { error: d9 };
    } finally {
      try {
        n5 && !n5.done && (t = f7.return) && t.call(f7);
      } finally {
        if (s10)
          throw s10.error;
      }
    }
    return a11;
  };
  Object.defineProperty(i6, "__esModule", { value: true });
  i6.bufArrToArr = i6.arrToBufArr = i6.validateNoLeadingZeroes = i6.baToJSON = i6.toUtf8 = i6.addHexPrefix = i6.toUnsigned = i6.fromSigned = i6.bufferToHex = i6.bufferToInt = i6.toBuffer = i6.unpadHexString = i6.unpadArray = i6.unpadBuffer = i6.setLengthRight = i6.setLengthLeft = i6.zeros = i6.intToBuffer = i6.intToHex = void 0;
  var ae = S8(), L7 = k7(), j7 = M10(), or = function(e) {
    if (!Number.isSafeInteger(e) || e < 0)
      throw new Error("Received an invalid integer type: ".concat(e));
    return "0x".concat(e.toString(16));
  };
  i6.intToHex = or;
  var ur2 = function(e) {
    var r2 = (0, i6.intToHex)(e);
    return __Buffer$4.from((0, L7.padToEven)(r2.slice(2)), "hex");
  };
  i6.intToBuffer = ur2;
  var sr2 = function(e) {
    return __Buffer$4.allocUnsafe(e).fill(0);
  };
  i6.zeros = sr2;
  var Ae = function(e, r2, t) {
    var f7 = (0, i6.zeros)(r2);
    return t ? e.length < r2 ? (e.copy(f7), f7) : e.slice(0, r2) : e.length < r2 ? (e.copy(f7, r2 - e.length), f7) : e.slice(-r2);
  }, cr = function(e, r2) {
    return (0, j7.assertIsBuffer)(e), Ae(e, r2, false);
  };
  i6.setLengthLeft = cr;
  var dr = function(e, r2) {
    return (0, j7.assertIsBuffer)(e), Ae(e, r2, true);
  };
  i6.setLengthRight = dr;
  var oe = function(e) {
    for (var r2 = e[0]; e.length > 0 && r2.toString() === "0"; )
      e = e.slice(1), r2 = e[0];
    return e;
  }, lr = function(e) {
    return (0, j7.assertIsBuffer)(e), oe(e);
  };
  i6.unpadBuffer = lr;
  var vr = function(e) {
    return (0, j7.assertIsArray)(e), oe(e);
  };
  i6.unpadArray = vr;
  var gr = function(e) {
    return (0, j7.assertIsHexString)(e), e = (0, L7.stripHexPrefix)(e), oe(e);
  };
  i6.unpadHexString = gr;
  var hr2 = function(e) {
    if (e == null)
      return __Buffer$4.allocUnsafe(0);
    if (__Buffer$4.isBuffer(e) || Array.isArray(e) || e instanceof Uint8Array)
      return __Buffer$4.from(e);
    if (typeof e == "string") {
      if (!(0, L7.isHexString)(e))
        throw new Error("Cannot convert string to buffer. toBuffer only supports 0x-prefixed hex strings and this string was given: ".concat(e));
      return __Buffer$4.from((0, L7.padToEven)((0, L7.stripHexPrefix)(e)), "hex");
    }
    if (typeof e == "number")
      return (0, i6.intToBuffer)(e);
    if (ae.BN.isBN(e)) {
      if (e.isNeg())
        throw new Error("Cannot convert negative BN to buffer. Given: ".concat(e));
      return e.toArrayLike(__Buffer$4);
    }
    if (e.toArray)
      return __Buffer$4.from(e.toArray());
    if (e.toBuffer)
      return __Buffer$4.from(e.toBuffer());
    throw new Error("invalid type");
  };
  i6.toBuffer = hr2;
  var pr = function(e) {
    return new ae.BN((0, i6.toBuffer)(e)).toNumber();
  };
  i6.bufferToInt = pr;
  var yr = function(e) {
    return e = (0, i6.toBuffer)(e), "0x" + e.toString("hex");
  };
  i6.bufferToHex = yr;
  var Ar = function(e) {
    return new ae.BN(e).fromTwos(256);
  };
  i6.fromSigned = Ar;
  var _r = function(e) {
    return __Buffer$4.from(e.toTwos(256).toArray());
  };
  i6.toUnsigned = _r;
  var br = function(e) {
    return typeof e != "string" || (0, L7.isHexPrefixed)(e) ? e : "0x" + e;
  };
  i6.addHexPrefix = br;
  var Br = function(e) {
    var r2 = /^(00)+|(00)+$/g;
    if (e = (0, L7.stripHexPrefix)(e), e.length % 2 !== 0)
      throw new Error("Invalid non-even hex string input for toUtf8() provided");
    var t = __Buffer$4.from(e.replace(r2, ""), "hex");
    return t.toString("utf8");
  };
  i6.toUtf8 = Br;
  var mr = function(e) {
    if (__Buffer$4.isBuffer(e))
      return "0x".concat(e.toString("hex"));
    if (e instanceof Array) {
      for (var r2 = [], t = 0; t < e.length; t++)
        r2.push((0, i6.baToJSON)(e[t]));
      return r2;
    }
  };
  i6.baToJSON = mr;
  var Sr = function(e) {
    var r2, t;
    try {
      for (var f7 = ir2(Object.entries(e)), n5 = f7.next(); !n5.done; n5 = f7.next()) {
        var a11 = ar2(n5.value, 2), s10 = a11[0], d9 = a11[1];
        if (d9 !== void 0 && d9.length > 0 && d9[0] === 0)
          throw new Error("".concat(s10, " cannot have leading zeroes, received: ").concat(d9.toString("hex")));
      }
    } catch (g15) {
      r2 = { error: g15 };
    } finally {
      try {
        n5 && !n5.done && (t = f7.return) && t.call(f7);
      } finally {
        if (r2)
          throw r2.error;
      }
    }
  };
  i6.validateNoLeadingZeroes = Sr;
  function _e(e) {
    return Array.isArray(e) ? e.map(function(r2) {
      return _e(r2);
    }) : __Buffer$4.from(e);
  }
  i6.arrToBufArr = _e;
  function be(e) {
    return Array.isArray(e) ? e.map(function(r2) {
      return be(r2);
    }) : Uint8Array.from(e ?? []);
  }
  i6.bufArrToArr = be;
});
var D8 = A10((c10) => {
  "use strict";
  Object.defineProperty(c10, "__esModule", { value: true });
  c10.rlphash = c10.ripemd160FromArray = c10.ripemd160FromString = c10.ripemd160 = c10.sha256FromArray = c10.sha256FromString = c10.sha256 = c10.keccakFromArray = c10.keccakFromHexString = c10.keccakFromString = c10.keccak256 = c10.keccak = void 0;
  var Z3 = m15("ethereum-cryptography/keccak"), Be3 = m15("create-hash"), wr = S8(), F8 = N4(), x13 = M10(), xr = function(e, r2) {
    switch (r2 === void 0 && (r2 = 256), (0, x13.assertIsBuffer)(e), r2) {
      case 224:
        return (0, Z3.keccak224)(e);
      case 256:
        return (0, Z3.keccak256)(e);
      case 384:
        return (0, Z3.keccak384)(e);
      case 512:
        return (0, Z3.keccak512)(e);
      default:
        throw new Error("Invald algorithm: keccak".concat(r2));
    }
  };
  c10.keccak = xr;
  var Tr = function(e) {
    return (0, c10.keccak)(e);
  };
  c10.keccak256 = Tr;
  var Pr = function(e, r2) {
    r2 === void 0 && (r2 = 256), (0, x13.assertIsString)(e);
    var t = __Buffer$4.from(e, "utf8");
    return (0, c10.keccak)(t, r2);
  };
  c10.keccakFromString = Pr;
  var Er = function(e, r2) {
    return r2 === void 0 && (r2 = 256), (0, x13.assertIsHexString)(e), (0, c10.keccak)((0, F8.toBuffer)(e), r2);
  };
  c10.keccakFromHexString = Er;
  var Nr = function(e, r2) {
    return r2 === void 0 && (r2 = 256), (0, x13.assertIsArray)(e), (0, c10.keccak)((0, F8.toBuffer)(e), r2);
  };
  c10.keccakFromArray = Nr;
  var ue2 = function(e) {
    return e = (0, F8.toBuffer)(e), Be3("sha256").update(e).digest();
  }, Cr = function(e) {
    return (0, x13.assertIsBuffer)(e), ue2(e);
  };
  c10.sha256 = Cr;
  var Hr = function(e) {
    return (0, x13.assertIsString)(e), ue2(e);
  };
  c10.sha256FromString = Hr;
  var kr = function(e) {
    return (0, x13.assertIsArray)(e), ue2(e);
  };
  c10.sha256FromArray = kr;
  var se2 = function(e, r2) {
    e = (0, F8.toBuffer)(e);
    var t = Be3("rmd160").update(e).digest();
    return r2 === true ? (0, F8.setLengthLeft)(t, 32) : t;
  }, Lr = function(e, r2) {
    return (0, x13.assertIsBuffer)(e), se2(e, r2);
  };
  c10.ripemd160 = Lr;
  var Ir = function(e, r2) {
    return (0, x13.assertIsString)(e), se2(e, r2);
  };
  c10.ripemd160FromString = Ir;
  var Rr = function(e, r2) {
    return (0, x13.assertIsArray)(e), se2(e, r2);
  };
  c10.ripemd160FromArray = Rr;
  var qr = function(e) {
    return (0, c10.keccak)(wr.rlp.encode(e));
  };
  c10.rlphash = qr;
});
var G4 = A10((y10) => {
  "use strict";
  Object.defineProperty(y10, "__esModule", { value: true });
  y10.toType = y10.TypeOutput = y10.bnToRlp = y10.bnToUnpaddedBuffer = y10.bnToHex = void 0;
  var ce2 = S8(), Or = k7(), me2 = N4();
  function Kr(e) {
    return "0x".concat(e.toString(16));
  }
  y10.bnToHex = Kr;
  function Se(e) {
    return (0, me2.unpadBuffer)(e.toArrayLike(__Buffer$4));
  }
  y10.bnToUnpaddedBuffer = Se;
  function Ur(e) {
    return Se(e);
  }
  y10.bnToRlp = Ur;
  var X4;
  (function(e) {
    e[e.Number = 0] = "Number", e[e.BN = 1] = "BN", e[e.Buffer = 2] = "Buffer", e[e.PrefixedHexString = 3] = "PrefixedHexString";
  })(X4 = y10.TypeOutput || (y10.TypeOutput = {}));
  function Mr(e, r2) {
    if (e === null)
      return null;
    if (e !== void 0) {
      if (typeof e == "string" && !(0, Or.isHexString)(e))
        throw new Error("A string must be provided with a 0x-prefix, given: ".concat(e));
      if (typeof e == "number" && !Number.isSafeInteger(e))
        throw new Error("The provided number is greater than MAX_SAFE_INTEGER (please use an alternative input type)");
      var t = (0, me2.toBuffer)(e);
      if (r2 === X4.Buffer)
        return t;
      if (r2 === X4.BN)
        return new ce2.BN(t);
      if (r2 === X4.Number) {
        var f7 = new ce2.BN(t), n5 = new ce2.BN(Number.MAX_SAFE_INTEGER.toString());
        if (f7.gt(n5))
          throw new Error("The provided number is greater than MAX_SAFE_INTEGER (please use an alternative output type)");
        return f7.toNumber();
      } else
        return "0x".concat(t.toString("hex"));
    }
  }
  y10.toType = Mr;
});
var le2 = A10((o6) => {
  "use strict";
  var jr = o6 && o6.__read || function(e, r2) {
    var t = typeof Symbol == "function" && e[Symbol.iterator];
    if (!t)
      return e;
    var f7 = t.call(e), n5, a11 = [], s10;
    try {
      for (; (r2 === void 0 || r2-- > 0) && !(n5 = f7.next()).done; )
        a11.push(n5.value);
    } catch (d9) {
      s10 = { error: d9 };
    } finally {
      try {
        n5 && !n5.done && (t = f7.return) && t.call(f7);
      } finally {
        if (s10)
          throw s10.error;
      }
    }
    return a11;
  }, Fr = o6 && o6.__importDefault || function(e) {
    return e && e.__esModule ? e : { default: e };
  };
  Object.defineProperty(o6, "__esModule", { value: true });
  o6.isZeroAddress = o6.zeroAddress = o6.importPublic = o6.privateToAddress = o6.privateToPublic = o6.publicToAddress = o6.pubToAddress = o6.isValidPublic = o6.isValidPrivate = o6.generateAddress2 = o6.generateAddress = o6.isValidChecksumAddress = o6.toChecksumAddress = o6.isValidAddress = o6.Account = void 0;
  var de = Fr(m15("assert")), B9 = S8(), q12 = m15("ethereum-cryptography/secp256k1"), Vr = k7(), J4 = ie(), R7 = N4(), O9 = D8(), _12 = M10(), Y4 = G4(), zr = function() {
    function e(r2, t, f7, n5) {
      r2 === void 0 && (r2 = new B9.BN(0)), t === void 0 && (t = new B9.BN(0)), f7 === void 0 && (f7 = J4.KECCAK256_RLP), n5 === void 0 && (n5 = J4.KECCAK256_NULL), this.nonce = r2, this.balance = t, this.stateRoot = f7, this.codeHash = n5, this._validate();
    }
    return e.fromAccountData = function(r2) {
      var t = r2.nonce, f7 = r2.balance, n5 = r2.stateRoot, a11 = r2.codeHash;
      return new e(t ? new B9.BN((0, R7.toBuffer)(t)) : void 0, f7 ? new B9.BN((0, R7.toBuffer)(f7)) : void 0, n5 ? (0, R7.toBuffer)(n5) : void 0, a11 ? (0, R7.toBuffer)(a11) : void 0);
    }, e.fromRlpSerializedAccount = function(r2) {
      var t = B9.rlp.decode(r2);
      if (!Array.isArray(t))
        throw new Error("Invalid serialized account input. Must be array");
      return this.fromValuesArray(t);
    }, e.fromValuesArray = function(r2) {
      var t = jr(r2, 4), f7 = t[0], n5 = t[1], a11 = t[2], s10 = t[3];
      return new e(new B9.BN(f7), new B9.BN(n5), a11, s10);
    }, e.prototype._validate = function() {
      if (this.nonce.lt(new B9.BN(0)))
        throw new Error("nonce must be greater than zero");
      if (this.balance.lt(new B9.BN(0)))
        throw new Error("balance must be greater than zero");
      if (this.stateRoot.length !== 32)
        throw new Error("stateRoot must have a length of 32");
      if (this.codeHash.length !== 32)
        throw new Error("codeHash must have a length of 32");
    }, e.prototype.raw = function() {
      return [(0, Y4.bnToUnpaddedBuffer)(this.nonce), (0, Y4.bnToUnpaddedBuffer)(this.balance), this.stateRoot, this.codeHash];
    }, e.prototype.serialize = function() {
      return B9.rlp.encode(this.raw());
    }, e.prototype.isContract = function() {
      return !this.codeHash.equals(J4.KECCAK256_NULL);
    }, e.prototype.isEmpty = function() {
      return this.balance.isZero() && this.nonce.isZero() && this.codeHash.equals(J4.KECCAK256_NULL);
    }, e;
  }();
  o6.Account = zr;
  var Zr = function(e) {
    try {
      (0, _12.assertIsString)(e);
    } catch {
      return false;
    }
    return /^0x[0-9a-fA-F]{40}$/.test(e);
  };
  o6.isValidAddress = Zr;
  var Dr = function(e, r2) {
    (0, _12.assertIsHexString)(e);
    var t = (0, Vr.stripHexPrefix)(e).toLowerCase(), f7 = "";
    if (r2) {
      var n5 = (0, Y4.toType)(r2, Y4.TypeOutput.BN);
      f7 = n5.toString() + "0x";
    }
    for (var a11 = (0, O9.keccakFromString)(f7 + t).toString("hex"), s10 = "0x", d9 = 0; d9 < t.length; d9++)
      parseInt(a11[d9], 16) >= 8 ? s10 += t[d9].toUpperCase() : s10 += t[d9];
    return s10;
  };
  o6.toChecksumAddress = Dr;
  var Xr = function(e, r2) {
    return (0, o6.isValidAddress)(e) && (0, o6.toChecksumAddress)(e, r2) === e;
  };
  o6.isValidChecksumAddress = Xr;
  var Gr = function(e, r2) {
    (0, _12.assertIsBuffer)(e), (0, _12.assertIsBuffer)(r2);
    var t = new B9.BN(r2);
    return t.isZero() ? (0, O9.rlphash)([e, null]).slice(-20) : (0, O9.rlphash)([e, __Buffer$4.from(t.toArray())]).slice(-20);
  };
  o6.generateAddress = Gr;
  var Jr = function(e, r2, t) {
    (0, _12.assertIsBuffer)(e), (0, _12.assertIsBuffer)(r2), (0, _12.assertIsBuffer)(t), (0, de.default)(e.length === 20), (0, de.default)(r2.length === 32);
    var f7 = (0, O9.keccak256)(__Buffer$4.concat([__Buffer$4.from("ff", "hex"), e, r2, (0, O9.keccak256)(t)]));
    return f7.slice(-20);
  };
  o6.generateAddress2 = Jr;
  var Yr = function(e) {
    return (0, q12.privateKeyVerify)(e);
  };
  o6.isValidPrivate = Yr;
  var Wr = function(e, r2) {
    return r2 === void 0 && (r2 = false), (0, _12.assertIsBuffer)(e), e.length === 64 ? (0, q12.publicKeyVerify)(__Buffer$4.concat([__Buffer$4.from([4]), e])) : r2 ? (0, q12.publicKeyVerify)(e) : false;
  };
  o6.isValidPublic = Wr;
  var $r = function(e, r2) {
    return r2 === void 0 && (r2 = false), (0, _12.assertIsBuffer)(e), r2 && e.length !== 64 && (e = __Buffer$4.from((0, q12.publicKeyConvert)(e, false).slice(1))), (0, de.default)(e.length === 64), (0, O9.keccak)(e).slice(-20);
  };
  o6.pubToAddress = $r;
  o6.publicToAddress = o6.pubToAddress;
  var Qr = function(e) {
    return (0, _12.assertIsBuffer)(e), __Buffer$4.from((0, q12.publicKeyCreate)(e, false)).slice(1);
  };
  o6.privateToPublic = Qr;
  var et = function(e) {
    return (0, o6.publicToAddress)((0, o6.privateToPublic)(e));
  };
  o6.privateToAddress = et;
  var rt = function(e) {
    return (0, _12.assertIsBuffer)(e), e.length !== 64 && (e = __Buffer$4.from((0, q12.publicKeyConvert)(e, false).slice(1))), e;
  };
  o6.importPublic = rt;
  var tt = function() {
    var e = 20, r2 = (0, R7.zeros)(e);
    return (0, R7.bufferToHex)(r2);
  };
  o6.zeroAddress = tt;
  var nt = function(e) {
    try {
      (0, _12.assertIsString)(e);
    } catch {
      return false;
    }
    var r2 = (0, o6.zeroAddress)();
    return r2 === e;
  };
  o6.isZeroAddress = nt;
});
var xe = A10((K7) => {
  "use strict";
  var ft2 = K7 && K7.__importDefault || function(e) {
    return e && e.__esModule ? e : { default: e };
  };
  Object.defineProperty(K7, "__esModule", { value: true });
  K7.Address = void 0;
  var I8 = ft2(m15("assert")), W4 = S8(), we2 = N4(), V6 = le2(), it = function() {
    function e(r2) {
      (0, I8.default)(r2.length === 20, "Invalid address length"), this.buf = r2;
    }
    return e.zero = function() {
      return new e((0, we2.zeros)(20));
    }, e.fromString = function(r2) {
      return (0, I8.default)((0, V6.isValidAddress)(r2), "Invalid address"), new e((0, we2.toBuffer)(r2));
    }, e.fromPublicKey = function(r2) {
      (0, I8.default)(__Buffer$4.isBuffer(r2), "Public key should be Buffer");
      var t = (0, V6.pubToAddress)(r2);
      return new e(t);
    }, e.fromPrivateKey = function(r2) {
      (0, I8.default)(__Buffer$4.isBuffer(r2), "Private key should be Buffer");
      var t = (0, V6.privateToAddress)(r2);
      return new e(t);
    }, e.generate = function(r2, t) {
      return (0, I8.default)(W4.BN.isBN(t)), new e((0, V6.generateAddress)(r2.buf, t.toArrayLike(__Buffer$4)));
    }, e.generate2 = function(r2, t, f7) {
      return (0, I8.default)(__Buffer$4.isBuffer(t)), (0, I8.default)(__Buffer$4.isBuffer(f7)), new e((0, V6.generateAddress2)(r2.buf, t, f7));
    }, e.prototype.equals = function(r2) {
      return this.buf.equals(r2.buf);
    }, e.prototype.isZero = function() {
      return this.equals(e.zero());
    }, e.prototype.isPrecompileOrSystemAddress = function() {
      var r2 = new W4.BN(this.buf), t = new W4.BN(0), f7 = new W4.BN("ffff", "hex");
      return r2.gte(t) && r2.lte(f7);
    }, e.prototype.toString = function() {
      return "0x" + this.buf.toString("hex");
    }, e.prototype.toBuffer = function() {
      return __Buffer$4.from(this.buf);
    }, e;
  }();
  K7.Address = it;
});
var Te = A10((h14) => {
  "use strict";
  Object.defineProperty(h14, "__esModule", { value: true });
  h14.hashPersonalMessage = h14.isValidSignature = h14.fromRpcSig = h14.toCompactSig = h14.toRpcSig = h14.ecrecover = h14.ecsign = void 0;
  var ve = m15("ethereum-cryptography/secp256k1"), z7 = S8(), b8 = N4(), at = D8(), ot2 = M10(), T4 = G4();
  function ut(e, r2, t) {
    var f7 = (0, ve.ecdsaSign)(e, r2), n5 = f7.signature, a11 = f7.recid, s10 = __Buffer$4.from(n5.slice(0, 32)), d9 = __Buffer$4.from(n5.slice(32, 64));
    if (!t || typeof t == "number") {
      if (t && !Number.isSafeInteger(t))
        throw new Error("The provided number is greater than MAX_SAFE_INTEGER (please use an alternative input type)");
      var g15 = t ? a11 + (t * 2 + 35) : a11 + 27;
      return { r: s10, s: d9, v: g15 };
    }
    var ke2 = (0, T4.toType)(t, T4.TypeOutput.BN), Le2 = ke2.muln(2).addn(35).addn(a11).toArrayLike(__Buffer$4);
    return { r: s10, s: d9, v: Le2 };
  }
  h14.ecsign = ut;
  function $2(e, r2) {
    var t = (0, T4.toType)(e, T4.TypeOutput.BN);
    if (t.eqn(0) || t.eqn(1))
      return (0, T4.toType)(e, T4.TypeOutput.BN);
    if (!r2)
      return t.subn(27);
    var f7 = (0, T4.toType)(r2, T4.TypeOutput.BN);
    return t.sub(f7.muln(2).addn(35));
  }
  function Q3(e) {
    var r2 = new z7.BN(e);
    return r2.eqn(0) || r2.eqn(1);
  }
  var st2 = function(e, r2, t, f7, n5) {
    var a11 = __Buffer$4.concat([(0, b8.setLengthLeft)(t, 32), (0, b8.setLengthLeft)(f7, 32)], 64), s10 = $2(r2, n5);
    if (!Q3(s10))
      throw new Error("Invalid signature v value");
    var d9 = (0, ve.ecdsaRecover)(a11, s10.toNumber(), e);
    return __Buffer$4.from((0, ve.publicKeyConvert)(d9, false).slice(1));
  };
  h14.ecrecover = st2;
  var ct = function(e, r2, t, f7) {
    var n5 = $2(e, f7);
    if (!Q3(n5))
      throw new Error("Invalid signature v value");
    return (0, b8.bufferToHex)(__Buffer$4.concat([(0, b8.setLengthLeft)(r2, 32), (0, b8.setLengthLeft)(t, 32), (0, b8.toBuffer)(e)]));
  };
  h14.toRpcSig = ct;
  var dt = function(e, r2, t, f7) {
    var n5 = $2(e, f7);
    if (!Q3(n5))
      throw new Error("Invalid signature v value");
    var a11 = (0, T4.toType)(e, T4.TypeOutput.Number), s10 = t;
    return (a11 > 28 && a11 % 2 === 1 || a11 === 1 || a11 === 28) && (s10 = __Buffer$4.from(t), s10[0] |= 128), (0, b8.bufferToHex)(__Buffer$4.concat([(0, b8.setLengthLeft)(r2, 32), (0, b8.setLengthLeft)(s10, 32)]));
  };
  h14.toCompactSig = dt;
  var lt4 = function(e) {
    var r2 = (0, b8.toBuffer)(e), t, f7, n5;
    if (r2.length >= 65)
      t = r2.slice(0, 32), f7 = r2.slice(32, 64), n5 = (0, b8.bufferToInt)(r2.slice(64));
    else if (r2.length === 64)
      t = r2.slice(0, 32), f7 = r2.slice(32, 64), n5 = (0, b8.bufferToInt)(r2.slice(32, 33)) >> 7, f7[0] &= 127;
    else
      throw new Error("Invalid signature length");
    return n5 < 27 && (n5 += 27), { v: n5, r: t, s: f7 };
  };
  h14.fromRpcSig = lt4;
  var vt = function(e, r2, t, f7, n5) {
    f7 === void 0 && (f7 = true);
    var a11 = new z7.BN("7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0", 16), s10 = new z7.BN("fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141", 16);
    if (r2.length !== 32 || t.length !== 32 || !Q3($2(e, n5)))
      return false;
    var d9 = new z7.BN(r2), g15 = new z7.BN(t);
    return !(d9.isZero() || d9.gt(s10) || g15.isZero() || g15.gt(s10) || f7 && g15.cmp(a11) === 1);
  };
  h14.isValidSignature = vt;
  var gt = function(e) {
    (0, ot2.assertIsBuffer)(e);
    var r2 = __Buffer$4.from(`Ethereum Signed Message:
`.concat(e.length), "utf-8");
    return (0, at.keccak)(__Buffer$4.concat([r2, e]));
  };
  h14.hashPersonalMessage = gt;
});
var Ne2 = A10((U5) => {
  "use strict";
  var ht = U5 && U5.__importDefault || function(e) {
    return e && e.__esModule ? e : { default: e };
  };
  Object.defineProperty(U5, "__esModule", { value: true });
  U5.defineProperties = void 0;
  var Pe = ht(m15("assert")), pt2 = k7(), Ee3 = S8(), ee2 = N4(), yt = function(e, r2, t) {
    if (e.raw = [], e._fields = [], e.toJSON = function(n5) {
      if (n5 === void 0 && (n5 = false), n5) {
        var a11 = {};
        return e._fields.forEach(function(s10) {
          a11[s10] = "0x".concat(e[s10].toString("hex"));
        }), a11;
      }
      return (0, ee2.baToJSON)(e.raw);
    }, e.serialize = function() {
      return Ee3.rlp.encode(e.raw);
    }, r2.forEach(function(n5, a11) {
      e._fields.push(n5.name);
      function s10() {
        return e.raw[a11];
      }
      function d9(g15) {
        g15 = (0, ee2.toBuffer)(g15), g15.toString("hex") === "00" && !n5.allowZero && (g15 = __Buffer$4.allocUnsafe(0)), n5.allowLess && n5.length ? (g15 = (0, ee2.unpadBuffer)(g15), (0, Pe.default)(n5.length >= g15.length, "The field ".concat(n5.name, " must not have more ").concat(n5.length, " bytes"))) : !(n5.allowZero && g15.length === 0) && n5.length && (0, Pe.default)(n5.length === g15.length, "The field ".concat(n5.name, " must have byte length of ").concat(n5.length)), e.raw[a11] = g15;
      }
      Object.defineProperty(e, n5.name, { enumerable: true, configurable: true, get: s10, set: d9 }), n5.default && (e[n5.name] = n5.default), n5.alias && Object.defineProperty(e, n5.alias, { enumerable: false, configurable: true, set: d9, get: s10 });
    }), t)
      if (typeof t == "string" && (t = __Buffer$4.from((0, pt2.stripHexPrefix)(t), "hex")), __Buffer$4.isBuffer(t) && (t = Ee3.rlp.decode(t)), Array.isArray(t)) {
        if (t.length > e._fields.length)
          throw new Error("wrong number of fields in data");
        t.forEach(function(n5, a11) {
          e[e._fields[a11]] = (0, ee2.toBuffer)(n5);
        });
      } else if (typeof t == "object") {
        var f7 = Object.keys(t);
        r2.forEach(function(n5) {
          f7.indexOf(n5.name) !== -1 && (e[n5.name] = t[n5.name]), f7.indexOf(n5.alias) !== -1 && (e[n5.alias] = t[n5.alias]);
        });
      } else
        throw new Error("invalid data");
  };
  U5.defineProperties = yt;
});
var ge3 = A10((u13) => {
  "use strict";
  var At2 = u13 && u13.__createBinding || (Object.create ? function(e, r2, t, f7) {
    f7 === void 0 && (f7 = t);
    var n5 = Object.getOwnPropertyDescriptor(r2, t);
    (!n5 || ("get" in n5 ? !r2.__esModule : n5.writable || n5.configurable)) && (n5 = { enumerable: true, get: function() {
      return r2[t];
    } }), Object.defineProperty(e, f7, n5);
  } : function(e, r2, t, f7) {
    f7 === void 0 && (f7 = t), e[f7] = r2[t];
  }), E8 = u13 && u13.__exportStar || function(e, r2) {
    for (var t in e)
      t !== "default" && !Object.prototype.hasOwnProperty.call(r2, t) && At2(r2, e, t);
  };
  Object.defineProperty(u13, "__esModule", { value: true });
  u13.isHexString = u13.getKeys = u13.fromAscii = u13.fromUtf8 = u13.toAscii = u13.arrayContainsArray = u13.getBinarySize = u13.padToEven = u13.stripHexPrefix = u13.isHexPrefixed = void 0;
  E8(ie(), u13);
  E8(le2(), u13);
  E8(xe(), u13);
  E8(D8(), u13);
  E8(Te(), u13);
  E8(N4(), u13);
  E8(Ne2(), u13);
  E8(S8(), u13);
  E8(G4(), u13);
  var P9 = k7();
  Object.defineProperty(u13, "isHexPrefixed", { enumerable: true, get: function() {
    return P9.isHexPrefixed;
  } });
  Object.defineProperty(u13, "stripHexPrefix", { enumerable: true, get: function() {
    return P9.stripHexPrefix;
  } });
  Object.defineProperty(u13, "padToEven", { enumerable: true, get: function() {
    return P9.padToEven;
  } });
  Object.defineProperty(u13, "getBinarySize", { enumerable: true, get: function() {
    return P9.getBinarySize;
  } });
  Object.defineProperty(u13, "arrayContainsArray", { enumerable: true, get: function() {
    return P9.arrayContainsArray;
  } });
  Object.defineProperty(u13, "toAscii", { enumerable: true, get: function() {
    return P9.toAscii;
  } });
  Object.defineProperty(u13, "fromUtf8", { enumerable: true, get: function() {
    return P9.fromUtf8;
  } });
  Object.defineProperty(u13, "fromAscii", { enumerable: true, get: function() {
    return P9.fromAscii;
  } });
  Object.defineProperty(u13, "getKeys", { enumerable: true, get: function() {
    return P9.getKeys;
  } });
  Object.defineProperty(u13, "isHexString", { enumerable: true, get: function() {
    return P9.isHexString;
  } });
});
var C7 = {};
Ue(C7, { Account: () => Kn, Address: () => Sn, BN: () => qt2, KECCAK256_NULL: () => Vn, KECCAK256_NULL_S: () => zn, KECCAK256_RLP: () => Un, KECCAK256_RLP_ARRAY: () => jn, KECCAK256_RLP_ARRAY_S: () => Fn, KECCAK256_RLP_S: () => Mn, MAX_INTEGER: () => Dn, MAX_UINT64: () => Xn, TWO_POW256: () => Zn, TypeOutput: () => Ht2, __esModule: () => _t, addHexPrefix: () => Vt, arrToBufArr: () => Ut2, arrayContainsArray: () => xt2, baToJSON: () => jt2, bnToHex: () => It3, bnToRlp: () => kt2, bnToUnpaddedBuffer: () => Lt, bufArrToArr: () => Kt3, bufferToHex: () => Dt2, bufferToInt: () => Xt, default: () => Jn, defineProperties: () => Ot2, ecrecover: () => sn, ecsign: () => cn, fromAscii: () => mt2, fromRpcSig: () => an, fromSigned: () => Zt, fromUtf8: () => St3, generateAddress: () => In, generateAddress2: () => Ln, getBinarySize: () => Tt, getKeys: () => Bt, hashPersonalMessage: () => nn, importPublic: () => Tn, intToBuffer: () => rn, intToHex: () => tn, isHexPrefixed: () => Nt3, isHexString: () => bt, isValidAddress: () => On, isValidChecksumAddress: () => Rn, isValidPrivate: () => kn, isValidPublic: () => Hn, isValidSignature: () => fn, isZeroAddress: () => wn, keccak: () => mn, keccak256: () => Bn, keccakFromArray: () => An, keccakFromHexString: () => _n, keccakFromString: () => bn, padToEven: () => Pt2, privateToAddress: () => Pn, privateToPublic: () => En, pubToAddress: () => Cn, publicToAddress: () => Nn, ripemd160: () => gn, ripemd160FromArray: () => ln, ripemd160FromString: () => vn, rlp: () => Rt, rlphash: () => dn, setLengthLeft: () => Qt, setLengthRight: () => $t, sha256: () => yn, sha256FromArray: () => hn, sha256FromString: () => pn, stripHexPrefix: () => Et2, toAscii: () => wt2, toBuffer: () => Gt2, toChecksumAddress: () => qn, toCompactSig: () => on, toRpcSig: () => un, toType: () => Ct2, toUnsigned: () => zt4, toUtf8: () => Ft, unpadArray: () => Yt, unpadBuffer: () => Wt, unpadHexString: () => Jt, validateNoLeadingZeroes: () => Mt, zeroAddress: () => xn, zeros: () => en });
var He = he(ge3());
H6(C7, he(ge3()));
var { __esModule: _t, isHexString: bt, getKeys: Bt, fromAscii: mt2, fromUtf8: St3, toAscii: wt2, arrayContainsArray: xt2, getBinarySize: Tt, padToEven: Pt2, stripHexPrefix: Et2, isHexPrefixed: Nt3, toType: Ct2, TypeOutput: Ht2, bnToRlp: kt2, bnToUnpaddedBuffer: Lt, bnToHex: It3, rlp: Rt, BN: qt2, defineProperties: Ot2, bufArrToArr: Kt3, arrToBufArr: Ut2, validateNoLeadingZeroes: Mt, baToJSON: jt2, toUtf8: Ft, addHexPrefix: Vt, toUnsigned: zt4, fromSigned: Zt, bufferToHex: Dt2, bufferToInt: Xt, toBuffer: Gt2, unpadHexString: Jt, unpadArray: Yt, unpadBuffer: Wt, setLengthRight: $t, setLengthLeft: Qt, zeros: en, intToBuffer: rn, intToHex: tn, hashPersonalMessage: nn, isValidSignature: fn, fromRpcSig: an, toCompactSig: on, toRpcSig: un, ecrecover: sn, ecsign: cn, rlphash: dn, ripemd160FromArray: ln, ripemd160FromString: vn, ripemd160: gn, sha256FromArray: hn, sha256FromString: pn, sha256: yn, keccakFromArray: An, keccakFromHexString: _n, keccakFromString: bn, keccak256: Bn, keccak: mn, Address: Sn, isZeroAddress: wn, zeroAddress: xn, importPublic: Tn, privateToAddress: Pn, privateToPublic: En, publicToAddress: Nn, pubToAddress: Cn, isValidPublic: Hn, isValidPrivate: kn, generateAddress2: Ln, generateAddress: In, isValidChecksumAddress: Rn, toChecksumAddress: qn, isValidAddress: On, Account: Kn, KECCAK256_RLP: Un, KECCAK256_RLP_S: Mn, KECCAK256_RLP_ARRAY: jn, KECCAK256_RLP_ARRAY_S: Fn, KECCAK256_NULL: Vn, KECCAK256_NULL_S: zn, TWO_POW256: Zn, MAX_INTEGER: Dn, MAX_UINT64: Xn } = He;
var { default: Ce2, ...Gn } = He;
var Jn = Ce2 !== void 0 ? Ce2 : Gn;
export {
  Kn as Account,
  Sn as Address,
  qt2 as BN,
  Vn as KECCAK256_NULL,
  zn as KECCAK256_NULL_S,
  Un as KECCAK256_RLP,
  jn as KECCAK256_RLP_ARRAY,
  Fn as KECCAK256_RLP_ARRAY_S,
  Mn as KECCAK256_RLP_S,
  Dn as MAX_INTEGER,
  Xn as MAX_UINT64,
  Zn as TWO_POW256,
  Ht2 as TypeOutput,
  _t as __esModule,
  Vt as addHexPrefix,
  Ut2 as arrToBufArr,
  xt2 as arrayContainsArray,
  jt2 as baToJSON,
  It3 as bnToHex,
  kt2 as bnToRlp,
  Lt as bnToUnpaddedBuffer,
  Kt3 as bufArrToArr,
  Dt2 as bufferToHex,
  Xt as bufferToInt,
  Jn as default,
  Ot2 as defineProperties,
  sn as ecrecover,
  cn as ecsign,
  mt2 as fromAscii,
  an as fromRpcSig,
  Zt as fromSigned,
  St3 as fromUtf8,
  In as generateAddress,
  Ln as generateAddress2,
  Tt as getBinarySize,
  Bt as getKeys,
  nn as hashPersonalMessage,
  Tn as importPublic,
  rn as intToBuffer,
  tn as intToHex,
  Nt3 as isHexPrefixed,
  bt as isHexString,
  On as isValidAddress,
  Rn as isValidChecksumAddress,
  kn as isValidPrivate,
  Hn as isValidPublic,
  fn as isValidSignature,
  wn as isZeroAddress,
  mn as keccak,
  Bn as keccak256,
  An as keccakFromArray,
  _n as keccakFromHexString,
  bn as keccakFromString,
  Pt2 as padToEven,
  Pn as privateToAddress,
  En as privateToPublic,
  Cn as pubToAddress,
  Nn as publicToAddress,
  gn as ripemd160,
  ln as ripemd160FromArray,
  vn as ripemd160FromString,
  Rt as rlp,
  dn as rlphash,
  Qt as setLengthLeft,
  $t as setLengthRight,
  yn as sha256,
  hn as sha256FromArray,
  pn as sha256FromString,
  Et2 as stripHexPrefix,
  wt2 as toAscii,
  Gt2 as toBuffer,
  qn as toChecksumAddress,
  on as toCompactSig,
  un as toRpcSig,
  Ct2 as toType,
  zt4 as toUnsigned,
  Ft as toUtf8,
  Yt as unpadArray,
  Wt as unpadBuffer,
  Jt as unpadHexString,
  Mt as validateNoLeadingZeroes,
  xn as zeroAddress,
  en as zeros
};
/*! Bundled license information:

safe-buffer/index.js:
  (*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> *)
*/
