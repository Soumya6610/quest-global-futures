import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, Languages, MapPin, MonitorSmartphone } from "lucide-react";
import { useState } from "react";
import { experts } from "@/data/experts";

const cities = ["Bengaluru", "Hyderabad", "Jaipur", "Mumbai", "New Delhi", "Pune"];

export function Global() {
  const [activeCity, setActiveCity] = useState(cities[0]);
  const cityExperts = experts.filter((expert) => expert.location === activeCity);
  const activeExpert = cityExperts[0];

  return (
    <section id="cities" className="relative border-y border-border bg-secondary/40 py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            <span className="h-px w-8 bg-primary/40" /> Guidance across India
          </div>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-balance lg:text-5xl">
            Local context. <span className="text-gradient-brand">Nationwide access.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Browse by city for in-person availability, or meet by video from anywhere in India.
          </p>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-[1.25fr_0.9fr]">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {cities.map((city) => {
              const selected = activeCity === city;
              const expert = experts.find((item) => item.location === city);
              return (
                <button
                  key={city}
                  type="button"
                  onClick={() => setActiveCity(city)}
                  className={`group rounded-2xl border p-5 text-left transition-all ${
                    selected
                      ? "-translate-y-1 border-primary bg-primary text-primary-foreground shadow-glow"
                      : "border-border bg-card hover:-translate-y-0.5 hover:border-primary/40"
                  }`}
                >
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-xl ${selected ? "bg-white/15" : "bg-primary/10 text-primary"}`}
                  >
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div className="mt-4 font-display text-lg font-semibold">{city}</div>
                  <div
                    className={`mt-1 text-xs ${selected ? "text-primary-foreground/75" : "text-muted-foreground"}`}
                  >
                    {expert?.category ?? "Online consultations"}
                  </div>
                </button>
              );
            })}
          </div>

          <motion.article
            key={activeCity}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="rounded-3xl border border-border bg-card p-7 shadow-elevated"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/15 text-gold">
                <MapPin className="h-6 w-6" />
              </span>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">
                  Featured city
                </div>
                <h3 className="font-display text-2xl font-bold">{activeCity}</h3>
              </div>
            </div>
            {activeExpert && (
              <div className="mt-6">
                <div className="text-sm text-muted-foreground">Sample expert in this city</div>
                <div className="mt-2 font-display text-xl font-semibold">{activeExpert.name}</div>
                <div className="mt-1 text-sm text-muted-foreground">{activeExpert.title}</div>
                <dl className="mt-5 space-y-3 border-y border-border py-5 text-sm">
                  <div className="flex items-center justify-between gap-4">
                    <dt className="flex items-center gap-2 text-muted-foreground">
                      <Languages className="h-4 w-4" /> Languages
                    </dt>
                    <dd className="text-right">{activeExpert.languages.join(", ")}</dd>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <dt className="flex items-center gap-2 text-muted-foreground">
                      <MonitorSmartphone className="h-4 w-4" /> Available by
                    </dt>
                    <dd className="text-right">{activeExpert.modes.join(" · ")}</dd>
                  </div>
                </dl>
                <Link
                  to="/experts"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary"
                >
                  Explore experts by city <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            )}
          </motion.article>
        </div>
      </div>
    </section>
  );
}
