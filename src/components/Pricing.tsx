import { Check, Sparkles } from "lucide-react";
import { MagneticButton, Reveal, SectionHeading } from "./ui";

const tiers = [
  {
    name: "ROI Roadmap",
    tagline: "Strategic discovery sprint",
    price: "$18k",
    range: "fixed",
    timeline: "2 weeks",
    description:
      "Pinpoint your highest-ROI AI use cases against your real data. Walk away with a prioritized plan you can hand to any engineering team.",
    features: [
      "Data layer audit",
      "Use case scoring & prioritization",
      "$-denominated ROI model",
      "12-month roadmap",
      "Architecture recommendations",
    ],
    cta: "Get the roadmap",
    accent: false,
  },
  {
    name: "AI System Build",
    tagline: "Most teams choose this",
    price: "$95k",
    range: "from",
    timeline: "8–12 weeks",
    description:
      "Foundation + custom AI system shipped to production. Includes evals, monitoring, and full documentation. Fixed scope, fixed price.",
    features: [
      "Everything in Roadmap",
      "Production-grade data layer",
      "Custom AI system (RAG / copilot / pipeline)",
      "Eval harness + monitoring",
      "SOC 2-aligned architecture",
      "Knowledge transfer to your team",
    ],
    cta: "Book architecture call",
    accent: true,
  },
  {
    name: "AI Ops Partnership",
    tagline: "Long-term embedded team",
    price: "Custom",
    range: "monthly",
    timeline: "Ongoing",
    description:
      "Embedded engineering team running and scaling your AI systems in production. Monitoring, evals, cost control, model lifecycle.",
    features: [
      "Dedicated senior engineers",
      "24/7 monitoring & on-call",
      "Cost guardrails & optimization",
      "Quarterly model lifecycle reviews",
      "New use case incubation",
    ],
    cta: "Talk to founders",
    accent: false,
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative isolate overflow-hidden border-t border-white/5 bg-ink-950 py-24 md:py-32"
    >
      <div aria-hidden className="absolute inset-0 -z-10 bg-grid-fine opacity-15" />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent"
      />

      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Engagement"
            title={
              <>
                Three ways to work together.{" "}
                <span className="text-white/55">
                  Fixed scope, transparent pricing.
                </span>
              </>
            }
            description="No retainers without deliverables. No bloated SOWs. Pick the entry point that matches your stage."
            align="center"
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {tiers.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.06}>
              <div
                className={`relative h-full overflow-hidden rounded-2xl border p-7 backdrop-blur lift ${
                  t.accent
                    ? "border-white/15 bg-gradient-to-b from-white/[0.06] to-white/[0.01] shadow-[0_30px_80px_-20px_rgba(93,134,255,0.4)] md:scale-[1.02]"
                    : "border-white/10 bg-white/[0.02] glow-border"
                }`}
              >
                {t.accent && (
                  <>
                    <div
                      aria-hidden
                      className="pointer-events-none absolute -top-32 left-1/2 size-72 -translate-x-1/2 rounded-full bg-accent-500/20 blur-3xl"
                    />
                    <div className="absolute right-5 top-5">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-lime-400/30 bg-lime-400/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-lime-300">
                        <Sparkles className="size-3" />
                        Most popular
                      </span>
                    </div>
                  </>
                )}
                <div className="relative">
                  <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/50">
                    {t.tagline}
                  </div>
                  <h3 className="mt-2 text-2xl font-medium text-white">
                    {t.name}
                  </h3>

                  <div className="mt-6 flex items-baseline gap-2">
                    {t.range === "from" && (
                      <span className="text-xs uppercase tracking-[0.16em] text-white/40">
                        from
                      </span>
                    )}
                    <span className="font-serif text-5xl text-white">
                      {t.price}
                    </span>
                    {t.range === "monthly" && (
                      <span className="text-sm text-white/50">/ month</span>
                    )}
                  </div>
                  <div className="mt-1 text-xs text-white/40">
                    {t.timeline}
                  </div>

                  <p className="mt-5 text-sm leading-relaxed text-white/60">
                    {t.description}
                  </p>

                  <ul className="mt-6 space-y-2.5 border-t border-white/10 pt-6">
                    {t.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2.5 text-sm text-white/80"
                      >
                        <span
                          className={`mt-0.5 grid size-4 shrink-0 place-items-center rounded-full ${
                            t.accent ? "bg-lime-400 text-ink-900" : "bg-white/10 text-white/80"
                          }`}
                        >
                          <Check className="size-3" strokeWidth={2.5} />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 flex">
                    <MagneticButton
                      href="#cta"
                      variant={t.accent ? "primary" : "secondary"}
                      className="w-full justify-center px-5 py-3"
                    >
                      {t.cta}
                    </MagneticButton>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-10 max-w-2xl text-center text-xs text-white/40">
            All engagements include weekly demos, written architecture decisions, and
            full source ownership at handoff. No black boxes.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
