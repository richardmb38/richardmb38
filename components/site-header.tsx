import { contact } from "@/content/site";
import { Container } from "./container";

const focusRing =
  "outline-none rounded-sm focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-paper";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 border-b border-hairline bg-paper/90 backdrop-blur-sm">
      <Container className="flex items-center justify-between py-4">
        <a href="#top" className={`font-mono text-sm text-ink ${focusRing}`}>
          {contact.name}
        </a>
        <div className="flex items-center gap-6">
          <a
            href={contact.github}
            target="_blank"
            rel="noreferrer"
            className={`text-sm text-ink-muted underline decoration-hairline decoration-2 underline-offset-4 transition-colors hover:text-ink hover:decoration-accent ${focusRing}`}
          >
            {contact.githubLabel}
          </a>
          <a
            href={`mailto:${contact.email}`}
            className={`text-sm font-medium text-ink underline decoration-hairline decoration-2 underline-offset-4 transition-colors hover:decoration-accent ${focusRing}`}
          >
            Email
          </a>
        </div>
      </Container>
    </header>
  );
}
