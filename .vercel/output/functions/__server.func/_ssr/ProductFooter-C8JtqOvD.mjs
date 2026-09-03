import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { K as Compass, b as ShieldCheck, A as ArrowRight } from "../_libs/lucide-react.mjs";
const footerGroups = [
  {
    title: "Consultations",
    links: [
      { label: "Career & education", to: "/experts" },
      { label: "Study abroad", to: "/experts" },
      { label: "Mental wellness", to: "/experts" },
      { label: "Browse by city", to: "/experts" }
    ]
  },
  {
    title: "Platform",
    links: [
      { label: "How it works", to: "/#how-it-works" },
      { label: "Client login", to: "/auth" },
      { label: "Client dashboard", to: "/dashboard" },
      { label: "Consultant registration", to: "/consultant/apply" }
    ]
  }
];
function ProductFooter() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "relative overflow-hidden bg-navy-deep pb-9 pt-16 text-white", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-aurora opacity-25" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container relative mx-auto px-4 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-10 lg:grid-cols-[1.25fr_repeat(2,0.75fr)_1fr]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--gradient-gold)] shadow-gold", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Compass, { className: "h-5 w-5 text-navy-deep" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-xl font-bold", children: "TQGC" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 max-w-sm text-sm leading-relaxed text-white/60", children: "Private one-to-one guidance from professionals across India. Compare expertise, language, city, fees, formats and reviews before you book." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/65", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-4 w-4 text-gold" }),
            " Frontend marketplace preview"
          ] })
        ] }),
        footerGroups.map((group) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold uppercase tracking-[0.2em] text-gold", children: group.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-5 space-y-3", children: group.links.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: item.to,
              className: "text-sm text-white/65 transition-colors hover:text-white",
              children: item.label
            }
          ) }, item.label)) })
        ] }, group.title)),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-white/10 bg-white/5 p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold uppercase tracking-[0.2em] text-gold", children: "For consultants" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-xl font-bold", children: "Bring your expertise to TQGC." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm leading-relaxed text-white/60", children: "Apply with your city, services, pricing and credentials. Public profiles require administrator approval." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/consultant/apply",
              className: "mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white",
              children: [
                "Register as a consultant ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 text-gold" })
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-14 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/45 sm:flex-row sm:items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          "© ",
          (/* @__PURE__ */ new Date()).getFullYear(),
          " The Quest Guidance Center. All rights reserved."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Privacy, terms, credential rules and grievance policy to be finalized before launch." })
      ] })
    ] })
  ] });
}
export {
  ProductFooter as P
};
