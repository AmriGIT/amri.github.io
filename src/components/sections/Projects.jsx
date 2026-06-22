import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useLanguage } from "../../hooks/useLanguage";
import { PROJECTS } from "../../data";

const Projects = () => {
  const { t } = useLanguage();
  const [featuredProject, ...otherProjects] = PROJECTS;

  const renderProjectAction = (project, labelId) => {
    const isExternal = project.link?.startsWith("http");

    if (!project.link) {
      return null;
    }

    if (isExternal) {
      return (
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          aria-labelledby={`${labelId} ${labelId}-action`}
          className="inline-flex w-fit items-center gap-2 rounded-lg bg-emerald-300/10 px-3 py-2 text-sm font-medium text-emerald-200 transition hover:bg-emerald-300/20 focus:outline-none focus:ring-2 focus:ring-emerald-300/40"
        >
          <span id={`${labelId}-action`}>{t.projectLabels.live}</span>
          <FaExternalLinkAlt aria-hidden="true" className="text-xs" />
        </a>
      );
    }

    return (
      <span className="inline-flex w-fit rounded-lg bg-amber-200/10 px-3 py-2 text-sm font-medium text-amber-100">
        {t.projectLabels.internal}
      </span>
    );
  };

  const renderTechnologyTags = (project) => (
    <div className="mt-6 flex flex-wrap gap-2" aria-label={`${project.title} technology stack`}>
      {project.technologies.map((tech) => (
        <span key={tech} className="rounded-md bg-zinc-950/50 px-3 py-1.5 text-sm text-zinc-300 shadow-sm shadow-black/20 ring-1 ring-white/10">
          {tech}
        </span>
      ))}
    </div>
  );

  return (
    <section id="projects" className="page-section">
      <div className="section-inner">
        <div className="section-heading">
          <div>
            <p className="section-eyebrow">{t.sections.projectsEyebrow}</p>
            <h2 className="section-title">{t.sections.projectsTitle}</h2>
          </div>
          <p className="section-intro">
            {t.sections.projectsIntro}
          </p>
        </div>

        {featuredProject && (
          <motion.article
            aria-labelledby="featured-project-title"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 36 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{ duration: 0.7 }}
            className="group overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/30 ring-1 ring-white/10 backdrop-blur transition hover:-translate-y-1 hover:border-emerald-300/30 hover:bg-white/[0.06]"
          >
            <div className="grid lg:grid-cols-[minmax(0,1.08fr)_minmax(360px,.92fr)]">
              <div className="overflow-hidden border-b border-white/10 bg-zinc-950/60 lg:border-b-0 lg:border-r">
                <img
                  src={featuredProject.image || "https://via.placeholder.com/900x600?text=Project+Image"}
                  alt={`${featuredProject.title} preview`}
                  className="h-72 w-full object-cover transition duration-500 group-hover:scale-[1.02] sm:h-96 lg:h-full"
                  loading="eager"
                />
              </div>
              <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                <p className="section-eyebrow">{t.sections.projectsEyebrow}</p>
                <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <h3 id="featured-project-title" className="max-w-2xl text-2xl font-semibold leading-tight text-white sm:text-3xl">
                    {featuredProject.title}
                  </h3>
                  {renderProjectAction(featuredProject, "featured-project-title")}
                </div>
                <p className="mt-5 text-base leading-8 text-zinc-300">{featuredProject.description}</p>
                {renderTechnologyTags(featuredProject)}
              </div>
            </div>
          </motion.article>
        )}

        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          {otherProjects.map((project, index) => {
            const labelId = `project-${index + 2}-title`;

            return (
              <motion.article
                key={project.title}
                aria-labelledby={labelId}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 36 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.7, delay: index * 0.06 }}
                className="group overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] shadow-xl shadow-black/20 backdrop-blur transition hover:-translate-y-1 hover:border-emerald-300/30 hover:bg-white/[0.06] hover:shadow-2xl"
              >
                <div className="overflow-hidden border-b border-white/10 bg-zinc-950/60">
                  <img
                    src={project.image || "https://via.placeholder.com/600x400?text=Project+Image"}
                    alt={`${project.title} preview`}
                    className="h-60 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <h3 id={labelId} className="text-xl font-semibold leading-snug text-white">
                      {project.title}
                    </h3>
                    {renderProjectAction(project, labelId)}
                  </div>
                  <p className="mt-4 text-base leading-8 text-zinc-300">{project.description}</p>
                  {renderTechnologyTags(project)}
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
