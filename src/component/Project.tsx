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
      title: "Prompt-Driven Email Productivity Agent",
      description:
        "An intelligent email automation system that processes inbox data, categorizes messages, extracts action items, and drafts replies using a prompt-driven AI workflow. Includes a 'Prompt Brain' for customizable AI behavior and a chat interface for real-time summarization, Q&A, and drafting.",
      image:
        "https://towardsdatascience.com/wp-content/uploads/2025/01/1s2dtl0h7aipYWHfKVC7cUA.jpg",
      tech: [
        "Next.js",
        "FastAPI",
        "Python",
        "TypeScript",
        "Tailwind CSS",
        "Vercel",
        "Render",
      ],
      url: "https://ai-mail-agent.vercel.app",
      backend: "https://ai-mail-agent-gby4.onrender.com",
    },
    {
      title: "Walletron – Unified Wallet Infrastructure",
      description:
        "An AI-powered multi-chain wallet engine providing a unified API for Ethereum and Solana operations. Features HD wallet generation, natural language wallet commands, real-time dashboard analytics, per-user wallet isolation, and a developer-first UI with full authentication and API key management.",
      image:
        "https://res.cloudinary.com/rivalry/image/fetch/q_50/https%3A%2F%2Fimages.prismic.io%2Frivalryglhf%2FZyyJKq8jQArT0bp9_DALL%25C2%25B7E2024-11-0414.27.54-Adigitalwalleticoninafuturisticstyle%252Cfloatinginablueandpurplegradientbackgroundwithglowingcryptoiconsaroundit.Thewalletissimp.jpg%3Fauto%3Dformat%2Ccompress",
      tech: [
        "Next.js 15",
        "TypeScript",
        "Tailwind CSS",
        "Ethers.js",
        "Solana Web3.js",
        "Prisma",
        "PostgreSQL",
        "NextAuth.js",
        "Vercel",
      ],
      url: "https://walletron-v1.vercel.app/", // Replace if you want your actual deployed link
    },
    {
      title: "Nature Navigator",
      description:
        "A rental-service booking platform designed for real-world operational use. Built with a modern Next.js architecture and powered by PostgreSQL with Prisma ORM. Includes real-time availability, secure reservation flows, integrated Stripe payments, user accounts, and an admin panel for managing services, pricing, and bookings.",
      image:
        "https://www.shutterstock.com/image-photo/black-taxi-mercedes-e-class-600nw-2580503875.jpg",
      tech: [
        "Next.js",
        "TypeScript",
        "Prisma",
        "PostgreSQL",
        "Stripe",
        "Tailwind CSS",
      ],
      url: "https://nature-navigator.vercel.app", // Replace with your actual link if different
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
