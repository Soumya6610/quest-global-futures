import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { B as Button } from "./ProductHeader-BK9LMNZM.mjs";
import { f as formatInr } from "./router-DLi9eCG6.mjs";
import { Z as Clock3, u as MapPin, L as Languages, _ as Video, c as Star, B as BadgeCheck } from "../_libs/lucide-react.mjs";
function ExpertCard({ expert }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group overflow-hidden rounded-3xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-primary/35 hover:shadow-glow", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[16/10] overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: expert.image,
          alt: expert.name,
          width: 720,
          height: 450,
          className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-transparent to-transparent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-4 top-4 rounded-full border border-white/15 bg-navy-deep/75 px-3 py-1 text-xs font-medium text-white backdrop-blur", children: "Sample profile" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-4 left-4 right-4 text-white", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-gold", children: expert.category }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-1 font-display text-xl font-semibold", children: expert.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-white/75", children: expert.title })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3 text-xs text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Clock3, { className: "h-3.5 w-3.5 text-primary" }),
          " ",
          expert.experience,
          " years"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3.5 w-3.5 text-primary" }),
          " ",
          expert.location
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Languages, { className: "h-3.5 w-3.5 text-primary" }),
          " ",
          expert.languages.slice(0, 2).join(", ")
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Video, { className: "h-3.5 w-3.5 text-primary" }),
          " ",
          expert.modes.join(" · ")
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center justify-between rounded-2xl bg-gold/10 px-4 py-3 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5 font-semibold", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-4 w-4 fill-gold text-gold" }),
          " ",
          expert.rating,
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-normal text-muted-foreground", children: [
            "(",
            expert.reviewCount,
            " reviews)"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 text-xs text-primary", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(BadgeCheck, { className: "h-4 w-4" }),
          " Verified sessions"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 flex flex-wrap gap-2", children: expert.specialties.slice(0, 3).map((specialty) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "span",
        {
          className: "rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground",
          children: specialty
        },
        specialty
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex items-end justify-between gap-4 border-t border-border pt-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "From" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display text-lg font-bold", children: [
            formatInr(expert.price),
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-normal text-muted-foreground", children: [
              "/ ",
              expert.duration,
              " min"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "brand", size: "lg", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/experts/$expertId", params: { expertId: expert.id }, children: "View profile" }) })
      ] })
    ] })
  ] });
}
export {
  ExpertCard as E
};
