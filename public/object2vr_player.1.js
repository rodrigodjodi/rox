//////////////////////////////////////////////////////////////////////
// Object2VR 3.1.5/10768 Object Player                              //
// License: Rodrigo Lopez Moreira                                   //
// (c) 2017, Garden Gnome Software, http://ggnome.com               //
//
for (
  var qa =
      "function" == typeof Object.defineProperties
        ? Object.defineProperty
        : function(U, P, F) {
            if (F.get || F.set)
              throw new TypeError("ES3 does not support getters and setters.");
            U != Array.prototype && U != Object.prototype && (U[P] = F.value);
          },
    Ja =
      "undefined" != typeof window && window === this
        ? this
        : "undefined" != typeof global
        ? global
        : this,
    cb = ["Array", "prototype", "fill"],
    db = 0;
  db < cb.length - 1;
  db++
) {
  var eb = cb[db];
  eb in Ja || (Ja[eb] = {});
  Ja = Ja[eb];
}
var fb = cb[cb.length - 1],
  Gb = Ja[fb],
  rc = Gb
    ? Gb
    : function(U, P, F) {
        var da = this.length || 0;
        0 > P && (P = Math.max(0, da + P));
        if (null == F || F > da) F = da;
        F = Number(F);
        0 > F && (F = Math.max(0, da + F));
        for (P = Number(P || 0); P < F; P++) this[P] = U;
        return this;
      };
rc != Gb &&
  null != rc &&
  qa(Ja, fb, { configurable: !0, writable: !0, value: rc });
function object2vrPlayer(U) {
  function P() {
    var a;
    J = document.createElement("div");
    J.innerHTML = sc();
    a =
      "top:\t0px;left: 0px;width: 100px;height: 100px;overflow: hidden;z-index: 5000;position:relative;";
    "-webkit-" == M && (a += M + "transform: translateZ(99999999999999px);");
    J.setAttribute("style", a);
    c.b.insertBefore(J, c.b.firstChild);
    J.style.width = 0 + H + gb + C + "px";
    J.style.height = 0 + I + hb + D + "px";
    J.onclick = function() {
      J && (c.b.removeChild(J), (J = null));
    };
    J.oncontextmenu = J.onclick;
  }
  function F() {
    setTimeout(function() {
      c.setFullscreen(0);
    }, 10);
    setTimeout(function() {
      c.setFullscreen(0);
    }, 100);
  }
  function da() {
    Hb
      ? setTimeout(function() {
          da();
        }, 1e3 / 60)
      : Ib(function() {
          da();
        });
    ib = 0;
    if (0 <= r) {
      if (2 == jb) {
        var a = V - kb,
          f = W - lb;
        mb((a * ra) / 300, (f * ra) / 300);
      } else if (3 == jb) {
        var f = ia(),
          b;
        X
          ? ((a = (V - f.x) / C), (b = (W - f.y) / D))
          : ((b = (V - f.x) / C), (a = (W - f.y) / D));
        nb && (b = 1 - b);
        ob && (a = 1 - a);
        f = Math.floor((1 - b) * e.c);
        a = Math.floor((1 - a) * e.j);
        0 > f && (f = 0);
        f >= e.c && (f = e.c - 1);
        0 > a && (a = 0);
        a >= e.j && (a = e.j - 1);
        c.showObjectImage(f, a);
      } else
        (Y = 0.4 * (V - pb)),
          (Z = 0.4 * (W - qb)),
          (pb += Y),
          (qb += Z),
          mb((Y * ra) / 10, (Z * ra) / 10),
          Jb && c.changeFov(0.4 * (0 - 100 * m));
      c.a = !0;
    }
    if (0 != ja)
      switch (ja) {
        case 16:
          c.changeFovLog(-1);
          c.a = !0;
          break;
        case 17:
        case 18:
        case 91:
          c.changeFovLog(1), (c.a = !0);
      }
    rb &&
      (0 != Y || 0 != Z) &&
      0 > r &&
      ((Y *= 0.9),
      (Z *= 0.9),
      0.1 > Y * Y + Z * Z ? (Z = Y = 0) : (mb(Y, Z), (c.a = !0)));
    if (!c.isLoaded && c.hasConfig) {
      for (a = f = 0; a < c.checkLoaded.length; a++)
        c.checkLoaded[a].complete &&
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYBgeACDAAADIAAE3iTbkAAAAAElFTkSuQmCC" !=
            c.checkLoaded[a].src &&
          f++;
      Kb && (Kb = !1);
      f == c.checkLoaded.length
        ? ((sb = 1),
          (c.isLoaded = !0),
          c.divSkin && c.divSkin.ggLoaded && c.divSkin.ggLoaded())
        : (sb = f / (1 * c.checkLoaded.length));
    }
    if (sa) {
      e.g = va - e.x;
      e.o = wa - e.y;
      R = (tb - 100 * m) / 10;
      a = Math.sqrt(e.g * e.g + e.o * e.o + R * R);
      10 * a < xa
        ? ((sa = !1),
          (e.g = 0),
          (R = e.o = 0),
          (e.x = Number(va)),
          (e.y = Number(wa)),
          (m = tb / 100))
        : ((a = a > 5 * xa ? xa / a : 0.2), (e.g *= a), (e.o *= a), (R *= a));
      e.x += 1 * e.g;
      e.y += 1 * e.o;
      e.x >= e.c && ((e.x -= e.c), (va -= e.c));
      0 > e.x && ((e.x += e.c), (va += e.c));
      e.y >= e.j && ((e.y -= e.j), (wa -= e.j));
      0 > e.y && ((e.y += e.j), (wa += e.j));
      m += R / 10;
      if (0 < ea && 0.5 > R) {
        var g;
        b = 0.5 - z / e.width;
        g = 0.5 - A / e.height;
        a = (Lb - b) / ea;
        f = (Mb - g) / ea;
        z = (0.5 - b - a) * e.width;
        A = (0.5 - g - f) * e.height;
        ea--;
        ea && (sa = !0);
      }
      a = new Date();
      ub = a.getTime();
      c.a = !0;
    } else
      fa
        ? ((e.g = 0.95 * e.g + 0.05 * la),
          (e.x += e.g),
          vb &&
            (0 > e.x || e.x >= e.c) &&
            ((la = -la), (e.g = -e.g), (e.x += 2 * e.g)),
          (c.a = !0))
        : (ma &&
            ((a = new Date()),
            (a = a.getTime() - ub),
            0 > r &&
              0 < Ka &&
              a > 1e3 * Ka &&
              ((fa = !0), (e.g = 0), (e.o = 0))),
          rb &&
            0 == ja &&
            0 > r &&
            (0 != e.g || 0 != e.o || 0 != R) &&
            ((e.g *= 0.9),
            (e.o *= 0.9),
            (R *= 0.9),
            (e.x += e.g),
            (e.y += e.o),
            c.changeFovLog(R),
            1e-4 > e.g * e.g + e.o * e.o && ((e.g = 0), (R = e.o = 0)),
            (c.a = !0)));
    if (0 < h.mode) {
      if (2 == h.mode)
        for (a = 0; a < G.length; a++)
          (f = G[a]),
            "poly" == f.hstype &&
              f.m != f.f &&
              (f.m > f.f
                ? ((f.f += h.ba), f.m < f.f && (f.f = f.m))
                : ((f.f -= h.ba), f.m > f.f && (f.f = f.m)),
              (c.a = !0));
      3 == h.mode &&
        h.m != h.f &&
        (h.m > h.f
          ? ((h.f += h.ba), h.m < h.f && (h.f = h.m))
          : ((h.f -= h.ba), h.m > h.f && (h.f = h.m)),
        (c.a = !0));
    }
    c.a && ((c.a = !1), c.updateObject(), ya && tc());
  }
  function Nb() {
    setTimeout(function() {
      Nb();
    }, 200);
    5 < ib &&
      ((Ib = function() {
        return function(a) {
          window.setTimeout(a, 10);
        };
      }),
      (Hb = !0),
      da());
    ib++;
  }
  function Ob(a) {
    c.skinObj &&
      c.skinObj.hotspotProxyClick &&
      c.skinObj.hotspotProxyClick(a.id);
    "" != a.url && (c.openUrl(a.url, a.target), La(-1, -1));
  }
  function Pb() {
    0 < l.A &&
      (c.openUrl(c.hotspot.url, c.hotspot.target),
      c.skinObj && c.skinObj.hotspotProxyClick(l.A));
  }
  function wb(a, f) {
    var b = -1,
      c,
      y;
    c = ((a - H - 0.5 * C) / (t * m) - z) / e.width + 0.5;
    y = ((f - I - 0.5 * D) / (t * m) - A) / e.height + 0.5;
    for (var n = 0; n < G.length; n++) {
      var N = G[n];
      if ("poly" == N.hstype && N.T && 0 <= h.mode)
        for (var l = 0; l < N.T.length; l++) {
          var k = N.T[l];
          if (
            (k.fa == e.I || N.reuse & 1) &&
            (k.ga == e.J || N.reuse & 2) &&
            (k.state == e.K || N.reuse & 4)
          )
            for (var q = 0; q < k.Y.length; q++) {
              var p = k.Y[q];
              if (0 < p.F.length) {
                var x, r, u, E;
                u = !1;
                x = 0;
                for (r = p.F.length - 1; x < p.F.length; r = x++)
                  (E = p.F[x]),
                    (r = p.F[r]),
                    E.y > y != r.y > y &&
                      c < ((r.x - E.x) * (y - E.y)) / (r.y - E.y) + E.x &&
                      (u = !u);
                u && (b = n);
              }
            }
        }
    }
    return 0 <= b ? G[b] : !1;
  }
  function tc() {
    if (c.s) {
      var a, f;
      h.oa != h.mode &&
        ((h.oa = h.mode),
        (c.s.style.visibility = 0 < h.mode ? "inherit" : "hidden"));
      if (0 < h.mode) {
        if (!u)
          try {
            u = c.s.getContext("2d");
          } catch (l) {}
        if (u) {
          if (u.width != C || u.height != D) (u.width = C), (u.height = D);
          u.clear ? u.clear() : u.clearRect(0, 0, c.s.width, c.s.height);
          var b = 1;
          3 == h.mode && (b = h.f);
          for (var g = 0; g < G.length; g++) {
            var y = G[g];
            if ("poly" == y.hstype)
              for (var n = 0; n < y.T.length; n++) {
                var N = y.T[n];
                if (
                  (N.fa == e.I || y.reuse & 1) &&
                  (N.ga == e.J || y.reuse & 2) &&
                  (N.state == e.K || y.reuse & 4)
                )
                  for (var k = 0; k < N.Y.length; k++) {
                    var p = N.Y[k];
                    2 == h.mode && (b = y.f);
                    u.fillStyle = S(y.B, y.G * b);
                    u.strokeStyle = S(y.C, y.H * b);
                    if (0 < p.F.length) {
                      u.beginPath();
                      for (var q = 0; q < p.F.length; q++)
                        (v = p.F[q]),
                          (a = t * m * (z + (v.x - 0.5) * e.width) + 0.5 * C),
                          (f = t * m * (A + (v.y - 0.5) * e.height) + 0.5 * D),
                          0 == q ? u.moveTo(a, f) : u.lineTo(a, f);
                      u.closePath();
                      u.stroke();
                      u.fill();
                    }
                  }
              }
          }
        }
      }
    }
  }
  function Ma(a, f) {
    if (l.enabled && null != ga && na && na.getContext) {
      var b = ia(),
        g = a - b.x - C / 2,
        g = g / m / t - z + e.width / 2,
        b = f - b.y - D / 2,
        b = b / m / t - A + e.height / 2;
      d = na.getContext("2d").getImageData(g, b, 1, 1);
      l.A = d.data[2];
      l.ca != l.A &&
        (0 < l.ca &&
          c.skinObj &&
          c.skinObj.hotspotProxyOut &&
          c.skinObj.hotspotProxyOut(l.ca),
        (c.hotspot = 0 < l.A && l.V[l.A] ? l.V[l.A] : c.emptyHotspot),
        0 < l.A &&
          c.skinObj &&
          c.skinObj.hotspotProxyOver &&
          c.skinObj.hotspotProxyOver(l.A),
        (l.ca = l.A));
    }
  }
  function xb(a, f, b, c, y, n) {
    var h = e.l.length - 1 - c,
      m = e.pa,
      m = za(m, "c", (a % e.c) + ((f % e.j) + (b % e.L) * e.j) * e.c),
      m = za(m, "r", c),
      m = za(m, "l", h),
      m = za(m, "x", y),
      m = za(m, "y", n);
    return Na(m);
  }
  function za(a, f, b) {
    var c = new RegExp("%0*" + f, "i").exec(a.toString());
    if (c) {
      var c = c.toString(),
        e = b.toString();
      for (
        c.charAt(c.length - 1) != f && (e = (1 + b).toString());
        e.length < c.length - 1;

      )
        e = "0" + e;
      a = a.replace(c, e);
    }
    return a;
  }
  function yb(a, f, b) {
    return Na(e.path + "/img_" + b + "_" + f + "_" + a + "." + e.ext);
  }
  function Oa(a) {
    ob && (a = -a);
    e.y += a;
    Aa();
  }
  function Pa(a) {
    nb && (a = -a);
    e.x += a;
    Aa();
  }
  function Aa() {
    if (Qb) {
      for (; 0 > e.x; ) e.x += e.c;
      for (; e.x >= e.c; ) e.x -= e.c;
    } else 0 > e.x && (e.x = 0), e.x >= e.c && (e.x = e.c - 1);
    if (Rb) {
      for (; 0 > e.y; ) e.y += e.j;
      for (; e.y >= e.j; ) e.y -= e.j;
    } else 0 > e.y && (e.y = 0), e.y >= e.j && (e.y = e.j - 1);
    e.state >= e.L && (e.state = e.L - 1);
    0 > e.state && (e.state = 0);
    m = Math.max(Qa, Math.min(Ra, m));
    zb && (aa = 1.05 < m);
    if (C >= t * m * e.width) z = 0;
    else {
      var a = (e.width * t * m - C) / (m * t * 2);
      z = Math.max(-a, z);
      z = Math.min(+a, z);
    }
    D >= t * m * e.height
      ? (A = 0)
      : ((a = (e.height * t * m - D) / (m * t * 2)),
        (A = Math.max(-a, A)),
        (A = Math.min(+a, A)));
  }
  function Sb() {
    ja = 0;
    Ba || p();
  }
  function Tb() {
    ja = 0;
    Ba || p();
  }
  function Ub(a) {
    if (!Ba) {
      a = a ? a : window.event;
      ja = a.keyCode;
      if (0 != ja) {
        switch (ja) {
          case 37:
            aa ? (z += 10 / m) : c.changePan(1);
            break;
          case 38:
            aa ? (A += 10 / m) : c.changeTilt(1);
            break;
          case 39:
            aa ? (z += -10 / m) : c.changePan(-1);
            break;
          case 40:
            aa ? (A -= 10 / m) : c.changeTilt(-1);
            break;
          case 43:
          case 107:
          case 187:
            c.changeFovLog(-1);
            break;
          case 109:
          case 45:
          case 189:
            c.changeFovLog(1);
        }
        c.a = !0;
      }
      p();
    }
  }
  function Vb(a) {
    K ||
      ((Jb = !1),
      ba(a.target) && (a.preventDefault(), p(), oa && oa.reset && oa.reset()));
  }
  function uc(a) {
    if (!K && ba(a.target)) {
      a.preventDefault();
      var f = m;
      c.setZoom(a.scale * ta);
      a = 1 / (t * m) - 1 / (t * f);
      z += (c.mouse.x - H - 0.5 * C) * a;
      A += (c.mouse.y - I - 0.5 * D) * a;
      p();
    }
  }
  function Wb(a) {
    Ab = !0;
    Sa = 1;
    a || (a = window.event);
    var f = ia();
    a.pageX &&
      ((c.mouse.x = a.pageX - f.x + H), (c.mouse.y = a.pageY - f.y + I));
    K ||
      (a.touches
        ? ((c.D = a.touches.target),
          c.D == c.control && (a.preventDefault(), (ta = m), p()))
        : (a.preventDefault(), (ta = m), p()));
  }
  function Xb(a) {
    /* oa || ((oa = new MSGesture()), (oa.target = c.control));
    oa.addPointer(a.pointerId); */
  }
  function vc(a) {
    K || (a.preventDefault(), (r = -1));
  }
  function wc(a) {
    if (!K) {
      0 <= r && (a.preventDefault(), p());
      var f = new Date().getTime(),
        b = -1,
        b = Math.abs(Yb - Ca) + Math.abs(Zb - Da);
      if (0 <= b && 20 > b && ba(a.target)) {
        var e = !1;
        if (c.D)
          for (b = c.D; b && b != c.control; )
            b.onclick && !e && (b.onclick(), (e = !0)), (b = b.parentNode);
        (b = wb(c.mouse.x, c.mouse.y)) && !e && (Ob(b), (e = !0));
        l.enabled && !e && Pb();
        e && a.preventDefault();
        b = Math.abs($b - Ca) + Math.abs(ac - Da);
        if (700 > f - c.X && 0 <= b && 20 > b && !e) {
          c.D == c.control &&
            Bb &&
            setTimeout(function() {
              c.toggleFullscreen();
            }, 10);
          if (c.D) {
            b = c.D;
            for (e = !1; b && b != c.control; )
              b.ondblclick && !e && (b.ondblclick(), (e = !0)),
                (b = b.parentNode);
            e && a.preventDefault();
          }
          c.X = 0;
        } else c.X = f;
        $b = Ca;
        ac = Da;
      }
      if (c.D) {
        b = c.D;
        for (e = !1; b && a != c.control; ) {
          if (b.onmouseout) b.onmouseout();
          a.onmouseup && !e && (b.onmouseup(), (e = !0));
          b = b.parentNode;
        }
        e && a.preventDefault();
      }
      c.D = null;
      r = -1;
    }
  }
  function xc(a) {
    a || (a = window.event);
    var f = a.touches,
      b = ia();
    c.mouse.x = f[0].pageX - b.x + H;
    c.mouse.y = f[0].pageY - b.y + I;
    if (!K) {
      if (
        1 == f.length &&
        f[0] &&
        ((Ca = f[0].pageX), (Da = f[0].pageY), 0 <= r)
      ) {
        a.preventDefault();
        for (b = 0; b < f.length; b++)
          if (Math.abs(f[b].identifier) == r) {
            var e = f[b].pageY;
            Ta = f[b].pageX;
            Ua = e;
            V = Ta;
            W = Ua;
            break;
          }
        p();
        Ma(f[0].pageX, f[0].pageY);
      }
      2 == f.length &&
        f[0] &&
        f[1] &&
        ((r = -1),
        Ab ||
          ((bc = Math.sqrt(
            (f[0].pageX - f[1].pageX) * (f[0].pageX - f[1].pageX) +
              (f[0].pageY - f[1].pageY) * (f[0].pageY - f[1].pageY)
          )),
          (f = m),
          c.setZoom((ta / cc) * bc),
          (f = 1 / (t * m) - 1 / (t * f)),
          (z += (c.mouse.x - H - 0.5 * C) * f),
          (A += (c.mouse.y - I - 0.5 * D) * f),
          a.preventDefault()));
    }
  }
  function yc(a) {
    a || (a = window.event);
    var f = a.touches,
      b = ia();
    c.mouse.x = f[0].pageX - b.x + H;
    c.mouse.y = f[0].pageY - b.y + I;
    if (!K) {
      console.log("Touch start...");
      if (1 == f.length && 0 > r && f[0]) {
        Va = new Date().getTime();
        Yb = f[0].pageX;
        Zb = f[0].pageY;
        Ca = f[0].pageX;
        Da = f[0].pageY;
        c.D = f[0].target;
        ba(f[0].target) &&
          (a.preventDefault(),
          Cb(f[0].pageX, f[0].pageY),
          (r = Math.abs(f[0].identifier)),
          p());
        if (c.D) {
          b = c.D;
          for (flag = !1; b && !ba(b); ) {
            if (b.onmouseover) b.onmouseover();
            b.onmousedown && !flag && (b.onmousedown(), (flag = !0));
            b = b.parentNode;
          }
          flag && a.preventDefault();
        }
        Ma(f[0].pageX, f[0].pageY);
      }
      1 < f.length && (r = -1);
      !Ab &&
        2 == f.length &&
        f[0] &&
        f[1] &&
        ((cc = Math.sqrt(
          (f[0].pageX - f[1].pageX) * (f[0].pageX - f[1].pageX) +
            (f[0].pageY - f[1].pageY) * (f[0].pageY - f[1].pageY)
        )),
        (ta = m));
    }
  }
  function Ea(a) {
    if (!dc && ((a = a ? a : window.event), (a = Fa(a)), ba(a.target))) {
      var f = a.detail ? -1 * a.detail : a.wheelDelta / 40;
      ec && (f = -f);
      if (0 != f) {
        var b = c.mouse.x - H - 0.5 * C,
          e = c.mouse.y - I - 0.5 * D,
          y = m;
        c.changeFovLog((0 < f ? 1 : -1) * fc);
        f = 1 / (t * m) - 1 / (t * y);
        z += b * f;
        A += e * f;
        c.a = !0;
        a.preventDefault ? a.preventDefault() : (a.returnValue = !1);
        p();
      }
    }
  }
  function gc(a) {
    if (!K && ((a = a ? a : window.event), (a = Fa(a)), 0 <= r)) {
      p();
      a.preventDefault ? a.preventDefault() : (a.returnValue = !1);
      r = -1;
      var f = new Date().getTime(),
        b = -1,
        b = Math.abs(kb - V) + Math.abs(lb - W);
      if (400 > f - Va && 0 <= b && 20 > b && ba(a.target)) {
        var b = Math.abs(hc - V) + Math.abs(ic - W),
          e = wb(c.mouse.x, c.mouse.y);
        hc = V;
        ic = W;
        l.enabled && (Ma(a.pageX, a.pageY), Pb());
        e
          ? Ob(e)
          : 700 > f - c.X && 0 <= b && 20 > b
          ? (Bb &&
              setTimeout(function() {
                c.toggleFullscreen();
              }, 10),
            (c.X = 0))
          : (c.X = f);
      }
    }
  }
  function Ga(a) {
    var f = ia();
    a = a ? a : window.event;
    1 == Sa &&
      ((a = Fa(a)),
      Wa()
        ? ((c.mouse.x = a.pageX - H), (c.mouse.y = a.pageY - I))
        : ((c.mouse.x = a.pageX - f.x + H), (c.mouse.y = a.pageY - f.y + I)),
      !K &&
        (0 <= r &&
          ((f = a.pageY),
          (Ta = a.pageX),
          (Ua = f),
          (V = Ta),
          (W = Ua),
          p(),
          a.preventDefault ? a.preventDefault() : (a.returnValue = !1)),
        l.enabled && ba(a.target)
          ? (Ma(a.pageX, a.pageY), 0 < l.A && La(c.mouse.x - H, c.mouse.y - I))
          : (l.A = 0),
        (0 == l.A && c.hotspot == c.emptyHotspot) ||
          "poly" == c.hotspot.hstype)) &&
      ((f = c.emptyHotspot),
      ba(a.target) && (f = wb(c.mouse.x, c.mouse.y)),
      c.hotspot != f &&
        (c.hotspot != c.emptyHotspot &&
          (0 < h.mode && (c.hotspot.m = 0),
          c.skinObj &&
            c.skinObj.hotspotProxyOut &&
            c.skinObj.hotspotProxyOut(c.hotspot.id)),
        f
          ? ((c.hotspot = f),
            c.skinObj &&
              c.skinObj.hotspotProxyOver &&
              c.skinObj.hotspotProxyOver(c.hotspot.id),
            (Q.style.cursor = "pointer"),
            0 < h.mode && ((h.m = 1), (c.hotspot.m = 1), (c.a = !0)))
          : ((c.hotspot = c.emptyHotspot),
            (Q.style.cursor = "auto"),
            0 < h.mode && ((h.m = 0), (c.a = !0)))),
      La(c.mouse.x - H, c.mouse.y - I));
  }
  function La(a, f) {
    var b = h.v;
    b.enabled &&
      (c.hotspot != c.emptyHotspot && 0 <= a && 0 <= f && "" != c.hotspot.title
        ? ((k.innerHTML = c.hotspot.title),
          (k.style.color = S(b.U, b.ea)),
          (k.style.backgroundColor = b.background
            ? S(b.B, b.G)
            : "transparent"),
          (k.style.border = "solid " + S(b.C, b.H) + " " + b.S + "px"),
          (k.style.borderRadius = b.R + "px"),
          (k.style.textAlign = "center"),
          0 < b.width
            ? ((k.style.left = a - b.width / 2 + "px"),
              (k.style.width = b.width + "px"))
            : ((k.style.width = "auto"),
              (k.style.left = a - k.offsetWidth / 2 + "px")),
          (k.style.height = 0 < b.height ? b.height + "px" : "auto"),
          (k.style.top = f + 25 + "px"),
          (k.style.visibility = "inherit"),
          (k.style.overflow = "hidden"))
        : ((k.style.visibility = "hidden"), (k.innerHTML = "")));
  }
  function zc(a) {
    if (J) J.onclick();
    K ||
      ((a = a ? a : window.event),
      a.preventDefault ? a.preventDefault() : (a.returnValue = !1),
      Cb(a.screenX, a.screenY),
      (r = 1),
      (Va = new Date().getTime()),
      p());
  }
  function Xa(a) {
    if (J) J.onclick();
    K ||
      ((a = a ? a : window.event),
      (a = Fa(a)),
      (a.which && 0 != a.which && 1 != a.which) ||
        !ba(a.target) ||
        (Cb(a.pageX, a.pageY),
        (r = 1),
        (Va = new Date().getTime()),
        p(),
        a.preventDefault ? a.preventDefault() : (a.returnValue = !1)));
  }
  function Fa(a) {
    null == a.pageX &&
      null != a.clientX &&
      ((a.pageX =
        a.clientX +
        document.body.scrollLeft +
        document.documentElement.scrollLeft),
      (a.pageY =
        a.clientY +
        document.body.scrollTop +
        document.documentElement.scrollTop));
    return a;
  }
  function ba(a) {
    return a == q ||
      a == L ||
      a == x ||
      a == T ||
      a == c.control ||
      a == c.s ||
      (a.ggType && "container" == a.ggType)
      ? !0
      : !1;
  }
  function p() {
    fa && ((fa = !1), (e.g = 0), (e.o = 0));
    sa && ((sa = !1), (e.g = 0), (e.o = 0));
    ub = new Date().getTime();
  }
  function mb(a, f) {
    if (aa) (z += a / (m * t)), (A += f / (m * t));
    else {
      var b = -a / 20;
      X ? Oa(b) : Pa(b);
      b = -f / 20;
      X ? Pa(b) : Oa(b);
    }
    Aa();
  }
  function Cb(a, f) {
    kb = a;
    lb = f;
    V = a;
    W = f;
    pb = a;
    qb = f;
  }
  function jc() {
    switch (kc) {
      case 1:
        t = Math.min(C / e.width, D / e.height);
        break;
      case 2:
        t = Math.max(C / e.width, D / e.height);
        break;
      case 3:
        t = C / e.width;
        break;
      case 4:
        t = D / e.height;
        break;
      default:
        t = 1;
    }
    var a, f;
    a = t * m * (z - e.width / 2) + C / 2;
    f = t * m * (A - e.height / 2) + D / 2;
    var b, g;
    a = Math.round(a);
    f = Math.round(f);
    b = Math.round(e.width * t * m);
    g = Math.round(e.height * t * m);
    if (ca) {
      if (((ya = !1), 0 <= e.I && 0 <= e.J)) {
        (b < C || g < D) &&
          Ha > m &&
          (O.clear ? O.clear() : O.clearRect(0, 0, x.width, x.height),
          O != pa &&
            1 < e.L &&
            Db &&
            ((Db = !1),
            pa.clear ? pa.clear() : pa.clearRect(0, 0, x.width, x.height)));
        if (0 < e.l.length) {
          var y = 0,
            n,
            h,
            l;
          for (
            pwb = b * Math.sqrt(window.devicePixelRatio || 1);
            e.l.length >= y + 2 && e.l[y + 1].width > pwb;

          )
            y++;
          for (var k = y, p = !1; !p; ) {
            p = !0;
            n = e.l[k];
            var r = (-a / b) * (n.width / e.u);
            h = (-f / g) * (n.height / e.u);
            var u = ((-a + C) / b) * (n.width / e.u),
              B = ((-f + D) / g) * (n.height / e.u),
              r = Math.min(Math.max(0, Math.floor(r)), n.M - 1);
            h = Math.min(Math.max(0, Math.floor(h)), n.aa - 1);
            u = Math.min(Math.max(0, Math.floor(u)), n.M - 1);
            B = Math.min(Math.max(0, Math.floor(B)), n.aa - 1);
            for (l = h; l <= B; l++)
              for (h = r; h <= u; h++) {
                var F = h + l * n.M,
                  E = n.N[F];
                E && E.i ? E.i.complete || (p = !1) : (p = !1);
              }
            p || (k + 1 < e.l.length ? k++ : (p = !0));
          }
          for (; k >= y; ) {
            n = e.l[k];
            r = (-a / b) * (n.width / e.u);
            h = (-f / g) * (n.height / e.u);
            u = ((-a + C) / b) * (n.width / e.u);
            B = ((-f + D) / g) * (n.height / e.u);
            r = Math.min(Math.max(0, Math.floor(r)), n.M - 1);
            h = Math.min(Math.max(0, Math.floor(h)), n.aa - 1);
            u = Math.min(Math.max(0, Math.floor(u)), n.M - 1);
            B = Math.min(Math.max(0, Math.floor(B)), n.aa - 1);
            for (l = h; l <= B; l++)
              for (h = r; h <= u; h++)
                (F = h + l * n.M),
                  (E = n.N[F]) || (E = n.N[F] = {}),
                  !E.i &&
                    5 > ha &&
                    ((E.i = new Image()),
                    E.i.setAttribute("src", xb(e.I, e.J, e.K, k, h, l)),
                    (E.i.onload = Ac),
                    (E.i.onerror = lc),
                    (E.i.onabort = lc),
                    0 == ha &&
                      c.divSkin &&
                      c.divSkin.ggReLoadedLevels &&
                      c.divSkin.ggReLoadedLevels(),
                    ha++),
                  E.i &&
                    E.i.complete &&
                    (O.drawImage(
                      E.i,
                      a + ((-e.ja + e.u * h) * b) / n.width,
                      f + ((-e.ja + e.u * l) * g) / n.height,
                      (E.i.width * b) / n.width,
                      (E.i.height * g) / n.height
                    ),
                    (ya = !0));
            k--;
          }
          Ha = m;
          Ya = z;
          Za = A;
        } else
          "" != q.src && q.complete
            ? (O.clear ? O.clear() : O.clearRect(0, 0, x.width, x.height),
              O.drawImage(q, a, f, b, g),
              (Ha = m),
              (Ya = z),
              (Za = A),
              (ya = !0))
            : (c.a = !0);
        if (ya)
          for (a = 0; a < G.length; a++)
            if (((f = G[a]), "point" == f.hstype)) {
              y = !1;
              for (n = g = b = 0; n < f.locations.length; n++)
                (k = f.locations[n]),
                  k.column == e.I &&
                    k.row == e.J &&
                    k.state == e.K &&
                    ((y = !0),
                    (b = t * m * (z + k.x * e.width - e.width / 2) + C / 2),
                    (g = t * m * (A + k.y * e.height - e.height / 2) + D / 2));
              f.obj &&
                f.obj.__div &&
                ((f.obj.__div.style[Ia] = "none"),
                y
                  ? ((f.obj.__div.style.left = H + b + "px"),
                    (f.obj.__div.style.top = I + g + "px"),
                    (f.obj.__div.style.visibility = "visible"))
                  : ((f.obj.__div.style.left = "-100px"),
                    (f.obj.__div.style.top = "-100px"),
                    (f.obj.__div.style.visibility = "hidden")));
            }
      }
    } else
      q.setAttribute("width", e.width),
        q.setAttribute("height", e.height),
        L.setAttribute("width", e.width),
        L.setAttribute("height", e.height),
        (q.style.left = a + "px"),
        (q.style.top = f + "px"),
        (q.style.width = b + "px"),
        (q.style.height = g + "px"),
        (L.style.left = a + "px"),
        (L.style.top = f + "px"),
        (L.style.width = b + "px"),
        (L.style.height = g + "px"),
        (Ha = m),
        (Ya = z),
        (Za = A);
  }
  function lc() {
    ha && ha--;
    0 == ha &&
      c.divSkin &&
      c.divSkin.ggLoadedLevels &&
      c.divSkin.ggLoadedLevels();
  }
  function Ac() {
    c.a = !0;
    c.O = !0;
    ha && ha--;
    0 == ha &&
      c.divSkin &&
      c.divSkin.ggLoadedLevels &&
      c.divSkin.ggLoadedLevels();
  }
  function ia() {
    var a = { x: 0, y: 0 },
      f = B;
    if (f.offsetParent) {
      do (a.x += f.offsetLeft), (a.y += f.offsetTop);
      while ((f = f.offsetParent));
    }
    return a;
  }
  function $a() {
    c.isFullscreen &&
      (Wa() || c.exitFullscreen(),
      Wa() && ((c.b.style.left = "0px"), (c.b.style.top = "0px")));
  }
  function Wa() {
    return (
      document.webkitIsFullScreen ||
      document.mozFullScreen ||
      (document.msFullscreenElement && null != document.msFullscreenElement) ||
      document.fullScreen
    );
  }
  function ua() {
    c.setViewerSize(c.W.offsetWidth, c.W.offsetHeight);
  }
  function Na(a) {
    return "/" == a.charAt(0) || 0 < a.indexOf("://") ? a : Eb + a;
  }
  function mc(a) {
    a = Number(a).toString(16);
    return (a = "#000000".substr(0, 7 - a.length) + a);
  }
  function S(a, f) {
    a = Number(a);
    return ab && 8 >= ab
      ? mc(a)
      : "rgba(" +
          ((a >> 16) & 255) +
          "," +
          ((a >> 8) & 255) +
          "," +
          (a & 255) +
          "," +
          f +
          ")";
  }
  function Bc(a, f) {
    var b = this;
    b.qa = a;
    b.hotspot = f;
    b.__div = document.createElement("div");
    b.i = document.createElement("img");
    var c;
    b.i.setAttribute(
      "src",
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA5xJREFUeNqclmlIVFEUx997TjrplFQW2WKBBSYtRFlpWUILSSsRZRQIBdGHCFqIoKIvQRsUFRJC9LEgaSFbMMpcWi1pLzOLsjItKms0U5t5/c/wH7nc5o2jF374xrv87z33nHOPaRsRtbFgDpgJxoD+wATfwDNQDK6CyrCr5OcbhgiGIRsUAZt4QTWoIFXgp9JfAhY7rgdBl8NeBoLDYBloA+dBOagFTcDHcVEgDgwBGWA+OAcugvXgvb5wKMGJoAAMp9BpUA96EBf/Btsf8BI8AWfAErAcpHHDZeriliY2AVwDg8AucAQ0Ag+I4XhTm2Oxz8PT46KMbTx5EZjuJDgAnAVusJUm9DhYwalFcc59sIXXIaceFkowDySBPTRPL20xm+b7zYXa+N3CPrWJ6GuwGySA40HLBHc/GywFhbS5R1lEBrZy7FQwiSaX9pmnqeAYt+KUcew7BVZw/QKTq0ocpYPVvDOXItZCk2xgDIZqL8BR8Ab0VDbr4yZOgLeIwzQx6WiQxcCt1+6sld66L4yYtFSwF4yg2dU7/cEwGW9YVkAwmycp1dzdpvgm0DcCh4kHmxWzBls0uBX4qqmZJ4KzePm1IeJLgjmlC16aDKZpp5Q168B3o6wsSwTHgU+MIUs74RSj6y1d+212HKimJlUE+tFRfJpYtOKNXWmJTASqWf2Bu/R6+4TKHOrOzG4IhptjWgHbGkZvepQ6SQK7oRuCXzjX1DJavBEX1ygfT8FgBqpfm1zRDcEKbR2bsZlkJCdXieB1ZhZ5YtqVgXIPN+m9kbY6hpdb+d9fPncJRmZmqQheZkemJmgxyxykl3XWJEkcAl7N21s7PDcl5ZJ0PAa3wVwmWtVbZafPwQ7wLozYB7ATPNJO56d/LAikP9u+66KNJS1d4IOZp7wU0hfLukUyzgwm70T2N/DOxIy/eFdqawa5DL2NEGwP5k15Ja4woz9glvcomd9NzyvkFcQo5gomaLfm5c0svnKZ2k7q7+FauvR2MJKZR3+sY5WgtvkdG6JyELGhNHMTXyGfLviRJ5Tcd4Dlhle7086Sgp8CqVxDkn4OqHaqacr5ekjy3Q/W0FRNNGmoMtamdzdxsytZC0lqXKhEgWPVVgImg2NgFT1MHOoOk3yLEtgWN5TEOYvoIFI1rGM19//2wpAD7imF7lfwENwAxaASNCj90pcLLKdC2Iyw1M9gnEplMEp5kOU1f8WwKGJm8oUr9f8JMAAVMDM6HSDa9QAAAABJRU5ErkJggg%3D%3D"
    );
    b.i.setAttribute("style", "position: absolute;top: -14px;left: -14px;");
    b.__div.appendChild(b.i);
    c = "position:absolute;" + (M + "user-select: none;");
    b.__div.setAttribute("style", c);
    b.__div.onclick = function() {
      b.qa.openUrl(f.url, f.target);
    };
    var e = h.v;
    e.enabled &&
      ((b.text = document.createElement("div")),
      (c = "position:absolute;" + ("left: -" + e.width / 2 + "px;")),
      (c = c + "top:\t 20px;" + ("width: " + e.width + "px;")),
      (c =
        0 == f.h ? c + "height: auto;" : c + ("height: " + e.height + "px;")),
      f.wordwrap
        ? (c = c + "white-space: pre-wrap;" + ("width: " + e.width + "px;"))
        : ((c =
            0 == e.height
              ? c + "width: auto;"
              : c + ("width: " + e.width + "px;")),
          (c += "white-space: nowrap;")),
      (c += M + "transform-origin: 50% 50%;"),
      b.text.setAttribute(
        "style",
        c +
          "visibility: hidden;border: 1px solid #000000;background-color: #ffffff;text-align: center;overflow: hidden;padding: 0px 1px 0px 1px;"
      ),
      (b.text.style.color = S(e.U, e.ea)),
      (b.text.style.backgroundColor = e.background
        ? S(e.B, e.G)
        : "transparent"),
      (b.text.style.border = "solid " + S(e.C, e.H) + " " + e.S + "px"),
      (b.text.style.borderRadius = e.R + "px"),
      (b.text.style.textAlign = "center"),
      (b.text.style.width = 0 < e.width ? e.width + "px" : "auto"),
      (b.text.style.height = 0 < e.height ? e.height + "px" : "auto"),
      (b.text.style.overflow = "hidden"),
      (b.text.innerHTML = f.title),
      (b.__div.onmouseover = function() {
        0 == e.height &&
          ((w = b.text.offsetWidth), (b.text.style.left = -w / 2 + "px"));
        b.text.style.visibility = "inherit";
      }),
      (b.__div.onmouseout = function() {
        b.text.style.visibility = "hidden";
      }),
      b.__div.appendChild(b.text));
  }
  function sc() {
    var a,
      f = "",
      b,
      c,
      e,
      h,
      m,
      l = 0;
    a = "PGRpdiBzdHlsZT0icG9zaXRpb246IHJlbGF0aXZlOyBsZWZ0OiAwcHg7IHJpZ2h0OiAwcHg7IHRvcDogNDAlOyBib3R0b206IDYwJTsgbWFyZ2luOiBhdXRvOyB3aWR0aDogMThlbTsgaGVpZ2h0OiA0ZW07IGJvcmRlcjogM3B4IHNvbGlkICM1NTU7IGJveC1zaGFkb3c6IDVweCA1cHggMTBweCAjMzMzOyBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgZGlzcGxheTogdGFibGU7IGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmOyBmb250LXNpemU6IDEwcHQ7IG9wYWNpdHk6IDAuOTU7IGJvcmRlci1yYWRpdXM6IDE1cHg7Ij48cCBzdHlsZT0idGV4dC1hbGlnbjogY2VudGVyOyBkaXNwbGF5OiB0YWJsZS1jZWxsOyB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyAiPkNyZWF0ZWQgd2l0aCA8YSBocmVmPSJodHRwOi8vb2JqZWN0MnZyLmNvbS8iIHRhcmdldD0iX2JsYW5rIj5PYmplY3QyVlI8L2E+PC9wPjwvZGl2Pg==".replace(
      /[^A-Za-z0-9\+\/\=]/g,
      ""
    );
    do
      (b = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(
        a.charAt(l++)
      )),
        (c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(
          a.charAt(l++)
        )),
        (h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(
          a.charAt(l++)
        )),
        (m = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(
          a.charAt(l++)
        )),
        (b = (b << 2) | (c >> 4)),
        (c = ((c & 15) << 4) | (h >> 2)),
        (e = ((h & 3) << 6) | m),
        (f += String.fromCharCode(b)),
        64 != h && (f += String.fromCharCode(c)),
        64 != m && (f += String.fromCharCode(e));
    while (l < a.length);
    return f;
  }
  var c = this;
  c.transitionsDisabled = !1;
  var R = 0,
    C = 320,
    D = 480,
    m = 1,
    Fb = 1,
    Qa = 1,
    Ra = 1,
    Ha = -1,
    z = 0,
    A = 0,
    Ya = 0,
    Za = 0,
    t = 1,
    kc = 1,
    cc,
    ta,
    bc,
    kb = 0,
    lb = 0,
    V = 0,
    W = 0,
    hc = 0,
    ic = 0,
    Ta = 0,
    Ua = 0,
    r = -1,
    Yb = 0,
    Zb = 0,
    Ca = 0,
    Da = 0,
    $b = 0,
    ac = 0,
    Va,
    rb = !0,
    pb = 0,
    qb = 0,
    Y = 0,
    Z = 0,
    Jb = !1,
    l = {
      enabled: !1,
      A: 0,
      ca: 0,
      v: {
        enabled: !0,
        width: 180,
        height: 20,
        U: 0,
        background: !0,
        B: 16777215,
        C: 0,
        R: 1,
        S: 1,
        wordwrap: !0
      },
      V: []
    },
    G = [];
  c.emptyHotspot = {
    pan: 0,
    tilt: 0,
    title: "",
    url: "",
    target: "",
    id: "",
    skinid: "",
    w: 100,
    h: 20,
    wordwrap: !1,
    obj: null
  };
  c.hotspot = c.emptyHotspot;
  c.mouse = { x: 0, y: 0 };
  var ja = 0,
    B = null,
    Q = null,
    q = null,
    L = null,
    ka = null,
    x = null,
    T = null,
    ca = null,
    pa = null,
    O = null,
    ga = null,
    na = null,
    k = null;
  c.control = null;
  c.checkLoaded = [];
  c.isFullscreen = !1;
  c.divSkin = null;
  c.isLoaded = !1;
  c.hasConfig = !1;
  var sb = 0,
    Kb = !1,
    ma = !1,
    Ka = 5,
    fa = !1,
    la = 0.4,
    vb = !1,
    sa = !1,
    xa = 0.1,
    va = 0,
    wa = 0,
    ea = 0,
    tb,
    Lb,
    Mb,
    ub;
  c.skinObj = null;
  c.a = !1;
  var Db = (c.O = !1);
  c.userdata = {
    title: "",
    description: "",
    author: "",
    datetime: "",
    copyright: "",
    source: "",
    information: "",
    comment: ""
  };
  var H = 0,
    I = 0,
    gb = 0,
    hb = 0,
    jb = 3,
    Ba = !1,
    K = !1,
    dc = !1,
    zb = !0,
    aa = !1,
    ec = !1,
    fc = 1,
    Bb = !0,
    Qb = !1,
    Rb = !1,
    nb = !1,
    ob = !1,
    X = !1,
    ra = 10,
    e = {
      x: 0,
      y: 0,
      g: 0,
      o: 0,
      width: 100,
      height: 100,
      state: 0,
      I: -1,
      J: -1,
      K: -1,
      c: 1,
      j: 1,
      L: 1,
      Z: 0,
      $: 0,
      da: 0,
      path: "images/",
      ext: "jpg",
      u: 512,
      ta: 1,
      ka: 0,
      ia: function() {
        return (e.I % e.c) + ((e.J % e.c) + (e.K % e.L) * e.j) * e.c;
      }
    },
    nc = !0,
    oc = 0,
    M = "",
    Ia = "transition",
    Ab = !1,
    Eb = "",
    h = {
      mode: 1,
      f: 0,
      m: 0,
      ba: 0.05,
      C: 255,
      H: 1,
      B: 255,
      G: 0.3,
      v: {
        enabled: !0,
        width: 180,
        height: 20,
        U: 0,
        ea: 1,
        background: !0,
        B: 16777215,
        G: 1,
        C: 0,
        H: 1,
        R: 3,
        S: 1,
        wordwrap: !0
      }
    },
    pc = navigator.userAgent.toLowerCase(),
    ab = -1 != pc.indexOf("msie") ? parseInt(pc.split("msie")[1]) : !1,
    Cc = navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? !0 : !1,
    Hb = !1,
    Ib = (function() {
      var a =
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame;
      return Cc || !a
        ? function(a) {
            window.setTimeout(a, 10);
          }
        : a;
    })();
  c.detectBrowser = function() {
    var a = ["Webkit", "Moz", "O", "ms", "Ms"],
      c;
    M = "";
    Ia = "transition";
    for (c = 0; c < a.length; c++)
      "undefined" !==
        typeof document.documentElement.style[a[c] + "Transform"] &&
        ((M = "-" + a[c].toLowerCase() + "-"), (Ia = a[c] + "Transition"));
  };
  c.setBasePath = function(a) {
    Eb = a;
  };
  c.getPercentLoaded = function() {
    return sb;
  };
  var qc = !0;
  c.setViewerSize = function(a, f) {
    c.isFullscreen &&
      ("number" == typeof window.innerWidth
        ? ((a = window.innerWidth), (f = window.innerHeight))
        : document.documentElement &&
          (document.documentElement.clientWidth ||
            document.documentElement.clientHeight)
        ? ((a = document.documentElement.clientWidth),
          (f = document.documentElement.clientHeight))
        : document.body &&
          (document.body.clientWidth || document.body.clientHeight) &&
          ((a = document.body.clientWidth), (f = document.body.clientHeight)));
    var b = a - H - gb,
      e = f - I - hb;
    C = b;
    D = e;
    B.style.width = b + "px";
    B.style.height = e + "px";
    B.style.left = H + "px";
    B.style.top = I + "px";
    jc();
    Q.style.width = a + "px";
    Q.style.height = f + "px";
    c.s.style.width = a + "px";
    c.s.style.height = f + "px";
    c.s.width = a;
    c.s.height = f;
    c.s.style.left = H + "px";
    c.s.style.top = I + "px";
    x.style.width = a + "px";
    x.style.height = f + "px";
    T.style.width = a + "px";
    T.style.height = f + "px";
    if (qc) {
      if (!ca)
        try {
          (pa = T.getContext("2d")), (O = ca = x.getContext("2d"));
        } catch (h) {}
      try {
        ca
          ? (B.removeChild(L), B.removeChild(q))
          : (B.removeChild(x), B.removeChild(T));
      } catch (h) {}
      qc = !1;
    }
    ca &&
      ((b = window.devicePixelRatio || 1),
      x.width != Math.round(a * b) || x.height != Math.round(f * b)) &&
      ((x.width = Math.round(a * b)),
      (x.height = Math.round(f * b)),
      (T.width = Math.round(a * b)),
      (T.height = Math.round(f * b)),
      ca.scale(b, b),
      pa.scale(b, b),
      (c.a = !0),
      (c.O = !0));
    c.a = !0;
    c.divSkin && c.divSkin.ggUpdateSize && c.divSkin.ggUpdateSize(a, f);
  };
  var ha = 0,
    ya = !1;
  c.setMargins = function(a, c, b, e) {
    H = a;
    I = c;
    gb = b;
    hb = e;
    ua();
  };
  c.changeViewMode = function(a) {
    0 == a && (aa = !1);
    1 == a && (aa = !0);
    2 == a && (aa = aa ? !1 : !0);
    zb = 3 == a;
  };
  c.ua = function() {
    return 1;
  };
  c.changePolygonMode = function(a, f) {
    h.mode = 1 == f && 0 < h.mode ? 0 : Math.round(a);
    c.a = !0;
  };
  c.polygonMode = function() {
    return h.mode;
  };
  c.getPan = function() {
    return X ? e.y : e.x;
  };
  c.getPanN = function() {
    return c.getPan();
  };
  c.getPanNorth = function() {
    return c.getPan();
  };
  c.showObjectImage = function(a, f) {
    e.x = a;
    e.y = f;
    Aa();
    c.a = !0;
  };
  c.setPan = function(a) {
    p();
    isNaN(a) || (X ? (e.y = Number(a)) : (e.x = Number(a)));
    c.a = !0;
  };
  c.changePan = function(a) {
    p();
    isNaN(a) || (X ? Oa(a) : Pa(a));
    c.a = !0;
  };
  c.getTilt = function() {
    return X ? e.x : e.y;
  };
  c.setTilt = function(a) {
    p();
    isNaN(a) || (X ? (e.x = Number(a)) : (e.y = Number(a)));
    c.a = !0;
  };
  c.changeTilt = function(a) {
    p();
    isNaN(a) || (X ? Pa(a) : Oa(a));
    c.a = !0;
  };
  c.changePanLog = function(a) {
    c.changePan(a);
  };
  c.changeTiltLog = function(a) {
    c.changeTilt(a);
  };
  c.getFov = function() {
    return 100 * m;
  };
  c.setZoom = function(a) {
    isNaN(a) || (m = a < Qa ? Qa : a > Ra ? Ra : a);
    c.a = !0;
  };
  c.setFov = function(a) {
    p();
    c.setZoom(a / 100);
  };
  c.changeFov = function(a) {
    c.setFov(c.getFov() - 10 * a);
  };
  c.changeFovLog = function(a) {
    c.setFov(c.getFov() * Math.exp(-a / 50));
  };
  c.getX = function() {
    return e.I;
  };
  c.getY = function() {
    return e.J;
  };
  c.getState = function() {
    return e.K;
  };
  c.setCenter = function(a, f) {
    z = (0.5 - a) * e.width;
    A = (0.5 - f) * e.height;
    c.a = !0;
  };
  c.getCenter = function() {
    var a = {};
    a.x = 0.5 - z / e.width;
    a.y = 0.5 - A / e.height;
    return a;
  };
  c.setPanTilt = function(a, f) {
    p();
    isNaN(a) || c.setPan(a);
    isNaN(f) || c.setTilt(f);
    c.a = !0;
  };
  c.setPanTiltFov = function(a, f, b) {
    p();
    isNaN(a) || c.setPan(a);
    isNaN(f) || c.setTilt(f);
    !isNaN(b) && 0 < b && c.setFov(b);
    c.a = !0;
  };
  c.setDefaultView = function() {
    var a = 1;
    a--;
    e.x = e.ra;
    e.y = e.sa;
    c.changeViewState(e.da, a);
    m = Fb;
  };
  c.moveTo = function(a, c, b, g, h, l) {
    p();
    sa = !0;
    var k = a.toString().split("/");
    1 < k.length &&
      ((a = Number(k[0])),
      (g = c),
      (c = Number(k[1])),
      2 < k.length && (b = Number(k[2])));
    va = isNaN(a) ? e.x : Number(a);
    wa = isNaN(c) ? e.y : Number(c);
    tb = !isNaN(b) && 0 < b ? Number(b) : 100 * m;
    xa = !isNaN(g) && 0 < g ? Number(g) : 1;
    h && !isNaN(h) && l && !isNaN(l)
      ? ((Lb = Number(h)),
        (Mb = Number(l)),
        (ea = Math.ceil(20 / xa)),
        0 >= ea && (ea = 1))
      : (ea = 0);
  };
  c.moveToDefaultView = function(a) {
    c.moveTo(e.Z, e.$, 100 * Fb, a);
  };
  var oa,
    Sa = 1;
  c.changeViewState = function(a, f) {
    p();
    console.log(f);
    if (e.state != a) {
      e.state = Number(a);
      f = Number(f);
      if (0 < f) {
        var b = 1 / (20 * Number(f));
        ca
          ? ((T.style.visibility = "inherit"),
            (x.style[Ia] = "opacity " + b + "s linear"),
            O == ca
              ? ((x.style.opacity = "0.0"), (O = pa))
              : ((x.style.opacity = "1.0"), (O = ca), (Db = !0)))
          : ((L.style.visibility = "inherit"),
            (q.style[Ia] = "opacity " + b + "s linear"),
            ka == q
              ? ((q.style.opacity = "0.0"), (ka = L))
              : ((q.style.opacity = "1.0"), (ka = q)));
        c.updateObject();
      }
      c.a = !0;
    }
  };
  c.va = function() {
    return e.state;
  };
  c.updateObject = function() {
    Aa();
    var a = Math.floor(e.x),
      f = Math.floor(e.y),
      b = e.state,
      g = !1;
    if (e.I != a || e.J != f || e.K != b) {
      if (0 < e.l.length)
        for (g = 0; g < e.l.length; g++) {
          var h = e.l[g];
          h.cache ? (h.ha[e.ia()] = h.N) : (h.N = []);
        }
      e.I = a;
      e.J = f;
      e.K = b;
      if (0 < e.l.length && ca)
        for (g = 0; g < e.l.length; g++)
          (h = e.l[g]), h.cache && ((h.N = h.ha[e.ia()]), h.N || (h.N = []));
      else
        0 < e.l.length
          ? ka.setAttribute("src", xb(a, f, b, e.l.length - 1, 0, 0))
          : ka.setAttribute("src", yb(a, f, b)),
          (ka.onload = function() {
            this.na = !0;
            c.a = !0;
            c.O = !0;
          }),
          (ka.na = !1);
      g = !0;
    }
    if (g || c.O || m != Ha || z != Ya || A != Za) jc(), (c.O = !1);
    g &&
      l.enabled &&
      (null == ga &&
        ((ga = new Image()),
        (na = document.createElement("canvas")),
        (na.width = e.width),
        (na.height = e.height),
        ga.addEventListener &&
          ga.addEventListener(
            "load",
            function() {
              na.getContext("2d").drawImage(ga, 0, 0, e.width, e.height);
            },
            !1
          )),
      8 <= l.P
        ? (l.P & 16 && (a = 0), l.P & 32 && (f = 0), l.P & 64 && (b = 0))
        : (0 < l.P && (b = 0), 1 < l.P && (a = 0), 2 < l.P && (f = 0)),
      ga &&
        ga.src != Na(e.path + "/hs_" + b + "_" + f + "_" + a + ".png") &&
        (ga.src = Na(e.path + "/hs_" + b + "_" + f + "_" + a + ".png")));
  };
  c.preloadImages = function() {
    var a, f, b, g;
    if (0 < e.l.length)
      for (g = 0; g < e.l.length; g++) {
        var h = e.l[g];
        if (h.cache)
          for (b = 0; b < e.L; b++)
            for (f = 0; f < e.j; f++)
              for (a = 0; a < e.c; a++) {
                var l = [],
                  m,
                  k;
                for (k = 0; k < h.aa; k++)
                  for (m = 0; m < h.M; m++) {
                    var p = m + k * h.M,
                      q;
                    q = {};
                    q.i = new Image();
                    q.i.setAttribute("src", xb(a, f, b, g, m, k));
                    q.i.onload = function() {
                      c.a = !0;
                      c.O = !0;
                    };
                    l[p] = q;
                    c.checkLoaded.push(q.i);
                  }
                h.ha[a + e.c * (f + b * e.j)] = l;
              }
      }
    else if (e.ka)
      for (g = new Image(), g.src = yb(e.Z, e.$, e.da), b = 0; b < e.L; b++)
        for (f = 0; f < e.j; f++)
          for (a = 0; a < e.c; a++)
            (g = new Image()), (g.src = yb(a, f, b)), c.checkLoaded.push(g);
  };
  var u,
    La = function(a, f) {
      var b = h.v;
      b.enabled &&
        (c.hotspot != c.emptyHotspot &&
        0 <= a &&
        0 <= f &&
        "" != c.hotspot.title
          ? ((k.innerHTML = c.hotspot.title),
            (k.style.color = S(b.U, b.ea)),
            (k.style.backgroundColor = b.background
              ? S(b.B, b.G)
              : "transparent"),
            (k.style.border = "solid " + S(b.C, b.H) + " " + b.S + "px"),
            (k.style.borderRadius = b.R + "px"),
            (k.style.textAlign = "center"),
            0 < b.width
              ? ((k.style.left = a - b.width / 2 + "px"),
                (k.style.width = b.width + "px"))
              : ((k.style.width = "auto"),
                (k.style.left = a - k.offsetWidth / 2 + "px")),
            (k.style.height = 0 < b.height ? b.height + "px" : "auto"),
            (k.style.top = f + 25 + "px"),
            (k.style.visibility = "inherit"),
            (k.style.overflow = "hidden"))
          : ((k.style.visibility = "hidden"), (k.innerHTML = "")));
    };
  c.ma = function() {
    for (var a = 0; a < G.length; a++)
      if (
        "point" == G[a].hstype &&
        ((G[a].obj =
          c.skinObj && c.skinObj.addSkinHotspot
            ? new c.skinObj.addSkinHotspot(G[a])
            : new Bc(this, G[a])),
        G[a].obj && G[a].obj.__div)
      ) {
        var f = Q.firstChild;
        f ? Q.insertBefore(G[a].obj.__div, f) : Q.appendChild(G[a].obj.__div);
      }
  };
  var ib = 0;
  c.assignHandler = function() {
    var a;
    a = Q;
    c.control = a;
    F();
    setTimeout(function() {
      da();
    }, 10);
    setTimeout(function() {
      Nb();
    }, 200);
    setTimeout(function() {
      ua();
      c.updateObject();
    }, 10);
    a.addEventListener
      ? (a.addEventListener("touchstart", yc, !1),
        a.addEventListener("touchmove", xc, !1),
        a.addEventListener("touchend", wc, !1),
        a.addEventListener("touchcancel", vc, !1),
        a.addEventListener(
          "pointerdown",
          function(a) {
            Xb(a);
          },
          !1
        ),
        a.addEventListener(
          "MSPointerDown",
          function(a) {
            Xb(a);
          },
          !1
        ),
        a.addEventListener(
          "MSGestureStart",
          function(a) {
            Wb(a);
          },
          !1
        ),
        a.addEventListener(
          "MSGestureEnd",
          function(a) {
            Vb(a);
          },
          !1
        ),
        a.addEventListener(
          "MSGestureChange",
          function(a) {
            var b = a;
            if (!K) {
              var e = ia(),
                b = b ? b : window.event,
                b = Fa(b);
              Wa()
                ? ((a = b.screenX - 0.5 * C), (e = b.screenY - 0.5 * D))
                : ((a = b.pageX - e.x - 0.5 * C),
                  (e = b.pageY - e.y - 0.5 * D));
              b.preventDefault();
              1 != b.scale &&
                ((Sa *= b.scale),
                (b = m),
                c.setZoom(Sa * ta),
                (b = 1 / (t * m) - 1 / (t * b)),
                (z += a * b),
                (A += e * b),
                p());
            }
          },
          !1
        ),
        a.addEventListener("gesturestart", Wb, !1),
        a.addEventListener("gesturechange", uc, !1),
        a.addEventListener("gestureend", Vb, !1),
        a.addEventListener("mousedown", Xa, !1),
        a.addEventListener("mousemove", Ga, !1),
        q.addEventListener("mousedown", Xa, !1),
        q.addEventListener("mousemove", Ga, !1),
        document.addEventListener("mouseup", gc, !1),
        ab &&
          (c.s.addEventListener("mousedown", Xa, !1),
          c.s.addEventListener("mousemove", Ga, !1),
          x.addEventListener("mousedown", Xa, !1),
          x.addEventListener("mousemove", Ga, !1)),
        ab
          ? (q.addEventListener("mousewheel", Ea, !1),
            x.addEventListener("mousewheel", Ea, !1))
          : (a.addEventListener("mousewheel", Ea, !1),
            a.addEventListener("DOMMouseScroll", Ea, !1)),
        document.addEventListener("keydown", Ub, !1),
        document.addEventListener("keyup", Tb, !1),
        window.addEventListener("orientationchange", F, !1),
        window.addEventListener("resize", ua, !1),
        window.addEventListener("blur", Sb, !1),
        c.b.addEventListener("webkitfullscreenchange", $a, !1),
        document.addEventListener("mozfullscreenchange", $a, !1),
        window.addEventListener("webkitfullscreenchange", $a, !1),
        document.addEventListener("MSFullscreenChange", $a, !1))
      : a.attachEvent &&
        (q.attachEvent("onmousedown", zc),
        q.attachEvent("onmousemove", Ga),
        document.attachEvent("onmouseup", gc),
        a.attachEvent("onmousedblclick", c.toggleFullscreen),
        (a.onmousewheel = document.onmousewheel = Ea),
        document.attachEvent("onkeydown", Ub),
        document.attachEvent("onkeyup", Tb),
        window.attachEvent("onresize", ua),
        window.attachEvent("onblur", Sb));
    a.oncontextmenu = function(a) {
      void 0 === a && (a = window.event);
      return a.ctrlKey ||
        ((a = "<<L>>" + String(a.target)),
        (a = a.toUpperCase()),
        "U" == a.charAt(2))
        ? !0
        : (P(), !1);
    };
  };
  c.setFullscreen = function(a) {
    c.isFullscreen != a && ((c.isFullscreen = a), (c.a = !0), (c.O = !0));
    if (c.isFullscreen) {
      try {
        c.b.webkitRequestFullScreen
          ? c.b.webkitRequestFullScreen()
          : c.b.mozRequestFullScreen
          ? c.b.mozRequestFullScreen()
          : c.b.msRequestFullscreen
          ? c.b.msRequestFullscreen()
          : c.b.requestFullScreen
          ? c.b.requestFullScreen()
          : c.b.requestFullscreen && c.b.requestFullscreen();
      } catch (e) {}
      c.b.style.position = "absolute";
      a = ia();
      var f = 0,
        b = 0;
      "number" == typeof window.pageYOffset
        ? ((b = window.pageYOffset), (f = window.pageXOffset))
        : document.body && (document.body.scrollLeft || document.body.scrollTop)
        ? ((b = document.body.scrollTop), (f = document.body.scrollLeft))
        : document.documentElement &&
          (document.documentElement.scrollLeft ||
            document.documentElement.scrollTop) &&
          ((b = document.documentElement.scrollTop),
          (f = document.documentElement.scrollLeft));
      c.b.style.left = Math.round(f - a.x + H) + "px";
      c.b.style.top = Math.round(b - a.y + I) + "px";
      document.body.style.overflow = "hidden";
      c.divSkin && c.divSkin.ggEnterFullscreen && c.divSkin.ggEnterFullscreen();
    } else {
      try {
        document.webkitIsFullScreen
          ? document.webkitCancelFullScreen()
          : document.mozFullScreen
          ? document.mozCancelFullScreen()
          : document.msExitFullscreen
          ? document.msExitFullscreen()
          : document.fullScreen &&
            (document.cancelFullScreen
              ? document.cancelFullScreen()
              : document.exitFullscreen && document.exitFullscreen());
      } catch (e) {}
      c.b.style.position = "relative";
      c.b.style.left = "0px";
      c.b.style.top = "0px";
      document.body.style.overflow = "";
      c.divSkin && c.divSkin.ggExitFullscreen && c.divSkin.ggExitFullscreen();
    }
    ua();
  };
  c.toggleFullscreen = function() {
    c.setFullscreen(!c.isFullscreen);
  };
  c.exitFullscreen = function() {
    c.setFullscreen(!1);
  };
  c.startAutorotate = function(a, c, b) {
    fa = ma = !0;
    a && 0 != a && (la = a);
    c && (Ka = c);
    b && (vb = 1 == b);
  };
  c.stopAutorotate = function() {
    ma = fa = !1;
  };
  c.toggleAutorotate = function() {
    fa = ma = !fa;
  };
  var J;
  c.createLayers = function(a) {
    c.W = document.getElementById(a);
    c.W
      ? ((c.W.innerHTML = ""),
        (c.b = document.createElement("div")),
        c.b.setAttribute(
          "style",
          "top:\t0px;left: 0px;-ms-touch-action: none;touch-action: none;position:relative;max-width: none !important;max-height: none !important;min-width: none !important;min-height: none !important;padding 0px !important;margin 0px !important;"
        ),
        c.W.appendChild(c.b),
        (B = document.createElement("div")),
        (a =
          "top:\t0px;left: 0px;overflow: hidden;position:absolute;-ms-touch-action: none;touch-action: none;" +
          (M + "user-select: none;")),
        B.setAttribute(
          "style",
          a +
            "max-width: none !important;max-height: none !important;min-width: none !important;min-height: none !important;padding 0px !important;margin 0px !important;"
        ),
        c.b.appendChild(B),
        (L = document.createElement("img")),
        L.setAttribute("galleryimg", "false"),
        (a =
          "top:\t0px;left: 0px;position:absolute;visibility: hidden;-ms-touch-action: none;touch-action: none;" +
          (M + "user-select: none;")),
        L.setAttribute(
          "style",
          a +
            "max-width: none !important;max-height: none !important;min-width: none !important;min-height: none !important;padding 0px !important;margin 0px !important;"
        ),
        B.appendChild(L),
        (q = document.createElement("img")),
        q.setAttribute("galleryimg", "false"),
        (a =
          "top:\t0px;left: 0px;position:absolute;-ms-touch-action: none;touch-action: none;" +
          (M + "user-select: none;")),
        q.setAttribute(
          "style",
          a +
            "max-width: none !important;max-height: none !important;min-width: none !important;min-height: none !important;padding 0px !important;margin 0px !important;"
        ),
        B.appendChild(q),
        (ka = q),
        (T = document.createElement("canvas")),
        (a =
          "top:\t0px;left: 0px;width:  100px;height: 100px;visibility: hidden;position:absolute;-ms-touch-action: none;touch-action: none;" +
          (M + "user-select: none;")),
        T.setAttribute(
          "style",
          a +
            "max-width: none !important;max-height: none !important;min-width: none !important;min-height: none !important;padding 0px !important;margin 0px !important;"
        ),
        B.appendChild(T),
        (x = document.createElement("canvas")),
        (a =
          "top:\t0px;left: 0px;width:  100px;height: 100px;position:absolute;-ms-touch-action: none;touch-action: none;" +
          (M + "user-select: none;")),
        x.setAttribute(
          "style",
          a +
            "max-width: none !important;max-height: none !important;min-width: none !important;min-height: none !important;padding 0px !important;margin 0px !important;"
        ),
        B.appendChild(x),
        (k = document.createElement("div")),
        k.setAttribute(
          "style",
          "top:\t0px;left: 0px;position:absolute;padding: 3px;visibility: hidden;z-index: 1100;"
        ),
        (k.innerHTML = " Hotspot text!"),
        B.appendChild(k),
        (Q = document.createElement("div")),
        (a =
          "top:\t0px;left: 0px;width:  100px;height: 100px;overflow: hidden;position:absolute;z-index: 1000;" +
          (M + "user-select: none;")),
        Q.setAttribute(
          "style",
          a +
            "max-width: none !important;max-height: none !important;min-width: none !important;min-height: none !important;padding 0px !important;margin 0px !important;"
        ),
        c.b.appendChild(Q),
        (c.s = document.createElement("canvas")),
        (a =
          "top:\t0px;left: 0px;width:  100px;height: 100px;overflow: hidden;position:absolute;z-index: 900;" +
          (M + "user-select: none;")),
        c.s.setAttribute(
          "style",
          a +
            "max-width: none !important;max-height: none !important;min-width: none !important;min-height: none !important;padding 0px !important;margin 0px !important;"
        ),
        c.b.appendChild(c.s),
        (c.divSkin = Q))
      : alert("container not found!");
  };
  c.readConfigString = function(a) {
    window.DOMParser
      ? ((parser = new DOMParser()),
        (xmlDoc = parser.parseFromString(a, "text/xml")))
      : ((xmlDoc = new ActiveXObject("Microsoft.XMLDOM")),
        (xmlDoc.async = "false"),
        xmlDoc.loadXML(a));
    c.readConfigXml(xmlDoc);
  };
  c.readConfigUrl = function(a) {
    try {
      var e;
      e = window.XMLHttpRequest
        ? new XMLHttpRequest()
        : new ActiveXObject("Microsoft.XMLHTTP");
      e.open("GET", a, !1);
      e.send(null);
      var b = e.responseXML;
      if (b) {
        var g = a.lastIndexOf("/");
        0 <= g && (Eb = a.substr(0, g + 1));
        c.readConfigXml(b);
      } else alert("Error loading XML");
    } catch (h) {
      alert("Error XML:" + h);
    }
  };
  var bb = !0;
  c.readConfigXml = function(a) {
    var f = a.firstChild;
    a = f.firstChild;
    null == a && (a = f.nextSibling.firstChild);
    for (var b; a; ) {
      if ("view" == a.nodeName)
        for (f = a.firstChild; f; )
          "start" == f.nodeName &&
            ((b = f.getAttributeNode("column")),
            (e.Z = Number(b ? b.nodeValue : 0)),
            (e.x = e.Z),
            (b = f.getAttributeNode("row")),
            (e.$ = Number(b ? b.nodeValue : 0)),
            (e.y = e.$),
            (b = f.getAttributeNode("state")),
            (e.da = Number(b ? b.nodeValue : 0)),
            (e.state = e.da)),
            "zoom" == f.nodeName &&
              ((b = f.getAttributeNode("min")),
              (Qa = 1 * (b ? b.nodeValue : 1)),
              (b = f.getAttributeNode("default")),
              (m = Fb = 1 * (b ? b.nodeValue : 1)),
              (b = f.getAttributeNode("max")),
              (Ra = 1 * (b ? b.nodeValue : 1)),
              (b = f.getAttributeNode("centerx")),
              (z = 1 * (b ? b.nodeValue : 0)),
              (b = f.getAttributeNode("centery")),
              (A = 1 * (b ? b.nodeValue : 0))),
            "viewer" == f.nodeName &&
              ((b = f.getAttributeNode("background")) &&
                (nc = 1 == b.nodeValue),
              (b = f.getAttributeNode("backgroundcolor")) &&
                (oc = 1 * b.nodeValue),
              (b = f.getAttributeNode("imagescaling")) &&
                (kc = 1 * b.nodeValue)),
            (f = f.nextSibling);
      "autorotate" == a.nodeName &&
        (bb && (ma = !1),
        (b = a.getAttributeNode("start")) && (ma = 1 == b.nodeValue),
        (b = a.getAttributeNode("pingpong")) && (vb = 1 == b.nodeValue),
        (b = a.getAttributeNode("speed")) && (la = 1 * b.nodeValue),
        (b = a.getAttributeNode("delay")) && (Ka = 1 * b.nodeValue),
        (fa = ma),
        (b = a.getAttributeNode("onlyonce")) &&
          0 < b.nodeValue &&
          ((f = e.Z),
          (f =
            0 < la
              ? f + (b.nodeValue * e.c + 0.5)
              : f - (b.nodeValue * e.c + 0.5)),
          c.moveTo(f, e.$, 0, Math.abs(la))));
      if ("input" == a.nodeName) {
        if ((b = a.getAttributeNode("columns"))) e.c = 1 * b.nodeValue;
        if ((b = a.getAttributeNode("rows"))) e.j = 1 * b.nodeValue;
        if ((b = a.getAttributeNode("states"))) e.L = 1 * b.nodeValue;
        if ((b = a.getAttributeNode("width"))) e.width = 1 * b.nodeValue;
        if ((b = a.getAttributeNode("height"))) e.height = 1 * b.nodeValue;
        if ((b = a.getAttributeNode("fileextension"))) e.ext = b.nodeValue;
        if ((b = a.getAttributeNode("imagepath"))) e.path = b.nodeValue;
        if ((b = a.getAttributeNode("leveltileurl"))) e.pa = b.nodeValue;
        if ((b = a.getAttributeNode("leveltilesize")))
          e.u = Number(b.nodeValue);
        if ((b = a.getAttributeNode("overlap"))) e.ja = b.nodeValue;
        if ((b = a.getAttributeNode("preload"))) e.ka = 1 == b.nodeValue;
        e.l = [];
        for (f = a.firstChild; f; ) {
          if ("level" == f.nodeName) {
            var g = {};
            b = f.getAttributeNode("width");
            g.width = 1 * (b ? b.nodeValue : 1);
            b = f.getAttributeNode("height");
            g.height = 1 * (b ? b.nodeValue : 1);
            b = f.getAttributeNode("preload");
            g.cache = !1;
            b && (g.cache = 1 == b.nodeValue);
            g.M = Math.floor((g.width + e.u - 1) / e.u);
            g.aa = Math.floor((g.height + e.u - 1) / e.u);
            g.N = [];
            g.ha = [];
            e.l.push(g);
          }
          f = f.nextSibling;
        }
      }
      "control" == a.nodeName &&
        bb &&
        ((b = a.getAttributeNode("simulatemass")) && (rb = 1 == b.nodeValue),
        (b = a.getAttributeNode("locked")) && (K = 1 == b.nodeValue),
        b && (Ba = 1 == b.nodeValue),
        (b = a.getAttributeNode("lockedmouse")) && (K = 1 == b.nodeValue),
        (b = a.getAttributeNode("lockedkeyboard")) && (Ba = 1 == b.nodeValue),
        (b = a.getAttributeNode("lockedwheel")) && (dc = 1 == b.nodeValue),
        (b = a.getAttributeNode("invertwheel")) && (ec = 1 == b.nodeValue),
        (b = a.getAttributeNode("speedwheel")) && (fc = 1 * b.nodeValue),
        (b = a.getAttributeNode("sensitifity")) && (ra = 1 * b.nodeValue),
        (b = a.getAttributeNode("sensitivity")) && (ra = 1 * b.nodeValue),
        (b = a.getAttributeNode("wrapx")) && (Qb = 1 == b.nodeValue),
        (b = a.getAttributeNode("wrapy")) && (Rb = 1 == b.nodeValue),
        (b = a.getAttributeNode("revx")) && (nb = 1 == b.nodeValue),
        (b = a.getAttributeNode("revy")) && (ob = 1 == b.nodeValue),
        (b = a.getAttributeNode("swapxy")) && (X = 1 == b.nodeValue),
        (b = a.getAttributeNode("dblclickfullscreen")) &&
          (Bb = 1 == b.nodeValue),
        (b = a.getAttributeNode("automovemode")) && (zb = 1 == b.nodeValue),
        (b = a.getAttributeNode("controller")) && (jb = 1 * b.nodeValue));
      if ("qthotspots" == a.nodeName) {
        if ((b = a.getAttributeNode("reuse"))) l.P = 1 * b.nodeValue;
        if ((b = a.getAttributeNode("enabled"))) l.enabled = 1 == b.nodeValue;
        l.V = [];
        g = { id: 0, title: "", url: "", target: "" };
        l.V[g.id] = g;
        for (f = a.firstChild; f; ) {
          if ("label" == f.nodeName) {
            if ((b = f.getAttributeNode("enabled")))
              l.v.enabled = 1 == b.nodeValue;
            if ((b = f.getAttributeNode("width"))) l.v.width = 1 * b.nodeValue;
            if ((b = f.getAttributeNode("height")))
              l.v.height = 1 * b.nodeValue;
            if ((b = f.getAttributeNode("textcolor"))) l.v.U = 1 * b.nodeValue;
            if ((b = f.getAttributeNode("background")))
              l.v.background = 1 == b.nodeValue;
            if ((b = f.getAttributeNode("backgroundcolor")))
              l.v.B = 1 * b.nodeValue;
            if ((b = f.getAttributeNode("border"))) l.v.S = 1 * b.nodeValue;
            if ((b = f.getAttributeNode("bordercolor")))
              l.v.C = 1 * b.nodeValue;
            if ((b = f.getAttributeNode("borderradius")))
              l.v.R = 1 * b.nodeValue;
            if ((b = f.getAttributeNode("wordwrap")))
              l.v.wordwrap = 1 == b.nodeValue;
          }
          "hotspot" == f.nodeName &&
            ((g = {}),
            (b = f.getAttributeNode("id")),
            (g.id = 1 * (b ? b.nodeValue : 1)),
            (b = f.getAttributeNode("title")),
            (g.title = b ? b.nodeValue.toString() : ""),
            (b = f.getAttributeNode("url")),
            (g.url = b ? b.nodeValue.toString() : ""),
            (b = f.getAttributeNode("target")),
            (g.target = b ? b.nodeValue.toString() : ""),
            (l.V[g.id] = g));
          f = f.nextSibling;
        }
      }
      if ("hotspots" == a.nodeName)
        for (f = a.firstChild; f; ) {
          if ("label" == f.nodeName) {
            g = h.v;
            if ((b = f.getAttributeNode("enabled")))
              g.enabled = 1 == b.nodeValue;
            if ((b = f.getAttributeNode("width"))) g.width = 1 * b.nodeValue;
            if ((b = f.getAttributeNode("height"))) g.height = 1 * b.nodeValue;
            if ((b = f.getAttributeNode("textcolor"))) g.U = 1 * b.nodeValue;
            if ((b = f.getAttributeNode("textalpha"))) g.ea = 1 * b.nodeValue;
            if ((b = f.getAttributeNode("background")))
              g.background = 1 == b.nodeValue;
            if ((b = f.getAttributeNode("backgroundalpha")))
              g.G = 1 * b.nodeValue;
            if ((b = f.getAttributeNode("backgroundcolor")))
              g.B = 1 * b.nodeValue;
            if ((b = f.getAttributeNode("border"))) g.S = 1 * b.nodeValue;
            if ((b = f.getAttributeNode("bordercolor"))) g.C = 1 * b.nodeValue;
            if ((b = f.getAttributeNode("borderalpha"))) g.H = 1 * b.nodeValue;
            if ((b = f.getAttributeNode("borderradius"))) g.R = 1 * b.nodeValue;
            if ((b = f.getAttributeNode("wordwrap")))
              g.wordwrap = 1 == b.nodeValue;
          }
          if ("polystyle" == f.nodeName) {
            if ((b = f.getAttributeNode("mode"))) h.mode = 1 * b.nodeValue;
            if ((b = f.getAttributeNode("bordercolor"))) h.C = 1 * b.nodeValue;
            if ((b = f.getAttributeNode("backgroundcolor")))
              h.B = 1 * b.nodeValue;
            if ((b = f.getAttributeNode("borderalpha"))) h.H = 1 * b.nodeValue;
            if ((b = f.getAttributeNode("backgroundalpha")))
              h.G = 1 * b.nodeValue;
          }
          if ("hotspot" == f.nodeName) {
            g = {
              hstype: "point",
              pan: 0,
              tilt: 0,
              url: "",
              target: "",
              id: "",
              skinid: "",
              w: 100,
              h: 20,
              wordwrap: !1,
              obj: null,
              F: null
            };
            (b = f.getAttributeNode("url")) && (g.url = b.nodeValue.toString());
            (b = f.getAttributeNode("target")) &&
              (g.target = b.nodeValue.toString());
            (b = f.getAttributeNode("title")) &&
              (g.title = b.nodeValue.toString());
            (b = f.getAttributeNode("id")) && (g.id = b.nodeValue.toString());
            if ((b = f.getAttributeNode("reuse"))) g.reuse = b.nodeValue;
            (b = f.getAttributeNode("skinid")) &&
              (g.skinid = b.nodeValue.toString());
            (b = a.getAttributeNode("width")) && (g.w = b.nodeValue.toString());
            (b = a.getAttributeNode("height")) &&
              (g.h = b.nodeValue.toString());
            (b = a.getAttributeNode("wordwrap")) &&
              (g.wordwrap = 1 == b.nodeValue);
            g.locations = [];
            for (var k = f.firstChild; k; ) {
              if ("location" == k.nodeName) {
                var n = { column: 0, row: 0, state: 0, x: 0, y: 0 };
                (b = k.getAttributeNode("column")) &&
                  (n.column = Number(b.nodeValue));
                (b = k.getAttributeNode("row")) &&
                  (n.row = Number(b.nodeValue));
                (b = k.getAttributeNode("state")) &&
                  (n.state = Number(b.nodeValue));
                (b = k.getAttributeNode("x")) && (n.x = Number(b.nodeValue));
                (b = k.getAttributeNode("y")) && (n.y = Number(b.nodeValue));
                g.locations.push(n);
              }
              k = k.nextSibling;
            }
            G.push(g);
          }
          if ("polyhotspot" == f.nodeName) {
            g = {
              hstype: "poly",
              url: "",
              target: "",
              id: "",
              skinid: "",
              reuse: 0,
              w: 100,
              h: 20,
              wordwrap: !1,
              obj: null,
              F: null,
              f: 0,
              m: 0
            };
            (b = f.getAttributeNode("url")) && (g.url = b.nodeValue.toString());
            (b = f.getAttributeNode("target")) &&
              (g.target = b.nodeValue.toString());
            (b = f.getAttributeNode("title")) &&
              (g.title = b.nodeValue.toString());
            (b = f.getAttributeNode("id")) && (g.id = b.nodeValue.toString());
            if ((b = f.getAttributeNode("reuse"))) g.reuse = b.nodeValue;
            g.C = h.C;
            g.B = h.B;
            g.H = h.H;
            g.G = h.G;
            if ((b = f.getAttributeNode("bordercolor"))) g.C = 1 * b.nodeValue;
            if ((b = f.getAttributeNode("backgroundcolor")))
              g.B = 1 * b.nodeValue;
            if ((b = f.getAttributeNode("borderalpha"))) g.H = 1 * b.nodeValue;
            if ((b = f.getAttributeNode("backgroundalpha")))
              g.G = 1 * b.nodeValue;
            g.T = [];
            for (k = f.firstChild; k; ) {
              if ("polygon" == k.nodeName) {
                n = { fa: 0, ga: 0, state: 0, la: "" };
                if ((b = k.getAttributeNode("vertices"))) {
                  n.la = b.nodeValue.toString();
                  b = n.la.split("|");
                  n.Y = [];
                  for (var p = 0; p < b.length; p++) {
                    var q = {},
                      r = b[p].split(";");
                    q.F = [];
                    for (var t = 0; t < r.length; t++) {
                      var u = r[t].split(","),
                        x = {};
                      x.x = 1 * u[0];
                      x.y = 1 * u[1];
                      q.F.push(x);
                    }
                    n.Y.push(q);
                  }
                }
                if ((b = k.getAttributeNode("column"))) n.fa = b.nodeValue;
                if ((b = k.getAttributeNode("row"))) n.ga = b.nodeValue;
                if ((b = k.getAttributeNode("state"))) n.state = b.nodeValue;
                g.T.push(n);
              }
              k = k.nextSibling;
            }
            G.push(g);
          }
          f = f.nextSibling;
        }
      "userdata" == a.nodeName &&
        ((b = a.getAttributeNode("title")),
        (c.userdata.title = b ? b.nodeValue.toString() : ""),
        (b = a.getAttributeNode("description")),
        (c.userdata.description = b ? b.nodeValue.toString() : ""),
        (b = a.getAttributeNode("author")),
        (c.userdata.author = b ? b.nodeValue.toString() : ""),
        (b = a.getAttributeNode("datetime")),
        (c.userdata.datetime = b ? b.nodeValue.toString() : ""),
        (b = a.getAttributeNode("copyright")),
        (c.userdata.copyright = b ? b.nodeValue.toString() : ""),
        (b = a.getAttributeNode("source")),
        (c.userdata.source = b ? b.nodeValue.toString() : ""),
        (b = a.getAttributeNode("info")),
        (c.userdata.information = b ? b.nodeValue.toString() : ""),
        (b = a.getAttributeNode("comment")),
        (c.userdata.comment = b ? b.nodeValue.toString() : ""));
      a = a.nextSibling;
    }
    c.ma();
    c.a = !0;
    bb && c.divSkin && c.divSkin.ggViewerInit && c.divSkin.ggViewerInit();
    bb = !1;
    c.hasConfig = !0;
    ua();
    B.style.backgroundColor = nc ? mc(oc) : "transparent";
    c.preloadImages();
  };
  c.openUrl = function(a, c) {
    0 < a.length && window.vm.$emit("hsClick", a);
  };
  c.detectBrowser();
  c.createLayers(U);
  c.assignHandler();
}
window.object2vrPlayer = object2vrPlayer;
window.ggHasCanvas = function() {
  var U = document.createElement("canvas");
  return !(!U.getContext || !U.getContext("2d"));
};
