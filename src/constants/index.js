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
      name: "Block Certify",
      description:
        "I developed an NFT certification application that allows the admin to issue certs to hackathon winners, students, and many other use cases.",
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
        "Developed a ChatGPT-like Ruby on Rails application powered by Ollama, featuring user authentication with Devise, code rendering with Markdown, and image recognition capabilities. Leveraged Redis and Sidekiq for multithreading, enabling efficient background job processing and improved application performance.",
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
        "Took charge of the cloud solution for the automation of an outdated system at Assurant, Inc.",
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
        "Developed a full stack application to optimize the access to mobile apps meta-data, life cycle status, and versions.",
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
        " Developed an application with three layers:GUI, BusinessLogic, and Database Implemented user features such as account creation, login, searching for flights, booking flights, and retrieving forgotten passwords.",
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
    {
      name: "Informational Website for Students",
      description:
        "An informative website that goes over the Computer Information Systems at Georgia State University.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "HTML",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: cisapp,
      source_code_link: "https://github.com/Mr-GR/CIS-App-Dev",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };