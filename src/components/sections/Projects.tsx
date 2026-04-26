import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/Section";
import { ArrowUpRight, Code2, Cloud, Database, Cpu, GitBranch, Layers, Rocket, Server, Shield, Workflow, Zap, Globe } from "lucide-react";

type Category = "All" | "Web" | "Cloud";

const projects: {
  title: string;
  description: string;
  tags: string[];
  category: Exclude<Category, "All">;
  icon: typeof Code2;
}[] = [
  {
    title: "E-commerce Platform",
    description: "Fully customized e-commerce solution with admin dashboard, payment integration, and order management.",
    tags: ["Laravel", "MySQL", "AWS"],
    category: "Web",
    icon: Layers,
  },
  {
    title: "Cloud-Based Scalable Application",
    description: "Designed and deployed a cloud-native web application with auto-scaling and load balancing.",
    tags: ["Laravel", "AWS EC2", "S3", "RDS"],
    category: "Cloud",
    icon: Cloud,
  },
  {
    title: "REST API System",
    description: "Secure and high-performance APIs powering mobile and web platforms.",
    tags: ["Laravel", "Redis", "MySQL"],
    category: "Web",
    icon: Code2,
  },
  {
    title: "DevOps Automation Pipeline",
    description: "CI/CD pipelines and Docker-based deployment systems to streamline releases.",
    tags: ["Docker", "GitHub Actions", "Linux"],
    category: "Cloud",
    icon: GitBranch,
  },
  {
    title: "Multi-Tenant SaaS Backend",
    description: "Tenant-isolated Laravel backend with role-based access and per-tenant database scaling.",
    tags: ["Laravel", "PostgreSQL", "Redis"],
    category: "Web",
    icon: Database,
  },
  {
    title: "Serverless Functions on AWS",
    description: "Event-driven Lambda services with API Gateway and S3 triggers for cost-efficient compute.",
    tags: ["AWS Lambda", "S3", "API Gateway"],
    category: "Cloud",
    icon: Zap,
  },
  {
    title: "Booking & Reservation System",
    description: "Full-stack booking engine with real-time availability and Stripe payments.",
    tags: ["Laravel", "MySQL", "Stripe"],
    category: "Web",
    icon: Rocket,
  },
  {
    title: "Kubernetes Cluster Setup",
    description: "Production-ready Kubernetes cluster with auto-scaling and rolling deployments.",
    tags: ["Kubernetes", "Docker", "Helm"],
    category: "Cloud",
    icon: Cpu,
  },
  {
    title: "Admin Dashboard CRM",
    description: "Custom CRM with lead pipelines, analytics, and role-based dashboards built on Laravel.",
    tags: ["Laravel", "MySQL", "Bootstrap"],
    category: "Web",
    icon: Workflow,
  },
  {
    title: "Multi-Cloud Deployment",
    description: "Unified deployment workflow across AWS, Azure, and GCP using infrastructure automation.",
    tags: ["AWS", "Azure", "GCP"],
    category: "Cloud",
    icon: Globe,
  },
  {
    title: "Marketing Tools API",
    description: "REST APIs for digital marketing tools with rate limiting, caching, and queued jobs.",
    tags: ["Laravel", "Redis", "MySQL"],
    category: "Web",
    icon: Server,
  },
  {
    title: "Cloud Cost Optimization",
    description: "Audited and right-sized cloud workloads — reduced infrastructure cost by 35%.",
    tags: ["AWS", "CloudWatch", "Linux"],
    category: "Cloud",
    icon: Shield,
  },
];

const categories: Category[] = ["All", "Web", "Cloud"];

export const Projects = () => {
  const [active, setActive] = useState<Category>("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <Section
      id="projects"
      eyebrow="Selected work"
      title={<>Recent <span className="text-gradient">projects</span>.</>}
      description="A curated set of products and systems I've shipped — from polished SaaS apps to multi-cloud infrastructure."
    >
      <div className="flex items-center gap-2 mb-10 p-1 glass rounded-2xl w-fit">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`relative px-5 py-2 text-sm font-medium rounded-xl transition-colors ${
              active === cat ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {active === cat && (
              <motion.div
                layoutId="active-tab"
                className="absolute inset-0 bg-gradient-primary rounded-xl shadow-glow"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10">{cat}</span>
          </button>
        ))}
      </div>

      <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((p, i) => (
            <motion.article
              layout
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, delay: (i % 9) * 0.05, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8 }}
              className="group relative glass rounded-2xl p-6 hover:shadow-elevated transition-all duration-500 gradient-border flex flex-col"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary/15 border border-primary/30 flex items-center justify-center text-primary group-hover:shadow-glow group-hover:scale-110 transition-all duration-500">
                  <p.icon size={20} />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full glass text-primary font-semibold">
                    {p.category}
                  </span>
                  <div className="w-9 h-9 rounded-full glass flex items-center justify-center text-muted-foreground group-hover:text-primary group-hover:rotate-45 transition-all duration-500">
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </div>

              <h3 className="font-display text-lg font-semibold leading-tight mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">{p.description}</p>

              <div className="flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span key={t} className="text-[11px] px-2 py-1 rounded-md bg-muted/60 text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
};
