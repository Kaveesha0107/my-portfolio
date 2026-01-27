import React, { useState } from 'react'; 
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Menu, X, Play, Award, Code, Briefcase, GraduationCap, Download } from 'lucide-react'; 

// Import your images 
import cppCert from './assets/certificates/c++.jpg'; 
import cCert from './assets/certificates/cLanguage.png'; 
import pythonCert from './assets/certificates/python.png'; 
import htmlCert from './assets/certificates/html.jpg'; 
import jpuraCert from './assets/certificates/japura.png'; 
import webdesignCert from './assets/certificates/webdesign.png'; 
import profileImage from './assets/certificates/profile.jpg'; 
import myCV from './assets/cv/Kaveesha_CV.pdf';



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
      tech: ["React", "Tailwind CSS", "JavaScript", "HTML5"], 
      github: "https://github.com/Kaveesha0107/my-portfolio", 
      demo: "#", 
      features: ["Responsive Design", "Interactive Modals", "Smooth Navigation", "Professional Layout"], 
      status: "Completed" 
    }, 
    { 
      id: 2, 
      title: "WellCore | Personal Wellness Mobile App", 
      description: "Designed and developed a wellness-focused Android application to help users build healthy habits, track moods, and stay hydrated with ease. Features include habit tracking, mood analytics, water intake reminders, and interactive widgets.", 
      tech: ["Android Studio", "Kotlin", "Java", "SQLite"], 
      github: "https://github.com/Kaveesha0107/WellnessApp", 
      demo: "https://www.linkedin.com/posts/kaveesha-muthunilmi_androiddevelopment-mobileappdevelopment-wellnessapp-activity-7407708595544293377-sWV2?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE8mBa8BctHHUjbwu8GuUyOMk_Vs6dPXNIw", 
      features: ["Habit Tracking", "Mood Analytics", "Water Reminders", "Interactive Widgets", "Data Visualization"], 
      status: "Completed" 
    }, 
    { 
      id: 3, 
      title: "MyBudgetPal | Salary Management System", 
      description: "A full-stack web application designed to calculate, track, and manage employee salaries, built using the MERN stack with advanced reporting features.", 
      tech: ["MongoDB", "Express.js", "React.js", "Node.js"], 
      github: "https://github.com/Kaveesha0107/MyBudgetPal", 
      demo: "https://www.linkedin.com/posts/kaveesha-muthunilmi_mernstack-fullstackdevelopment-groupproject-activity-7417469442286227456-DBVG?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE8mBa8BctHHUjbwu8GuUyOMk_Vs6dPXNIw", 
      features: ["Employee Management", "Salary Calculation", "PDF Reports", "Analytics Dashboard"], 
      status: "Completed" 
    }, 
    { 
      id: 4, 
      title: "EverGreen | Tea Collection Mobile App", 
      description: "Designed and built an Android application to digitalize and streamline the tea leaf collection process between farmers and factories with real-time tracking.", 
      tech: ["Android Studio", "Java", "Kotlin", "Firebase"], 
      github: "https://github.com/Kaveesha0107/EverGreenApp", 
      demo: "https://www.linkedin.com/posts/kaveesha-muthunilmi_sliit-uiuxdesign-androiddevelopment-activity-7387184039025319937-yr8-?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE8mBa8BctHHUjbwu8GuUyOMk_Vs6dPXNIw", 
      features: ["Farmer Registration", "Collection Tracking", "Payment Processing", "Real-time Updates"], 
      status: "Completed" 
    }, 
    { 
      id: 5, 
      title: "Uni Hub | Online Customer Care System", 
      description: "Developed a dedicated online portal for university students to submit queries and receive support from the administration, built on the Java EE stack.", 
      tech: ["Java", "JSP", "MySQL", "Bootstrap"], 
      github: "https://github.com/Kaveesha0107/Unihub.git", 
      demo: " ", 
      features: ["Ticket System", "Admin Dashboard", "Email Notifications", "Knowledge Base"], 
      status: "Completed" 
    }, 
    { 
      id: 6, 
      title: "Medcore | Diet Plan & Health Checkup System", 
      description: "A web-based platform developed in my first year to allow users to create customized diet plans and schedule health checkups with healthcare professionals.", 
      tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"], 
      github: "https://github.com/Kaveesha0107/MedCore.git", 
      demo: " ", 
      features: ["Diet Planning", "Appointment Booking", "Health Tracking", "Doctor Consultations"], 
      status: "Completed" 
    } 
  ]; 

  const certifications = [ 
    { name: "Web Design for Beginners", issuer: "University of Moratuwa", date: "May 2024", verification: "HG9GMxV9u2", image: webdesignCert }, 
    { name: "Python for Beginners", issuer: "University of Moratuwa", date: "Apr 2023", verification: "Xrwq8BADeT", image: pythonCert }, 
    { name: "Introduction to C++", issuer: "Sololearn", date: "Aug 2024", verification: "CC-SJZTUSJB", image: cppCert }, 
    { name: "Introduction to HTML", issuer: "Sololearn", date: "Aug 2024", verification: "N/A", image: htmlCert }, 
    { name: "Introduction to C", issuer: "Sololearn", date: "Jul 2024", verification: "CC-035JM6WO", image: cCert }, 
    { name: "J'PURAXTREME Participation", issuer: "IEEE University of Sri Jayewardenepura", date: "Oct 2025", verification: "N/A", image: jpuraCert } 
  ]; 

  const skills = {
    "Programming Languages": [
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
      { name: "C", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
      { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "Kotlin", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" }
    ],
    "Web Development": [
      { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" }
    ],
    "Mobile Development": [
      { name: "Android Studio", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg" },
      { name: "Kotlin", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },
      { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      //{ name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" }
    ],
    "Databases": [
      { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      //{ name: "SQLite", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" }
    ],
    "Tools & Technologies": [
      { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "REST APIs", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/swagger.svg" },
      //{ name: "JWT", logo: "https://jwt.io/img/pic_logo.svg" }
    ]
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

  const downloadCV = () => {
  const link = document.createElement('a');
  link.href = myCV;
  link.download = 'Kaveesha_Muthunilmi_CV.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};



  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Navigation Header */}
      <header className="fixed w-full bg-white shadow-sm z-50 border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">KM</span>
            </div>
            <span className="font-semibold text-gray-800">Kaveesha Muthunilmi</span>
          </div>
          
          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-1">
            {['home', 'about', 'projects', 'education', 'contact'].map((section) => (
              <button 
                key={section}
                onClick={() => scrollToSection(section)} 
                className={`capitalize font-medium px-4 py-2 rounded-lg transition-all duration-300 ${
                  activeSection === section 
                    ? 'text-white bg-gray-800 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                {section}
              </button>
            ))}
            <button 
              onClick={downloadCV}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 font-medium flex items-center gap-2 ml-2"
            >
              <Download size={16} />
              Download CV
            </button>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-lg bg-gray-100 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
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
            <button 
              onClick={downloadCV}
              className="block w-full text-left py-3 px-4 text-blue-600 hover:bg-blue-50 transition-colors border-b border-gray-100 font-medium flex items-center gap-2"
            >
              <Download size={16} />
              Download CV
            </button>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-28 pb-20 md:pt-36 md:pb-28 bg-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
            <div className="inline-block px-4 py-2 bg-gray-100 rounded-full text-sm mb-6 text-gray-600 font-medium">
              <span className="flex items-center">
                <Code size={16} className="mr-2" />
                Software Engineering Undergraduate
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">KAVEESHA MUTHUNILMI</h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
              Passionate Software Engineering Undergraduate at SLIIT, focused on full-stack development. I enjoy creating practical, user-friendly solutions using modern tools and clean, scalable code.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button 
                onClick={() => scrollToSection('projects')} 
                className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-all duration-200 shadow font-semibold flex items-center justify-center gap-2"
              >
                <Briefcase size={18} />
                View Projects
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="border-2 border-gray-800 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-800 hover:text-white transition-all duration-200 font-semibold"
              >
                Contact Me
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-2xl overflow-hidden border-8 border-white shadow-2xl bg-gray-100">
                <img 
                  src={profileImage} 
                  alt="Kaveesha Muthunilmi" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }} 
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white p-4 rounded-xl shadow-lg">
                <Award size={28} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About Me</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3">
              <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <GraduationCap className="text-blue-600 mr-3" size={24} />
                  Professional Summary
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  I am a Software Engineering Undergraduate at SLIIT with a strong interest in full-stack development, 
                  mobile application development, and modern software architecture. I enjoy building practical, 
                  user-focused solutions and writing clean, scalable, and maintainable code.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  My technical expertise includes Java, Python, C++, JavaScript/TypeScript, React.js, Node.js, 
                  Express.js, Firebase, MongoDB, SQL Server, and tools such as Git/GitHub, Agile methodologies, 
                  and Electron.js. I continuously develop my communication, teamwork, and leadership skills to 
                  grow as a well-rounded software professional.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
                  <Code className="text-blue-600 mr-3" size={24} />
                  Technical Skills
                </h3>
                
                <div className="space-y-6">
                  {Object.entries(skills).map(([category, skillList]) => (
                    <div key={category} className="border border-gray-200 rounded-lg p-4 bg-white">
                      <h4 className="font-semibold text-gray-800 mb-4 text-lg">{category}</h4>
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {skillList.map((skill) => (
                          <div key={skill.name} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
                            <img 
                              src={skill.logo} 
                              alt={skill.name}
                              className="w-6 h-6 object-contain"
                            />
                            <span className="text-gray-700 font-medium text-sm">{skill.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/3">
              <div className="bg-gray-800 text-white p-8 rounded-xl shadow-lg h-full">
                <h3 className="text-xl font-semibold mb-6 flex items-center">
                  <Award className="mr-3" size={24} />
                  Quick Facts
                </h3>
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <div className="bg-white/10 p-3 rounded-lg mr-4">
                      <GraduationCap size={20} />
                    </div>
                    <div>
                      <p className="font-medium">BSc SE Undergraduate</p>
                      <p className="text-gray-300 text-sm mt-1">SLIIT (2023-Present)</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-white/10 p-3 rounded-lg mr-4">
                      <Code size={20} />
                    </div>
                    <div>
                      <p className="font-medium">Full-Stack & Mobile Dev</p>
                      <p className="text-gray-300 text-sm mt-1">6+ Projects Completed</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-white/10 p-3 rounded-lg mr-4">
                      <Briefcase size={20} />
                    </div>
                    <div>
                      <p className="font-medium">Seeking Opportunities</p>
                      <p className="text-gray-300 text-sm mt-1">Internships & Collaborations</p>
                    </div>
                  </li>
                </ul>
                
                <div className="mt-8 pt-6 border-t border-gray-700">
                  <button 
                    onClick={downloadCV}
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
                  >
                    <Download size={18} />
                    Download CV
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Projects</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Showcasing solutions across web and mobile platforms.
            </p>
            <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 group">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full">
                      {project.status}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">{project.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-700 mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span key={tech} className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full border border-gray-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-3 mt-6">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition-all text-center font-medium flex items-center justify-center gap-2"
                    >
                      <Github size={16} />
                      GitHub
                    </a>
                    <button 
                      onClick={() => openProjectModal(project)} 
                      className="border border-gray-800 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-800 hover:text-white transition-all text-center font-medium flex items-center justify-center gap-2"
                    >
                      <ExternalLink size={16} />
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certifications Section */}
      <section id="education" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Academic Background</h2>
            <p className="text-lg text-gray-600">Education & Certifications</p>
            <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Education */}
            <div className="lg:w-1/2">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <GraduationCap className="text-blue-600 mr-3" size={28} />
                  Education
                </h3>
                
                <div className="space-y-6">
                  <div className="border border-gray-200 rounded-lg p-6 hover:border-blue-300 transition-colors">
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">BSc (Hons) in Software Engineering</h4>
                    <p className="text-gray-600 mb-1">Sri Lanka Institute of Information Technology (SLIIT)</p>
                    <div className="flex justify-between text-sm text-gray-500 mb-3">
                      <span>2023 - Present</span>
                    </div>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-6 hover:border-blue-300 transition-colors">
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">G.C.E. Advanced Level - Physical Science</h4>
                    <p className="text-gray-600 mb-1">G/Janadipathi Balika Vidyalaya</p>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-6 hover:border-blue-300 transition-colors">
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">Grade 1-11 Education</h4>
                    <p className="text-gray-600 mb-1">G/Nagoda Royal College</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Certifications */}
            <div className="lg:w-1/2">
              <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <Award className="text-blue-600 mr-3" size={28} />
                  Professional Certifications
                </h3>
                
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <div 
                      key={index} 
                      className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-all duration-300 cursor-pointer hover:border-blue-300"
                      onClick={() => openCertificate(cert)}
                    >
                      <div className="flex">
                        <div className="w-20 h-20 flex-shrink-0 bg-blue-50 flex items-center justify-center border-r border-gray-200">
                          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                            <Award className="text-blue-600" size={24} />
                          </div>
                        </div>
                        <div className="p-4 flex-1">
                          <h4 className="font-semibold text-gray-800">{cert.name}</h4>
                          <p className="text-gray-600 text-sm">{cert.issuer}</p>
                          <div className="flex justify-between items-center mt-2">
                            <span className="text-blue-600 text-sm font-medium">{cert.date}</span>
                            {cert.verification && cert.verification !== "N/A" && (
                              <span className="text-gray-500 text-xs">ID: {cert.verification}</span>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="px-4 py-2 bg-gray-50 border-t border-gray-200 text-right">
                        <button className="text-blue-600 text-sm font-medium flex items-center justify-end w-full hover:text-blue-700">
                          View Certificate
                          <ExternalLink size={14} className="ml-1" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
            <div className="md:flex">
              <div className="md:w-2/5 bg-gray-800 text-white p-8">
                <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
                <p className="mb-8 text-gray-300">
                  Let's collaborate on your next project or discuss new opportunities.
                </p>
                
                <div className="space-y-5">
                  <div className="flex items-start">
                    <div className="bg-white/10 p-3 rounded-lg mr-4">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <p className="text-gray-300">076-1620836</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-white/10 p-3 rounded-lg mr-4">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-gray-300">kaveeshamuthunilmi@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-white/10 p-3 rounded-lg mr-4">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold">Location</h3>
                      <p className="text-gray-300">Ehalakanda, Aluthihala, Mapalagama, Galle</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 flex space-x-4">
                  <a 
                    href="https://github.com/Kaveesha0107" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white/10 hover:bg-white/20 p-3 rounded-lg transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/kaveesha-muthunilmi" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white/10 hover:bg-white/20 p-3 rounded-lg transition-colors"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
              
              <div className="md:w-3/5 p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Send me a message</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 mb-2" htmlFor="name">Your Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                        placeholder="Kaveesha Muthunilmi"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2" htmlFor="email">Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                        placeholder="Kaveesha@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="subject">Subject</label>
                    <input 
                      type="text" 
                      id="subject" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                      placeholder="Project Collaboration"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
                    <textarea 
                      id="message" 
                      rows="5"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                      placeholder="Tell me about your project or opportunity..."
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-md"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

    {/* Footer */}
<footer className="bg-gray-800 text-white py-12">
  <div className="container mx-auto px-4">
    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
      {/* Brand Section */}
      <div className="flex-1">
        <div className="flex items-center space-x-3 mb-3">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">KM</span>
          </div>
          <span className="font-semibold text-lg">Kaveesha Muthunilmi</span>
        </div>
        <p className="text-gray-400 max-w-md">
          Software Engineering Undergraduate | Full-Stack Developer
        </p>
      </div>

      {/* Navigation Links */}
      <div className="flex-1">
        <h3 className="font-semibold text-lg mb-4 text-white">Quick Links</h3>
        <div className="grid grid-cols-2 gap-4">
          {['home', 'about', 'projects', 'education', 'contact'].map((section) => (
            <button 
              key={section}
              onClick={() => scrollToSection(section)} 
              className={`text-left text-gray-300 hover:text-white transition-colors duration-200 capitalize ${
                activeSection === section ? 'text-blue-400 font-medium' : ''
              }`}
            >
              {section}
            </button>
          ))}
         
        </div>
      </div>

      {/* Contact Info */}
      <div className="flex-1">
        <h3 className="font-semibold text-lg mb-4 text-white">Contact Info</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <Mail size={16} className="text-gray-400" />
            <span className="text-gray-300 text-sm">kaveeshamuthunilmi@gmail.com</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone size={16} className="text-gray-400" />
            <span className="text-gray-300 text-sm">076-1620836</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin size={16} className="text-gray-400" />
            <span className="text-gray-300 text-sm">Galle, Sri Lanka</span>
          </div>
        </div>
        
        {/* Social Links */}
        <div className="flex space-x-3 mt-4">
          <a 
            href="https://github.com/Kaveesha0107" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gray-700 hover:bg-gray-600 p-2 rounded-lg transition-colors duration-200"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a 
            href="https://www.linkedin.com/in/kaveesha-muthunilmi" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gray-700 hover:bg-gray-600 p-2 rounded-lg transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </div>
    
    {/* Copyright */}
    <div className="border-t border-gray-700 mt-8 pt-8 text-center">
      <p className="text-gray-400">
        © {new Date().getFullYear()} Kaveesha Muthunilmi. All rights reserved.
      </p>
    </div>
  </div>
</footer>

      {/* Certificate Modal */}
      {selectedCert && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-xl font-bold text-gray-800">{selectedCert.name}</h3>
              <button 
                onClick={closeCertificate}
                className="text-gray-500 hover:text-gray-700 p-1 rounded-full hover:bg-gray-100 transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/2">
                  <div className="bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                    <img 
                      src={selectedCert.image} 
                      alt={selectedCert.name}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
                <div className="md:w-1/2">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-1">Issuer</h4>
                      <p className="text-gray-600">{selectedCert.issuer}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-1">Date</h4>
                      <p className="text-gray-600">{selectedCert.date}</p>
                    </div>
                    {selectedCert.verification && selectedCert.verification !== "N/A" && (
                      <div>
                        <h4 className="font-semibold text-gray-700 mb-1">Verification Code</h4>
                        <p className="text-gray-600 font-mono">{selectedCert.verification}</p>
                      </div>
                    )}
                  </div>
                  <div className="mt-6 flex space-x-3">
                    <a 
                      href={selectedCert.image} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg text-center font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                    >
                      <ExternalLink size={16} />
                      Open Image
                    </a>
                    <button 
                      onClick={closeCertificate}
                      className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Project Modal */}
{selectedProject && (
  <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
    <div className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
      <div className="p-6 border-b border-gray-200 flex justify-between items-center">
        <h3 className="text-xl font-bold text-gray-800">{selectedProject.title}</h3>
        <button 
          onClick={closeProjectModal}
          className="text-gray-500 hover:text-gray-700 p-1 rounded-full hover:bg-gray-100 transition-colors"
        >
          <X size={24} />
        </button>
      </div>
      <div className="p-6">
        <div className="mb-6">
          <h4 className="font-semibold text-gray-700 mb-2">Project Description</h4>
          <p className="text-gray-600 leading-relaxed">{selectedProject.description}</p>
        </div>
        
        <div className="mb-6">
          <h4 className="font-semibold text-gray-700 mb-2">Key Features</h4>
          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            {selectedProject.features.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </div>
        
        <div className="mb-6">
          <h4 className="font-semibold text-gray-700 mb-2">Technologies Used</h4>
          <div className="flex flex-wrap gap-2">
            {selectedProject.tech.map((t) => (
              <span key={t} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm border border-blue-200">
                {t}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-200">
          <a 
            href={selectedProject.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 bg-gray-800 text-white py-3 px-4 rounded-lg text-center font-medium hover:bg-gray-900 transition-colors flex items-center justify-center gap-2"
          >
            <Github size={18} />
            GitHub
          </a>
          
          {/* Demo button only shows if demo link is available */}
          {selectedProject.demo && selectedProject.demo.trim() !== "" && (
            <a 
              href={selectedProject.demo} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg text-center font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
            >
              <Play size={18} />
              Demo
            </a>
          )}
          
          <button 
            onClick={closeProjectModal}
            className="flex-1 border border-gray-300 text-gray-700 py-3 px-4 rounded-lg font-medium hover:bg-gray-50 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
)}
    </div>
  ); 
}