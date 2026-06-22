import { motion } from "framer-motion";
import { FaArrowDown, FaArrowRight } from "react-icons/fa";
import { useLanguage } from "../../hooks/useLanguage";
import { getDurationLabel } from "../../utils/date";
import profilPic from "../../assets/aku.png";

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay },
  },
});

const Hero = () => {
  const { language, t } = useLanguage();
  const fullstackLabel = getDurationLabel(new Date(2016, 5), new Date(2022, 9), language);
  const backendLabel = getDurationLabel(new Date(2022, 8), new Date(), language);
  const heroParagraphs = t.hero.content.replace("{{BACKEND_EXPERIENCE}}", backendLabel).split("\n").filter(Boolean);
  const stats = [
    { value: backendLabel, label: t.hero.stats.backend },
    { value: "20+", label: t.hero.stats.projects },
    { value: "3", label: t.hero.stats.focus },
  ];

  return (
    <section id="hero" className="pb-20 pt-14 lg:pb-24 lg:pt-20">
      <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
        <div>
          <motion.span variants={fadeIn(0)} initial="hidden" animate="visible" className="inline-flex rounded-md border border-emerald-300/20 bg-emerald-300/10 px-3 py-2 text-xs font-medium uppercase tracking-[0.18em] text-emerald-200">
            {t.hero.badge}
          </motion.span>

          <motion.h1 variants={fadeIn(0.12)} initial="hidden" animate="visible" className="mt-6 max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Rahmat Amri Fathoni
          </motion.h1>

          <motion.div variants={fadeIn(0.24)} initial="hidden" animate="visible" className="mt-6 max-w-3xl space-y-4 text-base leading-8 text-zinc-300 sm:text-lg">
            {heroParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </motion.div>

          <motion.div variants={fadeIn(0.36)} initial="hidden" animate="visible" className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-300 px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:ring-offset-2 focus:ring-offset-zinc-950">
              {t.hero.contactCta} <FaArrowRight className="text-xs" />
            </a>
            <a href="#projects" className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white transition hover:border-amber-200/50 hover:bg-amber-200/10 hover:text-amber-100 focus:outline-none focus:ring-2 focus:ring-amber-200/40">
              {t.hero.projectCta} <FaArrowDown className="text-xs" />
            </a>
          </motion.div>

          <motion.div variants={fadeIn(0.48)} initial="hidden" animate="visible" className="mt-10 grid gap-3 sm:grid-cols-3">
            {stats.map((item) => (
              <div key={item.label} className="rounded-lg border border-white/10 bg-white/[0.04] p-4 shadow-xl shadow-black/20 backdrop-blur transition hover:-translate-y-1 hover:border-emerald-300/30 hover:bg-white/[0.06]">
                <p className="text-2xl font-semibold text-white">{item.value}</p>
                <p className="mt-1 text-sm leading-6 text-zinc-400">{item.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div variants={fadeIn(0.24)} initial="hidden" animate="visible" className="lg:justify-self-end">
          <div className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/40 ring-1 ring-white/10 backdrop-blur">
            <img src={profilPic} alt="Rahmat Amri Fathoni" className="h-[420px] w-full object-cover sm:h-[520px]" />
            <div className="grid gap-3 border-t border-white/10 bg-zinc-950/90 p-5 backdrop-blur sm:grid-cols-2">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-emerald-200">Fullstack</p>
                <p className="mt-2 text-sm font-medium text-white">{t.hero.fullstackPeriod}</p>
                <p className="mt-1 text-sm text-zinc-400">{fullstackLabel}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-amber-200">Backend</p>
                <p className="mt-2 text-sm font-medium text-white">{t.hero.backendPeriod}</p>
                <p className="mt-1 text-sm text-zinc-400">{backendLabel}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
