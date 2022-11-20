import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { ADD_CLIENT } from "../mutations/ClientMutation";
import { GET_CLIENTS } from "../queries/ClientQueries";
import { useMutation } from "@apollo/client";

const AddClient = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [addClient] = useMutation(ADD_CLIENT, {
    variables: { name, email, phone },
    update(cache, { data: { addClient } }) {
      const { clients } = cache.readQuery({ query: GET_CLIENTS });
      cache.writeQuery({
        query: GET_CLIENTS,
        data: { clients: [...clients, addClient] },
      });
    },
  });
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, phone);
    if (name === "" || email === "" || phone === "") {
      return alert("Please fill in all fields");
    }

    addClient(name, email, phone);
    setName("");
    setEmail("");
    setPhone("");
  };
  return (
    <>
      {/* <!-- Button trigger modal --> */}
      <div className="">
        <button
          type="button"
          className="btn btn-secondary d-flex justify-content-center align-items-center"
          data-bs-toggle="modal"
          data-bs-target="#addClientModal"
        >
          <FaUser className="icon" />
          <span>Add Clients</span>
        </button>
      </div>

      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="addClientModal"
        tabIndex="-1"
        aria-labelledby="addClientModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addClientModalLabel">
                Add Clients
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={onSubmit}>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={name}
                    required
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Your Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Your Phone
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="phone"
                    value={phone}
                    required
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="modal-footer">
                  <input
                    data-bs-dismiss="modal"
                    type="submit"
                    value="Submit"
                    className="btn btn-secondary"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddClient;
