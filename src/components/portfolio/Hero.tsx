import { ArrowRight, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import avatar from "@/assets/avatar.png";

const techIcons = [
  { label: "React.js", className: "top-4 left-0 animate-float", delay: "0s" },
  { label: "Next.js", className: "top-1/3 -right-2", delay: "1.2s" },
  { label: "TypeScript", className: "bottom-10 left-2", delay: "2.4s" },
  { label: "Tailwind", className: "bottom-24 -right-4", delay: "0.6s" },
  { label: "Node.js", className: "top-2/4 -left-8", delay: "1.8s" },
];

export const Hero = () => {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-16 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute top-1/4 -left-32 w-[480px] h-[480px] rounded-full bg-primary/30 blur-[120px] animate-glow-pulse" />
      <div className="absolute bottom-0 -right-32 w-[520px] h-[520px] rounded-full bg-accent/30 blur-[140px] animate-glow-pulse" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-cyan/10 blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-7xl w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left */}
        <div className="space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan" />
            </span>
            <span className="text-muted-foreground">Available for new opportunities</span>
          </div>

          <div className="space-y-4">
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
              Hi, I'm <span className="gradient-text">Naofel Badsha</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
              Frontend Developer
              <span className="mx-2 text-primary/40">|</span>
              <span className="text-foreground">React</span>
              <span className="mx-2 text-primary/40">|</span>
              <span className="text-foreground">Next.js</span>
            </p>
          </div>

          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            I build modern, responsive and high-performance web experiences with clean code and user-focused design.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Button variant="hero" size="lg" onClick={() => scrollTo("projects")}>
              View Projects <ArrowRight className="w-4 h-4" />
            </Button>
            <Button variant="glass" size="lg" onClick={() => scrollTo("contact")}>
              <Mail className="w-4 h-4" /> Hire Me
            </Button>
            <Button variant="outlineGlow" size="lg">
              <Download className="w-4 h-4" /> Download CV
            </Button>
          </div>

          <div className="flex items-center gap-8 pt-6 border-t border-border/50">
            <div>
              <div className="font-display text-2xl font-bold gradient-text">05+</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Projects</div>
            </div>
            <div>
              <div className="font-display text-2xl font-bold gradient-text">1.5+</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Years Coding</div>
            </div>
            <div>
              <div className="font-display text-2xl font-bold gradient-text">100%</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Dedication</div>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="relative animate-scale-in">
          <div className="relative mx-auto w-[320px] h-[320px] md:w-[440px] md:h-[440px]">
            {/* Spinning gradient ring */}
            <div className="absolute inset-0 rounded-full animate-spin-slow opacity-70"
              style={{ background: "conic-gradient(from 0deg, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--cyan)), hsl(var(--primary)))" }}
            />
            <div className="absolute inset-[3px] rounded-full bg-background" />
            <div className="absolute inset-4 rounded-full overflow-hidden glass-card">
              <div className="absolute inset-0" style={{ background: "var(--gradient-glow)" }} />
              <img
                src={avatar}
                alt="Developer avatar"
                width={440}
                height={440}
                className="relative w-full h-full object-cover"
              />
            </div>

            {/* Floating tech badges */}
            {techIcons.map((t) => (
              <div
                key={t.label}
                className={`absolute border-[#5379f656] glass-card rounded-2xl px-4 py-2 text-sm font-semibold animate-float ${t.className}`}
                style={{ animationDelay: t.delay }}
              >
                <span className="gradient-text">{t.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
