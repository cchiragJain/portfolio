import gamehub from "@/public/gamehub.png";
import genius from "@/public/genius.png";
import taskbinder from "@/public/taskbinder.png";
import everythingstore from "@/public/theeverythingstore.png";
import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Product Developer at Verdis.ai",
    location: "Gurugram, India",
    description:
      "As a Frontend Team Lead, orchestrated the migration from AngularJS to React/TypeScript, crafted an MIS for improved data management. Independently, optimized microservices, reducing server costs by 15%. Authored design documentation and implemented robust backend unit testing with Chai and Mocha. Introduced a Redis-based distributed locking mechanism, addressing poller issues from multiple instances, ensuring system reliability and streamlined concurrent processes.",
    icon: React.createElement(CgWorkAlt),
    date: "April 2023 - Present",
  },
  {
    title: "Product Developer Intern at Verdis.ai",
    location: "Gurugram, India",
    description:
      "I worked as a full stack developer by which I accelerated website rendering by 5s through frontend optimization and lazy loading. Elevated email templates for a unified, visually appealing experience across clients. Transformed an NLP microservice into a chatbot integrated with Dialogflow, and enabled dynamic chart display on WhatsApp via the WhatsApp API.",
    icon: React.createElement(CgWorkAlt),
    date: "July 2022 - March 2023",
  },
  {
    title: "Graduated from Chitkara University",
    location: "Punjab, India",
    description:
      "I graduated with a Bachelor's of Engineering in Computer Science, achieving a CGPA of 9.7, showcasing my dedication to academic excellence.",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Gamehub",
    description:
      "A streaming platform featuring RTMP/WHIP protocols, authentication, real-time chat, live viewer count, and a robust dashboard for creators. The system includes unique color-coded chat, following, blocking, and real-time participant management.",
    tags: ["React", "TypeScript", "Next.js", "MySQL", "Tailwind", "Prisma"],
    imageUrl: gamehub,
    liveLink: "https://gamehub-peach.vercel.app/",
  },
  {
    title: "Task Binder",
    description:
      "Developed a Project Management System allowing users to create projects, assign team members, and engage in live chat. Team members can filter projects by categories and view online users. ",
    tags: ["React", "Firebase"],
    imageUrl: taskbinder,
    liveLink: "https://taskbinder.netlify.app/",
  },
  {
    title: "E Commerce Store",
    description:
      "A user-friendly e-commerce platform facilitating order placement, payment, and order tracking. It includes an admin interface for managing orders, products, and users.",
    tags: ["React", "Redux", "ExpressJS", "MongoDB"],
    imageUrl: everythingstore,
    liveLink: "https://theeverythingstoreapp.herokuapp.com/",
  },
  {
    title: "Genius",
    description:
      "AI Powered SASS App that enables user to create music, video, images and code using a text prompt.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "MySQL", "Zustand"],
    imageUrl: genius,
    liveLink: "https://ai-saas-project-psi.vercel.app/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Redux Toolkit",
  "Next.js",
  "Node.js",
  "Express",
  "Tailwind",
  "MongoDB",
  "Firebase",
  "MySQL",
  "Prisma",
  "Framer Motion",
  "Git",
  "Docker",
  "Zustand"
] as const;
