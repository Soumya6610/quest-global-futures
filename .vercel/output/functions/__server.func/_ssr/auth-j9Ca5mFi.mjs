import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate, L as Link } from "../_libs/tanstack__react-router.mjs";
import { P as ProductHeader, B as Button, c as cn, s as saveFrontendUser } from "./ProductHeader-BK9LMNZM.mjs";
import { $ as $t, N as Nt } from "../_libs/input-otp.mjs";
import { b as ShieldCheck, $ as Smartphone, J as LockKeyhole, a0 as MessageSquareText, a1 as ArrowLeft, q as Check, r as Minus } from "../_libs/lucide-react.mjs";
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
const InputOTP = reactExports.forwardRef(({ className, containerClassName, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  $t,
  {
    ref,
    containerClassName: cn(
      "flex items-center gap-2 has-[:disabled]:opacity-50",
      containerClassName
    ),
    className: cn("disabled:cursor-not-allowed", className),
    ...props
  }
));
InputOTP.displayName = "InputOTP";
const InputOTPGroup = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className: cn("flex items-center", className), ...props }));
InputOTPGroup.displayName = "InputOTPGroup";
const InputOTPSlot = reactExports.forwardRef(({ index, className, ...props }, ref) => {
  const inputOTPContext = reactExports.useContext(Nt);
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      ref,
      className: cn(
        "relative flex h-9 w-9 items-center justify-center border-y border-r border-input text-sm shadow-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",
        isActive && "z-10 ring-1 ring-ring",
        className
      ),
      ...props,
      children: [
        char,
        hasFakeCaret && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-4 w-px animate-caret-blink bg-foreground duration-1000" }) })
      ]
    }
  );
});
InputOTPSlot.displayName = "InputOTPSlot";
const InputOTPSeparator = reactExports.forwardRef(({ ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, role: "separator", ...props, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, {}) }));
InputOTPSeparator.displayName = "InputOTPSeparator";
function AuthPage() {
  const navigate = useNavigate();
  const [step, setStep] = reactExports.useState(0);
  const [phone, setPhone] = reactExports.useState("");
  const [otp, setOtp] = reactExports.useState("");
  const [name, setName] = reactExports.useState("");
  const [email, setEmail] = reactExports.useState("");
  const [consent, setConsent] = reactExports.useState(false);
  const normalizedPhone = phone.replace(/\D/g, "").slice(-10);
  const finish = () => {
    saveFrontendUser({
      id: `frontend-${Date.now()}`,
      name: name.trim(),
      phone: `+91${normalizedPhone}`,
      email: email.trim()
    });
    navigate({
      to: "/dashboard"
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-secondary/35", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ProductHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "container mx-auto grid min-h-[calc(100vh-80px)] items-center gap-10 px-4 py-10 lg:grid-cols-2 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "hidden lg:block", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-3.5 w-3.5" }),
          " Private one-to-one access"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-5 font-display text-5xl font-bold leading-tight tracking-tight", children: "One account for every consultation." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-lg leading-relaxed text-muted-foreground", children: "Use your Indian mobile number to manage bookings, private documents, invoices and follow-ups in one place." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 space-y-4", children: [[Smartphone, "Passwordless mobile OTP login"], [LockKeyhole, "Your private information stays inside your account"], [MessageSquareText, "Booking updates by mobile and email"]].map(([Icon, label]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 rounded-2xl border border-border bg-card p-4 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" }) }),
          label
        ] }, label)) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto w-full max-w-lg rounded-3xl border border-border bg-card p-6 shadow-elevated sm:p-9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/experts", className: "inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" }),
          " Continue browsing"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-7 flex gap-2", children: [0, 1, 2].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `h-1.5 flex-1 rounded-full ${item <= step ? "bg-primary" : "bg-border"}` }, item)) }),
        step === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.18em] text-primary", children: "Step 1 of 3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 font-display text-3xl font-bold", children: "Log in or create an account" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm leading-relaxed text-muted-foreground", children: "We’ll use the same secure flow for new and returning users." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "mt-7 block", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium", children: "Mobile number" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex h-12 overflow-hidden rounded-xl border border-border bg-background focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/15", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex items-center border-r border-border px-4 text-sm font-semibold", children: "+91" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { inputMode: "numeric", autoComplete: "tel", value: phone, onChange: (event) => setPhone(event.target.value.replace(/\D/g, "").slice(0, 10)), placeholder: "10-digit mobile number", className: "min-w-0 flex-1 bg-transparent px-4 text-sm outline-none" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "brand", size: "xl", className: "mt-6 w-full", disabled: normalizedPhone.length !== 10, onClick: () => setStep(1), children: "Send OTP" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-center text-xs text-muted-foreground", children: "Frontend preview: no SMS will be sent." })
        ] }),
        step === 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.18em] text-primary", children: "Step 2 of 3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 font-display text-3xl font-bold", children: "Enter the verification code" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 text-sm text-muted-foreground", children: [
            "Use any six digits to preview the flow for +91 ",
            normalizedPhone,
            "."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-7 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(InputOTP, { maxLength: 6, value: otp, onChange: setOtp, children: /* @__PURE__ */ jsxRuntimeExports.jsx(InputOTPGroup, { children: Array.from({
            length: 6
          }).map((_, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(InputOTPSlot, { index, className: "h-12 w-11 text-base" }, index)) }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "brand", size: "xl", className: "mt-7 w-full", disabled: otp.length !== 6, onClick: () => setStep(2), children: "Verify mobile" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => {
            setOtp("");
            setStep(0);
          }, className: "mt-4 w-full text-center text-sm text-primary", children: "Change mobile number" })
        ] }),
        step === 2 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.18em] text-primary", children: "Step 3 of 3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 font-display text-3xl font-bold", children: "Complete your profile" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Only the essential details for confirmations and invoices." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-sm font-medium", children: [
              "Full name",
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { autoComplete: "name", value: name, onChange: (event) => setName(event.target.value), placeholder: "Your full name", className: "mt-2 h-12 w-full rounded-xl border border-border bg-background px-4 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/15" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-sm font-medium", children: [
              "Email address",
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", autoComplete: "email", value: email, onChange: (event) => setEmail(event.target.value), placeholder: "you@example.com", className: "mt-2 h-12 w-full rounded-xl border border-border bg-background px-4 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/15" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-start gap-3 rounded-2xl border border-border p-4 text-sm leading-relaxed", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", checked: consent, onChange: (event) => setConsent(event.target.checked), className: "mt-1 h-4 w-4 accent-primary" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "I agree to the platform terms and privacy notice. These documents will be legally finalized before launch." })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "hero", size: "xl", className: "mt-6 w-full", disabled: !name.trim() || !email.includes("@") || !consent, onClick: finish, children: [
            "Create my account ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4" })
          ] })
        ] })
      ] })
    ] })
  ] });
}
export {
  AuthPage as component
};
