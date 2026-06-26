export const en = {
  nav: {
    about: "About",
    services: "Services",
    experience: "Experience",
    skills: "Skills",
    projects: "Projects",
    contact: "Contact",
  },
  hero: {
    greeting: "Hi, I'm",
    title: "Fullstack Dev",
    subtitle: "I build robust APIs, web systems, and solutions that actually work in production.",
    cta: "View projects",
    downloadCv: "Download CV",
    available: "Available for projects",
  },
  about: {
    title: "About me",
    badge: "// who I am",
    text1:
      "I'm a developer passionate about clean code and well-architected systems. I started on the back-end with C# and .NET, and expanded into the front-end world with React and Next.js, giving me a complete picture of what I build.",
    text2:
      "During my internship at BNE I worked with microservices in production, CI/CD pipelines on Azure DevOps, and legacy systems. That environment taught me to make technical decisions with real impact, not just in a test environment.",
    text3:
      "Outside of code, I enjoy hiking, soccer, and listening to a lot of music. I believe constant curiosity is what separates a dev who grows from one who just delivers.",
    facts: [
      { label: "Current focus", value: "React, Next.js & .NET" },
      { label: "Available for", value: "Freelance, Full-time & PJ" },
      { label: "English", value: "Technical reading" },
      { label: "Location", value: "Pinhais, PR – Brazil" },
    ],
  },
  services: {
    title: "What I do",
    badge: "// services",
    items: [
      {
        title: "RESTful APIs & Microservices",
        description: "Building robust APIs with C# and .NET, following DDD and Clean Architecture best practices.",
        icon: "Server",
      },
      {
        title: "Fullstack Web Systems",
        description: "From database to front-end. React and Next.js on the client, .NET or Node on the server.",
        icon: "Monitor",
      },
      {
        title: "Databases",
        description: "Modeling and optimization with SQL Server, PostgreSQL, and MongoDB. Migrations, queries and integrations.",
        icon: "Database",
      },
      {
        title: "Automations & Integrations",
        description: "Scripts, scheduled tasks, and system integrations via API or message brokers.",
        icon: "Zap",
      },
    ],
  },
  experience: {
    title: "Experience",
    badge: "// where I've worked",
    workLabel: "Work",
    educationTitle: "Education",
    certsTitle: "Courses & Certifications",
    items: [
      {
        company: "BNE",
        role: "Back-End Dev Intern",
        period: "May 2025 – Mar 2026",
        description: [
          "Developed functionality for persisting complex search parameters via JSON in SQL Server columns, reducing filter configuration time for recruiters.",
          "Created and maintained microservices in C# and .NET, ensuring efficient communication between interfaces and database.",
          "Worked with legacy systems, implementing tasks that increased integration stability.",
          "Used Azure DevOps for versioning, CI/CD pipelines, and deploying applications to production.",
        ],
        tags: ["C#", ".NET", "SQL Server", "Azure DevOps", "Microservices"],
      },
    ],
    education: [
      {
        institution: "Estácio",
        course: "Technology Degree in Systems Analysis and Development",
        period: "2025 – 2027",
        note: "Currently in the 3rd semester",
      },
    ],
    certs: [
      { name: "SQL Database", issuer: "Senac" },
      { name: "Clean Architecture with .NET", issuer: "Balta.io" },
      { name: "JavaScript & TypeScript", issuer: "Luiz Otávio Miranda – Udemy" },
    ],
  },
  skills: {
    title: "Skills",
    badge: "// tech stack",
    categories: [
      { name: "Languages", skills: ["C#", "Java", "SQL", "TypeScript"] },
      {
        name: "Frameworks",
        skills: ["ASP.NET Core", ".NET", "Blazor", "Razor Pages", "Entity Framework", "React", "Next.js"],
      },
      { name: "Databases", skills: ["SQL Server", "PostgreSQL", "MongoDB"] },
      { name: "Architecture", skills: ["MVC", "DDD", "Microservices", "RESTful API", "Clean Architecture"] },
      { name: "Tools", skills: ["Git", "Azure DevOps", "Scrum", "Design Patterns"] },
    ],
  },
  projects: {
    title: "Projects",
    badge: "// what I've built",
    githubCta: "View on GitHub",
    demoCta: "Live demo",
    wipLabel: "Coming soon",
  },
  learning: {
    title: "Currently learning",
    badge: "// in progress",
    subtitle: "Technologies and concepts I'm exploring right now",
    items: [
      { name: "React", progress: 35, description: "Components, hooks, state management and advanced patterns" },
      { name: "Next.js 16", progress: 25, description: "App Router, Server Components and Vercel deployment" },
      { name: "TypeScript", progress: 45, description: "Advanced typing, generics and best practices" },
      { name: "Clean Architecture (.NET)", progress: 55, description: "Deepening into DDD and separation of concerns" },
    ],
  },
  contact: {
    title: "Let's talk",
    badge: "// contact",
    subtitle: "Have a project, an idea, or just want to chat? Send me a message.",
    namePlaceholder: "Your name",
    nameLabel: "Name",
    messagePlaceholder: "Hi Paulo! I have an interesting project for you...",
    messageLabel: "Message",
    sendBtn: "Send on WhatsApp",
    emailBtn: "Send by e-mail",
    terminalTitle: "whatsapp-preview",
    terminalPrompt: "send-message --via whatsapp",
    terminalEmpty: "Fill in the form to see the preview...",
    previewHeader: "Message via Portfolio",
    fromLabel: "From",
  },
  footer: {
    tagline: "Building web solutions focused on quality, performance and clean code.",
    nav: "Navigation",
    social: "Social",
    contactTitle: "Contact",
    email: "paulohpereira@outlook.com.br",
    location: "Pinhais, PR — Brazil",
    available: "Open to opportunities",
    rights: "© 2026 Paulo Henrique Pereira. All rights reserved.",
    made: "Built with Next.js & Tailwind CSS",
  },
};
