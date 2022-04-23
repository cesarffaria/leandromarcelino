import gql from "graphql-tag";

const FOOTER_QUERY = gql`
query Footer {
    footer {
      data {
        attributes {
          Colunas{
            id,
            Titulo,
            Conteudo
          }
        }
      }
    },
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

export default FOOTER_QUERY;