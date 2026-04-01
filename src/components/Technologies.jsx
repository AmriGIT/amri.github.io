import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb, SiSpringboot, SiDocker, SiKubernetes } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { DiRedis, DiJava } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const technologies = [
  {
    label: "Java",
    icon: <DiJava className="text-6xl text-orange-500" />,
    description: "Core backend language",
  },
  {
    label: "Spring Boot",
    icon: <SiSpringboot className="text-6xl text-green-500" />,
    description: "Microservices & APIs",
  },
  {
    label: "React",
    icon: <RiReactjsLine className="text-6xl text-cyan-400" />,
    description: "Interactive frontend",
  },
  {
    label: "Node.js",
    icon: <FaNodeJs className="text-6xl text-green-500" />,
    description: "Server-side JavaScript",
  },
  {
    label: "MongoDB",
    icon: <SiMongodb className="text-6xl text-emerald-500" />,
    description: "NoSQL data stores",
  },
  {
    label: "PostgreSQL",
    icon: <BiLogoPostgresql className="text-6xl text-sky-500" />,
    description: "Relational databases",
  },
  {
    label: "Redis",
    icon: <DiRedis className="text-6xl text-red-500" />,
    description: "Caching & performance",
  },
  {
    label: "Docker",
    icon: <SiDocker className="text-6xl text-blue-500" />,
    description: "Containerized deployments",
  },
  {
    label: "Kubernetes",
    icon: <SiKubernetes className="text-6xl text-sky-400" />,
    description: "Orchestration & scaling",
  },
];

const Technologies = () => {
  return (
    <section id="technologies" className="border-b border-white/10 pb-24 pt-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">What I use</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white">Technologies</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-400">
            Tools and frameworks that power the applications I build, from backend architecture to polished user interfaces.
          </p>
        </div>

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {technologies.map((item) => (
            <motion.div
              key={item.label}
              whileHover={{ y: -6 }}
              className="space-y-4 rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 text-center shadow-2xl shadow-cyan-500/10 transition"
            >
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-white/5">
                {item.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">{item.label}</h3>
                <p className="mt-2 text-sm text-slate-400">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Technologies;
