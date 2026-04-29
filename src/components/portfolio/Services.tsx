import { Layout, Monitor, Smartphone, Sparkles } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { SectionHeading } from "./About";

const services = [
  {
    icon: Smartphone,
    title: "Responsive Website Design",
    desc: "Pixel-perfect layouts that look and feel great on every screen, from phone to ultrawide.",
  },
  {
    icon: Layout,
    title: "Landing Page Development",
    desc: "Conversion-focused landing pages with clean structure, strong CTAs and lightning-fast performance.",
  },
  {
    icon: Monitor,
    title: "React Frontend Development",
    desc: "Scalable, component-driven React applications with modern state management and clean architecture.",
  },
  {
    icon: Sparkles,
    title: "WordPress / Elementor Sites",
    desc: "Premium, easy-to-edit WordPress sites built with Elementor for clients who need full control.",
  },
];

export const Services = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="services" className="section-padding relative">
      <div ref={ref} className={`mx-auto max-w-6xl ${visible ? "animate-fade-in-up" : "opacity-0"}`}>
        <SectionHeading
          eyebrow="Services"
          title={<>What I can <span className="gradient-text">build for you</span></>}
          subtitle="From a polished landing page to a full React product, here's how I can help."
          center
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="glass-card rounded-3xl p-7 hover-lift relative overflow-hidden group hover:border-[#7B67F6]/50 duration-300"
            >
              <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-primary/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="w-12 h-12 rounded-2xl gradient-bg flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <s.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
