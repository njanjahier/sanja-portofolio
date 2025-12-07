import profilePhoto from "@/assets/profile-photo.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          O <span className="text-gradient">Meni</span>
        </h2>
        
        <div className="bg-card border border-border rounded-xl p-8 md:p-12 card-glow">
          <div className="flex flex-col md:flex-row gap-8 items-center mb-6">
            <img 
              src={profilePhoto} 
              alt="Sanja Savić" 
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-primary/20 card-hover"
            />
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed flex-1">
              <p>
                Diplomirala sam <span className="text-foreground font-semibold">Computer Science and Informatics</span> i trenutno sam aktivno u potrazi za <span className="text-primary font-semibold">Junior Data Science, Machine Learning ili Software Engineering</span> pozicijom.
              </p>
              
              <p>
                Moja strast leži u spajanju <span className="text-accent font-semibold">podataka</span> i <span className="text-primary font-semibold">machine learning-a</span> sa praktičnim softverskim rješenjima. Vjerujem da kvalitetni podaci i čist kod mogu transformisati način na koji rješavamo probleme.
              </p>

              <p>
                Kroz svoje projekte sam razvila duboko razumijevanje kako ML modela, tako i full-stack razvoja, što mi omogućava da kreiram kompletna, end-to-end rješenja.
              </p>

              <div className="pt-4">
                <p className="text-foreground font-semibold flex items-center gap-2">
                  <span className="text-primary">📍</span>
                  Banja Luka, Bosna i Hercegovina
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
