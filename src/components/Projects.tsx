import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Brain, Server, MessageSquare, Bot } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "ML Software Defect Detection",
      description: "Klasifikacioni model za predviđanje defektnog softvera. Koristi machine learning tehnike za analizu koda i detekciju potencijalnih bagova.",
      icon: <Brain className="w-8 h-8" />,
      tech: ["Python", "Scikit-Learn", "Pandas"],
      github: "https://github.com/njanjahier/ML-Software-Defect-Detection",
      demo: null,
      color: "from-primary/20 to-accent/20",
    },
    {
      title: "Auto Service Reservation Platform",
      description: "Full-stack aplikacija za rezervaciju auto servisa. React frontend sa Node.js backend-om i MariaDB bazom podataka.",
      icon: <Server className="w-8 h-8" />,
      tech: ["React", "Node.js", "Express", "MariaDB"],
      github: "https://github.com/njanjahier/auto-service-reservation-platform",
      demo: null,
      color: "from-accent/20 to-primary/20",
    },
    {
      title: "Sentiment Analysis App",
      description: "NLP aplikacija za analizu sentimenta u realnom vremenu. Interaktivni Streamlit interfejs za instant feedback.",
      icon: <MessageSquare className="w-8 h-8" />,
      tech: ["Python", "Streamlit", "NLP"],
      github: "https://github.com/njanjahier/sentiment-analysis-streamlit",
      demo: null,
      color: "from-primary/20 to-accent/20",
    },
    {
      title: "Ollama Chatbot GUI",
      description: "Python desktop aplikacija za interakciju sa lokalnim LLM modelima pomoću Ollama framework-a.",
      icon: <Bot className="w-8 h-8" />,
      tech: ["Python", "Ollama", "GUI"],
      github: "https://github.com/njanjahier/Ollama-Chatbot-GUI",
      demo: null,
      color: "from-accent/20 to-primary/20",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Istaknuti <span className="text-gradient">Projekti</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-card border border-border rounded-xl overflow-hidden card-hover card-glow"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className={`h-2 bg-gradient-to-r ${project.color}`} />
              
              <div className="p-8">
                <div className="text-primary mb-4">
                  {project.icon}
                </div>

                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="px-3 py-1 bg-secondary rounded-full text-sm font-medium text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    className="flex-1 border-primary/50 text-primary hover:bg-primary/10"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
