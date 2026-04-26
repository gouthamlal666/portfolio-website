import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import {
  Code, Database, Cloud, Container, Server, Layout,
} from "lucide-react";

const groups = [
  {
    title: "Backend Development",
    icon: Server,
    items: ["PHP", "Laravel", "REST API Development", "MVC Architecture"],
  },
  {
    title: "Frontend",
    icon: Layout,
    items: ["HTML5", "CSS3", "Bootstrap", "JavaScript"],
  },
  {
    title: "Cloud Platforms",
    icon: Cloud,
    items: ["AWS (EC2, S3, RDS, Lambda)", "Microsoft Azure", "Google Cloud Platform"],
  },
  {
    title: "DevOps & Tools",
    icon: Container,
    items: ["Docker", "Kubernetes (Basic)", "CI/CD Pipelines", "Git & GitHub", "Linux"],
  },
  {
    title: "Database",
    icon: Database,
    items: ["MySQL", "PostgreSQL"],
  },
  {
    title: "Practices",
    icon: Code,
    items: ["System Design", "Performance Tuning", "Security", "Automation"],
  },
];

export const Skills = () => {
  return (
    <Section
      id="skills"
      eyebrow="Capabilities"
      title={<>Technical <span className="text-gradient">Skills</span>.</>}
      description="A focused stack honed across production projects — chosen for reliability, velocity, and developer joy."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {groups.map((group, i) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6 }}
            className="group relative glass rounded-2xl p-6 hover:shadow-elevated transition-all duration-500 gradient-border"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl bg-gradient-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:shadow-glow transition-all">
                <group.icon size={20} />
              </div>
              <h3 className="font-display text-xl font-semibold">{group.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="text-xs px-3 py-1.5 rounded-lg bg-muted/60 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
