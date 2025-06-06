import {
    javascript,
    typescript,
    c,
    cpp,
    java,
    python,
    r,
    csharp,
    aws,
    unity,
    html,
    restapi,
    css,
    reactjs,
    tailwind,
    nodejs,
    git,
    figma,
    docker,
    scikitlearn,
    pandas,
    postgresql,
    uf,
    threejs,
    scanner,
    casmm,
    wisp,
    check,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "experience",
      title: "Experience",
    },
    {
      id: "works",
      title: "Projects",
    },
    
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Systems Engineering",
      icon: check,
    },
    {
      title: "Software Development",
      icon: check,
    },
    {
      title: "Machine Learning",
      icon: check,
    },
    {
      title: "Game Development",
      icon: check,
    },
  ];
  
  const technologies = [
    {
      name: "C",
      icon: c,
    },
    {
      name: "C++",
      icon: cpp,
    },
    {
      name: "C#",
      icon: csharp,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "R",
      icon: r,
    },
    {
      name: "AWS",
      icon: aws,
    },
    {
      name: "Unity",
      icon: unity,
    },
    {
      name: "PostgreSQL",
      icon: postgresql,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Scikit-learn",
      icon: scikitlearn,
    },
    {
      name: "Pandas",
      icon: pandas,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "Rest APIs",
      icon: restapi,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Figma",
      icon: figma,
    },
    {
      name: "Docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Undergraduate Research Assistant",
      company_name: "University of Florida, INDIE Lab",
      icon: uf,
      iconBg: "#0e1e99",
      date: "May 2024 - August 2024",
      points: [
        "Assisted a VR research study investigating how deceptive changes in translational speed affect the user's psychological perception and motion sickness.",
        "Gained hands-on experience in executing research protocols, running studies independently, and managing participant data, while maintaining consistency across 26 experimental trials.",
        "Utilized R to analyze complex datasets, producing actionable insights and visualizations that highlighted statistically significant trends and informed final conclusions.",
        "Cultivated foundational knowledge of IRB protocols and ethical research standards in human participant research.",
      ],
    }
  ];
  
  const projects = [
    {
      name: "UFID Scanner Reader & Validation System",
      description:
        "A full-stack system designed to read and validate UFID cards using a NFC and magnetic stripe scanner. The application extracts UFID data, and verifies its authenticity against a database, ensuring secure and efficient identification that complies with the university's security standards.",
      tags: [
        {
          name: "Python",
          color: "brown-text-gradient",
        },
        {
          name: "Flask",
          color: "brown-text-gradient",
        },
        {
          name: "SQLite3",
          color: "brown-text-gradient",
        },
      ],
      image: scanner,
      source_code_link: "https://github.com/j-fangwu/ufid_reader",
    },
    {
      name: "CasMM Student Dashboard",
      description:
        "A locally deployed, full-stack web application designed for parents and students to manage their academic progress. It features a user-friendly interface for tracking grades, assignments, and attendance, with secure authentication and data storage.",
      tags: [
        {
          name: "React",
          color: "brown-text-gradient",
        },
        {
          name: "Strapi",
          color: "brown-text-gradient",
        },
        {
          name: "PostgreSQL",
          color: "brown-text-gradient",
        },
      ],
      image: casmm,
      source_code_link: "https://github.com/j-fangwu/CasMM-Student-Dashboard",
    },
    {
      name: "Wisp: Echoes of the Afterlight",
      description:
        "Follow Wisp's journey through a mystical world, solving puzzles and uncovering secrets. This game combines captivating storytelling with immersive gameplay, allowing players to explore a beautifully crafted environment filled with challenges and mysteries.",
      tags: [
        {
          name: "C#",
          color: "brown-text-gradient",
        },
        {
          name: "Unity",
          color: "brown-text-gradient",
        },
        {
          name: "Git",
          color: "brown-text-gradient",
        },
      ],
      image: wisp,
      source_code_link: "https://github.com/j-fangwu/Wisp",
    },
  ];
  
  export { services, technologies, experiences, projects };