import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";
import { gsap } from "gsap";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dotRef = useRef(null);
  const devRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });

    // Initial state: show dot
    tl.call(() => {
      dotRef.current.textContent = ".";
      gsap.set(dotRef.current, {
        opacity: 1,
        marginLeft: "0.1em",
      });
      gsap.set(devRef.current, { x: 0 });
    });

    // Step 1: Hide the dot
    tl.to(dotRef.current, {
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
    });

    // Move "dev" to the left while dot is hidden
    tl.to(
      devRef.current,
      {
        x: -5,
        duration: 0.6,
        ease: "power2.out",
      },
      "<"
    );

    // Step 3: Show dot again
    tl.to(dotRef.current, {
      opacity: 1,
      duration: 0.5,
      ease: "power2.in",
    });

    // Step 4: Move "dev" back to original position
    tl.to(devRef.current, {
      x: 0,
      duration: 0.5,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <a href="#home" className="text-xl font-bold gradient-text">
          <span className="text-blue-500">Ujjal</span>
          <span ref={dotRef} className="inline-block text-white">
            .
          </span>
          <span ref={devRef} className="inline-block text-white">
            dev
          </span>
          {/* <span className="text-white">dev</span> */}
        </a>

        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector(item.href)?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <ThemeToggle />

          <Button
            className="md:hidden"
            size="icon"
            variant="ghost"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-background shadow-md z-50 py-4 px-6 flex flex-col space-y-4 animate-fade-in">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-foreground/80 hover:text-primary py-2 transition-colors font-medium"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector(item.href)?.scrollIntoView({
                  behavior: "smooth",
                });
                setIsOpen(false);
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
