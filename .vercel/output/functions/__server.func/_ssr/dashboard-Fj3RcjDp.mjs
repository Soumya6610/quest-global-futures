import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { a as subscribeToPlatformStore, P as ProductHeader, B as Button, d as getConsultantApplication } from "./ProductHeader-BK9LMNZM.mjs";
import { f as formatInr } from "./router-DLi9eCG6.mjs";
import { U as UsersRound, a6 as Settings, E as CalendarDays, b as ShieldCheck, a0 as MessageSquareText, c as Star, I as IndianRupee, aa as ChartColumn, u as MapPin, Z as Clock3, B as BadgeCheck, C as CircleCheck, g as ChevronRight } from "../_libs/lucide-react.mjs";
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
const cityDemand = [{
  city: "Bengaluru",
  enquiries: 128,
  width: "100%"
}, {
  city: "Mumbai",
  enquiries: 104,
  width: "81%"
}, {
  city: "New Delhi",
  enquiries: 96,
  width: "75%"
}, {
  city: "Hyderabad",
  enquiries: 79,
  width: "62%"
}, {
  city: "Pune",
  enquiries: 68,
  width: "53%"
}];
function ConsultantDashboardPage() {
  const [application, setApplication] = reactExports.useState(null);
  reactExports.useEffect(() => {
    const refresh = () => setApplication(getConsultantApplication());
    refresh();
    return subscribeToPlatformStore(refresh);
  }, []);
  if (!application) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-secondary/35", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ProductHeader, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "container mx-auto flex min-h-[calc(100vh-80px)] items-center justify-center px-4 py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-lg rounded-3xl border border-border bg-card p-8 text-center shadow-elevated", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(UsersRound, { className: "mx-auto h-12 w-12 text-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-5 font-display text-3xl font-bold", children: "Create your consultant profile first" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm leading-relaxed text-muted-foreground", children: "Submit your expertise, city, pricing and credential information before opening the consultant dashboard." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "hero", size: "xl", asChild: true, className: "mt-7 w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/consultant/apply", children: "Register as a consultant" }) })
      ] }) })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-secondary/35", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ProductHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "container mx-auto px-4 py-8 lg:px-8 lg:py-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col justify-between gap-5 lg:flex-row lg:items-end", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-gold/15 px-3 py-1 text-xs font-semibold text-foreground", children: application.status }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
              "Application ",
              application.id
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-3 font-display text-4xl font-bold tracking-tight", children: [
            "Welcome, ",
            application.name
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Manage your practice profile, availability, city reach and client experience." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", size: "lg", disabled: true, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Settings, { className: "h-4 w-4" }),
            " Edit profile"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "brand", size: "lg", disabled: true, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { className: "h-4 w-4" }),
            " Add availability"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-7 flex gap-3 rounded-2xl border border-gold/25 bg-gold/10 p-4 text-sm leading-relaxed", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "mt-0.5 h-5 w-5 shrink-0 text-gold" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Your profile is not public yet." }),
          " Admin approval will require identity, qualification and professional-registration checks. Scheduling and earnings are preview data until the backend is connected."
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4", children: [[CalendarDays, "Upcoming sessions", "0", "Available after approval"], [MessageSquareText, "New enquiries", "0", "Client messaging later"], [Star, "Average rating", "—", "After completed sessions"], [IndianRupee, "Preview earnings", formatInr(0), "Secure payout setup later"]].map(([Icon, label, value, detail]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "rounded-3xl border border-border bg-card p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 text-xs text-muted-foreground", children: label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 font-display text-2xl font-bold", children: value }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-xs text-muted-foreground", children: detail })
      ] }, label)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 grid gap-8 xl:grid-cols-[1.2fr_0.8fr]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-3xl border border-border bg-card p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ChartColumn, { className: "h-5 w-5 text-primary" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-xl font-bold", children: "Demand by city" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Illustrative marketplace enquiries across major Indian cities." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground", children: "Last 30 days" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 space-y-4", children: cityDemand.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-2 flex items-center justify-between text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-4 w-4 text-primary" }),
                  item.city
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: item.enquiries })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 overflow-hidden rounded-full bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full rounded-full bg-[var(--gradient-gold)]", style: {
                width: item.width
              } }) })
            ] }, item.city)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 rounded-2xl bg-primary/8 p-4 text-sm", children: [
              "Your primary city is ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: application.city }),
              ". Video consultations can remain discoverable across all supported cities."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-3xl border border-border bg-card p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-xl font-bold", children: "Schedule" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "IST timezone" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 rounded-2xl border border-dashed border-border px-5 py-10 text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock3, { className: "mx-auto h-9 w-9 text-muted-foreground" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 font-display text-lg font-semibold", children: "No availability published" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-2 max-w-md text-sm text-muted-foreground", children: "After approval, add recurring hours, breaks and in-person locations from this dashboard." })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-3xl border border-border bg-card p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(BadgeCheck, { className: "h-5 w-5 text-primary" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-xl font-bold", children: "Profile readiness" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 h-2 overflow-hidden rounded-full bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full w-3/5 rounded-full bg-primary" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-right text-xs text-muted-foreground", children: "60% complete" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 space-y-3 text-sm", children: [[true, "Contact and practice information"], [true, "City, languages and pricing"], [false, "Government identity verification"], [false, "Qualification document review"], [false, "Bank and tax information"]].map(([done, label]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: `h-4 w-4 ${done ? "text-primary" : "text-muted-foreground/40"}` }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: done ? "" : "text-muted-foreground", children: label })
            ] }, label)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-3xl bg-navy p-6 text-white", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.16em] text-gold", children: "Profile preview" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-2xl font-bold", children: application.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-white/65", children: application.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 space-y-2 text-sm text-white/75", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: application.category }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                application.experience,
                " years · ",
                application.city
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: application.languages.join(", ") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: application.modes.join(" · ") }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-2 font-semibold text-gold", children: [
                formatInr(application.fee),
                " per session"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", disabled: true, className: "mt-5 inline-flex items-center text-sm font-semibold text-white/45", children: [
              "Public preview after approval ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-4 w-4" })
            ] })
          ] })
        ] })
      ] })
    ] })
  ] });
}
export {
  ConsultantDashboardPage as component
};
