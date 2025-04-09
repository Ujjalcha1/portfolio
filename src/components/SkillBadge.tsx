
import { cn } from "@/lib/utils";

interface SkillBadgeProps {
  name: string;
  icon: React.ReactNode;
  className?: string;
}

export function SkillBadge({ name, icon, className }: SkillBadgeProps) {
  return (
    <div 
      className={cn(
        "flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border hover:border-primary/50 transition-all hover:shadow-md hover:scale-105", 
        className
      )}
    >
      <div className="text-primary">{icon}</div>
      <span className="font-medium">{name}</span>
    </div>
  );
}
