// Local Imports
import type {
  About,
  Project,
  Book,
  News,
  Publication,
  Service,
  Talk,
} from "@/types/content";
import profileImage from "../assets/images/profile.jpg";

/*
 * ┌───────────────────────────────┐
 * │        🌟 About 🌟       │
 * └───────────────────────────────┘
 *
 * ────────────────────────────────
 * Keep calm and code on! 👩‍💻👨‍💻
 */

export const about: About = {
  imageUrl: profileImage,
  name: "Fawad Ahmed Baig",
  title: "BSCS Silver Medalist (2/66) | Applied AI Researcher | Ph.D. Applicant",
  degree: "BS Computer Science (CGPA 3.74 / 4.00)",
  instituteName: "Khwaja Fareed University of Engineering & Information Technology",
  email: "fawadahmedbaig10@gmail.com",
  callout:
    "Seeking Ph.D. / GRA positions in Applied AI, RAG Systems, Data Pipelines, and Software Engineering Infrastructure",
  currentWork: [
    {
      title: "Applied AI & RAG Systems",
      description:
        "Building low-latency retrieval-augmented generation (RAG) inference pipelines with 768-D vector embeddings, MongoDB Vector Search, and Groq LPU serving. Exploring context optimization and token overhead reduction techniques for production-grade AI systems.",
    }
  ],
  industryExperience: [
    {
      role: "Section Leader / Mentor",
      organization: "Stanford Code in Place (CIP)",
      url: "https://codeinplace.stanford.edu/",
      description:
        "selected as a global mentor for Stanford's introductory CS program",
    },
    {
      role: "Fellow",
      organization: "Aspire Leaders Program (Harvard ALP '26)",
      url: "https://www.aspireleaders.org/",
      description:
        "selected for Harvard's global leadership fellowship cohort",
    },
  ],
  serviceAndTeaching: [
    "Silver Medalist — Rank 2 out of 66 in BS Computer Science",
    "Section Leader, Stanford Code in Place (CIP)",
    "Fellow, Aspire Leaders Program (Harvard ALP '26)",
  ],
  // For footer
  location: "Pakistan",
  researchAreas: [
    "Applied AI",
    "Retrieval-Augmented Generation (RAG)",
    "Vector Search & Embeddings",
    "Distributed Systems",
    "Cloud-Native Delivery",
    "Software Engineering Infrastructure",
    "Data Pipelines",
  ],
  shortBio:
    "I am a Computer Science graduate (CGPA 3.74, 2nd Department Rank) specializing in applied AI architectures, retrieval-augmented generation (RAG), and cloud-native software delivery. My work bridges low-latency inference systems with practical distributed software engineering. I have hands-on experience building full-stack vector search engines, and leading peer learning programs.",
};

/*
 * ┌───────────────────────────────┐
 * │        🌟 Publication 🌟       │
 * └───────────────────────────────┘
 *
 * ────────────────────────────────
 * Keep calm and code on! 👩‍💻👨‍💻
 */

// No publications to display yet — add entries here when available
export const publications: Publication[] = [];

/*
 * ┌───────────────────────────────┐
 * │        🌟 News 🌟       │
 * └───────────────────────────────┘
 *
 * ────────────────────────────────
 * Keep calm and code on! 👩‍💻👨‍💻
 */

export const news: News[] = [
  {
    id: 1,
    title: "Silver Medalist — Ranked 2nd out of 66 students in BS Computer Science (CGPA 3.74 / 4.00)",
    year: "2025",
    category: "Academic Excellence",
  },
  {
    id: 2,
    title: "Selected as Section Leader / Mentor for Stanford Code in Place (CIP)",
    year: "2025",
    category: "Global Leadership",
  },
  {
    id: 3,
    title: "Fellow, Aspire Leaders Program (Harvard ALP '26)",
    year: "2026",
    category: "Fellowship",
  },
  {
    id: 4,
    title: "Built end-to-end low-latency RAG inference pipeline with Groq LPU, MongoDB Vector Search, and Socket.IO streaming",
    year: "2025",
    category: "Capstone Project",
  },
  {
    id: 5,
    title: "Architected production microservices platform (NextGen LMS) with Docker Compose, Nginx, and GitHub Actions CI/CD",
    year: "2025",
    category: "Engineering",
  }
];

/*
 * ┌───────────────────────────────┐
 * │        🌟 Talk 🌟       │
 * └───────────────────────────────┘
 *
 * ────────────────────────────────
 * Keep calm and code on! 👩‍💻👨‍💻
 */

// No talks to display yet — add entries here when available
export const talks: Talk[] = [];

/*
 * ┌───────────────────────────────┐
 * │        🌟 Award 🌟       │
 * └───────────────────────────────┘
 *
 * ────────────────────────────────
 * Keep calm and code on! 👩‍💻👨‍💻
 */


/*
 * ┌───────────────────────────────┐
 * │        🌟 Service 🌟       │
 * └───────────────────────────────┘
 *
 * ────────────────────────────────
 * Keep calm and code on! 👩‍💻👨‍💻
 */

// Section hidden from the home page until real entries are added here
export const services: Service[] = [];

/*
 * ┌───────────────────────────────┐
 * │        🌟 Book 🌟       │
 * └───────────────────────────────┘
 *
 * ────────────────────────────────
 * Keep calm and code on! 👩‍💻👨‍💻
 */

// No books to display yet — add entries here when available
export const books: Book[] = [];

/*
 * ┌───────────────────────────────┐
 * │        🌟 Projects 🌟       │
 * └───────────────────────────────┘
 *
 * ────────────────────────────────
 * Keep calm and code on! 👩‍💻👨‍💻
 */
export const projects: Project[] = [
  {
    id: 1,
    title: "Applied AI Systems Architecture – Capstone RAG System",
    technology: "Python, Groq LPU, MongoDB Vector Search, Socket.IO, FastAPI / Node.js",
    description:
      "Built an end-to-end low-latency RAG inference pipeline using 768-D vector embeddings, MongoDB Vector Search, and Groq LPU serving. Integrated full-duplex WebSockets (Socket.IO) for streaming real-time notifications and context optimization to reduce token overhead.",
    year: "2025",
  },
  {
    id: 2,
    title: "Production Microservices & Delivery Platform (NextGen LMS)",
    technology: "Docker Compose, Node.js, Express, CI/CD, Stripe API",
    description:
      "Architected decoupled microservices with Docker Compose, Nginx reverse proxy for TLS termination, and automated zero-downtime deployment pipelines via GitHub Actions. Included multi-party transactional logic and on-chain verifiable credential state.",
    year: "2025",
  },
];