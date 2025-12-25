import { motion } from "framer-motion";
import { ExternalLink, Code2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  icon?: React.ReactNode;
}

export function ProjectCard({ title, description, tags, icon }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group relative h-full bg-card rounded-2xl border border-border/50 p-6 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
          {icon || <Code2 size={24} />}
        </div>
        <ExternalLink className="text-muted-foreground group-hover:text-primary transition-colors" size={20} />
      </div>

      <h3 className="text-xl font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed mb-6">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mt-auto">
        {tags.map((tag) => (
          <Badge 
            key={tag} 
            variant="secondary" 
            className="bg-secondary text-secondary-foreground font-normal text-xs px-3 py-1 rounded-md"
          >
            {tag}
          </Badge>
        ))}
      </div>
    </motion.div>
  );
}
