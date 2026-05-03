import { Rocket, Target, Boxes, ShieldCheck } from "lucide-react";
import { Reveal, SectionHeading, TiltCard } from "./ui";

const pillars = [
  {
    icon: <Rocket className="size-5" />,
    title: "Production > prototype",
    body: "We don't build demoware. Every system ships with evals, monitoring, and rollback paths from day one.",
    metric: "0",
    metricLabel: "POCs left in drawers",
  },
  {
    icon: <Target className="size-5" />,
    title: "ROI-first scoping",
    body: "Each engagement begins with a $-denominated business case. If the math doesn't work, we don't build it.",
    metric: "3.4×",
    metricLabel: "Median 12-mo ROI",
  },
  {
    icon: <Boxes className="size-5" />,
    title: "Vendor-agnostic",
    body: "OpenAI, Anthropic, OSS, on-prem, hybrid cloud — chosen on merit per workload, not vendor lock-in.",
    metric: "9+",
    metricLabel: "Model providers",
  },
  {
    icon: <ShieldCheck className="size-5" />,
    title: "Security & compliance baked in",
    body: "SOC 2, GDPR, HIPAA-ready architectures. Lineage, audit trails, and access controls are not afterthoughts.",
    metric: "100%",
    metricLabel: "Audit coverage",
  },
];

export default function Differentiation() {
  return (
    <section
      id="differentiation"
      className="relative isolate overflow-hidden border-t border-white/5 bg-ink-900 py-24 md:py-32"
    >
      {/* Decorative ring */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-1/3 -z-10 size-[600px] rounded-full opacity-20 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, #5d86ff 0%, transparent 60%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 bottom-0 -z-10 size-[500px] rounded-full opacity-20 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, #c5fa61 0%, transparent 60%)",
        }}
      />

      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Why Acirrox"
            title={
              <>
                Engineered different —{" "}
                <span className="font-serif italic text-white/85">
                  by design.
                </span>
              </>
            }
            description="Four principles that show up in every engagement, every code review, every architecture call."
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <TiltCard
                className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-6 backdrop-blur lift glow-border"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -top-12 -right-12 size-40 rounded-full opacity-30 blur-3xl transition-opacity group-hover:opacity-60"
                  style={{
                    background:
                      i % 2 === 0
                        ? "radial-gradient(circle, #5d86ff, transparent 60%)"
                        : "radial-gradient(circle, #c5fa61, transparent 60%)",
                  }}
                />
                <div className="relative">
                  <div className="grid size-10 place-items-center rounded-xl border border-white/10 bg-ink-900/80 text-white">
                    {p.icon}
                  </div>
                  <h3 className="mt-5 text-balance text-xl font-medium text-white">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-pretty text-sm leading-relaxed text-white/60">
                    {p.body}
                  </p>
                  <div className="mt-6 flex items-baseline gap-3 border-t border-white/10 pt-5">
                    <span className="font-serif text-3xl text-white">{p.metric}</span>
                    <span className="text-[11px] uppercase tracking-[0.16em] text-white/40">
                      {p.metricLabel}
                    </span>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
