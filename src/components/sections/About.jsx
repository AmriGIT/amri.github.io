import { motion } from "framer-motion";
import { useLanguage } from "../../hooks/useLanguage";
import aboutImg from "../../assets/aku.png";

const strengths = [
  { label: "Kekuatan Utama", value: "API & Microservices", accent: "text-emerald-200 hover:border-emerald-300/30" },
  { label: "Backend", value: "Spring Boot & Java", accent: "text-amber-200 hover:border-amber-200/30" },
  { label: "Frontend", value: "React & UI yang rapi", accent: "text-sky-200 hover:border-sky-200/30" },
  { label: "Pengerjaan", value: "Kode bersih dan mudah dirawat", accent: "text-rose-200 hover:border-rose-200/30" },
];

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="page-section">
      <div className="section-inner">
        <div className="section-heading">
          <div>
            <p className="section-eyebrow">{t.sections.aboutEyebrow}</p>
            <h2 className="section-title">{t.sections.aboutTitle}</h2>
          </div>
          <p className="section-intro">
            {t.sections.aboutIntro}
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -60 }} transition={{ duration: 0.8 }}>
            <div className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] p-3 shadow-2xl shadow-black/30 ring-1 ring-white/10 backdrop-blur">
              <img src={aboutImg} alt="Tentang Rahmat Amri" className="aspect-[4/3] h-full w-full rounded-md object-cover" />
            </div>
          </motion.div>

          <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 60 }} transition={{ duration: 0.8 }}>
            <p className="text-base leading-8 text-zinc-300">{t.sections.aboutText}</p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {strengths.map((item) => (
                <div key={item.label} className={`rounded-lg border border-white/10 bg-white/[0.04] p-5 shadow-xl shadow-black/20 backdrop-blur transition hover:-translate-y-1 hover:bg-white/[0.06] ${item.accent}`}>
                  <p className={`text-xs uppercase tracking-[0.18em] ${item.accent.split(" ")[0]}`}>{item.label}</p>
                  <p className="mt-4 text-lg font-semibold text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
