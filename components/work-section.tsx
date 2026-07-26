import { projects } from "@/content/projects";
import { Container } from "./container";
import { ProjectRow } from "./project-row";

export function WorkSection() {
  return (
    <section id="work" className="border-t border-hairline py-20 sm:py-28">
      <Container>
        <div className="flex items-baseline gap-3">
          <span className="font-mono text-sm text-accent">01</span>
          <h2 className="text-2xl font-medium tracking-tight text-ink sm:text-3xl">
            Selected work
          </h2>
        </div>

        <div className="mt-10 divide-y divide-hairline border-t border-b border-hairline">
          {projects.map((project) => (
            <ProjectRow key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
