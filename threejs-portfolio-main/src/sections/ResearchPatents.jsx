import React, { useState } from 'react';

const researchData = {
  "Research Papers": [
    {
      id: 1,
      title: "The Ethical Considerations Of Human Genetic Engineering",
      status: "Published",
      journal: "TIJER",
      description: "Human genetic engineering, the deliberate modification of an individual’s genetic makeup, can revolutionize medicine and enhance human capabilities. However, this emerging field raises profound ethical concerns regarding the boundaries of intervention in human biology, the potential for genetic discrimination, and the implications for future generations. This research paper explores the ethical considerations associated with human genetic engineering by examining the arguments for and against its use, considering its potential impact on society, and analysing the ethical frameworks used to evaluate these interventions. By critically evaluatingthe ethical implications, we can contribute to a well-informed and balanced discussion surrounding the responsible application of genetic engineering technologies.", 
      tags: ["Genetic Engineering", "CRISPR", "Neural Architecture Search","Somatic Cells", "Germline Cells", "Genome Editing"
, "Sickle Cell Anaemia", "Huntington disease", "Cystic Fibrosis", "MolecularDystrophy", "Designer Babies", "Genetic Elite", "Preimplantation Genetic Diagnosis (PGD)"],
      expectedDate: "2023",
      icon: "📄",
      statusColor: "#FF6B6B"
    }
    
  ],
  "Patents": [
    {
      id: 1, 
      title: "Upcoming ", //AI-Powered Real-Time Code Vulnerability Detection System
      status: "",
      patentNumber: "",
      description: "",
      tags: [],
      expectedDate: "",
      icon: "🔒",
      statusColor: "#96CEB4"
    }
    
  
    
  ]
};

const ResearchPatents = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleExpanded = (category, id) => {
    const key = `${category}-${id}`;
    setExpandedCard(expandedCard === key ? null : key);
  };

  const getStatusBadge = (status, color) => (
    <span 
      className="status-badge" 
      style={{ backgroundColor: `${color}20`, color: color, borderColor: `${color}40` }}
    >
      {status}
    </span>
  );

  return (
    <section className="c-space my-20" id="research">
      <h3 className="head-text">Research Papers & Patents</h3>
      
      
      <div className="research-container">
        {Object.entries(researchData).map(([category, items]) => (
          <div key={category} className="research-category">
            <h4 className="category-title">
              <span className="category-icon">
                {category === "Research Papers" ? "📚" : "💡"}
              </span>
              {category}
            </h4>
            
            <div className="research-grid">
              {items.map((item) => {
                const isExpanded = expandedCard === `${category}-${item.id}`;
                return (
                  <div 
                    key={`${category}-${item.id}`} 
                    className={`research-card ${isExpanded ? 'expanded' : ''}`}
                    onClick={() => toggleExpanded(category, item.id)}
                  >
                    <div className="card-header">
                      <div className="card-icon">{item.icon}</div>
                      <div className="card-title-section">
                        <h5 className="card-title">{item.title}</h5>
                        <div className="card-meta">
                          {getStatusBadge(item.status, item.statusColor)}
                          <span className="expected-date">{item.expectedDate}</span>
                        </div>
                      </div>
                    </div>

                    <div className="card-venue">
                      {category === "Research Papers" ? (
                        <span className="venue">📖 {item.journal}</span>
                      ) : (
                        <span className="venue"> {item.patentNumber}</span>
                      )}
                    </div>

                    <div className={`card-description ${isExpanded ? 'expanded' : ''}`}>
                      <p>{item.description}</p>
                    </div>

                    <div className="card-tags">
                      {item.tags.map((tag, index) => (
                        <span key={index} className="tag">{tag}</span>
                      ))}
                    </div>

                    <div className="expand-indicator">
                      <span className={`expand-icon ${isExpanded ? 'rotated' : ''}`}>▼</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .sub-text {
          text-align: center;
          color: rgba(255, 255, 255, 0.7);
          font-size: 1.1rem;
          margin-top: 0.5rem;
          margin-bottom: 2rem;
        }

        .research-container {
          display: grid;
          gap: 3rem;
          margin-top: 2rem;
        }

        .research-category {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 2.5rem;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }

        .research-category:hover {
          transform: translateY(-2px);
          border-color: rgba(255, 255, 255, 0.2);
          background: rgba(255, 255, 255, 0.04);
        }

        .category-title {
          display: flex;
          align-items: center;
          gap: 1rem;
          font-size: 1.75rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 2rem;
          text-align: center;
          justify-content: center;
          position: relative;
        }

        .category-icon {
          font-size: 2rem;
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
        }

        .category-title::after {
          content: '';
          position: absolute;
          bottom: -12px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 3px;
          background: linear-gradient(90deg, #667eea, #764ba2);
          border-radius: 3px;
        }

        .research-grid {
          display: grid;
          gap: 1.5rem;
        }

        .research-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 2rem;
          transition: all 0.4s ease;
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }

        .research-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.08), transparent);
          transition: left 0.6s ease;
        }

        .research-card:hover::before {
          left: 100%;
        }

        .research-card:hover {
          transform: translateY(-4px);
          border-color: rgba(255, 255, 255, 0.25);
          background: rgba(255, 255, 255, 0.08);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
        }

        .research-card.expanded {
          border-color: rgba(255, 255, 255, 0.3);
          background: rgba(255, 255, 255, 0.1);
        }

        .card-header {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .card-icon {
          font-size: 2.5rem;
          flex-shrink: 0;
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
        }

        .card-title-section {
          flex: 1;
        }

        .card-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 0.75rem;
          line-height: 1.4;
        }

        .card-meta {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .status-badge {
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 500;
          border: 1px solid;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .expected-date {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.9rem;
          font-weight: 500;
        }

        .card-venue {
          margin-bottom: 1rem;
        }

        .venue {
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.95rem;
          font-weight: 500;
        }

        .card-description {
          margin-bottom: 1.5rem;
          max-height: 3.6rem;
          overflow: hidden;
          transition: max-height 0.4s ease;
        }

        .card-description.expanded {
          max-height: 200px;
        }

        .card-description p {
          color: rgba(255, 255, 255, 0.85);
          line-height: 1.6;
          margin: 0;
        }

        .card-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .tag {
          background: rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.9);
          padding: 0.4rem 0.8rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 500;
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: all 0.3s ease;
        }

        .tag:hover {
          background: rgba(255, 255, 255, 0.15);
          transform: translateY(-1px);
        }

        .expand-indicator {
          display: flex;
          justify-content: center;
          margin-top: 1rem;
        }

        .expand-icon {
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.8rem;
          transition: transform 0.3s ease;
        }

        .expand-icon.rotated {
          transform: rotate(180deg);
        }

        @media (max-width: 768px) {
          .research-category {
            padding: 1.5rem;
          }
          
          .card-header {
            flex-direction: column;
            gap: 0.75rem;
          }
          
          .card-icon {
            font-size: 2rem;
            align-self: center;
          }
          
          .card-title {
            font-size: 1.1rem;
            text-align: center;
          }
          
          .card-meta {
            justify-content: center;
          }
          
          .category-title {
            font-size: 1.5rem;
            flex-direction: column;
            gap: 0.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default ResearchPatents;