import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle: string;
  alignment?: "left" | "center";
}

export function SectionHeading({ title, subtitle, alignment = "center" }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mb-16 ${alignment === "center" ? "text-center" : "text-left"}`}
    >
      <span className="text-primary font-bold tracking-wider text-sm uppercase mb-2 block">
        {subtitle}
      </span>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
        {title}
      </h2>
      <div
        className={`mt-4 h-1.5 w-20 bg-primary rounded-full ${
          alignment === "center" ? "mx-auto" : ""
        }`}
      />
    </motion.div>
  );
}
