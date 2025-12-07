import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10 animate-gradient-shift bg-[length:200%_200%]" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold">
            Zdravo, ja sam{" "}
            <span className="text-gradient glow-effect">Sanja</span>
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold text-muted-foreground">
            Pretvarajući podatke u pametna softverska rješenja
          </h2>
        </div>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Junior Data & ML Engineer | Software Engineer sa strašću prema čistom kodu i rješavanju problema
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Button
            size="lg"
            onClick={() => scrollToSection("projects")}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 glow-effect"
          >
            Vidi ML/Data Projekte
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection("contact")}
            className="border-primary/50 text-primary hover:bg-primary/10 font-semibold px-8"
          >
            Kontaktiraj Me
          </Button>
        </div>

        <div className="pt-12 animate-bounce">
          <ArrowDown className="w-8 h-8 mx-auto text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
