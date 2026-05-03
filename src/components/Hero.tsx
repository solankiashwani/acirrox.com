import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { useEffect } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  CircleDot,
  Database,
  GitBranch,
  Sparkles,
} from "lucide-react";
import { Aurora, Beams, Eyebrow, MagneticButton, Reveal } from "./ui";

export default function Hero() {
  const mx = useMotionValue(50);
  const my = useMotionValue(50);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mx.set((e.clientX / window.innerWidth) * 100);
      my.set((e.clientY / window.innerHeight) * 100);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  const spotlight = useMotionTemplate`radial-gradient(900px circle at ${mx}% ${my}%, rgba(93,134,255,0.18), transparent 60%)`;

  return (
    <section className="relative isolate overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32">
      {/* Background layers */}
      <div className="absolute inset-0 -z-10">
        <Aurora />
        <div className="absolute inset-0 bg-grid radial-fade opacity-70" />
        <motion.div
          aria-hidden
          className="absolute inset-0"
          style={{ background: spotlight }}
        />
        <Beams />
        <div className="absolute inset-0 bg-noise opacity-[0.04] mix-blend-overlay" />
        {/* Bottom fade to seamlessly merge with next section */}
        <div className="absolute bottom-0 h-40 w-full bg-gradient-to-b from-transparent to-ink-900" />
      </div>

      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <Reveal>
          <div className="flex justify-center">
            <Eyebrow>
              <span className="hidden sm:inline">New</span>
              <span className="text-white">Acirrox AI</span>
              <span className="text-white/40">·</span>
              <span>From idea to deployed in weeks</span>
            </Eyebrow>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="mt-7 text-balance text-center text-5xl font-medium leading-[0.98] tracking-[-0.025em] text-white md:text-7xl lg:text-[88px]">
            Turn{" "}
            <span className="relative inline-block">
              <span className="gradient-text-accent italic font-serif">fragmented</span>
              <svg
                viewBox="0 0 200 12"
                className="absolute -bottom-1.5 left-0 h-2.5 w-full text-accent-400"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 8 Q 50 2, 100 6 T 198 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
            data into
            <br className="hidden md:block" />{" "}
            <span className="gradient-text">ROI-driving AI systems.</span>
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-center text-lg leading-relaxed text-white/60 md:text-xl">
            Deep data engineering plus applied AI — built for production, not demos.
            Most AI projects die at the data layer. We fix that first, then ship systems
            that scale.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <MagneticButton href="#cta" variant="primary" className="px-6 py-3.5 text-[15px]">
              Book architecture call
              <ArrowUpRight className="size-4" strokeWidth={2.2} />
            </MagneticButton>
            <MagneticButton href="#cta" variant="secondary" className="px-6 py-3.5 text-[15px]">
              Get AI ROI roadmap
              <ArrowRight className="size-4" strokeWidth={2.2} />
            </MagneticButton>
          </div>
        </Reveal>

        <Reveal delay={0.45}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-white/40">
            <span className="inline-flex items-center gap-1.5">
              <CircleDot className="size-3 text-lime-400" /> Production-grade
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CircleDot className="size-3 text-accent-400" /> Vendor-agnostic
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CircleDot className="size-3 text-pink-400" /> Compliance-ready
            </span>
            <span className="hidden sm:inline-flex items-center gap-1.5">
              <CircleDot className="size-3 text-orange-400" /> No dead-end POCs
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.55}>
          <SystemDiagram />
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  SystemDiagram — animated "data → AI → revenue" pipeline visualization     */
/* -------------------------------------------------------------------------- */
function SystemDiagram() {
  return (
    <div className="relative mx-auto mt-16 max-w-5xl">
      {/* Outer card */}
      <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-3 backdrop-blur-xl">
        <div className="absolute inset-0 bg-grid-fine opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink-900/80" />

        {/* Inner panel */}
        <div className="relative grid grid-cols-1 gap-3 rounded-[22px] border border-white/[0.06] bg-ink-900/60 p-5 md:grid-cols-7 md:p-7">
          {/* Sources */}
          <PipelineColumn
            title="Sources"
            tone="muted"
            items={[
              { label: "Salesforce", state: "ok" },
              { label: "Snowflake", state: "ok" },
              { label: "Postgres", state: "ok" },
              { label: "Stripe", state: "ok" },
              { label: "S3 / Lakes", state: "warn" },
              { label: "Notion / Docs", state: "warn" },
            ]}
            icon={<Database className="size-3.5" />}
            className="md:col-span-2"
          />

          {/* Connector */}
          <Connector />

          {/* Engineered layer */}
          <div className="relative flex flex-col gap-3 rounded-2xl border border-white/10 bg-gradient-to-b from-accent-500/10 to-transparent p-4 md:col-span-2">
            <div className="absolute inset-0 -z-0 rounded-2xl bg-[radial-gradient(120%_60%_at_50%_0%,rgba(93,134,255,0.18),transparent)]" />
            <div className="relative flex items-center justify-between">
              <div className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-white/60">
                <GitBranch className="size-3.5 text-accent-400" />
                Engineered Layer
              </div>
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-lime-400 shadow-[0_0_12px_2px_rgba(197,250,97,0.6)]" />
            </div>
            <div className="relative space-y-2 text-sm">
              <PipelineRow label="Schema unification" code="↘ 412 cols" />
              <PipelineRow label="AI index" code="98.7% recall" />
              <PipelineRow label="Feature store" code="2.3M rows/h" />
              <PipelineRow label="Eval harness" code="passing" ok />
              <PipelineRow label="Lineage + governance" code="SOC2" ok />
            </div>
          </div>

          {/* Connector */}
          <Connector reversed />

          {/* Outcomes */}
          <div className="relative flex flex-col gap-3 rounded-2xl border border-white/10 bg-gradient-to-b from-lime-500/10 to-transparent p-4 md:col-span-2">
            <div className="absolute inset-0 -z-0 rounded-2xl bg-[radial-gradient(120%_60%_at_50%_0%,rgba(197,250,97,0.18),transparent)]" />
            <div className="relative inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-white/60">
              <Sparkles className="size-3.5 text-lime-400" />
              Outcomes
            </div>
            <div className="relative space-y-2">
              <OutcomeRow value="+38%" label="Revenue per rep" />
              <OutcomeRow value="-62%" label="Manual ops cost" />
              <OutcomeRow value="9.4×" label="Time to insight" />
              <OutcomeRow value="100%" label="Audit coverage" />
            </div>
          </div>
        </div>

        {/* Floating signal pulses */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute left-[26%] top-1/2 -z-0 h-[2px] w-2 rounded-full bg-accent-400 shadow-[0_0_18px_4px_rgba(93,134,255,0.6)]"
          animate={{ x: [0, 110, 110, 110], opacity: [0.2, 1, 1, 0] }}
          transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden
          className="pointer-events-none absolute right-[26%] top-1/2 -z-0 h-[2px] w-2 rounded-full bg-lime-400 shadow-[0_0_18px_4px_rgba(197,250,97,0.6)]"
          animate={{ x: [-110, 0, 0, 0], opacity: [0, 1, 1, 0.2] }}
          transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
        />
      </div>

      {/* Caption */}
      <div className="mt-4 flex items-center justify-between text-xs text-white/40">
        <span>acirrox://systems/architecture</span>
        <span className="inline-flex items-center gap-1.5">
          <span className="inline-flex size-1.5 rounded-full bg-lime-400 animate-pulse-glow" />
          Live system, simulated
        </span>
      </div>
    </div>
  );
}

function PipelineColumn({
  title,
  items,
  icon,
  className = "",
}: {
  title: string;
  tone?: string;
  icon: React.ReactNode;
  items: { label: string; state: "ok" | "warn" | "err" }[];
  className?: string;
}) {
  return (
    <div className={`relative flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-4 ${className}`}>
      <div className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-white/60">
        <span className="text-accent-400">{icon}</span>
        {title}
      </div>
      <ul className="space-y-1.5">
        {items.map((it) => (
          <li
            key={it.label}
            className="flex items-center justify-between rounded-md border border-white/[0.06] bg-white/[0.02] px-2.5 py-1.5 text-xs text-white/80"
          >
            <span>{it.label}</span>
            <span
              className={`size-1.5 rounded-full ${
                it.state === "ok"
                  ? "bg-lime-400"
                  : it.state === "warn"
                    ? "bg-amber-400"
                    : "bg-rose-400"
              }`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

function PipelineRow({
  label,
  code,
  ok,
}: {
  label: string;
  code: string;
  ok?: boolean;
}) {
  return (
    <div className="flex items-center justify-between rounded-md border border-white/[0.06] bg-white/[0.03] px-2.5 py-1.5 text-xs">
      <span className="text-white/85">{label}</span>
      <span
        className={`font-mono text-[11px] ${
          ok ? "text-lime-400" : "text-white/50"
        }`}
      >
        {code}
      </span>
    </div>
  );
}

function OutcomeRow({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex items-baseline justify-between rounded-md border border-white/[0.06] bg-white/[0.03] px-3 py-2">
      <span className="font-serif text-2xl font-medium text-white">{value}</span>
      <span className="text-[11px] uppercase tracking-[0.14em] text-white/50">
        {label}
      </span>
    </div>
  );
}

function Connector({ reversed = false }: { reversed?: boolean }) {
  return (
    <div className="relative hidden items-center justify-center md:flex">
      <svg
        viewBox="0 0 60 200"
        className="h-full w-full text-white/15"
        preserveAspectRatio="none"
      >
        <path
          d={
            reversed
              ? "M 0 100 C 20 100 40 100 60 100"
              : "M 0 100 C 20 100 40 100 60 100"
          }
          stroke="currentColor"
          strokeWidth="1.4"
          fill="none"
          className="animate-dash"
        />
      </svg>
    </div>
  );
}
