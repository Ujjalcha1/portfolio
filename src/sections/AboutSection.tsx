import { Section } from "@/components/Section";
import { SectionTitle } from "@/components/SectionTitle";
import { SkillBadge } from "@/components/SkillBadge";
import * as LucideIcons from "lucide-react";
import profile_image from "../assets/profile.jpg";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: "React", icon: <LucideIcons.FileCode /> },
  { name: "MongoDB", icon: <LucideIcons.Database /> },
  { name: "Node.js", icon: <LucideIcons.ServerCog /> },
  { name: "Express", icon: <LucideIcons.Server /> },
  { name: "TypeScript", icon: <LucideIcons.Braces /> },
  { name: "Next.js", icon: <LucideIcons.FastForward /> },
  { name: "Redux", icon: <LucideIcons.PackageOpen /> },
  { name: "Tailwind CSS", icon: <LucideIcons.Palette /> },
  { name: "Git", icon: <LucideIcons.GitBranch /> },
  { name: "RESTful API", icon: <LucideIcons.Network /> },
  { name: "Jest", icon: <LucideIcons.TestTube /> },
  { name: "Docker", icon: <LucideIcons.Container /> },
  { name: "NestJS", icon: <LucideIcons.Box /> },
  { name: "PostgreSQL", icon: <LucideIcons.DatabaseBackup /> },
  { name: "Prisma ORM", icon: <LucideIcons.Layers /> },
  { name: "GraphQL", icon: <LucideIcons.Share2 /> },
  { name: "JWT Auth", icon: <LucideIcons.KeyRound /> },
  { name: "Firebase", icon: <LucideIcons.Flame /> },
  { name: "Vercel", icon: <LucideIcons.Cloud /> },
  { name: "CI/CD", icon: <LucideIcons.Workflow /> },
  { name: "Microservices", icon: <LucideIcons.Component /> },
  { name: "WebSockets", icon: <LucideIcons.Radio /> },
];

export function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!sectionRef.current) return;
    
    const ctx = gsap.context(() => {
      // Reveal the left and right columns
      gsap.fromTo(
        ".about-col-left",
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          }
        }
      );
      
      gsap.fromTo(
        ".about-col-right",
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          }
        }
      );

      // Stagger reveal the skills
      gsap.fromTo(
        ".skill-badge-wrapper",
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          stagger: 0.05,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: ".skills-container",
            start: "top 80%",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <Section id="about" className="bg-muted/30">
      <div ref={sectionRef}>
        <SectionTitle
          title="About Me"
          subtitle="Get to know more about me and my technical expertise"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 about-col-left">
            <h3 className="text-xl font-semibold mb-4 text-foreground/90">
              I'm a <span className="gradient-text">MERN Stack Developer</span>{" "}
              with a passion for building exceptional web applications
            </h3>

            <div className="space-y-4 text-muted-foreground/90 leading-relaxed text-lg font-medium">
              <p>
                Hello! I'm Ujjal, a full-stack web developer specialized in MERN
                stack development. With 3+ years of experience, I focus on
                creating responsive, user-friendly, and scalable web applications.
              </p>

              <p>
                My journey in web development started during college when I built
                my first React application. Since then, I've worked with various
                companies and clients to deliver high-quality web solutions that
                solve real business problems.
              </p>

              <p>
                Beyond coding, I enjoy contributing to open source, writing
                technical articles, and mentoring junior developers. I'm always
                eager to learn new technologies and stay updated with the latest
                industry trends.
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center about-col-right">
            <div className="relative group perspective-1000">
              <div className="w-64 h-64 sm:w-80 sm:h-80 overflow-hidden border-2 border-primary/30 shadow-[0_0_40px_rgba(139,92,246,0.3)] transition-transform duration-700 ease-in-out group-hover:rotate-y-12 group-hover:rotate-x-12 rounded-[2rem] bg-card p-2 glass-card">
                <img
                  src={profile_image}
                  alt="About Me"
                  className="w-full h-full object-cover rounded-[1.5rem] filter contrast-110 saturate-110"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 glass p-5 rounded-2xl shadow-2xl border border-white/20 animate-bounce cursor-default">
                <p className="text-2xl font-black text-primary drop-shadow-sm">3+ Years</p>
                <p className="text-sm font-semibold text-muted-foreground">
                  Development Experience
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 skills-container">
          <h3 className="text-3xl font-black text-center mb-10 tracking-tight">
            Technical Arsenal
          </h3>

          <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
            {skills.map((skill) => (
              <div key={skill.name} className="skill-badge-wrapper">
                <SkillBadge name={skill.name} icon={skill.icon} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
