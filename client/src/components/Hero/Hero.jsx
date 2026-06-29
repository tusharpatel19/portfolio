import profile from "../../assets/profile.jpeg";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaArrowDown, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Hero = () => {
  return (
    <section className="min-h-screen bg-slate-950 text-white flex items-center pt-28 pb-24">
      <div className="max-w-7xl mx-auto w-full px-6 grid lg:grid-cols-[1.1fr_0.9fr] items-center gap-16 xl:gap-24">
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-emerald-300 text-lg mb-4 font-semibold">
            Hello, I'm
          </p>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight">
            Tushar Patel
          </h1>

          <h2 className="text-2xl sm:text-3xl text-slate-300 mt-5 font-semibold min-h-10">
            <Typewriter
              words={[
                "MERN Stack Developer",
                "Software Engineer",
                "AI Enthusiast",
                "React Developer",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h2>

          <p className="text-slate-400 text-lg leading-8 mt-8 max-w-2xl">
            Computer Science graduate and MERN stack developer with a strong
            foundation in data structures, React interfaces, backend APIs, and
            AI-assisted software. I enjoy turning ideas into clean, useful, and
            responsive web applications.
          </p>

          <div className="flex flex-wrap gap-5 mt-10">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 px-5 py-3 rounded-md font-semibold transition"
            >
              View Projects <FaArrowDown />
            </a>
            <a
              href="mailto:tusharpatel190103@gmail.com"
              className="inline-flex items-center gap-2 border border-cyan-400 text-cyan-200 hover:bg-cyan-400 hover:text-slate-950 px-5 py-3 rounded-md font-semibold transition"
            >
              Contact Me <FaEnvelope />
            </a>
          </div>

          <div className="flex gap-5 mt-8 text-2xl text-slate-300">
            <a
              href="https://github.com/tusharpatel19"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="hover:text-emerald-300 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/tushar-patel-4050332a1"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="hover:text-emerald-300 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://leetcode.com/u/tushar_patel19/"
              target="_blank"
              rel="noreferrer"
              aria-label="LeetCode"
              className="hover:text-yellow-300 transition"
            >
              <SiLeetcode />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="flex justify-center lg:justify-end"
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="border border-slate-700 bg-slate-900 p-3 rounded-lg">
            <img
              src={profile}
              alt="Tushar Patel"
              className="w-72 h-72 sm:w-80 sm:h-80 object-cover rounded-lg"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
