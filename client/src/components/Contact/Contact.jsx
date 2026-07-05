import { motion } from "framer-motion";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-slate-950 py-32"
    >
    

      <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-blue-500/10 blur-[140px]" />

      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-[180px]" />

    

      <motion.div
        animate={{
          y: [-20, 20, -20],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute top-24 left-24 h-8 w-8 rounded-full bg-cyan-400/30"
      />

      <motion.div
        animate={{
          y: [20, -20, 20],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute right-24 bottom-24 h-6 w-6 rounded-full bg-blue-400/30"
      />

      <motion.div
        animate={{
          x: [-20, 20, -20],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
        className="absolute top-1/3 right-1/4 h-5 w-5 rounded-full bg-cyan-300/30"
      />

      {/* ================= Container ================= */}

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Section Heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mb-24 text-center"
        >
          <span className="uppercase tracking-[6px] text-cyan-400 font-semibold">
            Contact
          </span>

          <h2 className="mt-5 text-5xl md:text-6xl font-black text-white">
            Let's Work Together
          </h2>

          <div className="mx-auto mt-6 h-1 w-28 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400" />

          <p className="mx-auto mt-8 max-w-3xl leading-8 text-slate-400">
            Have an exciting project, internship opportunity, or just
            want to say hello? I'd love to hear from you. Feel free to
            reach out anytime.
          </p>
        </motion.div>

        {/* Main Grid */}

        <div className="grid gap-16 lg:grid-cols-2 items-start">

          {/* Left Side */}

          <ContactInfo />

          {/* Right Side */}

          <ContactForm />

        </div>

      </div>
    </section>
  );
};

export default Contact;