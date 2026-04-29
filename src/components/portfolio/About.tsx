import { Briefcase, Code, GraduationCap, Sparkles } from "lucide-react";
import { Github, Linkedin, Mail } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { SiGithub, SiWhatsapp } from "react-icons/si";
import { Link } from "react-router-dom";

const stats = [
  { icon: Code, label: "Clean Coder", value: "Developer" },
  { icon: GraduationCap, label: "Continuous", value: "Learner" },
  { icon: Sparkles, label: "Status", value: "Open to Work" },
];

export const About = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="about" className="section-padding relative">
      <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-purple/15 blur-[120px] -z-0" />

      <div ref={ref} className={`mx-auto max-w-6xl relative z-10 ${visible ? "animate-fade-in-up" : "opacity-0"}`}>
        <SectionHeading eyebrow="About Me" title={<>The story <span className="gradient-text">behind the code</span></>} />

        <div className="grid lg:grid-cols-5 gap-12 items-center mt-16">
          <div className="lg:col-span-2">
            <div className="relative aspect-square max-w-sm mx-auto">
              <div className="absolute -inset-4 rounded-3xl gradient-bg opacity-30 blur-2xl" />
              <div className="relative h- glass-card rounded-3xl overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0" style={{ background: "var(--gradient-glow)" }} />
                <div className="relative text-center">
                  <div className="w-full h-[500px]">
                    <img src="https://i.ibb.co.com/gbhBRGcD/Chat-GPT-Image-Apr-29-2026-05-37-46-AM.png" alt="about images" className="w-full"/>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 mt-8">
              <Link to="https://github.com/naofel-badsha" aria-label="GitHub" className="w-9 h-9 rounded-lg glass flex items-center justify-center hover:text-primary border-[#7B67F6]/50 hover:-translate-y-2 duration-500 ">
                <Github className="w-4 h-4 animate-pulse" />
              </Link>
              <Link to="https://bd.linkedin.com/in/md-naofel-badsha" aria-label="LinkedIn" className="w-9 h-9 rounded-lg glass flex items-center justify-center hover:text-primary border-[#7B67F6]/50 hover:-translate-y-3 duration-500">
                <Linkedin className="w-4 h-4 animate-pulse" />
              </Link>
              <Link to="mailto:naofelbadsha@gmail.com" aria-label="Email" className="w-9 h-9 rounded-lg glass flex items-center justify-center hover:text-primary border-[#7B67F6]/50 hover:-translate-y-3 duration-500">
                <Mail className="w-4 h-4 animate-pulse" />
              </Link>
              <Link to="tel:+8801737268782" aria-label="Email" className="w-9 h-9 rounded-lg glass flex items-center justify-center hover:text-primary border-[#7B67F6]/50 hover:-translate-y-3 duration-500">
                <SiWhatsapp className="w-4 h-4 animate-pulse" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate <span className="text-foreground font-semibold">Frontend Developer</span> who turns ideas into elegant, fast, and accessible interfaces. I love crafting pixel-perfect UIs with React and Next.js, and I'm actively expanding into the <span className="text-foreground font-semibold">backend world</span> with Node.js and MongoDB.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I bring a growth mindset, strong communication, and a problem-solving mentality to every project — whether it's a freelance build or a long-term collaboration with a product team. And currently learning Full Stack. After 3 years, I will be a full-stack developer,and I will give team lead.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 pt-4 ">
              {stats.map((s) => (
                <div key={s.label} className="glass-card rounded-2xl p-5 hover-lift hover:border-[#7B67F6]/50 duration-300">
                  <s.icon className="w-6 h-6 text-primary mb-3" />
                  <div className="font-display font-bold text-xl">{s.value}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const SectionHeading = ({
  eyebrow,
  title,
  subtitle,
  center = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  center?: boolean;
}) => (
  <div className={center ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}>
    {/* <div className={`inline-flex items-center gap-2 px-3 border-[linear-gradient(135deg,#6ea8ff,#b07cff,#69e9ff)] py-1 rounded-full glass text-xs uppercase tracking-[0.2em] text-muted-foreground ${center ? "" : ""}`}>
      <span className="w-1.5 h-1.5 rounded-full gradient-bg " /> {eyebrow}
    </div> */}

    <div className="inline-flex p-[1px] rounded-full bg-[linear-gradient(135deg,#6ea8ff,#b07cff,#69e9ff)]">
      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs uppercase tracking-[0.2em] text-muted-foreground ${center ? "" : ""}`}>
        <span className="w-2 h-2 rounded-full gradient-bg animate-ping" />
        {eyebrow}
      </div>
    </div>

    <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold tracking-tight leading-tight">
      {title}
    </h2>
    {subtitle && <p className="mt-4 text-muted-foreground text-lg">{subtitle}</p>}
  </div>
);
