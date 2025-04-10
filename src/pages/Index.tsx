import { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Preloader } from "@/components/Preloader";
import { HeroSection } from "@/sections/HeroSection";
import { AboutSection } from "@/sections/AboutSection";
import { ProjectsSection } from "@/sections/ProjectsSection";
import { ExperienceSection } from "@/sections/ExperienceSection";
import { ContactSection } from "@/sections/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "auto";
    }, 1000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <ThemeProvider defaultTheme="dark">
      {isLoading && <Preloader />}

      <div className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-grow">
          <HeroSection />
          <AboutSection />
          {/* <ProjectsSection /> */}
          <ExperienceSection />
          <ContactSection />
        </main>

        <Footer />
      </div>

      <ScrollToTop />
    </ThemeProvider>
  );
};

export default Index;
