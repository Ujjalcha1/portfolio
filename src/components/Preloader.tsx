
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (progress < 100) {
        setProgress(prev => Math.min(prev + (Math.random() * 15), 100));
      } else {
        setTimeout(() => {
          setIsLoading(false);
          document.body.style.overflow = "visible";
        }, 500);
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [progress]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  if (!isLoading) return null;

  return (
    <div className={cn(
      "fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background transition-opacity duration-500",
      progress === 100 ? "opacity-0" : "opacity-100"
    )}>
      <div className="relative mb-8">
        <h1 className="text-4xl font-bold gradient-text animate-breathe">DevPortfolio</h1>
      </div>

      <div className="w-64 h-1.5 bg-muted rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-primary to-secondary"
          style={{ width: `${progress}%` }}
        />
      </div>
      
      <p className="mt-4 text-sm text-muted-foreground">
        {progress.toFixed(0)}%
      </p>
    </div>
  );
}
