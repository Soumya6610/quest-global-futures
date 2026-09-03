import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Search, SlidersHorizontal, Sparkles, UserRoundPlus } from "lucide-react";
import { useMemo, useState } from "react";
import { ExpertCard } from "@/components/app/ExpertCard";
import { ProductFooter } from "@/components/app/ProductFooter";
import { ProductHeader } from "@/components/app/ProductHeader";
import { consultationCategories, consultationCities, experts } from "@/data/experts";

export const Route = createFileRoute("/experts/")({
  head: () => ({
    meta: [
      { title: "Find a consultant in India | TQGC" },
      {
        name: "description",
        content:
          "Browse one-to-one career, education, study abroad and mental wellness consultants.",
      },
    ],
  }),
  component: ExpertsPage,
});

function ExpertsPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<(typeof consultationCategories)[number]>("All");
  const [language, setLanguage] = useState("All languages");
  const [mode, setMode] = useState("All modes");
  const [city, setCity] = useState("All cities");

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return experts.filter((expert) => {
      const searchable = [
        expert.name,
        expert.title,
        expert.category,
        expert.location,
        ...expert.languages,
        ...expert.specialties,
      ]
        .join(" ")
        .toLowerCase();
      return (
        (!normalized || searchable.includes(normalized)) &&
        (category === "All" || expert.category === category) &&
        (city === "All cities" || expert.location === city) &&
        (language === "All languages" || expert.languages.includes(language)) &&
        (mode === "All modes" || expert.modes.includes(mode as (typeof expert.modes)[number]))
      );
    });
  }, [category, city, language, mode, query]);

  return (
    <div className="min-h-screen bg-background">
      <ProductHeader />
      <main>
        <section className="relative overflow-hidden border-b border-border bg-navy py-16 text-white">
          <div className="absolute inset-0 bg-aurora opacity-50" />
          <div className="container relative mx-auto px-4 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/75">
                <Sparkles className="h-3.5 w-3.5 text-gold" /> India-first consultation marketplace
              </div>
              <h1 className="mt-5 font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Find the right expert for your next decision.
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/70">
                Compare specialties, languages, formats, fees and availability before booking a
                private one-to-one consultation.
              </p>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-10 lg:px-8 lg:py-14">
          <div className="rounded-3xl border border-border bg-card p-5 shadow-elevated lg:p-6">
            <div className="flex items-center gap-2 text-sm font-semibold">
              <SlidersHorizontal className="h-4 w-4 text-primary" /> Find your match
            </div>
            <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-[1.5fr_repeat(3,1fr)]">
              <label className="relative">
                <span className="sr-only">Search experts</span>
                <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search by concern, expert or speciality"
                  className="h-12 w-full rounded-xl border border-border bg-background pl-11 pr-4 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/15"
                />
              </label>
              <select
                aria-label="City"
                value={city}
                onChange={(event) => setCity(event.target.value)}
                className="h-12 rounded-xl border border-border bg-background px-4 text-sm outline-none focus:border-primary"
              >
                {consultationCities.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
              <select
                aria-label="Language"
                value={language}
                onChange={(event) => setLanguage(event.target.value)}
                className="h-12 rounded-xl border border-border bg-background px-4 text-sm outline-none focus:border-primary"
              >
                {["All languages", "English", "Hindi", "Malayalam", "Marathi"].map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
              <select
                aria-label="Consultation mode"
                value={mode}
                onChange={(event) => setMode(event.target.value)}
                className="h-12 rounded-xl border border-border bg-background px-4 text-sm outline-none focus:border-primary"
              >
                {["All modes", "Video", "Chat", "In-person"].map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {consultationCategories.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setCategory(item)}
                  className={`rounded-full border px-4 py-2 text-sm transition-colors ${category === item ? "border-primary bg-primary text-primary-foreground" : "border-border bg-background hover:border-primary/40"}`}
                >
                  {item}
                </button>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-border pt-4">
              <span className="mr-1 flex items-center gap-1.5 text-xs font-semibold text-muted-foreground">
                <MapPin className="h-3.5 w-3.5" /> Browse by city
              </span>
              {consultationCities.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setCity(item)}
                  className={`rounded-full px-3 py-1.5 text-xs ${city === item ? "bg-gold text-navy-deep font-semibold" : "bg-muted text-muted-foreground hover:text-foreground"}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-9 flex items-center justify-between gap-4">
            <div>
              <h2 className="font-display text-2xl font-bold">Available consultants</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                {filtered.length} sample {filtered.length === 1 ? "profile" : "profiles"} match your
                filters
              </p>
            </div>
            <span className="hidden rounded-full bg-gold/15 px-4 py-2 text-xs font-medium text-foreground sm:block">
              Frontend preview data
            </span>
          </div>

          {filtered.length ? (
            <div className="mt-6 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
              {filtered.map((expert) => (
                <ExpertCard key={expert.id} expert={expert} />
              ))}
            </div>
          ) : (
            <div className="mt-6 rounded-3xl border border-dashed border-border py-20 text-center">
              <h3 className="font-display text-xl font-semibold">No exact matches yet</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Try removing one of the filters or searching for a broader concern.
              </p>
            </div>
          )}

          <div className="mt-12 flex flex-col items-start justify-between gap-5 rounded-3xl bg-navy p-7 text-white sm:flex-row sm:items-center lg:p-9">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-gold">
                <UserRoundPlus className="h-4 w-4" /> For professionals
              </div>
              <h2 className="mt-3 font-display text-2xl font-bold">Want to offer consultations?</h2>
              <p className="mt-2 max-w-2xl text-sm text-white/65">
                Apply with your city, expertise, pricing and credentials. Profiles become bookable
                only after administrator verification.
              </p>
            </div>
            <Link
              to="/consultant/apply"
              className="inline-flex h-12 shrink-0 items-center justify-center rounded-xl bg-gold px-5 text-sm font-semibold text-navy-deep"
            >
              Register as a consultant
            </Link>
          </div>
        </section>
      </main>
      <ProductFooter />
    </div>
  );
}
