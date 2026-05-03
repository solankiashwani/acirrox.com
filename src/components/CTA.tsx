import { ArrowUpRight, Calendar, FileText } from "lucide-react";
import { Aurora, Beams, MagneticButton, Reveal } from "./ui";

export default function CTA() {
  return (
    <section
      id="cta"
      className="relative isolate overflow-hidden border-t border-white/5 bg-ink-900 py-24 md:py-32"
    >
      <div className="absolute inset-0 -z-10">
        <Aurora />
        <div className="absolute inset-0 bg-grid radial-fade opacity-50" />
        <Beams />
        <div className="absolute inset-0 bg-noise opacity-[0.04] mix-blend-overlay" />
      </div>

      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-b from-ink-800/80 to-ink-950/80 p-10 backdrop-blur-xl md:p-16">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(60%_80%_at_50%_0%,rgba(93,134,255,0.22),transparent)]"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -top-32 -right-24 size-80 rounded-full bg-lime-400/20 blur-3xl"
            />

            <div className="relative flex flex-col items-center text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-white/70 backdrop-blur">
                <span className="size-1.5 rounded-full bg-lime-400 animate-pulse-glow" />
                Now booking Q3 engagements
              </span>
              <h2 className="mt-6 text-balance text-4xl font-medium leading-[1.02] tracking-[-0.02em] text-white md:text-6xl lg:text-7xl">
                Let's turn your data into{" "}
                <span className="font-serif italic gradient-text-accent">
                  systems that earn.
                </span>
              </h2>
              <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-white/60 md:text-lg">
                30 minutes with our founding engineers. Walk away with at least one
                concrete architecture decision — whether you work with us or not.
              </p>

              <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
                <MagneticButton
                  href="#"
                  variant="primary"
                  className="px-6 py-3.5 text-[15px]"
                >
                  <Calendar className="size-4" strokeWidth={2.2} />
                  Book architecture call
                  <ArrowUpRight className="size-4" strokeWidth={2.2} />
                </MagneticButton>
                <MagneticButton
                  href="#"
                  variant="secondary"
                  className="px-6 py-3.5 text-[15px]"
                >
                  <FileText className="size-4" strokeWidth={2.2} />
                  Get AI ROI roadmap
                </MagneticButton>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-x-8 gap-y-2 text-xs text-white/50 sm:gap-x-12">
                <div>
                  <div className="font-serif text-2xl text-white">30 min</div>
                  <div className="mt-0.5 uppercase tracking-[0.16em]">Call length</div>
                </div>
                <div>
                  <div className="font-serif text-2xl text-white">48 hrs</div>
                  <div className="mt-0.5 uppercase tracking-[0.16em]">To roadmap</div>
                </div>
                <div>
                  <div className="font-serif text-2xl text-white">$0</div>
                  <div className="mt-0.5 uppercase tracking-[0.16em]">Discovery cost</div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
