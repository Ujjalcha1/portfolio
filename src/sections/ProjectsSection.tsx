import { useRef, useEffect } from "react";
import { Section } from "@/components/Section";
import { SectionTitle } from "@/components/SectionTitle";
import { ProjectCard } from "@/components/ProjectCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Projects data
const projectsData = [
  {
    id: 1,
    title: "TeamSphere — Team Management",
    description: "A premium, full-stack workforce planning and team management platform. Features an interactive dashboard with hiring trends, role-based CRUD permissions, real-time activity auditing, and customizable profile settings.",
    image: "https://api.microlink.io?url=https%3A%2F%2Fteam-managment-delta.vercel.app&screenshot=true&embed=screenshot.url",
    tags: ["Next.js 16", "React 19", "MongoDB", "Zustand", "Recharts", "Tailwind CSS"],
    demoUrl: "https://team-managment-delta.vercel.app",
    githubUrl: "https://github.com/UjjalCha1/team-managment",
  },
  {
    id: 2,
    title: "Convo — Real-Time Chat",
    description: "A high-performance real-time messaging application with a glassmorphic dark UI. Features instant bidirectional communication, typing indicators, read receipts, and user presence alerts.",
    image: "https://api.microlink.io?url=https%3A%2F%2Fconvo-olive.vercel.app&screenshot=true&embed=screenshot.url",
    tags: ["Next.js 16", "Socket.io", "React 19", "MongoDB", "Zustand", "Tailwind CSS", "Framer Motion"],
    demoUrl: "https://convo-olive.vercel.app",
    githubUrl: "https://github.com/UjjalCha1/Convo",
  },
  {
    id: 3,
    title: "PDF Tools — Document Utility Suite",
    description: "A privacy-first, client-side utility suite with 25+ essential tools to manage, convert, edit, and secure PDF files. Features client-side file merging, splitting, OCR extraction, and encryption.",
    image: "https://api.microlink.io?url=https%3A%2F%2Fall-in-one-gamma-one.vercel.app&screenshot=true&embed=screenshot.url",
    tags: ["Next.js 16", "React 19", "Tailwind CSS v4", "pdf-lib", "Tesseract.js", "JSZip"],
    demoUrl: "https://all-in-one-gamma-one.vercel.app",
    githubUrl: "https://github.com/UjjalCha1/all-in-one",
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing projects and skills with a modern glassmorphic design, custom smooth scroll, and GSAP animations.",
    image: "https://api.microlink.io?url=https%3A%2F%2Fwww.ujjal.in&screenshot=true&embed=screenshot.url",
    tags: ["React", "Tailwind CSS", "GSAP", "Framer Motion"],
    demoUrl: "https://www.ujjal.in",
    githubUrl: "https://github.com/UjjalCha1/portfolio",
  },
];

export function ProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Animate project cards stagger when scrolled into view
      gsap.fromTo(
        ".project-card-wrapper",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <Section id="projects">
      <div ref={sectionRef}>
        <SectionTitle 
          title="My Projects" 
          subtitle="Explore my recent work and technical projects"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projectsData.map((project) => (
            <div key={project.id} className="project-card-wrapper h-full">
              <ProjectCard
                title={project.title}
                description={project.description}
                image={project.image}
                tags={project.tags}
                demoUrl={project.demoUrl}
                githubUrl={project.githubUrl}
              />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
