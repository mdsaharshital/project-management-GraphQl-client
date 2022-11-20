import { gql } from "@apollo/client";

const GET_PROJECTS = gql`
  query getClients {
    projects {
      name
      id
      description
      status
      client {
        name
        id
      }
    }
  }
`;
export { GET_PROJECTS };
