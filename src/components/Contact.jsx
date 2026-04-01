import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="pb-24 pt-20">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Let's connect</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white">Contact</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-400">
            Jika Anda ingin mengembangkan proyek baru atau membutuhkan dukungan teknis, saya siap membantu.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 text-center shadow-2xl shadow-cyan-500/10"
          >
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-3xl bg-cyan-500/10 text-cyan-300">
              <FaMapMarkerAlt className="text-xl" />
            </div>
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Location</p>
            <p className="mt-4 text-base text-slate-300">{CONTACT.address}</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 text-center shadow-2xl shadow-cyan-500/10"
          >
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-3xl bg-cyan-500/10 text-cyan-300">
              <FaPhone className="text-xl" />
            </div>
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Phone</p>
            <p className="mt-4 text-base text-slate-300">{CONTACT.phoneNo}</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 1 }}
            className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 text-center shadow-2xl shadow-cyan-500/10"
          >
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-3xl bg-cyan-500/10 text-cyan-300">
              <FaEnvelope className="text-xl" />
            </div>
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Email</p>
            <p className="mt-4 text-base text-slate-300">{CONTACT.email}</p>
          </motion.div>
        </div>

        <div className="mt-12 rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 text-center shadow-2xl shadow-cyan-500/10">
          <h3 className="text-2xl font-semibold text-white">Ready to start your next project?</h3>
          <p className="mt-4 text-base leading-7 text-slate-400">
            Kirim email atau langsung panggil untuk diskusi cepat dan solusi teknis yang terukur.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href={`mailto:${CONTACT.email}`}
              className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-8 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              Email Me
            </a>
            <a
              href={`tel:${CONTACT.phoneNo}`}
              className="inline-flex items-center justify-center rounded-full border border-white/10 px-8 py-3 text-sm text-white transition hover:border-cyan-500 hover:text-cyan-200"
            >
              Call Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
