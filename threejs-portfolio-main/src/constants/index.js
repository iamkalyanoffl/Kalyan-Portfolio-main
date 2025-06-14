export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Skills',
    href: '#skill',
  },
  {
    id: 4,
    name: 'Projects',
    href: '#projects', 
  },
  {
    id: 5,
    name: 'Experience',
    href: '#work', 
  },
  {
    id: 6,
    name: 'Education',
    href: '#education',
  },
  {
    id: 7,
    name: 'Research',
    href: '#research',
  },
  {
    id: 8, 
    name: 'Contact',
    href: '#contact',
  },
];



export const myProjects = [
  {
    title: 'CropCore Tech',
    desc: 'Our project focuses on transforming the agriculture industry by equipping farmers with technology to address key challenges such as unpredictable weather, volatile market prices, and crop health management and going by the slogan "Farming Right, Profits in Sight".',
    subdesc:
      'Our solution offers real-time monitoring of key farm metrics like temperature, humidity, soil moisture, and NPK levels. It features AI-powered weed and disease detection using YOLOv8 and CNN models, smart irrigation automation, and a live market price tracker. Farmers benefit from an integrated chatbot, community platform, and a virtual marketplace for direct sales. Additionally, real-time cold storage tracking enhances post-harvest management.',
    href: 'https://github.com/mithilgirish/Crop-Core_Tech',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'Python',
        path: '/assets/python-logo-only.png',
      },
      {
        id: 2,
        name: 'Cython',
        path: 'assets/cython-svgrepo-com.svg',
      },
      {
        id: 3,
        name: 'C',
        path: '/assets/c-1.svg',
      },
      {
        id: 4,
        name: 'XSLT',
        path: '/assets/svg_377770.svg',
      },
    ],
  },
  {
    title: 'Parallel Gaussian Blur Project Using OpenMP',
    desc: 'Parallel programming is essential in modern computing for performance improvements. OpenMP is one of the most widely used frameworks for parallel programming. This project discusses the parallelization of Gaussian Blur Algorithm using OpenMP.',
    subdesc:
      'Gaussian Blur is a convolution image processing technique used as a preprocessing stage of many computer vision algorithms used for smoothing an image by blending pixel values based on a Gaussian function, thus effectively reducing noise and detail.',
    href: 'https://github.com/iamkalyanoffl/Parallel-Gaussian-Blur-with-OpenMP-',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'C++',
        path: '/assets/c.svg',
      },
      
    ],
  },
  {
    title: 'Carlo Rino Shopping website',
    desc: 'Redesigned the Carlo Rino online shopping platform as part of a UX/UI competition, focusing on delivering a seamless, AI-powered, and immersive shopping experience that reflects the brand’s elegance and modernity.',
    subdesc:
      'We redesigned the Carlo Rino e-commerce experience to be intelligent, interactive, and user-centric. Key features include localized currency display, a rewarding loyalty system, and AI-powered tools like image-based search and personalized product recommendations. Users can enjoy virtual try-ons, product customization, and virtual styling appointments for a premium shopping journey. Enhancements such as NFC-based product authenticity, chatbot assistance, and an engaging "About Us" timeline ensure trust, convenience, and deeper brand connection.',
    href: 'https://www.figma.com/design/FVWuV1o2OeEmWYlQkACDSx/Carlo-Rino-Mockups-?node-id=0-1&t=PxeSEcUupgYqAJp6-1',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'Figma',
        path: '/assets/figma.svg',
      },
      
    ],
  },
  {
    title: 'Member-Recognition-Using-RFID-Sensor',
    desc: 'Led a team of 4 people to build a member recognition project using RFID Sensor for Technovit . Our project reads the Unique ID of each RFID tag we place close to the reader and displays it on the attached OLED display. If the UID of the tag is equal to a predefined value stored in the Arduino’s memory, then “Already a Member” message is displayed on the OLED. If the UID of the card does not match the stored value, it displays the QR code of our club Instagram page so that students can get access to valuable information.',
    subdesc:
      'The hardware setup for the project included an Arduino Uno microcontroller as the core processing unit, along with an RFID Reader to scan tag IDs. An OLED Display was used to show messages based on user identification. Components like jump wires, a breadboard, and RFID tags/cards were used for seamless circuit connectivity and interaction. This combination enabled a compact and efficient member recognition system.',
    href: 'https://github.com/iamkalyanoffl/Member-Recognition-Using-RFID-Sensor',
    texture: '/textures/project/project4.mp4',
    logo: '/assets/project-logo4.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'C++',
        path: '/assets/c.svg',
      },
      
    ],
  },
  {
    title: 'Automatic-Water-Level-Controller',
    desc: 'Led a team of 10 people to build a project based on water level control system. Water management is a critical facet of modern agricultural and domestic practices, necessitating efficient and automated systems for monitoring and controlling water levels. The Automatic Water Level Controller serves as a practical and efficient system designed to monitor and regulate water levels within a container.',
    subdesc:
      'The objective of this project is to design an Automatic Water Level Control System without relying on ultrasonic sensors, using Arduino for efficient water level monitoring. It features an LED indicator to provide clear visual feedback on water levels. The primary aim is to develop a reliable and cost-effective solution suitable for basic water management needs. Additionally, the system functionality can be extended by integrating an electrical relay to control a water pump, laying the groundwork for more advanced and automated water management applications.',
    href: 'https://github.com/iamkalyanoffl/Automatic-Water-Level-Controller',
    texture: '/textures/project/project5.mp4',
    logo: '/assets/project-logo5.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'C++',
        path: '/assets/c.svg',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'National Institute of Technology, Tiruchirappalli',
    pos: 'Summer Research Intern',
    duration: 'May 2025 - Present',
    title: "Currently working as a Research Intern under the guidance of Dr. C. Oswald at NIT Trichy, contributing to projects in Natural Language Processing (NLP) and Generative AI. My work involves leveraging Python, BERT, and other transformer-based models to build and fine-tune LLM Models for real-world institutional use cases.",
    icon: '/assets/nitt-removebg-preview.png',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'CSIR India',
    pos: 'Game Developer Intern',
    duration: 'Oct 2024 - Present',
    title: "Developed a game using HTML, CSS, JavaScript, learnt more about Blender,Unity and pygame .Led a team of 5 developers in this project.",
    icon: '/assets/CSIR-Logo-With-Tagline-Bilingual.svg',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Bionary Club VITC',
    pos: 'President',
    duration: 'Jan 2025 - Present',
    title: "Serving as the current President of the Club for the past 6 months, leading a vibrant community of over 250+ active members. Over the past two years, I have contributed extensively to the club's growth, initially as a Robotics and Automation Lead, where I spearheaded multiple technical projects and workshops. Under my leadership, the club has organized several hands-on workshops, inter-college hackathons, and automation challenges, significantly enhancing member engagement and technical exposure.",
    icon: '/assets/bionary-removebg-preview.png',
    animation: 'salute',
  },
  {
    id: 4,
    name: 'Reliance Foundation',
    pos: 'Reliance Undergrad Scholar',
    duration: 'Dec 2023 - Present',
    title: "Being one among 5000 UG Scholars in India is not just a number; it's a symbol of resilience, determination, and the belief in a brighter future.Coming from a humble family, this helping hand felt like a blessing in disguise .",
    icon: '/assets/image-removebg-preview (1).png',
    animation: 'salute',
  },
  {
    id: 5,
    name: 'International MUN',
    pos: 'Official Campus Ambassador',
    duration: 'Apr 2023 - Jun 2023',
    title: "Responsible for bringing in students towards IMUN and spreading awareness of the importance of MUN via social circles. Trained on delegation and focused on Central Asian studies and issues.",
    icon: '/assets/image-removebg-preview (2).png',
    animation: 'salute',
  }
];
