const navLinks = [
  {
    name: "Обо мне",
    link: "#work",
  },
  {
    name: "Обучение",
    link: "#experience",
  },
  {
    name: "Навыки",
    link: "#skills",
  },
];

const words = [
  { text: "Идеи", imgPath: "/images/ideas.svg" },
  { text: "Концепции", imgPath: "/images/concepts.svg" },
  { text: "Дизайн", imgPath: "/images/designs.svg" },
  { text: "Код", imgPath: "/images/code.svg" },
  { text: "Идеи", imgPath: "/images/ideas.svg" },
  { text: "Концепции", imgPath: "/images/concepts.svg" },
  { text: "Дизайн", imgPath: "/images/designs.svg" },
  { text: "Код", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 4, suffix: " Года", label: "Обучения" },
  { value: 100, suffix: "+", label: "Выполненных ЛР" },
  { value: 20, suffix: "+", label: "Изученных Дисциплин" },
  { value: 99, suffix: "%", label: "Успеваемости" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Качество прежде всего",
    desc: "Достигаю высококачественных результатов с вниманием к каждой детали.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Постоянная связь",
    desc: "Регулярно информирую о прогрессе, обеспечивая прозрачность процесса.",
  },
  {
    imgPath: "/images/time.png",
    title: "Соблюдение сроков",
    desc: "Проекты завершаются точно в срок с сохранением высокого качества.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "JavaScript",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Dev",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manage",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "Освоил основы программирования, математического анализа и физического моделирования. Научился применять математические методы для решения инженерных задач и использовать IT-инструменты для анализа данных. Получил прочную базу для углубления в разработку и компьютерную графику.",
    logoPath: "/images/counter_1.png",
    title: "Курс",
    date: "Сентябрь 2022 - Июль 2023",
    disciplines: [
      "Информатика и физика для инженеров",
      "Информационные технологии в математике и физике",
      "Математика для инженеров",
    ],
  },
  {
    review:
      "Освоил анализ данных и основы Data Science, включая методы обработки и визуализации информации. Изучил вычислительную математику для численного решения инженерных задач. Приобрел практические навыки проектирования и разработки современных веб-решений с использованием актуальных технологий.",
    logoPath: "/images/counter_2.png",
    title: "Курс",
    date: "Сентябрь 2023 - Июль 2024",
    disciplines: [
      "Анализ данных и основы Data science",
      "Вычислительная математика",
      "Проектирование и разработка веб-решений",
    ],
  },
  {
    review:
      "Изучил математические принципы компьютерной графики, включая алгоритмы рендеринга и 3D-моделирования. Освоил основы построения сетей и телекоммуникационных систем. Получил фундаментальные знания в области машинного обучения для анализа данных и создания интеллектуальных решений.",
    logoPath: "/images/counter_3.png",
    title: "Курс",
    date: "Сентябрь 2024 - Июль 2025",
    disciplines: [
      "Математические основы компьютерной графики",
      "Сети и телекоммуникации",
      "Основы машинного обучения",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
