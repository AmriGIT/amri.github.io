import { motion } from "framer-motion";
import { ABOUT_TEXT } from "../../data";
import aboutImg from "../../assets/aboutme.jpg";

const strengths = [
  { label: "Core Strength", value: "API & Microservices", accent: "text-emerald-200 hover:border-emerald-300/30" },
  { label: "Backend", value: "Spring Boot & Java", accent: "text-amber-200 hover:border-amber-200/30" },
  { label: "Frontend", value: "React & UI polish", accent: "text-sky-200 hover:border-sky-200/30" },
  { label: "Delivery", value: "Clean, maintainable code", accent: "text-rose-200 hover:border-rose-200/30" },
];

const About = () => {
  return (
    <section id="about" className="border-t border-white/10 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-emerald-200">Who I am</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">About Me</h2>
          <p className="mt-4 text-base leading-8 text-zinc-400">
            Saya membangun solusi backend yang kuat dan antarmuka pengguna yang intuitif untuk pengalaman aplikasi lengkap.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
          <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -60 }} transition={{ duration: 0.8 }}>
            <div className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] p-3 shadow-2xl shadow-black/30">
              <img src={aboutImg} alt="About Rahmat Amri" className="aspect-[4/3] h-full w-full rounded-md object-cover" />
            </div>
          </motion.div>

          <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 60 }} transition={{ duration: 0.8 }}>
            <p className="text-base leading-8 text-zinc-300">{ABOUT_TEXT}</p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {strengths.map((item) => (
                <div key={item.label} className={`rounded-lg border border-white/10 bg-white/[0.04] p-5 transition hover:-translate-y-1 ${item.accent}`}>
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
