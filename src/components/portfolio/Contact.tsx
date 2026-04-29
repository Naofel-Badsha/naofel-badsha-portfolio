import { FormEvent, useState } from "react";
import { Github, Linkedin, LocateIcon, Mail, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { SectionHeading } from "./About";

const channels = [
  { icon: LocateIcon, label: "Email", value: "Banasree, Rampura, Dhaka", href: "https://www.google.com/maps/search/?api=1&query=Banasree,Rampura,Dhaka,Dhaka+Division" },
  { icon: Mail, label: "Email", value: "naofelbadsha@gmail.com", href: "mailto:naofelbadsha@gmail.com" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/md-naofel-badsha", href: "https://bd.linkedin.com/in/md-naofel-badsha" },
  { icon: Github, label: "GitHub", value: "github.com/naofel-badsha", href: "https://github.com/naofel-badsha" },
  { icon: MessageCircle, label: "WhatsApp", value: "+01737-268782", href: "tel:+8801737268782" },
];

export const Contact = () => {
  const { ref, visible } = useScrollReveal();
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Message sent!", { description: "Thanks — I'll get back to you within 24 hours." });
      (e.target as HTMLFormElement).reset();
    }, 900);
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary/20 blur-[140px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-accent/20 blur-[140px]" />

      <div ref={ref} className={`mx-auto max-w-6xl relative ${visible ? "animate-fade-in-up" : "opacity-0"}`}>
        <SectionHeading
          eyebrow="Contact"
          title={<>Let's build <span className="gradient-text">something great</span></>}
          subtitle="Have a project, role, or idea? My inbox is open."
          center
        />

        <div className="grid lg:grid-cols-2 gap-8 mt-16">
          {/* Left: channels */}
          <div className="glass-card rounded-3xl p-8 lg:p-10 flex flex-col hover:border-[#7B67F6]/50 duration-500">
            <h3 className="font-display text-2xl font-semibold mb-2">Get in touch</h3>
            <p className="text-muted-foreground mb-8">
              Reach out through any channel — I usually reply within 24 hours.
            </p>

            <div className="space-y-3 flex-1">
              {channels.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-secondary/40 border border-border hover:border-primary/40 hover:bg-secondary/70 transition-all group"
                >
                  <div className="w-11 h-11 rounded-xl gradient-bg flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <c.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">{c.label}</div>
                    <div className="font-medium truncate">{c.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <form onSubmit={onSubmit} className="glass-card rounded-3xl p-8 lg:p-10 space-y-5 hover:border-[#7B67F6]/50 duration-500">
            <div>
              <Label htmlFor="name" className="text-sm">Name</Label>
              <Input id="name" name="name" required placeholder="Your full name" className="mt-2 h-12 bg-secondary/40 border-border" />
            </div>
            <div>
              <Label htmlFor="email" className="text-sm">Email</Label>
              <Input id="email" name="email" type="email" required placeholder="you@company.com" className="mt-2 h-12 bg-secondary/40 border-border" />
            </div>
            <div>
              <Label htmlFor="number" className="text-sm">Phone/WhatsApp</Label>
              <Input id="phone" name="phone" type="number" required placeholder="+017 *** *****" className="mt-2 h-12 bg-secondary/40 border-border" />
            </div>
            <div>
              <Label htmlFor="message" className="text-sm">Message</Label>
              <Textarea id="message" name="message" required placeholder="Tell me a bit about your project..." rows={6} className="mt-2 bg-secondary/40 border-border resize-none" />
            </div>
            <Button type="submit" variant="hero" size="lg" className="w-full" disabled={loading}>
              {loading ? "Sending..." : <>Send Message <Send className="w-4 h-4" /></>}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
