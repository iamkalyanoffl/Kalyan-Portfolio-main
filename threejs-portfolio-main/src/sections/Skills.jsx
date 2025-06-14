import { useState, useRef, useEffect } from 'react';
const skillsData = {
  "Programming Languages": [
    { name: "JavaScript", icon: "🟨", color: "#F7DF1E" },
    { name: "TypeScript", icon: "🔷", color: "#3178C6" },
    { name: "Python", icon: "🐍", color: "#3776AB" },
    { name: "Java", icon: "☕", color: "#ED8B00" },
    { name: "C++", icon: "⚡", color: "#00599C" },
    { name: "C", icon: "🔧", color: "#A8B9CC" },
    { name: "Verilog", icon: "🔌", color: "#1C4E80" },
    { name: "Rust", icon: "🦀", color: "#CE422B" }
  ],
  "Frontend & Design": [
    { name: "React", icon: "⚛️", color: "#61DAFB" },
    { name: "Next.js", icon: "▲", color: "#000000" },
    { name: "HTML", icon: "🌐", color: "#E34F26" },
    { name: "Bootstrap", icon: "🅱️", color: "#7952B3" },
    { name: "Tailwind", icon: "🌊", color: "#06B6D4" },
    { name: "Figma", icon: "🎨", color: "#F24E1E" },
    { name: "Canva", icon: "🎭", color: "#00C4CC" },
    { name: "Sketch", icon: "💎", color: "#F7B500" }
  ],
  "Backend & Database": [
    { name: "Node.js", icon: "🟢", color: "#339933" },
    { name: "Express", icon: "⚡", color: "#000000" },
    { name: "SQL", icon: "🗃️", color: "#336791" },
    { name: "MySQL", icon: "🐬", color: "#4479A1" },
    { name: "PostgreSQL", icon: "🐘", color: "#336791" },
    { name: "Flask", icon: "🌶️", color: "#000000" },
    { name: "Django", icon: "🎸", color: "#092E20" }
   
    
  ],
  "DevOps & Cloud": [
    { name: "AWS", icon: "☁️", color: "#FF9900" },
    { name: "Docker", icon: "🐳", color: "#2496ED" },
    { name: "Kubernetes", icon: "⚓", color: "#326CE5" },
    { name: "Jenkins", icon: "🔧", color: "#D33833" },
    { name: "Slack", icon: "💬", color: "#4A154B" },
    { name: "GitHub Actions", icon: "🚀", color: "#2088FF" }
  ],
  "AI & Machine Learning": [
    { name: "TensorFlow", icon: "🧠", color: "#FF6F00" },
    { name: "PyTorch", icon: "🔥", color: "#EE4C2C" },
    { name: "Scikit-learn", icon: "📊", color: "#F7931E" },
    { name: "Pandas", icon: "🐼", color: "#150458" },
    { name: "NumPy", icon: "🔢", color: "#013243" },
    { name: "Hugging Face", icon: "🤗", color: "#FF9D00" },
    { name: "LangChain", icon: "⛓️", color: "#1C3C3C" },
    { name: "BERT", icon: "📝", color: "#4285F4" },
    { name: "Keras", icon: "🎯", color: "#D00000" },
    { name: "spaCy", icon: "🌍", color: "#09A3D5" },
    { name: "NLTK", icon: "📚", color: "#154F3C" },
    { name: "Streamlit", icon: "🎈", color: "#FF4B4"},
    { name: "Mistral", icon: "🌪️", color: "#FF7000" },
    { name: "Ollama", icon: "🚀", color: "#000000" },
    { name: "LangSmith", icon: "🔗", color: "#1C3C3C" },
    { name: "OpenCV", icon: "👁️", color: "#5C3EE8" },
    { name: "Matplotlib", icon: "📊", color: "#11557C" },
    { name: "Seaborn", icon: "🌊", color: "#4C72B0" },
    { name: "Plotly", icon: "📈", color: "#3F4F75" }

  ],
  "CS Fundamentals": [
    { name: "Data Structures", icon: "🗂️", color: "#4A90E2" },
    { name: "Algorithms", icon: "⚙️", color: "#50C878" },
    { name: "System Design", icon: "🏗️", color: "#FF6B6B" },
    { name: "Networks", icon: "🌐", color: "#9B59B6" },
    { name: "Security", icon: "🔒", color: "#E67E22" },
    { name: "Operating System", icon: "📝", color: "#F05032" }
  ],
  "Research Tools & Documentation": [
  { name: "Jupyter Notebook", icon: "📓", color: "#DA5B0B" },
  { name: "LaTeX", icon: "🔤", color: "#008080" },
  { name: "Overleaf", icon: "📝", color: "#47A141" },
  { name: "Notion", icon: "🧾", color: "#000000" },
  { name: "Obsidian", icon: "🔮", color: "#675FFF" },
  { name: "Google Scholar", icon: "🔎", color: "#4285F4" },
  { name: "Kaggle", icon: "📈", color: "#20BEFF" }
]

};

const Skills = () => {
  return (
    <section className="c-space my-20" id="skill">
      <h3 className="head-text">My Technical Skillset</h3>
      
      <div className="skills-container">
        {Object.entries(skillsData).map(([category, skills]) => (
          <div key={category} className="skill-category">
            <h4 className="category-title">{category}</h4>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={`${category}-${index}`} className="skill-card">
                  <div className="skill-icon" style={{ color: skill.color }}>
                    {skill.icon}
                  </div>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .skills-container {
          display: grid;
          gap: 2.5rem;
          margin-top: 2rem;
        }

        .skill-category {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 2rem;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }

        .skill-category:hover {
          transform: translateY(-4px);
          border-color: rgba(255, 255, 255, 0.2);
          background: rgba(255, 255, 255, 0.04);
        }

        .category-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 1.5rem;
          text-align: center;
          position: relative;
        }

        .category-title::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 2px;
          background: linear-gradient(90deg, #00d2ff, #3a7bd5);
          border-radius: 2px;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
          gap: 1rem;
        }

        .skill-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 1.5rem 1rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          transition: all 0.3s ease;
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }

        .skill-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          transition: left 0.5s ease;
        }

        .skill-card:hover::before {
          left: 100%;
        }

        .skill-card:hover {
          transform: translateY(-2px);
          border-color: rgba(255, 255, 255, 0.2);
          background: rgba(255, 255, 255, 0.08);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        }

        .skill-icon {
          font-size: 2.5rem;
          margin-bottom: 0.75rem;
          filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
          transition: transform 0.3s ease;
        }

        .skill-card:hover .skill-icon {
          transform: scale(1.1);
        }

        .skill-name {
          font-size: 0.9rem;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.9);
          text-align: center;
          line-height: 1.3;
        }

        @media (max-width: 768px) {
          .skills-container {
            gap: 2rem;
          }
          
          .skill-category {
            padding: 1.5rem;
          }
          
          .skills-grid {
            grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
            gap: 0.75rem;
          }
          
          .skill-card {
            padding: 1.25rem 0.75rem;
          }
          
          .skill-icon {
            font-size: 2rem;
          }
          
          .skill-name {
            font-size: 0.8rem;
          }
          
          .category-title {
            font-size: 1.25rem;
          }
        }

        @media (max-width: 480px) {
          .skills-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </section>
  );
};



export default Skills;