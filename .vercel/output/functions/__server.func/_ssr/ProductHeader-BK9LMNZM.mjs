import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { F as Compass, J as Sun, K as Moon, N as LogOut, X, O as Menu } from "../_libs/lucide-react.mjs";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        hero: "bg-[var(--gradient-gold)] [background-image:var(--gradient-gold)] text-navy-deep font-semibold shadow-gold hover:brightness-110 hover:-translate-y-0.5 transition-all",
        glass: "glass-dark text-white hover:bg-white/15 transition-all hover:-translate-y-0.5",
        brand: "bg-primary text-primary-foreground shadow-glow hover:bg-primary/90 hover:-translate-y-0.5 transition-all"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-11 rounded-full px-7 text-sm",
        xl: "h-14 rounded-full px-9 text-base",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = reactExports.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";
const STORAGE_KEY = "tqgc-theme";
function getInitialTheme() {
  if (typeof window === "undefined") return "dark";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function useTheme() {
  const [theme, setTheme] = reactExports.useState("dark");
  reactExports.useEffect(() => {
    const initial = getInitialTheme();
    setTheme(initial);
  }, []);
  reactExports.useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    root.style.colorScheme = theme;
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);
  return {
    theme,
    toggle: () => setTheme((t) => t === "dark" ? "light" : "dark"),
    setTheme
  };
}
const USER_KEY = "tqgc_frontend_user";
const BOOKINGS_KEY = "tqgc_frontend_bookings";
const CONSULTANT_APPLICATION_KEY = "tqgc_frontend_consultant_application";
const STORE_EVENT = "tqgc-store-change";
function read(key, fallback) {
  if (typeof window === "undefined") return fallback;
  try {
    const value = window.localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}
function write(key, value) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(key, JSON.stringify(value));
  window.dispatchEvent(new Event(STORE_EVENT));
}
function getFrontendUser() {
  return read(USER_KEY, null);
}
function saveFrontendUser(user) {
  write(USER_KEY, user);
}
function clearFrontendUser() {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(USER_KEY);
  window.dispatchEvent(new Event(STORE_EVENT));
}
function getFrontendBookings() {
  return read(BOOKINGS_KEY, []);
}
function saveFrontendBooking(booking) {
  write(BOOKINGS_KEY, [booking, ...getFrontendBookings()]);
}
function getConsultantApplication() {
  return read(CONSULTANT_APPLICATION_KEY, null);
}
function saveConsultantApplication(application) {
  write(CONSULTANT_APPLICATION_KEY, application);
}
function subscribeToPlatformStore(callback) {
  if (typeof window === "undefined") return () => void 0;
  window.addEventListener(STORE_EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(STORE_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}
function usePlatformUser() {
  const [user, setUser] = reactExports.useState(null);
  const [ready, setReady] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const refresh = () => {
      setUser(getFrontendUser());
      setReady(true);
    };
    refresh();
    return subscribeToPlatformStore(refresh);
  }, []);
  return { user, ready };
}
const links = [
  { to: "/experts", label: "Find experts", hash: void 0 },
  { to: "/", label: "Categories", hash: "services" },
  { to: "/", label: "Cities", hash: "cities" },
  { to: "/", label: "Reviews", hash: "stories" },
  { to: "/", label: "How it works", hash: "how-it-works" },
  { to: "/consultant/apply", label: "For consultants", hash: void 0 }
];
function ProductHeader({ overlay = false }) {
  const [open, setOpen] = reactExports.useState(false);
  const { theme, toggle } = useTheme();
  const { user } = usePlatformUser();
  const textClass = overlay ? "text-white" : "text-foreground";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "header",
    {
      className: overlay ? "absolute inset-x-0 top-0 z-50" : "sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-xl",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto flex h-20 items-center justify-between px-4 lg:px-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: `flex items-center gap-2.5 ${textClass}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--gradient-gold)] shadow-gold", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Compass, { className: "h-5 w-5 text-navy-deep", strokeWidth: 2.5 }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-xl font-bold", children: "TQGC" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden items-center lg:flex", children: links.map((link) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: link.to,
              hash: link.hash,
              className: `rounded-full px-3 py-2 text-sm transition-colors ${overlay ? "text-white/75 hover:bg-white/10 hover:text-white" : "text-muted-foreground hover:bg-muted hover:text-foreground"}`,
              children: link.label
            },
            link.label
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden items-center gap-2 lg:flex", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: toggle,
                "aria-label": theme === "dark" ? "Switch to light mode" : "Switch to dark mode",
                className: `flex h-10 w-10 items-center justify-center rounded-full ${overlay ? "glass-dark text-white" : "border border-border bg-card"}`,
                children: theme === "dark" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "h-4 w-4" })
              }
            ),
            user ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: overlay ? "glass" : "outline", size: "lg", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/dashboard", children: [
                "Hi, ",
                user.name.split(" ")[0]
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: clearFrontendUser,
                  "aria-label": "Sign out",
                  className: `flex h-10 w-10 items-center justify-center rounded-full ${overlay ? "glass-dark text-white" : "border border-border bg-card"}`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "h-4 w-4" })
                }
              )
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: overlay ? "glass" : "ghost", size: "lg", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/auth", children: "Log in" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "hero", size: "lg", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/experts", children: "Book a consultation" }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => setOpen((value) => !value),
              "aria-label": open ? "Close menu" : "Open menu",
              className: `flex h-10 w-10 items-center justify-center rounded-full lg:hidden ${overlay ? "glass-dark text-white" : "border border-border bg-card"}`,
              children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-5 w-5" })
            }
          )
        ] }),
        open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-4 mb-4 rounded-2xl border border-border bg-card p-4 shadow-elevated lg:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "flex flex-col gap-1", children: [
          links.map((link) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: link.to,
              hash: link.hash,
              onClick: () => setOpen(false),
              className: "rounded-xl px-4 py-3 text-sm hover:bg-muted",
              children: link.label
            },
            link.label
          )),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: user ? "/dashboard" : "/auth",
              onClick: () => setOpen(false),
              className: "mt-2 rounded-xl bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground",
              children: user ? "Open dashboard" : "Log in or register"
            }
          )
        ] }) })
      ]
    }
  );
}
export {
  Button as B,
  ProductHeader as P,
  subscribeToPlatformStore as a,
  saveFrontendBooking as b,
  cn as c,
  getConsultantApplication as d,
  saveConsultantApplication as e,
  getFrontendBookings as g,
  saveFrontendUser as s,
  usePlatformUser as u
};
