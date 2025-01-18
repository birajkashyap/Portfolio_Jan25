import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Register GSAP's ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function TechStack() {
  const techStackRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".tech-card").forEach((card, index) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=50", // Animation starts when the top of the card is 50px above the bottom of the viewport
            toggleActions: "play none none reverse",
          },
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          delay: index * 0.2, // Adds a stagger effect
        });
      });
    }, techStackRef);

    // Clean up GSAP context on component unmount
    return () => ctx.revert();
  }, []);

  const techStack = [
    { name: "MongoDB", color: "bg-green-600" },
    { name: "Express.js", color: "bg-yellow-400" },
    { name: "React", color: "bg-blue-400" },
    { name: "Node.js", color: "bg-green-500" },
    { name: "TypeScript", color: "bg-blue-500" },
    { name: "Prisma", color: "bg-yellow-300" },
    { name: "Next.js", color: "bg-blue-600" },
    { name: "Monorepo", color: "bg-blue-400" },
    { name: "AWS", color: "bg-orange-600" },
    { name: "Docker", color: "bg-blue-600" },
    { name: "Kubernetes", color: "bg-indigo-500" },
    { name: "Serverless", color: "bg-purple-500" },
    { name: "NextAuth", color: "bg-green-400" },
    { name: "Prometheus", color: "bg-purple-400" },
    { name: "Grafana", color: "bg-indigo-600" },
    { name: "Tailwind CSS", color: "bg-teal-400" },
  ];

  return (
    <div ref={techStackRef} className="bg-black py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">
          Tech Stack
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className={`tech-card p-4 rounded-lg shadow-lg text-center ${tech.color} text-black font-semibold`}
            >
              {tech.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TechStack;
