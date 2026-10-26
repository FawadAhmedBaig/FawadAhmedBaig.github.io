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
  instituteName: "Khwaja Fareed University of Engineering & Information Technology (KFUEIT)",
  email: "fawadahmedbaig10@gmail.com",
  callout:
    "Seeking Ph.D. / Graduate Research Assistant positions in Applied AI, Retrieval-Augmented Generation (RAG), LLM Security & Guardrails, and Multimodal AI Systems.",
  currentWork: [
    {
      title: "LLM Safety, Guardrails & Adversarial Robustness",
      description:
        "Investigating techniques for pre-LLM threat mitigation, prompt injection detection, and zero-day document weaponization using lightweight local verification models and visual rendering heuristics.",
    },
    {
      title: "Retrieval-Augmented Generation (RAG) & Multimodal Reasoning",
      description:
        "Developing specialized retrieval workflows combining dense semantic search, knowledge distillation, and spatial/visual grounding models (such as Vision-Language Models and ControlNet pipelines) for end-to-end reasoning tasks.",
    },
  ],
  industryExperience: [
    {
      role: "Chrome Extension & Web Automation Engineer",
      organization: "Fiverr (Freelance)",
      url: "https://www.fiverr.com/fawad8280",
      description:
        "Architecting client-tailored Manifest V3 extensions, resilient dynamic DOM scrapers, and automated cloud sync pipelines using Chrome Storage APIs and background service workers.",
    },
    {
      role: "MERN Stack Developer Intern",
      organization: "DAM TechHub",
      url: "https://drive.google.com/file/d/1p43_I5WqF-5JhOIuOMqpwUIqf67xBYB2/view",
      description:
        "Engineered stateless RESTful microservices in Node.js/Express with React 19 single-page apps, implementing RBAC authentication, Stripe webhook transactions, and FastAPI ML service routing.",
    },
  ],
  serviceAndTeaching: [
    "Silver Medalist — Department Rank 2/66 in BS Computer Science, KFUEIT",
    "Fellow & Peer Mentor — Aspire Leaders Program (Founded by Harvard Faculty, Cohort '26)",
    "Section Leader / Mentor — Stanford Code in Place (CIP)",
    "Donation Co-Head & Team Lead — Kare Kamal Welfare Foundation (15+ Volunteers Led)",
  ],
  // For footer
  location: "Rahim Yar Khan, Pakistan",
  researchAreas: [
    "Applied Artificial Intelligence",
    "Retrieval-Augmented Generation (RAG)",
    "LLM Guardrails & AI Safety",
    "Multimodal AI & Computer Vision",
    "Natural Language Processing (NLP)",
    "Vector Search & Information Retrieval",
    "Applied Machine Learning",
  ],
  shortBio:
    "I am a Computer Science graduate (CGPA 3.74, 2nd Department Rank) and Silver Medalist focusing on applied AI, RAG architectures, and model guardrails. My background encompasses building secure, domain-specific AI platforms—ranging from pre-LLM security auditor tools to spatial reasoning generative pipelines. Alongside active freelance engineering and hackathon-driven development, I mentor emerging developers through competitive international programs.",
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
    title: "Built PDFGuard Security Utility at Open Scientific Intelligence Hackathon",
    year: "2026",
    category: "Hackathon",
  },
  {
    id: 2,
    title: "Developed SketchSpace AI Design Platform at BananaHacks",
    year: "2026",
    category: "Hackathon",
  },
  {
    id: 3,
    title: "Selected as Section Leader / Mentor for Stanford Code in Place (CIP)",
    year: "2026",
    category: "Global Leadership",
  },
  {
    id: 4,
    title: "Achieved IELTS 7.0 Overall Band Score",
    year: "2026",
    category: "Certification",
  },
  {
    id: 5,
    title: "Silver Medalist — Ranked 2nd out of 66 students in BS Computer Science (CGPA 3.74 / 4.00)",
    year: "2026",
    category: "Academic Excellence",
  },
  {
    id: 6,
    title: "Placed in the 98.5th percentile nationwide in the National Skills Competency Test (NSCT)",
    year: "2026",
    category: "Academic Distinction",
  },
  {
    id: 7,
    title: "Fellow, Aspire Leaders Program (Harvard ALP '26)",
    year: "2026",
    category: "Fellowship",
  },
  {
    id: 8,
    title: "Engineered NextGen E-Learning RAG Pipeline with Groq LPU and Docker",
    year: "2026",
    category: "Capstone Project",
  },
  {
    id: 9,
    title: "Completed MERN Stack Developer Internship at DAM TechHub",
    year: "2025",
    category: "Experience",
  },
  {
    id: 10,
    title: "Awarded fully funded State Merit Scholarship covering 100% tuition",
    year: "2025",
    category: "Scholarship",
  },
  {
    id: 11,
    title: "Awarded National Workstation Grant for academic excellence",
    year: "2025",
    category: "Grant & Award",
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
    title: "NextGen E-Learning: RAG-Driven AI Tutoring & Microservices Platform",
    technology:
      "React 19, Express 5, Node.js, MongoDB Atlas (Vector Search), Polygon Amoy, Ethers.js, Gemini API, Groq (Llama 3.3 70B), Docker, Socket.IO, Stripe API",
    description:
      "Architected an end-to-end AI tutoring platform featuring a domain-specific RAG pipeline with 768-D embeddings, MongoDB Vector Search, and low-latency inference on Groq. Built on a multi-container Docker infrastructure with Nginx reverse proxy and GitHub Actions CI/CD. Integrated on-chain certificate minting on Polygon Amoy, Socket.IO real-time notifications, and Stripe Connect Express split payments.",
    year: "2025 – 2026",
  },
  {
    id: 2,
    title: "PDFGuard: AI-Powered Scientific PDF Security & Guardrail",
    technology: "Python, PyMuPDF, Transformers, Qwen3, CLI",
    description:
      "Engineered a security utility published on PyPI (pdfguardrail) to detect hidden prompt injections, invisible text, and weaponized metadata in academic PDFs before LLM ingestion. Features dual-rendering visual verification for zero-pixel text anomalies and local open-weight model integration (Qwen3-4B) ensuring zero data leakage.",
    year: "2026",
  },
  {
    id: 3,
    title: "SketchSpace AI: AI-Powered Interior Design Platform",
    technology: "React 18, FastAPI, Google Gemini 2.5, ControlNet, Tailwind CSS",
    description:
      "Architected a spatial reasoning pipeline using Google Gemini Vision (gemini-2.5-flash) to extract structural anchors from floor plan sketches. Connected to a 3-tier generative engine coordinating Colab GPU bridges (ControlNet Scribble + Realistic Vision V5.1) and a zero-dependency HTML5 canvas client with interactive before/after sliders.",
    year: "2026",
  },
  {
    id: 4,
    title: "Loan Approval Predictive Pipeline",
    technology: "Python, Scikit-Learn, Imbalanced-Learn, Joblib",
    description:
      "Remediated a 69:31 target imbalance using Random Oversampling on log-transformed financial features. Trained and evaluated a Random Forest classifier achieving 89.1% accuracy and 0.89 Macro F1, deployed with serialized Joblib artifacts for low-latency inference.",
    year: "2025",
  },
  {
    id: 5,
    title: "AI Contextual Proposal Generator",
    technology: "Chrome MV3, JavaScript, OAuth 2.0, Multi-LLM APIs",
    description:
      "Engineered a Manifest V3 browser extension featuring DOM extraction pipelines, multi-LLM orchestration (GPT-4o/Gemini), and local AES key encryption for real-time contextual proposal synthesis directly on freelance platforms.",
    year: "2025",
  },
  {
    id: 6,
    title: "Amazon Discount & Price Scanner",
    technology: "Chrome MV3, JavaScript, SheetJS, DOM Automation",
    description:
      "Automated web scraper utilizing dynamic DOM parsing, randomized jitter delays, and exponential backoff retry algorithms to reliably ingest multi-tier pricing structures across 5+ regional Amazon marketplaces without triggering rate limits.",
    year: "2025",
  },
  {
    id: 7,
    title: "Zillow Real Estate Data Pipeline",
    technology: "Chrome MV3, JavaScript, Webhooks, SheetJS",
    description:
      "Engineered an automated data ingestion pipeline handling authenticated session traversal, dynamic DOM pagination, and asynchronous webhook dispatch to Google Apps Script for real-time cloud property data warehousing.",
    year: "2025",
  },
];