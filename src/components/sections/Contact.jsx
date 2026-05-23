import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { CONTACT } from "../../data";

const contactCards = [
  { label: "Location", value: CONTACT.address, icon: <FaMapMarkerAlt className="text-xl" />, accent: "emerald" },
  { label: "Phone", value: CONTACT.phoneNo, href: `tel:${CONTACT.phoneNo}`, icon: <FaPhone className="text-xl" />, accent: "amber" },
  { label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}`, icon: <FaEnvelope className="text-xl" />, accent: "sky" },
];

const accentClasses = {
  amber: "bg-amber-200/10 text-amber-100 hover:border-amber-200/30",
  emerald: "bg-emerald-300/10 text-emerald-200 hover:border-emerald-300/30",
  sky: "bg-sky-200/10 text-sky-100 hover:border-sky-200/30",
};

const Contact = () => {
  return (
    <section id="contact" className="border-t border-white/10 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-emerald-200">Let&apos;s connect</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Contact</h2>
          <p className="mt-4 text-base leading-8 text-zinc-400">
            Jika Anda ingin mengembangkan proyek baru atau membutuhkan dukungan teknis, saya siap membantu.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {contactCards.map((item, index) => {
            const content = item.href ? (
              <a href={item.href} className="mt-4 block break-words text-base text-zinc-300 transition hover:text-white">
                {item.value}
              </a>
            ) : (
              <p className="mt-4 text-base text-zinc-300">{item.value}</p>
            );

            return (
              <motion.div
                key={item.label}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.6 + index * 0.2 }}
                className={`rounded-lg border border-white/10 bg-white/[0.04] p-5 shadow-xl shadow-black/20 transition hover:-translate-y-1 ${accentClasses[item.accent]}`}
              >
                <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg ${accentClasses[item.accent]}`}>
                  {item.icon}
                </div>
                <p className="text-xs uppercase tracking-[0.18em]">{item.label}</p>
                {content}
              </motion.div>
            );
          })}
        </div>

        <div className="mt-8 rounded-lg border border-white/10 bg-white/[0.04] p-6 shadow-xl shadow-black/20 sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-white">Ready to start your next project?</h3>
              <p className="mt-4 max-w-2xl text-base leading-8 text-zinc-400">
                Kirim email atau langsung panggil untuk diskusi cepat dan solusi teknis yang terukur.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a href={`mailto:${CONTACT.email}`} className="inline-flex items-center justify-center rounded-lg bg-emerald-300 px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:ring-offset-2 focus:ring-offset-zinc-950">
                Email Me
              </a>
              <a href={`tel:${CONTACT.phoneNo}`} className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white transition hover:border-amber-200/50 hover:bg-amber-200/10 hover:text-amber-100 focus:outline-none focus:ring-2 focus:ring-amber-200/40">
                Call Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
