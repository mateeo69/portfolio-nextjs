import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Mail, Twitch,PackageOpen, Database, Computer, ToolCase, Workflow } from "lucide-react";

export const socialNetworks = [
    {
        id: 1,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/alejandro-mateo-aguilar-688aa1231/",
    },
    {
        id: 2,
        logo: <Twitch size={30} strokeWidth={1} />,
        src: "https://www.twitch.tv/maateo69",
    },
    {
        id: 3,
        logo: <Mail size={30} strokeWidth={1} />,
        src: "mailto:alemdev02@gmail.com",
    },
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/skills",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/projects",
    },
];

export const dataAboutPage = [
    {
        id: 1,
        title: "Fullstack Developer Intern",
        subtitle: "Enreach Labs",
        description: "Contributed as a Fullstack Developer leading the design, development, and deployment of a internal company project, integrating front-end and back-end technologies to deliver scalable and efficient solutions aligned with business objectives.",
        date: "Mar 2025 ",
    },
    {
        id: 2,
        title: "Booking Assistant",
        subtitle: "Tour10",
        description: "Worked as a Booking Agent, managing customer reservations, providing timely support, and coordinating with travel suppliers to ensure accurate bookings and smooth travel experiences.",
        date: "Jun 2023",
    },
    {
        id: 3,
        title: "Booking Assistant Intern",
        subtitle: "Tour10",
        description: "Completed an internship as a booking agent at a tour operator, managing reservations, providing customer support, and coordinating with suppliers to ensure seamless travel arrangements.",
        date: "Mar 2023",
    },
]

export const serviceData = [
    {
        icon: <Computer />,
        title: "Programming Languages",
        description: "Knowledge of Java, Python, PHP and Typescript with experience in developing software solutions using frameworks such as Spring, Symfony, Next.js, React and Node.js.",
    },
    {
        icon: <Database />,
        title: "Database management",
        description: "Experience working with various database management systems, including Oracle, MySQL, PostgreSQL and MongoDB.",
    },
    {
        icon: <PackageOpen />,
        title: "Containers and Orchestration",
        description: "Experience with containerization using Docker, including creating and managing containers, and working with Docker Compose",
    },
    {
        icon: <ToolCase />,
        title: "Development tools",
        description: "Experienced in using GitHub and Bitbucket for efficient code versioning, branch management, and collaborative software development within team environments.",
    },
    {
        icon: <Workflow />,
        title: "Workflows",
        description: "Experience working with Scrum prioritizing task, sprint planning and team meetings.",
    }
];

export const dataPortfolio = [
    {
        id: 1,
        title: "Symplex",
        image: "/symplex.png",
        urlGithub: "https://github.com/mateeo69/symplex-entorno-local"
    },
    {
        id: 2,
        title: "Cristaleria CyD",
        image: "/cristaleria.png",
        urlGithub: "https://github.com/mateeo69/aluminiosCyD",
    }
];