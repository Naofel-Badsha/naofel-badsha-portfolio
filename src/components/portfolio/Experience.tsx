import { useScrollReveal } from "@/hooks/useScrollReveal";
import { SectionHeading } from "./About";

const items = [
  {
    year: "2022",
    title: "Started Coding Journey",
    desc: "Began as a self-taught developer learning HTML, CSS and JavaScript fundamentals.",
  },
  {
    year: "2023",
    title: "Frontend Foundations",
    desc: "Mastered React and modern UI development through online training and real practice projects.",
  },
  {
    year: "2024",
    title: "Freelance Client Work",
    desc: "Delivered responsive websites and landing pages for real clients, refining workflow and communication.",
  },
  {
    year: "2025",
    title: "Advanced React & Next.js",
    desc: "Built production-grade SPAs and SSR apps with TypeScript, Tailwind and modern tooling.",
  },
  {
    year: "2026",
    title: "Going Full Stack",
    desc: "Currently learning Node.js, MongoDB and authentication to ship complete end-to-end products.",
  },
];

export const Experience = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="experience" className="section-padding relative">
      <div ref={ref} className={`mx-auto max-w-5xl ${visible ? "animate-fade-in-up" : "opacity-0"}`}>
        <SectionHeading
          eyebrow="Journey"
          title={<>Learning & <span className="gradient-text">experience timeline</span></>}
          subtitle="From first line of code to building real-world products."
          center
        />

        <div className="relative mt-16">
          {/* Vertical line */}
          <div className="absolute  left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-accent/40 to-cyan/40 md:-translate-x-1/2" />

          <div className="space-y-10 ">
            {items.map((it, i) => {
              const left = i % 2 === 0;
              return (
                <div key={it.year} className="relative grid md:grid-cols-2 gap-8 items-center ">
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full gradient-bg ring-4 ring-background z-10" />

                  <div className={`pl-12 md:pl-0 ${left ? "md:pr-12 md:text-right" : "md:col-start-2 md:pl-12"}`}>
                    <div className="glass-card rounded-2xl p-6 hover-lift inline-block w-full hover:border-[#7B67F6]/50 duration-300">
                      <div className="text-sm font-mono gradient-text font-semibold">{it.year}</div>
                      <h3 className="font-display text-lg font-semibold mt-1">{it.title}</h3>
                      <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{it.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
