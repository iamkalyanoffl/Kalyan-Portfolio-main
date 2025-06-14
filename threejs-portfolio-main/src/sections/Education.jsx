import { useState, useRef, useEffect } from 'react';

const Education = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const cardRefs = useRef([]);

  // Education data - simplified and cleaned
  const educationData = [
    {
      id: 1,
      degree: "Bachelor of Technology - BTech, Computer Science and Engineering",
      institution: "Vellore Institute Of Technology, Chennai",
      duration: "Aug 2023- Sep 2027",
      location: "Chennai, India",
      icon: "🎓",
      color: "from-purple-500 to-blue-600",
      description: "Completed comprehensive coursework in core Computer Science subjects, including Data Structures and Algorithms (DSA), Design and Analysis of Algorithms (DAA), Theory of Computation (TOC), Operating Systems (OS), Computer Networks (CN), Cloud Computing, Microprocessors and Microcontrollers, Computer Architecture and Organization (CAO), and Mathematics. Additionally, gained hands-on experience in Structured and Object-Oriented Programming, Python Programming, Digital Electronics, Java, Rust , Verilog and so on. Actively engaged in student life by managing events for various clubs and technical chapters, and contributed to the Best Emerging Project recognized at TechnoVIT."
    },
    {
      id: 2,
      degree: "Bachelor of Arts - BA , Hindi Language and Literature",
      institution: "Dakshina Bharat Hindi Prachar Sabha",
      duration: "2015 - 2020",
      location: "India",
      icon: "📚",
      color: "from-orange-500 to-red-600",
      description: "Comprehensive study of Hindi literature and language structure with deep understanding of Indian cultural and linguistic heritage."
    },
    {
      id: 3,
      degree: "Class 12, Computer Science with PCM",
      institution: "Sri Sankara Senior Secondary School (CBSE)",
      duration: "2022 - 2023",
      location: "Chennai, India",
      icon: "🔬",
      color: "from-teal-500 to-green-600",
      description: "Strong foundation in Computer Science fundamentals, Advanced Mathematics, and Physics concepts with programming experience."
    },
    {
      id: 4,
      degree: "Class 10, General Studies",
      institution: "Sri Sankara Senior Secondary School (CBSE)",
      duration: "2019 - 2020",
      location: "Chennai, India",
      icon: "📖",
      color: "from-blue-500 to-cyan-600",
      description: "Well-rounded education across multiple subjects with strong foundation in Mathematics, Science, and Languages."
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-in');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="c-space my-20" id="education">
      <div className="w-full text-white-600">
        <p className="head-text">My Education</p>

        <div className="education-container">
          {educationData.map((edu, index) => (
            <div
              key={edu.id}
              ref={(el) => (cardRefs.current[index] = el)}
              onMouseEnter={() => setHoveredCard(edu.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="education-card"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-start gap-6">
                <div className="education-icon-container">
                  <div className={`education-icon ${hoveredCard === edu.id ? 'floating-icon' : ''}`}>
                    {edu.icon}
                  </div>
                </div>

                <div className="education-details flex-1">
                  <div className="education-header">
                    <h3 className="education-title">{edu.degree}</h3>
                    <div className="grade-badge-container">
                      
                    </div>
                  </div>
                  
                  <p className="education-institution">{edu.institution}</p>
                  
                  <div className="education-meta">
                    <span className="duration-badge">{edu.duration}</span>
                    <span className="location-badge">{edu.location}</span>
                  </div>
                  
                  <p className="education-description">{edu.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .education-container {
          display: grid;
          gap: 2rem;
          margin-top: 2rem;
        }
        
        .education-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 2rem;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }

        .education-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          transition: left 0.5s ease;
        }

        .education-card:hover::before {
          left: 100%;
        }

        .education-card:hover {
          transform: translateY(-4px);
          border-color: rgba(255, 255, 255, 0.2);
          background: rgba(255, 255, 255, 0.04);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        }
        
        .education-icon-container {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .education-icon {
          font-size: 3rem;
          filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
          transition: transform 0.3s ease;
        }
        
        .education-card:hover .education-icon {
          transform: scale(1.1);
        }
        
        .floating-icon {
          animation: float 2s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) scale(1.1);
          }
          50% {
            transform: translateY(-8px) scale(1.1);
          }
        }
        
        .education-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1rem;
          gap: 1rem;
        }
        
        .education-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: #ffffff;
          line-height: 1.3;
          flex: 1;
        }
        
        .grade-badge-container {
          flex-shrink: 0;
        }
        
        .grade-badge {
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.875rem;
          font-weight: 600;
          background: rgba(255, 255, 255, 0.1);
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
        }
        
        .education-institution {
          font-size: 1.1rem;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 1rem;
        }
        
        .education-meta {
          display: flex;
          gap: 1rem;
          margin-bottom: 1rem;
          flex-wrap: wrap;
        }
        
        .duration-badge,
        .location-badge {
          padding: 0.375rem 0.75rem;
          border-radius: 12px;
          font-size: 0.8rem;
          font-weight: 500;
          background: rgba(255, 255, 255, 0.05);
          color: rgba(255, 255, 255, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .education-description {
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.6;
        }
        
        .animate-slide-in {
          animation: slideIn 0.6s ease-out forwards;
        }
        
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .education-container {
            gap: 1.5rem;
          }
          
          .education-card {
            padding: 1.5rem;
          }
          
          .education-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.75rem;
          }
          
          .education-title {
            font-size: 1.1rem;
          }
          
          .education-icon {
            font-size: 2.5rem;
          }
          
          .education-meta {
            flex-direction: column;
            gap: 0.5rem;
          }
        }

        @media (max-width: 480px) {
          .education-card {
            padding: 1.25rem;
          }
          
          .flex {
            flex-direction: column;
            gap: 1.25rem;
          }
          
          .education-icon-container {
            align-self: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Education;