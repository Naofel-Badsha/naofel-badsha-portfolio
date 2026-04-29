import { Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border/60 py-10 px-6">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-muted-foreground">
          © 2026 <span className="text-foreground font-semibold">Alex Carter</span>. Built with <span className="gradient-text font-semibold">React & Next.js</span>
        </div>
        <div className="flex items-center gap-3">
          <a href="#" aria-label="GitHub" className="w-9 h-9 rounded-lg glass flex items-center justify-center hover:text-primary transition-colors">
            <Github className="w-4 h-4" />
          </a>
          <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-lg glass flex items-center justify-center hover:text-primary transition-colors">
            <Linkedin className="w-4 h-4" />
          </a>
          <a href="mailto:alex.carter@dev.com" aria-label="Email" className="w-9 h-9 rounded-lg glass flex items-center justify-center hover:text-primary transition-colors">
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};
