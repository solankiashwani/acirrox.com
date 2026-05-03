import {
  Compass,
  Cpu,
  GitBranch,
  Plug,
  Activity,
  ArrowUpRight,
} from "lucide-react";
import { Reveal, SectionHeading, Spotlight } from "./ui";

export default function Offerings() {
  return (
    <section
      id="offerings"
      className="relative isolate overflow-hidden border-t border-white/5 bg-ink-950 py-24 md:py-32"
    >
      <div aria-hidden className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-grid-fine opacity-20" />

      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <SectionHeading
              eyebrow="Core Offerings"
              title={
                <>
                  Four engineering motions —{" "}
                  <span className="text-white/60">one outcome.</span>
                </>
              }
              description="From opportunity scoping to live AI Ops. Each engagement compounds into a system you own."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="hidden lg:flex items-center gap-2 text-xs text-white/40">
              <span className="inline-flex size-1.5 rounded-full bg-lime-400 animate-pulse-glow" />
              Average shipped: 9.2 weeks
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-6 md:gap-5">
          {/* Card 1 — large */}
          <Reveal delay={0.05} className="md:col-span-3 lg:col-span-3">
            <BentoCard
              icon={<Compass className="size-4" />}
              tag="01 / Discovery"
              title="AI Opportunity Mapping"
              description="Identify high-ROI use cases, score feasibility against your data reality, and ship a prioritized roadmap."
              foot={["ROI scoring", "Tech feasibility", "Quarterly roadmap"]}
              size="lg"
            >
              <OpportunityMatrix />
            </BentoCard>
          </Reveal>

          {/* Card 2 */}
          <Reveal delay={0.1} className="md:col-span-3 lg:col-span-3">
            <BentoCard
              icon={<Cpu className="size-4" />}
              tag="02 / Build"
              title="Custom AI Systems"
              description="RAG, copilots, workflow automation, ML pipelines. Hand-engineered for your stack — never templated."
              foot={["RAG", "Copilots", "Workflow", "ML pipelines"]}
              size="lg"
            >
              <PromptStreamPreview />
            </BentoCard>
          </Reveal>

          {/* Card 3 */}
          <Reveal delay={0.15} className="md:col-span-3 lg:col-span-2">
            <BentoCard
              icon={<Plug className="size-4" />}
              tag="03 / Integrate"
              title="Enterprise Integration"
              description="Connect to CRM, ERP, data lakes, and warehouses with governance and lineage baked in."
              foot={["CRM", "ERP", "Lakes", "Governance"]}
            >
              <ConnectorOrbit />
            </BentoCard>
          </Reveal>

          {/* Card 4 */}
          <Reveal delay={0.2} className="md:col-span-3 lg:col-span-2">
            <BentoCard
              icon={<Activity className="size-4" />}
              tag="04 / Operate"
              title="AI Ops & Scale"
              description="Monitoring, evals, cost guardrails, and full model lifecycle management — kept healthy in production."
              foot={["Monitoring", "Evals", "Cost", "Lifecycle"]}
            >
              <OpsPulse />
            </BentoCard>
          </Reveal>

          {/* Card 5 — narrow */}
          <Reveal delay={0.25} className="md:col-span-6 lg:col-span-2">
            <BentoCard
              icon={<GitBranch className="size-4" />}
              tag="Foundation"
              title="Production-grade data layer"
              description="Schemas, vector indexes, evals, lineage. Engineered before any model touches your data."
              foot={["Schemas", "Indexes", "Evals", "Lineage"]}
              accent
            >
              <FoundationLines />
            </BentoCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Bento card                                                                */
/* -------------------------------------------------------------------------- */
function BentoCard({
  icon,
  tag,
  title,
  description,
  foot,
  children,
  size = "md",
  accent = false,
}: {
  icon: React.ReactNode;
  tag: string;
  title: string;
  description: string;
  foot?: string[];
  children?: React.ReactNode;
  size?: "md" | "lg";
  accent?: boolean;
}) {
  return (
    <Spotlight
      className={`group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-6 lift glow-border ${
        accent
          ? "bg-[linear-gradient(180deg,rgba(93,134,255,0.06),rgba(255,255,255,0.01))]"
          : ""
      } ${size === "lg" ? "md:p-7" : ""}`}
    >
      <div className="relative z-10 flex h-full flex-col">
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-white/70">
            <span className="text-accent-400">{icon}</span>
            {tag}
          </span>
          <ArrowUpRight className="size-4 text-white/30 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
        </div>

        <h3 className="mt-5 text-balance text-2xl font-medium text-white md:text-[26px]">
          {title}
        </h3>
        <p className="mt-2 max-w-md text-pretty text-sm leading-relaxed text-white/60 md:text-[15px]">
          {description}
        </p>

        {children && (
          <div className="relative mt-6 flex-1">
            <div className="overflow-hidden rounded-xl border border-white/10 bg-ink-900/70">
              {children}
            </div>
          </div>
        )}

        {foot && (
          <div className="mt-5 flex flex-wrap gap-1.5">
            {foot.map((f) => (
              <span
                key={f}
                className="rounded-md border border-white/10 bg-white/[0.02] px-2 py-0.5 text-[11px] text-white/55"
              >
                {f}
              </span>
            ))}
          </div>
        )}
      </div>
    </Spotlight>
  );
}

/* -------------------------------------------------------------------------- */
/*  Decorative inner visuals                                                  */
/* -------------------------------------------------------------------------- */
function OpportunityMatrix() {
  const points = [
    { x: 80, y: 25, r: 12, label: "Lead scoring", color: "#c5fa61" },
    { x: 60, y: 40, r: 9, label: "Doc Q&A", color: "#5d86ff" },
    { x: 35, y: 30, r: 7, label: "Recs", color: "#ff5fa2" },
    { x: 70, y: 70, r: 6, label: "Forecast", color: "#5d86ff" },
    { x: 25, y: 65, r: 5, label: "Triage", color: "#ffffff" },
    { x: 50, y: 55, r: 8, label: "Summaries", color: "#5d86ff" },
  ];
  return (
    <div className="relative aspect-[16/10] w-full p-5">
      {/* Axes */}
      <div className="absolute inset-5 rounded-md border border-dashed border-white/10" />
      <div className="absolute left-5 right-5 top-1/2 h-px bg-white/5" />
      <div className="absolute bottom-5 top-5 left-1/2 w-px bg-white/5" />
      <div className="absolute right-6 top-3 text-[10px] uppercase tracking-[0.2em] text-white/30">
        Impact ↑
      </div>
      <div className="absolute bottom-2 right-6 text-[10px] uppercase tracking-[0.2em] text-white/30">
        Feasibility →
      </div>

      <svg viewBox="0 0 100 100" className="absolute inset-0 size-full">
        {points.map((p, i) => (
          <g key={i}>
            <circle
              cx={p.x}
              cy={p.y}
              r={p.r + 4}
              fill={p.color}
              opacity="0.15"
            >
              <animate
                attributeName="r"
                values={`${p.r + 2};${p.r + 6};${p.r + 2}`}
                dur="3s"
                begin={`${i * 0.4}s`}
                repeatCount="indefinite"
              />
            </circle>
            <circle cx={p.x} cy={p.y} r={p.r / 2} fill={p.color} />
          </g>
        ))}
      </svg>
    </div>
  );
}

function PromptStreamPreview() {
  return (
    <div className="space-y-2 p-4 font-mono text-[11px] leading-relaxed">
      <div className="flex items-center gap-2 text-white/40">
        <span className="inline-flex size-1.5 rounded-full bg-emerald-400" />
        agent.run · pipeline_v3
      </div>
      <pre className="whitespace-pre-wrap text-white/80">
        <span className="text-accent-400">▸</span> retrieve(query, k=8){"  "}
        <span className="text-white/40">→ 8 docs · 0.42s</span>
        {"\n"}
        <span className="text-accent-400">▸</span> rerank(docs){"  "}
        <span className="text-white/40">→ 3 selected · 0.18s</span>
        {"\n"}
        <span className="text-accent-400">▸</span> generate(context, schema){"  "}
        <span className="text-lime-400">→ ok</span>
        {"\n"}
        <span className="text-accent-400">▸</span> validate(json, contract){"  "}
        <span className="text-lime-400">→ ok</span>
        {"\n"}
        <span className="text-accent-400">▸</span> write(outcome){"  "}
        <span className="text-white/40">→ crm.opportunity:1428</span>
      </pre>
      <div className="mt-2 flex items-center gap-2 text-[10px] text-white/40">
        <span className="rounded bg-white/5 px-1.5 py-0.5">eval pass 98.7%</span>
        <span className="rounded bg-white/5 px-1.5 py-0.5">$0.0021 / call</span>
      </div>
    </div>
  );
}

function ConnectorOrbit() {
  const labels = ["CRM", "ERP", "Lake", "Warehouse", "Docs", "Events"];
  return (
    <div className="relative aspect-square w-full p-5">
      <div className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 grid size-12 -translate-y-12 place-items-center rounded-full border border-white/15 bg-ink-900 text-[10px] font-medium uppercase tracking-[0.16em] text-white/80">
        Acirrox
      </div>
      <div className="absolute inset-4 rounded-full border border-dashed border-white/10 animate-spin-slow" />
      <div className="absolute inset-10 rounded-full border border-dashed border-white/10 animate-spin-slow [animation-direction:reverse]" />
      {labels.map((l, i) => {
        const angle = (i / labels.length) * Math.PI * 2;
        const r = 38;
        const x = 50 + r * Math.cos(angle);
        const y = 50 + r * Math.sin(angle);
        return (
          <span
            key={l}
            className="absolute -translate-x-1/2 -translate-y-1/2 rounded-md border border-white/10 bg-ink-900 px-1.5 py-0.5 text-[10px] text-white/70"
            style={{ left: `${x}%`, top: `${y}%` }}
          >
            {l}
          </span>
        );
      })}
    </div>
  );
}

function OpsPulse() {
  const bars = [4, 7, 5, 9, 6, 11, 7, 10, 8, 13, 9, 12, 8, 14, 10, 12];
  return (
    <div className="p-4">
      <div className="flex items-end gap-1.5">
        {bars.map((h, i) => (
          <span
            key={i}
            className="block w-2 rounded-sm bg-gradient-to-t from-accent-500/40 to-lime-400/80"
            style={{ height: `${h * 4}px` }}
          />
        ))}
      </div>
      <div className="mt-3 flex items-center justify-between text-[10px] text-white/40">
        <span>p50 142ms</span>
        <span className="text-lime-400">+12% w/w</span>
        <span>$0.0019/call</span>
      </div>
    </div>
  );
}

function FoundationLines() {
  return (
    <div className="relative aspect-[5/3] w-full overflow-hidden p-5">
      <svg viewBox="0 0 200 100" className="absolute inset-0 size-full">
        {[...Array(6)].map((_, i) => (
          <path
            key={i}
            d={`M0 ${20 + i * 12} Q 50 ${10 + i * 10}, 100 ${20 + i * 12} T 200 ${20 + i * 12}`}
            stroke="url(#gradFnd)"
            strokeWidth="0.8"
            fill="none"
            opacity={0.2 + i * 0.12}
          />
        ))}
        <defs>
          <linearGradient id="gradFnd" x1="0" x2="1">
            <stop offset="0%" stopColor="#5d86ff" />
            <stop offset="100%" stopColor="#c5fa61" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-x-5 bottom-3 flex justify-between text-[10px] text-white/40">
        <span>raw → typed → indexed</span>
        <span className="text-lime-400">consistent</span>
      </div>
    </div>
  );
}
