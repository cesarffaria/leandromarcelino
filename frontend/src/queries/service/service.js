import gql from "graphql-tag";

const SERVICOS_QUERY = gql`
query Servicos{
    servicos{
      data{
        id
        attributes{
          Nome
          Descricao
          Imagem{
            data{
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

export default SERVICOS_QUERY;