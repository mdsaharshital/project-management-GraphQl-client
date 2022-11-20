import { useQuery } from "@apollo/client";
import React from "react";
import { GET_PROJECTS } from "../queries/ProjectsQueries";
import ProjectRow from "./ProjectRow";
import Spinner from "./Spinner";

const Projects = () => {
  const { loading, error, data } = useQuery(GET_PROJECTS);

  if (loading) return <Spinner />;
  if (error) return <p>Something went wrong!</p>;

  console.log(data.projects);
  return (
    <>
      {data.projects.length <= 0 ? (
        <p className="text-danger mt-4"> No Projects</p>
      ) : (
        <div className="mt-4">
          <h4>Projects: {data.projects.length}</h4>
          <div className="row mt-4">
            {data.projects.map((project) => (
              <ProjectRow key={project.id} project={project} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;
