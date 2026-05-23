import { BiLogoPostgresql } from "react-icons/bi";
import { DiJava, DiRedis } from "react-icons/di";
import { FaNodeJs, FaServer } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { SiDocker, SiKubernetes, SiMongodb, SiSpringboot } from "react-icons/si";
import { motion } from "framer-motion";

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
  {
    label: "cPanel & Hosting",
    icon: <FaServer className="text-6xl text-amber-400" />,
    description: "Domain, subdomain, web/API deploy",
  },
];

const Technologies = () => {
  return (
    <section id="technologies" className="border-t border-white/10 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-emerald-200">What I use</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Technologies</h2>
          <p className="mt-4 text-base leading-8 text-zinc-400">
            Tools and frameworks that power the applications I build, from backend architecture to polished user interfaces.
          </p>
        </div>

        <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 40 }} transition={{ duration: 0.8 }} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {technologies.map((item) => (
            <motion.div
              key={item.label}
              whileHover={{ y: -4 }}
              className="group flex items-center gap-5 rounded-lg border border-white/10 bg-white/[0.04] p-5 shadow-xl shadow-black/20 transition hover:border-emerald-300/30 hover:bg-white/[0.06]"
            >
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-zinc-950/60 transition group-hover:scale-105">
                {item.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">{item.label}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Technologies;
