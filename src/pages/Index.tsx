import { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Preloader } from "@/components/Preloader";
import { HeroSection } from "@/sections/HeroSection";
import { AboutSection } from "@/sections/AboutSection";
import { ExperienceSection } from "@/sections/ExperienceSection";
import { ContactSection } from "@/sections/ContactSection";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

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
      <SEO />
      {isLoading && <Preloader />}

      <div className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-grow flex flex-col items-center w-full max-w-[100vw] overflow-x-hidden">
          <div className="w-full">
            <HeroSection />
          </div>
          <div className="w-full">
            <AboutSection />
          </div>
          <div className="w-full">
            <ExperienceSection />
          </div>
          <div className="w-full">
            <ContactSection />
          </div>
        </main>

        <Footer />
      </div>

      <ScrollToTop />
    </ThemeProvider>
  );
};

export default Index;
