import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Menu, X, Play, Award, Code, Briefcase, GraduationCap } from 'lucide-react';

// Import your images
import cppCert from './assets/certificates/c++.jpg';
import cCert from './assets/certificates/cLanguage.png';
import pythonCert from './assets/certificates/python.png';
import htmlCert from './assets/certificates/html.jpg';
import jpuraCert from './assets/certificates/japura.png';
import webdesignCert from './assets/certificates/webdesign.png';
import profileImage from './assets/certificates/profile.jpg'; // Add your profile image

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Professional Portfolio Website",
      description: "A modern, responsive portfolio website built with React and Tailwind CSS. Features smooth navigation, interactive project showcases, certification displays, and comprehensive skill presentation.",
      tech: ["React", "Tailwind CSS", "Lucide Icons", "Responsive Design"],
      github: "https://github.com/kaveesha-muthunilmi/portfolio",
      demo: "#",
      features: ["Responsive Design", "Interactive Modals", "Smooth Navigation", "Professional Layout"],
      status: "Completed"
    },
    {
      id: 2,
      title: "WellCore | Personal Wellness Mobile App",
      description: "Designed and developed a wellness-focused Android application to help users build healthy habits, track moods, and stay hydrated with ease. Features include habit tracking, mood analytics, water intake reminders, and interactive widgets.",
      tech: ["Android Studio", "Kotlin", "AlarmManager", "MPAndroidChart", "Widgets", "Room Database"],
      github: "https://github.com/kaveesha-muthunilmi/wellcore-app",
      demo: "https://youtube.com/watch?v=your-demo",
      features: ["Habit Tracking", "Mood Analytics", "Water Reminders", "Interactive Widgets", "Data Visualization"],
      status: "Completed"
    },
    {
      id: 3,
      title: "Salary Management System",
      description: "A full-stack web application designed to calculate, track, and manage employee salaries, built using the MERN stack with advanced reporting features.",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "Chart.js"],
      github: "https://github.com/kaveesha-muthunilmi/salary-management",
      demo: "https://youtube.com/watch?v=your-demo",
      features: ["Employee Management", "Salary Calculation", "PDF Reports", "Analytics Dashboard"],
      status: "Completed"
    },
    {
      id: 4,
      title: "EverGreen | Tea Collection Mobile App",
      description: "Designed and built an Android application to digitalize and streamline the tea leaf collection process between farmers and factories with real-time tracking.",
      tech: ["Android Studio", "Java", "Kotlin", "Firebase", "Google Maps API"],
      github: "https://github.com/kaveesha-muthunilmi/evergreen-app",
      demo: "https://youtube.com/watch?v=your-demo",
      features: ["Farmer Registration", "Collection Tracking", "Payment Processing", "Real-time Updates"],
      status: "Completed"
    },
    {
      id: 5,
      title: "Uni Hub | Online Customer Care System",
      description: "Developed a dedicated online portal for university students to submit queries and receive support from the administration, built on the Java EE stack.",
      tech: ["JSP", "Servlets", "MySQL", "Bootstrap", "AJAX"],
      github: "https://github.com/kaveesha-muthunilmi/unihub-system",
      demo: "https://youtube.com/watch?v=your-demo",
      features: ["Ticket System", "Admin Dashboard", "Email Notifications", "Knowledge Base"],
      status: "Completed"
    },
    {
      id: 6,
      title: "Medcore | Diet Plan & Health Checkup System",
      description: "A web-based platform developed in my first year to allow users to create customized diet plans and schedule health checkups with healthcare professionals.",
      tech: ["HTML", "CSS", "JavaScript", "PHP", "Java", "MySQL"],
      github: "https://github.com/kaveesha-muthunilmi/medcore-system",
      demo: "https://youtube.com/watch?v=your-demo",
      features: ["Diet Planning", "Appointment Booking", "Health Tracking", "Doctor Consultations"],
      status: "Completed"
    }
  ];

  const certifications = [
    { 
      name: "Web Design for Beginners", 
      issuer: "University of Moratuwa", 
      date: "May 2024",
      verification: "HG9GMxV9u2",
      image: webdesignCert
    },
    { 
      name: "Python for Beginners", 
      issuer: "University of Moratuwa", 
      date: "Apr 2023",
      verification: "Xrwq8BADeT",
      image: pythonCert
    },
    { 
      name: "Introduction to C++", 
      issuer: "Sololearn", 
      date: "Aug 2024",
      verification: "CC-SJZTUSJB",
      image: cppCert
    },
    { 
      name: "Introduction to HTML", 
      issuer: "Sololearn", 
      date: "Aug 2024",
      verification: "N/A",
      image: htmlCert
    },
    { 
      name: "Introduction to C", 
      issuer: "Sololearn", 
      date: "Jul 2024",
      verification: "CC-035JM6WO",
      image: cCert
    },
    { 
      name: "J'PURAXTREME Participation", 
      issuer: "IEEE University of Sri Jayewardenepura", 
      date: "Oct 2025",
      verification: "N/A",
      image: jpuraCert
    }
  ];

  const skills = {
    "Programming Languages": ["Python", "Java", "C++", "C", "JavaScript", "Kotlin"],
    "Web Development": ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express.js", "MERN Stack"],
    "Mobile Development": ["Android Studio", "Kotlin", "Java", "Room Database", "Firebase"],
    "Databases": ["MySQL", "MongoDB", "SQLite"],
    "Tools & Technologies": ["Git", "GitHub", "REST APIs", "JWT", "Chart.js", "MPAndroidChart"],
    "Soft Skills": ["Teamwork", "Time Management", "Problem-Solving", "Effective Communication"]
  };

  const scrollToSection = (section) => {
    setActiveSection(section);
    setMobileMenuOpen(false);
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  const openCertificate = (cert) => {
    setSelectedCert(cert);
  };

  const closeCertificate = () => {
    setSelectedCert(null);
  };

  const openProjectModal = (project) => {
    setSelectedProject(project);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-200 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center text-white font-bold shadow-sm">
                KM
              </div>
              <span className="text-xl font-bold text-gray-800 hidden sm:block">
                Kaveesha Muthunilmi
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-2">
              {['home', 'about', 'projects', 'education', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize font-medium px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeSection === section
                      ? 'text-white bg-blue-700 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} className="text-gray-600" /> : <Menu size={24} className="text-gray-600" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 bg-white border-t border-gray-200">
              {['home', 'about', 'projects', 'education', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`block w-full text-left py-3 px-4 capitalize transition-colors border-b border-gray-100 ${
                    activeSection === section
                      ? 'bg-gray-100 text-gray-900 font-semibold'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section -- lighter solid blue */}
      <section id="home" className="pt-28 pb-20 px-4 bg-blue-700 text-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="mb-8">
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-6 shadow-2xl border-4 border-white/20 bg-white/5">
              <img 
                src={profileImage} 
                alt="Kaveesha Muthunilmi"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <div className="w-full h-full bg-blue-600 flex items-center justify-center text-white hidden">
                <span className="text-6xl font-bold">KM</span>
              </div>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-3 drop-shadow">KAVEESHA MUTHUNILMI</h1>
          <div className="flex items-center justify-center gap-2 mb-4">
            <Code size={24} className="text-white/90" />
            <p className="text-xl text-white/90 font-medium">Information Technology Undergraduate</p>
          </div>
          <p className="text-base text-white/80 max-w-3xl mx-auto mb-8 leading-relaxed">
            Passionate IT undergraduate specializing in full-stack and mobile development. Creating practical, user-friendly applications using modern tools and best practices.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <button
              onClick={() => scrollToSection('projects')}
              className="bg-white text-blue-700 px-6 py-3 rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-md font-semibold flex items-center gap-2"
            >
              <Briefcase size={18} />
              View Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white/10 transition-all duration-200 font-semibold"
            >
              Contact Me
            </button>
          </div>
        </div>
      </section>

      {/* About Section (UPDATED: shorter blue tones + About Me inserted) */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-4">
              <Award size={18} />
              <span className="font-semibold">Technical Expertise</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>

            <p className="text-base text-gray-700 max-w-3xl mx-auto leading-relaxed">
              I am a Software Engineering Undergraduate at SLIIT with a strong interest in full-stack development, mobile application development, and modern software architecture. I enjoy building practical, user-focused solutions and writing clean, scalable, and maintainable code.
            </p>

            <p className="text-base text-gray-700 max-w-3xl mx-auto mt-4 leading-relaxed">
              My technical expertise includes <strong>Java, Python, C++, JavaScript/TypeScript, React.js, Node.js, Express.js, Firebase, MongoDB, SQL Server</strong>, and tools such as <strong>Git/GitHub, Agile methodologies,</strong> and <strong>Electron.js</strong>. I continuously develop my communication, teamwork, and leadership skills to grow as a well-rounded software professional.
            </p>

            <p className="text-base text-gray-700 max-w-3xl mx-auto mt-4 leading-relaxed">
              I’m a curious and passionate learner who loves exploring how technology can simplify everyday life. Whether it’s a web app, mobile app, or an innovative side project, I enjoy creating clean, simple, and impactful digital experiences. Currently, I’m expanding my full-stack skills and working on meaningful projects that challenge me to improve every day. I’m always open to learning, collaborating, and building something exciting.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all">
                <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-700 rounded-full"></div>
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <span
                      key={skill}
                      className="bg-blue-100 px-3 py-1.5 rounded-lg text-sm text-blue-700 border border-blue-100 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-4">
              <Briefcase size={18} />
              <span className="font-semibold">Portfolio</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Featured Projects</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Showcasing solutions across web and mobile platforms.
            </p>
          </div>
          
          <div className="space-y-6">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-200 overflow-hidden">
                <div className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                        <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                          <Code size={20} className="text-gray-600" />
                          {project.title}
                        </h3>
                        <span className={`px-3 py-1.5 rounded-full text-sm font-semibold shadow-sm ${
                          project.status === 'Completed' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {project.status}
                        </span>
                      </div>
                      
                      <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                      
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-700 mb-3">Key Features</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.features.map((feature, index) => (
                            <span key={index} className="bg-gray-50 text-gray-700 px-3 py-1.5 rounded-lg text-sm border border-gray-200 font-medium">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-lg text-sm border border-gray-200 font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-3 lg:w-auto">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-all text-center font-medium flex items-center justify-center gap-2 whitespace-nowrap"
                      >
                        <Github size={16} />
                        GitHub
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all text-center font-medium flex items-center justify-center gap-2 whitespace-nowrap"
                      >
                        <Play size={16} />
                        Demo
                      </a>
                      <button
                        onClick={() => openProjectModal(project)}
                        className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:border-gray-500 hover:bg-gray-50 transition-all text-center font-medium whitespace-nowrap"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certifications Section */}
      <section id="education" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-4">
              <GraduationCap size={18} />
              <span className="font-semibold">Academic Background</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Education & Certifications</h2>
          </div>
          
          {/* Education */}
          <div className="mb-12">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex flex-col lg:flex-row justify-between items-start gap-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">BSc (Hons) in Information Technology</h3>
                  <p className="text-lg text-gray-600 mb-1">Sri Lanka Institute of Information Technology (SLIIT)</p>
                  <p className="text-sm text-gray-500">Expected Graduation: 2027</p>
                </div>
                <div className="text-right">
                  <span className="text-gray-600 bg-gray-50 px-4 py-2 rounded-lg border border-gray-100 inline-block mb-3">2023 - Present</span>
                  <p className="text-xl font-bold text-blue-700">Current GPA: 3.3 / 4.0</p>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Professional Certifications</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-200 overflow-hidden cursor-pointer"
                  onClick={() => openCertificate(cert)}
                >
                  {/* header: solid lighter blue block with certificate image centered (no emoji/text overlay) */}
                  <div className="h-40 bg-blue-700 flex items-center justify-center p-4 overflow-hidden">
                    <img 
                      src={cert.image} 
                      alt={cert.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>

                  <div className="p-5">
                    <h4 className="font-bold text-gray-800 mb-2 text-lg">{cert.name}</h4>
                    <p className="text-sm text-gray-600 mb-1 font-medium">{cert.issuer}</p>
                    <p className="text-sm text-gray-500 mb-3">{cert.date}</p>
                    {cert.verification && cert.verification !== "N/A" && (
                      <p className="text-xs text-blue-700 font-mono bg-blue-100 px-2 py-1 rounded">ID: {cert.verification}</p>
                    )}
                    <div className="mt-3">
                      <button className="text-blue-700 text-sm font-semibold flex items-center gap-2">
                        View Certificate <ExternalLink size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <Mail size={48} className="mx-auto mb-4 text-white/80" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Let's collaborate on your next project or discuss new opportunities.
            </p>
          </div>
          
          <div className="bg-white/10 rounded-xl shadow-lg border border-white/10 p-6">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="flex flex-col items-center p-4 rounded-xl bg-white/5 border border-white/5">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-3">
                  <Phone className="w-6 h-6 text-blue-700" />
                </div>
                <h3 className="font-bold text-lg mb-1">Phone</h3>
                <p className="text-white/80">076-1620836</p>
              </div>
              
              <div className="flex flex-col items-center p-4 rounded-xl bg-white/5 border border-white/5">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-3">
                  <Mail className="w-6 h-6 text-blue-700" />
                </div>
                <h3 className="font-bold text-lg mb-1">Email</h3>
                <p className="text-white/80 text-sm">kaveeshamuthunilmi@gmail.com</p>
              </div>
              
              <div className="flex flex-col items-center p-4 rounded-xl bg-white/5 border border-white/5">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-3">
                  <MapPin className="w-6 h-6 text-blue-700" />
                </div>
                <h3 className="font-bold text-lg mb-1">Location</h3>
                <p className="text-white/80 text-sm">Ehalakanda, Aluthihala, Mapalagama, Galle</p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <div className="flex justify-center gap-4">
                <a href="https://github.com/kaveesha-muthunilmi" target="_blank" rel="noopener noreferrer" 
                   className="bg-white text-blue-700 p-3 rounded-lg hover:bg-gray-100 transition-all shadow-sm">
                  <Github />
                </a>
                <a href="https://linkedin.com/in/kaveesha-muthunilmi" target="_blank" rel="noopener noreferrer"
                   className="bg-white text-blue-700 p-3 rounded-lg hover:bg-gray-100 transition-all shadow-sm">
                  <Linkedin />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
              KM
            </div>
            <span className="text-2xl font-bold">Kaveesha Muthunilmi</span>
          </div>
          <p className="text-gray-400 mb-4">Information Technology Undergraduate | Full-Stack & Mobile Developer</p>
          <p className="text-gray-500 text-sm">© 2024 Kaveesha Muthunilmi. All rights reserved.</p>
        </div>
      </footer>

      {/* Certificate Modal */}
      {selectedCert && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-blue-700 text-white rounded-t-xl">
              <h3 className="text-lg font-bold">{selectedCert.name}</h3>
              <button
                onClick={closeCertificate}
                className="text-white hover:bg-white/10 p-2 rounded-md"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal body: two-column layout on wide screens. Left: image (fits), Right: details */}
            <div className="p-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div style={{ flex: '1 1 60%', display: 'flex', alignItems: 'center', justifyContent: 'center', maxHeight: '70vh', overflow: 'hidden' }}>
                  {/* Image fits to available area without causing the page to scroll */}
                  <img
                    src={selectedCert.image}
                    alt={selectedCert.name}
                    style={{ maxWidth: '100%', maxHeight: '70vh', objectFit: 'contain', borderRadius: 8 }}
                  />
                </div>

                <div style={{ flex: '1 1 40%', overflowY: 'auto', paddingRight: 8 }}>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <p className="font-semibold text-gray-700 mb-2">Issuer</p>
                    <p className="text-gray-600 mb-3">{selectedCert.issuer}</p>

                    <p className="font-semibold text-gray-700 mb-2">Date</p>
                    <p className="text-gray-600 mb-3">{selectedCert.date}</p>

                    {selectedCert.verification && selectedCert.verification !== "N/A" && (
                      <>
                        <p className="font-semibold text-gray-700 mb-2">Verification Code</p>
                        <p className="text-gray-600 font-mono mb-3">{selectedCert.verification}</p>
                      </>
                    )}

                    <div className="mt-4 flex gap-2">
                      <a href={selectedCert.image} target="_blank" rel="noreferrer" className="px-4 py-2 bg-blue-700 text-white rounded-md font-semibold">
                        Open Image
                      </a>
                      <button onClick={closeCertificate} className="px-4 py-2 border border-gray-300 rounded-md">
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-auto shadow-2xl">
            <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-blue-700 text-white rounded-t-xl">
              <div className="flex items-center gap-3">
                <Code size={20} />
                <h3 className="text-lg font-bold">{selectedProject.title}</h3>
              </div>
              <button onClick={closeProjectModal} className="text-white hover:bg-white/10 p-2 rounded-md">
                <X size={20} />
              </button>
            </div>

            <div className="p-6">
              <h4 className="text-lg font-bold mb-2">Project Description</h4>
              <p className="text-gray-700 mb-4">{selectedProject.description}</p>

              <h4 className="text-lg font-bold mb-2">Key Features</h4>
              <ul className="list-disc pl-5 mb-4">
                {selectedProject.features.map((f, i) => <li key={i} className="text-gray-700 mb-1">{f}</li>)}
              </ul>

              <h4 className="text-lg font-bold mb-2">Technologies Used</h4>
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject.tech.map((t) => <span key={t} className="px-3 py-1 rounded bg-gray-100 border text-gray-700">{t}</span>)}
              </div>

              <div className="flex gap-3">
                <a href={selectedProject.github} target="_blank" rel="noreferrer" className="px-4 py-2 bg-blue-700 text-white rounded-md">GitHub</a>
                <a href={selectedProject.demo} target="_blank" rel="noreferrer" className="px-4 py-2 bg-blue-600 text-white rounded-md">Demo</a>
                <button onClick={closeProjectModal} className="px-4 py-2 border rounded-md">Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
