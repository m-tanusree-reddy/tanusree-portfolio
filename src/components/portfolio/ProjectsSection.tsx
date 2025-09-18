import { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, Database, Globe, Code2, Eye } from 'lucide-react';

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Library Management System",
      description: "A comprehensive library management system built with Python and SQL, featuring book cataloging, member management, and automated fine calculations.",
      technologies: ["Python", "SQL", "Tkinter", "SQLite"],
      features: [
        "Book inventory management",
        "Member registration and tracking",
        "Automated fine calculation",
        "Search and filter functionality",
        "Report generation"
      ],
      icon: Database,
      color: "trust-blue",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Web-Based Video Analysis Platform",
      description: "An intelligent video analysis platform using OpenCV and Flask for real-time video processing, object detection, and analytics dashboard.",
      technologies: ["Python", "OpenCV", "Flask", "JavaScript", "Chart.js"],
      features: [
        "Real-time video processing",
        "Object detection and tracking",
        "Motion analysis algorithms",
        "Interactive analytics dashboard",
        "Export processed videos"
      ],
      icon: Eye,
      color: "creative-purple",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Jewellery E-commerce Website",
      description: "A modern, responsive e-commerce platform for jewelry retail with secure payments, user authentication, and admin dashboard.",
      technologies: ["Node.js", "React", "MongoDB", "Tailwind CSS", "Supabase"],
      features: [
        "Product catalog with filtering",
        "Secure user authentication",
        "Shopping cart and checkout",
        "Payment gateway integration",
        "Admin dashboard for inventory"
      ],
      icon: Globe,
      color: "growth-green",
      demoUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section ref={sectionRef} id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-section-title mb-4">
            Featured <span className="text-gradient-primary">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-body-large text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work in data science, AI, and web development
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-12">
          {projects.map((project, index) => {
            const Icon = project.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div
                key={project.title}
                className={`grid lg:grid-cols-2 gap-8 items-center ${
                  isVisible ? (isEven ? 'animate-slide-in-left' : 'animate-slide-in-right') : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Project Info */}
                <div className={`${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="card-hover p-8 rounded-2xl group">
                    <div className="flex items-center mb-6">
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-${project.color}/10 group-hover:bg-${project.color}/20 transition-colors duration-300 mr-4`}>
                        <Icon className={`w-6 h-6 text-${project.color}`} />
                      </div>
                      <h3 className="text-card-title text-foreground">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm rounded-full bg-muted/50 text-muted-foreground border border-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4">
                      <button className="btn-hero flex items-center gap-2">
                        <ExternalLink size={16} />
                        Live Demo
                      </button>
                      <button className="btn-ghost flex items-center gap-2">
                        <Github size={16} />
                        Source Code
                      </button>
                    </div>
                  </div>
                </div>

                {/* Project Features */}
                <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="card-hover p-8 rounded-2xl">
                    <h4 className="text-lg font-semibold text-foreground mb-4">
                      Key Features
                    </h4>
                    <ul className="space-y-3">
                      {project.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start gap-3 text-muted-foreground"
                        >
                          <div className={`w-2 h-2 rounded-full bg-${project.color} mt-2 flex-shrink-0`} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View More Projects Button */}
        <div className={`text-center mt-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
          <button className="btn-ghost flex items-center gap-2 mx-auto">
            <Code2 size={16} />
            View All Projects on GitHub
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;