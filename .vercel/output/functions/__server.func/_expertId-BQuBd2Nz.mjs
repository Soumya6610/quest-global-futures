import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { d as useNavigate, L as Link } from "./_libs/tanstack__react-router.mjs";
import { u as usePlatformUser, P as ProductHeader, B as Button, b as saveFrontendBooking } from "./_ssr/ProductHeader-BK9LMNZM.mjs";
import { R as Route$4, f as formatInr } from "./_ssr/router-DUENwKpS.mjs";
import { u as LockKeyhole, $ as ArrowLeft, a5 as Info, Q as Quote, c as Star, B as BadgeCheck, Y as Video, _ as MessageSquareText, Z as Smartphone, b as ShieldCheck, a6 as CreditCard, h as Check, V as Clock3, r as CalendarDays } from "./_libs/lucide-react.mjs";
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
const timeSlots = ["10:00 AM", "11:30 AM", "2:00 PM", "4:30 PM", "6:30 PM", "8:00 PM"];
function getDates() {
  return Array.from({
    length: 5
  }).map((_, index) => {
    const date = /* @__PURE__ */ new Date();
    date.setDate(date.getDate() + index + 1);
    return {
      value: date.toISOString().slice(0, 10),
      day: new Intl.DateTimeFormat("en-IN", {
        weekday: "short"
      }).format(date),
      date: new Intl.DateTimeFormat("en-IN", {
        day: "numeric",
        month: "short"
      }).format(date)
    };
  });
}
function BookingPage() {
  const expert = Route$4.useLoaderData();
  const navigate = useNavigate();
  const {
    user,
    ready
  } = usePlatformUser();
  const dates = reactExports.useMemo(getDates, []);
  const [step, setStep] = reactExports.useState(0);
  const [date, setDate] = reactExports.useState(dates[0].value);
  const [time, setTime] = reactExports.useState("");
  const [mode, setMode] = reactExports.useState(expert.modes[0]);
  const [concern, setConcern] = reactExports.useState("");
  const [payment, setPayment] = reactExports.useState("UPI");
  const [accepted, setAccepted] = reactExports.useState(false);
  const confirm = () => {
    saveFrontendBooking({
      id: `TQGC-${Date.now().toString().slice(-8)}`,
      expertId: expert.id,
      expertName: expert.name,
      expertTitle: expert.title,
      date,
      time,
      mode,
      amount: expert.price,
      concern,
      status: "Confirmed"
    });
    setStep(3);
  };
  if (ready && !user) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-secondary/35", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ProductHeader, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "container mx-auto flex min-h-[calc(100vh-80px)] items-center justify-center px-4 py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-lg rounded-3xl border border-border bg-card p-8 text-center shadow-elevated", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LockKeyhole, { className: "h-7 w-7" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-5 font-display text-3xl font-bold", children: "Log in before choosing a private slot" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm leading-relaxed text-muted-foreground", children: "Your account keeps consultation details, confirmations and future documents private." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "hero", size: "xl", asChild: true, className: "mt-7 w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/auth", children: "Log in or register" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/experts/$expertId", params: {
          expertId: expert.id
        }, className: "mt-5 inline-flex text-sm text-primary", children: "Return to expert profile" })
      ] }) })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-secondary/35", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ProductHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "container mx-auto px-4 py-8 lg:px-8 lg:py-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/experts/$expertId", params: {
        expertId: expert.id
      }, className: "inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" }),
        " Back to profile"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 grid gap-8 lg:grid-cols-[1fr_340px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-3xl border border-border bg-card p-6 shadow-elevated sm:p-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl border border-gold/25 bg-gold/10 p-4 text-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "mt-0.5 h-4 w-4 shrink-0 text-gold" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Frontend preview:" }),
              " slot confirmation and payment are simulated. No money or message will be sent."
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-7 flex gap-2", children: [0, 1, 2].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `h-1.5 flex-1 rounded-full ${item <= step ? "bg-primary" : "bg-border"}` }, item)) }),
          step === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.18em] text-primary", children: "Step 1 of 3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-2 font-display text-3xl font-bold", children: "Choose a time and format" }),
            expert.reviews[0] && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 rounded-2xl border border-gold/25 bg-gold/8 p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { className: "mt-0.5 h-5 w-5 shrink-0 text-gold" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm font-semibold", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-4 w-4 fill-gold text-gold" }),
                  " ",
                  expert.rating,
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-normal text-muted-foreground", children: [
                    "from ",
                    expert.reviewCount,
                    " reviews"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 text-sm leading-relaxed text-muted-foreground", children: [
                  "“",
                  expert.reviews[0].text,
                  "”"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex items-center gap-1 text-xs text-primary", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(BadgeCheck, { className: "h-3.5 w-3.5" }),
                  " ",
                  expert.reviews[0].author,
                  " · Verified booking"
                ] })
              ] })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-7", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold", children: "Consultation date" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 grid grid-cols-2 gap-2 sm:grid-cols-5", children: dates.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => setDate(item.value), className: `rounded-2xl border p-3 text-center ${date === item.value ? "border-primary bg-primary text-primary-foreground" : "border-border hover:border-primary/40"}`, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs opacity-75", children: item.day }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-sm font-semibold", children: item.date })
              ] }, item.value)) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold", children: "Available time · IST" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3", children: timeSlots.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setTime(item), className: `rounded-xl border px-4 py-3 text-sm ${time === item ? "border-primary bg-primary/10 font-semibold text-primary" : "border-border hover:border-primary/40"}`, children: item }, item)) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold", children: "Consultation format" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 grid gap-2 sm:grid-cols-3", children: expert.modes.map((item) => {
                const Icon = item === "Video" ? Video : item === "Chat" ? MessageSquareText : Smartphone;
                return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => setMode(item), className: `flex items-center justify-center gap-2 rounded-xl border px-4 py-3 text-sm ${mode === item ? "border-primary bg-primary/10 font-semibold text-primary" : "border-border"}`, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" }),
                  item
                ] }, item);
              }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "brand", size: "xl", className: "mt-8 w-full", disabled: !time, onClick: () => setStep(1), children: "Continue to intake" })
          ] }),
          step === 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.18em] text-primary", children: "Step 2 of 3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-2 font-display text-3xl font-bold", children: "Help the consultant prepare" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Share only what is necessary. Detailed or sensitive records can be handled after the secure backend is connected." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "mt-7 block text-sm font-semibold", children: [
              "What would you like help with?",
              /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { value: concern, onChange: (event) => setConcern(event.target.value.slice(0, 500)), rows: 6, placeholder: "Briefly describe the decision, concern or outcome you want from this session…", className: "mt-2 w-full resize-none rounded-2xl border border-border bg-background p-4 text-sm font-normal outline-none focus:border-primary focus:ring-2 focus:ring-primary/15" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 text-right text-xs text-muted-foreground", children: [
              concern.length,
              "/500"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex gap-2 rounded-2xl bg-primary/8 p-4 text-sm leading-relaxed", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "mt-0.5 h-4 w-4 shrink-0 text-primary" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Do not enter emergency information, passwords, financial credentials or detailed medical records in this preview." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", size: "lg", onClick: () => setStep(0), children: "Back" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "brand", size: "lg", className: "flex-1", disabled: concern.trim().length < 20, onClick: () => setStep(2), children: "Review and payment" })
            ] })
          ] }),
          step === 2 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.18em] text-primary", children: "Step 3 of 3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-2 font-display text-3xl font-bold", children: "Choose a payment method" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The live version will hand payment securely to an Indian payment gateway." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-7 grid gap-3 sm:grid-cols-2", children: [{
              id: "UPI",
              icon: Smartphone,
              detail: "Any UPI app"
            }, {
              id: "Card / net banking",
              icon: CreditCard,
              detail: "Gateway checkout"
            }].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => setPayment(item.id), className: `flex items-center gap-3 rounded-2xl border p-4 text-left ${payment === item.id ? "border-primary bg-primary/8" : "border-border"}`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(item.icon, { className: "h-5 w-5" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-sm font-semibold", children: item.id }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: item.detail })
              ] })
            ] }, item.id)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "mt-6 flex items-start gap-3 rounded-2xl border border-border p-4 text-sm leading-relaxed", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", checked: accepted, onChange: (event) => setAccepted(event.target.checked), className: "mt-1 h-4 w-4 accent-primary" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "I understand the consultation scope and accept the cancellation, consent and privacy terms. Final policy text will be connected before launch." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", size: "lg", onClick: () => setStep(1), children: "Back" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "hero", size: "lg", className: "flex-1", disabled: !accepted, onClick: confirm, children: [
                "Confirm preview booking · ",
                formatInr(expert.price)
              ] })
            ] })
          ] }),
          step === 3 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-14 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-9 w-9" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-6 font-display text-3xl font-bold", children: "Your preview booking is confirmed" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground", children: "It has been saved in this browser so you can review the complete dashboard experience." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "hero", size: "xl", className: "mt-7", onClick: () => navigate({
              to: "/dashboard"
            }), children: "View my dashboard" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("aside", { className: "lg:sticky lg:top-28 lg:self-start", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-border bg-card p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: expert.image, alt: "", className: "h-16 w-16 rounded-2xl object-cover" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-semibold", children: expert.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-xs text-muted-foreground", children: expert.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex items-center gap-1.5 text-xs font-semibold", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-3.5 w-3.5 fill-gold text-gold" }),
                " ",
                expert.rating,
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-normal text-muted-foreground", children: [
                  "(",
                  expert.reviewCount,
                  " reviews)"
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("dl", { className: "mt-5 space-y-3 border-t border-border pt-5 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("dt", { className: "flex items-center gap-2 text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Clock3, { className: "h-4 w-4" }),
                " Duration"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("dd", { children: [
                expert.duration,
                " minutes"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("dt", { className: "flex items-center gap-2 text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { className: "h-4 w-4" }),
                " Slot"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "text-right", children: time || "Not selected" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between gap-4 border-t border-border pt-3 font-semibold", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { children: "Total" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { children: formatInr(expert.price) })
            ] })
          ] })
        ] }) })
      ] })
    ] })
  ] });
}
export {
  BookingPage as component
};
