import { useState, useEffect, useRef } from 'react';
import { Trophy, Award, Users, Target, Medal, Star } from 'lucide-react';

const AchievementsSection = () => {
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

  const achievements = [
    {
      year: "2024",
      title: "best mini project 2nd place library management system",
      category: "Technical Innovation",
      description: "Awarded Best Mini-Project for developing an efficient Library Management System with advanced database optimization, automated workflows, and intuitive user interface design",
      icon: Trophy,
      color: "trust-blue"
    },
    {
      year: "2023", 
      title: "2nd place department level best mini project award for project Full-Stack Development",
      category: "Machine Learning Excellence",
      description: "Successfully engineered a web-based computer vision solution using OpenCV and Flask, implementing real-time object detection and analysis algorithms with 95% accuracy",
      icon: Award,
      color: "creative-purple"
    },
    {
      year: "2023",
      title: "college level best mini project 3rd place for project Full-Stack Development",
      category: "Project Management",
      description: "Led cross-functional team of 4 developers in architecting and deploying a scalable e-commerce platform using MERN stack, achieving 40% faster load times and seamless user experience",
      icon: Users,
      color: "growth-green"
    }
  ];

  return (
    <section ref={sectionRef} id="achievements" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-section-title mb-4">
            <span className="text-gradient-primary">Achievements & Recognition</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-body-large text-muted-foreground max-w-2xl mx-auto">
            A timeline of milestones and recognitions that showcase my journey and dedication
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-0.5"></div>

          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={achievement.title}
                className={`relative flex items-center mb-12 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Dot */}
                <div className={`absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-${achievement.color} transform md:-translate-x-1/2 flex items-center justify-center z-10`}>
                  <Icon className="w-4 h-4 text-white" />
                </div>

                {/* Achievement Card */}
                <div className={`ml-12 md:ml-0 md:w-5/12 ${isEven ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <div className="card-hover p-6 rounded-xl group">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`px-3 py-1 text-sm rounded-full bg-${achievement.color}/10 text-${achievement.color} font-medium`}>
                        {achievement.year}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {achievement.category}
                      </span>
                    </div>
                    
                    <h3 className="text-card-title text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                      {achievement.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default AchievementsSection;