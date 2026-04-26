import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import { useRef } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

export const Hero = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} id="hero" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Background grid */}
      <motion.div style={{ opacity }} className="absolute inset-0 grid-bg opacity-60" />


      {/* Floating orbs */}
      <motion.div
        animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -left-20 w-[400px] h-[400px] rounded-full bg-primary/20 blur-[120px]"
      />
      <motion.div
        animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] rounded-full bg-secondary/20 blur-[140px]"
      />

      <div className="container relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="max-w-5xl mx-auto text-center"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs font-medium text-muted-foreground mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            Available for new opportunities
            <Sparkles size={12} className="text-primary" />
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6"
          >
            Engineering <span className="text-gradient">scalable</span> web apps
            <br />
            & <span className="text-gradient-primary">cloud systems</span> that power modern businesses.
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 leading-relaxed"
          >
            <span className="text-foreground font-medium">Laravel Developer & Cloud Engineer</span> specializing
            in backend systems, cloud infrastructure, and DevOps automation.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-sm md:text-base text-muted-foreground/80 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            I build high-performance web applications using Laravel and design cloud-native
            infrastructures across AWS, Azure, and GCP — focused on scalability, security,
            and real business impact.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-primary text-primary-foreground font-medium shadow-glow hover:shadow-elevated hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
            >
              View My Work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#cv"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl glass text-foreground font-medium hover:bg-muted/50 hover:-translate-y-0.5 transition-all duration-300"
            >
              <Download size={18} className="group-hover:translate-y-0.5 transition-transform" />
              Download CV
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl border border-primary/40 text-foreground font-medium hover:bg-primary/10 hover:-translate-y-0.5 transition-all duration-300"
            >
              Hire Me
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-20 grid grid-cols-3 gap-4 md:gap-12 max-w-2xl mx-auto"
          >
            {[
              { value: "2+", label: "Years experience" },
              { value: "20+", label: "Projects shipped" },
              { value: "5★", label: "Cloud certified" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-3xl md:text-4xl font-bold text-gradient mb-1">{stat.value}</div>
                <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-muted-foreground text-xs"
      >
        <div className="w-5 h-8 rounded-full border border-border flex justify-center pt-1.5">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-1.5 rounded-full bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
};
