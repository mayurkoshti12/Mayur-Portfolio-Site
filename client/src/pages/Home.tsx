import { motion } from "framer-motion";
import { 
  Github, 
  Linkedin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Mail, 
  Phone, 
  MapPin, 
  Download,
  Database,
  Layout,
  Server,
  Code
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { ContactForm } from "@/components/ContactForm";

// Import images from assets as per instructions
import profileImage from "/images/logo.jpg";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* HERO SECTION */}
      <section id="hero" className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-primary/5 rounded-full blur-[100px] transform translate-x-1/4 -translate-y-1/4" />
          <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-blue-500/5 rounded-full blur-[100px] transform -translate-x-1/4 translate-y-1/4" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
            <motion.div 
              className="lg:w-1/2 space-y-8 text-center lg:text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-4">
                <span className="inline-block px-4 py-2 rounded-full bg-secondary text-primary font-semibold text-sm tracking-wider">
                  PROJECT MANAGER & DEVELOPER
                </span>
                <h1 className="text-5xl md:text-7xl font-display font-extrabold tracking-tight leading-[1.1]">
                  Hello, I'm <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-primary">
                    Mayur Koshti
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Experienced IT professional with 15 years in the industry. 
                  Skilled in project management, client relations, and delivering 
                  end-to-end web & mobile solutions.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Button className="h-14 px-8 text-lg rounded-full shadow-xl shadow-primary/20 bg-primary hover:bg-primary/90 text-white">
                  <a href="#projects">View My Work</a>
                </Button>
                <Button variant="outline" className="h-14 px-8 text-lg rounded-full border-2">
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </Button>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-6 pt-4">
                {[
                  { icon: <Linkedin size={24} />, href: "https://linkedin.com" },
                  { icon: <Github size={24} />, href: "https://github.com" },
                  { icon: <Twitter size={24} />, href: "https://x.com" },
                  { icon: <Instagram size={24} />, href: "https://instagram.com" },
                ].map((social, i) => (
                  <a 
                    key={i} 
                    href={social.href} 
                    target="_blank" 
                    rel="noreferrer"
                    className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-1"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div 
              className="lg:w-1/2 flex justify-center lg:justify-end"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative w-72 h-72 md:w-96 md:h-96">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl transform translate-y-4" />
                <div className="relative w-full h-full rounded-full border-8 border-background shadow-2xl overflow-hidden">
                  <img 
                    src={profileImage} 
                    alt="Mayur Koshti" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Floating Badge 1 */}
                <motion.div 
                  className="absolute -left-4 top-10 bg-card p-4 rounded-xl shadow-lg border border-border/50 flex items-center gap-3"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                >
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-lg">
                    <Layout size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-semibold">Project Management</p>
                    <p className="text-sm font-bold">15+ Years</p>
                  </div>
                </motion.div>

                {/* Floating Badge 2 */}
                <motion.div 
                  className="absolute -right-4 bottom-10 bg-card p-4 rounded-xl shadow-lg border border-border/50 flex items-center gap-3"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                >
                  <div className="p-2 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-lg">
                    <Code size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-semibold">Web Development</p>
                    <p className="text-sm font-bold">Full Stack</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="About Me" subtitle="My Story" />
          
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              I am a seasoned Project Manager and Senior Developer with a robust background in software development.
              Starting my journey as a trainee in 2008, I have evolved through various roles including SEO Link Builder,
              Programmer, and Team Lead. My expertise spans across mobile app development, data scraping, and managing
              complex web projects. I pride myself on bridging the gap between technical execution and business objectives.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {[
                { label: "Experience", value: "15+ Years" },
                { label: "Projects", value: "100+" },
                { label: "Clients", value: "Global" },
                { label: "Availability", value: "Freelance" },
              ].map((stat, i) => (
                <div key={i} className="p-6 bg-card rounded-xl border border-border/50 shadow-sm">
                  <h4 className="text-3xl font-display font-bold text-primary mb-2">{stat.value}</h4>
                  <p className="text-muted-foreground font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Work Experience" subtitle="My Career Path" />
          <ExperienceTimeline />
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Featured Projects" subtitle="Recent Work" />
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              { 
                title: "MyEreturn", 
                desc: "A comprehensive tax return filing platform built with Flutter for mobile and Laravel backend.", 
                tags: ["Flutter", "Laravel", "MySQL"] 
              },
              { 
                title: "WeSlides", 
                desc: "Presentation sharing platform developed using WordPress and Node.js for real-time features.", 
                tags: ["WordPress", "Node.js", "React"] 
              },
              { 
                title: "Safariremit", 
                desc: "Secure international money remittance application with complex transaction handling.", 
                tags: ["Laravel", "FinTech", "API Integration"] 
              },
              { 
                title: "Codequality", 
                desc: "Corporate website for a software agency showcasing services and portfolio.", 
                tags: ["WordPress", "Custom Theme", "SEO"] 
              },
              { 
                title: "IfSol UK", 
                desc: "Business management solution for a UK-based client using PHP CodeIgniter.", 
                tags: ["PHP", "CodeIgniter", "Bootstrap"] 
              },
              { 
                title: "Legendcare", 
                desc: "Healthcare management system streamlining patient records and appointments.", 
                tags: ["Laravel", "PostgreSQL", "Healthcare"] 
              },
              { 
                title: "AlgasTech", 
                desc: "Industrial technology company website with product catalog and inquiry system.", 
                tags: ["WordPress", "WooCommerce", "Catalog"] 
              },
            ].map((project, i) => (
              <motion.div key={i} variants={itemVariants}>
                <ProjectCard 
                  title={project.title} 
                  description={project.desc} 
                  tags={project.tags} 
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Technical Expertise" subtitle="Skills & Tools" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                category: "PM Tools",
                icon: <Layout className="w-8 h-8 text-primary" />,
                skills: ["Jira", "ClickUp", "Zoho", "Trello", "Slack"]
              },
              {
                category: "Languages",
                icon: <Code className="w-8 h-8 text-primary" />,
                skills: ["PHP", "Laravel", "WordPress", "JavaScript", "Python", "Dart/Flutter", "Node.js"]
              },
              {
                category: "Databases",
                icon: <Database className="w-8 h-8 text-primary" />,
                skills: ["MySQL", "MongoDB", "PostgreSQL", "Firebase", "Redis"]
              },
              {
                category: "Cloud/DevOps",
                icon: <Server className="w-8 h-8 text-primary" />,
                skills: ["AWS", "Docker", "CI/CD Pipelines", "Git", "Linux Administration"]
              },
            ].map((group, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="bg-card p-8 rounded-2xl border border-border/50 shadow-sm hover:border-primary/50 transition-colors"
              >
                <div className="mb-6 p-4 rounded-full bg-secondary w-fit">
                  {group.icon}
                </div>
                <h3 className="text-xl font-bold font-display mb-4">{group.category}</h3>
                <ul className="space-y-2">
                  {group.skills.map((skill) => (
                    <li key={skill} className="flex items-center text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION SECTION */}
      <section className="py-16 bg-primary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] transform translate-x-1/2 -translate-y-1/2" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-12">Education</h2>
          
          <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16">
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-colors max-w-sm mx-auto w-full">
              <h3 className="text-2xl font-bold mb-2">B.E. in Information Technology</h3>
              <p className="text-white/80 font-medium">Bhavnagar University</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-colors max-w-sm mx-auto w-full">
              <h3 className="text-2xl font-bold mb-2">Diploma in IT</h3>
              <p className="text-white/80 font-medium">Technical Education Board</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="text-left mb-8">
                <span className="text-primary font-bold tracking-wider text-sm uppercase mb-2 block">
                  Get In Touch
                </span>
                <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">
                  Let's Work Together
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Have a project in mind or want to discuss a new opportunity? 
                  I'm currently available for freelance projects and consulting.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 rounded-xl bg-card border border-border/50">
                  <div className="p-3 bg-primary/10 text-primary rounded-full">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-semibold">Phone</p>
                    <p className="text-lg font-bold">+91-8128718783</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 rounded-xl bg-card border border-border/50">
                  <div className="p-3 bg-primary/10 text-primary rounded-full">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-semibold">Email</p>
                    <p className="text-lg font-bold">mayurkoshti12@gmail.in</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 rounded-xl bg-card border border-border/50">
                  <div className="p-3 bg-primary/10 text-primary rounded-full">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-semibold">Location</p>
                    <p className="text-lg font-bold">Gujarat, India</p>
                  </div>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-foreground text-background py-12 border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-display font-bold mb-2">Mayur Koshti</h2>
              <p className="text-white/60 text-sm">
                Project Manager & Senior Developer
              </p>
            </div>

            <div className="flex gap-6">
              {[
                { icon: <Linkedin size={20} />, href: "https://linkedin.com" },
                { icon: <Github size={20} />, href: "https://github.com" },
                { icon: <Facebook size={20} />, href: "https://facebook.com" },
                { icon: <Twitter size={20} />, href: "https://x.com" },
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  className="text-white/60 hover:text-primary transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-white/10 text-center text-white/40 text-sm">
            <p>&copy; {new Date().getFullYear()} Mayur Koshti. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
