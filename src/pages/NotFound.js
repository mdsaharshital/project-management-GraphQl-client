import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center mt-5">
      <FaExclamationTriangle className="text-danger" size={"10em"} />
      <p className="lead mt-3"> Sorry, this pase does not exists</p>
      <Link to="/" className="btn btn-warning">
        Go Back
      </Link>
    </div>
  );
};

export default NotFound;
