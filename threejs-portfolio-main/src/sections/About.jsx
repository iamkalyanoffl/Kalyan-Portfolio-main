import { useState, useEffect, useRef } from 'react';
import Globe from 'react-globe.gl';

const Button = ({ name, isBeam, containerClass, onClick }) => {
  return (
    <button
      className={`btn ${containerClass}`}
      onClick={onClick}
    >
      {isBeam && (
        <span className="relative flex h-3 w-3">
          <span className="btn-ping"></span>
          <span className="btn-ping_dot"></span>
        </span>
      )}
      {name}
    </button>
  );
};

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);
  const [visibleCards, setVisibleCards] = useState(new Set());
  const [headingVisible, setHeadingVisible] = useState(false);
  const cardRefs = useRef([]);
  const headingRef = useRef(null);
  const email = 'kalyancr72005@gmail.com';

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  const handleResumeClick = () => {
    
    const resumeUrl = '/assets/resume.pdf';
    window.open(resumeUrl, '_blank');
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardIndex = parseInt(entry.target.dataset.cardIndex);
            setVisibleCards(prev => new Set([...prev, cardIndex]));
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHeadingVisible(true);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    return () => observer.disconnect();
  }, []);
  const thingsIDo = [
    {
      title: "Full Stack Development",
      description: "I build dynamic, full-stack web applications using modern frameworks like Next.js, React.js, Node.js, and Flask. I handle both frontend and backend development, integrating robust databases such as MySQL and PostgreSQL, and working with back-end frameworks like Express.js, Flask, and Django.",
      icon: "💻",
      gradient: "from-blue-500 via-purple-500 to-pink-500"
    },
    {
      title: "Competitive Programming",
      description: "Actively enhancing my problem-solving skills and mastering Data Structures & Algorithms through regular practice on platforms like LeetCode, CodeChef, and Codeforces. I enjoy tackling complex algorithmic challenges and writing optimized, efficient code.",
      icon: "🧮",
      gradient: "from-green-500 via-teal-500 to-cyan-500"
    },
    {
      title: "AI & Machine Learning",
      description: "Working extensively with Python, TensorFlow, Keras, and PyTorch, I explore the depths of Machine Learning and Deep Learning — with a strong focus on Natural Language Processing, Generative AI, and Retrieval-Augmented Generation (RAG). My work spans applied mathematics, statistics, data visualization, and building intelligent systems that solve real-world problems.",
      icon: "🤖",
      gradient: "from-orange-500 via-red-500 to-pink-500"
    },
    {
      title: "Research",
      description: "Authored a research paper titled 'The Ethical Considerations of Human Genetic Engineering', exploring the societal impacts and ethical frameworks surrounding genetic interventions. Presented my work at the prestigious IEEE Conference on Remote Sensing, where I discussed 'Enhancing Infectious Disease Tracking with Remote Sensing and SEIR Modeling'. Currently exploring advanced domains such as Deep Learning, Quantum Computing, and Quantum Machine Learning.",
      icon: "📚",
      gradient: "from-purple-500 via-indigo-500 to-blue-500"
    },
    {
      title: "Robotics",
      description: "I work on robotics and embedded systems using Arduino, EV3, microcontrollers, and microprocessors like Raspberry Pi and ARM Cortex. I focus on automation, real-time control, and integrating sensors and actuators for intelligent system design",
      icon: "🤖",
      gradient: "from-yellow-500 via-orange-500 to-red-500"
    },
    {
      title: "Health & Lifestyle",
      description: "Traveling and experiencing different cultures has helped me broaden my perspective and pick up new languages along the way. A passionate sports enthusiast, I've played badminton, football, and tennis professionally, and I continue to enjoy watching football, Formula 1, and basketball. As a cinema enthusiast, I love exploring diverse genres and analyzing cinematic techniques. I find that storytelling and creativity in film often spark innovative thinking in my technical and design projects.",
      icon: "🎨",
      gradient: "from-pink-500 via-rose-500 to-red-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
      </div>

      <style jsx>{`
        .btn {
          @apply bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg;
        }
        
        .btn-ping {
          @apply absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75 animate-ping;
        }
        
        .btn-ping_dot {
          @apply relative inline-flex rounded-full h-3 w-3 bg-blue-500;
        }
        
        .c-space {
          @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
        }
        
        .grid-container {
          @apply bg-gray-900 rounded-3xl p-8 border border-gray-800 hover:border-gray-700 transition-all duration-300;
        }
        
        .grid-headtext {
          @apply text-2xl font-bold text-white mb-4;
        }
        
        .grid-subtext {
          @apply text-gray-300 leading-relaxed;
        }
        
        .copy-container {
          @apply flex items-center justify-center gap-3 p-4 bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-700 transition-all duration-300;
        }
        
        .text-gray_gradient {
          @apply bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent;
        }
        
        .things-section-container {
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(30px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 32px;
          padding: 48px;
          position: relative;
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.4);
        }
        
        .things-section-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, 
            rgba(255, 255, 255, 0.1) 0%, 
            rgba(255, 255, 255, 0.05) 50%, 
            rgba(255, 255, 255, 0.1) 100%);
          opacity: 0.5;
          pointer-events: none;
        }
        
        .animated-heading {
          font-size: 2.8rem;
          font-weight: 700;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
          background-size: 200% 200%;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 16px;
          opacity: 0;
          transform: translateY(30px) scale(0.9);
          transition: all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          animation: gradientShift 4s ease-in-out infinite;
          position: relative;
        }
        
        .animated-heading.visible {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
        
        .animated-heading::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 50%;
          transform: translateX(-50%) scaleX(0);
          width: 100px;
          height: 3px;
          background: linear-gradient(90deg, #667eea, #764ba2, #f093fb);
          border-radius: 2px;
          transition: transform 0.8s ease;
        }
        
        .animated-heading.visible::after {
          transform: translateX(-50%) scaleX(1);
        }
        
        @keyframes gradientShift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        .section-subtitle {
          color: rgba(255, 255, 255, 0.7);
          max-width: 32rem;
          margin: 0 auto;
          font-size: 1.1rem;
          line-height: 1.6;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s ease 0.3s;
        }
        
        .section-subtitle.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .things-card {
          background: rgba(255, 255, 255, 0.04);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          padding: 28px;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
          overflow: hidden;
          transform: translateY(40px);
          opacity: 0;
          z-index: 1;
        }
        
        .things-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: var(--gradient);
          opacity: 0;
          transition: opacity 0.4s ease;
          border-radius: 24px;
          z-index: -1;
        }
        
        .things-card:hover::before {
          opacity: 0.12;
        }
        
        .things-card:hover {
          transform: translateY(-12px) scale(1.03);
          border-color: rgba(255, 255, 255, 0.25);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.4);
        }
        
        .things-card.visible {
          transform: translateY(0);
          opacity: 1;
        }
        
        .things-card-content {
          position: relative;
          z-index: 2;
        }
        
        .things-icon {
          font-size: 2.8rem;
          margin-bottom: 20px;
          display: inline-block;
          filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.4));
          transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        
        .things-card:hover .things-icon {
          transform: scale(1.15) rotate(8deg);
        }
        
        .things-title {
          font-size: 1.3rem;
          font-weight: 600;
          color: white;
          margin-bottom: 16px;
          background: linear-gradient(135deg, #ffffff 0%, #e0e7ff 100%);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          transition: all 0.3s ease;
        }
        
        .things-card:hover .things-title {
          background: linear-gradient(135deg, #ffffff 0%, #f0f9ff 100%);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .things-description {
          color: rgba(255, 255, 255, 0.85);
          line-height: 1.7;
          font-size: 0.95rem;
        }

        .things-grid .things-card:nth-child(1) { transition-delay: 0.1s; }
        .things-grid .things-card:nth-child(2) { transition-delay: 0.2s; }
        .things-grid .things-card:nth-child(3) { transition-delay: 0.3s; }
        .things-grid .things-card:nth-child(4) { transition-delay: 0.4s; }
        .things-grid .things-card:nth-child(5) { transition-delay: 0.5s; }
        .things-grid .things-card:nth-child(6) { transition-delay: 0.6s; }

        @media (max-width: 768px) {
          .things-section-container {
            padding: 32px 24px;
          }
          
          .things-card {
            padding: 24px;
          }
          
          .animated-heading {
            font-size: 2.2rem;
          }
          
          .things-icon {
            font-size: 2.2rem;
          }
          
          .things-title {
            font-size: 1.2rem;
          }
        }
      `}</style>

      <section className="c-space my-20" id="about">
        <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-6 h-full">
          <div className="col-span-1 xl:row-span-3">
            <div 
              className={`grid-container ${visibleCards.has(0) ? 'visible' : ''}`}
              ref={el => cardRefs.current[0] = el}
              data-card-index="0"
            >
              <img src="assets/img.jpg" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

              <div>
                <p className="grid-headtext">Hi, I'm Kalyan</p>
                <p className="grid-subtext">
                  Computer Science and Engineering student at VIT Chennai with a passion for creating innovative 
                  solutions through code. I love exploring new technologies and building impactful projects.
                </p>
                <Button 
                  name="View Resume" 
                  isBeam 
                  containerClass="w-full mt-6" 
                  onClick={handleResumeClick}
                />
              </div>
            </div>
          </div>

          <div className="col-span-1 xl:row-span-3">
            <div 
              className={`grid-container ${visibleCards.has(1) ? 'visible' : ''}`}
              ref={el => cardRefs.current[1] = el}
              data-card-index="1"
            >
              <img src="assets/framer.svg" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

              <div>
                <p className="grid-headtext">Tech Stack</p>
                <p className="grid-subtext">
                  I specialize in modern web technologies, mobile development, and emerging tech stacks that 
                  enable me to build robust and scalable applications.
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-1 xl:row-span-4">
            <div 
              className={`grid-container ${visibleCards.has(2) ? 'visible' : ''}`}
              ref={el => cardRefs.current[2] = el}
              data-card-index="2"
            >
              <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                <Globe
                  height={326}
                  width={326}
                  backgroundColor="rgba(0, 0, 0, 0)"
                  backgroundImageOpacity={0.5}
                  showAtmosphere
                  showGraticules
                  globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                  bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                  labelsData={[{ lat: 12.9716, lng: 77.5946, text: 'Chennai, India', color: 'white', size: 15 }]}
                />
              </div>
              <div>
                <p className="grid-headtext">I'm flexible with time zones & remote collaborations</p>
                <p className="grid-subtext">I'm based in Chennai, India and open to remote opportunities worldwide.</p>
                <a href="#contact"><Button name="Contact Me" isBeam containerClass="w-full mt-10"  /></a>
              </div>
            </div>
          </div>

          <div className="xl:col-span-2 xl:row-span-3">
            <div 
              className={`grid-container ${visibleCards.has(3) ? 'visible' : ''}`}
              ref={el => cardRefs.current[3] = el}
              data-card-index="3"
            >
              <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

              <div>
                <p className="grid-headtext">My Passion for Coding</p>
                <p className="grid-subtext">
                  I love solving complex problems and building innovative solutions through code. Programming 
                  isn't just my field of study—it's my passion. I enjoy exploring cutting-edge technologies 
                  and continuously enhancing my skills.
                </p>
              </div>
            </div>
          </div>

          <div className="xl:col-span-1 xl:row-span-2">
            <div 
              className={`grid-container ${visibleCards.has(4) ? 'visible' : ''}`}
              ref={el => cardRefs.current[4] = el}
              data-card-index="4"
            >
              <img
                src="assets/grid4.png"
                alt="grid-4"
                className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
              />

              <div className="space-y-2">
                <p className="grid-subtext text-center">Contact me</p>
                <div className="copy-container" onClick={handleCopy}>
                  <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                  <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">{email}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Things I Do Section - Wrapped in Glassmorphism Container */}
        <div className="mt-32">
          <div className="things-section-container">
            <div className="text-center mb-16" ref={headingRef}>
              <h2 className={`animated-heading ${headingVisible ? 'visible' : ''}`}>
                Things I Do
              </h2>
              <p className={`section-subtitle ${headingVisible ? 'visible' : ''}`}>
                Here are some of the areas I'm passionate about and actively work on
              </p>
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 things-grid">
              {thingsIDo.map((item, index) => (
                <div 
                  key={index} 
                  className={`things-card ${visibleCards.has(index + 10) ? 'visible' : ''}`}
                  style={{ '--gradient': `linear-gradient(135deg, ${item.gradient.replace('from-', '').replace('via-', '').replace('to-', '').split(' ').join(', ')})` }}
                  ref={el => cardRefs.current[index + 10] = el}
                  data-card-index={index + 10}
                >
                  <div className="things-card-content">
                    <div className="things-icon">{item.icon}</div>
                    <h3 className="things-title">{item.title}</h3>
                    <p className="things-description">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;