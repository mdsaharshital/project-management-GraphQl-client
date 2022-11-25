import { useQuery } from "@apollo/client";
import React from "react";
import { GET_PROJECTS } from "../queries/ProjectsQueries";
import AddProject from "./AddProject";
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
        <>
          <p className="text-danger mt-4"> No Projects</p>
          <AddProject />
        </>
      ) : (
        <div className="mt-4">
          <div className="d-flex justify-content-between align-items-center mt-4 mb-3">
            <h4>Projects: {data.projects.length}</h4>
            <AddProject />
          </div>
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
