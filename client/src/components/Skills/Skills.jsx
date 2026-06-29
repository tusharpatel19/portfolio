import { motion } from "framer-motion";

const skills = [
  {
    title: "Languages",
    items: ["C++", "Java", "Python", "JavaScript"],
  },
  {
    title: "Frontend",
    items: ["React.js", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "JWT"],
  },
  {
    title: "Database",
    items: ["MongoDB", "MySQL"],
  },
  {
    title: "AI / ML",
    items: ["TensorFlow", "Flask", "CNN", "Groq API"],
  },
  {
    title: "Core CS",
    items: ["DSA", "OOP", "DBMS", "Operating Systems"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-slate-950 text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-green-400 text-lg font-semibold">TECHNICAL SKILLS</p>
          <h2 className="text-5xl font-bold mt-3">Technologies I Work With</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-slate-900 rounded-2xl border border-slate-700 p-8 hover:border-green-400 hover:shadow-[0_0_30px_#22c55e] transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-green-400 mb-6">{skill.title}</h3>
              <div className="flex flex-wrap gap-3">
                {skill.items.map((item, i) => (
                  <span
                    key={i}
                    className="bg-slate-800 px-4 py-2 rounded-lg border border-slate-700 hover:bg-green-500 hover:text-white transition"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;