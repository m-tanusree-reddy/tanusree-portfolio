import { useState, useEffect, useRef } from 'react';
import { ExternalLink, Download, Award, BookOpen, Code, Database } from 'lucide-react';

const CertificatesSection = () => {
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

  const certificates = [
    {
      title: "Machine Learning Specialization",
      issuer: "Stanford University (Coursera)",
      date: "2024",
      category: "AI/ML",
      description: "Comprehensive program covering supervised learning, neural networks, and unsupervised learning algorithms",
      icon: Database,
      color: "trust-blue",
      credentialUrl: "#",
      skills: ["Python", "TensorFlow", "Neural Networks", "Deep Learning"]
    },
    {
      title: "Full Stack Web Development",
      issuer: "Meta (Coursera)",
      date: "2023",
      category: "Web Development",
      description: "Complete full-stack development program including React, Node.js, databases, and deployment strategies",
      icon: Code,
      color: "growth-green",
      credentialUrl: "#",
      skills: ["React", "Node.js", "MongoDB", "API Development"]
    },
    {
      title: "Data Science Professional Certificate",
      issuer: "IBM (Coursera)",
      date: "2023",
      category: "Data Science",
      description: "Hands-on data science program covering data analysis, visualization, and machine learning implementation",
      icon: BookOpen,
      color: "creative-purple",
      credentialUrl: "#",
      skills: ["Python", "Pandas", "Matplotlib", "SQL"]
    },
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2023",
      category: "Cloud Computing",
      description: "Foundational certification demonstrating cloud concepts and AWS services knowledge",
      icon: Award,
      color: "trust-blue",
      credentialUrl: "#",
      skills: ["AWS", "Cloud Architecture", "Security", "Cost Management"]
    },
    {
      title: "Google Analytics Certified",
      issuer: "Google",
      date: "2022",
      category: "Analytics",
      description: "Professional certification in web analytics, data interpretation, and digital marketing insights",
      icon: Database,
      color: "growth-green",
      credentialUrl: "#",
      skills: ["Analytics", "Data Interpretation", "Reporting", "KPI Tracking"]
    },
    {
      title: "Agile Development Practices",
      issuer: "University of Virginia (Coursera)",
      date: "2022",
      category: "Project Management",
      description: "Comprehensive training in Agile methodologies, Scrum practices, and team collaboration techniques",
      icon: BookOpen,
      color: "creative-purple",
      credentialUrl: "#",
      skills: ["Scrum", "Agile", "Team Leadership", "Project Planning"]
    }
  ];

  return (
    <section ref={sectionRef} id="certificates" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-section-title mb-4">
            Certificates & <span className="text-gradient-primary">Credentials</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-body-large text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and continuous learning achievements that validate my expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((certificate, index) => {
            const Icon = certificate.icon;
            
            return (
              <div
                key={certificate.title}
                className={`card-hover p-6 rounded-2xl group cursor-pointer transform hover:rotate-1 transition-all duration-300 ${
                  isVisible ? 'animate-scale-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-${certificate.color}/10 group-hover:bg-${certificate.color}/20 transition-colors duration-300`}>
                    <Icon className={`w-6 h-6 text-${certificate.color}`} />
                  </div>
                  <div className="text-right">
                    <span className={`px-2 py-1 text-xs rounded-full bg-${certificate.color}/10 text-${certificate.color} font-medium`}>
                      {certificate.category}
                    </span>
                    <div className="text-sm text-muted-foreground mt-1">
                      {certificate.date}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {certificate.title}
                </h3>
                
                <div className="text-sm font-medium text-muted-foreground mb-3">
                  {certificate.issuer}
                </div>

                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {certificate.description}
                </p>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {certificate.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 text-xs rounded bg-muted/50 text-muted-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <button className="flex-1 btn-hero text-sm py-2 px-4 flex items-center justify-center gap-2">
                    <ExternalLink size={14} />
                    View Credential
                  </button>
                  <button className="btn-ghost text-sm py-2 px-3 flex items-center gap-1">
                    <Download size={14} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary Stats */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
          {[
            { icon: Award, number: "6+", label: "Professional Certificates", color: "trust-blue" },
            { icon: BookOpen, number: "200+", label: "Hours of Learning", color: "growth-green" },
            { icon: Code, number: "4", label: "Technical Specializations", color: "creative-purple" },
            { icon: Database, number: "3", label: "Cloud Certifications", color: "trust-blue" }
          ].map((stat) => {
            const StatIcon = stat.icon;
            return (
              <div key={stat.label} className="text-center card-hover p-4 rounded-xl group">
                <div className={`inline-flex items-center justify-center w-10 h-10 rounded-lg bg-${stat.color}/10 group-hover:bg-${stat.color}/20 transition-colors duration-300 mb-3`}>
                  <StatIcon className={`w-5 h-5 text-${stat.color}`} />
                </div>
                <div className="text-2xl font-bold text-gradient-primary mb-1">
                  {stat.number}
                </div>
                <div className="text-xs text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;