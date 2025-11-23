import React, { useState } from 'react';
import './App.css';
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Menu, X, Play } from 'lucide-react';

// Certificate images import කරන්න
import webdesignCert from './assets/certificates/webdesign.png';
import cppCert from './assets/certificates/c++.jpg';
import cCert from './assets/certificates/cLanguage.png';
import pythonCert from './assets/certificates/python.png';
import htmlCert from './assets/certificates/html.jpg';
import japuraCert from './assets/certificates/japura.png';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "WellCore | Personal Wellness Mobile App",
      description: "Designed and developed a wellness-focused Android application to help users build healthy habits, track moods, and stay hydrated with ease. Features include habit tracking, mood analytics, water intake reminders, and interactive widgets.",
      tech: ["Android Studio", "Kotlin", "AlarmManager", "MPAndroidChart", "Widgets", "Room Database"],
      github: "https://github.com/kaveesha-muthunilmi/wellcore-app",
      demo: "https://youtube.com/watch?v=your-demo",
      features: ["Habit Tracking", "Mood Analytics", "Water Reminders", "Interactive Widgets", "Data Visualization"],
      status: "Completed"
    },
    {
      id: 2,
      title: "Salary Management System",
      description: "A full-stack web application designed to calculate, track, and manage employee salaries, built using the MERN stack with advanced reporting features.",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "Chart.js"],
      github: "https://github.com/kaveesha-muthunilmi/salary-management",
      demo: "https://youtube.com/watch?v=your-demo",
      features: ["Employee Management", "Salary Calculation", "PDF Reports", "Analytics Dashboard"],
      status: "Completed"
    },
    {
      id: 3,
      title: "EverGreen | Tea Collection Mobile App",
      description: "Designed and built an Android application to digitalize and streamline the tea leaf collection process between farmers and factories with real-time tracking.",
      tech: ["Android Studio", "Java", "Kotlin", "Firebase", "Google Maps API"],
      github: "https://github.com/kaveesha-muthunilmi/evergreen-app",
      demo: "https://youtube.com/watch?v=your-demo",
      features: ["Farmer Registration", "Collection Tracking", "Payment Processing", "Real-time Updates"],
      status: "Completed"
    },
    {
      id: 4,
      title: "Uni Hub | Online Customer Care System",
      description: "Developed a dedicated online portal for university students to submit queries and receive support from the administration, built on the Java EE stack.",
      tech: ["JSP", "Servlets", "MySQL", "Bootstrap", "AJAX"],
      github: "https://github.com/kaveesha-muthunilmi/unihub-system",
      demo: "https://youtube.com/watch?v=your-demo",
      features: ["Ticket System", "Admin Dashboard", "Email Notifications", "Knowledge Base"],
      status: "Completed"
    },
    {
      id: 5,
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
      image: webdesignCert,
      verification: "HG9GMxV9u2"
    },
    { 
      name: "Python for Beginners", 
      issuer: "University of Moratuwa", 
      date: "Apr 2023",
      image: pythonCert,
      verification: "Xrwq8BADeT"
    },
    { 
      name: "Introduction to C++", 
      issuer: "Sololearn", 
      date: "Aug 2024",
      image: cppCert,
      verification: "CC-SJZTUSJB"
    },
    { 
      name: "Introduction to HTML", 
      issuer: "Sololearn", 
      date: "Aug 2024",
      image: htmlCert
    },
    { 
      name: "Introduction to C", 
      issuer: "Sololearn", 
      date: "Jul 2024",
      image: cCert,
      verification: "CC-035JM6WO"
    },
    { 
      name: "J'PURAXTREME Participation", 
      issuer: "IEEE University of Sri Jayewardenepura", 
      date: "Oct 2025",
      image: japuraCert
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
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <header className="fixed top-0 w-full bg-white shadow-sm border-b border-gray-200 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-blue-800">KM</div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'projects', 'education', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize font-medium px-3 py-2 rounded-lg transition-all duration-300 ${
                    activeSection === section
                      ? 'text-blue-600 bg-blue-50 border border-blue-200'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
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
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 bg-white border-t border-gray-200">
              {['home', 'about', 'projects', 'education', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left py-3 px-4 capitalize text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors border-b border-gray-100"
                >
                  {section}
                </button>
              ))}
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-40 h-40 mx-auto bg-white rounded-full overflow-hidden mb-6 shadow-lg border-4 border-white">
              <div className="w-full h-full bg-blue-600 flex items-center justify-center text-white text-4xl font-bold">
                KM
              </div>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">KAVEESHA MUTHUNILMI</h1>
          <p className="text-xl text-gray-600 mb-8">Information Technology Undergraduate</p>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
            A passionate IT undergraduate specializing in full-stack and mobile development. 
            Dedicated to creating efficient software solutions with modern technologies.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <button
              onClick={() => scrollToSection('projects')}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg font-semibold flex items-center gap-2"
            >
              <Play size={20} />
              View Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-all duration-300 font-semibold"
            >
              Contact Me
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Skills & Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <span
                      key={skill}
                      className="bg-gray-100 px-3 py-1 rounded text-sm text-gray-700 border border-gray-300 hover:border-blue-300 hover:text-blue-700 transition-all"
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
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Projects</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Here are some of my recent projects showcasing my skills in software development
          </p>
          
          <div className="space-y-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 overflow-hidden">
                <div className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-2xl font-bold text-gray-800">{project.title}</h3>
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          project.status === 'Completed' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {project.status}
                        </span>
                      </div>
                      
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-700 mb-2">Key Features:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.features.map((feature, index) => (
                            <span key={index} className="bg-blue-50 text-blue-700 px-3 py-1 rounded text-sm border border-blue-200">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm border border-gray-300"
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
                        className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors text-center font-medium flex items-center justify-center gap-2 whitespace-nowrap"
                      >
                        <Github size={18} />
                        GitHub
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors text-center font-medium flex items-center justify-center gap-2 whitespace-nowrap"
                      >
                        <Play size={18} />
                        Demo
                      </a>
                      <button
                        onClick={() => openProjectModal(project)}
                        className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:border-blue-400 hover:text-blue-600 transition-colors text-center font-medium whitespace-nowrap"
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
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Education & Certifications</h2>
          
          {/* Education */}
          <div className="mb-16">
            <div className="bg-blue-50 p-8 rounded-lg shadow-sm border border-blue-200">
              <div className="flex flex-col lg:flex-row justify-between items-start gap-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">BSc (Hons) in Information Technology</h3>
                  <p className="text-lg text-gray-600 mb-2">Sri Lanka Institute of Information Technology (SLIIT)</p>
                  <p className="text-gray-500">Expected Graduation: 2027</p>
                </div>
                <div className="text-right">
                  <span className="text-gray-600 bg-white px-4 py-2 rounded-lg border border-gray-300">2023 - Present</span>
                  <p className="text-xl font-bold text-blue-600 mt-3">Current GPA: 3.3 / 4.0</p>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Certifications</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 overflow-hidden cursor-pointer"
                  onClick={() => openCertificate(cert)}
                >
                  <div className="h-48 bg-blue-600 flex items-center justify-center p-4">
                    <div className="text-white text-center">
                      <h4 className="font-bold text-lg mb-2">{cert.name.split(' ')[0]}</h4>
                      <p className="text-blue-100 text-sm">{cert.issuer.split(' ')[0]}</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-800 mb-2">{cert.name}</h4>
                    <p className="text-sm text-gray-600 mb-1">{cert.issuer}</p>
                    <p className="text-sm text-gray-500 mb-2">{cert.date}</p>
                    {cert.verification && (
                      <p className="text-xs text-blue-600 font-medium">ID: {cert.verification}</p>
                    )}
                    <button className="text-blue-600 text-sm mt-2 hover:underline font-medium flex items-center gap-1">
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
      <section id="contact" className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and interesting projects
          </p>
          
          <div className="bg-white rounded-lg shadow-md border border-gray-200 p-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center p-6 rounded-lg bg-blue-50 border border-blue-200">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Phone</h3>
                <p className="text-gray-700">076-1620836</p>
              </div>
              
              <div className="flex flex-col items-center p-6 rounded-lg bg-blue-50 border border-blue-200">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Email</h3>
                <p className="text-gray-700">kaveeshamuthunilmi@gmail.com</p>
              </div>
              
              <div className="flex flex-col items-center p-6 rounded-lg bg-blue-50 border border-blue-200">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Location</h3>
                <p className="text-gray-700 text-sm">Ehalakanda, Aluthihala, Mapalagama, Galle</p>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex justify-center gap-6">
                <a href="https://github.com/kaveesha-muthunilmi" target="_blank" rel="noopener noreferrer" 
                   className="bg-gray-800 text-white p-3 rounded-lg hover:bg-gray-700 transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://linkedin.com/in/kaveesha-muthunilmi" target="_blank" rel="noopener noreferrer"
                   className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center items-center gap-4 mb-4">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
              KM
            </div>
            <span className="text-xl font-bold">Kaveesha Muthunilmi</span>
          </div>
          <p className="text-gray-400 mb-4">Information Technology Undergraduate</p>
          <p className="text-gray-500 text-sm">© 2024 Kaveesha Muthunilmi. All rights reserved.</p>
        </div>
      </footer>

      {/* Certificate Modal */}
      {selectedCert && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-auto">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center bg-blue-50">
              <h3 className="text-xl font-bold text-gray-800">{selectedCert.name}</h3>
              <button
                onClick={closeCertificate}
                className="text-gray-500 hover:text-gray-700 p-2 rounded-lg hover:bg-gray-100"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-6">
              <img 
                src={selectedCert.image} 
                alt={selectedCert.name}
                className="w-full h-auto rounded border border-gray-200"
              />
              <div className="mt-4 p-4 bg-blue-50 rounded">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold text-gray-700">Issuer:</p>
                    <p className="text-gray-600">{selectedCert.issuer}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700">Date:</p>
                    <p className="text-gray-600">{selectedCert.date}</p>
                  </div>
                  {selectedCert.verification && (
                    <div className="md:col-span-2">
                      <p className="font-semibold text-gray-700">Verification Code:</p>
                      <p className="text-blue-600 font-mono">{selectedCert.verification}</p>
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
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-auto">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center bg-blue-50">
              <h3 className="text-xl font-bold text-gray-800">{selectedProject.title}</h3>
              <button
                onClick={closeProjectModal}
                className="text-gray-500 hover:text-gray-700 p-2 rounded-lg hover:bg-gray-100"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-6">
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Project Description</h4>
                <p className="text-gray-600 leading-relaxed">{selectedProject.description}</p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Key Features</h4>
                <div className="grid md:grid-cols-2 gap-2">
                  {selectedProject.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-100 text-blue-700 px-3 py-1 rounded text-sm border border-blue-200"
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
                  className="flex-1 bg-gray-900 text-white px-4 py-3 rounded-lg hover:bg-gray-800 transition-colors text-center font-medium flex items-center justify-center gap-2"
                >
                  <Github size={18} />
                  GitHub Repository
                </a>
                <a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors text-center font-medium flex items-center justify-center gap-2"
                >
                  <Play size={18} />
                  Demo Video
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}