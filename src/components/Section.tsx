import { motion } from "framer-motion";
import { ReactNode } from "react";

export const Section = ({
  id,
  eyebrow,
  title,
  description,
  children,
  className = "",
}: {
  id: string;
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  children: ReactNode;
  className?: string;
}) => {
  return (
    <section id={id} className={`relative py-24 md:py-32 ${className}`}>
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mb-16"
        >
          {eyebrow && (
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-medium text-primary mb-5 uppercase tracking-wider">
              <span className="w-1 h-1 rounded-full bg-primary" />
              {eyebrow}
            </div>
          )}
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-5 leading-[1.05]">
            {title}
          </h2>
          {description && (
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              {description}
            </p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  );
};
