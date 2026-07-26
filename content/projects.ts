export type Project = {
  slug: string;
  title: string;
  category: string;
  problem: string;
  built: string;
  outcome: string;
  hardestPart: string;
  stack: string[];
};

export const projects: Project[] = [
  {
    slug: "athlete-performance-analytics",
    title: "Athlete performance analytics",
    category: "Sports technology",
    problem:
      "Coaching staff read player performance out of spreadsheets days after a match, too late to change the training week.",
    built:
      "An ingest pipeline for GPS, video-tag, and wearable feeds; a .NET API with per-club data isolation; a Next.js dashboard for squad load and per-player trend.",
    outcome:
      "Match data reaches coaching staff the same day instead of the following week.",
    hardestPart:
      "Every club exported a different format. Normalisation had to be forgiving without silently corrupting a season of data.",
    stack: ["Next.js", ".NET", "PostgreSQL", "Azure"],
  },
  {
    slug: "carrier-invoice-auditing",
    title: "Automated carrier invoice auditing",
    category: "Telecom expense",
    problem:
      "A small team hand-checked carrier invoices against contracted rates every month. Overbilling was caught by luck, not process.",
    built:
      "A rate-parsing engine for contract terms and tariff tables; line-item extraction with per-field confidence scores; an exception queue so only ambiguous items reach a human.",
    outcome:
      "Routine invoices clear without human review; analysts spend their time on genuine exceptions.",
    hardestPart:
      "A wrong dispute costs more than a missed one, so the system was tuned to abstain rather than guess.",
    stack: ["Python", "FastAPI", "Celery", "OCR", "LLM extraction"],
  },
  {
    slug: "ap-document-intelligence",
    title: "Accounts payable document intelligence",
    category: "Fintech",
    problem:
      "Vendor invoices arrived in hundreds of layouts. Header fields were manageable; line items kept breaking.",
    built:
      "Layout-agnostic header and line-item extraction; retrieval over previously approved invoices per vendor; an evaluation harness gating every prompt and model change.",
    outcome:
      "Line-item extraction became reliable enough to run unattended, with a fixed test set proving it before each release.",
    hardestPart:
      "Accuracy claims are meaningless without evals. The test harness was built before the features.",
    stack: ["Python", "RAG", "pgvector", "Observability tooling"],
  },
  {
    slug: "resident-care-platform-hipaa",
    title: "Resident care platform under HIPAA",
    category: "Senior living",
    problem:
      "Care records spanned many communities, under HIPAA, on a legacy schema that could not be taken offline.",
    built:
      "ASP.NET Core services with role-based access down to the field; an append-only audit trail on every PHI read and write; a zero-downtime migration off the legacy schema.",
    outcome:
      "The platform cleared compliance review and the legacy schema was retired without a maintenance window.",
    hardestPart:
      "Compliance is a design constraint, not a final checklist. Access rules had to live in one place and be enforced once.",
    stack: ["C#", "ASP.NET Core", "EF Core", "SQL Server"],
  },
  {
    slug: "lien-resolution-platform",
    title: "Lien resolution platform",
    category: "Legal technology",
    problem:
      "Lien resolution ran on email threads, PDFs, and a shared spreadsheet. Nobody could say where a case stood.",
    built:
      "A Django workflow engine with explicit case states and deadlines; a React portal for law firms and claimants; structured intake and document generation.",
    outcome:
      "Case status became visible to everyone involved, and deadline tracking moved from memory to the system.",
    hardestPart:
      "Legal deadlines are hard deadlines. State transitions had to be provable and every document traceable to its source.",
    stack: ["Django", "React", "PostgreSQL", "Celery", "S3"],
  },
];
