import { motion } from "framer-motion";
import { EXPERIENCES } from "../../data";

const Experience = () => {
  return (
    <section id="experience" className="border-t border-white/10 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-emerald-200">Career journey</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Experience</h2>
          <p className="mt-4 text-base leading-8 text-zinc-400">
            Roles and responsibilities I have taken while building reliable systems for production.
          </p>
        </div>

        <div className="relative space-y-5 before:absolute before:left-4 before:top-2 before:hidden before:h-[calc(100%-1rem)] before:w-px before:bg-white/10 md:pl-12 md:before:block">
          {EXPERIENCES.map((experience, index) => (
            <motion.div
              key={`${experience.company}-${experience.year}`}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative rounded-lg border border-white/10 bg-white/[0.04] p-6 shadow-xl shadow-black/20 transition hover:border-emerald-300/30 hover:bg-white/[0.06]"
            >
              <span className="absolute -left-[2.55rem] top-7 hidden h-3 w-3 rounded-full border-2 border-zinc-950 bg-emerald-300 md:block" />
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-amber-200">{experience.year}</p>
                <h3 className="mt-3 text-xl font-semibold text-white sm:text-2xl">{experience.role}</h3>
                <p className="mt-2 text-sm text-zinc-400">{experience.company}</p>
              </div>
              <p className="mt-5 text-base leading-8 text-zinc-300">{experience.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {experience.technologies.map((tech) => (
                  <span key={tech} className="rounded-md border border-white/10 bg-zinc-950/50 px-3 py-1.5 text-sm text-zinc-300">
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
