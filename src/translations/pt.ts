export const pt = {
  nav: {
    about: "Sobre",
    services: "Serviços",
    experience: "Experiência",
    skills: "Habilidades",
    projects: "Projetos",
    contact: "Contato",
  },
  hero: {
    greeting: "Olá, eu sou",
    title: "Dev Fullstack",
    subtitle: "Construo APIs robustas, sistemas web e soluções que funcionam de verdade em produção.",
    cta: "Ver projetos",
    downloadCv: "Download CV",
    available: "Disponível para projetos",
  },
  about: {
    title: "Sobre mim",
    badge: "// quem sou eu",
    text1:
      "Sou um desenvolvedor apaixonado por código limpo e sistemas bem arquitetados. Comecei pelo back-end com C# e .NET, e fui expandindo pro universo do front-end com React e Next.js, o que me deu uma visão completa do que estou construindo.",
    text2:
      "No estágio na BNE trabalhei com microserviços em produção, pipelines CI/CD no Azure DevOps e sistemas legados. Esse ambiente me ensinou a tomar decisões técnicas com impacto real, não só em ambiente de testes.",
    text3:
      "Fora do código, gosto de trilhas, futebol e muita música. Acredito que curiosidade constante é o que separa um dev que cresce de um que só entrega.",
    facts: [
      { label: "Foco atual", value: "React, Next.js & .NET" },
      { label: "Disponível para", value: "Freelance, CLT & PJ" },
      { label: "Inglês", value: "Leitura técnica" },
    ],
  },
  services: {
    title: "O que eu faço",
    badge: "// serviços",
    items: [
      {
        title: "APIs RESTful & Microserviços",
        description: "Criação de APIs robustas com C# e .NET, seguindo boas práticas de DDD e Clean Architecture.",
        icon: "Server",
      },
      {
        title: "Sistemas Web Fullstack",
        description: "Do banco de dados ao front-end. React e Next.js no cliente, .NET ou Node no servidor.",
        icon: "Monitor",
      },
      {
        title: "Banco de Dados",
        description: "Modelagem e otimização com SQL Server, PostgreSQL e MongoDB. Migrations, queries e integrações.",
        icon: "Database",
      },
      {
        title: "Automações & Integrações",
        description: "Scripts, tarefas agendadas e integrações entre sistemas via API ou mensageria.",
        icon: "Zap",
      },
    ],
  },
  experience: {
    title: "Experiência",
    badge: "// onde trabalhei",
    workLabel: "Trabalho",
    educationTitle: "Formação",
    certsTitle: "Cursos & Certificações",
    items: [
      {
        company: "BNE",
        role: "Estagiário Dev. Back-End",
        period: "Mai 2025 – Mar 2026",
        description: [
          "Desenvolvi funcionalidade para persistência de parâmetros de busca complexos via JSON em colunas SQL Server, reduzindo o tempo de configuração de filtros por recrutadores.",
          "Criei e mantive microserviços em C# e .NET, garantindo comunicação eficiente entre interfaces e banco de dados.",
          "Trabalhei com sistemas legados, implementando tasks que aumentaram a estabilidade das integrações.",
          "Utilizei Azure DevOps para versionamento, execução de pipelines CI/CD e deploy em produção.",
        ],
        tags: ["C#", ".NET", "SQL Server", "Azure DevOps", "Microserviços"],
      },
    ],
    education: [
      {
        institution: "Estácio",
        course: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
        period: "2025 – 2027",
        note: "3º período em andamento",
      },
    ],
    certs: [
      { name: "Banco de Dados SQL", issuer: "Senac" },
      { name: "Arquitetura Limpa com .NET", issuer: "Balta.io" },
      { name: "JavaScript & TypeScript", issuer: "Luiz Otávio Miranda – Udemy" },
    ],
  },
  skills: {
    title: "Habilidades",
    badge: "// stack técnica",
    categories: [
      { name: "Linguagens", skills: ["C#", "Java", "SQL", "TypeScript"] },
      {
        name: "Frameworks",
        skills: ["ASP.NET Core", ".NET", "Blazor", "Razor Pages", "Entity Framework", "React", "Next.js"],
      },
      { name: "Banco de Dados", skills: ["SQL Server", "PostgreSQL", "MongoDB"] },
      { name: "Arquitetura", skills: ["MVC", "DDD", "Microserviços", "API RESTful", "Clean Architecture"] },
      { name: "Ferramentas", skills: ["Git", "Azure DevOps", "Scrum", "Design Patterns"] },
    ],
  },
  projects: {
    title: "Projetos",
    badge: "// o que construí",
    githubCta: "Ver no GitHub",
    demoCta: "Ver demo",
    wipLabel: "Em breve",
  },
  learning: {
    title: "Atualmente aprendendo",
    badge: "// em evolução",
    subtitle: "Tecnologias e conceitos que estou explorando agora",
    items: [
      { name: "React", progress: 35, description: "Componentes, hooks, estado e padrões avançados" },
      { name: "Next.js 16", progress: 25, description: "App Router, Server Components e deploy na Vercel" },
      { name: "TypeScript", progress: 45, description: "Tipagem avançada, generics e boas práticas" },
      { name: "Clean Architecture (.NET)", progress: 55, description: "Aprofundando DDD e separação de responsabilidades" },
    ],
  },
  contact: {
    title: "Vamos conversar",
    badge: "// contato",
    subtitle: "Tem um projeto, uma ideia ou quer bater um papo? Me manda uma mensagem.",
    namePlaceholder: "Seu nome",
    nameLabel: "Nome",
    messagePlaceholder: "Olá Paulo! Tenho um projeto interessante para você...",
    messageLabel: "Mensagem",
    sendBtn: "Enviar no WhatsApp",
    emailBtn: "Enviar por e-mail",
    terminalTitle: "whatsapp-preview",
    terminalPrompt: "send-message --via whatsapp",
    terminalEmpty: "Preencha o formulário para ver o preview...",
    previewHeader: "Mensagem via Portfolio",
    fromLabel: "De",
  },
  footer: {
    tagline: "Desenvolvendo soluções web com foco em qualidade, performance e código limpo.",
    nav: "Navegação",
    social: "Redes Sociais",
    contactTitle: "Contato",
    email: "paulohpereira@outlook.com.br",
    location: "Pinhais, PR — Brasil",
    available: "Aberto a oportunidades",
    rights: "© 2026 Paulo Henrique Pereira. Todos os direitos reservados.",
    made: "Feito com Next.js & Tailwind CSS",
  },
};
