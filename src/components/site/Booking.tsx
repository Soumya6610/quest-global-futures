import { Link } from "@tanstack/react-router";
import { ArrowRight, CalendarDays, IndianRupee, Languages, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Booking() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] bg-navy p-8 text-white shadow-elevated lg:p-14">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                Ready when you are
              </div>
              <h2 className="mt-4 max-w-2xl font-display text-4xl font-bold tracking-tight lg:text-5xl">
                Book with information—not pressure.
              </h2>
              <p className="mt-5 max-w-xl leading-relaxed text-white/65">
                See the fee, session length, language and next available slot before creating your
                account. Registration is required only when you are ready to reserve.
              </p>
              <Button variant="hero" size="xl" asChild className="mt-8">
                <Link to="/experts">
                  Browse consultations <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                [CalendarDays, "Real slot selection", "Dates and times displayed in IST"],
                [IndianRupee, "Transparent INR pricing", "Gateway checkout added with backend"],
                [Languages, "Language preferences", "English, Hindi and regional options"],
                [ShieldCheck, "Private account boundary", "Bookings and documents require login"],
              ].map(([Icon, title, description]) => (
                <div key={title as string} className="rounded-2xl glass-dark p-5">
                  <Icon className="h-5 w-5 text-gold" />
                  <div className="mt-3 text-sm font-semibold">{title as string}</div>
                  <div className="mt-1 text-xs leading-relaxed text-white/55">
                    {description as string}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
