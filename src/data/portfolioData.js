export const portfolioData = {
  personal: {
    name: "Caio Barreto",
    nickname: "Caio",
    title: "Desenvolvedor Web | Estagiário em Tecnologia",
    roles: [
      "Desenvolvedor Web",
      "Estudante de ADS no Senac Recife (4º Período)",
      "Front-End, Back-End & IoT",
      "React, Node.js, SQL & ESP32"
    ],
    age: 19,
    location: "Recife - PE, Brasil",
    college: "Faculdade Senac Recife",
    course: "Análise e Desenvolvimento de Sistemas",
    period: "4º Período • Cursando",
    email: "caiobarretovalle269@outlook.com",
    phone: "(81) 9 8593-5093",
    whatsappClean: "5581985935093",
    linkedin: "https://linkedin.com/in/caio-barreto",
    linkedinUsername: "in/caio-barreto",
    github: "https://github.com/caiobcmv",
    githubUsername: "caiobcmv",
    bio: "Estudante de Análise e Desenvolvimento de Sistemas no 4º período da Faculdade Senac Recife, com 19 anos. Focado em desenvolvimento web moderno com React, JavaScript ES6+, back-end com Node.js e banco de dados relacional SQL, além de conhecimentos práticos em Internet das Coisas (IoT) com microcontroladores (ESP32/Arduino) e integração de sensores via APIs.",
    objective: "Conquistar uma oportunidade de estágio na área de Tecnologia da Informação (Desenvolvimento Web Front-End, Back-End, Full-Stack ou IoT), contribuindo com código limpo, aprendizado ágil e dedicação no dia a dia.",
    avatar: "/profile.jpg",
    resumePdf: "/curriculo-caio-barreto.pdf"
  },

  stats: [
    { label: "Formação", value: "4º Período", desc: "ADS • Faculdade Senac Recife", icon: "GraduationCap" },
    { label: "Idade / Local", value: "19 Anos", desc: "Recife, PE • Brasil", icon: "MapPin" },
    { label: "Especialidades", value: "Web & IoT", desc: "React, Node, SQL & ESP32", icon: "Cpu" },
    { label: "Disponibilidade", value: "Imediata", desc: "Para estágio presencial ou remoto", icon: "Zap" }
  ],

  skills: [
    // Front-End
    { name: "React", category: "frontend", level: 85, exp: "Componentes, hooks, gerenciamento de estado, Vite", iconKey: "react" },
    { name: "JavaScript ES6+", category: "frontend", level: 90, exp: "Manipulação de DOM, Fetch API, Promises, eventos", iconKey: "code" },
    { name: "HTML5 Semântico", category: "frontend", level: 95, exp: "Acessibilidade, SEO e estruturação limpa", iconKey: "layout" },
    { name: "CSS3 Moderno", category: "frontend", level: 92, exp: "Flexbox, CSS Grid, keyframes, responsividade", iconKey: "palette" },
    { name: "Design Responsivo", category: "frontend", level: 92, exp: "Layouts fluidos adaptados para desktop e mobile", iconKey: "monitor" },
    
    // Back-End
    { name: "Node.js", category: "backend", level: 82, exp: "Servidores, rotas REST e lógica de aplicação", iconKey: "server" },
    { name: "Express.js", category: "backend", level: 80, exp: "Criação de middlewares, rotas e APIs RESTful", iconKey: "cpu" },
    { name: "APIs REST", category: "backend", level: 85, exp: "Integração CRUD, requisições HTTP e payloads JSON", iconKey: "share2" },

    // IoT (Internet of Things)
    { name: "IoT (ESP32 / Arduino)", category: "iot", level: 80, exp: "Programação de microcontroladores e periféricos", iconKey: "cpu" },
    { name: "Sensores & Atuadores", category: "iot", level: 82, exp: "Leitura de sensores e controle de atuadores digitais", iconKey: "activity" },
    { name: "Telemetria & Integração", category: "iot", level: 78, exp: "Envio de dados de hardware para endpoints web e dashboards", iconKey: "radio" },

    // Banco de Dados
    { name: "MySQL", category: "database", level: 85, exp: "Bancos relacionais, chaves PK/FK e integridade referencial", iconKey: "database" },
    { name: "Queries SQL", category: "database", level: 88, exp: "SELECT, JOINs, Subqueries, DDL, DML e DQL", iconKey: "database" },
    { name: "Modelagem DER / MER", category: "database", level: 86, exp: "Diagrama Entidade-Relacionamento e normalização (3FN)", iconKey: "gitBranch" },

    // Ferramentas & Engenharia
    { name: "Git & GitHub", category: "tools", level: 88, exp: "Controle de versão, branches e repositórios", iconKey: "gitBranch" },
    { name: "VS Code", category: "tools", level: 95, exp: "Ambiente ágil de desenvolvimento e depuração", iconKey: "terminal" },
    { name: "Figma (Básico)", category: "tools", level: 75, exp: "Prototipagem e leitura de design systems", iconKey: "figma" }
  ],

  projects: [
    {
      id: "front-end-pi",
      name: "front-end-PI",
      title: "Projeto Integrador • Front-End",
      category: "frontend",
      badge: "JavaScript / Web",
      githubUrl: "https://github.com/caiobcmv/front-end-PI",
      description: "Interface web interativa desenvolvida para o Projeto Integrador na Faculdade Senac Recife, com foco em usabilidade, manipulação dinâmica de elementos e organização modular de código.",
      techs: ["JavaScript", "HTML5 Semântico", "CSS3", "DOM API"],
      language: "JavaScript"
    },
    {
      id: "pi-sistema",
      name: "PI",
      title: "Projeto Integrador • Sistema Principal",
      category: "frontend",
      badge: "Faculdade Senac",
      githubUrl: "https://github.com/caiobcmv/PI",
      description: "Repositório central do projeto acadêmico do Senac Recife, contendo as telas da aplicação, interações de formulários e estrutura de navegação entre funcionalidades.",
      techs: ["JavaScript", "CSS3", "Design Responsivo", "Git"],
      language: "JavaScript"
    },
    {
      id: "atividade-mobile",
      name: "atividade-mobile",
      title: "Aplicações Mobile • TypeScript",
      category: "tools",
      badge: "TypeScript / Mobile",
      githubUrl: "https://github.com/caiobcmv/atividade-mobile",
      description: "Desenvolvimento de interfaces e componentes mobile utilizando TypeScript, aplicando tipagem estática, interfaces e boas práticas de estruturação para dispositivos móveis.",
      techs: ["TypeScript", "Mobile Architecture", "ES6+"],
      language: "TypeScript"
    },
    {
      id: "boletim-academico",
      name: "boletim",
      title: "Sistema de Boletim & Notas",
      category: "frontend",
      badge: "Interface Web",
      githubUrl: "https://github.com/caiobcmv/boletim",
      description: "Aplicação prática desenvolvida em sala de aula para controle, cálculo de médias e visualização de boletim acadêmico com layout moderno e responsivo.",
      techs: ["CSS3 Flexbox", "HTML5", "Lógica em JS"],
      language: "CSS / JS"
    },
    {
      id: "iot-esp32-telemetria",
      name: "iot-telemetria",
      title: "Telemetria & Automação IoT",
      category: "iot",
      badge: "IoT / Hardware",
      githubUrl: "https://github.com/caiobcmv",
      description: "Estudos e implementação prática com placas ESP32 e microcontroladores: leitura de sensores analógicos/digitais, processamento local e comunicação com APIs web.",
      techs: ["ESP32", "Arduino C++", "Sensores", "REST / HTTP"],
      language: "C++ / IoT"
    }
  ],

  education: [
    {
      period: "2024 - Presente • 4º Período (Cursando)",
      institution: "Faculdade Senac Recife",
      title: "Análise e Desenvolvimento de Sistemas (ADS)",
      status: "4º Período",
      description: "Graduação superior tecnológica focada em engenharia de software, modelagem de banco de dados relacional, desenvolvimento web e integração de sistemas."
    },
    {
      period: "Estudos Práticos & Hardware",
      institution: "Desenvolvimento Contínuo",
      title: "Desenvolvimento Web Full-Stack & IoT",
      status: "Em evolução contínua",
      description: "Aprofundamento em React, Node.js, arquitetura de APIs REST, modelagem SQL (DER/MER) e projetos de automação/IoT com ESP32."
    }
  ],

  languages: [
    { name: "Português", level: "Nativo", desc: "Comunicação clara e objetiva" },
    { name: "Inglês", level: "Técnico / Básico", desc: "Leitura fluida de documentações técnicas e sintaxe de linguagens" }
  ]
};
