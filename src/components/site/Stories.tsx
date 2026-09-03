import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { BadgeCheck, Quote, Star } from "lucide-react";
import { experts } from "@/data/experts";

const reviews = experts
  .flatMap((expert) =>
    expert.reviews.map((review) => ({
      ...review,
      expertName: expert.name,
      category: expert.category,
    })),
  )
  .slice(0, 6);

export function Stories() {
  return (
    <section id="stories" className="relative py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            <span className="h-px w-8 bg-primary/40" /> Review experience preview
          </div>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight lg:text-5xl">
            Confidence grows when{" "}
            <span className="text-gradient-brand">experiences are visible.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            These sample reviews demonstrate how feedback from completed bookings will appear once
            the backend verifies attendance.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <motion.figure
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: (index % 3) * 0.07 }}
              className="rounded-3xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-glow"
            >
              <div className="flex items-start justify-between gap-3">
                <Quote className="h-7 w-7 text-primary/35" />
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, star) => (
                    <Star
                      key={star}
                      className={`h-3.5 w-3.5 ${star < review.rating ? "fill-gold text-gold" : "text-border"}`}
                    />
                  ))}
                </div>
              </div>
              <blockquote className="mt-4 text-sm leading-relaxed">“{review.text}”</blockquote>
              <figcaption className="mt-5 border-t border-border pt-4">
                <div className="flex items-end justify-between gap-3">
                  <div>
                    <div className="text-sm font-semibold">{review.author}</div>
                    <div className="text-xs text-muted-foreground">
                      {review.city} · with {review.expertName}
                    </div>
                  </div>
                  <span className="flex items-center gap-1 text-xs text-primary">
                    <BadgeCheck className="h-4 w-4" /> Sample
                  </span>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            to="/experts"
            className="inline-flex rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold hover:border-primary/40"
          >
            Compare expert ratings and reviews
          </Link>
        </div>
      </div>
    </section>
  );
}
