import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

/* -------------------------------------------------------------------------- */
/*  Aurora background                                                         */
/* -------------------------------------------------------------------------- */
export function Aurora({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden
    >
      <div
        className="aurora"
        style={{
          background:
            "radial-gradient(40% 60% at 20% 30%, #2e3bff 0%, transparent 60%), radial-gradient(35% 50% at 80% 20%, #c5fa61 0%, transparent 60%), radial-gradient(45% 60% at 60% 80%, #ff5fa2 0%, transparent 60%)",
        }}
      />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Spotlight that follows the cursor                                         */
/* -------------------------------------------------------------------------- */
export function Spotlight({
  children,
  className = "",
  size = 380,
  color = "rgba(93, 134, 255, 0.18)",
}: {
  children: ReactNode;
  className?: string;
  size?: number;
  color?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(-9999);
  const y = useMotionValue(-9999);
  const opacity = useMotionValue(0);

  const background = useMotionTemplate`radial-gradient(${size}px circle at ${x}px ${y}px, ${color}, transparent 60%)`;

  function onMove(e: React.MouseEvent) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  }

  return (
    <div
      ref={ref}
      onMouseEnter={() => opacity.set(1)}
      onMouseLeave={() => opacity.set(0)}
      onMouseMove={onMove}
      className={`relative ${className}`}
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 transition-opacity"
        style={{ opacity, background }}
      />
      {children}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Magnetic button                                                            */
/* -------------------------------------------------------------------------- */
export function MagneticButton({
  children,
  href,
  variant = "primary",
  className = "",
  onClick,
}: {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  onClick?: () => void;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useSpring(0, { stiffness: 200, damping: 18 });
  const y = useSpring(0, { stiffness: 200, damping: 18 });

  function onMouseMove(e: React.MouseEvent) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    x.set(relX * 0.25);
    y.set(relY * 0.4);
  }

  function reset() {
    x.set(0);
    y.set(0);
  }

  const styles =
    variant === "primary"
      ? "bg-white text-ink-900 hover:bg-lime-400"
      : variant === "secondary"
        ? "bg-white/5 text-white border border-white/15 hover:bg-white/10 hover:border-white/25"
        : "text-white/80 hover:text-white";

  return (
    <motion.a
      ref={ref}
      href={href ?? "#"}
      onClick={onClick}
      onMouseMove={onMouseMove}
      onMouseLeave={reset}
      style={{ x, y }}
      className={`relative inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-colors ${styles} ${className}`}
    >
      {children}
    </motion.a>
  );
}

/* -------------------------------------------------------------------------- */
/*  Section eyebrow / pill                                                    */
/* -------------------------------------------------------------------------- */
export function Eyebrow({
  children,
  dotClassName = "bg-lime-400",
}: {
  children: ReactNode;
  dotClassName?: string;
}) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-white/70 backdrop-blur">
      <span className={`h-1.5 w-1.5 rounded-full ${dotClassName} animate-pulse-glow`} />
      {children}
    </span>
  );
}

/* -------------------------------------------------------------------------- */
/*  Section heading wrapper                                                   */
/* -------------------------------------------------------------------------- */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div
      className={`flex flex-col gap-5 ${
        align === "center" ? "items-center text-center" : "items-start"
      }`}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="text-balance text-4xl font-medium tracking-[-0.02em] text-white md:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description && (
        <p className="text-pretty max-w-2xl text-base leading-relaxed text-white/60 md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Stat counter                                                              */
/* -------------------------------------------------------------------------- */
export function StatCounter({
  value,
  prefix = "",
  suffix = "",
  duration = 1.6,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}) {
  const [shown, setShown] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let started = false;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started) {
            started = true;
            const start = performance.now();
            const tick = (t: number) => {
              const p = Math.min(1, (t - start) / (duration * 1000));
              const eased = 1 - Math.pow(1 - p, 3);
              setShown(Math.round(value * eased));
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref} className="tabular">
      {prefix}
      {shown.toLocaleString()}
      {suffix}
    </span>
  );
}

/* -------------------------------------------------------------------------- */
/*  Animated reveal wrapper                                                   */
/* -------------------------------------------------------------------------- */
export function Reveal({
  children,
  delay = 0,
  y = 24,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Decorative grid backdrop                                                  */
/* -------------------------------------------------------------------------- */
export function GridBackdrop({
  className = "",
  fine = false,
  fade = true,
}: {
  className?: string;
  fine?: boolean;
  fade?: boolean;
}) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 ${
        fine ? "bg-grid-fine" : "bg-grid"
      } ${fade ? "radial-fade" : ""} ${className}`}
    />
  );
}

/* -------------------------------------------------------------------------- */
/*  Tilt 3D card                                                              */
/* -------------------------------------------------------------------------- */
export function TiltCard({
  children,
  className = "",
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const rx = useSpring(0, { stiffness: 200, damping: 20 });
  const ry = useSpring(0, { stiffness: 200, damping: 20 });

  function onMove(e: React.MouseEvent) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    ry.set(px * 8);
    rx.set(-py * 8);
  }
  function reset() {
    rx.set(0);
    ry.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{
        rotateX: rx,
        rotateY: ry,
        transformStyle: "preserve-3d",
        ...style,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Beam container — vertical light streaks                                    */
/* -------------------------------------------------------------------------- */
export function Beams({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          className="absolute top-0 h-full w-px animate-beam bg-gradient-to-b from-transparent via-white/40 to-transparent"
          style={{
            left: `${15 + i * 18}%`,
            animationDelay: `${i * 1.4}s`,
          }}
        />
      ))}
    </div>
  );
}
