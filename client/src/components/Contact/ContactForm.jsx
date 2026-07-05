import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaPaperPlane,
  FaSpinner,
  FaCheckCircle,
} from "react-icons/fa";

import { sendMessage } from "../../services/contactService";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccess(false);
    setError("");

    try {
      await sendMessage(form);

      setSuccess(true);

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    } catch (err) {
      console.error(err);

      setError(
        err.response?.data?.message ||
          "Failed to send message. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="
      rounded-3xl
      border
      border-slate-700
      bg-slate-900/70
      backdrop-blur-xl
      p-8
      shadow-xl
    "
    >
      <h2 className="text-3xl font-bold">Send Me a Message</h2>

      <p className="mt-3 text-slate-400">
        Fill out the form below and I'll get back to you as soon as
        possible.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-10 space-y-6"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          disabled={loading}
          className="
          w-full
          rounded-2xl
          border
          border-slate-700
          bg-slate-950
          px-5
          py-4
          outline-none
          transition
          focus:border-cyan-400
          disabled:opacity-60
        "
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          disabled={loading}
          className="
          w-full
          rounded-2xl
          border
          border-slate-700
          bg-slate-950
          px-5
          py-4
          outline-none
          transition
          focus:border-cyan-400
          disabled:opacity-60
        "
        />

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={form.subject}
          onChange={handleChange}
          required
          disabled={loading}
          className="
          w-full
          rounded-2xl
          border
          border-slate-700
          bg-slate-950
          px-5
          py-4
          outline-none
          transition
          focus:border-cyan-400
          disabled:opacity-60
        "
        />

        <textarea
          rows="6"
          name="message"
          placeholder="Write your message..."
          value={form.message}
          onChange={handleChange}
          required
          disabled={loading}
          className="
          w-full
          resize-none
          rounded-2xl
          border
          border-slate-700
          bg-slate-950
          px-5
          py-4
          outline-none
          transition
          focus:border-cyan-400
          disabled:opacity-60
        "
        />

        <motion.button
          whileHover={{ scale: loading ? 1 : 1.03 }}
          whileTap={{ scale: loading ? 1 : 0.98 }}
          disabled={loading}
          className="
          flex
          w-full
          items-center
          justify-center
          gap-3
          rounded-2xl
          bg-cyan-500
          py-4
          text-lg
          font-bold
          text-slate-950
          transition
          hover:bg-cyan-400
          disabled:cursor-not-allowed
          disabled:opacity-70
        "
        >
          {loading ? (
            <>
              <FaSpinner className="animate-spin" />
              Sending...
            </>
          ) : success ? (
            <>
              <FaCheckCircle />
              Message Sent
            </>
          ) : (
            <>
              <FaPaperPlane />
              Send Message
            </>
          )}
        </motion.button>

        {success && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="
            rounded-xl
            border
            border-green-500
            bg-green-500/20
            p-4
            text-center
            text-green-300
          "
          >
            ✅ Thank you! Your message has been sent successfully.
          </motion.div>
        )}

        {error && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="
            rounded-xl
            border
            border-red-500
            bg-red-500/20
            p-4
            text-center
            text-red-300
          "
          >
            ❌ {error}
          </motion.div>
        )}
      </form>
    </motion.div>
  );
};

export default ContactForm;