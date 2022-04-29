import gql from "graphql-tag";

const SERVICOS_NOME_QUERY = gql`
query NomesServicos{
    servicos{
      data{
        id
        attributes{
          Nome
          Slug
        }
      }
    }
  }
  `;

export default SERVICOS_NOME_QUERY;