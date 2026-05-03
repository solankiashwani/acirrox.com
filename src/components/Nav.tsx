import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowUpRight, Moon, Sun } from "lucide-react";
import { MagneticButton } from "./ui";
import { useTheme } from "../theme";

const links = [
  { label: "Offerings", href: "#offerings" },
  { label: "Process", href: "#process" },
  { label: "Proof", href: "#proof" },
  { label: "Pricing", href: "#pricing" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggle } = useTheme();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.2,
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Scroll progress indicator */}
      <motion.div
        aria-hidden
        style={{ scaleX: progress }}
        className="fixed left-0 right-0 top-0 z-[60] h-px origin-left bg-gradient-to-r from-accent-500 via-lime-400 to-accent-500"
      />

      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-3 z-50 flex justify-center px-3"
      >
        <nav
          className={`flex w-full max-w-6xl items-center justify-between rounded-full border border-white/10 px-3 py-2 transition-all duration-500 ${
            scrolled
              ? "bg-ink-900/70 backdrop-blur-xl shadow-[0_8px_30px_-12px_rgba(0,0,0,0.6)]"
              : "bg-white/[0.02] backdrop-blur-md"
          }`}
        >
          <a href="#" className="flex items-center gap-2 px-2">
            <Logo />
            <span className="text-sm font-semibold tracking-tight text-white">
              Acirrox
            </span>
            <span className="hidden text-[11px] font-medium uppercase tracking-[0.18em] text-white/40 sm:inline">
              / AI
            </span>
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="rounded-full px-3 py-1.5 text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-1.5">
            <ThemeToggle theme={theme} onToggle={toggle} />
            <a
              href="#cta"
              className="hidden px-2 text-sm text-white/70 hover:text-white sm:inline"
            >
              Get roadmap
            </a>
            <MagneticButton href="#cta" className="px-4 py-2 text-sm">
              Book call
              <ArrowUpRight className="size-3.5" strokeWidth={2.2} />
            </MagneticButton>
          </div>
        </nav>
      </motion.header>
    </>
  );
}

function ThemeToggle({
  theme,
  onToggle,
}: {
  theme: "dark" | "light";
  onToggle: () => void;
}) {
  const isDark = theme === "dark";
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      className="group relative grid size-9 place-items-center overflow-hidden rounded-full border border-white/10 bg-white/[0.03] text-white/80 transition-colors hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
    >
      <motion.span
        key={theme}
        initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="grid place-items-center"
      >
        {isDark ? (
          <Moon className="size-4" strokeWidth={1.8} />
        ) : (
          <Sun className="size-4" strokeWidth={1.8} />
        )}
      </motion.span>
    </button>
  );
}

function Logo() {
  return (
    <span className="relative grid size-7 place-items-center overflow-hidden rounded-md bg-ink-800 ring-1 ring-white/10">
      <span className="absolute inset-0 bg-[conic-gradient(from_120deg,_#5d86ff,_#c5fa61,_#ff5fa2,_#5d86ff)] opacity-80" />
      <span className="absolute inset-[1.5px] rounded-[5px] bg-ink-900" />
      <svg
        viewBox="0 0 24 24"
        className="relative z-10 size-4 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
      >
        {/* Monogram hinting "A" + "I" */}
        <path
          d="M6.5 18 L11 6 L15.5 18"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.6 13.3 H13.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18 7 V18"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18 6.2 V6.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}
