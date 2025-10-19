import React, { useState, useEffect } from 'react';
import { Camera, Code, FileText, Mail, Github, Linkedin, Twitter, BookOpen } from 'lucide-react';

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('home');
  const [dots, setDots] = useState([]);

  useEffect(() => {
    const newDots = [];
    for (let i = 0; i < 50; i++) {
      newDots.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 3 + Math.random() * 4
      });
    }
    setDots(newDots);
  }, []);

  const tabs = [
    { id: 'home', label: 'Home' },
    { id: 'engineering', label: 'Engineering' },
    { id: 'photography', label: 'Photography' },
    { id: 'blog', label: 'Blog' },
    { id: 'resume', label: 'Resume' },
    { id: 'contact', label: 'Contact' }
  ].filter((tab) => tab.id !== 'resume');

  const projects = [
    {
      title: 'Mental Health Therapy App',
      description: 'Built a IOS app providing AI-driven therapeutic exercises and mood tracking',
      tags: ['Swift', 'Firebase', 'Machine Learning'],
      year: '2024'
    },
    {
      title: 'IoT Smart Home System',
      description: 'Developed an integrated home automation system with custom hardware',
      tags: ['Arduino', 'Node.js', 'MQTT'],
      year: '2024'
    },
    {
      title: 'Mobile Payment App',
      description: 'Created a secure peer-to-peer payment application',
      tags: ['React Native', 'Firebase', 'Stripe'],
      year: '2023'
    },
    // {
    //   title: 'E-Commerce Platform',
    //   description: 'Full-stack marketplace with real-time inventory management',
    //   tags: ['Next.js', 'PostgreSQL', 'Stripe'],
    //   year: '2023'
    // }
  ];

  const photos = [
    { title: 'Urban Landscapes', count: 24, cover: 'from-stone-400 to-stone-600' },
    { title: 'Portrait Series', count: 18, cover: 'from-amber-400 to-orange-600' },
    { title: 'Night Photography', count: 32, cover: 'from-slate-400 to-indigo-600' },
    { title: 'Travel Stories', count: 45, cover: 'from-emerald-400 to-teal-600' }
  ];

  const blogPosts = [
    {
      title: 'Building Scalable Microservices',
      date: 'Oct 15, 2024',
      excerpt: 'Lessons learned from architecting distributed systems at scale',
      readTime: '8 min read'
    },
    {
      title: 'The Art of Code Review',
      date: 'Sep 28, 2024',
      excerpt: 'Best practices for giving and receiving constructive feedback',
      readTime: '5 min read'
    },
    {
      title: 'Photography Meets Programming',
      date: 'Sep 10, 2024',
      excerpt: 'How computational photography is changing the creative landscape',
      readTime: '6 min read'
    }
  ];

  // const logoUrl = "https://user-gen-media-assets.s3.amazonaws.com/gemini_images/020e5427-6f13-4f76-a96c-";

  return (
    <div className="min-h-screen bg-[#F5F5DC]  text-gray-800 relative overflow-hidden">
      {/* Animated Background Matrix */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        {dots.map((dot) => (
          <div
            key={dot.id}
            className="absolute w-1 h-1 bg-[#D2B48C] rounded-full animate-float"
            style={{
              left: `${dot.x}%`,
              top: `${dot.y}%`,
              animationDelay: `${dot.delay}s`,
              animationDuration: `${dot.duration}s`
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-[#F5F5DC]/80 backdrop-blur-md border-b border-[#D2B48C]/30 z-50">
        <div className="max-w-5xl mx-auto px-8 py-5">
          <div className="flex items-center justify-between">
            <div className="text-lg font-light tracking-wide">Yusuf Jabbar</div>
            <div className="flex gap-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`text-sm font-light transition-all duration-300 hover:scale-105 ${
                    activeTab === tab.id
                      ? 'text-gray-900 font-normal'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="pt-24 max-w-5xl mx-auto px-8 relative z-10">
        {/* Home */}
        {activeTab === 'home' && (
          <div className="min-h-[80vh] flex items-center justify-center">
            <div className="max-w-2xl text-center space-y-8 animate-fade-in">
              {/* <img src={logo} className="App-logo mx-auto" alt="Custom Logo" /> */}
              <h1 className="text-7xl font-light tracking-tight animate-float-slow">
                Engineer & Creative
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed font-light">
                I build stuff and take photos. Welcome to my domain.
              </p>
              <div className="flex gap-6 justify-center pt-6">
                <a href="https://github.com/shmoos" className="text-gray-600 hover:text-gray-900 transition-all hover:scale-110 duration-300">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/yusuf-jabbar/" className="text-gray-600 hover:text-gray-900 transition-all hover:scale-110 duration-300">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://x.com/shmoossss" className="text-gray-600 hover:text-gray-900 transition-all hover:scale-110 duration-300">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Engineering Portfolio */}
        {activeTab === 'engineering' && (
          <div className="py-20 animate-fade-in">
            <div className="space-y-3 mb-16">
              <h2 className="text-5xl font-light">Engineering</h2>
              <p className="text-gray-600 text-lg font-light">List of Project </p>
            </div>
            <div className="space-y-12">
              {projects.map((project, idx) => (
                <div
                  key={idx}
                  className="group cursor-pointer animate-slide-in"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="flex items-baseline justify-between mb-3 border-b border-[#D2B48C]/30 pb-3">
                    <h3 className="text-2xl font-light group-hover:translate-x-2 transition-transform duration-300">
                      {project.title}
                    </h3>
                    <span className="text-sm text-gray-500 font-light">{project.year}</span>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed font-light pl-1">
                    {project.description}
                  </p>
                  <div className="flex gap-3 flex-wrap pl-1">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs text-gray-600 font-light"
                      >
                        {tag}{i < project.tags.length - 1 ? ' /' : ''}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Photography */}
        {activeTab === 'photography' && (
          <div className="py-20 animate-fade-in">
            <div className="space-y-3 mb-16">
              <h2 className="text-5xl font-light">Photography & Videography</h2>
              <p className="text-gray-600 text-lg font-light">Visual stories</p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              {photos.map((album, idx) => (
                <div
                  key={idx}
                  className="group cursor-pointer animate-fade-in"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className={`bg-gradient-to-br ${album.cover} aspect-[4/3] rounded-sm mb-4 group-hover:scale-[1.02] transition-all duration-500 opacity-80`} />
                  <h3 className="text-xl font-light mb-1">{album.title}</h3>
                  <p className="text-gray-500 text-sm font-light">{album.count} photos</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Blog */}
        {activeTab === 'blog' && (
          <div className="py-20 animate-fade-in">
            <div className="space-y-3 mb-16">
              <h2 className="text-5xl font-light">Blog</h2>
              <p className="text-gray-600 text-lg font-light">Thoughts and writings</p>
            </div>
            <div className="space-y-12">
              {blogPosts.map((post, idx) => (
                <div
                  key={idx}
                  className="group cursor-pointer animate-slide-in"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="border-b border-[#D2B48C]/30 pb-8">
                    <div className="flex items-baseline justify-between mb-3">
                      <h3 className="text-2xl font-light group-hover:translate-x-2 transition-transform duration-300">
                        {post.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-3 leading-relaxed font-light">
                      {post.excerpt}
                    </p>
                    <div className="flex gap-4 text-sm text-gray-500 font-light">
                      <span>{post.date}</span>
                      <span>·</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Resume */}
         {activeTab === 'resume' && (
          <div className="py-20 max-w-3xl animate-fade-in">
            <div className="space-y-3 mb-16">
              <h2 className="text-5xl font-light">Resume</h2>
              <p className="text-gray-600 text-lg font-light">Experience & education</p>
            </div>
            
            <div className="space-y-16">
              {/* Experience */}
              <div>
                <h3 className="text-xs font-normal text-gray-500 mb-8 uppercase tracking-widest">Experience</h3>
                <div className="space-y-10">
                  <div className="pl-6 border-l border-[#D2B48C]/40">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-light">AR Marketing Analyst</h4>
                      <span className="text-sm text-gray-500 font-light">2025 - Present</span>
                    </div>
                    <p className="text-gray-600 mb-3 font-light">Aako Inc.</p>
                    <p className="text-gray-600 leading-relaxed font-light">
                      Leading development of cloud infrastructure and microservices architecture.
                      Mentoring junior engineers and driving technical decisions.
                    </p>
                  </div>
                  
                  <div className="pl-6 border-l border-[#D2B48C]/40">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-light">Software Engineer</h4>
                      <span className="text-sm text-gray-500 font-light">2021 - 2023</span>
                    </div>
                    <p className="text-gray-600 mb-3 font-light">Startup Ventures</p>
                    <p className="text-gray-600 leading-relaxed font-light">
                      Built scalable web applications and implemented CI/CD pipelines.
                      Collaborated with cross-functional teams on product development.
                    </p>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div>
                <h3 className="text-xs font-normal text-gray-500 mb-8 uppercase tracking-widest">Education</h3>
                <div className="pl-6 border-l border-[#D2B48C]/40">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-light">Bachelor of Science in Computer Science</h4>
                    <span className="text-sm text-gray-500 font-light">2017 - 2021</span>
                  </div>
                  <p className="text-gray-600 font-light">University Name</p>
                </div>
              </div>

              {/* Skills */}
              <div>
                <h3 className="text-xs font-normal text-gray-500 mb-8 uppercase tracking-widest">Skills</h3>
                <div className="flex flex-wrap gap-3">
                  {['JavaScript', 'React', 'Node.js', 'Python', 'AWS', 'Docker', 'PostgreSQL', 'TypeScript', 'GraphQL', 'Git'].map((skill) => (
                    <span key={skill} className="text-sm text-gray-600 font-light">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <button className="w-full py-3 border border-gray-700 text-gray-700 rounded-sm hover:bg-gray-700 hover:text-[#F5F5DC] transition-all duration-300 font-light">
                Download Resume PDF
              </button>
            </div>
          </div>
        )} 

        {/* Contact */}
        {activeTab === 'contact' && (
          <div className="py-20 max-w-2xl mx-auto animate-fade-in">
            <div className="min-h-[60vh] flex flex-col items-center justify-center text-center space-y-8">
              <h2 className="text-5xl font-light">Get in Touch</h2>
              <p className="text-xl text-gray-600 font-light leading-relaxed max-w-md">
                {/* To contact me. */}
              </p>
              <a 
                href="mailto: yjabbar84@gmail.com"
                className="text-2xl font-light text-gray-700 hover:text-gray-900 transition-all duration-300 hover:scale-105 underline decoration-[#D2B48C] underline-offset-8"
              >
                yjabbar84@gmail.com
              </a>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        
        .animate-slide-in {
          animation: slide-in 0.6s ease-out;
          animation-fill-mode: both;
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}