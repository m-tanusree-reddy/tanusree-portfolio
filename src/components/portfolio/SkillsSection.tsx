import { useState, useEffect, useRef } from 'react';
import { Code, Database, Globe, Cpu, BarChart3, Users } from 'lucide-react';
const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState<Set<string>>(new Set());
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        // Animate skills with staggered delay
        setTimeout(() => {
          const skillElements = document.querySelectorAll('.skill-progress');
          skillElements.forEach((element, index) => {
            setTimeout(() => {
              const skillName = element.getAttribute('data-skill');
              if (skillName) {
                setAnimatedSkills(prev => new Set([...prev, skillName]));
              }
            }, index * 200);
          });
        }, 500);
      }
    }, {
      threshold: 0.3
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);
  const skillCategories = [{
    icon: Code,
    title: "Programming Languages",
    skills: [{
      name: "Python",
      level: 85
    }, {
      name: "JavaScript",
      level: 75
    }, {
      name: "SQL",
      level: 80
    }, {
      name: "TypeScript",
      level: 70
    }]
  }, {
    icon: Database,
    title: "Data & AI",
    skills: [{
      name: "Machine Learning",
      level: 75
    }, {
      name: "OpenCV",
      level: 80
    }, {
      name: "Data Analysis",
      level: 85
    }, {
      name: "TensorFlow",
      level: 65
    }]
  }, {
    icon: Globe,
    title: "Web Development",
    skills: [{
      name: "React",
      level: 80
    }, {
      name: "Node.js",
      level: 75
    }, {
      name: "Flask",
      level: 85
    }, {
      name: "MongoDB",
      level: 70
    }]
  }, {
    icon: Cpu,
    title: "Tools & Technologies",
    skills: [{
      name: "Git",
      level: 85
    }, {
      name: "Docker",
      level: 60
    }, {
      name: "AWS",
      level: 55
    }, {
      name: "Tailwind CSS",
      level: 80
    }]
  }, {
    icon: BarChart3,
    title: "Data Visualization",
    skills: [{
      name: "Matplotlib",
      level: 80
    }, {
      name: "Plotly",
      level: 75
    }, {
      name: "D3.js",
      level: 50
    }, {
      name: "Tableau",
      level: 65
    }]
  }, {
    icon: Users,
    title: "Professional Skills",
    skills: [{
      name: "Leadership",
      level: 80
    }, {
      name: "Problem Solving",
      level: 90
    }, {
      name: "Communication",
      level: 85
    }, {
      name: "Team Collaboration",
      level: 88
    }]
  }];
  return <section ref={sectionRef} id="skills" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-section-title mb-4">
            Skills & <span className="text-gradient-primary">Expertise</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-body-large text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and professional competencies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => {
          const Icon = category.icon;
          return <div key={category.title} className={`card-hover p-8 rounded-2xl group ${isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{
            animationDelay: `${categoryIndex * 0.1}s`
          }}>
                <div className="flex items-center mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300 mr-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-card-title text-foreground">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map(skill => <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                        
                      </div>
                      <div className="skill-bar">
                        <div className={`skill-progress ${animatedSkills.has(skill.name) ? 'w-full' : 'w-0'}`} data-skill={skill.name} style={{
                    width: animatedSkills.has(skill.name) ? `${skill.level}%` : '0%'
                  }} />
                      </div>
                    </div>)}
                </div>
              </div>;
        })}
        </div>
      </div>
    </section>;
};
export default SkillsSection;