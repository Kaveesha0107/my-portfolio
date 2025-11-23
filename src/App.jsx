import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Menu, X } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const projects = [
    {
      title: "Salary Management System",
      description: "A full-stack web application designed to calculate, track, and manage employee salaries, built using the MERN stack.",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js"]
    },
    {
      title: "EverGreen | Tea Collection Mobile App",
      description: "Designed and built an Android application to digitalize and streamline the tea leaf collection process between farmers and factories.",
      tech: ["Android Studio", "Java", "Kotlin"]
    },
    {
      title: "Uni Hub | Online Customer Care System",
      description: "Developed a dedicated online portal for university students to submit queries and receive support from the administration, built on the Java EE stack.",
      tech: ["JSP", "Servlets", "MySQL"]
    },
    {
      title: "Medcore | Diet Plan & Health Checkup System",
      description: "A web-based platform developed in my first year to allow users to create customized diet plans and schedule health checkups.",
      tech: ["HTML", "CSS", "JavaScript", "PHP", "Java", "MySQL"]
    }
  ];

  const certifications = [
    { name: "Web Design for Beginners", issuer: "University of Moratuwa", date: "May 2024" },
    { name: "Python for Beginners", issuer: "University of Moratuwa", date: "Apr 2023" },
    { name: "Introduction to C++", issuer: "Sololearn", date: "Aug 2024" },
    { name: "Introduction to HTML", issuer: "Sololearn", date: "Aug 2024" },
    { name: "Introduction to C", issuer: "Sololearn", date: "Jul 2024" }
  ];

  const skills = {
    "Programming Languages": ["Python", "Java", "C++", "C", "JavaScript"],
    "Web Development": ["HTML", "CSS", "JavaScript", "Back-End Web Development", "Front-End Development", "MERN Stack"],
    "Databases": ["MySQL"],
    "Concepts": ["Object-Oriented Programming (OOP)"],
    "Soft Skills": ["Teamwork", "Time Management", "Problem-Solving", "Effective Communication"]
  };

  const scrollToSection = (section) => {
    setActiveSection(section);
    setMobileMenuOpen(false);
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white shadow-md z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-gray-800">KM</div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'projects', 'education', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize ${
                    activeSection === section
                      ? 'text-blue-600 font-semibold'
                      : 'text-gray-600 hover:text-blue-600'
                  } transition-colors`}
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4">
              {['home', 'about', 'projects', 'education', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left py-2 px-4 capitalize text-gray-600 hover:bg-gray-100"
                >
                  {section}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto bg-gray-300 rounded-full overflow-hidden mb-6">
              <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-4xl font-bold">
                KM
              </div>
            </div>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">KAVEESHA MUTHUNILMI</h1>
          <p className="text-xl text-gray-600 mb-8">Information Technology Undergraduate</p>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            A motivated IT undergraduate specializing in full-stack development. Eager to apply skills in coding, database management, and project work to a software development role.
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => scrollToSection('projects')}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              View Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Skills & Expertise</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <span
                      key={skill}
                      className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 border border-gray-200"
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
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-100 text-blue-700 px-3 py-1 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certifications Section */}
      <section id="education" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Education & Certifications</h2>
          
          <div className="mb-12">
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800">BSc (Hons) in Information Technology</h3>
                  <p className="text-gray-600 mt-2">Sri Lanka Institute of Information Technology (SLIIT)</p>
                  
                </div>
                <span className="text-gray-600">2023 - present</span>
              </div>
              
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Certifications</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-600">
                  <h4 className="font-semibold text-gray-800">{cert.name}</h4>
                  <p className="text-sm text-gray-600">{cert.issuer}</p>
                  <p className="text-sm text-gray-500">{cert.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Get In Touch</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="font-semibold text-gray-800 mb-2">Phone</h3>
                <p className="text-gray-600">076-1620836</p>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="font-semibold text-gray-800 mb-2">Email</h3>
                <p className="text-gray-600">kaveeshamuthunilmi@gmail.com</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="font-semibold text-gray-800 mb-2">Location</h3>
                <p className="text-gray-600">Ehalakanda,Aluthihala,Mapalagama, Galle</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">© 2024 Kaveesha Muthunilmi. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}