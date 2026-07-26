import type { Project } from "@/content/projects";

const fieldLabel =
  "font-mono text-xs uppercase tracking-[0.12em] text-ink-muted";

export function ProjectRow({ project }: { project: Project }) {
  return (
    <details className="group py-6 sm:py-7">
      <summary
        className="flex cursor-pointer items-start justify-between gap-6 outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-paper rounded-sm"
      >
        <div>
          <p className={fieldLabel}>{project.category}</p>
          <h3 className="mt-1 text-lg font-medium text-ink sm:text-xl">
            {project.title}
          </h3>
          <p className="mt-2 max-w-xl text-ink-muted">{project.problem}</p>
        </div>
        <span
          className="mt-1 shrink-0 text-xl leading-none text-accent transition-transform duration-150 motion-reduce:transition-none group-open:rotate-45"
          aria-hidden="true"
        >
          +
        </span>
      </summary>

      <div className="mt-6 max-w-xl space-y-5">
        <div>
          <p className={fieldLabel}>Built</p>
          <p className="mt-1 text-ink">{project.built}</p>
        </div>
        <div>
          <p className={fieldLabel}>Outcome</p>
          <p className="mt-1 text-ink">{project.outcome}</p>
        </div>
        <div>
          <p className={fieldLabel}>Hardest part</p>
          <p className="mt-1 text-ink">{project.hardestPart}</p>
        </div>
        <div>
          <p className={fieldLabel}>Stack</p>
          <p className="mt-1 font-mono text-sm text-ink-muted">
            {project.stack.join(" · ")}
          </p>
        </div>
      </div>
    </details>
  );
}
