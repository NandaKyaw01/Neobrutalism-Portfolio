export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "Systems / Backend" | "Full-Stack" | "Cloud / DevOps" | "Open Source";
  featured: boolean;
  color: string;
  description: string;
  metrics: { label: string; value: string }[];
  stack: string[];
  githubUrl: string;
  liveUrl: string;
  architectureDetails: {
    problem: string;
    solution: string;
    throughput: string;
    keyHighlights: string[];
  };
  mockupSnippet: string;
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  company: string;
  location: string;
  type: string;
  accentColor: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface SkillCategory {
  category: string;
  color: string;
  skills: { name: string; level: string; highlight?: boolean }[];
}

export const PERSONAL_INFO = {
  name: "ALEX CHEN",
  handle: "@alexchen_dev",
  title: "Senior Full-Stack & Systems Engineer",
  tagline: "ARCHITECTING RESILIENT DISTRIBUTED BACKENDS & ULTRA-RESPONSIVE INTERFACES.",
  bio: "7+ years designing high-throughput distributed microservices, low-latency APIs, and uncompromisingly snappy web applications. Obsessed with clean architectural boundaries, zero-fluff software, and robust neobrutalist ergonomics.",
  status: "AVAILABLE FOR SELECT CONTRACTS & LEADERSHIP ROLES",
  location: "SAN FRANCISCO, CA / REMOTE",
  email: "alex.chen.systems@gmail.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  twitter: "https://x.com",
  stats: [
    { label: "EXPERIENCE", value: "7+ YEARS" },
    { label: "PROD SERVICES", value: "34 DEPLOYED" },
    { label: "THROUGHPUT", value: "1.2B REQS/MO" },
    { label: "SYSTEM UPTIME", value: "99.99%" },
  ],
};

export const MARQUEE_ITEMS = [
  "FULL-STACK SYSTEMS ENGINEER",
  "NEXT.JS & REACT SPECIALIST",
  "DISTRIBUTED MICROSERVICES",
  "KAFKA & REDIS PUBSUB",
  "SUB-50MS LATENCY",
  "NEOBRUTALISM UI CRAFT",
  "TYPESCRIPT & GO GEEK",
  "DOCKER & K8S ORCHESTRATION",
];

export const PROJECTS: Project[] = [
  {
    id: "hyperqueue",
    title: "HyperQueue Broker",
    subtitle: "High-Throughput Distributed Task & Pub/Sub Engine",
    category: "Systems / Backend",
    featured: true,
    color: "#FFE600",
    description:
      "A distributed message queue and deferred execution engine capable of processing 120,000 tasks/second with strict at-least-once delivery guarantees and dead-letter introspection.",
    metrics: [
      { label: "THROUGHPUT", value: "120K MSG/SEC" },
      { label: "P99 LATENCY", value: "4.2 MS" },
      { label: "AVAILABILITY", value: "99.995%" },
    ],
    stack: ["Go", "Redis Streams", "TypeScript", "Docker", "gRPC", "Prometheus"],
    githubUrl: "https://github.com",
    liveUrl: "https://hyperqueue.demo.local",
    architectureDetails: {
      problem:
        "Standard queuing solutions struggled with variable burst traffic, leading to queue memory exhaustion and unmonitored dead-letter drop rates during peak event spikes.",
      solution:
        "Designed an append-only distributed log layer in Go backed by Redis Streams partition sharding, with automatic backpressure throttling and dynamic worker autoscaling.",
      throughput: "Sustained 120k messages/sec across a 5-node cluster with zero data loss.",
      keyHighlights: [
        "Partition-key routing preventing head-of-line blocking across tenant queues",
        "Deterministic replay capabilities for incident triage and state reconstruction",
        "Real-time OpenTelemetry metric exporter with zero allocations on hot path",
      ],
    },
    mockupSnippet: `// HyperQueue Worker Log
[INFO] Cluster online: 5 worker nodes healthy
[PUB]  Batch #9042 committed: 10,000 events in 3.8ms
[SYNC] Replicated log head: offset=0x984F7AC
[ACK]  0 dead-letter drops detected. Backpressure 12%`,
  },
  {
    id: "velocedb",
    title: "VeloceDB Cloud",
    subtitle: "Serverless Postgres & Real-time Vector Gateway",
    category: "Full-Stack",
    featured: true,
    color: "#00F0FF",
    description:
      "A managed developer platform offering instantaneous Postgres connection pooling, similarity vector search indexing, and real-time CDC WebSocket subscriptions.",
    metrics: [
      { label: "ACTIVE CLUSTERS", value: "1,450+" },
      { label: "POOL REUSE", value: "98.4%" },
      { label: "P50 QUERY", value: "11 MS" },
    ],
    stack: ["Next.js 16", "PostgreSQL", "pgvector", "WebSockets", "Prisma", "Tailwind CSS"],
    githubUrl: "https://github.com",
    liveUrl: "https://velocedb.demo.local",
    architectureDetails: {
      problem:
        "Serverless functions opening direct connections quickly exhausted Postgres max_connections limits, causing connection spikes and sluggish cold-starts.",
      solution:
        "Engineered an edge proxy connection pooler with WebSocket push changefeeds and pgvector index acceleration, coupled with a Next.js Neobrutalist dashboard.",
      throughput: "Maintained 25,000 active concurrent WebSocket clients over pooled connections.",
      keyHighlights: [
        "Lightweight connection-multiplexing gateway eliminating serverless pool exhaustion",
        "Sub-15ms HNSW vector similarity search for semantic embeddings",
        "Neobrutalist interactive SQL scratchpad with instant explain-plan visualization",
      ],
    },
    mockupSnippet: `SELECT id, title, cosine_dist(embedding, $query) AS score
FROM knowledge_embeddings
WHERE tenant_id = 'org_99x'
ORDER BY score DESC LIMIT 5;
-- Execution time: 1.84ms | Memory: 420KB`,
  },
  {
    id: "omnigraph",
    title: "OmniGraph Metrics",
    subtitle: "Distributed Tracing & Service Mesh Visualizer",
    category: "Cloud / DevOps",
    featured: false,
    color: "#FF66B2",
    description:
      "Interactive distributed service mesh visualizer ingesting OpenTelemetry spans to map dependency health, detect bottleneck regressions, and calculate SLO burn rates.",
    metrics: [
      { label: "SPANS/DAY", value: "50M+" },
      { label: "TRACE BUFFER", value: "30 SEC" },
      { label: "ALERT TIME", value: "< 2.0 SEC" },
    ],
    stack: ["TypeScript", "ClickHouse", "React Flow", "Kafka", "Node.js", "Docker"],
    githubUrl: "https://github.com",
    liveUrl: "https://omnigraph.demo.local",
    architectureDetails: {
      problem:
        "Engineering teams lacked granular visibility into cascade timeouts across 40+ microservices during regional network degradation.",
      solution:
        "Built a high-volume ClickHouse ingestion pipeline aggregating trace DAGs in real-time, rendered through an interactive canvas interface with bottleneck heatmaps.",
      throughput: "Processes 600 trace batches per second with sub-second dashboard updates.",
      keyHighlights: [
        "Columnar ClickHouse storage reducing trace storage footprint by 78%",
        "Automated root-cause anomaly detection alerting via Slack and PagerDuty",
        "Interactive topology graph with live latency waterfall visualization",
      ],
    },
    mockupSnippet: `Trace ID: 7f81bc294a0e -- Status: 200 OK
├─ API Gateway: 1.2ms
├─ Auth Middleware: 2.4ms
└─ Service Mesh: Orders -> Payment Gateway (42.1ms) [WARNING: High P99]`,
  },
  {
    id: "kubeforge",
    title: "KubeForge CLI & UI",
    subtitle: "Declarative GitOps Orchestrator for Multi-Cluster K8s",
    category: "Cloud / DevOps",
    featured: false,
    color: "#00E676",
    description:
      "A developer-first GitOps automation engine with zero-drift reconciliation, canary deployment rollback triggers, and visual rollouts management.",
    metrics: [
      { label: "DEPLOY SPEED", value: "3.5X FASTER" },
      { label: "DRIFT DETECT", value: "< 500MS" },
      { label: "K8S CLUSTERS", value: "48 MANAGED" },
    ],
    stack: ["Go", "Kubernetes CRDs", "Next.js", "Helm", "ArgoCD API", "TypeScript"],
    githubUrl: "https://github.com",
    liveUrl: "https://kubeforge.demo.local",
    architectureDetails: {
      problem:
        "Managing multi-region Kubernetes configurations across staging and production created manual drift risks and high error rates during hotfixes.",
      solution:
        "Implemented custom Kubernetes Custom Resource Definitions (CRDs) and an atomic rollout agent with automated progressive canary traffic shifting.",
      throughput: "Zero downtime deployments across 48 global production clusters.",
      keyHighlights: [
        "Instant rollbacks triggered automatically upon error budget thresholds",
        "Deterministic ephemeral staging environments generated from Pull Requests",
        "Cryptographically signed release manifests with Sigstore Cosign",
      ],
    },
    mockupSnippet: `$ kubeforge rollout canary --service=payment-v2 --weight=20%
✓ Validating health probes... 100% PASS
✓ Error budget burn rate: 0.00%
✓ Promoting to 100% traffic across [us-east-1, eu-central-1]`,
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "BACKEND & DISTRIBUTED SYSTEMS",
    color: "#FFE600",
    skills: [
      { name: "Node.js / Express", level: "Expert", highlight: true },
      { name: "TypeScript", level: "Expert", highlight: true },
      { name: "Go (Golang)", level: "Advanced", highlight: true },
      { name: "REST & gRPC APIs", level: "Expert" },
      { name: "Microservices Architecture", level: "Expert", highlight: true },
      { name: "Event-Driven Architecture", level: "Advanced" },
      { name: "WebSockets / SSE", level: "Advanced" },
      { name: "Rate Limiting & Auth (OAuth/JWT)", level: "Expert" },
    ],
  },
  {
    category: "FRONTEND & UI ENGINEERING",
    color: "#00F0FF",
    skills: [
      { name: "Next.js 16 (App Router)", level: "Expert", highlight: true },
      { name: "React 19 & Server Components", level: "Expert", highlight: true },
      { name: "Tailwind CSS v4", level: "Expert", highlight: true },
      { name: "Neobrutalism Design Systems", level: "Specialist", highlight: true },
      { name: "State Management (Zustand/Redux)", level: "Advanced" },
      { name: "Performance Optimization / Web Vitals", level: "Expert" },
      { name: "Accessibility (WCAG 2.1)", level: "Advanced" },
      { name: "End-to-End Testing (Playwright)", level: "Advanced" },
    ],
  },
  {
    category: "DATABASES & CACHING",
    color: "#FF66B2",
    skills: [
      { name: "PostgreSQL & pgvector", level: "Expert", highlight: true },
      { name: "Redis & Redis Streams", level: "Expert", highlight: true },
      { name: "ClickHouse (Analytics)", level: "Advanced" },
      { name: "Prisma & Drizzle ORM", level: "Expert" },
      { name: "Database Indexing & Sharding", level: "Advanced", highlight: true },
      { name: "Kafka Event Streaming", level: "Proficient" },
    ],
  },
  {
    category: "DEVOPS, CLOUD & INFRASTRUCTURE",
    color: "#00E676",
    skills: [
      { name: "Docker & Containerization", level: "Expert", highlight: true },
      { name: "Kubernetes & Helm", level: "Advanced", highlight: true },
      { name: "AWS (ECS, S3, RDS, Lambda)", level: "Advanced" },
      { name: "CI/CD (GitHub Actions)", level: "Expert", highlight: true },
      { name: "OpenTelemetry & Prometheus", level: "Advanced" },
      { name: "Linux Systems & Bash Scripting", level: "Advanced" },
    ],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "exp-1",
    period: "2023 - PRESENT",
    role: "Senior Full-Stack & Systems Architect",
    company: "NexusScale Systems",
    location: "San Francisco, CA (Remote)",
    type: "Full-Time",
    accentColor: "#FFE600",
    description:
      "Lead architecture and technical execution for core enterprise data infrastructure serving 20M+ active users. Directing a squad of 8 engineers.",
    achievements: [
      "Engineered an event aggregation pipeline processing 1.2B monthly requests, reducing P99 latency from 140ms to 38ms.",
      "Spearheaded company-wide migration from legacy SPA to Next.js App Router, boosting First Contentful Paint by 42%.",
      "Instituted automated canary deployment pipelines reducing bad deployment rollback time to under 90 seconds.",
    ],
    technologies: ["Next.js", "TypeScript", "Go", "PostgreSQL", "Kafka", "Docker", "AWS"],
  },
  {
    id: "exp-2",
    period: "2021 - 2023",
    role: "Lead Backend & Distributed Systems Engineer",
    company: "DataStream Labs",
    location: "Austin, TX (Hybrid)",
    type: "Full-Time",
    accentColor: "#00F0FF",
    description:
      "Designed real-time data streaming engines and scalable API gateways for developer-facing telemetry infrastructure.",
    achievements: [
      "Built multi-tenant Redis Streams caching cluster handling 80,000 ops/sec with 99.99% uptime.",
      "Authored custom high-throughput Go microservices that replaced 12 monolithic endpoints, saving $45k/month in AWS compute.",
      "Authored developer documentation and SDKs adopted by over 350 engineering organizations.",
    ],
    technologies: ["Go", "Node.js", "Redis", "PostgreSQL", "Docker", "Kubernetes"],
  },
  {
    id: "exp-3",
    period: "2019 - 2021",
    role: "Full-Stack Software Engineer",
    company: "HyperGrowth Tech",
    location: "Seattle, WA",
    type: "Full-Time",
    accentColor: "#FF66B2",
    description:
      "Built customer-facing dashboards, billing workflows, and mission-critical API integrations from inception to production scale.",
    achievements: [
      "Delivered real-time collaboration canvas with WebSocket reconciliation and zero data collision.",
      "Integrated Stripe billing, webhooks, and automated invoicing with fault-tolerant idempotency guards.",
      "Mentored 4 junior engineers and initiated strict TypeScript linting and automated test coverage standards.",
    ],
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Redis", "Stripe API"],
  },
];

export const TERMINAL_COMMANDS: Record<string, string> = {
  help: `Available commands:
  • whoami      - View developer identity and core philosophy
  • skills      - Print categorized technical stack
  • projects    - List key production systems built
  • uptime      - Print system reliability and stats
  • contact     - Output direct communication channels
  • clear       - Clean terminal screen
  • matrix      - Display digital rain easter egg`,
  whoami: `USER: Alex Chen
ROLE: Senior Full-Stack & Systems Engineer
FOCUS: High-throughput backends, distributed microservices, crisp neobrutalist UX.
MOTTO: "Make it work, make it solid, make it fast, make it bold."`,
  skills: `[LANGUAGES]: TypeScript, Go, Rust, Python, SQL, Bash
[BACKEND]:   Node.js, Express, gRPC, Redis Streams, Kafka, WebSockets
[FRONTEND]:  Next.js 16, React 19, Tailwind CSS, Neobrutalism Design Systems
[DATABASE]:  PostgreSQL, pgvector, Redis, ClickHouse, Prisma
[DEVOPS]:    Docker, Kubernetes, AWS, GitHub Actions, Prometheus`,
  projects: `1. HyperQueue Broker  -> Distributed task engine (120k msg/sec)
2. VeloceDB Cloud      -> Serverless Postgres & pgvector gateway
3. OmniGraph Metrics   -> Telemetry & trace DAG visualizer (50M spans/day)
4. KubeForge GitOps    -> Multi-cluster deployment controller`,
  uptime: `SYSTEM UPTIME: 7 Years, 240 Days, 14 Hours
STATUS: Optimal (99.99% availability)
BURST CAPACITY: Ready for new architectural challenges`,
  contact: `EMAIL:    alex.chen.systems@gmail.com
GITHUB:   https://github.com
LINKEDIN: https://linkedin.com
TWITTER:  https://x.com`,
  matrix: `01001110 01000101 01001111 01000010 01010010 01010101 01010100 01000001 01001100
Wake up, developer... Neobrutalism has you. Follow the black borders. [4px 4px #000]`,
};
