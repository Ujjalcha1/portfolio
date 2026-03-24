
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  className?: string;
}

export function ProjectCard({
  title,
  description,
  image,
  tags,
  demoUrl,
  githubUrl,
  className,
}: ProjectCardProps) {
  return (
    <div className={cn(
      "group rounded-2xl overflow-hidden glass-card border border-white/10 hover-scale flex flex-col h-full",
      className
    )}>
      <div className="relative h-56 overflow-hidden">
        <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10 mix-blend-overlay"></div>
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold mb-3 tracking-tight">{title}</h3>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs bg-secondary/50 hover:bg-secondary/80 text-foreground/80 backdrop-blur-md">
              {tag}
            </Badge>
          ))}
        </div>
        
        <p className="text-muted-foreground mb-6 text-sm leading-relaxed flex-grow">
          {description}
        </p>
        
        <div className="flex gap-3 mt-auto pt-4 border-t border-border/50">
          {githubUrl && (
            <Button variant="outline" size="sm" className="bg-transparent border-foreground/20 hover:bg-foreground hover:text-background" asChild>
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" /> Code
              </a>
            </Button>
          )}
          {demoUrl && (
            <Button size="sm" className="bg-primary hover:bg-primary/90 text-white shadow-lg opacity-90 hover:opacity-100 transition-opacity" asChild>
              <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
