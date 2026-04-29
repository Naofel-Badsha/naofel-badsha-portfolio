import { useEffect, useState } from "react";
import { Code2, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { SiGithub } from "react-icons/si";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "services", label: "Services" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = links.map((l) => document.getElementById(l.id));
      const y = window.scrollY + 120;
      for (let i = sections.length - 1; i >= 0; i--) {
        const s = sections[i];
        if (s && s.offsetTop <= y) {
          setActive(links[i].id);
          break;
        }
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-5"
        }`}
    >
      <nav
        className={`mx-auto max-w-6xl px-5 md:px-8 flex items-center justify-between rounded-2xl transition-all duration-500 border-[1px] border-[#7B67F6]/40 ${scrolled ? "glass py-3" : "py-4"
          }`}
      >
        <button onClick={() => go("home")} className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-xl gradient-bg flex items-center justify-center glow">
            <Code2 className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-display font-bold text-lg tracking-tight">B<span className="gradient-text">adSha</span></span>
        </button>

        <ul className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.id}>
              <button
                onClick={() => go(l.id)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors ${active === l.id ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                {l.label}
                {active === l.id && (
                  <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full gradient-bg" />
                )}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Link to="https://github.com/naofel-badsha">
            <Button variant="hero" size="sm" >
              <SiGithub />
              GitHub
            </Button>
          </Link>
        </div>

        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden mx-auto max-w-6xl mt-2 px-5">
          <div className="glass rounded-2xl p-4 flex flex-col gap-1 animate-fade-in space-y-2">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => go(l.id)}
                className={`text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors ${active === l.id
                    ? "bg-secondary text-foreground"
                    : "text-muted-foreground hover:bg-secondary border-[1px] border-[#7B67F6]/20 hover:border-[#7B67F6]/70"
                  }`}
              >
                {l.label}
              </button>
            ))}
          <Link to="https://github.com/naofel-badsha">
            <Button variant="hero" size="sm" className="w-full">
              <SiGithub />
              GitHub
            </Button>
          </Link>
          </div>
        </div>
      )}
    </header>
  );
};
