import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center" | "right";
}

export function SectionTitle({
  title,
  subtitle,
  className,
  align = "center",
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "mb-12",
        {
          "text-center": align === "center",
          "text-left": align === "left",
          "text-right": align === "right",
        },
        className
      )}
    >
      <h2 className="text-3xl md:text-4xl font-bold gradient-text relative mb-2 inline-block">
        {title}
        <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary rounded-full transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
      </h2>
      {subtitle && (
        <p className="text-muted-foreground max-w-2xl mx-auto mt-2">
          {subtitle}
        </p>
      )}
      <div
        className={cn("mt-4 flex", {
          "justify-center": align === "center",
          "justify-start": align === "left",
          "justify-end": align === "right",
        })}
      >
        <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full" />
      </div>
    </div>
  );
}
