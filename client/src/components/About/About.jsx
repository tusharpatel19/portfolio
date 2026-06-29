import { motion } from "framer-motion";
import { FaCode, FaGraduationCap, FaLaptopCode, FaTrophy } from "react-icons/fa";

const cards = [
  {
    icon: FaGraduationCap,
    title: "Education",
    value: "B.Tech CSE (IoT)\nCGPA: 7.98",
  },
  {
    icon: FaCode,
    title: "DSA",
    value: "450+ Problems Solved",
  },
  {
    icon: FaLaptopCode,
    title: "Projects",
    value: "3 Featured Projects",
  },
  {
    icon: FaTrophy,
    title: "Achievements",
    value: "5-Star HackerRank",
  },
];

const About = () => {
  return (
    <section id="about" className="bg-slate-900 text-white py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-emerald-300 font-semibold text-lg">ABOUT ME</p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Passionate Full Stack Developer
          </h2>

          <p className="text-slate-400 mt-8 max-w-3xl mx-auto leading-8 text-lg">
            I build responsive frontend experiences with React and Tailwind,
            connect them with practical backend logic, and keep improving
            through problem solving, project work, and AI-focused learning.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mt-20">
          {cards.map((card, index) => {
            const IconComponent = card.icon;

            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                className="bg-slate-800 rounded-lg p-9 border border-slate-700 hover:border-emerald-400 transition-all"
              >
                <div className="text-emerald-300 mb-5">
                  <IconComponent size={30} />
                </div>

                <h3 className="text-xl font-bold">{card.title}</h3>

                <p className="text-slate-400 mt-4 whitespace-pre-line">
                  {card.value}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
