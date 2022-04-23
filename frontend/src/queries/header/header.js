import gql from "graphql-tag";

const HEADER_QUERY = gql`
query Header {
    header {
      data {
        attributes {
            Nome,
            Logo{
                data{
                id,
                attributes{
                    url
                }
            }
          }
        }
      }
    }
  }
`;

export default HEADER_QUERY;