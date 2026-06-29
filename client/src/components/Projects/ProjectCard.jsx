import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  return (
    <div className="group h-full overflow-hidden rounded-lg border border-slate-700 bg-slate-800 transition-all duration-300 hover:-translate-y-2 hover:border-emerald-400 hover:shadow-[0_0_35px_rgba(52,211,153,0.35)]">

      {/* Image */}
      <div className="h-52 overflow-hidden bg-slate-900">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
        />
      </div>

      {/* Content */}
      <div className="flex h-[calc(100%-13rem)] flex-col p-6">

        <h3 className="text-2xl font-bold">
          {project.title}
        </h3>

        <p className="mt-4 flex-1 text-slate-400 leading-7">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mt-6">

          {project.tech.map((item) => (

            <span
              key={item}
              className="bg-slate-700 px-3 py-1 rounded-md text-sm"
            >
              {item}
            </span>

          ))}

        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 mt-8">

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-emerald-500 px-5 py-2 font-semibold transition hover:bg-emerald-600"
          >
            <FaGithub />
            GitHub
          </a>

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-cyan-400 px-5 py-2 font-semibold transition hover:bg-cyan-400 hover:text-slate-950"
            >
              <FaExternalLinkAlt />
              Demo
            </a>
          )}

        </div>

      </div>

    </div>
  );
};

export default ProjectCard;
