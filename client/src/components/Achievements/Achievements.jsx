import { motion } from "framer-motion";
import { FaAward, FaGithub, FaHackerrank, FaLaptopCode } from "react-icons/fa";

const achievements = [
  {
    icon: FaLaptopCode,
    title: "450+ DSA Problems",
    desc: "Solved over 450 coding problems on LeetCode.",
  },
  {
    icon: FaHackerrank,
    title: "5-Star HackerRank",
    desc: "Achieved a 5-star rating in Problem Solving.",
  },
  {
    icon: FaAward,
    title: "Oracle AI Foundations",
    desc: "Oracle Cloud Infrastructure AI Foundations Certified.",
  },
  {
    icon: FaGithub,
    title: "Open Source",
    desc: "Maintaining projects on GitHub with continuous improvements.",
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="bg-slate-950 py-32 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-emerald-300 font-semibold">ACHIEVEMENTS</p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">Milestones</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {achievements.map((item, index) => {
            const IconComponent = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                className="bg-slate-900 rounded-lg p-9 border border-slate-700 hover:border-emerald-400 transition-all min-h-64"
              >
                <div className="text-emerald-300 mb-6">
                  <IconComponent size={40} />
                </div>

                <h3 className="text-2xl font-bold">{item.title}</h3>

                <p className="text-slate-400 mt-4">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
