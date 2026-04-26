import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Section } from "@/components/Section";
import { Code2, Cloud, Zap, Globe2 } from "lucide-react";
import portrait from "@/assets/portrait.jpg";

const highlights = [
  { icon: Code2, label: "2+ Years Experience" },
  { icon: Cloud, label: "Laravel Backend Specialist" },
  { icon: Zap, label: "Cloud & DevOps Engineer" },
  { icon: Globe2, label: "API Development Expert" },
];

const AboutVisual = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-2, 2]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      <motion.div
        style={{ y, rotate }}
        className="relative aspect-[4/5] rounded-3xl glass-strong p-1 shadow-elevated overflow-hidden"
      >
        <div className="w-full h-full rounded-[1.4rem] relative overflow-hidden">
          {/* Portrait */}
          <img
            src={portrait}
            alt="Goutham Lal — Laravel Developer & Cloud Engineer"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Gradient wash for premium tone */}
          <div className="absolute inset-0 bg-gradient-to-tr from-background/70 via-background/10 to-primary/20 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80" />

          {/* Subtle grid */}
          <div className="absolute inset-0 grid-bg opacity-20" />

          {/* Rotating ring accent */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full border border-primary/30"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute -top-16 -left-16 w-52 h-52 rounded-full border border-secondary/20"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="absolute -bottom-6 -right-4 md:-right-6 glass-strong rounded-2xl p-4 shadow-card"
      >
        <div className="text-xs text-muted-foreground mb-1">Currently</div>
        <div className="text-sm font-medium flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Geo Design Media (UK) - Full Stack + Cloud
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="absolute -top-4 -left-4 md:-left-6 glass-strong rounded-2xl p-4 shadow-card"
      >
        <div className="text-3xl font-display font-bold text-gradient">2+</div>
        <div className="text-xs text-muted-foreground">Years building</div>
      </motion.div>
    </motion.div>
  );
};

export const About = () => {
  return (
    <Section
      id="about"
      eyebrow="About me"
      title={<>Laravel Developer with a <span className="text-gradient">cloud-first</span> mindset.</>}
    >
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <AboutVisual />

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
            I am a <span className="text-foreground">Full Stack Laravel Developer</span> and
            Cloud Engineer with over <span className="text-foreground">2 years</span> of hands-on
            experience building scalable web applications and managing cloud environments.
          </p>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
            My expertise lies in backend development using Laravel, combined with strong
            knowledge in cloud platforms and DevOps practices. I specialize in creating
            systems that are <span className="text-foreground">secure, efficient, and built for scale</span>.
          </p>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-10">
            I'm passionate about automation, performance optimization, and solving complex
            technical challenges with modern technologies.
          </p>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map((h, i) => (
              <motion.div
                key={h.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="glass rounded-xl p-4 flex items-center gap-3 hover:bg-muted/30 transition"
              >
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <h.icon size={18} />
                </div>
                <span className="text-sm font-medium">{h.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
};
