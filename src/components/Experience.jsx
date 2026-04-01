import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section id="experience" className="border-b border-white/10 pb-24 pt-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Career journey</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white">Experience</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-400">
            Roles and responsibilities I have taken while building reliable systems for production.
          </p>
        </div>

        <div className="space-y-6">
          {EXPERIENCES.map((experience, index) => (
            <motion.div
              key={index}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-2xl shadow-cyan-500/10"
            >
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">{experience.year}</p>
                  <h3 className="mt-4 text-2xl font-semibold text-white">{experience.role}</h3>
                  <p className="mt-2 text-sm text-slate-400">{experience.company}</p>
                </div>
              </div>
              <p className="mt-6 text-base leading-7 text-slate-300">{experience.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {experience.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
