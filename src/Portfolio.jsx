import { useEffect, useState } from 'react';
import { ArrowUpRight, Check, Code2, Database, Download, ExternalLink, Github, GraduationCap, Layers3, Linkedin, Mail, Menu, Moon, Send, Smartphone, Sparkles, Sun, X } from 'lucide-react';
import portrait from './assets/certificates/profile.jpg';
import cv from './assets/cv/Kaveesha_CV.pdf';
import webdesign from './assets/certificates/webdesign.png';
import python from './assets/certificates/python.png';
import cpp from './assets/certificates/c++.jpg';
import html from './assets/certificates/html.jpg';
import c from './assets/certificates/cLanguage.png';
import japura from './assets/certificates/japura.png';
import wellcoreImage from './assets/Wellcore.png';
import budgetImage from './assets/My-Budget-pal.png';
import evergreenImage from './assets/ever-green.png';
import unihubImage from './assets/UniHub.png';
import medcoreImage from './assets/MedCore.png';
import portfolioImage from './assets/portfolio.png';

const projects = [
  { name: 'WellCore', type: 'Wellness mobile app', description: 'A friendly daily wellness companion for building habits, tracking moods and staying hydrated.', tags: ['Kotlin', 'Java', 'SQLite'], github: 'https://github.com/Kaveesha0107/WellnessApp', showcase: 'https://www.linkedin.com/posts/kaveesha-muthunilmi_androiddevelopment-mobileappdevelopment-wellnessapp-activity-7407708595544293377-sWV2', image: wellcoreImage, imageType: 'mobile' },
  { name: 'MyBudgetPal', type: 'Full-stack web app', description: 'A salary management system for employee records, calculations and clearer reporting.', tags: ['MongoDB', 'Express', 'React', 'Node.js'], github: 'https://github.com/Kaveesha0107/MyBudgetPal', showcase: 'https://www.linkedin.com/posts/kaveesha-muthunilmi_mernstack-fullstackdevelopment-groupproject-activity-7417469442286227456-DBVG', image: budgetImage },
  { name: 'EverGreen', type: 'Tea collection app', description: 'An Android app that helps farmers and factories streamline tea leaf collection.', tags: ['Android', 'Java', 'Firebase'], github: 'https://github.com/Kaveesha0107/EverGreenApp', showcase: 'https://www.linkedin.com/posts/kaveesha-muthunilmi_sliit-uiuxdesign-androiddevelopment-activity-7387184039025319937-yr8-', image: evergreenImage, imageType: 'mobile' },
  { name: 'Uni Hub', type: 'Support portal', description: 'A customer care portal for university students to submit questions and receive support.', tags: ['Java', 'JSP', 'MySQL'], github: 'https://github.com/Kaveesha0107/Unihub.git', image: unihubImage },
  { name: 'Medcore', type: 'Health planning platform', description: 'A web platform for creating diet plans and scheduling health checkups.', tags: ['PHP', 'JavaScript', 'MySQL'], github: 'https://github.com/Kaveesha0107/MedCore.git', image: medcoreImage },
  { name: 'Portfolio Website', type: 'Web application', description: 'A responsive personal website showcasing my projects, skills and education.', tags: ['React', 'JavaScript', 'CSS'], github: 'https://github.com/Kaveesha0107/my-portfolio', image: portfolioImage },
];

const skills = [
  { title: 'Code languages', icon: Code2, items: ['Java', 'Python', 'JavaScript', 'Kotlin', 'C', 'C++'] },
  { title: 'Web & mobile', icon: Smartphone, items: ['React', 'Node.js', 'Express.js', 'HTML / CSS', 'Android Studio'] },
  { title: 'Data & tools', icon: Database, items: ['MongoDB', 'MySQL', 'Firebase', 'Git & GitHub', 'REST APIs'] },
];

const certificates = [
  ['Web Design for Beginners', 'University of Moratuwa', webdesign], ['Python for Beginners', 'University of Moratuwa', python], ['Introduction to C++', 'Sololearn', cpp], ['Introduction to HTML', 'Sololearn', html], ['Introduction to C', 'Sololearn', c], ["J'PURAXTREME Participation", 'IEEE University of Sri Jayewardenepura', japura],
];

const navItems = [['About', '#about'], ['Education', '#education'], ['Projects', '#work'], ['Skills', '#toolbox'], ['Contact', '#contact']];

const education = [
  { title: 'BSc (Hons) in Software Engineering', institution: 'Sri Lanka Institute of Information Technology (SLIIT)', date: '2023 — Present' },
  { title: 'G.C.E. Advanced Level — Physical Science', institution: 'G/Janadipathi Balika Vidyalaya' },
  { title: 'Grade 1–11 Education', institution: 'G/Nagoda Royal College' },
];

const typewriterPhrases = ['Turning ideas into code', 'Creating web & mobile experiences'];

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [typedPhrase, setTypedPhrase] = useState('');
  const [theme, setTheme] = useState(() => {
    try {
      return window.localStorage.getItem('portfolio-theme') === 'light' ? 'light' : 'dark';
    } catch {
      return 'dark';
    }
  });

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    try {
      window.localStorage.setItem('portfolio-theme', nextTheme);
    } catch {
      // The theme still works for this visit if storage is unavailable.
    }
  };

  useEffect(() => {
    const onKeyDown = (event) => { if (event.key === 'Escape') { setMenuOpen(false); setSelectedProject(null); } };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  useEffect(() => {
    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
    let timer;
    let phraseIndex = 0;
    let length = 0;
    let deleting = false;

    const tick = () => {
      const phrase = typewriterPhrases[phraseIndex];
      length += deleting ? -1 : 1;
      setTypedPhrase(phrase.slice(0, length));

      let delay = deleting ? 70 : 120;
      if (!deleting && length === phrase.length) {
        deleting = true;
        delay = 1500;
      } else if (deleting && length === 0) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % typewriterPhrases.length;
        delay = 350;
      }
      timer = window.setTimeout(tick, delay);
    };

    const start = () => {
      window.clearTimeout(timer);
      phraseIndex = 0;
      length = 0;
      deleting = false;
      if (motionPreference.matches) {
        setTypedPhrase(typewriterPhrases[0]);
      } else {
        setTypedPhrase('');
        timer = window.setTimeout(tick, 300);
      }
    };

    start();
    motionPreference.addEventListener('change', start);
    return () => {
      window.clearTimeout(timer);
      motionPreference.removeEventListener('change', start);
    };
  }, []);

  useEffect(() => {
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const elements = document.querySelectorAll('.about-layout > div, .section-header > *, .education-heading, .education-card, .work-card, .skill-card, .learning-row > div:first-child, .certificate-list a, .contact-copy, .contact-links a');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        } else if (entry.boundingClientRect.bottom < 0 || entry.boundingClientRect.top > window.innerHeight) {
          entry.target.classList.remove('is-visible');
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -45px 0px' });
    elements.forEach((element) => {
      const siblings = Array.from(element.parentElement.children);
      const index = siblings.indexOf(element);
      element.style.setProperty('--reveal-delay', `${(index % 3) * 160}ms`);
      element.classList.add('reveal-on-scroll');
      observer.observe(element);
    });
    return () => {
      observer.disconnect();
      elements.forEach((element) => {
        element.classList.remove('reveal-on-scroll', 'is-visible');
        element.style.removeProperty('--reveal-delay');
      });
    };
  }, []);

  return (
    <div className="portfolio-shell" id="top" data-theme={theme}>
      <div className="grain" aria-hidden="true" /><div className="ambient ambient-one" aria-hidden="true" /><div className="ambient ambient-two" aria-hidden="true" />
      <header className="site-header">
        <div className="frame nav-frame">
          <a href="#top" className="wordmark" aria-label="Back to top" onClick={() => setMenuOpen(false)}><span className="wordmark-mark">KM</span><span>Kaveesha Muthunilmi<span className="wordmark-dot">.</span></span></a>
          <nav id="main-navigation" className={menuOpen ? 'nav-links nav-links-open' : 'nav-links'} aria-label="Main navigation">
            {navItems.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
            <a className="nav-resume" href={cv} download="Kaveesha_Muthunilmi_CV.pdf"><Download size={15} /> Resume</a>
          </nav>
          <div className="header-controls">
            <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'} title={theme === 'dark' ? 'Light mode' : 'Dark mode'}>
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button className="menu-toggle" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-controls="main-navigation" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}>{menuOpen ? <X size={22} /> : <Menu size={22} />}</button>
          </div>
        </div>
      </header>

      <main>
        <section className="hero-section">
          <div className="hero-motion" aria-hidden="true"><span className="hero-glow hero-glow-one" /><span className="hero-glow hero-glow-two" /><span className="hero-spark hero-spark-one" /><span className="hero-spark hero-spark-two" /><span className="hero-spark hero-spark-three" /></div>
          <div className="frame hero-grid">
            <div className="hero-copy">
              <p className="section-kicker"><Sparkles size={14} /> SOFTWARE ENGINEERING UNDERGRADUATE</p>
              <h1>Hi, I’m<br /><em>Kaveesha.</em></h1>
              <p className="hero-intro">I’m Kaveesha Muthunilmi, a software engineering undergraduate interested in building practical web and mobile applications with thoughtful, user-friendly interfaces.</p>
              <p className="typewriter-line"><span className="typewriter-accessible">Turning ideas into code and creating web and mobile experiences.</span><span aria-hidden="true">{typedPhrase}<span className="typewriter-cursor">|</span></span></p>
              <div className="hero-actions"><a className="button button-primary" href="#work">View my projects <ArrowUpRight size={18} /></a><a className="button button-quiet" href="#contact">Get in touch</a></div>
            </div>
            <div className="hero-art">
              <div className="portrait-clip"><img src={portrait} alt="Kaveesha Muthunilmi" /></div>
              <div className="portrait-caption"><span>KAVEESHA MUTHUNILMI</span><strong>Software Engineering Undergraduate</strong></div>
            </div>
          </div>
        </section>

        <section id="about" className="section about-section"><div className="frame about-layout">
          <div className="section-title-block"><p className="section-kicker">ABOUT ME</p><h2>Building with<br /><em>purpose.</em></h2></div>
          <div className="about-content"><p className="about-lead">I enjoy turning ideas into practical digital experiences that are simple and intuitive to use.</p><p>I’m a Software Engineering undergraduate at SLIIT, with interests in full-stack development, mobile applications and user interface design. Through my projects, I’ve worked with technologies including React, Java, Kotlin and databases to solve real-world problems.</p><p>I value clean, maintainable code, collaboration and continuous learning as I grow as a software professional.</p></div>
        </div></section>

        <section id="education" className="section education-section"><div className="frame education-layout">
          <div className="education-heading"><p className="section-kicker">EDUCATION</p><h2>Academic<br /><em>background.</em></h2><p>My education and the foundations of my journey in software engineering.</p></div>
          <div className="education-list">{education.map((item) => <article className="education-card" key={item.title}>
            <div className="education-icon"><GraduationCap size={21} /></div>
            <div className="education-detail"><h3>{item.title}</h3><p>{item.institution}</p>{item.date && <span>{item.date}</span>}</div>
          </article>)}</div>
        </div></section>

        <section id="work" className="section work-section"><div className="frame">
          <div className="section-header"><div><p className="section-kicker">MY PROJECTS</p><h2>Selected<br /><em>work.</em></h2></div><p>A selection of web and mobile applications I’ve worked on. Explore each project to see its technologies and source code.</p></div>
          <div className="work-grid">{projects.map((project) => <article className="work-card" key={project.name}>
            <div className={`project-visual project-screenshot ${project.imageType === 'mobile' ? 'project-screenshot-mobile' : ''} ${project.name === 'EverGreen' ? 'project-screenshot-evergreen' : ''}`}><img src={project.image} alt={`${project.name} home screen`} loading="lazy" /></div>
            <div className="work-card-content"><div className="work-card-top"><span>{project.type}</span><button onClick={() => setSelectedProject(project)} aria-label={`View ${project.name} details`}><ArrowUpRight size={19} /></button></div><h3>{project.name}</h3><p>{project.description}</p><div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div>
          </article>)}</div>
        </div></section>

        <section id="toolbox" className="section toolbox-section"><div className="frame">
          <div className="section-header toolbox-heading"><div><p className="section-kicker">MY SKILLS</p><h2>Technologies<br /><em>I work with.</em></h2></div><div className="toolbox-note"><Layers3 size={18} /> Languages, frameworks and tools I’ve used to build web and mobile applications.</div></div>
          <div className="skill-grid">{skills.map(({ title, icon: Icon, items }, index) => <article className="skill-card" key={title}><span className="skill-count">0{index + 1}</span><div className="skill-icon"><Icon size={25} /></div><h3>{title}</h3><div className="skill-pills">{items.map((item) => <span key={item}>{item}</span>)}</div></article>)}</div>
          <div className="learning-row"><div><p className="section-kicker">CONTINUOUS LEARNING</p><h3>Courses &<br />certifications.</h3></div><div className="certificate-list">{certificates.map(([name, issuer, image]) => <a href={image} target="_blank" rel="noreferrer" key={name}><span><b>{name}</b><small>{issuer}</small></span><ExternalLink size={17} /></a>)}</div></div>
        </div></section>

        <section id="contact" className="contact-section"><div className="frame contact-panel">
          <div className="contact-copy"><p className="section-kicker"><Send size={14} /> GET IN TOUCH</p><h2>Let’s<br /><em>connect.</em></h2><p>Have a question or a project you’d like to discuss? Feel free to reach out by email or connect with me on LinkedIn.</p><a className="button button-primary" href="mailto:kaveeshamuthunilmi@gmail.com">Send an email <ArrowUpRight size={18} /></a></div>
          <div className="contact-links"><a href="mailto:kaveeshamuthunilmi@gmail.com"><Mail size={20} /><span><small>EMAIL</small>kaveeshamuthunilmi@gmail.com</span></a><a href="tel:0761620836"><Smartphone size={20} /><span><small>PHONE</small>076 162 0836</span></a><a href="https://github.com/Kaveesha0107" target="_blank" rel="noreferrer"><Github size={20} /><span><small>GITHUB</small>@Kaveesha0107</span></a><a href="https://www.linkedin.com/in/kaveesha-muthunilmi" target="_blank" rel="noreferrer"><Linkedin size={20} /><span><small>LINKEDIN</small>kaveesha-muthunilmi</span></a></div>
        </div></section>
      </main>
      <footer className="site-footer"><div className="frame footer-content"><span>© {new Date().getFullYear()} Kaveesha Muthunilmi</span><a href="#top">Back to top <ArrowUpRight size={15} /></a></div></footer>
      {selectedProject && <div className="modal-backdrop" onMouseDown={() => setSelectedProject(null)} role="presentation"><article className="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-modal-title" onMouseDown={(event) => event.stopPropagation()}><button className="modal-close" onClick={() => setSelectedProject(null)} aria-label="Close project details"><X size={21} /></button><p className="section-kicker">PROJECT SNAPSHOT</p><h2 id="project-modal-title">{selectedProject.name}</h2><p>{selectedProject.description}</p><div className="modal-tags">{selectedProject.tags.map((tag) => <span key={tag}><Check size={13} /> {tag}</span>)}</div><div className="modal-actions"><a className="button button-primary" href={selectedProject.github} target="_blank" rel="noreferrer"><Github size={17} /> View code</a>{selectedProject.showcase && <a className="button button-quiet" href={selectedProject.showcase} target="_blank" rel="noreferrer">Project showcase <ExternalLink size={16} /></a>}</div></article></div>}
    </div>
  );
}
