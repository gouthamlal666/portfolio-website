import { motion } from "framer-motion";
import { Section } from "@/components/Section";

const timeline = [
  {
    period: "Present",
    role: "Full Stack Developer / Cloud Engineer",
    company: "Geo Design Media (UK IT Firm)",
    description:
      "Working as a Full Stack Developer and Cloud Engineer to deliver scalable products and reliable cloud infrastructure.",
    bullets: [
      "Developed scalable applications using Laravel",
      "Designed and integrated RESTful APIs",
      "Managed deployments on AWS, Azure, and GCP",
      "Built and maintained cloud infrastructure",
      "Implemented CI/CD pipelines & Docker containerization",
      "Optimized performance and reduced cloud costs",
    ],
  },
  {
    period: "Past",
    role: "Full Stack Developer / Cloud Engineer",
    company: "Makeit Ads",
    description:
      "Delivered full stack development and cloud engineering solutions for digital marketing and client-based platforms.",
    bullets: [
      "Developed scalable applications using Laravel",
      "Designed and integrated RESTful APIs",
      "Managed deployments on AWS, Azure, and GCP",
      "Built and maintained cloud infrastructure",
      "Implemented CI/CD pipelines & Docker containerization",
      "Optimized performance and reduced cloud costs",
    ],
  },
  {
    period: "Past",
    role: "Full Stack Developer",
    company: "ViralMafia",
    description:
      "Worked on web application development for a digital marketing agency.",
    bullets: [
      "Built and maintained Laravel applications",
      "Developed APIs for marketing tools",
      "Optimized databases and queries",
      "Collaborated with frontend teams",
    ],
  },
];

export const Experience = () => {
  return (
    <Section
      id="experience"
      eyebrow="Journey"
      title={<>Work <span className="text-gradient">Experience</span>.</>}
      description="A short story of how I've grown — from shipping features to owning architecture."
    >
      <div className="relative max-w-3xl mx-auto">
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: "top" }}
          className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-secondary to-transparent"
        />

        <div className="space-y-12">
          {timeline.map((item, i) => (
            <motion.div
              key={item.role}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="relative pl-12"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.15 + 0.3, ease: [0.34, 1.56, 0.64, 1] }}
                className="absolute left-4 top-2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-primary shadow-glow ring-4 ring-background z-10"
              />

              <div className="text-xs font-mono text-primary uppercase tracking-wider mb-2">
                {item.period} · {item.company}
              </div>
              <motion.div
                whileHover={{ y: -4 }}
                className="glass rounded-2xl p-6 hover:shadow-elevated transition-all duration-500"
              >
                <h3 className="font-display text-xl font-semibold mb-2">{item.role}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{item.description}</p>
                <ul className="space-y-2">
                  {item.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};
