
import { cn } from "@/lib/utils";

interface SkillBadgeProps {
  name: string;
  icon: React.ReactNode;
  className?: string;
  level?: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}

export function SkillBadge({ name, icon, className, level }: SkillBadgeProps) {
  const getLevelColor = () => {
    switch (level) {
      case 'beginner': return 'bg-blue-100 dark:bg-blue-900/30';
      case 'intermediate': return 'bg-blue-200 dark:bg-blue-900/50';
      case 'advanced': return 'bg-blue-300 dark:bg-blue-800/70';
      case 'expert': return 'bg-primary/20 dark:bg-primary/40';
      default: return 'bg-card'; 
    }
  };
  
  return (
    <div 
      className={cn(
        "flex items-center gap-2 px-4 py-2 rounded-full border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-md hover:scale-105", 
        getLevelColor(),
        className
      )}
    >
      <div className="text-primary">{icon}</div>
      <span className="font-medium">{name}</span>
    </div>
  );
}
