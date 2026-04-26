import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";

export const DownloadCV = () => {
  return (
    <section id="cv" className="relative py-24 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="absolute inset-0 bg-gradient-primary opacity-30 blur-3xl rounded-[3rem]" />
          <div className="relative glass-strong rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-14 overflow-hidden shadow-elevated">
            {/* Floating decoration */}
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [0, 6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 w-40 h-40 rounded-3xl bg-gradient-primary opacity-20 blur-2xl"
            />
            <div className="absolute inset-0 grid-bg opacity-30" />

            <div className="relative grid md:grid-cols-[1fr_auto] gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-medium text-primary mb-5 uppercase tracking-wider">
                  <FileText size={12} />
                  Resume
                </div>
                <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-4">
                  Want the <span className="text-gradient">full story?</span>
                </h2>
                <p className="text-base md:text-lg text-muted-foreground max-w-xl">
                  Grab my CV for the complete breakdown — projects, certifications, references, and impact metrics.
                </p>
              </div>

              <motion.a
                href="#"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-primary text-primary-foreground font-semibold shadow-glow animate-pulse-glow whitespace-nowrap"
              >
                <Download size={20} className="group-hover:translate-y-0.5 transition-transform" />
                Download CV
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
