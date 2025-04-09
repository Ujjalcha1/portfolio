
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  id: string;
  className?: string;
  children: React.ReactNode;
}

const Section = forwardRef<HTMLDivElement, SectionProps>(
  ({ id, className, children, ...props }, ref) => {
    return (
      <section
        id={id}
        ref={ref}
        className={cn("py-20 px-4 md:px-6 lg:px-8", className)}
        {...props}
      >
        <div className="container mx-auto">
          {children}
        </div>
      </section>
    );
  }
);

Section.displayName = "Section";

export { Section };
