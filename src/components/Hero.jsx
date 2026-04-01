import { HERO_CONTENT } from "../constants";
import profilPic from "../assets/aku.jpg";
import { motion } from "framer-motion";

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay },
  },
});

const Hero = () => {
  const fullstackStart = new Date(2016, 5);
  const fullstackEnd = new Date(2022, 9);
  const fullstackMonths =
    (fullstackEnd.getFullYear() - fullstackStart.getFullYear()) * 12 +
    (fullstackEnd.getMonth() - fullstackStart.getMonth());
  const fullstackYears = Math.floor(fullstackMonths / 12);
  const fullstackRemainingMonths = fullstackMonths % 12;
  const fullstackLabel = `${fullstackYears} years${fullstackRemainingMonths ? ` ${fullstackRemainingMonths} months` : ""}`;
  const backendStart = new Date(2022, 8);
  const now = new Date();
  const backendMonths =
    (now.getFullYear() - backendStart.getFullYear()) * 12 +
    (now.getMonth() - backendStart.getMonth());
  const backendYears = Math.floor(backendMonths / 12);
  const backendRemainingMonths = backendMonths % 12;
  const backendLabel = `${backendYears} years${backendRemainingMonths ? ` ${backendRemainingMonths} months` : ""}`;

  return (
    <section id="hero" className="relative overflow-hidden border-b border-white/10 pb-20 pt-10">
      <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 lg:flex-row lg:items-center lg:gap-20 lg:px-0">
        <div className="lg:w-1/2">
          <motion.span
            variants={fadeIn(0)}
            initial="hidden"
            animate="visible"
            className="mb-6 inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm uppercase tracking-[0.35em] text-cyan-300"
          >
            Backend & Full-Stack Developer
          </motion.span>
          <motion.h1
            variants={fadeIn(0.2)}
            initial="hidden"
            animate="visible"
            className="text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Rahmat Amri Fathoni
          </motion.h1>
          <motion.p
            variants={fadeIn(0.4)}
            initial="hidden"
            animate="visible"
            className="mt-8 max-w-2xl text-lg leading-8 text-slate-300"
          >
            {HERO_CONTENT}
          </motion.p>

          <motion.div
            variants={fadeIn(0.6)}
            initial="hidden"
            animate="visible"
            className="mt-10 flex flex-wrap gap-4"
          >
            <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-8 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400">
              Hire Me
            </a>
            <a href="#projects" className="inline-flex items-center justify-center rounded-full border border-white/10 px-8 py-3 text-sm text-white transition hover:border-cyan-500 hover:text-cyan-100">
              See Projects
            </a>
          </motion.div>

          <motion.div
            variants={fadeIn(0.8)}
            initial="hidden"
            animate="visible"
            className="mt-12 grid gap-6 sm:grid-cols-1 md:grid-cols-2"
          >
            <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/80 p-6">
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Fullstack Developer</p>
              <p className="mt-4 text-3xl font-semibold text-white">June 2016 - October 2022</p>
              <p className="mt-2 text-sm text-slate-400">{fullstackLabel} full-stack delivery</p>
            </div>
            <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/80 p-6">
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Backend Developer</p>
              <p className="mt-4 text-3xl font-semibold text-white">Sept 2022 - Present</p>
              <p className="mt-2 text-sm text-slate-400">{backendLabel} Spring Boot / Java</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={fadeIn(1)}
          initial="hidden"
          animate="visible"
          className="lg:w-1/2"
        >
          <div className="relative mx-auto max-w-xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-1 shadow-2xl shadow-cyan-500/10">
            <img src={profilPic} alt="Rahmat Amri Fathoni" className="h-full w-full min-h-[420px] object-cover" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/95 to-transparent px-8 py-8">
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Trusted by</p>
              <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-300">
                <span className="rounded-full bg-white/5 px-3 py-2">Financial apps</span>
                <span className="rounded-full bg-white/5 px-3 py-2">Enterprise systems</span>
                <span className="rounded-full bg-white/5 px-3 py-2">Web dashboards</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
