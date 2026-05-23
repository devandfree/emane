import { motion } from "motion/react";
import { 
  AlertTriangle,
  Briefcase, 
  ChevronRight, 
  ChevronDown,  Code,
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
  Zap,
  GraduationCap,
  Award,
  BookOpen,
  Target,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Activity,
  HelpCircle,
  Lightbulb
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
    { name: "Formation", href: isHomePage ? "#education" : "/#education" },
    { name: "Projets", href: isHomePage ? "#projects" : "/#projects" },
    { name: "FAQ", href: isHomePage ? "#faq" : "/#faq" },
    { name: "Blog", href: "/blog", isRoute: true },
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
          className="md:hidden bg-black/95 backdrop-blur-lg border-b border-silver-400/10 max-h-[85vh] overflow-y-auto"
        >
          <div className="px-6 py-8 flex flex-col space-y-5">
            {navLinks.map((link) => (
              link.isRoute ? (
                <Link 
                  key={link.name} 
                  to={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-silver-300 hover:text-white transition-colors py-1"
                >
                  {link.name}
                </Link>
              ) : (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-silver-300 hover:text-white transition-colors py-1"
                >
                  {link.name}
                </a>
              )
            ))}
            
            <div className="pt-4 border-t border-silver-400/10">
              <a
                href={isHomePage ? "#contact" : "/#contact"}
                onClick={() => setIsOpen(false)}
                className="w-full py-3 bg-white text-black text-center font-bold text-sm rounded-sm block hover:bg-silver-200 transition-colors"
                style={{ minHeight: "44px" }}
              >
                Parlons-en
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};const Hero = () => {
  const pillars = [
    {
      num: "01",
      title: "Business Alignment",
      subtitle: "Alignement Stratégique",
      desc: "Traduire vos objectifs d'affaires en exigences claires et opérationnelles pour vos équipes métier et techniques."
    },
    {
      num: "02",
      title: "Process Optimization",
      subtitle: "Modélisation & Flux",
      desc: "Chasser le gaspillage par l'analyse systématique et la cartographie au standard international BPMN 2.0."
    },
    {
      num: "03",
      title: "Change Management",
      subtitle: "Conduite du Changement",
      desc: "Sécuriser la transition technologique en accompagnant l'humain grâce à la méthode ADKAR."
    }
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-black pt-32 pb-20 px-6 overflow-hidden">
      {/* Subtle lines representing a delicate minimalist structural grid */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="absolute inset-y-0 left-1/4 w-px bg-white/[0.01] pointer-events-none hidden lg:block" />
      <div className="absolute inset-y-0 right-1/4 w-px bg-white/[0.01] pointer-events-none hidden lg:block" />
      
      {/* Masterfully soft background glow to prevent heavy contrast glare and maintain elegance */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/[0.012] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Main textual column on the left */}
          <div className="lg:col-span-7 flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3.5 mb-8"
            >
              <span className="w-1.5 h-1.5 bg-silver-400 rounded-full animate-pulse" />
              <span className="text-[10px] sm:text-xs font-mono font-bold tracking-[0.4em] uppercase text-silver-500">
                Steve Emane — Conseil d'affaires
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] xl:text-[5.8rem] font-medium leading-[0.95] tracking-tighter text-white font-display mb-10"
            >
              Penser les flux. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-silver-100 via-silver-400 to-silver-600 font-bold">Architecturer</span> <br />
              la performance.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-silver-400 text-base md:text-lg font-light leading-relaxed max-w-xl mb-12"
            >
              Consultant indépendant et facilitateur d’excellence. Je sécurise la capacité d’exécution des organisations en alignant besoins métier (<b>Business Needs</b>) et architectures technologiques.
            </motion.p>

            {/* Premium, ultra-clean call-to-actions */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-20"
            >
              <a 
                href="#contact" 
                className="group px-7 py-3.5 bg-white text-black text-xs font-semibold uppercase tracking-widest hover:bg-silver-150 transition-all rounded-sm flex items-center justify-center border border-white"
              >
                Cadrer un projet
                <ArrowRight size={13} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              
              <a 
                href="#challenges" 
                className="px-7 py-3.5 border border-silver-850 hover:border-silver-600 text-silver-400 hover:text-white transition-all uppercase text-xs tracking-widest text-center rounded-sm bg-silver-950/20 backdrop-blur-sm"
              >
                Consulter ma démarche
              </a>
            </motion.div>

            {/* Subtle row of frameworks */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="flex flex-wrap gap-x-6 gap-y-2 items-center text-[10px] font-mono text-silver-600 uppercase tracking-widest"
            >
              <span>Certifications &amp; Standards :</span>
              <span className="text-white hover:text-silver-300 transition-colors">BABOK v3</span>
              <span className="text-white hover:text-silver-300 transition-colors">BPMN 2.0</span>
              <span className="text-white hover:text-silver-300 transition-colors">Lean Six Sigma</span>
            </motion.div>
          </div>

          {/* Elegant geometric / pure typographic card list on the right */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.98, x: 15 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4"
            >
              {pillars.map((p, idx) => (
                <div 
                  key={idx}
                  className="p-6 bg-silver-950/5 border border-silver-900/40 rounded-sm hover:border-silver-800 hover:bg-silver-950/20 transition-all duration-300 group"
                >
                  <div className="flex justify-between items-baseline mb-3">
                    <span className="text-[10px] font-mono text-silver-500 group-hover:text-silver-400 transition-colors">
                      {p.num} — {p.title}
                    </span>
                    <span className="text-[9px] font-mono uppercase bg-silver-900/30 text-silver-400 px-2 py-0.5 rounded-sm">
                      MÉTHODE
                    </span>
                  </div>
                  
                  <h3 className="text-sm font-bold text-white tracking-tight uppercase mb-2 font-display">
                    {p.subtitle}
                  </h3>
                  
                  <p className="text-[10px] sm:text-xs text-silver-400 leading-relaxed font-light">
                    {p.desc}
                  </p>
                </div>
              ))}
              
              {/* Ultra-subtle visual connection indicator */}
              <div className="pt-2 px-1 flex justify-between items-center text-[9px] font-mono text-silver-600">
                <span className="flex items-center gap-1">
                  <span className="w-1 h-1 bg-green-500 rounded-full animate-ping" />
                  Prêt pour collaboration agile
                </span>
                <span>© 2026 EMANE.PRO</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Exquisite side typography annotation */}
      <div className="absolute left-6 bottom-16 hidden lg:block rotate-90 origin-left">
        <span className="text-[10px] font-mono tracking-[0.6em] text-silver-700 uppercase">
          STEVE EMANE • PORTFOLIO
        </span>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-silver-900/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left panel with Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="aspect-[4/5] rounded-sm overflow-hidden silver-border silver-glow bg-black/40">
              <img 
                src="https://www.hebergeur-image.com/upload/143.105.152.103-69ce8997cf15a.jpg" 
                alt="Steve Emane" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Float badge */}
            <div className="absolute -bottom-6 -right-6 w-36 h-36 bg-white flex items-center justify-center p-4 rounded-sm hidden md:flex shadow-2xl">
              <div className="text-black text-center">
                <span className="block text-[10px] font-mono tracking-widest uppercase mb-1 text-black/40">Parcours</span>
                <div className="text-4xl font-bold tracking-tighter">3+</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-black/80">Ans Pro</div>
              </div>
            </div>
          </motion.div>
          
          {/* Right panel with Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 lg:pl-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-silver-500" />
              <span className="text-xs font-bold text-silver-400 uppercase tracking-[0.3em]">Positionnement & Valeur</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight text-white font-display tracking-tight">
              IT Business Analyst <br />
              <span className="text-silver-400">&amp; Process Optimization Consultant</span>
            </h2>
            
            <div className="space-y-6 text-silver-300 leading-relaxed text-sm md:text-base">
              <p className="text-silver-100 text-lg font-light leading-relaxed border-l-2 border-white pl-4 italic bg-white/[0.02] py-4 pr-3 rounded-r-sm">
                "J’accompagne les organisations dans l’alignement de leurs objectifs stratégiques (<span className="text-white font-mono text-sm">Business Goals</span>), de leurs besoins opérationnels (<span className="text-white font-mono text-sm">Business Needs</span>) et de leurs processus métier, afin d’améliorer leur performance et de sécuriser leur capacité d’exécution."
              </p>
              
              <div className="space-y-4 pt-4">
                <div className="flex gap-4 items-start">
                  <div className="p-2 bg-silver-800 rounded-sm mt-1 text-white flex-shrink-0">
                    <Target size={16} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-1">Proposition de valeur</h4>
                    <p className="text-sm text-silver-400">
                      J’aide les organisations à transformer leurs objectifs stratégiques et leurs besoins métier les plus complexes en processus fluides, optimisés et en solutions logicielles d'entreprise concrètes.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start pt-2">
                  <div className="p-2 bg-silver-800 rounded-sm mt-1 text-white flex-shrink-0">
                    <User size={16} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-1">Profil du consultant</h4>
                    <p className="text-sm text-silver-400">
                      Facilitateur pragmatique entre la stratégie d'entreprise, les équipes d'opérations et la technologie. J'allie une rigueur d'ingénierie certifiée BABOK à une expertise d'outillage des processus pour éliminer tout gaspillage opérationnel.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-10 pt-8 border-t border-silver-400/10 grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-2 font-mono">Engagement Métier</h4>
                <p className="text-sm text-silver-400 font-light">Efficacité systémique & Alignement stratégique stable</p>
              </div>
              <div>
                <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-2 font-mono">Champs D'Action</h4>
                <p className="text-sm text-silver-400 font-light">PME, Transformation Industrielle & Digitale</p>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

const Challenges = () => {
  const problems = [
    {
      title: "Vision Déconnectée",
      subtitle: "Objectifs stratégiques non traduits en actions concrètes",
      description: "La direction fixe des buts d'affaires clairs, mais les équipes opérationnelles peinent à les décliner en processus quotidiens faute de passerelle méthodologique.",
      accent: "Alignement stratégique"
    },
    {
      title: "Flou Opérationnel",
      subtitle: "Processus inexistants, flous ou inefficaces",
      description: "Absence de standards ou silos étanches entraînant des goulots d'étranglement répétés, des pertes de temps chroniques et une surcharge mentale des collaborateurs.",
      accent: "Modélisation BPMN 2.0"
    },
    {
      title: "Rupture Métier / IT",
      subtitle: "Manque d’alignement entre équipes métier et IT",
      description: "Les développeurs conçoivent des fonctionnalités parfaites techniquement mais décalées de l'usage réel, car les besoins n'ont pas été traduits en exigences claires.",
      accent: "Liaison d'affaires & Agile"
    },
    {
      title: "Outils Inadaptés",
      subtitle: "Systèmes d’information peu adaptés aux besoins réels",
      description: "Investissements technologiques lourds (ERP, CRM, LIMS) qui finissent par 'automatiser le désordre' faute d'avoir optimisé les processus sous-jacents au préalable.",
      accent: "Aide au choix & Cadrage"
    },
    {
      title: "Pilotage Aveugle",
      subtitle: "Difficulté à piloter la performance opérationnelle",
      description: "Insuffisante visibilité sur la productivité réelle, manque d'indicateurs de performance (KPIs) exploitables et de systèmes de remontée d'alertes fiables.",
      accent: "KPIs & Power BI"
    }
  ];

  return (
    <section id="challenges" className="py-24 border-t border-silver-400/10 bg-black relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-silver-900/10 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-amber-500" />
              <span className="text-xs font-bold text-amber-500 uppercase tracking-[0.3em] font-mono">Constat de terrain</span>
            </div>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-white tracking-tighter leading-tight">
              Problématiques <br />adressées
            </h3>
          </div>
          <div className="lg:col-span-7 lg:pl-12 lg:border-l border-silver-400/10 pt-4 lg:pt-0">
            <p className="text-silver-400 text-lg md:text-xl font-light leading-relaxed">
              Le manque d'alignement engendre des frictions quotidiennes lourdes. Je cible les symptômes organisationnels critiques pour restaurer une mécanique d'excellence.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((prob, i) => (
            <motion.div
              key={prob.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="p-8 bg-silver-900/10 border border-silver-850 rounded-sm hover:border-amber-500/30 hover:bg-silver-900/30 transition-all duration-500 flex flex-col justify-between group"
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  <div className="text-amber-500 p-2 bg-amber-500/5 rounded-sm">
                    <AlertTriangle size={17} />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-silver-500 bg-silver-950 px-2 py-0.5 rounded-sm border border-silver-800">
                    Symptôme 0{i+1}
                  </span>
                </div>
                
                <h4 className="text-xl font-bold text-white font-display tracking-tight group-hover:text-amber-400 transition-colors duration-300">
                  {prob.title}
                </h4>
                <p className="text-xs font-semibold text-silver-300 mt-2 font-sans leading-normal">
                  {prob.subtitle}
                </p>
                <p className="text-silver-400 text-xs mt-4 leading-relaxed font-light">
                  {prob.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-silver-800/40 flex justify-between items-center text-[10px] font-mono text-silver-500 group-hover:text-silver-300 transition-colors">
                <span>Intervention</span>
                <span className="text-white border-b border-white/20 pb-0.5">{prob.accent}</span>
              </div>
            </motion.div>
          ))}
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="p-8 bg-amber-500/5 border border-amber-500/20 rounded-sm flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute top-[-50px] right-[-50px] w-48 h-48 bg-amber-500/[0.02] rounded-full blur-3xl pointer-events-none" />
            
            <div>
              <div className="text-amber-500 p-2 bg-amber-500/10 rounded-sm w-fit mb-6">
                <Lightbulb size={17} />
              </div>
              <h4 className="text-xl font-bold text-white font-display tracking-tight">
                Brisez le statu quo
              </h4>
              <p className="text-silver-300 text-xs mt-3 leading-relaxed font-light">
                Chaque dysfonctionnement structurel est un gisement de rentabilité inexploité. Aligner stratégie et technologie permet de capturer cette valeur.
              </p>
            </div>
            
            <div className="mt-8">
              <a 
                href="#expertise" 
                className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-amber-500 hover:text-white transition-colors gap-2"
              >
                Prestations &amp; Solutions
                <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </a>
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
      id: "01",
      title: "Analyse des besoins & cadrage",
      description: "Identification fine des Business Goals, capture exhaustive des Business Needs et analyse d'écarts face à vos systèmes existants.",
      icon: <Search className="text-white" size={20} />,
      deliverables: [
        "Document de cadrage d'affaires",
        "Analyse d'écarts fonctionnels (Gap Analysis)",
        "Spécifications des exigences de haut niveau"
      ],
      tools: ["BABOK Guide", "RFI / RFQ Documents", "Stakeholder Matrix"]
    },
    {
      id: "02",
      title: "Cartographie & modélisation de processus",
      description: "Audit d'écosystème, diagnostics opérationnels et modélisation stricte de vos flux (BPMN 2.0) pour déceler tout goulot d'étranglement.",
      icon: <Layers className="text-white" size={20} />,
      deliverables: [
        "Modélisation de processus AS-IS & TO-BE",
        "Cartographies macro-opérationnelles & micro-flux",
        "Standard Operating Procedures (SOP)"
      ],
      tools: ["BPMN 2.0", "Bizagi", "Signavio / Camunda"]
    },
    {
      id: "03",
      title: "Optimisation de processus",
      description: "Refonte de flux, éradication des gaspillages méthodologiques (Muda) et mise en place d'une gouvernance tournée vers l'amélioration continue.",
      icon: <Zap className="text-white" size={20} />,
      deliverables: [
        "Plan d'amélioration continue & BPR",
        "Value Stream Mapping (VSM)",
        "Indicateurs de performance (KPI Design)"
      ],
      tools: ["Lean Six Sigma", "Kaizen Method", "SOP Development", "Lead-time Reduc"]
    },
    {
      id: "04",
      title: "Alignement Business / IT",
      description: "Traduction fonctionnelle rigoureuse de vos objectifs stratégiques en exigences applicatives pour fluidifier la liaison métiers / développeurs.",
      icon: <Cpu className="text-white" size={20} />,
      deliverables: [
        "Dossiers de spécifications fonctionnelles (DFS)",
        "Product Backlog: User Stories & Acceptance Criteria",
        "Matrice de traçabilité des exigences"
      ],
      tools: ["Jira / Confluence", "UML Modeling", "Agile Product Backlog"]
    },
    {
      id: "05",
      title: "Accompagnement à la mise en œuvre",
      description: "Pilotage d'homologation utilisateur (UAT), support actif de conduite du changement humain et suivi de performance post-déploiement.",
      icon: <ShieldCheck className="text-white" size={20} />,
      deliverables: [
        "Plans de test d'acceptation utilisateur (UAT)",
        "Matrice et registre d'anticipation des risques",
        "Tableaux de bord analytiques Power BI"
      ],
      tools: ["UAT Testing", "Power BI / SQL", "AdKAR Change Framework"]
    }
  ];

  return (
    <section id="expertise" className="py-24 relative overflow-hidden border-t border-silver-400/10">
      {/* Background ambient spot */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-white/[0.01] rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-silver-500" />
              <span className="text-xs font-bold text-silver-400 uppercase tracking-[0.3em]">Prestations &amp; Services</span>
            </div>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-white tracking-tighter leading-tight">
              Prestations <br />Proposées
            </h3>
          </div>
          <div className="lg:col-span-7 lg:pl-12 lg:border-l border-silver-400/10 pt-4 lg:pt-0">
            <p className="text-silver-400 text-lg md:text-xl font-light leading-relaxed">
              Une ingénierie méthodique de la performance conçue pour transformer la complexité organisationnelle des PME en systèmes durables, fluides et sécurisés. J'allie rigueur analytique certifiée et solutions concrètes.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.215, 0.61, 0.355, 1]
              }}
              className="p-8 md:p-10 bg-silver-900/30 backdrop-blur-sm silver-border rounded-sm hover:bg-silver-900/60 hover:border-silver-100/30 transition-all duration-500 group relative flex flex-col justify-between"
            >
              {/* Card top decorative corner line */}
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-transparent group-hover:border-white/30 transition-colors duration-500" />
              
              <div>
                <div className="flex justify-between items-start mb-8">
                  <div className="w-12 h-12 bg-silver-900/80 silver-border rounded-sm flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-500">
                    <span className="text-white group-hover:text-black transition-colors duration-500">
                      {skill.icon}
                    </span>
                  </div>
                  <span className="font-mono text-3xl font-light text-silver-700/50 group-hover:text-silver-300 transition-colors duration-500">
                    {skill.id}
                  </span>
                </div>
                
                <h4 className="text-2xl font-bold mb-4 text-white font-display tracking-tight group-hover:translate-x-1 transition-transform duration-300">{skill.title}</h4>
                <p className="text-silver-400 text-sm leading-relaxed mb-8 font-light">
                  {skill.description}
                </p>

                {/* Deliverables lists */}
                <div className="mb-8 pt-6 border-t border-silver-400/5">
                  <h5 className="text-[10px] font-bold uppercase tracking-widest text-silver-500 mb-4 font-sans">Focus Livrables</h5>
                  <ul className="space-y-3">
                    {skill.deliverables.map((del, idx) => (
                      <li key={idx} className="flex items-start text-xs text-silver-300 leading-relaxed">
                        <span className="text-silver-550 mr-2 font-mono">•</span>
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tools pills */}
              <div className="pt-6 border-t border-silver-400/5">
                <div className="flex flex-wrap gap-2">
                  {skill.tools.map((tool) => (
                    <span 
                      key={tool} 
                      className="text-[10px] font-mono tracking-wider px-2.5 py-1 bg-black/60 text-silver-400 border border-silver-450/5 rounded-sm hover:text-white hover:border-silver-100/10 transition-colors duration-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const DeliverablesAndResults = () => {
  const deliverablesList = [
    { title: "Document de cadrage d'affaires", desc: "Cadrage précis de l'envergure, des parties prenantes et des objectifs." },
    { title: "Cartographie de processus (BPMN 2.0)", desc: "Tracé exhaustif des flux opérationnels existants (AS-IS) et futurs de référence (TO-BE)." },
    { title: "Spécifications fonctionnelles détaillées", desc: "Lien clair sous forme de User Stories claires ou exigences unitaires pour les équipes IT." },
    { title: "Recommandations concrètes d’optimisation", desc: "Diagnostic des goulots d'étranglement avec axes de résolution chiffrés." },
    { title: "Plan d’amélioration et de transition", desc: "Feuille de route pour l'implémentation opérationnelle et pilotage de déploiement." },
    { title: "Rapport d’analyse et indicateurs clés", desc: "Structure des KPI de performance pour un suivi fluide au long terme." }
  ];

  const resultsList = [
    { title: "Alignement stratégique & opérations", desc: "Chaque action opérationnelle répond directement aux objectifs globaux fixés par l'entreprise." },
    { title: "Processus clairs, documentés et fluides", desc: "Standards de travail établis (SOP) éliminant l'improvisation ou la perte de savoir-faire." },
    { title: "Élimination des gaspillages opérationnels", desc: "Réduction mesurable des doublons opérationnels et gain d'agilité globale." },
    { title: "Amélioration de la rentabilité opérationnelle", desc: "Amortissement accéléré des processus et réduction des coûts de non-qualité." },
    { title: "Synergie renforcée entre équipes Métier & IT", desc: "Langage unifié, réduisant les frictions de compréhension et accélérant la livraison logicielle." }
  ];

  const approachList = [
    {
      title: "Rigueur Méthodique",
      desc: "Fondée sur les cadres de référence internationaux (BABOK v3, BPMN 2.0).",
      icon: <Layers size={16} />
    },
    {
      title: "Culture Du Résultat",
      desc: "Chaque action d'optimisation vise un bénéfice opérationnel ou financier direct.",
      icon: <TrendingUp size={16} />
    },
    {
      title: "Focus Valeur Métier",
      desc: "Priorité mise sur ce qui produit de l'impact réel pour les utilisateurs finaux.",
      icon: <Target size={16} />
    },
    {
      title: "Pragmatisme Terrain",
      desc: "Des solutions ancrées dans la réalité humaine, opérationnelle et budgétaire.",
      icon: <Users size={16} />
    }
  ];

  return (
    <section id="deliverables" className="py-24 bg-silver-950/20 border-t border-silver-400/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Deliverables Column */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="p-1 px-2.5 bg-white/5 border border-white/10 rounded-sm text-xs font-mono text-white">BOX 01</span>
              <h4 className="text-xs font-bold text-silver-400 uppercase tracking-widest font-mono">📦 Livrables Clés de Cadrage</h4>
            </div>
            
            <h3 className="text-3xl font-bold text-white font-display mb-8 tracking-tight">
              Livrables attendus de prédilection
            </h3>
            
            <div className="space-y-4">
              {deliverablesList.map((del, index) => (
                <div 
                  key={index} 
                  className="p-5 bg-silver-900/10 border border-silver-850 hover:border-silver-600/20 transition-all rounded-sm group flex gap-4"
                >
                  <div className="text-silver-400 mt-1 flex-shrink-0">
                    <FileText size={18} />
                  </div>
                  <div>
                    <h5 className="text-white font-bold text-sm tracking-tight group-hover:text-silver-300 transition-colors">
                      {del.title}
                    </h5>
                    <p className="text-xs text-silver-400 mt-1 leading-relaxed font-light">
                      {del.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Results Column */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="p-1 px-2.5 bg-white/5 border border-white/10 rounded-sm text-xs font-mono text-white">BOX 02</span>
              <h4 className="text-xs font-bold text-silver-400 uppercase tracking-widest font-mono">🏆 Résultats &amp; Retombées</h4>
            </div>
            
            <h3 className="text-3xl font-bold text-white font-display mb-8 tracking-tight">
              Bénéfices opérationnels &amp; ROI
            </h3>
            
            <div className="space-y-4">
              {resultsList.map((res, index) => (
                <div 
                  key={index} 
                  className="p-5 bg-silver-900/15 border border-silver-850 hover:border-silver-600/20 transition-all rounded-sm group flex gap-4"
                >
                  <div className="text-amber-500 mt-1 flex-shrink-0">
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <h5 className="text-white font-bold text-sm tracking-tight">
                      {res.title}
                    </h5>
                    <p className="text-xs text-silver-400 mt-1 leading-relaxed font-light">
                      {res.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Bottom banner block representing Approach (⚡ Approche) */}
        <div className="mt-24 pt-16 border-t border-silver-400/10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-amber-500 text-xs font-bold font-mono uppercase tracking-[0.25em] mb-4 block">⚡ Approche et Philosophie</span>
            <h3 className="text-3xl md:text-4xl font-bold font-display tracking-tight text-white mb-4">
              Une exécution robuste pour des résultats pérennes
            </h3>
            <p className="text-sm text-silver-400 font-light">
              Parce que modéliser ne suffit pas, mon approche associe la rigueur du cadrage stratégique à l'adhésion opérationnelle des équipes de terrain.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {approachList.map((app, index) => (
              <div 
                key={index} 
                className="p-6 bg-silver-900/5 hover:bg-silver-900/20 border border-silver-850 hover:border-silver-800 transition-all rounded-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 bg-white/[0.03] border border-white/5 rounded-sm flex items-center justify-center text-white mb-6">
                    {app.icon}
                  </div>
                  <h4 className="text-base font-bold text-white font-display mb-2">{app.title}</h4>
                  <p className="text-xs text-silver-400 leading-relaxed font-light">{app.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

const Experience = () => {
  const [isCVOpen, setIsCVOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const experiences = [
    {
      role: "Ingénieur Conception / LIMS Implementer",
      company: "Groupe Kedibuild / KB SAP Consulting SARL",
      period: "Fév. 2026 - Présent",
      description: "Implémentation et configuration de systèmes LIMS pour optimiser les flux de travail scientifiques et de laboratoires. Analyse fine des besoins utilisateurs et traduction directe en paramétrage fonctionnel et technique du système. Rédaction de spécifications fonctionnelles détaillées, guides d'utilisation et documents de recette d'acceptation. Coordination fluide avec les équipes qualité, terrain et IT pour le respect des standards.",
      tags: ["LIMS Customization", "BPM", "Flux Lab", "Compliance", "Spécificités"]
    },
    {
      role: "IT Business Analyst",
      company: "Dnity Technology Solutions LLC",
      period: "Sept. 2024 - Mai 2025",
      description: "Analyse systématique des besoins métiers et modélisation de solutions logicielles d'envergure. Rédaction rigoureuse de spécifications fonctionnelles, user stories et cas d'usage à destination des développeurs. Animation d'ateliers collaboratifs de recueil des processus et d'alignement avec les parties prenantes. Suivi des livrables et gestion agile des priorités.",
      tags: ["BABOK Guidelines", "Requirements", "User Stories", "Ateliers", "Agile"]
    },
    {
      role: "Business Analyst Jr.",
      company: "IIBA Cameroon Chapter",
      period: "Jan. 2024 - Août 2024",
      description: "Participation active aux activités d'analyse d'affaires locales et support à la formalisation logique des processus internes du chapitre. Cartographie des flux de valeur sous BPMN 2.0 pour améliorer la lisibilité opérationnelle. Aide à l'organisation de webinaires professionnels et de sessions d'étude du standard BABOK v3.",
      tags: ["IIBA Chapter", "BPMN 2.0", "BABOK Study", "Processus", "Gouvernance"]
    },
    {
      role: "Analyste Programmeur",
      company: "Solem SARL",
      period: "Déc. 2021 - Mai 2022",
      description: "Conception complète d'applications d'entreprise répondant aux spécifications techniques. Réalisation d'analyses de données, maintenance corrective et évolutive d'outils métiers complexes, et rédaction de dossiers techniques structurés.",
      tags: ["Software Dev", "SQL Databases", "Systems", "Maintenance"]
    },
    {
      role: "Stage de fin d'études & Professionnel",
      company: "The German House Cameroon SARL",
      period: "Mars 2021 - Nov. 2021",
      description: "Soutien fonctionnel et applicatif sur des projets logicielles agiles au sein d'un écosystème technique international. Recueil d'exigences opérationnelles de base et traduction en cahiers des charges fonctionnels.",
      tags: ["Functional Analysis", "Immersion Pro", "IT Support", "Cadrage"]
    }
  ];

  const handleCopyCV = () => {
    const cvText = `EMANE JOVANY LOUIS STEVE
IT Business Analyst · IT Design Engineer · +3 ans
Email: steve.emane@outlook.fr | steve.emane97@gmail.com
Tél: +237 656 579 882
Localisation: Douala, Cameroun
LinkedIn: linkedin.com/in/emane-steve

==== PROFIL PROFESSIONNEL ====
IT Business Analyst spécialisé dans la compréhension des besoins métiers et leur traduction en solutions numériques adaptées. Mon rôle consiste à analyser, concevoir et proposer des options stratégiques qui favorisent l’évolution et l’amélioration continue des systèmes d’information.
J’interviens au croisement des opérations, des processus et des projets IT, afin d’accompagner les organisations dans leur transformation digitale. Mon expertise repose sur la Business Analysis et le BPM, disciplines qui me permettent de cartographier les processus (As-Is), concevoir des modèles cibles (To-Be), identifier les points de friction et mettre en œuvre des solutions d’optimisation.

==== EXPÉRIENCES PROFESSIONNELLES ====
* Ingénieur Conception / LIMS Implementer | Groupe Kedibuild / KB SAP Consulting SARL (Fév. 2026 – Présent)
  - Implémentation et configuration de systèmes LIMS pour optimiser les flux de travail scientifiques et laboratoires
  - Analyse des besoins utilisateurs et traduction en paramétrage fonctionnel et technique du système
  - Rédaction des spécifications fonctionnelles, des guides utilisateurs et de la documentation de recette
  - Coordination avec les équipes qualité, terrain et IT pour garantir la conformité aux standards en vigueur

* IT Business Analyst | Dnity Technology Solutions LLC (Sept. 2024 – Mai 2025)
  - Analyse des besoins métier et conception de solutions technologiques pour améliorer l’efficacité opérationnelle
  - Rédaction de spécifications fonctionnelles, user stories et cas d’usage destinés aux équipes de développement
  - Animation d’ateliers de recueil des besoins et facilitation des sessions de validation avec les parties prenantes
  - Suivi des livrables, gestion des priorités et reporting d’avancement auprès des responsables de projet

* Business Analyst Jr. | IIBA Cameroon Chapter (Jan. 2024 – Août 2024)
  - Contribution aux initiatives d’analyse métier et support à la formalisation des processus internes du chapitre
  - Modélisation de processus en BPMN 2.0 pour renforcer la gouvernance et la lisibilité opérationnelle
  - Participation à l’organisation d’ateliers de formation et de préparation aux certifications IIBA

* Analyste Programmeur | Solem SARL (Déc. 2021 – Mai 2022)
  - Conception d’applications logicielles répondant aux besoins fonctionnels identifiés
  - Analyse technique, maintenance corrective et évolutive des systèmes existants
  - Rédaction de la documentation technique et fonctionnelle associée aux livrables

* Stage Fin d’Études & Stage Professionnel | The German House Cameroon SARL (Mars – Nov. 2021)
  - Mise en pratique des compétences d’ingénierie sur des projets concrets en environnement technique international
  - Immersion professionnelle et contribution active aux projets de l’équipe IT

==== PARCOURS ACADÉMIQUE & FORMATIONS ====
- Diplôme d’Ingénieur Conception — Génie Informatique | Ecole National Supérieur Polytechnique de Douala (2021)
- Ingénierie des Processus Métier (BPM) | Formation spécialisée (2026)
- Préparation Certifications IIBA — ECBA, CCBA & CBAP | IIBA Cameroon Chapter
- Optimisation & Réingénierie des Processus Métier (BPR) | IIBA Cameroon Chapter
- Cartographie des Processus Métier — BPMN 2.0 | IIBA Cameroon Chapter

==== COMPÉTENCES ====
* Savoir-faire: Modélisation (BPMN, UML), Analyse de données & KPI, Optimisation (BPO / BPR), Gestion de projet IT (Agile, Waterfall), Implémentation ERP/CRM/LIMS, Analyse des risques, Conduite du changement.
* Savoir-être: Esprit analytique, Vulgarisation technique, Autonomie, Collaboration transverse, Pragmatisme.
* Outils: Power BI, Excel, SQL, JIRA, Confluence, Trello, No-Code & IA.
* Langues: Français (Très Bien), Anglais (Professionnel)
`;

    navigator.clipboard.writeText(cvText).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="experience" className="py-24 bg-silver-900/10 border-t border-silver-400/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left panel */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-silver-500" />
                <span className="text-xs font-bold text-silver-400 uppercase tracking-[0.3em]">Trajectoire</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tighter leading-tight font-display">
                Parcours & <br />Expérience
              </h3>
              <p className="text-silver-400 text-sm leading-relaxed mt-6">
                Une progression méthodique guidée par la recherche de clarté, l'architecture rigoureuse et la digitalisation raisonnée des activités d'entreprise.
              </p>
            </div>

            {/* Glowing CV Card wrapper */}
            <motion.div 
              whileHover={{ y: -3 }}
              onClick={() => setIsCVOpen(true)}
              className="p-6 bg-silver-900/50 silver-border rounded-sm relative overflow-hidden group silver-glow cursor-pointer"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-white/40 to-transparent" />
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-sm text-white group-hover:bg-white group-hover:text-black transition-colors duration-300">
                  <FileText size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm mb-1">Curriculum Vitæ</h4>
                  <p className="text-xs text-silver-400 leading-normal mb-4">
                    Visualisez, imprimez ou copiez mon parcours complet directement au format de référence.
                  </p>
                  <button 
                    type="button"
                    onClick={(e) => { e.stopPropagation(); setIsCVOpen(true); }}
                    className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-white hover:text-silver-400 decoration-1 hover:underline underline-offset-4 transition-all bg-transparent border-none p-0 cursor-pointer"
                    style={{ minHeight: "44px" }}
                  >
                    Ouvrir le Curriculum Vitæ
                    <ChevronRight size={12} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Timeline block */}
          <div className="lg:col-span-8 relative pl-4 sm:pl-8">
            
            {/* Elegant vertical wire */}
            <div className="absolute left-4 sm:left-8 top-2 bottom-2 w-px bg-gradient-to-b from-silver-100/20 via-silver-400/10 to-transparent pointer-events-none" />

            <div className="space-y-12">
              {experiences.map((exp, i) => {
                const isPresent = exp.period.includes("Présent") || exp.period.includes("Depuis 2025");
                return (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, delay: i * 0.1 }}
                    className="relative pl-8 sm:pl-10 group"
                  >
                    {/* Glowing indicator nodes */}
                    <div className="absolute left-[-5px] sm:left-[-5px] top-2 transition-all duration-500 z-10">
                      {isPresent ? (
                        <div className="relative">
                          <span className="absolute inline-flex h-3 w-3 rounded-full bg-white opacity-75 animate-ping -left-[1.5px] -top-[1.5px]" />
                          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white border border-black" />
                        </div>
                      ) : (
                        <div className="h-2 w-2 rounded-full bg-silver-600 group-hover:bg-white group-hover:scale-125 transition-all duration-300" />
                      )}
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-3">
                        <span className="text-[10px] sm:text-xs font-mono font-medium tracking-widest px-2 py-0.5 bg-silver-900 text-silver-400 rounded-sm silver-border">
                          {exp.period}
                        </span>
                        {isPresent && (
                          <span className="text-[9px] font-bold text-emerald-400 uppercase tracking-widest flex items-center gap-1">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 inline-block animate-pulse" />
                            Actuel
                          </span>
                        )}
                      </div>
                      <span className="text-xs text-silver-500 font-mono group-hover:text-silver-300 transition-colors">
                        {exp.company}
                      </span>
                    </div>

                    <div className="p-6 bg-silver-900/10 silver-border rounded-sm group-hover:bg-silver-900/40 group-hover:border-silver-100/10 transition-all duration-500 silver-glow">
                      <h4 className="text-xl sm:text-2xl font-bold font-display text-white mb-1 group-hover:text-silver-100 transition-colors">
                        {exp.role}
                      </h4>
                      <div className="text-sm text-silver-400 font-medium mb-4 flex items-center gap-2">
                        <span>{exp.company}</span>
                      </div>
                      
                      <p className="text-silver-300 text-sm leading-relaxed mb-6 max-w-3xl">
                        {exp.description}
                      </p>

                      {/* Technical and methodological tags */}
                      <div className="flex flex-wrap gap-2 pt-4 border-t border-silver-400/5">
                        {exp.tags.map((tag) => (
                          <span 
                            key={tag} 
                            className="text-[9px] font-mono tracking-wider px-2 py-1 bg-black/40 text-silver-400 hover:text-white rounded-none border border-silver-800 transition-colors"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>

      {/* Curriculum Vitae Full Interactive Modal Overlay */}
      {isCVOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-2 sm:p-6 overflow-y-auto no-print">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-zinc-950 border border-silver-850/60 rounded-sm w-full max-w-4xl h-[92vh] flex flex-col overflow-hidden shadow-2xl relative"
          >
            {/* Modal Top Actions Bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-silver-850 bg-silver-950/70 backdrop-blur-md shrink-0">
              <div className="flex items-center gap-2">
                <FileText size={16} className="text-white" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-white">Curriculum Vitæ Interactif</span>
              </div>
              
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={handleCopyCV}
                  className="px-3.5 py-1.5 bg-silver-900 border border-silver-800 text-silver-300 hover:text-white hover:border-silver-600 transition-all text-[10px] font-mono uppercase tracking-widest rounded-sm flex items-center gap-1.5 pointer-events-auto cursor-pointer"
                  style={{ minHeight: "36px" }}
                >
                  {isCopied ? "Copié !" : "Copier brut"}
                </button>
                <button
                  type="button"
                  onClick={handlePrint}
                  className="px-3.5 py-1.5 bg-white text-black hover:bg-silver-200 transition-all text-[10px] font-mono uppercase tracking-widest rounded-sm flex items-center gap-1.5 pointer-events-auto cursor-pointer"
                  style={{ minHeight: "36px" }}
                >
                  Imprimer / PDF
                </button>
                <button
                  type="button"
                  onClick={() => setIsCVOpen(false)}
                  className="p-1.5 hover:bg-white/10 rounded-sm text-silver-400 hover:text-white transition-colors flex items-center justify-center pointer-events-auto cursor-pointer bg-transparent border-none"
                  style={{ minHeight: "36px", minWidth: "36px" }}
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Document Content Box */}
            <div className="flex-1 overflow-y-auto p-6 md:p-10 text-white select-text">
              <div className="max-w-3xl mx-auto space-y-10">
                
                {/* CV Header */}
                <div className="text-center pb-8 border-b border-white/10">
                  <h1 className="text-3xl md:text-4xl font-black tracking-tight text-white mb-2">
                    EMANE JOVANY LOUIS STEVE
                  </h1>
                  <p className="text-sm md:text-base font-bold text-silver-400 font-mono tracking-widest uppercase mb-6">
                    IT Business Analyst · IT Design Engineer · +3 ans
                  </p>
                  
                  <div className="flex flex-wrap justify-center gap-y-2 gap-x-6 text-[10px] sm:text-xs font-mono text-silver-400">
                    <span className="hover:text-white transition-colors">✉ steve.emane@outlook.fr</span>
                    <span className="hover:text-white transition-colors">☎ +237 656 579 882</span>
                    <span>⌂ Douala, Cameroun</span>
                    <a href="https://linkedin.com/in/emane-steve" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors underline underline-offset-2">
                      in linkedin.com/in/emane-steve
                    </a>
                  </div>
                </div>

                {/* Profil Professionnel */}
                <div className="space-y-4">
                  <h2 className="text-xs font-mono font-bold uppercase tracking-[0.3em] text-silver-400 flex items-center gap-2">
                    <span className="h-px w-4 bg-silver-500" /> Profil Professionnel
                  </h2>
                  <p className="text-xs md:text-sm text-silver-300 leading-relaxed font-light text-justify">
                    IT Business Analyst spécialisé dans la compréhension des besoins métiers et leur traduction en solutions numériques
                    adaptées. Mon rôle consiste à analyser, concevoir et proposer des options stratégiques qui favorisent l’évolution et
                    l’amélioration continue des systèmes d’information.
                  </p>
                  <p className="text-xs md:text-sm text-silver-300 leading-relaxed font-light text-justify">
                    J’interviens au croisement des opérations, des processus et des projets IT, afin d’accompagner les organisations dans leur
                    transformation digitale. Mon expertise repose sur la Business Analysis et le BPM, disciplines qui me permettent de
                    cartographier les processus (As-Is), concevoir des modèles cibles (To-Be), identifier les points de friction et mettre en œuvre
                    des solutions d'optimisation.
                  </p>
                  <p className="text-xs md:text-sm text-silver-300 leading-relaxed font-light text-justify">
                    Au-delà de l’analyse, j’accompagne les équipes dans la conduite du changement, en facilitant l’adoption des nouveaux outils
                    et en renforçant l’alignement entre les besoins métiers et les solutions technologiques. Mon objectif est de créer un pont
                    durable entre les utilisateurs et l’IT, en garantissant des solutions pragmatiques, efficaces et pérennes.
                  </p>
                </div>

                {/* Expériences */}
                <div className="space-y-6">
                  <h2 className="text-xs font-mono font-bold uppercase tracking-[0.3em] text-silver-400 flex items-center gap-2 pb-2 border-b border-white/5">
                    <span className="h-px w-4 bg-silver-500" /> Expériences Professionnelles
                  </h2>

                  <div className="space-y-6">
                    <div className="space-y-2">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                        <h3 className="text-sm font-bold text-white uppercase tracking-tight">
                          Ingénieur Conception / LIMS Implementer
                        </h3>
                        <span className="text-[10px] font-mono text-silver-500">Fév. 2026 – Présent</span>
                      </div>
                      <p className="text-[11px] font-bold text-silver-400 font-mono">
                        Groupe Kedibuild / KB SAP Consulting SARL — Cameroun
                      </p>
                      <ul className="list-disc list-inside text-xs text-silver-300 space-y-1.5 font-light pl-2">
                        <li>Implémentation et configuration de systèmes LIMS pour optimiser les flux de travail scientifiques et laboratoires.</li>
                        <li>Analyse des besoins utilisateurs et traduction en paramétrage fonctionnel et technique du système.</li>
                        <li>Rédaction des spécifications fonctionnelles, des guides utilisateurs et de la documentation de recette.</li>
                        <li>Coordination avec les équipes qualité, terrain et IT pour garantir la conformité aux standards en vigueur.</li>
                      </ul>
                    </div>

                    <div className="space-y-2">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                        <h3 className="text-sm font-bold text-white uppercase tracking-tight">
                          IT Business Analyst
                        </h3>
                        <span className="text-[10px] font-mono text-silver-500">Sept. 2024 – Mai 2025</span>
                      </div>
                      <p className="text-[11px] font-bold text-silver-400 font-mono">
                        Dnity Technology Solutions LLC
                      </p>
                      <ul className="list-disc list-inside text-xs text-silver-300 space-y-1.5 font-light pl-2">
                        <li>Analyse des besoins métier et conception de solutions technologiques pour améliorer l’efficacité opérationnelle.</li>
                        <li>Rédaction de spécifications fonctionnelles, user stories et cas d’usage destinés aux équipes de développement.</li>
                        <li>Animation d’ateliers de recueil des besoins et facilitation des sessions de validation avec les parties prenantes.</li>
                        <li>Suivi des livrables, gestion des priorités et reporting d’avancement auprès des responsables de projet.</li>
                      </ul>
                    </div>

                    <div className="space-y-2">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                        <h3 className="text-sm font-bold text-white uppercase tracking-tight">
                          Business Analyst Jr.
                        </h3>
                        <span className="text-[10px] font-mono text-silver-500">Jan. 2024 – Août 2024</span>
                      </div>
                      <p className="text-[11px] font-bold text-silver-400 font-mono">
                        IIBA Cameroon Chapter — Cameroun
                      </p>
                      <ul className="list-disc list-inside text-xs text-silver-300 space-y-1.5 font-light pl-2">
                        <li>Contribution aux initiatives d’analyse métier et support à la formalisation des processus internes du chapitre.</li>
                        <li>Modélisation de processus en BPMN 2.0 pour renforcer la gouvernance et la lisibilité opérationnelle.</li>
                        <li>Participation à l’organisation d’ateliers de formation et de préparation aux certifications IIBA.</li>
                      </ul>
                    </div>

                    <div className="space-y-2">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                        <h3 className="text-sm font-bold text-white uppercase tracking-tight">
                          Analyste Programmeur
                        </h3>
                        <span className="text-[10px] font-mono text-silver-500">Déc. 2021 – Mai 2022</span>
                      </div>
                      <p className="text-[11px] font-bold text-silver-400 font-mono">
                        Solem SARL — Cameroun
                      </p>
                      <ul className="list-disc list-inside text-xs text-silver-300 space-y-1.5 font-light pl-2">
                        <li>Conception d’applications logicielles répondant aux besoins fonctionnels identifiés.</li>
                        <li>Analyse technique, maintenance corrective et évolutive des systèmes existants.</li>
                        <li>Rédaction de la documentation technique et fonctionnelle associée aux livrables.</li>
                      </ul>
                    </div>

                    <div className="space-y-2">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                        <h3 className="text-sm font-bold text-white uppercase tracking-tight">
                          Stage Fin d’Études & Stage Professionnel
                        </h3>
                        <span className="text-[10px] font-mono text-silver-500">Mars – Nov. 2021</span>
                      </div>
                      <p className="text-[11px] font-bold text-silver-400 font-mono">
                        The German House Cameroon SARL — Cameroun
                      </p>
                      <ul className="list-disc list-inside text-xs text-silver-300 space-y-1.5 font-light pl-2">
                        <li>Mise en pratique des compétences d’ingénierie sur des projets concrets en environnement technique international.</li>
                        <li>Immersion professionnelle et contribution active aux projets de l’équipe IT.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Formations */}
                <div className="space-y-6">
                  <h2 className="text-xs font-mono font-bold uppercase tracking-[0.3em] text-silver-400 flex items-center gap-2 pb-2 border-b border-white/5">
                    <span className="h-px w-4 bg-silver-500" /> Parcours Académique & Formations
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-silver-300">
                    <div className="space-y-1">
                      <div className="flex justify-between font-mono font-bold text-white">
                        <span>Diplôme d’Ingénieur Conception</span>
                        <span className="text-silver-500">2021</span>
                      </div>
                      <p className="text-silver-400 font-light">Génie Informatique — Ecole Polytechnique de Douala</p>
                      <p className="text-[10px] text-silver-500 font-light">Génie logiciel, SI, réseaux et méthodes de dev.</p>
                    </div>

                    <div className="space-y-1">
                      <div className="flex justify-between font-mono font-bold text-white">
                        <span>Ingénierie des Processus Métier</span>
                        <span className="text-silver-500">2026</span>
                      </div>
                      <p className="text-silver-400 font-light">Formation spécialisée avancée</p>
                      <p className="text-[10px] text-silver-500 font-light">Conception, exécution et pilotage des flux.</p>
                    </div>

                    <div className="space-y-1">
                      <div className="flex justify-between font-mono font-bold text-white">
                        <span>Certifications IIBA (Préparation)</span>
                        <span className="text-silver-500">Cursus</span>
                      </div>
                      <p className="text-silver-400 font-light">ECBA, CCBA & CBAP — IIBA Chapter</p>
                      <p className="text-[10px] text-silver-500 font-light">Cadrage stratégique, BABOK Guide v3 complet.</p>
                    </div>

                    <div className="space-y-1">
                      <div className="flex justify-between font-mono font-bold text-white">
                        <span>Optimisation Processus (BPR)</span>
                        <span className="text-silver-500">Expertise</span>
                      </div>
                      <p className="text-silver-400 font-light">Formation continue — IIBA Chapter</p>
                      <p className="text-[10px] text-silver-500 font-light">Refonte opérationnelle et élimination des gaspillages.</p>
                    </div>
                  </div>
                </div>

                {/* Grid Compétences */}
                <div className="space-y-6 pb-6">
                  <h2 className="text-xs font-mono font-bold uppercase tracking-[0.3em] text-silver-400 flex items-center gap-2 pb-2 border-b border-white/5">
                    <span className="h-px w-4 bg-silver-500" /> Grille de Compétences
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-xs text-silver-300">
                    <div className="space-y-2">
                      <h4 className="font-bold text-white uppercase tracking-wider font-mono text-[10px] text-silver-400">Savoir-faire</h4>
                      <ul className="space-y-1 list-none font-light text-[11px] leading-relaxed">
                        <li>• Modélisation BPMN, UML</li>
                        <li>• Analyse de données & KPI</li>
                        <li>• Amélioration continue BPO</li>
                        <li>• ERP, CRM, LIMS Systems</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-bold text-white uppercase tracking-wider font-mono text-[10px] text-silver-400">Savoir-être</h4>
                      <ul className="space-y-1 list-none font-light text-[11px] leading-relaxed">
                        <li>• Analyse & Esprit de synthèse</li>
                        <li>• Vulgarisation technique</li>
                        <li>• Autonomie & Rigueur</li>
                        <li>• Pragmatisme opérationnel</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-bold text-white uppercase tracking-wider font-mono text-[10px] text-silver-400">Outils</h4>
                      <ul className="space-y-1 list-none font-light text-[11px] leading-relaxed">
                        <li>• Power BI, Excel, SQL</li>
                        <li>• JIRA, Confluence, Trello</li>
                        <li>• Agile SCRUM / Kanban</li>
                        <li>• No-Code & GenAI</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-bold text-white uppercase tracking-wider font-mono text-[10px] text-silver-400">Langues & Intérêts</h4>
                      <ul className="space-y-1 list-none font-light text-[11px] leading-relaxed">
                        <li>• Français (Très Bien)</li>
                        <li>• Anglais (Professionnel)</li>
                        <li>• R&D, Automatisation</li>
                        <li>• Optimisation Agile</li>
                      </ul>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Embedded print CV structure to support standard print styles cleanly */}
      <div id="cv-print-area" className="hidden print-only bg-white text-black p-10 font-sans leading-relaxed text-sm">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="border-b-2 border-black pb-4 text-center">
            <h1 className="text-3xl font-bold uppercase tracking-wide">EMANE JOVANY LOUIS STEVE</h1>
            <p className="text-lg font-bold text-gray-700 tracking-widest mt-1">IT Business Analyst · IT Design Engineer · +3 ans d'expérience</p>
            <p className="text-xs text-gray-500 mt-2 font-mono">steve.emane@outlook.fr | +237 656 579 882 | Douala, Cameroun | linkedin.com/in/emane-steve</p>
          </div>

          <div className="space-y-3">
            <h2 className="text-sm font-bold uppercase tracking-wider border-b border-black pb-1">Profil Professionnel</h2>
            <p className="text-xs text-justify">
              IT Business Analyst spécialisé dans la compréhension des besoins métiers et leur traduction en solutions numériques adaptées. Mon rôle consiste à analyser, concevoir et proposer des options stratégiques qui favorisent l’évolution et l’amélioration continue des systèmes d’information.
              J’interviens au croisement des opérations, des processus et des projets IT, afin d’accompagner les organisations dans leur transformation digitale.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-wider border-b border-black pb-1">Expériences Professionnelles</h2>
            
            <div className="space-y-3 text-xs">
              <div>
                <div className="flex justify-between font-bold">
                  <span>Ingénieur Conception / LIMS Implementer — Groupe Kedibuild / KB SAP Consulting</span>
                  <span>Fév. 2026 – Présent</span>
                </div>
                <ul className="list-disc list-inside pl-2 space-y-0.5 mt-1 text-gray-700">
                  <li>Implémentation et configuration de systèmes LIMS pour optimiser les flux de travail scientifiques et de laboratoires.</li>
                  <li>Analyse des besoins utilisateurs et traduction en paramétrage fonctionnel et technique du système.</li>
                  <li>Rédaction des spécifications fonctionnelles, guides utilisateurs et rédaction de documentation de recette.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between font-bold">
                  <span>IT Business Analyst — Dnity Technology Solutions LLC</span>
                  <span>Sept. 2024 – Mai 2025</span>
                </div>
                <ul className="list-disc list-inside pl-2 space-y-0.5 mt-1 text-gray-700">
                  <li>Analyse des besoins métier et conception de solutions technologiques pour l'efficacité opérationnelle.</li>
                  <li>Rédaction de spécifications fonctionnelles, user stories et cas d’usage pour les développeurs.</li>
                  <li>Animation d’ateliers de recueil et facilitation de sessions de validation.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between font-bold">
                  <span>Business Analyst Jr. — IIBA Cameroon Chapter</span>
                  <span>Jan. 2024 – Août 2024</span>
                </div>
                <ul className="list-disc list-inside pl-2 space-y-0.5 mt-1 text-gray-700">
                  <li>Modélisation de processus en BPMN 2.0 pour renforcer la gouvernance et le pilotage des processus.</li>
                  <li>Participation active aux webinaires et à la préparation aux certifications de l'IIBA.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between font-bold">
                  <span>Analyste Programmeur — Solem SARL</span>
                  <span>Déc. 2021 – Mai 2022</span>
                </div>
                <ul className="list-disc list-inside pl-2 space-y-0.5 mt-1 text-gray-700">
                  <li>Conception d’applications logicielles répondant aux besoins fonctionnels identifiés.</li>
                  <li>Analyse SQL, maintenance de systèmes et rédaction de dossiers techniques d'exploitation.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-wider border-b border-black pb-1">Parcours Académique & Formations</h2>
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div>
                <p className="font-bold">Diplôme d’Ingénieur Conception — Génie Informatique (2021)</p>
                <p className="text-gray-650">Ecole National Supérieur Polytechnique de Douala</p>
              </div>
              <div>
                <p className="font-bold">Ingénierie des Processus Métier (BPM) (2026)</p>
                <p className="text-gray-650">Formation spécialisée et pilotage des flux d'entreprise</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-wider border-b border-black pb-1">Compétences Clés</h2>
            <div className="grid grid-cols-4 gap-4 text-xs">
              <div>
                <p className="font-bold">Savoir-faire</p>
                <p className="text-gray-600">BPMN 2.0, UML, KPIs, BPR, Conduite du changement, ERP/LIMS</p>
              </div>
              <div>
                <p className="font-bold">Savoir-être</p>
                <p className="text-gray-600">Esprit analytique, Vulgarisation technique, Rigueur, Autonomie</p>
              </div>
              <div>
                <p className="font-bold">Outils</p>
                <p className="text-gray-650">Power BI, Excel, SQL, JIRA, Confluence, Trello, No-Code & IA</p>
              </div>
              <div>
                <p className="font-bold">Langues</p>
                <p className="text-gray-650">Français (Très Bien), Anglais (Savoir-faire pro)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Education = () => {
  const education = [
    {
      id: "01",
      title: "Ingénierie des Processus Métier",
      institution: "Formation Continue d'Excellence",
      period: "2026 (Actuel)",
      type: "Spécialisation Avancée",
      description: "Conception de bout en bout, orchestration technique et pilotage de la performance opérationnelle.",
      icon: <Cpu size={18} className="text-white" />,
      skills: [
        "Alignement stratégique & gouvernance des flux",
        "Modélisation analytique avancée",
        "Conception d'indicateurs clés de performance (KPIs)"
      ],
      tags: ["BPM Suites", "KPI Design", "Governance"]
    },
    {
      id: "02",
      title: "Groupe d'Etude Prépa Certif Business Analyst",
      institution: "IIBA Cameroon Chapter",
      period: "Certification IIBA",
      type: "Cursus Professionnel",
      description: "Parcours de préparation intensive aux certifications internationales de l'IIBA, couvrant le BABOK Guide v3.",
      icon: <Award size={18} className="text-white" />,
      skills: [
        "Ingénierie des exigences d'affaires complexes",
        "Cadrage stratégique et design de solutions",
        "Conduite du changement agile (BABOK Guide)"
      ],
      tags: ["BABOK v3", "IIBA Chapter", "Requirements"]
    },
    {
      id: "03",
      title: "Optimisation & Réingénierie des Processus",
      institution: "Formation continue expert",
      period: "Expertise Opérationnelle",
      type: "Méthodologie Continue",
      description: "Maîtrise des approches BPR et Lean pour éliminer systématiquement les gaspillages et restructurer les flux.",
      icon: <BookOpen size={18} className="text-white" />,
      skills: [
        "Business Process Reengineering (BPR)",
        "Éradication systémique des tâches sans valeur",
        "Identification de dysfonctionnements complexes"
      ],
      tags: ["BPR", "Lean Strategy", "Efficiency"]
    },
    {
      id: "04",
      title: "Cartographie des Processus Métier (BPMN)",
      institution: "Standard International OMG",
      period: "Expertise Technique",
      type: "Accréditation Standard",
      description: "Maîtrise de la norme universelle BPMN 2.0 pour la description logique et fluide des processus métiers complexes.",
      icon: <GraduationCap size={18} className="text-white" />,
      skills: [
        "Grammaire standard BPMN 2.0",
        "Diagrammes de collaboration complexes",
        "Transition vers les spécifications techniques"
      ],
      tags: ["BPMN 2.0", "Process Mapping", "OMG Standard"]
    }
  ];

  return (
    <section id="education" className="py-24 border-t border-silver-400/10 relative overflow-hidden bg-black/20">
      {/* Subtle light background spot */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/[0.01] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-silver-500" />
              <span className="text-xs font-bold text-silver-400 uppercase tracking-[0.3em]">Perfectionnement</span>
            </div>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-white tracking-tighter leading-tight">
              Formation & <br />Accréditations
            </h3>
          </div>
          <div className="lg:col-span-7 lg:pl-12 lg:border-l border-silver-400/10 pt-4 lg:pt-0">
            <p className="text-silver-400 text-lg md:text-xl font-light leading-relaxed">
              Un engagement structuré dans l'acquisition continue de compétences de pointe. Je m'appuie sur des standards reconnus mondialement (IIBA, OMG) pour garantir à mes partenaires des méthodologies rigoureuses, pragmatiques et hautement qualifiées.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.215, 0.61, 0.355, 1]
              }}
              className="p-8 md:p-10 bg-silver-900/30 backdrop-blur-sm silver-border rounded-sm hover:bg-silver-900/60 hover:border-silver-100/30 transition-all duration-500 group relative flex flex-col justify-between"
            >
              {/* Decorative design corner line */}
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-transparent group-hover:border-white/30 transition-colors duration-500" />
              
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-silver-900/80 silver-border rounded-sm flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-500">
                      <span className="text-white group-hover:text-black transition-colors duration-500">
                        {item.icon}
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] sm:text-xs font-mono font-medium tracking-widest px-2 py-0.5 bg-silver-900 text-silver-400 rounded-sm silver-border">
                        {item.period}
                      </span>
                    </div>
                  </div>
                  <span className="font-mono text-3xl font-light text-silver-700/50 group-hover:text-silver-300 transition-colors duration-500">
                    {item.id}
                  </span>
                </div>

                <div className="mb-2">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-silver-500 font-sans block mb-1">
                    {item.type}
                  </span>
                  <h4 className="text-xl sm:text-2xl font-bold text-white font-display tracking-tight group-hover:translate-x-1 transition-transform duration-300">
                    {item.title}
                  </h4>
                  <p className="text-xs text-silver-400/80 font-medium font-mono mt-1 mb-4">
                    {item.institution}
                  </p>
                </div>

                <p className="text-silver-400 text-sm leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Key competences */}
                <div className="mb-6 pt-5 border-t border-silver-400/5">
                  <h5 className="text-[10px] font-bold uppercase tracking-widest text-silver-500 mb-3 font-sans">Compétences clés acquises</h5>
                  <ul className="space-y-2">
                    {item.skills.map((skillItem, idx) => (
                      <li key={idx} className="flex items-start text-xs text-silver-300 leading-relaxed">
                        <span className="text-silver-550 mr-2 font-mono">•</span>
                        <span>{skillItem}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Technologies/Frameworks pills */}
              <div className="pt-5 border-t border-silver-400/5">
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-[9px] font-mono tracking-wider px-2 py-0.5 bg-black/60 text-silver-400 border border-silver-450/5 rounded-sm hover:text-white hover:border-silver-100/10 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Analyse des Processus Métier",
      description: "Audit complet et modélisation des flux de travail pour identifier les inefficacités et proposer des solutions d'optimisation structurées.",
      tags: ["AS-IS Analysis", "BPMN 2.0", "Consulting"],
      image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Cartographie des Risques",
      description: "Identification, évaluation et hiérarchisation des risques métiers pour sécuriser les processus critiques et garantir la résilience organisationnelle.",
      tags: ["Risk Analysis", "Audit IT", "Compliance"],
      image: "https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Audit de Transformation Digitale",
      description: "Analyse de maturité numérique et définition d'une roadmap stratégique pour la migration vers un ERP.",
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

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Qu'est-ce que le BPM (Business Process Management) et quel est son intérêt ?",
      answer: "Le BPM (Management des Processus Métier) est une discipline clé qui consiste à analyser, modéliser, optimiser et standardiser les flux de votre organisation. Son but premier est de chasser l’incohérence opérationnelle : éliminer les doublons, clarifier les rôles et rationaliser les parcours de travail pour s'aligner sur votre stratégie."
    },
    {
      question: "Pourquoi est-il indispensable de modéliser nos processus avant d'intégrer un ERP ou un nouvel outil IT ?",
      answer: "Automatiser un flux inefficace ne fait qu'« automatiser le désordre » et engendre des surcoûts d'intégration majeurs. Modéliser en BPMN 2.0 en amont permet de simplifier les circuits opérationnels, de définir des exigences techniques propres issues de la réalité d'affaires et de maximiser le retour sur investissement de vos projets logiciels d'entreprise."
    },
    {
      question: "Comment collabore-t-on avec un IT Business Analyst & Process Consultant ?",
      answer: "J’interviens comme le traducteur et le facilitateur de confiance entre vos équipes métier (qui subissent les frictions opérationnelles) et vos équipes techniques ou intégrateurs systèmes. À travers des ateliers guidés par le standard international BABOK v3, nous co-construisons des cartographies fidèles, des analyses d’écarts fonctionnels et des plans de transition vers la performance."
    },
    {
      question: "Quels livrables concrets vais-je recevoir à la fin d'une mission de conseil ?",
      answer: "Les livrables de choix comprennent : le Document de Cadrage d'Affaires, des Cartographies de processus AS-IS (existant) et TO-BE (cible) au standard OMG BPMN 2.0, des procédures opérationnelles standardisées (SOP) pour vos collaborateurs, le Dossier de Spécifications Fonctionnelles Détaillées pour vos équipes IT, et les plans de tests d'acceptation utilisateur (UAT)."
    },
    {
      question: "Combien de temps dure généralement une intervention type ?",
      answer: "La durée varie de manière fluide selon les objectifs visés. Une mission initiale de diagnostic opérationnel, d'identification d'écarts ou de cadrage s'étend généralement sur 2 à 4 semaines. Un accompagnement d'envergure, incluant l'optimisation des flux complexes et le support à la mise en œuvre de solutions d'affaires durables, peut nécessiter plusieurs mois de collaboration agile."
    },
    {
      question: "Intervenez-vous également sur l’accompagnement au changement des équipes ?",
      answer: "Absolument. Une transformation n’est efficace que si elle est adoptée par les collaborateurs de terrain. J'intègre des démarches d’accompagnement au changement (méthode ADKAR) tout au long du cycle du projet (SOP clairs, ateliers d'appropriation, et formations pratiques) pour garantir l'adoption définitive des nouvelles méthodes."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 border-t border-silver-400/10 bg-black relative overflow-hidden">
      {/* Visual ornaments supporting the high-profile mood */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-white/[0.005] rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 w-full">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/[0.02] border border-white/5 rounded-sm mb-4">
            <HelpCircle size={13} className="text-amber-500" />
            <span className="text-[10px] font-bold text-silver-400 uppercase tracking-[0.2em] font-mono">FAQ • Réponses d'expert</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-display tracking-tight text-white mb-6">
            Questions Fréquentes
          </h2>
          <p className="text-silver-400 text-sm md:text-base font-light leading-relaxed">
            Comprendre la valeur de l'alignement stratégique et de la réingénierie des processus au service de la performance de votre organisation.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className="bg-silver-900/10 border border-silver-850 hover:border-silver-800 transition-all duration-300 rounded-sm overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 md:py-6 flex justify-between items-center gap-4 text-left group hover:bg-white/[0.01] transition-colors focus:outline-none bg-transparent"
                  style={{ minHeight: "44px" }}
                  aria-expanded={isOpen}
                >
                  <span className="text-sm md:text-base font-bold text-white group-hover:text-amber-400 transition-colors tracking-tight font-display">
                    {faq.question}
                  </span>
                  <div className={`p-1 bg-white/[0.03] border border-white/5 rounded-sm text-silver-400 group-hover:text-white group-hover:bg-white/[0.08] transition-all flex-shrink-0 duration-300 ${isOpen ? 'rotate-180 text-amber-500 border-amber-500/10' : ''}`}>
                    <ChevronDown size={16} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </div>
                </button>

                <motion.div
                  initial={false}
                  animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 md:pb-7 text-xs md:text-sm text-silver-400 leading-relaxed font-light border-l-2 border-amber-500/40 ml-6 pl-4 pt-2 pb-2">
                    {faq.answer}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const collaborations = [
    "Missions de conseil",
    "Projets de transformation",
    "Optimisation des processus",
    "Accompagnement des équipes"
  ];

  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white text-black p-8 sm:p-12 md:p-20 rounded-sm silver-glow flex flex-col lg:flex-row justify-between items-center gap-12">
          <div className="max-w-xl text-center lg:text-left">
            <div className="flex justify-center lg:justify-start items-center gap-2 mb-4">
              <span className="h-px w-6 bg-black" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-black/60 font-mono">Collaboration &amp; Synergie</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 tracking-tighter text-black font-display leading-tight">
              Prêt à optimiser <br />vos processus ?
            </h2>
            <p className="text-base sm:text-lg text-black/70 mb-8 font-light leading-relaxed">
              Discutons de vos enjeux de performance et de la manière dont je peux vous accompagner dans votre transformation opérationnelle.
            </p>
            
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              {collaborations.map((col, index) => (
                <span 
                  key={index} 
                  className="text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 bg-black/5 text-black hover:bg-black/10 transition-colors border border-black/10 rounded-sm font-mono"
                >
                  • {col}
                </span>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col space-y-4 w-full md:w-auto md:min-w-[340px]">
            <a href="mailto:steve.emane97@gmail.com" className="px-10 py-5 bg-black text-white font-bold rounded-sm flex items-center justify-center hover:bg-silver-800 transition-all active:scale-98">
              <Mail size={18} className="mr-3" />
              Me contacter par email
            </a>
            <div className="flex justify-center lg:justify-start space-x-6 pt-6 border-t border-black/10">
              <a href="https://cm.linkedin.com/in/emane-steve" className="text-black hover:text-silver-600 transition-colors" target="_blank" rel="noopener noreferrer">
                <Linkedin size={22} />
              </a>
              <a href="https://wa.me/237622186389" className="text-black hover:text-silver-600 transition-colors" target="_blank" rel="noopener noreferrer">
                <MessageCircle size={22} />
              </a>
              <a href="https://www.instagram.com/emane.pro?utm_source=qr&igsh=MWszcGwwNzl0YzNwMA==" className="text-black hover:text-silver-600 transition-colors" target="_blank" rel="noopener noreferrer">
                <Instagram size={22} />
              </a>
              <a href="https://www.tiktok.com/@ing.semane?_r=1&_t=ZS-95E7A1dXcwS" className="text-black hover:text-silver-600 transition-colors" target="_blank" rel="noopener noreferrer">
                <svg 
                  viewBox="0 0 24 24" 
                  width="22" 
                  height="22" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  fill="none" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </a>
              <a href="https://x.com/emane_steve" className="text-black hover:text-silver-600 transition-colors" target="_blank" rel="noopener noreferrer">
                <svg 
                  viewBox="0 0 24 24" 
                  width="20" 
                  height="20" 
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
          <a href={isHomePage ? "#education" : "/#education"} className="hover:text-white hover:underline underline-offset-4 transition-all py-2">Formation</a>
          <a href={isHomePage ? "#projects" : "/#projects"} className="hover:text-white hover:underline underline-offset-4 transition-all py-2">Projets</a>
          <a href={isHomePage ? "#faq" : "/#faq"} className="hover:text-white hover:underline underline-offset-4 transition-all py-2">FAQ</a>
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
      <Challenges />
      <Expertise />
      <DeliverablesAndResults />
      <Experience />
      <Education />
      <Projects />
      <FAQ />
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
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
