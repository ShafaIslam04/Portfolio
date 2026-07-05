import { useParams } from "react-router-dom";

const ProjectDetails = () => {
  const { id } = useParams();

  return (
    <div className="py-20 text-center">
      <h1 className="text-4xl font-bold">
        Project {id}
      </h1>
    </div>
  );
};

export default ProjectDetails;