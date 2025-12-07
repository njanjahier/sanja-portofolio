import { Database, Code2, Server, GitBranch } from "lucide-react";

const TechStack = () => {
  const categories = [
    {
      title: "ML / Data",
      icon: <Database className="w-6 h-6" />,
      color: "text-primary",
      tech: ["Python", "Pandas", "Scikit-Learn", "Streamlit"],
    },
    {
      title: "Full-Stack",
      icon: <Code2 className="w-6 h-6" />,
      color: "text-accent",
      tech: ["JavaScript", "React", "Node.js", "Express.js"],
    },
    {
      title: "Baze Podataka",
      icon: <Server className="w-6 h-6" />,
      color: "text-primary",
      tech: ["SQL", "MariaDB", "MySQL"],
    },
    {
      title: "Alati",
      icon: <GitBranch className="w-6 h-6" />,
      color: "text-accent",
      tech: ["Git", "GitHub"],
    },
  ];

  return (
    <section id="tech" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Tehnološki <span className="text-gradient">Stack</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, idx) => (
            <div
              key={idx}
              className="bg-card border border-border rounded-xl p-6 card-hover card-glow"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className={`${category.color} mb-4 flex items-center gap-3`}>
                {category.icon}
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              
              <div className="space-y-2">
                {category.tech.map((tech, techIdx) => (
                  <div
                    key={techIdx}
                    className="bg-secondary/50 rounded-lg px-3 py-2 text-sm font-medium text-foreground"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
