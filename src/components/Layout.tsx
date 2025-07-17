import { useEffect } from "react";
import { Footer } from "./elements/Footer";
import { Navbar } from "./elements/Navbar";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowUp } from "lucide-react";

interface LayoutProps {
  title: string;
  children: React.ReactNode;
}

export const Layout = ({ title, children }: LayoutProps) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <Navbar />

      <main className="flex flex-col gap-y-20 overflow-hidden">
        {children}
      </main>

      <Footer />

      <motion.div className="fixed bottom-4 right-4 z-50">
        <motion.svg width="48" height="48" viewBox="0 0 48 48">
          <circle
            cx="24"
            cy="24"
            r="20"
            pathLength={1}
            className="bg-transparent"
          />
          <motion.circle
            cx="24"
            cy="24"
            r="20"
            stroke="#22d3ee"
            style={{ pathLength: scaleY }}
            strokeWidth={2}
          />
        </motion.svg>
        <a
          href="#"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="absolute inset-0 flex items-center justify-center cursor-pointer"
        >
          <ArrowUp className="text-emerald-400 size-5" />
        </a>
      </motion.div>
    </>
  );
};
