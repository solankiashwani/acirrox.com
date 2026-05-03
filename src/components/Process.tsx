import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Map, Wrench, Rocket, Activity } from "lucide-react";
import { Reveal, SectionHeading } from "./ui";

const steps = [
  {
    week: "Week 1–2",
    title: "Diagnose",
    icon: <Map className="size-5" />,
    body: "Deep dive on data state, ops, and ROI hypotheses. Output: prioritized roadmap with $-denominated business cases.",
    artifacts: ["Data audit", "ROI model", "Roadmap"],
    accent: "from-accent-500/30",
  },
  {
    week: "Week 3–6",
    title: "Engineer foundation",
    icon: <Wrench className="size-5" />,
    body: "Schema unification, vector indexes, eval harness, lineage. The non-glamorous layer that makes everything else work.",
    artifacts: ["Schemas", "Indexes", "Evals", "Lineage"],
    accent: "from-lime-500/30",
  },
  {
    week: "Week 7–10",
    title: "Build & deploy",
    icon: <Rocket className="size-5" />,
    body: "Custom systems on top of the foundation: RAG, copilots, pipelines. Iterated against your evals, not vibes.",
    artifacts: ["RAG", "Copilots", "Pipelines"],
    accent: "from-pink-500/30",
  },
  {
    week: "Week 11–12+",
    title: "Operate & scale",
    icon: <Activity className="size-5" />,
    body: "Monitoring, cost guardrails, and lifecycle in production. Knowledge transfer to your team — or fully managed.",
    artifacts: ["Monitoring", "Cost", "Lifecycle"],
    accent: "from-orange-500/30",
  },
];

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 30%"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="process"
      className="relative isolate overflow-hidden border-t border-white/5 bg-ink-900 py-24 md:py-32"
    >
      <div aria-hidden className="absolute inset-0 -z-10 bg-grid-fine opacity-15 radial-fade" />

      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Process"
            title={
              <>
                From fragmented data to deployed AI in{" "}
                <span className="font-serif italic text-white/85">
                  8–12 weeks.
                </span>
              </>
            }
            description="A repeatable engineering process that compounds. No mystery, no theatrics."
          />
        </Reveal>

        <div ref={ref} className="relative mt-16">
          {/* Vertical line */}
          <div
            aria-hidden
            className="absolute left-6 top-2 bottom-2 w-px bg-white/10 md:left-1/2"
          />
          <motion.div
            aria-hidden
            style={{ height: lineHeight }}
            className="absolute left-6 top-2 w-px bg-gradient-to-b from-accent-400 via-lime-400 to-pink-400 shadow-[0_0_12px_rgba(93,134,255,0.6)] md:left-1/2"
          />

          <ol className="space-y-14 md:space-y-20">
            {steps.map((s, i) => {
              const right = i % 2 === 1;
              return (
                <li key={s.title} className="relative">
                  <Reveal delay={i * 0.05}>
                    <div
                      className={`grid grid-cols-1 gap-6 md:grid-cols-2 ${
                        right ? "md:[&>*:first-child]:order-2" : ""
                      }`}
                    >
                      {/* Card */}
                      <div className={`pl-16 md:pl-0 ${right ? "md:pl-12" : "md:pr-12 md:text-right"}`}>
                        <div
                          className={`relative inline-block rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-6 backdrop-blur lift glow-border ${
                            right ? "" : "md:text-left"
                          }`}
                        >
                          <div
                            aria-hidden
                            className={`absolute -top-12 -right-12 size-40 rounded-full opacity-30 blur-3xl bg-gradient-to-br ${s.accent} to-transparent`}
                          />
                          <div className="relative">
                            <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-white/50">
                              <span className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-white/70">
                                0{i + 1}
                              </span>
                              {s.week}
                            </div>
                            <h3 className="mt-3 text-2xl font-medium text-white">
                              {s.title}
                            </h3>
                            <p className="mt-2 max-w-md text-sm leading-relaxed text-white/60">
                              {s.body}
                            </p>
                            <div className="mt-5 flex flex-wrap gap-1.5">
                              {s.artifacts.map((a) => (
                                <span
                                  key={a}
                                  className="rounded-md border border-white/10 bg-white/[0.02] px-2 py-0.5 text-[11px] text-white/55"
                                >
                                  {a}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Marker */}
                      <div className="hidden md:block" />
                    </div>
                  </Reveal>

                  {/* Center node */}
                  <div className="absolute left-6 top-2 -translate-x-1/2 md:left-1/2">
                    <div className="relative grid size-12 place-items-center rounded-full border border-white/15 bg-ink-900/90 text-white shadow-[0_0_24px_-6px_rgba(93,134,255,0.6)] backdrop-blur">
                      <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-accent-500/40 to-lime-500/30 blur-md" />
                      {s.icon}
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
