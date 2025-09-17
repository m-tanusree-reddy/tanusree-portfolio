import { useState, useEffect, useRef } from 'react';
import { Code2, Brain, Users, Target } from 'lucide-react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const traits = [
    {
      icon: Code2,
      title: "Problem Solver",
      description: "I thrive on breaking down complex challenges into manageable solutions"
    },
    {
      icon: Brain,
      title: "Creative Thinker",
      description: "Bringing innovative approaches to data science and AI applications"
    },
    {
      icon: Users,
      title: "Collaborative",
      description: "Strong believer in teamwork and knowledge sharing for better outcomes"
    },
    {
      icon: Target,
      title: "Adaptable",
      description: "Quick to learn new technologies and adapt to changing requirements"
    }
  ];

  return (
    <section ref={sectionRef} id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-section-title text-center mb-4">
            About <span className="text-gradient-primary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-16 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Description */}
          <div className={`${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div className="card-hover p-8 rounded-2xl">
              <p className="text-body-large text-muted-foreground mb-6 leading-relaxed">
                I'm a passionate Data Science and AI Engineer with a love for transforming complex 
                data into meaningful insights. My journey in technology has been driven by curiosity 
                and a desire to solve real-world problems through innovative solutions.
              </p>
              <p className="text-body-large text-muted-foreground mb-6 leading-relaxed">
                With experience spanning from machine learning algorithms to full-stack web development, 
                I bring a unique perspective that bridges the gap between data science and practical 
                application development.
              </p>
              <p className="text-body-large text-muted-foreground leading-relaxed">
                When I'm not coding or analyzing data, you'll find me exploring new technologies, 
                participating in sports, or mentoring fellow developers in the community.
              </p>
            </div>
          </div>

          {/* Right Column - Traits Grid */}
          <div className={`${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="grid grid-cols-2 gap-6">
              {traits.map((trait, index) => {
                const Icon = trait.icon;
                return (
                  <div
                    key={trait.title}
                    className={`card-hover p-6 rounded-xl text-center group ${
                      isVisible ? 'animate-scale-in' : 'opacity-0'
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-card-title mb-2 text-foreground">
                      {trait.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {trait.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;