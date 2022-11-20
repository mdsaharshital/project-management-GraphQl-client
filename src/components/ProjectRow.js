import React from "react";
import { Link } from "react-router-dom";

const ProjectRow = ({ project }) => {
  return (
    <div className="col-md-6 col-lg-4">
      <div className="card mb-3">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center">
            <h3 className="card-title">{project.name}</h3>
            <Link className="btn btn-light " to={`/projects/${project.id}`}>
              view
            </Link>
          </div>
          <p className="small mt-3 mb-0">
            {" "}
            Status: <strong> {project.status}</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectRow;
