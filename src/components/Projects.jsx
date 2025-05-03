import React from 'react';

const projects = [
  {
    title: "Paytm Clone",
    description: "A full-stack payment platform built with the MERN stack, featuring wallet management and transaction tracking. Optimized APIs and database queries for 30% faster response times, with JWT-based authentication for secure transactions supporting up to 10,000 concurrent users.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT"],
    link: "#",
  },
  {
    title: "Handwritten Digits Recognition System",
    description: "A Convolutional Neural Network (CNN) trained on the MNIST dataset to classify handwritten digits with high precision. Advanced preprocessing with normalization and augmentation ensures robust performance across diverse inputs.",
    tech: ["Python", "TensorFlow", "Keras", "NumPy", "Matplotlib"],
    link: "#",
  },
  {
    title: "MERN Marketplace",
    description: "A dynamic online marketplace with seller accounts, product search, shopping cart, Stripe payments, and real-time auctions via Socket.io, built on the MERN stack for an engaging user experience.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io", "Stripe"],
    link: "#",
  },
  {
    title: "Violence Detection in Crowd",
    description: "A hybrid CNN-LSTM model for real-time violence detection in crowded environments using video frame analysis. Published at the International Conference on Advances in Communications, Computing & Electronic Systems (March 2024).",
    tech: ["Python", "TensorFlow", "Keras", "OpenCV", "NumPy", "Matplotlib"],
    link: "#",
  },
];

const ProjectsCard = () => {
  return (
    <section className="bg-black py-24 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.1),transparent_50%)]"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-center mb-20 animate-fade-in">
          My Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative bg-gray-900/40 rounded-3xl overflow-hidden shadow-2xl transform hover:-translate-y-2 transition-all duration-700 ease-out border border-cyan-500/20 backdrop-blur-sm"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10 opacity-0 hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative p-8">
                <h3 className="text-3xl font-bold text-cyan-300 mb-4 animate-slide-up">{project.title}</h3>
                <p className="text-gray-200 text-sm leading-relaxed mb-6 animate-slide-up animation-delay-100">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3 mb-6 animate-slide-up animation-delay-200">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-4 py-1 bg-gradient-to-r from-cyan-700 to-purple-700 text-white text-xs font-medium rounded-full shadow-lg hover:shadow-cyan-500/50 transition-shadow duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl animate-slide-up animation-delay-300"
                >
                  Explore Project
                </a>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full filter blur-2xl animate-pulse"></div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-up {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }
        .animation-delay-100 {
          animation-delay: 0.1s;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        .animation-delay-300 {
          animation-delay: 0.3s;
        }
      `}</style>
    </section>
  );
};

export default ProjectsCard;