import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Stupimo u <span className="text-gradient">Kontakt</span>
        </h2>

        <p className="text-xl text-muted-foreground mb-12">
          Aktivno tražim prilike za posao i saradnju. Slobodno me kontaktirajte!
        </p>

        <div className="bg-card border border-border rounded-xl p-8 md:p-12 card-glow mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a
              href="https://github.com/njanjahier"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 p-6 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors group"
            >
              <Github className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
              <span className="font-semibold">GitHub</span>
              <span className="text-sm text-muted-foreground">@njanjahier</span>
            </a>

            <a
              href="https://linkedin.com/in/sanja-savic"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 p-6 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors group"
            >
              <Linkedin className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
              <span className="font-semibold">LinkedIn</span>
              <span className="text-sm text-muted-foreground">Sanja Savic</span>
            </a>

            <a
              href="mailto:savic.sanja2025@gmail.com"
              className="flex flex-col items-center gap-3 p-6 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors group"
            >
              <Mail className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
              <span className="font-semibold">Email</span>
              <span className="text-sm text-muted-foreground">savic.sanja2025@gmail.com</span>
            </a>
          </div>

          <div className="mt-8 pt-8 border-t border-border">
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <MapPin className="w-5 h-5 text-primary" />
              <span>Banja Luka, Bosna i Hercegovina</span>
            </div>
          </div>
        </div>

        <Button
          size="lg"
          className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-background font-semibold px-8 glow-effect"
          asChild
        >
          <a href="mailto:savic.sanja2025@gmail.com">
            Pošalji Email
          </a>
        </Button>
      </div>
    </section>
  );
};

export default Contact;
