import { Section } from "@/components/Section";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    q: "What technologies do you specialize in?",
    a: "Laravel, PHP, AWS, Azure, GCP, Docker, and modern DevOps tools.",
  },
  {
    q: "Do you handle complete project deployment?",
    a: "Yes — from development to cloud deployment, monitoring, and scaling.",
  },
  {
    q: "Can you improve existing applications?",
    a: "Absolutely. I optimize performance, harden security, and refactor infrastructure for scale and cost efficiency.",
  },
  {
    q: "Are you available for freelance work?",
    a: "Yes, available for freelance and remote opportunities worldwide.",
  },
];

export const FAQ = () => {
  return (
    <Section
      id="faq"
      eyebrow="FAQ"
      title={<>Frequently asked <span className="text-gradient">questions</span>.</>}
      description="Quick answers to what people usually ask before reaching out."
    >
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.q}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <AccordionItem
                value={`item-${i}`}
                className="glass rounded-2xl border-0 px-6 overflow-hidden hover:bg-muted/20 transition-colors"
              >
                <AccordionTrigger className="text-left text-base font-medium hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </Section>
  );
};
