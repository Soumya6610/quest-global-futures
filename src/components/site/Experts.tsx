import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { ExpertCard } from "@/components/app/ExpertCard";
import { Button } from "@/components/ui/button";
import { experts } from "@/data/experts";

export function Experts() {
  return (
    <section id="experts" className="border-y border-border bg-secondary/40 py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Explore sample profiles
            </div>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight lg:text-5xl">
              Choose based on fit, not a generic recommendation.
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              The frontend shows the information every real profile should provide. Credentials and
              registrations will require admin verification before publication.
            </p>
          </div>
          <Button variant="outline" size="lg" asChild>
            <Link to="/experts">
              View all experts <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {experts.map((expert) => (
            <ExpertCard key={expert.id} expert={expert} />
          ))}
        </div>
      </div>
    </section>
  );
}
