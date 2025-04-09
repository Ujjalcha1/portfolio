import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TypedText } from "@/components/TypedText";
import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";
import { Section } from "@/components/Section";

const socialLinks = [
  {
    name: "GitHub",
    icon: <Github className="h-5 w-5" />,
    href: "https://github.com/UjjalCha1",
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
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", setCanvasSize);
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
        // Enhanced color palette with more vibrant blues and purples
        this.color = `hsla(${Math.random() * 60 + 210}, 80%, 60%, ${
          Math.random() * 0.4 + 0.2
        })`;
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
    const particleCount = Math.min(120, Math.floor(window.innerWidth / 10));

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

          if (distance < 120) {
            const opacity = 1 - distance / 120;
            ctx.strokeStyle = `rgba(120, 180, 255, ${opacity * 0.3})`;
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
      window.removeEventListener("resize", setCanvasSize);
    };
  }, []);

  return (
    <Section
      id="home"
      className={cn(
        "min-h-screen flex items-center justify-center relative overflow-hidden pt-16",
        className
      )}
      hasCustomBackground={true}
    >
      {/* Background animation canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 -z-10" />

      {/* Enhanced background gradient blend */}
      <div className="absolute inset-0 -z-5">
        {/* Primary gradient */}
        {/* <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent opacity-60" /> */}

        {/* Secondary gradient */}
        <div className="absolute inset-0 bg-gradient-to-tr from-secondary/40 to-transparent opacity-0" />

        {/* Bottom left accent */}
        {/* <div className="absolute bottom-0 left-0 w-2/3 h-2/3 bg-gradient-to-tr from-purple-500/20 via-blue-500/10 to-transparent rounded-full blur-3xl" /> */}

        {/* Top right accent */}
        <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-gradient-to-bl from-blue-500/20 via-sky-500/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Content Area */}
          <div className="lg:col-span-8 text-center lg:text-left animate-fade-in">
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
                  "MongoDB Expert",
                ]}
                typingSpeed={70}
              />
            </div>

            <p className="max-w-2xl mx-auto lg:mx-0 text-muted-foreground mb-8">
              Passionate and results-oriented MERN Stack Developer with over 3
              years of experience designing, developing, and deploying
              full-stack web applications. Proficient in MongoDB, Express.js,
              React.js, and Node.js.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
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

            <div className="flex justify-center lg:justify-start gap-4">
              {socialLinks.map((link) => (
                <Button
                  key={link.name}
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:bg-primary/10 transform hover:scale-105"
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

          {/* Visual/Image Area */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              {/* Enhanced decorative elements with better color blending */}
              <div className="absolute -z-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
              <div className="absolute -z-10 w-60 h-60 bg-secondary/20 rounded-full blur-3xl -top-10 -right-10"></div>

              {/* Code window mockup with glassmorphism effect */}
              <div className="bg-card/70 border border-border/50 rounded-lg shadow-lg p-4 w-96 h-60  backdrop-blur-md">
                <div className="flex items-center mb-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <div className="text-xs text-muted-foreground ml-2">
                    developer.js
                  </div>
                </div>

                <div className="font-mono text-sm">
                  <pre className="text-muted-foreground">
                    <code>const developer = {"{"}</code>
                  </pre>
                  <pre className="pl-4">
                    <code>
                      <span className="text-blue-500">name</span>:{" "}
                      <span className="text-green-500">'Ujjal Chatterjee'</span>
                      ,
                    </code>
                  </pre>
                  <pre className="pl-4">
                    <code>
                      <span className="text-blue-500">role</span>:{" "}
                      <span className="text-green-500">'MERN Developer'</span>,
                    </code>
                  </pre>
                  <pre className="pl-4">
                    <code>
                      <span className="text-blue-500">skills</span>: [
                      <span className="text-green-500">'MongoDB'</span>,{" "}
                      <span className="text-green-500">'Express'</span>,
                    </code>
                  </pre>
                  <pre className="pl-9">
                    <code>
                      <span className="text-green-500">'React'</span>,{" "}
                      <span className="text-green-500">'Node.js'</span>],
                    </code>
                  </pre>
                  <pre className="pl-4">
                    <code>
                      <span className="text-blue-500">loves</span>:{" "}
                      <span className="text-green-500">
                        'Crafting Clean Code'
                      </span>
                    </code>
                  </pre>
                  <pre className="text-muted-foreground">
                    <code>{"}"}</code>
                  </pre>
                </div>
              </div>
            </div>
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
    </Section>
  );
}
