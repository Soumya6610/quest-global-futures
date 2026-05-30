import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Compass, Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/hooks/use-theme";

const NAV = [
  { href: "#services", label: "Services" },
  { href: "#journey", label: "Journey" },
  { href: "#global", label: "Global" },
  { href: "#experts", label: "Experts" },
  { href: "#wellness", label: "Wellness" },
  { href: "#stories", label: "Stories" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled ? "py-3" : "py-5",
      )}
    >
      <div
        className={cn(
          "container mx-auto px-4 lg:px-8 flex items-center justify-between rounded-full transition-all duration-500",
          scrolled
            ? "glass-dark shadow-elevated max-w-6xl py-2.5"
            : "max-w-7xl py-2",
        )}
      >
        <a href="#top" className="flex items-center gap-2.5 group">
          <span className="h-9 w-9 rounded-xl bg-[var(--gradient-gold)] flex items-center justify-center shadow-gold">
            <Compass className="h-5 w-5 text-navy-deep" strokeWidth={2.5} />
          </span>
          <span className="font-display text-lg font-bold tracking-tight text-white">
            TQGC
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="px-3.5 py-2 text-sm text-white/75 hover:text-white transition-colors rounded-full hover:bg-white/5"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <button
            type="button"
            onClick={toggle}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="h-10 w-10 rounded-full glass-dark flex items-center justify-center text-white hover:text-gold transition-colors"
          >
            {theme === "dark" ? <Sun className="h-4.5 w-4.5" /> : <Moon className="h-4.5 w-4.5" />}
          </button>
          <Button variant="hero" size="lg" asChild>
            <a href="#book">Book Consultation</a>
          </Button>
        </div>

        <div className="lg:hidden flex items-center gap-2">
          <button
            type="button"
            onClick={toggle}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="h-10 w-10 rounded-full glass-dark flex items-center justify-center text-white"
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((s) => !s)}
            className="h-10 w-10 rounded-full glass-dark flex items-center justify-center text-white"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden mt-3 mx-4 rounded-3xl glass-dark p-5 animate-in fade-in slide-in-from-top-2 duration-300">
          <nav className="flex flex-col gap-1">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-xl text-white/80 hover:bg-white/10 hover:text-white text-sm"
              >
                {n.label}
              </a>
            ))}
            <Button variant="hero" size="lg" asChild className="mt-3">
              <a href="#book" onClick={() => setOpen(false)}>
                Book Free Consultation
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}