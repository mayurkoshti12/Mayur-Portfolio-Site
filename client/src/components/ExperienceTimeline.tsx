import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
}

const experiences: ExperienceItem[] = [
  {
    role: "Freelancer (WordPress, PHP, Scraping)",
    company: "Self-Employed",
    period: "Oct 2024 - Present",
    description: "Developing custom solutions, web scraping services, and WordPress plugin development for international clients.",
  },
  {
    role: "Project Manager",
    company: "Codequality Technologies",
    period: "Oct 2023 - Sept 2024",
    description: "Led development teams, managed client expectations, and ensured timely delivery of high-quality software projects.",
  },
  {
    role: "Senior Developer",
    company: "AVI Web Solutions",
    period: "May 2023 - Aug 2023",
    description: "Architected scalable web applications and mentored junior developers in best practices.",
  },
  {
    role: "Programmer",
    company: "Thym Infoware",
    period: "Sept 2010 - Feb 2023",
    description: "Core developer for over a decade, contributing to critical legacy systems and modernization efforts.",
  },
  {
    role: "SEO Link Builder",
    company: "Elsner Technologies",
    period: "May 2010 - Aug 2010",
    description: "Executed SEO strategies to improve search engine rankings and organic traffic.",
  },
  {
    role: "Trainee",
    company: "Neesa Technologies",
    period: "Dec 2008 - Jul 2009",
    description: "Initial foray into professional software development and learning industry standards.",
  },
];

export function ExperienceTimeline() {
  return (
    <div className="relative max-w-4xl mx-auto pl-8 md:pl-0">
      {/* Central Line */}
      <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform -translate-x-1/2 md:translate-x-0" />

      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className={`relative mb-12 md:flex ${
            index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
          } items-center justify-between`}
        >
          {/* Dot on Line */}
          <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background transform -translate-x-[calc(50%+1px)] md:-translate-x-1/2 z-10 shadow-sm" />

          {/* Content Card */}
          <div className="ml-12 md:ml-0 md:w-[45%]">
            <div className="bg-card p-6 rounded-xl border border-border/50 shadow-sm hover:shadow-md transition-shadow">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3">
                {exp.period}
              </span>
              <h3 className="text-lg font-bold text-foreground">{exp.role}</h3>
              <div className="flex items-center text-muted-foreground text-sm font-medium mb-3">
                <Briefcase size={14} className="mr-2" />
                {exp.company}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {exp.description}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
