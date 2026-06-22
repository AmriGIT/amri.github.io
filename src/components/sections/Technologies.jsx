import { BiLogoPostgresql } from "react-icons/bi";
import { DiJava, DiRedis } from "react-icons/di";
import { FaNodeJs, FaServer } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { SiDocker, SiKubernetes, SiMongodb, SiSpringboot } from "react-icons/si";
import { motion } from "framer-motion";
import { useLanguage } from "../../hooks/useLanguage";

const technologies = [
  {
    label: "Java",
    icon: <DiJava className="text-6xl text-orange-500" />,
    description: "Bahasa utama untuk backend",
  },
  {
    label: "Spring Boot",
    icon: <SiSpringboot className="text-6xl text-green-500" />,
    description: "Microservices dan API",
  },
  {
    label: "React",
    icon: <RiReactjsLine className="text-6xl text-cyan-400" />,
    description: "Frontend interaktif",
  },
  {
    label: "React Native",
    icon: <RiReactjsLine className="text-6xl text-sky-400" />,
    description: "Aplikasi mobile Android dan iOS",
  },
  {
    label: "Node.js",
    icon: <FaNodeJs className="text-6xl text-green-500" />,
    description: "JavaScript sisi server",
  },
  {
    label: "MongoDB",
    icon: <SiMongodb className="text-6xl text-emerald-500" />,
    description: "Penyimpanan data NoSQL",
  },
  {
    label: "PostgreSQL",
    icon: <BiLogoPostgresql className="text-6xl text-sky-500" />,
    description: "Database relasional",
  },
  {
    label: "Redis",
    icon: <DiRedis className="text-6xl text-red-500" />,
    description: "Caching dan performa",
  },
  {
    label: "Docker",
    icon: <SiDocker className="text-6xl text-blue-500" />,
    description: "Deployment berbasis container",
  },
  {
    label: "Kubernetes",
    icon: <SiKubernetes className="text-6xl text-sky-400" />,
    description: "Orkestrasi dan scaling",
  },
  {
    label: "cPanel & Hosting",
    icon: <FaServer className="text-6xl text-amber-400" />,
    description: "Domain, subdomain, deploy web/API",
  },
];

const Technologies = () => {
  const { t } = useLanguage();

  return (
    <section id="technologies" className="border-t border-white/10 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-emerald-200">{t.sections.techEyebrow}</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">{t.sections.techTitle}</h2>
          <p className="mt-4 text-base leading-8 text-zinc-400">
            {t.sections.techIntro}
          </p>
        </div>

        <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 40 }} transition={{ duration: 0.8 }} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {technologies.map((item) => (
            <motion.div
              key={item.label}
              whileHover={{ y: -4 }}
              className="group flex items-center gap-5 rounded-lg border border-white/10 bg-white/[0.04] p-5 shadow-xl shadow-black/20 backdrop-blur transition hover:border-emerald-300/30 hover:bg-white/[0.06] hover:shadow-2xl"
            >
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-zinc-950/60 ring-1 ring-white/10 transition group-hover:scale-105">
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
