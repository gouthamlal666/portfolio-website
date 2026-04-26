import { motion } from "framer-motion";

const techs = [
  "Laravel", "PHP", "AWS", "Azure", "GCP", "Docker", "Kubernetes",
  "MySQL", "PostgreSQL", "Redis", "CI/CD", "GitHub Actions",
  "Linux", "Nginx", "REST APIs", "Bootstrap", "JavaScript",
];

export const TechMarquee = () => {
  // Duplicate for seamless loop
  const row = [...techs, ...techs];

  return (
    <section className="relative py-12 overflow-hidden border-y border-border/60 bg-card/20">
      <div
        className="absolute inset-y-0 left-0 w-32 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, hsl(var(--background)), transparent)" }}
      />
      <div
        className="absolute inset-y-0 right-0 w-32 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, hsl(var(--background)), transparent)" }}
      />

      <div className="flex gap-3 overflow-hidden">
        <motion.div
          className="flex gap-3 shrink-0"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        >
          {row.map((t, i) => (
            <span
              key={i}
              className="shrink-0 px-5 py-2.5 rounded-full glass text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              <span className="mr-2 text-primary">◆</span>
              {t}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
