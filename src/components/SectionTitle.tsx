
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionTitle({ 
  title, 
  subtitle, 
  className 
}: SectionTitleProps) {
  return (
    <div className={cn("text-center mb-12", className)}>
      <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-2">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className="mt-4 flex justify-center">
        <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full" />
      </div>
    </div>
  );
}
