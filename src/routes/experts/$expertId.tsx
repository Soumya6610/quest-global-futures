import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ArrowLeft,
  BadgeCheck,
  CalendarDays,
  CheckCircle2,
  Clock3,
  GraduationCap,
  Languages,
  MapPin,
  Quote,
  ShieldCheck,
  Star,
  Video,
} from "lucide-react";
import { ProductFooter } from "@/components/app/ProductFooter";
import { ProductHeader } from "@/components/app/ProductHeader";
import { Button } from "@/components/ui/button";
import { formatInr, getExpert } from "@/data/experts";

export const Route = createFileRoute("/experts/$expertId")({
  loader: ({ params }) => {
    const expert = getExpert(params.expertId);
    if (!expert) throw notFound();
    return expert;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.name ?? "Consultant"} | TQGC` },
      {
        name: "description",
        content: loaderData?.about ?? "View consultant details and book a one-to-one session.",
      },
    ],
  }),
  component: ExpertProfilePage,
});

function ExpertProfilePage() {
  const expert = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-background">
      <ProductHeader />
      <main>
        <section className="border-b border-border bg-secondary/40 py-8">
          <div className="container mx-auto px-4 lg:px-8">
            <Link
              to="/experts"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" /> Back to all experts
            </Link>
          </div>
        </section>

        <section className="container mx-auto grid gap-10 px-4 py-10 lg:grid-cols-[1fr_360px] lg:px-8 lg:py-14">
          <div>
            <div className="grid gap-7 md:grid-cols-[220px_1fr] md:items-start">
              <div className="overflow-hidden rounded-3xl border border-border bg-card">
                <img
                  src={expert.image}
                  alt={expert.name}
                  width={640}
                  height={800}
                  className="aspect-[4/5] h-full w-full object-cover"
                />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    {expert.category}
                  </span>
                  <span className="rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs font-medium">
                    Sample profile
                  </span>
                </div>
                <h1 className="mt-4 font-display text-4xl font-bold tracking-tight lg:text-5xl">
                  {expert.name}
                </h1>
                <p className="mt-2 text-lg text-muted-foreground">{expert.title}</p>
                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <span className="flex items-center gap-1.5 rounded-full bg-gold/12 px-3 py-1.5 text-sm font-semibold">
                    <Star className="h-4 w-4 fill-gold text-gold" /> {expert.rating}
                    <span className="font-normal text-muted-foreground">
                      from {expert.reviewCount} reviews
                    </span>
                  </span>
                  <span className="flex items-center gap-1 text-xs text-primary">
                    <BadgeCheck className="h-4 w-4" /> Reviews from completed bookings
                  </span>
                </div>
                <div className="mt-6 grid gap-3 text-sm sm:grid-cols-2">
                  <span className="flex items-center gap-2">
                    <Clock3 className="h-4 w-4 text-primary" /> {expert.experience} years experience
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" /> {expert.location}, India
                  </span>
                  <span className="flex items-center gap-2">
                    <Languages className="h-4 w-4 text-primary" /> {expert.languages.join(", ")}
                  </span>
                  <span className="flex items-center gap-2">
                    <Video className="h-4 w-4 text-primary" /> {expert.modes.join(" · ")}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-10 space-y-8">
              <section>
                <h2 className="font-display text-2xl font-bold">About</h2>
                <p className="mt-3 max-w-3xl leading-relaxed text-muted-foreground">
                  {expert.about}
                </p>
              </section>
              <section>
                <h2 className="font-display text-2xl font-bold">Areas of consultation</h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {expert.specialties.map((specialty) => (
                    <span
                      key={specialty}
                      className="rounded-full border border-border bg-card px-4 py-2 text-sm"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </section>
              <section className="rounded-3xl border border-border bg-card p-6">
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  <h2 className="font-display text-xl font-bold">Qualifications</h2>
                </div>
                <ul className="mt-4 space-y-3">
                  {expert.qualifications.map((qualification) => (
                    <li
                      key={qualification}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{" "}
                      {qualification}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex gap-2 rounded-2xl bg-gold/10 p-4 text-sm">
                  <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <p>
                    Credential records and registration numbers will be connected to the admin
                    verification workflow with the backend.
                  </p>
                </div>
              </section>
              <section>
                <h2 className="font-display text-2xl font-bold">Consultation approach</h2>
                <p className="mt-3 max-w-3xl leading-relaxed text-muted-foreground">
                  {expert.approach}
                </p>
              </section>
              <section id="reviews">
                <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
                  <div>
                    <h2 className="font-display text-2xl font-bold">Client reviews</h2>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Feedback is displayed only after a completed consultation.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 rounded-full bg-gold/12 px-4 py-2 text-sm font-semibold">
                    <Star className="h-4 w-4 fill-gold text-gold" /> {expert.rating} ·{" "}
                    {expert.reviewCount} reviews
                  </div>
                </div>
                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  {expert.reviews.map((review) => (
                    <article
                      key={review.id}
                      className="rounded-3xl border border-border bg-card p-5"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <Quote className="h-6 w-6 text-primary/35" />
                        <div
                          className="flex gap-0.5"
                          aria-label={`${review.rating} out of 5 stars`}
                        >
                          {Array.from({ length: 5 }).map((_, index) => (
                            <Star
                              key={index}
                              className={`h-3.5 w-3.5 ${index < review.rating ? "fill-gold text-gold" : "text-border"}`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                        “{review.text}”
                      </p>
                      <div className="mt-5 flex items-end justify-between gap-3 border-t border-border pt-4">
                        <div>
                          <div className="text-sm font-semibold">{review.author}</div>
                          <div className="text-xs text-muted-foreground">
                            {review.city} · {review.date}
                          </div>
                        </div>
                        {review.verified && (
                          <span className="flex items-center gap-1 text-xs text-primary">
                            <BadgeCheck className="h-4 w-4" /> Verified booking
                          </span>
                        )}
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            </div>
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-3xl border border-border bg-card p-6 shadow-elevated">
              <div className="text-sm text-muted-foreground">One-to-one consultation</div>
              <div className="mt-1 font-display text-3xl font-bold">{formatInr(expert.price)}</div>
              <div className="mt-1 text-sm text-muted-foreground">
                {expert.duration} minutes · Taxes shown at checkout
              </div>
              <a
                href="#reviews"
                className="mt-4 flex items-center justify-between rounded-2xl border border-border p-3 text-sm hover:border-primary/40"
              >
                <span className="flex items-center gap-2 font-semibold">
                  <Star className="h-4 w-4 fill-gold text-gold" /> {expert.rating} rating
                </span>
                <span className="text-xs text-primary">Read {expert.reviewCount} reviews</span>
              </a>
              <div className="mt-5 rounded-2xl bg-primary/8 p-4">
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <CalendarDays className="h-4 w-4 text-primary" /> Next available
                </div>
                <div className="mt-1 text-sm text-muted-foreground">{expert.nextAvailable}</div>
              </div>
              <Button variant="hero" size="xl" asChild className="mt-5 w-full">
                <Link to="/book/$expertId" params={{ expertId: expert.id }}>
                  Choose a slot
                </Link>
              </Button>
              <p className="mt-4 text-center text-xs leading-relaxed text-muted-foreground">
                No payment is collected in this frontend preview. Cancellation rules will be
                displayed before live checkout.
              </p>
            </div>
          </aside>
        </section>
      </main>
      <ProductFooter />
    </div>
  );
}
