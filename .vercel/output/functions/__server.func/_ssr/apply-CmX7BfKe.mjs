import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate, L as Link } from "../_libs/tanstack__react-router.mjs";
import { d as getConsultantApplication, P as ProductHeader, B as Button, e as saveConsultantApplication } from "./ProductHeader-BK9LMNZM.mjs";
import { c as consultantCategories, a as consultationCities } from "./router-DLi9eCG6.mjs";
import { a9 as FileCheckCorner, a1 as ArrowLeft, s as UserRoundCheck, b as ShieldCheck, B as BadgeCheck, n as Building2, A as ArrowRight, q as Check } from "../_libs/lucide-react.mjs";
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
const modes = ["Video", "Chat", "In-person"];
function ConsultantApplicationPage() {
  const navigate = useNavigate();
  const [existing, setExisting] = reactExports.useState(null);
  const [step, setStep] = reactExports.useState(0);
  const [name, setName] = reactExports.useState("");
  const [phone, setPhone] = reactExports.useState("");
  const [email, setEmail] = reactExports.useState("");
  const [title, setTitle] = reactExports.useState("");
  const [category, setCategory] = reactExports.useState("Career & Education");
  const [experience, setExperience] = reactExports.useState("");
  const [city, setCity] = reactExports.useState("");
  const [languages, setLanguages] = reactExports.useState("English, Hindi");
  const [selectedModes, setSelectedModes] = reactExports.useState(["Video"]);
  const [fee, setFee] = reactExports.useState("");
  const [qualifications, setQualifications] = reactExports.useState("");
  const [bio, setBio] = reactExports.useState("");
  const [consent, setConsent] = reactExports.useState(false);
  reactExports.useEffect(() => setExisting(getConsultantApplication()), []);
  const toggleMode = (mode) => {
    setSelectedModes((current) => current.includes(mode) ? current.filter((item) => item !== mode) : [...current, mode]);
  };
  const submit = () => {
    const application = {
      id: `CONS-${Date.now().toString().slice(-8)}`,
      name: name.trim(),
      phone: `+91${phone.replace(/\D/g, "").slice(-10)}`,
      email: email.trim(),
      title: title.trim(),
      category,
      experience: Number(experience),
      city: city.trim(),
      languages: languages.split(",").map((item) => item.trim()).filter(Boolean),
      modes: selectedModes,
      fee: Number(fee),
      qualifications: qualifications.trim(),
      bio: bio.trim(),
      submittedAt: new Intl.DateTimeFormat("en-IN", {
        dateStyle: "medium"
      }).format(/* @__PURE__ */ new Date()),
      status: "Under review"
    };
    saveConsultantApplication(application);
    setExisting(application);
    navigate({
      to: "/consultant/dashboard"
    });
  };
  if (existing) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-secondary/35", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ProductHeader, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "container mx-auto flex min-h-[calc(100vh-80px)] items-center justify-center px-4 py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-xl rounded-3xl border border-border bg-card p-8 text-center shadow-elevated", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FileCheckCorner, { className: "h-8 w-8" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-5 font-display text-3xl font-bold", children: "Application already submitted" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 text-sm leading-relaxed text-muted-foreground", children: [
          existing.name,
          ", your consultant application is currently",
          " ",
          existing.status.toLowerCase(),
          ". Open the consultant dashboard to review your profile and verification checklist."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "hero", size: "xl", asChild: true, className: "mt-7 w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/consultant/dashboard", children: "Open consultant dashboard" }) })
      ] }) })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-secondary/35", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ProductHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "container mx-auto grid gap-10 px-4 py-10 lg:grid-cols-[0.8fr_1.2fr] lg:px-8 lg:py-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/experts", className: "inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" }),
          " Back to experts"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 max-w-lg lg:sticky lg:top-28", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(UserRoundCheck, { className: "h-4 w-4" }),
            " Consultant onboarding"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-5 font-display text-4xl font-bold tracking-tight lg:text-5xl", children: "Offer your expertise through a trusted profile." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 leading-relaxed text-muted-foreground", children: "Consultants apply first. Credentials, professional registrations and identity must be reviewed by an administrator before a profile becomes publicly bookable." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 space-y-3", children: [[FileCheckCorner, "Submit professional and service details"], [ShieldCheck, "Administrator verifies identity and credentials"], [BadgeCheck, "Approved profile receives a verified badge"], [Building2, "Set city, modes, availability and INR pricing"]].map(([Icon, label], index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 rounded-2xl bg-card p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { className: "mr-2 text-muted-foreground", children: [
                "0",
                index + 1
              ] }),
              label
            ] })
          ] }, label)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-3xl border border-border bg-card p-6 shadow-elevated sm:p-9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2", children: [0, 1, 2].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `h-1.5 flex-1 rounded-full ${item <= step ? "bg-primary" : "bg-border"}` }, item)) }),
        step === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.18em] text-primary", children: "Step 1 of 3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 font-display text-3xl font-bold", children: "Identity and contact" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 grid gap-4 sm:grid-cols-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Full legal name", value: name, onChange: setName, placeholder: "As shown on ID" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Professional title", value: title, onChange: setTitle, placeholder: "Career counsellor" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Mobile number", value: phone, onChange: (value) => setPhone(value.replace(/\D/g, "").slice(0, 10)), placeholder: "10-digit Indian number" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email address", type: "email", value: email, onChange: setEmail, placeholder: "you@example.com" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "brand", size: "xl", className: "mt-7 w-full", disabled: !name.trim() || !title.trim() || phone.length !== 10 || !email.includes("@"), onClick: () => setStep(1), children: [
            "Continue ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
          ] })
        ] }),
        step === 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.18em] text-primary", children: "Step 2 of 3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 font-display text-3xl font-bold", children: "Practice information" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 grid gap-4 sm:grid-cols-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-sm font-medium", children: [
              "Consultation category",
              /* @__PURE__ */ jsxRuntimeExports.jsx("select", { value: category, onChange: (event) => setCategory(event.target.value), className: "mt-2 h-12 w-full rounded-xl border border-border bg-background px-4 text-sm outline-none focus:border-primary", children: consultantCategories.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: item }, item)) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Years of experience", type: "number", value: experience, onChange: setExperience, placeholder: "5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-sm font-medium", children: [
              "Primary city",
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { list: "consultant-cities", value: city, onChange: (event) => setCity(event.target.value), placeholder: "Bengaluru", className: "mt-2 h-12 w-full rounded-xl border border-border bg-background px-4 text-sm outline-none focus:border-primary" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("datalist", { id: "consultant-cities", children: consultationCities.slice(1).map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: item }, item)) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Languages (comma separated)", value: languages, onChange: setLanguages, placeholder: "English, Hindi" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Session fee in INR", type: "number", value: fee, onChange: setFee, placeholder: "1500" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium", children: "Consultation modes" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 grid grid-cols-3 gap-2", children: modes.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => toggleMode(item), className: `rounded-xl border px-3 py-3 text-sm ${selectedModes.includes(item) ? "border-primary bg-primary/10 font-semibold text-primary" : "border-border"}`, children: item }, item)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-7 flex gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", size: "lg", onClick: () => setStep(0), children: "Back" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "brand", size: "lg", className: "flex-1", disabled: !experience || Number(experience) < 1 || !city.trim() || !fee || selectedModes.length === 0, onClick: () => setStep(2), children: "Continue" })
          ] })
        ] }),
        step === 2 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.18em] text-primary", children: "Step 3 of 3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 font-display text-3xl font-bold", children: "Credentials and profile" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "mt-6 block text-sm font-medium", children: [
            "Qualifications and registrations",
            /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { value: qualifications, onChange: (event) => setQualifications(event.target.value), rows: 4, placeholder: "Degrees, certifications, registration numbers and issuing bodies", className: "mt-2 w-full rounded-2xl border border-border bg-background p-4 text-sm outline-none focus:border-primary" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "mt-5 block text-sm font-medium", children: [
            "About your practice",
            /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { value: bio, onChange: (event) => setBio(event.target.value.slice(0, 600)), rows: 5, placeholder: "Who you help, your approach and what clients can expect", className: "mt-2 w-full rounded-2xl border border-border bg-background p-4 text-sm outline-none focus:border-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mt-1 block text-right text-xs text-muted-foreground", children: [
              bio.length,
              "/600"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 rounded-2xl bg-gold/10 p-4 text-sm leading-relaxed", children: "Document upload will be connected to secure Spring Boot storage. The backend must keep identity documents private and expose only verified public credentials." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "mt-5 flex items-start gap-3 rounded-2xl border border-border p-4 text-sm leading-relaxed", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", checked: consent, onChange: (event) => setConsent(event.target.checked), className: "mt-1 h-4 w-4 accent-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "I confirm these details are accurate and consent to identity, qualification and professional-registration verification." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-7 flex gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", size: "lg", onClick: () => setStep(1), children: "Back" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "hero", size: "lg", className: "flex-1", disabled: qualifications.trim().length < 10 || bio.trim().length < 40 || !consent, onClick: submit, children: [
              "Submit application ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4" })
            ] })
          ] })
        ] })
      ] })
    ] })
  ] });
}
function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text"
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-sm font-medium", children: [
    label,
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type, value, onChange: (event) => onChange(event.target.value), placeholder, className: "mt-2 h-12 w-full rounded-xl border border-border bg-background px-4 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/15" })
  ] });
}
export {
  ConsultantApplicationPage as component
};
