export const hero = {
  greeting: "Hi, I'm Richard, a senior full-stack and AI engineer.",
  intro:
    "I build backends, web applications, and AI systems for teams who need the result to still work at 3am. Software that's built to survive contact with production, not just launch.",
  // TODO: confirm quarter. Swap in e.g. "starting Q1 2026" once the timing is locked.
  availability: "Available for one new project.",
  stack: ["Next.js", "TypeScript", ".NET", "Python", "PostgreSQL", "Azure"],
};

export type Phase = {
  title: string;
  body: string;
};

export const phases: Phase[] = [
  {
    title: "Plan",
    body: "Before code: the constraint most likely to break this, the data model, and a written definition of done. Usually a week, and the cheapest week of the project.",
  },
  {
    title: "Build",
    body: "Small increments behind tests and CI. Working software every week, no reveal at the end.",
  },
  {
    title: "Operate",
    body: "Monitoring, runbooks, cost controls, and a real handover. Being paged by your own systems changes how you design them.",
  },
];

export type Capability = {
  title: string;
  body: string;
};

export const capabilities: Capability[] = [
  {
    title: ".NET backends",
    body: "ASP.NET Core, EF Core, REST and gRPC, background workers, event-driven workflows.",
  },
  {
    title: "Next.js applications",
    body: "React, TypeScript, server rendering, dense dashboards and admin portals, accessibility and Core Web Vitals as requirements.",
  },
  {
    title: "AI in production",
    body: "Python, FastAPI, retrieval, embeddings, and agents, backed by evals, tracing, and a cost ceiling.",
  },
  {
    title: "Architecture and delivery",
    body: "System design, database design, integrations, CI/CD, cloud deployment, monitoring, documentation, production support.",
  },
];

export const about = {
  body: "A decade building systems that carry money, health records, and legal deadlines, where being wrong is expensive. Works directly with founders and engineering leads; no account manager in between and no handoff to a junior team after signing.",
};

export const contact = {
  name: "Richard",
  email: "richardmb_1981@outlook.com",
  github: "https://github.com/richardmb38",
  githubLabel: "GitHub",
  invitation:
    "Send the problem, the stack, and the deadline. Expect a straight answer on fit within a day, including if the answer is no.",
};
