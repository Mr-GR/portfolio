import {
    ruby,
    java,
    python,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    assurant,
    itron,
    MarineCorps,
    assurantlogo,
    airline,
    azure,
    cisapp,
    GenAISuite,
    blockcertify,
    aiagents,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "contact",
    },
  ];
  
  const services = [
    {
      title: "Backend Software Engineer",
      icon: web,
    },
    {
      title: "Machine Learning Engineer",
      icon: backend,
    },
    {
      title: "AI Engineer",
      icon: creator
    }
  ];
  
  const technologies = [
    {
      name: "Ruby",
      icon: ruby,
    },
    {
      name: "Python",
      icon: python, 
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
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Associate Software Engineer", 
      company_name: "Assurant Inc",
      icon: assurant,
      iconBg: "#383E56",
      date: "September 2024 – Present",
      points: [
        "Modernized and stabilized core mobile applications by upgrading React Native versions, reducing technical debt and improving overall app reliability.",
        "Enhanced organizational stakeholder value by contributing to a production-scale project projected to generate over $5M in annual revenue.",
        "Configured and optimized mobile applications tailored to client needs, delivering smoother user experiences and performance improvements.",
        "Deployed static web pages using Amazon S3 and CloudFront, boosting delivery efficiency and reducing page load times.",
        "Designed, configured, and maintained backend services using Ruby and server-side frameworks, ensuring seamless client integration and uptime.",
        "Debugged and secured codebases, removing 300+ critical vulnerabilities through comprehensive Fortify scans and remediation workflows.",
        "Refined frontend components and user interfaces, ensuring pixel-perfect alignment and consistent client-side functionality across devices.",
        "Developed and maintained client-specific landing pages to improve engagement and align with brand requirements and KPIs.",
      ],
    },
    {
      title: "Software Engineer Intern", 
      company_name: "Assurant Inc",
      icon: assurant,
      iconBg: "#383E56",
      date: "May 2024 – September 2024",
      points: [
        "Spearheaded the development of robust backend systems using Ruby on Rails, enhancing the efficiency and scalability of internal applications.",
        "Engineered dynamic and responsive front-end interfaces with React, improving user experience and engagement.",
        "Successfully integrated iOS and Google Play APIs, enabling seamless data exchange and enhancing application functionality.",
        "Led the Dockerization of the application, creating and managing Docker images and containers to streamline the deployment process and ensure consistent environments across development, testing, and production.",
        "Implemented best practices in version control using GitHub, facilitating smooth collaboration and code management.",
      ],
    },
    {
      title: "Data Center Technicain",
      company_name: "Itron",
      icon: itron,
      iconBg: "#E6DEDD",
      date: "September 2021 - January 2022",
      points: [
        "Installed more than 24 Power Distribution Units (PDU).",
        "Maintained over 60 servers (Utimaco, HSM Crypto Server, Palo Alto Servers, and Dell servers).",
        "Managed fiber optic connections, cat6 connections, and how to properly connect network devices.",
        "Ensured the Data Center was properly cleaned and organized.",
        "Configured over 60 servers, storage devices, and Firewalls.",
      ],
    },
    {
      title: "Administrative Assistant",
      company_name: "United States Marine Crops",
      icon: MarineCorps,
      iconBg: "#383E56",
      date: "October 2017 - July 2021",
      points: [
        "Scheduled Training for the Commanding Officer in charge of more than 300 Marines.",
        "Managed daily correspondence for senior supervisors.",
        "Coordinated training events for more than 300 Marines.",
        "Input training data into Marine Corp Training Information Management System for more than 300 Marines.",
        "Performed high speaking ability, high proficiency in presenting to senior supervisors, and strong communication skills.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
        {
      name: "Help Desk AI Agent RAG",
      description:
        "Built a help desk agent using RAG to answer support queries by retrieving relevant documentation from a vector database. Integrated product manuals as embeddings and implemented semantic search to match user questions with the most relevant content.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "RAG",
          color: "green-text-gradient",
        },
        {
          name: "AI",
          color: "pink-text-gradient",
        },
        {
          name: "Orchestration",
          color: "blue-text-gradient"
        },
      ],
      image: aiagents,
      source_code_link: "https://www.youtube.com/watch?v=Xj-khFaZy2A&t=33s",
    },
    {
      name: "Block Certify",
      description:
        "Built an NFT certification platform using ERC-721 tokens and Next.js. Implemented admin functionality to mint and distribute digital certificates for hackathons and educational programs.",
      tags: [
        {
          name: "Next.js",
          color: "blue-text-gradient",
        },
        {
          name: "ERC-721",
          color: "green-text-gradient",
        },
        {
          name: "Smart Contract",
          color: "pink-text-gradient",
        },
        {
          name: "Full-Stack-Project",
          color: "blue-text-gradient",
        },
      ],
      image: blockcertify,
      source_code_link: "https://blockcertify.io/",
    },
    {
      name: "GenAI Suite",
      description:
        "Built a ChatGPT-like application using Ruby on Rails and Ollama for local LLM inference. Implemented user authentication with Devise, Markdown rendering for code blocks, and image recognition. Used Redis and Sidekiq to handle background job processing for LLM requests.",
      tags: [
        {
          name: "Ruby on Rails",
          color: "blue-text-gradient",
        },
        {
          name: "LLMS",
          color: "green-text-gradient",
        },
        {
          name: "Generative AI",
          color: "pink-text-gradient",
        },
        {
          name: "Full-Stack-Project",
          color: "blue-text-gradient",
        },
      ],
      image: GenAISuite,
      source_code_link: "https://github.com/Mr-GR/GenAISuite",
    },
    {
      name: "Automation Cloud Solution",
      description:
        "Contributed to the cloud migration of a legacy automation system at Assurant using Azure services. Built a React-based interface to manage and monitor automated workflows.",
      tags: [
        {
          name: "Azure",
          color: "blue-text-gradient",
        },
        {
          name: "React",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: azure,
      source_code_link: "https://github.com/Mr-GR",
    },
    {
      name: "Application Dashboard",
      description:
        "Built a full-stack dashboard to track mobile app metadata, lifecycle status, and version information. Developed REST APIs with Ruby and a React frontend to streamline app management workflows.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "ruby",
          color: "green-text-gradient",
        },
        {
          name: "APIs",
          color: "pink-text-gradient",
        },
      ],
      image: assurantlogo,
      source_code_link: "https://github.com/Mr-GR",
    },
    {
      name: "Airline Mangement Application",
      description:
        "Built a three-tier airline management system with Java Swing GUI, business logic layer, and Azure Cosmos DB integration. Implemented user authentication, flight search, booking functionality, and password recovery.",
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "Azure Cosomo DB",
          color: "green-text-gradient",
        },
        {
          name: "GUI",
          color: "pink-text-gradient",
        },
      ],
      image: airline,
      source_code_link: "https://github.com/Mr-GR/ProjectApplication",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };