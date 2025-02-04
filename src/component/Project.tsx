import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const projectsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".project-card").forEach((card: any) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
            toggleActions: "play none none reverse",
          },
          y: 100,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        });
      });
    }, projectsRef);

    return () => ctx.revert();
  }, []);

  const projects = [
    {
      title: "Connectify",
      description:
        "A real-time social media platform where users can connect, share posts, and interact with others.",
      image:
        "https://images.unsplash.com/photo-1621112904887-419379ce6824?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZyaWVuZHN8ZW58MHx8MHx8fDA%3D",
      tech: ["React", "Node.js", "MongoDB", "Socket.io", "JWT Authentication"],
      url: "#",
    },

    {
      title: "MeetHub",
      description:
        "A virtual conferencing web application enabling real-time video calls, screen sharing, and meeting rooms.",
      image:
        "https://plus.unsplash.com/premium_photo-1661477604761-0067a01ab430?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlkZW9jYWxsfGVufDB8fDB8fHww",
      tech: ["React", "WebRTC", "Node.js", "Express.js", "Socket.io"],
      url: "#",
    },

    {
      title: "BlogStream",
      description:
        "A full-featured blogging platform where users can create, edit, and publish blogs with rich text support.",
      image:
        "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D",
      tech: [
        "Next.js",
        "Prisma",
        "Tailwind CSS",
        "MongoDB",
        "JWT Authentication",
      ],
      url: "https://blog-stream-dusky.vercel.app/",
    },
  ];

  return (
    <div
      ref={projectsRef}
      className="bg-gradient-to-b from-black to-purple-900 py-20 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">
          Top Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <a href={project.url}>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                </a>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm bg-white/10 rounded-full text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
