import { Link } from "@tanstack/react-router";
import { BadgeCheck, Clock3, Languages, MapPin, Star, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatInr, type Expert } from "@/data/experts";

export function ExpertCard({ expert }: { expert: Expert }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-primary/35 hover:shadow-glow">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={expert.image}
          alt={expert.name}
          width={720}
          height={450}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-transparent to-transparent" />
        <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-navy-deep/75 px-3 py-1 text-xs font-medium text-white backdrop-blur">
          Sample profile
        </span>
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <div className="text-xs text-gold">{expert.category}</div>
          <h2 className="mt-1 font-display text-xl font-semibold">{expert.name}</h2>
          <p className="text-sm text-white/75">{expert.title}</p>
        </div>
      </div>
      <div className="p-5">
        <div className="grid grid-cols-2 gap-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Clock3 className="h-3.5 w-3.5 text-primary" /> {expert.experience} years
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5 text-primary" /> {expert.location}
          </span>
          <span className="flex items-center gap-1.5">
            <Languages className="h-3.5 w-3.5 text-primary" />{" "}
            {expert.languages.slice(0, 2).join(", ")}
          </span>
          <span className="flex items-center gap-1.5">
            <Video className="h-3.5 w-3.5 text-primary" /> {expert.modes.join(" · ")}
          </span>
        </div>
        <div className="mt-4 flex items-center justify-between rounded-2xl bg-gold/10 px-4 py-3 text-sm">
          <span className="flex items-center gap-1.5 font-semibold">
            <Star className="h-4 w-4 fill-gold text-gold" /> {expert.rating}
            <span className="font-normal text-muted-foreground">
              ({expert.reviewCount} reviews)
            </span>
          </span>
          <span className="flex items-center gap-1 text-xs text-primary">
            <BadgeCheck className="h-4 w-4" /> Verified sessions
          </span>
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {expert.specialties.slice(0, 3).map((specialty) => (
            <span
              key={specialty}
              className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground"
            >
              {specialty}
            </span>
          ))}
        </div>
        <div className="mt-5 flex items-end justify-between gap-4 border-t border-border pt-4">
          <div>
            <div className="text-xs text-muted-foreground">From</div>
            <div className="font-display text-lg font-bold">
              {formatInr(expert.price)}{" "}
              <span className="text-xs font-normal text-muted-foreground">
                / {expert.duration} min
              </span>
            </div>
          </div>
          <Button variant="brand" size="lg" asChild>
            <Link to="/experts/$expertId" params={{ expertId: expert.id }}>
              View profile
            </Link>
          </Button>
        </div>
      </div>
    </article>
  );
}
