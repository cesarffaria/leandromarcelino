import gql from "graphql-tag";

const HOMEPAGE_QUERY = gql`
query Homepage {
  homepage {
    data {
      attributes {
        Titulo,
        Slider{
          data{
            id,
            attributes{
              url,
            }
          }
        }
        Linhas{
          ... on ComponentLinhasLinha {
              Coluna{
              id,
              Titulo,
              Conteudo
            }
          }
        }
      }
    }
  }
}`;

export default HOMEPAGE_QUERY;