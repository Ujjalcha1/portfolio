
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface TimelineItemProps {
  title: string;
  company?: string;
  date: string;
  description: string;
  tags?: string[];
  type: "work" | "education";
  className?: string;
}

export function TimelineItem({
  title,
  company,
  date,
  description,
  tags,
  type,
  className,
}: TimelineItemProps) {
  return (
    <div className={cn(
      "timeline-item relative pl-10 pb-10 last:pb-0",
      className
    )}>
      <div className="absolute left-0 top-1.5 h-7 w-7 rounded-full border-2 border-border flex items-center justify-center bg-card">
        <div className={cn(
          "h-3 w-3 rounded-full",
          type === "work" ? "bg-primary" : "bg-secondary"
        )} />
      </div>
      
      <div className="mb-1 flex flex-wrap items-center">
        <h3 className="text-lg font-semibold">{title}</h3>
        {company && <span className="ml-2 text-primary">{company}</span>}
      </div>
      
      <div className="mb-2 flex items-center text-sm text-muted-foreground">
        <span>{date}</span>
        <Badge variant={type === "work" ? "default" : "secondary"} className="ml-3">
          {type === "work" ? "Work" : "Education"}
        </Badge>
      </div>
      
      <p className="mb-2 text-muted-foreground">{description}</p>
      
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      )}
    </div>
  );
}
