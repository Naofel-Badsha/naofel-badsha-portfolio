import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export const BackToTop = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;
  return (
    <button
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-primary-foreground shadow-[0_10px_30px_-5px_hsl(var(--primary)/0.6)] hover:-translate-y-1 transition-transform animate-fade-in"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};
