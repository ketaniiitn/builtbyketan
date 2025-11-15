import React from "react";

// Icons
import { FaReact, FaNodeJs, FaCloud } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiOpenai,
  SiExpress,
  SiSocketdotio,
  SiFirebase,
  SiJavascript,
  SiTypescript,
  SiPostgresql,
  SiPrisma
} from "react-icons/si";

export default function Projects() {
  return (
    <section className="section-projects" id="projects">
      <h1>My <span className="half-text">Projects</span></h1>

      <div className="projects-box">

        {/* 1. Career Guidance Chatbot */}
        <div className="project-card-1 project-card">
          <div className="project-details">
            <h2 className="project-title">Career Guidance Chatbot</h2>

            <p className="project-description">
              An AI-powered career counseling system using <strong>LLMs + RAG</strong> to generate
              personalized career guidance with contextual memory, structured responses,
              and document-based knowledge (PDFs/CSVs).
            </p>

            <div className="tech-icons">
              <SiNextdotjs title="Next.js" />
              <SiTypescript title="TypeScript" />
              <SiExpress title="Express.js" />
              <SiPostgresql title="PostgreSQL" />
              <SiPrisma title="Prisma ORM" />
            </div>
          </div>

          <div className="project-links">
            <a href="https://career-guidance-ai-tawny.vercel.app/" className="live-demo-link">Live Demo</a>
            <a href="https://github.com/ketaniiitn/AI-CareerGuidance" className="repo-link">Repository</a>
          </div>
        </div>

        {/* 2. CloudVault */}
        <div className="project-card-2 project-card">
          <div className="project-details">
            <h2 className="project-title">CloudVault</h2>

            <p className="project-description">
              A secure, scalable cloud storage platform with file uploads, folder management,
              Google OAuth login, Razorpay payments, and a fully serverless backend powered by
              <strong> AWS Lambda + S3 + PostgreSQL (Prisma)</strong>.
            </p>

            <div className="tech-icons">
              <FaCloud title="AWS" />
              <SiNextdotjs title="Next.js" />
              <SiTypescript title="TypeScript" />
              <SiPostgresql title="PostgreSQL" />
            </div>
          </div>

          {/* This one only has a repo link */}
          <div className="project-links">
            <a href="https://github.com/ketaniiitn/CloudVault" className="repo-link">Repository</a>
          </div>
        </div>

        {/* 3. Inventory Management System */}
        <div className="project-card-3 project-card">
          <div className="project-details">
            <h2 className="project-title">Inventory Management System</h2>

            <p className="project-description">
              A complete inventory management platform with <strong>JWT auth, SKU validation,
              paginated APIs</strong>, a responsive React UI, and a Python-Flask backend.
            </p>

            <div className="tech-icons">
              <SiJavascript title="JavaScript" />
              <SiMongodb title="MongoDB" />
              <FaReact title="React" />
              <SiTailwindcss title="Tailwind CSS" />
            </div>
          </div>

          <div className="project-links">
            <a href="https://scintillating-fairy-1ea183.netlify.app" className="live-demo-link">Live Demo</a>
            <a href="https://github.com/ketaniiitn/INVENTRY-MANAGEMENT-SYSTEM" className="repo-link">Repository</a>
          </div>
        </div>

        {/* 4. Real-time Chat App */}
        <div className="project-card-4 project-card">
          <div className="project-details">
            <h2 className="project-title">Real-time Chat Application</h2>

            <p className="project-description">
              A real-time messaging app supporting <strong>instant chats, JWT auth, online indicators,
              message status tracking, Zustand state management,</strong> and responsive UI.
            </p>

            <div className="tech-icons">
              <FaNodeJs title="Node.js" />
              <SiExpress title="Express" />
              <SiSocketdotio title="Socket.IO" />
              <SiMongodb title="MongoDB" />
            </div>
          </div>

          {/* This one only has a repo link */}
          <div className="project-links">
            <a href="https://github.com/ketaniiitn/Chat-Application" className="repo-link">Repository</a>
          </div>
        </div>

        {/* 5. AI Chatbot Template */}
        <div className="project-card-5 project-card">
          <div className="project-details">
            <h2 className="project-title">AI Chatbot Template</h2>

            <p className="project-description">
              A ready-to-deploy AI chatbot MVP with <strong>JWT auth, Redux Toolkit,
              protected routes, chat sessions</strong>, typing indicators, and full
              Flask + MongoDB backend.
            </p>

            <div className="tech-icons">
              <FaReact title="React (Vite)" />
              <SiTailwindcss title="Tailwind" />
              <SiOpenai title="OpenAI" />
              <SiTypescript title="TypeScript" />
            </div>
          </div>

          <div className="project-links">
            <a href="https://true-gradient.vercel.app/" className="live-demo-link">Live Demo</a>
            <a href="https://github.com/ketaniiitn/TrueGradient" className="repo-link">Repository</a>
          </div>
        </div>

        {/* 6. Video Conferencing App */}
        <div className="project-card-6 project-card">
          <div className="project-details">
            <h2 className="project-title">Video Conferencing App</h2>

            <p className="project-description">
              A feature-rich video conferencing platform built with <strong>WebRTC, WebSockets,
              Clerk Auth, Prisma ORM</strong>, and a responsive Next.js frontend. Includes
              meeting rooms, screen sharing, chat, and role-based auth.
            </p>

            <div className="tech-icons">
              <SiNextdotjs title="Next.js" />
              <SiTypescript title="TypeScript" />
              <SiTailwindcss title="Tailwind CSS" />
              <SiPostgresql title="PostgreSQL" />
            </div>
          </div>

          <div className="project-links">
            <a
              href="https://video-conferencing-application-henna.vercel.app/sign-in?redirect_url=https%3A%2F%2Fvideo-conferencing-application-henna.vercel.app%2F"
              className="live-demo-link"
            >
              Live Demo
            </a>

            <a
              href="https://github.com/ketaniiitn/VideoConfrencing-App"
              className="repo-link"
            >
              Repository
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}