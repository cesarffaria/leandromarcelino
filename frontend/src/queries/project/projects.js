import gql from "graphql-tag";

const PROJECTS_QUERY = gql`
query projetos($slug: String!){
  servicos (filters: { Slug: { eq:  $slug } }){
    data{
      attributes{
        projetos{
          data{
            attributes{
              Titulo
              Descricao
              Slug
              Galeria{
                data{
                  id
                  attributes{
                    name
                    url
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
`;
export default PROJECTS_QUERY;