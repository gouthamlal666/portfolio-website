import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { Send, Mail, MapPin, Phone, Github, Linkedin, Instagram } from "lucide-react";
import { toast } from "sonner";

const FloatingInput = ({
  label, type = "text", value, onChange, multiline = false,
}: {
  label: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  multiline?: boolean;
}) => {
  const [focused, setFocused] = useState(false);
  const active = focused || value.length > 0;
  const Tag = multiline ? "textarea" : "input";

  return (
    <div className="relative">
      <Tag
        type={type}
        value={value}
        onChange={(e: any) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        rows={multiline ? 5 : undefined}
        className={`peer w-full bg-muted/30 border border-border rounded-2xl px-5 pt-7 pb-3 text-foreground outline-none focus:border-primary focus:bg-muted/50 focus:shadow-[0_0_0_4px_hsl(var(--primary)/0.1)] transition-all duration-300 resize-none`}
        placeholder=" "
      />
      <label
        className={`absolute left-5 pointer-events-none transition-all duration-300 ${
          active
            ? "top-2 text-[11px] text-primary font-medium uppercase tracking-wider"
            : "top-5 text-sm text-muted-foreground"
        }`}
      >
        {label}
      </label>
    </div>
  );
};

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      toast.error("Please fill in all fields");
      return;
    }
    setSending(true);
    await new Promise((r) => setTimeout(r, 900));
    setSending(false);
    toast.success("Message sent! I'll get back to you within 24 hours.");
    setName(""); setEmail(""); setMessage("");
  };

  return (
    <Section
      id="contact"
      eyebrow="Get in touch"
      title={<>Let's <span className="text-gradient">build</span> something.</>}
      description="Have a project in mind, or just want to say hi? Drop me a message — I usually reply within a day."
    >
      <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-6"
        >
          <div className="glass rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <Mail size={18} />
              </div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Email</div>
            </div>
            <a href="mailto:gouthamlal666@gmail.com" className="text-base font-medium hover:text-primary transition-colors">
              gouthamlal666@gmail.com
            </a>
          </div>

          <div className="glass rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <Phone size={18} />
              </div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Phone</div>
            </div>
            <a href="tel:+918590485146" className="text-base font-medium hover:text-primary transition-colors">
              +91 85904 85146
            </a>
          </div>

          <div className="glass rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <MapPin size={18} />
              </div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Location</div>
            </div>
            <div className="text-base font-medium">Kerala, India · Remote worldwide</div>
          </div>

          <div className="glass rounded-2xl p-6">
            <div className="text-xs uppercase tracking-wider text-muted-foreground mb-4">Find me online</div>
            <div className="flex gap-3">
              {[
                { Icon: Github, href: "https://github.com/gouthamlal666" },
                { Icon: Linkedin, href: "https://www.linkedin.com/in/goutham-lal-505780297/" },
                { Icon: Instagram, href: "https://www.instagram.com/geek._.zz/" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-11 h-11 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-primary hover:shadow-glow hover:-translate-y-0.5 transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="glass-strong rounded-3xl p-6 md:p-8 shadow-card space-y-4"
        >
          <FloatingInput label="Your name" value={name} onChange={setName} />
          <FloatingInput label="Email address" type="email" value={email} onChange={setEmail} />
          <FloatingInput label="Tell me about your project" value={message} onChange={setMessage} multiline />

          <motion.button
            type="submit"
            disabled={sending}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-gradient-primary text-primary-foreground font-semibold shadow-glow hover:shadow-elevated transition-all duration-300 disabled:opacity-60"
          >
            {sending ? (
              <>
                <span className="w-4 h-4 rounded-full border-2 border-primary-foreground/40 border-t-primary-foreground animate-spin" />
                Sending...
              </>
            ) : (
              <>
                Send message
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
              </>
            )}
          </motion.button>
        </motion.form>
      </div>
    </Section>
  );
};
