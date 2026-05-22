export const profile = {
  name: "Titiwat Yutavisut",
  role: "Fullstack Developer",
  location: "Bangkok, Thailand",
  email: "titiwat.te06@gmail.com",
  github: "https://github.com",
  summary:
    "I build polished web applications from interface to database, with a calm visual style and clean engineering structure.",
};

export const stacks = [
  {
    name: "React",
    group: "Frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    name: "JavaScript",
    group: "Language",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  },
  {
    name: "TypeScript",
    group: "Language",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  },
  {
    name: "Python",
    group: "Language",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  },
  {
    name: "Next.js",
    group: "Framework",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Angular",
    group: "Framework",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg",
  },
  {
    name: "Node.js",
    group: "Runtime",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express",
    group: "Backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
  },
  {
    name: "NestJs",
    group: "Backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg",
  },
  {
    name: "PostgreSQL",
    group: "Database",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "MongoDB",
    group: "Database",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Prisma",
    group: "ORM",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg",
  },
  
  {
    name: "Tailwind CSS",
    group: "Styling",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Docker",
    group: "DevOps",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
  },
  {
    name: "Git",
    group: "Workflow",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  },
];

export const journey = [
  {
    title: "Thammasat University",
    subtitle: "Faculty of Sociology and Anthropology",
    detail: "Graduated with a social science background that supports research, communication, and understanding people.",
    type: "Education",
    icon: "graduation",
    logo: "https://www.google.com/s2/favicons?domain=tu.ac.th&sz=128",
    mark: "TU",
    tone: "honey",
  },
  {
    title: "Generation Thailand",
    subtitle: "Junior Software Developer Program",
    detail: "Joined a hands-on software development program focused on practical coding, teamwork, and career readiness.",
    type: "Program",
    icon: "code",
    logo: "https://www.google.com/s2/favicons?domain=thailand.generation.org&sz=128",
    mark: "GEN",
    tone: "teal",
  },
  {
    title: "Rajamangala University of Technology Rattanakosin",
    subtitle: "Educational Officer",
    detail: "Worked in academic administration, coordination, documentation, and supporting education workflows.",
    type: "Work",
    icon: "building",
    logo: "https://www.google.com/s2/favicons?domain=rmutr.ac.th&sz=128",
    mark: "RMUTR",
    tone: "sage",
  },
  {
    title: "WOW Park Museum",
    subtitle: "Attraction Guide",
    detail: "Guided visitors, communicated experiences clearly, and supported guest-facing operations in an interactive museum.",
    type: "Work",
    icon: "spark",
    logo: "https://www.google.com/s2/favicons?domain=wowpark.co.th&sz=128",
    mark: "WOW",
    tone: "clay",
  },
  {
    title: "Bang Lamphu Museum",
    subtitle: "Internship",
    detail: "Completed an internship in a cultural museum environment, building experience in public history and visitor learning.",
    type: "Internship",
    icon: "landmark",
    logo: "https://www.google.com/s2/favicons?domain=banglamphumuseum.treasury.go.th&sz=128",
    mark: "BLM",
    tone: "espresso",
  },
];

export const credentials = [
  {
    title: "TOEIC 830",
    subtitle: "English communication",
    icon: "language",
  },
  {
    title: "CapCut",
    subtitle: "Short-form video editing",
    icon: "video",
  },
  {
    title: "Adobe Premiere Pro",
    subtitle: "Video production workflow",
    icon: "film",
  },
  {
    title: "SPSS",
    subtitle: "Statistical analysis",
    icon: "chart",
  },
  {
    title: "Excel",
    subtitle: "Data organization and reporting",
    icon: "sheet",
  },
  {
    title: "Power BI",
    subtitle: "Dashboard and insight design",
    icon: "dashboard",
  },
];

export const projects = [
  {
    slug: "roomly-booking",
    title: "Roomly Booking",
    type: "Fullstack Platform",
    year: "2026",
    intro: "A booking application for rooms, schedules, customers, admin actions, and availability rules.",
    problem: "Reservation work was spread across chat, notes, and manual updates.",
    solution: "Created a single flow with searchable bookings, protected admin actions, and practical API boundaries.",
    role: "Fullstack Developer",
    stack: ["React", "Node.js", "Express", "PostgreSQL", "Tailwind CSS"],
    highlights: ["Protected routes", "Booking status flow", "Admin dashboard", "Responsive customer pages"],
    color: "clay",
  },
  {
    slug: "stock-house",
    title: "Stock House",
    type: "Dashboard",
    year: "2025",
    intro: "A quiet operations dashboard for inventory, movement logs, filters, and staff-friendly summaries.",
    problem: "The team needed faster visibility into stock levels without reading raw spreadsheets.",
    solution: "Designed a spacious dashboard with focused cards, reusable tables, and clean API state handling.",
    role: "Frontend + API Integration",
    stack: ["React", "Python", "PostgreSQL", "Tailwind CSS", "Git"],
    highlights: ["Inventory overview", "Search and filters", "Table states", "Export-ready layout"],
    color: "teal",
  },
  {
    slug: "service-core",
    title: "Service Core API",
    type: "Backend System",
    year: "2025",
    intro: "A backend foundation for authentication, validation, service logic, and consistent REST endpoints.",
    problem: "The app needed clearer backend organization before adding more features.",
    solution: "Separated routes, controllers, services, and database access so each layer had a readable job.",
    role: "Backend Developer",
    stack: ["Node.js", "Express", "MongoDB", "Docker", "Git"],
    highlights: ["REST API", "Input validation", "Error handling", "Docker-ready setup"],
    color: "honey",
  },
];

export function stackByName(name) {
  return stacks.find((item) => item.name === name);
}
