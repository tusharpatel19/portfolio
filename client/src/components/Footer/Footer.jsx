import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-14 text-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
        <div>
          <h2 className="text-3xl font-bold text-emerald-300">
            Tushar<span className="text-white">.</span>
          </h2>

          <p className="text-slate-400 mt-2">
            MERN Stack Developer | AI Enthusiast
          </p>
        </div>

        <div className="flex gap-6 text-2xl">
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
            href="mailto:tusharpatel190103@gmail.com"
            aria-label="Email"
            className="hover:text-emerald-300 transition"
          >
            <FaEnvelope />
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
      </div>

      <div className="text-center mt-12 text-slate-500 text-sm">
        Copyright {new Date().getFullYear()} Tushar Patel. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
