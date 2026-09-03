import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { u as usePlatformUser, a as subscribeToPlatformStore, P as ProductHeader, B as Button, g as getFrontendBookings } from "./ProductHeader-BK9LMNZM.mjs";
import { f as formatInr } from "./router-DUENwKpS.mjs";
import { a0 as UserRound, a1 as Plus, b as ShieldCheck, r as CalendarDays, V as Clock3, Y as Video, f as ChevronRight, _ as MessageSquareText, a2 as FileText, a3 as ReceiptIndianRupee, a4 as Settings } from "../_libs/lucide-react.mjs";
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
function DashboardPage() {
  const {
    user,
    ready
  } = usePlatformUser();
  const [bookings, setBookings] = reactExports.useState([]);
  reactExports.useEffect(() => {
    const refresh = () => setBookings(getFrontendBookings());
    refresh();
    return subscribeToPlatformStore(refresh);
  }, []);
  if (!ready) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ProductHeader, {}) });
  if (!user) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-secondary/35", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ProductHeader, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "container mx-auto flex min-h-[calc(100vh-80px)] items-center justify-center px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md rounded-3xl border border-border bg-card p-8 text-center shadow-elevated", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(UserRound, { className: "mx-auto h-12 w-12 text-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-5 font-display text-3xl font-bold", children: "Your consultation space is private" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground", children: "Log in with your mobile number to view bookings and account details." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "hero", size: "xl", asChild: true, className: "mt-7 w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/auth", children: "Log in or register" }) })
      ] }) })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-secondary/35", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ProductHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "container mx-auto px-4 py-8 lg:px-8 lg:py-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col justify-between gap-5 sm:flex-row sm:items-end", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: "Welcome back" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-1 font-display text-4xl font-bold tracking-tight", children: user.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Manage your private consultations and account information." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "hero", size: "lg", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/experts", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }),
          " Book a consultation"
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 rounded-2xl border border-gold/25 bg-gold/10 p-4 text-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "mt-0.5 h-4 w-4 shrink-0 text-gold" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Frontend preview:" }),
          " this information is stored only in this browser. Spring Boot authentication and secure database storage will replace it later."
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 grid gap-8 lg:grid-cols-[1fr_300px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold", children: "Upcoming consultations" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "rounded-full bg-card px-3 py-1 text-xs text-muted-foreground", children: [
              bookings.length,
              " upcoming"
            ] })
          ] }),
          bookings.length ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 space-y-4", children: bookings.map((booking) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "rounded-3xl border border-border bg-card p-5 shadow-sm sm:p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col justify-between gap-5 sm:flex-row sm:items-start", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary", children: booking.status }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
                    "Reference ",
                    booking.id
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 font-display text-xl font-bold", children: booking.expertName }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: booking.expertTitle }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { className: "h-4 w-4 text-primary" }),
                    " ",
                    booking.date
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Clock3, { className: "h-4 w-4 text-primary" }),
                    " ",
                    booking.time,
                    " IST"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Video, { className: "h-4 w-4 text-primary" }),
                    " ",
                    booking.mode
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:text-right", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-lg font-bold", children: formatInr(booking.amount) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-xs text-muted-foreground", children: "Preview payment" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex flex-wrap gap-2 border-t border-border pt-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "brand", size: "lg", disabled: true, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Video, { className: "h-4 w-4" }),
                " Join 10 minutes before"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", size: "lg", disabled: true, children: "Reschedule" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/experts/$expertId", params: {
                expertId: booking.expertId
              }, className: "inline-flex h-11 items-center px-3 text-sm text-primary", children: [
                "View expert ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-4 w-4" })
              ] })
            ] })
          ] }, booking.id)) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 rounded-3xl border border-dashed border-border bg-card/50 px-6 py-16 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { className: "mx-auto h-10 w-10 text-muted-foreground" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 font-display text-xl font-semibold", children: "No consultations booked yet" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-2 max-w-md text-sm text-muted-foreground", children: "Browse sample expert profiles, choose a slot and complete the frontend booking flow." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "brand", size: "lg", asChild: true, className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/experts", children: "Find an expert" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "space-y-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-border bg-card p-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-lg font-bold", children: "Account" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 space-y-1", children: [[UserRound, "Profile", user.email], [MessageSquareText, "Messages", "Available with backend"], [FileText, "Documents", "Secure storage later"], [ReceiptIndianRupee, "Payments & invoices", "No live payments"], [Settings, "Privacy & settings", user.phone]].map(([Icon, title, detail]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", disabled: true, className: "flex w-full items-center gap-3 rounded-2xl p-3 text-left disabled:opacity-100", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-9 w-9 items-center justify-center rounded-xl bg-muted text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-sm font-medium", children: title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block truncate text-xs text-muted-foreground", children: detail })
              ] })
            ] }, title)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl bg-navy p-5 text-white", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-bold", children: "Need help?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm leading-relaxed text-white/65", children: "Support, cancellation and grievance workflows will connect to the administrator portal." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "/#contact", className: "mt-4 inline-flex text-sm font-semibold text-gold", children: [
              "Contact support ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-4 w-4" })
            ] })
          ] })
        ] })
      ] })
    ] })
  ] });
}
export {
  DashboardPage as component
};
