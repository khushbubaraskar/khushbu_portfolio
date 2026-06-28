import { type ReactNode } from "react";
import { Reveal, TextReveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

/** Consistent eyebrow + heading block used at the top of each section. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow: string;
  title: string;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <Reveal>
        <span className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          {eyebrow}
        </span>
      </Reveal>
      <TextReveal
        as="h2"
        text={title}
        delay={0.05}
        className="mt-6 block text-4xl font-semibold leading-[1.05] sm:text-5xl md:text-6xl"
      />
      {description && (
        <Reveal delay={0.15}>
          <p
            className={cn(
              "mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg",
              align === "center" && "mx-auto",
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
