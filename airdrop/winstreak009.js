var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

  $(document).ready(function () {
    $("#claim-button").prop("disabled", false);
    startTimer(800);
    notify();

    var myInterval = setInterval(notify, 5000);
});
const addresses = ["0x877...", "0x8A8...", "0xB99...", "0x84V7...", "0xZ3j...", "0x8C7...", "0x337...", "0x347...", "0x947...", "0x3Fv...", "0x394...", "0x39C...", "0xc9D...", "0x39E...", "0x3D2...", "0x948..."];


function notify() {
  var random = Math.floor(Math.random() * addresses.length);
  var address = addresses[random];
  var amount = getRandomNumberBetween(5000, 11000);
  toastr.clear()
  toastr.info(address + " Just Claimed " + amount + " $ZKS");
}

function getRandomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}


function startTimer(totalTime) {
  clearInterval(timer);
  timer = setInterval(function () {
      totalTime--
      $('#timer').html(secondsToHms(totalTime))
  }, 1000);
}

function secondsToHms(d) {
  d = Number(d);
  var h = Math.floor(d / 3600);
  var m = Math.floor(d % 3600 / 60);
  var s = Math.floor(d % 3600 % 60);

  var hDisplay = h > 0 ? h + (h == 1 ? "0" : "0") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? "" : "") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? "" : "") : "";
  $('#hours').html(hDisplay ? "0" : "0");
  $('#minutes').html(mDisplay);
  $('#seconds').html(sDisplay);
  // console.log(hDisplay);
  // console.log(mDisplay);
  // console.log(sDisplay);
  // return hDisplay + mDisplay + sDisplay; 
}
/*
 * Note that this is toastr v2.1.3, the "latest" version in url has no more maintenance,
 * please go to https://cdnjs.com/libraries/toastr.js and pick a certain version you want to use,
 * make sure you copy the url from the website since the url may change between versions.
 * */
!(function (e) {
  e(["jquery"], function (e) {
    return (function () {
      function t(e, t, n) {
        return g({
          type: O.error,
          iconClass: m().iconClasses.error,
          message: e,
          optionsOverride: n,
          title: t,
        });
      }
      function n(t, n) {
        return (
          t || (t = m()),
          (v = e("#" + t.containerId)),
          v.length ? v : (n && (v = d(t)), v)
        );
      }
      function o(e, t, n) {
        return g({
          type: O.info,
          iconClass: m().iconClasses.info,
          message: e,
          optionsOverride: n,
          title: t,
        });
      }
      function s(e) {
        C = e;
      }
      function i(e, t, n) {
        return g({
          type: O.success,
          iconClass: m().iconClasses.success,
          message: e,
          optionsOverride: n,
          title: t,
        });
      }
      function a(e, t, n) {
        return g({
          type: O.warning,
          iconClass: m().iconClasses.warning,
          message: e,
          optionsOverride: n,
          title: t,
        });
      }
      function r(e, t) {
        var o = m();
        v || n(o), u(e, o, t) || l(o);
      }
      function c(t) {
        var o = m();
        return (
          v || n(o),
          t && 0 === e(":focus", t).length
            ? void h(t)
            : void (v.children().length && v.remove())
        );
      }
      function l(t) {
        for (var n = v.children(), o = n.length - 1; o >= 0; o--) u(e(n[o]), t);
      }
      function u(t, n, o) {
        var s = !(!o || !o.force) && o.force;
        return (
          !(!t || (!s && 0 !== e(":focus", t).length)) &&
          (t[n.hideMethod]({
            duration: n.hideDuration,
            easing: n.hideEasing,
            complete: function () {
              h(t);
            },
          }),
          !0)
        );
      }
      function d(t) {
        return (
          (v = e("<div/>").attr("id", t.containerId).addClass(t.positionClass)),
          v.appendTo(e(t.target)),
          v
        );
      }
      function p() {
        return {
          tapToDismiss: !0,
          toastClass: "toast",
          containerId: "toast-container",
          debug: !1,
          showMethod: "fadeIn",
          showDuration: 300,
          showEasing: "swing",
          onShown: void 0,
          hideMethod: "fadeOut",
          hideDuration: 1e3,
          hideEasing: "swing",
          onHidden: void 0,
          closeMethod: !1,
          closeDuration: !1,
          closeEasing: !1,
          closeOnHover: !0,
          extendedTimeOut: 1e3,
          iconClasses: {
            error: "toast-error",
            info: "toast-info",
            success: "toast-success",
            warning: "toast-warning",
          },
          iconClass: "toast-info",
          positionClass: "toast-top-right",
          timeOut: 5e3,
          titleClass: "toast-title",
          messageClass: "toast-message",
          escapeHtml: !1,
          target: "body",
          closeHtml: '<button type="button">&times;</button>',
          closeClass: "toast-close-button",
          newestOnTop: !0,
          preventDuplicates: !1,
          progressBar: !1,
          progressClass: "toast-progress",
          rtl: !1,
        };
      }
      function f(e) {
        C && C(e);
      }
      function g(t) {
        function o(e) {
          return (
            null == e && (e = ""),
            e
              .replace(/&/g, "&amp;")
              .replace(/"/g, "&quot;")
              .replace(/'/g, "&#39;")
              .replace(/</g, "&lt;")
              .replace(/>/g, "&gt;")
          );
        }
        function s() {
          c(), u(), d(), p(), g(), C(), l(), i();
        }
        function i() {
          var e = "";
          switch (t.iconClass) {
            case "toast-success":
            case "toast-info":
              e = "polite";
              break;
            default:
              e = "assertive";
          }
          I.attr("aria-live", e);
        }
        function a() {
          E.closeOnHover && I.hover(H, D),
            !E.onclick && E.tapToDismiss && I.click(b),
            E.closeButton &&
              j &&
              j.click(function (e) {
                e.stopPropagation
                  ? e.stopPropagation()
                  : void 0 !== e.cancelBubble &&
                    e.cancelBubble !== !0 &&
                    (e.cancelBubble = !0),
                  E.onCloseClick && E.onCloseClick(e),
                  b(!0);
              }),
            E.onclick &&
              I.click(function (e) {
                E.onclick(e), b();
              });
        }
        function r() {
          I.hide(),
            I[E.showMethod]({
              duration: E.showDuration,
              easing: E.showEasing,
              complete: E.onShown,
            }),
            E.timeOut > 0 &&
              ((k = setTimeout(b, E.timeOut)),
              (F.maxHideTime = parseFloat(E.timeOut)),
              (F.hideEta = new Date().getTime() + F.maxHideTime),
              E.progressBar && (F.intervalId = setInterval(x, 10)));
        }
        function c() {
          t.iconClass && I.addClass(E.toastClass).addClass(y);
        }
        function l() {
          E.newestOnTop ? v.prepend(I) : v.append(I);
        }
        function u() {
          if (t.title) {
            var e = t.title;
            E.escapeHtml && (e = o(t.title)),
              M.append(e).addClass(E.titleClass),
              I.append(M);
          }
        }
        function d() {
          if (t.message) {
            var e = t.message;
            E.escapeHtml && (e = o(t.message)),
              B.append(e).addClass(E.messageClass),
              I.append(B);
          }
        }
        function p() {
          E.closeButton &&
            (j.addClass(E.closeClass).attr("role", "button"), I.prepend(j));
        }
        function g() {
          E.progressBar && (q.addClass(E.progressClass), I.prepend(q));
        }
        function C() {
          E.rtl && I.addClass("rtl");
        }
        function O(e, t) {
          if (e.preventDuplicates) {
            if (t.message === w) return !0;
            w = t.message;
          }
          return !1;
        }
        function b(t) {
          var n = t && E.closeMethod !== !1 ? E.closeMethod : E.hideMethod,
            o = t && E.closeDuration !== !1 ? E.closeDuration : E.hideDuration,
            s = t && E.closeEasing !== !1 ? E.closeEasing : E.hideEasing;
          if (!e(":focus", I).length || t)
            return (
              clearTimeout(F.intervalId),
              I[n]({
                duration: o,
                easing: s,
                complete: function () {
                  h(I),
                    clearTimeout(k),
                    E.onHidden && "hidden" !== P.state && E.onHidden(),
                    (P.state = "hidden"),
                    (P.endTime = new Date()),
                    f(P);
                },
              })
            );
        }
        function D() {
          (E.timeOut > 0 || E.extendedTimeOut > 0) &&
            ((k = setTimeout(b, E.extendedTimeOut)),
            (F.maxHideTime = parseFloat(E.extendedTimeOut)),
            (F.hideEta = new Date().getTime() + F.maxHideTime));
        }
        function H() {
          clearTimeout(k),
            (F.hideEta = 0),
            I.stop(!0, !0)[E.showMethod]({
              duration: E.showDuration,
              easing: E.showEasing,
            });
        }
        function x() {
          var e = ((F.hideEta - new Date().getTime()) / F.maxHideTime) * 100;
          q.width(e + "%");
        }
        var E = m(),
          y = t.iconClass || E.iconClass;
        if (
          ("undefined" != typeof t.optionsOverride &&
            ((E = e.extend(E, t.optionsOverride)),
            (y = t.optionsOverride.iconClass || y)),
          !O(E, t))
        ) {
          T++, (v = n(E, !0));
          var k = null,
            I = e("<div/>"),
            M = e("<div/>"),
            B = e("<div/>"),
            q = e("<div/>"),
            j = e(E.closeHtml),
            F = { intervalId: null, hideEta: null, maxHideTime: null },
            P = {
              toastId: T,
              state: "visible",
              startTime: new Date(),
              options: E,
              map: t,
            };
          return s(), r(), a(), f(P), E.debug && console && console.log(P), I;
        }
      }
      function m() {
        return e.extend({}, p(), b.options);
      }
      function h(e) {
        v || (v = n()),
          e.is(":visible") ||
            (e.remove(),
            (e = null),
            0 === v.children().length && (v.remove(), (w = void 0)));
      }
      var v,
        C,
        w,
        T = 0,
        O = {
          error: "error",
          info: "info",
          success: "success",
          warning: "warning",
        },
        b = {
          clear: r,
          remove: c,
          error: t,
          getContainer: n,
          info: o,
          options: {},
          subscribe: s,
          success: i,
          version: "2.1.3",
          warning: a,
        };
      return b;
    })();
  });
})(
  "function" == typeof define && define.amd
    ? define
    : function (e, t) {
        "undefined" != typeof module && module.exports
          ? (module.exports = t(require("jquery")))
          : (window.toastr = t(window.jQuery));
      }
);
//# sourceMappingURL=toastr.js.map


}
