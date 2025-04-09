
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TypedText } from "@/components/TypedText";
import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

const socialLinks = [
  {
    name: "GitHub",
    icon: <Github className="h-5 w-5" />,
    href: "https://github.com/Ujjal1ha1",
  },
  {
    name: "LinkedIn",
    icon: <Linkedin className="h-5 w-5" />,
    href: "https://www.linkedin.com/in/ujjalkrchatterjee",
  },
  {
    name: "Email",
    icon: <Mail className="h-5 w-5" />,
    href: "mailto:ujjalkrchatterjee08@gmail.com",
  },
];

interface HeroSectionProps {
  className?: string;
}

export function HeroSection({ className }: HeroSectionProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  
  // Particle animation effect
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', setCanvasSize);
    setCanvasSize();

    // Particle class
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
        this.color = `hsla(${Math.random() * 60 + 180}, 70%, 60%, ${Math.random() * 0.3 + 0.2})`;
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        if (this.x > canvas.width) this.x = 0;
        else if (this.x < 0) this.x = canvas.width;
        
        if (this.y > canvas.height) this.y = 0;
        else if (this.y < 0) this.y = canvas.height;
      }
      
      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    // Create particle array
    const particles: Particle[] = [];
    const particleCount = Math.min(100, Math.floor(window.innerWidth / 10));
    
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
    
    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw and update particles
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }
      
      // Draw connections
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            const opacity = 1 - distance / 100;
            ctx.strokeStyle = `rgba(100, 150, 255, ${opacity * 0.2})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);

  return (
    <section
      id="home"
      className={cn(
        "min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-16",
        className
      )}
    >
      {/* Background animation canvas */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 -z-10"
      />
      
      {/* Background gradient */}
      <div className="absolute inset-0 -z-5 bg-[radial-gradient(circle_at_bottom_left,hsl(var(--primary))_0%,transparent_50%),radial-gradient(circle_at_top_right,hsl(var(--secondary))_0%,transparent_50%)] dark:opacity-20 opacity-10" />
      
      <div className="container px-4 mx-auto text-center">
        <div className="mb-6 rounded-full w-32 h-32 mx-auto overflow-hidden border-4 border-primary/20 shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3"
            alt="Ujjal Chatterjee Portrait"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Ujjal Chatterjee
          </h1>
          
          <div className="text-xl md:text-2xl font-medium mb-6 text-primary">
            <TypedText
              phrases={[
                "MERN Stack Developer",
                "Software Engineer",
                "React.js Developer",
                "Node.js Developer",
                "MongoDB Expert"
              ]}
              typingSpeed={70}
            />
          </div>
          
          <p className="max-w-2xl mx-auto text-muted-foreground mb-8">
            Passionate and results-oriented MERN Stack Developer with over 3 years of experience
            designing, developing, and deploying full-stack web applications. Proficient in MongoDB, Express.js,
            React.js, and Node.js.
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
