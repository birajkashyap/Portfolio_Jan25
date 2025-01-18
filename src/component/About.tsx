import gsap from "gsap";
import _ScrollTrigger from "gsap/ScrollTrigger";
import { Code2, Palette, Rocket } from "lucide-react";
import { useEffect, useRef } from "react";

gsap.registerPlugin(_ScrollTrigger);
function About() {
  const aboutRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".skill-card").forEach((card: any, index: number) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=50",
            toggleActions: "play none none reverse",
          },
          x: index % 2 === 0 ? -100 : 100,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        });
      });
    }, aboutRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={aboutRef} className="bg-black py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">
          My Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className=" skill-card p-8 rounded-xl bg-gradient-to-br from-purple-900/50 to-transparent backdrop-blur-lg border border-purple-500/50">
            <Code2 className="w-12 h-12 text-purple-400 mb-6" />
            <h3 className="text-xl font-semibold text-white mb-4">
              Backend Development
            </h3>
            <p className="text-gray-300">
              Developing scalable and secure backend systems using modern
              technologies and industry best practices to ensure seamless
              performance.
            </p>
          </div>
          <div className=" skill-card p-8 rounded-xl bg-gradient-to-br from-blue-900/50 to-transparent backdrop-blur-lg border border-purple-500/50">
            <Palette className="w-12 h-12 text-purple-400 mb-6" />
            <h3 className="text-xl font-semibold text-white mb-4">
              Frontend Development
            </h3>
            <p className="text-gray-300">
              Creating intuitive and responsive user interfaces with modern
              frameworks, delivering exceptional user experiences across all
              devices.
            </p>
          </div>
          <div className=" skill-card p-8 rounded-xl bg-gradient-to-br from-pink-900/50 to-transparent backdrop-blur-lg border border-purple-500/50">
            <Rocket className="w-12 h-12 text-purple-400 mb-6" />
            <h3 className="text-xl font-semibold text-white mb-4">Devops</h3>
            <p className="text-gray-300">
              Streamlining deployment processes and managing infrastructure with
              DevOps best practices, ensuring efficient, reliable, and scalable
              application delivery.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
