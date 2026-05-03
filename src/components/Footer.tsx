import { ArrowUpRight } from "lucide-react";

const groups: { title: string; links: string[] }[] = [
  {
    title: "Offerings",
    links: ["AI Roadmap", "Custom Systems", "Integration", "AI Ops"],
  },
  {
    title: "Company",
    links: ["About", "Engineers", "Careers", "Contact"],
  },
  {
    title: "Resources",
    links: ["Field notes", "Architecture briefs", "Eval cookbook", "Security"],
  },
];

export default function Footer() {
  return (
    <footer className="relative isolate border-t border-white/10 bg-ink-950 pt-20 pb-10">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid size-7 place-items-center rounded-md bg-gradient-to-br from-accent-500 to-lime-400 font-mono text-xs text-ink-900">
                AI
              </span>
              <span className="text-base font-semibold tracking-tight text-white">
                Acirrox Pvt Ltd
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/55">
              Applied AI and automation built on a production-grade data foundation—so you ship reliable systems, not demos.
            </p>
            <a
              href="#cta"
              className="group mt-6 inline-flex items-center gap-2 text-sm text-white/80 hover:text-white"
            >
              Start an engagement
              <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>

          {groups.map((g) => (
            <div key={g.title}>
              <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/40">
                {g.title}
              </div>
              <ul className="mt-4 space-y-2">
                {g.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm text-white/70 transition-colors hover:text-white"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Big wordmark */}
        <div
          aria-hidden
          className="mt-16 select-none overflow-hidden text-center"
        >
          <div className="bg-gradient-to-b from-white/20 to-transparent bg-clip-text font-serif text-[clamp(80px,18vw,260px)] leading-none tracking-[-0.04em] text-transparent">
            Acirrox
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/40 md:flex-row">
          <span>© {new Date().getFullYear()} Acirrox Pvt Ltd. All rights reserved.</span>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Security</a>
            <span className="inline-flex items-center gap-1.5">
              <span className="size-1.5 rounded-full bg-lime-400 animate-pulse-glow" />
              SOC 2 Type II
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
