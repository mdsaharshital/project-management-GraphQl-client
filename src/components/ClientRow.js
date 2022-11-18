import { FaTrashAlt } from "react-icons/fa";
import { useMutation } from "@apollo/client";
import { DELETE_CLIENT } from "../mutations/ClientMutation";
import { GET_CLIENTS } from "../queries/ClientQueries";

const ClientRow = ({ client, index }) => {
  const [deleteClient] = useMutation(DELETE_CLIENT, {
    variables: { id: client.id },
    update(cache, { data: { deleteClient } }) {
      const { clients } = cache.readQuery({
        query: GET_CLIENTS,
      });
      cache.writeQuery({
        query: GET_CLIENTS,
        data: {
          clients: clients.filter((client) => client.id !== deleteClient.id),
        },
      });
    },
  });
  return (
    <>
      <tr>
        <th scope="row">{index + 1}</th>
        <td>{client.name}</td>
        <td>{client.email}</td>
        <td>{client.phone}</td>
        <td>
          <button className="btn btn-danger btn-sm" onClick={deleteClient}>
            <FaTrashAlt />
          </button>
        </td>
      </tr>
    </>
  );
};

export default ClientRow;
