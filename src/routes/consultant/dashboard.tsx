import { createFileRoute, Link } from "@tanstack/react-router";
import {
  BadgeCheck,
  BarChart3,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Clock3,
  IndianRupee,
  MapPin,
  MessageSquareText,
  Settings,
  ShieldCheck,
  Star,
  UsersRound,
} from "lucide-react";
import { useEffect, useState } from "react";
import { ProductHeader } from "@/components/app/ProductHeader";
import { Button } from "@/components/ui/button";
import { formatInr } from "@/data/experts";
import {
  getConsultantApplication,
  subscribeToPlatformStore,
  type FrontendConsultantApplication,
} from "@/lib/platform-store";

export const Route = createFileRoute("/consultant/dashboard")({
  head: () => ({ meta: [{ title: "Consultant dashboard | TQGC" }] }),
  component: ConsultantDashboardPage,
});

const cityDemand = [
  { city: "Bengaluru", enquiries: 128, width: "100%" },
  { city: "Mumbai", enquiries: 104, width: "81%" },
  { city: "New Delhi", enquiries: 96, width: "75%" },
  { city: "Hyderabad", enquiries: 79, width: "62%" },
  { city: "Pune", enquiries: 68, width: "53%" },
];

function ConsultantDashboardPage() {
  const [application, setApplication] = useState<FrontendConsultantApplication | null>(null);

  useEffect(() => {
    const refresh = () => setApplication(getConsultantApplication());
    refresh();
    return subscribeToPlatformStore(refresh);
  }, []);

  if (!application) {
    return (
      <div className="min-h-screen bg-secondary/35">
        <ProductHeader />
        <main className="container mx-auto flex min-h-[calc(100vh-80px)] items-center justify-center px-4 py-12">
          <div className="max-w-lg rounded-3xl border border-border bg-card p-8 text-center shadow-elevated">
            <UsersRound className="mx-auto h-12 w-12 text-primary" />
            <h1 className="mt-5 font-display text-3xl font-bold">
              Create your consultant profile first
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Submit your expertise, city, pricing and credential information before opening the
              consultant dashboard.
            </p>
            <Button variant="hero" size="xl" asChild className="mt-7 w-full">
              <Link to="/consultant/apply">Register as a consultant</Link>
            </Button>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-secondary/35">
      <ProductHeader />
      <main className="container mx-auto px-4 py-8 lg:px-8 lg:py-12">
        <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-gold/15 px-3 py-1 text-xs font-semibold text-foreground">
                {application.status}
              </span>
              <span className="text-xs text-muted-foreground">Application {application.id}</span>
            </div>
            <h1 className="mt-3 font-display text-4xl font-bold tracking-tight">
              Welcome, {application.name}
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Manage your practice profile, availability, city reach and client experience.
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="lg" disabled>
              <Settings className="h-4 w-4" /> Edit profile
            </Button>
            <Button variant="brand" size="lg" disabled>
              <CalendarDays className="h-4 w-4" /> Add availability
            </Button>
          </div>
        </div>

        <div className="mt-7 flex gap-3 rounded-2xl border border-gold/25 bg-gold/10 p-4 text-sm leading-relaxed">
          <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
          <p>
            <strong>Your profile is not public yet.</strong> Admin approval will require identity,
            qualification and professional-registration checks. Scheduling and earnings are preview
            data until the backend is connected.
          </p>
        </div>

        <section className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {[
            [CalendarDays, "Upcoming sessions", "0", "Available after approval"],
            [MessageSquareText, "New enquiries", "0", "Client messaging later"],
            [Star, "Average rating", "—", "After completed sessions"],
            [IndianRupee, "Preview earnings", formatInr(0), "Secure payout setup later"],
          ].map(([Icon, label, value, detail]) => (
            <article key={label as string} className="rounded-3xl border border-border bg-card p-5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </span>
              <div className="mt-4 text-xs text-muted-foreground">{label as string}</div>
              <div className="mt-1 font-display text-2xl font-bold">{value as string}</div>
              <div className="mt-1 text-xs text-muted-foreground">{detail as string}</div>
            </article>
          ))}
        </section>

        <div className="mt-8 grid gap-8 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-8">
            <section className="rounded-3xl border border-border bg-card p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-primary" />
                    <h2 className="font-display text-xl font-bold">Demand by city</h2>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Illustrative marketplace enquiries across major Indian cities.
                  </p>
                </div>
                <span className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">
                  Last 30 days
                </span>
              </div>
              <div className="mt-6 space-y-4">
                {cityDemand.map((item) => (
                  <div key={item.city}>
                    <div className="mb-2 flex items-center justify-between text-sm">
                      <span className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" />
                        {item.city}
                      </span>
                      <strong>{item.enquiries}</strong>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-muted">
                      <div
                        className="h-full rounded-full bg-[var(--gradient-gold)]"
                        style={{ width: item.width }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl bg-primary/8 p-4 text-sm">
                Your primary city is <strong>{application.city}</strong>. Video consultations can
                remain discoverable across all supported cities.
              </div>
            </section>

            <section className="rounded-3xl border border-border bg-card p-6">
              <div className="flex items-center justify-between gap-4">
                <h2 className="font-display text-xl font-bold">Schedule</h2>
                <span className="text-xs text-muted-foreground">IST timezone</span>
              </div>
              <div className="mt-8 rounded-2xl border border-dashed border-border px-5 py-10 text-center">
                <Clock3 className="mx-auto h-9 w-9 text-muted-foreground" />
                <h3 className="mt-3 font-display text-lg font-semibold">
                  No availability published
                </h3>
                <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
                  After approval, add recurring hours, breaks and in-person locations from this
                  dashboard.
                </p>
              </div>
            </section>
          </div>

          <aside className="space-y-6">
            <section className="rounded-3xl border border-border bg-card p-6">
              <div className="flex items-center gap-2">
                <BadgeCheck className="h-5 w-5 text-primary" />
                <h2 className="font-display text-xl font-bold">Profile readiness</h2>
              </div>
              <div className="mt-5 h-2 overflow-hidden rounded-full bg-muted">
                <div className="h-full w-3/5 rounded-full bg-primary" />
              </div>
              <div className="mt-2 text-right text-xs text-muted-foreground">60% complete</div>
              <div className="mt-5 space-y-3 text-sm">
                {[
                  [true, "Contact and practice information"],
                  [true, "City, languages and pricing"],
                  [false, "Government identity verification"],
                  [false, "Qualification document review"],
                  [false, "Bank and tax information"],
                ].map(([done, label]) => (
                  <div key={label as string} className="flex items-center gap-2">
                    <CheckCircle2
                      className={`h-4 w-4 ${done ? "text-primary" : "text-muted-foreground/40"}`}
                    />
                    <span className={done ? "" : "text-muted-foreground"}>{label as string}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-3xl bg-navy p-6 text-white">
              <div className="text-xs uppercase tracking-[0.16em] text-gold">Profile preview</div>
              <h2 className="mt-3 font-display text-2xl font-bold">{application.name}</h2>
              <p className="mt-1 text-sm text-white/65">{application.title}</p>
              <div className="mt-5 space-y-2 text-sm text-white/75">
                <div>{application.category}</div>
                <div>
                  {application.experience} years · {application.city}
                </div>
                <div>{application.languages.join(", ")}</div>
                <div>{application.modes.join(" · ")}</div>
                <div className="pt-2 font-semibold text-gold">
                  {formatInr(application.fee)} per session
                </div>
              </div>
              <button
                type="button"
                disabled
                className="mt-5 inline-flex items-center text-sm font-semibold text-white/45"
              >
                Public preview after approval <ChevronRight className="h-4 w-4" />
              </button>
            </section>
          </aside>
        </div>
      </main>
    </div>
  );
}
