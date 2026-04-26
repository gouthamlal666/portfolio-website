import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const CursorGlow = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const isCoarse = window.matchMedia("(pointer: coarse)").matches;
    if (isCoarse) return;

    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const leave = () => setVisible(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="pointer-events-none fixed z-[60] hidden md:block"
          style={{ left: pos.x, top: pos.y }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div
            className="-translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full opacity-40"
            style={{
              background:
                "radial-gradient(circle, hsl(var(--primary) / 0.25) 0%, transparent 60%)",
              filter: "blur(40px)",
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
