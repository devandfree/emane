import { motion } from "motion/react";
import { 
  AlertTriangle,
  Briefcase, 
  ChevronRight, 
  Code,
  Cpu, 
  Database, 
  ExternalLink, 
  FileText, 
  Github, 
  Instagram,
  Layers, 
  Linkedin, 
  Mail, 
  Menu, 
  MessageCircle,
  Monitor, 
  PieChart, 
  RefreshCw,
  Search,
  Settings,
  ShieldCheck, 
  User, 
  Users,
  X,
  Zap
} from "lucide-react";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import Blog from "./components/Blog";
import BlogPost from "./components/BlogPost";
import ScrollToTop from "./components/ScrollToTop";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "À propos", href: isHomePage ? "#about" : "/#about" },
    { name: "Expertise", href: isHomePage ? "#expertise" : "/#expertise" },
    { name: "Expérience", href: isHomePage ? "#experience" : "/#experience" },
    { name: "Projets", href: isHomePage ? "#projects" : "/#projects" },
    { name: "Blog", href: "/blog", isRoute: true },
    { name: "Contact", href: isHomePage ? "#contact" : "/#contact" },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-black/80 backdrop-blur-md py-4 border-b border-silver-400/10" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link 
          to="/"
          onClick={() => {
            if (window.location.pathname === "/") {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="text-2xl font-bold tracking-tighter hover:opacity-80 transition-opacity"
        >
          semane<span className="text-silver-400">.</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              {link.isRoute ? (
                <Link
                  to={link.href}
                  className="text-sm font-medium text-silver-300 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  href={link.href}
                  className="text-sm font-medium text-silver-300 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              )}
            </motion.div>
          ))}
          <a
            href={isHomePage ? "#contact" : "/#contact"}
            className="px-5 py-2 bg-white text-black text-sm font-bold rounded-sm hover:bg-silver-200 transition-colors"
          >
            Parlons-en
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-silver-100">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-silver-900 border-b border-silver-400/10"
        >
          <div className="px-6 py-8 flex flex-col space-y-6">
            {navLinks.map((link) => (
              link.isRoute ? (
                <Link 
                  key={link.name} 
                  to={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-silver-300"
                >
                  {link.name}
                </Link>
              ) : (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-silver-300"
                >
                  {link.name}
                </a>
              )
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-silver-400/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-silver-400/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-silver-800/50 border border-silver-400/20 text-silver-400 text-xs font-bold mb-6"
            >
              <Zap size={14} />
              <span>IT BUSINESS ANALYST & BPM ENGINEER</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-8"
            >
              Structurer la <span className="silver-gradient">complexité</span>. <br />
              Accélérer la <span className="silver-gradient">performance</span>.
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-silver-400 mb-10 max-w-2xl leading-relaxed"
            >
              J'améliore la performance des processus métier et optimise les stratégies d’entreprise avec une approche structurée, analytique et orientée résultats.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6"
            >
              <a href="#expertise" className="px-8 py-4 bg-white text-black font-bold rounded-sm flex items-center justify-center hover:bg-silver-200 transition-all group">
                Découvrir mon expertise
                <ChevronRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="px-8 py-4 border border-silver-400/30 text-white font-bold rounded-sm flex items-center justify-center hover:bg-white/5 transition-all">
                Me contacter
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="hidden lg:block relative"
          >
            <div className="relative z-10 aspect-square rounded-sm overflow-hidden silver-border silver-glow">
              <img 
                src="https://www.hebergeur-image.com/upload/143.105.152.140-69cf744c9a664.png" 
                alt="Illustration 3D automatisation des processus" 
                className="w-full h-full object-cover grayscale opacity-80 hover:opacity-100 transition-opacity duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-white/20" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-white/20" />
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <div className="w-[1px] h-20 bg-gradient-to-b from-white to-transparent" />
      </motion.div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-silver-900/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-sm overflow-hidden silver-border silver-glow">
              <img 
                src="https://www.hebergeur-image.com/upload/143.105.152.103-69ce8997cf15a.jpg" 
                alt="Steve Emane" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white flex items-center justify-center p-4 rounded-sm hidden md:flex">
              <div className="text-black text-center">
                <div className="text-3xl font-bold">3+</div>
                <div className="text-[10px] font-bold uppercase tracking-widest">Ans d'Expertise</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold text-silver-400 uppercase tracking-[0.3em] mb-4">Qui suis-je ?</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
              Ingénieur Génie Informatique <br />
              <span className="text-silver-400">IT Business Analyst & BPM Engineer</span>
            </h3>
            
            <div className="space-y-6 text-silver-300 leading-relaxed">
              <p>
                À l’interface entre les équipes métier, la direction et les fonctions IT, j’accompagne les organisations dans l’identification, la formalisation et la priorisation de leurs besoins, afin de concevoir et déployer des solutions efficaces, durables et alignées avec leurs objectifs stratégiques.
              </p>
              <p>
                Mon expertise me permet d’intervenir sur l’ensemble de la chaîne de valeur, de l’analyse des processus existants à la mise en œuvre d’initiatives d’amélioration continue, en passant par l’accompagnement de projets de transformation digitale.
              </p>
              <p>
                Reconnu pour ma rigueur, mon sens de l’analyse et ma capacité à structurer des problématiques complexes, je m’engage à délivrer des solutions à forte valeur ajoutée, en combinant vision stratégique et efficacité opérationnelle.
              </p>
            </div>
            
            <div className="mt-10 pt-10 border-t border-silver-400/10 grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-white font-bold mb-2">Approche</h4>
                <p className="text-sm text-silver-400">Analytique & Orientée Résultats</p>
              </div>
              <div>
                <h4 className="text-white font-bold mb-2">Focus</h4>
                <p className="text-sm text-silver-400">Simplification & Performance</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Expertise = () => {
  const skills = [
    {
      title: "Business Process Management (BPM)",
      description: "Identification, modélisation et optimisation des processus métier pour une efficacité opérationnelle maximale.",
      icon: <Layers className="text-white" size={24} />,
    },
    {
      title: "Business Analysis",
      description: "Cadrage des besoins, rédaction de cahiers des charges et interface entre métier et IT.",
      icon: <Monitor className="text-white" size={24} />,
    },
    {
      title: "Transformation Digitale",
      description: "Accompagnement dans le déploiement de solutions technologiques alignées sur les objectifs stratégiques.",
      icon: <Cpu className="text-white" size={24} />,
    },
    {
      title: "Analyse de Données",
      description: "Fiabilisation de la prise de décision grâce à l'exploitation structurée de la data.",
      icon: <PieChart className="text-white" size={24} />,
    },
    {
      title: "Stratégie d'Entreprise",
      description: "Optimisation des performances et alignement des initiatives avec la vision de la direction.",
      icon: <ShieldCheck className="text-white" size={24} />,
    },
    {
      title: "Génie Informatique",
      description: "Base technique solide permettant de comprendre et de structurer des architectures complexes.",
      icon: <Database className="text-white" size={24} />,
    },
    {
      title: "Analyse des Risques",
      description: "Identification et évaluation des menaces potentielles pour sécuriser la continuité des activités.",
      icon: <AlertTriangle className="text-white" size={24} />,
    },
    {
      title: "Gestion du Changement",
      description: "Accompagnement des collaborateurs et des structures dans l'adoption de nouvelles méthodes et outils.",
      icon: <RefreshCw className="text-white" size={24} />,
    },
    {
      title: "Développement Web",
      description: "Création de sites web et micro-apps (métier et SaaS) pour digitaliser vos services.",
      icon: <Code className="text-white" size={24} />,
    },
    {
      title: "Études et Conseils",
      description: "Aide à la décision pour le choix d'outils numériques adaptés aux besoins réels des entreprises.",
      icon: <Search className="text-white" size={24} />,
    },
    {
      title: "Gestion de Projet Agile",
      description: "Pilotage de projets complexes via les méthodologies Scrum et Kanban pour une livraison itérative et de qualité.",
      icon: <Settings className="text-white" size={24} />,
    },
    {
      title: "Analyse UX & Ergonomie",
      description: "Conception d'interfaces centrées utilisateur pour garantir une adoption fluide des outils digitaux.",
      icon: <Users className="text-white" size={24} />,
    }
  ];

  return (
    <section id="expertise" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold text-silver-400 uppercase tracking-[0.3em] mb-4">Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">Domaines d'intervention</h3>
          <p className="text-silver-400">
            Une approche multidimensionnelle pour répondre aux défis de performance et de structuration des organisations modernes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ 
                delay: i * 0.1,
                type: "spring",
                stiffness: 300,
                damping: 20
              }}
              className="p-8 bg-silver-900/50 silver-border rounded-sm hover:bg-silver-800/50 transition-all group cursor-default"
            >
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className="w-12 h-12 bg-silver-800 rounded-sm flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-black transition-colors"
              >
                <div className="group-hover:text-black transition-colors">
                  {skill.icon}
                </div>
              </motion.div>
              <h4 className="text-xl font-bold mb-4 text-white">{skill.title}</h4>
              <p className="text-silver-400 text-sm leading-relaxed">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  const experiences = [
    {
      role: "IT Business Analyst & BPM Engineer",
      company: "Expertise Indépendante",
      period: "Présent",
      description: "Accompagnement stratégique des entreprises dans l'optimisation de leurs processus et la gestion de projets IT complexes."
    },
    {
      role: "Business Analyst",
      company: "Dnity Technology Solutions LLC",
      period: "Sept. 2024 - Mai 2025",
      description: "Analyse des besoins métier et conception de solutions technologiques pour améliorer l'efficacité opérationnelle."
    },
    {
      role: "Business Analyst Jr.",
      company: "IIBA Cameroon Chapter",
      period: "Jan. 2024 - Aout 2024",
      description: "Contribution aux initiatives d'analyse métier et support à la formalisation des processus au sein du chapitre local de l'IIBA."
    },
    {
      role: "Analyste Programmeur",
      company: "Solem SARL",
      period: "Dec. 2021 - Mai 2022",
      description: "Conception et développement d'applications logicielles, analyse technique et maintenance des systèmes existants."
    },
    {
      role: "Stage fin d'études & Stage Professionnel",
      company: "The German House Cameroon",
      period: "Mars 2021 - Nov. 2021",
      description: "Mise en pratique des compétences d'ingénierie sur des projets concrets et immersion professionnelle en environnement technique."
    },
    {
      role: "Ingénieur Génie Informatique",
      company: "Formation & Projets",
      period: "Parcours Académique",
      description: "Spécialisation dans la structuration de systèmes d'information et l'analyse métier."
    }
  ];

  return (
    <section id="experience" className="py-24 bg-silver-900/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-1">
            <h2 className="text-sm font-bold text-silver-400 uppercase tracking-[0.3em] mb-4">Parcours</h2>
            <h3 className="text-4xl font-bold mb-6 leading-tight">Expérience & <br />Engagement</h3>
            <p className="text-silver-400 mb-8">
              Une trajectoire focalisée sur la création de valeur par la technologie et la rigueur méthodologique.
            </p>
            <a href="#" className="inline-flex items-center text-white font-bold hover:text-silver-400 transition-colors">
              <FileText size={20} className="mr-2" />
              Télécharger mon CV (PDF)
            </a>
          </div>
          
          <div className="lg:col-span-2 space-y-12">
            {experiences.map((exp, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative pl-8 border-l border-silver-400/20"
              >
                <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] bg-white rounded-full" />
                <div className="text-xs font-bold text-silver-500 uppercase tracking-widest mb-2">{exp.period}</div>
                <h4 className="text-2xl font-bold text-white mb-1">{exp.role}</h4>
                <div className="text-silver-400 font-medium mb-4">{exp.company}</div>
                <p className="text-silver-300 leading-relaxed max-w-2xl">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Optimisation BPM Logistique",
      description: "Refonte complète des processus de gestion de stock et de distribution pour une réduction des coûts opérationnels de 15%.",
      tags: ["BPMN 2.0", "Lean Six Sigma", "ERP"],
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Dashboard de Performance IT",
      description: "Conception d'un tableau de bord décisionnel permettant le suivi en temps réel des KPI stratégiques et de la santé des systèmes.",
      tags: ["Power BI", "SQL", "Business Intelligence"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Audit de Transformation Digitale",
      description: "Analyse de maturité numérique et définition d'une roadmap stratégique pour la migration vers des solutions Cloud.",
      tags: ["Cloud Strategy", "Audit", "Digital Transformation"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
    }
  ];

  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold text-silver-400 uppercase tracking-[0.3em] mb-4">Projets</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">Réalisations Marquantes</h3>
          <p className="text-silver-400">
            Une sélection de projets illustrant ma capacité à transformer des problématiques métier en solutions concrètes et performantes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, scale: 1.01 }}
              viewport={{ once: true }}
              transition={{ 
                delay: i * 0.1,
                type: "spring",
                stiffness: 300,
                damping: 20
              }}
              className="group bg-silver-900/40 silver-border rounded-sm overflow-hidden hover:bg-silver-800/40 transition-all"
            >
              <div className="aspect-video overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors" />
              </div>
              
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 bg-silver-800 text-silver-400 rounded-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <h4 className="text-xl font-bold mb-3 text-white">{project.title}</h4>
                <p className="text-silver-400 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white text-black p-8 sm:p-12 md:p-20 rounded-sm silver-glow flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 tracking-tighter">Prêt à optimiser vos processus ?</h2>
            <p className="text-lg text-black/70 mb-0">
              Discutons de vos enjeux stratégiques et de la manière dont je peux vous accompagner dans votre transformation.
            </p>
          </div>
          
          <div className="flex flex-col space-y-4 w-full md:w-auto">
            <a href="mailto:steve.emane97@gmail.com" className="px-10 py-5 bg-black text-white font-bold rounded-sm flex items-center justify-center hover:bg-silver-800 transition-all">
              <Mail size={20} className="mr-3" />
              Me contacter par email
            </a>
            <div className="flex justify-center md:justify-start space-x-6 pt-4">
              <a href="https://cm.linkedin.com/in/emane-steve" className="text-black hover:text-silver-600 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="https://wa.me/237622186389" className="text-black hover:text-silver-600 transition-colors">
                <MessageCircle size={24} />
              </a>
              <a href="https://www.instagram.com/emane.pro?utm_source=qr&igsh=MWszcGwwNzl0YzNwMA==" className="text-black hover:text-silver-600 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="https://www.tiktok.com/@ing.semane?_r=1&_t=ZS-95E7A1dXcwS" className="text-black hover:text-silver-600 transition-colors">
                <svg 
                  viewBox="0 0 24 24" 
                  width="24" 
                  height="24" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  fill="none" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </a>
              <a href="https://x.com/emane_steve" className="text-black hover:text-silver-600 transition-colors">
                <svg 
                  viewBox="0 0 24 24" 
                  width="22" 
                  height="22" 
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <footer className="py-12 border-t border-silver-400/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8 text-silver-500 text-sm">
        <Link 
          to="/" 
          onClick={() => {
            if (window.location.pathname === "/") {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="font-bold text-silver-100 text-xl tracking-tighter hover:opacity-80 transition-opacity"
        >
          semane<span className="text-silver-400">.</span>
        </Link>
        
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 md:gap-x-8">
          <a href={isHomePage ? "#about" : "/#about"} className="hover:text-white hover:underline underline-offset-4 transition-all py-2">À propos</a>
          <a href={isHomePage ? "#expertise" : "/#expertise"} className="hover:text-white hover:underline underline-offset-4 transition-all py-2">Expertise</a>
          <a href={isHomePage ? "#experience" : "/#experience"} className="hover:text-white hover:underline underline-offset-4 transition-all py-2">Expérience</a>
          <a href={isHomePage ? "#projects" : "/#projects"} className="hover:text-white hover:underline underline-offset-4 transition-all py-2">Projets</a>
          <Link to="/blog" className="hover:text-white hover:underline underline-offset-4 transition-all py-2">Blog</Link>
        </div>
        
        <div>
          © {new Date().getFullYear()} Steve Emane. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Expertise />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-black selection:bg-white selection:text-black overflow-x-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
