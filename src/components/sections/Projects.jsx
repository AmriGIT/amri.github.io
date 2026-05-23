import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import { PROJECTS } from "../../data";

const Projects = () => {
  return (
    <section id="projects" className="border-t border-white/10 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-emerald-200">Work examples</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Projects</h2>
          <p className="mt-4 text-base leading-8 text-zinc-400">
            Projects that demonstrate the scale, complexity, and impact of my work.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {PROJECTS.map((project, index) => {
            const isExternal = project.link?.startsWith("http");

            return (
              <motion.article
                key={project.title}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 36 }}
                transition={{ duration: 0.7, delay: index * 0.08 }}
                className="group overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:border-emerald-300/30 hover:bg-white/[0.06]"
              >
                <div className="overflow-hidden border-b border-white/10">
                  <img
                    src={project.image || "https://via.placeholder.com/600x400?text=Project+Image"}
                    alt={project.title}
                    className="h-60 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <h3 className="text-xl font-semibold leading-snug text-white">{project.title}</h3>
                    {project.link &&
                      (isExternal ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex w-fit items-center gap-2 rounded-lg bg-emerald-300/10 px-3 py-2 text-sm font-medium text-emerald-200 transition hover:bg-emerald-300/20 focus:outline-none focus:ring-2 focus:ring-emerald-300/40"
                        >
                          Live <FaExternalLinkAlt className="text-xs" />
                        </a>
                      ) : (
                        <span className="inline-flex w-fit rounded-lg bg-amber-200/10 px-3 py-2 text-sm font-medium text-amber-100">
                          Internal
                        </span>
                      ))}
                  </div>
                  <p className="mt-4 text-base leading-8 text-zinc-300">{project.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="rounded-md bg-zinc-950/50 px-3 py-1.5 text-sm text-zinc-300 ring-1 ring-white/10">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
