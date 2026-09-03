import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { E as ExpertCard } from "./ExpertCard-DmCJi4Lw.mjs";
import { P as ProductFooter } from "./ProductFooter-C8JtqOvD.mjs";
import { P as ProductHeader } from "./ProductHeader-BK9LMNZM.mjs";
import { e as experts, a as consultationCities, b as consultationCategories } from "./router-DLi9eCG6.mjs";
import { S as Sparkles, ab as SlidersHorizontal, a as Search, u as MapPin, ac as UserRoundPlus } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__query-core.mjs";
function ExpertsPage() {
  const [query, setQuery] = reactExports.useState("");
  const [category, setCategory] = reactExports.useState("All");
  const [language, setLanguage] = reactExports.useState("All languages");
  const [mode, setMode] = reactExports.useState("All modes");
  const [city, setCity] = reactExports.useState("All cities");
  const filtered = reactExports.useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return experts.filter((expert) => {
      const searchable = [expert.name, expert.title, expert.category, expert.location, ...expert.languages, ...expert.specialties].join(" ").toLowerCase();
      return (!normalized || searchable.includes(normalized)) && (category === "All" || expert.category === category) && (city === "All cities" || expert.location === city) && (language === "All languages" || expert.languages.includes(language)) && (mode === "All modes" || expert.modes.includes(mode));
    });
  }, [category, city, language, mode, query]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ProductHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden border-b border-border bg-navy py-16 text-white", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-aurora opacity-50" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container relative mx-auto px-4 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/75", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5 text-gold" }),
            " India-first consultation marketplace"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-5 font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl", children: "Find the right expert for your next decision." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 max-w-2xl text-lg leading-relaxed text-white/70", children: "Compare specialties, languages, formats, fees and availability before booking a private one-to-one consultation." })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container mx-auto px-4 py-10 lg:px-8 lg:py-14", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-border bg-card p-5 shadow-elevated lg:p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm font-semibold", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SlidersHorizontal, { className: "h-4 w-4 text-primary" }),
            " Find your match"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-[1.5fr_repeat(3,1fr)]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Search experts" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: query, onChange: (event) => setQuery(event.target.value), placeholder: "Search by concern, expert or speciality", className: "h-12 w-full rounded-xl border border-border bg-background pl-11 pr-4 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/15" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("select", { "aria-label": "City", value: city, onChange: (event) => setCity(event.target.value), className: "h-12 rounded-xl border border-border bg-background px-4 text-sm outline-none focus:border-primary", children: consultationCities.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: item }, item)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("select", { "aria-label": "Language", value: language, onChange: (event) => setLanguage(event.target.value), className: "h-12 rounded-xl border border-border bg-background px-4 text-sm outline-none focus:border-primary", children: ["All languages", "English", "Hindi", "Malayalam", "Marathi"].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: item }, item)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("select", { "aria-label": "Consultation mode", value: mode, onChange: (event) => setMode(event.target.value), className: "h-12 rounded-xl border border-border bg-background px-4 text-sm outline-none focus:border-primary", children: ["All modes", "Video", "Chat", "In-person"].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: item }, item)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex flex-wrap gap-2", children: consultationCategories.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setCategory(item), className: `rounded-full border px-4 py-2 text-sm transition-colors ${category === item ? "border-primary bg-primary text-primary-foreground" : "border-border bg-background hover:border-primary/40"}`, children: item }, item)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex flex-wrap items-center gap-2 border-t border-border pt-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mr-1 flex items-center gap-1.5 text-xs font-semibold text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3.5 w-3.5" }),
              " Browse by city"
            ] }),
            consultationCities.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setCity(item), className: `rounded-full px-3 py-1.5 text-xs ${city === item ? "bg-gold text-navy-deep font-semibold" : "bg-muted text-muted-foreground hover:text-foreground"}`, children: item }, item))
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-9 flex items-center justify-between gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold", children: "Available consultants" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-sm text-muted-foreground", children: [
              filtered.length,
              " sample ",
              filtered.length === 1 ? "profile" : "profiles",
              " match your filters"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden rounded-full bg-gold/15 px-4 py-2 text-xs font-medium text-foreground sm:block", children: "Frontend preview data" })
        ] }),
        filtered.length ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 grid gap-6 lg:grid-cols-2 xl:grid-cols-3", children: filtered.map((expert) => /* @__PURE__ */ jsxRuntimeExports.jsx(ExpertCard, { expert }, expert.id)) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 rounded-3xl border border-dashed border-border py-20 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-semibold", children: "No exact matches yet" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Try removing one of the filters or searching for a broader concern." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 flex flex-col items-start justify-between gap-5 rounded-3xl bg-navy p-7 text-white sm:flex-row sm:items-center lg:p-9", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-gold", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(UserRoundPlus, { className: "h-4 w-4" }),
              " For professionals"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-2xl font-bold", children: "Want to offer consultations?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 max-w-2xl text-sm text-white/65", children: "Apply with your city, expertise, pricing and credentials. Profiles become bookable only after administrator verification." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/consultant/apply", className: "inline-flex h-12 shrink-0 items-center justify-center rounded-xl bg-gold px-5 text-sm font-semibold text-navy-deep", children: "Register as a consultant" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ProductFooter, {})
  ] });
}
export {
  ExpertsPage as component
};
