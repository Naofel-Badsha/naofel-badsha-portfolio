import { Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="border-t border-border/60 py-10 px-6">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-muted-foreground">
          © 2026 <span className="text-foreground font-semibold gradient-text">Naofel Badsha</span>. Built with <span className="gradient-text font-semibold">React & Next.js</span>
        </div>
        <div className="flex items-center gap-3">
          <Link to="https://github.com/naofel-badsha" aria-label="GitHub" className="w-9 h-9 rounded-lg glass flex items-center justify-center hover:text-primary border-[#7B67F6]/50 hover:-translate-y-2 duration-300">
            <Github className="w-4 h-4 animate-pulse" />
          </Link>
          <Link to="https://bd.linkedin.com/in/md-naofel-badsha" aria-label="LinkedIn" className="w-9 h-9 rounded-lg glass flex items-center justify-center hover:text-primary border-[#7B67F6]/50 hover:-translate-y-2 duration-300">
            <Linkedin className="w-4 h-4 animate-pulse" />
          </Link>
          <a href="mailto:naofelbadsha@gmail.com" aria-label="Email" className="w-9 h-9 rounded-lg glass flex items-center justify-center hover:text-primary border-[#7B67F6]/50 hover:-translate-y-2 duration-300">
            <Mail className="w-4 h-4 animate-pulse" />
          </a>
        </div>
      </div>
    </footer>
  );
};
