import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import debuggerImage from "../../assets/debugger.png";
import translatorImage from "../../assets/translator.png";
import lungImage from "../../assets/lung.png";

const projects = [
  {
    title: "AI-Powered Code Debugging Platform",
    description:
      "A MERN application with Groq AI integration for code debugging, authentication, and chat history.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Groq API"],
    image: debuggerImage,
    github: "https://github.com/tusharpatel19/aichatbotmernstack",
  },
  {
    title: "Language Translator",
    description:
      "Real-time multilingual translation app using React and the MyMemory Translation API.",
    tech: ["React", "JavaScript", "Firebase", "API"],
    image: translatorImage,
    github: "https://github.com/tusharpatel19/language-translator",
    demo: "https://language-translator-badf8.web.app/",
  },
  {
    title: "Lung Cancer Detection System",
    description:
      "CNN-based deep learning application for lung cancer detection with a Flask backend.",
    tech: ["Python", "Flask", "TensorFlow", "CNN"],
    image: lungImage,
    github: "https://github.com/tusharpatel19/lungcancerdetection",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-slate-900 text-white py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-emerald-300 text-lg font-semibold">MY PROJECTS</p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Featured Projects
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
