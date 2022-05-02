import gql from "graphql-tag";

const PROJETOS_NOME_QUERY = gql`
query NomesProjetos{
    projetos{
      data{
        id
        attributes{
          Titulo
          Slug
        }
      }
    }
  }
  `;

export default PROJETOS_NOME_QUERY;