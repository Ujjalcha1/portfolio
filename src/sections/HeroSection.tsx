
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TypedText } from "@/components/TypedText";
import { cn } from "@/lib/utils";

const socialLinks = [
  {
    name: "GitHub",
    icon: <Github className="h-5 w-5" />,
    href: "https://github.com/yourusername",
  },
  {
    name: "LinkedIn",
    icon: <Linkedin className="h-5 w-5" />,
    href: "https://linkedin.com/in/yourusername",
  },
  {
    name: "Email",
    icon: <Mail className="h-5 w-5" />,
    href: "mailto:your.email@example.com",
  },
];

interface HeroSectionProps {
  className?: string;
}

export function HeroSection({ className }: HeroSectionProps) {
  return (
    <section
      id="home"
      className={cn(
        "min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-16",
        className
      )}
    >
      {/* Background animation */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_left,hsl(var(--primary))_0%,transparent_50%),radial-gradient(circle_at_top_right,hsl(var(--secondary))_0%,transparent_50%)] dark:opacity-20 opacity-10" />
      
      <div className="container px-4 mx-auto text-center">
        <div className="mb-6 rounded-full w-32 h-32 mx-auto overflow-hidden border-4 border-primary/20 shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3"
            alt="Developer Portrait"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            John Doe
          </h1>
          
          <div className="text-xl md:text-2xl font-medium mb-6 text-primary">
            <TypedText
              phrases={[
                "MERN Stack Developer",
                "Frontend Engineer",
                "React Specialist",
                "Node.js Developer",
              ]}
              typingSpeed={70}
            />
          </div>
          
          <p className="max-w-2xl mx-auto text-muted-foreground mb-8">
            I build exceptional and accessible digital experiences for the web.
            Focused on creating clean, efficient, and user-friendly applications.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button asChild size="lg" className="gap-2">
              <a href="#projects">
                View Projects <ArrowDown className="h-4 w-4" />
              </a>
            </Button>
            
            <Button variant="outline" size="lg" className="gap-2">
              <Download className="h-4 w-4" />
              Download Resume
            </Button>
          </div>
          
          <div className="flex justify-center gap-4">
            {socialLinks.map((link) => (
              <Button
                key={link.name}
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-primary/10 hover-scale"
                asChild
              >
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector("#about")?.scrollIntoView({
              behavior: "smooth",
            });
          }}
          aria-label="Scroll down"
        >
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </a>
      </div>
    </section>
  );
}
