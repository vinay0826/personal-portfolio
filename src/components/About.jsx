import React from 'react';
import AnimatedTitle from './AnimatedTitle';
import { FaReact, FaHtml5, FaCss3, FaGithub, FaDocker, FaAws } from 'react-icons/fa';
import { FaRegNewspaper } from 'react-icons/fa6';
import { CgFigma } from 'react-icons/cg';
import { RiNextjsFill, RiJavascriptFill, RiTailwindCssFill } from 'react-icons/ri';
import { BiLogoTypescript } from 'react-icons/bi';
import { SiPostman, SiNetlify, SiSanity, SiAppwrite, SiSentry, SiPostgresql, SiMongodb, SiRedis, SiPrometheus, SiGrafana } from 'react-icons/si';
import { DiNodejsSmall } from 'react-icons/di';

const About = () => {
  return (
    <div id="about" className="min-h-screen w-screen">
      <section className="w-full px-10 py-20 bg-white text-black">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="transform transition-all duration-700 ease-out opacity-100 translate-y-0">
            <h2 className="font-general text-3xl font-bold mb-6">About Me</h2>
            <p className="text-base leading-relaxed text-gray-800 mb-4">
              I’m <span className="text-black font-extrabold">Vinay Nalagatla</span>, a CS grad turned full-stack developer with a passion for crafting scalable, resilient systems. I’m fueled by a passion to turn visionary ideas into reality through cutting-edge technology. With a robust skill set spanning full-stack development, advanced backend engineering, and DevOps excellence—mastering tools like Node.js, React, Next.js, Kubernetes, Kafka, AWS, and beyond—I thrive on solving complex problems with precision and innovation. Ready to architect resilient, scalable systems, I’m eager to collaborate with industry pioneers, push technological boundaries, and make a lasting impact in the fast-paced world of software engineering."
            </p>
          </div>

          <div className="transform transition-all duration-700 ease-out opacity-100 translate-y-0">
            <h2 className="font-general text-3xl font-bold mb-6">Skills I Work With</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-gray-100 border border-gray-200 p-4 rounded-lg">
                  <p className="text-sm text-gray-800 font-semibold">
                    Frontend
                    <strong className="flex justify-between mt-2">
                      <FaReact className="text-cyan-500" />
                      <RiNextjsFill className="text-black" />
                      <RiJavascriptFill className="text-yellow-400" />
                      <BiLogoTypescript className="text-blue-600" />
                      <FaHtml5 className="text-orange-500" />
                      <FaCss3 className="text-blue-500" />
                      <RiTailwindCssFill className="text-teal-400" />
                    </strong>
                  </p>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1 list-disc list-inside">
                    <li>React.js & Recoil</li>
                    <li>Next.js</li>
                    <li>JavaScript & TypeScript</li>
                    <li>HTML, CSS, Tailwind CSS</li>
                    <li>Responsive Design</li>
                  </ul>
                </div>

                <div className="bg-gray-100 border border-gray-200 p-4 rounded-lg">
                  <p className="text-sm text-gray-800 font-semibold">
                    Backend
                    <strong className="flex justify-between mt-2">
                      <DiNodejsSmall className="text-green-500" />
                      <SiMongodb className="text-green-600" />
                      <SiPostgresql className="text-blue-500" />
                      <SiRedis className="text-red-500" />
                    </strong>
                  </p>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1 list-disc list-inside">
                    <li>Node.js & Express.js</li>
                    <li>MongoDB & Prisma</li>
                    <li>PostgreSQL</li>
                    <li>Redis & Kafka</li>
                    <li>REST APIs & gRPC</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-gray-100 border border-gray-200 p-4 rounded-lg">
                  <p className="text-sm text-gray-800 font-semibold">
                    DevOps & System Design
                    <strong className="flex justify-between mt-2">
                      <FaDocker className="text-blue-400" />
                      <FaAws className="text-orange-500" />
                      <SiPrometheus className="text-orange-600" />
                      <SiGrafana className="text-orange-400" />
                    </strong>
                  </p>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1 list-disc list-inside">
                    <li>Docker & Kubernetes</li>
                    <li>AWS (EC2, S3, EKS, LB)</li>
                    <li>CI/CD & Serverless</li>
                    <li>Prometheus & Grafana</li>
                    <li>Load Balancers & Sharding</li>
                  </ul>
                </div>

                <div className="bg-gray-100 border border-gray-200 p-4 rounded-lg">
                  <p className="text-sm text-gray-800 font-semibold">
                    Tools & Other
                    <strong className="flex justify-between mt-2">
                      <FaGithub className="text-black" />
                      <CgFigma className="text-pink-400" />
                      <SiPostman className="text-orange-500" />
                      <SiNetlify className="text-green-400" />
                    </strong>
                  </p>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1 list-disc list-inside">
                    <li>Git & GitHub</li>
                    <li>Figma & Postman</li>
                    <li>Vercel, Netlify, Sanity</li>
                    <li>WebRTC & Agile Workflow</li>
                    <li>Machine Learning Basics</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;