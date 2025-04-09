
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  id: string;
  className?: string;
  children: React.ReactNode;
  hasCustomBackground?: boolean;
}

const Section = forwardRef<HTMLDivElement, SectionProps>(
  ({ id, className, children, hasCustomBackground = false, ...props }, ref) => {
    return (
      <section
        id={id}
        ref={ref}
        className={cn(
          "py-20 px-4 md:px-6 lg:px-8 relative", 
          className,
          !hasCustomBackground && "overflow-hidden" // Only add overflow hidden if not using custom background
        )}
        {...props}
      >
        {!hasCustomBackground && (
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent to-background/5 dark:from-transparent dark:to-background/10" />
        )}
        <div className="container mx-auto relative z-10">
          {children}
        </div>
      </section>
    );
  }
);

Section.displayName = "Section";

export { Section };
