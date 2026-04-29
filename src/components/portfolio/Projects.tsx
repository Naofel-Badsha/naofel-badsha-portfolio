import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { SectionHeading } from "./About";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Insurance Company Website",
    description:
      "A fully responsive marketing site for a SaaS startup. Built with Next.js and Tailwind, optimized for SEO and Core Web Vitals.",
    image: "https://i.ibb.co.com/mrjmP7YP/Capture.png",
    tags: ["Next.js", "Tailwind", "Framer Motion", "SEO"],
    liveDemo: "https://full-custom-nextjs-project.vercel.app/",
    sourcCode: "https://github.com/Naofel-Badsha/full-custom-nextjs-project"
  },
  {
    title: "Online Food Delivery App",
    description:
      "A full-stack food delivery platform with a markdown editor, dynamic routing, and authentication. Clean reading experience from day one.",
    image: "https://i.ibb.co.com/xqZjDsTm/Capture-2.png",
    tags: ["React", "Tailwind", "Node.js", "MongoDB", "Auth"],
    liveDemo: "https://food-delivery-1-client.vercel.app/",
    sourcCode: "https://github.com/Naofel-Badsha/food-delivery-1-client"
  },
  {
    title: "Clean Code Single Agency App",
    description:
      "A modern single-page agency website with a beautiful static dashboard and secure Firebase Authentication integration.",
    image: "https://i.ibb.co.com/ZRtWMcWb/Capture.png",
    tags: ["React", "Tailwind", "Recharts", "Firebase", "Design System"],
    liveDemo: "https://clean-code-agency-website.vercel.app/",
    sourcCode: "https://github.com/Naofel-Badsha/CleanCode-Agency-Website"
  },
  {
    title: "Online Furniture-mart App",
    description:
      "A modern multi-page eCommerce demo website for furniture shopping, featuring a clean and professional dashboard design.",
    image: "https://i.ibb.co.com/KcV2WMF9/Capture-1.png",
    tags: ["React", "Tailwind", "Recharts", "Design System"],
    liveDemo: "https://react-js-router-practice.vercel.app/",
    sourcCode: "https://github.com/Naofel-Badsha/React-Js-Router-Practice"
  },
];

export const Projects = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="projects" className="section-padding relative">
      {/* <div className="absolute -top-20 right-0 w-96 h-96 rounded-full bg-primary/15 blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-accent/15 blur-[120px]" /> */}
      <div className="absolute -top-20 right-0 w-96 h-96 rounded-full bg-primary/15 blur-[80px] animate-pulse" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-accent/15 blur-[50px] animate-pulse" />

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

                <div className="flex items-center justify-between gap-3 mt-6">
                  <Link to={p.liveDemo}>
                    <Button variant="hero" size="sm" className="flex-1">
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </Button>
                  </Link>

                  <Link to={p.sourcCode}>
                  <Button variant="glass" size="sm" className="flex-1 border-[#7B67F6]/30 hover:border-[#7B67F6]/50 hover:-translate-y-1" >
                    <Github className="w-4 h-4 animate-pulse" /> Code
                  </Button>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
