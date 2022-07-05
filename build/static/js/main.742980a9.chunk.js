(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    106: function (e, t, a) {},
    129: function (e, t, a) {},
    146: function (e, t, a) {
      e.exports = a.p + "static/media/Display.0f80e05f.jpg";
    },
    150: function (e, t, a) {
      e.exports = a.p + "static/media/Chat Logo.a0d26d79.png";
    },
    177: function (e, t, a) {
      e.exports = a(235);
    },
    231: function (e, t, a) {},
    232: function (e, t, a) {},
    233: function (e, t, a) {},
    234: function (e, t, a) {},
    235: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(0),
        r = a.n(n),
        o = a(142),
        l = a.n(o),
        i = (a(129), a(104), a(184), a(14)),
        c = a(21),
        s = a(3),
        m = (a(106), a(156)),
        u = a(146),
        d = a.n(u),
        h = a(296),
        p = a(15),
        f = a.n(p),
        g = Object(c.j)(function (e) {
          var t = Object(n.useState)([]),
            a = Object(s.a)(t, 2),
            o = a[0],
            l = a[1];
          function i(e) {
            var t = e.images;
            return e.images.length, window.location.origin + "/uploads/" + t[0];
          }
          return (
            Object(n.useEffect)(function () {
              f.a
                .get("/api/cars", {
                  headers: { "x-access-token": localStorage.getItem("token") },
                })
                .then(function (e) {
                  var t = e.data;
                  t.cars ? l(t.cars) : l(null);
                });
            }, []),
            r.a.createElement(
              "div",
              { className: "clearfix mb-5 ", style: { marginTop: "2rem" } },
              r.a.createElement(
                "div",
                { className: "row " },
                Array.isArray(o)
                  ? o.map(function (t, a) {
                      return a <= 5
                        ? r.a.createElement(
                            "div",
                            { className: "col-md-4 animated fadIn", key: a },
                            r.a.createElement(
                              "div",
                              { className: "card mt-3" },
                              r.a.createElement(
                                "div",
                                { className: "card-body" },
                                r.a.createElement(
                                  "div",
                                  { className: "avatar" },
                                  r.a.createElement("img", {
                                    style: { cursor: "pointer" },
                                    src: i(t),
                                    alt: "",
                                    className: "card-img-top",
                                    onClick: function (a) {
                                      a.preventDefault(),
                                        e.history.push(
                                          "products/car-details/" + t._id
                                        );
                                    },
                                  })
                                ),
                                r.a.createElement(
                                  "strong",
                                  null,
                                  r.a.createElement(
                                    "h4",
                                    {
                                      className: " mt-2 card-title",
                                      style: {
                                        fontFamily: "Times New Roman",
                                        color: "#228B22",
                                      },
                                    },
                                    t.manufacturer,
                                    " ",
                                    t.model
                                  )
                                ),
                                t.salePrice
                                  ? r.a.createElement(
                                      "p",
                                      null,
                                      r.a.createElement(
                                        "strong",
                                        { style: { color: "#880808" } },
                                        t.salePrice
                                          ? "Sold @ " + t.salePrice
                                          : ""
                                      )
                                    )
                                  : r.a.createElement(
                                      "h5",
                                      {
                                        className: "mt-2 car-price",
                                        style: {
                                          fontFamily: "Times New Roman",
                                          color: "#228B22",
                                        },
                                      },
                                      t.price
                                    ),
                                r.a.createElement(
                                  "p",
                                  {
                                    className: "mt-2 card-text",
                                    style: { fontFamily: "Times New Roman" },
                                  },
                                  t.description.substr(0, 15) + "..."
                                )
                              )
                            )
                          )
                        : "";
                    })
                  : r.a.createElement(
                      "h1",
                      {
                        className:
                          " mt-5 container d-flex justify-content-center",
                        style: {
                          color: "black",
                          fontFamily: "Times New Roman",
                          fontWeight: "bold",
                        },
                      },
                      "No Data Available"
                    )
              )
            )
          );
        }),
        y = a(148),
        E = a.n(y),
        v = function () {
          var e = Object(n.useState)(!1),
            t = Object(s.a)(e, 2),
            a = t[0],
            o = t[1];
          Object(n.useEffect)(function () {
            window.addEventListener("scroll", function () {
              window.scrollY > 100 ? o(!0) : o(!1);
            });
          }, []);
          return r.a.createElement(
            r.a.Fragment,
            null,
            a &&
              r.a.createElement(E.a, {
                style: {
                  position: "fixed",
                  bottom: "2.3em",
                  cursor: "pointer",
                  color: "#228B22",
                  fontSize: "3em",
                  right: "0.8em",
                  zIndex: "1",
                },
                onClick: function () {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                },
              })
          );
        },
        b = a(297),
        w = a(280),
        N = a(291),
        x = function () {
          var e = Object(c.g)(),
            t = Object(n.useState)(""),
            a = Object(s.a)(t, 2),
            o = a[0],
            l = a[1],
            i = Object(n.useState)(),
            m = Object(s.a)(i, 2),
            u = m[0],
            d = m[1],
            p = Object(n.useState)(),
            g = Object(s.a)(p, 2),
            y = g[0],
            E = g[1],
            v = Object(n.useState)(""),
            x = Object(s.a)(v, 2),
            k = x[0],
            C = x[1];
          return r.a.createElement(
            "div",
            { className: "" },
            r.a.createElement(
              b.a,
              { container: !0, spacing: 2 },
              r.a.createElement(
                b.a,
                { item: !0, xs: 3 },
                r.a.createElement(
                  w.a,
                  { className: "mt-2", sx: { width: 300, maxWidth: "100%" } },
                  r.a.createElement(N.a, {
                    value: o,
                    onChange: function (e) {
                      l(e.target.value);
                    },
                    fullWidth: !0,
                    label: "Model Name",
                    type: "text",
                  })
                )
              ),
              r.a.createElement(
                b.a,
                { item: !0, xs: 3 },
                r.a.createElement(
                  w.a,
                  { className: "mt-2", sx: { width: 300, maxWidth: "100%" } },
                  r.a.createElement(N.a, {
                    value: u || "",
                    onChange: function (e) {
                      d(e.target.value);
                    },
                    fullWidth: !0,
                    label: "From Model Year",
                    type: "number",
                  })
                )
              ),
              r.a.createElement(
                b.a,
                { item: !0, xs: 3 },
                r.a.createElement(
                  w.a,
                  { className: "mt-2", sx: { width: 300, maxWidth: "100%" } },
                  r.a.createElement(N.a, {
                    value: y || "",
                    onChange: function (e) {
                      E(e.target.value);
                    },
                    fullWidth: !0,
                    label: "To Model Year",
                    type: "number",
                  })
                )
              ),
              r.a.createElement(
                b.a,
                { item: !0, xs: 3 },
                r.a.createElement(
                  w.a,
                  { className: "mt-2", sx: { width: 300, maxWidth: "100%" } },
                  r.a.createElement(N.a, {
                    value: k,
                    onChange: function (e) {
                      C(e.target.value);
                    },
                    fullWidth: !0,
                    label: "Version",
                    type: "text",
                  })
                )
              )
            ),
            r.a.createElement(
              h.a,
              {
                className: "mt-4  ",
                variant: "contained",
                color: "success",
                size: "large",
                type: "submit",
                onClick: function () {
                  f()({
                    method: "post",
                    url: "/api/basic_search",
                    data: {
                      model: o,
                      maxModelYear: y,
                      minModelYear: u,
                      version: k,
                    },
                    headers: {
                      "x-access-token": localStorage.getItem("token"),
                    },
                  }).then(function (t) {
                    var a = t.data;
                    e.push("/products", { state: { cars: a } });
                  });
                },
              },
              "Search"
            )
          );
        },
        k = a(309),
        C = a(310),
        T = a(311),
        j = a(312),
        S = a(244),
        F = a(16),
        W = a(60),
        O = a(295),
        R = a(285),
        L = a(308),
        A = a(294),
        M = a(150),
        B = a.n(M),
        I = a(155).a.connect(""),
        P = a(98),
        D = a.n(P),
        q = (a(231), a(293)),
        z = a(152);
      function G() {
        G = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          a = t.hasOwnProperty,
          n = "function" == typeof Symbol ? Symbol : {},
          r = n.iterator || "@@iterator",
          o = n.asyncIterator || "@@asyncIterator",
          l = n.toStringTag || "@@toStringTag";
        function i(e, t, a) {
          return (
            Object.defineProperty(e, t, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          i({}, "");
        } catch (T) {
          i = function (e, t, a) {
            return (e[t] = a);
          };
        }
        function c(e, t, a, n) {
          var r = t && t.prototype instanceof u ? t : u,
            o = Object.create(r.prototype),
            l = new x(n || []);
          return (
            (o._invoke = (function (e, t, a) {
              var n = "suspendedStart";
              return function (r, o) {
                if ("executing" === n)
                  throw new Error("Generator is already running");
                if ("completed" === n) {
                  if ("throw" === r) throw o;
                  return C();
                }
                for (a.method = r, a.arg = o; ; ) {
                  var l = a.delegate;
                  if (l) {
                    var i = b(l, a);
                    if (i) {
                      if (i === m) continue;
                      return i;
                    }
                  }
                  if ("next" === a.method) a.sent = a._sent = a.arg;
                  else if ("throw" === a.method) {
                    if ("suspendedStart" === n)
                      throw ((n = "completed"), a.arg);
                    a.dispatchException(a.arg);
                  } else "return" === a.method && a.abrupt("return", a.arg);
                  n = "executing";
                  var c = s(e, t, a);
                  if ("normal" === c.type) {
                    if (
                      ((n = a.done ? "completed" : "suspendedYield"),
                      c.arg === m)
                    )
                      continue;
                    return { value: c.arg, done: a.done };
                  }
                  "throw" === c.type &&
                    ((n = "completed"), (a.method = "throw"), (a.arg = c.arg));
                }
              };
            })(e, a, l)),
            o
          );
        }
        function s(e, t, a) {
          try {
            return { type: "normal", arg: e.call(t, a) };
          } catch (T) {
            return { type: "throw", arg: T };
          }
        }
        e.wrap = c;
        var m = {};
        function u() {}
        function d() {}
        function h() {}
        var p = {};
        i(p, r, function () {
          return this;
        });
        var f = Object.getPrototypeOf,
          g = f && f(f(k([])));
        g && g !== t && a.call(g, r) && (p = g);
        var y = (h.prototype = u.prototype = Object.create(p));
        function E(e) {
          ["next", "throw", "return"].forEach(function (t) {
            i(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function v(e, t) {
          var n;
          this._invoke = function (r, o) {
            function l() {
              return new t(function (n, l) {
                !(function n(r, o, l, i) {
                  var c = s(e[r], e, o);
                  if ("throw" !== c.type) {
                    var m = c.arg,
                      u = m.value;
                    return u && "object" == typeof u && a.call(u, "__await")
                      ? t.resolve(u.__await).then(
                          function (e) {
                            n("next", e, l, i);
                          },
                          function (e) {
                            n("throw", e, l, i);
                          }
                        )
                      : t.resolve(u).then(
                          function (e) {
                            (m.value = e), l(m);
                          },
                          function (e) {
                            return n("throw", e, l, i);
                          }
                        );
                  }
                  i(c.arg);
                })(r, o, n, l);
              });
            }
            return (n = n ? n.then(l, l) : l());
          };
        }
        function b(e, t) {
          var a = e.iterator[t.method];
          if (void 0 === a) {
            if (((t.delegate = null), "throw" === t.method)) {
              if (
                e.iterator.return &&
                ((t.method = "return"),
                (t.arg = void 0),
                b(e, t),
                "throw" === t.method)
              )
                return m;
              (t.method = "throw"),
                (t.arg = new TypeError(
                  "The iterator does not provide a 'throw' method"
                ));
            }
            return m;
          }
          var n = s(a, e.iterator, t.arg);
          if ("throw" === n.type)
            return (
              (t.method = "throw"), (t.arg = n.arg), (t.delegate = null), m
            );
          var r = n.arg;
          return r
            ? r.done
              ? ((t[e.resultName] = r.value),
                (t.next = e.nextLoc),
                "return" !== t.method &&
                  ((t.method = "next"), (t.arg = void 0)),
                (t.delegate = null),
                m)
              : r
            : ((t.method = "throw"),
              (t.arg = new TypeError("iterator result is not an object")),
              (t.delegate = null),
              m);
        }
        function w(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function N(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function x(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(w, this),
            this.reset(!0);
        }
        function k(e) {
          if (e) {
            var t = e[r];
            if (t) return t.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var n = -1,
                o = function t() {
                  for (; ++n < e.length; )
                    if (a.call(e, n)) return (t.value = e[n]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (o.next = o);
            }
          }
          return { next: C };
        }
        function C() {
          return { value: void 0, done: !0 };
        }
        return (
          (d.prototype = h),
          i(y, "constructor", h),
          i(h, "constructor", d),
          (d.displayName = i(h, l, "GeneratorFunction")),
          (e.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === d || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, h)
                : ((e.__proto__ = h), i(e, l, "GeneratorFunction")),
              (e.prototype = Object.create(y)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          E(v.prototype),
          i(v.prototype, o, function () {
            return this;
          }),
          (e.AsyncIterator = v),
          (e.async = function (t, a, n, r, o) {
            void 0 === o && (o = Promise);
            var l = new v(c(t, a, n, r), o);
            return e.isGeneratorFunction(a)
              ? l
              : l.next().then(function (e) {
                  return e.done ? e.value : l.next();
                });
          }),
          E(y),
          i(y, l, "Generator"),
          i(y, r, function () {
            return this;
          }),
          i(y, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (e) {
            var t = [];
            for (var a in e) t.push(a);
            return (
              t.reverse(),
              function a() {
                for (; t.length; ) {
                  var n = t.pop();
                  if (n in e) return (a.value = n), (a.done = !1), a;
                }
                return (a.done = !0), a;
              }
            );
          }),
          (e.values = k),
          (x.prototype = {
            constructor: x,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(N),
                !e)
              )
                for (var t in this)
                  "t" === t.charAt(0) &&
                    a.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var t = this;
              function n(a, n) {
                return (
                  (l.type = "throw"),
                  (l.arg = e),
                  (t.next = a),
                  n && ((t.method = "next"), (t.arg = void 0)),
                  !!n
                );
              }
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var o = this.tryEntries[r],
                  l = o.completion;
                if ("root" === o.tryLoc) return n("end");
                if (o.tryLoc <= this.prev) {
                  var i = a.call(o, "catchLoc"),
                    c = a.call(o, "finallyLoc");
                  if (i && c) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  } else if (i) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                  } else {
                    if (!c)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var r = this.tryEntries[n];
                if (
                  r.tryLoc <= this.prev &&
                  a.call(r, "finallyLoc") &&
                  this.prev < r.finallyLoc
                ) {
                  var o = r;
                  break;
                }
              }
              o &&
                ("break" === e || "continue" === e) &&
                o.tryLoc <= t &&
                t <= o.finallyLoc &&
                (o = null);
              var l = o ? o.completion : {};
              return (
                (l.type = e),
                (l.arg = t),
                o
                  ? ((this.method = "next"), (this.next = o.finallyLoc), m)
                  : this.complete(l)
              );
            },
            complete: function (e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === e.type && t && (this.next = t),
                m
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var a = this.tryEntries[t];
                if (a.finallyLoc === e)
                  return this.complete(a.completion, a.afterLoc), N(a), m;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var a = this.tryEntries[t];
                if (a.tryLoc === e) {
                  var n = a.completion;
                  if ("throw" === n.type) {
                    var r = n.arg;
                    N(a);
                  }
                  return r;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, t, a) {
              return (
                (this.delegate = { iterator: k(e), resultName: t, nextLoc: a }),
                "next" === this.method && (this.arg = void 0),
                m
              );
            },
          }),
          e
        );
      }
      var Y = function () {
          var e = r.a.useState(!1),
            t = Object(s.a)(e, 2),
            a = t[0],
            o = t[1],
            l = r.a.useState(!1),
            i = Object(s.a)(l, 2),
            c = i[0],
            m = i[1],
            u = r.a.useState(""),
            d = Object(s.a)(u, 2),
            h = d[0],
            p = d[1],
            g = r.a.useState(),
            y = Object(s.a)(g, 2),
            E = y[0],
            v = y[1],
            b = r.a.useState([]),
            w = Object(s.a)(b, 2),
            N = w[0],
            x = w[1],
            k = localStorage.getItem("userRole"),
            C = r.a.useState([]),
            T = Object(s.a)(C, 2),
            j = T[0],
            S = T[1],
            M = r.a.forwardRef(function (e, t) {
              return r.a.createElement(
                q.a,
                Object.assign({ elevation: 6, ref: t, variant: "filled" }, e)
              );
            });
          Object(n.useEffect)(
            function () {
              "admin" === k &&
                f.a
                  .get("/api/getAvailableChats", {
                    headers: {
                      "x-access-token": localStorage.getItem("token"),
                    },
                  })
                  .then(function (e) {
                    S(e.data);
                  }),
                localStorage.getItem("token") &&
                  a &&
                  "admin" !== k &&
                  f.a
                    .get("/api/getChat", {
                      headers: {
                        "x-access-token": localStorage.getItem("token"),
                      },
                    })
                    .then(function (e) {
                      x(e.data.chat), v(e.data._id);
                    }),
                a &&
                  E &&
                  I.emit("join", {
                    senderId: localStorage.getItem("userId"),
                    conversationId: E,
                  });
            },
            [a, E]
          );
          var P = (function () {
            var e = Object(W.a)(
              G().mark(function e(t) {
                return G().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        t.preventDefault(),
                          I.emit("chat", {
                            message: h,
                            senderId: localStorage.getItem("userId"),
                            conversationId: E,
                          }),
                          p("");
                      case 3:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
          Object(n.useEffect)(
            function () {
              I.on("chat", function (e) {
                x([].concat(Object(F.a)(N), [e]));
              });
            },
            [N]
          );
          return r.a.createElement(
            "div",
            { className: "  " },
            r.a.createElement(
              O.a,
              {
                anchorOrigin: { vertical: "top", horizontal: "center" },
                open: c,
                TransitionComponent: R.a,
              },
              r.a.createElement(
                M,
                {
                  severity: "error",
                  sx: { width: "50em" },
                  onClose: function () {
                    m(!1);
                  },
                },
                r.a.createElement(L.a, null, "Alert"),
                "Login is required to proceed!!"
              )
            ),
            r.a.createElement("img", {
              style: {
                width: "8em",
                cursor: "pointer",
                position: "fixed",
                bottom: "0",
                right: "0",
                zIndex: "1",
              },
              src: B.a,
              onClick: function () {
                localStorage.getItem("token") ? o(!0) : m(!0);
              },
              alt: "",
            }),
            r.a.createElement(
              A.a,
              {
                keepMounted: !0,
                open: a,
                "aria-labelledby": "keep-mounted-modal-title",
                "aria-describedby": "keep-mounted-modal-description",
              },
              r.a.createElement(
                "div",
                { className: "container  py-5 px-4" },
                r.a.createElement(
                  "div",
                  {
                    className:
                      "row rounded-lg overflow-hidden shadow justify-content-center",
                  },
                  "admin" === k &&
                    r.a.createElement(
                      "div",
                      { className: "col-5 px-0" },
                      r.a.createElement(
                        "div",
                        { className: "bg-white" },
                        r.a.createElement(
                          "div",
                          { className: "bg-dark px-4 py-2 bg-light" },
                          r.a.createElement(
                            "p",
                            {
                              style: { color: "white" },
                              className: "h5 mb-0 py-1",
                            },
                            "Recent"
                          )
                        ),
                        r.a.createElement(
                          "div",
                          { className: "messages-box" },
                          r.a.createElement(
                            "div",
                            { className: "list-group rounded-0" },
                            j.map(function (e) {
                              return r.a.createElement(
                                "div",
                                {
                                  style: { backgroundColor: "#F2F3F4 " },
                                  href: "#",
                                  key: e._id,
                                  className:
                                    "list-group-item list-group-item-action border text-black rounded-0",
                                  onClick: function () {
                                    x(e.chat), v(e._id);
                                  },
                                  cursor: "pointer",
                                },
                                r.a.createElement(
                                  "div",
                                  { className: "media" },
                                  r.a.createElement(
                                    "div",
                                    { className: "media-body ml-4" },
                                    r.a.createElement(
                                      "div",
                                      {
                                        className:
                                          "d-flex align-items-center justify-content-between mb-1",
                                      },
                                      r.a.createElement(
                                        "h6",
                                        { className: "mb-0" },
                                        ""
                                          .concat(e.client_id.fName, " ")
                                          .concat(e.client_id.lName)
                                      ),
                                      r.a.createElement(
                                        "small",
                                        {
                                          className: "small font-weight-bold ",
                                        },
                                        D()(
                                          e.chat[e.chat.length - 1].date
                                        ).calendar()
                                      )
                                    ),
                                    r.a.createElement(
                                      "p",
                                      {
                                        className:
                                          "font-italic mb-0 text-small",
                                      },
                                      e.chat[e.chat.length - 1].message
                                    )
                                  )
                                )
                              );
                            })
                          )
                        )
                      )
                    ),
                  r.a.createElement(
                    "div",
                    { className: "col-5 px-0" },
                    r.a.createElement(
                      "div",
                      { className: "bg-white" },
                      r.a.createElement(
                        "div",
                        { className: "bg-dark px-4 py-2" },
                        r.a.createElement(
                          "p",
                          {
                            style: { color: "white" },
                            className: "h5 mb-0 py-1",
                          },
                          "Chat Box",
                          r.a.createElement("i", {
                            id: "close",
                            className: "fas fa-times-circle  pt-1 ",
                            onClick: function () {
                              return o(!1);
                            },
                          })
                        )
                      ),
                      r.a.createElement(
                        "div",
                        { className: "px-0 py-2 chat-box bg-white" },
                        r.a.createElement(
                          z.a,
                          null,
                          N.map(function (e, t) {
                            return e.senderId === localStorage.getItem("userId")
                              ? r.a.createElement(
                                  "div",
                                  {
                                    key: t,
                                    className: "media w-50 ml-auto mr-3 mb-3",
                                  },
                                  r.a.createElement(
                                    "div",
                                    { className: "media-body" },
                                    r.a.createElement(
                                      "div",
                                      {
                                        style: { backgroundColor: "#2a52be" },
                                        className: " rounded py-2 px-3 mb-2",
                                      },
                                      r.a.createElement(
                                        "p",
                                        {
                                          className:
                                            "text-small mb-0 text-white",
                                        },
                                        e.message
                                      )
                                    ),
                                    r.a.createElement(
                                      "p",
                                      { className: "small text-muted" },
                                      D()(e.date).calendar()
                                    )
                                  )
                                )
                              : r.a.createElement(
                                  "div",
                                  { className: "media-body ml-3" },
                                  r.a.createElement(
                                    "div",
                                    {
                                      style: {
                                        backgroundColor: "#ECF0F1",
                                        maxWidth: "50%",
                                      },
                                      className: "rounded py-2 px-3 mb-2",
                                    },
                                    r.a.createElement(
                                      "p",
                                      {
                                        style: { color: "#000" },
                                        className: "text-small mb-0  ",
                                      },
                                      e.message
                                    )
                                  ),
                                  r.a.createElement(
                                    "p",
                                    { className: "small text-muted mb-2" },
                                    D()(e.date).calendar()
                                  )
                                );
                          })
                        )
                      ),
                      r.a.createElement(
                        "form",
                        { onSubmit: P, className: "bg-light" },
                        r.a.createElement(
                          "div",
                          { className: "input-group" },
                          r.a.createElement("input", {
                            type: "text",
                            placeholder: "Type a message",
                            value: h,
                            onChange: function (e) {
                              p(e.target.value);
                            },
                            "aria-describedby": "button-addon2",
                            className:
                              "form-control rounded-0 border-0 py-4 bg-light",
                          }),
                          r.a.createElement(
                            "div",
                            { className: "input-group-append" },
                            r.a.createElement(
                              "button",
                              {
                                id: "button-addon2",
                                type: "submit",
                                className: "btn btn-link",
                              },
                              " ",
                              r.a.createElement("i", {
                                className: "fa fa-paper-plane",
                              })
                            )
                          )
                        )
                      )
                    )
                  )
                )
              )
            )
          );
        },
        U = a(290),
        H = ["KIA", "Honda", "Toyota", "Suzuki", "MG", "Hyundai"],
        V = ["Automatic", "Manual"],
        Z = ["Petrol", "Diesel"],
        X = ["Local", "Imported"],
        J = [
          "Islamabad",
          "Karachi",
          "Lahore",
          "Multan",
          "Peshawar",
          "Kohat",
          "Sialkot",
        ],
        K = function () {
          var e = Object(c.g)(),
            t = n.useState(H[0]),
            a = Object(s.a)(t, 2),
            r = a[0],
            o = a[1],
            l = n.useState(V[0]),
            i = Object(s.a)(l, 2),
            m = i[0],
            u = i[1],
            d = n.useState(X[0]),
            p = Object(s.a)(d, 2),
            g = p[0],
            y = p[1],
            E = n.useState(""),
            v = Object(s.a)(E, 2),
            x = v[0],
            k = v[1],
            C = n.useState(J[0]),
            T = Object(s.a)(C, 2),
            j = T[0],
            S = T[1],
            F = n.useState(""),
            W = Object(s.a)(F, 2),
            A = W[0],
            M = W[1],
            B = n.useState(""),
            I = Object(s.a)(B, 2),
            P = I[0],
            D = I[1],
            z = n.useState(""),
            G = Object(s.a)(z, 2),
            Y = G[0],
            K = G[1],
            _ = n.useState(""),
            Q = Object(s.a)(_, 2),
            $ = Q[0],
            ee = Q[1],
            te = n.useState(Z[0]),
            ae = Object(s.a)(te, 2),
            ne = ae[0],
            re = ae[1],
            oe = n.useState(new Date().getFullYear()),
            le = Object(s.a)(oe, 2),
            ie = le[0],
            ce = le[1],
            se = n.useState(2e3),
            me = Object(s.a)(se, 2),
            ue = me[0],
            de = me[1],
            he = n.useState(),
            pe = Object(s.a)(he, 2),
            fe = pe[0],
            ge = pe[1],
            ye = n.useState(""),
            Ee = Object(s.a)(ye, 2),
            ve = Ee[0],
            be = Ee[1],
            we = n.useState(""),
            Ne = Object(s.a)(we, 2),
            xe = Ne[0],
            ke = Ne[1],
            Ce = n.useState(""),
            Te = Object(s.a)(Ce, 2),
            je = Te[0],
            Se = Te[1],
            Fe = n.useState(""),
            We = Object(s.a)(Fe, 2),
            Oe = We[0],
            Re = We[1],
            Le = n.useState(""),
            Ae = Object(s.a)(Le, 2),
            Me = Ae[0],
            Be = Ae[1],
            Ie = n.useState(""),
            Pe = Object(s.a)(Ie, 2),
            De = Pe[0],
            qe = Pe[1],
            ze = n.useState(""),
            Ge = Object(s.a)(ze, 2),
            Ye = Ge[0],
            Ue = Ge[1],
            He = n.useState(""),
            Ve = Object(s.a)(He, 2),
            Ze = Ve[0],
            Xe = Ve[1],
            Je = n.useState(""),
            Ke = Object(s.a)(Je, 2),
            _e = Ke[0],
            Qe = Ke[1],
            $e = n.useState(!1),
            et = Object(s.a)($e, 2),
            tt = et[0],
            at = et[1],
            nt = n.useState(!1),
            rt = Object(s.a)(nt, 2),
            ot = rt[0],
            lt = rt[1],
            it = n.useState(!1),
            ct = Object(s.a)(it, 2),
            st = ct[0],
            mt = ct[1],
            ut = n.useState(!1),
            dt = Object(s.a)(ut, 2),
            ht = dt[0],
            pt = dt[1],
            ft = n.forwardRef(function (e, t) {
              return n.createElement(
                q.a,
                Object.assign({ elevation: 6, ref: t, variant: "filled" }, e)
              );
            });
          return n.createElement(
            "div",
            null,
            n.createElement(
              "h1",
              {
                className: " mt-5 text-decoration-underline",
                style: {
                  color: "black",
                  fontFamily: "Times New Roman",
                  fontWeight: "bold",
                },
              },
              "Advanced Search"
            ),
            n.createElement(
              "h5",
              { className: "mt-5", style: { fontFamily: "Times New Roman" } },
              "Please Complete and fill this form to search your desired Car. Thank You!"
            ),
            n.createElement(
              "form",
              {
                onSubmit: function (t) {
                  t.preventDefault(),
                    parseInt(Me) < parseInt(Oe)
                      ? at(!0)
                      : _e < Ze
                      ? lt(!0)
                      : Ye < De
                      ? mt(!0)
                      : ie < ue
                      ? pt(!0)
                      : f()({
                          method: "post",
                          url: "/api/advanced_search",
                          data: {
                            minModelYear: ue,
                            maxModelYear: ie,
                            minMileage: Ze,
                            maxMileage: _e,
                            registeredYear: fe,
                            version: je,
                            color: xe,
                            model: ve,
                            minEngine: Oe,
                            maxEngine: Me,
                            minPrice: De,
                            maxPrice: Ye,
                            inputValueCity: P,
                            inputValueTransmission: Y,
                            inputValueManufacturer: A,
                            inputValueAssembly: x,
                          },
                          headers: {
                            "x-access-token": localStorage.getItem("token"),
                          },
                        }).then(function (t) {
                          var a = t.data;
                          e.push("/products", { state: { cars: a } });
                        });
                },
              },
              n.createElement(
                b.a,
                { className: "mt-5", container: !0, spacing: 2 },
                n.createElement(
                  b.a,
                  { item: !0, xs: 4 },
                  n.createElement(U.a, {
                    value: r,
                    onChange: function (e, t) {
                      o(t);
                    },
                    inputValue: A,
                    onInputChange: function (e, t) {
                      M(t);
                    },
                    id: "controllable-states-demo",
                    options: H,
                    sx: { width: 300, maxWidth: "100%" },
                    renderInput: function (e) {
                      return n.createElement(
                        N.a,
                        Object.assign({ fullWidth: !0 }, e, {
                          label: "Manufacturer Company",
                        })
                      );
                    },
                  }),
                  n.createElement(
                    w.a,
                    { className: "mt-5", sx: { width: 300, maxWidth: "100%" } },
                    n.createElement(N.a, {
                      value: ue,
                      onChange: function (e) {
                        de(e.target.value);
                      },
                      fullWidth: !0,
                      label: "Minimum Model Year",
                      type: "number",
                    })
                  ),
                  n.createElement(
                    w.a,
                    { className: "mt-5", sx: { width: 300, maxWidth: "100%" } },
                    n.createElement(N.a, {
                      value: Oe,
                      onChange: function (e) {
                        Re(e.target.value);
                      },
                      fullWidth: !0,
                      label: "Minimum Engine Power (cc)",
                      type: "number",
                    })
                  ),
                  n.createElement(
                    w.a,
                    { className: "mt-5", sx: { width: 300, maxWidth: "100%" } },
                    n.createElement(N.a, {
                      value: Ze,
                      onChange: function (e) {
                        Xe(e.target.value);
                      },
                      fullWidth: !0,
                      label: "Minimum Mileage (KM)",
                      type: "number",
                    })
                  ),
                  n.createElement(
                    w.a,
                    { className: "mt-5", sx: { width: 300, maxWidth: "100%" } },
                    n.createElement(N.a, {
                      value: De,
                      onChange: function (e) {
                        qe(e.target.value);
                      },
                      fullWidth: !0,
                      label: "Minimum Price",
                      type: "number",
                    })
                  ),
                  n.createElement(U.a, {
                    className: "mt-5",
                    value: m,
                    onChange: function (e, t) {
                      u(t);
                    },
                    inputValue: Y,
                    onInputChange: function (e, t) {
                      K(t);
                    },
                    id: "controllable-states-demo",
                    options: V,
                    sx: { width: 300, maxWidth: "100%" },
                    renderInput: function (e) {
                      return n.createElement(
                        N.a,
                        Object.assign({}, e, {
                          fullWidth: !0,
                          label: "Transmission",
                        })
                      );
                    },
                  })
                ),
                n.createElement(
                  b.a,
                  { item: !0, xs: 4 },
                  n.createElement(
                    w.a,
                    { sx: { width: 300, maxWidth: "100%" } },
                    n.createElement(N.a, {
                      value: ve,
                      onChange: function (e) {
                        be(e.target.value);
                      },
                      fullWidth: !0,
                      label: "Model Name",
                      type: "text",
                    })
                  ),
                  n.createElement(
                    w.a,
                    { className: "mt-5", sx: { width: 300, maxWidth: "100%" } },
                    n.createElement(N.a, {
                      value: ie,
                      onChange: function (e) {
                        ce(e.target.value);
                      },
                      fullWidth: !0,
                      label: "Maximum Model Year",
                      type: "number",
                    })
                  ),
                  n.createElement(
                    w.a,
                    { className: "mt-5", sx: { width: 300, maxWidth: "100%" } },
                    n.createElement(N.a, {
                      value: Me,
                      onChange: function (e) {
                        Be(e.target.value);
                      },
                      fullWidth: !0,
                      label: "Maximum Engine Power (cc)",
                      type: "number",
                    })
                  ),
                  n.createElement(
                    w.a,
                    { className: "mt-5", sx: { width: 300, maxWidth: "100%" } },
                    n.createElement(N.a, {
                      value: _e,
                      onChange: function (e) {
                        Qe(e.target.value);
                      },
                      fullWidth: !0,
                      label: "Maximum Mileage (KM)",
                      type: "number",
                    })
                  ),
                  n.createElement(
                    w.a,
                    { className: "mt-5", sx: { width: 300, maxWidth: "100%" } },
                    n.createElement(N.a, {
                      value: Ye,
                      onChange: function (e) {
                        Ue(e.target.value);
                      },
                      fullWidth: !0,
                      label: "Maximum Price",
                      type: "number",
                    })
                  ),
                  n.createElement(U.a, {
                    className: "mt-5",
                    value: j,
                    onChange: function (e, t) {
                      S(t);
                    },
                    inputValue: P,
                    onInputChange: function (e, t) {
                      D(t);
                    },
                    id: "controllable-states-demo",
                    options: J,
                    sx: { width: 300, maxWidth: "100%" },
                    renderInput: function (e) {
                      return n.createElement(
                        N.a,
                        Object.assign({ fullWidth: !0 }, e, { label: "City" })
                      );
                    },
                  })
                ),
                n.createElement(
                  b.a,
                  { item: !0, xs: 4 },
                  n.createElement(
                    w.a,
                    { sx: { width: 300, maxWidth: "100%" } },
                    n.createElement(N.a, {
                      value: je,
                      onChange: function (e) {
                        Se(e.target.value);
                      },
                      fullWidth: !0,
                      label: "Version",
                      type: "text",
                    })
                  ),
                  n.createElement(
                    w.a,
                    { className: "mt-5", sx: { width: 300, maxWidth: "100%" } },
                    n.createElement(N.a, {
                      value: fe,
                      onChange: function (e) {
                        ge(e.target.value);
                      },
                      fullWidth: !0,
                      label: "Registered Year",
                      type: "number",
                    })
                  ),
                  n.createElement(
                    w.a,
                    { className: "mt-5", sx: { width: 300, maxWidth: "100%" } },
                    n.createElement(N.a, {
                      value: xe,
                      onChange: function (e) {
                        ke(e.target.value);
                      },
                      fullWidth: !0,
                      label: "color",
                      type: "text",
                    })
                  ),
                  n.createElement(U.a, {
                    className: "mt-5",
                    value: g,
                    onChange: function (e, t) {
                      y(t);
                    },
                    inputValue: x,
                    onInputChange: function (e, t) {
                      k(t);
                    },
                    id: "controllable-states-demo",
                    options: X,
                    sx: { width: 300, maxWidth: "100%" },
                    renderInput: function (e) {
                      return n.createElement(
                        N.a,
                        Object.assign({ fullWidth: !0 }, e, {
                          label: "Assembly Type",
                        })
                      );
                    },
                  }),
                  n.createElement(U.a, {
                    className: "mt-5",
                    value: ne,
                    onChange: function (e, t) {
                      re(t);
                    },
                    inputValue: $,
                    onInputChange: function (e, t) {
                      ee(t);
                    },
                    id: "controllable-states-demo",
                    options: Z,
                    sx: { width: 300, maxWidth: "100%" },
                    renderInput: function (e) {
                      return n.createElement(
                        N.a,
                        Object.assign({ fullWidth: !0 }, e, {
                          label: "Engine Type",
                        })
                      );
                    },
                  })
                )
              ),
              n.createElement(
                h.a,
                {
                  className: "mt-4 mb-5",
                  variant: "contained",
                  color: "success",
                  size: "large",
                  type: "submit",
                },
                "Advanced Search"
              )
            ),
            n.createElement(
              O.a,
              {
                anchorOrigin: { vertical: "top", horizontal: "center" },
                open: tt,
                TransitionComponent: R.a,
              },
              n.createElement(
                ft,
                {
                  severity: "error",
                  sx: { width: "50em" },
                  onClose: function () {
                    at(!1);
                  },
                },
                n.createElement(L.a, null, "Error"),
                "Invalid Engine Values"
              )
            ),
            n.createElement(
              O.a,
              {
                anchorOrigin: { vertical: "top", horizontal: "center" },
                open: ot,
                TransitionComponent: R.a,
              },
              n.createElement(
                ft,
                {
                  severity: "error",
                  sx: { width: "50em" },
                  onClose: function () {
                    lt(!1);
                  },
                },
                n.createElement(L.a, null, "Error"),
                "Invalid Mileage Values"
              )
            ),
            n.createElement(
              O.a,
              {
                anchorOrigin: { vertical: "top", horizontal: "center" },
                open: st,
                TransitionComponent: R.a,
              },
              n.createElement(
                ft,
                {
                  severity: "error",
                  sx: { width: "50em" },
                  onClose: function () {
                    mt(!1);
                  },
                },
                n.createElement(L.a, null, "Error"),
                "Invalid Price Values"
              )
            ),
            n.createElement(
              O.a,
              {
                anchorOrigin: { vertical: "top", horizontal: "center" },
                open: ht,
                TransitionComponent: R.a,
              },
              n.createElement(
                ft,
                {
                  severity: "error",
                  sx: { width: "50em" },
                  onClose: function () {
                    pt(!1);
                  },
                },
                n.createElement(L.a, null, "Error"),
                "Invalid Model Year Values"
              )
            )
          );
        },
        _ = function (e) {
          var t = r.a.useState(!1),
            a = Object(s.a)(t, 2),
            n = a[0],
            o = a[1],
            l = Object(c.g)();
          return r.a.createElement(
            "div",
            { style: { marginTop: "3rem" } },
            r.a.createElement(
              "div",
              null,
              r.a.createElement(
                "figure",
                { className: "position-relative" },
                r.a.createElement(m.a, {
                  src: d.a,
                  className: "img-fluid position-relative",
                  style: { height: "54rem" },
                  duration: 0,
                  shiftDuration: 0,
                }),
                r.a.createElement(Y, null),
                r.a.createElement(
                  "div",
                  { className: "top-right" },
                  r.a.createElement(
                    "h1",
                    null,
                    "Grow Your Business with HM Motors"
                  ),
                  r.a.createElement(
                    h.a,
                    {
                      variant: "contained",
                      color: "success",
                      size: "large",
                      onClick: function (t) {
                        e.history.push("/products");
                      },
                    },
                    "Get Started"
                  )
                )
              )
            ),
            r.a.createElement(
              "div",
              { className: "" },
              r.a.createElement("br", null),
              r.a.createElement(
                "div",
                {
                  className: "",
                  style: { backgroundColor: "#F7F9F9 ", height: "17rem" },
                },
                r.a.createElement(
                  "h1",
                  {
                    className: " container text-decoration-underline ",
                    style: {
                      color: "black",
                      fontFamily: "Times New Roman",
                      fontWeight: "bold",
                    },
                  },
                  "Search"
                ),
                r.a.createElement(
                  "div",
                  { className: " container d-flex justify-content-center" },
                  r.a.createElement(x, null)
                ),
                r.a.createElement(
                  "div",
                  { style: { display: "flex", justifyContent: "center" } },
                  r.a.createElement(
                    "h5",
                    {
                      className: " text-decoration-underline",
                      style: {
                        color: "#228B22",
                        cursor: "pointer",
                        fontFamily: "Times New Roman",
                      },
                      onClick: function () {
                        o(!n);
                      },
                    },
                    !0 === n ? "Hide Advanced Search" : " Advanced Search"
                  )
                )
              ),
              n &&
                r.a.createElement(
                  "div",
                  { className: "mt-5", style: { backgroundColor: "#F7F9F9" } },
                  r.a.createElement(
                    "div",
                    { className: "container  " },
                    r.a.createElement(K, null)
                  )
                ),
              r.a.createElement(
                "div",
                { className: "mt-5", style: { backgroundColor: "#F7F9F9" } },
                r.a.createElement(
                  "div",
                  { className: "container" },
                  r.a.createElement(
                    "h1",
                    {
                      className: " mt-5 text-decoration-underline",
                      style: {
                        color: "black",
                        fontFamily: "Times New Roman",
                        fontWeight: "bold",
                      },
                    },
                    "Featured Cars"
                  ),
                  r.a.createElement(g, null)
                )
              ),
              r.a.createElement(
                "div",
                { className: "mt-5", style: { backgroundColor: "#F7F9F9" } },
                r.a.createElement(
                  "div",
                  { className: "container" },
                  r.a.createElement(
                    "h1",
                    {
                      className: " mt-5 text-decoration-underline",
                      style: {
                        color: "black",
                        fontFamily: "Times New Roman",
                        fontWeight: "bold",
                      },
                    },
                    " ",
                    "Our Services"
                  ),
                  r.a.createElement(
                    b.a,
                    {
                      style: { marginTop: "2rem" },
                      className: " mb-5",
                      container: !0,
                      spacing: 2,
                    },
                    r.a.createElement(
                      b.a,
                      { item: !0, xs: 4 },
                      r.a.createElement(
                        k.a,
                        {
                          sx: { maxWidth: 385 },
                          onClick: function () {
                            l.push("/service");
                          },
                        },
                        r.a.createElement(
                          C.a,
                          null,
                          r.a.createElement(T.a, {
                            className: "img-fluid",
                            component: "img",
                            height: "250",
                            image:
                              "https://livedemo00.template-help.com/wt_59051/images/services/service-01-370x250.jpg",
                            alt: "green iguana",
                          }),
                          r.a.createElement(
                            j.a,
                            {
                              style: {
                                backgroundColor: "#228B22",
                                opacity: "0.9",
                              },
                              className: "d-flex justify-content-center",
                            },
                            r.a.createElement(
                              "h4",
                              {
                                style: {
                                  color: "white",
                                  fontFamily: "Times New Roman",
                                },
                              },
                              "History Check"
                            )
                          )
                        )
                      ),
                      r.a.createElement(
                        k.a,
                        {
                          className: "mt-5",
                          sx: { maxWidth: 385 },
                          onClick: function () {
                            l.push("/service-car-check");
                          },
                        },
                        r.a.createElement(
                          C.a,
                          null,
                          r.a.createElement(T.a, {
                            className: "img-fluid",
                            component: "img",
                            height: "250",
                            image:
                              "https://livedemo00.template-help.com/wt_59051/images/services/service-04-370x250.jpg",
                            alt: "green iguana",
                          }),
                          r.a.createElement(
                            j.a,
                            {
                              style: {
                                backgroundColor: "#228B22",
                                opacity: "0.9",
                              },
                              className: "d-flex justify-content-center",
                            },
                            r.a.createElement(
                              "h4",
                              {
                                style: {
                                  color: "white",
                                  fontFamily: "Times New Roman",
                                },
                              },
                              "Car Check Programs"
                            )
                          )
                        )
                      )
                    ),
                    r.a.createElement(
                      b.a,
                      { item: !0, xs: 4 },
                      r.a.createElement(
                        k.a,
                        {
                          sx: { maxWidth: 385 },
                          onClick: function () {
                            l.push("/service-buyer-guide");
                          },
                        },
                        r.a.createElement(
                          C.a,
                          null,
                          r.a.createElement(T.a, {
                            className: "img-fluid",
                            component: "img",
                            height: "250",
                            image:
                              "https://livedemo00.template-help.com/wt_59051/images/services/service-02-370x250.jpg",
                            alt: "green iguana",
                          }),
                          r.a.createElement(
                            j.a,
                            {
                              style: {
                                backgroundColor: "#228B22",
                                opacity: "0.9",
                              },
                              className: "d-flex justify-content-center",
                            },
                            r.a.createElement(
                              "h4",
                              {
                                style: {
                                  color: "white",
                                  fontFamily: "Times New Roman",
                                },
                              },
                              "Buyer's Guide"
                            )
                          )
                        )
                      ),
                      r.a.createElement(
                        k.a,
                        {
                          className: "mt-5",
                          sx: { maxWidth: 385 },
                          onClick: function () {
                            l.push("/service-warrenty-programe");
                          },
                        },
                        r.a.createElement(
                          C.a,
                          null,
                          r.a.createElement(T.a, {
                            className: "img-fluid",
                            component: "img",
                            height: "250",
                            image:
                              "https://livedemo00.template-help.com/wt_59051/images/services/service-05-370x250.jpg",
                            alt: "green iguana",
                          }),
                          r.a.createElement(
                            j.a,
                            {
                              style: {
                                backgroundColor: "#228B22",
                                opacity: "0.9",
                              },
                              className: "d-flex justify-content-center",
                            },
                            r.a.createElement(
                              "h4",
                              {
                                style: {
                                  color: "white",
                                  fontFamily: "Times New Roman",
                                },
                              },
                              "Warrenty Programs"
                            )
                          )
                        )
                      )
                    ),
                    r.a.createElement(
                      b.a,
                      { item: !0, xs: 4 },
                      r.a.createElement(
                        k.a,
                        {
                          sx: { maxWidth: 385 },
                          onClick: function () {
                            l.push("/service-car-insurance");
                          },
                        },
                        r.a.createElement(
                          C.a,
                          null,
                          r.a.createElement(T.a, {
                            className: "img-fluid",
                            component: "img",
                            height: "250",
                            image:
                              "https://livedemo00.template-help.com/wt_59051/images/services/service-03-370x250.jpg",
                            alt: "green iguana",
                          }),
                          r.a.createElement(
                            j.a,
                            {
                              style: {
                                backgroundColor: "#228B22",
                                opacity: "0.9",
                              },
                              className: "d-flex justify-content-center",
                            },
                            r.a.createElement(
                              "h4",
                              {
                                style: {
                                  color: "white",
                                  fontFamily: "Times New Roman",
                                },
                              },
                              "Car Insurance"
                            )
                          )
                        )
                      ),
                      r.a.createElement(
                        k.a,
                        {
                          className: "mt-5",
                          sx: { maxWidth: 385 },
                          onClick: function () {
                            l.push("/service-customer-support");
                          },
                        },
                        r.a.createElement(
                          C.a,
                          null,
                          r.a.createElement(T.a, {
                            className: "img-fluid",
                            component: "img",
                            height: "250",
                            image:
                              "https://livedemo00.template-help.com/wt_59051/images/services/service-06-370x250.jpg",
                            alt: "green iguana",
                          }),
                          r.a.createElement(
                            j.a,
                            {
                              style: {
                                backgroundColor: "#228B22",
                                opacity: "0.9",
                              },
                              className: "d-flex justify-content-center",
                            },
                            r.a.createElement(
                              "h4",
                              {
                                style: {
                                  color: "white",
                                  fontFamily: "Times New Roman",
                                },
                              },
                              "Customer Support"
                            )
                          )
                        )
                      )
                    )
                  )
                )
              ),
              r.a.createElement(
                "div",
                { className: "mt-5", style: { backgroundColor: "#F7F9F9" } },
                r.a.createElement(
                  "div",
                  { className: "container" },
                  r.a.createElement(
                    "h1",
                    {
                      className: " mt-5 text-decoration-underline",
                      style: {
                        color: "black",
                        fontFamily: "Times New Roman",
                        fontWeight: "bold",
                      },
                    },
                    "Professional Team"
                  ),
                  r.a.createElement(
                    b.a,
                    { style: { marginTop: "2rem" }, container: !0, spacing: 2 },
                    r.a.createElement(
                      b.a,
                      { item: !0, xs: 3, className: "" },
                      r.a.createElement(
                        k.a,
                        {
                          sx: { maxWidth: 320 },
                          onClick: function (e) {
                            l.push("/owner-profile");
                          },
                        },
                        r.a.createElement(
                          C.a,
                          null,
                          r.a.createElement(T.a, {
                            className: "img-fluid",
                            component: "img",
                            height: "270",
                            image:
                              "https://livedemo00.template-help.com/wt_59051/images/users/user-alan-smith-270x270.jpg",
                            alt: "green iguana",
                          }),
                          r.a.createElement(
                            j.a,
                            null,
                            r.a.createElement(
                              S.a,
                              {
                                style: {
                                  color: "#228B22",
                                  fontFamily: "Times New Roman",
                                },
                                variant: "h5",
                                component: "div",
                              },
                              "Alan Smith"
                            ),
                            r.a.createElement(
                              S.a,
                              {
                                gutterBottom: !0,
                                variant: "h6",
                                style: {
                                  color: "#D0D3D4 ",
                                  fontFamily: "Times New Roman",
                                },
                                component: "div",
                              },
                              "Owner/ Partner"
                            ),
                            r.a.createElement(
                              S.a,
                              {
                                variant: "body1",
                                color: "text.secondary",
                                style: { fontFamily: "Times New Roman" },
                              },
                              "Alan\u2019s rich experience includes car sales, rental car management, and service."
                            )
                          )
                        )
                      )
                    ),
                    r.a.createElement(
                      b.a,
                      { item: !0, xs: 3, className: "" },
                      r.a.createElement(
                        k.a,
                        {
                          sx: { maxWidth: 320 },
                          onClick: function (e) {
                            l.push("/sales-manager-profile");
                          },
                        },
                        r.a.createElement(
                          C.a,
                          null,
                          r.a.createElement(T.a, {
                            component: "img",
                            className: "img-fluid",
                            height: "270",
                            image:
                              "https://livedemo00.template-help.com/wt_59051/images/users/user-laura-stegner-270x270.jpg",
                            alt: "green iguana",
                          }),
                          r.a.createElement(
                            j.a,
                            null,
                            r.a.createElement(
                              S.a,
                              {
                                variant: "h5",
                                component: "div",
                                style: {
                                  color: "#228B22",
                                  fontFamily: "Times New Roman",
                                },
                              },
                              "Laura Stegner"
                            ),
                            r.a.createElement(
                              S.a,
                              {
                                gutterBottom: !0,
                                variant: "h6",
                                style: {
                                  color: "#D0D3D4 ",
                                  fontFamily: "Times New Roman",
                                },
                                component: "div",
                              },
                              "Sales Manager"
                            ),
                            r.a.createElement(
                              S.a,
                              {
                                variant: "body1",
                                color: "text.secondary",
                                style: { fontFamily: "Times New Roman" },
                              },
                              "Alan\u2019s rich experience includes car sales, rental car management, and service."
                            )
                          )
                        )
                      )
                    ),
                    r.a.createElement(
                      b.a,
                      { item: !0, xs: 3, className: "" },
                      r.a.createElement(
                        k.a,
                        {
                          sx: { maxWidth: 320 },
                          onClick: function (e) {
                            l.push("/technician-profile");
                          },
                        },
                        r.a.createElement(
                          C.a,
                          null,
                          r.a.createElement(T.a, {
                            component: "img",
                            className: "img-fluid",
                            height: "270",
                            image:
                              "https://livedemo00.template-help.com/wt_59051/images/users/user-john-franklin-270x270.jpg",
                            alt: "green iguana",
                          }),
                          r.a.createElement(
                            j.a,
                            null,
                            r.a.createElement(
                              S.a,
                              {
                                variant: "h5",
                                component: "div",
                                style: {
                                  color: "#228B22",
                                  fontFamily: "Times New Roman",
                                },
                              },
                              "John Franklin"
                            ),
                            r.a.createElement(
                              S.a,
                              {
                                gutterBottom: !0,
                                variant: "h6",
                                style: {
                                  color: "#D0D3D4 ",
                                  fontFamily: "Times New Roman",
                                },
                                component: "div",
                              },
                              "Certified Technician"
                            ),
                            r.a.createElement(
                              S.a,
                              {
                                variant: "body1",
                                color: "text.secondary",
                                style: { fontFamily: "Times New Roman" },
                              },
                              "Alan\u2019s rich experience includes car sales, rental car management, and service."
                            )
                          )
                        )
                      )
                    ),
                    r.a.createElement(
                      b.a,
                      { item: !0, xs: 3, className: "" },
                      r.a.createElement(
                        k.a,
                        {
                          sx: { maxWidth: 320 },
                          onClick: function (e) {
                            l.push("/advisor-profile");
                          },
                        },
                        r.a.createElement(
                          C.a,
                          null,
                          r.a.createElement(T.a, {
                            component: "img",
                            className: "img-fluid",
                            height: "270",
                            image:
                              "https://livedemo00.template-help.com/wt_59051/images/users/user-martha-healy-270x270.jpg",
                            alt: "green iguana",
                          }),
                          r.a.createElement(
                            j.a,
                            null,
                            r.a.createElement(
                              S.a,
                              {
                                variant: "h5",
                                component: "div",
                                style: {
                                  color: "#228B22",
                                  fontFamily: "Times New Roman",
                                },
                              },
                              "Martha Healy"
                            ),
                            r.a.createElement(
                              S.a,
                              {
                                gutterBottom: !0,
                                variant: "h6",
                                style: {
                                  color: "#D0D3D4 ",
                                  fontFamily: "Times New Roman",
                                },
                                component: "div",
                              },
                              "Service Advisor"
                            ),
                            r.a.createElement(
                              S.a,
                              {
                                variant: "body1",
                                color: "text.secondary",
                                style: { fontFamily: "Times New Roman" },
                              },
                              "Alan\u2019s rich experience includes car sales, rental car management, and service."
                            )
                          )
                        )
                      )
                    )
                  )
                )
              )
            ),
            r.a.createElement(v, null)
          );
        },
        Q = function (e) {
          function t(e) {
            (e.target.style.background = "#228B22"),
              (e.target.style.color = "white"),
              (e.target.style.height = "2em");
          }
          function a(e) {
            (e.target.style.background = "white"),
              (e.target.style.color = "black");
          }
          return r.a.createElement(
            "div",
            { className: "mb-5", style: { marginTop: "6rem" } },
            r.a.createElement(
              "div",
              { className: "container" },
              r.a.createElement(
                "h1",
                {
                  style: {
                    fontSize: "50px",
                    fontFamily: "Times New Roman",
                    fontWeight: "bold",
                  },
                },
                "Our Services"
              ),
              r.a.createElement("hr", null),
              r.a.createElement(
                b.a,
                { container: !0, spacing: 2 },
                r.a.createElement(
                  b.a,
                  { item: !0, xs: 3 },
                  r.a.createElement(
                    "h3",
                    {
                      style: {
                        color: "white",
                        backgroundColor: "#228B22",
                        height: "2em",
                        paddingTop: "9px",
                        cursor: "pointer",
                        fontFamily: "Times New Roman",
                        paddingLeft: "15px",
                      },
                      onClick: function (t) {
                        t.preventDefault(), e.history.push("/service");
                      },
                    },
                    "History Check"
                  ),
                  r.a.createElement(
                    "h3",
                    {
                      style: {
                        paddingLeft: "15px",
                        paddingTop: "9px",
                        cursor: "pointer",
                        fontFamily: "Times New Roman",
                      },
                      onMouseEnter: t,
                      onMouseLeave: a,
                      onClick: function (t) {
                        t.preventDefault(),
                          e.history.push("/service-buyer-guide");
                      },
                    },
                    "Buyer's Guide"
                  ),
                  r.a.createElement(
                    "h3",
                    {
                      style: {
                        paddingLeft: "15px",
                        paddingTop: "9px",
                        cursor: "pointer",
                        fontFamily: "Times New Roman",
                      },
                      onMouseEnter: t,
                      onMouseLeave: a,
                      onClick: function (t) {
                        t.preventDefault(),
                          e.history.push("/service-car-check");
                      },
                    },
                    "Car Check"
                  ),
                  r.a.createElement(
                    "h3",
                    {
                      style: {
                        paddingLeft: "15px",
                        paddingTop: "9px",
                        cursor: "pointer",
                        fontFamily: "Times New Roman",
                      },
                      onClick: function (t) {
                        t.preventDefault(),
                          e.history.push("/service-car-insurance");
                      },
                      onMouseEnter: t,
                      onMouseLeave: a,
                    },
                    "Car Insurance"
                  ),
                  r.a.createElement(
                    "h3",
                    {
                      style: {
                        paddingLeft: "15px",
                        paddingTop: "9px",
                        cursor: "pointer",
                        fontFamily: "Times New Roman",
                      },
                      onClick: function (t) {
                        t.preventDefault(),
                          e.history.push("/service-customer-support");
                      },
                      onMouseEnter: t,
                      onMouseLeave: a,
                    },
                    "Customer Support"
                  ),
                  r.a.createElement(
                    "h3",
                    {
                      style: {
                        paddingLeft: "15px",
                        paddingTop: "9px",
                        cursor: "pointer",
                        fontFamily: "Times New Roman",
                      },
                      onClick: function (t) {
                        t.preventDefault(),
                          e.history.push("/service-warrenty-programe");
                      },
                      onMouseEnter: t,
                      onMouseLeave: a,
                    },
                    "Warrenty Programs"
                  )
                ),
                r.a.createElement(
                  b.a,
                  { item: !0, xs: 9 },
                  r.a.createElement(
                    "div",
                    { className: "container" },
                    r.a.createElement(
                      "h2",
                      {
                        style: {
                          fontFamily: "Times New Roman",
                          fontWeight: "bold",
                        },
                      },
                      "Our Advantages"
                    ),
                    r.a.createElement(
                      b.a,
                      { container: !0, spacing: 2 },
                      r.a.createElement(
                        b.a,
                        { item: !0, xs: 6 },
                        r.a.createElement(
                          "h1",
                          { className: "mt-3", style: { color: "#228B22 " } },
                          r.a.createElement("strong", null, ".01")
                        ),
                        r.a.createElement(
                          "h3",
                          {
                            style: { fontFamily: "Times New Roman" },
                            className: "mt-3",
                          },
                          "Actual Information"
                        ),
                        r.a.createElement(
                          "h5",
                          {
                            className: "mt-3",
                            style: { fontFamily: "Times New Roman" },
                          },
                          "Using both open source and government databases, we can form a complete vehicle report filled with actual information."
                        ),
                        r.a.createElement(
                          "h1",
                          { className: "mt-5", style: { color: "#228B22 " } },
                          r.a.createElement("strong", null, ".03")
                        ),
                        r.a.createElement(
                          "h3",
                          {
                            className: "mt-3",
                            style: { fontFamily: "Times New Roman" },
                          },
                          "Affordable Price"
                        ),
                        r.a.createElement(
                          "h5",
                          {
                            className: "mt-3",
                            style: { fontFamily: "Times New Roman" },
                          },
                          "While many companies offer reports at high prices, our customers get a considerable discount on the facts about their car."
                        )
                      ),
                      r.a.createElement(
                        b.a,
                        { item: !0, xs: 6 },
                        r.a.createElement(
                          "h1",
                          { className: "mt-3", style: { color: "#228B22" } },
                          r.a.createElement("strong", null, ".02")
                        ),
                        r.a.createElement(
                          "h3",
                          {
                            className: "mt-3",
                            style: { fontFamily: "Times New Roman" },
                          },
                          "Reliability"
                        ),
                        r.a.createElement(
                          "h5",
                          {
                            className: "mt-3",
                            style: { fontFamily: "Times New Roman" },
                          },
                          "As we offer cars from checked manufacturers, we also supply them with reliable facts about each vehicle."
                        ),
                        r.a.createElement(
                          "h1",
                          { className: "mt-5", style: { color: "#228B22" } },
                          r.a.createElement("strong", null, ".04")
                        ),
                        r.a.createElement(
                          "h3",
                          {
                            className: "mt-3",
                            style: { fontFamily: "Times New Roman" },
                          },
                          "Easy-to-read"
                        ),
                        r.a.createElement(
                          "h5",
                          {
                            className: "mt-3",
                            style: { fontFamily: "Times New Roman" },
                          },
                          "Our reports are formed in a single document so that you could get all the necessary information at once using our services."
                        )
                      )
                    ),
                    r.a.createElement(
                      h.a,
                      {
                        className: "mt-3",
                        variant: "contained",
                        color: "success",
                        onClick: function (t) {
                          t.preventDefault(), e.history.push("/products");
                        },
                        size: "large",
                      },
                      "Check available Cars"
                    ),
                    r.a.createElement("img", {
                      className: "mt-5 img-fluid",
                      src: "https://livedemo00.template-help.com/wt_59051/images/services-01-770x485.jpg",
                      alt: "",
                    }),
                    r.a.createElement(
                      "h5",
                      {
                        className: "mt-4",
                        style: { fontFamily: "Times New Roman" },
                      },
                      "At AutoTraider, you can easily order any type of vehicle report to find out more about the car you are going to buy. Regardless of the vehicle model and classification, our experts will provide you with a highly professional report on your vehicle\u2019s history. It includes the unique AutoTraider score to help you assess your vehicle\u2019s durability including various insights necessary for a drive."
                    ),
                    r.a.createElement(
                      "h5",
                      {
                        className: "mt-1",
                        style: { fontFamily: "Times New Roman" },
                      },
                      " ",
                      "We also provide deep analysis of your car\u2019s public and government records, offering the ability to decide whether the car you selected is the one you would like to buy or not. We use the freshest data for our reports so you can be sure you will get actual information on every aspect of your car."
                    )
                  )
                )
              )
            )
          );
        },
        $ = a(68),
        ee = a.n($),
        te = a(299);
      function ae() {
        ae = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          a = t.hasOwnProperty,
          n = "function" == typeof Symbol ? Symbol : {},
          r = n.iterator || "@@iterator",
          o = n.asyncIterator || "@@asyncIterator",
          l = n.toStringTag || "@@toStringTag";
        function i(e, t, a) {
          return (
            Object.defineProperty(e, t, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          i({}, "");
        } catch (T) {
          i = function (e, t, a) {
            return (e[t] = a);
          };
        }
        function c(e, t, a, n) {
          var r = t && t.prototype instanceof u ? t : u,
            o = Object.create(r.prototype),
            l = new x(n || []);
          return (
            (o._invoke = (function (e, t, a) {
              var n = "suspendedStart";
              return function (r, o) {
                if ("executing" === n)
                  throw new Error("Generator is already running");
                if ("completed" === n) {
                  if ("throw" === r) throw o;
                  return C();
                }
                for (a.method = r, a.arg = o; ; ) {
                  var l = a.delegate;
                  if (l) {
                    var i = b(l, a);
                    if (i) {
                      if (i === m) continue;
                      return i;
                    }
                  }
                  if ("next" === a.method) a.sent = a._sent = a.arg;
                  else if ("throw" === a.method) {
                    if ("suspendedStart" === n)
                      throw ((n = "completed"), a.arg);
                    a.dispatchException(a.arg);
                  } else "return" === a.method && a.abrupt("return", a.arg);
                  n = "executing";
                  var c = s(e, t, a);
                  if ("normal" === c.type) {
                    if (
                      ((n = a.done ? "completed" : "suspendedYield"),
                      c.arg === m)
                    )
                      continue;
                    return { value: c.arg, done: a.done };
                  }
                  "throw" === c.type &&
                    ((n = "completed"), (a.method = "throw"), (a.arg = c.arg));
                }
              };
            })(e, a, l)),
            o
          );
        }
        function s(e, t, a) {
          try {
            return { type: "normal", arg: e.call(t, a) };
          } catch (T) {
            return { type: "throw", arg: T };
          }
        }
        e.wrap = c;
        var m = {};
        function u() {}
        function d() {}
        function h() {}
        var p = {};
        i(p, r, function () {
          return this;
        });
        var f = Object.getPrototypeOf,
          g = f && f(f(k([])));
        g && g !== t && a.call(g, r) && (p = g);
        var y = (h.prototype = u.prototype = Object.create(p));
        function E(e) {
          ["next", "throw", "return"].forEach(function (t) {
            i(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function v(e, t) {
          var n;
          this._invoke = function (r, o) {
            function l() {
              return new t(function (n, l) {
                !(function n(r, o, l, i) {
                  var c = s(e[r], e, o);
                  if ("throw" !== c.type) {
                    var m = c.arg,
                      u = m.value;
                    return u && "object" == typeof u && a.call(u, "__await")
                      ? t.resolve(u.__await).then(
                          function (e) {
                            n("next", e, l, i);
                          },
                          function (e) {
                            n("throw", e, l, i);
                          }
                        )
                      : t.resolve(u).then(
                          function (e) {
                            (m.value = e), l(m);
                          },
                          function (e) {
                            return n("throw", e, l, i);
                          }
                        );
                  }
                  i(c.arg);
                })(r, o, n, l);
              });
            }
            return (n = n ? n.then(l, l) : l());
          };
        }
        function b(e, t) {
          var a = e.iterator[t.method];
          if (void 0 === a) {
            if (((t.delegate = null), "throw" === t.method)) {
              if (
                e.iterator.return &&
                ((t.method = "return"),
                (t.arg = void 0),
                b(e, t),
                "throw" === t.method)
              )
                return m;
              (t.method = "throw"),
                (t.arg = new TypeError(
                  "The iterator does not provide a 'throw' method"
                ));
            }
            return m;
          }
          var n = s(a, e.iterator, t.arg);
          if ("throw" === n.type)
            return (
              (t.method = "throw"), (t.arg = n.arg), (t.delegate = null), m
            );
          var r = n.arg;
          return r
            ? r.done
              ? ((t[e.resultName] = r.value),
                (t.next = e.nextLoc),
                "return" !== t.method &&
                  ((t.method = "next"), (t.arg = void 0)),
                (t.delegate = null),
                m)
              : r
            : ((t.method = "throw"),
              (t.arg = new TypeError("iterator result is not an object")),
              (t.delegate = null),
              m);
        }
        function w(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function N(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function x(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(w, this),
            this.reset(!0);
        }
        function k(e) {
          if (e) {
            var t = e[r];
            if (t) return t.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var n = -1,
                o = function t() {
                  for (; ++n < e.length; )
                    if (a.call(e, n)) return (t.value = e[n]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (o.next = o);
            }
          }
          return { next: C };
        }
        function C() {
          return { value: void 0, done: !0 };
        }
        return (
          (d.prototype = h),
          i(y, "constructor", h),
          i(h, "constructor", d),
          (d.displayName = i(h, l, "GeneratorFunction")),
          (e.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === d || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, h)
                : ((e.__proto__ = h), i(e, l, "GeneratorFunction")),
              (e.prototype = Object.create(y)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          E(v.prototype),
          i(v.prototype, o, function () {
            return this;
          }),
          (e.AsyncIterator = v),
          (e.async = function (t, a, n, r, o) {
            void 0 === o && (o = Promise);
            var l = new v(c(t, a, n, r), o);
            return e.isGeneratorFunction(a)
              ? l
              : l.next().then(function (e) {
                  return e.done ? e.value : l.next();
                });
          }),
          E(y),
          i(y, l, "Generator"),
          i(y, r, function () {
            return this;
          }),
          i(y, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (e) {
            var t = [];
            for (var a in e) t.push(a);
            return (
              t.reverse(),
              function a() {
                for (; t.length; ) {
                  var n = t.pop();
                  if (n in e) return (a.value = n), (a.done = !1), a;
                }
                return (a.done = !0), a;
              }
            );
          }),
          (e.values = k),
          (x.prototype = {
            constructor: x,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(N),
                !e)
              )
                for (var t in this)
                  "t" === t.charAt(0) &&
                    a.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var t = this;
              function n(a, n) {
                return (
                  (l.type = "throw"),
                  (l.arg = e),
                  (t.next = a),
                  n && ((t.method = "next"), (t.arg = void 0)),
                  !!n
                );
              }
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var o = this.tryEntries[r],
                  l = o.completion;
                if ("root" === o.tryLoc) return n("end");
                if (o.tryLoc <= this.prev) {
                  var i = a.call(o, "catchLoc"),
                    c = a.call(o, "finallyLoc");
                  if (i && c) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  } else if (i) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                  } else {
                    if (!c)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var r = this.tryEntries[n];
                if (
                  r.tryLoc <= this.prev &&
                  a.call(r, "finallyLoc") &&
                  this.prev < r.finallyLoc
                ) {
                  var o = r;
                  break;
                }
              }
              o &&
                ("break" === e || "continue" === e) &&
                o.tryLoc <= t &&
                t <= o.finallyLoc &&
                (o = null);
              var l = o ? o.completion : {};
              return (
                (l.type = e),
                (l.arg = t),
                o
                  ? ((this.method = "next"), (this.next = o.finallyLoc), m)
                  : this.complete(l)
              );
            },
            complete: function (e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === e.type && t && (this.next = t),
                m
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var a = this.tryEntries[t];
                if (a.finallyLoc === e)
                  return this.complete(a.completion, a.afterLoc), N(a), m;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var a = this.tryEntries[t];
                if (a.tryLoc === e) {
                  var n = a.completion;
                  if ("throw" === n.type) {
                    var r = n.arg;
                    N(a);
                  }
                  return r;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, t, a) {
              return (
                (this.delegate = { iterator: k(e), resultName: t, nextLoc: a }),
                "next" === this.method && (this.arg = void 0),
                m
              );
            },
          }),
          e
        );
      }
      var ne = ["Automatic", "Manual"],
        re = ["Petrol", "Diesel"],
        oe = ["Local", "Imported"],
        le = [
          "Islamabad",
          "Karachi",
          "Lahore",
          "Multan",
          "Peshawar",
          "Kohat",
          "Sialkot",
        ],
        ie = [
          "660",
          "800",
          "1000",
          "1300",
          "1500",
          "1800",
          "2000",
          "2700",
          "3000",
          "4500",
        ],
        ce = function (e) {
          var t = r.a.useState(""),
            a = Object(s.a)(t, 2),
            n = a[0],
            o = a[1],
            l = r.a.useState(""),
            i = Object(s.a)(l, 2),
            c = i[0],
            m = i[1],
            u = r.a.useState(""),
            d = Object(s.a)(u, 2),
            p = d[0],
            g = d[1],
            y = r.a.useState(""),
            E = Object(s.a)(y, 2),
            v = E[0],
            x = E[1],
            k = r.a.useState(""),
            C = Object(s.a)(k, 2),
            T = C[0],
            j = C[1],
            S = r.a.useState(""),
            F = Object(s.a)(S, 2),
            A = F[0],
            M = F[1],
            B = r.a.useState(""),
            I = Object(s.a)(B, 2),
            P = I[0],
            D = I[1],
            z = r.a.useState(""),
            G = Object(s.a)(z, 2),
            Y = G[0],
            H = G[1],
            V = r.a.useState(le[0]),
            Z = Object(s.a)(V, 2),
            X = Z[0],
            J = Z[1],
            K = r.a.useState(""),
            _ = Object(s.a)(K, 2),
            Q = _[0],
            $ = _[1],
            ce = r.a.useState(),
            se = Object(s.a)(ce, 2),
            me = se[0],
            ue = se[1],
            de = r.a.useState(ie[0]),
            he = Object(s.a)(de, 2),
            pe = he[0],
            fe = he[1],
            ge = r.a.useState(""),
            ye = Object(s.a)(ge, 2),
            Ee = ye[0],
            ve = ye[1],
            be = r.a.useState(re[0]),
            we = Object(s.a)(be, 2),
            Ne = we[0],
            xe = we[1],
            ke = r.a.useState(""),
            Ce = Object(s.a)(ke, 2),
            Te = Ce[0],
            je = Ce[1],
            Se = r.a.useState(""),
            Fe = Object(s.a)(Se, 2),
            We = Fe[0],
            Oe = Fe[1],
            Re = r.a.useState(oe[0]),
            Le = Object(s.a)(Re, 2),
            Ae = Le[0],
            Me = Le[1],
            Be = r.a.useState(oe[0]),
            Ie = Object(s.a)(Be, 2),
            Pe = Ie[0],
            De = Ie[1],
            qe = r.a.useState(ne[0]),
            ze = Object(s.a)(qe, 2),
            Ge = ze[0],
            Ye = ze[1],
            Ue = r.a.useState(""),
            He = Object(s.a)(Ue, 2),
            Ve = He[0],
            Ze = He[1],
            Xe = r.a.useState(!1),
            Je = Object(s.a)(Xe, 2),
            Ke = Je[0],
            _e = Je[1],
            Qe = r.a.useState(!1),
            $e = Object(s.a)(Qe, 2),
            et = $e[0],
            tt = $e[1],
            at = r.a.useState(!1),
            nt = Object(s.a)(at, 2),
            rt = nt[0],
            ot = nt[1],
            lt = r.a.forwardRef(function (e, t) {
              return r.a.createElement(
                q.a,
                Object.assign({ elevation: 6, ref: t, variant: "filled" }, e)
              );
            }),
            it = (function () {
              var e = Object(W.a)(
                ae().mark(function e(t) {
                  var a, r;
                  return ae().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              (t.preventDefault(),
                              "" === n ||
                                "" === c ||
                                "" === p ||
                                "" === v ||
                                "" === A ||
                                "" === P ||
                                "" === Y ||
                                "" === Q ||
                                "" === me ||
                                "" === Ee ||
                                "" === Te ||
                                "" === Pe ||
                                "" === Ve ||
                                "" === We)
                            ) {
                              e.next = 30;
                              break;
                            }
                            for (
                              (a = new FormData()).append("model", n),
                                a.append("price", c),
                                a.append("modelYear", p),
                                a.append("color", v),
                                a.append("description", A),
                                a.append("version", P),
                                a.append("city", Y),
                                a.append("mileage", Q),
                                r = 0;
                              r < me.length;
                              r++
                            )
                              a.append("images", me[r]);
                            return (
                              a.append("engine", parseInt(Ee)),
                              a.append("engineType", Te),
                              a.append("assembly", Pe),
                              a.append("transmission", Ve),
                              a.append("manufacturer", We),
                              a.append("registeredYear", T),
                              (e.prev = 18),
                              (e.next = 21),
                              f()({
                                method: "post",
                                url: "/api/cars",
                                data: a,
                                headers: {
                                  "Content-Type": "multipart/form-data",
                                  "x-access-token":
                                    localStorage.getItem("token"),
                                },
                              })
                            );
                          case 21:
                            e.sent &&
                              (_e(!0), (window.location.href = "/products")),
                              (e.next = 28);
                            break;
                          case 25:
                            (e.prev = 25),
                              (e.t0 = e.catch(18)),
                              console.log(e.t0.message);
                          case 28:
                            e.next = 31;
                            break;
                          case 30:
                            ot(!0);
                          case 31:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[18, 25]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
          return r.a.createElement(
            "div",
            {
              style: {
                backgroundColor: "#F7F9F9",
                marginTop: "8rem",
                marginBottom: "5rem",
              },
            },
            r.a.createElement(
              "div",
              {
                className: "container-fluid my-5",
                style: { backgroundColor: "#DCDCDC", height: "15em" },
              },
              r.a.createElement(
                "h1",
                {
                  className: "center pt-4",
                  style: {
                    color: "#228B22",
                    fontFamily: "Times New Roman",
                    fontWeight: "bold",
                  },
                },
                "Sell Your Car With Simple & Easy Steps"
              ),
              r.a.createElement(
                "h4",
                { className: "pt-3 center" },
                "It will take less than a minute"
              ),
              r.a.createElement(
                "div",
                { className: "d-flex justify-content-center pt-3" },
                r.a.createElement("img", {
                  className: "img-fluid",
                  style: { height: "4em", width: "4em" },
                  src: "https://wsa1.pakwheels.com/assets/sell-icons/car-221614dec8c0f3717dede556a5daad01.svg",
                  alt: "",
                }),
                r.a.createElement(
                  "h4",
                  { className: "mt-3 ml-3 mr-3" },
                  "Enter Your Car Information"
                ),
                r.a.createElement("img", {
                  className: "img-fluid",
                  style: { height: "4em", width: "4em" },
                  src: "https://wsa1.pakwheels.com/assets/sell-icons/photos-708994063564767acaca738e1261f90d.svg",
                  alt: "",
                }),
                r.a.createElement(
                  "h4",
                  { className: "mt-3 ml-3 mr-3" },
                  "Upload Photos "
                ),
                r.a.createElement("img", {
                  className: "img-fluid",
                  style: { height: "4em", width: "4em" },
                  src: "https://wsa4.pakwheels.com/assets/sell-icons/tag-3ba531fca999b37f89be28609fe9e9c0.svg",
                  alt: "",
                }),
                r.a.createElement(
                  "h4",
                  { className: "mt-3 ml-3 mr-3" },
                  "Enter Selling Price"
                )
              )
            ),
            r.a.createElement(
              "h1",
              {
                className: "pt-3 center text-decoration-underline",
                style: {
                  color: "#228B22",
                  fontFamily: "Times New Roman",
                  fontWeight: "bold",
                },
              },
              "Post New Record"
            ),
            r.a.createElement(
              "div",
              { className: " mt-4   " },
              r.a.createElement(
                "form",
                {
                  className: "mt-5 container",
                  encType: "multipart/form-data",
                  onSubmit: it,
                },
                r.a.createElement(
                  b.a,
                  { container: !0, spacing: 2 },
                  r.a.createElement(
                    b.a,
                    { item: !0, xs: 3 },
                    r.a.createElement(
                      w.a,
                      {
                        sx: {
                          width: 500,
                          maxWidth: "100%",
                          marginBottom: "2em",
                        },
                      },
                      r.a.createElement(N.a, {
                        value: We,
                        onChange: function (e) {
                          Oe(e.target.value);
                        },
                        fullWidth: !0,
                        required: !0,
                        label: "Manufacturer Company",
                        type: "text",
                      })
                    ),
                    r.a.createElement(
                      w.a,
                      {
                        sx: {
                          width: 500,
                          maxWidth: "100%",
                          marginBottom: "2em",
                        },
                      },
                      r.a.createElement(N.a, {
                        value: p,
                        onChange: function (e) {
                          g(e.target.value);
                        },
                        fullWidth: !0,
                        required: !0,
                        label: "Model Year",
                        type: "number",
                      })
                    ),
                    r.a.createElement(
                      w.a,
                      {
                        sx: {
                          width: 500,
                          maxWidth: "100%",
                          marginBottom: "2em",
                        },
                      },
                      r.a.createElement(N.a, {
                        value: v,
                        onChange: function (e) {
                          x(e.target.value);
                        },
                        fullWidth: !0,
                        required: !0,
                        label: "Exterior Color",
                        type: "text",
                      })
                    )
                  ),
                  r.a.createElement(
                    b.a,
                    { item: !0, xs: 3 },
                    r.a.createElement(
                      w.a,
                      {
                        sx: {
                          width: 500,
                          maxWidth: "100%",
                          marginBottom: "2em",
                        },
                      },
                      r.a.createElement(N.a, {
                        value: n,
                        onChange: function (e) {
                          o(e.target.value);
                        },
                        fullWidth: !0,
                        required: !0,
                        label: "Model / Name",
                        type: "text",
                      })
                    ),
                    r.a.createElement(U.a, {
                      value: Ge,
                      onChange: function (e, t) {
                        Ye(t);
                      },
                      inputValue: Ve,
                      onInputChange: function (e, t) {
                        Ze(t);
                      },
                      id: "controllable-states-demo",
                      options: ne,
                      sx: { width: 500, maxWidth: "100%", marginBottom: "2em" },
                      fullWidth: !0,
                      renderInput: function (e) {
                        return r.a.createElement(
                          N.a,
                          Object.assign({}, e, { label: "Transmission of Car" })
                        );
                      },
                    }),
                    r.a.createElement(U.a, {
                      value: pe,
                      onChange: function (e, t) {
                        fe(t);
                      },
                      inputValue: Ee,
                      onInputChange: function (e, t) {
                        ve(t);
                      },
                      id: "controllable-states-demo",
                      options: ie,
                      sx: { width: 500, maxWidth: "100%", marginBottom: "2em" },
                      fullWidth: !0,
                      renderInput: function (e) {
                        return r.a.createElement(
                          N.a,
                          Object.assign({}, e, {
                            label: "Engine Displacement (cc)",
                          })
                        );
                      },
                    })
                  ),
                  r.a.createElement(
                    b.a,
                    { item: !0, xs: 3 },
                    r.a.createElement(
                      w.a,
                      {
                        sx: {
                          width: 500,
                          maxWidth: "100%",
                          marginBottom: "2em",
                        },
                      },
                      r.a.createElement(N.a, {
                        value: P,
                        onChange: function (e) {
                          D(e.target.value);
                        },
                        fullWidth: !0,
                        required: !0,
                        label: "Version of Car",
                        type: "text",
                      })
                    ),
                    r.a.createElement(U.a, {
                      value: X,
                      onChange: function (e, t) {
                        J(t);
                      },
                      inputValue: Y,
                      onInputChange: function (e, t) {
                        H(t);
                      },
                      id: "controllable-states-demo",
                      options: le,
                      sx: { width: 500, maxWidth: "100%", marginBottom: "2em" },
                      fullWidth: !0,
                      renderInput: function (e) {
                        return r.a.createElement(
                          N.a,
                          Object.assign({}, e, { label: "Registered City" })
                        );
                      },
                    }),
                    r.a.createElement(U.a, {
                      value: Ne,
                      onChange: function (e, t) {
                        xe(t);
                      },
                      inputValue: Te,
                      onInputChange: function (e, t) {
                        je(t);
                      },
                      id: "controllable-states-demo",
                      options: re,
                      sx: { width: 500, maxWidth: "100%", marginBottom: "2em" },
                      fullWidth: !0,
                      renderInput: function (e) {
                        return r.a.createElement(
                          N.a,
                          Object.assign({}, e, { label: "Engine Type" })
                        );
                      },
                    })
                  ),
                  r.a.createElement(
                    b.a,
                    { item: !0, xs: 3 },
                    r.a.createElement(
                      w.a,
                      {
                        sx: {
                          width: 500,
                          maxWidth: "100%",
                          marginBottom: "2em",
                        },
                      },
                      r.a.createElement(N.a, {
                        value: T,
                        onChange: function (e) {
                          j(e.target.value);
                        },
                        fullWidth: !0,
                        required: !0,
                        label: "Registered Year",
                        type: "number",
                      })
                    ),
                    r.a.createElement(
                      w.a,
                      {
                        sx: {
                          width: 500,
                          maxWidth: "100%",
                          marginBottom: "2em",
                        },
                      },
                      r.a.createElement(N.a, {
                        value: Q,
                        onChange: function (e) {
                          $(e.target.value);
                        },
                        label: "Mileage of car",
                        fullWidth: !0,
                        required: !0,
                        type: "number",
                        InputProps: {
                          startAdornment: r.a.createElement(
                            te.a,
                            { position: "start" },
                            "KM"
                          ),
                        },
                      })
                    ),
                    r.a.createElement(U.a, {
                      value: Ae,
                      onChange: function (e, t) {
                        Me(t);
                      },
                      inputValue: Pe,
                      onInputChange: function (e, t) {
                        De(t);
                      },
                      id: "controllable-states-demo",
                      options: oe,
                      sx: { width: 500, maxWidth: "100%", marginBottom: "2em" },
                      fullWidth: !0,
                      renderInput: function (e) {
                        return r.a.createElement(
                          N.a,
                          Object.assign({}, e, { label: "Assembly Type" })
                        );
                      },
                    })
                  )
                ),
                r.a.createElement(
                  w.a,
                  {
                    sx: { width: 1200, maxWidth: "100%", marginBottom: "2em" },
                  },
                  r.a.createElement(N.a, {
                    value: c,
                    onChange: function (e) {
                      m(e.target.value);
                    },
                    fullWidth: !0,
                    required: !0,
                    label: "Price of Car",
                    type: "number",
                    InputProps: {
                      startAdornment: r.a.createElement(
                        te.a,
                        { position: "start" },
                        "PKR"
                      ),
                    },
                  })
                ),
                r.a.createElement(
                  w.a,
                  {
                    sx: { width: 1200, maxWidth: "100%", marginBottom: "2em" },
                  },
                  r.a.createElement(N.a, {
                    value: A,
                    onChange: function (e) {
                      M(e.target.value);
                    },
                    fullWidth: !0,
                    multiline: !0,
                    rows: 4,
                    required: !0,
                    label: "Description of car",
                    type: "text",
                  })
                ),
                r.a.createElement(
                  "div",
                  { className: "mb-4" },
                  r.a.createElement("input", {
                    type: "file",
                    required: !0,
                    onChange: function (e) {
                      e.preventDefault();
                      for (var t = e.target.files, a = 0; a < t.length; a++) {
                        if (!/image/.test(t[a].type))
                          return tt(!0), void (e.target.value = null);
                        ue(e.target.files);
                      }
                    },
                    multiple: !0,
                  })
                ),
                r.a.createElement(
                  h.a,
                  {
                    size: "large",
                    variant: "contained",
                    color: "success",
                    endIcon: r.a.createElement(ee.a, null),
                    type: "submit",
                  },
                  "Submit & Continue"
                ),
                r.a.createElement(
                  O.a,
                  {
                    anchorOrigin: { vertical: "top", horizontal: "center" },
                    autoHideDuration: 6e3,
                    open: Ke,
                    TransitionComponent: R.a,
                  },
                  r.a.createElement(
                    lt,
                    { severity: "success", sx: { width: "50em" } },
                    r.a.createElement(L.a, null, "Success"),
                    "Record has been Posted successfully!!"
                  )
                ),
                r.a.createElement(
                  O.a,
                  {
                    anchorOrigin: { vertical: "top", horizontal: "center" },
                    open: et,
                    TransitionComponent: R.a,
                  },
                  r.a.createElement(
                    lt,
                    {
                      severity: "error",
                      sx: { width: "50em" },
                      onClose: function () {
                        tt(!1);
                      },
                    },
                    r.a.createElement(L.a, null, "Error"),
                    "Only Images are allowed"
                  )
                ),
                r.a.createElement(
                  O.a,
                  {
                    anchorOrigin: { vertical: "top", horizontal: "center" },
                    onClose: function (e, t) {
                      ot(!1);
                    },
                    autoHideDuration: 6e3,
                    open: rt,
                    TransitionComponent: R.a,
                  },
                  r.a.createElement(
                    lt,
                    { severity: "success", sx: { width: "50em" } },
                    r.a.createElement(L.a, null, "Warning"),
                    "Please fill all the fields to continue!!"
                  )
                )
              )
            )
          );
        },
        se = a(300),
        me = a(303),
        ue = a(301),
        de = a(302),
        he = a(287),
        pe = a(286),
        fe = a(30),
        ge = Object(c.j)(function (e) {
          var t = localStorage.getItem("userRole"),
            a = e.product,
            n = e.history,
            o = e.onDelete,
            l = r.a.useState(!1),
            i = Object(s.a)(l, 2),
            c = i[0],
            m = i[1],
            u = Object(fe.a)(),
            d = Object(pe.a)(u.breakpoints.down("md")),
            p = function () {
              m(!1);
            };
          return r.a.createElement(
            "div",
            { className: "container-fluid mb-5" },
            r.a.createElement(
              "div",
              {
                className: "border border-1 container mt-5",
                style: { backgroundColor: "#F5F5F5" },
              },
              r.a.createElement(
                b.a,
                { container: !0, spacing: 2 },
                r.a.createElement(
                  b.a,
                  {
                    style: { cursor: "pointer" },
                    item: !0,
                    xs: 3,
                    onClick: function (t) {
                      t.preventDefault(),
                        e.history.push("products/car-details/" + a._id);
                    },
                  },
                  r.a.createElement("img", {
                    className: "img-fluid",
                    style: { height: "15em ", width: "20em" },
                    src: (function () {
                      var e = a.images;
                      return (
                        a.images.length,
                        window.location.origin + "/uploads/" + e[0]
                      );
                    })(),
                    alt: "....",
                  })
                ),
                r.a.createElement(
                  b.a,
                  { item: !0, xs: 8 },
                  "admin" === t &&
                    r.a.createElement(
                      "div",
                      { className: "d-flex justify-content-end" },
                      r.a.createElement("i", {
                        className: "bi bi-pencil-square fa-2x",
                        style: { cursor: "pointer" },
                        onClick: function (e) {
                          n.push("/products/update-car/" + a._id);
                        },
                      }),
                      r.a.createElement("i", {
                        className: "fas fa-times-circle fa-2x pt-2",
                        style: {
                          marginLeft: "0.5em",
                          cursor: "pointer",
                          color: "black",
                        },
                        onClick: function () {
                          m(!0);
                        },
                      })
                    ),
                  r.a.createElement(
                    "div",
                    { className: "" },
                    a.salePrice &&
                      r.a.createElement(
                        "h3",
                        null,
                        r.a.createElement(
                          "strong",
                          { style: { color: "#880808" } },
                          a.salePrice ? "Sold @ " + a.salePrice : ""
                        )
                      ),
                    r.a.createElement("h4", { className: "pt-2" }, a.city),
                    r.a.createElement(
                      "h5",
                      { className: "pt-2", style: { color: "#999999" } },
                      " ",
                      a.model,
                      " | ",
                      a.color,
                      " | ",
                      a.version,
                      " |",
                      " ",
                      "".concat(a.engine, "cc"),
                      " | ",
                      a.engine_type
                    ),
                    r.a.createElement(
                      "h5",
                      { className: "pt-2", style: { color: "#999999" } },
                      " ",
                      "".concat(a.price, " PKR"),
                      " | ",
                      "".concat(a.mileage, " KM"),
                      " |",
                      " ",
                      a.transmission,
                      " "
                    )
                  )
                )
              )
            ),
            r.a.createElement(
              se.a,
              {
                fullScreen: d,
                open: c,
                onClose: p,
                "aria-labelledby": "responsive-dialog-title",
              },
              r.a.createElement(
                he.a,
                { id: "responsive-dialog-title" },
                "Confirmation Message?"
              ),
              r.a.createElement(
                ue.a,
                null,
                r.a.createElement(
                  de.a,
                  null,
                  "Are You sure , You want to delete this record!!!!"
                )
              ),
              r.a.createElement(
                me.a,
                null,
                r.a.createElement(
                  h.a,
                  { autoFocus: !0, onClick: p },
                  "Disagree"
                ),
                r.a.createElement(
                  h.a,
                  {
                    onClick: function (e) {
                      e.preventDefault(),
                        f.a
                          .delete("/api/cars/" + a._id, {
                            headers: {
                              "x-access-token": localStorage.getItem("token"),
                            },
                          })
                          .then(function (e) {
                            console.log(e), o(), m(!1);
                          })
                          .catch(function (e) {
                            console.log(e);
                          });
                    },
                    autoFocus: !0,
                  },
                  "Agree"
                )
              )
            )
          );
        }),
        ye = a(288),
        Ee = a(304),
        ve = a(298),
        be =
          (a(232),
          function (e) {
            var t = e.showPerPage,
              a = e.onPaginationChange,
              o = e.total,
              l = Object(n.useState)(1),
              i = Object(s.a)(l, 2),
              c = i[0],
              m = i[1];
            Object(n.useEffect)(
              function () {
                var e = t * c;
                a(e - t, e);
              },
              [c]
            );
            var u = function (e) {
              "prev" === e
                ? m(1 === c ? 1 : c - 1)
                : "next" === e && (Math.ceil(o / t) === c ? m(c) : m(c + 1));
            };
            return r.a.createElement(
              "div",
              { className: " container d-flex justify-content-center" },
              r.a.createElement(
                "nav",
                { "aria-label": "Page navigation example" },
                r.a.createElement(
                  "ul",
                  { className: "pagination" },
                  r.a.createElement(
                    "li",
                    { className: "page-item" },
                    r.a.createElement(
                      ve.a,
                      {
                        className: "page-link",
                        to: "!#",
                        "aria-label": "Previous",
                        onClick: function () {
                          u("prev");
                        },
                      },
                      r.a.createElement(
                        "span",
                        { "aria-hidden": "true" },
                        "\xab"
                      )
                    )
                  ),
                  new Array(Math.ceil(o / t)).fill("").map(function (e, t) {
                    return r.a.createElement(
                      "li",
                      {
                        key: t,
                        className: "page-item ".concat(
                          t + 1 === c ? "active" : "null"
                        ),
                        onClick: function () {
                          m(t + 1);
                        },
                      },
                      r.a.createElement(
                        ve.a,
                        { className: "page-link", to: "!#" },
                        t + 1
                      )
                    );
                  }),
                  r.a.createElement(
                    "li",
                    { className: "page-item" },
                    r.a.createElement(
                      ve.a,
                      {
                        className: "page-link",
                        to: "!#",
                        "aria-label": "Next",
                        onClick: function () {
                          u("next");
                        },
                      },
                      r.a.createElement(
                        "span",
                        { "aria-hidden": "true" },
                        "\xbb"
                      )
                    )
                  )
                )
              )
            );
          }),
        we = function (e) {
          var t = Object(n.useState)([]),
            a = Object(s.a)(t, 2),
            o = a[0],
            l = a[1],
            i = Object(n.useState)({ start: 0, end: 4 }),
            c = Object(s.a)(i, 2),
            m = c[0],
            u = c[1],
            d = function () {
              e.location.state &&
              e.location.state.state &&
              e.location.state.state.cars
                ? l(e.location.state.state.cars.cars)
                : f.a
                    .get("/api/cars", {
                      headers: {
                        "x-access-token": localStorage.getItem("token"),
                      },
                    })
                    .then(function (e) {
                      l(e.data.cars);
                    })
                    .catch(function (e) {
                      console.log(e);
                    });
            };
          return (
            Object(n.useEffect)(d),
            r.a.createElement(
              "div",
              { style: { marginTop: "10rem" } },
              r.a.createElement(
                "div",
                { className: " container d-flex justify-content-center" },
                r.a.createElement(x, null)
              ),
              r.a.createElement(
                ye.a,
                {
                  className: " ",
                  sx: {
                    color: "grey.500",
                    position: "absolute",
                    left: " 50%",
                    top: "40%",
                    transform: "translate(-50%, -50%)",
                    padding: "10px",
                  },
                  spacing: 2,
                  direction: "row",
                },
                o.length <= 0 && r.a.createElement(Ee.a, { color: "success" })
              ),
              r.a.createElement(
                "div",
                null,
                o.slice(m.start, m.end).map(function (e, t) {
                  return r.a.createElement(ge, {
                    key: t,
                    product: e,
                    onDelete: d,
                  });
                }),
                r.a.createElement(be, {
                  showPerPage: 4,
                  onPaginationChange: function (e, t) {
                    u({ start: e, end: t });
                  },
                  total: o.length,
                })
              )
            )
          );
        };
      function Ne() {
        Ne = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          a = t.hasOwnProperty,
          n = "function" == typeof Symbol ? Symbol : {},
          r = n.iterator || "@@iterator",
          o = n.asyncIterator || "@@asyncIterator",
          l = n.toStringTag || "@@toStringTag";
        function i(e, t, a) {
          return (
            Object.defineProperty(e, t, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          i({}, "");
        } catch (T) {
          i = function (e, t, a) {
            return (e[t] = a);
          };
        }
        function c(e, t, a, n) {
          var r = t && t.prototype instanceof u ? t : u,
            o = Object.create(r.prototype),
            l = new x(n || []);
          return (
            (o._invoke = (function (e, t, a) {
              var n = "suspendedStart";
              return function (r, o) {
                if ("executing" === n)
                  throw new Error("Generator is already running");
                if ("completed" === n) {
                  if ("throw" === r) throw o;
                  return C();
                }
                for (a.method = r, a.arg = o; ; ) {
                  var l = a.delegate;
                  if (l) {
                    var i = b(l, a);
                    if (i) {
                      if (i === m) continue;
                      return i;
                    }
                  }
                  if ("next" === a.method) a.sent = a._sent = a.arg;
                  else if ("throw" === a.method) {
                    if ("suspendedStart" === n)
                      throw ((n = "completed"), a.arg);
                    a.dispatchException(a.arg);
                  } else "return" === a.method && a.abrupt("return", a.arg);
                  n = "executing";
                  var c = s(e, t, a);
                  if ("normal" === c.type) {
                    if (
                      ((n = a.done ? "completed" : "suspendedYield"),
                      c.arg === m)
                    )
                      continue;
                    return { value: c.arg, done: a.done };
                  }
                  "throw" === c.type &&
                    ((n = "completed"), (a.method = "throw"), (a.arg = c.arg));
                }
              };
            })(e, a, l)),
            o
          );
        }
        function s(e, t, a) {
          try {
            return { type: "normal", arg: e.call(t, a) };
          } catch (T) {
            return { type: "throw", arg: T };
          }
        }
        e.wrap = c;
        var m = {};
        function u() {}
        function d() {}
        function h() {}
        var p = {};
        i(p, r, function () {
          return this;
        });
        var f = Object.getPrototypeOf,
          g = f && f(f(k([])));
        g && g !== t && a.call(g, r) && (p = g);
        var y = (h.prototype = u.prototype = Object.create(p));
        function E(e) {
          ["next", "throw", "return"].forEach(function (t) {
            i(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function v(e, t) {
          var n;
          this._invoke = function (r, o) {
            function l() {
              return new t(function (n, l) {
                !(function n(r, o, l, i) {
                  var c = s(e[r], e, o);
                  if ("throw" !== c.type) {
                    var m = c.arg,
                      u = m.value;
                    return u && "object" == typeof u && a.call(u, "__await")
                      ? t.resolve(u.__await).then(
                          function (e) {
                            n("next", e, l, i);
                          },
                          function (e) {
                            n("throw", e, l, i);
                          }
                        )
                      : t.resolve(u).then(
                          function (e) {
                            (m.value = e), l(m);
                          },
                          function (e) {
                            return n("throw", e, l, i);
                          }
                        );
                  }
                  i(c.arg);
                })(r, o, n, l);
              });
            }
            return (n = n ? n.then(l, l) : l());
          };
        }
        function b(e, t) {
          var a = e.iterator[t.method];
          if (void 0 === a) {
            if (((t.delegate = null), "throw" === t.method)) {
              if (
                e.iterator.return &&
                ((t.method = "return"),
                (t.arg = void 0),
                b(e, t),
                "throw" === t.method)
              )
                return m;
              (t.method = "throw"),
                (t.arg = new TypeError(
                  "The iterator does not provide a 'throw' method"
                ));
            }
            return m;
          }
          var n = s(a, e.iterator, t.arg);
          if ("throw" === n.type)
            return (
              (t.method = "throw"), (t.arg = n.arg), (t.delegate = null), m
            );
          var r = n.arg;
          return r
            ? r.done
              ? ((t[e.resultName] = r.value),
                (t.next = e.nextLoc),
                "return" !== t.method &&
                  ((t.method = "next"), (t.arg = void 0)),
                (t.delegate = null),
                m)
              : r
            : ((t.method = "throw"),
              (t.arg = new TypeError("iterator result is not an object")),
              (t.delegate = null),
              m);
        }
        function w(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function N(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function x(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(w, this),
            this.reset(!0);
        }
        function k(e) {
          if (e) {
            var t = e[r];
            if (t) return t.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var n = -1,
                o = function t() {
                  for (; ++n < e.length; )
                    if (a.call(e, n)) return (t.value = e[n]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (o.next = o);
            }
          }
          return { next: C };
        }
        function C() {
          return { value: void 0, done: !0 };
        }
        return (
          (d.prototype = h),
          i(y, "constructor", h),
          i(h, "constructor", d),
          (d.displayName = i(h, l, "GeneratorFunction")),
          (e.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === d || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, h)
                : ((e.__proto__ = h), i(e, l, "GeneratorFunction")),
              (e.prototype = Object.create(y)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          E(v.prototype),
          i(v.prototype, o, function () {
            return this;
          }),
          (e.AsyncIterator = v),
          (e.async = function (t, a, n, r, o) {
            void 0 === o && (o = Promise);
            var l = new v(c(t, a, n, r), o);
            return e.isGeneratorFunction(a)
              ? l
              : l.next().then(function (e) {
                  return e.done ? e.value : l.next();
                });
          }),
          E(y),
          i(y, l, "Generator"),
          i(y, r, function () {
            return this;
          }),
          i(y, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (e) {
            var t = [];
            for (var a in e) t.push(a);
            return (
              t.reverse(),
              function a() {
                for (; t.length; ) {
                  var n = t.pop();
                  if (n in e) return (a.value = n), (a.done = !1), a;
                }
                return (a.done = !0), a;
              }
            );
          }),
          (e.values = k),
          (x.prototype = {
            constructor: x,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(N),
                !e)
              )
                for (var t in this)
                  "t" === t.charAt(0) &&
                    a.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var t = this;
              function n(a, n) {
                return (
                  (l.type = "throw"),
                  (l.arg = e),
                  (t.next = a),
                  n && ((t.method = "next"), (t.arg = void 0)),
                  !!n
                );
              }
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var o = this.tryEntries[r],
                  l = o.completion;
                if ("root" === o.tryLoc) return n("end");
                if (o.tryLoc <= this.prev) {
                  var i = a.call(o, "catchLoc"),
                    c = a.call(o, "finallyLoc");
                  if (i && c) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  } else if (i) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                  } else {
                    if (!c)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var r = this.tryEntries[n];
                if (
                  r.tryLoc <= this.prev &&
                  a.call(r, "finallyLoc") &&
                  this.prev < r.finallyLoc
                ) {
                  var o = r;
                  break;
                }
              }
              o &&
                ("break" === e || "continue" === e) &&
                o.tryLoc <= t &&
                t <= o.finallyLoc &&
                (o = null);
              var l = o ? o.completion : {};
              return (
                (l.type = e),
                (l.arg = t),
                o
                  ? ((this.method = "next"), (this.next = o.finallyLoc), m)
                  : this.complete(l)
              );
            },
            complete: function (e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === e.type && t && (this.next = t),
                m
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var a = this.tryEntries[t];
                if (a.finallyLoc === e)
                  return this.complete(a.completion, a.afterLoc), N(a), m;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var a = this.tryEntries[t];
                if (a.tryLoc === e) {
                  var n = a.completion;
                  if ("throw" === n.type) {
                    var r = n.arg;
                    N(a);
                  }
                  return r;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, t, a) {
              return (
                (this.delegate = { iterator: k(e), resultName: t, nextLoc: a }),
                "next" === this.method && (this.arg = void 0),
                m
              );
            },
          }),
          e
        );
      }
      var xe = function (e) {
          var t = r.a.useState(""),
            a = Object(s.a)(t, 2),
            n = a[0],
            o = a[1],
            l = r.a.useState(""),
            c = Object(s.a)(l, 2),
            m = c[0],
            u = c[1],
            d = r.a.useState(!1),
            p = Object(s.a)(d, 2),
            g = p[0],
            y = p[1],
            E = r.a.useState(!1),
            v = Object(s.a)(E, 2),
            x = v[0],
            k = v[1],
            C = r.a.useState(!1),
            T = Object(s.a)(C, 2),
            j = T[0],
            S = T[1],
            F = r.a.forwardRef(function (e, t) {
              return r.a.createElement(
                q.a,
                Object.assign({ elevation: 6, ref: t, variant: "filled" }, e)
              );
            });
          return r.a.createElement(
            "div",
            { className: "container ", style: { marginTop: "6rem" } },
            r.a.createElement("h1", null, "Login"),
            r.a.createElement("br", null),
            r.a.createElement(
              b.a,
              { container: !0, spacing: 2 },
              r.a.createElement(
                b.a,
                { item: !0, xs: 4.5 },
                r.a.createElement("img", {
                  className: "img-fluid",
                  style: { width: "30em", height: "33em" },
                  src: "https://images.unsplash.com/photo-1518082593638-b6e73b35d39a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aGVsbG98ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
                  alt: "",
                })
              ),
              r.a.createElement(
                b.a,
                { item: !0, xs: 7.5 },
                r.a.createElement(
                  "form",
                  {
                    noValidate: !0,
                    autoComplete: "off",
                    onSubmit: function (e) {
                      e.preventDefault(),
                        "" !== n && "" !== m
                          ? f.a
                              .post("/api/login", { email: n, password: m })
                              .then(
                                (function () {
                                  var e = Object(W.a)(
                                    Ne().mark(function e(t) {
                                      return Ne().wrap(function (e) {
                                        for (;;)
                                          switch ((e.prev = e.next)) {
                                            case 0:
                                              t.data.user &&
                                                (console.log(t),
                                                localStorage.setItem(
                                                  "token",
                                                  t.data.user
                                                ),
                                                localStorage.setItem(
                                                  "userId",
                                                  t.data.userId
                                                ),
                                                y(!0),
                                                (window.location.href = "/"));
                                            case 1:
                                            case "end":
                                              return e.stop();
                                          }
                                      }, e);
                                    })
                                  );
                                  return function (t) {
                                    return e.apply(this, arguments);
                                  };
                                })()
                              )
                              .catch(function (e) {
                                e.response
                                  ? (401 === e.response.status && k(!0),
                                    400 === e.response.status && S(!0))
                                  : e.request
                                  ? console.log(e.request)
                                  : console.log("Error", e.message);
                              })
                          : alert("Please Enter All the required Fields");
                    },
                  },
                  r.a.createElement(
                    w.a,
                    {
                      sx: { width: 500, maxWidth: "100%", marginBottom: "2em" },
                    },
                    r.a.createElement(N.a, {
                      value: n,
                      onChange: function (e) {
                        o(e.target.value);
                      },
                      fullWidth: !0,
                      required: !0,
                      label: "Email address",
                    })
                  ),
                  r.a.createElement(
                    w.a,
                    {
                      sx: { width: 500, maxWidth: "100%", marginBottom: "2em" },
                    },
                    r.a.createElement(N.a, {
                      value: m,
                      onChange: function (e) {
                        u(e.target.value);
                      },
                      type: "password",
                      fullWidth: !0,
                      required: !0,
                      label: "Password",
                    })
                  ),
                  r.a.createElement(
                    "div",
                    { className: "pt-2" },
                    r.a.createElement(
                      h.a,
                      { variant: "outlined", type: "submit", size: "large" },
                      "Login"
                    ),
                    r.a.createElement(
                      O.a,
                      {
                        anchorOrigin: { vertical: "top", horizontal: "center" },
                        open: g,
                        TransitionComponent: R.a,
                      },
                      r.a.createElement(
                        F,
                        {
                          severity: "success",
                          sx: { width: "50em" },
                          onClose: function (e, t) {
                            "clickaway" !== t && y(!1);
                          },
                        },
                        r.a.createElement(L.a, null, "Success"),
                        "Login Successfull!!!"
                      )
                    ),
                    r.a.createElement(
                      O.a,
                      {
                        anchorOrigin: { vertical: "top", horizontal: "center" },
                        open: x,
                        TransitionComponent: R.a,
                      },
                      r.a.createElement(
                        F,
                        {
                          severity: "error",
                          sx: { width: "50em" },
                          onClose: function () {
                            k(!1);
                          },
                        },
                        r.a.createElement(L.a, null, "Error"),
                        "Invalid Email!!!"
                      )
                    ),
                    r.a.createElement(
                      O.a,
                      {
                        anchorOrigin: { vertical: "top", horizontal: "center" },
                        open: j,
                        TransitionComponent: R.a,
                      },
                      r.a.createElement(
                        F,
                        {
                          severity: "error",
                          sx: { width: "50em" },
                          onClose: function () {
                            S(!1);
                          },
                        },
                        r.a.createElement(L.a, null, "Error"),
                        "Invalid Password!!!"
                      )
                    )
                  ),
                  r.a.createElement("br", null),
                  r.a.createElement(
                    "p",
                    null,
                    "Don't have an account?",
                    " ",
                    r.a.createElement(
                      i.b,
                      { className: "link-info", to: "/sign-up" },
                      "Register here"
                    )
                  ),
                  r.a.createElement(
                    "p",
                    null,
                    "Forgot Your Password?",
                    " ",
                    r.a.createElement(
                      i.b,
                      { className: "link-info", to: "/reset-password" },
                      "Reset Your Password"
                    )
                  ),
                  r.a.createElement("br", null),
                  r.a.createElement("br", null)
                )
              )
            )
          );
        },
        ke =
          (a(233),
          function () {
            return r.a.createElement(
              "div",
              { className: "main-footer" },
              r.a.createElement(
                "footer",
                { className: "container py-5" },
                r.a.createElement(
                  "div",
                  { className: "row" },
                  r.a.createElement(
                    "div",
                    { className: "col-12 col-md" },
                    r.a.createElement(
                      "small",
                      {
                        style: { cursor: "pointer" },
                        className: "d-block mb-3 text-muted",
                      },
                      "\xa9 2022-2023"
                    )
                  ),
                  r.a.createElement(
                    "div",
                    { className: "col-6 col-md" },
                    r.a.createElement(
                      "h5",
                      { className: "ok", style: { cursor: "pointer" } },
                      "Features"
                    ),
                    r.a.createElement(
                      "ul",
                      { className: "list-unstyled text-small" },
                      r.a.createElement(
                        "li",
                        null,
                        r.a.createElement(
                          i.b,
                          { className: " te text-muted", to: "/#" },
                          "Cool stuff"
                        )
                      ),
                      r.a.createElement(
                        "li",
                        null,
                        r.a.createElement(
                          i.b,
                          { className: "text-muted", to: "/#" },
                          "Random feature"
                        )
                      ),
                      r.a.createElement(
                        "li",
                        null,
                        r.a.createElement(
                          i.b,
                          { className: "text-muted", to: "/#" },
                          "Team feature"
                        )
                      ),
                      r.a.createElement(
                        "li",
                        null,
                        r.a.createElement(
                          i.b,
                          { className: "text-muted", to: "/#" },
                          "Stuff for developers"
                        )
                      ),
                      r.a.createElement(
                        "li",
                        null,
                        r.a.createElement(
                          i.b,
                          { className: "text-muted", to: "/#" },
                          "Another one"
                        )
                      ),
                      r.a.createElement(
                        "li",
                        null,
                        r.a.createElement(
                          i.b,
                          { className: "text-muted", to: "/#" },
                          "Last time"
                        )
                      )
                    )
                  ),
                  r.a.createElement(
                    "div",
                    { className: "col-6 col-md" },
                    r.a.createElement(
                      "h5",
                      { className: "ok", style: { cursor: "pointer" } },
                      "Resources"
                    ),
                    r.a.createElement(
                      "ul",
                      { className: "list-unstyled text-small" },
                      r.a.createElement(
                        "li",
                        null,
                        r.a.createElement(
                          i.b,
                          { className: "text-muted", to: "/#" },
                          "Resource"
                        )
                      ),
                      r.a.createElement(
                        "li",
                        null,
                        r.a.createElement(
                          i.b,
                          { className: "text-muted", to: "/#" },
                          "Resource name"
                        )
                      ),
                      r.a.createElement(
                        "li",
                        null,
                        r.a.createElement(
                          i.b,
                          { className: "text-muted", to: "/#" },
                          "Another resource"
                        )
                      ),
                      r.a.createElement(
                        "li",
                        null,
                        r.a.createElement(
                          i.b,
                          { className: "text-muted", to: "/#" },
                          "Final resource"
                        )
                      )
                    )
                  ),
                  r.a.createElement(
                    "div",
                    { className: "col-6 col-md" },
                    r.a.createElement(
                      "h5",
                      { className: "ok", style: { cursor: "pointer" } },
                      "About"
                    ),
                    r.a.createElement(
                      "ul",
                      { className: "list-unstyled text-small" },
                      r.a.createElement(
                        "li",
                        null,
                        r.a.createElement(
                          i.b,
                          { className: "text-muted", to: "/#" },
                          "Team"
                        )
                      ),
                      r.a.createElement(
                        "li",
                        null,
                        r.a.createElement(
                          i.b,
                          { className: "text-muted", to: "/#" },
                          "Locations"
                        )
                      ),
                      r.a.createElement(
                        "li",
                        null,
                        r.a.createElement(
                          i.b,
                          { className: "text-muted", to: "/#" },
                          "Privacy"
                        )
                      ),
                      r.a.createElement(
                        "li",
                        null,
                        r.a.createElement(
                          i.b,
                          { className: "text-muted", to: "/#" },
                          "Terms"
                        )
                      )
                    )
                  )
                )
              )
            );
          }),
        Ce = function (e) {
          var t = r.a.useState(""),
            a = Object(s.a)(t, 2),
            n = a[0],
            o = a[1],
            l = r.a.useState(""),
            c = Object(s.a)(l, 2),
            m = c[0],
            u = c[1],
            d = r.a.useState(""),
            p = Object(s.a)(d, 2),
            g = p[0],
            y = p[1],
            E = r.a.useState(""),
            v = Object(s.a)(E, 2),
            x = v[0],
            k = v[1],
            C = r.a.useState(""),
            T = Object(s.a)(C, 2),
            j = T[0],
            S = T[1],
            F = r.a.useState(!1),
            W = Object(s.a)(F, 2),
            A = W[0],
            M = W[1],
            B = r.a.useState(!1),
            I = Object(s.a)(B, 2),
            P = I[0],
            D = I[1],
            z = r.a.useState(!1),
            G = Object(s.a)(z, 2),
            Y = G[0],
            U = G[1],
            H = r.a.forwardRef(function (e, t) {
              return r.a.createElement(
                q.a,
                Object.assign({ elevation: 6, ref: t, variant: "filled" }, e)
              );
            });
          return r.a.createElement(
            "div",
            { className: "container ", style: { marginTop: "6rem" } },
            r.a.createElement("h1", null, "Sign up"),
            r.a.createElement("br", null),
            r.a.createElement(
              b.a,
              { container: !0, spacing: 2 },
              r.a.createElement(
                b.a,
                { item: !0, xs: 4.5 },
                r.a.createElement("img", {
                  className: "img-fluid",
                  style: { width: "30em", height: "33em" },
                  src: "https://images.unsplash.com/photo-1560626833-1ef263dc356c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXw5NTMzODY4fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                  alt: "",
                })
              ),
              r.a.createElement(
                b.a,
                { item: !0, xs: 7.5 },
                r.a.createElement(
                  "form",
                  {
                    noValidate: !0,
                    autoComplete: "off",
                    onSubmit: function (e) {
                      e.preventDefault(),
                        "" !== g && "" !== x && "" !== j && "" !== n && "" !== m
                          ? f.a
                              .post(" /api/sign-up", {
                                fName: g,
                                lName: x,
                                cNumber: j,
                                email: n,
                                password: m,
                              })
                              .then(function (e) {
                                M(!0), (window.location.href = "/login");
                              })
                              .catch(function (e) {
                                e.response
                                  ? 409 === e.response.status && D(!0)
                                  : e.request
                                  ? console.log(e.request)
                                  : console.log("Error", e.message);
                              })
                          : U(!0);
                    },
                  },
                  r.a.createElement(
                    w.a,
                    {
                      sx: { width: 500, maxWidth: "100%", marginBottom: "2em" },
                    },
                    r.a.createElement(N.a, {
                      value: g,
                      onChange: function (e) {
                        y(e.target.value);
                      },
                      fullWidth: !0,
                      required: !0,
                      label: "First Name",
                      type: "text",
                    })
                  ),
                  r.a.createElement(
                    w.a,
                    {
                      sx: { width: 500, maxWidth: "100%", marginBottom: "2em" },
                    },
                    r.a.createElement(N.a, {
                      value: x,
                      onChange: function (e) {
                        k(e.target.value);
                      },
                      fullWidth: !0,
                      required: !0,
                      label: "Last Name",
                      type: "text",
                    })
                  ),
                  r.a.createElement(
                    w.a,
                    {
                      sx: { width: 500, maxWidth: "100%", marginBottom: "2em" },
                    },
                    r.a.createElement(N.a, {
                      value: j,
                      onChange: function (e) {
                        S(e.target.value);
                      },
                      fullWidth: !0,
                      required: !0,
                      placeholder: "92-310-4091437",
                      label: "Contact Number",
                      type: "tel",
                    })
                  ),
                  r.a.createElement(
                    w.a,
                    {
                      sx: { width: 500, maxWidth: "100%", marginBottom: "2em" },
                    },
                    r.a.createElement(N.a, {
                      value: n,
                      onChange: function (e) {
                        o(e.target.value);
                      },
                      fullWidth: !0,
                      required: !0,
                      label: "Email address",
                      type: "email",
                    })
                  ),
                  r.a.createElement(
                    w.a,
                    {
                      sx: { width: 500, maxWidth: "100%", marginBottom: "2em" },
                    },
                    r.a.createElement(N.a, {
                      value: m,
                      onChange: function (e) {
                        u(e.target.value);
                      },
                      fullWidth: !0,
                      required: !0,
                      label: "Password",
                      type: "password",
                    })
                  ),
                  r.a.createElement(
                    "div",
                    { className: "pt-2" },
                    r.a.createElement(
                      h.a,
                      { type: "submit", variant: "outlined", size: "large" },
                      "Sign up"
                    ),
                    r.a.createElement(
                      O.a,
                      {
                        anchorOrigin: { vertical: "top", horizontal: "center" },
                        open: P,
                        onClose: function (e, t) {
                          D(!1);
                        },
                        TransitionComponent: R.a,
                      },
                      r.a.createElement(
                        H,
                        { severity: "error", sx: { width: "50em" } },
                        r.a.createElement(L.a, null, "Error"),
                        "This email already exist. Please try with another email"
                      )
                    ),
                    r.a.createElement(
                      O.a,
                      {
                        anchorOrigin: { vertical: "top", horizontal: "center" },
                        open: A,
                        onClose: function (e, t) {
                          M(!1);
                        },
                        TransitionComponent: R.a,
                      },
                      r.a.createElement(
                        H,
                        { severity: "success", sx: { width: "50em" } },
                        r.a.createElement(L.a, null, "Success"),
                        "You have been registered successfully!!"
                      )
                    ),
                    r.a.createElement(
                      O.a,
                      {
                        anchorOrigin: { vertical: "top", horizontal: "center" },
                        open: Y,
                        onClose: function (e, t) {
                          U(!1);
                        },
                        TransitionComponent: R.a,
                      },
                      r.a.createElement(
                        H,
                        { severity: "warning", sx: { width: "50em" } },
                        r.a.createElement(L.a, null, "Warning"),
                        "Please fill all the fields to continue"
                      )
                    )
                  ),
                  r.a.createElement("br", null),
                  r.a.createElement(
                    "p",
                    null,
                    "Already have an account?",
                    " ",
                    r.a.createElement(
                      i.b,
                      { className: "link-info", to: "/login" },
                      "Login here"
                    )
                  ),
                  r.a.createElement("br", null),
                  r.a.createElement("br", null)
                )
              )
            )
          );
        },
        Te = a(94),
        je = a.n(Te),
        Se = ["Automatic", "Manual"],
        Fe = ["Petrol", "Diesel"],
        We = ["Local", "Imported"],
        Oe = [
          "Islamabad",
          "Karachi",
          "Lahore",
          "Multan",
          "Peshawar",
          "Kohat",
          "Sialkot",
        ],
        Re = [
          "660",
          "800",
          "1000",
          "1300",
          "1500",
          "1800",
          "2000",
          "2700",
          "3000",
          "4500",
        ],
        Le = function (e) {
          var t = r.a.useState(""),
            a = Object(s.a)(t, 2),
            n = a[0],
            o = a[1],
            l = r.a.useState(""),
            i = Object(s.a)(l, 2),
            c = i[0],
            m = i[1],
            u = r.a.useState(""),
            d = Object(s.a)(u, 2),
            p = d[0],
            g = d[1],
            y = r.a.useState(""),
            E = Object(s.a)(y, 2),
            v = E[0],
            x = E[1],
            k = r.a.useState(""),
            C = Object(s.a)(k, 2),
            T = C[0],
            j = C[1],
            S = r.a.useState(""),
            W = Object(s.a)(S, 2),
            A = W[0],
            M = W[1],
            B = r.a.useState(""),
            I = Object(s.a)(B, 2),
            P = I[0],
            D = I[1],
            z = r.a.useState(""),
            G = Object(s.a)(z, 2),
            Y = G[0],
            H = G[1],
            V = r.a.useState(""),
            Z = Object(s.a)(V, 2),
            X = Z[0],
            J = Z[1],
            K = r.a.useState(Oe[0]),
            _ = Object(s.a)(K, 2),
            Q = _[0],
            $ = _[1],
            ee = r.a.useState(""),
            ae = Object(s.a)(ee, 2),
            ne = ae[0],
            re = ae[1],
            oe = r.a.useState(Re[0]),
            le = Object(s.a)(oe, 2),
            ie = le[0],
            ce = le[1],
            se = r.a.useState(""),
            me = Object(s.a)(se, 2),
            ue = me[0],
            de = me[1],
            he = r.a.useState(Fe[0]),
            pe = Object(s.a)(he, 2),
            fe = pe[0],
            ge = pe[1],
            ye = r.a.useState(""),
            Ee = Object(s.a)(ye, 2),
            ve = Ee[0],
            be = Ee[1],
            we = r.a.useState(""),
            Ne = Object(s.a)(we, 2),
            xe = Ne[0],
            ke = Ne[1],
            Ce = r.a.useState(We[0]),
            Te = Object(s.a)(Ce, 2),
            Le = Te[0],
            Ae = Te[1],
            Me = r.a.useState(We[0]),
            Be = Object(s.a)(Me, 2),
            Ie = Be[0],
            Pe = Be[1],
            De = r.a.useState(Se[0]),
            qe = Object(s.a)(De, 2),
            ze = qe[0],
            Ge = qe[1],
            Ye = r.a.useState(""),
            Ue = Object(s.a)(Ye, 2),
            He = Ue[0],
            Ve = Ue[1],
            Ze = r.a.useState([]),
            Xe = Object(s.a)(Ze, 2),
            Je = Xe[0],
            Ke = Xe[1],
            _e = r.a.useState([]),
            Qe = Object(s.a)(_e, 2),
            $e = Qe[0],
            et = Qe[1],
            tt = r.a.useState([]),
            at = Object(s.a)(tt, 2),
            nt = at[0],
            rt = at[1],
            ot = r.a.useState(!1),
            lt = Object(s.a)(ot, 2),
            it = lt[0],
            ct = lt[1],
            st = r.a.useState(!1),
            mt = Object(s.a)(st, 2),
            ut = mt[0],
            dt = mt[1],
            ht = r.a.forwardRef(function (e, t) {
              return r.a.createElement(
                q.a,
                Object.assign({ elevation: 6, ref: t, variant: "filled" }, e)
              );
            }),
            pt = e.match.params.id;
          r.a.useEffect(
            function () {
              f.a
                .get(" /api/cars/" + pt, {
                  headers: { "x-access-token": localStorage.getItem("token") },
                })
                .then(function (e) {
                  var t = e.data,
                    a =
                      Fe[
                        Fe.findIndex(function (e) {
                          return e === t.engineType;
                        })
                      ];
                  console.log(a),
                    o(t.model),
                    m(t.price),
                    x(t.modelYear),
                    j(t.color),
                    M(t.registeredYear),
                    D(t.description),
                    H(t.version),
                    $(
                      Oe[
                        Oe.findIndex(function (e) {
                          return e === t.city;
                        })
                      ]
                    ),
                    re(t.mileage),
                    ce(
                      Re[
                        Re.findIndex(function (e) {
                          return e === t.engine;
                        })
                      ]
                    ),
                    ge(
                      Fe[
                        Fe.findIndex(function (e) {
                          return e === t.engineType;
                        })
                      ]
                    ),
                    ke(t.manufacturer),
                    Ae(
                      We[
                        We.findIndex(function (e) {
                          return e === t.assembly;
                        })
                      ]
                    ),
                    Ge(
                      Se[
                        Se.findIndex(function (e) {
                          return e === t.transmission;
                        })
                      ]
                    ),
                    et(t.images);
                });
            },
            [pt]
          );
          return r.a.createElement(
            "div",
            { style: { backgroundColor: "#F7F9F9", marginTop: "8rem" } },
            r.a.createElement(
              "div",
              {
                className: "container-fluid my-5",
                style: { backgroundColor: "#DCDCDC", height: "15em" },
              },
              r.a.createElement(
                "h1",
                { className: "center pt-4", style: { color: "#00008B" } },
                "Update Your Car's Record With Simple & Easy Steps"
              ),
              r.a.createElement(
                "h4",
                { className: "pt-3 center" },
                "It will take less than a minute"
              ),
              r.a.createElement(
                "div",
                { className: "d-flex justify-content-center pt-3" },
                r.a.createElement("img", {
                  className: "img-fluid",
                  style: { height: "4em", width: "4em" },
                  src: "https://wsa1.pakwheels.com/assets/sell-icons/car-221614dec8c0f3717dede556a5daad01.svg",
                  alt: "",
                }),
                r.a.createElement(
                  "h4",
                  { className: "mt-3 ml-3 mr-3" },
                  "Update Your Car Information"
                ),
                r.a.createElement("img", {
                  className: "img-fluid",
                  style: { height: "4em", width: "4em" },
                  src: "https://wsa1.pakwheels.com/assets/sell-icons/photos-708994063564767acaca738e1261f90d.svg",
                  alt: "",
                }),
                r.a.createElement(
                  "h4",
                  { className: "mt-3 ml-3 mr-3" },
                  "Update Photos "
                ),
                r.a.createElement("img", {
                  className: "img-fluid",
                  style: { height: "4em", width: "4em" },
                  src: "https://wsa4.pakwheels.com/assets/sell-icons/tag-3ba531fca999b37f89be28609fe9e9c0.svg",
                  alt: "",
                }),
                r.a.createElement(
                  "h4",
                  { className: "mt-3 ml-3 mr-3" },
                  "Update Selling Price"
                )
              )
            ),
            r.a.createElement(
              "h1",
              {
                className: "pt-3 center text-decoration-underline",
                style: {
                  color: "#228B22",
                  fontFamily: "Times New Roman",
                  fontWeight: "bold",
                },
              },
              "Update Car's Record"
            ),
            r.a.createElement(
              "div",
              { className: "mt-4" },
              r.a.createElement(
                "form",
                {
                  className: " mt-5 container",
                  onSubmit: function (e) {
                    if (
                      (e.preventDefault(),
                      "" !== n &&
                        "" !== c &&
                        "" !== v &&
                        "" !== T &&
                        "" !== A &&
                        "" !== P &&
                        "" !== Y &&
                        "" !== X &&
                        "" !== ne &&
                        "" !== ue &&
                        "" !== ve &&
                        "" !== xe &&
                        "" !== Ie &&
                        "" !== He)
                    ) {
                      var t = new FormData();
                      t.append("model", n),
                        t.append("price", c),
                        t.append("modelYear", v),
                        t.append("color", T),
                        t.append("registeredYear", A),
                        t.append("description", P),
                        t.append("version", Y),
                        t.append("city", X),
                        t.append("mileage", ne),
                        t.append("engine", ue),
                        t.append("engineType", ve),
                        t.append("manufacturer", xe),
                        t.append("assembly", Ie),
                        t.append("transmission", He),
                        t.append("salePrice", p),
                        t.append("oldImages", JSON.stringify($e)),
                        t.append("deleteImages", JSON.stringify(Je));
                      for (var a = 0; a < nt.length; a++)
                        t.append("newImages", nt[a]);
                      f()({
                        method: "put",
                        url: "/api/cars/" + pt,
                        data: t,
                        headers: {
                          "Content-Type": "multipart/form-data",
                          "x-access-token": localStorage.getItem("token"),
                        },
                      })
                        .then(function () {
                          dt(!0), (window.location.href = "/products");
                        })
                        .catch(function (e) {
                          console.log(e);
                        });
                    } else alert("Please enter all the required fields");
                  },
                  encType: "multipart/form-data",
                },
                r.a.createElement(
                  b.a,
                  { container: !0, spacing: 2 },
                  r.a.createElement(
                    b.a,
                    { item: !0, xs: 3 },
                    r.a.createElement(
                      w.a,
                      {
                        sx: {
                          width: 500,
                          maxWidth: "100%",
                          marginBottom: "2em",
                        },
                      },
                      r.a.createElement(N.a, {
                        value: xe,
                        onChange: function (e) {
                          ke(e.target.value);
                        },
                        fullWidth: !0,
                        required: !0,
                        label: "Manufacturer Company",
                        type: "text",
                      })
                    ),
                    r.a.createElement(
                      w.a,
                      {
                        sx: {
                          width: 500,
                          maxWidth: "100%",
                          marginBottom: "2em",
                        },
                      },
                      r.a.createElement(N.a, {
                        value: v,
                        onChange: function (e) {
                          x(e.target.value);
                        },
                        fullWidth: !0,
                        required: !0,
                        label: "Model Year",
                        type: "number",
                      })
                    ),
                    r.a.createElement(
                      w.a,
                      {
                        sx: {
                          width: 500,
                          maxWidth: "100%",
                          marginBottom: "2em",
                        },
                      },
                      r.a.createElement(N.a, {
                        value: T,
                        onChange: function (e) {
                          j(e.target.value);
                        },
                        fullWidth: !0,
                        required: !0,
                        label: "Exterior Color",
                        type: "text",
                      })
                    )
                  ),
                  r.a.createElement(
                    b.a,
                    { item: !0, xs: 3 },
                    r.a.createElement(
                      w.a,
                      {
                        sx: {
                          width: 500,
                          maxWidth: "100%",
                          marginBottom: "2em",
                        },
                      },
                      r.a.createElement(N.a, {
                        value: n,
                        onChange: function (e) {
                          o(e.target.value);
                        },
                        fullWidth: !0,
                        required: !0,
                        label: "Model / Name",
                        type: "text",
                      })
                    ),
                    r.a.createElement(U.a, {
                      value: ze,
                      onChange: function (e, t) {
                        Ge(t);
                      },
                      inputValue: He,
                      onInputChange: function (e, t) {
                        Ve(t);
                      },
                      id: "controllable-states-demo",
                      options: Se,
                      sx: { width: 500, maxWidth: "100%", marginBottom: "2em" },
                      fullWidth: !0,
                      renderInput: function (e) {
                        return r.a.createElement(
                          N.a,
                          Object.assign({}, e, { label: "Transmission of Car" })
                        );
                      },
                    }),
                    r.a.createElement(U.a, {
                      value: ie,
                      onChange: function (e, t) {
                        ce(t);
                      },
                      inputValue: ue,
                      onInputChange: function (e, t) {
                        de(t);
                      },
                      id: "controllable-states-demo",
                      options: Re,
                      sx: { width: 500, maxWidth: "100%", marginBottom: "2em" },
                      fullWidth: !0,
                      renderInput: function (e) {
                        return r.a.createElement(
                          N.a,
                          Object.assign({}, e, {
                            label: "Engine Displacement (cc)",
                          })
                        );
                      },
                    })
                  ),
                  r.a.createElement(
                    b.a,
                    { item: !0, xs: 3 },
                    r.a.createElement(
                      w.a,
                      {
                        sx: {
                          width: 500,
                          maxWidth: "100%",
                          marginBottom: "2em",
                        },
                      },
                      r.a.createElement(N.a, {
                        value: Y,
                        onChange: function (e) {
                          H(e.target.value);
                        },
                        fullWidth: !0,
                        required: !0,
                        label: "Version of Car",
                        type: "text",
                      })
                    ),
                    r.a.createElement(U.a, {
                      value: Q,
                      onChange: function (e, t) {
                        $(t);
                      },
                      inputValue: X,
                      onInputChange: function (e, t) {
                        J(t);
                      },
                      id: "controllable-states-demo",
                      options: Oe,
                      sx: { width: 500, maxWidth: "100%", marginBottom: "2em" },
                      fullWidth: !0,
                      renderInput: function (e) {
                        return r.a.createElement(
                          N.a,
                          Object.assign({}, e, { label: "Registered City" })
                        );
                      },
                    }),
                    r.a.createElement(U.a, {
                      value: fe,
                      onChange: function (e, t) {
                        ge(t);
                      },
                      inputValue: ve,
                      onInputChange: function (e, t) {
                        be(t);
                      },
                      id: "controllable-states-demo",
                      options: Fe,
                      sx: { width: 500, maxWidth: "100%", marginBottom: "2em" },
                      fullWidth: !0,
                      renderInput: function (e) {
                        return r.a.createElement(
                          N.a,
                          Object.assign({}, e, { label: "Engine Type" })
                        );
                      },
                    })
                  ),
                  r.a.createElement(
                    b.a,
                    { item: !0, xs: 3 },
                    r.a.createElement(
                      w.a,
                      {
                        sx: {
                          width: 500,
                          maxWidth: "100%",
                          marginBottom: "2em",
                        },
                      },
                      r.a.createElement(N.a, {
                        value: A,
                        onChange: function (e) {
                          M(e.target.value);
                        },
                        fullWidth: !0,
                        required: !0,
                        label: "Registered Year",
                        type: "number",
                      })
                    ),
                    r.a.createElement(
                      w.a,
                      {
                        sx: {
                          width: 500,
                          maxWidth: "100%",
                          marginBottom: "2em",
                        },
                      },
                      r.a.createElement(N.a, {
                        value: ne,
                        onChange: function (e) {
                          re(e.target.value);
                        },
                        label: "Mileage of car",
                        fullWidth: !0,
                        required: !0,
                        type: "number",
                        InputProps: {
                          startAdornment: r.a.createElement(
                            te.a,
                            { position: "start" },
                            "KM"
                          ),
                        },
                      })
                    ),
                    r.a.createElement(U.a, {
                      value: Le,
                      onChange: function (e, t) {
                        Ae(t);
                      },
                      inputValue: Ie,
                      onInputChange: function (e, t) {
                        Pe(t);
                      },
                      id: "controllable-states-demo",
                      options: We,
                      sx: { width: 500, maxWidth: "100%", marginBottom: "2em" },
                      fullWidth: !0,
                      renderInput: function (e) {
                        return r.a.createElement(
                          N.a,
                          Object.assign({}, e, { label: "Assembly Type" })
                        );
                      },
                    })
                  )
                ),
                r.a.createElement(
                  w.a,
                  {
                    sx: { width: 1200, maxWidth: "100%", marginBottom: "2em" },
                  },
                  r.a.createElement(N.a, {
                    value: c,
                    onChange: function (e) {
                      m(e.target.value);
                    },
                    fullWidth: !0,
                    required: !0,
                    label: "Price of Car",
                    type: "number",
                    InputProps: {
                      startAdornment: r.a.createElement(
                        te.a,
                        { position: "start" },
                        "PKR"
                      ),
                    },
                  })
                ),
                r.a.createElement(
                  w.a,
                  {
                    sx: { width: 1200, maxWidth: "100%", marginBottom: "2em" },
                  },
                  r.a.createElement(N.a, {
                    value: P,
                    onChange: function (e) {
                      D(e.target.value);
                    },
                    fullWidth: !0,
                    multiline: !0,
                    rows: 4,
                    required: !0,
                    label: "Description of car",
                    type: "text",
                  })
                ),
                r.a.createElement(
                  w.a,
                  { sx: { width: 500, maxWidth: "100%", marginBottom: "2em" } },
                  r.a.createElement(N.a, {
                    value: p || "",
                    onChange: function (e) {
                      g(e.target.value);
                    },
                    fullWidth: !0,
                    label: "Sold Price Of Car (if sold)",
                    type: "number",
                  })
                ),
                $e.map(function (e, t) {
                  return r.a.createElement(
                    "div",
                    { key: t, className: "mb-4" },
                    r.a.createElement("img", {
                      key: t,
                      style: { height: "10em", width: "15em" },
                      src: "/uploads/".concat(e),
                      alt: "pic",
                    }),
                    r.a.createElement(
                      "div",
                      null,
                      r.a.createElement(
                        h.a,
                        {
                          className: "mt-2",
                          variant: "contained",
                          color: "error",
                          startIcon: r.a.createElement(je.a, null),
                          onClick: function (e) {
                            var t =
                              e.target.parentNode.parentNode.childNodes[0].attributes[0].nodeValue.split(
                                "/"
                              );
                            Ke([].concat(Object(F.a)(Je), [t[t.length - 1]])),
                              et(
                                $e.filter(function (e) {
                                  return e !== t[t.length - 1];
                                })
                              );
                          },
                        },
                        " ",
                        "Delete"
                      )
                    )
                  );
                }),
                r.a.createElement(
                  "div",
                  { className: "mb-4" },
                  r.a.createElement(
                    O.a,
                    {
                      anchorOrigin: { vertical: "top", horizontal: "center" },
                      open: it,
                      TransitionComponent: R.a,
                    },
                    r.a.createElement(
                      ht,
                      {
                        severity: "error",
                        sx: { width: "50em" },
                        onClose: function () {
                          ct(!1);
                        },
                      },
                      r.a.createElement(L.a, null, "Alert"),
                      "Only Images Are Allowed"
                    )
                  ),
                  r.a.createElement(
                    O.a,
                    {
                      anchorOrigin: { vertical: "top", horizontal: "center" },
                      open: ut,
                      TransitionComponent: R.a,
                    },
                    r.a.createElement(
                      ht,
                      {
                        severity: "success",
                        sx: { width: "50em" },
                        onClose: function () {
                          dt(!1);
                        },
                      },
                      r.a.createElement(L.a, null, "Success"),
                      "Record has been updated successfully!!!!"
                    )
                  ),
                  r.a.createElement("input", {
                    multiple: !0,
                    type: "file",
                    onChange: function (e) {
                      e.preventDefault();
                      for (var t = e.target.files, a = 0; a < t.length; a++) {
                        if (!/image/.test(t[a].type))
                          return ct(!0), void (e.target.value = null);
                        rt(e.target.files);
                      }
                    },
                  })
                ),
                r.a.createElement(
                  "div",
                  { className: "mb-5" },
                  r.a.createElement(
                    h.a,
                    { variant: "outlined", size: "large", type: "submit" },
                    "Update & Continue"
                  )
                )
              )
            )
          );
        },
        Ae = a(118),
        Me = function (e) {
          var t = Object(n.useState)({}),
            a = Object(s.a)(t, 2),
            o = a[0],
            l = a[1],
            i = Object(n.useState)([]),
            c = Object(s.a)(i, 2),
            m = c[0],
            u = c[1],
            d = e.match.params.id;
          return (
            Object(n.useEffect)(
              function () {
                f.a
                  .get("/api/cars/" + d, {
                    headers: {
                      "x-access-token": localStorage.getItem("token"),
                    },
                  })
                  .then(function (e) {
                    l(e.data);
                  })
                  .catch(function (e) {
                    console.log(e);
                  });
              },
              [d]
            ),
            Object(n.useEffect)(
              function () {
                if (o.images) {
                  for (var e = [], t = 0; t < o.images.length; t++)
                    e.push(o.images[t]);
                  u(e);
                }
              },
              [o]
            ),
            r.a.createElement(
              "div",
              { style: { backgroundColor: "#F5F5F5", marginTop: "6rem" } },
              r.a.createElement(
                "div",
                { className: "container " },
                r.a.createElement(
                  b.a,
                  { className: "mt-5", container: !0, spacing: 2 },
                  r.a.createElement(
                    b.a,
                    {
                      className: "mb-5",
                      style: { backgroundColor: "white" },
                      item: !0,
                      xs: 7,
                    },
                    r.a.createElement(
                      "h2",
                      {
                        className: "pt-3",
                        style: {
                          color: "#228B22",
                          fontFamily: "Times New Roman",
                          fontWeight: "bold",
                        },
                      },
                      " ",
                      o.manufacturer,
                      " ",
                      o.model
                    ),
                    r.a.createElement(
                      "h4",
                      { style: { color: "#228B22" } },
                      o.city
                    ),
                    r.a.createElement(
                      "div",
                      {
                        id: "carouselExampleIndicators",
                        className: "carousel slide pt-5 pr-3",
                        "data-bs-ride": "carousel",
                      },
                      r.a.createElement(
                        "div",
                        { className: "carousel-indicators" },
                        r.a.createElement("button", {
                          type: "button",
                          "data-bs-target": "#carouselExampleIndicators",
                          "data-bs-slide-to": "0",
                          class: "active",
                          "aria-current": "true",
                        }),
                        m.slice(1).map(function (e, t) {
                          return r.a.createElement("button", {
                            key: t,
                            type: "button",
                            "data-bs-target": "#carouselExampleIndicators",
                            "data-bs-slide-to": t + 1,
                          });
                        })
                      ),
                      r.a.createElement(
                        "div",
                        { className: "carousel-inner" },
                        m.map(function (e, t) {
                          return 0 === t
                            ? r.a.createElement(
                                "div",
                                { key: t, className: "carousel-item active" },
                                r.a.createElement("img", {
                                  src: "/uploads/".concat(e),
                                  className: "d-block w-100",
                                  alt: "...",
                                })
                              )
                            : r.a.createElement(
                                "div",
                                { key: t, className: "carousel-item " },
                                r.a.createElement("img", {
                                  src: "/uploads/".concat(e),
                                  className: "d-block w-100",
                                  alt: "...",
                                })
                              );
                        })
                      ),
                      r.a.createElement(
                        "button",
                        {
                          className: "carousel-control-prev",
                          type: "button",
                          "data-bs-target": "#carouselExampleIndicators",
                          "data-bs-slide": "prev",
                        },
                        r.a.createElement(Ae.a, null)
                      ),
                      r.a.createElement(
                        "button",
                        {
                          className: "carousel-control-next",
                          type: "button",
                          "data-bs-target": "#carouselExampleIndicators",
                          "data-bs-slide": "next",
                        },
                        r.a.createElement(Ae.b, null)
                      )
                    ),
                    r.a.createElement(
                      "h3",
                      {
                        className: "pt-4",
                        style: {
                          color: "#228B22",
                          fontFamily: "Times New Roman",
                          fontWeight: "bold",
                        },
                      },
                      "Car's Specifications"
                    ),
                    r.a.createElement(
                      b.a,
                      { className: "pt-4", container: !0, spacing: 2 },
                      r.a.createElement(
                        b.a,
                        { item: !0, xs: 6 },
                        r.a.createElement(
                          "h5",
                          {
                            style: {
                              fontFamily: "Times New Roman ",
                              fontWeight: "bold",
                            },
                          },
                          "Model Year : ",
                          o.modelYear
                        ),
                        r.a.createElement("hr", null),
                        r.a.createElement(
                          "h5",
                          {
                            style: {
                              fontFamily: "Times New Roman ",
                              fontWeight: "bold",
                            },
                          },
                          "Registered Year : ",
                          o.registeredYear
                        ),
                        r.a.createElement("hr", null),
                        r.a.createElement(
                          "h5",
                          {
                            style: {
                              fontFamily: "Times New Roman ",
                              fontWeight: "bold",
                            },
                          },
                          "Version of Car : ",
                          o.version
                        ),
                        r.a.createElement("hr", null),
                        r.a.createElement(
                          "h5",
                          {
                            style: {
                              fontFamily: "Times New Roman ",
                              fontWeight: "bold",
                            },
                          },
                          "Color of Car : ",
                          o.color
                        ),
                        r.a.createElement("hr", null),
                        r.a.createElement(
                          "h5",
                          {
                            style: {
                              fontFamily: "Times New Roman ",
                              fontWeight: "bold",
                            },
                          },
                          "Engine Type : ",
                          o.engineType
                        )
                      ),
                      r.a.createElement(
                        b.a,
                        { item: !0, xs: 6 },
                        r.a.createElement(
                          "h5",
                          {
                            style: {
                              fontFamily: "Times New Roman ",
                              fontWeight: "bold",
                            },
                          },
                          "Registerd Location : ",
                          o.city
                        ),
                        r.a.createElement("hr", null),
                        r.a.createElement(
                          "h5",
                          {
                            style: {
                              fontFamily: "Times New Roman ",
                              fontWeight: "bold",
                            },
                          },
                          "Engine Capacity : ",
                          "".concat(o.engine, "cc")
                        ),
                        r.a.createElement("hr", null),
                        r.a.createElement(
                          "h5",
                          {
                            style: {
                              fontFamily: "Times New Roman ",
                              fontWeight: "bold",
                            },
                          },
                          "Car's Mileage : ",
                          "".concat(o.mileage, " KM")
                        ),
                        r.a.createElement("hr", null),
                        r.a.createElement(
                          "h5",
                          {
                            style: {
                              fontFamily: "Times New Roman ",
                              fontWeight: "bold",
                            },
                          },
                          "Car's Transmission : ",
                          o.transmission
                        ),
                        r.a.createElement("hr", null),
                        r.a.createElement(
                          "h5",
                          {
                            style: {
                              fontFamily: "Times New Roman ",
                              fontWeight: "bold",
                            },
                          },
                          "Assembly of Car : ",
                          o.assembly
                        )
                      )
                    ),
                    r.a.createElement("hr", null),
                    r.a.createElement(
                      "h4",
                      {
                        style: {
                          color: "#228B22",
                          fontFamily: "Times New Roman ",
                          fontWeight: "bold",
                        },
                        className: " pt-4 ",
                      },
                      "Description of Car"
                    ),
                    r.a.createElement(
                      "p",
                      { className: "container mb-5" },
                      o.description
                    )
                  ),
                  r.a.createElement(
                    b.a,
                    {
                      className: "ml-3 container",
                      style: { backgroundColor: "white", height: "35em" },
                      item: !0,
                      xs: 4,
                    },
                    r.a.createElement(
                      "div",
                      { className: "" },
                      r.a.createElement(
                        "h2",
                        {
                          style: {
                            color: "#228B22",
                            fontFamily: "Times New Roman",
                            fontWeight: "bold",
                          },
                        },
                        "Car's Price"
                      ),
                      r.a.createElement(
                        "h4",
                        {
                          style: {
                            color: "#228B22",
                            fontFamily: "Times New Roman",
                          },
                        },
                        o.price
                      )
                    ),
                    r.a.createElement("hr", {
                      className: "mr-3",
                      style: { color: "#32CD32" },
                    }),
                    r.a.createElement(
                      "div",
                      { className: "container center  " },
                      " ",
                      r.a.createElement(
                        "h4",
                        {
                          style: {
                            fontFamily: "Times New Roman",
                            color: "black",
                          },
                        },
                        "0310-4091437"
                      )
                    ),
                    r.a.createElement("hr", {
                      className: "mr-3",
                      style: { color: "#32CD32" },
                    }),
                    r.a.createElement(
                      "h3",
                      {
                        className: "",
                        style: {
                          color: "#228B22",
                          fontFamily: "Times New Roman",
                          fontWeight: "bold",
                        },
                      },
                      " ",
                      "Seller's Information"
                    ),
                    r.a.createElement("hr", {
                      className: "mr-3",
                      style: { color: "#32CD32" },
                    }),
                    r.a.createElement(
                      "h4",
                      {
                        style: {
                          color: "black",
                          fontFamily: "Times New Roman",
                        },
                      },
                      "John Smith"
                    ),
                    r.a.createElement(
                      "h4",
                      {
                        style: {
                          color: "black",
                          fontFamily: "Times New Roman",
                        },
                      },
                      "43-Main Boulevard-Samnabad Town, Lahore.",
                      " "
                    )
                  )
                )
              )
            )
          );
        },
        Be = a(153),
        Ie = a.n(Be),
        Pe = function (e) {
          var t = Object(n.useState)([]),
            a = Object(s.a)(t, 2),
            o = a[0],
            l = a[1],
            i = r.a.useState(!1),
            c = Object(s.a)(i, 2),
            m = c[0],
            u = c[1],
            d = Object(fe.a)(),
            p = Object(pe.a)(d.breakpoints.down("md")),
            g = function () {
              u(!1);
            };
          return (
            Object(n.useEffect)(function () {
              f.a
                .get(" /api/getProfile", {
                  headers: { "x-access-token": localStorage.getItem("token") },
                })
                .then(function (e) {
                  l(e.data.profile);
                })
                .catch(function (e) {
                  console.log(e);
                });
            }, []),
            r.a.createElement(
              "div",
              {
                className: "container",
                style: { marginTop: "5rem", marginBottom: "6rem" },
              },
              r.a.createElement("hr", null),
              r.a.createElement(
                "h1",
                {
                  style: {
                    color: "#228B22",
                    fontFamily: "Times New Roman",
                    fontWeight: "bold",
                  },
                },
                "Profile of User"
              ),
              r.a.createElement("hr", null),
              r.a.createElement("br", null),
              r.a.createElement("br", null),
              r.a.createElement(
                b.a,
                { container: !0, spacing: 2 },
                r.a.createElement(
                  b.a,
                  { item: !0, xs: 4.5 },
                  r.a.createElement("img", {
                    className: "img-fluid mt-3",
                    style: { height: "20em", width: "25em" },
                    src: "/uploads/".concat(o.portrait),
                    alt: "",
                  })
                ),
                r.a.createElement(
                  b.a,
                  { item: !0, xs: 7.5 },
                  r.a.createElement(
                    "h3",
                    {
                      style: {
                        color: "black",
                        fontFamily: "Times New Roman",
                        marginTop: "2rem",
                      },
                    },
                    "First Name : ",
                    o.fName
                  ),
                  r.a.createElement(
                    "h3",
                    {
                      style: { color: "black", fontFamily: "Times New Roman" },
                    },
                    "Last Name : ",
                    o.lName
                  ),
                  r.a.createElement(
                    "h3",
                    {
                      style: { color: "black", fontFamily: "Times New Roman" },
                    },
                    "Email Address : ",
                    o.email
                  ),
                  r.a.createElement(
                    "h3",
                    {
                      style: { color: "black", fontFamily: "Times New Roman" },
                    },
                    "Contact Number : +",
                    o.cNumber
                  ),
                  r.a.createElement(
                    "div",
                    { className: "mt-4" },
                    r.a.createElement(
                      h.a,
                      {
                        className: "mr-3",
                        variant: "contained",
                        color: "success",
                        startIcon: r.a.createElement(Ie.a, null),
                        onClick: function (t) {
                          e.history.push("/profile/update-profile");
                        },
                      },
                      "Edit"
                    ),
                    r.a.createElement(
                      h.a,
                      {
                        variant: "contained",
                        color: "error",
                        startIcon: r.a.createElement(je.a, null),
                        onClick: function () {
                          u(!0);
                        },
                      },
                      " ",
                      "Delete"
                    )
                  )
                )
              ),
              r.a.createElement(
                se.a,
                {
                  fullScreen: p,
                  open: m,
                  onClose: g,
                  "aria-labelledby": "responsive-dialog-title",
                },
                r.a.createElement(
                  he.a,
                  { id: "responsive-dialog-title" },
                  "Confirmation Message?"
                ),
                r.a.createElement(
                  ue.a,
                  null,
                  r.a.createElement(
                    de.a,
                    null,
                    "Are You sure , You want to delete your account!!!!"
                  )
                ),
                r.a.createElement(
                  me.a,
                  null,
                  r.a.createElement(
                    h.a,
                    { autoFocus: !0, onClick: g },
                    "Disagree"
                  ),
                  r.a.createElement(
                    h.a,
                    {
                      onClick: function (e) {
                        e.preventDefault(),
                          f.a
                            .delete(" /api/profile/" + o._id, {
                              headers: {
                                "x-access-token": localStorage.getItem("token"),
                              },
                            })
                            .then(function (e) {
                              console.log(e.data),
                                localStorage.removeItem("token"),
                                (window.location.href = "/"),
                                alert(
                                  "Your's account have been deleted successfully"
                                );
                            })
                            .catch(function (e) {
                              console.log(e);
                            });
                      },
                      autoFocus: !0,
                    },
                    "Agree"
                  )
                )
              )
            )
          );
        },
        De = Object(c.j)(function (e) {
          var t = e.user,
            a = e.history,
            n = e.onDelete,
            o = r.a.useState(!1),
            l = Object(s.a)(o, 2),
            i = l[0],
            c = l[1],
            m = Object(fe.a)(),
            u = Object(pe.a)(m.breakpoints.down("md")),
            d = function () {
              c(!1);
            };
          return r.a.createElement(
            "div",
            { className: "mb-5" },
            r.a.createElement(
              "div",
              {
                className: "border border-1 container mt-5",
                style: { backgroundColor: "#F5F5F5" },
              },
              r.a.createElement(
                b.a,
                { container: !0, spacing: 2 },
                r.a.createElement(
                  b.a,
                  { item: !0, xs: 3 },
                  r.a.createElement("img", {
                    className: "img-fluid",
                    style: { height: "15em ", width: "20em" },
                    src: "/uploads/" + t.portrait,
                    alt: "",
                  })
                ),
                r.a.createElement(
                  b.a,
                  { item: !0, xs: 8 },
                  r.a.createElement(
                    "div",
                    { className: "d-flex justify-content-end" },
                    r.a.createElement("i", {
                      className: "bi bi-pencil-square fa-2x",
                      style: { cursor: "pointer" },
                      onClick: function (e) {
                        e.preventDefault(),
                          a.push("/handle-users/update-client/" + t._id);
                      },
                    }),
                    r.a.createElement("i", {
                      className: " fas fa-times-circle fa-2x pt-2",
                      style: {
                        marginLeft: "0.5em",
                        cursor: "pointer",
                        color: "black",
                      },
                      onClick: function () {
                        c(!0);
                      },
                    })
                  ),
                  r.a.createElement(
                    "div",
                    { className: "" },
                    r.a.createElement(
                      "h5",
                      { style: { color: "#999999" } },
                      "First Name : ",
                      t.fName
                    ),
                    r.a.createElement(
                      "h5",
                      { style: { color: "#999999" } },
                      " Last Name : ",
                      t.lName
                    ),
                    r.a.createElement(
                      "h5",
                      { style: { color: "#999999" } },
                      "Contact Number : +",
                      t.cNumber
                    ),
                    r.a.createElement(
                      "h5",
                      { style: { color: "#999999" } },
                      "Email address : ",
                      t.email
                    )
                  )
                )
              )
            ),
            r.a.createElement(
              se.a,
              {
                fullScreen: u,
                open: i,
                onClose: d,
                "aria-labelledby": "responsive-dialog-title",
              },
              r.a.createElement(
                he.a,
                { id: "responsive-dialog-title" },
                "Confirmation Message?"
              ),
              r.a.createElement(
                ue.a,
                null,
                r.a.createElement(
                  de.a,
                  null,
                  "Are You sure , You want to delete this User!!!!"
                )
              ),
              r.a.createElement(
                me.a,
                null,
                r.a.createElement(
                  h.a,
                  { autoFocus: !0, onClick: d },
                  "Disagree"
                ),
                r.a.createElement(
                  h.a,
                  {
                    onClick: function (e) {
                      e.preventDefault(),
                        f.a
                          .delete(" /api/profile/" + t._id, {
                            headers: {
                              "x-access-token": localStorage.getItem("token"),
                            },
                          })
                          .then(function (e) {
                            console.log(e.data), n();
                          })
                          .catch(function (e) {
                            console.log(e);
                          });
                    },
                    autoFocus: !0,
                  },
                  "Agree"
                )
              )
            )
          );
        }),
        qe = function () {
          var e = Object(n.useState)([]),
            t = Object(s.a)(e, 2),
            a = t[0],
            o = t[1],
            l = Object(n.useState)(""),
            i = Object(s.a)(l, 2),
            c = i[0],
            m = i[1],
            u = Object(n.useState)({ start: 0, end: 5 }),
            d = Object(s.a)(u, 2),
            p = d[0],
            g = d[1],
            y = function () {
              f.a
                .get("/api/getClients", {
                  headers: { "x-access-token": localStorage.getItem("token") },
                })
                .then(function (e) {
                  o(e.data.data);
                })
                .catch(function (e) {
                  console.log(e);
                });
            };
          return (
            Object(n.useEffect)(function () {
              y();
            }, []),
            r.a.createElement(
              "div",
              { style: { marginTop: "6rem" } },
              r.a.createElement(
                "h1",
                { className: "mt-5 center", style: { color: "#228B22" } },
                "All Records of Registered Users"
              ),
              r.a.createElement(
                "div",
                { className: "mt-5 container" },
                r.a.createElement(
                  b.a,
                  { container: !0, spacing: 2 },
                  r.a.createElement(
                    b.a,
                    { item: !0, xs: 6 },
                    r.a.createElement(
                      w.a,
                      { sx: { width: 500, maxWidth: "100%" } },
                      r.a.createElement(N.a, {
                        value: c,
                        onChange: function (e) {
                          m(e.target.value);
                        },
                        fullWidth: !0,
                        label: " Search by email",
                      })
                    )
                  )
                ),
                r.a.createElement(
                  h.a,
                  {
                    className: "mt-4 mb-5",
                    variant: "contained",
                    color: "success",
                    size: "large",
                    type: "submit",
                    onClick: function (e) {
                      e.preventDefault(),
                        f()({
                          method: "post",
                          headers: {
                            "x-access-token": localStorage.getItem("token"),
                          },
                          url: "/api/searchClients",
                          data: { email: c },
                        })
                          .then(function (e) {
                            return o(e.data.users);
                          })
                          .catch(function (e) {
                            return console.log(e);
                          });
                    },
                  },
                  "Search"
                )
              ),
              0 === a.length
                ? r.a.createElement(
                    ye.a,
                    {
                      className: "d-flex justify-content-center mb-5",
                      sx: { color: "grey.500" },
                      spacing: 2,
                      direction: "row",
                    },
                    r.a.createElement(Ee.a, { color: "success" })
                  )
                : r.a.createElement(
                    "div",
                    null,
                    a.slice(p.start, p.end).map(function (e, t) {
                      return r.a.createElement(De, {
                        key: t,
                        user: e,
                        onDelete: y,
                      });
                    })
                  ),
              r.a.createElement(be, {
                showPerPage: 5,
                onPaginationChange: function (e, t) {
                  g({ start: e, end: t });
                },
                total: a.length,
              })
            )
          );
        },
        ze = a(289),
        Ge = function (e) {
          var t = r.a.useState(""),
            a = Object(s.a)(t, 2),
            n = a[0],
            o = a[1],
            l = r.a.useState(""),
            i = Object(s.a)(l, 2),
            c = i[0],
            m = i[1],
            u = r.a.useState(""),
            d = Object(s.a)(u, 2),
            p = d[0],
            g = d[1],
            y = r.a.useState(""),
            E = Object(s.a)(y, 2),
            v = E[0],
            b = E[1],
            w = r.a.useState(),
            x = Object(s.a)(w, 2),
            k = x[0],
            C = x[1],
            T = r.a.useState(""),
            j = Object(s.a)(T, 2),
            S = j[0],
            F = j[1],
            W = r.a.useState(!1),
            A = Object(s.a)(W, 2),
            M = A[0],
            B = A[1],
            I = r.a.useState(!1),
            P = Object(s.a)(I, 2),
            D = P[0],
            z = P[1],
            G = r.a.forwardRef(function (e, t) {
              return r.a.createElement(
                q.a,
                Object.assign({ elevation: 6, ref: t, variant: "filled" }, e)
              );
            });
          r.a.useEffect(
            function () {
              f.a
                .get(" /api/getProfile", {
                  headers: { "x-access-token": localStorage.getItem("token") },
                })
                .then(function (e) {
                  var t = e.data.profile;
                  F(t._id), o(t.fName), m(t.lName), g(t.email), b(t.cNumber);
                });
            },
            [S]
          );
          return r.a.createElement(
            "div",
            { className: "container ", style: { marginTop: "6rem" } },
            r.a.createElement(
              "h1",
              {
                className: "center",
                style: {
                  color: "#228B22",
                  fontFamily: "Times New Roman",
                  fontWeight: "bold",
                },
              },
              "Update Your Profile"
            ),
            r.a.createElement(
              "div",
              { className: " mt-4  container-fluid " },
              r.a.createElement(
                "div",
                {
                  className: "d-flex pb-5  justify-content-center  container",
                  style: { backgroundColor: "white" },
                },
                r.a.createElement(
                  "form",
                  {
                    className: " mt-5 justify-content-center",
                    onSubmit: function (e) {
                      if (
                        (e.preventDefault(),
                        "" !== n && "" !== c && "" !== p && "" !== v)
                      ) {
                        var t = new FormData();
                        t.append("fName", n),
                          t.append("lName", c),
                          t.append("email", p),
                          t.append("cNumber", v),
                          t.append("portrait", k),
                          f()({
                            method: "put",
                            url: "/api/profile/" + S,
                            data: t,
                            headers: {
                              "Content-Type": "multipart/form-data",
                              "x-access-token": localStorage.getItem("token"),
                            },
                          })
                            .then(function (e) {
                              z(!0), (window.location.href = "/profile");
                            })
                            .catch(function (e) {
                              console.log(e);
                            });
                      }
                    },
                  },
                  r.a.createElement(
                    ze.a,
                    {
                      sx: { width: 500, maxWidth: "100%", marginBottom: "2em" },
                    },
                    r.a.createElement(N.a, {
                      value: n || "",
                      fullWidth: !0,
                      label: "First Name",
                      required: !0,
                      type: "text",
                      id: "fullWidth",
                      onChange: function (e) {
                        o(e.target.value);
                      },
                    })
                  ),
                  r.a.createElement(
                    ze.a,
                    {
                      sx: { width: 500, maxWidth: "100%", marginBottom: "2em" },
                    },
                    r.a.createElement(N.a, {
                      value: c || "",
                      fullWidth: !0,
                      label: "Last Name",
                      required: !0,
                      type: "text",
                      id: "fullWidth",
                      onChange: function (e) {
                        m(e.target.value);
                      },
                    })
                  ),
                  r.a.createElement(
                    ze.a,
                    {
                      sx: { width: 500, maxWidth: "100%", marginBottom: "2em" },
                    },
                    r.a.createElement(N.a, {
                      value: p || "",
                      fullWidth: !0,
                      label: "Email address",
                      required: !0,
                      disabled: !0,
                      type: "text",
                      id: "fullWidth",
                      onChange: function (e) {
                        g(e.target.value);
                      },
                    })
                  ),
                  r.a.createElement(
                    ze.a,
                    {
                      sx: { width: 500, maxWidth: "100%", marginBottom: "2em" },
                    },
                    r.a.createElement(N.a, {
                      value: v || "",
                      fullWidth: !0,
                      label: "Contact Number",
                      required: !0,
                      type: "text",
                      id: "fullWidth",
                      onChange: function (e) {
                        b(e.target.value);
                      },
                    })
                  ),
                  r.a.createElement(
                    "div",
                    { className: "mb-4" },
                    r.a.createElement(
                      O.a,
                      {
                        anchorOrigin: { vertical: "top", horizontal: "center" },
                        open: M,
                        TransitionComponent: R.a,
                      },
                      r.a.createElement(
                        G,
                        {
                          severity: "error",
                          sx: { width: "50em" },
                          onClose: function () {
                            B(!1);
                          },
                        },
                        r.a.createElement(L.a, null, "Error"),
                        "Only Images are allowed"
                      )
                    ),
                    r.a.createElement("input", {
                      type: "file",
                      onChange: function (e) {
                        e.preventDefault();
                        for (var t = e.target.files, a = 0; a < t.length; a++) {
                          if (!/image/.test(t[a].type))
                            return B(!0), void (e.target.value = null);
                          C(e.target.files);
                        }
                      },
                    })
                  ),
                  r.a.createElement(
                    h.a,
                    {
                      size: "large",
                      variant: "contained",
                      color: "success",
                      endIcon: r.a.createElement(ee.a, null),
                      type: "submit",
                    },
                    "Update & Continue"
                  ),
                  r.a.createElement(
                    O.a,
                    {
                      anchorOrigin: { vertical: "top", horizontal: "center" },
                      open: D,
                      TransitionComponent: R.a,
                    },
                    r.a.createElement(
                      G,
                      {
                        severity: "success",
                        sx: { width: "50em" },
                        onClose: function () {
                          z(!1);
                        },
                      },
                      r.a.createElement(L.a, null, "Success"),
                      "Profile has been updated successfully!!"
                    )
                  )
                )
              )
            )
          );
        },
        Ye = function (e) {
          var t = r.a.useState(""),
            a = Object(s.a)(t, 2),
            n = a[0],
            o = a[1],
            l = r.a.useState(""),
            i = Object(s.a)(l, 2),
            c = i[0],
            m = i[1],
            u = r.a.useState(""),
            d = Object(s.a)(u, 2),
            p = d[0],
            g = d[1],
            y = r.a.useState(""),
            E = Object(s.a)(y, 2),
            v = E[0],
            b = E[1],
            w = r.a.useState(""),
            x = Object(s.a)(w, 2),
            k = x[0],
            C = x[1],
            T = r.a.useState(!1),
            j = Object(s.a)(T, 2),
            S = j[0],
            F = j[1],
            W = r.a.useState(!1),
            A = Object(s.a)(W, 2),
            M = A[0],
            B = A[1],
            I = e.match.params.id;
          r.a.useEffect(
            function () {
              f.a
                .get(" /api/getClient/" + I, {
                  headers: { "x-access-token": localStorage.getItem("token") },
                })
                .then(function (e) {
                  var t = e.data.data;
                  o(t.fName), m(t.lName), g(t.email), b(t.cNumber);
                });
            },
            [I]
          );
          var P = r.a.forwardRef(function (e, t) {
              return r.a.createElement(
                q.a,
                Object.assign({ elevation: 6, ref: t, variant: "filled" }, e)
              );
            }),
            D = function (e) {
              if (
                (e.preventDefault(),
                "" !== n && "" !== c && "" !== p && "" !== v)
              ) {
                var t = new FormData();
                t.append("fName", n),
                  t.append("lName", c),
                  t.append("email", p),
                  t.append("cNumber", v),
                  t.append("portrait", k),
                  f()({
                    method: "put",
                    url: "/api/profile/" + I,
                    data: t,
                    headers: {
                      "Content-Type": "multipart/form-data",
                      "x-access-token": localStorage.getItem("token"),
                    },
                  })
                    .then(function () {
                      B(!0), (window.location.href = "/handle-users");
                    })
                    .catch(function (e) {
                      console.log(e);
                    });
              } else alert("Please enter all the fields");
            };
          return r.a.createElement(
            "div",
            { className: "container mt-5" },
            r.a.createElement(
              "h1",
              {
                className: "center mt-5",
                style: {
                  color: "#228B22",
                  fontFamily: "Times New Roman",
                  fontWeight: "bold",
                },
              },
              "Update Your Client's Profile"
            ),
            r.a.createElement(
              "div",
              { className: " mt-4  container-fluid " },
              r.a.createElement(
                "div",
                {
                  className: "d-flex pb-5  justify-content-center  container",
                  style: { backgroundColor: "white" },
                },
                r.a.createElement(
                  "form",
                  { className: " mt-5 justify-content-center", onSubmit: D },
                  r.a.createElement(
                    ze.a,
                    {
                      sx: { width: 500, maxWidth: "100%", marginBottom: "2em" },
                    },
                    r.a.createElement(N.a, {
                      value: n || "",
                      fullWidth: !0,
                      label: "First Name",
                      required: !0,
                      type: "text",
                      id: "fullWidth",
                      onChange: function (e) {
                        o(e.target.value);
                      },
                    })
                  ),
                  r.a.createElement(
                    ze.a,
                    {
                      sx: { width: 500, maxWidth: "100%", marginBottom: "2em" },
                    },
                    r.a.createElement(N.a, {
                      value: c || "",
                      fullWidth: !0,
                      label: "Last Name",
                      required: !0,
                      type: "text",
                      id: "fullWidth",
                      onChange: function (e) {
                        m(e.target.value);
                      },
                    })
                  ),
                  r.a.createElement(
                    ze.a,
                    {
                      sx: { width: 500, maxWidth: "100%", marginBottom: "2em" },
                    },
                    r.a.createElement(N.a, {
                      value: p || "",
                      fullWidth: !0,
                      label: "Email address",
                      required: !0,
                      type: "text",
                      id: "fullWidth",
                      onChange: function (e) {
                        g(e.target.value);
                      },
                    })
                  ),
                  r.a.createElement(
                    ze.a,
                    {
                      sx: { width: 500, maxWidth: "100%", marginBottom: "2em" },
                    },
                    r.a.createElement(N.a, {
                      value: v || "",
                      fullWidth: !0,
                      label: "Contact Number",
                      required: !0,
                      type: "text",
                      id: "fullWidth",
                      onChange: function (e) {
                        b(e.target.value);
                      },
                    }),
                    r.a.createElement(
                      O.a,
                      {
                        anchorOrigin: { vertical: "top", horizontal: "center" },
                        open: S,
                        TransitionComponent: R.a,
                      },
                      r.a.createElement(
                        P,
                        {
                          severity: "error",
                          sx: { width: "50em" },
                          onClose: function () {
                            F(!1);
                          },
                        },
                        r.a.createElement(L.a, null, "Alert"),
                        "Only Images Are Allowed"
                      )
                    ),
                    r.a.createElement(
                      O.a,
                      {
                        anchorOrigin: { vertical: "top", horizontal: "center" },
                        open: M,
                        TransitionComponent: R.a,
                      },
                      r.a.createElement(
                        P,
                        {
                          severity: "success",
                          sx: { width: "50em" },
                          onClose: function () {
                            B(!1);
                          },
                        },
                        r.a.createElement(L.a, null, "Success"),
                        "Client's Profile has been updated successfully!!"
                      )
                    ),
                    r.a.createElement("input", {
                      className: "mt-4",
                      type: "file",
                      onChange: function (e) {
                        e.preventDefault();
                        for (var t = e.target.files, a = 0; a < t.length; a++) {
                          if (!/image/.test(t[a].type))
                            return F(!0), void (e.target.value = null);
                          C(e.target.files[0]);
                        }
                      },
                    })
                  ),
                  r.a.createElement(
                    h.a,
                    { variant: "outlined", onClick: D },
                    "Update & Continue"
                  )
                )
              )
            )
          );
        },
        Ue = function (e) {
          function t(e) {
            (e.target.style.background = "#228B22"),
              (e.target.style.color = "white"),
              (e.target.style.height = "2em");
          }
          function a(e) {
            (e.target.style.background = "white"),
              (e.target.style.color = "black");
          }
          return r.a.createElement(
            "div",
            { className: "mb-5", style: { marginTop: "6rem" } },
            r.a.createElement(
              "div",
              { className: "container" },
              r.a.createElement(
                "h1",
                {
                  style: {
                    fontSize: "50px",
                    fontFamily: "Times New Roman",
                    fontWeight: "bold",
                  },
                },
                "Our Services"
              ),
              r.a.createElement("hr", null),
              r.a.createElement(
                b.a,
                { container: !0, spacing: 2 },
                r.a.createElement(
                  b.a,
                  { item: !0, xs: 3 },
                  r.a.createElement(
                    "h3",
                    {
                      style: {
                        paddingLeft: "15px",
                        paddingTop: "9px",
                        cursor: "pointer",
                        fontFamily: "Times New Roman",
                      },
                      onMouseEnter: t,
                      onMouseLeave: a,
                      onClick: function (t) {
                        t.preventDefault(), e.history.push("/service");
                      },
                    },
                    "History Check"
                  ),
                  r.a.createElement(
                    "h3",
                    {
                      style: {
                        color: "white",
                        backgroundColor: "#228B22",
                        height: "2em",
                        paddingTop: "9px",
                        cursor: "pointer",
                        paddingLeft: "15px",
                        fontFamily: "Times New Roman",
                      },
                      onClick: function (t) {
                        t.preventDefault(),
                          e.history.push("/service-buyer-guide");
                      },
                    },
                    "Buyer's Guide"
                  ),
                  r.a.createElement(
                    "h3",
                    {
                      style: {
                        paddingLeft: "15px",
                        paddingTop: "9px",
                        cursor: "pointer",
                        fontFamily: "Times New Roman",
                      },
                      onMouseEnter: t,
                      onMouseLeave: a,
                      onClick: function (t) {
                        t.preventDefault(),
                          e.history.push("/service-car-check");
                      },
                    },
                    "Car Check"
                  ),
                  r.a.createElement(
                    "h3",
                    {
                      style: {
                        paddingLeft: "15px",
                        paddingTop: "9px",
                        cursor: "pointer",
                        fontFamily: "Times New Roman",
                      },
                      onClick: function (t) {
                        t.preventDefault(),
                          e.history.push("/service-car-insurance");
                      },
                      onMouseEnter: t,
                      onMouseLeave: a,
                    },
                    "Car Insurance"
                  ),
                  r.a.createElement(
                    "h3",
                    {
                      style: {
                        paddingLeft: "15px",
                        paddingTop: "9px",
                        cursor: "pointer",
                        fontFamily: "Times New Roman",
                      },
                      onClick: function (t) {
                        t.preventDefault(),
                          e.history.push("/service-customer-support");
                      },
                      onMouseEnter: t,
                      onMouseLeave: a,
                    },
                    "Customer Support"
                  ),
                  r.a.createElement(
                    "h3",
                    {
                      style: {
                        paddingLeft: "15px",
                        paddingTop: "9px",
                        cursor: "pointer",
                        fontFamily: "Times New Roman",
                      },
                      onClick: function (t) {
                        t.preventDefault(),
                          e.history.push("/service-warrenty-programe");
                      },
                      onMouseEnter: t,
                      onMouseLeave: a,
                    },
                    "Warrenty Programs"
                  )
                ),
                r.a.createElement(
                  b.a,
                  { item: !0, xs: 9 },
                  r.a.createElement(
                    "div",
                    { className: "container" },
                    r.a.createElement(
                      "h2",
                      {
                        style: {
                          fontFamily: "Times New Roman",
                          fontWeight: "bold",
                        },
                      },
                      "Buyer's Guide"
                    ),
                    r.a.createElement(
                      b.a,
                      { container: !0, spacing: 2 },
                      r.a.createElement(
                        b.a,
                        { item: !0, xs: 6 },
                        r.a.createElement("img", {
                          style: { width: "20em" },
                          className: "mt-3 img-fluid",
                          src: "https://livedemo00.template-help.com/wt_59051/images/services-02-370x220.jpg",
                          alt: "",
                        }),
                        r.a.createElement("img", {
                          style: { width: "20em" },
                          className: "mt-5 img-fluid",
                          src: "https://livedemo00.template-help.com/wt_59051/images/services-03-370x220.jpg",
                          alt: "",
                        }),
                        r.a.createElement("img", {
                          style: { width: "20em" },
                          className: "mt-5 img-fluid",
                          src: "https://livedemo00.template-help.com/wt_59051/images/services-04-370x220.jpg",
                          alt: "",
                        })
                      ),
                      r.a.createElement(
                        b.a,
                        { item: !0, xs: 6 },
                        r.a.createElement(
                          "h4",
                          {
                            className: "mt-2",
                            style: {
                              color: "#228B22",
                              fontFamily: "Times New Roman",
                            },
                          },
                          "Select a car type"
                        ),
                        r.a.createElement(
                          "h5",
                          { style: { fontFamily: "Times New Roman" } },
                          "To decide which car to buy, you need to select a car type you would like to buy using our services. Afterward, gather as much information as you can about each vehicle to compare them in several important areas, such as driving experience, reliability, fuel economy etc."
                        ),
                        r.a.createElement(
                          "h4",
                          {
                            className: "mt-5",
                            style: {
                              color: "#228B22",
                              fontFamily: "Times New Roman",
                            },
                          },
                          "Visit your Car Dealer"
                        ),
                        r.a.createElement(
                          "h5",
                          { style: { fontFamily: "Times New Roman" } },
                          "To accurately compare one car with another, you should test drive all of your candidate vehicles on the same day, preferably on the same or similar roads. An auto mall is a very efficient place to conduct your test drives, even if you don\u2019t end up buying from there."
                        ),
                        r.a.createElement(
                          "h4",
                          {
                            className: "mt-5",
                            style: {
                              color: "#228B22",
                              fontFamily: "Times New Roman",
                            },
                          },
                          "Negotiate a price"
                        ),
                        r.a.createElement(
                          "h5",
                          { style: { fontFamily: "Times New Roman" } },
                          "The first thing to remember when negotiating your future car price - don\u2019t get easily manipulated with numbers \u2013 it can result in overpaying for your vehicle. Using the monthly payment as the focus, the salesperson can lump the whole process together, including the price for the new vehicle."
                        )
                      )
                    ),
                    r.a.createElement(
                      h.a,
                      {
                        className: "mt-3",
                        variant: "contained",
                        color: "success",
                        onClick: function (t) {
                          t.preventDefault(), e.history.push("/products");
                        },
                        size: "large",
                      },
                      "Select a Car"
                    )
                  )
                )
              )
            )
          );
        },
        He = function (e) {
          function t(e) {
            (e.target.style.background = "#228B22"),
              (e.target.style.color = "white"),
              (e.target.style.height = "2em");
          }
          function a(e) {
            (e.target.style.background = "white"),
              (e.target.style.color = "black");
          }
          return r.a.createElement(
            "div",
            { className: "mb-5", style: { marginTop: "6rem" } },
            r.a.createElement(
              "div",
              { className: "container" },
              r.a.createElement(
                "h1",
                {
                  style: {
                    fontSize: "50px",
                    fontFamily: "Times New Roman",
                    fontWeight: "bold",
                  },
                },
                "Our Services"
              ),
              r.a.createElement("hr", null),
              r.a.createElement(
                b.a,
                { container: !0, spacing: 2 },
                r.a.createElement(
                  b.a,
                  { item: !0, xs: 3 },
                  r.a.createElement(
                    "h3",
                    {
                      style: {
                        paddingLeft: "15px",
                        paddingTop: "9px",
                        cursor: "pointer",
                        fontFamily: "Times New Roman",
                      },
                      onMouseEnter: t,
                      onMouseLeave: a,
                      onClick: function (t) {
                        t.preventDefault(), e.history.push("/service");
                      },
                    },
                    "History Check"
                  ),
                  r.a.createElement(
                    "h3",
                    {
                      style: {
                        paddingLeft: "15px",
                        paddingTop: "9px",
                        cursor: "pointer",
                        fontFamily: "Times New Roman",
                      },
                      onMouseEnter: t,
                      onMouseLeave: a,
                      onClick: function (t) {
                        t.preventDefault(),
                          e.history.push("/service-buyer-guide");
                      },
                    },
                    "Buyer's Guide"
                  ),
                  r.a.createElement(
                    "h3",
                    {
                      style: {
                        color: "white",
                        backgroundColor: "#228B22",
                        height: "2em",
                        paddingTop: "9px",
                        paddingLeft: "15px",
                        cursor: "pointer",
                        fontFamily: "Times New Roman",
                      },
                      onClick: function (t) {
                        t.preventDefault(),
                          e.history.push("/service-car-check");
                      },
                    },
                    "Car Check"
                  ),
                  r.a.createElement(
                    "h3",
                    {
                      style: {
                        paddingLeft: "15px",
                        paddingTop: "9px",
                        cursor: "pointer",
                        fontFamily: "Times New Roman",
                      },
                      onClick: function (t) {
                        t.preventDefault(),
                          e.history.push("/service-car-insurance");
                      },
                      onMouseEnter: t,
                      onMouseLeave: a,
                    },
                    "Car Insurance"
                  ),
                  r.a.createElement(
                    "h3",
                    {
                      style: {
                        paddingLeft: "15px",
                        paddingTop: "9px",
                        cursor: "pointer",
                        fontFamily: "Times New Roman",
                      },
                      onClick: function (t) {
                        t.preventDefault(),
                          e.history.push("/service-customer-support");
                      },
                      onMouseEnter: t,
                      onMouseLeave: a,
                    },
                    "Customer Support"
                  ),
                  r.a.createElement(
                    "h3",
                    {
                      style: {
                        paddingLeft: "15px",
                        paddingTop: "9px",
                        cursor: "pointer",
                        fontFamily: "Times New Roman",
                      },
                      onClick: function (t) {
                        t.preventDefault(),
                          e.history.push("/service-warrenty-programe");
                      },
                      onMouseEnter: t,
                      onMouseLeave: a,
                    },
                    "Warrenty Programs"
                  )
                ),
                r.a.createElement(
                  b.a,
                  { item: !0, xs: 9 },
                  r.a.createElement(
                    "div",
                    { className: "container" },
                    r.a.createElement(
                      "h2",
                      {
                        style: {
                          fontFamily: "Times New Roman",
                          fontWeight: "bold",
                        },
                      },
                      "Detailed Features"
                    ),
                    r.a.createElement(
                      b.a,
                      { container: !0, spacing: 2 },
                      r.a.createElement(
                        b.a,
                        { item: !0, xs: 6 },
                        r.a.createElement("img", {
                          style: { width: "25em" },
                          className: "mt-3 img-fluid",
                          src: "https://livedemo00.template-help.com/wt_59051/images/services-05-370x250.jpg",
                          alt: "",
                        }),
                        r.a.createElement(
                          "h3",
                          {
                            className: "mt-4",
                            style: {
                              color: "#228B22 ",
                              fontFamily: "Times New Roman",
                            },
                          },
                          "Why Consider Our Car Check?"
                        ),
                        r.a.createElement(
                          "h5",
                          {
                            className: "mt-3",
                            style: { fontFamily: "Times New Roman" },
                          },
                          "If you prefer buying a used car instead of a new one, you can certainly save a lot. But don\u2019t forget that car check becomes more than just a recommended procedure in such case. Our car check service is perfectly designed for checking both modern cars (manufactured since 2010) and used cars of previous years."
                        )
                      ),
                      r.a.createElement(
                        b.a,
                        { item: !0, xs: 6 },
                        r.a.createElement("img", {
                          style: { width: "25em" },
                          className: "mt-3 ml-3 img-fluid",
                          src: "https://livedemo00.template-help.com/wt_59051/images/services-06-370x250.jpg",
                          alt: "",
                        }),
                        r.a.createElement(
                          "h3",
                          {
                            className: "mt-4 ml-3",
                            style: {
                              color: "#228B22",
                              fontFamily: "Times New Roman",
                            },
                          },
                          "Make sure car drive is safe"
                        ),
                        r.a.createElement(
                          "h5",
                          {
                            className: "mt-3 ml-3",
                            style: { fontFamily: "Times New Roman" },
                          },
                          "While some companies limit their range of services to a simple vehicle history check, we go further and offer our clients technical inspection and check of every car unit. It is done for deeper understanding that we provide our clients with high-quality cars without any breakages that can limit their performance."
                        )
                      )
                    ),
                    r.a.createElement(
                      "h3",
                      {
                        style: {
                          color: "#228B22 ",
                          fontFamily: "Times New Roman",
                        },
                        className: "mt-5",
                      },
                      "Checking Your Car\u2019s State"
                    ),
                    r.a.createElement(
                      "h5",
                      { style: { fontFamily: "Times New Roman" } },
                      "In order to be sure you are buying a legal car that has no violations, we offer you our car check services that not only include extensive vehicle history check but also complete technical examination of the car. This service allows our customers to make a reasonable choice based on correct information provided by our specialists. We hire certified experts to make a detailed estimate of your car which includes:"
                    )
                  )
                )
              )
            )
          );
        },
        Ve = function (e) {
          function t(e) {
            (e.target.style.background = "#228B22"),
              (e.target.style.color = "white"),
              (e.target.style.height = "2em");
          }
          console.log(e.location.state);
          function a(e) {
            (e.target.style.background = "white"),
              (e.target.style.color = "black");
          }
          var n = r.a.useState(""),
            o = Object(s.a)(n, 2),
            l = o[0],
            i = o[1],
            c = r.a.useState(""),
            m = Object(s.a)(c, 2),
            u = m[0],
            d = m[1];
          return r.a.createElement(
            "div",
            { className: "mb-5", style: { marginTop: "6rem" } },
            r.a.createElement(
              "div",
              { className: "container" },
              r.a.createElement(
                "h1",
                {
                  style: {
                    fontSize: "50px",
                    fontFamily: "Times New Roman",
                    fontWeight: "bold",
                  },
                },
                "Our Services"
              ),
              r.a.createElement("hr", null),
              r.a.createElement(
                b.a,
                { container: !0, spacing: 2 },
                r.a.createElement(
                  b.a,
                  { item: !0, xs: 3 },
                  r.a.createElement(
                    "h3",
                    {
                      style: {
                        paddingLeft: "15px",
                        paddingTop: "9px",
                        cursor: "pointer",
                        fontFamily: "Times New Roman",
                      },
                      onMouseEnter: t,
                      onMouseLeave: a,
                      onClick: function (t) {
                        t.preventDefault(), e.history.push("/service");
                      },
                    },
                    "History Check"
                  ),
                  r.a.createElement(
                    "h3",
                    {
                      style: {
                        paddingLeft: "15px",
                        paddingTop: "9px",
                        cursor: "pointer",
                        fontFamily: "Times New Roman",
                      },
                      onMouseEnter: t,
                      onMouseLeave: a,
                      onClick: function (t) {
                        t.preventDefault(),
                          e.history.push("/service-buyer-guide");
                      },
                    },
                    "Buyer's Guide"
                  ),
                  r.a.createElement(
                    "h3",
                    {
                      style: {
                        paddingLeft: "15px",
                        paddingTop: "9px",
                        cursor: "pointer",
                        fontFamily: "Times New Roman",
                      },
                      onMouseEnter: t,
                      onMouseLeave: a,
                      onClick: function (t) {
                        t.preventDefault(),
                          e.history.push("/service-car-check");
                      },
                    },
                    "Car Check"
                  ),
                  r.a.createElement(
                    "h3",
                    {
                      style: {
                        color: "white",
                        backgroundColor: "#228B22",
                        height: "2em",
                        paddingTop: "9px",
                        paddingLeft: "15px",
                        cursor: "pointer",
                        fontFamily: "Times New Roman",
                      },
                      onClick: function (t) {
                        t.preventDefault(),
                          e.history.push("/service-car-insurance");
                      },
                    },
                    "Car Insurance"
                  ),
                  r.a.createElement(
                    "h3",
                    {
                      style: {
                        paddingLeft: "15px",
                        paddingTop: "9px",
                        cursor: "pointer",
                        fontFamily: "Times New Roman",
                      },
                      onClick: function (t) {
                        t.preventDefault(),
                          e.history.push("/service-customer-support");
                      },
                      onMouseEnter: t,
                      onMouseLeave: a,
                    },
                    "Customer Support"
                  ),
                  r.a.createElement(
                    "h3",
                    {
                      style: {
                        paddingLeft: "15px",
                        paddingTop: "9px",
                        cursor: "pointer",
                        fontFamily: "Times New Roman",
                      },
                      onClick: function (t) {
                        t.preventDefault(),
                          e.history.push("/service-warrenty-programe");
                      },
                      onMouseEnter: t,
                      onMouseLeave: a,
                    },
                    "Warrenty Programs"
                  )
                ),
                r.a.createElement(
                  b.a,
                  { item: !0, xs: 9 },
                  r.a.createElement(
                    "div",
                    { className: "container" },
                    r.a.createElement(
                      "form",
                      {
                        style: { backgroundColor: "smoke white " },
                        onSubmit: function (t) {
                          t.preventDefault(),
                            e.history.push(
                              "/service-car-insurance/insurance-detail",
                              { name: l, price: u }
                            );
                        },
                      },
                      r.a.createElement(
                        "h1",
                        { style: { fontFamily: "Times New Roman" } },
                        "Car Insurance Calculator"
                      ),
                      r.a.createElement(
                        w.a,
                        {
                          className: "mt-5",
                          sx: {
                            width: 500,
                            maxWidth: "100%",
                            marginBottom: "0.5em",
                          },
                        },
                        r.a.createElement(N.a, {
                          value: l,
                          onChange: function (e) {
                            i(e.target.value);
                          },
                          fullWidth: !0,
                          required: !0,
                          label: "Car Name",
                        })
                      ),
                      r.a.createElement(
                        w.a,
                        {
                          className: "mt-4",
                          sx: { width: 500, maxWidth: "100%" },
                        },
                        r.a.createElement(N.a, {
                          value: u,
                          onChange: function (e) {
                            d(e.target.value);
                          },
                          fullWidth: !0,
                          required: !0,
                          label: "Car Price",
                        })
                      ),
                      r.a.createElement(
                        h.a,
                        {
                          className: "mt-4",
                          type: "submit",
                          variant: "contained",
                          color: "success",
                          size: "large",
                        },
                        "Calculate"
                      )
                    ),
                    r.a.createElement(
                      "h2",
                      {
                        className: "mt-5",
                        style: {
                          fontFamily: "Times New Roman",
                          color: "#228B22",
                        },
                      },
                      "Benifits of Car Insurance"
                    ),
                    r.a.createElement(
                      b.a,
                      { container: !0, spacing: 2 },
                      r.a.createElement(
                        b.a,
                        { item: !0, xs: 6 },
                        r.a.createElement(
                          "h5",
                          { style: { fontFamily: "Times New Roman" } },
                          "Comprehensive car insurance protects your car from any man-made or natural calamities like terrorist attacks, theft, riots, earthquakes, cyclones, hurricanes etc. Additionally, it also saves your car from third party\u2019s claims/damages. At times car insurance can be confusing and difficult to understand. However, there are strict guidelines that should be followed by the Car Insurance buyers while choosing the policy."
                        )
                      ),
                      r.a.createElement(
                        b.a,
                        { item: !0, xs: 6 },
                        r.a.createElement("img", {
                          style: { width: "25em" },
                          className: "mt-1 ml-5 img-fluid",
                          src: "https://livedemo00.template-help.com/wt_59051/images/services-07-350x220.jpg",
                          alt: "",
                        })
                      )
                    ),
                    r.a.createElement(
                      "h2",
                      {
                        style: {
                          fontFamily: "Times New Roman",
                          color: " #228B22",
                        },
                        className: "mt-5",
                      },
                      "How Car Insurance works?"
                    ),
                    r.a.createElement(
                      "h5",
                      {
                        className: "mt-5",
                        style: { fontFamily: "Times New Roman" },
                      },
                      "Car insurance is inherently tricky to navigate because you don't find out just how well it works (or doesn't) until you have an accident. And if you're lucky, that doesn't happen too often. So how do you know if you have the right kind of car insurance for your budget and lifestyle? We decided to answer this question by offering our customers professional car insurance to deliver them from any hardship."
                    ),
                    r.a.createElement(
                      "h5",
                      { style: { fontFamily: "Times New Roman" } },
                      "Our services are perfectly suited for the cars we provide. After buying a car at AutoTraider, we will instantly settle all the questions connected with insuring your car from any financial problems you can have after an accident. We also help you find the right coverage at the best price and make it clear which insurance plan is suitable for you."
                    ),
                    r.a.createElement(
                      q.a,
                      {
                        className: "mt-5",
                        variant: "filled",
                        severity: "info",
                      },
                      r.a.createElement(
                        "h5",
                        { style: { fontFamily: "Times New Roman" } },
                        "Your insurance services provide reliability to any car driver, I am now sure of it! I didn\u2019t buy my vehicle at AutoTraider, but you offered a perfect insurance plan that saved me from possible financial problems on the road when I happened to be in an unpleasant car accident."
                      ),
                      r.a.createElement(
                        "h5",
                        {
                          className: "mt-2 ml-3",
                          style: { fontFamily: "Times New Roman" },
                        },
                        "- Dennis Williams"
                      )
                    )
                  )
                )
              )
            )
          );
        },
        Ze = function (e) {
          function t(e) {
            (e.target.style.background = "#228B22"),
              (e.target.style.color = "white"),
              (e.target.style.height = "2em");
          }
          function a(e) {
            (e.target.style.background = "white"),
              (e.target.style.color = "black");
          }
          return r.a.createElement(
            "div",
            { className: "mb-5", style: { marginTop: "6rem" } },
            r.a.createElement(
              "div",
              { className: "container" },
              r.a.createElement(
                "h1",
                {
                  style: {
                    fontSize: "50px",
                    fontFamily: "Times New Roman",
                    fontWeight: "bold",
                  },
                },
                "Our Services"
              ),
              r.a.createElement("hr", null),
              r.a.createElement(
                b.a,
                { container: !0, spacing: 2 },
                r.a.createElement(
                  b.a,
                  { item: !0, xs: 3 },
                  r.a.createElement(
                    "h3",
                    {
                      style: {
                        paddingLeft: "15px",
                        paddingTop: "9px",
                        cursor: "pointer",
                        fontFamily: "Times New Roman",
                      },
                      onMouseEnter: t,
                      onMouseLeave: a,
                      onClick: function (t) {
                        t.preventDefault(), e.history.push("/service");
                      },
                    },
                    "History Check"
                  ),
                  r.a.createElement(
                    "h3",
                    {
                      style: {
                        paddingLeft: "15px",
                        paddingTop: "9px",
                        cursor: "pointer",
                        fontFamily: "Times New Roman",
                      },
                      onMouseEnter: t,
                      onMouseLeave: a,
                      onClick: function (t) {
                        t.preventDefault(),
                          e.history.push("/service-buyer-guide");
                      },
                    },
                    "Buyer's Guide"
                  ),
                  r.a.createElement(
                    "h3",
                    {
                      style: {
                        paddingLeft: "15px",
                        paddingTop: "9px",
                        cursor: "pointer",
                        fontFamily: "Times New Roman",
                      },
                      onMouseEnter: t,
                      onMouseLeave: a,
                      onClick: function (t) {
                        t.preventDefault(),
                          e.history.push("/service-car-check");
                      },
                    },
                    "Car Check"
                  ),
                  r.a.createElement(
                    "h3",
                    {
                      style: {
                        paddingLeft: "15px",
                        paddingTop: "9px",
                        cursor: "pointer",
                        fontFamily: "Times New Roman",
                      },
                      onClick: function (t) {
                        t.preventDefault(),
                          e.history.push("/service-car-insurance");
                      },
                      onMouseEnter: t,
                      onMouseLeave: a,
                    },
                    "Car Insurance"
                  ),
                  r.a.createElement(
                    "h3",
                    {
                      style: {
                        color: "white",
                        backgroundColor: "#228B22",
                        height: "2em",
                        paddingTop: "9px",
                        paddingLeft: "15px",
                        cursor: "pointer",
                        fontFamily: "Times New Roman",
                      },
                      onClick: function (t) {
                        t.preventDefault(),
                          e.history.push("/service-customer-support");
                      },
                    },
                    "Customer Support"
                  ),
                  r.a.createElement(
                    "h3",
                    {
                      style: {
                        paddingLeft: "15px",
                        paddingTop: "9px",
                        cursor: "pointer",
                        fontFamily: "Times New Roman",
                      },
                      onClick: function (t) {
                        t.preventDefault(),
                          e.history.push("/service-warrenty-programe");
                      },
                      onMouseEnter: t,
                      onMouseLeave: a,
                    },
                    "Warrenty Programs"
                  )
                ),
                r.a.createElement(
                  b.a,
                  { item: !0, xs: 9 },
                  r.a.createElement(
                    "div",
                    { className: "container" },
                    r.a.createElement(
                      "h2",
                      {
                        style: {
                          fontFamily: "Times New Roman",
                          fontWeight: "bold",
                        },
                      },
                      "Customer Support"
                    ),
                    r.a.createElement(
                      b.a,
                      { container: !0, spacing: 2 },
                      r.a.createElement(
                        b.a,
                        { item: !0, xs: 6 },
                        r.a.createElement("img", {
                          style: { width: "20em" },
                          className: "mt-3 img-fluid",
                          src: "https://livedemo00.template-help.com/wt_59051/images/services-08-370x220.jpg",
                          alt: "",
                        }),
                        r.a.createElement(
                          "h3",
                          {
                            className: "mt-4",
                            style: {
                              color: "#228B22 ",
                              fontFamily: "Times New Roman",
                            },
                          },
                          "Getting Free Online Support"
                        ),
                        r.a.createElement(
                          "h5",
                          {
                            className: "mt-3",
                            style: { fontFamily: "Times New Roman" },
                          },
                          "After buying a car at AutoTraider, you may have some questions regarding additional service and support for your vehicle. Members of our online support department will be glad to answer any question concerning payments, warranty programs, vehicle check, insurance and other services you can get from AutoTrader."
                        ),
                        r.a.createElement("img", {
                          style: { width: "20em" },
                          className: "mt-5 img-fluid",
                          src: "https://livedemo00.template-help.com/wt_59051/images/services-10-370x220.jpg",
                          alt: "",
                        }),
                        r.a.createElement(
                          "h3",
                          {
                            className: "mt-4",
                            style: {
                              color: "#228B22",
                              fontFamily: "Times New Roman",
                            },
                          },
                          "Auto Trader Loan Payment Programe"
                        ),
                        r.a.createElement(
                          "h5",
                          {
                            className: "mt-3",
                            style: { fontFamily: "Times New Roman" },
                          },
                          "To simplify the procedure of paying out for your car, we have recently introduced our Loan Payment Program. It allows our customers to schedule their monthly loan payments to be automatically withdrawn each month from their AutoTraider account. Taking part in such a program also has a range of benefits including discounts on technical inspection."
                        )
                      ),
                      r.a.createElement(
                        b.a,
                        { item: !0, xs: 6 },
                        r.a.createElement("img", {
                          style: { width: "20em" },
                          className: "mt-3 ml-3 img-fluid",
                          src: "https://livedemo00.template-help.com/wt_59051/images/services-09-370x220.jpg",
                          alt: "",
                        }),
                        r.a.createElement(
                          "h3",
                          {
                            className: "mt-4 ml-3",
                            style: {
                              color: "#228B22 ",
                              fontFamily: "Times New Roman",
                            },
                          },
                          "Customer's Experience"
                        ),
                        r.a.createElement(
                          "h5",
                          {
                            className: "mt-3 ml-3",
                            style: { fontFamily: "Times New Roman" },
                          },
                          "We work for you and we try to get better with every vehicle we sell. AutoTraider is always ready to help you with any aspect of buying a car, regardless of its type and previous usage. We would also like to hear from you about possible ways of our services improvement. Contact us and share yours experience!"
                        ),
                        r.a.createElement("img", {
                          style: { width: "20em" },
                          className: "mt-5 ml-3 img-fluid",
                          src: "https://livedemo00.template-help.com/wt_59051/images/services-11-370x220.jpg",
                          alt: "",
                        }),
                        r.a.createElement(
                          "h3",
                          {
                            className: "mt-4 ml-3",
                            style: {
                              color: "#228B22 ",
                              fontFamily: "Times New Roman",
                            },
                          },
                          "Registering Your Account Programe"
                        ),
                        r.a.createElement(
                          "h5",
                          {
                            className: "mt-3 ml-3",
                            style: { fontFamily: "Times New Roman" },
                          },
                          "In order to receive additional services AutoTraider offers to its customers, you must be a registered user and have an account on our website. Every client of our company gets a unique ID and password to login to our website. Having a personal profile guarantees annual technical inspection at AutoTraider authorized inspection centers throughout the country."
                        )
                      )
                    ),
                    r.a.createElement(
                      "h3",
                      {
                        style: {
                          color: "#228B22 ",
                          fontFamily: "Times New Roman",
                        },
                        className: "mt-5",
                      },
                      "Checking Your Car\u2019s State"
                    ),
                    r.a.createElement(
                      "h5",
                      { style: { fontFamily: "Times New Roman" } },
                      "In order to be sure you are buying a legal car that has no violations, we offer you our car check services that not only include extensive vehicle history check but also complete technical examination of the car. This service allows our customers to make a reasonable choice based on correct information provided by our specialists. We hire certified experts to make a detailed estimate of your car which includes"
                    )
                  )
                )
              )
            )
          );
        };
      function Xe() {
        Xe = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          a = t.hasOwnProperty,
          n = "function" == typeof Symbol ? Symbol : {},
          r = n.iterator || "@@iterator",
          o = n.asyncIterator || "@@asyncIterator",
          l = n.toStringTag || "@@toStringTag";
        function i(e, t, a) {
          return (
            Object.defineProperty(e, t, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          i({}, "");
        } catch (T) {
          i = function (e, t, a) {
            return (e[t] = a);
          };
        }
        function c(e, t, a, n) {
          var r = t && t.prototype instanceof u ? t : u,
            o = Object.create(r.prototype),
            l = new x(n || []);
          return (
            (o._invoke = (function (e, t, a) {
              var n = "suspendedStart";
              return function (r, o) {
                if ("executing" === n)
                  throw new Error("Generator is already running");
                if ("completed" === n) {
                  if ("throw" === r) throw o;
                  return C();
                }
                for (a.method = r, a.arg = o; ; ) {
                  var l = a.delegate;
                  if (l) {
                    var i = b(l, a);
                    if (i) {
                      if (i === m) continue;
                      return i;
                    }
                  }
                  if ("next" === a.method) a.sent = a._sent = a.arg;
                  else if ("throw" === a.method) {
                    if ("suspendedStart" === n)
                      throw ((n = "completed"), a.arg);
                    a.dispatchException(a.arg);
                  } else "return" === a.method && a.abrupt("return", a.arg);
                  n = "executing";
                  var c = s(e, t, a);
                  if ("normal" === c.type) {
                    if (
                      ((n = a.done ? "completed" : "suspendedYield"),
                      c.arg === m)
                    )
                      continue;
                    return { value: c.arg, done: a.done };
                  }
                  "throw" === c.type &&
                    ((n = "completed"), (a.method = "throw"), (a.arg = c.arg));
                }
              };
            })(e, a, l)),
            o
          );
        }
        function s(e, t, a) {
          try {
            return { type: "normal", arg: e.call(t, a) };
          } catch (T) {
            return { type: "throw", arg: T };
          }
        }
        e.wrap = c;
        var m = {};
        function u() {}
        function d() {}
        function h() {}
        var p = {};
        i(p, r, function () {
          return this;
        });
        var f = Object.getPrototypeOf,
          g = f && f(f(k([])));
        g && g !== t && a.call(g, r) && (p = g);
        var y = (h.prototype = u.prototype = Object.create(p));
        function E(e) {
          ["next", "throw", "return"].forEach(function (t) {
            i(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function v(e, t) {
          var n;
          this._invoke = function (r, o) {
            function l() {
              return new t(function (n, l) {
                !(function n(r, o, l, i) {
                  var c = s(e[r], e, o);
                  if ("throw" !== c.type) {
                    var m = c.arg,
                      u = m.value;
                    return u && "object" == typeof u && a.call(u, "__await")
                      ? t.resolve(u.__await).then(
                          function (e) {
                            n("next", e, l, i);
                          },
                          function (e) {
                            n("throw", e, l, i);
                          }
                        )
                      : t.resolve(u).then(
                          function (e) {
                            (m.value = e), l(m);
                          },
                          function (e) {
                            return n("throw", e, l, i);
                          }
                        );
                  }
                  i(c.arg);
                })(r, o, n, l);
              });
            }
            return (n = n ? n.then(l, l) : l());
          };
        }
        function b(e, t) {
          var a = e.iterator[t.method];
          if (void 0 === a) {
            if (((t.delegate = null), "throw" === t.method)) {
              if (
                e.iterator.return &&
                ((t.method = "return"),
                (t.arg = void 0),
                b(e, t),
                "throw" === t.method)
              )
                return m;
              (t.method = "throw"),
                (t.arg = new TypeError(
                  "The iterator does not provide a 'throw' method"
                ));
            }
            return m;
          }
          var n = s(a, e.iterator, t.arg);
          if ("throw" === n.type)
            return (
              (t.method = "throw"), (t.arg = n.arg), (t.delegate = null), m
            );
          var r = n.arg;
          return r
            ? r.done
              ? ((t[e.resultName] = r.value),
                (t.next = e.nextLoc),
                "return" !== t.method &&
                  ((t.method = "next"), (t.arg = void 0)),
                (t.delegate = null),
                m)
              : r
            : ((t.method = "throw"),
              (t.arg = new TypeError("iterator result is not an object")),
              (t.delegate = null),
              m);
        }
        function w(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function N(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function x(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(w, this),
            this.reset(!0);
        }
        function k(e) {
          if (e) {
            var t = e[r];
            if (t) return t.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var n = -1,
                o = function t() {
                  for (; ++n < e.length; )
                    if (a.call(e, n)) return (t.value = e[n]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (o.next = o);
            }
          }
          return { next: C };
        }
        function C() {
          return { value: void 0, done: !0 };
        }
        return (
          (d.prototype = h),
          i(y, "constructor", h),
          i(h, "constructor", d),
          (d.displayName = i(h, l, "GeneratorFunction")),
          (e.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === d || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, h)
                : ((e.__proto__ = h), i(e, l, "GeneratorFunction")),
              (e.prototype = Object.create(y)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          E(v.prototype),
          i(v.prototype, o, function () {
            return this;
          }),
          (e.AsyncIterator = v),
          (e.async = function (t, a, n, r, o) {
            void 0 === o && (o = Promise);
            var l = new v(c(t, a, n, r), o);
            return e.isGeneratorFunction(a)
              ? l
              : l.next().then(function (e) {
                  return e.done ? e.value : l.next();
                });
          }),
          E(y),
          i(y, l, "Generator"),
          i(y, r, function () {
            return this;
          }),
          i(y, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (e) {
            var t = [];
            for (var a in e) t.push(a);
            return (
              t.reverse(),
              function a() {
                for (; t.length; ) {
                  var n = t.pop();
                  if (n in e) return (a.value = n), (a.done = !1), a;
                }
                return (a.done = !0), a;
              }
            );
          }),
          (e.values = k),
          (x.prototype = {
            constructor: x,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(N),
                !e)
              )
                for (var t in this)
                  "t" === t.charAt(0) &&
                    a.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var t = this;
              function n(a, n) {
                return (
                  (l.type = "throw"),
                  (l.arg = e),
                  (t.next = a),
                  n && ((t.method = "next"), (t.arg = void 0)),
                  !!n
                );
              }
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var o = this.tryEntries[r],
                  l = o.completion;
                if ("root" === o.tryLoc) return n("end");
                if (o.tryLoc <= this.prev) {
                  var i = a.call(o, "catchLoc"),
                    c = a.call(o, "finallyLoc");
                  if (i && c) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  } else if (i) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                  } else {
                    if (!c)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var r = this.tryEntries[n];
                if (
                  r.tryLoc <= this.prev &&
                  a.call(r, "finallyLoc") &&
                  this.prev < r.finallyLoc
                ) {
                  var o = r;
                  break;
                }
              }
              o &&
                ("break" === e || "continue" === e) &&
                o.tryLoc <= t &&
                t <= o.finallyLoc &&
                (o = null);
              var l = o ? o.completion : {};
              return (
                (l.type = e),
                (l.arg = t),
                o
                  ? ((this.method = "next"), (this.next = o.finallyLoc), m)
                  : this.complete(l)
              );
            },
            complete: function (e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === e.type && t && (this.next = t),
                m
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var a = this.tryEntries[t];
                if (a.finallyLoc === e)
                  return this.complete(a.completion, a.afterLoc), N(a), m;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var a = this.tryEntries[t];
                if (a.tryLoc === e) {
                  var n = a.completion;
                  if ("throw" === n.type) {
                    var r = n.arg;
                    N(a);
                  }
                  return r;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, t, a) {
              return (
                (this.delegate = { iterator: k(e), resultName: t, nextLoc: a }),
                "next" === this.method && (this.arg = void 0),
                m
              );
            },
          }),
          e
        );
      }
      var Je = function () {
          var e = r.a.useState(""),
            t = Object(s.a)(e, 2),
            a = t[0],
            n = t[1],
            o = r.a.useState(!1),
            l = Object(s.a)(o, 2),
            i = l[0],
            c = l[1],
            m = r.a.useState(!1),
            u = Object(s.a)(m, 2),
            d = u[0],
            p = u[1],
            g = r.a.forwardRef(function (e, t) {
              return r.a.createElement(
                q.a,
                Object.assign({ elevation: 6, ref: t, variant: "filled" }, e)
              );
            }),
            y = (function () {
              var e = Object(W.a)(
                Xe().mark(function e(t) {
                  return Xe().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              t.preventDefault(),
                              (e.prev = 1),
                              (e.next = 4),
                              f.a
                                .post(" /api/reset-password", { email: a })
                                .then(function (e) {
                                  return c(!0);
                                })
                                .catch(function (e) {
                                  404 === e.response.status && p(!0);
                                })
                            );
                          case 4:
                            e.next = 9;
                            break;
                          case 6:
                            (e.prev = 6),
                              (e.t0 = e.catch(1)),
                              console.log(e.t0);
                          case 9:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[1, 6]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
          return r.a.createElement(
            "div",
            { className: "container ", style: { marginTop: "6rem" } },
            r.a.createElement("h1", null, "Forgot Password"),
            r.a.createElement("br", null),
            r.a.createElement(
              b.a,
              { container: !0, spacing: 2 },
              r.a.createElement(
                b.a,
                { item: !0, xs: 4.5 },
                r.a.createElement("img", {
                  className: "img-fluid",
                  style: { width: "30em", height: "33em" },
                  src: "https://images.unsplash.com/photo-1518082593638-b6e73b35d39a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aGVsbG98ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
                  alt: "",
                })
              ),
              r.a.createElement(
                b.a,
                { item: !0, xs: 7.5 },
                r.a.createElement(
                  "form",
                  { noValidate: !0, autoComplete: "off", onSubmit: y },
                  r.a.createElement(
                    w.a,
                    {
                      sx: { width: 500, maxWidth: "100%", marginBottom: "2em" },
                    },
                    r.a.createElement(N.a, {
                      value: a,
                      onChange: function (e) {
                        n(e.target.value);
                      },
                      fullWidth: !0,
                      required: !0,
                      label: "Email address",
                    })
                  ),
                  r.a.createElement(
                    "div",
                    { className: "pt-2" },
                    r.a.createElement(
                      h.a,
                      { variant: "outlined", type: "submit", size: "large" },
                      "Send"
                    ),
                    r.a.createElement(
                      O.a,
                      {
                        anchorOrigin: { vertical: "top", horizontal: "center" },
                        open: i,
                        TransitionComponent: R.a,
                        onClose: function (e, t) {
                          c(!1);
                        },
                      },
                      r.a.createElement(
                        g,
                        { severity: "success", sx: { width: "50em" } },
                        r.a.createElement(L.a, null, "Success"),
                        "Link has been sent. Check your email"
                      )
                    ),
                    r.a.createElement(
                      O.a,
                      {
                        anchorOrigin: { vertical: "top", horizontal: "center" },
                        open: d,
                        TransitionComponent: R.a,
                        onClose: function (e, t) {
                          p(!1);
                        },
                      },
                      r.a.createElement(
                        g,
                        { severity: "error", sx: { width: "50em" } },
                        r.a.createElement(L.a, null, "Error"),
                        "Invalid email address. User with this email does'nt exist"
                      )
                    )
                  )
                )
              )
            )
          );
        },
        Ke = function () {
          var e = r.a.useState(""),
            t = Object(s.a)(e, 2),
            a = t[0],
            n = t[1],
            o = Object(c.i)().token,
            l = r.a.useState(!1),
            i = Object(s.a)(l, 2),
            m = i[0],
            u = i[1],
            d = r.a.forwardRef(function (e, t) {
              return r.a.createElement(
                q.a,
                Object.assign({ elevation: 6, ref: t, variant: "filled" }, e)
              );
            });
          return r.a.createElement(
            "div",
            { className: "container ", style: { marginTop: "5rem" } },
            r.a.createElement("h1", null, "Add New Password"),
            r.a.createElement("br", null),
            r.a.createElement(
              b.a,
              { container: !0, spacing: 2 },
              r.a.createElement(
                b.a,
                { item: !0, xs: 4.5 },
                r.a.createElement("img", {
                  className: "img-fluid",
                  style: { width: "30em", height: "33em" },
                  src: "https://images.unsplash.com/photo-1518082593638-b6e73b35d39a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aGVsbG98ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
                  alt: "",
                })
              ),
              r.a.createElement(
                b.a,
                { item: !0, xs: 7.5 },
                r.a.createElement(
                  w.a,
                  { sx: { width: 500, maxWidth: "100%", marginBottom: "2em" } },
                  r.a.createElement(N.a, {
                    value: a,
                    onChange: function (e) {
                      n(e.target.value);
                    },
                    fullWidth: !0,
                    required: !0,
                    type: "password",
                    label: "New Password",
                  })
                ),
                r.a.createElement(
                  "div",
                  { className: "pt-2" },
                  r.a.createElement(
                    h.a,
                    {
                      variant: "outlined",
                      type: "submit",
                      size: "large",
                      onClick: function () {
                        fetch(" /api/new-password", {
                          method: "post",
                          headers: { "Content-Type": "application/json" },
                          body: JSON.stringify({ password: a, token: o }),
                        })
                          .then(function (e) {
                            return e.json();
                          })
                          .then(function (e) {
                            console.log(e),
                              e.err
                                ? alert(e.err)
                                : (u(!0), (window.location.href = "/login"));
                          })
                          .catch(function (e) {
                            console.log(e);
                          });
                      },
                    },
                    "Update"
                  ),
                  r.a.createElement(
                    O.a,
                    {
                      anchorOrigin: { vertical: "top", horizontal: "center" },
                      open: m,
                      TransitionComponent: R.a,
                      onClose: function (e, t) {
                        u(!1);
                      },
                    },
                    r.a.createElement(
                      d,
                      { severity: "success", sx: { width: "50em" } },
                      r.a.createElement(L.a, null, "Success"),
                      "Your password has been updated successfully"
                    )
                  )
                )
              )
            )
          );
        },
        _e = function (e) {
          console.log(e);
          var t = e.location.state.price;
          return r.a.createElement(
            "div",
            {
              className: "container-fluid",
              style: { marginTop: "6rem", backgroundColor: "#F7F9F9" },
            },
            r.a.createElement(
              "div",
              { className: "container" },
              r.a.createElement(
                b.a,
                { container: !0, spacing: 2 },
                r.a.createElement(b.a, { item: !0, xs: 1 }),
                r.a.createElement(
                  b.a,
                  { item: !0, xs: 10, className: "pt-5 ml-3 pb-3" },
                  r.a.createElement(
                    "div",
                    {
                      className: "border d-flex justify-content-center",
                      style: { backgroundColor: "white", height: "3.7em" },
                    },
                    r.a.createElement(
                      "h2",
                      {
                        className: "pl-4 pt-2",
                        style: {
                          color: "#228B22 ",
                          fontFamily: "Times New Roman",
                          fontWeight: "bold",
                        },
                      },
                      "Insurance Packages"
                    )
                  ),
                  r.a.createElement(
                    "div",
                    {
                      style: { backgroundColor: "white" },
                      className: "mt-5 border-bottom border-top",
                    },
                    r.a.createElement(
                      b.a,
                      { container: !0, spacing: 2 },
                      r.a.createElement(
                        b.a,
                        { item: !0, xs: 5 },
                        r.a.createElement("img", {
                          className: "pl-3 pb-3 img-fluid",
                          src: "https://www.pakistaninspection.com.pk/images/Clients/26.png",
                          alt: "",
                          style: { height: "15em ", width: "27em" },
                        })
                      ),
                      r.a.createElement(
                        b.a,
                        { item: !0, xs: 5 },
                        r.a.createElement(
                          "div",
                          { className: "pt-2 pb-2" },
                          r.a.createElement(
                            "h3",
                            {
                              style: {
                                color: "#228B22",
                                fontFamily: "Times New Roman",
                                fontWeight: "bold",
                              },
                            },
                            "UBL Insurers Limited"
                          ),
                          r.a.createElement(
                            "p",
                            {
                              style: {
                                fontFamily: "Times New Roman",
                                fontWeight: "bold",
                              },
                            },
                            "Car's Name : ",
                            e.location.state.name,
                            " "
                          ),
                          r.a.createElement(
                            "p",
                            {
                              style: {
                                fontFamily: "Times New Roman",
                                fontWeight: "bold",
                              },
                            },
                            "Car's Price : ",
                            e.location.state.price,
                            " "
                          ),
                          r.a.createElement(
                            "p",
                            {
                              style: {
                                fontFamily: "Times New Roman",
                                fontWeight: "bold",
                              },
                            },
                            "Rate : 1.65%"
                          ),
                          r.a.createElement(
                            "p",
                            {
                              style: {
                                fontFamily: "Times New Roman",
                                fontWeight: "bold",
                              },
                            },
                            "Final Amount(Without tracker) : ",
                            0.0165 * t
                          ),
                          r.a.createElement(
                            "p",
                            {
                              style: {
                                fontFamily: "Times New Roman",
                                fontWeight: "bold",
                              },
                            },
                            "Final Amount(With tracker) :",
                            " ",
                            0.0165 * t + 11e3,
                            " ",
                            r.a.createElement(
                              "p",
                              {
                                style: {
                                  fontFamily: "Times New Roman",
                                  fontWeight: "bold",
                                },
                                className: "text-black-50",
                              },
                              "(11000Rs extra charges for tracker services)"
                            )
                          )
                        )
                      )
                    )
                  ),
                  r.a.createElement(
                    "div",
                    {
                      style: { backgroundColor: "white" },
                      className: "mt-5 border-bottom border-top",
                    },
                    r.a.createElement(
                      b.a,
                      { container: !0, spacing: 2 },
                      r.a.createElement(
                        b.a,
                        { item: !0, xs: 5 },
                        r.a.createElement("img", {
                          className: "pl-3  img-fluid",
                          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkEVEkNsPZQv4BBhhW4TPg6ZpXzD1fp6XVZg&usqp=CAU",
                          alt: "",
                          style: { height: "15em ", width: "27em" },
                        })
                      ),
                      r.a.createElement(
                        b.a,
                        { item: !0, xs: 5 },
                        r.a.createElement(
                          "div",
                          { className: "pt-2 pb-2" },
                          r.a.createElement(
                            "h3",
                            {
                              style: {
                                color: "#228B22 ",
                                fontFamily: "Times New Roman",
                                fontWeight: "bold",
                              },
                            },
                            "Jubilee Insurance"
                          ),
                          r.a.createElement(
                            "p",
                            {
                              style: {
                                fontFamily: "Times New Roman",
                                fontWeight: "bold",
                              },
                            },
                            "Car's Name : ",
                            e.location.state.name,
                            " "
                          ),
                          r.a.createElement(
                            "p",
                            {
                              style: {
                                fontFamily: "Times New Roman",
                                fontWeight: "bold",
                              },
                            },
                            "Car's Price : ",
                            e.location.state.price,
                            " "
                          ),
                          r.a.createElement(
                            "p",
                            {
                              style: {
                                fontFamily: "Times New Roman",
                                fontWeight: "bold",
                              },
                            },
                            "Rate : 1.75%"
                          ),
                          r.a.createElement(
                            "p",
                            {
                              style: {
                                fontFamily: "Times New Roman",
                                fontWeight: "bold",
                              },
                            },
                            "Final Amount(Without tracker) : ",
                            0.0175 * t
                          ),
                          r.a.createElement(
                            "p",
                            {
                              style: {
                                fontFamily: "Times New Roman",
                                fontWeight: "bold",
                              },
                            },
                            "Final Amount(With tracker) :",
                            " ",
                            0.0175 * t + 11e3,
                            r.a.createElement(
                              "p",
                              {
                                style: {
                                  fontFamily: "Times New Roman",
                                  fontWeight: "bold",
                                },
                                className: "text-black-50",
                              },
                              "(11000Rs extra charges for tracker services)"
                            )
                          )
                        )
                      )
                    )
                  ),
                  r.a.createElement(
                    "div",
                    {
                      style: { backgroundColor: "white" },
                      className: "mt-5 border-bottom border-top",
                    },
                    r.a.createElement(
                      b.a,
                      { container: !0, spacing: 2 },
                      r.a.createElement(
                        b.a,
                        { item: !0, xs: 5 },
                        r.a.createElement("img", {
                          className: "pl-3 pb-3 img-fluid",
                          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZgAAAB8CAMAAABjR1ZHAAAA/FBMVEX///8RHD0Ae///owAAACYAACQAACsACjQAADEAACwAETcAACIAAC4AEzgAABEACDQAc/8AeP8AAA2NkJt9gI0AAB//nQDv7/DHyMxSV2pITWB+go/m5+rX2Nz/sUkLGDv/yIIAcf8AAAAAABhaXm+9vsRCR1yrrbT5/P91d4TExsvw9v8dJUPS09fg4eRCkP+mqLA1PFQxif+anKYlLUlOlv9lof9hZXVYm/85P1cUgP+zz//R4v/j7v9scH+Yvv+/1/+nx//C2P//58v/vmv/8+V3q/+Fs/9+r//n8f+Ruv/X5v//4Lz/0pv/w3j/2a3/uFn/+O7/zpP/qSSIce4NAAATrElEQVR4nO2dfX/athbHTWYbY54CxDNgmJeAA6FAoNCyNB1puq69bdft7u79v5dr6ci2nowNcTKaj39/bCn4QdbXks6Rjg6KkitXrly5cuXKlStXrly5cuXKJdHd9ZtXt/92IXLx+nxy2mg0zq8f7QbeprPxYr7rj1q+RjPuY9vzxpKjR8P4Kz07fW40TpAaj0XmqmyapnYl+6pVVSuGr4qqDukK96ySXuoLh2800yxaziOV88j0gnB5NDITq4BUngjftCuGWwhk6m6Ixh74H1Sn/PGeho+0+Ob1LPXiJODyWGS6VVyd1Uv+C28QYUFytSH5pq1jlDZ3whKuZA75Kz1D0Vweh8y8TOpd47qmnlXgpZE2M8FgNA7MTCOHlXvZF/PIxHJ5FDLbIqnO4pb9Ymjijw1VU3XSpRkt+KotBUNOKBTqz36U4bk8Ahm7HLYHtmuyocGUVn27124VdIRGH8F3UjBUCyvLLLZnJJFL9mRaBh4W6PYA8kroMz0YyL21aqhL8g8pmLN6dKVVtoU8Msm4ZE4Gc6lDf1aiv1jhb9zoA681Cv6UgRmrGMkWkXFd5RlLziVjMiPULtylgmu1MqK+ATAV6VkyMKsKMu26CrYA9GfsZcZxyZbM2gUgDuqHXNozATB1qd8pA2O6AAQ3vupSdtqzUDyXLMm0cUtR/ZEb2wAq5WR6Ohhi05Vo/ErA4MPduqL0cZPRnquTuYvLycnpq4xu06kG1m3HhJ4o1JgYWa6hrR1uYkwC5qYamA/YzTQ3GZXwyLSbS2Zk5rjytbkSNBD8J5FTCaxft65rHXr8EcGAc4kNbjxsPVMnc/xmN5esyFyh8cCEZlJFY0SRHlKWRiGSWapENrAIZmNGzcR4tk7mi0Qu2ZCxaQsKBnvGydxoVQpNobQOvhTAgHOpwsACrpH68PIdm5LbS0ZkMIvA57BV0clsX1oGxaZaJygEMGDUreEfYEhUFg8u35EpTXvJhozBeOlbcNrZQ+arG61UD2aZi2TemAczxv82AhRDBNMtPLR4RyZJe2k0Tk9PG8LHDyUDo3TBKINgCrI04g+zvTNTJfOTFhgHPJhFhbkSNLJn5mQK7aVxen798e7+7uP1+WkjUzJLdrmFWGBr2aGzDe7ogv6JB+PKriQu8HzPEtrL+cvbwIcY3748z5AMOJeC1Lb06JFO2VocGOKL8uIXeL5n8VwaJ++Z799z3z+ETMeUVme1Q76fe0zF4skbOZjLqvRKxefjZPJcTn8RDnl9nhEZsnxSpAUvOowjZ1bJ2lAOPwZDjDYWDEzCuOKVhLXn71UCl4+Sgz5xZER26QTLJ+4ZLWymgZPZRtyKpdCphO6KzD+zYDYIgzulL3QFBl9Lct/vUEI/9lp62MfTLMiMJW4LWRzGLzp4iYWKvh31e732GQwjZKKFAQNLndzaGER4MAs8360ELm9iDnyZ2N+lkMTR940vNaxjLzANihVdVXXom0wy/jBgAKHGTnOSBvYcnEzRHnsbc+RX3jY7hAx2GoXhGVvQron+vAnnMCMRN4aNkilF/R+lAr6SEHr2/Ung0ogf1l/z/sz+ZKD/EVZNwOe08NvvWEUWizsIXMYJFVc2h3nlOXcl8DkHexfs2CT6+7ENRmwyh5BBAUmmuM6IGlI1mPPalKlITLdkhhjxWk1wGIqfKXb4C43Rx+bN3uU6MsnmYXYc/oY/eH8ybUtX6+KayUzVdTX0X3qrpaXj4OVSeU2PF56l6wZpJN5AV13RMG5Th3y3knGRm2Sgj+K82d5kbE8MVkZF4cL47fZo5cvjGNJnx1wp5uPvSbJ5/tP7HSfcn4rHH+rP5IqVdP3l9N2OM96LYHIymUu+Lnb+fscpb/nRPyeTvWLWK3e2GCmYk9Ndw1KufRWzXrlzjLmVdGU5mWz1MmYdufFpx0lfYk7KyWSmOC4njZc7zrqOOysnk5Fiufij/+fYs15Ih5icTHbaweWk8SX2tDv5EJOTyUq7uPhVHLstaweXnEwG2s0lflJGnJDJyWSpBC7+KCPPUvIufoTZk8y8Tc+A2bOZMBU5b/Mf9b3FYuEJ8S8zcdsF+1Evkh2/Q7PtXDmy2Bq/bMKEq1g2dOBkdba9Olt5/PRpj1dsIRK5xMz8C3P+B5PZWPogWlpuWbpunQlHWPSSce/MUEuVSqWkqt0F9WQzXdWmbM31XE2thGhWqqYG0jS1uhHCCrEcq140BuKyZ5qyIXmXmm7Ui8W6UdKmLYrbgro/KUVcAo8UXHwy74Tz3idzSUlmhRaPrWDtq42SXRRUprQrtB42iF78llUPl2eqFTWCqqElGXZxZ20WCm6wUdDjUga4xVJJsn+W5OgY8G87lE1nyPBlQ3cp6FQclWtoYQH5+2Np0pcjFRefzH+48z6l4RITX8MJx0vUg6d1oM7LdFzrZbgZCWvDxfUZFdLrQAiARfcsTPi/NIRNpzZJ0fcTEw6kKZuvbZmPB60E2xM2shA6aQKPlFz8Gj6hp2buT3YaZDTRZDIYTDEAc0Yag0r1SOzDt4R4yyCbjGSDWQ/HcgSb0TuyiECDD6HtB5k1+MwOyWVDH0hiFIKFVWlso2x7aaznLkNz/vr+7a+fP7+9f32aFksqMnIwVSp2mXl4kpDBNXS1FKw4k0aSEoxrgoIXW+d6szBHBx+P5iSVDT1N0MsWK3qpElxpQINx67QMTVxe3YfLCQ4rR+JDyh9KRg6mYEQvEvPwJFPDdDHrT1ZLDT+6puwBxl1usIbLMrkXG3ZmRwMBF4/mhGWLOjkOjFMiR+hXo8lktFUhLK5MgXEvHVotcV19Ty6H6nzXNGg8GGpQZB7+BiqXfDXflOv1wWofMOGtlLEDQWvsRg0gD4GC7LjsJJVN6ROo0Xi/QjtHAnsBg6lzZp2g23TjdwZkft1ZjjgwBS14l5iHxwOAEZmy/bOrYE0/JRiqTwcIdabLwmNEERoXuxckAhPtuWXBELNBo3Yq9LqD0MIGMNKUBZT4qLBH0+ndznLEggkzxDEPLwuEJdofDEQJMnvOcSBa9WYsJBxgwLjSspGEXFrcVql0YJ6oJ/PHJt7WZhULpmBsJA+Pa9qVxCkdBAaHfDIG69SFPgzHT5uMLe0klQ3vvhbN7FCP1mIaSHufdUCLWUMVqAvx4W/AslIlUyZZgJlANptgPxUT2ekklc1guzlB6caYxLkumsipb5Gdvnn56tWrl2/Qn/uYZvuPMeZ2BdYN1IvEKvOfTy2ceWy72R+MDfvTqKrqhjk6pkLCAYctW58vWw/3ZFUhGjQUBmMOJ6HkIW/X6dwR30o+eX33/tdoTurF13dfXjXS2s0HWGX+K3wJJr/LPzyVcc4tlqybBYVhfzDgslDZnsC5tNA7D1HP9NUcUrZuTNkglHpHkjTwY8xSJLUg65N/8d/8UPJOyqfy6l7+xn+9e3kuRdvAu5sDJXGJAWOD81gfKrzlM6InnKpGeRs+2r7mcn8IXjo1iYNJwS4PsjedstgCMOOYso3w5Urxu6Qlnr8hHXF+vb+/fffu/bt3t/d3n15fnyDvkUlKev7y/sWOOv385eScOR75oG9effx0F173dtf5WHIwygzqX10JTtyozIT/F63ghU/p+U8vsZYG2ZxejwZrcC6JLQbDHZVwwEkoG4DR5bt68f1FMPLd2bzGX28/XYe+feP89dfEU95fEzQ+k9NXX97tHk9kigED87b+69wXpj3sbblCz3pZxKtJO1dWxQpmZFwj6qTxABakbIC8tpST6SSU7aAWE2vCiXp7d436uPPX6Sr5LTr6/PyX+2SKUsWBUTq4YbgmHMFMXNmLblkPE2XE5WNQ0kximjpleMGWzQAF72Q6QtmKTNkgfWfiGFOlx5jqfht3X9x+EUaW3//49r8/P/z587c/fue+eXt3tyuQNkGxYCARU6G46VAblUONJ621Riw04jkAGJW2cOdJYNRLqmZIjg7XAJEjwq7JSShbH99sRx5uSMY2nHihHroR4e+//vsj1g/wv5++8XAOVzyYPhhgMA0s23o8b5ElKZhtnGEwTB9PWBGfh4BxkUhPwgwIU1lmDTM0f52kssFnWuxqcTo/Jr1+/+ATYeWz+S2jq8eDURZU0gz5nvAx5DuBabVetKc2EOy9DXo3AmaNBG4ik84sJkdH6GQ6SWXbSNIT00rn+aeWiAXY/JRNq9kBRtnUhYdX+ozLD/06WbrCbyxj56zBsCX/os3lLfRU9MKudB2NX12NyhbltwvKRnKmcCss47CzzBTMb3IsGM23LG6wCwzVuZCHt9dlrUotsUP3RSaiYVe/HtU1ZJ4JJ68YB5P8NEP0mxnk1wVMSmSymNSsk1C2IMuQa9IjujOwpoRUlmD+isWCyPyZwR12gplb3MMPDfRzGNtwOgqnwwjS+JG0WGpgsJLfKwnXWxgwMB1TcCtBLcIUpDvsUMIfBZ2jk1A2/0WA/s01QpO5v/TLZBbJ/bMbY/7YxcUn8/PDb7ETjDLS2IeHqi9andF8rNjtDqxnkvF5TPp9tePN7bnXgXPdYnAxdkqmDRUbLBSTzBrsAIGbVXABJ6Fs6GGI76suF3271x91IWkaiQYBq6zjjWgdlOjm791cfDIPNwF2g1GuDObh16T/MCuqpmq6yTaRFlnZNUv+tyXizqlh18bNlRE3kczgg51gsfUEBjTxGXkwfNl82UUyTlUNFLgW+MHE0SJ+TIVWST1kS/WHJDA//HPAVVklgFHWVfrh+V/5we0ninNZS3zraLaXn8QktgUMM5BZiHfEYZ0ZVrIFMFzZkHqGxIIwdkXJmAckuktsMFk0mS5TWyIYMILDh5/UDe7JitSqme1yaTQKBhUA2OXAKFNci3h2GTJrCEnnYJUBolzOigllwyVY8+UrqMEp8tRsB6QgShhhshllcMLrsLvBw2eJ/aES3PlHv13WKpXolLKM766MO0wuYNOim0AL34oKfe2h2E1oMXgtWXx78SoDGYbwmLK7bPiBqEBRRC264UIriBKzeSTrWzKYH/67/2VZjdeqoVHdjRb9PgzRYlAxmAoedSE2uGiUykt+ztBbapVi1fftq/VKucsEr+JbMavFM60UXNq/i6y/Hw0qlcCkTlM2X70rVTdMvwjVoqEadOzy1tJ5qeYBudT/lwLMT/tflpe3oN+4yUKYnu0tFtxc+ri9cK6urlp8pgys+eKqu1wvO2eixcPeCl1oFF66vxjJJlPmi2gxLlXZ8IGt4c16ebldcbsP5m1eB/0qxM9PAybXvsrBHKlyMEeqHMyRKgdzpMrBHKlyMEeqHMyRKgdzpMrBHKlyMEeqHMyRKgdzpHoqMHPPm1ATwfbEm0SzxkyeGXzUuI9Efz6n5oyjz8doKrhHTd9SU8NRVud+JHwp9Mc8Ps3MUehpwIwKTaRg6WR2eYH+uSST6fZFtHhlW3jrY9fCJ9SG4eqJ3gzJ9C/CBZfRhQ9pexFlkrkIyfQugtUrD91toA78/6Kv5xfor+bF+qh/QONJwGyay1Gv12+pNRwltGoWF3O7vzJqZJuWGsWJDet4KbG7nrXbbc+xBmQheKRNQ3ozXQ+iK0fNHk5aQv45H0Qp/nu18KIT/1oLbeX/F8HtD1ror8VNs3DEeeefAsxVjdSjfYkqd9QMF8hh+35Praukm/OsIoAhq4i9Etk7PB2OmsFi/Uy7DH4tA4NRFgOyyL+mImAoMPikWrhaViMne5p6UGDRk+gJwMxqzLqsbUVLt0tckb1BS4WF57Ha2UBXFhzTquG3enLRVtRgS/isNusMYJwBMD5hXOsOzUIAE3SFIRhlZh3v7zQ+AZjNgHkvV1SGqTbOYtZrTlZNXIvDmj1kwXg12KC6RozIoD9rzhQDei8CZlxCAXuzGr2bPwUY5ax20LLvU+gJwAzYGJEb+qd8ceRRr+kpNyh62PPH66GsxfQv/Eq2ayQybdZs+7WL+0MCRpmgVlmtU1dOBaY/iA3b/7eVJkrmw4PuYHMPb9GchiicC4Hp+fjGut+zsGDsCh5yNjgwazsAExeBURZNdNkAjD+Otc+abAbGFGCUwdH+gOZvKeLKHhbx3+PAMHWxqSkAxq9ob4v6vACM3fPtuJWKrbJeExsJffgfgFG2yH4OwSjTusbe5zsHo6QA87BNMnaN3ZRQpDe3LFHvg8EolxW8A5aAqWM/5qKLh34nyDkFvSCAUdZ+7xeB6avcj2GlAWMPstv7lbWSA8seGu83ZX8ffkvZAvYAGWwAxm5it5GAWbcnkwlJ3jouFzpdpCVEcxIwvfJa8UIwisalBE0DZjSI33/8r+uRGwwyw5gaag+iFuRg5wLAKDBJwg3++ALahqiAvyRgfCrbCQWGe/nTgJke8++a/p6wP+avB9+hGm6MGyEmnRCUB6YVAQOSgKmE5sIC124ARmlZl+WHgOk0j7jBJIz/GXBR5lYZT0vZV03k0I0LAwf1UeNWbYobSQKYUTRLpqiouwvBKF1DOxjM2Js2j9ZYBv39U9wmzB//yWTjcm9ZG3SH6yaZmhlvms3l8KbZJCZR74LevgqJdSgLoVCI/m5d+Fba7CIAMy7WQjADbuPjfFCvw2Z+3ODaFyEY9EVdbTbX8ZlHjkW//fnPj6J++PBHVjdoO53LzSqsxH5reDlsBR3cuEttWVnhF39FvctDqj3Zl3P0n/BC82jE3/JZp50r8vvl0Fyjkxz0YWshSyB/jPo74d+5cuXKlStXrly5cuXKlStXrly5dun//4seApn806wAAAAASUVORK5CYII=",
                          alt: "",
                          style: { height: "15em ", width: "27em" },
                        })
                      ),
                      r.a.createElement(
                        b.a,
                        { item: !0, xs: 5 },
                        r.a.createElement(
                          "div",
                          { className: "pt-2 pb-2" },
                          r.a.createElement(
                            "h3",
                            {
                              style: {
                                color: "#228B22 ",
                                fontFamily: "Times New Roman",
                                fontWeight: "bold",
                              },
                            },
                            "Asia Insurance"
                          ),
                          r.a.createElement(
                            "p",
                            {
                              style: {
                                fontFamily: "Times New Roman",
                                fontWeight: "bold",
                              },
                            },
                            "Car's Name : ",
                            e.location.state.name,
                            " "
                          ),
                          r.a.createElement(
                            "p",
                            {
                              style: {
                                fontFamily: "Times New Roman",
                                fontWeight: "bold",
                              },
                            },
                            "Car's Price : ",
                            e.location.state.price,
                            " "
                          ),
                          r.a.createElement(
                            "p",
                            {
                              style: {
                                fontFamily: "Times New Roman",
                                fontWeight: "bold",
                              },
                            },
                            "Rate : 2.4%"
                          ),
                          r.a.createElement(
                            "p",
                            {
                              style: {
                                fontFamily: "Times New Roman",
                                fontWeight: "bold",
                              },
                            },
                            "Final Amount(Without tracker) : ",
                            0.024 * t
                          ),
                          r.a.createElement(
                            "p",
                            {
                              style: {
                                fontFamily: "Times New Roman",
                                fontWeight: "bold",
                              },
                            },
                            "Final Amount(With tracker) : ",
                            0.024 * t + 11e3,
                            " ",
                            r.a.createElement(
                              "p",
                              {
                                style: {
                                  fontFamily: "Times New Roman",
                                  fontWeight: "bold",
                                },
                                className: "text-black-50",
                              },
                              "(11000Rs extra charges for tracker services)"
                            )
                          )
                        )
                      )
                    )
                  ),
                  r.a.createElement(
                    "div",
                    {
                      style: { backgroundColor: "white" },
                      className: "mt-5 border-bottom border-top",
                    },
                    r.a.createElement(
                      b.a,
                      { container: !0, spacing: 2 },
                      r.a.createElement(
                        b.a,
                        { item: !0, xs: 5 },
                        r.a.createElement("img", {
                          className: "pl-3 pb-3 img-fluid",
                          src: "https://cdn.bolnews.com/wp-content/uploads/2021/07/paak.jpg",
                          alt: "",
                          style: { height: "15em ", width: "27em" },
                        })
                      ),
                      r.a.createElement(
                        b.a,
                        { item: !0, xs: 5 },
                        r.a.createElement(
                          "div",
                          { className: "pt-2 pb-2" },
                          r.a.createElement(
                            "h3",
                            {
                              style: {
                                color: "#228B22 ",
                                fontFamily: "Times New Roman",
                                fontWeight: "bold",
                              },
                            },
                            "Pak Qatar General Takaful"
                          ),
                          r.a.createElement(
                            "p",
                            {
                              style: {
                                fontFamily: "Times New Roman",
                                fontWeight: "bold",
                              },
                            },
                            "Car's Name : ",
                            e.location.state.name,
                            " "
                          ),
                          r.a.createElement(
                            "p",
                            {
                              style: {
                                fontFamily: "Times New Roman",
                                fontWeight: "bold",
                              },
                            },
                            "Car's Price : ",
                            e.location.state.price,
                            " "
                          ),
                          r.a.createElement(
                            "p",
                            {
                              style: {
                                fontFamily: "Times New Roman",
                                fontWeight: "bold",
                              },
                            },
                            "Rate : 2%"
                          ),
                          r.a.createElement(
                            "p",
                            {
                              style: {
                                fontFamily: "Times New Roman",
                                fontWeight: "bold",
                              },
                            },
                            "Final Amount(Without tracker) : ",
                            0.02 * t
                          ),
                          r.a.createElement(
                            "p",
                            {
                              style: {
                                fontFamily: "Times New Roman",
                                fontWeight: "bold",
                              },
                            },
                            "Final Amount(With tracker) : ",
                            0.02 * t + 11e3,
                            " ",
                            r.a.createElement(
                              "p",
                              {
                                style: {
                                  fontFamily: "Times New Roman",
                                  fontWeight: "bold",
                                },
                                className: "text-black-50",
                              },
                              "(11000Rs extra charges for tracker services)"
                            )
                          )
                        )
                      )
                    )
                  ),
                  r.a.createElement(
                    "div",
                    {
                      style: { backgroundColor: "white" },
                      className: "mt-5 border-bottom border-top",
                    },
                    r.a.createElement(
                      b.a,
                      { container: !0, spacing: 2 },
                      r.a.createElement(
                        b.a,
                        { item: !0, xs: 5 },
                        r.a.createElement("img", {
                          className: "pl-3 pb-3 img-fluid",
                          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVbGWfHs4Lm0IGPaLahYwO5sEPxeH7K93MoUeF3PnXqW7ZxFKvnpBy1aY_XHOuzC-4nHc&usqp=CAU",
                          alt: "",
                          style: { height: "15em ", width: "27em" },
                        })
                      ),
                      r.a.createElement(
                        b.a,
                        { item: !0, xs: 5 },
                        r.a.createElement(
                          "div",
                          { className: "pt-2 pb-2" },
                          r.a.createElement(
                            "h3",
                            {
                              style: {
                                color: "#228B22",
                                fontFamily: "Times New Roman",
                                fontWeight: "bold",
                              },
                            },
                            "Salam Takaful"
                          ),
                          r.a.createElement(
                            "p",
                            {
                              style: {
                                fontFamily: "Times New Roman",
                                fontWeight: "bold",
                              },
                            },
                            "Car's Name : ",
                            e.location.state.name,
                            " "
                          ),
                          r.a.createElement(
                            "p",
                            {
                              style: {
                                fontFamily: "Times New Roman",
                                fontWeight: "bold",
                              },
                            },
                            "Car's Price : ",
                            e.location.state.price,
                            " "
                          ),
                          r.a.createElement(
                            "p",
                            {
                              style: {
                                fontFamily: "Times New Roman",
                                fontWeight: "bold",
                              },
                            },
                            "Rate : 2.25%"
                          ),
                          r.a.createElement(
                            "p",
                            {
                              style: {
                                fontFamily: "Times New Roman",
                                fontWeight: "bold",
                              },
                            },
                            "Final Amount(Without tracker) : ",
                            0.0225 * t
                          ),
                          r.a.createElement(
                            "p",
                            {
                              style: {
                                fontFamily: "Times New Roman",
                                fontWeight: "bold",
                              },
                            },
                            "Final Amount(With tracker) :",
                            " ",
                            0.0225 * t + 11e3,
                            " ",
                            r.a.createElement(
                              "p",
                              {
                                style: {
                                  fontFamily: "Times New Roman",
                                  fontWeight: "bold",
                                },
                                className: "text-black-50",
                              },
                              "(11000Rs extra charges for tracker services)"
                            )
                          )
                        )
                      )
                    )
                  )
                )
              )
            )
          );
        },
        Qe = function (e) {
          function t(e) {
            (e.target.style.background = "#228B22"),
              (e.target.style.color = "white"),
              (e.target.style.height = "2em");
          }
          function a(e) {
            (e.target.style.background = "white"),
              (e.target.style.color = "black");
          }
          return r.a.createElement(
            "div",
            { className: "mb-5", style: { marginTop: "6rem" } },
            r.a.createElement(
              "div",
              { className: "container" },
              r.a.createElement(
                "h1",
                {
                  style: {
                    fontSize: "50px",
                    fontFamily: "Times New Roman",
                    fontWeight: "bold",
                  },
                },
                "Our Services"
              ),
              r.a.createElement("hr", null),
              r.a.createElement(
                b.a,
                { container: !0, spacing: 2 },
                r.a.createElement(
                  b.a,
                  { item: !0, xs: 3 },
                  r.a.createElement(
                    "h3",
                    {
                      style: {
                        paddingLeft: "15px",
                        paddingTop: "9px",
                        cursor: "pointer",
                        fontFamily: "Times New Roman",
                      },
                      onMouseEnter: t,
                      onMouseLeave: a,
                      onClick: function (t) {
                        t.preventDefault(), e.history.push("/service");
                      },
                    },
                    "History Check"
                  ),
                  r.a.createElement(
                    "h3",
                    {
                      style: {
                        paddingLeft: "15px",
                        paddingTop: "9px",
                        cursor: "pointer",
                        fontFamily: "Times New Roman",
                      },
                      onMouseEnter: t,
                      onMouseLeave: a,
                      onClick: function (t) {
                        t.preventDefault(),
                          e.history.push("/service-buyer-guide");
                      },
                    },
                    "Buyer's Guide"
                  ),
                  r.a.createElement(
                    "h3",
                    {
                      style: {
                        paddingLeft: "15px",
                        paddingTop: "9px",
                        cursor: "pointer",
                        fontFamily: "Times New Roman",
                      },
                      onMouseEnter: t,
                      onMouseLeave: a,
                      onClick: function (t) {
                        t.preventDefault(),
                          e.history.push("/service-car-check");
                      },
                    },
                    "Car Check"
                  ),
                  r.a.createElement(
                    "h3",
                    {
                      style: {
                        paddingLeft: "15px",
                        paddingTop: "9px",
                        cursor: "pointer",
                        fontFamily: "Times New Roman",
                      },
                      onClick: function (t) {
                        t.preventDefault(),
                          e.history.push("/service-car-insurance");
                      },
                      onMouseEnter: t,
                      onMouseLeave: a,
                    },
                    "Car Insurance"
                  ),
                  r.a.createElement(
                    "h3",
                    {
                      style: {
                        paddingTop: "9px",
                        paddingLeft: "15px",
                        cursor: "pointer",
                        fontFamily: "Times New Roman",
                      },
                      onMouseEnter: t,
                      onMouseLeave: a,
                      onClick: function (t) {
                        t.preventDefault(),
                          e.history.push("/service-customer-support");
                      },
                    },
                    "Customer Support"
                  ),
                  r.a.createElement(
                    "h3",
                    {
                      style: {
                        color: "white",
                        backgroundColor: "#228B22",
                        height: "2em",
                        paddingTop: "9px",
                        paddingLeft: "15px",
                        cursor: "pointer",
                        fontFamily: "Times New Roman",
                      },
                      onClick: function (t) {
                        t.preventDefault(),
                          e.history.push("/service-warrenty-programe");
                      },
                    },
                    "Warrenty Programs"
                  )
                ),
                r.a.createElement(
                  b.a,
                  { item: !0, xs: 9 },
                  r.a.createElement(
                    "div",
                    { className: "container" },
                    r.a.createElement(
                      "h2",
                      {
                        style: {
                          fontFamily: "Times New Roman",
                          fontWeight: "bold",
                        },
                      },
                      "Warrenty Programs"
                    ),
                    r.a.createElement(
                      "h3",
                      {
                        style: {
                          color: "#228B22 ",
                          fontFamily: "Times New Roman",
                        },
                        className: "mt-5",
                      },
                      "Save your car from any trouble on the road"
                    ),
                    r.a.createElement(
                      "h5",
                      { style: { fontFamily: "Times New Roman" } },
                      "Every driver wants his car to function as long as possible. However, there are some factors that may come in the way of trouble-free usage of your car. To eliminate them, car dealerships and manufacturers offer their customers various car warranty programs. AutoTraider is no exception. We provide our clients with extended warranty programs for both new and used vehicles. Even if your car is already warranted by the manufacturer, we can extend its warranty period and make sure it will receive proper coverage and maintenance as a part of the following programs"
                    ),
                    r.a.createElement(
                      "ul",
                      null,
                      r.a.createElement(
                        "h5",
                        { style: { fontFamily: "Times New Roman" } },
                        r.a.createElement(
                          "li",
                          null,
                          "New Vehicle Warranty Program"
                        )
                      ),
                      r.a.createElement(
                        "h5",
                        { style: { fontFamily: "Times New Roman" } },
                        r.a.createElement(
                          "li",
                          null,
                          "Premium Warranty Program"
                        )
                      ),
                      r.a.createElement(
                        "h5",
                        { style: { fontFamily: "Times New Roman" } },
                        r.a.createElement(
                          "li",
                          null,
                          "Used Vehicle Warranty Program"
                        )
                      ),
                      r.a.createElement(
                        "h5",
                        { style: { fontFamily: "Times New Roman" } },
                        r.a.createElement(
                          "li",
                          null,
                          "Car Care Warranty Program."
                        )
                      )
                    )
                  )
                )
              )
            )
          );
        },
        $e =
          (a(234),
          function () {
            var e = r.a.useState(),
              t = Object(s.a)(e, 2),
              a = t[0],
              o = t[1];
            return (
              Object(n.useEffect)(
                function () {
                  localStorage.getItem("token") &&
                    f.a
                      .get(" /api/getRole", {
                        headers: {
                          "x-access-token": localStorage.getItem("token"),
                        },
                      })
                      .then(function (e) {
                        "OK" === e.data.status &&
                          (o(e.data.role.toLowerCase()),
                          localStorage.setItem(
                            "userRole",
                            e.data.role.toLowerCase()
                          ));
                      });
                },
                [a]
              ),
              r.a.createElement(
                "nav",
                {
                  style: {
                    position: "fixed",
                    top: "0",
                    width: "100%",
                    zIndex: "100",
                    height: "10%",
                  },
                  className: "navbar  navbar-expand-lg  bg-dark",
                },
                r.a.createElement(
                  "div",
                  {
                    className: "container-fluid ",
                    style: {
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    },
                  },
                  r.a.createElement(
                    i.c,
                    {
                      id: "logo",
                      className: " nav-link active",
                      "aria-current": "page",
                      to: "/",
                    },
                    r.a.createElement("img", {
                      src: "/uploads/logo.png",
                      className: "ml-5 img-fluid",
                      style: { width: "5em" },
                      alt: "logo",
                      href: "/",
                    })
                  ),
                  r.a.createElement(
                    "button",
                    {
                      className: "bg-dark navbar-toggler",
                      type: "button",
                      "data-bs-toggle": "collapse",
                      "data-bs-target": "#navbarNav",
                      "aria-controls": "navbarNav",
                      "aria-expanded": "false",
                      "aria-label": "Toggle navigation",
                    },
                    r.a.createElement("span", {
                      className: " navbar-toggler-icon ",
                    })
                  ),
                  r.a.createElement(
                    "div",
                    {
                      style: { flex: "display", justifyContent: "center" },
                      className: "collapse navbar-collapse",
                      id: "navbarNav",
                    },
                    r.a.createElement(
                      "ul",
                      { className: "navbar-nav" },
                      r.a.createElement(
                        "li",
                        { className: " nav-item" },
                        r.a.createElement(
                          i.c,
                          {
                            id: "home",
                            className: "nav-link active",
                            "aria-current": "page",
                            to: "/",
                          },
                          "Home"
                        )
                      ),
                      r.a.createElement(
                        "li",
                        { className: "nav-item" },
                        r.a.createElement(
                          i.c,
                          {
                            id: "contact",
                            className: "nav-link active",
                            "aria-current": "page",
                            to: "/contact-us",
                          },
                          "Contact us"
                        )
                      ),
                      r.a.createElement(
                        "li",
                        { className: "nav-item dropdown" },
                        r.a.createElement(
                          i.c,
                          {
                            id: "service",
                            activeClassName: "menu",
                            className: "nav-link active dropdown-toggle",
                            to: "#0",
                          },
                          "Services"
                        ),
                        r.a.createElement(
                          "ul",
                          {
                            className: "dropdown-menu",
                            "aria-labelledby": "dropdownMenuLink",
                          },
                          r.a.createElement(
                            "li",
                            null,
                            r.a.createElement(
                              i.b,
                              { className: "dropdown-item", to: "/service" },
                              "History Check"
                            )
                          ),
                          r.a.createElement(
                            "li",
                            null,
                            r.a.createElement(
                              i.b,
                              {
                                className: "dropdown-item",
                                to: "/service-buyer-guide",
                              },
                              "Buyer's Guide"
                            )
                          ),
                          r.a.createElement(
                            "li",
                            null,
                            r.a.createElement(
                              i.b,
                              {
                                className: "dropdown-item",
                                to: "/service-car-check",
                              },
                              "Car Check"
                            )
                          ),
                          r.a.createElement(
                            "li",
                            null,
                            r.a.createElement(
                              i.b,
                              {
                                className: "dropdown-item",
                                to: "/service-car-insurance",
                              },
                              "Car Insurance"
                            )
                          ),
                          r.a.createElement(
                            "li",
                            null,
                            r.a.createElement(
                              i.b,
                              {
                                className: "dropdown-item",
                                to: "/service-customer-support",
                              },
                              "Customer Support"
                            )
                          ),
                          r.a.createElement(
                            "li",
                            null,
                            r.a.createElement(
                              i.b,
                              {
                                className: "dropdown-item",
                                to: "/service-warrenty-programe",
                              },
                              "Warrenty Programs"
                            )
                          )
                        )
                      ),
                      "admin" === a &&
                        r.a.createElement(
                          "li",
                          { className: "nav-item dropdown" },
                          r.a.createElement(
                            i.c,
                            {
                              id: "adminRoles",
                              activeClassName: "menu",
                              className: "nav-link active dropdown-toggle",
                              to: "#0",
                            },
                            "Admin Roles"
                          ),
                          r.a.createElement(
                            "ul",
                            {
                              className: "dropdown-menu",
                              "aria-labelledby": "dropdownMenuLink",
                            },
                            r.a.createElement(
                              "li",
                              null,
                              r.a.createElement(
                                i.b,
                                { className: "dropdown-item", to: "/add-car" },
                                "Post New Add"
                              )
                            ),
                            r.a.createElement(
                              "li",
                              null,
                              r.a.createElement(
                                i.b,
                                {
                                  className: "dropdown-item",
                                  to: "/handle-users",
                                },
                                "Manage Users"
                              )
                            ),
                            r.a.createElement(
                              "li",
                              null,
                              r.a.createElement(
                                i.b,
                                { className: "dropdown-item", to: "/products" },
                                "Available Cars"
                              )
                            )
                          )
                        ),
                      !("admin" === a) &&
                        r.a.createElement(
                          "li",
                          { className: "nav-item" },
                          r.a.createElement(
                            i.c,
                            {
                              id: "availableCars",
                              className: "nav-link active",
                              "aria-current": "page",
                              to: "/products",
                            },
                            "Available Cars"
                          )
                        ),
                      localStorage.getItem("token")
                        ? r.a.createElement(
                            "li",
                            { className: "nav-item dropdown" },
                            r.a.createElement(
                              i.c,
                              {
                                id: "profile",
                                activeClassName: "menu",
                                className: "nav-link active dropdown-toggle",
                                to: "#0",
                              },
                              "Profile"
                            ),
                            r.a.createElement(
                              "ul",
                              {
                                className: "dropdown-menu",
                                "aria-labelledby": "dropdownMenuLink",
                              },
                              r.a.createElement(
                                "li",
                                null,
                                r.a.createElement(
                                  i.b,
                                  {
                                    id: "dropProfile",
                                    className: "dropdown-item ",
                                    to: "/profile",
                                  },
                                  "Edit Profile"
                                )
                              ),
                              r.a.createElement(
                                "li",
                                null,
                                r.a.createElement(
                                  i.b,
                                  {
                                    id: "dropLogOut",
                                    className: "dropdown-item",
                                    to: "/",
                                    onClick: function () {
                                      localStorage.removeItem("token"),
                                        localStorage.removeItem("userId"),
                                        localStorage.removeItem("userRole"),
                                        (window.location.href = "/");
                                    },
                                  },
                                  "Logout"
                                )
                              )
                            )
                          )
                        : r.a.createElement(
                            "li",
                            { className: "nav-item " },
                            r.a.createElement(
                              i.c,
                              {
                                id: "login",
                                className: "nav-link active",
                                "aria-current": "page",
                                to: "/login",
                              },
                              "Login"
                            )
                          )
                    )
                  )
                )
              )
            );
          });
      function et() {
        var e = Object(c.h)().pathname;
        return (
          Object(n.useEffect)(
            function () {
              window.scrollTo(0, 0);
            },
            [e]
          ),
          null
        );
      }
      var tt = a(154),
        at = a.n(tt),
        nt = function () {
          var e = r.a.useState(""),
            t = Object(s.a)(e, 2),
            a = t[0],
            n = t[1],
            o = r.a.useState(""),
            l = Object(s.a)(o, 2),
            i = l[0],
            c = l[1],
            m = r.a.useState(""),
            u = Object(s.a)(m, 2),
            d = u[0],
            p = u[1],
            g = r.a.useState(""),
            y = Object(s.a)(g, 2),
            E = y[0],
            v = y[1],
            x = r.a.useState(""),
            k = Object(s.a)(x, 2),
            C = k[0],
            T = k[1],
            j = r.a.useState(""),
            S = Object(s.a)(j, 2),
            F = S[0],
            W = S[1],
            A = r.a.useState(!1),
            M = Object(s.a)(A, 2),
            B = M[0],
            I = M[1],
            P = r.a.forwardRef(function (e, t) {
              return r.a.createElement(
                q.a,
                Object.assign({ elevation: 6, ref: t, variant: "filled" }, e)
              );
            });
          return r.a.createElement(
            "div",
            { style: { marginTop: "6rem" } },
            r.a.createElement(
              b.a,
              { className: "mt-5", container: !0, spacing: 2 },
              r.a.createElement(b.a, { item: !0, xs: 3 }),
              r.a.createElement(
                b.a,
                { item: !0, xs: 7 },
                r.a.createElement(
                  "h1",
                  {
                    className: "text-decoration-underline",
                    style: {
                      fontFamily: "Times New Roman",
                      fontWeight: "bold",
                    },
                  },
                  "Get in touch"
                ),
                r.a.createElement(
                  "h5",
                  {
                    className: "mt-5",
                    style: { fontFamily: "Times New Roman" },
                  },
                  "You can contact us any way that is convenient for you. We are available 24/7 via fax or email. You can also use a quick contact form below or visit our office personally."
                ),
                r.a.createElement(
                  "h5",
                  {
                    style: { fontFamily: "Times New Roman" },
                    className: "mt-2",
                  },
                  "Email us with any questions or inquiries or use our contact data. We would be happy to answer your questions."
                ),
                r.a.createElement(
                  "h3",
                  {
                    className: "mt-5",
                    style: { color: "#228B22", fontFamily: "Times New Roman" },
                  },
                  r.a.createElement(at.a, {
                    fontSize: "large",
                    className: "mr-4",
                  }),
                  " Email"
                ),
                r.a.createElement("h5", null, "hmmotors425@gmail.com"),
                r.a.createElement(
                  "h3",
                  {
                    className: "mt-5",
                    style: { color: "#228B22", fontFamily: "Times New Roman" },
                  },
                  "Contact Form"
                ),
                r.a.createElement(
                  "form",
                  {
                    className: "mt-5 mb-5",
                    onSubmit: function (e) {
                      e.preventDefault(),
                        f.a
                          .post(" /api/sendEmail", {
                            fName: d,
                            lName: E,
                            cNumber: C,
                            email: a,
                            subject: i,
                            message: F,
                          })
                          .then(function (e) {
                            I(!0), p(""), v(""), T(""), c(""), n(""), W("");
                          })
                          .catch(function (e) {
                            console.log(e);
                          });
                    },
                  },
                  r.a.createElement(
                    b.a,
                    { container: !0, spacing: 2 },
                    r.a.createElement(
                      b.a,
                      { item: !0, xs: 6 },
                      r.a.createElement(
                        w.a,
                        {
                          sx: {
                            width: 500,
                            maxWidth: "100%",
                            marginBottom: "1em",
                          },
                        },
                        r.a.createElement(N.a, {
                          fullWidth: !0,
                          label: "First Name",
                          value: d,
                          onChange: function (e) {
                            p(e.target.value);
                          },
                          required: !0,
                        })
                      ),
                      r.a.createElement(
                        w.a,
                        {
                          sx: {
                            width: 500,
                            maxWidth: "100%",
                            marginBottom: "1em",
                          },
                        },
                        r.a.createElement(N.a, {
                          fullWidth: !0,
                          label: "Subject",
                          value: i,
                          onChange: function (e) {
                            c(e.target.value);
                          },
                          required: !0,
                        })
                      )
                    ),
                    r.a.createElement(
                      b.a,
                      { item: !0, xs: 6 },
                      r.a.createElement(
                        w.a,
                        {
                          sx: {
                            width: 500,
                            maxWidth: "100%",
                            marginBottom: "1em",
                          },
                        },
                        r.a.createElement(N.a, {
                          fullWidth: !0,
                          label: "Last Name",
                          value: E,
                          onChange: function (e) {
                            v(e.target.value);
                          },
                          required: !0,
                        })
                      ),
                      r.a.createElement(
                        w.a,
                        { sx: { width: 500, maxWidth: "100%" } },
                        r.a.createElement(N.a, {
                          fullWidth: !0,
                          label: "Contact Number",
                          value: C,
                          placeholder: "+923104091437",
                          onChange: function (e) {
                            T(e.target.value);
                          },
                          required: !0,
                        })
                      )
                    )
                  ),
                  r.a.createElement(
                    w.a,
                    {
                      sx: { width: 900, maxWidth: "100%", marginBottom: "1em" },
                    },
                    r.a.createElement(N.a, {
                      fullWidth: !0,
                      label: "Email address",
                      placeholder: "abc@abc.com",
                      value: a,
                      onChange: function (e) {
                        n(e.target.value);
                      },
                      required: !0,
                    })
                  ),
                  r.a.createElement(
                    w.a,
                    {
                      sx: { width: 900, maxWidth: "100%", marginBottom: "2em" },
                    },
                    r.a.createElement(N.a, {
                      fullWidth: !0,
                      label: "Your Message",
                      multiline: !0,
                      value: F,
                      onChange: function (e) {
                        W(e.target.value);
                      },
                      required: !0,
                      rows: 4,
                    })
                  ),
                  r.a.createElement(
                    h.a,
                    {
                      size: "large",
                      variant: "contained",
                      color: "success",
                      endIcon: r.a.createElement(ee.a, null),
                      type: "submit",
                    },
                    "Send"
                  ),
                  r.a.createElement(
                    O.a,
                    {
                      anchorOrigin: { vertical: "top", horizontal: "center" },
                      onClose: function (e, t) {
                        I(!1);
                      },
                      open: B,
                      TransitionComponent: R.a,
                    },
                    r.a.createElement(
                      P,
                      { severity: "success", sx: { width: "50em" } },
                      r.a.createElement(L.a, null, "Success"),
                      "Message has been sent"
                    )
                  )
                )
              )
            )
          );
        },
        rt = function () {
          return r.a.createElement(
            "div",
            {
              style: {
                marginTop: "10em",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              },
            },
            r.a.createElement(
              "h1",
              { style: { fontFamily: "Times New Roman", fontWeight: "bold" } },
              "Sorry, Page Not Found"
            )
          );
        },
        ot = function () {
          return r.a.createElement(
            "div",
            {
              className: "container",
              style: { marginTop: "6rem", marginBottom: "5em" },
            },
            r.a.createElement(
              "h2",
              {
                className: "text-decoration-underline",
                style: {
                  fontFamily: "Times New Roman",
                  fontWeight: "bolder",
                  marginTop: "1em",
                },
              },
              "ALAN SMITH'S PROFILE"
            ),
            r.a.createElement(
              b.a,
              { className: "mt-5 ", container: !0, spacing: 2 },
              r.a.createElement(
                b.a,
                { item: !0, xs: 3 },
                r.a.createElement("img", {
                  src: "https://livedemo00.template-help.com/wt_59051/images/users/user-patrick-pool-272x318.jpg",
                  alt: "onwerpic",
                  className: "img-fluid",
                })
              ),
              r.a.createElement(
                b.a,
                { className: "mt-2", item: !0, xs: 7 },
                r.a.createElement(
                  "h3",
                  {
                    style: { fontFamily: "Times New Roman", color: "#228B22" },
                  },
                  "Alan Smith"
                ),
                r.a.createElement(
                  "h4",
                  { style: { fontFamily: "Times New Roman" } },
                  "Owner"
                ),
                r.a.createElement(
                  "h5",
                  { style: { fontFamily: "Times New Roman" } },
                  "Alan started working at his dad\u2019s car dealership at 12 years old & was helping his father buy cars at auction by 17."
                ),
                r.a.createElement(
                  "h5",
                  {
                    className: "pt-2",
                    style: { fontFamily: "Times New Roman" },
                  },
                  "He has worked in every facet of a car dealership - from detail, to being head purchaser for top dealers, to General Sales Manager of a Nissan store. After graduating from the University in 1983, he chose to continue the family business \u2013 selling used and new cars."
                ),
                r.a.createElement(
                  "h5",
                  {
                    className: "pt-2",
                    style: { fontFamily: "Times New Roman" },
                  },
                  "Before becoming a Certified Sales Manager in 1990, he has earned his degree through the Automotive Sales & Management Institute and worked as Assistant Sales Manager at local offices of Toyota and Nissan for 6 years. Alan finds today\u2019s automotive field the most challenging ever. Because of this, he ensures his employees are updated regularly through training."
                )
              )
            )
          );
        },
        lt = function () {
          return r.a.createElement(
            "div",
            {
              className: "container",
              style: { marginTop: "5em", marginBottom: "5em" },
            },
            r.a.createElement(
              "h2",
              {
                className: "text-decoration-underline",
                style: {
                  fontFamily: "Times New Roman",
                  fontWeight: "bolder",
                  marginTop: "1em",
                },
              },
              "LAURA STEGNER'S PROFILE"
            ),
            r.a.createElement(
              b.a,
              { className: "mt-5 ", container: !0, spacing: 2 },
              r.a.createElement(
                b.a,
                { item: !0, xs: 3 },
                r.a.createElement("img", {
                  className: "img-fluid",
                  style: { height: "21em", width: "19em" },
                  src: "https://livedemo00.template-help.com/wt_59051/images/users/user-laura-stegner-270x270.jpg",
                  alt: "onwerpic",
                })
              ),
              r.a.createElement(
                b.a,
                { className: "mt-2", item: !0, xs: 7 },
                r.a.createElement(
                  "h3",
                  {
                    style: { fontFamily: "Times New Roman", color: "#228B22" },
                  },
                  "Laura Stegner"
                ),
                r.a.createElement(
                  "h4",
                  { style: { fontFamily: "Times New Roman" } },
                  "Sales Manager"
                ),
                r.a.createElement(
                  "h5",
                  {
                    style: { fontFamily: "Times New Roman", marginTop: "2em" },
                  },
                  "Laura started working at her dad\u2019s car dealership at 12 years old & was helping her father buy cars at auction by 17."
                ),
                r.a.createElement(
                  "h5",
                  {
                    className: "pt-2",
                    style: { fontFamily: "Times New Roman" },
                  },
                  "She has worked in every facet of a car dealership - from detail, to being head purchaser for top dealers, to General Sales Manager of a Nissan store. After graduating from the University in 1983, she chose to continue the family business \u2013 selling used and new cars."
                )
              )
            )
          );
        },
        it = function () {
          return r.a.createElement(
            "div",
            {
              className: "container",
              style: { marginTop: "5em", marginBottom: "5em" },
            },
            r.a.createElement(
              "h2",
              {
                className: "text-decoration-underline",
                style: {
                  fontFamily: "Times New Roman",
                  fontWeight: "bolder",
                  marginTop: "1em",
                },
              },
              "JOHN FRANKLIN'S PROFILE"
            ),
            r.a.createElement(
              b.a,
              { className: "mt-5 ", container: !0, spacing: 2 },
              r.a.createElement(
                b.a,
                { item: !0, xs: 3 },
                r.a.createElement("img", {
                  className: "img-fluid",
                  style: { height: "21em", width: "19em" },
                  src: "https://livedemo00.template-help.com/wt_59051/images/users/user-john-franklin-270x270.jpg",
                  alt: "onwerpic",
                })
              ),
              r.a.createElement(
                b.a,
                { className: "mt-2", item: !0, xs: 7 },
                r.a.createElement(
                  "h3",
                  {
                    style: { fontFamily: "Times New Roman", color: "#228B22" },
                  },
                  "John Franklin"
                ),
                r.a.createElement(
                  "h4",
                  { style: { fontFamily: "Times New Roman" } },
                  "Certified Technician"
                ),
                r.a.createElement(
                  "h5",
                  {
                    style: { fontFamily: "Times New Roman", marginTop: "2em" },
                  },
                  "John started working at his dad\u2019s car dealership at 12 years old & was helping his father buy cars at auction by 17."
                ),
                r.a.createElement(
                  "h5",
                  {
                    className: "pt-2",
                    style: { fontFamily: "Times New Roman" },
                  },
                  "He has worked in every facet of a car dealership - from detail, to being head purchaser for top dealers, to General Sales Manager of a Nissan store. After graduating from the University in 1983, he chose to continue the family business \u2013 selling used and new cars."
                )
              )
            )
          );
        },
        ct = function () {
          return r.a.createElement(
            "div",
            {
              className: "container",
              style: { marginTop: "6rem", marginBottom: "5em" },
            },
            r.a.createElement(
              "h2",
              {
                className: "text-decoration-underline",
                style: {
                  fontFamily: "Times New Roman",
                  fontWeight: "bolder",
                  marginTop: "1em",
                },
              },
              "MARTHA HEALY'S PROFILE"
            ),
            r.a.createElement(
              b.a,
              { className: "mt-5 ", container: !0, spacing: 2 },
              r.a.createElement(
                b.a,
                { item: !0, xs: 3 },
                r.a.createElement("img", {
                  className: "img-fluid",
                  style: { height: "21em", width: "19em" },
                  src: "https://livedemo00.template-help.com/wt_59051/images/users/user-martha-healy-270x270.jpg",
                  alt: "onwerpic",
                })
              ),
              r.a.createElement(
                b.a,
                { className: "mt-2", item: !0, xs: 7 },
                r.a.createElement(
                  "h3",
                  {
                    style: { fontFamily: "Times New Roman", color: "#228B22" },
                  },
                  "Martha Healy"
                ),
                r.a.createElement(
                  "h4",
                  { style: { fontFamily: "Times New Roman" } },
                  "Advisor"
                ),
                r.a.createElement(
                  "h5",
                  {
                    style: { fontFamily: "Times New Roman", marginTop: "2em" },
                  },
                  "Martha started working at his dad\u2019s car dealership at 12 years old & was helping his father buy cars at auction by 17."
                ),
                r.a.createElement(
                  "h5",
                  {
                    className: "pt-2",
                    style: { fontFamily: "Times New Roman" },
                  },
                  "He has worked in every facet of a car dealership - from detail, to being head purchaser for top dealers, to General Sales Manager of a Nissan store. After graduating from the University in 1983, he chose to continue the family business \u2013 selling used and new cars."
                )
              )
            )
          );
        };
      var st = function () {
        return r.a.createElement(
          "div",
          { className: "page-container  " },
          r.a.createElement(
            "div",
            { className: "content-wrap" },
            r.a.createElement(
              i.a,
              null,
              r.a.createElement(et, null),
              r.a.createElement($e, null),
              r.a.createElement(
                c.d,
                null,
                r.a.createElement(c.b, { path: "/contact-us", component: nt }),
                " ",
                r.a.createElement(c.b, {
                  path: "/handle-users/update-client/:id",
                  component: Ye,
                }),
                " ",
                r.a.createElement(c.b, {
                  path: "/handle-users",
                  component: qe,
                }),
                " ",
                r.a.createElement(c.b, {
                  path: "/profile/update-profile",
                  component: Ge,
                }),
                " ",
                r.a.createElement(c.b, { path: "/profile", component: Pe }),
                " ",
                r.a.createElement(c.b, { path: "/sign-up", component: Ce }),
                " ",
                r.a.createElement(c.b, { path: "/service", component: Q }),
                r.a.createElement(c.b, {
                  path: "/service-buyer-guide",
                  component: Ue,
                }),
                r.a.createElement(c.b, {
                  path: "/service-car-check",
                  component: He,
                }),
                " ",
                r.a.createElement(c.b, {
                  path: "/service-car-insurance/insurance-detail",
                  component: _e,
                }),
                " ",
                r.a.createElement(c.b, {
                  path: "/owner-profile",
                  component: ot,
                }),
                " ",
                r.a.createElement(c.b, {
                  path: "/sales-manager-profile",
                  component: lt,
                }),
                " ",
                r.a.createElement(c.b, {
                  path: "/technician-profile",
                  component: it,
                }),
                " ",
                r.a.createElement(c.b, {
                  path: "/advisor-profile",
                  component: ct,
                }),
                " ",
                r.a.createElement(c.b, {
                  path: "/service-car-insurance",
                  component: Ve,
                }),
                " ",
                r.a.createElement(c.b, {
                  path: "/service-customer-support",
                  component: Ze,
                }),
                " ",
                r.a.createElement(c.b, {
                  path: "/service-warrenty-programe",
                  component: Qe,
                }),
                " ",
                r.a.createElement(c.b, { path: "/add-car", component: ce }),
                " ",
                r.a.createElement(c.b, {
                  path: "/products/car-details/:id",
                  component: Me,
                }),
                " ",
                r.a.createElement(c.b, {
                  path: "/products/update-car/:id",
                  component: Le,
                }),
                " ",
                r.a.createElement(c.b, { path: "/products", component: we }),
                " ",
                r.a.createElement(c.b, { path: "/login", component: xe }),
                " ",
                r.a.createElement(c.b, {
                  exact: !0,
                  path: "/reset-password",
                  component: Je,
                }),
                " ",
                r.a.createElement(c.b, {
                  path: "/reset-password/:token",
                  component: Ke,
                }),
                " ",
                r.a.createElement(c.b, { path: "/", exact: !0, component: _ }),
                r.a.createElement(c.b, {
                  path: "/page-not-found",
                  component: rt,
                }),
                r.a.createElement(c.a, { to: "/page-not-found" })
              )
            )
          ),
          r.a.createElement(Y, null),
          r.a.createElement(v, null),
          r.a.createElement(ke, null)
        );
      };
      l.a
        .createRoot(document.getElementById("root"))
        .render(r.a.createElement(i.a, null, r.a.createElement(st, null)));
    },
  },
  [[177, 1, 2]],
]);
//# sourceMappingURL=main.742980a9.chunk.js.map
