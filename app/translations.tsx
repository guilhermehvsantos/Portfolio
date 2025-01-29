interface SectionIds {
  home: string;
  about: string;
  projects: string;
  contact: string;
}

interface Translations {
  name: string;
  nav: string[];
  sectionIds: SectionIds;
}
export const translations = {
  en: {
    name: "Guilherme Santos",
    nav: ["Home", "About", "Projects", "Contact"],
    sectionIds: ["home", "about", "projects", "contact"],
    hero: {
      title: "Welcome to my portfolio!",
      subtitle:
        "Here you will find a selection of my projects and experiences as a developer. Feel free to explore!",
      cta: "Get in Touch",
    },
    about: {
      title: "About Me",
      p1: "I'm a Systems Analysis and Development student, technology enthusiast, and passionate about software development. In this space, you will find a collection of my projects, where I put into practice everything I learn about Java, Spring, design patterns, MVC, software testing, databases, and much more. In addition, I always strive to stay updated and apply my knowledge in HTML, CSS, JavaScript, SQL, and React.",
      p2: "When I'm not developing, you can find me playing video games, trying new recipes, exercising, or learning something new.",
    },
    skills: ["Html", "Css", "Javascript", "Java", "SQL", "React", "Spring"],
    projects: {
      title: "Projects",
      subtitle:
        "All the projects here are part of my learning and evolution process in programming, starting from my first contact with programming logic, working with the triad of HTML, CSS, and JavaScript, then moving on to React and TypeScript in the frontend, and currently developing more robust projects focusing on Java/Spring",
      cta: "Learn More",
      projectsList: [
        {
          name: "Top Trumps",
          link: "https://github.com/guilhermehvsantos/Jojo-SuperTrunfo",
          description:
            "Card game based on the Jojo's anime using JS, HTML and CSS",
          image: "https://media.vgm.io/products/81/2618/2618-1594042212.png",
          try: "https://guilhermehvsantos.github.io/Jojo-SuperTrunfo/",
        },
        {
          name: "Pokedex",
          link: "https://github.com/guilhermehvsantos/Pokedex",
          description:
            "Pokedex using TypeScript and React working with Fetch API.",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/768px-Pok%C3%A9_Ball_icon.svg.png?20161023215848",
          try: "https://guilhermehvsantos.github.io/Pokedex/",
        },
        {
          name: "Event Master",
          link: "https://github.com/guilhermehvsantos/POO-2024-1-Equipe07",
          description:
            "Ticket management platform in Java using Swing and SQL.",
          image:
            "https://raw.githubusercontent.com/guilhermehvsantos/POO-2024-1-Equipe07/refs/heads/main/Cod/src/main/java/Assets/eventMaster.png",
          try: "https://github.com/guilhermehvsantos/POO-2024-1-Equipe07",
        },
        {
          name: "ADASPStock",
          link: "https://github.com/guilhermehvsantos/PI---SENAC-4-SEMESTRE",
          description:
            "Web platform for inventory management. Designed to streamline and organize the inflow and outflow of products.",
          image:
            "https://raw.githubusercontent.com/guilhermehvsantos/PI---SENAC-4-SEMESTRE/refs/heads/main/ADASPStock/src/main/resources/static/adasp.png",
          try: "https://www.youtube.com/watch?v=3NbT76TXASU",
        },
      ],
    },
    contact: {
      title: "Get in Touch",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send Message",
    },
    footer: "© 2024 Guilhermehvs. All rights reserved.",
  },
  pt: {
    name: "Guilherme Santos",
    nav: ["Início", "Sobre", "Projetos", "Contato"],
    sectionIds: ["home", "about", "projects", "contact"],
    hero: {
      title: "Bem-vindo ao meu portfólio!",
      subtitle:
        "Aqui você encontrará uma seleção dos meus projetos e experiências como desenvolvedor. Sinta-se à vontade para explorar!",
      cta: "Entre em Contato",
    },
    about: {
      title: "Sobre Mim",
      p1: "Estudante de Análise e Desenvolvimento de Sistemas, entusiasta da tecnologia e apaixonado por desenvolvimento de softwares. Neste espaço, você encontrará uma coleção dos meus projetos, onde coloco em prática tudo que aprendo sobre Java, Spring, design patterns, MVC, testes de software, banco de Dados e muito mais. Além disso procuro sempre me atualizar e colocar em praticar meu conhecimento em HTML, CSS, JavaScript, SQL e React.",
      p2: "Quando não estou desenvolvendo, você pode me encontrar jogando videogames, testando receitas novas, praticando exercícios ou aprendendo algo novo.",
    },
    skills: ["Html", "Css", "Javascript", "Java", "SQL", "React", "Spring"],
    projects: {
      title: "Projetos",
      subtitle:
        "Todos os projetos aqui fazem parte do meu processo de aprendizado e evolução na programação, desde o primeiro contato com lógica de programação, trabalhando com a tríade de HTML, CSS e Javascript, passando posteriormente para React a Typescript no frontend a atualmente desenvolvendo projetos mais robustos com foco em Java/Spring.",
      cta: "Saiba Mais",
      projectsList: [
        {
          name: "Super Trunfo",
          link: "https://github.com/guilhermehvsantos/Jojo-SuperTrunfo",
          description:
            "Jogo de cartas baseado no anime de Jojo utilizando JS, HTML e CSS",
          image: "https://media.vgm.io/products/81/2618/2618-1594042212.png",
          try: "https://guilhermehvsantos.github.io/Jojo-SuperTrunfo/",
        },
        {
          name: "Pokedex",
          link: "https://github.com/guilhermehvsantos/Pokedex",
          description:
            "Pokedex utilizando Typescript e React trabalhando com fetch API",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/768px-Pok%C3%A9_Ball_icon.svg.png?20161023215848",
          try: "https://guilhermehvsantos.github.io/Pokedex/",
        },
        {
          name: "Event Master",
          link: "https://github.com/guilhermehvsantos/POO-2024-1-Equipe07",
          description:
            "Plataforma de gerenciamento de ingressos em Java usando Swing e SQL",
          image:
            "https://raw.githubusercontent.com/guilhermehvsantos/POO-2024-1-Equipe07/refs/heads/main/Cod/src/main/java/Assets/eventMaster.png",
          try: "https://github.com/guilhermehvsantos/POO-2024-1-Equipe07",
        },
        {
          name: "ADASPStock",
          link: "https://github.com/guilhermehvsantos/PI---SENAC-4-SEMESTRE",
          description:
            "Plataforma web para gerenciamento de estoque. Projetada para facilitar e gerir de forma organizada a entrada e saída de produtos.",
          image:
            "https://raw.githubusercontent.com/guilhermehvsantos/PI---SENAC-4-SEMESTRE/refs/heads/main/ADASPStock/src/main/resources/static/adasp.png",
          try: "https://www.youtube.com/watch?v=3NbT76TXASU",
        },
      ],
    },
    contact: {
      title: "Entre em Contato",
      name: "Nome",
      email: "E-mail",
      message: "Mensagem",
      send: "Enviar Mensagem",
    },
    footer: "© 2024 Guilhermehvs. Todos os direitos reservados.",
  },
};
