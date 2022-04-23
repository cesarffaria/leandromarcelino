import gql from "graphql-tag";

const ARTICLE_QUERY = gql`
  query Article($slug: String!) {
    articles(filters: { slug: { eq: $slug } }) {
      data {
        attributes {
          slug
          title
          category {
            data {
              attributes {
                slug
                name
              }
            }
          },
          content,
          image {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

export default ARTICLE_QUERY;