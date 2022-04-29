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
        LEANDROMARCELINO{
          data{
            attributes{
              name
              url
            }
          }
        }
        Descricao
        Contacto
        Colunas{
          Titulo
          Conteudo
        }
      }
    }
  }
}
`;
export default HOMEPAGE_QUERY;