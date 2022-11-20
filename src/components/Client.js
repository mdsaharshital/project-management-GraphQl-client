import { useQuery } from "@apollo/client";
import { GET_CLIENTS } from "../queries/ClientQueries";
import AddClient from "./AddClient";
import ClientRow from "./ClientRow";
import Spinner from "./Spinner";

const Client = () => {
  const { loading, error, data } = useQuery(GET_CLIENTS);

  if (loading) return <Spinner />;
  if (error) return <p>Something went wrong!</p>;

  console.log(data);

  return (
    <>
      {!loading && !error && (
        <div>
          <div className="d-flex justify-content-between align-items-center mt-4 mb-3">
            <h5 className=""> Clients: {data?.clients.length}</h5>
            <AddClient />
          </div>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone</th>
                  <th scope="col">#</th>
                </tr>
              </thead>
              <tbody>
                {data.clients?.map((client, index) => (
                  <ClientRow key={client.id} client={client} index={index} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default Client;
