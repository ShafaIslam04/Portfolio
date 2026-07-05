import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const ProjectNavigation = ({ previous, next }) => {
  return (
    <section className="mt-28">
      <div className="flex justify-between">

        {previous ? (
          <Link
            to={`/project/${previous.id}`}
            className="rounded-xl border border-slate-700 px-6 py-4 hover:border-cyan-400 duration-300 flex items-center gap-3"
          >
            <FaArrowLeft />
            {previous.title}
          </Link>
        ) : (
          <div></div>
        )}

        {next ? (
          <Link
            to={`/project/${next.id}`}
            className="rounded-xl border border-cyan-500 px-6 py-4 text-cyan-400 hover:bg-cyan-500 hover:text-slate-950 duration-300 flex items-center gap-3"
          >
            {next.title}
            <FaArrowRight />
          </Link>
        ) : (
          <div></div>
        )}

      </div>
    </section>
  );
};

export default ProjectNavigation;