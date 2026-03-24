import { Section } from "@/components/Section";
import { TypedText } from "@/components/TypedText";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import resume from "../assets/resume.pdf";

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
  const contentRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

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
        this.color = `hsla(${Math.random() * 60 + 230}, 90%, 65%, ${
          Math.random() * 0.4 + 0.1
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
    const particleCount = Math.min(100, Math.floor(window.innerWidth / 12));

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

          if (distance < 150) {
            const opacity = 1 - distance / 150;
            ctx.strokeStyle = `rgba(139, 92, 246, ${opacity * 0.25})`;
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

  // GSAP Entrance Animations
  useEffect(() => {
    if (!contentRef.current || !visualRef.current) return;
    
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      
      tl.fromTo(
        contentRef.current.children,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.15, delay: 0.2 }
      ).fromTo(
        visualRef.current,
        { scale: 0.8, opacity: 0, rotationY: 15 },
        { scale: 1, opacity: 1, rotationY: 0, duration: 1.2 },
        "-=0.8"
      );

      // Gentle floating animation on code window
      gsap.to(visualRef.current, {
        y: -15,
        rotationZ: 1,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
      
    }, [contentRef, visualRef]); // scope

    return () => ctx.revert();
  }, []);

  return (
    <Section
      id="home"
      className={cn(
        "min-h-screen flex items-center justify-center relative overflow-hidden pt-16",
        className,
      )}
      hasCustomBackground={true}
    >
      {/* Background animation canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 -z-10" />

      {/* Enhanced background gradient blend */}
      <div className="absolute inset-0 -z-5 pointer-events-none">
        {/* Top right accent */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px]" />
        {/* Bottom left accent */}
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px]" />
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Content Area */}
          <div
            ref={contentRef}
            className="lg:col-span-7 text-center lg:text-left"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tighter leading-tight">
              Ujjal Kr. <br className="hidden lg:block"/>
              <span className="gradient-text">Chatterjee</span>
            </h1>

            <div className="text-2xl md:text-3xl font-semibold mb-6">
              <span className="text-muted-foreground mr-2">I build</span>
              <span className="text-foreground">
                <TypedText
                  phrases={[
                    "Scalable Web Apps",
                    "Modern UIs in React",
                    "Robust Node APIs",
                    "Full-Stack Solutions",
                  ]}
                  typingSpeed={70}
                />
              </span>
            </div>

            <p className="max-w-xl mx-auto lg:mx-0 text-muted-foreground/90 text-lg mb-10 leading-relaxed font-medium">
              Passionate MERN Stack Developer shaping digital experiences. Over 3 years transforming complex requirements into elegant, high-performance web applications using modern web technologies.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-5 mb-8">
              <Button
                variant="default"
                size="lg"
                className="gap-2 h-14 px-8 rounded-full shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] transition-shadow text-md"
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = resume;
                  link.download = "Ujjal_Chatterjee_Resume.pdf";
                  link.click();
                }}
              >
                <Download className="h-5 w-5" />
                Download Resume
              </Button>
            </div>

            <div className="flex justify-center lg:justify-start gap-4">
              {socialLinks.map((link) => (
                <Button
                  key={link.name}
                  variant="outline"
                  size="icon"
                  className="rounded-full h-12 w-12 border-border/50 bg-background/50 backdrop-blur-sm hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
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
          <div className="lg:col-span-5 flex justify-center lg:justify-end" ref={visualRef}>
            <div className="relative w-full max-w-lg perspective-1000">
              {/* Code window mockup with advanced glassmorphism effect */}
              <div
                className="glass-card shadow-2xl p-6 w-full min-h-[400px] h-auto rounded-xl border border-white/20 relative"
              >
                <div className="flex items-center mb-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <div className="text-xs text-muted-foreground ml-2">
                    developer.js
                  </div>
                </div>

                <div className="font-mono text-sm">
                  <pre className="text-muted-foreground whitespace-pre-wrap break-words">
                    <code>const developer = {"{"}</code>
                  </pre>

                  <pre className="pl-4 whitespace-pre-wrap break-words">
                    <code>
                      <span className="text-blue-500">name</span>:{" "}
                      <span className="text-green-500">'Ujjal Chatterjee'</span>
                      ,
                    </code>
                  </pre>

                  <pre className="pl-4 whitespace-pre-wrap break-words">
                    <code>
                      <span className="text-blue-500">role</span>:{" "}
                      <span className="text-green-500">
                        'Full Stack Developer'
                      </span>
                      ,
                    </code>
                  </pre>

                  <pre className="pl-4 whitespace-pre-wrap break-words">
                    <code>
                      <span className="text-blue-500">skills</span>: [
                    </code>
                  </pre>

                  <pre className="pl-9 whitespace-pre-wrap break-words">
                    <code>
                      <span className="text-green-500">'MongoDB'</span>,{" "}
                      <span className="text-green-500">'Express'</span>,{" "}
                      <span className="text-green-500">'React'</span>,{" "}
                      <span className="text-green-500">'Node.js'</span>,
                    </code>
                  </pre>

                  <pre className="pl-9 whitespace-pre-wrap break-words">
                    <code>
                      <span className="text-green-500">'Next.js'</span>,{" "}
                      <span className="text-green-500">'NestJS'</span>,{" "}
                      <span className="text-green-500">'TypeScript'</span>,{" "}
                      <span className="text-green-500">'PostgreSQL'</span>,
                    </code>
                  </pre>

                  <pre className="pl-9 whitespace-pre-wrap break-words">
                    <code>
                      <span className="text-green-500">'Docker'</span>,{" "}
                      <span className="text-green-500">'Git'</span>,{" "}
                      <span className="text-green-500">'REST API'</span>
                      ],
                    </code>
                  </pre>

                  <pre className="pl-4 whitespace-pre-wrap break-words">
                    <code>
                      <span className="text-blue-500">loves</span>:{" "}
                      <span className="text-green-500">
                        'Clean Architecture'
                      </span>
                    </code>
                  </pre>

                  <pre className="text-muted-foreground whitespace-pre-wrap break-words">
                    <code>{"}"}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
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
