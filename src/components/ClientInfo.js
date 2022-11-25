import React from "react";
import { FaEnvelope, FaIdBadge, FaPhone } from "react-icons/fa";

const ClientInfo = ({ client }) => {
  return (
    <>
      <h5 className="mt-5">Client Information</h5>
      <ul className="list-group">
        <li className="list-group-item">
          <FaIdBadge className="icon me-2" />
          {client.name}
        </li>
        <li className="list-group-item">
          <FaEnvelope className="icon me-2" />
          {client.email}
        </li>
        <li className="list-group-item">
          <FaPhone className="icon me-2" />
          {client.phone}
        </li>
      </ul>
    </>
  );
};

export default ClientInfo;
