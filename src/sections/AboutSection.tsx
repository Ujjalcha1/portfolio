
import { Section } from "@/components/Section";
import { SectionTitle } from "@/components/SectionTitle";
import { SkillBadge } from "@/components/SkillBadge";
import * as LucideIcons from "lucide-react";

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
];

export function AboutSection() {
  return (
    <Section id="about" className="bg-muted/30">
      <SectionTitle 
        title="About Me" 
        subtitle="Get to know more about me and my technical expertise"
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <h3 className="text-xl font-semibold mb-4">
            I'm a <span className="text-primary">MERN Stack Developer</span> with
            a passion for building exceptional web applications
          </h3>
          
          <div className="space-y-4 text-muted-foreground">
            <p>
              Hello! I'm John, a full-stack web developer specialized in MERN stack
              development. With 5+ years of experience, I focus on creating
              responsive, user-friendly, and scalable web applications.
            </p>
            
            <p>
              My journey in web development started during college when I built my
              first React application. Since then, I've worked with various companies
              and clients to deliver high-quality web solutions that solve real
              business problems.
            </p>
            
            <p>
              Beyond coding, I enjoy contributing to open source, writing technical
              articles, and mentoring junior developers. I'm always eager to learn
              new technologies and stay updated with the latest industry trends.
            </p>
          </div>
        </div>
        
        <div className="order-1 lg:order-2 flex justify-center">
          <div className="relative">
            <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1531891570158-e71b35a485bc?ixlib=rb-4.0.3"
                alt="About Me"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-card p-4 rounded-lg shadow-lg border border-border">
              <p className="text-lg font-bold">5+ Years</p>
              <p className="text-sm text-muted-foreground">Development Experience</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-16">
        <h3 className="text-2xl font-semibold text-center mb-8">Technical Skills</h3>
        
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill) => (
            <SkillBadge key={skill.name} name={skill.name} icon={skill.icon} />
          ))}
        </div>
      </div>
    </Section>
  );
}
