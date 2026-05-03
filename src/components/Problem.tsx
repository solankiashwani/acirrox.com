import { ArrowRight, AlertTriangle, Sparkles } from "lucide-react";
import { Reveal, SectionHeading } from "./ui";

const youHave = [
  { label: "Scattered data across CRM, ERP, lakes", weight: "84%" },
  { label: "Slow ops & 6-week reporting cycles", weight: "61%" },
  { label: "Missed insights buried in unstructured docs", weight: "47%" },
  { label: "POCs that never reach production", weight: "92%" },
];

const weDeliver = [
  { label: "Automated decisions in operating workflows", weight: "+38%" },
  { label: "Cost reduction via right-sized pipelines", weight: "−62%" },
  { label: "New revenue lines from AI products", weight: "+12pts" },
  { label: "Real systems shipping in 8–12 weeks", weight: "Live" },
];

export default function Problem() {
  return (
    <section id="problem" className="relative isolate overflow-hidden border-t border-white/5 bg-ink-900 py-24 md:py-32">
      <div aria-hidden className="absolute inset-0 -z-10 bg-grid-fine opacity-30 radial-fade" />
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="The Problem"
            title={
              <>
                Most AI projects fail at the{" "}
                <span className="font-serif italic text-white/85">data layer.</span>
                <br className="hidden md:block" /> We fix that first — then build systems that scale.
              </>
            }
            description="Tools alone don't deliver outcomes. The gap between what your data is and what your AI needs is where 9 out of 10 initiatives stall."
          />
        </Reveal>

        <div className="relative mt-14 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_auto_1fr]">
          {/* You have */}
          <Reveal delay={0.05}>
            <Panel
              tone="warn"
              eyebrow={
                <span className="inline-flex items-center gap-2">
                  <AlertTriangle className="size-3.5 text-amber-400" /> You have
                </span>
              }
              items={youHave}
              accent="text-amber-400"
            />
          </Reveal>

          {/* Arrow */}
          <div className="relative hidden items-center justify-center lg:flex">
            <Reveal delay={0.15}>
              <div className="relative grid size-16 place-items-center">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent-500/30 to-lime-500/20 blur-xl" />
                <div className="relative grid size-16 place-items-center rounded-full border border-white/15 bg-ink-900/80 backdrop-blur">
                  <ArrowRight className="size-5 text-white" strokeWidth={2} />
                </div>
              </div>
            </Reveal>
          </div>
          {/* Down arrow on small screens */}
          <div className="flex items-center justify-center lg:hidden">
            <ArrowRight className="size-5 rotate-90 text-white/40" />
          </div>

          {/* We deliver */}
          <Reveal delay={0.2}>
            <Panel
              tone="good"
              eyebrow={
                <span className="inline-flex items-center gap-2">
                  <Sparkles className="size-3.5 text-lime-400" /> We deliver
                </span>
              }
              items={weDeliver}
              accent="text-lime-400"
            />
          </Reveal>
        </div>

        {/* Quote */}
        <Reveal delay={0.3}>
          <div className="mx-auto mt-16 max-w-3xl text-center">
            <p className="font-serif text-2xl italic leading-snug text-white/80 md:text-3xl">
              “If your data layer is broken, every AI initiative on top of it inherits that fragility.”
            </p>
            <p className="mt-3 text-xs uppercase tracking-[0.2em] text-white/40">
              — Acirrox engineering principle № 1
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Panel({
  tone,
  eyebrow,
  items,
  accent,
}: {
  tone: "warn" | "good";
  eyebrow: React.ReactNode;
  items: { label: string; weight: string }[];
  accent: string;
}) {
  return (
    <div
      className={`relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur lift glow-border md:p-8 ${
        tone === "warn" ? "" : ""
      }`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-0 size-64 rounded-full opacity-30 blur-3xl"
        style={{
          background:
            tone === "warn"
              ? "radial-gradient(circle, #f59e0b 0%, transparent 60%)"
              : "radial-gradient(circle, #c5fa61 0%, transparent 60%)",
        }}
      />
      <div className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/60">
        {eyebrow}
      </div>
      <ul className="mt-5 space-y-2">
        {items.map((it) => (
          <li
            key={it.label}
            className="group flex items-center justify-between gap-4 rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3 transition-colors hover:bg-white/[0.05]"
          >
            <span className="text-sm text-white/85">{it.label}</span>
            <span
              className={`shrink-0 rounded-md border border-white/10 bg-ink-900 px-2 py-0.5 font-mono text-[11px] ${accent}`}
            >
              {it.weight}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
