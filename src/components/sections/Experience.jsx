import { motion } from "framer-motion";
import { useLanguage } from "../../hooks/useLanguage";
import { EXPERIENCES } from "../../data";

const Experience = () => {
  const { t } = useLanguage();

  return (
    <section id="experience" className="page-section">
      <div className="section-inner">
        <div className="section-heading">
          <div>
            <p className="section-eyebrow">{t.sections.experienceEyebrow}</p>
            <h2 className="section-title">{t.sections.experienceTitle}</h2>
          </div>
          <p className="section-intro">
            {t.sections.experienceIntro}
          </p>
        </div>

        <div className="relative space-y-5 before:absolute before:left-4 before:top-2 before:hidden before:h-[calc(100%-1rem)] before:w-px before:bg-emerald-300/20 md:pl-12 md:before:block">
          {EXPERIENCES.map((experience, index) => (
            <motion.div
              key={`${experience.company}-${experience.year}`}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative rounded-lg border border-white/10 bg-white/[0.04] p-6 shadow-xl shadow-black/20 backdrop-blur transition hover:border-emerald-300/30 hover:bg-white/[0.06] hover:shadow-2xl"
            >
              <span className="absolute -left-[2.55rem] top-7 hidden h-3 w-3 rounded-full border-2 border-zinc-950 bg-emerald-300 shadow-lg shadow-emerald-300/30 md:block" />
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-amber-200">{experience.year}</p>
                <h3 className="mt-3 text-xl font-semibold text-white sm:text-2xl">{experience.role}</h3>
                <p className="mt-2 text-sm text-zinc-400">{experience.company}</p>
              </div>
              <p className="mt-5 text-base leading-8 text-zinc-300">{experience.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {experience.technologies.map((tech) => (
                  <span key={tech} className="rounded-md border border-white/10 bg-zinc-950/50 px-3 py-1.5 text-sm text-zinc-300 shadow-sm shadow-black/20">
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
