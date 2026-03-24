import { useState, useRef, useEffect } from "react";
import { Section } from "@/components/Section";
import { SectionTitle } from "@/components/SectionTitle";
import { ProjectCard } from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Sample projects data
const projectsData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with product management, cart functionality, and payment integration.",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3",
    tags: ["React", "Node.js", "MongoDB", "Express", "Redux"],
    category: "fullstack",
    demoUrl: "https://demo-ecommerce.example.com",
    githubUrl: "https://github.com/yourusername/ecommerce-platform",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A productivity application for managing tasks with drag-and-drop functionality and team collaboration features.",
    image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-4.0.3",
    tags: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
    category: "frontend",
    demoUrl: "https://task-app.example.com",
    githubUrl: "https://github.com/yourusername/task-management",
  },
  {
    id: 3,
    title: "Real-time Chat Application",
    description: "A chat application with real-time messaging, user authentication, and notification system.",
    image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?ixlib=rb-4.0.3",
    tags: ["React", "Socket.io", "Node.js", "MongoDB"],
    category: "fullstack",
    demoUrl: "https://chat-app.example.com",
    githubUrl: "https://github.com/yourusername/realtime-chat",
  },
  {
    id: 4,
    title: "Personal Finance Dashboard",
    description: "A dashboard for tracking personal finances with visualizations and budget management tools.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3",
    tags: ["React", "D3.js", "Node.js", "Express"],
    category: "frontend",
    demoUrl: "https://finance-dashboard.example.com",
    githubUrl: "https://github.com/yourusername/finance-dashboard",
  },
  {
    id: 5,
    title: "Blog API",
    description: "A RESTful API for a blog platform with authentication, posts, comments, and user management.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3",
    tags: ["Node.js", "Express", "MongoDB", "JWT"],
    category: "backend",
    githubUrl: "https://github.com/yourusername/blog-api",
  },
  {
    id: 6,
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing projects and skills with a modern design.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    category: "frontend",
    demoUrl: "https://portfolio.example.com",
    githubUrl: "https://github.com/yourusername/portfolio",
  },
];

const categories = [
  { value: "all", label: "All Projects" },
  { value: "frontend", label: "Frontend" },
  { value: "backend", label: "Backend" },
  { value: "fullstack", label: "Full Stack" },
];

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const filteredProjects = projectsData.filter(
    (project) => activeCategory === "all" || project.category === activeCategory
  );

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
  }, [activeCategory]); // Re-run animation when category changes

  return (
    <Section id="projects">
      <div ref={sectionRef}>
        <SectionTitle 
          title="My Projects" 
          subtitle="Explore my recent work and technical projects"
        />
        
        <div className="flex justify-center flex-wrap gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category.value}
              variant={activeCategory === category.value ? "default" : "outline"}
              size="sm"
              className={cn(
                "transition-all duration-300 rounded-full px-6",
                activeCategory === category.value
                  ? "shadow-[0_0_15px_rgba(139,92,246,0.5)] scale-105"
                  : "hover:text-primary hover:border-primary border-border/50 bg-background/50 backdrop-blur-sm"
              )}
              onClick={() => setActiveCategory(category.value)}
            >
              {category.label}
            </Button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
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
