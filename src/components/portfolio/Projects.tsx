import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { SectionHeading } from "./About";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";

const projects = [
  {
    title: "Lumen — Business Website",
    description:
      "A fully responsive marketing site for a SaaS startup. Built with Next.js and Tailwind, optimized for SEO and Core Web Vitals.",
    image: p1,
    tags: ["Next.js", "Tailwind", "Framer Motion", "SEO"],
  },
  {
    title: "Inkwell — Blog / CMS App",
    description:
      "A full-stack blog platform with markdown editor, dynamic routing and authentication. Clean reading experience from day one.",
    image: p2,
    tags: ["React", "Node.js", "MongoDB", "Auth"],
  },
  {
    title: "Pulse — SaaS Dashboard UI",
    description:
      "An analytics dashboard with charts, dark mode and a polished design system. Pixel-perfect on every breakpoint.",
    image: p3,
    tags: ["React", "TypeScript", "Recharts", "Design System"],
  },
];

export const Projects = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="projects" className="section-padding relative">
      <div className="absolute -top-20 right-0 w-96 h-96 rounded-full bg-primary/15 blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-accent/15 blur-[120px]" />

      <div ref={ref} className={`mx-auto max-w-6xl relative ${visible ? "animate-fade-in-up" : "opacity-0"}`}>
        <SectionHeading
          eyebrow="Featured Work"
          title={<>Projects I'm <span className="gradient-text">proud of</span></>}
          subtitle="A selection of recent builds showcasing design, code quality, and real-world thinking."
          center
        />

        <div className="grid lg:grid-cols-3 gap-7 mt-16">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className="group glass-card rounded-3xl overflow-hidden hover-lift flex flex-col"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <div className="absolute inset-0 gradient-bg opacity-20 z-10 mix-blend-overlay" />
                <img
                  src={p.image}
                  alt={p.title}
                  width={1024}
                  height={640}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/95 via-card/20 to-transparent" />
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-display text-xl font-semibold mb-2">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">{p.description}</p>

                <div className="flex flex-wrap gap-2 mt-5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-secondary border border-border text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 mt-6">
                  <Button variant="hero" size="sm" className="flex-1">
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </Button>
                  <Button variant="glass" size="sm" className="flex-1">
                    <Github className="w-4 h-4" /> Code
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
