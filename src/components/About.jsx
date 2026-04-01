import aboutImg from "../assets/aboutme.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="border-b border-white/10 pb-24 pt-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Who I am</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white">About Me</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-400">
            Saya membangun solusi backend yang kuat dan antarmuka pengguna yang intuitif untuk pengalaman aplikasi lengkap.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.8 }}
            className=""
          >
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 p-4 shadow-2xl shadow-cyan-500/10">
              <img src={aboutImg} alt="About Rahmat Amri" className="h-full w-full rounded-[1.5rem] object-cover" />
            </div>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 60 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-base leading-8 text-slate-300">{ABOUT_TEXT}</p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/75 p-6">
                <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Core Strength</p>
                <p className="mt-4 text-lg font-semibold text-white">API & Microservices</p>
              </div>
              <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/75 p-6">
                <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Backend</p>
                <p className="mt-4 text-lg font-semibold text-white">Spring Boot & Java</p>
              </div>
              <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/75 p-6">
                <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Frontend</p>
                <p className="mt-4 text-lg font-semibold text-white">React & UI polish</p>
              </div>
              <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/75 p-6">
                <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Delivery</p>
                <p className="mt-4 text-lg font-semibold text-white">Clean, maintainable code</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
