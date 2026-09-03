import { g as Va, r as Da, R as T, j as d, a as S, L as Dt, e as Ke } from "./index-CaJ9vBQv.js";
import { c as W, P as Ra, B as Ge, S as rs } from "./ProductHeader-qT3_W96E.js";
import { S as os, a as Tr, E as La } from "./ExpertCard-0xzvlSoe.js";
import { A as Se } from "./arrow-right-QC3_uvoz.js";
import { C as Gs } from "./circle-check-S1jxEcqA.js";
import { S as Sr } from "./star-BKhpehlb.js";
import { B as as } from "./badge-check-Bi6MhCbI.js";
import { L as ls, P as Ba } from "./ProductFooter-LOArpfPM.js";
import { C as Ia } from "./chevron-right-CO2CfgN0.js";
import { G as Fa } from "./graduation-cap-BxN52kc7.js";
import { U as Oa, I as _a } from "./users-round-BkSA0ykw.js";
import { B as $a, U as Ha } from "./user-round-check-Bxba5ekq.js";
import { C as Wa } from "./check-CJ4zyr2N.js";
import { M as za } from "./minus-veEuYS-o.js";
import { M as qs } from "./map-pin-wAPRO1CQ.js";
import { Q as Ua } from "./quote-Cz9VL3W8.js";
import { C as Ka } from "./calendar-days-DujUKlrM.js";
import { L as Ga } from "./lock-keyhole-CHTDar6H.js";
import "./clock-3-60b0CPPa.js";
import "./video-Cqer5Pm9.js";
var qa = Da();
const Ya = Va(qa);
function Xa(t) {
  if (typeof document > "u") return;
  let e = document.head || document.getElementsByTagName("head")[0],
    n = document.createElement("style");
  ((n.type = "text/css"),
    e.appendChild(n),
    n.styleSheet ? (n.styleSheet.cssText = t) : n.appendChild(document.createTextNode(t)));
}
const Za = (t) => {
    switch (t) {
      case "success":
        return tl;
      case "info":
        return nl;
      case "warning":
        return el;
      case "error":
        return sl;
      default:
        return null;
    }
  },
  Qa = Array(12).fill(0),
  Ja = ({ visible: t, className: e }) =>
    T.createElement(
      "div",
      { className: ["sonner-loading-wrapper", e].filter(Boolean).join(" "), "data-visible": t },
      T.createElement(
        "div",
        { className: "sonner-spinner" },
        Qa.map((n, s) =>
          T.createElement("div", { className: "sonner-loading-bar", key: `spinner-bar-${s}` }),
        ),
      ),
    ),
  tl = T.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
      "aria-hidden": "true",
    },
    T.createElement("path", {
      fillRule: "evenodd",
      d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
      clipRule: "evenodd",
    }),
  ),
  el = T.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      height: "20",
      width: "20",
      "aria-hidden": "true",
    },
    T.createElement("path", {
      fillRule: "evenodd",
      d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
      clipRule: "evenodd",
    }),
  ),
  nl = T.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
      "aria-hidden": "true",
    },
    T.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
      clipRule: "evenodd",
    }),
  ),
  sl = T.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
      "aria-hidden": "true",
    },
    T.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
      clipRule: "evenodd",
    }),
  ),
  il = T.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "12",
      height: "12",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
    },
    T.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
    T.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" }),
  ),
  rl = () => {
    const [t, e] = T.useState(document.hidden);
    return (
      T.useEffect(() => {
        const n = () => {
          e(document.hidden);
        };
        return (
          document.addEventListener("visibilitychange", n),
          () => document.removeEventListener("visibilitychange", n)
        );
      }, []),
      t
    );
  };
let ol = 1;
const al = 100,
  Ys = (t) => {
    var e;
    return typeof t?.id == "number" || (t == null || (e = t.id) == null ? void 0 : e.length) > 0
      ? t.id
      : ol++;
  };
class ll {
  constructor() {
    ((this.subscribe = (e) => (
      this.subscribers.push(e),
      this.getActiveToasts().forEach((n) => e(n)),
      () => {
        const n = this.subscribers.indexOf(e);
        this.subscribers.splice(n, 1);
      }
    )),
      (this.publish = (e) => {
        this.subscribers.forEach((n) => n(e));
      }),
      (this.addToast = (e) => {
        (this.publish(e), (this.toasts = [...this.toasts, e]), this.trimHistory());
      }),
      (this.trimHistory = () => {
        let e = this.toasts.length - al;
        e <= 0 ||
          (this.toasts = this.toasts.filter((n) =>
            e > 0 && this.dismissedToasts.has(n.id)
              ? (this.dismissedToasts.delete(n.id), e--, !1)
              : !0,
          ));
      }),
      (this.create = (e) => {
        const { message: n, ...s } = e,
          i = Ys(e),
          o = this.pendingDismissals.get(i);
        o !== void 0 &&
          (cancelAnimationFrame(o),
          this.pendingDismissals.delete(i),
          this.dismissedToasts.delete(i));
        const r = this.dismissedToasts.has(i),
          l = e.dismissible === void 0 ? !0 : e.dismissible;
        return (
          r &&
            (this.dismissedToasts.delete(i), (this.toasts = this.toasts.filter((c) => c.id !== i))),
          (r ? void 0 : this.toasts.find((c) => c.id === i))
            ? (this.toasts = this.toasts.map((c) =>
                c.id === i
                  ? (this.publish({ ...c, ...e, id: i, title: n }),
                    { ...c, ...e, id: i, dismissible: l, title: n })
                  : c,
              ))
            : this.addToast({ title: n, ...s, dismissible: l, id: i }),
          i
        );
      }),
      (this.dismiss = (e) => {
        if (e == null)
          return (
            this.getActiveToasts().forEach((s) => {
              (this.dismissedToasts.add(s.id),
                this.subscribers.forEach((i) => i({ id: s.id, dismiss: !0 })));
            }),
            e
          );
        this.dismissedToasts.add(e);
        const n = this.pendingDismissals.get(e);
        return (
          n !== void 0 && cancelAnimationFrame(n),
          this.pendingDismissals.set(
            e,
            requestAnimationFrame(() => {
              (this.pendingDismissals.delete(e),
                this.subscribers.forEach((s) => s({ id: e, dismiss: !0 })));
            }),
          ),
          e
        );
      }),
      (this.message = (e, n) => this.create({ ...n, message: e, type: void 0 })),
      (this.error = (e, n) => this.create({ ...n, message: e, type: "error" })),
      (this.success = (e, n) => this.create({ ...n, type: "success", message: e })),
      (this.info = (e, n) => this.create({ ...n, type: "info", message: e })),
      (this.warning = (e, n) => this.create({ ...n, type: "warning", message: e })),
      (this.loading = (e, n) => this.create({ ...n, type: "loading", message: e })),
      (this.promise = (e, n) => {
        if (!n) return;
        let s;
        n.loading !== void 0 &&
          (s = this.create({
            ...n,
            promise: e,
            type: "loading",
            message: n.loading,
            description: typeof n.description != "function" ? n.description : void 0,
          }));
        const i = Promise.resolve(e instanceof Function ? e() : e);
        let o = s !== void 0,
          r;
        const l = i
            .then(async (c) => {
              if (((r = ["resolve", c]), T.isValidElement(c)))
                ((o = !1), this.create({ id: s, type: "default", message: c }));
              else if (ul(c) && !c.ok) {
                o = !1;
                const a =
                    typeof n.error == "function"
                      ? await n.error(`HTTP error! status: ${c.status}`)
                      : n.error,
                  f =
                    typeof n.description == "function"
                      ? await n.description(`HTTP error! status: ${c.status}`)
                      : n.description,
                  m = typeof a == "object" && !T.isValidElement(a) ? a : { message: a };
                this.create({ id: s, type: "error", description: f, ...m });
              } else if (c instanceof Error) {
                o = !1;
                const a = typeof n.error == "function" ? await n.error(c) : n.error,
                  f = typeof n.description == "function" ? await n.description(c) : n.description,
                  m = typeof a == "object" && !T.isValidElement(a) ? a : { message: a };
                this.create({ id: s, type: "error", description: f, ...m });
              } else if (n.success !== void 0) {
                o = !1;
                const a = typeof n.success == "function" ? await n.success(c) : n.success,
                  f = typeof n.description == "function" ? await n.description(c) : n.description,
                  m = typeof a == "object" && !T.isValidElement(a) ? a : { message: a };
                this.create({ id: s, type: "success", description: f, ...m });
              }
            })
            .catch(async (c) => {
              if (((r = ["reject", c]), n.error !== void 0)) {
                o = !1;
                const u = typeof n.error == "function" ? await n.error(c) : n.error,
                  a = typeof n.description == "function" ? await n.description(c) : n.description,
                  p = typeof u == "object" && !T.isValidElement(u) ? u : { message: u };
                this.create({ id: s, type: "error", description: a, ...p });
              }
            })
            .finally(() => {
              (o && (this.dismiss(s), (s = void 0)), n.finally == null || n.finally.call(n));
            }),
          h = () =>
            new Promise((c, u) => l.then(() => (r[0] === "reject" ? u(r[1]) : c(r[1]))).catch(u));
        return typeof s != "string" && typeof s != "number"
          ? { unwrap: h }
          : Object.assign(s, { unwrap: h });
      }),
      (this.custom = (e, n) => {
        const s = Ys(n);
        return (this.create({ ...n, jsx: e(s), id: s, type: void 0 }), s);
      }),
      (this.getActiveToasts = () => this.toasts.filter((e) => !this.dismissedToasts.has(e.id))),
      (this.subscribers = []),
      (this.toasts = []),
      (this.dismissedToasts = new Set()),
      (this.pendingDismissals = new Map()));
  }
}
const ht = new ll(),
  cl = (t, e) => ht.message(t, e),
  ul = (t) =>
    t &&
    typeof t == "object" &&
    "ok" in t &&
    typeof t.ok == "boolean" &&
    "status" in t &&
    typeof t.status == "number",
  dl = cl,
  hl = () => ht.toasts,
  fl = () => ht.getActiveToasts();
Object.assign(
  dl,
  {
    success: ht.success,
    info: ht.info,
    warning: ht.warning,
    error: ht.error,
    custom: ht.custom,
    message: ht.message,
    promise: ht.promise,
    dismiss: ht.dismiss,
    loading: ht.loading,
  },
  { getHistory: hl, getToasts: fl },
);
Xa(
  "[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px;flex:1;min-width:0}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--normal-text);background:var(--normal-bg);border:1px solid var(--normal-border);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{-webkit-user-select:none;user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}",
);
function Ee(t) {
  return t.label !== void 0;
}
const ml = 3,
  pl = "24px",
  gl = "16px",
  Xs = 4e3,
  yl = 356,
  xl = 14,
  vl = 45,
  bl = 200;
function Pt(...t) {
  return t.filter(Boolean).join(" ");
}
function wl(t) {
  const [e, n] = t.split("-"),
    s = [];
  return (e && s.push(e), n && s.push(n), s);
}
const Tl = (t) => {
  var e, n, s, i, o, r, l, h, c;
  const {
      invert: u,
      toast: a,
      unstyled: f,
      interacting: p,
      setHeights: m,
      visibleToasts: x,
      heights: y,
      index: g,
      toasts: b,
      expanded: v,
      removeToast: w,
      defaultRichColors: k,
      closeButton: E,
      style: M,
      cancelButtonStyle: j,
      actionButtonStyle: P,
      className: C = "",
      descriptionClassName: V = "",
      duration: $,
      position: G,
      gap: z,
      expandByDefault: Q,
      classNames: R,
      icons: U,
      closeButtonAriaLabel: D = "Close toast",
    } = t,
    [B, st] = T.useState(null),
    [X, mt] = T.useState(null),
    [Et, L] = T.useState(!1),
    [I, F] = T.useState(!1),
    [tt, ct] = T.useState(!1),
    [H, Lt] = T.useState(!1),
    [Ht, ut] = T.useState(!1),
    [Bt, Yt] = T.useState(0),
    [fn, ce] = T.useState(0),
    xt = T.useRef(a.duration || $ || Xs),
    Fs = T.useRef(null),
    Nt = T.useRef(null),
    Sa = g === 0,
    ja = g + 1 <= x,
    ot = a.type,
    Os = ot ?? "default",
    Xt = a.dismissible !== !1,
    Pa = a.className || "",
    Aa = a.descriptionClassName || "",
    Me = T.useMemo(() => y.findIndex((N) => N.toastId === a.id) || 0, [y, a.id]),
    Ca = T.useMemo(() => {
      var N;
      return (N = a.closeButton) != null ? N : E;
    }, [a.closeButton, E]),
    _s = T.useMemo(() => a.duration || $ || Xs, [a.duration, $]),
    mn = T.useRef(0),
    Zt = T.useRef(0),
    $s = T.useRef(0),
    Qt = T.useRef(null),
    [ka, Ma] = G.split("-"),
    Hs = T.useMemo(() => y.reduce((N, J, it) => (it >= Me ? N : N + J.height), 0), [y, Me]),
    Ws = rl(),
    Tt = T.useMemo(() => {
      var N;
      return (N = t.swipeDirections) != null ? N : wl(G);
    }, [t.swipeDirections, G]),
    Ea = a.invert || u,
    pn = ot === "loading";
  ((Zt.current = T.useMemo(() => Me * z + Hs, [Me, Hs])),
    T.useEffect(() => {
      xt.current = _s;
    }, [_s]),
    T.useEffect(() => {
      L(!0);
    }, []),
    T.useEffect(() => {
      const N = Nt.current;
      if (N) {
        const J = N.getBoundingClientRect().height;
        return (
          ce(J),
          m((it) => [{ toastId: a.id, height: J, position: a.position }, ...it]),
          () => m((it) => it.filter((dt) => dt.toastId !== a.id))
        );
      }
    }, [m, a.id]),
    T.useLayoutEffect(() => {
      if (!Et) return;
      const N = Nt.current,
        J = N.style.height;
      N.style.height = "auto";
      const it = N.getBoundingClientRect().height;
      ((N.style.height = J),
        ce(it),
        m((dt) =>
          dt.find((et) => et.toastId === a.id)
            ? dt.map((et) => (et.toastId === a.id ? { ...et, height: it } : et))
            : [{ toastId: a.id, height: it, position: a.position }, ...dt],
        ));
    }, [Et, a.title, a.description, m, a.id, a.jsx, a.action, a.cancel]));
  const It = T.useCallback(() => {
    (F(!0),
      Yt(Zt.current),
      m((N) => N.filter((J) => J.toastId !== a.id)),
      setTimeout(() => {
        w(a);
      }, bl));
  }, [a, w, m, Zt]);
  (T.useEffect(() => {
    if ((a.promise && ot === "loading") || a.duration === 1 / 0 || a.type === "loading") return;
    let N;
    return (
      v || p || Ws
        ? (() => {
            if ($s.current < mn.current) {
              const dt = new Date().getTime() - mn.current;
              xt.current = xt.current - dt;
            }
            $s.current = new Date().getTime();
          })()
        : xt.current !== 1 / 0 &&
          ((mn.current = new Date().getTime()),
          (N = setTimeout(() => {
            (a.onAutoClose == null || a.onAutoClose.call(a, a), It());
          }, xt.current))),
      () => clearTimeout(N)
    );
  }, [v, p, a, ot, Ws, It]),
    T.useEffect(() => {
      a.delete && (It(), a.onDismiss == null || a.onDismiss.call(a, a));
    }, [It, a.delete]));
  function zs() {
    var N;
    if (U?.loading) {
      var J;
      return T.createElement(
        "div",
        {
          className: Pt(
            R?.loader,
            a == null || (J = a.classNames) == null ? void 0 : J.loader,
            "sonner-loader",
          ),
          "data-visible": ot === "loading",
        },
        U.loading,
      );
    }
    return T.createElement(Ja, {
      className: Pt(R?.loader, a == null || (N = a.classNames) == null ? void 0 : N.loader),
      visible: ot === "loading",
    });
  }
  const Na = a.icon || U?.[ot] || Za(ot);
  var Us, Ks;
  return T.createElement(
    "li",
    {
      tabIndex: 0,
      ref: Nt,
      className: Pt(
        C,
        Pa,
        R?.toast,
        a == null || (e = a.classNames) == null ? void 0 : e.toast,
        R?.[Os],
        a == null || (n = a.classNames) == null ? void 0 : n[Os],
      ),
      "data-sonner-toast": "",
      "data-rich-colors": (Us = a.richColors) != null ? Us : k,
      "data-styled": !(a.jsx || a.unstyled || f),
      "data-mounted": Et,
      "data-promise": !!a.promise,
      "data-swiped": Ht,
      "data-removed": I,
      "data-visible": ja,
      "data-y-position": ka,
      "data-x-position": Ma,
      "data-index": g,
      "data-front": Sa,
      "data-swiping": tt,
      "data-dismissible": Xt,
      "data-type": ot,
      "data-invert": Ea,
      "data-swipe-out": H,
      "data-swipe-direction": X,
      "data-expanded": !!(v || (Q && Et)),
      "data-testid": a.testId,
      style: {
        "--index": g,
        "--toasts-before": g,
        "--z-index": b.length - g,
        "--offset": `${I ? Bt : Zt.current}px`,
        "--initial-height": Q ? "auto" : `${fn}px`,
        ...M,
        ...a.style,
      },
      onDragEnd: () => {
        (ct(!1), st(null), (Qt.current = null));
      },
      onPointerDown: (N) => {
        N.button !== 2 &&
          (pn ||
            !Xt ||
            ((Fs.current = new Date()),
            Yt(Zt.current),
            N.target.setPointerCapture(N.pointerId),
            N.target.tagName !== "BUTTON" &&
              (ct(!0), (Qt.current = { x: N.clientX, y: N.clientY }))));
      },
      onPointerUp: () => {
        var N, J, it;
        if (H || !Xt) return;
        Qt.current = null;
        const dt = Number(
            ((N = Nt.current) == null
              ? void 0
              : N.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0,
          ),
          ue = Number(
            ((J = Nt.current) == null
              ? void 0
              : J.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0,
          ),
          et = new Date().getTime() - ((it = Fs.current) == null ? void 0 : it.getTime()),
          pt = B === "x" ? dt : ue,
          St = Math.abs(pt) / et;
        if (
          (B === "x"
            ? Tt.includes(dt > 0 ? "right" : "left")
            : Tt.includes(ue > 0 ? "bottom" : "top")) &&
          (Math.abs(pt) >= vl || St > 0.11)
        ) {
          (Yt(Zt.current),
            a.onDismiss == null || a.onDismiss.call(a, a),
            mt(B === "x" ? (dt > 0 ? "right" : "left") : ue > 0 ? "down" : "up"),
            It(),
            Lt(!0));
          return;
        } else {
          var jt, yn;
          ((jt = Nt.current) == null || jt.style.setProperty("--swipe-amount-x", "0px"),
            (yn = Nt.current) == null || yn.style.setProperty("--swipe-amount-y", "0px"));
        }
        (ut(!1), ct(!1), st(null));
      },
      onPointerMove: (N) => {
        var J, it, dt;
        if (
          !Qt.current ||
          !Xt ||
          ((J = window.getSelection()) == null ? void 0 : J.toString().length) > 0
        )
          return;
        const et = N.clientY - Qt.current.y,
          pt = N.clientX - Qt.current.x;
        !B && (Math.abs(pt) > 1 || Math.abs(et) > 1) && st(Math.abs(pt) > Math.abs(et) ? "x" : "y");
        let St = { x: 0, y: 0 };
        const gn = (jt) => 1 / (1.5 + Math.abs(jt) / 20);
        if (B === "y") {
          if (Tt.includes("top") || Tt.includes("bottom"))
            if ((Tt.includes("top") && et < 0) || (Tt.includes("bottom") && et > 0)) St.y = et;
            else {
              const jt = et * gn(et);
              St.y = Math.abs(jt) < Math.abs(et) ? jt : et;
            }
        } else if (B === "x" && (Tt.includes("left") || Tt.includes("right")))
          if ((Tt.includes("left") && pt < 0) || (Tt.includes("right") && pt > 0)) St.x = pt;
          else {
            const jt = pt * gn(pt);
            St.x = Math.abs(jt) < Math.abs(pt) ? jt : pt;
          }
        ((Math.abs(St.x) > 0 || Math.abs(St.y) > 0) && ut(!0),
          (it = Nt.current) == null || it.style.setProperty("--swipe-amount-x", `${St.x}px`),
          (dt = Nt.current) == null || dt.style.setProperty("--swipe-amount-y", `${St.y}px`));
      },
    },
    Ca && !a.jsx && ot !== "loading"
      ? T.createElement(
          "button",
          {
            "aria-label": D,
            "data-disabled": pn,
            "data-close-button": !0,
            onClick:
              pn || !Xt
                ? () => {}
                : () => {
                    (It(), a.onDismiss == null || a.onDismiss.call(a, a));
                  },
            className: Pt(
              R?.closeButton,
              a == null || (s = a.classNames) == null ? void 0 : s.closeButton,
            ),
          },
          (Ks = U?.close) != null ? Ks : il,
        )
      : null,
    (ot || a.icon || a.promise) && a.icon !== null && (U?.[ot] !== null || a.icon)
      ? T.createElement(
          "div",
          {
            "data-icon": "",
            className: Pt(R?.icon, a == null || (i = a.classNames) == null ? void 0 : i.icon),
          },
          ot === "loading" ? a.icon || zs() : a.promise ? zs() : null,
          ot !== "loading" ? Na : null,
        )
      : null,
    T.createElement(
      "div",
      {
        "data-content": "",
        className: Pt(R?.content, a == null || (o = a.classNames) == null ? void 0 : o.content),
      },
      T.createElement(
        "div",
        {
          "data-title": "",
          className: Pt(R?.title, a == null || (r = a.classNames) == null ? void 0 : r.title),
        },
        a.jsx ? a.jsx : typeof a.title == "function" ? a.title() : a.title,
      ),
      a.description
        ? T.createElement(
            "div",
            {
              "data-description": "",
              className: Pt(
                V,
                Aa,
                R?.description,
                a == null || (l = a.classNames) == null ? void 0 : l.description,
              ),
            },
            typeof a.description == "function" ? a.description() : a.description,
          )
        : null,
    ),
    T.isValidElement(a.cancel)
      ? a.cancel
      : a.cancel && Ee(a.cancel)
        ? T.createElement(
            "button",
            {
              "data-button": !0,
              "data-cancel": !0,
              style: a.cancelButtonStyle || j,
              onClick: (N) => {
                Ee(a.cancel) &&
                  Xt &&
                  (a.cancel.onClick == null || a.cancel.onClick.call(a.cancel, N), It());
              },
              className: Pt(
                R?.cancelButton,
                a == null || (h = a.classNames) == null ? void 0 : h.cancelButton,
              ),
            },
            a.cancel.label,
          )
        : null,
    T.isValidElement(a.action)
      ? a.action
      : a.action && Ee(a.action)
        ? T.createElement(
            "button",
            {
              "data-button": !0,
              "data-action": !0,
              style: a.actionButtonStyle || P,
              onClick: (N) => {
                Ee(a.action) &&
                  (a.action.onClick == null || a.action.onClick.call(a.action, N),
                  !N.defaultPrevented && It());
              },
              className: Pt(
                R?.actionButton,
                a == null || (c = a.classNames) == null ? void 0 : c.actionButton,
              ),
            },
            a.action.label,
          )
        : null,
  );
};
function Zs() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  const t = document.documentElement.getAttribute("dir");
  return t === "auto" || !t ? window.getComputedStyle(document.documentElement).direction : t;
}
function Sl(t, e) {
  const n = {};
  return (
    [t, e].forEach((s, i) => {
      const o = i === 1,
        r = o ? "--mobile-offset" : "--offset",
        l = o ? gl : pl;
      function h(c) {
        ["top", "right", "bottom", "left"].forEach((u) => {
          n[`${r}-${u}`] = typeof c == "number" ? `${c}px` : c;
        });
      }
      typeof s == "number" || typeof s == "string"
        ? h(s)
        : typeof s == "object"
          ? ["top", "right", "bottom", "left"].forEach((c) => {
              s[c] === void 0
                ? (n[`${r}-${c}`] = l)
                : (n[`${r}-${c}`] = typeof s[c] == "number" ? `${s[c]}px` : s[c]);
            })
          : h(l);
    }),
    n
  );
}
const jl = T.forwardRef(function (e, n) {
    const {
        id: s,
        invert: i,
        position: o = "bottom-right",
        hotkey: r = ["altKey", "KeyT"],
        expand: l,
        closeButton: h,
        className: c,
        offset: u,
        mobileOffset: a,
        theme: f = "light",
        richColors: p,
        duration: m,
        style: x,
        visibleToasts: y = ml,
        toastOptions: g,
        dir: b = Zs(),
        gap: v = xl,
        icons: w,
        customAriaLabel: k,
        containerAriaLabel: E = "Notifications",
      } = e,
      [M, j] = T.useState([]),
      P = T.useMemo(
        () => (s ? M.filter((L) => L.toasterId === s) : M.filter((L) => !L.toasterId)),
        [M, s],
      ),
      C = T.useMemo(
        () => Array.from(new Set([o].concat(P.filter((L) => L.position).map((L) => L.position)))),
        [P, o],
      ),
      [V, $] = T.useState([]),
      [G, z] = T.useState(!1),
      [Q, R] = T.useState(!1),
      [U, D] = T.useState(
        f !== "system"
          ? f
          : typeof window < "u" &&
              window.matchMedia &&
              window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light",
      ),
      B = T.useRef(null),
      st = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
      X = T.useRef(null),
      mt = T.useRef(!1),
      Et = T.useCallback((L) => {
        j((I) => {
          var F;
          return (
            ((F = I.find((tt) => tt.id === L.id)) != null && F.delete) || ht.dismiss(L.id),
            I.filter(({ id: tt }) => tt !== L.id)
          );
        });
      }, []);
    return (
      T.useEffect(
        () =>
          ht.subscribe((L) => {
            if (L.dismiss) {
              requestAnimationFrame(() => {
                j((I) => I.map((F) => (F.id === L.id ? { ...F, delete: !0 } : F)));
              });
              return;
            }
            setTimeout(() => {
              Ya.flushSync(() => {
                j((I) => {
                  const F = I.findIndex((tt) => tt.id === L.id);
                  return F !== -1
                    ? [...I.slice(0, F), { ...I[F], ...L }, ...I.slice(F + 1)]
                    : [L, ...I];
                });
              });
            });
          }),
        [],
      ),
      T.useEffect(() => {
        if (f !== "system") {
          D(f);
          return;
        }
        if (
          (f === "system" &&
            (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
              ? D("dark")
              : D("light")),
          typeof window > "u")
        )
          return;
        const L = window.matchMedia("(prefers-color-scheme: dark)");
        try {
          L.addEventListener("change", ({ matches: I }) => {
            D(I ? "dark" : "light");
          });
        } catch {
          L.addListener(({ matches: F }) => {
            try {
              D(F ? "dark" : "light");
            } catch (tt) {
              console.error(tt);
            }
          });
        }
      }, [f]),
      T.useEffect(() => {
        M.length <= 1 && z(!1);
      }, [M]),
      T.useEffect(() => {
        const L = (I) => {
          var F;
          if (r.length > 0 && r.every((H) => I[H] || I.code === H)) {
            var ct;
            (z(!0), (ct = B.current) == null || ct.focus());
          }
          I.code === "Escape" &&
            (document.activeElement === B.current ||
              ((F = B.current) != null && F.contains(document.activeElement))) &&
            z(!1);
        };
        return (
          document.addEventListener("keydown", L),
          () => document.removeEventListener("keydown", L)
        );
      }, [r]),
      T.useEffect(() => {
        if (B.current)
          return () => {
            X.current &&
              (X.current.focus({ preventScroll: !0 }), (X.current = null), (mt.current = !1));
          };
      }, [B.current]),
      T.createElement(
        "section",
        {
          ref: n,
          "aria-label": k ?? `${E} ${st}`,
          tabIndex: -1,
          "aria-live": "polite",
          "aria-relevant": "additions text",
          "aria-atomic": "false",
          suppressHydrationWarning: !0,
          "data-react-aria-top-layer": !0,
        },
        C.map((L, I) => {
          var F;
          const [tt, ct] = L.split("-");
          return P.length
            ? T.createElement(
                "ol",
                {
                  key: L,
                  dir: b === "auto" ? Zs() : b,
                  tabIndex: -1,
                  ref: B,
                  className: c,
                  "data-sonner-toaster": !0,
                  "data-sonner-theme": U,
                  "data-y-position": tt,
                  "data-x-position": ct,
                  style: {
                    "--front-toast-height": `${((F = V[0]) == null ? void 0 : F.height) || 0}px`,
                    "--width": `${yl}px`,
                    "--gap": `${v}px`,
                    ...x,
                    ...Sl(u, a),
                  },
                  onBlur: (H) => {
                    mt.current &&
                      !H.currentTarget.contains(H.relatedTarget) &&
                      ((mt.current = !1),
                      X.current && (X.current.focus({ preventScroll: !0 }), (X.current = null)));
                  },
                  onFocus: (H) => {
                    (H.target instanceof HTMLElement && H.target.dataset.dismissible === "false") ||
                      mt.current ||
                      ((mt.current = !0), (X.current = H.relatedTarget));
                  },
                  onMouseEnter: () => z(!0),
                  onMouseMove: () => z(!0),
                  onMouseLeave: () => {
                    Q || z(!1);
                  },
                  onDragEnd: () => z(!1),
                  onPointerDown: (H) => {
                    (H.target instanceof HTMLElement && H.target.dataset.dismissible === "false") ||
                      R(!0);
                  },
                  onPointerUp: () => R(!1),
                },
                P.filter((H) => (!H.position && I === 0) || H.position === L).map((H, Lt) => {
                  var Ht, ut;
                  return T.createElement(Tl, {
                    key: H.id,
                    icons: w,
                    index: Lt,
                    toast: H,
                    defaultRichColors: p,
                    duration: (Ht = g?.duration) != null ? Ht : m,
                    className: g?.className,
                    descriptionClassName: g?.descriptionClassName,
                    invert: i,
                    visibleToasts: y,
                    closeButton: (ut = g?.closeButton) != null ? ut : h,
                    interacting: Q,
                    position: L,
                    style: g?.style,
                    unstyled: g?.unstyled,
                    classNames: g?.classNames,
                    cancelButtonStyle: g?.cancelButtonStyle,
                    actionButtonStyle: g?.actionButtonStyle,
                    closeButtonAriaLabel: g?.closeButtonAriaLabel,
                    removeToast: Et,
                    toasts: P.filter((Bt) => Bt.position == H.position),
                    heights: V.filter((Bt) => Bt.position == H.position),
                    setHeights: $,
                    expandByDefault: l,
                    gap: v,
                    expanded: G,
                    swipeDirections: e.swipeDirections,
                  });
                }),
              )
            : null;
        }),
      )
    );
  }),
  Pl = ({ ...t }) =>
    d.jsx(jl, {
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      },
      ...t,
    });
const Al = [
    ["path", { d: "M7 7h10v10", key: "1tivn9" }],
    ["path", { d: "M7 17 17 7", key: "1vkiza" }],
  ],
  Cl = W("arrow-up-right", Al);
const kl = [
    ["path", { d: "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5", key: "1u7htd" }],
    ["path", { d: "M15 12h.01", key: "1k8ypt" }],
    [
      "path",
      {
        d: "M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1",
        key: "11xh7x",
      },
    ],
    ["path", { d: "M9 12h.01", key: "157uk2" }],
  ],
  Ml = W("baby", kl);
const El = [
    ["path", { d: "M12 8V4H8", key: "hb8ula" }],
    ["rect", { width: "16", height: "12", x: "4", y: "8", rx: "2", key: "enze0r" }],
    ["path", { d: "M2 14h2", key: "vft8re" }],
    ["path", { d: "M20 14h2", key: "4cs60a" }],
    ["path", { d: "M15 13v2", key: "1xurst" }],
    ["path", { d: "M9 13v2", key: "rq6x2g" }],
  ],
  Nl = W("bot", El);
const Vl = [
    ["path", { d: "M12 18V5", key: "adv99a" }],
    ["path", { d: "M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4", key: "1e3is1" }],
    ["path", { d: "M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5", key: "1gqd8o" }],
    ["path", { d: "M17.997 5.125a4 4 0 0 1 2.526 5.77", key: "iwvgf7" }],
    ["path", { d: "M18 18a4 4 0 0 0 2-7.464", key: "efp6ie" }],
    ["path", { d: "M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517", key: "1gq6am" }],
    ["path", { d: "M6 18a4 4 0 0 1-2-7.464", key: "k1g0md" }],
    ["path", { d: "M6.003 5.125a4 4 0 0 0-2.526 5.77", key: "q97ue3" }],
  ],
  Dl = W("brain", Vl);
const Rl = [
    ["path", { d: "M12 12h.01", key: "1mp3jc" }],
    ["path", { d: "M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2", key: "1ksdt3" }],
    ["path", { d: "M22 13a18.15 18.15 0 0 1-20 0", key: "12hx5q" }],
    ["rect", { width: "20", height: "14", x: "2", y: "6", rx: "2", key: "i6l2r4" }],
  ],
  Ll = W("briefcase-business", Rl);
const Bl = [
    ["path", { d: "M8 2v4", key: "1cmpym" }],
    ["path", { d: "M16 2v4", key: "4m81vk" }],
    ["path", { d: "M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8", key: "bce9hv" }],
    ["path", { d: "M3 10h18", key: "8toen8" }],
    ["path", { d: "m16 20 2 2 4-4", key: "13tcca" }],
  ],
  Il = W("calendar-check-2", Bl);
const Fl = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]],
  Ol = W("chevron-left", Fl);
const _l = [
    ["path", { d: "m18 16 4-4-4-4", key: "1inbqp" }],
    ["path", { d: "m6 8-4 4 4 4", key: "15zrgr" }],
    ["path", { d: "m14.5 4-5 16", key: "e7oirm" }],
  ],
  $l = W("code-xml", _l);
const Hl = [
    [
      "path",
      {
        d: "M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",
        key: "1vdc57",
      },
    ],
    ["path", { d: "M5 21h14", key: "11awu3" }],
  ],
  jr = W("crown", Hl);
const Wl = [
    [
      "path",
      {
        d: "M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",
        key: "1xhozi",
      },
    ],
  ],
  zl = W("headphones", Wl);
const Ul = [
    [
      "path",
      {
        d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",
        key: "mvr1a0",
      },
    ],
    ["path", { d: "M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27", key: "auskq0" }],
  ],
  Kl = W("heart-pulse", Ul);
const Gl = [
    [
      "path",
      {
        d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",
        key: "mvr1a0",
      },
    ],
  ],
  ql = W("heart", Gl);
const Yl = [
    ["path", { d: "M10 18v-7", key: "wt116b" }],
    [
      "path",
      {
        d: "M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z",
        key: "1m329m",
      },
    ],
    ["path", { d: "M14 18v-7", key: "vav6t3" }],
    ["path", { d: "M18 18v-7", key: "aexdmj" }],
    ["path", { d: "M3 22h18", key: "8prr45" }],
    ["path", { d: "M6 18v-7", key: "1ivflk" }],
  ],
  Xl = W("landmark", Yl);
const Zl = [
    [
      "path",
      {
        d: "M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0",
        key: "11u0oz",
      },
    ],
    ["circle", { cx: "12", cy: "8", r: "2", key: "1822b1" }],
    [
      "path",
      {
        d: "M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712",
        key: "q8zwxj",
      },
    ],
  ],
  Pr = W("map-pinned", Zl);
const Ql = [
    ["path", { d: "M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8", key: "10dyio" }],
    ["path", { d: "M10 19v-3.96 3.15", key: "1irgej" }],
    ["path", { d: "M7 19h5", key: "qswx4l" }],
    ["rect", { width: "6", height: "10", x: "16", y: "12", rx: "2", key: "1egngj" }],
  ],
  Jl = W("monitor-smartphone", Ql);
const tc = [
    [
      "path",
      {
        d: "M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",
        key: "e79jfc",
      },
    ],
    ["circle", { cx: "13.5", cy: "6.5", r: ".5", fill: "currentColor", key: "1okk4w" }],
    ["circle", { cx: "17.5", cy: "10.5", r: ".5", fill: "currentColor", key: "f64h9f" }],
    ["circle", { cx: "6.5", cy: "12.5", r: ".5", fill: "currentColor", key: "qy21gx" }],
    ["circle", { cx: "8.5", cy: "7.5", r: ".5", fill: "currentColor", key: "fotxhn" }],
  ],
  ec = W("palette", tc);
const nc = [
    ["rect", { x: "14", y: "3", width: "5", height: "18", rx: "1", key: "kaeet6" }],
    ["rect", { x: "5", y: "3", width: "5", height: "18", rx: "1", key: "1wsw3u" }],
  ],
  sc = W("pause", nc);
const ic = [
    [
      "path",
      {
        d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
        key: "10ikf1",
      },
    ],
  ],
  rc = W("play", ic);
const oc = [
    ["path", { d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5", key: "qeys4" }],
    [
      "path",
      {
        d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09",
        key: "u4xsad",
      },
    ],
    [
      "path",
      {
        d: "M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z",
        key: "676m9",
      },
    ],
    ["path", { d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05", key: "92ym6u" }],
  ],
  ac = W("rocket", oc);
const lc = [
    ["path", { d: "M12 3v18", key: "108xh3" }],
    ["path", { d: "m19 8 3 8a5 5 0 0 1-6 0zV7", key: "zcdpyk" }],
    ["path", { d: "M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1", key: "1yorad" }],
    ["path", { d: "m5 8 3 8a5 5 0 0 1-6 0zV7", key: "eua70x" }],
    ["path", { d: "M7 21h10", key: "1b0cd5" }],
  ],
  Ar = W("scale", lc);
const cc = [
    ["path", { d: "m8 11 2 2 4-4", key: "1sed1v" }],
    ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
    ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
  ],
  Cr = W("search-check", cc);
const uc = [
    [
      "path",
      {
        d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
        key: "wmoenq",
      },
    ],
    ["path", { d: "M12 9v4", key: "juzpu7" }],
    ["path", { d: "M12 17h.01", key: "p32p05" }],
  ],
  dc = W("triangle-alert", uc);
const hc = [
    ["path", { d: "m16 11 2 2 4-4", key: "9rsbq5" }],
    ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
    ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ],
  fc = W("user-check", hc);
const mc = [
    ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
    ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }],
    ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
    ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ],
  pc = W("users", mc);
const gc = [
    ["path", { d: "M12.8 19.6A2 2 0 1 0 14 16H2", key: "148xed" }],
    ["path", { d: "M17.5 8a2.5 2.5 0 1 1 2 4H2", key: "1u4tom" }],
    ["path", { d: "M9.8 4.4A2 2 0 1 1 11 8H2", key: "75valh" }],
  ],
  yc = W("wind", gc);
function xc() {
  return d.jsx(Ra, { overlay: !0 });
}
const cs = S.createContext({});
function je(t) {
  const e = S.useRef(null);
  return (e.current === null && (e.current = t()), e.current);
}
const vc = typeof window < "u",
  nn = vc ? S.useLayoutEffect : S.useEffect,
  sn = S.createContext(null);
function us(t, e) {
  t.indexOf(e) === -1 && t.push(e);
}
function se(t, e) {
  const n = t.indexOf(e);
  n > -1 && t.splice(n, 1);
}
const Mt = (t, e, n) => (n > e ? e : n < t ? t : n);
let rn = () => {};
const Ot = {},
  kr = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),
  Mr = (t) => typeof t == "object" && t !== null,
  Er = (t) => /^0[^.\s]+$/u.test(t);
function Nr(t) {
  let e;
  return () => (e === void 0 && (e = t()), e);
}
const yt = (t) => t,
  Pe = (...t) => t.reduce((e, n) => (s) => n(e(s))),
  ie = (t, e, n) => {
    const s = e - t;
    return s ? (n - t) / s : 1;
  };
class ds {
  constructor() {
    this.subscriptions = [];
  }
  add(e) {
    return (us(this.subscriptions, e), () => se(this.subscriptions, e));
  }
  notify(e, n, s) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1) this.subscriptions[0](e, n, s);
      else
        for (let o = 0; o < i; o++) {
          const r = this.subscriptions[o];
          r && r(e, n, s);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const ft = (t) => t * 1e3,
  gt = (t) => t / 1e3,
  Vr = (t, e) => (e ? t * (1e3 / e) : 0),
  bc = (t, e, n) => {
    const s = e - t;
    return ((((n - t) % s) + s) % s) + t;
  },
  Dr = (t, e, n) => (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t,
  wc = 1e-7,
  Tc = 12;
function Sc(t, e, n, s, i) {
  let o,
    r,
    l = 0;
  do ((r = e + (n - e) / 2), (o = Dr(r, s, i) - t), o > 0 ? (n = r) : (e = r));
  while (Math.abs(o) > wc && ++l < Tc);
  return r;
}
function Ae(t, e, n, s) {
  if (t === e && n === s) return yt;
  const i = (o) => Sc(o, 0, 1, t, n);
  return (o) => (o === 0 || o === 1 ? o : Dr(i(o), e, s));
}
const Rr = (t) => (e) => (e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2),
  hs = (t) => (e) => 1 - t(1 - e),
  Lr = Ae(0.33, 1.53, 0.69, 0.99),
  fs = hs(Lr),
  Br = Rr(fs),
  Ir = (t) => (t >= 1 ? 1 : (t *= 2) < 1 ? 0.5 * fs(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1)))),
  ms = (t) => 1 - Math.sin(Math.acos(t)),
  Fr = hs(ms),
  Or = Rr(ms),
  jc = Ae(0.42, 0, 1, 1),
  Pc = Ae(0, 0, 0.58, 1),
  _r = Ae(0.42, 0, 0.58, 1),
  $r = (t) => Array.isArray(t) && typeof t[0] != "number";
function Hr(t, e) {
  return $r(t) ? t[bc(0, t.length, e)] : t;
}
const Wr = (t) => Array.isArray(t) && typeof t[0] == "number",
  Ac = {
    linear: yt,
    easeIn: jc,
    easeInOut: _r,
    easeOut: Pc,
    circIn: ms,
    circInOut: Or,
    circOut: Fr,
    backIn: fs,
    backInOut: Br,
    backOut: Lr,
    anticipate: Ir,
  },
  Cc = (t) => typeof t == "string",
  Qs = (t) => {
    if (Wr(t)) {
      rn(t.length === 4);
      const [e, n, s, i] = t;
      return Ae(e, n, s, i);
    } else if (Cc(t)) return Ac[t];
    return t;
  },
  Ne = [
    "setup",
    "read",
    "resolveKeyframes",
    "preUpdate",
    "update",
    "preRender",
    "render",
    "postRender",
  ];
function kc(t) {
  let e = new Set(),
    n = new Set(),
    s = !1,
    i = !1;
  const o = new WeakSet();
  let r = { delta: 0, timestamp: 0, isProcessing: !1 };
  function l(c) {
    (o.has(c) && (h.schedule(c), t()), c(r));
  }
  const h = {
    schedule: (c, u = !1, a = !1) => {
      const p = a && s ? e : n;
      return (u && o.add(c), p.add(c), c);
    },
    cancel: (c) => {
      (n.delete(c), o.delete(c));
    },
    process: (c) => {
      if (((r = c), s)) {
        i = !0;
        return;
      }
      s = !0;
      const u = e;
      ((e = n), (n = u), e.forEach(l), e.clear(), (s = !1), i && ((i = !1), h.process(c)));
    },
  };
  return h;
}
const Mc = 40;
function zr(t, e) {
  let n = !1,
    s = !0;
  const i = { delta: 0, timestamp: 0, isProcessing: !1 },
    o = () => (n = !0),
    r = Ne.reduce((v, w) => ((v[w] = kc(o)), v), {}),
    {
      setup: l,
      read: h,
      resolveKeyframes: c,
      preUpdate: u,
      update: a,
      preRender: f,
      render: p,
      postRender: m,
    } = r,
    x = () => {
      const v = Ot.useManualTiming,
        w = v ? i.timestamp : performance.now();
      ((n = !1),
        v || (i.delta = s ? 1e3 / 60 : Math.max(Math.min(w - i.timestamp, Mc), 1)),
        (i.timestamp = w),
        (i.isProcessing = !0),
        l.process(i),
        h.process(i),
        c.process(i),
        u.process(i),
        a.process(i),
        f.process(i),
        p.process(i),
        m.process(i),
        (i.isProcessing = !1),
        n && e && ((s = !1), t(x)));
    },
    y = () => {
      ((n = !0), (s = !0), i.isProcessing || t(x));
    };
  return {
    schedule: Ne.reduce((v, w) => {
      const k = r[w];
      return ((v[w] = (E, M = !1, j = !1) => (n || y(), k.schedule(E, M, j))), v);
    }, {}),
    cancel: (v) => {
      for (let w = 0; w < Ne.length; w++) r[Ne[w]].cancel(v);
    },
    state: i,
    steps: r,
  };
}
const {
  schedule: _,
  cancel: Rt,
  state: nt,
  steps: xn,
} = zr(typeof requestAnimationFrame < "u" ? requestAnimationFrame : yt, !0);
let Ie;
function Ec() {
  Ie = void 0;
}
const at = {
    now: () => (
      Ie === void 0 &&
        at.set(nt.isProcessing || Ot.useManualTiming ? nt.timestamp : performance.now()),
      Ie
    ),
    set: (t) => {
      ((Ie = t), queueMicrotask(Ec));
    },
  },
  Ur = (t) => (e) => typeof e == "string" && e.startsWith(t),
  Kr = Ur("--"),
  Nc = Ur("var(--"),
  ps = (t) => (Nc(t) ? Vc.test(t.split("/*")[0].trim()) : !1),
  Vc = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function Js(t) {
  return typeof t != "string" ? !1 : t.split("/*")[0].includes("var(--");
}
const oe = { test: (t) => typeof t == "number", parse: parseFloat, transform: (t) => t },
  xe = { ...oe, transform: (t) => Mt(0, 1, t) },
  Ve = { ...oe, default: 1 },
  fe = (t) => Math.round(t * 1e5) / 1e5,
  gs = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function Dc(t) {
  return t == null;
}
const Rc =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  ys = (t, e) => (n) =>
    !!(
      (typeof n == "string" && Rc.test(n) && n.startsWith(t)) ||
      (e && !Dc(n) && Object.prototype.hasOwnProperty.call(n, e))
    ),
  Gr = (t, e, n) => (s) => {
    if (typeof s != "string") return s;
    const [i, o, r, l] = s.match(gs);
    return {
      [t]: parseFloat(i),
      [e]: parseFloat(o),
      [n]: parseFloat(r),
      alpha: l !== void 0 ? parseFloat(l) : 1,
    };
  },
  Lc = (t) => Mt(0, 255, t),
  vn = { ...oe, transform: (t) => Math.round(Lc(t)) },
  Ut = {
    test: ys("rgb", "red"),
    parse: Gr("red", "green", "blue"),
    transform: ({ red: t, green: e, blue: n, alpha: s = 1 }) =>
      "rgba(" +
      vn.transform(t) +
      ", " +
      vn.transform(e) +
      ", " +
      vn.transform(n) +
      ", " +
      fe(xe.transform(s)) +
      ")",
  };
function Bc(t) {
  let e = "",
    n = "",
    s = "",
    i = "";
  return (
    t.length > 5
      ? ((e = t.substring(1, 3)),
        (n = t.substring(3, 5)),
        (s = t.substring(5, 7)),
        (i = t.substring(7, 9)))
      : ((e = t.substring(1, 2)),
        (n = t.substring(2, 3)),
        (s = t.substring(3, 4)),
        (i = t.substring(4, 5)),
        (e += e),
        (n += n),
        (s += s),
        (i += i)),
    {
      red: parseInt(e, 16),
      green: parseInt(n, 16),
      blue: parseInt(s, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  );
}
const Rn = { test: ys("#"), parse: Bc, transform: Ut.transform },
  Ce = (t) => ({
    test: (e) => typeof e == "string" && e.endsWith(t) && e.split(" ").length === 1,
    parse: parseFloat,
    transform: (e) => `${e}${t}`,
  }),
  Vt = Ce("deg"),
  kt = Ce("%"),
  A = Ce("px"),
  Ic = Ce("vh"),
  Fc = Ce("vw"),
  ti = { ...kt, parse: (t) => kt.parse(t) / 100, transform: (t) => kt.transform(t * 100) },
  te = {
    test: ys("hsl", "hue"),
    parse: Gr("hue", "saturation", "lightness"),
    transform: ({ hue: t, saturation: e, lightness: n, alpha: s = 1 }) =>
      "hsla(" +
      Math.round(t) +
      ", " +
      kt.transform(fe(e)) +
      ", " +
      kt.transform(fe(n)) +
      ", " +
      fe(xe.transform(s)) +
      ")",
  },
  Y = {
    test: (t) => Ut.test(t) || Rn.test(t) || te.test(t),
    parse: (t) => (Ut.test(t) ? Ut.parse(t) : te.test(t) ? te.parse(t) : Rn.parse(t)),
    transform: (t) =>
      typeof t == "string" ? t : t.hasOwnProperty("red") ? Ut.transform(t) : te.transform(t),
    getAnimatableNone: (t) => {
      const e = Y.parse(t);
      return ((e.alpha = 0), Y.transform(e));
    },
  },
  Oc =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function _c(t) {
  return (
    isNaN(t) && typeof t == "string" && (t.match(gs)?.length || 0) + (t.match(Oc)?.length || 0) > 0
  );
}
const qr = "number",
  Yr = "color",
  $c = "var",
  Hc = "var(",
  ei = "${}",
  Wc =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function re(t) {
  const e = t.toString(),
    n = [],
    s = { color: [], number: [], var: [] },
    i = [];
  let o = 0;
  const l = e
    .replace(
      Wc,
      (h) => (
        Y.test(h)
          ? (s.color.push(o), i.push(Yr), n.push(Y.parse(h)))
          : h.startsWith(Hc)
            ? (s.var.push(o), i.push($c), n.push(h))
            : (s.number.push(o), i.push(qr), n.push(parseFloat(h))),
        ++o,
        ei
      ),
    )
    .split(ei);
  return { values: n, split: l, indexes: s, types: i };
}
function zc(t) {
  return re(t).values;
}
function Xr({ split: t, types: e }) {
  const n = t.length;
  return (s) => {
    let i = "";
    for (let o = 0; o < n; o++)
      if (((i += t[o]), s[o] !== void 0)) {
        const r = e[o];
        r === qr ? (i += fe(s[o])) : r === Yr ? (i += Y.transform(s[o])) : (i += s[o]);
      }
    return i;
  };
}
function Uc(t) {
  return Xr(re(t));
}
const Kc = (t) => (typeof t == "number" ? 0 : Y.test(t) ? Y.getAnimatableNone(t) : t),
  Gc = (t, e) => (typeof t == "number" ? (e?.trim().endsWith("/") ? t : 0) : Kc(t));
function qc(t) {
  const e = re(t);
  return Xr(e)(e.values.map((s, i) => Gc(s, e.split[i])));
}
const wt = { test: _c, parse: zc, createTransformer: Uc, getAnimatableNone: qc };
function bn(t, e, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6 ? t + (e - t) * 6 * n : n < 1 / 2 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t
  );
}
function Yc({ hue: t, saturation: e, lightness: n, alpha: s }) {
  ((t /= 360), (e /= 100), (n /= 100));
  let i = 0,
    o = 0,
    r = 0;
  if (!e) i = o = r = n;
  else {
    const l = n < 0.5 ? n * (1 + e) : n + e - n * e,
      h = 2 * n - l;
    ((i = bn(h, l, t + 1 / 3)), (o = bn(h, l, t)), (r = bn(h, l, t - 1 / 3)));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(o * 255),
    blue: Math.round(r * 255),
    alpha: s,
  };
}
function qe(t, e) {
  return (n) => (n > 0 ? e : t);
}
const O = (t, e, n) => t + (e - t) * n,
  wn = (t, e, n) => {
    const s = t * t,
      i = n * (e * e - s) + s;
    return i < 0 ? 0 : Math.sqrt(i);
  },
  Xc = [Rn, Ut, te],
  Zc = (t) => Xc.find((e) => e.test(t));
function ni(t) {
  const e = Zc(t);
  if (!e) return !1;
  let n = e.parse(t);
  return (e === te && (n = Yc(n)), n);
}
const si = (t, e) => {
    const n = ni(t),
      s = ni(e);
    if (!n || !s) return qe(t, e);
    const i = { ...n };
    return (o) => (
      (i.red = wn(n.red, s.red, o)),
      (i.green = wn(n.green, s.green, o)),
      (i.blue = wn(n.blue, s.blue, o)),
      (i.alpha = O(n.alpha, s.alpha, o)),
      Ut.transform(i)
    );
  },
  Ln = new Set(["none", "hidden"]);
function Qc(t, e) {
  return Ln.has(t) ? (n) => (n <= 0 ? t : e) : (n) => (n >= 1 ? e : t);
}
function Jc(t, e) {
  return (n) => O(t, e, n);
}
function xs(t) {
  return typeof t == "number"
    ? Jc
    : typeof t == "string"
      ? ps(t)
        ? qe
        : Y.test(t)
          ? si
          : nu
      : Array.isArray(t)
        ? Zr
        : typeof t == "object"
          ? Y.test(t)
            ? si
            : tu
          : qe;
}
function Zr(t, e) {
  const n = [...t],
    s = n.length,
    i = t.map((o, r) => xs(o)(o, e[r]));
  return (o) => {
    for (let r = 0; r < s; r++) n[r] = i[r](o);
    return n;
  };
}
function tu(t, e) {
  const n = { ...t, ...e },
    s = {};
  for (const i in n) t[i] !== void 0 && e[i] !== void 0 && (s[i] = xs(t[i])(t[i], e[i]));
  return (i) => {
    for (const o in s) n[o] = s[o](i);
    return n;
  };
}
function eu(t, e) {
  const n = [],
    s = { color: 0, var: 0, number: 0 };
  for (let i = 0; i < e.values.length; i++) {
    const o = e.types[i],
      r = t.indexes[o][s[o]],
      l = t.values[r] ?? 0;
    ((n[i] = l), s[o]++);
  }
  return n;
}
const nu = (t, e) => {
  const n = wt.createTransformer(e),
    s = re(t),
    i = re(e);
  return s.indexes.var.length === i.indexes.var.length &&
    s.indexes.color.length === i.indexes.color.length &&
    s.indexes.number.length >= i.indexes.number.length
    ? (Ln.has(t) && !i.values.length) || (Ln.has(e) && !s.values.length)
      ? Qc(t, e)
      : Pe(Zr(eu(s, i), i.values), n)
    : qe(t, e);
};
function Qr(t, e, n) {
  return typeof t == "number" && typeof e == "number" && typeof n == "number"
    ? O(t, e, n)
    : xs(t)(t, e);
}
const su = (t) => {
    const e = ({ timestamp: n }) => t(n);
    return {
      start: (n = !0) => _.update(e, n),
      stop: () => Rt(e),
      now: () => (nt.isProcessing ? nt.timestamp : at.now()),
    };
  },
  Jr = (t, e, n = 10) => {
    let s = "";
    const i = Math.max(Math.round(e / n), 2);
    for (let o = 0; o < i; o++) s += Math.round(t(o / (i - 1)) * 1e4) / 1e4 + ", ";
    return `linear(${s.substring(0, s.length - 2)})`;
  },
  Ye = 2e4;
function vs(t) {
  let e = 0;
  const n = 50;
  let s = t.next(e);
  for (; !s.done && e < Ye;) ((e += n), (s = t.next(e)));
  return e >= Ye ? 1 / 0 : e;
}
function to(t, e = 100, n) {
  const s = n({ ...t, keyframes: [0, e] }),
    i = Math.min(vs(s), Ye);
  return { type: "keyframes", ease: (o) => s.next(i * o).value / e, duration: gt(i) };
}
const K = {
  stiffness: 100,
  damping: 10,
  mass: 1,
  velocity: 0,
  duration: 800,
  bounce: 0.3,
  visualDuration: 0.3,
  restSpeed: { granular: 0.01, default: 2 },
  restDelta: { granular: 0.005, default: 0.5 },
  minDuration: 0.01,
  maxDuration: 10,
  minDamping: 0.05,
  maxDamping: 1,
};
function Bn(t, e) {
  return t * Math.sqrt(1 - e * e);
}
const iu = 12;
function ru(t, e, n) {
  let s = n;
  for (let i = 1; i < iu; i++) s = s - t(s) / e(s);
  return s;
}
const Tn = 0.001;
function ou({
  duration: t = K.duration,
  bounce: e = K.bounce,
  velocity: n = K.velocity,
  mass: s = K.mass,
}) {
  let i,
    o,
    r = 1 - e;
  ((r = Mt(K.minDamping, K.maxDamping, r)),
    (t = Mt(K.minDuration, K.maxDuration, gt(t))),
    r < 1
      ? ((i = (c) => {
          const u = c * r,
            a = u * t,
            f = u - n,
            p = Bn(c, r),
            m = Math.exp(-a);
          return Tn - (f / p) * m;
        }),
        (o = (c) => {
          const a = c * r * t,
            f = a * n + n,
            p = Math.pow(r, 2) * Math.pow(c, 2) * t,
            m = Math.exp(-a),
            x = Bn(Math.pow(c, 2), r);
          return ((-i(c) + Tn > 0 ? -1 : 1) * ((f - p) * m)) / x;
        }))
      : ((i = (c) => {
          const u = Math.exp(-c * t),
            a = (c - n) * t + 1;
          return -Tn + u * a;
        }),
        (o = (c) => {
          const u = Math.exp(-c * t),
            a = (n - c) * (t * t);
          return u * a;
        })));
  const l = 5 / t,
    h = ru(i, o, l);
  if (((t = ft(t)), isNaN(h))) return { stiffness: K.stiffness, damping: K.damping, duration: t };
  {
    const c = Math.pow(h, 2) * s;
    return { stiffness: c, damping: r * 2 * Math.sqrt(s * c), duration: t };
  }
}
const au = ["duration", "bounce"],
  lu = ["stiffness", "damping", "mass"];
function ii(t, e) {
  return e.some((n) => t[n] !== void 0);
}
function cu(t) {
  let e = {
    velocity: K.velocity,
    stiffness: K.stiffness,
    damping: K.damping,
    mass: K.mass,
    isResolvedFromDuration: !1,
    ...t,
  };
  if (!ii(t, lu) && ii(t, au))
    if (((e.velocity = 0), t.visualDuration)) {
      const n = t.visualDuration,
        s = (2 * Math.PI) / (n * 1.2),
        i = s * s,
        o = 2 * Mt(0.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(i);
      e = { ...e, mass: K.mass, stiffness: i, damping: o };
    } else {
      const n = ou({ ...t, velocity: 0 });
      ((e = { ...e, ...n, mass: K.mass }), (e.isResolvedFromDuration = !0));
    }
  return e;
}
function ve(t = K.visualDuration, e = K.bounce) {
  const n = typeof t != "object" ? { visualDuration: t, keyframes: [0, 1], bounce: e } : t;
  let { restSpeed: s, restDelta: i } = n;
  const o = n.keyframes[0],
    r = n.keyframes[n.keyframes.length - 1],
    l = { done: !1, value: o },
    {
      stiffness: h,
      damping: c,
      mass: u,
      duration: a,
      velocity: f,
      isResolvedFromDuration: p,
    } = cu({ ...n, velocity: -gt(n.velocity || 0) }),
    m = f || 0,
    x = c / (2 * Math.sqrt(h * u)),
    y = r - o,
    g = gt(Math.sqrt(h / u)),
    b = Math.abs(y) < 5;
  (s || (s = b ? K.restSpeed.granular : K.restSpeed.default),
    i || (i = b ? K.restDelta.granular : K.restDelta.default));
  let v, w, k, E, M, j;
  if (x < 1)
    ((k = Bn(g, x)),
      (E = (m + x * g * y) / k),
      (v = (C) => {
        const V = Math.exp(-x * g * C);
        return r - V * (E * Math.sin(k * C) + y * Math.cos(k * C));
      }),
      (M = x * g * E + y * k),
      (j = x * g * y - E * k),
      (w = (C) => Math.exp(-x * g * C) * (M * Math.sin(k * C) + j * Math.cos(k * C))));
  else if (x === 1) {
    v = (V) => r - Math.exp(-g * V) * (y + (m + g * y) * V);
    const C = m + g * y;
    w = (V) => Math.exp(-g * V) * (g * C * V - m);
  } else {
    const C = g * Math.sqrt(x * x - 1);
    v = (z) => {
      const Q = Math.exp(-x * g * z),
        R = Math.min(C * z, 300);
      return r - (Q * ((m + x * g * y) * Math.sinh(R) + C * y * Math.cosh(R))) / C;
    };
    const V = (m + x * g * y) / C,
      $ = x * g * V - y * C,
      G = x * g * y - V * C;
    w = (z) => {
      const Q = Math.exp(-x * g * z),
        R = Math.min(C * z, 300);
      return Q * ($ * Math.sinh(R) + G * Math.cosh(R));
    };
  }
  const P = {
    calculatedDuration: (p && a) || null,
    velocity: (C) => ft(w(C)),
    next: (C) => {
      if (!p && x < 1) {
        const $ = Math.exp(-x * g * C),
          G = Math.sin(k * C),
          z = Math.cos(k * C),
          Q = r - $ * (E * G + y * z),
          R = ft($ * (M * G + j * z));
        return ((l.done = Math.abs(R) <= s && Math.abs(r - Q) <= i), (l.value = l.done ? r : Q), l);
      }
      const V = v(C);
      if (p) l.done = C >= a;
      else {
        const $ = ft(w(C));
        l.done = Math.abs($) <= s && Math.abs(r - V) <= i;
      }
      return ((l.value = l.done ? r : V), l);
    },
    toString: () => {
      const C = Math.min(vs(P), Ye),
        V = Jr(($) => P.next(C * $).value, C, 30);
      return C + "ms " + V;
    },
    toTransition: () => {},
  };
  return P;
}
ve.applyToOptions = (t) => {
  const e = to(t, 100, ve);
  return ((t.ease = e.ease), (t.duration = ft(e.duration)), (t.type = "keyframes"), t);
};
const uu = 5;
function eo(t, e, n) {
  const s = Math.max(e - uu, 0);
  return Vr(n - t(s), e - s);
}
function In({
  keyframes: t,
  velocity: e = 0,
  power: n = 0.8,
  timeConstant: s = 325,
  bounceDamping: i = 10,
  bounceStiffness: o = 500,
  modifyTarget: r,
  min: l,
  max: h,
  restDelta: c = 0.5,
  restSpeed: u,
}) {
  const a = t[0],
    f = { done: !1, value: a },
    p = (j) => (l !== void 0 && j < l) || (h !== void 0 && j > h),
    m = (j) => (l === void 0 ? h : h === void 0 || Math.abs(l - j) < Math.abs(h - j) ? l : h);
  let x = n * e;
  const y = a + x,
    g = r === void 0 ? y : r(y);
  g !== y && (x = g - a);
  const b = (j) => -x * Math.exp(-j / s),
    v = (j) => g + b(j),
    w = (j) => {
      const P = b(j),
        C = v(j);
      ((f.done = Math.abs(P) <= c), (f.value = f.done ? g : C));
    };
  let k, E;
  const M = (j) => {
    p(f.value) &&
      ((k = j),
      (E = ve({
        keyframes: [f.value, m(f.value)],
        velocity: eo(v, j, f.value),
        damping: i,
        stiffness: o,
        restDelta: c,
        restSpeed: u,
      })));
  };
  return (
    M(0),
    {
      calculatedDuration: null,
      next: (j) => {
        let P = !1;
        return (
          !E && k === void 0 && ((P = !0), w(j), M(j)),
          k !== void 0 && j >= k ? E.next(j - k) : (!P && w(j), f)
        );
      },
    }
  );
}
function du(t, e, n) {
  const s = [],
    i = n || Ot.mix || Qr,
    o = t.length - 1;
  for (let r = 0; r < o; r++) {
    let l = i(t[r], t[r + 1]);
    if (e) {
      const h = Array.isArray(e) ? e[r] || yt : e;
      l = Pe(h, l);
    }
    s.push(l);
  }
  return s;
}
function no(t, e, { clamp: n = !0, ease: s, mixer: i } = {}) {
  const o = t.length;
  if ((rn(o === e.length), o === 1)) return () => e[0];
  if (o === 2 && e[0] === e[1]) return () => e[1];
  const r = t[0] === t[1];
  t[0] > t[o - 1] && ((t = [...t].reverse()), (e = [...e].reverse()));
  const l = du(e, s, i),
    h = l.length,
    c = (u) => {
      if (r && u < t[0]) return e[0];
      let a = 0;
      if (h > 1) for (; a < t.length - 2 && !(u < t[a + 1]); a++);
      const f = ie(t[a], t[a + 1], u);
      return l[a](f);
    };
  return n ? (u) => c(Mt(t[0], t[o - 1], u)) : c;
}
function so(t, e) {
  const n = t[t.length - 1];
  for (let s = 1; s <= e; s++) {
    const i = ie(0, e, s);
    t.push(O(n, 1, i));
  }
}
function io(t) {
  const e = [0];
  return (so(e, t.length - 1), e);
}
function hu(t, e) {
  return t.map((n) => n * e);
}
function fu(t, e) {
  return t.map(() => e || _r).splice(0, t.length - 1);
}
function me({ duration: t = 300, keyframes: e, times: n, ease: s = "easeInOut" }) {
  const i = $r(s) ? s.map(Qs) : Qs(s),
    o = { done: !1, value: e[0] },
    r = hu(n && n.length === e.length ? n : io(e), t),
    l = no(r, e, { ease: Array.isArray(i) ? i : fu(e, i) });
  return { calculatedDuration: t, next: (h) => ((o.value = l(h)), (o.done = h >= t), o) };
}
const mu = (t) => t !== null;
function on(t, { repeat: e, repeatType: n = "loop" }, s, i = 1) {
  const o = t.filter(mu),
    l = i < 0 || (e && n !== "loop" && e % 2 === 1) ? 0 : o.length - 1;
  return !l || s === void 0 ? o[l] : s;
}
const pu = { decay: In, inertia: In, tween: me, keyframes: me, spring: ve };
function ro(t) {
  typeof t.type == "string" && (t.type = pu[t.type]);
}
class bs {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((e) => {
      this.resolve = e;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  then(e, n) {
    return this.finished.then(e, n);
  }
}
const gu = (t) => t / 100;
class Xe extends bs {
  constructor(e) {
    (super(),
      (this.state = "idle"),
      (this.startTime = null),
      (this.isStopped = !1),
      (this.currentTime = 0),
      (this.holdTime = null),
      (this.playbackSpeed = 1),
      (this.delayState = { done: !1, value: void 0 }),
      (this.stop = () => {
        const { motionValue: n } = this.options;
        (n && n.updatedAt !== at.now() && this.tick(at.now()),
          (this.isStopped = !0),
          this.state !== "idle" && (this.teardown(), this.options.onStop?.()));
      }),
      (this.options = e),
      this.initAnimation(),
      this.play(),
      e.autoplay === !1 && this.pause());
  }
  initAnimation() {
    const { options: e } = this;
    ro(e);
    const { type: n = me, repeat: s = 0, repeatDelay: i = 0, repeatType: o, velocity: r = 0 } = e;
    let { keyframes: l } = e;
    const h = n || me;
    h !== me &&
      typeof l[0] != "number" &&
      ((this.mixKeyframes = Pe(gu, Qr(l[0], l[1]))), (l = [0, 100]));
    const c = h({ ...e, keyframes: l });
    (o === "mirror" &&
      (this.mirroredGenerator = h({ ...e, keyframes: [...l].reverse(), velocity: -r })),
      c.calculatedDuration === null && (c.calculatedDuration = vs(c)));
    const { calculatedDuration: u } = c;
    ((this.calculatedDuration = u),
      (this.resolvedDuration = u + i),
      (this.totalDuration = this.resolvedDuration * (s + 1) - i),
      (this.generator = c));
  }
  updateTime(e) {
    const n = Math.round(e - this.startTime) * this.playbackSpeed;
    this.holdTime !== null ? (this.currentTime = this.holdTime) : (this.currentTime = n);
  }
  tick(e, n = !1) {
    const {
      generator: s,
      totalDuration: i,
      mixKeyframes: o,
      mirroredGenerator: r,
      resolvedDuration: l,
      calculatedDuration: h,
    } = this;
    if (this.startTime === null) return s.next(0);
    const {
      delay: c = 0,
      keyframes: u,
      repeat: a,
      repeatType: f,
      repeatDelay: p,
      type: m,
      onUpdate: x,
      finalKeyframe: y,
    } = this.options;
    (this.speed > 0
      ? (this.startTime = Math.min(this.startTime, e))
      : this.speed < 0 && (this.startTime = Math.min(e - i / this.speed, this.startTime)),
      n ? (this.currentTime = e) : this.updateTime(e));
    const g = this.currentTime - c * (this.playbackSpeed >= 0 ? 1 : -1),
      b = this.playbackSpeed >= 0 ? g < 0 : g > i;
    ((this.currentTime = Math.max(g, 0)),
      this.state === "finished" && this.holdTime === null && (this.currentTime = i));
    let v = this.currentTime,
      w = s;
    if (a) {
      const j = Math.min(this.currentTime, i) / l;
      let P = Math.floor(j),
        C = j % 1;
      (!C && j >= 1 && (C = 1),
        C === 1 && P--,
        (P = Math.min(P, a + 1)),
        P % 2 && (f === "reverse" ? ((C = 1 - C), p && (C -= p / l)) : f === "mirror" && (w = r)),
        (v = Mt(0, 1, C) * l));
    }
    let k;
    (b ? ((this.delayState.value = u[0]), (k = this.delayState)) : (k = w.next(v)),
      o && !b && (k.value = o(k.value)));
    let { done: E } = k;
    !b &&
      h !== null &&
      (E = this.playbackSpeed >= 0 ? this.currentTime >= i : this.currentTime <= 0);
    const M =
      this.holdTime === null && (this.state === "finished" || (this.state === "running" && E));
    return (
      M && m !== In && (k.value = on(u, this.options, y, this.speed)),
      x && x(k.value),
      M && this.finish(),
      k
    );
  }
  then(e, n) {
    return this.finished.then(e, n);
  }
  get duration() {
    return gt(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay: e = 0 } = this.options || {};
    return this.duration + gt(e);
  }
  get time() {
    return gt(this.currentTime);
  }
  set time(e) {
    ((e = ft(e)),
      (this.currentTime = e),
      this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0
        ? (this.holdTime = e)
        : this.driver && (this.startTime = this.driver.now() - e / this.playbackSpeed),
      this.driver
        ? this.driver.start(!1)
        : ((this.startTime = 0), (this.state = "paused"), (this.holdTime = e), this.tick(e)));
  }
  getGeneratorVelocity() {
    const e = this.currentTime;
    if (e <= 0) return this.options.velocity || 0;
    if (this.generator.velocity) return this.generator.velocity(e);
    const n = this.generator.next(e).value;
    return eo((s) => this.generator.next(s).value, e, n);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(e) {
    const n = this.playbackSpeed !== e;
    (n && this.driver && this.updateTime(at.now()),
      (this.playbackSpeed = e),
      n && this.driver && (this.time = gt(this.currentTime)));
  }
  play() {
    if (this.isStopped) return;
    const { driver: e = su, startTime: n } = this.options;
    (this.driver || (this.driver = e((i) => this.tick(i))), this.options.onPlay?.());
    const s = this.driver.now();
    (this.state === "finished"
      ? (this.updateFinished(), (this.startTime = s))
      : this.holdTime !== null
        ? (this.startTime = s - this.holdTime)
        : this.startTime || (this.startTime = n ?? s),
      this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start());
  }
  pause() {
    ((this.state = "paused"), this.updateTime(at.now()), (this.holdTime = this.currentTime));
  }
  complete() {
    (this.state !== "running" && this.play(), (this.state = "finished"), (this.holdTime = null));
  }
  finish() {
    (this.notifyFinished(),
      this.teardown(),
      (this.state = "finished"),
      this.options.onComplete?.());
  }
  cancel() {
    ((this.holdTime = null),
      (this.startTime = 0),
      this.tick(0),
      this.teardown(),
      this.options.onCancel?.());
  }
  teardown() {
    ((this.state = "idle"), this.stopDriver(), (this.startTime = this.holdTime = null));
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(e) {
    return ((this.startTime = 0), this.tick(e, !0));
  }
  attachTimeline(e) {
    return (
      this.options.allowFlatten &&
        ((this.options.type = "keyframes"), (this.options.ease = "linear"), this.initAnimation()),
      this.driver?.stop(),
      e.observe(this)
    );
  }
}
function yu(t) {
  for (let e = 1; e < t.length; e++) t[e] ?? (t[e] = t[e - 1]);
}
const Kt = (t) => (t * 180) / Math.PI,
  Fn = (t) => {
    const e = Kt(Math.atan2(t[1], t[0]));
    return On(e);
  },
  xu = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: (t) => (Math.abs(t[0]) + Math.abs(t[3])) / 2,
    rotate: Fn,
    rotateZ: Fn,
    skewX: (t) => Kt(Math.atan(t[1])),
    skewY: (t) => Kt(Math.atan(t[2])),
    skew: (t) => (Math.abs(t[1]) + Math.abs(t[2])) / 2,
  },
  On = (t) => ((t = t % 360), t < 0 && (t += 360), t),
  ri = Fn,
  oi = (t) => Math.sqrt(t[0] * t[0] + t[1] * t[1]),
  ai = (t) => Math.sqrt(t[4] * t[4] + t[5] * t[5]),
  vu = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: oi,
    scaleY: ai,
    scale: (t) => (oi(t) + ai(t)) / 2,
    rotateX: (t) => On(Kt(Math.atan2(t[6], t[5]))),
    rotateY: (t) => On(Kt(Math.atan2(-t[2], t[0]))),
    rotateZ: ri,
    rotate: ri,
    skewX: (t) => Kt(Math.atan(t[4])),
    skewY: (t) => Kt(Math.atan(t[1])),
    skew: (t) => (Math.abs(t[1]) + Math.abs(t[4])) / 2,
  };
function _n(t) {
  return t.includes("scale") ? 1 : 0;
}
function $n(t, e) {
  if (!t || t === "none") return _n(e);
  const n = t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let s, i;
  if (n) ((s = vu), (i = n));
  else {
    const l = t.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    ((s = xu), (i = l));
  }
  if (!i) return _n(e);
  const o = s[e],
    r = i[1].split(",").map(wu);
  return typeof o == "function" ? o(r) : r[o];
}
const bu = (t, e) => {
  const { transform: n = "none" } = getComputedStyle(t);
  return $n(n, e);
};
function wu(t) {
  return parseFloat(t.trim());
}
const ae = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  le = new Set([...ae, "pathRotation"]),
  li = (t) => t === oe || t === A,
  Tu = new Set(["x", "y", "z"]),
  Su = ae.filter((t) => !Tu.has(t));
function ju(t) {
  const e = [];
  return (
    Su.forEach((n) => {
      const s = t.getValue(n);
      s !== void 0 && (e.push([n, s.get()]), s.set(n.startsWith("scale") ? 1 : 0));
    }),
    e
  );
}
const Ft = {
  width: ({ x: t }, { paddingLeft: e = "0", paddingRight: n = "0", boxSizing: s }) => {
    const i = t.max - t.min;
    return s === "border-box" ? i : i - parseFloat(e) - parseFloat(n);
  },
  height: ({ y: t }, { paddingTop: e = "0", paddingBottom: n = "0", boxSizing: s }) => {
    const i = t.max - t.min;
    return s === "border-box" ? i : i - parseFloat(e) - parseFloat(n);
  },
  top: (t, { top: e }) => parseFloat(e),
  left: (t, { left: e }) => parseFloat(e),
  bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
  right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
  x: (t, { transform: e }) => $n(e, "x"),
  y: (t, { transform: e }) => $n(e, "y"),
};
Ft.translateX = Ft.x;
Ft.translateY = Ft.y;
const Gt = new Set();
let Hn = !1,
  Wn = !1,
  zn = !1;
function oo() {
  if (Wn) {
    const t = Array.from(Gt).filter((s) => s.needsMeasurement),
      e = new Set(t.map((s) => s.element)),
      n = new Map();
    (e.forEach((s) => {
      const i = ju(s);
      i.length && (n.set(s, i), s.render());
    }),
      t.forEach((s) => s.measureInitialState()),
      e.forEach((s) => {
        s.render();
        const i = n.get(s);
        i &&
          i.forEach(([o, r]) => {
            s.getValue(o)?.set(r);
          });
      }),
      t.forEach((s) => s.measureEndState()),
      t.forEach((s) => {
        s.suspendedScrollY !== void 0 && window.scrollTo(0, s.suspendedScrollY);
      }));
  }
  ((Wn = !1), (Hn = !1), Gt.forEach((t) => t.complete(zn)), Gt.clear());
}
function ao() {
  Gt.forEach((t) => {
    (t.readKeyframes(), t.needsMeasurement && (Wn = !0));
  });
}
function Pu() {
  ((zn = !0), ao(), oo(), (zn = !1));
}
class ws {
  constructor(e, n, s, i, o, r = !1) {
    ((this.state = "pending"),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.unresolvedKeyframes = [...e]),
      (this.onComplete = n),
      (this.name = s),
      (this.motionValue = i),
      (this.element = o),
      (this.isAsync = r));
  }
  scheduleResolve() {
    ((this.state = "scheduled"),
      this.isAsync
        ? (Gt.add(this), Hn || ((Hn = !0), _.read(ao), _.resolveKeyframes(oo)))
        : (this.readKeyframes(), this.complete()));
  }
  readKeyframes() {
    const { unresolvedKeyframes: e, name: n, element: s, motionValue: i } = this;
    if (e[0] === null) {
      const o = i?.get(),
        r = e[e.length - 1];
      if (o !== void 0) e[0] = o;
      else if (s && n) {
        const l = s.readValue(n, r);
        l != null && (e[0] = l);
      }
      (e[0] === void 0 && (e[0] = r), i && o === void 0 && i.set(e[0]));
    }
    yu(e);
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete(e = !1) {
    ((this.state = "complete"),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, e),
      Gt.delete(this));
  }
  cancel() {
    this.state === "scheduled" && (Gt.delete(this), (this.state = "pending"));
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const Au = (t) => t.startsWith("--");
function lo(t, e, n) {
  Au(e) ? t.style.setProperty(e, n) : (t.style[e] = n);
}
const Cu = {};
function co(t, e) {
  const n = Nr(t);
  return () => Cu[e] ?? n();
}
const ku = co(() => window.ScrollTimeline !== void 0, "scrollTimeline"),
  uo = co(() => {
    try {
      document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return !1;
    }
    return !0;
  }, "linearEasing"),
  he = ([t, e, n, s]) => `cubic-bezier(${t}, ${e}, ${n}, ${s})`,
  ci = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: he([0, 0.65, 0.55, 1]),
    circOut: he([0.55, 0, 1, 0.45]),
    backIn: he([0.31, 0.01, 0.66, -0.59]),
    backOut: he([0.33, 1.53, 0.69, 0.99]),
  };
function ho(t, e) {
  if (t)
    return typeof t == "function"
      ? uo()
        ? Jr(t, e)
        : "ease-out"
      : Wr(t)
        ? he(t)
        : Array.isArray(t)
          ? t.map((n) => ho(n, e) || ci.easeOut)
          : ci[t];
}
function Mu(
  t,
  e,
  n,
  {
    delay: s = 0,
    duration: i = 300,
    repeat: o = 0,
    repeatType: r = "loop",
    ease: l = "easeOut",
    times: h,
  } = {},
  c = void 0,
) {
  const u = { [e]: n };
  h && (u.offset = h);
  const a = ho(l, i);
  Array.isArray(a) && (u.easing = a);
  const f = {
    delay: s,
    duration: i,
    easing: Array.isArray(a) ? "linear" : a,
    fill: "both",
    iterations: o + 1,
    direction: r === "reverse" ? "alternate" : "normal",
  };
  return (c && (f.pseudoElement = c), t.animate(u, f));
}
function Ts(t) {
  return typeof t == "function" && "applyToOptions" in t;
}
function Eu({ type: t, ...e }) {
  return Ts(t) && uo()
    ? t.applyToOptions(e)
    : (e.duration ?? (e.duration = 300), e.ease ?? (e.ease = "easeOut"), e);
}
class fo extends bs {
  constructor(e) {
    if (
      (super(),
      (this.finishedTime = null),
      (this.isStopped = !1),
      (this.manualStartTime = null),
      !e)
    )
      return;
    const {
      element: n,
      name: s,
      keyframes: i,
      pseudoElement: o,
      allowFlatten: r = !1,
      finalKeyframe: l,
      onComplete: h,
    } = e;
    ((this.isPseudoElement = !!o),
      (this.allowFlatten = r),
      (this.options = e),
      rn(typeof e.type != "string"));
    const c = Eu(e);
    ((this.animation = Mu(n, s, i, c, o)),
      c.autoplay === !1 && this.animation.pause(),
      (this.animation.onfinish = () => {
        if (((this.finishedTime = this.time), !o)) {
          const u = on(i, this.options, l, this.speed);
          (this.updateMotionValue && this.updateMotionValue(u),
            lo(n, s, u),
            this.animation.cancel());
        }
        (h?.(), this.notifyFinished());
      }));
  }
  play() {
    this.isStopped ||
      ((this.manualStartTime = null),
      this.animation.play(),
      this.state === "finished" && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.finish?.();
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {}
  }
  stop() {
    if (this.isStopped) return;
    this.isStopped = !0;
    const { state: e } = this;
    e === "idle" ||
      e === "finished" ||
      (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
      this.isPseudoElement || this.cancel());
  }
  commitStyles() {
    const e = this.options?.element;
    !this.isPseudoElement && e?.isConnected && this.animation.commitStyles?.();
  }
  get duration() {
    const e = this.animation.effect?.getComputedTiming?.().duration || 0;
    return gt(Number(e));
  }
  get iterationDuration() {
    const { delay: e = 0 } = this.options || {};
    return this.duration + gt(e);
  }
  get time() {
    return gt(Number(this.animation.currentTime) || 0);
  }
  set time(e) {
    const n = this.finishedTime !== null;
    ((this.manualStartTime = null),
      (this.finishedTime = null),
      (this.animation.currentTime = ft(e)),
      n && this.animation.pause());
  }
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(e) {
    (e < 0 && (this.finishedTime = null), (this.animation.playbackRate = e));
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return this.manualStartTime ?? Number(this.animation.startTime);
  }
  set startTime(e) {
    this.manualStartTime = this.animation.startTime = e;
  }
  attachTimeline({ timeline: e, rangeStart: n, rangeEnd: s, observe: i }) {
    return (
      this.allowFlatten && this.animation.effect?.updateTiming({ easing: "linear" }),
      (this.animation.onfinish = null),
      e && ku()
        ? ((this.animation.timeline = e),
          n && (this.animation.rangeStart = n),
          s && (this.animation.rangeEnd = s),
          yt)
        : i(this)
    );
  }
}
const mo = { anticipate: Ir, backInOut: Br, circInOut: Or };
function Nu(t) {
  return t in mo;
}
function Vu(t) {
  typeof t.ease == "string" && Nu(t.ease) && (t.ease = mo[t.ease]);
}
const Sn = 10;
class Du extends fo {
  constructor(e) {
    (Vu(e),
      ro(e),
      super(e),
      e.startTime !== void 0 && e.autoplay !== !1 && (this.startTime = e.startTime),
      (this.options = e));
  }
  updateMotionValue(e) {
    const { motionValue: n, onUpdate: s, onComplete: i, element: o, ...r } = this.options;
    if (!n) return;
    if (e !== void 0) {
      n.set(e);
      return;
    }
    const l = new Xe({ ...r, autoplay: !1 }),
      h = Math.max(Sn, at.now() - this.startTime),
      c = Mt(0, Sn, h - Sn),
      u = l.sample(h).value,
      { name: a } = this.options;
    (o && a && lo(o, a, u), n.setWithVelocity(l.sample(Math.max(0, h - c)).value, u, c), l.stop());
  }
}
const ui = (t, e) =>
  e === "zIndex"
    ? !1
    : !!(
        typeof t == "number" ||
        Array.isArray(t) ||
        (typeof t == "string" && (wt.test(t) || t === "0") && !t.startsWith("url("))
      );
function Ru(t) {
  const e = t[0];
  if (t.length === 1) return !0;
  for (let n = 0; n < t.length; n++) if (t[n] !== e) return !0;
}
function Lu(t, e, n, s) {
  const i = t[0];
  if (i === null) return !1;
  if (e === "display" || e === "visibility") return !0;
  const o = t[t.length - 1],
    r = ui(i, e),
    l = ui(o, e);
  return !r || !l ? !1 : Ru(t) || ((n === "spring" || Ts(n)) && s);
}
function Un(t) {
  ((t.duration = 0), (t.type = "keyframes"));
}
const po = new Set(["opacity", "clipPath", "filter", "transform", "backgroundColor"]),
  Bu = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function Iu(t) {
  for (let e = 0; e < t.length; e++) if (typeof t[e] == "string" && Bu.test(t[e])) return !0;
  return !1;
}
const Fu = new Set([
    "color",
    "backgroundColor",
    "outlineColor",
    "fill",
    "stroke",
    "borderColor",
    "borderTopColor",
    "borderRightColor",
    "borderBottomColor",
    "borderLeftColor",
  ]),
  Ou = Nr(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function _u(t) {
  const {
      motionValue: e,
      name: n,
      repeatDelay: s,
      repeatType: i,
      damping: o,
      type: r,
      keyframes: l,
    } = t,
    h = e?.owner?.current;
  if (!(h instanceof HTMLElement) && !(h instanceof SVGElement)) return !1;
  const { onUpdate: c, transformTemplate: u } = e.owner.getProps();
  return (
    Ou() &&
    n &&
    (po.has(n) || (Fu.has(n) && Iu(l))) &&
    (n !== "transform" || !u) &&
    !c &&
    !s &&
    i !== "mirror" &&
    o !== 0 &&
    r !== "inertia"
  );
}
const $u = 40;
class Hu extends bs {
  constructor({
    autoplay: e = !0,
    delay: n = 0,
    type: s = "keyframes",
    repeat: i = 0,
    repeatDelay: o = 0,
    repeatType: r = "loop",
    keyframes: l,
    name: h,
    motionValue: c,
    element: u,
    ...a
  }) {
    (super(),
      (this.stop = () => {
        (this._animation && (this._animation.stop(), this.stopTimeline?.()),
          this.keyframeResolver?.cancel());
      }),
      (this.createdAt = at.now()));
    const f = {
        autoplay: e,
        delay: n,
        type: s,
        repeat: i,
        repeatDelay: o,
        repeatType: r,
        name: h,
        motionValue: c,
        element: u,
        ...a,
      },
      p = u?.KeyframeResolver || ws;
    ((this.keyframeResolver = new p(
      l,
      (m, x, y) => this.onKeyframesResolved(m, x, f, !y),
      h,
      c,
      u,
    )),
      this.keyframeResolver?.scheduleResolve());
  }
  onKeyframesResolved(e, n, s, i) {
    this.keyframeResolver = void 0;
    const { name: o, type: r, velocity: l, delay: h, isHandoff: c, onUpdate: u } = s;
    this.resolvedAt = at.now();
    let a = !0;
    Lu(e, o, r, l) ||
      ((a = !1),
      (Ot.instantAnimations || !h) && u?.(on(e, s, n)),
      (e[0] = e[e.length - 1]),
      Un(s),
      (s.repeat = 0));
    const p = {
        startTime: i
          ? this.resolvedAt
            ? this.resolvedAt - this.createdAt > $u
              ? this.resolvedAt
              : this.createdAt
            : this.createdAt
          : void 0,
        finalKeyframe: n,
        ...s,
        keyframes: e,
      },
      m = a && !c && _u(p),
      x = p.motionValue?.owner?.current;
    let y;
    if (m)
      try {
        y = new Du({ ...p, element: x });
      } catch {
        y = new Xe(p);
      }
    else y = new Xe(p);
    (y.finished
      .then(() => {
        this.notifyFinished();
      })
      .catch(yt),
      this.pendingTimeline &&
        ((this.stopTimeline = y.attachTimeline(this.pendingTimeline)),
        (this.pendingTimeline = void 0)),
      (this._animation = y));
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(e, n) {
    return this.finished.finally(e).then(() => {});
  }
  get animation() {
    return (this._animation || (this.keyframeResolver?.resume(), Pu()), this._animation);
  }
  get duration() {
    return this.animation.duration;
  }
  get iterationDuration() {
    return this.animation.iterationDuration;
  }
  get time() {
    return this.animation.time;
  }
  set time(e) {
    this.animation.time = e;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(e) {
    this.animation.speed = e;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(e) {
    return (
      this._animation
        ? (this.stopTimeline = this.animation.attachTimeline(e))
        : (this.pendingTimeline = e),
      () => this.stop()
    );
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    (this._animation && this.animation.cancel(), this.keyframeResolver?.cancel());
  }
}
class Wu {
  constructor(e) {
    ((this.stop = () => this.runAll("stop")), (this.animations = e.filter(Boolean)));
  }
  get finished() {
    return Promise.all(this.animations.map((e) => e.finished));
  }
  getAll(e) {
    return this.animations[0][e];
  }
  setAll(e, n) {
    for (let s = 0; s < this.animations.length; s++) this.animations[s][e] = n;
  }
  attachTimeline(e) {
    const n = this.animations.map((s) => s.attachTimeline(e));
    return () => {
      n.forEach((s, i) => {
        (s && s(), this.animations[i].stop());
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(e) {
    this.setAll("time", e);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(e) {
    this.setAll("speed", e);
  }
  get state() {
    return this.getAll("state");
  }
  get startTime() {
    return this.getAll("startTime");
  }
  get duration() {
    return di(this.animations, "duration");
  }
  get iterationDuration() {
    return di(this.animations, "iterationDuration");
  }
  runAll(e) {
    this.animations.forEach((n) => n[e]());
  }
  play() {
    this.runAll("play");
  }
  pause() {
    this.runAll("pause");
  }
  cancel() {
    this.runAll("cancel");
  }
  complete() {
    this.runAll("complete");
  }
}
function di(t, e) {
  let n = 0;
  for (let s = 0; s < t.length; s++) {
    const i = t[s][e];
    i !== null && i > n && (n = i);
  }
  return n;
}
class zu extends Wu {
  then(e, n) {
    return this.finished.finally(e).then(() => {});
  }
}
function go(t, e, n, s = 0, i = 1) {
  const o = Array.from(t)
      .sort((c, u) => c.sortNodePosition(u))
      .indexOf(e),
    r = t.size,
    l = (r - 1) * s;
  return typeof n == "function" ? n(o, r) : i === 1 ? o * s : l - o * s;
}
const hi = 30,
  Uu = (t) => !isNaN(parseFloat(t)),
  pe = { current: void 0 };
class Ku {
  constructor(e, n = {}) {
    ((this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (s) => {
        const i = at.now();
        if (
          (this.updatedAt !== i && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(s),
          this.current !== this.prev && (this.events.change?.notify(this.current), this.dependents))
        )
          for (const o of this.dependents) o.dirty();
      }),
      (this.hasAnimated = !1),
      this.setCurrent(e),
      (this.owner = n.owner));
  }
  setCurrent(e) {
    ((this.current = e),
      (this.updatedAt = at.now()),
      this.canTrackVelocity === null && e !== void 0 && (this.canTrackVelocity = Uu(this.current)));
  }
  setPrevFrameValue(e = this.current) {
    ((this.prevFrameValue = e), (this.prevUpdatedAt = this.updatedAt));
  }
  onChange(e) {
    return this.on("change", e);
  }
  on(e, n) {
    this.events[e] || (this.events[e] = new ds());
    const s = this.events[e].add(n);
    return e === "change"
      ? () => {
          (s(),
            _.read(() => {
              this.events.change.getSize() || this.stop();
            }));
        }
      : s;
  }
  clearListeners() {
    for (const e in this.events) this.events[e].clear();
  }
  attach(e, n) {
    ((this.passiveEffect = e), (this.stopPassiveEffect = n));
  }
  set(e) {
    this.passiveEffect ? this.passiveEffect(e, this.updateAndNotify) : this.updateAndNotify(e);
  }
  setWithVelocity(e, n, s) {
    (this.set(n),
      (this.prev = void 0),
      (this.prevFrameValue = e),
      (this.prevUpdatedAt = this.updatedAt - s));
  }
  jump(e, n = !0) {
    (this.updateAndNotify(e),
      (this.prev = e),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      n && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
  dirty() {
    this.events.change?.notify(this.current);
  }
  addDependent(e) {
    (this.dependents || (this.dependents = new Set()), this.dependents.add(e));
  }
  removeDependent(e) {
    this.dependents && this.dependents.delete(e);
  }
  get() {
    return (pe.current && pe.current.push(this), this.current);
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const e = at.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || e - this.updatedAt > hi)
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, hi);
    return Vr(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  start(e) {
    return (
      this.stop(),
      new Promise((n) => {
        ((this.hasAnimated = !0),
          (this.animation = e(n)),
          this.events.animationStart && this.events.animationStart.notify());
      }).then(() => {
        (this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation());
      })
    );
  }
  stop() {
    (this.animation &&
      (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation());
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    (this.dependents?.clear(),
      this.events.destroy?.notify(),
      this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
}
function _t(t, e) {
  return new Ku(t, e);
}
function yo(t, e) {
  if (t?.inherit && e) {
    const { inherit: n, ...s } = t;
    return { ...e, ...s };
  }
  return t;
}
function Ss(t, e) {
  const n = t?.[e] ?? t?.default ?? t;
  return n !== t ? yo(n, t) : n;
}
const Gu = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  qu = (t) => ({
    type: "spring",
    stiffness: 550,
    damping: t === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  Yu = { type: "keyframes", duration: 0.8 },
  Xu = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  Zu = (t, { keyframes: e }) =>
    e.length > 2 ? Yu : le.has(t) ? (t.startsWith("scale") ? qu(e[1]) : Gu) : Xu,
  Qu = new Set([
    "when",
    "delay",
    "delayChildren",
    "staggerChildren",
    "staggerDirection",
    "repeat",
    "repeatType",
    "repeatDelay",
    "from",
    "elapsed",
  ]);
function Ju(t) {
  for (const e in t) if (!Qu.has(e)) return !0;
  return !1;
}
const js =
    (t, e, n, s = {}, i, o) =>
    (r) => {
      const l = Ss(s, t) || {},
        h = l.delay || s.delay || 0;
      let { elapsed: c = 0 } = s;
      c = c - ft(h);
      const u = {
        keyframes: Array.isArray(n) ? n : [null, n],
        ease: "easeOut",
        velocity: e.getVelocity(),
        ...l,
        delay: -c,
        onUpdate: (f) => {
          (e.set(f), l.onUpdate && l.onUpdate(f));
        },
        onComplete: () => {
          (r(), l.onComplete && l.onComplete());
        },
        name: t,
        motionValue: e,
        element: o ? void 0 : i,
      };
      (Ju(l) || Object.assign(u, Zu(t, u)),
        u.duration && (u.duration = ft(u.duration)),
        u.repeatDelay && (u.repeatDelay = ft(u.repeatDelay)),
        u.from !== void 0 && (u.keyframes[0] = u.from));
      let a = !1;
      if (
        ((u.type === !1 || (u.duration === 0 && !u.repeatDelay)) &&
          (Un(u), u.delay === 0 && (a = !0)),
        (Ot.instantAnimations ||
          Ot.skipAnimations ||
          i?.shouldSkipAnimations ||
          l.skipAnimations) &&
          ((a = !0), Un(u), (u.delay = 0)),
        (u.allowFlatten = !l.type && !l.ease),
        a && !o && e.get() !== void 0)
      ) {
        const f = on(u.keyframes, l);
        if (f !== void 0) {
          _.update(() => {
            (u.onUpdate(f), u.onComplete());
          });
          return;
        }
      }
      return l.isSync ? new Xe(u) : new Hu(u);
    },
  td = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function ed(t) {
  const e = td.exec(t);
  if (!e) return [,];
  const [, n, s, i] = e;
  return [`--${n ?? s}`, i];
}
function xo(t, e, n = 1) {
  const [s, i] = ed(t);
  if (!s) return;
  const o = window.getComputedStyle(e).getPropertyValue(s);
  if (o) {
    const r = o.trim();
    return kr(r) ? parseFloat(r) : r;
  }
  return ps(i) ? xo(i, e, n + 1) : i;
}
function fi(t) {
  const e = [{}, {}];
  return (
    t?.values.forEach((n, s) => {
      ((e[0][s] = n.get()), (e[1][s] = n.getVelocity()));
    }),
    e
  );
}
function Ps(t, e, n, s) {
  if (typeof e == "function") {
    const [i, o] = fi(s);
    e = e(n !== void 0 ? n : t.custom, i, o);
  }
  if ((typeof e == "string" && (e = t.variants && t.variants[e]), typeof e == "function")) {
    const [i, o] = fi(s);
    e = e(n !== void 0 ? n : t.custom, i, o);
  }
  return e;
}
function qt(t, e, n) {
  const s = t.getProps();
  return Ps(s, e, n !== void 0 ? n : s.custom, t);
}
const vo = new Set(["width", "height", "top", "left", "right", "bottom", ...ae]),
  Kn = (t) => Array.isArray(t);
function nd(t, e, n) {
  t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, _t(n));
}
function sd(t) {
  return Kn(t) ? t[t.length - 1] || 0 : t;
}
function id(t, e) {
  const n = qt(t, e);
  let { transitionEnd: s = {}, transition: i = {}, ...o } = n || {};
  o = { ...o, ...s };
  for (const r in o) {
    const l = sd(o[r]);
    nd(t, r, l);
  }
}
const Z = (t) => !!(t && t.getVelocity);
function rd(t) {
  return !!(Z(t) && t.add);
}
function Gn(t, e) {
  const n = t.getValue("willChange");
  if (rd(n)) return n.add(e);
  if (!n && Ot.WillChange) {
    const s = new Ot.WillChange("auto");
    (t.addValue("willChange", s), s.add(e));
  }
}
function As(t) {
  return t.replace(/([A-Z])/g, (e) => `-${e.toLowerCase()}`);
}
const od = "framerAppearId",
  bo = "data-" + As(od);
function wo(t) {
  return t.props[bo];
}
function ad({ protectedKeys: t, needsAnimating: e }, n) {
  const s = t.hasOwnProperty(n) && e[n] !== !0;
  return ((e[n] = !1), s);
}
function Cs(t, e, { delay: n = 0, transitionOverride: s, type: i } = {}) {
  let { transition: o, transitionEnd: r, ...l } = e;
  const h = t.getDefaultTransition();
  o = o ? yo(o, h) : h;
  const c = o?.reduceMotion,
    u = o?.skipAnimations;
  s && (o = s);
  const a = [],
    f = i && t.animationState && t.animationState.getState()[i],
    p = o?.path;
  p && p.animateVisualElement(t, l, o, n, a);
  for (const m in l) {
    const x = t.getValue(m, t.latestValues[m] ?? null),
      y = l[m];
    if (y === void 0 || (f && ad(f, m))) continue;
    const g = { delay: n, ...Ss(o || {}, m) };
    u && (g.skipAnimations = !0);
    const b = x.get();
    if (b !== void 0 && !x.isAnimating() && !Array.isArray(y) && y === b && !g.velocity) {
      _.update(() => x.set(y));
      continue;
    }
    let v = !1;
    if (window.MotionHandoffAnimation) {
      const E = wo(t);
      if (E) {
        const M = window.MotionHandoffAnimation(E, m, _);
        M !== null && ((g.startTime = M), (v = !0));
      }
    }
    Gn(t, m);
    const w = c ?? t.shouldReduceMotion;
    x.start(js(m, x, y, w && vo.has(m) ? { type: !1 } : g, t, v));
    const k = x.animation;
    k && a.push(k);
  }
  if (r) {
    const m = () =>
      _.update(() => {
        r && id(t, r);
      });
    a.length ? Promise.all(a).then(m) : m();
  }
  return a;
}
function qn(t, e, n = {}) {
  const s = qt(t, e, n.type === "exit" ? t.presenceContext?.custom : void 0);
  let { transition: i = t.getDefaultTransition() || {} } = s || {};
  n.transitionOverride && (i = n.transitionOverride);
  const o = s ? () => Promise.all(Cs(t, s, n)) : () => Promise.resolve(),
    r =
      t.variantChildren && t.variantChildren.size
        ? (h = 0) => {
            const { delayChildren: c = 0, staggerChildren: u, staggerDirection: a } = i;
            return ld(t, e, h, c, u, a, n);
          }
        : () => Promise.resolve(),
    { when: l } = i;
  if (l) {
    const [h, c] = l === "beforeChildren" ? [o, r] : [r, o];
    return h().then(() => c());
  } else return Promise.all([o(), r(n.delay)]);
}
function ld(t, e, n = 0, s = 0, i = 0, o = 1, r) {
  const l = [];
  for (const h of t.variantChildren)
    (h.notify("AnimationStart", e),
      l.push(
        qn(h, e, {
          ...r,
          delay: n + (typeof s == "function" ? 0 : s) + go(t.variantChildren, h, s, i, o),
        }).then(() => h.notify("AnimationComplete", e)),
      ));
  return Promise.all(l);
}
function cd(t, e, n = {}) {
  t.notify("AnimationStart", e);
  let s;
  if (Array.isArray(e)) {
    const i = e.map((o) => qn(t, o, n));
    s = Promise.all(i);
  } else if (typeof e == "string") s = qn(t, e, n);
  else {
    const i = typeof e == "function" ? qt(t, e, n.custom) : e;
    s = Promise.all(Cs(t, i, n));
  }
  return s.then(() => {
    t.notify("AnimationComplete", e);
  });
}
const ud = { test: (t) => t === "auto", parse: (t) => t },
  To = (t) => (e) => e.test(t),
  So = [oe, A, kt, Vt, Fc, Ic, ud],
  mi = (t) => So.find(To(t));
function dd(t) {
  return typeof t == "number" ? t === 0 : t !== null ? t === "none" || t === "0" || Er(t) : !0;
}
const hd = new Set(["brightness", "contrast", "saturate", "opacity"]);
function fd(t) {
  const [e, n] = t.slice(0, -1).split("(");
  if (e === "drop-shadow") return t;
  const [s] = n.match(gs) || [];
  if (!s) return t;
  const i = n.replace(s, "");
  let o = hd.has(e) ? 1 : 0;
  return (s !== n && (o *= 100), e + "(" + o + i + ")");
}
const md = /\b([a-z-]*)\(.*?\)/gu,
  Yn = {
    ...wt,
    getAnimatableNone: (t) => {
      const e = t.match(md);
      return e ? e.map(fd).join(" ") : t;
    },
  },
  Xn = {
    ...wt,
    getAnimatableNone: (t) => {
      const e = wt.parse(t);
      return wt.createTransformer(t)(
        e.map((s) => (typeof s == "number" ? 0 : typeof s == "object" ? { ...s, alpha: 1 } : s)),
      );
    },
  },
  pi = { ...oe, transform: Math.round },
  pd = {
    rotate: Vt,
    pathRotation: Vt,
    rotateX: Vt,
    rotateY: Vt,
    rotateZ: Vt,
    scale: Ve,
    scaleX: Ve,
    scaleY: Ve,
    scaleZ: Ve,
    skew: Vt,
    skewX: Vt,
    skewY: Vt,
    distance: A,
    translateX: A,
    translateY: A,
    translateZ: A,
    x: A,
    y: A,
    z: A,
    perspective: A,
    transformPerspective: A,
    opacity: xe,
    originX: ti,
    originY: ti,
    originZ: A,
  },
  Ze = {
    borderWidth: A,
    borderTopWidth: A,
    borderRightWidth: A,
    borderBottomWidth: A,
    borderLeftWidth: A,
    borderRadius: A,
    borderTopLeftRadius: A,
    borderTopRightRadius: A,
    borderBottomRightRadius: A,
    borderBottomLeftRadius: A,
    width: A,
    maxWidth: A,
    height: A,
    maxHeight: A,
    top: A,
    right: A,
    bottom: A,
    left: A,
    inset: A,
    insetBlock: A,
    insetBlockStart: A,
    insetBlockEnd: A,
    insetInline: A,
    insetInlineStart: A,
    insetInlineEnd: A,
    padding: A,
    paddingTop: A,
    paddingRight: A,
    paddingBottom: A,
    paddingLeft: A,
    paddingBlock: A,
    paddingBlockStart: A,
    paddingBlockEnd: A,
    paddingInline: A,
    paddingInlineStart: A,
    paddingInlineEnd: A,
    margin: A,
    marginTop: A,
    marginRight: A,
    marginBottom: A,
    marginLeft: A,
    marginBlock: A,
    marginBlockStart: A,
    marginBlockEnd: A,
    marginInline: A,
    marginInlineStart: A,
    marginInlineEnd: A,
    fontSize: A,
    backgroundPositionX: A,
    backgroundPositionY: A,
    ...pd,
    zIndex: pi,
    fillOpacity: xe,
    strokeOpacity: xe,
    numOctaves: pi,
  },
  gd = {
    ...Ze,
    color: Y,
    backgroundColor: Y,
    outlineColor: Y,
    fill: Y,
    stroke: Y,
    borderColor: Y,
    borderTopColor: Y,
    borderRightColor: Y,
    borderBottomColor: Y,
    borderLeftColor: Y,
    filter: Yn,
    WebkitFilter: Yn,
    mask: Xn,
    WebkitMask: Xn,
  },
  jo = (t) => gd[t],
  yd = new Set([Yn, Xn]);
function Po(t, e) {
  let n = jo(t);
  return (yd.has(n) || (n = wt), n.getAnimatableNone ? n.getAnimatableNone(e) : void 0);
}
const xd = new Set(["auto", "none", "0"]);
function vd(t, e, n) {
  let s = 0,
    i;
  for (; s < t.length && !i;) {
    const o = t[s];
    (typeof o == "string" && !xd.has(o) && re(o).values.length && (i = t[s]), s++);
  }
  if (i && n) for (const o of e) t[o] = Po(n, i);
}
class bd extends ws {
  constructor(e, n, s, i, o) {
    super(e, n, s, i, o, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: e, element: n, name: s } = this;
    if (!n || !n.current) return;
    super.readKeyframes();
    for (let u = 0; u < e.length; u++) {
      let a = e[u];
      if (typeof a == "string" && ((a = a.trim()), ps(a))) {
        const f = xo(a, n.current);
        (f !== void 0 && (e[u] = f), u === e.length - 1 && (this.finalKeyframe = a));
      }
    }
    if ((this.resolveNoneKeyframes(), !vo.has(s) || e.length !== 2)) return;
    const [i, o] = e,
      r = mi(i),
      l = mi(o),
      h = Js(i),
      c = Js(o);
    if (h !== c && Ft[s]) {
      this.needsMeasurement = !0;
      return;
    }
    if (r !== l)
      if (li(r) && li(l))
        for (let u = 0; u < e.length; u++) {
          const a = e[u];
          typeof a == "string" && (e[u] = parseFloat(a));
        }
      else Ft[s] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: e, name: n } = this,
      s = [];
    for (let i = 0; i < e.length; i++) (e[i] === null || dd(e[i])) && s.push(i);
    s.length && vd(e, s, n);
  }
  measureInitialState() {
    const { element: e, unresolvedKeyframes: n, name: s } = this;
    if (!e || !e.current) return;
    (s === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = Ft[s](e.measureViewportBox(), window.getComputedStyle(e.current))),
      (n[0] = this.measuredOrigin));
    const i = n[n.length - 1];
    i !== void 0 && e.getValue(s, i).jump(i, !1);
  }
  measureEndState() {
    const { element: e, name: n, unresolvedKeyframes: s } = this;
    if (!e || !e.current) return;
    const i = e.getValue(n);
    i && i.jump(this.measuredOrigin, !1);
    const o = s.length - 1,
      r = s[o];
    ((s[o] = Ft[n](e.measureViewportBox(), window.getComputedStyle(e.current))),
      r !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = r),
      this.removedTransforms?.length &&
        this.removedTransforms.forEach(([l, h]) => {
          e.getValue(l).set(h);
        }),
      this.resolveNoneKeyframes());
  }
}
const ks = [
  "borderTopLeftRadius",
  "borderTopRightRadius",
  "borderBottomRightRadius",
  "borderBottomLeftRadius",
];
function an(t, e, n) {
  if (t == null) return [];
  if (t instanceof EventTarget) return [t];
  if (typeof t == "string") {
    let s = document;
    e && (s = e.current);
    const i = n?.[t] ?? s.querySelectorAll(t);
    return i ? Array.from(i) : [];
  }
  return Array.from(t).filter((s) => s != null);
}
const Zn = (t, e) => (e && typeof t == "number" ? e.transform(t) : t);
function Fe(t) {
  return Mr(t) && "offsetHeight" in t && !("ownerSVGElement" in t);
}
const { schedule: Ms } = zr(queueMicrotask, !1),
  bt = { x: !1, y: !1 };
function Ao() {
  return bt.x || bt.y;
}
function wd(t) {
  return t === "x" || t === "y"
    ? bt[t]
      ? null
      : ((bt[t] = !0),
        () => {
          bt[t] = !1;
        })
    : bt.x || bt.y
      ? null
      : ((bt.x = bt.y = !0),
        () => {
          bt.x = bt.y = !1;
        });
}
function Co(t, e) {
  const n = an(t),
    s = new AbortController(),
    i = { passive: !0, ...e, signal: s.signal };
  return [n, i, () => s.abort()];
}
function Td(t) {
  return !(t.pointerType === "touch" || Ao());
}
function Sd(t, e, n = {}) {
  const [s, i, o] = Co(t, n);
  return (
    s.forEach((r) => {
      let l = !1,
        h = !1,
        c;
      const u = () => {
          r.removeEventListener("pointerleave", m);
        },
        a = (y) => {
          (c && (c(y), (c = void 0)), u());
        },
        f = (y) => {
          ((l = !1),
            window.removeEventListener("pointerup", f),
            window.removeEventListener("pointercancel", f),
            h && ((h = !1), a(y)));
        },
        p = () => {
          ((l = !0),
            window.addEventListener("pointerup", f, i),
            window.addEventListener("pointercancel", f, i));
        },
        m = (y) => {
          if (y.pointerType !== "touch") {
            if (l) {
              h = !0;
              return;
            }
            a(y);
          }
        },
        x = (y) => {
          if (!Td(y)) return;
          h = !1;
          const g = e(r, y);
          typeof g == "function" && ((c = g), r.addEventListener("pointerleave", m, i));
        };
      (r.addEventListener("pointerenter", x, i), r.addEventListener("pointerdown", p, i));
    }),
    o
  );
}
const ko = (t, e) => (e ? (t === e ? !0 : ko(t, e.parentElement)) : !1),
  Es = (t) =>
    t.pointerType === "mouse" ? typeof t.button != "number" || t.button <= 0 : t.isPrimary !== !1,
  jd = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function Pd(t) {
  return jd.has(t.tagName) || t.isContentEditable === !0;
}
const Ad = new Set(["INPUT", "SELECT", "TEXTAREA"]);
function Cd(t) {
  return Ad.has(t.tagName) || t.isContentEditable === !0;
}
const Oe = new WeakSet();
function gi(t) {
  return (e) => {
    e.key === "Enter" && t(e);
  };
}
function jn(t, e) {
  t.dispatchEvent(new PointerEvent("pointer" + e, { isPrimary: !0, bubbles: !0 }));
}
const kd = (t, e) => {
  const n = t.currentTarget;
  if (!n) return;
  const s = gi(() => {
    if (Oe.has(n)) return;
    jn(n, "down");
    const i = gi(() => {
        jn(n, "up");
      }),
      o = () => jn(n, "cancel");
    (n.addEventListener("keyup", i, e), n.addEventListener("blur", o, e));
  });
  (n.addEventListener("keydown", s, e),
    n.addEventListener("blur", () => n.removeEventListener("keydown", s), e));
};
function yi(t) {
  return Es(t) && !Ao();
}
const xi = new WeakSet();
function Md(t, e, n = {}) {
  const [s, i, o] = Co(t, n),
    r = (l) => {
      const h = l.currentTarget;
      if (!yi(l) || xi.has(l)) return;
      (Oe.add(h), n.stopPropagation && xi.add(l));
      const c = e(h, l),
        u = { ...i, capture: !0 },
        a = (m, x) => {
          (window.removeEventListener("pointerup", f, u),
            window.removeEventListener("pointercancel", p, u),
            Oe.has(h) && Oe.delete(h),
            yi(m) && typeof c == "function" && c(m, { success: x }));
        },
        f = (m) => {
          a(m, h === window || h === document || n.useGlobalTarget || ko(h, m.target));
        },
        p = (m) => {
          a(m, !1);
        };
      (window.addEventListener("pointerup", f, u), window.addEventListener("pointercancel", p, u));
    };
  return (
    s.forEach((l) => {
      ((n.useGlobalTarget ? window : l).addEventListener("pointerdown", r, i),
        Fe(l) &&
          (l.addEventListener("focus", (c) => kd(c, i)),
          !Pd(l) && !l.hasAttribute("tabindex") && (l.tabIndex = 0)));
    }),
    o
  );
}
function ln(t) {
  return Mr(t) && "ownerSVGElement" in t;
}
const _e = new WeakMap();
let $e;
const Mo = (t, e, n) => (s, i) =>
    i && i[0] ? i[0][t + "Size"] : ln(s) && "getBBox" in s ? s.getBBox()[e] : s[n],
  Ed = Mo("inline", "width", "offsetWidth"),
  Nd = Mo("block", "height", "offsetHeight");
function Vd({ target: t, borderBoxSize: e }) {
  _e.get(t)?.forEach((n) => {
    n(t, {
      get width() {
        return Ed(t, e);
      },
      get height() {
        return Nd(t, e);
      },
    });
  });
}
function Dd(t) {
  t.forEach(Vd);
}
function Rd() {
  typeof ResizeObserver > "u" || ($e = new ResizeObserver(Dd));
}
function Ld(t, e) {
  $e || Rd();
  const n = an(t);
  return (
    n.forEach((s) => {
      let i = _e.get(s);
      (i || ((i = new Set()), _e.set(s, i)), i.add(e), $e?.observe(s));
    }),
    () => {
      n.forEach((s) => {
        const i = _e.get(s);
        (i?.delete(e), i?.size || $e?.unobserve(s));
      });
    }
  );
}
const He = new Set();
let ee;
function Bd() {
  ((ee = () => {
    const t = {
      get width() {
        return window.innerWidth;
      },
      get height() {
        return window.innerHeight;
      },
    };
    He.forEach((e) => e(t));
  }),
    window.addEventListener("resize", ee));
}
function Id(t) {
  return (
    He.add(t),
    ee || Bd(),
    () => {
      (He.delete(t),
        !He.size &&
          typeof ee == "function" &&
          (window.removeEventListener("resize", ee), (ee = void 0)));
    }
  );
}
function vi(t, e) {
  return typeof t == "function" ? Id(t) : Ld(t, e);
}
function Eo(t) {
  return ln(t) && t.tagName === "svg";
}
function Fd(...t) {
  const e = !Array.isArray(t[0]),
    n = e ? 0 : -1,
    s = t[0 + n],
    i = t[1 + n],
    o = t[2 + n],
    r = t[3 + n],
    l = no(i, o, r);
  return e ? l(s) : l;
}
const Od = [...So, Y, wt],
  _d = (t) => Od.find(To(t)),
  bi = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  ne = () => ({ x: bi(), y: bi() }),
  wi = () => ({ min: 0, max: 0 }),
  q = () => ({ x: wi(), y: wi() }),
  be = new WeakMap();
function cn(t) {
  return t !== null && typeof t == "object" && typeof t.start == "function";
}
function we(t) {
  return typeof t == "string" || Array.isArray(t);
}
const Ns = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
  Vs = ["initial", ...Ns];
function un(t) {
  return cn(t.animate) || Vs.some((e) => we(t[e]));
}
function No(t) {
  return !!(un(t) || t.variants);
}
function $d(t, e, n) {
  for (const s in e) {
    const i = e[s],
      o = n[s];
    if (Z(i)) t.addValue(s, i);
    else if (Z(o)) t.addValue(s, _t(i, { owner: t }));
    else if (o !== i)
      if (t.hasValue(s)) {
        const r = t.getValue(s);
        r.liveStyle === !0 ? r.jump(i) : r.hasAnimated || r.set(i);
      } else {
        const r = t.getStaticValue(s);
        t.addValue(s, _t(r !== void 0 ? r : i, { owner: t }));
      }
  }
  for (const s in n) e[s] === void 0 && t.removeValue(s);
  return e;
}
const Qn = { current: null },
  Vo = { current: !1 },
  Hd = typeof window < "u";
function Wd() {
  if (((Vo.current = !0), !!Hd))
    if (window.matchMedia) {
      const t = window.matchMedia("(prefers-reduced-motion)"),
        e = () => (Qn.current = t.matches);
      (t.addEventListener("change", e), e());
    } else Qn.current = !1;
}
const Ti = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
let Qe = {};
function Do(t) {
  Qe = t;
}
function zd() {
  return Qe;
}
class Ro {
  scrapeMotionValuesFromProps(e, n, s) {
    return {};
  }
  constructor(
    {
      parent: e,
      props: n,
      presenceContext: s,
      reducedMotionConfig: i,
      skipAnimations: o,
      blockInitialAnimation: r,
      visualState: l,
    },
    h = {},
  ) {
    ((this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.shouldSkipAnimations = !1),
      (this.values = new Map()),
      (this.KeyframeResolver = ws),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.hasBeenMounted = !1),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const p = at.now();
        this.renderScheduledAt < p && ((this.renderScheduledAt = p), _.render(this.render, !1, !0));
      }));
    const { latestValues: c, renderState: u } = l;
    ((this.latestValues = c),
      (this.baseTarget = { ...c }),
      (this.initialValues = n.initial ? { ...c } : {}),
      (this.renderState = u),
      (this.parent = e),
      (this.props = n),
      (this.presenceContext = s),
      (this.depth = e ? e.depth + 1 : 0),
      (this.reducedMotionConfig = i),
      (this.skipAnimationsConfig = o),
      (this.options = h),
      (this.blockInitialAnimation = !!r),
      (this.isControllingVariants = un(n)),
      (this.isVariantNode = No(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(e && e.current)));
    const { willChange: a, ...f } = this.scrapeMotionValuesFromProps(n, {}, this);
    for (const p in f) {
      const m = f[p];
      c[p] !== void 0 && Z(m) && m.set(c[p]);
    }
  }
  mount(e) {
    if (this.hasBeenMounted)
      for (const n in this.initialValues)
        (this.values.get(n)?.jump(this.initialValues[n]),
          (this.latestValues[n] = this.initialValues[n]));
    ((this.current = e),
      be.set(e, this),
      this.projection && !this.projection.instance && this.projection.mount(e),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, s) => this.bindToMotionValue(s, n)),
      this.reducedMotionConfig === "never"
        ? (this.shouldReduceMotion = !1)
        : this.reducedMotionConfig === "always"
          ? (this.shouldReduceMotion = !0)
          : (Vo.current || Wd(), (this.shouldReduceMotion = Qn.current)),
      (this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1),
      this.parent?.addChild(this),
      this.update(this.props, this.presenceContext),
      (this.hasBeenMounted = !0));
  }
  unmount() {
    (this.projection && this.projection.unmount(),
      Rt(this.notifyUpdate),
      Rt(this.render),
      this.valueSubscriptions.forEach((e) => e()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent?.removeChild(this));
    for (const e in this.events) this.events[e].clear();
    for (const e in this.features) {
      const n = this.features[e];
      n && (n.unmount(), (n.isMounted = !1));
    }
    this.current = null;
  }
  addChild(e) {
    (this.children.add(e),
      this.enteringChildren ?? (this.enteringChildren = new Set()),
      this.enteringChildren.add(e));
  }
  removeChild(e) {
    (this.children.delete(e), this.enteringChildren && this.enteringChildren.delete(e));
  }
  bindToMotionValue(e, n) {
    if (
      (this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)(),
      n.accelerate && po.has(e) && this.current instanceof HTMLElement)
    ) {
      const { factory: r, keyframes: l, times: h, ease: c, duration: u } = n.accelerate,
        a = new fo({
          element: this.current,
          name: e,
          keyframes: l,
          times: h,
          ease: c,
          duration: ft(u),
        }),
        f = r(a);
      this.valueSubscriptions.set(e, () => {
        (f(), a.cancel());
      });
      return;
    }
    const s = le.has(e);
    s && this.onBindTransform && this.onBindTransform();
    const i = n.on("change", (r) => {
      ((this.latestValues[e] = r),
        this.props.onUpdate && _.preRender(this.notifyUpdate),
        s && this.projection && (this.projection.isTransformDirty = !0),
        this.scheduleRender());
    });
    let o;
    (typeof window < "u" &&
      window.MotionCheckAppearSync &&
      (o = window.MotionCheckAppearSync(this, e, n)),
      this.valueSubscriptions.set(e, () => {
        (i(), o && o());
      }));
  }
  sortNodePosition(e) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== e.type
      ? 0
      : this.sortInstanceNodePosition(this.current, e.current);
  }
  updateFeatures() {
    let e = "animation";
    for (e in Qe) {
      const n = Qe[e];
      if (!n) continue;
      const { isEnabled: s, Feature: i } = n;
      if (
        (!this.features[e] && i && s(this.props) && (this.features[e] = new i(this)),
        this.features[e])
      ) {
        const o = this.features[e];
        o.isMounted ? o.update() : (o.mount(), (o.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : q();
  }
  getStaticValue(e) {
    return this.latestValues[e];
  }
  setStaticValue(e, n) {
    this.latestValues[e] = n;
  }
  update(e, n) {
    ((e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = e),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n));
    for (let s = 0; s < Ti.length; s++) {
      const i = Ti[s];
      this.propEventSubscriptions[i] &&
        (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
      const o = "on" + i,
        r = e[o];
      r && (this.propEventSubscriptions[i] = this.on(i, r));
    }
    ((this.prevMotionValues = $d(
      this,
      this.scrapeMotionValuesFromProps(e, this.prevProps || {}, this),
      this.prevMotionValues,
    )),
      this.handleChildMotionValue && this.handleChildMotionValue());
  }
  getProps() {
    return this.props;
  }
  getVariant(e) {
    return this.props.variants ? this.props.variants[e] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
  }
  addVariantChild(e) {
    const n = this.getClosestVariantNode();
    if (n)
      return (n.variantChildren && n.variantChildren.add(e), () => n.variantChildren.delete(e));
  }
  addValue(e, n) {
    const s = this.values.get(e);
    n !== s &&
      (s && this.removeValue(e),
      this.bindToMotionValue(e, n),
      this.values.set(e, n),
      (this.latestValues[e] = n.get()));
  }
  removeValue(e) {
    this.values.delete(e);
    const n = this.valueSubscriptions.get(e);
    (n && (n(), this.valueSubscriptions.delete(e)),
      delete this.latestValues[e],
      this.removeValueFromRenderState(e, this.renderState));
  }
  hasValue(e) {
    return this.values.has(e);
  }
  getValue(e, n) {
    if (this.props.values && this.props.values[e]) return this.props.values[e];
    let s = this.values.get(e);
    return (
      s === void 0 &&
        n !== void 0 &&
        ((s = _t(n === null ? void 0 : n, { owner: this })), this.addValue(e, s)),
      s
    );
  }
  readValue(e, n) {
    let s =
      this.latestValues[e] !== void 0 || !this.current
        ? this.latestValues[e]
        : (this.getBaseTargetFromProps(this.props, e) ??
          this.readValueFromInstance(this.current, e, this.options));
    return (
      s != null &&
        (typeof s == "string" && (kr(s) || Er(s))
          ? (s = parseFloat(s))
          : !_d(s) && wt.test(n) && (s = Po(e, n)),
        this.setBaseTarget(e, Z(s) ? s.get() : s)),
      Z(s) ? s.get() : s
    );
  }
  setBaseTarget(e, n) {
    this.baseTarget[e] = n;
  }
  getBaseTarget(e) {
    const { initial: n } = this.props;
    let s;
    if (typeof n == "string" || typeof n == "object") {
      const o = Ps(this.props, n, this.presenceContext?.custom);
      o && (s = o[e]);
    }
    if (n && s !== void 0) return s;
    const i = this.getBaseTargetFromProps(this.props, e);
    return i !== void 0 && !Z(i)
      ? i
      : this.initialValues[e] !== void 0 && s === void 0
        ? void 0
        : this.baseTarget[e];
  }
  on(e, n) {
    return (this.events[e] || (this.events[e] = new ds()), this.events[e].add(n));
  }
  notify(e, ...n) {
    this.events[e] && this.events[e].notify(...n);
  }
  scheduleRenderMicrotask() {
    Ms.render(this.render);
  }
}
class Lo extends Ro {
  constructor() {
    (super(...arguments), (this.KeyframeResolver = bd));
  }
  sortInstanceNodePosition(e, n) {
    return e.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(e, n) {
    const s = e.style;
    return s ? s[n] : void 0;
  }
  removeValueFromRenderState(e, { vars: n, style: s }) {
    (delete n[e], delete s[e]);
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: e } = this.props;
    Z(e) &&
      (this.childSubscription = e.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
}
class $t {
  constructor(e) {
    ((this.isMounted = !1), (this.node = e));
  }
  update() {}
}
function Bo({ top: t, left: e, right: n, bottom: s }) {
  return { x: { min: e, max: n }, y: { min: t, max: s } };
}
function Ud({ x: t, y: e }) {
  return { top: e.min, right: t.max, bottom: e.max, left: t.min };
}
function Kd(t, e) {
  if (!e) return t;
  const n = e({ x: t.left, y: t.top }),
    s = e({ x: t.right, y: t.bottom });
  return { top: n.y, left: n.x, bottom: s.y, right: s.x };
}
function Pn(t) {
  return t === void 0 || t === 1;
}
function Jn({ scale: t, scaleX: e, scaleY: n }) {
  return !Pn(t) || !Pn(e) || !Pn(n);
}
function zt(t) {
  return Jn(t) || Io(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY;
}
function Io(t) {
  return Si(t.x) || Si(t.y);
}
function Si(t) {
  return t && t !== "0%";
}
function Je(t, e, n) {
  const s = t - n,
    i = e * s;
  return n + i;
}
function ji(t, e, n, s, i) {
  return (i !== void 0 && (t = Je(t, i, s)), Je(t, n, s) + e);
}
function ts(t, e = 0, n = 1, s, i) {
  ((t.min = ji(t.min, e, n, s, i)), (t.max = ji(t.max, e, n, s, i)));
}
function Fo(t, { x: e, y: n }) {
  (ts(t.x, e.translate, e.scale, e.originPoint), ts(t.y, n.translate, n.scale, n.originPoint));
}
const Pi = 0.999999999999,
  Ai = 1.0000000000001;
function Gd(t, e, n, s = !1) {
  const i = n.length;
  if (!i) return;
  e.x = e.y = 1;
  let o, r;
  for (let l = 0; l < i; l++) {
    ((o = n[l]), (r = o.projectionDelta));
    const { visualElement: h } = o.options;
    (h && h.props.style && h.props.style.display === "contents") ||
      (s &&
        o.options.layoutScroll &&
        o.scroll &&
        o !== o.root &&
        (Ct(t.x, -o.scroll.offset.x), Ct(t.y, -o.scroll.offset.y)),
      r && ((e.x *= r.x.scale), (e.y *= r.y.scale), Fo(t, r)),
      s && zt(o.latestValues) && We(t, o.latestValues, o.layout?.layoutBox));
  }
  (e.x < Ai && e.x > Pi && (e.x = 1), e.y < Ai && e.y > Pi && (e.y = 1));
}
function Ct(t, e) {
  ((t.min += e), (t.max += e));
}
function Ci(t, e, n, s, i = 0.5) {
  const o = O(t.min, t.max, i);
  ts(t, e, n, o, s);
}
function ki(t, e) {
  return typeof t == "string" ? (parseFloat(t) / 100) * (e.max - e.min) : t;
}
function We(t, e, n) {
  const s = n ?? t;
  (Ci(t.x, ki(e.x, s.x), e.scaleX, e.scale, e.originX),
    Ci(t.y, ki(e.y, s.y), e.scaleY, e.scale, e.originY));
}
function Oo(t, e) {
  return Bo(Kd(t.getBoundingClientRect(), e));
}
function qd(t, e, n) {
  const s = Oo(t, n),
    { scroll: i } = e;
  return (i && (Ct(s.x, i.offset.x), Ct(s.y, i.offset.y)), s);
}
const Yd = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  Xd = ae.length;
function Zd(t, e, n) {
  let s = "",
    i = !0;
  for (let r = 0; r < Xd; r++) {
    const l = ae[r],
      h = t[l];
    if (h === void 0) continue;
    let c = !0;
    if (typeof h == "number") c = h === (l.startsWith("scale") ? 1 : 0);
    else {
      const u = parseFloat(h);
      c = l.startsWith("scale") ? u === 1 : u === 0;
    }
    if (!c || n) {
      const u = Zn(h, Ze[l]);
      if (!c) {
        i = !1;
        const a = Yd[l] || l;
        s += `${a}(${u}) `;
      }
      n && (e[l] = u);
    }
  }
  const o = t.pathRotation;
  return (
    o && ((i = !1), (s += `rotate(${Zn(o, Ze.pathRotation)}) `)),
    (s = s.trim()),
    n ? (s = n(e, i ? "" : s)) : i && (s = "none"),
    s
  );
}
function Ds(t, e, n) {
  const { style: s, vars: i, transformOrigin: o } = t;
  let r = !1,
    l = !1;
  for (const h in e) {
    const c = e[h];
    if (le.has(h)) {
      r = !0;
      continue;
    } else if (Kr(h)) {
      i[h] = c;
      continue;
    } else {
      const u = Zn(c, Ze[h]);
      h.startsWith("origin") ? ((l = !0), (o[h] = u)) : (s[h] = u);
    }
  }
  if (
    (e.transform ||
      (r || n ? (s.transform = Zd(e, t.transform, n)) : s.transform && (s.transform = "none")),
    l)
  ) {
    const { originX: h = "50%", originY: c = "50%", originZ: u = 0 } = o;
    s.transformOrigin = `${h} ${c} ${u}`;
  }
}
function _o(t, { style: e, vars: n }, s, i) {
  const o = t.style;
  let r;
  for (r in e) o[r] = e[r];
  i?.applyProjectionStyles(o, s);
  for (r in n) o.setProperty(r, n[r]);
}
function Mi(t, e) {
  return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
}
const de = {
    correct: (t, e) => {
      if (!e.target) return t;
      if (typeof t == "string")
        if (A.test(t)) t = parseFloat(t);
        else return t;
      const n = Mi(t, e.target.x),
        s = Mi(t, e.target.y);
      return `${n}% ${s}%`;
    },
  },
  Qd = {
    correct: (t, { treeScale: e, projectionDelta: n }) => {
      const s = t,
        i = wt.parse(t);
      if (i.length > 5) return s;
      const o = wt.createTransformer(t),
        r = typeof i[0] != "number" ? 1 : 0,
        l = n.x.scale * e.x,
        h = n.y.scale * e.y;
      ((i[0 + r] /= l), (i[1 + r] /= h));
      const c = O(l, h, 0.5);
      return (
        typeof i[2 + r] == "number" && (i[2 + r] /= c),
        typeof i[3 + r] == "number" && (i[3 + r] /= c),
        o(i)
      );
    },
  },
  es = {
    borderRadius: { ...de, applyTo: [...ks] },
    borderTopLeftRadius: de,
    borderTopRightRadius: de,
    borderBottomLeftRadius: de,
    borderBottomRightRadius: de,
    boxShadow: Qd,
  };
function $o(t, { layout: e, layoutId: n }) {
  return (
    le.has(t) || t.startsWith("origin") || ((e || n !== void 0) && (!!es[t] || t === "opacity"))
  );
}
function Rs(t, e, n) {
  const s = t.style,
    i = e?.style,
    o = {};
  if (!s) return o;
  for (const r in s)
    (Z(s[r]) || (i && Z(i[r])) || $o(r, t) || n?.getValue(r)?.liveStyle !== void 0) &&
      (o[r] = s[r]);
  return o;
}
function Jd(t) {
  return window.getComputedStyle(t);
}
class Ho extends Lo {
  constructor() {
    (super(...arguments), (this.type = "html"), (this.renderInstance = _o));
  }
  mount(e) {
    (rn(!!e.style), super.mount(e));
  }
  readValueFromInstance(e, n) {
    if (le.has(n)) return this.projection?.isProjecting ? _n(n) : bu(e, n);
    {
      const s = Jd(e),
        i = (Kr(n) ? s.getPropertyValue(n) : s[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(e, { transformPagePoint: n }) {
    return Oo(e, n);
  }
  build(e, n, s) {
    Ds(e, n, s.transformTemplate);
  }
  scrapeMotionValuesFromProps(e, n, s) {
    return Rs(e, n, s);
  }
}
function th(t, e) {
  return t in e;
}
class eh extends Ro {
  constructor() {
    (super(...arguments), (this.type = "object"));
  }
  readValueFromInstance(e, n) {
    if (th(n, e)) {
      const s = e[n];
      if (typeof s == "string" || typeof s == "number") return s;
    }
  }
  getBaseTargetFromProps() {}
  removeValueFromRenderState(e, n) {
    delete n.output[e];
  }
  measureInstanceViewportBox() {
    return q();
  }
  build(e, n) {
    Object.assign(e.output, n);
  }
  renderInstance(e, { output: n }) {
    Object.assign(e, n);
  }
  sortInstanceNodePosition() {
    return 0;
  }
}
const nh = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  sh = { offset: "strokeDashoffset", array: "strokeDasharray" };
function ih(t, e, n = 1, s = 0, i = !0) {
  t.pathLength = 1;
  const o = i ? nh : sh;
  ((t[o.offset] = `${-s}`), (t[o.array] = `${e} ${n}`));
}
const rh = ["offsetDistance", "offsetPath", "offsetRotate", "offsetAnchor"];
function Wo(
  t,
  { attrX: e, attrY: n, attrScale: s, pathLength: i, pathSpacing: o = 1, pathOffset: r = 0, ...l },
  h,
  c,
  u,
) {
  if ((Ds(t, l, c), h)) {
    t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
    return;
  }
  ((t.attrs = t.style), (t.style = {}));
  const { attrs: a, style: f } = t;
  (a.transform && ((f.transform = a.transform), delete a.transform),
    (f.transform || a.transformOrigin) &&
      ((f.transformOrigin = a.transformOrigin ?? "50% 50%"), delete a.transformOrigin),
    f.transform && ((f.transformBox = u?.transformBox ?? "fill-box"), delete a.transformBox));
  for (const p of rh) a[p] !== void 0 && ((f[p] = a[p]), delete a[p]);
  (e !== void 0 && (a.x = e),
    n !== void 0 && (a.y = n),
    s !== void 0 && (a.scale = s),
    i !== void 0 && ih(a, i, o, r, !1));
}
const zo = new Set([
    "baseFrequency",
    "diffuseConstant",
    "kernelMatrix",
    "kernelUnitLength",
    "keySplines",
    "keyTimes",
    "limitingConeAngle",
    "markerHeight",
    "markerWidth",
    "numOctaves",
    "targetX",
    "targetY",
    "surfaceScale",
    "specularConstant",
    "specularExponent",
    "stdDeviation",
    "tableValues",
    "viewBox",
    "gradientTransform",
    "pathLength",
    "startOffset",
    "textLength",
    "lengthAdjust",
  ]),
  Uo = (t) => typeof t == "string" && t.toLowerCase() === "svg";
function oh(t, e, n, s) {
  _o(t, e, void 0, s);
  for (const i in e.attrs) t.setAttribute(zo.has(i) ? i : As(i), e.attrs[i]);
}
function Ko(t, e, n) {
  const s = Rs(t, e, n);
  for (const i in t)
    if (Z(t[i]) || Z(e[i])) {
      const o = ae.indexOf(i) !== -1 ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i;
      s[o] = t[i];
    }
  return s;
}
class Go extends Lo {
  constructor() {
    (super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = q));
  }
  getBaseTargetFromProps(e, n) {
    return e[n];
  }
  readValueFromInstance(e, n) {
    if (le.has(n)) {
      const s = jo(n);
      return (s && s.default) || 0;
    }
    return ((n = zo.has(n) ? n : As(n)), e.getAttribute(n));
  }
  scrapeMotionValuesFromProps(e, n, s) {
    return Ko(e, n, s);
  }
  build(e, n, s) {
    Wo(e, n, this.isSVGTag, s.transformTemplate, s.style);
  }
  renderInstance(e, n, s, i) {
    oh(e, n, s, i);
  }
  mount(e) {
    ((this.isSVGTag = Uo(e.tagName)), super.mount(e));
  }
}
const ah = Vs.length;
function qo(t) {
  if (!t) return;
  if (!t.isControllingVariants) {
    const n = t.parent ? qo(t.parent) || {} : {};
    return (t.props.initial !== void 0 && (n.initial = t.props.initial), n);
  }
  const e = {};
  for (let n = 0; n < ah; n++) {
    const s = Vs[n],
      i = t.props[s];
    (we(i) || i === !1) && (e[s] = i);
  }
  return e;
}
function Yo(t, e) {
  if (!Array.isArray(e)) return !1;
  const n = e.length;
  if (n !== t.length) return !1;
  for (let s = 0; s < n; s++) if (e[s] !== t[s]) return !1;
  return !0;
}
const lh = [...Ns].reverse(),
  ch = Ns.length;
function uh(t) {
  return (e) => Promise.all(e.map(({ animation: n, options: s }) => cd(t, n, s)));
}
function dh(t) {
  let e = uh(t),
    n = Ei(),
    s = !0,
    i = !1;
  const o = (c) => (u, a) => {
    const f = qt(t, a, c === "exit" ? t.presenceContext?.custom : void 0);
    if (f) {
      const { transition: p, transitionEnd: m, ...x } = f;
      u = { ...u, ...x, ...m };
    }
    return u;
  };
  function r(c) {
    e = c(t);
  }
  function l(c) {
    const { props: u } = t,
      a = qo(t.parent) || {},
      f = [],
      p = new Set();
    let m = {},
      x = 1 / 0;
    for (let g = 0; g < ch; g++) {
      const b = lh[g],
        v = n[b],
        w = u[b] !== void 0 ? u[b] : a[b],
        k = we(w),
        E = b === c ? v.isActive : null;
      E === !1 && (x = g);
      let M = w === a[b] && w !== u[b] && k;
      if (
        (M && (s || i) && t.manuallyAnimateOnMount && (M = !1),
        (v.protectedKeys = { ...m }),
        (!v.isActive && E === null) || (!w && !v.prevProp) || cn(w) || typeof w == "boolean")
      )
        continue;
      if (b === "exit" && v.isActive && E !== !0) {
        v.prevResolvedValues && (m = { ...m, ...v.prevResolvedValues });
        continue;
      }
      const j = hh(v.prevProp, w);
      let P = j || (b === c && v.isActive && !M && k) || (g > x && k),
        C = !1;
      const V = Array.isArray(w) ? w : [w];
      let $ = V.reduce(o(b), {});
      E === !1 && ($ = {});
      const { prevResolvedValues: G = {} } = v,
        z = { ...G, ...$ },
        Q = (D) => {
          ((P = !0), p.has(D) && ((C = !0), p.delete(D)), (v.needsAnimating[D] = !0));
          const B = t.getValue(D);
          B && (B.liveStyle = !1);
        };
      for (const D in z) {
        const B = $[D],
          st = G[D];
        if (m.hasOwnProperty(D)) continue;
        let X = !1;
        (Kn(B) && Kn(st) ? (X = !Yo(B, st) || j) : (X = B !== st),
          X
            ? B != null
              ? Q(D)
              : p.add(D)
            : B !== void 0 && p.has(D)
              ? Q(D)
              : (v.protectedKeys[D] = !0));
      }
      ((v.prevProp = w),
        (v.prevResolvedValues = $),
        v.isActive && (m = { ...m, ...$ }),
        (s || i) && t.blockInitialAnimation && (P = !1));
      const R = M && j;
      P &&
        (!R || C) &&
        f.push(
          ...V.map((D) => {
            const B = { type: b };
            if (typeof D == "string" && (s || i) && !R && t.manuallyAnimateOnMount && t.parent) {
              const { parent: st } = t,
                X = qt(st, D);
              if (st.enteringChildren && X) {
                const { delayChildren: mt } = X.transition || {};
                B.delay = go(st.enteringChildren, t, mt);
              }
            }
            return { animation: D, options: B };
          }),
        );
    }
    if (p.size) {
      const g = {};
      if (typeof u.initial != "boolean") {
        const b = qt(t, Array.isArray(u.initial) ? u.initial[0] : u.initial);
        b && b.transition && (g.transition = b.transition);
      }
      (p.forEach((b) => {
        const v = t.getBaseTarget(b),
          w = t.getValue(b);
        (w && (w.liveStyle = !0), (g[b] = v ?? null));
      }),
        f.push({ animation: g }));
    }
    let y = !!f.length;
    return (
      s && (u.initial === !1 || u.initial === u.animate) && !t.manuallyAnimateOnMount && (y = !1),
      (s = !1),
      (i = !1),
      y ? e(f) : Promise.resolve()
    );
  }
  function h(c, u) {
    if (n[c].isActive === u) return Promise.resolve();
    (t.variantChildren?.forEach((f) => f.animationState?.setActive(c, u)), (n[c].isActive = u));
    const a = l(c);
    for (const f in n) n[f].protectedKeys = {};
    return a;
  }
  return {
    animateChanges: l,
    setActive: h,
    setAnimateFunction: r,
    getState: () => n,
    reset: () => {
      ((n = Ei()), (i = !0));
    },
  };
}
function hh(t, e) {
  return typeof e == "string" ? e !== t : Array.isArray(e) ? !Yo(e, t) : !1;
}
function Wt(t = !1) {
  return { isActive: t, protectedKeys: {}, needsAnimating: {}, prevResolvedValues: {} };
}
function Ei() {
  return {
    animate: Wt(!0),
    whileInView: Wt(),
    whileHover: Wt(),
    whileTap: Wt(),
    whileDrag: Wt(),
    whileFocus: Wt(),
    exit: Wt(),
  };
}
function ns(t, e) {
  ((t.min = e.min), (t.max = e.max));
}
function vt(t, e) {
  (ns(t.x, e.x), ns(t.y, e.y));
}
function Ni(t, e) {
  ((t.translate = e.translate),
    (t.scale = e.scale),
    (t.originPoint = e.originPoint),
    (t.origin = e.origin));
}
const Xo = 1e-4,
  fh = 1 - Xo,
  mh = 1 + Xo,
  Zo = 0.01,
  ph = 0 - Zo,
  gh = 0 + Zo;
function lt(t) {
  return t.max - t.min;
}
function yh(t, e, n) {
  return Math.abs(t - e) <= n;
}
function Vi(t, e, n, s = 0.5) {
  ((t.origin = s),
    (t.originPoint = O(e.min, e.max, t.origin)),
    (t.scale = lt(n) / lt(e)),
    (t.translate = O(n.min, n.max, t.origin) - t.originPoint),
    ((t.scale >= fh && t.scale <= mh) || isNaN(t.scale)) && (t.scale = 1),
    ((t.translate >= ph && t.translate <= gh) || isNaN(t.translate)) && (t.translate = 0));
}
function ge(t, e, n, s) {
  (Vi(t.x, e.x, n.x, s ? s.originX : void 0), Vi(t.y, e.y, n.y, s ? s.originY : void 0));
}
function Di(t, e, n, s = 0) {
  const i = s ? O(n.min, n.max, s) : n.min;
  ((t.min = i + e.min), (t.max = t.min + lt(e)));
}
function xh(t, e, n, s) {
  (Di(t.x, e.x, n.x, s?.x), Di(t.y, e.y, n.y, s?.y));
}
function Ri(t, e, n, s = 0) {
  const i = s ? O(n.min, n.max, s) : n.min;
  ((t.min = e.min - i), (t.max = t.min + lt(e)));
}
function tn(t, e, n, s) {
  (Ri(t.x, e.x, n.x, s?.x), Ri(t.y, e.y, n.y, s?.y));
}
function Li(t, e, n, s, i) {
  return ((t -= e), (t = Je(t, 1 / n, s)), i !== void 0 && (t = Je(t, 1 / i, s)), t);
}
function vh(t, e = 0, n = 1, s = 0.5, i, o = t, r = t) {
  if (
    (kt.test(e) && ((e = parseFloat(e)), (e = O(r.min, r.max, e / 100) - r.min)),
    typeof e != "number")
  )
    return;
  let l = O(o.min, o.max, s);
  (t === o && (l -= e), (t.min = Li(t.min, e, n, l, i)), (t.max = Li(t.max, e, n, l, i)));
}
function Bi(t, e, [n, s, i], o, r) {
  vh(t, e[n], e[s], e[i], e.scale, o, r);
}
const bh = ["x", "scaleX", "originX"],
  wh = ["y", "scaleY", "originY"];
function Ii(t, e, n, s) {
  (Bi(t.x, e, bh, n ? n.x : void 0, s ? s.x : void 0),
    Bi(t.y, e, wh, n ? n.y : void 0, s ? s.y : void 0));
}
function Fi(t) {
  return t.translate === 0 && t.scale === 1;
}
function Qo(t) {
  return Fi(t.x) && Fi(t.y);
}
function Oi(t, e) {
  return t.min === e.min && t.max === e.max;
}
function Th(t, e) {
  return Oi(t.x, e.x) && Oi(t.y, e.y);
}
function _i(t, e) {
  return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max);
}
function Jo(t, e) {
  return _i(t.x, e.x) && _i(t.y, e.y);
}
function $i(t) {
  return lt(t.x) / lt(t.y);
}
function Hi(t, e) {
  return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint;
}
function At(t) {
  return [t("x"), t("y")];
}
function Sh(t, e, n) {
  let s = "";
  const i = t.x.translate / e.x,
    o = t.y.translate / e.y,
    r = n?.z || 0;
  if (
    ((i || o || r) && (s = `translate3d(${i}px, ${o}px, ${r}px) `),
    (e.x !== 1 || e.y !== 1) && (s += `scale(${1 / e.x}, ${1 / e.y}) `),
    n)
  ) {
    const {
      transformPerspective: c,
      rotate: u,
      pathRotation: a,
      rotateX: f,
      rotateY: p,
      skewX: m,
      skewY: x,
    } = n;
    (c && (s = `perspective(${c}px) ${s}`),
      u && (s += `rotate(${u}deg) `),
      a && (s += `rotate(${a}deg) `),
      f && (s += `rotateX(${f}deg) `),
      p && (s += `rotateY(${p}deg) `),
      m && (s += `skewX(${m}deg) `),
      x && (s += `skewY(${x}deg) `));
  }
  const l = t.x.scale * e.x,
    h = t.y.scale * e.y;
  return ((l !== 1 || h !== 1) && (s += `scale(${l}, ${h})`), s || "none");
}
const jh = ks.length,
  Wi = (t) => (typeof t == "string" ? parseFloat(t) : t),
  zi = (t) => typeof t == "number" || A.test(t);
function Ph(t, e, n, s, i, o) {
  i
    ? ((t.opacity = O(0, n.opacity ?? 1, Ah(s))), (t.opacityExit = O(e.opacity ?? 1, 0, Ch(s))))
    : o && (t.opacity = O(e.opacity ?? 1, n.opacity ?? 1, s));
  for (let r = 0; r < jh; r++) {
    const l = ks[r];
    let h = Ui(e, l),
      c = Ui(n, l);
    if (h === void 0 && c === void 0) continue;
    (h || (h = 0),
      c || (c = 0),
      h === 0 || c === 0 || zi(h) === zi(c)
        ? ((t[l] = Math.max(O(Wi(h), Wi(c), s), 0)), (kt.test(c) || kt.test(h)) && (t[l] += "%"))
        : (t[l] = c));
  }
  (e.rotate || n.rotate) && (t.rotate = O(e.rotate || 0, n.rotate || 0, s));
}
function Ui(t, e) {
  return t[e] !== void 0 ? t[e] : t.borderRadius;
}
const Ah = ta(0, 0.5, Fr),
  Ch = ta(0.5, 0.95, yt);
function ta(t, e, n) {
  return (s) => (s < t ? 0 : s > e ? 1 : n(ie(t, e, s)));
}
function ea(t, e, n) {
  const s = Z(t) ? t : _t(t);
  return (s.start(js("", s, e, n)), s.animation);
}
function Te(t, e, n, s = { passive: !0 }) {
  return (t.addEventListener(e, n, s), () => t.removeEventListener(e, n, s));
}
const kh = (t, e) => t.depth - e.depth;
class Mh {
  constructor() {
    ((this.children = []), (this.isDirty = !1));
  }
  add(e) {
    (us(this.children, e), (this.isDirty = !0));
  }
  remove(e) {
    (se(this.children, e), (this.isDirty = !0));
  }
  forEach(e) {
    (this.isDirty && this.children.sort(kh), (this.isDirty = !1), this.children.forEach(e));
  }
}
function Eh(t, e) {
  const n = at.now(),
    s = ({ timestamp: i }) => {
      const o = i - n;
      o >= e && (Rt(s), t(o - e));
    };
  return (_.setup(s, !0), () => Rt(s));
}
function ze(t) {
  return Z(t) ? t.get() : t;
}
class Nh {
  constructor() {
    this.members = [];
  }
  add(e) {
    us(this.members, e);
    for (let n = this.members.length - 1; n >= 0; n--) {
      const s = this.members[n];
      if (s === e || s === this.lead || s === this.prevLead) continue;
      const i = s.instance;
      (!i || i.isConnected === !1) && !s.snapshot && (se(this.members, s), s.unmount());
    }
    e.scheduleRender();
  }
  remove(e) {
    if ((se(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead)) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(e) {
    for (let n = this.members.indexOf(e) - 1; n >= 0; n--) {
      const s = this.members[n];
      if (s.isPresent !== !1 && s.instance?.isConnected !== !1) return (this.promote(s), !0);
    }
    return !1;
  }
  promote(e, n) {
    const s = this.lead;
    if (e !== s && ((this.prevLead = s), (this.lead = e), e.show(), s)) {
      (s.updateSnapshot(), e.scheduleRender());
      const { layoutDependency: i } = s.options,
        { layoutDependency: o } = e.options;
      ((i === void 0 || i !== o) &&
        ((e.resumeFrom = s),
        n && (s.preserveOpacity = !0),
        s.snapshot &&
          ((e.snapshot = s.snapshot),
          (e.snapshot.latestValues = s.animationValues || s.latestValues)),
        e.root?.isUpdating && (e.isLayoutDirty = !0)),
        e.options.crossfade === !1 && s.hide());
    }
  }
  exitAnimationComplete() {
    this.members.forEach((e) => {
      (e.options.onExitComplete?.(), e.resumingFrom?.options.onExitComplete?.());
    });
  }
  scheduleRender() {
    this.members.forEach((e) => e.instance && e.scheduleRender(!1));
  }
  removeLeadSnapshot() {
    this.lead?.snapshot && (this.lead.snapshot = void 0);
  }
}
const Ue = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 },
  An = ["", "X", "Y", "Z"],
  Vh = 1e3;
let Dh = 0;
function Cn(t, e, n, s) {
  const { latestValues: i } = e;
  i[t] && ((n[t] = i[t]), e.setStaticValue(t, 0), s && (s[t] = 0));
}
function na(t) {
  if (((t.hasCheckedOptimisedAppear = !0), t.root === t)) return;
  const { visualElement: e } = t.options;
  if (!e) return;
  const n = wo(e);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: i, layoutId: o } = t.options;
    window.MotionCancelOptimisedAnimation(n, "transform", _, !(i || o));
  }
  const { parent: s } = t;
  s && !s.hasCheckedOptimisedAppear && na(s);
}
function sa({
  attachResizeListener: t,
  defaultParent: e,
  measureScroll: n,
  checkIsScrollRoot: s,
  resetTransform: i,
}) {
  return class {
    constructor(r = {}, l = e?.()) {
      ((this.id = Dh++),
        (this.animationId = 0),
        (this.animationCommitId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.layoutVersion = 0),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          ((this.projectionUpdateScheduled = !1),
            this.nodes.forEach(Bh),
            this.nodes.forEach(Hh),
            this.nodes.forEach(Wh),
            this.nodes.forEach(Ih));
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.linkedParentVersion = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = r),
        (this.root = l ? l.root || l : this),
        (this.path = l ? [...l.path, l] : []),
        (this.parent = l),
        (this.depth = l ? l.depth + 1 : 0));
      for (let h = 0; h < this.path.length; h++) this.path[h].shouldResetTransform = !0;
      this.root === this && (this.nodes = new Mh());
    }
    addEventListener(r, l) {
      return (
        this.eventHandlers.has(r) || this.eventHandlers.set(r, new ds()),
        this.eventHandlers.get(r).add(l)
      );
    }
    notifyListeners(r, ...l) {
      const h = this.eventHandlers.get(r);
      h && h.notify(...l);
    }
    hasListeners(r) {
      return this.eventHandlers.has(r);
    }
    mount(r) {
      if (this.instance) return;
      ((this.isSVG = ln(r) && !Eo(r)), (this.instance = r));
      const { layoutId: l, layout: h, visualElement: c } = this.options;
      if (
        (c && !c.current && c.mount(r),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        this.root.hasTreeAnimated && (h || l) && (this.isLayoutDirty = !0),
        t)
      ) {
        let u,
          a = 0;
        const f = () => (this.root.updateBlockedByResize = !1);
        (_.read(() => {
          a = window.innerWidth;
        }),
          t(r, () => {
            const p = window.innerWidth;
            p !== a &&
              ((a = p),
              (this.root.updateBlockedByResize = !0),
              u && u(),
              (u = Eh(f, 250)),
              Ue.hasAnimatedSinceResize &&
                ((Ue.hasAnimatedSinceResize = !1), this.nodes.forEach(qi)));
          }));
      }
      (l && this.root.registerSharedNode(l, this),
        this.options.animate !== !1 &&
          c &&
          (l || h) &&
          this.addEventListener(
            "didUpdate",
            ({ delta: u, hasLayoutChanged: a, hasRelativeLayoutChanged: f, layout: p }) => {
              if (this.isTreeAnimationBlocked()) {
                ((this.target = void 0), (this.relativeTarget = void 0));
                return;
              }
              const m = this.options.transition || c.getDefaultTransition() || qh,
                { onLayoutAnimationStart: x, onLayoutAnimationComplete: y } = c.getProps(),
                g = !this.targetLayout || !Jo(this.targetLayout, p),
                b = !a && f;
              if (
                this.options.layoutRoot ||
                this.resumeFrom ||
                b ||
                (a && (g || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0));
                const v = { ...Ss(m, "layout"), onPlay: x, onComplete: y };
                ((c.shouldReduceMotion || this.options.layoutRoot) &&
                  ((v.delay = 0), (v.type = !1)),
                  this.startAnimation(v),
                  this.setAnimationOrigin(u, b, v.path));
              } else
                (a || qi(this),
                  this.isLead() && this.options.onExitComplete && this.options.onExitComplete());
              this.targetLayout = p;
            },
          ));
    }
    unmount() {
      (this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this));
      const r = this.getStack();
      (r && r.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        this.eventHandlers.clear(),
        Rt(this.updateProjection));
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || (this.parent && this.parent.isTreeAnimationBlocked()) || !1;
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0), this.nodes && this.nodes.forEach(zh), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: r } = this.options;
      return r && r.getProps().transformTemplate;
    }
    willUpdate(r = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && na(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let u = 0; u < this.path.length; u++) {
        const a = this.path[u];
        ((a.shouldResetTransform = !0),
          (typeof a.latestValues.x == "string" || typeof a.latestValues.y == "string") &&
            (a.isLayoutDirty = !0),
          a.updateScroll("snapshot"),
          a.options.layoutRoot && a.willUpdate(!1));
      }
      const { layoutId: l, layout: h } = this.options;
      if (l === void 0 && !h) return;
      const c = this.getTransformTemplate();
      ((this.prevTransformTemplateValue = c ? c(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        r && this.notifyListeners("willUpdate"));
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        const h = this.updateBlockedByResize;
        (this.unblockUpdate(),
          (this.updateBlockedByResize = !1),
          this.clearAllSnapshots(),
          h && this.nodes.forEach(Oh),
          this.nodes.forEach(Ki));
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(Gi);
        return;
      }
      ((this.animationCommitId = this.animationId),
        this.isUpdating
          ? ((this.isUpdating = !1),
            this.nodes.forEach(_h),
            this.nodes.forEach($h),
            this.nodes.forEach(Rh),
            this.nodes.forEach(Lh))
          : this.nodes.forEach(Gi),
        this.clearAllSnapshots());
      const l = at.now();
      ((nt.delta = Mt(0, 1e3 / 60, l - nt.timestamp)),
        (nt.timestamp = l),
        (nt.isProcessing = !0),
        xn.update.process(nt),
        xn.preRender.process(nt),
        xn.render.process(nt),
        (nt.isProcessing = !1));
    }
    didUpdate() {
      this.updateScheduled || ((this.updateScheduled = !0), Ms.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      (this.nodes.forEach(Fh), this.sharedNodes.forEach(Uh));
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0), _.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      _.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot ||
        !this.instance ||
        ((this.snapshot = this.measure()),
        this.snapshot &&
          !lt(this.snapshot.measuredBox.x) &&
          !lt(this.snapshot.measuredBox.y) &&
          (this.snapshot = void 0));
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let h = 0; h < this.path.length; h++) this.path[h].updateScroll();
      const r = this.layout;
      ((this.layout = this.measure(!1)),
        this.layoutVersion++,
        this.layoutCorrected || (this.layoutCorrected = q()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox));
      const { visualElement: l } = this.options;
      l && l.notify("LayoutMeasure", this.layout.layoutBox, r ? r.layoutBox : void 0);
    }
    updateScroll(r = "measure") {
      let l = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === r &&
          (l = !1),
        l && this.instance)
      ) {
        const h = s(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: r,
          isRoot: h,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : h,
        };
      }
    }
    resetTransform() {
      if (!i) return;
      const r = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
        l = this.projectionDelta && !Qo(this.projectionDelta),
        h = this.getTransformTemplate(),
        c = h ? h(this.latestValues, "") : void 0,
        u = c !== this.prevTransformTemplateValue;
      r &&
        this.instance &&
        (l || zt(this.latestValues) || u) &&
        (i(this.instance, c), (this.shouldResetTransform = !1), this.scheduleRender());
    }
    measure(r = !0) {
      const l = this.measurePageBox();
      let h = this.removeElementScroll(l);
      return (
        r && (h = this.removeTransform(h)),
        Yh(h),
        {
          animationId: this.root.animationId,
          measuredBox: l,
          layoutBox: h,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      const { visualElement: r } = this.options;
      if (!r) return q();
      const l = r.measureViewportBox();
      if (!(this.scroll?.wasRoot || this.path.some(Xh))) {
        const { scroll: c } = this.root;
        c && (Ct(l.x, c.offset.x), Ct(l.y, c.offset.y));
      }
      return l;
    }
    removeElementScroll(r) {
      const l = q();
      if ((vt(l, r), this.scroll?.wasRoot)) return l;
      for (let h = 0; h < this.path.length; h++) {
        const c = this.path[h],
          { scroll: u, options: a } = c;
        c !== this.root &&
          u &&
          a.layoutScroll &&
          (u.wasRoot && vt(l, r), Ct(l.x, u.offset.x), Ct(l.y, u.offset.y));
      }
      return l;
    }
    applyTransform(r, l = !1, h) {
      const c = h || q();
      vt(c, r);
      for (let u = 0; u < this.path.length; u++) {
        const a = this.path[u];
        (!l &&
          a.options.layoutScroll &&
          a.scroll &&
          a !== a.root &&
          (Ct(c.x, -a.scroll.offset.x), Ct(c.y, -a.scroll.offset.y)),
          zt(a.latestValues) && We(c, a.latestValues, a.layout?.layoutBox));
      }
      return (zt(this.latestValues) && We(c, this.latestValues, this.layout?.layoutBox), c);
    }
    removeTransform(r) {
      const l = q();
      vt(l, r);
      for (let h = 0; h < this.path.length; h++) {
        const c = this.path[h];
        if (!zt(c.latestValues)) continue;
        let u;
        (c.instance &&
          (Jn(c.latestValues) && c.updateSnapshot(), (u = q()), vt(u, c.measurePageBox())),
          Ii(l, c.latestValues, c.snapshot?.layoutBox, u));
      }
      return (zt(this.latestValues) && Ii(l, this.latestValues), l);
    }
    setTargetDelta(r) {
      ((this.targetDelta = r), this.root.scheduleUpdateProjection(), (this.isProjectionDirty = !0));
    }
    setOptions(r) {
      this.options = {
        ...this.options,
        ...r,
        crossfade: r.crossfade !== void 0 ? r.crossfade : !0,
      };
    }
    clearMeasurements() {
      ((this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1));
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== nt.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(r = !1) {
      const l = this.getLead();
      (this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
        this.isSharedProjectionDirty || (this.isSharedProjectionDirty = l.isSharedProjectionDirty));
      const h = !!this.resumingFrom || this !== l;
      if (!(
        r ||
        (h && this.isSharedProjectionDirty) ||
        this.isProjectionDirty ||
        this.parent?.isProjectionDirty ||
        this.attemptToResolveRelativeTarget ||
        this.root.updateBlockedByResize
      ))
        return;
      const { layout: u, layoutId: a } = this.options;
      if (!this.layout || !(u || a)) return;
      this.resolvedRelativeTargetAt = nt.timestamp;
      const f = this.getClosestProjectingParent();
      (f &&
        this.linkedParentVersion !== f.layoutVersion &&
        !f.options.layoutRoot &&
        this.removeRelativeTarget(),
        !this.targetDelta &&
          !this.relativeTarget &&
          (this.options.layoutAnchor !== !1 && f && f.layout
            ? this.createRelativeTarget(f, this.layout.layoutBox, f.layout.layoutBox)
            : this.removeRelativeTarget()),
        !(!this.relativeTarget && !this.targetDelta) &&
          (this.target || ((this.target = q()), (this.targetWithTransforms = q())),
          this.relativeTarget &&
          this.relativeTargetOrigin &&
          this.relativeParent &&
          this.relativeParent.target
            ? (this.forceRelativeParentToResolveTarget(),
              xh(
                this.target,
                this.relativeTarget,
                this.relativeParent.target,
                this.options.layoutAnchor || void 0,
              ))
            : this.targetDelta
              ? (this.resumingFrom
                  ? this.applyTransform(this.layout.layoutBox, !1, this.target)
                  : vt(this.target, this.layout.layoutBox),
                Fo(this.target, this.targetDelta))
              : vt(this.target, this.layout.layoutBox),
          this.attemptToResolveRelativeTarget &&
            ((this.attemptToResolveRelativeTarget = !1),
            this.options.layoutAnchor !== !1 &&
            f &&
            !!f.resumingFrom == !!this.resumingFrom &&
            !f.options.layoutScroll &&
            f.target &&
            this.animationProgress !== 1
              ? this.createRelativeTarget(f, this.target, f.target)
              : (this.relativeParent = this.relativeTarget = void 0))));
    }
    getClosestProjectingParent() {
      if (!(!this.parent || Jn(this.parent.latestValues) || Io(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    createRelativeTarget(r, l, h) {
      ((this.relativeParent = r),
        (this.linkedParentVersion = r.layoutVersion),
        this.forceRelativeParentToResolveTarget(),
        (this.relativeTarget = q()),
        (this.relativeTargetOrigin = q()),
        tn(this.relativeTargetOrigin, l, h, this.options.layoutAnchor || void 0),
        vt(this.relativeTarget, this.relativeTargetOrigin));
    }
    removeRelativeTarget() {
      this.relativeParent = this.relativeTarget = void 0;
    }
    calcProjection() {
      const r = this.getLead(),
        l = !!this.resumingFrom || this !== r;
      let h = !0;
      if (
        ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (h = !1),
        l && (this.isSharedProjectionDirty || this.isTransformDirty) && (h = !1),
        this.resolvedRelativeTargetAt === nt.timestamp && (h = !1),
        h)
      )
        return;
      const { layout: c, layoutId: u } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(c || u))
      )
        return;
      vt(this.layoutCorrected, this.layout.layoutBox);
      const a = this.treeScale.x,
        f = this.treeScale.y;
      (Gd(this.layoutCorrected, this.treeScale, this.path, l),
        r.layout &&
          !r.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((r.target = r.layout.layoutBox), (r.targetWithTransforms = q())));
      const { target: p } = r;
      if (!p) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      (!this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (Ni(this.prevProjectionDelta.x, this.projectionDelta.x),
          Ni(this.prevProjectionDelta.y, this.projectionDelta.y)),
        ge(this.projectionDelta, this.layoutCorrected, p, this.latestValues),
        (this.treeScale.x !== a ||
          this.treeScale.y !== f ||
          !Hi(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !Hi(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", p)));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(r = !0) {
      if ((this.options.visualElement?.scheduleRender(), r)) {
        const l = this.getStack();
        l && l.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      ((this.prevProjectionDelta = ne()),
        (this.projectionDelta = ne()),
        (this.projectionDeltaWithTransform = ne()));
    }
    setAnimationOrigin(r, l = !1, h) {
      const c = this.snapshot,
        u = c ? c.latestValues : {},
        a = { ...this.latestValues },
        f = ne();
      ((!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !l));
      const p = q(),
        m = c ? c.source : void 0,
        x = this.layout ? this.layout.source : void 0,
        y = m !== x,
        g = this.getStack(),
        b = !g || g.members.length <= 1,
        v = !!(y && !b && this.options.crossfade === !0 && !this.path.some(Gh));
      this.animationProgress = 0;
      let w;
      const k = h?.interpolateProjection(r);
      ((this.mixTargetDelta = (E) => {
        const M = E / 1e3,
          j = k?.(M);
        (j
          ? ((f.x.translate = j.x),
            (f.x.scale = O(r.x.scale, 1, M)),
            (f.x.origin = r.x.origin),
            (f.x.originPoint = r.x.originPoint),
            (f.y.translate = j.y),
            (f.y.scale = O(r.y.scale, 1, M)),
            (f.y.origin = r.y.origin),
            (f.y.originPoint = r.y.originPoint))
          : (Yi(f.x, r.x, M), Yi(f.y, r.y, M)),
          this.setTargetDelta(f),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (tn(
              p,
              this.layout.layoutBox,
              this.relativeParent.layout.layoutBox,
              this.options.layoutAnchor || void 0,
            ),
            Kh(this.relativeTarget, this.relativeTargetOrigin, p, M),
            w && Th(this.relativeTarget, w) && (this.isProjectionDirty = !1),
            w || (w = q()),
            vt(w, this.relativeTarget)),
          y && ((this.animationValues = a), Ph(a, u, this.latestValues, M, v, b)),
          j &&
            j.rotate !== void 0 &&
            (this.animationValues || (this.animationValues = a),
            (this.animationValues.pathRotation = j.rotate)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = M));
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0));
    }
    startAnimation(r) {
      (this.notifyListeners("animationStart"),
        this.currentAnimation?.stop(),
        this.resumingFrom?.currentAnimation?.stop(),
        this.pendingAnimation && (Rt(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = _.update(() => {
          ((Ue.hasAnimatedSinceResize = !0),
            this.motionValue || (this.motionValue = _t(0)),
            this.motionValue.jump(0, !1),
            (this.currentAnimation = ea(this.motionValue, [0, 1e3], {
              ...r,
              velocity: 0,
              isSync: !0,
              onUpdate: (l) => {
                (this.mixTargetDelta(l), r.onUpdate && r.onUpdate(l));
              },
              onComplete: () => {
                (r.onComplete && r.onComplete(), this.completeAnimation());
              },
            })),
            this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0));
        })));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const r = this.getStack();
      (r && r.exitAnimationComplete(),
        (this.resumingFrom = this.currentAnimation = this.animationValues = void 0),
        this.notifyListeners("animationComplete"));
    }
    finishAnimation() {
      (this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(Vh), this.currentAnimation.stop()),
        this.completeAnimation());
    }
    applyTransformsToTarget() {
      const r = this.getLead();
      let { targetWithTransforms: l, target: h, layout: c, latestValues: u } = r;
      if (!(!l || !h || !c)) {
        if (
          this !== r &&
          this.layout &&
          c &&
          ia(this.options.animationType, this.layout.layoutBox, c.layoutBox)
        ) {
          h = this.target || q();
          const a = lt(this.layout.layoutBox.x);
          ((h.x.min = r.target.x.min), (h.x.max = h.x.min + a));
          const f = lt(this.layout.layoutBox.y);
          ((h.y.min = r.target.y.min), (h.y.max = h.y.min + f));
        }
        (vt(l, h), We(l, u), ge(this.projectionDeltaWithTransform, this.layoutCorrected, l, u));
      }
    }
    registerSharedNode(r, l) {
      (this.sharedNodes.has(r) || this.sharedNodes.set(r, new Nh()),
        this.sharedNodes.get(r).add(l));
      const c = l.options.initialPromotionConfig;
      l.promote({
        transition: c ? c.transition : void 0,
        preserveFollowOpacity:
          c && c.shouldPreserveFollowOpacity ? c.shouldPreserveFollowOpacity(l) : void 0,
      });
    }
    isLead() {
      const r = this.getStack();
      return r ? r.lead === this : !0;
    }
    getLead() {
      const { layoutId: r } = this.options;
      return r ? this.getStack()?.lead || this : this;
    }
    getPrevLead() {
      const { layoutId: r } = this.options;
      return r ? this.getStack()?.prevLead : void 0;
    }
    getStack() {
      const { layoutId: r } = this.options;
      if (r) return this.root.sharedNodes.get(r);
    }
    promote({ needsReset: r, transition: l, preserveFollowOpacity: h } = {}) {
      const c = this.getStack();
      (c && c.promote(this, h),
        r && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        l && this.setOptions({ transition: l }));
    }
    relegate() {
      const r = this.getStack();
      return r ? r.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: r } = this.options;
      if (!r) return;
      let l = !1;
      const { latestValues: h } = r;
      if (
        ((h.z || h.rotate || h.rotateX || h.rotateY || h.rotateZ || h.skewX || h.skewY) && (l = !0),
        !l)
      )
        return;
      const c = {};
      h.z && Cn("z", r, c, this.animationValues);
      for (let u = 0; u < An.length; u++)
        (Cn(`rotate${An[u]}`, r, c, this.animationValues),
          Cn(`skew${An[u]}`, r, c, this.animationValues));
      r.render();
      for (const u in c)
        (r.setStaticValue(u, c[u]), this.animationValues && (this.animationValues[u] = c[u]));
      r.scheduleRender();
    }
    applyProjectionStyles(r, l) {
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) {
        r.visibility = "hidden";
        return;
      }
      const h = this.getTransformTemplate();
      if (this.needsReset) {
        ((this.needsReset = !1),
          (r.visibility = ""),
          (r.opacity = ""),
          (r.pointerEvents = ze(l?.pointerEvents) || ""),
          (r.transform = h ? h(this.latestValues, "") : "none"));
        return;
      }
      const c = this.getLead();
      if (!this.projectionDelta || !this.layout || !c.target) {
        (this.options.layoutId &&
          ((r.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1),
          (r.pointerEvents = ze(l?.pointerEvents) || "")),
          this.hasProjected &&
            !zt(this.latestValues) &&
            ((r.transform = h ? h({}, "") : "none"), (this.hasProjected = !1)));
        return;
      }
      r.visibility = "";
      const u = c.animationValues || c.latestValues;
      this.applyTransformsToTarget();
      let a = Sh(this.projectionDeltaWithTransform, this.treeScale, u);
      (h && (a = h(u, a)), (r.transform = a));
      const { x: f, y: p } = this.projectionDelta;
      ((r.transformOrigin = `${f.origin * 100}% ${p.origin * 100}% 0`),
        c.animationValues
          ? (r.opacity =
              c === this
                ? (u.opacity ?? this.latestValues.opacity ?? 1)
                : this.preserveOpacity
                  ? this.latestValues.opacity
                  : u.opacityExit)
          : (r.opacity =
              c === this
                ? u.opacity !== void 0
                  ? u.opacity
                  : ""
                : u.opacityExit !== void 0
                  ? u.opacityExit
                  : 0));
      for (const m in es) {
        if (u[m] === void 0) continue;
        const { correct: x, applyTo: y, isCSSVariable: g } = es[m],
          b = a === "none" ? u[m] : x(u[m], c);
        if (y) {
          const v = y.length;
          for (let w = 0; w < v; w++) r[y[w]] = b;
        } else g ? (this.options.visualElement.renderState.vars[m] = b) : (r[m] = b);
      }
      this.options.layoutId && (r.pointerEvents = c === this ? ze(l?.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      (this.root.nodes.forEach((r) => r.currentAnimation?.stop()),
        this.root.nodes.forEach(Ki),
        this.root.sharedNodes.clear());
    }
  };
}
function Rh(t) {
  t.updateLayout();
}
function Lh(t) {
  const e = t.resumeFrom?.snapshot || t.snapshot;
  if (t.isLead() && t.layout && e && t.hasListeners("didUpdate")) {
    const { layoutBox: n, measuredBox: s } = t.layout,
      { animationType: i } = t.options,
      o = e.source !== t.layout.source;
    if (i === "size")
      At((u) => {
        const a = o ? e.measuredBox[u] : e.layoutBox[u],
          f = lt(a);
        ((a.min = n[u].min), (a.max = a.min + f));
      });
    else if (i === "x" || i === "y") {
      const u = i === "x" ? "y" : "x";
      ns(o ? e.measuredBox[u] : e.layoutBox[u], n[u]);
    } else
      ia(i, e.layoutBox, n) &&
        At((u) => {
          const a = o ? e.measuredBox[u] : e.layoutBox[u],
            f = lt(n[u]);
          ((a.max = a.min + f),
            t.relativeTarget &&
              !t.currentAnimation &&
              ((t.isProjectionDirty = !0),
              (t.relativeTarget[u].max = t.relativeTarget[u].min + f)));
        });
    const r = ne();
    ge(r, n, e.layoutBox);
    const l = ne();
    o ? ge(l, t.applyTransform(s, !0), e.measuredBox) : ge(l, n, e.layoutBox);
    const h = !Qo(r);
    let c = !1;
    if (!t.resumeFrom) {
      const u = t.getClosestProjectingParent();
      if (u && !u.resumeFrom) {
        const { snapshot: a, layout: f } = u;
        if (a && f) {
          const p = t.options.layoutAnchor || void 0,
            m = q();
          tn(m, e.layoutBox, a.layoutBox, p);
          const x = q();
          (tn(x, n, f.layoutBox, p),
            Jo(m, x) || (c = !0),
            u.options.layoutRoot &&
              ((t.relativeTarget = x), (t.relativeTargetOrigin = m), (t.relativeParent = u)));
        }
      }
    }
    t.notifyListeners("didUpdate", {
      layout: n,
      snapshot: e,
      delta: l,
      layoutDelta: r,
      hasLayoutChanged: h,
      hasRelativeLayoutChanged: c,
    });
  } else if (t.isLead()) {
    const { onExitComplete: n } = t.options;
    n && n();
  }
  t.options.transition = void 0;
}
function Bh(t) {
  t.parent &&
    (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty),
    t.isSharedProjectionDirty ||
      (t.isSharedProjectionDirty = !!(
        t.isProjectionDirty ||
        t.parent.isProjectionDirty ||
        t.parent.isSharedProjectionDirty
      )),
    t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty));
}
function Ih(t) {
  t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1;
}
function Fh(t) {
  t.clearSnapshot();
}
function Ki(t) {
  t.clearMeasurements();
}
function Oh(t) {
  ((t.isLayoutDirty = !0), t.updateLayout());
}
function Gi(t) {
  t.isLayoutDirty = !1;
}
function _h(t) {
  t.isAnimationBlocked &&
    t.layout &&
    !t.isLayoutDirty &&
    ((t.snapshot = t.layout), (t.isLayoutDirty = !0));
}
function $h(t) {
  const { visualElement: e } = t.options;
  (e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform());
}
function qi(t) {
  (t.finishAnimation(),
    (t.targetDelta = t.relativeTarget = t.target = void 0),
    (t.isProjectionDirty = !0));
}
function Hh(t) {
  t.resolveTargetDelta();
}
function Wh(t) {
  t.calcProjection();
}
function zh(t) {
  t.resetSkewAndRotation();
}
function Uh(t) {
  t.removeLeadSnapshot();
}
function Yi(t, e, n) {
  ((t.translate = O(e.translate, 0, n)),
    (t.scale = O(e.scale, 1, n)),
    (t.origin = e.origin),
    (t.originPoint = e.originPoint));
}
function Xi(t, e, n, s) {
  ((t.min = O(e.min, n.min, s)), (t.max = O(e.max, n.max, s)));
}
function Kh(t, e, n, s) {
  (Xi(t.x, e.x, n.x, s), Xi(t.y, e.y, n.y, s));
}
function Gh(t) {
  return t.animationValues && t.animationValues.opacityExit !== void 0;
}
const qh = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  Zi = (t) =>
    typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t),
  Qi = Zi("applewebkit/") && !Zi("chrome/") ? Math.round : yt;
function Ji(t) {
  ((t.min = Qi(t.min)), (t.max = Qi(t.max)));
}
function Yh(t) {
  (Ji(t.x), Ji(t.y));
}
function ia(t, e, n) {
  return t === "position" || (t === "preserve-aspect" && !yh($i(e), $i(n), 0.2));
}
function Xh(t) {
  return t !== t.root && t.scroll?.wasRoot;
}
const Zh = sa({
    attachResizeListener: (t, e) => Te(t, "resize", e),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body?.scrollLeft || 0,
      y: document.documentElement.scrollTop || document.body?.scrollTop || 0,
    }),
    checkIsScrollRoot: () => !0,
  }),
  kn = { current: void 0 },
  ra = sa({
    measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
    defaultParent: () => {
      if (!kn.current) {
        const t = new Zh({});
        (t.mount(window), t.setOptions({ layoutScroll: !0 }), (kn.current = t));
      }
      return kn.current;
    },
    resetTransform: (t, e) => {
      t.style.transform = e !== void 0 ? e : "none";
    },
    checkIsScrollRoot: (t) => window.getComputedStyle(t).position === "fixed",
  }),
  dn = S.createContext({ transformPagePoint: (t) => t, isStatic: !1, reducedMotion: "never" });
function tr(t, e) {
  if (typeof t == "function") return t(e);
  t != null && (t.current = e);
}
function Qh(...t) {
  return (e) => {
    let n = !1;
    const s = t.map((i) => {
      const o = tr(i, e);
      return (!n && typeof o == "function" && (n = !0), o);
    });
    if (n)
      return () => {
        for (let i = 0; i < s.length; i++) {
          const o = s[i];
          typeof o == "function" ? o() : tr(t[i], null);
        }
      };
  };
}
function Jh(...t) {
  return S.useCallback(Qh(...t), t);
}
class tf extends S.Component {
  getSnapshotBeforeUpdate(e) {
    const n = this.props.childRef.current;
    if (Fe(n) && e.isPresent && !this.props.isPresent && this.props.pop !== !1) {
      const s = n.offsetParent,
        i = (Fe(s) && s.offsetWidth) || 0,
        o = (Fe(s) && s.offsetHeight) || 0,
        r = getComputedStyle(n),
        l = this.props.sizeRef.current;
      ((l.height = parseFloat(r.height)),
        (l.width = parseFloat(r.width)),
        (l.top = n.offsetTop),
        (l.left = n.offsetLeft),
        (l.right = i - l.width - l.left),
        (l.bottom = o - l.height - l.top),
        (l.direction = r.direction));
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function ef({ children: t, isPresent: e, anchorX: n, anchorY: s, root: i, pop: o }) {
  const r = S.useId(),
    l = S.useRef(null),
    h = S.useRef({ width: 0, height: 0, top: 0, left: 0, right: 0, bottom: 0, direction: "ltr" }),
    { nonce: c } = S.useContext(dn),
    u = o !== !1 ? (t.props?.ref ?? t?.ref) : void 0,
    a = Jh(l, u);
  return (
    S.useInsertionEffect(() => {
      const { width: f, height: p, top: m, left: x, right: y, bottom: g, direction: b } = h.current;
      if (e || o === !1 || !l.current || !f || !p) return;
      const v = b === "rtl",
        w = n === "left" ? (v ? `right: ${y}` : `left: ${x}`) : v ? `left: ${x}` : `right: ${y}`,
        k = s === "bottom" ? `bottom: ${g}` : `top: ${m}`;
      l.current.dataset.motionPopId = r;
      const E = document.createElement("style");
      c && (E.nonce = c);
      const M = i ?? document.head;
      return (
        M.appendChild(E),
        E.sheet &&
          E.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${f}px !important;
            height: ${p}px !important;
            ${w}px !important;
            ${k}px !important;
          }
        `),
        () => {
          (l.current?.removeAttribute("data-motion-pop-id"), M.contains(E) && M.removeChild(E));
        }
      );
    }, [e]),
    d.jsx(tf, {
      isPresent: e,
      childRef: l,
      sizeRef: h,
      pop: o,
      children: o === !1 ? t : S.cloneElement(t, { ref: a }),
    })
  );
}
const nf = ({
  children: t,
  initial: e,
  isPresent: n,
  onExitComplete: s,
  custom: i,
  presenceAffectsLayout: o,
  mode: r,
  anchorX: l,
  anchorY: h,
  root: c,
}) => {
  const u = je(sf),
    a = S.useId(),
    f = S.useRef(n),
    p = S.useRef(s);
  nn(() => {
    ((f.current = n), (p.current = s));
  });
  let m = !0,
    x = S.useMemo(
      () => (
        (m = !1),
        {
          id: a,
          initial: e,
          isPresent: n,
          custom: i,
          onExitComplete: (y) => {
            u.set(y, !0);
            for (const g of u.values()) if (!g) return;
            s && s();
          },
          register: (y) => (
            u.set(y, !1),
            () => {
              (u.delete(y), !f.current && !u.size && p.current?.());
            }
          ),
        }
      ),
      [n, u, s],
    );
  return (
    o && m && (x = { ...x }),
    S.useMemo(() => {
      u.forEach((y, g) => u.set(g, !1));
    }, [n]),
    S.useEffect(() => {
      !n && !u.size && s && s();
    }, [n]),
    (t = d.jsx(ef, {
      pop: r === "popLayout",
      isPresent: n,
      anchorX: l,
      anchorY: h,
      root: c,
      children: t,
    })),
    d.jsx(sn.Provider, { value: x, children: t })
  );
};
function sf() {
  return new Map();
}
function oa(t = !0) {
  const e = S.useContext(sn);
  if (e === null) return [!0, null];
  const { isPresent: n, onExitComplete: s, register: i } = e,
    o = S.useId();
  S.useEffect(() => {
    if (t) return i(o);
  }, [t]);
  const r = S.useCallback(() => t && s && s(o), [o, s, t]);
  return !n && s ? [!1, r] : [!0];
}
const De = (t) => t.key || "";
function er(t) {
  const e = [];
  return (
    S.Children.forEach(t, (n) => {
      S.isValidElement(n) && e.push(n);
    }),
    e
  );
}
const rf = ({
    children: t,
    custom: e,
    initial: n = !0,
    onExitComplete: s,
    presenceAffectsLayout: i = !0,
    mode: o = "sync",
    propagate: r = !1,
    anchorX: l = "left",
    anchorY: h = "top",
    root: c,
  }) => {
    const [u, a] = oa(r),
      f = S.useMemo(() => er(t), [t]),
      p = r && !u ? [] : f.map(De),
      m = S.useRef(!0),
      x = S.useRef(f),
      y = je(() => new Map()),
      g = S.useRef(new Set()),
      [b, v] = S.useState(f),
      [w, k] = S.useState(f);
    nn(() => {
      ((m.current = !1), (x.current = f));
      for (let j = 0; j < w.length; j++) {
        const P = De(w[j]);
        p.includes(P) ? (y.delete(P), g.current.delete(P)) : y.get(P) !== !0 && y.set(P, !1);
      }
    }, [w, p.length, p.join("-")]);
    const E = [];
    if (f !== b) {
      let j = [...f];
      for (let P = 0; P < w.length; P++) {
        const C = w[P],
          V = De(C);
        p.includes(V) || (j.splice(P, 0, C), E.push(C));
      }
      return (o === "wait" && E.length && (j = E), k(er(j)), v(f), null);
    }
    const { forceRender: M } = S.useContext(cs);
    return d.jsx(d.Fragment, {
      children: w.map((j) => {
        const P = De(j),
          C = r && !u ? !1 : f === w || p.includes(P),
          V = () => {
            if (g.current.has(P)) return;
            if (y.has(P)) (g.current.add(P), y.set(P, !0));
            else return;
            let $ = !0;
            (y.forEach((G) => {
              G || ($ = !1);
            }),
              $ && (M?.(), k(x.current), r && a?.(), s && s()));
          };
        return d.jsx(
          nf,
          {
            isPresent: C,
            initial: !m.current || n ? void 0 : !1,
            custom: e,
            presenceAffectsLayout: i,
            mode: o,
            root: c,
            onExitComplete: C ? void 0 : V,
            anchorX: l,
            anchorY: h,
            children: j,
          },
          P,
        );
      }),
    });
  },
  aa = S.createContext({ strict: !1 }),
  nr = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  };
let sr = !1;
function of() {
  if (sr) return;
  const t = {};
  for (const e in nr) t[e] = { isEnabled: (n) => nr[e].some((s) => !!n[s]) };
  (Do(t), (sr = !0));
}
function la() {
  return (of(), zd());
}
function af(t) {
  const e = la();
  for (const n in t) e[n] = { ...e[n], ...t[n] };
  Do(e);
}
const lf = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "propagate",
  "ignoreStrict",
  "viewport",
]);
function en(t) {
  return (
    t.startsWith("while") ||
    (t.startsWith("drag") && t !== "draggable") ||
    t.startsWith("layout") ||
    t.startsWith("onTap") ||
    t.startsWith("onPan") ||
    t.startsWith("onLayout") ||
    lf.has(t)
  );
}
let ca = (t) => !en(t);
function cf(t) {
  typeof t == "function" && (ca = (e) => (e.startsWith("on") ? !en(e) : t(e)));
}
try {
  cf(require("@emotion/is-prop-valid").default);
} catch {}
function uf(t, e, n) {
  const s = {};
  for (const i in t)
    (i === "values" && typeof t.values == "object") ||
      Z(t[i]) ||
      ((ca(i) ||
        (n === !0 && en(i)) ||
        (!e && !en(i)) ||
        (t.draggable && i.startsWith("onDrag"))) &&
        (s[i] = t[i]));
  return s;
}
const hn = S.createContext({});
function df(t, e) {
  if (un(t)) {
    const { initial: n, animate: s } = t;
    return { initial: n === !1 || we(n) ? n : void 0, animate: we(s) ? s : void 0 };
  }
  return t.inherit !== !1 ? e : {};
}
function hf(t) {
  const { initial: e, animate: n } = df(t, S.useContext(hn));
  return S.useMemo(() => ({ initial: e, animate: n }), [ir(e), ir(n)]);
}
function ir(t) {
  return Array.isArray(t) ? t.join(" ") : t;
}
const Ls = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function ua(t, e, n) {
  for (const s in e) !Z(e[s]) && !$o(s, n) && (t[s] = e[s]);
}
function ff({ transformTemplate: t }, e) {
  return S.useMemo(() => {
    const n = Ls();
    return (Ds(n, e, t), Object.assign({}, n.vars, n.style));
  }, [e]);
}
function mf(t, e) {
  const n = t.style || {},
    s = {};
  return (ua(s, n, t), Object.assign(s, ff(t, e)), s);
}
function pf(t, e) {
  const n = {},
    s = mf(t, e);
  return (
    t.drag &&
      t.dragListener !== !1 &&
      ((n.draggable = !1),
      (s.userSelect = s.WebkitUserSelect = s.WebkitTouchCallout = "none"),
      (s.touchAction = t.drag === !0 ? "none" : `pan-${t.drag === "x" ? "y" : "x"}`)),
    t.tabIndex === void 0 && (t.onTap || t.onTapStart || t.whileTap) && (n.tabIndex = 0),
    (n.style = s),
    n
  );
}
const da = () => ({ ...Ls(), attrs: {} });
function gf(t, e, n, s) {
  const i = S.useMemo(() => {
    const o = da();
    return (Wo(o, e, Uo(s), t.transformTemplate, t.style), { ...o.attrs, style: { ...o.style } });
  }, [e]);
  if (t.style) {
    const o = {};
    (ua(o, t.style, t), (i.style = { ...o, ...i.style }));
  }
  return i;
}
const yf = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function Bs(t) {
  return typeof t != "string" || t.includes("-") ? !1 : !!(yf.indexOf(t) > -1 || /[A-Z]/u.test(t));
}
function xf(t, e, n, { latestValues: s }, i, o = !1, r) {
  const h = ((r ?? Bs(t)) ? gf : pf)(e, s, i, t),
    c = uf(e, typeof t == "string", o),
    u = t !== S.Fragment ? { ...c, ...h, ref: n } : {},
    { children: a } = e,
    f = S.useMemo(() => (Z(a) ? a.get() : a), [a]);
  return S.createElement(t, { ...u, children: f });
}
function vf({ scrapeMotionValuesFromProps: t, createRenderState: e }, n, s, i) {
  return { latestValues: bf(n, s, i, t), renderState: e() };
}
function bf(t, e, n, s) {
  const i = {},
    o = s(t, {});
  for (const f in o) i[f] = ze(o[f]);
  let { initial: r, animate: l } = t;
  const h = un(t),
    c = No(t);
  e &&
    c &&
    !h &&
    t.inherit !== !1 &&
    (r === void 0 && (r = e.initial), l === void 0 && (l = e.animate));
  let u = n ? n.initial === !1 : !1;
  u = u || r === !1;
  const a = u ? l : r;
  if (a && typeof a != "boolean" && !cn(a)) {
    const f = Array.isArray(a) ? a : [a];
    for (let p = 0; p < f.length; p++) {
      const m = Ps(t, f[p]);
      if (m) {
        const { transitionEnd: x, transition: y, ...g } = m;
        for (const b in g) {
          let v = g[b];
          if (Array.isArray(v)) {
            const w = u ? v.length - 1 : 0;
            v = v[w];
          }
          v !== null && (i[b] = v);
        }
        for (const b in x) i[b] = x[b];
      }
    }
  }
  return i;
}
const ha = (t) => (e, n) => {
    const s = S.useContext(hn),
      i = S.useContext(sn),
      o = () => vf(t, e, s, i);
    return n ? o() : je(o);
  },
  wf = ha({ scrapeMotionValuesFromProps: Rs, createRenderState: Ls }),
  Tf = ha({ scrapeMotionValuesFromProps: Ko, createRenderState: da }),
  Sf = Symbol.for("motionComponentSymbol");
function jf(t, e, n) {
  const s = S.useRef(n);
  S.useInsertionEffect(() => {
    s.current = n;
  });
  const i = S.useRef(null);
  return S.useCallback(
    (o) => {
      (o && t.onMount?.(o), e && (o ? e.mount(o) : e.unmount()));
      const r = s.current;
      if (typeof r == "function")
        if (o) {
          const l = r(o);
          typeof l == "function" && (i.current = l);
        } else i.current ? (i.current(), (i.current = null)) : r(o);
      else r && (r.current = o);
    },
    [e],
  );
}
const fa = S.createContext({});
function Jt(t) {
  return t && typeof t == "object" && Object.prototype.hasOwnProperty.call(t, "current");
}
function Pf(t, e, n, s, i, o) {
  const { visualElement: r } = S.useContext(hn),
    l = S.useContext(aa),
    h = S.useContext(sn),
    c = S.useContext(dn),
    u = c.reducedMotion,
    a = c.skipAnimations,
    f = S.useRef(null),
    p = S.useRef(!1);
  ((s = s || l.renderer),
    !f.current &&
      s &&
      ((f.current = s(t, {
        visualState: e,
        parent: r,
        props: n,
        presenceContext: h,
        blockInitialAnimation: h ? h.initial === !1 : !1,
        reducedMotionConfig: u,
        skipAnimations: a,
        isSVG: o,
      })),
      p.current && f.current && (f.current.manuallyAnimateOnMount = !0)));
  const m = f.current,
    x = S.useContext(fa);
  m && !m.projection && i && (m.type === "html" || m.type === "svg") && Af(f.current, n, i, x);
  const y = S.useRef(!1);
  S.useInsertionEffect(() => {
    m && y.current && m.update(n, h);
  });
  const g = n[bo],
    b = S.useRef(
      !!g &&
        typeof window < "u" &&
        !window.MotionHandoffIsComplete?.(g) &&
        window.MotionHasOptimisedAnimation?.(g),
    );
  return (
    nn(() => {
      ((p.current = !0),
        m &&
          ((y.current = !0),
          (window.MotionIsMounted = !0),
          m.updateFeatures(),
          m.scheduleRenderMicrotask(),
          b.current && m.animationState && m.animationState.animateChanges()));
    }),
    S.useEffect(() => {
      m &&
        (!b.current && m.animationState && m.animationState.animateChanges(),
        b.current &&
          (queueMicrotask(() => {
            window.MotionHandoffMarkAsComplete?.(g);
          }),
          (b.current = !1)),
        (m.enteringChildren = void 0));
    }),
    m
  );
}
function Af(t, e, n, s) {
  const {
    layoutId: i,
    layout: o,
    drag: r,
    dragConstraints: l,
    layoutScroll: h,
    layoutRoot: c,
    layoutAnchor: u,
    layoutCrossfade: a,
  } = e;
  ((t.projection = new n(t.latestValues, e["data-framer-portal-id"] ? void 0 : ma(t.parent))),
    t.projection.setOptions({
      layoutId: i,
      layout: o,
      alwaysMeasureLayout: !!r || (l && Jt(l)),
      visualElement: t,
      animationType: typeof o == "string" ? o : "both",
      initialPromotionConfig: s,
      crossfade: a,
      layoutScroll: h,
      layoutRoot: c,
      layoutAnchor: u,
    }));
}
function ma(t) {
  if (t) return t.options.allowProjection !== !1 ? t.projection : ma(t.parent);
}
function Mn(t, { forwardMotionProps: e = !1, type: n } = {}, s, i) {
  s && af(s);
  const o = n ? n === "svg" : Bs(t),
    r = o ? Tf : wf;
  function l(c, u) {
    let a;
    const f = { ...S.useContext(dn), ...c, layoutId: Cf(c) },
      { isStatic: p } = f,
      m = hf(c),
      x = r(c, p);
    if (!p && typeof window < "u") {
      kf();
      const y = Mf(f);
      ((a = y.MeasureLayout), (m.visualElement = Pf(t, x, f, i, y.ProjectionNode, o)));
    }
    return d.jsxs(hn.Provider, {
      value: m,
      children: [
        a && m.visualElement ? d.jsx(a, { visualElement: m.visualElement, ...f }) : null,
        xf(t, c, jf(x, m.visualElement, u), x, p, e, o),
      ],
    });
  }
  l.displayName = `motion.${typeof t == "string" ? t : `create(${t.displayName ?? t.name ?? ""})`}`;
  const h = S.forwardRef(l);
  return ((h[Sf] = t), h);
}
function Cf({ layoutId: t }) {
  const e = S.useContext(cs).id;
  return e && t !== void 0 ? e + "-" + t : t;
}
function kf(t, e) {
  S.useContext(aa).strict;
}
function Mf(t) {
  const e = la(),
    { drag: n, layout: s } = e;
  if (!n && !s) return {};
  const i = { ...n, ...s };
  return {
    MeasureLayout: n?.isEnabled(t) || s?.isEnabled(t) ? i.MeasureLayout : void 0,
    ProjectionNode: i.ProjectionNode,
  };
}
function Ef(t, e) {
  if (typeof Proxy > "u") return Mn;
  const n = new Map(),
    s = (o, r) => Mn(o, r, t, e),
    i = (o, r) => s(o, r);
  return new Proxy(i, {
    get: (o, r) => (r === "create" ? s : (n.has(r) || n.set(r, Mn(r, void 0, t, e)), n.get(r))),
  });
}
const Nf = (t, e) =>
  (e.isSVG ?? Bs(t)) ? new Go(e) : new Ho(e, { allowProjection: t !== S.Fragment });
class Vf extends $t {
  constructor(e) {
    (super(e), e.animationState || (e.animationState = dh(e)));
  }
  updateAnimationControlsSubscription() {
    const { animate: e } = this.node.getProps();
    cn(e) && (this.unmountControls = e.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: e } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    e !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    (this.node.animationState.reset(), this.unmountControls?.());
  }
}
let Df = 0;
class Rf extends $t {
  constructor() {
    (super(...arguments), (this.id = Df++), (this.isExitComplete = !1));
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: e, onExitComplete: n } = this.node.presenceContext,
      { isPresent: s } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || e === s) return;
    if (e && s === !1) {
      if (this.isExitComplete) {
        const { initial: o, custom: r } = this.node.getProps();
        if (typeof o == "string" || (typeof o == "object" && o !== null && !Array.isArray(o))) {
          const l = qt(this.node, o, r);
          if (l) {
            const { transition: h, transitionEnd: c, ...u } = l;
            for (const a in u) this.node.getValue(a)?.jump(u[a]);
          }
        }
        (this.node.animationState.reset(), this.node.animationState.animateChanges());
      } else this.node.animationState.setActive("exit", !1);
      this.isExitComplete = !1;
      return;
    }
    const i = this.node.animationState.setActive("exit", !e);
    n &&
      !e &&
      i.then(() => {
        ((this.isExitComplete = !0), n(this.id));
      });
  }
  mount() {
    const { register: e, onExitComplete: n } = this.node.presenceContext || {};
    (n && n(this.id), e && (this.unmount = e(this.id)));
  }
  unmount() {}
}
const Lf = { animation: { Feature: Vf }, exit: { Feature: Rf } };
function ke(t) {
  return { point: { x: t.pageX, y: t.pageY } };
}
const Bf = (t) => (e) => Es(e) && t(e, ke(e));
function ye(t, e, n, s) {
  return Te(t, e, Bf(n), s);
}
const pa = ({ current: t }) => (t ? t.ownerDocument.defaultView : null),
  rr = (t, e) => Math.abs(t - e);
function If(t, e) {
  const n = rr(t.x, e.x),
    s = rr(t.y, e.y);
  return Math.sqrt(n ** 2 + s ** 2);
}
const or = new Set(["auto", "scroll"]);
class ga {
  constructor(
    e,
    n,
    {
      transformPagePoint: s,
      contextWindow: i = window,
      dragSnapToOrigin: o = !1,
      distanceThreshold: r = 3,
      element: l,
    } = {},
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.lastRawMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.scrollPositions = new Map()),
      (this.removeScrollListeners = null),
      (this.onElementScroll = (m) => {
        this.handleScroll(m.target);
      }),
      (this.onWindowScroll = () => {
        this.handleScroll(window);
      }),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        this.lastRawMoveEventInfo &&
          (this.lastMoveEventInfo = Re(this.lastRawMoveEventInfo, this.transformPagePoint));
        const m = En(this.lastMoveEventInfo, this.history),
          x = this.startEvent !== null,
          y = If(m.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
        if (!x && !y) return;
        const { point: g } = m,
          { timestamp: b } = nt;
        this.history.push({ ...g, timestamp: b });
        const { onStart: v, onMove: w } = this.handlers;
        (x || (v && v(this.lastMoveEvent, m), (this.startEvent = this.lastMoveEvent)),
          w && w(this.lastMoveEvent, m));
      }),
      (this.handlePointerMove = (m, x) => {
        ((this.lastMoveEvent = m),
          (this.lastRawMoveEventInfo = x),
          (this.lastMoveEventInfo = Re(x, this.transformPagePoint)),
          _.update(this.updatePoint, !0));
      }),
      (this.handlePointerUp = (m, x) => {
        this.end();
        const { onEnd: y, onSessionEnd: g, resumeAnimation: b } = this.handlers;
        if (
          ((this.dragSnapToOrigin || !this.startEvent) && b && b(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const v = En(
          m.type === "pointercancel" ? this.lastMoveEventInfo : Re(x, this.transformPagePoint),
          this.history,
        );
        (this.startEvent && y && y(m, v), g && g(m, v));
      }),
      !Es(e))
    )
      return;
    ((this.dragSnapToOrigin = o),
      (this.handlers = n),
      (this.transformPagePoint = s),
      (this.distanceThreshold = r),
      (this.contextWindow = i || window));
    const h = ke(e),
      c = Re(h, this.transformPagePoint),
      { point: u } = c,
      { timestamp: a } = nt;
    this.history = [{ ...u, timestamp: a }];
    const { onSessionStart: f } = n;
    f && f(e, En(c, this.history));
    const p = { passive: !0, capture: !0 };
    ((this.removeListeners = Pe(
      ye(this.contextWindow, "pointermove", this.handlePointerMove, p),
      ye(this.contextWindow, "pointerup", this.handlePointerUp, p),
      ye(this.contextWindow, "pointercancel", this.handlePointerUp, p),
    )),
      l && this.startScrollTracking(l));
  }
  startScrollTracking(e) {
    let n = e.parentElement;
    for (; n;) {
      const s = getComputedStyle(n);
      ((or.has(s.overflowX) || or.has(s.overflowY)) &&
        this.scrollPositions.set(n, { x: n.scrollLeft, y: n.scrollTop }),
        (n = n.parentElement));
    }
    (this.scrollPositions.set(window, { x: window.scrollX, y: window.scrollY }),
      window.addEventListener("scroll", this.onElementScroll, { capture: !0 }),
      window.addEventListener("scroll", this.onWindowScroll),
      (this.removeScrollListeners = () => {
        (window.removeEventListener("scroll", this.onElementScroll, { capture: !0 }),
          window.removeEventListener("scroll", this.onWindowScroll));
      }));
  }
  handleScroll(e) {
    const n = this.scrollPositions.get(e);
    if (!n) return;
    const s = e === window,
      i = s ? { x: window.scrollX, y: window.scrollY } : { x: e.scrollLeft, y: e.scrollTop },
      o = { x: i.x - n.x, y: i.y - n.y };
    (o.x === 0 && o.y === 0) ||
      (s
        ? this.lastMoveEventInfo &&
          ((this.lastMoveEventInfo.point.x += o.x), (this.lastMoveEventInfo.point.y += o.y))
        : this.history.length > 0 && ((this.history[0].x -= o.x), (this.history[0].y -= o.y)),
      this.scrollPositions.set(e, i),
      _.update(this.updatePoint, !0));
  }
  updateHandlers(e) {
    this.handlers = e;
  }
  end() {
    (this.removeListeners && this.removeListeners(),
      this.removeScrollListeners && this.removeScrollListeners(),
      this.scrollPositions.clear(),
      Rt(this.updatePoint));
  }
}
function Re(t, e) {
  return e ? { point: e(t.point) } : t;
}
function ar(t, e) {
  return { x: t.x - e.x, y: t.y - e.y };
}
function En({ point: t }, e) {
  return { point: t, delta: ar(t, ya(e)), offset: ar(t, Ff(e)), velocity: Of(e, 0.1) };
}
function Ff(t) {
  return t[0];
}
function ya(t) {
  return t[t.length - 1];
}
function Of(t, e) {
  if (t.length < 2) return { x: 0, y: 0 };
  let n = t.length - 1,
    s = null;
  const i = ya(t);
  for (; n >= 0 && ((s = t[n]), !(i.timestamp - s.timestamp > ft(e)));) n--;
  if (!s) return { x: 0, y: 0 };
  s === t[0] && t.length > 2 && i.timestamp - s.timestamp > ft(e) * 2 && (s = t[1]);
  const o = gt(i.timestamp - s.timestamp);
  if (o === 0) return { x: 0, y: 0 };
  const r = { x: (i.x - s.x) / o, y: (i.y - s.y) / o };
  return (r.x === 1 / 0 && (r.x = 0), r.y === 1 / 0 && (r.y = 0), r);
}
function _f(t, { min: e, max: n }, s) {
  return (
    e !== void 0 && t < e
      ? (t = s ? O(e, t, s.min) : Math.max(t, e))
      : n !== void 0 && t > n && (t = s ? O(n, t, s.max) : Math.min(t, n)),
    t
  );
}
function lr(t, e, n) {
  return {
    min: e !== void 0 ? t.min + e : void 0,
    max: n !== void 0 ? t.max + n - (t.max - t.min) : void 0,
  };
}
function $f(t, { top: e, left: n, bottom: s, right: i }) {
  return { x: lr(t.x, n, i), y: lr(t.y, e, s) };
}
function cr(t, e) {
  let n = e.min - t.min,
    s = e.max - t.max;
  return (e.max - e.min < t.max - t.min && ([n, s] = [s, n]), { min: n, max: s });
}
function Hf(t, e) {
  return { x: cr(t.x, e.x), y: cr(t.y, e.y) };
}
function Wf(t, e) {
  let n = 0.5;
  const s = lt(t),
    i = lt(e);
  return (
    i > s ? (n = ie(e.min, e.max - s, t.min)) : s > i && (n = ie(t.min, t.max - i, e.min)),
    Mt(0, 1, n)
  );
}
function zf(t, e) {
  const n = {};
  return (
    e.min !== void 0 && (n.min = e.min - t.min),
    e.max !== void 0 && (n.max = e.max - t.min),
    n
  );
}
const ss = 0.35;
function Uf(t = ss) {
  return (
    t === !1 ? (t = 0) : t === !0 && (t = ss),
    { x: ur(t, "left", "right"), y: ur(t, "top", "bottom") }
  );
}
function ur(t, e, n) {
  return { min: dr(t, e), max: dr(t, n) };
}
function dr(t, e) {
  return typeof t == "number" ? t : t[e] || 0;
}
const Kf = new WeakMap();
class Gf {
  constructor(e) {
    ((this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = q()),
      (this.latestPointerEvent = null),
      (this.latestPanInfo = null),
      (this.visualElement = e));
  }
  start(e, { snapToCursor: n = !1, distanceThreshold: s } = {}) {
    const { presenceContext: i } = this.visualElement;
    if (i && i.isPresent === !1) return;
    const o = (a) => {
        (n && this.snapToCursor(ke(a).point), this.stopAnimation());
      },
      r = (a, f) => {
        const { drag: p, dragPropagation: m, onDragStart: x } = this.getProps();
        if (
          p &&
          !m &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = wd(p)),
          !this.openDragLock)
        )
          return;
        ((this.latestPointerEvent = a),
          (this.latestPanInfo = f),
          (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          At((g) => {
            let b = this.getAxisMotionValue(g).get() || 0;
            if (kt.test(b)) {
              const { projection: v } = this.visualElement;
              if (v && v.layout) {
                const w = v.layout.layoutBox[g];
                w && (b = lt(w) * (parseFloat(b) / 100));
              }
            }
            this.originPoint[g] = b;
          }),
          x && _.update(() => x(a, f), !1, !0),
          Gn(this.visualElement, "transform"));
        const { animationState: y } = this.visualElement;
        y && y.setActive("whileDrag", !0);
      },
      l = (a, f) => {
        ((this.latestPointerEvent = a), (this.latestPanInfo = f));
        const {
          dragPropagation: p,
          dragDirectionLock: m,
          onDirectionLock: x,
          onDrag: y,
        } = this.getProps();
        if (!p && !this.openDragLock) return;
        const { offset: g } = f;
        if (m && this.currentDirection === null) {
          ((this.currentDirection = Yf(g)),
            this.currentDirection !== null && x && x(this.currentDirection));
          return;
        }
        (this.updateAxis("x", f.point, g),
          this.updateAxis("y", f.point, g),
          this.visualElement.render(),
          y && _.update(() => y(a, f), !1, !0));
      },
      h = (a, f) => {
        ((this.latestPointerEvent = a),
          (this.latestPanInfo = f),
          this.stop(a, f),
          (this.latestPointerEvent = null),
          (this.latestPanInfo = null));
      },
      c = () => {
        const { dragSnapToOrigin: a } = this.getProps();
        (a || this.constraints) && this.startAnimation({ x: 0, y: 0 });
      },
      { dragSnapToOrigin: u } = this.getProps();
    this.panSession = new ga(
      e,
      { onSessionStart: o, onStart: r, onMove: l, onSessionEnd: h, resumeAnimation: c },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: u,
        distanceThreshold: s,
        contextWindow: pa(this.visualElement),
        element: this.visualElement.current,
      },
    );
  }
  stop(e, n) {
    const s = e || this.latestPointerEvent,
      i = n || this.latestPanInfo,
      o = this.isDragging;
    if ((this.cancel(), !o || !i || !s)) return;
    const { velocity: r } = i;
    this.startAnimation(r);
    const { onDragEnd: l } = this.getProps();
    l && _.postRender(() => l(s, i));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: e, animationState: n } = this.visualElement;
    (e && (e.isAnimationBlocked = !1), this.endPanSession());
    const { dragPropagation: s } = this.getProps();
    (!s && this.openDragLock && (this.openDragLock(), (this.openDragLock = null)),
      n && n.setActive("whileDrag", !1));
  }
  endPanSession() {
    (this.panSession && this.panSession.end(), (this.panSession = void 0));
  }
  updateAxis(e, n, s) {
    const { drag: i } = this.getProps();
    if (!s || !Le(e, i, this.currentDirection)) return;
    const o = this.getAxisMotionValue(e);
    let r = this.originPoint[e] + s[e];
    (this.constraints && this.constraints[e] && (r = _f(r, this.constraints[e], this.elastic[e])),
      o.set(r));
  }
  resolveConstraints() {
    const { dragConstraints: e, dragElastic: n } = this.getProps(),
      s =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : this.visualElement.projection?.layout,
      i = this.constraints;
    (e && Jt(e)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : e && s
        ? (this.constraints = $f(s.layoutBox, e))
        : (this.constraints = !1),
      (this.elastic = Uf(n)),
      i !== this.constraints &&
        !Jt(e) &&
        s &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        At((o) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(o) &&
            (this.constraints[o] = zf(s.layoutBox[o], this.constraints[o]));
        }));
  }
  resolveRefConstraints() {
    const { dragConstraints: e, onMeasureDragConstraints: n } = this.getProps();
    if (!e || !Jt(e)) return !1;
    const s = e.current,
      { projection: i } = this.visualElement;
    if (!i || !i.layout) return !1;
    i.root && ((i.root.scroll = void 0), i.root.updateScroll());
    const o = qd(s, i.root, this.visualElement.getTransformPagePoint());
    let r = Hf(i.layout.layoutBox, o);
    if (n) {
      const l = n(Ud(r));
      ((this.hasMutatedConstraints = !!l), l && (r = Bo(l)));
    }
    return r;
  }
  startAnimation(e) {
    const {
        drag: n,
        dragMomentum: s,
        dragElastic: i,
        dragTransition: o,
        dragSnapToOrigin: r,
        onDragTransitionEnd: l,
      } = this.getProps(),
      h = this.constraints || {},
      c = At((u) => {
        if (!Le(u, n, this.currentDirection)) return;
        let a = (h && h[u]) || {};
        (r === !0 || r === u) && (a = { min: 0, max: 0 });
        const f = i ? 200 : 1e6,
          p = i ? 40 : 1e7,
          m = {
            type: "inertia",
            velocity: s ? e[u] : 0,
            bounceStiffness: f,
            bounceDamping: p,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...o,
            ...a,
          };
        return this.startAxisValueAnimation(u, m);
      });
    return Promise.all(c).then(l);
  }
  startAxisValueAnimation(e, n) {
    const s = this.getAxisMotionValue(e);
    return (Gn(this.visualElement, e), s.start(js(e, s, 0, n, this.visualElement, !1)));
  }
  stopAnimation() {
    At((e) => this.getAxisMotionValue(e).stop());
  }
  getAxisMotionValue(e) {
    const n = `_drag${e.toUpperCase()}`,
      i = this.visualElement.getProps()[n];
    return i || this.visualElement.getValue(e, this.visualElement.latestValues[e] ?? 0);
  }
  snapToCursor(e) {
    At((n) => {
      const { drag: s } = this.getProps();
      if (!Le(n, s, this.currentDirection)) return;
      const { projection: i } = this.visualElement,
        o = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: r, max: l } = i.layout.layoutBox[n],
          h = o.get() || 0;
        o.set(e[n] - O(r, l, 0.5) + h);
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: e, dragConstraints: n } = this.getProps(),
      { projection: s } = this.visualElement;
    if (!Jt(n) || !s || !this.constraints) return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    At((r) => {
      const l = this.getAxisMotionValue(r);
      if (l && this.constraints !== !1) {
        const h = l.get();
        i[r] = Wf({ min: h, max: h }, this.constraints[r]);
      }
    });
    const { transformTemplate: o } = this.visualElement.getProps();
    ((this.visualElement.current.style.transform = o ? o({}, "") : "none"),
      s.root && s.root.updateScroll(),
      s.updateLayout(),
      (this.constraints = !1),
      this.resolveConstraints(),
      At((r) => {
        if (!Le(r, e, null)) return;
        const l = this.getAxisMotionValue(r),
          { min: h, max: c } = this.constraints[r];
        l.set(O(h, c, i[r]));
      }),
      this.visualElement.render());
  }
  addListeners() {
    if (!this.visualElement.current) return;
    Kf.set(this.visualElement, this);
    const e = this.visualElement.current,
      n = ye(e, "pointerdown", (c) => {
        const { drag: u, dragListener: a = !0 } = this.getProps(),
          f = c.target,
          p = f !== e && Cd(f);
        u && a && !p && this.start(c);
      });
    let s;
    const i = () => {
        const { dragConstraints: c } = this.getProps();
        Jt(c) &&
          c.current &&
          ((this.constraints = this.resolveRefConstraints()),
          s || (s = qf(e, c.current, () => this.scalePositionWithinConstraints())));
      },
      { projection: o } = this.visualElement,
      r = o.addEventListener("measure", i);
    (o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()), _.read(i));
    const l = Te(window, "resize", () => this.scalePositionWithinConstraints()),
      h = o.addEventListener("didUpdate", ({ delta: c, hasLayoutChanged: u }) => {
        this.isDragging &&
          u &&
          (At((a) => {
            const f = this.getAxisMotionValue(a);
            f && ((this.originPoint[a] += c[a].translate), f.set(f.get() + c[a].translate));
          }),
          this.visualElement.render());
      });
    return () => {
      (l(), n(), r(), h && h(), s && s());
    };
  }
  getProps() {
    const e = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: s = !1,
        dragPropagation: i = !1,
        dragConstraints: o = !1,
        dragElastic: r = ss,
        dragMomentum: l = !0,
      } = e;
    return {
      ...e,
      drag: n,
      dragDirectionLock: s,
      dragPropagation: i,
      dragConstraints: o,
      dragElastic: r,
      dragMomentum: l,
    };
  }
}
function hr(t) {
  let e = !0;
  return () => {
    if (e) {
      e = !1;
      return;
    }
    t();
  };
}
function qf(t, e, n) {
  const s = vi(t, hr(n)),
    i = vi(e, hr(n));
  return () => {
    (s(), i());
  };
}
function Le(t, e, n) {
  return (e === !0 || e === t) && (n === null || n === t);
}
function Yf(t, e = 10) {
  let n = null;
  return (Math.abs(t.y) > e ? (n = "y") : Math.abs(t.x) > e && (n = "x"), n);
}
class Xf extends $t {
  constructor(e) {
    (super(e),
      (this.removeGroupControls = yt),
      (this.removeListeners = yt),
      (this.controls = new Gf(e)));
  }
  mount() {
    const { dragControls: e } = this.node.getProps();
    (e && (this.removeGroupControls = e.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || yt));
  }
  update() {
    const { dragControls: e } = this.node.getProps(),
      { dragControls: n } = this.node.prevProps || {};
    e !== n &&
      (this.removeGroupControls(), e && (this.removeGroupControls = e.subscribe(this.controls)));
  }
  unmount() {
    (this.removeGroupControls(),
      this.removeListeners(),
      this.controls.isDragging || this.controls.endPanSession());
  }
}
const Nn = (t) => (e, n) => {
  t && _.update(() => t(e, n), !1, !0);
};
class Zf extends $t {
  constructor() {
    (super(...arguments), (this.removePointerDownListener = yt));
  }
  onPointerDown(e) {
    this.session = new ga(e, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: pa(this.node),
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: e, onPanStart: n, onPan: s, onPanEnd: i } = this.node.getProps();
    return {
      onSessionStart: Nn(e),
      onStart: Nn(n),
      onMove: Nn(s),
      onEnd: (o, r) => {
        (delete this.session, i && _.postRender(() => i(o, r)));
      },
    };
  }
  mount() {
    this.removePointerDownListener = ye(this.node.current, "pointerdown", (e) =>
      this.onPointerDown(e),
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    (this.removePointerDownListener(), this.session && this.session.end());
  }
}
let Vn = !1;
class Qf extends S.Component {
  componentDidMount() {
    const { visualElement: e, layoutGroup: n, switchLayoutGroup: s, layoutId: i } = this.props,
      { projection: o } = e;
    (o &&
      (n.group && n.group.add(o),
      s && s.register && i && s.register(o),
      Vn && o.root.didUpdate(),
      o.addEventListener("animationComplete", () => {
        this.safeToRemove();
      }),
      o.setOptions({
        ...o.options,
        layoutDependency: this.props.layoutDependency,
        onExitComplete: () => this.safeToRemove(),
      })),
      (Ue.hasEverUpdated = !0));
  }
  getSnapshotBeforeUpdate(e) {
    const { layoutDependency: n, visualElement: s, drag: i, isPresent: o } = this.props,
      { projection: r } = s;
    return (
      r &&
        ((r.isPresent = o),
        e.layoutDependency !== n && r.setOptions({ ...r.options, layoutDependency: n }),
        (Vn = !0),
        i || e.layoutDependency !== n || n === void 0 || e.isPresent !== o
          ? r.willUpdate()
          : this.safeToRemove(),
        e.isPresent !== o &&
          (o
            ? r.promote()
            : r.relegate() ||
              _.postRender(() => {
                const l = r.getStack();
                (!l || !l.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { visualElement: e, layoutAnchor: n } = this.props,
      { projection: s } = e;
    s &&
      ((s.options.layoutAnchor = n),
      s.root.didUpdate(),
      Ms.postRender(() => {
        !s.currentAnimation && s.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const { visualElement: e, layoutGroup: n, switchLayoutGroup: s } = this.props,
      { projection: i } = e;
    ((Vn = !0),
      i &&
        (i.scheduleCheckAfterUnmount(),
        n && n.group && n.group.remove(i),
        s && s.deregister && s.deregister(i)));
  }
  safeToRemove() {
    const { safeToRemove: e } = this.props;
    e && e();
  }
  render() {
    return null;
  }
}
function xa(t) {
  const [e, n] = oa(),
    s = S.useContext(cs);
  return d.jsx(Qf, {
    ...t,
    layoutGroup: s,
    switchLayoutGroup: S.useContext(fa),
    isPresent: e,
    safeToRemove: n,
  });
}
const Jf = { pan: { Feature: Zf }, drag: { Feature: Xf, ProjectionNode: ra, MeasureLayout: xa } };
function fr(t, e, n) {
  const { props: s } = t;
  t.animationState && s.whileHover && t.animationState.setActive("whileHover", n === "Start");
  const i = "onHover" + n,
    o = s[i];
  o && _.postRender(() => o(e, ke(e)));
}
class tm extends $t {
  mount() {
    const { current: e } = this.node;
    e &&
      (this.unmount = Sd(e, (n, s) => (fr(this.node, s, "Start"), (i) => fr(this.node, i, "End"))));
  }
  unmount() {}
}
class em extends $t {
  constructor() {
    (super(...arguments), (this.isActive = !1));
  }
  onFocus() {
    let e = !1;
    try {
      e = this.node.current.matches(":focus-visible");
    } catch {
      e = !0;
    }
    !e ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0), (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1), (this.isActive = !1));
  }
  mount() {
    this.unmount = Pe(
      Te(this.node.current, "focus", () => this.onFocus()),
      Te(this.node.current, "blur", () => this.onBlur()),
    );
  }
  unmount() {}
}
function mr(t, e, n) {
  const { props: s } = t;
  if (t.current instanceof HTMLButtonElement && t.current.disabled) return;
  t.animationState && s.whileTap && t.animationState.setActive("whileTap", n === "Start");
  const i = "onTap" + (n === "End" ? "" : n),
    o = s[i];
  o && _.postRender(() => o(e, ke(e)));
}
class nm extends $t {
  mount() {
    const { current: e } = this.node;
    if (!e) return;
    const { globalTapTarget: n, propagate: s } = this.node.props;
    this.unmount = Md(
      e,
      (i, o) => (
        mr(this.node, o, "Start"),
        (r, { success: l }) => mr(this.node, r, l ? "End" : "Cancel")
      ),
      { useGlobalTarget: n, stopPropagation: s?.tap === !1 },
    );
  }
  unmount() {}
}
const is = new WeakMap(),
  Dn = new WeakMap(),
  sm = (t) => {
    const e = is.get(t.target);
    e && e(t);
  },
  im = (t) => {
    t.forEach(sm);
  };
function rm({ root: t, ...e }) {
  const n = t || document;
  Dn.has(n) || Dn.set(n, {});
  const s = Dn.get(n),
    i = JSON.stringify(e);
  return (s[i] || (s[i] = new IntersectionObserver(im, { root: t, ...e })), s[i]);
}
function om(t, e, n) {
  const s = rm(e);
  return (
    is.set(t, n),
    s.observe(t),
    () => {
      (is.delete(t), s.unobserve(t));
    }
  );
}
const am = { some: 0, all: 1 };
class lm extends $t {
  constructor() {
    (super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1));
  }
  startObserver() {
    this.stopObserver?.();
    const { viewport: e = {} } = this.node.getProps(),
      { root: n, margin: s, amount: i = "some", once: o } = e,
      r = {
        root: n ? n.current : void 0,
        rootMargin: s,
        threshold: typeof i == "number" ? i : am[i],
      },
      l = (h) => {
        const { isIntersecting: c } = h;
        if (this.isInView === c || ((this.isInView = c), o && !c && this.hasEnteredView)) return;
        (c && (this.hasEnteredView = !0),
          this.node.animationState && this.node.animationState.setActive("whileInView", c));
        const { onViewportEnter: u, onViewportLeave: a } = this.node.getProps(),
          f = c ? u : a;
        f && f(h);
      };
    this.stopObserver = om(this.node.current, r, l);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: e, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(cm(e, n)) && this.startObserver();
  }
  unmount() {
    (this.stopObserver?.(), (this.hasEnteredView = !1), (this.isInView = !1));
  }
}
function cm({ viewport: t = {} }, { viewport: e = {} } = {}) {
  return (n) => t[n] !== e[n];
}
const um = {
    inView: { Feature: lm },
    tap: { Feature: nm },
    focus: { Feature: em },
    hover: { Feature: tm },
  },
  dm = { layout: { ProjectionNode: ra, MeasureLayout: xa } },
  hm = { ...Lf, ...um, ...Jf, ...dm },
  fm = Ef(hm, Nf);
function va(t) {
  const e = je(() => _t(t)),
    { isStatic: n } = S.useContext(dn);
  if (n) {
    const [, s] = S.useState(t);
    S.useEffect(() => e.on("change", s), []);
  }
  return e;
}
function ba(t, e) {
  const n = va(e()),
    s = () => n.set(e());
  return (
    s(),
    nn(() => {
      const i = () => _.preRender(s, !1, !0),
        o = t.map((r) => r.on("change", i));
      return () => {
        (o.forEach((r) => r()), Rt(s));
      };
    }),
    n
  );
}
function mm(t) {
  ((pe.current = []), t());
  const e = ba(pe.current, t);
  return ((pe.current = void 0), e);
}
function pm(t, e, n, s) {
  if (typeof t == "function") return mm(t);
  const o = typeof e == "function" ? e : Fd(e, n, s),
    r = Array.isArray(t) ? pr(t, o) : pr([t], ([h]) => o(h)),
    l = Array.isArray(t) ? void 0 : t.accelerate;
  return (
    l &&
      !l.isTransformed &&
      typeof e != "function" &&
      Array.isArray(n) &&
      s?.clamp !== !1 &&
      (r.accelerate = { ...l, times: e, keyframes: n, isTransformed: !0 }),
    r
  );
}
function pr(t, e) {
  const n = je(() => []);
  return ba(t, () => {
    n.length = 0;
    const s = t.length;
    for (let i = 0; i < s; i++) n[i] = t[i].get();
    return e(n);
  });
}
function Is(t) {
  return typeof t == "object" && !Array.isArray(t);
}
function wa(t, e, n, s) {
  return t == null
    ? []
    : typeof t == "string" && Is(e)
      ? an(t, n, s)
      : t instanceof NodeList
        ? Array.from(t)
        : Array.isArray(t)
          ? t.filter((i) => i != null)
          : [t];
}
function gm(t, e, n) {
  return t * (e + 1) + n * e;
}
function gr(t, e, n, s) {
  return typeof e == "number"
    ? e
    : e.startsWith("-") || e.startsWith("+")
      ? Math.max(0, t + parseFloat(e))
      : e === "<"
        ? n
        : e.startsWith("<")
          ? Math.max(0, n + parseFloat(e.slice(1)))
          : (s.get(e) ?? t);
}
function ym(t, e, n) {
  for (let s = 0; s < t.length; s++) {
    const i = t[s];
    i.at > e && i.at < n && (se(t, i), s--);
  }
}
function xm(t, e, n, s, i, o) {
  ym(t, i, o);
  for (let r = 0; r < e.length; r++) t.push({ value: e[r], at: O(i, o, s[r]), easing: Hr(n, r) });
}
function vm(t, e, n = 0) {
  const s = e + 1 + e * n;
  for (let i = 0; i < t.length; i++) t[i] = t[i] / s;
}
function bm(t, e) {
  return t.at === e.at ? (t.value === null ? 1 : e.value === null ? -1 : 0) : t.at - e.at;
}
const wm = "easeInOut",
  Tm = 20;
function Sm(t, { defaultTransition: e = {}, ...n } = {}, s, i) {
  const o = e.duration || 0.3,
    r = new Map(),
    l = new Map(),
    h = {},
    c = new Map();
  let u = 0,
    a = 0,
    f = 0;
  for (let p = 0; p < t.length; p++) {
    const m = t[p];
    if (typeof m == "string") {
      c.set(m, a);
      continue;
    } else if (!Array.isArray(m)) {
      c.set(m.name, gr(a, m.at, u, c));
      continue;
    }
    let [x, y, g = {}] = m;
    g.at !== void 0 && (a = gr(a, g.at, u, c));
    let b = 0;
    const v = (w, k, E, M = 0, j = 0) => {
      const P = jm(w),
        {
          delay: C = 0,
          times: V = io(P),
          type: $ = e.type || "keyframes",
          repeat: G,
          repeatType: z,
          repeatDelay: Q = 0,
          ...R
        } = k;
      let { ease: U = e.ease || "easeOut", duration: D } = k;
      const B = typeof C == "function" ? C(M, j) : C,
        st = P.length,
        X = Ts($) ? $ : i?.[$ || "keyframes"];
      if (st <= 2 && X) {
        let I = 100;
        if (st === 2 && Cm(P)) {
          const ct = P[1] - P[0];
          I = Math.abs(ct);
        }
        const F = { ...e, ...R };
        D !== void 0 && (F.duration = ft(D));
        const tt = to(F, I, X);
        ((U = tt.ease), (D = tt.duration));
      }
      D ?? (D = o);
      const mt = a + B;
      V.length === 1 && V[0] === 0 && (V[1] = 1);
      const Et = V.length - P.length;
      if ((Et > 0 && so(V, Et), P.length === 1 && P.unshift(null), G && G < Tm)) {
        const I = D > 0 ? Q / D : 0;
        D = gm(D, G, Q);
        const F = [...P],
          tt = [...V];
        U = Array.isArray(U) ? [...U] : [U];
        const ct = [...U],
          H = z === "reverse" || z === "mirror";
        let Lt = F,
          Ht = ct;
        H &&
          ((Lt = [...F].reverse()),
          z === "reverse" &&
            (Ht = [...ct].reverse().map((ut) => (typeof ut == "function" ? hs(ut) : ut))));
        for (let ut = 0; ut < G; ut++) {
          const Bt = H && ut % 2 === 0,
            Yt = Bt ? Lt : F,
            fn = Bt ? Ht : ct,
            ce = (ut + 1) * (1 + I);
          (I > 0 && (P.push(P[P.length - 1]), V.push(ce), U.push("linear")), P.push(...Yt));
          for (let xt = 0; xt < Yt.length; xt++)
            (V.push(tt[xt] + ce), U.push(xt === 0 ? "linear" : Hr(fn, xt - 1)));
        }
        vm(V, G, I);
      }
      const L = mt + D;
      (xm(E, P, U, V, mt, L), (b = Math.max(B + D, b)), (f = Math.max(L, f)));
    };
    if (Z(x)) {
      const w = yr(x, l);
      v(y, g, xr("default", w));
    } else {
      const w = wa(x, y, s, h),
        k = w.length;
      for (let E = 0; E < k; E++) {
        ((y = y), (g = g));
        const M = w[E],
          j = yr(M, l);
        for (const P in y) v(y[P], Pm(g, P), xr(P, j), E, k);
      }
    }
    ((u = a), (a += b));
  }
  return (
    l.forEach((p, m) => {
      for (const x in p) {
        const y = p[x];
        y.sort(bm);
        const g = [],
          b = [],
          v = [];
        for (let M = 0; M < y.length; M++) {
          const { at: j, value: P, easing: C } = y[M];
          (g.push(P), b.push(ie(0, f, j)), v.push(C || "easeOut"));
        }
        (b[0] !== 0 && (b.unshift(0), g.unshift(g[0]), v.unshift(wm)),
          b[b.length - 1] !== 1 && (b.push(1), g.push(null)),
          r.has(m) || r.set(m, { keyframes: {}, transition: {} }));
        const w = r.get(m);
        w.keyframes[x] = g;
        const { type: k, ...E } = e;
        w.transition[x] = { ...E, duration: f, ease: v, times: b, ...n };
      }
    }),
    r
  );
}
function yr(t, e) {
  return (!e.has(t) && e.set(t, {}), e.get(t));
}
function xr(t, e) {
  return (e[t] || (e[t] = []), e[t]);
}
function jm(t) {
  return Array.isArray(t) ? t : [t];
}
function Pm(t, e) {
  return t && t[e] ? { ...t, ...t[e] } : { ...t };
}
const Am = (t) => typeof t == "number",
  Cm = (t) => t.every(Am);
function km(t) {
  const e = {
      presenceContext: null,
      props: {},
      visualState: {
        renderState: { transform: {}, transformOrigin: {}, style: {}, vars: {}, attrs: {} },
        latestValues: {},
      },
    },
    n = ln(t) && !Eo(t) ? new Go(e) : new Ho(e);
  (n.mount(t), be.set(t, n));
}
function Mm(t) {
  const e = {
      presenceContext: null,
      props: {},
      visualState: { renderState: { output: {} }, latestValues: {} },
    },
    n = new eh(e);
  (n.mount(t), be.set(t, n));
}
function Em(t, e) {
  return Z(t) || typeof t == "number" || (typeof t == "string" && !Is(e));
}
function Ta(t, e, n, s) {
  const i = [];
  if (Em(t, e)) i.push(ea(t, (Is(e) && e.default) || e, n && (n.default || n)));
  else {
    if (t == null) return i;
    const o = wa(t, e, s),
      r = o.length;
    for (let l = 0; l < r; l++) {
      const h = o[l],
        c = h instanceof Element ? km : Mm;
      be.has(h) || c(h);
      const u = be.get(h),
        a = { ...n };
      ("delay" in a && typeof a.delay == "function" && (a.delay = a.delay(l, r)),
        i.push(...Cs(u, { ...e, transition: a }, {})));
    }
  }
  return i;
}
function Nm(t, e, n) {
  const s = [],
    i = t.map((r) => {
      if (Array.isArray(r) && typeof r[0] == "function") {
        const l = r[0],
          h = _t(0);
        return (
          h.on("change", l),
          r.length === 1 ? [h, [0, 1]] : r.length === 2 ? [h, [0, 1], r[1]] : [h, r[1], r[2]]
        );
      }
      return r;
    });
  return (
    Sm(i, e, n, { spring: ve }).forEach(({ keyframes: r, transition: l }, h) => {
      s.push(...Ta(h, r, l));
    }),
    s
  );
}
function Vm(t) {
  return Array.isArray(t) && t.some(Array.isArray);
}
function Dm(t = {}) {
  const { scope: e, reduceMotion: n, skipAnimations: s } = t;
  function i(o, r, l) {
    let h = [],
      c;
    const u = {};
    if ((n !== void 0 && (u.reduceMotion = n), s !== void 0 && (u.skipAnimations = s), Vm(o))) {
      const { onComplete: f, ...p } = r || {};
      (typeof f == "function" && (c = f), (h = Nm(o, { ...u, ...p }, e)));
    } else {
      const { onComplete: f, ...p } = l || {};
      (typeof f == "function" && (c = f), (h = Ta(o, r, { ...u, ...p }, e)));
    }
    const a = new zu(h);
    return (
      c && a.finished.then(c),
      e &&
        (e.animations.push(a),
        a.finished.then(() => {
          se(e.animations, a);
        })),
      a
    );
  }
  return i;
}
const Rm = Dm(),
  Lm = { some: 0, all: 1 };
function Bm(t, e, { root: n, margin: s, amount: i = "some" } = {}) {
  const o = an(t),
    r = new WeakMap(),
    l = (c) => {
      c.forEach((u) => {
        const a = r.get(u.target);
        if (u.isIntersecting !== !!a)
          if (u.isIntersecting) {
            const f = e(u.target, u);
            typeof f == "function" ? r.set(u.target, f) : h.unobserve(u.target);
          } else typeof a == "function" && (a(u), r.delete(u.target));
      });
    },
    h = new IntersectionObserver(l, {
      root: n,
      rootMargin: s,
      threshold: typeof i == "number" ? i : Lm[i],
    });
  return (o.forEach((c) => h.observe(c)), () => h.disconnect());
}
function Im(t, { root: e, margin: n, amount: s, once: i = !1, initial: o = !1 } = {}) {
  const [r, l] = S.useState(o);
  return (
    S.useEffect(() => {
      if (!t.current || (i && r)) return;
      const h = () => (l(!0), i ? void 0 : () => l(!1)),
        c = { root: (e && e.current) || void 0, margin: n, amount: s };
      return Bm(t.current, h, c);
    }, [e, t, n, i, s]),
    r
  );
}
const rt = fm,
  Fm = "/assets/hero-bg-DVMqkC7y.jpg",
  Om = [
    { icon: Pr, label: "City discovery", value: "6 cities", note: "with online access nationwide" },
    { icon: Sr, label: "Review preview", value: "4.8 avg.", note: "across sample expert profiles" },
    { icon: as, label: "Trust layer", value: "Verified", note: "admin approval designed in" },
  ];
function _m() {
  return d.jsxs("section", {
    id: "top",
    className: "relative flex min-h-dvh items-center overflow-hidden text-white",
    children: [
      d.jsxs("div", {
        className: "absolute inset-0 -z-10",
        children: [
          d.jsx("img", {
            src: Fm,
            alt: "",
            "aria-hidden": "true",
            width: 1920,
            height: 1280,
            className: "h-full w-full object-cover",
          }),
          d.jsx("div", { className: "absolute inset-0 bg-[var(--navy-deep)]/70" }),
          d.jsx("div", { className: "absolute inset-0 bg-aurora opacity-65" }),
          d.jsx("div", {
            className:
              "absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-background",
          }),
        ],
      }),
      d.jsx("div", {
        className: "container relative mx-auto px-4 pb-24 pt-36 lg:px-8 lg:pb-32 lg:pt-44",
        children: d.jsxs("div", {
          className: "grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_300px] xl:gap-20",
          children: [
            d.jsxs("div", {
              className: "max-w-4xl",
              children: [
                d.jsxs(rt.div, {
                  initial: { opacity: 0, y: 16 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.5 },
                  className:
                    "inline-flex items-center gap-2 rounded-full glass-dark px-4 py-2 text-xs font-medium text-white/85",
                  children: [
                    d.jsx(os, { className: "h-3.5 w-3.5 text-gold" }),
                    " Built for private one-to-one guidance across India",
                  ],
                }),
                d.jsxs(rt.h1, {
                  initial: { opacity: 0, y: 24 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.65, delay: 0.08 },
                  className:
                    "mt-6 max-w-4xl font-display text-5xl font-bold leading-[0.98] tracking-tight text-balance sm:text-6xl lg:text-7xl xl:text-8xl",
                  children: [
                    "Find clarity with the ",
                    d.jsx("span", { className: "text-gradient-gold", children: "right expert" }),
                    " by your side.",
                  ],
                }),
                d.jsx(rt.p, {
                  initial: { opacity: 0, y: 16 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.6, delay: 0.2 },
                  className: "mt-7 max-w-2xl text-lg leading-relaxed text-white/75 lg:text-xl",
                  children:
                    "Discover consultants for career decisions, study abroad planning and mental wellness. Compare their approach, language, fee and availability before you book.",
                }),
                d.jsxs(rt.div, {
                  initial: { opacity: 0, y: 16 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.6, delay: 0.3 },
                  className: "mt-9 flex flex-wrap gap-3",
                  children: [
                    d.jsx(Ge, {
                      variant: "hero",
                      size: "xl",
                      asChild: !0,
                      children: d.jsxs(Dt, {
                        to: "/experts",
                        children: [d.jsx(Tr, { className: "h-5 w-5" }), " Find an expert"],
                      }),
                    }),
                    d.jsx(Ge, {
                      variant: "glass",
                      size: "xl",
                      asChild: !0,
                      children: d.jsxs(Dt, {
                        to: "/auth",
                        children: ["Log in or register ", d.jsx(Se, { className: "h-4 w-4" })],
                      }),
                    }),
                  ],
                }),
                d.jsxs(rt.div, {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  transition: { delay: 0.55 },
                  className: "mt-10 flex flex-wrap gap-x-7 gap-y-3 text-xs text-white/65",
                  children: [
                    d.jsxs("span", {
                      className: "flex items-center gap-2",
                      children: [
                        d.jsx(Gs, { className: "h-4 w-4 text-gold" }),
                        " Browse before registering",
                      ],
                    }),
                    d.jsxs("span", {
                      className: "flex items-center gap-2",
                      children: [
                        d.jsx(rs, { className: "h-4 w-4 text-gold" }),
                        " Credential verification designed in",
                      ],
                    }),
                    d.jsxs("span", {
                      className: "flex items-center gap-2",
                      children: [
                        d.jsx(Gs, { className: "h-4 w-4 text-gold" }),
                        " Fees shown in INR",
                      ],
                    }),
                  ],
                }),
                d.jsxs(rt.div, {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  transition: { delay: 0.7 },
                  className:
                    "mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-white/10 pt-5 text-[11px] uppercase tracking-[0.14em] text-white/45",
                  children: [
                    d.jsx("span", { className: "text-white/75", children: "Built for" }),
                    d.jsx("span", { children: "Students" }),
                    d.jsx("span", { children: "Professionals" }),
                    d.jsx("span", { children: "Families" }),
                    d.jsx("span", { children: "Consultants" }),
                  ],
                }),
              ],
            }),
            d.jsx("div", {
              className: "hidden space-y-4 lg:block",
              children: Om.map((t, e) =>
                d.jsx(
                  rt.div,
                  {
                    initial: { opacity: 0, x: 24 },
                    animate: { opacity: 1, x: 0 },
                    transition: { duration: 0.55, delay: 0.35 + e * 0.12 },
                    className: `rounded-2xl glass-dark p-4 shadow-elevated ${e === 1 ? "xl:-translate-x-10" : ""}`,
                    children: d.jsxs("div", {
                      className: "flex items-center gap-3",
                      children: [
                        d.jsx("span", {
                          className:
                            "flex h-11 w-11 items-center justify-center rounded-xl bg-gold/15 text-gold",
                          children: d.jsx(t.icon, { className: "h-5 w-5" }),
                        }),
                        d.jsxs("div", {
                          children: [
                            d.jsx("div", {
                              className:
                                "text-[10px] font-semibold uppercase tracking-[0.16em] text-white/45",
                              children: t.label,
                            }),
                            d.jsx("div", {
                              className: "mt-0.5 font-display text-lg font-bold",
                              children: t.value,
                            }),
                            d.jsx("div", {
                              className: "text-[11px] text-white/50",
                              children: t.note,
                            }),
                          ],
                        }),
                      ],
                    }),
                  },
                  t.label,
                ),
              ),
            }),
          ],
        }),
      }),
    ],
  });
}
const $m = [
  { value: 6, suffix: "", label: "Sample expert profiles" },
  { value: 6, suffix: "", label: "Indian cities represented" },
  { value: 3, suffix: "", label: "Consultation categories" },
  { value: 3, suffix: "", label: "Ways to consult" },
];
function Hm({ to: t, suffix: e }) {
  const n = S.useRef(null),
    s = Im(n, { once: !0, margin: "-50px" }),
    i = va(0),
    o = pm(i, (r) => Math.floor(r).toLocaleString("en-IN"));
  return (
    S.useEffect(() => (s ? Rm(i, t, { duration: 1.4, ease: "easeOut" }).stop : void 0), [s, t, i]),
    d.jsxs("span", {
      ref: n,
      className: "font-display text-5xl font-bold text-gradient-brand lg:text-6xl",
      children: [d.jsx(rt.span, { children: o }), e],
    })
  );
}
function Wm() {
  return d.jsx("section", {
    className: "relative border-y border-border bg-secondary/40 py-20 lg:py-28",
    children: d.jsxs("div", {
      className: "container mx-auto px-4 lg:px-8",
      children: [
        d.jsxs("div", {
          className: "mx-auto mb-14 max-w-2xl text-center",
          children: [
            d.jsxs("div", {
              className:
                "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary",
              children: [
                d.jsx("span", { className: "h-px w-8 bg-primary/40" }),
                " Marketplace preview",
                d.jsx("span", { className: "h-px w-8 bg-primary/40" }),
              ],
            }),
            d.jsx("h2", {
              className: "mt-4 font-display text-3xl font-bold tracking-tight lg:text-5xl",
              children: "A clearer way to find one-to-one guidance.",
            }),
            d.jsx("p", {
              className: "mt-4 text-muted-foreground",
              children:
                "The frontend already demonstrates the information and safeguards the live marketplace will expose before a client books.",
            }),
          ],
        }),
        d.jsx("div", {
          className: "grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-8",
          children: $m.map((t, e) =>
            d.jsxs(
              rt.div,
              {
                initial: { opacity: 0, y: 24 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: !0, margin: "-50px" },
                transition: { duration: 0.5, delay: e * 0.08 },
                className:
                  "rounded-3xl border border-border bg-card/75 p-5 text-center shadow-elevated backdrop-blur lg:p-7",
                children: [
                  d.jsx(Hm, { to: t.value, suffix: t.suffix }),
                  d.jsx("p", {
                    className: "mt-3 text-sm font-medium text-muted-foreground",
                    children: t.label,
                  }),
                ],
              },
              t.label,
            ),
          ),
        }),
        d.jsx("div", {
          className:
            "mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-muted-foreground",
          children: [
            { icon: Cr, label: "Browse before registering" },
            { icon: Pr, label: "City-based discovery" },
            { icon: ls, label: "Language and format filters" },
            { icon: as, label: "Post-session review design" },
          ].map((t) =>
            d.jsxs(
              "div",
              {
                className: "flex items-center gap-2 text-sm font-medium",
                children: [d.jsx(t.icon, { className: "h-5 w-5 text-primary" }), t.label],
              },
              t.label,
            ),
          ),
        }),
      ],
    }),
  });
}
const Be = [
    {
      icon: Ll,
      title: "Career & Education",
      description: "Career paths, course choices, transitions and practical next steps.",
      examples: ["Career direction", "College choices", "Professional transitions"],
      status: "Profiles available",
    },
    {
      icon: Fa,
      title: "Study Abroad",
      description: "Independent guidance on destinations, affordability and application readiness.",
      examples: ["Country shortlisting", "SOP and applications", "Scholarships"],
      status: "Profiles available",
    },
    {
      icon: Dl,
      title: "Mental Wellness",
      description: "Private conversations with appropriately qualified wellness professionals.",
      examples: ["Stress and anxiety", "Relationships", "Life transitions"],
      status: "Profiles available",
    },
    {
      icon: Ar,
      title: "Legal & Documentation",
      description:
        "Find verified legal professionals for general guidance and document-related needs.",
      examples: ["Contracts", "Consumer matters", "Documentation"],
      status: "Onboarding consultants",
    },
    {
      icon: Xl,
      title: "Finance & Tax",
      description:
        "Consult qualified professionals for personal finance, tax and compliance questions.",
      examples: ["Tax planning", "Personal finance", "Compliance"],
      status: "Onboarding consultants",
    },
    {
      icon: ac,
      title: "Business & Startup",
      description: "Practical one-to-one input for founders, small businesses and growing teams.",
      examples: ["Business planning", "Go-to-market", "Operations"],
      status: "Onboarding consultants",
    },
    {
      icon: $l,
      title: "Technology & Digital",
      description:
        "Expert guidance for technology choices, digital delivery and product decisions.",
      examples: ["Technology strategy", "Product guidance", "Digital transformation"],
      status: "Onboarding consultants",
    },
    {
      icon: Kl,
      title: "Health & Nutrition",
      description:
        "Connect with appropriately licensed professionals for general wellbeing guidance.",
      examples: ["Nutrition", "Lifestyle planning", "Preventive wellbeing"],
      status: "Onboarding consultants",
    },
    {
      icon: Oa,
      title: "Relationships & Family",
      description: "Structured support for communication, parenting and family transitions.",
      examples: ["Communication", "Parenting", "Family wellbeing"],
      status: "Onboarding consultants",
    },
    {
      icon: $a,
      title: "Real Estate & Property",
      description: "Specialist guidance for property research, documentation and decision support.",
      examples: ["Property evaluation", "Documentation", "Investment questions"],
      status: "Onboarding consultants",
    },
    {
      icon: ec,
      title: "Design & Creative",
      description:
        "Portfolio, creative-career and independent-practice guidance from experienced mentors.",
      examples: ["Portfolio review", "Creative careers", "Freelance practice"],
      status: "Onboarding consultants",
    },
    {
      icon: jr,
      title: "Leadership & Executive",
      description:
        "Confidential guidance for leadership decisions, communication and team effectiveness.",
      examples: ["Leadership clarity", "Executive presence", "Team decisions"],
      status: "Onboarding consultants",
    },
  ],
  vr = 3;
function zm() {
  const [t, e] = S.useState(0),
    [n, s] = S.useState(!1),
    [i, o] = S.useState(vr);
  S.useEffect(() => {
    const u = window.matchMedia("(min-width: 768px)"),
      a = () => {
        (o(u.matches ? vr : 1), e(0));
      };
    return (a(), u.addEventListener("change", a), () => u.removeEventListener("change", a));
  }, []);
  const r = Math.ceil(Be.length / i),
    l = Be.slice(t * i, t * i + i);
  S.useEffect(() => {
    if (n) return;
    const u = window.setInterval(() => {
      e((a) => (a + 1) % r);
    }, 4500);
    return () => window.clearInterval(u);
  }, [r, n]);
  const h = () => e((u) => (u - 1 + r) % r),
    c = () => e((u) => (u + 1) % r);
  return d.jsx("section", {
    id: "services",
    className: "relative overflow-hidden py-20 lg:py-28",
    onMouseEnter: () => s(!0),
    onMouseLeave: () => s(!1),
    onFocusCapture: () => s(!0),
    onBlurCapture: () => s(!1),
    children: d.jsxs("div", {
      className: "container mx-auto px-4 lg:px-8",
      children: [
        d.jsxs("div", {
          className: "flex flex-col justify-between gap-6 lg:flex-row lg:items-end",
          children: [
            d.jsxs("div", {
              className: "max-w-3xl",
              children: [
                d.jsx("div", {
                  className: "text-xs font-semibold uppercase tracking-[0.2em] text-primary",
                  children: "Consultation categories",
                }),
                d.jsx("h2", {
                  className: "mt-4 font-display text-4xl font-bold tracking-tight lg:text-5xl",
                  children: "Start with the decision you need help making.",
                }),
                d.jsx("p", {
                  className: "mt-4 max-w-2xl text-muted-foreground",
                  children:
                    "Explore a broader marketplace across personal, professional and specialist needs. Every category will use its own verification requirements and intake questions.",
                }),
              ],
            }),
            d.jsxs("div", {
              className: "flex items-center gap-2",
              children: [
                d.jsx("button", {
                  type: "button",
                  onClick: () => s((u) => !u),
                  "aria-label": n
                    ? "Resume automatic category slides"
                    : "Pause automatic category slides",
                  className:
                    "flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground",
                  children: n
                    ? d.jsx(rc, { className: "h-4 w-4" })
                    : d.jsx(sc, { className: "h-4 w-4" }),
                }),
                d.jsx("button", {
                  type: "button",
                  onClick: h,
                  "aria-label": "Previous consultation categories",
                  className:
                    "flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card hover:border-primary/40",
                  children: d.jsx(Ol, { className: "h-5 w-5" }),
                }),
                d.jsx("button", {
                  type: "button",
                  onClick: c,
                  "aria-label": "Next consultation categories",
                  className:
                    "flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-glow",
                  children: d.jsx(Ia, { className: "h-5 w-5" }),
                }),
              ],
            }),
          ],
        }),
        d.jsx("div", {
          className: "relative mt-12 min-h-[410px] md:min-h-[390px]",
          "aria-live": "polite",
          children: d.jsx(rf, {
            mode: "wait",
            initial: !1,
            children: d.jsx(
              rt.div,
              {
                initial: { opacity: 0, x: 48 },
                animate: { opacity: 1, x: 0 },
                exit: { opacity: 0, x: -48 },
                transition: { duration: 0.45, ease: "easeOut" },
                className: "absolute inset-x-0 top-0 grid gap-6 md:grid-cols-3",
                children: l.map((u) =>
                  d.jsxs(
                    "article",
                    {
                      className:
                        "group flex h-full flex-col rounded-3xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-primary/35 hover:shadow-glow",
                      children: [
                        d.jsxs("div", {
                          className: "flex items-start justify-between gap-3",
                          children: [
                            d.jsx("span", {
                              className:
                                "flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary",
                              children: d.jsx(u.icon, { className: "h-6 w-6" }),
                            }),
                            d.jsx("span", {
                              className: `rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-wider ${u.status === "Profiles available" ? "bg-primary/10 text-primary" : "bg-gold/12 text-foreground"}`,
                              children: u.status,
                            }),
                          ],
                        }),
                        d.jsx("h3", {
                          className: "mt-5 font-display text-2xl font-bold",
                          children: u.title,
                        }),
                        d.jsx("p", {
                          className: "mt-3 text-sm leading-relaxed text-muted-foreground",
                          children: u.description,
                        }),
                        d.jsx("ul", {
                          className: "mt-5 space-y-2 text-sm",
                          children: u.examples.map((a) =>
                            d.jsxs(
                              "li",
                              {
                                className: "flex items-center gap-2",
                                children: [
                                  d.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-gold" }),
                                  a,
                                ],
                              },
                              a,
                            ),
                          ),
                        }),
                        d.jsxs(Dt, {
                          to: "/experts",
                          className:
                            "mt-auto inline-flex items-center gap-2 pt-7 text-sm font-semibold text-primary",
                          children: ["Explore category ", d.jsx(Cl, { className: "h-4 w-4" })],
                        }),
                      ],
                    },
                    u.title,
                  ),
                ),
              },
              t,
            ),
          }),
        }),
        d.jsx("div", {
          className: "mt-5 flex items-center justify-center gap-2",
          "aria-label": "Category slide selection",
          children: Array.from({ length: r }).map((u, a) =>
            d.jsx(
              "button",
              {
                type: "button",
                onClick: () => e(a),
                "aria-label": `Show category slide ${a + 1}`,
                "aria-current": t === a ? "true" : void 0,
                className: `h-2.5 rounded-full transition-all ${t === a ? "w-9 bg-primary" : "w-2.5 bg-border hover:bg-primary/40"}`,
              },
              a,
            ),
          ),
        }),
        d.jsxs("p", {
          className: "mt-4 text-center text-xs text-muted-foreground",
          children: [
            "Showing ",
            t * i + 1,
            "–",
            Math.min((t + 1) * i, Be.length),
            " ",
            "of ",
            Be.length,
            " categories · Changes automatically every 4.5 seconds",
          ],
        }),
      ],
    }),
  });
}
const Um = [
  {
    feature: "Speciality, experience and approach",
    marketplace: "Visible",
    directory: "Often limited",
  },
  {
    feature: "City, language and consultation mode",
    marketplace: "Filterable",
    directory: "Manual search",
  },
  {
    feature: "Fee and session duration",
    marketplace: "Shown upfront",
    directory: "Ask separately",
  },
  { feature: "Credential-verification status", marketplace: "Designed in", directory: "Varies" },
  {
    feature: "Reviews tied to completed sessions",
    marketplace: "Designed in",
    directory: "May be anonymous",
  },
  {
    feature: "Booking, intake and follow-up",
    marketplace: "One account",
    directory: "Separate channels",
  },
];
function Km() {
  return d.jsxs("section", {
    className: "relative overflow-hidden bg-navy py-24 text-white lg:py-32",
    children: [
      d.jsx("div", { className: "absolute inset-0 bg-aurora opacity-45" }),
      d.jsxs("div", {
        className: "container relative mx-auto px-4 lg:px-8",
        children: [
          d.jsxs("div", {
            className: "mx-auto mb-14 max-w-3xl text-center",
            children: [
              d.jsxs("div", {
                className:
                  "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold",
                children: [
                  d.jsx("span", { className: "h-px w-8 bg-gold/40" }),
                  " Why this experience",
                ],
              }),
              d.jsxs("h2", {
                className:
                  "mt-4 font-display text-4xl font-bold tracking-tight text-balance lg:text-5xl",
                children: [
                  "Better decisions begin with",
                  " ",
                  d.jsx("span", {
                    className: "text-gradient-gold",
                    children: "better information.",
                  }),
                ],
              }),
              d.jsx("p", {
                className: "mx-auto mt-5 max-w-2xl text-white/65",
                children:
                  "TQGC is being designed as a consultation marketplace, not just a list of phone numbers.",
              }),
            ],
          }),
          d.jsx(rt.div, {
            initial: { opacity: 0, y: 24 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: !0 },
            transition: { duration: 0.6 },
            className: "mx-auto max-w-5xl overflow-hidden rounded-3xl glass-dark shadow-elevated",
            children: d.jsxs("div", {
              className: "grid grid-cols-[1.45fr_0.8fr_0.8fr] text-xs sm:text-sm",
              children: [
                d.jsx("div", {
                  className:
                    "p-4 text-xs font-medium uppercase tracking-wider text-white/60 sm:p-6",
                  children: "What clients need",
                }),
                d.jsx("div", {
                  className:
                    "border-l border-white/10 p-4 text-center font-display font-bold text-gold sm:p-6",
                  children: "TQGC",
                }),
                d.jsx("div", {
                  className:
                    "border-l border-white/10 p-4 text-center font-display font-semibold text-white/60 sm:p-6",
                  children: "Basic directory",
                }),
                Um.map((t, e) =>
                  d.jsxs(
                    "div",
                    {
                      className: "contents",
                      children: [
                        d.jsx("div", {
                          className: `border-t border-white/10 p-4 sm:p-6 ${e % 2 ? "bg-white/[0.02]" : ""}`,
                          children: t.feature,
                        }),
                        d.jsx("div", {
                          className: `border-l border-t border-white/10 p-4 text-center sm:p-6 ${e % 2 ? "bg-white/[0.02]" : ""}`,
                          children: d.jsxs("span", {
                            className: "inline-flex items-center gap-1.5 text-gold",
                            children: [
                              d.jsx(Wa, { className: "h-4 w-4" }),
                              d.jsx("span", {
                                className: "hidden sm:inline",
                                children: t.marketplace,
                              }),
                            ],
                          }),
                        }),
                        d.jsx("div", {
                          className: `border-l border-t border-white/10 p-4 text-center text-white/50 sm:p-6 ${e % 2 ? "bg-white/[0.02]" : ""}`,
                          children: d.jsxs("span", {
                            className: "inline-flex items-center gap-1.5",
                            children: [
                              d.jsx(za, { className: "h-4 w-4" }),
                              d.jsx("span", {
                                className: "hidden sm:inline",
                                children: t.directory,
                              }),
                            ],
                          }),
                        }),
                      ],
                    },
                    t.feature,
                  ),
                ),
              ],
            }),
          }),
        ],
      }),
    ],
  });
}
const Gm = [
  {
    icon: Tr,
    number: "01",
    title: "Describe what you need",
    description:
      "Choose a category or search by the concern, decision, language or format that matters to you.",
  },
  {
    icon: Ha,
    number: "02",
    title: "Compare expert profiles",
    description:
      "Review experience, approach, qualifications, fees, languages and available consultation modes.",
  },
  {
    icon: Il,
    number: "03",
    title: "Choose a private slot",
    description:
      "Log in with mobile OTP, share a short intake note and select an available time in IST.",
  },
  {
    icon: rs,
    number: "04",
    title: "Consult and follow up",
    description:
      "Join the session from your dashboard and keep confirmations, invoices and follow-ups together.",
  },
];
function qm() {
  return d.jsxs("section", {
    id: "how-it-works",
    className: "relative bg-navy py-20 text-white lg:py-28",
    children: [
      d.jsx("div", { className: "absolute inset-0 bg-aurora opacity-35" }),
      d.jsxs("div", {
        className: "container relative mx-auto px-4 lg:px-8",
        children: [
          d.jsxs("div", {
            className: "max-w-3xl",
            children: [
              d.jsx("div", {
                className: "text-xs font-semibold uppercase tracking-[0.2em] text-gold",
                children: "How it works",
              }),
              d.jsx("h2", {
                className: "mt-4 font-display text-4xl font-bold tracking-tight lg:text-5xl",
                children: "From uncertainty to a confirmed conversation.",
              }),
            ],
          }),
          d.jsx("div", {
            className: "mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4",
            children: Gm.map((t, e) =>
              d.jsxs(
                rt.article,
                {
                  initial: { opacity: 0, y: 18 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: !0 },
                  transition: { delay: e * 0.07 },
                  className: "rounded-3xl glass-dark p-6",
                  children: [
                    d.jsxs("div", {
                      className: "flex items-center justify-between",
                      children: [
                        d.jsx("span", {
                          className:
                            "flex h-11 w-11 items-center justify-center rounded-xl bg-gold/15 text-gold",
                          children: d.jsx(t.icon, { className: "h-5 w-5" }),
                        }),
                        d.jsx("span", {
                          className: "font-display text-2xl font-bold text-white/20",
                          children: t.number,
                        }),
                      ],
                    }),
                    d.jsx("h3", {
                      className: "mt-5 font-display text-xl font-semibold",
                      children: t.title,
                    }),
                    d.jsx("p", {
                      className: "mt-3 text-sm leading-relaxed text-white/60",
                      children: t.description,
                    }),
                  ],
                },
                t.title,
              ),
            ),
          }),
        ],
      }),
    ],
  });
}
const br = ["Bengaluru", "Hyderabad", "Jaipur", "Mumbai", "New Delhi", "Pune"];
function Ym() {
  const [t, e] = S.useState(br[0]),
    s = Ke.filter((i) => i.location === t)[0];
  return d.jsx("section", {
    id: "cities",
    className: "relative border-y border-border bg-secondary/40 py-24 lg:py-32",
    children: d.jsxs("div", {
      className: "container mx-auto px-4 lg:px-8",
      children: [
        d.jsxs("div", {
          className: "mx-auto mb-14 max-w-3xl text-center",
          children: [
            d.jsxs("div", {
              className:
                "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary",
              children: [
                d.jsx("span", { className: "h-px w-8 bg-primary/40" }),
                " Guidance across India",
              ],
            }),
            d.jsxs("h2", {
              className:
                "mt-4 font-display text-4xl font-bold tracking-tight text-balance lg:text-5xl",
              children: [
                "Local context. ",
                d.jsx("span", { className: "text-gradient-brand", children: "Nationwide access." }),
              ],
            }),
            d.jsx("p", {
              className: "mt-4 text-muted-foreground",
              children:
                "Browse by city for in-person availability, or meet by video from anywhere in India.",
            }),
          ],
        }),
        d.jsxs("div", {
          className: "grid items-start gap-8 lg:grid-cols-[1.25fr_0.9fr]",
          children: [
            d.jsx("div", {
              className: "grid grid-cols-2 gap-3 sm:grid-cols-3",
              children: br.map((i) => {
                const o = t === i,
                  r = Ke.find((l) => l.location === i);
                return d.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => e(i),
                    className: `group rounded-2xl border p-5 text-left transition-all ${o ? "-translate-y-1 border-primary bg-primary text-primary-foreground shadow-glow" : "border-border bg-card hover:-translate-y-0.5 hover:border-primary/40"}`,
                    children: [
                      d.jsx("span", {
                        className: `flex h-10 w-10 items-center justify-center rounded-xl ${o ? "bg-white/15" : "bg-primary/10 text-primary"}`,
                        children: d.jsx(qs, { className: "h-5 w-5" }),
                      }),
                      d.jsx("div", {
                        className: "mt-4 font-display text-lg font-semibold",
                        children: i,
                      }),
                      d.jsx("div", {
                        className: `mt-1 text-xs ${o ? "text-primary-foreground/75" : "text-muted-foreground"}`,
                        children: r?.category ?? "Online consultations",
                      }),
                    ],
                  },
                  i,
                );
              }),
            }),
            d.jsxs(
              rt.article,
              {
                initial: { opacity: 0, y: 12 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.3 },
                className: "rounded-3xl border border-border bg-card p-7 shadow-elevated",
                children: [
                  d.jsxs("div", {
                    className: "flex items-center gap-3",
                    children: [
                      d.jsx("span", {
                        className:
                          "flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/15 text-gold",
                        children: d.jsx(qs, { className: "h-6 w-6" }),
                      }),
                      d.jsxs("div", {
                        children: [
                          d.jsx("div", {
                            className: "text-xs uppercase tracking-wider text-muted-foreground",
                            children: "Featured city",
                          }),
                          d.jsx("h3", {
                            className: "font-display text-2xl font-bold",
                            children: t,
                          }),
                        ],
                      }),
                    ],
                  }),
                  s &&
                    d.jsxs("div", {
                      className: "mt-6",
                      children: [
                        d.jsx("div", {
                          className: "text-sm text-muted-foreground",
                          children: "Sample expert in this city",
                        }),
                        d.jsx("div", {
                          className: "mt-2 font-display text-xl font-semibold",
                          children: s.name,
                        }),
                        d.jsx("div", {
                          className: "mt-1 text-sm text-muted-foreground",
                          children: s.title,
                        }),
                        d.jsxs("dl", {
                          className: "mt-5 space-y-3 border-y border-border py-5 text-sm",
                          children: [
                            d.jsxs("div", {
                              className: "flex items-center justify-between gap-4",
                              children: [
                                d.jsxs("dt", {
                                  className: "flex items-center gap-2 text-muted-foreground",
                                  children: [d.jsx(ls, { className: "h-4 w-4" }), " Languages"],
                                }),
                                d.jsx("dd", {
                                  className: "text-right",
                                  children: s.languages.join(", "),
                                }),
                              ],
                            }),
                            d.jsxs("div", {
                              className: "flex items-center justify-between gap-4",
                              children: [
                                d.jsxs("dt", {
                                  className: "flex items-center gap-2 text-muted-foreground",
                                  children: [d.jsx(Jl, { className: "h-4 w-4" }), " Available by"],
                                }),
                                d.jsx("dd", {
                                  className: "text-right",
                                  children: s.modes.join(" · "),
                                }),
                              ],
                            }),
                          ],
                        }),
                        d.jsxs(Dt, {
                          to: "/experts",
                          className:
                            "mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary",
                          children: [
                            "Explore experts by city ",
                            d.jsx(Se, { className: "h-4 w-4" }),
                          ],
                        }),
                      ],
                    }),
                ],
              },
              t,
            ),
          ],
        }),
      ],
    }),
  });
}
function Xm() {
  return d.jsx("section", {
    id: "experts",
    className: "border-y border-border bg-secondary/40 py-20 lg:py-28",
    children: d.jsxs("div", {
      className: "container mx-auto px-4 lg:px-8",
      children: [
        d.jsxs("div", {
          className: "flex flex-col justify-between gap-6 lg:flex-row lg:items-end",
          children: [
            d.jsxs("div", {
              className: "max-w-3xl",
              children: [
                d.jsx("div", {
                  className: "text-xs font-semibold uppercase tracking-[0.2em] text-primary",
                  children: "Explore sample profiles",
                }),
                d.jsx("h2", {
                  className: "mt-4 font-display text-4xl font-bold tracking-tight lg:text-5xl",
                  children: "Choose based on fit, not a generic recommendation.",
                }),
                d.jsx("p", {
                  className: "mt-4 max-w-2xl text-muted-foreground",
                  children:
                    "The frontend shows the information every real profile should provide. Credentials and registrations will require admin verification before publication.",
                }),
              ],
            }),
            d.jsx(Ge, {
              variant: "outline",
              size: "lg",
              asChild: !0,
              children: d.jsxs(Dt, {
                to: "/experts",
                children: ["View all experts ", d.jsx(Se, { className: "h-4 w-4" })],
              }),
            }),
          ],
        }),
        d.jsx("div", {
          className: "mt-10 grid gap-6 lg:grid-cols-2 xl:grid-cols-3",
          children: Ke.map((t) => d.jsx(La, { expert: t }, t.id)),
        }),
      ],
    }),
  });
}
const Zm = [
  { icon: yc, title: "Anxiety Management", desc: "Cognitive tools to quiet the noise." },
  { icon: ql, title: "Stress Management", desc: "Regulate, restore, and rebuild balance." },
  { icon: pc, title: "Relationship Counseling", desc: "Repair, deepen, or reset what matters." },
  { icon: Ml, title: "Child Counseling", desc: "Safe space for big feelings, age 6–17." },
  { icon: fc, title: "Parenting Guidance", desc: "Modern parenting, grounded in research." },
  { icon: os, title: "Confidence Coaching", desc: "Voice, presence, and unshakable self-trust." },
  { icon: jr, title: "Executive Coaching", desc: "Leadership clarity for C-suite & founders." },
];
function Qm() {
  return d.jsxs("section", {
    id: "wellness",
    className: "relative py-24 lg:py-32 bg-navy text-white overflow-hidden",
    children: [
      d.jsx("div", { className: "absolute inset-0 bg-aurora opacity-50" }),
      d.jsx("div", {
        className: "container mx-auto px-4 lg:px-8 relative",
        children: d.jsxs("div", {
          className: "grid lg:grid-cols-[1fr_1.4fr] gap-12 items-start",
          children: [
            d.jsxs("div", {
              className: "lg:sticky lg:top-28",
              children: [
                d.jsxs("div", {
                  className:
                    "inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gold font-semibold",
                  children: [
                    d.jsx("span", { className: "h-px w-8 bg-gold/40" }),
                    " Mental Wellness",
                  ],
                }),
                d.jsxs("h2", {
                  className:
                    "mt-4 font-display text-4xl lg:text-5xl font-bold tracking-tight text-balance",
                  children: [
                    "Life is more than a job title.",
                    " ",
                    d.jsx("span", {
                      className: "text-gradient-gold",
                      children: "We tend to all of it.",
                    }),
                  ],
                }),
                d.jsx("p", {
                  className: "mt-5 text-white/70 leading-relaxed max-w-md",
                  children:
                    "Find professionals for private conversations about stress, relationships, confidence and life transitions. Qualifications and scope must be verified before publication.",
                }),
                d.jsx(Dt, {
                  to: "/experts",
                  className:
                    "mt-7 inline-flex rounded-full bg-gold px-5 py-3 text-sm font-semibold text-navy-deep",
                  children: "Browse wellness experts",
                }),
              ],
            }),
            d.jsx("div", {
              className: "grid sm:grid-cols-2 gap-4",
              children: Zm.map((t, e) =>
                d.jsxs(
                  rt.div,
                  {
                    initial: { opacity: 0, y: 20 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: !0, margin: "-40px" },
                    transition: { duration: 0.4, delay: (e % 2) * 0.06 },
                    className: "glass-dark rounded-2xl p-5 hover:bg-white/10 transition-colors",
                    children: [
                      d.jsx("span", {
                        className:
                          "inline-flex h-11 w-11 rounded-xl bg-gold/15 text-gold items-center justify-center",
                        children: d.jsx(t.icon, { className: "h-5 w-5" }),
                      }),
                      d.jsx("h3", {
                        className: "mt-4 font-display text-lg font-semibold",
                        children: t.title,
                      }),
                      d.jsx("p", { className: "mt-1 text-sm text-white/65", children: t.desc }),
                    ],
                  },
                  t.title,
                ),
              ),
            }),
          ],
        }),
      }),
    ],
  });
}
const Jm = Ke.flatMap((t) =>
  t.reviews.map((e) => ({ ...e, expertName: t.name, category: t.category })),
).slice(0, 6);
function tp() {
  return d.jsx("section", {
    id: "stories",
    className: "relative py-24 lg:py-32",
    children: d.jsxs("div", {
      className: "container mx-auto px-4 lg:px-8",
      children: [
        d.jsxs("div", {
          className: "mx-auto mb-14 max-w-3xl text-center",
          children: [
            d.jsxs("div", {
              className:
                "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary",
              children: [
                d.jsx("span", { className: "h-px w-8 bg-primary/40" }),
                " Review experience preview",
              ],
            }),
            d.jsxs("h2", {
              className: "mt-4 font-display text-4xl font-bold tracking-tight lg:text-5xl",
              children: [
                "Confidence grows when",
                " ",
                d.jsx("span", {
                  className: "text-gradient-brand",
                  children: "experiences are visible.",
                }),
              ],
            }),
            d.jsx("p", {
              className: "mx-auto mt-4 max-w-2xl text-muted-foreground",
              children:
                "These sample reviews demonstrate how feedback from completed bookings will appear once the backend verifies attendance.",
            }),
          ],
        }),
        d.jsx("div", {
          className: "grid gap-5 md:grid-cols-2 lg:grid-cols-3",
          children: Jm.map((t, e) =>
            d.jsxs(
              rt.figure,
              {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: !0, margin: "-40px" },
                transition: { duration: 0.4, delay: (e % 3) * 0.07 },
                className:
                  "rounded-3xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-glow",
                children: [
                  d.jsxs("div", {
                    className: "flex items-start justify-between gap-3",
                    children: [
                      d.jsx(Ua, { className: "h-7 w-7 text-primary/35" }),
                      d.jsx("div", {
                        className: "flex",
                        children: Array.from({ length: 5 }).map((n, s) =>
                          d.jsx(
                            Sr,
                            {
                              className: `h-3.5 w-3.5 ${s < t.rating ? "fill-gold text-gold" : "text-border"}`,
                            },
                            s,
                          ),
                        ),
                      }),
                    ],
                  }),
                  d.jsxs("blockquote", {
                    className: "mt-4 text-sm leading-relaxed",
                    children: ["“", t.text, "”"],
                  }),
                  d.jsx("figcaption", {
                    className: "mt-5 border-t border-border pt-4",
                    children: d.jsxs("div", {
                      className: "flex items-end justify-between gap-3",
                      children: [
                        d.jsxs("div", {
                          children: [
                            d.jsx("div", {
                              className: "text-sm font-semibold",
                              children: t.author,
                            }),
                            d.jsxs("div", {
                              className: "text-xs text-muted-foreground",
                              children: [t.city, " · with ", t.expertName],
                            }),
                          ],
                        }),
                        d.jsxs("span", {
                          className: "flex items-center gap-1 text-xs text-primary",
                          children: [d.jsx(as, { className: "h-4 w-4" }), " Sample"],
                        }),
                      ],
                    }),
                  }),
                ],
              },
              t.id,
            ),
          ),
        }),
        d.jsx("div", {
          className: "mt-8 text-center",
          children: d.jsx(Dt, {
            to: "/experts",
            className:
              "inline-flex rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold hover:border-primary/40",
            children: "Compare expert ratings and reviews",
          }),
        }),
      ],
    }),
  });
}
const wr = [
  {
    question: "I am unsure about my career direction",
    category: "Career & Education",
    answer:
      "Start with career consultants who cover decision frameworks, transitions and education pathways.",
  },
  {
    question: "I need help shortlisting countries",
    category: "Study Abroad",
    answer:
      "Compare study-abroad experts by destination experience, affordability approach and application support.",
  },
  {
    question: "Work stress is affecting my decisions",
    category: "Mental Wellness",
    answer:
      "Look for appropriately qualified wellness professionals and compare their approach, language and format.",
  },
];
function ep() {
  const [t, e] = S.useState(wr[0]);
  return d.jsx("section", {
    className: "relative py-24 lg:py-32",
    children: d.jsx("div", {
      className: "container mx-auto px-4 lg:px-8",
      children: d.jsxs("div", {
        className:
          "relative overflow-hidden rounded-[2rem] bg-navy p-8 text-white shadow-elevated lg:rounded-[2.5rem] lg:p-14",
        children: [
          d.jsx("div", { className: "absolute inset-0 bg-aurora opacity-60" }),
          d.jsxs("div", {
            className: "relative grid items-center gap-10 lg:grid-cols-2",
            children: [
              d.jsxs("div", {
                children: [
                  d.jsxs("div", {
                    className:
                      "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold",
                    children: [d.jsx(os, { className: "h-3.5 w-3.5" }), " Guided matching preview"],
                  }),
                  d.jsxs("h2", {
                    className:
                      "mt-4 font-display text-4xl font-bold tracking-tight text-balance lg:text-5xl",
                    children: [
                      "Not sure where to start?",
                      " ",
                      d.jsx("span", {
                        className: "text-gradient-gold",
                        children: "Narrow the choice.",
                      }),
                    ],
                  }),
                  d.jsx("p", {
                    className: "mt-5 max-w-md leading-relaxed text-white/70",
                    children:
                      "Choose the statement closest to your situation. This frontend helper suggests a category; it does not replace professional advice.",
                  }),
                  d.jsx("div", {
                    className: "mt-6 flex flex-wrap gap-2",
                    children: wr.map((n) =>
                      d.jsx(
                        "button",
                        {
                          type: "button",
                          onClick: () => e(n),
                          className: `rounded-full border px-3 py-2 text-xs transition-all ${t.question === n.question ? "border-gold bg-gold text-navy-deep" : "border-white/15 text-white/80 hover:bg-white/10"}`,
                          children: n.question,
                        },
                        n.question,
                      ),
                    ),
                  }),
                ],
              }),
              d.jsxs(
                rt.div,
                {
                  initial: { opacity: 0, y: 12 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.3 },
                  className: "rounded-3xl glass-dark p-5 shadow-elevated",
                  children: [
                    d.jsxs("div", {
                      className: "flex items-center gap-2 border-b border-white/10 pb-3",
                      children: [
                        d.jsx("span", { className: "h-2 w-2 animate-pulse rounded-full bg-gold" }),
                        d.jsx("span", {
                          className: "text-xs text-white/70",
                          children: "TQGC matching guide · Frontend preview",
                        }),
                      ],
                    }),
                    d.jsxs("div", {
                      className: "space-y-4 py-5",
                      children: [
                        d.jsx("div", {
                          className: "flex justify-end",
                          children: d.jsx("p", {
                            className:
                              "max-w-[85%] rounded-2xl rounded-tr-sm bg-primary/40 px-4 py-2.5 text-sm",
                            children: t.question,
                          }),
                        }),
                        d.jsxs("div", {
                          className: "flex items-start gap-2",
                          children: [
                            d.jsx("span", {
                              className:
                                "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold/20",
                              children: d.jsx(Nl, { className: "h-4 w-4 text-gold" }),
                            }),
                            d.jsxs("div", {
                              className:
                                "max-w-[88%] rounded-2xl rounded-tl-sm bg-white/10 px-4 py-3",
                              children: [
                                d.jsxs("div", {
                                  className:
                                    "text-xs font-semibold uppercase tracking-wider text-gold",
                                  children: ["Suggested category · ", t.category],
                                }),
                                d.jsx("p", {
                                  className: "mt-2 text-sm leading-relaxed text-white/90",
                                  children: t.answer,
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    d.jsxs(Dt, {
                      to: "/experts",
                      className:
                        "flex h-11 items-center justify-center gap-2 rounded-full bg-[var(--gradient-gold)] text-sm font-semibold text-navy-deep shadow-gold",
                      children: [
                        d.jsx(Cr, { className: "h-4 w-4" }),
                        " See matching experts",
                        " ",
                        d.jsx(Se, { className: "h-4 w-4" }),
                      ],
                    }),
                  ],
                },
                t.question,
              ),
            ],
          }),
        ],
      }),
    }),
  });
}
function np() {
  return d.jsx("section", {
    className: "py-20 lg:py-28",
    children: d.jsx("div", {
      className: "container mx-auto px-4 lg:px-8",
      children: d.jsx("div", {
        className: "overflow-hidden rounded-[2rem] bg-navy p-8 text-white shadow-elevated lg:p-14",
        children: d.jsxs("div", {
          className: "grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center",
          children: [
            d.jsxs("div", {
              children: [
                d.jsx("div", {
                  className: "text-xs font-semibold uppercase tracking-[0.2em] text-gold",
                  children: "Ready when you are",
                }),
                d.jsx("h2", {
                  className:
                    "mt-4 max-w-2xl font-display text-4xl font-bold tracking-tight lg:text-5xl",
                  children: "Book with information—not pressure.",
                }),
                d.jsx("p", {
                  className: "mt-5 max-w-xl leading-relaxed text-white/65",
                  children:
                    "See the fee, session length, language and next available slot before creating your account. Registration is required only when you are ready to reserve.",
                }),
                d.jsx(Ge, {
                  variant: "hero",
                  size: "xl",
                  asChild: !0,
                  className: "mt-8",
                  children: d.jsxs(Dt, {
                    to: "/experts",
                    children: ["Browse consultations ", d.jsx(Se, { className: "h-4 w-4" })],
                  }),
                }),
              ],
            }),
            d.jsx("div", {
              className: "grid gap-3 sm:grid-cols-2",
              children: [
                [Ka, "Real slot selection", "Dates and times displayed in IST"],
                [_a, "Transparent INR pricing", "Gateway checkout added with backend"],
                [ls, "Language preferences", "English, Hindi and regional options"],
                [rs, "Private account boundary", "Bookings and documents require login"],
              ].map(([t, e, n]) =>
                d.jsxs(
                  "div",
                  {
                    className: "rounded-2xl glass-dark p-5",
                    children: [
                      d.jsx(t, { className: "h-5 w-5 text-gold" }),
                      d.jsx("div", { className: "mt-3 text-sm font-semibold", children: e }),
                      d.jsx("div", {
                        className: "mt-1 text-xs leading-relaxed text-white/55",
                        children: n,
                      }),
                    ],
                  },
                  e,
                ),
              ),
            }),
          ],
        }),
      }),
    }),
  });
}
function sp() {
  return d.jsx("section", {
    id: "contact",
    className: "border-t border-border bg-secondary/35 py-16 lg:py-20",
    children: d.jsx("div", {
      className: "container mx-auto px-4 lg:px-8",
      children: d.jsxs("div", {
        className: "grid gap-10 lg:grid-cols-[0.9fr_1.1fr]",
        children: [
          d.jsxs("div", {
            children: [
              d.jsx("div", {
                className: "text-xs font-semibold uppercase tracking-[0.2em] text-primary",
                children: "Support and safety",
              }),
              d.jsx("h2", {
                className: "mt-4 font-display text-4xl font-bold tracking-tight",
                children: "A consultation platform needs visible safeguards.",
              }),
              d.jsx("p", {
                className: "mt-4 leading-relaxed text-muted-foreground",
                children:
                  "These support channels are represented in the frontend now. Real contact details, response targets and escalation owners must be assigned before launch.",
              }),
            ],
          }),
          d.jsx("div", {
            className: "grid gap-4 sm:grid-cols-2",
            children: [
              [zl, "General support", "Bookings, rescheduling and account access"],
              [Ar, "Grievance redressal", "Complaints, refunds and professional conduct"],
              [Ga, "Privacy requests", "Access, correction and deletion requests"],
              [dc, "Emergency notice", "The platform is not an emergency or crisis service"],
            ].map(([t, e, n]) =>
              d.jsxs(
                "div",
                {
                  className: "rounded-2xl border border-border bg-card p-5",
                  children: [
                    d.jsx(t, { className: "h-5 w-5 text-primary" }),
                    d.jsx("h3", {
                      className: "mt-3 font-display text-lg font-semibold",
                      children: e,
                    }),
                    d.jsx("p", {
                      className: "mt-2 text-sm leading-relaxed text-muted-foreground",
                      children: n,
                    }),
                  ],
                },
                e,
              ),
            ),
          }),
        ],
      }),
    }),
  });
}
function Pp() {
  return d.jsxs(d.Fragment, {
    children: [
      d.jsx(xc, {}),
      d.jsxs("main", {
        children: [
          d.jsx(_m, {}),
          d.jsx(Wm, {}),
          d.jsx(zm, {}),
          d.jsx(Km, {}),
          d.jsx(Xm, {}),
          d.jsx(qm, {}),
          d.jsx(Ym, {}),
          d.jsx(Qm, {}),
          d.jsx(tp, {}),
          d.jsx(ep, {}),
          d.jsx(np, {}),
          d.jsx(sp, {}),
        ],
      }),
      d.jsx(Ba, {}),
      d.jsx(Pl, { position: "top-center", richColors: !0 }),
    ],
  });
}
export { Pp as component };
