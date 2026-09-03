import { j as jsxRuntimeExports } from "./_libs/react.mjs";
import { L as Link } from "./_libs/tanstack__react-router.mjs";
import { P as ProductFooter } from "./_ssr/ProductFooter-C8JtqOvD.mjs";
import { P as ProductHeader, B as Button } from "./_ssr/ProductHeader-BK9LMNZM.mjs";
import { d as Route, f as formatInr } from "./_ssr/router-DLi9eCG6.mjs";
import { a1 as ArrowLeft, c as Star, B as BadgeCheck, Z as Clock3, u as MapPin, L as Languages, _ as Video, G as GraduationCap, C as CircleCheck, b as ShieldCheck, Q as Quote, E as CalendarDays } from "./_libs/lucide-react.mjs";
import "./_libs/tanstack__router-core.mjs";
import "./_libs/tanstack__history.mjs";
import "./_libs/cookie-es.mjs";
import "./_libs/seroval.mjs";
import "./_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "./_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "./_libs/isbot.mjs";
import "./_libs/radix-ui__react-slot.mjs";
import "./_libs/radix-ui__react-compose-refs.mjs";
import "./_libs/class-variance-authority.mjs";
import "./_libs/clsx.mjs";
import "./_libs/tailwind-merge.mjs";
import "./_libs/tanstack__react-query.mjs";
import "./_libs/tanstack__query-core.mjs";
function ExpertProfilePage() {
  const expert = Route.useLoaderData();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ProductHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-b border-border bg-secondary/40 py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/experts", className: "inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" }),
        " Back to all experts"
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container mx-auto grid gap-10 px-4 py-10 lg:grid-cols-[1fr_360px] lg:px-8 lg:py-14", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-7 md:grid-cols-[220px_1fr] md:items-start", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-3xl border border-border bg-card", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: expert.image, alt: expert.name, width: 640, height: 800, className: "aspect-[4/5] h-full w-full object-cover" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary", children: expert.category }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs font-medium", children: "Sample profile" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-4 font-display text-4xl font-bold tracking-tight lg:text-5xl", children: expert.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-lg text-muted-foreground", children: expert.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex flex-wrap items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5 rounded-full bg-gold/12 px-3 py-1.5 text-sm font-semibold", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-4 w-4 fill-gold text-gold" }),
                  " ",
                  expert.rating,
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-normal text-muted-foreground", children: [
                    "from ",
                    expert.reviewCount,
                    " reviews"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 text-xs text-primary", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(BadgeCheck, { className: "h-4 w-4" }),
                  " Reviews from completed bookings"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 grid gap-3 text-sm sm:grid-cols-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Clock3, { className: "h-4 w-4 text-primary" }),
                  " ",
                  expert.experience,
                  " years experience"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-4 w-4 text-primary" }),
                  " ",
                  expert.location,
                  ", India"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Languages, { className: "h-4 w-4 text-primary" }),
                  " ",
                  expert.languages.join(", ")
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Video, { className: "h-4 w-4 text-primary" }),
                  " ",
                  expert.modes.join(" · ")
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 space-y-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold", children: "About" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 max-w-3xl leading-relaxed text-muted-foreground", children: expert.about })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold", children: "Areas of consultation" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex flex-wrap gap-2", children: expert.specialties.map((specialty) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full border border-border bg-card px-4 py-2 text-sm", children: specialty }, specialty)) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-3xl border border-border bg-card p-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { className: "h-5 w-5 text-primary" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-xl font-bold", children: "Qualifications" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 space-y-3", children: expert.qualifications.map((qualification) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2 text-sm text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "mt-0.5 h-4 w-4 shrink-0 text-primary" }),
                " ",
                qualification
              ] }, qualification)) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex gap-2 rounded-2xl bg-gold/10 p-4 text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "mt-0.5 h-4 w-4 shrink-0 text-gold" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Credential records and registration numbers will be connected to the admin verification workflow with the backend." })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold", children: "Consultation approach" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 max-w-3xl leading-relaxed text-muted-foreground", children: expert.approach })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "reviews", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col justify-between gap-3 sm:flex-row sm:items-end", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold", children: "Client reviews" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Feedback is displayed only after a completed consultation." })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 rounded-full bg-gold/12 px-4 py-2 text-sm font-semibold", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-4 w-4 fill-gold text-gold" }),
                  " ",
                  expert.rating,
                  " ·",
                  " ",
                  expert.reviewCount,
                  " reviews"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 grid gap-4 md:grid-cols-2", children: expert.reviews.map((review) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "rounded-3xl border border-border bg-card p-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { className: "h-6 w-6 text-primary/35" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-0.5", "aria-label": `${review.rating} out of 5 stars`, children: Array.from({
                    length: 5
                  }).map((_, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: `h-3.5 w-3.5 ${index < review.rating ? "fill-gold text-gold" : "text-border"}` }, index)) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-4 text-sm leading-relaxed text-muted-foreground", children: [
                  "“",
                  review.text,
                  "”"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex items-end justify-between gap-3 border-t border-border pt-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold", children: review.author }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
                      review.city,
                      " · ",
                      review.date
                    ] })
                  ] }),
                  review.verified && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 text-xs text-primary", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(BadgeCheck, { className: "h-4 w-4" }),
                    " Verified booking"
                  ] })
                ] })
              ] }, review.id)) })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("aside", { className: "lg:sticky lg:top-28 lg:self-start", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-border bg-card p-6 shadow-elevated", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: "One-to-one consultation" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 font-display text-3xl font-bold", children: formatInr(expert.price) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 text-sm text-muted-foreground", children: [
            expert.duration,
            " minutes · Taxes shown at checkout"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#reviews", className: "mt-4 flex items-center justify-between rounded-2xl border border-border p-3 text-sm hover:border-primary/40", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2 font-semibold", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-4 w-4 fill-gold text-gold" }),
              " ",
              expert.rating,
              " rating"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-primary", children: [
              "Read ",
              expert.reviewCount,
              " reviews"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 rounded-2xl bg-primary/8 p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm font-semibold", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { className: "h-4 w-4 text-primary" }),
              " Next available"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-sm text-muted-foreground", children: expert.nextAvailable })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "hero", size: "xl", asChild: true, className: "mt-5 w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/book/$expertId", params: {
            expertId: expert.id
          }, children: "Choose a slot" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-center text-xs leading-relaxed text-muted-foreground", children: "No payment is collected in this frontend preview. Cancellation rules will be displayed before live checkout." })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ProductFooter, {})
  ] });
}
export {
  ExpertProfilePage as component
};
