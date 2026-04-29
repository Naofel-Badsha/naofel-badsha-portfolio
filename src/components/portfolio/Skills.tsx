import { motion } from "framer-motion";
import { SiReact, SiNextdotjs, SiJavascript, SiTailwindcss, SiHtml5, SiCss, SiNodedotjs, SiMongodb, SiGit, SiGithub, SiFigma, SiTypescript, SiRedux, SiExpress, SiFirebase, SiNextdns, SiVercel, SiNetlify, SiClaude, SiCodecrafters } from "react-icons/si";
import { VscCode } from "react-icons/vsc";
// import SectionTitle from "./SectionTitle";
import { SectionHeading } from "./About";
import { useScrollReveal } from "@/hooks/useScrollReveal";

type Skill = { name: string; icon: any; level: number; color: string };

const groups: { title: string; items: Skill[] }[] = [
  {
    title: "Frontend",
    items: [
      { name: "HTML", icon: SiHtml5, level: 95, color: "#E34F26" },
      { name: "CSS", icon: SiCss, level: 92, color: "#1572B6" },
      { name: "Tailwind", icon: SiTailwindcss, level: 92, color: "#06B6D4" },
      { name: "JavaScript", icon: SiJavascript, level: 88, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, level: 68, color: "#0176C6" },
      { name: "React", icon: SiReact, level: 90, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, level: 80, color: "#ffffff" },
      { name: "Redux Toolkit", icon: SiRedux, level: 50, color: "#764ABC" },
      
    ],
  },
  {
    title: "Backend Basics",
    items: [
      { name: "Node.js", icon: SiNodedotjs, level: 65, color: "#339933" },
      { name: "Express.js", icon: SiExpress, level: 55, color: "#E9BE0F" },
      { name: "MongoDB", icon: SiMongodb, level: 60, color: "#47A248" },
      { name: "Mongoose", icon: SiMongodb, level: 55, color: "#880000" },
      { name: "Firebase", icon: SiFirebase, level: 65, color: "#EF8C2C" },
      { name: "Next-Auth", icon: SiNextdns, level: 50, color: "#22D7BD" },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Ai", icon: SiClaude, level: 85, color: "#DA6645" },
      { name: "Git", icon: SiGit, level: 75, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, level: 58, color: "#ffffff" },
      { name: "VS Code", icon: VscCode, level: 90, color: "#007ACC" },
      { name: "Figma", icon: SiFigma, level: 75, color: "#F24E1E" },
      { name: "Vercel", icon: SiVercel, level: 70, color: "#F7996E" },
      { name: "Netlify", icon: SiNetlify, level: 75, color: "#30AEB4" },
    ],
  },
];

export const Skills = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="skills" className="section-padding relative">
      <div ref={ref} className={`mx-auto max-w-6xl ${visible ? "animate-fade-in-up" : "opacity-0"}`}>
        <SectionHeading
          eyebrow="Skills"
          title={<>My <span className="gradient-text">technical toolkit</span></>}
          subtitle="A blend of modern frontend mastery, growing backend skills, and the daily tools I use to ship."
          center
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {groups.map((g, gi) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
              className="glass-card rounded-3xl p-6 shadow-card hover:shadow-glow transition hover:border-[#7B67F6]/50 duration-300"
            >
              <h3 className="font-display font-semibold text-lg mb-5 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full gradient-bg animate-bounce" />
                {g.title}
              </h3>
              <div className="space-y-4">
                {g.items.map((s) => (
                  <div key={s.name}>
                    <div className="flex items-center justify-between text-sm mb-1.5">
                      <div className="flex items-center gap-2">
                        <s.icon style={{ color: s.color }} className="text-lg" />
                        <span>{s.name}</span>
                      </div>
                      <span className="text-muted-foreground text-xs">{s.level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="h-full gradient-bg rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
