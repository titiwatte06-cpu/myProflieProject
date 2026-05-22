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
    name: "Python",
    group: "Language",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
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
