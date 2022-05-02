import gql from "graphql-tag";

const PROJETO_SINGLE_QUERY = gql`
query Projects($slug: String!){
    projetos(filters: { Slug: { eq:  $slug } }){
        data{
        id
        attributes{
            Titulo
            Descricao
            Slug
            Galeria{
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

export default PROJETO_SINGLE_QUERY;