import { Clock, Code2, MessageSquare, Rocket, Sparkles, Zap } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { SectionHeading } from "./About";

const reasons = [
  { icon: Code2, title: "Clean & Maintainable Code", desc: "Readable structure, sensible naming, and reusable components from day one." },
  { icon: Sparkles, title: "Pixel Perfect Design", desc: "Faithful translation of designs into responsive, polished interfaces." },
  { icon: Zap, title: "Fast Learner", desc: "I pick up new tools and codebases quickly — no hand-holding required." },
  { icon: MessageSquare, title: "Good Communication", desc: "Clear updates, async friendly, and honest about timelines and trade-offs." },
  { icon: Clock, title: "Deadline Focused", desc: "I respect your time. Milestones are planned and consistently delivered." },
  { icon: Rocket, title: "Modern UI Thinking", desc: "Up-to-date with the patterns top product teams use today." },
];

export const WhyHire = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="why" className="section-padding relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-primary/10 blur-[140px]" />

      <div ref={ref} className={`mx-auto max-w-6xl relative ${visible ? "animate-fade-in-up" : "opacity-0"}`}>
        <SectionHeading
          eyebrow="Why Hire Me"
          title={<>Built to be a <span className="gradient-text">reliable partner</span></>}
          subtitle="What recruiters and clients can consistently expect when working with me."
          center
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-16">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-primary/30 via-accent/20 to-transparent hover:from-primary/60 hover:via-accent/40 transition-all duration-500"
            >
              <div className="rounded-2xl bg-card p-6 h-full">
                <r.icon className="w-7 h-7 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-display font-semibold text-lg mb-2">{r.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
