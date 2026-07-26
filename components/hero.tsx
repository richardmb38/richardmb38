import Image from "next/image";
import { hero } from "@/content/site";
import { Container } from "./container";

export function Hero() {
  return (
    <section id="top" className="pt-20 pb-20 sm:pt-28 sm:pb-28">
      <Container>
        <div className="animate-fade-up grid gap-10 sm:grid-cols-[minmax(0,1fr)_260px] sm:items-start sm:gap-12">
          <div>
            <p className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-ink-muted">
              <span
                className="h-1.5 w-1.5 rounded-full bg-accent"
                aria-hidden="true"
              />
              {hero.availability}
            </p>
            <h1 className="mt-6 text-[clamp(1.875rem,3vw+1.25rem,3.25rem)] font-medium leading-[1.15] tracking-tight text-ink">
              {hero.greeting}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted sm:text-xl">
              {hero.intro}
            </p>
            <p className="mt-8 font-mono text-sm text-ink-muted">
              {hero.stack.join(" · ")}
            </p>
          </div>

          <div className="sm:justify-self-end">
            <div className="w-full max-w-[260px] overflow-hidden border border-hairline">
              <Image
                src="/photo.jpg"
                alt="Richard, senior full-stack and AI engineer"
                width={769}
                height={567}
                priority
                sizes="260px"
                className="h-auto w-full"
              />
            </div>
            <p className="mt-3 font-mono text-xs text-ink-muted">
              Richard, remote
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
