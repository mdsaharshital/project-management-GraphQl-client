import { useQuery } from "@apollo/client";
import React from "react";
import { Link, useParams } from "react-router-dom";
import ClientInfo from "../components/ClientInfo";
import Spinner from "../components/Spinner";
import { GET_PROJECT } from "../queries/ProjectsQueries";

const Project = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_PROJECT, {
    variables: { id },
  });
  console.log(data);
  if (loading) return <Spinner />;
  if (error) return <p>Something went wrong!</p>;
  console.log(data.project.client);
  return (
    <>
      {!loading && !error && (
        <div className="mx-auto w-75 card p-5">
          <Link to="/" className="btn btn-light btn-md d-inline ms-auto">
            Back
          </Link>
          <h3 className="">{data.project.name}</h3>
          <p className="small">{data.project.description}</p>
          <p
            className={`small ${
              data.project.status === "Not Started" ? "text-danger" : ""
            } ${data.project.status === "Completed" ? "text-success" : ""} ${
              data.project.status === "In progress" ? "text-warning" : ""
            }`}
          >
            {data.project.status}
          </p>
          <ClientInfo client={data.project.client} />
        </div>
      )}
    </>
  );
};

export default Project;
