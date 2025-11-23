import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Menu, X, Play, Award, Code, Briefcase, GraduationCap } from 'lucide-react';

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
      icon: "🎨"
    },
    { 
      name: "Python for Beginners", 
      issuer: "University of Moratuwa", 
      date: "Apr 2023",
      verification: "Xrwq8BADeT",
      icon: "🐍"
    },
    { 
      name: "Introduction to C++", 
      issuer: "Sololearn", 
      date: "Aug 2024",
      verification: "CC-SJZTUSJB",
      icon: "⚙️"
    },
    { 
      name: "Introduction to HTML", 
      issuer: "Sololearn", 
      date: "Aug 2024",
      verification: "N/A",
      icon: "🌐"
    },
    { 
      name: "Introduction to C", 
      issuer: "Sololearn", 
      date: "Jul 2024",
      verification: "CC-035JM6WO",
      icon: "💻"
    },
    { 
      name: "J'PURAXTREME Participation", 
      issuer: "IEEE University of Sri Jayewardenepura", 
      date: "Oct 2025",
      verification: "N/A",
      icon: "🏆"
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Navigation Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-lg border-b border-blue-100 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-white font-bold shadow-md">
                KM
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent hidden sm:block">
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
                      ? 'text-white bg-gradient-to-r from-blue-600 to-blue-700 shadow-md'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-blue-50 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} className="text-blue-600" /> : <Menu size={24} className="text-blue-600" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 bg-white border-t border-blue-100">
              {['home', 'about', 'projects', 'education', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`block w-full text-left py-3 px-4 capitalize transition-colors border-b border-blue-50 ${
                    activeSection === section
                      ? 'bg-blue-50 text-blue-600 font-semibold'
                      : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-28 pb-20 px-4 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="mb-8">
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-6 shadow-2xl border-4 border-white/20 backdrop-blur-sm bg-white/10">
              <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white">
                <span className="text-6xl font-bold">KM</span>
              </div>
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">KAVEESHA MUTHUNILMI</h1>
          <div className="flex items-center justify-center gap-2 mb-6">
            <Code size={24} className="text-blue-200" />
            <p className="text-2xl text-blue-100 font-medium">Information Technology Undergraduate</p>
          </div>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto mb-10 leading-relaxed">
            Passionate IT undergraduate specializing in full-stack and mobile development. 
            Creating innovative software solutions with modern technologies and best practices.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <button
              onClick={() => scrollToSection('projects')}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold flex items-center gap-2 transform hover:scale-105"
            >
              <Briefcase size={20} />
              View Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold backdrop-blur-sm transform hover:scale-105"
            >
              Contact Me
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full mb-4">
              <Award size={20} />
              <span className="font-semibold">Technical Expertise</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive skill set spanning multiple technologies and frameworks
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-xl shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <span
                      key={skill}
                      className="bg-white px-3 py-1.5 rounded-lg text-sm text-gray-700 border border-blue-200 hover:border-blue-400 hover:text-blue-700 hover:shadow-md transition-all cursor-default"
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
      <section id="projects" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full mb-4">
              <Briefcase size={20} />
              <span className="font-semibold">Portfolio</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Showcasing innovative solutions across web and mobile platforms
            </p>
          </div>
          
          <div className="space-y-6">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100 overflow-hidden transform hover:-translate-y-1">
                <div className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                        <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                          <Code size={24} className="text-blue-600" />
                          {project.title}
                        </h3>
                        <span className={`px-4 py-1.5 rounded-full text-sm font-semibold shadow-sm ${
                          project.status === 'Completed' 
                            ? 'bg-gradient-to-r from-green-400 to-green-500 text-white' 
                            : 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-white'
                        }`}>
                          {project.status}
                        </span>
                      </div>
                      
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                          <div className="w-1 h-4 bg-blue-500 rounded"></div>
                          Key Features
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.features.map((feature, index) => (
                            <span key={index} className="bg-blue-50 text-blue-700 px-3 py-1.5 rounded-lg text-sm border border-blue-200 font-medium">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-lg text-sm border border-gray-300 font-medium"
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
                        className="bg-gradient-to-r from-gray-800 to-gray-900 text-white px-6 py-3 rounded-lg hover:from-gray-900 hover:to-black transition-all text-center font-medium flex items-center justify-center gap-2 whitespace-nowrap shadow-md hover:shadow-lg"
                      >
                        <Github size={18} />
                        GitHub
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all text-center font-medium flex items-center justify-center gap-2 whitespace-nowrap shadow-md hover:shadow-lg"
                      >
                        <Play size={18} />
                        Demo
                      </a>
                      <button
                        onClick={() => openProjectModal(project)}
                        className="border-2 border-blue-300 text-blue-600 px-6 py-3 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all text-center font-medium whitespace-nowrap"
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
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full mb-4">
              <GraduationCap size={20} />
              <span className="font-semibold">Academic Background</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Education & Certifications</h2>
          </div>
          
          {/* Education */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-xl shadow-xl border border-blue-700 text-white">
              <div className="flex flex-col lg:flex-row justify-between items-start gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <GraduationCap size={32} className="text-blue-200" />
                    <h3 className="text-2xl md:text-3xl font-bold">BSc (Hons) in Information Technology</h3>
                  </div>
                  <p className="text-xl text-blue-100 mb-2">Sri Lanka Institute of Information Technology (SLIIT)</p>
                  <p className="text-blue-200">Expected Graduation: 2027</p>
                </div>
                <div className="text-right">
                  <span className="text-blue-100 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/30 inline-block mb-3">2023 - Present</span>
                  <p className="text-2xl font-bold text-white">Current GPA: 3.3 / 4.0</p>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center flex items-center justify-center gap-2">
              <Award size={28} className="text-blue-600" />
              Professional Certifications
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100 overflow-hidden cursor-pointer transform hover:-translate-y-2"
                  onClick={() => openCertificate(cert)}
                >
                  <div className="h-40 bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center p-6 relative overflow-hidden">
                    <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                    <div className="text-white text-center relative z-10">
                      <div className="text-5xl mb-2">{cert.icon}</div>
                      <h4 className="font-bold text-lg">{cert.name.split(' ').slice(0, 2).join(' ')}</h4>
                    </div>
                  </div>
                  <div className="p-5">
                    <h4 className="font-bold text-gray-800 mb-2 text-lg">{cert.name}</h4>
                    <p className="text-sm text-gray-600 mb-1 font-medium">{cert.issuer}</p>
                    <p className="text-sm text-gray-500 mb-3">{cert.date}</p>
                    {cert.verification && cert.verification !== "N/A" && (
                      <p className="text-xs text-blue-600 font-mono bg-blue-50 px-2 py-1 rounded">ID: {cert.verification}</p>
                    )}
                    <button className="text-blue-600 text-sm mt-3 hover:text-blue-700 font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                      View Certificate <ExternalLink size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-blue-600 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <Mail size={48} className="mx-auto mb-4 text-blue-200" />
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Let's collaborate on your next project or discuss new opportunities
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-2xl border border-white/20 p-8">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-lg">
                  <Phone className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Phone</h3>
                <p className="text-blue-100">076-1620836</p>
              </div>
              
              <div className="flex flex-col items-center p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-lg">
                  <Mail className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Email</h3>
                <p className="text-blue-100 text-sm">kaveeshamuthunilmi@gmail.com</p>
              </div>
              
              <div className="flex flex-col items-center p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-lg">
                  <MapPin className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Location</h3>
                <p className="text-blue-100 text-sm">Ehalakanda, Aluthihala, Mapalagama, Galle</p>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-white/20">
              <div className="flex justify-center gap-4">
                <a href="https://github.com/kaveesha-muthunilmi" target="_blank" rel="noopener noreferrer" 
                   className="bg-white text-gray-800 p-4 rounded-xl hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:scale-110">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://linkedin.com/in/kaveesha-muthunilmi" target="_blank" rel="noopener noreferrer"
                   className="bg-white text-blue-600 p-4 rounded-xl hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:scale-110">
                  <Linkedin className="w-6 h-6" />
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
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
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
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-auto shadow-2xl">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-t-xl">
              <div className="flex items-center gap-3">
                <div className="text-4xl">{selectedCert.icon}</div>
                <h3 className="text-2xl font-bold">{selectedCert.name}</h3>
              </div>
              <button
                onClick={closeCertificate}
                className="text-white hover:bg-white/20 p-2 rounded-lg transition-all"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl border-2 border-blue-200 mb-6">
                <div className="text-center mb-4">
                  <div className="text-6xl mb-4">{selectedCert.icon}</div>
                  <h4 className="text-3xl font-bold text-gray-800 mb-2">{selectedCert.name}</h4>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <p className="font-semibold text-gray-700 mb-1">Issuer:</p>
                    <p className="text-gray-600 text-lg">{selectedCert.issuer}</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <p className="font-semibold text-gray-700 mb-1">Date:</p>
                    <p className="text-gray-600 text-lg">{selectedCert.date}</p>
                  </div>
                  {selectedCert.verification && selectedCert.verification !== "N/A" && (
                    <div className="md:col-span-2 bg-white p-4 rounded-lg shadow-sm">
                      <p className="font-semibold text-gray-700 mb-1">Verification Code:</p>
                      <p className="text-blue-600 font-mono text-lg">{selectedCert.verification}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-auto shadow-2xl">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-t-xl">
              <div className="flex items-center gap-3">
                <Code size={28} />
                <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
              </div>
              <button
                onClick={closeProjectModal}
                className="text-white hover:bg-white/20 p-2 rounded-lg transition-all"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-8">
              <div className="mb-6">
                <h4 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <div className="w-1 h-6 bg-blue-600 rounded"></div>
                  Project Description
                </h4>
                <p className="text-gray-600 leading-relaxed text-lg">{selectedProject.description}</p>
              </div>

              <div className="mb-6">
                <h4 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <div className="w-1 h-6 bg-blue-600 rounded"></div>
                  Key Features
                </h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {selectedProject.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 bg-blue-50 p-3 rounded-lg border border-blue-200">
                      <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <div className="w-1 h-6 bg-blue-600 rounded"></div>
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gradient-to-r from-blue-100 to-blue-200 text-blue-700 px-4 py-2 rounded-lg text-sm border border-blue-300 font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gradient-to-r from-gray-800 to-gray-900 text-white px-4 py-3 rounded-lg hover:from-gray-900 hover:to-black transition-all text-center font-semibold flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                >
                  <Github size={20} />
                  GitHub Repository
                </a>
                <a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all text-center font-semibold flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                >
                  <Play size={20} />
                  Demo Video
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
          background-size: 20px 20px;
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
        
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
}