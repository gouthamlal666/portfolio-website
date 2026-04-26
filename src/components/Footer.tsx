import { Github, Linkedin, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative border-t border-border py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-primary flex items-center justify-center font-display font-bold text-primary-foreground shadow-glow">
              G
            </div>
          <div>
              <div className="font-display font-semibold">Goutham Lal</div>
              <div className="text-xs text-muted-foreground">Full Stack & Cloud Engineer</div>
            </div>
          </div>

          <nav className="flex items-center gap-1 text-sm">
            {["About", "Projects", "Services", "Contact"].map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="px-3 py-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                {l}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
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
                className="w-9 h-9 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-primary transition-all hover:-translate-y-0.5"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border/60 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <div>© 2026 Goutham Lal. All Rights Reserved.</div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            All systems operational
          </div>
        </div>
      </div>
    </footer>
  );
};
