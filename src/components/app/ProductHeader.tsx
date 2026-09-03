import { Link } from "@tanstack/react-router";
import { Compass, LogOut, Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/use-theme";
import { usePlatformUser } from "@/hooks/use-platform-user";
import { clearFrontendUser } from "@/lib/platform-store";

const links = [
  { to: "/experts", label: "Find experts", hash: undefined },
  { to: "/", label: "Categories", hash: "services" },
  { to: "/", label: "Cities", hash: "cities" },
  { to: "/", label: "Reviews", hash: "stories" },
  { to: "/", label: "How it works", hash: "how-it-works" },
  { to: "/consultant/apply", label: "For consultants", hash: undefined },
] as const;

export function ProductHeader({ overlay = false }: { overlay?: boolean }) {
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();
  const { user } = usePlatformUser();
  const textClass = overlay ? "text-white" : "text-foreground";

  return (
    <header
      className={
        overlay
          ? "absolute inset-x-0 top-0 z-50"
          : "sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-xl"
      }
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 lg:px-8">
        <Link to="/" className={`flex items-center gap-2.5 ${textClass}`}>
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--gradient-gold)] shadow-gold">
            <Compass className="h-5 w-5 text-navy-deep" strokeWidth={2.5} />
          </span>
          <span className="font-display text-xl font-bold">TQGC</span>
        </Link>

        <nav className="hidden items-center lg:flex">
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              hash={link.hash}
              className={`rounded-full px-3 py-2 text-sm transition-colors ${overlay ? "text-white/75 hover:bg-white/10 hover:text-white" : "text-muted-foreground hover:bg-muted hover:text-foreground"}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <button
            type="button"
            onClick={toggle}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className={`flex h-10 w-10 items-center justify-center rounded-full ${overlay ? "glass-dark text-white" : "border border-border bg-card"}`}
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          {user ? (
            <>
              <Button variant={overlay ? "glass" : "outline"} size="lg" asChild>
                <Link to="/dashboard">Hi, {user.name.split(" ")[0]}</Link>
              </Button>
              <button
                type="button"
                onClick={clearFrontendUser}
                aria-label="Sign out"
                className={`flex h-10 w-10 items-center justify-center rounded-full ${overlay ? "glass-dark text-white" : "border border-border bg-card"}`}
              >
                <LogOut className="h-4 w-4" />
              </button>
            </>
          ) : (
            <>
              <Button variant={overlay ? "glass" : "ghost"} size="lg" asChild>
                <Link to="/auth">Log in</Link>
              </Button>
              <Button variant="hero" size="lg" asChild>
                <Link to="/experts">Book a consultation</Link>
              </Button>
            </>
          )}
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close menu" : "Open menu"}
          className={`flex h-10 w-10 items-center justify-center rounded-full lg:hidden ${overlay ? "glass-dark text-white" : "border border-border bg-card"}`}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="mx-4 mb-4 rounded-2xl border border-border bg-card p-4 shadow-elevated lg:hidden">
          <nav className="flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                hash={link.hash}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm hover:bg-muted"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to={user ? "/dashboard" : "/auth"}
              onClick={() => setOpen(false)}
              className="mt-2 rounded-xl bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground"
            >
              {user ? "Open dashboard" : "Log in or register"}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
