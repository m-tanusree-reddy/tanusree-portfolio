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
      title: "Best Mini-Project Award",
      category: "Academic Excellence",
      description: "Recognized for outstanding innovation in Library Management System development using Python and SQL",
      icon: Trophy,
      color: "trust-blue"
    },
    {
      year: "2023",
      title: "Data Science Innovation Award",
      category: "Technical Achievement",
      description: "Honored for developing an advanced video analysis platform with real-time object detection capabilities",
      icon: Award,
      color: "creative-purple"
    },
    {
      year: "2023",
      title: "Team Leadership Recognition",
      category: "Leadership",
      description: "Led a cross-functional team of 5 developers in building a full-stack e-commerce solution",
      icon: Users,
      color: "growth-green"
    },
    {
      year: "2022",
      title: "Sports Excellence - Basketball",
      category: "Athletics",
      description: "Regional champion in inter-collegiate basketball tournament, demonstrating teamwork and dedication",
      icon: Medal,
      color: "trust-blue"
    },
    {
      year: "2022",
      title: "Hackathon Winner",
      category: "Competition",
      description: "1st place in university-level hackathon for developing an AI-powered solution for sustainable agriculture",
      icon: Target,
      color: "growth-green"
    },
    {
      year: "2021",
      title: "Student Mentor of the Year",
      category: "Community Service",
      description: "Mentored 20+ junior students in programming and career development, improving their academic performance",
      icon: Star,
      color: "creative-purple"
    }
  ];

  return (
    <section ref={sectionRef} id="achievements" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-section-title mb-4">
            Achievements & <span className="text-gradient-primary">Recognition</span>
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

        {/* Stats Section */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: '1.2s' }}>
          {[
            { number: "6+", label: "Awards Won" },
            { number: "3", label: "Leadership Roles" },
            { number: "20+", label: "Students Mentored" },
            { number: "2", label: "Years Experience" }
          ].map((stat) => (
            <div key={stat.label} className="text-center card-hover p-6 rounded-xl">
              <div className="text-3xl md:text-4xl font-bold text-gradient-primary mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;