import { motion } from "framer-motion";
import SocialLinks from "./SocialLinks";
import contactData from "./contactDta";

const ContactInfo = () => {
  return (
    <div>

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 0.7,
        }}
      >

        <span className="uppercase tracking-[5px] text-cyan-400 font-semibold">
          Let's Connect
        </span>

        <h2 className="mt-4 text-5xl font-black leading-tight">
          Get In Touch
        </h2>

        <p className="mt-6 leading-8 text-slate-400">
          I'm currently open to internships, full-time opportunities
          and freelance projects. If you have an idea or would like to
          work together, feel free to contact me.
        </p>

      </motion.div>

      {/* Contact Cards */}

      <div className="mt-12 space-y-5">

        {contactData.map((item, index) => {

          const Icon = item.icon;

          return (

            <motion.a
              key={item.id}
              href={item.link}
              initial={{
                opacity: 0,
                x: -40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.15,
                duration: 0.6,
              }}
              whileHover={{
                x: 10,
                scale: 1.02,
              }}
              className="
                group
                flex
                items-center
                gap-5
                rounded-3xl
                border
                border-slate-700
                bg-slate-900/70
                backdrop-blur-xl
                p-6
                transition-all
                duration-300
                hover:border-cyan-400
                hover:shadow-[0_0_35px_rgba(34,211,238,.18)]
              "
            >

              <div
                className="
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  bg-cyan-500/20
                  text-3xl
                  text-cyan-400
                  duration-300
                  group-hover:rotate-12
                  group-hover:scale-110
                "
              >
                <Icon />
              </div>

              <div>

                <h4 className="text-lg font-semibold text-white">
                  {item.title}
                </h4>

                <p className="mt-1 text-slate-400">
                  {item.value}
                </p>

              </div>

            </motion.a>

          );

        })}

      </div>

      {/* Social Icons */}

      <SocialLinks />

      {/* Availability Card */}

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
          delay: 0.4,
        }}
        className="
          mt-10
          rounded-3xl
          border
          border-cyan-500/30
          bg-cyan-500/10
          p-6
        "
      >

        <div className="flex items-center gap-3">

          <div className="h-3 w-3 rounded-full bg-green-400 animate-pulse"></div>

          <span className="font-semibold text-cyan-300">
            Available for Internship Freelance & full-time opportunities.
          </span>

        </div>

        <p className="mt-4 text-slate-300 leading-7">
          Usually I reply within 24 hours. Feel free to send me a
          message anytime.
        </p>

      </motion.div>

    </div>
  );
};

export default ContactInfo;