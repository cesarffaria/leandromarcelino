import gql from "graphql-tag";

const SERVICO_QUERY = gql`
query Service($slug: String!){
  servicos(filters: { Slug: { eq:  $slug } }){
    data{
      id
      attributes{
        Nome
        Descricao
        Slug
        Imagem{
          data{
            attributes{
              url
          }
        }
      }
        Icon{
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

export default SERVICO_QUERY;