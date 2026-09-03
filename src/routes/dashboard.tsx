import { createFileRoute, Link } from "@tanstack/react-router";
import {
  CalendarDays,
  ChevronRight,
  Clock3,
  FileText,
  MessageSquareText,
  Plus,
  ReceiptIndianRupee,
  Settings,
  ShieldCheck,
  UserRound,
  Video,
} from "lucide-react";
import { useEffect, useState } from "react";
import { ProductHeader } from "@/components/app/ProductHeader";
import { Button } from "@/components/ui/button";
import { formatInr } from "@/data/experts";
import { usePlatformUser } from "@/hooks/use-platform-user";
import {
  getFrontendBookings,
  subscribeToPlatformStore,
  type FrontendBooking,
} from "@/lib/platform-store";

export const Route = createFileRoute("/dashboard")({
  head: () => ({ meta: [{ title: "My consultations | TQGC" }] }),
  component: DashboardPage,
});

function DashboardPage() {
  const { user, ready } = usePlatformUser();
  const [bookings, setBookings] = useState<FrontendBooking[]>([]);

  useEffect(() => {
    const refresh = () => setBookings(getFrontendBookings());
    refresh();
    return subscribeToPlatformStore(refresh);
  }, []);

  if (!ready)
    return (
      <div className="min-h-screen bg-background">
        <ProductHeader />
      </div>
    );

  if (!user) {
    return (
      <div className="min-h-screen bg-secondary/35">
        <ProductHeader />
        <main className="container mx-auto flex min-h-[calc(100vh-80px)] items-center justify-center px-4">
          <div className="max-w-md rounded-3xl border border-border bg-card p-8 text-center shadow-elevated">
            <UserRound className="mx-auto h-12 w-12 text-primary" />
            <h1 className="mt-5 font-display text-3xl font-bold">
              Your consultation space is private
            </h1>
            <p className="mt-3 text-sm text-muted-foreground">
              Log in with your mobile number to view bookings and account details.
            </p>
            <Button variant="hero" size="xl" asChild className="mt-7 w-full">
              <Link to="/auth">Log in or register</Link>
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
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <div className="text-sm text-muted-foreground">Welcome back</div>
            <h1 className="mt-1 font-display text-4xl font-bold tracking-tight">{user.name}</h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Manage your private consultations and account information.
            </p>
          </div>
          <Button variant="hero" size="lg" asChild>
            <Link to="/experts">
              <Plus className="h-4 w-4" /> Book a consultation
            </Link>
          </Button>
        </div>

        <div className="mt-8 rounded-2xl border border-gold/25 bg-gold/10 p-4 text-sm">
          <div className="flex gap-2">
            <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
            <p>
              <strong>Frontend preview:</strong> this information is stored only in this browser.
              Spring Boot authentication and secure database storage will replace it later.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_300px]">
          <section>
            <div className="flex items-center justify-between gap-4">
              <h2 className="font-display text-2xl font-bold">Upcoming consultations</h2>
              <span className="rounded-full bg-card px-3 py-1 text-xs text-muted-foreground">
                {bookings.length} upcoming
              </span>
            </div>

            {bookings.length ? (
              <div className="mt-5 space-y-4">
                {bookings.map((booking) => (
                  <article
                    key={booking.id}
                    className="rounded-3xl border border-border bg-card p-5 shadow-sm sm:p-6"
                  >
                    <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-start">
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                            {booking.status}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            Reference {booking.id}
                          </span>
                        </div>
                        <h3 className="mt-4 font-display text-xl font-bold">
                          {booking.expertName}
                        </h3>
                        <p className="mt-1 text-sm text-muted-foreground">{booking.expertTitle}</p>
                        <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm">
                          <span className="flex items-center gap-2">
                            <CalendarDays className="h-4 w-4 text-primary" /> {booking.date}
                          </span>
                          <span className="flex items-center gap-2">
                            <Clock3 className="h-4 w-4 text-primary" /> {booking.time} IST
                          </span>
                          <span className="flex items-center gap-2">
                            <Video className="h-4 w-4 text-primary" /> {booking.mode}
                          </span>
                        </div>
                      </div>
                      <div className="sm:text-right">
                        <div className="font-display text-lg font-bold">
                          {formatInr(booking.amount)}
                        </div>
                        <div className="mt-1 text-xs text-muted-foreground">Preview payment</div>
                      </div>
                    </div>
                    <div className="mt-5 flex flex-wrap gap-2 border-t border-border pt-5">
                      <Button variant="brand" size="lg" disabled>
                        <Video className="h-4 w-4" /> Join 10 minutes before
                      </Button>
                      <Button variant="outline" size="lg" disabled>
                        Reschedule
                      </Button>
                      <Link
                        to="/experts/$expertId"
                        params={{ expertId: booking.expertId }}
                        className="inline-flex h-11 items-center px-3 text-sm text-primary"
                      >
                        View expert <ChevronRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="mt-5 rounded-3xl border border-dashed border-border bg-card/50 px-6 py-16 text-center">
                <CalendarDays className="mx-auto h-10 w-10 text-muted-foreground" />
                <h3 className="mt-4 font-display text-xl font-semibold">
                  No consultations booked yet
                </h3>
                <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
                  Browse sample expert profiles, choose a slot and complete the frontend booking
                  flow.
                </p>
                <Button variant="brand" size="lg" asChild className="mt-6">
                  <Link to="/experts">Find an expert</Link>
                </Button>
              </div>
            )}
          </section>

          <aside className="space-y-5">
            <div className="rounded-3xl border border-border bg-card p-5">
              <h2 className="font-display text-lg font-bold">Account</h2>
              <div className="mt-4 space-y-1">
                {[
                  [UserRound, "Profile", user.email],
                  [MessageSquareText, "Messages", "Available with backend"],
                  [FileText, "Documents", "Secure storage later"],
                  [ReceiptIndianRupee, "Payments & invoices", "No live payments"],
                  [Settings, "Privacy & settings", user.phone],
                ].map(([Icon, title, detail]) => (
                  <button
                    key={title as string}
                    type="button"
                    disabled
                    className="flex w-full items-center gap-3 rounded-2xl p-3 text-left disabled:opacity-100"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-muted text-muted-foreground">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-medium">{title as string}</span>
                      <span className="block truncate text-xs text-muted-foreground">
                        {detail as string}
                      </span>
                    </span>
                  </button>
                ))}
              </div>
            </div>
            <div className="rounded-3xl bg-navy p-5 text-white">
              <h3 className="font-display text-lg font-bold">Need help?</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">
                Support, cancellation and grievance workflows will connect to the administrator
                portal.
              </p>
              <a href="/#contact" className="mt-4 inline-flex text-sm font-semibold text-gold">
                Contact support <ChevronRight className="h-4 w-4" />
              </a>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
