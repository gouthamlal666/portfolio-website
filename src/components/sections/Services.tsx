import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { Layout, Cloud, GitMerge, Workflow, Shield } from "lucide-react";

const services = [
  {
    icon: Layout,
    title: "Custom Web Application Development",
    description: "Scalable and secure Laravel-based web applications tailored to business needs.",
  },
  {
    icon: Workflow,
    title: "API Development & Integration",
    description: "High-performance REST APIs and seamless third-party integrations.",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure Setup",
    description: "Deployment and management using AWS, Azure, and GCP — built for scale.",
  },
  {
    icon: GitMerge,
    title: "DevOps & Automation",
    description: "CI/CD pipelines, Docker containerization, and automated deployments.",
  },
  {
    icon: Shield,
    title: "Performance & Security Optimization",
    description: "Speed improvements, database tuning, and secure system architecture.",
  },
];

export const Services = () => {
  return (
    <Section
      id="services"
      eyebrow="Services"
      title={<>What I <span className="text-gradient">Offer</span>.</>}
      description="Practical engineering services for teams that ship — from prototype to production."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -8 }}
            className="group relative glass rounded-2xl p-6 hover:shadow-elevated transition-all duration-500"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-primary/15 border border-primary/30 flex items-center justify-center text-primary mb-5 group-hover:shadow-glow group-hover:scale-110 transition-all duration-500">
              <s.icon size={22} />
            </div>
            <h3 className="font-display text-lg font-semibold mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
