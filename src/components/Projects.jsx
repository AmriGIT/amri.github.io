import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section id="projects" className="border-b border-white/10 pb-24 pt-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Work examples</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white">Projects</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-400">
            Projects that demonstrate the scale, complexity, and impact of my work.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
        {PROJECTS.map((project, index) => (
          <div key={index} className="group overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 shadow-2xl shadow-cyan-500/10 transition">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="overflow-hidden"
            >
              <img
                src={project.image || "https://via.placeholder.com/600x400?text=Project+Image"}
                alt={project.title}
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="p-8"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                {project.link && (
                  project.link.startsWith("http") ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300 transition hover:bg-cyan-500/20"
                    >
                      Live
                    </a>
                  ) : (
                    <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
                      Info
                    </span>
                  )
                )}
              </div>
              <p className="mt-4 text-base leading-7 text-slate-300">{project.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="rounded-full bg-white/5 px-3 py-1 text-sm text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Projects;