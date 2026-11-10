import AI from '../assets/projects/AI.jpg'
import business from '../assets/projects/business.jpg'
import AdminDashboard from '../assets/projects/Admin-dashboard.jpg'
import cis from '../assets/projects/cis.jpg'
import evea from '../assets/projects/evea.jpg'
import eveaImage from '../assets/projects/evea-app.jpg'
import cipmnAdmin from '../assets/projects/cipmn-admin-app.jpg'
import qucikmed from '../assets/projects/quickmed.jpg'
import eveaWebsite from '../assets/projects/evea-website.jpg'
import nestly from '../assets/projects/nestly.jpg'
import daymate from '../assets/projects/daymate.jpg'


export const data = [
    {
        id: 1,
        name: "Evea Cash and Credit Management",
        image: eveaImage,
        description: "Credit and treasury app on Evea's fintech platform: multi-step KYC with document uploads and real-time validation, credit scoring, identity verification and payment workflows, with secure authentication and fast, lazy-loaded pages.",
        stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "TanStack Query", "Hookstate"],
        github: "https://github.com/Evea01/evea-app-v2",
        live: "https://accounts.evea.africa/",
    },
    {
        id: 2,
        name: "CIPMN Project Management",
        image: cipmnAdmin,
        description: "Enterprise platform for the Chartered Institute of Project Managers of Nigeria: training-provider (ATP) records, memberships, multi-type payments, role-based permissions, project tracking and PDF, Excel and CSV exports.",
        stack: ["Next.js", "TypeScript", "React Query", "jsPDF", "xlsx", "Node.js", "Express", "Prisma"],
        github: "https://github.com/CIPMN/Admin-client",
        live: "http://admin.cipmn.gov.ng/",
    },
    {
        id: 3,
        name: "Nestly - Social Marketplace",
        image: nestly,
        description: "A social marketplace app for Nigeria: a social feed, communities, events and birthday reminders, plus a full marketplace with Paystack checkout and seller payouts, delivery codes, gift links, returns and seller dashboards.",
        stack: ["Next.js", "TypeScript", "Node.js", "Express", "PostgreSQL", "Prisma", "Paystack", "Tailwind CSS"],
        github: "https://github.com/Sanmidaniels07/Nestly",
        api: "https://github.com/Sanmidaniels07/auth-backend",
        live: "https://www.nestlyapp.site/",
    },
    {
        id: 4,
        name: "DayMate - Birthday Social Network",
        image: daymate,
        description: "A birthday-based social networking app: stories with reply-to-story messaging, followers with privacy controls, communities matched by birthday, chat, notifications and Cloudinary photo uploads - built end-to-end on a modular Express backend.",
        stack: ["Next.js 15", "Tailwind CSS v4", "React Query", "Zustand", "Framer Motion", "Express 5", "Prisma", "Supabase"],
        github: "https://github.com/Sanmidaniels07/DayMate",
        api: "https://github.com/Sanmidaniels07/birthday-app-api",
        live: "https://www.daymate.online/",
    },
    {
        id: 5,
        name: "CIS WEB",
        image: cis,
        description: "Company website for CIS Ltd, an IT support company: multi-page service content with animated illustrations, carousels and a fully responsive layout.",
        stack: ["React", "TypeScript", "Tailwind CSS", "React Router", "Lottie"],
        github: "https://github.com/Sanmidaniels07/TPS-wEB.git",
        live: "https://cisltd.com/",
    },
    {
        id: 6,
        name: "Evea",
        image: evea,
        description: "Evea's core fintech platform, helping growing businesses spend, manage money and access capital - responsive dashboards and API-driven financial workflows.",
        stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "TanStack Query", "Hookstate"],
        github: "https://github.com/Evea01/Frontend",
        live: "https://evea-dev.evea.africa/",
    },
    {
        id: 7,
        name: "QuickMed",
        image: qucikmed,
        description: "Hospital and emergency-services platform for healthcare providers and patients, with real-time data, secure authentication and live status updates across user roles.",
        stack: ["React", "Tailwind CSS", "Firebase", "REST APIs"],
        github: "",
        live: "https://www.quickmedng.com/",
    },
    {
        id: 8,
        name: "Evea Website",
        image: eveaWebsite,
        description: "Evea's marketing website, presenting its credit, treasury and spend-management products to businesses.",
        stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
        github: "https://github.com/Evea01/evea-website-v2",
        live: "https://www.evea.africa/",
    },
    {
        id: 9,
        name: "Gpt3 Application",
        image: AI,
        description: "Landing page for a GPT-3 AI product, built from reusable, fully responsive React components.",
        stack: ["React", "CSS3"],
        github: "https://github.com/Sanmidaniels07/GPT3-webApp",
        live: "https://gpt3webapp.netlify.app/",
    },
    {
        id: 10,
        name: "Responsive Admin Dashboard",
        image: AdminDashboard,
        description: "A responsive admin dashboard with sidebar navigation for customers, orders, analytics, products and reports, plus a recent-orders table - built with plain HTML, CSS and JavaScript.",
        stack: ["HTML5", "CSS3", "JavaScript"],
        github: "https://github.com/Sanmidaniels07/Admin-Dashboard.git",
        live: "https://admin-dashboard-eight-eosin.vercel.app/",
    },
    {
        id: 11,
        name: "Business Application",
        image: business,
        description: "HooBank - a responsive landing page for a digital banking business, with modern sections and smooth layouts.",
        stack: ["React"],
        github: "https://github.com/Sanmidaniels07/CourseList-withZustand",
        live: "https://hoobank-business-app.netlify.app/",
    },
]
