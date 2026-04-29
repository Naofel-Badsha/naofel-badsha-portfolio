import { Star } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { SectionHeading } from "./About";

const reviews = [
  {
    name: "Sarah Mitchell",
    role: "Founder, Lumen Studio",
    text: "Alex delivered a stunning landing page faster than expected. Communication was clear and the final result outperformed our designs.",
    initial: "SM",
  },
  {
    name: "David Park",
    role: "Product Manager, Inkwell",
    text: "Reliable, detail-oriented and a great collaborator. The frontend he built scaled with us as we shipped new features.",
    initial: "DP",
  },
  {
    name: "Maria Lopez",
    role: "Marketing Lead, Pulse",
    text: "Pixel-perfect work and a sharp eye for UX. I'd hire Alex again for any modern web project without hesitation.",
    initial: "ML",
  },
];

export const Testimonials = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="testimonials" className="section-padding relative">
      <div ref={ref} className={`mx-auto max-w-6xl ${visible ? "animate-fade-in-up" : "opacity-0"}`}>
        <SectionHeading
          eyebrow="Testimonials"
          title={<>Words from <span className="gradient-text">clients</span></>}
          center
        />

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {reviews.map((r) => (
            <div key={r.name} className="glass-card rounded-3xl p-7 hover-lift hover:border-[#7B67F6]/50 duration-500">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-cyan text-cyan" />
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">"{r.text}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-11 h-11 rounded-full gradient-bg flex items-center justify-center font-display font-bold text-primary-foreground">
                  {r.initial}
                </div>
                <div>
                  <div className="font-semibold text-sm">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
