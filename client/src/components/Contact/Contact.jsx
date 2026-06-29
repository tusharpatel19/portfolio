import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const contacts = [
  {
    icon: FaEnvelope,
    title: "Email",
    value: "tusharpatel190103@gmail.com",
    href: "mailto:tusharpatel190103@gmail.com",
  },
  {
    icon: FaLinkedin,
    title: "LinkedIn",
    value: "tushar-patel-4050332a1",
    href: "https://linkedin.com/in/tushar-patel-4050332a1",
  },
  {
    icon: FaGithub,
    title: "GitHub",
    value: "tusharpatel19",
    href: "https://github.com/tusharpatel19",
  },
];

function Contact() {
  return (
    <section id="contact" className="bg-slate-900 text-white py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="text-emerald-300 text-center font-semibold">CONTACT</p>
          <h2 className="text-4xl md:text-5xl font-bold text-center mt-4">
            Let's Work Together
          </h2>
          <p className="text-slate-400 text-center mt-8 max-w-3xl mx-auto leading-8 text-lg">
            I am open to frontend, MERN stack, and software engineering
            opportunities. Reach out for projects, internships, roles, or
            collaboration ideas.
          </p>

          <div className="grid md:grid-cols-3 gap-10 mt-20">
            {contacts.map((contact) => {
              const IconComponent = contact.icon;

              return (
                <a
                  key={contact.title}
                  href={contact.href}
                  target={contact.href.startsWith("http") ? "_blank" : undefined}
                  rel={contact.href.startsWith("http") ? "noreferrer" : undefined}
                  className="bg-slate-800 border border-slate-700 rounded-lg p-9 hover:border-emerald-400 transition"
                >
                  <IconComponent className="text-emerald-300 text-3xl" />
                  <h3 className="text-xl font-bold mt-5">{contact.title}</h3>
                  <p className="text-slate-400 mt-2 break-words">
                    {contact.value}
                  </p>
                </a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
