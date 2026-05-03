import { Lock, Sparkles } from "lucide-react";
import { Reveal, SectionHeading } from "./ui";

export default function Proof() {
  return (
    <section
      id="proof"
      className="relative isolate overflow-hidden border-t border-white/5 bg-ink-950 py-24 md:py-32"
    >
      <div aria-hidden className="absolute inset-0 -z-10 bg-grid-fine opacity-15" />

      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Proof"
            title={
              <>
                Case studies & proof points{" "}
                <span className="text-white/55">
                  coming soon.
                </span>
              </>
            }
            description="We’ll publish verified outcomes, references, and technical write-ups once they’re approved for release."
          />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
          <Reveal delay={0.05}>
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur lift glow-border">
              <div className="flex items-center gap-2 text-white/70">
                <Lock className="size-4 text-white/50" />
                <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/50">
                  References
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-white/60">
                Client names and outcomes will only be published with explicit approval.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur lift glow-border">
              <div className="flex items-center gap-2 text-white/70">
                <Sparkles className="size-4 text-lime-400/80" />
                <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/50">
                  What we can publish
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-white/60">
                Anonymized case studies, architecture notes, and measurable before/after metrics.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
